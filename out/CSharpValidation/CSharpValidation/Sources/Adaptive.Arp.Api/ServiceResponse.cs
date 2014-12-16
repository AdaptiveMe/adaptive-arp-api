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

    * @version v1.0.45
-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        Represents a local or remote service response.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     public class ServiceResponse : APIBean
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
          public int ContentLength { get; set; }
          /**
             The request/response content type (MIME TYPE).
          */
          public string ContentType { get; set; }
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          public ServiceHeader[] ServiceHeaders { get; set; }
          /**
             Information about the session
          */
          public ServiceSession ServiceSession { get; set; }

          /**
             Default constructor
          */
          public ServiceResponse()  {
          }

          /**
             Constructor with fields

             @param Content             Request/Response data content (plain text).
             @param ContentType         The request/response content type (MIME TYPE).
             @param ContentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param ContentLength       The length in bytes for the Content field.
             @param ContentBinary       The byte[] representing the binary Content.
             @param ContentBinaryLength The length in bytes for the binary Content.
             @param ServiceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param ServiceSession      Information about the session
             @since ARP1.0
          */
          public ServiceResponse(string Content, string ContentType, string ContentEncoding, int ContentLength, byte[] ContentBinary, int ContentBinaryLength, ServiceHeader[] ServiceHeaders, ServiceSession ServiceSession) : base () {
               this.Content = Content;
               this.ContentType = ContentType;
               this.ContentEncoding = ContentEncoding;
               this.ContentLength = ContentLength;
               this.ContentBinary = ContentBinary;
               this.ContentBinaryLength = ContentBinaryLength;
               this.ServiceHeaders = ServiceHeaders;
               this.ServiceSession = ServiceSession;
          }

          /**
             Returns the content

             @return Content
             @since ARP1.0
          */
          public string GetContent() {
               return this.Content;
          }

          /**
             Set the content

             @param Content Request/Response data content (plain text).
             @since ARP1.0
          */
          public void SetContent(string Content) {
               this.Content = Content;
          }

          /**
             Returns the binary content

             @return ContentBinary
             @since ARP1.0
          */
          public byte[] GetContentBinary() {
               return this.ContentBinary;
          }

          /**
             Set the binary content

             @param ContentBinary The byte[] representing the binary Content.
             @since ARP1.0
          */
          public void SetContentBinary(byte[] ContentBinary) {
               this.ContentBinary = ContentBinary;
          }

          /**
             Returns the binary content length

             @return ContentBinaryLength
             @since ARP1.0
          */
          public int GetContentBinaryLength() {
               return this.ContentBinaryLength;
          }

          /**
             Set the binary content length

             @param ContentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          public void SetContentBinaryLength(int ContentBinaryLength) {
               this.ContentBinaryLength = ContentBinaryLength;
          }

          /**
             Returns the content encoding

             @return ContentEncoding
             @since ARP1.0
          */
          public string GetContentEncoding() {
               return this.ContentEncoding;
          }

          /**
             Set the content encoding

             @param ContentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          public void SetContentEncoding(string ContentEncoding) {
               this.ContentEncoding = ContentEncoding;
          }

          /**
             Returns the content length

             @return ContentLength
             @since ARP1.0
          */
          public int GetContentLength() {
               return this.ContentLength;
          }

          /**
             Set the content length

             @param ContentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          public void SetContentLength(int ContentLength) {
               this.ContentLength = ContentLength;
          }

          /**
             Returns the content type

             @return ContentType
             @since ARP1.0
          */
          public string GetContentType() {
               return this.ContentType;
          }

          /**
             Set the content type

             @param ContentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          public void SetContentType(string ContentType) {
               this.ContentType = ContentType;
          }

          /**
             Returns the array of ServiceHeader

             @return ServiceHeaders
             @since ARP1.0
          */
          public ServiceHeader[] GetServiceHeaders() {
               return this.ServiceHeaders;
          }

          /**
             Set the array of ServiceHeader

             @param ServiceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          public void SetServiceHeaders(ServiceHeader[] ServiceHeaders) {
               this.ServiceHeaders = ServiceHeaders;
          }

          /**
             Getter for service session

             @return The element service session
             @since ARP1.0
          */
          public ServiceSession GetServiceSession() {
               return this.ServiceSession;
          }

          /**
             Setter for service session

             @param ServiceSession The element service session
             @since ARP1.0
          */
          public void SetServiceSession(ServiceSession ServiceSession) {
               this.ServiceSession = ServiceSession;
          }


     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
