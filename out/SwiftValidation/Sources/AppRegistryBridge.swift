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

    * @version v2.0.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Interface to retrieve auto-registered service implementation references.
   Auto-generated implementation of IAppRegistry specification.
*/
public class AppRegistryBridge : IAppRegistry {

     /**
        Group of API.
     */
     private var apiGroup : IAdaptiveRPGroup = IAdaptiveRPGroup.Kernel;

     /**
        API Delegate.
     */
     private var delegate : IAppRegistry = nil

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public init(delegate : IAppRegistry) {
          super.init()
          self.delegate = delegate
     }
     /**
        Get the delegate implementation.
        @return IAppRegistry delegate that manages platform specific functions..
     */
     public final func getDelegate() -> IAppRegistry {
          return self.delegate
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final func setDelegate(delegate : IAppRegistry) {
          self.delegate = delegate;
     }

     /**
        Singleton instance.
     */
     class var sharedInstance : AppRegistryBridge {
          struct Static {
               static let instance : AppRegistryBridge = AppRegistryBridge()
          }
          return Static.instance
     }

     /**
        Returns a reference to the registered AccelerationBridge.

        @return AccelerationBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAccelerationBridge() -> Acceleration {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AccelerationBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAccelerationBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAccelerationBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAccelerationBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAccelerationBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered AdsBridge.

        @return AdsBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAdsBridge() -> Ads {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AdsBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAdsBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAdsBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAdsBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAdsBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered AlarmBridge.

        @return AlarmBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAlarmBridge() -> Alarm {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AlarmBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAlarmBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAlarmBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAlarmBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAlarmBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered AmbientLightBridge.

        @return AmbientLightBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAmbientLightBridge() -> AmbientLight {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AmbientLightBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAmbientLightBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAmbientLightBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAmbientLightBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAmbientLightBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered AnalyticsBridge.

        @return AnalyticsBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAnalyticsBridge() -> Analytics {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AnalyticsBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAnalyticsBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAnalyticsBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAnalyticsBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAnalyticsBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered AudioBridge.

        @return AudioBridge reference or null if a bridge of this type is not registered.
     */
     public final func getAudioBridge() -> Audio {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : AudioBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getAudioBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getAudioBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getAudioBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getAudioBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered BarcodeBridge.

        @return BarcodeBridge reference or null if a bridge of this type is not registered.
     */
     public final func getBarcodeBridge() -> Barcode {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : BarcodeBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getBarcodeBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getBarcodeBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getBarcodeBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getBarcodeBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered BarometerBridge.

        @return BarometerBridge reference or null if a bridge of this type is not registered.
     */
     public final func getBarometerBridge() -> Barometer {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : BarometerBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getBarometerBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getBarometerBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getBarometerBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getBarometerBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered BluetoothBridge.

        @return BluetoothBridge reference or null if a bridge of this type is not registered.
     */
     public final func getBluetoothBridge() -> Bluetooth {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : BluetoothBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getBluetoothBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getBluetoothBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getBluetoothBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getBluetoothBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered BrowserBridge.

        @return BrowserBridge reference or null if a bridge of this type is not registered.
     */
     public final func getBrowserBridge() -> Browser {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : BrowserBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getBrowserBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getBrowserBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getBrowserBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getBrowserBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CalendarBridge.

        @return CalendarBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCalendarBridge() -> Calendar {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CalendarBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCalendarBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCalendarBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCalendarBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCalendarBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CameraBridge.

        @return CameraBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCameraBridge() -> Camera {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CameraBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCameraBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCameraBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCameraBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCameraBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CapabilitiesBridge.

        @return CapabilitiesBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCapabilitiesBridge() -> Capabilities {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CapabilitiesBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCapabilitiesBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCapabilitiesBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCapabilitiesBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCapabilitiesBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CloudBridge.

        @return CloudBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCloudBridge() -> Cloud {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CloudBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCloudBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCloudBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCloudBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCloudBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CompressionBridge.

        @return CompressionBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCompressionBridge() -> Compression {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CompressionBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCompressionBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCompressionBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCompressionBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCompressionBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ConcurrentBridge.

        @return ConcurrentBridge reference or null if a bridge of this type is not registered.
     */
     public final func getConcurrentBridge() -> Concurrent {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ConcurrentBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getConcurrentBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getConcurrentBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getConcurrentBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getConcurrentBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ContactBridge.

        @return ContactBridge reference or null if a bridge of this type is not registered.
     */
     public final func getContactBridge() -> Contact {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ContactBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getContactBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getContactBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getContactBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getContactBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered CryptoBridge.

        @return CryptoBridge reference or null if a bridge of this type is not registered.
     */
     public final func getCryptoBridge() -> Crypto {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : CryptoBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getCryptoBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getCryptoBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getCryptoBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getCryptoBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered DataStreamBridge.

        @return DataStreamBridge reference or null if a bridge of this type is not registered.
     */
     public final func getDataStreamBridge() -> DataStream {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : DataStreamBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getDataStreamBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getDataStreamBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getDataStreamBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getDataStreamBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered DatabaseBridge.

        @return DatabaseBridge reference or null if a bridge of this type is not registered.
     */
     public final func getDatabaseBridge() -> Database {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : DatabaseBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getDatabaseBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getDatabaseBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getDatabaseBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getDatabaseBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered DesktopBridge.

        @return DesktopBridge reference or null if a bridge of this type is not registered.
     */
     public final func getDesktopBridge() -> Desktop {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : DesktopBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getDesktopBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getDesktopBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getDesktopBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getDesktopBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered DeviceBridge.

        @return DeviceBridge reference or null if a bridge of this type is not registered.
     */
     public final func getDeviceBridge() -> Device {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : DeviceBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getDeviceBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getDeviceBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getDeviceBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getDeviceBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered DisplayBridge.

        @return DisplayBridge reference or null if a bridge of this type is not registered.
     */
     public final func getDisplayBridge() -> Display {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : DisplayBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getDisplayBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getDisplayBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getDisplayBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getDisplayBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered FacebookBridge.

        @return FacebookBridge reference or null if a bridge of this type is not registered.
     */
     public final func getFacebookBridge() -> Facebook {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : FacebookBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getFacebookBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getFacebookBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getFacebookBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getFacebookBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered FileSystemBridge.

        @return FileSystemBridge reference or null if a bridge of this type is not registered.
     */
     public final func getFileSystemBridge() -> FileSystem {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : FileSystemBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getFileSystemBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getFileSystemBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getFileSystemBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getFileSystemBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered GeolocationBridge.

        @return GeolocationBridge reference or null if a bridge of this type is not registered.
     */
     public final func getGeolocationBridge() -> Geolocation {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : GeolocationBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getGeolocationBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getGeolocationBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getGeolocationBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getGeolocationBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered GlobalizationBridge.

        @return GlobalizationBridge reference or null if a bridge of this type is not registered.
     */
     public final func getGlobalizationBridge() -> Globalization {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : GlobalizationBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getGlobalizationBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getGlobalizationBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getGlobalizationBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getGlobalizationBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered GooglePlusBridge.

        @return GooglePlusBridge reference or null if a bridge of this type is not registered.
     */
     public final func getGooglePlusBridge() -> GooglePlus {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : GooglePlusBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getGooglePlusBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getGooglePlusBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getGooglePlusBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getGooglePlusBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered GyroscopeBridge.

        @return GyroscopeBridge reference or null if a bridge of this type is not registered.
     */
     public final func getGyroscopeBridge() -> Gyroscope {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : GyroscopeBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getGyroscopeBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getGyroscopeBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getGyroscopeBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getGyroscopeBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ImagingBridge.

        @return ImagingBridge reference or null if a bridge of this type is not registered.
     */
     public final func getImagingBridge() -> Imaging {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ImagingBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getImagingBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getImagingBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getImagingBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getImagingBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered InternalStorageBridge.

        @return InternalStorageBridge reference or null if a bridge of this type is not registered.
     */
     public final func getInternalStorageBridge() -> InternalStorage {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : InternalStorageBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getInternalStorageBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getInternalStorageBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getInternalStorageBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getInternalStorageBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered LifecycleBridge.

        @return LifecycleBridge reference or null if a bridge of this type is not registered.
     */
     public final func getLifecycleBridge() -> Lifecycle {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : LifecycleBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getLifecycleBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getLifecycleBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getLifecycleBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getLifecycleBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered LinkedInBridge.

        @return LinkedInBridge reference or null if a bridge of this type is not registered.
     */
     public final func getLinkedInBridge() -> LinkedIn {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : LinkedInBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getLinkedInBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getLinkedInBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getLinkedInBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getLinkedInBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered LoggingBridge.

        @return LoggingBridge reference or null if a bridge of this type is not registered.
     */
     public final func getLoggingBridge() -> Logging {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : LoggingBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getLoggingBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getLoggingBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getLoggingBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getLoggingBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered MagnetometerBridge.

        @return MagnetometerBridge reference or null if a bridge of this type is not registered.
     */
     public final func getMagnetometerBridge() -> Magnetometer {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : MagnetometerBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getMagnetometerBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getMagnetometerBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getMagnetometerBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getMagnetometerBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered MailBridge.

        @return MailBridge reference or null if a bridge of this type is not registered.
     */
     public final func getMailBridge() -> Mail {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : MailBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getMailBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getMailBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getMailBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getMailBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ManagementBridge.

        @return ManagementBridge reference or null if a bridge of this type is not registered.
     */
     public final func getManagementBridge() -> Management {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ManagementBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getManagementBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getManagementBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getManagementBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getManagementBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered MapBridge.

        @return MapBridge reference or null if a bridge of this type is not registered.
     */
     public final func getMapBridge() -> Map {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : MapBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getMapBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getMapBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getMapBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getMapBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered MessagingBridge.

        @return MessagingBridge reference or null if a bridge of this type is not registered.
     */
     public final func getMessagingBridge() -> Messaging {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : MessagingBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getMessagingBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getMessagingBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getMessagingBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getMessagingBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NFCBridge.

        @return NFCBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNFCBridge() -> NFC {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NFCBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNFCBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNFCBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNFCBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNFCBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NetworkInfoBridge.

        @return NetworkInfoBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNetworkInfoBridge() -> NetworkInfo {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NetworkInfoBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNetworkInfoBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNetworkInfoBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNetworkInfoBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNetworkInfoBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NetworkNamingBridge.

        @return NetworkNamingBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNetworkNamingBridge() -> NetworkNaming {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NetworkNamingBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNetworkNamingBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNetworkNamingBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNetworkNamingBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNetworkNamingBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NetworkReachabilityBridge.

        @return NetworkReachabilityBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNetworkReachabilityBridge() -> NetworkReachability {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NetworkReachabilityBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNetworkReachabilityBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNetworkReachabilityBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNetworkReachabilityBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNetworkReachabilityBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NetworkStatusBridge.

        @return NetworkStatusBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNetworkStatusBridge() -> NetworkStatus {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NetworkStatusBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNetworkStatusBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNetworkStatusBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNetworkStatusBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNetworkStatusBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NotificationBridge.

        @return NotificationBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNotificationBridge() -> Notification {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NotificationBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNotificationBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNotificationBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNotificationBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNotificationBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered NotificationLocalBridge.

        @return NotificationLocalBridge reference or null if a bridge of this type is not registered.
     */
     public final func getNotificationLocalBridge() -> NotificationLocal {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : NotificationLocalBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getNotificationLocalBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getNotificationLocalBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getNotificationLocalBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getNotificationLocalBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered OAuthBridge.

        @return OAuthBridge reference or null if a bridge of this type is not registered.
     */
     public final func getOAuthBridge() -> OAuth {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : OAuthBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getOAuthBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getOAuthBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getOAuthBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getOAuthBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered OCRBridge.

        @return OCRBridge reference or null if a bridge of this type is not registered.
     */
     public final func getOCRBridge() -> OCR {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : OCRBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getOCRBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getOCRBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getOCRBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getOCRBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered OSBridge.

        @return OSBridge reference or null if a bridge of this type is not registered.
     */
     public final func getOSBridge() -> OS {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : OSBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getOSBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getOSBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getOSBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getOSBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered OpenIdBridge.

        @return OpenIdBridge reference or null if a bridge of this type is not registered.
     */
     public final func getOpenIdBridge() -> OpenId {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : OpenIdBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getOpenIdBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getOpenIdBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getOpenIdBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getOpenIdBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered PrintingBridge.

        @return PrintingBridge reference or null if a bridge of this type is not registered.
     */
     public final func getPrintingBridge() -> Printing {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : PrintingBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getPrintingBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getPrintingBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getPrintingBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getPrintingBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ProximityBridge.

        @return ProximityBridge reference or null if a bridge of this type is not registered.
     */
     public final func getProximityBridge() -> Proximity {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ProximityBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getProximityBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getProximityBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getProximityBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getProximityBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered QRCodeBridge.

        @return QRCodeBridge reference or null if a bridge of this type is not registered.
     */
     public final func getQRCodeBridge() -> QRCode {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : QRCodeBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getQRCodeBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getQRCodeBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getQRCodeBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getQRCodeBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered RSSBridge.

        @return RSSBridge reference or null if a bridge of this type is not registered.
     */
     public final func getRSSBridge() -> RSS {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : RSSBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getRSSBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getRSSBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getRSSBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getRSSBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered RuntimeBridge.

        @return RuntimeBridge reference or null if a bridge of this type is not registered.
     */
     public final func getRuntimeBridge() -> Runtime {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : RuntimeBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getRuntimeBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getRuntimeBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getRuntimeBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getRuntimeBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered SecurityBridge.

        @return SecurityBridge reference or null if a bridge of this type is not registered.
     */
     public final func getSecurityBridge() -> Security {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : SecurityBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getSecurityBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getSecurityBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getSecurityBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getSecurityBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered ServiceBridge.

        @return ServiceBridge reference or null if a bridge of this type is not registered.
     */
     public final func getServiceBridge() -> Service {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : ServiceBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getServiceBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getServiceBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getServiceBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getServiceBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered SettingsBridge.

        @return SettingsBridge reference or null if a bridge of this type is not registered.
     */
     public final func getSettingsBridge() -> Settings {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : SettingsBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getSettingsBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getSettingsBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getSettingsBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getSettingsBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered SocketBridge.

        @return SocketBridge reference or null if a bridge of this type is not registered.
     */
     public final func getSocketBridge() -> Socket {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : SocketBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getSocketBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getSocketBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getSocketBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getSocketBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered StoreBridge.

        @return StoreBridge reference or null if a bridge of this type is not registered.
     */
     public final func getStoreBridge() -> Store {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : StoreBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getStoreBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getStoreBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getStoreBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getStoreBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered TelephonyBridge.

        @return TelephonyBridge reference or null if a bridge of this type is not registered.
     */
     public final func getTelephonyBridge() -> Telephony {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : TelephonyBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getTelephonyBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getTelephonyBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getTelephonyBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getTelephonyBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered TimerBridge.

        @return TimerBridge reference or null if a bridge of this type is not registered.
     */
     public final func getTimerBridge() -> Timer {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : TimerBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getTimerBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getTimerBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getTimerBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getTimerBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered TwitterBridge.

        @return TwitterBridge reference or null if a bridge of this type is not registered.
     */
     public final func getTwitterBridge() -> Twitter {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : TwitterBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getTwitterBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getTwitterBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getTwitterBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getTwitterBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered UIBridge.

        @return UIBridge reference or null if a bridge of this type is not registered.
     */
     public final func getUIBridge() -> UI {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : UIBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getUIBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getUIBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getUIBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getUIBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered UpdateBridge.

        @return UpdateBridge reference or null if a bridge of this type is not registered.
     */
     public final func getUpdateBridge() -> Update {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : UpdateBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getUpdateBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getUpdateBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getUpdateBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getUpdateBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered VibrationBridge.

        @return VibrationBridge reference or null if a bridge of this type is not registered.
     */
     public final func getVibrationBridge() -> Vibration {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : VibrationBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getVibrationBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getVibrationBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getVibrationBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getVibrationBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered VideoBridge.

        @return VideoBridge reference or null if a bridge of this type is not registered.
     */
     public final func getVideoBridge() -> Video {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : VideoBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getVideoBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getVideoBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getVideoBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getVideoBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered WalletBridge.

        @return WalletBridge reference or null if a bridge of this type is not registered.
     */
     public final func getWalletBridge() -> Wallet {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : WalletBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getWalletBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getWalletBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getWalletBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getWalletBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the registered XMLBridge.

        @return XMLBridge reference or null if a bridge of this type is not registered.
     */
     public final func getXMLBridge() -> XML {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : XMLBridge? = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getXMLBridge().")
          }

          if (this.delegate != nil) {
               result = self.delegate.getXMLBridge()
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getXMLBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getXMLBridge'.")
               }
          }
          return result          
     }

     /**
        Provides a bridge to handle API calls for the given interface name.

        @param bridgeType String with the interface name required.
        @return APIBridge That handles calls for the specified interface or null if the given bridge is not registered.
     */
     public final func getBridge(bridgeType : String) -> APIBridge {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()
          var result : APIBridge = nil

          if (logger != nil) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executing getBridge(\(bridgeType)).")
          }

          if (this.delegate != nil) {
               result = self.delegate.getBridge(bridgeType)
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(), "AppRegistryBridge executed 'getBridge' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
               }
          } else {
               if (logger!=nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(), "AppRegistryBridge no delegate for 'getBridge'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the Platform Context

        @return Reference to the platform context
        @since ARP1.0
     */
     public func getPlatformContext() -> AppContextBridge {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"AppRegistryBridge executing getPlatformContext.")
          }

          var result : AppContextBridge = nil
          if (self.delegate != nil) {
               result = self.delegate.getPlatformContext()
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"AppRegistryBridge executed 'getPlatformContext' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"AppRegistryBridge no delegate for 'getPlatformContext'.")
               }
          }
          return result          
     }

     /**
        Returns a reference to the Webview platform context

        @return Reference to the Webview Context
        @since ARP1.0
     */
     public func getPlatformContextWeb() -> AppContextWebviewBridge {
          // Start logging elapsed time.
          var tIn : NSTimeInterval = NSDate.timeIntervalSinceReferenceDate()
          var logger : ILogging = AppRegistryBridge.sharedInstance.getLoggingBridge()

          if (logger!=null) {
               logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"AppRegistryBridge executing getPlatformContextWeb.")
          }

          var result : AppContextWebviewBridge = nil
          if (self.delegate != nil) {
               result = self.delegate.getPlatformContextWeb()
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.DEBUG, self.apiGroup.name(),"AppRegistryBridge executed 'getPlatformContextWeb' in \(UInt64(tIn.distanceTo(NSDate.timeIntervalSinceReferenceDate())*1000)) ms.")
                }
          } else {
               if (logger != nil) {
                    logger.log(ILoggingLogLevel.ERROR, self.apiGroup.name(),"AppRegistryBridge no delegate for 'getPlatformContextWeb'.")
               }
          }
          return result          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
