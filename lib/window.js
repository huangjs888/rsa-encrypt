/*
 * @Author: Huangjs
 * @Date:   2021-05-11 14:05:04
 * @Last Modified by:   Huangjs
 * @Last Modified time: 2021-05-11 14:25:37
 */
'use strict'

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined") {
    win = self;
} else {
    win = {};
}

module.exports = win;