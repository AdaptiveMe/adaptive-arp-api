/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
   Interface to retrieve auto-registered service implementation references.
   Auto-generated implementation of IAppRegistry specification.
*/
public class AppRegistryBridge implements IAppRegistry {

     /**
        Group of API.
     */
     private IAdaptiveRPGroup apiGroup = IAdaptiveRPGroup.Kernel;

     /**
        API Delegate.
     */
     private IAppRegistry delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public AppRegistryBridge(IAppRegistry delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
        @return IAppRegistry delegate that manages platform specific functions..
     */
     public final IAppRegistry getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IAppRegistry delegate) {
          this.delegate = delegate;
     }

     /**
        Common GsonBuilder.
     */
     private static GsonBuilder singletonGsonBuilder;

     /**
        Singleton instance.
     */
     private static AppRegistryBridge singleton;

     /**
        Get singleton instance.
        @return AppRegistryBridge singleton instance.
     */
     public static final AppRegistryBridge getInstance() {
          if (singleton == null) {
               singleton = new AppRegistryBridge(new AppRegistryDelegate());
          }
          return singleton;
     }

     /**
        Get singleton GsonBuilder instance.
        @return GsonBuilder singleton instance.
     */
     public static final GsonBuilder getJSONInstance() {
          if (singletonGsonBuilder == null) {
               singletonGsonBuilder = new GsonBuilder();
          }
          return singletonGsonBuilder;
     }

     /**
        Returns a reference to the registered AccelerationBridge.

        @return AccelerationBridge reference or null if a bridge of this type is not registered.
     */
     public final AccelerationBridge getAccelerationBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AccelerationBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAccelerationBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAccelerationBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAccelerationBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAccelerationBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered AdsBridge.

        @return AdsBridge reference or null if a bridge of this type is not registered.
     */
     public final AdsBridge getAdsBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AdsBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAdsBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAdsBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAdsBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAdsBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered AlarmBridge.

        @return AlarmBridge reference or null if a bridge of this type is not registered.
     */
     public final AlarmBridge getAlarmBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AlarmBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAlarmBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAlarmBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAlarmBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAlarmBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered AmbientLightBridge.

        @return AmbientLightBridge reference or null if a bridge of this type is not registered.
     */
     public final AmbientLightBridge getAmbientLightBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AmbientLightBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAmbientLightBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAmbientLightBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAmbientLightBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAmbientLightBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered AnalyticsBridge.

        @return AnalyticsBridge reference or null if a bridge of this type is not registered.
     */
     public final AnalyticsBridge getAnalyticsBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AnalyticsBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAnalyticsBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAnalyticsBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAnalyticsBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAnalyticsBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered AudioBridge.

        @return AudioBridge reference or null if a bridge of this type is not registered.
     */
     public final AudioBridge getAudioBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          AudioBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAudioBridge().");

