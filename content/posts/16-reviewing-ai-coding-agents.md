---
path: /posts/16-reviewing-ai-coding-agents
ogImage:
  component: Post
  props:
    publishDate: "2026-02-22 15:00"
title: Reviewing AI coding agents
description: Reviewing AI coding agents that I've been using this past couple months
tags: personal, coding, ai, tools, neovim, terminal
publishDate: "2026-02-22 15:00"
draft: false
---

I have talked about AI the on my [previous post](/posts/14-why-ai-wont-affect-me-for-now) where I briefly mentioned some
of the tools that I've been using that I rely on to get things done.

This post is more of a progress on where I am in using AI in my coding workflow from last year to now.

## Terminal Tools

So far I've been really looking forward to using more terminal tools whether they are CLI commands or full blown TUIs.
It keeps me in my best environment when I'm working which is the terminal.

### Aider

[Aider][aider] was actually the first coding assistant that I used to experiment with. Primarily because it was
open-source and free to try out.

However, as I kept using it, it started to scare me a little bit. For example, I gave it a prompt to refactor a small
code and it worked well, it did what I asked. But when it came to working on something bigger like "implement feature X
in this project, here is what to be done (...me explaining the feature and what it does)", it just took the input as is
and just ran with it. It started to modify code here and there and not where I wanted it, the code was all over the
place.

That was a problem, aider was too direct and sometimes would miss the mark or the point I was making. On top of that, I
had to explicitly give it files to modify. If I missed one file that was dependent or required as part of the feature
then I would have to start all over again.

While I initially liked it, it wasn't really working out for me.

In addition to that, aider updates were very slow. If I encountered any issues that is not explained in the docs then I
go to the issues page to figure out. The problem was that there were issues related to my problems and were fixed but
they weren't released until the following month or so which was way too long.

Due to its scary "write code based on user prompt" nature without permissions, without much of understanding of the
codebase and the fact that releases were slow, I had to give on using aider.

### Claude Code

Thanks to aider I actually didn't use any coding agent for last half of the year in 2025 and pretty much gave up on
using coding agents for the time being (well technically I was using another coding agent to experiment around but not
for any work or for my personal project which I would later mention in this post).

That is until the beginning of this year, when a client started to ask for features on a codebase that I was not
familiar with at all, has been unmaintained for a long time and outdated. Due to this pressure to get this done in a
short amount of time, I had no choice but to relying on AI to help me navigate this crisis handed to me with little to
no understanding of the codebase.

During this time I was hearing some great things about [claude code][claude-code]. While it was not open-source and only
used anthropic models, it was still something that I could test out and see if it was good or not. And this codebase was
the perfect fit to try it out.

This was also the time that I was hearing about the [$200 subscription plans][200-sub-plan] that anthropic was offering.
While I didn't want to pay for that, luckily I could use the pay as you go plan by just loading the credits and using
the API key to access it.

Initial impressions: really great! It was miles better than aider. Honestly, it gave me a breath of fresh air and made
me more productive in ways I didn't think I could've. I don't know if it is the model or claude code itself, it was just
really great in understanding the problem domain and solving it.

Now note, that I didn't use those fancy things people on the internet were talking about. No skills, no BMAD, no ralph
loop, etc. Not even a CLAUDE.md file was in the codebase. And it just easily worked on the problem with me overlooking
and making sure that it was doing it properly.

At first I ran it with it asking for permission, but then later when the Shift+Tab shortcut was introduced to
automatically grant permissions for files but not commands it was much better in asking permissions dynamically.

Overall, my experience was a positive one with claude code.

The only downside to it was the price. Wow! I had to reload my credits at least twice a day, I was adding $20 each time
and the cost just kept going up. While I was able to have it implement the majority of the feature I wanted it to work
on, the price just made me a bit more careful in my prompt to make it use less tokens.

Eventually, given the price, I started to explore other options and used claude code less often. But it was really great
to use claude code, I would still use it as an alternative but I can't keep using it due to its pricey nature.

### Codex

Which briefly took me to [codex][codex]. While I was using aider I was actually using openai's models to run my prompts
in aider. So I just used their API keys and testing out the waters using their models with aider.

My experience with codex was short, I still using it sometimes, but while it was cheaper than claude code, it took a
long time thinking to have it understand the problem and start writing the code to solve it. Its still good but I rarely
ever use it to just keep using the leftover credits I have. If anything, I think use the API to build an assistant app
for a client would work really well here, just not as a coding assistant in my opinion.

### OpenCode

[Opencode][opencode] was a tool I was actively avoiding the majority of the time last year. Mainly due to its
"controversy" and how it got split between opencode which is now and [crush][crush] which is another coding agent on the
terminal (and also another one I would like to try some day).

I got into it due to seeing a lot of activity around it, on their repo and also on twitter (where I mainly lurk). Seeing
the sheer amount of development being done on it, I decided to give it a try myself.

