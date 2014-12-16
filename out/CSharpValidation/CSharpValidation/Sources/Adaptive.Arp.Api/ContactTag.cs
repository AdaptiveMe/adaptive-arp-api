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

    * @version v1.0.48
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Structure representing the assigned tags data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     public class ContactTag : APIBean
     {

          /**
             The name of the Tag
          */
          public string Name { get; set; }
          /**
             The value of the Tag
          */
          public string Value { get; set; }

          /**
             Default constructor

             @since ARP1.0
          */
          public ContactTag()  {
          }

          /**
             Constructor used by the implementation

             @param Value Value of the tag
             @param Name  Name of the tag
             @since ARP1.0
          */
          public ContactTag(string Name, string Value) : base () {
               this.Name = Name;
               this.Value = Value;
          }

          /**
             Returns the name of the Tag

             @return Name
             @since ARP1.0
          */
          public string GetName() {
               return this.Name;
          }

          /**
             Set the name of the Tag

             @param Name Name of the tag
             @since ARP1.0
          */
          public void SetName(string Name) {
               this.Name = Name;
          }

          /**
             Returns the value of the Tag

             @return Value
             @since ARP1.0
          */
          public string GetValue() {
               return this.Value;
          }

          /**
             Set the value of the Tag

             @param Value Value of the tag
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
