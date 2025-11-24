---
title: Contributing
nav_order: 55
layout: home
---

# Contributing
There are many ways in which anyone can contribute to the wiki.

## Confirming existing information
Simply double, triple or quintupple checking that all information presented on the wiki is factully correct is a huge help. Small oversights and errors can slip through easily, so people just making sure everything's right is a huge help! If you find anything that's wrong, either fix it yourself by making a [Pull Request](#pull-request) or filing an [issue on the GitHub](https://github.com/OfficialPixelBrush/beta-wiki/issues/new) so someone else can fix it.

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