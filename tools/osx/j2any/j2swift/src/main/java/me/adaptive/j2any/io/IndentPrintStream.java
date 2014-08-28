package me.adaptive.j2any.io;

import java.io.*;

/**
 * Created by clozano on 28/08/2014.
 */
public class IndentPrintStream extends PrintStream {
    /**
     * Creates a new print stream.  This stream will not flush automatically.
     *
     * @param out The output stream to which values and objects will be
     *            printed
     * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream)
     */
    public IndentPrintStream(OutputStream out) {
        super(out);
    }

    /**
     * Creates a new print stream.
     *
     * @param out       The output stream to which values and objects will be
     *                  printed
     * @param autoFlush A boolean; if true, the output buffer will be flushed
     *                  whenever a byte array is written, one of the
     *                  <code>println</code> methods is invoked, or a newline
     *                  character or byte (<code>'\n'</code>) is written
     * @see java.io.PrintWriter#PrintWriter(java.io.OutputStream, boolean)
     */
    public IndentPrintStream(OutputStream out, boolean autoFlush) {
        super(out, autoFlush);
    }

    /**
     * Creates a new print stream.
     *
     * @param out       The output stream to which values and objects will be
     *                  printed
     * @param autoFlush A boolean; if true, the output buffer will be flushed
     *                  whenever a byte array is written, one of the
     *                  <code>println</code> methods is invoked, or a newline
     *                  character or byte (<code>'\n'</code>) is written
     * @param encoding  The name of a supported
     *                  <a href="../lang/package-summary.html#charenc">
     *                  character encoding</a>
     * @throws java.io.UnsupportedEncodingException If the named encoding is not supported
     * @since 1.4
     */
    public IndentPrintStream(OutputStream out, boolean autoFlush, String encoding) throws UnsupportedEncodingException {
        super(out, autoFlush, encoding);
    }

    /**
     * Creates a new print stream, without automatic line flushing, with the
     * specified file name.  This convenience constructor creates
     * the necessary intermediate {@link java.io.OutputStreamWriter
     * OutputStreamWriter}, which will encode characters using the
     * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}
     * for this instance of the Java virtual machine.
     *
     * @param fileName The name of the file to use as the destination of this print
     *                 stream.  If the file exists, then it will be truncated to
     *                 zero size; otherwise, a new file will be created.  The output
     *                 will be written to the file and is buffered.
     * @throws java.io.FileNotFoundException If the given file object does not denote an existing, writable
     *                                       regular file and a new regular file of that name cannot be
     *                                       created, or if some other error occurs while opening or
     *                                       creating the file
     * @throws SecurityException             If a security manager is present and {@link
     *                                       SecurityManager#checkWrite checkWrite(fileName)} denies write
     *                                       access to the file
     * @since 1.5
     */
    public IndentPrintStream(String fileName) throws FileNotFoundException {
        super(fileName);
    }

    /**
     * Creates a new print stream, without automatic line flushing, with the
     * specified file name and charset.  This convenience constructor creates
     * the necessary intermediate {@link java.io.OutputStreamWriter
     * OutputStreamWriter}, which will encode characters using the provided
     * charset.
     *
     * @param fileName The name of the file to use as the destination of this print
     *                 stream.  If the file exists, then it will be truncated to
     *                 zero size; otherwise, a new file will be created.  The output
     *                 will be written to the file and is buffered.
     * @param csn      The name of a supported {@linkplain java.nio.charset.Charset
     *                 charset}
     * @throws java.io.FileNotFoundException        If the given file object does not denote an existing, writable
     *                                              regular file and a new regular file of that name cannot be
     *                                              created, or if some other error occurs while opening or
     *                                              creating the file
     * @throws SecurityException                    If a security manager is present and {@link
     *                                              SecurityManager#checkWrite checkWrite(fileName)} denies write
     *                                              access to the file
     * @throws java.io.UnsupportedEncodingException If the named charset is not supported
     * @since 1.5
     */
    public IndentPrintStream(String fileName, String csn) throws FileNotFoundException, UnsupportedEncodingException {
        super(fileName, csn);
    }

    /**
     * Creates a new print stream, without automatic line flushing, with the
     * specified file.  This convenience constructor creates the necessary
     * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
     * which will encode characters using the {@linkplain
     * java.nio.charset.Charset#defaultCharset() default charset} for this
     * instance of the Java virtual machine.
     *
     * @param file The file to use as the destination of this print stream.  If the
     *             file exists, then it will be truncated to zero size; otherwise,
     *             a new file will be created.  The output will be written to the
     *             file and is buffered.
     * @throws java.io.FileNotFoundException If the given file object does not denote an existing, writable
     *                                       regular file and a new regular file of that name cannot be
     *                                       created, or if some other error occurs while opening or
     *                                       creating the file
     * @throws SecurityException             If a security manager is present and {@link
     *                                       SecurityManager#checkWrite checkWrite(file.getPath())}
     *                                       denies write access to the file
     * @since 1.5
     */
    public IndentPrintStream(File file) throws FileNotFoundException {
        super(file);
    }

    /**
     * Creates a new print stream, without automatic line flushing, with the
     * specified file and charset.  This convenience constructor creates
     * the necessary intermediate {@link java.io.OutputStreamWriter
     * OutputStreamWriter}, which will encode characters using the provided
     * charset.
     *
     * @param file The file to use as the destination of this print stream.  If the
     *             file exists, then it will be truncated to zero size; otherwise,
     *             a new file will be created.  The output will be written to the
     *             file and is buffered.
     * @param csn  The name of a supported {@linkplain java.nio.charset.Charset
     *             charset}
     * @throws java.io.FileNotFoundException        If the given file object does not denote an existing, writable
     *                                              regular file and a new regular file of that name cannot be
     *                                              created, or if some other error occurs while opening or
     *                                              creating the file
     * @throws SecurityException                    If a security manager is present and {@link
     *                                              SecurityManager#checkWrite checkWrite(file.getPath())}
     *                                              denies write access to the file
     * @throws java.io.UnsupportedEncodingException If the named charset is not supported
     * @since 1.5
     */
    public IndentPrintStream(File file, String csn) throws FileNotFoundException, UnsupportedEncodingException {
        super(file, csn);
    }

    public void println(int indent, String str) {
        for (int i = 0; i < indent; i++) {
            this.print(" ");
        }
        this.println(str);
    }

    public void print(int indent, String str) {
        for (int i = 0; i < indent; i++) {
            this.print(" ");
        }
        this.print(str);
    }
}
