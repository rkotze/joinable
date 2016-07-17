const slice = Array.prototype.slice;
export const joinStrings = function(){
  const args = slice.call(arguments);
  const stringList = args.filter((item) => {
    return item;
  });

  return stringList.join(' ');
};

export const joinIf = function(twoValueArray){
  if(twoValueArray.length === 2 && twoValueArray[0])
    return twoValueArray[1];

  return null;
};