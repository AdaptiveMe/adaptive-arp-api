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

///<reference path="APIBean.ts"/>

module Adaptive {

     /**
        Represents a basic bean to store key pair values

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class KeyPair extends APIBean {

          /**
             Key of the element
          */
          key : string;
          /**
             Value of the element
          */
          value : string;
          /**
             Constructor using fields

             @param key   Key of the element
             @param value Value of the element
             @since ARP1.0
          */
          constructor(key: string, value: string) {
               super();
               this.key = key;
               this.value = value;
          }

          /**
             Returns the key of the element

             @return Key of the element
             @since ARP1.0
          */
          getKey() : string {
               return this.key;
          }

          /**
             Sets the key of the element

             @param key Key of the element
             @since ARP1.0
          */
          setKey(key: string) {
               this.key = key;
          }

          /**
             Returns the value of the element

             @return Value of the element
             @since ARP1.0
          */
          getValue() : string {
               return this.value;
          }

          /**
             Sets the value of the element

             @param value Value of the element
             @since ARP1.0
          */
          setValue(value: string) {
               this.value = value;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
