var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('Error parsing the file upload form');
        res.end();
        return;
      }

      console.log('Files:', files); // Debugging line to inspect the files object

      var oldpath = files.filetoupload[0].filepath || files.filetoupload.path; // Fallback to `path` if `filepath` doesn't exist
      var newpath = 'C:\\Users\\Mudasir\\AppData\\Local\\Temp\\2f0d4fc4bcf3f1e2241765a02' + files.filetoupload.originalFilename;

      if (!oldpath) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('Invalid file path');
        res.end();
        return;
      }

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error moving the uploaded file');
          res.end();
          return;
        }
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
}).listen(8080);
