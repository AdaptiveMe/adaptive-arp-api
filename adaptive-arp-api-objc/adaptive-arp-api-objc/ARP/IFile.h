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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFile.java
//
//

#ifndef _ARPIFile_H_
#define _ARPIFile_H_

@class IOSByteArray;
@protocol ARPIFileDataResultCallback;
@protocol ARPIFileListResultCallback;
@protocol ARPIFileResultCallback;

#import "JreEmulation.h"
#include "IFilePath.h"
#include "java/lang/Enum.h"

@protocol ARPIFile < ARPIFilePath, NSObject, JavaObject >
- (BOOL)isDirectory;

- (BOOL)exists;

- (BOOL)delete__;

- (BOOL)delete__WithBoolean:(BOOL)cascade;

- (void)createWithNSString:(NSString *)name
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (void)createWithNSString:(NSString *)path
              withNSString:(NSString *)name
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (BOOL)mkDir;

- (BOOL)mkDirWithBoolean:(BOOL)recursive;

- (void)listFilesWithARPIFileListResultCallback:(id<ARPIFileListResultCallback>)callback;

- (void)listFilesWithNSString:(NSString *)regex
withARPIFileListResultCallback:(id<ARPIFileListResultCallback>)callback;

- (long long int)getSize;

- (NSString *)getName;

- (NSString *)getPath;

- (long long int)getDateCreated;

- (long long int)getDateModified;

- (void)getContentWithARPIFileDataResultCallback:(id<ARPIFileDataResultCallback>)callback;

- (void)setContentWithByteArray:(IOSByteArray *)content
 withARPIFileDataResultCallback:(id<ARPIFileDataResultCallback>)callback;

- (BOOL)canWrite;

- (BOOL)canRead;

- (void)moveWithARPIFile:(id<ARPIFile>)newFile
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (void)moveWithARPIFile:(id<ARPIFile>)newFile
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback
             withBoolean:(BOOL)overwrite;

- (void)moveWithARPIFile:(id<ARPIFile>)newFile
             withBoolean:(BOOL)createPath
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback;

- (void)moveWithARPIFile:(id<ARPIFile>)newFile
             withBoolean:(BOOL)createPath
withARPIFileResultCallback:(id<ARPIFileResultCallback>)callback
             withBoolean:(BOOL)overwrite;

- (id<ARPIFilePath>)toPath;

@end

__attribute__((always_inline)) inline void ARPIFile_init() {}

#define MeAdaptiveArpApiIFile ARPIFile

typedef enum {
  ARPIFile_StorageType_Internal = 0,
  ARPIFile_StorageType_Remote = 1,
  ARPIFile_StorageType_Isolated = 2,
  ARPIFile_StorageType_External = 3,
} ARPIFile_StorageType;

@interface ARPIFile_StorageTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFile_StorageTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFile_StorageTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFile_StorageTypeEnum)

FOUNDATION_EXPORT ARPIFile_StorageTypeEnum *ARPIFile_StorageTypeEnum_values[];

#define ARPIFile_StorageTypeEnum_Internal ARPIFile_StorageTypeEnum_values[ARPIFile_StorageType_Internal]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_StorageTypeEnum, Internal, ARPIFile_StorageTypeEnum *)

#define ARPIFile_StorageTypeEnum_Remote ARPIFile_StorageTypeEnum_values[ARPIFile_StorageType_Remote]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_StorageTypeEnum, Remote, ARPIFile_StorageTypeEnum *)

#define ARPIFile_StorageTypeEnum_Isolated ARPIFile_StorageTypeEnum_values[ARPIFile_StorageType_Isolated]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_StorageTypeEnum, Isolated, ARPIFile_StorageTypeEnum *)

#define ARPIFile_StorageTypeEnum_External ARPIFile_StorageTypeEnum_values[ARPIFile_StorageType_External]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_StorageTypeEnum, External, ARPIFile_StorageTypeEnum *)

typedef enum {
  ARPIFile_FileType_Directory = 0,
  ARPIFile_FileType_File = 1,
} ARPIFile_FileType;

@interface ARPIFile_FileTypeEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFile_FileTypeEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFile_FileTypeEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFile_FileTypeEnum)

FOUNDATION_EXPORT ARPIFile_FileTypeEnum *ARPIFile_FileTypeEnum_values[];

#define ARPIFile_FileTypeEnum_Directory ARPIFile_FileTypeEnum_values[ARPIFile_FileType_Directory]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_FileTypeEnum, Directory, ARPIFile_FileTypeEnum *)

#define ARPIFile_FileTypeEnum_File ARPIFile_FileTypeEnum_values[ARPIFile_FileType_File]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_FileTypeEnum, File, ARPIFile_FileTypeEnum *)

typedef enum {
  ARPIFile_FileSecurity_Default = 0,
  ARPIFile_FileSecurity_Encrypted = 1,
} ARPIFile_FileSecurity;

@interface ARPIFile_FileSecurityEnum : JavaLangEnum < NSCopying > {
}
+ (IOSObjectArray *)values;
+ (ARPIFile_FileSecurityEnum *)valueOfWithNSString:(NSString *)name;
- (id)copyWithZone:(NSZone *)zone;

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal;
@end

FOUNDATION_EXPORT BOOL ARPIFile_FileSecurityEnum_initialized;
J2OBJC_STATIC_INIT(ARPIFile_FileSecurityEnum)

FOUNDATION_EXPORT ARPIFile_FileSecurityEnum *ARPIFile_FileSecurityEnum_values[];

#define ARPIFile_FileSecurityEnum_Default ARPIFile_FileSecurityEnum_values[ARPIFile_FileSecurity_Default]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_FileSecurityEnum, Default, ARPIFile_FileSecurityEnum *)

#define ARPIFile_FileSecurityEnum_Encrypted ARPIFile_FileSecurityEnum_values[ARPIFile_FileSecurity_Encrypted]
J2OBJC_STATIC_FIELD_GETTER(ARPIFile_FileSecurityEnum, Encrypted, ARPIFile_FileSecurityEnum *)

#endif // _ARPIFile_H_
