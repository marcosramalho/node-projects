const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./app/models');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db');
});

var corsOptions = {
  origin: 'http://localhost:8001',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to MRTECH application' });
});

require('./app/routes/tutorial.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
