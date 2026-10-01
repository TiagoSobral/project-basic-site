import http from 'node:http';
import fs from 'node:fs';

//create server
const server = http.createServer((req, res) => {
	let path = './pages';

	// to reduce code switch statement to give us the path
	switch (req.url) {
		case '/':
			path += './pages/index.html';
			break;
		case '/about':
			path += './pages/about.html';
		case '/contact-me':
			path += './pages/contact-me.html';
		default:
			path += './pages/404.html';
			break;
	}

	res.setHeader('Content Type', 'text/html');

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
