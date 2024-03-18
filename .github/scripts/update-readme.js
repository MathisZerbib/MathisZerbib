const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', '..', 'README.md');
const currentHour = new Date().getHours();
let greetingText = 'Hi 👋! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, South of France';

if (currentHour < 12) {
    greetingText = 'Good morning 🌞! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, South of France';
} else if (currentHour < 18) {
    greetingText = 'Good afternoon 🌅! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, South of France';
} else {
    greetingText = 'Good evening 🌇! My name is Mathis Zerbib and I\'m a FullStack dev, from Montpellier, South of France';
}

// Split the greetingText into two parts: the main greeting and the rest of the text
const [mainGreeting, ...restOfText] = greetingText.split('!');
const formattedGreeting = `
<div align="center" style="margin: 20px 0;">
 <h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">${mainGreeting}!</h2>
 <p style="font-size: 1.5rem; color: #333;">${restOfText.join('!')}</p>
</div>
`;

let content = fs.readFileSync(readmePath, 'utf8');

// Define the regular expressions for each greeting
const morningRegex = /<div align="center" style="margin: 20px 0;">\s*<h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">Good morning 🌞!.*<\/h2>\s*<p style="font-size: 1.5rem; color: #333;">.*<\/p>\s*<\/div>/g;
const afternoonRegex = /<div align="center" style="margin: 20px 0;">\s*<h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">Good afternoon 🌅!.*<\/h2>\s*<p style="font-size: 1.5rem; color: #333;">.*<\/p>\s*<\/div>/g;
const eveningRegex = /<div align="center" style="margin: 20px 0;">\s*<h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">Good evening 🌇!.*<\/h2>\s*<p style="font-size: 1.5rem; color: #333;">.*<\/p>\s*<\/div>/g;

// Replace the old greeting with the new one based on the current time
let updatedContent = content.replace(morningRegex, formattedGreeting);
updatedContent = updatedContent.replace(afternoonRegex, formattedGreeting);
updatedContent = updatedContent.replace(eveningRegex, formattedGreeting);

fs.writeFileSync(readmePath, updatedContent);
