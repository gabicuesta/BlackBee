var blackBee = {

    getVersionNumber: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "BlackBee",
            "getVersionNumber"
        );
    },

    getSO: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "BlackBee",
            "getSO"
        );
    },

    getLanguage: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "BlackBee",
            "getLanguage"
        );
    }

};

module.exports = blackBee;
