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

     /**
      *   Interface definition for IAdaptiveRP
      **/
     export interface IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppResourceHandler
      **/
     export interface IAppResourceHandler extends IAdaptiveRP {

          /**
           * Method Declarations for IAppResourceHandler
           */
           getResource(resourcePath : string, callback : IAppResourceCallback)
     }

     /**
      *   Interface definition for IBaseSensor
      **/
     export interface IBaseSensor extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseUtil
      **/
     export interface IBaseUtil extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBasePIM
      **/
     export interface IBasePIM extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseMedia
      **/
     export interface IBaseMedia extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseUI
      **/
     export interface IBaseUI extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseApplication
      **/
     export interface IBaseApplication extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppContextWebview
      **/
     export interface IAppContextWebview extends IAdaptiveRP {

          /**
           * Method Declarations for IAppContextWebview
           */
           addWebview(webView : any)
           getWebviewPrimary() : any
           getWebviews() : Array<any>
           removeWebview(webView : any)
     }

     /**
      *   Interface definition for IAppServer
      **/
     export interface IAppServer extends IAdaptiveRP {

          /**
           * Method Declarations for IAppServer
           */
           getBaseURI() : string
           getHost() : string
           getPath() : string
           getPort() : number
           getScheme() : string
           pauseServer()
           resumeServer()
           startServer()
           stopServer()
     }

     /**
      *   Interface definition for IBaseSystem
      **/
     export interface IBaseSystem extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseSocial
      **/
     export interface IBaseSocial extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseData
      **/
     export interface IBaseData extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseNotification
      **/
     export interface IBaseNotification extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseCommerce
      **/
     export interface IBaseCommerce extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseReader
      **/
     export interface IBaseReader extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseListener
      **/
     export interface IBaseListener extends IAdaptiveRP {

          /**
           * Method Declarations for IBaseListener
           */
           getId() : number
           toString() : string
     }

     export class BaseListener implements IBaseListener {
          description: string;
          id: number;

          constructor(id: number) {
               this.id = id;
          }

          toString() : string {
               return "BaseListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IBaseSecurity
      **/
     export interface IBaseSecurity extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppServerManager
      **/
     export interface IAppServerManager extends IAdaptiveRP {

          /**
           * Method Declarations for IAppServerManager
           */
           addServerListener(listener : IAppServerListener)
           getServers() : Array<IAppServer>
           pauseServer(server : IAppServer)
           removeServerListener(listener : IAppServerListener)
           removeServerListeners()
           resumeServer(server : IAppServer)
           startServer()
           stopServers()
           stopServer(server : IAppServer)
     }

     /**
      *   Interface definition for IAppResource
      **/
     export interface IAppResource extends IAdaptiveRP {

          /**
           * Method Declarations for IAppResource
           */
           geType() : IAppResourcePayloadEnum
           getData() : Array<number>
           getDataPathLinked() : string
           getDataStored() : Array<number>
           getFormat() : IAppResourceFormatEnum
           getMd5() : string
           getMimetype() : string
           getName() : string
           getPath() : string
           getSize() : number
           getSizeStored() : number
           getTimestamp() : number
           getType() : IAppResourceTypeEnum
           getUuid() : string

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
     }

     /**
      *   Interface definition for IBaseCommunication
      **/
     export interface IBaseCommunication extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IAppContext
      **/
     export interface IAppContext extends IAdaptiveRP {

          /**
           * Method Declarations for IAppContext
           */
           getContext() : any
           getContextType() : IAppContextTypeEnum

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
     }

     /**
      *   Interface definition for IAppRegistry
      **/
     export interface IAppRegistry extends IAdaptiveRP {

          /**
           * Method Declarations for IAppRegistry
           */
           getApplicationAnalytics() : IAnalytics
           getApplicationGlobalization() : IGlobalization
           getApplicationLifecycle() : ILifecycle
           getApplicationManagement() : IManagement
           getApplicationPrinting() : IPrinting
           getApplicationSettings() : ISettings
           getApplicationUpdate() : IUpdate
           getPlatformContext() : IAppContext
           getPlatformContextWeb() : IAppContextWebview
           getSystemCapabilities() : ICapabilities
           getSystemDevice() : IDevice
           getSystemDisplay() : IDisplay
           getSystemOS() : IOS
           getSystemRuntime() : IRuntime
     }

     /**
      *   Interface definition for IBaseCallback
      **/
     export interface IBaseCallback extends IAdaptiveRP {

          /**
           * Method Declarations for IBaseCallback
           */
           getId() : number
           toString() : string
     }

     export class BaseCallback implements IBaseCallback {
          description: string;
          id: number;

          constructor(id: number) {
               this.id = id;
          }

          toString() : string {
               return "BaseCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IInternalStorage
      **/
     export interface IInternalStorage extends IBaseData {

     }

     /**
      *   Interface definition for ITelephony
      **/
     export interface ITelephony extends IBaseCommunication {

          /**
           * Method Declarations for ITelephony
           */
           call(number : string) : ITelephonyStatusEnum

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
     }

     /**
      *   Interface definition for ICompression
      **/
     export interface ICompression extends IBaseUtil {

     }

     /**
      *   Interface definition for INetworkReachabilityCallback
      **/
     export interface INetworkReachabilityCallback extends IBaseCallback {

          /**
           * Method Declarations for INetworkReachabilityCallback
           */
           onError(error : INetworkReachabilityCallbackErrorEnum)
           onResult(result : string)
           onWarning(result : string, warning : INetworkReachabilityCallbackWarningEnum)

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
     }

     export class NetworkReachabilityCallback implements INetworkReachabilityCallback {
          description: string;
          id: number;
          onResultFunction : (result: string) => Function;
          onErrorFunction : (error: INetworkReachabilityCallbackErrorEnum) => Function;
          onWarningFunction : (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (result: string) => Function, onErrorFunction : (error: INetworkReachabilityCallbackErrorEnum) => Function, onWarningFunction : (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(result: string) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The NetworkReachabilityCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(result);
               }
          }
          onError(error: INetworkReachabilityCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The NetworkReachabilityCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(result: string, warning: INetworkReachabilityCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The NetworkReachabilityCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(result, warning);
               }
          }
          toString() : string {
               return "NetworkReachabilityCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IProximity
      **/
     export interface IProximity extends IBaseSensor {

     }

     /**
      *   Interface definition for IManagement
      **/
     export interface IManagement extends IBaseApplication {

     }

     /**
      *   Interface definition for IPrinting
      **/
     export interface IPrinting extends IBaseApplication {

     }

     /**
      *   Interface definition for IAnalytics
      **/
     export interface IAnalytics extends IBaseApplication {

     }

     /**
      *   Interface definition for IAds
      **/
     export interface IAds extends IBaseCommerce {

     }

     /**
      *   Interface definition for IConcurrent
      **/
     export interface IConcurrent extends IBaseUtil {

     }

     /**
      *   Interface definition for IFileSystem
      **/
     export interface IFileSystem extends IBaseData {

          /**
           * Method Declarations for IFileSystem
           */
           create(name : string, callback : IFileResultCallback)
           create(path : IFilePath, name : string, callback : IFileResultCallback)
           create(path : string, name : string, callback : IFileResultCallback)
           getApplicationCacheFolder() : IFilePath
           getApplicationDocumentsFolder() : IFilePath
           getApplicationFolder() : IFilePath
           getPath(file : IFile) : string
           getPath(path : IFilePath) : string
           getSeparator() : string
           isSameFile(source : IFile, dest : IFile) : boolean
           isSamePath(source : IFilePath, dest : IFilePath) : boolean
           toPath(path : IFile) : IFilePath
     }

     /**
      *   Interface definition for IServiceResultCallback
      **/
     export interface IServiceResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IServiceResultCallback
           */
           onError(error : IServiceResultCallbackErrorEnum)
           onResult(response : ServiceResponse)
           onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarningEnum)

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
     }

     export class ServiceResultCallback implements IServiceResultCallback {
          description: string;
          id: number;
          onResultFunction : (response: ServiceResponse) => Function;
          onErrorFunction : (error: IServiceResultCallbackErrorEnum) => Function;
          onWarningFunction : (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (response: ServiceResponse) => Function, onErrorFunction : (error: IServiceResultCallbackErrorEnum) => Function, onWarningFunction : (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(response: ServiceResponse) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The ServiceResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(response);
               }
          }
          onError(error: IServiceResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The ServiceResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The ServiceResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(response, warning);
               }
          }
          toString() : string {
               return "ServiceResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IDesktop
      **/
     export interface IDesktop extends IBaseUI {

     }

     /**
      *   Interface definition for INetworkInfo
      **/
     export interface INetworkInfo extends IBaseCommunication {

     }

     /**
      *   Interface definition for IGooglePlus
      **/
     export interface IGooglePlus extends IBaseSocial {

     }

     /**
      *   Interface definition for ICloud
      **/
     export interface ICloud extends IBaseData {

     }

     /**
      *   Interface definition for ISettings
      **/
     export interface ISettings extends IBaseApplication {

     }

     /**
      *   Interface definition for IBrowser
      **/
     export interface IBrowser extends IBaseUI {

          /**
           * Method Declarations for IBrowser
           */
           openBrowser(url : string, title : string, buttonText : string) : boolean
     }

     /**
      *   Interface definition for IRSS
      **/
     export interface IRSS extends IBaseSocial {

     }

     /**
      *   Interface definition for IGeolocationListener
      **/
     export interface IGeolocationListener extends IBaseListener {

          /**
           * Method Declarations for IGeolocationListener
           */
           onError(error : IGeolocationListenerErrorEnum)
           onResult(geolocation : Geolocation)
           onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarningEnum)

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
     }

     export class GeolocationListener implements IGeolocationListener {
          description: string;
          id: number;
          onResultFunction : (geolocation: Geolocation) => Function;
          onErrorFunction : (error: IGeolocationListenerErrorEnum) => Function;
          onWarningFunction : (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function;

          constructor(id: number, onResultFunction : (geolocation: Geolocation) => Function, onErrorFunction : (error: IGeolocationListenerErrorEnum) => Function, onWarningFunction : (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(geolocation: Geolocation) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The GeolocationListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(geolocation);
               }
          }
          onError(error: IGeolocationListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The GeolocationListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The GeolocationListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(geolocation, warning);
               }
          }
          toString() : string {
               return "GeolocationListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IContactResultCallback
      **/
     export interface IContactResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IContactResultCallback
           */
           onError(error : IContactResultCallbackErrorEnum)
           onResult(contacts : Array<Contact>)
           onWarning(contacts : Array<Contact>, warning : IContactResultCallbackWarningEnum)

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
     }

     export class ContactResultCallback implements IContactResultCallback {
          description: string;
          id: number;
          onResultFunction : (contacts: Array<Contact>) => Function;
          onErrorFunction : (error: IContactResultCallbackErrorEnum) => Function;
          onWarningFunction : (contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (contacts: Array<Contact>) => Function, onErrorFunction : (error: IContactResultCallbackErrorEnum) => Function, onWarningFunction : (contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(contacts: Array<Contact>) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The ContactResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(contacts);
               }
          }
          onError(error: IContactResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The ContactResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(contacts: Array<Contact>, warning: IContactResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The ContactResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(contacts, warning);
               }
          }
          toString() : string {
               return "ContactResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for INotificationLocal
      **/
     export interface INotificationLocal extends IBaseNotification {

     }

     /**
      *   Interface definition for IAudio
      **/
     export interface IAudio extends IBaseMedia {

     }

     /**
      *   Interface definition for IDatabaseResultCallback
      **/
     export interface IDatabaseResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IDatabaseResultCallback
           */
           onError(error : IDatabaseResultCallbackErrorEnum)
           onResult(database : Database)
           onWarning(database : Database, warning : IDatabaseResultCallbackWarningEnum)

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
     }

     export class DatabaseResultCallback implements IDatabaseResultCallback {
          description: string;
          id: number;
          onResultFunction : (database: Database) => Function;
          onErrorFunction : (error: IDatabaseResultCallbackErrorEnum) => Function;
          onWarningFunction : (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (database: Database) => Function, onErrorFunction : (error: IDatabaseResultCallbackErrorEnum) => Function, onWarningFunction : (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(database: Database) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The DatabaseResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(database);
               }
          }
          onError(error: IDatabaseResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The DatabaseResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(database: Database, warning: IDatabaseResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The DatabaseResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(database, warning);
               }
          }
          toString() : string {
               return "DatabaseResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for ICapabilities
      **/
     export interface ICapabilities extends IBaseSystem {

          /**
           * Method Declarations for ICapabilities
           */
           hasButtonSupport(type : ICapabilitiesButtonEnum) : boolean
           hasCommunicationSupport(type : ICapabilitiesCommunicationEnum) : boolean
           hasDataSupport(type : ICapabilitiesDataEnum) : boolean
           hasMediaSupport(type : ICapabilitiesMediaEnum) : boolean
           hasNetSupport(type : ICapabilitiesNetEnum) : boolean
           hasNotificationSupport(type : ICapabilitiesNotificationEnum) : boolean
           hasSensorSupport(type : ICapabilitiesSensorEnum) : boolean

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
     }

     /**
      *   Interface definition for IAlarm
      **/
     export interface IAlarm extends IBaseNotification {

     }

     /**
      *   Interface definition for IAccelerometer
      **/
     export interface IAccelerometer extends IBaseSensor {

          /**
           * Method Declarations for IAccelerometer
           */
           addAccelerationListener(listener : IAccelerationListener)
           removeAccelerationListener(listener : IAccelerationListener)
           removeAccelerationListeners()
     }

     /**
      *   Interface definition for IService
      **/
     export interface IService extends IBaseCommunication {

          /**
           * Method Declarations for IService
           */
           getService(serviceName : string) : Service
           invokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback)
           isRegistered(serviceName : string) : boolean
           isRegistered(service : Service) : boolean
           registerService(service : Service)
           unregisterServices()
           unregisterService(service : Service)
     }

     /**
      *   Interface definition for ILifecycle
      **/
     export interface ILifecycle extends IBaseApplication {

          /**
           * Method Declarations for ILifecycle
           */
           addLifecycleListener(listener : ILifecycleListener)
           isBackground() : boolean
           removeLifecycleListener(listener : ILifecycleListener)
           removeLifecycleListeners()
     }

     /**
      *   Interface definition for IXML
      **/
     export interface IXML extends IBaseData {

     }

     /**
      *   Interface definition for IAppServerListener
      **/
     export interface IAppServerListener extends IBaseListener {

          /**
           * Method Declarations for IAppServerListener
           */
           onPaused(server : IAppServer)
           onPausing(server : IAppServer)
           onResumed(server : IAppServer)
           onResuming(server : IAppServer)
           onStart(server : IAppServer)
           onStopped(server : IAppServer)
           onStopping(server : IAppServer)
     }

     export class AppServerListener implements IAppServerListener {
          description: string;
          id: number;
          onPausedFunction : (server: IAppServer) => Function;
          onStartFunction : (server: IAppServer) => Function;
          onResumingFunction : (server: IAppServer) => Function;
          onResumedFunction : (server: IAppServer) => Function;
          onStoppingFunction : (server: IAppServer) => Function;
          onStoppedFunction : (server: IAppServer) => Function;
          onPausingFunction : (server: IAppServer) => Function;

          constructor(id: number, onPausedFunction : (server: IAppServer) => Function, onStartFunction : (server: IAppServer) => Function, onResumingFunction : (server: IAppServer) => Function, onResumedFunction : (server: IAppServer) => Function, onStoppingFunction : (server: IAppServer) => Function, onStoppedFunction : (server: IAppServer) => Function, onPausingFunction : (server: IAppServer) => Function) {
               this.id = id;
               this.onPausedFunction = onPausedFunction;
               this.onStartFunction = onStartFunction;
               this.onResumingFunction = onResumingFunction;
               this.onResumedFunction = onResumedFunction;
               this.onStoppingFunction = onStoppingFunction;
               this.onStoppedFunction = onStoppedFunction;
               this.onPausingFunction = onPausingFunction;
          }

          onPaused(server: IAppServer) : void {
               if (typeof this.onPausedFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onPausedFunction.");
               } else {
                    this.onPausedFunction(server);
               }
          }
          onStart(server: IAppServer) : void {
               if (typeof this.onStartFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onStartFunction.");
               } else {
                    this.onStartFunction(server);
               }
          }
          onResuming(server: IAppServer) : void {
               if (typeof this.onResumingFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onResumingFunction.");
               } else {
                    this.onResumingFunction(server);
               }
          }
          onResumed(server: IAppServer) : void {
               if (typeof this.onResumedFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onResumedFunction.");
               } else {
                    this.onResumedFunction(server);
               }
          }
          onStopping(server: IAppServer) : void {
               if (typeof this.onStoppingFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onStoppingFunction.");
               } else {
                    this.onStoppingFunction(server);
               }
          }
          onStopped(server: IAppServer) : void {
               if (typeof this.onStoppedFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onStoppedFunction.");
               } else {
                    this.onStoppedFunction(server);
               }
          }
          onPausing(server: IAppServer) : void {
               if (typeof this.onPausingFunction === 'undefined') {
                    console.log("WARNING: The AppServerListener does not define the onPausingFunction.");
               } else {
                    this.onPausingFunction(server);
               }
          }
          toString() : string {
               return "AppServerListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IMessaging
      **/
     export interface IMessaging extends IBasePIM {

          /**
           * Method Declarations for IMessaging
           */
           sendSMS(number : string, text : string, callback : IMessagingCallback)
     }

     /**
      *   Interface definition for IUpdate
      **/
     export interface IUpdate extends IBaseApplication {

     }

     /**
      *   Interface definition for ISocket
      **/
     export interface ISocket extends IBaseCommunication {

     }

     /**
      *   Interface definition for INetworkNaming
      **/
     export interface INetworkNaming extends IBaseCommunication {

     }

     /**
      *   Interface definition for ILifecycleListener
      **/
     export interface ILifecycleListener extends IBaseListener {

          /**
           * Method Declarations for ILifecycleListener
           */
           onError(error : ILifecycleListenerErrorEnum)
           onResult(lifecycle : Lifecycle)
           onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarningEnum)

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
     }

     export class LifecycleListener implements ILifecycleListener {
          description: string;
          id: number;
          onResultFunction : (lifecycle: Lifecycle) => Function;
          onErrorFunction : (error: ILifecycleListenerErrorEnum) => Function;
          onWarningFunction : (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function;

          constructor(id: number, onResultFunction : (lifecycle: Lifecycle) => Function, onErrorFunction : (error: ILifecycleListenerErrorEnum) => Function, onWarningFunction : (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(lifecycle: Lifecycle) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The LifecycleListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(lifecycle);
               }
          }
          onError(error: ILifecycleListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The LifecycleListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The LifecycleListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(lifecycle, warning);
               }
          }
          toString() : string {
               return "LifecycleListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IGeolocation
      **/
     export interface IGeolocation extends IBaseSensor {

          /**
           * Method Declarations for IGeolocation
           */
           addGeolocationListener(listener : IGeolocationListener)
           removeGeolocationListener(listener : IGeolocationListener)
           removeGeolocationListeners()
     }

     /**
      *   Interface definition for INotification
      **/
     export interface INotification extends IBaseNotification {

     }

     /**
      *   Interface definition for IFacebook
      **/
     export interface IFacebook extends IBaseSocial {

     }

     /**
      *   Interface definition for IContactPhotoResultCallback
      **/
     export interface IContactPhotoResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IContactPhotoResultCallback
           */
           onError(error : IContactPhotoResultCallbackErrorEnum)
           onResult(contactPhoto : Array<number>)
           onWarning(contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarningEnum)

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
     }

     export class ContactPhotoResultCallback implements IContactPhotoResultCallback {
          description: string;
          id: number;
          onResultFunction : (contactPhoto: Array<number>) => Function;
          onErrorFunction : (error: IContactPhotoResultCallbackErrorEnum) => Function;
          onWarningFunction : (contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (contactPhoto: Array<number>) => Function, onErrorFunction : (error: IContactPhotoResultCallbackErrorEnum) => Function, onWarningFunction : (contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(contactPhoto: Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The ContactPhotoResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(contactPhoto);
               }
          }
          onError(error: IContactPhotoResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The ContactPhotoResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(contactPhoto: Array<number>, warning: IContactPhotoResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The ContactPhotoResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(contactPhoto, warning);
               }
          }
          toString() : string {
               return "ContactPhotoResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for ISecurity
      **/
     export interface ISecurity extends IBaseSecurity {

          /**
           * Method Declarations for ISecurity
           */
           deleteSecureKeyValuePairs(keys : Array<String>, publicAccessName : string, callback : ISecureKVResultCallback)
           getSecureKeyValuePairs(keys : Array<String>, publicAccessName : string, callback : ISecureKVResultCallback)
           isDeviceModified() : boolean
           setSecureKeyValuePairs(keyValues : Array<SecureKeyPair>, publicAccessName : string, callback : ISecureKVResultCallback)
     }

     /**
      *   Interface definition for IDatabase
      **/
     export interface IDatabase extends IBaseData {

          /**
           * Method Declarations for IDatabase
           */
           createDatabase(database : Database, callback : IDatabaseResultCallback)
           createTable(database : Database, table : Table, callback : ITableResultCallback)
           deleteDatabase(database : Database, callback : IDatabaseResultCallback)
           deleteTable(database : Database, table : Table, callback : ITableResultCallback)
           executeSqlQuery(database : Database, query : string, replacements : Array<String>, callback : ITableResultCallback)
           executeSqlStatement(database : Database, statement : string, replacements : Array<String>, callback : ITableResultCallback)
           executeSqlTransactions(database : Database, statements : Array<String>, rollbackFlag : boolean, callback : ITableResultCallback)
           existsDatabase(database : Database) : boolean
           existsTable(database : Database, table : Table) : boolean
     }

     /**
      *   Interface definition for INFC
      **/
     export interface INFC extends IBaseReader {

     }

     /**
      *   Interface definition for IBluetooth
      **/
     export interface IBluetooth extends IBaseCommunication {

     }

     /**
      *   Interface definition for ICrypto
      **/
     export interface ICrypto extends IBaseUtil {

     }

     /**
      *   Interface definition for INetworkStatus
      **/
     export interface INetworkStatus extends IBaseCommunication {

     }

     /**
      *   Interface definition for IWallet
      **/
     export interface IWallet extends IBaseCommerce {

     }

     /**
      *   Interface definition for IAccelerationListener
      **/
     export interface IAccelerationListener extends IBaseListener {

          /**
           * Method Declarations for IAccelerationListener
           */
           onError(error : IAccelerationListenerErrorEnum)
           onResult(acceleration : Acceleration)
           onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarningEnum)

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
     }

     export class AccelerationListener implements IAccelerationListener {
          description: string;
          id: number;
          onResultFunction : (acceleration: Acceleration) => Function;
          onErrorFunction : (error: IAccelerationListenerErrorEnum) => Function;
          onWarningFunction : (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function;

          constructor(id: number, onResultFunction : (acceleration: Acceleration) => Function, onErrorFunction : (error: IAccelerationListenerErrorEnum) => Function, onWarningFunction : (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(acceleration: Acceleration) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The AccelerationListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(acceleration);
               }
          }
          onError(error: IAccelerationListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The AccelerationListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The AccelerationListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(acceleration, warning);
               }
          }
          toString() : string {
               return "AccelerationListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for INetworkReachability
      **/
     export interface INetworkReachability extends IBaseCommunication {

          /**
           * Method Declarations for INetworkReachability
           */
           isNetworkReachable(host : string, callback : INetworkReachabilityCallback)
           isNetworkServiceReachable(url : string, callback : INetworkReachabilityCallback)
     }

     /**
      *   Interface definition for ITimer
      **/
     export interface ITimer extends IBaseUtil {

     }

     /**
      *   Interface definition for IOCR
      **/
     export interface IOCR extends IBaseReader {

     }

     /**
      *   Interface definition for ICalendar
      **/
     export interface ICalendar extends IBasePIM {

     }

     /**
      *   Interface definition for ISecureKVResultCallback
      **/
     export interface ISecureKVResultCallback extends IBaseCallback {

          /**
           * Method Declarations for ISecureKVResultCallback
           */
           onError(error : ISecureKVResultCallbackErrorEnum)
           onResult(keyValues : Array<SecureKeyPair>)
           onWarning(keyValues : Array<SecureKeyPair>, warning : ISecureKVResultCallbackWarningEnum)

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
     }

     /**
      *  Enumerations for ISecureKVResultCallback Warning
      **/
     export class ISecureKVResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
          static Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");
     }

     export class SecureKVResultCallback implements ISecureKVResultCallback {
          description: string;
          id: number;
          onResultFunction : (keyValues: Array<SecureKeyPair>) => Function;
          onErrorFunction : (error: ISecureKVResultCallbackErrorEnum) => Function;
          onWarningFunction : (keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (keyValues: Array<SecureKeyPair>) => Function, onErrorFunction : (error: ISecureKVResultCallbackErrorEnum) => Function, onWarningFunction : (keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(keyValues: Array<SecureKeyPair>) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The SecureKVResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(keyValues);
               }
          }
          onError(error: ISecureKVResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The SecureKVResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(keyValues: Array<SecureKeyPair>, warning: ISecureKVResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The SecureKVResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(keyValues, warning);
               }
          }
          toString() : string {
               return "SecureKVResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IGlobalization
      **/
     export interface IGlobalization extends IBaseApplication {

          /**
           * Method Declarations for IGlobalization
           */
           getLocaleSupportedDescriptors() : Array<Locale>
           getResourceLiteral(key : string, locale : Locale) : string
           getResourceLiterals(locale : Locale) : Dictionary<string>
     }

     /**
      *   Interface definition for IFileDataResultCallback
      **/
     export interface IFileDataResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileDataResultCallback
           */
           onError(error : IFileDataResultCallbackErrorEnum)
           onResult(file : IFile, data : Array<number>)
           onWarning(file : IFile, warning : IFileDataResultCallbackWarningEnum)

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
     }

     /**
      *  Enumerations for IFileDataResultCallback Warning
      **/
     export class IFileDataResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
          static Unknown = new IFileDataResultCallbackWarningEnum("Unknown");
     }

     export class FileDataResultCallback implements IFileDataResultCallback {
          description: string;
          id: number;
          onResultFunction : (file: IFile, data: Array<number>) => Function;
          onErrorFunction : (error: IFileDataResultCallbackErrorEnum) => Function;
          onWarningFunction : (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (file: IFile, data: Array<number>) => Function, onErrorFunction : (error: IFileDataResultCallbackErrorEnum) => Function, onWarningFunction : (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(file: IFile, data: Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The FileDataResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(file, data);
               }
          }
          onError(error: IFileDataResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The FileDataResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(file: IFile, warning: IFileDataResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The FileDataResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }
          toString() : string {
               return "FileDataResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for ILinkedIn
      **/
     export interface ILinkedIn extends IBaseSocial {

     }

     /**
      *   Interface definition for IStore
      **/
     export interface IStore extends IBaseCommerce {

     }

     /**
      *   Interface definition for ITableResultCallback
      **/
     export interface ITableResultCallback extends IBaseCallback {

          /**
           * Method Declarations for ITableResultCallback
           */
           onError(error : ITableResultCallbackErrorEnum)
           onResult(table : Table)
           onWarning(table : Table, warning : ITableResultCallbackWarningEnum)

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
     }

     export class TableResultCallback implements ITableResultCallback {
          description: string;
          id: number;
          onResultFunction : (table: Table) => Function;
          onErrorFunction : (error: ITableResultCallbackErrorEnum) => Function;
          onWarningFunction : (table: Table, warning: ITableResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (table: Table) => Function, onErrorFunction : (error: ITableResultCallbackErrorEnum) => Function, onWarningFunction : (table: Table, warning: ITableResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(table: Table) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The TableResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(table);
               }
          }
          onError(error: ITableResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The TableResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(table: Table, warning: ITableResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The TableResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(table, warning);
               }
          }
          toString() : string {
               return "TableResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IFilePath
      **/
     export interface IFilePath extends IBaseData {

          /**
           * Method Declarations for IFilePath
           */
           endsWith(other : IFilePath) : boolean
           endsWith(other : string) : boolean
           equalPath(other : IFilePath) : boolean
           equals(other : string) : boolean
           getFileName() : IFilePath
           getFileSystem() : IFileSystem
           getNameCount() : number
           getName(index : number) : string
           getParent() : IFilePath
           getRoot() : IFilePath
           isAbsolute() : boolean
           normalize() : IFilePath
           relativize(other : IFilePath) : IFilePath
           resolveSibling(other : IFilePath) : IFilePath
           resolveSibling(other : string) : IFilePath
           resolve(other : IFilePath) : IFilePath
           resolve(other : string) : IFilePath
           startsWith(other : IFilePath) : boolean
           startsWith(other : string) : boolean
           toAbsolutePath() : IFilePath
           toFile() : IFile
           toString() : string
     }

     /**
      *   Interface definition for ISession
      **/
     export interface ISession extends IBaseCommunication {

          /**
           * Method Declarations for ISession
           */
           getAttribute(name : string) : any
           getAttributes() : Array<any>
           getCookies() : Array<Cookie>
           listAttributeNames() : Array<string>
           removeAttribute(name : string)
           removeAttributes()
           removeCookie(cookie : Cookie)
           removeCookies(cookies : Array<Cookie>)
           setAttribute(name : string, value : any)
           setCookie(cookie : Cookie)
           setCookies(cookies : Array<Cookie>)
     }

     /**
      *   Interface definition for IQRCode
      **/
     export interface IQRCode extends IBaseReader {

     }

     /**
      *   Interface definition for IFileListResultCallback
      **/
     export interface IFileListResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileListResultCallback
           */
           onError(error : IFileListResultCallbackErrorEnum)
           onResult(files : Array<IFile>)
           onWarning(files : Array<IFile>, warning : IFileListResultCallbackWarningEnum)

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
     }

     /**
      *  Enumerations for IFileListResultCallback Warning
      **/
     export class IFileListResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
          static Unknown = new IFileListResultCallbackWarningEnum("Unknown");
     }

     export class FileListResultCallback implements IFileListResultCallback {
          description: string;
          id: number;
          onResultFunction : (files: Array<IFile>) => Function;
          onErrorFunction : (error: IFileListResultCallbackErrorEnum) => Function;
          onWarningFunction : (files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (files: Array<IFile>) => Function, onErrorFunction : (error: IFileListResultCallbackErrorEnum) => Function, onWarningFunction : (files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(files: Array<IFile>) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The FileListResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(files);
               }
          }
          onError(error: IFileListResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The FileListResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(files: Array<IFile>, warning: IFileListResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The FileListResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(files, warning);
               }
          }
          toString() : string {
               return "FileListResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IBarcode
      **/
     export interface IBarcode extends IBaseReader {

     }

     /**
      *   Interface definition for IVideo
      **/
     export interface IVideo extends IBaseMedia {

          /**
           * Method Declarations for IVideo
           */
           playStream(url : string)
     }

     /**
      *   Interface definition for IDevice
      **/
     export interface IDevice extends IBaseSystem {

          /**
           * Method Declarations for IDevice
           */
           addButtonListener(listener : IButtonListener)
           getDeviceInfo() : DeviceInfo
           getLocaleCurrent() : Locale
           removeButtonListener(listener : IButtonListener)
           removeButtonListeners()
     }

     /**
      *   Interface definition for IButtonListener
      **/
     export interface IButtonListener extends IBaseListener {

          /**
           * Method Declarations for IButtonListener
           */
           onError(error : IButtonListenerErrorEnum)
           onResult(button : Button)
           onWarning(button : Button, warning : IButtonListenerWarningEnum)

     }
     /**
      *  Enumerations for IButtonListener Error
      **/
     export class IButtonListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Present = new IButtonListenerErrorEnum("Not_Present");
          static Unknown = new IButtonListenerErrorEnum("Unknown");
     }

     /**
      *  Enumerations for IButtonListener Warning
      **/
     export class IButtonListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
          static Unknown = new IButtonListenerWarningEnum("Unknown");
     }

     export class ButtonListener implements IButtonListener {
          description: string;
          id: number;
          onResultFunction : (button: Button) => Function;
          onErrorFunction : (error: IButtonListenerErrorEnum) => Function;
          onWarningFunction : (button: Button, warning: IButtonListenerWarningEnum) => Function;

          constructor(id: number, onResultFunction : (button: Button) => Function, onErrorFunction : (error: IButtonListenerErrorEnum) => Function, onWarningFunction : (button: Button, warning: IButtonListenerWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(button: Button) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The ButtonListener does not define the onResultFunction.");
               } else {
                    this.onResultFunction(button);
               }
          }
          onError(error: IButtonListenerErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The ButtonListener does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(button: Button, warning: IButtonListenerWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The ButtonListener does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(button, warning);
               }
          }
          toString() : string {
               return "ButtonListener{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IMagnetometer
      **/
     export interface IMagnetometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IMail
      **/
     export interface IMail extends IBasePIM {

          /**
           * Method Declarations for IMail
           */
           sendEmail(data : Email, callback : IMessagingCallback)
     }

     /**
      *   Interface definition for IBarometer
      **/
     export interface IBarometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IVibration
      **/
     export interface IVibration extends IBaseNotification {

     }

     /**
      *   Interface definition for IOS
      **/
     export interface IOS extends IBaseSystem {

          /**
           * Method Declarations for IOS
           */
           getOSInfo() : OSInfo
     }

     /**
      *   Interface definition for IDataStream
      **/
     export interface IDataStream extends IBaseData {

     }

     /**
      *   Interface definition for IFileResultCallback
      **/
     export interface IFileResultCallback extends IBaseCallback {

          /**
           * Method Declarations for IFileResultCallback
           */
           onError(error : IFileResultCallbackErrorEnum)
           onResult(storageFile : IFile)
           onWarning(sourceFile : IFile, destinationFile : IFile, warning : IFileResultCallbackWarningEnum)

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
     }

     export class FileResultCallback implements IFileResultCallback {
          description: string;
          id: number;
          onResultFunction : (storageFile: IFile) => Function;
          onErrorFunction : (error: IFileResultCallbackErrorEnum) => Function;
          onWarningFunction : (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (storageFile: IFile) => Function, onErrorFunction : (error: IFileResultCallbackErrorEnum) => Function, onWarningFunction : (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(storageFile: IFile) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The FileResultCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(storageFile);
               }
          }
          onError(error: IFileResultCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The FileResultCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The FileResultCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(sourceFile, destinationFile, warning);
               }
          }
          toString() : string {
               return "FileResultCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IDisplay
      **/
     export interface IDisplay extends IBaseSystem {

     }

     /**
      *   Interface definition for IRuntime
      **/
     export interface IRuntime extends IBaseSystem {

          /**
           * Method Declarations for IRuntime
           */
           dismissApplication()
           dismissSplashScreen() : boolean
     }

     /**
      *   Interface definition for IContact
      **/
     export interface IContact extends IBasePIM {

          /**
           * Method Declarations for IContact
           */
           getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback)
           getContact(contact : ContactUid, callback : IContactResultCallback)
           getContacts(callback : IContactResultCallback)
           getContacts(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>)
           getContacts(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>, filter : Array<IContactFilterEnum>)
           searchContacts(term : string, callback : IContactResultCallback)
           searchContacts(term : string, callback : IContactResultCallback, filter : Array<IContactFilterEnum>)
           setContactPhoto(contact : ContactUid, pngImage : Array<number>) : boolean

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
     }

     /**
      *   Interface definition for IGyroscope
      **/
     export interface IGyroscope extends IBaseSensor {

     }

     /**
      *   Interface definition for ICamera
      **/
     export interface ICamera extends IBaseMedia {

     }

     /**
      *   Interface definition for IImaging
      **/
     export interface IImaging extends IBaseMedia {

     }

     /**
      *   Interface definition for IOAuth
      **/
     export interface IOAuth extends IBaseSecurity {

     }

     /**
      *   Interface definition for IMap
      **/
     export interface IMap extends IBaseUI {

     }

     /**
      *   Interface definition for IMessagingCallback
      **/
     export interface IMessagingCallback extends IBaseCallback {

          /**
           * Method Declarations for IMessagingCallback
           */
           onError(error : IMessagingCallbackErrorEnum)
           onResult(success : boolean)
           onWarning(success : boolean, warning : IMessagingCallbackWarningEnum)

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
     }

     export class MessagingCallback implements IMessagingCallback {
          description: string;
          id: number;
          onResultFunction : (success: boolean) => Function;
          onErrorFunction : (error: IMessagingCallbackErrorEnum) => Function;
          onWarningFunction : (success: boolean, warning: IMessagingCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (success: boolean) => Function, onErrorFunction : (error: IMessagingCallbackErrorEnum) => Function, onWarningFunction : (success: boolean, warning: IMessagingCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(success: boolean) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The MessagingCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(success);
               }
          }
          onError(error: IMessagingCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The MessagingCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }
          onWarning(success: boolean, warning: IMessagingCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The MessagingCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(success, warning);
               }
          }
          toString() : string {
               return "MessagingCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for IOpenId
      **/
     export interface IOpenId extends IBaseSecurity {

     }

     /**
      *   Interface definition for IAmbientLight
      **/
     export interface IAmbientLight extends IBaseSensor {

     }

     /**
      *   Interface definition for IAppResourceCallback
      **/
     export interface IAppResourceCallback extends IBaseCallback {

          /**
           * Method Declarations for IAppResourceCallback
           */
           onError(resource : IAppResource, error : IAppResourceCallbackErrorEnum)
           onResult(resource : IAppResource)
           onWarning(resource : IAppResource, warning : IAppResourceCallbackWarningEnum)

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
     }

     export class AppResourceCallback implements IAppResourceCallback {
          description: string;
          id: number;
          onResultFunction : (resource: IAppResource) => Function;
          onErrorFunction : (resource: IAppResource, error: IAppResourceCallbackErrorEnum) => Function;
          onWarningFunction : (resource: IAppResource, warning: IAppResourceCallbackWarningEnum) => Function;

          constructor(id: number, onResultFunction : (resource: IAppResource) => Function, onErrorFunction : (resource: IAppResource, error: IAppResourceCallbackErrorEnum) => Function, onWarningFunction : (resource: IAppResource, warning: IAppResourceCallbackWarningEnum) => Function) {
               this.id = id;
               this.onResultFunction = onResultFunction;
               this.onErrorFunction = onErrorFunction;
               this.onWarningFunction = onWarningFunction;
          }

          onResult(resource: IAppResource) : void {
               if (typeof this.onResultFunction === 'undefined') {
                    console.log("WARNING: The AppResourceCallback does not define the onResultFunction.");
               } else {
                    this.onResultFunction(resource);
               }
          }
          onError(resource: IAppResource, error: IAppResourceCallbackErrorEnum) : void {
               if (typeof this.onErrorFunction === 'undefined') {
                    console.log("WARNING: The AppResourceCallback does not define the onErrorFunction.");
               } else {
                    this.onErrorFunction(resource, error);
               }
          }
          onWarning(resource: IAppResource, warning: IAppResourceCallbackWarningEnum) : void {
               if (typeof this.onWarningFunction === 'undefined') {
                    console.log("WARNING: The AppResourceCallback does not define the onWarningFunction.");
               } else {
                    this.onWarningFunction(resource, warning);
               }
          }
          toString() : string {
               return "AppResourceCallback{"+this.id+"}";
          }
          getId() : number {
               return this.id
          }

     }
     /**
      *   Interface definition for ILogging
      **/
     export interface ILogging extends IBaseUtil {

          /**
           * Method Declarations for ILogging
           */
           log(level : ILoggingLogLevelEnum, message : string)
           log(level : ILoggingLogLevelEnum, category : string, message : string)

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
     }

     /**
      *   Interface definition for ITwitter
      **/
     export interface ITwitter extends IBaseSocial {

     }

     /**
      *   Interface definition for IUI
      **/
     export interface IUI extends IBaseUI {

     }

     /**
      *   Interface definition for IFile
      **/
     export interface IFile extends IFilePath {

          /**
           * Method Declarations for IFile
           */
           canRead() : boolean
           canWrite() : boolean
           create(name : string, callback : IFileResultCallback)
           create(path : string, name : string, callback : IFileResultCallback)
           delete() : boolean
           delete(cascade : boolean) : boolean
           exists() : boolean
           getContent(callback : IFileDataResultCallback)
           getDateCreated() : number
           getDateModified() : number
           getName() : string
           getPath() : string
           getSize() : number
           isDirectory() : boolean
           listFiles(callback : IFileListResultCallback)
           listFiles(regex : string, callback : IFileListResultCallback)
           mkDir() : boolean
           mkDir(recursive : boolean) : boolean
           move(newFile : IFile, callback : IFileResultCallback)
           move(newFile : IFile, callback : IFileResultCallback, overwrite : boolean)
           move(newFile : IFile, createPath : boolean, callback : IFileResultCallback)
           move(newFile : IFile, createPath : boolean, callback : IFileResultCallback, overwrite : boolean)
           setContent(content : Array<number>, callback : IFileDataResultCallback)
           toPath() : IFilePath
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

          setContactId(contactId : string) {
               this.contactId = contactId
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

          setColumnCount(columnCount : number) {
               this.columnCount = columnCount
          }

          setColumns(columns : Array<Column>) {
               this.columns = columns
          }

          setName(name : string) {
               this.name = name
          }

          setRowCount(rowCount : number) {
               this.rowCount = rowCount
          }

          setRows(rows : Array<Row>) {
               this.rows = rows
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

          setTimeStamp(timeStamp : number) {
               this.timeStamp = timeStamp
          }

          setX(x : number) {
               this.x = x
          }

          setY(y : number) {
               this.y = y
          }

          setZ(z : number) {
               this.z = z
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

          setDataValue(dataValue : string) {
               this.dataValue = dataValue
          }

          setName(name : string) {
               this.name = name
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

          setEndpoint(endpoint : Endpoint) {
               this.endpoint = endpoint
          }

          setMethod(method : ServiceServiceMethodEnum) {
               this.method = method
          }

          setName(name : string) {
               this.name = name
          }

          setType(type : ServiceServiceTypeEnum) {
               this.type = type
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

          setData(data : string) {
               this.data = data
          }

          setName(name : string) {
               this.name = name
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

          setValues(values : Array<any>) {
               this.values = values
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

          setAttachmentData(attachmentData : Array<AttachmentData>) {
               this.attachmentData = attachmentData
          }

          setBccRecipients(bccRecipients : Array<EmailAddress>) {
               this.bccRecipients = bccRecipients
          }

          setCcRecipients(ccRecipients : Array<EmailAddress>) {
               this.ccRecipients = ccRecipients
          }

          setMessageBodyMimeType(messageBodyMimeType : string) {
               this.messageBodyMimeType = messageBodyMimeType
          }

          setMessageBody(messageBody : string) {
               this.messageBody = messageBody
          }

          setSubject(subject : string) {
               this.subject = subject
          }

          setToRecipients(toRecipients : Array<EmailAddress>) {
               this.toRecipients = toRecipients
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

          setCompress(compress : boolean) {
               this.compress = compress
          }

          setName(name : string) {
               this.name = name
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

          setAddress(address : string) {
               this.address = address
          }

          setType(type : ContactAddressAddressTypeEnum) {
               this.type = type
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

          setSecureData(secureData : string) {
               this.secureData = secureData
          }

          setSecureKey(secureKey : string) {
               this.secureKey = secureKey
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

          setState(state : LifecycleStateEnum) {
               this.state = state
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

          setContentBinaryLength(contentBinaryLength : number) {
               this.contentBinaryLength = contentBinaryLength
          }

          setContentBinary(contentBinary : Array<number>) {
               this.contentBinary = contentBinary
          }

          setContentEncoding(contentEncoding : string) {
               this.contentEncoding = contentEncoding
          }

          setContentLength(contentLength : string) {
               this.contentLength = contentLength
          }

          setContentType(contentType : string) {
               this.contentType = contentType
          }

          setContent(content : string) {
               this.content = content
          }

          setHeaders(headers : Array<Header>) {
               this.headers = headers
          }

          setSession(session : ISession) {
               this.session = session
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

          setPhoneType(phoneType : ContactPhonePhoneTypeEnum) {
               this.phoneType = phoneType
          }

          setPhone(phone : string) {
               this.phone = phone
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

          setUrl(url : string) {
               this.url = url
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

          setDataSize(dataSize : number) {
               this.dataSize = dataSize
          }

          setData(data : Array<number>) {
               this.data = data
          }

          setFileName(fileName : string) {
               this.fileName = fileName
          }

          setMimeType(mimeType : string) {
               this.mimeType = mimeType
          }

          setReferenceUrl(referenceUrl : string) {
               this.referenceUrl = referenceUrl
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

          setAltitude(altitude : number) {
               this.altitude = altitude
          }

          setLatitude(latitude : number) {
               this.latitude = latitude
          }

          setLongitude(longitude : number) {
               this.longitude = longitude
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

          setLastName(lastName : string) {
               this.lastName = lastName
          }

          setMiddleName(middleName : string) {
               this.middleName = middleName
          }

          setName(name : string) {
               this.name = name
          }

          setTitle(title : ContactPersonalInfoTitleEnum) {
               this.title = title
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

          setAddress(address : string) {
               this.address = address
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

          setContactAddresses(contactAddresses : Array<ContactAddress>) {
               this.contactAddresses = contactAddresses
          }

          setContactEmails(contactEmails : Array<ContactEmail>) {
               this.contactEmails = contactEmails
          }

          setContactPhones(contactPhones : Array<ContactPhone>) {
               this.contactPhones = contactPhones
          }

          setContactSocials(contactSocials : Array<ContactSocial>) {
               this.contactSocials = contactSocials
          }

          setContactTags(contactTags : Array<ContactTag>) {
               this.contactTags = contactTags
          }

          setContactWebsites(contactWebsites : Array<ContactWebsite>) {
               this.contactWebsites = contactWebsites
          }

          setPersonalInfo(personalInfo : ContactPersonalInfo) {
               this.personalInfo = personalInfo
          }

          setProfessionalInfo(professionalInfo : ContactProfessionalInfo) {
               this.professionalInfo = professionalInfo
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

          setCompany(company : string) {
               this.company = company
          }

          setJobDescription(jobDescription : string) {
               this.jobDescription = jobDescription
          }

          setJobTitle(jobTitle : string) {
               this.jobTitle = jobTitle
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

          setData(data : string) {
               this.data = data
          }

          setDomain(domain : string) {
               this.domain = domain
          }

          setExpiry(expiry : number) {
               this.expiry = expiry
          }

          setName(name : string) {
               this.name = name
          }

          setPath(path : string) {
               this.path = path
          }

          setScheme(scheme : string) {
               this.scheme = scheme
          }

          setSecure(secure : boolean) {
               this.secure = secure
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

          setCountry(country : string) {
               this.country = country
          }

          setLanguage(language : string) {
               this.language = language
          }

          toString() : string {
               return this.description
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

          setProfileUrl(profileUrl : string) {
               this.profileUrl = profileUrl
          }

          setSocialNetwork(socialNetwork : ContactSocialSocialNetworkEnum) {
               this.socialNetwork = socialNetwork
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

          setHost(host : string) {
               this.host = host
          }

          setPath(path : string) {
               this.path = path
          }

          setPort(port : number) {
               this.port = port
          }

          setProxy(proxy : string) {
               this.proxy = proxy
          }

          setScheme(scheme : string) {
               this.scheme = scheme
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

          setName(name : string) {
               this.name = name
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

          setContentEncoding(contentEncoding : string) {
               this.contentEncoding = contentEncoding
          }

          setContentLength(contentLength : number) {
               this.contentLength = contentLength
          }

          setContentType(contentType : string) {
               this.contentType = contentType
          }

          setContent(content : string) {
               this.content = content
          }

          setHeaders(headers : Array<Header>) {
               this.headers = headers
          }

          setMethod(method : string) {
               this.method = method
          }

          setProtocolVersion(protocolVersion : ServiceRequestProtocolVersionEnum) {
               this.protocolVersion = protocolVersion
          }

          setRawContent(rawContent : Array<number>) {
               this.rawContent = rawContent
          }

          setSession(session : ISession) {
               this.session = session
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

          setEmail(email : string) {
               this.email = email
          }

          setPrimary(primary : boolean) {
               this.primary = primary
          }

          setType(type : ContactEmailEmailTypeEnum) {
               this.type = type
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
     }


}
