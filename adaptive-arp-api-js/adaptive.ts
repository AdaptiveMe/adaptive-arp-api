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

module Adaptive {

     /** Dictionary Definition **/
     export interface IDictionary<V> {
          add(key: string, value: V): void;
          remove(key: string): void;
          containsKey(key: string): boolean;
          keys(): string[];
          values(): V[];
     }

     export class Dictionary<V> implements IDictionary<V>{
     
         _keys: Array<string> = new Array<string>();
         _values: Array<V> = new Array<V>();
     
         constructor(init: { key: string; value: V; }[]) {
     
             for (var x = 0; x < init.length; x++) {
                 this[init[x].key] = init[x].value;
                 this._keys.push(init[x].key);
                 this._values.push(init[x].value);
             }
         }
     
         add(key: string, value: V) {
             this[key] = value;
             this._keys.push(key);
             this._values.push(value);
         }
     
         remove(key: string) {
             var index = this._keys.indexOf(key, 0);
             this._keys.splice(index, 1);
             this._values.splice(index, 1);
     
             delete this[key];
         }
     
         keys(): string[] {
             return this._keys;
         }
     
         values(): V[] {
             return this._values;
         }
     
         containsKey(key: string) {
             if (typeof this[key] === "undefined") {
                 return false;
             }
     
             return true;
         }
     
         toLookup(): IDictionary<V> {
             return this;
         }
     }

     var registeredCounter : number = 0;
     var bridgePath : string = "https://adaptiveapp";

     /**
      *   Reflection support classes for metadata documentation.
      */
    export class ReflectionBase {
        name:string;
        description:string;

        constructor(name:string, description:string) {
            this.name = name;
            this.description = description;
        }

        getName():string {
            return this.name;
        }

        getDescription():string {
            return this.description;
        }
    }

    export class ReflectionPackage extends ReflectionBase {
        _classes:Array<ReflectionClass> = new Array<ReflectionClass>();

        constructor(name:string, description:string) {
            super(name, description);
        }

        addClass(clazz:ReflectionClass):void {
            this._classes.push(clazz);
        }

        getClasses():Array<ReflectionClass> {
            return this._classes;
        }

    }

    export class ReflectionMember extends ReflectionBase {

    }

    export class ReflectionClass extends ReflectionBase {
        _isarray:boolean = false;
        _isprimitive:boolean = false;
        _isenum:boolean = false;
        _fields:Array<ReflectionField> = new Array<ReflectionField>();
        _methods:Array<ReflectionMethod> = new Array<ReflectionMethod>();
        _package:ReflectionPackage;
        _type:string = "null";
        _typeComponent:ReflectionClass;

        constructor(name:string, description:string, type:string, _methods:Array<ReflectionMethod>, _fields:Array<ReflectionField>, _package:ReflectionPackage) {
            super(name, description);
            this._package = _package;
            this._type = type;
            if (this._type == null) {
                this._type = "null";
            } else if (this._type == "string" || this._type == "number" || this._type == "boolean") {
                this._isprimitive = true;
            } else if (this._type.indexOf("Array") == 0) {
                this._isarray = true;
            } else if (this._type.indexOf("Enum") > -1) {
                this._isenum = true;
            }

            if (_methods != null) {
                this._methods = _methods;
            }
            if (_fields != null) {
                this._fields = _fields;
            }
        }

        setTypeComponent(typeComponent:ReflectionClass):ReflectionClass {
            this._typeComponent = typeComponent;
            return this;
        }

        getFields():Array<ReflectionField> {
            return this._fields;
        }

        getMethods():Array<ReflectionMethod> {
            return this._methods;
        }

        getType():string {
            return this._type;
        }

    }

    export class ReflectionMethod extends ReflectionBase {
        _returnType:ReflectionClass;
        _isvoid:boolean = true;
        _parameters:Array<ReflectionParameter> = new Array<ReflectionParameter>();

        constructor(name:string, description:string, _parameters:Array<ReflectionParameter>, _returnType:ReflectionClass) {
            super(name, description)
            if (_parameters != null) {
                this._parameters = _parameters;
            }
            if (_returnType == null) {
                this._isvoid = true;
                this._returnType = null;
            } else {
                this._isvoid = false;
                this._returnType = _returnType;
            }
        }

        isVoid():boolean {
            return this._isvoid;
        }

        getParameters():Array<ReflectionParameter> {
            return this._parameters;
        }

        getParameterCount():number {
            return this._parameters.length;
        }

        getReturnType():ReflectionClass {
            return this._returnType;
        }
    }

    export class ReflectionParameter extends ReflectionBase {
        _type:ReflectionClass;

        constructor(name:string, description:string, _type:ReflectionClass) {
            super(name, description)
            this._type = _type;
        }

        getType():ReflectionClass {
            return this._type;
        }
    }

    export class ReflectionField extends ReflectionBase {
        type:ReflectionClass;

        constructor(name:string, description:string, type:ReflectionClass) {
            super(name, description);
            this.type = type;
        }

        getType():ReflectionClass {
            return this.type;
        }
    }

    var _package : ReflectionPackage = null;

    export function getReflection() : ReflectionPackage {
        if (_package == null) {
            _package = new ReflectionPackage("Adaptive","Adaptive Runtime Platform JS API");
        }
        return _package;
    }
     /**
      *   Interface definition for IAdaptiveRP
      **/
     export interface IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseUI
      **/
     export interface IBaseUI extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseListener
      **/
     export interface IBaseListener extends IAdaptiveRP {

          /**
           * Method Declarations for IBaseListener
           */
           getId() : number;
           toString() : string;
     }

     /**
      *  Listener IBaseListener implementation.
      */
     export class BaseListener implements IBaseListener {
          description: string;
          id: number;

          constructor() {
               this.id = ++registeredCounter;
          }

          toString() : string {
               return "BaseListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }


          static getReflection() : ReflectionClass {

               /** Fields of BaseListener **/
               var _fields = new Array<ReflectionField>();

               /** Methods of BaseListener **/
               var _methods = new Array<ReflectionMethod>();
               /** Method toString of BaseListener **/
               var _params_toString: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toString','BaseListener toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getId of BaseListener **/
               var _params_getId: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getId','BaseListener getId', _params_getId, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Class description of IBaseListener **/
               var clazz = new ReflectionClass('BaseListener','Listener/Callback class BaseListener', 'BaseListener', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IBaseUtil
      **/
     export interface IBaseUtil extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseSocial
      **/
     export interface IBaseSocial extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppContext
      **/
     export interface IAppContext extends IAdaptiveRP {

          /**
           * Method Declarations for IAppContext
           */
           getContext() : any;
           getContextType() : IAppContextTypeEnum;

     }
     /**
      *  Enumerations for IAppContext Type
      **/
     export class IAppContextTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static iOS = new IAppContextTypeEnum("iOS");
          static OSX = new IAppContextTypeEnum("OSX");
          static Windows = new IAppContextTypeEnum("Windows");
          static WindowsPhone = new IAppContextTypeEnum("WindowsPhone");
          static Android = new IAppContextTypeEnum("Android");
          static Linux = new IAppContextTypeEnum("Linux");
          static Blackberry = new IAppContextTypeEnum("Blackberry");
          static Tizen = new IAppContextTypeEnum("Tizen");
          static FirefoxOS = new IAppContextTypeEnum("FirefoxOS");
          static Chromium = new IAppContextTypeEnum("Chromium");
          static Unspecified = new IAppContextTypeEnum("Unspecified");
          static Unknown = new IAppContextTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppContext Type
          }
     }

     /**
      *   Interface definition for IBaseApplication
      **/
     export interface IBaseApplication extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBasePIM
      **/
     export interface IBasePIM extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppContextWebview
      **/
     export interface IAppContextWebview extends IAdaptiveRP {

          /**
           * Method Declarations for IAppContextWebview
           */
           addWebview(webView : any);
           getWebviewPrimary() : any;
           getWebviews() : Array<any>;
           removeWebview(webView : any);
     }

     /**
      *   Interface definition for IBaseSystem
      **/
     export interface IBaseSystem extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseNotification
      **/
     export interface IBaseNotification extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppResource
      **/
     export interface IAppResource extends IAdaptiveRP {

          /**
           * Method Declarations for IAppResource
           */
           geType() : IAppResourcePayloadEnum;
           getData() : Array<number>;
           getDataPathLinked() : string;
           getDataStored() : Array<number>;
           getFormat() : IAppResourceFormatEnum;
           getMd5() : string;
           getMimetype() : string;
           getName() : string;
           getPath() : string;
           getSize() : number;
           getSizeStored() : number;
           getTimestamp() : number;
           getType() : IAppResourceTypeEnum;
           getUuid() : string;

     }
     /**
      *  Enumerations for IAppResource Payload
      **/
     export class IAppResourcePayloadEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Default = new IAppResourcePayloadEnum("Default");
          static Embedded = new IAppResourcePayloadEnum("Embedded");
          static Linked = new IAppResourcePayloadEnum("Linked");
          static Unknown = new IAppResourcePayloadEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppResource Payload
          }
     }

