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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Represents a single secureKey-value pair.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class SecureKeyPair
     {

          public string SecureData { get; set; }
          public string SecureKey { get; set; }

          /**
             Constructor used by the implementation
          */
          public SecureKeyPair()  {
          }

          /**
             Constructor with parameters

             @param SecureKey   name of the keypair
             @param SecureData value of the keypair
             @since ARP1.0
          */
          public SecureKeyPair(string SecureKey, string SecureData) : base () {
               this.SecureKey = SecureKey;
               this.SecureData = SecureData;
          }

          /**
             Returns the object value

             @return Value.
             @since ARP 1.0
          */
          public string GetSecureData() {
               return this.SecureData;
          }

          /**
             Sets the value for this object

             @param secureData value to set.
             @since ARP 1.0
          */
          public void SetSecureData(string SecureData) {
               this.SecureData = SecureData;
          }

          /**
             Returns the object secureKey name.

             @return Key name.
             @since ARP 1.0
          */
          public string GetSecureKey() {
               return this.SecureKey;
          }

          /**
             Sets the secureKey name for this object.

             @param secureKey Key name.
             @since ARP 1.0
          */
          public void SetSecureKey(string SecureKey) {
               this.SecureKey = SecureKey;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
