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

#import <Endpoint.h>
#import <Foundation/Foundation.h>

/**
Represents an instance of a service.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface Service : NSObject

     /**
        The method used
     */
     typedef NS_OPTIONS(NSUInteger, IServiceMethod) {
          IServiceMethod_POST = 0,
          IServiceMethod_GET = 1,
          IServiceMethod_Unknown = 2
     };

     @property IServiceMethod *method;
     /**
        The type of the service
     */
     typedef NS_OPTIONS(NSUInteger, IServiceType) {
          IServiceType_SERVICETYPE_AMF_SERIALIZATION = 0,
          IServiceType_SERVICETYPE_GWT_RPC = 1,
          IServiceType_SERVICETYPE_OCTET_BINARY = 2,
          IServiceType_SERVICETYPE_REMOTING_SERIALIZATION = 3,
          IServiceType_SERVICETYPE_REST_JSON = 4,
          IServiceType_SERVICETYPE_REST_XML = 5,
          IServiceType_SERVICETYPE_SOAP_JSON = 6,
          IServiceType_SERVICETYPE_SOAP_XML = 7,
          IServiceType_SERVICETYPE_XMLRPC_JSON = 8,
          IServiceType_SERVICETYPE_XMLRPC_XML = 9,
          IServiceType_Unknown = 10
     };

     @property IServiceType *type;
     /**
        Enpoint of the service
     */
     @property Endpoint *endpoint;
     /**
        The service name
     */
     @property NSString *name;

     /**
        Constructor used by the implementation
     */
     - (id) init;

     /**
        Constructor used by the implementation

        @param endpoint
        @param name
        @param method
        @param type
        @since ARP1.0
     */
     - (id) initWithEndpointNameMethodType:(Endpoint*)endpoint name:(NSString*)name method:(IServiceMethod*)method type:(IServiceType*)type;

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
