function joinObject(plainObject, separator = DEFAULT_SEPARATOR){
	let objectAsArray = [];
	for(let prop in plainObject){
		objectAsArray.push(prop);
		objectAsArray.push(plainObject[prop]);
	}

	return objectAsArray.join(separator);
}

const DEFAULT_SEPARATOR = ' ';

export default joinObject;