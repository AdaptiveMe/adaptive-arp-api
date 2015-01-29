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
 * =====================================================================================================================
 */
package me.adaptive.arp.api;

/**
 * Object for reporting orientation change events for device and display.
 *
 * @since ARP 2.0.5
 */
public class RotationEvent extends APIBean {
    /**
     * The orientation we're rotating from. This is the current orientation when the state of the event is
     * WillStartRotation. This will be the previous orientation when the rotation is finished with the state
     * DidFinishRotation.
     *
     * @since ARP 2.0.5
     */
    private ICapabilities.Orientation origin;

    /**
     * The orientation we're rotating to. This is the future orientation when the state of the event is
     * WillStartRotation. This will be the current orientation when the rotation is finished with the state
     * DidFinishRotation.
     *
     * @since ARP 2.0.5
     */
    private ICapabilities.Orientation destination;

    /**
     * The state of the event to indicate the start of the rotation and the end of the rotation event. This allows
     * for functions to be pre-emptively performed (veto change, re-layout, etc.) before rotation is effected and
     * concluded.
     *
     * @since ARP 2.0.5
     */
    private State state;

    /**
     * The timestamps in milliseconds when the event was fired.
     *
     * @since ARP 2.0.5
     */
    private long timestamp;

    /**
     * Default constructor.
     *
     * @since ARP 2.0.5
     */
    public RotationEvent() {
        super();
    }

    /**
     * Convenience constructor.
     *
     * @param origin      Source orientation when the event was fired.
     * @param destination Destination orientation when the event was fired.
     * @param state       State of the event (WillBegin, DidFinish).
     * @param timestamp   Timestamp in milliseconds when the event was fired.
     * @since ARP 2.0.5
     */
    public RotationEvent(ICapabilities.Orientation origin, ICapabilities.Orientation destination, State state, long timestamp) {
        this.origin = origin;
        this.destination = destination;
        this.state = state;
        this.timestamp = timestamp;
    }

    /**
     * Get the origin orientation of the event.
     *
     * @return Origin orientation.
     * @since ARP 2.0.5
     */
    public ICapabilities.Orientation getOrigin() {
        return origin;
    }

    /**
     * Set the origin orientation of the event.
     *
     * @param origin Origin orientation
     * @since ARP 2.0.5
     */
    public void setOrigin(ICapabilities.Orientation origin) {
        this.origin = origin;
    }

    /**
     * Gets the destination orientation of the event.
     *
     * @return Destination orientation.
     * @since ARP 2.0.5
     */
    public ICapabilities.Orientation getDestination() {
        return destination;
    }

    /**
     * Sets the destination orientation of the event.
     *
     * @param destination Destination orientation.
     * @since ARP 2.0.5
     */
    public void setDestination(ICapabilities.Orientation destination) {
        this.destination = destination;
    }

    /**
     * Gets the current state of the event.
     *
     * @return State of the event.
     * @since ARP 2.0.5
     */
    public State getState() {
        return state;
    }

    /**
     * Sets the current state of the event.
     *
     * @param state The state of the event.
     * @since ARP 2.0.5
     */
    public void setState(State state) {
        this.state = state;
    }

    /**
     * Gets the timestamp in milliseconds of the event.
     *
     * @return Timestamp of the event.
     * @since ARP 2.0.5
     */
    public long getTimestamp() {
        return timestamp;
    }

    /**
     * Sets the timestamp in milliseconds of the event.
     *
     * @param timestamp Timestamp of the event.
     * @since ARP 2.0.5
     */
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    /**
     * The state of the orientation change event.
     *
     * @since ARP 2.0.5
     */
    public enum State {
        WillStartRotation, IsRotating, DidFinishRotation, Unknown
    }
}
