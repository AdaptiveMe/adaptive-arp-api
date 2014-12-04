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
declare module Adaptive {
    /**
       Definition of IAdaptiveRP interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAdaptiveRP {
    }
    /**
       Definition of IBaseSecurity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSecurity extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSystem interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSystem extends IAdaptiveRP {
    }
    /**
       Definition of IBaseCommerce interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCommerce extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSensor interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSensor extends IAdaptiveRP {
    }
    /**
       Definition of IBaseListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseListener extends IAdaptiveRP {
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppContext extends IAdaptiveRP {
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppRegistry extends IAdaptiveRP {
    }
    /**
       Definition of IBasePIM interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBasePIM extends IAdaptiveRP {
    }
    /**
       Definition of IBaseCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCallback extends IAdaptiveRP {
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResource extends IAdaptiveRP {
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResourceHandler extends IAdaptiveRP {
    }
    /**
       Definition of IBaseUI interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseUI extends IAdaptiveRP {
    }
    /**
       Definition of IBaseReader interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseReader extends IAdaptiveRP {
    }
    /**
       Definition of IBaseNotification interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseNotification extends IAdaptiveRP {
    }
    /**
       Definition of IBaseApplication interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseApplication extends IAdaptiveRP {
    }
    /**
       Definition of IBaseSocial interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseSocial extends IAdaptiveRP {
    }
    /**
       Definition of IBaseMedia interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseMedia extends IAdaptiveRP {
    }
    /**
       Definition of IBaseCommunication interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseCommunication extends IAdaptiveRP {
    }
    /**
       This interfaces represents a specific instance of a listener on the platform. Listeners are generally http or https
and provide access to the localhost/127.0.0.1 to retrieve embedded HTML content and resources.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppServer extends IAdaptiveRP {
    }
    /**
       Created by clozano on 09/09/14.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppContextWebview extends IAdaptiveRP {
    }
    /**
       Definition of IBaseData interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseData extends IAdaptiveRP {
    }
    /**
       Definition of IBaseUtil interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBaseUtil extends IAdaptiveRP {
    }
    /**
       Provides support for multiple listeners to be started for any application and manages the delivery of listening
server lifecycle events to registered listeners.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppServerManager extends IAdaptiveRP {
    }
    /**
       Definition of IInternalStorage interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IInternalStorage extends IBaseData {
    }
    /**
       Definition of IButtonListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IButtonListener extends IBaseListener {
    }
    /**
       Created by FRMI on 25/08/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContactPhotoResultCallback extends IBaseCallback {
    }
    /**
       Definition of IGlobalization interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGlobalization extends IBaseApplication {
    }
    /**
       Definition of IFileSystem interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileSystem extends IBaseData {
    }
    /**
       Definition of IStore interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IStore extends IBaseCommerce {
    }
    /**
       Definition of IQRCode interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IQRCode extends IBaseReader {
    }
    /**
       Definition of IOpenId interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOpenId extends IBaseSecurity {
    }
    /**
       Definition of INetworkStatus interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkStatus extends IBaseCommunication {
    }
    /**
       Definition of ICrypto interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICrypto extends IBaseUtil {
    }
    /**
       Definition of IUpdate interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IUpdate extends IBaseApplication {
    }
    /**
       Definition of IBarometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBarometer extends IBaseSensor {
    }
    /**
       Definition of IProximity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IProximity extends IBaseSensor {
    }
    /**
       Definition of IMail interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMail extends IBasePIM {
    }
    /**
       Definition of IDataStream interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDataStream extends IBaseData {
    }
    /**
       Definition of IGyroscope interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGyroscope extends IBaseSensor {
    }
    /**
       Definition of IFileResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileResultCallback extends IBaseCallback {
    }
    /**
       Definition of ICompression interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICompression extends IBaseUtil {
    }
    /**
       Definition of ILogging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILogging extends IBaseUtil {
    }
    /**
       Definition of IVibration interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IVibration extends IBaseNotification {
    }
    /**
       Definition of IOCR interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOCR extends IBaseReader {
    }
    /**
       Definition of IOS interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOS extends IBaseSystem {
    }
    /**
       Definition of IFileDataResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileDataResultCallback extends IBaseCallback {
    }
    /**
       Definition of ISettings interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISettings extends IBaseApplication {
    }
    /**
       Definition of IManagement interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IManagement extends IBaseApplication {
    }
    /**
       Definition of IBluetooth interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBluetooth extends IBaseCommunication {
    }
    /**
       Definition of IDevice interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDevice extends IBaseSystem {
    }
    /**
       Definition of IMessaging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMessaging extends IBasePIM {
    }
    /**
       Definition of INetworkReachability interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkReachability extends IBaseCommunication {
    }
    /**
       Definition of IImaging interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IImaging extends IBaseMedia {
    }
    /**
       Definition of IFacebook interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFacebook extends IBaseSocial {
    }
    /**
       Definition of ILinkedIn interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILinkedIn extends IBaseSocial {
    }
    /**
       Definition of IRuntime interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IRuntime extends IBaseSystem {
    }
    /**
       Definition of ICamera interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICamera extends IBaseMedia {
    }
    /**
       Definition of INetworkInfo interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkInfo extends IBaseCommunication {
    }
    /**
       Definition of INotification interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INotification extends IBaseNotification {
    }
    /**
       Definition of IMessagingCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMessagingCallback extends IBaseCallback {
    }
    /**
       Definition of IWallet interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IWallet extends IBaseCommerce {
    }
    /**
       Definition of ISession interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISession extends IBaseCommunication {
    }
    /**
       Definition of INFC interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INFC extends IBaseReader {
    }
    /**
       Definition of IDatabaseResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDatabaseResultCallback extends IBaseCallback {
    }
    /**
       Definition of IConcurrent interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IConcurrent extends IBaseUtil {
    }
    /**
       Definition of IMap interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMap extends IBaseUI {
    }
    /**
       Definition of IContact interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContact extends IBasePIM {
    }
    /**
       Definition of IBarcode interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBarcode extends IBaseReader {
    }
    /**
       Definition of IContactResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IContactResultCallback extends IBaseCallback {
    }
    /**
       Definition of IAudio interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAudio extends IBaseMedia {
    }
    /**
       Definition of IServiceResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IServiceResultCallback extends IBaseCallback {
    }
    /**
       Definition of IBrowser interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IBrowser extends IBaseUI {
    }
    /**
       Definition of ICalendar interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICalendar extends IBasePIM {
    }
    /**
       Definition of IAccelerationListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAccelerationListener extends IBaseListener {
    }
    /**
       Definition of IFileListResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFileListResultCallback extends IBaseCallback {
    }
    /**
       Definition of IDatabase interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDatabase extends IBaseData {
    }
    /**
       Definition of IAlarm interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAlarm extends IBaseNotification {
    }
    /**
       Definition of ISocket interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISocket extends IBaseCommunication {
    }
    /**
       Definition of IOAuth interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IOAuth extends IBaseSecurity {
    }
    /**
       Definition of IService interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IService extends IBaseCommunication {
    }
    /**
       Definition of IAds interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAds extends IBaseCommerce {
    }
    /**
       Definition of ISecurity interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISecurity extends IBaseSecurity {
    }
    /**
       Definition of IRSS interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IRSS extends IBaseSocial {
    }
    /**
       Definition of IUI interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IUI extends IBaseUI {
    }
    /**
       Definition of ISecureKVResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ISecureKVResultCallback extends IBaseCallback {
    }
    /**
       Definition of INotificationLocal interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INotificationLocal extends IBaseNotification {
    }
    /**
       Definition of IGeolocationListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGeolocationListener extends IBaseListener {
    }
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
    interface IFilePath extends IBaseData {
    }
    /**
       Definition of ILifecycleListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILifecycleListener extends IBaseListener {
    }
    /**
       Definition of ITelephony interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITelephony extends IBaseCommunication {
    }
    /**
       Definition of IDesktop interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDesktop extends IBaseUI {
    }
    /**
       Definition of ITwitter interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITwitter extends IBaseSocial {
    }
    /**
       Definition of ICloud interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICloud extends IBaseData {
    }
    /**
       Definition of ICapabilities interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ICapabilities extends IBaseSystem {
    }
    /**
       Definition of IGeolocation interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGeolocation extends IBaseSensor {
    }
    /**
       Definition of IAppServerListener interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppServerListener extends IBaseListener {
    }
    /**
       Definition of IPrinting interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IPrinting extends IBaseApplication {
    }
    /**
       Definition of IDisplay interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IDisplay extends IBaseSystem {
    }
    /**
       Definition of ILifecycle interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ILifecycle extends IBaseApplication {
    }
    /**
       Definition of IXML interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IXML extends IBaseData {
    }
    /**
       Definition of IAccelerometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAccelerometer extends IBaseSensor {
    }
    /**
       Definition of IVideo interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IVideo extends IBaseMedia {
    }
    /**
       Definition of IGooglePlus interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IGooglePlus extends IBaseSocial {
    }
    /**
       Created by clozano on 05/09/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAppResourceCallback extends IBaseCallback {
    }
    /**
       Definition of IMagnetometer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IMagnetometer extends IBaseSensor {
    }
    /**
       Definition of ITimer interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITimer extends IBaseUtil {
    }
    /**
       Created by FRMI on 28/08/2014.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkReachabilityCallback extends IBaseCallback {
    }
    /**
       Definition of ITableResultCallback interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface ITableResultCallback extends IBaseCallback {
    }
    /**
       Definition of IAmbientLight interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAmbientLight extends IBaseSensor {
    }
    /**
       Definition of IAnalytics interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IAnalytics extends IBaseApplication {
    }
    /**
       Definition of INetworkNaming interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface INetworkNaming extends IBaseCommunication {
    }
    /**
       Definition of IFile interface/protocol.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    interface IFile extends IFilePath {
    }
    /**
       Represents a local or remote service response.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ServiceResponse {
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the binary Content.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: string;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The headers array (name,value pairs) to be included on the I/O service request.
        */
        headers: Header[];
        /**
           The session context for the Request/Response.
        */
        session: ISession;
        /**
           Constructor used by the implementation

           @param content
           @param contentType
           @param contentLength
           @param contentBinary
           @param contentBinaryLength
           @param headers
           @param session
           @param contentEncoding
           @since ARP1.0
        */
        constructor(content: string, contentType: string, contentLength: string, contentBinary: number[], contentBinaryLength: number, headers: Header[], session: ISession, contentEncoding: string);
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the binary content

