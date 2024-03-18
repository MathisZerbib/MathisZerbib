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

// Define the regular expressions for each greeting
const morningRegex = /Good morning 🌞! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier/g;
const afternoonRegex = /Good afternoon 🌅! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier/g;
const eveningRegex = /Good evening 🌇! My name is Mathis Zerbib and I'm a FullStack dev, from Montpellier/g;

// Replace the old greeting with the new one based on the current time
let updatedContent = content.replace(morningRegex, greetingText);
updatedContent = updatedContent.replace(afternoonRegex, greetingText);
updatedContent = updatedContent.replace(eveningRegex, greetingText);

fs.writeFileSync(readmePath, updatedContent);
