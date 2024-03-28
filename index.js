// Welcome to AwesomeProject!
// This project is designed to bring together cutting-edge technologies
// and innovative solutions to address modern challenges.
// Whether you're a seasoned developer or just starting out,
// AwesomeProject provides a dynamic platform to collaborate, learn,
// and build exciting projects.

// Import necessary modules or libraries
const express = require('express'); // ���� Express ���
const bodyParser = require('body-parser'); // ���� body-parser ģ�����ڽ���������
const app = express(); // ���� Express Ӧ�ó���

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route to handle incoming GET requests
app.get('/', (req, res) => {
    res.send('Welcome to AwesomeProject! Start building your exciting projects here.');
});

// Define a route to handle incoming POST requests
app.post('/api/data', (req, res) => {
    const data = req.body; // ��ȡ POST ���������
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully!', data });
});

// Set up server to listen on port 3000
const port = process.env.PORT || 3000; // ���ü����Ķ˿ںţ�Ĭ��Ϊ 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
