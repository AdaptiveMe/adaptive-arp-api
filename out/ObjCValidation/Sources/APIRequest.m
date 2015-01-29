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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIRequest.h>

/**

@author Carlos Lozano Diez
@since v2.0
@version 1.0
*/
@implementation APIRequest


     /**
        Default constructor

        @since v2.0
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        Constructor with method name. No parameters

        @param bridgeType Name of the bridge to be invoked.
        @param methodName Name of the method
        @since v2.0
     */
     - (id) initWithBridgeTypeMethodName:(NSString*)bridgeType methodName:(NSString*)methodName {
          self = [self init];
          if (self) {
               [self setBridgeType:bridgeType];
               [self setMethodName:methodName];
          }
          return self;
     }

     /**
        Constructor with all the parameters

        @param bridgeType Name of the bridge to be invoked.
        @param methodName Name of the method
        @param parameters Array of parameters as JSON formatted strings.
        @param asyncId    Id of callback or listener or zero if none for synchronous calls.
        @since v2.0
     */
     - (id) initWithBridgeTypeMethodNameParametersAsyncId:(NSString*)bridgeType methodName:(NSString*)methodName parameters:(NSArray*)parameters asyncId:(long*)asyncId {
          self = [self init];
          if (self) {
               [self setBridgeType:bridgeType];
               [self setMethodName:methodName];
               [self setParameters:parameters];
               [self setAsyncId:asyncId];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
