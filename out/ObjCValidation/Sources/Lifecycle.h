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

#import <Foundation/Foundation.h>

/**
Represents a specific application life-cycle stage.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface Lifecycle : NSObject

     /**
        Represent the state of the app
     */
     typedef NS_OPTIONS(NSUInteger, LifecycleState) {
          LifecycleState_Starting = 0,
          LifecycleState_Started = 1,
          LifecycleState_Running = 2,
          LifecycleState_Paused = 3,
          LifecycleState_PausedIdle = 4,
          LifecycleState_PausedRun = 5,
          LifecycleState_Resuming = 6,
          LifecycleState_Stopping = 7,
          LifecycleState_Unknown = 8
     };

     @property LifecycleState *state;

     /**
        Constructor used by the implementation
     */
     - (id) init;

     /**
        Constructor used by the implementation

        @param state
        @since ARP1.0
     */
     - (id) initWithState:(LifecycleState*)state;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
