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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="IServiceProtocolVersion.ts"/>
///<reference path="ServiceHeader.ts"/>
///<reference path="ServiceSession.ts"/>
var Adaptive;
(function (Adaptive) {
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
    })(Adaptive.APIBean);
    Adaptive.ServiceRequest = ServiceRequest;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceRequest.js.map