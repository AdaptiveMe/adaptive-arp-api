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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Represents a local or remote service response.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceResponse : APIBean {

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
     var contentLength : Int?
     /**
        The request/response content type (MIME TYPE).
     */
     var contentType : String?
     /**
        The serviceHeaders array (name,value pairs) to be included on the I/O service request.
     */
     var serviceHeaders : [ServiceHeader]?
     /**
        Information about the session
     */
     var serviceSession : ServiceSession?

     /**
        Default constructor
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with fields

        @param content             Request/Response data content (plain text).
        @param contentType         The request/response content type (MIME TYPE).
        @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
        @param contentLength       The length in bytes for the Content field.
        @param contentBinary       The byte[] representing the binary Content.
        @param contentBinaryLength The length in bytes for the binary Content.
        @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        @param serviceSession      Information about the session
        @since ARP1.0
     */
     public init(content: String, contentType: String, contentEncoding: String, contentLength: Int, contentBinary: [Byte], contentBinaryLength: Int, serviceHeaders: [ServiceHeader], serviceSession: ServiceSession) {
          super.init()
          self.content = content
          self.contentType = contentType
          self.contentEncoding = contentEncoding
          self.contentLength = contentLength
          self.contentBinary = contentBinary
          self.contentBinaryLength = contentBinaryLength
          self.serviceHeaders = serviceHeaders
          self.serviceSession = serviceSession
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

        @param content Request/Response data content (plain text).
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

        @param contentBinary The byte[] representing the binary Content.
        @since ARP1.0
     */
     public func setContentBinary(contentBinary: [Byte]) {
          self.contentBinary = contentBinary
     }

     /**
        Returns the binary content length

        @return contentBinaryLength
        @since ARP1.0
     */
     public func getContentBinaryLength() -> Int? {
          return self.contentBinaryLength
     }

     /**
        Set the binary content length

        @param contentBinaryLength The length in bytes for the binary Content.
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

        @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
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

        @param contentLength The length in bytes for the Content field.
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

        @param contentType The request/response content type (MIME TYPE).
        @since ARP1.0
     */
     public func setContentType(contentType: String) {
          self.contentType = contentType
     }

     /**
        Returns the array of ServiceHeader

        @return serviceHeaders
        @since ARP1.0
     */
     public func getServiceHeaders() -> [ServiceHeader]? {
          return self.serviceHeaders
     }

     /**
        Set the array of ServiceHeader

        @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        @since ARP1.0
     */
     public func setServiceHeaders(serviceHeaders: [ServiceHeader]) {
          self.serviceHeaders = serviceHeaders
     }

     /**
        Getter for service session

        @return The element service session
        @since ARP1.0
     */
     public func getServiceSession() -> ServiceSession? {
          return self.serviceSession
     }

     /**
        Setter for service session

        @param serviceSession The element service session
        @since ARP1.0
     */
     public func setServiceSession(serviceSession: ServiceSession) {
          self.serviceSession = serviceSession
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
