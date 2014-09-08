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
 * Provides support for multiple listeners to be started for any application and manages the delivery of listening
 * server lifecycle events to registered listeners.
 */
public interface IAppServerManager {

    /**
     * Registers a listener to receive server lifecycle events.
     *
     * @param listener To receive server listener lifecycle events.
     */
    void addServerListener(IAppServerListener listener);

    /**
     * Removes a listener to stop receiving server lifecycle events.
     *
     * @param listener Listener currently registered.
     */
    void removeServerListener(IAppServerListener listener);

    /**
     * Removed all listeners currently listening to server lifecycle events.
     */
    void removeServerListeners();

    /**
     * Asynchronous command to start listening. This starts a new instance of the server. A reference of the IAppServer
     * started is sent to the listeners.
     */
    void startServer();

    /**
     * Asynchronous command to stop listening. This stops the specified instance of the server.
     *
     * @param server Stop the specified server.
     */
    void stopServer(IAppServer server);

    /**
     * Asynchronous command to pause listening. This stops the specified instance of the server.
     *
     * @param server Stop the specified server.
     */
    void pauseServer(IAppServer server);

    /**
     * Asynchronous command to resume listening. This stops the specified instance of the server.
     *
     * @param server Stop the specified server.
     */
    void resumeServer(IAppServer server);

    /**
     * Stops all currently listening servers.
     */
    void stopServers();

    /**
     * Returns a list of all currently active servers (Not stopped).
     *
     * @return Array with the list of current active listening servers.
     */
    IAppServer[] getServers();
}
