/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/discover";
const HTML_LINK = "items/discover.html";

exports.getHomeItem = function() {
	return {
      "image": "book",
      "color": "red",
      "path": PATH,
      "link": HTML_LINK,
      "title": "Discover",
      "description": "Dirigible Books Sample"
   };
};

exports.getMenuItem = function() {
	return {  
      "name": "Discover",
      "path": PATH,
      "link": HTML_LINK
   };
};
