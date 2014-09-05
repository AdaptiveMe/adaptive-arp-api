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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppResource.java
//
//

#include "IAppResource.h"
#include "IOSClass.h"
#include "IOSPrimitiveArray.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIAppResource : NSObject
@end

@implementation ARPIAppResource

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "getName", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getPath", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getMimetype", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getType", NULL, "Lme.adaptive.arp.api.IAppResource$Type;", 0x401, NULL },
    { "getFormat", NULL, "Lme.adaptive.arp.api.IAppResource$Format;", 0x401, NULL },
    { "geType", NULL, "Lme.adaptive.arp.api.IAppResource$Payload;", 0x401, NULL },
    { "getSize", NULL, "J", 0x401, NULL },
    { "getSizeStored", NULL, "J", 0x401, NULL },
    { "getTimestamp", NULL, "J", 0x401, NULL },
    { "getMd5", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getUuid", NULL, "Ljava.lang.String;", 0x401, NULL },
    { "getData", NULL, "[B", 0x401, NULL },
    { "getDataStored", NULL, "[B", 0x401, NULL },
    { "getDataPathLinked", NULL, "Ljava.lang.String;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAppResource = { "IAppResource", "me.adaptive.arp.api", NULL, 0x201, 14, methods, 0, NULL, 0, NULL};
  return &_ARPIAppResource;
}

@end

BOOL ARPIAppResource_TypeEnum_initialized = NO;

ARPIAppResource_TypeEnum *ARPIAppResource_TypeEnum_values[9];

@implementation ARPIAppResource_TypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppResource_TypeEnum class]) {
    ARPIAppResource_TypeEnum_Html = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Html" withInt:0];
    ARPIAppResource_TypeEnum_Css = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Css" withInt:1];
    ARPIAppResource_TypeEnum_JavaScript = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"JavaScript" withInt:2];
    ARPIAppResource_TypeEnum_Image = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Image" withInt:3];
    ARPIAppResource_TypeEnum_Video = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Video" withInt:4];
    ARPIAppResource_TypeEnum_Audio = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Audio" withInt:5];
    ARPIAppResource_TypeEnum_Property = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Property" withInt:6];
    ARPIAppResource_TypeEnum_Database = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Database" withInt:7];
    ARPIAppResource_TypeEnum_Other = [[ARPIAppResource_TypeEnum alloc] initWithNSString:@"Other" withInt:8];
    ARPIAppResource_TypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppResource_TypeEnum_values count:9 type:[IOSClass classWithClass:[ARPIAppResource_TypeEnum class]]];
}

+ (ARPIAppResource_TypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 9; i++) {
    ARPIAppResource_TypeEnum *e = ARPIAppResource_TypeEnum_values[i];
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
    { "Html", "Html", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Html,  },
    { "Css", "Css", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Css,  },
    { "JavaScript", "JavaScript", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_JavaScript,  },
    { "Image", "Image", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Image,  },
    { "Video", "Video", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Video,  },
    { "Audio", "Audio", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Audio,  },
    { "Property", "Property", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Property,  },
    { "Database", "Database", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Database,  },
    { "Other", "Other", 0x4019, "Lme.adaptive.arp.api.IAppResource$Type;", &ARPIAppResource_TypeEnum_Other,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppResource$Type;"};
  static J2ObjcClassInfo _ARPIAppResource_TypeEnum = { "Type", "me.adaptive.arp.api", "IAppResource", 0x4019, 1, methods, 9, fields, 1, superclass_type_args};
  return &_ARPIAppResource_TypeEnum;
}

@end

BOOL ARPIAppResource_FormatEnum_initialized = NO;

ARPIAppResource_FormatEnum *ARPIAppResource_FormatEnum_values[4];

@implementation ARPIAppResource_FormatEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppResource_FormatEnum class]) {
    ARPIAppResource_FormatEnum_Raw = [[ARPIAppResource_FormatEnum alloc] initWithNSString:@"Raw" withInt:0];
    ARPIAppResource_FormatEnum_Compressed = [[ARPIAppResource_FormatEnum alloc] initWithNSString:@"Compressed" withInt:1];
    ARPIAppResource_FormatEnum_Encrypted = [[ARPIAppResource_FormatEnum alloc] initWithNSString:@"Encrypted" withInt:2];
    ARPIAppResource_FormatEnum_EncryptedCompressed = [[ARPIAppResource_FormatEnum alloc] initWithNSString:@"EncryptedCompressed" withInt:3];
    ARPIAppResource_FormatEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppResource_FormatEnum_values count:4 type:[IOSClass classWithClass:[ARPIAppResource_FormatEnum class]]];
}

+ (ARPIAppResource_FormatEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIAppResource_FormatEnum *e = ARPIAppResource_FormatEnum_values[i];
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
    { "Raw", "Raw", 0x4019, "Lme.adaptive.arp.api.IAppResource$Format;", &ARPIAppResource_FormatEnum_Raw,  },
    { "Compressed", "Compressed", 0x4019, "Lme.adaptive.arp.api.IAppResource$Format;", &ARPIAppResource_FormatEnum_Compressed,  },
    { "Encrypted", "Encrypted", 0x4019, "Lme.adaptive.arp.api.IAppResource$Format;", &ARPIAppResource_FormatEnum_Encrypted,  },
    { "EncryptedCompressed", "EncryptedCompressed", 0x4019, "Lme.adaptive.arp.api.IAppResource$Format;", &ARPIAppResource_FormatEnum_EncryptedCompressed,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppResource$Format;"};
  static J2ObjcClassInfo _ARPIAppResource_FormatEnum = { "Format", "me.adaptive.arp.api", "IAppResource", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIAppResource_FormatEnum;
}

@end

BOOL ARPIAppResource_PayloadEnum_initialized = NO;

ARPIAppResource_PayloadEnum *ARPIAppResource_PayloadEnum_values[3];

@implementation ARPIAppResource_PayloadEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIAppResource_PayloadEnum class]) {
    ARPIAppResource_PayloadEnum_Default = [[ARPIAppResource_PayloadEnum alloc] initWithNSString:@"Default" withInt:0];
    ARPIAppResource_PayloadEnum_Embedded = [[ARPIAppResource_PayloadEnum alloc] initWithNSString:@"Embedded" withInt:1];
    ARPIAppResource_PayloadEnum_Linked = [[ARPIAppResource_PayloadEnum alloc] initWithNSString:@"Linked" withInt:2];
    ARPIAppResource_PayloadEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIAppResource_PayloadEnum_values count:3 type:[IOSClass classWithClass:[ARPIAppResource_PayloadEnum class]]];
}

+ (ARPIAppResource_PayloadEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 3; i++) {
    ARPIAppResource_PayloadEnum *e = ARPIAppResource_PayloadEnum_values[i];
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
    { "Default", "Default", 0x4019, "Lme.adaptive.arp.api.IAppResource$Payload;", &ARPIAppResource_PayloadEnum_Default,  },
    { "Embedded", "Embedded", 0x4019, "Lme.adaptive.arp.api.IAppResource$Payload;", &ARPIAppResource_PayloadEnum_Embedded,  },
    { "Linked", "Linked", 0x4019, "Lme.adaptive.arp.api.IAppResource$Payload;", &ARPIAppResource_PayloadEnum_Linked,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IAppResource$Payload;"};
  static J2ObjcClassInfo _ARPIAppResource_PayloadEnum = { "Payload", "me.adaptive.arp.api", "IAppResource", 0x4019, 1, methods, 3, fields, 1, superclass_type_args};
  return &_ARPIAppResource_PayloadEnum;
}

@end
