var async = require('async');
var util = require('util');
var debug = require('debug')('sitescraper:fetch');
var userAgents = require('./user-agents')();
var iconv = require('iconv-lite');
var cheerio = require('cheerio');

exports = module.exports = function (request) {
    return function (site, agent, callback) {
        var requestOptions = {
            url: site.url,
            encoding: null, // return body as a buffer with no encoding
            headers: {
                'user-agent': userAgents[site.format] || userAgents['desktop']
            },
            pool: agent
        };

        request(requestOptions, function (err, response, body) {
            if (err) {
                debug('error when polling site: ' + site.url);
                debug(util.inspect(err));
            }

            // convert to UTF-8 encoding if the response isn't already
            var $ = cheerio.load(body);
            var charset = getCharset($)
            charset = charset || 'iso-8859-1'; // if no charset header, assume iso-8859-1
            var charSetIsNotUtf = !/utf-*8/i.test(charset); // check if charset is different from UTF-8

            if (charSetIsNotUtf && iconv.encodingExists(charset)) {
                debug('<- charset is not utf-8, converting ->');
                var temp = iconv.decode(body, charset);
                body = iconv.encode(temp, 'utf-8');
            }

            callback(err, body);
        });
    };
};

function getCharset ($) {
    var meta = $('meta');
    var keys = Object.keys(meta);
    var charset;

    keys.forEach(function (key) {
        var searchString = 'charset='

        if (meta[key].attribs && meta[key].attribs.content && (meta[key].attribs.content.indexOf(searchString) > -1)) {
            var index = meta[key].attribs.content.indexOf(searchString);
            charset = meta[key].attribs.content.substr(index + searchString.length).toLowerCase();
        }
    });

    return charset;
}
