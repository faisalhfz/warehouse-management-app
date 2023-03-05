const express = require('express');
const { sequelize } = require('./config/db');

const app = express();

const connectdb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
};
connectdb();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  // res.send('Warehouse Management App');
  res.render('home');
});

app.post('/', async (req, res) => {
  const { barcode } = req.body;
  console.log(barcode);

  res.redirect(`/stocks/${barcode}`);
});

const stocksRouter = require('./routes/stocks');
app.use('/stocks', stocksRouter);

const robotRouter = require('./routes/robot');
app.use('/robot', robotRouter);

app.listen(3000, () => console.log('Server started'));
