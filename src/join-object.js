import isJoinable from './is-joinable';

function joinObject(plainObject, propSeparator = DEFAULT_PROP_SEPARATOR, keyValSeparator = DEFAULT_KEY_VALUE_SEPARATOR){
	let objectAsArray = [];
	for(let prop in plainObject){
		if(!plainObject[prop]) continue;
		if(!isJoinable(plainObject[prop])) continue;

		objectAsArray.push(prop + keyValSeparator + plainObject[prop]);
	}

	return objectAsArray.join(propSeparator);
}

const DEFAULT_PROP_SEPARATOR = '&';
const DEFAULT_KEY_VALUE_SEPARATOR = '=';

export default joinObject;