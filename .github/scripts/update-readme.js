const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', '..', 'README.md');
const currentHour = new Date().getHours();
let greetingText;

if (currentHour < 12) {
    greetingText = 'Good morning 🌞!';
} else if (currentHour < 18) {
    greetingText = 'Good afternoon 🌅!';
} else {
    greetingText = 'Good evening 🌇!';
}

let content = fs.readFileSync(readmePath, 'utf8');

const greetings = ['Hi 👋!', 'Good morning 🌞!', 'Good afternoon 🌅!', 'Good evening 🌇!'];

let updatedContent = content;
for (let greeting of greetings) {
    if (content.includes(greeting)) {
        updatedContent = updatedContent.replace(new RegExp(greeting, 'g'), greetingText);
        break;
    }
}

fs.writeFileSync(readmePath, updatedContent);
