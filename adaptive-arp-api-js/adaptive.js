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
    var registeredCounter = 0;
    var bridgePath = "https://adaptiveapp";
    /**
     *   Reflection support classes for metadata documentation.
     */
    var ReflectionBase = (function () {
        function ReflectionBase(name, description) {
            this.name = name;
            this.description = description;
        }
        ReflectionBase.prototype.getName = function () {
            return this.name;
        };
        ReflectionBase.prototype.getDescription = function () {
            return this.description;
        };
        return ReflectionBase;
    })();
    Adaptive.ReflectionBase = ReflectionBase;
    var ReflectionPackage = (function (_super) {
        __extends(ReflectionPackage, _super);
        function ReflectionPackage(name, description) {
            _super.call(this, name, description);
            this._classes = new Array();
        }
        ReflectionPackage.prototype.addClass = function (clazz) {
            this._classes.push(clazz);
        };
        ReflectionPackage.prototype.getClasses = function () {
            return this._classes;
        };
        return ReflectionPackage;
    })(ReflectionBase);
    Adaptive.ReflectionPackage = ReflectionPackage;
    var ReflectionMember = (function (_super) {
        __extends(ReflectionMember, _super);
        function ReflectionMember() {
            _super.apply(this, arguments);
        }
        return ReflectionMember;
    })(ReflectionBase);
    Adaptive.ReflectionMember = ReflectionMember;
    var ReflectionClass = (function (_super) {
        __extends(ReflectionClass, _super);
        function ReflectionClass(name, description, type, _methods, _fields, _package) {
            _super.call(this, name, description);
            this._isarray = false;
            this._isprimitive = false;
            this._isenum = false;
            this._fields = new Array();
            this._methods = new Array();
            this._type = "null";
            this._package = _package;
            this._type = type;
            if (this._type == null) {
                this._type = "null";
            }
            else if (this._type == "string" || this._type == "number" || this._type == "boolean") {
                this._isprimitive = true;
            }
            else if (this._type.indexOf("Array") == 0) {
                this._isarray = true;
            }
            else if (this._type.indexOf("Enum") > -1) {
                this._isenum = true;
            }
            if (_methods != null) {
                this._methods = _methods;
            }
            if (_fields != null) {
                this._fields = _fields;
            }
        }
        ReflectionClass.prototype.setTypeComponent = function (typeComponent) {
            this._typeComponent = typeComponent;
            return this;
        };
        ReflectionClass.prototype.getFields = function () {
            return this._fields;
        };
        ReflectionClass.prototype.getMethods = function () {
            return this._methods;
        };
        ReflectionClass.prototype.getType = function () {
            return this._type;
        };
        return ReflectionClass;
    })(ReflectionBase);
    Adaptive.ReflectionClass = ReflectionClass;
    var ReflectionMethod = (function (_super) {
        __extends(ReflectionMethod, _super);
        function ReflectionMethod(name, description, _parameters, _returnType) {
            _super.call(this, name, description);
            this._isvoid = true;
            this._parameters = new Array();
            if (_parameters != null) {
                this._parameters = _parameters;
            }
            if (_returnType == null) {
                this._isvoid = true;
                this._returnType = null;
            }
            else {
                this._isvoid = false;
                this._returnType = _returnType;
            }
        }
        ReflectionMethod.prototype.isVoid = function () {
            return this._isvoid;
        };
        ReflectionMethod.prototype.getParameters = function () {
            return this._parameters;
        };
        ReflectionMethod.prototype.getParameterCount = function () {
            return this._parameters.length;
        };
        ReflectionMethod.prototype.getReturnType = function () {
            return this._returnType;
        };
        return ReflectionMethod;
    })(ReflectionBase);
    Adaptive.ReflectionMethod = ReflectionMethod;
    var ReflectionParameter = (function (_super) {
        __extends(ReflectionParameter, _super);
        function ReflectionParameter(name, description, _type) {
            _super.call(this, name, description);
            this._type = _type;
        }
        ReflectionParameter.prototype.getType = function () {
            return this._type;
        };
        return ReflectionParameter;
    })(ReflectionBase);
    Adaptive.ReflectionParameter = ReflectionParameter;
    var ReflectionField = (function (_super) {
        __extends(ReflectionField, _super);
        function ReflectionField(name, description, type) {
            _super.call(this, name, description);
            this.type = type;
        }
        ReflectionField.prototype.getType = function () {
            return this.type;
        };
        return ReflectionField;
    })(ReflectionBase);
    Adaptive.ReflectionField = ReflectionField;
    var _package = null;
    function getReflection() {
        if (_package == null) {
            _package = new ReflectionPackage("Adaptive", "Adaptive Runtime Platform JS API");
        }
        return _package;
    }
    Adaptive.getReflection = getReflection;
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
        BaseListener.getReflection = function () {
            /** Fields of BaseListener **/
            var _fields = new Array();
            /** Methods of BaseListener **/
            var _methods = new Array();
            /** Method toString of BaseListener **/
            var _params_toString = new Array();
            _methods.push(new ReflectionMethod('toString', 'BaseListener toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getId of BaseListener **/
            var _params_getId = new Array();
            _methods.push(new ReflectionMethod('getId', 'BaseListener getId', _params_getId, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Class description of IBaseListener **/
            var clazz = new ReflectionClass('BaseListener', 'Listener/Callback class BaseListener', 'BaseListener', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return BaseListener;
    })();
    Adaptive.BaseListener = BaseListener;
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
        IAppContextTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppContext Type
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
     *  Enumerations for IAppResource Payload
     **/
    var IAppResourcePayloadEnum = (function () {
        function IAppResourcePayloadEnum(value) {
            this.value = value;
        }
        IAppResourcePayloadEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourcePayloadEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppResource Payload
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
        IAppResourceFormatEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppResource Format
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
        IAppResourceTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppResource Type
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
     *  Callback IBaseCallback implementation.
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
        BaseCallback.getReflection = function () {
            /** Fields of BaseCallback **/
            var _fields = new Array();
            /** Methods of BaseCallback **/
            var _methods = new Array();
            /** Method toString of BaseCallback **/
            var _params_toString = new Array();
            _methods.push(new ReflectionMethod('toString', 'BaseCallback toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getId of BaseCallback **/
            var _params_getId = new Array();
            _methods.push(new ReflectionMethod('getId', 'BaseCallback getId', _params_getId, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Class description of IBaseCallback **/
            var clazz = new ReflectionClass('BaseCallback', 'Listener/Callback class BaseCallback', 'BaseCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return BaseCallback;
    })();
    Adaptive.BaseCallback = BaseCallback;
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
        IDatabaseResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IDatabaseResultCallback Error
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
        IDatabaseResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IDatabaseResultCallback Warning
        };
        IDatabaseResultCallbackWarningEnum.DatabaseExists = new IDatabaseResultCallbackWarningEnum("DatabaseExists");
        IDatabaseResultCallbackWarningEnum.IsOpen = new IDatabaseResultCallbackWarningEnum("IsOpen");
        IDatabaseResultCallbackWarningEnum.Unknown = new IDatabaseResultCallbackWarningEnum("Unknown");
        return IDatabaseResultCallbackWarningEnum;
    })();
    Adaptive.IDatabaseResultCallbackWarningEnum = IDatabaseResultCallbackWarningEnum;
    /**
     *  Callback IDatabaseResultCallback control dictionary.
     */
    var registeredIDatabaseResultCallback = new Dictionary([]);
    /**
     *  Callback IDatabaseResultCallback onError/onWarning/onResult handlers.
     */
    function handleIDatabaseResultCallbackError(id, error) {
        var callback = registeredIDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIDatabaseResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIDatabaseResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIDatabaseResultCallbackError = handleIDatabaseResultCallbackError;
    function handleIDatabaseResultCallbackResult(id, database) {
        var callback = registeredIDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIDatabaseResultCallback dictionary.");
        }
        else {
            callback.onResult(database);
            registeredIDatabaseResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIDatabaseResultCallbackResult = handleIDatabaseResultCallbackResult;
    function handleIDatabaseResultCallbackWarning(id, database, warning) {
        var callback = registeredIDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIDatabaseResultCallback dictionary.");
        }
        else {
            callback.onWarning(database, warning);
            registeredIDatabaseResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIDatabaseResultCallbackWarning = handleIDatabaseResultCallbackWarning;
    /**
     *  Callback IDatabaseResultCallback implementation.
     */
    var DatabaseResultCallback = (function () {
        function DatabaseResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: DatabaseResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: DatabaseResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: DatabaseResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        DatabaseResultCallback.prototype.toString = function () {
            return "DatabaseResultCallback{" + this.id + "}";
        };
        DatabaseResultCallback.prototype.getId = function () {
            return this.id;
        };
        DatabaseResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The DatabaseResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        DatabaseResultCallback.prototype.onResult = function (database) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The DatabaseResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(database);
            }
        };
        DatabaseResultCallback.prototype.onWarning = function (database, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The DatabaseResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(database, warning);
            }
        };
        DatabaseResultCallback.getReflection = function () {
            /** Fields of DatabaseResultCallback **/
            var _fields = new Array();
            /** Methods of DatabaseResultCallback **/
            var _methods = new Array();
            /** Method onError of DatabaseResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'DatabaseResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'DatabaseResultCallback onError', _params_onError, null));
            /** Method onWarning of DatabaseResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('database', 'DatabaseResultCallback onWarning database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'DatabaseResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'DatabaseResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of DatabaseResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('database', 'DatabaseResultCallback onResult database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'DatabaseResultCallback onResult', _params_onResult, null));
            /** Class description of IDatabaseResultCallback **/
            var clazz = new ReflectionClass('DatabaseResultCallback', 'Listener/Callback class DatabaseResultCallback', 'DatabaseResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return DatabaseResultCallback;
    })();
    Adaptive.DatabaseResultCallback = DatabaseResultCallback;
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
        IContactPhotoResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContactPhotoResultCallback Error
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
        IContactPhotoResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContactPhotoResultCallback Warning
        };
        IContactPhotoResultCallbackWarningEnum.LimitExceeded = new IContactPhotoResultCallbackWarningEnum("LimitExceeded");
        IContactPhotoResultCallbackWarningEnum.No_Matches = new IContactPhotoResultCallbackWarningEnum("No_Matches");
        IContactPhotoResultCallbackWarningEnum.Unknown = new IContactPhotoResultCallbackWarningEnum("Unknown");
        return IContactPhotoResultCallbackWarningEnum;
    })();
    Adaptive.IContactPhotoResultCallbackWarningEnum = IContactPhotoResultCallbackWarningEnum;
    /**
     *  Callback IContactPhotoResultCallback control dictionary.
     */
    var registeredIContactPhotoResultCallback = new Dictionary([]);
    /**
     *  Callback IContactPhotoResultCallback onError/onWarning/onResult handlers.
     */
    function handleIContactPhotoResultCallbackError(id, error) {
        var callback = registeredIContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactPhotoResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIContactPhotoResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactPhotoResultCallbackError = handleIContactPhotoResultCallbackError;
    function handleIContactPhotoResultCallbackResult(id, contactPhoto) {
        var callback = registeredIContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactPhotoResultCallback dictionary.");
        }
        else {
            callback.onResult(contactPhoto);
            registeredIContactPhotoResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactPhotoResultCallbackResult = handleIContactPhotoResultCallbackResult;
    function handleIContactPhotoResultCallbackWarning(id, contactPhoto, warning) {
        var callback = registeredIContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactPhotoResultCallback dictionary.");
        }
        else {
            callback.onWarning(contactPhoto, warning);
            registeredIContactPhotoResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactPhotoResultCallbackWarning = handleIContactPhotoResultCallbackWarning;
    /**
     *  Callback IContactPhotoResultCallback implementation.
     */
    var ContactPhotoResultCallback = (function () {
        function ContactPhotoResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        ContactPhotoResultCallback.prototype.toString = function () {
            return "ContactPhotoResultCallback{" + this.id + "}";
        };
        ContactPhotoResultCallback.prototype.getId = function () {
            return this.id;
        };
        ContactPhotoResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The ContactPhotoResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ContactPhotoResultCallback.prototype.onResult = function (contactPhoto) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The ContactPhotoResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(contactPhoto);
            }
        };
        ContactPhotoResultCallback.prototype.onWarning = function (contactPhoto, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The ContactPhotoResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(contactPhoto, warning);
            }
        };
        ContactPhotoResultCallback.getReflection = function () {
            /** Fields of ContactPhotoResultCallback **/
            var _fields = new Array();
            /** Methods of ContactPhotoResultCallback **/
            var _methods = new Array();
            /** Method onError of ContactPhotoResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'ContactPhotoResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'ContactPhotoResultCallback onError', _params_onError, null));
            /** Method onWarning of ContactPhotoResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('contactPhoto', 'ContactPhotoResultCallback onWarning contactPhoto', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'ContactPhotoResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'ContactPhotoResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of ContactPhotoResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('contactPhoto', 'ContactPhotoResultCallback onResult contactPhoto', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'ContactPhotoResultCallback onResult', _params_onResult, null));
            /** Class description of IContactPhotoResultCallback **/
            var clazz = new ReflectionClass('ContactPhotoResultCallback', 'Listener/Callback class ContactPhotoResultCallback', 'ContactPhotoResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactPhotoResultCallback;
    })();
    Adaptive.ContactPhotoResultCallback = ContactPhotoResultCallback;
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
        ICapabilitiesButtonEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Button
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
        ICapabilitiesCommunicationEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Communication
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
        ICapabilitiesDataEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Data
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
        ICapabilitiesMediaEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Media
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
        ICapabilitiesNetEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Net
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
        ICapabilitiesNotificationEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Notification
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
        ICapabilitiesSensorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Sensor
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
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasButtonSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasButtonSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasButtonSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasCommunicationSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasCommunicationSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasCommunicationSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasCommunicationSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasDataSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasDataSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasDataSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasDataSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasMediaSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasMediaSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasMediaSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasMediaSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasNetSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasNetSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasNetSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasNetSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasNotificationSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasNotificationSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasNotificationSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasNotificationSupport");
                return null;
            }
        };
        CapabilitiesBridge.prototype.hasSensorSupport = function (type) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/ICapabilities/hasSensorSupport", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { type: type } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ICapabilities.hasSensorSupport incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ICapabilities.hasSensorSupport");
                return null;
            }
        };
        CapabilitiesBridge.getReflection = function () {
            /** Fields of Capabilities **/
            var _fields = new Array();
            /** Methods of Capabilities **/
            var _methods = new Array();
            /** Method hasSensorSupport of Capabilities **/
            var _params_hasSensorSupport = new Array();
            _params_hasSensorSupport.push(new ReflectionParameter('type', 'Capabilities hasSensorSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasSensorSupport', 'Capabilities hasSensorSupport', _params_hasSensorSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasCommunicationSupport of Capabilities **/
            var _params_hasCommunicationSupport = new Array();
            _params_hasCommunicationSupport.push(new ReflectionParameter('type', 'Capabilities hasCommunicationSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasCommunicationSupport', 'Capabilities hasCommunicationSupport', _params_hasCommunicationSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasDataSupport of Capabilities **/
            var _params_hasDataSupport = new Array();
            _params_hasDataSupport.push(new ReflectionParameter('type', 'Capabilities hasDataSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasDataSupport', 'Capabilities hasDataSupport', _params_hasDataSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasMediaSupport of Capabilities **/
            var _params_hasMediaSupport = new Array();
            _params_hasMediaSupport.push(new ReflectionParameter('type', 'Capabilities hasMediaSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasMediaSupport', 'Capabilities hasMediaSupport', _params_hasMediaSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasNetSupport of Capabilities **/
            var _params_hasNetSupport = new Array();
            _params_hasNetSupport.push(new ReflectionParameter('type', 'Capabilities hasNetSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasNetSupport', 'Capabilities hasNetSupport', _params_hasNetSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasNotificationSupport of Capabilities **/
            var _params_hasNotificationSupport = new Array();
            _params_hasNotificationSupport.push(new ReflectionParameter('type', 'Capabilities hasNotificationSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasNotificationSupport', 'Capabilities hasNotificationSupport', _params_hasNotificationSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method hasButtonSupport of Capabilities **/
            var _params_hasButtonSupport = new Array();
            _params_hasButtonSupport.push(new ReflectionParameter('type', 'Capabilities hasButtonSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('hasButtonSupport', 'Capabilities hasButtonSupport', _params_hasButtonSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Class description of ICapabilities **/
            var clazz = new ReflectionClass('CapabilitiesBridge', 'Bridge class CapabilitiesBridge', 'CapabilitiesBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return CapabilitiesBridge;
    })();
    Adaptive.CapabilitiesBridge = CapabilitiesBridge;
    /**
     *  Service IMail implementation.
     */
    var MailBridge = (function () {
        function MailBridge() {
        }
        MailBridge.prototype.sendEmail = function (data, callback) {
            registeredIMessagingCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IMail/sendEmail?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { data: data } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIMessagingCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IMail.sendEmail");
            }
        };
        MailBridge.getReflection = function () {
            /** Fields of Mail **/
            var _fields = new Array();
            /** Methods of Mail **/
            var _methods = new Array();
            /** Method sendEmail of Mail **/
            var _params_sendEmail = new Array();
            _params_sendEmail.push(new ReflectionParameter('data', 'Mail sendEmail data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_sendEmail.push(new ReflectionParameter('callback', 'Mail sendEmail callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('sendEmail', 'Mail sendEmail', _params_sendEmail, null));
            /** Class description of IMail **/
            var clazz = new ReflectionClass('MailBridge', 'Bridge class MailBridge', 'MailBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return MailBridge;
    })();
    Adaptive.MailBridge = MailBridge;
    /**
     *  Service IGlobalization implementation.
     */
    var GlobalizationBridge = (function () {
        function GlobalizationBridge() {
        }
        GlobalizationBridge.prototype.getLocaleSupportedDescriptors = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/IGlobalization/getLocaleSupportedDescriptors", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IGlobalization.getLocaleSupportedDescriptors incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IGlobalization.getLocaleSupportedDescriptors");
                return null;
            }
        };
        GlobalizationBridge.prototype.getResourceLiteral = function (key, locale) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/IGlobalization/getResourceLiteral", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { key: key, locale: locale } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IGlobalization.getResourceLiteral incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IGlobalization.getResourceLiteral");
                return null;
            }
        };
        GlobalizationBridge.prototype.getResourceLiterals = function (locale) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/IGlobalization/getResourceLiterals", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { locale: locale } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IGlobalization.getResourceLiterals incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IGlobalization.getResourceLiterals");
                return null;
            }
        };
        GlobalizationBridge.getReflection = function () {
            /** Fields of Globalization **/
            var _fields = new Array();
            /** Methods of Globalization **/
            var _methods = new Array();
            /** Method getLocaleSupportedDescriptors of Globalization **/
            var _params_getLocaleSupportedDescriptors = new Array();
            _methods.push(new ReflectionMethod('getLocaleSupportedDescriptors', 'Globalization getLocaleSupportedDescriptors', _params_getLocaleSupportedDescriptors, new ReflectionClass('Array<Locale>', 'Array of Locale', 'Array<Locale>', null, null, Adaptive.getReflection()).setTypeComponent(Locale.getReflection())));
            /** Method getResourceLiteral of Globalization **/
            var _params_getResourceLiteral = new Array();
            _params_getResourceLiteral.push(new ReflectionParameter('key', 'Globalization getResourceLiteral key', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _params_getResourceLiteral.push(new ReflectionParameter('locale', 'Globalization getResourceLiteral locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getResourceLiteral', 'Globalization getResourceLiteral', _params_getResourceLiteral, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getResourceLiterals of Globalization **/
            var _params_getResourceLiterals = new Array();
            _params_getResourceLiterals.push(new ReflectionParameter('locale', 'Globalization getResourceLiterals locale', new ReflectionClass('Dictionary', 'Dictionary type string', 'Dictionary<any>', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getResourceLiterals', 'Globalization getResourceLiterals', _params_getResourceLiterals, new ReflectionClass('Dictionary', 'Dictionary type string', 'Dictionary<any>', null, null, Adaptive.getReflection())));
            /** Class description of IGlobalization **/
            var clazz = new ReflectionClass('GlobalizationBridge', 'Bridge class GlobalizationBridge', 'GlobalizationBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return GlobalizationBridge;
    })();
    Adaptive.GlobalizationBridge = GlobalizationBridge;
    /**
     *  Service ILifecycle implementation.
     */
    var LifecycleBridge = (function () {
        function LifecycleBridge() {
        }
        LifecycleBridge.prototype.addLifecycleListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/ILifecycle/addLifecycleListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredILifecycleListener.add("" + listener.getId(), listener);
            }
            else {
                console.error("ERROR: " + xhr.status + " ILifecycle.addLifecycleListener");
            }
        };
        LifecycleBridge.prototype.isBackground = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/ILifecycle/isBackground", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ILifecycle.isBackground incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ILifecycle.isBackground");
                return null;
            }
        };
        LifecycleBridge.prototype.removeLifecycleListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/ILifecycle/removeLifecycleListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredILifecycleListener.remove("" + listener.getId());
            }
            else {
                console.error("ERROR: " + xhr.status + " ILifecycle.removeLifecycleListener");
            }
        };
        LifecycleBridge.prototype.removeLifecycleListeners = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseApplication/ILifecycle/removeLifecycleListeners", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
                var keys = registeredIAccelerationListener.keys();
                for (var key in keys) {
                    registeredIAccelerationListener.remove(key);
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ILifecycle.removeLifecycleListeners");
            }
        };
        LifecycleBridge.getReflection = function () {
            /** Fields of Lifecycle **/
            var _fields = new Array();
            /** Methods of Lifecycle **/
            var _methods = new Array();
            /** Method removeLifecycleListeners of Lifecycle **/
            var _params_removeLifecycleListeners = new Array();
            _methods.push(new ReflectionMethod('removeLifecycleListeners', 'Lifecycle removeLifecycleListeners', _params_removeLifecycleListeners, null));
            /** Method isBackground of Lifecycle **/
            var _params_isBackground = new Array();
            _methods.push(new ReflectionMethod('isBackground', 'Lifecycle isBackground', _params_isBackground, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method addLifecycleListener of Lifecycle **/
            var _params_addLifecycleListener = new Array();
            _params_addLifecycleListener.push(new ReflectionParameter('listener', 'Lifecycle addLifecycleListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('addLifecycleListener', 'Lifecycle addLifecycleListener', _params_addLifecycleListener, null));
            /** Method removeLifecycleListener of Lifecycle **/
            var _params_removeLifecycleListener = new Array();
            _params_removeLifecycleListener.push(new ReflectionParameter('listener', 'Lifecycle removeLifecycleListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeLifecycleListener', 'Lifecycle removeLifecycleListener', _params_removeLifecycleListener, null));
            /** Class description of ILifecycle **/
            var clazz = new ReflectionClass('LifecycleBridge', 'Bridge class LifecycleBridge', 'LifecycleBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return LifecycleBridge;
    })();
    Adaptive.LifecycleBridge = LifecycleBridge;
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
        IMessagingCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IMessagingCallback Error
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
        IMessagingCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IMessagingCallback Warning
        };
        IMessagingCallbackWarningEnum.UnableToSentAll = new IMessagingCallbackWarningEnum("UnableToSentAll");
        IMessagingCallbackWarningEnum.UnableToFetchAttachment = new IMessagingCallbackWarningEnum("UnableToFetchAttachment");
        IMessagingCallbackWarningEnum.Unknown = new IMessagingCallbackWarningEnum("Unknown");
        return IMessagingCallbackWarningEnum;
    })();
    Adaptive.IMessagingCallbackWarningEnum = IMessagingCallbackWarningEnum;
    /**
     *  Callback IMessagingCallback control dictionary.
     */
    var registeredIMessagingCallback = new Dictionary([]);
    /**
     *  Callback IMessagingCallback onError/onWarning/onResult handlers.
     */
    function handleIMessagingCallbackError(id, error) {
        var callback = registeredIMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIMessagingCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIMessagingCallback.remove("" + id);
        }
    }
    Adaptive.handleIMessagingCallbackError = handleIMessagingCallbackError;
    function handleIMessagingCallbackResult(id, success) {
        var callback = registeredIMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIMessagingCallback dictionary.");
        }
        else {
            callback.onResult(success);
            registeredIMessagingCallback.remove("" + id);
        }
    }
    Adaptive.handleIMessagingCallbackResult = handleIMessagingCallbackResult;
    function handleIMessagingCallbackWarning(id, success, warning) {
        var callback = registeredIMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIMessagingCallback dictionary.");
        }
        else {
            callback.onWarning(success, warning);
            registeredIMessagingCallback.remove("" + id);
        }
    }
    Adaptive.handleIMessagingCallbackWarning = handleIMessagingCallbackWarning;
    /**
     *  Callback IMessagingCallback implementation.
     */
    var MessagingCallback = (function () {
        function MessagingCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: MessagingCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: MessagingCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: MessagingCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        MessagingCallback.prototype.toString = function () {
            return "MessagingCallback{" + this.id + "}";
        };
        MessagingCallback.prototype.getId = function () {
            return this.id;
        };
        MessagingCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The MessagingCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        MessagingCallback.prototype.onResult = function (success) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The MessagingCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(success);
            }
        };
        MessagingCallback.prototype.onWarning = function (success, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The MessagingCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(success, warning);
            }
        };
        MessagingCallback.getReflection = function () {
            /** Fields of MessagingCallback **/
            var _fields = new Array();
            /** Methods of MessagingCallback **/
            var _methods = new Array();
            /** Method onError of MessagingCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'MessagingCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'MessagingCallback onError', _params_onError, null));
            /** Method onWarning of MessagingCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('success', 'MessagingCallback onWarning success', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'MessagingCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'MessagingCallback onWarning', _params_onWarning, null));
            /** Method onResult of MessagingCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('success', 'MessagingCallback onResult success', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'MessagingCallback onResult', _params_onResult, null));
            /** Class description of IMessagingCallback **/
            var clazz = new ReflectionClass('MessagingCallback', 'Listener/Callback class MessagingCallback', 'MessagingCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return MessagingCallback;
    })();
    Adaptive.MessagingCallback = MessagingCallback;
    /**
     *  Service IAccelerometer implementation.
     */
    var AccelerometerBridge = (function () {
        function AccelerometerBridge() {
        }
        AccelerometerBridge.prototype.addAccelerationListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IAccelerometer/addAccelerationListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIAccelerationListener.add("" + listener.getId(), listener);
            }
            else {
                console.error("ERROR: " + xhr.status + " IAccelerometer.addAccelerationListener");
            }
        };
        AccelerometerBridge.prototype.removeAccelerationListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IAccelerometer/removeAccelerationListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIAccelerationListener.remove("" + listener.getId());
            }
            else {
                console.error("ERROR: " + xhr.status + " IAccelerometer.removeAccelerationListener");
            }
        };
        AccelerometerBridge.prototype.removeAccelerationListeners = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IAccelerometer/removeAccelerationListeners", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
                var keys = registeredIAccelerationListener.keys();
                for (var key in keys) {
                    registeredIAccelerationListener.remove(key);
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IAccelerometer.removeAccelerationListeners");
            }
        };
        AccelerometerBridge.getReflection = function () {
            /** Fields of Accelerometer **/
            var _fields = new Array();
            /** Methods of Accelerometer **/
            var _methods = new Array();
            /** Method addAccelerationListener of Accelerometer **/
            var _params_addAccelerationListener = new Array();
            _params_addAccelerationListener.push(new ReflectionParameter('listener', 'Accelerometer addAccelerationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('addAccelerationListener', 'Accelerometer addAccelerationListener', _params_addAccelerationListener, null));
            /** Method removeAccelerationListener of Accelerometer **/
            var _params_removeAccelerationListener = new Array();
            _params_removeAccelerationListener.push(new ReflectionParameter('listener', 'Accelerometer removeAccelerationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeAccelerationListener', 'Accelerometer removeAccelerationListener', _params_removeAccelerationListener, null));
            /** Method removeAccelerationListeners of Accelerometer **/
            var _params_removeAccelerationListeners = new Array();
            _methods.push(new ReflectionMethod('removeAccelerationListeners', 'Accelerometer removeAccelerationListeners', _params_removeAccelerationListeners, null));
            /** Class description of IAccelerometer **/
            var clazz = new ReflectionClass('AccelerometerBridge', 'Bridge class AccelerometerBridge', 'AccelerometerBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return AccelerometerBridge;
    })();
    Adaptive.AccelerometerBridge = AccelerometerBridge;
    /**
     *  Service IGeolocation implementation.
     */
    var GeolocationBridge = (function () {
        function GeolocationBridge() {
        }
        GeolocationBridge.prototype.addGeolocationListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IGeolocation/addGeolocationListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIGeolocationListener.add("" + listener.getId(), listener);
            }
            else {
                console.error("ERROR: " + xhr.status + " IGeolocation.addGeolocationListener");
            }
        };
        GeolocationBridge.prototype.removeGeolocationListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IGeolocation/removeGeolocationListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIGeolocationListener.remove("" + listener.getId());
            }
            else {
                console.error("ERROR: " + xhr.status + " IGeolocation.removeGeolocationListener");
            }
        };
        GeolocationBridge.prototype.removeGeolocationListeners = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSensor/IGeolocation/removeGeolocationListeners", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
                var keys = registeredIAccelerationListener.keys();
                for (var key in keys) {
                    registeredIAccelerationListener.remove(key);
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IGeolocation.removeGeolocationListeners");
            }
        };
        GeolocationBridge.getReflection = function () {
            /** Fields of Geolocation **/
            var _fields = new Array();
            /** Methods of Geolocation **/
            var _methods = new Array();
            /** Method removeGeolocationListener of Geolocation **/
            var _params_removeGeolocationListener = new Array();
            _params_removeGeolocationListener.push(new ReflectionParameter('listener', 'Geolocation removeGeolocationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeGeolocationListener', 'Geolocation removeGeolocationListener', _params_removeGeolocationListener, null));
            /** Method removeGeolocationListeners of Geolocation **/
            var _params_removeGeolocationListeners = new Array();
            _methods.push(new ReflectionMethod('removeGeolocationListeners', 'Geolocation removeGeolocationListeners', _params_removeGeolocationListeners, null));
            /** Method addGeolocationListener of Geolocation **/
            var _params_addGeolocationListener = new Array();
            _params_addGeolocationListener.push(new ReflectionParameter('listener', 'Geolocation addGeolocationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('addGeolocationListener', 'Geolocation addGeolocationListener', _params_addGeolocationListener, null));
            /** Class description of IGeolocation **/
            var clazz = new ReflectionClass('GeolocationBridge', 'Bridge class GeolocationBridge', 'GeolocationBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return GeolocationBridge;
    })();
    Adaptive.GeolocationBridge = GeolocationBridge;
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
        IGeolocationListenerErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IGeolocationListener Error
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
        IGeolocationListenerWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IGeolocationListener Warning
        };
        IGeolocationListenerWarningEnum.HighDoP = new IGeolocationListenerWarningEnum("HighDoP");
        IGeolocationListenerWarningEnum.StaleData = new IGeolocationListenerWarningEnum("StaleData");
        IGeolocationListenerWarningEnum.Unknown = new IGeolocationListenerWarningEnum("Unknown");
        return IGeolocationListenerWarningEnum;
    })();
    Adaptive.IGeolocationListenerWarningEnum = IGeolocationListenerWarningEnum;
    /**
     *  Listener IGeolocationListener control dictionary.
     */
    var registeredIGeolocationListener = new Dictionary([]);
    /**
     *  Listener IGeolocationListener onError/onWarning/onResult handlers.
     */
    function handleIGeolocationListenerError(id, error) {
        var listener = registeredIGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIGeolocationListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleIGeolocationListenerError = handleIGeolocationListenerError;
    function handleIGeolocationListenerResult(id, geolocation) {
        var listener = registeredIGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIGeolocationListener dictionary.");
        }
        else {
            listener.onResult(geolocation);
        }
    }
    Adaptive.handleIGeolocationListenerResult = handleIGeolocationListenerResult;
    function handleIGeolocationListenerWarning(id, geolocation, warning) {
        var listener = registeredIGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIGeolocationListener dictionary.");
        }
        else {
            listener.onWarning(geolocation, warning);
        }
    }
    Adaptive.handleIGeolocationListenerWarning = handleIGeolocationListenerWarning;
    /**
     *  Listener IGeolocationListener implementation.
     */
    var GeolocationListener = (function () {
        function GeolocationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: GeolocationListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: GeolocationListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: GeolocationListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        GeolocationListener.prototype.toString = function () {
            return "GeolocationListener{" + this.id + "}";
        };
        GeolocationListener.prototype.getId = function () {
            return this.id;
        };
        GeolocationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The GeolocationListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        GeolocationListener.prototype.onResult = function (geolocation) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The GeolocationListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(geolocation);
            }
        };
        GeolocationListener.prototype.onWarning = function (geolocation, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The GeolocationListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(geolocation, warning);
            }
        };
        GeolocationListener.getReflection = function () {
            /** Fields of GeolocationListener **/
            var _fields = new Array();
            /** Methods of GeolocationListener **/
            var _methods = new Array();
            /** Method onError of GeolocationListener **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'GeolocationListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'GeolocationListener onError', _params_onError, null));
            /** Method onWarning of GeolocationListener **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('geolocation', 'GeolocationListener onWarning geolocation', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'GeolocationListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'GeolocationListener onWarning', _params_onWarning, null));
            /** Method onResult of GeolocationListener **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('geolocation', 'GeolocationListener onResult geolocation', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'GeolocationListener onResult', _params_onResult, null));
            /** Class description of IGeolocationListener **/
            var clazz = new ReflectionClass('GeolocationListener', 'Listener/Callback class GeolocationListener', 'GeolocationListener', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return GeolocationListener;
    })();
    Adaptive.GeolocationListener = GeolocationListener;
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
        IContactResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContactResultCallback Error
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
        IContactResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContactResultCallback Warning
        };
        IContactResultCallbackWarningEnum.LimitExceeded = new IContactResultCallbackWarningEnum("LimitExceeded");
        IContactResultCallbackWarningEnum.No_Matches = new IContactResultCallbackWarningEnum("No_Matches");
        IContactResultCallbackWarningEnum.Unknown = new IContactResultCallbackWarningEnum("Unknown");
        return IContactResultCallbackWarningEnum;
    })();
    Adaptive.IContactResultCallbackWarningEnum = IContactResultCallbackWarningEnum;
    /**
     *  Callback IContactResultCallback control dictionary.
     */
    var registeredIContactResultCallback = new Dictionary([]);
    /**
     *  Callback IContactResultCallback onError/onWarning/onResult handlers.
     */
    function handleIContactResultCallbackError(id, error) {
        var callback = registeredIContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIContactResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactResultCallbackError = handleIContactResultCallbackError;
    function handleIContactResultCallbackResult(id, contacts) {
        var callback = registeredIContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactResultCallback dictionary.");
        }
        else {
            callback.onResult(contacts);
            registeredIContactResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactResultCallbackResult = handleIContactResultCallbackResult;
    function handleIContactResultCallbackWarning(id, contacts, warning) {
        var callback = registeredIContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIContactResultCallback dictionary.");
        }
        else {
            callback.onWarning(contacts, warning);
            registeredIContactResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIContactResultCallbackWarning = handleIContactResultCallbackWarning;
    /**
     *  Callback IContactResultCallback implementation.
     */
    var ContactResultCallback = (function () {
        function ContactResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: ContactResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: ContactResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: ContactResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        ContactResultCallback.prototype.toString = function () {
            return "ContactResultCallback{" + this.id + "}";
        };
        ContactResultCallback.prototype.getId = function () {
            return this.id;
        };
        ContactResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The ContactResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ContactResultCallback.prototype.onResult = function (contacts) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The ContactResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(contacts);
            }
        };
        ContactResultCallback.prototype.onWarning = function (contacts, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The ContactResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(contacts, warning);
            }
        };
        ContactResultCallback.getReflection = function () {
            /** Fields of ContactResultCallback **/
            var _fields = new Array();
            /** Methods of ContactResultCallback **/
            var _methods = new Array();
            /** Method onError of ContactResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'ContactResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'ContactResultCallback onError', _params_onError, null));
            /** Method onWarning of ContactResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('contacts', 'ContactResultCallback onWarning contacts', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'ContactResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'ContactResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of ContactResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('contacts', 'ContactResultCallback onResult contacts', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'ContactResultCallback onResult', _params_onResult, null));
            /** Class description of IContactResultCallback **/
            var clazz = new ReflectionClass('ContactResultCallback', 'Listener/Callback class ContactResultCallback', 'ContactResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactResultCallback;
    })();
    Adaptive.ContactResultCallback = ContactResultCallback;
    /**
     *  Service IMessaging implementation.
     */
    var MessagingBridge = (function () {
        function MessagingBridge() {
        }
        MessagingBridge.prototype.sendSMS = function (number, text, callback) {
            registeredIMessagingCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IMessaging/sendSMS?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { number: number, text: text } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIMessagingCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IMessaging.sendSMS");
            }
        };
        MessagingBridge.getReflection = function () {
            /** Fields of Messaging **/
            var _fields = new Array();
            /** Methods of Messaging **/
            var _methods = new Array();
            /** Method sendSMS of Messaging **/
            var _params_sendSMS = new Array();
            _params_sendSMS.push(new ReflectionParameter('number', 'Messaging sendSMS number', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_sendSMS.push(new ReflectionParameter('text', 'Messaging sendSMS text', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_sendSMS.push(new ReflectionParameter('callback', 'Messaging sendSMS callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('sendSMS', 'Messaging sendSMS', _params_sendSMS, null));
            /** Class description of IMessaging **/
            var clazz = new ReflectionClass('MessagingBridge', 'Bridge class MessagingBridge', 'MessagingBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return MessagingBridge;
    })();
    Adaptive.MessagingBridge = MessagingBridge;
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
        IFileResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileResultCallback Error
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
        IFileResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileResultCallback Warning
        };
        IFileResultCallbackWarningEnum.SourceNotDeleted = new IFileResultCallbackWarningEnum("SourceNotDeleted");
        IFileResultCallbackWarningEnum.RootDirectory = new IFileResultCallbackWarningEnum("RootDirectory");
        IFileResultCallbackWarningEnum.Unknown = new IFileResultCallbackWarningEnum("Unknown");
        return IFileResultCallbackWarningEnum;
    })();
    Adaptive.IFileResultCallbackWarningEnum = IFileResultCallbackWarningEnum;
    /**
     *  Callback IFileResultCallback control dictionary.
     */
    var registeredIFileResultCallback = new Dictionary([]);
    /**
     *  Callback IFileResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileResultCallbackError(id, error) {
        var callback = registeredIFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIFileResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileResultCallbackError = handleIFileResultCallbackError;
    function handleIFileResultCallbackResult(id, storageFile) {
        var callback = registeredIFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileResultCallback dictionary.");
        }
        else {
            callback.onResult(storageFile);
            registeredIFileResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileResultCallbackResult = handleIFileResultCallbackResult;
    function handleIFileResultCallbackWarning(id, sourceFile, destinationFile, warning) {
        var callback = registeredIFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileResultCallback dictionary.");
        }
        else {
            callback.onWarning(sourceFile, destinationFile, warning);
            registeredIFileResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileResultCallbackWarning = handleIFileResultCallbackWarning;
    /**
     *  Callback IFileResultCallback implementation.
     */
    var FileResultCallback = (function () {
        function FileResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: FileResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: FileResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: FileResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        FileResultCallback.prototype.toString = function () {
            return "FileResultCallback{" + this.id + "}";
        };
        FileResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The FileResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileResultCallback.prototype.onResult = function (storageFile) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The FileResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(storageFile);
            }
        };
        FileResultCallback.prototype.onWarning = function (sourceFile, destinationFile, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The FileResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(sourceFile, destinationFile, warning);
            }
        };
        FileResultCallback.getReflection = function () {
            /** Fields of FileResultCallback **/
            var _fields = new Array();
            /** Methods of FileResultCallback **/
            var _methods = new Array();
            /** Method onError of FileResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'FileResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'FileResultCallback onError', _params_onError, null));
            /** Method onWarning of FileResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('sourceFile', 'FileResultCallback onWarning sourceFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('destinationFile', 'FileResultCallback onWarning destinationFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'FileResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'FileResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of FileResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('storageFile', 'FileResultCallback onResult storageFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'FileResultCallback onResult', _params_onResult, null));
            /** Class description of IFileResultCallback **/
            var clazz = new ReflectionClass('FileResultCallback', 'Listener/Callback class FileResultCallback', 'FileResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FileResultCallback;
    })();
    Adaptive.FileResultCallback = FileResultCallback;
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
        IFileListResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileListResultCallback Error
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
        IFileListResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileListResultCallback Warning
        };
        IFileListResultCallbackWarningEnum.PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
        IFileListResultCallbackWarningEnum.Unknown = new IFileListResultCallbackWarningEnum("Unknown");
        return IFileListResultCallbackWarningEnum;
    })();
    Adaptive.IFileListResultCallbackWarningEnum = IFileListResultCallbackWarningEnum;
    /**
     *  Callback IFileListResultCallback control dictionary.
     */
    var registeredIFileListResultCallback = new Dictionary([]);
    /**
     *  Callback IFileListResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileListResultCallbackError(id, error) {
        var callback = registeredIFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileListResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIFileListResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileListResultCallbackError = handleIFileListResultCallbackError;
    function handleIFileListResultCallbackResult(id, files) {
        var callback = registeredIFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileListResultCallback dictionary.");
        }
        else {
            callback.onResult(files);
            registeredIFileListResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileListResultCallbackResult = handleIFileListResultCallbackResult;
    function handleIFileListResultCallbackWarning(id, files, warning) {
        var callback = registeredIFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileListResultCallback dictionary.");
        }
        else {
            callback.onWarning(files, warning);
            registeredIFileListResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileListResultCallbackWarning = handleIFileListResultCallbackWarning;
    /**
     *  Callback IFileListResultCallback implementation.
     */
    var FileListResultCallback = (function () {
        function FileListResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: FileListResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: FileListResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: FileListResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        FileListResultCallback.prototype.toString = function () {
            return "FileListResultCallback{" + this.id + "}";
        };
        FileListResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileListResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The FileListResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileListResultCallback.prototype.onResult = function (files) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The FileListResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(files);
            }
        };
        FileListResultCallback.prototype.onWarning = function (files, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The FileListResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(files, warning);
            }
        };
        FileListResultCallback.getReflection = function () {
            /** Fields of FileListResultCallback **/
            var _fields = new Array();
            /** Methods of FileListResultCallback **/
            var _methods = new Array();
            /** Method onError of FileListResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'FileListResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'FileListResultCallback onError', _params_onError, null));
            /** Method onWarning of FileListResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('files', 'FileListResultCallback onWarning files', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'FileListResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'FileListResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of FileListResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('files', 'FileListResultCallback onResult files', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'FileListResultCallback onResult', _params_onResult, null));
            /** Class description of IFileListResultCallback **/
            var clazz = new ReflectionClass('FileListResultCallback', 'Listener/Callback class FileListResultCallback', 'FileListResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FileListResultCallback;
    })();
    Adaptive.FileListResultCallback = FileListResultCallback;
    /**
     *  Service IRuntime implementation.
     */
    var RuntimeBridge = (function () {
        function RuntimeBridge() {
        }
        RuntimeBridge.prototype.dismissApplication = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IRuntime/dismissApplication", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " IRuntime.dismissApplication");
            }
        };
        RuntimeBridge.prototype.dismissSplashScreen = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IRuntime/dismissSplashScreen", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IRuntime.dismissSplashScreen incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IRuntime.dismissSplashScreen");
                return null;
            }
        };
        RuntimeBridge.getReflection = function () {
            /** Fields of Runtime **/
            var _fields = new Array();
            /** Methods of Runtime **/
            var _methods = new Array();
            /** Method dismissApplication of Runtime **/
            var _params_dismissApplication = new Array();
            _methods.push(new ReflectionMethod('dismissApplication', 'Runtime dismissApplication', _params_dismissApplication, null));
            /** Method dismissSplashScreen of Runtime **/
            var _params_dismissSplashScreen = new Array();
            _methods.push(new ReflectionMethod('dismissSplashScreen', 'Runtime dismissSplashScreen', _params_dismissSplashScreen, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Class description of IRuntime **/
            var clazz = new ReflectionClass('RuntimeBridge', 'Bridge class RuntimeBridge', 'RuntimeBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return RuntimeBridge;
    })();
    Adaptive.RuntimeBridge = RuntimeBridge;
    /**
     *  Service ISession implementation.
     */
    var SessionBridge = (function () {
        function SessionBridge() {
        }
        SessionBridge.prototype.getAttribute = function (name) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/getAttribute", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { name: name } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ISession.getAttribute incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.getAttribute");
                return null;
            }
        };
        SessionBridge.prototype.getAttributes = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/getAttributes", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ISession.getAttributes incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.getAttributes");
                return null;
            }
        };
        SessionBridge.prototype.getCookies = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/getCookies", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ISession.getCookies incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.getCookies");
                return null;
            }
        };
        SessionBridge.prototype.listAttributeNames = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/listAttributeNames", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ISession.listAttributeNames incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.listAttributeNames");
                return null;
            }
        };
        SessionBridge.prototype.removeAttribute = function (name) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/removeAttribute", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { name: name } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.removeAttribute");
            }
        };
        SessionBridge.prototype.removeAttributes = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/removeAttributes", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.removeAttributes");
            }
        };
        SessionBridge.prototype.removeCookie = function (cookie) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/removeCookie", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { cookie: cookie } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.removeCookie");
            }
        };
        SessionBridge.prototype.removeCookies = function (cookies) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/removeCookies", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { cookies: cookies } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.removeCookies");
            }
        };
        SessionBridge.prototype.setAttribute = function (name, value) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/setAttribute", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { name: name, value: value } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.setAttribute");
            }
        };
        SessionBridge.prototype.setCookie = function (cookie) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/setCookie", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { cookie: cookie } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.setCookie");
            }
        };
        SessionBridge.prototype.setCookies = function (cookies) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ISession/setCookies", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { cookies: cookies } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " ISession.setCookies");
            }
        };
        SessionBridge.getReflection = function () {
            /** Fields of Session **/
            var _fields = new Array();
            /** Methods of Session **/
            var _methods = new Array();
            /** Method getAttributes of Session **/
            var _params_getAttributes = new Array();
            _methods.push(new ReflectionMethod('getAttributes', 'Session getAttributes', _params_getAttributes, new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));
            /** Method setAttribute of Session **/
            var _params_setAttribute = new Array();
            _params_setAttribute.push(new ReflectionParameter('name', 'Session setAttribute name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_setAttribute.push(new ReflectionParameter('value', 'Session setAttribute value', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setAttribute', 'Session setAttribute', _params_setAttribute, null));
            /** Method getAttribute of Session **/
            var _params_getAttribute = new Array();
            _params_getAttribute.push(new ReflectionParameter('name', 'Session getAttribute name', new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getAttribute', 'Session getAttribute', _params_getAttribute, new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection())));
            /** Method setCookies of Session **/
            var _params_setCookies = new Array();
            _params_setCookies.push(new ReflectionParameter('cookies', 'Session setCookies cookies', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCookies', 'Session setCookies', _params_setCookies, null));
            /** Method setCookie of Session **/
            var _params_setCookie = new Array();
            _params_setCookie.push(new ReflectionParameter('cookie', 'Session setCookie cookie', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCookie', 'Session setCookie', _params_setCookie, null));
            /** Method removeCookies of Session **/
            var _params_removeCookies = new Array();
            _params_removeCookies.push(new ReflectionParameter('cookies', 'Session removeCookies cookies', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeCookies', 'Session removeCookies', _params_removeCookies, null));
            /** Method removeCookie of Session **/
            var _params_removeCookie = new Array();
            _params_removeCookie.push(new ReflectionParameter('cookie', 'Session removeCookie cookie', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeCookie', 'Session removeCookie', _params_removeCookie, null));
            /** Method listAttributeNames of Session **/
            var _params_listAttributeNames = new Array();
            _methods.push(new ReflectionMethod('listAttributeNames', 'Session listAttributeNames', _params_listAttributeNames, new ReflectionClass('Array<string>', 'Array of string', 'Array<string>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection()))));
            /** Method removeAttribute of Session **/
            var _params_removeAttribute = new Array();
            _params_removeAttribute.push(new ReflectionParameter('name', 'Session removeAttribute name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeAttribute', 'Session removeAttribute', _params_removeAttribute, null));
            /** Method removeAttributes of Session **/
            var _params_removeAttributes = new Array();
            _methods.push(new ReflectionMethod('removeAttributes', 'Session removeAttributes', _params_removeAttributes, null));
            /** Method getCookies of Session **/
            var _params_getCookies = new Array();
            _methods.push(new ReflectionMethod('getCookies', 'Session getCookies', _params_getCookies, new ReflectionClass('Array<Cookie>', 'Array of Cookie', 'Array<Cookie>', null, null, Adaptive.getReflection()).setTypeComponent(Cookie.getReflection())));
            /** Class description of ISession **/
            var clazz = new ReflectionClass('SessionBridge', 'Bridge class SessionBridge', 'SessionBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return SessionBridge;
    })();
    Adaptive.SessionBridge = SessionBridge;
    /**
     *  Service IVideo implementation.
     */
    var VideoBridge = (function () {
        function VideoBridge() {
        }
        VideoBridge.prototype.playStream = function (url) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseMedia/IVideo/playStream", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { url: url } }));
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " IVideo.playStream");
            }
        };
        VideoBridge.getReflection = function () {
            /** Fields of Video **/
            var _fields = new Array();
            /** Methods of Video **/
            var _methods = new Array();
            /** Method playStream of Video **/
            var _params_playStream = new Array();
            _params_playStream.push(new ReflectionParameter('url', 'Video playStream url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('playStream', 'Video playStream', _params_playStream, null));
            /** Class description of IVideo **/
            var clazz = new ReflectionClass('VideoBridge', 'Bridge class VideoBridge', 'VideoBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return VideoBridge;
    })();
    Adaptive.VideoBridge = VideoBridge;
    /**
     *  Service IBrowser implementation.
     */
    var BrowserBridge = (function () {
        function BrowserBridge() {
        }
        BrowserBridge.prototype.openBrowser = function (url, title, buttonText) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseUI/IBrowser/openBrowser", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { url: url, title: title, buttonText: buttonText } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IBrowser.openBrowser incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IBrowser.openBrowser");
                return null;
            }
        };
        BrowserBridge.getReflection = function () {
            /** Fields of Browser **/
            var _fields = new Array();
            /** Methods of Browser **/
            var _methods = new Array();
            /** Method openBrowser of Browser **/
            var _params_openBrowser = new Array();
            _params_openBrowser.push(new ReflectionParameter('url', 'Browser openBrowser url', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_openBrowser.push(new ReflectionParameter('title', 'Browser openBrowser title', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_openBrowser.push(new ReflectionParameter('buttonText', 'Browser openBrowser buttonText', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('openBrowser', 'Browser openBrowser', _params_openBrowser, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Class description of IBrowser **/
            var clazz = new ReflectionClass('BrowserBridge', 'Bridge class BrowserBridge', 'BrowserBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return BrowserBridge;
    })();
    Adaptive.BrowserBridge = BrowserBridge;
    /**
     *  Service IDevice implementation.
     */
    var DeviceBridge = (function () {
        function DeviceBridge() {
        }
        DeviceBridge.prototype.addButtonListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IDevice/addButtonListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIButtonListener.add("" + listener.getId(), listener);
            }
            else {
                console.error("ERROR: " + xhr.status + " IDevice.addButtonListener");
            }
        };
        DeviceBridge.prototype.getDeviceInfo = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IDevice/getDeviceInfo", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IDevice.getDeviceInfo incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IDevice.getDeviceInfo");
                return null;
            }
        };
        DeviceBridge.prototype.getLocaleCurrent = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IDevice/getLocaleCurrent", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IDevice.getLocaleCurrent incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IDevice.getLocaleCurrent");
                return null;
            }
        };
        DeviceBridge.prototype.removeButtonListener = function (listener) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IDevice/removeButtonListener?id=" + listener.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // Listeners only require id included in URL param.
            if (xhr.status == 200) {
                registeredIButtonListener.remove("" + listener.getId());
            }
            else {
                console.error("ERROR: " + xhr.status + " IDevice.removeButtonListener");
            }
        };
        DeviceBridge.prototype.removeButtonListeners = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IDevice/removeButtonListeners", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(); // No parameters.
            if (xhr.status == 200) {
                var keys = registeredIAccelerationListener.keys();
                for (var key in keys) {
                    registeredIAccelerationListener.remove(key);
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IDevice.removeButtonListeners");
            }
        };
        DeviceBridge.getReflection = function () {
            /** Fields of Device **/
            var _fields = new Array();
            /** Methods of Device **/
            var _methods = new Array();
            /** Method getDeviceInfo of Device **/
            var _params_getDeviceInfo = new Array();
            _methods.push(new ReflectionMethod('getDeviceInfo', 'Device getDeviceInfo', _params_getDeviceInfo, DeviceInfo.getReflection()));
            /** Method getLocaleCurrent of Device **/
            var _params_getLocaleCurrent = new Array();
            _methods.push(new ReflectionMethod('getLocaleCurrent', 'Device getLocaleCurrent', _params_getLocaleCurrent, Locale.getReflection()));
            /** Method addButtonListener of Device **/
            var _params_addButtonListener = new Array();
            _params_addButtonListener.push(new ReflectionParameter('listener', 'Device addButtonListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('addButtonListener', 'Device addButtonListener', _params_addButtonListener, null));
            /** Method removeButtonListener of Device **/
            var _params_removeButtonListener = new Array();
            _params_removeButtonListener.push(new ReflectionParameter('listener', 'Device removeButtonListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('removeButtonListener', 'Device removeButtonListener', _params_removeButtonListener, null));
            /** Method removeButtonListeners of Device **/
            var _params_removeButtonListeners = new Array();
            _methods.push(new ReflectionMethod('removeButtonListeners', 'Device removeButtonListeners', _params_removeButtonListeners, null));
            /** Class description of IDevice **/
            var clazz = new ReflectionClass('DeviceBridge', 'Bridge class DeviceBridge', 'DeviceBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return DeviceBridge;
    })();
    Adaptive.DeviceBridge = DeviceBridge;
    /**
     *  Service IDatabase implementation.
     */
    var DatabaseBridge = (function () {
        function DatabaseBridge() {
        }
        DatabaseBridge.prototype.createDatabase = function (database, callback) {
            registeredIDatabaseResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/createDatabase?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIDatabaseResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.createDatabase");
            }
        };
        DatabaseBridge.prototype.createTable = function (database, table, callback) {
            registeredITableResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/createTable?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, table: table } }));
            if (xhr.status == 200) {
            }
            else {
                registeredITableResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.createTable");
            }
        };
        DatabaseBridge.prototype.deleteDatabase = function (database, callback) {
            registeredIDatabaseResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/deleteDatabase?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIDatabaseResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.deleteDatabase");
            }
        };
        DatabaseBridge.prototype.deleteTable = function (database, table, callback) {
            registeredITableResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/deleteTable?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, table: table } }));
            if (xhr.status == 200) {
            }
            else {
                registeredITableResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.deleteTable");
            }
        };
        DatabaseBridge.prototype.executeSqlQuery = function (database, query, replacements, callback) {
            registeredITableResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/executeSqlQuery?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, query: query, replacements: replacements } }));
            if (xhr.status == 200) {
            }
            else {
                registeredITableResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.executeSqlQuery");
            }
        };
        DatabaseBridge.prototype.executeSqlStatement = function (database, statement, replacements, callback) {
            registeredITableResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/executeSqlStatement?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, statement: statement, replacements: replacements } }));
            if (xhr.status == 200) {
            }
            else {
                registeredITableResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.executeSqlStatement");
            }
        };
        DatabaseBridge.prototype.executeSqlTransactions = function (database, statements, rollbackFlag, callback) {
            registeredITableResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/executeSqlTransactions?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, statements: statements, rollbackFlag: rollbackFlag } }));
            if (xhr.status == 200) {
            }
            else {
                registeredITableResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IDatabase.executeSqlTransactions");
            }
        };
        DatabaseBridge.prototype.existsDatabase = function (database) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/existsDatabase", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IDatabase.existsDatabase incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IDatabase.existsDatabase");
                return null;
            }
        };
        DatabaseBridge.prototype.existsTable = function (database, table) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IDatabase/existsTable", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { database: database, table: table } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IDatabase.existsTable incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IDatabase.existsTable");
                return null;
            }
        };
        DatabaseBridge.getReflection = function () {
            /** Fields of Database **/
            var _fields = new Array();
            /** Methods of Database **/
            var _methods = new Array();
            /** Method createDatabase of Database **/
            var _params_createDatabase = new Array();
            _params_createDatabase.push(new ReflectionParameter('database', 'Database createDatabase database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createDatabase.push(new ReflectionParameter('callback', 'Database createDatabase callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('createDatabase', 'Database createDatabase', _params_createDatabase, null));
            /** Method deleteDatabase of Database **/
            var _params_deleteDatabase = new Array();
            _params_deleteDatabase.push(new ReflectionParameter('database', 'Database deleteDatabase database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_deleteDatabase.push(new ReflectionParameter('callback', 'Database deleteDatabase callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('deleteDatabase', 'Database deleteDatabase', _params_deleteDatabase, null));
            /** Method existsDatabase of Database **/
            var _params_existsDatabase = new Array();
            _params_existsDatabase.push(new ReflectionParameter('database', 'Database existsDatabase database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('existsDatabase', 'Database existsDatabase', _params_existsDatabase, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method deleteTable of Database **/
            var _params_deleteTable = new Array();
            _params_deleteTable.push(new ReflectionParameter('database', 'Database deleteTable database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_deleteTable.push(new ReflectionParameter('table', 'Database deleteTable table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_deleteTable.push(new ReflectionParameter('callback', 'Database deleteTable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('deleteTable', 'Database deleteTable', _params_deleteTable, null));
            /** Method existsTable of Database **/
            var _params_existsTable = new Array();
            _params_existsTable.push(new ReflectionParameter('database', 'Database existsTable database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_existsTable.push(new ReflectionParameter('table', 'Database existsTable table', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('existsTable', 'Database existsTable', _params_existsTable, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method executeSqlQuery of Database **/
            var _params_executeSqlQuery = new Array();
            _params_executeSqlQuery.push(new ReflectionParameter('database', 'Database executeSqlQuery database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlQuery.push(new ReflectionParameter('query', 'Database executeSqlQuery query', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlQuery.push(new ReflectionParameter('replacements', 'Database executeSqlQuery replacements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlQuery.push(new ReflectionParameter('callback', 'Database executeSqlQuery callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('executeSqlQuery', 'Database executeSqlQuery', _params_executeSqlQuery, null));
            /** Method executeSqlStatement of Database **/
            var _params_executeSqlStatement = new Array();
            _params_executeSqlStatement.push(new ReflectionParameter('database', 'Database executeSqlStatement database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlStatement.push(new ReflectionParameter('statement', 'Database executeSqlStatement statement', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlStatement.push(new ReflectionParameter('replacements', 'Database executeSqlStatement replacements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlStatement.push(new ReflectionParameter('callback', 'Database executeSqlStatement callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('executeSqlStatement', 'Database executeSqlStatement', _params_executeSqlStatement, null));
            /** Method executeSqlTransactions of Database **/
            var _params_executeSqlTransactions = new Array();
            _params_executeSqlTransactions.push(new ReflectionParameter('database', 'Database executeSqlTransactions database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlTransactions.push(new ReflectionParameter('statements', 'Database executeSqlTransactions statements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlTransactions.push(new ReflectionParameter('rollbackFlag', 'Database executeSqlTransactions rollbackFlag', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_executeSqlTransactions.push(new ReflectionParameter('callback', 'Database executeSqlTransactions callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('executeSqlTransactions', 'Database executeSqlTransactions', _params_executeSqlTransactions, null));
            /** Method createTable of Database **/
            var _params_createTable = new Array();
            _params_createTable.push(new ReflectionParameter('database', 'Database createTable database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createTable.push(new ReflectionParameter('table', 'Database createTable table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createTable.push(new ReflectionParameter('callback', 'Database createTable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('createTable', 'Database createTable', _params_createTable, null));
            /** Class description of IDatabase **/
            var clazz = new ReflectionClass('DatabaseBridge', 'Bridge class DatabaseBridge', 'DatabaseBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return DatabaseBridge;
    })();
    Adaptive.DatabaseBridge = DatabaseBridge;
    /**
     *  Service ISecurity implementation.
     */
    var SecurityBridge = (function () {
        function SecurityBridge() {
        }
        SecurityBridge.prototype.deleteSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            registeredISecureKVResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSecurity/ISecurity/deleteSecureKeyValuePairs?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { keys: keys, publicAccessName: publicAccessName } }));
            if (xhr.status == 200) {
            }
            else {
                registeredISecureKVResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " ISecurity.deleteSecureKeyValuePairs");
            }
        };
        SecurityBridge.prototype.getSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            registeredISecureKVResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSecurity/ISecurity/getSecureKeyValuePairs?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { keys: keys, publicAccessName: publicAccessName } }));
            if (xhr.status == 200) {
            }
            else {
                registeredISecureKVResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " ISecurity.getSecureKeyValuePairs");
            }
        };
        SecurityBridge.prototype.isDeviceModified = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSecurity/ISecurity/isDeviceModified", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ISecurity.isDeviceModified incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ISecurity.isDeviceModified");
                return null;
            }
        };
        SecurityBridge.prototype.setSecureKeyValuePairs = function (keyValues, publicAccessName, callback) {
            registeredISecureKVResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSecurity/ISecurity/setSecureKeyValuePairs?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { keyValues: keyValues, publicAccessName: publicAccessName } }));
            if (xhr.status == 200) {
            }
            else {
                registeredISecureKVResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " ISecurity.setSecureKeyValuePairs");
            }
        };
        SecurityBridge.getReflection = function () {
            /** Fields of Security **/
            var _fields = new Array();
            /** Methods of Security **/
            var _methods = new Array();
            /** Method isDeviceModified of Security **/
            var _params_isDeviceModified = new Array();
            _methods.push(new ReflectionMethod('isDeviceModified', 'Security isDeviceModified', _params_isDeviceModified, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method setSecureKeyValuePairs of Security **/
            var _params_setSecureKeyValuePairs = new Array();
            _params_setSecureKeyValuePairs.push(new ReflectionParameter('keyValues', 'Security setSecureKeyValuePairs keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_setSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security setSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_setSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security setSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSecureKeyValuePairs', 'Security setSecureKeyValuePairs', _params_setSecureKeyValuePairs, null));
            /** Method getSecureKeyValuePairs of Security **/
            var _params_getSecureKeyValuePairs = new Array();
            _params_getSecureKeyValuePairs.push(new ReflectionParameter('keys', 'Security getSecureKeyValuePairs keys', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security getSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security getSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getSecureKeyValuePairs', 'Security getSecureKeyValuePairs', _params_getSecureKeyValuePairs, null));
            /** Method deleteSecureKeyValuePairs of Security **/
            var _params_deleteSecureKeyValuePairs = new Array();
            _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('keys', 'Security deleteSecureKeyValuePairs keys', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security deleteSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security deleteSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('deleteSecureKeyValuePairs', 'Security deleteSecureKeyValuePairs', _params_deleteSecureKeyValuePairs, null));
            /** Class description of ISecurity **/
            var clazz = new ReflectionClass('SecurityBridge', 'Bridge class SecurityBridge', 'SecurityBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return SecurityBridge;
    })();
    Adaptive.SecurityBridge = SecurityBridge;
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
        ILoggingLogLevelEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ILogging LogLevel
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
     *  Enumerations for IServiceResultCallback Error
     **/
    var IServiceResultCallbackErrorEnum = (function () {
        function IServiceResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IServiceResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IServiceResultCallback Error
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
        IServiceResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IServiceResultCallback Warning
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
     *  Callback IServiceResultCallback control dictionary.
     */
    var registeredIServiceResultCallback = new Dictionary([]);
    /**
     *  Callback IServiceResultCallback onError/onWarning/onResult handlers.
     */
    function handleIServiceResultCallbackError(id, error) {
        var callback = registeredIServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIServiceResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIServiceResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIServiceResultCallbackError = handleIServiceResultCallbackError;
    function handleIServiceResultCallbackResult(id, response) {
        var callback = registeredIServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIServiceResultCallback dictionary.");
        }
        else {
            callback.onResult(response);
            registeredIServiceResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIServiceResultCallbackResult = handleIServiceResultCallbackResult;
    function handleIServiceResultCallbackWarning(id, response, warning) {
        var callback = registeredIServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIServiceResultCallback dictionary.");
        }
        else {
            callback.onWarning(response, warning);
            registeredIServiceResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIServiceResultCallbackWarning = handleIServiceResultCallbackWarning;
    /**
     *  Callback IServiceResultCallback implementation.
     */
    var ServiceResultCallback = (function () {
        function ServiceResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: ServiceResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: ServiceResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: ServiceResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        ServiceResultCallback.prototype.toString = function () {
            return "ServiceResultCallback{" + this.id + "}";
        };
        ServiceResultCallback.prototype.getId = function () {
            return this.id;
        };
        ServiceResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The ServiceResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ServiceResultCallback.prototype.onResult = function (response) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The ServiceResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(response);
            }
        };
        ServiceResultCallback.prototype.onWarning = function (response, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The ServiceResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(response, warning);
            }
        };
        ServiceResultCallback.getReflection = function () {
            /** Fields of ServiceResultCallback **/
            var _fields = new Array();
            /** Methods of ServiceResultCallback **/
            var _methods = new Array();
            /** Method onError of ServiceResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'ServiceResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'ServiceResultCallback onError', _params_onError, null));
            /** Method onWarning of ServiceResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('response', 'ServiceResultCallback onWarning response', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'ServiceResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'ServiceResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of ServiceResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('response', 'ServiceResultCallback onResult response', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'ServiceResultCallback onResult', _params_onResult, null));
            /** Class description of IServiceResultCallback **/
            var clazz = new ReflectionClass('ServiceResultCallback', 'Listener/Callback class ServiceResultCallback', 'ServiceResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ServiceResultCallback;
    })();
    Adaptive.ServiceResultCallback = ServiceResultCallback;
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
        ITelephonyStatusEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ITelephony Status
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
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/ITelephony/call", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { number: number } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: ITelephony.call incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " ITelephony.call");
                return null;
            }
        };
        TelephonyBridge.getReflection = function () {
            /** Fields of Telephony **/
            var _fields = new Array();
            /** Methods of Telephony **/
            var _methods = new Array();
            /** Method call of Telephony **/
            var _params_call = new Array();
            _params_call.push(new ReflectionParameter('number', 'Telephony call number', ITelephonyStatusEnum.getReflection()));
            _methods.push(new ReflectionMethod('call', 'Telephony call', _params_call, ITelephonyStatusEnum.getReflection()));
            /** Class description of ITelephony **/
            var clazz = new ReflectionClass('TelephonyBridge', 'Bridge class TelephonyBridge', 'TelephonyBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return TelephonyBridge;
    })();
    Adaptive.TelephonyBridge = TelephonyBridge;
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
        IAppResourceCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppResourceCallback Error
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
        IAppResourceCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAppResourceCallback Warning
        };
        IAppResourceCallbackWarningEnum.PartialContent = new IAppResourceCallbackWarningEnum("PartialContent");
        IAppResourceCallbackWarningEnum.TooLarge = new IAppResourceCallbackWarningEnum("TooLarge");
        IAppResourceCallbackWarningEnum.LinkedResource = new IAppResourceCallbackWarningEnum("LinkedResource");
        IAppResourceCallbackWarningEnum.Unknown = new IAppResourceCallbackWarningEnum("Unknown");
        return IAppResourceCallbackWarningEnum;
    })();
    Adaptive.IAppResourceCallbackWarningEnum = IAppResourceCallbackWarningEnum;
    /**
     *  Service IFileSystem implementation.
     */
    var FileSystemBridge = (function () {
        function FileSystemBridge() {
        }
        FileSystemBridge.prototype.create = function (name, callback) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/create?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { name: name } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFileSystem.create");
            }
        };
        FileSystemBridge.prototype.createWithPath = function (path, name, callback) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/createWithPath?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { path: path, name: name } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFileSystem.createWithPath");
            }
        };
        FileSystemBridge.prototype.createWithPathString = function (path, name, callback) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/createWithPathString?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { path: path, name: name } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFileSystem.createWithPathString");
            }
        };
        FileSystemBridge.prototype.getApplicationCacheFolder = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getApplicationCacheFolder", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getApplicationCacheFolder incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getApplicationCacheFolder");
                return null;
            }
        };
        FileSystemBridge.prototype.getApplicationDocumentsFolder = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getApplicationDocumentsFolder", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getApplicationDocumentsFolder incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getApplicationDocumentsFolder");
                return null;
            }
        };
        FileSystemBridge.prototype.getApplicationFolder = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getApplicationFolder", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getApplicationFolder incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getApplicationFolder");
                return null;
            }
        };
        FileSystemBridge.prototype.getPathForFile = function (file) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getPathForFile", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { file: file } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getPathForFile incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getPathForFile");
                return null;
            }
        };
        FileSystemBridge.prototype.getPathForPath = function (path) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getPathForPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { path: path } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getPathForPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getPathForPath");
                return null;
            }
        };
        FileSystemBridge.prototype.getSeparator = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/getSeparator", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.getSeparator incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.getSeparator");
                return null;
            }
        };
        FileSystemBridge.prototype.isSameFile = function (source, dest) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/isSameFile", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { source: source, dest: dest } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.isSameFile incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.isSameFile");
                return null;
            }
        };
        FileSystemBridge.prototype.isSamePath = function (source, dest) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/isSamePath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { source: source, dest: dest } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.isSamePath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.isSamePath");
                return null;
            }
        };
        FileSystemBridge.prototype.toPath = function (path) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFileSystem/toPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { path: path } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFileSystem.toPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFileSystem.toPath");
                return null;
            }
        };
        FileSystemBridge.getReflection = function () {
            /** Fields of FileSystem **/
            var _fields = new Array();
            /** Methods of FileSystem **/
            var _methods = new Array();
            /** Method toPath of FileSystem **/
            var _params_toPath = new Array();
            _params_toPath.push(new ReflectionParameter('path', 'FileSystem toPath path', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('toPath', 'FileSystem toPath', _params_toPath, FilePathBridge.getReflection()));
            /** Method getSeparator of FileSystem **/
            var _params_getSeparator = new Array();
            _methods.push(new ReflectionMethod('getSeparator', 'FileSystem getSeparator', _params_getSeparator, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method create of FileSystem **/
            var _params_create = new Array();
            _params_create.push(new ReflectionParameter('name', 'FileSystem create name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_create.push(new ReflectionParameter('callback', 'FileSystem create callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('create', 'FileSystem create', _params_create, null));
            /** Method getPathForPath of FileSystem **/
            var _params_getPathForPath = new Array();
            _params_getPathForPath.push(new ReflectionParameter('path', 'FileSystem getPathForPath path', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getPathForPath', 'FileSystem getPathForPath', _params_getPathForPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getPathForFile of FileSystem **/
            var _params_getPathForFile = new Array();
            _params_getPathForFile.push(new ReflectionParameter('file', 'FileSystem getPathForFile file', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getPathForFile', 'FileSystem getPathForFile', _params_getPathForFile, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method isSamePath of FileSystem **/
            var _params_isSamePath = new Array();
            _params_isSamePath.push(new ReflectionParameter('source', 'FileSystem isSamePath source', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_isSamePath.push(new ReflectionParameter('dest', 'FileSystem isSamePath dest', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('isSamePath', 'FileSystem isSamePath', _params_isSamePath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method createWithPathString of FileSystem **/
            var _params_createWithPathString = new Array();
            _params_createWithPathString.push(new ReflectionParameter('path', 'FileSystem createWithPathString path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPathString.push(new ReflectionParameter('name', 'FileSystem createWithPathString name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPathString.push(new ReflectionParameter('callback', 'FileSystem createWithPathString callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('createWithPathString', 'FileSystem createWithPathString', _params_createWithPathString, null));
            /** Method createWithPath of FileSystem **/
            var _params_createWithPath = new Array();
            _params_createWithPath.push(new ReflectionParameter('path', 'FileSystem createWithPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPath.push(new ReflectionParameter('name', 'FileSystem createWithPath name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPath.push(new ReflectionParameter('callback', 'FileSystem createWithPath callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('createWithPath', 'FileSystem createWithPath', _params_createWithPath, null));
            /** Method getApplicationFolder of FileSystem **/
            var _params_getApplicationFolder = new Array();
            _methods.push(new ReflectionMethod('getApplicationFolder', 'FileSystem getApplicationFolder', _params_getApplicationFolder, FilePathBridge.getReflection()));
            /** Method getApplicationCacheFolder of FileSystem **/
            var _params_getApplicationCacheFolder = new Array();
            _methods.push(new ReflectionMethod('getApplicationCacheFolder', 'FileSystem getApplicationCacheFolder', _params_getApplicationCacheFolder, FilePathBridge.getReflection()));
            /** Method getApplicationDocumentsFolder of FileSystem **/
            var _params_getApplicationDocumentsFolder = new Array();
            _methods.push(new ReflectionMethod('getApplicationDocumentsFolder', 'FileSystem getApplicationDocumentsFolder', _params_getApplicationDocumentsFolder, FilePathBridge.getReflection()));
            /** Method isSameFile of FileSystem **/
            var _params_isSameFile = new Array();
            _params_isSameFile.push(new ReflectionParameter('source', 'FileSystem isSameFile source', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_isSameFile.push(new ReflectionParameter('dest', 'FileSystem isSameFile dest', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('isSameFile', 'FileSystem isSameFile', _params_isSameFile, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Class description of IFileSystem **/
            var clazz = new ReflectionClass('FileSystemBridge', 'Bridge class FileSystemBridge', 'FileSystemBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FileSystemBridge;
    })();
    Adaptive.FileSystemBridge = FileSystemBridge;
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
        ISecureKVResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ISecureKVResultCallback Error
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
        ISecureKVResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ISecureKVResultCallback Warning
        };
        ISecureKVResultCallbackWarningEnum.EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
        ISecureKVResultCallbackWarningEnum.Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");
        return ISecureKVResultCallbackWarningEnum;
    })();
    Adaptive.ISecureKVResultCallbackWarningEnum = ISecureKVResultCallbackWarningEnum;
    /**
     *  Callback ISecureKVResultCallback control dictionary.
     */
    var registeredISecureKVResultCallback = new Dictionary([]);
    /**
     *  Callback ISecureKVResultCallback onError/onWarning/onResult handlers.
     */
    function handleISecureKVResultCallbackError(id, error) {
        var callback = registeredISecureKVResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredISecureKVResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredISecureKVResultCallback.remove("" + id);
        }
    }
    Adaptive.handleISecureKVResultCallbackError = handleISecureKVResultCallbackError;
    function handleISecureKVResultCallbackResult(id, keyValues) {
        var callback = registeredISecureKVResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredISecureKVResultCallback dictionary.");
        }
        else {
            callback.onResult(keyValues);
            registeredISecureKVResultCallback.remove("" + id);
        }
    }
    Adaptive.handleISecureKVResultCallbackResult = handleISecureKVResultCallbackResult;
    function handleISecureKVResultCallbackWarning(id, keyValues, warning) {
        var callback = registeredISecureKVResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredISecureKVResultCallback dictionary.");
        }
        else {
            callback.onWarning(keyValues, warning);
            registeredISecureKVResultCallback.remove("" + id);
        }
    }
    Adaptive.handleISecureKVResultCallbackWarning = handleISecureKVResultCallbackWarning;
    /**
     *  Callback ISecureKVResultCallback implementation.
     */
    var SecureKVResultCallback = (function () {
        function SecureKVResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: SecureKVResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: SecureKVResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: SecureKVResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        SecureKVResultCallback.prototype.toString = function () {
            return "SecureKVResultCallback{" + this.id + "}";
        };
        SecureKVResultCallback.prototype.getId = function () {
            return this.id;
        };
        SecureKVResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The SecureKVResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        SecureKVResultCallback.prototype.onResult = function (keyValues) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The SecureKVResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(keyValues);
            }
        };
        SecureKVResultCallback.prototype.onWarning = function (keyValues, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The SecureKVResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(keyValues, warning);
            }
        };
        SecureKVResultCallback.getReflection = function () {
            /** Fields of SecureKVResultCallback **/
            var _fields = new Array();
            /** Methods of SecureKVResultCallback **/
            var _methods = new Array();
            /** Method onError of SecureKVResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'SecureKVResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'SecureKVResultCallback onError', _params_onError, null));
            /** Method onWarning of SecureKVResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('keyValues', 'SecureKVResultCallback onWarning keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'SecureKVResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'SecureKVResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of SecureKVResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('keyValues', 'SecureKVResultCallback onResult keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'SecureKVResultCallback onResult', _params_onResult, null));
            /** Class description of ISecureKVResultCallback **/
            var clazz = new ReflectionClass('SecureKVResultCallback', 'Listener/Callback class SecureKVResultCallback', 'SecureKVResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return SecureKVResultCallback;
    })();
    Adaptive.SecureKVResultCallback = SecureKVResultCallback;
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
        INetworkReachabilityCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> INetworkReachabilityCallback Error
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
        INetworkReachabilityCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> INetworkReachabilityCallback Warning
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
     *  Callback INetworkReachabilityCallback control dictionary.
     */
    var registeredINetworkReachabilityCallback = new Dictionary([]);
    /**
     *  Callback INetworkReachabilityCallback onError/onWarning/onResult handlers.
     */
    function handleINetworkReachabilityCallbackError(id, error) {
        var callback = registeredINetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredINetworkReachabilityCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredINetworkReachabilityCallback.remove("" + id);
        }
    }
    Adaptive.handleINetworkReachabilityCallbackError = handleINetworkReachabilityCallbackError;
    function handleINetworkReachabilityCallbackResult(id, result) {
        var callback = registeredINetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredINetworkReachabilityCallback dictionary.");
        }
        else {
            callback.onResult(result);
            registeredINetworkReachabilityCallback.remove("" + id);
        }
    }
    Adaptive.handleINetworkReachabilityCallbackResult = handleINetworkReachabilityCallbackResult;
    function handleINetworkReachabilityCallbackWarning(id, result, warning) {
        var callback = registeredINetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredINetworkReachabilityCallback dictionary.");
        }
        else {
            callback.onWarning(result, warning);
            registeredINetworkReachabilityCallback.remove("" + id);
        }
    }
    Adaptive.handleINetworkReachabilityCallbackWarning = handleINetworkReachabilityCallbackWarning;
    /**
     *  Callback INetworkReachabilityCallback implementation.
     */
    var NetworkReachabilityCallback = (function () {
        function NetworkReachabilityCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        NetworkReachabilityCallback.prototype.toString = function () {
            return "NetworkReachabilityCallback{" + this.id + "}";
        };
        NetworkReachabilityCallback.prototype.getId = function () {
            return this.id;
        };
        NetworkReachabilityCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The NetworkReachabilityCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        NetworkReachabilityCallback.prototype.onResult = function (result) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The NetworkReachabilityCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(result);
            }
        };
        NetworkReachabilityCallback.prototype.onWarning = function (result, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The NetworkReachabilityCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(result, warning);
            }
        };
        NetworkReachabilityCallback.getReflection = function () {
            /** Fields of NetworkReachabilityCallback **/
            var _fields = new Array();
            /** Methods of NetworkReachabilityCallback **/
            var _methods = new Array();
            /** Method onError of NetworkReachabilityCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'NetworkReachabilityCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'NetworkReachabilityCallback onError', _params_onError, null));
            /** Method onWarning of NetworkReachabilityCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('result', 'NetworkReachabilityCallback onWarning result', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'NetworkReachabilityCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'NetworkReachabilityCallback onWarning', _params_onWarning, null));
            /** Method onResult of NetworkReachabilityCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('result', 'NetworkReachabilityCallback onResult result', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'NetworkReachabilityCallback onResult', _params_onResult, null));
            /** Class description of INetworkReachabilityCallback **/
            var clazz = new ReflectionClass('NetworkReachabilityCallback', 'Listener/Callback class NetworkReachabilityCallback', 'NetworkReachabilityCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return NetworkReachabilityCallback;
    })();
    Adaptive.NetworkReachabilityCallback = NetworkReachabilityCallback;
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
        IFileDataResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileDataResultCallback Error
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
        IFileDataResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IFileDataResultCallback Warning
        };
        IFileDataResultCallbackWarningEnum.ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
        IFileDataResultCallbackWarningEnum.Unknown = new IFileDataResultCallbackWarningEnum("Unknown");
        return IFileDataResultCallbackWarningEnum;
    })();
    Adaptive.IFileDataResultCallbackWarningEnum = IFileDataResultCallbackWarningEnum;
    /**
     *  Callback IFileDataResultCallback control dictionary.
     */
    var registeredIFileDataResultCallback = new Dictionary([]);
    /**
     *  Callback IFileDataResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileDataResultCallbackError(id, error) {
        var callback = registeredIFileDataResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileDataResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredIFileDataResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileDataResultCallbackError = handleIFileDataResultCallbackError;
    function handleIFileDataResultCallbackResult(id, file, data) {
        var callback = registeredIFileDataResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileDataResultCallback dictionary.");
        }
        else {
            callback.onResult(file, data);
            registeredIFileDataResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileDataResultCallbackResult = handleIFileDataResultCallbackResult;
    function handleIFileDataResultCallbackWarning(id, file, warning) {
        var callback = registeredIFileDataResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredIFileDataResultCallback dictionary.");
        }
        else {
            callback.onWarning(file, warning);
            registeredIFileDataResultCallback.remove("" + id);
        }
    }
    Adaptive.handleIFileDataResultCallbackWarning = handleIFileDataResultCallbackWarning;
    /**
     *  Callback IFileDataResultCallback implementation.
     */
    var FileDataResultCallback = (function () {
        function FileDataResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: FileDataResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: FileDataResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: FileDataResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        FileDataResultCallback.prototype.toString = function () {
            return "FileDataResultCallback{" + this.id + "}";
        };
        FileDataResultCallback.prototype.getId = function () {
            return this.id;
        };
        FileDataResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The FileDataResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        FileDataResultCallback.prototype.onResult = function (file, data) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The FileDataResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(file, data);
            }
        };
        FileDataResultCallback.prototype.onWarning = function (file, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The FileDataResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(file, warning);
            }
        };
        FileDataResultCallback.getReflection = function () {
            /** Fields of FileDataResultCallback **/
            var _fields = new Array();
            /** Methods of FileDataResultCallback **/
            var _methods = new Array();
            /** Method onError of FileDataResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'FileDataResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'FileDataResultCallback onError', _params_onError, null));
            /** Method onWarning of FileDataResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('file', 'FileDataResultCallback onWarning file', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'FileDataResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'FileDataResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of FileDataResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('file', 'FileDataResultCallback onResult file', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onResult.push(new ReflectionParameter('data', 'FileDataResultCallback onResult data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'FileDataResultCallback onResult', _params_onResult, null));
            /** Class description of IFileDataResultCallback **/
            var clazz = new ReflectionClass('FileDataResultCallback', 'Listener/Callback class FileDataResultCallback', 'FileDataResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FileDataResultCallback;
    })();
    Adaptive.FileDataResultCallback = FileDataResultCallback;
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
        IAccelerationListenerErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAccelerationListener Error
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
        IAccelerationListenerWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IAccelerationListener Warning
        };
        IAccelerationListenerWarningEnum.NeedsCalibration = new IAccelerationListenerWarningEnum("NeedsCalibration");
        IAccelerationListenerWarningEnum.Stale = new IAccelerationListenerWarningEnum("Stale");
        IAccelerationListenerWarningEnum.Unknown = new IAccelerationListenerWarningEnum("Unknown");
        return IAccelerationListenerWarningEnum;
    })();
    Adaptive.IAccelerationListenerWarningEnum = IAccelerationListenerWarningEnum;
    /**
     *  Listener IAccelerationListener control dictionary.
     */
    var registeredIAccelerationListener = new Dictionary([]);
    /**
     *  Listener IAccelerationListener onError/onWarning/onResult handlers.
     */
    function handleIAccelerationListenerError(id, error) {
        var listener = registeredIAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIAccelerationListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleIAccelerationListenerError = handleIAccelerationListenerError;
    function handleIAccelerationListenerResult(id, acceleration) {
        var listener = registeredIAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIAccelerationListener dictionary.");
        }
        else {
            listener.onResult(acceleration);
        }
    }
    Adaptive.handleIAccelerationListenerResult = handleIAccelerationListenerResult;
    function handleIAccelerationListenerWarning(id, acceleration, warning) {
        var listener = registeredIAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIAccelerationListener dictionary.");
        }
        else {
            listener.onWarning(acceleration, warning);
        }
    }
    Adaptive.handleIAccelerationListenerWarning = handleIAccelerationListenerWarning;
    /**
     *  Listener IAccelerationListener implementation.
     */
    var AccelerationListener = (function () {
        function AccelerationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: AccelerationListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: AccelerationListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: AccelerationListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        AccelerationListener.prototype.toString = function () {
            return "AccelerationListener{" + this.id + "}";
        };
        AccelerationListener.prototype.getId = function () {
            return this.id;
        };
        AccelerationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The AccelerationListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        AccelerationListener.prototype.onResult = function (acceleration) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The AccelerationListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(acceleration);
            }
        };
        AccelerationListener.prototype.onWarning = function (acceleration, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The AccelerationListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(acceleration, warning);
            }
        };
        AccelerationListener.getReflection = function () {
            /** Fields of AccelerationListener **/
            var _fields = new Array();
            /** Methods of AccelerationListener **/
            var _methods = new Array();
            /** Method onError of AccelerationListener **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'AccelerationListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'AccelerationListener onError', _params_onError, null));
            /** Method onWarning of AccelerationListener **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('acceleration', 'AccelerationListener onWarning acceleration', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'AccelerationListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'AccelerationListener onWarning', _params_onWarning, null));
            /** Method onResult of AccelerationListener **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('acceleration', 'AccelerationListener onResult acceleration', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'AccelerationListener onResult', _params_onResult, null));
            /** Class description of IAccelerationListener **/
            var clazz = new ReflectionClass('AccelerationListener', 'Listener/Callback class AccelerationListener', 'AccelerationListener', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return AccelerationListener;
    })();
    Adaptive.AccelerationListener = AccelerationListener;
    /**
     *  Service INetworkReachability implementation.
     */
    var NetworkReachabilityBridge = (function () {
        function NetworkReachabilityBridge() {
        }
        NetworkReachabilityBridge.prototype.isNetworkReachable = function (host, callback) {
            registeredINetworkReachabilityCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/INetworkReachability/isNetworkReachable?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { host: host } }));
            if (xhr.status == 200) {
            }
            else {
                registeredINetworkReachabilityCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " INetworkReachability.isNetworkReachable");
            }
        };
        NetworkReachabilityBridge.prototype.isNetworkServiceReachable = function (url, callback) {
            registeredINetworkReachabilityCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseCommunication/INetworkReachability/isNetworkServiceReachable?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { url: url } }));
            if (xhr.status == 200) {
            }
            else {
                registeredINetworkReachabilityCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " INetworkReachability.isNetworkServiceReachable");
            }
        };
        NetworkReachabilityBridge.getReflection = function () {
            /** Fields of NetworkReachability **/
            var _fields = new Array();
            /** Methods of NetworkReachability **/
            var _methods = new Array();
            /** Method isNetworkReachable of NetworkReachability **/
            var _params_isNetworkReachable = new Array();
            _params_isNetworkReachable.push(new ReflectionParameter('host', 'NetworkReachability isNetworkReachable host', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_isNetworkReachable.push(new ReflectionParameter('callback', 'NetworkReachability isNetworkReachable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('isNetworkReachable', 'NetworkReachability isNetworkReachable', _params_isNetworkReachable, null));
            /** Method isNetworkServiceReachable of NetworkReachability **/
            var _params_isNetworkServiceReachable = new Array();
            _params_isNetworkServiceReachable.push(new ReflectionParameter('url', 'NetworkReachability isNetworkServiceReachable url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_isNetworkServiceReachable.push(new ReflectionParameter('callback', 'NetworkReachability isNetworkServiceReachable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('isNetworkServiceReachable', 'NetworkReachability isNetworkServiceReachable', _params_isNetworkServiceReachable, null));
            /** Class description of INetworkReachability **/
            var clazz = new ReflectionClass('NetworkReachabilityBridge', 'Bridge class NetworkReachabilityBridge', 'NetworkReachabilityBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return NetworkReachabilityBridge;
    })();
    Adaptive.NetworkReachabilityBridge = NetworkReachabilityBridge;
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
        ILifecycleListenerErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ILifecycleListener Error
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
        ILifecycleListenerWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ILifecycleListener Warning
        };
        ILifecycleListenerWarningEnum.MemoryLow = new ILifecycleListenerWarningEnum("MemoryLow");
        ILifecycleListenerWarningEnum.BatteryLow = new ILifecycleListenerWarningEnum("BatteryLow");
        ILifecycleListenerWarningEnum.Unknown = new ILifecycleListenerWarningEnum("Unknown");
        return ILifecycleListenerWarningEnum;
    })();
    Adaptive.ILifecycleListenerWarningEnum = ILifecycleListenerWarningEnum;
    /**
     *  Listener ILifecycleListener control dictionary.
     */
    var registeredILifecycleListener = new Dictionary([]);
    /**
     *  Listener ILifecycleListener onError/onWarning/onResult handlers.
     */
    function handleILifecycleListenerError(id, error) {
        var listener = registeredILifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredILifecycleListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleILifecycleListenerError = handleILifecycleListenerError;
    function handleILifecycleListenerResult(id, lifecycle) {
        var listener = registeredILifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredILifecycleListener dictionary.");
        }
        else {
            listener.onResult(lifecycle);
        }
    }
    Adaptive.handleILifecycleListenerResult = handleILifecycleListenerResult;
    function handleILifecycleListenerWarning(id, lifecycle, warning) {
        var listener = registeredILifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredILifecycleListener dictionary.");
        }
        else {
            listener.onWarning(lifecycle, warning);
        }
    }
    Adaptive.handleILifecycleListenerWarning = handleILifecycleListenerWarning;
    /**
     *  Listener ILifecycleListener implementation.
     */
    var LifecycleListener = (function () {
        function LifecycleListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: LifecycleListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: LifecycleListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: LifecycleListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        LifecycleListener.prototype.toString = function () {
            return "LifecycleListener{" + this.id + "}";
        };
        LifecycleListener.prototype.getId = function () {
            return this.id;
        };
        LifecycleListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The LifecycleListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        LifecycleListener.prototype.onResult = function (lifecycle) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The LifecycleListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(lifecycle);
            }
        };
        LifecycleListener.prototype.onWarning = function (lifecycle, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The LifecycleListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(lifecycle, warning);
            }
        };
        LifecycleListener.getReflection = function () {
            /** Fields of LifecycleListener **/
            var _fields = new Array();
            /** Methods of LifecycleListener **/
            var _methods = new Array();
            /** Method onError of LifecycleListener **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'LifecycleListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'LifecycleListener onError', _params_onError, null));
            /** Method onWarning of LifecycleListener **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('lifecycle', 'LifecycleListener onWarning lifecycle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'LifecycleListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'LifecycleListener onWarning', _params_onWarning, null));
            /** Method onResult of LifecycleListener **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('lifecycle', 'LifecycleListener onResult lifecycle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'LifecycleListener onResult', _params_onResult, null));
            /** Class description of ILifecycleListener **/
            var clazz = new ReflectionClass('LifecycleListener', 'Listener/Callback class LifecycleListener', 'LifecycleListener', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return LifecycleListener;
    })();
    Adaptive.LifecycleListener = LifecycleListener;
    /**
     *  Service IFilePath implementation.
     */
    var FilePathBridge = (function () {
        function FilePathBridge() {
        }
        FilePathBridge.prototype.endsWith = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/endsWith", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.endsWith incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.endsWith");
                return null;
            }
        };
        FilePathBridge.prototype.endsWithPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/endsWithPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.endsWithPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.endsWithPath");
                return null;
            }
        };
        FilePathBridge.prototype.equalPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/equalPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.equalPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.equalPath");
                return null;
            }
        };
        FilePathBridge.prototype.equals = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/equals", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.equals incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.equals");
                return null;
            }
        };
        FilePathBridge.prototype.getFileName = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getFileName", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getFileName incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getFileName");
                return null;
            }
        };
        FilePathBridge.prototype.getFileSystem = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getFileSystem", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getFileSystem incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getFileSystem");
                return null;
            }
        };
        FilePathBridge.prototype.getNameAtIndex = function (index) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getNameAtIndex", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { index: index } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getNameAtIndex incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getNameAtIndex");
                return null;
            }
        };
        FilePathBridge.prototype.getNameCount = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getNameCount", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getNameCount incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getNameCount");
                return null;
            }
        };
        FilePathBridge.prototype.getParent = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getParent", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getParent incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getParent");
                return null;
            }
        };
        FilePathBridge.prototype.getRoot = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/getRoot", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.getRoot incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.getRoot");
                return null;
            }
        };
        FilePathBridge.prototype.isAbsolute = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/isAbsolute", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.isAbsolute incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.isAbsolute");
                return null;
            }
        };
        FilePathBridge.prototype.normalize = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/normalize", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.normalize incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.normalize");
                return null;
            }
        };
        FilePathBridge.prototype.relativize = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/relativize", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.relativize incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.relativize");
                return null;
            }
        };
        FilePathBridge.prototype.resolve = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/resolve", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.resolve incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.resolve");
                return null;
            }
        };
        FilePathBridge.prototype.resolvePath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/resolvePath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.resolvePath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.resolvePath");
                return null;
            }
        };
        FilePathBridge.prototype.resolveSibling = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/resolveSibling", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.resolveSibling incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.resolveSibling");
                return null;
            }
        };
        FilePathBridge.prototype.resolveSiblingPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/resolveSiblingPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.resolveSiblingPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.resolveSiblingPath");
                return null;
            }
        };
        FilePathBridge.prototype.startsWith = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/startsWith", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.startsWith incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.startsWith");
                return null;
            }
        };
        FilePathBridge.prototype.startsWithPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/startsWithPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.startsWithPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.startsWithPath");
                return null;
            }
        };
        FilePathBridge.prototype.toAbsolutePath = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/toAbsolutePath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.toAbsolutePath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.toAbsolutePath");
                return null;
            }
        };
        FilePathBridge.prototype.toFile = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/toFile", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.toFile incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.toFile");
                return null;
            }
        };
        FilePathBridge.prototype.toString = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/toString", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFilePath.toString incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFilePath.toString");
                return null;
            }
        };
        FilePathBridge.getReflection = function () {
            /** Fields of FilePath **/
            var _fields = new Array();
            /** Methods of FilePath **/
            var _methods = new Array();
            /** Method equals of FilePath **/
            var _params_equals = new Array();
            _params_equals.push(new ReflectionParameter('other', 'FilePath equals other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('equals', 'FilePath equals', _params_equals, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method toString of FilePath **/
            var _params_toString = new Array();
            _methods.push(new ReflectionMethod('toString', 'FilePath toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method startsWith of FilePath **/
            var _params_startsWith = new Array();
            _params_startsWith.push(new ReflectionParameter('other', 'FilePath startsWith other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('startsWith', 'FilePath startsWith', _params_startsWith, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method endsWith of FilePath **/
            var _params_endsWith = new Array();
            _params_endsWith.push(new ReflectionParameter('other', 'FilePath endsWith other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('endsWith', 'FilePath endsWith', _params_endsWith, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method getParent of FilePath **/
            var _params_getParent = new Array();
            _methods.push(new ReflectionMethod('getParent', 'FilePath getParent', _params_getParent, FilePathBridge.getReflection()));
            /** Method isAbsolute of FilePath **/
            var _params_isAbsolute = new Array();
            _methods.push(new ReflectionMethod('isAbsolute', 'FilePath isAbsolute', _params_isAbsolute, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method resolve of FilePath **/
            var _params_resolve = new Array();
            _params_resolve.push(new ReflectionParameter('other', 'FilePath resolve other', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('resolve', 'FilePath resolve', _params_resolve, FilePathBridge.getReflection()));
            /** Method getRoot of FilePath **/
            var _params_getRoot = new Array();
            _methods.push(new ReflectionMethod('getRoot', 'FilePath getRoot', _params_getRoot, FilePathBridge.getReflection()));
            /** Method normalize of FilePath **/
            var _params_normalize = new Array();
            _methods.push(new ReflectionMethod('normalize', 'FilePath normalize', _params_normalize, FilePathBridge.getReflection()));
            /** Method getFileSystem of FilePath **/
            var _params_getFileSystem = new Array();
            _methods.push(new ReflectionMethod('getFileSystem', 'FilePath getFileSystem', _params_getFileSystem, FileSystemBridge.getReflection()));
            /** Method getFileName of FilePath **/
            var _params_getFileName = new Array();
            _methods.push(new ReflectionMethod('getFileName', 'FilePath getFileName', _params_getFileName, FilePathBridge.getReflection()));
            /** Method getNameCount of FilePath **/
            var _params_getNameCount = new Array();
            _methods.push(new ReflectionMethod('getNameCount', 'FilePath getNameCount', _params_getNameCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method resolveSibling of FilePath **/
            var _params_resolveSibling = new Array();
            _params_resolveSibling.push(new ReflectionParameter('other', 'FilePath resolveSibling other', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('resolveSibling', 'FilePath resolveSibling', _params_resolveSibling, FilePathBridge.getReflection()));
            /** Method relativize of FilePath **/
            var _params_relativize = new Array();
            _params_relativize.push(new ReflectionParameter('other', 'FilePath relativize other', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('relativize', 'FilePath relativize', _params_relativize, FilePathBridge.getReflection()));
            /** Method toAbsolutePath of FilePath **/
            var _params_toAbsolutePath = new Array();
            _methods.push(new ReflectionMethod('toAbsolutePath', 'FilePath toAbsolutePath', _params_toAbsolutePath, FilePathBridge.getReflection()));
            /** Method toFile of FilePath **/
            var _params_toFile = new Array();
            _methods.push(new ReflectionMethod('toFile', 'FilePath toFile', _params_toFile, FileBridge.getReflection()));
            /** Method getNameAtIndex of FilePath **/
            var _params_getNameAtIndex = new Array();
            _params_getNameAtIndex.push(new ReflectionParameter('index', 'FilePath getNameAtIndex index', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getNameAtIndex', 'FilePath getNameAtIndex', _params_getNameAtIndex, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method startsWithPath of FilePath **/
            var _params_startsWithPath = new Array();
            _params_startsWithPath.push(new ReflectionParameter('other', 'FilePath startsWithPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('startsWithPath', 'FilePath startsWithPath', _params_startsWithPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method endsWithPath of FilePath **/
            var _params_endsWithPath = new Array();
            _params_endsWithPath.push(new ReflectionParameter('other', 'FilePath endsWithPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('endsWithPath', 'FilePath endsWithPath', _params_endsWithPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method resolveSiblingPath of FilePath **/
            var _params_resolveSiblingPath = new Array();
            _params_resolveSiblingPath.push(new ReflectionParameter('other', 'FilePath resolveSiblingPath other', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('resolveSiblingPath', 'FilePath resolveSiblingPath', _params_resolveSiblingPath, FilePathBridge.getReflection()));
            /** Method equalPath of FilePath **/
            var _params_equalPath = new Array();
            _params_equalPath.push(new ReflectionParameter('other', 'FilePath equalPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('equalPath', 'FilePath equalPath', _params_equalPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method resolvePath of FilePath **/
            var _params_resolvePath = new Array();
            _params_resolvePath.push(new ReflectionParameter('other', 'FilePath resolvePath other', FilePathBridge.getReflection()));
            _methods.push(new ReflectionMethod('resolvePath', 'FilePath resolvePath', _params_resolvePath, FilePathBridge.getReflection()));
            /** Class description of IFilePath **/
            var clazz = new ReflectionClass('FilePathBridge', 'Bridge class FilePathBridge', 'FilePathBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FilePathBridge;
    })();
    Adaptive.FilePathBridge = FilePathBridge;
    /**
     *  Service IOS implementation.
     */
    var OSBridge = (function () {
        function OSBridge() {
        }
        OSBridge.prototype.getOSInfo = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseSystem/IOS/getOSInfo", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IOS.getOSInfo incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IOS.getOSInfo");
                return null;
            }
        };
        OSBridge.getReflection = function () {
            /** Fields of OS **/
            var _fields = new Array();
            /** Methods of OS **/
            var _methods = new Array();
            /** Method getOSInfo of OS **/
            var _params_getOSInfo = new Array();
            _methods.push(new ReflectionMethod('getOSInfo', 'OS getOSInfo', _params_getOSInfo, OSInfo.getReflection()));
            /** Class description of IOS **/
            var clazz = new ReflectionClass('OSBridge', 'Bridge class OSBridge', 'OSBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        IContactFieldGroupEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContact FieldGroup
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
        IContactFilterEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IContact Filter
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
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/getContact?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { contact: contact } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.getContact");
            }
        };
        ContactBridge.prototype.getContactPhoto = function (contact, callback) {
            registeredIContactPhotoResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/getContactPhoto?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { contact: contact } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactPhotoResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.getContactPhoto");
            }
        };
        ContactBridge.prototype.getContacts = function (callback) {
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/getContacts?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.getContacts");
            }
        };
        ContactBridge.prototype.getContactsForFields = function (callback, fields) {
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/getContactsForFields?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { callback: callback } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.getContactsForFields");
            }
        };
        ContactBridge.prototype.getContactsWithFilter = function (callback, fields, filter) {
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/getContactsWithFilter?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { callback: callback, fields: fields } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.getContactsWithFilter");
            }
        };
        ContactBridge.prototype.searchContacts = function (term, callback) {
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/searchContacts?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { term: term } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.searchContacts");
            }
        };
        ContactBridge.prototype.searchContactsWithFilter = function (term, callback, filter) {
            registeredIContactResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/searchContactsWithFilter?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { term: term, callback: callback } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIContactResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IContact.searchContactsWithFilter");
            }
        };
        ContactBridge.prototype.setContactPhoto = function (contact, pngImage) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBasePIM/IContact/setContactPhoto", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { contact: contact, pngImage: pngImage } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IContact.setContactPhoto incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IContact.setContactPhoto");
                return null;
            }
        };
        ContactBridge.getReflection = function () {
            /** Fields of Contact **/
            var _fields = new Array();
            /** Methods of Contact **/
            var _methods = new Array();
            /** Method searchContactsWithFilter of Contact **/
            var _params_searchContactsWithFilter = new Array();
            _params_searchContactsWithFilter.push(new ReflectionParameter('term', 'Contact searchContactsWithFilter term', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_searchContactsWithFilter.push(new ReflectionParameter('callback', 'Contact searchContactsWithFilter callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_searchContactsWithFilter.push(new ReflectionParameter('filter', 'Contact searchContactsWithFilter filter', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('searchContactsWithFilter', 'Contact searchContactsWithFilter', _params_searchContactsWithFilter, null));
            /** Method getContact of Contact **/
            var _params_getContact = new Array();
            _params_getContact.push(new ReflectionParameter('contact', 'Contact getContact contact', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getContact.push(new ReflectionParameter('callback', 'Contact getContact callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContact', 'Contact getContact', _params_getContact, null));
            /** Method searchContacts of Contact **/
            var _params_searchContacts = new Array();
            _params_searchContacts.push(new ReflectionParameter('term', 'Contact searchContacts term', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_searchContacts.push(new ReflectionParameter('callback', 'Contact searchContacts callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('searchContacts', 'Contact searchContacts', _params_searchContacts, null));
            /** Method getContactPhoto of Contact **/
            var _params_getContactPhoto = new Array();
            _params_getContactPhoto.push(new ReflectionParameter('contact', 'Contact getContactPhoto contact', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getContactPhoto.push(new ReflectionParameter('callback', 'Contact getContactPhoto callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContactPhoto', 'Contact getContactPhoto', _params_getContactPhoto, null));
            /** Method setContactPhoto of Contact **/
            var _params_setContactPhoto = new Array();
            _params_setContactPhoto.push(new ReflectionParameter('contact', 'Contact setContactPhoto contact', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _params_setContactPhoto.push(new ReflectionParameter('pngImage', 'Contact setContactPhoto pngImage', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactPhoto', 'Contact setContactPhoto', _params_setContactPhoto, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method getContacts of Contact **/
            var _params_getContacts = new Array();
            _params_getContacts.push(new ReflectionParameter('callback', 'Contact getContacts callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContacts', 'Contact getContacts', _params_getContacts, null));
            /** Method getContactsForFields of Contact **/
            var _params_getContactsForFields = new Array();
            _params_getContactsForFields.push(new ReflectionParameter('callback', 'Contact getContactsForFields callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getContactsForFields.push(new ReflectionParameter('fields', 'Contact getContactsForFields fields', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContactsForFields', 'Contact getContactsForFields', _params_getContactsForFields, null));
            /** Method getContactsWithFilter of Contact **/
            var _params_getContactsWithFilter = new Array();
            _params_getContactsWithFilter.push(new ReflectionParameter('callback', 'Contact getContactsWithFilter callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getContactsWithFilter.push(new ReflectionParameter('fields', 'Contact getContactsWithFilter fields', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_getContactsWithFilter.push(new ReflectionParameter('filter', 'Contact getContactsWithFilter filter', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContactsWithFilter', 'Contact getContactsWithFilter', _params_getContactsWithFilter, null));
            /** Class description of IContact **/
            var clazz = new ReflectionClass('ContactBridge', 'Bridge class ContactBridge', 'ContactBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactBridge;
    })();
    Adaptive.ContactBridge = ContactBridge;
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
        IButtonListenerErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IButtonListener Error
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
        IButtonListenerWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IButtonListener Warning
        };
        IButtonListenerWarningEnum.Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
        IButtonListenerWarningEnum.Unknown = new IButtonListenerWarningEnum("Unknown");
        return IButtonListenerWarningEnum;
    })();
    Adaptive.IButtonListenerWarningEnum = IButtonListenerWarningEnum;
    /**
     *  Listener IButtonListener control dictionary.
     */
    var registeredIButtonListener = new Dictionary([]);
    /**
     *  Listener IButtonListener onError/onWarning/onResult handlers.
     */
    function handleIButtonListenerError(id, error) {
        var listener = registeredIButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIButtonListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleIButtonListenerError = handleIButtonListenerError;
    function handleIButtonListenerResult(id, button) {
        var listener = registeredIButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIButtonListener dictionary.");
        }
        else {
            listener.onResult(button);
        }
    }
    Adaptive.handleIButtonListenerResult = handleIButtonListenerResult;
    function handleIButtonListenerWarning(id, button, warning) {
        var listener = registeredIButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredIButtonListener dictionary.");
        }
        else {
            listener.onWarning(button, warning);
        }
    }
    Adaptive.handleIButtonListenerWarning = handleIButtonListenerWarning;
    /**
     *  Listener IButtonListener implementation.
     */
    var ButtonListener = (function () {
        function ButtonListener(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: ButtonListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: ButtonListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: ButtonListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        ButtonListener.prototype.toString = function () {
            return "ButtonListener{" + this.id + "}";
        };
        ButtonListener.prototype.getId = function () {
            return this.id;
        };
        ButtonListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The ButtonListener does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        ButtonListener.prototype.onResult = function (button) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The ButtonListener does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(button);
            }
        };
        ButtonListener.prototype.onWarning = function (button, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The ButtonListener does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(button, warning);
            }
        };
        ButtonListener.getReflection = function () {
            /** Fields of ButtonListener **/
            var _fields = new Array();
            /** Methods of ButtonListener **/
            var _methods = new Array();
            /** Method onError of ButtonListener **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'ButtonListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'ButtonListener onError', _params_onError, null));
            /** Method onWarning of ButtonListener **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('button', 'ButtonListener onWarning button', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'ButtonListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'ButtonListener onWarning', _params_onWarning, null));
            /** Method onResult of ButtonListener **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('button', 'ButtonListener onResult button', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'ButtonListener onResult', _params_onResult, null));
            /** Class description of IButtonListener **/
            var clazz = new ReflectionClass('ButtonListener', 'Listener/Callback class ButtonListener', 'ButtonListener', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ButtonListener;
    })();
    Adaptive.ButtonListener = ButtonListener;
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
        ITableResultCallbackErrorEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ITableResultCallback Error
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
        ITableResultCallbackWarningEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ITableResultCallback Warning
        };
        ITableResultCallbackWarningEnum.TableExists = new ITableResultCallbackWarningEnum("TableExists");
        ITableResultCallbackWarningEnum.TableLocked = new ITableResultCallbackWarningEnum("TableLocked");
        ITableResultCallbackWarningEnum.NoResults = new ITableResultCallbackWarningEnum("NoResults");
        ITableResultCallbackWarningEnum.Unknown = new ITableResultCallbackWarningEnum("Unknown");
        return ITableResultCallbackWarningEnum;
    })();
    Adaptive.ITableResultCallbackWarningEnum = ITableResultCallbackWarningEnum;
    /**
     *  Callback ITableResultCallback control dictionary.
     */
    var registeredITableResultCallback = new Dictionary([]);
    /**
     *  Callback ITableResultCallback onError/onWarning/onResult handlers.
     */
    function handleITableResultCallbackError(id, error) {
        var callback = registeredITableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredITableResultCallback dictionary.");
        }
        else {
            callback.onError(error);
            registeredITableResultCallback.remove("" + id);
        }
    }
    Adaptive.handleITableResultCallbackError = handleITableResultCallbackError;
    function handleITableResultCallbackResult(id, table) {
        var callback = registeredITableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredITableResultCallback dictionary.");
        }
        else {
            callback.onResult(table);
            registeredITableResultCallback.remove("" + id);
        }
    }
    Adaptive.handleITableResultCallbackResult = handleITableResultCallbackResult;
    function handleITableResultCallbackWarning(id, table, warning) {
        var callback = registeredITableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredITableResultCallback dictionary.");
        }
        else {
            callback.onWarning(table, warning);
            registeredITableResultCallback.remove("" + id);
        }
    }
    Adaptive.handleITableResultCallbackWarning = handleITableResultCallbackWarning;
    /**
     *  Callback ITableResultCallback implementation.
     */
    var TableResultCallback = (function () {
        function TableResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            this.id = ++registeredCounter;
            if (this.onErrorFunction == null) {
                console.error("ERROR: TableResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (this.onResultFunction == null) {
                console.error("ERROR: TableResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (this.onWarningFunction == null) {
                console.error("ERROR: TableResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        TableResultCallback.prototype.toString = function () {
            return "TableResultCallback{" + this.id + "}";
        };
        TableResultCallback.prototype.getId = function () {
            return this.id;
        };
        TableResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: The TableResultCallback does not define the onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        TableResultCallback.prototype.onResult = function (table) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: The TableResultCallback does not define the onResultFunction.");
            }
            else {
                this.onResultFunction(table);
            }
        };
        TableResultCallback.prototype.onWarning = function (table, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: The TableResultCallback does not define the onWarningFunction.");
            }
            else {
                this.onWarningFunction(table, warning);
            }
        };
        TableResultCallback.getReflection = function () {
            /** Fields of TableResultCallback **/
            var _fields = new Array();
            /** Methods of TableResultCallback **/
            var _methods = new Array();
            /** Method onError of TableResultCallback **/
            var _params_onError = new Array();
            _params_onError.push(new ReflectionParameter('error', 'TableResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onError', 'TableResultCallback onError', _params_onError, null));
            /** Method onWarning of TableResultCallback **/
            var _params_onWarning = new Array();
            _params_onWarning.push(new ReflectionParameter('table', 'TableResultCallback onWarning table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_onWarning.push(new ReflectionParameter('warning', 'TableResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onWarning', 'TableResultCallback onWarning', _params_onWarning, null));
            /** Method onResult of TableResultCallback **/
            var _params_onResult = new Array();
            _params_onResult.push(new ReflectionParameter('table', 'TableResultCallback onResult table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('onResult', 'TableResultCallback onResult', _params_onResult, null));
            /** Class description of ITableResultCallback **/
            var clazz = new ReflectionClass('TableResultCallback', 'Listener/Callback class TableResultCallback', 'TableResultCallback', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return TableResultCallback;
    })();
    Adaptive.TableResultCallback = TableResultCallback;
    /**
     *  Service IFile implementation.
     */
    var FileBridge = (function () {
        function FileBridge() {
        }
        FileBridge.prototype.canRead = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/canRead", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.canRead incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.canRead");
                return null;
            }
        };
        FileBridge.prototype.canWrite = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/canWrite", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.canWrite incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.canWrite");
                return null;
            }
        };
        FileBridge.prototype.create = function (name, callback) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/create?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { name: name } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.create");
            }
        };
        FileBridge.prototype.createWithPath = function (path, name, callback) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/createWithPath?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { path: path, name: name } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.createWithPath");
            }
        };
        FileBridge.prototype.delete = function (cascade) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/delete", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { cascade: cascade } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.delete incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.delete");
                return null;
            }
        };
        FileBridge.prototype.endsWith = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/endsWith", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.endsWith incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.endsWith");
                return null;
            }
        };
        FileBridge.prototype.endsWithPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/endsWithPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.endsWithPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.endsWithPath");
                return null;
            }
        };
        FileBridge.prototype.equalPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/equalPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.equalPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.equalPath");
                return null;
            }
        };
        FileBridge.prototype.equals = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/equals", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.equals incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.equals");
                return null;
            }
        };
        FileBridge.prototype.exists = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/exists", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.exists incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.exists");
                return null;
            }
        };
        FileBridge.prototype.getContent = function (callback) {
            registeredIFileDataResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getContent?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileDataResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.getContent");
            }
        };
        FileBridge.prototype.getDateCreated = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getDateCreated", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getDateCreated incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getDateCreated");
                return null;
            }
        };
        FileBridge.prototype.getDateModified = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getDateModified", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getDateModified incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getDateModified");
                return null;
            }
        };
        FileBridge.prototype.getFileName = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getFileName", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getFileName incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getFileName");
                return null;
            }
        };
        FileBridge.prototype.getFileSystem = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getFileSystem", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getFileSystem incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getFileSystem");
                return null;
            }
        };
        FileBridge.prototype.getName = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getName", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getName incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getName");
                return null;
            }
        };
        FileBridge.prototype.getNameAtIndex = function (index) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getNameAtIndex", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { index: index } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getNameAtIndex incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getNameAtIndex");
                return null;
            }
        };
        FileBridge.prototype.getNameCount = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getNameCount", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getNameCount incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getNameCount");
                return null;
            }
        };
        FileBridge.prototype.getParent = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getParent", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getParent incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getParent");
                return null;
            }
        };
        FileBridge.prototype.getPath = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getPath");
                return null;
            }
        };
        FileBridge.prototype.getRoot = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getRoot", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getRoot incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getRoot");
                return null;
            }
        };
        FileBridge.prototype.getSize = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/getSize", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.getSize incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.getSize");
                return null;
            }
        };
        FileBridge.prototype.isAbsolute = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/isAbsolute", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.isAbsolute incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.isAbsolute");
                return null;
            }
        };
        FileBridge.prototype.isDirectory = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/isDirectory", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.isDirectory incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.isDirectory");
                return null;
            }
        };
        FileBridge.prototype.listFiles = function (callback) {
            registeredIFileListResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/listFiles?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileListResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.listFiles");
            }
        };
        FileBridge.prototype.listFilesForRegex = function (regex, callback) {
            registeredIFileListResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/listFilesForRegex?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { regex: regex } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileListResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.listFilesForRegex");
            }
        };
        FileBridge.prototype.mkDir = function (recursive) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/mkDir", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { recursive: recursive } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.mkDir incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.mkDir");
                return null;
            }
        };
        FileBridge.prototype.move = function (newFile, createPath, callback, overwrite) {
            registeredIFileResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/move?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { newFile: newFile, createPath: createPath, callback: callback } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.move");
            }
        };
        FileBridge.prototype.normalize = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/normalize", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.normalize incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.normalize");
                return null;
            }
        };
        FileBridge.prototype.relativize = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/relativize", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.relativize incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.relativize");
                return null;
            }
        };
        FileBridge.prototype.resolve = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/resolve", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.resolve incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.resolve");
                return null;
            }
        };
        FileBridge.prototype.resolvePath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/resolvePath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.resolvePath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.resolvePath");
                return null;
            }
        };
        FileBridge.prototype.resolveSibling = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/resolveSibling", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.resolveSibling incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.resolveSibling");
                return null;
            }
        };
        FileBridge.prototype.resolveSiblingPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/resolveSiblingPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.resolveSiblingPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.resolveSiblingPath");
                return null;
            }
        };
        FileBridge.prototype.setContent = function (content, callback) {
            registeredIFileDataResultCallback.add("" + callback.getId(), callback);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/setContent?id=" + callback.getId(), false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { content: content } }));
            if (xhr.status == 200) {
            }
            else {
                registeredIFileDataResultCallback.remove("" + callback.getId());
                console.error("ERROR: " + xhr.status + " IFile.setContent");
            }
        };
        FileBridge.prototype.startsWith = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/startsWith", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.startsWith incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.startsWith");
                return null;
            }
        };
        FileBridge.prototype.startsWithPath = function (other) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/startsWithPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: { other: other } }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.startsWithPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.startsWithPath");
                return null;
            }
        };
        FileBridge.prototype.toAbsolutePath = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/toAbsolutePath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.toAbsolutePath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.toAbsolutePath");
                return null;
            }
        };
        FileBridge.prototype.toFile = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/toFile", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.toFile incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.toFile");
                return null;
            }
        };
        FileBridge.prototype.toPath = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/toPath", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.toPath incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.toPath");
                return null;
            }
        };
        FileBridge.prototype.toString = function () {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", bridgePath + "/IAdaptiveRP/IBaseData/IFilePath/IFile/toString", false);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(JSON.stringify({ request: {} }));
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    return JSON.parse(xhr.responseText);
                }
                else {
                    console.error("ERROR: IFile.toString incorrect response received.");
                    return null;
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " IFile.toString");
                return null;
            }
        };
        FileBridge.getReflection = function () {
            /** Fields of File **/
            var _fields = new Array();
            /** Methods of File **/
            var _methods = new Array();
            /** Method getName of File **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'File getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method delete of File **/
            var _params_delete = new Array();
            _params_delete.push(new ReflectionParameter('cascade', 'File delete cascade', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('delete', 'File delete', _params_delete, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method getSize of File **/
            var _params_getSize = new Array();
            _methods.push(new ReflectionMethod('getSize', 'File getSize', _params_getSize, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method getPath of File **/
            var _params_getPath = new Array();
            _methods.push(new ReflectionMethod('getPath', 'File getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method canRead of File **/
            var _params_canRead = new Array();
            _methods.push(new ReflectionMethod('canRead', 'File canRead', _params_canRead, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method canWrite of File **/
            var _params_canWrite = new Array();
            _methods.push(new ReflectionMethod('canWrite', 'File canWrite', _params_canWrite, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method exists of File **/
            var _params_exists = new Array();
            _methods.push(new ReflectionMethod('exists', 'File exists', _params_exists, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method isDirectory of File **/
            var _params_isDirectory = new Array();
            _methods.push(new ReflectionMethod('isDirectory', 'File isDirectory', _params_isDirectory, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method listFiles of File **/
            var _params_listFiles = new Array();
            _params_listFiles.push(new ReflectionParameter('callback', 'File listFiles callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('listFiles', 'File listFiles', _params_listFiles, null));
            /** Method toPath of File **/
            var _params_toPath = new Array();
            _methods.push(new ReflectionMethod('toPath', 'File toPath', _params_toPath, FilePathBridge.getReflection()));
            /** Method getContent of File **/
            var _params_getContent = new Array();
            _params_getContent.push(new ReflectionParameter('callback', 'File getContent callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('getContent', 'File getContent', _params_getContent, null));
            /** Method create of File **/
            var _params_create = new Array();
            _params_create.push(new ReflectionParameter('name', 'File create name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_create.push(new ReflectionParameter('callback', 'File create callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('create', 'File create', _params_create, null));
            /** Method getDateCreated of File **/
            var _params_getDateCreated = new Array();
            _methods.push(new ReflectionMethod('getDateCreated', 'File getDateCreated', _params_getDateCreated, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method getDateModified of File **/
            var _params_getDateModified = new Array();
            _methods.push(new ReflectionMethod('getDateModified', 'File getDateModified', _params_getDateModified, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setContent of File **/
            var _params_setContent = new Array();
            _params_setContent.push(new ReflectionParameter('content', 'File setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_setContent.push(new ReflectionParameter('callback', 'File setContent callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContent', 'File setContent', _params_setContent, null));
            /** Method mkDir of File **/
            var _params_mkDir = new Array();
            _params_mkDir.push(new ReflectionParameter('recursive', 'File mkDir recursive', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('mkDir', 'File mkDir', _params_mkDir, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method listFilesForRegex of File **/
            var _params_listFilesForRegex = new Array();
            _params_listFilesForRegex.push(new ReflectionParameter('regex', 'File listFilesForRegex regex', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_listFilesForRegex.push(new ReflectionParameter('callback', 'File listFilesForRegex callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('listFilesForRegex', 'File listFilesForRegex', _params_listFilesForRegex, null));
            /** Method move of File **/
            var _params_move = new Array();
            _params_move.push(new ReflectionParameter('newFile', 'File move newFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_move.push(new ReflectionParameter('createPath', 'File move createPath', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_move.push(new ReflectionParameter('callback', 'File move callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_move.push(new ReflectionParameter('overwrite', 'File move overwrite', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('move', 'File move', _params_move, null));
            /** Method createWithPath of File **/
            var _params_createWithPath = new Array();
            _params_createWithPath.push(new ReflectionParameter('path', 'File createWithPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPath.push(new ReflectionParameter('name', 'File createWithPath name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _params_createWithPath.push(new ReflectionParameter('callback', 'File createWithPath callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('createWithPath', 'File createWithPath', _params_createWithPath, null));
            /** Class description of IFile **/
            var clazz = new ReflectionClass('FileBridge', 'Bridge class FileBridge', 'FileBridge', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return FileBridge;
    })();
    Adaptive.FileBridge = FileBridge;
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
        Email.getReflection = function () {
            /** Fields of Email **/
            var _fields = new Array();
            _fields.push(new ReflectionField('toRecipients', 'Field toRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            _fields.push(new ReflectionField('ccRecipients', 'Field ccRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            _fields.push(new ReflectionField('bccRecipients', 'Field bccRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            _fields.push(new ReflectionField('attachmentData', 'Field attachmentData of class Email', new ReflectionClass('Array<AttachmentData>', 'Array of AttachmentData', 'Array<AttachmentData>', null, null, Adaptive.getReflection()).setTypeComponent(AttachmentData.getReflection())));
            _fields.push(new ReflectionField('messageBody', 'Field messageBody of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('messageBodyMimeType', 'Field messageBodyMimeType of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('subject', 'Field subject of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of Email **/
            var _methods = new Array();
            /** Method getToRecipients of Email **/
            var _params_getToRecipients = new Array();
            _methods.push(new ReflectionMethod('getToRecipients', 'Email getToRecipients', _params_getToRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            /** Method setToRecipients of Email **/
            var _params_setToRecipients = new Array();
            _params_setToRecipients.push(new ReflectionParameter('toRecipients', 'Email setToRecipients toRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setToRecipients', 'Email setToRecipients', _params_setToRecipients, null));
            /** Method getCcRecipients of Email **/
            var _params_getCcRecipients = new Array();
            _methods.push(new ReflectionMethod('getCcRecipients', 'Email getCcRecipients', _params_getCcRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            /** Method setCcRecipients of Email **/
            var _params_setCcRecipients = new Array();
            _params_setCcRecipients.push(new ReflectionParameter('ccRecipients', 'Email setCcRecipients ccRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCcRecipients', 'Email setCcRecipients', _params_setCcRecipients, null));
            /** Method getBccRecipients of Email **/
            var _params_getBccRecipients = new Array();
            _methods.push(new ReflectionMethod('getBccRecipients', 'Email getBccRecipients', _params_getBccRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
            /** Method setBccRecipients of Email **/
            var _params_setBccRecipients = new Array();
            _params_setBccRecipients.push(new ReflectionParameter('bccRecipients', 'Email setBccRecipients bccRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setBccRecipients', 'Email setBccRecipients', _params_setBccRecipients, null));
            /** Method getAttachmentData of Email **/
            var _params_getAttachmentData = new Array();
            _methods.push(new ReflectionMethod('getAttachmentData', 'Email getAttachmentData', _params_getAttachmentData, new ReflectionClass('Array<AttachmentData>', 'Array of AttachmentData', 'Array<AttachmentData>', null, null, Adaptive.getReflection()).setTypeComponent(AttachmentData.getReflection())));
            /** Method setAttachmentData of Email **/
            var _params_setAttachmentData = new Array();
            _params_setAttachmentData.push(new ReflectionParameter('attachmentData', 'Email setAttachmentData attachmentData', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setAttachmentData', 'Email setAttachmentData', _params_setAttachmentData, null));
            /** Method getMessageBody of Email **/
            var _params_getMessageBody = new Array();
            _methods.push(new ReflectionMethod('getMessageBody', 'Email getMessageBody', _params_getMessageBody, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setMessageBody of Email **/
            var _params_setMessageBody = new Array();
            _params_setMessageBody.push(new ReflectionParameter('messageBody', 'Email setMessageBody messageBody', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMessageBody', 'Email setMessageBody', _params_setMessageBody, null));
            /** Method getMessageBodyMimeType of Email **/
            var _params_getMessageBodyMimeType = new Array();
            _methods.push(new ReflectionMethod('getMessageBodyMimeType', 'Email getMessageBodyMimeType', _params_getMessageBodyMimeType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setMessageBodyMimeType of Email **/
            var _params_setMessageBodyMimeType = new Array();
            _params_setMessageBodyMimeType.push(new ReflectionParameter('messageBodyMimeType', 'Email setMessageBodyMimeType messageBodyMimeType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMessageBodyMimeType', 'Email setMessageBodyMimeType', _params_setMessageBodyMimeType, null));
            /** Method getSubject of Email **/
            var _params_getSubject = new Array();
            _methods.push(new ReflectionMethod('getSubject', 'Email getSubject', _params_getSubject, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setSubject of Email **/
            var _params_setSubject = new Array();
            _params_setSubject.push(new ReflectionParameter('subject', 'Email setSubject subject', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSubject', 'Email setSubject', _params_setSubject, null));
            /** Class description of Email **/
            var clazz = new ReflectionClass('Email', 'Bean class Email', 'Email', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Email;
    })();
    Adaptive.Email = Email;
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
        Database.getReflection = function () {
            /** Fields of Database **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class Database', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('compress', 'Field compress of class Database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Methods of Database **/
            var _methods = new Array();
            /** Method getName of Database **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Database getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of Database **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Database setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Database setName', _params_setName, null));
            /** Method setCompress of Database **/
            var _params_setCompress = new Array();
            _params_setCompress.push(new ReflectionParameter('compress', 'Database setCompress compress', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCompress', 'Database setCompress', _params_setCompress, null));
            /** Method isCompress of Database **/
            var _params_isCompress = new Array();
            _methods.push(new ReflectionMethod('isCompress', 'Database isCompress', _params_isCompress, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Class description of Database **/
            var clazz = new ReflectionClass('Database', 'Bean class Database', 'Database', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Database;
    })();
    Adaptive.Database = Database;
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
        AttachmentData.getReflection = function () {
            /** Fields of AttachmentData **/
            var _fields = new Array();
            _fields.push(new ReflectionField('data', 'Field data of class AttachmentData', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            _fields.push(new ReflectionField('dataSize', 'Field dataSize of class AttachmentData', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('fileName', 'Field fileName of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('mimeType', 'Field mimeType of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('referenceUrl', 'Field referenceUrl of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of AttachmentData **/
            var _methods = new Array();
            /** Method getFileName of AttachmentData **/
            var _params_getFileName = new Array();
            _methods.push(new ReflectionMethod('getFileName', 'AttachmentData getFileName', _params_getFileName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getData of AttachmentData **/
            var _params_getData = new Array();
            _methods.push(new ReflectionMethod('getData', 'AttachmentData getData', _params_getData, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            /** Method setData of AttachmentData **/
            var _params_setData = new Array();
            _params_setData.push(new ReflectionParameter('data', 'AttachmentData setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setData', 'AttachmentData setData', _params_setData, null));
            /** Method getDataSize of AttachmentData **/
            var _params_getDataSize = new Array();
            _methods.push(new ReflectionMethod('getDataSize', 'AttachmentData getDataSize', _params_getDataSize, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setDataSize of AttachmentData **/
            var _params_setDataSize = new Array();
            _params_setDataSize.push(new ReflectionParameter('dataSize', 'AttachmentData setDataSize dataSize', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setDataSize', 'AttachmentData setDataSize', _params_setDataSize, null));
            /** Method setFileName of AttachmentData **/
            var _params_setFileName = new Array();
            _params_setFileName.push(new ReflectionParameter('fileName', 'AttachmentData setFileName fileName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setFileName', 'AttachmentData setFileName', _params_setFileName, null));
            /** Method getMimeType of AttachmentData **/
            var _params_getMimeType = new Array();
            _methods.push(new ReflectionMethod('getMimeType', 'AttachmentData getMimeType', _params_getMimeType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setMimeType of AttachmentData **/
            var _params_setMimeType = new Array();
            _params_setMimeType.push(new ReflectionParameter('mimeType', 'AttachmentData setMimeType mimeType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMimeType', 'AttachmentData setMimeType', _params_setMimeType, null));
            /** Method getReferenceUrl of AttachmentData **/
            var _params_getReferenceUrl = new Array();
            _methods.push(new ReflectionMethod('getReferenceUrl', 'AttachmentData getReferenceUrl', _params_getReferenceUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setReferenceUrl of AttachmentData **/
            var _params_setReferenceUrl = new Array();
            _params_setReferenceUrl.push(new ReflectionParameter('referenceUrl', 'AttachmentData setReferenceUrl referenceUrl', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setReferenceUrl', 'AttachmentData setReferenceUrl', _params_setReferenceUrl, null));
            /** Class description of AttachmentData **/
            var clazz = new ReflectionClass('AttachmentData', 'Bean class AttachmentData', 'AttachmentData', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return AttachmentData;
    })();
    Adaptive.AttachmentData = AttachmentData;
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
        Acceleration.getReflection = function () {
            /** Fields of Acceleration **/
            var _fields = new Array();
            _fields.push(new ReflectionField('x', 'Field x of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('y', 'Field y of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('z', 'Field z of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('timeStamp', 'Field timeStamp of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Methods of Acceleration **/
            var _methods = new Array();
            /** Method getX of Acceleration **/
            var _params_getX = new Array();
            _methods.push(new ReflectionMethod('getX', 'Acceleration getX', _params_getX, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setX of Acceleration **/
            var _params_setX = new Array();
            _params_setX.push(new ReflectionParameter('x', 'Acceleration setX x', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setX', 'Acceleration setX', _params_setX, null));
            /** Method getY of Acceleration **/
            var _params_getY = new Array();
            _methods.push(new ReflectionMethod('getY', 'Acceleration getY', _params_getY, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setY of Acceleration **/
            var _params_setY = new Array();
            _params_setY.push(new ReflectionParameter('y', 'Acceleration setY y', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setY', 'Acceleration setY', _params_setY, null));
            /** Method getZ of Acceleration **/
            var _params_getZ = new Array();
            _methods.push(new ReflectionMethod('getZ', 'Acceleration getZ', _params_getZ, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setZ of Acceleration **/
            var _params_setZ = new Array();
            _params_setZ.push(new ReflectionParameter('z', 'Acceleration setZ z', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setZ', 'Acceleration setZ', _params_setZ, null));
            /** Method setTimeStamp of Acceleration **/
            var _params_setTimeStamp = new Array();
            _params_setTimeStamp.push(new ReflectionParameter('timeStamp', 'Acceleration setTimeStamp timeStamp', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setTimeStamp', 'Acceleration setTimeStamp', _params_setTimeStamp, null));
            /** Class description of Acceleration **/
            var clazz = new ReflectionClass('Acceleration', 'Bean class Acceleration', 'Acceleration', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
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
        ContactTag.getReflection = function () {
            /** Fields of ContactTag **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class ContactTag', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('dataValue', 'Field dataValue of class ContactTag', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactTag **/
            var _methods = new Array();
            /** Method getName of ContactTag **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'ContactTag getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of ContactTag **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'ContactTag setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'ContactTag setName', _params_setName, null));
            /** Method getDataValue of ContactTag **/
            var _params_getDataValue = new Array();
            _methods.push(new ReflectionMethod('getDataValue', 'ContactTag getDataValue', _params_getDataValue, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setDataValue of ContactTag **/
            var _params_setDataValue = new Array();
            _params_setDataValue.push(new ReflectionParameter('dataValue', 'ContactTag setDataValue dataValue', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setDataValue', 'ContactTag setDataValue', _params_setDataValue, null));
            /** Class description of ContactTag **/
            var clazz = new ReflectionClass('ContactTag', 'Bean class ContactTag', 'ContactTag', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
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
        Cookie.getReflection = function () {
            /** Fields of Cookie **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('data', 'Field data of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('domain', 'Field domain of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('path', 'Field path of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('scheme', 'Field scheme of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('secure', 'Field secure of class Cookie', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('expiry', 'Field expiry of class Cookie', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('creation', 'Field creation of class Cookie', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Methods of Cookie **/
            var _methods = new Array();
            /** Method getName of Cookie **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Cookie getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of Cookie **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Cookie setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Cookie setName', _params_setName, null));
            /** Method getPath of Cookie **/
            var _params_getPath = new Array();
            _methods.push(new ReflectionMethod('getPath', 'Cookie getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getScheme of Cookie **/
            var _params_getScheme = new Array();
            _methods.push(new ReflectionMethod('getScheme', 'Cookie getScheme', _params_getScheme, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setPath of Cookie **/
            var _params_setPath = new Array();
            _params_setPath.push(new ReflectionParameter('path', 'Cookie setPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPath', 'Cookie setPath', _params_setPath, null));
            /** Method setScheme of Cookie **/
            var _params_setScheme = new Array();
            _params_setScheme.push(new ReflectionParameter('scheme', 'Cookie setScheme scheme', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setScheme', 'Cookie setScheme', _params_setScheme, null));
            /** Method getData of Cookie **/
            var _params_getData = new Array();
            _methods.push(new ReflectionMethod('getData', 'Cookie getData', _params_getData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setData of Cookie **/
            var _params_setData = new Array();
            _params_setData.push(new ReflectionParameter('data', 'Cookie setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setData', 'Cookie setData', _params_setData, null));
            /** Method getDomain of Cookie **/
            var _params_getDomain = new Array();
            _methods.push(new ReflectionMethod('getDomain', 'Cookie getDomain', _params_getDomain, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setDomain of Cookie **/
            var _params_setDomain = new Array();
            _params_setDomain.push(new ReflectionParameter('domain', 'Cookie setDomain domain', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setDomain', 'Cookie setDomain', _params_setDomain, null));
            /** Method isSecure of Cookie **/
            var _params_isSecure = new Array();
            _methods.push(new ReflectionMethod('isSecure', 'Cookie isSecure', _params_isSecure, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method setSecure of Cookie **/
            var _params_setSecure = new Array();
            _params_setSecure.push(new ReflectionParameter('secure', 'Cookie setSecure secure', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSecure', 'Cookie setSecure', _params_setSecure, null));
            /** Method getExpiry of Cookie **/
            var _params_getExpiry = new Array();
            _methods.push(new ReflectionMethod('getExpiry', 'Cookie getExpiry', _params_getExpiry, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setExpiry of Cookie **/
            var _params_setExpiry = new Array();
            _params_setExpiry.push(new ReflectionParameter('expiry', 'Cookie setExpiry expiry', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setExpiry', 'Cookie setExpiry', _params_setExpiry, null));
            /** Method getCreation of Cookie **/
            var _params_getCreation = new Array();
            _methods.push(new ReflectionMethod('getCreation', 'Cookie getCreation', _params_getCreation, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Class description of Cookie **/
            var clazz = new ReflectionClass('Cookie', 'Bean class Cookie', 'Cookie', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
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
        ContactProfessionalInfo.getReflection = function () {
            /** Fields of ContactProfessionalInfo **/
            var _fields = new Array();
            _fields.push(new ReflectionField('company', 'Field company of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('jobTitle', 'Field jobTitle of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('jobDescription', 'Field jobDescription of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactProfessionalInfo **/
            var _methods = new Array();
            /** Method getCompany of ContactProfessionalInfo **/
            var _params_getCompany = new Array();
            _methods.push(new ReflectionMethod('getCompany', 'ContactProfessionalInfo getCompany', _params_getCompany, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setCompany of ContactProfessionalInfo **/
            var _params_setCompany = new Array();
            _params_setCompany.push(new ReflectionParameter('company', 'ContactProfessionalInfo setCompany company', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCompany', 'ContactProfessionalInfo setCompany', _params_setCompany, null));
            /** Method getJobTitle of ContactProfessionalInfo **/
            var _params_getJobTitle = new Array();
            _methods.push(new ReflectionMethod('getJobTitle', 'ContactProfessionalInfo getJobTitle', _params_getJobTitle, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setJobTitle of ContactProfessionalInfo **/
            var _params_setJobTitle = new Array();
            _params_setJobTitle.push(new ReflectionParameter('jobTitle', 'ContactProfessionalInfo setJobTitle jobTitle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setJobTitle', 'ContactProfessionalInfo setJobTitle', _params_setJobTitle, null));
            /** Method getJobDescription of ContactProfessionalInfo **/
            var _params_getJobDescription = new Array();
            _methods.push(new ReflectionMethod('getJobDescription', 'ContactProfessionalInfo getJobDescription', _params_getJobDescription, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setJobDescription of ContactProfessionalInfo **/
            var _params_setJobDescription = new Array();
            _params_setJobDescription.push(new ReflectionParameter('jobDescription', 'ContactProfessionalInfo setJobDescription jobDescription', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setJobDescription', 'ContactProfessionalInfo setJobDescription', _params_setJobDescription, null));
            /** Class description of ContactProfessionalInfo **/
            var clazz = new ReflectionClass('ContactProfessionalInfo', 'Bean class ContactProfessionalInfo', 'ContactProfessionalInfo', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
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
        ServiceRequest.getReflection = function () {
            /** Fields of ServiceRequest **/
            var _fields = new Array();
            _fields.push(new ReflectionField('content', 'Field content of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('contentType', 'Field contentType of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('contentLength', 'Field contentLength of class ServiceRequest', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('rawContent', 'Field rawContent of class ServiceRequest', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            _fields.push(new ReflectionField('headers', 'Field headers of class ServiceRequest', new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
            _fields.push(new ReflectionField('method', 'Field method of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('protocolVersion', 'Field protocolVersion of class ServiceRequest', ServiceRequestProtocolVersionEnum.getReflection()));
            _fields.push(new ReflectionField('session', 'Field session of class ServiceRequest', SessionBridge.getReflection()));
            _fields.push(new ReflectionField('contentEncoding', 'Field contentEncoding of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ServiceRequest **/
            var _methods = new Array();
            /** Method getMethod of ServiceRequest **/
            var _params_getMethod = new Array();
            _methods.push(new ReflectionMethod('getMethod', 'ServiceRequest getMethod', _params_getMethod, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getContent of ServiceRequest **/
            var _params_getContent = new Array();
            _methods.push(new ReflectionMethod('getContent', 'ServiceRequest getContent', _params_getContent, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setHeaders of ServiceRequest **/
            var _params_setHeaders = new Array();
            _params_setHeaders.push(new ReflectionParameter('headers', 'ServiceRequest setHeaders headers', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setHeaders', 'ServiceRequest setHeaders', _params_setHeaders, null));
            /** Method getSession of ServiceRequest **/
            var _params_getSession = new Array();
            _methods.push(new ReflectionMethod('getSession', 'ServiceRequest getSession', _params_getSession, SessionBridge.getReflection()));
            /** Method setSession of ServiceRequest **/
            var _params_setSession = new Array();
            _params_setSession.push(new ReflectionParameter('session', 'ServiceRequest setSession session', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSession', 'ServiceRequest setSession', _params_setSession, null));
            /** Method setContentEncoding of ServiceRequest **/
            var _params_setContentEncoding = new Array();
            _params_setContentEncoding.push(new ReflectionParameter('contentEncoding', 'ServiceRequest setContentEncoding contentEncoding', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentEncoding', 'ServiceRequest setContentEncoding', _params_setContentEncoding, null));
            /** Method setContent of ServiceRequest **/
            var _params_setContent = new Array();
            _params_setContent.push(new ReflectionParameter('content', 'ServiceRequest setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContent', 'ServiceRequest setContent', _params_setContent, null));
            /** Method getProtocolVersion of ServiceRequest **/
            var _params_getProtocolVersion = new Array();
            _methods.push(new ReflectionMethod('getProtocolVersion', 'ServiceRequest getProtocolVersion', _params_getProtocolVersion, ServiceRequestProtocolVersionEnum.getReflection()));
            /** Method setProtocolVersion of ServiceRequest **/
            var _params_setProtocolVersion = new Array();
            _params_setProtocolVersion.push(new ReflectionParameter('protocolVersion', 'ServiceRequest setProtocolVersion protocolVersion', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setProtocolVersion', 'ServiceRequest setProtocolVersion', _params_setProtocolVersion, null));
            /** Method getRawContent of ServiceRequest **/
            var _params_getRawContent = new Array();
            _methods.push(new ReflectionMethod('getRawContent', 'ServiceRequest getRawContent', _params_getRawContent, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            /** Method setRawContent of ServiceRequest **/
            var _params_setRawContent = new Array();
            _params_setRawContent.push(new ReflectionParameter('rawContent', 'ServiceRequest setRawContent rawContent', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setRawContent', 'ServiceRequest setRawContent', _params_setRawContent, null));
            /** Method getContentLength of ServiceRequest **/
            var _params_getContentLength = new Array();
            _methods.push(new ReflectionMethod('getContentLength', 'ServiceRequest getContentLength', _params_getContentLength, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setMethod of ServiceRequest **/
            var _params_setMethod = new Array();
            _params_setMethod.push(new ReflectionParameter('method', 'ServiceRequest setMethod method', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMethod', 'ServiceRequest setMethod', _params_setMethod, null));
            /** Method getContentType of ServiceRequest **/
            var _params_getContentType = new Array();
            _methods.push(new ReflectionMethod('getContentType', 'ServiceRequest getContentType', _params_getContentType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setContentType of ServiceRequest **/
            var _params_setContentType = new Array();
            _params_setContentType.push(new ReflectionParameter('contentType', 'ServiceRequest setContentType contentType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentType', 'ServiceRequest setContentType', _params_setContentType, null));
            /** Method setContentLength of ServiceRequest **/
            var _params_setContentLength = new Array();
            _params_setContentLength.push(new ReflectionParameter('contentLength', 'ServiceRequest setContentLength contentLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentLength', 'ServiceRequest setContentLength', _params_setContentLength, null));
            /** Method getContentEncoding of ServiceRequest **/
            var _params_getContentEncoding = new Array();
            _methods.push(new ReflectionMethod('getContentEncoding', 'ServiceRequest getContentEncoding', _params_getContentEncoding, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getHeaders of ServiceRequest **/
            var _params_getHeaders = new Array();
            _methods.push(new ReflectionMethod('getHeaders', 'ServiceRequest getHeaders', _params_getHeaders, new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
            /** Class description of ServiceRequest **/
            var clazz = new ReflectionClass('ServiceRequest', 'Bean class ServiceRequest', 'ServiceRequest', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ServiceRequestProtocolVersionEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IService ProtocolVersion
        };
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_0 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_0");
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_1 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_1");
        ServiceRequestProtocolVersionEnum.Unknown = new ServiceRequestProtocolVersionEnum("Unknown");
        return ServiceRequestProtocolVersionEnum;
    })();
    Adaptive.ServiceRequestProtocolVersionEnum = ServiceRequestProtocolVersionEnum;
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
        ContactAddress.getReflection = function () {
            /** Fields of ContactAddress **/
            var _fields = new Array();
            _fields.push(new ReflectionField('address', 'Field address of class ContactAddress', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('type', 'Field type of class ContactAddress', ContactAddressAddressTypeEnum.getReflection()));
            /** Methods of ContactAddress **/
            var _methods = new Array();
            /** Method getAddress of ContactAddress **/
            var _params_getAddress = new Array();
            _methods.push(new ReflectionMethod('getAddress', 'ContactAddress getAddress', _params_getAddress, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getType of ContactAddress **/
            var _params_getType = new Array();
            _methods.push(new ReflectionMethod('getType', 'ContactAddress getType', _params_getType, ContactAddressAddressTypeEnum.getReflection()));
            /** Method setType of ContactAddress **/
            var _params_setType = new Array();
            _params_setType.push(new ReflectionParameter('type', 'ContactAddress setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setType', 'ContactAddress setType', _params_setType, null));
            /** Method setAddress of ContactAddress **/
            var _params_setAddress = new Array();
            _params_setAddress.push(new ReflectionParameter('address', 'ContactAddress setAddress address', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setAddress', 'ContactAddress setAddress', _params_setAddress, null));
            /** Class description of ContactAddress **/
            var clazz = new ReflectionClass('ContactAddress', 'Bean class ContactAddress', 'ContactAddress', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ContactAddressAddressTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ContactAddress AddressType
        };
        ContactAddressAddressTypeEnum.Home = new ContactAddressAddressTypeEnum("Home");
        ContactAddressAddressTypeEnum.Work = new ContactAddressAddressTypeEnum("Work");
        ContactAddressAddressTypeEnum.Other = new ContactAddressAddressTypeEnum("Other");
        ContactAddressAddressTypeEnum.Unknown = new ContactAddressAddressTypeEnum("Unknown");
        return ContactAddressAddressTypeEnum;
    })();
    Adaptive.ContactAddressAddressTypeEnum = ContactAddressAddressTypeEnum;
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
        ContactEmail.getReflection = function () {
            /** Fields of ContactEmail **/
            var _fields = new Array();
            _fields.push(new ReflectionField('type', 'Field type of class ContactEmail', ContactEmailEmailTypeEnum.getReflection()));
            _fields.push(new ReflectionField('primary', 'Field primary of class ContactEmail', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('email', 'Field email of class ContactEmail', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactEmail **/
            var _methods = new Array();
            /** Method getType of ContactEmail **/
            var _params_getType = new Array();
            _methods.push(new ReflectionMethod('getType', 'ContactEmail getType', _params_getType, ContactEmailEmailTypeEnum.getReflection()));
            /** Method setType of ContactEmail **/
            var _params_setType = new Array();
            _params_setType.push(new ReflectionParameter('type', 'ContactEmail setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setType', 'ContactEmail setType', _params_setType, null));
            /** Method isPrimary of ContactEmail **/
            var _params_isPrimary = new Array();
            _methods.push(new ReflectionMethod('isPrimary', 'ContactEmail isPrimary', _params_isPrimary, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
            /** Method setPrimary of ContactEmail **/
            var _params_setPrimary = new Array();
            _params_setPrimary.push(new ReflectionParameter('primary', 'ContactEmail setPrimary primary', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPrimary', 'ContactEmail setPrimary', _params_setPrimary, null));
            /** Method getEmail of ContactEmail **/
            var _params_getEmail = new Array();
            _methods.push(new ReflectionMethod('getEmail', 'ContactEmail getEmail', _params_getEmail, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setEmail of ContactEmail **/
            var _params_setEmail = new Array();
            _params_setEmail.push(new ReflectionParameter('email', 'ContactEmail setEmail email', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setEmail', 'ContactEmail setEmail', _params_setEmail, null));
            /** Class description of ContactEmail **/
            var clazz = new ReflectionClass('ContactEmail', 'Bean class ContactEmail', 'ContactEmail', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ContactEmailEmailTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ContactEmail EmailType
        };
        ContactEmailEmailTypeEnum.Personal = new ContactEmailEmailTypeEnum("Personal");
        ContactEmailEmailTypeEnum.Work = new ContactEmailEmailTypeEnum("Work");
        ContactEmailEmailTypeEnum.Other = new ContactEmailEmailTypeEnum("Other");
        ContactEmailEmailTypeEnum.Unknown = new ContactEmailEmailTypeEnum("Unknown");
        return ContactEmailEmailTypeEnum;
    })();
    Adaptive.ContactEmailEmailTypeEnum = ContactEmailEmailTypeEnum;
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
        Endpoint.getReflection = function () {
            /** Fields of Endpoint **/
            var _fields = new Array();
            _fields.push(new ReflectionField('host', 'Field host of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('path', 'Field path of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('port', 'Field port of class Endpoint', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('proxy', 'Field proxy of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('scheme', 'Field scheme of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of Endpoint **/
            var _methods = new Array();
            /** Method getPath of Endpoint **/
            var _params_getPath = new Array();
            _methods.push(new ReflectionMethod('getPath', 'Endpoint getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getScheme of Endpoint **/
            var _params_getScheme = new Array();
            _methods.push(new ReflectionMethod('getScheme', 'Endpoint getScheme', _params_getScheme, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getHost of Endpoint **/
            var _params_getHost = new Array();
            _methods.push(new ReflectionMethod('getHost', 'Endpoint getHost', _params_getHost, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getPort of Endpoint **/
            var _params_getPort = new Array();
            _methods.push(new ReflectionMethod('getPort', 'Endpoint getPort', _params_getPort, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setHost of Endpoint **/
            var _params_setHost = new Array();
            _params_setHost.push(new ReflectionParameter('host', 'Endpoint setHost host', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setHost', 'Endpoint setHost', _params_setHost, null));
            /** Method setPath of Endpoint **/
            var _params_setPath = new Array();
            _params_setPath.push(new ReflectionParameter('path', 'Endpoint setPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPath', 'Endpoint setPath', _params_setPath, null));
            /** Method getProxy of Endpoint **/
            var _params_getProxy = new Array();
            _methods.push(new ReflectionMethod('getProxy', 'Endpoint getProxy', _params_getProxy, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setProxy of Endpoint **/
            var _params_setProxy = new Array();
            _params_setProxy.push(new ReflectionParameter('proxy', 'Endpoint setProxy proxy', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setProxy', 'Endpoint setProxy', _params_setProxy, null));
            /** Method setScheme of Endpoint **/
            var _params_setScheme = new Array();
            _params_setScheme.push(new ReflectionParameter('scheme', 'Endpoint setScheme scheme', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setScheme', 'Endpoint setScheme', _params_setScheme, null));
            /** Method setPort of Endpoint **/
            var _params_setPort = new Array();
            _params_setPort.push(new ReflectionParameter('port', 'Endpoint setPort port', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPort', 'Endpoint setPort', _params_setPort, null));
            /** Class description of Endpoint **/
            var clazz = new ReflectionClass('Endpoint', 'Bean class Endpoint', 'Endpoint', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Endpoint;
    })();
    Adaptive.Endpoint = Endpoint;
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
        Column.getReflection = function () {
            /** Fields of Column **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class Column', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of Column **/
            var _methods = new Array();
            /** Method getName of Column **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Column getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of Column **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Column setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Column setName', _params_setName, null));
            /** Class description of Column **/
            var clazz = new ReflectionClass('Column', 'Bean class Column', 'Column', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Column;
    })();
    Adaptive.Column = Column;
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
        Service.getReflection = function () {
            /** Fields of Service **/
            var _fields = new Array();
            _fields.push(new ReflectionField('endpoint', 'Field endpoint of class Service', Endpoint.getReflection()));
            _fields.push(new ReflectionField('name', 'Field name of class Service', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('method', 'Field method of class Service', ServiceServiceMethodEnum.getReflection()));
            _fields.push(new ReflectionField('type', 'Field type of class Service', ServiceServiceTypeEnum.getReflection()));
            /** Methods of Service **/
            var _methods = new Array();
            /** Method getName of Service **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Service getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getMethod of Service **/
            var _params_getMethod = new Array();
            _methods.push(new ReflectionMethod('getMethod', 'Service getMethod', _params_getMethod, ServiceServiceMethodEnum.getReflection()));
            /** Method setName of Service **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Service setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Service setName', _params_setName, null));
            /** Method getType of Service **/
            var _params_getType = new Array();
            _methods.push(new ReflectionMethod('getType', 'Service getType', _params_getType, ServiceServiceTypeEnum.getReflection()));
            /** Method setType of Service **/
            var _params_setType = new Array();
            _params_setType.push(new ReflectionParameter('type', 'Service setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setType', 'Service setType', _params_setType, null));
            /** Method getEndpoint of Service **/
            var _params_getEndpoint = new Array();
            _methods.push(new ReflectionMethod('getEndpoint', 'Service getEndpoint', _params_getEndpoint, Endpoint.getReflection()));
            /** Method setEndpoint of Service **/
            var _params_setEndpoint = new Array();
            _params_setEndpoint.push(new ReflectionParameter('endpoint', 'Service setEndpoint endpoint', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setEndpoint', 'Service setEndpoint', _params_setEndpoint, null));
            /** Method setMethod of Service **/
            var _params_setMethod = new Array();
            _params_setMethod.push(new ReflectionParameter('method', 'Service setMethod method', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMethod', 'Service setMethod', _params_setMethod, null));
            /** Class description of Service **/
            var clazz = new ReflectionClass('Service', 'Bean class Service', 'Service', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ServiceServiceMethodEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IService ServiceMethod
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
        ServiceServiceTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> IService ServiceType
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
        Lifecycle.getReflection = function () {
            /** Fields of Lifecycle **/
            var _fields = new Array();
            _fields.push(new ReflectionField('state', 'Field state of class Lifecycle', LifecycleStateEnum.getReflection()));
            /** Methods of Lifecycle **/
            var _methods = new Array();
            /** Method getState of Lifecycle **/
            var _params_getState = new Array();
            _methods.push(new ReflectionMethod('getState', 'Lifecycle getState', _params_getState, LifecycleStateEnum.getReflection()));
            /** Method setState of Lifecycle **/
            var _params_setState = new Array();
            _params_setState.push(new ReflectionParameter('state', 'Lifecycle setState state', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setState', 'Lifecycle setState', _params_setState, null));
            /** Class description of Lifecycle **/
            var clazz = new ReflectionClass('Lifecycle', 'Bean class Lifecycle', 'Lifecycle', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        LifecycleStateEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> Lifecycle State
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
        ContactWebsite.getReflection = function () {
            /** Fields of ContactWebsite **/
            var _fields = new Array();
            _fields.push(new ReflectionField('url', 'Field url of class ContactWebsite', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactWebsite **/
            var _methods = new Array();
            /** Method setUrl of ContactWebsite **/
            var _params_setUrl = new Array();
            _params_setUrl.push(new ReflectionParameter('url', 'ContactWebsite setUrl url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setUrl', 'ContactWebsite setUrl', _params_setUrl, null));
            /** Method getUrl of ContactWebsite **/
            var _params_getUrl = new Array();
            _methods.push(new ReflectionMethod('getUrl', 'ContactWebsite getUrl', _params_getUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Class description of ContactWebsite **/
            var clazz = new ReflectionClass('ContactWebsite', 'Bean class ContactWebsite', 'ContactWebsite', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
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
        SecureKeyPair.getReflection = function () {
            /** Fields of SecureKeyPair **/
            var _fields = new Array();
            _fields.push(new ReflectionField('secureKey', 'Field secureKey of class SecureKeyPair', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('secureData', 'Field secureData of class SecureKeyPair', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of SecureKeyPair **/
            var _methods = new Array();
            /** Method getSecureKey of SecureKeyPair **/
            var _params_getSecureKey = new Array();
            _methods.push(new ReflectionMethod('getSecureKey', 'SecureKeyPair getSecureKey', _params_getSecureKey, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setSecureKey of SecureKeyPair **/
            var _params_setSecureKey = new Array();
            _params_setSecureKey.push(new ReflectionParameter('secureKey', 'SecureKeyPair setSecureKey secureKey', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSecureKey', 'SecureKeyPair setSecureKey', _params_setSecureKey, null));
            /** Method getSecureData of SecureKeyPair **/
            var _params_getSecureData = new Array();
            _methods.push(new ReflectionMethod('getSecureData', 'SecureKeyPair getSecureData', _params_getSecureData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setSecureData of SecureKeyPair **/
            var _params_setSecureData = new Array();
            _params_setSecureData.push(new ReflectionParameter('secureData', 'SecureKeyPair setSecureData secureData', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSecureData', 'SecureKeyPair setSecureData', _params_setSecureData, null));
            /** Class description of SecureKeyPair **/
            var clazz = new ReflectionClass('SecureKeyPair', 'Bean class SecureKeyPair', 'SecureKeyPair', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
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
        Row.getReflection = function () {
            /** Fields of Row **/
            var _fields = new Array();
            _fields.push(new ReflectionField('values', 'Field values of class Row', new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));
            /** Methods of Row **/
            var _methods = new Array();
            /** Method getValues of Row **/
            var _params_getValues = new Array();
            _methods.push(new ReflectionMethod('getValues', 'Row getValues', _params_getValues, new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));
            /** Method setValues of Row **/
            var _params_setValues = new Array();
            _params_setValues.push(new ReflectionParameter('values', 'Row setValues values', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setValues', 'Row setValues', _params_setValues, null));
            /** Class description of Row **/
            var clazz = new ReflectionClass('Row', 'Bean class Row', 'Row', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Row;
    })();
    Adaptive.Row = Row;
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
        ContactUid.getReflection = function () {
            /** Fields of ContactUid **/
            var _fields = new Array();
            _fields.push(new ReflectionField('contactId', 'Field contactId of class ContactUid', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactUid **/
            var _methods = new Array();
            /** Method getContactId of ContactUid **/
            var _params_getContactId = new Array();
            _methods.push(new ReflectionMethod('getContactId', 'ContactUid getContactId', _params_getContactId, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setContactId of ContactUid **/
            var _params_setContactId = new Array();
            _params_setContactId.push(new ReflectionParameter('contactId', 'ContactUid setContactId contactId', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactId', 'ContactUid setContactId', _params_setContactId, null));
            /** Class description of ContactUid **/
            var clazz = new ReflectionClass('ContactUid', 'Bean class ContactUid', 'ContactUid', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
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
        ContactPersonalInfo.getReflection = function () {
            /** Fields of ContactPersonalInfo **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('middleName', 'Field middleName of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('lastName', 'Field lastName of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('title', 'Field title of class ContactPersonalInfo', ContactPersonalInfoTitleEnum.getReflection()));
            /** Methods of ContactPersonalInfo **/
            var _methods = new Array();
            /** Method getName of ContactPersonalInfo **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'ContactPersonalInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of ContactPersonalInfo **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'ContactPersonalInfo setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'ContactPersonalInfo setName', _params_setName, null));
            /** Method setMiddleName of ContactPersonalInfo **/
            var _params_setMiddleName = new Array();
            _params_setMiddleName.push(new ReflectionParameter('middleName', 'ContactPersonalInfo setMiddleName middleName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setMiddleName', 'ContactPersonalInfo setMiddleName', _params_setMiddleName, null));
            /** Method getMiddleName of ContactPersonalInfo **/
            var _params_getMiddleName = new Array();
            _methods.push(new ReflectionMethod('getMiddleName', 'ContactPersonalInfo getMiddleName', _params_getMiddleName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getTitle of ContactPersonalInfo **/
            var _params_getTitle = new Array();
            _methods.push(new ReflectionMethod('getTitle', 'ContactPersonalInfo getTitle', _params_getTitle, ContactPersonalInfoTitleEnum.getReflection()));
            /** Method getLastName of ContactPersonalInfo **/
            var _params_getLastName = new Array();
            _methods.push(new ReflectionMethod('getLastName', 'ContactPersonalInfo getLastName', _params_getLastName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setLastName of ContactPersonalInfo **/
            var _params_setLastName = new Array();
            _params_setLastName.push(new ReflectionParameter('lastName', 'ContactPersonalInfo setLastName lastName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setLastName', 'ContactPersonalInfo setLastName', _params_setLastName, null));
            /** Method setTitle of ContactPersonalInfo **/
            var _params_setTitle = new Array();
            _params_setTitle.push(new ReflectionParameter('title', 'ContactPersonalInfo setTitle title', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setTitle', 'ContactPersonalInfo setTitle', _params_setTitle, null));
            /** Class description of ContactPersonalInfo **/
            var clazz = new ReflectionClass('ContactPersonalInfo', 'Bean class ContactPersonalInfo', 'ContactPersonalInfo', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ContactPersonalInfoTitleEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ContactPersonalInfo Title
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
        Header.getReflection = function () {
            /** Fields of Header **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class Header', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('data', 'Field data of class Header', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of Header **/
            var _methods = new Array();
            /** Method getName of Header **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Header getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of Header **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Header setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Header setName', _params_setName, null));
            /** Method getData of Header **/
            var _params_getData = new Array();
            _methods.push(new ReflectionMethod('getData', 'Header getData', _params_getData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setData of Header **/
            var _params_setData = new Array();
            _params_setData.push(new ReflectionParameter('data', 'Header setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setData', 'Header setData', _params_setData, null));
            /** Class description of Header **/
            var clazz = new ReflectionClass('Header', 'Bean class Header', 'Header', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Header;
    })();
    Adaptive.Header = Header;
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
        Contact.getReflection = function () {
            /** Fields of Contact **/
            var _fields = new Array();
            _fields.push(new ReflectionField('personalInfo', 'Field personalInfo of class Contact', ContactPersonalInfo.getReflection()));
            _fields.push(new ReflectionField('professionalInfo', 'Field professionalInfo of class Contact', ContactProfessionalInfo.getReflection()));
            _fields.push(new ReflectionField('contactAddresses', 'Field contactAddresses of class Contact', new ReflectionClass('Array<ContactAddress>', 'Array of ContactAddress', 'Array<ContactAddress>', null, null, Adaptive.getReflection()).setTypeComponent(ContactAddress.getReflection())));
            _fields.push(new ReflectionField('contactPhones', 'Field contactPhones of class Contact', new ReflectionClass('Array<ContactPhone>', 'Array of ContactPhone', 'Array<ContactPhone>', null, null, Adaptive.getReflection()).setTypeComponent(ContactPhone.getReflection())));
            _fields.push(new ReflectionField('contactEmails', 'Field contactEmails of class Contact', new ReflectionClass('Array<ContactEmail>', 'Array of ContactEmail', 'Array<ContactEmail>', null, null, Adaptive.getReflection()).setTypeComponent(ContactEmail.getReflection())));
            _fields.push(new ReflectionField('contactWebsites', 'Field contactWebsites of class Contact', new ReflectionClass('Array<ContactWebsite>', 'Array of ContactWebsite', 'Array<ContactWebsite>', null, null, Adaptive.getReflection()).setTypeComponent(ContactWebsite.getReflection())));
            _fields.push(new ReflectionField('contactSocials', 'Field contactSocials of class Contact', new ReflectionClass('Array<ContactSocial>', 'Array of ContactSocial', 'Array<ContactSocial>', null, null, Adaptive.getReflection()).setTypeComponent(ContactSocial.getReflection())));
            _fields.push(new ReflectionField('contactTags', 'Field contactTags of class Contact', new ReflectionClass('Array<ContactTag>', 'Array of ContactTag', 'Array<ContactTag>', null, null, Adaptive.getReflection()).setTypeComponent(ContactTag.getReflection())));
            /** Methods of Contact **/
            var _methods = new Array();
            /** Method getPersonalInfo of Contact **/
            var _params_getPersonalInfo = new Array();
            _methods.push(new ReflectionMethod('getPersonalInfo', 'Contact getPersonalInfo', _params_getPersonalInfo, ContactPersonalInfo.getReflection()));
            /** Method setPersonalInfo of Contact **/
            var _params_setPersonalInfo = new Array();
            _params_setPersonalInfo.push(new ReflectionParameter('personalInfo', 'Contact setPersonalInfo personalInfo', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPersonalInfo', 'Contact setPersonalInfo', _params_setPersonalInfo, null));
            /** Method getProfessionalInfo of Contact **/
            var _params_getProfessionalInfo = new Array();
            _methods.push(new ReflectionMethod('getProfessionalInfo', 'Contact getProfessionalInfo', _params_getProfessionalInfo, ContactProfessionalInfo.getReflection()));
            /** Method setProfessionalInfo of Contact **/
            var _params_setProfessionalInfo = new Array();
            _params_setProfessionalInfo.push(new ReflectionParameter('professionalInfo', 'Contact setProfessionalInfo professionalInfo', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setProfessionalInfo', 'Contact setProfessionalInfo', _params_setProfessionalInfo, null));
            /** Method getContactAddresses of Contact **/
            var _params_getContactAddresses = new Array();
            _methods.push(new ReflectionMethod('getContactAddresses', 'Contact getContactAddresses', _params_getContactAddresses, new ReflectionClass('Array<ContactAddress>', 'Array of ContactAddress', 'Array<ContactAddress>', null, null, Adaptive.getReflection()).setTypeComponent(ContactAddress.getReflection())));
            /** Method setContactAddresses of Contact **/
            var _params_setContactAddresses = new Array();
            _params_setContactAddresses.push(new ReflectionParameter('contactAddresses', 'Contact setContactAddresses contactAddresses', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactAddresses', 'Contact setContactAddresses', _params_setContactAddresses, null));
            /** Method getContactPhones of Contact **/
            var _params_getContactPhones = new Array();
            _methods.push(new ReflectionMethod('getContactPhones', 'Contact getContactPhones', _params_getContactPhones, new ReflectionClass('Array<ContactPhone>', 'Array of ContactPhone', 'Array<ContactPhone>', null, null, Adaptive.getReflection()).setTypeComponent(ContactPhone.getReflection())));
            /** Method setContactPhones of Contact **/
            var _params_setContactPhones = new Array();
            _params_setContactPhones.push(new ReflectionParameter('contactPhones', 'Contact setContactPhones contactPhones', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactPhones', 'Contact setContactPhones', _params_setContactPhones, null));
            /** Method getContactEmails of Contact **/
            var _params_getContactEmails = new Array();
            _methods.push(new ReflectionMethod('getContactEmails', 'Contact getContactEmails', _params_getContactEmails, new ReflectionClass('Array<ContactEmail>', 'Array of ContactEmail', 'Array<ContactEmail>', null, null, Adaptive.getReflection()).setTypeComponent(ContactEmail.getReflection())));
            /** Method setContactEmails of Contact **/
            var _params_setContactEmails = new Array();
            _params_setContactEmails.push(new ReflectionParameter('contactEmails', 'Contact setContactEmails contactEmails', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactEmails', 'Contact setContactEmails', _params_setContactEmails, null));
            /** Method getContactWebsites of Contact **/
            var _params_getContactWebsites = new Array();
            _methods.push(new ReflectionMethod('getContactWebsites', 'Contact getContactWebsites', _params_getContactWebsites, new ReflectionClass('Array<ContactWebsite>', 'Array of ContactWebsite', 'Array<ContactWebsite>', null, null, Adaptive.getReflection()).setTypeComponent(ContactWebsite.getReflection())));
            /** Method setContactWebsites of Contact **/
            var _params_setContactWebsites = new Array();
            _params_setContactWebsites.push(new ReflectionParameter('contactWebsites', 'Contact setContactWebsites contactWebsites', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactWebsites', 'Contact setContactWebsites', _params_setContactWebsites, null));
            /** Method getContactSocials of Contact **/
            var _params_getContactSocials = new Array();
            _methods.push(new ReflectionMethod('getContactSocials', 'Contact getContactSocials', _params_getContactSocials, new ReflectionClass('Array<ContactSocial>', 'Array of ContactSocial', 'Array<ContactSocial>', null, null, Adaptive.getReflection()).setTypeComponent(ContactSocial.getReflection())));
            /** Method setContactSocials of Contact **/
            var _params_setContactSocials = new Array();
            _params_setContactSocials.push(new ReflectionParameter('contactSocials', 'Contact setContactSocials contactSocials', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactSocials', 'Contact setContactSocials', _params_setContactSocials, null));
            /** Method getContactTags of Contact **/
            var _params_getContactTags = new Array();
            _methods.push(new ReflectionMethod('getContactTags', 'Contact getContactTags', _params_getContactTags, new ReflectionClass('Array<ContactTag>', 'Array of ContactTag', 'Array<ContactTag>', null, null, Adaptive.getReflection()).setTypeComponent(ContactTag.getReflection())));
            /** Method setContactTags of Contact **/
            var _params_setContactTags = new Array();
            _params_setContactTags.push(new ReflectionParameter('contactTags', 'Contact setContactTags contactTags', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContactTags', 'Contact setContactTags', _params_setContactTags, null));
            /** Class description of Contact **/
            var clazz = new ReflectionClass('Contact', 'Bean class Contact', 'Contact', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
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
        ContactPhone.getReflection = function () {
            /** Fields of ContactPhone **/
            var _fields = new Array();
            _fields.push(new ReflectionField('phone', 'Field phone of class ContactPhone', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('phoneType', 'Field phoneType of class ContactPhone', ContactPhonePhoneTypeEnum.getReflection()));
            /** Methods of ContactPhone **/
            var _methods = new Array();
            /** Method getPhone of ContactPhone **/
            var _params_getPhone = new Array();
            _methods.push(new ReflectionMethod('getPhone', 'ContactPhone getPhone', _params_getPhone, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setPhone of ContactPhone **/
            var _params_setPhone = new Array();
            _params_setPhone.push(new ReflectionParameter('phone', 'ContactPhone setPhone phone', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPhone', 'ContactPhone setPhone', _params_setPhone, null));
            /** Method getPhoneType of ContactPhone **/
            var _params_getPhoneType = new Array();
            _methods.push(new ReflectionMethod('getPhoneType', 'ContactPhone getPhoneType', _params_getPhoneType, ContactPhonePhoneTypeEnum.getReflection()));
            /** Method setPhoneType of ContactPhone **/
            var _params_setPhoneType = new Array();
            _params_setPhoneType.push(new ReflectionParameter('phoneType', 'ContactPhone setPhoneType phoneType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setPhoneType', 'ContactPhone setPhoneType', _params_setPhoneType, null));
            /** Class description of ContactPhone **/
            var clazz = new ReflectionClass('ContactPhone', 'Bean class ContactPhone', 'ContactPhone', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ContactPhonePhoneTypeEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ContactPhone PhoneType
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
        Geolocation.getReflection = function () {
            /** Fields of Geolocation **/
            var _fields = new Array();
            _fields.push(new ReflectionField('latitude', 'Field latitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('longitude', 'Field longitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('altitude', 'Field altitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('xDoP', 'Field xDoP of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('yDoP', 'Field yDoP of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Methods of Geolocation **/
            var _methods = new Array();
            /** Method getXDoP of Geolocation **/
            var _params_getXDoP = new Array();
            _methods.push(new ReflectionMethod('getXDoP', 'Geolocation getXDoP', _params_getXDoP, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method getYDoP of Geolocation **/
            var _params_getYDoP = new Array();
            _methods.push(new ReflectionMethod('getYDoP', 'Geolocation getYDoP', _params_getYDoP, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method getLatitude of Geolocation **/
            var _params_getLatitude = new Array();
            _methods.push(new ReflectionMethod('getLatitude', 'Geolocation getLatitude', _params_getLatitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setLatitude of Geolocation **/
            var _params_setLatitude = new Array();
            _params_setLatitude.push(new ReflectionParameter('latitude', 'Geolocation setLatitude latitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setLatitude', 'Geolocation setLatitude', _params_setLatitude, null));
            /** Method getLongitude of Geolocation **/
            var _params_getLongitude = new Array();
            _methods.push(new ReflectionMethod('getLongitude', 'Geolocation getLongitude', _params_getLongitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setLongitude of Geolocation **/
            var _params_setLongitude = new Array();
            _params_setLongitude.push(new ReflectionParameter('longitude', 'Geolocation setLongitude longitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setLongitude', 'Geolocation setLongitude', _params_setLongitude, null));
            /** Method getAltitude of Geolocation **/
            var _params_getAltitude = new Array();
            _methods.push(new ReflectionMethod('getAltitude', 'Geolocation getAltitude', _params_getAltitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setAltitude of Geolocation **/
            var _params_setAltitude = new Array();
            _params_setAltitude.push(new ReflectionParameter('altitude', 'Geolocation setAltitude altitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setAltitude', 'Geolocation setAltitude', _params_setAltitude, null));
            /** Class description of Geolocation **/
            var clazz = new ReflectionClass('Geolocation', 'Bean class Geolocation', 'Geolocation', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Geolocation;
    })();
    Adaptive.Geolocation = Geolocation;
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
        Button.getReflection = function () {
            /** Fields of Button **/
            var _fields = new Array();
            _fields.push(new ReflectionField('type', 'Field type of class Button', ButtonButtonEnum.getReflection()));
            /** Methods of Button **/
            var _methods = new Array();
            /** Method getType of Button **/
            var _params_getType = new Array();
            _methods.push(new ReflectionMethod('getType', 'Button getType', _params_getType, ButtonButtonEnum.getReflection()));
            /** Class description of Button **/
            var clazz = new ReflectionClass('Button', 'Bean class Button', 'Button', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ButtonButtonEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ICapabilities Button
        };
        ButtonButtonEnum.HomeButton = new ButtonButtonEnum("HomeButton");
        ButtonButtonEnum.BackButton = new ButtonButtonEnum("BackButton");
        ButtonButtonEnum.OptionButton = new ButtonButtonEnum("OptionButton");
        ButtonButtonEnum.Unknown = new ButtonButtonEnum("Unknown");
        return ButtonButtonEnum;
    })();
    Adaptive.ButtonButtonEnum = ButtonButtonEnum;
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
        OSInfo.getReflection = function () {
            /** Fields of OSInfo **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('version', 'Field version of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('vendor', 'Field vendor of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of OSInfo **/
            var _methods = new Array();
            /** Method getName of OSInfo **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'OSInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getVendor of OSInfo **/
            var _params_getVendor = new Array();
            _methods.push(new ReflectionMethod('getVendor', 'OSInfo getVendor', _params_getVendor, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getVersion of OSInfo **/
            var _params_getVersion = new Array();
            _methods.push(new ReflectionMethod('getVersion', 'OSInfo getVersion', _params_getVersion, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Class description of OSInfo **/
            var clazz = new ReflectionClass('OSInfo', 'Bean class OSInfo', 'OSInfo', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
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
        Locale.getReflection = function () {
            /** Fields of Locale **/
            var _fields = new Array();
            _fields.push(new ReflectionField('country', 'Field country of class Locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('language', 'Field language of class Locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of Locale **/
            var _methods = new Array();
            /** Method toString of Locale **/
            var _params_toString = new Array();
            _methods.push(new ReflectionMethod('toString', 'Locale toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getLanguage of Locale **/
            var _params_getLanguage = new Array();
            _methods.push(new ReflectionMethod('getLanguage', 'Locale getLanguage', _params_getLanguage, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getCountry of Locale **/
            var _params_getCountry = new Array();
            _methods.push(new ReflectionMethod('getCountry', 'Locale getCountry', _params_getCountry, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setCountry of Locale **/
            var _params_setCountry = new Array();
            _params_setCountry.push(new ReflectionParameter('country', 'Locale setCountry country', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setCountry', 'Locale setCountry', _params_setCountry, null));
            /** Method setLanguage of Locale **/
            var _params_setLanguage = new Array();
            _params_setLanguage.push(new ReflectionParameter('language', 'Locale setLanguage language', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setLanguage', 'Locale setLanguage', _params_setLanguage, null));
            /** Class description of Locale **/
            var clazz = new ReflectionClass('Locale', 'Bean class Locale', 'Locale', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Locale;
    })();
    Adaptive.Locale = Locale;
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
        ContactSocial.getReflection = function () {
            /** Fields of ContactSocial **/
            var _fields = new Array();
            _fields.push(new ReflectionField('socialNetwork', 'Field socialNetwork of class ContactSocial', ContactSocialSocialNetworkEnum.getReflection()));
            _fields.push(new ReflectionField('profileUrl', 'Field profileUrl of class ContactSocial', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ContactSocial **/
            var _methods = new Array();
            /** Method getSocialNetwork of ContactSocial **/
            var _params_getSocialNetwork = new Array();
            _methods.push(new ReflectionMethod('getSocialNetwork', 'ContactSocial getSocialNetwork', _params_getSocialNetwork, ContactSocialSocialNetworkEnum.getReflection()));
            /** Method setSocialNetwork of ContactSocial **/
            var _params_setSocialNetwork = new Array();
            _params_setSocialNetwork.push(new ReflectionParameter('socialNetwork', 'ContactSocial setSocialNetwork socialNetwork', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSocialNetwork', 'ContactSocial setSocialNetwork', _params_setSocialNetwork, null));
            /** Method getProfileUrl of ContactSocial **/
            var _params_getProfileUrl = new Array();
            _methods.push(new ReflectionMethod('getProfileUrl', 'ContactSocial getProfileUrl', _params_getProfileUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setProfileUrl of ContactSocial **/
            var _params_setProfileUrl = new Array();
            _params_setProfileUrl.push(new ReflectionParameter('profileUrl', 'ContactSocial setProfileUrl profileUrl', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setProfileUrl', 'ContactSocial setProfileUrl', _params_setProfileUrl, null));
            /** Class description of ContactSocial **/
            var clazz = new ReflectionClass('ContactSocial', 'Bean class ContactSocial', 'ContactSocial', _methods, _fields, Adaptive.getReflection());
            return clazz;
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
        ContactSocialSocialNetworkEnum.getReflection = function () {
            return null; // TODO: Implement reflection -> ContactSocial SocialNetwork
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
        Table.getReflection = function () {
            /** Fields of Table **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class Table', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('columnCount', 'Field columnCount of class Table', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('rowCount', 'Field rowCount of class Table', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('columns', 'Field columns of class Table', new ReflectionClass('Array<Column>', 'Array of Column', 'Array<Column>', null, null, Adaptive.getReflection()).setTypeComponent(Column.getReflection())));
            _fields.push(new ReflectionField('rows', 'Field rows of class Table', new ReflectionClass('Array<Row>', 'Array of Row', 'Array<Row>', null, null, Adaptive.getReflection()).setTypeComponent(Row.getReflection())));
            /** Methods of Table **/
            var _methods = new Array();
            /** Method getName of Table **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'Table getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setName of Table **/
            var _params_setName = new Array();
            _params_setName.push(new ReflectionParameter('name', 'Table setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setName', 'Table setName', _params_setName, null));
            /** Method setRows of Table **/
            var _params_setRows = new Array();
            _params_setRows.push(new ReflectionParameter('rows', 'Table setRows rows', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setRows', 'Table setRows', _params_setRows, null));
            /** Method getColumnCount of Table **/
            var _params_getColumnCount = new Array();
            _methods.push(new ReflectionMethod('getColumnCount', 'Table getColumnCount', _params_getColumnCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setColumnCount of Table **/
            var _params_setColumnCount = new Array();
            _params_setColumnCount.push(new ReflectionParameter('columnCount', 'Table setColumnCount columnCount', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setColumnCount', 'Table setColumnCount', _params_setColumnCount, null));
            /** Method getRowCount of Table **/
            var _params_getRowCount = new Array();
            _methods.push(new ReflectionMethod('getRowCount', 'Table getRowCount', _params_getRowCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method getRows of Table **/
            var _params_getRows = new Array();
            _methods.push(new ReflectionMethod('getRows', 'Table getRows', _params_getRows, new ReflectionClass('Array<Row>', 'Array of Row', 'Array<Row>', null, null, Adaptive.getReflection()).setTypeComponent(Row.getReflection())));
            /** Method setRowCount of Table **/
            var _params_setRowCount = new Array();
            _params_setRowCount.push(new ReflectionParameter('rowCount', 'Table setRowCount rowCount', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setRowCount', 'Table setRowCount', _params_setRowCount, null));
            /** Method getColumns of Table **/
            var _params_getColumns = new Array();
            _methods.push(new ReflectionMethod('getColumns', 'Table getColumns', _params_getColumns, new ReflectionClass('Array<Column>', 'Array of Column', 'Array<Column>', null, null, Adaptive.getReflection()).setTypeComponent(Column.getReflection())));
            /** Method setColumns of Table **/
            var _params_setColumns = new Array();
            _params_setColumns.push(new ReflectionParameter('columns', 'Table setColumns columns', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setColumns', 'Table setColumns', _params_setColumns, null));
            /** Class description of Table **/
            var clazz = new ReflectionClass('Table', 'Bean class Table', 'Table', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return Table;
    })();
    Adaptive.Table = Table;
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
        ServiceResponse.getReflection = function () {
            /** Fields of ServiceResponse **/
            var _fields = new Array();
            _fields.push(new ReflectionField('content', 'Field content of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('contentType', 'Field contentType of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('contentLength', 'Field contentLength of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('contentBinary', 'Field contentBinary of class ServiceResponse', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            _fields.push(new ReflectionField('contentBinaryLength', 'Field contentBinaryLength of class ServiceResponse', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('headers', 'Field headers of class ServiceResponse', new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
            _fields.push(new ReflectionField('session', 'Field session of class ServiceResponse', SessionBridge.getReflection()));
            _fields.push(new ReflectionField('contentEncoding', 'Field contentEncoding of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of ServiceResponse **/
            var _methods = new Array();
            /** Method getContent of ServiceResponse **/
            var _params_getContent = new Array();
            _methods.push(new ReflectionMethod('getContent', 'ServiceResponse getContent', _params_getContent, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getContentBinary of ServiceResponse **/
            var _params_getContentBinary = new Array();
            _methods.push(new ReflectionMethod('getContentBinary', 'ServiceResponse getContentBinary', _params_getContentBinary, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
            /** Method setContentBinary of ServiceResponse **/
            var _params_setContentBinary = new Array();
            _params_setContentBinary.push(new ReflectionParameter('contentBinary', 'ServiceResponse setContentBinary contentBinary', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentBinary', 'ServiceResponse setContentBinary', _params_setContentBinary, null));
            /** Method getContentBinaryLength of ServiceResponse **/
            var _params_getContentBinaryLength = new Array();
            _methods.push(new ReflectionMethod('getContentBinaryLength', 'ServiceResponse getContentBinaryLength', _params_getContentBinaryLength, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
            /** Method setContentBinaryLength of ServiceResponse **/
            var _params_setContentBinaryLength = new Array();
            _params_setContentBinaryLength.push(new ReflectionParameter('contentBinaryLength', 'ServiceResponse setContentBinaryLength contentBinaryLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentBinaryLength', 'ServiceResponse setContentBinaryLength', _params_setContentBinaryLength, null));
            /** Method setHeaders of ServiceResponse **/
            var _params_setHeaders = new Array();
            _params_setHeaders.push(new ReflectionParameter('headers', 'ServiceResponse setHeaders headers', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setHeaders', 'ServiceResponse setHeaders', _params_setHeaders, null));
            /** Method getSession of ServiceResponse **/
            var _params_getSession = new Array();
            _methods.push(new ReflectionMethod('getSession', 'ServiceResponse getSession', _params_getSession, SessionBridge.getReflection()));
            /** Method setSession of ServiceResponse **/
            var _params_setSession = new Array();
            _params_setSession.push(new ReflectionParameter('session', 'ServiceResponse setSession session', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setSession', 'ServiceResponse setSession', _params_setSession, null));
            /** Method setContentEncoding of ServiceResponse **/
            var _params_setContentEncoding = new Array();
            _params_setContentEncoding.push(new ReflectionParameter('contentEncoding', 'ServiceResponse setContentEncoding contentEncoding', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentEncoding', 'ServiceResponse setContentEncoding', _params_setContentEncoding, null));
            /** Method setContent of ServiceResponse **/
            var _params_setContent = new Array();
            _params_setContent.push(new ReflectionParameter('content', 'ServiceResponse setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContent', 'ServiceResponse setContent', _params_setContent, null));
            /** Method getContentLength of ServiceResponse **/
            var _params_getContentLength = new Array();
            _methods.push(new ReflectionMethod('getContentLength', 'ServiceResponse getContentLength', _params_getContentLength, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getContentType of ServiceResponse **/
            var _params_getContentType = new Array();
            _methods.push(new ReflectionMethod('getContentType', 'ServiceResponse getContentType', _params_getContentType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setContentType of ServiceResponse **/
            var _params_setContentType = new Array();
            _params_setContentType.push(new ReflectionParameter('contentType', 'ServiceResponse setContentType contentType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentType', 'ServiceResponse setContentType', _params_setContentType, null));
            /** Method setContentLength of ServiceResponse **/
            var _params_setContentLength = new Array();
            _params_setContentLength.push(new ReflectionParameter('contentLength', 'ServiceResponse setContentLength contentLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setContentLength', 'ServiceResponse setContentLength', _params_setContentLength, null));
            /** Method getContentEncoding of ServiceResponse **/
            var _params_getContentEncoding = new Array();
            _methods.push(new ReflectionMethod('getContentEncoding', 'ServiceResponse getContentEncoding', _params_getContentEncoding, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getHeaders of ServiceResponse **/
            var _params_getHeaders = new Array();
            _methods.push(new ReflectionMethod('getHeaders', 'ServiceResponse getHeaders', _params_getHeaders, new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
            /** Class description of ServiceResponse **/
            var clazz = new ReflectionClass('ServiceResponse', 'Bean class ServiceResponse', 'ServiceResponse', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return ServiceResponse;
    })();
    Adaptive.ServiceResponse = ServiceResponse;
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
        EmailAddress.getReflection = function () {
            /** Fields of EmailAddress **/
            var _fields = new Array();
            _fields.push(new ReflectionField('address', 'Field address of class EmailAddress', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of EmailAddress **/
            var _methods = new Array();
            /** Method getAddress of EmailAddress **/
            var _params_getAddress = new Array();
            _methods.push(new ReflectionMethod('getAddress', 'EmailAddress getAddress', _params_getAddress, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method setAddress of EmailAddress **/
            var _params_setAddress = new Array();
            _params_setAddress.push(new ReflectionParameter('address', 'EmailAddress setAddress address', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
            _methods.push(new ReflectionMethod('setAddress', 'EmailAddress setAddress', _params_setAddress, null));
            /** Class description of EmailAddress **/
            var clazz = new ReflectionClass('EmailAddress', 'Bean class EmailAddress', 'EmailAddress', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return EmailAddress;
    })();
    Adaptive.EmailAddress = EmailAddress;
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
        DeviceInfo.getReflection = function () {
            /** Fields of DeviceInfo **/
            var _fields = new Array();
            _fields.push(new ReflectionField('name', 'Field name of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('model', 'Field model of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('vendor', 'Field vendor of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            _fields.push(new ReflectionField('uuid', 'Field uuid of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Methods of DeviceInfo **/
            var _methods = new Array();
            /** Method getName of DeviceInfo **/
            var _params_getName = new Array();
            _methods.push(new ReflectionMethod('getName', 'DeviceInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getVendor of DeviceInfo **/
            var _params_getVendor = new Array();
            _methods.push(new ReflectionMethod('getVendor', 'DeviceInfo getVendor', _params_getVendor, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getUuid of DeviceInfo **/
            var _params_getUuid = new Array();
            _methods.push(new ReflectionMethod('getUuid', 'DeviceInfo getUuid', _params_getUuid, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Method getModel of DeviceInfo **/
            var _params_getModel = new Array();
            _methods.push(new ReflectionMethod('getModel', 'DeviceInfo getModel', _params_getModel, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
            /** Class description of DeviceInfo **/
            var clazz = new ReflectionClass('DeviceInfo', 'Bean class DeviceInfo', 'DeviceInfo', _methods, _fields, Adaptive.getReflection());
            return clazz;
        };
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=adaptive.js.map