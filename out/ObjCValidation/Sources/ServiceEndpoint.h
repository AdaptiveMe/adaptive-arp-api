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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>
#import <ServicePath.h>

/**
Structure representing a remote or local service access end-point.

@author Aryslan
@since ARP1.0
@version 1.0
*/
@interface ServiceEndpoint : APIBean

     /**
        The remote service host (alias or IP).
     */
     @property NSString *host;
     /**
        The remote service paths (to be added to the host and port url).
        Array objects must be of ServicePath type.
     */
     @property NSArray *paths;
     /**
        The remote service accessible port.
     */
     @property int *port;
     /**
        The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
     */
     @property NSString *proxy;
     /**
        The remote service scheme.
     */
     @property NSString *scheme;

     /**
        Default Constructor

        @since ARP1.0
     */
     - (id) init;

     /**
        Constructor with parameters

        @param host   Remote service host
        @param paths  Remote service Paths
        @param port   Remote service Port
        @param proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
        @param scheme Remote service scheme
        @since ARP1.0
     */
     - (id) initWithHostPathsPortProxyScheme:(NSString*)host paths:(NSArray*)paths port:(int*)port proxy:(NSString*)proxy scheme:(NSString*)scheme;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
