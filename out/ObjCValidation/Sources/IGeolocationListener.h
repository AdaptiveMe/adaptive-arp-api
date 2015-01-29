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

    * @version v2.0.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBaseListener.h>

/**
Interface for Managing the Geolocation results

@author Francisco Javier Martin Bueno
@since v2.0
@version 1.0
*/
@protocol IGeolocationListener <IBaseListener>

     typedef NS_OPTIONS(NSUInteger, IGeolocationListenerError) {
          IGeolocationListenerError_Disabled = 0,
          IGeolocationListenerError_RestrictedAccess = 1,
          IGeolocationListenerError_DeniedAccess = 2,
          IGeolocationListenerError_StatusNotDetermined = 3,
          IGeolocationListenerError_Unknown = 4
     };

     typedef NS_OPTIONS(NSUInteger, IGeolocationListenerWarning) {
          IGeolocationListenerWarning_HighDoP = 0,
          IGeolocationListenerWarning_StaleData = 1,
          IGeolocationListenerWarning_Unknown = 2
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
