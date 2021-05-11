/*
 * @Author: Huangjs
 * @Date:   2021-05-11 14:05:04
 * @Last Modified by:   Huangjs
 * @Last Modified time: 2021-05-11 14:23:25
 */
var nodeCrypto = require('crypto');
var window = require('./window');

function getRandomValues(buf) {
    if (window.crypto && window.crypto.getRandomValues) {
        return window.crypto.getRandomValues(buf);
    }
    if (typeof window.msCrypto === 'object' && typeof window.msCrypto.getRandomValues === 'function') {
        return window.msCrypto.getRandomValues(buf);
    }
    if ((window.crypto && window.crypto.random) || nodeCrypto.randomBytes) {
        if (!(buf instanceof Uint8Array)) {
            throw new TypeError('expected Uint8Array');
        }
        if (buf.length > 65536) {
            var e = new Error();
            e.code = 22;
            e.message = 'Failed to execute \'getRandomValues\' on \'Crypto\': The ' +
                'ArrayBufferView\'s byte length (' + buf.length + ') exceeds the ' +
                'number of bytes of entropy available via this API (65536).';
            e.name = 'QuotaExceededError';
            throw e;
        }
        var bytes;
        if (nodeCrypto.randomBytes) {
            bytes = nodeCrypto.randomBytes(buf.length);
        } else {
            var random = window.crypto.random(buf.length);
            for (var i = 0; i < random.length; ++i) {
                bytes[i] = random.charCodeAt(i) & 255;
            }
        }
        buf.set(bytes);
        return buf;
    } else {
        throw new Error('No secure random number generator available.');
    }
}

module.exports = getRandomValues;