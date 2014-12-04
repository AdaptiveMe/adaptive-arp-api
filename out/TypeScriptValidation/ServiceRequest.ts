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

module Adaptive {

     /**
        Represents a local or remote service request.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class ServiceRequest {

          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
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
          constructor(content: string, contentType: string, contentLength: number, rawContent: Array<number>, headers: Array<Header>, method: string, protocolVersion: IServiceProtocolVersion, session: ISession, contentEncoding: string) {
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
          getProtocolVersion() : IServiceProtocolVersion {
               return this.protocolVersion;
          }

          /**
             Set the protocol version

             @param protocolVersion
             @since ARP1.0
          */
          setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
               this.protocolVersion = protocolVersion;
          }

          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             Set the content

             @param content
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             Set the content length

             @param contentLength
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             Set the content type

             @param contentType
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             Returns the array of Header

             @return headers
             @since ARP1.0
          */
          getHeaders() : Array<Header> {
               return this.headers;
          }

          /**
             Set the array of Header

             @param headers
             @since ARP1.0
          */
          setHeaders(headers: Array<Header>) {
               this.headers = headers;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          getMethod() : string {
               return this.method;
          }

          /**
             Set the method

             @param method
             @since ARP1.0
          */
          setMethod(method: string) {
               this.method = method;
          }

          /**
             Returns the byte[] of the content

             @return rawContent
             @since ARP1.0
          */
          getRawContent() : Array<number> {
               return this.rawContent;
          }

          /**
             Set the byte[] of the content

             @param rawContent
             @since ARP1.0
          */
          setRawContent(rawContent: Array<number>) {
               this.rawContent = rawContent;
          }

          /**
             Returns the session object

             @return session
             @since ARP1.0
          */
          getSession() : ISession {
               return this.session;
          }

          /**
             Set the session object

             @param session
             @since ARP1.0
          */
          setSession(session: ISession) {
               this.session = session;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
