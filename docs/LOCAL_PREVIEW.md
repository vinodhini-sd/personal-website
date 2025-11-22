# 👀 View Your Website Locally

You have several options to preview your website on your local machine before deploying:

## 🚀 Quick Start (Currently Running!)

I've started a local server for you! Your website is now available at:

### **🌐 http://localhost:8000**

Just open your web browser and visit: **http://localhost:8000**

---

## 📋 Methods to View Locally

### Method 1: Python HTTP Server (RECOMMENDED) ✅

**Python 3:**
```bash
cd /Users/vduraisamy/Documents/vino-website
python3 -m http.server 8000
```

**Python 2:**
```bash
cd /Users/vduraisamy/Documents/vino-website
python -m SimpleHTTPServer 8000
```

Then visit: http://localhost:8000

**To stop the server:** Press `Ctrl + C` in the terminal

---

### Method 2: Using Node.js (http-server)

If you prefer using Node.js:

```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to your project
cd /Users/vduraisamy/Documents/vino-website

# Start the server
http-server
```

Then visit: http://localhost:8080

---

### Method 3: Using npx (No Installation)

```bash
cd /Users/vduraisamy/Documents/vino-website
npx http-server
```

Then visit: http://localhost:8080

---

### Method 4: Direct File Opening (Limited)

You can also just open the HTML file directly:

```bash
# Mac
open index.html

# Or double-click index.html in Finder
```

**Note:** Some features might not work properly when opening files directly (file:// protocol). Using a local server is recommended!

---

## 🔄 Making Changes and Seeing Updates

When you're running a local server:

1. Edit your files (`index.html`, `styles.css`, `script.js`)
2. Save the changes
3. Refresh your browser (or use `Cmd + Shift + R` for hard refresh)
4. See your changes instantly!

---

## 🛑 Stopping the Server

When you're done previewing:
- Press `Ctrl + C` in the terminal where the server is running
- Or just close the terminal window

---

## 💡 Pro Tips

### Open in Multiple Browsers
Test your site in different browsers to ensure compatibility:
- Safari
- Chrome
- Firefox
- Edge

### Mobile Preview
- In Chrome: Open DevTools (F12) → Toggle device toolbar (Cmd + Shift + M)
- In Safari: Enable Developer menu → Enter Responsive Design Mode
- Or visit http://localhost:8000 from your phone (if on same network)

### Auto-Reload on Changes
For automatic browser refresh when you edit files:
```bash
# Install live-server
npm install -g live-server

# Run it
cd /Users/vduraisamy/Documents/vino-website
live-server
```

---

## 🎯 Current Status

**✅ Local server is running on port 8000**
**🌐 Visit: http://localhost:8000**

Enjoy previewing your beautiful website! 🎉

