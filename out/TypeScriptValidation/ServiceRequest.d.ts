/// <reference path="APIBean.d.ts" />
/// <reference path="IServiceProtocolVersion.d.ts" />
/// <reference path="ServiceHeader.d.ts" />
/// <reference path="ServiceSession.d.ts" />
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
declare module Adaptive {
    /**
       Represents a local or remote service request.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceRequest extends APIBean {
        /**
           The HTTP procotol version to be used for this request.
        */
        protocolVersion: IServiceProtocolVersion;
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the Content field.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The request method
        */
        method: string;
        /**
           The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        */
        serviceHeaders: ServiceHeader[];
        /**
           Information about the session
        */
        serviceSession: ServiceSession;
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
        constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: number[], contentBinaryLength: number, serviceHeaders: ServiceHeader[], method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession);
        /**
           Returns the protocol version

           @return protocolVersion enum
           @since ARP1.0
        */
        getProtocolVersion(): IServiceProtocolVersion;
        /**
           Set the protocol version

           @param protocolVersion The HTTP procotol version to be used for this request.
           @since ARP1.0
        */
        setProtocolVersion(protocolVersion: IServiceProtocolVersion): void;
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content Request/Response data content (plain text)
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the byte[] of the content

           @return contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           Set the byte[] of the content

           @param contentBinary The byte[] representing the Content field.
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           Retrusn the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           Set the binary content length

           @param contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           Set the content encoding

           @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           Set the content length

           @param contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getMethod(): string;
        /**
           Set the method

           @param method The request method
           @since ARP1.0
        */
        setMethod(method: string): void;
        /**
           Returns the array of ServiceHeader

           @return serviceHeaders
           @since ARP1.0
        */
        getServiceHeaders(): ServiceHeader[];
        /**
           Set the array of ServiceHeader

           @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        setServiceHeaders(serviceHeaders: ServiceHeader[]): void;
        /**
           Getter for service session

           @return The element service session
           @since ARP1.0
        */
        getServiceSession(): ServiceSession;
        /**
           Setter for service session

           @param serviceSession The element service session
           @since ARP1.0
        */
        setServiceSession(serviceSession: ServiceSession): void;
    }
}
