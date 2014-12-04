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
module Adaptive {

     /**
        Structure representing the data of a http cookie.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Cookie {
          /**
             Cookie creation timestamp in milliseconds.
          */
          creation : number;
          /**
             Value of the Cookie
          */
          data : string;
          /**
             Domain for which the cookie is valid.
          */
          domain : string;
          /**
             Cookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;
          /**
             Name ot the cookie
          */
          name : string;
          /**
             URI path for which the cookie is valid.
          */
          path : string;
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;
          /**
             Cookie is secure (https only)
          */
          secure : boolean;
          /**
             Constructor used by the implementation

             @param name
             @param data
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }
          /**
             Gets Cookie creation timestamp in milliseconds.

             @return creation Cookie creation timestamp in milliseconds.
          */
          getCreation() : number {
               return this.creation;
          }

          /**
             Sets Cookie creation timestamp in milliseconds.

             @param creation Cookie creation timestamp in milliseconds.
          */
          setCreation(creation: number) {
               this.creation = creation;
          }

          /**
             Returns the cookie value

             @return 
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             Set the cookie value

             @param data
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             Returns the domain

             @return domain
             @since ARP1.0
          */
          getDomain() : string {
               return this.domain;
          }

          /**
             Set the domain

             @param domain
          */
          setDomain(domain: string) {
               this.domain = domain;
          }

          /**
             Returns the expiration date in milis

             @return expiry
             @since ARP1.0
          */
          getExpiry() : number {
               return this.expiry;
          }

          /**
             Set the expiration date in milis

             @param expiry
          */
          setExpiry(expiry: number) {
               this.expiry = expiry;
          }

          /**
             Returns the cookie name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the cookie name

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the path

             @return path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Set the path

             @param path
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the scheme

             @return scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             Set the scheme

             @param scheme
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             Returns whether the cookie is secure or not

             @return true if the cookie is secure; false otherwise
             @since ARP1.0
          */
          getSecure() : boolean {
               return this.secure;
          }

