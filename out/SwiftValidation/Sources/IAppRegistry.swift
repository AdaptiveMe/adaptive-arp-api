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

/**
   Interface to retrieve auto-registered service implementation references.

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public protocol IAppRegistry : NSObjectProtocol {
     /**
        Returns a reference to the registered AccelerationHandler.

        @return AccelerationHandler reference or null if a handler of this type is not registered.
     */
     func getAccelerationHandler() -> IAcceleration

     /**
        Returns a reference to the registered AdsHandler.

        @return AdsHandler reference or null if a handler of this type is not registered.
     */
     func getAdsHandler() -> IAds

     /**
        Returns a reference to the registered AlarmHandler.

        @return AlarmHandler reference or null if a handler of this type is not registered.
     */
     func getAlarmHandler() -> IAlarm

     /**
        Returns a reference to the registered AmbientLightHandler.

        @return AmbientLightHandler reference or null if a handler of this type is not registered.
     */
     func getAmbientLightHandler() -> IAmbientLight

     /**
        Returns a reference to the registered AnalyticsHandler.

        @return AnalyticsHandler reference or null if a handler of this type is not registered.
     */
     func getAnalyticsHandler() -> IAnalytics

     /**
        Returns a reference to the registered AudioHandler.

        @return AudioHandler reference or null if a handler of this type is not registered.
     */
     func getAudioHandler() -> IAudio

     /**
        Returns a reference to the registered BarcodeHandler.

        @return BarcodeHandler reference or null if a handler of this type is not registered.
     */
     func getBarcodeHandler() -> IBarcode

     /**
        Returns a reference to the registered BarometerHandler.

        @return BarometerHandler reference or null if a handler of this type is not registered.
     */
     func getBarometerHandler() -> IBarometer

     /**
        Returns a reference to the registered BluetoothHandler.

        @return BluetoothHandler reference or null if a handler of this type is not registered.
     */
     func getBluetoothHandler() -> IBluetooth

     /**
        Returns a reference to the registered BrowserHandler.

        @return BrowserHandler reference or null if a handler of this type is not registered.
     */
     func getBrowserHandler() -> IBrowser

     /**
        Returns a reference to the registered CalendarHandler.

        @return CalendarHandler reference or null if a handler of this type is not registered.
     */
     func getCalendarHandler() -> ICalendar

     /**
        Returns a reference to the registered CameraHandler.

        @return CameraHandler reference or null if a handler of this type is not registered.
     */
     func getCameraHandler() -> ICamera

     /**
        Returns a reference to the registered CapabilitiesHandler.

        @return CapabilitiesHandler reference or null if a handler of this type is not registered.
     */
     func getCapabilitiesHandler() -> ICapabilities

     /**
        Returns a reference to the registered CloudHandler.

        @return CloudHandler reference or null if a handler of this type is not registered.
     */
     func getCloudHandler() -> ICloud

     /**
        Returns a reference to the registered CompressionHandler.

        @return CompressionHandler reference or null if a handler of this type is not registered.
     */
     func getCompressionHandler() -> ICompression

     /**
        Returns a reference to the registered ConcurrentHandler.

        @return ConcurrentHandler reference or null if a handler of this type is not registered.
     */
     func getConcurrentHandler() -> IConcurrent

     /**
        Returns a reference to the registered ContactHandler.

        @return ContactHandler reference or null if a handler of this type is not registered.
     */
     func getContactHandler() -> IContact

     /**
        Returns a reference to the registered CryptoHandler.

        @return CryptoHandler reference or null if a handler of this type is not registered.
     */
     func getCryptoHandler() -> ICrypto

     /**
        Returns a reference to the registered DataStreamHandler.

        @return DataStreamHandler reference or null if a handler of this type is not registered.
     */
     func getDataStreamHandler() -> IDataStream

     /**
        Returns a reference to the registered DatabaseHandler.

        @return DatabaseHandler reference or null if a handler of this type is not registered.
     */
     func getDatabaseHandler() -> IDatabase

     /**
        Returns a reference to the registered DesktopHandler.

        @return DesktopHandler reference or null if a handler of this type is not registered.
     */
     func getDesktopHandler() -> IDesktop

     /**
        Returns a reference to the registered DeviceHandler.

        @return DeviceHandler reference or null if a handler of this type is not registered.
     */
     func getDeviceHandler() -> IDevice

     /**
        Returns a reference to the registered DisplayHandler.

        @return DisplayHandler reference or null if a handler of this type is not registered.
     */
     func getDisplayHandler() -> IDisplay

     /**
        Returns a reference to the registered FacebookHandler.

        @return FacebookHandler reference or null if a handler of this type is not registered.
     */
     func getFacebookHandler() -> IFacebook

     /**
        Returns a reference to the registered FileSystemHandler.

        @return FileSystemHandler reference or null if a handler of this type is not registered.
     */
     func getFileSystemHandler() -> IFileSystem

     /**
        Returns a reference to the registered GeolocationHandler.

        @return GeolocationHandler reference or null if a handler of this type is not registered.
     */
     func getGeolocationHandler() -> IGeolocation

     /**
        Returns a reference to the registered GlobalizationHandler.

        @return GlobalizationHandler reference or null if a handler of this type is not registered.
     */
     func getGlobalizationHandler() -> IGlobalization

     /**
        Returns a reference to the registered GooglePlusHandler.

        @return GooglePlusHandler reference or null if a handler of this type is not registered.
     */
     func getGooglePlusHandler() -> IGooglePlus

     /**
        Returns a reference to the registered GyroscopeHandler.

        @return GyroscopeHandler reference or null if a handler of this type is not registered.
     */
     func getGyroscopeHandler() -> IGyroscope

     /**
        Returns a reference to the registered ImagingHandler.

        @return ImagingHandler reference or null if a handler of this type is not registered.
     */
     func getImagingHandler() -> IImaging

     /**
        Returns a reference to the registered InternalStorageHandler.

        @return InternalStorageHandler reference or null if a handler of this type is not registered.
     */
     func getInternalStorageHandler() -> IInternalStorage

     /**
        Returns a reference to the registered LifecycleHandler.

        @return LifecycleHandler reference or null if a handler of this type is not registered.
     */
     func getLifecycleHandler() -> ILifecycle

     /**
        Returns a reference to the registered LinkedInHandler.

        @return LinkedInHandler reference or null if a handler of this type is not registered.
     */
     func getLinkedInHandler() -> ILinkedIn

     /**
        Returns a reference to the registered LoggingHandler.

        @return LoggingHandler reference or null if a handler of this type is not registered.
     */
     func getLoggingHandler() -> ILogging

     /**
        Returns a reference to the registered MagnetometerHandler.

        @return MagnetometerHandler reference or null if a handler of this type is not registered.
     */
     func getMagnetometerHandler() -> IMagnetometer

     /**
        Returns a reference to the registered MailHandler.

        @return MailHandler reference or null if a handler of this type is not registered.
     */
     func getMailHandler() -> IMail

     /**
        Returns a reference to the registered ManagementHandler.

        @return ManagementHandler reference or null if a handler of this type is not registered.
     */
     func getManagementHandler() -> IManagement

     /**
        Returns a reference to the registered MapHandler.

        @return MapHandler reference or null if a handler of this type is not registered.
     */
     func getMapHandler() -> IMap

     /**
        Returns a reference to the registered MessagingHandler.

        @return MessagingHandler reference or null if a handler of this type is not registered.
     */
     func getMessagingHandler() -> IMessaging

     /**
        Returns a reference to the registered NFCHandler.

        @return NFCHandler reference or null if a handler of this type is not registered.
     */
     func getNFCHandler() -> INFC

     /**
        Returns a reference to the registered NetworkInfoHandler.

        @return NetworkInfoHandler reference or null if a handler of this type is not registered.
     */
     func getNetworkInfoHandler() -> INetworkInfo

     /**
        Returns a reference to the registered NetworkNamingHandler.

        @return NetworkNamingHandler reference or null if a handler of this type is not registered.
     */
     func getNetworkNamingHandler() -> INetworkNaming

     /**
        Returns a reference to the registered NetworkReachabilityHandler.

        @return NetworkReachabilityHandler reference or null if a handler of this type is not registered.
     */
     func getNetworkReachabilityHandler() -> INetworkReachability

     /**
        Returns a reference to the registered NetworkStatusHandler.

        @return NetworkStatusHandler reference or null if a handler of this type is not registered.
     */
     func getNetworkStatusHandler() -> INetworkStatus

     /**
        Returns a reference to the registered NotificationHandler.

        @return NotificationHandler reference or null if a handler of this type is not registered.
     */
     func getNotificationHandler() -> INotification

     /**
        Returns a reference to the registered NotificationLocalHandler.

        @return NotificationLocalHandler reference or null if a handler of this type is not registered.
     */
     func getNotificationLocalHandler() -> INotificationLocal

     /**
        Returns a reference to the registered OAuthHandler.

        @return OAuthHandler reference or null if a handler of this type is not registered.
     */
     func getOAuthHandler() -> IOAuth

     /**
        Returns a reference to the registered OCRHandler.

        @return OCRHandler reference or null if a handler of this type is not registered.
     */
     func getOCRHandler() -> IOCR

     /**
        Returns a reference to the registered OSHandler.

        @return OSHandler reference or null if a handler of this type is not registered.
     */
     func getOSHandler() -> IOS

     /**
        Returns a reference to the registered OpenIdHandler.

        @return OpenIdHandler reference or null if a handler of this type is not registered.
     */
     func getOpenIdHandler() -> IOpenId

     /**
        Returns a reference to the registered PrintingHandler.

        @return PrintingHandler reference or null if a handler of this type is not registered.
     */
     func getPrintingHandler() -> IPrinting

     /**
        Returns a reference to the registered ProximityHandler.

        @return ProximityHandler reference or null if a handler of this type is not registered.
     */
     func getProximityHandler() -> IProximity

     /**
        Returns a reference to the registered QRCodeHandler.

        @return QRCodeHandler reference or null if a handler of this type is not registered.
     */
     func getQRCodeHandler() -> IQRCode

     /**
        Returns a reference to the registered RSSHandler.

        @return RSSHandler reference or null if a handler of this type is not registered.
     */
     func getRSSHandler() -> IRSS

     /**
        Returns a reference to the registered RuntimeHandler.

        @return RuntimeHandler reference or null if a handler of this type is not registered.
     */
     func getRuntimeHandler() -> IRuntime

     /**
        Returns a reference to the registered SecurityHandler.

        @return SecurityHandler reference or null if a handler of this type is not registered.
     */
     func getSecurityHandler() -> ISecurity

     /**
        Returns a reference to the registered ServiceHandler.

        @return ServiceHandler reference or null if a handler of this type is not registered.
     */
     func getServiceHandler() -> IService

     /**
        Returns a reference to the registered SettingsHandler.

        @return SettingsHandler reference or null if a handler of this type is not registered.
     */
     func getSettingsHandler() -> ISettings

     /**
        Returns a reference to the registered SocketHandler.

        @return SocketHandler reference or null if a handler of this type is not registered.
     */
     func getSocketHandler() -> ISocket

     /**
        Returns a reference to the registered StoreHandler.

        @return StoreHandler reference or null if a handler of this type is not registered.
     */
     func getStoreHandler() -> IStore

     /**
        Returns a reference to the registered TelephonyHandler.

        @return TelephonyHandler reference or null if a handler of this type is not registered.
     */
     func getTelephonyHandler() -> ITelephony

     /**
        Returns a reference to the registered TimerHandler.

        @return TimerHandler reference or null if a handler of this type is not registered.
     */
     func getTimerHandler() -> ITimer

     /**
        Returns a reference to the registered TwitterHandler.

        @return TwitterHandler reference or null if a handler of this type is not registered.
     */
     func getTwitterHandler() -> ITwitter

     /**
        Returns a reference to the registered UIHandler.

        @return UIHandler reference or null if a handler of this type is not registered.
     */
     func getUIHandler() -> IUI

     /**
        Returns a reference to the registered UpdateHandler.

        @return UpdateHandler reference or null if a handler of this type is not registered.
     */
     func getUpdateHandler() -> IUpdate

     /**
        Returns a reference to the registered VibrationHandler.

        @return VibrationHandler reference or null if a handler of this type is not registered.
     */
     func getVibrationHandler() -> IVibration

     /**
        Returns a reference to the registered VideoHandler.

        @return VideoHandler reference or null if a handler of this type is not registered.
     */
     func getVideoHandler() -> IVideo

     /**
        Returns a reference to the registered WalletHandler.

        @return WalletHandler reference or null if a handler of this type is not registered.
     */
     func getWalletHandler() -> IWallet

     /**
        Returns a reference to the registered XMLHandler.

        @return XMLHandler reference or null if a handler of this type is not registered.
     */
     func getXMLHandler() -> IXML

     /**
        Returns a reference to the Platform Context
        @return Reference to the platform context
        @since ARP1.0
     */
     func getPlatformContext() -> IAppContext

     /**
        Returns a reference to the Webview platform context
        @return Reference to the Webview Context
        @since ARP1.0
     */
     func getPlatformContextWeb() -> IAppContextWebview

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
