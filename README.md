# 🚀 Christella Munezero - Portfolio Website

A modern, futuristic portfolio website showcasing my work as a Software Developer. Built with cutting-edge technologies and featuring stunning animations, interactive elements, and a sleek cyberpunk-inspired design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Modern UI/UX**: Cyberpunk-inspired design with glassmorphism effects
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **🎭 Smooth Animations**: Powered by Framer Motion for fluid interactions
- **🌍 Interactive 3D Globe**: Three.js powered globe showing global presence
- **📱 Fully Responsive**: Seamless experience across all devices
- **🌙 Dark Theme**: Eye-friendly dark mode design
- **💼 Project Showcase**: Interactive project cards with detailed information
- **📝 Blog Section**: Full article viewer with expandable content
- **📄 CV Download**: One-click resume download functionality
- **🎯 Interactive Elements**: Matrix rain, floating particles, and HUD elements
- **📊 Experience Timeline**: Visual representation of professional journey

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Tailwind Animate CSS** - Animation utilities
- **Emotion** - CSS-in-JS styling

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Shadcn/ui** - Re-usable component collection

### Animation
- **Framer Motion (Motion)** - Production-ready animation library
- **React Slick** - Carousel component

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Additional Libraries
- **React Hook Form** - Form management
- **Recharts** - Chart library
- **Date-fns** - Date utility library
- **Sonner** - Toast notifications
- **EmailJS** - Email service for contact form

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/Chiki-tella/portfolio__v3.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Then add your EmailJS credentials (see [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for detailed instructions):
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Start the development server
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Chiki-tella.JPG          # Profile image
│   └── Munezero_Christella_CV_2.pdf  # Resume/CV
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Blog.tsx          # Blog with full article viewer
│   │   │   ├── CircuitBoard.tsx  # Background effect
│   │   │   ├── Contact.tsx       # Contact form
│   │   │   ├── Experience.tsx    # Timeline component
│   │   │   ├── FloatingParticles.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx          # Landing section
│   │   │   ├── HUDElements.tsx   # Futuristic UI elements
│   │   │   ├── MatrixRain.tsx    # Matrix effect
│   │   │   ├── Navigation.tsx    # Nav bar
│   │   │   ├── Projects.tsx      # Project showcase
│   │   │   ├── Skills.tsx        # Skills section
│   │   │   ├── TerminalEffect.tsx
│   │   │   ├── TypingAnimation.tsx
│   │   │   └── ui/               # Reusable UI components
│   │   └── App.tsx
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Key Sections

### Hero Section
- Animated typing effect with name
- Professional tagline
- Quick stats (Projects, Experience, Clients)
- CTA buttons (View Projects, Download CV)
- Terminal effect animation

### About Section
- Personal introduction
- Professional highlights
- Skill categories with icons
- Profile image with glassmorphism effect

### Skills Section
- Technology stack visualization
- Categorized skill sets
- Interactive hover effects

### Projects Section
- Project cards with images
- Technology tags
- Expandable descriptions
- Live demo and GitHub links

### Experience Section
- Timeline layout
- Professional history
- Achievements and responsibilities
- Visual indicators for different roles

### Blog Section
- Article cards with excerpts
- Full article modal viewer
- Category badges
- Read time indicators
- Expandable content

### Contact Section
- Contact form with EmailJS integration
- Real-time form validation
- Success/error notifications
- Social media links
- Professional information
- **Interactive 3D Globe** with location markers

## 🎯 Features in Detail

### Interactive Elements
- **Matrix Rain**: Animated background effect
- **Floating Particles**: Dynamic particle system
- **Circuit Board**: Animated circuit patterns
- **HUD Elements**: Futuristic UI overlays
- **Terminal Effect**: Live coding simulation
- **3D Globe**: Interactive Three.js globe with location markers

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading animations
- Typing effects

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Christella Munezero**

- Portfolio: [Your Portfolio URL]
- GitHub: [@Chiki-tella](https://github.com/Chiki-tella)
- LinkedIn: [m-i-christella](https://linkedin.com/in/m-i-christella)
- Email: christellamunezeroimpano@gmail.com

## 🙏 Acknowledgments

- Design inspiration from Figma community
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

<p align="center">Made with ❤️ and lots of ☕</p>
