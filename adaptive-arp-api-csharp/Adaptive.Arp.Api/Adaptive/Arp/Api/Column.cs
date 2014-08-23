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

using Sharpen;

namespace Adaptive.Arp.Api
{
	/// <summary>Structure representing the column specification of a data table.</summary>
	/// <remarks>Structure representing the column specification of a data table.</remarks>
	public class Column
	{
		/// <summary>Name of the column</summary>
		private string name;

		/// <summary>Constructor for implementation using.</summary>
		/// <remarks>Constructor for implementation using.</remarks>
		/// <param name="name">Name of the column</param>
		public Column(string name)
		{
			this.name = name;
		}

		/// <summary>Returns the name of the column.</summary>
		/// <remarks>Returns the name of the column.</remarks>
		/// <returns>The name of the column.</returns>
		public virtual string GetName()
		{
			return name;
		}

		/// <summary>Sets the name of the column.</summary>
		/// <remarks>Sets the name of the column.</remarks>
		/// <param name="name">The name of the column.</param>
		public virtual void SetName(string name)
		{
			this.name = name;
		}
	}
}
