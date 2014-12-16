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

///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCallback.ts"/>
///<reference path="ISecureKVResultCallbackError.ts"/>
///<reference path="ISecureKVResultCallbackWarning.ts"/>
///<reference path="SecureKeyPair.ts"/>

module Adaptive {

     /**
        Definition of ISecureKVResultCallback interface/protocol.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export interface ISecureKVResultCallback extends IBaseCallback {
          /**
             No data received - error condition, not authorized .
             @param error
             @since ARP1.0
          */
          onError(error:ISecureKVResultCallbackError);
          /**
             Correct data received.
             @param keyValues
             @since ARP1.0
          */
          onResult(keyValues:Array<SecureKeyPair>);
          /**
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param keyValues
             @param warning
             @since ARP1.0
          */
          onWarning(keyValues:Array<SecureKeyPair>, warning:ISecureKVResultCallbackWarning);
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
