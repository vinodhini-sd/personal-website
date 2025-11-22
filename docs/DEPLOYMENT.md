# GitHub Pages Deployment Guide

Your website is ready to deploy! Follow these simple steps to get it live on GitHub Pages.

## ✅ Already Completed
- ✅ Git repository initialized
- ✅ All files committed
- ✅ .gitignore file created

## 🚀 Deploy to GitHub Pages (Follow These Steps)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `vino-website` (or any name you prefer)
   - **Description**: "My personal portfolio website"
   - **Visibility**: Choose "Public" (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Navigate to your project
cd /Users/vduraisamy/Documents/vino-website

# Add GitHub as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/vino-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example (replace with your username):**
```bash
git remote add origin https://github.com/vinodhini-sd/vino-website.git
git branch -M main
git push -u origin main
```

You'll be prompted to enter your GitHub credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your GitHub password)
  - If you don't have a token, go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

### Step 4: Wait for Deployment (1-2 minutes)

GitHub will build and deploy your site. You'll see a message:
> "Your site is ready to be published at https://YOUR_USERNAME.github.io/vino-website/"

After a minute or two, the message will change to:
> "Your site is live at https://YOUR_USERNAME.github.io/vino-website/"

### Step 5: Visit Your Live Website! 🎉

Your website will be available at:
**`https://YOUR_USERNAME.github.io/vino-website/`**

Example: `https://vinodhini-sd.github.io/vino-website/`

---

## 🔄 Making Updates

Whenever you want to update your website:

```bash
cd /Users/vduraisamy/Documents/vino-website

# Make your changes to the files
# Then commit and push:

git add .
git commit -m "Update website content"
git push
```

GitHub Pages will automatically update your site within a minute!

---

## 💡 Pro Tips

### Custom Domain (Optional)
If you have a custom domain (like `www.vinodhini.com`):
1. Go to repository Settings → Pages
2. Enter your custom domain
3. Update your domain's DNS settings to point to GitHub Pages

### Use Your Username for Main Portfolio
For your main portfolio site at `username.github.io`:
- Create a repository named exactly: `YOUR_USERNAME.github.io`
- Push your code there
- It will be available at `https://YOUR_USERNAME.github.io` (no project name needed)

### HTTPS
GitHub Pages automatically provides HTTPS for your site! ✅

---

## 🆘 Troubleshooting

**Problem: Git push asks for username/password repeatedly**
- Solution: Set up SSH keys or use a Personal Access Token

**Problem: Site shows 404**
- Wait 2-5 minutes after enabling GitHub Pages
- Check that the branch and folder are set correctly in Settings → Pages
- Make sure your repository is public

**Problem: Styles not loading**
- Check that all file paths are relative (they are in your current setup)
- Clear browser cache

**Problem: Can't find Pages settings**
- Make sure the repository is public
- Check you're in the Settings tab of your repository (not your account settings)

---

## 📞 Need Help?

If you run into any issues:
1. Check the repository Settings → Pages for deployment status
2. Look at the "Actions" tab to see build logs
3. GitHub's [Pages documentation](https://docs.github.com/en/pages)

---

**Ready to deploy? Start with Step 1 above!** 🚀

