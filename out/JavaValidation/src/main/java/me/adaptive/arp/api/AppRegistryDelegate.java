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
   Auto-generated implementation of IAppRegistry specification.
*/
public class AppRegistryDelegate implements IAppRegistry {

     /**
        Default Constructor.
     */
     public AppRegistryDelegate() {
          super();
     }

     /**
        Bridge references.
     */
     private AccelerationBridge __accelerationBridge = null;
     private AdsBridge __adsBridge = null;
     private AlarmBridge __alarmBridge = null;
     private AmbientLightBridge __ambientlightBridge = null;
     private AnalyticsBridge __analyticsBridge = null;
     private AudioBridge __audioBridge = null;
     private BarcodeBridge __barcodeBridge = null;
     private BarometerBridge __barometerBridge = null;
     private BluetoothBridge __bluetoothBridge = null;
     private BrowserBridge __browserBridge = null;
     private CalendarBridge __calendarBridge = null;
     private CameraBridge __cameraBridge = null;
     private CapabilitiesBridge __capabilitiesBridge = null;
     private CloudBridge __cloudBridge = null;
     private CompressionBridge __compressionBridge = null;
     private ConcurrentBridge __concurrentBridge = null;
     private ContactBridge __contactBridge = null;
     private CryptoBridge __cryptoBridge = null;
     private DataStreamBridge __datastreamBridge = null;
     private DatabaseBridge __databaseBridge = null;
     private DesktopBridge __desktopBridge = null;
     private DeviceBridge __deviceBridge = null;
     private DisplayBridge __displayBridge = null;
     private FacebookBridge __facebookBridge = null;
     private FileBridge __fileBridge = null;
     private FileSystemBridge __filesystemBridge = null;
     private GeolocationBridge __geolocationBridge = null;
     private GlobalizationBridge __globalizationBridge = null;
     private GooglePlusBridge __googleplusBridge = null;
     private GyroscopeBridge __gyroscopeBridge = null;
     private ImagingBridge __imagingBridge = null;
     private InternalStorageBridge __internalstorageBridge = null;
     private LifecycleBridge __lifecycleBridge = null;
     private LinkedInBridge __linkedinBridge = null;
     private LoggingBridge __loggingBridge = null;
     private MagnetometerBridge __magnetometerBridge = null;
     private MailBridge __mailBridge = null;
     private ManagementBridge __managementBridge = null;
     private MapBridge __mapBridge = null;
     private MessagingBridge __messagingBridge = null;
     private NFCBridge __nfcBridge = null;
     private NetworkInfoBridge __networkinfoBridge = null;
     private NetworkNamingBridge __networknamingBridge = null;
     private NetworkReachabilityBridge __networkreachabilityBridge = null;
     private NetworkStatusBridge __networkstatusBridge = null;
     private NotificationBridge __notificationBridge = null;
     private NotificationLocalBridge __notificationlocalBridge = null;
     private OAuthBridge __oauthBridge = null;
     private OCRBridge __ocrBridge = null;
     private OSBridge __osBridge = null;
     private OpenIdBridge __openidBridge = null;
     private PrintingBridge __printingBridge = null;
     private ProximityBridge __proximityBridge = null;
     private QRCodeBridge __qrcodeBridge = null;
     private RSSBridge __rssBridge = null;
     private RuntimeBridge __runtimeBridge = null;
     private SecurityBridge __securityBridge = null;
     private ServiceBridge __serviceBridge = null;
     private SettingsBridge __settingsBridge = null;
     private SocketBridge __socketBridge = null;
     private StoreBridge __storeBridge = null;
     private TelephonyBridge __telephonyBridge = null;
     private TimerBridge __timerBridge = null;
     private TwitterBridge __twitterBridge = null;
     private UIBridge __uiBridge = null;
     private UpdateBridge __updateBridge = null;
     private VibrationBridge __vibrationBridge = null;
     private VideoBridge __videoBridge = null;
     private WalletBridge __walletBridge = null;
     private XMLBridge __xmlBridge = null;

