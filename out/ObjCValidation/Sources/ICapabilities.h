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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

#import <Foundation/Foundation.h>
#import <IBaseSystem.h>

/**
Interface for testing the Capabilities operations

@author Carlos Lozano Diez
@since ARP1.0
@version 1.0
*/
@protocol ICapabilities <IBaseSystem>

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesButton) {
          ICapabilitiesButton_HomeButton = 0,
          ICapabilitiesButton_BackButton = 1,
          ICapabilitiesButton_OptionButton = 2,
          ICapabilitiesButton_Unknown = 3
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesCommunication) {
          ICapabilitiesCommunication_Calendar = 0,
          ICapabilitiesCommunication_Contact = 1,
          ICapabilitiesCommunication_Mail = 2,
          ICapabilitiesCommunication_Messaging = 3,
          ICapabilitiesCommunication_Telephony = 4,
          ICapabilitiesCommunication_Unknown = 5
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesData) {
          ICapabilitiesData_Database = 0,
          ICapabilitiesData_File = 1,
          ICapabilitiesData_Cloud = 2,
          ICapabilitiesData_Unknown = 3
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesMedia) {
          ICapabilitiesMedia_Audio_Playback = 0,
          ICapabilitiesMedia_Audio_Recording = 1,
          ICapabilitiesMedia_Camera = 2,
          ICapabilitiesMedia_Video_Playback = 3,
          ICapabilitiesMedia_Video_Recording = 4,
          ICapabilitiesMedia_Unknown = 5
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesNet) {
          ICapabilitiesNet_GSM = 0,
          ICapabilitiesNet_GPRS = 1,
          ICapabilitiesNet_HSDPA = 2,
          ICapabilitiesNet_LTE = 3,
          ICapabilitiesNet_WIFI = 4,
          ICapabilitiesNet_Ethernet = 5,
          ICapabilitiesNet_Unavailable = 6,
          ICapabilitiesNet_Unknown = 7
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesNotification) {
          ICapabilitiesNotification_Alarm = 0,
          ICapabilitiesNotification_LocalNotification = 1,
          ICapabilitiesNotification_RemoteNotification = 2,
          ICapabilitiesNotification_Vibration = 3,
          ICapabilitiesNotification_Unknown = 4
     };

     typedef NS_OPTIONS(NSUInteger, ICapabilitiesSensor) {
          ICapabilitiesSensor_Accelerometer = 0,
          ICapabilitiesSensor_AmbientLight = 1,
          ICapabilitiesSensor_Barometer = 2,
          ICapabilitiesSensor_Geolocation = 3,
          ICapabilitiesSensor_Gyroscope = 4,
          ICapabilitiesSensor_Magnetometer = 5,
          ICapabilitiesSensor_Proximity = 6,
          ICapabilitiesSensor_Unknown = 7
     };

@end

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
