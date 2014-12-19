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
   Structure representing the a physical or logical button on a device.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class Button : APIBean {

     /**
        Button type
     */
     var type : ICapabilitiesButton?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with fields

        @param type Button type.
        @since ARP1.0
     */
     public init(type: ICapabilitiesButton) {
          super.init()
          self.type = type
     }

     /**
        Returns the button type

        @return type Button type.
        @since ARP1.0
     */
     public func getType() -> ICapabilitiesButton? {
          return self.type
     }

     /**
        Setter for the button type

        @param type Button Type
        @since ARP1.0
     */
     public func setType(type: ICapabilitiesButton) {
          self.type = type
     }


     /**
        JSON Serialization and deserialization support.
     */
     struct Serializer {
          static func fromJSON(json : String) -> Button {
               return Button()
          }

          static func toJSON(object: Button) -> String {
               var jsonString : NSMutableString = NSMutableString()
               // Start Object to JSON
               jsonString.appendString("{ ")

               // Own fields.
               object.type != nil ? jsonString.appendString("type: { value: \"\(object.type!.toString())\"}") : jsonString.appendString("type: null")

               // End Object to JSON
               jsonString.appendString(" }")
               return jsonString
          }
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
