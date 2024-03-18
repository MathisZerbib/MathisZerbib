const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', '..', 'README.md');
const currentHour = new Date().getHours();
let greetingText = 'Hi 👋!';

if (currentHour < 12) {
    greetingText = 'Good morning 🌞!';
} else if (currentHour < 18) {
    greetingText = 'Good afternoon 🌅!';
} else {
    greetingText = 'Good evening 🌇!';
}

let content = fs.readFileSync(readmePath, 'utf8');
let updatedContent = content.replace(/Hi 👋!/g, greetingText);



fs.writeFileSync(readmePath, updatedContent);
