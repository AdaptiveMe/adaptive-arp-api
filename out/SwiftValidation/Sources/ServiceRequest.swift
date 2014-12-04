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

/**
   Represents a local or remote service request.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class ServiceRequest : NSObject {

     /**
        The HTTP procotol version to be used for this request.
     */
     var protocolVersion : IServiceProtocolVersion?
     /**
        Request/Response data content (plain text).
     */
     var content : String?
     /**
        Encoding of the binary payload - by default assumed to be UTF8.
     */
     var contentEncoding : String?
     /**
        The length in bytes for the Content field.
     */
     var contentLength : Int?
     /**
        The request/response content type (MIME TYPE).
     */
     var contentType : String?
     /**
        The headers array (name,value pairs) to be included on the I/O service request.
     */
     var headers : [Header]?
     /**
        The request method
     */
     var method : String?
     /**
        The byte[] representing the Content field.
     */
     var rawContent : [Byte]?
     /**
        The session context for the Request/Response.
     */
     var session : ISession?

     /**
        Constructor used by the implementation
     */
     public override init() {
          super.init()
     }

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
     public init(content: String, contentType: String, contentLength: Int, rawContent: [Byte], headers: [Header], method: String, protocolVersion: IServiceProtocolVersion, session: ISession, contentEncoding: String) {
          super.init()
          self.content = content
          self.contentType = contentType
          self.contentLength = contentLength
          self.rawContent = rawContent
          self.headers = headers
          self.method = method
          self.protocolVersion = protocolVersion
          self.session = session
          self.contentEncoding = contentEncoding
     }

     /**
        Returns the protocol version

        @return protocolVersion enum
        @since ARP1.0
     */
     public func getProtocolVersion() -> IServiceProtocolVersion? {
          return self.protocolVersion
     }

     /**
        Set the protocol version

        @param protocolVersion
        @since ARP1.0
     */
     public func setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
          self.protocolVersion = protocolVersion
     }

     /**
        Returns the content

        @return content
        @since ARP1.0
     */
     public func getContent() -> String? {
          return self.content
     }

     /**
        Set the content

        @param content
        @since ARP1.0
     */
     public func setContent(content: String) {
          self.content = content
     }

     /**
        Returns the content encoding

        @return contentEncoding
        @since ARP1.0
     */
     public func getContentEncoding() -> String? {
          return self.contentEncoding
     }

     /**
        Set the content encoding

        @param contentEncoding
        @since ARP1.0
     */
     public func setContentEncoding(contentEncoding: String) {
          self.contentEncoding = contentEncoding
     }

     /**
        Returns the content length

        @return contentLength
        @since ARP1.0
     */
     public func getContentLength() -> Int? {
          return self.contentLength
     }

     /**
        Set the content length

        @param contentLength
        @since ARP1.0
     */
     public func setContentLength(contentLength: Int) {
          self.contentLength = contentLength
     }

     /**
        Returns the content type

        @return contentType
        @since ARP1.0
     */
     public func getContentType() -> String? {
          return self.contentType
     }

     /**
        Set the content type

        @param contentType
        @since ARP1.0
     */
     public func setContentType(contentType: String) {
          self.contentType = contentType
     }

     /**
        Returns the array of Header

        @return headers
        @since ARP1.0
     */
     public func getHeaders() -> [Header]? {
          return self.headers
     }

     /**
        Set the array of Header

        @param headers
        @since ARP1.0
     */
     public func setHeaders(headers: [Header]) {
          self.headers = headers
     }

     /**
        Returns the method

        @return method
        @since ARP1.0
     */
     public func getMethod() -> String? {
          return self.method
     }

     /**
        Set the method

        @param method
        @since ARP1.0
     */
     public func setMethod(method: String) {
          self.method = method
     }

     /**
        Returns the byte[] of the content

        @return rawContent
        @since ARP1.0
     */
     public func getRawContent() -> [Byte]? {
          return self.rawContent
     }

     /**
        Set the byte[] of the content

        @param rawContent
        @since ARP1.0
     */
     public func setRawContent(rawContent: [Byte]) {
          self.rawContent = rawContent
     }

     /**
        Returns the session object

        @return session
        @since ARP1.0
     */
     public func getSession() -> ISession? {
          return self.session
     }

     /**
        Set the session object

        @param session
        @since ARP1.0
     */
     public func setSession(session: ISession) {
          self.session = session
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
