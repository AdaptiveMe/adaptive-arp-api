/// <reference path="IAcceleration.d.ts" />
/// <reference path="IAds.d.ts" />
/// <reference path="IAlarm.d.ts" />
/// <reference path="IAmbientLight.d.ts" />
/// <reference path="IAnalytics.d.ts" />
/// <reference path="IAppContext.d.ts" />
/// <reference path="IAppContextWebview.d.ts" />
/// <reference path="IAudio.d.ts" />
/// <reference path="IBarcode.d.ts" />
/// <reference path="IBarometer.d.ts" />
/// <reference path="IBluetooth.d.ts" />
/// <reference path="IBrowser.d.ts" />
/// <reference path="ICalendar.d.ts" />
/// <reference path="ICamera.d.ts" />
/// <reference path="ICapabilities.d.ts" />
/// <reference path="ICloud.d.ts" />
/// <reference path="ICompression.d.ts" />
/// <reference path="IConcurrent.d.ts" />
/// <reference path="IContact.d.ts" />
/// <reference path="ICrypto.d.ts" />
/// <reference path="IDataStream.d.ts" />
/// <reference path="IDatabase.d.ts" />
/// <reference path="IDesktop.d.ts" />
/// <reference path="IDevice.d.ts" />
/// <reference path="IDisplay.d.ts" />
/// <reference path="IFacebook.d.ts" />
/// <reference path="IFileSystem.d.ts" />
/// <reference path="IGeolocation.d.ts" />
/// <reference path="IGlobalization.d.ts" />
/// <reference path="IGooglePlus.d.ts" />
/// <reference path="IGyroscope.d.ts" />
/// <reference path="IImaging.d.ts" />
/// <reference path="IInternalStorage.d.ts" />
/// <reference path="ILifecycle.d.ts" />
/// <reference path="ILinkedIn.d.ts" />
/// <reference path="ILogging.d.ts" />
/// <reference path="IMagnetometer.d.ts" />
/// <reference path="IMail.d.ts" />
/// <reference path="IManagement.d.ts" />
/// <reference path="IMap.d.ts" />
/// <reference path="IMessaging.d.ts" />
/// <reference path="INFC.d.ts" />
/// <reference path="INetworkInfo.d.ts" />
/// <reference path="INetworkNaming.d.ts" />
/// <reference path="INetworkReachability.d.ts" />
/// <reference path="INetworkStatus.d.ts" />
/// <reference path="INotification.d.ts" />
/// <reference path="INotificationLocal.d.ts" />
/// <reference path="IOAuth.d.ts" />
/// <reference path="IOCR.d.ts" />
/// <reference path="IOS.d.ts" />
/// <reference path="IOpenId.d.ts" />
/// <reference path="IPrinting.d.ts" />
/// <reference path="IProximity.d.ts" />
/// <reference path="IQRCode.d.ts" />
/// <reference path="IRSS.d.ts" />
/// <reference path="IRuntime.d.ts" />
/// <reference path="ISecurity.d.ts" />
/// <reference path="IService.d.ts" />
/// <reference path="ISettings.d.ts" />
/// <reference path="ISocket.d.ts" />
/// <reference path="IStore.d.ts" />
/// <reference path="ITelephony.d.ts" />
/// <reference path="ITimer.d.ts" />
/// <reference path="ITwitter.d.ts" />
/// <reference path="IUI.d.ts" />
/// <reference path="IUpdate.d.ts" />
/// <reference path="IVibration.d.ts" />
/// <reference path="IVideo.d.ts" />
/// <reference path="IWallet.d.ts" />
/// <reference path="IXML.d.ts" />
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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Interface to retrieve auto-registered service implementation references.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    interface IAppRegistry {
        /**
           Returns a reference to the registered AccelerationHandler.

           @return AccelerationHandler reference or null if a handler of this type is not registered.
        */
        getAccelerationHandler(): IAcceleration;
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
           Returns a reference to the Platform Context
           @return Reference to the platform context
           @since ARP1.0
        */
        getPlatformContext(): IAppContext;
        /**
           Returns a reference to the Webview platform context
           @return Reference to the Webview Context
           @since ARP1.0
        */
        getPlatformContextWeb(): IAppContextWebview;
    }
}
