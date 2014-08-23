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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/ITableResultCallback.java
//
//

#include "IOSClass.h"
#include "ITableResultCallback.h"
#include "Table.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPITableResultCallback : NSObject
@end

@implementation ARPITableResultCallback

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "onResultWithARPTable:", "onResult", "V", 0x401, NULL },
    { "onWarningWithARPTable:withARPITableResultCallback_WarningEnum:", "onWarning", "V", 0x401, NULL },
    { "onErrorWithARPITableResultCallback_ErrorEnum:", "onError", "V", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPITableResultCallback = { "ITableResultCallback", "me.adaptive.arp.api", NULL, 0x201, 3, methods, 0, NULL, 0, NULL};
  return &_ARPITableResultCallback;
}

@end

BOOL ARPITableResultCallback_WarningEnum_initialized = NO;

ARPITableResultCallback_WarningEnum *ARPITableResultCallback_WarningEnum_values[3];

@implementation ARPITableResultCallback_WarningEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPITableResultCallback_WarningEnum class]) {
    ARPITableResultCallback_WarningEnum_TableExists = [[ARPITableResultCallback_WarningEnum alloc] initWithNSString:@"TableExists" withInt:0];
    ARPITableResultCallback_WarningEnum_TableLocked = [[ARPITableResultCallback_WarningEnum alloc] initWithNSString:@"TableLocked" withInt:1];
    ARPITableResultCallback_WarningEnum_NoResults = [[ARPITableResultCallback_WarningEnum alloc] initWithNSString:@"NoResults" withInt:2];
    ARPITableResultCallback_WarningEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPITableResultCallback_WarningEnum_values count:3 type:[IOSClass classWithClass:[ARPITableResultCallback_WarningEnum class]]];
}

+ (ARPITableResultCallback_WarningEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPITableResultCallback_WarningEnum *e = ARPITableResultCallback_WarningEnum_values[i];
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
    { "TableExists", "TableExists", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Warning;", &ARPITableResultCallback_WarningEnum_TableExists,  },
    { "TableLocked", "TableLocked", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Warning;", &ARPITableResultCallback_WarningEnum_TableLocked,  },
    { "NoResults", "NoResults", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Warning;", &ARPITableResultCallback_WarningEnum_NoResults,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ITableResultCallback$Warning;"};
  static J2ObjcClassInfo _ARPITableResultCallback_WarningEnum = { "Warning", "me.adaptive.arp.api", "ITableResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPITableResultCallback_WarningEnum;
}

@end

BOOL ARPITableResultCallback_ErrorEnum_initialized = NO;

ARPITableResultCallback_ErrorEnum *ARPITableResultCallback_ErrorEnum_values[3];

@implementation ARPITableResultCallback_ErrorEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPITableResultCallback_ErrorEnum class]) {
    ARPITableResultCallback_ErrorEnum_NoSpace = [[ARPITableResultCallback_ErrorEnum alloc] initWithNSString:@"NoSpace" withInt:0];
    ARPITableResultCallback_ErrorEnum_ReadOnlyTable = [[ARPITableResultCallback_ErrorEnum alloc] initWithNSString:@"ReadOnlyTable" withInt:1];
    ARPITableResultCallback_ErrorEnum_SqlException = [[ARPITableResultCallback_ErrorEnum alloc] initWithNSString:@"SqlException" withInt:2];
    ARPITableResultCallback_ErrorEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPITableResultCallback_ErrorEnum_values count:3 type:[IOSClass classWithClass:[ARPITableResultCallback_ErrorEnum class]]];
}

+ (ARPITableResultCallback_ErrorEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPITableResultCallback_ErrorEnum *e = ARPITableResultCallback_ErrorEnum_values[i];
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
    { "NoSpace", "NoSpace", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Error;", &ARPITableResultCallback_ErrorEnum_NoSpace,  },
    { "ReadOnlyTable", "ReadOnlyTable", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Error;", &ARPITableResultCallback_ErrorEnum_ReadOnlyTable,  },
    { "SqlException", "SqlException", 0x4019, "Lme.adaptive.arp.api.ITableResultCallback$Error;", &ARPITableResultCallback_ErrorEnum_SqlException,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.ITableResultCallback$Error;"};
  static J2ObjcClassInfo _ARPITableResultCallback_ErrorEnum = { "Error", "me.adaptive.arp.api", "ITableResultCallback", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPITableResultCallback_ErrorEnum;
}

@end
