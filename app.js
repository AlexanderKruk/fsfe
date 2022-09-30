const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req, res) => {
	res.send('Hello world!')
	res.status(418)
	res.set({ 'X-my-header': 'my header info' })
});

app.listen(port,() => console.log(`Example app listening on port ${port}!`));
