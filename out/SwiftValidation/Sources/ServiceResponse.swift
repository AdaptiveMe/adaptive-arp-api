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

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
