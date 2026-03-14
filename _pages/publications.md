---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2

scholar:
  last_name: [Park]
  first_name: [ByungUk]

  style: apa
  locale: en

  source: /_bibliography/
  bibliography: papers.bib
  bibliography_template: bib
  # Note: if you have latex math in your bibtex, the latex filter
  # preprocessing may conflict with MathJAX if the latter is enabled.
  # See https://github.com/alshedivat/al-folio/issues/357.
  bibtex_filters: [latex, smallcaps, superscript]

  replace_strings: true
  join_strings: true

  details_dir: bibliography
  details_link: Details

  query: "@*"
  group_by: year
  group_order: descending
---

<p style="font-size:0.9em; color:#666;">* Indicates equal contribution</p>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
