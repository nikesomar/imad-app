var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
  title:'ART 1|Nikhil omar',
  heading:'Article One',
  pc:'Lenovo flex 2',
  content:`
                <p>
                    the content for first article
                </p>
                <p>
                    This is also a content for first article
                </p>
                <p>
                    another content for first article
                </p>`
                    
    };

function createtemp(data){
        var title=data.title;
        var heading=data.heading;
        var pc=data.pc;
        var content=data.content;
        var htmltemp=`
            <html>
            <head>
                <title>
                  ${title}
                </title>
                <meta name="viewport" content="width-device-width, initialscale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
                
            </head>
            <body>
                <div class="BOX">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${pc}
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
             </body>
            </html>

    
        `;    

    return htmltemp;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req,res) {
    res.send(createtemp(articleOne));
});

app.get('/article-two', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
