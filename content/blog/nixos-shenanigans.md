+++
date = '2025-11-17T09:15:04Z'
title = 'NixOS shenanigans'
+++

![](/images/blog/nixos-shenanigans/banner.jpg)

over the past few days whilst i have been working on this site, i have also been toying around nixos and the nix language, mainly out of my own fustrations with other more traditional Linux distributions and the way they handle packaging and system configuration. it's like they're rigged to blow at a random point in time and i just have to pray that i am lucky enough to not have it blow before i start distrohopping again, lol... 

so i decided to check out nixos, as it had an entirely different approach to all of that which i found much more appealing - and was much more similar to the way i work in basically everything else i do with my computer. every little bit of the system's configuration and packages is managed through a central set of *config files*, allowing a similar kind of reproducability you'd get from, for example, a Docker container! (this is how i view it personally, anyways)

so instead of having to wrestle with a bunch of different command line tools and package managers and configs spread across the entire system like i am normally used to, i can instead configure EVERYTHING within my NixOS config and it'll **just work**. it's fucking gr8. and i can easily bring this config over to any other computer running NixOS, in my case via a [Git repository](https://git.sr.ht/~minilop/dotfiles), and it'll be configured in exactly the same way! this also applies to things like dev environments, where you can easily spin up a temporary shell with the tools you need for a specific project. (i'm even doing it whilst i write this post!) like i said, fucking gr8888888

in addition to this, NixOS will create snapshots of your system every time you update your configuration, so that if anything goes nuclear for whatever reason, you can have a previous functioning version of your system to fall back on. this is particularly great for me because i am prone to fooling around with my system way more than i really should be, so its good to know that if i bugger anything up at any point i can just load up a previous build and fix whatever the hell i messed up, lol.

so yeah, that's all i really have to say for now. i've been using nixos purely on my thinkpad so far, but as i get more comfortable with it i will eventually get it set up on my main pc - which shouldn't be much effort at all for the reasons i mentioned earlier... 

it's definitely not for everyone, a lot of people most certainly do not want to be spending time twiddling around in a config file like i do. but for the people who do already do a lot of things like that, give nixos a try! it's good fun.
