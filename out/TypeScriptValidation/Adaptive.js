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
       Structure representing a native response to the HTML5

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIBean = (function () {
        /**
           Default constructor

           @since ARP1.0
        */
        function APIBean() {
        }
        return APIBean;
    })();
    Adaptive.APIBean = APIBean;
    /**
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseTable = (function (_super) {
        __extends(DatabaseTable, _super);
        /**
           Constructor using fields

           @param name            The name of the table
           @param columnCount     The number of databaseColumns
           @param rowCount        The number of databaseRows
           @param databaseColumns The databaseColumns of the table
           @param databaseRows    The databaseRows of the table
           @since ARP1.0
        */
        function DatabaseTable(name, columnCount, rowCount, databaseColumns, databaseRows) {
            _super.call(this);
            this.name = name;
            this.columnCount = columnCount;
            this.rowCount = rowCount;
            this.databaseColumns = databaseColumns;
            this.databaseRows = databaseRows;
        }
        /**
           Get the number of databaseColumns

           @return The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        /**
           Sets the number of databaseColumns

           @param columnCount The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        /**
           Get the databaseColumns

           @return The databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseColumns = function () {
            return this.databaseColumns;
        };
        /**
           Sets the databaseColumns of the table

           @param databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseColumns = function (databaseColumns) {
            this.databaseColumns = databaseColumns;
        };
        /**
           Get the databaseRows of the table

           @return The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseRows = function () {
            return this.databaseRows;
        };
        /**
           Sets the databaseRows of the table

           @param databaseRows The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseRows = function (databaseRows) {
            this.databaseRows = databaseRows;
        };
        /**
           Returns the name of the table

           @return The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the table

           @param name The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Get the number of databaseRows

           @return The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.getRowCount = function () {
            return this.rowCount;
        };
        /**
           Sets the number of databaseRows

           @param rowCount The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        return DatabaseTable;
    })(APIBean);
    Adaptive.DatabaseTable = DatabaseTable;
    /**
       Structure representing a row for a data table.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseRow = (function (_super) {
        __extends(DatabaseRow, _super);
        /**
           Constructor for implementation using.

           @param values The values of the row
           @since ARP1.0
        */
        function DatabaseRow(values) {
            _super.call(this);
            this.values = values;
        }
        /**
           Returns the values of the row.

           @return The values of the row.
           @since ARP1.0
        */
        DatabaseRow.prototype.getValues = function () {
            return this.values;
        };
        /**
           Sets the values of the row.

           @param values The values of the row.
           @since ARP1.0
        */
        DatabaseRow.prototype.setValues = function (values) {
            this.values = values;
        };
        return DatabaseRow;
    })(APIBean);
    Adaptive.DatabaseRow = DatabaseRow;
    /**
       Represents a basic bean to store key pair values

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var KeyPair = (function (_super) {
        __extends(KeyPair, _super);
        /**
           Constructor using fields

           @param key   Key of the element
           @param value Value of the element
           @since ARP1.0
        */
        function KeyPair(key, value) {
            _super.call(this);
            this.key = key;
            this.value = value;
        }
        /**
           Returns the key of the element

           @return Key of the element
           @since ARP1.0
        */
        KeyPair.prototype.getKey = function () {
            return this.key;
        };
        /**
           Sets the key of the element

           @param key Key of the element
           @since ARP1.0
        */
        KeyPair.prototype.setKey = function (key) {
            this.key = key;
        };
        /**
           Returns the value of the element

           @return Value of the element
           @since ARP1.0
        */
        KeyPair.prototype.getValue = function () {
            return this.value;
        };
        /**
           Sets the value of the element

           @param value Value of the element
           @since ARP1.0
        */
        KeyPair.prototype.setValue = function (value) {
            this.value = value;
        };
        return KeyPair;
    })(APIBean);
    Adaptive.KeyPair = KeyPair;
    /**
       Structure representing the value of a http cookie.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceCookie = (function (_super) {
        __extends(ServiceCookie, _super);
        /**
           Contructor with fields

           @param name     Name of the cookie
           @param value    Value of the cookie
           @param domain   Domain of the cookie
           @param path     Path of the cookie
           @param scheme   Scheme of the cookie
           @param secure   Privacy of the cookie
           @param expiry   Expiration date of the cookie
           @param creation Creation date of the cookie
           @since ARP1.0
        */
        function ServiceCookie(name, value, domain, path, scheme, secure, expiry, creation) {
            _super.call(this);
            this.name = name;
            this.value = value;
            this.domain = domain;
            this.path = path;
            this.scheme = scheme;
            this.secure = secure;
            this.expiry = expiry;
            this.creation = creation;
        }
        /**
           Returns the creation date

           @return Creation date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.getCreation = function () {
            return this.creation;
        };
        /**
           Sets the creation date

           @param creation Creation date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setCreation = function (creation) {
            this.creation = creation;
        };
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        ServiceCookie.prototype.getDomain = function () {
            return this.domain;
        };
        /**
           Set the domain

           @param domain Domain of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setDomain = function (domain) {
            this.domain = domain;
        };
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        ServiceCookie.prototype.getExpiry = function () {
            return this.expiry;
        };
        /**
           Set the expiration date in milis

           @param expiry Expiration date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setExpiry = function (expiry) {
            this.expiry = expiry;
        };
        /**
           Returns the cookie name

           @return name Name of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the cookie name

           @param name Name of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        ServiceCookie.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the path

           @param path Path of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        ServiceCookie.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the scheme

           @param scheme Scheme of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        ServiceCookie.prototype.getSecure = function () {
            return this.secure;
        };
        /**
           Set whether the cookie is secure or not

           @param secure Privacy of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setSecure = function (secure) {
            this.secure = secure;
        };
        /**
           Returns the cookie value

           @return Value of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.getValue = function () {
            return this.value;
        };
        /**
           Set the cookie value

           @param value Value of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setValue = function (value) {
            this.value = value;
        };
        return ServiceCookie;
    })(APIBean);
    Adaptive.ServiceCookie = ServiceCookie;
    /**
       Structure representing the internal unique identifier data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactUid = (function (_super) {
        __extends(ContactUid, _super);
        /**
           Constructor used by implementation to set the Contact id.

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        function ContactUid(contactId) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.ContactUid = ContactUid;
    /**
       Structure representing the basic device information.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var DeviceInfo = (function (_super) {
        __extends(DeviceInfo, _super);
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
           @since ARP1.0
        */
        function DeviceInfo(name, model, vendor, uuid) {
            _super.call(this);
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        /**
           Returns the model of the device.

           @return String with the model of the device.
           @since ARP1.0
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
           @since ARP1.0
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
           @since ARP1.0
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
           @since ARP1.0
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
    })(APIBean);
    Adaptive.DeviceInfo = DeviceInfo;
    /**
       Structure representing the binary attachment data.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var EmailAttachmentData = (function (_super) {
        __extends(EmailAttachmentData, _super);
        /**
           Constructor with fields

           @param data         raw data of the file attachment
           @param size         size of the file attachment
           @param fileName     name of the file attachment
           @param mimeType     mime type of the file attachment
           @param referenceUrl relative url of the file attachment
           @since ARP1.0
        */
        function EmailAttachmentData(data, size, fileName, mimeType, referenceUrl) {
            _super.call(this);
            this.data = data;
            this.size = size;
            this.fileName = fileName;
            this.mimeType = mimeType;
            this.referenceUrl = referenceUrl;
        }
        /**
           Returns the raw data in byte[]

           @return data Octet-binary content of the attachment payload.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the data of the attachment as a byte[]

           @param data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the filename of the attachment

           @return fileName Name of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getFileName = function () {
            return this.fileName;
        };
        /**
           Set the name of the file attachment

           @param fileName Name of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setFileName = function (fileName) {
            this.fileName = fileName;
        };
        /**
           Returns the mime type of the attachment

           @return mimeType
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getMimeType = function () {
            return this.mimeType;
        };
        /**
           Set the mime type of the attachment

           @param mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setMimeType = function (mimeType) {
            this.mimeType = mimeType;
        };
        /**
           Returns the absolute url of the file attachment

           @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getReferenceUrl = function () {
            return this.referenceUrl;
        };
        /**
           Set the absolute url of the attachment

           @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setReferenceUrl = function (referenceUrl) {
            this.referenceUrl = referenceUrl;
        };
        /**
           Returns the size of the attachment as a long

           @return size Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getSize = function () {
            return this.size;
        };
        /**
           Set the size of the attachment as a long

           @param size Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setSize = function (size) {
            this.size = size;
        };
        return EmailAttachmentData;
    })(APIBean);
    Adaptive.EmailAttachmentData = EmailAttachmentData;
    /**
       Structure representing the website data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactWebsite = (function (_super) {
        __extends(ContactWebsite, _super);
        /**
           Constructor used by the implementation

           @param url Url of the website
           @since ARP1.0
        */
        function ContactWebsite(url) {
            _super.call(this);
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

           @param url Url of the website
           @since ARP1.0
        */
        ContactWebsite.prototype.setUrl = function (url) {
            this.url = url;
        };
        return ContactWebsite;
    })(APIBean);
    Adaptive.ContactWebsite = ContactWebsite;
    /**
       Structure representing the data elements of an email.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Email = (function (_super) {
        __extends(Email, _super);
        /**
           Constructor used by the implementation

           @param toRecipients        array of recipients
           @param ccRecipients        array of cc recipients
           @param bccRecipients       array of bcc recipients
           @param emailAttachmentData array of attatchments
           @param messageBody         body of the email
           @param messageBodyMimeType mime type of the body
           @param subject             of the email
           @since ARP1.0
        */
        function Email(toRecipients, ccRecipients, bccRecipients, emailAttachmentData, messageBody, messageBodyMimeType, subject) {
            _super.call(this);
            this.toRecipients = toRecipients;
            this.ccRecipients = ccRecipients;
            this.bccRecipients = bccRecipients;
            this.emailAttachmentData = emailAttachmentData;
            this.messageBody = messageBody;
            this.messageBodyMimeType = messageBodyMimeType;
            this.subject = subject;
        }
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
           Returns an array of attachments

           @return emailAttachmentData array with the email attachments
           @since ARP1.0
        */
        Email.prototype.getEmailAttachmentData = function () {
            return this.emailAttachmentData;
        };
        /**
           Set the email attachment data array

           @param emailAttachmentData array of email attatchments
           @since ARP1.0
        */
        Email.prototype.setEmailAttachmentData = function (emailAttachmentData) {
            this.emailAttachmentData = emailAttachmentData;
        };
        /**
           Returns the message body of the email

           @return message Body string of the email
           @since ARP1.0
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
    })(APIBean);
    Adaptive.Email = Email;
    /**
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactEmail = (function (_super) {
        __extends(ContactEmail, _super);
        /**
           Constructor used by the implementation

           @param type    Type of the email
           @param primary Is email primary
           @param email   Email of the contact
           @since ARP1.0
        */
        function ContactEmail(type, primary, email) {
            _super.call(this);
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

           @param type Type of the email
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

           @param email Email of the contact
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
    })(APIBean);
    Adaptive.ContactEmail = ContactEmail;
    /**
       Represents a specific user or system locate.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Locale = (function (_super) {
        __extends(Locale, _super);
        /**
           Constructor used by the implementation

           @param country  Country of the Locale
           @param language Language of the Locale
           @since ARP1.0
        */
        function Locale(language, country) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.Locale = Locale;
    /**
       Structure representing a database reference.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var Database = (function (_super) {
        __extends(Database, _super);
        /**
           Constructor using fields.

           @param name     Name of the DatabaseTable.
           @param compress Compression enabled.
           @since ARP1.0
        */
        function Database(name, compress) {
            _super.call(this);
            this.name = name;
            this.compress = compress;
        }
        /**
           Returns if the table is compressed

           @return Compression enabled
           @since ARP1.0
        */
        Database.prototype.getCompress = function () {
            return this.compress;
        };
        /**
           Sets if the table is compressed or not.

           @param compress Compression enabled
           @since ARP1.0
        */
        Database.prototype.setCompress = function (compress) {
            this.compress = compress;
        };
        /**
           Returns the name.

           @return The name of the table.
           @since ARP1.0
        */
        Database.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the table.

           @param name The name of the table.
           @since ARP1.0
        */
        Database.prototype.setName = function (name) {
            this.name = name;
        };
        return Database;
    })(APIBean);
    Adaptive.Database = Database;
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactTag = (function (_super) {
        __extends(ContactTag, _super);
        /**
           Constructor used by the implementation

           @param value Value of the tag
           @param name  Name of the tag
           @since ARP1.0
        */
        function ContactTag(name, value) {
            _super.call(this);
            this.name = name;
            this.value = value;
        }
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

           @param name Name of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the value of the Tag

           @return value
           @since ARP1.0
        */
        ContactTag.prototype.getValue = function () {
            return this.value;
        };
        /**
           Set the value of the Tag

           @param value Value of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setValue = function (value) {
            this.value = value;
        };
        return ContactTag;
    })(APIBean);
    Adaptive.ContactTag = ContactTag;
    /**
       Represents a local or remote service response.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceResponse = (function (_super) {
        __extends(ServiceResponse, _super);
        /**
           Constructor with fields

           @param content             Request/Response data content (plain text).
           @param contentType         The request/response content type (MIME TYPE).
           @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
           @param contentLength       The length in bytes for the Content field.
           @param contentBinary       The byte[] representing the binary Content.
           @param contentBinaryLength The length in bytes for the binary Content.
           @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @param serviceSession      Information about the session
           @since ARP1.0
        */
        function ServiceResponse(content, contentType, contentEncoding, contentLength, contentBinary, contentBinaryLength, serviceHeaders, serviceSession) {
            _super.call(this);
            this.content = content;
            this.contentType = contentType;
            this.contentEncoding = contentEncoding;
            this.contentLength = contentLength;
            this.contentBinary = contentBinary;
            this.contentBinaryLength = contentBinaryLength;
            this.serviceHeaders = serviceHeaders;
            this.serviceSession = serviceSession;
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

           @param content Request/Response data content (plain text).
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

           @param contentBinary The byte[] representing the binary Content.
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        /**
           Returns the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        /**
           Set the binary content length

           @param contentBinaryLength The length in bytes for the binary Content.
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

           @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
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

           @param contentLength The length in bytes for the Content field.
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

           @param contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           Returns the array of ServiceHeader

           @return serviceHeaders
           @since ARP1.0
        */
        ServiceResponse.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           Set the array of ServiceHeader

           @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        ServiceResponse.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           Getter for service session

           @return The element service session
           @since ARP1.0
        */
        ServiceResponse.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           Setter for service session

           @param serviceSession The element service session
           @since ARP1.0
        */
        ServiceResponse.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        return ServiceResponse;
    })(APIBean);
    Adaptive.ServiceResponse = ServiceResponse;
    /**
       Represents a specific application life-cycle stage.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Lifecycle = (function (_super) {
        __extends(Lifecycle, _super);
        /**
           Constructor used by the implementation

           @param state of the app
           @since ARP1.0
        */
        function Lifecycle(state) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.Lifecycle = Lifecycle;
    /**
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var ServiceSession = (function () {
        /**
           Constructor with fields

           @param cookies    The cookies of the response
           @param attributes Attributes of the response
           @since ARP1.0
        */
        function ServiceSession(cookies, attributes) {
            this.cookies = cookies;
            this.attributes = attributes;
        }
        /**
           Gets the attributes of the response

           @return Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getAttributes = function () {
            return this.attributes;
        };
        /**
           Sets the attributes for the response

           @param attributes Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setAttributes = function (attributes) {
            this.attributes = attributes;
        };
        /**
           Returns the cookies of the response

           @return The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getCookies = function () {
            return this.cookies;
        };
        /**
           Sets the cookies of the response

           @param cookies The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setCookies = function (cookies) {
            this.cookies = cookies;
        };
        return ServiceSession;
    })();
    Adaptive.ServiceSession = ServiceSession;
    /**
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var Acceleration = (function (_super) {
        __extends(Acceleration, _super);
        /**
           Constructor with fields

           @param x         X Coordinate
           @param y         Y Coordinate
           @param z         Z Coordinate
           @param timestamp Timestamp
           @since ARP1.0
        */
        function Acceleration(x, y, z, timestamp) {
            _super.call(this);
            this.x = x;
            this.y = y;
            this.z = z;
            this.timestamp = timestamp;
        }
        /**
           Timestamp Getter

           @return Timestamp
           @since ARP1.0
        */
        Acceleration.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           Timestamp Setter

           @param timestamp Timestamp
           @since ARP1.0
        */
        Acceleration.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           X Coordinate Getter

           @return X-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getX = function () {
            return this.x;
        };
        /**
           X Coordinate Setter

           @param x X-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.setX = function (x) {
            this.x = x;
        };
        /**
           Y Coordinate Getter

           @return Y-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getY = function () {
            return this.y;
        };
        /**
           Y Coordinate Setter

           @param y Y-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.setY = function (y) {
            this.y = y;
        };
        /**
           Z Coordinate Getter

           @return Z-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getZ = function () {
            return this.z;
        };
        /**
           Z Coordinate Setter

           @param z Z Coordinate
           @since ARP1.0
        */
        Acceleration.prototype.setZ = function (z) {
            this.z = z;
        };
        return Acceleration;
    })(APIBean);
    Adaptive.Acceleration = Acceleration;
    /**
       Represents a local or remote service request.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceRequest = (function (_super) {
        __extends(ServiceRequest, _super);
        /**
           Contructor used by the implementation

           @param content             Request/Response data content (plain text)
           @param contentType         The request/response content type (MIME TYPE).
           @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
           @param contentLength       The length in bytes for the Content field.
           @param contentBinary       The byte[] representing the Content field.
           @param contentBinaryLength The length in bytes for the binary Content.
           @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @param method              The request method
           @param protocolVersion     The HTTP procotol version to be used for this request.
           @param serviceSession      The element service session
           @since ARP1.0
        */
        function ServiceRequest(content, contentType, contentEncoding, contentLength, contentBinary, contentBinaryLength, serviceHeaders, method, protocolVersion, serviceSession) {
            _super.call(this);
            this.content = content;
            this.contentType = contentType;
            this.contentEncoding = contentEncoding;
            this.contentLength = contentLength;
            this.contentBinary = contentBinary;
            this.contentBinaryLength = contentBinaryLength;
            this.serviceHeaders = serviceHeaders;
            this.method = method;
            this.protocolVersion = protocolVersion;
            this.serviceSession = serviceSession;
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

           @param protocolVersion The HTTP procotol version to be used for this request.
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

           @param content Request/Response data content (plain text)
           @since ARP1.0
        */
        ServiceRequest.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           Returns the byte[] of the content

           @return contentBinary
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentBinary = function () {
            return this.contentBinary;
        };
        /**
           Set the byte[] of the content

           @param contentBinary The byte[] representing the Content field.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        /**
           Retrusn the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        /**
           Set the binary content length

           @param contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentBinaryLength = function (contentBinaryLength) {
            this.contentBinaryLength = contentBinaryLength;
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

           @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
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

           @param contentLength The length in bytes for the Content field.
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

           @param contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
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

           @param method The request method
           @since ARP1.0
        */
        ServiceRequest.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           Returns the array of ServiceHeader

           @return serviceHeaders
           @since ARP1.0
        */
        ServiceRequest.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           Set the array of ServiceHeader

           @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        ServiceRequest.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           Getter for service session

           @return The element service session
           @since ARP1.0
        */
        ServiceRequest.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           Setter for service session

           @param serviceSession The element service session
           @since ARP1.0
        */
        ServiceRequest.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        return ServiceRequest;
    })(APIBean);
    Adaptive.ServiceRequest = ServiceRequest;
    /**
       Structure representing the social data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactSocial = (function (_super) {
        __extends(ContactSocial, _super);
        /**
           Constructor used by the implementation

           @param socialNetwork of the profile
           @param profileUrl    of the user
           @since ARP1.0
        */
        function ContactSocial(socialNetwork, profileUrl) {
            _super.call(this);
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

           @param socialNetwork of the profile
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

           @param profileUrl of the user
           @since ARP1.0
        */
        ContactSocial.prototype.setProfileUrl = function (profileUrl) {
            this.profileUrl = profileUrl;
        };
        return ContactSocial;
    })(APIBean);
    Adaptive.ContactSocial = ContactSocial;
    /**
       Represents the basic information about the operating system.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var OSInfo = (function (_super) {
        __extends(OSInfo, _super);
        /**
           Constructor used by implementation to set the OS information.

           @param name    of the OS.
           @param version of the OS.
           @param vendor  of the OS.
           @since ARP1.0
        */
        function OSInfo(name, version, vendor) {
            _super.call(this);
            this.name = name;
            this.version = version;
            this.vendor = vendor;
        }
        /**
           Returns the name of the operating system.

           @return OS name.
           @since ARP1.0
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
           @since ARP1.0
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
           @since ARP1.0
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
    })(APIBean);
    Adaptive.OSInfo = OSInfo;
    /**
       Structure representing the phone data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPhone = (function (_super) {
        __extends(ContactPhone, _super);
        /**
           Constructor used by implementation to set the contact Phone

           @param phone     Phone number
           @param phoneType Type of Phone number
           @since ARP1.0
        */
        function ContactPhone(phone, phoneType) {
            _super.call(this);
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

           @param phoneType Type of Phone number
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
    })(APIBean);
    Adaptive.ContactPhone = ContactPhone;
    /**
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactAddress = (function (_super) {
        __extends(ContactAddress, _super);
        /**
           Constructor with fields

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        function ContactAddress(address, type) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.ContactAddress = ContactAddress;
    /**
       Represents a single secureKey-value pair.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var SecureKeyPair = (function (_super) {
        __extends(SecureKeyPair, _super);
        /**
           Constructor with parameters

           @param secureKey  name of the keypair
           @param secureData value of the keypair
           @since ARP1.0
        */
        function SecureKeyPair(secureKey, secureData) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.SecureKeyPair = SecureKeyPair;
    /**
       Structure representing the data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Contact = (function (_super) {
        __extends(Contact, _super);
        /**
           Constructor with all the fields

           @param contactId        Identifier of the contact
           @param personalInfo     Personal Information
           @param professionalInfo Professional Information
           @param contactAddresses Addresses of the contact
           @param contactPhones    Phones of the contact
           @param contactEmails    Emails of the contact
           @param contactWebsites  Websites of the contact
           @param contactSocials   Social Networks of the contact
           @param contactTags      Tags of the contact
           @since ARP1.0
        */
        function Contact(contactId, personalInfo, professionalInfo, contactAddresses, contactPhones, contactEmails, contactWebsites, contactSocials, contactTags) {
            _super.call(this, contactId);
            this.personalInfo = personalInfo;
            this.professionalInfo = professionalInfo;
            this.contactAddresses = contactAddresses;
            this.contactPhones = contactPhones;
            this.contactEmails = contactEmails;
            this.contactWebsites = contactWebsites;
            this.contactSocials = contactSocials;
            this.contactTags = contactTags;
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

           @param contactAddresses Addresses of the contact
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

           @param contactEmails Emails of the contact
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

           @param contactPhones Phones of the contact
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

           @param contactSocials Social Networks of the contact
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

           @param contactTags Tags of the contact
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

           @param contactWebsites Websites of the contact
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

           @param personalInfo Personal Information
           @since ARP1.0
        */
        Contact.prototype.setPersonalInfo = function (personalInfo) {
            this.personalInfo = personalInfo;
        };
        /**
           Returns the professional info of the Contact

           @return Array of personal info
           @since ARP1.0
        */
        Contact.prototype.getProfessionalInfo = function () {
            return this.professionalInfo;
        };
        /**
           Set the professional info of the Contact

           @param professionalInfo Professional Information
           @since ARP1.0
        */
        Contact.prototype.setProfessionalInfo = function (professionalInfo) {
            this.professionalInfo = professionalInfo;
        };
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    /**
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceEndpoint = (function (_super) {
        __extends(ServiceEndpoint, _super);
        /**
           Constructor with parameters

           @param host   Remote service host
           @param path   Remote service Path
           @param port   Remote service Port
           @param proxy  Proxy url "http://<IP>:<Port>"
           @param scheme Remote service scheme
           @since ARP1.0
        */
        function ServiceEndpoint(host, path, port, proxy, scheme) {
            _super.call(this);
            this.host = host;
            this.path = path;
            this.port = port;
            this.proxy = proxy;
            this.scheme = scheme;
        }
        /**
           Returns the Remote service host

           @return Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getHost = function () {
            return this.host;
        };
        /**
           Set the Remote service host

           @param host Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        /**
           Returns the Remote service Path

           @return Remote service Path
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPath = function () {
            return this.path;
        };
        /**
           Set the Remote service Path

           @param path Remote service Path
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Returns the Remote service Port

           @return Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPort = function () {
            return this.port;
        };
        /**
           Set the Remote service Port

           @param port Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        /**
           Return the Proxy url

           @return Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        /**
           Set the Proxy url

           @param proxy Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        /**
           Returns the Remote service scheme

           @return Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           Set the Remote service scheme

           @param scheme Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        return ServiceEndpoint;
    })(APIBean);
    Adaptive.ServiceEndpoint = ServiceEndpoint;
    /**
       Structure representing the personal info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPersonalInfo = (function (_super) {
        __extends(ContactPersonalInfo, _super);
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        function ContactPersonalInfo(name, middleName, lastName, title) {
            _super.call(this);
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

           @param title of the Contact
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

           @param lastName of the Contact
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

           @param middleName of the Contact
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

           @param name of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        return ContactPersonalInfo;
    })(APIBean);
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    /**
       Structure representing the column specification of a data column.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseColumn = (function (_super) {
        __extends(DatabaseColumn, _super);
        /**
           Constructor with fields

           @param name Name of the column
           @since ARP1.0
        */
        function DatabaseColumn(name) {
            _super.call(this);
            this.name = name;
        }
        /**
           Returns the name of the column.

           @return The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.getName = function () {
            return this.name;
        };
        /**
           Sets the name of the column.

           @param name The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.setName = function (name) {
            this.name = name;
        };
        return DatabaseColumn;
    })(APIBean);
    Adaptive.DatabaseColumn = DatabaseColumn;
    /**
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Service = (function (_super) {
        __extends(Service, _super);
        /**
           Constructor used by the implementation

           @param serviceEndpoint Endpoint of the service
           @param name            Name of the service
           @param method          Method of the service
           @param type            Type of the service
           @since ARP1.0
        */
        function Service(serviceEndpoint, name, method, type) {
            _super.call(this);
            this.serviceEndpoint = serviceEndpoint;
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

           @param method Method of the service
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

           @param type Type of the service
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
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

           @param name Name of the service
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Returns the serviceEndpoint

           @return serviceEndpoint
           @since ARP1.0
        */
        Service.prototype.getServiceEndpoint = function () {
            return this.serviceEndpoint;
        };
        /**
           Set the serviceEndpoint

           @param serviceEndpoint Endpoint of the service
           @since ARP1.0
        */
        Service.prototype.setServiceEndpoint = function (serviceEndpoint) {
            this.serviceEndpoint = serviceEndpoint;
        };
        return Service;
    })(APIBean);
    Adaptive.Service = Service;
    /**
       Structure representing the data of a http request or response header.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceHeader = (function (_super) {
        __extends(ServiceHeader, _super);
        /**
           Constructor with fields

           @param name Name of the header
           @param data Value of the header
           @since ARP1.0
        */
        function ServiceHeader(name, data) {
            _super.call(this);
            this.name = name;
            this.data = data;
        }
        /**
           Returns the header value

           @return ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.getData = function () {
            return this.data;
        };
        /**
           Set the header value

           @param data ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           Returns the header name

           @return ServiceHeader name
           @since ARP1.0
        */
        ServiceHeader.prototype.getName = function () {
            return this.name;
        };
        /**
           Set the header name

           @param name Name of the header
           @since ARP1.0
        */
        ServiceHeader.prototype.setName = function (name) {
            this.name = name;
        };
        return ServiceHeader;
    })(APIBean);
    Adaptive.ServiceHeader = ServiceHeader;
    /**
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Geolocation = (function (_super) {
        __extends(Geolocation, _super);
        /**
           Constructor with parameters

           @param latitude  Latitude of the measurement
           @param longitude Longitude of the measurement
           @param altitude  Altitude of the measurement
           @param xDoP      Dilution of precision on the X measurement
           @param yDoP      Dilution of precision on the Y measurement
           @param timestamp Timestamp of the measurement
           @since ARP1.0
        */
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP, timestamp) {
            _super.call(this);
            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.xDoP = xDoP;
            this.yDoP = yDoP;
            this.timestamp = timestamp;
        }
        /**
           Returns altitude in meters

           @return Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        /**
           Set altitude in meters

           @param altitude Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        /**
           Returns the latitude in degrees

           @return Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        /**
           Set the latitude in degrees

           @param latitude Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        /**
           Returns the longitude in degrees

           @return Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        /**
           Returns the latitude in degrees

           @param longitude Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        /**
           Timestamp Getter

           @return Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           Timestamp Setter

           @param timestamp Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return xDoP Dilution of precision on the X measurement. Measured in meters.
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
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return yDoP Dilution of precision on the Y measurement. Measured in meters.
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
    })(APIBean);
    Adaptive.Geolocation = Geolocation;
    /**
       Structure representing a HTML5 request to the native API.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIRequest = (function () {
        /**
           Constructor with all the parameters

           @param methodName     Name of the method
           @param parameters     Array of parameters
           @param parameterTypes Array of parameters types
           @since ARP1.0
        */
        function APIRequest(methodName, parameters, parameterTypes) {
            this.methodName = methodName;
            this.parameters = parameters;
            this.parameterTypes = parameterTypes;
        }
        /**
           Method name Getter

           @return Method name
           @since ARP1.0
        */
        APIRequest.prototype.getMethodName = function () {
            return this.methodName;
        };
        /**
           Method name Setter

           @param methodName Method name
           @since ARP1.0
        */
        APIRequest.prototype.setMethodName = function (methodName) {
            this.methodName = methodName;
        };
        /**
           Parameter types Getter

           @return Parameter types
           @since ARP1.0
        */
        APIRequest.prototype.getParameterTypes = function () {
            return this.parameterTypes;
        };
        /**
           Parameter types setter

           @param parameterTypes Parameter types
           @since ARP1.0
        */
        APIRequest.prototype.setParameterTypes = function (parameterTypes) {
            this.parameterTypes = parameterTypes;
        };
        /**
           Parameters Getter

           @return Parameters
           @since ARP1.0
        */
        APIRequest.prototype.getParameters = function () {
            return this.parameters;
        };
        /**
           Parameters Setter

           @param parameters Parameters
           @since ARP1.0
        */
        APIRequest.prototype.setParameters = function (parameters) {
            this.parameters = parameters;
        };
        return APIRequest;
    })();
    Adaptive.APIRequest = APIRequest;
    /**
       Structure representing the professional info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactProfessionalInfo = (function (_super) {
        __extends(ContactProfessionalInfo, _super);
        /**
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param jobTitle       The job title
           @param jobDescription The job description
           @param company        The company of the job
           @since ARP1.0
        */
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            _super.call(this);
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

           @param company The company of the job
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

           @param jobDescription The job description
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

           @param jobTitle The job title
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setJobTitle = function (jobTitle) {
            this.jobTitle = jobTitle;
        };
        return ContactProfessionalInfo;
    })(APIBean);
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    /**
       Structure representing the a physical or logical button on a device.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Button = (function (_super) {
        __extends(Button, _super);
        /**
           Constructor with fields

           @param type Button type.
           @since ARP1.0
        */
        function Button(type) {
            _super.call(this);
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
           Setter for the button type

           @param type Button Type
           @since ARP1.0
        */
        Button.prototype.setType = function (type) {
            this.type = type;
        };
        return Button;
    })(APIBean);
    Adaptive.Button = Button;
    /**
       Structure representing the data elements of an email addressee.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var EmailAddress = (function (_super) {
        __extends(EmailAddress, _super);
        /**
           Constructor used by implementation

           @param address of the Email
           @since ARP1.0
        */
        function EmailAddress(address) {
            _super.call(this);
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
    })(APIBean);
    Adaptive.EmailAddress = EmailAddress;
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
       Enumeration IAccelerationListenerError
    */
    var IAccelerationListenerError = (function () {
        function IAccelerationListenerError(value) {
            this.value = value;
        }
        IAccelerationListenerError.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerError.Unauthorized = new IAccelerationListenerError("Unauthorized");
        IAccelerationListenerError.Unavailable = new IAccelerationListenerError("Unavailable");
        IAccelerationListenerError.Unknown = new IAccelerationListenerError("Unknown");
        return IAccelerationListenerError;
    })();
    Adaptive.IAccelerationListenerError = IAccelerationListenerError;
    /**
       Enumeration IAccelerationListenerWarning
    */
    var IAccelerationListenerWarning = (function () {
        function IAccelerationListenerWarning(value) {
            this.value = value;
        }
        IAccelerationListenerWarning.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerWarning.NeedsCalibration = new IAccelerationListenerWarning("NeedsCalibration");
        IAccelerationListenerWarning.Stale = new IAccelerationListenerWarning("Stale");
        IAccelerationListenerWarning.Unknown = new IAccelerationListenerWarning("Unknown");
        return IAccelerationListenerWarning;
    })();
    Adaptive.IAccelerationListenerWarning = IAccelerationListenerWarning;
    /**
       Enumeration IAdaptiveRPGroup
    */
    var IAdaptiveRPGroup = (function () {
        function IAdaptiveRPGroup(value) {
            this.value = value;
        }
        IAdaptiveRPGroup.prototype.toString = function () {
            return this.value;
        };
        IAdaptiveRPGroup.Application = new IAdaptiveRPGroup("Application");
        IAdaptiveRPGroup.Commerce = new IAdaptiveRPGroup("Commerce");
        IAdaptiveRPGroup.Communication = new IAdaptiveRPGroup("Communication");
        IAdaptiveRPGroup.Data = new IAdaptiveRPGroup("Data");
        IAdaptiveRPGroup.Media = new IAdaptiveRPGroup("Media");
        IAdaptiveRPGroup.Notification = new IAdaptiveRPGroup("Notification");
        IAdaptiveRPGroup.PIM = new IAdaptiveRPGroup("PIM");
        IAdaptiveRPGroup.Reader = new IAdaptiveRPGroup("Reader");
        IAdaptiveRPGroup.Security = new IAdaptiveRPGroup("Security");
        IAdaptiveRPGroup.Sensor = new IAdaptiveRPGroup("Sensor");
        IAdaptiveRPGroup.Social = new IAdaptiveRPGroup("Social");
        IAdaptiveRPGroup.System = new IAdaptiveRPGroup("System");
        IAdaptiveRPGroup.UI = new IAdaptiveRPGroup("UI");
        IAdaptiveRPGroup.Util = new IAdaptiveRPGroup("Util");
        IAdaptiveRPGroup.Unknown = new IAdaptiveRPGroup("Unknown");
        return IAdaptiveRPGroup;
    })();
    Adaptive.IAdaptiveRPGroup = IAdaptiveRPGroup;
    /**
       Enumeration IAppResourceFormat
    */
    var IAppResourceFormat = (function () {
        function IAppResourceFormat(value) {
            this.value = value;
        }
        IAppResourceFormat.prototype.toString = function () {
            return this.value;
        };
        IAppResourceFormat.Raw = new IAppResourceFormat("Raw");
        IAppResourceFormat.Compressed = new IAppResourceFormat("Compressed");
        IAppResourceFormat.Encrypted = new IAppResourceFormat("Encrypted");
        IAppResourceFormat.EncryptedCompressed = new IAppResourceFormat("EncryptedCompressed");
        IAppResourceFormat.Unknown = new IAppResourceFormat("Unknown");
        return IAppResourceFormat;
    })();
    Adaptive.IAppResourceFormat = IAppResourceFormat;
    /**
       Enumeration IAppResourcePayload
    */
    var IAppResourcePayload = (function () {
        function IAppResourcePayload(value) {
            this.value = value;
        }
        IAppResourcePayload.prototype.toString = function () {
            return this.value;
        };
        IAppResourcePayload.Default = new IAppResourcePayload("Default");
        IAppResourcePayload.Embedded = new IAppResourcePayload("Embedded");
        IAppResourcePayload.Linked = new IAppResourcePayload("Linked");
        IAppResourcePayload.Unknown = new IAppResourcePayload("Unknown");
        return IAppResourcePayload;
    })();
    Adaptive.IAppResourcePayload = IAppResourcePayload;
    /**
       Enumeration IAppResourceType
    */
    var IAppResourceType = (function () {
        function IAppResourceType(value) {
            this.value = value;
        }
        IAppResourceType.prototype.toString = function () {
            return this.value;
        };
        IAppResourceType.Html = new IAppResourceType("Html");
        IAppResourceType.Css = new IAppResourceType("Css");
        IAppResourceType.JavaScript = new IAppResourceType("JavaScript");
        IAppResourceType.Image = new IAppResourceType("Image");
        IAppResourceType.Video = new IAppResourceType("Video");
        IAppResourceType.Audio = new IAppResourceType("Audio");
        IAppResourceType.Property = new IAppResourceType("Property");
        IAppResourceType.Database = new IAppResourceType("Database");
        IAppResourceType.Other = new IAppResourceType("Other");
        IAppResourceType.Unknown = new IAppResourceType("Unknown");
        return IAppResourceType;
    })();
    Adaptive.IAppResourceType = IAppResourceType;
    /**
       Enumeration IAppResourceCallbackError
    */
    var IAppResourceCallbackError = (function () {
        function IAppResourceCallbackError(value) {
            this.value = value;
        }
        IAppResourceCallbackError.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackError.NotFound = new IAppResourceCallbackError("NotFound");
        IAppResourceCallbackError.NoPermission = new IAppResourceCallbackError("NoPermission");
        IAppResourceCallbackError.Unknown = new IAppResourceCallbackError("Unknown");
        return IAppResourceCallbackError;
    })();
    Adaptive.IAppResourceCallbackError = IAppResourceCallbackError;
    /**
       Enumeration IAppResourceCallbackWarning
    */
    var IAppResourceCallbackWarning = (function () {
        function IAppResourceCallbackWarning(value) {
            this.value = value;
        }
        IAppResourceCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackWarning.PartialContent = new IAppResourceCallbackWarning("PartialContent");
        IAppResourceCallbackWarning.TooLarge = new IAppResourceCallbackWarning("TooLarge");
        IAppResourceCallbackWarning.LinkedResource = new IAppResourceCallbackWarning("LinkedResource");
        IAppResourceCallbackWarning.Unknown = new IAppResourceCallbackWarning("Unknown");
        return IAppResourceCallbackWarning;
    })();
    Adaptive.IAppResourceCallbackWarning = IAppResourceCallbackWarning;
    /**
       Enumeration IButtonListenerError
    */
    var IButtonListenerError = (function () {
        function IButtonListenerError(value) {
            this.value = value;
        }
        IButtonListenerError.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerError.Not_Present = new IButtonListenerError("Not_Present");
        IButtonListenerError.Unknown = new IButtonListenerError("Unknown");
        return IButtonListenerError;
    })();
    Adaptive.IButtonListenerError = IButtonListenerError;
    /**
       Enumeration IButtonListenerWarning
    */
    var IButtonListenerWarning = (function () {
        function IButtonListenerWarning(value) {
            this.value = value;
        }
        IButtonListenerWarning.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerWarning.Not_Implemented = new IButtonListenerWarning("Not_Implemented");
        IButtonListenerWarning.Unknown = new IButtonListenerWarning("Unknown");
        return IButtonListenerWarning;
    })();
    Adaptive.IButtonListenerWarning = IButtonListenerWarning;
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
       Enumeration ICapabilitiesCommunication
    */
    var ICapabilitiesCommunication = (function () {
        function ICapabilitiesCommunication(value) {
            this.value = value;
        }
        ICapabilitiesCommunication.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesCommunication.Calendar = new ICapabilitiesCommunication("Calendar");
        ICapabilitiesCommunication.Contact = new ICapabilitiesCommunication("Contact");
        ICapabilitiesCommunication.Mail = new ICapabilitiesCommunication("Mail");
        ICapabilitiesCommunication.Messaging = new ICapabilitiesCommunication("Messaging");
        ICapabilitiesCommunication.Telephony = new ICapabilitiesCommunication("Telephony");
        ICapabilitiesCommunication.Unknown = new ICapabilitiesCommunication("Unknown");
        return ICapabilitiesCommunication;
    })();
    Adaptive.ICapabilitiesCommunication = ICapabilitiesCommunication;
    /**
       Enumeration ICapabilitiesData
    */
    var ICapabilitiesData = (function () {
        function ICapabilitiesData(value) {
            this.value = value;
        }
        ICapabilitiesData.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesData.Database = new ICapabilitiesData("Database");
        ICapabilitiesData.File = new ICapabilitiesData("File");
        ICapabilitiesData.Cloud = new ICapabilitiesData("Cloud");
        ICapabilitiesData.Unknown = new ICapabilitiesData("Unknown");
        return ICapabilitiesData;
    })();
    Adaptive.ICapabilitiesData = ICapabilitiesData;
    /**
       Enumeration ICapabilitiesMedia
    */
    var ICapabilitiesMedia = (function () {
        function ICapabilitiesMedia(value) {
            this.value = value;
        }
        ICapabilitiesMedia.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesMedia.Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
        ICapabilitiesMedia.Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
        ICapabilitiesMedia.Camera = new ICapabilitiesMedia("Camera");
        ICapabilitiesMedia.Video_Playback = new ICapabilitiesMedia("Video_Playback");
        ICapabilitiesMedia.Video_Recording = new ICapabilitiesMedia("Video_Recording");
        ICapabilitiesMedia.Unknown = new ICapabilitiesMedia("Unknown");
        return ICapabilitiesMedia;
    })();
    Adaptive.ICapabilitiesMedia = ICapabilitiesMedia;
    /**
       Enumeration ICapabilitiesNet
    */
    var ICapabilitiesNet = (function () {
        function ICapabilitiesNet(value) {
            this.value = value;
        }
        ICapabilitiesNet.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNet.GSM = new ICapabilitiesNet("GSM");
        ICapabilitiesNet.GPRS = new ICapabilitiesNet("GPRS");
        ICapabilitiesNet.HSDPA = new ICapabilitiesNet("HSDPA");
        ICapabilitiesNet.LTE = new ICapabilitiesNet("LTE");
        ICapabilitiesNet.WIFI = new ICapabilitiesNet("WIFI");
        ICapabilitiesNet.Ethernet = new ICapabilitiesNet("Ethernet");
        ICapabilitiesNet.Unavailable = new ICapabilitiesNet("Unavailable");
        ICapabilitiesNet.Unknown = new ICapabilitiesNet("Unknown");
        return ICapabilitiesNet;
    })();
    Adaptive.ICapabilitiesNet = ICapabilitiesNet;
    /**
       Enumeration ICapabilitiesNotification
    */
    var ICapabilitiesNotification = (function () {
        function ICapabilitiesNotification(value) {
            this.value = value;
        }
        ICapabilitiesNotification.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNotification.Alarm = new ICapabilitiesNotification("Alarm");
        ICapabilitiesNotification.LocalNotification = new ICapabilitiesNotification("LocalNotification");
        ICapabilitiesNotification.RemoteNotification = new ICapabilitiesNotification("RemoteNotification");
        ICapabilitiesNotification.Vibration = new ICapabilitiesNotification("Vibration");
        ICapabilitiesNotification.Unknown = new ICapabilitiesNotification("Unknown");
        return ICapabilitiesNotification;
    })();
    Adaptive.ICapabilitiesNotification = ICapabilitiesNotification;
    /**
       Enumeration ICapabilitiesSensor
    */
    var ICapabilitiesSensor = (function () {
        function ICapabilitiesSensor(value) {
            this.value = value;
        }
        ICapabilitiesSensor.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesSensor.Accelerometer = new ICapabilitiesSensor("Accelerometer");
        ICapabilitiesSensor.AmbientLight = new ICapabilitiesSensor("AmbientLight");
        ICapabilitiesSensor.Barometer = new ICapabilitiesSensor("Barometer");
        ICapabilitiesSensor.Geolocation = new ICapabilitiesSensor("Geolocation");
        ICapabilitiesSensor.Gyroscope = new ICapabilitiesSensor("Gyroscope");
        ICapabilitiesSensor.Magnetometer = new ICapabilitiesSensor("Magnetometer");
        ICapabilitiesSensor.Proximity = new ICapabilitiesSensor("Proximity");
        ICapabilitiesSensor.Unknown = new ICapabilitiesSensor("Unknown");
        return ICapabilitiesSensor;
    })();
    Adaptive.ICapabilitiesSensor = ICapabilitiesSensor;
    /**
       Enumeration IContactFieldGroup
    */
    var IContactFieldGroup = (function () {
        function IContactFieldGroup(value) {
            this.value = value;
        }
        IContactFieldGroup.prototype.toString = function () {
            return this.value;
        };
        IContactFieldGroup.PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
        IContactFieldGroup.PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
        IContactFieldGroup.ADDRESSES = new IContactFieldGroup("ADDRESSES");
        IContactFieldGroup.PHONES = new IContactFieldGroup("PHONES");
        IContactFieldGroup.EMAILS = new IContactFieldGroup("EMAILS");
        IContactFieldGroup.WEBSITES = new IContactFieldGroup("WEBSITES");
        IContactFieldGroup.SOCIALS = new IContactFieldGroup("SOCIALS");
        IContactFieldGroup.TAGS = new IContactFieldGroup("TAGS");
        IContactFieldGroup.Unknown = new IContactFieldGroup("Unknown");
        return IContactFieldGroup;
    })();
    Adaptive.IContactFieldGroup = IContactFieldGroup;
    /**
       Enumeration IContactFilter
    */
    var IContactFilter = (function () {
        function IContactFilter(value) {
            this.value = value;
        }
        IContactFilter.prototype.toString = function () {
            return this.value;
        };
        IContactFilter.HAS_PHONE = new IContactFilter("HAS_PHONE");
        IContactFilter.HAS_EMAIL = new IContactFilter("HAS_EMAIL");
        IContactFilter.HAS_ADDRESS = new IContactFilter("HAS_ADDRESS");
        IContactFilter.Unknown = new IContactFilter("Unknown");
        return IContactFilter;
    })();
    Adaptive.IContactFilter = IContactFilter;
    /**
       Enumeration IContactPhotoResultCallbackError
    */
    var IContactPhotoResultCallbackError = (function () {
        function IContactPhotoResultCallbackError(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackError.NoPermission = new IContactPhotoResultCallbackError("NoPermission");
        IContactPhotoResultCallbackError.Wrong_Params = new IContactPhotoResultCallbackError("Wrong_Params");
        IContactPhotoResultCallbackError.No_Photo = new IContactPhotoResultCallbackError("No_Photo");
        IContactPhotoResultCallbackError.Unknown = new IContactPhotoResultCallbackError("Unknown");
        return IContactPhotoResultCallbackError;
    })();
    Adaptive.IContactPhotoResultCallbackError = IContactPhotoResultCallbackError;
    /**
       Enumeration IContactPhotoResultCallbackWarning
    */
    var IContactPhotoResultCallbackWarning = (function () {
        function IContactPhotoResultCallbackWarning(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackWarning.LimitExceeded = new IContactPhotoResultCallbackWarning("LimitExceeded");
        IContactPhotoResultCallbackWarning.No_Matches = new IContactPhotoResultCallbackWarning("No_Matches");
        IContactPhotoResultCallbackWarning.Unknown = new IContactPhotoResultCallbackWarning("Unknown");
        return IContactPhotoResultCallbackWarning;
    })();
    Adaptive.IContactPhotoResultCallbackWarning = IContactPhotoResultCallbackWarning;
    /**
       Enumeration IContactResultCallbackError
    */
    var IContactResultCallbackError = (function () {
        function IContactResultCallbackError(value) {
            this.value = value;
        }
        IContactResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackError.NoPermission = new IContactResultCallbackError("NoPermission");
        IContactResultCallbackError.Wrong_Params = new IContactResultCallbackError("Wrong_Params");
        IContactResultCallbackError.Unknown = new IContactResultCallbackError("Unknown");
        return IContactResultCallbackError;
    })();
    Adaptive.IContactResultCallbackError = IContactResultCallbackError;
    /**
       Enumeration IContactResultCallbackWarning
    */
    var IContactResultCallbackWarning = (function () {
        function IContactResultCallbackWarning(value) {
            this.value = value;
        }
        IContactResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackWarning.LimitExceeded = new IContactResultCallbackWarning("LimitExceeded");
        IContactResultCallbackWarning.No_Matches = new IContactResultCallbackWarning("No_Matches");
        IContactResultCallbackWarning.Unknown = new IContactResultCallbackWarning("Unknown");
        return IContactResultCallbackWarning;
    })();
    Adaptive.IContactResultCallbackWarning = IContactResultCallbackWarning;
    /**
       Enumeration IDatabaseResultCallbackError
    */
    var IDatabaseResultCallbackError = (function () {
        function IDatabaseResultCallbackError(value) {
            this.value = value;
        }
        IDatabaseResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackError.NoSpace = new IDatabaseResultCallbackError("NoSpace");
        IDatabaseResultCallbackError.SqlException = new IDatabaseResultCallbackError("SqlException");
        IDatabaseResultCallbackError.NotDeleted = new IDatabaseResultCallbackError("NotDeleted");
        IDatabaseResultCallbackError.Unknown = new IDatabaseResultCallbackError("Unknown");
        return IDatabaseResultCallbackError;
    })();
    Adaptive.IDatabaseResultCallbackError = IDatabaseResultCallbackError;
    /**
       Enumeration IDatabaseResultCallbackWarning
    */
    var IDatabaseResultCallbackWarning = (function () {
        function IDatabaseResultCallbackWarning(value) {
            this.value = value;
        }
        IDatabaseResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackWarning.DatabaseExists = new IDatabaseResultCallbackWarning("DatabaseExists");
        IDatabaseResultCallbackWarning.IsOpen = new IDatabaseResultCallbackWarning("IsOpen");
        IDatabaseResultCallbackWarning.Unknown = new IDatabaseResultCallbackWarning("Unknown");
        return IDatabaseResultCallbackWarning;
    })();
    Adaptive.IDatabaseResultCallbackWarning = IDatabaseResultCallbackWarning;
    /**
       Enumeration IDatabaseTableResultCallbackError
    */
    var IDatabaseTableResultCallbackError = (function () {
        function IDatabaseTableResultCallbackError(value) {
            this.value = value;
        }
        IDatabaseTableResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IDatabaseTableResultCallbackError.NoSpace = new IDatabaseTableResultCallbackError("NoSpace");
        IDatabaseTableResultCallbackError.ReadOnlyTable = new IDatabaseTableResultCallbackError("ReadOnlyTable");
        IDatabaseTableResultCallbackError.SqlException = new IDatabaseTableResultCallbackError("SqlException");
        IDatabaseTableResultCallbackError.DatabaseNotFound = new IDatabaseTableResultCallbackError("DatabaseNotFound");
        IDatabaseTableResultCallbackError.NoTableFound = new IDatabaseTableResultCallbackError("NoTableFound");
        IDatabaseTableResultCallbackError.Unknown = new IDatabaseTableResultCallbackError("Unknown");
        return IDatabaseTableResultCallbackError;
    })();
    Adaptive.IDatabaseTableResultCallbackError = IDatabaseTableResultCallbackError;
    /**
       Enumeration IDatabaseTableResultCallbackWarning
    */
    var IDatabaseTableResultCallbackWarning = (function () {
        function IDatabaseTableResultCallbackWarning(value) {
            this.value = value;
        }
        IDatabaseTableResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IDatabaseTableResultCallbackWarning.TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
        IDatabaseTableResultCallbackWarning.TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
        IDatabaseTableResultCallbackWarning.NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
        IDatabaseTableResultCallbackWarning.Unknown = new IDatabaseTableResultCallbackWarning("Unknown");
        return IDatabaseTableResultCallbackWarning;
    })();
    Adaptive.IDatabaseTableResultCallbackWarning = IDatabaseTableResultCallbackWarning;
    /**
       Enumeration IFileDataLoadResultCallbackError
    */
    var IFileDataLoadResultCallbackError = (function () {
        function IFileDataLoadResultCallbackError(value) {
            this.value = value;
        }
        IFileDataLoadResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IFileDataLoadResultCallbackError.InexistentFile = new IFileDataLoadResultCallbackError("InexistentFile");
        IFileDataLoadResultCallbackError.InsufficientSpace = new IFileDataLoadResultCallbackError("InsufficientSpace");
        IFileDataLoadResultCallbackError.Unauthorized = new IFileDataLoadResultCallbackError("Unauthorized");
        IFileDataLoadResultCallbackError.Unknown = new IFileDataLoadResultCallbackError("Unknown");
        return IFileDataLoadResultCallbackError;
    })();
    Adaptive.IFileDataLoadResultCallbackError = IFileDataLoadResultCallbackError;
    /**
       Enumeration IFileDataLoadResultCallbackWarning
    */
    var IFileDataLoadResultCallbackWarning = (function () {
        function IFileDataLoadResultCallbackWarning(value) {
            this.value = value;
        }
        IFileDataLoadResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IFileDataLoadResultCallbackWarning.ExceedMaximumSize = new IFileDataLoadResultCallbackWarning("ExceedMaximumSize");
        IFileDataLoadResultCallbackWarning.Unknown = new IFileDataLoadResultCallbackWarning("Unknown");
        return IFileDataLoadResultCallbackWarning;
    })();
    Adaptive.IFileDataLoadResultCallbackWarning = IFileDataLoadResultCallbackWarning;
    /**
       Enumeration IFileDataStoreResultCallbackError
    */
    var IFileDataStoreResultCallbackError = (function () {
        function IFileDataStoreResultCallbackError(value) {
            this.value = value;
        }
        IFileDataStoreResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IFileDataStoreResultCallbackError.InexistentFile = new IFileDataStoreResultCallbackError("InexistentFile");
        IFileDataStoreResultCallbackError.InsufficientSpace = new IFileDataStoreResultCallbackError("InsufficientSpace");
        IFileDataStoreResultCallbackError.Unauthorized = new IFileDataStoreResultCallbackError("Unauthorized");
        IFileDataStoreResultCallbackError.Unknown = new IFileDataStoreResultCallbackError("Unknown");
        return IFileDataStoreResultCallbackError;
    })();
    Adaptive.IFileDataStoreResultCallbackError = IFileDataStoreResultCallbackError;
    /**
       Enumeration IFileDataStoreResultCallbackWarning
    */
    var IFileDataStoreResultCallbackWarning = (function () {
        function IFileDataStoreResultCallbackWarning(value) {
            this.value = value;
        }
        IFileDataStoreResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IFileDataStoreResultCallbackWarning.ExceedMaximumSize = new IFileDataStoreResultCallbackWarning("ExceedMaximumSize");
        IFileDataStoreResultCallbackWarning.Unknown = new IFileDataStoreResultCallbackWarning("Unknown");
        return IFileDataStoreResultCallbackWarning;
    })();
    Adaptive.IFileDataStoreResultCallbackWarning = IFileDataStoreResultCallbackWarning;
    /**
       Enumeration IFileListResultCallbackError
    */
    var IFileListResultCallbackError = (function () {
        function IFileListResultCallbackError(value) {
            this.value = value;
        }
        IFileListResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackError.InexistentFile = new IFileListResultCallbackError("InexistentFile");
        IFileListResultCallbackError.Unauthorized = new IFileListResultCallbackError("Unauthorized");
        IFileListResultCallbackError.Unknown = new IFileListResultCallbackError("Unknown");
        return IFileListResultCallbackError;
    })();
    Adaptive.IFileListResultCallbackError = IFileListResultCallbackError;
    /**
       Enumeration IFileListResultCallbackWarning
    */
    var IFileListResultCallbackWarning = (function () {
        function IFileListResultCallbackWarning(value) {
            this.value = value;
        }
        IFileListResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackWarning.PartialResult = new IFileListResultCallbackWarning("PartialResult");
        IFileListResultCallbackWarning.Unknown = new IFileListResultCallbackWarning("Unknown");
        return IFileListResultCallbackWarning;
    })();
    Adaptive.IFileListResultCallbackWarning = IFileListResultCallbackWarning;
    /**
       Enumeration IFileResultCallbackError
    */
    var IFileResultCallbackError = (function () {
        function IFileResultCallbackError(value) {
            this.value = value;
        }
        IFileResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackError.FileExists = new IFileResultCallbackError("FileExists");
        IFileResultCallbackError.SourceInexistent = new IFileResultCallbackError("SourceInexistent");
        IFileResultCallbackError.DestionationExists = new IFileResultCallbackError("DestionationExists");
        IFileResultCallbackError.InsufficientSpace = new IFileResultCallbackError("InsufficientSpace");
        IFileResultCallbackError.Unauthorized = new IFileResultCallbackError("Unauthorized");
        IFileResultCallbackError.Unknown = new IFileResultCallbackError("Unknown");
        return IFileResultCallbackError;
    })();
    Adaptive.IFileResultCallbackError = IFileResultCallbackError;
    /**
       Enumeration IFileResultCallbackWarning
    */
    var IFileResultCallbackWarning = (function () {
        function IFileResultCallbackWarning(value) {
            this.value = value;
        }
        IFileResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackWarning.SourceNotDeleted = new IFileResultCallbackWarning("SourceNotDeleted");
        IFileResultCallbackWarning.RootDirectory = new IFileResultCallbackWarning("RootDirectory");
        IFileResultCallbackWarning.Unknown = new IFileResultCallbackWarning("Unknown");
        return IFileResultCallbackWarning;
    })();
    Adaptive.IFileResultCallbackWarning = IFileResultCallbackWarning;
    /**
       Enumeration IFileSystemSecurity
    */
    var IFileSystemSecurity = (function () {
        function IFileSystemSecurity(value) {
            this.value = value;
        }
        IFileSystemSecurity.prototype.toString = function () {
            return this.value;
        };
        IFileSystemSecurity.Default = new IFileSystemSecurity("Default");
        IFileSystemSecurity.Protected = new IFileSystemSecurity("Protected");
        IFileSystemSecurity.Encrypted = new IFileSystemSecurity("Encrypted");
        IFileSystemSecurity.Unknown = new IFileSystemSecurity("Unknown");
        return IFileSystemSecurity;
    })();
    Adaptive.IFileSystemSecurity = IFileSystemSecurity;
    /**
       Enumeration IFileSystemStorageType
    */
    var IFileSystemStorageType = (function () {
        function IFileSystemStorageType(value) {
            this.value = value;
        }
        IFileSystemStorageType.prototype.toString = function () {
            return this.value;
        };
        IFileSystemStorageType.Application = new IFileSystemStorageType("Application");
        IFileSystemStorageType.Document = new IFileSystemStorageType("Document");
        IFileSystemStorageType.Cloud = new IFileSystemStorageType("Cloud");
        IFileSystemStorageType.Protected = new IFileSystemStorageType("Protected");
        IFileSystemStorageType.Cache = new IFileSystemStorageType("Cache");
        IFileSystemStorageType.External = new IFileSystemStorageType("External");
        IFileSystemStorageType.Unknown = new IFileSystemStorageType("Unknown");
        return IFileSystemStorageType;
    })();
    Adaptive.IFileSystemStorageType = IFileSystemStorageType;
    /**
       Enumeration IFileSystemType
    */
    var IFileSystemType = (function () {
        function IFileSystemType(value) {
            this.value = value;
        }
        IFileSystemType.prototype.toString = function () {
            return this.value;
        };
        IFileSystemType.Directory = new IFileSystemType("Directory");
        IFileSystemType.File = new IFileSystemType("File");
        IFileSystemType.Unknown = new IFileSystemType("Unknown");
        return IFileSystemType;
    })();
    Adaptive.IFileSystemType = IFileSystemType;
    /**
       Enumeration IGeolocationListenerError
    */
    var IGeolocationListenerError = (function () {
        function IGeolocationListenerError(value) {
            this.value = value;
        }
        IGeolocationListenerError.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerError.Disabled = new IGeolocationListenerError("Disabled");
        IGeolocationListenerError.RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
        IGeolocationListenerError.DeniedAccess = new IGeolocationListenerError("DeniedAccess");
        IGeolocationListenerError.StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
        IGeolocationListenerError.Unknown = new IGeolocationListenerError("Unknown");
        return IGeolocationListenerError;
    })();
    Adaptive.IGeolocationListenerError = IGeolocationListenerError;
    /**
       Enumeration IGeolocationListenerWarning
    */
    var IGeolocationListenerWarning = (function () {
        function IGeolocationListenerWarning(value) {
            this.value = value;
        }
        IGeolocationListenerWarning.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerWarning.HighDoP = new IGeolocationListenerWarning("HighDoP");
        IGeolocationListenerWarning.StaleData = new IGeolocationListenerWarning("StaleData");
        IGeolocationListenerWarning.Unknown = new IGeolocationListenerWarning("Unknown");
        return IGeolocationListenerWarning;
    })();
    Adaptive.IGeolocationListenerWarning = IGeolocationListenerWarning;
    /**
       Enumeration ILifecycleListenerError
    */
    var ILifecycleListenerError = (function () {
        function ILifecycleListenerError(value) {
            this.value = value;
        }
        ILifecycleListenerError.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerError.Runtime = new ILifecycleListenerError("Runtime");
        ILifecycleListenerError.Implementation = new ILifecycleListenerError("Implementation");
        ILifecycleListenerError.Killed = new ILifecycleListenerError("Killed");
        ILifecycleListenerError.Unknown = new ILifecycleListenerError("Unknown");
        return ILifecycleListenerError;
    })();
    Adaptive.ILifecycleListenerError = ILifecycleListenerError;
    /**
       Enumeration ILifecycleListenerWarning
    */
    var ILifecycleListenerWarning = (function () {
        function ILifecycleListenerWarning(value) {
            this.value = value;
        }
        ILifecycleListenerWarning.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerWarning.MemoryLow = new ILifecycleListenerWarning("MemoryLow");
        ILifecycleListenerWarning.BatteryLow = new ILifecycleListenerWarning("BatteryLow");
        ILifecycleListenerWarning.Unknown = new ILifecycleListenerWarning("Unknown");
        return ILifecycleListenerWarning;
    })();
    Adaptive.ILifecycleListenerWarning = ILifecycleListenerWarning;
    /**
       Enumeration ILoggingLogLevel
    */
    var ILoggingLogLevel = (function () {
        function ILoggingLogLevel(value) {
            this.value = value;
        }
        ILoggingLogLevel.prototype.toString = function () {
            return this.value;
        };
        ILoggingLogLevel.DEBUG = new ILoggingLogLevel("DEBUG");
        ILoggingLogLevel.WARN = new ILoggingLogLevel("WARN");
        ILoggingLogLevel.ERROR = new ILoggingLogLevel("ERROR");
        ILoggingLogLevel.INFO = new ILoggingLogLevel("INFO");
        ILoggingLogLevel.Unknown = new ILoggingLogLevel("Unknown");
        return ILoggingLogLevel;
    })();
    Adaptive.ILoggingLogLevel = ILoggingLogLevel;
    /**
       Enumeration IMessagingCallbackError
    */
    var IMessagingCallbackError = (function () {
        function IMessagingCallbackError(value) {
            this.value = value;
        }
        IMessagingCallbackError.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackError.SIMNotPresent = new IMessagingCallbackError("SIMNotPresent");
        IMessagingCallbackError.EmailAccountNotFound = new IMessagingCallbackError("EmailAccountNotFound");
        IMessagingCallbackError.NotSent = new IMessagingCallbackError("NotSent");
        IMessagingCallbackError.WrongParams = new IMessagingCallbackError("WrongParams");
        IMessagingCallbackError.NotSupported = new IMessagingCallbackError("NotSupported");
        IMessagingCallbackError.Unknown = new IMessagingCallbackError("Unknown");
        return IMessagingCallbackError;
    })();
    Adaptive.IMessagingCallbackError = IMessagingCallbackError;
    /**
       Enumeration IMessagingCallbackWarning
    */
    var IMessagingCallbackWarning = (function () {
        function IMessagingCallbackWarning(value) {
            this.value = value;
        }
        IMessagingCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackWarning.UnableToSentAll = new IMessagingCallbackWarning("UnableToSentAll");
        IMessagingCallbackWarning.UnableToFetchAttachment = new IMessagingCallbackWarning("UnableToFetchAttachment");
        IMessagingCallbackWarning.Unknown = new IMessagingCallbackWarning("Unknown");
        return IMessagingCallbackWarning;
    })();
    Adaptive.IMessagingCallbackWarning = IMessagingCallbackWarning;
    /**
       Enumeration INetworkReachabilityCallbackError
    */
    var INetworkReachabilityCallbackError = (function () {
        function INetworkReachabilityCallbackError(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackError.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackError.Forbidden = new INetworkReachabilityCallbackError("Forbidden");
        INetworkReachabilityCallbackError.NotFound = new INetworkReachabilityCallbackError("NotFound");
        INetworkReachabilityCallbackError.MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
        INetworkReachabilityCallbackError.NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
        INetworkReachabilityCallbackError.NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
        INetworkReachabilityCallbackError.TimeOut = new INetworkReachabilityCallbackError("TimeOut");
        INetworkReachabilityCallbackError.NoResponse = new INetworkReachabilityCallbackError("NoResponse");
        INetworkReachabilityCallbackError.Unreachable = new INetworkReachabilityCallbackError("Unreachable");
        INetworkReachabilityCallbackError.Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
        INetworkReachabilityCallbackError.MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
        INetworkReachabilityCallbackError.DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
        INetworkReachabilityCallbackError.Unknown = new INetworkReachabilityCallbackError("Unknown");
        return INetworkReachabilityCallbackError;
    })();
    Adaptive.INetworkReachabilityCallbackError = INetworkReachabilityCallbackError;
    /**
       Enumeration INetworkReachabilityCallbackWarning
    */
    var INetworkReachabilityCallbackWarning = (function () {
        function INetworkReachabilityCallbackWarning(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackWarning.IncorrectScheme = new INetworkReachabilityCallbackWarning("IncorrectScheme");
        INetworkReachabilityCallbackWarning.NotSecure = new INetworkReachabilityCallbackWarning("NotSecure");
        INetworkReachabilityCallbackWarning.NotTrusted = new INetworkReachabilityCallbackWarning("NotTrusted");
        INetworkReachabilityCallbackWarning.Redirected = new INetworkReachabilityCallbackWarning("Redirected");
        INetworkReachabilityCallbackWarning.NotRegisteredService = new INetworkReachabilityCallbackWarning("NotRegisteredService");
        INetworkReachabilityCallbackWarning.Unknown = new INetworkReachabilityCallbackWarning("Unknown");
        return INetworkReachabilityCallbackWarning;
    })();
    Adaptive.INetworkReachabilityCallbackWarning = INetworkReachabilityCallbackWarning;
    /**
       Enumeration INetworkStatusListenerError
    */
    var INetworkStatusListenerError = (function () {
        function INetworkStatusListenerError(value) {
            this.value = value;
        }
        INetworkStatusListenerError.prototype.toString = function () {
            return this.value;
        };
        INetworkStatusListenerError.NoPermission = new INetworkStatusListenerError("NoPermission");
        INetworkStatusListenerError.Unknown = new INetworkStatusListenerError("Unknown");
        return INetworkStatusListenerError;
    })();
    Adaptive.INetworkStatusListenerError = INetworkStatusListenerError;
    /**
       Enumeration INetworkStatusListenerWarning
    */
    var INetworkStatusListenerWarning = (function () {
        function INetworkStatusListenerWarning(value) {
            this.value = value;
        }
        INetworkStatusListenerWarning.prototype.toString = function () {
            return this.value;
        };
        INetworkStatusListenerWarning.IpAddressNotAssigned = new INetworkStatusListenerWarning("IpAddressNotAssigned");
        INetworkStatusListenerWarning.IpAddressChanged = new INetworkStatusListenerWarning("IpAddressChanged");
        INetworkStatusListenerWarning.Unknown = new INetworkStatusListenerWarning("Unknown");
        return INetworkStatusListenerWarning;
    })();
    Adaptive.INetworkStatusListenerWarning = INetworkStatusListenerWarning;
    /**
       Enumeration IOSType
    */
    var IOSType = (function () {
        function IOSType(value) {
            this.value = value;
        }
        IOSType.prototype.toString = function () {
            return this.value;
        };
        IOSType.iOS = new IOSType("iOS");
        IOSType.OSX = new IOSType("OSX");
        IOSType.Windows = new IOSType("Windows");
        IOSType.WindowsPhone = new IOSType("WindowsPhone");
        IOSType.Android = new IOSType("Android");
        IOSType.Linux = new IOSType("Linux");
        IOSType.Blackberry = new IOSType("Blackberry");
        IOSType.Tizen = new IOSType("Tizen");
        IOSType.FirefoxOS = new IOSType("FirefoxOS");
        IOSType.Chromium = new IOSType("Chromium");
        IOSType.Unspecified = new IOSType("Unspecified");
        IOSType.Unknown = new IOSType("Unknown");
        return IOSType;
    })();
    Adaptive.IOSType = IOSType;
    /**
       Enumeration ISecurityResultCallbackError
    */
    var ISecurityResultCallbackError = (function () {
        function ISecurityResultCallbackError(value) {
            this.value = value;
        }
        ISecurityResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        ISecurityResultCallbackError.NoPermission = new ISecurityResultCallbackError("NoPermission");
        ISecurityResultCallbackError.NoMatchesFound = new ISecurityResultCallbackError("NoMatchesFound");
        ISecurityResultCallbackError.Unknown = new ISecurityResultCallbackError("Unknown");
        return ISecurityResultCallbackError;
    })();
    Adaptive.ISecurityResultCallbackError = ISecurityResultCallbackError;
    /**
       Enumeration ISecurityResultCallbackWarning
    */
    var ISecurityResultCallbackWarning = (function () {
        function ISecurityResultCallbackWarning(value) {
            this.value = value;
        }
        ISecurityResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        ISecurityResultCallbackWarning.EntryOverride = new ISecurityResultCallbackWarning("EntryOverride");
        ISecurityResultCallbackWarning.Unknown = new ISecurityResultCallbackWarning("Unknown");
        return ISecurityResultCallbackWarning;
    })();
    Adaptive.ISecurityResultCallbackWarning = ISecurityResultCallbackWarning;
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
        IServiceProtocolVersion.HttpProtocolVersion10 = new IServiceProtocolVersion("HttpProtocolVersion10");
        IServiceProtocolVersion.HttpProtocolVersion11 = new IServiceProtocolVersion("HttpProtocolVersion11");
        IServiceProtocolVersion.Unknown = new IServiceProtocolVersion("Unknown");
        return IServiceProtocolVersion;
    })();
    Adaptive.IServiceProtocolVersion = IServiceProtocolVersion;
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
        IServiceMethod.Post = new IServiceMethod("Post");
        IServiceMethod.Get = new IServiceMethod("Get");
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
        IServiceType.ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
        IServiceType.ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
        IServiceType.ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
        IServiceType.ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
        IServiceType.ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
        IServiceType.ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
        IServiceType.ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
        IServiceType.ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
        IServiceType.ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
        IServiceType.ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
        IServiceType.Unknown = new IServiceType("Unknown");
        return IServiceType;
    })();
    Adaptive.IServiceType = IServiceType;
    /**
       Enumeration IServiceResultCallbackError
    */
    var IServiceResultCallbackError = (function () {
        function IServiceResultCallbackError(value) {
            this.value = value;
        }
        IServiceResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackError.Forbidden = new IServiceResultCallbackError("Forbidden");
        IServiceResultCallbackError.NotFound = new IServiceResultCallbackError("NotFound");
        IServiceResultCallbackError.MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
        IServiceResultCallbackError.NotAllowed = new IServiceResultCallbackError("NotAllowed");
        IServiceResultCallbackError.NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
        IServiceResultCallbackError.TimeOut = new IServiceResultCallbackError("TimeOut");
        IServiceResultCallbackError.NoResponse = new IServiceResultCallbackError("NoResponse");
        IServiceResultCallbackError.ServerError = new IServiceResultCallbackError("ServerError");
        IServiceResultCallbackError.Unreachable = new IServiceResultCallbackError("Unreachable");
        IServiceResultCallbackError.MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
        IServiceResultCallbackError.NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
        IServiceResultCallbackError.Unknown = new IServiceResultCallbackError("Unknown");
        return IServiceResultCallbackError;
    })();
    Adaptive.IServiceResultCallbackError = IServiceResultCallbackError;
    /**
       Enumeration IServiceResultCallbackWarning
    */
    var IServiceResultCallbackWarning = (function () {
        function IServiceResultCallbackWarning(value) {
            this.value = value;
        }
        IServiceResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackWarning.NotSecure = new IServiceResultCallbackWarning("NotSecure");
        IServiceResultCallbackWarning.NotTrusted = new IServiceResultCallbackWarning("NotTrusted");
        IServiceResultCallbackWarning.Redirected = new IServiceResultCallbackWarning("Redirected");
        IServiceResultCallbackWarning.Wrong_Params = new IServiceResultCallbackWarning("Wrong_Params");
        IServiceResultCallbackWarning.Unknown = new IServiceResultCallbackWarning("Unknown");
        return IServiceResultCallbackWarning;
    })();
    Adaptive.IServiceResultCallbackWarning = IServiceResultCallbackWarning;
    /**
       Enumeration ITelephonyStatus
    */
    var ITelephonyStatus = (function () {
        function ITelephonyStatus(value) {
            this.value = value;
        }
        ITelephonyStatus.prototype.toString = function () {
            return this.value;
        };
        ITelephonyStatus.Dialing = new ITelephonyStatus("Dialing");
        ITelephonyStatus.Failed = new ITelephonyStatus("Failed");
        ITelephonyStatus.Unknown = new ITelephonyStatus("Unknown");
        return ITelephonyStatus;
    })();
    Adaptive.ITelephonyStatus = ITelephonyStatus;
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
        LifecycleState.Pausing = new LifecycleState("Pausing");
        LifecycleState.PausedIdle = new LifecycleState("PausedIdle");
        LifecycleState.PausedRun = new LifecycleState("PausedRun");
        LifecycleState.Resuming = new LifecycleState("Resuming");
        LifecycleState.Stopping = new LifecycleState("Stopping");
        LifecycleState.Unknown = new LifecycleState("Unknown");
        return LifecycleState;
    })();
    Adaptive.LifecycleState = LifecycleState;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Adaptive.js.map