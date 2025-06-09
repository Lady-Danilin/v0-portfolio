# Daniela Ayelén Argüello - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Animated skill bars, typing effect, scroll animations
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Parallax Effects**: Subtle parallax scrolling for enhanced visual appeal

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to add your personal information
3. **Style modifications**: Adjust colors and styling in `styles.css`
4. **Add functionality**: Enhance JavaScript features in `script.js`

## 📝 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

#### Hero Section (Lines 35-50)
- Update the name and title
- Modify the description
- Add your profile photo (replace the placeholder)

#### About Section (Lines 65-95)
- Personalize the about text
- Update statistics (years of experience, projects, etc.)
- Add your professional photo

#### Experience Section (Lines 105-160)
- Replace with your actual work experience
- Update job titles, companies, and dates
- Add specific achievements and responsibilities

#### Skills Section (Lines 170-220)
- List your technical and soft skills
- Adjust skill levels (percentages)
- Add or remove skills as needed

#### Projects Section (Lines 230-290)
- Showcase your best work
- Add project descriptions and images
- Update links to your actual projects

#### Contact Section (Lines 300-340)
- Add your real contact information
- Update email, phone, and location
- Add links to your social media profiles

### Design Customization

#### Colors
The main color scheme uses a blue-purple gradient. To change colors, update these CSS variables in `styles.css`:

\`\`\`css
/* Primary gradient colors */
#667eea /* Light blue */
#764ba2 /* Purple */

/* Background colors */
#f5f7fa /* Light gray */
#c3cfe2 /* Light blue-gray */
\`\`\`

#### Fonts
The website uses Inter font from Google Fonts. To change the font:
1. Update the Google Fonts link in the HTML `<head>`
2. Modify the `font-family` property in CSS

#### Layout
- Adjust container max-width in `.container` class
- Modify section padding in `section` class
- Change grid layouts for different screen sizes

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

## 🎨 Interactive Features

### Animations
- **Scroll animations**: Elements fade in as you scroll
- **Skill bars**: Animate when the skills section comes into view
- **Typing effect**: Dynamic subtitle in the hero section
- **Hover effects**: Interactive buttons and cards

### Navigation
- **Smooth scrolling**: Clicking navigation links smoothly scrolls to sections
- **Active highlighting**: Current section is highlighted in navigation
- **Mobile menu**: Hamburger menu for mobile devices

### Special Features
- **Parallax scrolling**: Subtle parallax effect in the hero section
- **Easter egg**: Try the Konami code (↑↑↓↓←→←→BA) for a surprise!

## 🔧 Technical Details

### File Structure
\`\`\`
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
\`\`\`

### Dependencies
- **Font Awesome**: Icons (loaded via CDN)
- **Google Fonts**: Inter font family (loaded via CDN)
- **No JavaScript frameworks**: Pure vanilla JavaScript

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Form Integration

The contact form currently shows a demo alert. To make it functional:

1. **Backend Integration**: Connect to a backend service (PHP, Node.js, etc.)
2. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Server Setup**: Set up your own server to handle form submissions

### Example with EmailJS:
1. Sign up for EmailJS
2. Add the EmailJS SDK
3. Replace the form handler in `script.js`

## 🚀 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly

### Vercel
1. Import your GitHub repository
2. Deploy with zero configuration

### Traditional Web Hosting
1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory

## 🔄 Future Enhancements

Consider adding:
- Blog section
- Portfolio filtering
- Dark/light mode toggle
- Multi-language support
- CMS integration
- SEO optimization
- Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ for Daniela Ayelén Argüello**

For questions or support, please open an issue or contact through the portfolio website.
