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
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppRegistry {
        /**
           Returns a reference to the registered AccelerometerHandler.

           @return AccelerometerHandler reference or null if a handler of this type is not registered.
        */
        getAccelerometerHandler(): IAccelerometer;
        /**
           Returns a reference to the registered AdsHandler.

           @return AdsHandler reference or null if a handler of this type is not registered.
        */
        getAdsHandler(): IAds;
        /**
           Returns a reference to the registered AlarmHandler.

           @return AlarmHandler reference or null if a handler of this type is not registered.
        */
        getAlarmHandler(): IAlarm;
        /**
           Returns a reference to the registered AmbientLightHandler.

           @return AmbientLightHandler reference or null if a handler of this type is not registered.
        */
        getAmbientLightHandler(): IAmbientLight;
        /**
           Returns a reference to the registered AnalyticsHandler.

           @return AnalyticsHandler reference or null if a handler of this type is not registered.
        */
        getAnalyticsHandler(): IAnalytics;
        /**
           Returns a reference to the registered AudioHandler.

           @return AudioHandler reference or null if a handler of this type is not registered.
        */
        getAudioHandler(): IAudio;
        /**
           Returns a reference to the registered BarcodeHandler.

           @return BarcodeHandler reference or null if a handler of this type is not registered.
        */
        getBarcodeHandler(): IBarcode;
        /**
           Returns a reference to the registered BarometerHandler.

           @return BarometerHandler reference or null if a handler of this type is not registered.
        */
        getBarometerHandler(): IBarometer;
        /**
           Returns a reference to the registered BluetoothHandler.

           @return BluetoothHandler reference or null if a handler of this type is not registered.
        */
        getBluetoothHandler(): IBluetooth;
        /**
           Returns a reference to the registered BrowserHandler.

           @return BrowserHandler reference or null if a handler of this type is not registered.
        */
        getBrowserHandler(): IBrowser;
        /**
           Returns a reference to the registered CalendarHandler.

           @return CalendarHandler reference or null if a handler of this type is not registered.
        */
        getCalendarHandler(): ICalendar;
        /**
           Returns a reference to the registered CameraHandler.

           @return CameraHandler reference or null if a handler of this type is not registered.
        */
        getCameraHandler(): ICamera;
        /**
           Returns a reference to the registered CapabilitiesHandler.

           @return CapabilitiesHandler reference or null if a handler of this type is not registered.
        */
        getCapabilitiesHandler(): ICapabilities;
        /**
           Returns a reference to the registered CloudHandler.

           @return CloudHandler reference or null if a handler of this type is not registered.
        */
        getCloudHandler(): ICloud;
        /**
           Returns a reference to the registered CompressionHandler.

           @return CompressionHandler reference or null if a handler of this type is not registered.
        */
        getCompressionHandler(): ICompression;
        /**
           Returns a reference to the registered ConcurrentHandler.

           @return ConcurrentHandler reference or null if a handler of this type is not registered.
        */
        getConcurrentHandler(): IConcurrent;
        /**
           Returns a reference to the registered ContactHandler.

           @return ContactHandler reference or null if a handler of this type is not registered.
        */
        getContactHandler(): IContact;
        /**
           Returns a reference to the registered CryptoHandler.

           @return CryptoHandler reference or null if a handler of this type is not registered.
        */
        getCryptoHandler(): ICrypto;
        /**
           Returns a reference to the registered DataStreamHandler.

           @return DataStreamHandler reference or null if a handler of this type is not registered.
        */
        getDataStreamHandler(): IDataStream;
        /**
           Returns a reference to the registered DatabaseHandler.

           @return DatabaseHandler reference or null if a handler of this type is not registered.
        */
        getDatabaseHandler(): IDatabase;
        /**
           Returns a reference to the registered DesktopHandler.

           @return DesktopHandler reference or null if a handler of this type is not registered.
        */
        getDesktopHandler(): IDesktop;
        /**
           Returns a reference to the registered DeviceHandler.

           @return DeviceHandler reference or null if a handler of this type is not registered.
        */
        getDeviceHandler(): IDevice;
        /**
           Returns a reference to the registered DisplayHandler.

           @return DisplayHandler reference or null if a handler of this type is not registered.
        */
        getDisplayHandler(): IDisplay;
        /**
           Returns a reference to the registered FacebookHandler.

           @return FacebookHandler reference or null if a handler of this type is not registered.
        */
        getFacebookHandler(): IFacebook;
        /**
           Returns a reference to the registered FileSystemHandler.

           @return FileSystemHandler reference or null if a handler of this type is not registered.
        */
        getFileSystemHandler(): IFileSystem;
        /**
           Returns a reference to the registered GeolocationHandler.

           @return GeolocationHandler reference or null if a handler of this type is not registered.
        */
        getGeolocationHandler(): IGeolocation;
        /**
           Returns a reference to the registered GlobalizationHandler.

           @return GlobalizationHandler reference or null if a handler of this type is not registered.
        */
        getGlobalizationHandler(): IGlobalization;
        /**
           Returns a reference to the registered GooglePlusHandler.

           @return GooglePlusHandler reference or null if a handler of this type is not registered.
        */
        getGooglePlusHandler(): IGooglePlus;
        /**
           Returns a reference to the registered GyroscopeHandler.

           @return GyroscopeHandler reference or null if a handler of this type is not registered.
        */
        getGyroscopeHandler(): IGyroscope;
        /**
           Returns a reference to the registered ImagingHandler.

           @return ImagingHandler reference or null if a handler of this type is not registered.
        */
        getImagingHandler(): IImaging;
        /**
           Returns a reference to the registered InternalStorageHandler.

           @return InternalStorageHandler reference or null if a handler of this type is not registered.
        */
        getInternalStorageHandler(): IInternalStorage;
        /**
           Returns a reference to the registered LifecycleHandler.

           @return LifecycleHandler reference or null if a handler of this type is not registered.
        */
        getLifecycleHandler(): ILifecycle;
        /**
           Returns a reference to the registered LinkedInHandler.

           @return LinkedInHandler reference or null if a handler of this type is not registered.
        */
        getLinkedInHandler(): ILinkedIn;
        /**
           Returns a reference to the registered LoggingHandler.

           @return LoggingHandler reference or null if a handler of this type is not registered.
        */
        getLoggingHandler(): ILogging;
        /**
           Returns a reference to the registered MagnetometerHandler.

           @return MagnetometerHandler reference or null if a handler of this type is not registered.
        */
        getMagnetometerHandler(): IMagnetometer;
        /**
           Returns a reference to the registered MailHandler.

           @return MailHandler reference or null if a handler of this type is not registered.
        */
        getMailHandler(): IMail;
        /**
           Returns a reference to the registered ManagementHandler.

           @return ManagementHandler reference or null if a handler of this type is not registered.
        */
        getManagementHandler(): IManagement;
        /**
           Returns a reference to the registered MapHandler.

           @return MapHandler reference or null if a handler of this type is not registered.
        */
        getMapHandler(): IMap;
        /**
           Returns a reference to the registered MessagingHandler.

           @return MessagingHandler reference or null if a handler of this type is not registered.
        */
        getMessagingHandler(): IMessaging;
        /**
           Returns a reference to the registered NFCHandler.

           @return NFCHandler reference or null if a handler of this type is not registered.
        */
        getNFCHandler(): INFC;
        /**
           Returns a reference to the registered NetworkInfoHandler.

           @return NetworkInfoHandler reference or null if a handler of this type is not registered.
        */
        getNetworkInfoHandler(): INetworkInfo;
        /**
           Returns a reference to the registered NetworkNamingHandler.

           @return NetworkNamingHandler reference or null if a handler of this type is not registered.
        */
        getNetworkNamingHandler(): INetworkNaming;
        /**
           Returns a reference to the registered NetworkReachabilityHandler.

           @return NetworkReachabilityHandler reference or null if a handler of this type is not registered.
        */
        getNetworkReachabilityHandler(): INetworkReachability;
        /**
           Returns a reference to the registered NetworkStatusHandler.

           @return NetworkStatusHandler reference or null if a handler of this type is not registered.
        */
        getNetworkStatusHandler(): INetworkStatus;
        /**
           Returns a reference to the registered NotificationHandler.

           @return NotificationHandler reference or null if a handler of this type is not registered.
        */
        getNotificationHandler(): INotification;
        /**
           Returns a reference to the registered NotificationLocalHandler.

           @return NotificationLocalHandler reference or null if a handler of this type is not registered.
        */
        getNotificationLocalHandler(): INotificationLocal;
        /**
           Returns a reference to the registered OAuthHandler.

           @return OAuthHandler reference or null if a handler of this type is not registered.
        */
        getOAuthHandler(): IOAuth;
        /**
           Returns a reference to the registered OCRHandler.

           @return OCRHandler reference or null if a handler of this type is not registered.
        */
        getOCRHandler(): IOCR;
        /**
           Returns a reference to the registered OSHandler.

           @return OSHandler reference or null if a handler of this type is not registered.
        */
        getOSHandler(): IOS;
        /**
           Returns a reference to the registered OpenIdHandler.

           @return OpenIdHandler reference or null if a handler of this type is not registered.
        */
        getOpenIdHandler(): IOpenId;
        /**
           Returns a reference to the registered PrintingHandler.

           @return PrintingHandler reference or null if a handler of this type is not registered.
        */
        getPrintingHandler(): IPrinting;
        /**
           Returns a reference to the registered ProximityHandler.

           @return ProximityHandler reference or null if a handler of this type is not registered.
        */
        getProximityHandler(): IProximity;
        /**
           Returns a reference to the registered QRCodeHandler.

           @return QRCodeHandler reference or null if a handler of this type is not registered.
        */
        getQRCodeHandler(): IQRCode;
        /**
           Returns a reference to the registered RSSHandler.

           @return RSSHandler reference or null if a handler of this type is not registered.
        */
        getRSSHandler(): IRSS;
        /**
           Returns a reference to the registered RuntimeHandler.

           @return RuntimeHandler reference or null if a handler of this type is not registered.
        */
        getRuntimeHandler(): IRuntime;
        /**
           Returns a reference to the registered SecurityHandler.

           @return SecurityHandler reference or null if a handler of this type is not registered.
        */
        getSecurityHandler(): ISecurity;
        /**
           Returns a reference to the registered ServiceHandler.

           @return ServiceHandler reference or null if a handler of this type is not registered.
        */
        getServiceHandler(): IService;
        /**
           Returns a reference to the registered SessionHandler.

           @return SessionHandler reference or null if a handler of this type is not registered.
        */
        getSessionHandler(): ISession;
        /**
           Returns a reference to the registered SettingsHandler.

           @return SettingsHandler reference or null if a handler of this type is not registered.
        */
        getSettingsHandler(): ISettings;
        /**
           Returns a reference to the registered SocketHandler.

           @return SocketHandler reference or null if a handler of this type is not registered.
        */
        getSocketHandler(): ISocket;
        /**
           Returns a reference to the registered StoreHandler.

           @return StoreHandler reference or null if a handler of this type is not registered.
        */
        getStoreHandler(): IStore;
        /**
           Returns a reference to the registered TelephonyHandler.

           @return TelephonyHandler reference or null if a handler of this type is not registered.
        */
        getTelephonyHandler(): ITelephony;
        /**
           Returns a reference to the registered TimerHandler.

           @return TimerHandler reference or null if a handler of this type is not registered.
        */
        getTimerHandler(): ITimer;
        /**
           Returns a reference to the registered TwitterHandler.

           @return TwitterHandler reference or null if a handler of this type is not registered.
        */
        getTwitterHandler(): ITwitter;
        /**
           Returns a reference to the registered UIHandler.

           @return UIHandler reference or null if a handler of this type is not registered.
        */
        getUIHandler(): IUI;
        /**
           Returns a reference to the registered UpdateHandler.

           @return UpdateHandler reference or null if a handler of this type is not registered.
        */
        getUpdateHandler(): IUpdate;
        /**
           Returns a reference to the registered VibrationHandler.

           @return VibrationHandler reference or null if a handler of this type is not registered.
        */
        getVibrationHandler(): IVibration;
        /**
           Returns a reference to the registered VideoHandler.

           @return VideoHandler reference or null if a handler of this type is not registered.
        */
        getVideoHandler(): IVideo;
        /**
           Returns a reference to the registered WalletHandler.

           @return WalletHandler reference or null if a handler of this type is not registered.
        */
        getWalletHandler(): IWallet;
        /**
           Returns a reference to the registered XMLHandler.

           @return XMLHandler reference or null if a handler of this type is not registered.
        */
        getXMLHandler(): IXML;
        /**
           null
        */
        getPlatformContext(): IAppContext;
        /**
           null
        */
        getPlatformContextWeb(): IAppContextWebview;
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResource {
        /**
           null
        */
        geType(): IAppResourcePayload;
        /**
           null
        */
        getData(): number[];
        /**
           null
        */
        getDataPathLinked(): string;
        /**
           null
        */
        getDataStored(): number[];
        /**
           null
        */
        getFormat(): IAppResourceFormat;
        /**
           null
        */
        getMd5(): string;
        /**
           null
        */
        getMimetype(): string;
        /**
           null
        */
        getName(): string;
        /**
           null
        */
        getPath(): string;
        /**
           null
        */
        getSize(): number;
        /**
           null
        */
        getSizeStored(): number;
        /**
           null
        */
        getTimestamp(): number;
        /**
           null
        */
        getType(): IAppResourceType;
        /**
           null
        */
        getUuid(): string;
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResourceHandler {
        /**
           null
        */
        getResource(resourcePath: string, callback: IAppResourceCallback): any;
    }
    /**
       Definition of IAdaptiveRP interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAdaptiveRP {
        API_VERSION: string;
        /**
           null
        */
        getAPIGroup(): IAdaptiveRPGroup;
    }
    /**
       Created by clozano on 09/09/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppContextWebview {
        /**
           Additional views may be added to an application - a separate activity - and if these will make calls to the
ARP methods, they must be registered by adding them to the context. When they are added to the context, ARP
methods are bound to the webview so that they're callable from the HTML application. The primary webview should
not be added using this method.
           @param webView Platform specific webview reference (WebView, UIWebView, WKWebView,etc.)
        */
        addWebview(webView: any): any;
        /**
           Returns a reference to the main application webview. This is the first application webview and can not be removed
with the removeWebview method. The object returned should be cast to the platform specific implementation
WebView, WKWebView, etc.
           @return Object representing the specific and primary webview instance of the application.
        */
        getWebviewPrimary(): any;
        /**
           Returns an array of webviews currently managed by the context - composed of primary and the list of those added.
This method will always return at least one element; the primary webview.
           @return Array with all the Webview instances being managed by ARP.
        */
        getWebviews(): any[];
        /**
           When a webview is disposed - no longer in use from an external activity - the webview should be removed to unbind
ARP functions and release resources. The primary webview can not be removed.
           @param webView The instance of the webview to be removed from the binding.
        */
        removeWebview(webView: any): any;
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppContext {
        /**
           The main application context. This should be cast to the platform specific implementation.
           @return Object representing the specific singleton application context provided by the OS.
        */
        getContext(): any;
        /**
           The type of context provided by the getContext method.
           @return Type of platform context.
        */
        getContextType(): IAppContextType;
    }
    /**
       Definition of IFile interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFile {
        /**
           Determine whether the current file/folder can be read from.
           @return True if the folder/file is readable, false otherwise.
           @since ARP1.0
        */
        canRead(): boolean;
        /**
           Determine whether the current file/folder can be written to.
           @return True if the folder/file is writable, false otherwise.
           @since ARP1.0
        */
        canWrite(): boolean;
        /**
           Creates a file with the specified name.
           @param callback Result of the operation.
           @since ARP1.0
        */
        create(callback: IFileResultCallback): any;
        /**
           Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.
           @param cascade Whether to delete sub-files and sub-folders.
           @return True if files (and sub-files and folders) whether deleted.
           @since ARP1.0
        */
        delete(cascade: boolean): boolean;
        /**
           Check whether the file/path exists.
           @return True if the file exists in the filesystem, false otherwise.
           @since ARP1.0
        */
        exists(): boolean;
        /**
           Loads the content of the file.
           @param callback Result of the operation.
           @since ARP1.0
        */
        getContent(callback: IFileDataLoadResultCallback): any;
        /**
           Returns the milliseconds passed since 1/1/1970 since the file was created.
           @return Timestamp in milliseconds.
           @since ARP1.0
        */
        getDateCreated(): number;
        /**
           Returns the milliseconds passed since 1/1/1970 since the file was modified.
           @return Timestamp in milliseconds.
           @since ARP1.0
        */
        getDateModified(): number;
        /**
           null
        */
        getFileStorageType(): IFileSystemStorageType;
        /**
           null
        */
        getFileType(): IFileSystemType;
        /**
           Returns the name of the file if the reference is a file or the last path element of the folder.
           @return The name of the file.
           @since ARP1.0
        */
        getName(): string;
        /**
           Returns the path element of the file or folder (excluding the last path element if it's a directory).
           @return The path to the file.
           @since ARP1.0
        */
        getPath(): string;
        /**
           Returns the resolved absolute path elements of the file and/or folders (including the last path element).
           @return The absolute path to the file.
           @since ARP1.0
        */
        getPathAbsolute(): string;
        /**
           null
        */
        getSecurityType(): IFileSystemSecurity;
        /**
           Returns the size in bytes of the file or -1 if the reference is a folder.
           @return Size in bytes of file.
           @since ARP1.0
        */
        getSize(): number;
        /**
           Check whether this is a path of a file.
           @return true if this is a path to a folder/directory, false if this is a path to a file.
           @since ARP1.0
        */
        isDirectory(): boolean;
        /**
           List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.
           @param regex    Filter (eg. *.jpg, *.png, Fil*) name string.
           @param callback Result of operation.
           @since ARP1.0
        */
        listFilesForRegex(regex: string, callback: IFileListResultCallback): any;
        /**
           List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.
           @param callback Result of operation.
           @since ARP1.0
        */
        listFiles(callback: IFileListResultCallback): any;
        /**
           Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
           @param recursive Whether to create all parent path elements.
           @return True if the path was created, false otherwise (or it exists already).
           @since ARP1.0
        */
        mkDir(recursive: boolean): boolean;
        /**
           Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.
           @param newFile    Destination path/file for the move.
           @param createPath True to create the path if it does not already exist.
           @param callback   Result of the operation.
           @param overwrite  True to create the path if it does not already exist.
           @since ARP1.0
        */
        move(newFile: IFile, createPath: boolean, overwrite: boolean, callback: IFileResultCallback): any;
        /**
           Sets the content of the file.
           @param content  Binary content to store in the file.
           @param callback Result of the operation.
           @since ARP1.0
        */
        setContent(content: number[], callback: IFileDataStoreResultCallback): any;
    }
    /**
       Definition of IBaseCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCallback extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSystem interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSystem extends IAdaptiveRP {
    }
    /**
       Definition of IBaseMedia interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseMedia extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSocial interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSocial extends IAdaptiveRP {
    }
    /**
       Definition of IBasePIM interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBasePIM extends IAdaptiveRP {
    }
    /**
       Definition of IBaseCommerce interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCommerce extends IAdaptiveRP {
    }
    /**
       Definition of IBaseApplication interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseApplication extends IAdaptiveRP {
    }
    /**
       Definition of IBaseNotification interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseNotification extends IAdaptiveRP {
    }
    /**
       Definition of IBaseData interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseData extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSecurity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSecurity extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSensor interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSensor extends IAdaptiveRP {
    }
    /**
       Definition of IBaseListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseListener extends IAdaptiveRP {
    }
    /**
       Definition of IBaseReader interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseReader extends IAdaptiveRP {
    }
    /**
       Definition of IBaseUtil interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseUtil extends IAdaptiveRP {
    }
    /**
       Definition of IBaseCommunication interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCommunication extends IAdaptiveRP {
    }
    /**
       Definition of IBaseUI interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseUI extends IAdaptiveRP {
    }
    /**
       Definition of IXML interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IXML extends IBaseData {
    }
    /**
       Created by FRMI on 28/08/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkReachabilityCallback extends IBaseCallback {
        /**
           No data received - error condition, not authorized .
           @param error
           @since ARP1.0
        */
        onError(error: INetworkReachabilityCallbackError): any;
        /**
           Correct data received.
           @param reachable
           @since ARP1.0
        */
        onResult(reachable: boolean): any;
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden
           @param reachable
           @param warning
           @since ARP1.0
        */
        onWarning(reachable: boolean, warning: INetworkReachabilityCallbackWarning): any;
    }
    /**
       Definition of IInternalStorage interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IInternalStorage extends IBaseData {
    }
    /**
       Definition of IOpenId interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOpenId extends IBaseSecurity {
    }
    /**
       Definition of IOS interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOS extends IBaseSystem {
        /**
           Returns the OSInfo for the current operating system.
           @return OSInfo with name, version and vendor of the OS.
        */
        getOSInfo(): OSInfo;
    }
    /**
       Definition of IOCR interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOCR extends IBaseReader {
    }
    /**
       Definition of IQRCode interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IQRCode extends IBaseReader {
    }
    /**
       Definition of IContact interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContact extends IBasePIM {
        /**
           Get the contact photo
           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback): any;
        /**
           Get all the details of a contact according to its id
           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContact(contact: ContactUid, callback: IContactResultCallback): any;
        /**
           Get marked fields of all contacts
           @param callback called for return
           @param fields   to get for each Contact
           @since ARP1.0
        */
        getContactsForFields(callback: IContactResultCallback, fields: IContactFieldGroup[]): any;
        /**
           Get marked fields of all contacts according to a filter
           @param callback called for return
           @param fields   to get for each Contact
           @param filter   to search for
           @since ARP1.0
        */
        getContactsWithFilter(callback: IContactResultCallback, fields: IContactFieldGroup[], filter: IContactFilter[]): any;
        /**
           Get all contacts
           @param callback called for return
           @since ARP1.0
        */
        getContacts(callback: IContactResultCallback): any;
        /**
           Search contacts according to a term with a filter and send it to the callback
           @param term     string to search
           @param callback called for return
           @param filter   to search for
           @since ARP1.0
        */
        searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: IContactFilter[]): any;
        /**
           Search contacts according to a term and send it to the callback
           @param term     string to search
           @param callback called for return
           @since ARP1.0
        */
        searchContacts(term: string, callback: IContactResultCallback): any;
        /**
           Set the contact photo
           @param contact  id to assign the photo
           @param pngImage photo as byte array
           @return true if set is successful;false otherwise
           @since ARP1.0
        */
        setContactPhoto(contact: ContactUid, pngImage: number[]): boolean;
    }
    /**
       Definition of INetworkNaming interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkNaming extends IBaseCommunication {
    }
    /**
       Definition of IAds interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAds extends IBaseCommerce {
    }
    /**
       Definition of INetworkStatus interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkStatus extends IBaseCommunication {
        /**
           Add the listener for network status changes of the app
           @param listener
           @since ARP1.0
        */
        addNetworkStatusListener(listener: INetworkStatusListener): any;
        /**
           Un-registers an existing listener from receiving network status events.
           @param listener
           @since ARP1.0
        */
        removeNetworkStatusListener(listener: INetworkStatusListener): any;
        /**
           Removes all existing listeners from receiving network status events.
           @since ARP1.0
        */
        removeNetworkStatusListeners(): any;
    }
    /**
       Definition of IGeolocation interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGeolocation extends IBaseSensor {
        /**
           Register a new listener that will receive geolocation events.
           @param listener to be registered.
           @since ARP1.0
        */
        addGeolocationListener(listener: IGeolocationListener): any;
        /**
           De-registers an existing listener from receiving geolocation events.
           @param listener
           @since ARP1.0
        */
        removeGeolocationListener(listener: IGeolocationListener): any;
        /**
           Removed all existing listeners from receiving geolocation events.
           @since ARP1.0
        */
        removeGeolocationListeners(): any;
    }
    /**
       Definition of ILifecycle interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILifecycle extends IBaseApplication {
        /**
           Add the listener for the lifecycle of the app
           @param listener
           @since ARP1.0
        */
        addLifecycleListener(listener: ILifecycleListener): any;
        /**
           Whether the application is in background or not
           @return true if the application is in background;false otherwise
           @since ARP1.0
        */
        isBackground(): boolean;
        /**
           Un-registers an existing listener from receiving lifecycle events.
           @param listener
           @since ARP1.0
        */
        removeLifecycleListener(listener: ILifecycleListener): any;
        /**
           Removes all existing listeners from receiving lifecycle events.
           @since ARP1.0
        */
        removeLifecycleListeners(): any;
    }
    /**
       Definition of ITimer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITimer extends IBaseUtil {
    }
    /**
       Definition of IDatabaseResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDatabaseResultCallback extends IBaseCallback {
        /**
           Result callback for error responses
           @param error Returned error
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onError(error: IDatabaseResultCallbackError): any;
        /**
           Result callback for correct responses
           @param database Returns the database
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onResult(database: Database): any;
        /**
           Result callback for warning responses
           @param database Returns the database
           @param warning  Returned Warning
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onWarning(database: Database, warning: IDatabaseResultCallbackWarning): any;
    }
    /**
       Definition of IMessagingCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMessagingCallback extends IBaseCallback {
        /**
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IMessagingCallbackError): any;
        /**
           This method is called on Result
           @param success true if sent;false otherwise
           @since ARP1.0
        */
        onResult(success: boolean): any;
        /**
           This method is called on Warning
           @param success true if sent;false otherwise
           @param warning returned by the platform
           @since ARP1.0
        */
        onWarning(success: boolean, warning: IMessagingCallbackWarning): any;
    }
    /**
       Definition of ITelephony interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITelephony extends IBaseCommunication {
        /**
           Invoke a phone call
           @param number to call
           @return Status of the call
           @since ARP1.0
        */
        call(number: string): ITelephonyStatus;
    }
    /**
       Definition of ILinkedIn interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILinkedIn extends IBaseSocial {
    }
    /**
       Definition of IMessaging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMessaging extends IBasePIM {
        /**
           Send text SMS
           @param number   to send
           @param text     to send
           @param callback with the result
           @since ARP1.0
        */
        sendSMS(number: string, text: string, callback: IMessagingCallback): any;
    }
    /**
       Definition of IAmbientLight interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAmbientLight extends IBaseSensor {
    }
    /**
       Definition of IGooglePlus interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGooglePlus extends IBaseSocial {
    }
    /**
       Definition of IOAuth interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOAuth extends IBaseSecurity {
    }
    /**
       Definition of INotificationLocal interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INotificationLocal extends IBaseNotification {
    }
    /**
       Definition of IMagnetometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMagnetometer extends IBaseSensor {
    }
    /**
       Definition of ICamera interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICamera extends IBaseMedia {
    }
    /**
       Definition of IServiceResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IServiceResultCallback extends IBaseCallback {
        /**
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IServiceResultCallbackError): any;
        /**
           This method is called on Result
           @param response data
           @since ARP1.0
        */
        onResult(response: ServiceResponse): any;
        /**
           This method is called on Warning
           @param response data
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarning): any;
    }
    /**
       Definition of ISecurity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISecurity extends IBaseSecurity {
        /**
           Deletes from the device internal storage the entry/entries containing the specified key names.
           @param keys             Array with the key names to delete.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        deleteSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecureKVResultCallback): any;
        /**
           Retrieves from the device internal storage the entry/entries containing the specified key names.
           @param keys             Array with the key names to retrieve.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        getSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecureKVResultCallback): any;
        /**
           Returns if the device has been modified in anyhow
           @return true if the device has been modified; false otherwise
           @since ARP1.0
        */
        isDeviceModified(): boolean;
        /**
           Stores in the device internal storage the specified item/s.
           @param keyValues        Array containing the items to store on the device internal memory.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        setSecureKeyValuePairs(keyValues: SecureKeyPair[], publicAccessName: string, callback: ISecureKVResultCallback): any;
    }
    /**
       Definition of IFileResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileResultCallback extends IBaseCallback {
        /**
           On error result of a file operation.
           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileResultCallbackError): any;
        /**
           On correct result of a file operation.
           @param storageFile Reference to the resulting file.
           @since ARP1.0
        */
        onResult(storageFile: IFile): any;
        /**
           On partial result of a file operation, containing a warning.
           @param file            Reference to the offending file.
           @param warning         Warning processing the request.
           @since ARP1.0
        */
        onWarning(file: IFile, warning: IFileResultCallbackWarning): any;
    }
    /**
       Definition of IRuntime interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IRuntime extends IBaseSystem {
        /**
           Dismiss the current Application
           @since ARP1.0
        */
        dismissApplication(): any;
        /**
           Whether the application dismiss the splash screen successfully or not
           @return true if the application has dismissed the splash screen;false otherwise
           @since ARP1.0
        */
        dismissSplashScreen(): boolean;
    }
    /**
       Definition of IDataStream interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDataStream extends IBaseData {
    }
    /**
       Definition of IUI interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IUI extends IBaseUI {
    }
    /**
       Definition of IMail interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMail extends IBasePIM {
        /**
           Send an Email
           @param data     the email data
           @param callback with the result
           @since ARP1.0
        */
        sendEmail(data: Email, callback: IMessagingCallback): any;
    }
    /**
       Definition of IDevice interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDevice extends IBaseSystem {
        /**
           Register a new listener that will receive button events.
           @param listener to be registered.
           @since ARP1.0
        */
        addButtonListener(listener: IButtonListener): any;
        /**
           Returns the device information for the current device executing the runtime.
           @return DeviceInfo for the current device.
        */
        getDeviceInfo(): DeviceInfo;
        /**
           Gets the current Locale for the device.
           @return The current Locale information.
        */
        getLocaleCurrent(): Locale;
        /**
           De-registers an existing listener from receiving button events.
           @param listener
           @since ARP1.0
        */
        removeButtonListener(listener: IButtonListener): any;
        /**
           Removed all existing listeners from receiving button events.
           @since ARP1.0
        */
        removeButtonListeners(): any;
    }
    /**
       Definition of IImaging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IImaging extends IBaseMedia {
    }
    /**
       Definition of IGlobalization interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGlobalization extends IBaseApplication {
        /**
           List of supported locales for the application
           @return List of locales
           @since ARP1.0
        */
        getLocaleSupportedDescriptors(): Locale[];
        /**
           Gets the text/message corresponding to the given key and locale.
           @param key    to match text
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return Localized text.
           @since ARP1.0
        */
        getResourceLiteral(key: string, locale: Locale): string;
        /**
           Gets the full application configured literals (key/message pairs) corresponding to the given locale.
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return Localized texts in the form of an object (you could get the value of a keyed literal using resourceLiteralDictionary.MY_KEY or resourceLiteralDictionary["MY_KEY"]).
           @since ARP1.0
        */
        getResourceLiterals(locale: Locale): Dictionary<String>;
    }
    /**
       Definition of IConcurrent interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IConcurrent extends IBaseUtil {
    }
    /**
       Definition of IGeolocationListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGeolocationListener extends IBaseListener {
        /**
           No data received - error condition, not authorized or hardware not available.
           @since ARP1.0
        */
        onError(error: IGeolocationListenerError): any;
        /**
           Correct data received.
           @param geolocation
           @since ARP1.0
        */
        onResult(geolocation: Geolocation): any;
        /**
           Data received with warning - ie. HighDoP
           @param geolocation
           @since ARP1.0
        */
        onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarning): any;
    }
    /**
       Definition of ISettings interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISettings extends IBaseApplication {
    }
    /**
       Definition of IFileDataResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileDataResultCallback extends IBaseCallback {
        /**
           Error processing data retrieval/storage operation.
           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataResultCallbackError): any;
        /**
           Result with warning of data retrieval/storage operation.
           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(file: IFile, warning: IFileDataResultCallbackWarning): any;
    }
    /**
       Definition of ILifecycleListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILifecycleListener extends IBaseListener {
        /**
           No data received - error condition, not authorized or hardware not available.
           @since ARP1.0
        */
        onError(error: ILifecycleListenerError): any;
        /**
           Called when lifecycle changes somehow.
           @param lifecycle
           @since ARP1.0
        */
        onResult(lifecycle: Lifecycle): any;
        /**
           Data received with warning
           @param lifecycle
           @since ARP1.0
        */
        onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarning): any;
    }
    /**
       Definition of IFileListResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileListResultCallback extends IBaseCallback {
        /**
           On error result of a file operation.
           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileListResultCallbackError): any;
        /**
           On correct result of a file operation.
           @param files Array of resulting files/folders.
           @since ARP1.0
        */
        onResult(files: IFile[]): any;
        /**
           On partial result of a file operation, containing a warning.
           @param files   Array of resulting files/folders.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(files: IFile[], warning: IFileListResultCallbackWarning): any;
    }
    /**
       Definition of ICrypto interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICrypto extends IBaseUtil {
    }
    /**
       Definition of IMap interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMap extends IBaseUI {
    }
    /**
       Definition of ILogging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILogging extends IBaseUtil {
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.
           @param level    Log level
           @param category Category/tag name to identify/filter the log.
           @param message  Message to be logged
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        log(level: ILoggingLogLevel, category: string, message: string): any;
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.
           @param level   Log level
           @param message Message to be logged
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        log(level: ILoggingLogLevel, message: string): any;
    }
    /**
       Definition of IGyroscope interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGyroscope extends IBaseSensor {
    }
    /**
       Definition of IAudio interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAudio extends IBaseMedia {
    }
    /**
       Definition of IAccelerometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAccelerometer extends IBaseSensor {
        /**
           Register a new listener that will receive acceleration events.
           @param listener to be registered.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        addAccelerationListener(listener: IAccelerationListener): any;
        /**
           De-registers an existing listener from receiving acceleration events.
           @param listener
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        removeAccelerationListener(listener: IAccelerationListener): any;
        /**
           Removed all existing listeners from receiving acceleration events.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        removeAccelerationListeners(): any;
    }
    /**
       Definition of ICompression interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICompression extends IBaseUtil {
    }
    /**
       Definition of IBarometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBarometer extends IBaseSensor {
    }
    /**
       Definition of INetworkInfo interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkInfo extends IBaseCommunication {
    }
    /**
       Definition of IFacebook interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFacebook extends IBaseSocial {
    }
    /**
       Definition of INFC interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INFC extends IBaseReader {
    }
    /**
       Definition of IRSS interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IRSS extends IBaseSocial {
    }
    /**
       Definition of IContactResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContactResultCallback extends IBaseCallback {
        /**
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactResultCallbackError): any;
        /**
           This method is called on Result
           @param contacts returned by the platform
           @since ARP1.0
        */
        onResult(contacts: Contact[]): any;
        /**
           This method is called on Warning
           @param contacts returned by the platform
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarning): any;
    }
    /**
       Definition of IButtonListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IButtonListener extends IBaseListener {
        /**
           No data received
           @param error occurred
           @since ARP1.0
        */
        onError(error: IButtonListenerError): any;
        /**
           Called on button pressed
           @param button pressed
           @since ARP1.0
        */
        onResult(button: Button): any;
        /**
           Data received with warning
           @param button  pressed
           @param warning happened
           @since ARP1.0
        */
        onWarning(button: Button, warning: IButtonListenerWarning): any;
    }
    /**
       Definition of ICapabilities interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICapabilities extends IBaseSystem {
        /**
           Determines whether a specific hardware button is supported for interaction.
           @param type Type of feature to check.
           @return true is supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasButtonSupport(type: ICapabilitiesButton): boolean;
        /**
           Determines whether a specific Communication capability is supported by
the device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasCommunicationSupport(type: ICapabilitiesCommunication): boolean;
        /**
           Determines whether a specific Data capability is supported by the device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasDataSupport(type: ICapabilitiesData): boolean;
        /**
           Determines whether a specific Media capability is supported by the
device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasMediaSupport(type: ICapabilitiesMedia): boolean;
        /**
           Determines whether a specific Net capability is supported by the device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasNetSupport(type: ICapabilitiesNet): boolean;
        /**
           Determines whether a specific Notification capability is supported by the
device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasNotificationSupport(type: ICapabilitiesNotification): boolean;
        /**
           Determines whether a specific Sensor capability is supported by the
device.
           @param type Type of feature to check.
           @return true if supported, false otherwise.
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        hasSensorSupport(type: ICapabilitiesSensor): boolean;
    }
    /**
       Definition of ITwitter interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITwitter extends IBaseSocial {
    }
    /**
       Definition of IFileSystem interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileSystem extends IBaseData {
        /**
           Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.
           @param parent Parent directory.
           @param name Name of new file or directory.
           @return A reference to a new or existing location in the filesystem.
        */
        createFileDescriptor(parent: IFile, name: string): IFile;
        /**
           Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.
           @return Path to the application's cache folder.
           @since ARP1.0
        */
        getApplicationCacheFolder(): IFile;
        /**
           Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.
           @return Path to the application's cloud storage folder.
           @since ARP1.0
        */
        getApplicationCloudFolder(): IFile;
        /**
           Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.
           @return Path to the application's documents folder.
           @since ARP1.0
        */
        getApplicationDocumentsFolder(): IFile;
        /**
           Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.
           @return Path to the application folder.
           @since ARP1.0
        */
        getApplicationFolder(): IFile;
        /**
           Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.
           @return Path to the application's protected storage folder.
           @since ARP1.0
        */
        getApplicationProtectedFolder(): IFile;
        /**
           Returns the file system dependent file separator.
           @return char with the directory/file separator.
           @since ARP1.0
        */
        getSeparator(): string;
        /**
           Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.
           @return Path to the application's documents folder.
           @since ARP1.0
        */
        getSystemExternalFolder(): IFile;
    }
    /**
       Definition of IVibration interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IVibration extends IBaseNotification {
    }
    /**
       Definition of IDesktop interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDesktop extends IBaseUI {
    }
    /**
       Definition of INetworkReachability interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkReachability extends IBaseCommunication {
        /**
           Whether there is connectivity to a host, via domain name or ip address, or not.
           @param host     domain name or ip address of host.
           @param callback Callback called at the end.
        */
        isNetworkReachable(host: string, callback: INetworkReachabilityCallback): any;
        /**
           Whether there is connectivity to an url of a service or not.
           @param url      to look for
           @param callback Callback called at the end
        */
        isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback): any;
    }
    /**
       Definition of ISocket interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISocket extends IBaseCommunication {
    }
    /**
       Definition of IWallet interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IWallet extends IBaseCommerce {
    }
    /**
       Created by FRMI on 25/08/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContactPhotoResultCallback extends IBaseCallback {
        /**
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactPhotoResultCallbackError): any;
        /**
           This method is called on Result
           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        onResult(contactPhoto: number[]): any;
        /**
           This method is called on Warning
           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): any;
    }
    /**
       Definition of IDisplay interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDisplay extends IBaseSystem {
    }
    /**
       Definition of IVideo interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IVideo extends IBaseMedia {
        /**
           Play url video stream
           @param url of the video
        */
        playStream(url: string): any;
    }
    /**
       Definition of IProximity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IProximity extends IBaseSensor {
    }
    /**
       Definition of IAnalytics interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAnalytics extends IBaseApplication {
    }
    /**
       Definition of IManagement interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IManagement extends IBaseApplication {
    }
    /**
       Definition of IUpdate interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IUpdate extends IBaseApplication {
    }
    /**
       Definition of IBarcode interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBarcode extends IBaseReader {
    }
    /**
       Definition of INotification interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INotification extends IBaseNotification {
    }
    /**
       Definition of IService interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IService extends IBaseCommunication {
        /**
           Get a reference to a registered service by name.
           @param serviceName Name of service.
           @return A service, if registered, or null of the service does not exist.
        */
        getService(serviceName: string): Service;
        /**
           Request async a service for an Url
           @param serviceRequest
           @param service
           @param callback
        */
        invokeService(serviceRequest: ServiceRequest, service: Service, callback: IServiceResultCallback): any;
        /**
           Check whether a service by the given name is registered.
           @param serviceName
           @return True if the service is registered, false otherwise.
        */
        isRegistered(serviceName: string): boolean;
        /**
           Check whether a service by the given name is registered.
           @param serviceName
           @return True if the service is registered, false otherwise.
        */
        isRegistered(service: Service): boolean;
        /**
           Register a new service
           @param service to register
        */
        registerService(service: Service): any;
        /**
           Unregister all services.
        */
        unregisterServices(): any;
        /**
           Unregister a service
           @param service to unregister
        */
        unregisterService(service: Service): any;
    }
    /**
       Definition of IAlarm interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAlarm extends IBaseNotification {
    }
    /**
       Definition of ISecureKVResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISecureKVResultCallback extends IBaseCallback {
        /**
           No data received - error condition, not authorized .
           @param error
           @since ARP1.0
        */
        onError(error: ISecureKVResultCallbackError): any;
        /**
           Correct data received.
           @param keyValues
           @since ARP1.0
        */
        onResult(keyValues: SecureKeyPair[]): any;
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden
           @param keyValues
           @param warning
           @since ARP1.0
        */
        onWarning(keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarning): any;
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResourceCallback extends IBaseCallback {
        /**
           null
        */
        onError(resource: IAppResource, error: IAppResourceCallbackError): any;
        /**
           null
        */
        onResult(resource: IAppResource): any;
        /**
           null
        */
        onWarning(resource: IAppResource, warning: IAppResourceCallbackWarning): any;
    }
    /**
       Definition of ICloud interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICloud extends IBaseData {
    }
    /**
       Definition of IDatabase interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDatabase extends IBaseData {
        /**
           Creates a database on default path for every platform.
           @param callback Asynchronous callback
           @param database Database object to create
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        createDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           Creates a table inside a database for every platform.
           @param database Database for table creating.
           @param table    Table object with the name of the table inside.
           @param callback Table callback with the response
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        createTable(database: Database, table: Table, callback: ITableResultCallback): any;
        /**
           Deletes a database on default path for every platform.
           @param database Database object to delete
           @param callback Asynchronous callback
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           Deletes a table inside a database for every platform.
           @param database Database for table removal.
           @param table    Table object with the name of the table inside.
           @param callback Table callback with the response
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        deleteTable(database: Database, table: Table, callback: ITableResultCallback): any;
        /**
           Executes SQL statement into the given database. The replacements
should be passed as a parameter
           @param database     The database object reference.
           @param statement    SQL statement.
           @param replacements List of SQL statement replacements.
           @param callback     Table callback with the response.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        executeSqlStatement(database: Database, statement: string, replacements: string[], callback: ITableResultCallback): any;
        /**
           Executes SQL transaction (some statements chain) inside given database.
           @param database     The database object reference.
           @param statements   The statements to be executed during transaction.
           @param rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param callback     Table callback with the response.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        executeSqlTransactions(database: Database, statements: string[], rollbackFlag: boolean, callback: ITableResultCallback): any;
        /**
           Checks if database exists by given database name.
           @param database Database Object to check if exists
           @return True if exists, false otherwise
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        existsDatabase(database: Database): boolean;
        /**
           Checks if table exists by given database name.
           @param database Database for table consulting.
           @param table    Table object with the name of the table inside.
           @return True if exists, false otherwise
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        existsTable(database: Database, table: Table): boolean;
    }
    /**
       Created by clozano on 05/12/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkStatusListener extends IBaseListener {
        /**
           No data received - error condition, not authorized or hardware not available.
           @param error
           @since ARP1.0
        */
        onError(error: INetworkStatusListenerError): any;
        /**
           Called when network connection changes somehow.
           @param network Change to this network.
           @since ARP1.0
        */
        onResult(network: ICapabilitiesNet): any;
        /**
           Status received with warning
           @param network Change to this network.
           @param warning
           @since ARP1.0
        */
        onWarning(network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): any;
    }
    /**
       Definition of ISession interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISession extends IBaseCommunication {
        /**
           Returns an attribute object
           @return object attribute
           @since ARP1.0
        */
        getAttribute(name: string): any;
        /**
           Returns all Session Attributes
        */
        getAttributes(): any[];
        /**
           Returns the cookie array
           @return cookie array
           @since ARP1.0
        */
        getCookies(): Cookie[];
        /**
           Returns all attibute names
           @return array with all attribute names
        */
        listAttributeNames(): string[];
        /**
           Remove an attribute by its name
           @param name
        */
        removeAttribute(name: string): any;
        /**
           Remove all attributes
        */
        removeAttributes(): any;
        /**
           Remove a cookie
           @param cookie
        */
        removeCookie(cookie: Cookie): any;
        /**
           Remove a cookies array
           @param cookies
        */
        removeCookies(cookies: Cookie[]): any;
        /**
           Set an attribute
           @param name
           @param value
        */
        setAttribute(name: string, value: any): any;
        /**
           Set a cookie object
           @param cookie
        */
        setCookie(cookie: Cookie): any;
        /**
           Set the cookies array
           @param cookies
        */
        setCookies(cookies: Cookie[]): any;
    }
    /**
       Definition of IStore interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IStore extends IBaseCommerce {
    }
    /**
       Definition of ICalendar interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICalendar extends IBasePIM {
    }
    /**
       Definition of IAccelerationListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAccelerationListener extends IBaseListener {
        /**
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
           @param error
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        onError(error: IAccelerationListenerError): any;
        /**
           Correct data received.
           @param acceleration
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        onResult(acceleration: Acceleration): any;
        /**
           Data received with warning - ie. Needs calibration.
           @param acceleration
           @param warning
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarning): any;
    }
    /**
       Definition of IBluetooth interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBluetooth extends IBaseCommunication {
    }
    /**
       Definition of ITableResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITableResultCallback extends IBaseCallback {
        /**
           Result callback for error responses
           @param error Returned error
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onError(error: ITableResultCallbackError): any;
        /**
           Result callback for correct responses
           @param table Returns the table
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onResult(table: Table): any;
        /**
           Result callback for warning responses
           @param table   Returns the table
           @param warning Returned Warning
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        onWarning(table: Table, warning: ITableResultCallbackWarning): any;
    }
    /**
       Definition of IPrinting interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IPrinting extends IBaseApplication {
    }
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
    /**
       Created by clozano on 05/12/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileDataLoadResultCallback extends IFileDataResultCallback {
        /**
           Result of data retrieval operation.
           @param data Data loaded.
           @since ARP1.0
        */
        onResult(data: number[]): any;
    }
    /**
       Created by clozano on 05/12/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileDataStoreResultCallback extends IFileDataResultCallback {
        /**
           Result of data storage operation.
           @param file File reference to stored data.
           @since ARP1.0
        */
        onResult(file: IFile): any;
    }
    /**
       Structure representing the data of a http request or response header.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Header {
        /**
           Value of the header
        */
        data: string;
        /**
           Name ot the header
        */
        name: string;
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           Returns the header value

           @return
           @since ARP1.0
        */
        getData(): string;
        /**
           Set the header value

           @param data
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           Returns the header name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the header name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Represents a local or remote service request.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ServiceRequest {
        /**
           The HTTP procotol version to be used for this request.
        */
        protocolVersion: IServiceProtocolVersion;
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The headers array (name,value pairs) to be included on the I/O service request.
        */
        headers: Header[];
        /**
           The request method
        */
        method: string;
        /**
           The byte[] representing the Content field.
        */
        rawContent: number[];
        /**
           The session context for the Request/Response.
        */
        session: ISession;
        /**
           Contructor used by the implementation

           @param content
           @param contentType
           @param contentLength
           @param rawContent
           @param headers
           @param method
           @param protocolVersion
           @param session
           @param contentEncoding
           @since ARP1.0
        */
        constructor(content: string, contentType: string, contentLength: number, rawContent: number[], headers: Header[], method: string, protocolVersion: IServiceProtocolVersion, session: ISession, contentEncoding: string);
        /**
           Returns the protocol version

           @return protocolVersion enum
           @since ARP1.0
        */
        getProtocolVersion(): IServiceProtocolVersion;
        /**
           Set the protocol version

           @param protocolVersion
           @since ARP1.0
        */
        setProtocolVersion(protocolVersion: IServiceProtocolVersion): void;
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        getHeaders(): Header[];
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        setHeaders(headers: Header[]): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getMethod(): string;
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        setMethod(method: string): void;
        /**
           Returns the byte[] of the content

           @return rawContent
           @since ARP1.0
        */
        getRawContent(): number[];
        /**
           Set the byte[] of the content

           @param rawContent
           @since ARP1.0
        */
        setRawContent(rawContent: number[]): void;
        /**
           Returns the session object

           @return session
           @since ARP1.0
        */
        getSession(): ISession;
        /**
           Set the session object

           @param session
           @since ARP1.0
        */
        setSession(session: ISession): void;
    }
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactTag {
        /**
           The value of the Tag
        */
        dataValue: string;
        /**
           The name of the Tag
        */
        name: string;
        /**
           Constructor used by the implementation

           @param dataValue
           @param name
           @since ARP1.0
        */
        constructor(name: string, dataValue: string);
        /**
           Returns the value of the Tag

           @return value
           @since ARP1.0
        */
        getDataValue(): string;
        /**
           Set the value of the Tag

           @param dataValue
           @since ARP1.0
        */
        setDataValue(dataValue: string): void;
        /**
           Returns the name of the Tag

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Tag

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Represents a local or remote service response.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ServiceResponse {
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the binary Content.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: string;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The headers array (name,value pairs) to be included on the I/O service request.
        */
        headers: Header[];
        /**
           The session context for the Request/Response.
        */
        session: ISession;
        /**
           Constructor used by the implementation

           @param content
           @param contentType
           @param contentLength
           @param contentBinary
           @param contentBinaryLength
           @param headers
           @param session
           @param contentEncoding
           @since ARP1.0
        */
        constructor(content: string, contentType: string, contentLength: string, contentBinary: number[], contentBinaryLength: number, headers: Header[], session: ISession, contentEncoding: string);
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the binary content

           @return contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           Set the binary content

           @param contentBinary
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           Retrusn the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           Set the binary content length

           @param contentBinaryLength
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): string;
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        setContentLength(contentLength: string): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        getHeaders(): Header[];
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        setHeaders(headers: Header[]): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getSession(): ISession;
        /**
           Set the method

           @param session
           @since ARP1.0
        */
        setSession(session: ISession): void;
    }
    /**
       Structure representing the website data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactWebsite {
        /**
           The url of the website
        */
        url: string;
        /**
           Constructor used by the implementation

           @param url
           @since ARP1.0
        */
        constructor(url: string);
        /**
           Returns the url of the website

           @return website url
           @since ARP1.0
        */
        getUrl(): string;
        /**
           Set the url of the website

           @param url
           @since ARP1.0
        */
        setUrl(url: string): void;
    }
    /**
       Structure representing the data elements of an email addressee.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class EmailAddress {
        /**
           The Email address
        */
        address: string;
        /**
           Constructor used by implementation

           @param address
           @since ARP1.0
        */
        constructor(address: string);
        /**
           Returns the email address

           @return address of the Email
           @since ARP1.0
        */
        getAddress(): string;
        /**
           Set the Email address

           @param address of the Email
           @since ARP1.0
        */
        setAddress(address: string): void;
    }
    /**
       Structure representing the personal info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactPersonalInfo {
        /**
           The title of the Contact
        */
        title: ContactPersonalInfoTitle;
        /**
           The last name of the Contact
        */
        lastName: string;
        /**
           The middle name of the Contact if it proceeds
        */
        middleName: string;
        /**
           The name of the Contact
        */
        name: string;
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle);
        /**
           Returns the title of the Contact

           @return Title
           @since ARP1.0
        */
        getTitle(): ContactPersonalInfoTitle;
        /**
           Set the Title of the Contact

           @param title
           @since ARP1.0
        */
        setTitle(title: ContactPersonalInfoTitle): void;
        /**
           Returns the last name of the Contact

           @return lastName
           @since ARP1.0
        */
        getLastName(): string;
        /**
           Set the last name of the Contact

           @param lastName
           @since ARP1.0
        */
        setLastName(lastName: string): void;
        /**
           Returns the middle name of the Contact

           @return middelName
           @since ARP1.0
        */
        getMiddleName(): string;
        /**
           Set the middle name of the Contact

           @param middleName
           @since ARP1.0
        */
        setMiddleName(middleName: string): void;
        /**
           Returns the name of the Contact

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Contact

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Represents a specific user or system locate.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Locale {
        /**
           A valid ISO Country Code.
        */
        country: string;
        /**
           A valid ISO Language Code.
        */
        language: string;
        /**
           Constructor used by the implementation

           @param country
           @param language
           @since ARP1.0
        */
        constructor(language: string, country: string);
        /**
           Returns the country code

           @return country code
           @since ARP1.0
        */
        getCountry(): string;
        /**
           Set the country code

           @param country code
           @since ARP1.0
        */
        setCountry(country: string): void;
        /**
           Returns the language code

           @return language code
           @since ARP1.0
        */
        getLanguage(): string;
        /**
           Set the language code

           @param language code
           @since ARP1.0
        */
        setLanguage(language: string): void;
    }
    /**
       Structure representing a database reference.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Database {
        /**
           Indicates if database was created or needs to be created as Compressed.
        */
        compress: boolean;
        /**
           Database Name (name of the .db local file).
        */
        name: string;
        /**
           Constructor using fields.

           @param name     Name of the Table.
           @param compress Compress enbaled or not.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        constructor(name: string, compress: boolean);
        /**
           Returns if the table is compressed

           @return Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        getCompress(): boolean;
        /**
           Sets if the table is compressed or not.

           @param compress Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        setCompress(compress: boolean): void;
        /**
           Returns the name.

           @return The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        getName(): string;
        /**
           Sets the name of the table.

           @param name The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Structure representing the address data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactAddress {
        /**
           The address type
        */
        type: ContactAddressType;
        /**
           The Contact address
        */
        address: string;
        /**
           Constructor used by the implementation

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        constructor(address: string, type: ContactAddressType);
        /**
           Returns the type of the address

           @return AddressType Address type.
           @since ARP1.0
        */
        getType(): ContactAddressType;
        /**
           Set the address type

           @param type Address type.
           @since ARP1.0
        */
        setType(type: ContactAddressType): void;
        /**
           Returns the Contact address

           @return address Address data.
           @since ARP1.0
        */
        getAddress(): string;
        /**
           Set the address of the Contact

           @param address Address data.
           @since ARP1.0
        */
        setAddress(address: string): void;
    }
    /**
       Represents a single secureKey-value pair.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class SecureKeyPair {
        secureData: string;
        secureKey: string;
        /**
           Constructor with parameters

           @param secureKey  name of the keypair
           @param secureData value of the keypair
           @since ARP1.0
        */
        constructor(secureKey: string, secureData: string);
        /**
           Returns the object value

           @return Value.
           @since ARP 1.0
        */
        getSecureData(): string;
        /**
           Sets the value for this object

           @param secureData value to set.
           @since ARP 1.0
        */
        setSecureData(secureData: string): void;
        /**
           Returns the object secureKey name.

           @return Key name.
           @since ARP 1.0
        */
        getSecureKey(): string;
        /**
           Sets the secureKey name for this object.

           @param secureKey Key name.
           @since ARP 1.0
        */
        setSecureKey(secureKey: string): void;
    }
    /**
       Structure representing the data of a http cookie.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Cookie {
        /**
           Cookie creation timestamp in milliseconds.
        */
        creation: number;
        /**
           Value of the Cookie
        */
        data: string;
        /**
           Domain for which the cookie is valid.
        */
        domain: string;
        /**
           Cookie expiry in milliseconds or -1 for session only.
        */
        expiry: number;
        /**
           Name ot the cookie
        */
        name: string;
        /**
           URI path for which the cookie is valid.
        */
        path: string;
        /**
           Scheme of the domain - http/https - for which the cookie is valid.
        */
        scheme: string;
        /**
           Cookie is secure (https only)
        */
        secure: boolean;
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           Gets Cookie creation timestamp in milliseconds.

           @return creation Cookie creation timestamp in milliseconds.
        */
        getCreation(): number;
        /**
           Sets Cookie creation timestamp in milliseconds.

           @param creation Cookie creation timestamp in milliseconds.
        */
        setCreation(creation: number): void;
        /**
           Returns the cookie value

           @return
           @since ARP1.0
        */
        getData(): string;
        /**
           Set the cookie value

           @param data
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        getDomain(): string;
        /**
           Set the domain

           @param domain
        */
        setDomain(domain: string): void;
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        getExpiry(): number;
        /**
           Set the expiration date in milis

           @param expiry
        */
        setExpiry(expiry: number): void;
        /**
           Returns the cookie name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the cookie name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
        */
        setPath(path: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
        */
        setScheme(scheme: string): void;
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        getSecure(): boolean;
        /**
           Set whether the cookie is secure or not

           @param secure
        */
        setSecure(secure: boolean): void;
    }
    /**
       Structure representing the social data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactSocial {
        /**
           The social network
        */
        socialNetwork: ContactSocialNetwork;
        /**
           The profileUrl
        */
        profileUrl: string;
        /**
           Constructor used by the implementation

           @param socialNetwork of the profile
           @param profileUrl    of the user
           @since ARP1.0
        */
        constructor(socialNetwork: ContactSocialNetwork, profileUrl: string);
        /**
           Returns the social network

           @return socialNetwork
           @since ARP1.0
        */
        getSocialNetwork(): ContactSocialNetwork;
        /**
           Set the social network

           @param socialNetwork
           @since ARP1.0
        */
        setSocialNetwork(socialNetwork: ContactSocialNetwork): void;
        /**
           Returns the profile url of the user

           @return profileUrl
           @since ARP1.0
        */
        getProfileUrl(): string;
        /**
           Set the profile url of the iser

           @param profileUrl
           @since ARP1.0
        */
        setProfileUrl(profileUrl: string): void;
    }
    /**
       Structure representing a remote or local service access end-point.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Endpoint {
        /**
           The remote serice host (alias or IP).
        */
        host: string;
        /**
           The remote service path (to be added to the host and port url).
        */
        path: string;
        /**
           The remote service accessible port.
        */
        port: number;
        /**
           The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
        */
        proxy: string;
        /**
           The remote service scheme.
        */
        scheme: string;
        /**
           Constructor used by the implementation

           @param host
           @param path
           @param port
           @param proxy
           @param scheme
           @since ARP1.0
        */
        constructor(host: string, path: string, port: number, proxy: string, scheme: string);
        /**
           Returns the host

           @return host
           @since ARP1.0
        */
        getHost(): string;
        /**
           Set the host

           @param host
           @since ARP1.0
        */
        setHost(host: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
           @since ARP1.0
        */
        setPath(path: string): void;
        /**
           Returns the port

           @return port
           @since ARP1.0
        */
        getPort(): number;
        /**
           Set the port

           @param port
           @since ARP1.0
        */
        setPort(port: number): void;
        /**
           Return the proxy

           @return proxy
           @since ARP1.0
        */
        getProxy(): string;
        /**
           Set the proxy

           @param proxy
           @since ARP1.0
        */
        setProxy(proxy: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
           @since ARP1.0
        */
        setScheme(scheme: string): void;
    }
    /**
       Represents a specific application life-cycle stage.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Lifecycle {
        /**
           Represent the state of the app

Possible lifecycle States:

1. Starting    - Before starting.
2. Started     - Start concluded.
3. Running     - Accepts user interaction - running in foreground.
4. Pausing     - Before going to background.
4.1 PausedIdle - In background, no scheduled background activity (passive).
4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
5. Resuming    - Before going to foreground, followed by Running state.
6. Stopping    - Before stopping.
        */
        state: LifecycleState;
        /**
           Constructor used by the implementation

           @param state
           @since ARP1.0
        */
        constructor(state: LifecycleState);
        /**
           Returns the state of the application

           @return state of the app
           @since ARP1.0
        */
        getState(): LifecycleState;
        /**
           Set the State of the application

           @param state of the app
           @since ARP1.0
        */
        setState(state: LifecycleState): void;
    }
    /**
       Created by clozano on 05/12/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class APIRequest {
        /**
           { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
        */
        methodName: string;
        parameterTypes: string[];
        parameters: any[];
        /**
           Constructor.          */
        constructor();
        /**
           Gets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

           @return methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
        */
        getMethodName(): string;
        /**
           Sets { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }

           @param methodName { methodName: "coolMethod", parameterTypes: [{},{},{},{}], parameters: [{},{},{},{}] }
        */
        setMethodName(methodName: string): void;
        /**
           Gets null

           @return parameterTypes null
        */
        getParameterTypes(): string[];
        /**
           Sets null

           @param parameterTypes null
        */
        setParameterTypes(parameterTypes: string[]): void;
        /**
           Gets null

           @return parameters null
        */
        getParameters(): any[];
        /**
           Sets null

           @param parameters null
        */
        setParameters(parameters: any[]): void;
    }
    /**
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Acceleration {
        /**
           Timestamp of the acceleration reading.
        */
        timeStamp: number;
        /**
           X-axis component of the acceleration.
        */
        x: number;
        /**
           Y-axis component of the acceleration.
        */
        y: number;
        /**
           Z-axis component of the acceleration.
        */
        z: number;
        /**
           Constructor.
           @param x X Coordinate
           @param y Y Coordinate
           @param z Z Coordinate
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        constructor(x: number, y: number, z: number, timeStamp: number);
        /**
           Gets Timestamp of the acceleration reading.

           @return timeStamp Timestamp of the acceleration reading.
        */
        getTimeStamp(): number;
        /**
           Sets Timestamp of the acceleration reading.

           @param timeStamp Timestamp of the acceleration reading.
        */
        setTimeStamp(timeStamp: number): void;
        /**
           Gets X-axis component of the acceleration.

           @return x X-axis component of the acceleration.
        */
        getX(): number;
        /**
           Sets X-axis component of the acceleration.

           @param x X-axis component of the acceleration.
        */
        setX(x: number): void;
        /**
           Gets Y-axis component of the acceleration.

           @return y Y-axis component of the acceleration.
        */
        getY(): number;
        /**
           Sets Y-axis component of the acceleration.

           @param y Y-axis component of the acceleration.
        */
        setY(y: number): void;
        /**
           Gets Z-axis component of the acceleration.

           @return z Z-axis component of the acceleration.
        */
        getZ(): number;
        /**
           Sets Z-axis component of the acceleration.

           @param z Z-axis component of the acceleration.
        */
        setZ(z: number): void;
    }
    /**
       Structure representing the column specification of a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Column {
        /**
           Name of the column
        */
        name: string;
        /**
           Constructor for implementation using.

           @param name Name of the column
        */
        constructor(name: string);
        /**
           Returns the name of the column.

           @return The name of the column.
        */
        getName(): string;
        /**
           Sets the name of the column.

           @param name The name of the column.
        */
        setName(name: string): void;
    }
    /**
       Structure representing the binary attachment data.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class AttachmentData {
        /**
           The raw data for the current file attachment (byte array)
        */
        data: number[];
        /**
           The data size (in bytes) of the current file attachment
        */
        dataSize: number;
        /**
           The name of the current file attachment
        */
        fileName: string;
        /**
           The mime type of the current attachment
        */
        mimeType: string;
        /**
           The relative path where the contents for the attachment file could be located.
        */
        referenceUrl: string;
        /**
           Constructor used by the implementation

           @param data         raw data of the file attachment
           @param dataSize     size of the file attachment
           @param fileName     name of the file attachment
           @param mimeType     mime type of the file attachment
           @param referenceUrl relative url of the file attachment
           @since ARP1.0
        */
        constructor(data: number[], dataSize: number, fileName: string, mimeType: string, referenceUrl: string);
        /**
           Returns the raw data in byte[]

           @return data Octet-binary content of the attachment payload.
           @since ARP1.0
        */
        getData(): number[];
        /**
           Set the data of the attachment as a byte[]

           @param data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        setData(data: number[]): void;
        /**
           Returns the size of the attachment as a long

           @return dataSize Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        getDataSize(): number;
        /**
           Set the size of the attachment as a long

           @param dataSize Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        setDataSize(dataSize: number): void;
        /**
           Returns the filename of the attachment

           @return fileName Name of the attachment.
           @since ARP1.0
        */
        getFileName(): string;
        /**
           Set the name of the file attachment

           @param fileName Name of the attachment.
           @since ARP1.0
        */
        setFileName(fileName: string): void;
        /**
           Returns the mime type of the attachment

           @return mimeType
           @since ARP1.0
        */
        getMimeType(): string;
        /**
           Set the mime type of the attachment

           @param mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        setMimeType(mimeType: string): void;
        /**
           Returns the absolute url of the file attachment

           @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        getReferenceUrl(): string;
        /**
           Set the absolute url of the attachment

           @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        setReferenceUrl(referenceUrl: string): void;
    }
    /**
       Structure representing the data elements of an email.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Email {
        /**
           Array of attatchments
        */
        attachmentData: AttachmentData[];
        /**
           Array of Email Blind Carbon Copy recipients
        */
        bccRecipients: EmailAddress[];
        /**
           Array of Email Carbon Copy recipients
        */
        ccRecipients: EmailAddress[];
        /**
           Message body
        */
        messageBody: string;
        /**
           Message body mime type
        */
        messageBodyMimeType: string;
        /**
           Subject of the email
        */
        subject: string;
        /**
           Array of Email recipients
        */
        toRecipients: EmailAddress[];
        /**
           Constructor used by the implementation

           @param toRecipients        array of recipients
           @param ccRecipients        array of cc recipients
           @param bccRecipients       array of bcc recipients
           @param attachmentData      array of attatchments
           @param messageBody         body of the email
           @param messageBodyMimeType mime type of the body
           @param subject             of the email
           @since ARP1.0
        */
        constructor(toRecipients: EmailAddress[], ccRecipients: EmailAddress[], bccRecipients: EmailAddress[], attachmentData: AttachmentData[], messageBody: string, messageBodyMimeType: string, subject: string);
        /**
           Returns an array of attachments

           @return attachmentData array with the email attachments
           @since ARP1.0
        */
        getAttachmentData(): AttachmentData[];
        /**
           Set the email attachment data array

           @param attachmentData array of email attatchments
           @since ARP1.0
        */
        setAttachmentData(attachmentData: AttachmentData[]): void;
        /**
           Returns the array of recipients

           @return bccRecipients array of bcc recipients
           @since ARP1.0
        */
        getBccRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param bccRecipients array of bcc recipients
           @since ARP1.0
        */
        setBccRecipients(bccRecipients: EmailAddress[]): void;
        /**
           Returns the array of recipients

           @return ccRecipients array of cc recipients
           @since ARP1.0
        */
        getCcRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param ccRecipients array of cc recipients
           @since ARP1.0
        */
        setCcRecipients(ccRecipients: EmailAddress[]): void;
        /**
           Returns the message body of the email

           @return message Body string of the email
        */
        getMessageBody(): string;
        /**
           Set the message body of the email

           @param messageBody message body of the email
           @since ARP1.0
        */
        setMessageBody(messageBody: string): void;
        /**
           Returns the myme type of the message body

           @return mime type string of the message boddy
           @since ARP1.0
        */
        getMessageBodyMimeType(): string;
        /**
           Set the mime type for the message body

           @param messageBodyMimeType type of the body message
           @since ARP1.0
        */
        setMessageBodyMimeType(messageBodyMimeType: string): void;
        /**
           Returns the subject of the email

           @return subject string of the email
           @since ARP1.0
        */
        getSubject(): string;
        /**
           Set the subject of the email

           @param subject of the email
           @since ARP1.0
        */
        setSubject(subject: string): void;
        /**
           Returns the array of recipients

           @return toRecipients array of recipients
           @since ARP1.0
        */
        getToRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param toRecipients array of recipients
           @since ARP1.0
        */
        setToRecipients(toRecipients: EmailAddress[]): void;
    }
    /**
       Structure representing the a physical or logical button on a device.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Button {
        /**
           Button type
        */
        type: ICapabilitiesButton;
        /**
           Constructor used by the implementation

           @param type Button type.
           @since ARP1.0
        */
        constructor(type: ICapabilitiesButton);
        /**
           Returns the button type

           @return type Button type.
           @since ARP1.0
        */
        getType(): ICapabilitiesButton;
        /**
           Sets Button type

           @param type Button type
        */
        setType(type: ICapabilitiesButton): void;
    }
    /**
       Represents a data table composed of columns and rows.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Table {
        /**
           Number of columns.
        */
        columnCount: number;
        /**
           Definition of columns.
        */
        columns: Column[];
        /**
           Name of the table.
        */
        name: string;
        /**
           Number of rows.
        */
        rowCount: number;
        /**
           Rows of the table containing the data.
        */
        rows: Row[];
        /**
           Constructor by default

           @param name The name of the table
        */
        constructor(name: string);
        /**
           Get the number of columns

           @return The number of columns
        */
        getColumnCount(): number;
        /**
           Sets the number of columns

           @param columnCount The number of columns
        */
        setColumnCount(columnCount: number): void;
        /**
           Get the columns

           @return The columns
        */
        getColumns(): Column[];
        /**
           Sets the columns of the table

           @param columns The columns of the table
        */
        setColumns(columns: Column[]): void;
        /**
           Returns the name of the table

           @return The name of the table
        */
        getName(): string;
        /**
           Sets the name of the table

           @param name The name of the table
        */
        setName(name: string): void;
        /**
           Get the number of rows

           @return The number of rows
        */
        getRowCount(): number;
        /**
           Sets the number of rows

           @param rowCount The number of rows
        */
        setRowCount(rowCount: number): void;
        /**
           Get the rows of the table

           @return The rows of the table
        */
        getRows(): Row[];
        /**
           Sets the rows of the table

           @param rows The rows of the table
        */
        setRows(rows: Row[]): void;
    }
    /**
       Represents the basic information about the operating system.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class OSInfo {
        /**
           The name of the operating system.
        */
        name: string;
        /**
           The vendor of the operating system.
        */
        vendor: string;
        /**
           The version/identifier of the operating system.
        */
        version: string;
        /**
           Constructor used by implementation to set the OS information.

           @param name    of the OS.
           @param version of the OS.
           @param vendor  of the OS.
        */
        constructor(name: string, version: string, vendor: string);
        /**
           Returns the name of the operating system.

           @return OS name.
        */
        getName(): string;
        /**
           Sets The name of the operating system.

           @param name The name of the operating system.
        */
        setName(name: string): void;
        /**
           Returns the vendor of the operating system.

           @return OS vendor.
        */
        getVendor(): string;
        /**
           Sets The vendor of the operating system.

           @param vendor The vendor of the operating system.
        */
        setVendor(vendor: string): void;
        /**
           Returns the version of the operating system.

           @return OS version.
        */
        getVersion(): string;
        /**
           Sets The version/identifier of the operating system.

           @param version The version/identifier of the operating system.
        */
        setVersion(version: string): void;
    }
    /**
       Structure representing the basic device information.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class DeviceInfo {
        /**
           Model of device - equivalent to device release or version.
        */
        model: string;
        /**
           Name of device - equivalent to brand.
        */
        name: string;
        /**
           Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        uuid: string;
        /**
           Vendor of the device hardware.
        */
        vendor: string;
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
        */
        constructor(name: string, model: string, vendor: string, uuid: string);
        /**
           Returns the model of the device.

           @return String with the model of the device.
        */
        getModel(): string;
        /**
           Sets Model of device - equivalent to device release or version.

           @param model Model of device - equivalent to device release or version.
        */
        setModel(model: string): void;
        /**
           Returns the name of the device.

           @return String with device name.
        */
        getName(): string;
        /**
           Sets Name of device - equivalent to brand.

           @param name Name of device - equivalent to brand.
        */
        setName(name: string): void;
        /**
           Returns the platform dependent UUID of the device.

           @return String with the 128-bit device identifier.
        */
        getUuid(): string;
        /**
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        setUuid(uuid: string): void;
        /**
           Returns the vendor of the device.

           @return String with the vendor name.
        */
        getVendor(): string;
        /**
           Sets Vendor of the device hardware.

           @param vendor Vendor of the device hardware.
        */
        setVendor(vendor: string): void;
    }
    /**
       Structure representing the professional info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactProfessionalInfo {
        /**
           The company of the job
        */
        company: string;
        /**
           The job description
        */
        jobDescription: string;
        /**
           The job title
        */
        jobTitle: string;
        /**
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param jobTitle
           @param jobDescription
           @param company
           @since ARP1.0
        */
        constructor(jobTitle: string, jobDescription: string, company: string);
        /**
           Returns the company of the job

           @return company
           @since ARP1.0
        */
        getCompany(): string;
        /**
           Set the company of the job

           @param company
           @since ARP1.0
        */
        setCompany(company: string): void;
        /**
           Returns the description of the job

           @return description
           @since ARP1.0
        */
        getJobDescription(): string;
        /**
           Set the description of the job

           @param jobDescription
           @since ARP1.0
        */
        setJobDescription(jobDescription: string): void;
        /**
           Returns the title of the job

           @return title
           @since ARP1.0
        */
        getJobTitle(): string;
        /**
           Set the title of the job

           @param jobTitle
           @since ARP1.0
        */
        setJobTitle(jobTitle: string): void;
    }
    /**
       Structure representing the email data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactEmail {
        /**
           The type of the email
        */
        type: ContactEmailType;
        /**
           Email of the Contact
        */
        email: string;
        /**
           Whether the email is the primary one or not
        */
        primary: boolean;
        /**
           Constructor used by the implementation

           @param type
           @param primary
           @param email
           @since ARP1.0
        */
        constructor(type: ContactEmailType, primary: boolean, email: string);
        /**
           Returns the type of the email

           @return EmailType
           @since ARP1.0
        */
        getType(): ContactEmailType;
        /**
           Set the type of the email

           @param type
           @since ARP1.0
        */
        setType(type: ContactEmailType): void;
        /**
           Returns the email of the Contact

           @return email
           @since ARP1.0
        */
        getEmail(): string;
        /**
           Set the email of the Contact

           @param email
           @since ARP1.0
        */
        setEmail(email: string): void;
        /**
           Returns if the email is primary

           @return true if the email is primary; false otherwise
           @since ARP1.0
        */
        getPrimary(): boolean;
        /**
           Set if the email

           @param primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        setPrimary(primary: boolean): void;
    }
    /**
       Represents an instance of a service.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Service {
        /**
           The method used
        */
        method: IServiceMethod;
        /**
           The type of the service
        */
        type: IServiceType;
        /**
           Enpoint of the service
        */
        endpoint: Endpoint;
        /**
           The service name
        */
        name: string;
        /**
           Constructor used by the implementation

           @param endpoint
           @param name
           @param method
           @param type
           @since ARP1.0
        */
        constructor(endpoint: Endpoint, name: string, method: IServiceMethod, type: IServiceType);
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getMethod(): IServiceMethod;
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        setMethod(method: IServiceMethod): void;
        /**
           Returns the type

           @return type
           @since ARP1.0
        */
        getType(): IServiceType;
        /**
           Set the type

           @param type
           @since ARP1.0
        */
        setType(type: IServiceType): void;
        /**
           Returns the endpoint

           @return endpoint
           @since ARP1.0
        */
        getEndpoint(): Endpoint;
        /**
           Set the endpoint

           @param endpoint
           @since ARP1.0
        */
        setEndpoint(endpoint: Endpoint): void;
        /**
           Returns the name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Structure representing the phone data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactPhone {
        /**
           The phone number phoneType
        */
        phoneType: ContactPhoneType;
        /**
           The phone number
        */
        phone: string;
        /**
           Constructor used by implementation to set the contact Phone

           @param phone
           @param phoneType
           @since ARP1.0
        */
        constructor(phone: string, phoneType: ContactPhoneType);
        /**
           Returns the phone phoneType

           @return phoneType
           @since ARP1.0
        */
        getPhoneType(): ContactPhoneType;
        /**
           Set the phoneType of the phone number

           @param phoneType
           @since ARP1.0
        */
        setPhoneType(phoneType: ContactPhoneType): void;
        /**
           Returns the phone number

           @return phone number
           @since ARP1.0
        */
        getPhone(): string;
        /**
           Set the phone number

           @param phone number
           @since ARP1.0
        */
        setPhone(phone: string): void;
    }
    /**
       Structure representing the data a single geolocation reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Geolocation {
        /**
           The current device altitude (or Z coordinate). Measured in meters.
        */
        altitude: number;
        /**
           The Y coordinate (or latitude). Measured in degrees.
        */
        latitude: number;
        /**
           The X coordinate (or longitude). Measured in degrees.
        */
        longitude: number;
        /**
           Dilution of precision on the X measurement. Measured in meters.
        */
        xDoP: number;
        /**
           Dilution of precision on the Y measurement. Measured in meters.
        */
        yDoP: number;
        /**
           Constructor used by the implementation

           @param latitude
           @param longitude
           @param altitude
           @param xDoP
           @param yDoP
           @since ARP1.0
        */
        constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number);
        /**
           Returns altitude in meters

           @return altitude
           @since ARP1.0
        */
        getAltitude(): number;
        /**
           Set altitude in meters

           @param altitude
           @since ARP1.0
        */
        setAltitude(altitude: number): void;
        /**
           Returns the latitude in degrees

           @return latitude
           @since ARP1.0
        */
        getLatitude(): number;
        /**
           Set the latitude in degrees

           @param latitude
           @since ARP1.0
        */
        setLatitude(latitude: number): void;
        /**
           Returns the longitude in degrees

           @return longitude
           @since ARP1.0
        */
        getLongitude(): number;
        /**
           Returns the latitude in degrees

           @param longitude
           @since ARP1.0
        */
        setLongitude(longitude: number): void;
        /**
           Returns the Dilution of Position in the X axis (longitude)

           @return xDoP
           @since ARP1.0
        */
        getXDoP(): number;
        /**
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        setXDoP(xDoP: number): void;
        /**
           Returns the Dilution of Position in the Y axis (latitude)

           @return yDoP
           @since ARP1.0
        */
        getYDoP(): number;
        /**
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        setYDoP(yDoP: number): void;
    }
    /**
       Represents a row for a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Row {
        /**
           The values of the row.
        */
        values: any[];
        /**
           Constructor for implementation using.

           @param values The values of the row
        */
        constructor(values: any[]);
        /**
           Returns the values of the row.

           @return The values of the row.
        */
        getValues(): any[];
        /**
           Sets the values of the row.

           @param values The values of the row.
        */
        setValues(values: any[]): void;
    }
    /**
       Structure representing the internal unique identifier data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactUid {
        /**
           The id of the Contact
        */
        contactId: string;
        /**
           Constructor used by implementation to set the Contact id.

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        constructor(contactId: string);
        /**
           Returns the contact id

           @return Contactid Internal unique contact id.
           @since ARP1.0
        */
        getContactId(): string;
        /**
           Set the id of the Contact

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        setContactId(contactId: string): void;
    }
    /**
       Structure representing the data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Contact extends ContactUid {
        /**
           The adresses from the contact
        */
        contactAddresses: ContactAddress[];
        /**
           The emails from the contact
        */
        contactEmails: ContactEmail[];
        /**
           The phones from the contact
        */
        contactPhones: ContactPhone[];
        /**
           The social network info from the contact
        */
        contactSocials: ContactSocial[];
        /**
           The aditional tags from the contact
        */
        contactTags: ContactTag[];
        /**
           The websites from the contact
        */
        contactWebsites: ContactWebsite[];
        /**
           The personal info from the contact
        */
        personalInfo: ContactPersonalInfo;
        /**
           The professional info from the contact
        */
        professionalInfo: ContactProfessionalInfo;
        /**
           Constructor used by implementation to set the Contact.

           @param contactId of the Contact
           @since ARP1.0
        */
        constructor(contactId: string);
        /**
           Returns all the addresses of the Contact

           @return ContactAddress[]
           @since ARP1.0
        */
        getContactAddresses(): ContactAddress[];
        /**
           Set the addresses of the Contact

           @param contactAddresses
           @since ARP1.0
        */
        setContactAddresses(contactAddresses: ContactAddress[]): void;
        /**
           Returns all the emails of the Contact

           @return ContactEmail[]
           @since ARP1.0
        */
        getContactEmails(): ContactEmail[];
        /**
           Set the emails of the Contact

           @param contactEmails
           @since ARP1.0
        */
        setContactEmails(contactEmails: ContactEmail[]): void;
        /**
           Returns all the phones of the Contact

           @return ContactPhone[]
           @since ARP1.0
        */
        getContactPhones(): ContactPhone[];
        /**
           Set the phones of the Contact

           @param contactPhones
           @since ARP1.0
        */
        setContactPhones(contactPhones: ContactPhone[]): void;
        /**
           Returns all the social network info of the Contact

           @return ContactSocial[]
           @since ARP1.0
        */
        getContactSocials(): ContactSocial[];
        /**
           Set the social network info of the Contact

           @param contactSocials
           @since ARP1.0
        */
        setContactSocials(contactSocials: ContactSocial[]): void;
        /**
           Returns the additional tags of the Contact

           @return ContactTag[]
           @since ARP1.0
        */
        getContactTags(): ContactTag[];
        /**
           Set the additional tags of the Contact

           @param contactTags
           @since ARP1.0
        */
        setContactTags(contactTags: ContactTag[]): void;
        /**
           Returns all the websites of the Contact

           @return ContactWebsite[]
           @since ARP1.0
        */
        getContactWebsites(): ContactWebsite[];
        /**
           Set the websites of the Contact

           @param contactWebsites
           @since ARP1.0
        */
        setContactWebsites(contactWebsites: ContactWebsite[]): void;
        /**
           Returns the personal info of the Contact

           @return ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        getPersonalInfo(): ContactPersonalInfo;
        /**
           Set the personal info of the Contact

           @param personalInfo
           @since ARP1.0
        */
        setPersonalInfo(personalInfo: ContactPersonalInfo): void;
        /**
           Returns the professional info of the Contact

           @return ContactProfessionalInfo[]
           @since ARP1.0
        */
        getProfessionalInfo(): ContactProfessionalInfo;
        /**
           Set the professional info of the Contact

           @param professionalInfo
           @since ARP1.0
        */
        setProfessionalInfo(professionalInfo: ContactProfessionalInfo): void;
    }
    /**
       Enumeration ContactAddressType
    */
    class ContactAddressType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Home: ContactAddressType;
        static Work: ContactAddressType;
        static Other: ContactAddressType;
        static Unknown: ContactAddressType;
    }
    /**
       Enumeration ContactEmailType
    */
    class ContactEmailType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Personal: ContactEmailType;
        static Work: ContactEmailType;
        static Other: ContactEmailType;
        static Unknown: ContactEmailType;
    }
    /**
       Enumeration ContactPersonalInfoTitle
    */
    class ContactPersonalInfoTitle {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mr: ContactPersonalInfoTitle;
        static Mrs: ContactPersonalInfoTitle;
        static Ms: ContactPersonalInfoTitle;
        static Dr: ContactPersonalInfoTitle;
        static Unknown: ContactPersonalInfoTitle;
    }
    /**
       Enumeration ContactPhoneType
    */
    class ContactPhoneType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mobile: ContactPhoneType;
        static Work: ContactPhoneType;
        static Home: ContactPhoneType;
        static Main: ContactPhoneType;
        static HomeFax: ContactPhoneType;
        static WorkFax: ContactPhoneType;
        static Other: ContactPhoneType;
        static Unknown: ContactPhoneType;
    }
    /**
       Enumeration ContactSocialNetwork
    */
    class ContactSocialNetwork {
        value: string;
        constructor(value: string);
        toString(): string;
        static Twitter: ContactSocialNetwork;
        static Facebook: ContactSocialNetwork;
        static GooglePlus: ContactSocialNetwork;
        static LinkedIn: ContactSocialNetwork;
        static Flickr: ContactSocialNetwork;
        static Unknown: ContactSocialNetwork;
    }
    /**
       Enumeration IAccelerationListenerError
    */
    class IAccelerationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Unauthorized: IAccelerationListenerError;
        static Unavailable: IAccelerationListenerError;
        static Unknown: IAccelerationListenerError;
    }
    /**
       Enumeration IAccelerationListenerWarning
    */
    class IAccelerationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static NeedsCalibration: IAccelerationListenerWarning;
        static Stale: IAccelerationListenerWarning;
        static Unknown: IAccelerationListenerWarning;
    }
    /**
       Enumeration IAdaptiveRPGroup
    */
    class IAdaptiveRPGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        static Commerce: IAdaptiveRPGroup;
        static Communication: IAdaptiveRPGroup;
        static Data: IAdaptiveRPGroup;
        static Media: IAdaptiveRPGroup;
        static Notification: IAdaptiveRPGroup;
        static PIM: IAdaptiveRPGroup;
        static Reader: IAdaptiveRPGroup;
        static Security: IAdaptiveRPGroup;
        static Sensor: IAdaptiveRPGroup;
        static Social: IAdaptiveRPGroup;
        static System: IAdaptiveRPGroup;
        static UI: IAdaptiveRPGroup;
        static Util: IAdaptiveRPGroup;
        static Unknown: IAdaptiveRPGroup;
    }
    /**
       Enumeration IAppContextType
    */
    class IAppContextType {
        value: string;
        constructor(value: string);
        toString(): string;
        static iOS: IAppContextType;
        static OSX: IAppContextType;
        static Windows: IAppContextType;
        static WindowsPhone: IAppContextType;
        static Android: IAppContextType;
        static Linux: IAppContextType;
        static Blackberry: IAppContextType;
        static Tizen: IAppContextType;
        static FirefoxOS: IAppContextType;
        static Chromium: IAppContextType;
        static Unspecified: IAppContextType;
        static Unknown: IAppContextType;
    }
    /**
       Enumeration IAppResourceFormat
    */
    class IAppResourceFormat {
        value: string;
        constructor(value: string);
        toString(): string;
        static Raw: IAppResourceFormat;
        static Compressed: IAppResourceFormat;
        static Encrypted: IAppResourceFormat;
        static EncryptedCompressed: IAppResourceFormat;
        static Unknown: IAppResourceFormat;
    }
    /**
       Enumeration IAppResourcePayload
    */
    class IAppResourcePayload {
        value: string;
        constructor(value: string);
        toString(): string;
        static Default: IAppResourcePayload;
        static Embedded: IAppResourcePayload;
        static Linked: IAppResourcePayload;
        static Unknown: IAppResourcePayload;
    }
    /**
       Enumeration IAppResourceType
    */
    class IAppResourceType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Html: IAppResourceType;
        static Css: IAppResourceType;
        static JavaScript: IAppResourceType;
        static Image: IAppResourceType;
        static Video: IAppResourceType;
        static Audio: IAppResourceType;
        static Property: IAppResourceType;
        static Database: IAppResourceType;
        static Other: IAppResourceType;
        static Unknown: IAppResourceType;
    }
    /**
       Enumeration IAppResourceCallbackError
    */
    class IAppResourceCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotFound: IAppResourceCallbackError;
        static NoPermission: IAppResourceCallbackError;
        static Unknown: IAppResourceCallbackError;
    }
    /**
       Enumeration IAppResourceCallbackWarning
    */
    class IAppResourceCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialContent: IAppResourceCallbackWarning;
        static TooLarge: IAppResourceCallbackWarning;
        static LinkedResource: IAppResourceCallbackWarning;
        static Unknown: IAppResourceCallbackWarning;
    }
    /**
       Enumeration IButtonListenerError
    */
    class IButtonListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Present: IButtonListenerError;
        static Unknown: IButtonListenerError;
    }
    /**
       Enumeration IButtonListenerWarning
    */
    class IButtonListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Implemented: IButtonListenerWarning;
        static Unknown: IButtonListenerWarning;
    }
    /**
       Enumeration ICapabilitiesButton
    */
    class ICapabilitiesButton {
        value: string;
        constructor(value: string);
        toString(): string;
        static HomeButton: ICapabilitiesButton;
        static BackButton: ICapabilitiesButton;
        static OptionButton: ICapabilitiesButton;
        static Unknown: ICapabilitiesButton;
    }
    /**
       Enumeration ICapabilitiesCommunication
    */
    class ICapabilitiesCommunication {
        value: string;
        constructor(value: string);
        toString(): string;
        static Calendar: ICapabilitiesCommunication;
        static Contact: ICapabilitiesCommunication;
        static Mail: ICapabilitiesCommunication;
        static Messaging: ICapabilitiesCommunication;
        static Telephony: ICapabilitiesCommunication;
        static Unknown: ICapabilitiesCommunication;
    }
    /**
       Enumeration ICapabilitiesData
    */
    class ICapabilitiesData {
        value: string;
        constructor(value: string);
        toString(): string;
        static Database: ICapabilitiesData;
        static File: ICapabilitiesData;
        static Cloud: ICapabilitiesData;
        static Unknown: ICapabilitiesData;
    }
    /**
       Enumeration ICapabilitiesMedia
    */
    class ICapabilitiesMedia {
        value: string;
        constructor(value: string);
        toString(): string;
        static Audio_Playback: ICapabilitiesMedia;
        static Audio_Recording: ICapabilitiesMedia;
        static Camera: ICapabilitiesMedia;
        static Video_Playback: ICapabilitiesMedia;
        static Video_Recording: ICapabilitiesMedia;
        static Unknown: ICapabilitiesMedia;
    }
    /**
       Enumeration ICapabilitiesNet
    */
    class ICapabilitiesNet {
        value: string;
        constructor(value: string);
        toString(): string;
        static GSM: ICapabilitiesNet;
        static GPRS: ICapabilitiesNet;
        static HSDPA: ICapabilitiesNet;
        static LTE: ICapabilitiesNet;
        static WIFI: ICapabilitiesNet;
        static Ethernet: ICapabilitiesNet;
        static Unavailable: ICapabilitiesNet;
        static Unknown: ICapabilitiesNet;
    }
    /**
       Enumeration ICapabilitiesNotification
    */
    class ICapabilitiesNotification {
        value: string;
        constructor(value: string);
        toString(): string;
        static Alarm: ICapabilitiesNotification;
        static LocalNotification: ICapabilitiesNotification;
        static RemoteNotification: ICapabilitiesNotification;
        static Vibration: ICapabilitiesNotification;
        static Unknown: ICapabilitiesNotification;
    }
    /**
       Enumeration ICapabilitiesSensor
    */
    class ICapabilitiesSensor {
        value: string;
        constructor(value: string);
        toString(): string;
        static Accelerometer: ICapabilitiesSensor;
        static AmbientLight: ICapabilitiesSensor;
        static Barometer: ICapabilitiesSensor;
        static Geolocation: ICapabilitiesSensor;
        static Gyroscope: ICapabilitiesSensor;
        static Magnetometer: ICapabilitiesSensor;
        static Proximity: ICapabilitiesSensor;
        static Unknown: ICapabilitiesSensor;
    }
    /**
       Enumeration IContactFieldGroup
    */
    class IContactFieldGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        static PERSONAL_INFO: IContactFieldGroup;
        static PROFESSIONAL_INFO: IContactFieldGroup;
        static ADDRESSES: IContactFieldGroup;
        static PHONES: IContactFieldGroup;
        static EMAILS: IContactFieldGroup;
        static WEBSITES: IContactFieldGroup;
        static SOCIALS: IContactFieldGroup;
        static TAGS: IContactFieldGroup;
        static Unknown: IContactFieldGroup;
    }
    /**
       Enumeration IContactFilter
    */
    class IContactFilter {
        value: string;
        constructor(value: string);
        toString(): string;
        static HAS_PHONE: IContactFilter;
        static HAS_EMAIL: IContactFilter;
        static HAS_ADDRESS: IContactFilter;
        static Unknown: IContactFilter;
    }
    /**
       Enumeration IContactPhotoResultCallbackError
    */
    class IContactPhotoResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactPhotoResultCallbackError;
        static Wrong_Params: IContactPhotoResultCallbackError;
        static No_Photo: IContactPhotoResultCallbackError;
        static Unknown: IContactPhotoResultCallbackError;
    }
    /**
       Enumeration IContactPhotoResultCallbackWarning
    */
    class IContactPhotoResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactPhotoResultCallbackWarning;
        static No_Matches: IContactPhotoResultCallbackWarning;
        static Unknown: IContactPhotoResultCallbackWarning;
    }
    /**
       Enumeration IContactResultCallbackError
    */
    class IContactResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactResultCallbackError;
        static Wrong_Params: IContactResultCallbackError;
        static Unknown: IContactResultCallbackError;
    }
    /**
       Enumeration IContactResultCallbackWarning
    */
    class IContactResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactResultCallbackWarning;
        static No_Matches: IContactResultCallbackWarning;
        static Unknown: IContactResultCallbackWarning;
    }
    /**
       Enumeration IDatabaseResultCallbackError
    */
    class IDatabaseResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: IDatabaseResultCallbackError;
        static SqlException: IDatabaseResultCallbackError;
        static NotDeleted: IDatabaseResultCallbackError;
        static Unknown: IDatabaseResultCallbackError;
    }
    /**
       Enumeration IDatabaseResultCallbackWarning
    */
    class IDatabaseResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static DatabaseExists: IDatabaseResultCallbackWarning;
        static IsOpen: IDatabaseResultCallbackWarning;
        static Unknown: IDatabaseResultCallbackWarning;
    }
    /**
       Enumeration IFileDataResultCallbackError
    */
    class IFileDataResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileDataResultCallbackError;
        static InsufficientSpace: IFileDataResultCallbackError;
        static Unauthorized: IFileDataResultCallbackError;
        static Unknown: IFileDataResultCallbackError;
    }
    /**
       Enumeration IFileDataResultCallbackWarning
    */
    class IFileDataResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static ExceedMaximumSize: IFileDataResultCallbackWarning;
        static Unknown: IFileDataResultCallbackWarning;
    }
    /**
       Enumeration IFileListResultCallbackError
    */
    class IFileListResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileListResultCallbackError;
        static Unauthorized: IFileListResultCallbackError;
        static Unknown: IFileListResultCallbackError;
    }
    /**
       Enumeration IFileListResultCallbackWarning
    */
    class IFileListResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialResult: IFileListResultCallbackWarning;
        static Unknown: IFileListResultCallbackWarning;
    }
    /**
       Enumeration IFileResultCallbackError
    */
    class IFileResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static FileExists: IFileResultCallbackError;
        static SourceInexistent: IFileResultCallbackError;
        static DestionationExists: IFileResultCallbackError;
        static InsufficientSpace: IFileResultCallbackError;
        static Unauthorized: IFileResultCallbackError;
        static Unknown: IFileResultCallbackError;
    }
    /**
       Enumeration IFileResultCallbackWarning
    */
    class IFileResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static SourceNotDeleted: IFileResultCallbackWarning;
        static RootDirectory: IFileResultCallbackWarning;
        static Unknown: IFileResultCallbackWarning;
    }
    /**
       Enumeration IFileSystemSecurity
    */
    class IFileSystemSecurity {
        value: string;
        constructor(value: string);
        toString(): string;
        static Default: IFileSystemSecurity;
        static Protected: IFileSystemSecurity;
        static Encrypted: IFileSystemSecurity;
        static Unknown: IFileSystemSecurity;
    }
    /**
       Enumeration IFileSystemStorageType
    */
    class IFileSystemStorageType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Application: IFileSystemStorageType;
        static Document: IFileSystemStorageType;
        static Cloud: IFileSystemStorageType;
        static Protected: IFileSystemStorageType;
        static Cache: IFileSystemStorageType;
        static External: IFileSystemStorageType;
        static Unknown: IFileSystemStorageType;
    }
    /**
       Enumeration IFileSystemType
    */
    class IFileSystemType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Directory: IFileSystemType;
        static File: IFileSystemType;
        static Unknown: IFileSystemType;
    }
    /**
       Enumeration IGeolocationListenerError
    */
    class IGeolocationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Disabled: IGeolocationListenerError;
        static RestrictedAccess: IGeolocationListenerError;
        static DeniedAccess: IGeolocationListenerError;
        static StatusNotDetermined: IGeolocationListenerError;
        static Unknown: IGeolocationListenerError;
    }
    /**
       Enumeration IGeolocationListenerWarning
    */
    class IGeolocationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static HighDoP: IGeolocationListenerWarning;
        static StaleData: IGeolocationListenerWarning;
        static Unknown: IGeolocationListenerWarning;
    }
    /**
       Enumeration ILifecycleListenerError
    */
    class ILifecycleListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Runtime: ILifecycleListenerError;
        static Implementation: ILifecycleListenerError;
        static Killed: ILifecycleListenerError;
        static Unknown: ILifecycleListenerError;
    }
    /**
       Enumeration ILifecycleListenerWarning
    */
    class ILifecycleListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static MemoryLow: ILifecycleListenerWarning;
        static BatteryLow: ILifecycleListenerWarning;
        static Unknown: ILifecycleListenerWarning;
    }
    /**
       Enumeration ILoggingLogLevel
    */
    class ILoggingLogLevel {
        value: string;
        constructor(value: string);
        toString(): string;
        static DEBUG: ILoggingLogLevel;
        static WARN: ILoggingLogLevel;
        static ERROR: ILoggingLogLevel;
        static INFO: ILoggingLogLevel;
        static Unknown: ILoggingLogLevel;
    }
    /**
       Enumeration IMessagingCallbackError
    */
    class IMessagingCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static SIMNotPresent: IMessagingCallbackError;
        static EmailAccountNotFound: IMessagingCallbackError;
        static NotSent: IMessagingCallbackError;
        static WrongParams: IMessagingCallbackError;
        static NotSupported: IMessagingCallbackError;
        static Unknown: IMessagingCallbackError;
    }
    /**
       Enumeration IMessagingCallbackWarning
    */
    class IMessagingCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static UnableToSentAll: IMessagingCallbackWarning;
        static UnableToFetchAttachment: IMessagingCallbackWarning;
        static Unknown: IMessagingCallbackWarning;
    }
    /**
       Enumeration INetworkReachabilityCallbackError
    */
    class INetworkReachabilityCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: INetworkReachabilityCallbackError;
        static NotFound: INetworkReachabilityCallbackError;
        static MethodNotAllowed: INetworkReachabilityCallbackError;
        static NotAllowed: INetworkReachabilityCallbackError;
        static NotAuthenticated: INetworkReachabilityCallbackError;
        static TimeOut: INetworkReachabilityCallbackError;
        static NoResponse: INetworkReachabilityCallbackError;
        static Unreachable: INetworkReachabilityCallbackError;
        static Wrong_Params: INetworkReachabilityCallbackError;
        static MalformedUrl: INetworkReachabilityCallbackError;
        static DomainUnresolvable: INetworkReachabilityCallbackError;
        static Unknown: INetworkReachabilityCallbackError;
    }
    /**
       Enumeration INetworkReachabilityCallbackWarning
    */
    class INetworkReachabilityCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static IncorrectScheme: INetworkReachabilityCallbackWarning;
        static NotSecure: INetworkReachabilityCallbackWarning;
        static NotTrusted: INetworkReachabilityCallbackWarning;
        static Redirected: INetworkReachabilityCallbackWarning;
        static NotRegisteredService: INetworkReachabilityCallbackWarning;
        static Unknown: INetworkReachabilityCallbackWarning;
    }
    /**
       Enumeration INetworkStatusListenerError
    */
    class INetworkStatusListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: INetworkStatusListenerError;
        static Unknown: INetworkStatusListenerError;
    }
    /**
       Enumeration INetworkStatusListenerWarning
    */
    class INetworkStatusListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static IpAddressNotAssigned: INetworkStatusListenerWarning;
        static IpAddressChanged: INetworkStatusListenerWarning;
        static Unknown: INetworkStatusListenerWarning;
    }
    /**
       Enumeration ISecureKVResultCallbackError
    */
    class ISecureKVResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: ISecureKVResultCallbackError;
        static NoMatchesFound: ISecureKVResultCallbackError;
        static Unknown: ISecureKVResultCallbackError;
    }
    /**
       Enumeration ISecureKVResultCallbackWarning
    */
    class ISecureKVResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static EntryOverride: ISecureKVResultCallbackWarning;
        static Unknown: ISecureKVResultCallbackWarning;
    }
    /**
       Enumeration IServiceProtocolVersion
    */
    class IServiceProtocolVersion {
        value: string;
        constructor(value: string);
        toString(): string;
        static HTTP_PROTOCOL_VERSION_1_0: IServiceProtocolVersion;
        static HTTP_PROTOCOL_VERSION_1_1: IServiceProtocolVersion;
        static Unknown: IServiceProtocolVersion;
    }
    /**
       Enumeration IServiceMethod
    */
    class IServiceMethod {
        value: string;
        constructor(value: string);
        toString(): string;
        static POST: IServiceMethod;
        static GET: IServiceMethod;
        static Unknown: IServiceMethod;
    }
    /**
       Enumeration IServiceType
    */
    class IServiceType {
        value: string;
        constructor(value: string);
        toString(): string;
        static SERVICETYPE_AMF_SERIALIZATION: IServiceType;
        static SERVICETYPE_GWT_RPC: IServiceType;
        static SERVICETYPE_OCTET_BINARY: IServiceType;
        static SERVICETYPE_REMOTING_SERIALIZATION: IServiceType;
        static SERVICETYPE_REST_JSON: IServiceType;
        static SERVICETYPE_REST_XML: IServiceType;
        static SERVICETYPE_SOAP_JSON: IServiceType;
        static SERVICETYPE_SOAP_XML: IServiceType;
        static SERVICETYPE_XMLRPC_JSON: IServiceType;
        static SERVICETYPE_XMLRPC_XML: IServiceType;
        static Unknown: IServiceType;
    }
    /**
       Enumeration IServiceResultCallbackError
    */
    class IServiceResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: IServiceResultCallbackError;
        static NotFound: IServiceResultCallbackError;
        static MethodNotAllowed: IServiceResultCallbackError;
        static NotAllowed: IServiceResultCallbackError;
        static NotAuthenticated: IServiceResultCallbackError;
        static TimeOut: IServiceResultCallbackError;
        static NoResponse: IServiceResultCallbackError;
        static ServerError: IServiceResultCallbackError;
        static Unreachable: IServiceResultCallbackError;
        static MalformedUrl: IServiceResultCallbackError;
        static NotRegisteredService: IServiceResultCallbackError;
        static Unknown: IServiceResultCallbackError;
    }
    /**
       Enumeration IServiceResultCallbackWarning
    */
    class IServiceResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotSecure: IServiceResultCallbackWarning;
        static NotTrusted: IServiceResultCallbackWarning;
        static Redirected: IServiceResultCallbackWarning;
        static Wrong_Params: IServiceResultCallbackWarning;
        static Unknown: IServiceResultCallbackWarning;
    }
    /**
       Enumeration ITableResultCallbackError
    */
    class ITableResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: ITableResultCallbackError;
        static ReadOnlyTable: ITableResultCallbackError;
        static SqlException: ITableResultCallbackError;
        static DatabaseNotFound: ITableResultCallbackError;
        static NoTableFound: ITableResultCallbackError;
        static Unknown: ITableResultCallbackError;
    }
    /**
       Enumeration ITableResultCallbackWarning
    */
    class ITableResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static TableExists: ITableResultCallbackWarning;
        static TableLocked: ITableResultCallbackWarning;
        static NoResults: ITableResultCallbackWarning;
        static Unknown: ITableResultCallbackWarning;
    }
    /**
       Enumeration ITelephonyStatus
    */
    class ITelephonyStatus {
        value: string;
        constructor(value: string);
        toString(): string;
        static Dialing: ITelephonyStatus;
        static Failed: ITelephonyStatus;
        static Unknown: ITelephonyStatus;
    }
    /**
       Enumeration LifecycleState
    */
    class LifecycleState {
        value: string;
        constructor(value: string);
        toString(): string;
        static Starting: LifecycleState;
        static Started: LifecycleState;
        static Running: LifecycleState;
        static Pausing: LifecycleState;
        static PausedIdle: LifecycleState;
        static PausedRun: LifecycleState;
        static Resuming: LifecycleState;
        static Stopping: LifecycleState;
        static Unknown: LifecycleState;
    }
    /**
       Utility class of type Map
    */
    /** Dictionary Definition **/
    interface IDictionary<V> {
        add(key: string, value: V): void;
        remove(key: string): void;
        containsKey(key: string): boolean;
        keys(): string[];
        values(): V[];
    }
    class Dictionary<V> implements IDictionary<V> {
        _keys: string[];
        _values: V[];
        constructor(init: {
            key: string;
            value: V;
        }[]);
        add(key: string, value: V): void;
        remove(key: string): void;
        keys(): string[];
        values(): V[];
        containsKey(key: string): boolean;
        toLookup(): IDictionary<V>;
    }
}
