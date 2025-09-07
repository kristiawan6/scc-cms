<div align="center">
  <img src="public/scc-logo.svg" alt="Soho City Church Logo" width="120" height="120">
  
  # Soho City Church Website
  
  **GBI Soho City Church Jakarta - See What God Can Do Through You**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  
  [🌐 Live Website](https://gbiscc.org) • [📱 Mobile App](https://gbiscc.org) • [📧 Contact Us](mailto:info@gbiscc.org)
  
</div>

---

## 🏛️ About Soho City Church

Soho City Church (GBI SCC Jakarta) is a vibrant Christian community where faith meets fellowship. Our modern, responsive website serves as a digital gateway for our congregation and visitors to connect, worship, and grow together in faith.

### 🎯 Mission
*"See what God can do through you"* - We believe in empowering every individual to discover their purpose and potential through Christ.

---

## ✨ Key Features

### 🙏 **Spiritual Messages & Bible Verses**
- **Interactive 5 Messages**: Clickable spiritual messages with corresponding Bible verses
- **Random Bible Verse Generator**: 8+ inspirational verses with beautiful modal display
- **Responsive Design**: Optimized for both mobile and desktop experiences

### 👥 **Community & Fellowship**
- **Fellowship Gallery**: Interactive photo gallery with modal view
- **Mobile Touch Slider**: Smooth swipe navigation for mobile users
- **Community Events**: Worship Night, COOL (Community of Love), GIC (Growth in Christ)

### 📱 **Social Media Integration**
- **Instagram Dropdown**: Multi-account Instagram integration
  - `soho.citychurch`
  - `creativedancerofblessed` 
  - `jc.soho`
- **Social Media Links**: Direct links to church social platforms

### 🎨 **Modern UI/UX**
- **Gradient Animations**: Beautiful color transitions and hover effects
- **Framer Motion**: Smooth animations and page transitions
- **Dark Theme**: Elegant black and gold color scheme
- **Mobile-First**: Fully responsive across all devices

### 🔧 **Technical Excellence**
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **PWA Ready**: Manifest file for mobile app-like experience

---

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (managed with nvm)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/scc-cms.git
   cd scc-cms
   ```

2. **Use Node.js 22**
   ```bash
   nvm use 22
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|----------|
| **Next.js** | React Framework | 14.x |
| **TypeScript** | Type Safety | 5.x |
| **Tailwind CSS** | Styling | 3.x |
| **Framer Motion** | Animations | Latest |
| **Lucide React** | Icons | Latest |
| **Class Variance Authority** | Component Variants | Latest |

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **tw-animate-css** - Additional Tailwind animations

---

## 📁 Project Structure

```
scc-cms/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Main navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section with video background
│   │   ├── SpiritualMessages.tsx  # Interactive Bible messages
│   │   ├── TogetherInFaith.tsx    # Community events section
│   │   ├── BelongingFellowship.tsx # Photo gallery with modal
│   │   └── Footer.tsx       # Footer with social links
│   ├── pages/               # Page components
│   │   ├── tentang.tsx      # About page
│   │   └── komunitas.tsx    # Community page
│   ├── tentang/             # About route
│   ├── komunitas/           # Community route
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Home page with all features
├── public/                  # Static assets
│   ├── scc-logo.svg        # Church logo
│   ├── manifest.json       # PWA manifest
│   └── og-image.svg        # Social media preview
└── lib/
    └── utils.ts            # Utility functions
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Black (`#000000`) - Main background
- **Accent**: Yellow/Orange Gradient (`#FCD34D` to `#F97316`) - Highlights
- **Text**: White (`#FFFFFF`) - Primary text
- **Secondary**: Gray variants - Supporting text

### Typography
- **Headings**: Bold, large sizes with gradient effects
- **Body**: Clean, readable fonts with proper contrast
- **Interactive**: Hover states and smooth transitions

---

## 📱 Features in Detail

### Spiritual Messages Component
```typescript
// Interactive Bible verse display
- 5 clickable spiritual messages
- Each message reveals Bible verses
- Smooth animations and transitions
- Mobile-optimized layout
```

### Fellowship Gallery
```typescript
// Photo gallery with modal view
- Touch-enabled mobile slider
- Modal overlay for full-size images
- Responsive grid layout
- Smooth touch gestures
```

### Bible Verse Generator
```typescript
// Random inspirational verses
- 8+ carefully selected Bible verses
- Beautiful modal presentation
- "Get Another Verse" functionality
- Elegant typography and spacing
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   ```bash
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```
3. Deploy automatically on every push

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

We welcome contributions from our community! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📞 Contact & Support

<div align="center">
  
  **Soho City Church (GBI SCC Jakarta)**
  
  🌐 **Website**: [gbiscc.org](https://gbiscc.org)  
  📧 **Email**: info@gbiscc.org  
  📱 **Instagram**: [@soho.citychurch](https://instagram.com/soho.citychurch)  
  📍 **Location**: Jakarta, Indonesia  
  
  ---
  
  *"See what God can do through you"*
  
  **Built with ❤️ by the SCC Tech Team**
  
</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Made with ❤️ for the glory of God and the growth of His kingdom</sub>
</div>
