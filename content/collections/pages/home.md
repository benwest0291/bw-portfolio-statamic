---
id: home
blueprint: pages
title: Home
template: pages
updated_by: 8bbbbdca-7fc9-4c6a-a206-192c6c7e2726
updated_at: 1751128865
blocks:
  -
    id: mbmcl9ua
    masthead_heading: 'Frontend Developer & <br> Product <span class="text-orange">Builde<span class="hammer-letter">r</span></span>'
    masthead_sub_heading: 'We make beautiful websites for ambitious clients. Our mission is to provide our clients with high quality, innovative digital solutions.'
    type: masthead
    enabled: true
    masthead_background_image: code/masthead-bg.png
    masthead_cv_button:
      button_text: 'Download CV'
      cv_link: google.com
    masthead_spare_button:
      text: 'About Ben'
      link: 'entry::9c4f69f3-7818-4035-927d-19d6bbb36ff5'
    masthead_rossette:
      - logos/statamic-cred.svg
  -
    id: mbtbxh1e
    breadcrumbs_show_breadcrumbs: true
    breadcrumbs_breadcrumb_separator: arrow
    breadcrumbs_home_text: Home
    type: breadcrumbs
    enabled: true
  -
    id: mcgdrb39
    type: services
    enabled: true
    services_services:
      -
        id: mcggwhu0
        title: 'Web Design'
        icon: 'fas fa-paint-brush'
        description: 'We create digital art. Every pixel is meticulously crafted for elegance, clarity, and emotional resonance. Your brand, reimagined for the modern world.'
        tags:
          - Figma
          - 'Adobe XD'
        link: '/services#web-design'
        type: web_design
        enabled: true
      -
        id: mcggwooz
        title: 'Web Development'
        icon: 'fas fa-code'
        description: 'We engineer seamless, lightning-fast experiences. Our code is invisible, but the results are unforgettable—robust, scalable, and future-proof.'
        tags:
          - Laravel
          - Vue.js
          - Statamic
        link: '/services#web-development'
        type: web_development
        enabled: true
      -
        id: mcggwrf0
        title: 'Software Development'
        icon: 'fas fa-cubes'
        description: 'Bespoke solutions for the bold. We build software that empowers, automates, and transforms—crafted for your unique vision.'
        tags:
          - PHP
          - Node.js
          - API
        link: '/services#software-development'
        type: software_development
        enabled: true
      -
        id: mcggwufo
        title: 'Consultancy & Support'
        icon: 'fas fa-headset'
        description: 'Your trusted digital partner. We offer strategic insight and white-glove support, guiding you from vision to victory—every step of the way.'
        tags:
          - Strategy
          - Support
          - Consulting
        link: '/services#consultancy'
        type: consultancy
        enabled: true
  -
    id: mbtbpj46
    technology_heading: 'My Toolkit'
    technology_technology_icons:
      - tech-icons/html5.svg
      - tech-icons/sass.svg
      - tech-icons/tailwindcss.svg
      - tech-icons/javascript.svg
      - tech-icons/alpinedotjs.svg
      - tech-icons/typescript.svg
      - tech-icons/angular.svg
      - tech-icons/react.svg
      - tech-icons/php.svg
      - tech-icons/laravel.svg
      - tech-icons/statamic.svg
      - tech-icons/figma.svg
    type: technology
    enabled: true
  -
    id: mc6av51h
    type: newsletter
    enabled: true
---
