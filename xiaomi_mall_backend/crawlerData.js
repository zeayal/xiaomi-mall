const Crawler  = require('crawler');


function main() {
    const c = new Crawler({
        maxConnections: 10,
        callback: (error, res, done) => {
            
        }
    })
}


main();