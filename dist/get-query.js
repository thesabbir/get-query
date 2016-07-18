'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Takes a raw param strings then converts it to int if integer
 * If separated with , then return an array
 * @param rawParams
 * @returns {Array}
 */
function paramsMake(rawParams) {
    var param = rawParams.split(',').map(function (item) {
        if (Number.isNaN(parseInt(item, 8))) return item;
        return parseInt(item, 8);
    });
    return param.length <= 1 ? param[0] : param;
}

/**
 * @param paramString
 * @returns {Object}
 */
function transform(paramString) {
    var params = {};
    var paramsArray = paramString.split('&');
    for (var i = 0; i < paramsArray.length; i++) {
        var tmp = paramsArray[i].split('=');
        params[tmp[0]] = paramsMake(tmp[1]);
    }
    return params;
}

/**
 * gets get parameters
 * @returns { Object }
 */
function getParameters() {
    var paramString = window.location.search.substr(1);
    if (paramString !== null && paramString !== '') {
        return transform(paramString);
    }
    return {};
}

exports.default = getParameters;