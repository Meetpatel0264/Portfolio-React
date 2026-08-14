# React Component-Based Portfolio --- Meet Patel

A modern, responsive personal portfolio website built with **React 18 +
Vite 5**. The project is organized into reusable React components,
separated data files, routed service/blog detail pages, responsive
layouts, animated UI, project filtering, testimonials carousel, contact
form integration, and downloadable resume support.

> **Project type:** Frontend portfolio / React SPA\
> **Author:** Meet Patel\
> **Build tool:** Vite\
> **UI:** Bootstrap 5 + custom CSS\
> **Routing:** React Router DOM\
> **Form service:** EmailJS\
> **Deployment-ready:** Yes --- the production build is generated in
> `dist/`

------------------------------------------------------------------------

## 1. Project Overview

This project is a single-page personal developer portfolio with
additional detail routes.

### Main portfolio sections

-   Header / Navigation
-   Hero section
-   Services
-   About Me
-   Work / Projects
-   Experience
-   Skills
-   Testimonials
-   Blog
-   Contact
-   Footer

### Additional pages/routes

-   `/` --- Main portfolio
-   `/service/:slug` --- Service detail page
-   `/blog/:slug` --- Blog detail page

The project uses React components instead of putting the entire website
into one large JSX file. Static content is stored in dedicated data
modules so that content can be changed without rewriting the UI
components.

------------------------------------------------------------------------

# 2. Technology Stack

## Core

  Technology   Version / Usage
  ------------ --------------------------
  React        18.2.0
  React DOM    18.2.0
  Vite         5.4.21
  JavaScript   ES Modules
  Node.js      Recommended: Node 20 LTS
  npm          Comes with Node.js

## UI / Styling

  Package            Purpose
  ------------------ -----------------------------------------------------
  Bootstrap          5.3.8
  Custom CSS         Portfolio styling, responsive design and animations
  Remix Icon         Icons
  @fontsource/sora   Sora font

## React libraries

  -----------------------------------------------------------------------
  Package                             Purpose
  ----------------------------------- -----------------------------------
  react-router-dom                    Application routing

  react-router-hash-link              Navigation to sections using hash
                                      links

  react-scroll                        Scroll-related UI support

  react-type-animation                Animated role/type text

  react-countup                       Animated statistics

  react-intersection-observer         Detecting when statistic elements
                                      enter the viewport

  swiper                              Testimonials carousel

  lottie-react                        Loading animation

  @emailjs/browser                    Contact form email sending
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 3. Requirements

Install these before running the project:

1.  Node.js
2.  npm
3.  VS Code or another code editor
4.  A modern web browser

### Recommended environment

``` text
Node.js: 20 LTS
npm: 10+
Browser: Chrome / Edge / Firefox
Operating System: Windows / macOS / Linux
```

This project does not use a C/C++ compiler.

React code is JavaScript/JSX. Vite runs the development server and
bundles/transforms the application for production.

------------------------------------------------------------------------

# 4. How the Project Works

The application starts from:

``` text
index.html
   ↓
src/main.jsx
   ↓
src/App.jsx
   ↓
React Router
   ↓
Home / ServiceDetails / BlogDetails
   ↓
Reusable components
   ↓
Data files + assets
```

### Entry point

`index.html` contains:

``` html
<div id="root"></div>
```

Then it loads:

``` html
<script type="module" src="/src/main.jsx"></script>
```

### React entry

`src/main.jsx`:

-   Creates the React root
-   Loads Bootstrap CSS/JS
-   Loads Swiper CSS
-   Loads Remix Icons
-   Loads Sora font
-   Enables `BrowserRouter`
-   Renders `<App />`
-   Uses `React.StrictMode`

### Application component

`src/App.jsx`:

-   Displays the initial loader for 2 seconds
-   Loads the animated particle background
-   Defines application routes

------------------------------------------------------------------------

# 5. Complete Project Structure

