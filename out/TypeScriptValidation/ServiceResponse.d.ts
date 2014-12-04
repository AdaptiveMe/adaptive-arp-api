/// <reference path="Header.d.ts" />
/// <reference path="ISession.d.ts" />
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
declare module Adaptive {
    /**
       Represents a local or remote service response.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ServiceResponse {
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the binary Content.
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
        contentLength: string;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The headers array (name,value pairs) to be included on the I/O service request.
        */
        headers: Header[];
        /**
           The session context for the Request/Response.
        */
        session: ISession;
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
        constructor(content: string, contentType: string, contentLength: string, contentBinary: number[], contentBinaryLength: number, headers: Header[], session: ISession, contentEncoding: string);
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the binary content

           @return contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           Set the binary content

           @param contentBinary
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

           @param contentBinaryLength
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

           @param contentEncoding
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): string;
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        setContentLength(contentLength: string): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        getHeaders(): Header[];
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        setHeaders(headers: Header[]): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getSession(): ISession;
        /**
           Set the method

           @param session
           @since ARP1.0
        */
        setSession(session: ISession): void;
    }
}
