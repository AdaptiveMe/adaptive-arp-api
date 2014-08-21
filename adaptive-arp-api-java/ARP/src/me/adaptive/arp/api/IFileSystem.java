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
 * Created by clozano on 04/08/14.
 */
public interface IFileSystem extends IBaseData {

    /**
     * Returns the file system dependent file separator.
     *
     * @return char with the directory/file separator.
     * @since ARP1.0
     */
    public char getSeparator();

    /**
     * Returns the path as a string.
     *
     * @param path Reference.
     * @return String representation of the path.
     * @since ARP1.0
     */
    public String getPath(IFilePath path);

    /**
     * Returns the path of the file as a string.
     *
     * @param file Reference.
     * @return String representation of path to the file.
     * @since ARP1.0
     */
    public String getPath(IFile file);

    /**
     * Compare 2 files to determine whether they're the same.
     *
     * @param source First file reference.
     * @param dest   Second file reference.
     * @return Returns true if both files are the same, false otherwise.
     * @since ARP1.0
     */
    public boolean isSameFile(IFile source, IFile dest);

    /**
     * Compares 2 paths to determine whether they're the same.
     *
     * @param source First path reference.
     * @param dest   Second path reference.
     * @return Returns true if both paths are the same, false otherwise.
     * @since ARP1.0
     */
    public boolean isSamePath(IFilePath source, IFilePath dest);

    /**
     * Creates a file with the specified name.
     *
     * @param name     Name of the file to create.
     * @param callback Result of the operation.
     * @since ARP1.0
     */
    public void create(String name, IFileResultCallback callback);

    /**
     * Creates a file with the specified name in the specified path.
     *
     * @param path     String representation of the path.
     * @param name     Name of the file to create.
     * @param callback Result of the operation.
     * @since ARP1.0
     */
    public void create(String path, String name, IFileResultCallback callback);

    /**
     * Creates a file with the specified name in the specified path.
     *
     * @param path     Path reference.
     * @param name     Name of the file to create.
     * @param callback Result of the operation.
     * @since ARP1.0
     */
    public void create(IFilePath path, String name, IFileResultCallback callback);

    /**
     * Extract the path element of the given file.
     *
     * @param path File for which to extract the path.
     * @return Path element of the file.
     * @since ARP1.0
     */
    public IFilePath toPath(IFile path);

    /**
     * Returns a reference to the application installation folder.
     * This path may or may not be directly readable or writable - it usually contains the app binary and data.
     * Sub-directories are usually usable by the application.
     *
     * @return Path to the application folder.
     * @since ARP1.0
     */
    public IFilePath getApplicationFolder();

    /**
     * Returns a reference to the cache folder for the current application.
     * This path must always be writable by the current application.
     *
     * @return Path to the application's cache folder.
     * @since ARP1.0
     */
    public IFilePath getApplicationCacheFolder();

    /**
     * Returns a reference to the documents folder for the current application.
     * This path must always be writable by the current application.
     *
     * @return Path to the application's documents folder.
     * @since ARP1.0
     */
    public IFilePath getApplicationDocumentsFolder();
}
