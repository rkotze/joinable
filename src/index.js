const slice = Array.prototype.slice;
export const joinStrings = function(){
  const args = slice.call(arguments);
  const stringList = args.filter((item) => {
    return item;
  });

  return stringList.join(' ');
};