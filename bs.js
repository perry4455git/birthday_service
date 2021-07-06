const fs = require("fs");

const readFriends = (filePath) => {
  if (!filePath) throw new Error("filepath is missing");
  return fs.readFileSync(filePath);
};

module.exports = { readFriends };
