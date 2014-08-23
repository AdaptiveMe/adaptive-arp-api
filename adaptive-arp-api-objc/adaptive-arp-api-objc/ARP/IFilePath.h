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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IFilePath.java
//
//

#ifndef _ARPIFilePath_H_
#define _ARPIFilePath_H_

@protocol ARPIFile;
@protocol ARPIFileSystem;

#import "JreEmulation.h"
#include "java/lang/Enum.h"

@protocol ARPIFilePath < NSObject, JavaObject >

- (id<ARPIFileSystem>)getFileSystem;

- (BOOL)isAbsolute;

- (id<ARPIFilePath>)getRoot;

- (id<ARPIFilePath>)getFileName;

- (id<ARPIFilePath>)getParent;

- (int)getNameCount;

- (id<ARPIFilePath>)getNameWithInt:(int)index;

- (BOOL)startsWithWithARPIFilePath:(id<ARPIFilePath>)other;

- (BOOL)startsWithWithNSString:(NSString *)other;

- (BOOL)endsWithWithARPIFilePath:(id<ARPIFilePath>)other;

- (BOOL)endsWithWithNSString:(NSString *)other;

- (BOOL)equalsWithNSString:(NSString *)other;

- (id<ARPIFilePath>)normalize;

- (id<ARPIFilePath>)resolveWithARPIFilePath:(id<ARPIFilePath>)other;

- (id<ARPIFilePath>)resolveWithNSString:(NSString *)other;

- (id<ARPIFilePath>)resolveSiblingWithARPIFilePath:(id<ARPIFilePath>)other;

- (id<ARPIFilePath>)resolveSiblingWithNSString:(NSString *)other;

- (id<ARPIFilePath>)relativizeWithARPIFilePath:(id<ARPIFilePath>)other;

- (id<ARPIFilePath>)toAbsolutePath;

- (id<ARPIFile>)toFile;

- (BOOL)equalPathWithARPIFilePath:(id<ARPIFilePath>)other;

- (NSString *)description;

@end

__attribute__((always_inline)) inline void ARPIFilePath_init() {}

#define MeAdaptiveArpApiIFilePath ARPIFilePath

typedef enum {
  ARPIFilePath_StorageType_Internal = 0,
  ARPIFilePath_StorageType_Remote = 1,
  ARPIFilePath_StorageType_Isolated = 2,
  ARPIFilePath_StorageType_External = 3,
} ARPIFilePath_StorageType;

@interface ARPIFilePath_StorageTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFilePath_StorageTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFilePath_StorageTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFilePath_StorageTypeEnum)

FOUNDATION_EXPORT ARPIFilePath_StorageTypeEnum *ARPIFilePath_StorageTypeEnum_values[];

#define ARPIFilePath_StorageTypeEnum_Internal ARPIFilePath_StorageTypeEnum_values[ARPIFilePath_StorageType_Internal]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_StorageTypeEnum, Internal, ARPIFilePath_StorageTypeEnum *)

#define ARPIFilePath_StorageTypeEnum_Remote ARPIFilePath_StorageTypeEnum_values[ARPIFilePath_StorageType_Remote]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_StorageTypeEnum, Remote, ARPIFilePath_StorageTypeEnum *)

#define ARPIFilePath_StorageTypeEnum_Isolated ARPIFilePath_StorageTypeEnum_values[ARPIFilePath_StorageType_Isolated]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_StorageTypeEnum, Isolated, ARPIFilePath_StorageTypeEnum *)

#define ARPIFilePath_StorageTypeEnum_External ARPIFilePath_StorageTypeEnum_values[ARPIFilePath_StorageType_External]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_StorageTypeEnum, External, ARPIFilePath_StorageTypeEnum *)

typedef enum {
  ARPIFilePath_FileType_Directory = 0,
  ARPIFilePath_FileType_File = 1,
} ARPIFilePath_FileType;

@interface ARPIFilePath_FileTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFilePath_FileTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFilePath_FileTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFilePath_FileTypeEnum)

FOUNDATION_EXPORT ARPIFilePath_FileTypeEnum *ARPIFilePath_FileTypeEnum_values[];

#define ARPIFilePath_FileTypeEnum_Directory ARPIFilePath_FileTypeEnum_values[ARPIFilePath_FileType_Directory]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_FileTypeEnum, Directory, ARPIFilePath_FileTypeEnum *)

#define ARPIFilePath_FileTypeEnum_File ARPIFilePath_FileTypeEnum_values[ARPIFilePath_FileType_File]
J2OBJC_STATIC_FIELD_GETTER(ARPIFilePath_FileTypeEnum, File, ARPIFilePath_FileTypeEnum *)

#endif // _ARPIFilePath_H_
