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

#include "ICapabilities.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPICapabilities : NSObject
@end

@implementation ARPICapabilities

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "hasSensorSupportWithARPICapabilities_SensorEnum:", "hasSensorSupport", "Z", 0x401, NULL },
    { "hasCommunicationSupportWithARPICapabilities_CommunicationEnum:", "hasCommunicationSupport", "Z", 0x401, NULL },
    { "hasDataSupportWithARPICapabilities_DataEnum:", "hasDataSupport", "Z", 0x401, NULL },
    { "hasMediaSupportWithARPICapabilities_MediaEnum:", "hasMediaSupport", "Z", 0x401, NULL },
    { "hasNetSupportWithARPICapabilities_NetEnum:", "hasNetSupport", "Z", 0x401, NULL },
    { "hasNotificationSupportWithARPICapabilities_NotificationEnum:", "hasNotificationSupport", "Z", 0x401, NULL },
    { "hasButtonSupportWithARPICapabilities_ButtonEnum:", "hasButtonSupport", "Z", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPICapabilities = { "ICapabilities", "me.adaptive.arp.api", NULL, 0x201, 7, methods, 0, NULL, 0, NULL};
  return &_ARPICapabilities;
}

@end

BOOL ARPICapabilities_SensorEnum_initialized = NO;

ARPICapabilities_SensorEnum *ARPICapabilities_SensorEnum_values[8];

@implementation ARPICapabilities_SensorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_SensorEnum class]) {
    ARPICapabilities_SensorEnum_Accelerometer = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Accelerometer" withInt:0];
    ARPICapabilities_SensorEnum_AmbientLight = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"AmbientLight" withInt:1];
    ARPICapabilities_SensorEnum_Barometer = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Barometer" withInt:2];
    ARPICapabilities_SensorEnum_Geolocation = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Geolocation" withInt:3];
    ARPICapabilities_SensorEnum_Gyroscope = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Gyroscope" withInt:4];
    ARPICapabilities_SensorEnum_Magnetometer = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Magnetometer" withInt:5];
    ARPICapabilities_SensorEnum_Proximity = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Proximity" withInt:6];
    ARPICapabilities_SensorEnum_Unknown = [[ARPICapabilities_SensorEnum alloc] initWithNSString:@"Unknown" withInt:7];
    ARPICapabilities_SensorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_SensorEnum_values count:8 type:[IOSClass classWithClass:[ARPICapabilities_SensorEnum class]]];
}

+ (ARPICapabilities_SensorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 8; i++) {
    ARPICapabilities_SensorEnum *e = ARPICapabilities_SensorEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Accelerometer", "Accelerometer", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Accelerometer,  },
    { "AmbientLight", "AmbientLight", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_AmbientLight,  },
    { "Barometer", "Barometer", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Barometer,  },
    { "Geolocation", "Geolocation", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Geolocation,  },
    { "Gyroscope", "Gyroscope", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Gyroscope,  },
    { "Magnetometer", "Magnetometer", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Magnetometer,  },
    { "Proximity", "Proximity", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Proximity,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Sensor;", &ARPICapabilities_SensorEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Sensor;"};
  static J2ObjcClassInfo _ARPICapabilities_SensorEnum = { "Sensor", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 8, fields, 1, superclass_type_args};
  return &_ARPICapabilities_SensorEnum;
}

@end

BOOL ARPICapabilities_CommunicationEnum_initialized = NO;

ARPICapabilities_CommunicationEnum *ARPICapabilities_CommunicationEnum_values[6];

@implementation ARPICapabilities_CommunicationEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_CommunicationEnum class]) {
    ARPICapabilities_CommunicationEnum_Calendar = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Calendar" withInt:0];
    ARPICapabilities_CommunicationEnum_Contact = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Contact" withInt:1];
    ARPICapabilities_CommunicationEnum_Mail = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Mail" withInt:2];
    ARPICapabilities_CommunicationEnum_Messaging = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Messaging" withInt:3];
    ARPICapabilities_CommunicationEnum_Telephony = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Telephony" withInt:4];
    ARPICapabilities_CommunicationEnum_Unknown = [[ARPICapabilities_CommunicationEnum alloc] initWithNSString:@"Unknown" withInt:5];
    ARPICapabilities_CommunicationEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_CommunicationEnum_values count:6 type:[IOSClass classWithClass:[ARPICapabilities_CommunicationEnum class]]];
}

+ (ARPICapabilities_CommunicationEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 6; i++) {
    ARPICapabilities_CommunicationEnum *e = ARPICapabilities_CommunicationEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Calendar", "Calendar", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Calendar,  },
    { "Contact", "Contact", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Contact,  },
    { "Mail", "Mail", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Mail,  },
    { "Messaging", "Messaging", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Messaging,  },
    { "Telephony", "Telephony", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Telephony,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Communication;", &ARPICapabilities_CommunicationEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Communication;"};
  static J2ObjcClassInfo _ARPICapabilities_CommunicationEnum = { "Communication", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 6, fields, 1, superclass_type_args};
  return &_ARPICapabilities_CommunicationEnum;
}

