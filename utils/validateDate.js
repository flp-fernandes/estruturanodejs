const moment = require("moment");

module.exports = validateDate = date => {
  try {
    return moment(date).isValid();
  } catch (error) {
    return false;
  }
};