          if (this.delegate != null) {
               result = this.delegate.getAudioBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAudioBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAudioBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered BarcodeBridge.

        @return BarcodeBridge reference or null if a bridge of this type is not registered.
     */
     public final BarcodeBridge getBarcodeBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          BarcodeBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getBarcodeBridge().");

          if (this.delegate != null) {
               result = this.delegate.getBarcodeBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getBarcodeBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getBarcodeBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered BarometerBridge.

        @return BarometerBridge reference or null if a bridge of this type is not registered.
     */
     public final BarometerBridge getBarometerBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          BarometerBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getBarometerBridge().");

          if (this.delegate != null) {
               result = this.delegate.getBarometerBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getBarometerBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getBarometerBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered BluetoothBridge.

        @return BluetoothBridge reference or null if a bridge of this type is not registered.
     */
     public final BluetoothBridge getBluetoothBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          BluetoothBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getBluetoothBridge().");

          if (this.delegate != null) {
               result = this.delegate.getBluetoothBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getBluetoothBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getBluetoothBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered BrowserBridge.

        @return BrowserBridge reference or null if a bridge of this type is not registered.
     */
     public final BrowserBridge getBrowserBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          BrowserBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getBrowserBridge().");

          if (this.delegate != null) {
               result = this.delegate.getBrowserBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getBrowserBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getBrowserBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CalendarBridge.

        @return CalendarBridge reference or null if a bridge of this type is not registered.
     */
     public final CalendarBridge getCalendarBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CalendarBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCalendarBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCalendarBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCalendarBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCalendarBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CameraBridge.

        @return CameraBridge reference or null if a bridge of this type is not registered.
     */
     public final CameraBridge getCameraBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CameraBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCameraBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCameraBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCameraBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCameraBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CapabilitiesBridge.

        @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
     */
     public final CapabilitiesBridge getCapabilitiesBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CapabilitiesBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCapabilitiesBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCapabilitiesBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCapabilitiesBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCapabilitiesBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CloudBridge.

        @return CloudBridge reference or null if a bridge of this type is not registered.
     */
     public final CloudBridge getCloudBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CloudBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCloudBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCloudBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCloudBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCloudBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CompressionBridge.

        @return CompressionBridge reference or null if a bridge of this type is not registered.
     */
     public final CompressionBridge getCompressionBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CompressionBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCompressionBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCompressionBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCompressionBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCompressionBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ConcurrentBridge.

        @return ConcurrentBridge reference or null if a bridge of this type is not registered.
     */
     public final ConcurrentBridge getConcurrentBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ConcurrentBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getConcurrentBridge().");

          if (this.delegate != null) {
               result = this.delegate.getConcurrentBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getConcurrentBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getConcurrentBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ContactBridge.

        @return ContactBridge reference or null if a bridge of this type is not registered.
     */
     public final ContactBridge getContactBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ContactBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getContactBridge().");

          if (this.delegate != null) {
               result = this.delegate.getContactBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getContactBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getContactBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered CryptoBridge.

        @return CryptoBridge reference or null if a bridge of this type is not registered.
     */
     public final CryptoBridge getCryptoBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          CryptoBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getCryptoBridge().");

          if (this.delegate != null) {
               result = this.delegate.getCryptoBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getCryptoBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getCryptoBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered DataStreamBridge.

        @return DataStreamBridge reference or null if a bridge of this type is not registered.
     */
     public final DataStreamBridge getDataStreamBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          DataStreamBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDataStreamBridge().");

          if (this.delegate != null) {
               result = this.delegate.getDataStreamBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDataStreamBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDataStreamBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered DatabaseBridge.

        @return DatabaseBridge reference or null if a bridge of this type is not registered.
     */
     public final DatabaseBridge getDatabaseBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          DatabaseBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDatabaseBridge().");

          if (this.delegate != null) {
               result = this.delegate.getDatabaseBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDatabaseBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDatabaseBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered DesktopBridge.

        @return DesktopBridge reference or null if a bridge of this type is not registered.
     */
     public final DesktopBridge getDesktopBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          DesktopBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDesktopBridge().");

          if (this.delegate != null) {
               result = this.delegate.getDesktopBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDesktopBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDesktopBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered DeviceBridge.

        @return DeviceBridge reference or null if a bridge of this type is not registered.
     */
     public final DeviceBridge getDeviceBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          DeviceBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDeviceBridge().");

          if (this.delegate != null) {
               result = this.delegate.getDeviceBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDeviceBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDeviceBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered DisplayBridge.

        @return DisplayBridge reference or null if a bridge of this type is not registered.
     */
     public final DisplayBridge getDisplayBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          DisplayBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getDisplayBridge().");

          if (this.delegate != null) {
               result = this.delegate.getDisplayBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getDisplayBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getDisplayBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered FacebookBridge.

        @return FacebookBridge reference or null if a bridge of this type is not registered.
     */
     public final FacebookBridge getFacebookBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          FacebookBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getFacebookBridge().");

          if (this.delegate != null) {
               result = this.delegate.getFacebookBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getFacebookBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getFacebookBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered FileBridge.

        @return FileBridge reference or null if a bridge of this type is not registered.
     */
     public final FileBridge getFileBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          FileBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getFileBridge().");

          if (this.delegate != null) {
               result = this.delegate.getFileBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getFileBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getFileBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered FileSystemBridge.

        @return FileSystemBridge reference or null if a bridge of this type is not registered.
     */
     public final FileSystemBridge getFileSystemBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          FileSystemBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getFileSystemBridge().");

          if (this.delegate != null) {
               result = this.delegate.getFileSystemBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getFileSystemBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getFileSystemBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered GeolocationBridge.

        @return GeolocationBridge reference or null if a bridge of this type is not registered.
     */
     public final GeolocationBridge getGeolocationBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          GeolocationBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getGeolocationBridge().");

          if (this.delegate != null) {
               result = this.delegate.getGeolocationBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getGeolocationBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getGeolocationBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered GlobalizationBridge.

        @return GlobalizationBridge reference or null if a bridge of this type is not registered.
     */
     public final GlobalizationBridge getGlobalizationBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          GlobalizationBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getGlobalizationBridge().");

          if (this.delegate != null) {
               result = this.delegate.getGlobalizationBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getGlobalizationBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getGlobalizationBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered GooglePlusBridge.

        @return GooglePlusBridge reference or null if a bridge of this type is not registered.
     */
     public final GooglePlusBridge getGooglePlusBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          GooglePlusBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getGooglePlusBridge().");

          if (this.delegate != null) {
               result = this.delegate.getGooglePlusBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getGooglePlusBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getGooglePlusBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered GyroscopeBridge.

        @return GyroscopeBridge reference or null if a bridge of this type is not registered.
     */
     public final GyroscopeBridge getGyroscopeBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          GyroscopeBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getGyroscopeBridge().");

          if (this.delegate != null) {
               result = this.delegate.getGyroscopeBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getGyroscopeBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getGyroscopeBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ImagingBridge.

        @return ImagingBridge reference or null if a bridge of this type is not registered.
     */
     public final ImagingBridge getImagingBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ImagingBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getImagingBridge().");

          if (this.delegate != null) {
               result = this.delegate.getImagingBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getImagingBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getImagingBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered InternalStorageBridge.

        @return InternalStorageBridge reference or null if a bridge of this type is not registered.
     */
     public final InternalStorageBridge getInternalStorageBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          InternalStorageBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getInternalStorageBridge().");

          if (this.delegate != null) {
               result = this.delegate.getInternalStorageBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getInternalStorageBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getInternalStorageBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered LifecycleBridge.

        @return LifecycleBridge reference or null if a bridge of this type is not registered.
     */
     public final LifecycleBridge getLifecycleBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          LifecycleBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getLifecycleBridge().");

          if (this.delegate != null) {
               result = this.delegate.getLifecycleBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getLifecycleBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getLifecycleBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered LinkedInBridge.

        @return LinkedInBridge reference or null if a bridge of this type is not registered.
     */
     public final LinkedInBridge getLinkedInBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          LinkedInBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getLinkedInBridge().");

          if (this.delegate != null) {
               result = this.delegate.getLinkedInBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getLinkedInBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getLinkedInBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered LoggingBridge.

        @return LoggingBridge reference or null if a bridge of this type is not registered.
     */
     public final LoggingBridge getLoggingBridge() {
          LoggingBridge result = null;

          if (this.delegate != null) {
               result = this.delegate.getLoggingBridge();
          }
          return result;          
     }

     /**
        Returns a reference to the registered MagnetometerBridge.

        @return MagnetometerBridge reference or null if a bridge of this type is not registered.
     */
     public final MagnetometerBridge getMagnetometerBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          MagnetometerBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getMagnetometerBridge().");

          if (this.delegate != null) {
               result = this.delegate.getMagnetometerBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getMagnetometerBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getMagnetometerBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered MailBridge.

        @return MailBridge reference or null if a bridge of this type is not registered.
     */
     public final MailBridge getMailBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          MailBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getMailBridge().");

          if (this.delegate != null) {
               result = this.delegate.getMailBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getMailBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getMailBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ManagementBridge.

        @return ManagementBridge reference or null if a bridge of this type is not registered.
     */
     public final ManagementBridge getManagementBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ManagementBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getManagementBridge().");

          if (this.delegate != null) {
               result = this.delegate.getManagementBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getManagementBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getManagementBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered MapBridge.

        @return MapBridge reference or null if a bridge of this type is not registered.
     */
     public final MapBridge getMapBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          MapBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getMapBridge().");

          if (this.delegate != null) {
               result = this.delegate.getMapBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getMapBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getMapBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered MessagingBridge.

        @return MessagingBridge reference or null if a bridge of this type is not registered.
     */
     public final MessagingBridge getMessagingBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          MessagingBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getMessagingBridge().");

          if (this.delegate != null) {
               result = this.delegate.getMessagingBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getMessagingBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getMessagingBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NFCBridge.

        @return NFCBridge reference or null if a bridge of this type is not registered.
     */
     public final NFCBridge getNFCBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NFCBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNFCBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNFCBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNFCBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNFCBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NetworkInfoBridge.

        @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkInfoBridge getNetworkInfoBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NetworkInfoBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNetworkInfoBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNetworkInfoBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNetworkInfoBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNetworkInfoBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NetworkNamingBridge.

        @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkNamingBridge getNetworkNamingBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NetworkNamingBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNetworkNamingBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNetworkNamingBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNetworkNamingBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNetworkNamingBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NetworkReachabilityBridge.

        @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkReachabilityBridge getNetworkReachabilityBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NetworkReachabilityBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNetworkReachabilityBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNetworkReachabilityBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNetworkReachabilityBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNetworkReachabilityBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NetworkStatusBridge.

        @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
     */
     public final NetworkStatusBridge getNetworkStatusBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NetworkStatusBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNetworkStatusBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNetworkStatusBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNetworkStatusBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNetworkStatusBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NotificationBridge.

        @return NotificationBridge reference or null if a bridge of this type is not registered.
     */
     public final NotificationBridge getNotificationBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NotificationBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNotificationBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNotificationBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNotificationBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNotificationBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered NotificationLocalBridge.

        @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
     */
     public final NotificationLocalBridge getNotificationLocalBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          NotificationLocalBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getNotificationLocalBridge().");

          if (this.delegate != null) {
               result = this.delegate.getNotificationLocalBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getNotificationLocalBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getNotificationLocalBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered OAuthBridge.

        @return OAuthBridge reference or null if a bridge of this type is not registered.
     */
     public final OAuthBridge getOAuthBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          OAuthBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOAuthBridge().");

          if (this.delegate != null) {
               result = this.delegate.getOAuthBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOAuthBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOAuthBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered OCRBridge.

        @return OCRBridge reference or null if a bridge of this type is not registered.
     */
     public final OCRBridge getOCRBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          OCRBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOCRBridge().");

          if (this.delegate != null) {
               result = this.delegate.getOCRBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOCRBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOCRBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered OSBridge.

        @return OSBridge reference or null if a bridge of this type is not registered.
     */
     public final OSBridge getOSBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          OSBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOSBridge().");

          if (this.delegate != null) {
               result = this.delegate.getOSBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOSBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOSBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered OpenIdBridge.

        @return OpenIdBridge reference or null if a bridge of this type is not registered.
     */
     public final OpenIdBridge getOpenIdBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          OpenIdBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getOpenIdBridge().");

          if (this.delegate != null) {
               result = this.delegate.getOpenIdBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getOpenIdBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getOpenIdBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered PrintingBridge.

        @return PrintingBridge reference or null if a bridge of this type is not registered.
     */
     public final PrintingBridge getPrintingBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          PrintingBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getPrintingBridge().");

          if (this.delegate != null) {
               result = this.delegate.getPrintingBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getPrintingBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getPrintingBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ProximityBridge.

        @return ProximityBridge reference or null if a bridge of this type is not registered.
     */
     public final ProximityBridge getProximityBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ProximityBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getProximityBridge().");

          if (this.delegate != null) {
               result = this.delegate.getProximityBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getProximityBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getProximityBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered QRCodeBridge.

        @return QRCodeBridge reference or null if a bridge of this type is not registered.
     */
     public final QRCodeBridge getQRCodeBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          QRCodeBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getQRCodeBridge().");

          if (this.delegate != null) {
               result = this.delegate.getQRCodeBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getQRCodeBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getQRCodeBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered RSSBridge.

        @return RSSBridge reference or null if a bridge of this type is not registered.
     */
     public final RSSBridge getRSSBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          RSSBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getRSSBridge().");

          if (this.delegate != null) {
               result = this.delegate.getRSSBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getRSSBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getRSSBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered RuntimeBridge.

        @return RuntimeBridge reference or null if a bridge of this type is not registered.
     */
     public final RuntimeBridge getRuntimeBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          RuntimeBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getRuntimeBridge().");

          if (this.delegate != null) {
               result = this.delegate.getRuntimeBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getRuntimeBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getRuntimeBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered SecurityBridge.

        @return SecurityBridge reference or null if a bridge of this type is not registered.
     */
     public final SecurityBridge getSecurityBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          SecurityBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSecurityBridge().");

          if (this.delegate != null) {
               result = this.delegate.getSecurityBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSecurityBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSecurityBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered ServiceBridge.

        @return ServiceBridge reference or null if a bridge of this type is not registered.
     */
     public final ServiceBridge getServiceBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          ServiceBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getServiceBridge().");

          if (this.delegate != null) {
               result = this.delegate.getServiceBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getServiceBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getServiceBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered SettingsBridge.

        @return SettingsBridge reference or null if a bridge of this type is not registered.
     */
     public final SettingsBridge getSettingsBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          SettingsBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSettingsBridge().");

          if (this.delegate != null) {
               result = this.delegate.getSettingsBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSettingsBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSettingsBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered SocketBridge.

        @return SocketBridge reference or null if a bridge of this type is not registered.
     */
     public final SocketBridge getSocketBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          SocketBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getSocketBridge().");

          if (this.delegate != null) {
               result = this.delegate.getSocketBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getSocketBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getSocketBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered StoreBridge.

        @return StoreBridge reference or null if a bridge of this type is not registered.
     */
     public final StoreBridge getStoreBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          StoreBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getStoreBridge().");

          if (this.delegate != null) {
               result = this.delegate.getStoreBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getStoreBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getStoreBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered TelephonyBridge.

        @return TelephonyBridge reference or null if a bridge of this type is not registered.
     */
     public final TelephonyBridge getTelephonyBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          TelephonyBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getTelephonyBridge().");

          if (this.delegate != null) {
               result = this.delegate.getTelephonyBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getTelephonyBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getTelephonyBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered TimerBridge.

        @return TimerBridge reference or null if a bridge of this type is not registered.
     */
     public final TimerBridge getTimerBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          TimerBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getTimerBridge().");

          if (this.delegate != null) {
               result = this.delegate.getTimerBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getTimerBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getTimerBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered TwitterBridge.

        @return TwitterBridge reference or null if a bridge of this type is not registered.
     */
     public final TwitterBridge getTwitterBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          TwitterBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getTwitterBridge().");

          if (this.delegate != null) {
               result = this.delegate.getTwitterBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getTwitterBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getTwitterBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered UIBridge.

        @return UIBridge reference or null if a bridge of this type is not registered.
     */
     public final UIBridge getUIBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          UIBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getUIBridge().");

          if (this.delegate != null) {
               result = this.delegate.getUIBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getUIBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getUIBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered UpdateBridge.

        @return UpdateBridge reference or null if a bridge of this type is not registered.
     */
     public final UpdateBridge getUpdateBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          UpdateBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getUpdateBridge().");

          if (this.delegate != null) {
               result = this.delegate.getUpdateBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getUpdateBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getUpdateBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered VibrationBridge.

        @return VibrationBridge reference or null if a bridge of this type is not registered.
     */
     public final VibrationBridge getVibrationBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          VibrationBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getVibrationBridge().");

          if (this.delegate != null) {
               result = this.delegate.getVibrationBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getVibrationBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getVibrationBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered VideoBridge.

        @return VideoBridge reference or null if a bridge of this type is not registered.
     */
     public final VideoBridge getVideoBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          VideoBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getVideoBridge().");

          if (this.delegate != null) {
               result = this.delegate.getVideoBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getVideoBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getVideoBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered WalletBridge.

        @return WalletBridge reference or null if a bridge of this type is not registered.
     */
     public final WalletBridge getWalletBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          WalletBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getWalletBridge().");

          if (this.delegate != null) {
               result = this.delegate.getWalletBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getWalletBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getWalletBridge'.");
          }
          return result;          
     }

     /**
        Returns a reference to the registered XMLBridge.

        @return XMLBridge reference or null if a bridge of this type is not registered.
     */
     public final XMLBridge getXMLBridge() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          XMLBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getXMLBridge().");

          if (this.delegate != null) {
               result = this.delegate.getXMLBridge();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getXMLBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getXMLBridge'.");
          }
          return result;          
     }

     /**
        Provides a bridge to handle API calls for the given interface name.

        @param bridgeType String with the interface name required.
        @return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.
     */
     public final APIBridge getBridge(String bridgeType) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();
          APIBridge result = null;

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getBridge("+bridgeType+").");

          if (this.delegate != null) {
               result = this.delegate.getBridge(bridgeType);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getBridge' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getBridge'.");
          }
          return result;          
     }

     /**
        Method that returns the API version of the implementation.

        @return API Version string.
        @since ARP1.0
     */
     public String getAPIVersion() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getAPIVersion.");

          String result = null;
          if (this.delegate != null) {
               result = this.delegate.getAPIVersion();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getAPIVersion' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getAPIVersion'.");
          }
          return result;          
     }

     /**
        Returns a reference to the Platform Context

        @return Reference to the platform context
        @since ARP1.0
     */
     public AppContextBridge getPlatformContext() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getPlatformContext.");

          AppContextBridge result = null;
          if (this.delegate != null) {
               result = this.delegate.getPlatformContext();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getPlatformContext' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getPlatformContext'.");
          }
          return result;          
     }

     /**
        Returns a reference to the Webview platform context

        @return Reference to the Webview Context
        @since ARP1.0
     */
     public AppContextWebviewBridge getPlatformContextWeb() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = AppRegistryBridge.getInstance().getLoggingBridge();

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executing getPlatformContextWeb.");

          AppContextWebviewBridge result = null;
          if (this.delegate != null) {
               result = this.delegate.getPlatformContextWeb();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.apiGroup.name(),this.getClass().getSimpleName()+" executed 'getPlatformContextWeb' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.apiGroup.name(),this.getClass().getSimpleName()+" no delegate for 'getPlatformContextWeb'.");
          }
          return result;          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
