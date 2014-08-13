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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFileDataResultCallback.java
//
//

#include "IFile.h"
#include "IFileDataResultCallback.h"
#include "IOSClass.h"
#include "IOSPrimitiveArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIFileDataResultCallback : NSObject
@end

@implementation ARPIFileDataResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPIFile:withByteArray:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPIFile:withARPIFileDataResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIFileDataResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFileDataResultCallback = { "IFileDataResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPIFileDataResultCallback;
}

@end

BOOL ARPIFileDataResultCallback_WarningEnum_initialized = NO;

ARPIFileDataResultCallback_WarningEnum *ARPIFileDataResultCallback_WarningEnum_values[1];

@implementation ARPIFileDataResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileDataResultCallback_WarningEnum class]) {
    ARPIFileDataResultCallback_WarningEnum_ExceedMaximumSize = [[ARPIFileDataResultCallback_WarningEnum alloc] initWithNSString:@"ExceedMaximumSize" withInt:0];
    ARPIFileDataResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileDataResultCallback_WarningEnum_values count:1 type:[IOSClass classWithClass:[ARPIFileDataResultCallback_WarningEnum class]]];
}

+ (ARPIFileDataResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 1; i++) {
    ARPIFileDataResultCallback_WarningEnum *e = ARPIFileDataResultCallback_WarningEnum_values[i];
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
    { "ExceedMaximumSize", "ExceedMaximumSize", 0x4019, "Lme.adaptive.arp.api.IFileDataResultCallback$Warning;", &ARPIFileDataResultCallback_WarningEnum_ExceedMaximumSize,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileDataResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIFileDataResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IFileDataResultCallback", 0x4019, 1, methods, 1, fields, 1, superclass_type_args};
  return &_ARPIFileDataResultCallback_WarningEnum;
}

@end

BOOL ARPIFileDataResultCallback_ErrorEnum_initialized = NO;

ARPIFileDataResultCallback_ErrorEnum *ARPIFileDataResultCallback_ErrorEnum_values[3];

@implementation ARPIFileDataResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileDataResultCallback_ErrorEnum class]) {
    ARPIFileDataResultCallback_ErrorEnum_InexistentFile = [[ARPIFileDataResultCallback_ErrorEnum alloc] initWithNSString:@"InexistentFile" withInt:0];
    ARPIFileDataResultCallback_ErrorEnum_InsufficientSpace = [[ARPIFileDataResultCallback_ErrorEnum alloc] initWithNSString:@"InsufficientSpace" withInt:1];
    ARPIFileDataResultCallback_ErrorEnum_Unauthorized = [[ARPIFileDataResultCallback_ErrorEnum alloc] initWithNSString:@"Unauthorized" withInt:2];
    ARPIFileDataResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileDataResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIFileDataResultCallback_ErrorEnum class]]];
}

+ (ARPIFileDataResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIFileDataResultCallback_ErrorEnum *e = ARPIFileDataResultCallback_ErrorEnum_values[i];
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
    { "InexistentFile", "InexistentFile", 0x4019, "Lme.adaptive.arp.api.IFileDataResultCallback$Error;", &ARPIFileDataResultCallback_ErrorEnum_InexistentFile,  },
    { "InsufficientSpace", "InsufficientSpace", 0x4019, "Lme.adaptive.arp.api.IFileDataResultCallback$Error;", &ARPIFileDataResultCallback_ErrorEnum_InsufficientSpace,  },
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IFileDataResultCallback$Error;", &ARPIFileDataResultCallback_ErrorEnum_Unauthorized,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileDataResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIFileDataResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IFileDataResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIFileDataResultCallback_ErrorEnum;
}

@end
