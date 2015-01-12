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

package me.adaptive.arp.api;

/**
   Interface to retrieve auto-registered service implementation references.

   @author Carlos Lozano Diez
   @since ARP1.0
   @version 1.0
*/
public interface IAppRegistry {
     /**
        Returns a reference to the registered AccelerationBridge.

        @return AccelerationBridge reference or null if a bridge of this type is not registered.
     */
     AccelerationBridge getAccelerationBridge();

     /**
        Returns a reference to the registered AdsBridge.

        @return AdsBridge reference or null if a bridge of this type is not registered.
     */
     AdsBridge getAdsBridge();

     /**
        Returns a reference to the registered AlarmBridge.

        @return AlarmBridge reference or null if a bridge of this type is not registered.
     */
     AlarmBridge getAlarmBridge();

     /**
        Returns a reference to the registered AmbientLightBridge.

        @return AmbientLightBridge reference or null if a bridge of this type is not registered.
     */
     AmbientLightBridge getAmbientLightBridge();

     /**
        Returns a reference to the registered AnalyticsBridge.

        @return AnalyticsBridge reference or null if a bridge of this type is not registered.
     */
     AnalyticsBridge getAnalyticsBridge();

     /**
        Returns a reference to the registered AudioBridge.

        @return AudioBridge reference or null if a bridge of this type is not registered.
     */
     AudioBridge getAudioBridge();

     /**
        Returns a reference to the registered BarcodeBridge.

        @return BarcodeBridge reference or null if a bridge of this type is not registered.
     */
     BarcodeBridge getBarcodeBridge();

     /**
        Returns a reference to the registered BarometerBridge.

        @return BarometerBridge reference or null if a bridge of this type is not registered.
     */
     BarometerBridge getBarometerBridge();

     /**
        Returns a reference to the registered BluetoothBridge.

        @return BluetoothBridge reference or null if a bridge of this type is not registered.
     */
     BluetoothBridge getBluetoothBridge();

     /**
        Returns a reference to the registered BrowserBridge.

        @return BrowserBridge reference or null if a bridge of this type is not registered.
     */
     BrowserBridge getBrowserBridge();

     /**
        Returns a reference to the registered CalendarBridge.

        @return CalendarBridge reference or null if a bridge of this type is not registered.
     */
     CalendarBridge getCalendarBridge();

     /**
        Returns a reference to the registered CameraBridge.

        @return CameraBridge reference or null if a bridge of this type is not registered.
     */
     CameraBridge getCameraBridge();

     /**
        Returns a reference to the registered CapabilitiesBridge.

        @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
     */
     CapabilitiesBridge getCapabilitiesBridge();

     /**
        Returns a reference to the registered CloudBridge.

        @return CloudBridge reference or null if a bridge of this type is not registered.
     */
     CloudBridge getCloudBridge();

     /**
        Returns a reference to the registered CompressionBridge.

        @return CompressionBridge reference or null if a bridge of this type is not registered.
     */
     CompressionBridge getCompressionBridge();

     /**
        Returns a reference to the registered ConcurrentBridge.

        @return ConcurrentBridge reference or null if a bridge of this type is not registered.
     */
     ConcurrentBridge getConcurrentBridge();

     /**
        Returns a reference to the registered ContactBridge.

        @return ContactBridge reference or null if a bridge of this type is not registered.
     */
     ContactBridge getContactBridge();

     /**
        Returns a reference to the registered CryptoBridge.

        @return CryptoBridge reference or null if a bridge of this type is not registered.
     */
     CryptoBridge getCryptoBridge();

     /**
        Returns a reference to the registered DataStreamBridge.

        @return DataStreamBridge reference or null if a bridge of this type is not registered.
     */
     DataStreamBridge getDataStreamBridge();

     /**
        Returns a reference to the registered DatabaseBridge.

        @return DatabaseBridge reference or null if a bridge of this type is not registered.
     */
     DatabaseBridge getDatabaseBridge();

     /**
        Returns a reference to the registered DesktopBridge.

        @return DesktopBridge reference or null if a bridge of this type is not registered.
     */
     DesktopBridge getDesktopBridge();

     /**
        Returns a reference to the registered DeviceBridge.

        @return DeviceBridge reference or null if a bridge of this type is not registered.
     */
     DeviceBridge getDeviceBridge();

     /**
        Returns a reference to the registered DisplayBridge.

        @return DisplayBridge reference or null if a bridge of this type is not registered.
     */
     DisplayBridge getDisplayBridge();

