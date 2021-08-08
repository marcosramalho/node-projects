const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlenconded
app.use(express.urlencoded({ extended: true }));

// simples route 
app.get('/', (req, res) => {
  res.json({ message: 'Welcome MRTECH application'});  
});

// set port, listen for requests 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});