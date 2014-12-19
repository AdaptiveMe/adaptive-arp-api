// Playground - noun: a place where people can play

import UIKit



var str:String = "{\"name\":\"ferran\",\"age\":29,\"type\":{\"value\":\"HomeButton\"}, \"values\": [1,2,3,4,5,{\"name\":null,\"age\":29,\"type\":{\"value\":\"HomeButton\"}}]}"

var data:NSData = str.dataUsingEncoding(NSUTF8StringEncoding)!

var jsonError: NSError?
let decodedJson = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &jsonError) as NSDictionary

var trash : NSMutableDictionary = NSMutableDictionary()
trash["garbage"] = "huge trash"
trash.removeObjectForKey("garbage")

if !(jsonError != nil) {
    decodedJson.objectForKey("burger") != nil ? println(decodedJson["burger"]!) : println(decodedJson["name"]!)
    
    println(decodedJson["age"]!)
    println((decodedJson["values"]! as NSArray)[5])
    println(((decodedJson["values"]! as NSArray)[5] as NSDictionary)["name"]!)
    println((decodedJson["type"] as NSDictionary)["value"]!)
}