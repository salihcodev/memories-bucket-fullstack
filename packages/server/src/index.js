import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import postRouter from './routes/posts.js';

// CONNECTIONS: mongo connection url & serve-post.
const CONNECTION_URL = `mongodb+srv://salihcodev:132132010@cluster0.b4o4b.mongodb.net/memosDb?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// using setup routes:
app.use('/posts', postRouter);

// connecting to the mongo, then serve the app on the PORT.
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`We are on ${PORT}...`)))
  .catch((err) => {
    console.error(err.message);
  });

mongoose.set('useFindAndModify', false);
