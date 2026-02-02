---
title: Contributing
nav_order: 55
layout: home
---

# Contributing
{: .no_toc }

There are many ways in which anyone can contribute to the wiki. [Look at the repository on Github](https://github.com/OfficialPixelBrush/beta-wiki/)!

1. TOC
{:toc}

## Confirming existing information
Simply double, triple or quintupple checking that all information presented on the wiki is factully correct is a huge help. Small oversights and errors can slip through easily, so people just making sure everything's right is a huge help! If you find anything that's wrong, either fix it yourself by making a [Pull Request](#pull-request) or filing an [issue on the GitHub](https://github.com/OfficialPixelBrush/beta-wiki/issues) so someone else can fix it.

## Fixing issues
If you [find an issue on GitHub](https://github.com/OfficialPixelBrush/beta-wiki/issues) that strikes your fancy, or you think you can resolve, please do so!

## Pull Request
Making a pull request is relatively straightforward. Just fork the repo, make the changes you want to, and then just create a pull request on GitHub. This is even easier with GitHub Desktop.

# Development
You'll need to install `ruby`, `ruby-dev`/`ruby-devel` and `bundler`.

After cloning the repo you need to start it with
```bash
bundle install
```

You can start the site build up by typing
```bash
bundle exec jekyll serve
```

# Style Guide

## Values
1. All values are always `monospaced`
1. Bytes, Shorts and Integers are not differentiated (`125`, `6723`, `66241267`)
1. Floats have a lower-case `f` on their end (`0.53f`)
1. Doubles do not have a lower-case `f` (`545.42`)
1. Booleans are either `true` or `false`
1. Strings are also monospaced (`Test String`)
1. There shall never be any quotes around Strings
1. String8 and String16s are not differentiated, mainly due to how rarely String8 is used
1. If a String is empty, a singular space may be used to designate it as such (` `)
1. Unless necessary, any floating-point numbers should only be limited to 2 decimal places (`15.24`)

## Additions
1. If a Block or Item ID is used, the designated **English (US)** name must also be included in brackets (`276` (Diamond Sword))
1. The same applies to any numberical value with a different known meaning than the number itself (`1` (Swing Arm))