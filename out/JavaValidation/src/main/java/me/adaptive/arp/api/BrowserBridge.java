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
   Interface for Managing the browser operations
   Auto-generated implementation of IBrowser specification.
*/
public class BrowserBridge extends BaseUIBridge implements IBrowser {

     /**
        Group of API.
     */
     private IBrowser delegate;

     /**
        Constructor with delegate.

        @param delegate The delegate implementing platform specific functions.
     */
     public BrowserBridge(IBrowser delegate) {
          super();
          this.delegate = delegate;
     }
     /**
        Get the delegate implementation.
     */
     public final IBrowser getDelegate() {
          return this.delegate;
     }
     /**
        Set the delegate implementation.

        @param delegate The delegate implementing platform specific functions.
     */
     public final void setDelegate(IBrowser delegate) {
          this.delegate = delegate;
     }

     /**
        Method for opening a URL like a link in the native default browser

        @param url Url to open
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openExtenalBrowser(String url) {
          // Invoke delegate
          return this.delegate.openExtenalBrowser(url);
          
     }

     /**
        Method for opening a browser embedded into the application

        @param url            Url to open
        @param title          Title of the Navigation bar
        @param backButtonText Title of the Back button bar
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openInternalBrowser(String url, String title, String backButtonText) {
          // Invoke delegate
          return this.delegate.openInternalBrowser(url, title, backButtonText);
          
     }

     /**
        Method for opening a browser embedded into the application in a modal window

        @param url            Url to open
        @param title          Title of the Navigation bar
        @param backButtonText Title of the Back button bar
        @return The result of the operation
        @since ARP1.0
     */
     public boolean openInternalBrowserModal(String url, String title, String backButtonText) {
          // Invoke delegate
          return this.delegate.openInternalBrowserModal(url, title, backButtonText);
          
     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
