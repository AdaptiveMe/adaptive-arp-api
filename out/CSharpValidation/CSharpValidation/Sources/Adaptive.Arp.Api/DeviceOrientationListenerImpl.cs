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

package me.adaptive.arp.api;

import com.google.gson.Gson;

/**
   Interface for handling device orientation change events.
   Auto-generated implementation of IDeviceOrientationListener specification.
*/
public class DeviceOrientationListenerImpl extends BaseListenerImpl implements IDeviceOrientationListener {

     /**
        Constructor with listener id.

        @param id  The id of the listener.
     */
     public DeviceOrientationListenerImpl(long id) {
          super(id);
     }

     /**
        Although extremely unlikely, this event will be fired if something beyond the control of the
platform impedes the rotation of the device.

        @param error The error condition... generally unknown as it is unexpected!
        @since v2.0.5
     */
     public void onError(IDeviceOrientationListenerError error) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("Adaptive.handleDeviceOrientationListenerError( '"+getId()+"', JSON.parse(" + getJSONParser().toJson(error) +") )");
     }

     /**
        Event fired with the successful start and finish of a rotation.

        @param event RotationEvent containing origin, destination and state of the event.
        @since v2.0.5
     */
     public void onResult(RotationEvent event) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("Adaptive.handleDeviceOrientationListenerResult( '"+getId()+"', JSON.parse(" + getJSONParser().toJson(event) +") )");
     }

     /**
        Event fired with a warning when the rotation is aborted. In specific, this
event may be fired if the devices vetoes the rotation before rotation is completed.

        @param event   RotationEvent containing origin, destination and state of the event.
        @param warning Type of condition that aborted rotation execution.
        @since v2.0.5
     */
     public void onWarning(RotationEvent event, IDeviceOrientationListenerWarning warning) {
          AppRegistryBridge.getInstance().getPlatformContextWeb().executeJavaScript("Adaptive.handleDeviceOrientationListenerWarning( '"+getId()+"', JSON.parse(" + getJSONParser().toJson(event) +"), JSON.parse(" + getJSONParser().toJson(warning) +") )");
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
