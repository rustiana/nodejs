var fs = require('fs');

fs.writeFile('denruswrite.txt', 'Hello denrus again', function(err){
    if(err) throw err;

    console.log('Saved');
});