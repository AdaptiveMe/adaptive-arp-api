/*
 *
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
 *
 */

package me.adaptive.arp.api;

/**
 * Created by FRMI on 12/08/2014.
 */
public class ServiceResponse {

    /**
     * Request/Response data content (plain text).
     *
     * @since ARP1.0
     */
    private String content;
    /**
     * The request/response content type (MIME TYPE).
     *
     * @since ARP1.0
     */
    private String contentType;
    /**
     * The length in bytes for the Content field.
     *
     * @since ARP1.0
     */
    private String contentLength;
    /**
     * The byte[] representing the binary Content.
     *
     * @since ARP1.0
     */
    private byte[] contentBinary;
    /**
     * The length in bytes for the binary Content.
     *
     * @since ARP1.0
     */
    private int contentBinaryLength;
    /**
     * The headers array (name,value pairs) to be included on the I/O service request.
     *
     * @since ARP1.0
     */
    private Header[] headers;
    /**
     * The session context for the Request/Response.
     *
     * @since ARP1.0
     */
    private ISession session;

    /**
     * Encoding of the binary payload - by default assumed to be UTF8.
     */
    private String contentEncoding;

    /**
     * Constructor used by the implementation
     *
     * @param content
     * @param contentType
     * @param contentLength
     * @param contentBinary
     * @param contentBinaryLength
     * @param headers
     * @param session
     * @since ARP1.0
     */
    public ServiceResponse(String content, String contentType, String contentLength, byte[] contentBinary, int contentBinaryLength, Header[] headers, ISession session) {
        this.content = content;
        this.contentType = contentType;
        this.contentLength = contentLength;
        this.contentBinary = contentBinary;
        this.contentBinaryLength = contentBinaryLength;
        this.headers = headers;
        this.session = session;
    }

    /**
     * Returns the content
     *
     * @return content
     * @since ARP1.0
     */
    public String getContent() {
        return content;
    }

    /**
     * Set the content
     *
     * @param content
     * @since ARP1.0
     */
    public void setContent(String content) {
        this.content = content;
    }

    /**
     * Returns the content type
     *
     * @return contentType
     * @since ARP1.0
     */
    public String getContentType() {
        return contentType;
    }

    /**
     * Set the content type
     *
     * @param contentType
     * @since ARP1.0
     */
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    /**
     * Returns the content length
     *
     * @return contentLength
     * @since ARP1.0
     */
    public String getContentLength() {
        return contentLength;
    }

    /**
     * Set the content length
     *
     * @param contentLength
     * @since ARP1.0
     */
    public void setContentLength(String contentLength) {
        this.contentLength = contentLength;
    }

    /**
     * Returns the binary content
     *
     * @return contentBinary
     * @since ARP1.0
     */
    public byte[] getContentBinary() {
        return contentBinary;
    }

    /**
     * Set the binary content
     *
     * @param contentBinary
     * @since ARP1.0
     */
    public void setContentBinary(byte[] contentBinary) {
        this.contentBinary = contentBinary;
    }

    /**
     * Retrusn the binary content length
     *
     * @return contentBinaryLength
     * @since ARP1.0
     */
    public int getContentBinaryLength() {
        return contentBinaryLength;
    }

    /**
     * Set the binary content length
     *
     * @param contentBinaryLength
     * @since ARP1.0
     */
    public void setContentBinaryLength(int contentBinaryLength) {
        this.contentBinaryLength = contentBinaryLength;
    }

    /**
     * Returns the array of Header
     *
     * @return headers
     * @since ARP1.0
     */
    public Header[] getHeaders() {
        return headers;
    }

    /**
     * Set the array of Header
     *
     * @param headers
     * @since ARP1.0
     */
    public void setHeaders(Header[] headers) {
        this.headers = headers;
    }

    /**
     * Returns the method
     *
     * @return method
     * @since ARP1.0
     */
    public ISession getSession() {
        return session;
    }

    /**
     * Set the method
     *
     * @param session
     * @since ARP1.0
     */
    public void setSession(ISession session) {
        this.session = session;
    }


    public String getContentEncoding() {
        return contentEncoding;
    }

    public void setContentEncoding(String contentEncoding) {
        this.contentEncoding = contentEncoding;
    }
}
