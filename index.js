const express = require('express')
const app = express()
var fs = require('fs');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) =>
  fs.readFile('./index.html', 'UTF-8', function(err, data){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
  })
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
