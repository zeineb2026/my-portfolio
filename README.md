# Zeineb Belaid Belli — Portfolio

Portfolio of Zeineb Belaid Belli, Doctor of Pharmacy (day community pharmacy, Monastir). A simple, responsive one-page portfolio built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Sections

- **Header**: name, job title and a call-to-action button
- **About**: a short bio
- **Skills**: a responsive grid of skills
- **Contact**: a contact form with validation, plus email and social links

## Features

- Bilingual: English / French toggle (follows the browser language, remembers the choice)
- Animated gradient hero, staggered entrance and scroll-reveal animations
- Animated counters, and an expertise card for each area with its own color
- Contact form with inline validation (shake on error), loading spinner and animated success state
- Responsive layout with an animated mobile menu
- Blurred sticky navigation that highlights the section in view
- Projects section with three animated project cards
- Light / dark mode toggle, saved in localStorage (follows the system setting until a choice is made)
- Respects the reduced-motion setting

## Getting started

Open `index.html` in your browser. That's it.

## Customize

1. In `index.html`, update the name, the numbers in `data-count`, and the email/social links.
2. In `script.js`, edit the text in the `i18n` object at the top. Every visible text has an English (`en`) and a French (`fr`) version.
3. In `style.css`, change the colors in the `:root` variables at the top.

## Note on the contact form

The form only validates input in the browser. To actually receive messages, connect it to a form service (for example Formspree or Netlify Forms) or replace it with a `mailto:` link.

## Files

```
index.html   page structure and content
style.css    styles and responsive layout
script.js    menu, active links, form validation
README.md    this file
```
