---
path: /posts/19-my-laracon-exp
ogImage:
  component: Post
  props:
    publishDate: "2026-09-02 08:00"
title: My Laracon Experience
description: A brief summary of my first ever Laracon experience
tags: personal, conference, 2026
publishDate: "2026-09-02 08:00"
draft: false
---

It has been a little over a month since I've been to Laracon. It took me a while to write this post as I got busy with
projects that needed my attention which also affected my visit to the conference (more on that later in this post).
After that I just kept procrastinating until today (the day before I publish) when I decided it's now or never 😅

I am hoping I remember as much as I can about my visit so here are my thoughts on Laracon that happened in Boston this
year of 2026.

Here is a table of contents to quickly navigate.

- [Day 0](#day-0)
- [Day 1](#day-1)
  - [Highlights of day 1](#highlights-of-day-1)
  - [Laravel updates](#laravel-updates-by-taylor-otwell)
- [Day 2](#day-2)
  - [Highlights of day 2](#highlights-of-day-2)
  - [Disaster strikes](#disaster-strikes)
- [Regrets](#regrets)
- [Looking ahead](#looking-ahead)

## Day 0

I travelled with my boss who arranged for the trip and tickets to the conference, whom I am thankful for otherwise I
wouldn't have made this trip myself. We started the journey on Monday afternoon from Trinidad and arrived in Boston late
Monday night, early Tuesday morning.

We arrived at the hotel pretty late and only had a few hours of sleep that night. I was exhausted during the travels so
I slept as much as I could so I can have the energy for day 1.

## Day 1

Our hotel was not far from the venue, about 5-10 minutes walk.

We went to register and to get our tags which is where we ran into our first minor problem I would say, there were no
printed tags for us. I'm not sure about the specifics but since it was a group ticket the system didn't handle it. But
no worries, they gave us blank tags so we could write our names on it and they allowed us to enter the venue.

::div{.my-10 .flex .justify-center}
![Laracon badge](/images/posts/19/laracon_badge_2026.jpg){style="transform: rotate(90deg);"}
::

Once we were all set, we heading into the sponsors tent and chatted with a few of them, snag some merch while we are
there. Honestly, the best part was just getting the free merch 😅

### Highlights of day 1

We headed into the main room to start the event. I won't really go in-depth into each talk that I saw on Day 1 but
provide a quick one liner-ish summary of what I saw. Laracon published their day 1 recordings that you can also watch
here: [https://www.youtube.com/watch?v=0P-VMS7JMQY](https://www.youtube.com/watch?v=0P-VMS7JMQY)

- **Pest 5 (by Nuno Maduro)** - Looking forward to get to try out pest more with this release, now that it has a better
  editor support via phpstan and a new testing engine.
- **From vibe coding to vibe engineering (by Kitze)** - A nice comedic take on the current state of software development
  but had some great points on how to utilise AI for your development workflow.
- **Cleverness is a loan (by Mary Perry)** - This is a great talk and would highly recommend watching this one if you're
  interested. The take on how you should be careful on writing code especially when Laravel already comes with the
  feature that you should use instead of writing something else and maintaining it which can become a burden.
- **The desired state (by Chris Fidao)** - I don't remember a lot about this one (sorry) but it was on deployment states
  on the cloud and how it's managed?
- **Building software engineering at the edge of your understanding (by Matt Stauffer)** - An overview on how he built
  Voxacon, a Laracon venue in Minecraft, pretty amazing if you ask me and shows what you can do when you are out of your
  comfort zone.
- **Proven package patterns (by Freek Van der Herten)** - I use a lot of Spatie packages which Freek and team have built
  so this was a nice talk to see how they come up with such packages and patterns for others to follow when building
  packages for the community.
- **Building a CLI coding agent from scratch (by Mateus Guimaraes)** - A nice overview on how agents work and how it
  evolved into a coding agent harness that we use today.
- **Upload to playback (by Joshua Alphonse)** - Getting to use Laravel with Mux (a video management platform), its a
  nice mix between having Mux handle the video side while Laravel handles the rest.
- **Whimsy-driven development (by Christina Martinez)** - This was another great talk I really liked the way Christina
  presented this, software does not need to be enterprise-y it can also be quirky but something that you get to enjoy
  building. Another one to watch if you're interested.

### Laravel updates by Taylor Otwell

The final talk was by Mr Laravel himself - Taylor Otwell! This had me more excited about using Laravel and it's not just
AI features but things that have to do with the DX around the framework that I've been looking forward to utilising
myself.

I'm not covering everything he presented just my highlights from the talk.

- **Debounced jobs** - This will make it easy for me to ensure that only one job is sent.
- **php artisan dev** - A more configurable way to run one command that will setup dev server running the php server,
  queues, vite, etc. We have this in the form of `composer run dev` but now there is configurable way so you can pick
  and choose what you want to run and even add more commands that can be part of the dev script.
- **Image** - A built-in way to manipulate images, before we used to (and still do use) the intervention package to
  handle this. With this there is one less dependency to handle.
- **CPX 2.0** - First time I've heard of this and did not know this existed in the PHP world until now, basically like
  `npx` where you do not need to install global packages to run binaries (like prettier) you can use `npx` to run them
  directly. `cpx` achieves the same but for composer packages (like running phpstan, pint, etc) without installing them
  in the global context.
- **Format blade file with Pint** - A small but much appreciated feature for folks like myself who run format to keep a
  consistent codebase.
- **Inertia Devtools** - This is a great feature, reminds me of nuxt devtools but integrated in the dev console, looking
  forward to use this when I go inertia for a new project.
- **Laravel LSP** - I've been following this for a while and am happy this is available now. I use Neovim as my editor
  and this fits perfectly for my development workflow with Laravel ❤️
- **Laravel Cloud** - New features to their cloud hosting platform, while I'm not a user of it I do like what they've
  been cooking. Things that I like: scale-to-zero and deploy apps that are not just Laravel but also other PHP apps and
  even other apps from different languages and frameworks like Next.js, Nuxt.js, Hono.js, Ruby on Rails, Go and even
  Python apps.

## Day 2

While day 1 was really exciting and jam-packed, day 2 was half as exciting simply due to me leaving early for an
emergency meeting with a client. Here are the recordings for day 2:
[https://www.youtube.com/watch?v=vii6P0vJhTw](https://www.youtube.com/watch?v=vii6P0vJhTw)

### Highlights of day 2

Let's first go over the morning/mid-morning talks that I was able to see:

- **The last software engineer (by Kent C. Dodds)** - Start the day off with some physical exercise 💪 and also a fresh
  perspective on why engineers are needed even if AI takes over most of the work.
- **Building realtime collaborative apps with Laravel (by Joe Tannenbaum)** - I've seen Joe's talks before online and
  knew what kind of talk this was going to be, I was looking forward to finally participate in it. Demonstrating Reverb
  with this scale is always impressive for me to see.
- **Git but better: intro to JJ (by Pauline Vos)** - This is something quite different from the other talks. I've heard
  of `jj` before but I've never really dove deep into it since I'm more familiar with `git`. This talk is making me want
  to take another look at `jj` again, this time apply to a project and see how it works.
- **Filament: advanced practical examples (by Povilas Korop)** - Povilas is someone I've watched on YouTube a lot, he
  covers everything Laravel (which I've watched almost all of them 🙂) and has a channel for Filament stuff as well. I'm
  very familiar with the talk he presented since I work with Filament a lot but was great to see these features of
  Filament being presented to the audience.
- **Building for agents and humans (by Gordon Diggs)** - An overview on building projects on top of Stripe called Stripe
  Projects, interesting approach to building apps especially integrating AI into it, not something I would be able to do
  since Stripe is not available in my country 😅.
- **Think Harder: how I prompt (by Thorsten Ball)** - I know Thorsten from his work on the Zed editor, outside of that
  didn't know he was working on Amp. A lot of the points he made in the talk I've been doing them myself but still great
  to see another perspective on how someone prompts.

### Disaster strikes

During the lunch break, my boss informed me of an emergency meeting with a high-value client. They were having issues
with payments not going through. This was very concerning so we quickly set up a virtual meet with them.

While looking for a place to setup and join the meeting, things weren't looking great outside as the weather took a turn
and was raining the whole day. Knowing that we can't really meeting in the venue due to noise, I had to improvise a bit.

I found a table outside, brought it under a tent, dried it a bit so the laptop would not be wet and joined the meeting.
This meeting was not a pleasant experience as we were outside in the cold due to the rain but had to make it through.

Unfortunately, the problem was something we needed to fix ASAP (by this time the event had ended so we could not stay on
premise anymore) so we headed back to the hotel for some warmth and wifi so we can comfortably work on a solution.

## Regrets

While I was in the meeting on the last day, the conference had ended and I saw the crowd come out and having a great
time socialising. It was not a great feeling to watch from afar while you're here stuck trying to fix problems
([this meme sums it up](https://tenor.com/view/squidward-meme-looking-out-the-window-sad-missing-out-sad-squidward-gif-5401562831942688207)).

My next regret was not being able to talk and take pictures with people who presented in the conference. Not just that
but people who attended the event, even though I'm an introvert I thought this could help boost me in more
conversations. I wish I could've done that on the first day, not knowing this would've happened the next day, hesitation
got the best of me on day 1.

## Looking ahead

I was left with a bittersweet moment on the last day of the conference while things didn't pan out the way I would've
hoped I'm looking forward to seeing if I can make it to the next Laracon. This time I will make sure to meet more people
and take more pictures to make it even more memorable. Here's to the next year!
