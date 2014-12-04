var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var Adaptive;
(function (Adaptive) {
    /**
       Structure representing the data of a http cookie.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Cookie = (function () {
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        function Cookie(name, data) {
            this.name = name;
            this.data = data;
        }
        /**
           Gets Cookie creation timestamp in milliseconds.

           @return creation Cookie creation timestamp in milliseconds.
        */
        Cookie.prototype.getCreation = function () {
            return this.creation;
        };
        /**
           Sets Cookie creation timestamp in milliseconds.

           @param creation Cookie creation timestamp in milliseconds.
        */
        Cookie.prototype.setCreation = function (creation) {
            this.creation = creation;
        };
        /**
           Returns the cookie value

           @return
           @since ARP1.0
        */
        Cookie.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the cookie value

           @param data
           @since ARP1.0
        */
        Cookie.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        Cookie.prototype.getDomain = function () {
            return this.domain;
        };
        /**
           Set the domain

           @param domain
        */
        Cookie.prototype.setDomain = function (domain) {
            this.domain = domain;
        };
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        Cookie.prototype.getExpiry = function () {
            return this.expiry;
        };
        /**
           Set the expiration date in milis

           @param expiry
        */
        Cookie.prototype.setExpiry = function (expiry) {
            this.expiry = expiry;
        };
        /**
           Returns the cookie name

           @return name
           @since ARP1.0
        */
        Cookie.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the cookie name

           @param name
           @since ARP1.0
        */
        Cookie.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        Cookie.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the path

           @param path
        */
        Cookie.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        Cookie.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the scheme

           @param scheme
        */
        Cookie.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        Cookie.prototype.getSecure = function () {
            return this.secure;
        };
        /**
           Set whether the cookie is secure or not

           @param secure
        */
        Cookie.prototype.setSecure = function (secure) {
            this.secure = secure;
        };
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
    /**
       Structure representing a remote or local service access end-point.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Endpoint = (function () {
        /**
           Constructor used by the implementation

           @param host
           @param path
           @param port
           @param proxy
           @param scheme
           @since ARP1.0
        */
        function Endpoint(host, path, port, proxy, scheme) {
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
        Endpoint.prototype.getHost = function () {
            return this.host;
        };
        /**
           Set the host

           @param host
           @since ARP1.0
        */
        Endpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        Endpoint.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the path

           @param path
           @since ARP1.0
        */
        Endpoint.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the port

           @return port
           @since ARP1.0
        */
        Endpoint.prototype.getPort = function () {
            return this.port;
        };
        /**
           Set the port

           @param port
           @since ARP1.0
        */
        Endpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        /**
           Return the proxy

           @return proxy
           @since ARP1.0
        */
        Endpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        /**
           Set the proxy

           @param proxy
           @since ARP1.0
        */
        Endpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        Endpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the scheme

           @param scheme
           @since ARP1.0
        */
        Endpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        return Endpoint;
    })();
    Adaptive.Endpoint = Endpoint;
    /**
       Structure representing the data a single geolocation reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Geolocation = (function () {
        /**
           Constructor used by the implementation

           @param latitude
           @param longitude
           @param altitude
           @param xDoP
           @param yDoP
           @since ARP1.0
        */
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP) {
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
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        /**
           Set altitude in meters

           @param altitude
           @since ARP1.0
        */
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        /**
           Returns the latitude in degrees

           @return latitude
           @since ARP1.0
        */
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        /**
           Set the latitude in degrees

           @param latitude
           @since ARP1.0
        */
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        /**
           Returns the longitude in degrees

           @return longitude
           @since ARP1.0
        */
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        /**
           Returns the latitude in degrees

           @param longitude
           @since ARP1.0
        */
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        /**
           Returns the Dilution of Position in the X axis (longitude)

           @return xDoP
           @since ARP1.0
        */
        Geolocation.prototype.getXDoP = function () {
            return this.xDoP;
        };
        /**
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.setXDoP = function (xDoP) {
            this.xDoP = xDoP;
        };
        /**
           Returns the Dilution of Position in the Y axis (latitude)

           @return yDoP
           @since ARP1.0
        */
        Geolocation.prototype.getYDoP = function () {
            return this.yDoP;
        };
        /**
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.setYDoP = function (yDoP) {
            this.yDoP = yDoP;
        };
        return Geolocation;
    })();
    Adaptive.Geolocation = Geolocation;
    /**
       Structure representing the email data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactEmail = (function () {
        /**
           Constructor used by the implementation

           @param type
           @param primary
           @param email
           @since ARP1.0
        */
        function ContactEmail(type, primary, email) {
            this.type = type;
            this.primary = primary;
            this.email = email;
        }
        /**
           Returns the type of the email

           @return EmailType
           @since ARP1.0
        */
        ContactEmail.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the type of the email

           @param type
           @since ARP1.0
        */
        ContactEmail.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the email of the Contact

           @return email
           @since ARP1.0
        */
        ContactEmail.prototype.getEmail = function () {
            return this.email;
        };
        /**
           Set the email of the Contact

           @param email
           @since ARP1.0
        */
        ContactEmail.prototype.setEmail = function (email) {
            this.email = email;
        };
        /**
           Returns if the email is primary

           @return true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.getPrimary = function () {
            return this.primary;
        };
        /**
           Set if the email

           @param primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.setPrimary = function (primary) {
            this.primary = primary;
        };
        return ContactEmail;
    })();
    Adaptive.ContactEmail = ContactEmail;
    /**
       Structure representing the basic device information.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var DeviceInfo = (function () {
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
        */
        function DeviceInfo(name, model, vendor, uuid) {
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        /**
           Returns the model of the device.

           @return String with the model of the device.
        */
        DeviceInfo.prototype.getModel = function () {
            return this.model;
        };
        /**
           Sets Model of device - equivalent to device release or version.

           @param model Model of device - equivalent to device release or version.
        */
        DeviceInfo.prototype.setModel = function (model) {
            this.model = model;
        };
        /**
           Returns the name of the device.

           @return String with device name.
        */
        DeviceInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets Name of device - equivalent to brand.

           @param name Name of device - equivalent to brand.
        */
        DeviceInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the platform dependent UUID of the device.

           @return String with the 128-bit device identifier.
        */
        DeviceInfo.prototype.getUuid = function () {
            return this.uuid;
        };
        /**
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        DeviceInfo.prototype.setUuid = function (uuid) {
            this.uuid = uuid;
        };
        /**
           Returns the vendor of the device.

           @return String with the vendor name.
        */
        DeviceInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        /**
           Sets Vendor of the device hardware.

           @param vendor Vendor of the device hardware.
        */
        DeviceInfo.prototype.setVendor = function (vendor) {
            this.vendor = vendor;
        };
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
    /**
       Structure representing a database reference.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Database = (function () {
        /**
           Constructor using fields.

           @param name     Name of the Table.
           @param compress Compress enbaled or not.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        function Database(name, compress) {
            this.name = name;
            this.compress = compress;
        }
        /**
           Returns if the table is compressed

           @return Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        Database.prototype.getCompress = function () {
            return this.compress;
        };
        /**
           Sets if the table is compressed or not.

           @param compress Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        Database.prototype.setCompress = function (compress) {
            this.compress = compress;
        };
        /**
           Returns the name.

           @return The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        Database.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the table.

           @param name The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        Database.prototype.setName = function (name) {
            this.name = name;
        };
        return Database;
    })();
    Adaptive.Database = Database;
    /**
       Structure representing the internal unique identifier data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactUid = (function () {
        /**
           Constructor used by implementation to set the Contact id.

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        function ContactUid(contactId) {
            this.contactId = contactId;
        }
        /**
           Returns the contact id

           @return Contactid Internal unique contact id.
           @since ARP1.0
        */
        ContactUid.prototype.getContactId = function () {
            return this.contactId;
        };
        /**
           Set the id of the Contact

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        ContactUid.prototype.setContactId = function (contactId) {
            this.contactId = contactId;
        };
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactTag = (function () {
        /**
           Constructor used by the implementation

           @param dataValue
           @param name
           @since ARP1.0
        */
        function ContactTag(name, dataValue) {
            this.name = name;
            this.dataValue = dataValue;
        }
        /**
           Returns the value of the Tag

           @return value
           @since ARP1.0
        */
        ContactTag.prototype.getDataValue = function () {
            return this.dataValue;
        };
        /**
           Set the value of the Tag

           @param dataValue
           @since ARP1.0
        */
        ContactTag.prototype.setDataValue = function (dataValue) {
            this.dataValue = dataValue;
        };
        /**
           Returns the name of the Tag

           @return name
           @since ARP1.0
        */
        ContactTag.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name of the Tag

           @param name
           @since ARP1.0
        */
        ContactTag.prototype.setName = function (name) {
            this.name = name;
        };
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
    /**
       Represents a single secureKey-value pair.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var SecureKeyPair = (function () {
        /**
           Constructor with parameters

           @param secureKey   name of the keypair
           @param secureData value of the keypair
           @since ARP1.0
        */
        function SecureKeyPair(secureKey, secureData) {
            this.secureKey = secureKey;
            this.secureData = secureData;
        }
        /**
           Returns the object value

           @return Value.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.getSecureData = function () {
            return this.secureData;
        };
        /**
           Sets the value for this object

           @param secureData value to set.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.setSecureData = function (secureData) {
            this.secureData = secureData;
        };
        /**
           Returns the object secureKey name.

           @return Key name.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.getSecureKey = function () {
            return this.secureKey;
        };
        /**
           Sets the secureKey name for this object.

           @param secureKey Key name.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.setSecureKey = function (secureKey) {
            this.secureKey = secureKey;
        };
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
    /**
       Structure representing the binary attachment data.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var AttachmentData = (function () {
        /**
           Constructor used by the implementation

           @param data         raw data of the file attachment
           @param dataSize     size of the file attachment
           @param fileName     name of the file attachment
           @param mimeType     mime type of the file attachment
           @param referenceUrl relative url of the file attachment
           @since ARP1.0
        */
        function AttachmentData(data, dataSize, fileName, mimeType, referenceUrl) {
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
        AttachmentData.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the data of the attachment as a byte[]

           @param data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        AttachmentData.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the size of the attachment as a long

           @return dataSize Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        AttachmentData.prototype.getDataSize = function () {
            return this.dataSize;
        };
        /**
           Set the size of the attachment as a long

           @param dataSize Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        AttachmentData.prototype.setDataSize = function (dataSize) {
            this.dataSize = dataSize;
        };
        /**
           Returns the filename of the attachment

           @return fileName Name of the attachment.
           @since ARP1.0
        */
        AttachmentData.prototype.getFileName = function () {
            return this.fileName;
        };
        /**
           Set the name of the file attachment

           @param fileName Name of the attachment.
           @since ARP1.0
        */
        AttachmentData.prototype.setFileName = function (fileName) {
            this.fileName = fileName;
        };
        /**
           Returns the mime type of the attachment

           @return mimeType
           @since ARP1.0
        */
        AttachmentData.prototype.getMimeType = function () {
            return this.mimeType;
        };
        /**
           Set the mime type of the attachment

           @param mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        AttachmentData.prototype.setMimeType = function (mimeType) {
            this.mimeType = mimeType;
        };
        /**
           Returns the absolute url of the file attachment

           @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        AttachmentData.prototype.getReferenceUrl = function () {
            return this.referenceUrl;
        };
        /**
           Set the absolute url of the attachment

           @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        AttachmentData.prototype.setReferenceUrl = function (referenceUrl) {
            this.referenceUrl = referenceUrl;
        };
        return AttachmentData;
    })();
    Adaptive.AttachmentData = AttachmentData;
    /**
       Represents a specific application life-cycle stage.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Lifecycle = (function () {
        /**
           Constructor used by the implementation

           @param state
           @since ARP1.0
        */
        function Lifecycle(state) {
            this.state = state;
        }
        /**
           Returns the state of the application

           @return state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.getState = function () {
            return this.state;
        };
        /**
           Set the State of the application

           @param state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.setState = function (state) {
            this.state = state;
        };
        return Lifecycle;
    })();
    Adaptive.Lifecycle = Lifecycle;
    /**
       Represents a specific user or system locate.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Locale = (function () {
        /**
           Constructor used by the implementation

           @param country
           @param language
           @since ARP1.0
        */
        function Locale(language, country) {
            this.language = language;
            this.country = country;
        }
        /**
           Returns the country code

           @return country code
           @since ARP1.0
        */
        Locale.prototype.getCountry = function () {
            return this.country;
        };
        /**
           Set the country code

           @param country code
           @since ARP1.0
        */
        Locale.prototype.setCountry = function (country) {
            this.country = country;
        };
        /**
           Returns the language code

           @return language code
           @since ARP1.0
        */
        Locale.prototype.getLanguage = function () {
            return this.language;
        };
        /**
           Set the language code

           @param language code
           @since ARP1.0
        */
        Locale.prototype.setLanguage = function (language) {
            this.language = language;
        };
        return Locale;
    })();
    Adaptive.Locale = Locale;
    /**
       Structure representing the personal info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactPersonalInfo = (function () {
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        function ContactPersonalInfo(name, middleName, lastName, title) {
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
        ContactPersonalInfo.prototype.getTitle = function () {
            return this.title;
        };
        /**
           Set the Title of the Contact

           @param title
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setTitle = function (title) {
            this.title = title;
        };
        /**
           Returns the last name of the Contact

           @return lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        /**
           Set the last name of the Contact

           @param lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        /**
           Returns the middle name of the Contact

           @return middelName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getMiddleName = function () {
            return this.middleName;
        };
        /**
           Set the middle name of the Contact

           @param middleName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setMiddleName = function (middleName) {
            this.middleName = middleName;
        };
        /**
           Returns the name of the Contact

           @return name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name of the Contact

           @param name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    /**
       Structure representing the professional info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactProfessionalInfo = (function () {
        /**
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param jobTitle
           @param jobDescription
           @param company
           @since ARP1.0
        */
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            this.jobTitle = jobTitle;
            this.jobDescription = jobDescription;
            this.company = company;
        }
        /**
           Returns the company of the job

           @return company
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.getCompany = function () {
            return this.company;
        };
        /**
           Set the company of the job

           @param company
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setCompany = function (company) {
            this.company = company;
        };
        /**
           Returns the description of the job

           @return description
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.getJobDescription = function () {
            return this.jobDescription;
        };
        /**
           Set the description of the job

           @param jobDescription
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setJobDescription = function (jobDescription) {
            this.jobDescription = jobDescription;
        };
        /**
           Returns the title of the job

           @return title
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.getJobTitle = function () {
            return this.jobTitle;
        };
        /**
           Set the title of the job

           @param jobTitle
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setJobTitle = function (jobTitle) {
            this.jobTitle = jobTitle;
        };
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    /**
       Represents a row for a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Row = (function () {
        /**
           Constructor for implementation using.

           @param values The values of the row
        */
        function Row(values) {
            this.values = values;
        }
        /**
           Returns the values of the row.

           @return The values of the row.
        */
        Row.prototype.getValues = function () {
            return this.values;
        };
        /**
           Sets the values of the row.

           @param values The values of the row.
        */
        Row.prototype.setValues = function (values) {
            this.values = values;
        };
        return Row;
    })();
    Adaptive.Row = Row;
    /**
       Represents an instance of a service.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Service = (function () {
        /**
           Constructor used by the implementation

           @param endpoint
           @param name
           @param method
           @param type
           @since ARP1.0
        */
        function Service(endpoint, name, method, type) {
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
        Service.prototype.getMethod = function () {
            return this.method;
        };
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        Service.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           Returns the type

           @return type
           @since ARP1.0
        */
        Service.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the type

           @param type
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the endpoint

           @return endpoint
           @since ARP1.0
        */
        Service.prototype.getEndpoint = function () {
            return this.endpoint;
        };
        /**
           Set the endpoint

           @param endpoint
           @since ARP1.0
        */
        Service.prototype.setEndpoint = function (endpoint) {
            this.endpoint = endpoint;
        };
        /**
           Returns the name

           @return name
           @since ARP1.0
        */
        Service.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the name

           @param name
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        return Service;
    })();
    Adaptive.Service = Service;
    /**
       Represents a local or remote service request.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ServiceRequest = (function () {
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
        function ServiceRequest(content, contentType, contentLength, rawContent, headers, method, protocolVersion, session, contentEncoding) {
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
        ServiceRequest.prototype.getProtocolVersion = function () {
            return this.protocolVersion;
        };
        /**
           Set the protocol version

           @param protocolVersion
           @since ARP1.0
        */
        ServiceRequest.prototype.setProtocolVersion = function (protocolVersion) {
            this.protocolVersion = protocolVersion;
        };
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        ServiceRequest.prototype.getContent = function () {
            return this.content;
        };
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        ServiceRequest.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        ServiceRequest.prototype.getHeaders = function () {
            return this.headers;
        };
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        ServiceRequest.prototype.setHeaders = function (headers) {
            this.headers = headers;
        };
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        ServiceRequest.prototype.getMethod = function () {
            return this.method;
        };
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        ServiceRequest.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           Returns the byte[] of the content

           @return rawContent
           @since ARP1.0
        */
        ServiceRequest.prototype.getRawContent = function () {
            return this.rawContent;
        };
        /**
           Set the byte[] of the content

           @param rawContent
           @since ARP1.0
        */
        ServiceRequest.prototype.setRawContent = function (rawContent) {
            this.rawContent = rawContent;
        };
        /**
           Returns the session object

           @return session
           @since ARP1.0
        */
        ServiceRequest.prototype.getSession = function () {
            return this.session;
        };
        /**
           Set the session object

           @param session
           @since ARP1.0
        */
        ServiceRequest.prototype.setSession = function (session) {
            this.session = session;
        };
        return ServiceRequest;
    })();
    Adaptive.ServiceRequest = ServiceRequest;
    /**
       Structure representing the column specification of a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Column = (function () {
        /**
           Constructor for implementation using.

           @param name Name of the column
        */
        function Column(name) {
            this.name = name;
        }
        /**
           Returns the name of the column.

           @return The name of the column.
        */
        Column.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the column.

           @param name The name of the column.
        */
        Column.prototype.setName = function (name) {
            this.name = name;
        };
        return Column;
    })();
    Adaptive.Column = Column;
    /**
       Structure representing the social data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactSocial = (function () {
        /**
           Constructor used by the implementation

           @param socialNetwork of the profile
           @param profileUrl    of the user
           @since ARP1.0
        */
        function ContactSocial(socialNetwork, profileUrl) {
            this.socialNetwork = socialNetwork;
            this.profileUrl = profileUrl;
        }
        /**
           Returns the social network

           @return socialNetwork
           @since ARP1.0
        */
        ContactSocial.prototype.getSocialNetwork = function () {
            return this.socialNetwork;
        };
        /**
           Set the social network

           @param socialNetwork
           @since ARP1.0
        */
        ContactSocial.prototype.setSocialNetwork = function (socialNetwork) {
            this.socialNetwork = socialNetwork;
        };
        /**
           Returns the profile url of the user

           @return profileUrl
           @since ARP1.0
        */
        ContactSocial.prototype.getProfileUrl = function () {
            return this.profileUrl;
        };
        /**
           Set the profile url of the iser

           @param profileUrl
           @since ARP1.0
        */
        ContactSocial.prototype.setProfileUrl = function (profileUrl) {
            this.profileUrl = profileUrl;
        };
        return ContactSocial;
    })();
    Adaptive.ContactSocial = ContactSocial;
    /**
       Represents the basic information about the operating system.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var OSInfo = (function () {
        /**
           Constructor used by implementation to set the OS information.

           @param name    of the OS.
           @param version of the OS.
           @param vendor  of the OS.
        */
        function OSInfo(name, version, vendor) {
            this.name = name;
            this.version = version;
            this.vendor = vendor;
        }
        /**
           Returns the name of the operating system.

           @return OS name.
        */
        OSInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets The name of the operating system.

           @param name The name of the operating system.
        */
        OSInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the vendor of the operating system.

           @return OS vendor.
        */
        OSInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        /**
           Sets The vendor of the operating system.

           @param vendor The vendor of the operating system.
        */
        OSInfo.prototype.setVendor = function (vendor) {
            this.vendor = vendor;
        };
        /**
           Returns the version of the operating system.

           @return OS version.
        */
        OSInfo.prototype.getVersion = function () {
            return this.version;
        };
        /**
           Sets The version/identifier of the operating system.

           @param version The version/identifier of the operating system.
        */
        OSInfo.prototype.setVersion = function (version) {
            this.version = version;
        };
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
    /**
       Structure representing the data of a http request or response header.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Header = (function () {
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        function Header(name, data) {
            this.name = name;
            this.data = data;
        }
        /**
           Returns the header value

           @return
           @since ARP1.0
        */
        Header.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the header value

           @param data
           @since ARP1.0
        */
        Header.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the header name

           @return name
           @since ARP1.0
        */
        Header.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the header name

           @param name
           @since ARP1.0
        */
        Header.prototype.setName = function (name) {
            this.name = name;
        };
        return Header;
    })();
    Adaptive.Header = Header;
    /**
       Structure representing the data elements of an email addressee.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var EmailAddress = (function () {
        /**
           Constructor used by implementation

           @param address
           @since ARP1.0
        */
        function EmailAddress(address) {
            this.address = address;
        }
        /**
           Returns the email address

           @return address of the Email
           @since ARP1.0
        */
        EmailAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           Set the Email address

           @param address of the Email
           @since ARP1.0
        */
        EmailAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        return EmailAddress;
    })();
    Adaptive.EmailAddress = EmailAddress;
    /**
       Structure representing the website data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactWebsite = (function () {
        /**
           Constructor used by the implementation

           @param url
           @since ARP1.0
        */
        function ContactWebsite(url) {
            this.url = url;
        }
        /**
           Returns the url of the website

           @return website url
           @since ARP1.0
        */
        ContactWebsite.prototype.getUrl = function () {
            return this.url;
        };
        /**
           Set the url of the website

           @param url
           @since ARP1.0
        */
        ContactWebsite.prototype.setUrl = function (url) {
            this.url = url;
        };
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
    /**
       Structure representing the phone data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactPhone = (function () {
        /**
           Constructor used by implementation to set the contact Phone

           @param phone
           @param phoneType
           @since ARP1.0
        */
        function ContactPhone(phone, phoneType) {
            this.phone = phone;
            this.phoneType = phoneType;
        }
        /**
           Returns the phone phoneType

           @return phoneType
           @since ARP1.0
        */
        ContactPhone.prototype.getPhoneType = function () {
            return this.phoneType;
        };
        /**
           Set the phoneType of the phone number

           @param phoneType
           @since ARP1.0
        */
        ContactPhone.prototype.setPhoneType = function (phoneType) {
            this.phoneType = phoneType;
        };
        /**
           Returns the phone number

           @return phone number
           @since ARP1.0
        */
        ContactPhone.prototype.getPhone = function () {
            return this.phone;
        };
        /**
           Set the phone number

           @param phone number
           @since ARP1.0
        */
        ContactPhone.prototype.setPhone = function (phone) {
            this.phone = phone;
        };
        return ContactPhone;
    })();
    Adaptive.ContactPhone = ContactPhone;
    /**
       Structure representing the data elements of an email.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Email = (function () {
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
        function Email(toRecipients, ccRecipients, bccRecipients, attachmentData, messageBody, messageBodyMimeType, subject) {
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
        Email.prototype.getAttachmentData = function () {
            return this.attachmentData;
        };
        /**
           Set the email attachment data array

           @param attachmentData array of email attatchments
           @since ARP1.0
        */
        Email.prototype.setAttachmentData = function (attachmentData) {
            this.attachmentData = attachmentData;
        };
        /**
           Returns the array of recipients

           @return bccRecipients array of bcc recipients
           @since ARP1.0
        */
        Email.prototype.getBccRecipients = function () {
            return this.bccRecipients;
        };
        /**
           Set the array of recipients

           @param bccRecipients array of bcc recipients
           @since ARP1.0
        */
        Email.prototype.setBccRecipients = function (bccRecipients) {
            this.bccRecipients = bccRecipients;
        };
        /**
           Returns the array of recipients

           @return ccRecipients array of cc recipients
           @since ARP1.0
        */
        Email.prototype.getCcRecipients = function () {
            return this.ccRecipients;
        };
        /**
           Set the array of recipients

           @param ccRecipients array of cc recipients
           @since ARP1.0
        */
        Email.prototype.setCcRecipients = function (ccRecipients) {
            this.ccRecipients = ccRecipients;
        };
        /**
           Returns the message body of the email

           @return message Body string of the email
        */
        Email.prototype.getMessageBody = function () {
            return this.messageBody;
        };
        /**
           Set the message body of the email

           @param messageBody message body of the email
           @since ARP1.0
        */
        Email.prototype.setMessageBody = function (messageBody) {
            this.messageBody = messageBody;
        };
        /**
           Returns the myme type of the message body

           @return mime type string of the message boddy
           @since ARP1.0
        */
        Email.prototype.getMessageBodyMimeType = function () {
            return this.messageBodyMimeType;
        };
        /**
           Set the mime type for the message body

           @param messageBodyMimeType type of the body message
           @since ARP1.0
        */
        Email.prototype.setMessageBodyMimeType = function (messageBodyMimeType) {
            this.messageBodyMimeType = messageBodyMimeType;
        };
        /**
           Returns the subject of the email

           @return subject string of the email
           @since ARP1.0
        */
        Email.prototype.getSubject = function () {
            return this.subject;
        };
        /**
           Set the subject of the email

           @param subject of the email
           @since ARP1.0
        */
        Email.prototype.setSubject = function (subject) {
            this.subject = subject;
        };
        /**
           Returns the array of recipients

           @return toRecipients array of recipients
           @since ARP1.0
        */
        Email.prototype.getToRecipients = function () {
            return this.toRecipients;
        };
        /**
           Set the array of recipients

           @param toRecipients array of recipients
           @since ARP1.0
        */
        Email.prototype.setToRecipients = function (toRecipients) {
            this.toRecipients = toRecipients;
        };
        return Email;
    })();
    Adaptive.Email = Email;
    /**
       Structure representing the a physical or logical button on a device.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Button = (function () {
        /**
           Constructor used by the implementation

           @param type Button type.
           @since ARP1.0
        */
        function Button(type) {
            this.type = type;
        }
        /**
           Returns the button type

           @return type Button type.
           @since ARP1.0
        */
        Button.prototype.getType = function () {
            return this.type;
        };
        /**
           Sets Button type

           @param type Button type
        */
        Button.prototype.setType = function (type) {
            this.type = type;
        };
        return Button;
    })();
    Adaptive.Button = Button;
    /**
       Structure representing the address data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ContactAddress = (function () {
        /**
           Constructor used by the implementation

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        function ContactAddress(address, type) {
            this.address = address;
            this.type = type;
        }
        /**
           Returns the type of the address

           @return AddressType Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.getType = function () {
            return this.type;
        };
        /**
           Set the address type

           @param type Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Returns the Contact address

           @return address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           Set the address of the Contact

           @param address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        return ContactAddress;
    })();
    Adaptive.ContactAddress = ContactAddress;
    /**
       Represents a data table composed of columns and rows.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Table = (function () {
        /**
           Constructor by default

           @param name The name of the table
        */
        function Table(name) {
            this.name = name;
        }
        /**
           Get the number of columns

           @return The number of columns
        */
        Table.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        /**
           Sets the number of columns

           @param columnCount The number of columns
        */
        Table.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        /**
           Get the columns

           @return The columns
        */
        Table.prototype.getColumns = function () {
            return this.columns;
        };
        /**
           Sets the columns of the table

           @param columns The columns of the table
        */
        Table.prototype.setColumns = function (columns) {
            this.columns = columns;
        };
        /**
           Returns the name of the table

           @return The name of the table
        */
        Table.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the table

           @param name The name of the table
        */
        Table.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Get the number of rows

           @return The number of rows
        */
        Table.prototype.getRowCount = function () {
            return this.rowCount;
        };
        /**
           Sets the number of rows

           @param rowCount The number of rows
        */
        Table.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        /**
           Get the rows of the table

           @return The rows of the table
        */
        Table.prototype.getRows = function () {
            return this.rows;
        };
        /**
           Sets the rows of the table

           @param rows The rows of the table
        */
        Table.prototype.setRows = function (rows) {
            this.rows = rows;
        };
        return Table;
    })();
    Adaptive.Table = Table;
    /**
       Represents a local or remote service response.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var ServiceResponse = (function () {
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
        function ServiceResponse(content, contentType, contentLength, contentBinary, contentBinaryLength, headers, session, contentEncoding) {
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
        ServiceResponse.prototype.getContent = function () {
            return this.content;
        };
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        ServiceResponse.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           Returns the binary content

           @return contentBinary
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentBinary = function () {
            return this.contentBinary;
        };
        /**
           Set the binary content

           @param contentBinary
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        /**
           Retrusn the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        /**
           Set the binary content length

           @param contentBinaryLength
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentBinaryLength = function (contentBinaryLength) {
            this.contentBinaryLength = contentBinaryLength;
        };
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        ServiceResponse.prototype.getHeaders = function () {
            return this.headers;
        };
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        ServiceResponse.prototype.setHeaders = function (headers) {
            this.headers = headers;
        };
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        ServiceResponse.prototype.getSession = function () {
            return this.session;
        };
        /**
           Set the method

           @param session
           @since ARP1.0
        */
        ServiceResponse.prototype.setSession = function (session) {
            this.session = session;
        };
        return ServiceResponse;
    })();
    Adaptive.ServiceResponse = ServiceResponse;
    /**
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Acceleration = (function () {
        /**
           Constructor.
           @param x X Coordinate
           @param y Y Coordinate
           @param z Z Coordinate
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        function Acceleration(x, y, z, timeStamp) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.timeStamp = timeStamp;
        }
        /**
           Gets Timestamp of the acceleration reading.

           @return timeStamp Timestamp of the acceleration reading.
        */
        Acceleration.prototype.getTimeStamp = function () {
            return this.timeStamp;
        };
        /**
           Sets Timestamp of the acceleration reading.

           @param timeStamp Timestamp of the acceleration reading.
        */
        Acceleration.prototype.setTimeStamp = function (timeStamp) {
            this.timeStamp = timeStamp;
        };
        /**
           Gets X-axis component of the acceleration.

           @return x X-axis component of the acceleration.
        */
        Acceleration.prototype.getX = function () {
            return this.x;
        };
        /**
           Sets X-axis component of the acceleration.

           @param x X-axis component of the acceleration.
        */
        Acceleration.prototype.setX = function (x) {
            this.x = x;
        };
        /**
           Gets Y-axis component of the acceleration.

           @return y Y-axis component of the acceleration.
        */
        Acceleration.prototype.getY = function () {
            return this.y;
        };
        /**
           Sets Y-axis component of the acceleration.

           @param y Y-axis component of the acceleration.
        */
        Acceleration.prototype.setY = function (y) {
            this.y = y;
        };
        /**
           Gets Z-axis component of the acceleration.

           @return z Z-axis component of the acceleration.
        */
        Acceleration.prototype.getZ = function () {
            return this.z;
        };
        /**
           Sets Z-axis component of the acceleration.

           @param z Z-axis component of the acceleration.
        */
        Acceleration.prototype.setZ = function (z) {
            this.z = z;
        };
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
    /**
       Structure representing the data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var Contact = (function (_super) {
        __extends(Contact, _super);
        /**
           Constructor used by implementation to set the Contact.

           @param contactId of the Contact
           @since ARP1.0
        */
        function Contact(contactId) {
            _super.call(this, contactId);
        }
        /**
           Returns all the addresses of the Contact

           @return ContactAddress[]
           @since ARP1.0
        */
        Contact.prototype.getContactAddresses = function () {
            return this.contactAddresses;
        };
        /**
           Set the addresses of the Contact

           @param contactAddresses
           @since ARP1.0
        */
        Contact.prototype.setContactAddresses = function (contactAddresses) {
            this.contactAddresses = contactAddresses;
        };
        /**
           Returns all the emails of the Contact

           @return ContactEmail[]
           @since ARP1.0
        */
        Contact.prototype.getContactEmails = function () {
            return this.contactEmails;
        };
        /**
           Set the emails of the Contact

           @param contactEmails
           @since ARP1.0
        */
        Contact.prototype.setContactEmails = function (contactEmails) {
            this.contactEmails = contactEmails;
        };
        /**
           Returns all the phones of the Contact

           @return ContactPhone[]
           @since ARP1.0
        */
        Contact.prototype.getContactPhones = function () {
            return this.contactPhones;
        };
        /**
           Set the phones of the Contact

           @param contactPhones
           @since ARP1.0
        */
        Contact.prototype.setContactPhones = function (contactPhones) {
            this.contactPhones = contactPhones;
        };
        /**
           Returns all the social network info of the Contact

           @return ContactSocial[]
           @since ARP1.0
        */
        Contact.prototype.getContactSocials = function () {
            return this.contactSocials;
        };
        /**
           Set the social network info of the Contact

           @param contactSocials
           @since ARP1.0
        */
        Contact.prototype.setContactSocials = function (contactSocials) {
            this.contactSocials = contactSocials;
        };
        /**
           Returns the additional tags of the Contact

           @return ContactTag[]
           @since ARP1.0
        */
        Contact.prototype.getContactTags = function () {
            return this.contactTags;
        };
        /**
           Set the additional tags of the Contact

           @param contactTags
           @since ARP1.0
        */
        Contact.prototype.setContactTags = function (contactTags) {
            this.contactTags = contactTags;
        };
        /**
           Returns all the websites of the Contact

           @return ContactWebsite[]
           @since ARP1.0
        */
        Contact.prototype.getContactWebsites = function () {
            return this.contactWebsites;
        };
        /**
           Set the websites of the Contact

           @param contactWebsites
           @since ARP1.0
        */
        Contact.prototype.setContactWebsites = function (contactWebsites) {
            this.contactWebsites = contactWebsites;
        };
        /**
           Returns the personal info of the Contact

           @return ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        Contact.prototype.getPersonalInfo = function () {
            return this.personalInfo;
        };
        /**
           Set the personal info of the Contact

           @param personalInfo
           @since ARP1.0
        */
        Contact.prototype.setPersonalInfo = function (personalInfo) {
            this.personalInfo = personalInfo;
        };
        /**
           Returns the professional info of the Contact

           @return ContactProfessionalInfo[]
           @since ARP1.0
        */
        Contact.prototype.getProfessionalInfo = function () {
            return this.professionalInfo;
        };
        /**
           Set the professional info of the Contact

           @param professionalInfo
           @since ARP1.0
        */
        Contact.prototype.setProfessionalInfo = function (professionalInfo) {
            this.professionalInfo = professionalInfo;
        };
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    /**
       Enumeration ContactEmailType
    */
    var ContactEmailType = (function () {
        function ContactEmailType(value) {
            this.value = value;
        }
        ContactEmailType.prototype.toString = function () {
            return this.value;
        };
        ContactEmailType.Personal = new ContactEmailType("Personal");
        ContactEmailType.Work = new ContactEmailType("Work");
        ContactEmailType.Other = new ContactEmailType("Other");
        ContactEmailType.Unknown = new ContactEmailType("Unknown");
        return ContactEmailType;
    })();
    Adaptive.ContactEmailType = ContactEmailType;
    /**
       Enumeration LifecycleState
    */
    var LifecycleState = (function () {
        function LifecycleState(value) {
            this.value = value;
        }
        LifecycleState.prototype.toString = function () {
            return this.value;
        };
        LifecycleState.Starting = new LifecycleState("Starting");
        LifecycleState.Started = new LifecycleState("Started");
        LifecycleState.Running = new LifecycleState("Running");
        LifecycleState.Paused = new LifecycleState("Paused");
        LifecycleState.PausedIdle = new LifecycleState("PausedIdle");
        LifecycleState.PausedRun = new LifecycleState("PausedRun");
        LifecycleState.Resuming = new LifecycleState("Resuming");
        LifecycleState.Stopping = new LifecycleState("Stopping");
        LifecycleState.Unknown = new LifecycleState("Unknown");
        return LifecycleState;
    })();
    Adaptive.LifecycleState = LifecycleState;
    /**
       Enumeration ContactPersonalInfoTitle
    */
    var ContactPersonalInfoTitle = (function () {
        function ContactPersonalInfoTitle(value) {
            this.value = value;
        }
        ContactPersonalInfoTitle.prototype.toString = function () {
            return this.value;
        };
        ContactPersonalInfoTitle.Mr = new ContactPersonalInfoTitle("Mr");
        ContactPersonalInfoTitle.Mrs = new ContactPersonalInfoTitle("Mrs");
        ContactPersonalInfoTitle.Ms = new ContactPersonalInfoTitle("Ms");
        ContactPersonalInfoTitle.Dr = new ContactPersonalInfoTitle("Dr");
        ContactPersonalInfoTitle.Unknown = new ContactPersonalInfoTitle("Unknown");
        return ContactPersonalInfoTitle;
    })();
    Adaptive.ContactPersonalInfoTitle = ContactPersonalInfoTitle;
    /**
       Enumeration IServiceMethod
    */
    var IServiceMethod = (function () {
        function IServiceMethod(value) {
            this.value = value;
        }
        IServiceMethod.prototype.toString = function () {
            return this.value;
        };
        IServiceMethod.POST = new IServiceMethod("POST");
        IServiceMethod.GET = new IServiceMethod("GET");
        IServiceMethod.Unknown = new IServiceMethod("Unknown");
        return IServiceMethod;
    })();
    Adaptive.IServiceMethod = IServiceMethod;
    /**
       Enumeration IServiceType
    */
    var IServiceType = (function () {
        function IServiceType(value) {
            this.value = value;
        }
        IServiceType.prototype.toString = function () {
            return this.value;
        };
        IServiceType.SERVICETYPE_AMF_SERIALIZATION = new IServiceType("SERVICETYPE_AMF_SERIALIZATION");
        IServiceType.SERVICETYPE_GWT_RPC = new IServiceType("SERVICETYPE_GWT_RPC");
        IServiceType.SERVICETYPE_OCTET_BINARY = new IServiceType("SERVICETYPE_OCTET_BINARY");
        IServiceType.SERVICETYPE_REMOTING_SERIALIZATION = new IServiceType("SERVICETYPE_REMOTING_SERIALIZATION");
        IServiceType.SERVICETYPE_REST_JSON = new IServiceType("SERVICETYPE_REST_JSON");
        IServiceType.SERVICETYPE_REST_XML = new IServiceType("SERVICETYPE_REST_XML");
        IServiceType.SERVICETYPE_SOAP_JSON = new IServiceType("SERVICETYPE_SOAP_JSON");
        IServiceType.SERVICETYPE_SOAP_XML = new IServiceType("SERVICETYPE_SOAP_XML");
        IServiceType.SERVICETYPE_XMLRPC_JSON = new IServiceType("SERVICETYPE_XMLRPC_JSON");
        IServiceType.SERVICETYPE_XMLRPC_XML = new IServiceType("SERVICETYPE_XMLRPC_XML");
        IServiceType.Unknown = new IServiceType("Unknown");
        return IServiceType;
    })();
    Adaptive.IServiceType = IServiceType;
    /**
       Enumeration IServiceProtocolVersion
    */
    var IServiceProtocolVersion = (function () {
        function IServiceProtocolVersion(value) {
            this.value = value;
        }
        IServiceProtocolVersion.prototype.toString = function () {
            return this.value;
        };
        IServiceProtocolVersion.HTTP_PROTOCOL_VERSION_1_0 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_0");
        IServiceProtocolVersion.HTTP_PROTOCOL_VERSION_1_1 = new IServiceProtocolVersion("HTTP_PROTOCOL_VERSION_1_1");
        IServiceProtocolVersion.Unknown = new IServiceProtocolVersion("Unknown");
        return IServiceProtocolVersion;
    })();
    Adaptive.IServiceProtocolVersion = IServiceProtocolVersion;
    /**
       Enumeration ContactSocialNetwork
    */
    var ContactSocialNetwork = (function () {
        function ContactSocialNetwork(value) {
            this.value = value;
        }
        ContactSocialNetwork.prototype.toString = function () {
            return this.value;
        };
        ContactSocialNetwork.Twitter = new ContactSocialNetwork("Twitter");
        ContactSocialNetwork.Facebook = new ContactSocialNetwork("Facebook");
        ContactSocialNetwork.GooglePlus = new ContactSocialNetwork("GooglePlus");
        ContactSocialNetwork.LinkedIn = new ContactSocialNetwork("LinkedIn");
        ContactSocialNetwork.Flickr = new ContactSocialNetwork("Flickr");
        ContactSocialNetwork.Unknown = new ContactSocialNetwork("Unknown");
        return ContactSocialNetwork;
    })();
    Adaptive.ContactSocialNetwork = ContactSocialNetwork;
    /**
       Enumeration ContactPhoneType
    */
    var ContactPhoneType = (function () {
        function ContactPhoneType(value) {
            this.value = value;
        }
        ContactPhoneType.prototype.toString = function () {
            return this.value;
        };
        ContactPhoneType.Mobile = new ContactPhoneType("Mobile");
        ContactPhoneType.Work = new ContactPhoneType("Work");
        ContactPhoneType.Home = new ContactPhoneType("Home");
        ContactPhoneType.Main = new ContactPhoneType("Main");
        ContactPhoneType.HomeFax = new ContactPhoneType("HomeFax");
        ContactPhoneType.WorkFax = new ContactPhoneType("WorkFax");
        ContactPhoneType.Other = new ContactPhoneType("Other");
        ContactPhoneType.Unknown = new ContactPhoneType("Unknown");
        return ContactPhoneType;
    })();
    Adaptive.ContactPhoneType = ContactPhoneType;
    /**
       Enumeration ICapabilitiesButton
    */
    var ICapabilitiesButton = (function () {
        function ICapabilitiesButton(value) {
            this.value = value;
        }
        ICapabilitiesButton.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesButton.HomeButton = new ICapabilitiesButton("HomeButton");
        ICapabilitiesButton.BackButton = new ICapabilitiesButton("BackButton");
        ICapabilitiesButton.OptionButton = new ICapabilitiesButton("OptionButton");
        ICapabilitiesButton.Unknown = new ICapabilitiesButton("Unknown");
        return ICapabilitiesButton;
    })();
    Adaptive.ICapabilitiesButton = ICapabilitiesButton;
    /**
       Enumeration ContactAddressType
    */
    var ContactAddressType = (function () {
        function ContactAddressType(value) {
            this.value = value;
        }
        ContactAddressType.prototype.toString = function () {
            return this.value;
        };
        ContactAddressType.Home = new ContactAddressType("Home");
        ContactAddressType.Work = new ContactAddressType("Work");
        ContactAddressType.Other = new ContactAddressType("Other");
        ContactAddressType.Unknown = new ContactAddressType("Unknown");
        return ContactAddressType;
    })();
    Adaptive.ContactAddressType = ContactAddressType;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Adaptive.js.map