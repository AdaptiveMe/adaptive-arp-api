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
//  source: ../../../adaptive-arp-api-java/arp-api-specs/src/main/java/me/adaptive/arp/api/IAppRegistry.java
//
//

#include "IAnalytics.h"
#include "IAppContext.h"
#include "IAppContextWebview.h"
#include "IAppRegistry.h"
#include "IAppResourceHandler.h"
#include "ICapabilities.h"
#include "IDevice.h"
#include "IDisplay.h"
#include "IGlobalization.h"
#include "ILifecycle.h"
#include "IManagement.h"
#include "IOS.h"
#include "IPrinting.h"
#include "IRuntime.h"
#include "ISettings.h"
#include "IUpdate.h"

@interface ARPIAppRegistry : NSObject
@end

@implementation ARPIAppRegistry

+ (J2ObjcClassInfo *)__metadata {
  static J2ObjcMethodInfo methods[] = {
    { "getPlatformContext", NULL, "Lme.adaptive.arp.api.IAppContext;", 0x401, NULL },
    { "getPlatformContextWeb", NULL, "Lme.adaptive.arp.api.IAppContextWebview;", 0x401, NULL },
    { "getPlatformResourceHandler", NULL, "Lme.adaptive.arp.api.IAppResourceHandler;", 0x401, NULL },
    { "getSystemCapabilities", NULL, "Lme.adaptive.arp.api.ICapabilities;", 0x401, NULL },
    { "getSystemDevice", NULL, "Lme.adaptive.arp.api.IDevice;", 0x401, NULL },
    { "getSystemDisplay", NULL, "Lme.adaptive.arp.api.IDisplay;", 0x401, NULL },
    { "getSystemOS", NULL, "Lme.adaptive.arp.api.IOS;", 0x401, NULL },
    { "getSystemRuntime", NULL, "Lme.adaptive.arp.api.IRuntime;", 0x401, NULL },
    { "getApplicationAnalytics", NULL, "Lme.adaptive.arp.api.IAnalytics;", 0x401, NULL },
    { "getApplicationGlobalization", NULL, "Lme.adaptive.arp.api.IGlobalization;", 0x401, NULL },
    { "getApplicationLifecycle", NULL, "Lme.adaptive.arp.api.ILifecycle;", 0x401, NULL },
    { "getApplicationManagement", NULL, "Lme.adaptive.arp.api.IManagement;", 0x401, NULL },
    { "getApplicationPrinting", NULL, "Lme.adaptive.arp.api.IPrinting;", 0x401, NULL },
    { "getApplicationSettings", NULL, "Lme.adaptive.arp.api.ISettings;", 0x401, NULL },
    { "getApplicationUpdate", NULL, "Lme.adaptive.arp.api.IUpdate;", 0x401, NULL },
  };
  static J2ObjcClassInfo _ARPIAppRegistry = { "IAppRegistry", "me.adaptive.arp.api", NULL, 0x201, 15, methods, 0, NULL, 0, NULL};
  return &_ARPIAppRegistry;
}

@end
