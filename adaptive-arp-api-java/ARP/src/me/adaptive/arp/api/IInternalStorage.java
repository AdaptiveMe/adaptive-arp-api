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
 *     * Aryslan
 *                 <http://github.com/Aryslan>
 *                 <http://twitter.com/Aryslan>
 *                 <mailto:ddbc@gft.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;

/**
 * Created by DBarranco on 11/08/14.
 */
public interface IInternalStorage extends IStore, Serializable {

    /**
     * Stores in the device internal storage the specified item/s.
     *
     * @param keyValues Array containing the items to store on the device internal memory.
     * @param publicAccessName The name of the shared internal storage object (if needed).
     * @param callback callback to be executed upon function result.
     * @since ARP 1.0
     */
    public void SetKeyValuePairs(InternalStorageKeyPair[] keyValues, String publicAccessName, IInternalStorageResultCallback callback);

    /**
     * Retrieves from the device internal storage the entry/entries containing the specified key names.
     *
     * @param keys Array with the key names to retrieve.
     * @param publicAccessName The name of the shared internal storage object (if needed).
     * @param callback callback to be executed upon function result.
     * @since ARP 1.0
     */
    public void GetKeyValuePairs(String[] keys, String publicAccessName, IInternalStorageResultCallback callback);

    /**
     * Deletes from the device internal storage the entry/entries containing the specified key names.
     *
     * @param keys Array with the key names to delete.
     * @param publicAccessName The name of the shared internal storage object (if needed).
     * @param callback callback to be executed upon function result.
     * @since ARP 1.0
     */
    public void DeleteKeyValuePairs(String[] keys, String publicAccessName, IInternalStorageResultCallback callback);
}
