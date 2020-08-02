import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { errorIfNotObject } from 'error-if-not-object';

// parameter `property` is a string that can include dot-notation
// ( i.e,  'property.subproperty.subsubproperty' ) .

export function getProperty(property, obj): any {
	errorIfLengthIsZero(property);
	errorIfNotObject(obj);

	let properties = getPropertiesSeparatedByDot(property);
	return getValueFromLastPropertyIn(properties);


	function getPropertiesSeparatedByDot(property): string[] {
		return property.split('.');
	}


	function getValueFromLastPropertyIn(properties): any {
		// This walks down the hierarchy in properties.
		for (let i = 0; i < properties.length; ++i) {
			obj = obj[properties[i]];
		}
		return obj;
	}


}
