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

// Split the greetingText into two parts: the main greeting and the rest of the text
const [mainGreeting, ...restOfText] = greetingText.split('!');
const formattedGreeting = `
<div align="center" style="margin: 20px 0;">
 <h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">${mainGreeting}!</h2>
 <p style="font-size: 1.5rem; color: #333;">${restOfText.join('!')}</p>
</div>
`;

let content = fs.readFileSync(readmePath, 'utf8');

// Replace the old greeting with the new formatted greeting
let updatedContent = content.replace(/<div align="center" style="margin: 20px 0;">\s*<h2 style="font-size: 2rem; color: #333; margin-bottom: 10px;">.*<\/h2>\s*<p style="font-size: 1.5rem; color: #333;">.*<\/p>\s*<\/div>/g, formattedGreeting);

fs.writeFileSync(readmePath, updatedContent);
