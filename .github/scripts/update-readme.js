const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', '..', 'README.md');
const currentHour = new Date().getHours();
let greetingText = 'Hi 👋! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, south of 🇫🇷';

if (currentHour < 12) {
    greetingText = 'Good morning 🌞! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, south of 🇫🇷';
} else if (currentHour < 18) {
    greetingText = 'Good afternoon 🌅! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, south of 🇫🇷';
} else {
    greetingText = 'Good evening 🌇! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, south of 🇫🇷';
}

let content = fs.readFileSync(readmePath, 'utf8');
let updatedContent = content.replace(/Hi 👋! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier, south of 🇫🇷/g, greetingText);



fs.writeFileSync(readmePath, updatedContent);
