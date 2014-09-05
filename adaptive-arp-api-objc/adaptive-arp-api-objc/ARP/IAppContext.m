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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppContext.java
//
//

#include "IAppContext.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIAppContext : NSObject
@end

@implementation ARPIAppContext

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "getContext", NULL, "Ljava.lang.Object;", 0x401, NULL },
    { "getContextType", NULL, "Lme.adaptive.arp.api.IAppContext$Type;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAppContext = { "IAppContext", "me.adaptive.arp.api", NULL, 0x201, 2, methods, 0, NULL, 0, NULL};
  return &_ARPIAppContext;
}

@end

BOOL ARPIAppContext_TypeEnum_initialized = NO;

ARPIAppContext_TypeEnum *ARPIAppContext_TypeEnum_values[5];

@implementation ARPIAppContext_TypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppContext_TypeEnum class]) {
    ARPIAppContext_TypeEnum_iOS = [[ARPIAppContext_TypeEnum alloc] initWithNSString:@"iOS" withInt:0];
    ARPIAppContext_TypeEnum_OSX = [[ARPIAppContext_TypeEnum alloc] initWithNSString:@"OSX" withInt:1];
    ARPIAppContext_TypeEnum_Windows = [[ARPIAppContext_TypeEnum alloc] initWithNSString:@"Windows" withInt:2];
    ARPIAppContext_TypeEnum_WindowsPhone = [[ARPIAppContext_TypeEnum alloc] initWithNSString:@"WindowsPhone" withInt:3];
    ARPIAppContext_TypeEnum_Android = [[ARPIAppContext_TypeEnum alloc] initWithNSString:@"Android" withInt:4];
    ARPIAppContext_TypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppContext_TypeEnum_values count:5 type:[IOSClass classWithClass:[ARPIAppContext_TypeEnum class]]];
}

+ (ARPIAppContext_TypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 5; i++) {
    ARPIAppContext_TypeEnum *e = ARPIAppContext_TypeEnum_values[i];
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
    { "iOS", "iOS", 0x4019, "Lme.adaptive.arp.api.IAppContext$Type;", &ARPIAppContext_TypeEnum_iOS,  },
    { "OSX", "OSX", 0x4019, "Lme.adaptive.arp.api.IAppContext$Type;", &ARPIAppContext_TypeEnum_OSX,  },
    { "Windows", "Windows", 0x4019, "Lme.adaptive.arp.api.IAppContext$Type;", &ARPIAppContext_TypeEnum_Windows,  },
    { "WindowsPhone", "WindowsPhone", 0x4019, "Lme.adaptive.arp.api.IAppContext$Type;", &ARPIAppContext_TypeEnum_WindowsPhone,  },
    { "Android", "Android", 0x4019, "Lme.adaptive.arp.api.IAppContext$Type;", &ARPIAppContext_TypeEnum_Android,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppContext$Type;"};
  static J2ObjcClassInfo _ARPIAppContext_TypeEnum = { "Type", "me.adaptive.arp.api", "IAppContext", 0x4019, 1, methods, 5, fields, 1, superclass_type_args};
  return &_ARPIAppContext_TypeEnum;
}

@end
