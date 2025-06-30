// Define server port
const PORT = 5000;

// Posts objects array importing
import posts from './data.js';

// Express importing
import express from 'express';

// Initialize a new server
const server = express();

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