export const joinStrings = function(){
  let stringList = [];
  let options = arguments[arguments.length-1];
  const hasRegexOption = hasRegex(options);

  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];
    if(!item) continue;

    if(isJoinable(item)) {
      if(hasRegexOption && !options.regex.test(item)){
        continue;
      }
      stringList.push(item);
    } else {
      const value = joinIf(item);
      if(value){
        stringList.push(value);
      }
    }
  }

  if(hasSeparator(options)){
    return stringList.join(options.separator);
  }

  return stringList.join(DEFAULT_SEPARATOR);
};

export const joinIf = function(ifArray){
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

const hasRegex = function(options) {
  return isObject(options) && options.hasOwnProperty('regex');
};

const isJoinable = function(item) {
  return typeof item === 'string' || typeof item === 'number';
};

const DEFAULT_SEPARATOR = ' ';