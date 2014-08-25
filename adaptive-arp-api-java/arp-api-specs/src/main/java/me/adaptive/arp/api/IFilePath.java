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

package me.adaptive.arp.api;

/**
 * An object that may be used to locate a file in a file system. It will
 * typically represent a system dependent file path.
 * <p> A {@code Path} represents a path that is hierarchical and composed of a
 * sequence of directory and file name elements separated by a special separator
 * or delimiter. A <em>root component</em>, that identifies a file system
 * hierarchy, may also be present. The name element that is <em>farthest</em>
 * from the root of the directory hierarchy is the name of a file or directory.
 * The other name elements are directory names. A {@code Path} can represent a
 * root, a root and a sequence of names, or simply one or more name elements.
 * A {@code Path} is considered to be an <i>empty path</i> if it consists
 * solely of one name element that is empty. Accessing a file using an
 * <i>empty path</i> is equivalent to accessing the default directory of the
 * file system. {@code Path} defines the {@link #getFileName() getFileName},
 * {@link #getParent getParent}, {@link #getRoot getRoot}, and  methods to access
 * the path components or a subsequence of its name elements.
 * <p> In addition to accessing the components of a path, a {@code Path} also
 * defines the {@link #resolve(IFilePath) resolve} and {@link #resolveSibling(IFilePath)
 * resolveSibling} methods to combine paths. The {@link #relativize relativize}
 * method that can be used to construct a relative path between two paths.
 * Paths can be, and tested against each other using
 * the {@link #startsWith startsWith} and {@link #endsWith endsWith} methods.
 * <p> <b>WARNING:</b> This interface is only intended to be implemented by
 * those developing custom file system implementations. Methods may be added to
 * this interface in future releases. </p>
 * <h2>Accessing Files</h2>
 * <p> Paths may be used with the {@link IFile} class to operate on files,
 * directories, and other types of files. For example, suppose we want a {@link
 * java.io.BufferedReader} to read text from a file "{@code access.log}". The
 * file is located in a directory "{@code logs}" relative to the current working
 * directory and is UTF-8 encoded.
 * <pre>
 *     Path path = FileSystems.getDefault().getPath("logs", "access.log");
 *     BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8);
 * </pre>
 * <h2>Concurrency</h2>
 * <p> Implementations of this interface are immutable and safe for use by
 * multiple concurrent threads.
 *
 * @since ARP1.0
 */

public interface IFilePath extends IBaseData {
    /**
     * Returns the file system that created this object.
     *
     * @return the file system that created this object
     */
    public IFileSystem getFileSystem();

    /**
     * Tells whether or not this path is absolute.
     * An absolute path is complete in that it doesn't need to be combined
     * with other path information in order to locate a file.
     *
     * @return {@code true} if, and only if, this path is absolute
     */
    public boolean isAbsolute();

    /**
     * Returns the root component of this path as a {@code Path} object,
     * or {@code null} if this path does not have a root component.
     *
     * @return a path representing the root component of this path,
     * or {@code null}
     */
    public IFilePath getRoot();

    /**
     * Returns the name of the file or directory denoted by this path as a
     * {@code Path} object. The file name is the <em>farthest</em> element from
     * the root in the directory hierarchy.
     *
     * @return a path representing the name of the file or directory, or
     * {@code null} if this path has zero elements
     */
    public IFilePath getFileName();

    /**
     * Returns the <em>parent path</em>, or {@code null} if this path does not
     * have a parent.
     * <p> The parent of this path object consists of this path's root
     * component, if any, and each element in the path except for the
     * <em>farthest</em> from the root in the directory hierarchy. This method
     * does not access the file system; the path or its parent may not exist.
     * Furthermore, this method does not eliminate special names such as "."
     * and ".." that may be used in some implementations. On UNIX for example,
     * the parent of "{@code /a/b/c}" is "{@code /a/b}", and the parent of
     * {@code "x/y/.}" is "{@code x/y}". This method may be used with the {@link
     * #normalize normalize} method, to eliminate redundant names, for cases where
     * <em>shell-like</em> navigation is required.
     * </p>
     * <p> If this path has one or more elements, and no root component, then
     * this method is equivalent to evaluating the expression:
     * <blockquote><pre>
     * subpath(0,&nbsp;getNameCount()-1);
     * </pre></blockquote>
     *
     * @return a path representing the path's parent
     */
    public IFilePath getParent();

