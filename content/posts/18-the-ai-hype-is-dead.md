---
path: /posts/18-the-ai-hype-is-dead
ogImage:
  component: Post
  props:
    publishDate: "2026-04-02 11:00"
title: The AI hype is dead (for me)
description: It has been 3 months since I started actively using AI in my work.
tags: personal, software, engineering, 2026
publishDate: "2026-04-02 11:00"
draft: false
---

It has been 3 months since I started actively using AI in my work. And now I can finally say that the hype for AI is
dead for me. It has become expensive, not properly following instructions and not producing the kind of code I like to
see.

I have been heavily using AI at work primarily because I was assigned a project that I was not familiar with at all.
This prompted me to use AI as much as possible to:

- Learn about the project
- Identify the issues that need to be fixed
- Have AI automatically fix them for me, while I reviewed the changes
- And while working on it, create documentation for other developers to understand about the project (and also for AI to
  understand)

AI did a great job at it initially.

At first I used `claude-code` to help me identify and fix the issue. But that got expensive quickly. Once I learned
about plan mode then the cost did go down but not by much.

Then I relied on [openrouter.ai](https://openrouter.ai) and `opencode` with different models for different tasks. So for
example, use a model like GLM-4.7 to think, plan, provide analysis and solution to the issue, then switch to a cheaper
model to make the file changes so it would cost less. The problem with this approach was that while the cost was cheap
it wasn't as great at executing it the way I had claude-code do for me, but none the less it was the better cost option.

Finally, I used `codex` with the gpt-4.1-mini model and that was actually giving great results and was cheap. It was
good at investigating and providing cleaner code changes. However, codex - while great - was very slow (gpt-5 codex
models were faster but I didn't get to use it much at the time of writing this).

I didn't use `goose` as much as I would've liked since opencode provided much better defaults for developers. Goose is a
bit more on the general AI side so it's not as effective in code changes so I have to configure it properly so some work
needs to be done.

Another new one I started using is the [pi coding agent][pi-coding-agent] which provides me with the `pi` binary and is
fairly new. It's very bare bones compared to opencode so it needs a bit of configuring before I can properly use it for
development work. I might play around with this but I don't have high hopes in getting a good setup for this (maybe for
another post because this give me vim config vibes which configuring is my addiction 😜).

This is not to say that I have stopped using AI completely it's just that what I used it was for understanding the
project and once I understood then I did not see the reason to rely on AI to fix these problems later on.

## Side-note

On a similar note, I've observed something that has baffled me at the start of this year. The fact that I actually
signed up for something that requires me to pay for using their services.

Never before have I done that in my entire career.

- I use neovim to edit my code (and before that notepad++ and brackets) - which is free
- I use github for my codebase host - which is free
- I used w3schools to learn about web development - which is free
- I use frameworks that are free and open-source
- I read the docs on the frameworks I use - which is free to read lol

The list goes on so I know that everything leading up to this year has always been free for me to access and use. Ok
maybe the laptop/PC that I use to develop is not free I paid good money for that but that's besides the point 😂.

I think I will start limiting my use for AI unless there is trivial work that needs to be done or if there is something
I do not understand that I can reach out to AI in help assisting me to understand the problem and fix it.

[pi-coding-agent]: https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent
