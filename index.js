/*
 * @Author: Huangjs
 * @Date:   2021-05-08 17:23:26
 * @Last Modified by:   Huangjs
 * @Last Modified time: 2021-05-10 11:58:26
 */
'use strict'

var RSAKey = require('./lib/rsa');
var base64 = require('./lib/base64');

var publicKey = "";
var hexString = "";

function encrypt(text) {
    var rsa = new RSAKey();
    rsa.setPublic(publicKey, hexString);
    return RSAKey.linebrk(base64.hex2b64(rsa.encrypt(text)), 64);
}
encrypt.set = function(key, hex) {
    publicKey = key;
    hexString = hex;
}

module.exports = encrypt;