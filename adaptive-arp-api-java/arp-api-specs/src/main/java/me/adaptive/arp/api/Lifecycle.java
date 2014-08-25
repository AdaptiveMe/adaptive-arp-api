/*
 *
 *  * =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
 *  *
 *  * (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 *  * the License. You may obtain a copy of the License at
 *  *
 *  *     http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 *  * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 *  * specific language governing permissions and limitations under the License.
 *  *
 *  * Original author:
 *  *
 *  *     * Carlos Lozano Diez
 *  *                 <http://github.com/carloslozano>
 *  *                 <http://twitter.com/adaptivecoder>
 *  *                 <mailto:carlos@adaptive.me>
 *  *
 *  * Contributors:
 *  *
 *  *     * Francisco Javier Martin Bueno
 *  *             <https://github.com/kechis>
 *  *             <mailto:kechis@gmail.com>
 *  *
 *  * =====================================================================================================================
 *
 */

package me.adaptive.arp.api;

/**
 * Represents a specific application life-cycle stage.
 */
public class Lifecycle {
    /**
     * Represent the state of the app
     *
     * @since ARP1.0
     */
    private State state;

    /**
     * Constructor used by the implementation
     */
    public Lifecycle() {
    }

    /**
     * Constructor used by the implementation
     *
     * @param state
     * @since ARP1.0
     */
    public Lifecycle(State state) {
        this.state = state;
    }

    /**
     * Returns the state of the application
     *
     * @return state of the app
     * @since ARP1.0
     */
    public State getState() {
        return state;
    }

    /**
     * Set the State of the application
     *
     * @param state of the app
     * @since ARP1.0
     */
    public void setState(State state) {
        this.state = state;
    }

    /**
     * Possible lifecycle States:
     * 1. Starting    - Before starting.
     * 2. Started     - Start concluded.
     * 3. Running     - Accepts user interaction - running in foreground.
     * 4. Pausing     - Before going to background.
     * 4.1 PausedIdle - In background, no scheduled background activity (passive).
     * 4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
     * 5. Resuming    - Before going to foreground, followed by Running state.
     * 6. Stopping    - Before stopping.
     *
     * @since ARP1.0
     */
    public enum State {
        Starting, Started, Running, Paused, PausedIdle, PausedRun, Resuming, Stopping
    }
}
