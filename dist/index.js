"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var errorIfNotObject_1 = require("basic-data-handling/errorIfNotObject");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
// parameter `property` is a string that can include dot-notation
// ( i.e,  'property.subproperty.subsubproperty' ) .
function getProperty(property, obj) {
    errorIfNotString_1.errorIfNotString(property);
    if (isEmpty_notEmpty_1.isEmpty(property))
        throw new Error('Input must be string that is not empty.');
    errorIfNotObject_1.errorIfNotObject(obj);
    var properties = getPropertiesSeparatedByDot(property);
    return getValueFromLastPropertyIn(properties);
    function getPropertiesSeparatedByDot(property) {
        return property.split('.');
    }
    function getValueFromLastPropertyIn(properties) {
        // This walks down the hierarchy in properties.
        for (var i = 0; i < properties.length; ++i) {
            obj = obj[properties[i]];
        }
        return obj;
    }
}
exports.getProperty = getProperty;
