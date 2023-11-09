const colors = require('./colors');
const fontSize = require('./fontSize');
const borderRadius = require('./borderRadius');
const boxShadow = require('./boxShadow');

module.exports = {
  extend: {
    colors: { ...colors },
    fontSize: { ...fontSize },
    borderRadius: { ...borderRadius },
    boxShadow: { ...boxShadow }
  }
};
