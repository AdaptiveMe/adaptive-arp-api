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

    * @version v2.0.8

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>
#import <ServiceHeader.h>
#import <ServiceRequestParameter.h>
#import <ServiceSession.h>
#import <ServiceToken.h>

/**
Represents a local or remote service request.

@author Aryslan
@since v2.0
@version 1.0
*/
@interface ServiceRequest : APIBean

     /**
        Body parameters to be included in the body of the request to a service. These may be applied
during GET/POST operations. No body parameters are included if this array is null or length zero.
        Array objects must be of ServiceRequestParameter type.
     */
     @property NSArray *bodyParameters;
     /**
        Request data content (plain text). This should be populated by the application. The content should be
in some well-known web format - in specific, binaries submitted should be encoded to base64 and the content
type should be set respectively by the application.
     */
     @property NSString *content;
     /**
        Encoding of the content - by default assumed to be UTF8. This may be populated by the application, the platform
populates this field with defaults for the service.
     */
     @property NSString *contentEncoding;
     /**
        The length in bytes of the content. This may be populated by the application, the platform
calculates this length automatically if a specific contentLength is not specified.
     */
     @property int *contentLength;
     /**
        The request content type (MIME TYPE). This may be populated by the application, the platform
populates this field with defaults for the service.
     */
     @property NSString *contentType;
     /**
        Query string parameters to be appended to the service URL when making the request. These may be applied
during GET/POST operations. No query parameters are appended if this array is null or length zero.
        Array objects must be of ServiceRequestParameter type.
     */
     @property NSArray *queryParameters;
     /**
        The serviceHeaders array (name,value pairs) to be included in the request. This may be populated by the
application, the platform populates this field with defaults for the service and the previous headers.
In specific, the platform maintains request and response state automatically.
        Array objects must be of ServiceHeader type.
     */
     @property NSArray *serviceHeaders;
     /**
        Session attributes and cookies. This may be populated by the application, the platform populates
this field with defaults for the service and the previous state information. In specific, the platform
maintains request and response state automatically.
     */
     @property ServiceSession *serviceSession;
     /**
        Token used for the creation of the request with the destination service, endpoint, function and method
identifiers. This should not be manipulated by the application directly.
     */
     @property ServiceToken *serviceToken;
     /**
        This attribute allows for the default user-agent string to be overridden by the application.
     */
     @property NSString *userAgent;

     /**
        Default constructor.

        @since v2.0
     */
     - (id) init;

     /**
        Convenience constructor.

        @param content      Content payload.
        @param serviceToken ServiceToken for the request.
        @since v2.0.6
     */
     - (id) initWithContentServiceToken:(NSString*)content serviceToken:(ServiceToken*)serviceToken;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
