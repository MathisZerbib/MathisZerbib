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

if (content.includes('Hi 👋!')) {
    let updatedContent = content.replace(/Hi 👋!/, greetingText);
    fs.writeFileSync(readmePath, updatedContent);
} else if(content.includes('Good morning 🌞!')) {
    let updatedContent = content.replace(/Good morning 🌞!/, greetingText);
    fs.writeFileSync(readmePath, updatedContent);
} else if (content.includes('Good afternoon 🌅!) {
    let updatedContent = content.replace(/Good afternoon 🌅!/, greetingText);
    fs.writeFileSync(readmePath, updatedContent);
} else {
    let updatedContent = content.replace(/Good evening 🌇!/, greetingText);
    fs.writeFileSync(readmePath, updatedContent);
}
