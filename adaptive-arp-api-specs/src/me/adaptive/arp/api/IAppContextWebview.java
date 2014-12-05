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

package me.adaptive.arp.api;

/**
 * Created by clozano on 09/09/14.
 */
public interface IAppContextWebview extends IAdaptiveRP {
    /**
     * Returns a reference to the main application webview. This is the first application webview and can not be removed
     * with the removeWebview method. The object returned should be cast to the platform specific implementation
     * WebView, WKWebView, etc.
     *
     * @return Object representing the specific and primary webview instance of the application.
     */
    Object getWebviewPrimary();

    /**
     * Additional views may be added to an application - a separate activity - and if these will make calls to the
     * ARP methods, they must be registered by adding them to the context. When they are added to the context, ARP
     * methods are bound to the webview so that they're callable from the HTML application. The primary webview should
     * not be added using this method.
     *
     * @param webView Platform specific webview reference (WebView, UIWebView, WKWebView,etc.)
     */
    void addWebview(Object webView);

    /**
     * When a webview is disposed - no longer in use from an external activity - the webview should be removed to unbind
     * ARP functions and release resources. The primary webview can not be removed.
     *
     * @param webView The instance of the webview to be removed from the binding.
     */
    void removeWebview(Object webView);

    /**
     * Returns an array of webviews currently managed by the context - composed of primary and the list of those added.
     * This method will always return at least one element; the primary webview.
     *
     * @return Array with all the Webview instances being managed by ARP.
     */
    Object[] getWebviews();
}