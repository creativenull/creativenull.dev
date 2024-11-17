---
path: /posts/11-AI-as-coding-assistant
ogImage:
  component: Post
  props:
    publishDate: "2024-11-16 12:13"
title: AI as Coding Assistant
description: My take on AI and how it helps with my coding and what it lacks in different areas.
publishDate: "2024-11-16 12:13"
draft: false
---

So I've been using AI as my coding assistant for the past couple of months. Specifically, I've been
using [Codeium][codeium] with my [Neovim config][nvim-config]. Here are a couple of my thoughts and
how I get by using it.

Before we continue, I would like to say that I intended to write this post 1 month after I started
using Codeium. But due to some project deadlines I had to meet I couldn't make the time to write it
then. So here I am writing this after a couple more months, I think this is the best time as I get
more experience with using the coding assistant.

## How it started

I've been keeping track of the progression of AI in general ever since ChatGPT released their
[GPT-3 variant][gpt-3-release] which took the world by storm. So far it was only for chatting, it was
good with some coding examples but not that great when I asked it some complicated questions.

However, after some time has passed we started getting some good tools such as GitHub Copilot. But
I didn't want to try it out due to the pricing, and me being a cheapskate :) and also it being
primarily for VSCode and not for Neovim.

Eventually, I came up the release of Codeium and found it out was also available for Neovim. So I
jumped at the opportunity, just not immediately. It was only this year is when I created an account
and started using it extensively of a project I was currently working on at the time.

## Overall Thoughts

Now after using it for some time my overall understanding of using AI was getting clearer. I can easily
see this as a way to communicate with the machine using natural language such as English. But for
some other applications I struggle to see it being used, such as coding.

I've been seeing some more AI focused tools for coding like [Claude][claude], [Cursor IDE][cursor],
[Devin][devin] and Codeium also recently released [Windsurf][codeium-windsurf]. But they do not
support Neovim which is not what I'm looking for.

There is, however, [avante.nvim][avante-nvim] which is a Neovim plugin that does emulate the same behavior
as Cursor. But it is going through a lot of changes and is something I'm looking forward to when
they do stabilise.

But honestly, I will keep using Codeium. So far it has been a good experience, and I am getting some
good results with it especially when it comes to repeated code where it's the same pattern but
the content changes. I would want to expand it outside of just the repeated code changes and
refactoring of one file to the entire project.

[codeium]: https://codeium.com
[nvim-config]: https://github.com/creativenull/dotfiles/blob/main/config/nvim
[gpt-3-release]: https://en.wikipedia.org/wiki/GPT-3
[claude]: https://claude.ai
[cursor]: https://cursor.com
[devin]: https://devin.ai
[codeium-windsurf]: https://codeium.com/windsurf
[avante-nvim]: https://github.com/yetone/avante.nvim
