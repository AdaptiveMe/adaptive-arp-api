/// <reference path="BaseListener.d.ts" />
/// <reference path="Button.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="IButtonListener.d.ts" />
/// <reference path="IButtonListenerError.d.ts" />
/// <reference path="IButtonListenerWarning.d.ts" />
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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       ButtonListener global listener handlers.
    */
    function handleButtonListenerError(id: number, error: IButtonListenerError): void;
    function handleButtonListenerResult(id: number, button: Button): void;
    function handleButtonListenerWarning(id: number, button: Button, warning: IButtonListenerWarning): void;
    class ButtonListener extends BaseListener implements IButtonListener {
        onErrorFunction: (error: IButtonListenerError) => void;
        onResultFunction: (button: Button) => void;
        onWarningFunction: (button: Button, warning: IButtonListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: IButtonListenerError
           @param onResultFunction Function receiving parameters of type: Button
           @param onWarningFunction Function receiving parameters of type: Button, IButtonListenerWarning
        */
        constructor(onErrorFunction: (error: IButtonListenerError) => void, onResultFunction: (button: Button) => void, onWarningFunction: (button: Button, warning: IButtonListenerWarning) => void);
        /**
           No data received

           @param error occurred
           @since ARP1.0
        */
        onError(error: IButtonListenerError): void;
        /**
           Called on button pressed

           @param button pressed
           @since ARP1.0
        */
        onResult(button: Button): void;
        /**
           Data received with warning

           @param button  pressed
           @param warning happened
           @since ARP1.0
        */
        onWarning(button: Button, warning: IButtonListenerWarning): void;
    }
}
