# Personal Website - Page Elements Guide

## Complete List of All Elements on Your Website

---

## 🧭 Navigation (Top Bar)

### Class Names:
- `.navbar` - Fixed top navigation container
- `.nav-menu` - Navigation menu list
- `.nav-link` - Individual navigation links
- `.nav-link.active` - Active/current section link
- `.nav-socials` - Social media icons container
- `.nav-social-link` - Individual social media icon links
- `.hamburger` - Mobile menu toggle button

### Navigation Links:
1. Home
2. Experience
3. Skills
4. Education
5. Speaking
6. Writing
7. Teaching
8. Bio
9. Contact

### Social Icons:
- LinkedIn
- Twitter
- YouTube
- Medium
- Instagram

---

## 🏠 Hero Section (`#home`)

### Class Names:
- `.hero` - Full viewport hero section
- `.hero-container` - Container with two columns
- `.hero-content` - Left side content
- `.hero-image` - Right side image area
- `.hero-name` - "Vino Duraisamy"
- `.hero-label` - "Developer Advocate @ Snowflake"
- `.hero-title` - Large animated title with role
- `.animated-text` - Rotating text ("AI", "Open source", "Data")
- `.typing-cursor` - Blinking cursor animation
- `.hero-description` - Bio paragraph
- `.hero-buttons` - Social button container
- `.btn-gradient` - Gradient buttons (LinkedIn, YouTube)

### Elements:
1. **Name Display**: "Vino Duraisamy"
2. **Role Label**: "Developer Advocate @ Snowflake"
3. **Animated Title**: "[AI/Open source/Data] Engineer"
4. **Description**: Bio paragraph
5. **Social Buttons**: LinkedIn, YouTube icons
6. **Code Block**: Floating glass card with Python code
7. **Profile Image**: Right side photo

---

## 💼 Experience Section (`#experience`)

### Class Names:
- `.experience` - Section container
- `.section-label` - "Career Highlights"
- `.section-title` - "Professional Experience"
- `.timeline` - Timeline container
- `.timeline-item` - Individual job entry
- `.timeline-dot` - Purple dot marker
- `.timeline-content` - Job details
- `.timeline-date` - Date range
- `.timeline-title` - Job title
- `.timeline-company` - Company name
- `.timeline-description` - Job description

### Timeline Entries (9 positions):
1. Senior Developer Advocate @ Snowflake (2023-Present)
2. Technical Writer - AI/ML/Data @ Medium (2020-Present)
3. Open Source Developer Advocate @ Treeverse (lakeFS)
4. Applied ML & Data Engineer @ Apple
5. Data Engineer @ Nike
6. AI Engineer @ IPRO
7. Explainable AI Researcher @ Arizona State University
8. Software Engineer - Customer Success Ops @ NetApp
9. Open Source Contributor @ IIT Bombay - Scilab

---

## 🛠️ Skills Section (`#skills`)

### Class Names:
- `.skills` - Section container
- `.section-label` - "Tech Stack"
- `.section-title` - "Skills & Technologies"
- `.skills-grid` - Grid of skill categories
- `.skill-category` - Individual category card
- `.skill-category-title` - Category heading
- `.skill-tags` - Tags container
- `.skill-tag` - Individual skill tag

### Skill Categories (4):
1. **Data Engineering**: Snowflake, Apache Spark, Kafka, Snowpipe, Dynamic Tables, ETL/ELT
2. **AI & Machine Learning**: NLP, MLOps, Generative AI, RAG, Vector Embeddings, Explainable AI
3. **Programming & Tools**: Python, Snowpark, SQL, Git, Docker, Jupyter
4. **Developer Advocacy**: Technical Writing, Public Speaking, Workshop Facilitation, Content Creation, Community Building

---

## 🎓 Education Section (`#education`)

### Class Names:
- `.education` - Section container
- `.section-label` - "Academic Background"
- `.section-title` - "Education"
- `.education-timeline` - Timeline container
- `.education-item` - Individual degree
- `.timeline-dot` - Purple dot marker
- `.timeline-content` - Degree details
- `.timeline-title` - Degree name
- `.timeline-company` - University name
- `.timeline-description` - Additional info

### Degrees (2):
1. **Master of Science - Business Analytics** @ W. P. Carey School of Business – Arizona State University (Summa Cum Laude)
2. **Bachelor of Engineering - Electronics and Communications** @ PSG College of Technology, Coimbatore, India

