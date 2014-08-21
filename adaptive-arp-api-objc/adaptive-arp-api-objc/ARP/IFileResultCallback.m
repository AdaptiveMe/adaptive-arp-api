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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFileResultCallback.java
//
//

#include "IFile.h"
#include "IFileResultCallback.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIFileResultCallback : NSObject
@end

@implementation ARPIFileResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPIFile:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPIFile:withARPIFile:withARPIFileResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPIFileResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
    { "onErrorWithARPIFile:withARPIFileResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFileResultCallback = { "IFileResultCallback", "me.adaptive.arp.api", NULL, 0x201, 4, methods, 0, NULL, 0, NULL};
  return &_ARPIFileResultCallback;
}

@end

BOOL ARPIFileResultCallback_WarningEnum_initialized = NO;

ARPIFileResultCallback_WarningEnum *ARPIFileResultCallback_WarningEnum_values[2];

@implementation ARPIFileResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileResultCallback_WarningEnum class]) {
    ARPIFileResultCallback_WarningEnum_SourceNotDeleted = [[ARPIFileResultCallback_WarningEnum alloc] initWithNSString:@"SourceNotDeleted" withInt:0];
    ARPIFileResultCallback_WarningEnum_RootDirectory = [[ARPIFileResultCallback_WarningEnum alloc] initWithNSString:@"RootDirectory" withInt:1];
    ARPIFileResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileResultCallback_WarningEnum_values count:2 type:[IOSClass classWithClass:[ARPIFileResultCallback_WarningEnum class]]];
}

+ (ARPIFileResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIFileResultCallback_WarningEnum *e = ARPIFileResultCallback_WarningEnum_values[i];
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
    { "SourceNotDeleted", "SourceNotDeleted", 0x4019, "Lme.adaptive.arp.api.IFileResultCallback$Warning;", &ARPIFileResultCallback_WarningEnum_SourceNotDeleted,  },
    { "RootDirectory", "RootDirectory", 0x4019, "Lme.adaptive.arp.api.IFileResultCallback$Warning;", &ARPIFileResultCallback_WarningEnum_RootDirectory,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPIFileResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "IFileResultCallback", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIFileResultCallback_WarningEnum;
}

@end

BOOL ARPIFileResultCallback_ErrorEnum_initialized = NO;

ARPIFileResultCallback_ErrorEnum *ARPIFileResultCallback_ErrorEnum_values[3];

@implementation ARPIFileResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFileResultCallback_ErrorEnum class]) {
    ARPIFileResultCallback_ErrorEnum_FileExists = [[ARPIFileResultCallback_ErrorEnum alloc] initWithNSString:@"FileExists" withInt:0];
    ARPIFileResultCallback_ErrorEnum_InsufficientSpace = [[ARPIFileResultCallback_ErrorEnum alloc] initWithNSString:@"InsufficientSpace" withInt:1];
    ARPIFileResultCallback_ErrorEnum_Unauthorized = [[ARPIFileResultCallback_ErrorEnum alloc] initWithNSString:@"Unauthorized" withInt:2];
    ARPIFileResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFileResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPIFileResultCallback_ErrorEnum class]]];
}

+ (ARPIFileResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIFileResultCallback_ErrorEnum *e = ARPIFileResultCallback_ErrorEnum_values[i];
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
    { "FileExists", "FileExists", 0x4019, "Lme.adaptive.arp.api.IFileResultCallback$Error;", &ARPIFileResultCallback_ErrorEnum_FileExists,  },
    { "InsufficientSpace", "InsufficientSpace", 0x4019, "Lme.adaptive.arp.api.IFileResultCallback$Error;", &ARPIFileResultCallback_ErrorEnum_InsufficientSpace,  },
    { "Unauthorized", "Unauthorized", 0x4019, "Lme.adaptive.arp.api.IFileResultCallback$Error;", &ARPIFileResultCallback_ErrorEnum_Unauthorized,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFileResultCallback$Error;"};
  static J2ObjcClassInfo _ARPIFileResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "IFileResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIFileResultCallback_ErrorEnum;
}

@end
