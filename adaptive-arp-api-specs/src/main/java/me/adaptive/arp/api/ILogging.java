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
 * Interface for Managing the Logging operations
 *
 * @author Ferran Vila Conesa
 * @since v2.0
 */
public interface ILogging extends IBaseUtil {

    /**
     * Logs the given message, with the given log level if specified, to the standard platform/environment.
     *
     * @param level   Log level
     * @param message Message to be logged
     * @since v2.0
     */
    void log(LogLevel level, String message);

    /**
     * Logs the given message, with the given log level if specified, to the standard platform/environment.
     *
     * @param level    Log level
     * @param category Category/tag name to identify/filter the log.
     * @param message  Message to be logged
     * @since v2.0
     */
    void log(LogLevel level, String category, String message);

    /**
     * Enumeration for log level platform normalization. Every platform has
     * to match their log levels into these ones.
     *
     * @since v2.0
     */
    public enum LogLevel {
        Debug, Warn, Error, Info, Unknown
    }
}