---

## 🎤 Speaking Section (`#speaking`)

### Class Names:
- `.speaking` - Section container
- `.section-label` - "Public Speaking"
- `.section-title` - "Talks & Workshops"
- `.speaking-grid` - Grid of speaking cards
- `.speaking-card` - Individual card
- `.speaking-icon` - Emoji icon
- Card `<h3>` - Card title
- Card `<ul>` & `<li>` - List of items

### Speaking Categories (3):
1. **Conferences** 🎤
   - AI Summit panels
   - ODSC talks
   - Data Engineering conferences
   - Snowflake User Groups
   - Tech conferences
   - Hands-on workshops

2. **Snowflake Live Show** 📺
   - Recurring episodes
   - Product launches
   - Developer interviews
   - Live demos
   - Q&A sessions

3. **Podcast** 🎙️
   - Data Engineering topics
   - AI & ML conversations
   - Guest appearances
   - Career guidance
   - Technology trends

---

## ✍️ Writing Section (`#writing`)

### Class Names:
- `.writing` - Section container
- `.section-label` - "Technical Content"
- `.section-title` - "Articles & Publications"
- `.writing-grid-two` - Two-column grid
- `.writing-card` - Individual card
- `.writing-icon` - Emoji icon
- Card `<h3>` - Card title
- Card `<ul>` & `<li>` - List of items

### Writing Categories (2):
1. **Blogs** ✍️
   - Medium & Towards Data Science
   - Snowflake Blog
   - Data Engineering
   - Machine Learning & MLOps
   - Generative AI
   - Best Practices

2. **Developer Guides** 📝
   - Step-by-step tutorials
   - Hands-on workshops
   - Tool comparisons
   - Case studies
   - Cloud-native solutions
   - Developer education

---

## 👨‍🏫 Teaching Section (`#teaching`) - **NEW DESIGN**

### Class Names:
- `.teaching` - Section container with glow effect
- `.teaching-hero` - Hero-style centered content area
- `.section-label` - "Education & Mentorship"
- `.teaching-hero-title` - "Intro to GenAI with Snowflake"
- `.teaching-hero-subtitle` - Course description
- `.teaching-hero-buttons` - Button container
- `.btn-teaching-primary` - White filled button (LinkedIn Learning)
- `.btn-teaching-secondary` - Outlined button (Coursera)

### Teaching Hero Elements:
1. **Section Label**: "EDUCATION & MENTORSHIP" (cyan)
2. **Main Title**: "Intro to GenAI with Snowflake" (3.5rem, white)
3. **Subtitle**: Course description paragraph
4. **Two CTA Buttons**:
   - LinkedIn Learning (primary/white)
   - Coursera (secondary/outlined)

### Testimonials Carousel (Below Hero):

#### Class Names:
- `.course-reviews-container` - Carousel section container
- `.course-reviews-header` - Header area
- `.course-reviews-title` - "Beyond expectations"
- `.course-reviews-subtitle` - Description text
- `.testimonials-carousel` - Carousel wrapper
- `.testimonials-track` - Sliding track container
- `.testimonial-card` - Individual review card
- `.testimonial-card.clone` - Cloned cards for infinite loop
- `.testimonial-quote` - Review text
- `.testimonial-author` - Author info container
- `.author-images` - Avatar container
- `.author-avatar` - Profile image
- `.author-info` - Name and title container
- `.author-name` - Reviewer name
- `.author-title` - Reviewer job title
- `.carousel-btn` - Navigation buttons
- `.carousel-btn-prev` - Previous arrow
- `.carousel-btn-next` - Next arrow
- `.carousel-dots` - Dot indicators container
- `.carousel-dot` - Individual dot
- `.carousel-dot.active` - Active dot

#### Testimonial Cards (5):
1. **Sarah Chen** - Data Engineer at Meta
2. **Michael Rodriguez** - ML Engineer at Stripe
3. **Emily Thompson** - Senior Developer at Shopify
4. **James Park** - Analytics Lead at Airbnb
5. **Priya Sharma** - AI Researcher at OpenAI

#### Carousel Features:
- Auto-scroll every 3 seconds
- Infinite loop (seamless)
- Left/Right navigation arrows
- Dot indicators (5 dots)
- Hover to pause
- Keyboard navigation
- Touch/swipe support

---

## 👤 Bio Section (`#bio`)

