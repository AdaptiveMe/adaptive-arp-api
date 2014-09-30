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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IDatabaseResultCallback.java
//
//

#include "Database.h"
#include "IDatabaseResultCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIDatabaseResultCallback : NSObject
@end

@implementation ARPIDatabaseResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPDatabase:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPDatabase:withARPIDatabaseResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIDatabaseResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIDatabaseResultCallback = { "IDatabaseResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIDatabaseResultCallback;
}

@end

BOOL ARPIDatabaseResultCallback_WarningEnum_initialized = NO;

ARPIDatabaseResultCallback_WarningEnum *ARPIDatabaseResultCallback_WarningEnum_values[2];

@implementation ARPIDatabaseResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIDatabaseResultCallback_WarningEnum class]) {
    ARPIDatabaseResultCallback_WarningEnum_DatabaseExists = [[ARPIDatabaseResultCallback_WarningEnum alloc] initWithNSString:@"DatabaseExists" withInt:0];
    ARPIDatabaseResultCallback_WarningEnum_IsOpen = [[ARPIDatabaseResultCallback_WarningEnum alloc] initWithNSString:@"IsOpen" withInt:1];
    ARPIDatabaseResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIDatabaseResultCallback_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIDatabaseResultCallback_WarningEnum class]]];
}

+ (ARPIDatabaseResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIDatabaseResultCallback_WarningEnum *e = ARPIDatabaseResultCallback_WarningEnum_values[i];
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
    { "DatabaseExists", "DatabaseExists", 0x4019, "Lme.adaptive.arp.api.IDatabaseResultCallback$Warning;", &ARPIDatabaseResultCallback_WarningEnum_DatabaseExists,  },
    { "IsOpen", "IsOpen", 0x4019, "Lme.adaptive.arp.api.IDatabaseResultCallback$Warning;", &ARPIDatabaseResultCallback_WarningEnum_IsOpen,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IDatabaseResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIDatabaseResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IDatabaseResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIDatabaseResultCallback_WarningEnum;
}

@end

BOOL ARPIDatabaseResultCallback_ErrorEnum_initialized = NO;

ARPIDatabaseResultCallback_ErrorEnum *ARPIDatabaseResultCallback_ErrorEnum_values[3];

@implementation ARPIDatabaseResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIDatabaseResultCallback_ErrorEnum class]) {
    ARPIDatabaseResultCallback_ErrorEnum_NoSpace = [[ARPIDatabaseResultCallback_ErrorEnum alloc] initWithNSString:@"NoSpace" withInt:0];
    ARPIDatabaseResultCallback_ErrorEnum_SqlException = [[ARPIDatabaseResultCallback_ErrorEnum alloc] initWithNSString:@"SqlException" withInt:1];
    ARPIDatabaseResultCallback_ErrorEnum_NotDeleted = [[ARPIDatabaseResultCallback_ErrorEnum alloc] initWithNSString:@"NotDeleted" withInt:2];
    ARPIDatabaseResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIDatabaseResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIDatabaseResultCallback_ErrorEnum class]]];
}

+ (ARPIDatabaseResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIDatabaseResultCallback_ErrorEnum *e = ARPIDatabaseResultCallback_ErrorEnum_values[i];
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
    { "NoSpace", "NoSpace", 0x4019, "Lme.adaptive.arp.api.IDatabaseResultCallback$Error;", &ARPIDatabaseResultCallback_ErrorEnum_NoSpace,  },
    { "SqlException", "SqlException", 0x4019, "Lme.adaptive.arp.api.IDatabaseResultCallback$Error;", &ARPIDatabaseResultCallback_ErrorEnum_SqlException,  },
    { "NotDeleted", "NotDeleted", 0x4019, "Lme.adaptive.arp.api.IDatabaseResultCallback$Error;", &ARPIDatabaseResultCallback_ErrorEnum_NotDeleted,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IDatabaseResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIDatabaseResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IDatabaseResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIDatabaseResultCallback_ErrorEnum;
}

@end
