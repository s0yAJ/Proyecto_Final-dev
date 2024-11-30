const fs = require('fs');
const path = require('path');

test('index.html contains "Hello Word"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    expect(html).toContain('<h2 class="fw-bold mb-0 mb-3">Hello Word</h2>');
});

describe('HTML File Validation', () => {
    // Read the HTML file once before all tests
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
  
    // Test 1: Check if the file contains the specific text
    test('index.html contains "Hello Word"', () => {
      expect(html).toContain('<h2 class="fw-bold mb-0 mb-3">Hello Word</h2>');
    });
  
    // Test 2: Verify the presence of Bootstrap CSS
    test('index.html includes Bootstrap CSS', () => {
      expect(html).toContain('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
    });
  
    // Test 3: Check for Font Awesome stylesheet
    test('index.html includes Font Awesome stylesheet', () => {
      expect(html).toContain('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css');
    });
  
    // Test 4: Validate the structure of the modal
    test('index.html has correct modal structure', () => {
      expect(html).toContain('<div class="modal modal-sheet position-static d-block p-4 py-md-5"');
      expect(html).toContain('<div class="modal-dialog mt-5"');
      expect(html).toContain('<div class="modal-content rounded-4 shadow"');
      expect(html).toContain('<div class="btn btn-outline-primary d-flex justify-content-center">');
    });
  });