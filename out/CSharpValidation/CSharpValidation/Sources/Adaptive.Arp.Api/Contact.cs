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
     Structure representing the data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     public class Contact : ContactUid
     {

          /**
             The adresses from the contact
          */
          public ContactAddress[] ContactAddresses { get; set; }
          /**
             The emails from the contact
          */
          public ContactEmail[] ContactEmails { get; set; }
          /**
             The phones from the contact
          */
          public ContactPhone[] ContactPhones { get; set; }
          /**
             The social network info from the contact
          */
          public ContactSocial[] ContactSocials { get; set; }
          /**
             The aditional tags from the contact
          */
          public ContactTag[] ContactTags { get; set; }
          /**
             The websites from the contact
          */
          public ContactWebsite[] ContactWebsites { get; set; }
          /**
             The personal info from the contact
          */
          public ContactPersonalInfo PersonalInfo { get; set; }
          /**
             The professional info from the contact
          */
          public ContactProfessionalInfo ProfessionalInfo { get; set; }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
