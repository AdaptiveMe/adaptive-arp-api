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
 * Represents a local or remote service response.
 *
 * @author Aryslan
 * @since v2.0
 */
public class ServiceResponse extends APIBean {

    /**
     * Response data content. The content should be in some well-known web format - in specific, binaries returned
     * should be encoded in base64.
     *
     * @since v2.0.6
     */
    private String content;

    /**
     * The request/response content type (MIME TYPE).
     *
     * @since v2.0
     */
    private String contentType;

    /**
     * Encoding of the binary payload - by default assumed to be UTF8.
     *
     * @since v2.0
     */
    private String contentEncoding;

    /**
     * The length in bytes for the Content field.
     *
     * @since v2.0
     */
    private int contentLength;

    /**
     * The serviceHeaders array (name,value pairs) to be included on the I/O service request.
     *
     * @since v2.0
     */
    private ServiceHeader[] serviceHeaders;

    /**
     * Information about the session.
     *
     * @since v2.0
     */
    private ServiceSession serviceSession;

    /**
     * HTTP Status code of the response. With this status code it is possible to perform some actions, redirects, authentication, etc.
     *
     * @since v2.1.4
     */
    private int statusCode;

    /**
     * Default constructor.
     *
     * @since v2.0
     */
    public ServiceResponse() {
        super();
    }

    /**
     * Constructor with fields
     *
     * @param content         Request/Response data content (plain text).
     * @param contentType     The request/response content type (MIME TYPE).
     * @param contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
     * @param contentLength   The length in bytes for the Content field.
     * @param serviceHeaders  The serviceHeaders array (name,value pairs) to be included on the I/O service request.
     * @param serviceSession  Information about the session
     * @param statusCode      HTTP Status code of the response.
     * @since v2.0
     */
    public ServiceResponse(String content, String contentType, String contentEncoding, int contentLength, ServiceHeader[] serviceHeaders, ServiceSession serviceSession, int statusCode) {
        this.content = content;
        this.contentType = contentType;
        this.contentEncoding = contentEncoding;
        this.contentLength = contentLength;
        this.serviceHeaders = serviceHeaders;
        this.serviceSession = serviceSession;
        this.statusCode = statusCode;
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
     * @param content Request/Response data content (plain text).
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
     * Returns the content length
     *
     * @return contentLength
     * @since v2.0
     */
    public int getContentLength() {
        return contentLength;
    }

    /**
     * Set the content length.
     *
     * @param contentLength The length in bytes for the Content field.
     * @since v2.0
     */
    public void setContentLength(int contentLength) {
        this.contentLength = contentLength;
    }

    /**
     * Returns the status code of the response.
     *
     * @return HTTP status code
     * @since v2.1.4
     */
    public int getStatusCode() {
        return statusCode;
    }

    /**
     * Sets the status code of the response
     *
     * @param statusCode HTTP status code
     * @since v2.1.4
     */
    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}
