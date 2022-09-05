const https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
//  let options = {
//     host : 'https://search-ando-demo-krmubpnjpq53mxw47vdgkex25e.ap-southeast-2.es.amazonaws.com'
// };

// exports.handler = (event, context, callback) => {
//     const req = https.request(options, (res) => {
//         let body = '';
//         console.log('Status:', res.statusCode);
//         console.log('Headers:', JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', (chunk) => body += chunk);
//         res.on('end', () => {
//             console.log('Successfully processed HTTPS response');
//             // If we know it's JSON, parse it
//             if (res.headers['content-type'] === 'application/json') {
//                 body = JSON.parse(body);
//             }
//             callback(null, body);
//         });
//     });
//     req.on('error', callback);
//     req.write(JSON.stringify(event.data));
//     req.end();
// };

'use strict'

let options = {
    host : 'search-ando-demo-krmubpnjpq53mxw47vdgkex25e.ap-southeast-2.es.amazonaws.com',
    // port = 9243,
    // username = "monitoring",
    // password = "QlpqvIHswMl6OG/P2rbi67/3p69doY7k"
    headers: {
        'Authorization': 'Basic bW9uaXRvcmluZzpRbHBxdklIc3dNbDZPRy9QMnJiaTY3LzNwNjlkb1k3aw=='
        },
};

exports.handler = (event, context, callback) => {
    const req = https.request(options, (res) => {
        let body = '';
        console.log('Status:', res.statusCode);
        console.log('Headers:', JSON.stringify(res.headers));
        res.setEncoding( 'utf8');
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
            console.log('Successfully processed HTTPS response');
            // If we know it's JSON, parse it
            if (res.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            callback(null, body);
        });
    });
    req.on('error', callback);
    // req.write(JSON.stringify(event.data));
    req.end();
};