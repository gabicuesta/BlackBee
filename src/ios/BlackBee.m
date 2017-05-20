#import "BlackBee.h"
#import <Cordova/CDV.h>

@implementation BlackBee

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command {

    CDVPluginResult* pluginResult = nil;

    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:(true)];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}

- (void)getSO:(CDVInvokedUrlCommand*)command {

    CDVPluginResult* pluginResult = nil;

    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"iOS"];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}

@end
