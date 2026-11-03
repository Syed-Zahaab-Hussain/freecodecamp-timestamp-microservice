import express from 'express';
const app = express();
app.use(express.static('public'));
app.get(['/api', '/api/:date'], (req, res) => {
  const input = req.params.date;
  const date = input === undefined ? new Date() : new Date(/^\d+$/.test(input) ? Number(input) : input);
  if (Number.isNaN(date.getTime())) return res.json({ error: 'Invalid Date' });
  return res.json({ unix: date.getTime(), utc: date.toUTCString() });
});
app.listen(8000, () => console.log('Timestamp service listening on port 8000'));
