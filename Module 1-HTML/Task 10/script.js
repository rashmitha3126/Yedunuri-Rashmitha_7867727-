// JavaScript Debugging Demo with intentional issues

console.log('=== Dashboard App Initialized ===');
console.log('Current User: John Doe');
console.log('Page loaded at:', new Date().toLocaleTimeString());

// Simulated user data
const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    notificationsEnabled: false,
    loginCount: 42
};

// Function to update user display
function updateUserDisplay() {
    console.log('Updating user display...');
    
    // BUG: Intentional error - trying to access undefined property
    const displayName = userData.fullName || 'Guest'; // fullName doesn't exist
    console.warn('Display name retrieved:', displayName);
    
    document.getElementById('username').textContent = displayName;
    document.getElementById('email').textContent = userData.email;
    
    // Log current state
    console.log('User data:', userData);
}

// Function to handle button clicks
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    const toggleBtn = document.getElementById('toggle-notifications');
    const exportBtn = document.getElementById('export-data');
    const deleteBtn = document.getElementById('delete-account');
    
    toggleBtn.addEventListener('click', function() {
        console.log('Toggle notifications clicked');
        userData.notificationsEnabled = !userData.notificationsEnabled;
        console.log('Notifications enabled:', userData.notificationsEnabled);
        this.textContent = userData.notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications';
        console.log('Button text updated');
    });
    
    exportBtn.addEventListener('click', function() {
        console.log('Export data clicked');
        console.log('Exporting user data...');
        // BUG: This will cause an error - trying to access a method that doesn't exist
        try {
            const jsonData = JSON.stringify(userData, null, 2);
            console.log('Exported data:', jsonData);
            alert('Data exported successfully!');
        } catch (error) {
            console.error('Export failed:', error.message);
        }
    });
    
    deleteBtn.addEventListener('click', function() {
        console.log('Delete account clicked');
        if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
            console.error('Account deletion initiated by user');
            // Simulate account deletion
            console.log('Account deleted for:', userData.email);
        } else {
            console.log('Account deletion cancelled');
        }
    });
}

// Activity data
const activities = [
    { action: 'Logged in', time: '2 hours ago', timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) },
    { action: 'Updated profile', time: '1 day ago', timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    { action: 'Changed password', time: '5 days ago', timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) }
];

// Function to log activities
function logActivities() {
    console.log('=== User Activity Log ===');
    activities.forEach((activity, index) => {
        console.log(`${index + 1}. ${activity.action} - ${activity.time}`);
        console.log('   Timestamp:', activity.timestamp);
    });
    console.log('Total activities:', activities.length);
}

// Initialize the app
function initializeApp() {
    console.log('=== Initializing Dashboard Application ===');
    console.log('User data loaded:', userData);
    
    // Call setup functions
    updateUserDisplay();
    setupEventListeners();
    logActivities();
    
    // Monitor performance
    console.time('App Load Time');
    console.log('App initialization complete');
    console.timeEnd('App Load Time');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Additional debugging utility
window.debugInfo = {
    getUser: () => userData,
    getActivities: () => activities,
    setUserName: (name) => {
        userData.name = name;
        updateUserDisplay();
        console.log('User name updated to:', name);
    },
    printAllData: () => {
        console.table(userData);
        console.table(activities);
    }
};

console.log('Debugging utilities available at: window.debugInfo');
console.log('Try: window.debugInfo.getUser() or window.debugInfo.printAllData()');
