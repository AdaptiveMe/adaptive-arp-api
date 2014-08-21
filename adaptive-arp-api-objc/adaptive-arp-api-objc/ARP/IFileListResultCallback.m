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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFileListResultCallback.java
//
//

#include "IFile.h"
#include "IFileListResultCallback.h"
#include "IOSClass.h"
#include "IOSObjectArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIFileListResultCallback : NSObject
@end

@implementation ARPIFileListResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPIFileArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPIFileArray:withARPIFileListResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIFileListResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
    { "onErrorWithARPIFile:withARPIFileListResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFileListResultCallback = { "IFileListResultCallback", "me.adaptive.arp.api", NULL, 0x201, 4, methods, 0, NULL, 0, NULL};
  return &_ARPIFileListResultCallback;
}

@end

BOOL ARPIFileListResultCallback_WarningEnum_initialized = NO;

ARPIFileListResultCallback_WarningEnum *ARPIFileListResultCallback_WarningEnum_values[1];

@implementation ARPIFileListResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileListResultCallback_WarningEnum class]) {
    ARPIFileListResultCallback_WarningEnum_PartialResult = [[ARPIFileListResultCallback_WarningEnum alloc] initWithNSString:@"PartialResult" withInt:0];
    ARPIFileListResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileListResultCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPIFileListResultCallback_WarningEnum class]]];
}

+ (ARPIFileListResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIFileListResultCallback_WarningEnum *e = ARPIFileListResultCallback_WarningEnum_values[i];
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
    { "PartialResult", "PartialResult", 0x4019, "Lme.adaptive.arp.api.IFileListResultCallback$Warning;", &ARPIFileListResultCallback_WarningEnum_PartialResult,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileListResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIFileListResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IFileListResultCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIFileListResultCallback_WarningEnum;
}

@end

BOOL ARPIFileListResultCallback_ErrorEnum_initialized = NO;

ARPIFileListResultCallback_ErrorEnum *ARPIFileListResultCallback_ErrorEnum_values[2];

@implementation ARPIFileListResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileListResultCallback_ErrorEnum class]) {
    ARPIFileListResultCallback_ErrorEnum_InexistentFile = [[ARPIFileListResultCallback_ErrorEnum alloc] initWithNSString:@"InexistentFile" withInt:0];
    ARPIFileListResultCallback_ErrorEnum_Unauthorized = [[ARPIFileListResultCallback_ErrorEnum alloc] initWithNSString:@"Unauthorized" withInt:1];
    ARPIFileListResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileListResultCallback_ErrorEnum_values count:2 type:[IOSClass classWithClass:[ARPIFileListResultCallback_ErrorEnum class]]];
}

+ (ARPIFileListResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIFileListResultCallback_ErrorEnum *e = ARPIFileListResultCallback_ErrorEnum_values[i];
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
    { "InexistentFile", "InexistentFile", 0x4019, "Lme.adaptive.arp.api.IFileListResultCallback$Error;", &ARPIFileListResultCallback_ErrorEnum_InexistentFile,  },
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IFileListResultCallback$Error;", &ARPIFileListResultCallback_ErrorEnum_Unauthorized,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileListResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIFileListResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IFileListResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIFileListResultCallback_ErrorEnum;
}

@end
