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

package me.adaptive.arp.api;

/**
   Represents a row for a data table.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class Row {

     /**
        The values of the row.
     */
     private Object[] values;

     /**
        Constructor used by the implementation
     */
     public Row() {
     }

     /**
        Constructor for implementation using.

        @param values The values of the row
     */
     public Row(Object[] values) {
          this();
          this.values = values;
     }
     /**
        Returns the values of the row.

        @return The values of the row.
     */
     public Object[] getValues() {
          return this.values;
     }

     /**
        Sets the values of the row.

        @param values The values of the row.
     */
     public void setValues(Object[] values) {
          this.values = values;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
