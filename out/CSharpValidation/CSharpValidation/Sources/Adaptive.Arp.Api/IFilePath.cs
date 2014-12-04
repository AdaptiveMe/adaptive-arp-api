/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

using System;

namespace Adaptive.Arp.Api
{
     /**
        An object that may be used to locate a file in a file system. It will
typically represent a system dependent file path.
<p> A {@code Path} represents a path that is hierarchical and composed of a
sequence of directory and file name elements separated by a special separator
or delimiter. A <em>root component</em>, that identifies a file system
hierarchy, may also be present. The name element that is <em>farthest</em>
from the root of the directory hierarchy is the name of a file or directory.
The other name elements are directory names. A {@code Path} can represent a
root, a root and a sequence of names, or simply one or more name elements.
A {@code Path} is considered to be an <i>empty path</i> if it consists
solely of one name element that is empty. Accessing a file using an
<i>empty path</i> is equivalent to accessing the default directory of the
file system. {@code Path} defines the {@link #getFileName() getFileName},
{@link #getParent getParent}, {@link #getRoot getRoot}, and  methods to access
the path components or a subsequence of its name elements.
<p> In addition to accessing the components of a path, a {@code Path} also
defines the {@link #resolvePath(IFilePath) resolve} and {@link #resolveSiblingPath(IFilePath)
resolveSibling} methods to combine paths. The {@link #relativize relativize}
method that can be used to construct a relative path between two paths.
Paths can be, and tested against each other using
the {@link #startsWith startsWith} and {@link #endsWith endsWith} methods.
<p> <b>WARNING:</b> This interface is only intended to be implemented by
those developing custom file system implementations. Methods may be added to
this interface in future releases. </p>
<h2>Accessing Files</h2>
<p> Paths may be used with the {@link IFile} class to operate on files,
directories, and other types of files. For example, suppose we want a {@link
java.io.BufferedReader} to read text from a file "{@code access.log}". The
file is located in a directory "{@code logs}" relative to the current working
directory and is UTF-8 encoded.
<pre>
    Path path = FileSystems.getDefault().getPath("logs", "access.log");
    BufferedReader reader = Files.newBufferedReader(path, StandardCharsets.UTF_8);
</pre>
<h2>Concurrency</h2>
<p> Implementations of this interface are immutable and safe for use by
multiple concurrent threads.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     public interface IFilePath : IBaseData {
     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
