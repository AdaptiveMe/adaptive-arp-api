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

#ifndef _ARPIAppResource_H_
#define _ARPIAppResource_H_

@class ARPIAppResource_FormatEnum;
@class ARPIAppResource_PayloadEnum;
@class ARPIAppResource_TypeEnum;
@class IOSByteArray;

#import "JreEmulation.h"
#include "IAdaptiveRP.h"
#include "java/lang/Enum.h"

@protocol ARPIAppResource < ARPIAdaptiveRP, NSObject, JavaObject >
- (NSString *)getName;

- (NSString *)getPath;

- (NSString *)getMimetype;

- (ARPIAppResource_TypeEnum *)getType;

- (ARPIAppResource_FormatEnum *)getFormat;

- (ARPIAppResource_PayloadEnum *)geType;

- (long long int)getSize;

- (long long int)getSizeStored;

- (long long int)getTimestamp;

- (NSString *)getMd5;

- (NSString *)getUuid;

- (IOSByteArray *)getData;

- (IOSByteArray *)getDataStored;

- (NSString *)getDataPathLinked;

@end

__attribute__((always_inline)) inline void ARPIAppResource_init() {}

#define MeAdaptiveArpApiIAppResource ARPIAppResource

typedef enum {
  ARPIAppResource_Type_Html = 0,
  ARPIAppResource_Type_Css = 1,
  ARPIAppResource_Type_JavaScript = 2,
  ARPIAppResource_Type_Image = 3,
  ARPIAppResource_Type_Video = 4,
  ARPIAppResource_Type_Audio = 5,
  ARPIAppResource_Type_Property = 6,
  ARPIAppResource_Type_Database = 7,
  ARPIAppResource_Type_Other = 8,
} ARPIAppResource_Type;

@interface ARPIAppResource_TypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppResource_TypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppResource_TypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppResource_TypeEnum)

FOUNDATION_EXPORT ARPIAppResource_TypeEnum *ARPIAppResource_TypeEnum_values[];

#define ARPIAppResource_TypeEnum_Html ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Html]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Html, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Css ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Css]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Css, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_JavaScript ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_JavaScript]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, JavaScript, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Image ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Image]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Image, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Video ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Video]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Video, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Audio ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Audio]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Audio, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Property ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Property]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Property, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Database ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Database]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Database, ARPIAppResource_TypeEnum *)

#define ARPIAppResource_TypeEnum_Other ARPIAppResource_TypeEnum_values[ARPIAppResource_Type_Other]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_TypeEnum, Other, ARPIAppResource_TypeEnum *)

typedef enum {
  ARPIAppResource_Format_Raw = 0,
  ARPIAppResource_Format_Compressed = 1,
  ARPIAppResource_Format_Encrypted = 2,
  ARPIAppResource_Format_EncryptedCompressed = 3,
} ARPIAppResource_Format;

@interface ARPIAppResource_FormatEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppResource_FormatEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppResource_FormatEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppResource_FormatEnum)

FOUNDATION_EXPORT ARPIAppResource_FormatEnum *ARPIAppResource_FormatEnum_values[];

#define ARPIAppResource_FormatEnum_Raw ARPIAppResource_FormatEnum_values[ARPIAppResource_Format_Raw]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_FormatEnum, Raw, ARPIAppResource_FormatEnum *)

#define ARPIAppResource_FormatEnum_Compressed ARPIAppResource_FormatEnum_values[ARPIAppResource_Format_Compressed]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_FormatEnum, Compressed, ARPIAppResource_FormatEnum *)

#define ARPIAppResource_FormatEnum_Encrypted ARPIAppResource_FormatEnum_values[ARPIAppResource_Format_Encrypted]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_FormatEnum, Encrypted, ARPIAppResource_FormatEnum *)

#define ARPIAppResource_FormatEnum_EncryptedCompressed ARPIAppResource_FormatEnum_values[ARPIAppResource_Format_EncryptedCompressed]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_FormatEnum, EncryptedCompressed, ARPIAppResource_FormatEnum *)

typedef enum {
  ARPIAppResource_Payload_Default = 0,
  ARPIAppResource_Payload_Embedded = 1,
  ARPIAppResource_Payload_Linked = 2,
} ARPIAppResource_Payload;

@interface ARPIAppResource_PayloadEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIAppResource_PayloadEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIAppResource_PayloadEnum_initialized;
J2OBJC_STATIC_INIT(ARPIAppResource_PayloadEnum)

FOUNDATION_EXPORT ARPIAppResource_PayloadEnum *ARPIAppResource_PayloadEnum_values[];

#define ARPIAppResource_PayloadEnum_Default ARPIAppResource_PayloadEnum_values[ARPIAppResource_Payload_Default]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_PayloadEnum, Default, ARPIAppResource_PayloadEnum *)

#define ARPIAppResource_PayloadEnum_Embedded ARPIAppResource_PayloadEnum_values[ARPIAppResource_Payload_Embedded]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_PayloadEnum, Embedded, ARPIAppResource_PayloadEnum *)

#define ARPIAppResource_PayloadEnum_Linked ARPIAppResource_PayloadEnum_values[ARPIAppResource_Payload_Linked]
J2OBJC_STATIC_FIELD_GETTER(ARPIAppResource_PayloadEnum, Linked, ARPIAppResource_PayloadEnum *)

#endif // _ARPIAppResource_H_