    /**
     * Returns the number of name elements in the path.
     *
     * @return the number of elements in the path, or {@code 0} if this path
     * only represents a root component
     */
    public int getNameCount();

    /**
     * Returns a name element of this path as a {@code Path} object.
     * <p> The {@code index} parameter is the index of the name element to return.
     * The element that is <em>closest</em> to the root in the directory hierarchy
     * has index {@code 0}. The element that is <em>farthest</em> from the root
     * has index {@link #getNameCount count}{@code -1}.
     *
     * @param index the index of the element
     * @return the name element
     * @throws Exception if {@code index} is negative, {@code index} is greater than or
     *                   equal to the number of elements, or this path has zero name
     *                   elements
     */
    public IFilePath getName(int index) throws Exception;

    /**
     * Tests if this path starts with the given path.
     * <p> This path <em>starts</em> with the given path if this path's root
     * component <em>starts</em> with the root component of the given path,
     * and this path starts with the same name elements as the given path.
     * If the given path has more name elements than this path then {@code false}
     * is returned.
     * <p> Whether or not the root component of this path starts with the root
     * component of the given path is file system specific. If this path does
     * not have a root component and the given path has a root component then
     * this path does not start with the given path.
     * <p> If the given path is associated with a different {@code FileSystem}
     * to this path then {@code false} is returned.
     *
     * @param other the given path
     * @return {@code true} if this path starts with the given path; otherwise
     * {@code false}
     */
    public boolean startsWith(IFilePath other);

    /**
     * Tests if this path starts with a {@code Path}, constructed by converting
     * the given path string, in exactly the manner specified by the {@link
     * #startsWith(IFilePath) startsWith(IFilePath)} method. On UNIX for example, the path
     * "{@code foo/bar}" starts with "{@code foo}" and "{@code foo/bar}". It
     * does not start with "{@code f}" or "{@code fo}".
     *
     * @param other the given path string
     * @return {@code true} if this path starts with the given path; otherwise
     * {@code false}
     */
    public boolean startsWith(String other);

    /**
     * Tests if this path ends with the given path.
     * <p> If the given path has <em>N</em> elements, and no root component,
     * and this path has <em>N</em> or more elements, then this path ends with
     * the given path if the last <em>N</em> elements of each path, starting at
     * the element farthest from the root, are equal.
     * <p> If the given path has a root component then this path ends with the
     * given path if the root component of this path <em>ends with</em> the root
     * component of the given path, and the corresponding elements of both paths
     * are equal. Whether or not the root component of this path ends with the
     * root component of the given path is file system specific. If this path
     * does not have a root component and the given path has a root component
     * then this path does not end with the given path.
     * <p> If the given path is associated with a different {@code FileSystem}
     * to this path then {@code false} is returned.
     *
     * @param other the given path
     * @return {@code true} if this path ends with the given path; otherwise
     * {@code false}
     */
    public boolean endsWith(IFilePath other);

    /**
     * Tests if this path ends with a {@code Path}, constructed by converting
     * the given path string, in exactly the manner specified by the {@link
     * #endsWith(IFilePath) endsWith(Path)} method. On UNIX for example, the path
     * "{@code foo/bar}" ends with "{@code foo/bar}" and "{@code bar}". It does
     * not end with "{@code r}" or "{@code /bar}". Note that trailing separators
     * are not taken into account, and so invoking this method on the {@code
     * Path}"{@code foo/bar}" with the {@code String} "{@code bar/}" returns
     * {@code true}.
     *
     * @param other the given path string
     * @return {@code true} if this path ends with the given path; otherwise
     * {@code false}
     */
    public boolean endsWith(String other);

