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
   Structure representing the column specification of a data table.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Column : NSObject {

     /**
        Name of the column
     */
     var name : String?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

     /**
        Constructor for implementation using.

        @param name Name of the column
     */
     public convenience init(name: String) {
          self.init()
          self.name = name
     }

     /**
        Returns the name of the column.

        @return The name of the column.
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Sets the name of the column.

        @param name The name of the column.
     */
     public func setName(name: String) {
          self.name = name
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
