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

public interface IFileListResultCallback extends IBaseCallback {

    /**
     * On correct result of a file operation.
     *
     * @param files Array of resulting files/folders.
     * @since ARP1.0
     */
    void onResult(IFile[] files);

    /**
     * On partial result of a file operation, containing a warning.
     *
     * @param files   Array of resulting files/folders.
     * @param warning Warning condition encountered.
     * @since ARP1.0
     */
    void onWarning(IFile[] files, Warning warning);

    /**
     * On error result of a file operation.
     *
     * @param error Error processing the request.
     * @since ARP1.0
     */
    void onError(Error error);

    /**
     * Error processing data retrieval/storage operation.
     *
     * @param file  File referenced during error.
     * @param error Error condition encountered.
     * @since ARP1.0
     */
    void onError(IFile file, Error error);

    /**
     * List of warnings.
     *
     * @since ARP1.0
     */
    public enum Warning {
        PartialResult
    }

    /**
     * List of errors.
     *
     * @since ARP1.0
     */
    public enum Error {
        InexistentFile, Unauthorized
    }
}