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

//
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ICapabilities.java
//
//

#ifndef _ARPICapabilities_H_
#define _ARPICapabilities_H_

@class ARPICapabilities_ButtonEnum;
@class ARPICapabilities_CommunicationEnum;
@class ARPICapabilities_DataEnum;
@class ARPICapabilities_MediaEnum;
@class ARPICapabilities_NetEnum;
@class ARPICapabilities_NotificationEnum;
@class ARPICapabilities_SensorEnum;

#import "JreEmulation.h"
#include "IBaseSystem.h"
#include "java/lang/Enum.h"

@protocol ARPICapabilities < ARPIBaseSystem, NSObject, JavaObject >
- (BOOL)hasSensorSupportWithARPICapabilities_SensorEnum:(ARPICapabilities_SensorEnum *)type;

- (BOOL)hasCommunicationSupportWithARPICapabilities_CommunicationEnum:(ARPICapabilities_CommunicationEnum *)type;

- (BOOL)hasDataSupportWithARPICapabilities_DataEnum:(ARPICapabilities_DataEnum *)type;

- (BOOL)hasMediaSupportWithARPICapabilities_MediaEnum:(ARPICapabilities_MediaEnum *)type;

- (BOOL)hasNetSupportWithARPICapabilities_NetEnum:(ARPICapabilities_NetEnum *)type;

- (BOOL)hasNotificationSupportWithARPICapabilities_NotificationEnum:(ARPICapabilities_NotificationEnum *)type;

- (BOOL)hasButtonSupportWithARPICapabilities_ButtonEnum:(ARPICapabilities_ButtonEnum *)type;

@end

__attribute__((always_inline)) inline void ARPICapabilities_init() {}

#define MeAdaptiveArpApiICapabilities ARPICapabilities

typedef enum {
  ARPICapabilities_Sensor_Accelerometer = 0,
  ARPICapabilities_Sensor_AmbientLight = 1,
  ARPICapabilities_Sensor_Barometer = 2,
  ARPICapabilities_Sensor_Geolocation = 3,
  ARPICapabilities_Sensor_Gyroscope = 4,
  ARPICapabilities_Sensor_Magnetometer = 5,
  ARPICapabilities_Sensor_Proximity = 6,
  ARPICapabilities_Sensor_Unknown = 7,
} ARPICapabilities_Sensor;

@interface ARPICapabilities_SensorEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_SensorEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_SensorEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_SensorEnum)

FOUNDATION_EXPORT ARPICapabilities_SensorEnum *ARPICapabilities_SensorEnum_values[];

#define ARPICapabilities_SensorEnum_Accelerometer ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Accelerometer]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Accelerometer, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_AmbientLight ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_AmbientLight]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, AmbientLight, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Barometer ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Barometer]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Barometer, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Geolocation ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Geolocation]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Geolocation, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Gyroscope ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Gyroscope]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Gyroscope, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Magnetometer ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Magnetometer]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Magnetometer, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Proximity ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Proximity]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Proximity, ARPICapabilities_SensorEnum *)

#define ARPICapabilities_SensorEnum_Unknown ARPICapabilities_SensorEnum_values[ARPICapabilities_Sensor_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_SensorEnum, Unknown, ARPICapabilities_SensorEnum *)

typedef enum {
  ARPICapabilities_Communication_Calendar = 0,
  ARPICapabilities_Communication_Contact = 1,
  ARPICapabilities_Communication_Mail = 2,
  ARPICapabilities_Communication_Messaging = 3,
  ARPICapabilities_Communication_Telephony = 4,
  ARPICapabilities_Communication_Unknown = 5,
} ARPICapabilities_Communication;

@interface ARPICapabilities_CommunicationEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_CommunicationEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_CommunicationEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_CommunicationEnum)

FOUNDATION_EXPORT ARPICapabilities_CommunicationEnum *ARPICapabilities_CommunicationEnum_values[];

#define ARPICapabilities_CommunicationEnum_Calendar ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Calendar]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Calendar, ARPICapabilities_CommunicationEnum *)

#define ARPICapabilities_CommunicationEnum_Contact ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Contact]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Contact, ARPICapabilities_CommunicationEnum *)

#define ARPICapabilities_CommunicationEnum_Mail ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Mail]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Mail, ARPICapabilities_CommunicationEnum *)

