var lineReader = require('readline');
var fs = require('fs');

var lri = lineReader.createInterface({
    input: fs.createReadStream('./test/moupfall.txt')
});
  
lri.on('line', function (line) {
    console.log('Heres the line:', line);
});