     /**
      *  Enumerations for IAppResource Format
      **/
     export class IAppResourceFormatEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Raw = new IAppResourceFormatEnum("Raw");
          static Compressed = new IAppResourceFormatEnum("Compressed");
          static Encrypted = new IAppResourceFormatEnum("Encrypted");
          static EncryptedCompressed = new IAppResourceFormatEnum("EncryptedCompressed");
          static Unknown = new IAppResourceFormatEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppResource Format
          }
     }

     /**
      *  Enumerations for IAppResource Type
      **/
     export class IAppResourceTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Html = new IAppResourceTypeEnum("Html");
          static Css = new IAppResourceTypeEnum("Css");
          static JavaScript = new IAppResourceTypeEnum("JavaScript");
          static Image = new IAppResourceTypeEnum("Image");
          static Video = new IAppResourceTypeEnum("Video");
          static Audio = new IAppResourceTypeEnum("Audio");
          static Property = new IAppResourceTypeEnum("Property");
          static Database = new IAppResourceTypeEnum("Database");
          static Other = new IAppResourceTypeEnum("Other");
          static Unknown = new IAppResourceTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppResource Type
          }
     }

     /**
      *   Interface definition for IAppServerManager
      **/
     export interface IAppServerManager extends IAdaptiveRP {

          /**
           * Method Declarations for IAppServerManager
           */
           addServerListener(listener : IAppServerListener);
           getServers() : Array<IAppServer>;
           pauseServer(server : IAppServer);
           removeServerListener(listener : IAppServerListener);
           removeServerListeners();
           resumeServer(server : IAppServer);
           startServer();
           stopServers();
           stopServer(server : IAppServer);
     }

     /**
      *   Interface definition for IBaseCommunication
      **/
     export interface IBaseCommunication extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseCommerce
      **/
     export interface IBaseCommerce extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseSecurity
      **/
     export interface IBaseSecurity extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseCallback
      **/
     export interface IBaseCallback extends IAdaptiveRP {

          /**
           * Method Declarations for IBaseCallback
           */
           getId() : number;
           toString() : string;
     }

     /**
      *  Callback IBaseCallback implementation.
      */
     export class BaseCallback implements IBaseCallback {
          description: string;
          id: number;

          constructor() {
               this.id = ++registeredCounter;
          }

          toString() : string {
               return "BaseCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }


          static getReflection() : ReflectionClass {

               /** Fields of BaseCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of BaseCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method toString of BaseCallback **/
               var _params_toString: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toString','BaseCallback toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getId of BaseCallback **/
               var _params_getId: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getId','BaseCallback getId', _params_getId, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Class description of IBaseCallback **/
               var clazz = new ReflectionClass('BaseCallback','Listener/Callback class BaseCallback', 'BaseCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IBaseSensor
      **/
     export interface IBaseSensor extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppServer
      **/
     export interface IAppServer extends IAdaptiveRP {

          /**
           * Method Declarations for IAppServer
           */
           getBaseURI() : string;
           getHost() : string;
           getPath() : string;
           getPort() : number;
           getScheme() : string;
           pauseServer();
           resumeServer();
           startServer();
           stopServer();
     }

     /**
      *   Interface definition for IBaseReader
      **/
     export interface IBaseReader extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseMedia
      **/
     export interface IBaseMedia extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppRegistry
      **/
     export interface IAppRegistry extends IAdaptiveRP {

          /**
           * Method Declarations for IAppRegistry
           */
           getApplicationAnalytics() : IAnalytics;
           getApplicationGlobalization() : IGlobalization;
           getApplicationLifecycle() : ILifecycle;
           getApplicationManagement() : IManagement;
           getApplicationPrinting() : IPrinting;
           getApplicationSettings() : ISettings;
           getApplicationUpdate() : IUpdate;
           getPlatformContext() : IAppContext;
           getPlatformContextWeb() : IAppContextWebview;
           getSystemCapabilities() : ICapabilities;
           getSystemDevice() : IDevice;
           getSystemDisplay() : IDisplay;
           getSystemOS() : IOS;
           getSystemRuntime() : IRuntime;
     }

     /**
      *   Interface definition for IAppResourceHandler
      **/
     export interface IAppResourceHandler extends IAdaptiveRP {

          /**
           * Method Declarations for IAppResourceHandler
           */
           getResource(resourcePath : string, callback : IAppResourceCallback);
     }

     /**
      *   Interface definition for IBaseData
      **/
     export interface IBaseData extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IDatabaseResultCallback
      **/
     export interface IDatabaseResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IDatabaseResultCallback
           */
           onError(error : IDatabaseResultCallbackErrorEnum);
           onResult(database : Database);
           onWarning(database : Database, warning : IDatabaseResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IDatabaseResultCallback Error
      **/
     export class IDatabaseResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new IDatabaseResultCallbackErrorEnum("NoSpace");
          static SqlException = new IDatabaseResultCallbackErrorEnum("SqlException");
          static NotDeleted = new IDatabaseResultCallbackErrorEnum("NotDeleted");
          static Unknown = new IDatabaseResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IDatabaseResultCallback Error
          }
     }

     /**
      *  Enumerations for IDatabaseResultCallback Warning
      **/
     export class IDatabaseResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static DatabaseExists = new IDatabaseResultCallbackWarningEnum("DatabaseExists");
          static IsOpen = new IDatabaseResultCallbackWarningEnum("IsOpen");
          static Unknown = new IDatabaseResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IDatabaseResultCallback Warning
          }
     }

     /**
      *  Callback IDatabaseResultCallback control dictionary.
      */
     var registeredIDatabaseResultCallback = new Dictionary<IDatabaseResultCallback>([]);

     /**
      *  Callback IDatabaseResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIDatabaseResultCallbackError(id:number, error: IDatabaseResultCallbackErrorEnum) : void {
          var callback = registeredIDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIDatabaseResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIDatabaseResultCallback.remove(""+id)
          }
     }
     export function handleIDatabaseResultCallbackResult(id:number, database: Database) : void {
          var callback = registeredIDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIDatabaseResultCallback dictionary.");
          } else {
               callback.onResult(database);
               registeredIDatabaseResultCallback.remove(""+id)
          }
     }
     export function handleIDatabaseResultCallbackWarning(id:number, database: Database, warning: IDatabaseResultCallbackWarningEnum) : void {
          var callback = registeredIDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIDatabaseResultCallback dictionary.");
          } else {
               callback.onWarning(database, warning);
               registeredIDatabaseResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IDatabaseResultCallback implementation.
      */
     export class DatabaseResultCallback implements IDatabaseResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IDatabaseResultCallbackErrorEnum) => Function;
          onResultFunction : (database: Database) => Function;
          onWarningFunction : (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IDatabaseResultCallbackErrorEnum) => Function, onResultFunction : (database: Database) => Function, onWarningFunction : (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "DatabaseResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IDatabaseResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The DatabaseResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(database: Database) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The DatabaseResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(database);
               }
          }
          onWarning(database: Database, warning: IDatabaseResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The DatabaseResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(database, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of DatabaseResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of DatabaseResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of DatabaseResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'DatabaseResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','DatabaseResultCallback onError', _params_onError, null));
               /** Method onWarning of DatabaseResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('database', 'DatabaseResultCallback onWarning database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'DatabaseResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','DatabaseResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of DatabaseResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('database', 'DatabaseResultCallback onResult database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','DatabaseResultCallback onResult', _params_onResult, null));

               /** Class description of IDatabaseResultCallback **/
               var clazz = new ReflectionClass('DatabaseResultCallback','Listener/Callback class DatabaseResultCallback', 'DatabaseResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ICamera
      **/
     export interface ICamera extends IBaseMedia {

     }

     /**
      *   Interface definition for INetworkNaming
      **/
     export interface INetworkNaming extends IBaseCommunication {

     }

     /**
      *   Interface definition for IContactPhotoResultCallback
      **/
     export interface IContactPhotoResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IContactPhotoResultCallback
           */
           onError(error : IContactPhotoResultCallbackErrorEnum);
           onResult(contactPhoto : Array<number>);
           onWarning(contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IContactPhotoResultCallback Error
      **/
     export class IContactPhotoResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactPhotoResultCallbackErrorEnum("NoPermission");
          static Wrong_Params = new IContactPhotoResultCallbackErrorEnum("Wrong_Params");
          static No_Photo = new IContactPhotoResultCallbackErrorEnum("No_Photo");
          static Unknown = new IContactPhotoResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContactPhotoResultCallback Error
          }
     }

     /**
      *  Enumerations for IContactPhotoResultCallback Warning
      **/
     export class IContactPhotoResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactPhotoResultCallbackWarningEnum("LimitExceeded");
          static No_Matches = new IContactPhotoResultCallbackWarningEnum("No_Matches");
          static Unknown = new IContactPhotoResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContactPhotoResultCallback Warning
          }
     }

     /**
      *  Callback IContactPhotoResultCallback control dictionary.
      */
     var registeredIContactPhotoResultCallback = new Dictionary<IContactPhotoResultCallback>([]);

     /**
      *  Callback IContactPhotoResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIContactPhotoResultCallbackError(id:number, error: IContactPhotoResultCallbackErrorEnum) : void {
          var callback = registeredIContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactPhotoResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIContactPhotoResultCallback.remove(""+id)
          }
     }
     export function handleIContactPhotoResultCallbackResult(id:number, contactPhoto: Array<number>) : void {
          var callback = registeredIContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactPhotoResultCallback dictionary.");
          } else {
               callback.onResult(contactPhoto);
               registeredIContactPhotoResultCallback.remove(""+id)
          }
     }
     export function handleIContactPhotoResultCallbackWarning(id:number, contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) : void {
          var callback = registeredIContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactPhotoResultCallback dictionary.");
          } else {
               callback.onWarning(contactPhoto, warning);
               registeredIContactPhotoResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IContactPhotoResultCallback implementation.
      */
     export class ContactPhotoResultCallback implements IContactPhotoResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IContactPhotoResultCallbackErrorEnum) => Function;
          onResultFunction : (contactPhoto: Array<number>) => Function;
          onWarningFunction : (contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IContactPhotoResultCallbackErrorEnum) => Function, onResultFunction : (contactPhoto: Array<number>) => Function, onWarningFunction : (contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "ContactPhotoResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IContactPhotoResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The ContactPhotoResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(contactPhoto: Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The ContactPhotoResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(contactPhoto);
               }
          }
          onWarning(contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The ContactPhotoResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(contactPhoto, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactPhotoResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of ContactPhotoResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of ContactPhotoResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'ContactPhotoResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','ContactPhotoResultCallback onError', _params_onError, null));
               /** Method onWarning of ContactPhotoResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('contactPhoto', 'ContactPhotoResultCallback onWarning contactPhoto', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'ContactPhotoResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','ContactPhotoResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of ContactPhotoResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('contactPhoto', 'ContactPhotoResultCallback onResult contactPhoto', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','ContactPhotoResultCallback onResult', _params_onResult, null));

               /** Class description of IContactPhotoResultCallback **/
               var clazz = new ReflectionClass('ContactPhotoResultCallback','Listener/Callback class ContactPhotoResultCallback', 'ContactPhotoResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ICloud
      **/
     export interface ICloud extends IBaseData {

     }

     /**
      *   Interface definition for ICapabilities
      **/
     export interface ICapabilities extends IBaseSystem {

          /**
           * Method Declarations for ICapabilities
           */
           hasButtonSupport(type : ICapabilitiesButtonEnum) : boolean;
           hasCommunicationSupport(type : ICapabilitiesCommunicationEnum) : boolean;
           hasDataSupport(type : ICapabilitiesDataEnum) : boolean;
           hasMediaSupport(type : ICapabilitiesMediaEnum) : boolean;
           hasNetSupport(type : ICapabilitiesNetEnum) : boolean;
           hasNotificationSupport(type : ICapabilitiesNotificationEnum) : boolean;
           hasSensorSupport(type : ICapabilitiesSensorEnum) : boolean;

     }
     /**
      *  Enumerations for ICapabilities Button
      **/
     export class ICapabilitiesButtonEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ICapabilitiesButtonEnum("HomeButton");
          static BackButton = new ICapabilitiesButtonEnum("BackButton");
          static OptionButton = new ICapabilitiesButtonEnum("OptionButton");
          static Unknown = new ICapabilitiesButtonEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Button
          }
     }

     /**
      *  Enumerations for ICapabilities Communication
      **/
     export class ICapabilitiesCommunicationEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Calendar = new ICapabilitiesCommunicationEnum("Calendar");
          static Contact = new ICapabilitiesCommunicationEnum("Contact");
          static Mail = new ICapabilitiesCommunicationEnum("Mail");
          static Messaging = new ICapabilitiesCommunicationEnum("Messaging");
          static Telephony = new ICapabilitiesCommunicationEnum("Telephony");
          static Unknown = new ICapabilitiesCommunicationEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Communication
          }
     }

     /**
      *  Enumerations for ICapabilities Data
      **/
     export class ICapabilitiesDataEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Database = new ICapabilitiesDataEnum("Database");
          static File = new ICapabilitiesDataEnum("File");
          static Cloud = new ICapabilitiesDataEnum("Cloud");
          static Unknown = new ICapabilitiesDataEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Data
          }
     }

     /**
      *  Enumerations for ICapabilities Media
      **/
     export class ICapabilitiesMediaEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Audio_Playback = new ICapabilitiesMediaEnum("Audio_Playback");
          static Audio_Recording = new ICapabilitiesMediaEnum("Audio_Recording");
          static Camera = new ICapabilitiesMediaEnum("Camera");
          static Video_Playback = new ICapabilitiesMediaEnum("Video_Playback");
          static Video_Recording = new ICapabilitiesMediaEnum("Video_Recording");
          static Unknown = new ICapabilitiesMediaEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Media
          }
     }

     /**
      *  Enumerations for ICapabilities Net
      **/
     export class ICapabilitiesNetEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static GSM = new ICapabilitiesNetEnum("GSM");
          static GPRS = new ICapabilitiesNetEnum("GPRS");
          static HSDPA = new ICapabilitiesNetEnum("HSDPA");
          static LTE = new ICapabilitiesNetEnum("LTE");
          static WIFI = new ICapabilitiesNetEnum("WIFI");
          static Ethernet = new ICapabilitiesNetEnum("Ethernet");
          static Unknown = new ICapabilitiesNetEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Net
          }
     }

     /**
      *  Enumerations for ICapabilities Notification
      **/
     export class ICapabilitiesNotificationEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Alarm = new ICapabilitiesNotificationEnum("Alarm");
          static LocalNotification = new ICapabilitiesNotificationEnum("LocalNotification");
          static RemoteNotification = new ICapabilitiesNotificationEnum("RemoteNotification");
          static Vibration = new ICapabilitiesNotificationEnum("Vibration");
          static Unknown = new ICapabilitiesNotificationEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Notification
          }
     }

     /**
      *  Enumerations for ICapabilities Sensor
      **/
     export class ICapabilitiesSensorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Accelerometer = new ICapabilitiesSensorEnum("Accelerometer");
          static AmbientLight = new ICapabilitiesSensorEnum("AmbientLight");
          static Barometer = new ICapabilitiesSensorEnum("Barometer");
          static Geolocation = new ICapabilitiesSensorEnum("Geolocation");
          static Gyroscope = new ICapabilitiesSensorEnum("Gyroscope");
          static Magnetometer = new ICapabilitiesSensorEnum("Magnetometer");
          static Proximity = new ICapabilitiesSensorEnum("Proximity");
          static Unknown = new ICapabilitiesSensorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Sensor
          }
     }

     /**
      *  Service ICapabilities implementation.
      */
     export class CapabilitiesBridge implements ICapabilities {

          constructor() {}

          hasButtonSupport(type: ICapabilitiesButtonEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasButtonSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasButtonSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasButtonSupport");
                    return null;
               }
          }
          hasCommunicationSupport(type: ICapabilitiesCommunicationEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasCommunicationSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasCommunicationSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasCommunicationSupport");
                    return null;
               }
          }
          hasDataSupport(type: ICapabilitiesDataEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasDataSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasDataSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasDataSupport");
                    return null;
               }
          }
          hasMediaSupport(type: ICapabilitiesMediaEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasMediaSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasMediaSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasMediaSupport");
                    return null;
               }
          }
          hasNetSupport(type: ICapabilitiesNetEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasNetSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasNetSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasNetSupport");
                    return null;
               }
          }
          hasNotificationSupport(type: ICapabilitiesNotificationEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasNotificationSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasNotificationSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasNotificationSupport");
                    return null;
               }
          }
          hasSensorSupport(type: ICapabilitiesSensorEnum) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/ICapabilities/hasSensorSupport", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { type: type}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ICapabilities.hasSensorSupport incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ICapabilities.hasSensorSupport");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Capabilities **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Capabilities **/
               var _methods = new Array<ReflectionMethod>();
               /** Method hasSensorSupport of Capabilities **/
               var _params_hasSensorSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasSensorSupport.push(new ReflectionParameter('type', 'Capabilities hasSensorSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasSensorSupport','Capabilities hasSensorSupport', _params_hasSensorSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasCommunicationSupport of Capabilities **/
               var _params_hasCommunicationSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasCommunicationSupport.push(new ReflectionParameter('type', 'Capabilities hasCommunicationSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasCommunicationSupport','Capabilities hasCommunicationSupport', _params_hasCommunicationSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasDataSupport of Capabilities **/
               var _params_hasDataSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasDataSupport.push(new ReflectionParameter('type', 'Capabilities hasDataSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasDataSupport','Capabilities hasDataSupport', _params_hasDataSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasMediaSupport of Capabilities **/
               var _params_hasMediaSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasMediaSupport.push(new ReflectionParameter('type', 'Capabilities hasMediaSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasMediaSupport','Capabilities hasMediaSupport', _params_hasMediaSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasNetSupport of Capabilities **/
               var _params_hasNetSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasNetSupport.push(new ReflectionParameter('type', 'Capabilities hasNetSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasNetSupport','Capabilities hasNetSupport', _params_hasNetSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasNotificationSupport of Capabilities **/
               var _params_hasNotificationSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasNotificationSupport.push(new ReflectionParameter('type', 'Capabilities hasNotificationSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasNotificationSupport','Capabilities hasNotificationSupport', _params_hasNotificationSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method hasButtonSupport of Capabilities **/
               var _params_hasButtonSupport: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_hasButtonSupport.push(new ReflectionParameter('type', 'Capabilities hasButtonSupport type', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('hasButtonSupport','Capabilities hasButtonSupport', _params_hasButtonSupport, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Class description of ICapabilities **/
               var clazz = new ReflectionClass('CapabilitiesBridge','Bridge class CapabilitiesBridge', 'CapabilitiesBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IMail
      **/
     export interface IMail extends IBasePIM {

          /**
           * Method Declarations for IMail
           */
           sendEmail(data : Email, callback : IMessagingCallback);
     }

     /**
      *  Service IMail implementation.
      */
     export class MailBridge implements IMail {

          constructor() {}

          sendEmail(data: Email, callback: IMessagingCallback) : void {
               registeredIMessagingCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IMail/sendEmail?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { data: data } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIMessagingCallback' on receiving async response handler.
               } else {
                    registeredIMessagingCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IMail.sendEmail");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Mail **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Mail **/
               var _methods = new Array<ReflectionMethod>();
               /** Method sendEmail of Mail **/
               var _params_sendEmail: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_sendEmail.push(new ReflectionParameter('data', 'Mail sendEmail data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_sendEmail.push(new ReflectionParameter('callback', 'Mail sendEmail callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('sendEmail','Mail sendEmail', _params_sendEmail, null));

               /** Class description of IMail **/
               var clazz = new ReflectionClass('MailBridge','Bridge class MailBridge', 'MailBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IGlobalization
      **/
     export interface IGlobalization extends IBaseApplication {

          /**
           * Method Declarations for IGlobalization
           */
           getLocaleSupportedDescriptors() : Array<Locale>;
           getResourceLiteral(key : string, locale : Locale) : string;
           getResourceLiterals(locale : Locale) : Dictionary<string>;
     }

     /**
      *  Service IGlobalization implementation.
      */
     export class GlobalizationBridge implements IGlobalization {

          constructor() {}

          getLocaleSupportedDescriptors() : Array<Locale> {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/IGlobalization/getLocaleSupportedDescriptors", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IGlobalization.getLocaleSupportedDescriptors incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IGlobalization.getLocaleSupportedDescriptors");
                    return null;
               }
          }
          getResourceLiteral(key: string, locale: Locale) : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/IGlobalization/getResourceLiteral", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { key: key, locale: locale}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IGlobalization.getResourceLiteral incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IGlobalization.getResourceLiteral");
                    return null;
               }
          }
          getResourceLiterals(locale: Locale) : Dictionary<string> {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/IGlobalization/getResourceLiterals", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { locale: locale}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IGlobalization.getResourceLiterals incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IGlobalization.getResourceLiterals");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Globalization **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Globalization **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getLocaleSupportedDescriptors of Globalization **/
               var _params_getLocaleSupportedDescriptors: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLocaleSupportedDescriptors','Globalization getLocaleSupportedDescriptors', _params_getLocaleSupportedDescriptors, new ReflectionClass('Array<Locale>', 'Array of Locale', 'Array<Locale>', null, null, Adaptive.getReflection()).setTypeComponent(Locale.getReflection())));
               /** Method getResourceLiteral of Globalization **/
               var _params_getResourceLiteral: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getResourceLiteral.push(new ReflectionParameter('key', 'Globalization getResourceLiteral key', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _params_getResourceLiteral.push(new ReflectionParameter('locale', 'Globalization getResourceLiteral locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getResourceLiteral','Globalization getResourceLiteral', _params_getResourceLiteral, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getResourceLiterals of Globalization **/
               var _params_getResourceLiterals: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getResourceLiterals.push(new ReflectionParameter('locale', 'Globalization getResourceLiterals locale', new ReflectionClass('Dictionary', 'Dictionary type string', 'Dictionary<any>', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getResourceLiterals','Globalization getResourceLiterals', _params_getResourceLiterals, new ReflectionClass('Dictionary', 'Dictionary type string', 'Dictionary<any>', null, null, Adaptive.getReflection())));

               /** Class description of IGlobalization **/
               var clazz = new ReflectionClass('GlobalizationBridge','Bridge class GlobalizationBridge', 'GlobalizationBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ICalendar
      **/
     export interface ICalendar extends IBasePIM {

     }

     /**
      *   Interface definition for ISocket
      **/
     export interface ISocket extends IBaseCommunication {

     }

     /**
      *   Interface definition for ILifecycle
      **/
     export interface ILifecycle extends IBaseApplication {

          /**
           * Method Declarations for ILifecycle
           */
           addLifecycleListener(listener : ILifecycleListener);
           isBackground() : boolean;
           removeLifecycleListener(listener : ILifecycleListener);
           removeLifecycleListeners();
     }

     /**
      *  Service ILifecycle implementation.
      */
     export class LifecycleBridge implements ILifecycle {

          constructor() {}

          addLifecycleListener(listener: ILifecycleListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/ILifecycle/addLifecycleListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredILifecycleListener.add(""+listener.getId(),listener);
               } else {
                    console.error("ERROR: "+xhr.status+" ILifecycle.addLifecycleListener");
               }
          }
          isBackground() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/ILifecycle/isBackground", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ILifecycle.isBackground incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ILifecycle.isBackground");
                    return null;
               }
          }
          removeLifecycleListener(listener: ILifecycleListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/ILifecycle/removeLifecycleListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredILifecycleListener.remove(""+listener.getId());
               } else {
                    console.error("ERROR: "+xhr.status+" ILifecycle.removeLifecycleListener");
               }
          }
          removeLifecycleListeners() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseApplication/ILifecycle/removeLifecycleListeners", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
                    var keys = registeredIAccelerationListener.keys();
                    for (var key in keys) {
                         registeredIAccelerationListener.remove(key);
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ILifecycle.removeLifecycleListeners");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Lifecycle **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Lifecycle **/
               var _methods = new Array<ReflectionMethod>();
               /** Method removeLifecycleListeners of Lifecycle **/
               var _params_removeLifecycleListeners: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('removeLifecycleListeners','Lifecycle removeLifecycleListeners', _params_removeLifecycleListeners, null));
               /** Method isBackground of Lifecycle **/
               var _params_isBackground: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isBackground','Lifecycle isBackground', _params_isBackground, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method addLifecycleListener of Lifecycle **/
               var _params_addLifecycleListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_addLifecycleListener.push(new ReflectionParameter('listener', 'Lifecycle addLifecycleListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('addLifecycleListener','Lifecycle addLifecycleListener', _params_addLifecycleListener, null));
               /** Method removeLifecycleListener of Lifecycle **/
               var _params_removeLifecycleListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeLifecycleListener.push(new ReflectionParameter('listener', 'Lifecycle removeLifecycleListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeLifecycleListener','Lifecycle removeLifecycleListener', _params_removeLifecycleListener, null));

               /** Class description of ILifecycle **/
               var clazz = new ReflectionClass('LifecycleBridge','Bridge class LifecycleBridge', 'LifecycleBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ILinkedIn
      **/
     export interface ILinkedIn extends IBaseSocial {

     }

     /**
      *   Interface definition for IMessagingCallback
      **/
     export interface IMessagingCallback extends IBaseCallback {

          /**
           * Method Declarations for IMessagingCallback
           */
           onError(error : IMessagingCallbackErrorEnum);
           onResult(success : boolean);
           onWarning(success : boolean, warning : IMessagingCallbackWarningEnum);

     }
     /**
      *  Enumerations for IMessagingCallback Error
      **/
     export class IMessagingCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SIMNotPresent = new IMessagingCallbackErrorEnum("SIMNotPresent");
          static EmailAccountNotFound = new IMessagingCallbackErrorEnum("EmailAccountNotFound");
          static NotSent = new IMessagingCallbackErrorEnum("NotSent");
          static WrongParams = new IMessagingCallbackErrorEnum("WrongParams");
          static NotSupported = new IMessagingCallbackErrorEnum("NotSupported");
          static Unknown = new IMessagingCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IMessagingCallback Error
          }
     }

     /**
      *  Enumerations for IMessagingCallback Warning
      **/
     export class IMessagingCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static UnableToSentAll = new IMessagingCallbackWarningEnum("UnableToSentAll");
          static UnableToFetchAttachment = new IMessagingCallbackWarningEnum("UnableToFetchAttachment");
          static Unknown = new IMessagingCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IMessagingCallback Warning
          }
     }

     /**
      *  Callback IMessagingCallback control dictionary.
      */
     var registeredIMessagingCallback = new Dictionary<IMessagingCallback>([]);

     /**
      *  Callback IMessagingCallback onError/onWarning/onResult handlers.
      */
     export function handleIMessagingCallbackError(id:number, error: IMessagingCallbackErrorEnum) : void {
          var callback = registeredIMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIMessagingCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIMessagingCallback.remove(""+id)
          }
     }
     export function handleIMessagingCallbackResult(id:number, success: boolean) : void {
          var callback = registeredIMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIMessagingCallback dictionary.");
          } else {
               callback.onResult(success);
               registeredIMessagingCallback.remove(""+id)
          }
     }
     export function handleIMessagingCallbackWarning(id:number, success: boolean, warning: IMessagingCallbackWarningEnum) : void {
          var callback = registeredIMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIMessagingCallback dictionary.");
          } else {
               callback.onWarning(success, warning);
               registeredIMessagingCallback.remove(""+id)
          }
     }
     /**
      *  Callback IMessagingCallback implementation.
      */
     export class MessagingCallback implements IMessagingCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IMessagingCallbackErrorEnum) => Function;
          onResultFunction : (success: boolean) => Function;
          onWarningFunction : (success: boolean, warning: IMessagingCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IMessagingCallbackErrorEnum) => Function, onResultFunction : (success: boolean) => Function, onWarningFunction : (success: boolean, warning: IMessagingCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: MessagingCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: MessagingCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: MessagingCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "MessagingCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IMessagingCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The MessagingCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(success: boolean) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The MessagingCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(success);
               }
          }
          onWarning(success: boolean, warning: IMessagingCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The MessagingCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(success, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of MessagingCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of MessagingCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of MessagingCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'MessagingCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','MessagingCallback onError', _params_onError, null));
               /** Method onWarning of MessagingCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('success', 'MessagingCallback onWarning success', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'MessagingCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','MessagingCallback onWarning', _params_onWarning, null));
               /** Method onResult of MessagingCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('success', 'MessagingCallback onResult success', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','MessagingCallback onResult', _params_onResult, null));

               /** Class description of IMessagingCallback **/
               var clazz = new ReflectionClass('MessagingCallback','Listener/Callback class MessagingCallback', 'MessagingCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IAccelerometer
      **/
     export interface IAccelerometer extends IBaseSensor {

          /**
           * Method Declarations for IAccelerometer
           */
           addAccelerationListener(listener : IAccelerationListener);
           removeAccelerationListener(listener : IAccelerationListener);
           removeAccelerationListeners();
     }

     /**
      *  Service IAccelerometer implementation.
      */
     export class AccelerometerBridge implements IAccelerometer {

          constructor() {}

          addAccelerationListener(listener: IAccelerationListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IAccelerometer/addAccelerationListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIAccelerationListener.add(""+listener.getId(),listener);
               } else {
                    console.error("ERROR: "+xhr.status+" IAccelerometer.addAccelerationListener");
               }
          }
          removeAccelerationListener(listener: IAccelerationListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IAccelerometer/removeAccelerationListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIAccelerationListener.remove(""+listener.getId());
               } else {
                    console.error("ERROR: "+xhr.status+" IAccelerometer.removeAccelerationListener");
               }
          }
          removeAccelerationListeners() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IAccelerometer/removeAccelerationListeners", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
                    var keys = registeredIAccelerationListener.keys();
                    for (var key in keys) {
                         registeredIAccelerationListener.remove(key);
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IAccelerometer.removeAccelerationListeners");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Accelerometer **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Accelerometer **/
               var _methods = new Array<ReflectionMethod>();
               /** Method addAccelerationListener of Accelerometer **/
               var _params_addAccelerationListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_addAccelerationListener.push(new ReflectionParameter('listener', 'Accelerometer addAccelerationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('addAccelerationListener','Accelerometer addAccelerationListener', _params_addAccelerationListener, null));
               /** Method removeAccelerationListener of Accelerometer **/
               var _params_removeAccelerationListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeAccelerationListener.push(new ReflectionParameter('listener', 'Accelerometer removeAccelerationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeAccelerationListener','Accelerometer removeAccelerationListener', _params_removeAccelerationListener, null));
               /** Method removeAccelerationListeners of Accelerometer **/
               var _params_removeAccelerationListeners: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('removeAccelerationListeners','Accelerometer removeAccelerationListeners', _params_removeAccelerationListeners, null));

               /** Class description of IAccelerometer **/
               var clazz = new ReflectionClass('AccelerometerBridge','Bridge class AccelerometerBridge', 'AccelerometerBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IOpenId
      **/
     export interface IOpenId extends IBaseSecurity {

     }

     /**
      *   Interface definition for IConcurrent
      **/
     export interface IConcurrent extends IBaseUtil {

     }

     /**
      *   Interface definition for INetworkInfo
      **/
     export interface INetworkInfo extends IBaseCommunication {

     }

     /**
      *   Interface definition for IGeolocation
      **/
     export interface IGeolocation extends IBaseSensor {

          /**
           * Method Declarations for IGeolocation
           */
           addGeolocationListener(listener : IGeolocationListener);
           removeGeolocationListener(listener : IGeolocationListener);
           removeGeolocationListeners();
     }

     /**
      *  Service IGeolocation implementation.
      */
     export class GeolocationBridge implements IGeolocation {

          constructor() {}

          addGeolocationListener(listener: IGeolocationListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IGeolocation/addGeolocationListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIGeolocationListener.add(""+listener.getId(),listener);
               } else {
                    console.error("ERROR: "+xhr.status+" IGeolocation.addGeolocationListener");
               }
          }
          removeGeolocationListener(listener: IGeolocationListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IGeolocation/removeGeolocationListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIGeolocationListener.remove(""+listener.getId());
               } else {
                    console.error("ERROR: "+xhr.status+" IGeolocation.removeGeolocationListener");
               }
          }
          removeGeolocationListeners() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSensor/IGeolocation/removeGeolocationListeners", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
                    var keys = registeredIAccelerationListener.keys();
                    for (var key in keys) {
                         registeredIAccelerationListener.remove(key);
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IGeolocation.removeGeolocationListeners");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Geolocation **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Geolocation **/
               var _methods = new Array<ReflectionMethod>();
               /** Method removeGeolocationListener of Geolocation **/
               var _params_removeGeolocationListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeGeolocationListener.push(new ReflectionParameter('listener', 'Geolocation removeGeolocationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeGeolocationListener','Geolocation removeGeolocationListener', _params_removeGeolocationListener, null));
               /** Method removeGeolocationListeners of Geolocation **/
               var _params_removeGeolocationListeners: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('removeGeolocationListeners','Geolocation removeGeolocationListeners', _params_removeGeolocationListeners, null));
               /** Method addGeolocationListener of Geolocation **/
               var _params_addGeolocationListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_addGeolocationListener.push(new ReflectionParameter('listener', 'Geolocation addGeolocationListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('addGeolocationListener','Geolocation addGeolocationListener', _params_addGeolocationListener, null));

               /** Class description of IGeolocation **/
               var clazz = new ReflectionClass('GeolocationBridge','Bridge class GeolocationBridge', 'GeolocationBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IGeolocationListener
      **/
     export interface IGeolocationListener extends IBaseListener {

          /**
           * Method Declarations for IGeolocationListener
           */
           onError(error : IGeolocationListenerErrorEnum);
           onResult(geolocation : Geolocation);
           onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarningEnum);

     }
     /**
      *  Enumerations for IGeolocationListener Error
      **/
     export class IGeolocationListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Disabled = new IGeolocationListenerErrorEnum("Disabled");
          static RestrictedAccess = new IGeolocationListenerErrorEnum("RestrictedAccess");
          static DeniedAccess = new IGeolocationListenerErrorEnum("DeniedAccess");
          static StatusNotDetermined = new IGeolocationListenerErrorEnum("StatusNotDetermined");
          static Unknown = new IGeolocationListenerErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IGeolocationListener Error
          }
     }

     /**
      *  Enumerations for IGeolocationListener Warning
      **/
     export class IGeolocationListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HighDoP = new IGeolocationListenerWarningEnum("HighDoP");
          static StaleData = new IGeolocationListenerWarningEnum("StaleData");
          static Unknown = new IGeolocationListenerWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IGeolocationListener Warning
          }
     }

     /**
      *  Listener IGeolocationListener control dictionary.
      */
     var registeredIGeolocationListener = new Dictionary<IGeolocationListener>([]);

     /**
      *  Listener IGeolocationListener onError/onWarning/onResult handlers.
      */
     export function handleIGeolocationListenerError(id:number, error: IGeolocationListenerErrorEnum) : void {
          var listener = registeredIGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIGeolocationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleIGeolocationListenerResult(id:number, geolocation: Geolocation) : void {
          var listener = registeredIGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIGeolocationListener dictionary.");
          } else {
               listener.onResult(geolocation);
          }
     }
     export function handleIGeolocationListenerWarning(id:number, geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) : void {
          var listener = registeredIGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIGeolocationListener dictionary.");
          } else {
               listener.onWarning(geolocation, warning);
          }
     }
     /**
      *  Listener IGeolocationListener implementation.
      */
     export class GeolocationListener implements IGeolocationListener {
          description: string;
          id: number;
          onErrorFunction : (error: IGeolocationListenerErrorEnum) => Function;
          onResultFunction : (geolocation: Geolocation) => Function;
          onWarningFunction : (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function;

          constructor(onErrorFunction : (error: IGeolocationListenerErrorEnum) => Function, onResultFunction : (geolocation: Geolocation) => Function, onWarningFunction : (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: GeolocationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: GeolocationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: GeolocationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "GeolocationListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IGeolocationListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The GeolocationListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(geolocation: Geolocation) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The GeolocationListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(geolocation);
               }
          }
          onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The GeolocationListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(geolocation, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of GeolocationListener **/
               var _fields = new Array<ReflectionField>();

               /** Methods of GeolocationListener **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of GeolocationListener **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'GeolocationListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','GeolocationListener onError', _params_onError, null));
               /** Method onWarning of GeolocationListener **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('geolocation', 'GeolocationListener onWarning geolocation', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'GeolocationListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','GeolocationListener onWarning', _params_onWarning, null));
               /** Method onResult of GeolocationListener **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('geolocation', 'GeolocationListener onResult geolocation', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','GeolocationListener onResult', _params_onResult, null));

               /** Class description of IGeolocationListener **/
               var clazz = new ReflectionClass('GeolocationListener','Listener/Callback class GeolocationListener', 'GeolocationListener', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IContactResultCallback
      **/
     export interface IContactResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IContactResultCallback
           */
           onError(error : IContactResultCallbackErrorEnum);
           onResult(contacts : Array<Contact>);
           onWarning(contacts : Array<Contact>, warning : IContactResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IContactResultCallback Error
      **/
     export class IContactResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactResultCallbackErrorEnum("NoPermission");
          static Wrong_Params = new IContactResultCallbackErrorEnum("Wrong_Params");
          static Unknown = new IContactResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContactResultCallback Error
          }
     }

     /**
      *  Enumerations for IContactResultCallback Warning
      **/
     export class IContactResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactResultCallbackWarningEnum("LimitExceeded");
          static No_Matches = new IContactResultCallbackWarningEnum("No_Matches");
          static Unknown = new IContactResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContactResultCallback Warning
          }
     }

     /**
      *  Callback IContactResultCallback control dictionary.
      */
     var registeredIContactResultCallback = new Dictionary<IContactResultCallback>([]);

     /**
      *  Callback IContactResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIContactResultCallbackError(id:number, error: IContactResultCallbackErrorEnum) : void {
          var callback = registeredIContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIContactResultCallback.remove(""+id)
          }
     }
     export function handleIContactResultCallbackResult(id:number, contacts: Array<Contact>) : void {
          var callback = registeredIContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactResultCallback dictionary.");
          } else {
               callback.onResult(contacts);
               registeredIContactResultCallback.remove(""+id)
          }
     }
     export function handleIContactResultCallbackWarning(id:number, contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) : void {
          var callback = registeredIContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIContactResultCallback dictionary.");
          } else {
               callback.onWarning(contacts, warning);
               registeredIContactResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IContactResultCallback implementation.
      */
     export class ContactResultCallback implements IContactResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IContactResultCallbackErrorEnum) => Function;
          onResultFunction : (contacts: Array<Contact>) => Function;
          onWarningFunction : (contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IContactResultCallbackErrorEnum) => Function, onResultFunction : (contacts: Array<Contact>) => Function, onWarningFunction : (contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: ContactResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: ContactResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: ContactResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "ContactResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IContactResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The ContactResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(contacts: Array<Contact>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The ContactResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(contacts);
               }
          }
          onWarning(contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The ContactResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(contacts, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of ContactResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of ContactResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'ContactResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','ContactResultCallback onError', _params_onError, null));
               /** Method onWarning of ContactResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('contacts', 'ContactResultCallback onWarning contacts', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'ContactResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','ContactResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of ContactResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('contacts', 'ContactResultCallback onResult contacts', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','ContactResultCallback onResult', _params_onResult, null));

               /** Class description of IContactResultCallback **/
               var clazz = new ReflectionClass('ContactResultCallback','Listener/Callback class ContactResultCallback', 'ContactResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IMessaging
      **/
     export interface IMessaging extends IBasePIM {

          /**
           * Method Declarations for IMessaging
           */
           sendSMS(number : string, text : string, callback : IMessagingCallback);
     }

     /**
      *  Service IMessaging implementation.
      */
     export class MessagingBridge implements IMessaging {

          constructor() {}

          sendSMS(number: string, text: string, callback: IMessagingCallback) : void {
               registeredIMessagingCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IMessaging/sendSMS?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { number: number, text: text } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIMessagingCallback' on receiving async response handler.
               } else {
                    registeredIMessagingCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IMessaging.sendSMS");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Messaging **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Messaging **/
               var _methods = new Array<ReflectionMethod>();
               /** Method sendSMS of Messaging **/
               var _params_sendSMS: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_sendSMS.push(new ReflectionParameter('number', 'Messaging sendSMS number', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_sendSMS.push(new ReflectionParameter('text', 'Messaging sendSMS text', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_sendSMS.push(new ReflectionParameter('callback', 'Messaging sendSMS callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('sendSMS','Messaging sendSMS', _params_sendSMS, null));

               /** Class description of IMessaging **/
               var clazz = new ReflectionClass('MessagingBridge','Bridge class MessagingBridge', 'MessagingBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IQRCode
      **/
     export interface IQRCode extends IBaseReader {

     }

     /**
      *   Interface definition for IFileResultCallback
      **/
     export interface IFileResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileResultCallback
           */
           onError(error : IFileResultCallbackErrorEnum);
           onResult(storageFile : IFile);
           onWarning(sourceFile : IFile, destinationFile : IFile, warning : IFileResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IFileResultCallback Error
      **/
     export class IFileResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static FileExists = new IFileResultCallbackErrorEnum("FileExists");
          static InsufficientSpace = new IFileResultCallbackErrorEnum("InsufficientSpace");
          static Unauthorized = new IFileResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileResultCallback Error
          }
     }

     /**
      *  Enumerations for IFileResultCallback Warning
      **/
     export class IFileResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SourceNotDeleted = new IFileResultCallbackWarningEnum("SourceNotDeleted");
          static RootDirectory = new IFileResultCallbackWarningEnum("RootDirectory");
          static Unknown = new IFileResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileResultCallback Warning
          }
     }

     /**
      *  Callback IFileResultCallback control dictionary.
      */
     var registeredIFileResultCallback = new Dictionary<IFileResultCallback>([]);

     /**
      *  Callback IFileResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIFileResultCallbackError(id:number, error: IFileResultCallbackErrorEnum) : void {
          var callback = registeredIFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIFileResultCallback.remove(""+id)
          }
     }
     export function handleIFileResultCallbackResult(id:number, storageFile: IFile) : void {
          var callback = registeredIFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileResultCallback dictionary.");
          } else {
               callback.onResult(storageFile);
               registeredIFileResultCallback.remove(""+id)
          }
     }
     export function handleIFileResultCallbackWarning(id:number, sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) : void {
          var callback = registeredIFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileResultCallback dictionary.");
          } else {
               callback.onWarning(sourceFile, destinationFile, warning);
               registeredIFileResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IFileResultCallback implementation.
      */
     export class FileResultCallback implements IFileResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IFileResultCallbackErrorEnum) => Function;
          onResultFunction : (storageFile: IFile) => Function;
          onWarningFunction : (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IFileResultCallbackErrorEnum) => Function, onResultFunction : (storageFile: IFile) => Function, onWarningFunction : (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: FileResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: FileResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: FileResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "FileResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IFileResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The FileResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(storageFile: IFile) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The FileResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(storageFile);
               }
          }
          onWarning(sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The FileResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(sourceFile, destinationFile, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of FileResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of FileResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of FileResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'FileResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','FileResultCallback onError', _params_onError, null));
               /** Method onWarning of FileResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('sourceFile', 'FileResultCallback onWarning sourceFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('destinationFile', 'FileResultCallback onWarning destinationFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'FileResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','FileResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of FileResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('storageFile', 'FileResultCallback onResult storageFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','FileResultCallback onResult', _params_onResult, null));

               /** Class description of IFileResultCallback **/
               var clazz = new ReflectionClass('FileResultCallback','Listener/Callback class FileResultCallback', 'FileResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IFileListResultCallback
      **/
     export interface IFileListResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileListResultCallback
           */
           onError(error : IFileListResultCallbackErrorEnum);
           onResult(files : Array<IFile>);
           onWarning(files : Array<IFile>, warning : IFileListResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IFileListResultCallback Error
      **/
     export class IFileListResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileListResultCallbackErrorEnum("InexistentFile");
          static Unauthorized = new IFileListResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileListResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileListResultCallback Error
          }
     }

     /**
      *  Enumerations for IFileListResultCallback Warning
      **/
     export class IFileListResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
          static Unknown = new IFileListResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileListResultCallback Warning
          }
     }

     /**
      *  Callback IFileListResultCallback control dictionary.
      */
     var registeredIFileListResultCallback = new Dictionary<IFileListResultCallback>([]);

     /**
      *  Callback IFileListResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIFileListResultCallbackError(id:number, error: IFileListResultCallbackErrorEnum) : void {
          var callback = registeredIFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileListResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIFileListResultCallback.remove(""+id)
          }
     }
     export function handleIFileListResultCallbackResult(id:number, files: Array<IFile>) : void {
          var callback = registeredIFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileListResultCallback dictionary.");
          } else {
               callback.onResult(files);
               registeredIFileListResultCallback.remove(""+id)
          }
     }
     export function handleIFileListResultCallbackWarning(id:number, files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) : void {
          var callback = registeredIFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileListResultCallback dictionary.");
          } else {
               callback.onWarning(files, warning);
               registeredIFileListResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IFileListResultCallback implementation.
      */
     export class FileListResultCallback implements IFileListResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IFileListResultCallbackErrorEnum) => Function;
          onResultFunction : (files: Array<IFile>) => Function;
          onWarningFunction : (files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IFileListResultCallbackErrorEnum) => Function, onResultFunction : (files: Array<IFile>) => Function, onWarningFunction : (files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: FileListResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: FileListResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: FileListResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "FileListResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IFileListResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The FileListResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(files: Array<IFile>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The FileListResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(files);
               }
          }
          onWarning(files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The FileListResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(files, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of FileListResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of FileListResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of FileListResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'FileListResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','FileListResultCallback onError', _params_onError, null));
               /** Method onWarning of FileListResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('files', 'FileListResultCallback onWarning files', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'FileListResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','FileListResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of FileListResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('files', 'FileListResultCallback onResult files', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','FileListResultCallback onResult', _params_onResult, null));

               /** Class description of IFileListResultCallback **/
               var clazz = new ReflectionClass('FileListResultCallback','Listener/Callback class FileListResultCallback', 'FileListResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ITimer
      **/
     export interface ITimer extends IBaseUtil {

     }

     /**
      *   Interface definition for IInternalStorage
      **/
     export interface IInternalStorage extends IBaseData {

     }

     /**
      *   Interface definition for IRuntime
      **/
     export interface IRuntime extends IBaseSystem {

          /**
           * Method Declarations for IRuntime
           */
           dismissApplication();
           dismissSplashScreen() : boolean;
     }

     /**
      *  Service IRuntime implementation.
      */
     export class RuntimeBridge implements IRuntime {

          constructor() {}

          dismissApplication() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IRuntime/dismissApplication", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" IRuntime.dismissApplication");
               }
          }
          dismissSplashScreen() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IRuntime/dismissSplashScreen", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IRuntime.dismissSplashScreen incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IRuntime.dismissSplashScreen");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Runtime **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Runtime **/
               var _methods = new Array<ReflectionMethod>();
               /** Method dismissApplication of Runtime **/
               var _params_dismissApplication: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('dismissApplication','Runtime dismissApplication', _params_dismissApplication, null));
               /** Method dismissSplashScreen of Runtime **/
               var _params_dismissSplashScreen: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('dismissSplashScreen','Runtime dismissSplashScreen', _params_dismissSplashScreen, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Class description of IRuntime **/
               var clazz = new ReflectionClass('RuntimeBridge','Bridge class RuntimeBridge', 'RuntimeBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ISession
      **/
     export interface ISession extends IBaseCommunication {

          /**
           * Method Declarations for ISession
           */
           getAttribute(name : string) : any;
           getAttributes() : Array<any>;
           getCookies() : Array<Cookie>;
           listAttributeNames() : Array<string>;
           removeAttribute(name : string);
           removeAttributes();
           removeCookie(cookie : Cookie);
           removeCookies(cookies : Array<Cookie>);
           setAttribute(name : string, value : any);
           setCookie(cookie : Cookie);
           setCookies(cookies : Array<Cookie>);
     }

     /**
      *  Service ISession implementation.
      */
     export class SessionBridge implements ISession {

          constructor() {}

          getAttribute(name: string) : any {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/getAttribute", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { name: name}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ISession.getAttribute incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.getAttribute");
                    return null;
               }
          }
          getAttributes() : Array<any> {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/getAttributes", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ISession.getAttributes incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.getAttributes");
                    return null;
               }
          }
          getCookies() : Array<Cookie> {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/getCookies", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ISession.getCookies incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.getCookies");
                    return null;
               }
          }
          listAttributeNames() : Array<string> {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/listAttributeNames", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ISession.listAttributeNames incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.listAttributeNames");
                    return null;
               }
          }
          removeAttribute(name: string) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/removeAttribute", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { name: name}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.removeAttribute");
               }
          }
          removeAttributes() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/removeAttributes", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.removeAttributes");
               }
          }
          removeCookie(cookie: Cookie) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/removeCookie", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { cookie: cookie}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.removeCookie");
               }
          }
          removeCookies(cookies: Array<Cookie>) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/removeCookies", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { cookies: cookies}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.removeCookies");
               }
          }
          setAttribute(name: string, value: any) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/setAttribute", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { name: name, value: value}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.setAttribute");
               }
          }
          setCookie(cookie: Cookie) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/setCookie", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { cookie: cookie}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.setCookie");
               }
          }
          setCookies(cookies: Array<Cookie>) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ISession/setCookies", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { cookies: cookies}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" ISession.setCookies");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Session **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Session **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getAttributes of Session **/
               var _params_getAttributes: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getAttributes','Session getAttributes', _params_getAttributes, new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));
               /** Method setAttribute of Session **/
               var _params_setAttribute: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setAttribute.push(new ReflectionParameter('name', 'Session setAttribute name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_setAttribute.push(new ReflectionParameter('value', 'Session setAttribute value', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setAttribute','Session setAttribute', _params_setAttribute, null));
               /** Method getAttribute of Session **/
               var _params_getAttribute: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getAttribute.push(new ReflectionParameter('name', 'Session getAttribute name', new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getAttribute','Session getAttribute', _params_getAttribute, new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection())));
               /** Method setCookies of Session **/
               var _params_setCookies: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCookies.push(new ReflectionParameter('cookies', 'Session setCookies cookies', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCookies','Session setCookies', _params_setCookies, null));
               /** Method setCookie of Session **/
               var _params_setCookie: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCookie.push(new ReflectionParameter('cookie', 'Session setCookie cookie', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCookie','Session setCookie', _params_setCookie, null));
               /** Method removeCookies of Session **/
               var _params_removeCookies: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeCookies.push(new ReflectionParameter('cookies', 'Session removeCookies cookies', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeCookies','Session removeCookies', _params_removeCookies, null));
               /** Method removeCookie of Session **/
               var _params_removeCookie: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeCookie.push(new ReflectionParameter('cookie', 'Session removeCookie cookie', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeCookie','Session removeCookie', _params_removeCookie, null));
               /** Method listAttributeNames of Session **/
               var _params_listAttributeNames: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('listAttributeNames','Session listAttributeNames', _params_listAttributeNames, new ReflectionClass('Array<string>', 'Array of string', 'Array<string>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection()))));
               /** Method removeAttribute of Session **/
               var _params_removeAttribute: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeAttribute.push(new ReflectionParameter('name', 'Session removeAttribute name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeAttribute','Session removeAttribute', _params_removeAttribute, null));
               /** Method removeAttributes of Session **/
               var _params_removeAttributes: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('removeAttributes','Session removeAttributes', _params_removeAttributes, null));
               /** Method getCookies of Session **/
               var _params_getCookies: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getCookies','Session getCookies', _params_getCookies, new ReflectionClass('Array<Cookie>', 'Array of Cookie', 'Array<Cookie>', null, null, Adaptive.getReflection()).setTypeComponent(Cookie.getReflection())));

               /** Class description of ISession **/
               var clazz = new ReflectionClass('SessionBridge','Bridge class SessionBridge', 'SessionBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IVideo
      **/
     export interface IVideo extends IBaseMedia {

          /**
           * Method Declarations for IVideo
           */
           playStream(url : string);
     }

     /**
      *  Service IVideo implementation.
      */
     export class VideoBridge implements IVideo {

          constructor() {}

          playStream(url: string) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseMedia/IVideo/playStream", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { url: url}}));
               if (xhr.status == 200) {
               } else {
                    console.error("ERROR: "+xhr.status+" IVideo.playStream");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Video **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Video **/
               var _methods = new Array<ReflectionMethod>();
               /** Method playStream of Video **/
               var _params_playStream: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_playStream.push(new ReflectionParameter('url', 'Video playStream url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('playStream','Video playStream', _params_playStream, null));

               /** Class description of IVideo **/
               var clazz = new ReflectionClass('VideoBridge','Bridge class VideoBridge', 'VideoBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IMap
      **/
     export interface IMap extends IBaseUI {

     }

     /**
      *   Interface definition for IManagement
      **/
     export interface IManagement extends IBaseApplication {

     }

     /**
      *   Interface definition for IOAuth
      **/
     export interface IOAuth extends IBaseSecurity {

     }

     /**
      *   Interface definition for IAds
      **/
     export interface IAds extends IBaseCommerce {

     }

     /**
      *   Interface definition for IGooglePlus
      **/
     export interface IGooglePlus extends IBaseSocial {

     }

     /**
      *   Interface definition for IWallet
      **/
     export interface IWallet extends IBaseCommerce {

     }

     /**
      *   Interface definition for IAnalytics
      **/
     export interface IAnalytics extends IBaseApplication {

     }

     /**
      *   Interface definition for ICompression
      **/
     export interface ICompression extends IBaseUtil {

     }

     /**
      *   Interface definition for IBrowser
      **/
     export interface IBrowser extends IBaseUI {

          /**
           * Method Declarations for IBrowser
           */
           openBrowser(url : string, title : string, buttonText : string) : boolean;
     }

     /**
      *  Service IBrowser implementation.
      */
     export class BrowserBridge implements IBrowser {

          constructor() {}

          openBrowser(url: string, title: string, buttonText: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseUI/IBrowser/openBrowser", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { url: url, title: title, buttonText: buttonText}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IBrowser.openBrowser incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IBrowser.openBrowser");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Browser **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Browser **/
               var _methods = new Array<ReflectionMethod>();
               /** Method openBrowser of Browser **/
               var _params_openBrowser: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_openBrowser.push(new ReflectionParameter('url', 'Browser openBrowser url', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_openBrowser.push(new ReflectionParameter('title', 'Browser openBrowser title', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_openBrowser.push(new ReflectionParameter('buttonText', 'Browser openBrowser buttonText', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('openBrowser','Browser openBrowser', _params_openBrowser, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Class description of IBrowser **/
               var clazz = new ReflectionClass('BrowserBridge','Bridge class BrowserBridge', 'BrowserBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IRSS
      **/
     export interface IRSS extends IBaseSocial {

     }

     /**
      *   Interface definition for IDisplay
      **/
     export interface IDisplay extends IBaseSystem {

     }

     /**
      *   Interface definition for IOCR
      **/
     export interface IOCR extends IBaseReader {

     }

     /**
      *   Interface definition for IDevice
      **/
     export interface IDevice extends IBaseSystem {

          /**
           * Method Declarations for IDevice
           */
           addButtonListener(listener : IButtonListener);
           getDeviceInfo() : DeviceInfo;
           getLocaleCurrent() : Locale;
           removeButtonListener(listener : IButtonListener);
           removeButtonListeners();
     }

     /**
      *  Service IDevice implementation.
      */
     export class DeviceBridge implements IDevice {

          constructor() {}

          addButtonListener(listener: IButtonListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IDevice/addButtonListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIButtonListener.add(""+listener.getId(),listener);
               } else {
                    console.error("ERROR: "+xhr.status+" IDevice.addButtonListener");
               }
          }
          getDeviceInfo() : DeviceInfo {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IDevice/getDeviceInfo", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IDevice.getDeviceInfo incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IDevice.getDeviceInfo");
                    return null;
               }
          }
          getLocaleCurrent() : Locale {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IDevice/getLocaleCurrent", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IDevice.getLocaleCurrent incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IDevice.getLocaleCurrent");
                    return null;
               }
          }
          removeButtonListener(listener: IButtonListener) : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IDevice/removeButtonListener?id="+listener.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // Listeners only require id included in URL param.
               if (xhr.status == 200) {
                    registeredIButtonListener.remove(""+listener.getId());
               } else {
                    console.error("ERROR: "+xhr.status+" IDevice.removeButtonListener");
               }
          }
          removeButtonListeners() : void {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IDevice/removeButtonListeners", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(); // No parameters.
               if (xhr.status == 200) {
                    var keys = registeredIAccelerationListener.keys();
                    for (var key in keys) {
                         registeredIAccelerationListener.remove(key);
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IDevice.removeButtonListeners");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Device **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Device **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getDeviceInfo of Device **/
               var _params_getDeviceInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDeviceInfo','Device getDeviceInfo', _params_getDeviceInfo, DeviceInfo.getReflection()));
               /** Method getLocaleCurrent of Device **/
               var _params_getLocaleCurrent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLocaleCurrent','Device getLocaleCurrent', _params_getLocaleCurrent, Locale.getReflection()));
               /** Method addButtonListener of Device **/
               var _params_addButtonListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_addButtonListener.push(new ReflectionParameter('listener', 'Device addButtonListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('addButtonListener','Device addButtonListener', _params_addButtonListener, null));
               /** Method removeButtonListener of Device **/
               var _params_removeButtonListener: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_removeButtonListener.push(new ReflectionParameter('listener', 'Device removeButtonListener listener', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('removeButtonListener','Device removeButtonListener', _params_removeButtonListener, null));
               /** Method removeButtonListeners of Device **/
               var _params_removeButtonListeners: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('removeButtonListeners','Device removeButtonListeners', _params_removeButtonListeners, null));

               /** Class description of IDevice **/
               var clazz = new ReflectionClass('DeviceBridge','Bridge class DeviceBridge', 'DeviceBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IAppServerListener
      **/
     export interface IAppServerListener extends IBaseListener {

          /**
           * Method Declarations for IAppServerListener
           */
           onPaused(server : IAppServer);
           onPausing(server : IAppServer);
           onResumed(server : IAppServer);
           onResuming(server : IAppServer);
           onStart(server : IAppServer);
           onStopped(server : IAppServer);
           onStopping(server : IAppServer);
     }

     /**
      *   Interface definition for IStore
      **/
     export interface IStore extends IBaseCommerce {

     }

     /**
      *   Interface definition for IDatabase
      **/
     export interface IDatabase extends IBaseData {

          /**
           * Method Declarations for IDatabase
           */
           createDatabase(database : Database, callback : IDatabaseResultCallback);
           createTable(database : Database, table : Table, callback : ITableResultCallback);
           deleteDatabase(database : Database, callback : IDatabaseResultCallback);
           deleteTable(database : Database, table : Table, callback : ITableResultCallback);
           executeSqlQuery(database : Database, query : string, replacements : Array<String>, callback : ITableResultCallback);
           executeSqlStatement(database : Database, statement : string, replacements : Array<String>, callback : ITableResultCallback);
           executeSqlTransactions(database : Database, statements : Array<String>, rollbackFlag : boolean, callback : ITableResultCallback);
           existsDatabase(database : Database) : boolean;
           existsTable(database : Database, table : Table) : boolean;
     }

     /**
      *  Service IDatabase implementation.
      */
     export class DatabaseBridge implements IDatabase {

          constructor() {}

          createDatabase(database: Database, callback: IDatabaseResultCallback) : void {
               registeredIDatabaseResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/createDatabase?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIDatabaseResultCallback' on receiving async response handler.
               } else {
                    registeredIDatabaseResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.createDatabase");
               }
          }
          createTable(database: Database, table: Table, callback: ITableResultCallback) : void {
               registeredITableResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/createTable?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, table: table } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredITableResultCallback' on receiving async response handler.
               } else {
                    registeredITableResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.createTable");
               }
          }
          deleteDatabase(database: Database, callback: IDatabaseResultCallback) : void {
               registeredIDatabaseResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/deleteDatabase?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIDatabaseResultCallback' on receiving async response handler.
               } else {
                    registeredIDatabaseResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.deleteDatabase");
               }
          }
          deleteTable(database: Database, table: Table, callback: ITableResultCallback) : void {
               registeredITableResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/deleteTable?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, table: table } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredITableResultCallback' on receiving async response handler.
               } else {
                    registeredITableResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.deleteTable");
               }
          }
          executeSqlQuery(database: Database, query: string, replacements: Array<string>, callback: ITableResultCallback) : void {
               registeredITableResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/executeSqlQuery?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, query: query, replacements: replacements } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredITableResultCallback' on receiving async response handler.
               } else {
                    registeredITableResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.executeSqlQuery");
               }
          }
          executeSqlStatement(database: Database, statement: string, replacements: Array<string>, callback: ITableResultCallback) : void {
               registeredITableResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/executeSqlStatement?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, statement: statement, replacements: replacements } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredITableResultCallback' on receiving async response handler.
               } else {
                    registeredITableResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.executeSqlStatement");
               }
          }
          executeSqlTransactions(database: Database, statements: Array<string>, rollbackFlag: boolean, callback: ITableResultCallback) : void {
               registeredITableResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/executeSqlTransactions?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, statements: statements, rollbackFlag: rollbackFlag } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredITableResultCallback' on receiving async response handler.
               } else {
                    registeredITableResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IDatabase.executeSqlTransactions");
               }
          }
          existsDatabase(database: Database) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/existsDatabase", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IDatabase.existsDatabase incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IDatabase.existsDatabase");
                    return null;
               }
          }
          existsTable(database: Database, table: Table) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IDatabase/existsTable", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { database: database, table: table}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IDatabase.existsTable incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IDatabase.existsTable");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Database **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Database **/
               var _methods = new Array<ReflectionMethod>();
               /** Method createDatabase of Database **/
               var _params_createDatabase: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_createDatabase.push(new ReflectionParameter('database', 'Database createDatabase database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createDatabase.push(new ReflectionParameter('callback', 'Database createDatabase callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('createDatabase','Database createDatabase', _params_createDatabase, null));
               /** Method deleteDatabase of Database **/
               var _params_deleteDatabase: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_deleteDatabase.push(new ReflectionParameter('database', 'Database deleteDatabase database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_deleteDatabase.push(new ReflectionParameter('callback', 'Database deleteDatabase callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('deleteDatabase','Database deleteDatabase', _params_deleteDatabase, null));
               /** Method existsDatabase of Database **/
               var _params_existsDatabase: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_existsDatabase.push(new ReflectionParameter('database', 'Database existsDatabase database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('existsDatabase','Database existsDatabase', _params_existsDatabase, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method deleteTable of Database **/
               var _params_deleteTable: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_deleteTable.push(new ReflectionParameter('database', 'Database deleteTable database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_deleteTable.push(new ReflectionParameter('table', 'Database deleteTable table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_deleteTable.push(new ReflectionParameter('callback', 'Database deleteTable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('deleteTable','Database deleteTable', _params_deleteTable, null));
               /** Method existsTable of Database **/
               var _params_existsTable: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_existsTable.push(new ReflectionParameter('database', 'Database existsTable database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_existsTable.push(new ReflectionParameter('table', 'Database existsTable table', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('existsTable','Database existsTable', _params_existsTable, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method executeSqlQuery of Database **/
               var _params_executeSqlQuery: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_executeSqlQuery.push(new ReflectionParameter('database', 'Database executeSqlQuery database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlQuery.push(new ReflectionParameter('query', 'Database executeSqlQuery query', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlQuery.push(new ReflectionParameter('replacements', 'Database executeSqlQuery replacements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlQuery.push(new ReflectionParameter('callback', 'Database executeSqlQuery callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('executeSqlQuery','Database executeSqlQuery', _params_executeSqlQuery, null));
               /** Method executeSqlStatement of Database **/
               var _params_executeSqlStatement: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_executeSqlStatement.push(new ReflectionParameter('database', 'Database executeSqlStatement database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlStatement.push(new ReflectionParameter('statement', 'Database executeSqlStatement statement', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlStatement.push(new ReflectionParameter('replacements', 'Database executeSqlStatement replacements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlStatement.push(new ReflectionParameter('callback', 'Database executeSqlStatement callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('executeSqlStatement','Database executeSqlStatement', _params_executeSqlStatement, null));
               /** Method executeSqlTransactions of Database **/
               var _params_executeSqlTransactions: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_executeSqlTransactions.push(new ReflectionParameter('database', 'Database executeSqlTransactions database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlTransactions.push(new ReflectionParameter('statements', 'Database executeSqlTransactions statements', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlTransactions.push(new ReflectionParameter('rollbackFlag', 'Database executeSqlTransactions rollbackFlag', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_executeSqlTransactions.push(new ReflectionParameter('callback', 'Database executeSqlTransactions callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('executeSqlTransactions','Database executeSqlTransactions', _params_executeSqlTransactions, null));
               /** Method createTable of Database **/
               var _params_createTable: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_createTable.push(new ReflectionParameter('database', 'Database createTable database', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createTable.push(new ReflectionParameter('table', 'Database createTable table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createTable.push(new ReflectionParameter('callback', 'Database createTable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('createTable','Database createTable', _params_createTable, null));

               /** Class description of IDatabase **/
               var clazz = new ReflectionClass('DatabaseBridge','Bridge class DatabaseBridge', 'DatabaseBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ISecurity
      **/
     export interface ISecurity extends IBaseSecurity {

          /**
           * Method Declarations for ISecurity
           */
           deleteSecureKeyValuePairs(keys : Array<String>, publicAccessName : string, callback : ISecureKVResultCallback);
           getSecureKeyValuePairs(keys : Array<String>, publicAccessName : string, callback : ISecureKVResultCallback);
           isDeviceModified() : boolean;
           setSecureKeyValuePairs(keyValues : Array<SecureKeyPair>, publicAccessName : string, callback : ISecureKVResultCallback);
     }

     /**
      *  Service ISecurity implementation.
      */
     export class SecurityBridge implements ISecurity {

          constructor() {}

          deleteSecureKeyValuePairs(keys: Array<string>, publicAccessName: string, callback: ISecureKVResultCallback) : void {
               registeredISecureKVResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSecurity/ISecurity/deleteSecureKeyValuePairs?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { keys: keys, publicAccessName: publicAccessName } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredISecureKVResultCallback' on receiving async response handler.
               } else {
                    registeredISecureKVResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" ISecurity.deleteSecureKeyValuePairs");
               }
          }
          getSecureKeyValuePairs(keys: Array<string>, publicAccessName: string, callback: ISecureKVResultCallback) : void {
               registeredISecureKVResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSecurity/ISecurity/getSecureKeyValuePairs?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { keys: keys, publicAccessName: publicAccessName } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredISecureKVResultCallback' on receiving async response handler.
               } else {
                    registeredISecureKVResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" ISecurity.getSecureKeyValuePairs");
               }
          }
          isDeviceModified() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSecurity/ISecurity/isDeviceModified", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ISecurity.isDeviceModified incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ISecurity.isDeviceModified");
                    return null;
               }
          }
          setSecureKeyValuePairs(keyValues: Array<SecureKeyPair>, publicAccessName: string, callback: ISecureKVResultCallback) : void {
               registeredISecureKVResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSecurity/ISecurity/setSecureKeyValuePairs?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { keyValues: keyValues, publicAccessName: publicAccessName } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredISecureKVResultCallback' on receiving async response handler.
               } else {
                    registeredISecureKVResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" ISecurity.setSecureKeyValuePairs");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Security **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Security **/
               var _methods = new Array<ReflectionMethod>();
               /** Method isDeviceModified of Security **/
               var _params_isDeviceModified: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isDeviceModified','Security isDeviceModified', _params_isDeviceModified, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method setSecureKeyValuePairs of Security **/
               var _params_setSecureKeyValuePairs: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSecureKeyValuePairs.push(new ReflectionParameter('keyValues', 'Security setSecureKeyValuePairs keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_setSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security setSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_setSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security setSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSecureKeyValuePairs','Security setSecureKeyValuePairs', _params_setSecureKeyValuePairs, null));
               /** Method getSecureKeyValuePairs of Security **/
               var _params_getSecureKeyValuePairs: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getSecureKeyValuePairs.push(new ReflectionParameter('keys', 'Security getSecureKeyValuePairs keys', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security getSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security getSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getSecureKeyValuePairs','Security getSecureKeyValuePairs', _params_getSecureKeyValuePairs, null));
               /** Method deleteSecureKeyValuePairs of Security **/
               var _params_deleteSecureKeyValuePairs: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('keys', 'Security deleteSecureKeyValuePairs keys', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('publicAccessName', 'Security deleteSecureKeyValuePairs publicAccessName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_deleteSecureKeyValuePairs.push(new ReflectionParameter('callback', 'Security deleteSecureKeyValuePairs callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('deleteSecureKeyValuePairs','Security deleteSecureKeyValuePairs', _params_deleteSecureKeyValuePairs, null));

               /** Class description of ISecurity **/
               var clazz = new ReflectionClass('SecurityBridge','Bridge class SecurityBridge', 'SecurityBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IVibration
      **/
     export interface IVibration extends IBaseNotification {

     }

     /**
      *   Interface definition for IBluetooth
      **/
     export interface IBluetooth extends IBaseCommunication {

     }

     /**
      *   Interface definition for ILogging
      **/
     export interface ILogging extends IBaseUtil {

          /**
           * Method Declarations for ILogging
           */
           log(level : ILoggingLogLevelEnum, message : string);
           log(level : ILoggingLogLevelEnum, category : string, message : string);

     }
     /**
      *  Enumerations for ILogging LogLevel
      **/
     export class ILoggingLogLevelEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static DEBUG = new ILoggingLogLevelEnum("DEBUG");
          static WARN = new ILoggingLogLevelEnum("WARN");
          static ERROR = new ILoggingLogLevelEnum("ERROR");
          static INFO = new ILoggingLogLevelEnum("INFO");
          static Unknown = new ILoggingLogLevelEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ILogging LogLevel
          }
     }

     /**
      *   Interface definition for ITwitter
      **/
     export interface ITwitter extends IBaseSocial {

     }

     /**
      *   Interface definition for ICrypto
      **/
     export interface ICrypto extends IBaseUtil {

     }

     /**
      *   Interface definition for IServiceResultCallback
      **/
     export interface IServiceResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IServiceResultCallback
           */
           onError(error : IServiceResultCallbackErrorEnum);
           onResult(response : ServiceResponse);
           onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IServiceResultCallback Error
      **/
     export class IServiceResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new IServiceResultCallbackErrorEnum("Forbidden");
          static NotFound = new IServiceResultCallbackErrorEnum("NotFound");
          static MethodNotAllowed = new IServiceResultCallbackErrorEnum("MethodNotAllowed");
          static NotAllowed = new IServiceResultCallbackErrorEnum("NotAllowed");
          static NotAuthenticated = new IServiceResultCallbackErrorEnum("NotAuthenticated");
          static TimeOut = new IServiceResultCallbackErrorEnum("TimeOut");
          static NoResponse = new IServiceResultCallbackErrorEnum("NoResponse");
          static ServerError = new IServiceResultCallbackErrorEnum("ServerError");
          static Unreachable = new IServiceResultCallbackErrorEnum("Unreachable");
          static MalformedUrl = new IServiceResultCallbackErrorEnum("MalformedUrl");
          static NotRegisteredService = new IServiceResultCallbackErrorEnum("NotRegisteredService");
          static Unknown = new IServiceResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IServiceResultCallback Error
          }
     }

     /**
      *  Enumerations for IServiceResultCallback Warning
      **/
     export class IServiceResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NotSecure = new IServiceResultCallbackWarningEnum("NotSecure");
          static NotTrusted = new IServiceResultCallbackWarningEnum("NotTrusted");
          static Redirected = new IServiceResultCallbackWarningEnum("Redirected");
          static Wrong_Params = new IServiceResultCallbackWarningEnum("Wrong_Params");
          static Unknown = new IServiceResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IServiceResultCallback Warning
          }
     }

     /**
      *  Callback IServiceResultCallback control dictionary.
      */
     var registeredIServiceResultCallback = new Dictionary<IServiceResultCallback>([]);

     /**
      *  Callback IServiceResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIServiceResultCallbackError(id:number, error: IServiceResultCallbackErrorEnum) : void {
          var callback = registeredIServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIServiceResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIServiceResultCallback.remove(""+id)
          }
     }
     export function handleIServiceResultCallbackResult(id:number, response: ServiceResponse) : void {
          var callback = registeredIServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIServiceResultCallback dictionary.");
          } else {
               callback.onResult(response);
               registeredIServiceResultCallback.remove(""+id)
          }
     }
     export function handleIServiceResultCallbackWarning(id:number, response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) : void {
          var callback = registeredIServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIServiceResultCallback dictionary.");
          } else {
               callback.onWarning(response, warning);
               registeredIServiceResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IServiceResultCallback implementation.
      */
     export class ServiceResultCallback implements IServiceResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IServiceResultCallbackErrorEnum) => Function;
          onResultFunction : (response: ServiceResponse) => Function;
          onWarningFunction : (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IServiceResultCallbackErrorEnum) => Function, onResultFunction : (response: ServiceResponse) => Function, onWarningFunction : (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: ServiceResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: ServiceResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: ServiceResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "ServiceResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IServiceResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The ServiceResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(response: ServiceResponse) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The ServiceResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(response);
               }
          }
          onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The ServiceResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(response, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of ServiceResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of ServiceResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of ServiceResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'ServiceResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','ServiceResultCallback onError', _params_onError, null));
               /** Method onWarning of ServiceResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('response', 'ServiceResultCallback onWarning response', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'ServiceResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','ServiceResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of ServiceResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('response', 'ServiceResultCallback onResult response', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','ServiceResultCallback onResult', _params_onResult, null));

               /** Class description of IServiceResultCallback **/
               var clazz = new ReflectionClass('ServiceResultCallback','Listener/Callback class ServiceResultCallback', 'ServiceResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IMagnetometer
      **/
     export interface IMagnetometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IPrinting
      **/
     export interface IPrinting extends IBaseApplication {

     }

     /**
      *   Interface definition for ITelephony
      **/
     export interface ITelephony extends IBaseCommunication {

          /**
           * Method Declarations for ITelephony
           */
           call(number : string) : ITelephonyStatusEnum;

     }
     /**
      *  Enumerations for ITelephony Status
      **/
     export class ITelephonyStatusEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Dialing = new ITelephonyStatusEnum("Dialing");
          static Failed = new ITelephonyStatusEnum("Failed");
          static Unknown = new ITelephonyStatusEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ITelephony Status
          }
     }

     /**
      *  Service ITelephony implementation.
      */
     export class TelephonyBridge implements ITelephony {

          constructor() {}

          call(number: string) : ITelephonyStatusEnum {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/ITelephony/call", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { number: number}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: ITelephony.call incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" ITelephony.call");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Telephony **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Telephony **/
               var _methods = new Array<ReflectionMethod>();
               /** Method call of Telephony **/
               var _params_call: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_call.push(new ReflectionParameter('number', 'Telephony call number', ITelephonyStatusEnum.getReflection()));
                _methods.push(new ReflectionMethod('call','Telephony call', _params_call, ITelephonyStatusEnum.getReflection()));

               /** Class description of ITelephony **/
               var clazz = new ReflectionClass('TelephonyBridge','Bridge class TelephonyBridge', 'TelephonyBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IAppResourceCallback
      **/
     export interface IAppResourceCallback extends IBaseCallback {

          /**
           * Method Declarations for IAppResourceCallback
           */
           onError(resource : IAppResource, error : IAppResourceCallbackErrorEnum);
           onResult(resource : IAppResource);
           onWarning(resource : IAppResource, warning : IAppResourceCallbackWarningEnum);

     }
     /**
      *  Enumerations for IAppResourceCallback Error
      **/
     export class IAppResourceCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NotFound = new IAppResourceCallbackErrorEnum("NotFound");
          static NoPermission = new IAppResourceCallbackErrorEnum("NoPermission");
          static Unknown = new IAppResourceCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppResourceCallback Error
          }
     }

     /**
      *  Enumerations for IAppResourceCallback Warning
      **/
     export class IAppResourceCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PartialContent = new IAppResourceCallbackWarningEnum("PartialContent");
          static TooLarge = new IAppResourceCallbackWarningEnum("TooLarge");
          static LinkedResource = new IAppResourceCallbackWarningEnum("LinkedResource");
          static Unknown = new IAppResourceCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAppResourceCallback Warning
          }
     }

     /**
      *   Interface definition for IFileSystem
      **/
     export interface IFileSystem extends IBaseData {

          /**
           * Method Declarations for IFileSystem
           */
           createWithPathString(path : string, name : string, callback : IFileResultCallback);
           createWithPath(path : IFilePath, name : string, callback : IFileResultCallback);
           create(name : string, callback : IFileResultCallback);
           getApplicationCacheFolder() : IFilePath;
           getApplicationDocumentsFolder() : IFilePath;
           getApplicationFolder() : IFilePath;
           getPathForFile(file : IFile) : string;
           getPathForPath(path : IFilePath) : string;
           getSeparator() : string;
           isSameFile(source : IFile, dest : IFile) : boolean;
           isSamePath(source : IFilePath, dest : IFilePath) : boolean;
           toPath(path : IFile) : IFilePath;
     }

     /**
      *  Service IFileSystem implementation.
      */
     export class FileSystemBridge implements IFileSystem {

          constructor() {}

          create(name: string, callback: IFileResultCallback) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/create?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { name: name } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFileSystem.create");
               }
          }
          createWithPath(path: IFilePath, name: string, callback: IFileResultCallback) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/createWithPath?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { path: path, name: name } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFileSystem.createWithPath");
               }
          }
          createWithPathString(path: string, name: string, callback: IFileResultCallback) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/createWithPathString?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { path: path, name: name } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFileSystem.createWithPathString");
               }
          }
          getApplicationCacheFolder() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getApplicationCacheFolder", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getApplicationCacheFolder incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getApplicationCacheFolder");
                    return null;
               }
          }
          getApplicationDocumentsFolder() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getApplicationDocumentsFolder", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getApplicationDocumentsFolder incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getApplicationDocumentsFolder");
                    return null;
               }
          }
          getApplicationFolder() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getApplicationFolder", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getApplicationFolder incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getApplicationFolder");
                    return null;
               }
          }
          getPathForFile(file: IFile) : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getPathForFile", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { file: file}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getPathForFile incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getPathForFile");
                    return null;
               }
          }
          getPathForPath(path: IFilePath) : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getPathForPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { path: path}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getPathForPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getPathForPath");
                    return null;
               }
          }
          getSeparator() : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/getSeparator", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.getSeparator incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.getSeparator");
                    return null;
               }
          }
          isSameFile(source: IFile, dest: IFile) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/isSameFile", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { source: source, dest: dest}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.isSameFile incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.isSameFile");
                    return null;
               }
          }
          isSamePath(source: IFilePath, dest: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/isSamePath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { source: source, dest: dest}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.isSamePath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.isSamePath");
                    return null;
               }
          }
          toPath(path: IFile) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFileSystem/toPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { path: path}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFileSystem.toPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFileSystem.toPath");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of FileSystem **/
               var _fields = new Array<ReflectionField>();

               /** Methods of FileSystem **/
               var _methods = new Array<ReflectionMethod>();
               /** Method toPath of FileSystem **/
               var _params_toPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_toPath.push(new ReflectionParameter('path', 'FileSystem toPath path', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('toPath','FileSystem toPath', _params_toPath, FilePathBridge.getReflection()));
               /** Method getSeparator of FileSystem **/
               var _params_getSeparator: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSeparator','FileSystem getSeparator', _params_getSeparator, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method create of FileSystem **/
               var _params_create: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_create.push(new ReflectionParameter('name', 'FileSystem create name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_create.push(new ReflectionParameter('callback', 'FileSystem create callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('create','FileSystem create', _params_create, null));
               /** Method getPathForPath of FileSystem **/
               var _params_getPathForPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getPathForPath.push(new ReflectionParameter('path', 'FileSystem getPathForPath path', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getPathForPath','FileSystem getPathForPath', _params_getPathForPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getPathForFile of FileSystem **/
               var _params_getPathForFile: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getPathForFile.push(new ReflectionParameter('file', 'FileSystem getPathForFile file', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getPathForFile','FileSystem getPathForFile', _params_getPathForFile, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method isSamePath of FileSystem **/
               var _params_isSamePath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_isSamePath.push(new ReflectionParameter('source', 'FileSystem isSamePath source', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_isSamePath.push(new ReflectionParameter('dest', 'FileSystem isSamePath dest', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('isSamePath','FileSystem isSamePath', _params_isSamePath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method createWithPathString of FileSystem **/
               var _params_createWithPathString: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_createWithPathString.push(new ReflectionParameter('path', 'FileSystem createWithPathString path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPathString.push(new ReflectionParameter('name', 'FileSystem createWithPathString name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPathString.push(new ReflectionParameter('callback', 'FileSystem createWithPathString callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('createWithPathString','FileSystem createWithPathString', _params_createWithPathString, null));
               /** Method createWithPath of FileSystem **/
               var _params_createWithPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_createWithPath.push(new ReflectionParameter('path', 'FileSystem createWithPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPath.push(new ReflectionParameter('name', 'FileSystem createWithPath name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPath.push(new ReflectionParameter('callback', 'FileSystem createWithPath callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('createWithPath','FileSystem createWithPath', _params_createWithPath, null));
               /** Method getApplicationFolder of FileSystem **/
               var _params_getApplicationFolder: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getApplicationFolder','FileSystem getApplicationFolder', _params_getApplicationFolder, FilePathBridge.getReflection()));
               /** Method getApplicationCacheFolder of FileSystem **/
               var _params_getApplicationCacheFolder: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getApplicationCacheFolder','FileSystem getApplicationCacheFolder', _params_getApplicationCacheFolder, FilePathBridge.getReflection()));
               /** Method getApplicationDocumentsFolder of FileSystem **/
               var _params_getApplicationDocumentsFolder: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getApplicationDocumentsFolder','FileSystem getApplicationDocumentsFolder', _params_getApplicationDocumentsFolder, FilePathBridge.getReflection()));
               /** Method isSameFile of FileSystem **/
               var _params_isSameFile: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_isSameFile.push(new ReflectionParameter('source', 'FileSystem isSameFile source', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_isSameFile.push(new ReflectionParameter('dest', 'FileSystem isSameFile dest', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('isSameFile','FileSystem isSameFile', _params_isSameFile, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Class description of IFileSystem **/
               var clazz = new ReflectionClass('FileSystemBridge','Bridge class FileSystemBridge', 'FileSystemBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IDataStream
      **/
     export interface IDataStream extends IBaseData {

     }

     /**
      *   Interface definition for IFacebook
      **/
     export interface IFacebook extends IBaseSocial {

     }

     /**
      *   Interface definition for ISecureKVResultCallback
      **/
     export interface ISecureKVResultCallback extends IBaseCallback {

          /**
           * Method Declarations for ISecureKVResultCallback
           */
           onError(error : ISecureKVResultCallbackErrorEnum);
           onResult(keyValues : Array<SecureKeyPair>);
           onWarning(keyValues : Array<SecureKeyPair>, warning : ISecureKVResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for ISecureKVResultCallback Error
      **/
     export class ISecureKVResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new ISecureKVResultCallbackErrorEnum("NoPermission");
          static NoMatchesFound = new ISecureKVResultCallbackErrorEnum("NoMatchesFound");
          static Unknown = new ISecureKVResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ISecureKVResultCallback Error
          }
     }

     /**
      *  Enumerations for ISecureKVResultCallback Warning
      **/
     export class ISecureKVResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
          static Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ISecureKVResultCallback Warning
          }
     }

     /**
      *  Callback ISecureKVResultCallback control dictionary.
      */
     var registeredISecureKVResultCallback = new Dictionary<ISecureKVResultCallback>([]);

     /**
      *  Callback ISecureKVResultCallback onError/onWarning/onResult handlers.
      */
     export function handleISecureKVResultCallbackError(id:number, error: ISecureKVResultCallbackErrorEnum) : void {
          var callback = registeredISecureKVResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredISecureKVResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredISecureKVResultCallback.remove(""+id)
          }
     }
     export function handleISecureKVResultCallbackResult(id:number, keyValues: Array<SecureKeyPair>) : void {
          var callback = registeredISecureKVResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredISecureKVResultCallback dictionary.");
          } else {
               callback.onResult(keyValues);
               registeredISecureKVResultCallback.remove(""+id)
          }
     }
     export function handleISecureKVResultCallbackWarning(id:number, keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) : void {
          var callback = registeredISecureKVResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredISecureKVResultCallback dictionary.");
          } else {
               callback.onWarning(keyValues, warning);
               registeredISecureKVResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback ISecureKVResultCallback implementation.
      */
     export class SecureKVResultCallback implements ISecureKVResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: ISecureKVResultCallbackErrorEnum) => Function;
          onResultFunction : (keyValues: Array<SecureKeyPair>) => Function;
          onWarningFunction : (keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: ISecureKVResultCallbackErrorEnum) => Function, onResultFunction : (keyValues: Array<SecureKeyPair>) => Function, onWarningFunction : (keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: SecureKVResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: SecureKVResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: SecureKVResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "SecureKVResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: ISecureKVResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The SecureKVResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(keyValues: Array<SecureKeyPair>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The SecureKVResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(keyValues);
               }
          }
          onWarning(keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The SecureKVResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(keyValues, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of SecureKVResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of SecureKVResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of SecureKVResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'SecureKVResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','SecureKVResultCallback onError', _params_onError, null));
               /** Method onWarning of SecureKVResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('keyValues', 'SecureKVResultCallback onWarning keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'SecureKVResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','SecureKVResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of SecureKVResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('keyValues', 'SecureKVResultCallback onResult keyValues', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','SecureKVResultCallback onResult', _params_onResult, null));

               /** Class description of ISecureKVResultCallback **/
               var clazz = new ReflectionClass('SecureKVResultCallback','Listener/Callback class SecureKVResultCallback', 'SecureKVResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IImaging
      **/
     export interface IImaging extends IBaseMedia {

     }

     /**
      *   Interface definition for INetworkReachabilityCallback
      **/
     export interface INetworkReachabilityCallback extends IBaseCallback {

          /**
           * Method Declarations for INetworkReachabilityCallback
           */
           onError(error : INetworkReachabilityCallbackErrorEnum);
           onResult(result : string);
           onWarning(result : string, warning : INetworkReachabilityCallbackWarningEnum);

     }
     /**
      *  Enumerations for INetworkReachabilityCallback Error
      **/
     export class INetworkReachabilityCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new INetworkReachabilityCallbackErrorEnum("Forbidden");
          static NotFound = new INetworkReachabilityCallbackErrorEnum("NotFound");
          static MethodNotAllowed = new INetworkReachabilityCallbackErrorEnum("MethodNotAllowed");
          static NotAllowed = new INetworkReachabilityCallbackErrorEnum("NotAllowed");
          static NotAuthenticated = new INetworkReachabilityCallbackErrorEnum("NotAuthenticated");
          static TimeOut = new INetworkReachabilityCallbackErrorEnum("TimeOut");
          static NoResponse = new INetworkReachabilityCallbackErrorEnum("NoResponse");
          static Unreachable = new INetworkReachabilityCallbackErrorEnum("Unreachable");
          static Wrong_Params = new INetworkReachabilityCallbackErrorEnum("Wrong_Params");
          static MalformedUrl = new INetworkReachabilityCallbackErrorEnum("MalformedUrl");
          static DomainUnresolvable = new INetworkReachabilityCallbackErrorEnum("DomainUnresolvable");
          static Unknown = new INetworkReachabilityCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> INetworkReachabilityCallback Error
          }
     }

     /**
      *  Enumerations for INetworkReachabilityCallback Warning
      **/
     export class INetworkReachabilityCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static IncorrectScheme = new INetworkReachabilityCallbackWarningEnum("IncorrectScheme");
          static NotSecure = new INetworkReachabilityCallbackWarningEnum("NotSecure");
          static NotTrusted = new INetworkReachabilityCallbackWarningEnum("NotTrusted");
          static Redirected = new INetworkReachabilityCallbackWarningEnum("Redirected");
          static NotRegisteredService = new INetworkReachabilityCallbackWarningEnum("NotRegisteredService");
          static Unknown = new INetworkReachabilityCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> INetworkReachabilityCallback Warning
          }
     }

     /**
      *  Callback INetworkReachabilityCallback control dictionary.
      */
     var registeredINetworkReachabilityCallback = new Dictionary<INetworkReachabilityCallback>([]);

     /**
      *  Callback INetworkReachabilityCallback onError/onWarning/onResult handlers.
      */
     export function handleINetworkReachabilityCallbackError(id:number, error: INetworkReachabilityCallbackErrorEnum) : void {
          var callback = registeredINetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredINetworkReachabilityCallback dictionary.");
          } else {
               callback.onError(error);
               registeredINetworkReachabilityCallback.remove(""+id)
          }
     }
     export function handleINetworkReachabilityCallbackResult(id:number, result: string) : void {
          var callback = registeredINetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredINetworkReachabilityCallback dictionary.");
          } else {
               callback.onResult(result);
               registeredINetworkReachabilityCallback.remove(""+id)
          }
     }
     export function handleINetworkReachabilityCallbackWarning(id:number, result: string, warning: INetworkReachabilityCallbackWarningEnum) : void {
          var callback = registeredINetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredINetworkReachabilityCallback dictionary.");
          } else {
               callback.onWarning(result, warning);
               registeredINetworkReachabilityCallback.remove(""+id)
          }
     }
     /**
      *  Callback INetworkReachabilityCallback implementation.
      */
     export class NetworkReachabilityCallback implements INetworkReachabilityCallback {
          description: string;
          id: number;
          onErrorFunction : (error: INetworkReachabilityCallbackErrorEnum) => Function;
          onResultFunction : (result: string) => Function;
          onWarningFunction : (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: INetworkReachabilityCallbackErrorEnum) => Function, onResultFunction : (result: string) => Function, onWarningFunction : (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "NetworkReachabilityCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: INetworkReachabilityCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The NetworkReachabilityCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(result: string) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The NetworkReachabilityCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(result);
               }
          }
          onWarning(result: string, warning: INetworkReachabilityCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The NetworkReachabilityCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(result, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of NetworkReachabilityCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of NetworkReachabilityCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of NetworkReachabilityCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'NetworkReachabilityCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','NetworkReachabilityCallback onError', _params_onError, null));
               /** Method onWarning of NetworkReachabilityCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('result', 'NetworkReachabilityCallback onWarning result', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'NetworkReachabilityCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','NetworkReachabilityCallback onWarning', _params_onWarning, null));
               /** Method onResult of NetworkReachabilityCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('result', 'NetworkReachabilityCallback onResult result', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','NetworkReachabilityCallback onResult', _params_onResult, null));

               /** Class description of INetworkReachabilityCallback **/
               var clazz = new ReflectionClass('NetworkReachabilityCallback','Listener/Callback class NetworkReachabilityCallback', 'NetworkReachabilityCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IFileDataResultCallback
      **/
     export interface IFileDataResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileDataResultCallback
           */
           onError(error : IFileDataResultCallbackErrorEnum);
           onResult(file : IFile, data : Array<number>);
           onWarning(file : IFile, warning : IFileDataResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for IFileDataResultCallback Error
      **/
     export class IFileDataResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileDataResultCallbackErrorEnum("InexistentFile");
          static InsufficientSpace = new IFileDataResultCallbackErrorEnum("InsufficientSpace");
          static Unauthorized = new IFileDataResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileDataResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileDataResultCallback Error
          }
     }

     /**
      *  Enumerations for IFileDataResultCallback Warning
      **/
     export class IFileDataResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
          static Unknown = new IFileDataResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IFileDataResultCallback Warning
          }
     }

     /**
      *  Callback IFileDataResultCallback control dictionary.
      */
     var registeredIFileDataResultCallback = new Dictionary<IFileDataResultCallback>([]);

     /**
      *  Callback IFileDataResultCallback onError/onWarning/onResult handlers.
      */
     export function handleIFileDataResultCallbackError(id:number, error: IFileDataResultCallbackErrorEnum) : void {
          var callback = registeredIFileDataResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileDataResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredIFileDataResultCallback.remove(""+id)
          }
     }
     export function handleIFileDataResultCallbackResult(id:number, file: IFile, data: Array<number>) : void {
          var callback = registeredIFileDataResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileDataResultCallback dictionary.");
          } else {
               callback.onResult(file, data);
               registeredIFileDataResultCallback.remove(""+id)
          }
     }
     export function handleIFileDataResultCallbackWarning(id:number, file: IFile, warning: IFileDataResultCallbackWarningEnum) : void {
          var callback = registeredIFileDataResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredIFileDataResultCallback dictionary.");
          } else {
               callback.onWarning(file, warning);
               registeredIFileDataResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback IFileDataResultCallback implementation.
      */
     export class FileDataResultCallback implements IFileDataResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: IFileDataResultCallbackErrorEnum) => Function;
          onResultFunction : (file: IFile, data: Array<number>) => Function;
          onWarningFunction : (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: IFileDataResultCallbackErrorEnum) => Function, onResultFunction : (file: IFile, data: Array<number>) => Function, onWarningFunction : (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: FileDataResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: FileDataResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: FileDataResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "FileDataResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IFileDataResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The FileDataResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(file: IFile, data: Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The FileDataResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(file, data);
               }
          }
          onWarning(file: IFile, warning: IFileDataResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The FileDataResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of FileDataResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of FileDataResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of FileDataResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'FileDataResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','FileDataResultCallback onError', _params_onError, null));
               /** Method onWarning of FileDataResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('file', 'FileDataResultCallback onWarning file', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'FileDataResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','FileDataResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of FileDataResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('file', 'FileDataResultCallback onResult file', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onResult.push(new ReflectionParameter('data', 'FileDataResultCallback onResult data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','FileDataResultCallback onResult', _params_onResult, null));

               /** Class description of IFileDataResultCallback **/
               var clazz = new ReflectionClass('FileDataResultCallback','Listener/Callback class FileDataResultCallback', 'FileDataResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IAmbientLight
      **/
     export interface IAmbientLight extends IBaseSensor {

     }

     /**
      *   Interface definition for IAccelerationListener
      **/
     export interface IAccelerationListener extends IBaseListener {

          /**
           * Method Declarations for IAccelerationListener
           */
           onError(error : IAccelerationListenerErrorEnum);
           onResult(acceleration : Acceleration);
           onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarningEnum);

     }
     /**
      *  Enumerations for IAccelerationListener Error
      **/
     export class IAccelerationListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Unauthorized = new IAccelerationListenerErrorEnum("Unauthorized");
          static Unavailable = new IAccelerationListenerErrorEnum("Unavailable");
          static Unknown = new IAccelerationListenerErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAccelerationListener Error
          }
     }

     /**
      *  Enumerations for IAccelerationListener Warning
      **/
     export class IAccelerationListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NeedsCalibration = new IAccelerationListenerWarningEnum("NeedsCalibration");
          static Stale = new IAccelerationListenerWarningEnum("Stale");
          static Unknown = new IAccelerationListenerWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IAccelerationListener Warning
          }
     }

     /**
      *  Listener IAccelerationListener control dictionary.
      */
     var registeredIAccelerationListener = new Dictionary<IAccelerationListener>([]);

     /**
      *  Listener IAccelerationListener onError/onWarning/onResult handlers.
      */
     export function handleIAccelerationListenerError(id:number, error: IAccelerationListenerErrorEnum) : void {
          var listener = registeredIAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIAccelerationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleIAccelerationListenerResult(id:number, acceleration: Acceleration) : void {
          var listener = registeredIAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIAccelerationListener dictionary.");
          } else {
               listener.onResult(acceleration);
          }
     }
     export function handleIAccelerationListenerWarning(id:number, acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) : void {
          var listener = registeredIAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIAccelerationListener dictionary.");
          } else {
               listener.onWarning(acceleration, warning);
          }
     }
     /**
      *  Listener IAccelerationListener implementation.
      */
     export class AccelerationListener implements IAccelerationListener {
          description: string;
          id: number;
          onErrorFunction : (error: IAccelerationListenerErrorEnum) => Function;
          onResultFunction : (acceleration: Acceleration) => Function;
          onWarningFunction : (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function;

          constructor(onErrorFunction : (error: IAccelerationListenerErrorEnum) => Function, onResultFunction : (acceleration: Acceleration) => Function, onWarningFunction : (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: AccelerationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: AccelerationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: AccelerationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "AccelerationListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IAccelerationListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The AccelerationListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(acceleration: Acceleration) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The AccelerationListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(acceleration);
               }
          }
          onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The AccelerationListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(acceleration, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of AccelerationListener **/
               var _fields = new Array<ReflectionField>();

               /** Methods of AccelerationListener **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of AccelerationListener **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'AccelerationListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','AccelerationListener onError', _params_onError, null));
               /** Method onWarning of AccelerationListener **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('acceleration', 'AccelerationListener onWarning acceleration', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'AccelerationListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','AccelerationListener onWarning', _params_onWarning, null));
               /** Method onResult of AccelerationListener **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('acceleration', 'AccelerationListener onResult acceleration', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','AccelerationListener onResult', _params_onResult, null));

               /** Class description of IAccelerationListener **/
               var clazz = new ReflectionClass('AccelerationListener','Listener/Callback class AccelerationListener', 'AccelerationListener', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IProximity
      **/
     export interface IProximity extends IBaseSensor {

     }

     /**
      *   Interface definition for IGyroscope
      **/
     export interface IGyroscope extends IBaseSensor {

     }

     /**
      *   Interface definition for INetworkReachability
      **/
     export interface INetworkReachability extends IBaseCommunication {

          /**
           * Method Declarations for INetworkReachability
           */
           isNetworkReachable(host : string, callback : INetworkReachabilityCallback);
           isNetworkServiceReachable(url : string, callback : INetworkReachabilityCallback);
     }

     /**
      *  Service INetworkReachability implementation.
      */
     export class NetworkReachabilityBridge implements INetworkReachability {

          constructor() {}

          isNetworkReachable(host: string, callback: INetworkReachabilityCallback) : void {
               registeredINetworkReachabilityCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/INetworkReachability/isNetworkReachable?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { host: host } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredINetworkReachabilityCallback' on receiving async response handler.
               } else {
                    registeredINetworkReachabilityCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" INetworkReachability.isNetworkReachable");
               }
          }
          isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback) : void {
               registeredINetworkReachabilityCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseCommunication/INetworkReachability/isNetworkServiceReachable?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { url: url } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredINetworkReachabilityCallback' on receiving async response handler.
               } else {
                    registeredINetworkReachabilityCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" INetworkReachability.isNetworkServiceReachable");
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of NetworkReachability **/
               var _fields = new Array<ReflectionField>();

               /** Methods of NetworkReachability **/
               var _methods = new Array<ReflectionMethod>();
               /** Method isNetworkReachable of NetworkReachability **/
               var _params_isNetworkReachable: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_isNetworkReachable.push(new ReflectionParameter('host', 'NetworkReachability isNetworkReachable host', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_isNetworkReachable.push(new ReflectionParameter('callback', 'NetworkReachability isNetworkReachable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('isNetworkReachable','NetworkReachability isNetworkReachable', _params_isNetworkReachable, null));
               /** Method isNetworkServiceReachable of NetworkReachability **/
               var _params_isNetworkServiceReachable: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_isNetworkServiceReachable.push(new ReflectionParameter('url', 'NetworkReachability isNetworkServiceReachable url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_isNetworkServiceReachable.push(new ReflectionParameter('callback', 'NetworkReachability isNetworkServiceReachable callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('isNetworkServiceReachable','NetworkReachability isNetworkServiceReachable', _params_isNetworkServiceReachable, null));

               /** Class description of INetworkReachability **/
               var clazz = new ReflectionClass('NetworkReachabilityBridge','Bridge class NetworkReachabilityBridge', 'NetworkReachabilityBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ILifecycleListener
      **/
     export interface ILifecycleListener extends IBaseListener {

          /**
           * Method Declarations for ILifecycleListener
           */
           onError(error : ILifecycleListenerErrorEnum);
           onResult(lifecycle : Lifecycle);
           onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarningEnum);

     }
     /**
      *  Enumerations for ILifecycleListener Error
      **/
     export class ILifecycleListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Runtime = new ILifecycleListenerErrorEnum("Runtime");
          static Implementation = new ILifecycleListenerErrorEnum("Implementation");
          static Killed = new ILifecycleListenerErrorEnum("Killed");
          static Unknown = new ILifecycleListenerErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ILifecycleListener Error
          }
     }

     /**
      *  Enumerations for ILifecycleListener Warning
      **/
     export class ILifecycleListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static MemoryLow = new ILifecycleListenerWarningEnum("MemoryLow");
          static BatteryLow = new ILifecycleListenerWarningEnum("BatteryLow");
          static Unknown = new ILifecycleListenerWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ILifecycleListener Warning
          }
     }

     /**
      *  Listener ILifecycleListener control dictionary.
      */
     var registeredILifecycleListener = new Dictionary<ILifecycleListener>([]);

     /**
      *  Listener ILifecycleListener onError/onWarning/onResult handlers.
      */
     export function handleILifecycleListenerError(id:number, error: ILifecycleListenerErrorEnum) : void {
          var listener = registeredILifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredILifecycleListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleILifecycleListenerResult(id:number, lifecycle: Lifecycle) : void {
          var listener = registeredILifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredILifecycleListener dictionary.");
          } else {
               listener.onResult(lifecycle);
          }
     }
     export function handleILifecycleListenerWarning(id:number, lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) : void {
          var listener = registeredILifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredILifecycleListener dictionary.");
          } else {
               listener.onWarning(lifecycle, warning);
          }
     }
     /**
      *  Listener ILifecycleListener implementation.
      */
     export class LifecycleListener implements ILifecycleListener {
          description: string;
          id: number;
          onErrorFunction : (error: ILifecycleListenerErrorEnum) => Function;
          onResultFunction : (lifecycle: Lifecycle) => Function;
          onWarningFunction : (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function;

          constructor(onErrorFunction : (error: ILifecycleListenerErrorEnum) => Function, onResultFunction : (lifecycle: Lifecycle) => Function, onWarningFunction : (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: LifecycleListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: LifecycleListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: LifecycleListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "LifecycleListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: ILifecycleListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The LifecycleListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(lifecycle: Lifecycle) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The LifecycleListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(lifecycle);
               }
          }
          onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The LifecycleListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(lifecycle, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of LifecycleListener **/
               var _fields = new Array<ReflectionField>();

               /** Methods of LifecycleListener **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of LifecycleListener **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'LifecycleListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','LifecycleListener onError', _params_onError, null));
               /** Method onWarning of LifecycleListener **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('lifecycle', 'LifecycleListener onWarning lifecycle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'LifecycleListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','LifecycleListener onWarning', _params_onWarning, null));
               /** Method onResult of LifecycleListener **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('lifecycle', 'LifecycleListener onResult lifecycle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','LifecycleListener onResult', _params_onResult, null));

               /** Class description of ILifecycleListener **/
               var clazz = new ReflectionClass('LifecycleListener','Listener/Callback class LifecycleListener', 'LifecycleListener', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for INFC
      **/
     export interface INFC extends IBaseReader {

     }

     /**
      *   Interface definition for IUpdate
      **/
     export interface IUpdate extends IBaseApplication {

     }

     /**
      *   Interface definition for IAudio
      **/
     export interface IAudio extends IBaseMedia {

     }

     /**
      *   Interface definition for IXML
      **/
     export interface IXML extends IBaseData {

     }

     /**
      *   Interface definition for IFilePath
      **/
     export interface IFilePath extends IBaseData {

          /**
           * Method Declarations for IFilePath
           */
           endsWithPath(other : IFilePath) : boolean;
           endsWith(other : string) : boolean;
           equalPath(other : IFilePath) : boolean;
           equals(other : string) : boolean;
           getFileName() : IFilePath;
           getFileSystem() : IFileSystem;
           getNameAtIndex(index : number) : string;
           getNameCount() : number;
           getParent() : IFilePath;
           getRoot() : IFilePath;
           isAbsolute() : boolean;
           normalize() : IFilePath;
           relativize(other : IFilePath) : IFilePath;
           resolvePath(other : IFilePath) : IFilePath;
           resolveSiblingPath(other : IFilePath) : IFilePath;
           resolveSibling(other : string) : IFilePath;
           resolve(other : string) : IFilePath;
           startsWithPath(other : IFilePath) : boolean;
           startsWith(other : string) : boolean;
           toAbsolutePath() : IFilePath;
           toFile() : IFile;
           toString() : string;
     }

     /**
      *  Service IFilePath implementation.
      */
     export class FilePathBridge implements IFilePath {

          constructor() {}

          endsWith(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/endsWith", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.endsWith incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.endsWith");
                    return null;
               }
          }
          endsWithPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/endsWithPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.endsWithPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.endsWithPath");
                    return null;
               }
          }
          equalPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/equalPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.equalPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.equalPath");
                    return null;
               }
          }
          equals(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/equals", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.equals incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.equals");
                    return null;
               }
          }
          getFileName() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getFileName", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getFileName incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getFileName");
                    return null;
               }
          }
          getFileSystem() : IFileSystem {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getFileSystem", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getFileSystem incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getFileSystem");
                    return null;
               }
          }
          getNameAtIndex(index: number) : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getNameAtIndex", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { index: index}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getNameAtIndex incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getNameAtIndex");
                    return null;
               }
          }
          getNameCount() : number {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getNameCount", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getNameCount incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getNameCount");
                    return null;
               }
          }
          getParent() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getParent", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getParent incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getParent");
                    return null;
               }
          }
          getRoot() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/getRoot", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.getRoot incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.getRoot");
                    return null;
               }
          }
          isAbsolute() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/isAbsolute", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.isAbsolute incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.isAbsolute");
                    return null;
               }
          }
          normalize() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/normalize", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.normalize incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.normalize");
                    return null;
               }
          }
          relativize(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/relativize", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.relativize incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.relativize");
                    return null;
               }
          }
          resolve(other: string) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/resolve", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.resolve incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.resolve");
                    return null;
               }
          }
          resolvePath(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/resolvePath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.resolvePath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.resolvePath");
                    return null;
               }
          }
          resolveSibling(other: string) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/resolveSibling", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.resolveSibling incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.resolveSibling");
                    return null;
               }
          }
          resolveSiblingPath(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/resolveSiblingPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.resolveSiblingPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.resolveSiblingPath");
                    return null;
               }
          }
          startsWith(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/startsWith", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.startsWith incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.startsWith");
                    return null;
               }
          }
          startsWithPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/startsWithPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.startsWithPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.startsWithPath");
                    return null;
               }
          }
          toAbsolutePath() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/toAbsolutePath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.toAbsolutePath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.toAbsolutePath");
                    return null;
               }
          }
          toFile() : IFile {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/toFile", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.toFile incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.toFile");
                    return null;
               }
          }
          toString() : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/toString", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFilePath.toString incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFilePath.toString");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of FilePath **/
               var _fields = new Array<ReflectionField>();

               /** Methods of FilePath **/
               var _methods = new Array<ReflectionMethod>();
               /** Method equals of FilePath **/
               var _params_equals: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_equals.push(new ReflectionParameter('other', 'FilePath equals other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('equals','FilePath equals', _params_equals, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method toString of FilePath **/
               var _params_toString: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toString','FilePath toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method startsWith of FilePath **/
               var _params_startsWith: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_startsWith.push(new ReflectionParameter('other', 'FilePath startsWith other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('startsWith','FilePath startsWith', _params_startsWith, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method endsWith of FilePath **/
               var _params_endsWith: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_endsWith.push(new ReflectionParameter('other', 'FilePath endsWith other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('endsWith','FilePath endsWith', _params_endsWith, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method getParent of FilePath **/
               var _params_getParent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getParent','FilePath getParent', _params_getParent, FilePathBridge.getReflection()));
               /** Method isAbsolute of FilePath **/
               var _params_isAbsolute: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isAbsolute','FilePath isAbsolute', _params_isAbsolute, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method resolve of FilePath **/
               var _params_resolve: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_resolve.push(new ReflectionParameter('other', 'FilePath resolve other', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('resolve','FilePath resolve', _params_resolve, FilePathBridge.getReflection()));
               /** Method getRoot of FilePath **/
               var _params_getRoot: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getRoot','FilePath getRoot', _params_getRoot, FilePathBridge.getReflection()));
               /** Method normalize of FilePath **/
               var _params_normalize: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('normalize','FilePath normalize', _params_normalize, FilePathBridge.getReflection()));
               /** Method getFileSystem of FilePath **/
               var _params_getFileSystem: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getFileSystem','FilePath getFileSystem', _params_getFileSystem, FileSystemBridge.getReflection()));
               /** Method getFileName of FilePath **/
               var _params_getFileName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getFileName','FilePath getFileName', _params_getFileName, FilePathBridge.getReflection()));
               /** Method getNameCount of FilePath **/
               var _params_getNameCount: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getNameCount','FilePath getNameCount', _params_getNameCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method resolveSibling of FilePath **/
               var _params_resolveSibling: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_resolveSibling.push(new ReflectionParameter('other', 'FilePath resolveSibling other', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('resolveSibling','FilePath resolveSibling', _params_resolveSibling, FilePathBridge.getReflection()));
               /** Method relativize of FilePath **/
               var _params_relativize: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_relativize.push(new ReflectionParameter('other', 'FilePath relativize other', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('relativize','FilePath relativize', _params_relativize, FilePathBridge.getReflection()));
               /** Method toAbsolutePath of FilePath **/
               var _params_toAbsolutePath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toAbsolutePath','FilePath toAbsolutePath', _params_toAbsolutePath, FilePathBridge.getReflection()));
               /** Method toFile of FilePath **/
               var _params_toFile: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toFile','FilePath toFile', _params_toFile, FileBridge.getReflection()));
               /** Method getNameAtIndex of FilePath **/
               var _params_getNameAtIndex: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getNameAtIndex.push(new ReflectionParameter('index', 'FilePath getNameAtIndex index', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getNameAtIndex','FilePath getNameAtIndex', _params_getNameAtIndex, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method startsWithPath of FilePath **/
               var _params_startsWithPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_startsWithPath.push(new ReflectionParameter('other', 'FilePath startsWithPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('startsWithPath','FilePath startsWithPath', _params_startsWithPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method endsWithPath of FilePath **/
               var _params_endsWithPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_endsWithPath.push(new ReflectionParameter('other', 'FilePath endsWithPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('endsWithPath','FilePath endsWithPath', _params_endsWithPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method resolveSiblingPath of FilePath **/
               var _params_resolveSiblingPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_resolveSiblingPath.push(new ReflectionParameter('other', 'FilePath resolveSiblingPath other', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('resolveSiblingPath','FilePath resolveSiblingPath', _params_resolveSiblingPath, FilePathBridge.getReflection()));
               /** Method equalPath of FilePath **/
               var _params_equalPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_equalPath.push(new ReflectionParameter('other', 'FilePath equalPath other', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('equalPath','FilePath equalPath', _params_equalPath, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method resolvePath of FilePath **/
               var _params_resolvePath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_resolvePath.push(new ReflectionParameter('other', 'FilePath resolvePath other', FilePathBridge.getReflection()));
                _methods.push(new ReflectionMethod('resolvePath','FilePath resolvePath', _params_resolvePath, FilePathBridge.getReflection()));

               /** Class description of IFilePath **/
               var clazz = new ReflectionClass('FilePathBridge','Bridge class FilePathBridge', 'FilePathBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IBarcode
      **/
     export interface IBarcode extends IBaseReader {

     }

     /**
      *   Interface definition for IService
      **/
     export interface IService extends IBaseCommunication {

          /**
           * Method Declarations for IService
           */
           getService(serviceName : string) : Service;
           invokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback);
           isRegistered(serviceName : string) : boolean;
           isRegistered(service : Service) : boolean;
           registerService(service : Service);
           unregisterServices();
           unregisterService(service : Service);
     }

     /**
      *   Interface definition for IBarometer
      **/
     export interface IBarometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IAlarm
      **/
     export interface IAlarm extends IBaseNotification {

     }

     /**
      *   Interface definition for IOS
      **/
     export interface IOS extends IBaseSystem {

          /**
           * Method Declarations for IOS
           */
           getOSInfo() : OSInfo;
     }

     /**
      *  Service IOS implementation.
      */
     export class OSBridge implements IOS {

          constructor() {}

          getOSInfo() : OSInfo {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseSystem/IOS/getOSInfo", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IOS.getOSInfo incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IOS.getOSInfo");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of OS **/
               var _fields = new Array<ReflectionField>();

               /** Methods of OS **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getOSInfo of OS **/
               var _params_getOSInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getOSInfo','OS getOSInfo', _params_getOSInfo, OSInfo.getReflection()));

               /** Class description of IOS **/
               var clazz = new ReflectionClass('OSBridge','Bridge class OSBridge', 'OSBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IContact
      **/
     export interface IContact extends IBasePIM {

          /**
           * Method Declarations for IContact
           */
           getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback);
           getContact(contact : ContactUid, callback : IContactResultCallback);
           getContactsForFields(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>);
           getContactsWithFilter(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>, filter : Array<IContactFilterEnum>);
           getContacts(callback : IContactResultCallback);
           searchContactsWithFilter(term : string, callback : IContactResultCallback, filter : Array<IContactFilterEnum>);
           searchContacts(term : string, callback : IContactResultCallback);
           setContactPhoto(contact : ContactUid, pngImage : Array<number>) : boolean;

     }
     /**
      *  Enumerations for IContact FieldGroup
      **/
     export class IContactFieldGroupEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PERSONAL_INFO = new IContactFieldGroupEnum("PERSONAL_INFO");
          static PROFESSIONAL_INFO = new IContactFieldGroupEnum("PROFESSIONAL_INFO");
          static ADDRESSES = new IContactFieldGroupEnum("ADDRESSES");
          static PHONES = new IContactFieldGroupEnum("PHONES");
          static EMAILS = new IContactFieldGroupEnum("EMAILS");
          static WEBSITES = new IContactFieldGroupEnum("WEBSITES");
          static SOCIALS = new IContactFieldGroupEnum("SOCIALS");
          static TAGS = new IContactFieldGroupEnum("TAGS");
          static Unknown = new IContactFieldGroupEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContact FieldGroup
          }
     }

     /**
      *  Enumerations for IContact Filter
      **/
     export class IContactFilterEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HAS_PHONE = new IContactFilterEnum("HAS_PHONE");
          static HAS_EMAIL = new IContactFilterEnum("HAS_EMAIL");
          static HAS_ADDRESS = new IContactFilterEnum("HAS_ADDRESS");
          static Unknown = new IContactFilterEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IContact Filter
          }
     }

     /**
      *  Service IContact implementation.
      */
     export class ContactBridge implements IContact {

          constructor() {}

          getContact(contact: ContactUid, callback: IContactResultCallback) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/getContact?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { contact: contact } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.getContact");
               }
          }
          getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback) : void {
               registeredIContactPhotoResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/getContactPhoto?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { contact: contact } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactPhotoResultCallback' on receiving async response handler.
               } else {
                    registeredIContactPhotoResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.getContactPhoto");
               }
          }
          getContacts(callback: IContactResultCallback) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/getContacts?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: {  } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.getContacts");
               }
          }
          getContactsForFields(callback: IContactResultCallback, fields: Array<IContactFieldGroupEnum>) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/getContactsForFields?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { callback: callback } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.getContactsForFields");
               }
          }
          getContactsWithFilter(callback: IContactResultCallback, fields: Array<IContactFieldGroupEnum>, filter: Array<IContactFilterEnum>) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/getContactsWithFilter?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { callback: callback, fields: fields } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.getContactsWithFilter");
               }
          }
          searchContacts(term: string, callback: IContactResultCallback) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/searchContacts?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { term: term } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.searchContacts");
               }
          }
          searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: Array<IContactFilterEnum>) : void {
               registeredIContactResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/searchContactsWithFilter?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { term: term, callback: callback } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIContactResultCallback' on receiving async response handler.
               } else {
                    registeredIContactResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IContact.searchContactsWithFilter");
               }
          }
          setContactPhoto(contact: ContactUid, pngImage: Array<number>) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBasePIM/IContact/setContactPhoto", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { contact: contact, pngImage: pngImage}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IContact.setContactPhoto incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IContact.setContactPhoto");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of Contact **/
               var _fields = new Array<ReflectionField>();

               /** Methods of Contact **/
               var _methods = new Array<ReflectionMethod>();
               /** Method searchContactsWithFilter of Contact **/
               var _params_searchContactsWithFilter: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_searchContactsWithFilter.push(new ReflectionParameter('term', 'Contact searchContactsWithFilter term', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_searchContactsWithFilter.push(new ReflectionParameter('callback', 'Contact searchContactsWithFilter callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_searchContactsWithFilter.push(new ReflectionParameter('filter', 'Contact searchContactsWithFilter filter', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('searchContactsWithFilter','Contact searchContactsWithFilter', _params_searchContactsWithFilter, null));
               /** Method getContact of Contact **/
               var _params_getContact: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContact.push(new ReflectionParameter('contact', 'Contact getContact contact', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getContact.push(new ReflectionParameter('callback', 'Contact getContact callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContact','Contact getContact', _params_getContact, null));
               /** Method searchContacts of Contact **/
               var _params_searchContacts: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_searchContacts.push(new ReflectionParameter('term', 'Contact searchContacts term', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_searchContacts.push(new ReflectionParameter('callback', 'Contact searchContacts callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('searchContacts','Contact searchContacts', _params_searchContacts, null));
               /** Method getContactPhoto of Contact **/
               var _params_getContactPhoto: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContactPhoto.push(new ReflectionParameter('contact', 'Contact getContactPhoto contact', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getContactPhoto.push(new ReflectionParameter('callback', 'Contact getContactPhoto callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContactPhoto','Contact getContactPhoto', _params_getContactPhoto, null));
               /** Method setContactPhoto of Contact **/
               var _params_setContactPhoto: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactPhoto.push(new ReflectionParameter('contact', 'Contact setContactPhoto contact', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _params_setContactPhoto.push(new ReflectionParameter('pngImage', 'Contact setContactPhoto pngImage', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactPhoto','Contact setContactPhoto', _params_setContactPhoto, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method getContacts of Contact **/
               var _params_getContacts: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContacts.push(new ReflectionParameter('callback', 'Contact getContacts callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContacts','Contact getContacts', _params_getContacts, null));
               /** Method getContactsForFields of Contact **/
               var _params_getContactsForFields: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContactsForFields.push(new ReflectionParameter('callback', 'Contact getContactsForFields callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getContactsForFields.push(new ReflectionParameter('fields', 'Contact getContactsForFields fields', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContactsForFields','Contact getContactsForFields', _params_getContactsForFields, null));
               /** Method getContactsWithFilter of Contact **/
               var _params_getContactsWithFilter: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContactsWithFilter.push(new ReflectionParameter('callback', 'Contact getContactsWithFilter callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getContactsWithFilter.push(new ReflectionParameter('fields', 'Contact getContactsWithFilter fields', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_getContactsWithFilter.push(new ReflectionParameter('filter', 'Contact getContactsWithFilter filter', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContactsWithFilter','Contact getContactsWithFilter', _params_getContactsWithFilter, null));

               /** Class description of IContact **/
               var clazz = new ReflectionClass('ContactBridge','Bridge class ContactBridge', 'ContactBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IButtonListener
      **/
     export interface IButtonListener extends IBaseListener {

          /**
           * Method Declarations for IButtonListener
           */
           onError(error : IButtonListenerErrorEnum);
           onResult(button : Button);
           onWarning(button : Button, warning : IButtonListenerWarningEnum);

     }
     /**
      *  Enumerations for IButtonListener Error
      **/
     export class IButtonListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Present = new IButtonListenerErrorEnum("Not_Present");
          static Unknown = new IButtonListenerErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IButtonListener Error
          }
     }

     /**
      *  Enumerations for IButtonListener Warning
      **/
     export class IButtonListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
          static Unknown = new IButtonListenerWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IButtonListener Warning
          }
     }

     /**
      *  Listener IButtonListener control dictionary.
      */
     var registeredIButtonListener = new Dictionary<IButtonListener>([]);

     /**
      *  Listener IButtonListener onError/onWarning/onResult handlers.
      */
     export function handleIButtonListenerError(id:number, error: IButtonListenerErrorEnum) : void {
          var listener = registeredIButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIButtonListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleIButtonListenerResult(id:number, button: Button) : void {
          var listener = registeredIButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIButtonListener dictionary.");
          } else {
               listener.onResult(button);
          }
     }
     export function handleIButtonListenerWarning(id:number, button: Button, warning: IButtonListenerWarningEnum) : void {
          var listener = registeredIButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredIButtonListener dictionary.");
          } else {
               listener.onWarning(button, warning);
          }
     }
     /**
      *  Listener IButtonListener implementation.
      */
     export class ButtonListener implements IButtonListener {
          description: string;
          id: number;
          onErrorFunction : (error: IButtonListenerErrorEnum) => Function;
          onResultFunction : (button: Button) => Function;
          onWarningFunction : (button: Button, warning: IButtonListenerWarningEnum) => Function;

          constructor(onErrorFunction : (error: IButtonListenerErrorEnum) => Function, onResultFunction : (button: Button) => Function, onWarningFunction : (button: Button, warning: IButtonListenerWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: ButtonListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: ButtonListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: ButtonListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "ButtonListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: IButtonListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The ButtonListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(button: Button) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The ButtonListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(button);
               }
          }
          onWarning(button: Button, warning: IButtonListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The ButtonListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(button, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of ButtonListener **/
               var _fields = new Array<ReflectionField>();

               /** Methods of ButtonListener **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of ButtonListener **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'ButtonListener onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','ButtonListener onError', _params_onError, null));
               /** Method onWarning of ButtonListener **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('button', 'ButtonListener onWarning button', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'ButtonListener onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','ButtonListener onWarning', _params_onWarning, null));
               /** Method onResult of ButtonListener **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('button', 'ButtonListener onResult button', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','ButtonListener onResult', _params_onResult, null));

               /** Class description of IButtonListener **/
               var clazz = new ReflectionClass('ButtonListener','Listener/Callback class ButtonListener', 'ButtonListener', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for IDesktop
      **/
     export interface IDesktop extends IBaseUI {

     }

     /**
      *   Interface definition for INotificationLocal
      **/
     export interface INotificationLocal extends IBaseNotification {

     }

     /**
      *   Interface definition for INetworkStatus
      **/
     export interface INetworkStatus extends IBaseCommunication {

     }

     /**
      *   Interface definition for IUI
      **/
     export interface IUI extends IBaseUI {

     }

     /**
      *   Interface definition for INotification
      **/
     export interface INotification extends IBaseNotification {

     }

     /**
      *   Interface definition for ITableResultCallback
      **/
     export interface ITableResultCallback extends IBaseCallback {

          /**
           * Method Declarations for ITableResultCallback
           */
           onError(error : ITableResultCallbackErrorEnum);
           onResult(table : Table);
           onWarning(table : Table, warning : ITableResultCallbackWarningEnum);

     }
     /**
      *  Enumerations for ITableResultCallback Error
      **/
     export class ITableResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new ITableResultCallbackErrorEnum("NoSpace");
          static ReadOnlyTable = new ITableResultCallbackErrorEnum("ReadOnlyTable");
          static SqlException = new ITableResultCallbackErrorEnum("SqlException");
          static DatabaseNotFound = new ITableResultCallbackErrorEnum("DatabaseNotFound");
          static NoTableFound = new ITableResultCallbackErrorEnum("NoTableFound");
          static Unknown = new ITableResultCallbackErrorEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ITableResultCallback Error
          }
     }

     /**
      *  Enumerations for ITableResultCallback Warning
      **/
     export class ITableResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static TableExists = new ITableResultCallbackWarningEnum("TableExists");
          static TableLocked = new ITableResultCallbackWarningEnum("TableLocked");
          static NoResults = new ITableResultCallbackWarningEnum("NoResults");
          static Unknown = new ITableResultCallbackWarningEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ITableResultCallback Warning
          }
     }

     /**
      *  Callback ITableResultCallback control dictionary.
      */
     var registeredITableResultCallback = new Dictionary<ITableResultCallback>([]);

     /**
      *  Callback ITableResultCallback onError/onWarning/onResult handlers.
      */
     export function handleITableResultCallbackError(id:number, error: ITableResultCallbackErrorEnum) : void {
          var callback = registeredITableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredITableResultCallback dictionary.");
          } else {
               callback.onError(error);
               registeredITableResultCallback.remove(""+id)
          }
     }
     export function handleITableResultCallbackResult(id:number, table: Table) : void {
          var callback = registeredITableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredITableResultCallback dictionary.");
          } else {
               callback.onResult(table);
               registeredITableResultCallback.remove(""+id)
          }
     }
     export function handleITableResultCallbackWarning(id:number, table: Table, warning: ITableResultCallbackWarningEnum) : void {
          var callback = registeredITableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredITableResultCallback dictionary.");
          } else {
               callback.onWarning(table, warning);
               registeredITableResultCallback.remove(""+id)
          }
     }
     /**
      *  Callback ITableResultCallback implementation.
      */
     export class TableResultCallback implements ITableResultCallback {
          description: string;
          id: number;
          onErrorFunction : (error: ITableResultCallbackErrorEnum) => Function;
          onResultFunction : (table: Table) => Function;
          onWarningFunction : (table: Table, warning: ITableResultCallbackWarningEnum) => Function;

          constructor(onErrorFunction : (error: ITableResultCallbackErrorEnum) => Function, onResultFunction : (table: Table) => Function, onWarningFunction : (table: Table, warning: ITableResultCallbackWarningEnum) => Function) {
               this.id = ++registeredCounter;
               if (this.onErrorFunction == null) {
                    console.error("ERROR: TableResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (this.onResultFunction == null) {
                    console.error("ERROR: TableResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (this.onWarningFunction == null) {
                    console.error("ERROR: TableResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          toString() : string {
               return "TableResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

          onError(error: ITableResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: The TableResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onResult(table: Table) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: The TableResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(table);
               }
          }
          onWarning(table: Table, warning: ITableResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: The TableResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(table, warning);
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of TableResultCallback **/
               var _fields = new Array<ReflectionField>();

               /** Methods of TableResultCallback **/
               var _methods = new Array<ReflectionMethod>();
               /** Method onError of TableResultCallback **/
               var _params_onError: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onError.push(new ReflectionParameter('error', 'TableResultCallback onError error', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onError','TableResultCallback onError', _params_onError, null));
               /** Method onWarning of TableResultCallback **/
               var _params_onWarning: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onWarning.push(new ReflectionParameter('table', 'TableResultCallback onWarning table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_onWarning.push(new ReflectionParameter('warning', 'TableResultCallback onWarning warning', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onWarning','TableResultCallback onWarning', _params_onWarning, null));
               /** Method onResult of TableResultCallback **/
               var _params_onResult: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_onResult.push(new ReflectionParameter('table', 'TableResultCallback onResult table', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('onResult','TableResultCallback onResult', _params_onResult, null));

               /** Class description of ITableResultCallback **/
               var clazz = new ReflectionClass('TableResultCallback','Listener/Callback class TableResultCallback', 'TableResultCallback', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Interface definition for ISettings
      **/
     export interface ISettings extends IBaseApplication {

     }

     /**
      *   Interface definition for IFile
      **/
     export interface IFile extends IFilePath {

          /**
           * Method Declarations for IFile
           */
           canRead() : boolean;
           canWrite() : boolean;
           createWithPath(path : string, name : string, callback : IFileResultCallback);
           create(name : string, callback : IFileResultCallback);
           delete(cascade : boolean) : boolean;
           exists() : boolean;
           getContent(callback : IFileDataResultCallback);
           getDateCreated() : number;
           getDateModified() : number;
           getName() : string;
           getPath() : string;
           getSize() : number;
           isDirectory() : boolean;
           listFilesForRegex(regex : string, callback : IFileListResultCallback);
           listFiles(callback : IFileListResultCallback);
           mkDir(recursive : boolean) : boolean;
           move(newFile : IFile, createPath : boolean, callback : IFileResultCallback, overwrite : boolean);
           setContent(content : Array<number>, callback : IFileDataResultCallback);
           toPath() : IFilePath;
     }

     /**
      *  Service IFile implementation.
      */
     export class FileBridge implements IFile {

          constructor() {}

          canRead() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/canRead", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.canRead incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.canRead");
                    return null;
               }
          }
          canWrite() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/canWrite", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.canWrite incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.canWrite");
                    return null;
               }
          }
          create(name: string, callback: IFileResultCallback) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/create?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { name: name } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.create");
               }
          }
          createWithPath(path: string, name: string, callback: IFileResultCallback) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/createWithPath?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { path: path, name: name } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.createWithPath");
               }
          }
          delete(cascade: boolean) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/delete", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { cascade: cascade}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.delete incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.delete");
                    return null;
               }
          }
          endsWith(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/endsWith", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.endsWith incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.endsWith");
                    return null;
               }
          }
          endsWithPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/endsWithPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.endsWithPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.endsWithPath");
                    return null;
               }
          }
          equalPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/equalPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.equalPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.equalPath");
                    return null;
               }
          }
          equals(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/equals", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.equals incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.equals");
                    return null;
               }
          }
          exists() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/exists", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.exists incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.exists");
                    return null;
               }
          }
          getContent(callback: IFileDataResultCallback) : void {
               registeredIFileDataResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getContent?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: {  } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileDataResultCallback' on receiving async response handler.
               } else {
                    registeredIFileDataResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.getContent");
               }
          }
          getDateCreated() : number {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getDateCreated", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getDateCreated incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getDateCreated");
                    return null;
               }
          }
          getDateModified() : number {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getDateModified", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getDateModified incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getDateModified");
                    return null;
               }
          }
          getFileName() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getFileName", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getFileName incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getFileName");
                    return null;
               }
          }
          getFileSystem() : IFileSystem {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getFileSystem", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getFileSystem incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getFileSystem");
                    return null;
               }
          }
          getName() : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getName", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getName incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getName");
                    return null;
               }
          }
          getNameAtIndex(index: number) : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getNameAtIndex", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { index: index}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getNameAtIndex incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getNameAtIndex");
                    return null;
               }
          }
          getNameCount() : number {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getNameCount", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getNameCount incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getNameCount");
                    return null;
               }
          }
          getParent() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getParent", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getParent incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getParent");
                    return null;
               }
          }
          getPath() : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getPath");
                    return null;
               }
          }
          getRoot() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getRoot", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getRoot incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getRoot");
                    return null;
               }
          }
          getSize() : number {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/getSize", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.getSize incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.getSize");
                    return null;
               }
          }
          isAbsolute() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/isAbsolute", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.isAbsolute incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.isAbsolute");
                    return null;
               }
          }
          isDirectory() : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/isDirectory", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.isDirectory incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.isDirectory");
                    return null;
               }
          }
          listFiles(callback: IFileListResultCallback) : void {
               registeredIFileListResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/listFiles?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: {  } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileListResultCallback' on receiving async response handler.
               } else {
                    registeredIFileListResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.listFiles");
               }
          }
          listFilesForRegex(regex: string, callback: IFileListResultCallback) : void {
               registeredIFileListResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/listFilesForRegex?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { regex: regex } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileListResultCallback' on receiving async response handler.
               } else {
                    registeredIFileListResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.listFilesForRegex");
               }
          }
          mkDir(recursive: boolean) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/mkDir", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { recursive: recursive}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.mkDir incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.mkDir");
                    return null;
               }
          }
          move(newFile: IFile, createPath: boolean, callback: IFileResultCallback, overwrite: boolean) : void {
               registeredIFileResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/move?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { newFile: newFile, createPath: createPath, callback: callback } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileResultCallback' on receiving async response handler.
               } else {
                    registeredIFileResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.move");
               }
          }
          normalize() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/normalize", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.normalize incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.normalize");
                    return null;
               }
          }
          relativize(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/relativize", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.relativize incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.relativize");
                    return null;
               }
          }
          resolve(other: string) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/resolve", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.resolve incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.resolve");
                    return null;
               }
          }
          resolvePath(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/resolvePath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.resolvePath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.resolvePath");
                    return null;
               }
          }
          resolveSibling(other: string) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/resolveSibling", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.resolveSibling incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.resolveSibling");
                    return null;
               }
          }
          resolveSiblingPath(other: IFilePath) : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/resolveSiblingPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.resolveSiblingPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.resolveSiblingPath");
                    return null;
               }
          }
          setContent(content: Array<number>, callback: IFileDataResultCallback) : void {
               registeredIFileDataResultCallback.add(""+callback.getId(),callback);
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/setContent?id="+callback.getId(), false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { content: content } }));
               if (xhr.status == 200) {
                    // Callback removed from 'registeredIFileDataResultCallback' on receiving async response handler.
               } else {
                    registeredIFileDataResultCallback.remove(""+callback.getId());
                    console.error("ERROR: "+xhr.status+" IFile.setContent");
               }
          }
          startsWith(other: string) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/startsWith", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.startsWith incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.startsWith");
                    return null;
               }
          }
          startsWithPath(other: IFilePath) : boolean {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/startsWithPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { other: other}}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.startsWithPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.startsWithPath");
                    return null;
               }
          }
          toAbsolutePath() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/toAbsolutePath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.toAbsolutePath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.toAbsolutePath");
                    return null;
               }
          }
          toFile() : IFile {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/toFile", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.toFile incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.toFile");
                    return null;
               }
          }
          toPath() : IFilePath {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/toPath", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.toPath incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.toPath");
                    return null;
               }
          }
          toString() : string {
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath+"/IAdaptiveRP/IBaseData/IFilePath/IFile/toString", false);
               xhr.setRequestHeader("Content-type", "application/json");
               xhr.send(JSON.stringify({ request: { }}));
               if (xhr.status == 200) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         return JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: IFile.toString incorrect response received.");
                         return null;
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" IFile.toString");
                    return null;
               }
          }

          static getReflection() : ReflectionClass {

               /** Fields of File **/
               var _fields = new Array<ReflectionField>();

               /** Methods of File **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of File **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','File getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method delete of File **/
               var _params_delete: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_delete.push(new ReflectionParameter('cascade', 'File delete cascade', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('delete','File delete', _params_delete, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method getSize of File **/
               var _params_getSize: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSize','File getSize', _params_getSize, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method getPath of File **/
               var _params_getPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPath','File getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method canRead of File **/
               var _params_canRead: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('canRead','File canRead', _params_canRead, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method canWrite of File **/
               var _params_canWrite: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('canWrite','File canWrite', _params_canWrite, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method exists of File **/
               var _params_exists: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('exists','File exists', _params_exists, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method isDirectory of File **/
               var _params_isDirectory: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isDirectory','File isDirectory', _params_isDirectory, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method listFiles of File **/
               var _params_listFiles: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_listFiles.push(new ReflectionParameter('callback', 'File listFiles callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('listFiles','File listFiles', _params_listFiles, null));
               /** Method toPath of File **/
               var _params_toPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toPath','File toPath', _params_toPath, FilePathBridge.getReflection()));
               /** Method getContent of File **/
               var _params_getContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_getContent.push(new ReflectionParameter('callback', 'File getContent callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('getContent','File getContent', _params_getContent, null));
               /** Method create of File **/
               var _params_create: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_create.push(new ReflectionParameter('name', 'File create name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_create.push(new ReflectionParameter('callback', 'File create callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('create','File create', _params_create, null));
               /** Method getDateCreated of File **/
               var _params_getDateCreated: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDateCreated','File getDateCreated', _params_getDateCreated, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method getDateModified of File **/
               var _params_getDateModified: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDateModified','File getDateModified', _params_getDateModified, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setContent of File **/
               var _params_setContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContent.push(new ReflectionParameter('content', 'File setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_setContent.push(new ReflectionParameter('callback', 'File setContent callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContent','File setContent', _params_setContent, null));
               /** Method mkDir of File **/
               var _params_mkDir: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_mkDir.push(new ReflectionParameter('recursive', 'File mkDir recursive', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('mkDir','File mkDir', _params_mkDir, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method listFilesForRegex of File **/
               var _params_listFilesForRegex: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_listFilesForRegex.push(new ReflectionParameter('regex', 'File listFilesForRegex regex', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_listFilesForRegex.push(new ReflectionParameter('callback', 'File listFilesForRegex callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('listFilesForRegex','File listFilesForRegex', _params_listFilesForRegex, null));
               /** Method move of File **/
               var _params_move: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_move.push(new ReflectionParameter('newFile', 'File move newFile', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_move.push(new ReflectionParameter('createPath', 'File move createPath', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_move.push(new ReflectionParameter('callback', 'File move callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_move.push(new ReflectionParameter('overwrite', 'File move overwrite', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('move','File move', _params_move, null));
               /** Method createWithPath of File **/
               var _params_createWithPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_createWithPath.push(new ReflectionParameter('path', 'File createWithPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPath.push(new ReflectionParameter('name', 'File createWithPath name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
               _params_createWithPath.push(new ReflectionParameter('callback', 'File createWithPath callback', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('createWithPath','File createWithPath', _params_createWithPath, null));

               /** Class description of IFile **/
               var clazz = new ReflectionClass('FileBridge','Bridge class FileBridge', 'FileBridge', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }
     /**
      *   Class implementation for Email
      **/
     export class Email {

          /** Field Declarations **/
          attachmentData : Array<AttachmentData>;
          bccRecipients : Array<EmailAddress>;
          ccRecipients : Array<EmailAddress>;
          messageBody : string;
          messageBodyMimeType : string;
          subject : string;
          toRecipients : Array<EmailAddress>;

          /** Initialization **/
          constructor(toRecipients: Array<EmailAddress>, subject: string, messageBody: string) {
               this.toRecipients = toRecipients;
               this.subject = subject;
               this.messageBody = messageBody;
          }

          /**
           * Method Declarations for Email
           */
          getAttachmentData() : Array<AttachmentData> {
               return this.attachmentData
          }

          getBccRecipients() : Array<EmailAddress> {
               return this.bccRecipients
          }

          getCcRecipients() : Array<EmailAddress> {
               return this.ccRecipients
          }

          getMessageBody() : string {
               return this.messageBody
          }

          getMessageBodyMimeType() : string {
               return this.messageBodyMimeType
          }

          getSubject() : string {
               return this.subject
          }

          getToRecipients() : Array<EmailAddress> {
               return this.toRecipients
          }

          setAttachmentData(attachmentData : Array<AttachmentData>) : void {
               this.attachmentData = attachmentData
          }

          setBccRecipients(bccRecipients : Array<EmailAddress>) : void {
               this.bccRecipients = bccRecipients
          }

          setCcRecipients(ccRecipients : Array<EmailAddress>) : void {
               this.ccRecipients = ccRecipients
          }

          setMessageBodyMimeType(messageBodyMimeType : string) : void {
               this.messageBodyMimeType = messageBodyMimeType
          }

          setMessageBody(messageBody : string) : void {
               this.messageBody = messageBody
          }

          setSubject(subject : string) : void {
               this.subject = subject
          }

          setToRecipients(toRecipients : Array<EmailAddress>) : void {
               this.toRecipients = toRecipients
          }

          static getReflection() : ReflectionClass {

               /** Fields of Email **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('toRecipients','Field toRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               _fields.push(new ReflectionField('ccRecipients','Field ccRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               _fields.push(new ReflectionField('bccRecipients','Field bccRecipients of class Email', new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               _fields.push(new ReflectionField('attachmentData','Field attachmentData of class Email', new ReflectionClass('Array<AttachmentData>', 'Array of AttachmentData', 'Array<AttachmentData>', null, null, Adaptive.getReflection()).setTypeComponent(AttachmentData.getReflection())));
               _fields.push(new ReflectionField('messageBody','Field messageBody of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('messageBodyMimeType','Field messageBodyMimeType of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('subject','Field subject of class Email', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of Email **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getToRecipients of Email **/
               var _params_getToRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getToRecipients','Email getToRecipients', _params_getToRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               /** Method setToRecipients of Email **/
               var _params_setToRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setToRecipients.push(new ReflectionParameter('toRecipients', 'Email setToRecipients toRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setToRecipients','Email setToRecipients', _params_setToRecipients, null));
               /** Method getCcRecipients of Email **/
               var _params_getCcRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getCcRecipients','Email getCcRecipients', _params_getCcRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               /** Method setCcRecipients of Email **/
               var _params_setCcRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCcRecipients.push(new ReflectionParameter('ccRecipients', 'Email setCcRecipients ccRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCcRecipients','Email setCcRecipients', _params_setCcRecipients, null));
               /** Method getBccRecipients of Email **/
               var _params_getBccRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getBccRecipients','Email getBccRecipients', _params_getBccRecipients, new ReflectionClass('Array<EmailAddress>', 'Array of EmailAddress', 'Array<EmailAddress>', null, null, Adaptive.getReflection()).setTypeComponent(EmailAddress.getReflection())));
               /** Method setBccRecipients of Email **/
               var _params_setBccRecipients: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setBccRecipients.push(new ReflectionParameter('bccRecipients', 'Email setBccRecipients bccRecipients', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setBccRecipients','Email setBccRecipients', _params_setBccRecipients, null));
               /** Method getAttachmentData of Email **/
               var _params_getAttachmentData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getAttachmentData','Email getAttachmentData', _params_getAttachmentData, new ReflectionClass('Array<AttachmentData>', 'Array of AttachmentData', 'Array<AttachmentData>', null, null, Adaptive.getReflection()).setTypeComponent(AttachmentData.getReflection())));
               /** Method setAttachmentData of Email **/
               var _params_setAttachmentData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setAttachmentData.push(new ReflectionParameter('attachmentData', 'Email setAttachmentData attachmentData', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setAttachmentData','Email setAttachmentData', _params_setAttachmentData, null));
               /** Method getMessageBody of Email **/
               var _params_getMessageBody: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMessageBody','Email getMessageBody', _params_getMessageBody, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setMessageBody of Email **/
               var _params_setMessageBody: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMessageBody.push(new ReflectionParameter('messageBody', 'Email setMessageBody messageBody', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMessageBody','Email setMessageBody', _params_setMessageBody, null));
               /** Method getMessageBodyMimeType of Email **/
               var _params_getMessageBodyMimeType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMessageBodyMimeType','Email getMessageBodyMimeType', _params_getMessageBodyMimeType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setMessageBodyMimeType of Email **/
               var _params_setMessageBodyMimeType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMessageBodyMimeType.push(new ReflectionParameter('messageBodyMimeType', 'Email setMessageBodyMimeType messageBodyMimeType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMessageBodyMimeType','Email setMessageBodyMimeType', _params_setMessageBodyMimeType, null));
               /** Method getSubject of Email **/
               var _params_getSubject: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSubject','Email getSubject', _params_getSubject, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setSubject of Email **/
               var _params_setSubject: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSubject.push(new ReflectionParameter('subject', 'Email setSubject subject', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSubject','Email setSubject', _params_setSubject, null));

               /** Class description of Email **/
               var clazz = new ReflectionClass('Email','Bean class Email', 'Email', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Database
      **/
     export class Database {

          /** Field Declarations **/
          compress : boolean;
          name : string;

          /** Initialization **/
          constructor(name: string, compress: boolean) {
               this.name = name;
               this.compress = compress;
          }

          /**
           * Method Declarations for Database
           */
          getName() : string {
               return this.name
          }

          isCompress() : boolean {
               return this.compress
          }

          setCompress(compress : boolean) : void {
               this.compress = compress
          }

          setName(name : string) : void {
               this.name = name
          }

          static getReflection() : ReflectionClass {

               /** Fields of Database **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class Database', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('compress','Field compress of class Database', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Methods of Database **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Database **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Database getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of Database **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Database setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Database setName', _params_setName, null));
               /** Method setCompress of Database **/
               var _params_setCompress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCompress.push(new ReflectionParameter('compress', 'Database setCompress compress', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCompress','Database setCompress', _params_setCompress, null));
               /** Method isCompress of Database **/
               var _params_isCompress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isCompress','Database isCompress', _params_isCompress, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));

               /** Class description of Database **/
               var clazz = new ReflectionClass('Database','Bean class Database', 'Database', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for AttachmentData
      **/
     export class AttachmentData {

          /** Field Declarations **/
          data : Array<number>;
          dataSize : number;
          fileName : string;
          mimeType : string;
          referenceUrl : string;

          /** Initialization **/
          constructor(data: Array<number>, dataSize: number, fileName: string, mimeType: string, referenceUrl: string) {
               this.data = data;
               this.dataSize = dataSize;
               this.fileName = fileName;
               this.mimeType = mimeType;
               this.referenceUrl = referenceUrl;
          }

          /**
           * Method Declarations for AttachmentData
           */
          getData() : Array<number> {
               return this.data
          }

          getDataSize() : number {
               return this.dataSize
          }

          getFileName() : string {
               return this.fileName
          }

          getMimeType() : string {
               return this.mimeType
          }

          getReferenceUrl() : string {
               return this.referenceUrl
          }

          setDataSize(dataSize : number) : void {
               this.dataSize = dataSize
          }

          setData(data : Array<number>) : void {
               this.data = data
          }

          setFileName(fileName : string) : void {
               this.fileName = fileName
          }

          setMimeType(mimeType : string) : void {
               this.mimeType = mimeType
          }

          setReferenceUrl(referenceUrl : string) : void {
               this.referenceUrl = referenceUrl
          }

          static getReflection() : ReflectionClass {

               /** Fields of AttachmentData **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('data','Field data of class AttachmentData', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               _fields.push(new ReflectionField('dataSize','Field dataSize of class AttachmentData', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('fileName','Field fileName of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('mimeType','Field mimeType of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('referenceUrl','Field referenceUrl of class AttachmentData', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of AttachmentData **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getFileName of AttachmentData **/
               var _params_getFileName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getFileName','AttachmentData getFileName', _params_getFileName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getData of AttachmentData **/
               var _params_getData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getData','AttachmentData getData', _params_getData, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               /** Method setData of AttachmentData **/
               var _params_setData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setData.push(new ReflectionParameter('data', 'AttachmentData setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setData','AttachmentData setData', _params_setData, null));
               /** Method getDataSize of AttachmentData **/
               var _params_getDataSize: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDataSize','AttachmentData getDataSize', _params_getDataSize, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setDataSize of AttachmentData **/
               var _params_setDataSize: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setDataSize.push(new ReflectionParameter('dataSize', 'AttachmentData setDataSize dataSize', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setDataSize','AttachmentData setDataSize', _params_setDataSize, null));
               /** Method setFileName of AttachmentData **/
               var _params_setFileName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setFileName.push(new ReflectionParameter('fileName', 'AttachmentData setFileName fileName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setFileName','AttachmentData setFileName', _params_setFileName, null));
               /** Method getMimeType of AttachmentData **/
               var _params_getMimeType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMimeType','AttachmentData getMimeType', _params_getMimeType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setMimeType of AttachmentData **/
               var _params_setMimeType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMimeType.push(new ReflectionParameter('mimeType', 'AttachmentData setMimeType mimeType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMimeType','AttachmentData setMimeType', _params_setMimeType, null));
               /** Method getReferenceUrl of AttachmentData **/
               var _params_getReferenceUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getReferenceUrl','AttachmentData getReferenceUrl', _params_getReferenceUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setReferenceUrl of AttachmentData **/
               var _params_setReferenceUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setReferenceUrl.push(new ReflectionParameter('referenceUrl', 'AttachmentData setReferenceUrl referenceUrl', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setReferenceUrl','AttachmentData setReferenceUrl', _params_setReferenceUrl, null));

               /** Class description of AttachmentData **/
               var clazz = new ReflectionClass('AttachmentData','Bean class AttachmentData', 'AttachmentData', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Acceleration
      **/
     export class Acceleration {

          /** Field Declarations **/
          timeStamp : number;
          x : number;
          y : number;
          z : number;

          /** Initialization **/
          constructor(x: number, y: number, z: number, timeStamp: number) {
               this.x = x;
               this.y = y;
               this.z = z;
               this.timeStamp = timeStamp;
          }

          /**
           * Method Declarations for Acceleration
           */
          getX() : number {
               return this.x
          }

          getY() : number {
               return this.y
          }

          getZ() : number {
               return this.z
          }

          setTimeStamp(timeStamp : number) : void {
               this.timeStamp = timeStamp
          }

          setX(x : number) : void {
               this.x = x
          }

          setY(y : number) : void {
               this.y = y
          }

          setZ(z : number) : void {
               this.z = z
          }

          static getReflection() : ReflectionClass {

               /** Fields of Acceleration **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('x','Field x of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('y','Field y of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('z','Field z of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('timeStamp','Field timeStamp of class Acceleration', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Methods of Acceleration **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getX of Acceleration **/
               var _params_getX: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getX','Acceleration getX', _params_getX, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setX of Acceleration **/
               var _params_setX: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setX.push(new ReflectionParameter('x', 'Acceleration setX x', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setX','Acceleration setX', _params_setX, null));
               /** Method getY of Acceleration **/
               var _params_getY: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getY','Acceleration getY', _params_getY, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setY of Acceleration **/
               var _params_setY: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setY.push(new ReflectionParameter('y', 'Acceleration setY y', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setY','Acceleration setY', _params_setY, null));
               /** Method getZ of Acceleration **/
               var _params_getZ: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getZ','Acceleration getZ', _params_getZ, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setZ of Acceleration **/
               var _params_setZ: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setZ.push(new ReflectionParameter('z', 'Acceleration setZ z', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setZ','Acceleration setZ', _params_setZ, null));
               /** Method setTimeStamp of Acceleration **/
               var _params_setTimeStamp: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setTimeStamp.push(new ReflectionParameter('timeStamp', 'Acceleration setTimeStamp timeStamp', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setTimeStamp','Acceleration setTimeStamp', _params_setTimeStamp, null));

               /** Class description of Acceleration **/
               var clazz = new ReflectionClass('Acceleration','Bean class Acceleration', 'Acceleration', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactTag
      **/
     export class ContactTag {

          /** Field Declarations **/
          dataValue : string;
          name : string;

          /** Initialization **/
          constructor(name: string, dataValue: string) {
               this.name = name;
               this.dataValue = dataValue;
          }

          /**
           * Method Declarations for ContactTag
           */
          getDataValue() : string {
               return this.dataValue
          }

          getName() : string {
               return this.name
          }

          setDataValue(dataValue : string) : void {
               this.dataValue = dataValue
          }

          setName(name : string) : void {
               this.name = name
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactTag **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class ContactTag', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('dataValue','Field dataValue of class ContactTag', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactTag **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of ContactTag **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','ContactTag getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of ContactTag **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'ContactTag setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','ContactTag setName', _params_setName, null));
               /** Method getDataValue of ContactTag **/
               var _params_getDataValue: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDataValue','ContactTag getDataValue', _params_getDataValue, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setDataValue of ContactTag **/
               var _params_setDataValue: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setDataValue.push(new ReflectionParameter('dataValue', 'ContactTag setDataValue dataValue', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setDataValue','ContactTag setDataValue', _params_setDataValue, null));

               /** Class description of ContactTag **/
               var clazz = new ReflectionClass('ContactTag','Bean class ContactTag', 'ContactTag', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Cookie
      **/
     export class Cookie {

          /** Field Declarations **/
          creation : number;
          data : string;
          domain : string;
          expiry : number;
          name : string;
          path : string;
          scheme : string;
          secure : boolean;

          /** Initialization **/
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

          /**
           * Method Declarations for Cookie
           */
          getCreation() : number {
               return this.creation
          }

          getData() : string {
               return this.data
          }

          getDomain() : string {
               return this.domain
          }

          getExpiry() : number {
               return this.expiry
          }

          getName() : string {
               return this.name
          }

          getPath() : string {
               return this.path
          }

          getScheme() : string {
               return this.scheme
          }

          isSecure() : boolean {
               return this.secure
          }

          setData(data : string) : void {
               this.data = data
          }

          setDomain(domain : string) : void {
               this.domain = domain
          }

          setExpiry(expiry : number) : void {
               this.expiry = expiry
          }

          setName(name : string) : void {
               this.name = name
          }

          setPath(path : string) : void {
               this.path = path
          }

          setScheme(scheme : string) : void {
               this.scheme = scheme
          }

          setSecure(secure : boolean) : void {
               this.secure = secure
          }

          static getReflection() : ReflectionClass {

               /** Fields of Cookie **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('data','Field data of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('domain','Field domain of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('path','Field path of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('scheme','Field scheme of class Cookie', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('secure','Field secure of class Cookie', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('expiry','Field expiry of class Cookie', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('creation','Field creation of class Cookie', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Methods of Cookie **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Cookie **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Cookie getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of Cookie **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Cookie setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Cookie setName', _params_setName, null));
               /** Method getPath of Cookie **/
               var _params_getPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPath','Cookie getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getScheme of Cookie **/
               var _params_getScheme: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getScheme','Cookie getScheme', _params_getScheme, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setPath of Cookie **/
               var _params_setPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPath.push(new ReflectionParameter('path', 'Cookie setPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPath','Cookie setPath', _params_setPath, null));
               /** Method setScheme of Cookie **/
               var _params_setScheme: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setScheme.push(new ReflectionParameter('scheme', 'Cookie setScheme scheme', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setScheme','Cookie setScheme', _params_setScheme, null));
               /** Method getData of Cookie **/
               var _params_getData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getData','Cookie getData', _params_getData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setData of Cookie **/
               var _params_setData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setData.push(new ReflectionParameter('data', 'Cookie setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setData','Cookie setData', _params_setData, null));
               /** Method getDomain of Cookie **/
               var _params_getDomain: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getDomain','Cookie getDomain', _params_getDomain, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setDomain of Cookie **/
               var _params_setDomain: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setDomain.push(new ReflectionParameter('domain', 'Cookie setDomain domain', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setDomain','Cookie setDomain', _params_setDomain, null));
               /** Method isSecure of Cookie **/
               var _params_isSecure: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isSecure','Cookie isSecure', _params_isSecure, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method setSecure of Cookie **/
               var _params_setSecure: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSecure.push(new ReflectionParameter('secure', 'Cookie setSecure secure', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSecure','Cookie setSecure', _params_setSecure, null));
               /** Method getExpiry of Cookie **/
               var _params_getExpiry: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getExpiry','Cookie getExpiry', _params_getExpiry, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setExpiry of Cookie **/
               var _params_setExpiry: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setExpiry.push(new ReflectionParameter('expiry', 'Cookie setExpiry expiry', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setExpiry','Cookie setExpiry', _params_setExpiry, null));
               /** Method getCreation of Cookie **/
               var _params_getCreation: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getCreation','Cookie getCreation', _params_getCreation, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Class description of Cookie **/
               var clazz = new ReflectionClass('Cookie','Bean class Cookie', 'Cookie', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactProfessionalInfo
      **/
     export class ContactProfessionalInfo {

          /** Field Declarations **/
          company : string;
          jobDescription : string;
          jobTitle : string;

          /** Initialization **/
          constructor(jobTitle: string, jobDescription: string, company: string) {
               this.jobTitle = jobTitle;
               this.jobDescription = jobDescription;
               this.company = company;
          }

          /**
           * Method Declarations for ContactProfessionalInfo
           */
          getCompany() : string {
               return this.company
          }

          getJobDescription() : string {
               return this.jobDescription
          }

          getJobTitle() : string {
               return this.jobTitle
          }

          setCompany(company : string) : void {
               this.company = company
          }

          setJobDescription(jobDescription : string) : void {
               this.jobDescription = jobDescription
          }

          setJobTitle(jobTitle : string) : void {
               this.jobTitle = jobTitle
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactProfessionalInfo **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('company','Field company of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('jobTitle','Field jobTitle of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('jobDescription','Field jobDescription of class ContactProfessionalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactProfessionalInfo **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getCompany of ContactProfessionalInfo **/
               var _params_getCompany: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getCompany','ContactProfessionalInfo getCompany', _params_getCompany, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setCompany of ContactProfessionalInfo **/
               var _params_setCompany: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCompany.push(new ReflectionParameter('company', 'ContactProfessionalInfo setCompany company', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCompany','ContactProfessionalInfo setCompany', _params_setCompany, null));
               /** Method getJobTitle of ContactProfessionalInfo **/
               var _params_getJobTitle: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getJobTitle','ContactProfessionalInfo getJobTitle', _params_getJobTitle, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setJobTitle of ContactProfessionalInfo **/
               var _params_setJobTitle: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setJobTitle.push(new ReflectionParameter('jobTitle', 'ContactProfessionalInfo setJobTitle jobTitle', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setJobTitle','ContactProfessionalInfo setJobTitle', _params_setJobTitle, null));
               /** Method getJobDescription of ContactProfessionalInfo **/
               var _params_getJobDescription: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getJobDescription','ContactProfessionalInfo getJobDescription', _params_getJobDescription, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setJobDescription of ContactProfessionalInfo **/
               var _params_setJobDescription: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setJobDescription.push(new ReflectionParameter('jobDescription', 'ContactProfessionalInfo setJobDescription jobDescription', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setJobDescription','ContactProfessionalInfo setJobDescription', _params_setJobDescription, null));

               /** Class description of ContactProfessionalInfo **/
               var clazz = new ReflectionClass('ContactProfessionalInfo','Bean class ContactProfessionalInfo', 'ContactProfessionalInfo', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ServiceRequest
      **/
     export class ServiceRequest {

          /** Field Declarations **/
          content : string;
          contentEncoding : string;
          contentLength : number;
          contentType : string;
          headers : Array<Header>;
          method : string;
          protocolVersion : ServiceRequestProtocolVersionEnum;
          rawContent : Array<number>;
          session : ISession;

          /** Initialization **/
          constructor(content: string, contentType: string, contentLength: number, rawContent: Array<number>, headers: Array<Header>, method: string, protocolVersion: ServiceRequestProtocolVersionEnum, session: ISession, contentEncoding: string) {
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
          getContent() : string {
               return this.content
          }

          getContentEncoding() : string {
               return this.contentEncoding
          }

          getContentLength() : number {
               return this.contentLength
          }

          getContentType() : string {
               return this.contentType
          }

          getHeaders() : Array<Header> {
               return this.headers
          }

          getMethod() : string {
               return this.method
          }

          getProtocolVersion() : ServiceRequestProtocolVersionEnum {
               return this.protocolVersion
          }

          getRawContent() : Array<number> {
               return this.rawContent
          }

          getSession() : ISession {
               return this.session
          }

          setContentEncoding(contentEncoding : string) : void {
               this.contentEncoding = contentEncoding
          }

          setContentLength(contentLength : number) : void {
               this.contentLength = contentLength
          }

          setContentType(contentType : string) : void {
               this.contentType = contentType
          }

          setContent(content : string) : void {
               this.content = content
          }

          setHeaders(headers : Array<Header>) : void {
               this.headers = headers
          }

          setMethod(method : string) : void {
               this.method = method
          }

          setProtocolVersion(protocolVersion : ServiceRequestProtocolVersionEnum) : void {
               this.protocolVersion = protocolVersion
          }

          setRawContent(rawContent : Array<number>) : void {
               this.rawContent = rawContent
          }

          setSession(session : ISession) : void {
               this.session = session
          }

          static getReflection() : ReflectionClass {

               /** Fields of ServiceRequest **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('content','Field content of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('contentType','Field contentType of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('contentLength','Field contentLength of class ServiceRequest', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('rawContent','Field rawContent of class ServiceRequest', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               _fields.push(new ReflectionField('headers','Field headers of class ServiceRequest', new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
               _fields.push(new ReflectionField('method','Field method of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('protocolVersion','Field protocolVersion of class ServiceRequest', ServiceRequestProtocolVersionEnum.getReflection()));
               _fields.push(new ReflectionField('session','Field session of class ServiceRequest', SessionBridge.getReflection()));
               _fields.push(new ReflectionField('contentEncoding','Field contentEncoding of class ServiceRequest', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ServiceRequest **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getMethod of ServiceRequest **/
               var _params_getMethod: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMethod','ServiceRequest getMethod', _params_getMethod, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getContent of ServiceRequest **/
               var _params_getContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContent','ServiceRequest getContent', _params_getContent, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setHeaders of ServiceRequest **/
               var _params_setHeaders: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setHeaders.push(new ReflectionParameter('headers', 'ServiceRequest setHeaders headers', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setHeaders','ServiceRequest setHeaders', _params_setHeaders, null));
               /** Method getSession of ServiceRequest **/
               var _params_getSession: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSession','ServiceRequest getSession', _params_getSession, SessionBridge.getReflection()));
               /** Method setSession of ServiceRequest **/
               var _params_setSession: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSession.push(new ReflectionParameter('session', 'ServiceRequest setSession session', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSession','ServiceRequest setSession', _params_setSession, null));
               /** Method setContentEncoding of ServiceRequest **/
               var _params_setContentEncoding: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentEncoding.push(new ReflectionParameter('contentEncoding', 'ServiceRequest setContentEncoding contentEncoding', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentEncoding','ServiceRequest setContentEncoding', _params_setContentEncoding, null));
               /** Method setContent of ServiceRequest **/
               var _params_setContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContent.push(new ReflectionParameter('content', 'ServiceRequest setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContent','ServiceRequest setContent', _params_setContent, null));
               /** Method getProtocolVersion of ServiceRequest **/
               var _params_getProtocolVersion: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getProtocolVersion','ServiceRequest getProtocolVersion', _params_getProtocolVersion, ServiceRequestProtocolVersionEnum.getReflection()));
               /** Method setProtocolVersion of ServiceRequest **/
               var _params_setProtocolVersion: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setProtocolVersion.push(new ReflectionParameter('protocolVersion', 'ServiceRequest setProtocolVersion protocolVersion', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setProtocolVersion','ServiceRequest setProtocolVersion', _params_setProtocolVersion, null));
               /** Method getRawContent of ServiceRequest **/
               var _params_getRawContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getRawContent','ServiceRequest getRawContent', _params_getRawContent, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               /** Method setRawContent of ServiceRequest **/
               var _params_setRawContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setRawContent.push(new ReflectionParameter('rawContent', 'ServiceRequest setRawContent rawContent', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setRawContent','ServiceRequest setRawContent', _params_setRawContent, null));
               /** Method getContentLength of ServiceRequest **/
               var _params_getContentLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentLength','ServiceRequest getContentLength', _params_getContentLength, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setMethod of ServiceRequest **/
               var _params_setMethod: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMethod.push(new ReflectionParameter('method', 'ServiceRequest setMethod method', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMethod','ServiceRequest setMethod', _params_setMethod, null));
               /** Method getContentType of ServiceRequest **/
               var _params_getContentType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentType','ServiceRequest getContentType', _params_getContentType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setContentType of ServiceRequest **/
               var _params_setContentType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentType.push(new ReflectionParameter('contentType', 'ServiceRequest setContentType contentType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentType','ServiceRequest setContentType', _params_setContentType, null));
               /** Method setContentLength of ServiceRequest **/
               var _params_setContentLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentLength.push(new ReflectionParameter('contentLength', 'ServiceRequest setContentLength contentLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentLength','ServiceRequest setContentLength', _params_setContentLength, null));
               /** Method getContentEncoding of ServiceRequest **/
               var _params_getContentEncoding: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentEncoding','ServiceRequest getContentEncoding', _params_getContentEncoding, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getHeaders of ServiceRequest **/
               var _params_getHeaders: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getHeaders','ServiceRequest getHeaders', _params_getHeaders, new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));

               /** Class description of ServiceRequest **/
               var clazz = new ReflectionClass('ServiceRequest','Bean class ServiceRequest', 'ServiceRequest', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ServiceRequest ProtocolVersion
      **/
     export class ServiceRequestProtocolVersionEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HTTP_PROTOCOL_VERSION_1_0 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_0");
          static HTTP_PROTOCOL_VERSION_1_1 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_1");
          static Unknown = new ServiceRequestProtocolVersionEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IService ProtocolVersion
          }
     }

     /**
      *   Class implementation for ContactAddress
      **/
     export class ContactAddress {

          /** Field Declarations **/
          address : string;
          type : ContactAddressAddressTypeEnum;

          /** Initialization **/
          constructor(address: string, type: ContactAddressAddressTypeEnum) {
               this.address = address;
               this.type = type;
          }

          /**
           * Method Declarations for ContactAddress
           */
          getAddress() : string {
               return this.address
          }

          getType() : ContactAddressAddressTypeEnum {
               return this.type
          }

          setAddress(address : string) : void {
               this.address = address
          }

          setType(type : ContactAddressAddressTypeEnum) : void {
               this.type = type
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactAddress **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('address','Field address of class ContactAddress', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('type','Field type of class ContactAddress', ContactAddressAddressTypeEnum.getReflection()));

               /** Methods of ContactAddress **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getAddress of ContactAddress **/
               var _params_getAddress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getAddress','ContactAddress getAddress', _params_getAddress, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getType of ContactAddress **/
               var _params_getType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getType','ContactAddress getType', _params_getType, ContactAddressAddressTypeEnum.getReflection()));
               /** Method setType of ContactAddress **/
               var _params_setType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setType.push(new ReflectionParameter('type', 'ContactAddress setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setType','ContactAddress setType', _params_setType, null));
               /** Method setAddress of ContactAddress **/
               var _params_setAddress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setAddress.push(new ReflectionParameter('address', 'ContactAddress setAddress address', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setAddress','ContactAddress setAddress', _params_setAddress, null));

               /** Class description of ContactAddress **/
               var clazz = new ReflectionClass('ContactAddress','Bean class ContactAddress', 'ContactAddress', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ContactAddress AddressType
      **/
     export class ContactAddressAddressTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Home = new ContactAddressAddressTypeEnum("Home");
          static Work = new ContactAddressAddressTypeEnum("Work");
          static Other = new ContactAddressAddressTypeEnum("Other");
          static Unknown = new ContactAddressAddressTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ContactAddress AddressType
          }
     }

     /**
      *   Class implementation for ContactEmail
      **/
     export class ContactEmail {

          /** Field Declarations **/
          email : string;
          primary : boolean;
          type : ContactEmailEmailTypeEnum;

          /** Initialization **/
          constructor(type: ContactEmailEmailTypeEnum, primary: boolean, email: string) {
               this.type = type;
               this.primary = primary;
               this.email = email;
          }

          /**
           * Method Declarations for ContactEmail
           */
          getEmail() : string {
               return this.email
          }

          getType() : ContactEmailEmailTypeEnum {
               return this.type
          }

          isPrimary() : boolean {
               return this.primary
          }

          setEmail(email : string) : void {
               this.email = email
          }

          setPrimary(primary : boolean) : void {
               this.primary = primary
          }

          setType(type : ContactEmailEmailTypeEnum) : void {
               this.type = type
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactEmail **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('type','Field type of class ContactEmail', ContactEmailEmailTypeEnum.getReflection()));
               _fields.push(new ReflectionField('primary','Field primary of class ContactEmail', new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('email','Field email of class ContactEmail', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactEmail **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getType of ContactEmail **/
               var _params_getType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getType','ContactEmail getType', _params_getType, ContactEmailEmailTypeEnum.getReflection()));
               /** Method setType of ContactEmail **/
               var _params_setType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setType.push(new ReflectionParameter('type', 'ContactEmail setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setType','ContactEmail setType', _params_setType, null));
               /** Method isPrimary of ContactEmail **/
               var _params_isPrimary: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('isPrimary','ContactEmail isPrimary', _params_isPrimary, new ReflectionClass('boolean', 'Primitive type boolean', 'boolean', null, null, Adaptive.getReflection())));
               /** Method setPrimary of ContactEmail **/
               var _params_setPrimary: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPrimary.push(new ReflectionParameter('primary', 'ContactEmail setPrimary primary', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPrimary','ContactEmail setPrimary', _params_setPrimary, null));
               /** Method getEmail of ContactEmail **/
               var _params_getEmail: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getEmail','ContactEmail getEmail', _params_getEmail, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setEmail of ContactEmail **/
               var _params_setEmail: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setEmail.push(new ReflectionParameter('email', 'ContactEmail setEmail email', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setEmail','ContactEmail setEmail', _params_setEmail, null));

               /** Class description of ContactEmail **/
               var clazz = new ReflectionClass('ContactEmail','Bean class ContactEmail', 'ContactEmail', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ContactEmail EmailType
      **/
     export class ContactEmailEmailTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Personal = new ContactEmailEmailTypeEnum("Personal");
          static Work = new ContactEmailEmailTypeEnum("Work");
          static Other = new ContactEmailEmailTypeEnum("Other");
          static Unknown = new ContactEmailEmailTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ContactEmail EmailType
          }
     }

     /**
      *   Class implementation for Endpoint
      **/
     export class Endpoint {

          /** Field Declarations **/
          host : string;
          path : string;
          port : number;
          proxy : string;
          scheme : string;

          /** Initialization **/
          constructor(host: string, path: string, port: number, proxy: string, scheme: string) {
               this.host = host;
               this.path = path;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }

          /**
           * Method Declarations for Endpoint
           */
          getHost() : string {
               return this.host
          }

          getPath() : string {
               return this.path
          }

          getPort() : number {
               return this.port
          }

          getProxy() : string {
               return this.proxy
          }

          getScheme() : string {
               return this.scheme
          }

          setHost(host : string) : void {
               this.host = host
          }

          setPath(path : string) : void {
               this.path = path
          }

          setPort(port : number) : void {
               this.port = port
          }

          setProxy(proxy : string) : void {
               this.proxy = proxy
          }

          setScheme(scheme : string) : void {
               this.scheme = scheme
          }

          static getReflection() : ReflectionClass {

               /** Fields of Endpoint **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('host','Field host of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('path','Field path of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('port','Field port of class Endpoint', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('proxy','Field proxy of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('scheme','Field scheme of class Endpoint', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of Endpoint **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getPath of Endpoint **/
               var _params_getPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPath','Endpoint getPath', _params_getPath, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getScheme of Endpoint **/
               var _params_getScheme: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getScheme','Endpoint getScheme', _params_getScheme, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getHost of Endpoint **/
               var _params_getHost: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getHost','Endpoint getHost', _params_getHost, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getPort of Endpoint **/
               var _params_getPort: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPort','Endpoint getPort', _params_getPort, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setHost of Endpoint **/
               var _params_setHost: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setHost.push(new ReflectionParameter('host', 'Endpoint setHost host', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setHost','Endpoint setHost', _params_setHost, null));
               /** Method setPath of Endpoint **/
               var _params_setPath: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPath.push(new ReflectionParameter('path', 'Endpoint setPath path', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPath','Endpoint setPath', _params_setPath, null));
               /** Method getProxy of Endpoint **/
               var _params_getProxy: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getProxy','Endpoint getProxy', _params_getProxy, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setProxy of Endpoint **/
               var _params_setProxy: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setProxy.push(new ReflectionParameter('proxy', 'Endpoint setProxy proxy', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setProxy','Endpoint setProxy', _params_setProxy, null));
               /** Method setScheme of Endpoint **/
               var _params_setScheme: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setScheme.push(new ReflectionParameter('scheme', 'Endpoint setScheme scheme', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setScheme','Endpoint setScheme', _params_setScheme, null));
               /** Method setPort of Endpoint **/
               var _params_setPort: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPort.push(new ReflectionParameter('port', 'Endpoint setPort port', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPort','Endpoint setPort', _params_setPort, null));

               /** Class description of Endpoint **/
               var clazz = new ReflectionClass('Endpoint','Bean class Endpoint', 'Endpoint', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Column
      **/
     export class Column {

          /** Field Declarations **/
          name : string;

          /** Initialization **/
          constructor(name: string) {
               this.name = name;
          }

          /**
           * Method Declarations for Column
           */
          getName() : string {
               return this.name
          }

          setName(name : string) : void {
               this.name = name
          }

          static getReflection() : ReflectionClass {

               /** Fields of Column **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class Column', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of Column **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Column **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Column getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of Column **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Column setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Column setName', _params_setName, null));

               /** Class description of Column **/
               var clazz = new ReflectionClass('Column','Bean class Column', 'Column', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Service
      **/
     export class Service {

          /** Field Declarations **/
          endpoint : Endpoint;
          method : ServiceServiceMethodEnum;
          name : string;
          type : ServiceServiceTypeEnum;

          /** Initialization **/
          constructor(endpoint: Endpoint, name: string, method: ServiceServiceMethodEnum, type: ServiceServiceTypeEnum) {
               this.endpoint = endpoint;
               this.name = name;
               this.method = method;
               this.type = type;
          }

          /**
           * Method Declarations for Service
           */
          getEndpoint() : Endpoint {
               return this.endpoint
          }

          getMethod() : ServiceServiceMethodEnum {
               return this.method
          }

          getName() : string {
               return this.name
          }

          getType() : ServiceServiceTypeEnum {
               return this.type
          }

          setEndpoint(endpoint : Endpoint) : void {
               this.endpoint = endpoint
          }

          setMethod(method : ServiceServiceMethodEnum) : void {
               this.method = method
          }

          setName(name : string) : void {
               this.name = name
          }

          setType(type : ServiceServiceTypeEnum) : void {
               this.type = type
          }

          static getReflection() : ReflectionClass {

               /** Fields of Service **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('endpoint','Field endpoint of class Service', Endpoint.getReflection()));
               _fields.push(new ReflectionField('name','Field name of class Service', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('method','Field method of class Service', ServiceServiceMethodEnum.getReflection()));
               _fields.push(new ReflectionField('type','Field type of class Service', ServiceServiceTypeEnum.getReflection()));

               /** Methods of Service **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Service **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Service getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getMethod of Service **/
               var _params_getMethod: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMethod','Service getMethod', _params_getMethod, ServiceServiceMethodEnum.getReflection()));
               /** Method setName of Service **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Service setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Service setName', _params_setName, null));
               /** Method getType of Service **/
               var _params_getType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getType','Service getType', _params_getType, ServiceServiceTypeEnum.getReflection()));
               /** Method setType of Service **/
               var _params_setType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setType.push(new ReflectionParameter('type', 'Service setType type', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setType','Service setType', _params_setType, null));
               /** Method getEndpoint of Service **/
               var _params_getEndpoint: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getEndpoint','Service getEndpoint', _params_getEndpoint, Endpoint.getReflection()));
               /** Method setEndpoint of Service **/
               var _params_setEndpoint: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setEndpoint.push(new ReflectionParameter('endpoint', 'Service setEndpoint endpoint', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setEndpoint','Service setEndpoint', _params_setEndpoint, null));
               /** Method setMethod of Service **/
               var _params_setMethod: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMethod.push(new ReflectionParameter('method', 'Service setMethod method', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMethod','Service setMethod', _params_setMethod, null));

               /** Class description of Service **/
               var clazz = new ReflectionClass('Service','Bean class Service', 'Service', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for Service ServiceMethod
      **/
     export class ServiceServiceMethodEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static POST = new ServiceServiceMethodEnum("POST");
          static GET = new ServiceServiceMethodEnum("GET");
          static Unknown = new ServiceServiceMethodEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IService ServiceMethod
          }
     }

     /**
      *  Enumerations for Service ServiceType
      **/
     export class ServiceServiceTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SERVICETYPE_AMF_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_AMF_SERIALIZATION");
          static SERVICETYPE_GWT_RPC = new ServiceServiceTypeEnum("SERVICETYPE_GWT_RPC");
          static SERVICETYPE_OCTET_BINARY = new ServiceServiceTypeEnum("SERVICETYPE_OCTET_BINARY");
          static SERVICETYPE_REMOTING_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_REMOTING_SERIALIZATION");
          static SERVICETYPE_REST_JSON = new ServiceServiceTypeEnum("SERVICETYPE_REST_JSON");
          static SERVICETYPE_REST_XML = new ServiceServiceTypeEnum("SERVICETYPE_REST_XML");
          static SERVICETYPE_SOAP_JSON = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_JSON");
          static SERVICETYPE_SOAP_XML = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_XML");
          static SERVICETYPE_XMLRPC_JSON = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_JSON");
          static SERVICETYPE_XMLRPC_XML = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_XML");
          static Unknown = new ServiceServiceTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> IService ServiceType
          }
     }

     /**
      *   Class implementation for Lifecycle
      **/
     export class Lifecycle {

          /** Field Declarations **/
          state : LifecycleStateEnum;

          /** Initialization **/
          constructor(state: LifecycleStateEnum) {
               this.state = state;
          }

          /**
           * Method Declarations for Lifecycle
           */
          getState() : LifecycleStateEnum {
               return this.state
          }

          setState(state : LifecycleStateEnum) : void {
               this.state = state
          }

          static getReflection() : ReflectionClass {

               /** Fields of Lifecycle **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('state','Field state of class Lifecycle', LifecycleStateEnum.getReflection()));

               /** Methods of Lifecycle **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getState of Lifecycle **/
               var _params_getState: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getState','Lifecycle getState', _params_getState, LifecycleStateEnum.getReflection()));
               /** Method setState of Lifecycle **/
               var _params_setState: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setState.push(new ReflectionParameter('state', 'Lifecycle setState state', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setState','Lifecycle setState', _params_setState, null));

               /** Class description of Lifecycle **/
               var clazz = new ReflectionClass('Lifecycle','Bean class Lifecycle', 'Lifecycle', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for Lifecycle State
      **/
     export class LifecycleStateEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Starting = new LifecycleStateEnum("Starting");
          static Started = new LifecycleStateEnum("Started");
          static Running = new LifecycleStateEnum("Running");
          static Paused = new LifecycleStateEnum("Paused");
          static PausedIdle = new LifecycleStateEnum("PausedIdle");
          static PausedRun = new LifecycleStateEnum("PausedRun");
          static Resuming = new LifecycleStateEnum("Resuming");
          static Stopping = new LifecycleStateEnum("Stopping");
          static Unknown = new LifecycleStateEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> Lifecycle State
          }
     }

     /**
      *   Class implementation for ContactWebsite
      **/
     export class ContactWebsite {

          /** Field Declarations **/
          url : string;

          /** Initialization **/
          constructor(url: string) {
               this.url = url;
          }

          /**
           * Method Declarations for ContactWebsite
           */
          getUrl() : string {
               return this.url
          }

          setUrl(url : string) : void {
               this.url = url
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactWebsite **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('url','Field url of class ContactWebsite', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactWebsite **/
               var _methods = new Array<ReflectionMethod>();
               /** Method setUrl of ContactWebsite **/
               var _params_setUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setUrl.push(new ReflectionParameter('url', 'ContactWebsite setUrl url', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setUrl','ContactWebsite setUrl', _params_setUrl, null));
               /** Method getUrl of ContactWebsite **/
               var _params_getUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getUrl','ContactWebsite getUrl', _params_getUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Class description of ContactWebsite **/
               var clazz = new ReflectionClass('ContactWebsite','Bean class ContactWebsite', 'ContactWebsite', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for SecureKeyPair
      **/
     export class SecureKeyPair {

          /** Field Declarations **/
          secureData : string;
          secureKey : string;

          /** Initialization **/
          constructor(secureKey: string, secureData: string) {
               this.secureKey = secureKey;
               this.secureData = secureData;
          }

          /**
           * Method Declarations for SecureKeyPair
           */
          getSecureData() : string {
               return this.secureData
          }

          getSecureKey() : string {
               return this.secureKey
          }

          setSecureData(secureData : string) : void {
               this.secureData = secureData
          }

          setSecureKey(secureKey : string) : void {
               this.secureKey = secureKey
          }

          static getReflection() : ReflectionClass {

               /** Fields of SecureKeyPair **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('secureKey','Field secureKey of class SecureKeyPair', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('secureData','Field secureData of class SecureKeyPair', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of SecureKeyPair **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getSecureKey of SecureKeyPair **/
               var _params_getSecureKey: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSecureKey','SecureKeyPair getSecureKey', _params_getSecureKey, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setSecureKey of SecureKeyPair **/
               var _params_setSecureKey: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSecureKey.push(new ReflectionParameter('secureKey', 'SecureKeyPair setSecureKey secureKey', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSecureKey','SecureKeyPair setSecureKey', _params_setSecureKey, null));
               /** Method getSecureData of SecureKeyPair **/
               var _params_getSecureData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSecureData','SecureKeyPair getSecureData', _params_getSecureData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setSecureData of SecureKeyPair **/
               var _params_setSecureData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSecureData.push(new ReflectionParameter('secureData', 'SecureKeyPair setSecureData secureData', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSecureData','SecureKeyPair setSecureData', _params_setSecureData, null));

               /** Class description of SecureKeyPair **/
               var clazz = new ReflectionClass('SecureKeyPair','Bean class SecureKeyPair', 'SecureKeyPair', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Row
      **/
     export class Row {

          /** Field Declarations **/
          values : Array<any>;

          /** Initialization **/
          constructor(values: Array<any>) {
               this.values = values;
          }

          /**
           * Method Declarations for Row
           */
          getValues() : Array<any> {
               return this.values
          }

          setValues(values : Array<any>) : void {
               this.values = values
          }

          static getReflection() : ReflectionClass {

               /** Fields of Row **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('values','Field values of class Row', new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));

               /** Methods of Row **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getValues of Row **/
               var _params_getValues: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getValues','Row getValues', _params_getValues, new ReflectionClass('Array<any>', 'Array of any', 'Array<any>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('any', 'Primitive type any', 'any', null, null, Adaptive.getReflection()))));
               /** Method setValues of Row **/
               var _params_setValues: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setValues.push(new ReflectionParameter('values', 'Row setValues values', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setValues','Row setValues', _params_setValues, null));

               /** Class description of Row **/
               var clazz = new ReflectionClass('Row','Bean class Row', 'Row', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactUid
      **/
     export class ContactUid {

          /** Field Declarations **/
          contactId : string;

          /** Initialization **/
          constructor(contactId: string) {
               this.contactId = contactId;
          }

          /**
           * Method Declarations for ContactUid
           */
          getContactId() : string {
               return this.contactId
          }

          setContactId(contactId : string) : void {
               this.contactId = contactId
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactUid **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('contactId','Field contactId of class ContactUid', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactUid **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getContactId of ContactUid **/
               var _params_getContactId: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactId','ContactUid getContactId', _params_getContactId, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setContactId of ContactUid **/
               var _params_setContactId: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactId.push(new ReflectionParameter('contactId', 'ContactUid setContactId contactId', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactId','ContactUid setContactId', _params_setContactId, null));

               /** Class description of ContactUid **/
               var clazz = new ReflectionClass('ContactUid','Bean class ContactUid', 'ContactUid', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactPersonalInfo
      **/
     export class ContactPersonalInfo {

          /** Field Declarations **/
          lastName : string;
          middleName : string;
          name : string;
          title : ContactPersonalInfoTitleEnum;

          /** Initialization **/
          constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitleEnum) {
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }

          /**
           * Method Declarations for ContactPersonalInfo
           */
          getLastName() : string {
               return this.lastName
          }

          getMiddleName() : string {
               return this.middleName
          }

          getName() : string {
               return this.name
          }

          getTitle() : ContactPersonalInfoTitleEnum {
               return this.title
          }

          setLastName(lastName : string) : void {
               this.lastName = lastName
          }

          setMiddleName(middleName : string) : void {
               this.middleName = middleName
          }

          setName(name : string) : void {
               this.name = name
          }

          setTitle(title : ContactPersonalInfoTitleEnum) : void {
               this.title = title
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactPersonalInfo **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('middleName','Field middleName of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('lastName','Field lastName of class ContactPersonalInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('title','Field title of class ContactPersonalInfo', ContactPersonalInfoTitleEnum.getReflection()));

               /** Methods of ContactPersonalInfo **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of ContactPersonalInfo **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','ContactPersonalInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of ContactPersonalInfo **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'ContactPersonalInfo setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','ContactPersonalInfo setName', _params_setName, null));
               /** Method setMiddleName of ContactPersonalInfo **/
               var _params_setMiddleName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setMiddleName.push(new ReflectionParameter('middleName', 'ContactPersonalInfo setMiddleName middleName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setMiddleName','ContactPersonalInfo setMiddleName', _params_setMiddleName, null));
               /** Method getMiddleName of ContactPersonalInfo **/
               var _params_getMiddleName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getMiddleName','ContactPersonalInfo getMiddleName', _params_getMiddleName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getTitle of ContactPersonalInfo **/
               var _params_getTitle: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getTitle','ContactPersonalInfo getTitle', _params_getTitle, ContactPersonalInfoTitleEnum.getReflection()));
               /** Method getLastName of ContactPersonalInfo **/
               var _params_getLastName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLastName','ContactPersonalInfo getLastName', _params_getLastName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setLastName of ContactPersonalInfo **/
               var _params_setLastName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setLastName.push(new ReflectionParameter('lastName', 'ContactPersonalInfo setLastName lastName', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setLastName','ContactPersonalInfo setLastName', _params_setLastName, null));
               /** Method setTitle of ContactPersonalInfo **/
               var _params_setTitle: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setTitle.push(new ReflectionParameter('title', 'ContactPersonalInfo setTitle title', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setTitle','ContactPersonalInfo setTitle', _params_setTitle, null));

               /** Class description of ContactPersonalInfo **/
               var clazz = new ReflectionClass('ContactPersonalInfo','Bean class ContactPersonalInfo', 'ContactPersonalInfo', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ContactPersonalInfo Title
      **/
     export class ContactPersonalInfoTitleEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Mr = new ContactPersonalInfoTitleEnum("Mr");
          static Mrs = new ContactPersonalInfoTitleEnum("Mrs");
          static Ms = new ContactPersonalInfoTitleEnum("Ms");
          static Dr = new ContactPersonalInfoTitleEnum("Dr");
          static Unknown = new ContactPersonalInfoTitleEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ContactPersonalInfo Title
          }
     }

     /**
      *   Class implementation for Header
      **/
     export class Header {

          /** Field Declarations **/
          data : string;
          name : string;

          /** Initialization **/
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

          /**
           * Method Declarations for Header
           */
          getData() : string {
               return this.data
          }

          getName() : string {
               return this.name
          }

          setData(data : string) : void {
               this.data = data
          }

          setName(name : string) : void {
               this.name = name
          }

          static getReflection() : ReflectionClass {

               /** Fields of Header **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class Header', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('data','Field data of class Header', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of Header **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Header **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Header getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of Header **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Header setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Header setName', _params_setName, null));
               /** Method getData of Header **/
               var _params_getData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getData','Header getData', _params_getData, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setData of Header **/
               var _params_setData: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setData.push(new ReflectionParameter('data', 'Header setData data', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setData','Header setData', _params_setData, null));

               /** Class description of Header **/
               var clazz = new ReflectionClass('Header','Bean class Header', 'Header', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Contact
      **/
     export class Contact extends ContactUid {

          /** Field Declarations **/
          contactAddresses : Array<ContactAddress>;
          contactEmails : Array<ContactEmail>;
          contactPhones : Array<ContactPhone>;
          contactSocials : Array<ContactSocial>;
          contactTags : Array<ContactTag>;
          contactWebsites : Array<ContactWebsite>;
          personalInfo : ContactPersonalInfo;
          professionalInfo : ContactProfessionalInfo;

          /** Initialization **/
          constructor(contactId: string) {
               super(contactId)
               this.contactId = contactId;
          }

          /**
           * Method Declarations for Contact
           */
          getContactAddresses() : Array<ContactAddress> {
               return this.contactAddresses
          }

          getContactEmails() : Array<ContactEmail> {
               return this.contactEmails
          }

          getContactPhones() : Array<ContactPhone> {
               return this.contactPhones
          }

          getContactSocials() : Array<ContactSocial> {
               return this.contactSocials
          }

          getContactTags() : Array<ContactTag> {
               return this.contactTags
          }

          getContactWebsites() : Array<ContactWebsite> {
               return this.contactWebsites
          }

          getPersonalInfo() : ContactPersonalInfo {
               return this.personalInfo
          }

          getProfessionalInfo() : ContactProfessionalInfo {
               return this.professionalInfo
          }

          setContactAddresses(contactAddresses : Array<ContactAddress>) : void {
               this.contactAddresses = contactAddresses
          }

          setContactEmails(contactEmails : Array<ContactEmail>) : void {
               this.contactEmails = contactEmails
          }

          setContactPhones(contactPhones : Array<ContactPhone>) : void {
               this.contactPhones = contactPhones
          }

          setContactSocials(contactSocials : Array<ContactSocial>) : void {
               this.contactSocials = contactSocials
          }

          setContactTags(contactTags : Array<ContactTag>) : void {
               this.contactTags = contactTags
          }

          setContactWebsites(contactWebsites : Array<ContactWebsite>) : void {
               this.contactWebsites = contactWebsites
          }

          setPersonalInfo(personalInfo : ContactPersonalInfo) : void {
               this.personalInfo = personalInfo
          }

          setProfessionalInfo(professionalInfo : ContactProfessionalInfo) : void {
               this.professionalInfo = professionalInfo
          }

          static getReflection() : ReflectionClass {

               /** Fields of Contact **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('personalInfo','Field personalInfo of class Contact', ContactPersonalInfo.getReflection()));
               _fields.push(new ReflectionField('professionalInfo','Field professionalInfo of class Contact', ContactProfessionalInfo.getReflection()));
               _fields.push(new ReflectionField('contactAddresses','Field contactAddresses of class Contact', new ReflectionClass('Array<ContactAddress>', 'Array of ContactAddress', 'Array<ContactAddress>', null, null, Adaptive.getReflection()).setTypeComponent(ContactAddress.getReflection())));
               _fields.push(new ReflectionField('contactPhones','Field contactPhones of class Contact', new ReflectionClass('Array<ContactPhone>', 'Array of ContactPhone', 'Array<ContactPhone>', null, null, Adaptive.getReflection()).setTypeComponent(ContactPhone.getReflection())));
               _fields.push(new ReflectionField('contactEmails','Field contactEmails of class Contact', new ReflectionClass('Array<ContactEmail>', 'Array of ContactEmail', 'Array<ContactEmail>', null, null, Adaptive.getReflection()).setTypeComponent(ContactEmail.getReflection())));
               _fields.push(new ReflectionField('contactWebsites','Field contactWebsites of class Contact', new ReflectionClass('Array<ContactWebsite>', 'Array of ContactWebsite', 'Array<ContactWebsite>', null, null, Adaptive.getReflection()).setTypeComponent(ContactWebsite.getReflection())));
               _fields.push(new ReflectionField('contactSocials','Field contactSocials of class Contact', new ReflectionClass('Array<ContactSocial>', 'Array of ContactSocial', 'Array<ContactSocial>', null, null, Adaptive.getReflection()).setTypeComponent(ContactSocial.getReflection())));
               _fields.push(new ReflectionField('contactTags','Field contactTags of class Contact', new ReflectionClass('Array<ContactTag>', 'Array of ContactTag', 'Array<ContactTag>', null, null, Adaptive.getReflection()).setTypeComponent(ContactTag.getReflection())));

               /** Methods of Contact **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getPersonalInfo of Contact **/
               var _params_getPersonalInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPersonalInfo','Contact getPersonalInfo', _params_getPersonalInfo, ContactPersonalInfo.getReflection()));
               /** Method setPersonalInfo of Contact **/
               var _params_setPersonalInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPersonalInfo.push(new ReflectionParameter('personalInfo', 'Contact setPersonalInfo personalInfo', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPersonalInfo','Contact setPersonalInfo', _params_setPersonalInfo, null));
               /** Method getProfessionalInfo of Contact **/
               var _params_getProfessionalInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getProfessionalInfo','Contact getProfessionalInfo', _params_getProfessionalInfo, ContactProfessionalInfo.getReflection()));
               /** Method setProfessionalInfo of Contact **/
               var _params_setProfessionalInfo: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setProfessionalInfo.push(new ReflectionParameter('professionalInfo', 'Contact setProfessionalInfo professionalInfo', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setProfessionalInfo','Contact setProfessionalInfo', _params_setProfessionalInfo, null));
               /** Method getContactAddresses of Contact **/
               var _params_getContactAddresses: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactAddresses','Contact getContactAddresses', _params_getContactAddresses, new ReflectionClass('Array<ContactAddress>', 'Array of ContactAddress', 'Array<ContactAddress>', null, null, Adaptive.getReflection()).setTypeComponent(ContactAddress.getReflection())));
               /** Method setContactAddresses of Contact **/
               var _params_setContactAddresses: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactAddresses.push(new ReflectionParameter('contactAddresses', 'Contact setContactAddresses contactAddresses', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactAddresses','Contact setContactAddresses', _params_setContactAddresses, null));
               /** Method getContactPhones of Contact **/
               var _params_getContactPhones: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactPhones','Contact getContactPhones', _params_getContactPhones, new ReflectionClass('Array<ContactPhone>', 'Array of ContactPhone', 'Array<ContactPhone>', null, null, Adaptive.getReflection()).setTypeComponent(ContactPhone.getReflection())));
               /** Method setContactPhones of Contact **/
               var _params_setContactPhones: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactPhones.push(new ReflectionParameter('contactPhones', 'Contact setContactPhones contactPhones', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactPhones','Contact setContactPhones', _params_setContactPhones, null));
               /** Method getContactEmails of Contact **/
               var _params_getContactEmails: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactEmails','Contact getContactEmails', _params_getContactEmails, new ReflectionClass('Array<ContactEmail>', 'Array of ContactEmail', 'Array<ContactEmail>', null, null, Adaptive.getReflection()).setTypeComponent(ContactEmail.getReflection())));
               /** Method setContactEmails of Contact **/
               var _params_setContactEmails: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactEmails.push(new ReflectionParameter('contactEmails', 'Contact setContactEmails contactEmails', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactEmails','Contact setContactEmails', _params_setContactEmails, null));
               /** Method getContactWebsites of Contact **/
               var _params_getContactWebsites: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactWebsites','Contact getContactWebsites', _params_getContactWebsites, new ReflectionClass('Array<ContactWebsite>', 'Array of ContactWebsite', 'Array<ContactWebsite>', null, null, Adaptive.getReflection()).setTypeComponent(ContactWebsite.getReflection())));
               /** Method setContactWebsites of Contact **/
               var _params_setContactWebsites: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactWebsites.push(new ReflectionParameter('contactWebsites', 'Contact setContactWebsites contactWebsites', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactWebsites','Contact setContactWebsites', _params_setContactWebsites, null));
               /** Method getContactSocials of Contact **/
               var _params_getContactSocials: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactSocials','Contact getContactSocials', _params_getContactSocials, new ReflectionClass('Array<ContactSocial>', 'Array of ContactSocial', 'Array<ContactSocial>', null, null, Adaptive.getReflection()).setTypeComponent(ContactSocial.getReflection())));
               /** Method setContactSocials of Contact **/
               var _params_setContactSocials: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactSocials.push(new ReflectionParameter('contactSocials', 'Contact setContactSocials contactSocials', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactSocials','Contact setContactSocials', _params_setContactSocials, null));
               /** Method getContactTags of Contact **/
               var _params_getContactTags: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContactTags','Contact getContactTags', _params_getContactTags, new ReflectionClass('Array<ContactTag>', 'Array of ContactTag', 'Array<ContactTag>', null, null, Adaptive.getReflection()).setTypeComponent(ContactTag.getReflection())));
               /** Method setContactTags of Contact **/
               var _params_setContactTags: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContactTags.push(new ReflectionParameter('contactTags', 'Contact setContactTags contactTags', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContactTags','Contact setContactTags', _params_setContactTags, null));

               /** Class description of Contact **/
               var clazz = new ReflectionClass('Contact','Bean class Contact', 'Contact', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactPhone
      **/
     export class ContactPhone {

          /** Field Declarations **/
          phone : string;
          phoneType : ContactPhonePhoneTypeEnum;

          /** Initialization **/
          constructor(phone: string, phoneType: ContactPhonePhoneTypeEnum) {
               this.phone = phone;
               this.phoneType = phoneType;
          }

          /**
           * Method Declarations for ContactPhone
           */
          getPhone() : string {
               return this.phone
          }

          getPhoneType() : ContactPhonePhoneTypeEnum {
               return this.phoneType
          }

          setPhoneType(phoneType : ContactPhonePhoneTypeEnum) : void {
               this.phoneType = phoneType
          }

          setPhone(phone : string) : void {
               this.phone = phone
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactPhone **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('phone','Field phone of class ContactPhone', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('phoneType','Field phoneType of class ContactPhone', ContactPhonePhoneTypeEnum.getReflection()));

               /** Methods of ContactPhone **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getPhone of ContactPhone **/
               var _params_getPhone: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPhone','ContactPhone getPhone', _params_getPhone, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setPhone of ContactPhone **/
               var _params_setPhone: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPhone.push(new ReflectionParameter('phone', 'ContactPhone setPhone phone', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPhone','ContactPhone setPhone', _params_setPhone, null));
               /** Method getPhoneType of ContactPhone **/
               var _params_getPhoneType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getPhoneType','ContactPhone getPhoneType', _params_getPhoneType, ContactPhonePhoneTypeEnum.getReflection()));
               /** Method setPhoneType of ContactPhone **/
               var _params_setPhoneType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setPhoneType.push(new ReflectionParameter('phoneType', 'ContactPhone setPhoneType phoneType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setPhoneType','ContactPhone setPhoneType', _params_setPhoneType, null));

               /** Class description of ContactPhone **/
               var clazz = new ReflectionClass('ContactPhone','Bean class ContactPhone', 'ContactPhone', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ContactPhone PhoneType
      **/
     export class ContactPhonePhoneTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Mobile = new ContactPhonePhoneTypeEnum("Mobile");
          static Work = new ContactPhonePhoneTypeEnum("Work");
          static Home = new ContactPhonePhoneTypeEnum("Home");
          static Main = new ContactPhonePhoneTypeEnum("Main");
          static HomeFax = new ContactPhonePhoneTypeEnum("HomeFax");
          static WorkFax = new ContactPhonePhoneTypeEnum("WorkFax");
          static Other = new ContactPhonePhoneTypeEnum("Other");
          static Unknown = new ContactPhonePhoneTypeEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ContactPhone PhoneType
          }
     }

     /**
      *   Class implementation for Geolocation
      **/
     export class Geolocation {

          /** Field Declarations **/
          altitude : number;
          latitude : number;
          longitude : number;
          xDoP : number;
          yDoP : number;

          /** Initialization **/
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number) {
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
          }

          /**
           * Method Declarations for Geolocation
           */
          getAltitude() : number {
               return this.altitude
          }

          getLatitude() : number {
               return this.latitude
          }

          getLongitude() : number {
               return this.longitude
          }

          getXDoP() : number {
               return this.xDoP
          }

          getYDoP() : number {
               return this.yDoP
          }

          setAltitude(altitude : number) : void {
               this.altitude = altitude
          }

          setLatitude(latitude : number) : void {
               this.latitude = latitude
          }

          setLongitude(longitude : number) : void {
               this.longitude = longitude
          }

          static getReflection() : ReflectionClass {

               /** Fields of Geolocation **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('latitude','Field latitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('longitude','Field longitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('altitude','Field altitude of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('xDoP','Field xDoP of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('yDoP','Field yDoP of class Geolocation', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));

               /** Methods of Geolocation **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getXDoP of Geolocation **/
               var _params_getXDoP: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getXDoP','Geolocation getXDoP', _params_getXDoP, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method getYDoP of Geolocation **/
               var _params_getYDoP: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getYDoP','Geolocation getYDoP', _params_getYDoP, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method getLatitude of Geolocation **/
               var _params_getLatitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLatitude','Geolocation getLatitude', _params_getLatitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setLatitude of Geolocation **/
               var _params_setLatitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setLatitude.push(new ReflectionParameter('latitude', 'Geolocation setLatitude latitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setLatitude','Geolocation setLatitude', _params_setLatitude, null));
               /** Method getLongitude of Geolocation **/
               var _params_getLongitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLongitude','Geolocation getLongitude', _params_getLongitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setLongitude of Geolocation **/
               var _params_setLongitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setLongitude.push(new ReflectionParameter('longitude', 'Geolocation setLongitude longitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setLongitude','Geolocation setLongitude', _params_setLongitude, null));
               /** Method getAltitude of Geolocation **/
               var _params_getAltitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getAltitude','Geolocation getAltitude', _params_getAltitude, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setAltitude of Geolocation **/
               var _params_setAltitude: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setAltitude.push(new ReflectionParameter('altitude', 'Geolocation setAltitude altitude', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setAltitude','Geolocation setAltitude', _params_setAltitude, null));

               /** Class description of Geolocation **/
               var clazz = new ReflectionClass('Geolocation','Bean class Geolocation', 'Geolocation', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Button
      **/
     export class Button {

          /** Field Declarations **/
          type : ButtonButtonEnum;

          /** Initialization **/
          constructor(type: ButtonButtonEnum) {
               this.type = type;
          }

          /**
           * Method Declarations for Button
           */
          getType() : ButtonButtonEnum {
               return this.type
          }

          static getReflection() : ReflectionClass {

               /** Fields of Button **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('type','Field type of class Button', ButtonButtonEnum.getReflection()));

               /** Methods of Button **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getType of Button **/
               var _params_getType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getType','Button getType', _params_getType, ButtonButtonEnum.getReflection()));

               /** Class description of Button **/
               var clazz = new ReflectionClass('Button','Bean class Button', 'Button', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for Button Button
      **/
     export class ButtonButtonEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ButtonButtonEnum("HomeButton");
          static BackButton = new ButtonButtonEnum("BackButton");
          static OptionButton = new ButtonButtonEnum("OptionButton");
          static Unknown = new ButtonButtonEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ICapabilities Button
          }
     }

     /**
      *   Class implementation for OSInfo
      **/
     export class OSInfo {

          /** Field Declarations **/
          name : string;
          vendor : string;
          version : string;

          /** Initialization **/
          constructor(name: string, version: string, vendor: string) {
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }

          /**
           * Method Declarations for OSInfo
           */
          getName() : string {
               return this.name
          }

          getVendor() : string {
               return this.vendor
          }

          getVersion() : string {
               return this.version
          }

          static getReflection() : ReflectionClass {

               /** Fields of OSInfo **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('version','Field version of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('vendor','Field vendor of class OSInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of OSInfo **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of OSInfo **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','OSInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getVendor of OSInfo **/
               var _params_getVendor: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getVendor','OSInfo getVendor', _params_getVendor, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getVersion of OSInfo **/
               var _params_getVersion: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getVersion','OSInfo getVersion', _params_getVersion, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Class description of OSInfo **/
               var clazz = new ReflectionClass('OSInfo','Bean class OSInfo', 'OSInfo', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for Locale
      **/
     export class Locale {

          /** Field Declarations **/
          country : string;
          language : string;
          description : string;

          /** Initialization **/
          constructor(language: string, country: string) {
               this.language = language;
               this.country = country;
               this.description = this.country+"_"+this.language;
          }

          /**
           * Method Declarations for Locale
           */
          getCountry() : string {
               return this.country
          }

          getLanguage() : string {
               return this.language
          }

          setCountry(country : string) : void {
               this.country = country
          }

          setLanguage(language : string) : void {
               this.language = language
          }

          toString() : string {
               return this.description
          }

          static getReflection() : ReflectionClass {

               /** Fields of Locale **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('country','Field country of class Locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('language','Field language of class Locale', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of Locale **/
               var _methods = new Array<ReflectionMethod>();
               /** Method toString of Locale **/
               var _params_toString: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('toString','Locale toString', _params_toString, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getLanguage of Locale **/
               var _params_getLanguage: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getLanguage','Locale getLanguage', _params_getLanguage, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getCountry of Locale **/
               var _params_getCountry: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getCountry','Locale getCountry', _params_getCountry, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setCountry of Locale **/
               var _params_setCountry: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setCountry.push(new ReflectionParameter('country', 'Locale setCountry country', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setCountry','Locale setCountry', _params_setCountry, null));
               /** Method setLanguage of Locale **/
               var _params_setLanguage: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setLanguage.push(new ReflectionParameter('language', 'Locale setLanguage language', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setLanguage','Locale setLanguage', _params_setLanguage, null));

               /** Class description of Locale **/
               var clazz = new ReflectionClass('Locale','Bean class Locale', 'Locale', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ContactSocial
      **/
     export class ContactSocial {

          /** Field Declarations **/
          profileUrl : string;
          socialNetwork : ContactSocialSocialNetworkEnum;

          /** Initialization **/
          constructor(socialNetwork: ContactSocialSocialNetworkEnum, profileUrl: string) {
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }

          /**
           * Method Declarations for ContactSocial
           */
          getProfileUrl() : string {
               return this.profileUrl
          }

          getSocialNetwork() : ContactSocialSocialNetworkEnum {
               return this.socialNetwork
          }

          setProfileUrl(profileUrl : string) : void {
               this.profileUrl = profileUrl
          }

          setSocialNetwork(socialNetwork : ContactSocialSocialNetworkEnum) : void {
               this.socialNetwork = socialNetwork
          }

          static getReflection() : ReflectionClass {

               /** Fields of ContactSocial **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('socialNetwork','Field socialNetwork of class ContactSocial', ContactSocialSocialNetworkEnum.getReflection()));
               _fields.push(new ReflectionField('profileUrl','Field profileUrl of class ContactSocial', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ContactSocial **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getSocialNetwork of ContactSocial **/
               var _params_getSocialNetwork: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSocialNetwork','ContactSocial getSocialNetwork', _params_getSocialNetwork, ContactSocialSocialNetworkEnum.getReflection()));
               /** Method setSocialNetwork of ContactSocial **/
               var _params_setSocialNetwork: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSocialNetwork.push(new ReflectionParameter('socialNetwork', 'ContactSocial setSocialNetwork socialNetwork', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSocialNetwork','ContactSocial setSocialNetwork', _params_setSocialNetwork, null));
               /** Method getProfileUrl of ContactSocial **/
               var _params_getProfileUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getProfileUrl','ContactSocial getProfileUrl', _params_getProfileUrl, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setProfileUrl of ContactSocial **/
               var _params_setProfileUrl: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setProfileUrl.push(new ReflectionParameter('profileUrl', 'ContactSocial setProfileUrl profileUrl', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setProfileUrl','ContactSocial setProfileUrl', _params_setProfileUrl, null));

               /** Class description of ContactSocial **/
               var clazz = new ReflectionClass('ContactSocial','Bean class ContactSocial', 'ContactSocial', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *  Enumerations for ContactSocial SocialNetwork
      **/
     export class ContactSocialSocialNetworkEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Twitter = new ContactSocialSocialNetworkEnum("Twitter");
          static Facebook = new ContactSocialSocialNetworkEnum("Facebook");
          static GooglePlus = new ContactSocialSocialNetworkEnum("GooglePlus");
          static LinkedIn = new ContactSocialSocialNetworkEnum("LinkedIn");
          static Flickr = new ContactSocialSocialNetworkEnum("Flickr");
          static Unknown = new ContactSocialSocialNetworkEnum("Unknown");

          static getReflection() : ReflectionClass {
               return null; // TODO: Implement reflection -> ContactSocial SocialNetwork
          }
     }

     /**
      *   Class implementation for Table
      **/
     export class Table {

          /** Field Declarations **/
          columnCount : number;
          columns : Array<Column>;
          name : string;
          rowCount : number;
          rows : Array<Row>;

          /** Initialization **/
          constructor(name: string) {
               this.name = name;
          }

          /**
           * Method Declarations for Table
           */
          getColumnCount() : number {
               return this.columnCount
          }

          getColumns() : Array<Column> {
               return this.columns
          }

          getName() : string {
               return this.name
          }

          getRowCount() : number {
               return this.rowCount
          }

          getRows() : Array<Row> {
               return this.rows
          }

          setColumnCount(columnCount : number) : void {
               this.columnCount = columnCount
          }

          setColumns(columns : Array<Column>) : void {
               this.columns = columns
          }

          setName(name : string) : void {
               this.name = name
          }

          setRowCount(rowCount : number) : void {
               this.rowCount = rowCount
          }

          setRows(rows : Array<Row>) : void {
               this.rows = rows
          }

          static getReflection() : ReflectionClass {

               /** Fields of Table **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class Table', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('columnCount','Field columnCount of class Table', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('rowCount','Field rowCount of class Table', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('columns','Field columns of class Table', new ReflectionClass('Array<Column>', 'Array of Column', 'Array<Column>', null, null, Adaptive.getReflection()).setTypeComponent(Column.getReflection())));
               _fields.push(new ReflectionField('rows','Field rows of class Table', new ReflectionClass('Array<Row>', 'Array of Row', 'Array<Row>', null, null, Adaptive.getReflection()).setTypeComponent(Row.getReflection())));

               /** Methods of Table **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of Table **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','Table getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setName of Table **/
               var _params_setName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setName.push(new ReflectionParameter('name', 'Table setName name', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setName','Table setName', _params_setName, null));
               /** Method setRows of Table **/
               var _params_setRows: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setRows.push(new ReflectionParameter('rows', 'Table setRows rows', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setRows','Table setRows', _params_setRows, null));
               /** Method getColumnCount of Table **/
               var _params_getColumnCount: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getColumnCount','Table getColumnCount', _params_getColumnCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setColumnCount of Table **/
               var _params_setColumnCount: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setColumnCount.push(new ReflectionParameter('columnCount', 'Table setColumnCount columnCount', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setColumnCount','Table setColumnCount', _params_setColumnCount, null));
               /** Method getRowCount of Table **/
               var _params_getRowCount: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getRowCount','Table getRowCount', _params_getRowCount, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method getRows of Table **/
               var _params_getRows: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getRows','Table getRows', _params_getRows, new ReflectionClass('Array<Row>', 'Array of Row', 'Array<Row>', null, null, Adaptive.getReflection()).setTypeComponent(Row.getReflection())));
               /** Method setRowCount of Table **/
               var _params_setRowCount: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setRowCount.push(new ReflectionParameter('rowCount', 'Table setRowCount rowCount', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setRowCount','Table setRowCount', _params_setRowCount, null));
               /** Method getColumns of Table **/
               var _params_getColumns: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getColumns','Table getColumns', _params_getColumns, new ReflectionClass('Array<Column>', 'Array of Column', 'Array<Column>', null, null, Adaptive.getReflection()).setTypeComponent(Column.getReflection())));
               /** Method setColumns of Table **/
               var _params_setColumns: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setColumns.push(new ReflectionParameter('columns', 'Table setColumns columns', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setColumns','Table setColumns', _params_setColumns, null));

               /** Class description of Table **/
               var clazz = new ReflectionClass('Table','Bean class Table', 'Table', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for ServiceResponse
      **/
     export class ServiceResponse {

          /** Field Declarations **/
          content : string;
          contentBinary : Array<number>;
          contentBinaryLength : number;
          contentEncoding : string;
          contentLength : string;
          contentType : string;
          headers : Array<Header>;
          session : ISession;

          /** Initialization **/
          constructor(content: string, contentType: string, contentLength: string, contentBinary: Array<number>, contentBinaryLength: number, headers: Array<Header>, session: ISession, contentEncoding: string) {
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
          getContent() : string {
               return this.content
          }

          getContentBinary() : Array<number> {
               return this.contentBinary
          }

          getContentBinaryLength() : number {
               return this.contentBinaryLength
          }

          getContentEncoding() : string {
               return this.contentEncoding
          }

          getContentLength() : string {
               return this.contentLength
          }

          getContentType() : string {
               return this.contentType
          }

          getHeaders() : Array<Header> {
               return this.headers
          }

          getSession() : ISession {
               return this.session
          }

          setContentBinaryLength(contentBinaryLength : number) : void {
               this.contentBinaryLength = contentBinaryLength
          }

          setContentBinary(contentBinary : Array<number>) : void {
               this.contentBinary = contentBinary
          }

          setContentEncoding(contentEncoding : string) : void {
               this.contentEncoding = contentEncoding
          }

          setContentLength(contentLength : string) : void {
               this.contentLength = contentLength
          }

          setContentType(contentType : string) : void {
               this.contentType = contentType
          }

          setContent(content : string) : void {
               this.content = content
          }

          setHeaders(headers : Array<Header>) : void {
               this.headers = headers
          }

          setSession(session : ISession) : void {
               this.session = session
          }

          static getReflection() : ReflectionClass {

               /** Fields of ServiceResponse **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('content','Field content of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('contentType','Field contentType of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('contentLength','Field contentLength of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('contentBinary','Field contentBinary of class ServiceResponse', new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               _fields.push(new ReflectionField('contentBinaryLength','Field contentBinaryLength of class ServiceResponse', new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('headers','Field headers of class ServiceResponse', new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));
               _fields.push(new ReflectionField('session','Field session of class ServiceResponse', SessionBridge.getReflection()));
               _fields.push(new ReflectionField('contentEncoding','Field contentEncoding of class ServiceResponse', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of ServiceResponse **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getContent of ServiceResponse **/
               var _params_getContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContent','ServiceResponse getContent', _params_getContent, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getContentBinary of ServiceResponse **/
               var _params_getContentBinary: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentBinary','ServiceResponse getContentBinary', _params_getContentBinary, new ReflectionClass('Array<number>', 'Array of number', 'Array<number>', null, null, Adaptive.getReflection()).setTypeComponent(new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection()))));
               /** Method setContentBinary of ServiceResponse **/
               var _params_setContentBinary: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentBinary.push(new ReflectionParameter('contentBinary', 'ServiceResponse setContentBinary contentBinary', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentBinary','ServiceResponse setContentBinary', _params_setContentBinary, null));
               /** Method getContentBinaryLength of ServiceResponse **/
               var _params_getContentBinaryLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentBinaryLength','ServiceResponse getContentBinaryLength', _params_getContentBinaryLength, new ReflectionClass('number', 'Primitive type number', 'number', null, null, Adaptive.getReflection())));
               /** Method setContentBinaryLength of ServiceResponse **/
               var _params_setContentBinaryLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentBinaryLength.push(new ReflectionParameter('contentBinaryLength', 'ServiceResponse setContentBinaryLength contentBinaryLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentBinaryLength','ServiceResponse setContentBinaryLength', _params_setContentBinaryLength, null));
               /** Method setHeaders of ServiceResponse **/
               var _params_setHeaders: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setHeaders.push(new ReflectionParameter('headers', 'ServiceResponse setHeaders headers', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setHeaders','ServiceResponse setHeaders', _params_setHeaders, null));
               /** Method getSession of ServiceResponse **/
               var _params_getSession: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getSession','ServiceResponse getSession', _params_getSession, SessionBridge.getReflection()));
               /** Method setSession of ServiceResponse **/
               var _params_setSession: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setSession.push(new ReflectionParameter('session', 'ServiceResponse setSession session', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setSession','ServiceResponse setSession', _params_setSession, null));
               /** Method setContentEncoding of ServiceResponse **/
               var _params_setContentEncoding: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentEncoding.push(new ReflectionParameter('contentEncoding', 'ServiceResponse setContentEncoding contentEncoding', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentEncoding','ServiceResponse setContentEncoding', _params_setContentEncoding, null));
               /** Method setContent of ServiceResponse **/
               var _params_setContent: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContent.push(new ReflectionParameter('content', 'ServiceResponse setContent content', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContent','ServiceResponse setContent', _params_setContent, null));
               /** Method getContentLength of ServiceResponse **/
               var _params_getContentLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentLength','ServiceResponse getContentLength', _params_getContentLength, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getContentType of ServiceResponse **/
               var _params_getContentType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentType','ServiceResponse getContentType', _params_getContentType, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setContentType of ServiceResponse **/
               var _params_setContentType: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentType.push(new ReflectionParameter('contentType', 'ServiceResponse setContentType contentType', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentType','ServiceResponse setContentType', _params_setContentType, null));
               /** Method setContentLength of ServiceResponse **/
               var _params_setContentLength: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setContentLength.push(new ReflectionParameter('contentLength', 'ServiceResponse setContentLength contentLength', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setContentLength','ServiceResponse setContentLength', _params_setContentLength, null));
               /** Method getContentEncoding of ServiceResponse **/
               var _params_getContentEncoding: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getContentEncoding','ServiceResponse getContentEncoding', _params_getContentEncoding, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getHeaders of ServiceResponse **/
               var _params_getHeaders: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getHeaders','ServiceResponse getHeaders', _params_getHeaders, new ReflectionClass('Array<Header>', 'Array of Header', 'Array<Header>', null, null, Adaptive.getReflection()).setTypeComponent(Header.getReflection())));

               /** Class description of ServiceResponse **/
               var clazz = new ReflectionClass('ServiceResponse','Bean class ServiceResponse', 'ServiceResponse', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for EmailAddress
      **/
     export class EmailAddress {

          /** Field Declarations **/
          address : string;

          /** Initialization **/
          constructor(address: string) {
               this.address = address;
          }

          /**
           * Method Declarations for EmailAddress
           */
          getAddress() : string {
               return this.address
          }

          setAddress(address : string) : void {
               this.address = address
          }

          static getReflection() : ReflectionClass {

               /** Fields of EmailAddress **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('address','Field address of class EmailAddress', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of EmailAddress **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getAddress of EmailAddress **/
               var _params_getAddress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getAddress','EmailAddress getAddress', _params_getAddress, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method setAddress of EmailAddress **/
               var _params_setAddress: Array<ReflectionParameter> = new Array<ReflectionParameter>();
               _params_setAddress.push(new ReflectionParameter('address', 'EmailAddress setAddress address', new ReflectionClass('void', 'Primitive type void', 'void', null, null, Adaptive.getReflection())));
                _methods.push(new ReflectionMethod('setAddress','EmailAddress setAddress', _params_setAddress, null));

               /** Class description of EmailAddress **/
               var clazz = new ReflectionClass('EmailAddress','Bean class EmailAddress', 'EmailAddress', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }

     /**
      *   Class implementation for DeviceInfo
      **/
     export class DeviceInfo {

          /** Field Declarations **/
          model : string;
          name : string;
          uuid : string;
          vendor : string;

          /** Initialization **/
          constructor(name: string, model: string, vendor: string, uuid: string) {
               this.name = name;
               this.model = model;
               this.vendor = vendor;
               this.uuid = uuid;
          }

          /**
           * Method Declarations for DeviceInfo
           */
          getModel() : string {
               return this.model
          }

          getName() : string {
               return this.name
          }

          getUuid() : string {
               return this.uuid
          }

          getVendor() : string {
               return this.vendor
          }

          static getReflection() : ReflectionClass {

               /** Fields of DeviceInfo **/
               var _fields = new Array<ReflectionField>();
               _fields.push(new ReflectionField('name','Field name of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('model','Field model of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('vendor','Field vendor of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               _fields.push(new ReflectionField('uuid','Field uuid of class DeviceInfo', new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Methods of DeviceInfo **/
               var _methods = new Array<ReflectionMethod>();
               /** Method getName of DeviceInfo **/
               var _params_getName: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getName','DeviceInfo getName', _params_getName, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getVendor of DeviceInfo **/
               var _params_getVendor: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getVendor','DeviceInfo getVendor', _params_getVendor, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getUuid of DeviceInfo **/
               var _params_getUuid: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getUuid','DeviceInfo getUuid', _params_getUuid, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));
               /** Method getModel of DeviceInfo **/
               var _params_getModel: Array<ReflectionParameter> = new Array<ReflectionParameter>();
                _methods.push(new ReflectionMethod('getModel','DeviceInfo getModel', _params_getModel, new ReflectionClass('string', 'Primitive type string', 'string', null, null, Adaptive.getReflection())));

               /** Class description of DeviceInfo **/
               var clazz = new ReflectionClass('DeviceInfo','Bean class DeviceInfo', 'DeviceInfo', _methods, _fields, Adaptive.getReflection());
               return clazz;
          }
     }


}
