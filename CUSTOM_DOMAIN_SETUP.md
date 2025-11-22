# 🌐 Custom Domain Setup Guide

Complete guide to set up **vinoduraisamy.com** with your GitHub Pages website.

## 📋 Overview

You'll need to:
1. Configure DNS records with your domain registrar
2. Add the custom domain in GitHub Pages settings
3. Wait for DNS propagation (5 minutes - 48 hours)
4. Enable HTTPS

---

## 🎯 Step 1: Create CNAME File

First, let's add a CNAME file to tell GitHub Pages about your custom domain:

This file should contain just your domain name.

---

## 🌍 Step 2: Configure DNS Records

Choose **Option A** (recommended) OR **Option B** below:

### Option A: Using CNAME Record (Recommended for www subdomain)

If you want your site at **www.vinoduraisamy.com**:

1. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. Go to DNS Management / DNS Settings
3. Add these records:

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | www       | vinodhini-sd.github.io       | 3600 |
| CNAME | @         | vinodhini-sd.github.io       | 3600 |

**OR** if your registrar doesn't allow CNAME for root (@):

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | www       | vinodhini-sd.github.io       | 3600 |
| A     | @         | 185.199.108.153              | 3600 |
| A     | @         | 185.199.109.153              | 3600 |
| A     | @         | 185.199.110.153              | 3600 |
| A     | @         | 185.199.111.153              | 3600 |

### Option B: Using A Records (For apex/root domain)

If you want your site at **vinoduraisamy.com** (no www):

1. Log in to your domain registrar
2. Go to DNS Management / DNS Settings
3. Add these records:

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| A     | @         | 185.199.108.153              | 3600 |
| A     | @         | 185.199.109.153              | 3600 |
| A     | @         | 185.199.110.153              | 3600 |
| A     | @         | 185.199.111.153              | 3600 |
| CNAME | www       | vinodhini-sd.github.io       | 3600 |

**Note**: The A records are GitHub Pages' IP addresses and should be entered exactly as shown.

---

## 🖥️ Step 3: Configure GitHub Pages

1. Go to: https://github.com/vinodhini-sd/personal-website/settings/pages

2. Under **"Build and deployment"**:
   - Source: **GitHub Actions** (should already be set)

3. Under **"Custom domain"**:
   - Enter: `vinoduraisamy.com` (or `www.vinoduraisamy.com`)
   - Click **Save**
   - GitHub will automatically create a CNAME file in your repository

4. Wait for DNS check to complete (green checkmark)

---

## 🔒 Step 4: Enable HTTPS (After DNS Propagates)

1. Once DNS check passes (usually 5-60 minutes)
2. In the same GitHub Pages settings
3. Check the box: **"Enforce HTTPS"**
4. GitHub will automatically provision an SSL certificate

**Note**: If "Enforce HTTPS" is grayed out, DNS hasn't propagated yet. Wait 15-30 minutes and refresh.

---

## 📊 Verify DNS Configuration

Check if your DNS is configured correctly:

```bash
# Check A records
dig vinoduraisamy.com +short

# Check CNAME records  
dig www.vinoduraisamy.com +short
```

Expected results:
- A records should show GitHub Pages IPs (185.199.108.153, etc.)
- CNAME should show vinodhini-sd.github.io

Online tools:
- https://dnschecker.org
- https://mxtoolbox.com/DNSLookup.aspx

---

## 🎨 Common Domain Registrar Instructions

### GoDaddy
1. Sign in to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **Manage DNS** next to your domain
4. Add records as shown above

### Namecheap
1. Sign in to Namecheap
2. Go to **Domain List** → **Manage**
3. Click **Advanced DNS** tab
4. Add records as shown above

### Google Domains
1. Sign in to Google Domains
2. Select your domain
3. Click **DNS** in the left menu
4. Scroll to **Custom records**
5. Add records as shown above

### Cloudflare (if using)
1. Sign in to Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Add records as shown above
5. **Important**: Set proxy status to **DNS only** (gray cloud, not orange) for CNAME record

---

## ✅ Final Checklist

- [ ] DNS records configured at domain registrar
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS check passed (green checkmark in GitHub)
- [ ] Website accessible at custom domain
- [ ] HTTPS enabled
- [ ] Both www and non-www versions work
- [ ] Redirects working correctly

---

## ⏱️ Timeline

| Step | Time |
|------|------|
| DNS configuration | 5 minutes |
| DNS propagation | 5 minutes - 48 hours (usually 15-30 minutes) |
| GitHub DNS check | 1-5 minutes after propagation |
| SSL certificate provisioning | 5-15 minutes after DNS check passes |
| **Total** | 30 minutes - 48 hours (typically under 1 hour) |

---

## 🆘 Troubleshooting

### DNS Check Failed in GitHub
**Cause**: DNS records not propagated yet  
**Solution**: Wait 15-30 minutes, try again

### Site shows 404
**Cause**: DNS not fully propagated or CNAME file missing  
**Solution**: 
- Wait for DNS propagation
- Check CNAME file exists in repository
- Verify custom domain in GitHub settings

### Can't enable HTTPS
**Cause**: DNS check hasn't passed  
**Solution**: 
- Ensure DNS is fully propagated
- Refresh GitHub Pages settings page
- Wait additional 15 minutes

### Mixed content warnings
**Cause**: Site loading HTTP resources  
**Solution**: Ensure all resources (CSS, JS, images) use HTTPS or relative URLs

### Domain shows different website
**Cause**: Old DNS records or caching  
**Solution**:
- Clear browser cache
- Try incognito/private mode
- Wait for DNS propagation
- Check DNS records are correct

---

## 🔄 Test Your Setup

After setup, test these URLs:
1. ✅ http://vinoduraisamy.com → should redirect to HTTPS
2. ✅ https://vinoduraisamy.com → should work
3. ✅ http://www.vinoduraisamy.com → should redirect to HTTPS
4. ✅ https://www.vinoduraisamy.com → should work

---

## 📞 Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Check DNS propagation: https://dnschecker.org
- Test DNS: https://mxtoolbox.com/SuperTool.aspx

---

**Questions?** Feel free to ask! I can help you troubleshoot any issues.

