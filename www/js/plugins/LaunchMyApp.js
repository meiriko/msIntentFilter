(function () {
    "use strict";
    
    function triggerOpenURL() {
	alert('p1: ' + handleOpenURL);
          cordova.exec(
              (typeof handleOpenURL == "function" ? handleOpenURL : null),
              null,
              "LaunchMyApp",
              "checkIntent",
              []);
    }

  document.addEventListener("deviceready", triggerOpenURL, false);
	alert('p0');
}());
