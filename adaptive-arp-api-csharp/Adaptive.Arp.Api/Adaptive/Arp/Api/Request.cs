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
	public class Request
	{
		/// <summary>Request/Response data content (plain text).</summary>
		/// <remarks>Request/Response data content (plain text).</remarks>
		/// <since>ARP1.0</since>
		private string content;

		/// <summary>The request/response content type (MIME TYPE).</summary>
		/// <remarks>The request/response content type (MIME TYPE).</remarks>
		/// <since>ARP1.0</since>
		private string contentType;

		/// <summary>The length in bytes for the Content field.</summary>
		/// <remarks>The length in bytes for the Content field.</remarks>
		/// <since>ARP1.0</since>
		private int contentLength;

		/// <summary>The byte[] representing the Content field.</summary>
		/// <remarks>The byte[] representing the Content field.</remarks>
		/// <since>ARP1.0</since>
		private byte[] rawContent;

		/// <summary>The headers array (name,value pairs) to be included on the I/O service request.
		/// 	</summary>
		/// <remarks>The headers array (name,value pairs) to be included on the I/O service request.
		/// 	</remarks>
		/// <since>ARP1.0</since>
		private Header[] headers;

		/// <summary>The request method</summary>
		/// <since>ARP1.0</since>
		private string method;

		/// <summary>The HTTP procotol version to be used for this request.</summary>
		/// <remarks>The HTTP procotol version to be used for this request.</remarks>
		/// <since>ARP1.0</since>
		private Request.ProtocolVersion protocolVersion;

		/// <summary>The session context for the Request/Response.</summary>
		/// <remarks>The session context for the Request/Response.</remarks>
		/// <since>ARP1.0</since>
		private Session session;

		/// <summary>Contructor used by the implementation</summary>
		/// <param name="content"></param>
		/// <param name="contentType"></param>
		/// <param name="contentLength"></param>
		/// <param name="rawContent"></param>
		/// <param name="headers"></param>
		/// <param name="method"></param>
		/// <param name="protocolVersion"></param>
		/// <param name="session"></param>
		/// <since>ARP1.0</since>
		public Request(string content, string contentType, int contentLength, byte[] rawContent
			, Header[] headers, string method, Request.ProtocolVersion protocolVersion, Session
			 session)
		{
			this.content = content;
			this.contentType = contentType;
			this.contentLength = contentLength;
			this.rawContent = rawContent;
			this.headers = headers;
			this.method = method;
			this.protocolVersion = protocolVersion;
			this.session = session;
		}

		/// <summary>Returns the protocol version</summary>
		/// <returns>protocolVersion enum</returns>
		/// <since>ARP1.0</since>
		public virtual Request.ProtocolVersion GetProtocolVersion()
		{
			return protocolVersion;
		}

		/// <summary>Set the protocol version</summary>
		/// <param name="protocolVersion"></param>
		/// <since>ARP1.0</since>
		public virtual void SetProtocolVersion(Request.ProtocolVersion protocolVersion)
		{
			this.protocolVersion = protocolVersion;
		}

		/// <summary>Returns the content</summary>
		/// <returns>content</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContent()
		{
			return content;
		}

		/// <summary>Set the content</summary>
		/// <param name="content"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContent(string content)
		{
			this.content = content;
		}

		/// <summary>Returns the content type</summary>
		/// <returns>contentType</returns>
		/// <since>ARP1.0</since>
		public virtual string GetContentType()
		{
			return contentType;
		}

		/// <summary>Set the content type</summary>
		/// <param name="contentType"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentType(string contentType)
		{
			this.contentType = contentType;
		}

		/// <summary>Returns the content length</summary>
		/// <returns>contentLength</returns>
		/// <since>ARP1.0</since>
		public virtual int GetContentLength()
		{
			return contentLength;
		}

		/// <summary>Set the content length</summary>
		/// <param name="contentLength"></param>
		/// <since>ARP1.0</since>
		public virtual void SetContentLength(int contentLength)
		{
			this.contentLength = contentLength;
		}

		/// <summary>Returns the byte[] of the content</summary>
		/// <returns>rawContent</returns>
		/// <since>ARP1.0</since>
		public virtual byte[] GetRawContent()
		{
			return rawContent;
		}

		/// <summary>Set the byte[] of the content</summary>
		/// <param name="rawContent"></param>
		/// <since>ARP1.0</since>
		public virtual void SetRawContent(byte[] rawContent)
		{
			this.rawContent = rawContent;
		}

		/// <summary>Returns the array of Header</summary>
		/// <returns>headers</returns>
		/// <since>ARP1.0</since>
		public virtual Header[] GetHeaders()
		{
			return headers;
		}

		/// <summary>Set the array of Header</summary>
		/// <param name="headers"></param>
		/// <since>ARP1.0</since>
		public virtual void SetHeaders(Header[] headers)
		{
			this.headers = headers;
		}

		/// <summary>Returns the method</summary>
		/// <returns>method</returns>
		/// <since>ARP1.0</since>
		public virtual string GetMethod()
		{
			return method;
		}

		/// <summary>Set the method</summary>
		/// <param name="method"></param>
		/// <since>ARP1.0</since>
		public virtual void SetMethod(string method)
		{
			this.method = method;
		}

		/// <summary>Returns the session object</summary>
		/// <returns>session</returns>
		/// <since>ARP1.0</since>
		public virtual Session GetSession()
		{
			return session;
		}

		/// <summary>Set the session object</summary>
		/// <param name="session"></param>
		/// <since>ARP1.0</since>
		public virtual void SetSession(Session session)
		{
			this.session = session;
		}

		/// <summary>Protocol version supported</summary>
		/// <since>ARP1.0</since>
		public enum ProtocolVersion
		{
			HttpProtocolVersion10,
			HttpProtocolVersion11
		}
	}
}
