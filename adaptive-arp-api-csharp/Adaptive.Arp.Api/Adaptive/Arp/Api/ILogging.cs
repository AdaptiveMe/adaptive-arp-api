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
	public abstract class ILogging : IBaseUtil
	{
		/// <summary>Logs the given message, with the given log level if specified, to the standard platform/environment.
		/// 	</summary>
		/// <remarks>Logs the given message, with the given log level if specified, to the standard platform/environment.
		/// 	</remarks>
		/// <param name="level">Log level</param>
		/// <param name="message">Message to be logged</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public abstract void Log(ILogging.LogLevel level, string message);

		/// <summary>Logs the given message, with the given log level if specified, to the standard platform/environment.
		/// 	</summary>
		/// <remarks>Logs the given message, with the given log level if specified, to the standard platform/environment.
		/// 	</remarks>
		/// <param name="level">Log level</param>
		/// <param name="category">Category/tag name to identify/filter the log.</param>
		/// <param name="message">Message to be logged</param>
		/// <author>Ferran Vila Conesa</author>
		/// <since>ARP1.0</since>
		public abstract void Log(ILogging.LogLevel level, string category, string message
			);

		/// <summary>Enumeration for log level platform normalization.</summary>
		/// <remarks>
		/// Enumeration for log level platform normalization. Every platform has
		/// to match their log levels into these ones.
		/// </remarks>
		public enum LogLevel
		{
			Debug,
			Warn,
			Error,
			Info,
			Unknown
		}
	}
}
