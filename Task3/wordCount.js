const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
  }
});

function countWords(text) {
  // Remove any extra spaces and newlines
  const cleanedText = text.replace(/\s+/g, ' ').trim();
  // Split the cleaned txt into words using space as a delimiter
  const words = cleanedText.split(' ');
  // Return the number of words
  return words.length;
}
