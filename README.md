# Wonder to Build — Website

Official website for Wonder to Build, a 501(c)(3) nonprofit equipping students with hands-on tools, engineering mindset, and creative confidence to build genuine innovations.

## 🌐 Live Site

After connecting to Vercel, your site will be live at your Vercel URL.

## 🛠 Tech Stack

- **Next.js 14** — React framework
- **Tailwind CSS** — Styling
- **Markdown** — Blog posts (no database needed)
- **Vercel** — Hosting (auto-deploys from GitHub)

## 📝 How to Add a Blog Post

1. Go to your GitHub repo
2. Navigate to `content/blog/`
3. Click "Add file" → "Create new file"
4. Name it like: `my-post-title.md`
5. Use this template:

```markdown
---
title: "Your Post Title"
date: "2026-06-15"
author: "Your Name"
category: "Founder Updates"
excerpt: "A short summary that appears on the blog listing page."
---

Write your post content here. You can use **bold**, *italic*, and [links](https://example.com).

## Headings work too

And so do lists:
- Item one
- Item two
- Item three
```

6. Click "Commit changes" — the site rebuilds automatically!

## 📸 How to Add Photos

1. Go to `public/images/` in your GitHub repo
2. Click "Add file" → "Upload files"
3. Drag your photos in
4. Click "Commit changes"
5. Reference them in code as `/images/your-photo.jpg`

## 🔌 Integration Placeholders

These sections are ready for you to connect when the accounts are set up:

| Service | Page | What to do |
|---------|------|------------|
| **Zeffy** | Donate page | Replace the placeholder div with Zeffy iframe embed code |
| **Stripe** | Kit Shop page | Replace button hrefs with Stripe Payment Link URLs |
| **Mailchimp** | Homepage newsletter | Replace the form with Mailchimp embed code |
| **Typeform** | Contact page | Replace the form with Typeform embed |

## 📁 Project Structure

```
app/              → All website pages
components/       → Navbar, Footer, Counter
content/blog/     → Blog posts (Markdown files)
lib/              → Blog reading utility
public/images/    → Your photos go here
```

## 🎨 Brand Colors

- Primary teal: `#0F6E56`
- Light teal: `#E1F5EE`
- Background: `#FAFBFA`
