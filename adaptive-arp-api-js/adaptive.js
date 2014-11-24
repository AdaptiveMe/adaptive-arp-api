/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Adaptive;
(function (Adaptive) {
    var Dictionary = (function () {
        function Dictionary(init) {
            this._keys = new Array();
            this._values = new Array();
            for (var x = 0; x < init.length; x++) {
                this[init[x].key] = init[x].value;
                this._keys.push(init[x].key);
                this._values.push(init[x].value);
            }
        }
        Dictionary.prototype.add = function (key, value) {
            this[key] = value;
            this._keys.push(key);
            this._values.push(value);
        };
        Dictionary.prototype.remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[key];
        };
        Dictionary.prototype.keys = function () {
            return this._keys;
        };
        Dictionary.prototype.values = function () {
            return this._values;
        };
        Dictionary.prototype.containsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.toLookup = function () {
            return this;
        };
        return Dictionary;
    })();
    Adaptive.Dictionary = Dictionary;
    var registeredCallbacks = new Dictionary([]);
    var registeredListeners = new Dictionary([]);
    var registeredCounter = 0;
    /**
     *  Enumerations for IAppContext Type
     **/
    var IAppContextTypeEnum = (function () {
        function IAppContextTypeEnum(value) {
            this.value = value;
        }
        IAppContextTypeEnum.prototype.toString = function () {
            return this.value;
        };
        IAppContextTypeEnum.iOS = new IAppContextTypeEnum("iOS");
        IAppContextTypeEnum.OSX = new IAppContextTypeEnum("OSX");
        IAppContextTypeEnum.Windows = new IAppContextTypeEnum("Windows");
        IAppContextTypeEnum.WindowsPhone = new IAppContextTypeEnum("WindowsPhone");
        IAppContextTypeEnum.Android = new IAppContextTypeEnum("Android");
        IAppContextTypeEnum.Linux = new IAppContextTypeEnum("Linux");
        IAppContextTypeEnum.Blackberry = new IAppContextTypeEnum("Blackberry");
        IAppContextTypeEnum.Tizen = new IAppContextTypeEnum("Tizen");
        IAppContextTypeEnum.FirefoxOS = new IAppContextTypeEnum("FirefoxOS");
        IAppContextTypeEnum.Chromium = new IAppContextTypeEnum("Chromium");
        IAppContextTypeEnum.Unspecified = new IAppContextTypeEnum("Unspecified");
        IAppContextTypeEnum.Unknown = new IAppContextTypeEnum("Unknown");
        return IAppContextTypeEnum;
    })();
    Adaptive.IAppContextTypeEnum = IAppContextTypeEnum;
    /**
     *  Listener IBaseCallback implementation.
     */
    var BaseCallback = (function () {
        function BaseCallback() {
            this.id = ++registeredCounter;
        }
        BaseCallback.prototype.toString = function () {
            return "BaseCallback{" + this.id + "}";
        };
        BaseCallback.prototype.getId = function () {
            return this.id;
        };
        return BaseCallback;
    })();
    Adaptive.BaseCallback = BaseCallback;
    /**
     *  Listener IBaseListener implementation.
     */
    var BaseListener = (function () {
        function BaseListener() {
            this.id = ++registeredCounter;
        }
        BaseListener.prototype.toString = function () {
            return "BaseListener{" + this.id + "}";
        };
        BaseListener.prototype.getId = function () {
            return this.id;
        };
        return BaseListener;
    })();
    Adaptive.BaseListener = BaseListener;
    /**
     *  Enumerations for IAppResource Payload
     **/
    var IAppResourcePayloadEnum = (function () {
        function IAppResourcePayloadEnum(value) {
            this.value = value;
        }
        IAppResourcePayloadEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourcePayloadEnum.Default = new IAppResourcePayloadEnum("Default");
        IAppResourcePayloadEnum.Embedded = new IAppResourcePayloadEnum("Embedded");
        IAppResourcePayloadEnum.Linked = new IAppResourcePayloadEnum("Linked");
        IAppResourcePayloadEnum.Unknown = new IAppResourcePayloadEnum("Unknown");
        return IAppResourcePayloadEnum;
    })();
    Adaptive.IAppResourcePayloadEnum = IAppResourcePayloadEnum;
    /**
     *  Enumerations for IAppResource Format
     **/
    var IAppResourceFormatEnum = (function () {
        function IAppResourceFormatEnum(value) {
            this.value = value;
        }
        IAppResourceFormatEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceFormatEnum.Raw = new IAppResourceFormatEnum("Raw");
        IAppResourceFormatEnum.Compressed = new IAppResourceFormatEnum("Compressed");
        IAppResourceFormatEnum.Encrypted = new IAppResourceFormatEnum("Encrypted");
        IAppResourceFormatEnum.EncryptedCompressed = new IAppResourceFormatEnum("EncryptedCompressed");
        IAppResourceFormatEnum.Unknown = new IAppResourceFormatEnum("Unknown");
        return IAppResourceFormatEnum;
    })();
    Adaptive.IAppResourceFormatEnum = IAppResourceFormatEnum;
    /**
     *  Enumerations for IAppResource Type
     **/
    var IAppResourceTypeEnum = (function () {
        function IAppResourceTypeEnum(value) {
            this.value = value;
        }
        IAppResourceTypeEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceTypeEnum.Html = new IAppResourceTypeEnum("Html");
        IAppResourceTypeEnum.Css = new IAppResourceTypeEnum("Css");
        IAppResourceTypeEnum.JavaScript = new IAppResourceTypeEnum("JavaScript");
        IAppResourceTypeEnum.Image = new IAppResourceTypeEnum("Image");
        IAppResourceTypeEnum.Video = new IAppResourceTypeEnum("Video");
        IAppResourceTypeEnum.Audio = new IAppResourceTypeEnum("Audio");
        IAppResourceTypeEnum.Property = new IAppResourceTypeEnum("Property");
        IAppResourceTypeEnum.Database = new IAppResourceTypeEnum("Database");
        IAppResourceTypeEnum.Other = new IAppResourceTypeEnum("Other");
        IAppResourceTypeEnum.Unknown = new IAppResourceTypeEnum("Unknown");
        return IAppResourceTypeEnum;
    })();
    Adaptive.IAppResourceTypeEnum = IAppResourceTypeEnum;
    /**
     *  Service IDevice implementation.
     */
    var DeviceBridge = (function () {
        function DeviceBridge() {
        }
        DeviceBridge.prototype.addButtonListener = function (listener) {
        };
        DeviceBridge.prototype.getDeviceInfo = function () {
            return null;
        };
        DeviceBridge.prototype.getLocaleCurrent = function () {
            return null;
        };
        DeviceBridge.prototype.removeButtonListener = function (listener) {
        };
        DeviceBridge.prototype.removeButtonListeners = function () {
        };
        return DeviceBridge;
    })();
    Adaptive.DeviceBridge = DeviceBridge;
    /**
     *  Service IMail implementation.
     */
    var MailBridge = (function () {
        function MailBridge() {
        }
        MailBridge.prototype.sendEmail = function (data, callback) {
        };
        return MailBridge;
    })();
    Adaptive.MailBridge = MailBridge;
    /**
     *  Enumerations for ISecureKVResultCallback Error
     **/
    var ISecureKVResultCallbackErrorEnum = (function () {
        function ISecureKVResultCallbackErrorEnum(value) {
            this.value = value;
        }
        ISecureKVResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ISecureKVResultCallbackErrorEnum.NoPermission = new ISecureKVResultCallbackErrorEnum("NoPermission");
        ISecureKVResultCallbackErrorEnum.NoMatchesFound = new ISecureKVResultCallbackErrorEnum("NoMatchesFound");
        ISecureKVResultCallbackErrorEnum.Unknown = new ISecureKVResultCallbackErrorEnum("Unknown");
        return ISecureKVResultCallbackErrorEnum;
    })();
    Adaptive.ISecureKVResultCallbackErrorEnum = ISecureKVResultCallbackErrorEnum;
    /**
     *  Enumerations for ISecureKVResultCallback Warning
     **/
    var ISecureKVResultCallbackWarningEnum = (function () {
        function ISecureKVResultCallbackWarningEnum(value) {
            this.value = value;
        }
        ISecureKVResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ISecureKVResultCallbackWarningEnum.EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
        ISecureKVResultCallbackWarningEnum.Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");
        return ISecureKVResultCallbackWarningEnum;
    })();
    Adaptive.ISecureKVResultCallbackWarningEnum = ISecureKVResultCallbackWarningEnum;
    /**
     *  Listener ISecureKVResultCallback implementation.
     */
    var SecureKVResultCallback = (function () {
        function SecureKVResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        SecureKVResultCallback.prototype.toString = function () {
            return "SecureKVResultCallback{" + this.id + "}";
        };
        SecureKVResultCallback.prototype.getId = function () {
            return this.id;
        };
        SecureKVResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The SecureKVResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        SecureKVResultCallback.prototype.onResult = function (keyValues) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The SecureKVResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(keyValues);
            }
        };
        SecureKVResultCallback.prototype.onWarning = function (keyValues, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The SecureKVResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(keyValues, warning);
            }
        };
        return SecureKVResultCallback;
    })();
    Adaptive.SecureKVResultCallback = SecureKVResultCallback;
    /**
     *  Enumerations for IFileResultCallback Error
     **/
    var IFileResultCallbackErrorEnum = (function () {
        function IFileResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackErrorEnum.FileExists = new IFileResultCallbackErrorEnum("FileExists");
        IFileResultCallbackErrorEnum.InsufficientSpace = new IFileResultCallbackErrorEnum("InsufficientSpace");
        IFileResultCallbackErrorEnum.Unauthorized = new IFileResultCallbackErrorEnum("Unauthorized");
        IFileResultCallbackErrorEnum.Unknown = new IFileResultCallbackErrorEnum("Unknown");
        return IFileResultCallbackErrorEnum;
    })();
    Adaptive.IFileResultCallbackErrorEnum = IFileResultCallbackErrorEnum;
    /**
     *  Enumerations for IFileResultCallback Warning
     **/
    var IFileResultCallbackWarningEnum = (function () {
        function IFileResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackWarningEnum.SourceNotDeleted = new IFileResultCallbackWarningEnum("SourceNotDeleted");
        IFileResultCallbackWarningEnum.RootDirectory = new IFileResultCallbackWarningEnum("RootDirectory");
        IFileResultCallbackWarningEnum.Unknown = new IFileResultCallbackWarningEnum("Unknown");
        return IFileResultCallbackWarningEnum;
    })();
    Adaptive.IFileResultCallbackWarningEnum = IFileResultCallbackWarningEnum;
    /**
     *  Listener IFileResultCallback implementation.
     */
    var FileResultCallback = (function () {
        function FileResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        FileResultCallback.prototype.toString = function () {
            return "FileResultCallback{" + this.id + "}";
        };
        FileResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The FileResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileResultCallback.prototype.onResult = function (storageFile) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The FileResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(storageFile);
            }
        };
        FileResultCallback.prototype.onWarning = function (sourceFile, destinationFile, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The FileResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(sourceFile, destinationFile, warning);
            }
        };
        return FileResultCallback;
    })();
    Adaptive.FileResultCallback = FileResultCallback;
    /**
     *  Enumerations for ILifecycleListener Error
     **/
    var ILifecycleListenerErrorEnum = (function () {
        function ILifecycleListenerErrorEnum(value) {
            this.value = value;
        }
        ILifecycleListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerErrorEnum.Runtime = new ILifecycleListenerErrorEnum("Runtime");
        ILifecycleListenerErrorEnum.Implementation = new ILifecycleListenerErrorEnum("Implementation");
        ILifecycleListenerErrorEnum.Killed = new ILifecycleListenerErrorEnum("Killed");
        ILifecycleListenerErrorEnum.Unknown = new ILifecycleListenerErrorEnum("Unknown");
        return ILifecycleListenerErrorEnum;
    })();
    Adaptive.ILifecycleListenerErrorEnum = ILifecycleListenerErrorEnum;
    /**
     *  Enumerations for ILifecycleListener Warning
     **/
    var ILifecycleListenerWarningEnum = (function () {
        function ILifecycleListenerWarningEnum(value) {
            this.value = value;
        }
        ILifecycleListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerWarningEnum.MemoryLow = new ILifecycleListenerWarningEnum("MemoryLow");
        ILifecycleListenerWarningEnum.BatteryLow = new ILifecycleListenerWarningEnum("BatteryLow");
        ILifecycleListenerWarningEnum.Unknown = new ILifecycleListenerWarningEnum("Unknown");
        return ILifecycleListenerWarningEnum;
    })();
    Adaptive.ILifecycleListenerWarningEnum = ILifecycleListenerWarningEnum;
    /**
     *  Listener ILifecycleListener implementation.
     */
    var LifecycleListener = (function () {
        function LifecycleListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        LifecycleListener.prototype.toString = function () {
            return "LifecycleListener{" + this.id + "}";
        };
        LifecycleListener.prototype.getId = function () {
            return this.id;
        };
        LifecycleListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The LifecycleListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        LifecycleListener.prototype.onResult = function (lifecycle) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The LifecycleListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(lifecycle);
            }
        };
        LifecycleListener.prototype.onWarning = function (lifecycle, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The LifecycleListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(lifecycle, warning);
            }
        };
        return LifecycleListener;
    })();
    Adaptive.LifecycleListener = LifecycleListener;
    /**
     *  Service ISession implementation.
     */
    var SessionBridge = (function () {
        function SessionBridge() {
        }
        SessionBridge.prototype.getAttribute = function (name) {
            return null;
        };
        SessionBridge.prototype.getAttributes = function () {
            return null;
        };
        SessionBridge.prototype.getCookies = function () {
            return null;
        };
        SessionBridge.prototype.listAttributeNames = function () {
            return null;
        };
        SessionBridge.prototype.removeAttribute = function (name) {
        };
        SessionBridge.prototype.removeAttributes = function () {
        };
        SessionBridge.prototype.removeCookie = function (cookie) {
        };
        SessionBridge.prototype.removeCookies = function (cookies) {
        };
        SessionBridge.prototype.setAttribute = function (name, value) {
        };
        SessionBridge.prototype.setCookie = function (cookie) {
        };
        SessionBridge.prototype.setCookies = function (cookies) {
        };
        return SessionBridge;
    })();
    Adaptive.SessionBridge = SessionBridge;
    /**
     *  Enumerations for INetworkReachabilityCallback Error
     **/
    var INetworkReachabilityCallbackErrorEnum = (function () {
        function INetworkReachabilityCallbackErrorEnum(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackErrorEnum.Forbidden = new INetworkReachabilityCallbackErrorEnum("Forbidden");
        INetworkReachabilityCallbackErrorEnum.NotFound = new INetworkReachabilityCallbackErrorEnum("NotFound");
        INetworkReachabilityCallbackErrorEnum.MethodNotAllowed = new INetworkReachabilityCallbackErrorEnum("MethodNotAllowed");
        INetworkReachabilityCallbackErrorEnum.NotAllowed = new INetworkReachabilityCallbackErrorEnum("NotAllowed");
        INetworkReachabilityCallbackErrorEnum.NotAuthenticated = new INetworkReachabilityCallbackErrorEnum("NotAuthenticated");
        INetworkReachabilityCallbackErrorEnum.TimeOut = new INetworkReachabilityCallbackErrorEnum("TimeOut");
        INetworkReachabilityCallbackErrorEnum.NoResponse = new INetworkReachabilityCallbackErrorEnum("NoResponse");
        INetworkReachabilityCallbackErrorEnum.Unreachable = new INetworkReachabilityCallbackErrorEnum("Unreachable");
        INetworkReachabilityCallbackErrorEnum.Wrong_Params = new INetworkReachabilityCallbackErrorEnum("Wrong_Params");
        INetworkReachabilityCallbackErrorEnum.MalformedUrl = new INetworkReachabilityCallbackErrorEnum("MalformedUrl");
        INetworkReachabilityCallbackErrorEnum.DomainUnresolvable = new INetworkReachabilityCallbackErrorEnum("DomainUnresolvable");
        INetworkReachabilityCallbackErrorEnum.Unknown = new INetworkReachabilityCallbackErrorEnum("Unknown");
        return INetworkReachabilityCallbackErrorEnum;
    })();
    Adaptive.INetworkReachabilityCallbackErrorEnum = INetworkReachabilityCallbackErrorEnum;
    /**
     *  Enumerations for INetworkReachabilityCallback Warning
     **/
    var INetworkReachabilityCallbackWarningEnum = (function () {
        function INetworkReachabilityCallbackWarningEnum(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackWarningEnum.IncorrectScheme = new INetworkReachabilityCallbackWarningEnum("IncorrectScheme");
        INetworkReachabilityCallbackWarningEnum.NotSecure = new INetworkReachabilityCallbackWarningEnum("NotSecure");
        INetworkReachabilityCallbackWarningEnum.NotTrusted = new INetworkReachabilityCallbackWarningEnum("NotTrusted");
        INetworkReachabilityCallbackWarningEnum.Redirected = new INetworkReachabilityCallbackWarningEnum("Redirected");
        INetworkReachabilityCallbackWarningEnum.NotRegisteredService = new INetworkReachabilityCallbackWarningEnum("NotRegisteredService");
        INetworkReachabilityCallbackWarningEnum.Unknown = new INetworkReachabilityCallbackWarningEnum("Unknown");
        return INetworkReachabilityCallbackWarningEnum;
    })();
    Adaptive.INetworkReachabilityCallbackWarningEnum = INetworkReachabilityCallbackWarningEnum;
    /**
     *  Listener INetworkReachabilityCallback implementation.
     */
    var NetworkReachabilityCallback = (function () {
        function NetworkReachabilityCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        NetworkReachabilityCallback.prototype.toString = function () {
            return "NetworkReachabilityCallback{" + this.id + "}";
        };
        NetworkReachabilityCallback.prototype.getId = function () {
            return this.id;
        };
        NetworkReachabilityCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The NetworkReachabilityCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        NetworkReachabilityCallback.prototype.onResult = function (result) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The NetworkReachabilityCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(result);
            }
        };
        NetworkReachabilityCallback.prototype.onWarning = function (result, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The NetworkReachabilityCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(result, warning);
            }
        };
        return NetworkReachabilityCallback;
    })();
    Adaptive.NetworkReachabilityCallback = NetworkReachabilityCallback;
    /**
     *  Enumerations for IAccelerationListener Error
     **/
    var IAccelerationListenerErrorEnum = (function () {
        function IAccelerationListenerErrorEnum(value) {
            this.value = value;
        }
        IAccelerationListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerErrorEnum.Unauthorized = new IAccelerationListenerErrorEnum("Unauthorized");
        IAccelerationListenerErrorEnum.Unavailable = new IAccelerationListenerErrorEnum("Unavailable");
        IAccelerationListenerErrorEnum.Unknown = new IAccelerationListenerErrorEnum("Unknown");
        return IAccelerationListenerErrorEnum;
    })();
    Adaptive.IAccelerationListenerErrorEnum = IAccelerationListenerErrorEnum;
    /**
     *  Enumerations for IAccelerationListener Warning
     **/
    var IAccelerationListenerWarningEnum = (function () {
        function IAccelerationListenerWarningEnum(value) {
            this.value = value;
        }
        IAccelerationListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerWarningEnum.NeedsCalibration = new IAccelerationListenerWarningEnum("NeedsCalibration");
        IAccelerationListenerWarningEnum.Stale = new IAccelerationListenerWarningEnum("Stale");
        IAccelerationListenerWarningEnum.Unknown = new IAccelerationListenerWarningEnum("Unknown");
        return IAccelerationListenerWarningEnum;
    })();
    Adaptive.IAccelerationListenerWarningEnum = IAccelerationListenerWarningEnum;
    /**
     *  Listener IAccelerationListener implementation.
     */
    var AccelerationListener = (function () {
        function AccelerationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        AccelerationListener.prototype.toString = function () {
            return "AccelerationListener{" + this.id + "}";
        };
        AccelerationListener.prototype.getId = function () {
            return this.id;
        };
        AccelerationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The AccelerationListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        AccelerationListener.prototype.onResult = function (acceleration) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The AccelerationListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(acceleration);
            }
        };
        AccelerationListener.prototype.onWarning = function (acceleration, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The AccelerationListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(acceleration, warning);
            }
        };
        return AccelerationListener;
    })();
    Adaptive.AccelerationListener = AccelerationListener;
    /**
     *  Service IDatabase implementation.
     */
    var DatabaseBridge = (function () {
        function DatabaseBridge() {
        }
        DatabaseBridge.prototype.createDatabase = function (database, callback) {
        };
        DatabaseBridge.prototype.createTable = function (database, table, callback) {
        };
        DatabaseBridge.prototype.deleteDatabase = function (database, callback) {
        };
        DatabaseBridge.prototype.deleteTable = function (database, table, callback) {
        };
        DatabaseBridge.prototype.executeSqlQuery = function (database, query, replacements, callback) {
        };
        DatabaseBridge.prototype.executeSqlStatement = function (database, statement, replacements, callback) {
        };
        DatabaseBridge.prototype.executeSqlTransactions = function (database, statements, rollbackFlag, callback) {
        };
        DatabaseBridge.prototype.existsDatabase = function (database) {
            return null;
        };
        DatabaseBridge.prototype.existsTable = function (database, table) {
            return null;
        };
        return DatabaseBridge;
    })();
    Adaptive.DatabaseBridge = DatabaseBridge;
    /**
     *  Enumerations for IButtonListener Error
     **/
    var IButtonListenerErrorEnum = (function () {
        function IButtonListenerErrorEnum(value) {
            this.value = value;
        }
        IButtonListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerErrorEnum.Not_Present = new IButtonListenerErrorEnum("Not_Present");
        IButtonListenerErrorEnum.Unknown = new IButtonListenerErrorEnum("Unknown");
        return IButtonListenerErrorEnum;
    })();
    Adaptive.IButtonListenerErrorEnum = IButtonListenerErrorEnum;
    /**
     *  Enumerations for IButtonListener Warning
     **/
    var IButtonListenerWarningEnum = (function () {
        function IButtonListenerWarningEnum(value) {
            this.value = value;
        }
        IButtonListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerWarningEnum.Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
        IButtonListenerWarningEnum.Unknown = new IButtonListenerWarningEnum("Unknown");
        return IButtonListenerWarningEnum;
    })();
    Adaptive.IButtonListenerWarningEnum = IButtonListenerWarningEnum;
    /**
     *  Listener IButtonListener implementation.
     */
    var ButtonListener = (function () {
        function ButtonListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        ButtonListener.prototype.toString = function () {
            return "ButtonListener{" + this.id + "}";
        };
        ButtonListener.prototype.getId = function () {
            return this.id;
        };
        ButtonListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The ButtonListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ButtonListener.prototype.onResult = function (button) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The ButtonListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(button);
            }
        };
        ButtonListener.prototype.onWarning = function (button, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The ButtonListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(button, warning);
            }
        };
        return ButtonListener;
    })();
    Adaptive.ButtonListener = ButtonListener;
    /**
     *  Enumerations for IContactResultCallback Error
     **/
    var IContactResultCallbackErrorEnum = (function () {
        function IContactResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IContactResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackErrorEnum.NoPermission = new IContactResultCallbackErrorEnum("NoPermission");
        IContactResultCallbackErrorEnum.Wrong_Params = new IContactResultCallbackErrorEnum("Wrong_Params");
        IContactResultCallbackErrorEnum.Unknown = new IContactResultCallbackErrorEnum("Unknown");
        return IContactResultCallbackErrorEnum;
    })();
    Adaptive.IContactResultCallbackErrorEnum = IContactResultCallbackErrorEnum;
    /**
     *  Enumerations for IContactResultCallback Warning
     **/
    var IContactResultCallbackWarningEnum = (function () {
        function IContactResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IContactResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackWarningEnum.LimitExceeded = new IContactResultCallbackWarningEnum("LimitExceeded");
        IContactResultCallbackWarningEnum.No_Matches = new IContactResultCallbackWarningEnum("No_Matches");
        IContactResultCallbackWarningEnum.Unknown = new IContactResultCallbackWarningEnum("Unknown");
        return IContactResultCallbackWarningEnum;
    })();
    Adaptive.IContactResultCallbackWarningEnum = IContactResultCallbackWarningEnum;
    /**
     *  Listener IContactResultCallback implementation.
     */
    var ContactResultCallback = (function () {
        function ContactResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        ContactResultCallback.prototype.toString = function () {
            return "ContactResultCallback{" + this.id + "}";
        };
        ContactResultCallback.prototype.getId = function () {
            return this.id;
        };
        ContactResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The ContactResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ContactResultCallback.prototype.onResult = function (contacts) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The ContactResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(contacts);
            }
        };
        ContactResultCallback.prototype.onWarning = function (contacts, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The ContactResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(contacts, warning);
            }
        };
        return ContactResultCallback;
    })();
    Adaptive.ContactResultCallback = ContactResultCallback;
    /**
     *  Service IBrowser implementation.
     */
    var BrowserBridge = (function () {
        function BrowserBridge() {
        }
        BrowserBridge.prototype.openBrowser = function (url, title, buttonText) {
            return null;
        };
        return BrowserBridge;
    })();
    Adaptive.BrowserBridge = BrowserBridge;
    /**
     *  Service INetworkReachability implementation.
     */
    var NetworkReachabilityBridge = (function () {
        function NetworkReachabilityBridge() {
        }
        NetworkReachabilityBridge.prototype.isNetworkReachable = function (host, callback) {
        };
        NetworkReachabilityBridge.prototype.isNetworkServiceReachable = function (url, callback) {
        };
        return NetworkReachabilityBridge;
    })();
    Adaptive.NetworkReachabilityBridge = NetworkReachabilityBridge;
    /**
     *  Enumerations for IGeolocationListener Error
     **/
    var IGeolocationListenerErrorEnum = (function () {
        function IGeolocationListenerErrorEnum(value) {
            this.value = value;
        }
        IGeolocationListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerErrorEnum.Disabled = new IGeolocationListenerErrorEnum("Disabled");
        IGeolocationListenerErrorEnum.RestrictedAccess = new IGeolocationListenerErrorEnum("RestrictedAccess");
        IGeolocationListenerErrorEnum.DeniedAccess = new IGeolocationListenerErrorEnum("DeniedAccess");
        IGeolocationListenerErrorEnum.StatusNotDetermined = new IGeolocationListenerErrorEnum("StatusNotDetermined");
        IGeolocationListenerErrorEnum.Unknown = new IGeolocationListenerErrorEnum("Unknown");
        return IGeolocationListenerErrorEnum;
    })();
    Adaptive.IGeolocationListenerErrorEnum = IGeolocationListenerErrorEnum;
    /**
     *  Enumerations for IGeolocationListener Warning
     **/
    var IGeolocationListenerWarningEnum = (function () {
        function IGeolocationListenerWarningEnum(value) {
            this.value = value;
        }
        IGeolocationListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerWarningEnum.HighDoP = new IGeolocationListenerWarningEnum("HighDoP");
        IGeolocationListenerWarningEnum.StaleData = new IGeolocationListenerWarningEnum("StaleData");
        IGeolocationListenerWarningEnum.Unknown = new IGeolocationListenerWarningEnum("Unknown");
        return IGeolocationListenerWarningEnum;
    })();
    Adaptive.IGeolocationListenerWarningEnum = IGeolocationListenerWarningEnum;
    /**
     *  Listener IGeolocationListener implementation.
     */
    var GeolocationListener = (function () {
        function GeolocationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        GeolocationListener.prototype.toString = function () {
            return "GeolocationListener{" + this.id + "}";
        };
        GeolocationListener.prototype.getId = function () {
            return this.id;
        };
        GeolocationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The GeolocationListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        GeolocationListener.prototype.onResult = function (geolocation) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The GeolocationListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(geolocation);
            }
        };
        GeolocationListener.prototype.onWarning = function (geolocation, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The GeolocationListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(geolocation, warning);
            }
        };
        return GeolocationListener;
    })();
    Adaptive.GeolocationListener = GeolocationListener;
    /**
     *  Enumerations for IContactPhotoResultCallback Error
     **/
    var IContactPhotoResultCallbackErrorEnum = (function () {
        function IContactPhotoResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackErrorEnum.NoPermission = new IContactPhotoResultCallbackErrorEnum("NoPermission");
        IContactPhotoResultCallbackErrorEnum.Wrong_Params = new IContactPhotoResultCallbackErrorEnum("Wrong_Params");
        IContactPhotoResultCallbackErrorEnum.No_Photo = new IContactPhotoResultCallbackErrorEnum("No_Photo");
        IContactPhotoResultCallbackErrorEnum.Unknown = new IContactPhotoResultCallbackErrorEnum("Unknown");
        return IContactPhotoResultCallbackErrorEnum;
    })();
    Adaptive.IContactPhotoResultCallbackErrorEnum = IContactPhotoResultCallbackErrorEnum;
    /**
     *  Enumerations for IContactPhotoResultCallback Warning
     **/
    var IContactPhotoResultCallbackWarningEnum = (function () {
        function IContactPhotoResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackWarningEnum.LimitExceeded = new IContactPhotoResultCallbackWarningEnum("LimitExceeded");
        IContactPhotoResultCallbackWarningEnum.No_Matches = new IContactPhotoResultCallbackWarningEnum("No_Matches");
        IContactPhotoResultCallbackWarningEnum.Unknown = new IContactPhotoResultCallbackWarningEnum("Unknown");
        return IContactPhotoResultCallbackWarningEnum;
    })();
    Adaptive.IContactPhotoResultCallbackWarningEnum = IContactPhotoResultCallbackWarningEnum;
    /**
     *  Listener IContactPhotoResultCallback implementation.
     */
    var ContactPhotoResultCallback = (function () {
        function ContactPhotoResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        ContactPhotoResultCallback.prototype.toString = function () {
            return "ContactPhotoResultCallback{" + this.id + "}";
        };
        ContactPhotoResultCallback.prototype.getId = function () {
            return this.id;
        };
        ContactPhotoResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The ContactPhotoResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ContactPhotoResultCallback.prototype.onResult = function (contactPhoto) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The ContactPhotoResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(contactPhoto);
            }
        };
        ContactPhotoResultCallback.prototype.onWarning = function (contactPhoto, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The ContactPhotoResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(contactPhoto, warning);
            }
        };
        return ContactPhotoResultCallback;
    })();
    Adaptive.ContactPhotoResultCallback = ContactPhotoResultCallback;
    /**
     *  Service ILifecycle implementation.
     */
    var LifecycleBridge = (function () {
        function LifecycleBridge() {
        }
        LifecycleBridge.prototype.addLifecycleListener = function (listener) {
        };
        LifecycleBridge.prototype.isBackground = function () {
            return null;
        };
        LifecycleBridge.prototype.removeLifecycleListener = function (listener) {
        };
        LifecycleBridge.prototype.removeLifecycleListeners = function () {
        };
        return LifecycleBridge;
    })();
    Adaptive.LifecycleBridge = LifecycleBridge;
    /**
     *  Service IFileSystem implementation.
     */
    var FileSystemBridge = (function () {
        function FileSystemBridge() {
        }
        FileSystemBridge.prototype.create = function (name, callback) {
        };
        FileSystemBridge.prototype.createWithPath = function (path, name, callback) {
        };
        FileSystemBridge.prototype.createWithPathString = function (path, name, callback) {
        };
        FileSystemBridge.prototype.getApplicationCacheFolder = function () {
            return null;
        };
        FileSystemBridge.prototype.getApplicationDocumentsFolder = function () {
            return null;
        };
        FileSystemBridge.prototype.getApplicationFolder = function () {
            return null;
        };
        FileSystemBridge.prototype.getPathForFile = function (file) {
            return null;
        };
        FileSystemBridge.prototype.getPathForPath = function (path) {
            return null;
        };
        FileSystemBridge.prototype.getSeparator = function () {
            return null;
        };
        FileSystemBridge.prototype.isSameFile = function (source, dest) {
            return null;
        };
        FileSystemBridge.prototype.isSamePath = function (source, dest) {
            return null;
        };
        FileSystemBridge.prototype.toPath = function (path) {
            return null;
        };
        return FileSystemBridge;
    })();
    Adaptive.FileSystemBridge = FileSystemBridge;
    /**
     *  Service IOS implementation.
     */
    var OSBridge = (function () {
        function OSBridge() {
        }
        OSBridge.prototype.getOSInfo = function () {
            return null;
        };
        return OSBridge;
    })();
    Adaptive.OSBridge = OSBridge;
    /**
     *  Enumerations for IContact FieldGroup
     **/
    var IContactFieldGroupEnum = (function () {
        function IContactFieldGroupEnum(value) {
            this.value = value;
        }
        IContactFieldGroupEnum.prototype.toString = function () {
            return this.value;
        };
        IContactFieldGroupEnum.PERSONAL_INFO = new IContactFieldGroupEnum("PERSONAL_INFO");
        IContactFieldGroupEnum.PROFESSIONAL_INFO = new IContactFieldGroupEnum("PROFESSIONAL_INFO");
        IContactFieldGroupEnum.ADDRESSES = new IContactFieldGroupEnum("ADDRESSES");
        IContactFieldGroupEnum.PHONES = new IContactFieldGroupEnum("PHONES");
        IContactFieldGroupEnum.EMAILS = new IContactFieldGroupEnum("EMAILS");
        IContactFieldGroupEnum.WEBSITES = new IContactFieldGroupEnum("WEBSITES");
        IContactFieldGroupEnum.SOCIALS = new IContactFieldGroupEnum("SOCIALS");
        IContactFieldGroupEnum.TAGS = new IContactFieldGroupEnum("TAGS");
        IContactFieldGroupEnum.Unknown = new IContactFieldGroupEnum("Unknown");
        return IContactFieldGroupEnum;
    })();
    Adaptive.IContactFieldGroupEnum = IContactFieldGroupEnum;
    /**
     *  Enumerations for IContact Filter
     **/
    var IContactFilterEnum = (function () {
        function IContactFilterEnum(value) {
            this.value = value;
        }
        IContactFilterEnum.prototype.toString = function () {
            return this.value;
        };
        IContactFilterEnum.HAS_PHONE = new IContactFilterEnum("HAS_PHONE");
        IContactFilterEnum.HAS_EMAIL = new IContactFilterEnum("HAS_EMAIL");
        IContactFilterEnum.HAS_ADDRESS = new IContactFilterEnum("HAS_ADDRESS");
        IContactFilterEnum.Unknown = new IContactFilterEnum("Unknown");
        return IContactFilterEnum;
    })();
    Adaptive.IContactFilterEnum = IContactFilterEnum;
    /**
     *  Service IContact implementation.
     */
    var ContactBridge = (function () {
        function ContactBridge() {
        }
        ContactBridge.prototype.getContact = function (contact, callback) {
        };
        ContactBridge.prototype.getContactPhoto = function (contact, callback) {
        };
        ContactBridge.prototype.getContacts = function (callback) {
        };
        ContactBridge.prototype.getContactsForFields = function (callback, fields) {
        };
        ContactBridge.prototype.getContactsWithFilter = function (callback, fields, filter) {
        };
        ContactBridge.prototype.searchContacts = function (term, callback) {
        };
        ContactBridge.prototype.searchContactsWithFilter = function (term, callback, filter) {
        };
        ContactBridge.prototype.setContactPhoto = function (contact, pngImage) {
            return null;
        };
        return ContactBridge;
    })();
    Adaptive.ContactBridge = ContactBridge;
    /**
     *  Enumerations for ILogging LogLevel
     **/
    var ILoggingLogLevelEnum = (function () {
        function ILoggingLogLevelEnum(value) {
            this.value = value;
        }
        ILoggingLogLevelEnum.prototype.toString = function () {
            return this.value;
        };
        ILoggingLogLevelEnum.DEBUG = new ILoggingLogLevelEnum("DEBUG");
        ILoggingLogLevelEnum.WARN = new ILoggingLogLevelEnum("WARN");
        ILoggingLogLevelEnum.ERROR = new ILoggingLogLevelEnum("ERROR");
        ILoggingLogLevelEnum.INFO = new ILoggingLogLevelEnum("INFO");
        ILoggingLogLevelEnum.Unknown = new ILoggingLogLevelEnum("Unknown");
        return ILoggingLogLevelEnum;
    })();
    Adaptive.ILoggingLogLevelEnum = ILoggingLogLevelEnum;
    /**
     *  Service IRuntime implementation.
     */
    var RuntimeBridge = (function () {
        function RuntimeBridge() {
        }
        RuntimeBridge.prototype.dismissApplication = function () {
        };
        RuntimeBridge.prototype.dismissSplashScreen = function () {
            return null;
        };
        return RuntimeBridge;
    })();
    Adaptive.RuntimeBridge = RuntimeBridge;
    /**
     *  Enumerations for IMessagingCallback Error
     **/
    var IMessagingCallbackErrorEnum = (function () {
        function IMessagingCallbackErrorEnum(value) {
            this.value = value;
        }
        IMessagingCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackErrorEnum.SIMNotPresent = new IMessagingCallbackErrorEnum("SIMNotPresent");
        IMessagingCallbackErrorEnum.EmailAccountNotFound = new IMessagingCallbackErrorEnum("EmailAccountNotFound");
        IMessagingCallbackErrorEnum.NotSent = new IMessagingCallbackErrorEnum("NotSent");
        IMessagingCallbackErrorEnum.WrongParams = new IMessagingCallbackErrorEnum("WrongParams");
        IMessagingCallbackErrorEnum.NotSupported = new IMessagingCallbackErrorEnum("NotSupported");
        IMessagingCallbackErrorEnum.Unknown = new IMessagingCallbackErrorEnum("Unknown");
        return IMessagingCallbackErrorEnum;
    })();
    Adaptive.IMessagingCallbackErrorEnum = IMessagingCallbackErrorEnum;
    /**
     *  Enumerations for IMessagingCallback Warning
     **/
    var IMessagingCallbackWarningEnum = (function () {
        function IMessagingCallbackWarningEnum(value) {
            this.value = value;
        }
        IMessagingCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackWarningEnum.UnableToSentAll = new IMessagingCallbackWarningEnum("UnableToSentAll");
        IMessagingCallbackWarningEnum.UnableToFetchAttachment = new IMessagingCallbackWarningEnum("UnableToFetchAttachment");
        IMessagingCallbackWarningEnum.Unknown = new IMessagingCallbackWarningEnum("Unknown");
        return IMessagingCallbackWarningEnum;
    })();
    Adaptive.IMessagingCallbackWarningEnum = IMessagingCallbackWarningEnum;
    /**
     *  Listener IMessagingCallback implementation.
     */
    var MessagingCallback = (function () {
        function MessagingCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        MessagingCallback.prototype.toString = function () {
            return "MessagingCallback{" + this.id + "}";
        };
        MessagingCallback.prototype.getId = function () {
            return this.id;
        };
        MessagingCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The MessagingCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        MessagingCallback.prototype.onResult = function (success) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The MessagingCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(success);
            }
        };
        MessagingCallback.prototype.onWarning = function (success, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The MessagingCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(success, warning);
            }
        };
        return MessagingCallback;
    })();
    Adaptive.MessagingCallback = MessagingCallback;
    /**
     *  Enumerations for IDatabaseResultCallback Error
     **/
    var IDatabaseResultCallbackErrorEnum = (function () {
        function IDatabaseResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IDatabaseResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackErrorEnum.NoSpace = new IDatabaseResultCallbackErrorEnum("NoSpace");
        IDatabaseResultCallbackErrorEnum.SqlException = new IDatabaseResultCallbackErrorEnum("SqlException");
        IDatabaseResultCallbackErrorEnum.NotDeleted = new IDatabaseResultCallbackErrorEnum("NotDeleted");
        IDatabaseResultCallbackErrorEnum.Unknown = new IDatabaseResultCallbackErrorEnum("Unknown");
        return IDatabaseResultCallbackErrorEnum;
    })();
    Adaptive.IDatabaseResultCallbackErrorEnum = IDatabaseResultCallbackErrorEnum;
    /**
     *  Enumerations for IDatabaseResultCallback Warning
     **/
    var IDatabaseResultCallbackWarningEnum = (function () {
        function IDatabaseResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IDatabaseResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackWarningEnum.DatabaseExists = new IDatabaseResultCallbackWarningEnum("DatabaseExists");
        IDatabaseResultCallbackWarningEnum.IsOpen = new IDatabaseResultCallbackWarningEnum("IsOpen");
        IDatabaseResultCallbackWarningEnum.Unknown = new IDatabaseResultCallbackWarningEnum("Unknown");
        return IDatabaseResultCallbackWarningEnum;
    })();
    Adaptive.IDatabaseResultCallbackWarningEnum = IDatabaseResultCallbackWarningEnum;
    /**
     *  Listener IDatabaseResultCallback implementation.
     */
    var DatabaseResultCallback = (function () {
        function DatabaseResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        DatabaseResultCallback.prototype.toString = function () {
            return "DatabaseResultCallback{" + this.id + "}";
        };
        DatabaseResultCallback.prototype.getId = function () {
            return this.id;
        };
        DatabaseResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The DatabaseResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        DatabaseResultCallback.prototype.onResult = function (database) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The DatabaseResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(database);
            }
        };
        DatabaseResultCallback.prototype.onWarning = function (database, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The DatabaseResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(database, warning);
            }
        };
        return DatabaseResultCallback;
    })();
    Adaptive.DatabaseResultCallback = DatabaseResultCallback;
    /**
     *  Service ISecurity implementation.
     */
    var SecurityBridge = (function () {
        function SecurityBridge() {
        }
        SecurityBridge.prototype.deleteSecureKeyValuePairs = function (keys, publicAccessName, callback) {
        };
        SecurityBridge.prototype.getSecureKeyValuePairs = function (keys, publicAccessName, callback) {
        };
        SecurityBridge.prototype.isDeviceModified = function () {
            return null;
        };
        SecurityBridge.prototype.setSecureKeyValuePairs = function (keyValues, publicAccessName, callback) {
        };
        return SecurityBridge;
    })();
    Adaptive.SecurityBridge = SecurityBridge;
    /**
     *  Enumerations for ICapabilities Button
     **/
    var ICapabilitiesButtonEnum = (function () {
        function ICapabilitiesButtonEnum(value) {
            this.value = value;
        }
        ICapabilitiesButtonEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesButtonEnum.HomeButton = new ICapabilitiesButtonEnum("HomeButton");
        ICapabilitiesButtonEnum.BackButton = new ICapabilitiesButtonEnum("BackButton");
        ICapabilitiesButtonEnum.OptionButton = new ICapabilitiesButtonEnum("OptionButton");
        ICapabilitiesButtonEnum.Unknown = new ICapabilitiesButtonEnum("Unknown");
        return ICapabilitiesButtonEnum;
    })();
    Adaptive.ICapabilitiesButtonEnum = ICapabilitiesButtonEnum;
    /**
     *  Enumerations for ICapabilities Communication
     **/
    var ICapabilitiesCommunicationEnum = (function () {
        function ICapabilitiesCommunicationEnum(value) {
            this.value = value;
        }
        ICapabilitiesCommunicationEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesCommunicationEnum.Calendar = new ICapabilitiesCommunicationEnum("Calendar");
        ICapabilitiesCommunicationEnum.Contact = new ICapabilitiesCommunicationEnum("Contact");
        ICapabilitiesCommunicationEnum.Mail = new ICapabilitiesCommunicationEnum("Mail");
        ICapabilitiesCommunicationEnum.Messaging = new ICapabilitiesCommunicationEnum("Messaging");
        ICapabilitiesCommunicationEnum.Telephony = new ICapabilitiesCommunicationEnum("Telephony");
        ICapabilitiesCommunicationEnum.Unknown = new ICapabilitiesCommunicationEnum("Unknown");
        return ICapabilitiesCommunicationEnum;
    })();
    Adaptive.ICapabilitiesCommunicationEnum = ICapabilitiesCommunicationEnum;
    /**
     *  Enumerations for ICapabilities Data
     **/
    var ICapabilitiesDataEnum = (function () {
        function ICapabilitiesDataEnum(value) {
            this.value = value;
        }
        ICapabilitiesDataEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesDataEnum.Database = new ICapabilitiesDataEnum("Database");
        ICapabilitiesDataEnum.File = new ICapabilitiesDataEnum("File");
        ICapabilitiesDataEnum.Cloud = new ICapabilitiesDataEnum("Cloud");
        ICapabilitiesDataEnum.Unknown = new ICapabilitiesDataEnum("Unknown");
        return ICapabilitiesDataEnum;
    })();
    Adaptive.ICapabilitiesDataEnum = ICapabilitiesDataEnum;
    /**
     *  Enumerations for ICapabilities Media
     **/
    var ICapabilitiesMediaEnum = (function () {
        function ICapabilitiesMediaEnum(value) {
            this.value = value;
        }
        ICapabilitiesMediaEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesMediaEnum.Audio_Playback = new ICapabilitiesMediaEnum("Audio_Playback");
        ICapabilitiesMediaEnum.Audio_Recording = new ICapabilitiesMediaEnum("Audio_Recording");
        ICapabilitiesMediaEnum.Camera = new ICapabilitiesMediaEnum("Camera");
        ICapabilitiesMediaEnum.Video_Playback = new ICapabilitiesMediaEnum("Video_Playback");
        ICapabilitiesMediaEnum.Video_Recording = new ICapabilitiesMediaEnum("Video_Recording");
        ICapabilitiesMediaEnum.Unknown = new ICapabilitiesMediaEnum("Unknown");
        return ICapabilitiesMediaEnum;
    })();
    Adaptive.ICapabilitiesMediaEnum = ICapabilitiesMediaEnum;
    /**
     *  Enumerations for ICapabilities Net
     **/
    var ICapabilitiesNetEnum = (function () {
        function ICapabilitiesNetEnum(value) {
            this.value = value;
        }
        ICapabilitiesNetEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNetEnum.GSM = new ICapabilitiesNetEnum("GSM");
        ICapabilitiesNetEnum.GPRS = new ICapabilitiesNetEnum("GPRS");
        ICapabilitiesNetEnum.HSDPA = new ICapabilitiesNetEnum("HSDPA");
        ICapabilitiesNetEnum.LTE = new ICapabilitiesNetEnum("LTE");
        ICapabilitiesNetEnum.WIFI = new ICapabilitiesNetEnum("WIFI");
        ICapabilitiesNetEnum.Ethernet = new ICapabilitiesNetEnum("Ethernet");
        ICapabilitiesNetEnum.Unknown = new ICapabilitiesNetEnum("Unknown");
        return ICapabilitiesNetEnum;
    })();
    Adaptive.ICapabilitiesNetEnum = ICapabilitiesNetEnum;
    /**
     *  Enumerations for ICapabilities Notification
     **/
    var ICapabilitiesNotificationEnum = (function () {
        function ICapabilitiesNotificationEnum(value) {
            this.value = value;
        }
        ICapabilitiesNotificationEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNotificationEnum.Alarm = new ICapabilitiesNotificationEnum("Alarm");
        ICapabilitiesNotificationEnum.LocalNotification = new ICapabilitiesNotificationEnum("LocalNotification");
        ICapabilitiesNotificationEnum.RemoteNotification = new ICapabilitiesNotificationEnum("RemoteNotification");
        ICapabilitiesNotificationEnum.Vibration = new ICapabilitiesNotificationEnum("Vibration");
        ICapabilitiesNotificationEnum.Unknown = new ICapabilitiesNotificationEnum("Unknown");
        return ICapabilitiesNotificationEnum;
    })();
    Adaptive.ICapabilitiesNotificationEnum = ICapabilitiesNotificationEnum;
    /**
     *  Enumerations for ICapabilities Sensor
     **/
    var ICapabilitiesSensorEnum = (function () {
        function ICapabilitiesSensorEnum(value) {
            this.value = value;
        }
        ICapabilitiesSensorEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesSensorEnum.Accelerometer = new ICapabilitiesSensorEnum("Accelerometer");
        ICapabilitiesSensorEnum.AmbientLight = new ICapabilitiesSensorEnum("AmbientLight");
        ICapabilitiesSensorEnum.Barometer = new ICapabilitiesSensorEnum("Barometer");
        ICapabilitiesSensorEnum.Geolocation = new ICapabilitiesSensorEnum("Geolocation");
        ICapabilitiesSensorEnum.Gyroscope = new ICapabilitiesSensorEnum("Gyroscope");
        ICapabilitiesSensorEnum.Magnetometer = new ICapabilitiesSensorEnum("Magnetometer");
        ICapabilitiesSensorEnum.Proximity = new ICapabilitiesSensorEnum("Proximity");
        ICapabilitiesSensorEnum.Unknown = new ICapabilitiesSensorEnum("Unknown");
        return ICapabilitiesSensorEnum;
    })();
    Adaptive.ICapabilitiesSensorEnum = ICapabilitiesSensorEnum;
    /**
     *  Service ICapabilities implementation.
     */
    var CapabilitiesBridge = (function () {
        function CapabilitiesBridge() {
        }
        CapabilitiesBridge.prototype.hasButtonSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasCommunicationSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasDataSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasMediaSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasNetSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasNotificationSupport = function (type) {
            return null;
        };
        CapabilitiesBridge.prototype.hasSensorSupport = function (type) {
            return null;
        };
        return CapabilitiesBridge;
    })();
    Adaptive.CapabilitiesBridge = CapabilitiesBridge;
    /**
     *  Service IGeolocation implementation.
     */
    var GeolocationBridge = (function () {
        function GeolocationBridge() {
        }
        GeolocationBridge.prototype.addGeolocationListener = function (listener) {
        };
        GeolocationBridge.prototype.removeGeolocationListener = function (listener) {
        };
        GeolocationBridge.prototype.removeGeolocationListeners = function () {
        };
        return GeolocationBridge;
    })();
    Adaptive.GeolocationBridge = GeolocationBridge;
    /**
     *  Enumerations for ITelephony Status
     **/
    var ITelephonyStatusEnum = (function () {
        function ITelephonyStatusEnum(value) {
            this.value = value;
        }
        ITelephonyStatusEnum.prototype.toString = function () {
            return this.value;
        };
        ITelephonyStatusEnum.Dialing = new ITelephonyStatusEnum("Dialing");
        ITelephonyStatusEnum.Failed = new ITelephonyStatusEnum("Failed");
        ITelephonyStatusEnum.Unknown = new ITelephonyStatusEnum("Unknown");
        return ITelephonyStatusEnum;
    })();
    Adaptive.ITelephonyStatusEnum = ITelephonyStatusEnum;
    /**
     *  Service ITelephony implementation.
     */
    var TelephonyBridge = (function () {
        function TelephonyBridge() {
        }
        TelephonyBridge.prototype.call = function (number) {
            return null;
        };
        return TelephonyBridge;
    })();
    Adaptive.TelephonyBridge = TelephonyBridge;
    /**
     *  Service IMessaging implementation.
     */
    var MessagingBridge = (function () {
        function MessagingBridge() {
        }
        MessagingBridge.prototype.sendSMS = function (number, text, callback) {
        };
        return MessagingBridge;
    })();
    Adaptive.MessagingBridge = MessagingBridge;
    /**
     *  Service IFilePath implementation.
     */
    var FilePathBridge = (function () {
        function FilePathBridge() {
        }
        FilePathBridge.prototype.endsWith = function (other) {
            return null;
        };
        FilePathBridge.prototype.endsWithPath = function (other) {
            return null;
        };
        FilePathBridge.prototype.equalPath = function (other) {
            return null;
        };
        FilePathBridge.prototype.equals = function (other) {
            return null;
        };
        FilePathBridge.prototype.getFileName = function () {
            return null;
        };
        FilePathBridge.prototype.getFileSystem = function () {
            return null;
        };
        FilePathBridge.prototype.getNameAtIndex = function (index) {
            return null;
        };
        FilePathBridge.prototype.getNameCount = function () {
            return null;
        };
        FilePathBridge.prototype.getParent = function () {
            return null;
        };
        FilePathBridge.prototype.getRoot = function () {
            return null;
        };
        FilePathBridge.prototype.isAbsolute = function () {
            return null;
        };
        FilePathBridge.prototype.normalize = function () {
            return null;
        };
        FilePathBridge.prototype.relativize = function (other) {
            return null;
        };
        FilePathBridge.prototype.resolve = function (other) {
            return null;
        };
        FilePathBridge.prototype.resolvePath = function (other) {
            return null;
        };
        FilePathBridge.prototype.resolveSibling = function (other) {
            return null;
        };
        FilePathBridge.prototype.resolveSiblingPath = function (other) {
            return null;
        };
        FilePathBridge.prototype.startsWith = function (other) {
            return null;
        };
        FilePathBridge.prototype.startsWithPath = function (other) {
            return null;
        };
        FilePathBridge.prototype.toAbsolutePath = function () {
            return null;
        };
        FilePathBridge.prototype.toFile = function () {
            return null;
        };
        FilePathBridge.prototype.toString = function () {
            return null;
        };
        return FilePathBridge;
    })();
    Adaptive.FilePathBridge = FilePathBridge;
    /**
     *  Enumerations for ITableResultCallback Error
     **/
    var ITableResultCallbackErrorEnum = (function () {
        function ITableResultCallbackErrorEnum(value) {
            this.value = value;
        }
        ITableResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ITableResultCallbackErrorEnum.NoSpace = new ITableResultCallbackErrorEnum("NoSpace");
        ITableResultCallbackErrorEnum.ReadOnlyTable = new ITableResultCallbackErrorEnum("ReadOnlyTable");
        ITableResultCallbackErrorEnum.SqlException = new ITableResultCallbackErrorEnum("SqlException");
        ITableResultCallbackErrorEnum.DatabaseNotFound = new ITableResultCallbackErrorEnum("DatabaseNotFound");
        ITableResultCallbackErrorEnum.NoTableFound = new ITableResultCallbackErrorEnum("NoTableFound");
        ITableResultCallbackErrorEnum.Unknown = new ITableResultCallbackErrorEnum("Unknown");
        return ITableResultCallbackErrorEnum;
    })();
    Adaptive.ITableResultCallbackErrorEnum = ITableResultCallbackErrorEnum;
    /**
     *  Enumerations for ITableResultCallback Warning
     **/
    var ITableResultCallbackWarningEnum = (function () {
        function ITableResultCallbackWarningEnum(value) {
            this.value = value;
        }
        ITableResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ITableResultCallbackWarningEnum.TableExists = new ITableResultCallbackWarningEnum("TableExists");
        ITableResultCallbackWarningEnum.TableLocked = new ITableResultCallbackWarningEnum("TableLocked");
        ITableResultCallbackWarningEnum.NoResults = new ITableResultCallbackWarningEnum("NoResults");
        ITableResultCallbackWarningEnum.Unknown = new ITableResultCallbackWarningEnum("Unknown");
        return ITableResultCallbackWarningEnum;
    })();
    Adaptive.ITableResultCallbackWarningEnum = ITableResultCallbackWarningEnum;
    /**
     *  Listener ITableResultCallback implementation.
     */
    var TableResultCallback = (function () {
        function TableResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        TableResultCallback.prototype.toString = function () {
            return "TableResultCallback{" + this.id + "}";
        };
        TableResultCallback.prototype.getId = function () {
            return this.id;
        };
        TableResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The TableResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        TableResultCallback.prototype.onResult = function (table) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The TableResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(table);
            }
        };
        TableResultCallback.prototype.onWarning = function (table, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The TableResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(table, warning);
            }
        };
        return TableResultCallback;
    })();
    Adaptive.TableResultCallback = TableResultCallback;
    /**
     *  Enumerations for IFileListResultCallback Error
     **/
    var IFileListResultCallbackErrorEnum = (function () {
        function IFileListResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileListResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackErrorEnum.InexistentFile = new IFileListResultCallbackErrorEnum("InexistentFile");
        IFileListResultCallbackErrorEnum.Unauthorized = new IFileListResultCallbackErrorEnum("Unauthorized");
        IFileListResultCallbackErrorEnum.Unknown = new IFileListResultCallbackErrorEnum("Unknown");
        return IFileListResultCallbackErrorEnum;
    })();
    Adaptive.IFileListResultCallbackErrorEnum = IFileListResultCallbackErrorEnum;
    /**
     *  Enumerations for IFileListResultCallback Warning
     **/
    var IFileListResultCallbackWarningEnum = (function () {
        function IFileListResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileListResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackWarningEnum.PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
        IFileListResultCallbackWarningEnum.Unknown = new IFileListResultCallbackWarningEnum("Unknown");
        return IFileListResultCallbackWarningEnum;
    })();
    Adaptive.IFileListResultCallbackWarningEnum = IFileListResultCallbackWarningEnum;
    /**
     *  Listener IFileListResultCallback implementation.
     */
    var FileListResultCallback = (function () {
        function FileListResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        FileListResultCallback.prototype.toString = function () {
            return "FileListResultCallback{" + this.id + "}";
        };
        FileListResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileListResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The FileListResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileListResultCallback.prototype.onResult = function (files) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The FileListResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(files);
            }
        };
        FileListResultCallback.prototype.onWarning = function (files, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The FileListResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(files, warning);
            }
        };
        return FileListResultCallback;
    })();
    Adaptive.FileListResultCallback = FileListResultCallback;
    /**
     *  Service IAccelerometer implementation.
     */
    var AccelerometerBridge = (function () {
        function AccelerometerBridge() {
        }
        AccelerometerBridge.prototype.addAccelerationListener = function (listener) {
        };
        AccelerometerBridge.prototype.removeAccelerationListener = function (listener) {
        };
        AccelerometerBridge.prototype.removeAccelerationListeners = function () {
        };
        return AccelerometerBridge;
    })();
    Adaptive.AccelerometerBridge = AccelerometerBridge;
    /**
     *  Enumerations for IAppResourceCallback Error
     **/
    var IAppResourceCallbackErrorEnum = (function () {
        function IAppResourceCallbackErrorEnum(value) {
            this.value = value;
        }
        IAppResourceCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackErrorEnum.NotFound = new IAppResourceCallbackErrorEnum("NotFound");
        IAppResourceCallbackErrorEnum.NoPermission = new IAppResourceCallbackErrorEnum("NoPermission");
        IAppResourceCallbackErrorEnum.Unknown = new IAppResourceCallbackErrorEnum("Unknown");
        return IAppResourceCallbackErrorEnum;
    })();
    Adaptive.IAppResourceCallbackErrorEnum = IAppResourceCallbackErrorEnum;
    /**
     *  Enumerations for IAppResourceCallback Warning
     **/
    var IAppResourceCallbackWarningEnum = (function () {
        function IAppResourceCallbackWarningEnum(value) {
            this.value = value;
        }
        IAppResourceCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackWarningEnum.PartialContent = new IAppResourceCallbackWarningEnum("PartialContent");
        IAppResourceCallbackWarningEnum.TooLarge = new IAppResourceCallbackWarningEnum("TooLarge");
        IAppResourceCallbackWarningEnum.LinkedResource = new IAppResourceCallbackWarningEnum("LinkedResource");
        IAppResourceCallbackWarningEnum.Unknown = new IAppResourceCallbackWarningEnum("Unknown");
        return IAppResourceCallbackWarningEnum;
    })();
    Adaptive.IAppResourceCallbackWarningEnum = IAppResourceCallbackWarningEnum;
    /**
     *  Service IGlobalization implementation.
     */
    var GlobalizationBridge = (function () {
        function GlobalizationBridge() {
        }
        GlobalizationBridge.prototype.getLocaleSupportedDescriptors = function () {
            return null;
        };
        GlobalizationBridge.prototype.getResourceLiteral = function (key, locale) {
            return null;
        };
        GlobalizationBridge.prototype.getResourceLiterals = function (locale) {
            return null;
        };
        return GlobalizationBridge;
    })();
    Adaptive.GlobalizationBridge = GlobalizationBridge;
    /**
     *  Enumerations for IServiceResultCallback Error
     **/
    var IServiceResultCallbackErrorEnum = (function () {
        function IServiceResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IServiceResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackErrorEnum.Forbidden = new IServiceResultCallbackErrorEnum("Forbidden");
        IServiceResultCallbackErrorEnum.NotFound = new IServiceResultCallbackErrorEnum("NotFound");
        IServiceResultCallbackErrorEnum.MethodNotAllowed = new IServiceResultCallbackErrorEnum("MethodNotAllowed");
        IServiceResultCallbackErrorEnum.NotAllowed = new IServiceResultCallbackErrorEnum("NotAllowed");
        IServiceResultCallbackErrorEnum.NotAuthenticated = new IServiceResultCallbackErrorEnum("NotAuthenticated");
        IServiceResultCallbackErrorEnum.TimeOut = new IServiceResultCallbackErrorEnum("TimeOut");
        IServiceResultCallbackErrorEnum.NoResponse = new IServiceResultCallbackErrorEnum("NoResponse");
        IServiceResultCallbackErrorEnum.ServerError = new IServiceResultCallbackErrorEnum("ServerError");
        IServiceResultCallbackErrorEnum.Unreachable = new IServiceResultCallbackErrorEnum("Unreachable");
        IServiceResultCallbackErrorEnum.MalformedUrl = new IServiceResultCallbackErrorEnum("MalformedUrl");
        IServiceResultCallbackErrorEnum.NotRegisteredService = new IServiceResultCallbackErrorEnum("NotRegisteredService");
        IServiceResultCallbackErrorEnum.Unknown = new IServiceResultCallbackErrorEnum("Unknown");
        return IServiceResultCallbackErrorEnum;
    })();
    Adaptive.IServiceResultCallbackErrorEnum = IServiceResultCallbackErrorEnum;
    /**
     *  Enumerations for IServiceResultCallback Warning
     **/
    var IServiceResultCallbackWarningEnum = (function () {
        function IServiceResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IServiceResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackWarningEnum.NotSecure = new IServiceResultCallbackWarningEnum("NotSecure");
        IServiceResultCallbackWarningEnum.NotTrusted = new IServiceResultCallbackWarningEnum("NotTrusted");
        IServiceResultCallbackWarningEnum.Redirected = new IServiceResultCallbackWarningEnum("Redirected");
        IServiceResultCallbackWarningEnum.Wrong_Params = new IServiceResultCallbackWarningEnum("Wrong_Params");
        IServiceResultCallbackWarningEnum.Unknown = new IServiceResultCallbackWarningEnum("Unknown");
        return IServiceResultCallbackWarningEnum;
    })();
    Adaptive.IServiceResultCallbackWarningEnum = IServiceResultCallbackWarningEnum;
    /**
     *  Listener IServiceResultCallback implementation.
     */
    var ServiceResultCallback = (function () {
        function ServiceResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        ServiceResultCallback.prototype.toString = function () {
            return "ServiceResultCallback{" + this.id + "}";
        };
        ServiceResultCallback.prototype.getId = function () {
            return this.id;
        };
        ServiceResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The ServiceResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ServiceResultCallback.prototype.onResult = function (response) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The ServiceResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(response);
            }
        };
        ServiceResultCallback.prototype.onWarning = function (response, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The ServiceResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(response, warning);
            }
        };
        return ServiceResultCallback;
    })();
    Adaptive.ServiceResultCallback = ServiceResultCallback;
    /**
     *  Enumerations for IFileDataResultCallback Error
     **/
    var IFileDataResultCallbackErrorEnum = (function () {
        function IFileDataResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileDataResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileDataResultCallbackErrorEnum.InexistentFile = new IFileDataResultCallbackErrorEnum("InexistentFile");
        IFileDataResultCallbackErrorEnum.InsufficientSpace = new IFileDataResultCallbackErrorEnum("InsufficientSpace");
        IFileDataResultCallbackErrorEnum.Unauthorized = new IFileDataResultCallbackErrorEnum("Unauthorized");
        IFileDataResultCallbackErrorEnum.Unknown = new IFileDataResultCallbackErrorEnum("Unknown");
        return IFileDataResultCallbackErrorEnum;
    })();
    Adaptive.IFileDataResultCallbackErrorEnum = IFileDataResultCallbackErrorEnum;
    /**
     *  Enumerations for IFileDataResultCallback Warning
     **/
    var IFileDataResultCallbackWarningEnum = (function () {
        function IFileDataResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileDataResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileDataResultCallbackWarningEnum.ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
        IFileDataResultCallbackWarningEnum.Unknown = new IFileDataResultCallbackWarningEnum("Unknown");
        return IFileDataResultCallbackWarningEnum;
    })();
    Adaptive.IFileDataResultCallbackWarningEnum = IFileDataResultCallbackWarningEnum;
    /**
     *  Listener IFileDataResultCallback implementation.
     */
    var FileDataResultCallback = (function () {
        function FileDataResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            this.onErrorFunction = onErrorFunction;
            this.onResultFunction = onResultFunction;
            this.onWarningFunction = onWarningFunction;
        }
        FileDataResultCallback.prototype.toString = function () {
            return "FileDataResultCallback{" + this.id + "}";
        };
        FileDataResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileDataResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined') {
                console.log("WARNING: The FileDataResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileDataResultCallback.prototype.onResult = function (file, data) {
            if (typeof this.onResultFunction === 'undefined') {
                console.log("WARNING: The FileDataResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(file, data);
            }
        };
        FileDataResultCallback.prototype.onWarning = function (file, warning) {
            if (typeof this.onWarningFunction === 'undefined') {
                console.log("WARNING: The FileDataResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(file, warning);
            }
        };
        return FileDataResultCallback;
    })();
    Adaptive.FileDataResultCallback = FileDataResultCallback;
    /**
     *  Service IVideo implementation.
     */
    var VideoBridge = (function () {
        function VideoBridge() {
        }
        VideoBridge.prototype.playStream = function (url) {
        };
        return VideoBridge;
    })();
    Adaptive.VideoBridge = VideoBridge;
    /**
     *  Service IFile implementation.
     */
    var FileBridge = (function () {
        function FileBridge() {
        }
        FileBridge.prototype.canRead = function () {
            return null;
        };
        FileBridge.prototype.canWrite = function () {
            return null;
        };
        FileBridge.prototype.create = function (name, callback) {
        };
        FileBridge.prototype.createWithPath = function (path, name, callback) {
        };
        FileBridge.prototype.delete = function (cascade) {
            return null;
        };
        FileBridge.prototype.endsWith = function (other) {
            return null;
        };
        FileBridge.prototype.endsWithPath = function (other) {
            return null;
        };
        FileBridge.prototype.equalPath = function (other) {
            return null;
        };
        FileBridge.prototype.equals = function (other) {
            return null;
        };
        FileBridge.prototype.exists = function () {
            return null;
        };
        FileBridge.prototype.getContent = function (callback) {
        };
        FileBridge.prototype.getDateCreated = function () {
            return null;
        };
        FileBridge.prototype.getDateModified = function () {
            return null;
        };
        FileBridge.prototype.getFileName = function () {
            return null;
        };
        FileBridge.prototype.getFileSystem = function () {
            return null;
        };
        FileBridge.prototype.getName = function () {
            return null;
        };
        FileBridge.prototype.getNameAtIndex = function (index) {
            return null;
        };
        FileBridge.prototype.getNameCount = function () {
            return null;
        };
        FileBridge.prototype.getParent = function () {
            return null;
        };
        FileBridge.prototype.getPath = function () {
            return null;
        };
        FileBridge.prototype.getRoot = function () {
            return null;
        };
        FileBridge.prototype.getSize = function () {
            return null;
        };
        FileBridge.prototype.isAbsolute = function () {
            return null;
        };
        FileBridge.prototype.isDirectory = function () {
            return null;
        };
        FileBridge.prototype.listFiles = function (callback) {
        };
        FileBridge.prototype.listFilesForRegex = function (regex, callback) {
        };
        FileBridge.prototype.mkDir = function (recursive) {
            return null;
        };
        FileBridge.prototype.move = function (newFile, createPath, callback, overwrite) {
        };
        FileBridge.prototype.normalize = function () {
            return null;
        };
        FileBridge.prototype.relativize = function (other) {
            return null;
        };
        FileBridge.prototype.resolve = function (other) {
            return null;
        };
        FileBridge.prototype.resolvePath = function (other) {
            return null;
        };
        FileBridge.prototype.resolveSibling = function (other) {
            return null;
        };
        FileBridge.prototype.resolveSiblingPath = function (other) {
            return null;
        };
        FileBridge.prototype.setContent = function (content, callback) {
        };
        FileBridge.prototype.startsWith = function (other) {
            return null;
        };
        FileBridge.prototype.startsWithPath = function (other) {
            return null;
        };
        FileBridge.prototype.toAbsolutePath = function () {
            return null;
        };
        FileBridge.prototype.toFile = function () {
            return null;
        };
        FileBridge.prototype.toPath = function () {
            return null;
        };
        FileBridge.prototype.toString = function () {
            return null;
        };
        return FileBridge;
    })();
    Adaptive.FileBridge = FileBridge;
    /**
     *   Class implementation for ContactEmail
     **/
    var ContactEmail = (function () {
        /** Initialization **/
        function ContactEmail(type, primary, email) {
            this.type = type;
            this.primary = primary;
            this.email = email;
        }
        /**
         * Method Declarations for ContactEmail
         */
        ContactEmail.prototype.getEmail = function () {
            return this.email;
        };
        ContactEmail.prototype.getType = function () {
            return this.type;
        };
        ContactEmail.prototype.isPrimary = function () {
            return this.primary;
        };
        ContactEmail.prototype.setEmail = function (email) {
            this.email = email;
        };
        ContactEmail.prototype.setPrimary = function (primary) {
            this.primary = primary;
        };
        ContactEmail.prototype.setType = function (type) {
            this.type = type;
        };
        return ContactEmail;
    })();
    Adaptive.ContactEmail = ContactEmail;
    /**
     *  Enumerations for ContactEmail EmailType
     **/
    var ContactEmailEmailTypeEnum = (function () {
        function ContactEmailEmailTypeEnum(value) {
            this.value = value;
        }
        ContactEmailEmailTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactEmailEmailTypeEnum.Personal = new ContactEmailEmailTypeEnum("Personal");
        ContactEmailEmailTypeEnum.Work = new ContactEmailEmailTypeEnum("Work");
        ContactEmailEmailTypeEnum.Other = new ContactEmailEmailTypeEnum("Other");
        ContactEmailEmailTypeEnum.Unknown = new ContactEmailEmailTypeEnum("Unknown");
        return ContactEmailEmailTypeEnum;
    })();
    Adaptive.ContactEmailEmailTypeEnum = ContactEmailEmailTypeEnum;
    /**
     *   Class implementation for Header
     **/
    var Header = (function () {
        /** Initialization **/
        function Header(name, data) {
            this.name = name;
            this.data = data;
        }
        /**
         * Method Declarations for Header
         */
        Header.prototype.getData = function () {
            return this.data;
        };
        Header.prototype.getName = function () {
            return this.name;
        };
        Header.prototype.setData = function (data) {
            this.data = data;
        };
        Header.prototype.setName = function (name) {
            this.name = name;
        };
        return Header;
    })();
    Adaptive.Header = Header;
    /**
     *   Class implementation for ServiceResponse
     **/
    var ServiceResponse = (function () {
        /** Initialization **/
        function ServiceResponse(content, contentType, contentLength, contentBinary, contentBinaryLength, headers, session, contentEncoding) {
            this.content = content;
            this.contentType = contentType;
            this.contentLength = contentLength;
            this.contentBinary = contentBinary;
            this.contentBinaryLength = contentBinaryLength;
            this.headers = headers;
            this.session = session;
            this.contentEncoding = contentEncoding;
        }
        /**
         * Method Declarations for ServiceResponse
         */
        ServiceResponse.prototype.getContent = function () {
            return this.content;
        };
        ServiceResponse.prototype.getContentBinary = function () {
            return this.contentBinary;
        };
        ServiceResponse.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        ServiceResponse.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        ServiceResponse.prototype.getContentLength = function () {
            return this.contentLength;
        };
        ServiceResponse.prototype.getContentType = function () {
            return this.contentType;
        };
        ServiceResponse.prototype.getHeaders = function () {
            return this.headers;
        };
        ServiceResponse.prototype.getSession = function () {
            return this.session;
        };
        ServiceResponse.prototype.setContentBinaryLength = function (contentBinaryLength) {
            this.contentBinaryLength = contentBinaryLength;
        };
        ServiceResponse.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        ServiceResponse.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        ServiceResponse.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        ServiceResponse.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        ServiceResponse.prototype.setContent = function (content) {
            this.content = content;
        };
        ServiceResponse.prototype.setHeaders = function (headers) {
            this.headers = headers;
        };
        ServiceResponse.prototype.setSession = function (session) {
            this.session = session;
        };
        return ServiceResponse;
    })();
    Adaptive.ServiceResponse = ServiceResponse;
    /**
     *   Class implementation for OSInfo
     **/
    var OSInfo = (function () {
        /** Initialization **/
        function OSInfo(name, version, vendor) {
            this.name = name;
            this.version = version;
            this.vendor = vendor;
        }
        /**
         * Method Declarations for OSInfo
         */
        OSInfo.prototype.getName = function () {
            return this.name;
        };
        OSInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        OSInfo.prototype.getVersion = function () {
            return this.version;
        };
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
    /**
     *   Class implementation for Column
     **/
    var Column = (function () {
        /** Initialization **/
        function Column(name) {
            this.name = name;
        }
        /**
         * Method Declarations for Column
         */
        Column.prototype.getName = function () {
            return this.name;
        };
        Column.prototype.setName = function (name) {
            this.name = name;
        };
        return Column;
    })();
    Adaptive.Column = Column;
    /**
     *   Class implementation for ServiceRequest
     **/
    var ServiceRequest = (function () {
        /** Initialization **/
        function ServiceRequest(content, contentType, contentLength, rawContent, headers, method, protocolVersion, session, contentEncoding) {
            this.content = content;
            this.contentType = contentType;
            this.contentLength = contentLength;
            this.rawContent = rawContent;
            this.headers = headers;
            this.method = method;
            this.protocolVersion = protocolVersion;
            this.session = session;
            this.contentEncoding = contentEncoding;
        }
        /**
         * Method Declarations for ServiceRequest
         */
        ServiceRequest.prototype.getContent = function () {
            return this.content;
        };
        ServiceRequest.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        ServiceRequest.prototype.getContentLength = function () {
            return this.contentLength;
        };
        ServiceRequest.prototype.getContentType = function () {
            return this.contentType;
        };
        ServiceRequest.prototype.getHeaders = function () {
            return this.headers;
        };
        ServiceRequest.prototype.getMethod = function () {
            return this.method;
        };
        ServiceRequest.prototype.getProtocolVersion = function () {
            return this.protocolVersion;
        };
        ServiceRequest.prototype.getRawContent = function () {
            return this.rawContent;
        };
        ServiceRequest.prototype.getSession = function () {
            return this.session;
        };
        ServiceRequest.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        ServiceRequest.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        ServiceRequest.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        ServiceRequest.prototype.setContent = function (content) {
            this.content = content;
        };
        ServiceRequest.prototype.setHeaders = function (headers) {
            this.headers = headers;
        };
        ServiceRequest.prototype.setMethod = function (method) {
            this.method = method;
        };
        ServiceRequest.prototype.setProtocolVersion = function (protocolVersion) {
            this.protocolVersion = protocolVersion;
        };
        ServiceRequest.prototype.setRawContent = function (rawContent) {
            this.rawContent = rawContent;
        };
        ServiceRequest.prototype.setSession = function (session) {
            this.session = session;
        };
        return ServiceRequest;
    })();
    Adaptive.ServiceRequest = ServiceRequest;
    /**
     *  Enumerations for ServiceRequest ProtocolVersion
     **/
    var ServiceRequestProtocolVersionEnum = (function () {
        function ServiceRequestProtocolVersionEnum(value) {
            this.value = value;
        }
        ServiceRequestProtocolVersionEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_0 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_0");
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_1 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_1");
        ServiceRequestProtocolVersionEnum.Unknown = new ServiceRequestProtocolVersionEnum("Unknown");
        return ServiceRequestProtocolVersionEnum;
    })();
    Adaptive.ServiceRequestProtocolVersionEnum = ServiceRequestProtocolVersionEnum;
    /**
     *   Class implementation for Database
     **/
    var Database = (function () {
        /** Initialization **/
        function Database(name, compress) {
            this.name = name;
            this.compress = compress;
        }
        /**
         * Method Declarations for Database
         */
        Database.prototype.getName = function () {
            return this.name;
        };
        Database.prototype.isCompress = function () {
            return this.compress;
        };
        Database.prototype.setCompress = function (compress) {
            this.compress = compress;
        };
        Database.prototype.setName = function (name) {
            this.name = name;
        };
        return Database;
    })();
    Adaptive.Database = Database;
    /**
     *   Class implementation for Cookie
     **/
    var Cookie = (function () {
        /** Initialization **/
        function Cookie(name, data) {
            this.name = name;
            this.data = data;
        }
        /**
         * Method Declarations for Cookie
         */
        Cookie.prototype.getCreation = function () {
            return this.creation;
        };
        Cookie.prototype.getData = function () {
            return this.data;
        };
        Cookie.prototype.getDomain = function () {
            return this.domain;
        };
        Cookie.prototype.getExpiry = function () {
            return this.expiry;
        };
        Cookie.prototype.getName = function () {
            return this.name;
        };
        Cookie.prototype.getPath = function () {
            return this.path;
        };
        Cookie.prototype.getScheme = function () {
            return this.scheme;
        };
        Cookie.prototype.isSecure = function () {
            return this.secure;
        };
        Cookie.prototype.setData = function (data) {
            this.data = data;
        };
        Cookie.prototype.setDomain = function (domain) {
            this.domain = domain;
        };
        Cookie.prototype.setExpiry = function (expiry) {
            this.expiry = expiry;
        };
        Cookie.prototype.setName = function (name) {
            this.name = name;
        };
        Cookie.prototype.setPath = function (path) {
            this.path = path;
        };
        Cookie.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        Cookie.prototype.setSecure = function (secure) {
            this.secure = secure;
        };
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
    /**
     *   Class implementation for Locale
     **/
    var Locale = (function () {
        /** Initialization **/
        function Locale(language, country) {
            this.language = language;
            this.country = country;
            this.description = this.country + "_" + this.language;
        }
        /**
         * Method Declarations for Locale
         */
        Locale.prototype.getCountry = function () {
            return this.country;
        };
        Locale.prototype.getLanguage = function () {
            return this.language;
        };
        Locale.prototype.setCountry = function (country) {
            this.country = country;
        };
        Locale.prototype.setLanguage = function (language) {
            this.language = language;
        };
        Locale.prototype.toString = function () {
            return this.description;
        };
        return Locale;
    })();
    Adaptive.Locale = Locale;
    /**
     *   Class implementation for ContactWebsite
     **/
    var ContactWebsite = (function () {
        /** Initialization **/
        function ContactWebsite(url) {
            this.url = url;
        }
        /**
         * Method Declarations for ContactWebsite
         */
        ContactWebsite.prototype.getUrl = function () {
            return this.url;
        };
        ContactWebsite.prototype.setUrl = function (url) {
            this.url = url;
        };
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
    /**
     *   Class implementation for Row
     **/
    var Row = (function () {
        /** Initialization **/
        function Row(values) {
            this.values = values;
        }
        /**
         * Method Declarations for Row
         */
        Row.prototype.getValues = function () {
            return this.values;
        };
        Row.prototype.setValues = function (values) {
            this.values = values;
        };
        return Row;
    })();
    Adaptive.Row = Row;
    /**
     *   Class implementation for ContactPersonalInfo
     **/
    var ContactPersonalInfo = (function () {
        /** Initialization **/
        function ContactPersonalInfo(name, middleName, lastName, title) {
            this.name = name;
            this.middleName = middleName;
            this.lastName = lastName;
            this.title = title;
        }
        /**
         * Method Declarations for ContactPersonalInfo
         */
        ContactPersonalInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        ContactPersonalInfo.prototype.getMiddleName = function () {
            return this.middleName;
        };
        ContactPersonalInfo.prototype.getName = function () {
            return this.name;
        };
        ContactPersonalInfo.prototype.getTitle = function () {
            return this.title;
        };
        ContactPersonalInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        ContactPersonalInfo.prototype.setMiddleName = function (middleName) {
            this.middleName = middleName;
        };
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        ContactPersonalInfo.prototype.setTitle = function (title) {
            this.title = title;
        };
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    /**
     *  Enumerations for ContactPersonalInfo Title
     **/
    var ContactPersonalInfoTitleEnum = (function () {
        function ContactPersonalInfoTitleEnum(value) {
            this.value = value;
        }
        ContactPersonalInfoTitleEnum.prototype.toString = function () {
            return this.value;
        };
        ContactPersonalInfoTitleEnum.Mr = new ContactPersonalInfoTitleEnum("Mr");
        ContactPersonalInfoTitleEnum.Mrs = new ContactPersonalInfoTitleEnum("Mrs");
        ContactPersonalInfoTitleEnum.Ms = new ContactPersonalInfoTitleEnum("Ms");
        ContactPersonalInfoTitleEnum.Dr = new ContactPersonalInfoTitleEnum("Dr");
        ContactPersonalInfoTitleEnum.Unknown = new ContactPersonalInfoTitleEnum("Unknown");
        return ContactPersonalInfoTitleEnum;
    })();
    Adaptive.ContactPersonalInfoTitleEnum = ContactPersonalInfoTitleEnum;
    /**
     *   Class implementation for EmailAddress
     **/
    var EmailAddress = (function () {
        /** Initialization **/
        function EmailAddress(address) {
            this.address = address;
        }
        /**
         * Method Declarations for EmailAddress
         */
        EmailAddress.prototype.getAddress = function () {
            return this.address;
        };
        EmailAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        return EmailAddress;
    })();
    Adaptive.EmailAddress = EmailAddress;
    /**
     *   Class implementation for ContactTag
     **/
    var ContactTag = (function () {
        /** Initialization **/
        function ContactTag(name, dataValue) {
            this.name = name;
            this.dataValue = dataValue;
        }
        /**
         * Method Declarations for ContactTag
         */
        ContactTag.prototype.getDataValue = function () {
            return this.dataValue;
        };
        ContactTag.prototype.getName = function () {
            return this.name;
        };
        ContactTag.prototype.setDataValue = function (dataValue) {
            this.dataValue = dataValue;
        };
        ContactTag.prototype.setName = function (name) {
            this.name = name;
        };
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
    /**
     *   Class implementation for Endpoint
     **/
    var Endpoint = (function () {
        /** Initialization **/
        function Endpoint(host, path, port, proxy, scheme) {
            this.host = host;
            this.path = path;
            this.port = port;
            this.proxy = proxy;
            this.scheme = scheme;
        }
        /**
         * Method Declarations for Endpoint
         */
        Endpoint.prototype.getHost = function () {
            return this.host;
        };
        Endpoint.prototype.getPath = function () {
            return this.path;
        };
        Endpoint.prototype.getPort = function () {
            return this.port;
        };
        Endpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        Endpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        Endpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        Endpoint.prototype.setPath = function (path) {
            this.path = path;
        };
        Endpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        Endpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        Endpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        return Endpoint;
    })();
    Adaptive.Endpoint = Endpoint;
    /**
     *   Class implementation for Geolocation
     **/
    var Geolocation = (function () {
        /** Initialization **/
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP) {
            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.xDoP = xDoP;
            this.yDoP = yDoP;
        }
        /**
         * Method Declarations for Geolocation
         */
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        Geolocation.prototype.getXDoP = function () {
            return this.xDoP;
        };
        Geolocation.prototype.getYDoP = function () {
            return this.yDoP;
        };
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        return Geolocation;
    })();
    Adaptive.Geolocation = Geolocation;
    /**
     *   Class implementation for ContactUid
     **/
    var ContactUid = (function () {
        /** Initialization **/
        function ContactUid(contactId) {
            this.contactId = contactId;
        }
        /**
         * Method Declarations for ContactUid
         */
        ContactUid.prototype.getContactId = function () {
            return this.contactId;
        };
        ContactUid.prototype.setContactId = function (contactId) {
            this.contactId = contactId;
        };
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
    /**
     *   Class implementation for Email
     **/
    var Email = (function () {
        /** Initialization **/
        function Email(toRecipients, subject, messageBody) {
            this.toRecipients = toRecipients;
            this.subject = subject;
            this.messageBody = messageBody;
        }
        /**
         * Method Declarations for Email
         */
        Email.prototype.getAttachmentData = function () {
            return this.attachmentData;
        };
        Email.prototype.getBccRecipients = function () {
            return this.bccRecipients;
        };
        Email.prototype.getCcRecipients = function () {
            return this.ccRecipients;
        };
        Email.prototype.getMessageBody = function () {
            return this.messageBody;
        };
        Email.prototype.getMessageBodyMimeType = function () {
            return this.messageBodyMimeType;
        };
        Email.prototype.getSubject = function () {
            return this.subject;
        };
        Email.prototype.getToRecipients = function () {
            return this.toRecipients;
        };
        Email.prototype.setAttachmentData = function (attachmentData) {
            this.attachmentData = attachmentData;
        };
        Email.prototype.setBccRecipients = function (bccRecipients) {
            this.bccRecipients = bccRecipients;
        };
        Email.prototype.setCcRecipients = function (ccRecipients) {
            this.ccRecipients = ccRecipients;
        };
        Email.prototype.setMessageBodyMimeType = function (messageBodyMimeType) {
            this.messageBodyMimeType = messageBodyMimeType;
        };
        Email.prototype.setMessageBody = function (messageBody) {
            this.messageBody = messageBody;
        };
        Email.prototype.setSubject = function (subject) {
            this.subject = subject;
        };
        Email.prototype.setToRecipients = function (toRecipients) {
            this.toRecipients = toRecipients;
        };
        return Email;
    })();
    Adaptive.Email = Email;
    /**
     *   Class implementation for AttachmentData
     **/
    var AttachmentData = (function () {
        /** Initialization **/
        function AttachmentData(data, dataSize, fileName, mimeType, referenceUrl) {
            this.data = data;
            this.dataSize = dataSize;
            this.fileName = fileName;
            this.mimeType = mimeType;
            this.referenceUrl = referenceUrl;
        }
        /**
         * Method Declarations for AttachmentData
         */
        AttachmentData.prototype.getData = function () {
            return this.data;
        };
        AttachmentData.prototype.getDataSize = function () {
            return this.dataSize;
        };
        AttachmentData.prototype.getFileName = function () {
            return this.fileName;
        };
        AttachmentData.prototype.getMimeType = function () {
            return this.mimeType;
        };
        AttachmentData.prototype.getReferenceUrl = function () {
            return this.referenceUrl;
        };
        AttachmentData.prototype.setDataSize = function (dataSize) {
            this.dataSize = dataSize;
        };
        AttachmentData.prototype.setData = function (data) {
            this.data = data;
        };
        AttachmentData.prototype.setFileName = function (fileName) {
            this.fileName = fileName;
        };
        AttachmentData.prototype.setMimeType = function (mimeType) {
            this.mimeType = mimeType;
        };
        AttachmentData.prototype.setReferenceUrl = function (referenceUrl) {
            this.referenceUrl = referenceUrl;
        };
        return AttachmentData;
    })();
    Adaptive.AttachmentData = AttachmentData;
    /**
     *   Class implementation for ContactSocial
     **/
    var ContactSocial = (function () {
        /** Initialization **/
        function ContactSocial(socialNetwork, profileUrl) {
            this.socialNetwork = socialNetwork;
            this.profileUrl = profileUrl;
        }
        /**
         * Method Declarations for ContactSocial
         */
        ContactSocial.prototype.getProfileUrl = function () {
            return this.profileUrl;
        };
        ContactSocial.prototype.getSocialNetwork = function () {
            return this.socialNetwork;
        };
        ContactSocial.prototype.setProfileUrl = function (profileUrl) {
            this.profileUrl = profileUrl;
        };
        ContactSocial.prototype.setSocialNetwork = function (socialNetwork) {
            this.socialNetwork = socialNetwork;
        };
        return ContactSocial;
    })();
    Adaptive.ContactSocial = ContactSocial;
    /**
     *  Enumerations for ContactSocial SocialNetwork
     **/
    var ContactSocialSocialNetworkEnum = (function () {
        function ContactSocialSocialNetworkEnum(value) {
            this.value = value;
        }
        ContactSocialSocialNetworkEnum.prototype.toString = function () {
            return this.value;
        };
        ContactSocialSocialNetworkEnum.Twitter = new ContactSocialSocialNetworkEnum("Twitter");
        ContactSocialSocialNetworkEnum.Facebook = new ContactSocialSocialNetworkEnum("Facebook");
        ContactSocialSocialNetworkEnum.GooglePlus = new ContactSocialSocialNetworkEnum("GooglePlus");
        ContactSocialSocialNetworkEnum.LinkedIn = new ContactSocialSocialNetworkEnum("LinkedIn");
        ContactSocialSocialNetworkEnum.Flickr = new ContactSocialSocialNetworkEnum("Flickr");
        ContactSocialSocialNetworkEnum.Unknown = new ContactSocialSocialNetworkEnum("Unknown");
        return ContactSocialSocialNetworkEnum;
    })();
    Adaptive.ContactSocialSocialNetworkEnum = ContactSocialSocialNetworkEnum;
    /**
     *   Class implementation for ContactPhone
     **/
    var ContactPhone = (function () {
        /** Initialization **/
        function ContactPhone(phone, phoneType) {
            this.phone = phone;
            this.phoneType = phoneType;
        }
        /**
         * Method Declarations for ContactPhone
         */
        ContactPhone.prototype.getPhone = function () {
            return this.phone;
        };
        ContactPhone.prototype.getPhoneType = function () {
            return this.phoneType;
        };
        ContactPhone.prototype.setPhoneType = function (phoneType) {
            this.phoneType = phoneType;
        };
        ContactPhone.prototype.setPhone = function (phone) {
            this.phone = phone;
        };
        return ContactPhone;
    })();
    Adaptive.ContactPhone = ContactPhone;
    /**
     *  Enumerations for ContactPhone PhoneType
     **/
    var ContactPhonePhoneTypeEnum = (function () {
        function ContactPhonePhoneTypeEnum(value) {
            this.value = value;
        }
        ContactPhonePhoneTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactPhonePhoneTypeEnum.Mobile = new ContactPhonePhoneTypeEnum("Mobile");
        ContactPhonePhoneTypeEnum.Work = new ContactPhonePhoneTypeEnum("Work");
        ContactPhonePhoneTypeEnum.Home = new ContactPhonePhoneTypeEnum("Home");
        ContactPhonePhoneTypeEnum.Main = new ContactPhonePhoneTypeEnum("Main");
        ContactPhonePhoneTypeEnum.HomeFax = new ContactPhonePhoneTypeEnum("HomeFax");
        ContactPhonePhoneTypeEnum.WorkFax = new ContactPhonePhoneTypeEnum("WorkFax");
        ContactPhonePhoneTypeEnum.Other = new ContactPhonePhoneTypeEnum("Other");
        ContactPhonePhoneTypeEnum.Unknown = new ContactPhonePhoneTypeEnum("Unknown");
        return ContactPhonePhoneTypeEnum;
    })();
    Adaptive.ContactPhonePhoneTypeEnum = ContactPhonePhoneTypeEnum;
    /**
     *   Class implementation for SecureKeyPair
     **/
    var SecureKeyPair = (function () {
        /** Initialization **/
        function SecureKeyPair(secureKey, secureData) {
            this.secureKey = secureKey;
            this.secureData = secureData;
        }
        /**
         * Method Declarations for SecureKeyPair
         */
        SecureKeyPair.prototype.getSecureData = function () {
            return this.secureData;
        };
        SecureKeyPair.prototype.getSecureKey = function () {
            return this.secureKey;
        };
        SecureKeyPair.prototype.setSecureData = function (secureData) {
            this.secureData = secureData;
        };
        SecureKeyPair.prototype.setSecureKey = function (secureKey) {
            this.secureKey = secureKey;
        };
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
    /**
     *   Class implementation for Table
     **/
    var Table = (function () {
        /** Initialization **/
        function Table(name) {
            this.name = name;
        }
        /**
         * Method Declarations for Table
         */
        Table.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        Table.prototype.getColumns = function () {
            return this.columns;
        };
        Table.prototype.getName = function () {
            return this.name;
        };
        Table.prototype.getRowCount = function () {
            return this.rowCount;
        };
        Table.prototype.getRows = function () {
            return this.rows;
        };
        Table.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        Table.prototype.setColumns = function (columns) {
            this.columns = columns;
        };
        Table.prototype.setName = function (name) {
            this.name = name;
        };
        Table.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        Table.prototype.setRows = function (rows) {
            this.rows = rows;
        };
        return Table;
    })();
    Adaptive.Table = Table;
    /**
     *   Class implementation for ContactProfessionalInfo
     **/
    var ContactProfessionalInfo = (function () {
        /** Initialization **/
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            this.jobTitle = jobTitle;
            this.jobDescription = jobDescription;
            this.company = company;
        }
        /**
         * Method Declarations for ContactProfessionalInfo
         */
        ContactProfessionalInfo.prototype.getCompany = function () {
            return this.company;
        };
        ContactProfessionalInfo.prototype.getJobDescription = function () {
            return this.jobDescription;
        };
        ContactProfessionalInfo.prototype.getJobTitle = function () {
            return this.jobTitle;
        };
        ContactProfessionalInfo.prototype.setCompany = function (company) {
            this.company = company;
        };
        ContactProfessionalInfo.prototype.setJobDescription = function (jobDescription) {
            this.jobDescription = jobDescription;
        };
        ContactProfessionalInfo.prototype.setJobTitle = function (jobTitle) {
            this.jobTitle = jobTitle;
        };
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    /**
     *   Class implementation for Acceleration
     **/
    var Acceleration = (function () {
        /** Initialization **/
        function Acceleration(x, y, z, timeStamp) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.timeStamp = timeStamp;
        }
        /**
         * Method Declarations for Acceleration
         */
        Acceleration.prototype.getX = function () {
            return this.x;
        };
        Acceleration.prototype.getY = function () {
            return this.y;
        };
        Acceleration.prototype.getZ = function () {
            return this.z;
        };
        Acceleration.prototype.setTimeStamp = function (timeStamp) {
            this.timeStamp = timeStamp;
        };
        Acceleration.prototype.setX = function (x) {
            this.x = x;
        };
        Acceleration.prototype.setY = function (y) {
            this.y = y;
        };
        Acceleration.prototype.setZ = function (z) {
            this.z = z;
        };
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
    /**
     *   Class implementation for DeviceInfo
     **/
    var DeviceInfo = (function () {
        /** Initialization **/
        function DeviceInfo(name, model, vendor, uuid) {
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        /**
         * Method Declarations for DeviceInfo
         */
        DeviceInfo.prototype.getModel = function () {
            return this.model;
        };
        DeviceInfo.prototype.getName = function () {
            return this.name;
        };
        DeviceInfo.prototype.getUuid = function () {
            return this.uuid;
        };
        DeviceInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
    /**
     *   Class implementation for ContactAddress
     **/
    var ContactAddress = (function () {
        /** Initialization **/
        function ContactAddress(address, type) {
            this.address = address;
            this.type = type;
        }
        /**
         * Method Declarations for ContactAddress
         */
        ContactAddress.prototype.getAddress = function () {
            return this.address;
        };
        ContactAddress.prototype.getType = function () {
            return this.type;
        };
        ContactAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        ContactAddress.prototype.setType = function (type) {
            this.type = type;
        };
        return ContactAddress;
    })();
    Adaptive.ContactAddress = ContactAddress;
    /**
     *  Enumerations for ContactAddress AddressType
     **/
    var ContactAddressAddressTypeEnum = (function () {
        function ContactAddressAddressTypeEnum(value) {
            this.value = value;
        }
        ContactAddressAddressTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactAddressAddressTypeEnum.Home = new ContactAddressAddressTypeEnum("Home");
        ContactAddressAddressTypeEnum.Work = new ContactAddressAddressTypeEnum("Work");
        ContactAddressAddressTypeEnum.Other = new ContactAddressAddressTypeEnum("Other");
        ContactAddressAddressTypeEnum.Unknown = new ContactAddressAddressTypeEnum("Unknown");
        return ContactAddressAddressTypeEnum;
    })();
    Adaptive.ContactAddressAddressTypeEnum = ContactAddressAddressTypeEnum;
    /**
     *   Class implementation for Contact
     **/
    var Contact = (function (_super) {
        __extends(Contact, _super);
        /** Initialization **/
        function Contact(contactId) {
            _super.call(this, contactId);
            this.contactId = contactId;
        }
        /**
         * Method Declarations for Contact
         */
        Contact.prototype.getContactAddresses = function () {
            return this.contactAddresses;
        };
        Contact.prototype.getContactEmails = function () {
            return this.contactEmails;
        };
        Contact.prototype.getContactPhones = function () {
            return this.contactPhones;
        };
        Contact.prototype.getContactSocials = function () {
            return this.contactSocials;
        };
        Contact.prototype.getContactTags = function () {
            return this.contactTags;
        };
        Contact.prototype.getContactWebsites = function () {
            return this.contactWebsites;
        };
        Contact.prototype.getPersonalInfo = function () {
            return this.personalInfo;
        };
        Contact.prototype.getProfessionalInfo = function () {
            return this.professionalInfo;
        };
        Contact.prototype.setContactAddresses = function (contactAddresses) {
            this.contactAddresses = contactAddresses;
        };
        Contact.prototype.setContactEmails = function (contactEmails) {
            this.contactEmails = contactEmails;
        };
        Contact.prototype.setContactPhones = function (contactPhones) {
            this.contactPhones = contactPhones;
        };
        Contact.prototype.setContactSocials = function (contactSocials) {
            this.contactSocials = contactSocials;
        };
        Contact.prototype.setContactTags = function (contactTags) {
            this.contactTags = contactTags;
        };
        Contact.prototype.setContactWebsites = function (contactWebsites) {
            this.contactWebsites = contactWebsites;
        };
        Contact.prototype.setPersonalInfo = function (personalInfo) {
            this.personalInfo = personalInfo;
        };
        Contact.prototype.setProfessionalInfo = function (professionalInfo) {
            this.professionalInfo = professionalInfo;
        };
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    /**
     *   Class implementation for Button
     **/
    var Button = (function () {
        /** Initialization **/
        function Button(type) {
            this.type = type;
        }
        /**
         * Method Declarations for Button
         */
        Button.prototype.getType = function () {
            return this.type;
        };
        return Button;
    })();
    Adaptive.Button = Button;
    /**
     *  Enumerations for Button Button
     **/
    var ButtonButtonEnum = (function () {
        function ButtonButtonEnum(value) {
            this.value = value;
        }
        ButtonButtonEnum.prototype.toString = function () {
            return this.value;
        };
        ButtonButtonEnum.HomeButton = new ButtonButtonEnum("HomeButton");
        ButtonButtonEnum.BackButton = new ButtonButtonEnum("BackButton");
        ButtonButtonEnum.OptionButton = new ButtonButtonEnum("OptionButton");
        ButtonButtonEnum.Unknown = new ButtonButtonEnum("Unknown");
        return ButtonButtonEnum;
    })();
    Adaptive.ButtonButtonEnum = ButtonButtonEnum;
    /**
     *   Class implementation for Lifecycle
     **/
    var Lifecycle = (function () {
        /** Initialization **/
        function Lifecycle(state) {
            this.state = state;
        }
        /**
         * Method Declarations for Lifecycle
         */
        Lifecycle.prototype.getState = function () {
            return this.state;
        };
        Lifecycle.prototype.setState = function (state) {
            this.state = state;
        };
        return Lifecycle;
    })();
    Adaptive.Lifecycle = Lifecycle;
    /**
     *  Enumerations for Lifecycle State
     **/
    var LifecycleStateEnum = (function () {
        function LifecycleStateEnum(value) {
            this.value = value;
        }
        LifecycleStateEnum.prototype.toString = function () {
            return this.value;
        };
        LifecycleStateEnum.Starting = new LifecycleStateEnum("Starting");
        LifecycleStateEnum.Started = new LifecycleStateEnum("Started");
        LifecycleStateEnum.Running = new LifecycleStateEnum("Running");
        LifecycleStateEnum.Paused = new LifecycleStateEnum("Paused");
        LifecycleStateEnum.PausedIdle = new LifecycleStateEnum("PausedIdle");
        LifecycleStateEnum.PausedRun = new LifecycleStateEnum("PausedRun");
        LifecycleStateEnum.Resuming = new LifecycleStateEnum("Resuming");
        LifecycleStateEnum.Stopping = new LifecycleStateEnum("Stopping");
        LifecycleStateEnum.Unknown = new LifecycleStateEnum("Unknown");
        return LifecycleStateEnum;
    })();
    Adaptive.LifecycleStateEnum = LifecycleStateEnum;
    /**
     *   Class implementation for Service
     **/
    var Service = (function () {
        /** Initialization **/
        function Service(endpoint, name, method, type) {
            this.endpoint = endpoint;
            this.name = name;
            this.method = method;
            this.type = type;
        }
        /**
         * Method Declarations for Service
         */
        Service.prototype.getEndpoint = function () {
            return this.endpoint;
        };
        Service.prototype.getMethod = function () {
            return this.method;
        };
        Service.prototype.getName = function () {
            return this.name;
        };
        Service.prototype.getType = function () {
            return this.type;
        };
        Service.prototype.setEndpoint = function (endpoint) {
            this.endpoint = endpoint;
        };
        Service.prototype.setMethod = function (method) {
            this.method = method;
        };
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        return Service;
    })();
    Adaptive.Service = Service;
    /**
     *  Enumerations for Service ServiceMethod
     **/
    var ServiceServiceMethodEnum = (function () {
        function ServiceServiceMethodEnum(value) {
            this.value = value;
        }
        ServiceServiceMethodEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceServiceMethodEnum.POST = new ServiceServiceMethodEnum("POST");
        ServiceServiceMethodEnum.GET = new ServiceServiceMethodEnum("GET");
        ServiceServiceMethodEnum.Unknown = new ServiceServiceMethodEnum("Unknown");
        return ServiceServiceMethodEnum;
    })();
    Adaptive.ServiceServiceMethodEnum = ServiceServiceMethodEnum;
    /**
     *  Enumerations for Service ServiceType
     **/
    var ServiceServiceTypeEnum = (function () {
        function ServiceServiceTypeEnum(value) {
            this.value = value;
        }
        ServiceServiceTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceServiceTypeEnum.SERVICETYPE_AMF_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_AMF_SERIALIZATION");
        ServiceServiceTypeEnum.SERVICETYPE_GWT_RPC = new ServiceServiceTypeEnum("SERVICETYPE_GWT_RPC");
        ServiceServiceTypeEnum.SERVICETYPE_OCTET_BINARY = new ServiceServiceTypeEnum("SERVICETYPE_OCTET_BINARY");
        ServiceServiceTypeEnum.SERVICETYPE_REMOTING_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_REMOTING_SERIALIZATION");
        ServiceServiceTypeEnum.SERVICETYPE_REST_JSON = new ServiceServiceTypeEnum("SERVICETYPE_REST_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_REST_XML = new ServiceServiceTypeEnum("SERVICETYPE_REST_XML");
        ServiceServiceTypeEnum.SERVICETYPE_SOAP_JSON = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_SOAP_XML = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_XML");
        ServiceServiceTypeEnum.SERVICETYPE_XMLRPC_JSON = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_XMLRPC_XML = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_XML");
        ServiceServiceTypeEnum.Unknown = new ServiceServiceTypeEnum("Unknown");
        return ServiceServiceTypeEnum;
    })();
    Adaptive.ServiceServiceTypeEnum = ServiceServiceTypeEnum;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=adaptive.js.map