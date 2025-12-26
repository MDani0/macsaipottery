# Quick Start Guide

## For Local Development (Right Now!)

1. **Install dependencies**:
   ```bash
   cd laca-honlap
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **View the site**:
   Open your browser to `http://localhost:8080`

That's it! The site is now running locally.

## For Deployment (When Ready)

### One-Time Setup (15 minutes)

1. **Create GitHub repository** and push your code
2. **Sign up for Netlify** (free) and connect your GitHub repo
3. **Enable Identity & Git Gateway** in Netlify settings
4. **Invite the potter** to access the CMS at `yoursite.com/admin`

### Detailed Steps

See [README.md](README.md) for complete deployment instructions.

## Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm start` |
| Build for production | `npm run build` |
| Access CMS locally | Visit `/admin` page |

## Content Updates (After Deployment)

The potter can update content without touching code:

1. Go to `yoursite.com/admin`
2. Log in
3. Add/edit pottery items
4. Changes go live automatically in 1-2 minutes

## Need Help?

- Check the [README.md](README.md) for detailed instructions
- Issues? See the Troubleshooting section in README
- DecapCMS docs: https://decapcms.org/docs/
- Eleventy docs: https://www.11ty.dev/docs/
