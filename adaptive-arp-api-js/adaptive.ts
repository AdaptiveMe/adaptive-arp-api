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

     export class Button {

          /** Field Declarations **/
          type : ButtonEnum;

          /** Initialization **/
          constructor(type: Button) {
               this.type = type;
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
               super()
               this.contactId = contactId;
          }

     }

     export class ContactAddress {

          /** Field Declarations **/
          address : string;
          type : AddressTypeEnum;

          /** Initialization **/
          constructor(address: string, type: AddressType) {
               this.address = address;
               this.type = type;
          }

     }

     export class ContactEmail {

          /** Field Declarations **/
          email : string;
          primary : boolean;
          type : EmailTypeEnum;

          /** Initialization **/
          constructor(type: EmailType, primary: boolean, email: string) {
               this.type = type;
               this.primary = primary;
               this.email = email;
          }

     }

     export class ContactPersonalInfo {

          /** Field Declarations **/
          lastName : string;
          middleName : string;
          name : string;
          title : TitleEnum;

          /** Initialization **/
          constructor(name: string, middleName: string, lastName: string, title: Title) {
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }

     }

     export class ContactPhone {

          /** Field Declarations **/
          phone : string;
          phoneType : PhoneTypeEnum;

          /** Initialization **/
          constructor(phone: string, phoneType: PhoneType) {
               this.phone = phone;
               this.phoneType = phoneType;
          }

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

     export class ContactSocial {

          /** Field Declarations **/
          profileUrl : string;
          socialNetwork : SocialNetworkEnum;

          /** Initialization **/
          constructor(socialNetwork: SocialNetwork, profileUrl: string) {
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }

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

     export class ContactUid {

          /** Field Declarations **/
          contactId : string;

          /** Initialization **/
          constructor(contactId: string) {
               this.contactId = contactId;
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

     export class EmailAddress {

          /** Field Declarations **/
          address : string;

          /** Initialization **/
          constructor(address: string) {
               this.address = address;
          }

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

     export interface IAccelerationListener extends IBaseListener {


     }
     export interface IAccelerometer extends IBaseSensor {

     }

     export interface IAdaptiveRP {

     }

     export interface IAds extends IBaseCommerce {

     }

     export interface IAlarm extends IBaseNotification {

     }

     export interface IAmbientLight extends IBaseSensor {

     }

     export interface IAnalytics extends IBaseApplication {

     }

     export interface IAppContext extends IAdaptiveRP {

     }

     export interface IAppContextWebview extends IAdaptiveRP {

     }

     export interface IAppRegistry extends IAdaptiveRP {

     }

     export interface IAppResource extends IAdaptiveRP {

     }

     export interface IAppResourceCallback extends IBaseCallback {


     }
     export interface IAppResourceHandler extends IAdaptiveRP {

     }

     export interface IAppServer extends IAdaptiveRP {

     }

     export interface IAppServerListener extends IBaseListener {

     }

     export interface IAppServerManager extends IAdaptiveRP {

     }

     export interface IAudio extends IBaseMedia {

     }

     export interface IBarcode extends IBaseReader {

     }

     export interface IBarometer extends IBaseSensor {

     }

     export interface IBaseApplication extends IAdaptiveRP {

     }

     export interface IBaseCallback extends IAdaptiveRP {

     }

     export interface IBaseCommerce extends IAdaptiveRP {

     }

     export interface IBaseCommunication extends IAdaptiveRP {

     }

     export interface IBaseData extends IAdaptiveRP {

     }

     export interface IBaseListener extends IAdaptiveRP {

     }

     export interface IBaseMedia extends IAdaptiveRP {

     }

     export interface IBaseNotification extends IAdaptiveRP {

     }

     export interface IBasePIM extends IAdaptiveRP {

     }

     export interface IBaseReader extends IAdaptiveRP {

     }

     export interface IBaseSecurity extends IAdaptiveRP {

     }

     export interface IBaseSensor extends IAdaptiveRP {

     }

     export interface IBaseSocial extends IAdaptiveRP {

     }

     export interface IBaseSystem extends IAdaptiveRP {

     }

     export interface IBaseUI extends IAdaptiveRP {

     }

     export interface IBaseUtil extends IAdaptiveRP {

     }

     export interface IBluetooth extends IBaseCommunication {

     }

     export interface IBrowser extends IBaseUI {

     }

     export interface IButtonListener extends IBaseListener {


     }
     export interface ICalendar extends IBasePIM {

     }

     export interface ICamera extends IBaseMedia {

     }

     export interface ICapabilities extends IBaseSystem {


     }
     export interface ICloud extends IBaseData {

     }

     export interface ICompression extends IBaseUtil {

     }

     export interface IConcurrent extends IBaseUtil {

     }

     export interface IContact extends IBasePIM {

     }

     export interface IContactPhotoResultCallback extends IBaseCallback {


     }
     export interface IContactResultCallback extends IBaseCallback {


     }
     export interface ICrypto extends IBaseUtil {

     }

     export interface IDatabase extends IBaseData {

     }

     export interface IDatabaseResultCallback extends IBaseCallback {


     }
     export interface IDataStream extends IBaseData {

     }

     export interface IDesktop extends IBaseUI {

     }

     export interface IDevice extends IBaseSystem {

     }

     export interface IDisplay extends IBaseSystem {

     }

     export interface IFacebook extends IBaseSocial {

     }

     export interface IFile extends IFilePath {

     }

     export interface IFileDataResultCallback extends IBaseCallback {


     }
     export interface IFileListResultCallback extends IBaseCallback {


     }
     export interface IFilePath extends IBaseData {

     }

     export interface IFileResultCallback extends IBaseCallback {


     }
     export interface IFileSystem extends IBaseData {

     }

     export interface IGeolocation extends IBaseSensor {

     }

     export interface IGeolocationListener extends IBaseListener {


     }
     export interface IGlobalization extends IBaseApplication {

     }

     export interface IGooglePlus extends IBaseSocial {

     }

     export interface IGyroscope extends IBaseSensor {

     }

     export interface IImaging extends IBaseMedia {

     }

     export interface IInternalStorage extends IBaseData {

     }

     export interface ILifecycle extends IBaseApplication {

     }

     export interface ILifecycleListener extends IBaseListener {


     }
     export interface ILinkedIn extends IBaseSocial {

     }

     export interface ILogging extends IBaseUtil {


     }
     export interface IMagnetometer extends IBaseSensor {

     }

     export interface IMail extends IBasePIM {

     }

     export interface IManagement extends IBaseApplication {

     }

     export interface IMap extends IBaseUI {

     }

     export interface IMessaging extends IBasePIM {

     }

     export interface IMessagingCallback extends IBaseCallback {


     }
     export interface INetworkInfo extends IBaseCommunication {

     }

     export interface INetworkNaming extends IBaseCommunication {

     }

     export interface INetworkReachability extends IBaseCommunication {

     }

     export interface INetworkReachabilityCallback extends IBaseCallback {


     }
     export interface INetworkStatus extends IBaseCommunication {

     }

     export interface INFC extends IBaseReader {

     }

     export interface INotification extends IBaseNotification {

     }

     export interface INotificationLocal extends IBaseNotification {

     }

     export interface IOAuth extends IBaseSecurity {

     }

     export interface IOCR extends IBaseReader {

     }

     export interface IOpenId extends IBaseSecurity {

     }

     export interface IOS extends IBaseSystem {

     }

     export interface IPrinting extends IBaseApplication {

     }

     export interface IProximity extends IBaseSensor {

     }

     export interface IQRCode extends IBaseReader {

     }

     export interface IRSS extends IBaseSocial {

     }

     export interface IRuntime extends IBaseSystem {

     }

     export interface ISecureKVResultCallback extends IBaseCallback {


     }
     export interface ISecurity extends IBaseSecurity {

     }

     export interface IService extends IBaseCommunication {

     }

     export interface IServiceResultCallback extends IBaseCallback {


     }
     export interface ISession extends IBaseCommunication {

     }

     export interface ISettings extends IBaseApplication {

     }

     export interface ISocket extends IBaseCommunication {

     }

     export interface IStore extends IBaseCommerce {

     }

     export interface ITableResultCallback extends IBaseCallback {


     }
     export interface ITelephony extends IBaseCommunication {

     }

     export interface ITimer extends IBaseUtil {

     }

     export interface ITwitter extends IBaseSocial {

     }

     export interface IUI extends IBaseUI {

     }

     export interface IUpdate extends IBaseApplication {

     }

     export interface IVibration extends IBaseNotification {

     }

     export interface IVideo extends IBaseMedia {

     }

     export interface IWallet extends IBaseCommerce {

     }

     export interface IXML extends IBaseData {

     }

     export class Lifecycle {

          /** Field Declarations **/
          state : StateEnum;

          /** Initialization **/
          constructor(state: State) {
               this.state = state;
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

     export class Row {

          /** Field Declarations **/
          values : Array<any>;

          /** Initialization **/
          constructor(values: Array<any>) {
               this.values = values;
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

     export class Service {

          /** Field Declarations **/
          endpoint : Endpoint;
          method : ServiceMethodEnum;
          name : string;
          type : ServiceTypeEnum;

          /** Initialization **/
          constructor(endpoint: Endpoint, name: string, method: ServiceMethod, type: ServiceType) {
               this.endpoint = endpoint;
               this.name = name;
               this.method = method;
               this.type = type;
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
          protocolVersion : ProtocolVersionEnum;
          rawContent : Array<number>;
          session : ISession;

          /** Initialization **/
          constructor(content: string, contentType: string, contentLength: number, rawContent: Array<number>, headers: Array<Header>, method: string, protocolVersion: ProtocolVersion, session: ISession, contentEncoding: string) {
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


}