     /**
        Returns a reference to the registered AccelerationBridge.

        @return AccelerationBridge reference or null if a bridge of this type is not registered.
     */
     public final AccelerationBridge getAccelerationBridge() {
           if(__accelerationBridge == null) {
               __accelerationBridge = new AccelerationBridge(null);
          }
          return __accelerationBridge;
     }

     /**
        Returns a reference to the registered AdsBridge.

        @return AdsBridge reference or null if a bridge of this type is not registered.
     */
     public final AdsBridge getAdsBridge() {
           if(__adsBridge == null) {
               __adsBridge = new AdsBridge(null);
          }
          return __adsBridge;
     }

     /**
        Returns a reference to the registered AlarmBridge.

        @return AlarmBridge reference or null if a bridge of this type is not registered.
     */
     public final AlarmBridge getAlarmBridge() {
           if(__alarmBridge == null) {
               __alarmBridge = new AlarmBridge(null);
          }
          return __alarmBridge;
     }

     /**
        Returns a reference to the registered AmbientLightBridge.

        @return AmbientLightBridge reference or null if a bridge of this type is not registered.
     */
     public final AmbientLightBridge getAmbientLightBridge() {
           if(__ambientlightBridge == null) {
               __ambientlightBridge = new AmbientLightBridge(null);
          }
          return __ambientlightBridge;
     }

     /**
        Returns a reference to the registered AnalyticsBridge.

        @return AnalyticsBridge reference or null if a bridge of this type is not registered.
     */
     public final AnalyticsBridge getAnalyticsBridge() {
           if(__analyticsBridge == null) {
               __analyticsBridge = new AnalyticsBridge(null);
          }
          return __analyticsBridge;
     }

     /**
        Returns a reference to the registered AudioBridge.

        @return AudioBridge reference or null if a bridge of this type is not registered.
     */
     public final AudioBridge getAudioBridge() {
           if(__audioBridge == null) {
               __audioBridge = new AudioBridge(null);
          }
          return __audioBridge;
     }

     /**
        Returns a reference to the registered BarcodeBridge.

        @return BarcodeBridge reference or null if a bridge of this type is not registered.
     */
     public final BarcodeBridge getBarcodeBridge() {
           if(__barcodeBridge == null) {
               __barcodeBridge = new BarcodeBridge(null);
          }
          return __barcodeBridge;
     }

     /**
        Returns a reference to the registered BarometerBridge.

        @return BarometerBridge reference or null if a bridge of this type is not registered.
     */
     public final BarometerBridge getBarometerBridge() {
           if(__barometerBridge == null) {
               __barometerBridge = new BarometerBridge(null);
          }
          return __barometerBridge;
     }

     /**
        Returns a reference to the registered BluetoothBridge.

        @return BluetoothBridge reference or null if a bridge of this type is not registered.
     */
     public final BluetoothBridge getBluetoothBridge() {
           if(__bluetoothBridge == null) {
               __bluetoothBridge = new BluetoothBridge(null);
          }
          return __bluetoothBridge;
     }

     /**
        Returns a reference to the registered BrowserBridge.

        @return BrowserBridge reference or null if a bridge of this type is not registered.
     */
     public final BrowserBridge getBrowserBridge() {
           if(__browserBridge == null) {
               __browserBridge = new BrowserBridge(null);
          }
          return __browserBridge;
     }

     /**
        Returns a reference to the registered CalendarBridge.

        @return CalendarBridge reference or null if a bridge of this type is not registered.
     */
     public final CalendarBridge getCalendarBridge() {
           if(__calendarBridge == null) {
               __calendarBridge = new CalendarBridge(null);
          }
          return __calendarBridge;
     }

     /**
        Returns a reference to the registered CameraBridge.

        @return CameraBridge reference or null if a bridge of this type is not registered.
     */
     public final CameraBridge getCameraBridge() {
           if(__cameraBridge == null) {
               __cameraBridge = new CameraBridge(null);
          }
          return __cameraBridge;
     }

