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

    * @version v2.0.0
    
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <ContactPersonalInfo.h>

/**

@author Francisco Javier Martin Bueno
@since ARP1.0
@version 1.0
*/
@implementation ContactPersonalInfo


     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        The Constructor used by the implementation

        @param name       of the Contact
        @param middleName of the Contact
        @param lastName   of the Contact
        @param title      of the Contact
        @since ARP1.0
     */
     - (id) initWithNameMiddleNameLastNameTitle:(NSString*)name middleName:(NSString*)middleName lastName:(NSString*)lastName title:(ContactPersonalInfoTitle*)title {
          self = [self init];
          if (self) {
               [self setName:name];
               [self setMiddleName:middleName];
               [self setLastName:lastName];
               [self setTitle:title];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