``` text
Portfolio-React-main/
│
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
├── public/
│   └── assets/
│       ├── Meet-Resume.pdf
│       │
│       ├── css/
│       │   ├── headline.css
│       │   ├── media.css
│       │   └── style.css
│       │
│       └── images/
│           ├── profile-img.png
│           ├── about-img.png
│           ├── logo-01.png
│           ├── logo-2.png
│           ├── work-1.png
│           ├── work-2.png
│           ├── ...
│           ├── work-15.png
│           ├── skill-1.jpg
│           ├── skill-2.svg
│           ├── ...
│           ├── skill-12.png
│           ├── Testimonial-1.jpg
│           ├── ...
│           ├── Testimonial-5.jpg
│           ├── blog-1.png
│           ├── blog-2.png
│           ├── blog-3.jpg
│           └── other portfolio images
│
└── src/
    │
    ├── App.jsx
    ├── main.jsx
    │
    ├── assets/
    │   └── loader.json
    │
    ├── components/
    │   │
    │   ├── Home.jsx
    │   │
    │   ├── About/
    │   │   ├── About.jsx
    │   │   ├── AboutContent.jsx
    │   │   ├── AboutImage.jsx
    │   │   ├── ContactInfo.jsx
    │   │   └── ContactItem.jsx
    │   │
    │   ├── Blog/
    │   │   ├── Blog.jsx
    │   │   ├── BlogCard.jsx
    │   │   ├── BlogGrid.jsx
    │   │   └── BlogHeader.jsx
    │   │
    │   ├── BlogDetails/
    │   │   ├── BlogBanner.jsx
    │   │   ├── BlogContent.jsx
    │   │   ├── BlogPoint.jsx
    │   │   └── BlogSection.jsx
    │   │
    │   ├── Common/
    │   │   ├── Button.jsx
    │   │   └── SectionTitle.jsx
    │   │
    │   ├── Contact/
    │   │   ├── Contact.jsx
    │   │   ├── ContactForm.jsx
    │   │   ├── ContactHeader.jsx
    │   │   ├── ContactInfo.jsx
    │   │   └── ContactItem.jsx
    │   │
    │   ├── Experience/
    │   │   ├── Experience.jsx
    │   │   ├── ExperienceCard.jsx
    │   │   └── ExperienceSection.jsx
    │   │
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   ├── FooterCopyright.jsx
    │   │   ├── FooterLogo.jsx
    │   │   └── FooterNav.jsx
    │   │
    │   ├── Header/
    │   │   ├── Header.jsx
    │   │   ├── HeaderButton.jsx
    │   │   ├── Logo.jsx
    │   │   ├── MobileMenu.jsx
    │   │   ├── NavItem.jsx
    │   │   └── Navbar.jsx
    │   │
    │   ├── Hero/
    │   │   ├── Hero.jsx
    │   │   ├── HeroContent.jsx
    │   │   ├── HeroImage.jsx
    │   │   ├── SocialLinks.jsx
    │   │   ├── StatCard.jsx
    │   │   └── Stats.jsx
    │   │
    │   ├── Loader/
    │   │   └── Loader.jsx
    │   │
    │   ├── Particles/
    │   │   └── ThemeParticles.jsx
    │   │
    │   ├── Services/
    │   │   ├── ContactForm.jsx
    │   │   ├── ServiceBanner.jsx
    │   │   ├── ServiceCard.jsx
    │   │   ├── ServiceContent.jsx
    │   │   ├── ServiceList.jsx
    │   │   ├── ServiceSidebar.jsx
    │   │   └── Services.jsx
    │   │
    │   ├── Skills/
    │   │   ├── SkillCard.jsx
    │   │   ├── Skills.jsx
    │   │   ├── SkillsGrid.jsx
    │   │   └── SkillsHeader.jsx
    │   │
    │   ├── Testimonials/
    │   │   ├── TestimonialCard.jsx
    │   │   ├── Testimonials.jsx
    │   │   ├── TestimonialsHeader.jsx
    │   │   └── TestimonialsSlider.jsx
    │   │
    │   ├── Work/
    │   │   ├── Work.jsx
    │   │   ├── WorkCard.jsx
    │   │   ├── WorkFilter.jsx
    │   │   ├── WorkGrid.jsx
    │   │   └── WorkHeader.jsx
    │   │
    │   ├── data/
    │   │   ├── aboutData.js
    │   │   ├── blogDetailsData.js
    │   │   ├── blogsData.js
    │   │   ├── contactData.js
    │   │   ├── experienceData.js
    │   │   ├── footerData.js
    │   │   ├── heroData.js
    │   │   ├── navigation.js
    │   │   ├── projectsData.js
    │   │   ├── servicesData.js
    │   │   ├── servicesDetails.js
    │   │   ├── skillsData.js
    │   │   ├── socialLinks.js
    │   │   ├── statsData.js
    │   │   └── testimonialsData.js
    │   │
    │   └── hooks/
    │       └── useIsotope.js
    │
    ├── pages/
    │   ├── BlogDetails.jsx
    │   └── ServiceDetails.jsx
    │
    └── utils/
        └── portfolioPlugins.js
```

