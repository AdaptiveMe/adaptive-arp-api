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


public interface IBrowser extends IBaseUI {
    /**
     * Open a new window showing the url webpage with a title and a close button displaying the desired text
     *
     * @param url            to open
     * @param title          of the new window
     * @param backButtonText text of the close button
     * @return true if the new window opens;false otherwise
     */
    boolean openInternalBrowserModal(String url, String title, String backButtonText);

    boolean openInternalBrowser(String url, String title, String backButtonText);

    boolean openExtenalBrowser(String url);
}
