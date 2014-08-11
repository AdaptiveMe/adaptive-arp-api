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
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Created by FRMI on 11/08/2014.
 */
public class AttachmentData {

    /**
     * The raw data for the current file attachment (byte array)
     * @since ARP1.0
     */
    private byte[] data;
    /**
     * The data size (in bytes) of the current file attachment
     * @since ARP1.0
     */
    private long dataSize;
    /**
     * The name of the current file attachment
     * @since ARP1.0
     */
    private String fileName;

    /**
     * The mime type of the current attachment
     * @since ARP1.0
     */
    private String mimeType;

    /**
     * The relative path where the contents for the attachment file could be located.
     * @since ARP1.0
     */
    private String referenceUrl;

    /**
     * Constructor used by the implementation
     * @param data raw data of the file attachment
     * @param dataSize size of the file attachment
     * @param fileName name of the file attachment
     * @param mimeType mime type of the file attachment
     * @param referenceUrl relative url of the file attachment
     * @since ARP1.0
     */
    public AttachmentData(byte[] data, long dataSize, String fileName, String mimeType, String referenceUrl) {
        this.data = data;
        this.dataSize = dataSize;
        this.fileName = fileName;
        this.mimeType = mimeType;
        this.referenceUrl = referenceUrl;
    }

    /**
     * Returns the raw data in byte[]
     * @return  byte[] data of the attachment file
     * @since ARP1.0
     */
    public byte[] getData() {
        return data;
    }

    /**
     * Set the data of the attachment
     * @param data byte[] with the raw data of the attachment
     * @since ARP1.0
     */
    public void setData(byte[] data) {
        this.data = data;
    }

    /**
     * Returns the size of the attachment
     * @return the size of the attachment as a long
     * @since ARP1.0
     */
    public long getDataSize() {
        return dataSize;
    }

    /**
     * Set the size of the attachment
     * @param dataSize size of the file attachment as a long
     * @since ARP1.0
     */
    public void setDataSize(long dataSize) {
        this.dataSize = dataSize;
    }

    /**
     * Returns the filename of the attachment
     * @return name of the attachment
     * @since ARP1.0
     */
    public String getFileName() {
        return fileName;
    }

    /**
     * Set the name of the file attachment
     * @param fileName name of the file attachment
     * @since ARP1.0
     */
    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    /**
     * Returns the mime type of the attachment
     * @return the mime type of the attachment
     * @since ARP1.0
     */
    public String getMimeType() {
        return mimeType;
    }

    /**
     * Set the mime type of the attachment
     * @param mimeType mime type of the attachment
     * @since ARP1.0
     */
    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    /**
     * Returns the relative url of the file attachment
     * @return the relative url of the file attachment
     * @since ARP1.0
     */
    public String getReferenceUrl() {
        return referenceUrl;
    }

    /**
     * Set the relative url of the attachment
     * @param referenceUrl url of the attachment
     * @since ARP1.0
     */
    public void setReferenceUrl(String referenceUrl) {
        this.referenceUrl = referenceUrl;
    }
}
