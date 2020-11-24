import express from 'express';
import path from 'path';
import open from 'open';

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../Client')))

app.listen(port, ()  => {
	open(`http://localhost:${port}`)
});

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, '../Client/index.html')));