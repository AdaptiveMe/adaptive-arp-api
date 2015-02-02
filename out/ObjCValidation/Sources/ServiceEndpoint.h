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

    * @version v2.1.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <ServicePath.h>

/**
Structure representing a remote or local service access end-point.

@author Aryslan
@since v2.0
@version 1.0
*/
@interface ServiceEndpoint : NSObject

     /**
        Type of validation to be performed for SSL hosts.
     */
     typedef NS_OPTIONS(NSUInteger, IServiceCertificateValidation) {
          IServiceCertificateValidation_None = 0,
          IServiceCertificateValidation_Normal = 1,
          IServiceCertificateValidation_Extended = 2,
          IServiceCertificateValidation_Extreme = 3,
          IServiceCertificateValidation_Unknown = 4
     };

     @property IServiceCertificateValidation *validationType;
     /**
        The remote service hostURI URI (alias or IP) composed of scheme://hostURI:port (http://hostURI:8080).
     */
     @property NSString *hostURI;
     /**
        The remote service paths (to be added to the hostURI and port url).
        Array objects must be of ServicePath type.
     */
     @property NSArray *paths;

     /**
        Default Constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor with parameters

        @param hostURI Remote service hostURI
        @param paths   Remote service Paths
        @since v2.0.6
     */
     - (id) initWithHostURIPaths:(NSString*)hostURI paths:(NSArray*)paths;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
