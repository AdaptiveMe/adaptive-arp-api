/*
* =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
*
* (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*
* Original author:
*
*     * Carlos Lozano Diez
*                 <http://github.com/carloslozano>
*                 <http://twitter.com/adaptivecoder>
*                 <mailto:carlos@adaptive.me>
*
* Contributors:
*
*     *
*
* =====================================================================================================================
*/

module Adaptive {

     export interface IAdaptiveRP {

     }

     export interface IBaseSecurity extends IAdaptiveRP {

     }

     export interface IBaseApplication extends IAdaptiveRP {

     }

     export interface IAppContext extends IAdaptiveRP {

     }

     export interface IBaseSocial extends IAdaptiveRP {

     }

     export interface IAppRegistry extends IAdaptiveRP {

     }

     export interface IBasePIM extends IAdaptiveRP {

     }

     export interface IBaseReader extends IAdaptiveRP {

     }

     export interface IBaseCallback extends IAdaptiveRP {

     }

     export interface IBaseSensor extends IAdaptiveRP {

     }

     export interface IAppServer extends IAdaptiveRP {

     }

     export interface IAppContextWebview extends IAdaptiveRP {

     }

     export interface IBaseCommunication extends IAdaptiveRP {

     }

     export interface IAppResourceHandler extends IAdaptiveRP {

     }

     export interface IBaseData extends IAdaptiveRP {

     }

     export interface IAppServerManager extends IAdaptiveRP {

     }

     export interface IBaseNotification extends IAdaptiveRP {

     }

     export interface IBaseUtil extends IAdaptiveRP {

     }

     export interface IAppResource extends IAdaptiveRP {

     }

     export interface IBaseListener extends IAdaptiveRP {

     }

     export interface IBaseMedia extends IAdaptiveRP {

     }

     export interface IBaseUI extends IAdaptiveRP {

     }

     export interface IBaseSystem extends IAdaptiveRP {

     }

     export interface IBaseCommerce extends IAdaptiveRP {

     }

     export interface IStore extends IBaseCommerce {

     }

     export interface IInternalStorage extends IBaseData {

     }

     export interface IMessagingCallback extends IBaseCallback {


     }