     /**
        Returns a reference to the registered CapabilitiesBridge.

        @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
     */
     public final CapabilitiesBridge getCapabilitiesBridge() {
           if(__capabilitiesBridge == null) {
               __capabilitiesBridge = new CapabilitiesBridge(null);
          }
          return __capabilitiesBridge;
     }

     /**
        Returns a reference to the registered CloudBridge.

        @return CloudBridge reference or null if a bridge of this type is not registered.
     */
     public final CloudBridge getCloudBridge() {
           if(__cloudBridge == null) {
               __cloudBridge = new CloudBridge(null);
          }
          return __cloudBridge;
     }

     /**
        Returns a reference to the registered CompressionBridge.

        @return CompressionBridge reference or null if a bridge of this type is not registered.
     */
     public final CompressionBridge getCompressionBridge() {
           if(__compressionBridge == null) {
               __compressionBridge = new CompressionBridge(null);
          }
          return __compressionBridge;
     }

     /**
        Returns a reference to the registered ConcurrentBridge.

        @return ConcurrentBridge reference or null if a bridge of this type is not registered.
     */
     public final ConcurrentBridge getConcurrentBridge() {
           if(__concurrentBridge == null) {
               __concurrentBridge = new ConcurrentBridge(null);
          }
          return __concurrentBridge;
     }

     /**
        Returns a reference to the registered ContactBridge.

        @return ContactBridge reference or null if a bridge of this type is not registered.
     */
     public final ContactBridge getContactBridge() {
           if(__contactBridge == null) {
               __contactBridge = new ContactBridge(null);
          }
          return __contactBridge;
     }

     /**
        Returns a reference to the registered CryptoBridge.

        @return CryptoBridge reference or null if a bridge of this type is not registered.
     */
     public final CryptoBridge getCryptoBridge() {
           if(__cryptoBridge == null) {
               __cryptoBridge = new CryptoBridge(null);
          }
          return __cryptoBridge;
     }

     /**
        Returns a reference to the registered DataStreamBridge.

        @return DataStreamBridge reference or null if a bridge of this type is not registered.
     */
     public final DataStreamBridge getDataStreamBridge() {
           if(__datastreamBridge == null) {
               __datastreamBridge = new DataStreamBridge(null);
          }
          return __datastreamBridge;
     }

     /**
        Returns a reference to the registered DatabaseBridge.

        @return DatabaseBridge reference or null if a bridge of this type is not registered.
     */
     public final DatabaseBridge getDatabaseBridge() {
           if(__databaseBridge == null) {
               __databaseBridge = new DatabaseBridge(null);
          }
          return __databaseBridge;
     }

     /**
        Returns a reference to the registered DesktopBridge.

        @return DesktopBridge reference or null if a bridge of this type is not registered.
     */
     public final DesktopBridge getDesktopBridge() {
           if(__desktopBridge == null) {
               __desktopBridge = new DesktopBridge(null);
          }
          return __desktopBridge;
     }

     /**
        Returns a reference to the registered DeviceBridge.

        @return DeviceBridge reference or null if a bridge of this type is not registered.
     */
     public final DeviceBridge getDeviceBridge() {
           if(__deviceBridge == null) {
               __deviceBridge = new DeviceBridge(null);
          }
          return __deviceBridge;
     }

     /**
        Returns a reference to the registered DisplayBridge.

        @return DisplayBridge reference or null if a bridge of this type is not registered.
     */
     public final DisplayBridge getDisplayBridge() {
           if(__displayBridge == null) {
               __displayBridge = new DisplayBridge(null);
          }
          return __displayBridge;
     }

     /**
        Returns a reference to the registered FacebookBridge.

        @return FacebookBridge reference or null if a bridge of this type is not registered.
     */
     public final FacebookBridge getFacebookBridge() {
           if(__facebookBridge == null) {
               __facebookBridge = new FacebookBridge(null);
          }
          return __facebookBridge;
     }

