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
///<reference path="Header.ts"/>
///<reference path="IServiceProtocolVersion.ts"/>
///<reference path="ISession.ts"/>
var Adaptive;
(function (Adaptive) {
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
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=ServiceRequest.js.map