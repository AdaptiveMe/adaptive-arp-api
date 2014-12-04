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
   Represents a local or remote service response.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class ServiceResponse : NSObject {

     /**
        Request/Response data content (plain text).
     */
     var content : String?
     /**
        The byte[] representing the binary Content.
     */
     var contentBinary : [Byte]?
     /**
        The length in bytes for the binary Content.
     */
     var contentBinaryLength : Int?
     /**
        Encoding of the binary payload - by default assumed to be UTF8.
     */
     var contentEncoding : String?
     /**
        The length in bytes for the Content field.
     */
     var contentLength : String?
     /**
        The request/response content type (MIME TYPE).
     */
     var contentType : String?
     /**
        The headers array (name,value pairs) to be included on the I/O service request.
     */
     var headers : [Header]?
     /**
        The session context for the Request/Response.
     */
     var session : ISession?

     /**
        Constructor used by the implementation
     */
     public override init() {
     }

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
     public convenience init(content: String, contentType: String, contentLength: String, contentBinary: [Byte], contentBinaryLength: Int, headers: [Header], session: ISession, contentEncoding: String) {
          self.init()
          self.content = content
          self.contentType = contentType
          self.contentLength = contentLength
          self.contentBinary = contentBinary
          self.contentBinaryLength = contentBinaryLength
          self.headers = headers
          self.session = session
          self.contentEncoding = contentEncoding
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
        Returns the binary content

        @return contentBinary
        @since ARP1.0
     */
     public func getContentBinary() -> [Byte]? {
          return self.contentBinary
     }

     /**
        Set the binary content

        @param contentBinary
        @since ARP1.0
     */
     public func setContentBinary(contentBinary: [Byte]) {
          self.contentBinary = contentBinary
     }

     /**
        Retrusn the binary content length

        @return contentBinaryLength
        @since ARP1.0
     */
     public func getContentBinaryLength() -> Int? {
          return self.contentBinaryLength
     }

     /**
        Set the binary content length

        @param contentBinaryLength
        @since ARP1.0
     */
     public func setContentBinaryLength(contentBinaryLength: Int) {
          self.contentBinaryLength = contentBinaryLength
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
     public func getContentLength() -> String? {
          return self.contentLength
     }

     /**
        Set the content length

        @param contentLength
        @since ARP1.0
     */
     public func setContentLength(contentLength: String) {
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
     public func getSession() -> ISession? {
          return self.session
     }

     /**
        Set the method

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
