import http from 'node:http';
import fs from 'node:fs';

//create server
const server = http.createServer((req, res) => {
	let path = './pages';

	// to reduce code switch statement to give us the path
	switch (req.url) {
		case '/':
			path += '/index.html';
			break;
		case '/about':
			path += '/about.html';
		case '/contact-me':
			path += '/contact-me.html';
		default:
			path += '/404.html';
			break;
	}

	res.setHeader('Content-Type', 'text/html');

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.write(data);
			res.end();
		}
	});
});

server.listen(8080, 'localhost', () => {
	console.log('listening for requests on port 8080');
});

process.loadEnvFile();

let tiago;

if (process.env.NODE_ENV === 'prod') {
	tiago = 'hey';
}
