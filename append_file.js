var fs = require('fs');

fs.open('denrus.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('Saved');
});