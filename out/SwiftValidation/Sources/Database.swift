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

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing a database reference.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Database : NSObject {

     /**
        Indicates if database was created or needs to be created as Compressed.
     */
     var compress : Bool?
     /**
        Database Name (name of the .db local file).
     */
     var name : String?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Default constructor. The compress param is setted to false.

        @param name Name of the table.
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public convenience init(name: String) {
          self.init()
          self.name = name
     }

     /**
        Constructor using fields.

        @param name     Name of the Table.
        @param compress Compress enbaled or not.
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public convenience init(name: String, compress: Bool) {
          self.init()
          self.name = name
          self.compress = compress
     }
     /**
        Returns if the table is compressed

        @return Compression enabled
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public func getCompress() -> Bool? {
          return self.compress
     }

     /**
        Sets if the table is compressed or not.

        @param compress Compression enabled
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public func setCompress(compress: Bool) {
          self.compress = compress
     }

     /**
        Returns the name.

        @return The name of the table.
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Sets the name of the table.

        @param name The name of the table.
        @author Ferran Vila Conesa
        @since ARP1.0
     */
     public func setName(name: String) {
          self.name = name
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