#define ARPICapabilities_CommunicationEnum_Messaging ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Messaging]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Messaging, ARPICapabilities_CommunicationEnum *)

#define ARPICapabilities_CommunicationEnum_Telephony ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Telephony]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Telephony, ARPICapabilities_CommunicationEnum *)

#define ARPICapabilities_CommunicationEnum_Unknown ARPICapabilities_CommunicationEnum_values[ARPICapabilities_Communication_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_CommunicationEnum, Unknown, ARPICapabilities_CommunicationEnum *)

typedef enum {
  ARPICapabilities_Data_Database = 0,
  ARPICapabilities_Data_File = 1,
  ARPICapabilities_Data_Cloud = 2,
  ARPICapabilities_Data_Unknown = 3,
} ARPICapabilities_Data;

@interface ARPICapabilities_DataEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_DataEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_DataEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_DataEnum)

FOUNDATION_EXPORT ARPICapabilities_DataEnum *ARPICapabilities_DataEnum_values[];

#define ARPICapabilities_DataEnum_Database ARPICapabilities_DataEnum_values[ARPICapabilities_Data_Database]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_DataEnum, Database, ARPICapabilities_DataEnum *)

#define ARPICapabilities_DataEnum_File ARPICapabilities_DataEnum_values[ARPICapabilities_Data_File]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_DataEnum, File, ARPICapabilities_DataEnum *)

#define ARPICapabilities_DataEnum_Cloud ARPICapabilities_DataEnum_values[ARPICapabilities_Data_Cloud]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_DataEnum, Cloud, ARPICapabilities_DataEnum *)

#define ARPICapabilities_DataEnum_Unknown ARPICapabilities_DataEnum_values[ARPICapabilities_Data_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_DataEnum, Unknown, ARPICapabilities_DataEnum *)

typedef enum {
  ARPICapabilities_Media_Audio_Playback = 0,
  ARPICapabilities_Media_Audio_Recording = 1,
  ARPICapabilities_Media_Camera = 2,
  ARPICapabilities_Media_Video_Playback = 3,
  ARPICapabilities_Media_Video_Recording = 4,
  ARPICapabilities_Media_Unknown = 5,
} ARPICapabilities_Media;

@interface ARPICapabilities_MediaEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_MediaEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_MediaEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_MediaEnum)

FOUNDATION_EXPORT ARPICapabilities_MediaEnum *ARPICapabilities_MediaEnum_values[];

#define ARPICapabilities_MediaEnum_Audio_Playback ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Audio_Playback]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Audio_Playback, ARPICapabilities_MediaEnum *)

#define ARPICapabilities_MediaEnum_Audio_Recording ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Audio_Recording]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Audio_Recording, ARPICapabilities_MediaEnum *)

#define ARPICapabilities_MediaEnum_Camera ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Camera]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Camera, ARPICapabilities_MediaEnum *)

#define ARPICapabilities_MediaEnum_Video_Playback ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Video_Playback]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Video_Playback, ARPICapabilities_MediaEnum *)

#define ARPICapabilities_MediaEnum_Video_Recording ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Video_Recording]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Video_Recording, ARPICapabilities_MediaEnum *)

#define ARPICapabilities_MediaEnum_Unknown ARPICapabilities_MediaEnum_values[ARPICapabilities_Media_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_MediaEnum, Unknown, ARPICapabilities_MediaEnum *)

typedef enum {
  ARPICapabilities_Net_GSM = 0,
  ARPICapabilities_Net_GPRS = 1,
  ARPICapabilities_Net_HSDPA = 2,
  ARPICapabilities_Net_LTE = 3,
  ARPICapabilities_Net_WIFI = 4,
  ARPICapabilities_Net_Ethernet = 5,
  ARPICapabilities_Net_Unknown = 6,
} ARPICapabilities_Net;

@interface ARPICapabilities_NetEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_NetEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_NetEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_NetEnum)

FOUNDATION_EXPORT ARPICapabilities_NetEnum *ARPICapabilities_NetEnum_values[];

