/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseApplication.d.ts" />
/// <reference path="ILifecycleListener.d.ts" />
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
declare module Adaptive {
    /**
       Definition of ILifecycle interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILifecycle extends IBaseApplication {
        /**
           Add the listener for the lifecycle of the app
           @param listener
           @since ARP1.0
        */
        addLifecycleListener(listener: ILifecycleListener): any;
        /**
           Whether the application is in background or not
           @return true if the application is in background;false otherwise
           @since ARP1.0
        */
        isBackground(): boolean;
        /**
           Un-registers an existing listener from receiving lifecycle events.
           @param listener
           @since ARP1.0
        */
        removeLifecycleListener(listener: ILifecycleListener): any;
        /**
           Removes all existing listeners from receiving lifecycle events.
           @since ARP1.0
        */
        removeLifecycleListeners(): any;
    }
}
