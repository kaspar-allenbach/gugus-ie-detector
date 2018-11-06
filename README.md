# gugus-ie-detector
A simple Ie dection Script for detecting IE11

This is not supposed to be a detector for every browser. I just want to detect IE 11 to add some hacks.

This plugin will add the classes `internetExplorer` and `ie11` `ie10` `ie9` to you body tag so you can write scoped css for Internet Explorer. Remember. This Method of User-Agent detection is anything but foolproof but it works most of the time.

The detection is based on this [Stack Overflow Thread](https://stackoverflow.com/questions/21825157/internet-explorer-11-detection). So all credits go over there.

# Installation:

(gugus)*Use this thing at your own risk! I know browser detection is evil. But what can you do?*

## Webpack
```
entry: [
  '@kspr/gugus-ie-detector'
]
```
In your `.js` File:

```
import ieDetector from '@kspr/gugus-ie-detector';
ieDetector();
```

## Future

I want to add an option to disable the console logs in a production environement.
