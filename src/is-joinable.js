function isJoinable(item) {
  return typeof item === 'string' || typeof item === 'number';
}

export default isJoinable;