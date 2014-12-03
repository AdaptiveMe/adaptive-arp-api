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
     Structure representing the social data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactSocial {
          /**
             The profileUrl
          */
          profileUrl : string;
     }
     /**
     Structure representing the a physical or logical button on a device.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Button {
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
     }
     /**
     Represents an instance of a service.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Service {
          /**
             Enpoint of the service
          */
          endpoint : Endpoint;
          /**
             The service name
          */
          name : string;
     }
     /**
     Structure representing the phone data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactPhone {
          /**
             The phone number
          */
          phone : string;
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
     }
     /**
     Represents a specific application life-cycle stage.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class Lifecycle {
     }
     /**
     Structure representing the address data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactAddress {
          /**
             The Contact address
          */
          address : string;
     }
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
     }
     /**
     Represents a local or remote service request.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ServiceRequest {
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
     }
     /**
     Structure representing the personal info data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactPersonalInfo {
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
     }
     /**
     Structure representing the email data elements of a contact.

     @author Carlos Lozano Diez
     @since 1.0
     @version 1.0
     */
     export class ContactEmail {
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
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
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/