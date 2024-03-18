const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', '..', 'README.md');
const currentHour = new Date().getHours();
let greetingText = 'Hi 👋! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier';

if (currentHour < 12) {
    greetingText = 'Good morning 🌞! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier';
} else if (currentHour < 18) {
    greetingText = 'Good afternoon 🌅! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier';
} else {
    greetingText = 'Good evening 🌇! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier';
}

let content = fs.readFileSync(readmePath, 'utf8');
let updatedContent = content.replace(/Hi 👋! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier/g, greetingText);

// Check if the content was updated. If not, try updating with the next greeting.
if (updatedContent === content) {
    updatedContent = content.replace(/Good morning 🌞! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier/g, greetingText);
}

fs.writeFileSync(readmePath, updatedContent);
