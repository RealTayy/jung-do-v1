import express from 'express'
import test from './test'

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (_,res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT} HELLO? ${test}`);
});

export {}
