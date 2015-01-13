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
module Adaptive {

     /**
        Global unique id for listeners and callbacks.
     */
     export var registeredCounter : number = 0;

     /**
        Base url for for http/https JSON requests.
     */
     export var bridgePath : string = "https://adaptiveapp";

     /**
        Utility class for Dictionary type support.
     */
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
        This is a marker interface for bridge classes that invoke delegates.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export interface APIBridge {
          /**
             Invokes the given method specified in the API request object.
             @param request APIRequest object containing method name and parameters.
             @return String with JSON response or a zero length string is the response is asynchronous.
          */
          invoke(request:APIRequest) : string;
     }
     /**
        Master interface for all the Groups and Types of Interfaces os the Project

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAdaptiveRP {
          /**
             Method that returns the API group of the implementation
             @return API Group name.
             @since ARP1.0
          */
          getAPIGroup() : IAdaptiveRPGroup;
          /**
             Method that returns the API version of the implementation.
             @return API Version string.
             @since ARP1.0
          */
          getAPIVersion() : string;
     }
     /**
        Interface to retrieve auto-registered service implementation references.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAppRegistry {
          /**
             Returns a reference to the registered AccelerationBridge.

             @return AccelerationBridge reference or null if a bridge of this type is not registered.
          */
          getAccelerationBridge() : IAcceleration;

          /**
             Returns a reference to the registered AdsBridge.

             @return AdsBridge reference or null if a bridge of this type is not registered.
          */
          getAdsBridge() : IAds;

          /**
             Returns a reference to the registered AlarmBridge.

             @return AlarmBridge reference or null if a bridge of this type is not registered.
          */
          getAlarmBridge() : IAlarm;

          /**
             Returns a reference to the registered AmbientLightBridge.

             @return AmbientLightBridge reference or null if a bridge of this type is not registered.
          */
          getAmbientLightBridge() : IAmbientLight;

          /**
             Returns a reference to the registered AnalyticsBridge.

             @return AnalyticsBridge reference or null if a bridge of this type is not registered.
          */
          getAnalyticsBridge() : IAnalytics;

          /**
             Returns a reference to the registered AudioBridge.

             @return AudioBridge reference or null if a bridge of this type is not registered.
          */
          getAudioBridge() : IAudio;

          /**
             Returns a reference to the registered BarcodeBridge.

             @return BarcodeBridge reference or null if a bridge of this type is not registered.
          */
          getBarcodeBridge() : IBarcode;

          /**
             Returns a reference to the registered BarometerBridge.

             @return BarometerBridge reference or null if a bridge of this type is not registered.
          */
          getBarometerBridge() : IBarometer;

          /**
             Returns a reference to the registered BluetoothBridge.

             @return BluetoothBridge reference or null if a bridge of this type is not registered.
          */
          getBluetoothBridge() : IBluetooth;

          /**
             Returns a reference to the registered BrowserBridge.

             @return BrowserBridge reference or null if a bridge of this type is not registered.
          */
          getBrowserBridge() : IBrowser;

          /**
             Returns a reference to the registered CalendarBridge.

             @return CalendarBridge reference or null if a bridge of this type is not registered.
          */
          getCalendarBridge() : ICalendar;

          /**
             Returns a reference to the registered CameraBridge.

             @return CameraBridge reference or null if a bridge of this type is not registered.
          */
          getCameraBridge() : ICamera;

          /**
             Returns a reference to the registered CapabilitiesBridge.

             @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
          */
          getCapabilitiesBridge() : ICapabilities;

          /**
             Returns a reference to the registered CloudBridge.

             @return CloudBridge reference or null if a bridge of this type is not registered.
          */
          getCloudBridge() : ICloud;

          /**
             Returns a reference to the registered CompressionBridge.

             @return CompressionBridge reference or null if a bridge of this type is not registered.
          */
          getCompressionBridge() : ICompression;

          /**
             Returns a reference to the registered ConcurrentBridge.

             @return ConcurrentBridge reference or null if a bridge of this type is not registered.
          */
          getConcurrentBridge() : IConcurrent;

          /**
             Returns a reference to the registered ContactBridge.

             @return ContactBridge reference or null if a bridge of this type is not registered.
          */
          getContactBridge() : IContact;

          /**
             Returns a reference to the registered CryptoBridge.

             @return CryptoBridge reference or null if a bridge of this type is not registered.
          */
          getCryptoBridge() : ICrypto;

          /**
             Returns a reference to the registered DataStreamBridge.

             @return DataStreamBridge reference or null if a bridge of this type is not registered.
          */
          getDataStreamBridge() : IDataStream;

          /**
             Returns a reference to the registered DatabaseBridge.

             @return DatabaseBridge reference or null if a bridge of this type is not registered.
          */
          getDatabaseBridge() : IDatabase;

          /**
             Returns a reference to the registered DesktopBridge.

             @return DesktopBridge reference or null if a bridge of this type is not registered.
          */
          getDesktopBridge() : IDesktop;

          /**
             Returns a reference to the registered DeviceBridge.

             @return DeviceBridge reference or null if a bridge of this type is not registered.
          */
          getDeviceBridge() : IDevice;

          /**
             Returns a reference to the registered DisplayBridge.

             @return DisplayBridge reference or null if a bridge of this type is not registered.
          */
          getDisplayBridge() : IDisplay;

          /**
             Returns a reference to the registered FacebookBridge.

             @return FacebookBridge reference or null if a bridge of this type is not registered.
          */
          getFacebookBridge() : IFacebook;

          /**
             Returns a reference to the registered FileBridge.

             @return FileBridge reference or null if a bridge of this type is not registered.
          */
          getFileBridge() : IFile;

          /**
             Returns a reference to the registered FileSystemBridge.

             @return FileSystemBridge reference or null if a bridge of this type is not registered.
          */
          getFileSystemBridge() : IFileSystem;

          /**
             Returns a reference to the registered GeolocationBridge.

             @return GeolocationBridge reference or null if a bridge of this type is not registered.
          */
          getGeolocationBridge() : IGeolocation;

          /**
             Returns a reference to the registered GlobalizationBridge.

             @return GlobalizationBridge reference or null if a bridge of this type is not registered.
          */
          getGlobalizationBridge() : IGlobalization;

          /**
             Returns a reference to the registered GooglePlusBridge.

             @return GooglePlusBridge reference or null if a bridge of this type is not registered.
          */
          getGooglePlusBridge() : IGooglePlus;

          /**
             Returns a reference to the registered GyroscopeBridge.

             @return GyroscopeBridge reference or null if a bridge of this type is not registered.
          */
          getGyroscopeBridge() : IGyroscope;

          /**
             Returns a reference to the registered ImagingBridge.

             @return ImagingBridge reference or null if a bridge of this type is not registered.
          */
          getImagingBridge() : IImaging;

          /**
             Returns a reference to the registered InternalStorageBridge.

             @return InternalStorageBridge reference or null if a bridge of this type is not registered.
          */
          getInternalStorageBridge() : IInternalStorage;

          /**
             Returns a reference to the registered LifecycleBridge.

             @return LifecycleBridge reference or null if a bridge of this type is not registered.
          */
          getLifecycleBridge() : ILifecycle;

          /**
             Returns a reference to the registered LinkedInBridge.

             @return LinkedInBridge reference or null if a bridge of this type is not registered.
          */
          getLinkedInBridge() : ILinkedIn;

          /**
             Returns a reference to the registered LoggingBridge.

             @return LoggingBridge reference or null if a bridge of this type is not registered.
          */
          getLoggingBridge() : ILogging;

          /**
             Returns a reference to the registered MagnetometerBridge.

             @return MagnetometerBridge reference or null if a bridge of this type is not registered.
          */
          getMagnetometerBridge() : IMagnetometer;

          /**
             Returns a reference to the registered MailBridge.

             @return MailBridge reference or null if a bridge of this type is not registered.
          */
          getMailBridge() : IMail;

          /**
             Returns a reference to the registered ManagementBridge.

             @return ManagementBridge reference or null if a bridge of this type is not registered.
          */
          getManagementBridge() : IManagement;

          /**
             Returns a reference to the registered MapBridge.

             @return MapBridge reference or null if a bridge of this type is not registered.
          */
          getMapBridge() : IMap;

          /**
             Returns a reference to the registered MessagingBridge.

             @return MessagingBridge reference or null if a bridge of this type is not registered.
          */
          getMessagingBridge() : IMessaging;

          /**
             Returns a reference to the registered NFCBridge.

             @return NFCBridge reference or null if a bridge of this type is not registered.
          */
          getNFCBridge() : INFC;

          /**
             Returns a reference to the registered NetworkInfoBridge.

             @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
          */
          getNetworkInfoBridge() : INetworkInfo;

          /**
             Returns a reference to the registered NetworkNamingBridge.

             @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
          */
          getNetworkNamingBridge() : INetworkNaming;

          /**
             Returns a reference to the registered NetworkReachabilityBridge.

             @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
          */
          getNetworkReachabilityBridge() : INetworkReachability;

          /**
             Returns a reference to the registered NetworkStatusBridge.

             @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
          */
          getNetworkStatusBridge() : INetworkStatus;

          /**
             Returns a reference to the registered NotificationBridge.

             @return NotificationBridge reference or null if a bridge of this type is not registered.
          */
          getNotificationBridge() : INotification;

          /**
             Returns a reference to the registered NotificationLocalBridge.

             @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
          */
          getNotificationLocalBridge() : INotificationLocal;

          /**
             Returns a reference to the registered OAuthBridge.

             @return OAuthBridge reference or null if a bridge of this type is not registered.
          */
          getOAuthBridge() : IOAuth;

          /**
             Returns a reference to the registered OCRBridge.

             @return OCRBridge reference or null if a bridge of this type is not registered.
          */
          getOCRBridge() : IOCR;

          /**
             Returns a reference to the registered OSBridge.

             @return OSBridge reference or null if a bridge of this type is not registered.
          */
          getOSBridge() : IOS;

          /**
             Returns a reference to the registered OpenIdBridge.

             @return OpenIdBridge reference or null if a bridge of this type is not registered.
          */
          getOpenIdBridge() : IOpenId;

          /**
             Returns a reference to the registered PrintingBridge.

             @return PrintingBridge reference or null if a bridge of this type is not registered.
          */
          getPrintingBridge() : IPrinting;

          /**
             Returns a reference to the registered ProximityBridge.

             @return ProximityBridge reference or null if a bridge of this type is not registered.
          */
          getProximityBridge() : IProximity;

          /**
             Returns a reference to the registered QRCodeBridge.

             @return QRCodeBridge reference or null if a bridge of this type is not registered.
          */
          getQRCodeBridge() : IQRCode;

          /**
             Returns a reference to the registered RSSBridge.

             @return RSSBridge reference or null if a bridge of this type is not registered.
          */
          getRSSBridge() : IRSS;

          /**
             Returns a reference to the registered RuntimeBridge.

             @return RuntimeBridge reference or null if a bridge of this type is not registered.
          */
          getRuntimeBridge() : IRuntime;

          /**
             Returns a reference to the registered SecurityBridge.

             @return SecurityBridge reference or null if a bridge of this type is not registered.
          */
          getSecurityBridge() : ISecurity;

          /**
             Returns a reference to the registered ServiceBridge.

             @return ServiceBridge reference or null if a bridge of this type is not registered.
          */
          getServiceBridge() : IService;

          /**
             Returns a reference to the registered SettingsBridge.

             @return SettingsBridge reference or null if a bridge of this type is not registered.
          */
          getSettingsBridge() : ISettings;

          /**
             Returns a reference to the registered SocketBridge.

             @return SocketBridge reference or null if a bridge of this type is not registered.
          */
          getSocketBridge() : ISocket;

          /**
             Returns a reference to the registered StoreBridge.

             @return StoreBridge reference or null if a bridge of this type is not registered.
          */
          getStoreBridge() : IStore;

          /**
             Returns a reference to the registered TelephonyBridge.

             @return TelephonyBridge reference or null if a bridge of this type is not registered.
          */
          getTelephonyBridge() : ITelephony;

          /**
             Returns a reference to the registered TimerBridge.

             @return TimerBridge reference or null if a bridge of this type is not registered.
          */
          getTimerBridge() : ITimer;

          /**
             Returns a reference to the registered TwitterBridge.

             @return TwitterBridge reference or null if a bridge of this type is not registered.
          */
          getTwitterBridge() : ITwitter;

          /**
             Returns a reference to the registered UIBridge.

             @return UIBridge reference or null if a bridge of this type is not registered.
          */
          getUIBridge() : IUI;

          /**
             Returns a reference to the registered UpdateBridge.

             @return UpdateBridge reference or null if a bridge of this type is not registered.
          */
          getUpdateBridge() : IUpdate;

          /**
             Returns a reference to the registered VibrationBridge.

             @return VibrationBridge reference or null if a bridge of this type is not registered.
          */
          getVibrationBridge() : IVibration;

          /**
             Returns a reference to the registered VideoBridge.

             @return VideoBridge reference or null if a bridge of this type is not registered.
          */
          getVideoBridge() : IVideo;

          /**
             Returns a reference to the registered WalletBridge.

             @return WalletBridge reference or null if a bridge of this type is not registered.
          */
          getWalletBridge() : IWallet;

          /**
             Returns a reference to the registered XMLBridge.

             @return XMLBridge reference or null if a bridge of this type is not registered.
          */
          getXMLBridge() : IXML;

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string;
     }
     /**
        Base application for Application purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseApplication extends IAdaptiveRP {
     }
     /**
        Base application for Callback purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseCallback extends IAdaptiveRP {

          /**
             Retrieve unique id of callback/listener.

             @return Callback/listener unique id.
          */
          getId() : number;

     }
     /**
        Base application for Commerce purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseCommerce extends IAdaptiveRP {
     }
     /**
        Base application for Communication purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseCommunication extends IAdaptiveRP {
     }
     /**
        Base application for Data purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseData extends IAdaptiveRP {
     }
     /**
        Base application for Listener purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseListener extends IAdaptiveRP {

          /**
             Retrieve unique id of callback/listener.

             @return Callback/listener unique id.
          */
          getId() : number;

     }
     /**
        Base application for Media purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseMedia extends IAdaptiveRP {
     }
     /**
        Base application for Notification purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseNotification extends IAdaptiveRP {
     }
     /**
        Base application for PIM purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBasePIM extends IAdaptiveRP {
     }
     /**
        Base application for Reader purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseReader extends IAdaptiveRP {
     }
     /**
        Base application for Security purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseSecurity extends IAdaptiveRP {
     }
     /**
        Base application for Sensor purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseSensor extends IAdaptiveRP {
     }
     /**
        Base application for Social purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseSocial extends IAdaptiveRP {
     }
     /**
        Base application for System purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseSystem extends IAdaptiveRP {
     }
     /**
        Base application for UI purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseUI extends IAdaptiveRP {
     }
     /**
        Base application for Utility purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBaseUtil extends IAdaptiveRP {
     }
     /**
        Interface for Analytics purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAnalytics extends IBaseApplication {
     }
     /**
        Interface for Managing the Globalization results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IGlobalization extends IBaseApplication {
          /**
             List of supported locales for the application
             @return List of locales
             @since ARP1.0
          */
          getLocaleSupportedDescriptors() : Array<Locale>;
          /**
             Gets the text/message corresponding to the given key and locale.
             @param key    to match text
             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return Localized text.
             @since ARP1.0
          */
          getResourceLiteral(key:string, locale:Locale) : string;
          /**
             Gets the full application configured literals (key/message pairs) corresponding to the given locale.
             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return Localized texts in the form of an object.
             @since ARP1.0
          */
          getResourceLiterals(locale:Locale) : Array<KeyPair>;
     }
     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ILifecycle extends IBaseApplication {
          /**
             Add the listener for the lifecycle of the app
             @param listener Lifecycle listener
             @since ARP1.0
          */
          addLifecycleListener(listener:ILifecycleListener);
          /**
             Whether the application is in background or not
             @return true if the application is in background;false otherwise
             @since ARP1.0
          */
          isBackground() : boolean;
          /**
             Un-registers an existing listener from receiving lifecycle events.
             @param listener Lifecycle listener
             @since ARP1.0
          */
          removeLifecycleListener(listener:ILifecycleListener);
          /**
             Removes all existing listeners from receiving lifecycle events.
             @since ARP1.0
          */
          removeLifecycleListeners();
     }
     /**
        Interface for Managing the Management operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IManagement extends IBaseApplication {
     }
     /**
        Interface for Managing the Printing operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IPrinting extends IBaseApplication {
     }
     /**
        Interface for Managing the Settings operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ISettings extends IBaseApplication {
     }
     /**
        Interface for Managing the Update operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IUpdate extends IBaseApplication {
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IContactPhotoResultCallback extends IBaseCallback {
          /**
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IContactPhotoResultCallbackError);
          /**
             This method is called on Result
             @param contactPhoto returned by the platform
             @since ARP1.0
          */
          onResult(contactPhoto:Array<number>);
          /**
             This method is called on Warning
             @param contactPhoto returned by the platform
             @param warning      returned by the platform
             @since ARP1.0
          */
          onWarning(contactPhoto:Array<number>, warning:IContactPhotoResultCallbackWarning);
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IContactResultCallback extends IBaseCallback {
          /**
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IContactResultCallbackError);
          /**
             This method is called on Result
             @param contacts returned by the platform
             @since ARP1.0
          */
          onResult(contacts:Array<Contact>);
          /**
             This method is called on Warning
             @param contacts returned by the platform
             @param warning  returned by the platform
             @since ARP1.0
          */
          onWarning(contacts:Array<Contact>, warning:IContactResultCallbackWarning);
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export interface IDatabaseResultCallback extends IBaseCallback {
          /**
             Result callback for error responses
             @param error Returned error
             @since ARP1.0
          */
          onError(error:IDatabaseResultCallbackError);
          /**
             Result callback for correct responses
             @param database Returns the database
             @since ARP1.0
          */
          onResult(database:Database);
          /**
             Result callback for warning responses
             @param database Returns the database
             @param warning  Returned Warning
             @since ARP1.0
          */
          onWarning(database:Database, warning:IDatabaseResultCallbackWarning);
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export interface IDatabaseTableResultCallback extends IBaseCallback {
          /**
             Result callback for error responses
             @param error Returned error
             @since ARP1.0
          */
          onError(error:IDatabaseTableResultCallbackError);
          /**
             Result callback for correct responses
             @param databaseTable Returns the databaseTable
             @since ARP1.0
          */
          onResult(databaseTable:DatabaseTable);
          /**
             Result callback for warning responses
             @param databaseTable Returns the databaseTable
             @param warning       Returned Warning
             @since ARP1.0
          */
          onWarning(databaseTable:DatabaseTable, warning:IDatabaseTableResultCallbackWarning);
     }
     /**
        Interface for Managing the File loading callback responses

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFileDataLoadResultCallback extends IBaseCallback {
          /**
             Error processing data retrieval/storage operation.
             @param error Error condition encountered.
             @since ARP1.0
          */
          onError(error:IFileDataLoadResultCallbackError);
          /**
             Result of data retrieval operation.
             @param data Data loaded.
             @since ARP1.0
          */
          onResult(data:Array<number>);
          /**
             Result with warning of data retrieval/storage operation.
             @param data    File being loaded.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(data:Array<number>, warning:IFileDataLoadResultCallbackWarning);
     }
     /**
        Interface for Managing the File store operations callback

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFileDataStoreResultCallback extends IBaseCallback {
          /**
             Error processing data retrieval/storage operation.
             @param error Error condition encountered.
             @since ARP1.0
          */
          onError(error:IFileDataStoreResultCallbackError);
          /**
             Result of data storage operation.
             @param file File reference to stored data.
             @since ARP1.0
          */
          onResult(file:FileDescriptor);
          /**
             Result with warning of data retrieval/storage operation.
             @param file    File being loaded/stored.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(file:FileDescriptor, warning:IFileDataStoreResultCallbackWarning);
     }
     /**
        Interface for Managing the File result operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFileListResultCallback extends IBaseCallback {
          /**
             On error result of a file operation.
             @param error Error processing the request.
             @since ARP1.0
          */
          onError(error:IFileListResultCallbackError);
          /**
             On correct result of a file operation.
             @param files Array of resulting files/folders.
             @since ARP1.0
          */
          onResult(files:Array<FileDescriptor>);
          /**
             On partial result of a file operation, containing a warning.
             @param files   Array of resulting files/folders.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(files:Array<FileDescriptor>, warning:IFileListResultCallbackWarning);
     }
     /**
        Interface for Managing the File operations callback

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFileResultCallback extends IBaseCallback {
          /**
             On error result of a file operation.
             @param error Error processing the request.
             @since ARP1.0
          */
          onError(error:IFileResultCallbackError);
          /**
             On correct result of a file operation.
             @param storageFile Reference to the resulting file.
             @since ARP1.0
          */
          onResult(storageFile:FileDescriptor);
          /**
             On partial result of a file operation, containing a warning.
             @param file    Reference to the offending file.
             @param warning Warning processing the request.
             @since ARP1.0
          */
          onWarning(file:FileDescriptor, warning:IFileResultCallbackWarning);
     }
     /**
        Interface for Managing the Messaging responses

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IMessagingCallback extends IBaseCallback {
          /**
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IMessagingCallbackError);
          /**
             This method is called on Result
             @param success true if sent;false otherwise
             @since ARP1.0
          */
          onResult(success:boolean);
          /**
             This method is called on Warning
             @param success true if sent;false otherwise
             @param warning returned by the platform
             @since ARP1.0
          */
          onWarning(success:boolean, warning:IMessagingCallbackWarning);
     }
     /**
        Interface for Managing the Network reachability callback result

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkReachabilityCallback extends IBaseCallback {
          /**
             No data received - error condition, not authorized .
             @param error Error value
             @since ARP1.0
          */
          onError(error:INetworkReachabilityCallbackError);
          /**
             Correct data received.
             @param reachable Indicates if the host is reachable
             @since ARP1.0
          */
          onResult(reachable:boolean);
          /**
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param reachable Indicates if the host is reachable
             @param warning   Warning value
             @since ARP1.0
          */
          onWarning(reachable:boolean, warning:INetworkReachabilityCallbackWarning);
     }
     /**
        Interface for Managing the Security result callback

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export interface ISecurityResultCallback extends IBaseCallback {
          /**
             No data received - error condition, not authorized .
             @param error Error values
             @since ARP1.0
          */
          onError(error:ISecurityResultCallbackError);
          /**
             Correct data received.
             @param keyValues key and values
             @since ARP1.0
          */
          onResult(keyValues:Array<SecureKeyPair>);
          /**
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param keyValues key and values
             @param warning   Warning values
             @since ARP1.0
          */
          onWarning(keyValues:Array<SecureKeyPair>, warning:ISecurityResultCallbackWarning);
     }
     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IServiceResultCallback extends IBaseCallback {
          /**
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IServiceResultCallbackError);
          /**
             This method is called on Result
             @param response data
             @since ARP1.0
          */
          onResult(response:ServiceResponse);
          /**
             This method is called on Warning
             @param response data
             @param warning  returned by the platform
             @since ARP1.0
          */
          onWarning(response:ServiceResponse, warning:IServiceResultCallbackWarning);
     }
     /**
        Interface for Advertising purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAds extends IBaseCommerce {
     }
     /**
        Interface for Managing the Store operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IStore extends IBaseCommerce {
     }
     /**
        Interface for Managing the Wallet operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IWallet extends IBaseCommerce {
     }
     /**
        Interface for Bluetooth purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBluetooth extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network information operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkInfo extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network naming operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkNaming extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network reachability operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkReachability extends IBaseCommunication {
          /**
             Whether there is connectivity to a host, via domain name or ip address, or not.
             @param host     domain name or ip address of host.
             @param callback Callback called at the end.
             @since ARP1.0
          */
          isNetworkReachable(host:string, callback:INetworkReachabilityCallback);
          /**
             Whether there is connectivity to an url of a service or not.
             @param url      to look for
             @param callback Callback called at the end
             @since ARP1.0
          */
          isNetworkServiceReachable(url:string, callback:INetworkReachabilityCallback);
     }
     /**
        Interface for Managing the Network status

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkStatus extends IBaseCommunication {
          /**
             Add the listener for network status changes of the app
             @param listener Listener with the result
             @since ARP1.0
          */
          addNetworkStatusListener(listener:INetworkStatusListener);
          /**
             Un-registers an existing listener from receiving network status events.
             @param listener Listener with the result
             @since ARP1.0
          */
          removeNetworkStatusListener(listener:INetworkStatusListener);
          /**
             Removes all existing listeners from receiving network status events.
             @since ARP1.0
          */
          removeNetworkStatusListeners();
     }
     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IService extends IBaseCommunication {
          /**
             Get a reference to a registered service by name.
             @param serviceName Name of service.
             @return A service, if registered, or null of the service does not exist.
             @since ARP1.0
          */
          getService(serviceName:string) : Service;
          /**
             Request async a service for an Url
             @param serviceRequest Service Request to invoke
             @param service        Service to call
             @param callback       Callback to execute with the result
             @since ARP1.0
          */
          invokeService(serviceRequest:ServiceRequest, service:Service, callback:IServiceResultCallback);
          /**
             Register a new service
             @param service to register
             @since ARP1.0
          */
          registerService(service:Service);
          /**
             Unregister all services.
             @since ARP1.0
          */
          unregisterServices();
          /**
             Unregister a service
             @param service to unregister
             @since ARP1.0
          */
          unregisterService(service:Service);
          /**
             Check whether a service by the given name is registered.
             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_serviceName(serviceName:string) : boolean;
          /**
             Check whether a service by the given name is registered.
             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_service(service:Service) : boolean;
     }
     /**
        Interface for Managing the Socket operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ISocket extends IBaseCommunication {
     }
     /**
        Interface for Managing the Telephony operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface ITelephony extends IBaseCommunication {
          /**
             Invoke a phone call
             @param number to call
             @return Status of the call
             @since ARP1.0
          */
          call(number:string) : ITelephonyStatus;
     }
     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICloud extends IBaseData {
     }
     /**
        Interface for Managing the DataStream operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IDataStream extends IBaseData {
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export interface IDatabase extends IBaseData {
          /**
             Creates a database on default path for every platform.
             @param callback Asynchronous callback
             @param database Database object to create
             @since ARP1.0
          */
          createDatabase(database:Database, callback:IDatabaseResultCallback);
          /**
             Creates a databaseTable inside a database for every platform.
             @param database      Database for databaseTable creating.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          createTable(database:Database, databaseTable:DatabaseTable, callback:IDatabaseTableResultCallback);
          /**
             Deletes a database on default path for every platform.
             @param database Database object to delete
             @param callback Asynchronous callback
             @since ARP1.0
          */
          deleteDatabase(database:Database, callback:IDatabaseResultCallback);
          /**
             Deletes a databaseTable inside a database for every platform.
             @param database      Database for databaseTable removal.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          deleteTable(database:Database, databaseTable:DatabaseTable, callback:IDatabaseTableResultCallback);
          /**
             Executes SQL statement into the given database. The replacements
should be passed as a parameter
             @param database     The database object reference.
             @param statement    SQL statement.
             @param replacements List of SQL statement replacements.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlStatement(database:Database, statement:string, replacements:Array<string>, callback:IDatabaseTableResultCallback);
          /**
             Executes SQL transaction (some statements chain) inside given database.
             @param database     The database object reference.
             @param statements   The statements to be executed during transaction.
             @param rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlTransactions(database:Database, statements:Array<string>, rollbackFlag:boolean, callback:IDatabaseTableResultCallback);
          /**
             Checks if database exists by given database name.
             @param database Database Object to check if exists
             @return True if exists, false otherwise
             @since ARP1.0
          */
          existsDatabase(database:Database) : boolean;
          /**
             Checks if databaseTable exists by given database name.
             @param database      Database for databaseTable consulting.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @return True if exists, false otherwise
             @since ARP1.0
          */
          existsTable(database:Database, databaseTable:DatabaseTable) : boolean;
     }
     /**
        Interface for Managing the File operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFile extends IBaseData {
          /**
             Determine whether the current file/folder can be read from.
             @param descriptor File descriptor of file or folder used for operation.
             @return True if the folder/file is readable, false otherwise.
             @since ARP1.0
          */
          canRead(descriptor:FileDescriptor) : boolean;
          /**
             Determine whether the current file/folder can be written to.
             @param descriptor File descriptor of file or folder used for operation.
             @return True if the folder/file is writable, false otherwise.
             @since ARP1.0
          */
          canWrite(descriptor:FileDescriptor) : boolean;
          /**
             Creates a file with the specified name.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of the operation.
             @since ARP1.0
          */
          create(descriptor:FileDescriptor, callback:IFileResultCallback);
          /**
             Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.
             @param descriptor File descriptor of file or folder used for operation.
             @param cascade Whether to delete sub-files and sub-folders.
             @return True if files (and sub-files and folders) whether deleted.
             @since ARP1.0
          */
          delete(descriptor:FileDescriptor, cascade:boolean) : boolean;
          /**
             Check whether the file/path exists.
             @param descriptor File descriptor of file or folder used for operation.
             @return True if the file exists in the filesystem, false otherwise.
             @since ARP1.0
          */
          exists(descriptor:FileDescriptor) : boolean;
          /**
             Loads the content of the file.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of the operation.
             @since ARP1.0
          */
          getContent(descriptor:FileDescriptor, callback:IFileDataLoadResultCallback);
          /**
             Returns the file storage type of the file
             @param descriptor File descriptor of file or folder used for operation.
             @return Storage Type file
             @since ARP1.0
          */
          getFileStorageType(descriptor:FileDescriptor) : IFileSystemStorageType;
          /**
             Returns the file type
             @param descriptor File descriptor of file or folder used for operation.
             @return Returns the file type of the file
             @since ARP1.0
          */
          getFileType(descriptor:FileDescriptor) : IFileSystemType;
          /**
             Returns the security type of the file
             @param descriptor File descriptor of file or folder used for operation.
             @return Security Level of the file
             @since ARP1.0
          */
          getSecurityType(descriptor:FileDescriptor) : IFileSystemSecurity;
          /**
             Check whether this is a path of a file.
             @param descriptor File descriptor of file or folder used for operation.
             @return true if this is a path to a folder/directory, false if this is a path to a file.
             @since ARP1.0
          */
          isDirectory(descriptor:FileDescriptor) : boolean;
          /**
             List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.
             @param descriptor File descriptor of file or folder used for operation.
             @param regex    Filter (eg. *.jpg, *.png, Fil*) name string.
             @param callback Result of operation.
             @since ARP1.0
          */
          listFilesForRegex(descriptor:FileDescriptor, regex:string, callback:IFileListResultCallback);
          /**
             List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of operation.
             @since ARP1.0
          */
          listFiles(descriptor:FileDescriptor, callback:IFileListResultCallback);
          /**
             Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
             @param descriptor File descriptor of file or folder used for operation.
             @param recursive Whether to create all parent path elements.
             @return True if the path was created, false otherwise (or it exists already).
             @since ARP1.0
          */
          mkDir(descriptor:FileDescriptor, recursive:boolean) : boolean;
          /**
             Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.
             @param source File descriptor of file or folder used for operation as source.
             @param destination File descriptor of file or folder used for operation as destination.
             @param createPath True to create the path if it does not already exist.
             @param callback   Result of the operation.
             @param overwrite  True to create the path if it does not already exist.
             @since ARP1.0
          */
          move(source:FileDescriptor, destination:FileDescriptor, createPath:boolean, overwrite:boolean, callback:IFileResultCallback);
          /**
             Sets the content of the file.
             @param descriptor File descriptor of file or folder used for operation.
             @param content  Binary content to store in the file.
             @param callback Result of the operation.
             @since ARP1.0
          */
          setContent(descriptor:FileDescriptor, content:Array<number>, callback:IFileDataStoreResultCallback);
     }
     /**
        Interface for Managing the File System operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFileSystem extends IBaseData {
          /**
             Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.
             @param parent Parent directory.
             @param name   Name of new file or directory.
             @return A reference to a new or existing location in the filesystem.
             @since ARP1.0
          */
          createFileDescriptor(parent:FileDescriptor, name:string) : FileDescriptor;
          /**
             Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.
             @return Path to the application's cache folder.
             @since ARP1.0
          */
          getApplicationCacheFolder() : FileDescriptor;
          /**
             Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.
             @return Path to the application's cloud storage folder.
             @since ARP1.0
          */
          getApplicationCloudFolder() : FileDescriptor;
          /**
             Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.
             @return Path to the application's documents folder.
             @since ARP1.0
          */
          getApplicationDocumentsFolder() : FileDescriptor;
          /**
             Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.
             @return Path to the application folder.
             @since ARP1.0
          */
          getApplicationFolder() : FileDescriptor;
          /**
             Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.
             @return Path to the application's protected storage folder.
             @since ARP1.0
          */
          getApplicationProtectedFolder() : FileDescriptor;
          /**
             Returns the file system dependent file separator.
             @return char with the directory/file separator.
             @since ARP1.0
          */
          getSeparator() : string;
          /**
             Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.
             @return Path to the application's documents folder.
             @since ARP1.0
          */
          getSystemExternalFolder() : FileDescriptor;
     }
     /**
        Interface for Managing the Internal Storage operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IInternalStorage extends IBaseData {
     }
     /**
        Interface for Managing the XML operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IXML extends IBaseData {
     }
     /**
        Interface defines the response methods of the acceleration operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAccelerationListener extends IBaseListener {
          /**
             No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
             @param error Error fired
             @since ARP1.0
          */
          onError(error:IAccelerationListenerError);
          /**
             Correct data received.
             @param acceleration Acceleration received
             @since ARP1.0
          */
          onResult(acceleration:Acceleration);
          /**
             Data received with warning - ie. Needs calibration.
             @param acceleration Acceleration received
             @param warning      Warning fired
             @since ARP1.0
          */
          onWarning(acceleration:Acceleration, warning:IAccelerationListenerWarning);
     }
     /**
        Interface for Managing the button  operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IButtonListener extends IBaseListener {
          /**
             No data received
             @param error occurred
             @since ARP1.0
          */
          onError(error:IButtonListenerError);
          /**
             Called on button pressed
             @param button pressed
             @since ARP1.0
          */
          onResult(button:Button);
          /**
             Data received with warning
             @param button  pressed
             @param warning happened
             @since ARP1.0
          */
          onWarning(button:Button, warning:IButtonListenerWarning);
     }
     /**
        Interface for Managing the Geolocation results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IGeolocationListener extends IBaseListener {
          /**
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:IGeolocationListenerError);
          /**
             Correct data received.
             @param geolocation Geolocation Bean
             @since ARP1.0
          */
          onResult(geolocation:Geolocation);
          /**
             Data received with warning - ie. HighDoP
             @param geolocation Geolocation Bean
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(geolocation:Geolocation, warning:IGeolocationListenerWarning);
     }
     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ILifecycleListener extends IBaseListener {
          /**
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:ILifecycleListenerError);
          /**
             Called when lifecycle changes somehow.
             @param lifecycle Lifecycle element
             @since ARP1.0
          */
          onResult(lifecycle:Lifecycle);
          /**
             Data received with warning
             @param lifecycle Lifecycle element
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(lifecycle:Lifecycle, warning:ILifecycleListenerWarning);
     }
     /**
        Interface for Managing the Network status listener events

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INetworkStatusListener extends IBaseListener {
          /**
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:INetworkStatusListenerError);
          /**
             Called when network connection changes somehow.
             @param network Change to this network.
             @since ARP1.0
          */
          onResult(network:ICapabilitiesNet);
          /**
             Status received with warning
             @param network Change to this network.
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(network:ICapabilitiesNet, warning:INetworkStatusListenerWarning);
     }
     /**
        Interface for Audio purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAudio extends IBaseMedia {
     }
     /**
        Interface for Managing the camera operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICamera extends IBaseMedia {
     }
     /**
        Interface for Managing the Imaging operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IImaging extends IBaseMedia {
     }
     /**
        Interface for Managing the Video operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IVideo extends IBaseMedia {
          /**
             Play url video stream
             @param url of the video
             @since ARP1.0
          */
          playStream(url:string);
     }
     /**
        Interface for Alarm purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAlarm extends IBaseNotification {
     }
     /**
        Interface for Managing the Notification operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INotification extends IBaseNotification {
     }
     /**
        Interface for Managing the Local Notifications operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INotificationLocal extends IBaseNotification {
     }
     /**
        Interface for Managing the Vibration operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IVibration extends IBaseNotification {
     }
     /**
        Interface for Managing the Calendar operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICalendar extends IBasePIM {
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IContact extends IBasePIM {
          /**
             Get the contact photo
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContactPhoto(contact:ContactUid, callback:IContactPhotoResultCallback);
          /**
             Get all the details of a contact according to its id
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContact(contact:ContactUid, callback:IContactResultCallback);
          /**
             Get marked fields of all contacts
             @param callback called for return
             @param fields   to get for each Contact
             @since ARP1.0
          */
          getContactsForFields(callback:IContactResultCallback, fields:Array<IContactFieldGroup>);
          /**
             Get marked fields of all contacts according to a filter
             @param callback called for return
             @param fields   to get for each Contact
             @param filter   to search for
             @since ARP1.0
          */
          getContactsWithFilter(callback:IContactResultCallback, fields:Array<IContactFieldGroup>, filter:Array<IContactFilter>);
          /**
             Get all contacts
             @param callback called for return
             @since ARP1.0
          */
          getContacts(callback:IContactResultCallback);
          /**
             Search contacts according to a term with a filter and send it to the callback
             @param term     string to search
             @param callback called for return
             @param filter   to search for
             @since ARP1.0
          */
          searchContactsWithFilter(term:string, callback:IContactResultCallback, filter:Array<IContactFilter>);
          /**
             Search contacts according to a term and send it to the callback
             @param term     string to search
             @param callback called for return
             @since ARP1.0
          */
          searchContacts(term:string, callback:IContactResultCallback);
          /**
             Set the contact photo
             @param contact  id to assign the photo
             @param pngImage photo as byte array
             @return true if set is successful;false otherwise
             @since ARP1.0
          */
          setContactPhoto(contact:ContactUid, pngImage:Array<number>) : boolean;
     }
     /**
        Interface for Managing the Mail operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IMail extends IBasePIM {
          /**
             Send an Email
             @param data     Payload of the email
             @param callback Result callback of the operation
             @since ARP1.0
          */
          sendEmail(data:Email, callback:IMessagingCallback);
     }
     /**
        Interface for Managing the Messaging operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IMessaging extends IBasePIM {
          /**
             Send text SMS
             @param number   to send
             @param text     to send
             @param callback with the result
             @since ARP1.0
          */
          sendSMS(number:string, text:string, callback:IMessagingCallback);
     }
     /**
        Interface for Barcode Reading purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBarcode extends IBaseReader {
     }
     /**
        Interface for Managing the NFC operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface INFC extends IBaseReader {
     }
     /**
        Interface for Managing the OCR operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IOCR extends IBaseReader {
     }
     /**
        Interface for Managing the QR Code operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IQRCode extends IBaseReader {
     }
     /**
        Interface for Managing the OAuth operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IOAuth extends IBaseSecurity {
     }
     /**
        Interface for Managing the OpenID operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IOpenId extends IBaseSecurity {
     }
     /**
        Interface for Managing the Security operations

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export interface ISecurity extends IBaseSecurity {
          /**
             Deletes from the device internal storage the entry/entries containing the specified key names.
             @param keys             Array with the key names to delete.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          deleteSecureKeyValuePairs(keys:Array<string>, publicAccessName:string, callback:ISecurityResultCallback);
          /**
             Retrieves from the device internal storage the entry/entries containing the specified key names.
             @param keys             Array with the key names to retrieve.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          getSecureKeyValuePairs(keys:Array<string>, publicAccessName:string, callback:ISecurityResultCallback);
          /**
             Returns if the device has been modified in anyhow
             @return true if the device has been modified; false otherwise
             @since ARP1.0
          */
          isDeviceModified() : boolean;
          /**
             Stores in the device internal storage the specified item/s.
             @param keyValues        Array containing the items to store on the device internal memory.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          setSecureKeyValuePairs(keyValues:Array<SecureKeyPair>, publicAccessName:string, callback:ISecurityResultCallback);
     }
     /**
        Interface defining methods about the acceleration sensor

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAcceleration extends IBaseSensor {
          /**
             Register a new listener that will receive acceleration events.
             @param listener to be registered.
             @since ARP1.0
          */
          addAccelerationListener(listener:IAccelerationListener);
          /**
             De-registers an existing listener from receiving acceleration events.
             @param listener to be registered.
             @since ARP1.0
          */
          removeAccelerationListener(listener:IAccelerationListener);
          /**
             Removed all existing listeners from receiving acceleration events.
             @since ARP1.0
          */
          removeAccelerationListeners();
     }
     /**
        Interface for managinf the Ambient Light

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IAmbientLight extends IBaseSensor {
     }
     /**
        Interface for Barometer management purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IBarometer extends IBaseSensor {
     }
     /**
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IGeolocation extends IBaseSensor {
          /**
             Register a new listener that will receive geolocation events.
             @param listener to be registered.
             @since ARP1.0
          */
          addGeolocationListener(listener:IGeolocationListener);
          /**
             De-registers an existing listener from receiving geolocation events.
             @param listener to be registered.
             @since ARP1.0
          */
          removeGeolocationListener(listener:IGeolocationListener);
          /**
             Removed all existing listeners from receiving geolocation events.
             @since ARP1.0
          */
          removeGeolocationListeners();
     }
     /**
        Interface for Managing the Giroscope operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IGyroscope extends IBaseSensor {
     }
     /**
        Interface for Managing the Magnetometer operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IMagnetometer extends IBaseSensor {
     }
     /**
        Interface for Managing the Proximity operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IProximity extends IBaseSensor {
     }
     /**
        Interface for Managing the Facebook operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IFacebook extends IBaseSocial {
     }
     /**
        Interface for Managing the Google Plus operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IGooglePlus extends IBaseSocial {
     }
     /**
        Interface for Managing the Linkedin operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ILinkedIn extends IBaseSocial {
     }
     /**
        Interface for Managing the RSS operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IRSS extends IBaseSocial {
     }
     /**
        Interface for Managing the Twitter operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ITwitter extends IBaseSocial {
     }
     /**
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICapabilities extends IBaseSystem {
          /**
             Determines whether a specific hardware button is supported for interaction.
             @param type Type of feature to check.
             @return true is supported, false otherwise.
             @since ARP1.0
          */
          hasButtonSupport(type:ICapabilitiesButton) : boolean;
          /**
             Determines whether a specific Communication capability is supported by
the device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasCommunicationSupport(type:ICapabilitiesCommunication) : boolean;
          /**
             Determines whether a specific Data capability is supported by the device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasDataSupport(type:ICapabilitiesData) : boolean;
          /**
             Determines whether a specific Media capability is supported by the
device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasMediaSupport(type:ICapabilitiesMedia) : boolean;
          /**
             Determines whether a specific Net capability is supported by the device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNetSupport(type:ICapabilitiesNet) : boolean;
          /**
             Determines whether a specific Notification capability is supported by the
device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNotificationSupport(type:ICapabilitiesNotification) : boolean;
          /**
             Determines whether a specific Sensor capability is supported by the
device.
             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasSensorSupport(type:ICapabilitiesSensor) : boolean;
     }
     /**
        Interface for Managing the Device operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IDevice extends IBaseSystem {
          /**
             Register a new listener that will receive button events.
             @param listener to be registered.
             @since ARP1.0
          */
          addButtonListener(listener:IButtonListener);
          /**
             Returns the device information for the current device executing the runtime.
             @return DeviceInfo for the current device.
             @since ARP1.0
          */
          getDeviceInfo() : DeviceInfo;
          /**
             Gets the current Locale for the device.
             @return The current Locale information.
             @since ARP1.0
          */
          getLocaleCurrent() : Locale;
          /**
             De-registers an existing listener from receiving button events.
             @param listener to be removed.
             @since ARP1.0
          */
          removeButtonListener(listener:IButtonListener);
          /**
             Removed all existing listeners from receiving button events.
             @since ARP1.0
          */
          removeButtonListeners();
     }
     /**
        Interface for Managing the Display operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IDisplay extends IBaseSystem {
     }
     /**
        Interface for Managing the OS operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IOS extends IBaseSystem {
          /**
             Returns the OSInfo for the current operating system.
             @return OSInfo with name, version and vendor of the OS.
             @since ARP1.0
          */
          getOSInfo() : OSInfo;
     }
     /**
        Interface for Managing the Runtime operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IRuntime extends IBaseSystem {
          /**
             Dismiss the current Application
             @since ARP1.0
          */
          dismissApplication();
          /**
             Whether the application dismiss the splash screen successfully or not
             @return true if the application has dismissed the splash screen;false otherwise
             @since ARP1.0
          */
          dismissSplashScreen() : boolean;
     }
     /**
        Interface for Managing the browser operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export interface IBrowser extends IBaseUI {
          /**
             Method for opening a URL like a link in the native default browser
             @param url Url to open
             @return The result of the operation
             @since ARP1.0
          */
          openExtenalBrowser(url:string) : boolean;
          /**
             Method for opening a browser embedded into the application in a modal window
             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return The result of the operation
             @since ARP1.0
          */
          openInternalBrowserModal(url:string, title:string, backButtonText:string) : boolean;
          /**
             Method for opening a browser embedded into the application
             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return The result of the operation
             @since ARP1.0
          */
          openInternalBrowser(url:string, title:string, backButtonText:string) : boolean;
     }
     /**
        Interface for Managing the Desktop operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IDesktop extends IBaseUI {
     }
     /**
        Interface for Managing the Map operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IMap extends IBaseUI {
     }
     /**
        Interface for Managing the UI operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IUI extends IBaseUI {
     }
     /**
        Interface for Managing the Compression operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICompression extends IBaseUtil {
     }
     /**
        Interface for Managing the Concurrent operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface IConcurrent extends IBaseUtil {
     }
     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ICrypto extends IBaseUtil {
     }
     /**
        Interface for Managing the Logging operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export interface ILogging extends IBaseUtil {
          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.
             @param level    Log level
             @param category Category/tag name to identify/filter the log.
             @param message  Message to be logged
             @since ARP1.0
          */
          log_level_category_message(level:ILoggingLogLevel, category:string, message:string);
          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.
             @param level   Log level
             @param message Message to be logged
             @since ARP1.0
          */
          log_level_message(level:ILoggingLogLevel, message:string);
     }
     /**
        Interface for Managing the Timer operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export interface ITimer extends IBaseUtil {
     }
     /**
        Structure representing a native response to the HTML5

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIBean {
          /**
             Default constructor

             @since ARP1.0
          */
          constructor() {
          }
     }
     /**
        Structure representing a HTML5 request to the native API.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIRequest {
          /**
             Identifier of callback or listener for async operations.
          */
          asyncId : number;
          /**
             String representing the bridge type to obtain.
          */
          bridgeType : string;
          /**
             String representing the method name to call.
          */
          methodName : string;
          /**
             Parameters of the request as JSON formatted strings.
          */
          parameters : Array<string>;
          /**
             Constructor with all the parameters

             @param bridgeType Name of the bridge to be invoked.
             @param methodName Name of the method
             @param parameters Array of parameters as JSON formatted strings.
             @param asyncId    Id of callback or listener or zero if none for synchronous calls.
             @since ARP1.0
          */
          constructor(bridgeType: string, methodName: string, parameters: Array<string>, asyncId: number) {
               this.bridgeType = bridgeType;
               this.methodName = methodName;
               this.parameters = parameters;
               this.asyncId = asyncId;
          }
          /**
             Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

             @return long with the unique id of the callback or listener, or zero if there is no associated async event.
          */
          getAsyncId() : number {
               return this.asyncId;
          }

          /**
             Sets the callback or listener id to the request.

             @param asyncId The unique id of the callback or listener.
          */
          setAsyncId(asyncId: number) {
               this.asyncId = asyncId;
          }

          /**
             Bridge Type Getter

             @return Bridge Type
             @since ARP1.0
          */
          getBridgeType() : string {
               return this.bridgeType;
          }

          /**
             Bridge Type Setter

             @param bridgeType Bridge Type
             @since ARP1.0
          */
          setBridgeType(bridgeType: string) {
               this.bridgeType = bridgeType;
          }

          /**
             Method name Getter

             @return Method name
             @since ARP1.0
          */
          getMethodName() : string {
               return this.methodName;
          }

          /**
             Method name Setter

             @param methodName Method name
             @since ARP1.0
          */
          setMethodName(methodName: string) {
               this.methodName = methodName;
          }

          /**
             Parameters Getter

             @return Parameters
             @since ARP1.0
          */
          getParameters() : Array<string> {
               return this.parameters;
          }

          /**
             Parameters Setter

             @param parameters Parameters, JSON formatted strings of objects.
             @since ARP1.0
          */
          setParameters(parameters: Array<string>) {
               this.parameters = parameters;
          }

     }
     /**
        Structure representing the data of a single acceleration reading.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class Acceleration extends APIBean {
          /**
             Timestamp of the acceleration reading.
          */
          timestamp : number;
          /**
             X-axis component of the acceleration.
          */
          x : number;
          /**
             Y-axis component of the acceleration.
          */
          y : number;
          /**
             Z-axis component of the acceleration.
          */
          z : number;
          /**
             Constructor with fields

             @param x         X Coordinate
             @param y         Y Coordinate
             @param z         Z Coordinate
             @param timestamp Timestamp
             @since ARP1.0
          */
          constructor(x: number, y: number, z: number, timestamp: number) {
               super();
               this.x = x;
               this.y = y;
               this.z = z;
               this.timestamp = timestamp;
          }
          /**
             Timestamp Getter

             @return Timestamp
             @since ARP1.0
          */
          getTimestamp() : number {
               return this.timestamp;
          }

          /**
             Timestamp Setter

             @param timestamp Timestamp
             @since ARP1.0
          */
          setTimestamp(timestamp: number) {
               this.timestamp = timestamp;
          }

          /**
             X Coordinate Getter

             @return X-axis component of the acceleration.
             @since ARP1.0
          */
          getX() : number {
               return this.x;
          }

          /**
             X Coordinate Setter

             @param x X-axis component of the acceleration.
             @since ARP1.0
          */
          setX(x: number) {
               this.x = x;
          }

          /**
             Y Coordinate Getter

             @return Y-axis component of the acceleration.
             @since ARP1.0
          */
          getY() : number {
               return this.y;
          }

          /**
             Y Coordinate Setter

             @param y Y-axis component of the acceleration.
             @since ARP1.0
          */
          setY(y: number) {
               this.y = y;
          }

          /**
             Z Coordinate Getter

             @return Z-axis component of the acceleration.
             @since ARP1.0
          */
          getZ() : number {
               return this.z;
          }

          /**
             Z Coordinate Setter

             @param z Z Coordinate
             @since ARP1.0
          */
          setZ(z: number) {
               this.z = z;
          }

     }
     /**
        Structure representing the a physical or logical button on a device.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Button extends APIBean {
          /**
             Button type
          */
          type : ICapabilitiesButton;
          /**
             Constructor with fields

             @param type Button type.
             @since ARP1.0
          */
          constructor(type: ICapabilitiesButton) {
               super();
               this.type = type;
          }
          /**
             Returns the button type

             @return type Button type.
             @since ARP1.0
          */
          getType() : ICapabilitiesButton {
               return this.type;
          }

          /**
             Setter for the button type

             @param type Button Type
             @since ARP1.0
          */
          setType(type: ICapabilitiesButton) {
               this.type = type;
          }

     }
     /**
        Structure representing the address data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactAddress extends APIBean {
          /**
             The address type
          */
          type : ContactAddressType;
          /**
             The Contact address
          */
          address : string;
          /**
             Constructor with fields

             @param address Address data.
             @param type    Address type.
             @since ARP1.0
          */
          constructor(address: string, type: ContactAddressType) {
               super();
               this.address = address;
               this.type = type;
          }
          /**
             Returns the type of the address

             @return AddressType Address type.
             @since ARP1.0
          */
          getType() : ContactAddressType {
               return this.type;
          }

          /**
             Set the address type

             @param type Address type.
             @since ARP1.0
          */
          setType(type: ContactAddressType) {
               this.type = type;
          }

          /**
             Returns the Contact address

             @return address Address data.
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             Set the address of the Contact

             @param address Address data.
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

     }
     /**
        Structure representing the email data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactEmail extends APIBean {
          /**
             The type of the email
          */
          type : ContactEmailType;
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
          /**
             Constructor used by the implementation

             @param type    Type of the email
             @param primary Is email primary
             @param email   Email of the contact
             @since ARP1.0
          */
          constructor(type: ContactEmailType, primary: boolean, email: string) {
               super();
               this.type = type;
               this.primary = primary;
               this.email = email;
          }
          /**
             Returns the type of the email

             @return EmailType
             @since ARP1.0
          */
          getType() : ContactEmailType {
               return this.type;
          }

          /**
             Set the type of the email

             @param type Type of the email
             @since ARP1.0
          */
          setType(type: ContactEmailType) {
               this.type = type;
          }

          /**
             Returns the email of the Contact

             @return email
             @since ARP1.0
          */
          getEmail() : string {
               return this.email;
          }

          /**
             Set the email of the Contact

             @param email Email of the contact
             @since ARP1.0
          */
          setEmail(email: string) {
               this.email = email;
          }

          /**
             Returns if the email is primary

             @return true if the email is primary; false otherwise
             @since ARP1.0
          */
          getPrimary() : boolean {
               return this.primary;
          }

          /**
             Set if the email

             @param primary true if the email is primary; false otherwise
             @since ARP1.0
          */
          setPrimary(primary: boolean) {
               this.primary = primary;
          }

     }
     /**
        Structure representing the personal info data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactPersonalInfo extends APIBean {
          /**
             The title of the Contact
          */
          title : ContactPersonalInfoTitle;
          /**
             The last name of the Contact
          */
          lastName : string;
          /**
             The middle name of the Contact if it proceeds
          */
          middleName : string;
          /**
             The name of the Contact
          */
          name : string;
          /**
             The Constructor used by the implementation

             @param name       of the Contact
             @param middleName of the Contact
             @param lastName   of the Contact
             @param title      of the Contact
             @since ARP1.0
          */
          constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle) {
               super();
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }
          /**
             Returns the title of the Contact

             @return Title
             @since ARP1.0
          */
          getTitle() : ContactPersonalInfoTitle {
               return this.title;
          }

          /**
             Set the Title of the Contact

             @param title of the Contact
             @since ARP1.0
          */
          setTitle(title: ContactPersonalInfoTitle) {
               this.title = title;
          }

          /**
             Returns the last name of the Contact

             @return lastName
             @since ARP1.0
          */
          getLastName() : string {
               return this.lastName;
          }

          /**
             Set the last name of the Contact

             @param lastName of the Contact
             @since ARP1.0
          */
          setLastName(lastName: string) {
               this.lastName = lastName;
          }

          /**
             Returns the middle name of the Contact

             @return middelName
             @since ARP1.0
          */
          getMiddleName() : string {
               return this.middleName;
          }

          /**
             Set the middle name of the Contact

             @param middleName of the Contact
             @since ARP1.0
          */
          setMiddleName(middleName: string) {
               this.middleName = middleName;
          }

          /**
             Returns the name of the Contact

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name of the Contact

             @param name of the Contact
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the phone data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactPhone extends APIBean {
          /**
             The phone number phoneType
          */
          phoneType : ContactPhoneType;
          /**
             The phone number
          */
          phone : string;
          /**
             Constructor used by implementation to set the contact Phone

             @param phone     Phone number
             @param phoneType Type of Phone number
             @since ARP1.0
          */
          constructor(phone: string, phoneType: ContactPhoneType) {
               super();
               this.phone = phone;
               this.phoneType = phoneType;
          }
          /**
             Returns the phone phoneType

             @return phoneType
             @since ARP1.0
          */
          getPhoneType() : ContactPhoneType {
               return this.phoneType;
          }

          /**
             Set the phoneType of the phone number

             @param phoneType Type of Phone number
             @since ARP1.0
          */
          setPhoneType(phoneType: ContactPhoneType) {
               this.phoneType = phoneType;
          }

          /**
             Returns the phone number

             @return phone number
             @since ARP1.0
          */
          getPhone() : string {
               return this.phone;
          }

          /**
             Set the phone number

             @param phone number
             @since ARP1.0
          */
          setPhone(phone: string) {
               this.phone = phone;
          }

     }
     /**
        Structure representing the professional info data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactProfessionalInfo extends APIBean {
          /**
             The company of the job
          */
          company : string;
          /**
             The job description
          */
          jobDescription : string;
          /**
             The job title
          */
          jobTitle : string;
          /**
             Constructor used by implementation to set the ContactProfessionalInfo.

             @param jobTitle       The job title
             @param jobDescription The job description
             @param company        The company of the job
             @since ARP1.0
          */
          constructor(jobTitle: string, jobDescription: string, company: string) {
               super();
               this.jobTitle = jobTitle;
               this.jobDescription = jobDescription;
               this.company = company;
          }
          /**
             Returns the company of the job

             @return company
             @since ARP1.0
          */
          getCompany() : string {
               return this.company;
          }

          /**
             Set the company of the job

             @param company The company of the job
             @since ARP1.0
          */
          setCompany(company: string) {
               this.company = company;
          }

          /**
             Returns the description of the job

             @return description
             @since ARP1.0
          */
          getJobDescription() : string {
               return this.jobDescription;
          }

          /**
             Set the description of the job

             @param jobDescription The job description
             @since ARP1.0
          */
          setJobDescription(jobDescription: string) {
               this.jobDescription = jobDescription;
          }

          /**
             Returns the title of the job

             @return title
             @since ARP1.0
          */
          getJobTitle() : string {
               return this.jobTitle;
          }

          /**
             Set the title of the job

             @param jobTitle The job title
             @since ARP1.0
          */
          setJobTitle(jobTitle: string) {
               this.jobTitle = jobTitle;
          }

     }
     /**
        Structure representing the social data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactSocial extends APIBean {
          /**
             The social network
          */
          socialNetwork : ContactSocialNetwork;
          /**
             The profileUrl
          */
          profileUrl : string;
          /**
             Constructor used by the implementation

             @param socialNetwork of the profile
             @param profileUrl    of the user
             @since ARP1.0
          */
          constructor(socialNetwork: ContactSocialNetwork, profileUrl: string) {
               super();
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }
          /**
             Returns the social network

             @return socialNetwork
             @since ARP1.0
          */
          getSocialNetwork() : ContactSocialNetwork {
               return this.socialNetwork;
          }

          /**
             Set the social network

             @param socialNetwork of the profile
             @since ARP1.0
          */
          setSocialNetwork(socialNetwork: ContactSocialNetwork) {
               this.socialNetwork = socialNetwork;
          }

          /**
             Returns the profile url of the user

             @return profileUrl
             @since ARP1.0
          */
          getProfileUrl() : string {
               return this.profileUrl;
          }

          /**
             Set the profile url of the iser

             @param profileUrl of the user
             @since ARP1.0
          */
          setProfileUrl(profileUrl: string) {
               this.profileUrl = profileUrl;
          }

     }
     /**
        Structure representing the assigned tags data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactTag extends APIBean {
          /**
             The tagName of the Tag
          */
          tagName : string;
          /**
             The tagValue of the Tag
          */
          tagValue : string;
          /**
             Constructor used by the implementation

             @param tagValue Value of the tag
             @param tagName  Name of the tag
             @since ARP1.0
          */
          constructor(tagName: string, tagValue: string) {
               super();
               this.tagName = tagName;
               this.tagValue = tagValue;
          }
          /**
             Returns the tagName of the Tag

             @return tagName
             @since ARP1.0
          */
          getTagName() : string {
               return this.tagName;
          }

          /**
             Set the tagName of the Tag

             @param tagName Name of the tag
             @since ARP1.0
          */
          setTagName(tagName: string) {
               this.tagName = tagName;
          }

          /**
             Returns the tagValue of the Tag

             @return tagValue
             @since ARP1.0
          */
          getTagValue() : string {
               return this.tagValue;
          }

          /**
             Set the tagValue of the Tag

             @param tagValue Value of the tag
             @since ARP1.0
          */
          setTagValue(tagValue: string) {
               this.tagValue = tagValue;
          }

     }
     /**
        Structure representing the internal unique identifier data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactUid extends APIBean {
          /**
             The id of the Contact
          */
          contactId : string;
          /**
             Constructor used by implementation to set the Contact id.

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          constructor(contactId: string) {
               super();
               this.contactId = contactId;
          }
          /**
             Returns the contact id

             @return Contactid Internal unique contact id.
             @since ARP1.0
          */
          getContactId() : string {
               return this.contactId;
          }

          /**
             Set the id of the Contact

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          setContactId(contactId: string) {
               this.contactId = contactId;
          }

     }
     /**
        Structure representing the website data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactWebsite extends APIBean {
          /**
             The url of the website
          */
          url : string;
          /**
             Constructor used by the implementation

             @param url Url of the website
             @since ARP1.0
          */
          constructor(url: string) {
               super();
               this.url = url;
          }
          /**
             Returns the url of the website

             @return website url
             @since ARP1.0
          */
          getUrl() : string {
               return this.url;
          }

          /**
             Set the url of the website

             @param url Url of the website
             @since ARP1.0
          */
          setUrl(url: string) {
               this.url = url;
          }

     }
     /**
        Structure representing a database reference.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class Database extends APIBean {
          /**
             Indicates if database was created or needs to be created as Compressed.
          */
          compress : boolean;
          /**
             Database Name (name of the .db local file).
          */
          name : string;
          /**
             Constructor using fields.

             @param name     Name of the DatabaseTable.
             @param compress Compression enabled.
             @since ARP1.0
          */
          constructor(name: string, compress: boolean) {
               super();
               this.name = name;
               this.compress = compress;
          }
          /**
             Returns if the table is compressed

             @return Compression enabled
             @since ARP1.0
          */
          getCompress() : boolean {
               return this.compress;
          }

          /**
             Sets if the table is compressed or not.

             @param compress Compression enabled
             @since ARP1.0
          */
          setCompress(compress: boolean) {
               this.compress = compress;
          }

          /**
             Returns the name.

             @return The name of the table.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the table.

             @param name The name of the table.
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the column specification of a data column.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseColumn extends APIBean {
          /**
             Name of the column
          */
          name : string;
          /**
             Constructor with fields

             @param name Name of the column
             @since ARP1.0
          */
          constructor(name: string) {
               super();
               this.name = name;
          }
          /**
             Returns the name of the column.

             @return The name of the column.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the column.

             @param name The name of the column.
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing a row for a data table.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseRow extends APIBean {
          /**
             The values of the row.
          */
          values : Array<string>;
          /**
             Constructor for implementation using.

             @param values The values of the row
             @since ARP1.0
          */
          constructor(values: Array<string>) {
               super();
               this.values = values;
          }
          /**
             Returns the values of the row.

             @return The values of the row.
             @since ARP1.0
          */
          getValues() : Array<string> {
               return this.values;
          }

          /**
             Sets the values of the row.

             @param values The values of the row.
             @since ARP1.0
          */
          setValues(values: Array<string>) {
               this.values = values;
          }

     }
     /**
        Represents a data table composed of databaseColumns and databaseRows.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseTable extends APIBean {
          /**
             Number of databaseColumns.
          */
          columnCount : number;
          /**
             Definition of databaseColumns.
          */
          databaseColumns : Array<DatabaseColumn>;
          /**
             Rows of the table containing the data.
          */
          databaseRows : Array<DatabaseRow>;
          /**
             Name of the table.
          */
          name : string;
          /**
             Number of databaseRows.
          */
          rowCount : number;
          /**
             Constructor using fields

             @param name            The name of the table
             @param columnCount     The number of databaseColumns
             @param rowCount        The number of databaseRows
             @param databaseColumns The databaseColumns of the table
             @param databaseRows    The databaseRows of the table
             @since ARP1.0
          */
          constructor(name: string, columnCount: number, rowCount: number, databaseColumns: Array<DatabaseColumn>, databaseRows: Array<DatabaseRow>) {
               super();
               this.name = name;
               this.columnCount = columnCount;
               this.rowCount = rowCount;
               this.databaseColumns = databaseColumns;
               this.databaseRows = databaseRows;
          }
          /**
             Get the number of databaseColumns

             @return The number of databaseColumns
             @since ARP1.0
          */
          getColumnCount() : number {
               return this.columnCount;
          }

          /**
             Sets the number of databaseColumns

             @param columnCount The number of databaseColumns
             @since ARP1.0
          */
          setColumnCount(columnCount: number) {
               this.columnCount = columnCount;
          }

          /**
             Get the databaseColumns

             @return The databaseColumns
             @since ARP1.0
          */
          getDatabaseColumns() : Array<DatabaseColumn> {
               return this.databaseColumns;
          }

          /**
             Sets the databaseColumns of the table

             @param databaseColumns The databaseColumns of the table
             @since ARP1.0
          */
          setDatabaseColumns(databaseColumns: Array<DatabaseColumn>) {
               this.databaseColumns = databaseColumns;
          }

          /**
             Get the databaseRows of the table

             @return The databaseRows of the table
             @since ARP1.0
          */
          getDatabaseRows() : Array<DatabaseRow> {
               return this.databaseRows;
          }

          /**
             Sets the databaseRows of the table

             @param databaseRows The databaseRows of the table
             @since ARP1.0
          */
          setDatabaseRows(databaseRows: Array<DatabaseRow>) {
               this.databaseRows = databaseRows;
          }

          /**
             Returns the name of the table

             @return The name of the table
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the table

             @param name The name of the table
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Get the number of databaseRows

             @return The number of databaseRows
             @since ARP1.0
          */
          getRowCount() : number {
               return this.rowCount;
          }

          /**
             Sets the number of databaseRows

             @param rowCount The number of databaseRows
             @since ARP1.0
          */
          setRowCount(rowCount: number) {
               this.rowCount = rowCount;
          }

     }
     /**
        Structure representing the basic device information.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class DeviceInfo extends APIBean {
          /**
             Model of device - equivalent to device release or version.
          */
          model : string;
          /**
             Name of device - equivalent to brand.
          */
          name : string;
          /**
             Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          uuid : string;
          /**
             Vendor of the device hardware.
          */
          vendor : string;
          /**
             Constructor for the implementation of the platform.

             @param name   or brand of the device.
             @param model  of the device.
             @param vendor of the device.
             @param uuid   unique* identifier (* platform dependent).
             @since ARP1.0
          */
          constructor(name: string, model: string, vendor: string, uuid: string) {
               super();
               this.name = name;
               this.model = model;
               this.vendor = vendor;
               this.uuid = uuid;
          }
          /**
             Returns the model of the device.

             @return String with the model of the device.
             @since ARP1.0
          */
          getModel() : string {
               return this.model;
          }

          /**
             Sets Model of device - equivalent to device release or version.

             @param model Model of device - equivalent to device release or version.
          */
          setModel(model: string) {
               this.model = model;
          }

          /**
             Returns the name of the device.

             @return String with device name.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets Name of device - equivalent to brand.

             @param name Name of device - equivalent to brand.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the platform dependent UUID of the device.

             @return String with the 128-bit device identifier.
             @since ARP1.0
          */
          getUuid() : string {
               return this.uuid;
          }

          /**
             Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

             @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          setUuid(uuid: string) {
               this.uuid = uuid;
          }

          /**
             Returns the vendor of the device.

             @return String with the vendor name.
             @since ARP1.0
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             Sets Vendor of the device hardware.

             @param vendor Vendor of the device hardware.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

     }
     /**
        Structure representing the data elements of an email.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Email extends APIBean {
          /**
             Array of Email Blind Carbon Copy recipients
          */
          bccRecipients : Array<EmailAddress>;
          /**
             Array of Email Carbon Copy recipients
          */
          ccRecipients : Array<EmailAddress>;
          /**
             Array of attatchments
          */
          emailAttachmentData : Array<EmailAttachmentData>;
          /**
             Message body
          */
          messageBody : string;
          /**
             Message body mime type
          */
          messageBodyMimeType : string;
          /**
             Subject of the email
          */
          subject : string;
          /**
             Array of Email recipients
          */
          toRecipients : Array<EmailAddress>;
          /**
             Constructor used by the implementation

             @param toRecipients        array of recipients
             @param ccRecipients        array of cc recipients
             @param bccRecipients       array of bcc recipients
             @param emailAttachmentData array of attatchments
             @param messageBody         body of the email
             @param messageBodyMimeType mime type of the body
             @param subject             of the email
             @since ARP1.0
          */
          constructor(toRecipients: Array<EmailAddress>, ccRecipients: Array<EmailAddress>, bccRecipients: Array<EmailAddress>, emailAttachmentData: Array<EmailAttachmentData>, messageBody: string, messageBodyMimeType: string, subject: string) {
               super();
               this.toRecipients = toRecipients;
               this.ccRecipients = ccRecipients;
               this.bccRecipients = bccRecipients;
               this.emailAttachmentData = emailAttachmentData;
               this.messageBody = messageBody;
               this.messageBodyMimeType = messageBodyMimeType;
               this.subject = subject;
          }
          /**
             Returns the array of recipients

             @return bccRecipients array of bcc recipients
             @since ARP1.0
          */
          getBccRecipients() : Array<EmailAddress> {
               return this.bccRecipients;
          }

          /**
             Set the array of recipients

             @param bccRecipients array of bcc recipients
             @since ARP1.0
          */
          setBccRecipients(bccRecipients: Array<EmailAddress>) {
               this.bccRecipients = bccRecipients;
          }

          /**
             Returns the array of recipients

             @return ccRecipients array of cc recipients
             @since ARP1.0
          */
          getCcRecipients() : Array<EmailAddress> {
               return this.ccRecipients;
          }

          /**
             Set the array of recipients

             @param ccRecipients array of cc recipients
             @since ARP1.0
          */
          setCcRecipients(ccRecipients: Array<EmailAddress>) {
               this.ccRecipients = ccRecipients;
          }

          /**
             Returns an array of attachments

             @return emailAttachmentData array with the email attachments
             @since ARP1.0
          */
          getEmailAttachmentData() : Array<EmailAttachmentData> {
               return this.emailAttachmentData;
          }

          /**
             Set the email attachment data array

             @param emailAttachmentData array of email attatchments
             @since ARP1.0
          */
          setEmailAttachmentData(emailAttachmentData: Array<EmailAttachmentData>) {
               this.emailAttachmentData = emailAttachmentData;
          }

          /**
             Returns the message body of the email

             @return message Body string of the email
             @since ARP1.0
          */
          getMessageBody() : string {
               return this.messageBody;
          }

          /**
             Set the message body of the email

             @param messageBody message body of the email
             @since ARP1.0
          */
          setMessageBody(messageBody: string) {
               this.messageBody = messageBody;
          }

          /**
             Returns the myme type of the message body

             @return mime type string of the message boddy
             @since ARP1.0
          */
          getMessageBodyMimeType() : string {
               return this.messageBodyMimeType;
          }

          /**
             Set the mime type for the message body

             @param messageBodyMimeType type of the body message
             @since ARP1.0
          */
          setMessageBodyMimeType(messageBodyMimeType: string) {
               this.messageBodyMimeType = messageBodyMimeType;
          }

          /**
             Returns the subject of the email

             @return subject string of the email
             @since ARP1.0
          */
          getSubject() : string {
               return this.subject;
          }

          /**
             Set the subject of the email

             @param subject of the email
             @since ARP1.0
          */
          setSubject(subject: string) {
               this.subject = subject;
          }

          /**
             Returns the array of recipients

             @return toRecipients array of recipients
             @since ARP1.0
          */
          getToRecipients() : Array<EmailAddress> {
               return this.toRecipients;
          }

          /**
             Set the array of recipients

             @param toRecipients array of recipients
             @since ARP1.0
          */
          setToRecipients(toRecipients: Array<EmailAddress>) {
               this.toRecipients = toRecipients;
          }

     }
     /**
        Structure representing the data elements of an email addressee.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class EmailAddress extends APIBean {
          /**
             The Email address
          */
          address : string;
          /**
             Constructor used by implementation

             @param address of the Email
             @since ARP1.0
          */
          constructor(address: string) {
               super();
               this.address = address;
          }
          /**
             Returns the email address

             @return address of the Email
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             Set the Email address

             @param address of the Email
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

     }
     /**
        Structure representing the binary attachment data.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class EmailAttachmentData extends APIBean {
          /**
             The raw data for the current file attachment (byte array)
          */
          data : Array<number>;
          /**
             The name of the current file attachment
          */
          fileName : string;
          /**
             The mime type of the current attachment
          */
          mimeType : string;
          /**
             The relative path where the contents for the attachment file could be located.
          */
          referenceUrl : string;
          /**
             The data size (in bytes) of the current file attachment
          */
          size : number;
          /**
             Constructor with fields

             @param data         raw data of the file attachment
             @param size         size of the file attachment
             @param fileName     name of the file attachment
             @param mimeType     mime type of the file attachment
             @param referenceUrl relative url of the file attachment
             @since ARP1.0
          */
          constructor(data: Array<number>, size: number, fileName: string, mimeType: string, referenceUrl: string) {
               super();
               this.data = data;
               this.size = size;
               this.fileName = fileName;
               this.mimeType = mimeType;
               this.referenceUrl = referenceUrl;
          }
          /**
             Returns the raw data in byte[]

             @return data Octet-binary content of the attachment payload.
             @since ARP1.0
          */
          getData() : Array<number> {
               return this.data;
          }

          /**
             Set the data of the attachment as a byte[]

             @param data Sets the octet-binary content of the attachment.
             @since ARP1.0
          */
          setData(data: Array<number>) {
               this.data = data;
          }

          /**
             Returns the filename of the attachment

             @return fileName Name of the attachment.
             @since ARP1.0
          */
          getFileName() : string {
               return this.fileName;
          }

          /**
             Set the name of the file attachment

             @param fileName Name of the attachment.
             @since ARP1.0
          */
          setFileName(fileName: string) {
               this.fileName = fileName;
          }

          /**
             Returns the mime type of the attachment

             @return mimeType
             @since ARP1.0
          */
          getMimeType() : string {
               return this.mimeType;
          }

          /**
             Set the mime type of the attachment

             @param mimeType Mime-type of the attachment.
             @since ARP1.0
          */
          setMimeType(mimeType: string) {
               this.mimeType = mimeType;
          }

          /**
             Returns the absolute url of the file attachment

             @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          getReferenceUrl() : string {
               return this.referenceUrl;
          }

          /**
             Set the absolute url of the attachment

             @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          setReferenceUrl(referenceUrl: string) {
               this.referenceUrl = referenceUrl;
          }

          /**
             Returns the size of the attachment as a long

             @return size Length in bytes of the octet-binary content.
             @since ARP1.0
          */
          getSize() : number {
               return this.size;
          }

          /**
             Set the size of the attachment as a long

             @param size Length in bytes of the octet-binary content ( should be same as data array length.)
             @since ARP1.0
          */
          setSize(size: number) {
               this.size = size;
          }

     }
     /**
        Implementation of FileDescriptor bean.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class FileDescriptor extends APIBean {
          dateCreated : number;
          dateModified : number;
          name : string;
          path : string;
          pathAbsolute : string;
          size : number;
          /**
             Default constructor.
          */
          constructor() {
               super();
          }
          /**
             Returns the milliseconds passed since 1/1/1970 since the file was created.

             @return Timestamp in milliseconds.
             @since ARP1.0
          */
          getDateCreated() : number {
               return this.dateCreated;
          }

          /**
             Sets the creation timestamp in milliseconds. Used internally.

             @param dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
          */
          setDateCreated(dateCreated: number) {
               this.dateCreated = dateCreated;
          }

          /**
             Returns the milliseconds passed since 1/1/1970 since the file was modified.

             @return Timestamp in milliseconds.
             @since ARP1.0
          */
          getDateModified() : number {
               return this.dateModified;
          }

          /**
             Sets the file or folder modification timestamp in milliseconds. Used internally.

             @param dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
          */
          setDateModified(dateModified: number) {
               this.dateModified = dateModified;
          }

          /**
             Returns the name of the file if the reference is a file or the last path element of the folder.

             @return The name of the file.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the file. Used internally.

             @param name Name of the file or last folder path element.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the path element of the file or folder (excluding the last path element if it's a directory).

             @return The path to the file.
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Sets the path of the file or folder. Used internally.

             @param path The path element of the file or folder.
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the resolved absolute path elements of the file and/or folders (including the last path element).

             @return The absolute path to the file.
             @since ARP1.0
          */
          getPathAbsolute() : string {
               return this.pathAbsolute;
          }

          /**
             Sets the absolute path of the file or folder. Used internally.

             @param pathAbsolute String with the absolute path of file or folder.
          */
          setPathAbsolute(pathAbsolute: string) {
               this.pathAbsolute = pathAbsolute;
          }

          /**
             Returns the size in bytes of the file or -1 if the reference is a folder.

             @return Size in bytes of file.
             @since ARP1.0
          */
          getSize() : number {
               return this.size;
          }

          /**
             Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
doesn't exist, this will be -1. Used internally.

             @param size The size in bytes of the file.
          */
          setSize(size: number) {
               this.size = size;
          }

     }
     /**
        Structure representing the data a single geolocation reading.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Geolocation extends APIBean {
          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          altitude : number;
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          latitude : number;
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          longitude : number;
          /**
             Timestamp of the geolocation reading.
          */
          timestamp : number;
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          xDoP : number;
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          yDoP : number;
          /**
             Constructor with parameters

             @param latitude  Latitude of the measurement
             @param longitude Longitude of the measurement
             @param altitude  Altitude of the measurement
             @param xDoP      Dilution of precision on the X measurement
             @param yDoP      Dilution of precision on the Y measurement
             @param timestamp Timestamp of the measurement
             @since ARP1.0
          */
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number, timestamp: number) {
               super();
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
               this.timestamp = timestamp;
          }
          /**
             Returns altitude in meters

             @return Altitude of the measurement
             @since ARP1.0
          */
          getAltitude() : number {
               return this.altitude;
          }

          /**
             Set altitude in meters

             @param altitude Altitude of the measurement
             @since ARP1.0
          */
          setAltitude(altitude: number) {
               this.altitude = altitude;
          }

          /**
             Returns the latitude in degrees

             @return Latitude of the measurement
             @since ARP1.0
          */
          getLatitude() : number {
               return this.latitude;
          }

          /**
             Set the latitude in degrees

             @param latitude Latitude of the measurement
             @since ARP1.0
          */
          setLatitude(latitude: number) {
               this.latitude = latitude;
          }

          /**
             Returns the longitude in degrees

             @return Longitude of the measurement
             @since ARP1.0
          */
          getLongitude() : number {
               return this.longitude;
          }

          /**
             Returns the latitude in degrees

             @param longitude Longitude of the measurement
             @since ARP1.0
          */
          setLongitude(longitude: number) {
               this.longitude = longitude;
          }

          /**
             Timestamp Getter

             @return Timestamp
             @since ARP1.0
          */
          getTimestamp() : number {
               return this.timestamp;
          }

          /**
             Timestamp Setter

             @param timestamp Timestamp
             @since ARP1.0
          */
          setTimestamp(timestamp: number) {
               this.timestamp = timestamp;
          }

          /**
             Gets Dilution of precision on the X measurement. Measured in meters.

             @return xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          getXDoP() : number {
               return this.xDoP;
          }

          /**
             Sets Dilution of precision on the X measurement. Measured in meters.

             @param xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          setXDoP(xDoP: number) {
               this.xDoP = xDoP;
          }

          /**
             Gets Dilution of precision on the Y measurement. Measured in meters.

             @return yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          getYDoP() : number {
               return this.yDoP;
          }

          /**
             Sets Dilution of precision on the Y measurement. Measured in meters.

             @param yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          setYDoP(yDoP: number) {
               this.yDoP = yDoP;
          }

     }
     /**
        Represents a basic bean to store keyName pair values

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class KeyPair extends APIBean {
          /**
             Key of the element
          */
          keyName : string;
          /**
             Value of the element
          */
          keyValue : string;
          /**
             Constructor using fields

             @param keyName   Key of the element
             @param keyValue Value of the element
             @since ARP1.0
          */
          constructor(keyName: string, keyValue: string) {
               super();
               this.keyName = keyName;
               this.keyValue = keyValue;
          }
          /**
             Returns the keyName of the element

             @return Key of the element
             @since ARP1.0
          */
          getKeyName() : string {
               return this.keyName;
          }

          /**
             Sets the keyName of the element

             @param keyName Key of the element
             @since ARP1.0
          */
          setKeyName(keyName: string) {
               this.keyName = keyName;
          }

          /**
             Returns the keyValue of the element

             @return Value of the element
             @since ARP1.0
          */
          getKeyValue() : string {
               return this.keyValue;
          }

          /**
             Sets the keyValue of the element

             @param keyValue Value of the element
             @since ARP1.0
          */
          setKeyValue(keyValue: string) {
               this.keyValue = keyValue;
          }

     }
     /**
        Represents a specific application life-cycle stage.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Lifecycle extends APIBean {
          /**
             Represent the state of the app
<p/>
Possible lifecycle States:
<p/>
1. Starting    - Before starting.
2. Started     - Start concluded.
3. Running     - Accepts user interaction - running in foreground.
4. Pausing     - Before going to background.
4.1 PausedIdle - In background, no scheduled background activity (passive).
4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
5. Resuming    - Before going to foreground, followed by Running state.
6. Stopping    - Before stopping.
          */
          state : LifecycleState;
          /**
             Constructor used by the implementation

             @param state of the app
             @since ARP1.0
          */
          constructor(state: LifecycleState) {
               super();
               this.state = state;
          }
          /**
             Returns the state of the application

             @return state of the app
             @since ARP1.0
          */
          getState() : LifecycleState {
               return this.state;
          }

          /**
             Set the State of the application

             @param state of the app
             @since ARP1.0
          */
          setState(state: LifecycleState) {
               this.state = state;
          }

     }
     /**
        Represents a specific user or system locate.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Locale extends APIBean {
          /**
             A valid ISO Country Code.
          */
          country : string;
          /**
             A valid ISO Language Code.
          */
          language : string;
          /**
             Constructor used by the implementation

             @param country  Country of the Locale
             @param language Language of the Locale
             @since ARP1.0
          */
          constructor(language: string, country: string) {
               super();
               this.language = language;
               this.country = country;
          }
          /**
             Returns the country code

             @return country code
             @since ARP1.0
          */
          getCountry() : string {
               return this.country;
          }

          /**
             Set the country code

             @param country code
             @since ARP1.0
          */
          setCountry(country: string) {
               this.country = country;
          }

          /**
             Returns the language code

             @return language code
             @since ARP1.0
          */
          getLanguage() : string {
               return this.language;
          }

          /**
             Set the language code

             @param language code
             @since ARP1.0
          */
          setLanguage(language: string) {
               this.language = language;
          }

     }
     /**
        Represents the basic information about the operating system.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class OSInfo extends APIBean {
          /**
             The name of the operating system.
          */
          name : IOSType;
          /**
             The vendor of the operating system.
          */
          vendor : string;
          /**
             The version/identifier of the operating system.
          */
          version : string;
          /**
             Constructor used by implementation to set the OS information.

             @param name    of the OS.
             @param version of the OS.
             @param vendor  of the OS.
             @since ARP1.0
          */
          constructor(name: IOSType, version: string, vendor: string) {
               super();
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }
          /**
             Returns the name of the operating system.

             @return OS name.
             @since ARP1.0
          */
          getName() : IOSType {
               return this.name;
          }

          /**
             Sets The name of the operating system.

             @param name The name of the operating system.
          */
          setName(name: IOSType) {
               this.name = name;
          }

          /**
             Returns the vendor of the operating system.

             @return OS vendor.
             @since ARP1.0
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             Sets The vendor of the operating system.

             @param vendor The vendor of the operating system.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

          /**
             Returns the version of the operating system.

             @return OS version.
             @since ARP1.0
          */
          getVersion() : string {
               return this.version;
          }

          /**
             Sets The version/identifier of the operating system.

             @param version The version/identifier of the operating system.
          */
          setVersion(version: string) {
               this.version = version;
          }

     }
     /**
        Represents a single secureKey-value pair.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class SecureKeyPair extends APIBean {
          /**
             Value of the secured element
          */
          secureData : string;
          /**
             Key of the secured element
          */
          secureKey : string;
          /**
             Constructor with parameters

             @param secureKey  name of the keypair
             @param secureData value of the keypair
             @since ARP1.0
          */
          constructor(secureKey: string, secureData: string) {
               super();
               this.secureKey = secureKey;
               this.secureData = secureData;
          }
          /**
             Returns the object value

             @return Value.
             @since ARP 1.0
          */
          getSecureData() : string {
               return this.secureData;
          }

          /**
             Sets the value for this object

             @param secureData value to set.
             @since ARP 1.0
          */
          setSecureData(secureData: string) {
               this.secureData = secureData;
          }

          /**
             Returns the object secureKey name.

             @return Key name.
             @since ARP 1.0
          */
          getSecureKey() : string {
               return this.secureKey;
          }

          /**
             Sets the secureKey name for this object.

             @param secureKey Key name.
             @since ARP 1.0
          */
          setSecureKey(secureKey: string) {
               this.secureKey = secureKey;
          }

     }
     /**
        Represents an instance of a service.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Service extends APIBean {
          /**
             The method used
          */
          method : IServiceMethod;
          /**
             The type of the service
          */
          type : IServiceType;
          /**
             The service name
          */
          name : string;
          /**
             Endpoint of the service
          */
          serviceEndpoint : ServiceEndpoint;
          /**
             Constructor used by the implementation

             @param serviceEndpoint Endpoint of the service
             @param name            Name of the service
             @param method          Method of the service
             @param type            Type of the service
             @since ARP1.0
          */
          constructor(serviceEndpoint: ServiceEndpoint, name: string, method: IServiceMethod, type: IServiceType) {
               super();
               this.serviceEndpoint = serviceEndpoint;
               this.name = name;
               this.method = method;
               this.type = type;
          }
          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : IServiceMethod {
               return this.method;
          }

          /**
             Set the method

             @param method Method of the service
             @since ARP1.0
          */
          setMethod(method: IServiceMethod) {
               this.method = method;
          }

          /**
             Returns the type

             @return type
             @since ARP1.0
          */
          getType() : IServiceType {
               return this.type;
          }

          /**
             Set the type

             @param type Type of the service
             @since ARP1.0
          */
          setType(type: IServiceType) {
               this.type = type;
          }

          /**
             Returns the name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name

             @param name Name of the service
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the serviceEndpoint

             @return serviceEndpoint
             @since ARP1.0
          */
          getServiceEndpoint() : ServiceEndpoint {
               return this.serviceEndpoint;
          }

          /**
             Set the serviceEndpoint

             @param serviceEndpoint Endpoint of the service
             @since ARP1.0
          */
          setServiceEndpoint(serviceEndpoint: ServiceEndpoint) {
               this.serviceEndpoint = serviceEndpoint;
          }

     }
     /**
        Structure representing the cookieValue of a http cookie.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceCookie extends APIBean {
          /**
             Name ot the cookie
          */
          cookieName : string;
          /**
             Value of the ServiceCookie
          */
          cookieValue : string;
          /**
             ServiceCookie creation timestamp in milliseconds.
          */
          creation : number;
          /**
             Domain for which the cookie is valid.
          */
          domain : string;
          /**
             ServiceCookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;
          /**
             URI path for which the cookie is valid.
          */
          path : string;
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;
          /**
             ServiceCookie is secure (https only)
          */
          secure : boolean;
          /**
             Contructor with fields

             @param cookieName     Name of the cookie
             @param cookieValue    Value of the cookie
             @param domain   Domain of the cookie
             @param path     Path of the cookie
             @param scheme   Scheme of the cookie
             @param secure   Privacy of the cookie
             @param expiry   Expiration date of the cookie
             @param creation Creation date of the cookie
             @since ARP1.0
          */
          constructor(cookieName: string, cookieValue: string, domain: string, path: string, scheme: string, secure: boolean, expiry: number, creation: number) {
               super();
               this.cookieName = cookieName;
               this.cookieValue = cookieValue;
               this.domain = domain;
               this.path = path;
               this.scheme = scheme;
               this.secure = secure;
               this.expiry = expiry;
               this.creation = creation;
          }
          /**
             Returns the cookie cookieName

             @return cookieName Name of the cookie
             @since ARP1.0
          */
          getCookieName() : string {
               return this.cookieName;
          }

          /**
             Set the cookie cookieName

             @param cookieName Name of the cookie
             @since ARP1.0
          */
          setCookieName(cookieName: string) {
               this.cookieName = cookieName;
          }

          /**
             Returns the cookie cookieValue

             @return Value of the cookie
             @since ARP1.0
          */
          getCookieValue() : string {
               return this.cookieValue;
          }

          /**
             Set the cookie cookieValue

             @param cookieValue Value of the cookie
             @since ARP1.0
          */
          setCookieValue(cookieValue: string) {
               this.cookieValue = cookieValue;
          }

          /**
             Returns the creation date

             @return Creation date of the cookie
             @since ARP1.0
          */
          getCreation() : number {
               return this.creation;
          }

          /**
             Sets the creation date

             @param creation Creation date of the cookie
             @since ARP1.0
          */
          setCreation(creation: number) {
               this.creation = creation;
          }

          /**
             Returns the domain

             @return domain
             @since ARP1.0
          */
          getDomain() : string {
               return this.domain;
          }

          /**
             Set the domain

             @param domain Domain of the cookie
             @since ARP1.0
          */
          setDomain(domain: string) {
               this.domain = domain;
          }

          /**
             Returns the expiration date in milis

             @return expiry
             @since ARP1.0
          */
          getExpiry() : number {
               return this.expiry;
          }

          /**
             Set the expiration date in milis

             @param expiry Expiration date of the cookie
             @since ARP1.0
          */
          setExpiry(expiry: number) {
               this.expiry = expiry;
          }

          /**
             Returns the path

             @return path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Set the path

             @param path Path of the cookie
             @since ARP1.0
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the scheme

             @return scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             Set the scheme

             @param scheme Scheme of the cookie
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             Returns whether the cookie is secure or not

             @return true if the cookie is secure; false otherwise
             @since ARP1.0
          */
          getSecure() : boolean {
               return this.secure;
          }

          /**
             Set whether the cookie is secure or not

             @param secure Privacy of the cookie
             @since ARP1.0
          */
          setSecure(secure: boolean) {
               this.secure = secure;
          }

     }
     /**
        Structure representing a remote or local service access end-point.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceEndpoint extends APIBean {
          /**
             The remote service host (alias or IP).
          */
          host : string;
          /**
             The remote service path (to be added to the host and port url).
          */
          path : string;
          /**
             The remote service accessible port.
          */
          port : number;
          /**
             The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
          */
          proxy : string;
          /**
             The remote service scheme.
          */
          scheme : string;
          /**
             Constructor with parameters

             @param host   Remote service host
             @param path   Remote service Path
             @param port   Remote service Port
             @param proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
             @param scheme Remote service scheme
             @since ARP1.0
          */
          constructor(host: string, path: string, port: number, proxy: string, scheme: string) {
               super();
               this.host = host;
               this.path = path;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }
          /**
             Returns the Remote service host

             @return Remote service host
             @since ARP1.0
          */
          getHost() : string {
               return this.host;
          }

          /**
             Set the Remote service host

             @param host Remote service host
             @since ARP1.0
          */
          setHost(host: string) {
               this.host = host;
          }

          /**
             Returns the Remote service Path

             @return Remote service Path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Set the Remote service Path

             @param path Remote service Path
             @since ARP1.0
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the Remote service Port

             @return Remote service Port
             @since ARP1.0
          */
          getPort() : number {
               return this.port;
          }

          /**
             Set the Remote service Port

             @param port Remote service Port
             @since ARP1.0
          */
          setPort(port: number) {
               this.port = port;
          }

          /**
             Return the Proxy url

             @return Proxy url
             @since ARP1.0
          */
          getProxy() : string {
               return this.proxy;
          }

          /**
             Set the Proxy url

             @param proxy Proxy url
             @since ARP1.0
          */
          setProxy(proxy: string) {
               this.proxy = proxy;
          }

          /**
             Returns the Remote service scheme

             @return Remote service scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             Set the Remote service scheme

             @param scheme Remote service scheme
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

     }
     /**
        Structure representing the data of a http request or response header.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceHeader extends APIBean {
          /**
             Value of the header
          */
          data : string;
          /**
             Name ot the header
          */
          name : string;
          /**
             Constructor with fields

             @param name Name of the header
             @param data Value of the header
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               super();
               this.name = name;
               this.data = data;
          }
          /**
             Returns the header value

             @return ServiceHeader value
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             Set the header value

             @param data ServiceHeader value
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             Returns the header name

             @return ServiceHeader name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the header name

             @param name Name of the header
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Represents a local or remote service request.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceRequest extends APIBean {
          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the Content field.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The request method
          */
          method : string;
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Information about the session
          */
          serviceSession : ServiceSession;
          /**
             Contructor used by the implementation

             @param content             Request/Response data content (plain text)
             @param contentType         The request/response content type (MIME TYPE).
             @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param contentLength       The length in bytes for the Content field.
             @param contentBinary       The byte[] representing the Content field.
             @param contentBinaryLength The length in bytes for the binary Content.
             @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param method              The request method
             @param protocolVersion     The HTTP procotol version to be used for this request.
             @param serviceSession      The element service session
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: Array<number>, contentBinaryLength: number, serviceHeaders: Array<ServiceHeader>, method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession) {
               super();
               this.content = content;
               this.contentType = contentType;
               this.contentEncoding = contentEncoding;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.serviceHeaders = serviceHeaders;
               this.method = method;
               this.protocolVersion = protocolVersion;
               this.serviceSession = serviceSession;
          }
          /**
             Returns the protocol version

             @return protocolVersion enum
             @since ARP1.0
          */
          getProtocolVersion() : IServiceProtocolVersion {
               return this.protocolVersion;
          }

          /**
             Set the protocol version

             @param protocolVersion The HTTP procotol version to be used for this request.
             @since ARP1.0
          */
          setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
               this.protocolVersion = protocolVersion;
          }

          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             Set the content

             @param content Request/Response data content (plain text)
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             Returns the byte[] of the content

             @return contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             Set the byte[] of the content

             @param contentBinary The byte[] representing the Content field.
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             Retrusn the binary content length

             @return contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             Set the binary content length

             @param contentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             Set the content length

             @param contentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             Set the content type

             @param contentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : string {
               return this.method;
          }

          /**
             Set the method

             @param method The request method
             @since ARP1.0
          */
          setMethod(method: string) {
               this.method = method;
          }

          /**
             Returns the array of ServiceHeader

             @return serviceHeaders
             @since ARP1.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             Set the array of ServiceHeader

             @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             Getter for service session

             @return The element service session
             @since ARP1.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             Setter for service session

             @param serviceSession The element service session
             @since ARP1.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

     }
     /**
        Represents a local or remote service response.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceResponse extends APIBean {
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the binary Content.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Information about the session
          */
          serviceSession : ServiceSession;
          /**
             Constructor with fields

             @param content             Request/Response data content (plain text).
             @param contentType         The request/response content type (MIME TYPE).
             @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param contentLength       The length in bytes for the Content field.
             @param contentBinary       The byte[] representing the binary Content.
             @param contentBinaryLength The length in bytes for the binary Content.
             @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param serviceSession      Information about the session
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: Array<number>, contentBinaryLength: number, serviceHeaders: Array<ServiceHeader>, serviceSession: ServiceSession) {
               super();
               this.content = content;
               this.contentType = contentType;
               this.contentEncoding = contentEncoding;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.serviceHeaders = serviceHeaders;
               this.serviceSession = serviceSession;
          }
          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             Set the content

             @param content Request/Response data content (plain text).
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             Returns the binary content

             @return contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             Set the binary content

             @param contentBinary The byte[] representing the binary Content.
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             Returns the binary content length

             @return contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             Set the binary content length

             @param contentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             Set the content length

             @param contentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             Set the content type

             @param contentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             Returns the array of ServiceHeader

             @return serviceHeaders
             @since ARP1.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             Set the array of ServiceHeader

             @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             Getter for service session

             @return The element service session
             @since ARP1.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             Setter for service session

             @param serviceSession The element service session
             @since ARP1.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

     }
     /**
        Represents a session object for HTTP request and responses

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class ServiceSession extends APIBean {
          /**
             The attributes of the response
          */
          attributes : Array<string>;
          /**
             The cookies of the response
          */
          cookies : Array<ServiceCookie>;
          /**
             Constructor with fields

             @param cookies    The cookies of the response
             @param attributes Attributes of the response
             @since ARP1.0
          */
          constructor(cookies: Array<ServiceCookie>, attributes: Array<string>) {
               super();
               this.cookies = cookies;
               this.attributes = attributes;
          }
          /**
             Gets the attributes of the response

             @return Attributes of the response
             @since ARP1.0
          */
          getAttributes() : Array<string> {
               return this.attributes;
          }

          /**
             Sets the attributes for the response

             @param attributes Attributes of the response
             @since ARP1.0
          */
          setAttributes(attributes: Array<string>) {
               this.attributes = attributes;
          }

          /**
             Returns the cookies of the response

             @return The cookies of the response
             @since ARP1.0
          */
          getCookies() : Array<ServiceCookie> {
               return this.cookies;
          }

          /**
             Sets the cookies of the response

             @param cookies The cookies of the response
             @since ARP1.0
          */
          setCookies(cookies: Array<ServiceCookie>) {
               this.cookies = cookies;
          }

     }
     /**
        Structure representing the data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Contact extends ContactUid {
          /**
             The adresses from the contact
          */
          contactAddresses : Array<ContactAddress>;
          /**
             The emails from the contact
          */
          contactEmails : Array<ContactEmail>;
          /**
             The phones from the contact
          */
          contactPhones : Array<ContactPhone>;
          /**
             The social network info from the contact
          */
          contactSocials : Array<ContactSocial>;
          /**
             The aditional tags from the contact
          */
          contactTags : Array<ContactTag>;
          /**
             The websites from the contact
          */
          contactWebsites : Array<ContactWebsite>;
          /**
             The personal info from the contact
          */
          personalInfo : ContactPersonalInfo;
          /**
             The professional info from the contact
          */
          professionalInfo : ContactProfessionalInfo;
          /**
             Constructor with all the fields

             @param contactId        Identifier of the contact
             @param personalInfo     Personal Information
             @param professionalInfo Professional Information
             @param contactAddresses Addresses of the contact
             @param contactPhones    Phones of the contact
             @param contactEmails    Emails of the contact
             @param contactWebsites  Websites of the contact
             @param contactSocials   Social Networks of the contact
             @param contactTags      Tags of the contact
             @since ARP1.0
          */
          constructor(contactId: string, personalInfo: ContactPersonalInfo, professionalInfo: ContactProfessionalInfo, contactAddresses: Array<ContactAddress>, contactPhones: Array<ContactPhone>, contactEmails: Array<ContactEmail>, contactWebsites: Array<ContactWebsite>, contactSocials: Array<ContactSocial>, contactTags: Array<ContactTag>) {
               super(contactId);
               this.personalInfo = personalInfo;
               this.professionalInfo = professionalInfo;
               this.contactAddresses = contactAddresses;
               this.contactPhones = contactPhones;
               this.contactEmails = contactEmails;
               this.contactWebsites = contactWebsites;
               this.contactSocials = contactSocials;
               this.contactTags = contactTags;
          }
          /**
             Returns all the addresses of the Contact

             @return ContactAddress[]
             @since ARP1.0
          */
          getContactAddresses() : Array<ContactAddress> {
               return this.contactAddresses;
          }

          /**
             Set the addresses of the Contact

             @param contactAddresses Addresses of the contact
             @since ARP1.0
          */
          setContactAddresses(contactAddresses: Array<ContactAddress>) {
               this.contactAddresses = contactAddresses;
          }

          /**
             Returns all the emails of the Contact

             @return ContactEmail[]
             @since ARP1.0
          */
          getContactEmails() : Array<ContactEmail> {
               return this.contactEmails;
          }

          /**
             Set the emails of the Contact

             @param contactEmails Emails of the contact
             @since ARP1.0
          */
          setContactEmails(contactEmails: Array<ContactEmail>) {
               this.contactEmails = contactEmails;
          }

          /**
             Returns all the phones of the Contact

             @return ContactPhone[]
             @since ARP1.0
          */
          getContactPhones() : Array<ContactPhone> {
               return this.contactPhones;
          }

          /**
             Set the phones of the Contact

             @param contactPhones Phones of the contact
             @since ARP1.0
          */
          setContactPhones(contactPhones: Array<ContactPhone>) {
               this.contactPhones = contactPhones;
          }

          /**
             Returns all the social network info of the Contact

             @return ContactSocial[]
             @since ARP1.0
          */
          getContactSocials() : Array<ContactSocial> {
               return this.contactSocials;
          }

          /**
             Set the social network info of the Contact

             @param contactSocials Social Networks of the contact
             @since ARP1.0
          */
          setContactSocials(contactSocials: Array<ContactSocial>) {
               this.contactSocials = contactSocials;
          }

          /**
             Returns the additional tags of the Contact

             @return ContactTag[]
             @since ARP1.0
          */
          getContactTags() : Array<ContactTag> {
               return this.contactTags;
          }

          /**
             Set the additional tags of the Contact

             @param contactTags Tags of the contact
             @since ARP1.0
          */
          setContactTags(contactTags: Array<ContactTag>) {
               this.contactTags = contactTags;
          }

          /**
             Returns all the websites of the Contact

             @return ContactWebsite[]
             @since ARP1.0
          */
          getContactWebsites() : Array<ContactWebsite> {
               return this.contactWebsites;
          }

          /**
             Set the websites of the Contact

             @param contactWebsites Websites of the contact
             @since ARP1.0
          */
          setContactWebsites(contactWebsites: Array<ContactWebsite>) {
               this.contactWebsites = contactWebsites;
          }

          /**
             Returns the personal info of the Contact

             @return ContactPersonalInfo of the Contact
             @since ARP1.0
          */
          getPersonalInfo() : ContactPersonalInfo {
               return this.personalInfo;
          }

          /**
             Set the personal info of the Contact

             @param personalInfo Personal Information
             @since ARP1.0
          */
          setPersonalInfo(personalInfo: ContactPersonalInfo) {
               this.personalInfo = personalInfo;
          }

          /**
             Returns the professional info of the Contact

             @return Array of personal info
             @since ARP1.0
          */
          getProfessionalInfo() : ContactProfessionalInfo {
               return this.professionalInfo;
          }

          /**
             Set the professional info of the Contact

             @param professionalInfo Professional Information
             @since ARP1.0
          */
          setProfessionalInfo(professionalInfo: ContactProfessionalInfo) {
               this.professionalInfo = professionalInfo;
          }

     }
     export class BaseListener implements IBaseListener {

          /**
             Unique id of listener.
          */
          id : number;

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Constructor with listener id.

             @param id  The id of the listener.
          */
          constructor(id : number) {
               this.id = id;
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             Get the listener id.
             @return long with the identifier of the listener.
          */
          getId() : number {
               return this.id;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }

     }

     /**
        AccelerationListener control dictionary.
     */
     export var registeredAccelerationListener = new Dictionary<IAccelerationListener>([]);

     /**
        AccelerationListener global listener handlers.
     */
     export function handleAccelerationListenerError(id : number, error : IAccelerationListenerError) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleAccelerationListenerResult(id : number, acceleration : Acceleration) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onResult(acceleration);
          }
     }
     export function handleAccelerationListenerWarning(id : number, acceleration : Acceleration, warning : IAccelerationListenerWarning) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onWarning(acceleration, warning);
          }
     }

     export class AccelerationListener extends BaseListener implements IAccelerationListener {

          onErrorFunction : (error : IAccelerationListenerError) => void;
          onResultFunction : (acceleration : Acceleration) => void;
          onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => void;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: IAccelerationListenerError
             @param onResultFunction Function receiving parameters of type: Acceleration
             @param onWarningFunction Function receiving parameters of type: Acceleration, IAccelerationListenerWarning
          */
          constructor(onErrorFunction : (error : IAccelerationListenerError) => void, onResultFunction : (acceleration : Acceleration) => void, onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: AccelerationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: AccelerationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: AccelerationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.

             @param error Error fired
             @since ARP1.0
          */
          public onError(error : IAccelerationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param acceleration Acceleration received
             @since ARP1.0
          */
          public onResult(acceleration : Acceleration) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(acceleration);
               }
          }

          /**
             Data received with warning - ie. Needs calibration.

             @param acceleration Acceleration received
             @param warning      Warning fired
             @since ARP1.0
          */
          public onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(acceleration, warning);
               }
          }

     }

     /**
        ButtonListener control dictionary.
     */
     export var registeredButtonListener = new Dictionary<IButtonListener>([]);

     /**
        ButtonListener global listener handlers.
     */
     export function handleButtonListenerError(id : number, error : IButtonListenerError) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleButtonListenerResult(id : number, button : Button) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onResult(button);
          }
     }
     export function handleButtonListenerWarning(id : number, button : Button, warning : IButtonListenerWarning) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onWarning(button, warning);
          }
     }

     export class ButtonListener extends BaseListener implements IButtonListener {

          onErrorFunction : (error : IButtonListenerError) => void;
          onResultFunction : (button : Button) => void;
          onWarningFunction : (button : Button, warning : IButtonListenerWarning) => void;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: IButtonListenerError
             @param onResultFunction Function receiving parameters of type: Button
             @param onWarningFunction Function receiving parameters of type: Button, IButtonListenerWarning
          */
          constructor(onErrorFunction : (error : IButtonListenerError) => void, onResultFunction : (button : Button) => void, onWarningFunction : (button : Button, warning : IButtonListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ButtonListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ButtonListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ButtonListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received

             @param error occurred
             @since ARP1.0
          */
          public onError(error : IButtonListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Called on button pressed

             @param button pressed
             @since ARP1.0
          */
          public onResult(button : Button) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(button);
               }
          }

          /**
             Data received with warning

             @param button  pressed
             @param warning happened
             @since ARP1.0
          */
          public onWarning(button : Button, warning : IButtonListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(button, warning);
               }
          }

     }

     /**
        GeolocationListener control dictionary.
     */
     export var registeredGeolocationListener = new Dictionary<IGeolocationListener>([]);

     /**
        GeolocationListener global listener handlers.
     */
     export function handleGeolocationListenerError(id : number, error : IGeolocationListenerError) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleGeolocationListenerResult(id : number, geolocation : Geolocation) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onResult(geolocation);
          }
     }
     export function handleGeolocationListenerWarning(id : number, geolocation : Geolocation, warning : IGeolocationListenerWarning) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onWarning(geolocation, warning);
          }
     }

     export class GeolocationListener extends BaseListener implements IGeolocationListener {

          onErrorFunction : (error : IGeolocationListenerError) => void;
          onResultFunction : (geolocation : Geolocation) => void;
          onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => void;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: IGeolocationListenerError
             @param onResultFunction Function receiving parameters of type: Geolocation
             @param onWarningFunction Function receiving parameters of type: Geolocation, IGeolocationListenerWarning
          */
          constructor(onErrorFunction : (error : IGeolocationListenerError) => void, onResultFunction : (geolocation : Geolocation) => void, onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: GeolocationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: GeolocationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: GeolocationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available.

             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : IGeolocationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param geolocation Geolocation Bean
             @since ARP1.0
          */
          public onResult(geolocation : Geolocation) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(geolocation);
               }
          }

          /**
             Data received with warning - ie. HighDoP

             @param geolocation Geolocation Bean
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(geolocation, warning);
               }
          }

     }

     /**
        LifecycleListener control dictionary.
     */
     export var registeredLifecycleListener = new Dictionary<ILifecycleListener>([]);

     /**
        LifecycleListener global listener handlers.
     */
     export function handleLifecycleListenerError(id : number, error : ILifecycleListenerError) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleLifecycleListenerResult(id : number, lifecycle : Lifecycle) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onResult(lifecycle);
          }
     }
     export function handleLifecycleListenerWarning(id : number, lifecycle : Lifecycle, warning : ILifecycleListenerWarning) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onWarning(lifecycle, warning);
          }
     }

     export class LifecycleListener extends BaseListener implements ILifecycleListener {

          onErrorFunction : (error : ILifecycleListenerError) => void;
          onResultFunction : (lifecycle : Lifecycle) => void;
          onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => void;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: ILifecycleListenerError
             @param onResultFunction Function receiving parameters of type: Lifecycle
             @param onWarningFunction Function receiving parameters of type: Lifecycle, ILifecycleListenerWarning
          */
          constructor(onErrorFunction : (error : ILifecycleListenerError) => void, onResultFunction : (lifecycle : Lifecycle) => void, onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: LifecycleListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: LifecycleListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: LifecycleListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available.

             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : ILifecycleListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Called when lifecycle changes somehow.

             @param lifecycle Lifecycle element
             @since ARP1.0
          */
          public onResult(lifecycle : Lifecycle) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(lifecycle);
               }
          }

          /**
             Data received with warning

             @param lifecycle Lifecycle element
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(lifecycle, warning);
               }
          }

     }

     /**
        NetworkStatusListener control dictionary.
     */
     export var registeredNetworkStatusListener = new Dictionary<INetworkStatusListener>([]);

     /**
        NetworkStatusListener global listener handlers.
     */
     export function handleNetworkStatusListenerError(id : number, error : INetworkStatusListenerError) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     export function handleNetworkStatusListenerResult(id : number, network : ICapabilitiesNet) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onResult(network);
          }
     }
     export function handleNetworkStatusListenerWarning(id : number, network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onWarning(network, warning);
          }
     }

     export class NetworkStatusListener extends BaseListener implements INetworkStatusListener {

          onErrorFunction : (error : INetworkStatusListenerError) => void;
          onResultFunction : (network : ICapabilitiesNet) => void;
          onWarningFunction : (network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) => void;

          /**
             Constructor with anonymous handler functions for listener.

             @param onErrorFunction Function receiving parameters of type: INetworkStatusListenerError
             @param onResultFunction Function receiving parameters of type: ICapabilitiesNet
             @param onWarningFunction Function receiving parameters of type: ICapabilitiesNet, INetworkStatusListenerWarning
          */
          constructor(onErrorFunction : (error : INetworkStatusListenerError) => void, onResultFunction : (network : ICapabilitiesNet) => void, onWarningFunction : (network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: NetworkStatusListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: NetworkStatusListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: NetworkStatusListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized or hardware not available.

             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : INetworkStatusListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Called when network connection changes somehow.

             @param network Change to this network.
             @since ARP1.0
          */
          public onResult(network : ICapabilitiesNet) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(network);
               }
          }

          /**
             Status received with warning

             @param network Change to this network.
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(network, warning);
               }
          }

     }

     export class BaseCallback implements IBaseCallback {

          /**
             Unique id of callback.
          */
          id : number;

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Constructor with callback id.

             @param id  The id of the callback.
          */
          constructor(id : number) {
               this.id = id;
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             Get the listener id.
             @return long with the identifier of the callback.
          */
          getId() : number {
               return this.id;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }

     }


     /**
        ContactPhotoResultCallback control dictionary.
     */
     export var registeredContactPhotoResultCallback = new Dictionary<IContactPhotoResultCallback>([]);

     /**
        ContactPhotoResultCallback global callback handlers.
     */
     export function handleContactPhotoResultCallbackError(id : number, error : IContactPhotoResultCallbackError) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleContactPhotoResultCallbackResult(id : number, contactPhoto : Array<number>) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onResult(contactPhoto);
          }
     }
     export function handleContactPhotoResultCallbackWarning(id : number, contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onWarning(contactPhoto, warning);
          }
     }

     export class ContactPhotoResultCallback extends BaseCallback implements IContactPhotoResultCallback {

          onErrorFunction : (error : IContactPhotoResultCallbackError) => void;
          onResultFunction : (contactPhoto : Array<number>) => void;
          onWarningFunction : (contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IContactPhotoResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<number>
             @param onWarningFunction Function receiving parameters of type: Array<number>, IContactPhotoResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IContactPhotoResultCallbackError) => void, onResultFunction : (contactPhoto : Array<number>) => void, onWarningFunction : (contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             This method is called on Error

             @param error returned by the platform
             @since ARP1.0
          */
          public onError(error : IContactPhotoResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             This method is called on Result

             @param contactPhoto returned by the platform
             @since ARP1.0
          */
          public onResult(contactPhoto : Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(contactPhoto);
               }
          }

          /**
             This method is called on Warning

             @param contactPhoto returned by the platform
             @param warning      returned by the platform
             @since ARP1.0
          */
          public onWarning(contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(contactPhoto, warning);
               }
          }

     }


     /**
        ContactResultCallback control dictionary.
     */
     export var registeredContactResultCallback = new Dictionary<IContactResultCallback>([]);

     /**
        ContactResultCallback global callback handlers.
     */
     export function handleContactResultCallbackError(id : number, error : IContactResultCallbackError) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleContactResultCallbackResult(id : number, contacts : Array<Contact>) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onResult(contacts);
          }
     }
     export function handleContactResultCallbackWarning(id : number, contacts : Array<Contact>, warning : IContactResultCallbackWarning) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onWarning(contacts, warning);
          }
     }

     export class ContactResultCallback extends BaseCallback implements IContactResultCallback {

          onErrorFunction : (error : IContactResultCallbackError) => void;
          onResultFunction : (contacts : Array<Contact>) => void;
          onWarningFunction : (contacts : Array<Contact>, warning : IContactResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IContactResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<Contact>
             @param onWarningFunction Function receiving parameters of type: Array<Contact>, IContactResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IContactResultCallbackError) => void, onResultFunction : (contacts : Array<Contact>) => void, onWarningFunction : (contacts : Array<Contact>, warning : IContactResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ContactResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ContactResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ContactResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             This method is called on Error

             @param error returned by the platform
             @since ARP1.0
          */
          public onError(error : IContactResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             This method is called on Result

             @param contacts returned by the platform
             @since ARP1.0
          */
          public onResult(contacts : Array<Contact>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(contacts);
               }
          }

          /**
             This method is called on Warning

             @param contacts returned by the platform
             @param warning  returned by the platform
             @since ARP1.0
          */
          public onWarning(contacts : Array<Contact>, warning : IContactResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(contacts, warning);
               }
          }

     }


     /**
        DatabaseResultCallback control dictionary.
     */
     export var registeredDatabaseResultCallback = new Dictionary<IDatabaseResultCallback>([]);

     /**
        DatabaseResultCallback global callback handlers.
     */
     export function handleDatabaseResultCallbackError(id : number, error : IDatabaseResultCallbackError) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleDatabaseResultCallbackResult(id : number, database : Database) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onResult(database);
          }
     }
     export function handleDatabaseResultCallbackWarning(id : number, database : Database, warning : IDatabaseResultCallbackWarning) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onWarning(database, warning);
          }
     }

     export class DatabaseResultCallback extends BaseCallback implements IDatabaseResultCallback {

          onErrorFunction : (error : IDatabaseResultCallbackError) => void;
          onResultFunction : (database : Database) => void;
          onWarningFunction : (database : Database, warning : IDatabaseResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IDatabaseResultCallbackError
             @param onResultFunction Function receiving parameters of type: Database
             @param onWarningFunction Function receiving parameters of type: Database, IDatabaseResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IDatabaseResultCallbackError) => void, onResultFunction : (database : Database) => void, onWarningFunction : (database : Database, warning : IDatabaseResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             Result callback for error responses

             @param error Returned error
             @since ARP1.0
          */
          public onError(error : IDatabaseResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Result callback for correct responses

             @param database Returns the database
             @since ARP1.0
          */
          public onResult(database : Database) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(database);
               }
          }

          /**
             Result callback for warning responses

             @param database Returns the database
             @param warning  Returned Warning
             @since ARP1.0
          */
          public onWarning(database : Database, warning : IDatabaseResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(database, warning);
               }
          }

     }


     /**
        DatabaseTableResultCallback control dictionary.
     */
     export var registeredDatabaseTableResultCallback = new Dictionary<IDatabaseTableResultCallback>([]);

     /**
        DatabaseTableResultCallback global callback handlers.
     */
     export function handleDatabaseTableResultCallbackError(id : number, error : IDatabaseTableResultCallbackError) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleDatabaseTableResultCallbackResult(id : number, databaseTable : DatabaseTable) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onResult(databaseTable);
          }
     }
     export function handleDatabaseTableResultCallbackWarning(id : number, databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onWarning(databaseTable, warning);
          }
     }

     export class DatabaseTableResultCallback extends BaseCallback implements IDatabaseTableResultCallback {

          onErrorFunction : (error : IDatabaseTableResultCallbackError) => void;
          onResultFunction : (databaseTable : DatabaseTable) => void;
          onWarningFunction : (databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IDatabaseTableResultCallbackError
             @param onResultFunction Function receiving parameters of type: DatabaseTable
             @param onWarningFunction Function receiving parameters of type: DatabaseTable, IDatabaseTableResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IDatabaseTableResultCallbackError) => void, onResultFunction : (databaseTable : DatabaseTable) => void, onWarningFunction : (databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             Result callback for error responses

             @param error Returned error
             @since ARP1.0
          */
          public onError(error : IDatabaseTableResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Result callback for correct responses

             @param databaseTable Returns the databaseTable
             @since ARP1.0
          */
          public onResult(databaseTable : DatabaseTable) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(databaseTable);
               }
          }

          /**
             Result callback for warning responses

             @param databaseTable Returns the databaseTable
             @param warning       Returned Warning
             @since ARP1.0
          */
          public onWarning(databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(databaseTable, warning);
               }
          }

     }


     /**
        FileDataLoadResultCallback control dictionary.
     */
     export var registeredFileDataLoadResultCallback = new Dictionary<IFileDataLoadResultCallback>([]);

     /**
        FileDataLoadResultCallback global callback handlers.
     */
     export function handleFileDataLoadResultCallbackError(id : number, error : IFileDataLoadResultCallbackError) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleFileDataLoadResultCallbackResult(id : number, data : Array<number>) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onResult(data);
          }
     }
     export function handleFileDataLoadResultCallbackWarning(id : number, data : Array<number>, warning : IFileDataLoadResultCallbackWarning) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onWarning(data, warning);
          }
     }

     export class FileDataLoadResultCallback extends BaseCallback implements IFileDataLoadResultCallback {

          onErrorFunction : (error : IFileDataLoadResultCallbackError) => void;
          onResultFunction : (data : Array<number>) => void;
          onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IFileDataLoadResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<number>
             @param onWarningFunction Function receiving parameters of type: Array<number>, IFileDataLoadResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileDataLoadResultCallbackError) => void, onResultFunction : (data : Array<number>) => void, onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             Error processing data retrieval/storage operation.

             @param error Error condition encountered.
             @since ARP1.0
          */
          public onError(error : IFileDataLoadResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Result of data retrieval operation.

             @param data Data loaded.
             @since ARP1.0
          */
          public onResult(data : Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(data);
               }
          }

          /**
             Result with warning of data retrieval/storage operation.

             @param data    File being loaded.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(data : Array<number>, warning : IFileDataLoadResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(data, warning);
               }
          }

     }


     /**
        FileDataStoreResultCallback control dictionary.
     */
     export var registeredFileDataStoreResultCallback = new Dictionary<IFileDataStoreResultCallback>([]);

     /**
        FileDataStoreResultCallback global callback handlers.
     */
     export function handleFileDataStoreResultCallbackError(id : number, error : IFileDataStoreResultCallbackError) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleFileDataStoreResultCallbackResult(id : number, file : FileDescriptor) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onResult(file);
          }
     }
     export function handleFileDataStoreResultCallbackWarning(id : number, file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onWarning(file, warning);
          }
     }

     export class FileDataStoreResultCallback extends BaseCallback implements IFileDataStoreResultCallback {

          onErrorFunction : (error : IFileDataStoreResultCallbackError) => void;
          onResultFunction : (file : FileDescriptor) => void;
          onWarningFunction : (file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IFileDataStoreResultCallbackError
             @param onResultFunction Function receiving parameters of type: FileDescriptor
             @param onWarningFunction Function receiving parameters of type: FileDescriptor, IFileDataStoreResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileDataStoreResultCallbackError) => void, onResultFunction : (file : FileDescriptor) => void, onWarningFunction : (file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             Error processing data retrieval/storage operation.

             @param error Error condition encountered.
             @since ARP1.0
          */
          public onError(error : IFileDataStoreResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Result of data storage operation.

             @param file File reference to stored data.
             @since ARP1.0
          */
          public onResult(file : FileDescriptor) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(file);
               }
          }

          /**
             Result with warning of data retrieval/storage operation.

             @param file    File being loaded/stored.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }

     }


     /**
        FileListResultCallback control dictionary.
     */
     export var registeredFileListResultCallback = new Dictionary<IFileListResultCallback>([]);

     /**
        FileListResultCallback global callback handlers.
     */
     export function handleFileListResultCallbackError(id : number, error : IFileListResultCallbackError) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleFileListResultCallbackResult(id : number, files : Array<FileDescriptor>) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onResult(files);
          }
     }
     export function handleFileListResultCallbackWarning(id : number, files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onWarning(files, warning);
          }
     }

     export class FileListResultCallback extends BaseCallback implements IFileListResultCallback {

          onErrorFunction : (error : IFileListResultCallbackError) => void;
          onResultFunction : (files : Array<FileDescriptor>) => void;
          onWarningFunction : (files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IFileListResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<FileDescriptor>
             @param onWarningFunction Function receiving parameters of type: Array<FileDescriptor>, IFileListResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileListResultCallbackError) => void, onResultFunction : (files : Array<FileDescriptor>) => void, onWarningFunction : (files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileListResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileListResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileListResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             On error result of a file operation.

             @param error Error processing the request.
             @since ARP1.0
          */
          public onError(error : IFileListResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             On correct result of a file operation.

             @param files Array of resulting files/folders.
             @since ARP1.0
          */
          public onResult(files : Array<FileDescriptor>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(files);
               }
          }

          /**
             On partial result of a file operation, containing a warning.

             @param files   Array of resulting files/folders.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(files, warning);
               }
          }

     }


     /**
        FileResultCallback control dictionary.
     */
     export var registeredFileResultCallback = new Dictionary<IFileResultCallback>([]);

     /**
        FileResultCallback global callback handlers.
     */
     export function handleFileResultCallbackError(id : number, error : IFileResultCallbackError) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleFileResultCallbackResult(id : number, storageFile : FileDescriptor) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onResult(storageFile);
          }
     }
     export function handleFileResultCallbackWarning(id : number, file : FileDescriptor, warning : IFileResultCallbackWarning) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onWarning(file, warning);
          }
     }

     export class FileResultCallback extends BaseCallback implements IFileResultCallback {

          onErrorFunction : (error : IFileResultCallbackError) => void;
          onResultFunction : (storageFile : FileDescriptor) => void;
          onWarningFunction : (file : FileDescriptor, warning : IFileResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IFileResultCallbackError
             @param onResultFunction Function receiving parameters of type: FileDescriptor
             @param onWarningFunction Function receiving parameters of type: FileDescriptor, IFileResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileResultCallbackError) => void, onResultFunction : (storageFile : FileDescriptor) => void, onWarningFunction : (file : FileDescriptor, warning : IFileResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             On error result of a file operation.

             @param error Error processing the request.
             @since ARP1.0
          */
          public onError(error : IFileResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             On correct result of a file operation.

             @param storageFile Reference to the resulting file.
             @since ARP1.0
          */
          public onResult(storageFile : FileDescriptor) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(storageFile);
               }
          }

          /**
             On partial result of a file operation, containing a warning.

             @param file    Reference to the offending file.
             @param warning Warning processing the request.
             @since ARP1.0
          */
          public onWarning(file : FileDescriptor, warning : IFileResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }

     }


     /**
        MessagingCallback control dictionary.
     */
     export var registeredMessagingCallback = new Dictionary<IMessagingCallback>([]);

     /**
        MessagingCallback global callback handlers.
     */
     export function handleMessagingCallbackError(id : number, error : IMessagingCallbackError) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleMessagingCallbackResult(id : number, success : boolean) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onResult(success);
          }
     }
     export function handleMessagingCallbackWarning(id : number, success : boolean, warning : IMessagingCallbackWarning) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onWarning(success, warning);
          }
     }

     export class MessagingCallback extends BaseCallback implements IMessagingCallback {

          onErrorFunction : (error : IMessagingCallbackError) => void;
          onResultFunction : (success : boolean) => void;
          onWarningFunction : (success : boolean, warning : IMessagingCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IMessagingCallbackError
             @param onResultFunction Function receiving parameters of type: boolean
             @param onWarningFunction Function receiving parameters of type: boolean, IMessagingCallbackWarning
          */
          constructor(onErrorFunction : (error : IMessagingCallbackError) => void, onResultFunction : (success : boolean) => void, onWarningFunction : (success : boolean, warning : IMessagingCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: MessagingCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: MessagingCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: MessagingCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             This method is called on Error

             @param error returned by the platform
             @since ARP1.0
          */
          public onError(error : IMessagingCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             This method is called on Result

             @param success true if sent;false otherwise
             @since ARP1.0
          */
          public onResult(success : boolean) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(success);
               }
          }

          /**
             This method is called on Warning

             @param success true if sent;false otherwise
             @param warning returned by the platform
             @since ARP1.0
          */
          public onWarning(success : boolean, warning : IMessagingCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(success, warning);
               }
          }

     }


     /**
        NetworkReachabilityCallback control dictionary.
     */
     export var registeredNetworkReachabilityCallback = new Dictionary<INetworkReachabilityCallback>([]);

     /**
        NetworkReachabilityCallback global callback handlers.
     */
     export function handleNetworkReachabilityCallbackError(id : number, error : INetworkReachabilityCallbackError) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleNetworkReachabilityCallbackResult(id : number, reachable : boolean) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onResult(reachable);
          }
     }
     export function handleNetworkReachabilityCallbackWarning(id : number, reachable : boolean, warning : INetworkReachabilityCallbackWarning) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onWarning(reachable, warning);
          }
     }

     export class NetworkReachabilityCallback extends BaseCallback implements INetworkReachabilityCallback {

          onErrorFunction : (error : INetworkReachabilityCallbackError) => void;
          onResultFunction : (reachable : boolean) => void;
          onWarningFunction : (reachable : boolean, warning : INetworkReachabilityCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: INetworkReachabilityCallbackError
             @param onResultFunction Function receiving parameters of type: boolean
             @param onWarningFunction Function receiving parameters of type: boolean, INetworkReachabilityCallbackWarning
          */
          constructor(onErrorFunction : (error : INetworkReachabilityCallbackError) => void, onResultFunction : (reachable : boolean) => void, onWarningFunction : (reachable : boolean, warning : INetworkReachabilityCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized .

             @param error Error value
             @since ARP1.0
          */
          public onError(error : INetworkReachabilityCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param reachable Indicates if the host is reachable
             @since ARP1.0
          */
          public onResult(reachable : boolean) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(reachable);
               }
          }

          /**
             Data received with warning - ie Found entries with existing key and values have been overriden

             @param reachable Indicates if the host is reachable
             @param warning   Warning value
             @since ARP1.0
          */
          public onWarning(reachable : boolean, warning : INetworkReachabilityCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(reachable, warning);
               }
          }

     }


     /**
        SecurityResultCallback control dictionary.
     */
     export var registeredSecurityResultCallback = new Dictionary<ISecurityResultCallback>([]);

     /**
        SecurityResultCallback global callback handlers.
     */
     export function handleSecurityResultCallbackError(id : number, error : ISecurityResultCallbackError) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleSecurityResultCallbackResult(id : number, keyValues : Array<SecureKeyPair>) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onResult(keyValues);
          }
     }
     export function handleSecurityResultCallbackWarning(id : number, keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onWarning(keyValues, warning);
          }
     }

     export class SecurityResultCallback extends BaseCallback implements ISecurityResultCallback {

          onErrorFunction : (error : ISecurityResultCallbackError) => void;
          onResultFunction : (keyValues : Array<SecureKeyPair>) => void;
          onWarningFunction : (keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: ISecurityResultCallbackError
             @param onResultFunction Function receiving parameters of type: Array<SecureKeyPair>
             @param onWarningFunction Function receiving parameters of type: Array<SecureKeyPair>, ISecurityResultCallbackWarning
          */
          constructor(onErrorFunction : (error : ISecurityResultCallbackError) => void, onResultFunction : (keyValues : Array<SecureKeyPair>) => void, onWarningFunction : (keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: SecurityResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: SecurityResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: SecurityResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             No data received - error condition, not authorized .

             @param error Error values
             @since ARP1.0
          */
          public onError(error : ISecurityResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             Correct data received.

             @param keyValues key and values
             @since ARP1.0
          */
          public onResult(keyValues : Array<SecureKeyPair>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(keyValues);
               }
          }

          /**
             Data received with warning - ie Found entries with existing key and values have been overriden

             @param keyValues key and values
             @param warning   Warning values
             @since ARP1.0
          */
          public onWarning(keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(keyValues, warning);
               }
          }

     }


     /**
        ServiceResultCallback control dictionary.
     */
     export var registeredServiceResultCallback = new Dictionary<IServiceResultCallback>([]);

     /**
        ServiceResultCallback global callback handlers.
     */
     export function handleServiceResultCallbackError(id : number, error : IServiceResultCallbackError) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     export function handleServiceResultCallbackResult(id : number, response : ServiceResponse) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onResult(response);
          }
     }
     export function handleServiceResultCallbackWarning(id : number, response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onWarning(response, warning);
          }
     }

     export class ServiceResultCallback extends BaseCallback implements IServiceResultCallback {

          onErrorFunction : (error : IServiceResultCallbackError) => void;
          onResultFunction : (response : ServiceResponse) => void;
          onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: IServiceResultCallbackError
             @param onResultFunction Function receiving parameters of type: ServiceResponse
             @param onWarningFunction Function receiving parameters of type: ServiceResponse, IServiceResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IServiceResultCallbackError) => void, onResultFunction : (response : ServiceResponse) => void, onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ServiceResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ServiceResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ServiceResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             This method is called on Error

             @param error returned by the platform
             @since ARP1.0
          */
          public onError(error : IServiceResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             This method is called on Result

             @param response data
             @since ARP1.0
          */
          public onResult(response : ServiceResponse) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(response);
               }
          }

          /**
             This method is called on Warning

             @param response data
             @param warning  returned by the platform
             @since ARP1.0
          */
          public onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(response, warning);
               }
          }

     }

     /**
        Base application for Application purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseApplicationBridge implements IBaseApplication {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Commerce purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseCommerceBridge implements IBaseCommerce {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Commerce;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Communication purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseCommunicationBridge implements IBaseCommunication {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Communication;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Data purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseDataBridge implements IBaseData {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Data;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Media purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseMediaBridge implements IBaseMedia {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Media;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Notification purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseNotificationBridge implements IBaseNotification {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Notification;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for PIM purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BasePIMBridge implements IBasePIM {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.PIM;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Reader purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseReaderBridge implements IBaseReader {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Reader;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Security purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSecurityBridge implements IBaseSecurity {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Security;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Sensor purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSensorBridge implements IBaseSensor {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Sensor;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Social purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSocialBridge implements IBaseSocial {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Social;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for System purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSystemBridge implements IBaseSystem {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.System;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for UI purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseUIBridge implements IBaseUI {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.UI;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Base application for Utility purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseUtilBridge implements IBaseUtil {

          /**
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Util;
          }

          /**
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             Return the API version for the given interface.
          */
          getAPIVersion() : string {
               return "v2.0.3"
          }
     }

     /**
        Interface for Analytics purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AnalyticsBridge extends BaseApplicationBridge implements IAnalytics {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Globalization results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class GlobalizationBridge extends BaseApplicationBridge implements IGlobalization {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             List of supported locales for the application

             @return List of locales
             @since ARP1.0
          */
          getLocaleSupportedDescriptors() : Array<Locale> {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGlobalization","getLocaleSupportedDescriptors",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Array<Locale> = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getLocaleSupportedDescriptors' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getLocaleSupportedDescriptors' request.");
               }
               return response;
          }

          /**
             Gets the text/message corresponding to the given key and locale.

             @param key    to match text
             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return Localized text.
             @since ARP1.0
          */
          getResourceLiteral(key : string, locale : Locale) : string {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(key));
               arParams.push(JSON.stringify(locale));
               var ar : APIRequest = new APIRequest("IGlobalization","getResourceLiteral",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : string = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getResourceLiteral' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getResourceLiteral' request.");
               }
               return response;
          }

          /**
             Gets the full application configured literals (key/message pairs) corresponding to the given locale.

             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return Localized texts in the form of an object.
             @since ARP1.0
          */
          getResourceLiterals(locale : Locale) : Array<KeyPair> {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(locale));
               var ar : APIRequest = new APIRequest("IGlobalization","getResourceLiterals",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Array<KeyPair> = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getResourceLiterals' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getResourceLiterals' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Add the listener for the lifecycle of the app

             @param listener Lifecycle listener
             @since ARP1.0
          */
          addLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","addLifecycleListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredLifecycleListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.addLifecycleListener' request.");
               }
          }

          /**
             Whether the application is in background or not

             @return true if the application is in background;false otherwise
             @since ARP1.0
          */
          isBackground() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","isBackground",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'LifecycleBridge.isBackground' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.isBackground' request.");
               }
               return response;
          }

          /**
             Un-registers an existing listener from receiving lifecycle events.

             @param listener Lifecycle listener
             @since ARP1.0
          */
          removeLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","removeLifecycleListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredLifecycleListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListener' request.");
               }
          }

          /**
             Removes all existing listeners from receiving lifecycle events.

             @since ARP1.0
          */
          removeLifecycleListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ILifecycle","removeLifecycleListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredLifecycleListener.keys();
                    for (var key in keys) {
                         registeredLifecycleListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListeners' request.");
               }
          }
     }

     /**
        Interface for Managing the Management operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class ManagementBridge extends BaseApplicationBridge implements IManagement {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Printing operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class PrintingBridge extends BaseApplicationBridge implements IPrinting {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Settings operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class SettingsBridge extends BaseApplicationBridge implements ISettings {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Update operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class UpdateBridge extends BaseApplicationBridge implements IUpdate {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Advertising purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AdsBridge extends BaseCommerceBridge implements IAds {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Store operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class StoreBridge extends BaseCommerceBridge implements IStore {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Wallet operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class WalletBridge extends BaseCommerceBridge implements IWallet {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Bluetooth purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class BluetoothBridge extends BaseCommunicationBridge implements IBluetooth {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Network information operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NetworkInfoBridge extends BaseCommunicationBridge implements INetworkInfo {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Network naming operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NetworkNamingBridge extends BaseCommunicationBridge implements INetworkNaming {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Network reachability operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NetworkReachabilityBridge extends BaseCommunicationBridge implements INetworkReachability {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Whether there is connectivity to a host, via domain name or ip address, or not.

             @param host     domain name or ip address of host.
             @param callback Callback called at the end.
             @since ARP1.0
          */
          isNetworkReachable(host : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(host));
               var ar : APIRequest = new APIRequest("INetworkReachability","isNetworkReachable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkReachable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
               }
          }

          /**
             Whether there is connectivity to an url of a service or not.

             @param url      to look for
             @param callback Callback called at the end
             @since ARP1.0
          */
          isNetworkServiceReachable(url : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var ar : APIRequest = new APIRequest("INetworkReachability","isNetworkServiceReachable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkServiceReachable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
               }
          }
     }

     /**
        Interface for Managing the Network status

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NetworkStatusBridge extends BaseCommunicationBridge implements INetworkStatus {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Add the listener for network status changes of the app

             @param listener Listener with the result
             @since ARP1.0
          */
          addNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("INetworkStatus","addNetworkStatusListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredNetworkStatusListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.addNetworkStatusListener' request.");
               }
          }

          /**
             Un-registers an existing listener from receiving network status events.

             @param listener Listener with the result
             @since ARP1.0
          */
          removeNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredNetworkStatusListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListener' request.");
               }
          }

          /**
             Removes all existing listeners from receiving network status events.

             @since ARP1.0
          */
          removeNetworkStatusListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredNetworkStatusListener.keys();
                    for (var key in keys) {
                         registeredNetworkStatusListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListeners' request.");
               }
          }
     }

     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class ServiceBridge extends BaseCommunicationBridge implements IService {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Get a reference to a registered service by name.

             @param serviceName Name of service.
             @return A service, if registered, or null of the service does not exist.
             @since ARP1.0
          */
          getService(serviceName : string) : Service {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var ar : APIRequest = new APIRequest("IService","getService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Service = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.getService' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.getService' request.");
               }
               return response;
          }

          /**
             Request async a service for an Url

             @param serviceRequest Service Request to invoke
             @param service        Service to call
             @param callback       Callback to execute with the result
             @since ARP1.0
          */
          invokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceRequest));
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","invokeService",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredServiceResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.invokeService' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredServiceResultCallback.remove(""+callback.getId());
                    callback.onError(IServiceResultCallbackError.Unknown)
               }
          }

          /**
             Register a new service

             @param service to register
             @since ARP1.0
          */
          registerService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","registerService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.registerService' request.");
               }
          }

          /**
             Unregister a service

             @param service to unregister
             @since ARP1.0
          */
          unregisterService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","unregisterService",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterService' request.");
               }
          }

          /**
             Unregister all services.

             @since ARP1.0
          */
          unregisterServices() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IService","unregisterServices",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterServices' request.");
               }
          }

          /**
             Check whether a service by the given service is already registered.

             @param service Service to check
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_service(service : Service) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var ar : APIRequest = new APIRequest("IService","isRegistered_service",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_service' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_service' request.");
               }
               return response;
          }

          /**
             Check whether a service by the given name is registered.

             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_serviceName(serviceName : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var ar : APIRequest = new APIRequest("IService","isRegistered_serviceName",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_serviceName' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_serviceName' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Socket operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class SocketBridge extends BaseCommunicationBridge implements ISocket {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Telephony operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class TelephonyBridge extends BaseCommunicationBridge implements ITelephony {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Invoke a phone call

             @param number to call
             @return Status of the call
             @since ARP1.0
          */
          call(number : string) : ITelephonyStatus {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(number));
               var ar : APIRequest = new APIRequest("ITelephony","call",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : ITelephonyStatus = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'TelephonyBridge.call' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'TelephonyBridge.call' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CloudBridge extends BaseDataBridge implements ICloud {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the DataStream operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class DataStreamBridge extends BaseDataBridge implements IDataStream {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
     */
     class DatabaseBridge extends BaseDataBridge implements IDatabase {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Creates a database on default path for every platform.

             @param callback Asynchronous callback
             @param database Database object to create
             @since ARP1.0
          */
          createDatabase(database : Database, callback : IDatabaseResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var ar : APIRequest = new APIRequest("IDatabase","createDatabase",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.createDatabase' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown)
               }
          }

          /**
             Creates a databaseTable inside a database for every platform.

             @param database      Database for databaseTable creating.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          createTable(database : Database, databaseTable : DatabaseTable, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var ar : APIRequest = new APIRequest("IDatabase","createTable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.createTable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
               }
          }

          /**
             Deletes a database on default path for every platform.

             @param database Database object to delete
             @param callback Asynchronous callback
             @since ARP1.0
          */
          deleteDatabase(database : Database, callback : IDatabaseResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var ar : APIRequest = new APIRequest("IDatabase","deleteDatabase",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.deleteDatabase' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown)
               }
          }

          /**
             Deletes a databaseTable inside a database for every platform.

             @param database      Database for databaseTable removal.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          deleteTable(database : Database, databaseTable : DatabaseTable, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var ar : APIRequest = new APIRequest("IDatabase","deleteTable",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.deleteTable' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
               }
          }

          /**
             Executes SQL statement into the given database. The replacements
should be passed as a parameter

             @param database     The database object reference.
             @param statement    SQL statement.
             @param replacements List of SQL statement replacements.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlStatement(database : Database, statement : string, replacements : Array<string>, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(statement));
               arParams.push(JSON.stringify(replacements));
               var ar : APIRequest = new APIRequest("IDatabase","executeSqlStatement",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.executeSqlStatement' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
               }
          }

          /**
             Executes SQL transaction (some statements chain) inside given database.

             @param database     The database object reference.
             @param statements   The statements to be executed during transaction.
             @param rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlTransactions(database : Database, statements : Array<string>, rollbackFlag : boolean, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(statements));
               arParams.push(JSON.stringify(rollbackFlag));
               var ar : APIRequest = new APIRequest("IDatabase","executeSqlTransactions",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.executeSqlTransactions' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
               }
          }

          /**
             Checks if database exists by given database name.

             @param database Database Object to check if exists
             @return True if exists, false otherwise
             @since ARP1.0
          */
          existsDatabase(database : Database) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var ar : APIRequest = new APIRequest("IDatabase","existsDatabase",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DatabaseBridge.existsDatabase' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.existsDatabase' request.");
               }
               return response;
          }

          /**
             Checks if databaseTable exists by given database name.

             @param database      Database for databaseTable consulting.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @return True if exists, false otherwise
             @since ARP1.0
          */
          existsTable(database : Database, databaseTable : DatabaseTable) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var ar : APIRequest = new APIRequest("IDatabase","existsTable",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DatabaseBridge.existsTable' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.existsTable' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the File operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class FileBridge extends BaseDataBridge implements IFile {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Determine whether the current file/folder can be read from.

             @param descriptor File descriptor of file or folder used for operation.
             @return True if the folder/file is readable, false otherwise.
             @since ARP1.0
          */
          canRead(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","canRead",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.canRead' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.canRead' request.");
               }
               return response;
          }

          /**
             Determine whether the current file/folder can be written to.

             @param descriptor File descriptor of file or folder used for operation.
             @return True if the folder/file is writable, false otherwise.
             @since ARP1.0
          */
          canWrite(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","canWrite",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.canWrite' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.canWrite' request.");
               }
               return response;
          }

          /**
             Creates a file with the specified name.

             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of the operation.
             @since ARP1.0
          */
          create(descriptor : FileDescriptor, callback : IFileResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","create",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.create' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileResultCallback.remove(""+callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown)
               }
          }

          /**
             Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

             @param descriptor File descriptor of file or folder used for operation.
             @param cascade Whether to delete sub-files and sub-folders.
             @return True if files (and sub-files and folders) whether deleted.
             @since ARP1.0
          */
          delete(descriptor : FileDescriptor, cascade : boolean) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(cascade));
               var ar : APIRequest = new APIRequest("IFile","delete",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.delete' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.delete' request.");
               }
               return response;
          }

          /**
             Check whether the file/path exists.

             @param descriptor File descriptor of file or folder used for operation.
             @return True if the file exists in the filesystem, false otherwise.
             @since ARP1.0
          */
          exists(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","exists",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.exists' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.exists' request.");
               }
               return response;
          }

          /**
             Loads the content of the file.

             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of the operation.
             @since ARP1.0
          */
          getContent(descriptor : FileDescriptor, callback : IFileDataLoadResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","getContent",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileDataLoadResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getContent' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileDataLoadResultCallback.remove(""+callback.getId());
                    callback.onError(IFileDataLoadResultCallbackError.Unknown)
               }
          }

          /**
             Returns the file storage type of the file

             @param descriptor File descriptor of file or folder used for operation.
             @return Storage Type file
             @since ARP1.0
          */
          getFileStorageType(descriptor : FileDescriptor) : IFileSystemStorageType {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","getFileStorageType",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : IFileSystemStorageType = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.getFileStorageType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getFileStorageType' request.");
               }
               return response;
          }

          /**
             Returns the file type

             @param descriptor File descriptor of file or folder used for operation.
             @return Returns the file type of the file
             @since ARP1.0
          */
          getFileType(descriptor : FileDescriptor) : IFileSystemType {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","getFileType",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : IFileSystemType = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.getFileType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getFileType' request.");
               }
               return response;
          }

          /**
             Returns the security type of the file

             @param descriptor File descriptor of file or folder used for operation.
             @return Security Level of the file
             @since ARP1.0
          */
          getSecurityType(descriptor : FileDescriptor) : IFileSystemSecurity {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","getSecurityType",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : IFileSystemSecurity = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.getSecurityType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getSecurityType' request.");
               }
               return response;
          }

          /**
             Check whether this is a path of a file.

             @param descriptor File descriptor of file or folder used for operation.
             @return true if this is a path to a folder/directory, false if this is a path to a file.
             @since ARP1.0
          */
          isDirectory(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","isDirectory",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.isDirectory' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.isDirectory' request.");
               }
               return response;
          }

          /**
             List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

             @param descriptor File descriptor of file or folder used for operation.
             @param callback Result of operation.
             @since ARP1.0
          */
          listFiles(descriptor : FileDescriptor, callback : IFileListResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var ar : APIRequest = new APIRequest("IFile","listFiles",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileListResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.listFiles' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileListResultCallback.remove(""+callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown)
               }
          }

          /**
             List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

             @param descriptor File descriptor of file or folder used for operation.
             @param regex    Filter (eg. *.jpg, *.png, Fil*) name string.
             @param callback Result of operation.
             @since ARP1.0
          */
          listFilesForRegex(descriptor : FileDescriptor, regex : string, callback : IFileListResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(regex));
               var ar : APIRequest = new APIRequest("IFile","listFilesForRegex",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileListResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.listFilesForRegex' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileListResultCallback.remove(""+callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown)
               }
          }

          /**
             Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

             @param descriptor File descriptor of file or folder used for operation.
             @param recursive Whether to create all parent path elements.
             @return True if the path was created, false otherwise (or it exists already).
             @since ARP1.0
          */
          mkDir(descriptor : FileDescriptor, recursive : boolean) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(recursive));
               var ar : APIRequest = new APIRequest("IFile","mkDir",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileBridge.mkDir' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.mkDir' request.");
               }
               return response;
          }

          /**
             Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.

             @param source File descriptor of file or folder used for operation as source.
             @param destination File descriptor of file or folder used for operation as destination.
             @param createPath True to create the path if it does not already exist.
             @param callback   Result of the operation.
             @param overwrite  True to create the path if it does not already exist.
             @since ARP1.0
          */
          move(source : FileDescriptor, destination : FileDescriptor, createPath : boolean, overwrite : boolean, callback : IFileResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(source));
               arParams.push(JSON.stringify(destination));
               arParams.push(JSON.stringify(createPath));
               arParams.push(JSON.stringify(overwrite));
               var ar : APIRequest = new APIRequest("IFile","move",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.move' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileResultCallback.remove(""+callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown)
               }
          }

          /**
             Sets the content of the file.

             @param descriptor File descriptor of file or folder used for operation.
             @param content  Binary content to store in the file.
             @param callback Result of the operation.
             @since ARP1.0
          */
          setContent(descriptor : FileDescriptor, content : Array<number>, callback : IFileDataStoreResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(content));
               var ar : APIRequest = new APIRequest("IFile","setContent",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredFileDataStoreResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.setContent' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileDataStoreResultCallback.remove(""+callback.getId());
                    callback.onError(IFileDataStoreResultCallbackError.Unknown)
               }
          }
     }

     /**
        Interface for Managing the File System operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class FileSystemBridge extends BaseDataBridge implements IFileSystem {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.

             @param parent Parent directory.
             @param name   Name of new file or directory.
             @return A reference to a new or existing location in the filesystem.
             @since ARP1.0
          */
          createFileDescriptor(parent : FileDescriptor, name : string) : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(parent));
               arParams.push(JSON.stringify(name));
               var ar : APIRequest = new APIRequest("IFileSystem","createFileDescriptor",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.createFileDescriptor' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.createFileDescriptor' request.");
               }
               return response;
          }

          /**
             Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.

             @return Path to the application's cache folder.
             @since ARP1.0
          */
          getApplicationCacheFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getApplicationCacheFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationCacheFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationCacheFolder' request.");
               }
               return response;
          }

          /**
             Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

             @return Path to the application's cloud storage folder.
             @since ARP1.0
          */
          getApplicationCloudFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getApplicationCloudFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationCloudFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationCloudFolder' request.");
               }
               return response;
          }

          /**
             Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

             @return Path to the application's documents folder.
             @since ARP1.0
          */
          getApplicationDocumentsFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getApplicationDocumentsFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationDocumentsFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationDocumentsFolder' request.");
               }
               return response;
          }

          /**
             Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

             @return Path to the application folder.
             @since ARP1.0
          */
          getApplicationFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getApplicationFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationFolder' request.");
               }
               return response;
          }

          /**
             Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

             @return Path to the application's protected storage folder.
             @since ARP1.0
          */
          getApplicationProtectedFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getApplicationProtectedFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationProtectedFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationProtectedFolder' request.");
               }
               return response;
          }

          /**
             Returns the file system dependent file separator.

             @return char with the directory/file separator.
             @since ARP1.0
          */
          getSeparator() : string {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getSeparator",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : string = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getSeparator' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getSeparator' request.");
               }
               return response;
          }

          /**
             Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.

             @return Path to the application's documents folder.
             @since ARP1.0
          */
          getSystemExternalFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IFileSystem","getSystemExternalFolder",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getSystemExternalFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getSystemExternalFolder' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Internal Storage operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class InternalStorageBridge extends BaseDataBridge implements IInternalStorage {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the XML operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class XMLBridge extends BaseDataBridge implements IXML {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Audio purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AudioBridge extends BaseMediaBridge implements IAudio {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the camera operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CameraBridge extends BaseMediaBridge implements ICamera {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Imaging operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class ImagingBridge extends BaseMediaBridge implements IImaging {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Video operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class VideoBridge extends BaseMediaBridge implements IVideo {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Play url video stream

             @param url of the video
             @since ARP1.0
          */
          playStream(url : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var ar : APIRequest = new APIRequest("IVideo","playStream",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'VideoBridge.playStream' request.");
               }
          }
     }

     /**
        Interface for Alarm purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AlarmBridge extends BaseNotificationBridge implements IAlarm {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Notification operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NotificationBridge extends BaseNotificationBridge implements INotification {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Local Notifications operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NotificationLocalBridge extends BaseNotificationBridge implements INotificationLocal {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Vibration operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class VibrationBridge extends BaseNotificationBridge implements IVibration {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Calendar operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CalendarBridge extends BasePIMBridge implements ICalendar {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class ContactBridge extends BasePIMBridge implements IContact {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Get all the details of a contact according to its id

             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContact(contact : ContactUid, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var ar : APIRequest = new APIRequest("IContact","getContact",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContact' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get the contact photo

             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var ar : APIRequest = new APIRequest("IContact","getContactPhoto",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactPhotoResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactPhoto' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactPhotoResultCallback.remove(""+callback.getId());
                    callback.onError(IContactPhotoResultCallbackError.Unknown)
               }
          }

          /**
             Get all contacts

             @param callback called for return
             @since ARP1.0
          */
          getContacts(callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IContact","getContacts",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContacts' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get marked fields of all contacts

             @param callback called for return
             @param fields   to get for each Contact
             @since ARP1.0
          */
          getContactsForFields(callback : IContactResultCallback, fields : Array<IContactFieldGroup>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               var ar : APIRequest = new APIRequest("IContact","getContactsForFields",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsForFields' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Get marked fields of all contacts according to a filter

             @param callback called for return
             @param fields   to get for each Contact
             @param filter   to search for
             @since ARP1.0
          */
          getContactsWithFilter(callback : IContactResultCallback, fields : Array<IContactFieldGroup>, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               arParams.push(JSON.stringify(filter));
               var ar : APIRequest = new APIRequest("IContact","getContactsWithFilter",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsWithFilter' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Search contacts according to a term and send it to the callback

             @param term     string to search
             @param callback called for return
             @since ARP1.0
          */
          searchContacts(term : string, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               var ar : APIRequest = new APIRequest("IContact","searchContacts",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContacts' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Search contacts according to a term with a filter and send it to the callback

             @param term     string to search
             @param callback called for return
             @param filter   to search for
             @since ARP1.0
          */
          searchContactsWithFilter(term : string, callback : IContactResultCallback, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               arParams.push(JSON.stringify(filter));
               var ar : APIRequest = new APIRequest("IContact","searchContactsWithFilter",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContactsWithFilter' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
               }
          }

          /**
             Set the contact photo

             @param contact  id to assign the photo
             @param pngImage photo as byte array
             @return true if set is successful;false otherwise
             @since ARP1.0
          */
          setContactPhoto(contact : ContactUid, pngImage : Array<number>) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               arParams.push(JSON.stringify(pngImage));
               var ar : APIRequest = new APIRequest("IContact","setContactPhoto",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'ContactBridge.setContactPhoto' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.setContactPhoto' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Mail operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class MailBridge extends BasePIMBridge implements IMail {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Send an Email

             @param data     Payload of the email
             @param callback Result callback of the operation
             @since ARP1.0
          */
          sendEmail(data : Email, callback : IMessagingCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(data));
               var ar : APIRequest = new APIRequest("IMail","sendEmail",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredMessagingCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'MailBridge.sendEmail' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredMessagingCallback.remove(""+callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown)
               }
          }
     }

     /**
        Interface for Managing the Messaging operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class MessagingBridge extends BasePIMBridge implements IMessaging {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Send text SMS

             @param number   to send
             @param text     to send
             @param callback with the result
             @since ARP1.0
          */
          sendSMS(number : string, text : string, callback : IMessagingCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(number));
               arParams.push(JSON.stringify(text));
               var ar : APIRequest = new APIRequest("IMessaging","sendSMS",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredMessagingCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'MessagingBridge.sendSMS' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredMessagingCallback.remove(""+callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown)
               }
          }
     }

     /**
        Interface for Barcode Reading purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class BarcodeBridge extends BaseReaderBridge implements IBarcode {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the NFC operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class NFCBridge extends BaseReaderBridge implements INFC {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the OCR operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class OCRBridge extends BaseReaderBridge implements IOCR {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the QR Code operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class QRCodeBridge extends BaseReaderBridge implements IQRCode {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the OAuth operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class OAuthBridge extends BaseSecurityBridge implements IOAuth {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the OpenID operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class OpenIdBridge extends BaseSecurityBridge implements IOpenId {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Security operations

        @author Aryslan
        @since ARP1.0
     */
     class SecurityBridge extends BaseSecurityBridge implements ISecurity {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Deletes from the device internal storage the entry/entries containing the specified key names.

             @param keys             Array with the key names to delete.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          deleteSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var ar : APIRequest = new APIRequest("ISecurity","deleteSecureKeyValuePairs",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.deleteSecureKeyValuePairs' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
               }
          }

          /**
             Retrieves from the device internal storage the entry/entries containing the specified key names.

             @param keys             Array with the key names to retrieve.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          getSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var ar : APIRequest = new APIRequest("ISecurity","getSecureKeyValuePairs",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.getSecureKeyValuePairs' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
               }
          }

          /**
             Returns if the device has been modified in anyhow

             @return true if the device has been modified; false otherwise
             @since ARP1.0
          */
          isDeviceModified() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("ISecurity","isDeviceModified",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'SecurityBridge.isDeviceModified' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.isDeviceModified' request.");
               }
               return response;
          }

          /**
             Stores in the device internal storage the specified item/s.

             @param keyValues        Array containing the items to store on the device internal memory.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          setSecureKeyValuePairs(keyValues : Array<SecureKeyPair>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keyValues));
               arParams.push(JSON.stringify(publicAccessName));
               var ar : APIRequest = new APIRequest("ISecurity","setSecureKeyValuePairs",arParams, callback.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.setSecureKeyValuePairs' request.");
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
               }
          }
     }

     /**
        Interface defining methods about the acceleration sensor

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AccelerationBridge extends BaseSensorBridge implements IAcceleration {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive acceleration events.

             @param listener to be registered.
             @since ARP1.0
          */
          addAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","addAccelerationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredAccelerationListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.addAccelerationListener' request.");
               }
          }

          /**
             De-registers an existing listener from receiving acceleration events.

             @param listener to be registered.
             @since ARP1.0
          */
          removeAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","removeAccelerationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredAccelerationListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving acceleration events.

             @since ARP1.0
          */
          removeAccelerationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IAcceleration","removeAccelerationListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredAccelerationListener.keys();
                    for (var key in keys) {
                         registeredAccelerationListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListeners' request.");
               }
          }
     }

     /**
        Interface for managinf the Ambient Light

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class AmbientLightBridge extends BaseSensorBridge implements IAmbientLight {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Barometer management purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class BarometerBridge extends BaseSensorBridge implements IBarometer {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class GeolocationBridge extends BaseSensorBridge implements IGeolocation {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive geolocation events.

             @param listener to be registered.
             @since ARP1.0
          */
          addGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","addGeolocationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredGeolocationListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.addGeolocationListener' request.");
               }
          }

          /**
             De-registers an existing listener from receiving geolocation events.

             @param listener to be registered.
             @since ARP1.0
          */
          removeGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","removeGeolocationListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredGeolocationListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving geolocation events.

             @since ARP1.0
          */
          removeGeolocationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IGeolocation","removeGeolocationListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredGeolocationListener.keys();
                    for (var key in keys) {
                         registeredGeolocationListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListeners' request.");
               }
          }
     }

     /**
        Interface for Managing the Giroscope operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class GyroscopeBridge extends BaseSensorBridge implements IGyroscope {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Magnetometer operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class MagnetometerBridge extends BaseSensorBridge implements IMagnetometer {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Proximity operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class ProximityBridge extends BaseSensorBridge implements IProximity {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Facebook operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class FacebookBridge extends BaseSocialBridge implements IFacebook {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Google Plus operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class GooglePlusBridge extends BaseSocialBridge implements IGooglePlus {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Linkedin operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class LinkedInBridge extends BaseSocialBridge implements ILinkedIn {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the RSS operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class RSSBridge extends BaseSocialBridge implements IRSS {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Twitter operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class TwitterBridge extends BaseSocialBridge implements ITwitter {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Determines whether a specific hardware button is supported for interaction.

             @param type Type of feature to check.
             @return true is supported, false otherwise.
             @since ARP1.0
          */
          hasButtonSupport(type : ICapabilitiesButton) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasButtonSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasButtonSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasButtonSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Communication capability is supported by
