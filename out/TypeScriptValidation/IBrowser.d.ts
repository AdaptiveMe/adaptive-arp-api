/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseUI.d.ts" />
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
       Definition of IBrowser interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBrowser extends IBaseUI {
        /**
           null
        */
        openExtenalBrowser(url: string): boolean;
        /**
           Open a new window showing the url webpage with a title and a close button displaying the desired text
           @param url            to open
           @param title          of the new window
           @param backButtonText text of the close button
           @return true if the new window opens;false otherwise
        */
        openInternalBrowserModal(url: string, title: string, backButtonText: string): boolean;
        /**
           null
        */
        openInternalBrowser(url: string, title: string, backButtonText: string): boolean;
    }
}
