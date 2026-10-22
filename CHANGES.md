# Echelon Industries — Development Changes Log

**Project:** Echelon Industries Website  
**Stack:** React 19 + TypeScript, Vite, Tailwind CSS v4, Framer Motion, React Router v7  
**Repository:** github.com/KaarimHussain/Echelon-Industries  

---

## Session — October 23, 2026

---

### 1. Fixed Broken Images Across the Entire Website

**Root Cause:** All dynamic images were loading from an external CDN (`cdn.echelonindustries.net`) which was returning HTTP 429 (Too Many Requests / rate-limited). This caused broken images across the Home, Projects, Industries, and Partners sections.

**Files Changed:**

| File | Change |
|---|---|
| `src/components/Partners.tsx` | Replaced 9 CDN logo URLs with local `Partner-1.png` → `Partner-9.png` from `src/assets/imgs/` |
| `src/components/Industries.tsx` | Replaced 4 CDN image URLs with local images from `src/assets/imgs/Industries/` (Factories.jpg, Commercial-Building.jpg, Hospital.jpg, Shopping-Malls.jpg) |
| `src/components/Projects.tsx` | Replaced 4 CDN image URLs with local `ProjectCard.png` → `ProjectCard3.png` from `src/assets/imgs/` |
| `src/components/OurProjects/CompanyProjects.tsx` | Replaced 16 CDN URLs with cycled local ProjectCard images (temporary placeholder) |
| `src/components/Hero.tsx` | Added `poster={HeroBg}` fallback to the `<video>` tag so the hero shows the local background image when the CDN video fails to load |

---

### 2. Team Section — Real Employee Photos & Contact Info

**What changed:** The About Us page team section previously used AI-generated stock photos with fake names. Replaced with 7 real team members.

**Files Changed:**

| File | Change |
|---|---|
| `src/components/AboutUs/OurCompanyEmployee.tsx` | Full rewrite — removed AI images, added all 7 real team members with designations and contact info |

**Team members added (in order):**

| Name | Position | Phone | Email |
|---|---|---|---|
| Usama Ahmed | General Managing Director | +92 307 444 1083 | usama@echelonindustries.net |
| Hassan Ahmed | Deputy General Managing Director | *(pending)* | *(pending)* |
| Khalid Waseem | Senior Sales Manager | +92 307 444 1090 | khalid@echelonindustries.net |
| Taha Saifuddin | Manager Sales & Application | +92 307 444 1087 | taha@echelonindustries.net |
| Arbab Gilani | General Manager (Sales & Marketing) | +92 300 922 7096 | gm.sales@echelonindustries.net |
| Muhammad Farooq Azam | Senior Manager Sales & Technical | +92 307 444 1095 | engineering@echelonindustries.net |
| Mushtaq Attari | Application Engineer | +92 307 444 1090 | application@echelonindustries.net |

**Design updates:**
- Usama Ahmed and Hassan Ahmed displayed in a separate 2-column leadership row above the rest
- Hover overlay on each card now shows designation + clickable phone (`tel:`) and email (`mailto:`) links
- Hassan Ahmed shows "Contact info coming soon" on hover until his details are provided
- Grid changed from `lg:grid-cols-4` to `lg:grid-cols-3 xl:grid-cols-4` to accommodate 7 members
- Images loaded from `public/Team/` folder (public URL references, no imports needed)

**Images added to `public/Team/`:**
- Arbab Gilani.png
- Hassan Ahmed.png
- Khalid-Waseem.png
- Muhammad-Farooq-Azam.png
- Mushtaq-Attari.png
- Taha-Saifuddin.png
- Usama Ahmed.png

---

### 3. Our Projects Page — Downloaded Real Project Images

**What changed:** The `/projects` page was reusing the same 4 generic ProjectCard images cycling for all 16 projects. Downloaded the actual project photos from the CDN into `public/OurProjects/`.

**Method:** CDN images downloaded via `curl` with delays to avoid rate limiting. 15 out of 16 downloaded successfully.

**Images saved to `public/OurProjects/`:**

