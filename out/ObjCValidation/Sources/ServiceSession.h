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

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>
#import <ServiceSessionAttribute.h>
#import <ServiceSessionCookie.h>

/**
Represents a session object for HTTP request and responses

@author Ferran Vila Conesa
@since v2.0
@version 1.0
*/
@interface ServiceSession : APIBean

     /**
        The attributes of the request or response.
        Array objects must be of ServiceSessionAttribute type.
     */
     @property NSArray *attributes;
     /**
        The cookies of the request or response.
        Array objects must be of ServiceSessionCookie type.
     */
     @property NSArray *cookies;

     /**
        Default constructor.

        @since v2.0
     */
     - (id) init;

     /**
        Constructor with fields.

        @param cookies    The cookies of the request or response.
        @param attributes Attributes of the request or response.
        @since v2.0
     */
     - (id) initWithCookiesAttributes:(NSArray*)cookies attributes:(NSArray*)attributes;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
