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
    Represents the basic information about the operating system.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var OSInfo = (function () {
        function OSInfo() {
        }
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
    /**
    Structure representing the personal info data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactPersonalInfo = (function () {
        function ContactPersonalInfo() {
        }
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    /**
    Represents a specific application life-cycle stage.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Lifecycle = (function () {
        function Lifecycle() {
        }
        return Lifecycle;
    })();
    Adaptive.Lifecycle = Lifecycle;
    /**
    Structure representing a remote or local service access end-point.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Endpoint = (function () {
        function Endpoint() {
        }
        return Endpoint;
    })();
    Adaptive.Endpoint = Endpoint;
    /**
    Represents a single secureKey-value pair.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var SecureKeyPair = (function () {
        function SecureKeyPair() {
        }
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
    /**
    Structure representing the internal unique identifier data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactUid = (function () {
        function ContactUid() {
        }
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
    /**
    Structure representing the address data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactAddress = (function () {
        function ContactAddress() {
        }
        return ContactAddress;
    })();
    Adaptive.ContactAddress = ContactAddress;
    /**
    Structure representing the basic device information.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var DeviceInfo = (function () {
        function DeviceInfo() {
        }
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
    /**
    Structure representing the data of a single acceleration reading.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Acceleration = (function () {
        function Acceleration() {
        }
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
    /**
    Structure representing the social data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactSocial = (function () {
        function ContactSocial() {
        }
        return ContactSocial;
    })();
    Adaptive.ContactSocial = ContactSocial;
    /**
    Structure representing the data elements of an email addressee.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var EmailAddress = (function () {
        function EmailAddress() {
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
        function ContactWebsite() {
        }
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
    /**
    Structure representing the binary attachment data.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var AttachmentData = (function () {
        function AttachmentData() {
        }
        return AttachmentData;
    })();
    Adaptive.AttachmentData = AttachmentData;
    /**
    Represents a local or remote service response.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ServiceResponse = (function () {
        function ServiceResponse() {
        }
        return ServiceResponse;
    })();
    Adaptive.ServiceResponse = ServiceResponse;
    /**
    Structure representing the column specification of a data table.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Column = (function () {
        function Column() {
        }
        return Column;
    })();
    Adaptive.Column = Column;
    /**
    Structure representing the assigned tags data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactTag = (function () {
        function ContactTag() {
        }
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
    /**
    Represents a local or remote service request.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ServiceRequest = (function () {
        function ServiceRequest() {
        }
        return ServiceRequest;
    })();
    Adaptive.ServiceRequest = ServiceRequest;
    /**
    Represents a data table composed of columns and rows.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Table = (function () {
        function Table() {
        }
        return Table;
    })();
    Adaptive.Table = Table;
    /**
    Structure representing the professional info data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactProfessionalInfo = (function () {
        function ContactProfessionalInfo() {
        }
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    /**
    Represents an instance of a service.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Service = (function () {
        function Service() {
        }
        return Service;
    })();
    Adaptive.Service = Service;
    /**
    Structure representing the data of a http request or response header.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Header = (function () {
        function Header() {
        }
        return Header;
    })();
    Adaptive.Header = Header;
    /**
    Structure representing the phone data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactPhone = (function () {
        function ContactPhone() {
        }
        return ContactPhone;
    })();
    Adaptive.ContactPhone = ContactPhone;
    /**
    Structure representing the data a single geolocation reading.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Geolocation = (function () {
        function Geolocation() {
        }
        return Geolocation;
    })();
    Adaptive.Geolocation = Geolocation;
    /**
    Structure representing a database reference.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Database = (function () {
        function Database() {
        }
        return Database;
    })();
    Adaptive.Database = Database;
    /**
    Structure representing the email data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var ContactEmail = (function () {
        function ContactEmail() {
        }
        return ContactEmail;
    })();
    Adaptive.ContactEmail = ContactEmail;
    /**
    Represents a specific user or system locate.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Locale = (function () {
        function Locale() {
        }
        return Locale;
    })();
    Adaptive.Locale = Locale;
    /**
    Structure representing the a physical or logical button on a device.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Button = (function () {
        function Button() {
        }
        return Button;
    })();
    Adaptive.Button = Button;
    /**
    Represents a row for a data table.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Row = (function () {
        function Row() {
        }
        return Row;
    })();
    Adaptive.Row = Row;
    /**
    Structure representing the data elements of an email.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Email = (function () {
        function Email() {
        }
        return Email;
    })();
    Adaptive.Email = Email;
    /**
    Structure representing the data of a http cookie.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Cookie = (function () {
        function Cookie() {
        }
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
    /**
    Structure representing the data elements of a contact.

    @author Carlos Lozano Diez
    @since 1.0
    @version 1.0
    */
    var Contact = (function (_super) {
        __extends(Contact, _super);
        function Contact() {
            _super.apply(this, arguments);
        }
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Adaptive.js.map