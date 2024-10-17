---
path: /posts/8-setup-efm-langserver-in-neovim
ogImage:
  component: Post
  props:
    publishDate: "2023-08-20 08:00"
title: Setup efm-langserver in neovim
description: A guide to setup efm-langserver, an alternative to null-ls, in neovim.
publishDate: "2023-08-20 08:00"
draft: false
---

With the [news of null-ls being archived][1] there are concerns as to what other options users now have to run linters
and formatters within an LSP-centric workflow.

While I wouldn't look for an alternative for a while (maybe in a year?)
there are some great options out there. In this post I will cover one alternative to null-ls called [efm-langserver][2]
along with a helper plugin I created to help ease its setup.

::tip
There are also other options out there like: [nvim-lint][9], [formatter.nvim][10],
[guard.nvim][11], [diagnostic-languageserver][12] and many more that I'm not aware of. However,
the focus here is only on efm-langserver.
::

## Table of Contents

1. [What is efm-langserver](#what-is-efm-langserver)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Migrating from null-ls to efm-langserver](#migrating-from-null-ls-to-efm-langserver)
5. [Final Thoughts](#final-thoughts)

## What is efm-langserver?

From the repository readme:

> General purpose Language Server that can use specified error message format generated from specified command.
> This is useful for editing code with linter.

It is written in Go and it uses the `errorformat` (`:help errorformat`) interface to parse messages/output from stdout
into neovim diagnostic. This allows you to call CLI tools such as eslint or prettier and then channels them into neovim
using the LSP protocol. It can also do hover, document symbol search, code actions and completion, but not something I
would cover in this post.

First let's install the language server. I'll show two ways: the manual way and the mason.nvim way.

## Installation

### Manual Installation

The simplest way would be to just download from the efm-langserver repository and then extract it to a location added
to your `PATH`. I usually add this to `~/.local/bin` since I've added this to my `PATH` variable, but you can add this
anywhere you prefer, as long as it is globally available.

1. Download the latest [language server from the releases page][4].

```sh
# Example to download to ~/.local/bin directory
wget -O ~/.local/bin/efm-langserver.tar.gz https://github.com/mattn/efm-langserver/releases/download/v0.0.48/efm-langserver_v0.0.48_linux_amd64.tar.gz
```

2. Extract the file.

```sh
cd ~/.local/bin
tar -xzf efm-langserver.tar.gz && rm -f efm-langserver.tar.gz
```

Now you should have `efm-langserver` binary globally available.

### Mason.nvim Installation

Now the above example can be tedious every time there is a new version of `efm-langserver`, of course you can also
automate this with a script but then again you will have to write one or find someone who already has written a small
script.

Instead we can make use of [mason.nvim][5] and its companion [mason-lspconfig.nvim][6].

Just run `:MasonInstall efm` and it will take care of the installation for you.

In addition to that, with mason-lspconfig.nvim you can add it to your `ensure_installed` so it will be automatically
installed the next time you re-open neovim. Below is the example code to do just that.

```lua
require("mason").setup()
require("mason-lspconfig").setup({
  ensure_installed = {
    -- ... other lsp servers
    'efm',
  },
})
```

## Setup

### The easy way?

The setup is quite straight forward.

1. Create the configuration for a linter/formatter for efm-langserver.
2. Add the options to `filetypes` and `settings` of the nvim-lspconfig `setup()`.

Following the [efm-langserver schema][7], we can then proceed to create configurations for any CLI tool. Let's do that
and start with an example to setup `eslint` for linting and `prettier` for formatting.

```lua
local eslint = {
  prefix = 'eslint',
  lintCommand = 'eslint --no-color --format visualstudio --stdin-filename ${INPUT} --stdin',
  lintStdin = true,
  lintIgnoreExitCode = true,
  lintFormats = { '%f(%l,%c): %trror %m', '%f(%l,%c): %tarning %m' },
  rootMarkers = { '.eslintrc' },
}

local prettier = {
  formatCommand = 'prettier --stdin --stdin-filename ${INPUT}',
  formatStdin = true,
  rootMarkers = { '.prettierrc' },
}
```

With the following configuration we can now attach them to the language of our choice. In this case we'll go for
JavaScript and JSX files.

```lua
local languages = {
  javascript = { eslint, prettier },
  javascriptreact = { eslint, prettier },
}
```

Note that `eslint`, and `prettier` are lua tables which in turn makes `javascript = { ... }`
(or `javascriptreact = { ... }`) a table of tables, which is the required format by efm-langserver.

Finally, we can add the following to our nvim-lspconfig `setup()`.

```lua
require('lspconfig').efm.setup({
  init_options = {
    documentFormatting = true,
    documentRangeFormatting = true,
  },
  filetypes = vim.tbl_keys(languages),
  settings = {
    rootMarkers = { '.git/' },
    languages = languages,
  },
})
```

Couple things to note here:

- `rootMarkers` is required by efm-langserver to attach to the `languages` provided.
- `filetypes` is required by nvim-lspconfig to let the language server attach to a neovim buffer.

Now I did mention that it was an easy task, it definitely was not 🫤. In fact, we first have to know how to even
construct the configuration by first reading the schema.

Next, we need to parse the messages (if the config is a linter this will be the `lintFormats` option) to an `efm`
friendly format so that neovim can properly display the diagnostics. I did not go over this in detail however this is a
different beast of it's own and trying to learn this is a pain in the a\*\*.

So let's take a look at a more simpler method using my plugin.

### The easy way, for real this time!

Using the plugin I created: [creativenull/efmls-configs-nvim][8], we can get rid of the configurations all together.
Since I've already done the heavy work for you, everything stays except for the `eslint` and `prettier` variables.

```lua
local eslint = require('efmls-configs.linters.eslint')
local prettier = require('efmls-configs.formatters.prettier')
```

That's it. That's all my plugin does 😅. Here is the complete code after integrating this plugin.

```lua
local eslint = require('efmls-configs.linters.eslint')
local prettier = require('efmls-configs.formatters.prettier')
local languages = {
  javascript = { eslint, prettier },
  javascriptreact = { eslint, prettier },
}

require('lspconfig').efm.setup({
  init_options = {
    documentFormatting = true,
    documentRangeFormatting = true,
  },
  filetypes = vim.tbl_keys(languages),
  settings = {
    rootMarkers = { '.git/' },
    languages = languages,
  },
})
```

This is much cleaner!

We can even go one step further and omit assigning each linter/formatter to a language and just use the defaults
included in this plugin.

```lua
local languages = require('efmls-configs.defaults').languages()

require('lspconfig').efm.setup({
  init_options = {
    documentFormatting = true,
    documentRangeFormatting = true,
  },
  filetypes = vim.tbl_keys(languages),
  settings = {
    rootMarkers = { '.git/' },
    languages = languages,
  },
})
```

Even better! Now you won't need to keep defining for each language just use the recommended defaults provided.

## Migrating from null-ls to efm-langserver

With all the information I've provided above, it's still not very helpful for a user to migrate from null-ls to
efm-langserver. So here are some examples of null-ls code and it's equivalent efm-langserver + efmls-configs code.

**Simple null-ls setup code**

```lua
-- Taken from BUILTIN_CONFIG.md
local null_ls = require("null-ls")

-- register any number of sources simultaneously
local sources = {
    null_ls.builtins.formatting.prettier,
    null_ls.builtins.diagnostics.write_good,
}

null_ls.setup({ sources = sources })
```

**Equivalent efm-langserver setup code**

```lua
local prettier = require('efmls-configs.formatters.prettier')
local prettier_languages = { 'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 'vue', 'css', 'scss', 'less', 'html', 'json', 'jsonc', 'yaml', 'markdown', 'markdown.mdx', 'graphql', 'handlebars' }
local write_good = require('efmls-configs.linters.write_good')
local languages = {}

for _,pl in pairs(prettier_languages) do
  languages[pl] = { prettier }
end

languages['markdown'] = { write_good }

require('lspconfig').efm.setup({
  init_options = {
    documentFormatting = true,
    documentRangeFormatting = true,
  },
  filetypes = vim.tbl_keys(languages),
  settings = {
    rootMarkers = { '.git/' },
    languages = languages,
  },
})
```

This is a bit verbose. But to be pedantic to null-ls, the above will be the equivalent. However, I would highly
recommend you to use the defaults (`require('efmls-configs.defaults').languages()`) as it already sets up the languages
for the tools for you.

## Final Thoughts

This post ended up being longer that I thought it would. But in conclusion, there are alternatives to null-ls like
efm-langserver and can provide the same features. I plan to make more posts like this for other alternatives like
the diagnostic-languageserver which is the same as efm-langserver but written in TypeScript. I also made a plugin for
diagnostic-languageserver called [creativenull/diagnosticls-configs-nvim][13].

---

[1]: https://github.com/jose-elias-alvarez/null-ls.nvim/issues/1621
[2]: https://github.com/mattn/efm-langserver
[3]: https://microsoft.github.io/language-server-protocol/
[4]: https://github.com/mattn/efm-langserver/releases
[5]: https://github.com/williamboman/mason.nvim
[6]: https://github.com/williamboman/mason-lspconfig.nvim
[7]: https://github.com/mattn/efm-langserver/blob/master/schema.md
[8]: https://github.com/creativenull/efmls-configs-nvim
[9]: https://github.com/mfussenegger/nvim-lint
[10]: https://github.com/mhartington/formatter.nvim
[11]: https://github.com/nvimdev/guard.nvim
[12]: https://github.com/iamcco/diagnostic-languageserver
[13]: https://github.com/creativenull/diagnosticls-configs-nvim
