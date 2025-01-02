const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const bodyParser = require('body-parser');

const app = express();

// Middleware do parsowania JSON w `req.body`
app.use(bodyParser.json());

// Middleware LiveReload
app.use(connectLivereload());

//ADS
app.get('/', (req, res) => {
    res.send('<h1>siehehehema B)</h1>');
});

app.get('/api/ads', (req, res) => {
    res.send('<h1>ads</h1>');
});

app.get('/api/ads/:id', (req, res) => {
    res.send(`<h1>Ad with id: ${req.params.id}</h1>`);
});

app.post('/api/ads', (req, res) => {
    res.send(`<h1>New ad created</h1>`);
});

app.delete('/api/ads/:id', (req, res) => {
    res.send(`<h1>Deleted ad with id: ${req.params.id}</h1>`);
});

app.put('/api/ads/:id', (req, res) => {
    res.send(`<h1>Updated ad with id: ${req.params.id}</h1>`);
});

app.get('/api/ads/search/:searchPhrase', (req, res) => {
    const query = req.query.q;
    res.send(`<h1>Search results for: ${query}</h1>`);
});

//AUTH
app.post('/auth/register', (req, res) => {
    const { username, password } = req.body;
    res.send(`<h1>Registered user: ${username}</h1>`);
});

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`<h1>Logged in user: ${username}</h1>`);
});

app.get('/api/user', (req, res) => {
    res.send('<h1>user info</h1>');
});

app.use((req, res) => {
    res.status(404).send('404 not found...');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// Konfiguracja LiveReload
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname + '/public');

// Automatyczne odświeżenie po uruchomieniu
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});
