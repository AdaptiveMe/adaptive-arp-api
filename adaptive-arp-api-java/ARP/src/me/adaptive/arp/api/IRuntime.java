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
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;


/**
 * Created by clozano on 04/08/14.
 */
public interface IRuntime extends IBaseSystem {

    /**
     * Dismiss the current Application
     *
     * @since ARP1.0
     */
    void DismissApplication();

    /**
     * Whether the application is in background or not
     *
     * @return true if the application is in background;false otherwise
     * @since ARP1.0
     */
    boolean isBackground();

    /**
     * Whether the application dismiss the splash screen successfully or not
     *
     * @return true if the application has dismissed the splash screen;false otherwise
     * @since ARP1.0
     */
    boolean DismissSplashScreen();


}
