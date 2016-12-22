/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/develop";
const HTML_LINK = "items/develop.html";

exports.getHomeItem = function() {
	return {
      "image": "book",
      "color": "green",
      "path": PATH,
      "link": HTML_LINK,
      "title": "Develop",
      "description": "Dirigible Books Sample"
   };
};

exports.getMenuItem = function() {
	return {  
      "name": "Develop",
      "path": PATH,
      "link": HTML_LINK
   };
};
