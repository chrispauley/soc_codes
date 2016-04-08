var soc_codes = require('./soc_codes.json');

function getSocCode(arr) {
  return item.soc_code === "11-2021";
};

// filter function
function exists(item, index, array){
	if (value === ""){
		return true;
	}
	else { return false;
	}
}
// json.filter = function(fn) {
//   return this.reduce(function(all, item, index) {
//      if(fn(item, index)) {
//        all.push(item);
//      }
//      return all;
//   },[]);
// }
// json.filter(function(item, index) {
// return item.soc_code === "11-1021";
// });

function hasCode(item, value) {
  return item.soc_code === value;
};

// json.find(function(code) {
//   if soc_code === code {
//     return item;
//   }
// })("11-2021");

module.exports = {
  all: soc_codes,
  hasCode: hasCode,
  getCode: getSocCode
};
