# Task 8: Saving User Preferences

## Overview
This project demonstrates working with `localStorage` and `sessionStorage` to save and manage user preferences. Users can select a preferred event type, and the selection is persisted across browser sessions.

## Features Implemented

### 1. **Save Selected Event Type in localStorage**
- When the user submits the form, the selected event type is saved to `localStorage`
- Key used: `preferredEventType`
- The value persists even after closing the browser

### 2. **Retrieve and Pre-Select on Reload**
- On page load, the script automatically:
  - Checks `localStorage` for a saved preference using `loadPreference()`
  - If found, pre-selects the saved value in the dropdown
  - Displays a success message confirming the preference was loaded

### 3. **Clear Preferences Button**
- "Clear Preferences" button clears both:
  - `localStorage.clear()` - removes all localStorage items
  - `sessionStorage.clear()` - removes all sessionStorage items
- Resets the form to default state
- Provides user feedback

### 4. **Real-time Storage Display**
- Shows current preference (if saved)
- Displays all `localStorage` data in JSON format
- Displays all `sessionStorage` data in JSON format
- "Refresh Storage Info" button updates the display

## File Structure

```
Task 8/
├── index.html       # HTML markup with form and storage display
├── styles.css       # Responsive styling with gradient design
├── script.js        # All JavaScript functionality
└── README.md        # This file
```

## How It Works

### localStorage Implementation
```javascript
// Save
localStorage.setItem('preferredEventType', selectedValue);

// Retrieve
const savedPreference = localStorage.getItem('preferredEventType');

// Clear
localStorage.clear();
```

### sessionStorage Implementation
```javascript
// The app stores session data on page load
const sessionData = {
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    sessionId: generateSessionId()
};
sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
```

## Usage Instructions

1. **Open the HTML file** in a web browser
2. **Select an event type** from the dropdown
3. **Click "Save Preference"** to store it
4. **Refresh the page** - the preference will be automatically reloaded
5. **Click "Clear Preferences"** to remove all saved data
6. **View Storage Info** section to see what's stored

## Testing the Storage

### Test 1: Verify localStorage Persistence
1. Select "Concert" and save
2. Refresh the page → "Concert" should be selected
3. Close the browser and reopen the file → "Concert" should still be selected

### Test 2: Clear All Data
1. Save a preference
2. Click "Clear Preferences"
3. All storage data is cleared, form resets

### Test 3: Session Data
1. Open browser console (F12)
2. Click "Refresh Storage Info"
3. Session data appears in sessionStorage section

## Console Commands

**Debug Storage Contents:**
```javascript
// Type in browser console:
debugStorage()
```

**Keyboard Shortcut:**
- Press `Ctrl + Shift + D` to log storage debug info

## Storage Limits

- **localStorage**: ~5-10MB per domain
- **sessionStorage**: ~5-10MB per domain (cleared when tab closes)

## Browser Compatibility

- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support
- IE 8+: ✓ Supported

## Key Concepts Demonstrated

1. **localStorage**
   - Persistent across browser sessions
   - Survives closing and reopening browser
   - Accessible across tabs/windows of same origin

2. **sessionStorage**
   - Clears when browser tab closes
   - Specific to each tab
   - Good for temporary data

3. **Storage Events**
   - Can track changes across tabs
   - Useful for multi-tab applications

4. **Error Handling**
   - Try-catch blocks for storage operations
   - Graceful degradation if storage unavailable

## Potential Enhancements

- Add multiple preferences (theme, language, etc.)
- Track preference change history
- Export/import preferences
- Sync preferences to server
- Add storage quota warnings
- Implement preference versioning
