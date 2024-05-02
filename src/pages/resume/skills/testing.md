---
layout: ../../../layouts/SkillItemLayout.astro
name: Testing
related:
  - speaker
  - Jest
  - Mocha
  - Chai
  - Enzyme
  - react-testing-library
  - Selenium
  - PhpUnit
---

I'm convinced that testing is key to release software with confidence.

There is several levels of testing, that comes with different trade-offs.

**End to end testing** is very quick to setup, but it's slow to run, and it's
very hard to maintain, especially when one need to edit data.
I tend to use a few of them to make sure the main user flows are working, but I
don't hesitate to remove them if they become a burden.

**Integration testing** is faster to run and allows to validate high level
interaction workflows. Though, it is cumbersome to test all the edge cases,
and it requires some boilerplate.

In my opinion, Integration testing is the main level of testing for UI
components. At the very least, each UI component should come with a test file
rendering the component with valid props, this will help a lot to create a new
case when a bug is found.

**Unit testing** is the fastest to run, and allows to test all the edge cases.
I tend to use them to test a function with logic. It helps a lot to start by
writing how the function will be used and then start working on it.

> Write tests. Not too many. Mostly integration.
>
> [Guillermo Rauch](https://twitter.com/rauchg/status/807626710350839808)