     /**
        Returns a reference to the registered FacebookBridge.

        @return FacebookBridge reference or null if a bridge of this type is not registered.
     */
     FacebookBridge getFacebookBridge();

     /**
        Returns a reference to the registered FileBridge.

        @return FileBridge reference or null if a bridge of this type is not registered.
     */
     FileBridge getFileBridge();

     /**
        Returns a reference to the registered FileSystemBridge.

        @return FileSystemBridge reference or null if a bridge of this type is not registered.
     */
     FileSystemBridge getFileSystemBridge();

     /**
        Returns a reference to the registered GeolocationBridge.

        @return GeolocationBridge reference or null if a bridge of this type is not registered.
     */
     GeolocationBridge getGeolocationBridge();

     /**
        Returns a reference to the registered GlobalizationBridge.

        @return GlobalizationBridge reference or null if a bridge of this type is not registered.
     */
     GlobalizationBridge getGlobalizationBridge();

     /**
        Returns a reference to the registered GooglePlusBridge.

        @return GooglePlusBridge reference or null if a bridge of this type is not registered.
     */
     GooglePlusBridge getGooglePlusBridge();

     /**
        Returns a reference to the registered GyroscopeBridge.

        @return GyroscopeBridge reference or null if a bridge of this type is not registered.
     */
     GyroscopeBridge getGyroscopeBridge();

     /**
        Returns a reference to the registered ImagingBridge.

        @return ImagingBridge reference or null if a bridge of this type is not registered.
     */
     ImagingBridge getImagingBridge();

     /**
        Returns a reference to the registered InternalStorageBridge.

        @return InternalStorageBridge reference or null if a bridge of this type is not registered.
     */
     InternalStorageBridge getInternalStorageBridge();

     /**
        Returns a reference to the registered LifecycleBridge.

        @return LifecycleBridge reference or null if a bridge of this type is not registered.
     */
     LifecycleBridge getLifecycleBridge();

     /**
        Returns a reference to the registered LinkedInBridge.

        @return LinkedInBridge reference or null if a bridge of this type is not registered.
     */
     LinkedInBridge getLinkedInBridge();

     /**
        Returns a reference to the registered LoggingBridge.

        @return LoggingBridge reference or null if a bridge of this type is not registered.
     */
     LoggingBridge getLoggingBridge();

     /**
        Returns a reference to the registered MagnetometerBridge.

        @return MagnetometerBridge reference or null if a bridge of this type is not registered.
     */
     MagnetometerBridge getMagnetometerBridge();

     /**
        Returns a reference to the registered MailBridge.

        @return MailBridge reference or null if a bridge of this type is not registered.
     */
     MailBridge getMailBridge();

     /**
        Returns a reference to the registered ManagementBridge.

        @return ManagementBridge reference or null if a bridge of this type is not registered.
     */
     ManagementBridge getManagementBridge();

     /**
        Returns a reference to the registered MapBridge.

        @return MapBridge reference or null if a bridge of this type is not registered.
     */
     MapBridge getMapBridge();

     /**
        Returns a reference to the registered MessagingBridge.

        @return MessagingBridge reference or null if a bridge of this type is not registered.
     */
     MessagingBridge getMessagingBridge();

     /**
        Returns a reference to the registered NFCBridge.

        @return NFCBridge reference or null if a bridge of this type is not registered.
     */
     NFCBridge getNFCBridge();

     /**
        Returns a reference to the registered NetworkInfoBridge.

        @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
     */
     NetworkInfoBridge getNetworkInfoBridge();

     /**
        Returns a reference to the registered NetworkNamingBridge.

        @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
     */
     NetworkNamingBridge getNetworkNamingBridge();

     /**
        Returns a reference to the registered NetworkReachabilityBridge.

        @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
     */
     NetworkReachabilityBridge getNetworkReachabilityBridge();

     /**
        Returns a reference to the registered NetworkStatusBridge.

        @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
     */
     NetworkStatusBridge getNetworkStatusBridge();

     /**
        Returns a reference to the registered NotificationBridge.

        @return NotificationBridge reference or null if a bridge of this type is not registered.
     */
     NotificationBridge getNotificationBridge();

     /**
        Returns a reference to the registered NotificationLocalBridge.

        @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
     */
     NotificationLocalBridge getNotificationLocalBridge();

     /**
        Returns a reference to the registered OAuthBridge.

        @return OAuthBridge reference or null if a bridge of this type is not registered.
     */
     OAuthBridge getOAuthBridge();