     export class IMessagingCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SIMNotPresent = new IMessagingCallbackErrorEnum("SIMNotPresent");
          static EmailAccountNotFound = new IMessagingCallbackErrorEnum("EmailAccountNotFound");
          static NotSent = new IMessagingCallbackErrorEnum("NotSent");
          static WrongParams = new IMessagingCallbackErrorEnum("WrongParams");
          static NotSupported = new IMessagingCallbackErrorEnum("NotSupported");
          static Unknown = new IMessagingCallbackErrorEnum("Unknown");
     }


     export class IMessagingCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static UnableToSentAll = new IMessagingCallbackWarningEnum("UnableToSentAll");
          static UnableToFetchAttachment = new IMessagingCallbackWarningEnum("UnableToFetchAttachment");
          static Unknown = new IMessagingCallbackWarningEnum("Unknown");
     }

     export interface IMap extends IBaseUI {

     }

     export interface IBluetooth extends IBaseCommunication {

     }

     export interface IContactPhotoResultCallback extends IBaseCallback {


     }

     export class IContactPhotoResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactPhotoResultCallbackErrorEnum("NoPermission");
          static Wrong_Params = new IContactPhotoResultCallbackErrorEnum("Wrong_Params");
          static No_Photo = new IContactPhotoResultCallbackErrorEnum("No_Photo");
          static Unknown = new IContactPhotoResultCallbackErrorEnum("Unknown");
     }


     export class IContactPhotoResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactPhotoResultCallbackWarningEnum("LimitExceeded");
          static No_Matches = new IContactPhotoResultCallbackWarningEnum("No_Matches");
          static Unknown = new IContactPhotoResultCallbackWarningEnum("Unknown");
     }

     export interface IManagement extends IBaseApplication {

     }

     export interface IOAuth extends IBaseSecurity {

     }

     export interface INetworkStatus extends IBaseCommunication {

     }

     export interface IAlarm extends IBaseNotification {

     }

     export interface IFileResultCallback extends IBaseCallback {


     }

     export class IFileResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static FileExists = new IFileResultCallbackErrorEnum("FileExists");
          static InsufficientSpace = new IFileResultCallbackErrorEnum("InsufficientSpace");
          static Unauthorized = new IFileResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileResultCallbackErrorEnum("Unknown");
     }


     export class IFileResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SourceNotDeleted = new IFileResultCallbackWarningEnum("SourceNotDeleted");
          static RootDirectory = new IFileResultCallbackWarningEnum("RootDirectory");
          static Unknown = new IFileResultCallbackWarningEnum("Unknown");
     }

     export interface IWallet extends IBaseCommerce {

     }

     export interface INetworkInfo extends IBaseCommunication {

     }

     export interface IAmbientLight extends IBaseSensor {

     }

     export interface IMessaging extends IBasePIM {

     }

     export interface IFileDataResultCallback extends IBaseCallback {


     }

     export class IFileDataResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileDataResultCallbackErrorEnum("InexistentFile");
          static InsufficientSpace = new IFileDataResultCallbackErrorEnum("InsufficientSpace");
          static Unauthorized = new IFileDataResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileDataResultCallbackErrorEnum("Unknown");
     }

     export class IFileDataResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
          static Unknown = new IFileDataResultCallbackWarningEnum("Unknown");
     }

     export interface ICalendar extends IBasePIM {

     }

     export interface IVideo extends IBaseMedia {

     }

     export interface INetworkNaming extends IBaseCommunication {

     }

     export interface IRuntime extends IBaseSystem {

     }

     export interface IGooglePlus extends IBaseSocial {

     }

     export interface IGlobalization extends IBaseApplication {

     }

     export interface ITwitter extends IBaseSocial {

     }

     export interface INetworkReachabilityCallback extends IBaseCallback {


     }

     export class INetworkReachabilityCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new INetworkReachabilityCallbackErrorEnum("Forbidden");
          static NotFound = new INetworkReachabilityCallbackErrorEnum("NotFound");
          static MethodNotAllowed = new INetworkReachabilityCallbackErrorEnum("MethodNotAllowed");
          static NotAllowed = new INetworkReachabilityCallbackErrorEnum("NotAllowed");
          static NotAuthenticated = new INetworkReachabilityCallbackErrorEnum("NotAuthenticated");
          static TimeOut = new INetworkReachabilityCallbackErrorEnum("TimeOut");
          static NoResponse = new INetworkReachabilityCallbackErrorEnum("NoResponse");
          static Unreachable = new INetworkReachabilityCallbackErrorEnum("Unreachable");
          static Wrong_Params = new INetworkReachabilityCallbackErrorEnum("Wrong_Params");
          static MalformedUrl = new INetworkReachabilityCallbackErrorEnum("MalformedUrl");
          static DomainUnresolvable = new INetworkReachabilityCallbackErrorEnum("DomainUnresolvable");
          static Unknown = new INetworkReachabilityCallbackErrorEnum("Unknown");
     }


     export class INetworkReachabilityCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static IncorrectScheme = new INetworkReachabilityCallbackWarningEnum("IncorrectScheme");
          static NotSecure = new INetworkReachabilityCallbackWarningEnum("NotSecure");
          static NotTrusted = new INetworkReachabilityCallbackWarningEnum("NotTrusted");
          static Redirected = new INetworkReachabilityCallbackWarningEnum("Redirected");
          static NotRegisteredService = new INetworkReachabilityCallbackWarningEnum("NotRegisteredService");
          static Unknown = new INetworkReachabilityCallbackWarningEnum("Unknown");
     }

     export interface INFC extends IBaseReader {

     }

     export interface IAnalytics extends IBaseApplication {

     }

     export interface ILogging extends IBaseUtil {


     }

     export class ILoggingLogLevelEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static DEBUG = new ILoggingLogLevelEnum("DEBUG");
          static WARN = new ILoggingLogLevelEnum("WARN");
          static ERROR = new ILoggingLogLevelEnum("ERROR");
          static INFO = new ILoggingLogLevelEnum("INFO");
          static Unknown = new ILoggingLogLevelEnum("Unknown");
     }

     export interface IFacebook extends IBaseSocial {

     }

     export interface ICrypto extends IBaseUtil {

     }

     export interface ILinkedIn extends IBaseSocial {

     }

     export interface IRSS extends IBaseSocial {

     }

     export interface IDevice extends IBaseSystem {

     }

     export interface IMagnetometer extends IBaseSensor {

     }

     export interface IContactResultCallback extends IBaseCallback {


     }

     export class IContactResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new IContactResultCallbackErrorEnum("NoPermission");
          static Wrong_Params = new IContactResultCallbackErrorEnum("Wrong_Params");
          static Unknown = new IContactResultCallbackErrorEnum("Unknown");
     }


     export class IContactResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static LimitExceeded = new IContactResultCallbackWarningEnum("LimitExceeded");
          static No_Matches = new IContactResultCallbackWarningEnum("No_Matches");
          static Unknown = new IContactResultCallbackWarningEnum("Unknown");
     }

     export interface INotificationLocal extends IBaseNotification {

     }

     export interface IContact extends IBasePIM {

     }

     export interface ICapabilities extends IBaseSystem {


     }

     export class ICapabilitiesButtonEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ICapabilitiesButtonEnum("HomeButton");
          static BackButton = new ICapabilitiesButtonEnum("BackButton");
          static OptionButton = new ICapabilitiesButtonEnum("OptionButton");
          static Unknown = new ICapabilitiesButtonEnum("Unknown");
     }


     export class ICapabilitiesCommunicationEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Calendar = new ICapabilitiesCommunicationEnum("Calendar");
          static Contact = new ICapabilitiesCommunicationEnum("Contact");
          static Mail = new ICapabilitiesCommunicationEnum("Mail");
          static Messaging = new ICapabilitiesCommunicationEnum("Messaging");
          static Telephony = new ICapabilitiesCommunicationEnum("Telephony");
          static Unknown = new ICapabilitiesCommunicationEnum("Unknown");
     }


     export class ICapabilitiesDataEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Database = new ICapabilitiesDataEnum("Database");
          static File = new ICapabilitiesDataEnum("File");
          static Cloud = new ICapabilitiesDataEnum("Cloud");
          static Unknown = new ICapabilitiesDataEnum("Unknown");
     }


     export class ICapabilitiesMediaEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Audio_Playback = new ICapabilitiesMediaEnum("Audio_Playback");
          static Audio_Recording = new ICapabilitiesMediaEnum("Audio_Recording");
          static Camera = new ICapabilitiesMediaEnum("Camera");
          static Video_Playback = new ICapabilitiesMediaEnum("Video_Playback");
          static Video_Recording = new ICapabilitiesMediaEnum("Video_Recording");
          static Unknown = new ICapabilitiesMediaEnum("Unknown");
     }


     export class ICapabilitiesNetEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static GSM = new ICapabilitiesNetEnum("GSM");
          static GPRS = new ICapabilitiesNetEnum("GPRS");
          static HSDPA = new ICapabilitiesNetEnum("HSDPA");
          static LTE = new ICapabilitiesNetEnum("LTE");
          static WIFI = new ICapabilitiesNetEnum("WIFI");
          static Ethernet = new ICapabilitiesNetEnum("Ethernet");
          static Unknown = new ICapabilitiesNetEnum("Unknown");
     }


     export class ICapabilitiesNotificationEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Alarm = new ICapabilitiesNotificationEnum("Alarm");
          static LocalNotification = new ICapabilitiesNotificationEnum("LocalNotification");
          static RemoteNotification = new ICapabilitiesNotificationEnum("RemoteNotification");
          static Vibration = new ICapabilitiesNotificationEnum("Vibration");
          static Unknown = new ICapabilitiesNotificationEnum("Unknown");
     }


     export class ICapabilitiesSensorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Accelerometer = new ICapabilitiesSensorEnum("Accelerometer");
          static AmbientLight = new ICapabilitiesSensorEnum("AmbientLight");
          static Barometer = new ICapabilitiesSensorEnum("Barometer");
          static Geolocation = new ICapabilitiesSensorEnum("Geolocation");
          static Gyroscope = new ICapabilitiesSensorEnum("Gyroscope");
          static Magnetometer = new ICapabilitiesSensorEnum("Magnetometer");
          static Proximity = new ICapabilitiesSensorEnum("Proximity");
          static Unknown = new ICapabilitiesSensorEnum("Unknown");
     }

     export interface IFileListResultCallback extends IBaseCallback {


     }

     export class IFileListResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static InexistentFile = new IFileListResultCallbackErrorEnum("InexistentFile");
          static Unauthorized = new IFileListResultCallbackErrorEnum("Unauthorized");
          static Unknown = new IFileListResultCallbackErrorEnum("Unknown");
     }


     export class IFileListResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
          static Unknown = new IFileListResultCallbackWarningEnum("Unknown");
     }

     export interface ITelephony extends IBaseCommunication {

     }

     export interface IUpdate extends IBaseApplication {

     }

     export interface ISecurity extends IBaseSecurity {

     }

     export interface IGeolocationListener extends IBaseListener {


     }

     export class IGeolocationListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Disabled = new IGeolocationListenerErrorEnum("Disabled");
          static RestrictedAccess = new IGeolocationListenerErrorEnum("RestrictedAccess");
          static DeniedAccess = new IGeolocationListenerErrorEnum("DeniedAccess");
          static StatusNotDetermined = new IGeolocationListenerErrorEnum("StatusNotDetermined");
          static Unknown = new IGeolocationListenerErrorEnum("Unknown");
     }


     export class IGeolocationListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HighDoP = new IGeolocationListenerWarningEnum("HighDoP");
          static StaleData = new IGeolocationListenerWarningEnum("StaleData");
          static Unknown = new IGeolocationListenerWarningEnum("Unknown");
     }

     export interface ICloud extends IBaseData {

     }

     export interface IOS extends IBaseSystem {

     }

     export interface ICompression extends IBaseUtil {

     }

     export interface IButtonListener extends IBaseListener {


     }

     export class IButtonListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Present = new IButtonListenerErrorEnum("Not_Present");
          static Unknown = new IButtonListenerErrorEnum("Unknown");
     }


     export class IButtonListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
          static Unknown = new IButtonListenerWarningEnum("Unknown");
     }

     export interface ITableResultCallback extends IBaseCallback {


     }

     export class ITableResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new ITableResultCallbackErrorEnum("NoSpace");
          static ReadOnlyTable = new ITableResultCallbackErrorEnum("ReadOnlyTable");
          static SqlException = new ITableResultCallbackErrorEnum("SqlException");
          static DatabaseNotFound = new ITableResultCallbackErrorEnum("DatabaseNotFound");
          static NoTableFound = new ITableResultCallbackErrorEnum("NoTableFound");
          static Unknown = new ITableResultCallbackErrorEnum("Unknown");
     }


     export class ITableResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static TableExists = new ITableResultCallbackWarningEnum("TableExists");
          static TableLocked = new ITableResultCallbackWarningEnum("TableLocked");
          static NoResults = new ITableResultCallbackWarningEnum("NoResults");
          static Unknown = new ITableResultCallbackWarningEnum("Unknown");
     }

     export interface ILifecycle extends IBaseApplication {

     }

     export interface IAppServerListener extends IBaseListener {

     }

     export interface IAds extends IBaseCommerce {

     }

     export interface ISecureKVResultCallback extends IBaseCallback {


     }

     export class ISecureKVResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoPermission = new ISecureKVResultCallbackErrorEnum("NoPermission");
          static NoMatchesFound = new ISecureKVResultCallbackErrorEnum("NoMatchesFound");
          static Unknown = new ISecureKVResultCallbackErrorEnum("Unknown");
     }


     export class ISecureKVResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
          static Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");
     }

     export interface IAppResourceCallback extends IBaseCallback {


     }

     export class IAppResourceCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NotFound = new IAppResourceCallbackErrorEnum("NotFound");
          static NoPermission = new IAppResourceCallbackErrorEnum("NoPermission");
          static Unknown = new IAppResourceCallbackErrorEnum("Unknown");
     }


     export class IAppResourceCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static PartialContent = new IAppResourceCallbackWarningEnum("PartialContent");
          static TooLarge = new IAppResourceCallbackWarningEnum("TooLarge");
          static LinkedResource = new IAppResourceCallbackWarningEnum("LinkedResource");
          static Unknown = new IAppResourceCallbackWarningEnum("Unknown");
     }

     export interface IDatabaseResultCallback extends IBaseCallback {


     }

     export class IDatabaseResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NoSpace = new IDatabaseResultCallbackErrorEnum("NoSpace");
          static SqlException = new IDatabaseResultCallbackErrorEnum("SqlException");
          static NotDeleted = new IDatabaseResultCallbackErrorEnum("NotDeleted");
          static Unknown = new IDatabaseResultCallbackErrorEnum("Unknown");
     }


     export class IDatabaseResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static DatabaseExists = new IDatabaseResultCallbackWarningEnum("DatabaseExists");
          static IsOpen = new IDatabaseResultCallbackWarningEnum("IsOpen");
          static Unknown = new IDatabaseResultCallbackWarningEnum("Unknown");
     }

     export interface IMail extends IBasePIM {

     }

     export interface IOCR extends IBaseReader {

     }

     export interface IBarometer extends IBaseSensor {

     }

     export interface IDesktop extends IBaseUI {

     }

     export interface IService extends IBaseCommunication {

     }

     export interface IAccelerationListener extends IBaseListener {


     }

     export class IAccelerationListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Unauthorized = new IAccelerationListenerErrorEnum("Unauthorized");
          static Unavailable = new IAccelerationListenerErrorEnum("Unavailable");
          static Unknown = new IAccelerationListenerErrorEnum("Unknown");
     }


     export class IAccelerationListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NeedsCalibration = new IAccelerationListenerWarningEnum("NeedsCalibration");
          static Stale = new IAccelerationListenerWarningEnum("Stale");
          static Unknown = new IAccelerationListenerWarningEnum("Unknown");
     }

     export interface IXML extends IBaseData {

     }

     export interface IQRCode extends IBaseReader {

     }

     export interface IAccelerometer extends IBaseSensor {

     }

     export interface IConcurrent extends IBaseUtil {

     }

     export interface ITimer extends IBaseUtil {

     }

     export interface IDisplay extends IBaseSystem {

     }

     export interface ISettings extends IBaseApplication {

     }

     export interface IFileSystem extends IBaseData {

     }

     export interface IAudio extends IBaseMedia {

     }

     export interface IDataStream extends IBaseData {

     }

     export interface IGeolocation extends IBaseSensor {

     }

     export interface IDatabase extends IBaseData {

     }

     export interface ILifecycleListener extends IBaseListener {


     }

     export class ILifecycleListenerErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Runtime = new ILifecycleListenerErrorEnum("Runtime");
          static Implementation = new ILifecycleListenerErrorEnum("Implementation");
          static Killed = new ILifecycleListenerErrorEnum("Killed");
          static Unknown = new ILifecycleListenerErrorEnum("Unknown");
     }


     export class ILifecycleListenerWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static MemoryLow = new ILifecycleListenerWarningEnum("MemoryLow");
          static BatteryLow = new ILifecycleListenerWarningEnum("BatteryLow");
          static Unknown = new ILifecycleListenerWarningEnum("Unknown");
     }

     export interface IUI extends IBaseUI {

     }

     export interface INotification extends IBaseNotification {

     }

     export interface IBrowser extends IBaseUI {

     }

     export interface IProximity extends IBaseSensor {

     }

     export interface IGyroscope extends IBaseSensor {

     }

     export interface IFilePath extends IBaseData {

     }

     export interface ISession extends IBaseCommunication {

     }

     export interface IServiceResultCallback extends IBaseCallback {


     }

     export class IServiceResultCallbackErrorEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Forbidden = new IServiceResultCallbackErrorEnum("Forbidden");
          static NotFound = new IServiceResultCallbackErrorEnum("NotFound");
          static MethodNotAllowed = new IServiceResultCallbackErrorEnum("MethodNotAllowed");
          static NotAllowed = new IServiceResultCallbackErrorEnum("NotAllowed");
          static NotAuthenticated = new IServiceResultCallbackErrorEnum("NotAuthenticated");
          static TimeOut = new IServiceResultCallbackErrorEnum("TimeOut");
          static NoResponse = new IServiceResultCallbackErrorEnum("NoResponse");
          static ServerError = new IServiceResultCallbackErrorEnum("ServerError");
          static Unreachable = new IServiceResultCallbackErrorEnum("Unreachable");
          static MalformedUrl = new IServiceResultCallbackErrorEnum("MalformedUrl");
          static NotRegisteredService = new IServiceResultCallbackErrorEnum("NotRegisteredService");
          static Unknown = new IServiceResultCallbackErrorEnum("Unknown");
     }


     export class IServiceResultCallbackWarningEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static NotSecure = new IServiceResultCallbackWarningEnum("NotSecure");
          static NotTrusted = new IServiceResultCallbackWarningEnum("NotTrusted");
          static Redirected = new IServiceResultCallbackWarningEnum("Redirected");
          static Wrong_Params = new IServiceResultCallbackWarningEnum("Wrong_Params");
          static Unknown = new IServiceResultCallbackWarningEnum("Unknown");
     }

     export interface IBarcode extends IBaseReader {

     }

     export interface IPrinting extends IBaseApplication {

     }

     export interface IVibration extends IBaseNotification {

     }

     export interface IImaging extends IBaseMedia {

     }

     export interface ICamera extends IBaseMedia {

     }

     export interface INetworkReachability extends IBaseCommunication {

     }

     export interface IOpenId extends IBaseSecurity {

     }

     export interface ISocket extends IBaseCommunication {

     }

     export interface IFile extends IFilePath {

     }

     export class ContactPersonalInfo {

          /** Field Declarations **/
          lastName : string;
          middleName : string;
          name : string;
          title : ContactPersonalInfoTitleEnum;

          /** Initialization **/
          constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitleEnum) {
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }

     }


     export class ContactPersonalInfoTitleEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Mr = new ContactPersonalInfoTitleEnum("Mr");
          static Mrs = new ContactPersonalInfoTitleEnum("Mrs");
          static Ms = new ContactPersonalInfoTitleEnum("Ms");
          static Dr = new ContactPersonalInfoTitleEnum("Dr");
          static Unknown = new ContactPersonalInfoTitleEnum("Unknown");
     }

     export class ContactTag {

          /** Field Declarations **/
          dataValue : string;
          name : string;

          /** Initialization **/
          constructor(name: string, dataValue: string) {
               this.name = name;
               this.dataValue = dataValue;
          }

     }

     export class ContactWebsite {

          /** Field Declarations **/
          url : string;

          /** Initialization **/
          constructor(url: string) {
               this.url = url;
          }

     }

     export class OSInfo {

          /** Field Declarations **/
          name : string;
          vendor : string;
          version : string;

          /** Initialization **/
          constructor(name: string, version: string, vendor: string) {
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }

     }

     export class Column {

          /** Field Declarations **/
          name : string;

          /** Initialization **/
          constructor(name: string) {
               this.name = name;
          }

     }

     export class Locale {

          /** Field Declarations **/
          country : string;
          language : string;

          /** Initialization **/
          constructor(language: string, country: string) {
               this.language = language;
               this.country = country;
          }

     }

     export class Email {

          /** Field Declarations **/
          attachmentData : Array<AttachmentData>;
          bccRecipients : Array<EmailAddress>;
          ccRecipients : Array<EmailAddress>;
          messageBody : string;
          messageBodyMimeType : string;
          subject : string;
          toRecipients : Array<EmailAddress>;

          /** Initialization **/
          constructor(toRecipients: Array<EmailAddress>, subject: string, messageBody: string) {
               this.toRecipients = toRecipients;
               this.subject = subject;
               this.messageBody = messageBody;
          }

     }

     export class ContactUid {

          /** Field Declarations **/
          contactId : string;

          /** Initialization **/
          constructor(contactId: string) {
               this.contactId = contactId;
          }

     }

     export class ContactAddress {

          /** Field Declarations **/
          address : string;
          type : ContactAddressAddressTypeEnum;

          /** Initialization **/
          constructor(address: string, type: ContactAddressAddressTypeEnum) {
               this.address = address;
               this.type = type;
          }

     }


     export class ContactAddressAddressTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Home = new ContactAddressAddressTypeEnum("Home");
          static Work = new ContactAddressAddressTypeEnum("Work");
          static Other = new ContactAddressAddressTypeEnum("Other");
          static Unknown = new ContactAddressAddressTypeEnum("Unknown");
     }

     export class ContactProfessionalInfo {

          /** Field Declarations **/
          company : string;
          jobDescription : string;
          jobTitle : string;

          /** Initialization **/
          constructor(jobTitle: string, jobDescription: string, company: string) {
               this.jobTitle = jobTitle;
               this.jobDescription = jobDescription;
               this.company = company;
          }

     }

     export class ServiceRequest {

          /** Field Declarations **/
          content : string;
          contentEncoding : string;
          contentLength : number;
          contentType : string;
          headers : Array<Header>;
          method : string;
          protocolVersion : ServiceRequestProtocolVersionEnum;
          rawContent : Array<number>;
          session : ISession;

          /** Initialization **/
          constructor(content: string, contentType: string, contentLength: number, rawContent: Array<number>, headers: Array<Header>, method: string, protocolVersion: ServiceRequestProtocolVersionEnum, session: ISession, contentEncoding: string) {
               this.content = content;
               this.contentType = contentType;
               this.contentLength = contentLength;
               this.rawContent = rawContent;
               this.headers = headers;
               this.method = method;
               this.protocolVersion = protocolVersion;
               this.session = session;
               this.contentEncoding = contentEncoding;
          }

     }


     export class ServiceRequestProtocolVersionEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HTTP_PROTOCOL_VERSION_1_0 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_0");
          static HTTP_PROTOCOL_VERSION_1_1 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_1");
          static Unknown = new ServiceRequestProtocolVersionEnum("Unknown");
     }

     export class ContactSocial {

          /** Field Declarations **/
          profileUrl : string;
          socialNetwork : ContactSocialSocialNetworkEnum;

          /** Initialization **/
          constructor(socialNetwork: ContactSocialSocialNetworkEnum, profileUrl: string) {
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }

     }


     export class ContactSocialSocialNetworkEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Twitter = new ContactSocialSocialNetworkEnum("Twitter");
          static Facebook = new ContactSocialSocialNetworkEnum("Facebook");
          static GooglePlus = new ContactSocialSocialNetworkEnum("GooglePlus");
          static LinkedIn = new ContactSocialSocialNetworkEnum("LinkedIn");
          static Flickr = new ContactSocialSocialNetworkEnum("Flickr");
          static Unknown = new ContactSocialSocialNetworkEnum("Unknown");
     }

     export class Endpoint {

          /** Field Declarations **/
          host : string;
          path : string;
          port : number;
          proxy : string;
          scheme : string;

          /** Initialization **/
          constructor(host: string, path: string, port: number, proxy: string, scheme: string) {
               this.host = host;
               this.path = path;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }

     }

     export class Cookie {

          /** Field Declarations **/
          creation : number;
          data : string;
          domain : string;
          expiry : number;
          name : string;
          path : string;
          scheme : string;
          secure : boolean;

          /** Initialization **/
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

     }

     export class Button {

          /** Field Declarations **/
          type : ButtonButtonEnum;

          /** Initialization **/
          constructor(type: ButtonButtonEnum) {
               this.type = type;
          }

     }


     export class ButtonButtonEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ButtonButtonEnum("HomeButton");
          static BackButton = new ButtonButtonEnum("BackButton");
          static OptionButton = new ButtonButtonEnum("OptionButton");
          static Unknown = new ButtonButtonEnum("Unknown");
     }

     export class Database {

          /** Field Declarations **/
          compress : boolean;
          name : string;

          /** Initialization **/
          constructor(name: string, compress: boolean) {
               this.name = name;
               this.compress = compress;
          }

     }

     export class AttachmentData {

          /** Field Declarations **/
          data : Array<number>;
          dataSize : number;
          fileName : string;
          mimeType : string;
          referenceUrl : string;

          /** Initialization **/
          constructor(data: Array<number>, dataSize: number, fileName: string, mimeType: string, referenceUrl: string) {
               this.data = data;
               this.dataSize = dataSize;
               this.fileName = fileName;
               this.mimeType = mimeType;
               this.referenceUrl = referenceUrl;
          }

     }

     export class ContactEmail {

          /** Field Declarations **/
          email : string;
          primary : boolean;
          type : ContactEmailEmailTypeEnum;

          /** Initialization **/
          constructor(type: ContactEmailEmailTypeEnum, primary: boolean, email: string) {
               this.type = type;
               this.primary = primary;
               this.email = email;
          }

     }


     export class ContactEmailEmailTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Personal = new ContactEmailEmailTypeEnum("Personal");
          static Work = new ContactEmailEmailTypeEnum("Work");
          static Other = new ContactEmailEmailTypeEnum("Other");
          static Unknown = new ContactEmailEmailTypeEnum("Unknown");
     }

     export class Table {

          /** Field Declarations **/
          columnCount : number;
          columns : Array<Column>;
          name : string;
          rowCount : number;
          rows : Array<Row>;

          /** Initialization **/
          constructor(name: string) {
               this.name = name;
          }

     }

     export class EmailAddress {

          /** Field Declarations **/
          address : string;

          /** Initialization **/
          constructor(address: string) {
               this.address = address;
          }

     }

     export class DeviceInfo {

          /** Field Declarations **/
          model : string;
          name : string;
          uuid : string;
          vendor : string;

          /** Initialization **/
          constructor(name: string, model: string, vendor: string, uuid: string) {
               this.name = name;
               this.model = model;
               this.vendor = vendor;
               this.uuid = uuid;
          }

     }

     export class SecureKeyPair {

          /** Field Declarations **/
          secureData : string;
          secureKey : string;

          /** Initialization **/
          constructor(secureKey: string, secureData: string) {
               this.secureKey = secureKey;
               this.secureData = secureData;
          }

     }

     export class Header {

          /** Field Declarations **/
          data : string;
          name : string;

          /** Initialization **/
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }

     }

     export class ServiceResponse {

          /** Field Declarations **/
          content : string;
          contentBinary : Array<number>;
          contentBinaryLength : number;
          contentEncoding : string;
          contentLength : string;
          contentType : string;
          headers : Array<Header>;
          session : ISession;

          /** Initialization **/
          constructor(content: string, contentType: string, contentLength: string, contentBinary: Array<number>, contentBinaryLength: number, headers: Array<Header>, session: ISession, contentEncoding: string) {
               this.content = content;
               this.contentType = contentType;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.headers = headers;
               this.session = session;
               this.contentEncoding = contentEncoding;
          }

     }

     export class Contact extends ContactUid {

          /** Field Declarations **/
          contactAddresses : Array<ContactAddress>;
          contactEmails : Array<ContactEmail>;
          contactPhones : Array<ContactPhone>;
          contactSocials : Array<ContactSocial>;
          contactTags : Array<ContactTag>;
          contactWebsites : Array<ContactWebsite>;
          personalInfo : ContactPersonalInfo;
          professionalInfo : ContactProfessionalInfo;

          /** Initialization **/
          constructor(contactId: string) {
               super(contactId)
               this.contactId = contactId;
          }

     }

     export class Service {

          /** Field Declarations **/
          endpoint : Endpoint;
          method : ServiceServiceMethodEnum;
          name : string;
          type : ServiceServiceTypeEnum;

          /** Initialization **/
          constructor(endpoint: Endpoint, name: string, method: ServiceServiceMethodEnum, type: ServiceServiceTypeEnum) {
               this.endpoint = endpoint;
               this.name = name;
               this.method = method;
               this.type = type;
          }

     }


     export class ServiceServiceMethodEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static POST = new ServiceServiceMethodEnum("POST");
          static GET = new ServiceServiceMethodEnum("GET");
          static Unknown = new ServiceServiceMethodEnum("Unknown");
     }


     export class ServiceServiceTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static SERVICETYPE_AMF_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_AMF_SERIALIZATION");
          static SERVICETYPE_GWT_RPC = new ServiceServiceTypeEnum("SERVICETYPE_GWT_RPC");
          static SERVICETYPE_OCTET_BINARY = new ServiceServiceTypeEnum("SERVICETYPE_OCTET_BINARY");
          static SERVICETYPE_REMOTING_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_REMOTING_SERIALIZATION");
          static SERVICETYPE_REST_JSON = new ServiceServiceTypeEnum("SERVICETYPE_REST_JSON");
          static SERVICETYPE_REST_XML = new ServiceServiceTypeEnum("SERVICETYPE_REST_XML");
          static SERVICETYPE_SOAP_JSON = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_JSON");
          static SERVICETYPE_SOAP_XML = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_XML");
          static SERVICETYPE_XMLRPC_JSON = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_JSON");
          static SERVICETYPE_XMLRPC_XML = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_XML");
          static Unknown = new ServiceServiceTypeEnum("Unknown");
     }

     export class Lifecycle {

          /** Field Declarations **/
          state : LifecycleStateEnum;

          /** Initialization **/
          constructor(state: LifecycleStateEnum) {
               this.state = state;
          }

     }


     export class LifecycleStateEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Starting = new LifecycleStateEnum("Starting");
          static Started = new LifecycleStateEnum("Started");
          static Running = new LifecycleStateEnum("Running");
          static Paused = new LifecycleStateEnum("Paused");
          static PausedIdle = new LifecycleStateEnum("PausedIdle");
          static PausedRun = new LifecycleStateEnum("PausedRun");
          static Resuming = new LifecycleStateEnum("Resuming");
          static Stopping = new LifecycleStateEnum("Stopping");
          static Unknown = new LifecycleStateEnum("Unknown");
     }

     export class Acceleration {

          /** Field Declarations **/
          timeStamp : number;
          x : number;
          y : number;
          z : number;

          /** Initialization **/
          constructor(x: number, y: number, z: number, timeStamp: number) {
               this.x = x;
               this.y = y;
               this.z = z;
               this.timeStamp = timeStamp;
          }

     }

     export class ContactPhone {

          /** Field Declarations **/
          phone : string;
          phoneType : ContactPhonePhoneTypeEnum;

          /** Initialization **/
          constructor(phone: string, phoneType: ContactPhonePhoneTypeEnum) {
               this.phone = phone;
               this.phoneType = phoneType;
          }

     }


     export class ContactPhonePhoneTypeEnum {
          constructor(public value:string){}
          toString(){return this.value;}

          static Mobile = new ContactPhonePhoneTypeEnum("Mobile");
          static Work = new ContactPhonePhoneTypeEnum("Work");
          static Home = new ContactPhonePhoneTypeEnum("Home");
          static Main = new ContactPhonePhoneTypeEnum("Main");
          static HomeFax = new ContactPhonePhoneTypeEnum("HomeFax");
          static WorkFax = new ContactPhonePhoneTypeEnum("WorkFax");
          static Other = new ContactPhonePhoneTypeEnum("Other");
          static Unknown = new ContactPhonePhoneTypeEnum("Unknown");
     }

     export class Geolocation {

          /** Field Declarations **/
          altitude : number;
          latitude : number;
          longitude : number;
          xDoP : number;
          yDoP : number;

          /** Initialization **/
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number) {
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
          }

     }

     export class Row {

          /** Field Declarations **/
          values : Array<any>;

          /** Initialization **/
          constructor(values: Array<any>) {
               this.values = values;
          }

     }


}
