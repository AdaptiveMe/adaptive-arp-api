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

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
