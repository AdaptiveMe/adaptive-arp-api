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
      *   Interface definition for IBaseSensor
      **/
     export interface IBaseSensor extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBasePIM
      **/
     export interface IBasePIM extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseSystem
      **/
     export interface IBaseSystem extends IAdaptiveRP {

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
      *   Interface definition for IBaseApplication
      **/
     export interface IBaseApplication extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseReader
      **/
     export interface IBaseReader extends IAdaptiveRP {

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
      *   Interface definition for IBaseNotification
      **/
     export interface IBaseNotification extends IAdaptiveRP {

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
      *   Interface definition for IBaseSocial
      **/
     export interface IBaseSocial extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseSecurity
      **/
     export interface IBaseSecurity extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseData
      **/
     export interface IBaseData extends IAdaptiveRP {

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
      *   Interface definition for IBaseCommerce
      **/
     export interface IBaseCommerce extends IAdaptiveRP {

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

     }
     /**
      *   Interface definition for IBaseMedia
      **/
     export interface IBaseMedia extends IAdaptiveRP {

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
      *   Interface definition for IBaseListener
      **/
     export interface IBaseListener extends IAdaptiveRP {

          /**
           * Method Declarations for IBaseListener
           */
           getId() : number
           toString() : string
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

     }
     /**
      *   Interface definition for IBaseUtil
      **/
     export interface IBaseUtil extends IAdaptiveRP {

     }

     /**
      *   Interface definition for IBaseCommunication
      **/
     export interface IBaseCommunication extends IAdaptiveRP {

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
     }
     /**
      *   Interface definition for INetworkStatus
      **/
     export interface INetworkStatus extends IBaseCommunication {

     }

     /**
      *   Interface definition for ICrypto
      **/
     export interface ICrypto extends IBaseUtil {

     }

     /**
      *   Interface definition for IInternalStorage
      **/
     export interface IInternalStorage extends IBaseData {

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
     }
     /**
      *   Interface definition for IManagement
      **/
     export interface IManagement extends IBaseApplication {

     }

     /**
      *   Interface definition for IUI
      **/
     export interface IUI extends IBaseUI {

     }

     /**
      *   Interface definition for IQRCode
      **/
     export interface IQRCode extends IBaseReader {

     }

     /**
      *   Interface definition for INotification
      **/
     export interface INotification extends IBaseNotification {

     }

     /**
      *   Interface definition for IVibration
      **/
     export interface IVibration extends IBaseNotification {

     }

     /**
      *   Interface definition for IBarcode
      **/
     export interface IBarcode extends IBaseReader {

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
     }
     /**
      *   Interface definition for ICloud
      **/
     export interface ICloud extends IBaseData {

     }

     /**
      *   Interface definition for ICompression
      **/
     export interface ICompression extends IBaseUtil {

     }

     /**
      *   Interface definition for IDataStream
      **/
     export interface IDataStream extends IBaseData {

     }

     /**
      *   Interface definition for IConcurrent
      **/
     export interface IConcurrent extends IBaseUtil {

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

     }
     /**
      *   Interface definition for INetworkNaming
      **/
     export interface INetworkNaming extends IBaseCommunication {

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
     }
     /**
      *   Interface definition for IBarometer
      **/
     export interface IBarometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IAds
      **/
     export interface IAds extends IBaseCommerce {

     }

     /**
      *   Interface definition for IAudio
      **/
     export interface IAudio extends IBaseMedia {

     }

     /**
      *   Interface definition for IOCR
      **/
     export interface IOCR extends IBaseReader {

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
     }
     /**
      *   Interface definition for ITwitter
      **/
     export interface ITwitter extends IBaseSocial {

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

     }
     /**
      *   Interface definition for IUpdate
      **/
     export interface IUpdate extends IBaseApplication {

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

     }
     /**
      *   Interface definition for ILinkedIn
      **/
     export interface ILinkedIn extends IBaseSocial {

     }

     /**
      *   Interface definition for ISocket
      **/
     export interface ISocket extends IBaseCommunication {

     }

     /**
      *   Interface definition for IRSS
      **/
     export interface IRSS extends IBaseSocial {

     }

     /**
      *   Interface definition for IBluetooth
      **/
     export interface IBluetooth extends IBaseCommunication {

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

     }
     /**
      *   Interface definition for IFileSystem
      **/
     export interface IFileSystem extends IBaseData {

          /**
           * Method Declarations for IFileSystem
           */
           createWithPathString(path : string, name : string, callback : IFileResultCallback)
           createWithPath(path : IFilePath, name : string, callback : IFileResultCallback)
           create(name : string, callback : IFileResultCallback)
           getApplicationCacheFolder() : IFilePath
           getApplicationDocumentsFolder() : IFilePath
           getApplicationFolder() : IFilePath
           getPathForFile(file : IFile) : string
           getPathForPath(path : IFilePath) : string
           getSeparator() : string
           isSameFile(source : IFile, dest : IFile) : boolean
           isSamePath(source : IFilePath, dest : IFilePath) : boolean
           toPath(path : IFile) : IFilePath
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

     }
     /**
      *   Interface definition for INetworkInfo
      **/
     export interface INetworkInfo extends IBaseCommunication {

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

     }
     /**
      *   Interface definition for IPrinting
      **/
     export interface IPrinting extends IBaseApplication {

     }

     /**
      *   Interface definition for IGooglePlus
      **/
     export interface IGooglePlus extends IBaseSocial {

     }

     /**
      *   Interface definition for IAmbientLight
      **/
     export interface IAmbientLight extends IBaseSensor {

     }

     /**
      *   Interface definition for INotificationLocal
      **/
     export interface INotificationLocal extends IBaseNotification {

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
           getContactsForFields(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>)
           getContactsWithFilter(callback : IContactResultCallback, fields : Array<IContactFieldGroupEnum>, filter : Array<IContactFilterEnum>)
           getContacts(callback : IContactResultCallback)
           searchContactsWithFilter(term : string, callback : IContactResultCallback, filter : Array<IContactFilterEnum>)
           searchContacts(term : string, callback : IContactResultCallback)
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
      *   Interface definition for IStore
      **/
     export interface IStore extends IBaseCommerce {

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

     }
     /**
      *   Interface definition for IOAuth
      **/
     export interface IOAuth extends IBaseSecurity {

     }

     /**
      *   Interface definition for INFC
      **/
     export interface INFC extends IBaseReader {

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

     }
     /**
      *   Interface definition for IAnalytics
      **/
     export interface IAnalytics extends IBaseApplication {

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

     }
     /**
      *   Interface definition for IProximity
      **/
     export interface IProximity extends IBaseSensor {

     }

     /**
      *   Interface definition for IWallet
      **/
     export interface IWallet extends IBaseCommerce {

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

     }
     /**
      *   Interface definition for IXML
      **/
     export interface IXML extends IBaseData {

     }

     /**
      *   Interface definition for IImaging
      **/
     export interface IImaging extends IBaseMedia {

     }

     /**
      *   Interface definition for IFacebook
      **/
     export interface IFacebook extends IBaseSocial {

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

     }
     /**
      *   Interface definition for IFilePath
      **/
     export interface IFilePath extends IBaseData {

          /**
           * Method Declarations for IFilePath
           */
           endsWithPath(other : IFilePath) : boolean
           endsWith(other : string) : boolean
           equalPath(other : IFilePath) : boolean
           equals(other : string) : boolean
           getFileName() : IFilePath
           getFileSystem() : IFileSystem
           getNameAtIndex(index : number) : string
           getNameCount() : number
           getParent() : IFilePath
           getRoot() : IFilePath
           isAbsolute() : boolean
           normalize() : IFilePath
           relativize(other : IFilePath) : IFilePath
           resolvePath(other : IFilePath) : IFilePath
           resolveSiblingPath(other : IFilePath) : IFilePath
           resolveSibling(other : string) : IFilePath
           resolve(other : string) : IFilePath
           startsWithPath(other : IFilePath) : boolean
           startsWith(other : string) : boolean
           toAbsolutePath() : IFilePath
           toFile() : IFile
           toString() : string
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

     }
     /**
      *   Interface definition for IDesktop
      **/
     export interface IDesktop extends IBaseUI {

     }

     /**
      *   Interface definition for ISettings
      **/
     export interface ISettings extends IBaseApplication {

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
      *   Interface definition for IMagnetometer
      **/
     export interface IMagnetometer extends IBaseSensor {

     }

     /**
      *   Interface definition for IDisplay
      **/
     export interface IDisplay extends IBaseSystem {

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
     }
     /**
      *   Interface definition for ICalendar
      **/
     export interface ICalendar extends IBasePIM {

     }

     /**
      *   Interface definition for IMap
      **/
     export interface IMap extends IBaseUI {

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

     }
     /**
      *   Interface definition for IAlarm
      **/
     export interface IAlarm extends IBaseNotification {

     }

     /**
      *   Interface definition for IOpenId
      **/
     export interface IOpenId extends IBaseSecurity {

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

     }
     /**
      *   Interface definition for ITimer
      **/
     export interface ITimer extends IBaseUtil {

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
      *   Interface definition for IFile
      **/
     export interface IFile extends IFilePath {

          /**
           * Method Declarations for IFile
           */
           canRead() : boolean
           canWrite() : boolean
           createWithPath(path : string, name : string, callback : IFileResultCallback)
           create(name : string, callback : IFileResultCallback)
           delete(cascade : boolean) : boolean
           exists() : boolean
           getContent(callback : IFileDataResultCallback)
           getDateCreated() : number
           getDateModified() : number
           getName() : string
           getPath() : string
           getSize() : number
           isDirectory() : boolean
           listFilesForRegex(regex : string, callback : IFileListResultCallback)
           listFiles(callback : IFileListResultCallback)
           mkDir(recursive : boolean) : boolean
           move(newFile : IFile, createPath : boolean, callback : IFileResultCallback, overwrite : boolean)
           setContent(content : Array<number>, callback : IFileDataResultCallback)
           toPath() : IFilePath
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

          setAddress(address : string) : void {
               this.address = address
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

         public static getClassDescription() : string {
             return "static";
         }
     }

    export class ReflectionStereotypeEnum {
        constructor(public value:string){}
        toString(){return this.value;}

        static TypeModule = new ReflectionStereotypeEnum("Module");
        static TypeCategory = new ReflectionStereotypeEnum("Category");
        static TypeClass = new ReflectionStereotypeEnum("Class");
        static TypeFunction = new ReflectionStereotypeEnum("Function");
        static TypeObject = new ReflectionStereotypeEnum("Object");
        static TypeDescription = new ReflectionStereotypeEnum("Description");
    }

    export class ReflectionTypeEnum {
        constructor(public value:string){}
        toString(){return this.value;}

        static TypeString = new ReflectionStereotypeEnum("string");
        static TypeNumber = new ReflectionStereotypeEnum("number");
        static TypeObject = new ReflectionStereotypeEnum("object");
        static TypeArray = new ReflectionStereotypeEnum("Array");
    }

    export interface IReflection {
        name : string;
        description: string;
        stereotype: ReflectionStereotypeEnum;
        getName() : string;
        getStereotype() : ReflectionStereotypeEnum;
        getDescription(): string;
    }

    export class Reflection implements IReflection {
        name:string;
        description:string;
        stereotype: ReflectionStereotypeEnum;

        constructor(name:string, description:string,stereotype:ReflectionStereotypeEnum) {
            this.name = name;
            this.description = description;
            this.stereotype = stereotype;
        }

        getName():string {
            return this.name;
        }
        getStereotype(): ReflectionStereotypeEnum {
            return this.stereotype;
        }
        getDescription():string {
            return this.description;
        }
    }

    export class ReflectionModule extends Reflection {
        categories: Array<ReflectionCategory>;

        constructor(name:string, description:string,categories:Array<ReflectionCategory>) {
            super(name,description,ReflectionStereotypeEnum.TypeModule)
            this.categories = categories;
        }

        getCategories() : Array<ReflectionCategory> {
            return this.categories;
        }

        getClasses() : Array<ReflectionClass> {
            var _array = new Array<ReflectionClass>();
            for (var i=0; i < this.getCategories().length; i++) {
                var category:ReflectionCategory = this.getCategories()[i];
                for (var j=0; j < category.getClasses().length; j++) {
                    _array.push(category.getClasses()[j]);
                }
            }
            return _array;
        }
    }

    export class ReflectionCategory extends Reflection {
        classes: Array<ReflectionClass>;

        constructor(name:string, description:string, classes:Array<ReflectionClass>) {
            super(name, description, ReflectionStereotypeEnum.TypeCategory);
            this.classes = classes;
        }

        getClasses() : Array<ReflectionClass> {
            return this.classes;
        }
    }

    export class ReflectionClass extends Reflection {
        functions: Array<ReflectionFunction>;

        constructor(name:string, description:string, functions:Array<ReflectionFunction>) {
            super(name,description,ReflectionStereotypeEnum.TypeClass);
            this.functions = functions;
        }

        getFunctions() : Array<ReflectionFunction> {
            return this.functions;
        }
    }

    export class ReflectionFunction extends Reflection {
        parameters: Array<ReflectionObject>;
        returnType: ReflectionObject;

        constructor(name:string, description:string, parameters:Array<ReflectionObject>, returnType:ReflectionObject) {
            super(name,description,ReflectionStereotypeEnum.TypeFunction);
            this.parameters = parameters;
            this.returnType = returnType;
        }

        getParameters() : Array<ReflectionObject> {
            return this.parameters;
        }
        getReturnType() : ReflectionObject {
            return this.returnType;
        }
    }

    export class ReflectionObject extends Reflection {
        type: string;
        componentType: ReflectionObject;
        fields:Array<ReflectionObject>;
        primitive: boolean = false;
        _array:boolean = false;
        _void:boolean = false;

        constructor(name:string, description:string, type:string, fields:Array<ReflectionObject>) {
            super(name,description,ReflectionStereotypeEnum.TypeObject);
            this.type = type;
            this.fields = fields;
            this.componentType = null;
            if (this.type == "number" || this.type == "string" || this.type == "boolean") {
                this.primitive = true;
            }
            if (this.type == null || this.type == "null") {
                this._void = true;
            }
            if (this.type !=null && this.type.indexOf("Array")>-1) {
                this._array = true;
                this.componentType = new ReflectionObject(name, "Array component of "+type+".",this.type.substring(5,this.type.length-1), null);
            }
        }

        getType() : string {
            return this.type;
        }
        getComponentType():ReflectionObject {
            return this.componentType;
        }
        isPrimitive():boolean {
            return this.primitive;
        }
        isArray():boolean {
            return this._array;
        }
        isVoid():boolean {
            return this._void;
        }
    }
}

var arrayCategory = new Array<Adaptive.ReflectionCategory>();
for (var _categories = 0; _categories < 20 ; _categories++) {

    var arrayClasses = new Array<Adaptive.ReflectionClass>();
    for (var _classes = 0; _classes < 20; _classes++) {

        var arrayFunctions = new Array<Adaptive.ReflectionFunction>();
        for (var _functions = 0; _functions<20; _functions++) {

            var arrayParameters = new Array<Adaptive.ReflectionObject>();
            for (var _parameters = 0; _parameters<5;_parameters++) {

                var arrayFields = new Array<Adaptive.ReflectionObject>();
                for (var _fields = 0; _fields < 10; _fields++) {

                }
            }
        }
    }
}
