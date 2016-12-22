/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/operate";
const HTML_LINK = "items/operate.html";

exports.getHomeItem = function() {
	return {
      "image": "book",
      "color": "blue",
      "path": PATH,
      "link": HTML_LINK,
      "title": "Operate",
      "description": "Dirigible Books Sample"
   };
};

exports.getMenuItem = function() {
	return {  
      "name": "Operate",
      "path": PATH,
      "link": HTML_LINK
   };
};
