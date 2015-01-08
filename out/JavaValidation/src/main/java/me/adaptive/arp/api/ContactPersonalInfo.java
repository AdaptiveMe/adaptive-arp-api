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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Structure representing the personal info data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class ContactPersonalInfo extends APIBean {

     /**
        The title of the Contact
     */
     private ContactPersonalInfoTitle title;
     /**
        The last name of the Contact
     */
     private String lastName;
     /**
        The middle name of the Contact if it proceeds
     */
     private String middleName;
     /**
        The name of the Contact
     */
     private String name;

     /**
        Default constructor

        @since ARP1.0
     */
     public ContactPersonalInfo() {
     }

     /**
        The Constructor used by the implementation

        @param name       of the Contact
        @param middleName of the Contact
        @param lastName   of the Contact
        @param title      of the Contact
        @since ARP1.0
     */
     public ContactPersonalInfo(String name, String middleName, String lastName, ContactPersonalInfoTitle title) {
          super();
          this.name = name;
          this.middleName = middleName;
          this.lastName = lastName;
          this.title = title;
     }

     /**
        Returns the title of the Contact

        @return Title
        @since ARP1.0
     */
     public ContactPersonalInfoTitle getTitle() {
          return this.title;
     }

     /**
        Set the Title of the Contact

        @param title of the Contact
        @since ARP1.0
     */
     public void setTitle(ContactPersonalInfoTitle title) {
          this.title = title;
     }

     /**
        Returns the last name of the Contact

        @return lastName
        @since ARP1.0
     */
     public String getLastName() {
          return this.lastName;
     }

     /**
        Set the last name of the Contact

        @param lastName of the Contact
        @since ARP1.0
     */
     public void setLastName(String lastName) {
          this.lastName = lastName;
     }

     /**
        Returns the middle name of the Contact

        @return middelName
        @since ARP1.0
     */
     public String getMiddleName() {
          return this.middleName;
     }

     /**
        Set the middle name of the Contact

        @param middleName of the Contact
        @since ARP1.0
     */
     public void setMiddleName(String middleName) {
          this.middleName = middleName;
     }

     /**
        Returns the name of the Contact

        @return name
        @since ARP1.0
     */
     public String getName() {
          return this.name;
     }

     /**
        Set the name of the Contact

        @param name of the Contact
        @since ARP1.0
     */
     public void setName(String name) {
          this.name = name;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