     /**
        Returns a reference to the registered FileBridge.

        @return FileBridge reference or null if a bridge of this type is not registered.
     */
     public final FileBridge getFileBridge() {
           if(__fileBridge == null) {
               __fileBridge = new FileBridge(null);
          }
          return __fileBridge;
     }

     /**
        Returns a reference to the registered FileSystemBridge.

        @return FileSystemBridge reference or null if a bridge of this type is not registered.
     */
     public final FileSystemBridge getFileSystemBridge() {
           if(__filesystemBridge == null) {
               __filesystemBridge = new FileSystemBridge(null);
          }
          return __filesystemBridge;
     }

     /**
        Returns a reference to the registered GeolocationBridge.

        @return GeolocationBridge reference or null if a bridge of this type is not registered.
     */
     public final GeolocationBridge getGeolocationBridge() {
           if(__geolocationBridge == null) {
               __geolocationBridge = new GeolocationBridge(null);
          }
          return __geolocationBridge;
     }

     /**
        Returns a reference to the registered GlobalizationBridge.

        @return GlobalizationBridge reference or null if a bridge of this type is not registered.
     */
     public final GlobalizationBridge getGlobalizationBridge() {
           if(__globalizationBridge == null) {
               __globalizationBridge = new GlobalizationBridge(null);
          }
          return __globalizationBridge;
     }

     /**
        Returns a reference to the registered GooglePlusBridge.

        @return GooglePlusBridge reference or null if a bridge of this type is not registered.
     */
     public final GooglePlusBridge getGooglePlusBridge() {
           if(__googleplusBridge == null) {
               __googleplusBridge = new GooglePlusBridge(null);
          }
          return __googleplusBridge;
     }

     /**
        Returns a reference to the registered GyroscopeBridge.

        @return GyroscopeBridge reference or null if a bridge of this type is not registered.
     */
     public final GyroscopeBridge getGyroscopeBridge() {
           if(__gyroscopeBridge == null) {
               __gyroscopeBridge = new GyroscopeBridge(null);
          }
          return __gyroscopeBridge;
     }

     /**
        Returns a reference to the registered ImagingBridge.

        @return ImagingBridge reference or null if a bridge of this type is not registered.
     */
     public final ImagingBridge getImagingBridge() {
           if(__imagingBridge == null) {
               __imagingBridge = new ImagingBridge(null);
          }
          return __imagingBridge;
     }

     /**
        Returns a reference to the registered InternalStorageBridge.

        @return InternalStorageBridge reference or null if a bridge of this type is not registered.
     */
     public final InternalStorageBridge getInternalStorageBridge() {
           if(__internalstorageBridge == null) {
               __internalstorageBridge = new InternalStorageBridge(null);
          }
          return __internalstorageBridge;
     }

     /**
        Returns a reference to the registered LifecycleBridge.

        @return LifecycleBridge reference or null if a bridge of this type is not registered.
     */
     public final LifecycleBridge getLifecycleBridge() {
           if(__lifecycleBridge == null) {
               __lifecycleBridge = new LifecycleBridge(null);
          }
          return __lifecycleBridge;
     }

     /**
        Returns a reference to the registered LinkedInBridge.

        @return LinkedInBridge reference or null if a bridge of this type is not registered.
     */
     public final LinkedInBridge getLinkedInBridge() {
           if(__linkedinBridge == null) {
               __linkedinBridge = new LinkedInBridge(null);
          }
          return __linkedinBridge;
     }

     /**
        Returns a reference to the registered LoggingBridge.

        @return LoggingBridge reference or null if a bridge of this type is not registered.
     */
     public final LoggingBridge getLoggingBridge() {
           if(__loggingBridge == null) {
               __loggingBridge = new LoggingBridge(null);
          }
          return __loggingBridge;
     }

     /**
        Returns a reference to the registered MagnetometerBridge.

        @return MagnetometerBridge reference or null if a bridge of this type is not registered.
     */
     public final MagnetometerBridge getMagnetometerBridge() {
           if(__magnetometerBridge == null) {
               __magnetometerBridge = new MagnetometerBridge(null);
          }
          return __magnetometerBridge;
     }

