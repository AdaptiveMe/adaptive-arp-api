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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Represents a basic bean to store key pair values

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     public class KeyPair : APIBean
     {

          /**
             Key of the element
          */
          public string Key { get; set; }
          /**
             Value of the element
          */
          public string Value { get; set; }

          /**
             Default Constructor

             @since ARP1.0
          */
          public KeyPair()  {
          }

          /**
             Constructor using fields

             @param Key   Key of the element
             @param Value Value of the element
             @since ARP1.0
          */
          public KeyPair(string Key, string Value) : base () {
               this.Key = Key;
               this.Value = Value;
          }

          /**
             Returns the key of the element

             @return Key of the element
             @since ARP1.0
          */
          public string GetKey() {
               return this.Key;
          }

          /**
             Sets the key of the element

             @param Key Key of the element
             @since ARP1.0
          */
          public void SetKey(string Key) {
               this.Key = Key;
          }

          /**
             Returns the value of the element

             @return Value of the element
             @since ARP1.0
          */
          public string GetValue() {
               return this.Value;
          }

          /**
             Sets the value of the element

             @param Value Value of the element
             @since ARP1.0
          */
          public void SetValue(string Value) {
               this.Value = Value;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/