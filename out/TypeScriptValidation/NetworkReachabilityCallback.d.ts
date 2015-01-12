/// <reference path="BaseCallback.d.ts" />
/// <reference path="CommonUtil.d.ts" />
/// <reference path="INetworkReachabilityCallback.d.ts" />
/// <reference path="INetworkReachabilityCallbackError.d.ts" />
/// <reference path="INetworkReachabilityCallbackWarning.d.ts" />
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
       Interface for Managing the Network reachability callback result
       Auto-generated implementation of INetworkReachabilityCallback specification.
    */
    /**
       NetworkReachabilityCallback control dictionary.
    */
    var registeredNetworkReachabilityCallback: Dictionary<INetworkReachabilityCallback>;
    /**
       NetworkReachabilityCallback global callback handlers.
    */
    function handleNetworkReachabilityCallbackError(id: number, error: INetworkReachabilityCallbackError): void;
    function handleNetworkReachabilityCallbackResult(id: number, reachable: boolean): void;
    function handleNetworkReachabilityCallbackWarning(id: number, reachable: boolean, warning: INetworkReachabilityCallbackWarning): void;
    class NetworkReachabilityCallback extends BaseCallback implements INetworkReachabilityCallback {
        onErrorFunction: (error: INetworkReachabilityCallbackError) => void;
        onResultFunction: (reachable: boolean) => void;
        onWarningFunction: (reachable: boolean, warning: INetworkReachabilityCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: INetworkReachabilityCallbackError
           @param onResultFunction Function receiving parameters of type: boolean
           @param onWarningFunction Function receiving parameters of type: boolean, INetworkReachabilityCallbackWarning
        */
        constructor(onErrorFunction: (error: INetworkReachabilityCallbackError) => void, onResultFunction: (reachable: boolean) => void, onWarningFunction: (reachable: boolean, warning: INetworkReachabilityCallbackWarning) => void);
        /**
           No data received - error condition, not authorized .

           @param error Error value
           @since ARP1.0
        */
        onError(error: INetworkReachabilityCallbackError): void;
        /**
           Correct data received.

           @param reachable Indicates if the host is reachable
           @since ARP1.0
        */
        onResult(reachable: boolean): void;
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param reachable Indicates if the host is reachable
           @param warning   Warning value
           @since ARP1.0
        */
        onWarning(reachable: boolean, warning: INetworkReachabilityCallbackWarning): void;
    }
}
