require('dotenv').config();
const express = require('express');
const { adoptableRoutes } = require('./v1/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/adoptables', adoptableRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});