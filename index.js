const express = require('express'); 
const server = express(); 
const PORT_NUMBER = process.env.PORT || 5000;
const path = require('path');

server.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`)
})

server.use(express.static('build'));
server.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.get("/express_backend", (req, res) => {
  res.json([{ id: 1, express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }]);
});