          /**
             Set whether the cookie is secure or not

             @param secure
          */
          setSecure(secure: boolean) {
               this.secure = secure;
          }

     }
     /**
        Structure representing a remote or local service access end-point.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Endpoint {
          /**
             The remote serice host (alias or IP).
          */
          host : string;
          /**
             The remote service path (to be added to the host and port url).
          */
          path : string;
          /**
             The remote service accessible port.
          */
          port : number;
          /**
             The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
          */
          proxy : string;
          /**
             The remote service scheme.
          */
          scheme : string;
          /**
             Constructor used by the implementation

             @param host
             @param path
             @param port
             @param proxy
             @param scheme
             @since ARP1.0
          */
          constructor(host: string, path: string, port: number, proxy: string, scheme: string) {
               this.host = host;
               this.path = path;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }
          /**
             Returns the host

             @return host
             @since ARP1.0
          */
          getHost() : string {
               return this.host;
          }

          /**
             Set the host

             @param host
             @since ARP1.0
          */
          setHost(host: string) {
               this.host = host;
          }

          /**
             Returns the path

             @return path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             Set the path

             @param path
             @since ARP1.0
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             Returns the port

             @return port
             @since ARP1.0
          */
          getPort() : number {
               return this.port;
          }

          /**
             Set the port

             @param port
             @since ARP1.0
          */
          setPort(port: number) {
               this.port = port;
          }

          /**
             Return the proxy

             @return proxy
             @since ARP1.0
          */
          getProxy() : string {
               return this.proxy;
          }

          /**
             Set the proxy

             @param proxy
             @since ARP1.0
          */
          setProxy(proxy: string) {
               this.proxy = proxy;
          }

          /**
             Returns the scheme

             @return scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             Set the scheme

             @param scheme
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

     }
     /**
        Structure representing the data a single geolocation reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Geolocation {
          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          altitude : number;
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          latitude : number;
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          longitude : number;
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          xDoP : number;
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          yDoP : number;
          /**
             Constructor used by the implementation

             @param latitude
             @param longitude
             @param altitude
             @param xDoP
             @param yDoP
             @since ARP1.0
          */
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number) {
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
          }
          /**
             Returns altitude in meters

             @return altitude
             @since ARP1.0
          */
          getAltitude() : number {
               return this.altitude;
          }

          /**
             Set altitude in meters

             @param altitude
             @since ARP1.0
          */
          setAltitude(altitude: number) {
               this.altitude = altitude;
          }

          /**
             Returns the latitude in degrees

             @return latitude
             @since ARP1.0
          */
          getLatitude() : number {
               return this.latitude;
          }

          /**
             Set the latitude in degrees

             @param latitude
             @since ARP1.0
          */
          setLatitude(latitude: number) {
               this.latitude = latitude;
          }

          /**
             Returns the longitude in degrees

             @return longitude
             @since ARP1.0
          */
          getLongitude() : number {
               return this.longitude;
          }

          /**
             Returns the latitude in degrees

             @param longitude
             @since ARP1.0
          */
          setLongitude(longitude: number) {
               this.longitude = longitude;
          }

          /**
             Returns the Dilution of Position in the X axis (longitude)

             @return xDoP
             @since ARP1.0
          */
          getXDoP() : number {
               return this.xDoP;
          }

          /**
             Sets Dilution of precision on the X measurement. Measured in meters.

             @param xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          setXDoP(xDoP: number) {
               this.xDoP = xDoP;
          }

          /**
             Returns the Dilution of Position in the Y axis (latitude)

             @return yDoP
             @since ARP1.0
          */
          getYDoP() : number {
               return this.yDoP;
          }

          /**
             Sets Dilution of precision on the Y measurement. Measured in meters.

             @param yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          setYDoP(yDoP: number) {
               this.yDoP = yDoP;
          }

     }
     /**
        Structure representing the email data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactEmail {
          /**
             The type of the email
          */
          type : ContactEmailType;
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
          /**
             Constructor used by the implementation

             @param type
             @param primary
             @param email
             @since ARP1.0
          */
          constructor(type: ContactEmailType, primary: boolean, email: string) {
               this.type = type;
               this.primary = primary;
               this.email = email;
          }
          /**
             Returns the type of the email

             @return EmailType
             @since ARP1.0
          */
          getType() : ContactEmailType {
               return this.type;
          }

          /**
             Set the type of the email

             @param type
             @since ARP1.0
          */
          setType(type: ContactEmailType) {
               this.type = type;
          }

          /**
             Returns the email of the Contact

             @return email
             @since ARP1.0
          */
          getEmail() : string {
               return this.email;
          }

          /**
             Set the email of the Contact

             @param email
             @since ARP1.0
          */
          setEmail(email: string) {
               this.email = email;
          }

          /**
             Returns if the email is primary

             @return true if the email is primary; false otherwise
             @since ARP1.0
          */
          getPrimary() : boolean {
               return this.primary;
          }

          /**
             Set if the email

             @param primary true if the email is primary; false otherwise
             @since ARP1.0
          */
          setPrimary(primary: boolean) {
               this.primary = primary;
          }

     }
     /**
        Structure representing the basic device information.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class DeviceInfo {
          /**
             Model of device - equivalent to device release or version.
          */
          model : string;
          /**
             Name of device - equivalent to brand.
          */
          name : string;
          /**
             Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          uuid : string;
          /**
             Vendor of the device hardware.
          */
          vendor : string;
          /**
             Constructor for the implementation of the platform.

             @param name   or brand of the device.
             @param model  of the device.
             @param vendor of the device.
             @param uuid   unique* identifier (* platform dependent).
          */
          constructor(name: string, model: string, vendor: string, uuid: string) {
               this.name = name;
               this.model = model;
               this.vendor = vendor;
               this.uuid = uuid;
          }
          /**
             Returns the model of the device.

             @return String with the model of the device.
          */
          getModel() : string {
               return this.model;
          }

          /**
             Sets Model of device - equivalent to device release or version.

             @param model Model of device - equivalent to device release or version.
          */
          setModel(model: string) {
               this.model = model;
          }

          /**
             Returns the name of the device.

             @return String with device name.
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets Name of device - equivalent to brand.

             @param name Name of device - equivalent to brand.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the platform dependent UUID of the device.

             @return String with the 128-bit device identifier.
          */
          getUuid() : string {
               return this.uuid;
          }

          /**
             Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

             @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          setUuid(uuid: string) {
               this.uuid = uuid;
          }

          /**
             Returns the vendor of the device.

             @return String with the vendor name.
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             Sets Vendor of the device hardware.

             @param vendor Vendor of the device hardware.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

     }
     /**
        Structure representing a database reference.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Database {
          /**
             Indicates if database was created or needs to be created as Compressed.
          */
          compress : boolean;
          /**
             Database Name (name of the .db local file).
          */
          name : string;
          /**
             Constructor using fields.

             @param name     Name of the Table.
             @param compress Compress enbaled or not.
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          constructor(name: string, compress: boolean) {
               this.name = name;
               this.compress = compress;
          }
          /**
             Returns if the table is compressed

             @return Compression enabled
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          getCompress() : boolean {
               return this.compress;
          }

          /**
             Sets if the table is compressed or not.

             @param compress Compression enabled
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          setCompress(compress: boolean) {
               this.compress = compress;
          }

          /**
             Returns the name.

             @return The name of the table.
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the table.

             @param name The name of the table.
             @author Ferran Vila Conesa
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the internal unique identifier data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactUid {
          /**
             The id of the Contact
          */
          contactId : string;
          /**
             Constructor used by implementation to set the Contact id.

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          constructor(contactId: string) {
               this.contactId = contactId;
          }
          /**
             Returns the contact id

             @return Contactid Internal unique contact id.
             @since ARP1.0
          */
          getContactId() : string {
               return this.contactId;
          }

          /**
             Set the id of the Contact

             @param contactId Internal unique contact id.
             @since ARP1.0
          */
          setContactId(contactId: string) {
               this.contactId = contactId;
          }

     }
     /**
        Structure representing the assigned tags data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactTag {
          /**
             The value of the Tag
          */
          dataValue : string;
          /**
             The name of the Tag
          */
          name : string;
          /**
             Constructor used by the implementation

             @param dataValue
             @param name
             @since ARP1.0
          */
          constructor(name: string, dataValue: string) {
               this.name = name;
               this.dataValue = dataValue;
          }
          /**
             Returns the value of the Tag

             @return value
             @since ARP1.0
          */
          getDataValue() : string {
               return this.dataValue;
          }

          /**
             Set the value of the Tag

             @param dataValue
             @since ARP1.0
          */
          setDataValue(dataValue: string) {
               this.dataValue = dataValue;
          }

          /**
             Returns the name of the Tag

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name of the Tag

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Represents a single secureKey-value pair.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class SecureKeyPair {
          secureData : string;
          secureKey : string;
          /**
             Constructor with parameters

             @param secureKey   name of the keypair
             @param secureData value of the keypair
             @since ARP1.0
          */
          constructor(secureKey: string, secureData: string) {
               this.secureKey = secureKey;
               this.secureData = secureData;
          }
          /**
             Returns the object value

             @return Value.
             @since ARP 1.0
          */
          getSecureData() : string {
               return this.secureData;
          }

          /**
             Sets the value for this object

             @param secureData value to set.
             @since ARP 1.0
          */
          setSecureData(secureData: string) {
               this.secureData = secureData;
          }

          /**
             Returns the object secureKey name.

             @return Key name.
             @since ARP 1.0
          */
          getSecureKey() : string {
               return this.secureKey;
          }

          /**
             Sets the secureKey name for this object.

             @param secureKey Key name.
             @since ARP 1.0
          */
          setSecureKey(secureKey: string) {
               this.secureKey = secureKey;
          }

     }
     /**
        Structure representing the binary attachment data.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class AttachmentData {
          /**
             The raw data for the current file attachment (byte array)
          */
          data : Array<number>;
          /**
             The data size (in bytes) of the current file attachment
          */
          dataSize : number;
          /**
             The name of the current file attachment
          */
          fileName : string;
          /**
             The mime type of the current attachment
          */
          mimeType : string;
          /**
             The relative path where the contents for the attachment file could be located.
          */
          referenceUrl : string;
          /**
             Constructor used by the implementation

             @param data         raw data of the file attachment
             @param dataSize     size of the file attachment
             @param fileName     name of the file attachment
             @param mimeType     mime type of the file attachment
             @param referenceUrl relative url of the file attachment
             @since ARP1.0
          */
          constructor(data: Array<number>, dataSize: number, fileName: string, mimeType: string, referenceUrl: string) {
               this.data = data;
               this.dataSize = dataSize;
               this.fileName = fileName;
               this.mimeType = mimeType;
               this.referenceUrl = referenceUrl;
          }
          /**
             Returns the raw data in byte[]

             @return data Octet-binary content of the attachment payload.
             @since ARP1.0
          */
          getData() : Array<number> {
               return this.data;
          }

          /**
             Set the data of the attachment as a byte[]

             @param data Sets the octet-binary content of the attachment.
             @since ARP1.0
          */
          setData(data: Array<number>) {
               this.data = data;
          }

          /**
             Returns the size of the attachment as a long

             @return dataSize Length in bytes of the octet-binary content.
             @since ARP1.0
          */
          getDataSize() : number {
               return this.dataSize;
          }

          /**
             Set the size of the attachment as a long

             @param dataSize Length in bytes of the octet-binary content ( should be same as data array length.)
             @since ARP1.0
          */
          setDataSize(dataSize: number) {
               this.dataSize = dataSize;
          }

          /**
             Returns the filename of the attachment

             @return fileName Name of the attachment.
             @since ARP1.0
          */
          getFileName() : string {
               return this.fileName;
          }

          /**
             Set the name of the file attachment

             @param fileName Name of the attachment.
             @since ARP1.0
          */
          setFileName(fileName: string) {
               this.fileName = fileName;
          }

          /**
             Returns the mime type of the attachment

             @return mimeType
             @since ARP1.0
          */
          getMimeType() : string {
               return this.mimeType;
          }

          /**
             Set the mime type of the attachment

             @param mimeType Mime-type of the attachment.
             @since ARP1.0
          */
          setMimeType(mimeType: string) {
               this.mimeType = mimeType;
          }

          /**
             Returns the absolute url of the file attachment

             @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          getReferenceUrl() : string {
               return this.referenceUrl;
          }

          /**
             Set the absolute url of the attachment

             @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          setReferenceUrl(referenceUrl: string) {
               this.referenceUrl = referenceUrl;
          }

     }
     /**
        Represents a specific application life-cycle stage.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Lifecycle {
          /**
             Represent the state of the app
          */
          state : LifecycleState;
          /**
             Constructor used by the implementation

             @param state
             @since ARP1.0
          */
          constructor(state: LifecycleState) {
               this.state = state;
          }
          /**
             Returns the state of the application

             @return state of the app
             @since ARP1.0
          */
          getState() : LifecycleState {
               return this.state;
          }

          /**
             Set the State of the application

             @param state of the app
             @since ARP1.0
          */
          setState(state: LifecycleState) {
               this.state = state;
          }

     }
     /**
        Represents a specific user or system locate.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Locale {
          /**
             A valid ISO Country Code.
          */
          country : string;
          /**
             A valid ISO Language Code.
          */
          language : string;
          /**
             Constructor used by the implementation

             @param country
             @param language
             @since ARP1.0
          */
          constructor(language: string, country: string) {
               this.language = language;
               this.country = country;
          }
          /**
             Returns the country code

             @return country code
             @since ARP1.0
          */
          getCountry() : string {
               return this.country;
          }

          /**
             Set the country code

             @param country code
             @since ARP1.0
          */
          setCountry(country: string) {
               this.country = country;
          }

          /**
             Returns the language code

             @return language code
             @since ARP1.0
          */
          getLanguage() : string {
               return this.language;
          }

          /**
             Set the language code

             @param language code
             @since ARP1.0
          */
          setLanguage(language: string) {
               this.language = language;
          }

     }
     /**
        Structure representing the personal info data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactPersonalInfo {
          /**
             The title of the Contact
          */
          title : ContactPersonalInfoTitle;
          /**
             The last name of the Contact
          */
          lastName : string;
          /**
             The middle name of the Contact if it proceeds
          */
          middleName : string;
          /**
             The name of the Contact
          */
          name : string;
          /**
             The Constructor used by the implementation

             @param name       of the Contact
             @param middleName of the Contact
             @param lastName   of the Contact
             @param title      of the Contact
             @since ARP1.0
          */
          constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle) {
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }
          /**
             Returns the title of the Contact

             @return Title
             @since ARP1.0
          */
          getTitle() : ContactPersonalInfoTitle {
               return this.title;
          }

          /**
             Set the Title of the Contact

             @param title
             @since ARP1.0
          */
          setTitle(title: ContactPersonalInfoTitle) {
               this.title = title;
          }

          /**
             Returns the last name of the Contact

             @return lastName
             @since ARP1.0
          */
          getLastName() : string {
               return this.lastName;
          }

          /**
             Set the last name of the Contact

             @param lastName
             @since ARP1.0
          */
          setLastName(lastName: string) {
               this.lastName = lastName;
          }

          /**
             Returns the middle name of the Contact

             @return middelName
             @since ARP1.0
          */
          getMiddleName() : string {
               return this.middleName;
          }

          /**
             Set the middle name of the Contact

             @param middleName
             @since ARP1.0
          */
          setMiddleName(middleName: string) {
               this.middleName = middleName;
          }

          /**
             Returns the name of the Contact

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name of the Contact

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the professional info data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactProfessionalInfo {
          /**
             The company of the job
          */
          company : string;
          /**
             The job description
          */
          jobDescription : string;
          /**
             The job title
          */
          jobTitle : string;
          /**
             Constructor used by implementation to set the ContactProfessionalInfo.

             @param jobTitle
             @param jobDescription
             @param company
             @since ARP1.0
          */
          constructor(jobTitle: string, jobDescription: string, company: string) {
               this.jobTitle = jobTitle;
               this.jobDescription = jobDescription;
               this.company = company;
          }
          /**
             Returns the company of the job

             @return company
             @since ARP1.0
          */
          getCompany() : string {
               return this.company;
          }

          /**
             Set the company of the job

             @param company
             @since ARP1.0
          */
          setCompany(company: string) {
               this.company = company;
          }

          /**
             Returns the description of the job

             @return description
             @since ARP1.0
          */
          getJobDescription() : string {
               return this.jobDescription;
          }

          /**
             Set the description of the job

             @param jobDescription
             @since ARP1.0
          */
          setJobDescription(jobDescription: string) {
               this.jobDescription = jobDescription;
          }

          /**
             Returns the title of the job

             @return title
             @since ARP1.0
          */
          getJobTitle() : string {
               return this.jobTitle;
          }

          /**
             Set the title of the job

             @param jobTitle
             @since ARP1.0
          */
          setJobTitle(jobTitle: string) {
               this.jobTitle = jobTitle;
          }

     }
     /**
        Represents a row for a data table.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Row {
          /**
             The values of the row.
          */
          values : Array<any>;
          /**
             Constructor for implementation using.

             @param values The values of the row
          */
          constructor(values: Array<any>) {
               this.values = values;
          }
          /**
             Returns the values of the row.

             @return The values of the row.
          */
          getValues() : Array<any> {
               return this.values;
          }

          /**
             Sets the values of the row.

             @param values The values of the row.
          */
          setValues(values: Array<any>) {
               this.values = values;
          }

     }
     /**
        Represents an instance of a service.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Service {
          /**
             The method used
          */
          method : IServiceMethod;
          /**
             The type of the service
          */
          type : IServiceType;
          /**
             Enpoint of the service
          */
          endpoint : Endpoint;
          /**
             The service name
          */
          name : string;
          /**
             Constructor used by the implementation

             @param endpoint
             @param name
             @param method
             @param type
             @since ARP1.0
          */
          constructor(endpoint: Endpoint, name: string, method: IServiceMethod, type: IServiceType) {
               this.endpoint = endpoint;
               this.name = name;
               this.method = method;
               this.type = type;
          }
          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : IServiceMethod {
               return this.method;
          }

          /**
             Set the method

             @param method
             @since ARP1.0
          */
          setMethod(method: IServiceMethod) {
               this.method = method;
          }

          /**
             Returns the type

             @return type
             @since ARP1.0
          */
          getType() : IServiceType {
               return this.type;
          }

          /**
             Set the type

             @param type
             @since ARP1.0
          */
          setType(type: IServiceType) {
               this.type = type;
          }

          /**
             Returns the endpoint

             @return endpoint
             @since ARP1.0
          */
          getEndpoint() : Endpoint {
               return this.endpoint;
          }

          /**
             Set the endpoint

             @param endpoint
             @since ARP1.0
          */
          setEndpoint(endpoint: Endpoint) {
               this.endpoint = endpoint;
          }

          /**
             Returns the name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the name

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Represents a local or remote service request.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ServiceRequest {
          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The headers array (name,value pairs) to be included on the I/O service request.
          */
          headers : Array<Header>;
          /**
             The request method
          */
          method : string;
          /**
             The byte[] representing the Content field.
          */
          rawContent : Array<number>;
          /**
             The session context for the Request/Response.
          */
          session : ISession;
          /**
             Contructor used by the implementation

             @param content
             @param contentType
             @param contentLength
             @param rawContent
             @param headers
             @param method
             @param protocolVersion
             @param session
             @param contentEncoding
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentLength: number, rawContent: Array<number>, headers: Array<Header>, method: string, protocolVersion: IServiceProtocolVersion, session: ISession, contentEncoding: string) {
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
          /**
             Returns the protocol version

             @return protocolVersion enum
             @since ARP1.0
          */
          getProtocolVersion() : IServiceProtocolVersion {
               return this.protocolVersion;
          }

          /**
             Set the protocol version

             @param protocolVersion
             @since ARP1.0
          */
          setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
               this.protocolVersion = protocolVersion;
          }

          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             Set the content

             @param content
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             Set the content length

             @param contentLength
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             Set the content type

             @param contentType
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             Returns the array of Header

             @return headers
             @since ARP1.0
          */
          getHeaders() : Array<Header> {
               return this.headers;
          }

          /**
             Set the array of Header

             @param headers
             @since ARP1.0
          */
          setHeaders(headers: Array<Header>) {
               this.headers = headers;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : string {
               return this.method;
          }

          /**
             Set the method

             @param method
             @since ARP1.0
          */
          setMethod(method: string) {
               this.method = method;
          }

          /**
             Returns the byte[] of the content

             @return rawContent
             @since ARP1.0
          */
          getRawContent() : Array<number> {
               return this.rawContent;
          }

          /**
             Set the byte[] of the content

             @param rawContent
             @since ARP1.0
          */
          setRawContent(rawContent: Array<number>) {
               this.rawContent = rawContent;
          }

          /**
             Returns the session object

             @return session
             @since ARP1.0
          */
          getSession() : ISession {
               return this.session;
          }

          /**
             Set the session object

             @param session
             @since ARP1.0
          */
          setSession(session: ISession) {
               this.session = session;
          }

     }
     /**
        Structure representing the column specification of a data table.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Column {
          /**
             Name of the column
          */
          name : string;
          /**
             Constructor for implementation using.

             @param name Name of the column
          */
          constructor(name: string) {
               this.name = name;
          }
          /**
             Returns the name of the column.

             @return The name of the column.
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the column.

             @param name The name of the column.
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the social data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactSocial {
          /**
             The social network
          */
          socialNetwork : ContactSocialNetwork;
          /**
             The profileUrl
          */
          profileUrl : string;
          /**
             Constructor used by the implementation

             @param socialNetwork of the profile
             @param profileUrl    of the user
             @since ARP1.0
          */
          constructor(socialNetwork: ContactSocialNetwork, profileUrl: string) {
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }
          /**
             Returns the social network

             @return socialNetwork
             @since ARP1.0
          */
          getSocialNetwork() : ContactSocialNetwork {
               return this.socialNetwork;
          }

          /**
             Set the social network

             @param socialNetwork
             @since ARP1.0
          */
          setSocialNetwork(socialNetwork: ContactSocialNetwork) {
               this.socialNetwork = socialNetwork;
          }

          /**
             Returns the profile url of the user

             @return profileUrl
             @since ARP1.0
          */
          getProfileUrl() : string {
               return this.profileUrl;
          }

          /**
             Set the profile url of the iser

             @param profileUrl
             @since ARP1.0
          */
          setProfileUrl(profileUrl: string) {
               this.profileUrl = profileUrl;
          }

     }
     /**
        Represents the basic information about the operating system.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class OSInfo {
          /**
             The name of the operating system.
          */
          name : string;
          /**
             The vendor of the operating system.
          */
          vendor : string;
          /**
             The version/identifier of the operating system.
          */
          version : string;
          /**
             Constructor used by implementation to set the OS information.

             @param name    of the OS.
             @param version of the OS.
             @param vendor  of the OS.
          */
          constructor(name: string, version: string, vendor: string) {
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }
          /**
             Returns the name of the operating system.

             @return OS name.
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets The name of the operating system.

             @param name The name of the operating system.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Returns the vendor of the operating system.

             @return OS vendor.
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             Sets The vendor of the operating system.

             @param vendor The vendor of the operating system.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

          /**
             Returns the version of the operating system.

             @return OS version.
          */
          getVersion() : string {
               return this.version;
          }

          /**
             Sets The version/identifier of the operating system.

             @param version The version/identifier of the operating system.
          */
          setVersion(version: string) {
               this.version = version;
          }

     }
     /**
        Structure representing the data of a http request or response header.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Header {
          /**
             Value of the header
          */
          data : string;
          /**
             Name ot the header
          */
          name : string;
          /**
             Constructor used by the implementation

             @param name
             @param data
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               this.name = name;
               this.data = data;
          }
          /**
             Returns the header value

             @return 
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             Set the header value

             @param data
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             Returns the header name

             @return name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             Set the header name

             @param name
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

     }
     /**
        Structure representing the data elements of an email addressee.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class EmailAddress {
          /**
             The Email address
          */
          address : string;
          /**
             Constructor used by implementation

             @param address
             @since ARP1.0
          */
          constructor(address: string) {
               this.address = address;
          }
          /**
             Returns the email address

             @return address of the Email
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             Set the Email address

             @param address of the Email
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

     }
     /**
        Structure representing the website data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactWebsite {
          /**
             The url of the website
          */
          url : string;
          /**
             Constructor used by the implementation

             @param url
             @since ARP1.0
          */
          constructor(url: string) {
               this.url = url;
          }
          /**
             Returns the url of the website

             @return website url
             @since ARP1.0
          */
          getUrl() : string {
               return this.url;
          }

          /**
             Set the url of the website

             @param url
             @since ARP1.0
          */
          setUrl(url: string) {
               this.url = url;
          }

     }
     /**
        Structure representing the phone data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactPhone {
          /**
             The phone number phoneType
          */
          phoneType : ContactPhoneType;
          /**
             The phone number
          */
          phone : string;
          /**
             Constructor used by implementation to set the contact Phone

             @param phone
             @param phoneType
             @since ARP1.0
          */
          constructor(phone: string, phoneType: ContactPhoneType) {
               this.phone = phone;
               this.phoneType = phoneType;
          }
          /**
             Returns the phone phoneType

             @return phoneType
             @since ARP1.0
          */
          getPhoneType() : ContactPhoneType {
               return this.phoneType;
          }

          /**
             Set the phoneType of the phone number

             @param phoneType
             @since ARP1.0
          */
          setPhoneType(phoneType: ContactPhoneType) {
               this.phoneType = phoneType;
          }

          /**
             Returns the phone number

             @return phone number
             @since ARP1.0
          */
          getPhone() : string {
               return this.phone;
          }

          /**
             Set the phone number

             @param phone number
             @since ARP1.0
          */
          setPhone(phone: string) {
               this.phone = phone;
          }

     }
     /**
        Structure representing the data elements of an email.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Email {
          /**
             Array of attatchments
          */
          attachmentData : Array<AttachmentData>;
          /**
             Array of Email Blind Carbon Copy recipients
          */
          bccRecipients : Array<EmailAddress>;
          /**
             Array of Email Carbon Copy recipients
          */
          ccRecipients : Array<EmailAddress>;
          /**
             Message body
          */
          messageBody : string;
          /**
             Message body mime type
          */
          messageBodyMimeType : string;
          /**
             Subject of the email
          */
          subject : string;
          /**
             Array of Email recipients
          */
          toRecipients : Array<EmailAddress>;
          /**
             Constructor used by the implementation

             @param toRecipients        array of recipients
             @param ccRecipients        array of cc recipients
             @param bccRecipients       array of bcc recipients
             @param attachmentData      array of attatchments
             @param messageBody         body of the email
             @param messageBodyMimeType mime type of the body
             @param subject             of the email
             @since ARP1.0
          */
          constructor(toRecipients: Array<EmailAddress>, ccRecipients: Array<EmailAddress>, bccRecipients: Array<EmailAddress>, attachmentData: Array<AttachmentData>, messageBody: string, messageBodyMimeType: string, subject: string) {
               this.toRecipients = toRecipients;
               this.ccRecipients = ccRecipients;
               this.bccRecipients = bccRecipients;
               this.attachmentData = attachmentData;
               this.messageBody = messageBody;
               this.messageBodyMimeType = messageBodyMimeType;
               this.subject = subject;
          }
          /**
             Returns an array of attachments

             @return attachmentData array with the email attachments
             @since ARP1.0
          */
          getAttachmentData() : Array<AttachmentData> {
               return this.attachmentData;
          }

          /**
             Set the email attachment data array

             @param attachmentData array of email attatchments
             @since ARP1.0
          */
          setAttachmentData(attachmentData: Array<AttachmentData>) {
               this.attachmentData = attachmentData;
          }

          /**
             Returns the array of recipients

             @return bccRecipients array of bcc recipients
             @since ARP1.0
          */
          getBccRecipients() : Array<EmailAddress> {
               return this.bccRecipients;
          }

          /**
             Set the array of recipients

             @param bccRecipients array of bcc recipients
             @since ARP1.0
          */
          setBccRecipients(bccRecipients: Array<EmailAddress>) {
               this.bccRecipients = bccRecipients;
          }

          /**
             Returns the array of recipients

             @return ccRecipients array of cc recipients
             @since ARP1.0
          */
          getCcRecipients() : Array<EmailAddress> {
               return this.ccRecipients;
          }

          /**
             Set the array of recipients

             @param ccRecipients array of cc recipients
             @since ARP1.0
          */
          setCcRecipients(ccRecipients: Array<EmailAddress>) {
               this.ccRecipients = ccRecipients;
          }

          /**
             Returns the message body of the email

             @return message Body string of the email
          */
          getMessageBody() : string {
               return this.messageBody;
          }

          /**
             Set the message body of the email

             @param messageBody message body of the email
             @since ARP1.0
          */
          setMessageBody(messageBody: string) {
               this.messageBody = messageBody;
          }

          /**
             Returns the myme type of the message body

             @return mime type string of the message boddy
             @since ARP1.0
          */
          getMessageBodyMimeType() : string {
               return this.messageBodyMimeType;
          }

          /**
             Set the mime type for the message body

             @param messageBodyMimeType type of the body message
             @since ARP1.0
          */
          setMessageBodyMimeType(messageBodyMimeType: string) {
               this.messageBodyMimeType = messageBodyMimeType;
          }

          /**
             Returns the subject of the email

             @return subject string of the email
             @since ARP1.0
          */
          getSubject() : string {
               return this.subject;
          }

          /**
             Set the subject of the email

             @param subject of the email
             @since ARP1.0
          */
          setSubject(subject: string) {
               this.subject = subject;
          }

          /**
             Returns the array of recipients

             @return toRecipients array of recipients
             @since ARP1.0
          */
          getToRecipients() : Array<EmailAddress> {
               return this.toRecipients;
          }

          /**
             Set the array of recipients

             @param toRecipients array of recipients
             @since ARP1.0
          */
          setToRecipients(toRecipients: Array<EmailAddress>) {
               this.toRecipients = toRecipients;
          }

     }
     /**
        Structure representing the a physical or logical button on a device.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Button {
          /**
             Button type
          */
          type : ICapabilitiesButton;
          /**
             Constructor used by the implementation

             @param type Button type.
             @since ARP1.0
          */
          constructor(type: ICapabilitiesButton) {
               this.type = type;
          }
          /**
             Returns the button type

             @return type Button type.
             @since ARP1.0
          */
          getType() : ICapabilitiesButton {
               return this.type;
          }

          /**
             Sets Button type

             @param type Button type
          */
          setType(type: ICapabilitiesButton) {
               this.type = type;
          }

     }
     /**
        Structure representing the address data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ContactAddress {
          /**
             The address type
          */
          type : ContactAddressType;
          /**
             The Contact address
          */
          address : string;
          /**
             Constructor used by the implementation

             @param address Address data.
             @param type    Address type.
             @since ARP1.0
          */
          constructor(address: string, type: ContactAddressType) {
               this.address = address;
               this.type = type;
          }
          /**
             Returns the type of the address

             @return AddressType Address type.
             @since ARP1.0
          */
          getType() : ContactAddressType {
               return this.type;
          }

          /**
             Set the address type

             @param type Address type.
             @since ARP1.0
          */
          setType(type: ContactAddressType) {
               this.type = type;
          }

          /**
             Returns the Contact address

             @return address Address data.
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             Set the address of the Contact

             @param address Address data.
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

     }
     /**
        Represents a data table composed of columns and rows.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Table {
          /**
             Number of columns.
          */
          columnCount : number;
          /**
             Definition of columns.
          */
          columns : Array<Column>;
          /**
             Name of the table.
          */
          name : string;
          /**
             Number of rows.
          */
          rowCount : number;
          /**
             Rows of the table containing the data.
          */
          rows : Array<Row>;
          /**
             Constructor by default

             @param name The name of the table
          */
          constructor(name: string) {
               this.name = name;
          }
          /**
             Get the number of columns

             @return The number of columns
          */
          getColumnCount() : number {
               return this.columnCount;
          }

          /**
             Sets the number of columns

             @param columnCount The number of columns
          */
          setColumnCount(columnCount: number) {
               this.columnCount = columnCount;
          }

          /**
             Get the columns

             @return The columns
          */
          getColumns() : Array<Column> {
               return this.columns;
          }

          /**
             Sets the columns of the table

             @param columns The columns of the table
          */
          setColumns(columns: Array<Column>) {
               this.columns = columns;
          }

          /**
             Returns the name of the table

             @return The name of the table
          */
          getName() : string {
               return this.name;
          }

          /**
             Sets the name of the table

             @param name The name of the table
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             Get the number of rows

             @return The number of rows
          */
          getRowCount() : number {
               return this.rowCount;
          }

          /**
             Sets the number of rows

             @param rowCount The number of rows
          */
          setRowCount(rowCount: number) {
               this.rowCount = rowCount;
          }

          /**
             Get the rows of the table

             @return The rows of the table
          */
          getRows() : Array<Row> {
               return this.rows;
          }

          /**
             Sets the rows of the table

             @param rows The rows of the table
          */
          setRows(rows: Array<Row>) {
               this.rows = rows;
          }

     }
     /**
        Represents a local or remote service response.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ServiceResponse {
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the binary Content.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : string;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The headers array (name,value pairs) to be included on the I/O service request.
          */
          headers : Array<Header>;
          /**
             The session context for the Request/Response.
          */
          session : ISession;
          /**
             Constructor used by the implementation

             @param content
             @param contentType
             @param contentLength
             @param contentBinary
             @param contentBinaryLength
             @param headers
             @param session
             @param contentEncoding
             @since ARP1.0
          */
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
          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             Set the content

             @param content
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             Returns the binary content

             @return contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             Set the binary content

             @param contentBinary
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             Retrusn the binary content length

             @return contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             Set the binary content length

             @param contentBinaryLength
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          getContentLength() : string {
               return this.contentLength;
          }

          /**
             Set the content length

             @param contentLength
             @since ARP1.0
          */
          setContentLength(contentLength: string) {
               this.contentLength = contentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             Set the content type

             @param contentType
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             Returns the array of Header

             @return headers
             @since ARP1.0
          */
          getHeaders() : Array<Header> {
               return this.headers;
          }

          /**
             Set the array of Header

             @param headers
             @since ARP1.0
          */
          setHeaders(headers: Array<Header>) {
               this.headers = headers;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getSession() : ISession {
               return this.session;
          }

          /**
             Set the method

             @param session
             @since ARP1.0
          */
          setSession(session: ISession) {
               this.session = session;
          }

     }
     /**
        Structure representing the data of a single acceleration reading.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Acceleration {
          /**
             Timestamp of the acceleration reading.
          */
          timeStamp : number;
          /**
             X-axis component of the acceleration.
          */
          x : number;
          /**
             Y-axis component of the acceleration.
          */
          y : number;
          /**
             Z-axis component of the acceleration.
          */
          z : number;
          /**
             Constructor.
             @param x X Coordinate
             @param y Y Coordinate
             @param z Z Coordinate
             @author Carlos Lozano Diez
             @since ARP1.0
          */
          constructor(x: number, y: number, z: number, timeStamp: number) {
               this.x = x;
               this.y = y;
               this.z = z;
               this.timeStamp = timeStamp;
          }
          /**
             Gets Timestamp of the acceleration reading.

             @return timeStamp Timestamp of the acceleration reading.
          */
          getTimeStamp() : number {
               return this.timeStamp;
          }

          /**
             Sets Timestamp of the acceleration reading.

             @param timeStamp Timestamp of the acceleration reading.
          */
          setTimeStamp(timeStamp: number) {
               this.timeStamp = timeStamp;
          }

          /**
             Gets X-axis component of the acceleration.

             @return x X-axis component of the acceleration.
          */
          getX() : number {
               return this.x;
          }

          /**
             Sets X-axis component of the acceleration.

             @param x X-axis component of the acceleration.
          */
          setX(x: number) {
               this.x = x;
          }

          /**
             Gets Y-axis component of the acceleration.

             @return y Y-axis component of the acceleration.
          */
          getY() : number {
               return this.y;
          }

          /**
             Sets Y-axis component of the acceleration.

             @param y Y-axis component of the acceleration.
          */
          setY(y: number) {
               this.y = y;
          }

          /**
             Gets Z-axis component of the acceleration.

             @return z Z-axis component of the acceleration.
          */
          getZ() : number {
               return this.z;
          }

          /**
             Sets Z-axis component of the acceleration.

             @param z Z-axis component of the acceleration.
          */
          setZ(z: number) {
               this.z = z;
          }

     }
     /**
        Structure representing the data elements of a contact.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class Contact extends ContactUid {
          /**
             The adresses from the contact
          */
          contactAddresses : Array<ContactAddress>;
          /**
             The emails from the contact
          */
          contactEmails : Array<ContactEmail>;
          /**
             The phones from the contact
          */
          contactPhones : Array<ContactPhone>;
          /**
             The social network info from the contact
          */
          contactSocials : Array<ContactSocial>;
          /**
             The aditional tags from the contact
          */
          contactTags : Array<ContactTag>;
          /**
             The websites from the contact
          */
          contactWebsites : Array<ContactWebsite>;
          /**
             The personal info from the contact
          */
          personalInfo : ContactPersonalInfo;
          /**
             The professional info from the contact
          */
          professionalInfo : ContactProfessionalInfo;
          /**
             Constructor used by implementation to set the Contact.

             @param contactId of the Contact
             @since ARP1.0
          */
          constructor(contactId: string) {
               super(contactId);
          }
          /**
             Returns all the addresses of the Contact

             @return ContactAddress[]
             @since ARP1.0
          */
          getContactAddresses() : Array<ContactAddress> {
               return this.contactAddresses;
          }

          /**
             Set the addresses of the Contact

             @param contactAddresses
             @since ARP1.0
          */
          setContactAddresses(contactAddresses: Array<ContactAddress>) {
               this.contactAddresses = contactAddresses;
          }

          /**
             Returns all the emails of the Contact

             @return ContactEmail[]
             @since ARP1.0
          */
          getContactEmails() : Array<ContactEmail> {
               return this.contactEmails;
          }

          /**
             Set the emails of the Contact

             @param contactEmails
             @since ARP1.0
          */
          setContactEmails(contactEmails: Array<ContactEmail>) {
               this.contactEmails = contactEmails;
          }

          /**
             Returns all the phones of the Contact

             @return ContactPhone[]
             @since ARP1.0
          */
          getContactPhones() : Array<ContactPhone> {
               return this.contactPhones;
          }

          /**
             Set the phones of the Contact

             @param contactPhones
             @since ARP1.0
          */
          setContactPhones(contactPhones: Array<ContactPhone>) {
               this.contactPhones = contactPhones;
          }

          /**
             Returns all the social network info of the Contact

             @return ContactSocial[]
             @since ARP1.0
          */
          getContactSocials() : Array<ContactSocial> {
               return this.contactSocials;
          }

          /**
             Set the social network info of the Contact

             @param contactSocials
             @since ARP1.0
          */
          setContactSocials(contactSocials: Array<ContactSocial>) {
               this.contactSocials = contactSocials;
          }

          /**
             Returns the additional tags of the Contact

             @return ContactTag[]
             @since ARP1.0
          */
          getContactTags() : Array<ContactTag> {
               return this.contactTags;
          }

          /**
             Set the additional tags of the Contact

             @param contactTags
             @since ARP1.0
          */
          setContactTags(contactTags: Array<ContactTag>) {
               this.contactTags = contactTags;
          }

          /**
             Returns all the websites of the Contact

             @return ContactWebsite[]
             @since ARP1.0
          */
          getContactWebsites() : Array<ContactWebsite> {
               return this.contactWebsites;
          }

          /**
             Set the websites of the Contact

             @param contactWebsites
             @since ARP1.0
          */
          setContactWebsites(contactWebsites: Array<ContactWebsite>) {
               this.contactWebsites = contactWebsites;
          }

          /**
             Returns the personal info of the Contact

             @return ContactPersonalInfo of the Contact
             @since ARP1.0
          */
          getPersonalInfo() : ContactPersonalInfo {
               return this.personalInfo;
          }

          /**
             Set the personal info of the Contact

             @param personalInfo
             @since ARP1.0
          */
          setPersonalInfo(personalInfo: ContactPersonalInfo) {
               this.personalInfo = personalInfo;
          }

          /**
             Returns the professional info of the Contact

             @return ContactProfessionalInfo[]
             @since ARP1.0
          */
          getProfessionalInfo() : ContactProfessionalInfo {
               return this.professionalInfo;
          }

          /**
             Set the professional info of the Contact

             @param professionalInfo
             @since ARP1.0
          */
          setProfessionalInfo(professionalInfo: ContactProfessionalInfo) {
               this.professionalInfo = professionalInfo;
          }

     }
     /**
        Enumeration ContactEmailType
     */
     export class ContactEmailType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Personal = new ContactEmailType("Personal");
          static Work = new ContactEmailType("Work");
          static Other = new ContactEmailType("Other");
          static Unknown = new ContactEmailType("Unknown");

     }
     /**
        Enumeration LifecycleState
     */
     export class LifecycleState {

          constructor(public value:string){}
          toString(){return this.value;}

          static Starting = new LifecycleState("Starting");
          static Started = new LifecycleState("Started");
          static Running = new LifecycleState("Running");
          static Paused = new LifecycleState("Paused");
          static PausedIdle = new LifecycleState("PausedIdle");
          static PausedRun = new LifecycleState("PausedRun");
          static Resuming = new LifecycleState("Resuming");
          static Stopping = new LifecycleState("Stopping");
          static Unknown = new LifecycleState("Unknown");

     }
     /**
        Enumeration ContactPersonalInfoTitle
     */
     export class ContactPersonalInfoTitle {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mr = new ContactPersonalInfoTitle("Mr");
          static Mrs = new ContactPersonalInfoTitle("Mrs");
          static Ms = new ContactPersonalInfoTitle("Ms");
          static Dr = new ContactPersonalInfoTitle("Dr");
          static Unknown = new ContactPersonalInfoTitle("Unknown");

     }
     /**
        Enumeration IServiceMethod
     */
     export class IServiceMethod {

          constructor(public value:string){}
          toString(){return this.value;}

          static POST = new IServiceMethod("POST");
          static GET = new IServiceMethod("GET");
          static Unknown = new IServiceMethod("Unknown");

     }
     /**
        Enumeration IServiceType
     */
     export class IServiceType {

          constructor(public value:string){}
          toString(){return this.value;}

          static SERVICETYPE_AMF_SERIALIZATION = new IServiceType("SERVICETYPE_AMF_SERIALIZATION");
          static SERVICETYPE_GWT_RPC = new IServiceType("SERVICETYPE_GWT_RPC");
          static SERVICETYPE_OCTET_BINARY = new IServiceType("SERVICETYPE_OCTET_BINARY");
          static SERVICETYPE_REMOTING_SERIALIZATION = new IServiceType("SERVICETYPE_REMOTING_SERIALIZATION");
          static SERVICETYPE_REST_JSON = new IServiceType("SERVICETYPE_REST_JSON");
          static SERVICETYPE_REST_XML = new IServiceType("SERVICETYPE_REST_XML");
          static SERVICETYPE_SOAP_JSON = new IServiceType("SERVICETYPE_SOAP_JSON");
          static SERVICETYPE_SOAP_XML = new IServiceType("SERVICETYPE_SOAP_XML");
          static SERVICETYPE_XMLRPC_JSON = new IServiceType("SERVICETYPE_XMLRPC_JSON");
          static SERVICETYPE_XMLRPC_XML = new IServiceType("SERVICETYPE_XMLRPC_XML");
          static Unknown = new IServiceType("Unknown");

     }
     /**
        Enumeration IServiceProtocolVersion
     */
     export class IServiceProtocolVersion {

          constructor(public value:string){}
          toString(){return this.value;}

          static HTTP_PROTOCOL_VERSION_1_0 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_0");
          static HTTP_PROTOCOL_VERSION_1_1 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_1");
          static Unknown = new IServiceProtocolVersion("Unknown");

     }
     /**
        Enumeration ContactSocialNetwork
     */
     export class ContactSocialNetwork {

          constructor(public value:string){}
          toString(){return this.value;}

          static Twitter = new ContactSocialNetwork("Twitter");
          static Facebook = new ContactSocialNetwork("Facebook");
          static GooglePlus = new ContactSocialNetwork("GooglePlus");
          static LinkedIn = new ContactSocialNetwork("LinkedIn");
          static Flickr = new ContactSocialNetwork("Flickr");
          static Unknown = new ContactSocialNetwork("Unknown");

     }
     /**
        Enumeration ContactPhoneType
     */
     export class ContactPhoneType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Mobile = new ContactPhoneType("Mobile");
          static Work = new ContactPhoneType("Work");
          static Home = new ContactPhoneType("Home");
          static Main = new ContactPhoneType("Main");
          static HomeFax = new ContactPhoneType("HomeFax");
          static WorkFax = new ContactPhoneType("WorkFax");
          static Other = new ContactPhoneType("Other");
          static Unknown = new ContactPhoneType("Unknown");

     }
     /**
        Enumeration ICapabilitiesButton
     */
     export class ICapabilitiesButton {

          constructor(public value:string){}
          toString(){return this.value;}

          static HomeButton = new ICapabilitiesButton("HomeButton");
          static BackButton = new ICapabilitiesButton("BackButton");
          static OptionButton = new ICapabilitiesButton("OptionButton");
          static Unknown = new ICapabilitiesButton("Unknown");

     }
     /**
        Enumeration ContactAddressType
     */
     export class ContactAddressType {

          constructor(public value:string){}
          toString(){return this.value;}

          static Home = new ContactAddressType("Home");
          static Work = new ContactAddressType("Work");
          static Other = new ContactAddressType("Other");
          static Unknown = new ContactAddressType("Unknown");

     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
