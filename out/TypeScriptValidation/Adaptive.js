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
            this.contactId = contactId;
        }
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