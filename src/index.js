const joinStrings = function(){
  let stringList = joinable.apply(null, arguments);

  const options = arguments[arguments.length-1];
  if(hasSeparator(options)){
    return stringList.join(options.separator);
  }

  return stringList.join(DEFAULT_SEPARATOR);
};

const prefixStrings = function(){
  const stringList = joinable.apply(null, arguments),
  prefix = stringList[0],
  prefixList = [];
  for (let i = 1; i < stringList.length; i++) {
    prefixList.push(prefix + stringList[i]);
  }
  return prefixList.join(DEFAULT_SEPARATOR);
};

const joinable = function(){
  let stringList = [];

  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];
    if(!item) continue;

    if(isJoinable(item)) {
      stringList.push(item);
    } else {
      const value = joinIf(item);
      if(value){
        stringList.push(value);
      }
    }
  }

  return stringList;
};

const joinIf = function(ifArray){
  if(!isArray(ifArray)){
    return null;
  }

  if(ifArray.length === 2){
    return ifArray[0] ? ifArray[1] : null;
  }else if(ifArray.length === 3){
    return ifArray[0] ? ifArray[1] : ifArray[2];
  }

  return null;
};

let isArray = Array.isArray;
if (!isArray) {
  isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

const isObject = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]';
};

const hasSeparator = function(options) {
  return isObject(options) && options.hasOwnProperty('separator');
};

const isJoinable = function(item) {
  return typeof item === 'string' || typeof item === 'number';
};

const DEFAULT_SEPARATOR = ' ';

export {
  joinStrings as default,
  joinStrings,
  joinIf,
  prefixStrings
};