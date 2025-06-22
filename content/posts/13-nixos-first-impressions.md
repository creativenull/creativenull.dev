---
path: /posts/13-nixos-first-impressions
ogImage:
  component: Post
  props:
    publishDate: "2025-06-22 12:00"
title: "NixOS: First Impressions"
description: My quick review of using NixOS for the first time
tags: review, nixos, linux
publishDate: "2025-06-22 12:00"
draft: false
---

I've been using NixOS for a couple months now. I even made a [configuration file][nixos-config-dotfiles] and added to my
dotfiles because of the amount tweaks I was doing on it.

Here are my quick impressions.

## First Thoughts

### File based approach

When I heard that nixos relies on a configuration file to build the system, I was quite intrigued. Primarily because I I
love configuring things (hence how I got into configuring my nvim config almost every week).

I liked this approach so it got me to try it out.

### Nixpkgs

Nixpkgs offers a huge collection of packages for the system. It's also great that I could provide this list of packages
via the configuration file and be able to split them up between system and user packages.

I was able to install my dependencies for my local development environment within the same config file. I was also able
to get setup with my nvim configuration with additional packages, albeit a little tweaking was needed to make it work.

### Easy to install

All I had to do was run the live CD (running GNOME) and follow the installation instructions so it was quite easy.

I did try out the command line only ISO and followed the steps from their manual but given my limited knowledge of how
on installing a linux distro via the command line, like how to partition a disk, I was not able use this method without
spending a lot of time.

In the end, I did rely on some AI assistance to help me install via the command line and setup disk partitions. But I
opted to just keep my installation workflow by relying on the live CD method.

## Problems that I encountered

While the setup and use of nixos is really good, there were some parts of the system that I had encountered problems
with.

These issue mostly affected my development setup and really had nothing to do with nixos itself. But it was definitely
hampering my workflow as I was used to on my main Ubuntu system.

Well actually there was one issue with just nixos itself, that was deciding where to install the packages. Was it in the
user or system directory? I ended up installing everything on the system primarily because I was the only user on the
machine.

Coming back to my development issues, I was able to get neovim installed with just a simple entry in the configuration
file. However, getting to install other dependencies that I use alongside neovim was a bit of a challenge.

For example, I use the [wilder.nvim plugin][wilder.nvim] to get auto-completion in ex-commands. Since wilder requires
installing additional python packages (like, pynvim which is not bundled with the neovim nixpkg, or that it is isolated
from the system) I have specify it to be installed system-wide.

But then I also need to have the core python packages that is needed by the system. I don't know why, I'm not
knowledgeable in the python ecosystem but I had to install `wheel`, `setuptools` and `pip` in the system packages so
that I would be able to install `pynvim`.

```nix
environment.systemPackages = with pkgs; [
  # ...
	(python312.withPackages (py: [
		py.pip
		py.wheel
		py.setuptools
		py.pynvim
	]))
];
```

Another dependency I use is the [denops plugins][denops], which rely on deno to be installed in the system to run those
plugins. One of them, my own plugin [projectlocal.vim][projectlocal.vim], relies on deno to be installed in the system.
However, this was an easy install. I just had to specify deno in the configuration file as a system package.

In addition to denops, there is another plugin which is the [denops-shared-server][denops-shared-server] that I use to
let denops run in the background in a systemd process. That way it's faster to load denops plugins.

However, nixos does not have a proper way to get the shared server running. Every time I restart the system I have to
also manually restart the shared server because it will error out when I open nvim after a system restart.

I did try to add a systemd entry in the configuration file but since this is a user systemd process, I don't know how to
set it up and I'm not able to find any documentation on how to do it.

### Note on flakes and home-manager

As a side note, I did look into flakes to see if I can version control my configuration but again like I mentioned in my
experience with denops and its shared server setup as a systemd process, it's extremely difficult to find article that
could further expand of how to version lock it instead of just listing out the packages from different sources. I need
to find an in-depth article, to which I have yet to find on nix flakes.

As for home-manager, since I already have a script for my dotfiles, I don't see any need for it. While I did try it, I
got confused as to how I would use it with nix flakes and how does it factor in the nixos configuration file.

## Conclusion

Anyway, while there are still some problems to fix, I feel like nixos is still a great entry for me to tinker around
with the configuration file. I will still continue to work on the file, albeit when I get some more time out of work.

[nixos-config-dotfiles]: https://github.com/creativenull/dotfiles/blob/a3d87e618d7d0a105c7b2a5e5de6a10bfb6a0197/scripts/nixos/configuration.nix
[wilder.nvim]: https://github.com/gelguy/wilder.nvim
[denops]: https://github.com/vim-denops/denops.vim
[projectlocal.vim]: https://github.com/creativenull/projectlocal.vim
[denops-shared-server]: https://github.com/vim-denops/denops-shared-server