@end

BOOL ARPICapabilities_DataEnum_initialized = NO;

ARPICapabilities_DataEnum *ARPICapabilities_DataEnum_values[4];

@implementation ARPICapabilities_DataEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_DataEnum class]) {
    ARPICapabilities_DataEnum_Database = [[ARPICapabilities_DataEnum alloc] initWithNSString:@"Database" withInt:0];
    ARPICapabilities_DataEnum_File = [[ARPICapabilities_DataEnum alloc] initWithNSString:@"File" withInt:1];
    ARPICapabilities_DataEnum_Cloud = [[ARPICapabilities_DataEnum alloc] initWithNSString:@"Cloud" withInt:2];
    ARPICapabilities_DataEnum_Unknown = [[ARPICapabilities_DataEnum alloc] initWithNSString:@"Unknown" withInt:3];
    ARPICapabilities_DataEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_DataEnum_values count:4 type:[IOSClass classWithClass:[ARPICapabilities_DataEnum class]]];
}

+ (ARPICapabilities_DataEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPICapabilities_DataEnum *e = ARPICapabilities_DataEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Database", "Database", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Data;", &ARPICapabilities_DataEnum_Database,  },
    { "File", "File", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Data;", &ARPICapabilities_DataEnum_File,  },
    { "Cloud", "Cloud", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Data;", &ARPICapabilities_DataEnum_Cloud,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Data;", &ARPICapabilities_DataEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Data;"};
  static J2ObjcClassInfo _ARPICapabilities_DataEnum = { "Data", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPICapabilities_DataEnum;
}

@end

BOOL ARPICapabilities_MediaEnum_initialized = NO;

ARPICapabilities_MediaEnum *ARPICapabilities_MediaEnum_values[6];

@implementation ARPICapabilities_MediaEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_MediaEnum class]) {
    ARPICapabilities_MediaEnum_Audio_Playback = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Audio_Playback" withInt:0];
    ARPICapabilities_MediaEnum_Audio_Recording = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Audio_Recording" withInt:1];
    ARPICapabilities_MediaEnum_Camera = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Camera" withInt:2];
    ARPICapabilities_MediaEnum_Video_Playback = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Video_Playback" withInt:3];
    ARPICapabilities_MediaEnum_Video_Recording = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Video_Recording" withInt:4];
    ARPICapabilities_MediaEnum_Unknown = [[ARPICapabilities_MediaEnum alloc] initWithNSString:@"Unknown" withInt:5];
    ARPICapabilities_MediaEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_MediaEnum_values count:6 type:[IOSClass classWithClass:[ARPICapabilities_MediaEnum class]]];
}

+ (ARPICapabilities_MediaEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 6; i++) {
    ARPICapabilities_MediaEnum *e = ARPICapabilities_MediaEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Audio_Playback", "Audio_Playback", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Audio_Playback,  },
    { "Audio_Recording", "Audio_Recording", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Audio_Recording,  },
    { "Camera", "Camera", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Camera,  },
    { "Video_Playback", "Video_Playback", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Video_Playback,  },
    { "Video_Recording", "Video_Recording", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Video_Recording,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Media;", &ARPICapabilities_MediaEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Media;"};
  static J2ObjcClassInfo _ARPICapabilities_MediaEnum = { "Media", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 6, fields, 1, superclass_type_args};
  return &_ARPICapabilities_MediaEnum;
}

@end

BOOL ARPICapabilities_NetEnum_initialized = NO;

ARPICapabilities_NetEnum *ARPICapabilities_NetEnum_values[7];

@implementation ARPICapabilities_NetEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_NetEnum class]) {
    ARPICapabilities_NetEnum_GSM = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"GSM" withInt:0];
    ARPICapabilities_NetEnum_GPRS = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"GPRS" withInt:1];
    ARPICapabilities_NetEnum_HSDPA = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"HSDPA" withInt:2];
    ARPICapabilities_NetEnum_LTE = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"LTE" withInt:3];
    ARPICapabilities_NetEnum_WIFI = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"WIFI" withInt:4];
    ARPICapabilities_NetEnum_Ethernet = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"Ethernet" withInt:5];
    ARPICapabilities_NetEnum_Unknown = [[ARPICapabilities_NetEnum alloc] initWithNSString:@"Unknown" withInt:6];
    ARPICapabilities_NetEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_NetEnum_values count:7 type:[IOSClass classWithClass:[ARPICapabilities_NetEnum class]]];
}

