// Import server port
import PORT from "./server-config.js";

// Posts objects array importing
import posts from './data.js';

// Express importing
import express from 'express';

// Initialize a new server
const server = express();

// Expose static assets public folder
server.use(express.static('public'));

// Capture root route
server.get('/', (request, response) => {

    response.send('Server del mio blog');

});

// Capture /api/posts route
server.get('/api/posts', (request, response) => {

    // Send posts objects array
    response.send(posts);

});

// Start server listening
server.listen(PORT, () => {

    console.log(`Server is listening on http://localhost:${PORT}...`);

});