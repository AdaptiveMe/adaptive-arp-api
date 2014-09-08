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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppServerManager.java
//
//

#include "IAppServer.h"
#include "IAppServerListener.h"
#include "IAppServerManager.h"
#include "IOSObjectArray.h"

@interface ARPIAppServerManager : NSObject
@end

@implementation ARPIAppServerManager

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "addServerListenerWithARPIAppServerListener:", "addServerListener", "V", 0x401, NULL },
    { "removeServerListenerWithARPIAppServerListener:", "removeServerListener", "V", 0x401, NULL },
    { "removeServerListeners", NULL, "V", 0x401, NULL },
    { "startServer", NULL, "V", 0x401, NULL },
    { "stopServerWithARPIAppServer:", "stopServer", "V", 0x401, NULL },
    { "pauseServerWithARPIAppServer:", "pauseServer", "V", 0x401, NULL },
    { "resumeServerWithARPIAppServer:", "resumeServer", "V", 0x401, NULL },
    { "stopServers", NULL, "V", 0x401, NULL },
    { "getServers", NULL, "[Lme.adaptive.arp.api.IAppServer;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAppServerManager = { "IAppServerManager", "me.adaptive.arp.api", NULL, 0x201, 9, methods, 0, NULL, 0, NULL};
  return &_ARPIAppServerManager;
}

@end