Using openrouter + glm-4.6 as the model gave me very good results. I then switched to kimi k2.5 which also gave me even
better results but I keep switching between the two since they are both good models.

I really liked the TUI interface, although there is quite a bit of spacing between the header and the prompt box so it's
hard to read the responses in the middle. This is also due to me having 1.5 line height on kitty so the spacing is a bit
too much, hence I wish the additional space could be removed.

I currently use it alongside goose and oh man it's good, especially with the cheaper models which make this is most
cheapest alternative to claude code.

### goose

Now that I've mentioned [goose][goose] previously I think I should mention this one too. Actually, when I gave up on
aider I switched to goose to play around with coding assistants. But it has been a more love-hate relationship with
goose than with other coding agents.

It does some coding things well but it flops pretty hard most times. This is due to it being a more general assistant
rather that a specific coding assistant like claude code, codex, opencode.

I liked it at the time I was using is after aider because it was doing similar flow (without asking for permission) and
making code edits and running commands, but later on I started to lean more on asking permissions and having more
control on what I wanted goose to do. Another thing is probably the models at the time weren't so great (which was
proven wrong went I used those same model with opencode and worked flawlessly).

I see goose as something of a hobby project by block (creators of square app) and mainly see the devs at block working
on this rather than the community when it comes to releasing changes.

With the newer models, it looks like goose seems to be doing quite well. At the time of writing this, I only use goose
to experiment with opencode and see how it solves a problem, but I still mainly rely on opencode for the majority of the
work.

There is a [roadmap on the future of goose][goose-future] and what the devs want it to do but what they have, opencode
already does it and does it well. I think they are focusing more on being more generic than specific to coding. Still
keeping my eyes out as I do like the way they are tackling things.

## Models

Alright I think models are a bit short in this post probably because I'm a consumer of it and don't really care about
how they work besides the high-level overview.

I've been using claude models in claude code, and openai models in codex and also in aider. I then switched from aider
to goose and used the same openai models there which gave me some good results.

However, I've moved my focus to [openrouter][openrouter] a lot. Not only does it provide models from openai, anthropic,
google, etc, but it also provides models from other companies whether they are free and open-source or just paid models.
This gives me the flexibility to use just one API key to access any model I would like. The downside is usually that
cloud providers who provide access to openrouter could sometimes train on your data or deprecate models. While
openrouter mentions this upfront, it also give you the ability to configure your settings to block or allow certain
providers.

While I like the free models from openrouter, I actually do not mind paying for models since they can be quite cheap.

Currently, my favorite models that I like due to their speed, cost and responsiveness are:

- [Kimi K2.5][kimi-k2.5]
- [GLM-4.7][glm-4.7]

I tend to stay away from the newer ones as they get pricey and sometimes slow due to users also accessing the same
models at the time of release. But I would switch to them later on to try them out.

## Neovim Tools

Now when it comes to AI within my editor, I've been very strict. While it makes sense to have AI help from within the
editor it can also be counter-productive. What I mean is if I have a coding assistant in my editor would I really be
needed to code? If I cannot, then whats the point of even opening the editor when I can do this from the assistant
itself?

### Windsurf (formerly Codeium)

That being said, I have been using [codeium][codeium] (now it's called windsurf) for little bit over a year. I started
using it as an alternative when GitHub copilot was the hype few years back.

So far it is a bit intrusive at times but overall it gets out of the way and is quite helpful when trying to code out
something repetitive. I will keep using it as it still allow me to write code myself instead of fully relying on AI to
do this for me as I still love writing code.

## Where to go from here

This has been quite a lengthy post I would say 😅. But this was something that was weighing on my mind for a while and
wanted to put this out there.

So far I've only used these tools in my work project and my client doesn't really care about what I use to develop
software as long as they are able to use it.

But I am still a bit reserved on using it on my personal projects simply due to me knowing my own problem domain and be
able to work on those problems myself as I do not see any issue that has me relying on AI to fix them on my personal
projects.

I think next would be to go in-depth about my process on how I use AI to solve my coding problems for a later post.

[aider]: https://github.com/Aider-AI/aider
[claude-code]: https://github.com/anthropics/claude-code
[200-sub-plan]: https://claude.com/pricing/max
[codex]: https://github.com/openai/codex
[opencode]: https://github.com/anomalyco/opencode
[crush]: https://github.com/charmbracelet/crush
[goose]: https://github.com/block/goose
[goose-future]: https://github.com/block/goose/discussions/6973
[codeium]: https://github.com/Exafunction/windsurf.nvim
[openrouter]: https://openrouter.ai
[kimi-k2.5]: https://openrouter.ai/moonshotai/kimi-k2.5
[glm-4.7]: https://openrouter.ai/z-ai/glm-4.7
