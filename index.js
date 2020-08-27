// `property` is a string that can include dot-notation
// ( i.e,  'property.subproperty.subsubproperty' ) .

export function getProperty(property, obj) {

	let properties = getPropertiesSeparatedByDot(property);
	return getValueFromLastPropertyIn(properties);


	function getPropertiesSeparatedByDot(property) {
		return property.split('.');
	}


	function getValueFromLastPropertyIn(properties) {
		// This walks down the hierarchy in properties.
		for (let i = 0, length = properties.length; i < length; ++i) {
			obj = obj[properties[i]];
		}
		return obj;
	}
}
