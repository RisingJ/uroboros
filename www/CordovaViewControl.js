
// (c) 2011-2014 Jesse MacFadyen,  Adobe Systems Incorporated

var exec = require('cordova/exec');

module.exports = {

	loadView:function(strPath) {
		exec(null,null,"CordovaViewControl","loadView",[strPath]);
	}

}