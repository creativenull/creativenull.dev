---
path: /posts/17-how-i-would-build-software-in-2026
ogImage:
  component: Post
  props:
    publishDate: "2026-03-02 08:00"
title: How I would build software in 2026
description: A quick overview on how I used to build last year and what its going to look like in 2026
tags: personal, software, eningeering, 2026
publishDate: "2026-03-02 08:00"
draft: false
---

Continuing on from [my previous post](/posts/16-reviewing-ai-coding-agents) where I give my review on the AI tools that
I've had the opportunity to use.

In this post, I will go through how I used to code last year and how that has or will be changing this year with the
inclusion of AI in my development workflow.

Last year I was still a bit apprehensive on using AI for work. This is primarily due to not really seeing much movement
on having a terminal-first AI tools ready to be used. I knew of some being built at the time like aider and OpenCode but
they were still not up to par as to what I wanted to do with them. So I was just experimenting with them but not for
actual projects.

In the meantime, I was still using my regular workflow which was neovim and kitty, additionally, writing my own neovim
plugins to help to get my workflow working faster like [web.nvim][web.nvim] to help bootstrap tooling for web
development and [projectlocal.vim][projectlocal.vim] to help setup LSPs, formatters and linter quickly on different
projects.

## How it's going to be for 2026

With the start of this year, I've invested heavily on AI to help me with my development. January was a time where I
heavily relied on Claude to help me with on-boarding projects that I was fairly new to. Claude costed me a lot, at this
pace I wouldn't be doing too good (financially) if it continued.

I had to look for other alternatives. And thankfully I did find something, in the form of OpenRouter.

[OpenRouter][openrouter] is a platform that provides access to a wide range of models from openai, anthropic, google,
etc. It was also here that I was also to get access to cheaper and even free models that are on par to the big models.

So far I've been using them the last month of February and honestly I've been really enjoying them. They are quite
capable of problem-solving up to the standard that I was looking for last year. Don't get me wrong models from claude,
openai, google, etc are still much better but given the cost, I think I am okay with using the cheaper models to at
least help problem solve and have me still able to write code.

### My current workflow

As of now, my workflow with AI is quite simple. I have 3 tabs open in kitty:

1. Neovim
2. An instance of [OpenCode][opencode] or [goose][goose] (Running either [Kimi K2.5][kimi-k2.5] or [GLM-4.7][glm-4.7])
3. Running processes like `npm run dev` or `composer dev` to run the server

I edit my code on neovim and when I get stuck I switch to OpenCode in plan mode and have it investigate the issue I'm
having. Here is how I follow the process:

- Once its able to provide some suggestions and it seems like a trivial fix, then I go back to neovim and make the
  changes myself.
- When it's something complex that might require some time for me to understand, then I let OpenCode run in build mode
  and have it follow through its suggested plan, once it's done then I verify the code it wrote and if there is
  something that I want to tweak then I go back to neovim and update the code.
- Otherwise, I would come back to OpenCode and suggest additional fixes to the code in build mode.

This also applies to goose. However in goose's case the plan mode works just once, so as soon as I send the first prompt
that it will make the plan and immediately would want to exit the plan mode to execute the code changes. This can be a
make or break scenario but its the alternative if OpenCode fails to provide good results.

What I usually use goose is for one-time prompts. For example, to have it run audit commands and fix the issues. So I
have an alias for it to run the `@goose` command in the terminal.

```bash
alias fix-npm-audit="@goose 'Run npm audit and fix any vulnerabilities reported.'"
```

Running `fix-npm-audit` would then trigger goose to either read my previous terminal output or run the command to see
the output and fix those npm audit vulnerabilities.

## Overall

I would like to keep using this pattern that I am now used to, which is to plan and then execute the code changes where
it makes sense, otherwise use my own knowledge and make the code changes myself while AI suggests solutions to the
problem.

Let's see how long I can keep this to help increase my productivity as make myself worth the value for any client that
would be interested in my work whether it would be with or without AI in my development workflow. But so far I'm liking
this flow.

[goose]: https://github.com/block/goose
[opencode]: https://github.com/anomalyco/opencode
[projectlocal.vim]: https://github.com/creativenull/projectlocal.vim
[web.nvim]: https://github.com/creativenull/web.nvim
[openrouter]: https://openrouter.ai
[kimi-k2.5]: https://openrouter.ai/moonshotai/kimi-k2.5
[glm-4.7]: https://openrouter.ai/z-ai/glm-4.7