     /**
        Returns a reference to the registered MailBridge.

        @return MailBridge reference or null if a bridge of this type is not registered.
     */
     public final MailBridge getMailBridge() {
           if(__mailBridge == null) {
               __mailBridge = new MailBridge(null);
          }
          return __mailBridge;
     }

     /**
        Returns a reference to the registered ManagementBridge.

        @return ManagementBridge reference or null if a bridge of this type is not registered.
     */
     public final ManagementBridge getManagementBridge() {
           if(__managementBridge == null) {
               __managementBridge = new ManagementBridge(null);
          }
          return __managementBridge;
     }

     /**
        Returns a reference to the registered MapBridge.

        @return MapBridge reference or null if a bridge of this type is not registered.
     */
     public final MapBridge getMapBridge() {
           if(__mapBridge == null) {
               __mapBridge = new MapBridge(null);
          }
          return __mapBridge;
     }

     /**
        Returns a reference to the registered MessagingBridge.

        @return MessagingBridge reference or null if a bridge of this type is not registered.
     */
     public final MessagingBridge getMessagingBridge() {
           if(__messagingBridge == null) {
               __messagingBridge = new MessagingBridge(null);
          }
          return __messagingBridge;
     }

     /**
        Returns a reference to the registered NFCBridge.

        @return NFCBridge reference or null if a bridge of this type is not registered.
     */
     public final NFCBridge getNFCBridge() {
           if(__nfcBridge == null) {
               __nfcBridge = new NFCBridge(null);
          }
          return __nfcBridge;
     }

     /**
        Returns a reference to the registered NetworkInfoBridge.

        @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkInfoBridge getNetworkInfoBridge() {
           if(__networkinfoBridge == null) {
               __networkinfoBridge = new NetworkInfoBridge(null);
          }
          return __networkinfoBridge;
     }

     /**
        Returns a reference to the registered NetworkNamingBridge.

        @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkNamingBridge getNetworkNamingBridge() {
           if(__networknamingBridge == null) {
               __networknamingBridge = new NetworkNamingBridge(null);
          }
          return __networknamingBridge;
     }

     /**
        Returns a reference to the registered NetworkReachabilityBridge.

        @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkReachabilityBridge getNetworkReachabilityBridge() {
           if(__networkreachabilityBridge == null) {
               __networkreachabilityBridge = new NetworkReachabilityBridge(null);
          }
          return __networkreachabilityBridge;
     }

     /**
        Returns a reference to the registered NetworkStatusBridge.

        @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkStatusBridge getNetworkStatusBridge() {
           if(__networkstatusBridge == null) {
               __networkstatusBridge = new NetworkStatusBridge(null);
          }
          return __networkstatusBridge;
     }

     /**
        Returns a reference to the registered NotificationBridge.

        @return NotificationBridge reference or null if a bridge of this type is not registered.
     */
     public final NotificationBridge getNotificationBridge() {
           if(__notificationBridge == null) {
               __notificationBridge = new NotificationBridge(null);
          }
          return __notificationBridge;
     }

     /**
        Returns a reference to the registered NotificationLocalBridge.

        @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
     */
     public final NotificationLocalBridge getNotificationLocalBridge() {
           if(__notificationlocalBridge == null) {
               __notificationlocalBridge = new NotificationLocalBridge(null);
          }
          return __notificationlocalBridge;
     }

     /**
        Returns a reference to the registered OAuthBridge.

        @return OAuthBridge reference or null if a bridge of this type is not registered.
     */
     public final OAuthBridge getOAuthBridge() {
           if(__oauthBridge == null) {
               __oauthBridge = new OAuthBridge(null);
          }
          return __oauthBridge;
     }

     /**
        Returns a reference to the registered OCRBridge.

        @return OCRBridge reference or null if a bridge of this type is not registered.
     */
     public final OCRBridge getOCRBridge() {
           if(__ocrBridge == null) {
               __ocrBridge = new OCRBridge(null);
          }
          return __ocrBridge;
     }