### Class Names:
- `.bio` - Section container
- `.section-label` - "Speaker Resources"
- `.section-title` - "Biography & Headshots"
- `.bio-content` - Content container
- `.bio-box` - Glass card with bio text
- `.bio-copy-btn` - Copy to clipboard button
- `.bio-text` - Biography paragraphs (2)
- `.bio-actions` - Button container
- `.btn-gradient` - Download headshot button

### Elements:
1. **Biography Text**: Two paragraphs of professional bio
2. **Copy Button**: SVG icon to copy bio text
3. **Download Button**: Download headshot image

---

## 📧 Contact Section (`#contact`)

### Class Names:
- `.contact` - Section container
- `.section-label` - "Let's Connect"
- `.section-title` - "Get In Touch"
- `.contact-description` - Intro paragraph
- `.contact-methods` - Grid of contact cards
- `.contact-card` - Individual contact method
- `.contact-icon` - Emoji icon
- Card `<h3>` - Method name
- Card `<p>` - Contact detail

### Contact Methods (2):
1. **Email** 📧: hello@vinoduraisamy.com
2. **LinkedIn** 💼: linkedin.com/in/vinodhini-sd

---

## 🦶 Footer

### Class Names:
- `.footer` - Footer container
- `.container` - Inner container
- Footer `<p>` - Copyright text

### Content:
- Copyright: "© 2025 Vino Duraisamy. All rights reserved."

---

## 🎨 Color Variables (CSS Custom Properties)

### Background Colors:
- `--bg-primary`: #08090A (main background)
- `--bg-secondary`: #0D0E10 (card backgrounds)
- `--bg-tertiary`: #151618 (elevated elements)

### Border Colors:
- `--border-subtle`: rgba(255, 255, 255, 0.08)
- `--border-hover`: rgba(255, 255, 255, 0.2)

### Text Colors:
- `--text-primary`: #E6E6E6 (main text)
- `--text-secondary`: #3A3A3A (secondary text)
- `--text-tertiary`: #4A4A4A (tertiary text)

### Accent Colors:
- `--accent-purple`: #8B5CF6
- `--accent-blue`: #3B82F6
- `--accent-cyan`: #22D3EE

### Glow Effects:
- `--glow-purple`: rgba(139, 92, 246, 0.3)
- `--glow-blue`: rgba(59, 130, 246, 0.3)
- `--glow-cyan`: rgba(34, 211, 238, 0.3)

---

## 📱 Responsive Breakpoints

### Breakpoint Sizes:
- **Desktop**: > 1200px (3 testimonial cards visible)
- **Tablet**: 768px - 1200px (2 testimonial cards visible)
- **Mobile**: < 768px (1 testimonial card visible, stacked layout)
- **Small Mobile**: < 480px (compact layout, touch scrolling)

---

## 🎭 Animations & Transitions

### Animation Classes:
- `fadeInUp` - Fade in with upward movement
- `cursorBlink` - Blinking cursor
- `.visible` - Triggered by Intersection Observer
- `.active` - Active navigation state

### Interactive States:
- `:hover` - Hover effects on cards, buttons, links
- `:active` - Click states
- `:disabled` - Disabled button states
- `.scrolled` - Navbar when scrolled

---

## 📊 Total Element Count

- **Sections**: 9 (Hero, Experience, Skills, Education, Speaking, Writing, Teaching, Bio, Contact)
- **Timeline Items**: 11 (9 jobs + 2 degrees)
- **Skill Tags**: 24 across 4 categories
- **Speaking Items**: 16 across 3 categories
- **Writing Items**: 12 across 2 categories
- **Testimonial Cards**: 5
- **CTA Buttons**: 7 total
- **Social Links**: 5 in nav, 2 in hero
- **Navigation Links**: 9

---

## 🔧 Interactive Components

1. **Mobile Navigation**: Hamburger menu with slide-out
2. **Smooth Scrolling**: Anchor link navigation
3. **Intersection Observer**: Fade-in animations on scroll
4. **Text Rotator**: Animated cycling text in hero
5. **Infinite Carousel**: Auto-playing testimonials
6. **Copy to Clipboard**: Bio text copy function
7. **Hover Effects**: On all cards and buttons
8. **Keyboard Navigation**: Arrow keys for carousel
9. **Touch Gestures**: Swipe support on mobile

---

This is the complete breakdown of every element on your personal website!

