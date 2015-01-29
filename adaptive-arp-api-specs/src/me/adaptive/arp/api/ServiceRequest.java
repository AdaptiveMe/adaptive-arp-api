/*
 * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *
 * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * Original author:
 *
 *     * Carlos Lozano Diez
 *                 <http://github.com/carloslozano>
 *                 <http://twitter.com/adaptivecoder>
 *                 <mailto:carlos@adaptive.me>
 *
 * Contributors:
 *
 *     * Ferran Vila Conesa
 *                 <http://github.com/fnva>
 *                 <http://twitter.com/ferran_vila>
 *                 <mailto:ferran.vila.conesa@gmail.com>
 *
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 *     * Francisco Javier Martin Bueno
 *                 <https://github.com/kechis>
 *                 <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Represents a local or remote service request.
 *
 * @author Aryslan
 * @since v2.0
 */
public class ServiceRequest extends APIBean {

    /**
     * This attribute allows for the default user-agent string to be overridden by the application.
     *
     * @since v2.0.6
     */
    private String userAgent;

    /**
     * Request data content (plain text). This should be populated by the application. The content should be
     * in some well-known web format - in specific, binaries submitted should be encoded to base64 and the content
     * type should be set respectively by the application.
     *
     * @since v2.0
     */
    private String content;

    /**
     * The request content type (MIME TYPE). This may be populated by the application, the platform
     * populates this field with defaults for the service.
     *
     * @since v2.0
     */
    private String contentType;

    /**
     * Encoding of the content - by default assumed to be UTF8. This may be populated by the application, the platform
     * populates this field with defaults for the service.
     *
     * @since v2.0
     */
    private String contentEncoding;

    /**
     * The length in bytes of the content. This may be populated by the application, the platform
     * calculates this length automatically if a specific contentLength is not specified.
     *
     * @since v2.0
     */
    private int contentLength;


    /**
     * The serviceHeaders array (name,value pairs) to be included in the request. This may be populated by the
     * application, the platform populates this field with defaults for the service and the previous headers.
     * In specific, the platform maintains request and response state automatically.
     *
     * @since v2.0
     */
    private ServiceHeader[] serviceHeaders;

    /**
     * Session attributes and cookies. This may be populated by the application, the platform populates
     * this field with defaults for the service and the previous state information. In specific, the platform
     * maintains request and response state automatically.
     *
     * @since v2.0
     */
    private ServiceSession serviceSession;

    /**
     * Query string parameters to be appended to the service URL when making the request. These may be applied
     * during GET/POST operations. No query parameters are appended if this array is null or length zero.
     *
     * @since v2.0.6
     */
    private ServiceRequestParameter[] queryParameters;

    /**
     * Body parameters to be included in the body of the request to a service. These may be applied
     * during GET/POST operations. No body parameters are included if this array is null or length zero.
     *
     * @since v2.0.6
     */
    private ServiceRequestParameter[] bodyParameters;


    /**
     * Token used for the creation of the request with the destination service, endpoint, function and method
     * identifiers. This should not be manipulated by the application directly.
     *
     * @since v2.0.6
     */
    private ServiceToken serviceToken;

    /**
     * Default constructor.
     *
     * @since v2.0
     */
    public ServiceRequest() {
        super();
    }

    /**
     * Convenience constructor.
     *
     * @param content      Content payload.
     * @param serviceToken ServiceToken for the request.
     * @since v2.0.6
     */
    public ServiceRequest(String content, ServiceToken serviceToken) {
        this.content = content;
        this.serviceToken = serviceToken;
    }


    /**
     * Returns the content
     *
     * @return content
     * @since v2.0
     */
    public String getContent() {
        return content;
    }

    /**
     * Set the content
     *
     * @param content Request/Response data content (plain text)
     * @since v2.0
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * Returns the content type
     *
     * @return contentType
     * @since v2.0
     */
    public String getContentType() {
        return contentType;
    }

    /**
     * Set the content type
     *
     * @param contentType The request/response content type (MIME TYPE).
     * @since v2.0
     */
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    /**
     * Returns the content length
     *
     * @return contentLength
     * @since v2.0
     */
    public int getContentLength() {
        return contentLength;
    }

    /**
     * Set the content length
     *
     * @param contentLength The length in bytes for the Content field.
     * @since v2.0
     */
    public void setContentLength(int contentLength) {
        this.contentLength = contentLength;
    }

    /**
     * Returns the array of ServiceHeader
     *
     * @return serviceHeaders
     * @since v2.0
     */
    public ServiceHeader[] getServiceHeaders() {
        return serviceHeaders;
    }

    /**
     * Set the array of ServiceHeader
     *
     * @param serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
     * @since v2.0
     */
    public void setServiceHeaders(ServiceHeader[] serviceHeaders) {
        this.serviceHeaders = serviceHeaders;
    }


    /**
     * Returns the content encoding
     *
     * @return contentEncoding
     * @since v2.0
     */
    public String getContentEncoding() {
        return contentEncoding;
    }

    /**
     * Set the content encoding
     *
     * @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
     * @since v2.0
     */
    public void setContentEncoding(String contentEncoding) {
        this.contentEncoding = contentEncoding;
    }


    /**
     * Getter for service session
     *
     * @return The element service session
     * @since v2.0
     */
    public ServiceSession getServiceSession() {
        return serviceSession;
    }

    /**
     * Setter for service session
     *
     * @param serviceSession The element service session
     * @since v2.0
     */
    public void setServiceSession(ServiceSession serviceSession) {
        this.serviceSession = serviceSession;
    }

    /**
     * Gets the ServiceToken of the request.
     *
     * @return ServiceToken.
     * @since v2.0.6
     */
    public ServiceToken getServiceToken() {
        return serviceToken;
    }

    /**
     * Sets the ServiceToken of the request.
     *
     * @param serviceToken ServiceToken to be used for the invocation.
     * @since v2.0.6
     */
    public void setServiceToken(ServiceToken serviceToken) {
        this.serviceToken = serviceToken;
    }

    /**
     * Gets the query parameters of the request.
     *
     * @return ServiceRequestParameter array or null if none are specified.
     * @since v2.0.6
     */
    public ServiceRequestParameter[] getQueryParameters() {
        return queryParameters;
    }

    /**
     * Sets the query parameters of the request.
     *
     * @param queryParameters ServiceRequestParameter array or null if none are specified.
     * @since v2.0.6
     */
    public void setQueryParameters(ServiceRequestParameter[] queryParameters) {
        this.queryParameters = queryParameters;
    }

    /**
     * Gets the body parameters of the request.
     *
     * @return ServiceRequestParameter array or null if none are specified.
     * @since v2.0.6
     */
    public ServiceRequestParameter[] getBodyParameters() {
        return bodyParameters;
    }

    /**
     * Sets the body parameters of the request.
     *
     * @param bodyParameters ServiceRequestParameter array or null if none are specified.
     * @since v2.0.6
     */
    public void setBodyParameters(ServiceRequestParameter[] bodyParameters) {
        this.bodyParameters = bodyParameters;
    }

    /**
     * Gets the overridden user-agent string.
     *
     * @return User-agent string.
     * @since v2.0.6
     */
    public String getUserAgent() {
        return userAgent;
    }

    /**
     * Sets the user-agent to override the default user-agent string.
     *
     * @param userAgent User-agent string.
     * @since v2.0.6
     */
    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }
}
