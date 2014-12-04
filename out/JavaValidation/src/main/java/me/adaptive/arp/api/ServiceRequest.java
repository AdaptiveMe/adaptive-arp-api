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

     /**
        Returns the protocol version

        @return protocolVersion enum
        @since ARP1.0
     */
     public IServiceProtocolVersion getProtocolVersion() {
          return this.protocolVersion;
     }

     /**
        Set the protocol version

        @param protocolVersion
        @since ARP1.0
     */
     public void setProtocolVersion(IServiceProtocolVersion protocolVersion) {
          this.protocolVersion = protocolVersion;
     }

     /**
        Returns the content

        @return content
        @since ARP1.0
     */
     public String getContent() {
          return this.content;
     }

     /**
        Set the content

        @param content
        @since ARP1.0
     */
     public void setContent(String content) {
          this.content = content;
     }

     /**
        Returns the content encoding

        @return contentEncoding
        @since ARP1.0
     */
     public String getContentEncoding() {
          return this.contentEncoding;
     }

     /**
        Set the content encoding

        @param contentEncoding
        @since ARP1.0
     */
     public void setContentEncoding(String contentEncoding) {
          this.contentEncoding = contentEncoding;
     }

     /**
        Returns the content length

        @return contentLength
        @since ARP1.0
     */
     public int getContentLength() {
          return this.contentLength;
     }

     /**
        Set the content length

        @param contentLength
        @since ARP1.0
     */
     public void setContentLength(int contentLength) {
          this.contentLength = contentLength;
     }

     /**
        Returns the content type

        @return contentType
        @since ARP1.0
     */
     public String getContentType() {
          return this.contentType;
     }

     /**
        Set the content type

        @param contentType
        @since ARP1.0
     */
     public void setContentType(String contentType) {
          this.contentType = contentType;
     }

     /**
        Returns the array of Header

        @return headers
        @since ARP1.0
     */
     public Header[] getHeaders() {
          return this.headers;
     }

     /**
        Set the array of Header

        @param headers
        @since ARP1.0
     */
     public void setHeaders(Header[] headers) {
          this.headers = headers;
     }

     /**
        Returns the method

        @return method
        @since ARP1.0
     */
     public String getMethod() {
          return this.method;
     }

     /**
        Set the method

        @param method
        @since ARP1.0
     */
     public void setMethod(String method) {
          this.method = method;
     }

     /**
        Returns the byte[] of the content

        @return rawContent
        @since ARP1.0
     */
     public byte[] getRawContent() {
          return this.rawContent;
     }

     /**
        Set the byte[] of the content

        @param rawContent
        @since ARP1.0
     */
     public void setRawContent(byte[] rawContent) {
          this.rawContent = rawContent;
     }

     /**
        Returns the session object

        @return session
        @since ARP1.0
     */
     public ISession getSession() {
          return this.session;
     }

     /**
        Set the session object

        @param session
        @since ARP1.0
     */
     public void setSession(ISession session) {
          this.session = session;
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
