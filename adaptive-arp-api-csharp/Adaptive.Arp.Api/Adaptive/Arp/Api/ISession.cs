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

using Adaptive.Arp.Api;
using Sharpen;

namespace Adaptive.Arp.Api
{
	public interface ISession : IBaseCommunication
	{
		/// <summary>Returns the cookie array</summary>
		/// <returns>cookie array</returns>
		/// <since>ARP1.0</since>
		Cookie[] GetCookies();

		/// <summary>Set the cookies array</summary>
		/// <param name="cookie"></param>
		void SetCookies(Cookie[] cookies);

		/// <summary>Set a cookie object</summary>
		/// <param name="cookie"></param>
		void SetCookie(Cookie cookie);

		/// <summary>Remove a cookies array</summary>
		/// <param name="cookie"></param>
		void RemoveCookies(Cookie[] cookies);

		/// <summary>Remove a cookie</summary>
		/// <param name="cookie"></param>
		void RemoveCookie(Cookie cookie);

		/// <summary>Returns all Session Attributes</summary>
		object[] GetAttributes();

		/// <summary>Returns an attribute object</summary>
		/// <returns>object attribute</returns>
		/// <since>ARP1.0</since>
		object GetAttribute(string name);

		/// <summary>Set an attribute</summary>
		/// <param name="name"></param>
		/// <param name="value"></param>
		void SetAttribute(string name, object value);

		/// <summary>Returns all attibute names</summary>
		/// <returns>array with all attribute names</returns>
		string[] ListAttributeNames();

		/// <summary>Remove an attribute by its name</summary>
		/// <param name="name"></param>
		void RemoveAttribute(string name);

		/// <summary>Remove all attributes</summary>
		void RemoveAttributes();
	}
}
