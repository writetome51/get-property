"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_string_1 = require("error-if-not-string");
var error_if_not_object_1 = require("error-if-not-object");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
// parameter `property` is a string that can include dot-notation
// ( i.e,  'property.subproperty.subsubproperty' ) .
function getProperty(property, obj) {
    error_if_not_string_1.errorIfNotString(property);
    if (is_empty_not_empty_1.isEmpty(property))
        throw new Error('Input must be string that is not empty.');
    error_if_not_object_1.errorIfNotObject(obj);
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
