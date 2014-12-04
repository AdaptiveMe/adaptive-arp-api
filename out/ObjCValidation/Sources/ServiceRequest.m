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

#import <ServiceRequest.h>

/**

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@implementation ServiceRequest


     /**
        Constructor used by the implementation
     */
     - (id) init {
          self = [self init];
          return self;
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
     - (id) initWithContentContentTypeContentLengthRawContentHeadersMethodProtocolVersionSessionContentEncoding:(NSString*)content contentType:(NSString*)contentType contentLength:(int*)contentLength rawContent:(NSArray*)rawContent headers:(NSArray*)headers method:(NSString*)method protocolVersion:(IServiceProtocolVersion*)protocolVersion session:(ISession*)session contentEncoding:(NSString*)contentEncoding {
          self = [self init];
          if (self) {
               [self setContent:content];
               [self setContentType:contentType];
               [self setContentLength:contentLength];
               [self setRawContent:rawContent];
               [self setHeaders:headers];
               [self setMethod:method];
               [self setProtocolVersion:protocolVersion];
               [self setSession:session];
               [self setContentEncoding:contentEncoding];
          }
          return self;
     }


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
