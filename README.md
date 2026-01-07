# Cake Jar Co. — E-Commerce Web App

A beautiful, mobile-first e-commerce web application for a boutique cake jar business. Built with modern web technologies and designed for a warm, artisanal brand experience.

## ✨ Features

- **Mobile-First Design** — Optimized for mobile devices with responsive layouts
- **Elegant UI** — Warm color palette, modern typography, smooth animations
- **Interactive Gallery** — Beautiful gradient placeholders matching your actual product colors
- **Smart Order Flow** — Easy size and flavor selection with visual feedback
- **Shopping Cart** — Full-featured cart with quantity management
- **About Section** — Share the baker's story and craftsmanship
- **Social Integration** — Footer with social media links and contact info

## 🎨 Current Visual Design

The gallery currently uses **intentionally designed gradient placeholders** that match the actual colors of your cake jar photos:
- Strawberry Red Velvet: Soft pink and red gradients
- Variety Collection: Multi-color festive gradient
- Chocolate Cookie: Warm brown and amber tones
- Strawberry Sprinkle: Festive pink and yellow
- Mint Shamrock: Fresh green gradient

**The site looks professional and ready to deploy RIGHT NOW!** You can swap to real photos anytime later using the guide in `QUICK_IMAGE_SWAP.md`.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Deployment:** Vercel-ready

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles & Tailwind
├── components/
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Gallery.tsx      # Image gallery showcase
│   ├── OrderFlow.tsx    # Product selection & ordering
│   ├── About.tsx        # About the baker section
│   ├── Footer.tsx       # Footer with links
│   ├── Header.tsx       # Navigation header
│   └── Cart.tsx         # Shopping cart panel
├── lib/
│   ├── data.ts          # Product data & content
│   └── store.ts         # Zustand cart store
└── types/
    └── index.ts         # TypeScript interfaces
```

## 🎨 Design System

### Color Palette
- **Cream:** Soft neutrals (#fdfcfb → #d4c5ae)
- **Warm:** Peachy accents (#fef7f0 → #e8864a)
- **Cocoa:** Rich browns (#f8f6f4 → #3d322a)

### Typography
- **Display Font:** Playfair Display (headings)
- **Body Font:** Inter (content)

### Components
- Custom button styles (`.btn-primary`, `.btn-secondary`)
- Card component with hover effects
- Smooth transitions and animations

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 🔄 Next Steps

### Before Launch

#### 1. **Add Your Cake Jar Photos**
You have 5 beautiful photos ready to go! Place them in `/public/images/gallery/`:
- `strawberry-red-velvet.jpg` - Your gorgeous strawberry-topped jars
- `variety-collection.jpg` - The colorful dome container collection
- `chocolate-cookie-crumble.jpg` - Cookie crumble chocolate jars
- `strawberry-sprinkle-trio.jpg` - Strawberry and sprinkle trio
- `mint-shamrock-pair.jpg` - Mint jars with shamrock decorations

**See `IMAGE_UPLOAD_GUIDE.md` for detailed instructions on which photo goes where!**

#### 2. **Update Content**
- Customize baker's name in `src/components/About.tsx`
- Update story and bio in About section
- Add contact info in `src/components/Footer.tsx`

#### 3. **Configure Payment**
- Integrate Stripe for checkout functionality
- Update checkout flow in `src/components/Cart.tsx`

#### 4. **Additional Setup**
- Set up Analytics (Google Analytics or similar)
- SEO Optimization — Update metadata and add Open Graph images

### Feature Enhancements
- [ ] Add seasonal flavor rotations
- [ ] Implement delivery/pickup scheduling
- [ ] Create admin dashboard for order management
- [ ] Add customer reviews section
- [ ] Set up email notifications
- [ ] Implement gift card functionality

## 🎯 Key Files to Customize

- **Product Data:** `src/lib/data.ts` — Update sizes, flavors, and prices
- **Content:** Update text in component files
- **Colors:** `tailwind.config.ts` — Adjust color palette
- **Images:** Add real photos to `/public/images/`
- **Contact Info:** `src/components/Footer.tsx`
- **Social Links:** `src/components/Footer.tsx`

## 📝 License

Private project for Cake Jar Co.

---

Built with ❤️ and 🎂
