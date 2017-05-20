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
    }

};

module.exports = blackBee;