+ (ARPICapabilities_NetEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 7; i++) {
    ARPICapabilities_NetEnum *e = ARPICapabilities_NetEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "GSM", "GSM", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_GSM,  },
    { "GPRS", "GPRS", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_GPRS,  },
    { "HSDPA", "HSDPA", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_HSDPA,  },
    { "LTE", "LTE", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_LTE,  },
    { "WIFI", "WIFI", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_WIFI,  },
    { "Ethernet", "Ethernet", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_Ethernet,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Net;", &ARPICapabilities_NetEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Net;"};
  static J2ObjcClassInfo _ARPICapabilities_NetEnum = { "Net", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 7, fields, 1, superclass_type_args};
  return &_ARPICapabilities_NetEnum;
}

@end

BOOL ARPICapabilities_NotificationEnum_initialized = NO;

ARPICapabilities_NotificationEnum *ARPICapabilities_NotificationEnum_values[5];

@implementation ARPICapabilities_NotificationEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_NotificationEnum class]) {
    ARPICapabilities_NotificationEnum_Alarm = [[ARPICapabilities_NotificationEnum alloc] initWithNSString:@"Alarm" withInt:0];
    ARPICapabilities_NotificationEnum_LocalNotification = [[ARPICapabilities_NotificationEnum alloc] initWithNSString:@"LocalNotification" withInt:1];
    ARPICapabilities_NotificationEnum_RemoteNotification = [[ARPICapabilities_NotificationEnum alloc] initWithNSString:@"RemoteNotification" withInt:2];
    ARPICapabilities_NotificationEnum_Vibration = [[ARPICapabilities_NotificationEnum alloc] initWithNSString:@"Vibration" withInt:3];
    ARPICapabilities_NotificationEnum_Unknown = [[ARPICapabilities_NotificationEnum alloc] initWithNSString:@"Unknown" withInt:4];
    ARPICapabilities_NotificationEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_NotificationEnum_values count:5 type:[IOSClass classWithClass:[ARPICapabilities_NotificationEnum class]]];
}

+ (ARPICapabilities_NotificationEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPICapabilities_NotificationEnum *e = ARPICapabilities_NotificationEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "Alarm", "Alarm", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Notification;", &ARPICapabilities_NotificationEnum_Alarm,  },
    { "LocalNotification", "LocalNotification", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Notification;", &ARPICapabilities_NotificationEnum_LocalNotification,  },
    { "RemoteNotification", "RemoteNotification", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Notification;", &ARPICapabilities_NotificationEnum_RemoteNotification,  },
    { "Vibration", "Vibration", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Notification;", &ARPICapabilities_NotificationEnum_Vibration,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Notification;", &ARPICapabilities_NotificationEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Notification;"};
  static J2ObjcClassInfo _ARPICapabilities_NotificationEnum = { "Notification", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPICapabilities_NotificationEnum;
}

@end

BOOL ARPICapabilities_ButtonEnum_initialized = NO;

ARPICapabilities_ButtonEnum *ARPICapabilities_ButtonEnum_values[4];

@implementation ARPICapabilities_ButtonEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPICapabilities_ButtonEnum class]) {
    ARPICapabilities_ButtonEnum_HomeButton = [[ARPICapabilities_ButtonEnum alloc] initWithNSString:@"HomeButton" withInt:0];
    ARPICapabilities_ButtonEnum_BackButton = [[ARPICapabilities_ButtonEnum alloc] initWithNSString:@"BackButton" withInt:1];
    ARPICapabilities_ButtonEnum_OptionButton = [[ARPICapabilities_ButtonEnum alloc] initWithNSString:@"OptionButton" withInt:2];
    ARPICapabilities_ButtonEnum_Unknown = [[ARPICapabilities_ButtonEnum alloc] initWithNSString:@"Unknown" withInt:3];
    ARPICapabilities_ButtonEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPICapabilities_ButtonEnum_values count:4 type:[IOSClass classWithClass:[ARPICapabilities_ButtonEnum class]]];
}

+ (ARPICapabilities_ButtonEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPICapabilities_ButtonEnum *e = ARPICapabilities_ButtonEnum_values[i];
    if ([name isEqual:[e name]]) {
      return e;
    }
  }
  @throw [[JavaLangIllegalArgumentException alloc] initWithNSString:name];
  return nil;
}

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "init", NULL, NULL, 0x1, NULL },
  };
  static J2ObjcFieldInfo fields[] = {
    { "HomeButton", "HomeButton", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Button;", &ARPICapabilities_ButtonEnum_HomeButton,  },
    { "BackButton", "BackButton", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Button;", &ARPICapabilities_ButtonEnum_BackButton,  },
    { "OptionButton", "OptionButton", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Button;", &ARPICapabilities_ButtonEnum_OptionButton,  },
    { "Unknown", "Unknown", 0x4019, "Lme.adaptive.arp.api.ICapabilities$Button;", &ARPICapabilities_ButtonEnum_Unknown,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ICapabilities$Button;"};
  static J2ObjcClassInfo _ARPICapabilities_ButtonEnum = { "Button", "me.adaptive.arp.api", "ICapabilities", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPICapabilities_ButtonEnum;
}

@end
