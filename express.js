express = require('express'),
app = express()

app.use(express.static('/dir1/dir2/3/4/'));

app.get('/foo.com', function(req, res) {
  res.sendfile(__dirname + '/dir5/index.html');
});

app.get('/foobar.org', function(req, res) {
  res.sendfile(__dirname + '/dir6/index.html');
});

app.get('/bar.com', function(req, res) {
  res.sendfile(__dirname + '/dir7/index.html');
});

app.listen(3313, function() {
  console.log('listening on port 3313')
});