           @return contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           Set the binary content

           @param contentBinary
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           Retrusn the binary content length

           @return contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           Set the binary content length

           @param contentBinaryLength
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): string;
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        setContentLength(contentLength: string): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        getHeaders(): Header[];
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        setHeaders(headers: Header[]): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getSession(): ISession;
        /**
           Set the method

           @param session
           @since ARP1.0
        */
        setSession(session: ISession): void;
    }
    /**
       Structure representing the address data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactAddress {
        /**
           The address type
        */
        type: ContactAddressType;
        /**
           The Contact address
        */
        address: string;
        /**
           Constructor used by the implementation

           @param address Address data.
           @param type    Address type.
           @since ARP1.0
        */
        constructor(address: string, type: ContactAddressType);
        /**
           Returns the type of the address

           @return AddressType Address type.
           @since ARP1.0
        */
        getType(): ContactAddressType;
        /**
           Set the address type

           @param type Address type.
           @since ARP1.0
        */
        setType(type: ContactAddressType): void;
        /**
           Returns the Contact address

           @return address Address data.
           @since ARP1.0
        */
        getAddress(): string;
        /**
           Set the address of the Contact

           @param address Address data.
           @since ARP1.0
        */
        setAddress(address: string): void;
    }
    /**
       Structure representing the website data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactWebsite {
        /**
           The url of the website
        */
        url: string;
        /**
           Constructor used by the implementation

           @param url
           @since ARP1.0
        */
        constructor(url: string);
        /**
           Returns the url of the website

           @return website url
           @since ARP1.0
        */
        getUrl(): string;
        /**
           Set the url of the website

           @param url
           @since ARP1.0
        */
        setUrl(url: string): void;
    }
    /**
       Represents a specific application life-cycle stage.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Lifecycle {
        /**
           Represent the state of the app
        */
        state: LifecycleState;
        /**
           Constructor used by the implementation

           @param state
           @since ARP1.0
        */
        constructor(state: LifecycleState);
        /**
           Returns the state of the application

           @return state of the app
           @since ARP1.0
        */
        getState(): LifecycleState;
        /**
           Set the State of the application

           @param state of the app
           @since ARP1.0
        */
        setState(state: LifecycleState): void;
    }
    /**
       Represents an instance of a service.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Service {
        /**
           The method used
        */
        method: IServiceMethod;
        /**
           The type of the service
        */
        type: IServiceType;
        /**
           Enpoint of the service
        */
        endpoint: Endpoint;
        /**
           The service name
        */
        name: string;
        /**
           Constructor used by the implementation

           @param endpoint
           @param name
           @param method
           @param type
           @since ARP1.0
        */
        constructor(endpoint: Endpoint, name: string, method: IServiceMethod, type: IServiceType);
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getMethod(): IServiceMethod;
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        setMethod(method: IServiceMethod): void;
        /**
           Returns the type

           @return type
           @since ARP1.0
        */
        getType(): IServiceType;
        /**
           Set the type

           @param type
           @since ARP1.0
        */
        setType(type: IServiceType): void;
        /**
           Returns the endpoint

           @return endpoint
           @since ARP1.0
        */
        getEndpoint(): Endpoint;
        /**
           Set the endpoint

           @param endpoint
           @since ARP1.0
        */
        setEndpoint(endpoint: Endpoint): void;
        /**
           Returns the name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Structure representing the social data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactSocial {
        /**
           The social network
        */
        socialNetwork: ContactSocialNetwork;
        /**
           The profileUrl
        */
        profileUrl: string;
        /**
           Constructor used by the implementation

           @param socialNetwork of the profile
           @param profileUrl    of the user
           @since ARP1.0
        */
        constructor(socialNetwork: ContactSocialNetwork, profileUrl: string);
        /**
           Returns the social network

           @return socialNetwork
           @since ARP1.0
        */
        getSocialNetwork(): ContactSocialNetwork;
        /**
           Set the social network

           @param socialNetwork
           @since ARP1.0
        */
        setSocialNetwork(socialNetwork: ContactSocialNetwork): void;
        /**
           Returns the profile url of the user

           @return profileUrl
           @since ARP1.0
        */
        getProfileUrl(): string;
        /**
           Set the profile url of the iser

           @param profileUrl
           @since ARP1.0
        */
        setProfileUrl(profileUrl: string): void;
    }
    /**
       Structure representing the binary attachment data.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class AttachmentData {
        /**
           The raw data for the current file attachment (byte array)
        */
        data: number[];
        /**
           The data size (in bytes) of the current file attachment
        */
        dataSize: number;
        /**
           The name of the current file attachment
        */
        fileName: string;
        /**
           The mime type of the current attachment
        */
        mimeType: string;
        /**
           The relative path where the contents for the attachment file could be located.
        */
        referenceUrl: string;
        /**
           Constructor used by the implementation

           @param data         raw data of the file attachment
           @param dataSize     size of the file attachment
           @param fileName     name of the file attachment
           @param mimeType     mime type of the file attachment
           @param referenceUrl relative url of the file attachment
           @since ARP1.0
        */
        constructor(data: number[], dataSize: number, fileName: string, mimeType: string, referenceUrl: string);
        /**
           Returns the raw data in byte[]

           @return data Octet-binary content of the attachment payload.
           @since ARP1.0
        */
        getData(): number[];
        /**
           Set the data of the attachment as a byte[]

           @param data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        setData(data: number[]): void;
        /**
           Returns the size of the attachment as a long

           @return dataSize Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        getDataSize(): number;
        /**
           Set the size of the attachment as a long

           @param dataSize Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        setDataSize(dataSize: number): void;
        /**
           Returns the filename of the attachment

           @return fileName Name of the attachment.
           @since ARP1.0
        */
        getFileName(): string;
        /**
           Set the name of the file attachment

           @param fileName Name of the attachment.
           @since ARP1.0
        */
        setFileName(fileName: string): void;
        /**
           Returns the mime type of the attachment

           @return mimeType
           @since ARP1.0
        */
        getMimeType(): string;
        /**
           Set the mime type of the attachment

           @param mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        setMimeType(mimeType: string): void;
        /**
           Returns the absolute url of the file attachment

           @return referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        getReferenceUrl(): string;
        /**
           Set the absolute url of the attachment

           @param referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        setReferenceUrl(referenceUrl: string): void;
    }
    /**
       Represents the basic information about the operating system.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class OSInfo {
        /**
           The name of the operating system.
        */
        name: string;
        /**
           The vendor of the operating system.
        */
        vendor: string;
        /**
           The version/identifier of the operating system.
        */
        version: string;
        /**
           Constructor used by implementation to set the OS information.

           @param name    of the OS.
           @param version of the OS.
           @param vendor  of the OS.
        */
        constructor(name: string, version: string, vendor: string);
        /**
           Returns the name of the operating system.

           @return OS name.
        */
        getName(): string;
        /**
           Sets The name of the operating system.

           @param name The name of the operating system.
        */
        setName(name: string): void;
        /**
           Returns the vendor of the operating system.

           @return OS vendor.
        */
        getVendor(): string;
        /**
           Sets The vendor of the operating system.

           @param vendor The vendor of the operating system.
        */
        setVendor(vendor: string): void;
        /**
           Returns the version of the operating system.

           @return OS version.
        */
        getVersion(): string;
        /**
           Sets The version/identifier of the operating system.

           @param version The version/identifier of the operating system.
        */
        setVersion(version: string): void;
    }
    /**
       Structure representing the column specification of a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Column {
        /**
           Name of the column
        */
        name: string;
        /**
           Constructor for implementation using.

           @param name Name of the column
        */
        constructor(name: string);
        /**
           Returns the name of the column.

           @return The name of the column.
        */
        getName(): string;
        /**
           Sets the name of the column.

           @param name The name of the column.
        */
        setName(name: string): void;
    }
    /**
       Structure representing a database reference.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Database {
        /**
           Indicates if database was created or needs to be created as Compressed.
        */
        compress: boolean;
        /**
           Database Name (name of the .db local file).
        */
        name: string;
        /**
           Constructor using fields.

           @param name     Name of the Table.
           @param compress Compress enbaled or not.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        constructor(name: string, compress: boolean);
        /**
           Returns if the table is compressed

           @return Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        getCompress(): boolean;
        /**
           Sets if the table is compressed or not.

           @param compress Compression enabled
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        setCompress(compress: boolean): void;
        /**
           Returns the name.

           @return The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        getName(): string;
        /**
           Sets the name of the table.

           @param name The name of the table.
           @author Ferran Vila Conesa
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Represents a local or remote service request.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ServiceRequest {
        /**
           The HTTP procotol version to be used for this request.
        */
        protocolVersion: IServiceProtocolVersion;
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The headers array (name,value pairs) to be included on the I/O service request.
        */
        headers: Header[];
        /**
           The request method
        */
        method: string;
        /**
           The byte[] representing the Content field.
        */
        rawContent: number[];
        /**
           The session context for the Request/Response.
        */
        session: ISession;
        /**
           Contructor used by the implementation

           @param content
           @param contentType
           @param contentLength
           @param rawContent
           @param headers
           @param method
           @param protocolVersion
           @param session
           @param contentEncoding
           @since ARP1.0
        */
        constructor(content: string, contentType: string, contentLength: number, rawContent: number[], headers: Header[], method: string, protocolVersion: IServiceProtocolVersion, session: ISession, contentEncoding: string);
        /**
           Returns the protocol version

           @return protocolVersion enum
           @since ARP1.0
        */
        getProtocolVersion(): IServiceProtocolVersion;
        /**
           Set the protocol version

           @param protocolVersion
           @since ARP1.0
        */
        setProtocolVersion(protocolVersion: IServiceProtocolVersion): void;
        /**
           Returns the content

           @return content
           @since ARP1.0
        */
        getContent(): string;
        /**
           Set the content

           @param content
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           Returns the content encoding

           @return contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           Set the content encoding

           @param contentEncoding
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           Returns the content length

           @return contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           Set the content length

           @param contentLength
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           Returns the content type

           @return contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           Set the content type

           @param contentType
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           Returns the array of Header

           @return headers
           @since ARP1.0
        */
        getHeaders(): Header[];
        /**
           Set the array of Header

           @param headers
           @since ARP1.0
        */
        setHeaders(headers: Header[]): void;
        /**
           Returns the method

           @return method
           @since ARP1.0
        */
        getMethod(): string;
        /**
           Set the method

           @param method
           @since ARP1.0
        */
        setMethod(method: string): void;
        /**
           Returns the byte[] of the content

           @return rawContent
           @since ARP1.0
        */
        getRawContent(): number[];
        /**
           Set the byte[] of the content

           @param rawContent
           @since ARP1.0
        */
        setRawContent(rawContent: number[]): void;
        /**
           Returns the session object

           @return session
           @since ARP1.0
        */
        getSession(): ISession;
        /**
           Set the session object

           @param session
           @since ARP1.0
        */
        setSession(session: ISession): void;
    }
    /**
       Structure representing the data of a http cookie.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Cookie {
        /**
           Cookie creation timestamp in milliseconds.
        */
        creation: number;
        /**
           Value of the Cookie
        */
        data: string;
        /**
           Domain for which the cookie is valid.
        */
        domain: string;
        /**
           Cookie expiry in milliseconds or -1 for session only.
        */
        expiry: number;
        /**
           Name ot the cookie
        */
        name: string;
        /**
           URI path for which the cookie is valid.
        */
        path: string;
        /**
           Scheme of the domain - http/https - for which the cookie is valid.
        */
        scheme: string;
        /**
           Cookie is secure (https only)
        */
        secure: boolean;
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           Gets Cookie creation timestamp in milliseconds.

           @return creation Cookie creation timestamp in milliseconds.
        */
        getCreation(): number;
        /**
           Sets Cookie creation timestamp in milliseconds.

           @param creation Cookie creation timestamp in milliseconds.
        */
        setCreation(creation: number): void;
        /**
           Returns the cookie value

           @return
           @since ARP1.0
        */
        getData(): string;
        /**
           Set the cookie value

           @param data
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           Returns the domain

           @return domain
           @since ARP1.0
        */
        getDomain(): string;
        /**
           Set the domain

           @param domain
        */
        setDomain(domain: string): void;
        /**
           Returns the expiration date in milis

           @return expiry
           @since ARP1.0
        */
        getExpiry(): number;
        /**
           Set the expiration date in milis

           @param expiry
        */
        setExpiry(expiry: number): void;
        /**
           Returns the cookie name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the cookie name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
        */
        setPath(path: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
        */
        setScheme(scheme: string): void;
        /**
           Returns whether the cookie is secure or not

           @return true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        getSecure(): boolean;
        /**
           Set whether the cookie is secure or not

           @param secure
        */
        setSecure(secure: boolean): void;
    }
    /**
       Structure representing the data elements of an email addressee.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class EmailAddress {
        /**
           The Email address
        */
        address: string;
        /**
           Constructor used by implementation

           @param address
           @since ARP1.0
        */
        constructor(address: string);
        /**
           Returns the email address

           @return address of the Email
           @since ARP1.0
        */
        getAddress(): string;
        /**
           Set the Email address

           @param address of the Email
           @since ARP1.0
        */
        setAddress(address: string): void;
    }
    /**
       Structure representing the phone data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactPhone {
        /**
           The phone number phoneType
        */
        phoneType: ContactPhoneType;
        /**
           The phone number
        */
        phone: string;
        /**
           Constructor used by implementation to set the contact Phone

           @param phone
           @param phoneType
           @since ARP1.0
        */
        constructor(phone: string, phoneType: ContactPhoneType);
        /**
           Returns the phone phoneType

           @return phoneType
           @since ARP1.0
        */
        getPhoneType(): ContactPhoneType;
        /**
           Set the phoneType of the phone number

           @param phoneType
           @since ARP1.0
        */
        setPhoneType(phoneType: ContactPhoneType): void;
        /**
           Returns the phone number

           @return phone number
           @since ARP1.0
        */
        getPhone(): string;
        /**
           Set the phone number

           @param phone number
           @since ARP1.0
        */
        setPhone(phone: string): void;
    }
    /**
       Structure representing the personal info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactPersonalInfo {
        /**
           The title of the Contact
        */
        title: ContactPersonalInfoTitle;
        /**
           The last name of the Contact
        */
        lastName: string;
        /**
           The middle name of the Contact if it proceeds
        */
        middleName: string;
        /**
           The name of the Contact
        */
        name: string;
        /**
           The Constructor used by the implementation

           @param name       of the Contact
           @param middleName of the Contact
           @param lastName   of the Contact
           @param title      of the Contact
           @since ARP1.0
        */
        constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle);
        /**
           Returns the title of the Contact

           @return Title
           @since ARP1.0
        */
        getTitle(): ContactPersonalInfoTitle;
        /**
           Set the Title of the Contact

           @param title
           @since ARP1.0
        */
        setTitle(title: ContactPersonalInfoTitle): void;
        /**
           Returns the last name of the Contact

           @return lastName
           @since ARP1.0
        */
        getLastName(): string;
        /**
           Set the last name of the Contact

           @param lastName
           @since ARP1.0
        */
        setLastName(lastName: string): void;
        /**
           Returns the middle name of the Contact

           @return middelName
           @since ARP1.0
        */
        getMiddleName(): string;
        /**
           Set the middle name of the Contact

           @param middleName
           @since ARP1.0
        */
        setMiddleName(middleName: string): void;
        /**
           Returns the name of the Contact

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Contact

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Structure representing the a physical or logical button on a device.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Button {
        /**
           Button type
        */
        type: ICapabilitiesButton;
        /**
           Constructor used by the implementation

           @param type Button type.
           @since ARP1.0
        */
        constructor(type: ICapabilitiesButton);
        /**
           Returns the button type

           @return type Button type.
           @since ARP1.0
        */
        getType(): ICapabilitiesButton;
        /**
           Sets Button type

           @param type Button type
        */
        setType(type: ICapabilitiesButton): void;
    }
    /**
       Structure representing a remote or local service access end-point.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Endpoint {
        /**
           The remote serice host (alias or IP).
        */
        host: string;
        /**
           The remote service path (to be added to the host and port url).
        */
        path: string;
        /**
           The remote service accessible port.
        */
        port: number;
        /**
           The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
        */
        proxy: string;
        /**
           The remote service scheme.
        */
        scheme: string;
        /**
           Constructor used by the implementation

           @param host
           @param path
           @param port
           @param proxy
           @param scheme
           @since ARP1.0
        */
        constructor(host: string, path: string, port: number, proxy: string, scheme: string);
        /**
           Returns the host

           @return host
           @since ARP1.0
        */
        getHost(): string;
        /**
           Set the host

           @param host
           @since ARP1.0
        */
        setHost(host: string): void;
        /**
           Returns the path

           @return path
           @since ARP1.0
        */
        getPath(): string;
        /**
           Set the path

           @param path
           @since ARP1.0
        */
        setPath(path: string): void;
        /**
           Returns the port

           @return port
           @since ARP1.0
        */
        getPort(): number;
        /**
           Set the port

           @param port
           @since ARP1.0
        */
        setPort(port: number): void;
        /**
           Return the proxy

           @return proxy
           @since ARP1.0
        */
        getProxy(): string;
        /**
           Set the proxy

           @param proxy
           @since ARP1.0
        */
        setProxy(proxy: string): void;
        /**
           Returns the scheme

           @return scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           Set the scheme

           @param scheme
           @since ARP1.0
        */
        setScheme(scheme: string): void;
    }
    /**
       Represents a data table composed of columns and rows.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Table {
        /**
           Number of columns.
        */
        columnCount: number;
        /**
           Definition of columns.
        */
        columns: Column[];
        /**
           Name of the table.
        */
        name: string;
        /**
           Number of rows.
        */
        rowCount: number;
        /**
           Rows of the table containing the data.
        */
        rows: Row[];
        /**
           Constructor by default

           @param name The name of the table
        */
        constructor(name: string);
        /**
           Get the number of columns

           @return The number of columns
        */
        getColumnCount(): number;
        /**
           Sets the number of columns

           @param columnCount The number of columns
        */
        setColumnCount(columnCount: number): void;
        /**
           Get the columns

           @return The columns
        */
        getColumns(): Column[];
        /**
           Sets the columns of the table

           @param columns The columns of the table
        */
        setColumns(columns: Column[]): void;
        /**
           Returns the name of the table

           @return The name of the table
        */
        getName(): string;
        /**
           Sets the name of the table

           @param name The name of the table
        */
        setName(name: string): void;
        /**
           Get the number of rows

           @return The number of rows
        */
        getRowCount(): number;
        /**
           Sets the number of rows

           @param rowCount The number of rows
        */
        setRowCount(rowCount: number): void;
        /**
           Get the rows of the table

           @return The rows of the table
        */
        getRows(): Row[];
        /**
           Sets the rows of the table

           @param rows The rows of the table
        */
        setRows(rows: Row[]): void;
    }
    /**
       Structure representing the data elements of an email.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Email {
        /**
           Array of attatchments
        */
        attachmentData: AttachmentData[];
        /**
           Array of Email Blind Carbon Copy recipients
        */
        bccRecipients: EmailAddress[];
        /**
           Array of Email Carbon Copy recipients
        */
        ccRecipients: EmailAddress[];
        /**
           Message body
        */
        messageBody: string;
        /**
           Message body mime type
        */
        messageBodyMimeType: string;
        /**
           Subject of the email
        */
        subject: string;
        /**
           Array of Email recipients
        */
        toRecipients: EmailAddress[];
        /**
           Constructor used by the implementation

           @param toRecipients        array of recipients
           @param ccRecipients        array of cc recipients
           @param bccRecipients       array of bcc recipients
           @param attachmentData      array of attatchments
           @param messageBody         body of the email
           @param messageBodyMimeType mime type of the body
           @param subject             of the email
           @since ARP1.0
        */
        constructor(toRecipients: EmailAddress[], ccRecipients: EmailAddress[], bccRecipients: EmailAddress[], attachmentData: AttachmentData[], messageBody: string, messageBodyMimeType: string, subject: string);
        /**
           Returns an array of attachments

           @return attachmentData array with the email attachments
           @since ARP1.0
        */
        getAttachmentData(): AttachmentData[];
        /**
           Set the email attachment data array

           @param attachmentData array of email attatchments
           @since ARP1.0
        */
        setAttachmentData(attachmentData: AttachmentData[]): void;
        /**
           Returns the array of recipients

           @return bccRecipients array of bcc recipients
           @since ARP1.0
        */
        getBccRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param bccRecipients array of bcc recipients
           @since ARP1.0
        */
        setBccRecipients(bccRecipients: EmailAddress[]): void;
        /**
           Returns the array of recipients

           @return ccRecipients array of cc recipients
           @since ARP1.0
        */
        getCcRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param ccRecipients array of cc recipients
           @since ARP1.0
        */
        setCcRecipients(ccRecipients: EmailAddress[]): void;
        /**
           Returns the message body of the email

           @return message Body string of the email
        */
        getMessageBody(): string;
        /**
           Set the message body of the email

           @param messageBody message body of the email
           @since ARP1.0
        */
        setMessageBody(messageBody: string): void;
        /**
           Returns the myme type of the message body

           @return mime type string of the message boddy
           @since ARP1.0
        */
        getMessageBodyMimeType(): string;
        /**
           Set the mime type for the message body

           @param messageBodyMimeType type of the body message
           @since ARP1.0
        */
        setMessageBodyMimeType(messageBodyMimeType: string): void;
        /**
           Returns the subject of the email

           @return subject string of the email
           @since ARP1.0
        */
        getSubject(): string;
        /**
           Set the subject of the email

           @param subject of the email
           @since ARP1.0
        */
        setSubject(subject: string): void;
        /**
           Returns the array of recipients

           @return toRecipients array of recipients
           @since ARP1.0
        */
        getToRecipients(): EmailAddress[];
        /**
           Set the array of recipients

           @param toRecipients array of recipients
           @since ARP1.0
        */
        setToRecipients(toRecipients: EmailAddress[]): void;
    }
    /**
       Structure representing the internal unique identifier data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactUid {
        /**
           The id of the Contact
        */
        contactId: string;
        /**
           Constructor used by implementation to set the Contact id.

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        constructor(contactId: string);
        /**
           Returns the contact id

           @return Contactid Internal unique contact id.
           @since ARP1.0
        */
        getContactId(): string;
        /**
           Set the id of the Contact

           @param contactId Internal unique contact id.
           @since ARP1.0
        */
        setContactId(contactId: string): void;
    }
    /**
       Structure representing the data of a http request or response header.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Header {
        /**
           Value of the header
        */
        data: string;
        /**
           Name ot the header
        */
        name: string;
        /**
           Constructor used by the implementation

           @param name
           @param data
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           Returns the header value

           @return
           @since ARP1.0
        */
        getData(): string;
        /**
           Set the header value

           @param data
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           Returns the header name

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the header name

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Represents a single secureKey-value pair.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class SecureKeyPair {
        secureData: string;
        secureKey: string;
        /**
           Constructor with parameters

           @param secureKey   name of the keypair
           @param secureData value of the keypair
           @since ARP1.0
        */
        constructor(secureKey: string, secureData: string);
        /**
           Returns the object value

           @return Value.
           @since ARP 1.0
        */
        getSecureData(): string;
        /**
           Sets the value for this object

           @param secureData value to set.
           @since ARP 1.0
        */
        setSecureData(secureData: string): void;
        /**
           Returns the object secureKey name.

           @return Key name.
           @since ARP 1.0
        */
        getSecureKey(): string;
        /**
           Sets the secureKey name for this object.

           @param secureKey Key name.
           @since ARP 1.0
        */
        setSecureKey(secureKey: string): void;
    }
    /**
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Acceleration {
        /**
           Timestamp of the acceleration reading.
        */
        timeStamp: number;
        /**
           X-axis component of the acceleration.
        */
        x: number;
        /**
           Y-axis component of the acceleration.
        */
        y: number;
        /**
           Z-axis component of the acceleration.
        */
        z: number;
        /**
           Constructor.
           @param x X Coordinate
           @param y Y Coordinate
           @param z Z Coordinate
           @author Carlos Lozano Diez
           @since ARP1.0
        */
        constructor(x: number, y: number, z: number, timeStamp: number);
        /**
           Gets Timestamp of the acceleration reading.

           @return timeStamp Timestamp of the acceleration reading.
        */
        getTimeStamp(): number;
        /**
           Sets Timestamp of the acceleration reading.

           @param timeStamp Timestamp of the acceleration reading.
        */
        setTimeStamp(timeStamp: number): void;
        /**
           Gets X-axis component of the acceleration.

           @return x X-axis component of the acceleration.
        */
        getX(): number;
        /**
           Sets X-axis component of the acceleration.

           @param x X-axis component of the acceleration.
        */
        setX(x: number): void;
        /**
           Gets Y-axis component of the acceleration.

           @return y Y-axis component of the acceleration.
        */
        getY(): number;
        /**
           Sets Y-axis component of the acceleration.

           @param y Y-axis component of the acceleration.
        */
        setY(y: number): void;
        /**
           Gets Z-axis component of the acceleration.

           @return z Z-axis component of the acceleration.
        */
        getZ(): number;
        /**
           Sets Z-axis component of the acceleration.

           @param z Z-axis component of the acceleration.
        */
        setZ(z: number): void;
    }
    /**
       Structure representing the data a single geolocation reading.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Geolocation {
        /**
           The current device altitude (or Z coordinate). Measured in meters.
        */
        altitude: number;
        /**
           The Y coordinate (or latitude). Measured in degrees.
        */
        latitude: number;
        /**
           The X coordinate (or longitude). Measured in degrees.
        */
        longitude: number;
        /**
           Dilution of precision on the X measurement. Measured in meters.
        */
        xDoP: number;
        /**
           Dilution of precision on the Y measurement. Measured in meters.
        */
        yDoP: number;
        /**
           Constructor used by the implementation

           @param latitude
           @param longitude
           @param altitude
           @param xDoP
           @param yDoP
           @since ARP1.0
        */
        constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number);
        /**
           Returns altitude in meters

           @return altitude
           @since ARP1.0
        */
        getAltitude(): number;
        /**
           Set altitude in meters

           @param altitude
           @since ARP1.0
        */
        setAltitude(altitude: number): void;
        /**
           Returns the latitude in degrees

           @return latitude
           @since ARP1.0
        */
        getLatitude(): number;
        /**
           Set the latitude in degrees

           @param latitude
           @since ARP1.0
        */
        setLatitude(latitude: number): void;
        /**
           Returns the longitude in degrees

           @return longitude
           @since ARP1.0
        */
        getLongitude(): number;
        /**
           Returns the latitude in degrees

           @param longitude
           @since ARP1.0
        */
        setLongitude(longitude: number): void;
        /**
           Returns the Dilution of Position in the X axis (longitude)

           @return xDoP
           @since ARP1.0
        */
        getXDoP(): number;
        /**
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        setXDoP(xDoP: number): void;
        /**
           Returns the Dilution of Position in the Y axis (latitude)

           @return yDoP
           @since ARP1.0
        */
        getYDoP(): number;
        /**
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        setYDoP(yDoP: number): void;
    }
    /**
       Represents a specific user or system locate.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Locale {
        /**
           A valid ISO Country Code.
        */
        country: string;
        /**
           A valid ISO Language Code.
        */
        language: string;
        /**
           Constructor used by the implementation

           @param country
           @param language
           @since ARP1.0
        */
        constructor(language: string, country: string);
        /**
           Returns the country code

           @return country code
           @since ARP1.0
        */
        getCountry(): string;
        /**
           Set the country code

           @param country code
           @since ARP1.0
        */
        setCountry(country: string): void;
        /**
           Returns the language code

           @return language code
           @since ARP1.0
        */
        getLanguage(): string;
        /**
           Set the language code

           @param language code
           @since ARP1.0
        */
        setLanguage(language: string): void;
    }
    /**
       Structure representing the professional info data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactProfessionalInfo {
        /**
           The company of the job
        */
        company: string;
        /**
           The job description
        */
        jobDescription: string;
        /**
           The job title
        */
        jobTitle: string;
        /**
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param jobTitle
           @param jobDescription
           @param company
           @since ARP1.0
        */
        constructor(jobTitle: string, jobDescription: string, company: string);
        /**
           Returns the company of the job

           @return company
           @since ARP1.0
        */
        getCompany(): string;
        /**
           Set the company of the job

           @param company
           @since ARP1.0
        */
        setCompany(company: string): void;
        /**
           Returns the description of the job

           @return description
           @since ARP1.0
        */
        getJobDescription(): string;
        /**
           Set the description of the job

           @param jobDescription
           @since ARP1.0
        */
        setJobDescription(jobDescription: string): void;
        /**
           Returns the title of the job

           @return title
           @since ARP1.0
        */
        getJobTitle(): string;
        /**
           Set the title of the job

           @param jobTitle
           @since ARP1.0
        */
        setJobTitle(jobTitle: string): void;
    }
    /**
       Structure representing the email data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactEmail {
        /**
           The type of the email
        */
        type: ContactEmailType;
        /**
           Email of the Contact
        */
        email: string;
        /**
           Whether the email is the primary one or not
        */
        primary: boolean;
        /**
           Constructor used by the implementation

           @param type
           @param primary
           @param email
           @since ARP1.0
        */
        constructor(type: ContactEmailType, primary: boolean, email: string);
        /**
           Returns the type of the email

           @return EmailType
           @since ARP1.0
        */
        getType(): ContactEmailType;
        /**
           Set the type of the email

           @param type
           @since ARP1.0
        */
        setType(type: ContactEmailType): void;
        /**
           Returns the email of the Contact

           @return email
           @since ARP1.0
        */
        getEmail(): string;
        /**
           Set the email of the Contact

           @param email
           @since ARP1.0
        */
        setEmail(email: string): void;
        /**
           Returns if the email is primary

           @return true if the email is primary; false otherwise
           @since ARP1.0
        */
        getPrimary(): boolean;
        /**
           Set if the email

           @param primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        setPrimary(primary: boolean): void;
    }
    /**
       Represents a row for a data table.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Row {
        /**
           The values of the row.
        */
        values: any[];
        /**
           Constructor for implementation using.

           @param values The values of the row
        */
        constructor(values: any[]);
        /**
           Returns the values of the row.

           @return The values of the row.
        */
        getValues(): any[];
        /**
           Sets the values of the row.

           @param values The values of the row.
        */
        setValues(values: any[]): void;
    }
    /**
       Structure representing the basic device information.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class DeviceInfo {
        /**
           Model of device - equivalent to device release or version.
        */
        model: string;
        /**
           Name of device - equivalent to brand.
        */
        name: string;
        /**
           Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        uuid: string;
        /**
           Vendor of the device hardware.
        */
        vendor: string;
        /**
           Constructor for the implementation of the platform.

           @param name   or brand of the device.
           @param model  of the device.
           @param vendor of the device.
           @param uuid   unique* identifier (* platform dependent).
        */
        constructor(name: string, model: string, vendor: string, uuid: string);
        /**
           Returns the model of the device.

           @return String with the model of the device.
        */
        getModel(): string;
        /**
           Sets Model of device - equivalent to device release or version.

           @param model Model of device - equivalent to device release or version.
        */
        setModel(model: string): void;
        /**
           Returns the name of the device.

           @return String with device name.
        */
        getName(): string;
        /**
           Sets Name of device - equivalent to brand.

           @param name Name of device - equivalent to brand.
        */
        setName(name: string): void;
        /**
           Returns the platform dependent UUID of the device.

           @return String with the 128-bit device identifier.
        */
        getUuid(): string;
        /**
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        setUuid(uuid: string): void;
        /**
           Returns the vendor of the device.

           @return String with the vendor name.
        */
        getVendor(): string;
        /**
           Sets Vendor of the device hardware.

           @param vendor Vendor of the device hardware.
        */
        setVendor(vendor: string): void;
    }
    /**
       Structure representing the assigned tags data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class ContactTag {
        /**
           The value of the Tag
        */
        dataValue: string;
        /**
           The name of the Tag
        */
        name: string;
        /**
           Constructor used by the implementation

           @param dataValue
           @param name
           @since ARP1.0
        */
        constructor(name: string, dataValue: string);
        /**
           Returns the value of the Tag

           @return value
           @since ARP1.0
        */
        getDataValue(): string;
        /**
           Set the value of the Tag

           @param dataValue
           @since ARP1.0
        */
        setDataValue(dataValue: string): void;
        /**
           Returns the name of the Tag

           @return name
           @since ARP1.0
        */
        getName(): string;
        /**
           Set the name of the Tag

           @param name
           @since ARP1.0
        */
        setName(name: string): void;
    }
    /**
       Structure representing the data elements of a contact.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class Contact extends ContactUid {
        /**
           The adresses from the contact
        */
        contactAddresses: ContactAddress[];
        /**
           The emails from the contact
        */
        contactEmails: ContactEmail[];
        /**
           The phones from the contact
        */
        contactPhones: ContactPhone[];
        /**
           The social network info from the contact
        */
        contactSocials: ContactSocial[];
        /**
           The aditional tags from the contact
        */
        contactTags: ContactTag[];
        /**
           The websites from the contact
        */
        contactWebsites: ContactWebsite[];
        /**
           The personal info from the contact
        */
        personalInfo: ContactPersonalInfo;
        /**
           The professional info from the contact
        */
        professionalInfo: ContactProfessionalInfo;
        /**
           Constructor used by implementation to set the Contact.

           @param contactId of the Contact
           @since ARP1.0
        */
        constructor(contactId: string);
        /**
           Returns all the addresses of the Contact

           @return ContactAddress[]
           @since ARP1.0
        */
        getContactAddresses(): ContactAddress[];
        /**
           Set the addresses of the Contact

           @param contactAddresses
           @since ARP1.0
        */
        setContactAddresses(contactAddresses: ContactAddress[]): void;
        /**
           Returns all the emails of the Contact

           @return ContactEmail[]
           @since ARP1.0
        */
        getContactEmails(): ContactEmail[];
        /**
           Set the emails of the Contact

           @param contactEmails
           @since ARP1.0
        */
        setContactEmails(contactEmails: ContactEmail[]): void;
        /**
           Returns all the phones of the Contact

           @return ContactPhone[]
           @since ARP1.0
        */
        getContactPhones(): ContactPhone[];
        /**
           Set the phones of the Contact

           @param contactPhones
           @since ARP1.0
        */
        setContactPhones(contactPhones: ContactPhone[]): void;
        /**
           Returns all the social network info of the Contact

           @return ContactSocial[]
           @since ARP1.0
        */
        getContactSocials(): ContactSocial[];
        /**
           Set the social network info of the Contact

           @param contactSocials
           @since ARP1.0
        */
        setContactSocials(contactSocials: ContactSocial[]): void;
        /**
           Returns the additional tags of the Contact

           @return ContactTag[]
           @since ARP1.0
        */
        getContactTags(): ContactTag[];
        /**
           Set the additional tags of the Contact

           @param contactTags
           @since ARP1.0
        */
        setContactTags(contactTags: ContactTag[]): void;
        /**
           Returns all the websites of the Contact

           @return ContactWebsite[]
           @since ARP1.0
        */
        getContactWebsites(): ContactWebsite[];
        /**
           Set the websites of the Contact

           @param contactWebsites
           @since ARP1.0
        */
        setContactWebsites(contactWebsites: ContactWebsite[]): void;
        /**
           Returns the personal info of the Contact

           @return ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        getPersonalInfo(): ContactPersonalInfo;
        /**
           Set the personal info of the Contact

           @param personalInfo
           @since ARP1.0
        */
        setPersonalInfo(personalInfo: ContactPersonalInfo): void;
        /**
           Returns the professional info of the Contact

           @return ContactProfessionalInfo[]
           @since ARP1.0
        */
        getProfessionalInfo(): ContactProfessionalInfo;
        /**
           Set the professional info of the Contact

           @param professionalInfo
           @since ARP1.0
        */
        setProfessionalInfo(professionalInfo: ContactProfessionalInfo): void;
    }
    /**
       Enumeration ContactAddressType
    */
    class ContactAddressType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Home: ContactAddressType;
        static Work: ContactAddressType;
        static Other: ContactAddressType;
        static Unknown: ContactAddressType;
    }
    /**
       Enumeration ContactEmailType
    */
    class ContactEmailType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Personal: ContactEmailType;
        static Work: ContactEmailType;
        static Other: ContactEmailType;
        static Unknown: ContactEmailType;
    }
    /**
       Enumeration ContactPersonalInfoTitle
    */
    class ContactPersonalInfoTitle {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mr: ContactPersonalInfoTitle;
        static Mrs: ContactPersonalInfoTitle;
        static Ms: ContactPersonalInfoTitle;
        static Dr: ContactPersonalInfoTitle;
        static Unknown: ContactPersonalInfoTitle;
    }
    /**
       Enumeration ContactPhoneType
    */
    class ContactPhoneType {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mobile: ContactPhoneType;
        static Work: ContactPhoneType;
        static Home: ContactPhoneType;
        static Main: ContactPhoneType;
        static HomeFax: ContactPhoneType;
        static WorkFax: ContactPhoneType;
        static Other: ContactPhoneType;
        static Unknown: ContactPhoneType;
    }
    /**
       Enumeration ContactSocialNetwork
    */
    class ContactSocialNetwork {
        value: string;
        constructor(value: string);
        toString(): string;
        static Twitter: ContactSocialNetwork;
        static Facebook: ContactSocialNetwork;
        static GooglePlus: ContactSocialNetwork;
        static LinkedIn: ContactSocialNetwork;
        static Flickr: ContactSocialNetwork;
        static Unknown: ContactSocialNetwork;
    }
    /**
       Enumeration IAccelerationListenerError
    */
    class IAccelerationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Unauthorized: IAccelerationListenerError;
        static Unavailable: IAccelerationListenerError;
        static Unknown: IAccelerationListenerError;
    }
    /**
       Enumeration IAccelerationListenerWarning
    */
    class IAccelerationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static NeedsCalibration: IAccelerationListenerWarning;
        static Stale: IAccelerationListenerWarning;
        static Unknown: IAccelerationListenerWarning;
    }
    /**
       Enumeration IAppResourceCallbackError
    */
    class IAppResourceCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotFound: IAppResourceCallbackError;
        static NoPermission: IAppResourceCallbackError;
        static Unknown: IAppResourceCallbackError;
    }
    /**
       Enumeration IAppResourceCallbackWarning
    */
    class IAppResourceCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialContent: IAppResourceCallbackWarning;
        static TooLarge: IAppResourceCallbackWarning;
        static LinkedResource: IAppResourceCallbackWarning;
        static Unknown: IAppResourceCallbackWarning;
    }
    /**
       Enumeration IButtonListenerError
    */
    class IButtonListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Present: IButtonListenerError;
        static Unknown: IButtonListenerError;
    }
    /**
       Enumeration IButtonListenerWarning
    */
    class IButtonListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Implemented: IButtonListenerWarning;
        static Unknown: IButtonListenerWarning;
    }
    /**
       Enumeration ICapabilitiesButton
    */
    class ICapabilitiesButton {
        value: string;
        constructor(value: string);
        toString(): string;
        static HomeButton: ICapabilitiesButton;
        static BackButton: ICapabilitiesButton;
        static OptionButton: ICapabilitiesButton;
        static Unknown: ICapabilitiesButton;
    }
    /**
       Enumeration ICapabilitiesCommunication
    */
    class ICapabilitiesCommunication {
        value: string;
        constructor(value: string);
        toString(): string;
        static Calendar: ICapabilitiesCommunication;
        static Contact: ICapabilitiesCommunication;
        static Mail: ICapabilitiesCommunication;
        static Messaging: ICapabilitiesCommunication;
        static Telephony: ICapabilitiesCommunication;
        static Unknown: ICapabilitiesCommunication;
    }
    /**
       Enumeration ICapabilitiesData
    */
    class ICapabilitiesData {
        value: string;
        constructor(value: string);
        toString(): string;
        static Database: ICapabilitiesData;
        static File: ICapabilitiesData;
        static Cloud: ICapabilitiesData;
        static Unknown: ICapabilitiesData;
    }
    /**
       Enumeration ICapabilitiesMedia
    */
    class ICapabilitiesMedia {
        value: string;
        constructor(value: string);
        toString(): string;
        static Audio_Playback: ICapabilitiesMedia;
        static Audio_Recording: ICapabilitiesMedia;
        static Camera: ICapabilitiesMedia;
        static Video_Playback: ICapabilitiesMedia;
        static Video_Recording: ICapabilitiesMedia;
        static Unknown: ICapabilitiesMedia;
    }
    /**
       Enumeration ICapabilitiesNet
    */
    class ICapabilitiesNet {
        value: string;
        constructor(value: string);
        toString(): string;
        static GSM: ICapabilitiesNet;
        static GPRS: ICapabilitiesNet;
        static HSDPA: ICapabilitiesNet;
        static LTE: ICapabilitiesNet;
        static WIFI: ICapabilitiesNet;
        static Ethernet: ICapabilitiesNet;
        static Unknown: ICapabilitiesNet;
    }
    /**
       Enumeration ICapabilitiesNotification
    */
    class ICapabilitiesNotification {
        value: string;
        constructor(value: string);
        toString(): string;
        static Alarm: ICapabilitiesNotification;
        static LocalNotification: ICapabilitiesNotification;
        static RemoteNotification: ICapabilitiesNotification;
        static Vibration: ICapabilitiesNotification;
        static Unknown: ICapabilitiesNotification;
    }
    /**
       Enumeration ICapabilitiesSensor
    */
    class ICapabilitiesSensor {
        value: string;
        constructor(value: string);
        toString(): string;
        static Accelerometer: ICapabilitiesSensor;
        static AmbientLight: ICapabilitiesSensor;
        static Barometer: ICapabilitiesSensor;
        static Geolocation: ICapabilitiesSensor;
        static Gyroscope: ICapabilitiesSensor;
        static Magnetometer: ICapabilitiesSensor;
        static Proximity: ICapabilitiesSensor;
        static Unknown: ICapabilitiesSensor;
    }
    /**
       Enumeration IContactFieldGroup
    */
    class IContactFieldGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        static PERSONAL_INFO: IContactFieldGroup;
        static PROFESSIONAL_INFO: IContactFieldGroup;
        static ADDRESSES: IContactFieldGroup;
        static PHONES: IContactFieldGroup;
        static EMAILS: IContactFieldGroup;
        static WEBSITES: IContactFieldGroup;
        static SOCIALS: IContactFieldGroup;
        static TAGS: IContactFieldGroup;
        static Unknown: IContactFieldGroup;
    }
    /**
       Enumeration IContactFilter
    */
    class IContactFilter {
        value: string;
        constructor(value: string);
        toString(): string;
        static HAS_PHONE: IContactFilter;
        static HAS_EMAIL: IContactFilter;
        static HAS_ADDRESS: IContactFilter;
        static Unknown: IContactFilter;
    }
    /**
       Enumeration IContactPhotoResultCallbackError
    */
    class IContactPhotoResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactPhotoResultCallbackError;
        static Wrong_Params: IContactPhotoResultCallbackError;
        static No_Photo: IContactPhotoResultCallbackError;
        static Unknown: IContactPhotoResultCallbackError;
    }
    /**
       Enumeration IContactPhotoResultCallbackWarning
    */
    class IContactPhotoResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactPhotoResultCallbackWarning;
        static No_Matches: IContactPhotoResultCallbackWarning;
        static Unknown: IContactPhotoResultCallbackWarning;
    }
    /**
       Enumeration IContactResultCallbackError
    */
    class IContactResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactResultCallbackError;
        static Wrong_Params: IContactResultCallbackError;
        static Unknown: IContactResultCallbackError;
    }
    /**
       Enumeration IContactResultCallbackWarning
    */
    class IContactResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactResultCallbackWarning;
        static No_Matches: IContactResultCallbackWarning;
        static Unknown: IContactResultCallbackWarning;
    }
    /**
       Enumeration IDatabaseResultCallbackError
    */
    class IDatabaseResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: IDatabaseResultCallbackError;
        static SqlException: IDatabaseResultCallbackError;
        static NotDeleted: IDatabaseResultCallbackError;
        static Unknown: IDatabaseResultCallbackError;
    }
    /**
       Enumeration IDatabaseResultCallbackWarning
    */
    class IDatabaseResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static DatabaseExists: IDatabaseResultCallbackWarning;
        static IsOpen: IDatabaseResultCallbackWarning;
        static Unknown: IDatabaseResultCallbackWarning;
    }
    /**
       Enumeration IFileDataResultCallbackError
    */
    class IFileDataResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileDataResultCallbackError;
        static InsufficientSpace: IFileDataResultCallbackError;
        static Unauthorized: IFileDataResultCallbackError;
        static Unknown: IFileDataResultCallbackError;
    }
    /**
       Enumeration IFileDataResultCallbackWarning
    */
    class IFileDataResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static ExceedMaximumSize: IFileDataResultCallbackWarning;
        static Unknown: IFileDataResultCallbackWarning;
    }
    /**
       Enumeration IFileListResultCallbackError
    */
    class IFileListResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileListResultCallbackError;
        static Unauthorized: IFileListResultCallbackError;
        static Unknown: IFileListResultCallbackError;
    }
    /**
       Enumeration IFileListResultCallbackWarning
    */
    class IFileListResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialResult: IFileListResultCallbackWarning;
        static Unknown: IFileListResultCallbackWarning;
    }
    /**
       Enumeration IFileResultCallbackError
    */
    class IFileResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static FileExists: IFileResultCallbackError;
        static InsufficientSpace: IFileResultCallbackError;
        static Unauthorized: IFileResultCallbackError;
        static Unknown: IFileResultCallbackError;
    }
    /**
       Enumeration IFileResultCallbackWarning
    */
    class IFileResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static SourceNotDeleted: IFileResultCallbackWarning;
        static RootDirectory: IFileResultCallbackWarning;
        static Unknown: IFileResultCallbackWarning;
    }
    /**
       Enumeration IGeolocationListenerError
    */
    class IGeolocationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Disabled: IGeolocationListenerError;
        static RestrictedAccess: IGeolocationListenerError;
        static DeniedAccess: IGeolocationListenerError;
        static StatusNotDetermined: IGeolocationListenerError;
        static Unknown: IGeolocationListenerError;
    }
    /**
       Enumeration IGeolocationListenerWarning
    */
    class IGeolocationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static HighDoP: IGeolocationListenerWarning;
        static StaleData: IGeolocationListenerWarning;
        static Unknown: IGeolocationListenerWarning;
    }
    /**
       Enumeration ILifecycleListenerError
    */
    class ILifecycleListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Runtime: ILifecycleListenerError;
        static Implementation: ILifecycleListenerError;
        static Killed: ILifecycleListenerError;
        static Unknown: ILifecycleListenerError;
    }
    /**
       Enumeration ILifecycleListenerWarning
    */
    class ILifecycleListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static MemoryLow: ILifecycleListenerWarning;
        static BatteryLow: ILifecycleListenerWarning;
        static Unknown: ILifecycleListenerWarning;
    }
    /**
       Enumeration ILoggingLogLevel
    */
    class ILoggingLogLevel {
        value: string;
        constructor(value: string);
        toString(): string;
        static DEBUG: ILoggingLogLevel;
        static WARN: ILoggingLogLevel;
        static ERROR: ILoggingLogLevel;
        static INFO: ILoggingLogLevel;
        static Unknown: ILoggingLogLevel;
    }
    /**
       Enumeration IMessagingCallbackError
    */
    class IMessagingCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static SIMNotPresent: IMessagingCallbackError;
        static EmailAccountNotFound: IMessagingCallbackError;
        static NotSent: IMessagingCallbackError;
        static WrongParams: IMessagingCallbackError;
        static NotSupported: IMessagingCallbackError;
        static Unknown: IMessagingCallbackError;
    }
    /**
       Enumeration IMessagingCallbackWarning
    */
    class IMessagingCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static UnableToSentAll: IMessagingCallbackWarning;
        static UnableToFetchAttachment: IMessagingCallbackWarning;
        static Unknown: IMessagingCallbackWarning;
    }
    /**
       Enumeration INetworkReachabilityCallbackError
    */
    class INetworkReachabilityCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: INetworkReachabilityCallbackError;
        static NotFound: INetworkReachabilityCallbackError;
        static MethodNotAllowed: INetworkReachabilityCallbackError;
        static NotAllowed: INetworkReachabilityCallbackError;
        static NotAuthenticated: INetworkReachabilityCallbackError;
        static TimeOut: INetworkReachabilityCallbackError;
        static NoResponse: INetworkReachabilityCallbackError;
        static Unreachable: INetworkReachabilityCallbackError;
        static Wrong_Params: INetworkReachabilityCallbackError;
        static MalformedUrl: INetworkReachabilityCallbackError;
        static DomainUnresolvable: INetworkReachabilityCallbackError;
        static Unknown: INetworkReachabilityCallbackError;
    }
    /**
       Enumeration INetworkReachabilityCallbackWarning
    */
    class INetworkReachabilityCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static IncorrectScheme: INetworkReachabilityCallbackWarning;
        static NotSecure: INetworkReachabilityCallbackWarning;
        static NotTrusted: INetworkReachabilityCallbackWarning;
        static Redirected: INetworkReachabilityCallbackWarning;
        static NotRegisteredService: INetworkReachabilityCallbackWarning;
        static Unknown: INetworkReachabilityCallbackWarning;
    }
    /**
       Enumeration ISecureKVResultCallbackError
    */
    class ISecureKVResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: ISecureKVResultCallbackError;
        static NoMatchesFound: ISecureKVResultCallbackError;
        static Unknown: ISecureKVResultCallbackError;
    }
    /**
       Enumeration ISecureKVResultCallbackWarning
    */
    class ISecureKVResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static EntryOverride: ISecureKVResultCallbackWarning;
        static Unknown: ISecureKVResultCallbackWarning;
    }
    /**
       Enumeration IServiceProtocolVersion
    */
    class IServiceProtocolVersion {
        value: string;
        constructor(value: string);
        toString(): string;
        static HTTP_PROTOCOL_VERSION_1_0: IServiceProtocolVersion;
        static HTTP_PROTOCOL_VERSION_1_1: IServiceProtocolVersion;
        static Unknown: IServiceProtocolVersion;
    }
    /**
       Enumeration IServiceMethod
    */
    class IServiceMethod {
        value: string;
        constructor(value: string);
        toString(): string;
        static POST: IServiceMethod;
        static GET: IServiceMethod;
        static Unknown: IServiceMethod;
    }
    /**
       Enumeration IServiceType
    */
    class IServiceType {
        value: string;
        constructor(value: string);
        toString(): string;
        static SERVICETYPE_AMF_SERIALIZATION: IServiceType;
        static SERVICETYPE_GWT_RPC: IServiceType;
        static SERVICETYPE_OCTET_BINARY: IServiceType;
        static SERVICETYPE_REMOTING_SERIALIZATION: IServiceType;
        static SERVICETYPE_REST_JSON: IServiceType;
        static SERVICETYPE_REST_XML: IServiceType;
        static SERVICETYPE_SOAP_JSON: IServiceType;
        static SERVICETYPE_SOAP_XML: IServiceType;
        static SERVICETYPE_XMLRPC_JSON: IServiceType;
        static SERVICETYPE_XMLRPC_XML: IServiceType;
        static Unknown: IServiceType;
    }
    /**
       Enumeration IServiceResultCallbackError
    */
    class IServiceResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: IServiceResultCallbackError;
        static NotFound: IServiceResultCallbackError;
        static MethodNotAllowed: IServiceResultCallbackError;
        static NotAllowed: IServiceResultCallbackError;
        static NotAuthenticated: IServiceResultCallbackError;
        static TimeOut: IServiceResultCallbackError;
        static NoResponse: IServiceResultCallbackError;
        static ServerError: IServiceResultCallbackError;
        static Unreachable: IServiceResultCallbackError;
        static MalformedUrl: IServiceResultCallbackError;
        static NotRegisteredService: IServiceResultCallbackError;
        static Unknown: IServiceResultCallbackError;
    }
    /**
       Enumeration IServiceResultCallbackWarning
    */
    class IServiceResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotSecure: IServiceResultCallbackWarning;
        static NotTrusted: IServiceResultCallbackWarning;
        static Redirected: IServiceResultCallbackWarning;
        static Wrong_Params: IServiceResultCallbackWarning;
        static Unknown: IServiceResultCallbackWarning;
    }
    /**
       Enumeration ITableResultCallbackError
    */
    class ITableResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: ITableResultCallbackError;
        static ReadOnlyTable: ITableResultCallbackError;
        static SqlException: ITableResultCallbackError;
        static DatabaseNotFound: ITableResultCallbackError;
        static NoTableFound: ITableResultCallbackError;
        static Unknown: ITableResultCallbackError;
    }
    /**
       Enumeration ITableResultCallbackWarning
    */
    class ITableResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        static TableExists: ITableResultCallbackWarning;
        static TableLocked: ITableResultCallbackWarning;
        static NoResults: ITableResultCallbackWarning;
        static Unknown: ITableResultCallbackWarning;
    }
    /**
       Enumeration LifecycleState
    */
    class LifecycleState {
        value: string;
        constructor(value: string);
        toString(): string;
        static Starting: LifecycleState;
        static Started: LifecycleState;
        static Running: LifecycleState;
        static Paused: LifecycleState;
        static PausedIdle: LifecycleState;
        static PausedRun: LifecycleState;
        static Resuming: LifecycleState;
        static Stopping: LifecycleState;
        static Unknown: LifecycleState;
    }
}