#define ARPICapabilities_NetEnum_GSM ARPICapabilities_NetEnum_values[ARPICapabilities_Net_GSM]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, GSM, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_GPRS ARPICapabilities_NetEnum_values[ARPICapabilities_Net_GPRS]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, GPRS, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_HSDPA ARPICapabilities_NetEnum_values[ARPICapabilities_Net_HSDPA]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, HSDPA, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_LTE ARPICapabilities_NetEnum_values[ARPICapabilities_Net_LTE]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, LTE, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_WIFI ARPICapabilities_NetEnum_values[ARPICapabilities_Net_WIFI]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, WIFI, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_Ethernet ARPICapabilities_NetEnum_values[ARPICapabilities_Net_Ethernet]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, Ethernet, ARPICapabilities_NetEnum *)

#define ARPICapabilities_NetEnum_Unknown ARPICapabilities_NetEnum_values[ARPICapabilities_Net_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NetEnum, Unknown, ARPICapabilities_NetEnum *)

typedef enum {
  ARPICapabilities_Notification_Alarm = 0,
  ARPICapabilities_Notification_LocalNotification = 1,
  ARPICapabilities_Notification_RemoteNotification = 2,
  ARPICapabilities_Notification_Vibration = 3,
  ARPICapabilities_Notification_Unknown = 4,
} ARPICapabilities_Notification;

@interface ARPICapabilities_NotificationEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_NotificationEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_NotificationEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_NotificationEnum)

FOUNDATION_EXPORT ARPICapabilities_NotificationEnum *ARPICapabilities_NotificationEnum_values[];

#define ARPICapabilities_NotificationEnum_Alarm ARPICapabilities_NotificationEnum_values[ARPICapabilities_Notification_Alarm]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NotificationEnum, Alarm, ARPICapabilities_NotificationEnum *)

#define ARPICapabilities_NotificationEnum_LocalNotification ARPICapabilities_NotificationEnum_values[ARPICapabilities_Notification_LocalNotification]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NotificationEnum, LocalNotification, ARPICapabilities_NotificationEnum *)

#define ARPICapabilities_NotificationEnum_RemoteNotification ARPICapabilities_NotificationEnum_values[ARPICapabilities_Notification_RemoteNotification]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NotificationEnum, RemoteNotification, ARPICapabilities_NotificationEnum *)

#define ARPICapabilities_NotificationEnum_Vibration ARPICapabilities_NotificationEnum_values[ARPICapabilities_Notification_Vibration]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NotificationEnum, Vibration, ARPICapabilities_NotificationEnum *)

#define ARPICapabilities_NotificationEnum_Unknown ARPICapabilities_NotificationEnum_values[ARPICapabilities_Notification_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_NotificationEnum, Unknown, ARPICapabilities_NotificationEnum *)

typedef enum {
  ARPICapabilities_Button_HomeButton = 0,
  ARPICapabilities_Button_BackButton = 1,
  ARPICapabilities_Button_OptionButton = 2,
  ARPICapabilities_Button_Unknown = 3,
} ARPICapabilities_Button;

@interface ARPICapabilities_ButtonEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPICapabilities_ButtonEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPICapabilities_ButtonEnum_initialized;
J2OBJC_STATIC_INIT(ARPICapabilities_ButtonEnum)

FOUNDATION_EXPORT ARPICapabilities_ButtonEnum *ARPICapabilities_ButtonEnum_values[];

#define ARPICapabilities_ButtonEnum_HomeButton ARPICapabilities_ButtonEnum_values[ARPICapabilities_Button_HomeButton]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_ButtonEnum, HomeButton, ARPICapabilities_ButtonEnum *)

#define ARPICapabilities_ButtonEnum_BackButton ARPICapabilities_ButtonEnum_values[ARPICapabilities_Button_BackButton]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_ButtonEnum, BackButton, ARPICapabilities_ButtonEnum *)

#define ARPICapabilities_ButtonEnum_OptionButton ARPICapabilities_ButtonEnum_values[ARPICapabilities_Button_OptionButton]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_ButtonEnum, OptionButton, ARPICapabilities_ButtonEnum *)

#define ARPICapabilities_ButtonEnum_Unknown ARPICapabilities_ButtonEnum_values[ARPICapabilities_Button_Unknown]
J2OBJC_STATIC_FIELD_GETTER(ARPICapabilities_ButtonEnum, Unknown, ARPICapabilities_ButtonEnum *)

#endif // _ARPICapabilities_H_
