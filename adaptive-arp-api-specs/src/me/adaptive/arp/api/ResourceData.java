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
 * This class represents a resource provided by the platform from the application's secure payload.
 *
 * @since v2.1.3
 */
public class ResourceData {

    /**
     * The id or path identifier of the resource.
     *
     * @since v2.1.3
     */
    private String id;
    /**
     * The payload data of the resource in ready to consume format.
     *
     * @since v2.1.3
     */
    private byte[] data;
    /**
     * The raw type of the payload - this is equivalent to the mimetype of the content.
     *
     * @since v2.1.3
     */
    private String rawType;
    /**
     * The raw length of the payload before any cooking occurred. This is equivalent to the size of the resource
     * after uncompressing and unencrypting.
     *
     * @since v2.1.3
     */
    private long rawLength;
    /**
     * Marker to indicate whether the resource is cooked in some way (compressed, encrypted, etc.) If true, the
     * implementation must uncompress/unencrypt following the cookedType recipe specified by the payload.
     *
     * @since v2.1.3
     */
    private boolean cooked;

    /**
     * If the data is cooked, this field should contain the recipe to return the cooked data to its original
     * uncompressed/unencrypted/etc format.
     *
     * @since v2.1.3
     */
    private String cookedType;
    /**
     * This is the length of the payload after cooking. In general, this length indicates the amount
     * of space saved with regard to the rawLength of the payload.
     *
     * @since v2.1.3
     */
    private long cookedLength;

    /**
     * Default constructor.
     *
     * @since v2.1.3
     */
    public ResourceData() {
    }

    /**
     * Convenience constructor.
     *
     * @param id           The id or path of the resource retrieved.
     * @param data         The payload data of the resource (uncooked).
     * @param rawType      The raw type/mimetype of the resource.
     * @param rawLength    The raw length/original length in bytes of the resource.
     * @param cooked       True if the resource is cooked.
     * @param cookedType   Type of recipe used for cooking.
     * @param cookedLength The cooked length in bytes of the resource.
     * @since v2.1.3
     */
    public ResourceData(String id, byte[] data, String rawType, long rawLength, boolean cooked, String cookedType, long cookedLength) {
        this.id = id;
        this.data = data;
        this.rawType = rawType;
        this.rawLength = rawLength;
        this.cooked = cooked;
        this.cookedType = cookedType;
        this.cookedLength = cookedLength;
    }

    /**
     * @return The id or path of the resource.
     * @since v2.1.3
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the id or path of the resource.
     *
     * @param id The id or path of the resource.
     * @since v2.1.3
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * Returns the payload of the resource.
     *
     * @return Binary payload of the resource.
     * @since v2.1.3
     */
    public byte[] getData() {
        return data;
    }

    /**
     * Sets the payload of the resource.
     *
     * @param data Binary payload of the resource.
     * @since v2.1.3
     */
    public void setData(byte[] data) {
        this.data = data;
    }

    /**
     * Gets the resource's raw type or mimetype.
     *
     * @return Resource's type or mimetype.
     * @since v2.1.3
     */
    public String getRawType() {
        return rawType;
    }

    /**
     * Sets the resource's raw type or mimetype.
     *
     * @param rawType Resource's type or mimetype.
     * @since v2.1.3
     */
    public void setRawType(String rawType) {
        this.rawType = rawType;
    }

    /**
     * Gets the resource payload's original length.
     *
     * @return Original length of the resource in bytes before cooking.
     * @since v2.1.3
     */
    public long getRawLength() {
        return rawLength;
    }

    /**
     * Sets the resource payload's original length.
     *
     * @param rawLength Original length of the resource in bytes before cooking.
     * @since v2.1.3
     */
    public void setRawLength(long rawLength) {
        this.rawLength = rawLength;
    }

    /**
     * Attribute to denote whether the payload of the resource is cooked.
     *
     * @return True if the resource is cooked, false otherwise.
     * @since v2.1.3
     */
    public boolean isCooked() {
        return cooked;
    }

    /**
     * Attribute to denote whether the payload of the resource is cooked.
     *
     * @param cooked True if the resource is cooked, false otherwise.
     * @since v2.1.3
     */
    public void setCooked(boolean cooked) {
        this.cooked = cooked;
    }

    /**
     * If the resource is cooked, this will return the recipe used during cooking.
     *
     * @return The cooking recipe to reverse the cooking process.
     * @since v2.1.3
     */
    public String getCookedType() {
        return cookedType;
    }

    /**
     * If the resource is cooked, the type of recipe used during cooking.
     *
     * @param cookedType The cooking recipe used during cooking.
     * @since v2.1.3
     */
    public void setCookedType(String cookedType) {
        this.cookedType = cookedType;
    }

    /**
     * The length in bytes of the payload after cooking.
     *
     * @return Length in bytes of cooked payload.
     * @since v2.1.3
     */
    public long getCookedLength() {
        return cookedLength;
    }

    /**
     * The length in bytes of the payload after cooking.
     *
     * @param cookedLength Length in bytes of cooked payload.
     * @since v2.1.3
     */
    public void setCookedLength(long cookedLength) {
        this.cookedLength = cookedLength;
    }
}
