import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";
import bodyParser from 'body-parser';

const app = express();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { text: '' });
});

app.post('/', async (req, res) => {
  console.log('Received prompt:', req.body.prompt);
  const model = await genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(req.body.prompt);
  const response = await result.response;
  const text = await response.text();
  console.log('Generated text:', text);
  res.render('index', { text: text });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});