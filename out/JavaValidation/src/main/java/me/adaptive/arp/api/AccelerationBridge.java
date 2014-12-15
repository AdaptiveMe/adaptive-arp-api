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

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

package me.adaptive.arp.api;

/**
   Interface defining methods about the acceleration sensor
   Auto-generated implementation of IAcceleration specification.
*/
public class AccelerationBridge extends BaseSensorBridge implements IAcceleration, APIBridge {

     /**
        API Delegate.
     */
     private IAcceleration delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public AccelerationBridge(IAcceleration delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IAcceleration getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IAcceleration delegate) {
          this.delegate = delegate;
     }

     /**
        Register a new listener that will receive acceleration events.

        @param listener to be registered.
        @since ARP1.0
     */
     public void addAccelerationListener(IAccelerationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing addAccelerationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.addAccelerationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'addAccelerationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'addAccelerationListener'.");
          }
          
     }

     /**
        De-registers an existing listener from receiving acceleration events.

        @param listener to be registered.
        @since ARP1.0
     */
     public void removeAccelerationListener(IAccelerationListener listener) {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing removeAccelerationListener({"+listener+"}).");

          if (this.delegate != null) {
               this.delegate.removeAccelerationListener(listener);
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'removeAccelerationListener' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'removeAccelerationListener'.");
          }
          
     }

     /**
        Removed all existing listeners from receiving acceleration events.

        @since ARP1.0
     */
     public void removeAccelerationListeners() {
          // Start logging elapsed time.
          long tIn = System.currentTimeMillis();
          ILogging logger = null; // TODO: Get reference from IAppRegistry.

          if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executing removeAccelerationListeners.");

          if (this.delegate != null) {
               this.delegate.removeAccelerationListeners();
               if (logger!=null) logger.log(ILoggingLogLevel.DEBUG, this.getAPIGroup().name(),this.getClass().getSimpleName()+" executed 'removeAccelerationListeners' in "+(System.currentTimeMillis()-tIn)+"ms.");
          } else {
               if (logger!=null) logger.log(ILoggingLogLevel.ERROR, this.getAPIGroup().name(),this.getClass().getSimpleName()+" no delegate for 'removeAccelerationListeners'.");
          }
          
     }

     /**
        Invokes the given method specified in the API request object.

        @param request APIRequest object containing method name and parameters.
        @return String with JSON response or a zero length string is the response is asynchronous.
     */
     public String invoke(APIRequest request) {
          return null; // TODO: Implement APIRequest to Params and invoke delegate method.
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