    /**
     * Wether the current file is equal to the specified path.
     *
     * @param other Path.
     * @return true if equal, false otherwise.
     */
    public boolean equals(String other);

    /**
     * Returns a path that is this path with redundant name elements eliminated.
     * <p> The precise definition of this method is implementation dependent but
     * in general it derives from this path, a path that does not contain
     * <em>redundant</em> name elements. In many file systems, the "{@code .}"
     * and "{@code ..}" are special names used to indicate the current directory
     * and parent directory. In such file systems all occurrences of "{@code .}"
     * are considered redundant. If a "{@code ..}" is preceded by a
     * non-"{@code ..}" name then both names are considered redundant (the
     * process to identify such names is repeated until it is no longer
     * applicable).
     * <p> This method does not access the file system; the path may not locate
     * a file that exists. Eliminating "{@code ..}" and a preceding name from a
     * path may result in the path that locates a different file than the original
     * path. This can arise when the preceding name is a symbolic link.
     *
     * @return the resulting path or this path if it does not contain
     * redundant name elements; an empty path is returned if this path
     * does have a root component and all name elements are redundant
     * @see #getParent
     */
    public IFilePath normalize();

    // -- resolution and relativization --

    /**
     * Resolve the given path against this path.
     * <p> If the {@code other} parameter is an {@link #isAbsolute() absolute}
     * path then this method trivially returns {@code other}. If {@code other}
     * is an <i>empty path</i> then this method trivially returns this path.
     * Otherwise this method considers this path to be a directory and resolves
     * the given path against this path. In the simplest case, the given path
     * does not have a {@link #getRoot root} component, in which case this method
     * <em>joins</em> the given path to this path and returns a resulting path
     * that {@link #endsWith ends} with the given path. Where the given path has
     * a root component then resolution is highly implementation dependent and
     * therefore unspecified.
     *
     * @param other the path to resolve against this path
     * @return the resulting path
     * @see #relativize
     */
    public IFilePath resolve(IFilePath other);

    /**
     * Converts a given path string to a {@code Path} and resolves it against
     * this {@code Path} in exactly the manner specified by the {@link
     * #resolve(IFilePath) resolve} method. For example, suppose that the name
     * separator is "{@code /}" and a path represents "{@code foo/bar}", then
     * invoking this method with the path string "{@code gus}" will result in
     * the {@code Path} "{@code foo/bar/gus}".
     *
     * @param other the path string to resolve against this path
     * @return the resulting path
     */
    public IFilePath resolve(String other);

    /**
     * Resolves the given path against this path's {@link #getParent parent}
     * path. This is useful where a file name needs to be <i>replaced</i> with
     * another file name. For example, suppose that the name separator is
     * "{@code /}" and a path represents "{@code dir1/dir2/foo}", then invoking
     * this method with the {@code Path} "{@code bar}" will result in the {@code
     * Path} "{@code dir1/dir2/bar}". If this path does not have a parent path,
     * or {@code other} is {@link #isAbsolute() absolute}, then this method
     * returns {@code other}. If {@code other} is an empty path then this method
     * returns this path's parent, or where this path doesn't have a parent, the
     * empty path.
     *
     * @param other the path to resolve against this path's parent
     * @return the resulting path
     * @see #resolve(IFilePath)
     */
    public IFilePath resolveSibling(IFilePath other);

    /**
     * Converts a given path string to a {@code Path} and resolves it against
     * this path's {@link #getParent parent} path in exactly the manner
     * specified by the {@link #resolveSibling(IFilePath) resolveSibling} method.
     *
     * @param other the path string to resolve against this path's parent
     * @return the resulting path
     */
    public IFilePath resolveSibling(String other);

