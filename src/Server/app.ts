import 'dotenv/config'

import express from 'express';
import path from 'path';
import open from 'open';


const app = express();

const port = process.env.PORT;
const staticPath = path.join(__dirname, '../../build/Client');

app.use(express.static(staticPath));

app.listen(port, () => {
	if (process.env.OPEN_BROWSER_ON_LOAD === 'true'){
		open(`http://localhost:${port}`);
	};
});

app.get('/index', (_req, res) => 
	res.sendFile(path.join(staticPath, 'index.html')));