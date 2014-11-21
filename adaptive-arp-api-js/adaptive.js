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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Adaptive;
(function (Adaptive) {
    var Acceleration = (function () {
        /** Initialization **/
        function Acceleration(x, y, z, timeStamp) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.timeStamp = timeStamp;
        }
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
    var AttachmentData = (function () {
        /** Initialization **/
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
    var Button = (function () {
        /** Initialization **/
        function Button(type) {
            this.type = type;
        }
        return Button;
    })();
    Adaptive.Button = Button;
    var Column = (function () {
        /** Initialization **/
        function Column(name) {
            this.name = name;
        }
        return Column;
    })();
    Adaptive.Column = Column;
    var Contact = (function (_super) {
        __extends(Contact, _super);
        /** Initialization **/
        function Contact(contactId) {
            _super.call(this);
            this.contactId = contactId;
        }
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    var ContactAddress = (function () {
        /** Initialization **/
        function ContactAddress(address, type) {
            this.address = address;
            this.type = type;
        }
        return ContactAddress;
    })();
    Adaptive.ContactAddress = ContactAddress;
    var ContactEmail = (function () {
        /** Initialization **/
        function ContactEmail(type, primary, email) {
            this.type = type;
            this.primary = primary;
            this.email = email;
        }
        return ContactEmail;
    })();
    Adaptive.ContactEmail = ContactEmail;
    var ContactPersonalInfo = (function () {
        /** Initialization **/
        function ContactPersonalInfo(name, middleName, lastName, title) {
            this.name = name;
            this.middleName = middleName;
            this.lastName = lastName;
            this.title = title;
        }
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    var ContactPhone = (function () {
        /** Initialization **/
        function ContactPhone(phone, phoneType) {
            this.phone = phone;
            this.phoneType = phoneType;
        }
        return ContactPhone;
    })();
    Adaptive.ContactPhone = ContactPhone;
    var ContactProfessionalInfo = (function () {
        /** Initialization **/
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            this.jobTitle = jobTitle;
            this.jobDescription = jobDescription;
            this.company = company;
        }
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    var ContactSocial = (function () {
        /** Initialization **/
        function ContactSocial(socialNetwork, profileUrl) {
            this.socialNetwork = socialNetwork;
            this.profileUrl = profileUrl;
        }
        return ContactSocial;
    })();
    Adaptive.ContactSocial = ContactSocial;
    var ContactTag = (function () {
        /** Initialization **/
        function ContactTag(name, dataValue) {
            this.name = name;
            this.dataValue = dataValue;
        }
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
    var ContactUid = (function () {
        /** Initialization **/
        function ContactUid(contactId) {
            this.contactId = contactId;
        }
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
    var ContactWebsite = (function () {
        /** Initialization **/
        function ContactWebsite(url) {
            this.url = url;
        }
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
    var Cookie = (function () {
        /** Initialization **/
        function Cookie(name, data) {
            this.name = name;
            this.data = data;
        }
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
    var Database = (function () {
        /** Initialization **/
        function Database(name, compress) {
            this.name = name;
            this.compress = compress;
        }
        return Database;
    })();
    Adaptive.Database = Database;
    var DeviceInfo = (function () {
        /** Initialization **/
        function DeviceInfo(name, model, vendor, uuid) {
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
    var Email = (function () {
        /** Initialization **/
        function Email(toRecipients, subject, messageBody) {
            this.toRecipients = toRecipients;
            this.subject = subject;
            this.messageBody = messageBody;
        }
        return Email;
    })();
    Adaptive.Email = Email;
    var EmailAddress = (function () {
        /** Initialization **/
        function EmailAddress(address) {
            this.address = address;
        }
        return EmailAddress;
    })();
    Adaptive.EmailAddress = EmailAddress;
    var Endpoint = (function () {
        /** Initialization **/
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
    var Geolocation = (function () {
        /** Initialization **/
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
    var Header = (function () {
        /** Initialization **/
        function Header(name, data) {
            this.name = name;
            this.data = data;
        }
        return Header;
    })();
    Adaptive.Header = Header;
    var Lifecycle = (function () {
        /** Initialization **/
        function Lifecycle(state) {
            this.state = state;
        }
        return Lifecycle;
    })();
    Adaptive.Lifecycle = Lifecycle;
    var Locale = (function () {
        /** Initialization **/
        function Locale(language, country) {
            this.language = language;
            this.country = country;
        }
        return Locale;
    })();
    Adaptive.Locale = Locale;
    var OSInfo = (function () {
        /** Initialization **/
        function OSInfo(name, version, vendor) {
            this.name = name;
            this.version = version;
            this.vendor = vendor;
        }
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
    var Row = (function () {
        /** Initialization **/
        function Row(values) {
            this.values = values;
        }
        return Row;
    })();
    Adaptive.Row = Row;
    var SecureKeyPair = (function () {
        /** Initialization **/
        function SecureKeyPair(secureKey, secureData) {
            this.secureKey = secureKey;
            this.secureData = secureData;
        }
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
    var Service = (function () {
        /** Initialization **/
        function Service(endpoint, name, method, type) {
            this.endpoint = endpoint;
            this.name = name;
            this.method = method;
            this.type = type;
        }
        return Service;
    })();
    Adaptive.Service = Service;
    var ServiceRequest = (function () {
        /** Initialization **/
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
    var ServiceResponse = (function () {
        /** Initialization **/
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
    var Table = (function () {
        /** Initialization **/
        function Table(name) {
            this.name = name;
        }
        return Table;
    })();
    Adaptive.Table = Table;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=adaptive.js.map