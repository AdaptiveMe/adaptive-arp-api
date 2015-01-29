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

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <ServiceToken.h>

/**

@author Carlos Lozano Diez
@since v2.0.6
@version 1.0
*/
@implementation ServiceToken


     /**
        Default constructor.

        @since v2.0.6
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        Convenience constructor.

        @param serviceName      Name of the configured service.
        @param endpointName     Name of the endpoint configured for the service.
        @param functionName     Name of the function configured for the endpoint.
        @param invocationMethod Method type configured for the function.
        @since v2.0.6
     */
     - (id) initWithServiceNameEndpointNameFunctionNameInvocationMethod:(NSString*)serviceName endpointName:(NSString*)endpointName functionName:(NSString*)functionName invocationMethod:(IServiceMethod*)invocationMethod {
          self = [self init];
          if (self) {
               [self setServiceName:serviceName];
               [self setEndpointName:endpointName];
               [self setFunctionName:functionName];
               [self setInvocationMethod:invocationMethod];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