     /**
        Returns a reference to the registered OSBridge.

        @return OSBridge reference or null if a bridge of this type is not registered.
     */
     public final OSBridge getOSBridge() {
           if(__osBridge == null) {
               __osBridge = new OSBridge(null);
          }
          return __osBridge;
     }

     /**
        Returns a reference to the registered OpenIdBridge.

        @return OpenIdBridge reference or null if a bridge of this type is not registered.
     */
     public final OpenIdBridge getOpenIdBridge() {
           if(__openidBridge == null) {
               __openidBridge = new OpenIdBridge(null);
          }
          return __openidBridge;
     }

     /**
        Returns a reference to the registered PrintingBridge.

        @return PrintingBridge reference or null if a bridge of this type is not registered.
     */
     public final PrintingBridge getPrintingBridge() {
           if(__printingBridge == null) {
               __printingBridge = new PrintingBridge(null);
          }
          return __printingBridge;
     }

     /**
        Returns a reference to the registered ProximityBridge.

        @return ProximityBridge reference or null if a bridge of this type is not registered.
     */
     public final ProximityBridge getProximityBridge() {
           if(__proximityBridge == null) {
               __proximityBridge = new ProximityBridge(null);
          }
          return __proximityBridge;
     }

     /**
        Returns a reference to the registered QRCodeBridge.

        @return QRCodeBridge reference or null if a bridge of this type is not registered.
     */
     public final QRCodeBridge getQRCodeBridge() {
           if(__qrcodeBridge == null) {
               __qrcodeBridge = new QRCodeBridge(null);
          }
          return __qrcodeBridge;
     }

     /**
        Returns a reference to the registered RSSBridge.

        @return RSSBridge reference or null if a bridge of this type is not registered.
     */
     public final RSSBridge getRSSBridge() {
           if(__rssBridge == null) {
               __rssBridge = new RSSBridge(null);
          }
          return __rssBridge;
     }

     /**
        Returns a reference to the registered RuntimeBridge.

        @return RuntimeBridge reference or null if a bridge of this type is not registered.
     */
     public final RuntimeBridge getRuntimeBridge() {
           if(__runtimeBridge == null) {
               __runtimeBridge = new RuntimeBridge(null);
          }
          return __runtimeBridge;
     }

     /**
        Returns a reference to the registered SecurityBridge.

        @return SecurityBridge reference or null if a bridge of this type is not registered.
     */
     public final SecurityBridge getSecurityBridge() {
           if(__securityBridge == null) {
               __securityBridge = new SecurityBridge(null);
          }
          return __securityBridge;
     }

     /**
        Returns a reference to the registered ServiceBridge.

        @return ServiceBridge reference or null if a bridge of this type is not registered.
     */
     public final ServiceBridge getServiceBridge() {
           if(__serviceBridge == null) {
               __serviceBridge = new ServiceBridge(null);
          }
          return __serviceBridge;
     }

     /**
        Returns a reference to the registered SettingsBridge.

        @return SettingsBridge reference or null if a bridge of this type is not registered.
     */
     public final SettingsBridge getSettingsBridge() {
           if(__settingsBridge == null) {
               __settingsBridge = new SettingsBridge(null);
          }
          return __settingsBridge;
     }

     /**
        Returns a reference to the registered SocketBridge.

        @return SocketBridge reference or null if a bridge of this type is not registered.
     */
     public final SocketBridge getSocketBridge() {
           if(__socketBridge == null) {
               __socketBridge = new SocketBridge(null);
          }
          return __socketBridge;
     }

     /**
        Returns a reference to the registered StoreBridge.

        @return StoreBridge reference or null if a bridge of this type is not registered.
     */
     public final StoreBridge getStoreBridge() {
           if(__storeBridge == null) {
               __storeBridge = new StoreBridge(null);
          }
          return __storeBridge;
     }

     /**
        Returns a reference to the registered TelephonyBridge.

        @return TelephonyBridge reference or null if a bridge of this type is not registered.
     */
     public final TelephonyBridge getTelephonyBridge() {
           if(__telephonyBridge == null) {
               __telephonyBridge = new TelephonyBridge(null);
          }
          return __telephonyBridge;
     }

