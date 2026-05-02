const fs = require('fs');
const path = require('path');

const directories = ['./src/components', './src'];

const replacements = {
  'text-indigo-300': 'text-accent-main',
  'bg-indigo-900/30': 'bg-accent-main/10',
  'bg-indigo-900/50': 'bg-accent-main/10',
  'hover:text-indigo-300': 'hover:text-accent-main',
  'bg-indigo-500/5': 'bg-accent-main/10',
  'hover:shadow-indigo-500/10': 'hover:shadow-accent-main/10',
  'hover:border-indigo-500/30': 'hover:border-accent-main/30',
  'hover:border-indigo-500/50': 'hover:border-accent-main/50',
  'hover:bg-indigo-500/10': 'hover:bg-accent-main/10',
  'group-hover:bg-indigo-500': 'group-hover:bg-accent-main',
  'hover:bg-indigo-600/20': 'hover:bg-accent-main/20',
};

function processFile(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  if (filePath.includes('replace.js')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [key, value] of Object.entries(replacements)) {
    // Basic global replace, no complex regex since we matched exactly above
    content = content.split(key).join(value);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isFile()) {
        processFile(fullPath);
      }
    });
  }
});
