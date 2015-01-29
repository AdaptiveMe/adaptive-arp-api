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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <APIBean.h>
#import <Foundation/Foundation.h>

/**
Object for reporting orientation change events for device and display.

@author Carlos Lozano Diez
@since v2.0.5
@version 1.0
*/
@interface RotationEvent : APIBean

     /**
        The orientation we're rotating to. This is the future orientation when the state of the event is
WillStartRotation. This will be the current orientation when the rotation is finished with the state
DidFinishRotation.
     */
     typedef NS_OPTIONS(NSUInteger, ICapabilitiesOrientation) {
          ICapabilitiesOrientation_Portrait_Up = 0,
          ICapabilitiesOrientation_Portrait_Down = 1,
          ICapabilitiesOrientation_Landscape_Left = 2,
          ICapabilitiesOrientation_Landscape_Right = 3,
          ICapabilitiesOrientation_Unknown = 4
     };

     @property ICapabilitiesOrientation *destination;
     /**
        The orientation we're rotating from. This is the current orientation when the state of the event is
WillStartRotation. This will be the previous orientation when the rotation is finished with the state
DidFinishRotation.
     */
     typedef NS_OPTIONS(NSUInteger, ICapabilitiesOrientation) {
          ICapabilitiesOrientation_Portrait_Up = 0,
          ICapabilitiesOrientation_Portrait_Down = 1,
          ICapabilitiesOrientation_Landscape_Left = 2,
          ICapabilitiesOrientation_Landscape_Right = 3,
          ICapabilitiesOrientation_Unknown = 4
     };

     @property ICapabilitiesOrientation *origin;
     /**
        The state of the event to indicate the start of the rotation and the end of the rotation event. This allows
for functions to be pre-emptively performed (veto change, re-layout, etc.) before rotation is effected and
concluded.
     */
     typedef NS_OPTIONS(NSUInteger, RotationEventState) {
          RotationEventState_WillStartRotation = 0,
          RotationEventState_IsRotating = 1,
          RotationEventState_DidFinishRotation = 2,
          RotationEventState_Unknown = 3
     };

     @property RotationEventState *state;
     /**
        The timestamps in milliseconds when the event was fired.
     */
     @property long *timestamp;

     /**
        Default constructor.

        @since v2.0.5
     */
     - (id) init;

     /**
        Convenience constructor.

        @param origin      Source orientation when the event was fired.
        @param destination Destination orientation when the event was fired.
        @param state       State of the event (WillBegin, DidFinish).
        @param timestamp   Timestamp in milliseconds when the event was fired.
        @since v2.0.5
     */
     - (id) initWithOriginDestinationStateTimestamp:(ICapabilitiesOrientation*)origin destination:(ICapabilitiesOrientation*)destination state:(RotationEventState*)state timestamp:(long*)timestamp;


@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
