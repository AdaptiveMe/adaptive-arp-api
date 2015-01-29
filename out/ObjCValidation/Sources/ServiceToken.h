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

    * @version v2.0.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Object representing a specific service, path, function and invocation method for accessing external services.

@author Carlos Lozano Diez
@since v2.0.6
@version 1.0
*/
@interface ServiceToken : APIBean

     /**
        Http method to be used by the invocation - this is typically GET or POST albeit the platform may support
other invocation methods. This is also defined per function of each endpoint in the platform's XML file.
     */
     typedef NS_OPTIONS(NSUInteger, IServiceMethod) {
          IServiceMethod_POST = 0,
          IServiceMethod_GET = 1,
          IServiceMethod_HEAD = 2,
          IServiceMethod_Unknown = 3
     };

     @property IServiceMethod *invocationMethod;
     /**
        Name of the endpoint configured in the platform's services XML file. This is a reference to a specific schema,
host and port combination for a given service.
     */
     @property NSString *endpointName;
     /**
        Name of the function configured in the platform's services XML file for a specific endpoint. This is a reference
to a relative path of a function published on a remote service.
     */
     @property NSString *functionName;
     /**
        Name of the service configured in the platform's services XML file.
     */
     @property NSString *serviceName;

     /**
        Default constructor.

        @since v2.0.6
     */
     - (id) init;

     /**
        Convenience constructor.

        @param serviceName      Name of the configured service.
        @param endpointName     Name of the endpoint configured for the service.
        @param functionName     Name of the function configured for the endpoint.
        @param invocationMethod Method type configured for the function.
        @since v2.0.6
     */
     - (id) initWithServiceNameEndpointNameFunctionNameInvocationMethod:(NSString*)serviceName endpointName:(NSString*)endpointName functionName:(NSString*)functionName invocationMethod:(IServiceMethod*)invocationMethod;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
