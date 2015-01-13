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
   Represents a basic bean to store keyName pair values

   @author Ferran Vila Conesa
   @since ARP1.0
   @version 1.0
*/
public class KeyPair extends APIBean {

     /**
        Key of the element
     */
     private String keyName;
     /**
        Value of the element
     */
     private String keyValue;

     /**
        Default Constructor

        @since ARP1.0
     */
     public KeyPair() {
     }

     /**
        Constructor using fields

        @param keyName  Key of the element
        @param keyValue Value of the element
        @since ARP1.0
     */
     public KeyPair(String keyName, String keyValue) {
          super();
          this.keyName = keyName;
          this.keyValue = keyValue;
     }

     /**
        Returns the keyName of the element

        @return Key of the element
        @since ARP1.0
     */
     public String getKeyName() {
          return this.keyName;
     }

     /**
        Sets the keyName of the element

        @param keyName Key of the element
        @since ARP1.0
     */
     public void setKeyName(String keyName) {
          this.keyName = keyName;
     }

     /**
        Returns the keyValue of the element

        @return Value of the element
        @since ARP1.0
     */
     public String getKeyValue() {
          return this.keyValue;
     }

     /**
        Sets the keyValue of the element

        @param keyValue Value of the element
        @since ARP1.0
     */
     public void setKeyValue(String keyValue) {
          this.keyValue = keyValue;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
