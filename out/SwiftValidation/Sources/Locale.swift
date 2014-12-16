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

    * @version v1.0.45-260-gbb1d381

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Represents a specific user or system locate.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class Locale : APIBean {

     /**
        A valid ISO Country Code.
     */
     var country : String?
     /**
        A valid ISO Language Code.
     */
     var language : String?

     /**
        Default constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor used by the implementation

        @param country  Country of the Locale
        @param language Language of the Locale
        @since ARP1.0
     */
     public init(language: String, country: String) {
          super.init()
          self.language = language
          self.country = country
     }

     /**
        Returns the country code

        @return country code
        @since ARP1.0
     */
     public func getCountry() -> String? {
          return self.country
     }

     /**
        Set the country code

        @param country code
        @since ARP1.0
     */
     public func setCountry(country: String) {
          self.country = country
     }

     /**
        Returns the language code

        @return language code
        @since ARP1.0
     */
     public func getLanguage() -> String? {
          return self.language
     }

     /**
        Set the language code

        @param language code
        @since ARP1.0
     */
     public func setLanguage(language: String) {
          self.language = language
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
