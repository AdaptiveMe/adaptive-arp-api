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

import java.io.Serializable;

/**
 * @see me.adaptive.arp.api.IDatabase
 * @author Ferran Vila Conesa
 * @since ARP1.0
 */
public interface TableCallback extends Serializable {

    /**
     * Enumeration for warnings related to database manipulation.
     */
    public enum Warning {
        TableExists, TableLocked, NoResults
    }

    /**
     * Enumeration for errors related to database manipulation.
     */
    public enum Error {
        NoSpace, ReadOnlyTable, SqlException
    }

    /**
     * Result callback for correct responses
     *
     * @param table Returns the table
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public void onResult(Table table);

    /**
     * Result callback for warning responses
     *
     * @param table Returns the table
     * @param warning  Returned Warning
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public void onWarning(Table table, Warning warning);

    /**
     * Result callback for error responses
     *
     * @param error Returned error
     * @author Ferran Vila Conesa
     * @since ARP1.0
     */
    public void onError(Error error);
}