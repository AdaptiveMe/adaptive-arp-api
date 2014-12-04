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

#import <ServiceResponse.h>

/**

@author Carlos Lozano Diez
@since 1.0
@version 1.0
*/
@implementation ServiceResponse


     /**
        Constructor used by the implementation
     */
     - (id) init {
          self = [self init];
          return self;
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
     - (id) initWithContentContentTypeContentLengthContentBinaryContentBinaryLengthHeadersSessionContentEncoding:(NSString*)content contentType:(NSString*)contentType contentLength:(NSString*)contentLength contentBinary:(NSArray*)contentBinary contentBinaryLength:(int*)contentBinaryLength headers:(NSArray*)headers session:(ISession*)session contentEncoding:(NSString*)contentEncoding {
          self = [self init];
          if (self) {
               [self setContent:content];
               [self setContentType:contentType];
               [self setContentLength:contentLength];
               [self setContentBinary:contentBinary];
               [self setContentBinaryLength:contentBinaryLength];
               [self setHeaders:headers];
               [self setSession:session];
               [self setContentEncoding:contentEncoding];
          }
          return self;
     }


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
