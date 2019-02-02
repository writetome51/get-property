import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { errorIfNotObject } from 'basic-data-handling/errorIfNotObject';

// parameter property is a string that can include dot nation
// ( i.e,  'property.subproperty.subsubproperty' ) .

export function getProperty(property, obj): any {
	errorIfNotString(property);
	errorIfNotObject(obj);
	let properties = property.split('.');
	let numProperties = properties.length;

	// This walks down the property hierarchy.
	for (let i = 0; i < numProperties; ++i) {
		let prop = properties[i];
		obj = obj[prop];
	}
	return obj;
}