     /**
        Returns a reference to the registered TimerBridge.

        @return TimerBridge reference or null if a bridge of this type is not registered.
     */
     public final TimerBridge getTimerBridge() {
           if(__timerBridge == null) {
               __timerBridge = new TimerBridge(null);
          }
          return __timerBridge;
     }

     /**
        Returns a reference to the registered TwitterBridge.

        @return TwitterBridge reference or null if a bridge of this type is not registered.
     */
     public final TwitterBridge getTwitterBridge() {
           if(__twitterBridge == null) {
               __twitterBridge = new TwitterBridge(null);
          }
          return __twitterBridge;
     }

     /**
        Returns a reference to the registered UIBridge.

        @return UIBridge reference or null if a bridge of this type is not registered.
     */
     public final UIBridge getUIBridge() {
           if(__uiBridge == null) {
               __uiBridge = new UIBridge(null);
          }
          return __uiBridge;
     }

     /**
        Returns a reference to the registered UpdateBridge.

        @return UpdateBridge reference or null if a bridge of this type is not registered.
     */
     public final UpdateBridge getUpdateBridge() {
           if(__updateBridge == null) {
               __updateBridge = new UpdateBridge(null);
          }
          return __updateBridge;
     }

     /**
        Returns a reference to the registered VibrationBridge.

        @return VibrationBridge reference or null if a bridge of this type is not registered.
     */
     public final VibrationBridge getVibrationBridge() {
           if(__vibrationBridge == null) {
               __vibrationBridge = new VibrationBridge(null);
          }
          return __vibrationBridge;
     }

     /**
        Returns a reference to the registered VideoBridge.

        @return VideoBridge reference or null if a bridge of this type is not registered.
     */
     public final VideoBridge getVideoBridge() {
           if(__videoBridge == null) {
               __videoBridge = new VideoBridge(null);
          }
          return __videoBridge;
     }

     /**
        Returns a reference to the registered WalletBridge.

        @return WalletBridge reference or null if a bridge of this type is not registered.
     */
     public final WalletBridge getWalletBridge() {
           if(__walletBridge == null) {
               __walletBridge = new WalletBridge(null);
          }
          return __walletBridge;
     }

     /**
        Returns a reference to the registered XMLBridge.

        @return XMLBridge reference or null if a bridge of this type is not registered.
     */
     public final XMLBridge getXMLBridge() {
           if(__xmlBridge == null) {
               __xmlBridge = new XMLBridge(null);
          }
          return __xmlBridge;
     }

