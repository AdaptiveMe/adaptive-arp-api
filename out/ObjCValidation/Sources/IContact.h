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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBasePIM.h>

/**
Interface for Managing the Contact operations

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@protocol IContact <IBasePIM>

     typedef NS_OPTIONS(NSUInteger, IContactFieldGroup) {
          IContactFieldGroup_PERSONAL_INFO = 0,
          IContactFieldGroup_PROFESSIONAL_INFO = 1,
          IContactFieldGroup_ADDRESSES = 2,
          IContactFieldGroup_PHONES = 3,
          IContactFieldGroup_EMAILS = 4,
          IContactFieldGroup_WEBSITES = 5,
          IContactFieldGroup_SOCIALS = 6,
          IContactFieldGroup_TAGS = 7,
          IContactFieldGroup_Unknown = 8
     };

     typedef NS_OPTIONS(NSUInteger, IContactFilter) {
          IContactFilter_HAS_PHONE = 0,
          IContactFilter_HAS_EMAIL = 1,
          IContactFilter_HAS_ADDRESS = 2,
          IContactFilter_Unknown = 3
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
