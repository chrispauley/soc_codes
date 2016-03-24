var soc_codes = require('./soc_codes.json');

function getSocCode (arr){
	return item.soc_code === "11-2021";
};

function hasCode(soc_codes){
    return true;
};



module.exports = {
  all: soc_codes,
  hasCode: hasCode,
  getCode: getSocCode
};
