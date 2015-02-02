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

    * @version v2.1.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>

/**
Structure representing a HTML5 request to the native API.

@author Carlos Lozano Diez
@since v2.0
@version 1.0
*/
@interface APIRequest : NSObject

     /**
        Identifier of API version of this request.
     */
     @property NSString *apiVersion;
     /**
        Identifier of callback or listener for async operations.
     */
     @property long *asyncId;
     /**
        String representing the bridge type to obtain.
     */
     @property NSString *bridgeType;
     /**
        String representing the method name to call.
     */
     @property NSString *methodName;
     /**
        Parameters of the request as JSON formatted strings.
        Array objects must be of String type.
     */
     @property NSArray *parameters;

     /**
        Default constructor

        @since v2.0
     */
     - (id) init;

     /**
        Constructor with method name. No parameters

        @param bridgeType Name of the bridge to be invoked.
        @param methodName Name of the method
        @since v2.0
     */
     - (id) initWithBridgeTypeMethodName:(NSString*)bridgeType methodName:(NSString*)methodName;

     /**
        Constructor with all the parameters

        @param bridgeType Name of the bridge to be invoked.
        @param methodName Name of the method
        @param parameters Array of parameters as JSON formatted strings.
        @param asyncId    Id of callback or listener or zero if none for synchronous calls.
        @since v2.0
     */
     - (id) initWithBridgeTypeMethodNameParametersAsyncId:(NSString*)bridgeType methodName:(NSString*)methodName parameters:(NSArray*)parameters asyncId:(long*)asyncId;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
