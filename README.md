# Saini & Singh Associates - React Website

A modern, responsive React TypeScript website for Saini & Singh Associates, a professional law firm based in Delhi-NCR, Gurugram, and Lucknow.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **Smooth Scrolling** navigation
- **Interactive Forms** with validation
- **Professional Design** with blue color scheme
- **Font Awesome Icons** for visual elements

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── WhyChooseUs.tsx # Features section
│   ├── Testimonial.tsx # Client testimonial
│   ├── Services.tsx    # Legal services
│   ├── PracticeAreas.tsx # Practice areas
│   ├── About.tsx       # About us section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Font Awesome** - Icons
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Sections

### 1. **Home Page**
- Hero section with company branding
- Call-to-action buttons
- Location information

### 2. **Why Choose Us**
- Four key features with icons
- Professional expertise highlights

### 3. **Testimonial**
- Client testimonial with star rating
- Professional endorsement

### 4. **Services**
- Legal Retainership Services
- Six detailed service features
- Custom quote button

### 5. **Practice Areas**
- Six comprehensive legal practice areas:
  - Litigation & Dispute Resolution
  - Property & Real Estate Law
  - Corporate & Commercial Law
  - Transport & Challan Compliance
  - Family & Matrimonial Law
  - Arbitration & ADR

### 6. **About Us**
- Company background and mission
- Core values with icons
- Professional team information

### 7. **Contact**
- Contact information
- Business hours
- Consultation booking form
- Multiple office locations

## 🎨 Customization

### Colors
The website uses a professional blue color scheme defined in `tailwind.config.js`:
- Primary Blue: `#2563eb`
- Dark Blue: `#1d4ed8`
- Background: `#f8f9fa`

### Content Updates
To update content, edit the respective component files:
- Company information: `Header.tsx` and `Footer.tsx`
- Services: `Services.tsx`
- Practice areas: `PracticeAreas.tsx`
- Contact information: `Contact.tsx`

### Styling
Modify `src/index.css` and `tailwind.config.js` to change:
- Colors and typography
- Layout and spacing
- Responsive breakpoints
- Component styles

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Each section is a separate React component
- **TypeScript**: Full type safety throughout the application
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessibility**: Semantic HTML and ARIA labels

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM rendering

### Development
- `@types/react` - TypeScript definitions
- `@vitejs/plugin-react` - Vite React plugin
- `tailwindcss` - CSS framework
- `typescript` - TypeScript compiler
- `vite` - Build tool

## 🚀 Deployment

The website can be deployed to any static hosting service:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Recommended Hosting Services
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📞 Support

For any questions or customization requests, please contact the development team.

## 📄 License

This website template is created for Saini & Singh Associates. All rights reserved.

---

**Note**: This is a static React application. For production use, consider:
- Adding a backend for form processing
- Implementing a CMS for content management
- Adding SSL certificate for security
- Setting up analytics tracking
- Optimizing images and assets 