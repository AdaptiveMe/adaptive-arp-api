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

///<reference path="AccelerationBridge.ts"/>
///<reference path="AdsBridge.ts"/>
///<reference path="AlarmBridge.ts"/>
///<reference path="AmbientLightBridge.ts"/>
///<reference path="AnalyticsBridge.ts"/>
///<reference path="AudioBridge.ts"/>
///<reference path="BarcodeBridge.ts"/>
///<reference path="BarometerBridge.ts"/>
///<reference path="BluetoothBridge.ts"/>
///<reference path="BrowserBridge.ts"/>
///<reference path="CalendarBridge.ts"/>
///<reference path="CameraBridge.ts"/>
///<reference path="CapabilitiesBridge.ts"/>
///<reference path="CloudBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="CompressionBridge.ts"/>
///<reference path="ConcurrentBridge.ts"/>
///<reference path="ContactBridge.ts"/>
///<reference path="CryptoBridge.ts"/>
///<reference path="DataStreamBridge.ts"/>
///<reference path="DatabaseBridge.ts"/>
///<reference path="DesktopBridge.ts"/>
///<reference path="DeviceBridge.ts"/>
///<reference path="DisplayBridge.ts"/>
///<reference path="FacebookBridge.ts"/>
///<reference path="FileBridge.ts"/>
///<reference path="FileSystemBridge.ts"/>
///<reference path="GeolocationBridge.ts"/>
///<reference path="GlobalizationBridge.ts"/>
///<reference path="GooglePlusBridge.ts"/>
///<reference path="GyroscopeBridge.ts"/>
///<reference path="IAcceleration.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IAds.ts"/>
///<reference path="IAlarm.ts"/>
///<reference path="IAmbientLight.ts"/>
///<reference path="IAnalytics.ts"/>
///<reference path="IAppRegistry.ts"/>
///<reference path="IAudio.ts"/>
///<reference path="IBarcode.ts"/>
///<reference path="IBarometer.ts"/>
///<reference path="IBluetooth.ts"/>
///<reference path="IBrowser.ts"/>
///<reference path="ICalendar.ts"/>
///<reference path="ICamera.ts"/>
///<reference path="ICapabilities.ts"/>
///<reference path="ICloud.ts"/>
///<reference path="ICompression.ts"/>
///<reference path="IConcurrent.ts"/>
///<reference path="IContact.ts"/>
///<reference path="ICrypto.ts"/>
///<reference path="IDataStream.ts"/>
///<reference path="IDatabase.ts"/>
///<reference path="IDesktop.ts"/>
///<reference path="IDevice.ts"/>
///<reference path="IDisplay.ts"/>
///<reference path="IFacebook.ts"/>
///<reference path="IFile.ts"/>
///<reference path="IFileSystem.ts"/>
///<reference path="IGeolocation.ts"/>
///<reference path="IGlobalization.ts"/>
///<reference path="IGooglePlus.ts"/>
///<reference path="IGyroscope.ts"/>
///<reference path="IImaging.ts"/>
///<reference path="IInternalStorage.ts"/>
///<reference path="ILifecycle.ts"/>
///<reference path="ILinkedIn.ts"/>
///<reference path="ILogging.ts"/>
///<reference path="IMagnetometer.ts"/>
///<reference path="IMail.ts"/>
///<reference path="IManagement.ts"/>
///<reference path="IMap.ts"/>
///<reference path="IMessaging.ts"/>
///<reference path="INFC.ts"/>
///<reference path="INetworkInfo.ts"/>
///<reference path="INetworkNaming.ts"/>
///<reference path="INetworkReachability.ts"/>
///<reference path="INetworkStatus.ts"/>
///<reference path="INotification.ts"/>
///<reference path="INotificationLocal.ts"/>
///<reference path="IOAuth.ts"/>
///<reference path="IOCR.ts"/>
///<reference path="IOS.ts"/>
///<reference path="IOpenId.ts"/>
///<reference path="IPrinting.ts"/>
///<reference path="IProximity.ts"/>
///<reference path="IQRCode.ts"/>
///<reference path="IRSS.ts"/>
///<reference path="IRuntime.ts"/>
///<reference path="ISecurity.ts"/>
///<reference path="IService.ts"/>
///<reference path="ISettings.ts"/>
///<reference path="ISocket.ts"/>
///<reference path="IStore.ts"/>
///<reference path="ITelephony.ts"/>
///<reference path="ITimer.ts"/>
///<reference path="ITwitter.ts"/>
///<reference path="IUI.ts"/>
///<reference path="IUpdate.ts"/>
///<reference path="IVibration.ts"/>
///<reference path="IVideo.ts"/>
///<reference path="IWallet.ts"/>
///<reference path="IXML.ts"/>
///<reference path="ImagingBridge.ts"/>
///<reference path="InternalStorageBridge.ts"/>
///<reference path="LifecycleBridge.ts"/>
///<reference path="LinkedInBridge.ts"/>
///<reference path="LoggingBridge.ts"/>
///<reference path="MagnetometerBridge.ts"/>
///<reference path="MailBridge.ts"/>
///<reference path="ManagementBridge.ts"/>
///<reference path="MapBridge.ts"/>
///<reference path="MessagingBridge.ts"/>
///<reference path="NFCBridge.ts"/>
///<reference path="NetworkInfoBridge.ts"/>
///<reference path="NetworkNamingBridge.ts"/>
///<reference path="NetworkReachabilityBridge.ts"/>
///<reference path="NetworkStatusBridge.ts"/>
///<reference path="NotificationBridge.ts"/>
///<reference path="NotificationLocalBridge.ts"/>
///<reference path="OAuthBridge.ts"/>
///<reference path="OCRBridge.ts"/>
///<reference path="OSBridge.ts"/>
///<reference path="OpenIdBridge.ts"/>
///<reference path="PrintingBridge.ts"/>
///<reference path="ProximityBridge.ts"/>
///<reference path="QRCodeBridge.ts"/>
///<reference path="RSSBridge.ts"/>
///<reference path="RuntimeBridge.ts"/>
///<reference path="SecurityBridge.ts"/>
///<reference path="ServiceBridge.ts"/>
///<reference path="SettingsBridge.ts"/>
///<reference path="SocketBridge.ts"/>
///<reference path="StoreBridge.ts"/>
///<reference path="TelephonyBridge.ts"/>
///<reference path="TimerBridge.ts"/>
///<reference path="TwitterBridge.ts"/>
///<reference path="UIBridge.ts"/>
///<reference path="UpdateBridge.ts"/>
///<reference path="VibrationBridge.ts"/>
///<reference path="VideoBridge.ts"/>
///<reference path="WalletBridge.ts"/>
///<reference path="XMLBridge.ts"/>
module Adaptive {

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
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
