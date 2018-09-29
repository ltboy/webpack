const os = require('os')
const http = require('http')

function getIp() {
    const ipMap = os.networkInterfaces();
    let ipArr = [];
    for (let env in ipMap) {
        ipMap[env].forEach(ip => {
            if (ip.family === 'IPv4') {
                ipArr.push(ip.address)
            }
        });
    }
    return ipArr;
}

function getPort() {
    const server = http.createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port
}

function transformer(error) {
    if (error.webpackError) {
        const message = typeof error.webpackError === 'string'
            ? error.webpackError
            : error.webpackError.message || ''
        for (const { re, msg, type } of rules) {
            const match = message.match(re)
            if (match) {
                return Object.assign({}, error, {
                    // type is necessary to avoid being printed as defualt error
                    // by friendly-error-webpack-plugin
                    type,
                    shortMessage: msg(error, match)
                })
            }
        }
        // no match, unknown webpack error without a message.
        // friendly-error-webpack-plugin fails to handle this.
        if (!error.message) {
            return Object.assign({}, error, {
                type: 'unknown-webpack-error',
                shortMessage: message
            })
        }
    }
    return error
}

function formatter(errors) {
    errors = errors.filter(e => e.shortMessage)
    if (errors.length) {
        return errors.map(e => e.shortMessage)
    }
}

const PORT = getPort();
const getUrl = function () {
    let str = '\n '
    getIp().forEach(ip => {
        str += `http://${ip}:${PORT} \n `
    })
    return str
}

module.exports = {
    PORT,
    URL: getUrl(),
    transformer,
    formatter,
}
