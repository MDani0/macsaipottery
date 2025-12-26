# Potter Portfolio Website

A beautiful, rustic website for showcasing handcrafted pottery pieces. Built with Eleventy (11ty) and DecapCMS for easy content management.

## Features

- 🎨 Warm, rustic design perfect for pottery/artisan work
- 🖼️ Gallery pages for available and sold items
- 💰 Hungarian Forint (HUF) currency formatting
- 📱 Fully responsive (mobile, tablet, desktop)
- ✏️ Easy content management with DecapCMS
- 📧 Contact form with Netlify Forms
- 🔍 Filterable galleries by category
- 🖼️ Multi-image support for each pottery piece
- ⚡ Fast, static site (no database required)
- 🆓 Free hosting on Netlify

## Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **CMS**: DecapCMS (formerly Netlify CMS)
- **Hosting**: Netlify (free tier)
- **Forms**: Netlify Forms
- **Images**: Netlify Large Media or Cloudinary (optional)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- GitHub account
- Netlify account (free)

### Local Development

1. **Install dependencies**:
   ```bash
   cd laca-honlap
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Visit `http://localhost:8080`

4. **Build for production**:
   ```bash
   npm run build
   ```
   The built site will be in the `_site` folder.

## Deployment to Netlify

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository (e.g., "laca-pottery")
2. Initialize this project as a git repository:
   ```bash
   cd laca-honlap
   git init
   git add .
   git commit -m "Initial commit - pottery website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/laca-pottery.git
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

1. Go to [Netlify](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify to access your repositories
4. Select your repository (e.g., "laca-pottery")
5. Configure build settings (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `_site`
   - **Node version**: 18
6. Click "Deploy site"

Your site will be live in ~2 minutes at a Netlify URL like `random-name-123.netlify.app`

### Step 3: Set Up Custom Domain (Optional)

1. Purchase a domain from Namecheap, Google Domains, or any registrar (~$10-15/year)
2. In Netlify dashboard → Domain settings → Add custom domain
3. Follow Netlify's instructions to update your domain's DNS settings
4. Netlify will automatically provision a free SSL certificate

### Step 4: Enable DecapCMS

1. In Netlify dashboard → Site settings → Identity
2. Click "Enable Identity"
3. Under Registration preferences, select "Invite only"
4. Scroll down to Services → Git Gateway, click "Enable Git Gateway"
5. Go to Identity tab → Invite users → Enter the potter's email
6. They'll receive an invitation email to set up their account

### Step 5: Access the CMS

1. Go to `yoursite.com/admin`
2. Log in with the account created from the invitation
3. Start adding pottery items!

## Using the CMS

### Adding a New Pottery Item

1. Log in to `yoursite.com/admin`
2. Click "Pottery Items" → "New Pottery Item"
3. Fill in the details:
   - **Title**: Name of the piece
   - **Images**: Upload photos (click to add multiple)
   - **Price**: In HUF (e.g., 25000)
   - **Status**: "available" or "sold"
   - **Category**: Bowl, Vase, Mug, Plate, Sculpture, or Other
   - **Dimensions**: Height, diameter, width (in inches)
   - **Materials**: Clay type and glazes used
   - **Technique**: e.g., "Wheel-thrown", "Hand-built"
   - **Description**: Details about the piece
   - **Year Created**: Optional
   - **Featured**: Check to show on homepage
4. Click "Publish"
5. Site rebuilds automatically (1-2 minutes)

### Marking an Item as Sold

1. Log in to the CMS
2. Find the item in "Pottery Items"
3. Click to edit
4. Change **Status** from "available" to "sold"
5. Click "Publish"
6. Item automatically moves to "Past Work" gallery

### Editing Pages

- **Home Page**: Update hero image, title, subtitle, and intro text
- **About Page**: Edit artist bio, photo, and studio information

## Project Structure

```
laca-honlap/
├── src/
│   ├── _includes/          # Layout templates
│   │   ├── base.njk        # Base layout with header/footer
│   │   ├── home.njk        # Homepage layout
│   │   ├── page.njk        # About page layout
│   │   └── pottery-item.njk # Individual pottery item layout
│   ├── admin/              # DecapCMS admin interface
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # CMS entry point
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   ├── images/             # Static images
│   ├── pottery/            # Pottery item markdown files
│   ├── index.md            # Homepage content
│   ├── about.md            # About page content
│   ├── available.njk       # Available pieces gallery
│   ├── past-work.njk       # Past work gallery
│   └── contact.njk         # Contact page with form
├── .eleventy.js            # Eleventy configuration
├── netlify.toml            # Netlify deployment config
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Customization

### Colors

Edit the CSS variables in `src/css/style.css`:

```css
:root {
  --clay-terracotta: #C67C5B;
  --clay-dark: #8B5A3C;
  --clay-light: #E8C9B8;
  --cream: #F5F1ED;
  --earth-brown: #6B4423;
  /* ... etc */
}
```

### Translating to Hungarian

1. Edit text in template files (`src/_includes/*.njk`, `src/*.njk`)
2. Update CMS labels in `src/admin/config.yml`
3. Update placeholder text in forms and navigation

### Adding More Categories

Edit `src/admin/config.yml` and find the category field:

```yaml
- {label: "Category", name: "category", widget: "select",
   options: ["Bowl", "Vase", "Mug", "Plate", "Sculpture", "YourNewCategory"]}
```

Also update filter buttons in `src/available.njk` and `src/past-work.njk`.

## Photography Tips

For best results:
- Use consistent, neutral background (white or light gray)
- Natural lighting works best
- Take multiple angles: front, side, top, detail shots
- Minimum 1000px width for good quality
- Images are automatically optimized

## Costs

- **Hosting**: $0/month (Netlify free tier)
- **Domain**: ~$10-15/year (optional)
- **Total**: **$0-15/year**

Netlify free tier includes:
- 100GB bandwidth/month
- 300 build minutes/month
- Free SSL certificate
- Free form handling (100 submissions/month)
- Automatic deployments

## Support & Troubleshooting

### Site not updating after CMS changes?

1. Check Netlify dashboard → Deploys to see if build succeeded
2. Check for build errors in the deploy log
3. Try manually triggering a deploy: Deploys → Trigger deploy → Deploy site

### CMS login not working?

1. Make sure Git Gateway is enabled in Netlify
2. Check that user received and accepted invitation email
3. Try resetting password through Identity tab

### Images not showing?

1. Make sure images are uploaded through the CMS (not added manually)
2. Check that image paths start with `/images/uploads/`
3. Verify images are committed to the repository

### Local development issues?

```bash
# Clear cache and reinstall
rm -rf node_modules _site
npm install
npm start
```

## Contributing

This is a personal portfolio site, but feel free to fork and adapt for your own use!

## License

MIT License - feel free to use this for your own pottery or artisan portfolio.

## Credits

Built with ❤️ using:
- [Eleventy](https://www.11ty.dev/)
- [DecapCMS](https://decapcms.org/)
- [Netlify](https://www.netlify.com/)