------------------------------------------------------------------------

# 6. Component Architecture

The application follows a component-based structure.

For example:

``` text
Home
│
├── Header
│   ├── Logo
│   ├── Navbar
│   ├── HeaderButton
│   └── MobileMenu
│
├── Hero
│   ├── HeroContent
│   ├── HeroImage
│   └── Stats
│       └── StatCard
│
├── Services
│   └── ServiceCard
│
├── About
│   ├── AboutImage
│   └── AboutContent
│       └── ContactInfo
│
├── Work
│   ├── WorkHeader
│   ├── WorkFilter
│   └── WorkGrid
│       └── WorkCard
│
├── Experience
│   └── ExperienceSection
│       └── ExperienceCard
│
├── Skills
│   └── SkillsGrid
│       └── SkillCard
│
├── Testimonials
│   └── TestimonialsSlider
│       └── TestimonialCard
│
├── Blog
│   └── BlogGrid
│       └── BlogCard
│
├── Contact
│   ├── ContactForm
│   └── ContactInfo
│
└── Footer
```

This makes the project easier to maintain and reuse.

------------------------------------------------------------------------

# 7. Routing

React Router DOM is used.

## Route 1 --- Home

``` text
/
```

Component:

``` text
Home.jsx
```

## Route 2 --- Service Details

``` text
/service/:slug
```

Example:

``` text
/service/web-devlopment
/service/ui-ux-design
/service/content-writing
/service/digital-marketing
```

Component:

``` text
pages/ServiceDetails.jsx
```

The URL slug is read from React Router and used to find the matching
service data.

## Route 3 --- Blog Details

``` text
/blog/:slug
```

Examples:

``` text
/blog/first-portfolio
/blog/helpful-guid
/blog/web-devlopment-blog
```

Component:

``` text
pages/BlogDetails.jsx
```

------------------------------------------------------------------------

# 8. Header and Navigation

The header contains:

-   Logo
-   Desktop navigation
-   Resume/action button
-   Mobile menu

The header listens to the browser scroll event:

``` text
window.scrollY > 50
```

When the user scrolls more than 50 pixels, the `header-scrolled` CSS
class is added.

Navigation uses hash links such as:

``` text
/#about
/#services
/#work
/#resume
/#skills
/#testimonials
/#contact
```

This allows navigation from the main page directly to sections.

------------------------------------------------------------------------

# 9. Hero Section

The Hero section displays:

-   Developer name
-   Introduction
-   Animated roles
-   Profile image
-   Social links
-   Statistics
-   Resume button

Hero data is stored in:

``` text
src/components/data/heroData.js
```

Example roles:

``` text
Developer
Programmer
Coder
```

`react-type-animation` is used for animated role text.

------------------------------------------------------------------------

# 10. Statistics

The statistics section uses:

-   `react-countup`
-   `react-intersection-observer`

This means the number animation can start when the statistic card
becomes visible on the screen.

Current configured statistics include:

``` text
10  Hard Work
45  Projects Completed
40  Happy Clients
1.5 Years of Experience
```

Data file:

``` text
src/components/data/statsData.js
```

Update this file to change the numbers.

------------------------------------------------------------------------

# 11. Services

Services are data-driven.

Data file:

``` text
src/components/data/servicesData.js
```

Current services:

1.  Web Development
2.  UI / UX Design
3.  Content Writing
4.  Digital Marketing

Each service has:

``` text
id
title
slug
description
```

Detailed service content is stored separately in:

``` text
src/components/data/servicesDetails.js
```

This separation keeps the card content and detail-page content
organized.

------------------------------------------------------------------------

# 12. About Section

The About section contains:

-   Profile/about image
-   Name
-   Introduction
-   Description
-   Quote
-   Email
-   Phone
-   Resume link

Data:

``` text
src/components/data/aboutData.js
```

This is a good place to update personal information.

------------------------------------------------------------------------

# 13. Work / Projects Section

The project section is controlled with React state.

Main file:

``` text
src/components/Work/Work.jsx
```

The filter state starts as:

``` text
*
```

Meaning all projects.

Available filters:

``` text
All
Website
Section
Game
```

