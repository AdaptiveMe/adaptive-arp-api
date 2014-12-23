// Playground - noun: a place where people can play

import UIKit



var str:String = "{\"parameters\":[\"One\", \"Two\", [\"A1\",\"A2\",\"A3\"]]}"

var data:NSData = str.dataUsingEncoding(NSUTF8StringEncoding)!

var jsonError: NSError?
let decodedJson = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &jsonError) as NSDictionary

var trash : NSMutableDictionary = NSMutableDictionary()
trash["garbage"] = "huge trash"
trash.removeObjectForKey("garbage")

if !(jsonError != nil) {
    
    decodedJson["parameters"]!
    var array : [String] = decodedJson["parameters"]![2] as [String]
    decodedJson["parameters"]![2][0]
    print(array[0])

}

