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
	/// <summary>Structure representing the data elements of an email.</summary>
	/// <remarks>Structure representing the data elements of an email.</remarks>
	public class Email
	{
		/// <summary>Array of Email recipients</summary>
		/// <since>ARP1.0</since>
		private EmailAddress[] toRecipients;

		/// <summary>Array of Email Carbon Copy recipients</summary>
		/// <since>ARP1.0</since>
		private EmailAddress[] ccRecipients;

		/// <summary>Array of Email Blind Carbon Copy recipients</summary>
		/// <since>ARP1.0</since>
		private EmailAddress[] bccRecipients;

		/// <summary>Array of attatchments</summary>
		/// <since>ARP1.0</since>
		private AttachmentData[] attachmentData;

		/// <summary>Message body</summary>
		/// <since>ARP1.0</since>
		private string messageBody;

		/// <summary>Message body mime type</summary>
		/// <since>ARP1.0</since>
		private string messageBodyMimeType;

		/// <summary>Subject of the email</summary>
		/// <since>ARP1.0</since>
		private string subject;

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="toRecipients">array of recipients</param>
		/// <param name="ccRecipients">array of cc recipients</param>
		/// <param name="bccRecipients">array of bcc recipients</param>
		/// <param name="attachmentData">array of attatchments</param>
		/// <param name="messageBody">body of the email</param>
		/// <param name="messageBodyMimeType">mime type of the body</param>
		/// <param name="subject">of the email</param>
		/// <since>ARP1.0</since>
		public Email(EmailAddress[] toRecipients, EmailAddress[] ccRecipients, EmailAddress
			[] bccRecipients, AttachmentData[] attachmentData, string messageBody, string messageBodyMimeType
			, string subject)
		{
			this.toRecipients = toRecipients;
			this.ccRecipients = ccRecipients;
			this.bccRecipients = bccRecipients;
			this.attachmentData = attachmentData;
			this.messageBody = messageBody;
			this.messageBodyMimeType = messageBodyMimeType;
			this.subject = subject;
		}

		/// <summary>Constructor used by the implementation</summary>
		/// <param name="toRecipients">array of recipients</param>
		/// <param name="subject">of the email</param>
		/// <param name="messageBody">body of the email</param>
		/// <since>ARP1.0</since>
		public Email(EmailAddress[] toRecipients, string subject, string messageBody)
		{
			this.toRecipients = toRecipients;
			this.messageBody = messageBody;
			this.subject = subject;
		}

		/// <summary>Returns the array of recipients</summary>
		/// <returns>toRecipients array of recipients</returns>
		/// <since>ARP1.0</since>
		public virtual EmailAddress[] GetToRecipients()
		{
			return toRecipients;
		}

		/// <summary>Set the array of recipients</summary>
		/// <param name="toRecipients">array of recipients</param>
		/// <since>ARP1.0</since>
		public virtual void SetToRecipients(EmailAddress[] toRecipients)
		{
			this.toRecipients = toRecipients;
		}

		/// <summary>Returns the array of recipients</summary>
		/// <returns>ccRecipients array of cc recipients</returns>
		/// <since>ARP1.0</since>
		public virtual EmailAddress[] GetCcRecipients()
		{
			return ccRecipients;
		}

		/// <summary>Set the array of recipients</summary>
		/// <param name="ccRecipients">array of cc recipients</param>
		/// <since>ARP1.0</since>
		public virtual void SetCcRecipients(EmailAddress[] ccRecipients)
		{
			this.ccRecipients = ccRecipients;
		}

		/// <summary>Returns the array of recipients</summary>
		/// <returns>bccRecipients array of bcc recipients</returns>
		/// <since>ARP1.0</since>
		public virtual EmailAddress[] GetBccRecipients()
		{
			return bccRecipients;
		}

		/// <summary>Set the array of recipients</summary>
		/// <param name="bccRecipients">array of bcc recipients</param>
		/// <since>ARP1.0</since>
		public virtual void SetBccRecipients(EmailAddress[] bccRecipients)
		{
			this.bccRecipients = bccRecipients;
		}

		/// <summary>Returns an array of attachments</summary>
		/// <returns>attachmentData array with the email attachments</returns>
		/// <since>ARP1.0</since>
		public virtual AttachmentData[] GetAttachmentData()
		{
			return attachmentData;
		}

		/// <summary>Set the email attachment data array</summary>
		/// <param name="attachmentData">array of email attatchments</param>
		/// <since>ARP1.0</since>
		public virtual void SetAttachmentData(AttachmentData[] attachmentData)
		{
			this.attachmentData = attachmentData;
		}

		/// <summary>Returns the message body of the email</summary>
		/// <returns>message Body string of the email</returns>
		public virtual string GetMessageBody()
		{
			return messageBody;
		}

		/// <summary>Set the message body of the email</summary>
		/// <param name="messageBody">message body of the email</param>
		/// <since>ARP1.0</since>
		public virtual void SetMessageBody(string messageBody)
		{
			this.messageBody = messageBody;
		}

		/// <summary>Returns the myme type of the message body</summary>
		/// <returns>mime type string of the message boddy</returns>
		/// <since>ARP1.0</since>
		public virtual string GetMessageBodyMimeType()
		{
			return messageBodyMimeType;
		}

		/// <summary>Set the mime type for the message body</summary>
		/// <param name="messageBodyMimeType">type of the body message</param>
		/// <since>ARP1.0</since>
		public virtual void SetMessageBodyMimeType(string messageBodyMimeType)
		{
			this.messageBodyMimeType = messageBodyMimeType;
		}

		/// <summary>Returns the subject of the email</summary>
		/// <returns>subject string of the email</returns>
		/// <since>ARP1.0</since>
		public virtual string GetSubject()
		{
			return subject;
		}

		/// <summary>Set the subject of the email</summary>
		/// <param name="subject">of the email</param>
		/// <since>ARP1.0</since>
		public virtual void SetSubject(string subject)
		{
			this.subject = subject;
		}
	}
}