Filtering is done using JavaScript:

``` text
projectsData.filter(...)
```

The project data is stored in:

``` text
src/components/data/projectsData.js
```

The project card receives project information as props.

Current project list contains 15 configured projects.

------------------------------------------------------------------------

# 14. Important Project Categories

The code currently uses these category values:

``` text
website
section
game
```

### Important note

One project currently contains:

``` text
category: "Section"
```

with a capital `S`.

The filter checks for:

``` text
"section"
```

JavaScript string comparison is case-sensitive, so that project may not
appear when the `Section` filter is selected.

Recommended fix:

``` js
category: "section"
```

------------------------------------------------------------------------

# 15. Experience and Education

Data is stored in:

``` text
src/components/data/experienceData.js
```

The component displays two groups:

``` text
Experience
Education
```

Current experience includes:

-   NodeJS
-   React JS
-   CSS
-   HTML

Current education includes:

-   Full Stack Development
-   HNGU University
-   KSKP School

------------------------------------------------------------------------

# 16. Skills

Skills are data-driven.

File:

``` text
src/components/data/skillsData.js
```

Current skills include:

-   HTML
-   CSS
-   Bootstrap
-   JavaScript
-   DSA
-   GitHub
-   React JS
-   Tailwind CSS
-   Git
-   Node JS
-   Figma
-   Firebase

Each skill contains:

``` text
id
name
image
```

------------------------------------------------------------------------

# 17. Testimonials

Testimonials are stored in:

``` text
src/components/data/testimonialsData.js
```

The UI uses Swiper.

Features:

-   Responsive slides
-   Autoplay
-   Pagination
-   Loop
-   Desktop/tablet/mobile breakpoints

Breakpoints:

``` text
300px  → 1 slide
768px  → 2 slides
992px  → 3 slides
```

------------------------------------------------------------------------

# 18. Blog

Blog list data:

``` text
src/components/data/blogsData.js
```

Blog detail content:

``` text
src/components/data/blogDetailsData.js
```

Current blogs:

1.  How I Built My First Developer Portfolio
2.  Responsive Design: Websites That Fit Every Screen
3.  Why I Love Creative Web Development Projects

Each blog has a slug used in the route.

Example:

``` text
/blog/first-portfolio
```

------------------------------------------------------------------------

# 19. Contact Form

The contact form is implemented using:

``` text
@emailjs/browser
```

File:

``` text
src/components/Contact/ContactForm.jsx
```

The form sends the submitted values using:

``` js
emailjs.sendForm(...)
```

Required environment variables:

``` text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

------------------------------------------------------------------------

# 20. EmailJS Configuration

Create this file in the project root:

``` text
.env
```

Example:

``` env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Important

Do not upload `.env` to GitHub if it contains private credentials.

Add this to `.gitignore`:

``` text
.env
.env.local
.env.*.local
```

After changing environment variables, restart the Vite development
server.

------------------------------------------------------------------------

# 21. EmailJS Template Fields

The form sends these field names:

``` text
first_name
last_name
email
phone
service
message
```

Your EmailJS template should use matching variable names.

For example:

``` text
First Name: {{first_name}}
Last Name: {{last_name}}
Email: {{email}}
Phone: {{phone}}
Service: {{service}}
Message: {{message}}
```

If the EmailJS template variables do not match the form field names, the
email may not contain the expected values.

------------------------------------------------------------------------

# 22. Loader

The initial page loader uses:

``` text
lottie-react
```

Animation file:

``` text
src/assets/loader.json
```

In `App.jsx`, loading is currently simulated for approximately 2
seconds.

After the timer finishes:

``` text
Loader
↓
Portfolio
```

------------------------------------------------------------------------

# 23. Particle Background

File:

``` text
src/components/Particles/ThemeParticles.jsx
```

This is a custom HTML Canvas animation.

It creates:

-   Floating particles
-   Connecting lines
-   Mouse interaction
-   Radial glow
-   Animated background
-   Responsive canvas sizing

It does not require a third-party particle library.

The canvas is rendered behind the main portfolio content.

------------------------------------------------------------------------

# 24. Responsive Design

The project uses:

``` text
Bootstrap 5
```

plus custom CSS.

Important CSS files:

``` text
public/assets/css/style.css
public/assets/css/media.css
public/assets/css/headline.css
```

Responsive behavior is controlled using:

