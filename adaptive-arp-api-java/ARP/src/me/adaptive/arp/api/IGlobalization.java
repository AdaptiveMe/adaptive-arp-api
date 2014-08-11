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
 *     * Francisco Javier Martin Bueno
 *             <https://github.com/kechis>
 *             <mailto:kechis@gmail.com>
 *
 * =====================================================================================================================
 */

package me.adaptive.arp.api;

import java.io.Serializable;
import java.util.HashMap;

/**
 * Created by clozano on 04/08/14.
 */
public interface IGlobalization extends IBaseApplication, Serializable {

    /**
     * List of supported locales for the application
     * @return List of locales (only locale descriptor string, such as "en-US").
     * @since ARP1.0
     */
    String[] getLocaleSupportedDescriptors();

    /**
     * Gets the text/message corresponding to the given key and locale.
     * @param key to match text
     * @param The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
     * @return Localized text.
     * @since ARP1.0
     */
    String getResourceLiteral(String key, Locale locale);

    /**
     * Gets the full application configured literals (key/message pairs) corresponding to the given locale.
     * @param The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
     * @return Localized texts in the form of an object (you could get the value of a keyed literal using resourceLiteralDictionary.MY_KEY or resourceLiteralDictionary["MY_KEY"]).
     * @since ARP1.0
     */
    HashMap<String,String> getResourceLiterals(Locale locale);
}
