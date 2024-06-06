const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Handle every other route with index.html, which will contain
// a script tag to your application JavaScript.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
