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

#import <Foundation/Foundation.h>
#import <Header.h>
#import <ISession.h>

/**
Represents a local or remote service request.

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@interface ServiceRequest : NSObject

     /**
        The HTTP procotol version to be used for this request.
     */
     typedef NS_OPTIONS(NSUInteger, IServiceProtocolVersion) {
          IServiceProtocolVersion_HTTP_PROTOCOL_VERSION_1_0 = 0,
          IServiceProtocolVersion_HTTP_PROTOCOL_VERSION_1_1 = 1,
          IServiceProtocolVersion_Unknown = 2
     };

     @property IServiceProtocolVersion *protocolVersion;
     /**
        Request/Response data content (plain text).
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
        The headers array (name,value pairs) to be included on the I/O service request.
        Array objects must be of Header type.
     */
     @property NSArray *headers;
     /**
        The request method
     */
     @property NSString *method;
     /**
        The byte[] representing the Content field.
        Array objects must be of byte type.
     */
     @property NSArray *rawContent;
     /**
        The session context for the Request/Response.
     */
     @property ISession *session;

     /**
        Constructor used by the implementation
     */
     - (id) init;

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
     - (id) initWithContentContentTypeContentLengthRawContentHeadersMethodProtocolVersionSessionContentEncoding:(NSString*)content contentType:(NSString*)contentType contentLength:(int*)contentLength rawContent:(NSArray*)rawContent headers:(NSArray*)headers method:(NSString*)method protocolVersion:(IServiceProtocolVersion*)protocolVersion session:(ISession*)session contentEncoding:(NSString*)contentEncoding;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
