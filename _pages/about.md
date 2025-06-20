---
nav_active: about
permalink: /
title: "Hi!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m an assistant professor in [Learning Design & Leadership](https://ldlprogram.web.illinois.edu/) and [Instructional Design, Technology, & Organization](https://education.illinois.edu/epol/programs-degrees/instructional-design--technology---organization) at the University of Illinois Urbana-Champaign College of Education. I earned my Ph.D. in Learning Sciences and Technologies from the University of Pennsylvania, working with Dr. Bodong Chen. My research sits at the intersection of **learning sciences**, **learning analytics**, and **educational technologies**. Drawing on  methods from media design, software engineering, and data science, I design pedagogical approaches and technologies that support meaningful learning in authentic classroom settings.


**Research Areas**
1. <span class="research-area-title">Design and implementation of educational technologies</span>:
I study how emerging tools—such as web-based annotation platforms—support students’ knowledge building in computer-supported collaborative learning (CSCL) environments. 

2. <span class="research-area-title">AI in education</span>:
I design AI applications to support students’ knowledge building and disciplinary skills, and explore how AI can augment human learning and collaboration.

3. <span class="research-area-title">Computational research and learning analytics applications</span>:
I develop analytical frameworks and models to depict learning engagement and collaboration patterns, using techniques like network analysis and natural language processing. The goal is to create actionable insights to support meaningful educational practice.

<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0;" />


### Recent News
- [conference] <strong>June 2025:</strong> Attended ISLS 2025 in Helsinki and presented: paper [The Evolution of Shared Artifacts in CSCL: A Knowledge Synthesis Intervention for Productive Collaborative Discourse](https://osf.io/preprints/edarxiv/rcpj3_v1), symposium [Towards Actionable Collaborative Discourse Analysis: Bridging Advanced Computational Analysis with Practical Implementation](https://osf.io/preprints/osf/m4ste_v1)
- [conference] <strong>June 2024:</strong> I will attend ISLS 2024 in Buffalo, presenting a symposium: Bridging Social Annotation Practice with Perspectives from the Learning Sciences and CSCL. Check out our website at: https://social-annotation-ed.pubpub.org/isls24-symposium.
- [conference] <strong>April 2024:</strong> I will attend AERA 2024 in Philadelphia.
- [conference] <strong>October 2023:</strong> I will attend CSCW 2023 in Minneapolis.  [preprint](https://arxiv.org/abs/2307.04872)
- [conference] <strong>June 2023:</strong> I will attend ISLS 2023 in Montreal this summer, presenting [Understanding Idea Creation in Collaborative Discourse through Networks: The Joint Attention-Interaction-Creation (AIC) Framework](https://arxiv.org/abs/2305.16262)

<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0;" />

### Through My Lens

<div class="travels-gallery">
  {% assign travel_images = site.static_files | where_exp: "file", "file.path contains 'images/travels/'" %}
  {% for file in travel_images %}
    {% assign ext = file.extname | downcase %}
    {% if ext == ".jpg" or ext == ".jpeg" or ext == ".png" or ext == ".gif" %}
      <a href="{{ file.path | relative_url }}">
        <img src="{{ file.path | relative_url }}" alt="Travel Photo" />
      </a>
    {% endif %}
  {% endfor %}
</div>

<script src="{{ site.baseurl }}/assets/js/travels-preview.js"></script>