-   Bootstrap grid
-   Bootstrap utility classes
-   Custom media queries
-   Swiper breakpoints
-   Mobile navigation

------------------------------------------------------------------------

# 25. Fonts and Icons

## Font

The project uses:

``` text
Sora
```

through:

``` text
@fontsource/sora
```

Loaded in:

``` text
src/main.jsx
```

## Icons

Remix Icon is used:

``` text
remixicon
```

Example:

``` text
ri-phone-line
ri-mail-line
ri-github-fill
ri-linkedin-fill
ri-menu-2-line
```

------------------------------------------------------------------------

# 26. Images and Static Assets

All public assets are inside:

``` text
public/assets/
```

Images are referenced using paths beginning with:

``` text
/assets/
```

Example:

``` js
image: "/assets/images/profile-img.png"
```

Resume:

``` text
/assets/Meet-Resume.pdf
```

### Why this works

Files inside Vite's `public` folder are served from the website root.

Therefore:

``` text
public/assets/images/work-1.png
```

becomes:

``` text
/assets/images/work-1.png
```

in the browser.

------------------------------------------------------------------------

# 27. Data-Driven Architecture

Most portfolio content is not hard-coded inside the UI components.

Instead, it is separated into:

``` text
src/components/data/
```

This includes:

``` text
aboutData.js
blogDetailsData.js
blogsData.js
contactData.js
experienceData.js
footerData.js
heroData.js
navigation.js
projectsData.js
servicesData.js
servicesDetails.js
skillsData.js
socialLinks.js
statsData.js
testimonialsData.js
```

### Benefit

If you want to change:

-   Name
-   Description
-   Projects
-   Skills
-   Social links
-   Services
-   Testimonials
-   Blog posts
-   Contact information
-   Statistics

you can normally edit the relevant data file instead of changing the
component structure.

------------------------------------------------------------------------

# 28. Installation

Clone or extract the project.

Open the project folder in VS Code.

Then open the terminal.

``` bash
cd Portfolio-React-main
```

Install dependencies:

``` bash
npm install
```

This installs packages from:

``` text
package.json
```

and uses:

``` text
package-lock.json
```

for dependency locking.

------------------------------------------------------------------------

# 29. Run in Development Mode

Start the development server:

``` bash
npm run dev
```

Vite will normally display a local URL similar to:

``` text
http://localhost:5173/
```

Open the displayed URL in your browser.

### Development flow

``` text
Edit code
   ↓
Save file
   ↓
Vite detects change
   ↓
Browser updates
```

This provides fast development using Vite's development server and hot
module replacement.

------------------------------------------------------------------------

# 30. Build for Production

Run:

``` bash
npm run build
```

Vite creates the production build in:

``` text
dist/
```

Typical structure:

``` text
dist/
├── assets/
├── index.html
└── ...
```

The `dist` directory is the deployable production output.

------------------------------------------------------------------------

# 31. Preview Production Build

After building:

``` bash
npm run preview
```

Vite starts a local server for the production build.

Typical URL:

``` text
http://localhost:4173/
```

The exact URL is shown in the terminal.

------------------------------------------------------------------------

# 32. Available npm Commands

The project currently has these scripts:

``` json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Development

``` bash
npm run dev
```

### Production build

``` bash
npm run build
```

### Preview build

``` bash
npm run preview
```

There is currently no dedicated `npm run lint` or `npm test` script in
`package.json`.

------------------------------------------------------------------------

# 33. Build Tool / Compiler Explanation

This project does not have a traditional compiler such as:

``` text
g++
gcc
javac
```

Instead, it uses Vite.

### Development

``` text
Node.js
   ↓
Vite
   ↓
React + JSX
   ↓
Browser
```

### Production

``` text
React + JSX + CSS
        ↓
      Vite
        ↓
JavaScript/CSS/assets bundle
        ↓
       dist/
        ↓
      Hosting
```

Vite uses the React plugin:

``` text
@vitejs/plugin-react
```

Configuration:

``` text
vite.config.js
```

------------------------------------------------------------------------

# 34. Vite Configuration

Current configuration:

``` js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

The configuration enables React support in Vite.

------------------------------------------------------------------------

# 35. Package Manager

The project uses npm.

Dependency information:

``` text
package.json
```

Locked dependency versions:

``` text
package-lock.json
```

Do not normally delete `package-lock.json` unless you intentionally want
to regenerate the dependency tree.

------------------------------------------------------------------------