    /**
     * Constructs a relative path between this path and a given path.
     * <p> Relativization is the inverse of {@link #resolve(IFilePath) resolution}.
     * This method attempts to construct a {@link #isAbsolute relative} path
     * that when {@link #resolve(IFilePath) resolved} against this path, yields a
     * path that locates the same file as the given path. For example, on UNIX,
     * if this path is {@code "/a/b"} and the given path is {@code "/a/b/c/d"}
     * then the resulting relative path would be {@code "c/d"}. Where this
     * path and the given path do not have a {@link #getRoot root} component,
     * then a relative path can be constructed. A relative path cannot be
     * constructed if only one of the paths have a root component. Where both
     * paths have a root component then it is implementation dependent if a
     * relative path can be constructed. If this path and the given path are
     * {@link #equals equal} then an <i>empty path</i> is returned.
     * <p> For any two {@link #normalize normalized} paths <i>p</i> and
     * <i>q</i>, where <i>q</i> does not have a root component,
     * <blockquote>
     * <i>p</i><tt>.relativize(</tt><i>p</i><tt>.resolve(</tt><i>q</i><tt>)).equals(</tt><i>q</i><tt>)</tt>
     * </blockquote>
     * <p> When symbolic links are supported, then whether the resulting path,
     * when resolved against this path, yields a path that can be used to locate
     * the file as {@code other} is implementation dependent. For example, if this
     * path is  {@code "/a/b"} and the given path is {@code "/a/x"} then the resulting
     * relative path may be {@code "../x"}. If {@code "b"} is a symbolic link then is
     * implementation dependent if {@code "a/b/../x"} would locate the same file as
     * {@code "/a/x"}.
     *
     * @param other the path to relativize against this path
     * @return the resulting relative path, or an empty path if both paths are
     * equal
     */
    public IFilePath relativize(IFilePath other);

    /**
     * Returns a {@code Path} object representing the absolute path of this
     * path.
     * <p> If this path is already {@link IFilePath#isAbsolute absolute} then this
     * method simply returns this path. Otherwise, this method resolves the path
     * in an implementation dependent manner, typically by resolving the path
     * against a file system default directory. Depending on the implementation,
     * this method may throw an I/O error if the file system is not accessible.
     *
     * @return a {@code Path} object representing the absolute path
     * @throws java.io.IOError if an I/O error occurs
     */
    public IFilePath toAbsolutePath();

    /**
     * Returns a {@link IFile} object representing this path. Where this {@code
     * Path} is associated with the default provider, then this method is
     * equivalent to returning a {@code File} object constructed with the
     * {@code String} representation of this path.
     * <p> If this path was created by invoking the {@code File} {@link
     * IFile#toPath toPath} method then there is no guarantee that the {@code
     * File} object returned by this method is {@link #equals equal} to the
     * original {@code File}.
     *
     * @return a {@code File} object representing this path
     */
    public IFile toFile();

    /**
     * Tests this path for equality with the given object.
     * <p> If the given object is not a Path, or is a Path associated with a
     * different {@code FileSystem}, then this method returns {@code false}.
     * <p> Whether or not two path are equal depends on the file system
     * implementation. In some cases the paths are compared without regard
     * to case, and others are case sensitive. This method does not access the
     * file system and the file is not required to exist. Where required, the
     * {@link IFileSystem#isSameFile isSameFile} method may be used to check if two
     * paths locate the same file.
     * <p> This method satisfies the general contract of the {@link
     * java.lang.Object#equals(Object) Object.equals} method. </p>
     *
     * @param other the object to which this object is to be compared
     * @return {@code true} if, and only if, the given object is a {@code Path}
     * that is identical to this {@code Path}
     */
    public boolean equalPath(IFilePath other);

    /**
     * Returns the string representation of this path.
     * <p> If this path was created by converting a path string using the
     * {@link IFileSystem#getPath getPath} method then the path string returned
     * by this method may differ from the original String used to create the path.
     * <p> The returned path string uses the default name {@link
     * IFileSystem#getSeparator separator} to separate names in the path.
     *
     * @return the string representation of this path
     */
    public String toString();

    /**
     * Location of the file storage.
     *
     * @since ARP1.0
     */
    public enum StorageType {
        Internal, Remote, Isolated, External
    }

    /**
     * Type of file - directory/folder or file.
     *
     * @since ARP1.0
     */
    public enum FileType {
        Directory, File
    }
}