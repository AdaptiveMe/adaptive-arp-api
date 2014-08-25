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
 *     *
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

/**
 * Structure representing the basic device information.
 */
public class DeviceInfo {

    /**
     * Name of device - equivalent to brand.
     */
    private String name;
    /**
     * Model of device - equivalent to device release or version.
     */
    private String model;

    /**
     * Vendor of the device hardware.
     */
    private String vendor;

    /**
     * Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
     * be unique for a specific instance of an application on a specific device.
     */
    private String uuid;

    /**
     * Constructor used by the implementation
     */
    public DeviceInfo() {
    }

    /**
     * Constructor for the implementation of the platform.
     *
     * @param name   or brand of the device.
     * @param model  of the device.
     * @param vendor of the device.
     * @param uuid   unique* identifier (* platform dependent).
     */
    public DeviceInfo(String name, String model, String vendor, String uuid) {
        this.name = name;
        this.model = model;
        this.vendor = vendor;
        this.uuid = uuid;
    }

    /**
     * Returns the name of the device.
     *
     * @return String with device name.
     */
    public String getName() {
        return name;
    }

    /**
     * Returns the model of the device.
     *
     * @return String with the model of the device.
     */
    public String getModel() {
        return model;
    }

    /**
     * Returns the vendor of the device.
     *
     * @return String with the vendor name.
     */
    public String getVendor() {
        return vendor;
    }

    /**
     * Returns the platform dependent UUID of the device.
     *
     * @return String with the 128-bit device identifier.
     */
    public String getUuid() {
        return uuid;
    }
}
