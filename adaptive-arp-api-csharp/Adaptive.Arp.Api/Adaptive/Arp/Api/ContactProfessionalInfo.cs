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
	/// <summary>Created by clozano on 08/08/14.</summary>
	/// <remarks>Created by clozano on 08/08/14.</remarks>
	public class ContactProfessionalInfo
	{
		/// <summary>The company of the job</summary>
		/// <since>ARP1.0</since>
		private string company;

		/// <summary>The job title</summary>
		/// <since>ARP1.0</since>
		private string jobTitle;

		/// <summary>The job description</summary>
		/// <since>ARP1.0</since>
		private string jobDescription;

		/// <summary>Constructor used by implementation to set the ContactProfessionalInfo.</summary>
		/// <remarks>Constructor used by implementation to set the ContactProfessionalInfo.</remarks>
		/// <param name="jobTitle"></param>
		/// <param name="jobDescription"></param>
		/// <param name="company"></param>
		/// <since>ARP1.0</since>
		public ContactProfessionalInfo(string jobTitle, string jobDescription, string company
			)
		{
			this.company = company;
			this.jobTitle = jobTitle;
			this.jobDescription = jobDescription;
		}

		/// <summary>Returns the company of the job</summary>
		/// <returns>company</returns>
		/// <since>ARP1.0</since>
		public virtual string GetCompany()
		{
			return company;
		}

		/// <summary>Set the company of the job</summary>
		/// <param name="company"></param>
		/// <since>ARP1.0</since>
		public virtual void SetCompany(string company)
		{
			this.company = company;
		}

		/// <summary>Returns the title of the job</summary>
		/// <returns>title</returns>
		/// <since>ARP1.0</since>
		public virtual string GetJobTitle()
		{
			return jobTitle;
		}

		/// <summary>Set the title of the job</summary>
		/// <param name="title"></param>
		/// <since>ARP1.0</since>
		public virtual void SetJobTitle(string jobTitle)
		{
			this.jobTitle = jobTitle;
		}

		/// <summary>Returns the description of the job</summary>
		/// <returns>description</returns>
		/// <since>ARP1.0</since>
		public virtual string GetJobDescription()
		{
			return jobDescription;
		}

		/// <summary>Set the description of the job</summary>
		/// <param name="description"></param>
		/// <since>ARP1.0</since>
		public virtual void SetJobDescription(string jobDescription)
		{
			this.jobDescription = jobDescription;
		}
	}
}
