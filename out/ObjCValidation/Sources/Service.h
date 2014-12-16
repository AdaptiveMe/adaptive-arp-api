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

#import <APIBean.h>
#import <Foundation/Foundation.h>
#import <ServiceEndpoint.h>

/**
Represents an instance of a service.

@author Aryslan
@since ARP1.0
@version 1.0
*/
@interface Service : APIBean

     /**
        The method used
     */
     typedef NS_OPTIONS(NSUInteger, IServiceMethod) {
          IServiceMethod_Post = 0,
          IServiceMethod_Get = 1,
          IServiceMethod_Unknown = 2
     };

     @property IServiceMethod *method;
     /**
        The type of the service
     */
     typedef NS_OPTIONS(NSUInteger, IServiceType) {
          IServiceType_ServiceTypeAmfSerialization = 0,
          IServiceType_ServiceTypeGwtRpc = 1,
          IServiceType_ServiceTypeOctetBinary = 2,
          IServiceType_ServiceTypeRemotingSerialization = 3,
          IServiceType_ServiceTypeRestJson = 4,
          IServiceType_ServiceTypeRestXml = 5,
          IServiceType_ServiceTypeSoapJson = 6,
          IServiceType_ServiceTypeSoapXml = 7,
          IServiceType_ServiceTypeXmlRpcJson = 8,
          IServiceType_ServiceTypeXmlRpcXml = 9,
          IServiceType_Unknown = 10
     };

     @property IServiceType *type;
     /**
        The service name
     */
     @property NSString *name;
     /**
        Endpoint of the service
     */
     @property ServiceEndpoint *serviceEndpoint;

     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init;

     /**
        Constructor used by the implementation

        @param serviceEndpoint Endpoint of the service
        @param name            Name of the service
        @param method          Method of the service
        @param type            Type of the service
        @since ARP1.0
     */
     - (id) initWithServiceEndpointNameMethodType:(ServiceEndpoint*)serviceEndpoint name:(NSString*)name method:(IServiceMethod*)method type:(IServiceType*)type;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
