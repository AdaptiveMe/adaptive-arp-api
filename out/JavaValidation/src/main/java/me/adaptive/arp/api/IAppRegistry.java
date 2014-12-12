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

package me.adaptive.arp.api;

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
     IAcceleration getAccelerationHandler();

     /**
        Returns a reference to the registered AdsHandler.

        @return AdsHandler reference or null if a handler of this type is not registered.
     */
     IAds getAdsHandler();

     /**
        Returns a reference to the registered AlarmHandler.

        @return AlarmHandler reference or null if a handler of this type is not registered.
     */
     IAlarm getAlarmHandler();

     /**
        Returns a reference to the registered AmbientLightHandler.

        @return AmbientLightHandler reference or null if a handler of this type is not registered.
     */
     IAmbientLight getAmbientLightHandler();

     /**
        Returns a reference to the registered AnalyticsHandler.

        @return AnalyticsHandler reference or null if a handler of this type is not registered.
     */
     IAnalytics getAnalyticsHandler();

     /**
        Returns a reference to the registered AudioHandler.

        @return AudioHandler reference or null if a handler of this type is not registered.
     */
     IAudio getAudioHandler();

     /**
        Returns a reference to the registered BarcodeHandler.

        @return BarcodeHandler reference or null if a handler of this type is not registered.
     */
     IBarcode getBarcodeHandler();

     /**
        Returns a reference to the registered BarometerHandler.

        @return BarometerHandler reference or null if a handler of this type is not registered.
     */
     IBarometer getBarometerHandler();

     /**
        Returns a reference to the registered BluetoothHandler.

        @return BluetoothHandler reference or null if a handler of this type is not registered.
     */
     IBluetooth getBluetoothHandler();

     /**
        Returns a reference to the registered BrowserHandler.

        @return BrowserHandler reference or null if a handler of this type is not registered.
     */
     IBrowser getBrowserHandler();

     /**
        Returns a reference to the registered CalendarHandler.

        @return CalendarHandler reference or null if a handler of this type is not registered.
     */
     ICalendar getCalendarHandler();

     /**
        Returns a reference to the registered CameraHandler.

        @return CameraHandler reference or null if a handler of this type is not registered.
     */
     ICamera getCameraHandler();

     /**
        Returns a reference to the registered CapabilitiesHandler.

        @return CapabilitiesHandler reference or null if a handler of this type is not registered.
     */
     ICapabilities getCapabilitiesHandler();

     /**
        Returns a reference to the registered CloudHandler.

        @return CloudHandler reference or null if a handler of this type is not registered.
     */
     ICloud getCloudHandler();

     /**
        Returns a reference to the registered CompressionHandler.

        @return CompressionHandler reference or null if a handler of this type is not registered.
     */
     ICompression getCompressionHandler();

     /**
        Returns a reference to the registered ConcurrentHandler.

        @return ConcurrentHandler reference or null if a handler of this type is not registered.
     */
     IConcurrent getConcurrentHandler();

     /**
        Returns a reference to the registered ContactHandler.

        @return ContactHandler reference or null if a handler of this type is not registered.
     */
     IContact getContactHandler();

     /**
        Returns a reference to the registered CryptoHandler.

        @return CryptoHandler reference or null if a handler of this type is not registered.
     */
     ICrypto getCryptoHandler();

     /**
        Returns a reference to the registered DataStreamHandler.

        @return DataStreamHandler reference or null if a handler of this type is not registered.
     */
     IDataStream getDataStreamHandler();

     /**
        Returns a reference to the registered DatabaseHandler.

        @return DatabaseHandler reference or null if a handler of this type is not registered.
     */
     IDatabase getDatabaseHandler();

     /**
        Returns a reference to the registered DesktopHandler.

        @return DesktopHandler reference or null if a handler of this type is not registered.
     */
     IDesktop getDesktopHandler();

     /**
        Returns a reference to the registered DeviceHandler.

        @return DeviceHandler reference or null if a handler of this type is not registered.
     */
     IDevice getDeviceHandler();

     /**
        Returns a reference to the registered DisplayHandler.

        @return DisplayHandler reference or null if a handler of this type is not registered.
     */
     IDisplay getDisplayHandler();

     /**
        Returns a reference to the registered FacebookHandler.

        @return FacebookHandler reference or null if a handler of this type is not registered.
     */
     IFacebook getFacebookHandler();

     /**
        Returns a reference to the registered FileSystemHandler.

        @return FileSystemHandler reference or null if a handler of this type is not registered.
     */
     IFileSystem getFileSystemHandler();

     /**
        Returns a reference to the registered GeolocationHandler.

        @return GeolocationHandler reference or null if a handler of this type is not registered.
     */
     IGeolocation getGeolocationHandler();

     /**
        Returns a reference to the registered GlobalizationHandler.

        @return GlobalizationHandler reference or null if a handler of this type is not registered.
     */
     IGlobalization getGlobalizationHandler();

     /**
        Returns a reference to the registered GooglePlusHandler.

        @return GooglePlusHandler reference or null if a handler of this type is not registered.
     */
     IGooglePlus getGooglePlusHandler();

     /**
        Returns a reference to the registered GyroscopeHandler.

        @return GyroscopeHandler reference or null if a handler of this type is not registered.
     */
     IGyroscope getGyroscopeHandler();

     /**
        Returns a reference to the registered ImagingHandler.

        @return ImagingHandler reference or null if a handler of this type is not registered.
     */
     IImaging getImagingHandler();

     /**
        Returns a reference to the registered InternalStorageHandler.

        @return InternalStorageHandler reference or null if a handler of this type is not registered.
     */
     IInternalStorage getInternalStorageHandler();

     /**
        Returns a reference to the registered LifecycleHandler.

        @return LifecycleHandler reference or null if a handler of this type is not registered.
     */
     ILifecycle getLifecycleHandler();

     /**
        Returns a reference to the registered LinkedInHandler.

        @return LinkedInHandler reference or null if a handler of this type is not registered.
     */
     ILinkedIn getLinkedInHandler();

     /**
        Returns a reference to the registered LoggingHandler.

        @return LoggingHandler reference or null if a handler of this type is not registered.
     */
     ILogging getLoggingHandler();

     /**
        Returns a reference to the registered MagnetometerHandler.

        @return MagnetometerHandler reference or null if a handler of this type is not registered.
     */
     IMagnetometer getMagnetometerHandler();

     /**
        Returns a reference to the registered MailHandler.

        @return MailHandler reference or null if a handler of this type is not registered.
     */
     IMail getMailHandler();

     /**
        Returns a reference to the registered ManagementHandler.

        @return ManagementHandler reference or null if a handler of this type is not registered.
     */
     IManagement getManagementHandler();

     /**
        Returns a reference to the registered MapHandler.

        @return MapHandler reference or null if a handler of this type is not registered.
     */
     IMap getMapHandler();

     /**
        Returns a reference to the registered MessagingHandler.

        @return MessagingHandler reference or null if a handler of this type is not registered.
     */
     IMessaging getMessagingHandler();

     /**
        Returns a reference to the registered NFCHandler.

        @return NFCHandler reference or null if a handler of this type is not registered.
     */
     INFC getNFCHandler();

     /**
        Returns a reference to the registered NetworkInfoHandler.

        @return NetworkInfoHandler reference or null if a handler of this type is not registered.
     */
     INetworkInfo getNetworkInfoHandler();

     /**
        Returns a reference to the registered NetworkNamingHandler.

        @return NetworkNamingHandler reference or null if a handler of this type is not registered.
     */
     INetworkNaming getNetworkNamingHandler();

     /**
        Returns a reference to the registered NetworkReachabilityHandler.

        @return NetworkReachabilityHandler reference or null if a handler of this type is not registered.
     */
     INetworkReachability getNetworkReachabilityHandler();

     /**
        Returns a reference to the registered NetworkStatusHandler.

        @return NetworkStatusHandler reference or null if a handler of this type is not registered.
     */
     INetworkStatus getNetworkStatusHandler();

     /**
        Returns a reference to the registered NotificationHandler.

        @return NotificationHandler reference or null if a handler of this type is not registered.
     */
     INotification getNotificationHandler();

     /**
        Returns a reference to the registered NotificationLocalHandler.

        @return NotificationLocalHandler reference or null if a handler of this type is not registered.
     */
     INotificationLocal getNotificationLocalHandler();

     /**
        Returns a reference to the registered OAuthHandler.

        @return OAuthHandler reference or null if a handler of this type is not registered.
     */
     IOAuth getOAuthHandler();

     /**
        Returns a reference to the registered OCRHandler.

        @return OCRHandler reference or null if a handler of this type is not registered.
     */
     IOCR getOCRHandler();

     /**
        Returns a reference to the registered OSHandler.

        @return OSHandler reference or null if a handler of this type is not registered.
     */
     IOS getOSHandler();

     /**
        Returns a reference to the registered OpenIdHandler.

        @return OpenIdHandler reference or null if a handler of this type is not registered.
     */
     IOpenId getOpenIdHandler();

     /**
        Returns a reference to the registered PrintingHandler.

        @return PrintingHandler reference or null if a handler of this type is not registered.
     */
     IPrinting getPrintingHandler();

     /**
        Returns a reference to the registered ProximityHandler.

        @return ProximityHandler reference or null if a handler of this type is not registered.
     */
     IProximity getProximityHandler();

     /**
        Returns a reference to the registered QRCodeHandler.

        @return QRCodeHandler reference or null if a handler of this type is not registered.
     */
     IQRCode getQRCodeHandler();

     /**
        Returns a reference to the registered RSSHandler.

        @return RSSHandler reference or null if a handler of this type is not registered.
     */
     IRSS getRSSHandler();

     /**
        Returns a reference to the registered RuntimeHandler.

        @return RuntimeHandler reference or null if a handler of this type is not registered.
     */
     IRuntime getRuntimeHandler();

     /**
        Returns a reference to the registered SecurityHandler.

        @return SecurityHandler reference or null if a handler of this type is not registered.
     */
     ISecurity getSecurityHandler();

     /**
        Returns a reference to the registered ServiceHandler.

        @return ServiceHandler reference or null if a handler of this type is not registered.
     */
     IService getServiceHandler();

     /**
        Returns a reference to the registered SettingsHandler.

        @return SettingsHandler reference or null if a handler of this type is not registered.
     */
     ISettings getSettingsHandler();

     /**
        Returns a reference to the registered SocketHandler.

        @return SocketHandler reference or null if a handler of this type is not registered.
     */
     ISocket getSocketHandler();

     /**
        Returns a reference to the registered StoreHandler.

        @return StoreHandler reference or null if a handler of this type is not registered.
     */
     IStore getStoreHandler();

     /**
        Returns a reference to the registered TelephonyHandler.

        @return TelephonyHandler reference or null if a handler of this type is not registered.
     */
     ITelephony getTelephonyHandler();

     /**
        Returns a reference to the registered TimerHandler.

        @return TimerHandler reference or null if a handler of this type is not registered.
     */
     ITimer getTimerHandler();

     /**
        Returns a reference to the registered TwitterHandler.

        @return TwitterHandler reference or null if a handler of this type is not registered.
     */
     ITwitter getTwitterHandler();

     /**
        Returns a reference to the registered UIHandler.

        @return UIHandler reference or null if a handler of this type is not registered.
     */
     IUI getUIHandler();

     /**
        Returns a reference to the registered UpdateHandler.

        @return UpdateHandler reference or null if a handler of this type is not registered.
     */
     IUpdate getUpdateHandler();

     /**
        Returns a reference to the registered VibrationHandler.

        @return VibrationHandler reference or null if a handler of this type is not registered.
     */
     IVibration getVibrationHandler();

     /**
        Returns a reference to the registered VideoHandler.

        @return VideoHandler reference or null if a handler of this type is not registered.
     */
     IVideo getVideoHandler();

     /**
        Returns a reference to the registered WalletHandler.

        @return WalletHandler reference or null if a handler of this type is not registered.
     */
     IWallet getWalletHandler();

     /**
        Returns a reference to the registered XMLHandler.

        @return XMLHandler reference or null if a handler of this type is not registered.
     */
     IXML getXMLHandler();

     /**
        Returns a reference to the Platform Context
        @return Reference to the platform context
        @since ARP1.0
     */
     IAppContext getPlatformContext();

     /**
        Returns a reference to the Webview platform context
        @return Reference to the Webview Context
        @since ARP1.0
     */
     IAppContextWebview getPlatformContextWeb();

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