the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasCommunicationSupport(type : ICapabilitiesCommunication) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasCommunicationSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasCommunicationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasCommunicationSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Data capability is supported by the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasDataSupport(type : ICapabilitiesData) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasDataSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasDataSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasDataSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Media capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasMediaSupport(type : ICapabilitiesMedia) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasMediaSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasMediaSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasMediaSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Net capability is supported by the device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNetSupport(type : ICapabilitiesNet) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasNetSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNetSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNetSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Notification capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasNotificationSupport(type : ICapabilitiesNotification) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasNotificationSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNotificationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNotificationSupport' request.");
               }
               return response;
          }

          /**
             Determines whether a specific Sensor capability is supported by the
device.

             @param type Type of feature to check.
             @return true if supported, false otherwise.
             @since ARP1.0
          */
          hasSensorSupport(type : ICapabilitiesSensor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var ar : APIRequest = new APIRequest("ICapabilities","hasSensorSupport",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasSensorSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasSensorSupport' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Device operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class DeviceBridge extends BaseSystemBridge implements IDevice {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Register a new listener that will receive button events.

             @param listener to be registered.
             @since ARP1.0
          */
          addButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","addButtonListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Add listener reference to local dictionary.
                    registeredButtonListener.add(""+listener.getId(), listener);
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.addButtonListener' request.");
               }
          }

          /**
             Returns the device information for the current device executing the runtime.

             @return DeviceInfo for the current device.
             @since ARP1.0
          */
          getDeviceInfo() : DeviceInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","getDeviceInfo",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : DeviceInfo = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DeviceBridge.getDeviceInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getDeviceInfo' request.");
               }
               return response;
          }

          /**
             Gets the current Locale for the device.

             @return The current Locale information.
             @since ARP1.0
          */
          getLocaleCurrent() : Locale {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","getLocaleCurrent",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : Locale = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'DeviceBridge.getLocaleCurrent' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getLocaleCurrent' request.");
               }
               return response;
          }

          /**
             De-registers an existing listener from receiving button events.

             @param listener to be removed.
             @since ARP1.0
          */
          removeButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","removeButtonListener",arParams, listener.getId());
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove listener reference from local dictionary.
                    registeredButtonListener.remove(""+listener.getId());
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListener' request.");
               }
          }

          /**
             Removed all existing listeners from receiving button events.

             @since ARP1.0
          */
          removeButtonListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IDevice","removeButtonListeners",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Remove all listeners references from local dictionary.
                    var keys = registeredButtonListener.keys();
                    for (var key in keys) {
                         registeredButtonListener.remove(key);
                    }
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListeners' request.");
               }
          }
     }

     /**
        Interface for Managing the Display operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class DisplayBridge extends BaseSystemBridge implements IDisplay {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the OS operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class OSBridge extends BaseSystemBridge implements IOS {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Returns the OSInfo for the current operating system.

             @return OSInfo with name, version and vendor of the OS.
             @since ARP1.0
          */
          getOSInfo() : OSInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IOS","getOSInfo",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : OSInfo = null;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'OSBridge.getOSInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'OSBridge.getOSInfo' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Runtime operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class RuntimeBridge extends BaseSystemBridge implements IRuntime {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Dismiss the current Application

             @since ARP1.0
          */
          dismissApplication() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IRuntime","dismissApplication",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'RuntimeBridge.dismissApplication' request.");
               }
          }

          /**
             Whether the application dismiss the splash screen successfully or not

             @return true if the application has dismissed the splash screen;false otherwise
             @since ARP1.0
          */
          dismissSplashScreen() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var ar : APIRequest = new APIRequest("IRuntime","dismissSplashScreen",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'RuntimeBridge.dismissSplashScreen' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'RuntimeBridge.dismissSplashScreen' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the browser operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     class BrowserBridge extends BaseUIBridge implements IBrowser {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Method for opening a URL like a link in the native default browser

             @param url Url to open
             @return The result of the operation
             @since ARP1.0
          */
          openExtenalBrowser(url : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var ar : APIRequest = new APIRequest("IBrowser","openExtenalBrowser",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'BrowserBridge.openExtenalBrowser' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openExtenalBrowser' request.");
               }
               return response;
          }

          /**
             Method for opening a browser embedded into the application

             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return The result of the operation
             @since ARP1.0
          */
          openInternalBrowser(url : string, title : string, backButtonText : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               arParams.push(JSON.stringify(title));
               arParams.push(JSON.stringify(backButtonText));
               var ar : APIRequest = new APIRequest("IBrowser","openInternalBrowser",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'BrowserBridge.openInternalBrowser' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openInternalBrowser' request.");
               }
               return response;
          }

          /**
             Method for opening a browser embedded into the application in a modal window

             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return The result of the operation
             @since ARP1.0
          */
          openInternalBrowserModal(url : string, title : string, backButtonText : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               arParams.push(JSON.stringify(title));
               arParams.push(JSON.stringify(backButtonText));
               var ar : APIRequest = new APIRequest("IBrowser","openInternalBrowserModal",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         response = JSON.parse(xhr.responseText);
                    } else {
                         console.error("ERROR: 'BrowserBridge.openInternalBrowserModal' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openInternalBrowserModal' request.");
               }
               return response;
          }
     }

     /**
        Interface for Managing the Desktop operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class DesktopBridge extends BaseUIBridge implements IDesktop {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Map operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class MapBridge extends BaseUIBridge implements IMap {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the UI operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class UIBridge extends BaseUIBridge implements IUI {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Compression operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CompressionBridge extends BaseUtilBridge implements ICompression {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Concurrent operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class ConcurrentBridge extends BaseUtilBridge implements IConcurrent {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class CryptoBridge extends BaseUtilBridge implements ICrypto {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface for Managing the Logging operations

        @author Ferran Vila Conesa
        @since ARP1.0
     */
     class LoggingBridge extends BaseUtilBridge implements ILogging {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level   Log level
             @param message Message to be logged
             @since ARP1.0
          */
          log_level_message(level : ILoggingLogLevel, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(message));
               var ar : APIRequest = new APIRequest("ILogging","log_level_message",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_message' request.");
               }
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level    Log level
             @param category Category/tag name to identify/filter the log.
             @param message  Message to be logged
             @since ARP1.0
          */
          log_level_category_message(level : ILoggingLogLevel, category : string, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(category));
               arParams.push(JSON.stringify(message));
               var ar : APIRequest = new APIRequest("ILogging","log_level_category_message",arParams, -1 /* = synchronous call */);
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.send(JSON.stringify(ar));
               // Check response.
               if (xhr.status == 200) {
                    // Result void - All OK, nothing else todo.
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_category_message' request.");
               }
          }
     }

     /**
        Interface for Managing the Timer operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     class TimerBridge extends BaseUtilBridge implements ITimer {

          /**
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        Interface to retrieve auto-registered service implementation references.

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AppRegistryBridge implements IAppRegistry {

          /**
             Singleton instance of AppRegistry.
          */
          private static instance : IAppRegistry = null;

          public static getInstance() : IAppRegistry {
               if (AppRegistryBridge.instance === null) {
                    AppRegistryBridge.instance = new AppRegistryBridge();
               }
               return AppRegistryBridge.instance;
          }

          /**
             Singleton instances of Bridges.
          */
          private static instanceAcceleration : IAcceleration = null;
          private static instanceAds : IAds = null;
          private static instanceAlarm : IAlarm = null;
          private static instanceAmbientLight : IAmbientLight = null;
          private static instanceAnalytics : IAnalytics = null;
          private static instanceAudio : IAudio = null;
          private static instanceBarcode : IBarcode = null;
          private static instanceBarometer : IBarometer = null;
          private static instanceBluetooth : IBluetooth = null;
          private static instanceBrowser : IBrowser = null;
          private static instanceCalendar : ICalendar = null;
          private static instanceCamera : ICamera = null;
          private static instanceCapabilities : ICapabilities = null;
          private static instanceCloud : ICloud = null;
          private static instanceCompression : ICompression = null;
          private static instanceConcurrent : IConcurrent = null;
          private static instanceContact : IContact = null;
          private static instanceCrypto : ICrypto = null;
          private static instanceDataStream : IDataStream = null;
          private static instanceDatabase : IDatabase = null;
          private static instanceDesktop : IDesktop = null;
          private static instanceDevice : IDevice = null;
          private static instanceDisplay : IDisplay = null;
          private static instanceFacebook : IFacebook = null;
          private static instanceFile : IFile = null;
          private static instanceFileSystem : IFileSystem = null;
          private static instanceGeolocation : IGeolocation = null;
          private static instanceGlobalization : IGlobalization = null;
          private static instanceGooglePlus : IGooglePlus = null;
          private static instanceGyroscope : IGyroscope = null;
          private static instanceImaging : IImaging = null;
          private static instanceInternalStorage : IInternalStorage = null;
          private static instanceLifecycle : ILifecycle = null;
          private static instanceLinkedIn : ILinkedIn = null;
          private static instanceLogging : ILogging = null;
          private static instanceMagnetometer : IMagnetometer = null;
          private static instanceMail : IMail = null;
          private static instanceManagement : IManagement = null;
          private static instanceMap : IMap = null;
          private static instanceMessaging : IMessaging = null;
          private static instanceNFC : INFC = null;
          private static instanceNetworkInfo : INetworkInfo = null;
          private static instanceNetworkNaming : INetworkNaming = null;
          private static instanceNetworkReachability : INetworkReachability = null;
          private static instanceNetworkStatus : INetworkStatus = null;
          private static instanceNotification : INotification = null;
          private static instanceNotificationLocal : INotificationLocal = null;
          private static instanceOAuth : IOAuth = null;
          private static instanceOCR : IOCR = null;
          private static instanceOS : IOS = null;
          private static instanceOpenId : IOpenId = null;
          private static instancePrinting : IPrinting = null;
          private static instanceProximity : IProximity = null;
          private static instanceQRCode : IQRCode = null;
          private static instanceRSS : IRSS = null;
          private static instanceRuntime : IRuntime = null;
          private static instanceSecurity : ISecurity = null;
          private static instanceService : IService = null;
          private static instanceSettings : ISettings = null;
          private static instanceSocket : ISocket = null;
          private static instanceStore : IStore = null;
          private static instanceTelephony : ITelephony = null;
          private static instanceTimer : ITimer = null;
          private static instanceTwitter : ITwitter = null;
          private static instanceUI : IUI = null;
          private static instanceUpdate : IUpdate = null;
          private static instanceVibration : IVibration = null;
          private static instanceVideo : IVideo = null;
          private static instanceWallet : IWallet = null;
          private static instanceXML : IXML = null;

          /**
             Obtain a reference to the IAcceleration bridge.

             @return IAcceleration bridge instance.
          */
          public getAccelerationBridge() : IAcceleration {
               if (AppRegistryBridge.instanceAcceleration === null) {
                    AppRegistryBridge.instanceAcceleration= new AccelerationBridge();
               }
               return AppRegistryBridge.instanceAcceleration;
          }

          /**
             Obtain a reference to the IAds bridge.

             @return IAds bridge instance.
          */
          public getAdsBridge() : IAds {
               if (AppRegistryBridge.instanceAds === null) {
                    AppRegistryBridge.instanceAds= new AdsBridge();
               }
               return AppRegistryBridge.instanceAds;
          }

          /**
             Obtain a reference to the IAlarm bridge.

             @return IAlarm bridge instance.
          */
          public getAlarmBridge() : IAlarm {
               if (AppRegistryBridge.instanceAlarm === null) {
                    AppRegistryBridge.instanceAlarm= new AlarmBridge();
               }
               return AppRegistryBridge.instanceAlarm;
          }

          /**
             Obtain a reference to the IAmbientLight bridge.

             @return IAmbientLight bridge instance.
          */
          public getAmbientLightBridge() : IAmbientLight {
               if (AppRegistryBridge.instanceAmbientLight === null) {
                    AppRegistryBridge.instanceAmbientLight= new AmbientLightBridge();
               }
               return AppRegistryBridge.instanceAmbientLight;
          }

          /**
             Obtain a reference to the IAnalytics bridge.

             @return IAnalytics bridge instance.
          */
          public getAnalyticsBridge() : IAnalytics {
               if (AppRegistryBridge.instanceAnalytics === null) {
                    AppRegistryBridge.instanceAnalytics= new AnalyticsBridge();
               }
               return AppRegistryBridge.instanceAnalytics;
          }

          /**
             Obtain a reference to the IAudio bridge.

             @return IAudio bridge instance.
          */
          public getAudioBridge() : IAudio {
               if (AppRegistryBridge.instanceAudio === null) {
                    AppRegistryBridge.instanceAudio= new AudioBridge();
               }
               return AppRegistryBridge.instanceAudio;
          }

          /**
             Obtain a reference to the IBarcode bridge.

             @return IBarcode bridge instance.
          */
          public getBarcodeBridge() : IBarcode {
               if (AppRegistryBridge.instanceBarcode === null) {
                    AppRegistryBridge.instanceBarcode= new BarcodeBridge();
               }
               return AppRegistryBridge.instanceBarcode;
          }

          /**
             Obtain a reference to the IBarometer bridge.

             @return IBarometer bridge instance.
          */
          public getBarometerBridge() : IBarometer {
               if (AppRegistryBridge.instanceBarometer === null) {
                    AppRegistryBridge.instanceBarometer= new BarometerBridge();
               }
               return AppRegistryBridge.instanceBarometer;
          }

          /**
             Obtain a reference to the IBluetooth bridge.

             @return IBluetooth bridge instance.
          */
          public getBluetoothBridge() : IBluetooth {
               if (AppRegistryBridge.instanceBluetooth === null) {
                    AppRegistryBridge.instanceBluetooth= new BluetoothBridge();
               }
               return AppRegistryBridge.instanceBluetooth;
          }

          /**
             Obtain a reference to the IBrowser bridge.

             @return IBrowser bridge instance.
          */
          public getBrowserBridge() : IBrowser {
               if (AppRegistryBridge.instanceBrowser === null) {
                    AppRegistryBridge.instanceBrowser= new BrowserBridge();
               }
               return AppRegistryBridge.instanceBrowser;
          }

          /**
             Obtain a reference to the ICalendar bridge.

             @return ICalendar bridge instance.
          */
          public getCalendarBridge() : ICalendar {
               if (AppRegistryBridge.instanceCalendar === null) {
                    AppRegistryBridge.instanceCalendar= new CalendarBridge();
               }
               return AppRegistryBridge.instanceCalendar;
          }

          /**
             Obtain a reference to the ICamera bridge.

             @return ICamera bridge instance.
          */
          public getCameraBridge() : ICamera {
               if (AppRegistryBridge.instanceCamera === null) {
                    AppRegistryBridge.instanceCamera= new CameraBridge();
               }
               return AppRegistryBridge.instanceCamera;
          }

          /**
             Obtain a reference to the ICapabilities bridge.

             @return ICapabilities bridge instance.
          */
          public getCapabilitiesBridge() : ICapabilities {
               if (AppRegistryBridge.instanceCapabilities === null) {
                    AppRegistryBridge.instanceCapabilities= new CapabilitiesBridge();
               }
               return AppRegistryBridge.instanceCapabilities;
          }

          /**
             Obtain a reference to the ICloud bridge.

             @return ICloud bridge instance.
          */
          public getCloudBridge() : ICloud {
               if (AppRegistryBridge.instanceCloud === null) {
                    AppRegistryBridge.instanceCloud= new CloudBridge();
               }
               return AppRegistryBridge.instanceCloud;
          }

          /**
             Obtain a reference to the ICompression bridge.

             @return ICompression bridge instance.
          */
          public getCompressionBridge() : ICompression {
               if (AppRegistryBridge.instanceCompression === null) {
                    AppRegistryBridge.instanceCompression= new CompressionBridge();
               }
               return AppRegistryBridge.instanceCompression;
          }

          /**
             Obtain a reference to the IConcurrent bridge.

             @return IConcurrent bridge instance.
          */
          public getConcurrentBridge() : IConcurrent {
               if (AppRegistryBridge.instanceConcurrent === null) {
                    AppRegistryBridge.instanceConcurrent= new ConcurrentBridge();
               }
               return AppRegistryBridge.instanceConcurrent;
          }

          /**
             Obtain a reference to the IContact bridge.

             @return IContact bridge instance.
          */
          public getContactBridge() : IContact {
               if (AppRegistryBridge.instanceContact === null) {
                    AppRegistryBridge.instanceContact= new ContactBridge();
               }
               return AppRegistryBridge.instanceContact;
          }

          /**
             Obtain a reference to the ICrypto bridge.

             @return ICrypto bridge instance.
          */
          public getCryptoBridge() : ICrypto {
               if (AppRegistryBridge.instanceCrypto === null) {
                    AppRegistryBridge.instanceCrypto= new CryptoBridge();
               }
               return AppRegistryBridge.instanceCrypto;
          }

          /**
             Obtain a reference to the IDataStream bridge.

             @return IDataStream bridge instance.
          */
          public getDataStreamBridge() : IDataStream {
               if (AppRegistryBridge.instanceDataStream === null) {
                    AppRegistryBridge.instanceDataStream= new DataStreamBridge();
               }
               return AppRegistryBridge.instanceDataStream;
          }

          /**
             Obtain a reference to the IDatabase bridge.

             @return IDatabase bridge instance.
          */
          public getDatabaseBridge() : IDatabase {
               if (AppRegistryBridge.instanceDatabase === null) {
                    AppRegistryBridge.instanceDatabase= new DatabaseBridge();
               }
               return AppRegistryBridge.instanceDatabase;
          }

          /**
             Obtain a reference to the IDesktop bridge.

             @return IDesktop bridge instance.
          */
          public getDesktopBridge() : IDesktop {
               if (AppRegistryBridge.instanceDesktop === null) {
                    AppRegistryBridge.instanceDesktop= new DesktopBridge();
               }
               return AppRegistryBridge.instanceDesktop;
          }

          /**
             Obtain a reference to the IDevice bridge.

             @return IDevice bridge instance.
          */
          public getDeviceBridge() : IDevice {
               if (AppRegistryBridge.instanceDevice === null) {
                    AppRegistryBridge.instanceDevice= new DeviceBridge();
               }
               return AppRegistryBridge.instanceDevice;
          }

          /**
             Obtain a reference to the IDisplay bridge.

             @return IDisplay bridge instance.
          */
          public getDisplayBridge() : IDisplay {
               if (AppRegistryBridge.instanceDisplay === null) {
                    AppRegistryBridge.instanceDisplay= new DisplayBridge();
               }
               return AppRegistryBridge.instanceDisplay;
          }

          /**
             Obtain a reference to the IFacebook bridge.

             @return IFacebook bridge instance.
          */
          public getFacebookBridge() : IFacebook {
               if (AppRegistryBridge.instanceFacebook === null) {
                    AppRegistryBridge.instanceFacebook= new FacebookBridge();
               }
               return AppRegistryBridge.instanceFacebook;
          }

          /**
             Obtain a reference to the IFile bridge.

             @return IFile bridge instance.
          */
          public getFileBridge() : IFile {
               if (AppRegistryBridge.instanceFile === null) {
                    AppRegistryBridge.instanceFile= new FileBridge();
               }
               return AppRegistryBridge.instanceFile;
          }

          /**
             Obtain a reference to the IFileSystem bridge.

             @return IFileSystem bridge instance.
          */
          public getFileSystemBridge() : IFileSystem {
               if (AppRegistryBridge.instanceFileSystem === null) {
                    AppRegistryBridge.instanceFileSystem= new FileSystemBridge();
               }
               return AppRegistryBridge.instanceFileSystem;
          }

          /**
             Obtain a reference to the IGeolocation bridge.

             @return IGeolocation bridge instance.
          */
          public getGeolocationBridge() : IGeolocation {
               if (AppRegistryBridge.instanceGeolocation === null) {
                    AppRegistryBridge.instanceGeolocation= new GeolocationBridge();
               }
               return AppRegistryBridge.instanceGeolocation;
          }

          /**
             Obtain a reference to the IGlobalization bridge.

             @return IGlobalization bridge instance.
          */
          public getGlobalizationBridge() : IGlobalization {
               if (AppRegistryBridge.instanceGlobalization === null) {
                    AppRegistryBridge.instanceGlobalization= new GlobalizationBridge();
               }
               return AppRegistryBridge.instanceGlobalization;
          }

          /**
             Obtain a reference to the IGooglePlus bridge.

             @return IGooglePlus bridge instance.
          */
          public getGooglePlusBridge() : IGooglePlus {
               if (AppRegistryBridge.instanceGooglePlus === null) {
                    AppRegistryBridge.instanceGooglePlus= new GooglePlusBridge();
               }
               return AppRegistryBridge.instanceGooglePlus;
          }

          /**
             Obtain a reference to the IGyroscope bridge.

             @return IGyroscope bridge instance.
          */
          public getGyroscopeBridge() : IGyroscope {
               if (AppRegistryBridge.instanceGyroscope === null) {
                    AppRegistryBridge.instanceGyroscope= new GyroscopeBridge();
               }
               return AppRegistryBridge.instanceGyroscope;
          }

          /**
             Obtain a reference to the IImaging bridge.

             @return IImaging bridge instance.
          */
          public getImagingBridge() : IImaging {
               if (AppRegistryBridge.instanceImaging === null) {
                    AppRegistryBridge.instanceImaging= new ImagingBridge();
               }
               return AppRegistryBridge.instanceImaging;
          }

          /**
             Obtain a reference to the IInternalStorage bridge.

             @return IInternalStorage bridge instance.
          */
          public getInternalStorageBridge() : IInternalStorage {
               if (AppRegistryBridge.instanceInternalStorage === null) {
                    AppRegistryBridge.instanceInternalStorage= new InternalStorageBridge();
               }
               return AppRegistryBridge.instanceInternalStorage;
          }

          /**
             Obtain a reference to the ILifecycle bridge.

             @return ILifecycle bridge instance.
          */
          public getLifecycleBridge() : ILifecycle {
               if (AppRegistryBridge.instanceLifecycle === null) {
                    AppRegistryBridge.instanceLifecycle= new LifecycleBridge();
               }
               return AppRegistryBridge.instanceLifecycle;
          }

          /**
             Obtain a reference to the ILinkedIn bridge.

             @return ILinkedIn bridge instance.
          */
          public getLinkedInBridge() : ILinkedIn {
               if (AppRegistryBridge.instanceLinkedIn === null) {
                    AppRegistryBridge.instanceLinkedIn= new LinkedInBridge();
               }
               return AppRegistryBridge.instanceLinkedIn;
          }

          /**
             Obtain a reference to the ILogging bridge.

             @return ILogging bridge instance.
          */
          public getLoggingBridge() : ILogging {
               if (AppRegistryBridge.instanceLogging === null) {
                    AppRegistryBridge.instanceLogging= new LoggingBridge();
               }
               return AppRegistryBridge.instanceLogging;
          }

          /**
             Obtain a reference to the IMagnetometer bridge.

             @return IMagnetometer bridge instance.
          */
          public getMagnetometerBridge() : IMagnetometer {
               if (AppRegistryBridge.instanceMagnetometer === null) {
                    AppRegistryBridge.instanceMagnetometer= new MagnetometerBridge();
               }
               return AppRegistryBridge.instanceMagnetometer;
          }

          /**
             Obtain a reference to the IMail bridge.

             @return IMail bridge instance.
          */
          public getMailBridge() : IMail {
               if (AppRegistryBridge.instanceMail === null) {
                    AppRegistryBridge.instanceMail= new MailBridge();
               }
               return AppRegistryBridge.instanceMail;
          }

          /**
             Obtain a reference to the IManagement bridge.

             @return IManagement bridge instance.
          */
          public getManagementBridge() : IManagement {
               if (AppRegistryBridge.instanceManagement === null) {
                    AppRegistryBridge.instanceManagement= new ManagementBridge();
               }
               return AppRegistryBridge.instanceManagement;
          }

          /**
             Obtain a reference to the IMap bridge.

             @return IMap bridge instance.
          */
          public getMapBridge() : IMap {
               if (AppRegistryBridge.instanceMap === null) {
                    AppRegistryBridge.instanceMap= new MapBridge();
               }
               return AppRegistryBridge.instanceMap;
          }

          /**
             Obtain a reference to the IMessaging bridge.

             @return IMessaging bridge instance.
          */
          public getMessagingBridge() : IMessaging {
               if (AppRegistryBridge.instanceMessaging === null) {
                    AppRegistryBridge.instanceMessaging= new MessagingBridge();
               }
               return AppRegistryBridge.instanceMessaging;
          }

          /**
             Obtain a reference to the INFC bridge.

             @return INFC bridge instance.
          */
          public getNFCBridge() : INFC {
               if (AppRegistryBridge.instanceNFC === null) {
                    AppRegistryBridge.instanceNFC= new NFCBridge();
               }
               return AppRegistryBridge.instanceNFC;
          }

          /**
             Obtain a reference to the INetworkInfo bridge.

             @return INetworkInfo bridge instance.
          */
          public getNetworkInfoBridge() : INetworkInfo {
               if (AppRegistryBridge.instanceNetworkInfo === null) {
                    AppRegistryBridge.instanceNetworkInfo= new NetworkInfoBridge();
               }
               return AppRegistryBridge.instanceNetworkInfo;
          }

          /**
             Obtain a reference to the INetworkNaming bridge.

             @return INetworkNaming bridge instance.
          */
          public getNetworkNamingBridge() : INetworkNaming {
               if (AppRegistryBridge.instanceNetworkNaming === null) {
                    AppRegistryBridge.instanceNetworkNaming= new NetworkNamingBridge();
               }
               return AppRegistryBridge.instanceNetworkNaming;
          }

          /**
             Obtain a reference to the INetworkReachability bridge.

             @return INetworkReachability bridge instance.
          */
          public getNetworkReachabilityBridge() : INetworkReachability {
               if (AppRegistryBridge.instanceNetworkReachability === null) {
                    AppRegistryBridge.instanceNetworkReachability= new NetworkReachabilityBridge();
               }
               return AppRegistryBridge.instanceNetworkReachability;
          }

          /**
             Obtain a reference to the INetworkStatus bridge.

             @return INetworkStatus bridge instance.
          */
          public getNetworkStatusBridge() : INetworkStatus {
               if (AppRegistryBridge.instanceNetworkStatus === null) {
                    AppRegistryBridge.instanceNetworkStatus= new NetworkStatusBridge();
               }
               return AppRegistryBridge.instanceNetworkStatus;
          }

          /**
             Obtain a reference to the INotification bridge.

             @return INotification bridge instance.
          */
          public getNotificationBridge() : INotification {
               if (AppRegistryBridge.instanceNotification === null) {
                    AppRegistryBridge.instanceNotification= new NotificationBridge();
               }
               return AppRegistryBridge.instanceNotification;
          }

          /**
             Obtain a reference to the INotificationLocal bridge.

             @return INotificationLocal bridge instance.
          */
          public getNotificationLocalBridge() : INotificationLocal {
               if (AppRegistryBridge.instanceNotificationLocal === null) {
                    AppRegistryBridge.instanceNotificationLocal= new NotificationLocalBridge();
               }
               return AppRegistryBridge.instanceNotificationLocal;
          }

          /**
             Obtain a reference to the IOAuth bridge.

             @return IOAuth bridge instance.
          */
          public getOAuthBridge() : IOAuth {
               if (AppRegistryBridge.instanceOAuth === null) {
                    AppRegistryBridge.instanceOAuth= new OAuthBridge();
               }
               return AppRegistryBridge.instanceOAuth;
          }

          /**
             Obtain a reference to the IOCR bridge.

             @return IOCR bridge instance.
          */
          public getOCRBridge() : IOCR {
               if (AppRegistryBridge.instanceOCR === null) {
                    AppRegistryBridge.instanceOCR= new OCRBridge();
               }
               return AppRegistryBridge.instanceOCR;
          }

          /**
             Obtain a reference to the IOS bridge.

             @return IOS bridge instance.
          */
          public getOSBridge() : IOS {
               if (AppRegistryBridge.instanceOS === null) {
                    AppRegistryBridge.instanceOS= new OSBridge();
               }
               return AppRegistryBridge.instanceOS;
          }

          /**
             Obtain a reference to the IOpenId bridge.

             @return IOpenId bridge instance.
          */
          public getOpenIdBridge() : IOpenId {
               if (AppRegistryBridge.instanceOpenId === null) {
                    AppRegistryBridge.instanceOpenId= new OpenIdBridge();
               }
               return AppRegistryBridge.instanceOpenId;
          }

          /**
             Obtain a reference to the IPrinting bridge.

             @return IPrinting bridge instance.
          */
          public getPrintingBridge() : IPrinting {
               if (AppRegistryBridge.instancePrinting === null) {
                    AppRegistryBridge.instancePrinting= new PrintingBridge();
               }
               return AppRegistryBridge.instancePrinting;
          }

          /**
             Obtain a reference to the IProximity bridge.

             @return IProximity bridge instance.
          */
          public getProximityBridge() : IProximity {
               if (AppRegistryBridge.instanceProximity === null) {
                    AppRegistryBridge.instanceProximity= new ProximityBridge();
               }
               return AppRegistryBridge.instanceProximity;
          }

          /**
             Obtain a reference to the IQRCode bridge.

             @return IQRCode bridge instance.
          */
          public getQRCodeBridge() : IQRCode {
               if (AppRegistryBridge.instanceQRCode === null) {
                    AppRegistryBridge.instanceQRCode= new QRCodeBridge();
               }
               return AppRegistryBridge.instanceQRCode;
          }

          /**
             Obtain a reference to the IRSS bridge.

             @return IRSS bridge instance.
          */
          public getRSSBridge() : IRSS {
               if (AppRegistryBridge.instanceRSS === null) {
                    AppRegistryBridge.instanceRSS= new RSSBridge();
               }
               return AppRegistryBridge.instanceRSS;
          }

          /**
             Obtain a reference to the IRuntime bridge.

             @return IRuntime bridge instance.
          */
          public getRuntimeBridge() : IRuntime {
               if (AppRegistryBridge.instanceRuntime === null) {
                    AppRegistryBridge.instanceRuntime= new RuntimeBridge();
               }
               return AppRegistryBridge.instanceRuntime;
          }

          /**
             Obtain a reference to the ISecurity bridge.

             @return ISecurity bridge instance.
          */
          public getSecurityBridge() : ISecurity {
               if (AppRegistryBridge.instanceSecurity === null) {
                    AppRegistryBridge.instanceSecurity= new SecurityBridge();
               }
               return AppRegistryBridge.instanceSecurity;
          }

          /**
             Obtain a reference to the IService bridge.

             @return IService bridge instance.
          */
          public getServiceBridge() : IService {
               if (AppRegistryBridge.instanceService === null) {
                    AppRegistryBridge.instanceService= new ServiceBridge();
               }
               return AppRegistryBridge.instanceService;
          }

          /**
             Obtain a reference to the ISettings bridge.

             @return ISettings bridge instance.
          */
          public getSettingsBridge() : ISettings {
               if (AppRegistryBridge.instanceSettings === null) {
                    AppRegistryBridge.instanceSettings= new SettingsBridge();
               }
               return AppRegistryBridge.instanceSettings;
          }

          /**
             Obtain a reference to the ISocket bridge.

             @return ISocket bridge instance.
          */
          public getSocketBridge() : ISocket {
               if (AppRegistryBridge.instanceSocket === null) {
                    AppRegistryBridge.instanceSocket= new SocketBridge();
               }
               return AppRegistryBridge.instanceSocket;
          }

          /**
             Obtain a reference to the IStore bridge.

             @return IStore bridge instance.
          */
          public getStoreBridge() : IStore {
               if (AppRegistryBridge.instanceStore === null) {
                    AppRegistryBridge.instanceStore= new StoreBridge();
               }
               return AppRegistryBridge.instanceStore;
          }

          /**
             Obtain a reference to the ITelephony bridge.

             @return ITelephony bridge instance.
          */
          public getTelephonyBridge() : ITelephony {
               if (AppRegistryBridge.instanceTelephony === null) {
                    AppRegistryBridge.instanceTelephony= new TelephonyBridge();
               }
               return AppRegistryBridge.instanceTelephony;
          }

          /**
             Obtain a reference to the ITimer bridge.

             @return ITimer bridge instance.
          */
          public getTimerBridge() : ITimer {
               if (AppRegistryBridge.instanceTimer === null) {
                    AppRegistryBridge.instanceTimer= new TimerBridge();
               }
               return AppRegistryBridge.instanceTimer;
          }

          /**
             Obtain a reference to the ITwitter bridge.

             @return ITwitter bridge instance.
          */
          public getTwitterBridge() : ITwitter {
               if (AppRegistryBridge.instanceTwitter === null) {
                    AppRegistryBridge.instanceTwitter= new TwitterBridge();
               }
               return AppRegistryBridge.instanceTwitter;
          }

          /**
             Obtain a reference to the IUI bridge.

             @return IUI bridge instance.
          */
          public getUIBridge() : IUI {
               if (AppRegistryBridge.instanceUI === null) {
                    AppRegistryBridge.instanceUI= new UIBridge();
               }
               return AppRegistryBridge.instanceUI;
          }

          /**
             Obtain a reference to the IUpdate bridge.

             @return IUpdate bridge instance.
          */
          public getUpdateBridge() : IUpdate {
               if (AppRegistryBridge.instanceUpdate === null) {
                    AppRegistryBridge.instanceUpdate= new UpdateBridge();
               }
               return AppRegistryBridge.instanceUpdate;
          }

          /**
             Obtain a reference to the IVibration bridge.

             @return IVibration bridge instance.
          */
          public getVibrationBridge() : IVibration {
               if (AppRegistryBridge.instanceVibration === null) {
                    AppRegistryBridge.instanceVibration= new VibrationBridge();
               }
               return AppRegistryBridge.instanceVibration;
          }

          /**
             Obtain a reference to the IVideo bridge.

             @return IVideo bridge instance.
          */
          public getVideoBridge() : IVideo {
               if (AppRegistryBridge.instanceVideo === null) {
                    AppRegistryBridge.instanceVideo= new VideoBridge();
               }
               return AppRegistryBridge.instanceVideo;
          }

          /**
             Obtain a reference to the IWallet bridge.

             @return IWallet bridge instance.
          */
          public getWalletBridge() : IWallet {
               if (AppRegistryBridge.instanceWallet === null) {
                    AppRegistryBridge.instanceWallet= new WalletBridge();
               }
               return AppRegistryBridge.instanceWallet;
          }

          /**
             Obtain a reference to the IXML bridge.

             @return IXML bridge instance.
          */
          public getXMLBridge() : IXML {
               if (AppRegistryBridge.instanceXML === null) {
                    AppRegistryBridge.instanceXML= new XMLBridge();
               }
               return AppRegistryBridge.instanceXML;
          }

          /**
             Return the API version for the given interface.
          */
          public getAPIVersion() : string {
               return "v2.0.3"
          }
     }
     /**
        Enumeration ContactAddressType
     */
     export class ContactAddressType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Home = new ContactAddressType("Home");
          static Work = new ContactAddressType("Work");
          static Other = new ContactAddressType("Other");
          static Unknown = new ContactAddressType("Unknown");

     }
     /**
        Enumeration ContactEmailType
     */
     export class ContactEmailType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Personal = new ContactEmailType("Personal");
          static Work = new ContactEmailType("Work");
          static Other = new ContactEmailType("Other");
          static Unknown = new ContactEmailType("Unknown");

     }
     /**
        Enumeration ContactPersonalInfoTitle
     */
     export class ContactPersonalInfoTitle {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mr = new ContactPersonalInfoTitle("Mr");
          static Mrs = new ContactPersonalInfoTitle("Mrs");
          static Ms = new ContactPersonalInfoTitle("Ms");
          static Dr = new ContactPersonalInfoTitle("Dr");
          static Unknown = new ContactPersonalInfoTitle("Unknown");

     }
     /**
        Enumeration ContactPhoneType
     */
     export class ContactPhoneType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mobile = new ContactPhoneType("Mobile");
          static Work = new ContactPhoneType("Work");
          static Home = new ContactPhoneType("Home");
          static Main = new ContactPhoneType("Main");
          static HomeFax = new ContactPhoneType("HomeFax");
          static WorkFax = new ContactPhoneType("WorkFax");
          static Other = new ContactPhoneType("Other");
          static Unknown = new ContactPhoneType("Unknown");

     }
     /**
        Enumeration ContactSocialNetwork
     */
     export class ContactSocialNetwork {

          constructor(public value:string){}
          toString(){return this.value;}

          static Twitter = new ContactSocialNetwork("Twitter");
          static Facebook = new ContactSocialNetwork("Facebook");
          static GooglePlus = new ContactSocialNetwork("GooglePlus");
          static LinkedIn = new ContactSocialNetwork("LinkedIn");
          static Flickr = new ContactSocialNetwork("Flickr");
          static Unknown = new ContactSocialNetwork("Unknown");

     }
     /**
        Enumeration IAccelerationListenerError
     */
     export class IAccelerationListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Unauthorized = new IAccelerationListenerError("Unauthorized");
          static Unavailable = new IAccelerationListenerError("Unavailable");
          static Unknown = new IAccelerationListenerError("Unknown");

     }
     /**
        Enumeration IAccelerationListenerWarning
     */
     export class IAccelerationListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static NeedsCalibration = new IAccelerationListenerWarning("NeedsCalibration");
          static Stale = new IAccelerationListenerWarning("Stale");
          static Unknown = new IAccelerationListenerWarning("Unknown");

     }
     /**
        Enumeration IAdaptiveRPGroup
     */
     export class IAdaptiveRPGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          static Application = new IAdaptiveRPGroup("Application");
          static Commerce = new IAdaptiveRPGroup("Commerce");
          static Communication = new IAdaptiveRPGroup("Communication");
          static Data = new IAdaptiveRPGroup("Data");
          static Media = new IAdaptiveRPGroup("Media");
          static Notification = new IAdaptiveRPGroup("Notification");
          static PIM = new IAdaptiveRPGroup("PIM");
          static Reader = new IAdaptiveRPGroup("Reader");
          static Security = new IAdaptiveRPGroup("Security");
          static Sensor = new IAdaptiveRPGroup("Sensor");
          static Social = new IAdaptiveRPGroup("Social");
          static System = new IAdaptiveRPGroup("System");
          static UI = new IAdaptiveRPGroup("UI");
          static Util = new IAdaptiveRPGroup("Util");
          static Kernel = new IAdaptiveRPGroup("Kernel");
          static Unknown = new IAdaptiveRPGroup("Unknown");

     }
     /**
        Enumeration IButtonListenerError
     */
     export class IButtonListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Present = new IButtonListenerError("Not_Present");
          static Unknown = new IButtonListenerError("Unknown");

     }
     /**
        Enumeration IButtonListenerWarning
     */
     export class IButtonListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Implemented = new IButtonListenerWarning("Not_Implemented");
          static Unknown = new IButtonListenerWarning("Unknown");

     }
     /**
        Enumeration ICapabilitiesButton
     */
     export class ICapabilitiesButton {

          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ICapabilitiesButton("HomeButton");
          static BackButton = new ICapabilitiesButton("BackButton");
          static OptionButton = new ICapabilitiesButton("OptionButton");
          static Unknown = new ICapabilitiesButton("Unknown");

     }
     /**
        Enumeration ICapabilitiesCommunication
     */
     export class ICapabilitiesCommunication {

          constructor(public value:string){}
          toString(){return this.value;}

          static Calendar = new ICapabilitiesCommunication("Calendar");
          static Contact = new ICapabilitiesCommunication("Contact");
          static Mail = new ICapabilitiesCommunication("Mail");
          static Messaging = new ICapabilitiesCommunication("Messaging");
          static Telephony = new ICapabilitiesCommunication("Telephony");
          static Unknown = new ICapabilitiesCommunication("Unknown");

     }
     /**
        Enumeration ICapabilitiesData
     */
     export class ICapabilitiesData {

          constructor(public value:string){}
          toString(){return this.value;}

          static Database = new ICapabilitiesData("Database");
          static File = new ICapabilitiesData("File");
          static Cloud = new ICapabilitiesData("Cloud");
          static Unknown = new ICapabilitiesData("Unknown");

     }
     /**
        Enumeration ICapabilitiesMedia
     */
     export class ICapabilitiesMedia {

          constructor(public value:string){}
          toString(){return this.value;}

          static Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
          static Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
          static Camera = new ICapabilitiesMedia("Camera");
          static Video_Playback = new ICapabilitiesMedia("Video_Playback");
          static Video_Recording = new ICapabilitiesMedia("Video_Recording");
          static Unknown = new ICapabilitiesMedia("Unknown");

     }
     /**
        Enumeration ICapabilitiesNet
     */
     export class ICapabilitiesNet {

          constructor(public value:string){}
          toString(){return this.value;}

          static GSM = new ICapabilitiesNet("GSM");
          static GPRS = new ICapabilitiesNet("GPRS");
          static HSDPA = new ICapabilitiesNet("HSDPA");
          static LTE = new ICapabilitiesNet("LTE");
          static WIFI = new ICapabilitiesNet("WIFI");
          static Ethernet = new ICapabilitiesNet("Ethernet");
          static Unavailable = new ICapabilitiesNet("Unavailable");
          static Unknown = new ICapabilitiesNet("Unknown");

     }
     /**
        Enumeration ICapabilitiesNotification
     */
     export class ICapabilitiesNotification {

          constructor(public value:string){}
          toString(){return this.value;}

          static Alarm = new ICapabilitiesNotification("Alarm");
          static LocalNotification = new ICapabilitiesNotification("LocalNotification");
          static RemoteNotification = new ICapabilitiesNotification("RemoteNotification");
          static Vibration = new ICapabilitiesNotification("Vibration");
          static Unknown = new ICapabilitiesNotification("Unknown");

     }
     /**
        Enumeration ICapabilitiesSensor
     */
     export class ICapabilitiesSensor {

          constructor(public value:string){}
          toString(){return this.value;}

          static Accelerometer = new ICapabilitiesSensor("Accelerometer");
          static AmbientLight = new ICapabilitiesSensor("AmbientLight");
          static Barometer = new ICapabilitiesSensor("Barometer");
          static Geolocation = new ICapabilitiesSensor("Geolocation");
          static Gyroscope = new ICapabilitiesSensor("Gyroscope");
          static Magnetometer = new ICapabilitiesSensor("Magnetometer");
          static Proximity = new ICapabilitiesSensor("Proximity");
          static Unknown = new ICapabilitiesSensor("Unknown");

     }
     /**
        Enumeration IContactFieldGroup
     */
     export class IContactFieldGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          static PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
          static PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
          static ADDRESSES = new IContactFieldGroup("ADDRESSES");
          static PHONES = new IContactFieldGroup("PHONES");
          static EMAILS = new IContactFieldGroup("EMAILS");
          static WEBSITES = new IContactFieldGroup("WEBSITES");
          static SOCIALS = new IContactFieldGroup("SOCIALS");
          static TAGS = new IContactFieldGroup("TAGS");
          static Unknown = new IContactFieldGroup("Unknown");

     }
     /**
        Enumeration IContactFilter
     */
     export class IContactFilter {

          constructor(public value:string){}
          toString(){return this.value;}

          static HAS_PHONE = new IContactFilter("HAS_PHONE");
          static HAS_EMAIL = new IContactFilter("HAS_EMAIL");
          static HAS_ADDRESS = new IContactFilter("HAS_ADDRESS");
          static Unknown = new IContactFilter("Unknown");

     }
     /**
        Enumeration IContactPhotoResultCallbackError
     */
     export class IContactPhotoResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactPhotoResultCallbackError("NoPermission");
          static Wrong_Params = new IContactPhotoResultCallbackError("Wrong_Params");
          static No_Photo = new IContactPhotoResultCallbackError("No_Photo");
          static Unknown = new IContactPhotoResultCallbackError("Unknown");

     }
     /**
        Enumeration IContactPhotoResultCallbackWarning
     */
     export class IContactPhotoResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactPhotoResultCallbackWarning("LimitExceeded");
          static No_Matches = new IContactPhotoResultCallbackWarning("No_Matches");
          static Unknown = new IContactPhotoResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IContactResultCallbackError
     */
     export class IContactResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactResultCallbackError("NoPermission");
          static Wrong_Params = new IContactResultCallbackError("Wrong_Params");
          static Unknown = new IContactResultCallbackError("Unknown");

     }
     /**
        Enumeration IContactResultCallbackWarning
     */
     export class IContactResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactResultCallbackWarning("LimitExceeded");
          static No_Matches = new IContactResultCallbackWarning("No_Matches");
          static Unknown = new IContactResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IDatabaseResultCallbackError
     */
     export class IDatabaseResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new IDatabaseResultCallbackError("NoSpace");
          static SqlException = new IDatabaseResultCallbackError("SqlException");
          static NotDeleted = new IDatabaseResultCallbackError("NotDeleted");
          static Unknown = new IDatabaseResultCallbackError("Unknown");

     }
     /**
        Enumeration IDatabaseResultCallbackWarning
     */
     export class IDatabaseResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static DatabaseExists = new IDatabaseResultCallbackWarning("DatabaseExists");
          static IsOpen = new IDatabaseResultCallbackWarning("IsOpen");
          static Unknown = new IDatabaseResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IDatabaseTableResultCallbackError
     */
     export class IDatabaseTableResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new IDatabaseTableResultCallbackError("NoSpace");
          static ReadOnlyTable = new IDatabaseTableResultCallbackError("ReadOnlyTable");
          static SqlException = new IDatabaseTableResultCallbackError("SqlException");
          static DatabaseNotFound = new IDatabaseTableResultCallbackError("DatabaseNotFound");
          static NoTableFound = new IDatabaseTableResultCallbackError("NoTableFound");
          static Unknown = new IDatabaseTableResultCallbackError("Unknown");

     }
     /**
        Enumeration IDatabaseTableResultCallbackWarning
     */
     export class IDatabaseTableResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
          static TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
          static NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
          static Unknown = new IDatabaseTableResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IFileDataLoadResultCallbackError
     */
     export class IFileDataLoadResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileDataLoadResultCallbackError("InexistentFile");
          static InsufficientSpace = new IFileDataLoadResultCallbackError("InsufficientSpace");
          static Unauthorized = new IFileDataLoadResultCallbackError("Unauthorized");
          static Unknown = new IFileDataLoadResultCallbackError("Unknown");

     }
     /**
        Enumeration IFileDataLoadResultCallbackWarning
     */
     export class IFileDataLoadResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static ExceedMaximumSize = new IFileDataLoadResultCallbackWarning("ExceedMaximumSize");
          static Unknown = new IFileDataLoadResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IFileDataStoreResultCallbackError
     */
     export class IFileDataStoreResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileDataStoreResultCallbackError("InexistentFile");
          static InsufficientSpace = new IFileDataStoreResultCallbackError("InsufficientSpace");
          static Unauthorized = new IFileDataStoreResultCallbackError("Unauthorized");
          static Unknown = new IFileDataStoreResultCallbackError("Unknown");

     }
     /**
        Enumeration IFileDataStoreResultCallbackWarning
     */
     export class IFileDataStoreResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static ExceedMaximumSize = new IFileDataStoreResultCallbackWarning("ExceedMaximumSize");
          static Unknown = new IFileDataStoreResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IFileListResultCallbackError
     */
     export class IFileListResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileListResultCallbackError("InexistentFile");
          static Unauthorized = new IFileListResultCallbackError("Unauthorized");
          static Unknown = new IFileListResultCallbackError("Unknown");

     }
     /**
        Enumeration IFileListResultCallbackWarning
     */
     export class IFileListResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static PartialResult = new IFileListResultCallbackWarning("PartialResult");
          static Unknown = new IFileListResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IFileResultCallbackError
     */
     export class IFileResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static FileExists = new IFileResultCallbackError("FileExists");
          static SourceInexistent = new IFileResultCallbackError("SourceInexistent");
          static DestionationExists = new IFileResultCallbackError("DestionationExists");
          static InsufficientSpace = new IFileResultCallbackError("InsufficientSpace");
          static Unauthorized = new IFileResultCallbackError("Unauthorized");
          static Unknown = new IFileResultCallbackError("Unknown");

     }
     /**
        Enumeration IFileResultCallbackWarning
     */
     export class IFileResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static SourceNotDeleted = new IFileResultCallbackWarning("SourceNotDeleted");
          static RootDirectory = new IFileResultCallbackWarning("RootDirectory");
          static Unknown = new IFileResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IFileSystemSecurity
     */
     export class IFileSystemSecurity {

          constructor(public value:string){}
          toString(){return this.value;}

          static Default = new IFileSystemSecurity("Default");
          static Protected = new IFileSystemSecurity("Protected");
          static Encrypted = new IFileSystemSecurity("Encrypted");
          static Unknown = new IFileSystemSecurity("Unknown");

     }
     /**
        Enumeration IFileSystemStorageType
     */
     export class IFileSystemStorageType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Application = new IFileSystemStorageType("Application");
          static Document = new IFileSystemStorageType("Document");
          static Cloud = new IFileSystemStorageType("Cloud");
          static Protected = new IFileSystemStorageType("Protected");
          static Cache = new IFileSystemStorageType("Cache");
          static External = new IFileSystemStorageType("External");
          static Unknown = new IFileSystemStorageType("Unknown");

     }
     /**
        Enumeration IFileSystemType
     */
     export class IFileSystemType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Directory = new IFileSystemType("Directory");
          static File = new IFileSystemType("File");
          static Unknown = new IFileSystemType("Unknown");

     }
     /**
        Enumeration IGeolocationListenerError
     */
     export class IGeolocationListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Disabled = new IGeolocationListenerError("Disabled");
          static RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
          static DeniedAccess = new IGeolocationListenerError("DeniedAccess");
          static StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
          static Unknown = new IGeolocationListenerError("Unknown");

     }
     /**
        Enumeration IGeolocationListenerWarning
     */
     export class IGeolocationListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static HighDoP = new IGeolocationListenerWarning("HighDoP");
          static StaleData = new IGeolocationListenerWarning("StaleData");
          static Unknown = new IGeolocationListenerWarning("Unknown");

     }
     /**
        Enumeration ILifecycleListenerError
     */
     export class ILifecycleListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Runtime = new ILifecycleListenerError("Runtime");
          static Implementation = new ILifecycleListenerError("Implementation");
          static Killed = new ILifecycleListenerError("Killed");
          static Unknown = new ILifecycleListenerError("Unknown");

     }
     /**
        Enumeration ILifecycleListenerWarning
     */
     export class ILifecycleListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static MemoryLow = new ILifecycleListenerWarning("MemoryLow");
          static BatteryLow = new ILifecycleListenerWarning("BatteryLow");
          static Unknown = new ILifecycleListenerWarning("Unknown");

     }
     /**
        Enumeration ILoggingLogLevel
     */
     export class ILoggingLogLevel {

          constructor(public value:string){}
          toString(){return this.value;}

          static DEBUG = new ILoggingLogLevel("DEBUG");
          static WARN = new ILoggingLogLevel("WARN");
          static ERROR = new ILoggingLogLevel("ERROR");
          static INFO = new ILoggingLogLevel("INFO");
          static Unknown = new ILoggingLogLevel("Unknown");

     }
     /**
        Enumeration IMessagingCallbackError
     */
     export class IMessagingCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static SIMNotPresent = new IMessagingCallbackError("SIMNotPresent");
          static EmailAccountNotFound = new IMessagingCallbackError("EmailAccountNotFound");
          static NotSent = new IMessagingCallbackError("NotSent");
          static WrongParams = new IMessagingCallbackError("WrongParams");
          static NotSupported = new IMessagingCallbackError("NotSupported");
          static Unknown = new IMessagingCallbackError("Unknown");

     }
     /**
        Enumeration IMessagingCallbackWarning
     */
     export class IMessagingCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static UnableToSentAll = new IMessagingCallbackWarning("UnableToSentAll");
          static UnableToFetchAttachment = new IMessagingCallbackWarning("UnableToFetchAttachment");
          static Unknown = new IMessagingCallbackWarning("Unknown");

     }
     /**
        Enumeration INetworkReachabilityCallbackError
     */
     export class INetworkReachabilityCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new INetworkReachabilityCallbackError("Forbidden");
          static NotFound = new INetworkReachabilityCallbackError("NotFound");
          static MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
          static NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
          static NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
          static TimeOut = new INetworkReachabilityCallbackError("TimeOut");
          static NoResponse = new INetworkReachabilityCallbackError("NoResponse");
          static Unreachable = new INetworkReachabilityCallbackError("Unreachable");
          static Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
          static MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
          static DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
          static Unknown = new INetworkReachabilityCallbackError("Unknown");

     }
     /**
        Enumeration INetworkReachabilityCallbackWarning
     */
     export class INetworkReachabilityCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static IncorrectScheme = new INetworkReachabilityCallbackWarning("IncorrectScheme");
          static NotSecure = new INetworkReachabilityCallbackWarning("NotSecure");
          static NotTrusted = new INetworkReachabilityCallbackWarning("NotTrusted");
          static Redirected = new INetworkReachabilityCallbackWarning("Redirected");
          static NotRegisteredService = new INetworkReachabilityCallbackWarning("NotRegisteredService");
          static Unknown = new INetworkReachabilityCallbackWarning("Unknown");

     }
     /**
        Enumeration INetworkStatusListenerError
     */
     export class INetworkStatusListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new INetworkStatusListenerError("NoPermission");
          static Unreachable = new INetworkStatusListenerError("Unreachable");
          static Unknown = new INetworkStatusListenerError("Unknown");

     }
     /**
        Enumeration INetworkStatusListenerWarning
     */
     export class INetworkStatusListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static IpAddressNotAssigned = new INetworkStatusListenerWarning("IpAddressNotAssigned");
          static IpAddressChanged = new INetworkStatusListenerWarning("IpAddressChanged");
          static Unknown = new INetworkStatusListenerWarning("Unknown");

     }
     /**
        Enumeration IOSType
     */
     export class IOSType {

          constructor(public value:string){}
          toString(){return this.value;}

          static iOS = new IOSType("iOS");
          static OSX = new IOSType("OSX");
          static Windows = new IOSType("Windows");
          static WindowsPhone = new IOSType("WindowsPhone");
          static Android = new IOSType("Android");
          static Linux = new IOSType("Linux");
          static Blackberry = new IOSType("Blackberry");
          static Tizen = new IOSType("Tizen");
          static FirefoxOS = new IOSType("FirefoxOS");
          static Chromium = new IOSType("Chromium");
          static Unspecified = new IOSType("Unspecified");
          static Unknown = new IOSType("Unknown");

     }
     /**
        Enumeration ISecurityResultCallbackError
     */
     export class ISecurityResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new ISecurityResultCallbackError("NoPermission");
          static NoMatchesFound = new ISecurityResultCallbackError("NoMatchesFound");
          static Unknown = new ISecurityResultCallbackError("Unknown");

     }
     /**
        Enumeration ISecurityResultCallbackWarning
     */
     export class ISecurityResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static EntryOverride = new ISecurityResultCallbackWarning("EntryOverride");
          static Unknown = new ISecurityResultCallbackWarning("Unknown");

     }
     /**
        Enumeration IServiceProtocolVersion
     */
     export class IServiceProtocolVersion {

          constructor(public value:string){}
          toString(){return this.value;}

          static HttpProtocolVersion10 = new IServiceProtocolVersion("HttpProtocolVersion10");
          static HttpProtocolVersion11 = new IServiceProtocolVersion("HttpProtocolVersion11");
          static Unknown = new IServiceProtocolVersion("Unknown");

     }
     /**
        Enumeration IServiceMethod
     */
     export class IServiceMethod {

          constructor(public value:string){}
          toString(){return this.value;}

          static Post = new IServiceMethod("Post");
          static Get = new IServiceMethod("Get");
          static Unknown = new IServiceMethod("Unknown");

     }
     /**
        Enumeration IServiceType
     */
     export class IServiceType {

          constructor(public value:string){}
          toString(){return this.value;}

          static ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
          static ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
          static ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
          static ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
          static ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
          static ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
          static ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
          static ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
          static ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
          static ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
          static Unknown = new IServiceType("Unknown");

     }
     /**
        Enumeration IServiceResultCallbackError
     */
     export class IServiceResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new IServiceResultCallbackError("Forbidden");
          static NotFound = new IServiceResultCallbackError("NotFound");
          static MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
          static NotAllowed = new IServiceResultCallbackError("NotAllowed");
          static NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
          static TimeOut = new IServiceResultCallbackError("TimeOut");
          static NoResponse = new IServiceResultCallbackError("NoResponse");
          static ServerError = new IServiceResultCallbackError("ServerError");
          static Unreachable = new IServiceResultCallbackError("Unreachable");
          static MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
          static NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
          static Unknown = new IServiceResultCallbackError("Unknown");

     }
     /**
        Enumeration IServiceResultCallbackWarning
     */
     export class IServiceResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          static NotSecure = new IServiceResultCallbackWarning("NotSecure");
          static NotTrusted = new IServiceResultCallbackWarning("NotTrusted");
          static Redirected = new IServiceResultCallbackWarning("Redirected");
          static Wrong_Params = new IServiceResultCallbackWarning("Wrong_Params");
          static Unknown = new IServiceResultCallbackWarning("Unknown");

     }
     /**
        Enumeration ITelephonyStatus
     */
     export class ITelephonyStatus {

          constructor(public value:string){}
          toString(){return this.value;}

          static Dialing = new ITelephonyStatus("Dialing");
          static Failed = new ITelephonyStatus("Failed");
          static Unknown = new ITelephonyStatus("Unknown");

     }
     /**
        Enumeration LifecycleState
     */
     export class LifecycleState {

          constructor(public value:string){}
          toString(){return this.value;}

          static Starting = new LifecycleState("Starting");
          static Started = new LifecycleState("Started");
          static Running = new LifecycleState("Running");
          static Pausing = new LifecycleState("Pausing");
          static PausedIdle = new LifecycleState("PausedIdle");
          static PausedRun = new LifecycleState("PausedRun");
          static Resuming = new LifecycleState("Resuming");
          static Stopping = new LifecycleState("Stopping");
          static Unknown = new LifecycleState("Unknown");

     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
