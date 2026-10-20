import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fallback for hero-bg.jpg referenced in styles.css when file on disk is hero-bg.png
app.get('/hero-bg.jpg', (_req, res) => {
  res.sendFile(path.join(__dirname, 'hero-bg.png'));
});

// Handle contact form submission gracefully
app.post('/', (_req, res) => {
  res.redirect('/#contact');
});

app.use(express.static(__dirname));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
