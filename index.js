import express from 'express';

// Transition to express
const app = express();

console.log(app);

app.get('/', (req, res) => {
	res.sendFile('/index.html', { root: './pages' });
});

app.get('/about', (req, res) => {
	res.sendFile('/about.html', { root: './pages' });
});

app.get('/contact-me', (req, res) => {
	res.sendFile('/contact-me.html', { root: './pages' });
});

app.use((req, res) => {
	res.status(400).sendFile('/404.html', { root: './pages' });
});
const PORT = 3000;

app.listen(PORT);
