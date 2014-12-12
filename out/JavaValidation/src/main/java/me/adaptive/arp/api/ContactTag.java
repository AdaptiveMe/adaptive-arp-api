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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Structure representing the assigned tags data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class ContactTag extends APIBean {

     /**
        The name of the Tag
     */
     private String name;
     /**
        The value of the Tag
     */
     private String value;

     /**
        Default constructor

        @since ARP1.0
     */
     public ContactTag() {
     }

     /**
        Constructor used by the implementation

        @param value Value of the tag
        @param name  Name of the tag
        @since ARP1.0
     */
     public ContactTag(String name, String value) {
          super();
          this.name = name;
          this.value = value;
     }

     /**
        Returns the name of the Tag

        @return name
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Set the name of the Tag

        @param name Name of the tag
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }

     /**
        Returns the value of the Tag

        @return value
        @since ARP1.0
     */
     public String getValue() {
          return this.value;
     }

     /**
        Set the value of the Tag

        @param value Value of the tag
        @since ARP1.0
     */
     public void setValue(String value) {
          this.value = value;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