# 36. Deployment

The application is a static React frontend after building.

Recommended deployment platforms include:

-   Vercel
-   Netlify
-   GitHub Pages
-   Cloudflare Pages
-   Any static web server

Build command:

``` bash
npm run build
```

Output directory:

``` text
dist
```

------------------------------------------------------------------------

# 37. Vercel Deployment

Typical Vercel settings:

``` text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Add the EmailJS environment variables in the Vercel project settings:

``` text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

------------------------------------------------------------------------

# 38. GitHub Deployment

Basic Git workflow:

``` bash
git init
git add .
git commit -m "Initial React portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

For future changes:

``` bash
git add .
git commit -m "Update portfolio"
git push
```

------------------------------------------------------------------------

# 39. Recommended .gitignore

Create `.gitignore` in the project root:

``` gitignore
node_modules/
dist/
.env
.env.local
.env.*.local
.DS_Store
```

Do not commit:

``` text
node_modules/
.env
dist/
```

unless you specifically need them for a particular deployment workflow.

------------------------------------------------------------------------

# 40. How to Add a New Project

Open:

``` text
src/components/data/projectsData.js
```

Add a new object:

``` js
{
  id: 16,
  category: "website",
  title: "My New Project",
  image: "/assets/images/my-project.png",
  description: "My project description",
  link: "https://example.com/",
}
```

Then place the image in:

``` text
public/assets/images/
```

The Work section will automatically receive the new project because it
maps over `projectsData`.

------------------------------------------------------------------------

# 41. How to Add a New Skill

Open:

``` text
src/components/data/skillsData.js
```

Add:

``` js
{
  id: 13,
  name: "MongoDB",
  image: "/assets/images/mongodb.png",
}
```

Put the image here:

``` text
public/assets/images/mongodb.png
```

The Skills UI will automatically render the new item.

------------------------------------------------------------------------

# 42. How to Add a New Service

Update:

``` text
src/components/data/servicesData.js
```

and add the detailed content in:

``` text
src/components/data/servicesDetails.js
```

Make sure the slug matches.

Example:

``` text
servicesData slug
        ↓
web-devlopment
        ↓
servicesDetails slug
        ↓
web-devlopment
```

If the slugs do not match, the detail page may not find the expected
service.

------------------------------------------------------------------------

# 43. How to Add a New Blog

Update:

``` text
src/components/data/blogsData.js
```

Add the corresponding detail data to:

``` text
src/components/data/blogDetailsData.js
```

The blog slug must match the URL.

Example:

``` text
blogsData:
slug: "my-new-blog"

blogDetailsData:
"my-new-blog": {
   ...
}
```

Then the page is available at:

``` text
/blog/my-new-blog
```

------------------------------------------------------------------------

# 44. How to Change Social Links

Edit:

``` text
src/components/data/socialLinks.js
```

Each social link has:

``` text
icon
url
```

Example:

``` js
{
  icon: "ri-github-fill",
  url: "https://github.com/yourusername",
}
```

------------------------------------------------------------------------

# 45. How to Change Contact Information

Edit:

``` text
src/components/data/contactData.js
```

Contact information includes:

``` text
Phone
Email
Address
```

Also check:

``` text
src/components/data/aboutData.js
```

because About contact information is separately configured there.

------------------------------------------------------------------------

# 46. How to Change Resume

Replace:

``` text
public/assets/Meet-Resume.pdf
```

with your updated PDF while keeping the same filename.

Or update the data files:

``` text
heroData.js
aboutData.js
```

to point to another PDF path.

------------------------------------------------------------------------

# 47. How the Contact Form Works

User enters:

``` text
First Name
Last Name
Email
Phone
Service
Message
```

Then:

``` text
Submit
   ↓
preventDefault()
   ↓
EmailJS sendForm()
   ↓
EmailJS service
   ↓
Email template
   ↓
