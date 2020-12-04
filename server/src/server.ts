import express from 'express';

const app = express();

app.use(express.json());

app.use('/', (request, response) => response.json({ ok: true }));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
