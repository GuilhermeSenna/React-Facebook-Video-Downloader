const express = require('express');
const facebookDownloader = require('fb-video-downloader')
// require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
    // res.send(`<h1>My Node App -> ${process.env.TESTE}</h1>`);

    url = req.body.url

    await facebookDownloader
        .getInfo(url)
        .then((info) =>
            res.send(info)
            // res.send(JSON.stringify(info, null, 2)
        );
    // res.json({ "foo": "bar" });
});

// app.get('/teste', (req, res) => {
//     res.send('<h1>teste de roteamento </h1>');
// });

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});