import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { errorIfNotObject } from 'basic-data-handling/errorIfNotObject';
import { isEmpty } from 'basic-data-handling/isEmpty_notEmpty';

// parameter `property` is a string that can include dot-notation
// ( i.e,  'property.subproperty.subsubproperty' ) .

export function getProperty(property, obj): any {
	errorIfNotString(property);
	if (isEmpty(property)) throw new Error('Input must be string that is not empty.');
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