     /**
        Returns a reference to the registered OCRBridge.

        @return OCRBridge reference or null if a bridge of this type is not registered.
     */
     OCRBridge getOCRBridge();

     /**
        Returns a reference to the registered OSBridge.

        @return OSBridge reference or null if a bridge of this type is not registered.
     */
     OSBridge getOSBridge();

     /**
        Returns a reference to the registered OpenIdBridge.

        @return OpenIdBridge reference or null if a bridge of this type is not registered.
     */
     OpenIdBridge getOpenIdBridge();

     /**
        Returns a reference to the registered PrintingBridge.

        @return PrintingBridge reference or null if a bridge of this type is not registered.
     */
     PrintingBridge getPrintingBridge();

     /**
        Returns a reference to the registered ProximityBridge.

        @return ProximityBridge reference or null if a bridge of this type is not registered.
     */
     ProximityBridge getProximityBridge();

     /**
        Returns a reference to the registered QRCodeBridge.

        @return QRCodeBridge reference or null if a bridge of this type is not registered.
     */
     QRCodeBridge getQRCodeBridge();

     /**
        Returns a reference to the registered RSSBridge.

        @return RSSBridge reference or null if a bridge of this type is not registered.
     */
     RSSBridge getRSSBridge();

     /**
        Returns a reference to the registered RuntimeBridge.

        @return RuntimeBridge reference or null if a bridge of this type is not registered.
     */
     RuntimeBridge getRuntimeBridge();

     /**
        Returns a reference to the registered SecurityBridge.

        @return SecurityBridge reference or null if a bridge of this type is not registered.
     */
     SecurityBridge getSecurityBridge();

     /**
        Returns a reference to the registered ServiceBridge.

        @return ServiceBridge reference or null if a bridge of this type is not registered.
     */
     ServiceBridge getServiceBridge();

     /**
        Returns a reference to the registered SettingsBridge.

        @return SettingsBridge reference or null if a bridge of this type is not registered.
     */
     SettingsBridge getSettingsBridge();

     /**
        Returns a reference to the registered SocketBridge.

        @return SocketBridge reference or null if a bridge of this type is not registered.
     */
     SocketBridge getSocketBridge();

     /**
        Returns a reference to the registered StoreBridge.

        @return StoreBridge reference or null if a bridge of this type is not registered.
     */
     StoreBridge getStoreBridge();

     /**
        Returns a reference to the registered TelephonyBridge.

        @return TelephonyBridge reference or null if a bridge of this type is not registered.
     */
     TelephonyBridge getTelephonyBridge();

     /**
        Returns a reference to the registered TimerBridge.

        @return TimerBridge reference or null if a bridge of this type is not registered.
     */
     TimerBridge getTimerBridge();

     /**
        Returns a reference to the registered TwitterBridge.

        @return TwitterBridge reference or null if a bridge of this type is not registered.
     */
     TwitterBridge getTwitterBridge();

     /**
        Returns a reference to the registered UIBridge.

        @return UIBridge reference or null if a bridge of this type is not registered.
     */
     UIBridge getUIBridge();

     /**
        Returns a reference to the registered UpdateBridge.

        @return UpdateBridge reference or null if a bridge of this type is not registered.
     */
     UpdateBridge getUpdateBridge();

     /**
        Returns a reference to the registered VibrationBridge.

        @return VibrationBridge reference or null if a bridge of this type is not registered.
     */
     VibrationBridge getVibrationBridge();

     /**
        Returns a reference to the registered VideoBridge.

        @return VideoBridge reference or null if a bridge of this type is not registered.
     */
     VideoBridge getVideoBridge();

     /**
        Returns a reference to the registered WalletBridge.

        @return WalletBridge reference or null if a bridge of this type is not registered.
     */
     WalletBridge getWalletBridge();

     /**
        Returns a reference to the registered XMLBridge.

        @return XMLBridge reference or null if a bridge of this type is not registered.
     */
     XMLBridge getXMLBridge();

     /**
        Provides a bridge to handle API calls for the given interface name.

        @param bridgeType String with the interface name required.
        @return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.
     */
     APIBridge getBridge(String bridgeType);

     /**
        Method that returns the API version of the implementation.

        @return API Version string.
        @since ARP1.0
     */
     String getAPIVersion();

     /**
        Returns a reference to the Platform Context

        @return Reference to the platform context
        @since ARP1.0
     */
     AppContextBridge getPlatformContext();

     /**
        Returns a reference to the Webview platform context

        @return Reference to the Webview Context
        @since ARP1.0
     */
     AppContextWebviewBridge getPlatformContextWeb();

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
