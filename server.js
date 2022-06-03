const express = require('express');

const app = express();

app.use(express.static('./dist/utopia'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/utopia/' }),
);

app.listen(process.env.PORT || 3000);