Message delivered
```

The form does not require your own Node.js/Express backend.

------------------------------------------------------------------------

# 48. Current External Links

The project includes links to:

-   GitHub
-   LinkedIn
-   Instagram
-   X/Twitter
-   WhatsApp
-   Project demo websites
-   GitHub project repositories
-   Google Maps

These are mostly maintained inside:

``` text
src/components/data/
```

The project URLs are mainly in:

``` text
src/components/data/projectsData.js
```

------------------------------------------------------------------------

# 49. Important Code Quality Notes

The project is component-based and generally easy to extend, but there
are a few areas that should be cleaned up.

## 49.1 Unused Swiper imports in main.jsx

`main.jsx` imports:

``` js
import { Swiper, SwiperSlide } from "swiper/react";
```

but the imported components are not used there.

They can be removed from `main.jsx` because the testimonial component
imports what it needs.

------------------------------------------------------------------------

## 49.2 Isotope-related code

The project contains:

``` text
src/components/hooks/useIsotope.js
src/utils/portfolioPlugins.js
```

These refer to jQuery/Isotope-style functionality.

However, the current Work filtering is already implemented using React
state:

``` text
Work.jsx
WorkFilter.jsx
```

and the current `package.json` does not list jQuery or Isotope as
dependencies.

Therefore the React filtering is the active/appropriate implementation,
while the old Isotope helper code appears to be leftover code from the
earlier implementation.

It can be removed if it is not used anywhere.

------------------------------------------------------------------------

## 49.3 Category capitalization

In `projectsData.js`, the Google Keep project currently uses:

``` js
category: "Section"
```

while the filter expects:

``` js
"section"
```

Change it to lowercase:

``` js
category: "section"
```

------------------------------------------------------------------------

## 49.4 Admin Panel project URL

The `Movie Managment` and `Admin Panel` entries currently point to the
same GitHub URL:

``` text
https://github.com/Meetpatel0264/Node-pr-5
```

Verify whether the Admin Panel should point to a different repository.

------------------------------------------------------------------------

## 49.5 Project spelling

Some project/data names contain spelling mistakes such as:

``` text
Managment
Devlopment
Filler
```

These do not necessarily break the application, but they can be
corrected for professional presentation.

------------------------------------------------------------------------

# 50. Suggested Improvements

For a more production-ready portfolio, consider adding:

-   ESLint
-   Prettier
-   React error boundary
-   Form loading state
-   Form success/error UI instead of `alert()`
-   Form submission protection
-   Better accessibility labels
-   `aria-label` for icon-only buttons
-   Image lazy loading where appropriate
-   SEO meta tags
-   Open Graph metadata
-   Twitter/X card metadata
-   Custom 404 page
-   Route fallback
-   Favicon variants
-   Analytics
-   Performance optimization
-   WebP/AVIF image optimization
-   Centralized constants
-   Better project descriptions
-   Real testimonials only
-   Proper project repository/demo links
-   Case-sensitive category normalization

------------------------------------------------------------------------

# 51. Troubleshooting

## `npm` is not recognized

Install Node.js and restart VS Code/terminal.

Check:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

## `npm install` fails

Try:

``` bash
npm cache verify
npm install
```

If dependencies are corrupted:

``` bash
rm -rf node_modules
```

On Windows PowerShell:

``` powershell
Remove-Item -Recurse -Force node_modules
```

Then:

``` bash
npm install
```

Do not delete `package-lock.json` unless you intentionally want to
regenerate it.

------------------------------------------------------------------------

## Vite command does not start

Run:

``` bash
npm run dev
```

instead of manually calling `vite`.

------------------------------------------------------------------------

## Email form does not work

Check that `.env` exists and contains:

``` text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

Then restart:

``` bash
npm run dev
```

Also check that the EmailJS template field names match:

``` text
first_name
last_name
email
phone
service
message
```

------------------------------------------------------------------------

## Images do not load

Check that the file exists under:

``` text
public/assets/
```

Correct:

``` js
"/assets/images/profile-img.png"
```

Incorrect:

``` js
"/public/assets/images/profile-img.png"
```

------------------------------------------------------------------------

## Service detail page does not show data

Check the service slug.

The same slug should exist in:

``` text
servicesData.js
servicesDetails.js
```

------------------------------------------------------------------------

## Blog detail page does not show data

Check that the URL slug exists as a key in:

``` text
blogDetailsData.js
```

------------------------------------------------------------------------

## Refreshing a deployed route gives 404

Because this is a React SPA, your hosting provider may need SPA fallback
configuration.

For Vercel, add a rewrite if necessary:

``` json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This is especially relevant for routes such as:

``` text
/service/web-devlopment
/blog/first-portfolio
```

------------------------------------------------------------------------

# 52. Development Workflow

A recommended workflow is:

``` text
1. Start project
      ↓
2. npm install
      ↓
3. Configure .env
      ↓
4. npm run dev
      ↓
