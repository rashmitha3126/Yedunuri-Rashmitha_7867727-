// Constants
const PREFERENCE_KEY = 'preferredEventType';
const SESSION_KEY = 'sessionData';

// DOM Elements
const form = document.getElementById('preferencesForm');
const eventTypeSelect = document.getElementById('eventType');
const clearBtn = document.getElementById('clearBtn');
const refreshBtn = document.getElementById('refreshBtn');
const messageDiv = document.getElementById('message');
const currentPreferenceDiv = document.getElementById('currentPreference');
const localStorageDataDiv = document.getElementById('localStorageData');
const sessionStorageDataDiv = document.getElementById('sessionStorageData');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded - initializing preferences');
    
    // Load saved preference from localStorage
    loadPreference();
    
    // Store session data on first load
    storeSessionData();
    
    // Update storage display
    updateStorageDisplay();
});

/**
 * Load preference from localStorage and pre-select it
 */
function loadPreference() {
    const savedPreference = localStorage.getItem(PREFERENCE_KEY);
    
    if (savedPreference) {
        eventTypeSelect.value = savedPreference;
        console.log(`Preference loaded from localStorage: ${savedPreference}`);
        showMessage(`Preference loaded: ${savedPreference}`, 'success');
    } else {
        console.log('No preference found in localStorage');
        showMessage('No saved preference found', 'success');
    }
}

/**
 * Save preference to localStorage when form is submitted
 */
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const selectedValue = eventTypeSelect.value;
    
    if (!selectedValue) {
        showMessage('Please select an event type', 'error');
        return;
    }
    
    try {
        // Save to localStorage
        localStorage.setItem(PREFERENCE_KEY, selectedValue);
        console.log(`Preference saved to localStorage: ${selectedValue}`);
        
        // Show success message
        showMessage(`✓ Preference saved: ${selectedValue}`, 'success');
        
        // Update storage display
        updateStorageDisplay();
    } catch (error) {
        console.error('Error saving preference:', error);
        showMessage('Error saving preference to localStorage', 'error');
    }
});

/**
 * Clear all preferences (localStorage and sessionStorage)
 */
clearBtn.addEventListener('click', () => {
    try {
        // Get items before clearing for logging
        const itemsToDelete = {
            localStorage: [...Object.keys(localStorage)],
            sessionStorage: [...Object.keys(sessionStorage)]
        };
        
        // Clear localStorage
        localStorage.clear();
        console.log('localStorage cleared');
        
        // Clear sessionStorage
        sessionStorage.clear();
        console.log('sessionStorage cleared');
        
        // Reset form
        eventTypeSelect.value = '';
        form.reset();
        
        // Show success message
        showMessage('✓ All preferences cleared successfully!', 'success');
        console.log('Deleted items:', itemsToDelete);
        
        // Update storage display
        updateStorageDisplay();
    } catch (error) {
        console.error('Error clearing preferences:', error);
        showMessage('Error clearing preferences', 'error');
    }
});

/**
 * Refresh storage display information
 */
refreshBtn.addEventListener('click', () => {
    console.log('Refreshing storage display');
    updateStorageDisplay();
    showMessage('✓ Storage information refreshed', 'success');
});

/**
 * Store session data in sessionStorage
 */
function storeSessionData() {
    try {
        const sessionData = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            sessionId: generateSessionId()
        };
        
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        console.log('Session data stored in sessionStorage:', sessionData);
    } catch (error) {
        console.error('Error storing session data:', error);
    }
}

/**
 * Generate a unique session ID
 */
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Display message to user
 */
function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    // Auto-hide success messages after 4 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.className = 'message';
            messageDiv.textContent = '';
        }, 4000);
    }
}

/**
 * Update the storage display sections
 */
function updateStorageDisplay() {
    // Update current preference
    const currentPreference = localStorage.getItem(PREFERENCE_KEY);
    if (currentPreference) {
        currentPreferenceDiv.textContent = `📌 ${currentPreference}`;
        currentPreferenceDiv.style.color = '#27ae60';
        currentPreferenceDiv.style.fontWeight = 'bold';
    } else {
        currentPreferenceDiv.textContent = 'No preference saved';
        currentPreferenceDiv.style.color = '#95a5a6';
        currentPreferenceDiv.style.fontWeight = 'normal';
    }
    
    // Update localStorage display
    if (localStorage.length > 0) {
        const localStorageItems = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            localStorageItems[key] = localStorage.getItem(key);
        }
        localStorageDataDiv.textContent = JSON.stringify(localStorageItems, null, 2);
    } else {
        localStorageDataDiv.textContent = '{}  (empty)';
    }
    
    // Update sessionStorage display
    if (sessionStorage.length > 0) {
        const sessionStorageItems = {};
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            try {
                sessionStorageItems[key] = JSON.parse(sessionStorage.getItem(key));
            } catch {
                sessionStorageItems[key] = sessionStorage.getItem(key);
            }
        }
        sessionStorageDataDiv.textContent = JSON.stringify(sessionStorageItems, null, 2);
    } else {
        sessionStorageDataDiv.textContent = '{}  (empty)';
    }
    
    console.log('Storage display updated');
}

/**
 * Debugging function: Log all storage contents
 */
function debugStorage() {
    console.group('Storage Debug Info');
    console.log('localStorage:', { ...localStorage });
    console.log('sessionStorage:', { ...sessionStorage });
    console.log('PREFERENCE_KEY value:', localStorage.getItem(PREFERENCE_KEY));
    console.log('SESSION_KEY value:', sessionStorage.getItem(SESSION_KEY));
    console.groupEnd();
}

// Make debug function available in console
window.debugStorage = debugStorage;

// Log when user leaves the page
window.addEventListener('beforeunload', () => {
    console.log('User is leaving the page');
    debugStorage();
});

// Add keyboard shortcut to debug (Ctrl+Shift+D)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        debugStorage();
    }
});

console.log('%cEvent Preferences Manager initialized', 'color: green; font-weight: bold; font-size: 14px;');
console.log('Available commands: debugStorage()');
