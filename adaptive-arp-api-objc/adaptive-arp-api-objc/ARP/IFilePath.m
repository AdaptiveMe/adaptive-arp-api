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
//  source: tmp/adaptive-arp-api-java/ARP/src/me/adaptive/arp/api/IFilePath.java
//
//

#include "IFile.h"
#include "IFilePath.h"
#include "IFileSystem.h"
#include "IOSClass.h"
#include "java/lang/IllegalArgumentException.h"

@interface ARPIFilePath : NSObject
@end

@implementation ARPIFilePath

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "getFileSystem", NULL, "Lme.adaptive.arp.api.IFileSystem;", 0x401, NULL },
    { "isAbsolute", NULL, "Z", 0x401, NULL },
    { "getRoot", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getFileName", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getParent", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "getNameCount", NULL, "I", 0x401, NULL },
    { "getNameWithInt:", "getName", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "startsWithWithARPIFilePath:", "startsWith", "Z", 0x401, NULL },
    { "startsWithWithNSString:", "startsWith", "Z", 0x401, NULL },
    { "endsWithWithARPIFilePath:", "endsWith", "Z", 0x401, NULL },
    { "endsWithWithNSString:", "endsWith", "Z", 0x401, NULL },
    { "normalize", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveWithARPIFilePath:", "resolve", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveWithNSString:", "resolve", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveSiblingWithARPIFilePath:", "resolveSibling", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "resolveSiblingWithNSString:", "resolveSibling", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "relativizeWithARPIFilePath:", "relativize", "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "toAbsolutePath", NULL, "Lme.adaptive.arp.api.IFilePath;", 0x401, NULL },
    { "toFile", NULL, "Lme.adaptive.arp.api.IFile;", 0x401, NULL },
    { "equalPathWithARPIFilePath:", "equalPath", "Z", 0x401, NULL },
    { "description", "toString", "Ljava.lang.String;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIFilePath = { "IFilePath", "me.adaptive.arp.api", NULL, 0x201, 21, methods, 0, NULL, 0, NULL};
  return &_ARPIFilePath;
}

@end

BOOL ARPIFilePath_StorageTypeEnum_initialized = NO;

ARPIFilePath_StorageTypeEnum *ARPIFilePath_StorageTypeEnum_values[4];

@implementation ARPIFilePath_StorageTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFilePath_StorageTypeEnum class]) {
    ARPIFilePath_StorageTypeEnum_Internal = [[ARPIFilePath_StorageTypeEnum alloc] initWithNSString:@"Internal" withInt:0];
    ARPIFilePath_StorageTypeEnum_Remote = [[ARPIFilePath_StorageTypeEnum alloc] initWithNSString:@"Remote" withInt:1];
    ARPIFilePath_StorageTypeEnum_Isolated = [[ARPIFilePath_StorageTypeEnum alloc] initWithNSString:@"Isolated" withInt:2];
    ARPIFilePath_StorageTypeEnum_External = [[ARPIFilePath_StorageTypeEnum alloc] initWithNSString:@"External" withInt:3];
    ARPIFilePath_StorageTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFilePath_StorageTypeEnum_values count:4 type:[IOSClass classWithClass:[ARPIFilePath_StorageTypeEnum class]]];
}

+ (ARPIFilePath_StorageTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 4; i++) {
    ARPIFilePath_StorageTypeEnum *e = ARPIFilePath_StorageTypeEnum_values[i];
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
    { "Internal", "Internal", 0x4019, "Lme.adaptive.arp.api.IFilePath$StorageType;", &ARPIFilePath_StorageTypeEnum_Internal,  },
    { "Remote", "Remote", 0x4019, "Lme.adaptive.arp.api.IFilePath$StorageType;", &ARPIFilePath_StorageTypeEnum_Remote,  },
    { "Isolated", "Isolated", 0x4019, "Lme.adaptive.arp.api.IFilePath$StorageType;", &ARPIFilePath_StorageTypeEnum_Isolated,  },
    { "External", "External", 0x4019, "Lme.adaptive.arp.api.IFilePath$StorageType;", &ARPIFilePath_StorageTypeEnum_External,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFilePath$StorageType;"};
  static J2ObjcClassInfo _ARPIFilePath_StorageTypeEnum = { "StorageType", "me.adaptive.arp.api", "IFilePath", 0x4019, 1, methods, 4, fields, 1, superclass_type_args};
  return &_ARPIFilePath_StorageTypeEnum;
}

@end

BOOL ARPIFilePath_FileTypeEnum_initialized = NO;

ARPIFilePath_FileTypeEnum *ARPIFilePath_FileTypeEnum_values[2];

@implementation ARPIFilePath_FileTypeEnum

- (id)copyWithZone:(NSZone *)zone {
  return self;
}

- (id)initWithNSString:(NSString *)__name withInt:(int)__ordinal {
  return [super initWithNSString:__name withInt:__ordinal];
}

+ (void)initialize {
  if (self == [ARPIFilePath_FileTypeEnum class]) {
    ARPIFilePath_FileTypeEnum_Directory = [[ARPIFilePath_FileTypeEnum alloc] initWithNSString:@"Directory" withInt:0];
    ARPIFilePath_FileTypeEnum_File = [[ARPIFilePath_FileTypeEnum alloc] initWithNSString:@"File" withInt:1];
    ARPIFilePath_FileTypeEnum_initialized = YES;
  }
}

+ (IOSObjectArray *)values {
  return [IOSObjectArray arrayWithObjects:ARPIFilePath_FileTypeEnum_values count:2 type:[IOSClass classWithClass:[ARPIFilePath_FileTypeEnum class]]];
}

+ (ARPIFilePath_FileTypeEnum *)valueOfWithNSString:(NSString *)name {
  for (int i = 0; i < 2; i++) {
    ARPIFilePath_FileTypeEnum *e = ARPIFilePath_FileTypeEnum_values[i];
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
    { "Directory", "Directory", 0x4019, "Lme.adaptive.arp.api.IFilePath$FileType;", &ARPIFilePath_FileTypeEnum_Directory,  },
    { "File", "File", 0x4019, "Lme.adaptive.arp.api.IFilePath$FileType;", &ARPIFilePath_FileTypeEnum_File,  },
  };
  static const char *superclass_type_args[] = {"Lme.adaptive.arp.api.IFilePath$FileType;"};
  static J2ObjcClassInfo _ARPIFilePath_FileTypeEnum = { "FileType", "me.adaptive.arp.api", "IFilePath", 0x4019, 1, methods, 2, fields, 1, superclass_type_args};
  return &_ARPIFilePath_FileTypeEnum;
}

@end
