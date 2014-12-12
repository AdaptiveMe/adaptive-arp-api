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

/**
   Structure representing the personal info data elements of a contact.

   @author Francisco Javier Martin Bueno
   @since ARP1.0
   @version 1.0
*/
public class ContactPersonalInfo : APIBean {

     /**
        The title of the Contact
     */
     var title : ContactPersonalInfoTitle?
     /**
        The last name of the Contact
     */
     var lastName : String?
     /**
        The middle name of the Contact if it proceeds
     */
     var middleName : String?
     /**
        The name of the Contact
     */
     var name : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        The Constructor used by the implementation

        @param name       of the Contact
        @param middleName of the Contact
        @param lastName   of the Contact
        @param title      of the Contact
        @since ARP1.0
     */
     public init(name: String, middleName: String, lastName: String, title: ContactPersonalInfoTitle) {
          super.init()
          self.name = name
          self.middleName = middleName
          self.lastName = lastName
          self.title = title
     }

     /**
        Returns the title of the Contact

        @return Title
        @since ARP1.0
     */
     public func getTitle() -> ContactPersonalInfoTitle? {
          return self.title
     }

     /**
        Set the Title of the Contact

        @param title of the Contact
        @since ARP1.0
     */
     public func setTitle(title: ContactPersonalInfoTitle) {
          self.title = title
     }

     /**
        Returns the last name of the Contact

        @return lastName
        @since ARP1.0
     */
     public func getLastName() -> String? {
          return self.lastName
     }

     /**
        Set the last name of the Contact

        @param lastName of the Contact
        @since ARP1.0
     */
     public func setLastName(lastName: String) {
          self.lastName = lastName
     }

     /**
        Returns the middle name of the Contact

        @return middelName
        @since ARP1.0
     */
     public func getMiddleName() -> String? {
          return self.middleName
     }

     /**
        Set the middle name of the Contact

        @param middleName of the Contact
        @since ARP1.0
     */
     public func setMiddleName(middleName: String) {
          self.middleName = middleName
     }

     /**
        Returns the name of the Contact

        @return name
        @since ARP1.0
     */
     public func getName() -> String? {
          return self.name
     }

     /**
        Set the name of the Contact

        @param name of the Contact
        @since ARP1.0
     */
     public func setName(name: String) {
          self.name = name
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
