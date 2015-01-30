/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.1.1

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;
using Adaptive.Arp.Api;

namespace Adaptive.Arp.Api.Impl
{

     /**
        Interface for testing the Capabilities operations
        Auto-generated implementation of ICapabilities specification.
     */
     public class CapabilitiesDelegate : BaseSystemDelegate, ICapabilities
     {

          /**
             Default Constructor.
          */
          public CapabilitiesDelegate() : base()
          {
          }

     /**
        Obtains the default orientation of the device/display. If no default orientation is available on
the platform, this method will return the current orientation. To capture device or display orientation
changes please use the IDevice and IDisplay functions and listeners API respectively.

        @return The default orientation for the device/display.
        @since v2.0.5
     */
     public ICapabilitiesOrientation getOrientationDefault() {
          ICapabilitiesOrientation response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getOrientationDefault");
          // return response;
     }

     /**
        Provides the device/display orientations supported by the platform. A platform will usually
support at least one orientation. This is usually PortaitUp.

        @return The orientations supported by the device/display of the platform.
        @since v2.0.5
     */
     public ICapabilitiesOrientation[] getOrientationsSupported() {
          ICapabilitiesOrientation[] response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":getOrientationsSupported");
          // return response;
     }

     /**
        Determines whether a specific hardware button is supported for interaction.

        @param type Type of feature to check.
        @return true is supported, false otherwise.
        @since v2.0
     */
     public bool hasButtonSupport(ICapabilitiesButton type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasButtonSupport");
          // return response;
     }

     /**
        Determines whether a specific Communication capability is supported by
the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasCommunicationSupport(ICapabilitiesCommunication type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasCommunicationSupport");
          // return response;
     }

     /**
        Determines whether a specific Data capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasDataSupport(ICapabilitiesData type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasDataSupport");
          // return response;
     }

     /**
        Determines whether a specific Media capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasMediaSupport(ICapabilitiesMedia type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasMediaSupport");
          // return response;
     }

     /**
        Determines whether a specific Net capability is supported by the device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasNetSupport(ICapabilitiesNet type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasNetSupport");
          // return response;
     }

     /**
        Determines whether a specific Notification capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasNotificationSupport(ICapabilitiesNotification type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasNotificationSupport");
          // return response;
     }

     /**
        Determines whether the device/display supports a given orientation.

        @param orientation Orientation type.
        @return True if the given orientation is supported, false otherwise.
        @since v2.0.5
     */
     public bool hasOrientationSupport(ICapabilitiesOrientation orientation) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasOrientationSupport");
          // return response;
     }

     /**
        Determines whether a specific Sensor capability is supported by the
device.

        @param type Type of feature to check.
        @return true if supported, false otherwise.
        @since v2.0
     */
     public bool hasSensorSupport(ICapabilitiesSensor type) {
          bool response;
          // TODO: Not implemented.
          throw new UnsupportedOperationException(this.getClass().getName()+":hasSensorSupport");
          // return response;
     }

     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
