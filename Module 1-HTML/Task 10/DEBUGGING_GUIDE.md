# Debugging with Chrome DevTools - Complete Guide

## Overview
This guide demonstrates how to debug layout issues and script errors using Chrome DevTools and VS Code integration.

## Files Included
- `index.html` - Dashboard HTML with user profile section
- `styles.css` - CSS with intentional layout bug (width: 110% on cards)
- `script.js` - JavaScript with console logs and event listeners
- `DEBUGGING_GUIDE.md` - This file

## Issues to Debug

### 1. Layout Issue
- **Problem**: Cards have `width: 110%` in CSS, causing horizontal overflow
- **Location**: [styles.css](styles.css#L48)
- **Impact**: Horizontal scrollbar appears on some screens

### 2. Script Issues
- **Problem**: Attempting to access undefined property `userData.fullName`
- **Location**: [script.js](script.js#L18)
- **Impact**: Displays 'Guest' instead of actual username

---

## Step-by-Step Debugging Tutorial

### Step 1: Open the Project in Browser

1. **Open File in Browser**:
   - Right-click on `index.html` in VS Code
   - Select "Open with Live Server" OR
   - Open directly: `file:///c:/Users/Rashmitha/OneDrive/Desktop/Git/Module%201-css/Task%2010/index.html`

2. **Verify App Loads**: You should see the dashboard with cards and buttons

---

### Step 2: Use Chrome DevTools - Console Tab

#### Open DevTools
- **Windows/Linux**: Press `F12` or `Ctrl+Shift+I`
- **Mac**: Press `Cmd+Option+I`
- Alternative: Right-click → "Inspect"

#### View Console Logs
1. Click the **Console** tab
2. You'll see logs like:
   ```
   === Dashboard App Initialized ===
   Current User: John Doe
   Page loaded at: [timestamp]
   Updating user display...
   Display name retrieved: Guest  ← This shows the bug
   User data: {name: 'John Doe', email: 'john@example.com', ...}
   ```

#### Use Debugging Utilities
The app includes helper functions accessible in the console:

```javascript
// Get user data
window.debugInfo.getUser()

// Get activity log
window.debugInfo.getActivities()

// Change user name and refresh display
window.debugInfo.setUserName('Jane Smith')

// Print all data in table format
window.debugInfo.printAllData()
```

#### Try These Console Commands
```javascript
// Check variable values
console.log(userData)

// Check what's in the DOM
document.getElementById('username').textContent

// Access button elements
document.getElementById('toggle-notifications')

// Test a function
updateUserDisplay()

// Clear console
clear()
```

---

### Step 3: Use Chrome DevTools - Elements/Inspector Tab

#### Inspect the Layout Issue

1. **Open Inspector**: Press `F12`, go to **Elements** tab (or **Inspector** in Firefox)

2. **Select the Card Element**:
   - Click the selector tool (arrow icon in top-left of DevTools)
   - Click on one of the white cards on the page
   - The HTML structure appears highlighted

3. **Locate the CSS Issue**:
   - In the Inspector, find the `.card` class
   - Look at the **Styles panel** on the right
   - Find: `width: 110%;` ← This is causing the overflow!

4. **Live Modify the CSS**:
   - Click on `110%` in the Styles panel
   - Change it to `100%`
   - Press Enter
   - **Watch the page update instantly!** Horizontal scroll disappears

5. **Try Other Changes**:
   - Change `padding: 25px` to `padding: 40px` → Cards get more spacious
   - Change `border-radius: 8px` to `border-radius: 15px` → More rounded corners
   - Change `background: white` to `background: #f0f0f0` → Different background color

#### Inspect Elements Hierarchy
- Expand the HTML tree in Inspector
- Click different elements to see their styles
- Modify styles and see live changes
- Use the **Computed** tab to see all applied styles

---

### Step 4: Add Breakpoints and Debug JavaScript

#### Method 1: Add Breakpoints in DevTools

1. **Open DevTools** → **Sources** tab (or **Debugger** in Firefox)

2. **Navigate to script.js**:
   - Look for `script.js` in the left sidebar under the domain folder
   - Click on it to view the code

3. **Set Breakpoints**:
   - Click on the line number where you want to stop execution
   - Good places to add breakpoints:
     - Line 11: `function updateUserDisplay()`
     - Line 18: `const displayName = userData.fullName || 'Guest';`
     - Line 30: `function setupEventListeners()`

4. **Trigger the Breakpoint**:
   - Close DevTools briefly (or move it to see the page)
   - Click the "Enable Notifications" button
   - DevTools will pause at the breakpoint!

5. **Inspect Variables**:
   - When paused, look at the right panel showing variable values
   - Hover over variables in the code to see their values
   - Inspect `userData` object
   - Check the value of `displayName`

#### Method 2: Conditional Breakpoints

1. Right-click a line number in Sources tab
2. Select "Add conditional breakpoint"
3. Enter a condition: `userData.name === 'John Doe'`
4. The breakpoint only triggers when the condition is true

#### Method 3: Watch Expressions

1. In the **Watch** section of DevTools (right panel)
2. Click the "+" button
3. Add expressions to monitor:
   - `userData.notificationsEnabled`
   - `userData.name`
   - `activities.length`
4. Values update as you step through code

---

### Step 5: Use Step Controls

When paused at a breakpoint:

| Control | Keyboard | Purpose |
|---------|----------|---------|
| Step Over | F10 | Execute next line (skip function calls) |
| Step Into | F11 | Enter the function on current line |
| Step Out | Shift+F11 | Exit current function |
| Continue | F8 | Resume execution |

**Try This**:
1. Set breakpoint at line 30: `function setupEventListeners()`
2. Click a button to trigger the breakpoint
3. Press F11 to step into the function
4. Watch each line execute
5. Inspect variable values as you step through

---

### Step 6: Monitor Performance

#### In Console Tab:

The app uses `console.time()` to measure load time:
```javascript
console.time('App Load Time');
// ... code executes ...
console.timeEnd('App Load Time');
```

**View Performance Timing**:
- Check the Console tab to see: `App Load Time: X ms`
- This helps identify slow operations

#### Performance Tab:
1. Click **Performance** tab
2. Click the record button
3. Interact with the page (click buttons, scroll)
4. Stop recording
5. Analyze the flame chart to see what's taking time

---

### Step 7: Fix the Issues in Code

#### Fix 1: Layout Issue (in styles.css)

**Original (Line 48)**:
```css
width: 110%;
```

**Fixed**:
```css
width: 100%;
```

#### Fix 2: JavaScript Issue (in script.js)

**Original (Line 18)**:
```javascript
const displayName = userData.fullName || 'Guest'; // fullName doesn't exist
```

**Fixed**:
```javascript
const displayName = userData.name || 'Guest'; // Use existing 'name' property
```

#### Fix 3: Verify in Browser
1. Make the code changes
2. Reload the page (F5 or Ctrl+R)
3. Check the Console → username should now show "John Doe" instead of "Guest"
4. Horizontal scroll should be gone

---

## Debugging Checklist

- [ ] **Console Tab**: Viewed console.log messages
- [ ] **Inspect Element**: Modified CSS styles live
- [ ] **Found Layout Issue**: Identified `width: 110%` causing overflow
- [ ] **Found Script Issue**: Located `userData.fullName` bug
- [ ] **Added Breakpoints**: Set breakpoints in script.js
- [ ] **Stepped Through Code**: Used F10/F11 to debug
- [ ] **Watched Variables**: Monitored variable values
- [ ] **Used Debugging Utilities**: Called `window.debugInfo` functions
- [ ] **Fixed Issues**: Applied code changes
- [ ] **Verified Fixes**: Reloaded and confirmed fixes work

---

## Quick Reference: DevTools Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| F12 | Open/Close DevTools |
| Ctrl+Shift+I | Open DevTools (Inspector) |
| Ctrl+Shift+C | Select element |
| F10 | Step over |
| F11 | Step into |
| Shift+F11 | Step out |
| F8 | Continue |
| Ctrl+G | Go to line |
| Ctrl+F | Search in current file |

---

## Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| DevTools won't open | Try F12, Ctrl+Shift+I, or right-click → Inspect |
| Breakpoints not working | Make sure JavaScript is enabled; reload page |
| Can't modify styles | Check if Live Server is running; styles auto-update when active |
| Console shows nothing | Check if script loaded; reload page |
| Changes disappear on reload | Use "Inspect Element" only for testing; edit files for permanent changes |

---

## Learning Goals Achieved

✅ **Inspect Element**: Modify CSS styles in real-time to diagnose layout issues  
✅ **Console Logging**: View app logs and debug output  
✅ **Breakpoints**: Pause execution and inspect variable values  
✅ **Step Debugging**: Walk through code line-by-line  
✅ **Developer Utilities**: Use helper functions for debugging  

---

## Next Steps

1. **Find More Bugs**: Try to identify other potential issues
2. **Practice Breakpoints**: Add breakpoints in different functions
3. **Optimize Performance**: Use Performance tab to find slow code
4. **Network Debugging**: Use Network tab to inspect resource loading
5. **Mobile Debugging**: Use Device toolbar to test responsive design

Enjoy debugging! 🐛🔧
