#import <Cordova/CDV.h>

@interface BlackBee : CDVPlugin

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command;
- (void)getSO:(CDVInvokedUrlCommand*)command;

@end
