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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <ServiceRequest.h>

/**

@author Aryslan
@since ARP1.0
@version 1.0
*/
@implementation ServiceRequest


     /**
        Default constructor

        @since ARP1.0
     */
     - (id) init {
          self = [self init];
          return self;
     }

     /**
        Contructor used by the implementation

        @param content             Request/Response data content (plain text)
        @param contentType         The request/response content type (MIME TYPE).
        @param contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
        @param contentLength       The length in bytes for the Content field.
        @param contentBinary       The byte[] representing the Content field.
        @param contentBinaryLength The length in bytes for the binary Content.
        @param serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        @param method              The request method
        @param protocolVersion     The HTTP procotol version to be used for this request.
        @param serviceSession      The element service session
        @since ARP1.0
     */
     - (id) initWithContentContentTypeContentEncodingContentLengthContentBinaryContentBinaryLengthServiceHeadersMethodProtocolVersionServiceSession:(NSString*)content contentType:(NSString*)contentType contentEncoding:(NSString*)contentEncoding contentLength:(int*)contentLength contentBinary:(NSArray*)contentBinary contentBinaryLength:(int*)contentBinaryLength serviceHeaders:(NSArray*)serviceHeaders method:(NSString*)method protocolVersion:(IServiceProtocolVersion*)protocolVersion serviceSession:(ServiceSession*)serviceSession {
          self = [super initWithContentContentTypeContentEncodingContentLengthContentBinaryContentBinaryLengthServiceHeadersMethodProtocolVersionServiceSession:content, contentType, contentEncoding, contentLength, contentBinary, contentBinaryLength, serviceHeaders, method, protocolVersion, serviceSession];
          if (self) {
               [self setContent:content];
               [self setContentType:contentType];
               [self setContentEncoding:contentEncoding];
               [self setContentLength:contentLength];
               [self setContentBinary:contentBinary];
               [self setContentBinaryLength:contentBinaryLength];
               [self setServiceHeaders:serviceHeaders];
               [self setMethod:method];
               [self setProtocolVersion:protocolVersion];
               [self setServiceSession:serviceSession];
          }
          return self;
     }



@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
