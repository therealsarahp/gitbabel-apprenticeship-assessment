# Apprenticeship Take-Home Assessment

## Overview

This is our __Apprenticeship Take-Home Assessment__, it is a simplified version of our normal applicant assessment -- we provided code to get you started and have reduced the amount of implementation effort to just one `function`.

The goal of the assessment is two fold, first to give you a sense of how our platform works and to ensure you are capable of reading code and writing some basic logic.  You will probably spend more time learning/reading the code provided than the time to write the implementation which should only require 8-10 lines of code and should be easy to complete in 10-20 minutes.

## Assignment Details

### The Setup

We have provided a folder `docs/` which contains several [Markdown](https://www.markdownguide.org/getting-started/) documents for various __Inventors__.  At gitBabel, the core of what we do is process __Markdown__.  If you look at the individual markdown documents you will see they contain in the top portion a block

```yaml
---
location: Europe
acheivement: inventor
tags: photography printing 
---
```

This portion is referred to as __Front Matter__ which is structured meta-data that allows you to embed custom variables inside of markdown.  It is supported by static-site generators like [Jekyll](https://jekyllrb.com/docs/front-matter/) and [Hugo](https://gohugo.io/content-management/front-matter/).  

__Front Matter__ uses a syntax known as [YAML: Yet-Another-Markup-Language](https://yaml.org/).  If you aren't familiar with `YAML` it's fine.  It is easy to learn/read, and it is recommend you have some familiarity with it as it is used widely in the industry to configure applications.

### The Deliverable

Your task is to process the __Markdown__ files and identify which __Inventors__ are tagged with `gitBabel`.  __HINT:__ you can see an example -- [Edgar Codd](docs/edgar-codd).

You're task is to run `node run-solution.js` and have the script display the set of inventors.  There is also a set of unit-tests to check your work via a github-action.  Your implementation will go inside of `lib/checkInventorsTagged.js`.  The file will have additional notes/comments to help you get started.

#### We Provide

- We have provided the code `lib/loadParseMarkdown` which does the heavy lifting of reading in the markdown and building the data-structure.
- We also provide `utils/marshallYaml` which unpacks the __Markdown__ [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and we give a simplified `[{title: 'Edgar Codd', yaml: [{...keys/values...}]}]`

## Submission

Instructions for submission are as follows:

- You should have placed your solution inside of your own private github repository
- You should have created a branch called `solution` and opened a pull-request against `main`
- Once your pull-request is comepleted --  invite [mgan59](https://github.com/mgan59) and [plaetzaw](https://github.com/plaetzaw) for a review.
