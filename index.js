const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 加法接口
app.post('/api/add', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const result = num1 + num2;
  res.json({ result });
});

// 减法接口
app.post('/api/subtract', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const result = num1 - num2;
  res.json({ result });
});

// 乘法接口
app.post('/api/multiply', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const result = num1 * num2;
  res.json({ result });
});

// 除法接口
app.post('/api/divide', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Division by zero' });
  }

  const result = num1 / num2;
  res.json({ result });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Calculator microservice is running on port ${port}`);
});