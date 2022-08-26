const compression = require('compression');
const express = require('express');
const path = require('path');

const cors  = require('cors');

const port = process.env.PORT || 3000;

const app = express();
app.use(compression())

app.disable("x-powerd-by")
app.use(cors());

app.use('/', express.static(path.join(__dirname,'..' ,'dist/apps/newpie')));



app.get('/test', (req, resp) => resp.send('test'));

app.listen(port, () => console.log('Port ' + port));
