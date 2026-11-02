const express = require('express');
const app = express();
app.get('/', (_req, res) => res.json({service: 'hello-service', status: 'running'}));
app.get('/health', (_req, res) => res.status(200).json({status: 'UP'}));
app.get('/api/hello', (_req, res) => res.json({ message: 'Hello from Node.js!' }));
app.listen(process.env.PORT || 3000, '0.0.0.0');