| File | Project | Status |
|---|---|---|
| Project-Dental-Care-Orthodontics.png | Dental Care Orthodontics, Karachi | ✅ Downloaded |
| Project-Nixor-College.png | Nixor College | ✅ Downloaded |
| Project-Citizens-Foundation.png | The Citizens Foundation Head Office | ✅ Downloaded |
| Project-Fluid-Technology.png | Fluid Technology International | ✅ Downloaded |
| Project-Office-Complex-Karachi.png | Office Complex Karachi | ✅ Downloaded |
| Project-Aga-Khan-Hospital.png | Aga Khan University Hospital | ✅ Downloaded |
| Project-Martin-Dow.png | Martin Dow, Quetta | ✅ Downloaded |
| Project-Memon-Medical.png | Memon Medical Institute Hospital | ✅ Downloaded |
| Administration Building Karachi.png | Administration Building Karachi | ✅ Manually provided |
| Project-Luckyone-Mall.png | Luckyone Mall, Karachi | ✅ Downloaded |
| Project-Dolmen-Mall.png | Dolmen Mall, Karachi | ✅ Downloaded |
| Project-Pakistan-Reinsurance.png | Pakistan Reinsurance Limited | ✅ Downloaded |
| Project-Centre-Point-Tower.png | Centre Point Tower - BAHL | ✅ Downloaded |
| Project-C5-Maakson.png | C5 Maakson, Gulber Greens, Islamabad | ✅ Downloaded |
| Project-Hayatabad-Medical.png | Hayatabad Medical Complex, Peshawar | ✅ Downloaded |
| Project-Avenair-Lahore.png | The Avenair, Lahore | ✅ Downloaded |

**Files Changed:**
- `src/components/OurProjects/CompanyProjects.tsx` — all 16 image paths updated to local `/OurProjects/` files

---

### 4. Blog Page — New Feature (Full Implementation)

**What was built:** A complete SEO-optimised blog system integrated with an external headless CMS API.

**API Details:**
- Base URL: `https://slateblue-alpaca-111274.hostingersite.com/api/v1/echelon-industries`
- Auth: Bearer token (stored in `.env.local`)
- List endpoint: `GET /posts?limit=20` — returns `{ data: [], nextCursor: null }`
- Single post endpoint: `GET /posts/:slug` — returns `{ data: { ...post } }`

**Post data shape (actual API fields):**
```ts
{
  id: string               // e.g. "pst_tezr8t9jyglim2d7"
  title: string
  slug: string
  excerpt: string
  coverImageUrl: string    // hosted on hostingersite.com/uploads/
  publishedAt: number      // Unix milliseconds timestamp
  updatedAt: number
  readingTime: number      // minutes
  wordCount: number
  contentHtml: string      // full HTML article body
  tags?: string[]
  category?: string
}
```

**New files created:**

| File | Purpose |
|---|---|
| `.env.local` | API base URL and Bearer token (not committed to git) |
| `src/types/blog.ts` | TypeScript interfaces: `BlogPost`, `BlogListResponse`, `BlogPostResponse` |
| `src/lib/blog-api.ts` | API client: `fetchPosts()`, `fetchPostBySlug()`, `formatDate()`, `stripHtml()` |
| `src/views/Blog.tsx` | Blog listing page with featured post hero, paginated card grid, skeleton loaders, empty state |
| `src/views/BlogPost.tsx` | Blog post detail page with hero, article body, related posts section |

**Files modified:**

| File | Change |
|---|---|
| `src/App.tsx` | Added `HelmetProvider` wrapper; added `/blog` and `/blog/:slug` routes; imported `Blog` and `BlogPostPage` |
| `src/components/NavbarMenu.tsx` | Added "Blog" link in desktop nav and mobile nav |
| `src/components/Footer.tsx` | Added "Blog" to secondary footer menu |
| `src/index.css` | Added `@plugin "@tailwindcss/typography"` for blog article prose styles |

**Packages installed:**
- `react-helmet-async` — dynamic `<head>` management per page
- `@tailwindcss/typography` — `prose` utility classes for rendering blog HTML content

**SEO features implemented on every blog page:**
- Dynamic `<title>` and `<meta name="description">`
- `<link rel="canonical">`
- Open Graph tags: `og:type`, `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Article-specific OG: `article:published_time`, `article:modified_time`, `article:section`, `article:tag`
- JSON-LD structured data (`BlogPosting` schema for Google rich results)
- Semantic HTML: `<article>`, proper heading hierarchy (`h1` → `h2` → `h3`)

**Bug fixed after initial implementation:**
- Single post API response is wrapped in `{ "data": {...} }` — `fetchPostBySlug` was not unwrapping it, causing the detail page to crash silently
- `publishedAt` is a Unix ms timestamp not an ISO string — `formatDate()` updated to accept `number`
- Image field is `coverImageUrl` not `featured_image`/`cover_image`
- Article body field is `contentHtml` not `content`
- Removed duplicate cover image display (was showing once in hero background and once as a full-width strip below — reduced to hero only)

---

## Pending / To Do

- [ ] Add Hassan Ahmed's phone number and email when available (`src/components/AboutUs/OurCompanyEmployee.tsx` — lines 16–17)
- [ ] Replace temporary ProjectCard placeholder images in `Projects.tsx` (home section) with actual project hero images when available
- [ ] Fix or migrate CDN (`cdn.echelonindustries.net`) — currently rate-limited; all images have been moved to local files as a workaround
- [ ] OpenSEO / Open Graph implementation for non-blog pages (planned — next session)
- [ ] Add `.env.local` to `.gitignore` if not already present to avoid committing the API token
