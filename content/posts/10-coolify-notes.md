---
title: Coolify Notes
description: Notes on setting up my Coolify instance on my server.
publishDate: "2024-08-24 13:31"
draft: false
---

Recently, I bought a server from [Linode][5] for testing purposes. I wanted to different
environments like nodejs, deno, golang, elixir, etc on the server just for me to familiarise myself
and learn more about how to build web applications with them.

Before, I was using [Caddy][6] in the server, and would run a server using `screen`, detach from
`screen` and then point the running localhost server (and the port) in the Caddyfile.

This worked for a while, but it was getting a bit repetitive and I had to keep note of the steps:

1. Log into the machine
2. Installing the environment
3. Then opening an instance of `screen`
4. Installing the dependencies of the app into the machine
5. Finally, adding the entry into the Caddyfile

😬

## Discovering Coolify

The first time I discovered it was via the [GitHub trending repositories page][10], as I usually do
browse it to check what everyone liking these days. But this was a few years back and I didn't
really think much about it, especially, when I was still early in my career and didn't understand
the DevOps operations that's now required of me to think about whenever I have to deploy my apps.

It was only earlier this year is when I started to take more interest on Coolify and what it could
provide for me and my future applications.

## Setup

### Server Machine

So for my setup, I have a Linode machine with the following specifications:

- Ubuntu 24.04 LTS
- 4 CPUs cores
- 8 GB RAM
- 160 GB storage

I went to the Coolify website and ran the script on their self-hosted section once I SSH'd into the
machine ([Coolify.io/self-hosted][1]).

### Coolify

Once Coolify was finished with the installation. I open up the instance from the IP address provided
by Linode on my web browser and finished up registration on Coolify. Note, this registration is for
your server and not the Coolify provided cloud service.

Here are a couple other things I did after registration:

- Set a **Domain** name on the instance.
- Disable **DNS Validation** - the domain I got from namecheap wasn't validated by anything outside
  of namecheap (yet), so I disabled it.
- Setup **2FA** - although not required it's still a good thing to do once you're all set to secure
  your account and also in the event I start using this server for production.
- **Disable auto-updates** - I am using the v4 beta version of Coolify but I want to make sure what
  new update is coming through before I update.
- No **Wildcard Domain** setup - I don't need this as it is unnecessarily complicated to setup
  without relying on a third-party DNS provider. More in the next section.

#### Why not to automate wildcard domains

As I mentioned above, I did not opt for automatic wildcard domains simply because it's easier to
setup subdomains with it BUT it's very hard to get it to generate SSL certificates.

Now it's not a requirement to setup your own domain for wildcard domains. According to the
[documentation on wildcard domains][2], Coolify will use [sslip.io][8] domains by default if you ask
it to generate a domain for your Coolify resource which is nice but when it comes to production
grade applications, having a weird sslip.io domain name just won't cut it for me.

The second part to this is getting SSL certificates issued for these sub-domains. Pointing to the
docs again under the [SSL Certificates section][3], you will need a DNS provider to get you to allow
subdomains to be generated on behalf of your domain.

The problem with this approach is that I need to pay for the service, for example,
[namecheap for wildcard domains][4]. Coolify docs do mention about using Cloudflare DNS as a
provider for free, but I don't think it warrants for me to create yet another account just for this
service (isn't it the point of having a self-hosted service just to prevent creating additional
accounts?).

So what I do is manually create these sub-domains on namecheap and point them to the IP address of
the server. This solves a couple things for me:

- I can keep track of the sub-domains on namecheap, which I cannot do if on Coolify without
  searching through all the resources.
- Coolify can still generate SSL certificates for me via [Traefik][7] for those sub-domains.

For some, this could be a bit more work but this works out perfectly for me especially when it comes
to keeping track of my sub-domains being created.

## End notes

Overall, I like Coolify and what it brings to the table. At work, I've been using [Laravel Forge][9]
to get projects up and running and the experience has been almost the same with Coolify.

Although not fan of the wildcard domain generation procedure, it's not really Coolify's fault on
this as this is a business these DNS companies have and there is no control over that.

I do look forward to seeing more updates to v4 and finally see a stable release soon. In the
meantime, I'll keep experimenting with it.

[1]: https://coolify.io/self-hosted
[2]: https://coolify.io/docs/knowledge-base/server/introduction#wildcard-domain
[3]: https://coolify.io/docs/knowledge-base/traefik/wildcard-certificates
[4]: https://www.namecheap.com/security/ssl-certificates/wildcard/
[5]: https://linode.com
[6]: https://caddyserver.com
[7]: https://doc.traefik.io/traefik/
[8]: https://sslip.io
[9]: https://forge.laravel.com
[10]: https://github.com/trending/php?since=daily
