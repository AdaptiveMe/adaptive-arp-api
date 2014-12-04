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

using System;

namespace Adaptive.Arp.Api
{
     /**
        Represents a local or remote service response.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     public class ServiceResponse
     {

          /**
             Request/Response data content (plain text).
          */
          public string Content { get; set; }
          /**
             The byte[] representing the binary Content.
          */
          public byte[] ContentBinary { get; set; }
          /**
             The length in bytes for the binary Content.
          */
          public int ContentBinaryLength { get; set; }
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          public string ContentEncoding { get; set; }
          /**
             The length in bytes for the Content field.
          */
          public string ContentLength { get; set; }
          /**
             The request/response content type (MIME TYPE).
          */
          public string ContentType { get; set; }
          /**
             The headers array (name,value pairs) to be included on the I/O service request.
          */
          public Header[] Headers { get; set; }
          /**
             The session context for the Request/Response.
          */
          public ISession Session { get; set; }

          /**
             Constructor used by the implementation
          */
          public ServiceResponse()  {
          }

          /**
             Constructor used by the implementation

             @param Content
             @param ContentType
             @param ContentLength
             @param ContentBinary
             @param ContentBinaryLength
             @param Headers
             @param Session
             @param ContentEncoding
             @since ARP1.0
          */
          public ServiceResponse(string Content, string ContentType, string ContentLength, byte[] ContentBinary, int ContentBinaryLength, Header[] Headers, ISession Session, string ContentEncoding) : base () {
               this.Content = Content;
               this.ContentType = ContentType;
               this.ContentLength = ContentLength;
               this.ContentBinary = ContentBinary;
               this.ContentBinaryLength = ContentBinaryLength;
               this.Headers = Headers;
               this.Session = Session;
               this.ContentEncoding = ContentEncoding;
          }

          /**
             Returns the content

             @return content
             @since ARP1.0
          */
          public string GetContent() {
               return this.Content;
          }

          /**
             Set the content

             @param content
             @since ARP1.0
          */
          public void SetContent(string Content) {
               this.Content = Content;
          }

          /**
             Returns the binary content

             @return contentBinary
             @since ARP1.0
          */
          public byte[] GetContentBinary() {
               return this.ContentBinary;
          }

          /**
             Set the binary content

             @param contentBinary
             @since ARP1.0
          */
          public void SetContentBinary(byte[] ContentBinary) {
               this.ContentBinary = ContentBinary;
          }

          /**
             Retrusn the binary content length

             @return contentBinaryLength
             @since ARP1.0
          */
          public int GetContentBinaryLength() {
               return this.ContentBinaryLength;
          }

          /**
             Set the binary content length

             @param contentBinaryLength
             @since ARP1.0
          */
          public void SetContentBinaryLength(int ContentBinaryLength) {
               this.ContentBinaryLength = ContentBinaryLength;
          }

          /**
             Returns the content encoding

             @return contentEncoding
             @since ARP1.0
          */
          public string GetContentEncoding() {
               return this.ContentEncoding;
          }

          /**
             Set the content encoding

             @param contentEncoding
             @since ARP1.0
          */
          public void SetContentEncoding(string ContentEncoding) {
               this.ContentEncoding = ContentEncoding;
          }

          /**
             Returns the content length

             @return contentLength
             @since ARP1.0
          */
          public string GetContentLength() {
               return this.ContentLength;
          }

          /**
             Set the content length

             @param contentLength
             @since ARP1.0
          */
          public void SetContentLength(string ContentLength) {
               this.ContentLength = ContentLength;
          }

          /**
             Returns the content type

             @return contentType
             @since ARP1.0
          */
          public string GetContentType() {
               return this.ContentType;
          }

          /**
             Set the content type

             @param contentType
             @since ARP1.0
          */
          public void SetContentType(string ContentType) {
               this.ContentType = ContentType;
          }

          /**
             Returns the array of Header

             @return headers
             @since ARP1.0
          */
          public Header[] GetHeaders() {
               return this.Headers;
          }

          /**
             Set the array of Header

             @param headers
             @since ARP1.0
          */
          public void SetHeaders(Header[] Headers) {
               this.Headers = Headers;
          }

          /**
             Returns the method

             @return method
             @since ARP1.0
          */
          public ISession GetSession() {
               return this.Session;
          }

          /**
             Set the method

             @param session
             @since ARP1.0
          */
          public void SetSession(ISession Session) {
               this.Session = Session;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
