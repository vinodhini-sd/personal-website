# 🚀 Deploy to GitHub Pages - Simple Guide

Your website is ready to go live on GitHub Pages! Follow these 3 simple steps.

---

## 📋 Step 1: Enable GitHub Pages (30 seconds)

1. **Go to your repository settings**:
   - Visit: https://github.com/vinodhini-sd/personal-website/settings/pages

2. **Configure the source**:
   - Under **"Build and deployment"** section
   - Under **"Source"**, select: **GitHub Actions**
   - That's it! No need to click Save - it's automatic

---

## 📊 Step 2: Wait for Deployment (1-2 minutes)

1. **Watch the deployment progress**:
   - Go to: https://github.com/vinodhini-sd/personal-website/actions
   - You'll see a workflow called "Deploy to GitHub Pages"
   - Wait for the green checkmark ✓

2. **Check the Pages settings**:
   - Go back to: https://github.com/vinodhini-sd/personal-website/settings/pages
   - You'll see a message: "Your site is live at..."

---

## 🎉 Step 3: Visit Your Live Website!

Your website will be live at:

### **https://vinodhini-sd.github.io/personal-website/**

---

## 🔄 Making Updates After Deployment

Whenever you want to update your website:

```bash
# Make your changes to index.html, styles.css, script.js, etc.

# Commit and push to GitHub
git add .
git commit -m "Update website content"
git push origin main

# Your site automatically redeploys in 1-2 minutes!
```

---

## 📊 Monitor Your Deployments

- **Actions/Workflows**: https://github.com/vinodhini-sd/personal-website/actions
- **Pages Settings**: https://github.com/vinodhini-sd/personal-website/settings/pages
- **Your Repository**: https://github.com/vinodhini-sd/personal-website

---

## ✅ Checklist

- [ ] Enabled GitHub Actions in Pages settings
- [ ] Deployment workflow completed successfully
- [ ] Visited https://vinodhini-sd.github.io/personal-website/
- [ ] Website loads correctly
- [ ] All sections working (navigation, animations, links)

---

## 🆘 Troubleshooting

### Issue: Don't see "GitHub Actions" option
**Solution**: 
- Make sure your repository is public
- Refresh the page after the workflow has run once
- Check that the workflow file exists: `.github/workflows/deploy.yml`

### Issue: Workflow fails in Actions tab
**Solution**:
- Click on the failed workflow to see error details
- Most common fix: Go to Settings → Actions → General → Workflow permissions → Select "Read and write permissions" → Save

### Issue: Site shows 404 error
**Solution**:
- Wait 2-3 minutes after first deployment
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check deployment completed in Actions tab

### Issue: Styles/images not loading
**Solution**:
- All paths are already relative in your code, so this should work automatically
- Clear browser cache
- Check browser console (F12) for any errors

---

## 🔐 Repository Permissions (If Workflow Fails)

If you see a permissions error in the Actions tab:

1. Go to: https://github.com/vinodhini-sd/personal-website/settings/actions
2. Scroll to **"Workflow permissions"**
3. Select: **"Read and write permissions"**
4. Check: **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**
6. Re-run the failed workflow

---

## 🎯 What Happens Automatically

✅ **On every push to main branch**:
- GitHub Actions workflow triggers
- Builds your site
- Deploys to GitHub Pages
- Site updates within 1-2 minutes

✅ **No manual steps needed** after initial setup!

---

## 📞 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Your Actions Tab**: https://github.com/vinodhini-sd/personal-website/actions
- **Pages Settings**: https://github.com/vinodhini-sd/personal-website/settings/pages

---

## 🚀 Ready to Deploy?

**👉 Start here**: https://github.com/vinodhini-sd/personal-website/settings/pages

Select **"GitHub Actions"** and your site goes live! 🎉

**Your live URL**: https://vinodhini-sd.github.io/personal-website/

