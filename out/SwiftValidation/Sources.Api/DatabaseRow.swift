/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing a row for a data table.

   @author Ferran Vila Conesa
   @since ARP1.0
   @version 1.0
*/
public class DatabaseRow : APIBean {

     /**
        The values of the row.
     */
     var values : [String]?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor for implementation using.

        @param values The values of the row
        @since ARP1.0
     */
     public init(values: [String]) {
          super.init()
          self.values = values
     }

     /**
        Returns the values of the row.

        @return The values of the row.
        @since ARP1.0
     */
     public func getValues() -> [String]? {
          return self.values
     }

     /**
        Sets the values of the row.

        @param values The values of the row.
        @since ARP1.0
     */
     public func setValues(values: [String]) {
          self.values = values
     }


     /**
        JSON Serialization and deserialization support.
     */
     struct Serializer {
          static func fromJSON(json : String) -> DatabaseRow {
               var data:NSData = json.dataUsingEncoding(NSUTF8StringEncoding)!
               var jsonError: NSError?
               let dict = NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions.MutableContainers, error: &jsonError) as NSDictionary
               return fromDictionary(dict)
          }

          static func fromDictionary(dict : NSDictionary) -> DatabaseRow {
               var resultObject : DatabaseRow = DatabaseRow()

               if let value : AnyObject = dict.objectForKey("values") {
                    if value as NSString != "<null>" {
                         var values : [String] = [String]()
                         for (var i = 0;i < (value as NSArray).count ; i++) {
                              values.append((value as NSArray)[i] as String)
                         }
                         resultObject.values = values
                    }
               }

               return resultObject
          }

          static func toJSON(object: DatabaseRow) -> String {
               var jsonString : NSMutableString = NSMutableString()
               // Start Object to JSON
               jsonString.appendString("{ ")

               // Fields.
               if (object.values != nil) {
                    // Start array of objects.
                    jsonString.appendString("\"values\": [");

                    for var i = 0; i < object.values!.count; i++ {
                         jsonString.appendString("\"\(object.values![i])\"");
                         if (i < object.values!.count-1) {
                              jsonString.appendString(", ");
                         }
                    }

                    // End array of objects.
                    jsonString.appendString("]");
               } else {
                    jsonString.appendString("\"values\": null")
               }

               // End Object to JSON
               jsonString.appendString(" }")
               return jsonString
          }
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
