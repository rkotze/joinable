export const regexTestCases = [
  {
    stringsToJoin: ['mickey', 'minnie', 'donald'],
    regex: /minnie/,
    joinedString: 'minnie'
  },
  {
    stringsToJoin: ['mickey@burbank.com', 'minnie', 'donald@calisota.com'],
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    joinedString: 'mickey@burbank.com donald@calisota.com'
  },
  {
    stringsToJoin: ['mickey-mouse', 'minnie_mouse', 'donald_duck'],
    regex: /^[a-z0-9_]+$/,
    joinedString: 'minnie_mouse donald_duck'
  }
];