/// <reference path="IAcceleration.d.ts" />
/// <reference path="IAds.d.ts" />
/// <reference path="IAlarm.d.ts" />
/// <reference path="IAmbientLight.d.ts" />
/// <reference path="IAnalytics.d.ts" />
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
/// <reference path="IFile.d.ts" />
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

Release:

    * @version v2.0.3

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
           Returns a reference to the registered AccelerationBridge.

           @return AccelerationBridge reference or null if a bridge of this type is not registered.
        */
        getAccelerationBridge(): IAcceleration;
        /**
           Returns a reference to the registered AdsBridge.

           @return AdsBridge reference or null if a bridge of this type is not registered.
        */
        getAdsBridge(): IAds;
        /**
           Returns a reference to the registered AlarmBridge.

           @return AlarmBridge reference or null if a bridge of this type is not registered.
        */
        getAlarmBridge(): IAlarm;
        /**
           Returns a reference to the registered AmbientLightBridge.

           @return AmbientLightBridge reference or null if a bridge of this type is not registered.
        */
        getAmbientLightBridge(): IAmbientLight;
        /**
           Returns a reference to the registered AnalyticsBridge.

           @return AnalyticsBridge reference or null if a bridge of this type is not registered.
        */
        getAnalyticsBridge(): IAnalytics;
        /**
           Returns a reference to the registered AudioBridge.

           @return AudioBridge reference or null if a bridge of this type is not registered.
        */
        getAudioBridge(): IAudio;
        /**
           Returns a reference to the registered BarcodeBridge.

           @return BarcodeBridge reference or null if a bridge of this type is not registered.
        */
        getBarcodeBridge(): IBarcode;
        /**
           Returns a reference to the registered BarometerBridge.

           @return BarometerBridge reference or null if a bridge of this type is not registered.
        */
        getBarometerBridge(): IBarometer;
        /**
           Returns a reference to the registered BluetoothBridge.

           @return BluetoothBridge reference or null if a bridge of this type is not registered.
        */
        getBluetoothBridge(): IBluetooth;
        /**
           Returns a reference to the registered BrowserBridge.

           @return BrowserBridge reference or null if a bridge of this type is not registered.
        */
        getBrowserBridge(): IBrowser;
        /**
           Returns a reference to the registered CalendarBridge.

           @return CalendarBridge reference or null if a bridge of this type is not registered.
        */
        getCalendarBridge(): ICalendar;
        /**
           Returns a reference to the registered CameraBridge.

           @return CameraBridge reference or null if a bridge of this type is not registered.
        */
        getCameraBridge(): ICamera;
        /**
           Returns a reference to the registered CapabilitiesBridge.

           @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
        */
        getCapabilitiesBridge(): ICapabilities;
        /**
           Returns a reference to the registered CloudBridge.

           @return CloudBridge reference or null if a bridge of this type is not registered.
        */
        getCloudBridge(): ICloud;
        /**
           Returns a reference to the registered CompressionBridge.

           @return CompressionBridge reference or null if a bridge of this type is not registered.
        */
        getCompressionBridge(): ICompression;
        /**
           Returns a reference to the registered ConcurrentBridge.

           @return ConcurrentBridge reference or null if a bridge of this type is not registered.
        */
        getConcurrentBridge(): IConcurrent;
        /**
           Returns a reference to the registered ContactBridge.

           @return ContactBridge reference or null if a bridge of this type is not registered.
        */
        getContactBridge(): IContact;
        /**
           Returns a reference to the registered CryptoBridge.

           @return CryptoBridge reference or null if a bridge of this type is not registered.
        */
        getCryptoBridge(): ICrypto;
        /**
           Returns a reference to the registered DataStreamBridge.

           @return DataStreamBridge reference or null if a bridge of this type is not registered.
        */
        getDataStreamBridge(): IDataStream;
        /**
           Returns a reference to the registered DatabaseBridge.

           @return DatabaseBridge reference or null if a bridge of this type is not registered.
        */
        getDatabaseBridge(): IDatabase;
        /**
           Returns a reference to the registered DesktopBridge.

           @return DesktopBridge reference or null if a bridge of this type is not registered.
        */
        getDesktopBridge(): IDesktop;
        /**
           Returns a reference to the registered DeviceBridge.

           @return DeviceBridge reference or null if a bridge of this type is not registered.
        */
        getDeviceBridge(): IDevice;
        /**
           Returns a reference to the registered DisplayBridge.

           @return DisplayBridge reference or null if a bridge of this type is not registered.
        */
        getDisplayBridge(): IDisplay;
        /**
           Returns a reference to the registered FacebookBridge.

           @return FacebookBridge reference or null if a bridge of this type is not registered.
        */
        getFacebookBridge(): IFacebook;
        /**
           Returns a reference to the registered FileBridge.

           @return FileBridge reference or null if a bridge of this type is not registered.
        */
        getFileBridge(): IFile;
        /**
           Returns a reference to the registered FileSystemBridge.

           @return FileSystemBridge reference or null if a bridge of this type is not registered.
        */
        getFileSystemBridge(): IFileSystem;
        /**
           Returns a reference to the registered GeolocationBridge.

           @return GeolocationBridge reference or null if a bridge of this type is not registered.
        */
        getGeolocationBridge(): IGeolocation;
        /**
           Returns a reference to the registered GlobalizationBridge.

           @return GlobalizationBridge reference or null if a bridge of this type is not registered.
        */
        getGlobalizationBridge(): IGlobalization;
        /**
           Returns a reference to the registered GooglePlusBridge.

           @return GooglePlusBridge reference or null if a bridge of this type is not registered.
        */
        getGooglePlusBridge(): IGooglePlus;
        /**
           Returns a reference to the registered GyroscopeBridge.

           @return GyroscopeBridge reference or null if a bridge of this type is not registered.
        */
        getGyroscopeBridge(): IGyroscope;
        /**
           Returns a reference to the registered ImagingBridge.

           @return ImagingBridge reference or null if a bridge of this type is not registered.
        */
        getImagingBridge(): IImaging;
        /**
           Returns a reference to the registered InternalStorageBridge.

           @return InternalStorageBridge reference or null if a bridge of this type is not registered.
        */
        getInternalStorageBridge(): IInternalStorage;
        /**
           Returns a reference to the registered LifecycleBridge.

           @return LifecycleBridge reference or null if a bridge of this type is not registered.
        */
        getLifecycleBridge(): ILifecycle;
        /**
           Returns a reference to the registered LinkedInBridge.

           @return LinkedInBridge reference or null if a bridge of this type is not registered.
        */
        getLinkedInBridge(): ILinkedIn;
        /**
           Returns a reference to the registered LoggingBridge.

           @return LoggingBridge reference or null if a bridge of this type is not registered.
        */
        getLoggingBridge(): ILogging;
        /**
           Returns a reference to the registered MagnetometerBridge.

           @return MagnetometerBridge reference or null if a bridge of this type is not registered.
        */
        getMagnetometerBridge(): IMagnetometer;
        /**
           Returns a reference to the registered MailBridge.

           @return MailBridge reference or null if a bridge of this type is not registered.
        */
        getMailBridge(): IMail;
        /**
           Returns a reference to the registered ManagementBridge.

           @return ManagementBridge reference or null if a bridge of this type is not registered.
        */
        getManagementBridge(): IManagement;
        /**
           Returns a reference to the registered MapBridge.

           @return MapBridge reference or null if a bridge of this type is not registered.
        */
        getMapBridge(): IMap;
        /**
           Returns a reference to the registered MessagingBridge.

           @return MessagingBridge reference or null if a bridge of this type is not registered.
        */
        getMessagingBridge(): IMessaging;
        /**
           Returns a reference to the registered NFCBridge.

           @return NFCBridge reference or null if a bridge of this type is not registered.
        */
        getNFCBridge(): INFC;
        /**
           Returns a reference to the registered NetworkInfoBridge.

           @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
        */
        getNetworkInfoBridge(): INetworkInfo;
        /**
           Returns a reference to the registered NetworkNamingBridge.

           @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
        */
        getNetworkNamingBridge(): INetworkNaming;
        /**
           Returns a reference to the registered NetworkReachabilityBridge.

           @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
        */
        getNetworkReachabilityBridge(): INetworkReachability;
        /**
           Returns a reference to the registered NetworkStatusBridge.

           @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
        */
        getNetworkStatusBridge(): INetworkStatus;
        /**
           Returns a reference to the registered NotificationBridge.

           @return NotificationBridge reference or null if a bridge of this type is not registered.
        */
        getNotificationBridge(): INotification;
        /**
           Returns a reference to the registered NotificationLocalBridge.

           @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
        */
        getNotificationLocalBridge(): INotificationLocal;
        /**
           Returns a reference to the registered OAuthBridge.

           @return OAuthBridge reference or null if a bridge of this type is not registered.
        */
        getOAuthBridge(): IOAuth;
        /**
           Returns a reference to the registered OCRBridge.

           @return OCRBridge reference or null if a bridge of this type is not registered.
        */
        getOCRBridge(): IOCR;
        /**
           Returns a reference to the registered OSBridge.

           @return OSBridge reference or null if a bridge of this type is not registered.
        */
        getOSBridge(): IOS;
        /**
           Returns a reference to the registered OpenIdBridge.

           @return OpenIdBridge reference or null if a bridge of this type is not registered.
        */
        getOpenIdBridge(): IOpenId;
        /**
           Returns a reference to the registered PrintingBridge.

           @return PrintingBridge reference or null if a bridge of this type is not registered.
        */
        getPrintingBridge(): IPrinting;
        /**
           Returns a reference to the registered ProximityBridge.

           @return ProximityBridge reference or null if a bridge of this type is not registered.
        */
        getProximityBridge(): IProximity;
        /**
           Returns a reference to the registered QRCodeBridge.

           @return QRCodeBridge reference or null if a bridge of this type is not registered.
        */
        getQRCodeBridge(): IQRCode;
        /**
           Returns a reference to the registered RSSBridge.

           @return RSSBridge reference or null if a bridge of this type is not registered.
        */
        getRSSBridge(): IRSS;
        /**
           Returns a reference to the registered RuntimeBridge.

           @return RuntimeBridge reference or null if a bridge of this type is not registered.
        */
        getRuntimeBridge(): IRuntime;
        /**
           Returns a reference to the registered SecurityBridge.

           @return SecurityBridge reference or null if a bridge of this type is not registered.
        */
        getSecurityBridge(): ISecurity;
        /**
           Returns a reference to the registered ServiceBridge.

           @return ServiceBridge reference or null if a bridge of this type is not registered.
        */
        getServiceBridge(): IService;
        /**
           Returns a reference to the registered SettingsBridge.

           @return SettingsBridge reference or null if a bridge of this type is not registered.
        */
        getSettingsBridge(): ISettings;
        /**
           Returns a reference to the registered SocketBridge.

           @return SocketBridge reference or null if a bridge of this type is not registered.
        */
        getSocketBridge(): ISocket;
        /**
           Returns a reference to the registered StoreBridge.

           @return StoreBridge reference or null if a bridge of this type is not registered.
        */
        getStoreBridge(): IStore;
        /**
           Returns a reference to the registered TelephonyBridge.

           @return TelephonyBridge reference or null if a bridge of this type is not registered.
        */
        getTelephonyBridge(): ITelephony;
        /**
           Returns a reference to the registered TimerBridge.

           @return TimerBridge reference or null if a bridge of this type is not registered.
        */
        getTimerBridge(): ITimer;
        /**
           Returns a reference to the registered TwitterBridge.

           @return TwitterBridge reference or null if a bridge of this type is not registered.
        */
        getTwitterBridge(): ITwitter;
        /**
           Returns a reference to the registered UIBridge.

           @return UIBridge reference or null if a bridge of this type is not registered.
        */
        getUIBridge(): IUI;
        /**
           Returns a reference to the registered UpdateBridge.

           @return UpdateBridge reference or null if a bridge of this type is not registered.
        */
        getUpdateBridge(): IUpdate;
        /**
           Returns a reference to the registered VibrationBridge.

           @return VibrationBridge reference or null if a bridge of this type is not registered.
        */
        getVibrationBridge(): IVibration;
        /**
           Returns a reference to the registered VideoBridge.

           @return VideoBridge reference or null if a bridge of this type is not registered.
        */
        getVideoBridge(): IVideo;
        /**
           Returns a reference to the registered WalletBridge.

           @return WalletBridge reference or null if a bridge of this type is not registered.
        */
        getWalletBridge(): IWallet;
        /**
           Returns a reference to the registered XMLBridge.

           @return XMLBridge reference or null if a bridge of this type is not registered.
        */
        getXMLBridge(): IXML;
        /**
           Return the API version for the given interface.
        */
        getAPIVersion(): string;
    }
}
