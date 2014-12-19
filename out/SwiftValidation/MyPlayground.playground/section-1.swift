// Playground - noun: a place where people can play

import UIKit

var dict = Dictionary<String, AnyObject>()

// Own fields.
dict["type"] = "{value: \"HomeButton\"}"


var data = NSJSONSerialization.dataWithJSONObject(dict, options:NSJSONWritingOptions(0), error: nil)!

NSString(data: data, encoding: NSUTF8StringEncoding)!

var jsonString : NSMutableString = NSMutableString()
jsonString.appendString("One")
jsonString.appendString("Two")
jsonString as String
