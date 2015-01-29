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

    * @version v2.0.6

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <ServiceRequest.h>

/**

@author Aryslan
@since v2.0
@version 1.0
*/
@implementation ServiceRequest


     /**
        Default constructor.

        @since v2.0
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        Convenience constructor.

        @param content      Content payload.
        @param serviceToken ServiceToken for the request.
        @since v2.0.6
     */
     - (id) initWithContentServiceToken:(NSString*)content serviceToken:(ServiceToken*)serviceToken {
          self = [self init];
          if (self) {
               [self setContent:content];
               [self setServiceToken:serviceToken];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