     /**
        Provides a bridge to handle API calls for the given interface name.

        @param bridgeType String with the interface name required.
        @return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.
     */
     public final APIBridge getBridge(String bridgeType) {
          switch(bridgeType) {

               case "IAcceleration":
                    return getAccelerationBridge();

               case "IAds":
                    return getAdsBridge();

               case "IAlarm":
                    return getAlarmBridge();

               case "IAmbientLight":
                    return getAmbientLightBridge();

               case "IAnalytics":
                    return getAnalyticsBridge();

               case "IAudio":
                    return getAudioBridge();

               case "IBarcode":
                    return getBarcodeBridge();

               case "IBarometer":
                    return getBarometerBridge();

               case "IBluetooth":
                    return getBluetoothBridge();

               case "IBrowser":
                    return getBrowserBridge();

               case "ICalendar":
                    return getCalendarBridge();

               case "ICamera":
                    return getCameraBridge();

               case "ICapabilities":
                    return getCapabilitiesBridge();

               case "ICloud":
                    return getCloudBridge();

               case "ICompression":
                    return getCompressionBridge();

               case "IConcurrent":
                    return getConcurrentBridge();

               case "IContact":
                    return getContactBridge();

               case "ICrypto":
                    return getCryptoBridge();

               case "IDataStream":
                    return getDataStreamBridge();

               case "IDatabase":
                    return getDatabaseBridge();

               case "IDesktop":
                    return getDesktopBridge();

               case "IDevice":
                    return getDeviceBridge();

               case "IDisplay":
                    return getDisplayBridge();

               case "IFacebook":
                    return getFacebookBridge();

               case "IFile":
                    return getFileBridge();

               case "IFileSystem":
                    return getFileSystemBridge();

               case "IGeolocation":
                    return getGeolocationBridge();

               case "IGlobalization":
                    return getGlobalizationBridge();

               case "IGooglePlus":
                    return getGooglePlusBridge();

               case "IGyroscope":
                    return getGyroscopeBridge();

               case "IImaging":
                    return getImagingBridge();

               case "IInternalStorage":
                    return getInternalStorageBridge();

               case "ILifecycle":
                    return getLifecycleBridge();

               case "ILinkedIn":
                    return getLinkedInBridge();

               case "ILogging":
                    return getLoggingBridge();

               case "IMagnetometer":
                    return getMagnetometerBridge();

               case "IMail":
                    return getMailBridge();

               case "IManagement":
                    return getManagementBridge();

               case "IMap":
                    return getMapBridge();

               case "IMessaging":
                    return getMessagingBridge();

               case "INFC":
                    return getNFCBridge();

               case "INetworkInfo":
                    return getNetworkInfoBridge();

               case "INetworkNaming":
                    return getNetworkNamingBridge();

               case "INetworkReachability":
                    return getNetworkReachabilityBridge();

               case "INetworkStatus":
                    return getNetworkStatusBridge();

               case "INotification":
                    return getNotificationBridge();

               case "INotificationLocal":
                    return getNotificationLocalBridge();

               case "IOAuth":
                    return getOAuthBridge();

               case "IOCR":
                    return getOCRBridge();

               case "IOS":
                    return getOSBridge();

               case "IOpenId":
                    return getOpenIdBridge();

               case "IPrinting":
                    return getPrintingBridge();

               case "IProximity":
                    return getProximityBridge();

               case "IQRCode":
                    return getQRCodeBridge();

               case "IRSS":
                    return getRSSBridge();

               case "IRuntime":
                    return getRuntimeBridge();

               case "ISecurity":
                    return getSecurityBridge();

               case "IService":
                    return getServiceBridge();

               case "ISettings":
                    return getSettingsBridge();

               case "ISocket":
                    return getSocketBridge();

               case "IStore":
                    return getStoreBridge();

               case "ITelephony":
                    return getTelephonyBridge();

               case "ITimer":
                    return getTimerBridge();

               case "ITwitter":
                    return getTwitterBridge();

               case "IUI":
                    return getUIBridge();

               case "IUpdate":
                    return getUpdateBridge();

               case "IVibration":
                    return getVibrationBridge();

               case "IVideo":
                    return getVideoBridge();

               case "IWallet":
                    return getWalletBridge();

               case "IXML":
                    return getXMLBridge();

               default:
                    return null;
          }
     }

     /**
        Method that returns the API version of the implementation.
     */
     public String getAPIVersion() {
          return "v2.0.3";
     }

     /**
        Returns a reference to the Platform Context
     */
     private AppContextBridge __appcontextBridge = null;

     /**
        Returns a reference to the Platform Context

        @return Reference to the platform context
        @since ARP1.0
     */
     public AppContextBridge getPlatformContext() {
           if(__appcontextBridge == null) {
               __appcontextBridge = new AppContextBridge(null);
          }
          return __appcontextBridge;
     }

     /**
        Returns a reference to the Webview platform context
     */
     private AppContextWebviewBridge __appcontextwebviewBridge = null;

     /**
        Returns a reference to the Webview platform context

        @return Reference to the Webview Context
        @since ARP1.0
     */
     public AppContextWebviewBridge getPlatformContextWeb() {
           if(__appcontextwebviewBridge == null) {
               __appcontextwebviewBridge = new AppContextWebviewBridge(null);
          }
          return __appcontextwebviewBridge;
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
