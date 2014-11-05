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
	/// <summary>Created by clozano on 05/09/2014.</summary>
	/// <remarks>Created by clozano on 05/09/2014.</remarks>
	public abstract class IAppResource : IAdaptiveRP
	{
		public abstract string GetName();

		public abstract string GetPath();

		public abstract string GetMimetype();

		public abstract IAppResource.Type GetType();

		public abstract IAppResource.Format GetFormat();

		public abstract IAppResource.Payload GeType();

		public abstract long GetSize();

		public abstract long GetSizeStored();

		public abstract long GetTimestamp();

		public abstract string GetMd5();

		public abstract string GetUuid();

		public abstract byte[] GetData();

		public abstract byte[] GetDataStored();

		public abstract string GetDataPathLinked();

		public enum Type
		{
			Html,
			Css,
			JavaScript,
			Image,
			Video,
			Audio,
			Property,
			Database,
			Other,
			Unknown
		}

		public enum Format
		{
			Raw,
			Compressed,
			Encrypted,
			EncryptedCompressed,
			Unknown
		}

		public enum Payload
		{
			Default,
			Embedded,
			Linked,
			Unknown
		}
	}
}
