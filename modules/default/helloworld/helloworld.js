/* MagicMirror²
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

let str = "Hello world Module";
Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: str
	},

	getTemplate: function () {
		return "helloworld.njk";
	},

	getTemplateData: function () {
		return this.config;
	},

	getHeader: function () {
		return "Header";
	}
});
