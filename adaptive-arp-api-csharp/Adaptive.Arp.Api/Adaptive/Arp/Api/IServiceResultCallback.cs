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
	/// <summary>Created by FRMI on 12/08/2014.</summary>
	/// <remarks>Created by FRMI on 12/08/2014.</remarks>
	public abstract class IServiceResultCallback
	{
		/// <summary>This method is called on Result</summary>
		/// <param name="response">data</param>
		/// <since>ARP1.0</since>
		public abstract void OnResult(ServiceResponse response);

		/// <summary>This method is called on Warning</summary>
		/// <param name="response">data</param>
		/// <param name="warning">returned by the platform</param>
		/// <since>ARP1.0</since>
		public abstract void OnWarning(ServiceResponse response, IServiceResultCallback.Warning
			 warning);

		/// <summary>This method is called on Error</summary>
		/// <param name="error">returned by the platform</param>
		/// <since>ARP1.0</since>
		public abstract void OnError(IServiceResultCallback.Error error);

		/// <summary>Warnings that can be used</summary>
		/// <since>ARP1.0</since>
		public enum Warning
		{
			NotSecure,
			NotTrusted,
			Redirected
		}

		/// <summary>Errors that can be used</summary>
		/// <since>ARP1.0</since>
		public enum Error
		{
			Forbidden,
			NotFound,
			MethodNotAllowed,
			NotAllowed,
			NotAuthenticated,
			TimeOut,
			NoResponse,
			ServerError,
			Unreachable,
			Unknown
		}
	}
}
