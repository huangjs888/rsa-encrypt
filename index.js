/*
 * @Author: Huangjs
 * @Date:   2021-05-08 17:23:26
 * @Last Modified by:   Huangjs
 * @Last Modified time: 2021-06-02 16:42:07
 */
'use strict'

var RSAKey = require('./lib/rsa');
var base64 = require('./lib/base64');

var N = "";
var E = "";

function encrypt(text) {
    var rsa = new RSAKey();
    rsa.setPublic(N, E);
    return RSAKey.linebrk(base64.hex2b64(rsa.encrypt(text)), 64);
}
encrypt.set = function(modulus, publicExponent) {
    N = modulus;
    E = publicExponent;
}

module.exports = encrypt;