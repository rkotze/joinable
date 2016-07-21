const slice = Array.prototype.slice;
export const joinStrings = function(){
  const { args, separator } = setup(arguments);
  const stringList = args
  .map(joinIf)
  .filter((item) => {
    return item && !isObject(item);
  });

  return stringList.join(separator);
};

export const joinIf = function(threeValueArray){
  if(!isArray(threeValueArray))
    return threeValueArray;

  if(threeValueArray.length >= 2){
    const conditional = threeValueArray[0];
    return [...threeValueArray.slice(1, 3), null][Number(!conditional)];
  }

  return null;
};

let isArray = Array.isArray;
if (!isArray) {
  isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

const isObject = function(arg){
  return Object.prototype.toString.call(arg) === '[object Object]';
};

const hasSeparator = function(options) {
  return isObject(options) && options.hasOwnProperty('separator');
};

const DEFAULT_SEPARATOR = ' ';

const setup = function(args) {
  const options = args[args.length-1];
  if(hasSeparator(options)){
    return setupModal(options.separator, slice.call(args, 0, -1));
  }

  return setupModal(DEFAULT_SEPARATOR, slice.call(args));
};

const setupModal = function(separator, args){
  return {
    separator,
    args
  };
};