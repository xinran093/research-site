---
nav_active: about
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m an assistant professor in [Learning Design & Leadership](https://education.illinois.edu/epol/programs-degrees/ldl) and [Instructional Design, Technology, & Organization](https://education.illinois.edu/epol/programs-degrees/instructional-design--technology---organization) at the University of Illinois Urbana-Champaign College of Education. I direct the [LC³ Lab](https://lc3-lab.github.io/lab-site/), where we design and study technologies that support meaningful learning and collaboration in authentic educational settings. I earned my Ph.D. in *Learning Sciences and Technologies* from the University of Pennsylvania, where I worked with Dr. Bodong Chen. 

My research sits at the intersection of **learning sciences**, **human-computer interaction**, and **AI in education**. Drawing on  methods from media design, software engineering, and data science, I design pedagogical approaches and technologies that support meaningful learning in authentic classroom settings.


**Research Areas**
1. <span class="research-area-title">Design and implementation of educational technologies</span>:
I study how emerging tools—such as web-based annotation platforms—support students’ knowledge building in computer-supported collaborative learning (CSCL) environments. 

2. <span class="research-area-title">AI in education</span>:
I design AI applications to support students’ knowledge building and disciplinary skills, and explore how AI can augment human learning and collaboration.

3. <span class="research-area-title">Computational research and learning analytics applications</span>:
I develop analytical frameworks and models to depict learning engagement and collaboration patterns, using techniques like network analysis and natural language processing. The goal is to create actionable insights to support meaningful educational practice.

<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0;" />


### Recent News & Current Projects
<br>
Check out our [research lab website](https://lc3-lab.github.io/lab-site/) to learn more and follow our latest updates!

<a href="https://lc3-lab.github.io/lab-site/" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-left: 1.5em;">
  <img src="{{ site.baseurl }}/images/lc3_lab_logo_thin_centered_v4.png" alt="LC³ Lab" style="max-width: 420px; width: 100%; margin: 0.5rem 0;" />
</a>

<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 2rem 0;" />

### Teaching
<br>
I teache courses in the *Learning Design & Leadership*, and *Instructional Design, Technology, and Organization* concentrations at UIUC, including:
- EPOL 483 Learning Technologies
- EPOL 590 (temp number) Technology-Mediated Learning 
- EPOL 590 (temp number) Intro to Learning Sciences
- EPOL 482 Design & Develeopmen of eLearning Systems 
- EPOL 590 (temp number) Data Informed Instructional Design (learning analytics)

### Snapshots Beyond Research

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
