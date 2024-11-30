const fs = require('fs');
const path = require('path');

test('index.html contains "Hola Mundo"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    expect(html).toContain('<h2>Hola Mundo</h2>');
});