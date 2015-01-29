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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>
#import <ServiceHeader.h>
#import <ServiceSession.h>

/**
Represents a local or remote service response.

@author Aryslan
@since v2.0
@version 1.0
*/
@interface ServiceResponse : APIBean

     /**
        Response data content. The content should be in some well-known web format - in specific, binaries returned
should be encoded in base64.
     */
     @property NSString *content;
     /**
        Encoding of the binary payload - by default assumed to be UTF8.
     */
     @property NSString *contentEncoding;
     /**
        The length in bytes for the Content field.
     */
     @property int *contentLength;
     /**
        The request/response content type (MIME TYPE).
     */
     @property NSString *contentType;
     /**
        The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        Array objects must be of ServiceHeader type.
     */
     @property NSArray *serviceHeaders;
     /**
        Information about the session.
     */
     @property ServiceSession *serviceSession;

     /**
        Default constructor.

        @since v2.0
     */
     - (id) init;

     /**
        Constructor with fields

        @param content         Request/Response data content (plain text).
        @param contentType     The request/response content type (MIME TYPE).
        @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
        @param contentLength   The length in bytes for the Content field.
        @param serviceHeaders  The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        @param serviceSession  Information about the session
        @since v2.0
     */
     - (id) initWithContentContentTypeContentEncodingContentLengthServiceHeadersServiceSession:(NSString*)content contentType:(NSString*)contentType contentEncoding:(NSString*)contentEncoding contentLength:(int*)contentLength serviceHeaders:(NSArray*)serviceHeaders serviceSession:(ServiceSession*)serviceSession;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
