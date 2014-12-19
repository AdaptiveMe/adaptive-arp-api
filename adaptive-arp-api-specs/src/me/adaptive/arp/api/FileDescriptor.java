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
 * Created by clozano on 19/12/14.
 */
public class FileDescriptor {

    private String name;
    private String path;
    private String pathAbsolute;
    private long dateCreated;
    private long dateModified;
    private long size;

    /**
     * Default constructor.
     */
    public FileDescriptor() {
    }

    /**
     * Returns the name of the file if the reference is a file or the last path element of the folder.
     *
     * @return The name of the file.
     * @since ARP1.0
     */
    public String getName() {
        return this.name;
    }

    /**
     * Returns the path element of the file or folder (excluding the last path element if it's a directory).
     *
     * @return The path to the file.
     * @since ARP1.0
     */
    public String getPath() {
        return this.path;
    }

    /**
     * Returns the resolved absolute path elements of the file and/or folders (including the last path element).
     *
     * @return The absolute path to the file.
     * @since ARP1.0
     */
    public String getPathAbsolute() {
        return this.pathAbsolute;
    }

    /**
     * Returns the milliseconds passed since 1/1/1970 since the file was created.
     *
     * @return Timestamp in milliseconds.
     * @since ARP1.0
     */
    public long getDateCreated() {
        return this.dateCreated;
    }

    /**
     * Returns the milliseconds passed since 1/1/1970 since the file was modified.
     *
     * @return Timestamp in milliseconds.
     * @since ARP1.0
     */
    public long getDateModified() {
        return this.dateModified;
    }

    /**
     * Returns the size in bytes of the file or -1 if the reference is a folder.
     *
     * @return Size in bytes of file.
     * @since ARP1.0
     */
    public long getSize() {
        return this.size;
    }

    /**
     * Sets the name of the file. Used internally.
     *
     * @param name Name of the file or last folder path element.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Sets the path of the file or folder. Used internally.
     *
     * @param path The path element of the file or folder.
     */
    public void setPath(String path) {
        this.path = path;
    }

    /**
     * Sets the absolute path of the file or folder. Used internally.
     *
     * @param pathAbsolute String with the absolute path of file or folder.
     */
    public void setPathAbsolute(String pathAbsolute) {
        this.pathAbsolute = pathAbsolute;
    }

    /**
     * Sets the creation timestamp in milliseconds. Used internally.
     * @param dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
     */
    public void setDateCreated(long dateCreated) {
        this.dateCreated = dateCreated;
    }

    /**
     * Sets the file or folder modification timestamp in milliseconds. Used internally.
     *
     * @param dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
     */
    public void setDateModified(long dateModified) {
        this.dateModified = dateModified;
    }

    /**
     * Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
     * doesn't exist, this will be -1. Used internally.
     *
     * @param size The size in bytes of the file.
     */
    public void setSize(long size) {
        this.size = size;
    }
}
