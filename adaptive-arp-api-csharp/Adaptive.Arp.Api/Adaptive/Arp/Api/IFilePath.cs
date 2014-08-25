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
	/// <summary>An object that may be used to locate a file in a file system.</summary>
	/// <remarks>
	/// An object that may be used to locate a file in a file system. It will
	/// typically represent a system dependent file path.
	/// <p> A
	/// <code>Path</code>
	/// represents a path that is hierarchical and composed of a
	/// sequence of directory and file name elements separated by a special separator
	/// or delimiter. A <em>root component</em>, that identifies a file system
	/// hierarchy, may also be present. The name element that is <em>farthest</em>
	/// from the root of the directory hierarchy is the name of a file or directory.
	/// The other name elements are directory names. A
	/// <code>Path</code>
	/// can represent a
	/// root, a root and a sequence of names, or simply one or more name elements.
	/// A
	/// <code>Path</code>
	/// is considered to be an <i>empty path</i> if it consists
	/// solely of one name element that is empty. Accessing a file using an
	/// <i>empty path</i> is equivalent to accessing the default directory of the
	/// file system.
	/// <code>Path</code>
	/// defines the
	/// <see cref="GetFileName()">getFileName</see>
	/// ,
	/// <see cref="GetParent()">getParent</see>
	/// ,
	/// <see cref="GetRoot()">getRoot</see>
	/// , and  methods to access
	/// the path components or a subsequence of its name elements.
	/// <p> In addition to accessing the components of a path, a
	/// <code>Path</code>
	/// also
	/// defines the
	/// <see cref="Resolve(IFilePath)">resolve</see>
	/// and
	/// <see cref="ResolveSibling(IFilePath)">resolveSibling</see>
	/// methods to combine paths. The
	/// <see cref="Relativize(IFilePath)">relativize</see>
	/// method that can be used to construct a relative path between two paths.
	/// Paths can be, and tested against each other using
	/// the
	/// <see cref="StartsWith(IFilePath)">startsWith</see>
	/// and
	/// <see cref="EndsWith(IFilePath)">endsWith</see>
	/// methods.
	/// <p> <b>WARNING:</b> This interface is only intended to be implemented by
	/// those developing custom file system implementations. Methods may be added to
	/// this interface in future releases. </p>
	/// <h2>Accessing Files</h2>
	/// <p> Paths may be used with the
	/// <see cref="IFile">IFile</see>
	/// class to operate on files,
	/// directories, and other types of files. For example, suppose we want a
	/// <see cref="Sharpen.BufferedReader">Sharpen.BufferedReader</see>
	/// to read text from a file "
	/// <code>access.log</code>
	/// ". The
	/// file is located in a directory "
	/// <code>logs</code>
	/// " relative to the current working
	/// directory and is UTF-8 encoded.
	/// <pre>
	/// Path path = FileSystems.getDefault().getPath("logs", "access.log");
	/// BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8);
	/// </pre>
	/// <h2>Concurrency</h2>
	/// <p> Implementations of this interface are immutable and safe for use by
	/// multiple concurrent threads.
	/// </remarks>
	/// <since>ARP1.0</since>
	public abstract class IFilePath : IBaseData
	{
		/// <summary>Returns the file system that created this object.</summary>
		/// <remarks>Returns the file system that created this object.</remarks>
		/// <returns>the file system that created this object</returns>
		public abstract IFileSystem GetFileSystem();

		/// <summary>Tells whether or not this path is absolute.</summary>
		/// <remarks>
		/// Tells whether or not this path is absolute.
		/// An absolute path is complete in that it doesn't need to be combined
		/// with other path information in order to locate a file.
		/// </remarks>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if, and only if, this path is absolute
		/// </returns>
		public abstract bool IsAbsolute();

		/// <summary>
		/// Returns the root component of this path as a
		/// <code>Path</code>
		/// object,
		/// or
		/// <code>null</code>
		/// if this path does not have a root component.
		/// </summary>
		/// <returns>
		/// a path representing the root component of this path,
		/// or
		/// <code>null</code>
		/// </returns>
		public abstract IFilePath GetRoot();

		/// <summary>
		/// Returns the name of the file or directory denoted by this path as a
		/// <code>Path</code>
		/// object. The file name is the <em>farthest</em> element from
		/// the root in the directory hierarchy.
		/// </summary>
		/// <returns>
		/// a path representing the name of the file or directory, or
		/// <code>null</code>
		/// if this path has zero elements
		/// </returns>
		public abstract IFilePath GetFileName();

		/// <summary>
		/// Returns the <em>parent path</em>, or
		/// <code>null</code>
		/// if this path does not
		/// have a parent.
		/// <p> The parent of this path object consists of this path's root
		/// component, if any, and each element in the path except for the
		/// <em>farthest</em> from the root in the directory hierarchy. This method
		/// does not access the file system; the path or its parent may not exist.
		/// Furthermore, this method does not eliminate special names such as "."
		/// and ".." that may be used in some implementations. On UNIX for example,
		/// the parent of "
		/// <code>/a/b/c</code>
		/// " is "
		/// <code>/a/b</code>
		/// ", and the parent of
		/// <code>"x/y/.</code>
		/// " is "
		/// <code>x/y</code>
		/// ". This method may be used with the
		/// <see cref="Normalize()">normalize</see>
		/// method, to eliminate redundant names, for cases where
		/// <em>shell-like</em> navigation is required.
		/// </p>
		/// <p> If this path has one or more elements, and no root component, then
		/// this method is equivalent to evaluating the expression:
		/// <blockquote><pre>
		/// subpath(0,&nbsp;getNameCount()-1);
		/// </pre></blockquote>
		/// </summary>
		/// <returns>a path representing the path's parent</returns>
		public abstract IFilePath GetParent();

		/// <summary>Returns the number of name elements in the path.</summary>
		/// <remarks>Returns the number of name elements in the path.</remarks>
		/// <returns>
		/// the number of elements in the path, or
		/// <code>0</code>
		/// if this path
		/// only represents a root component
		/// </returns>
		public abstract int GetNameCount();

		/// <summary>
		/// Returns a name element of this path as a
		/// <code>Path</code>
		/// object.
		/// <p> The
		/// <code>index</code>
		/// parameter is the index of the name element to return.
		/// The element that is <em>closest</em> to the root in the directory hierarchy
		/// has index
		/// <code>0</code>
		/// . The element that is <em>farthest</em> from the root
		/// has index
		/// <see cref="GetNameCount()">count</see>
		/// <code>-1</code>
		/// .
		/// </summary>
		/// <param name="index">the index of the element</param>
		/// <returns>the name element</returns>
		/// <exception cref="System.Exception">
		/// if
		/// <code>index</code>
		/// is negative,
		/// <code>index</code>
		/// is greater than or
		/// equal to the number of elements, or this path has zero name
		/// elements
		/// </exception>
		public abstract IFilePath GetName(int index);

		/// <summary>Tests if this path starts with the given path.</summary>
		/// <remarks>
		/// Tests if this path starts with the given path.
		/// <p> This path <em>starts</em> with the given path if this path's root
		/// component <em>starts</em> with the root component of the given path,
		/// and this path starts with the same name elements as the given path.
		/// If the given path has more name elements than this path then
		/// <code>false</code>
		/// is returned.
		/// <p> Whether or not the root component of this path starts with the root
		/// component of the given path is file system specific. If this path does
		/// not have a root component and the given path has a root component then
		/// this path does not start with the given path.
		/// <p> If the given path is associated with a different
		/// <code>FileSystem</code>
		/// to this path then
		/// <code>false</code>
		/// is returned.
		/// </remarks>
		/// <param name="other">the given path</param>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if this path starts with the given path; otherwise
		/// <code>false</code>
		/// </returns>
		public abstract bool StartsWith(IFilePath other);

		/// <summary>
		/// Tests if this path starts with a
		/// <code>Path</code>
		/// , constructed by converting
		/// the given path string, in exactly the manner specified by the
		/// <see cref="StartsWith(IFilePath)">startsWith(IFilePath)</see>
		/// method. On UNIX for example, the path
		/// "
		/// <code>foo/bar</code>
		/// " starts with "
		/// <code>foo</code>
		/// " and "
		/// <code>foo/bar</code>
		/// ". It
		/// does not start with "
		/// <code>f</code>
		/// " or "
		/// <code>fo</code>
		/// ".
		/// </summary>
		/// <param name="other">the given path string</param>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if this path starts with the given path; otherwise
		/// <code>false</code>
		/// </returns>
		public abstract bool StartsWith(string other);

		/// <summary>Tests if this path ends with the given path.</summary>
		/// <remarks>
		/// Tests if this path ends with the given path.
		/// <p> If the given path has <em>N</em> elements, and no root component,
		/// and this path has <em>N</em> or more elements, then this path ends with
		/// the given path if the last <em>N</em> elements of each path, starting at
		/// the element farthest from the root, are equal.
		/// <p> If the given path has a root component then this path ends with the
		/// given path if the root component of this path <em>ends with</em> the root
		/// component of the given path, and the corresponding elements of both paths
		/// are equal. Whether or not the root component of this path ends with the
		/// root component of the given path is file system specific. If this path
		/// does not have a root component and the given path has a root component
		/// then this path does not end with the given path.
		/// <p> If the given path is associated with a different
		/// <code>FileSystem</code>
		/// to this path then
		/// <code>false</code>
		/// is returned.
		/// </remarks>
		/// <param name="other">the given path</param>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if this path ends with the given path; otherwise
		/// <code>false</code>
		/// </returns>
		public abstract bool EndsWith(IFilePath other);

		/// <summary>
		/// Tests if this path ends with a
		/// <code>Path</code>
		/// , constructed by converting
		/// the given path string, in exactly the manner specified by the
		/// <see cref="EndsWith(IFilePath)">endsWith(Path)</see>
		/// method. On UNIX for example, the path
		/// "
		/// <code>foo/bar</code>
		/// " ends with "
		/// <code>foo/bar</code>
		/// " and "
		/// <code>bar</code>
		/// ". It does
		/// not end with "
		/// <code>r</code>
		/// " or "
		/// <code>/bar</code>
		/// ". Note that trailing separators
		/// are not taken into account, and so invoking this method on the
		/// <code>Path</code>
		/// "
		/// <code>foo/bar</code>
		/// " with the
		/// <code>String</code>
		/// "
		/// <code>bar/</code>
		/// " returns
		/// <code>true</code>
		/// .
		/// </summary>
		/// <param name="other">the given path string</param>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if this path ends with the given path; otherwise
		/// <code>false</code>
		/// </returns>
		public abstract bool EndsWith(string other);

		/// <summary>Wether the current file is equal to the specified path.</summary>
		/// <remarks>Wether the current file is equal to the specified path.</remarks>
		/// <param name="other">Path.</param>
		/// <returns>true if equal, false otherwise.</returns>
		public abstract bool Equals(string other);

		/// <summary>Returns a path that is this path with redundant name elements eliminated.
		/// 	</summary>
		/// <remarks>
		/// Returns a path that is this path with redundant name elements eliminated.
		/// <p> The precise definition of this method is implementation dependent but
		/// in general it derives from this path, a path that does not contain
		/// <em>redundant</em> name elements. In many file systems, the "
		/// <code>.</code>
		/// "
		/// and "
		/// <code>..</code>
		/// " are special names used to indicate the current directory
		/// and parent directory. In such file systems all occurrences of "
		/// <code>.</code>
		/// "
		/// are considered redundant. If a "
		/// <code>..</code>
		/// " is preceded by a
		/// non-"
		/// <code>..</code>
		/// " name then both names are considered redundant (the
		/// process to identify such names is repeated until it is no longer
		/// applicable).
		/// <p> This method does not access the file system; the path may not locate
		/// a file that exists. Eliminating "
		/// <code>..</code>
		/// " and a preceding name from a
		/// path may result in the path that locates a different file than the original
		/// path. This can arise when the preceding name is a symbolic link.
		/// </remarks>
		/// <returns>
		/// the resulting path or this path if it does not contain
		/// redundant name elements; an empty path is returned if this path
		/// does have a root component and all name elements are redundant
		/// </returns>
		/// <seealso cref="GetParent()">GetParent()</seealso>
		public abstract IFilePath Normalize();

		// -- resolution and relativization --
		/// <summary>Resolve the given path against this path.</summary>
		/// <remarks>
		/// Resolve the given path against this path.
		/// <p> If the
		/// <code>other</code>
		/// parameter is an
		/// <see cref="IsAbsolute()">absolute</see>
		/// path then this method trivially returns
		/// <code>other</code>
		/// . If
		/// <code>other</code>
		/// is an <i>empty path</i> then this method trivially returns this path.
		/// Otherwise this method considers this path to be a directory and resolves
		/// the given path against this path. In the simplest case, the given path
		/// does not have a
		/// <see cref="GetRoot()">root</see>
		/// component, in which case this method
		/// <em>joins</em> the given path to this path and returns a resulting path
		/// that
		/// <see cref="EndsWith(IFilePath)">ends</see>
		/// with the given path. Where the given path has
		/// a root component then resolution is highly implementation dependent and
		/// therefore unspecified.
		/// </remarks>
		/// <param name="other">the path to resolve against this path</param>
		/// <returns>the resulting path</returns>
		/// <seealso cref="Relativize(IFilePath)">Relativize(IFilePath)</seealso>
		public abstract IFilePath Resolve(IFilePath other);

		/// <summary>
		/// Converts a given path string to a
		/// <code>Path</code>
		/// and resolves it against
		/// this
		/// <code>Path</code>
		/// in exactly the manner specified by the
		/// <see cref="Resolve(IFilePath)">resolve</see>
		/// method. For example, suppose that the name
		/// separator is "
		/// <code>/</code>
		/// " and a path represents "
		/// <code>foo/bar</code>
		/// ", then
		/// invoking this method with the path string "
		/// <code>gus</code>
		/// " will result in
		/// the
		/// <code>Path</code>
		/// "
		/// <code>foo/bar/gus</code>
		/// ".
		/// </summary>
		/// <param name="other">the path string to resolve against this path</param>
		/// <returns>the resulting path</returns>
		public abstract IFilePath Resolve(string other);

		/// <summary>
		/// Resolves the given path against this path's
		/// <see cref="GetParent()">parent</see>
		/// path. This is useful where a file name needs to be <i>replaced</i> with
		/// another file name. For example, suppose that the name separator is
		/// "
		/// <code>/</code>
		/// " and a path represents "
		/// <code>dir1/dir2/foo</code>
		/// ", then invoking
		/// this method with the
		/// <code>Path</code>
		/// "
		/// <code>bar</code>
		/// " will result in the
		/// <code>Path</code>
		/// "
		/// <code>dir1/dir2/bar</code>
		/// ". If this path does not have a parent path,
		/// or
		/// <code>other</code>
		/// is
		/// <see cref="IsAbsolute()">absolute</see>
		/// , then this method
		/// returns
		/// <code>other</code>
		/// . If
		/// <code>other</code>
		/// is an empty path then this method
		/// returns this path's parent, or where this path doesn't have a parent, the
		/// empty path.
		/// </summary>
		/// <param name="other">the path to resolve against this path's parent</param>
		/// <returns>the resulting path</returns>
		/// <seealso cref="Resolve(IFilePath)">Resolve(IFilePath)</seealso>
		public abstract IFilePath ResolveSibling(IFilePath other);

		/// <summary>
		/// Converts a given path string to a
		/// <code>Path</code>
		/// and resolves it against
		/// this path's
		/// <see cref="GetParent()">parent</see>
		/// path in exactly the manner
		/// specified by the
		/// <see cref="ResolveSibling(IFilePath)">resolveSibling</see>
		/// method.
		/// </summary>
		/// <param name="other">the path string to resolve against this path's parent</param>
		/// <returns>the resulting path</returns>
		public abstract IFilePath ResolveSibling(string other);

		/// <summary>Constructs a relative path between this path and a given path.</summary>
		/// <remarks>
		/// Constructs a relative path between this path and a given path.
		/// <p> Relativization is the inverse of
		/// <see cref="Resolve(IFilePath)">resolution</see>
		/// .
		/// This method attempts to construct a
		/// <see cref="IsAbsolute()">relative</see>
		/// path
		/// that when
		/// <see cref="Resolve(IFilePath)">resolved</see>
		/// against this path, yields a
		/// path that locates the same file as the given path. For example, on UNIX,
		/// if this path is
		/// <code>"/a/b"</code>
		/// and the given path is
		/// <code>"/a/b/c/d"</code>
		/// then the resulting relative path would be
		/// <code>"c/d"</code>
		/// . Where this
		/// path and the given path do not have a
		/// <see cref="GetRoot()">root</see>
		/// component,
		/// then a relative path can be constructed. A relative path cannot be
		/// constructed if only one of the paths have a root component. Where both
		/// paths have a root component then it is implementation dependent if a
		/// relative path can be constructed. If this path and the given path are
		/// <see cref="Equals(string)">equal</see>
		/// then an <i>empty path</i> is returned.
		/// <p> For any two
		/// <see cref="Normalize()">normalized</see>
		/// paths <i>p</i> and
		/// <i>q</i>, where <i>q</i> does not have a root component,
		/// <blockquote>
		/// <i>p</i><tt>.relativize(</tt><i>p</i><tt>.resolve(</tt><i>q</i><tt>)).equals(</tt><i>q</i><tt>)</tt>
		/// </blockquote>
		/// <p> When symbolic links are supported, then whether the resulting path,
		/// when resolved against this path, yields a path that can be used to locate
		/// the file as
		/// <code>other</code>
		/// is implementation dependent. For example, if this
		/// path is
		/// <code>"/a/b"</code>
		/// and the given path is
		/// <code>"/a/x"</code>
		/// then the resulting
		/// relative path may be
		/// <code>"../x"</code>
		/// . If
		/// <code>"b"</code>
		/// is a symbolic link then is
		/// implementation dependent if
		/// <code>"a/b/../x"</code>
		/// would locate the same file as
		/// <code>"/a/x"</code>
		/// .
		/// </remarks>
		/// <param name="other">the path to relativize against this path</param>
		/// <returns>
		/// the resulting relative path, or an empty path if both paths are
		/// equal
		/// </returns>
		public abstract IFilePath Relativize(IFilePath other);

		/// <summary>
		/// Returns a
		/// <code>Path</code>
		/// object representing the absolute path of this
		/// path.
		/// <p> If this path is already
		/// <see cref="IsAbsolute()">absolute</see>
		/// then this
		/// method simply returns this path. Otherwise, this method resolves the path
		/// in an implementation dependent manner, typically by resolving the path
		/// against a file system default directory. Depending on the implementation,
		/// this method may throw an I/O error if the file system is not accessible.
		/// </summary>
		/// <returns>
		/// a
		/// <code>Path</code>
		/// object representing the absolute path
		/// </returns>
		/// <exception cref="Sharpen.IOError">if an I/O error occurs</exception>
		public abstract IFilePath ToAbsolutePath();

		/// <summary>
		/// Returns a
		/// <see cref="IFile">IFile</see>
		/// object representing this path. Where this
		/// <code>Path</code>
		/// is associated with the default provider, then this method is
		/// equivalent to returning a
		/// <code>File</code>
		/// object constructed with the
		/// <code>String</code>
		/// representation of this path.
		/// <p> If this path was created by invoking the
		/// <code>File</code>
		/// 
		/// <see cref="IFile.ToPath()">toPath</see>
		/// method then there is no guarantee that the
		/// <code>File</code>
		/// object returned by this method is
		/// <see cref="Equals(string)">equal</see>
		/// to the
		/// original
		/// <code>File</code>
		/// .
		/// </summary>
		/// <returns>
		/// a
		/// <code>File</code>
		/// object representing this path
		/// </returns>
		public abstract IFile ToFile();

		/// <summary>Tests this path for equality with the given object.</summary>
		/// <remarks>
		/// Tests this path for equality with the given object.
		/// <p> If the given object is not a Path, or is a Path associated with a
		/// different
		/// <code>FileSystem</code>
		/// , then this method returns
		/// <code>false</code>
		/// .
		/// <p> Whether or not two path are equal depends on the file system
		/// implementation. In some cases the paths are compared without regard
		/// to case, and others are case sensitive. This method does not access the
		/// file system and the file is not required to exist. Where required, the
		/// <see cref="IFileSystem.IsSameFile(IFile, IFile)">isSameFile</see>
		/// method may be used to check if two
		/// paths locate the same file.
		/// <p> This method satisfies the general contract of the
		/// <see cref="object.Equals(object)">Object.equals</see>
		/// method. </p>
		/// </remarks>
		/// <param name="other">the object to which this object is to be compared</param>
		/// <returns>
		/// 
		/// <code>true</code>
		/// if, and only if, the given object is a
		/// <code>Path</code>
		/// that is identical to this
		/// <code>Path</code>
		/// </returns>
		public abstract bool EqualPath(IFilePath other);

		/// <summary>Returns the string representation of this path.</summary>
		/// <remarks>
		/// Returns the string representation of this path.
		/// <p> If this path was created by converting a path string using the
		/// <see cref="IFileSystem.GetPath(IFilePath)">getPath</see>
		/// method then the path string returned
		/// by this method may differ from the original String used to create the path.
		/// <p> The returned path string uses the default name
		/// <see cref="IFileSystem.GetSeparator()">separator</see>
		/// to separate names in the path.
		/// </remarks>
		/// <returns>the string representation of this path</returns>
		public abstract string ToString();

		/// <summary>Location of the file storage.</summary>
		/// <remarks>Location of the file storage.</remarks>
		/// <since>ARP1.0</since>
		public enum StorageType
		{
			Internal,
			Remote,
			Isolated,
			External
		}

		/// <summary>Type of file - directory/folder or file.</summary>
		/// <remarks>Type of file - directory/folder or file.</remarks>
		/// <since>ARP1.0</since>
		public enum FileType
		{
			Directory,
			File
		}
	}
}
