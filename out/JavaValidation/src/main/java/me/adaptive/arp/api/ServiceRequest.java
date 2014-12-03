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

package me.adaptive.arp.api;

/**
   Represents a local or remote service request.

   @author Carlos Lozano Diez
   @since 1.0
   @version 1.0
*/
public class ServiceRequest {

     /**
        The HTTP procotol version to be used for this request.
     */
     private IServiceProtocolVersion protocolVersion;
     /**
        Request/Response data content (plain text).
     */
     private String content;
     /**
        Encoding of the binary payload - by default assumed to be UTF8.
     */
     private String contentEncoding;
     /**
        The length in bytes for the Content field.
     */
     private int contentLength;
     /**
        The request/response content type (MIME TYPE).
     */
     private String contentType;
     /**
        The headers array (name,value pairs) to be included on the I/O service request.
     */
     private Header[] headers;
     /**
        The request method
     */
     private String method;
     /**
        The byte[] representing the Content field.
     */
     private byte[] rawContent;
     /**
        The session context for the Request/Response.
     */
     private ISession session;

     /**
        Constructor used by the implementation
     */
     public ServiceRequest() {
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
     public ServiceRequest(String content, String contentType, int contentLength, byte[] rawContent, Header[] headers, String method, IServiceProtocolVersion protocolVersion, ISession session, String contentEncoding) {
          this();
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

}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
