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
 * Created by clozano on 13/08/14.
 */
public interface IFile {

    boolean isDirectory();

    boolean exists();

    boolean delete();

    void create(String name, IFileResultCallback callback);

    void create(String path, String name, IFileResultCallback callback);

    boolean mkDir();

    boolean mkDir(boolean recursive);

    void listFiles(IFileListResultCallback callback);

    void listFiles(String regex, IFileListResultCallback callback);

    long getSize();

    String getName();

    String getPath();

    long getDateCreated();

    long getDateModified();

    void getContent(IFileDataResultCallback callback);

    void setContent(byte[] content, IFileDataResultCallback callback);

    boolean canWrite();

    boolean canRead();

    void move(IFile newFile, IFileResultCallback callback);

    void move(IFile newFile, IFileResultCallback callback, boolean overwrite);

    void move(IFile newFile, boolean createPath, IFileResultCallback callback);

    void move(IFile newFile, boolean createPath, IFileResultCallback callback, boolean overwrite);

    public enum StorageType {Internal, Remote, Isolated, External}

    public enum FileType {Directory, File}

    public enum FileSecurity {Default, Encrypted}
}