5. Edit data/components
      ↓
6. Test desktop
      ↓
7. Test mobile
      ↓
8. Check contact form
      ↓
9. npm run build
      ↓
10. npm run preview
      ↓
11. Git commit
      ↓
12. Push to GitHub
      ↓
13. Deploy
```

------------------------------------------------------------------------

# 53. How to Understand the Code as a Beginner

If you are learning React, read the project in this order:

### Step 1

Read:

``` text
src/main.jsx
```

Understand how React starts.

### Step 2

Read:

``` text
src/App.jsx
```

Understand routes and loading.

### Step 3

Read:

``` text
src/components/Home.jsx
```

Understand how the main page combines sections.

### Step 4

Pick one simple section.

Recommended:

``` text
Skills
```

Read:

``` text
Skills.jsx
SkillsGrid.jsx
SkillCard.jsx
skillsData.js
```

This teaches the relationship:

``` text
Data
 ↓
Parent component
 ↓
Grid
 ↓
Card
 ↓
Props
```

### Step 5

Then study Work:

``` text
Work.jsx
WorkFilter.jsx
WorkGrid.jsx
WorkCard.jsx
projectsData.js
```

This teaches:

-   `useState`
-   props
-   array filtering
-   `.map()`
-   conditional rendering

### Step 6

Then study routing:

``` text
App.jsx
ServiceDetails.jsx
BlogDetails.jsx
```

### Step 7

Finally study:

``` text
ContactForm.jsx
```

This teaches:

-   `useRef`
-   form submission
-   environment variables
-   third-party API/service integration

------------------------------------------------------------------------

# 54. React Concepts Used in This Project

This project demonstrates many important React concepts:

### Components

``` jsx
function Header() {
  return (...);
}
```

### Props

``` jsx
<TestimonialCard {...item} />
```

### State

``` jsx
const [filter, setFilter] = useState("*");
```

### Effects

``` jsx
useEffect(() => {
   ...
}, []);
```

### Refs

``` jsx
const formRef = useRef();
```

### Conditional rendering

``` jsx
filter === "*"
```

### Array mapping

``` jsx
projectsData.map(...)
```

### Array filtering

``` jsx
projectsData.filter(...)
```

### Environment variables

``` js
import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

### Dynamic routes

``` text
/service/:slug
/blog/:slug
```

### Responsive design

Bootstrap + custom CSS.

------------------------------------------------------------------------

# 55. Final Project Architecture

The project can be understood as five major layers:

``` text
┌──────────────────────────────┐
│          UI / JSX            │
│ Header, Hero, Work, Blog...  │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│       React Logic            │
│ state, effects, props, refs  │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│          Data                │
│ projects, skills, blogs...   │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│     Libraries / Services     │
│ Bootstrap, Swiper, EmailJS   │
└──────────────┬───────────────┘
               │
┌──────────────▼───────────────┐
│       Vite Build System      │
│ dev server → production dist │
└──────────────────────────────┘
```

------------------------------------------------------------------------

# 56. Quick Start

For someone who only wants to run the project:

``` bash
git clone YOUR_REPOSITORY_URL
cd Portfolio-React-main
npm install
```

Create `.env`:

``` env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Start:

``` bash
npm run dev
```

Build:

``` bash
npm run build
```

Preview:

``` bash
npm run preview
```

------------------------------------------------------------------------

# 57. Project Summary

This is a **React component-based portfolio SPA** powered by Vite.

### Main technologies

``` text
React 18
Vite 5
JavaScript
Bootstrap 5
Custom CSS
React Router
Swiper
EmailJS
Lottie
Remix Icon
Sora Font
```

### Main architecture

``` text
React Components
+
Data Modules
+
Static Assets
+
React Router
+
Third-party UI/services
+
Vite
```

### Main purpose

The project is designed to present:

-   Personal profile
-   Skills
-   Experience
-   Education
-   Services
-   Projects
-   Testimonials
-   Blog content
-   Contact information
-   Resume

while keeping the code reusable and easy to update.

------------------------------------------------------------------------

## Author

**Meet Patel**

Full Stack Web Developer

GitHub:

``` text
https://github.com/Meetpatel0264
```

Portfolio:

``` text
https://meetpatel0264.github.io/Portfolio/
```

------------------------------------------------------------------------

## License

This project is a personal portfolio project.

If you reuse the source code, update personal information, project
links, images, resume and contact details appropriately.
