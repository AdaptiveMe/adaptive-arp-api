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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Interface to retrieve auto-registered service implementation references.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     public interface IAppRegistry {
          /**
             Returns a reference to the registered AccelerationHandler.

             @return AccelerationHandler reference or null if a handler of this type is not registered.
          */
          IAcceleration GetAccelerationHandler();

          /**
             Returns a reference to the registered AdsHandler.

             @return AdsHandler reference or null if a handler of this type is not registered.
          */
          IAds GetAdsHandler();

          /**
             Returns a reference to the registered AlarmHandler.

             @return AlarmHandler reference or null if a handler of this type is not registered.
          */
          IAlarm GetAlarmHandler();

          /**
             Returns a reference to the registered AmbientLightHandler.

             @return AmbientLightHandler reference or null if a handler of this type is not registered.
          */
          IAmbientLight GetAmbientLightHandler();

          /**
             Returns a reference to the registered AnalyticsHandler.

             @return AnalyticsHandler reference or null if a handler of this type is not registered.
          */
          IAnalytics GetAnalyticsHandler();

          /**
             Returns a reference to the registered AudioHandler.

             @return AudioHandler reference or null if a handler of this type is not registered.
          */
          IAudio GetAudioHandler();

          /**
             Returns a reference to the registered BarcodeHandler.

             @return BarcodeHandler reference or null if a handler of this type is not registered.
          */
          IBarcode GetBarcodeHandler();

          /**
             Returns a reference to the registered BarometerHandler.

             @return BarometerHandler reference or null if a handler of this type is not registered.
          */
          IBarometer GetBarometerHandler();

          /**
             Returns a reference to the registered BluetoothHandler.

             @return BluetoothHandler reference or null if a handler of this type is not registered.
          */
          IBluetooth GetBluetoothHandler();

          /**
             Returns a reference to the registered BrowserHandler.

             @return BrowserHandler reference or null if a handler of this type is not registered.
          */
          IBrowser GetBrowserHandler();

          /**
             Returns a reference to the registered CalendarHandler.

             @return CalendarHandler reference or null if a handler of this type is not registered.
          */
          ICalendar GetCalendarHandler();

          /**
             Returns a reference to the registered CameraHandler.

             @return CameraHandler reference or null if a handler of this type is not registered.
          */
          ICamera GetCameraHandler();

          /**
             Returns a reference to the registered CapabilitiesHandler.

             @return CapabilitiesHandler reference or null if a handler of this type is not registered.
          */
          ICapabilities GetCapabilitiesHandler();

          /**
             Returns a reference to the registered CloudHandler.

             @return CloudHandler reference or null if a handler of this type is not registered.
          */
          ICloud GetCloudHandler();

          /**
             Returns a reference to the registered CompressionHandler.

             @return CompressionHandler reference or null if a handler of this type is not registered.
          */
          ICompression GetCompressionHandler();

          /**
             Returns a reference to the registered ConcurrentHandler.

             @return ConcurrentHandler reference or null if a handler of this type is not registered.
          */
          IConcurrent GetConcurrentHandler();

          /**
             Returns a reference to the registered ContactHandler.

             @return ContactHandler reference or null if a handler of this type is not registered.
          */
          IContact GetContactHandler();

          /**
             Returns a reference to the registered CryptoHandler.

             @return CryptoHandler reference or null if a handler of this type is not registered.
          */
          ICrypto GetCryptoHandler();

          /**
             Returns a reference to the registered DataStreamHandler.

             @return DataStreamHandler reference or null if a handler of this type is not registered.
          */
          IDataStream GetDataStreamHandler();

          /**
             Returns a reference to the registered DatabaseHandler.

             @return DatabaseHandler reference or null if a handler of this type is not registered.
          */
          IDatabase GetDatabaseHandler();

          /**
             Returns a reference to the registered DesktopHandler.

             @return DesktopHandler reference or null if a handler of this type is not registered.
          */
          IDesktop GetDesktopHandler();

          /**
             Returns a reference to the registered DeviceHandler.

             @return DeviceHandler reference or null if a handler of this type is not registered.
          */
          IDevice GetDeviceHandler();

          /**
             Returns a reference to the registered DisplayHandler.

             @return DisplayHandler reference or null if a handler of this type is not registered.
          */
          IDisplay GetDisplayHandler();

          /**
             Returns a reference to the registered FacebookHandler.

             @return FacebookHandler reference or null if a handler of this type is not registered.
          */
          IFacebook GetFacebookHandler();

          /**
             Returns a reference to the registered FileSystemHandler.

             @return FileSystemHandler reference or null if a handler of this type is not registered.
          */
          IFileSystem GetFileSystemHandler();

          /**
             Returns a reference to the registered GeolocationHandler.

             @return GeolocationHandler reference or null if a handler of this type is not registered.
          */
          IGeolocation GetGeolocationHandler();

          /**
             Returns a reference to the registered GlobalizationHandler.

             @return GlobalizationHandler reference or null if a handler of this type is not registered.
          */
          IGlobalization GetGlobalizationHandler();

          /**
             Returns a reference to the registered GooglePlusHandler.

             @return GooglePlusHandler reference or null if a handler of this type is not registered.
          */
          IGooglePlus GetGooglePlusHandler();

          /**
             Returns a reference to the registered GyroscopeHandler.

             @return GyroscopeHandler reference or null if a handler of this type is not registered.
          */
          IGyroscope GetGyroscopeHandler();

          /**
             Returns a reference to the registered ImagingHandler.

             @return ImagingHandler reference or null if a handler of this type is not registered.
          */
          IImaging GetImagingHandler();

          /**
             Returns a reference to the registered InternalStorageHandler.

             @return InternalStorageHandler reference or null if a handler of this type is not registered.
          */
          IInternalStorage GetInternalStorageHandler();

          /**
             Returns a reference to the registered LifecycleHandler.

             @return LifecycleHandler reference or null if a handler of this type is not registered.
          */
          ILifecycle GetLifecycleHandler();

          /**
             Returns a reference to the registered LinkedInHandler.

             @return LinkedInHandler reference or null if a handler of this type is not registered.
          */
          ILinkedIn GetLinkedInHandler();

          /**
             Returns a reference to the registered LoggingHandler.

             @return LoggingHandler reference or null if a handler of this type is not registered.
          */
          ILogging GetLoggingHandler();

          /**
             Returns a reference to the registered MagnetometerHandler.

             @return MagnetometerHandler reference or null if a handler of this type is not registered.
          */
          IMagnetometer GetMagnetometerHandler();

          /**
             Returns a reference to the registered MailHandler.

             @return MailHandler reference or null if a handler of this type is not registered.
          */
          IMail GetMailHandler();

          /**
             Returns a reference to the registered ManagementHandler.

             @return ManagementHandler reference or null if a handler of this type is not registered.
          */
          IManagement GetManagementHandler();

          /**
             Returns a reference to the registered MapHandler.

             @return MapHandler reference or null if a handler of this type is not registered.
          */
          IMap GetMapHandler();

          /**
             Returns a reference to the registered MessagingHandler.

             @return MessagingHandler reference or null if a handler of this type is not registered.
          */
          IMessaging GetMessagingHandler();

          /**
             Returns a reference to the registered NFCHandler.

             @return NFCHandler reference or null if a handler of this type is not registered.
          */
          INFC GetNFCHandler();

          /**
             Returns a reference to the registered NetworkInfoHandler.

             @return NetworkInfoHandler reference or null if a handler of this type is not registered.
          */
          INetworkInfo GetNetworkInfoHandler();

          /**
             Returns a reference to the registered NetworkNamingHandler.

             @return NetworkNamingHandler reference or null if a handler of this type is not registered.
          */
          INetworkNaming GetNetworkNamingHandler();

          /**
             Returns a reference to the registered NetworkReachabilityHandler.

             @return NetworkReachabilityHandler reference or null if a handler of this type is not registered.
          */
          INetworkReachability GetNetworkReachabilityHandler();

          /**
             Returns a reference to the registered NetworkStatusHandler.

             @return NetworkStatusHandler reference or null if a handler of this type is not registered.
          */
          INetworkStatus GetNetworkStatusHandler();

          /**
             Returns a reference to the registered NotificationHandler.

             @return NotificationHandler reference or null if a handler of this type is not registered.
          */
          INotification GetNotificationHandler();

          /**
             Returns a reference to the registered NotificationLocalHandler.

             @return NotificationLocalHandler reference or null if a handler of this type is not registered.
          */
          INotificationLocal GetNotificationLocalHandler();

          /**
             Returns a reference to the registered OAuthHandler.

             @return OAuthHandler reference or null if a handler of this type is not registered.
          */
          IOAuth GetOAuthHandler();

          /**
             Returns a reference to the registered OCRHandler.

             @return OCRHandler reference or null if a handler of this type is not registered.
          */
          IOCR GetOCRHandler();

          /**
             Returns a reference to the registered OSHandler.

             @return OSHandler reference or null if a handler of this type is not registered.
          */
          IOS GetOSHandler();

          /**
             Returns a reference to the registered OpenIdHandler.

             @return OpenIdHandler reference or null if a handler of this type is not registered.
          */
          IOpenId GetOpenIdHandler();

          /**
             Returns a reference to the registered PrintingHandler.

             @return PrintingHandler reference or null if a handler of this type is not registered.
          */
          IPrinting GetPrintingHandler();

          /**
             Returns a reference to the registered ProximityHandler.

             @return ProximityHandler reference or null if a handler of this type is not registered.
          */
          IProximity GetProximityHandler();

          /**
             Returns a reference to the registered QRCodeHandler.

             @return QRCodeHandler reference or null if a handler of this type is not registered.
          */
          IQRCode GetQRCodeHandler();

          /**
             Returns a reference to the registered RSSHandler.

             @return RSSHandler reference or null if a handler of this type is not registered.
          */
          IRSS GetRSSHandler();

          /**
             Returns a reference to the registered RuntimeHandler.

             @return RuntimeHandler reference or null if a handler of this type is not registered.
          */
          IRuntime GetRuntimeHandler();

          /**
             Returns a reference to the registered SecurityHandler.

             @return SecurityHandler reference or null if a handler of this type is not registered.
          */
          ISecurity GetSecurityHandler();

          /**
             Returns a reference to the registered ServiceHandler.

             @return ServiceHandler reference or null if a handler of this type is not registered.
          */
          IService GetServiceHandler();

          /**
             Returns a reference to the registered SettingsHandler.

             @return SettingsHandler reference or null if a handler of this type is not registered.
          */
          ISettings GetSettingsHandler();

          /**
             Returns a reference to the registered SocketHandler.

             @return SocketHandler reference or null if a handler of this type is not registered.
          */
          ISocket GetSocketHandler();

          /**
             Returns a reference to the registered StoreHandler.

             @return StoreHandler reference or null if a handler of this type is not registered.
          */
          IStore GetStoreHandler();

          /**
             Returns a reference to the registered TelephonyHandler.

             @return TelephonyHandler reference or null if a handler of this type is not registered.
          */
          ITelephony GetTelephonyHandler();

          /**
             Returns a reference to the registered TimerHandler.

             @return TimerHandler reference or null if a handler of this type is not registered.
          */
          ITimer GetTimerHandler();

          /**
             Returns a reference to the registered TwitterHandler.

             @return TwitterHandler reference or null if a handler of this type is not registered.
          */
          ITwitter GetTwitterHandler();

          /**
             Returns a reference to the registered UIHandler.

             @return UIHandler reference or null if a handler of this type is not registered.
          */
          IUI GetUIHandler();

          /**
             Returns a reference to the registered UpdateHandler.

             @return UpdateHandler reference or null if a handler of this type is not registered.
          */
          IUpdate GetUpdateHandler();

          /**
             Returns a reference to the registered VibrationHandler.

             @return VibrationHandler reference or null if a handler of this type is not registered.
          */
          IVibration GetVibrationHandler();

          /**
             Returns a reference to the registered VideoHandler.

             @return VideoHandler reference or null if a handler of this type is not registered.
          */
          IVideo GetVideoHandler();

          /**
             Returns a reference to the registered WalletHandler.

             @return WalletHandler reference or null if a handler of this type is not registered.
          */
          IWallet GetWalletHandler();

          /**
             Returns a reference to the registered XMLHandler.

             @return XMLHandler reference or null if a handler of this type is not registered.
          */
          IXML GetXMLHandler();

          /**
             Returns a reference to the Platform Context
             @return Reference to the platform context
             @since ARP1.0
          */
          IAppContext GetPlatformContext();

          /**
             Returns a reference to the Webview platform context
             @return Reference to the Webview Context
             @since ARP1.0
          */
          IAppContextWebview GetPlatformContextWeb();

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
