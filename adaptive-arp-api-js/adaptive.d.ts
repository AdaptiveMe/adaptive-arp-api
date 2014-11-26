declare module Adaptive {
    /** Dictionary Definition **/
    interface IDictionary<V> {
        add(key: string, value: V): void;
        remove(key: string): void;
        containsKey(key: string): boolean;
        keys(): string[];
        values(): V[];
    }
    class Dictionary<V> implements IDictionary<V> {
        _keys: string[];
        _values: V[];
        constructor(init: {
            key: string;
            value: V;
        }[]);
        add(key: string, value: V): void;
        remove(key: string): void;
        keys(): string[];
        values(): V[];
        containsKey(key: string): boolean;
        toLookup(): IDictionary<V>;
    }
    /**
     *   Interface definition for IAdaptiveRP
     **/
    interface IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseUI
     **/
    interface IBaseUI extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseSensor
     **/
    interface IBaseSensor extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBasePIM
     **/
    interface IBasePIM extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseSystem
     **/
    interface IBaseSystem extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppResourceHandler
     **/
    interface IAppResourceHandler extends IAdaptiveRP {
        /**
         * Method Declarations for IAppResourceHandler
         */
        getResource(resourcePath: string, callback: IAppResourceCallback): any;
    }
    /**
     *   Interface definition for IBaseApplication
     **/
    interface IBaseApplication extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseReader
     **/
    interface IBaseReader extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppContextWebview
     **/
    interface IAppContextWebview extends IAdaptiveRP {
        /**
         * Method Declarations for IAppContextWebview
         */
        addWebview(webView: any): any;
        getWebviewPrimary(): any;
        getWebviews(): any[];
        removeWebview(webView: any): any;
    }
    /**
     *   Interface definition for IBaseNotification
     **/
    interface IBaseNotification extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppServer
     **/
    interface IAppServer extends IAdaptiveRP {
        /**
         * Method Declarations for IAppServer
         */
        getBaseURI(): string;
        getHost(): string;
        getPath(): string;
        getPort(): number;
        getScheme(): string;
        pauseServer(): any;
        resumeServer(): any;
        startServer(): any;
        stopServer(): any;
    }
    /**
     *   Interface definition for IBaseSocial
     **/
    interface IBaseSocial extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseSecurity
     **/
    interface IBaseSecurity extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseData
     **/
    interface IBaseData extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppContext
     **/
    interface IAppContext extends IAdaptiveRP {
        /**
         * Method Declarations for IAppContext
         */
        getContext(): any;
        getContextType(): IAppContextTypeEnum;
    }
    /**
     *  Enumerations for IAppContext Type
     **/
    class IAppContextTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static iOS: IAppContextTypeEnum;
        static OSX: IAppContextTypeEnum;
        static Windows: IAppContextTypeEnum;
        static WindowsPhone: IAppContextTypeEnum;
        static Android: IAppContextTypeEnum;
        static Linux: IAppContextTypeEnum;
        static Blackberry: IAppContextTypeEnum;
        static Tizen: IAppContextTypeEnum;
        static FirefoxOS: IAppContextTypeEnum;
        static Chromium: IAppContextTypeEnum;
        static Unspecified: IAppContextTypeEnum;
        static Unknown: IAppContextTypeEnum;
    }
    /**
     *   Interface definition for IBaseCommerce
     **/
    interface IBaseCommerce extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppRegistry
     **/
    interface IAppRegistry extends IAdaptiveRP {
        /**
         * Method Declarations for IAppRegistry
         */
        getApplicationAnalytics(): IAnalytics;
        getApplicationGlobalization(): IGlobalization;
        getApplicationLifecycle(): ILifecycle;
        getApplicationManagement(): IManagement;
        getApplicationPrinting(): IPrinting;
        getApplicationSettings(): ISettings;
        getApplicationUpdate(): IUpdate;
        getPlatformContext(): IAppContext;
        getPlatformContextWeb(): IAppContextWebview;
        getSystemCapabilities(): ICapabilities;
        getSystemDevice(): IDevice;
        getSystemDisplay(): IDisplay;
        getSystemOS(): IOS;
        getSystemRuntime(): IRuntime;
    }
    /**
     *   Interface definition for IBaseCallback
     **/
    interface IBaseCallback extends IAdaptiveRP {
        /**
         * Method Declarations for IBaseCallback
         */
        getId(): number;
        toString(): string;
    }
    /**
     *  Callback IBaseCallback implementation.
     */
    class BaseCallback implements IBaseCallback {
        description: string;
        id: number;
        constructor();
        toString(): string;
        getId(): number;
    }
    /**
     *   Interface definition for IBaseMedia
     **/
    interface IBaseMedia extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppServerManager
     **/
    interface IAppServerManager extends IAdaptiveRP {
        /**
         * Method Declarations for IAppServerManager
         */
        addServerListener(listener: IAppServerListener): any;
        getServers(): IAppServer[];
        pauseServer(server: IAppServer): any;
        removeServerListener(listener: IAppServerListener): any;
        removeServerListeners(): any;
        resumeServer(server: IAppServer): any;
        startServer(): any;
        stopServers(): any;
        stopServer(server: IAppServer): any;
    }
    /**
     *   Interface definition for IBaseListener
     **/
    interface IBaseListener extends IAdaptiveRP {
        /**
         * Method Declarations for IBaseListener
         */
        getId(): number;
        toString(): string;
    }
    /**
     *  Listener IBaseListener implementation.
     */
    class BaseListener implements IBaseListener {
        description: string;
        id: number;
        constructor();
        toString(): string;
        getId(): number;
    }
    /**
     *   Interface definition for IBaseUtil
     **/
    interface IBaseUtil extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IBaseCommunication
     **/
    interface IBaseCommunication extends IAdaptiveRP {
    }
    /**
     *   Interface definition for IAppResource
     **/
    interface IAppResource extends IAdaptiveRP {
        /**
         * Method Declarations for IAppResource
         */
        geType(): IAppResourcePayloadEnum;
        getData(): number[];
        getDataPathLinked(): string;
        getDataStored(): number[];
        getFormat(): IAppResourceFormatEnum;
        getMd5(): string;
        getMimetype(): string;
        getName(): string;
        getPath(): string;
        getSize(): number;
        getSizeStored(): number;
        getTimestamp(): number;
        getType(): IAppResourceTypeEnum;
        getUuid(): string;
    }
    /**
     *  Enumerations for IAppResource Payload
     **/
    class IAppResourcePayloadEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Default: IAppResourcePayloadEnum;
        static Embedded: IAppResourcePayloadEnum;
        static Linked: IAppResourcePayloadEnum;
        static Unknown: IAppResourcePayloadEnum;
    }
    /**
     *  Enumerations for IAppResource Format
     **/
    class IAppResourceFormatEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Raw: IAppResourceFormatEnum;
        static Compressed: IAppResourceFormatEnum;
        static Encrypted: IAppResourceFormatEnum;
        static EncryptedCompressed: IAppResourceFormatEnum;
        static Unknown: IAppResourceFormatEnum;
    }
    /**
     *  Enumerations for IAppResource Type
     **/
    class IAppResourceTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Html: IAppResourceTypeEnum;
        static Css: IAppResourceTypeEnum;
        static JavaScript: IAppResourceTypeEnum;
        static Image: IAppResourceTypeEnum;
        static Video: IAppResourceTypeEnum;
        static Audio: IAppResourceTypeEnum;
        static Property: IAppResourceTypeEnum;
        static Database: IAppResourceTypeEnum;
        static Other: IAppResourceTypeEnum;
        static Unknown: IAppResourceTypeEnum;
    }
    /**
     *   Interface definition for IDevice
     **/
    interface IDevice extends IBaseSystem {
        /**
         * Method Declarations for IDevice
         */
        addButtonListener(listener: IButtonListener): any;
        getDeviceInfo(): DeviceInfo;
        getLocaleCurrent(): Locale;
        removeButtonListener(listener: IButtonListener): any;
        removeButtonListeners(): any;
    }
    /**
     *  Service IDevice implementation.
     */
    class DeviceBridge implements IDevice {
        constructor();
        addButtonListener(listener: IButtonListener): void;
        getDeviceInfo(): DeviceInfo;
        getLocaleCurrent(): Locale;
        removeButtonListener(listener: IButtonListener): void;
        removeButtonListeners(): void;
    }
    /**
     *   Interface definition for IMail
     **/
    interface IMail extends IBasePIM {
        /**
         * Method Declarations for IMail
         */
        sendEmail(data: Email, callback: IMessagingCallback): any;
    }
    /**
     *  Service IMail implementation.
     */
    class MailBridge implements IMail {
        constructor();
        sendEmail(data: Email, callback: IMessagingCallback): void;
    }
    /**
     *   Interface definition for ISecureKVResultCallback
     **/
    interface ISecureKVResultCallback extends IBaseCallback {
        /**
         * Method Declarations for ISecureKVResultCallback
         */
        onError(error: ISecureKVResultCallbackErrorEnum): any;
        onResult(keyValues: SecureKeyPair[]): any;
        onWarning(keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for ISecureKVResultCallback Error
     **/
    class ISecureKVResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: ISecureKVResultCallbackErrorEnum;
        static NoMatchesFound: ISecureKVResultCallbackErrorEnum;
        static Unknown: ISecureKVResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for ISecureKVResultCallback Warning
     **/
    class ISecureKVResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static EntryOverride: ISecureKVResultCallbackWarningEnum;
        static Unknown: ISecureKVResultCallbackWarningEnum;
    }
    /**
     *  Callback ISecureKVResultCallback onError/onWarning/onResult handlers.
     */
    function handleISecureKVResultCallbackError(id: number, error: ISecureKVResultCallbackErrorEnum): void;
    function handleISecureKVResultCallbackResult(id: number, keyValues: SecureKeyPair[]): void;
    function handleISecureKVResultCallbackWarning(id: number, keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarningEnum): void;
    /**
     *  Callback ISecureKVResultCallback implementation.
     */
    class SecureKVResultCallback implements ISecureKVResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: ISecureKVResultCallbackErrorEnum) => Function;
        onResultFunction: (keyValues: SecureKeyPair[]) => Function;
        onWarningFunction: (keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: ISecureKVResultCallbackErrorEnum) => Function, onResultFunction: (keyValues: SecureKeyPair[]) => Function, onWarningFunction: (keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: ISecureKVResultCallbackErrorEnum): void;
        onResult(keyValues: SecureKeyPair[]): void;
        onWarning(keyValues: SecureKeyPair[], warning: ISecureKVResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for INetworkStatus
     **/
    interface INetworkStatus extends IBaseCommunication {
    }
    /**
     *   Interface definition for ICrypto
     **/
    interface ICrypto extends IBaseUtil {
    }
    /**
     *   Interface definition for IInternalStorage
     **/
    interface IInternalStorage extends IBaseData {
    }
    /**
     *   Interface definition for IFileResultCallback
     **/
    interface IFileResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IFileResultCallback
         */
        onError(error: IFileResultCallbackErrorEnum): any;
        onResult(storageFile: IFile): any;
        onWarning(sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IFileResultCallback Error
     **/
    class IFileResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static FileExists: IFileResultCallbackErrorEnum;
        static InsufficientSpace: IFileResultCallbackErrorEnum;
        static Unauthorized: IFileResultCallbackErrorEnum;
        static Unknown: IFileResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IFileResultCallback Warning
     **/
    class IFileResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static SourceNotDeleted: IFileResultCallbackWarningEnum;
        static RootDirectory: IFileResultCallbackWarningEnum;
        static Unknown: IFileResultCallbackWarningEnum;
    }
    /**
     *  Callback IFileResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileResultCallbackError(id: number, error: IFileResultCallbackErrorEnum): void;
    function handleIFileResultCallbackResult(id: number, storageFile: IFile): void;
    function handleIFileResultCallbackWarning(id: number, sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum): void;
    /**
     *  Callback IFileResultCallback implementation.
     */
    class FileResultCallback implements IFileResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IFileResultCallbackErrorEnum) => Function;
        onResultFunction: (storageFile: IFile) => Function;
        onWarningFunction: (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IFileResultCallbackErrorEnum) => Function, onResultFunction: (storageFile: IFile) => Function, onWarningFunction: (sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IFileResultCallbackErrorEnum): void;
        onResult(storageFile: IFile): void;
        onWarning(sourceFile: IFile, destinationFile: IFile, warning: IFileResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IManagement
     **/
    interface IManagement extends IBaseApplication {
    }
    /**
     *   Interface definition for IUI
     **/
    interface IUI extends IBaseUI {
    }
    /**
     *   Interface definition for IQRCode
     **/
    interface IQRCode extends IBaseReader {
    }
    /**
     *   Interface definition for INotification
     **/
    interface INotification extends IBaseNotification {
    }
    /**
     *   Interface definition for IVibration
     **/
    interface IVibration extends IBaseNotification {
    }
    /**
     *   Interface definition for IBarcode
     **/
    interface IBarcode extends IBaseReader {
    }
    /**
     *   Interface definition for ILifecycleListener
     **/
    interface ILifecycleListener extends IBaseListener {
        /**
         * Method Declarations for ILifecycleListener
         */
        onError(error: ILifecycleListenerErrorEnum): any;
        onResult(lifecycle: Lifecycle): any;
        onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum): any;
    }
    /**
     *  Enumerations for ILifecycleListener Error
     **/
    class ILifecycleListenerErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Runtime: ILifecycleListenerErrorEnum;
        static Implementation: ILifecycleListenerErrorEnum;
        static Killed: ILifecycleListenerErrorEnum;
        static Unknown: ILifecycleListenerErrorEnum;
    }
    /**
     *  Enumerations for ILifecycleListener Warning
     **/
    class ILifecycleListenerWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static MemoryLow: ILifecycleListenerWarningEnum;
        static BatteryLow: ILifecycleListenerWarningEnum;
        static Unknown: ILifecycleListenerWarningEnum;
    }
    /**
     *  Listener ILifecycleListener onError/onWarning/onResult handlers.
     */
    function handleILifecycleListenerError(id: number, error: ILifecycleListenerErrorEnum): void;
    function handleILifecycleListenerResult(id: number, lifecycle: Lifecycle): void;
    function handleILifecycleListenerWarning(id: number, lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum): void;
    /**
     *  Listener ILifecycleListener implementation.
     */
    class LifecycleListener implements ILifecycleListener {
        description: string;
        id: number;
        onErrorFunction: (error: ILifecycleListenerErrorEnum) => Function;
        onResultFunction: (lifecycle: Lifecycle) => Function;
        onWarningFunction: (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function;
        constructor(onErrorFunction: (error: ILifecycleListenerErrorEnum) => Function, onResultFunction: (lifecycle: Lifecycle) => Function, onWarningFunction: (lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: ILifecycleListenerErrorEnum): void;
        onResult(lifecycle: Lifecycle): void;
        onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarningEnum): void;
    }
    /**
     *   Interface definition for ICloud
     **/
    interface ICloud extends IBaseData {
    }
    /**
     *   Interface definition for ICompression
     **/
    interface ICompression extends IBaseUtil {
    }
    /**
     *   Interface definition for IDataStream
     **/
    interface IDataStream extends IBaseData {
    }
    /**
     *   Interface definition for IConcurrent
     **/
    interface IConcurrent extends IBaseUtil {
    }
    /**
     *   Interface definition for ISession
     **/
    interface ISession extends IBaseCommunication {
        /**
         * Method Declarations for ISession
         */
        getAttribute(name: string): any;
        getAttributes(): any[];
        getCookies(): Cookie[];
        listAttributeNames(): string[];
        removeAttribute(name: string): any;
        removeAttributes(): any;
        removeCookie(cookie: Cookie): any;
        removeCookies(cookies: Cookie[]): any;
        setAttribute(name: string, value: any): any;
        setCookie(cookie: Cookie): any;
        setCookies(cookies: Cookie[]): any;
    }
    /**
     *  Service ISession implementation.
     */
    class SessionBridge implements ISession {
        constructor();
        getAttribute(name: string): any;
        getAttributes(): any[];
        getCookies(): Cookie[];
        listAttributeNames(): string[];
        removeAttribute(name: string): void;
        removeAttributes(): void;
        removeCookie(cookie: Cookie): void;
        removeCookies(cookies: Cookie[]): void;
        setAttribute(name: string, value: any): void;
        setCookie(cookie: Cookie): void;
        setCookies(cookies: Cookie[]): void;
    }
    /**
     *   Interface definition for IAppServerListener
     **/
    interface IAppServerListener extends IBaseListener {
        /**
         * Method Declarations for IAppServerListener
         */
        onPaused(server: IAppServer): any;
        onPausing(server: IAppServer): any;
        onResumed(server: IAppServer): any;
        onResuming(server: IAppServer): any;
        onStart(server: IAppServer): any;
        onStopped(server: IAppServer): any;
        onStopping(server: IAppServer): any;
    }
    /**
     *   Interface definition for INetworkReachabilityCallback
     **/
    interface INetworkReachabilityCallback extends IBaseCallback {
        /**
         * Method Declarations for INetworkReachabilityCallback
         */
        onError(error: INetworkReachabilityCallbackErrorEnum): any;
        onResult(result: string): any;
        onWarning(result: string, warning: INetworkReachabilityCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for INetworkReachabilityCallback Error
     **/
    class INetworkReachabilityCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: INetworkReachabilityCallbackErrorEnum;
        static NotFound: INetworkReachabilityCallbackErrorEnum;
        static MethodNotAllowed: INetworkReachabilityCallbackErrorEnum;
        static NotAllowed: INetworkReachabilityCallbackErrorEnum;
        static NotAuthenticated: INetworkReachabilityCallbackErrorEnum;
        static TimeOut: INetworkReachabilityCallbackErrorEnum;
        static NoResponse: INetworkReachabilityCallbackErrorEnum;
        static Unreachable: INetworkReachabilityCallbackErrorEnum;
        static Wrong_Params: INetworkReachabilityCallbackErrorEnum;
        static MalformedUrl: INetworkReachabilityCallbackErrorEnum;
        static DomainUnresolvable: INetworkReachabilityCallbackErrorEnum;
        static Unknown: INetworkReachabilityCallbackErrorEnum;
    }
    /**
     *  Enumerations for INetworkReachabilityCallback Warning
     **/
    class INetworkReachabilityCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static IncorrectScheme: INetworkReachabilityCallbackWarningEnum;
        static NotSecure: INetworkReachabilityCallbackWarningEnum;
        static NotTrusted: INetworkReachabilityCallbackWarningEnum;
        static Redirected: INetworkReachabilityCallbackWarningEnum;
        static NotRegisteredService: INetworkReachabilityCallbackWarningEnum;
        static Unknown: INetworkReachabilityCallbackWarningEnum;
    }
    /**
     *  Callback INetworkReachabilityCallback onError/onWarning/onResult handlers.
     */
    function handleINetworkReachabilityCallbackError(id: number, error: INetworkReachabilityCallbackErrorEnum): void;
    function handleINetworkReachabilityCallbackResult(id: number, result: string): void;
    function handleINetworkReachabilityCallbackWarning(id: number, result: string, warning: INetworkReachabilityCallbackWarningEnum): void;
    /**
     *  Callback INetworkReachabilityCallback implementation.
     */
    class NetworkReachabilityCallback implements INetworkReachabilityCallback {
        description: string;
        id: number;
        onErrorFunction: (error: INetworkReachabilityCallbackErrorEnum) => Function;
        onResultFunction: (result: string) => Function;
        onWarningFunction: (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: INetworkReachabilityCallbackErrorEnum) => Function, onResultFunction: (result: string) => Function, onWarningFunction: (result: string, warning: INetworkReachabilityCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: INetworkReachabilityCallbackErrorEnum): void;
        onResult(result: string): void;
        onWarning(result: string, warning: INetworkReachabilityCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IAccelerationListener
     **/
    interface IAccelerationListener extends IBaseListener {
        /**
         * Method Declarations for IAccelerationListener
         */
        onError(error: IAccelerationListenerErrorEnum): any;
        onResult(acceleration: Acceleration): any;
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarningEnum): any;
    }
    /**
     *  Enumerations for IAccelerationListener Error
     **/
    class IAccelerationListenerErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Unauthorized: IAccelerationListenerErrorEnum;
        static Unavailable: IAccelerationListenerErrorEnum;
        static Unknown: IAccelerationListenerErrorEnum;
    }
    /**
     *  Enumerations for IAccelerationListener Warning
     **/
    class IAccelerationListenerWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NeedsCalibration: IAccelerationListenerWarningEnum;
        static Stale: IAccelerationListenerWarningEnum;
        static Unknown: IAccelerationListenerWarningEnum;
    }
    /**
     *  Listener IAccelerationListener onError/onWarning/onResult handlers.
     */
    function handleIAccelerationListenerError(id: number, error: IAccelerationListenerErrorEnum): void;
    function handleIAccelerationListenerResult(id: number, acceleration: Acceleration): void;
    function handleIAccelerationListenerWarning(id: number, acceleration: Acceleration, warning: IAccelerationListenerWarningEnum): void;
    /**
     *  Listener IAccelerationListener implementation.
     */
    class AccelerationListener implements IAccelerationListener {
        description: string;
        id: number;
        onErrorFunction: (error: IAccelerationListenerErrorEnum) => Function;
        onResultFunction: (acceleration: Acceleration) => Function;
        onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function;
        constructor(onErrorFunction: (error: IAccelerationListenerErrorEnum) => Function, onResultFunction: (acceleration: Acceleration) => Function, onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IAccelerationListenerErrorEnum): void;
        onResult(acceleration: Acceleration): void;
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarningEnum): void;
    }
    /**
     *   Interface definition for IDatabase
     **/
    interface IDatabase extends IBaseData {
        /**
         * Method Declarations for IDatabase
         */
        createDatabase(database: Database, callback: IDatabaseResultCallback): any;
        createTable(database: Database, table: Table, callback: ITableResultCallback): any;
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): any;
        deleteTable(database: Database, table: Table, callback: ITableResultCallback): any;
        executeSqlQuery(database: Database, query: string, replacements: String[], callback: ITableResultCallback): any;
        executeSqlStatement(database: Database, statement: string, replacements: String[], callback: ITableResultCallback): any;
        executeSqlTransactions(database: Database, statements: String[], rollbackFlag: boolean, callback: ITableResultCallback): any;
        existsDatabase(database: Database): boolean;
        existsTable(database: Database, table: Table): boolean;
    }
    /**
     *  Service IDatabase implementation.
     */
    class DatabaseBridge implements IDatabase {
        constructor();
        createDatabase(database: Database, callback: IDatabaseResultCallback): void;
        createTable(database: Database, table: Table, callback: ITableResultCallback): void;
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): void;
        deleteTable(database: Database, table: Table, callback: ITableResultCallback): void;
        executeSqlQuery(database: Database, query: string, replacements: string[], callback: ITableResultCallback): void;
        executeSqlStatement(database: Database, statement: string, replacements: string[], callback: ITableResultCallback): void;
        executeSqlTransactions(database: Database, statements: string[], rollbackFlag: boolean, callback: ITableResultCallback): void;
        existsDatabase(database: Database): boolean;
        existsTable(database: Database, table: Table): boolean;
    }
    /**
     *   Interface definition for INetworkNaming
     **/
    interface INetworkNaming extends IBaseCommunication {
    }
    /**
     *   Interface definition for IButtonListener
     **/
    interface IButtonListener extends IBaseListener {
        /**
         * Method Declarations for IButtonListener
         */
        onError(error: IButtonListenerErrorEnum): any;
        onResult(button: Button): any;
        onWarning(button: Button, warning: IButtonListenerWarningEnum): any;
    }
    /**
     *  Enumerations for IButtonListener Error
     **/
    class IButtonListenerErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Present: IButtonListenerErrorEnum;
        static Unknown: IButtonListenerErrorEnum;
    }
    /**
     *  Enumerations for IButtonListener Warning
     **/
    class IButtonListenerWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Not_Implemented: IButtonListenerWarningEnum;
        static Unknown: IButtonListenerWarningEnum;
    }
    /**
     *  Listener IButtonListener onError/onWarning/onResult handlers.
     */
    function handleIButtonListenerError(id: number, error: IButtonListenerErrorEnum): void;
    function handleIButtonListenerResult(id: number, button: Button): void;
    function handleIButtonListenerWarning(id: number, button: Button, warning: IButtonListenerWarningEnum): void;
    /**
     *  Listener IButtonListener implementation.
     */
    class ButtonListener implements IButtonListener {
        description: string;
        id: number;
        onErrorFunction: (error: IButtonListenerErrorEnum) => Function;
        onResultFunction: (button: Button) => Function;
        onWarningFunction: (button: Button, warning: IButtonListenerWarningEnum) => Function;
        constructor(onErrorFunction: (error: IButtonListenerErrorEnum) => Function, onResultFunction: (button: Button) => Function, onWarningFunction: (button: Button, warning: IButtonListenerWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IButtonListenerErrorEnum): void;
        onResult(button: Button): void;
        onWarning(button: Button, warning: IButtonListenerWarningEnum): void;
    }
    /**
     *   Interface definition for IBarometer
     **/
    interface IBarometer extends IBaseSensor {
    }
    /**
     *   Interface definition for IAds
     **/
    interface IAds extends IBaseCommerce {
    }
    /**
     *   Interface definition for IAudio
     **/
    interface IAudio extends IBaseMedia {
    }
    /**
     *   Interface definition for IOCR
     **/
    interface IOCR extends IBaseReader {
    }
    /**
     *   Interface definition for IContactResultCallback
     **/
    interface IContactResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IContactResultCallback
         */
        onError(error: IContactResultCallbackErrorEnum): any;
        onResult(contacts: Contact[]): any;
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IContactResultCallback Error
     **/
    class IContactResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactResultCallbackErrorEnum;
        static Wrong_Params: IContactResultCallbackErrorEnum;
        static Unknown: IContactResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IContactResultCallback Warning
     **/
    class IContactResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactResultCallbackWarningEnum;
        static No_Matches: IContactResultCallbackWarningEnum;
        static Unknown: IContactResultCallbackWarningEnum;
    }
    /**
     *  Callback IContactResultCallback onError/onWarning/onResult handlers.
     */
    function handleIContactResultCallbackError(id: number, error: IContactResultCallbackErrorEnum): void;
    function handleIContactResultCallbackResult(id: number, contacts: Contact[]): void;
    function handleIContactResultCallbackWarning(id: number, contacts: Contact[], warning: IContactResultCallbackWarningEnum): void;
    /**
     *  Callback IContactResultCallback implementation.
     */
    class ContactResultCallback implements IContactResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IContactResultCallbackErrorEnum) => Function;
        onResultFunction: (contacts: Contact[]) => Function;
        onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IContactResultCallbackErrorEnum) => Function, onResultFunction: (contacts: Contact[]) => Function, onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IContactResultCallbackErrorEnum): void;
        onResult(contacts: Contact[]): void;
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for ITwitter
     **/
    interface ITwitter extends IBaseSocial {
    }
    /**
     *   Interface definition for IBrowser
     **/
    interface IBrowser extends IBaseUI {
        /**
         * Method Declarations for IBrowser
         */
        openBrowser(url: string, title: string, buttonText: string): boolean;
    }
    /**
     *  Service IBrowser implementation.
     */
    class BrowserBridge implements IBrowser {
        constructor();
        openBrowser(url: string, title: string, buttonText: string): boolean;
    }
    /**
     *   Interface definition for IUpdate
     **/
    interface IUpdate extends IBaseApplication {
    }
    /**
     *   Interface definition for INetworkReachability
     **/
    interface INetworkReachability extends IBaseCommunication {
        /**
         * Method Declarations for INetworkReachability
         */
        isNetworkReachable(host: string, callback: INetworkReachabilityCallback): any;
        isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback): any;
    }
    /**
     *  Service INetworkReachability implementation.
     */
    class NetworkReachabilityBridge implements INetworkReachability {
        constructor();
        isNetworkReachable(host: string, callback: INetworkReachabilityCallback): void;
        isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback): void;
    }
    /**
     *   Interface definition for ILinkedIn
     **/
    interface ILinkedIn extends IBaseSocial {
    }
    /**
     *   Interface definition for ISocket
     **/
    interface ISocket extends IBaseCommunication {
    }
    /**
     *   Interface definition for IRSS
     **/
    interface IRSS extends IBaseSocial {
    }
    /**
     *   Interface definition for IBluetooth
     **/
    interface IBluetooth extends IBaseCommunication {
    }
    /**
     *   Interface definition for IGeolocationListener
     **/
    interface IGeolocationListener extends IBaseListener {
        /**
         * Method Declarations for IGeolocationListener
         */
        onError(error: IGeolocationListenerErrorEnum): any;
        onResult(geolocation: Geolocation): any;
        onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarningEnum): any;
    }
    /**
     *  Enumerations for IGeolocationListener Error
     **/
    class IGeolocationListenerErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Disabled: IGeolocationListenerErrorEnum;
        static RestrictedAccess: IGeolocationListenerErrorEnum;
        static DeniedAccess: IGeolocationListenerErrorEnum;
        static StatusNotDetermined: IGeolocationListenerErrorEnum;
        static Unknown: IGeolocationListenerErrorEnum;
    }
    /**
     *  Enumerations for IGeolocationListener Warning
     **/
    class IGeolocationListenerWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static HighDoP: IGeolocationListenerWarningEnum;
        static StaleData: IGeolocationListenerWarningEnum;
        static Unknown: IGeolocationListenerWarningEnum;
    }
    /**
     *  Listener IGeolocationListener onError/onWarning/onResult handlers.
     */
    function handleIGeolocationListenerError(id: number, error: IGeolocationListenerErrorEnum): void;
    function handleIGeolocationListenerResult(id: number, geolocation: Geolocation): void;
    function handleIGeolocationListenerWarning(id: number, geolocation: Geolocation, warning: IGeolocationListenerWarningEnum): void;
    /**
     *  Listener IGeolocationListener implementation.
     */
    class GeolocationListener implements IGeolocationListener {
        description: string;
        id: number;
        onErrorFunction: (error: IGeolocationListenerErrorEnum) => Function;
        onResultFunction: (geolocation: Geolocation) => Function;
        onWarningFunction: (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function;
        constructor(onErrorFunction: (error: IGeolocationListenerErrorEnum) => Function, onResultFunction: (geolocation: Geolocation) => Function, onWarningFunction: (geolocation: Geolocation, warning: IGeolocationListenerWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IGeolocationListenerErrorEnum): void;
        onResult(geolocation: Geolocation): void;
        onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarningEnum): void;
    }
    /**
     *   Interface definition for IContactPhotoResultCallback
     **/
    interface IContactPhotoResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IContactPhotoResultCallback
         */
        onError(error: IContactPhotoResultCallbackErrorEnum): any;
        onResult(contactPhoto: number[]): any;
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IContactPhotoResultCallback Error
     **/
    class IContactPhotoResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoPermission: IContactPhotoResultCallbackErrorEnum;
        static Wrong_Params: IContactPhotoResultCallbackErrorEnum;
        static No_Photo: IContactPhotoResultCallbackErrorEnum;
        static Unknown: IContactPhotoResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IContactPhotoResultCallback Warning
     **/
    class IContactPhotoResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static LimitExceeded: IContactPhotoResultCallbackWarningEnum;
        static No_Matches: IContactPhotoResultCallbackWarningEnum;
        static Unknown: IContactPhotoResultCallbackWarningEnum;
    }
    /**
     *  Callback IContactPhotoResultCallback onError/onWarning/onResult handlers.
     */
    function handleIContactPhotoResultCallbackError(id: number, error: IContactPhotoResultCallbackErrorEnum): void;
    function handleIContactPhotoResultCallbackResult(id: number, contactPhoto: number[]): void;
    function handleIContactPhotoResultCallbackWarning(id: number, contactPhoto: number[], warning: IContactPhotoResultCallbackWarningEnum): void;
    /**
     *  Callback IContactPhotoResultCallback implementation.
     */
    class ContactPhotoResultCallback implements IContactPhotoResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IContactPhotoResultCallbackErrorEnum) => Function;
        onResultFunction: (contactPhoto: number[]) => Function;
        onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IContactPhotoResultCallbackErrorEnum) => Function, onResultFunction: (contactPhoto: number[]) => Function, onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IContactPhotoResultCallbackErrorEnum): void;
        onResult(contactPhoto: number[]): void;
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for ILifecycle
     **/
    interface ILifecycle extends IBaseApplication {
        /**
         * Method Declarations for ILifecycle
         */
        addLifecycleListener(listener: ILifecycleListener): any;
        isBackground(): boolean;
        removeLifecycleListener(listener: ILifecycleListener): any;
        removeLifecycleListeners(): any;
    }
    /**
     *  Service ILifecycle implementation.
     */
    class LifecycleBridge implements ILifecycle {
        constructor();
        addLifecycleListener(listener: ILifecycleListener): void;
        isBackground(): boolean;
        removeLifecycleListener(listener: ILifecycleListener): void;
        removeLifecycleListeners(): void;
    }
    /**
     *   Interface definition for IFileSystem
     **/
    interface IFileSystem extends IBaseData {
        /**
         * Method Declarations for IFileSystem
         */
        createWithPathString(path: string, name: string, callback: IFileResultCallback): any;
        createWithPath(path: IFilePath, name: string, callback: IFileResultCallback): any;
        create(name: string, callback: IFileResultCallback): any;
        getApplicationCacheFolder(): IFilePath;
        getApplicationDocumentsFolder(): IFilePath;
        getApplicationFolder(): IFilePath;
        getPathForFile(file: IFile): string;
        getPathForPath(path: IFilePath): string;
        getSeparator(): string;
        isSameFile(source: IFile, dest: IFile): boolean;
        isSamePath(source: IFilePath, dest: IFilePath): boolean;
        toPath(path: IFile): IFilePath;
    }
    /**
     *  Service IFileSystem implementation.
     */
    class FileSystemBridge implements IFileSystem {
        constructor();
        create(name: string, callback: IFileResultCallback): void;
        createWithPath(path: IFilePath, name: string, callback: IFileResultCallback): void;
        createWithPathString(path: string, name: string, callback: IFileResultCallback): void;
        getApplicationCacheFolder(): IFilePath;
        getApplicationDocumentsFolder(): IFilePath;
        getApplicationFolder(): IFilePath;
        getPathForFile(file: IFile): string;
        getPathForPath(path: IFilePath): string;
        getSeparator(): string;
        isSameFile(source: IFile, dest: IFile): boolean;
        isSamePath(source: IFilePath, dest: IFilePath): boolean;
        toPath(path: IFile): IFilePath;
    }
    /**
     *   Interface definition for INetworkInfo
     **/
    interface INetworkInfo extends IBaseCommunication {
    }
    /**
     *   Interface definition for IOS
     **/
    interface IOS extends IBaseSystem {
        /**
         * Method Declarations for IOS
         */
        getOSInfo(): OSInfo;
    }
    /**
     *  Service IOS implementation.
     */
    class OSBridge implements IOS {
        constructor();
        getOSInfo(): OSInfo;
    }
    /**
     *   Interface definition for IPrinting
     **/
    interface IPrinting extends IBaseApplication {
    }
    /**
     *   Interface definition for IGooglePlus
     **/
    interface IGooglePlus extends IBaseSocial {
    }
    /**
     *   Interface definition for IAmbientLight
     **/
    interface IAmbientLight extends IBaseSensor {
    }
    /**
     *   Interface definition for INotificationLocal
     **/
    interface INotificationLocal extends IBaseNotification {
    }
    /**
     *   Interface definition for IContact
     **/
    interface IContact extends IBasePIM {
        /**
         * Method Declarations for IContact
         */
        getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback): any;
        getContact(contact: ContactUid, callback: IContactResultCallback): any;
        getContactsForFields(callback: IContactResultCallback, fields: IContactFieldGroupEnum[]): any;
        getContactsWithFilter(callback: IContactResultCallback, fields: IContactFieldGroupEnum[], filter: IContactFilterEnum[]): any;
        getContacts(callback: IContactResultCallback): any;
        searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: IContactFilterEnum[]): any;
        searchContacts(term: string, callback: IContactResultCallback): any;
        setContactPhoto(contact: ContactUid, pngImage: number[]): boolean;
    }
    /**
     *  Enumerations for IContact FieldGroup
     **/
    class IContactFieldGroupEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static PERSONAL_INFO: IContactFieldGroupEnum;
        static PROFESSIONAL_INFO: IContactFieldGroupEnum;
        static ADDRESSES: IContactFieldGroupEnum;
        static PHONES: IContactFieldGroupEnum;
        static EMAILS: IContactFieldGroupEnum;
        static WEBSITES: IContactFieldGroupEnum;
        static SOCIALS: IContactFieldGroupEnum;
        static TAGS: IContactFieldGroupEnum;
        static Unknown: IContactFieldGroupEnum;
    }
    /**
     *  Enumerations for IContact Filter
     **/
    class IContactFilterEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static HAS_PHONE: IContactFilterEnum;
        static HAS_EMAIL: IContactFilterEnum;
        static HAS_ADDRESS: IContactFilterEnum;
        static Unknown: IContactFilterEnum;
    }
    /**
     *  Service IContact implementation.
     */
    class ContactBridge implements IContact {
        constructor();
        getContact(contact: ContactUid, callback: IContactResultCallback): void;
        getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback): void;
        getContacts(callback: IContactResultCallback): void;
        getContactsForFields(callback: IContactResultCallback, fields: IContactFieldGroupEnum[]): void;
        getContactsWithFilter(callback: IContactResultCallback, fields: IContactFieldGroupEnum[], filter: IContactFilterEnum[]): void;
        searchContacts(term: string, callback: IContactResultCallback): void;
        searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: IContactFilterEnum[]): void;
        setContactPhoto(contact: ContactUid, pngImage: number[]): boolean;
    }
    /**
     *   Interface definition for ILogging
     **/
    interface ILogging extends IBaseUtil {
        /**
         * Method Declarations for ILogging
         */
        log(level: ILoggingLogLevelEnum, message: string): any;
        log(level: ILoggingLogLevelEnum, category: string, message: string): any;
    }
    /**
     *  Enumerations for ILogging LogLevel
     **/
    class ILoggingLogLevelEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static DEBUG: ILoggingLogLevelEnum;
        static WARN: ILoggingLogLevelEnum;
        static ERROR: ILoggingLogLevelEnum;
        static INFO: ILoggingLogLevelEnum;
        static Unknown: ILoggingLogLevelEnum;
    }
    /**
     *   Interface definition for IStore
     **/
    interface IStore extends IBaseCommerce {
    }
    /**
     *   Interface definition for IRuntime
     **/
    interface IRuntime extends IBaseSystem {
        /**
         * Method Declarations for IRuntime
         */
        dismissApplication(): any;
        dismissSplashScreen(): boolean;
    }
    /**
     *  Service IRuntime implementation.
     */
    class RuntimeBridge implements IRuntime {
        constructor();
        dismissApplication(): void;
        dismissSplashScreen(): boolean;
    }
    /**
     *   Interface definition for IMessagingCallback
     **/
    interface IMessagingCallback extends IBaseCallback {
        /**
         * Method Declarations for IMessagingCallback
         */
        onError(error: IMessagingCallbackErrorEnum): any;
        onResult(success: boolean): any;
        onWarning(success: boolean, warning: IMessagingCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IMessagingCallback Error
     **/
    class IMessagingCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static SIMNotPresent: IMessagingCallbackErrorEnum;
        static EmailAccountNotFound: IMessagingCallbackErrorEnum;
        static NotSent: IMessagingCallbackErrorEnum;
        static WrongParams: IMessagingCallbackErrorEnum;
        static NotSupported: IMessagingCallbackErrorEnum;
        static Unknown: IMessagingCallbackErrorEnum;
    }
    /**
     *  Enumerations for IMessagingCallback Warning
     **/
    class IMessagingCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static UnableToSentAll: IMessagingCallbackWarningEnum;
        static UnableToFetchAttachment: IMessagingCallbackWarningEnum;
        static Unknown: IMessagingCallbackWarningEnum;
    }
    /**
     *  Callback IMessagingCallback onError/onWarning/onResult handlers.
     */
    function handleIMessagingCallbackError(id: number, error: IMessagingCallbackErrorEnum): void;
    function handleIMessagingCallbackResult(id: number, success: boolean): void;
    function handleIMessagingCallbackWarning(id: number, success: boolean, warning: IMessagingCallbackWarningEnum): void;
    /**
     *  Callback IMessagingCallback implementation.
     */
    class MessagingCallback implements IMessagingCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IMessagingCallbackErrorEnum) => Function;
        onResultFunction: (success: boolean) => Function;
        onWarningFunction: (success: boolean, warning: IMessagingCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IMessagingCallbackErrorEnum) => Function, onResultFunction: (success: boolean) => Function, onWarningFunction: (success: boolean, warning: IMessagingCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IMessagingCallbackErrorEnum): void;
        onResult(success: boolean): void;
        onWarning(success: boolean, warning: IMessagingCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IDatabaseResultCallback
     **/
    interface IDatabaseResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IDatabaseResultCallback
         */
        onError(error: IDatabaseResultCallbackErrorEnum): any;
        onResult(database: Database): any;
        onWarning(database: Database, warning: IDatabaseResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IDatabaseResultCallback Error
     **/
    class IDatabaseResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: IDatabaseResultCallbackErrorEnum;
        static SqlException: IDatabaseResultCallbackErrorEnum;
        static NotDeleted: IDatabaseResultCallbackErrorEnum;
        static Unknown: IDatabaseResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IDatabaseResultCallback Warning
     **/
    class IDatabaseResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static DatabaseExists: IDatabaseResultCallbackWarningEnum;
        static IsOpen: IDatabaseResultCallbackWarningEnum;
        static Unknown: IDatabaseResultCallbackWarningEnum;
    }
    /**
     *  Callback IDatabaseResultCallback onError/onWarning/onResult handlers.
     */
    function handleIDatabaseResultCallbackError(id: number, error: IDatabaseResultCallbackErrorEnum): void;
    function handleIDatabaseResultCallbackResult(id: number, database: Database): void;
    function handleIDatabaseResultCallbackWarning(id: number, database: Database, warning: IDatabaseResultCallbackWarningEnum): void;
    /**
     *  Callback IDatabaseResultCallback implementation.
     */
    class DatabaseResultCallback implements IDatabaseResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IDatabaseResultCallbackErrorEnum) => Function;
        onResultFunction: (database: Database) => Function;
        onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IDatabaseResultCallbackErrorEnum) => Function, onResultFunction: (database: Database) => Function, onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IDatabaseResultCallbackErrorEnum): void;
        onResult(database: Database): void;
        onWarning(database: Database, warning: IDatabaseResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for ISecurity
     **/
    interface ISecurity extends IBaseSecurity {
        /**
         * Method Declarations for ISecurity
         */
        deleteSecureKeyValuePairs(keys: String[], publicAccessName: string, callback: ISecureKVResultCallback): any;
        getSecureKeyValuePairs(keys: String[], publicAccessName: string, callback: ISecureKVResultCallback): any;
        isDeviceModified(): boolean;
        setSecureKeyValuePairs(keyValues: SecureKeyPair[], publicAccessName: string, callback: ISecureKVResultCallback): any;
    }
    /**
     *  Service ISecurity implementation.
     */
    class SecurityBridge implements ISecurity {
        constructor();
        deleteSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecureKVResultCallback): void;
        getSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecureKVResultCallback): void;
        isDeviceModified(): boolean;
        setSecureKeyValuePairs(keyValues: SecureKeyPair[], publicAccessName: string, callback: ISecureKVResultCallback): void;
    }
    /**
     *   Interface definition for IOAuth
     **/
    interface IOAuth extends IBaseSecurity {
    }
    /**
     *   Interface definition for INFC
     **/
    interface INFC extends IBaseReader {
    }
    /**
     *   Interface definition for ICapabilities
     **/
    interface ICapabilities extends IBaseSystem {
        /**
         * Method Declarations for ICapabilities
         */
        hasButtonSupport(type: ICapabilitiesButtonEnum): boolean;
        hasCommunicationSupport(type: ICapabilitiesCommunicationEnum): boolean;
        hasDataSupport(type: ICapabilitiesDataEnum): boolean;
        hasMediaSupport(type: ICapabilitiesMediaEnum): boolean;
        hasNetSupport(type: ICapabilitiesNetEnum): boolean;
        hasNotificationSupport(type: ICapabilitiesNotificationEnum): boolean;
        hasSensorSupport(type: ICapabilitiesSensorEnum): boolean;
    }
    /**
     *  Enumerations for ICapabilities Button
     **/
    class ICapabilitiesButtonEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static HomeButton: ICapabilitiesButtonEnum;
        static BackButton: ICapabilitiesButtonEnum;
        static OptionButton: ICapabilitiesButtonEnum;
        static Unknown: ICapabilitiesButtonEnum;
    }
    /**
     *  Enumerations for ICapabilities Communication
     **/
    class ICapabilitiesCommunicationEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Calendar: ICapabilitiesCommunicationEnum;
        static Contact: ICapabilitiesCommunicationEnum;
        static Mail: ICapabilitiesCommunicationEnum;
        static Messaging: ICapabilitiesCommunicationEnum;
        static Telephony: ICapabilitiesCommunicationEnum;
        static Unknown: ICapabilitiesCommunicationEnum;
    }
    /**
     *  Enumerations for ICapabilities Data
     **/
    class ICapabilitiesDataEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Database: ICapabilitiesDataEnum;
        static File: ICapabilitiesDataEnum;
        static Cloud: ICapabilitiesDataEnum;
        static Unknown: ICapabilitiesDataEnum;
    }
    /**
     *  Enumerations for ICapabilities Media
     **/
    class ICapabilitiesMediaEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Audio_Playback: ICapabilitiesMediaEnum;
        static Audio_Recording: ICapabilitiesMediaEnum;
        static Camera: ICapabilitiesMediaEnum;
        static Video_Playback: ICapabilitiesMediaEnum;
        static Video_Recording: ICapabilitiesMediaEnum;
        static Unknown: ICapabilitiesMediaEnum;
    }
    /**
     *  Enumerations for ICapabilities Net
     **/
    class ICapabilitiesNetEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static GSM: ICapabilitiesNetEnum;
        static GPRS: ICapabilitiesNetEnum;
        static HSDPA: ICapabilitiesNetEnum;
        static LTE: ICapabilitiesNetEnum;
        static WIFI: ICapabilitiesNetEnum;
        static Ethernet: ICapabilitiesNetEnum;
        static Unknown: ICapabilitiesNetEnum;
    }
    /**
     *  Enumerations for ICapabilities Notification
     **/
    class ICapabilitiesNotificationEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Alarm: ICapabilitiesNotificationEnum;
        static LocalNotification: ICapabilitiesNotificationEnum;
        static RemoteNotification: ICapabilitiesNotificationEnum;
        static Vibration: ICapabilitiesNotificationEnum;
        static Unknown: ICapabilitiesNotificationEnum;
    }
    /**
     *  Enumerations for ICapabilities Sensor
     **/
    class ICapabilitiesSensorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Accelerometer: ICapabilitiesSensorEnum;
        static AmbientLight: ICapabilitiesSensorEnum;
        static Barometer: ICapabilitiesSensorEnum;
        static Geolocation: ICapabilitiesSensorEnum;
        static Gyroscope: ICapabilitiesSensorEnum;
        static Magnetometer: ICapabilitiesSensorEnum;
        static Proximity: ICapabilitiesSensorEnum;
        static Unknown: ICapabilitiesSensorEnum;
    }
    /**
     *  Service ICapabilities implementation.
     */
    class CapabilitiesBridge implements ICapabilities {
        constructor();
        hasButtonSupport(type: ICapabilitiesButtonEnum): boolean;
        hasCommunicationSupport(type: ICapabilitiesCommunicationEnum): boolean;
        hasDataSupport(type: ICapabilitiesDataEnum): boolean;
        hasMediaSupport(type: ICapabilitiesMediaEnum): boolean;
        hasNetSupport(type: ICapabilitiesNetEnum): boolean;
        hasNotificationSupport(type: ICapabilitiesNotificationEnum): boolean;
        hasSensorSupport(type: ICapabilitiesSensorEnum): boolean;
    }
    /**
     *   Interface definition for IAnalytics
     **/
    interface IAnalytics extends IBaseApplication {
    }
    /**
     *   Interface definition for IGeolocation
     **/
    interface IGeolocation extends IBaseSensor {
        /**
         * Method Declarations for IGeolocation
         */
        addGeolocationListener(listener: IGeolocationListener): any;
        removeGeolocationListener(listener: IGeolocationListener): any;
        removeGeolocationListeners(): any;
    }
    /**
     *  Service IGeolocation implementation.
     */
    class GeolocationBridge implements IGeolocation {
        constructor();
        addGeolocationListener(listener: IGeolocationListener): void;
        removeGeolocationListener(listener: IGeolocationListener): void;
        removeGeolocationListeners(): void;
    }
    /**
     *   Interface definition for IProximity
     **/
    interface IProximity extends IBaseSensor {
    }
    /**
     *   Interface definition for IWallet
     **/
    interface IWallet extends IBaseCommerce {
    }
    /**
     *   Interface definition for ITelephony
     **/
    interface ITelephony extends IBaseCommunication {
        /**
         * Method Declarations for ITelephony
         */
        call(number: string): ITelephonyStatusEnum;
    }
    /**
     *  Enumerations for ITelephony Status
     **/
    class ITelephonyStatusEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Dialing: ITelephonyStatusEnum;
        static Failed: ITelephonyStatusEnum;
        static Unknown: ITelephonyStatusEnum;
    }
    /**
     *  Service ITelephony implementation.
     */
    class TelephonyBridge implements ITelephony {
        constructor();
        call(number: string): ITelephonyStatusEnum;
    }
    /**
     *   Interface definition for IXML
     **/
    interface IXML extends IBaseData {
    }
    /**
     *   Interface definition for IImaging
     **/
    interface IImaging extends IBaseMedia {
    }
    /**
     *   Interface definition for IFacebook
     **/
    interface IFacebook extends IBaseSocial {
    }
    /**
     *   Interface definition for IMessaging
     **/
    interface IMessaging extends IBasePIM {
        /**
         * Method Declarations for IMessaging
         */
        sendSMS(number: string, text: string, callback: IMessagingCallback): any;
    }
    /**
     *  Service IMessaging implementation.
     */
    class MessagingBridge implements IMessaging {
        constructor();
        sendSMS(number: string, text: string, callback: IMessagingCallback): void;
    }
    /**
     *   Interface definition for IFilePath
     **/
    interface IFilePath extends IBaseData {
        /**
         * Method Declarations for IFilePath
         */
        endsWithPath(other: IFilePath): boolean;
        endsWith(other: string): boolean;
        equalPath(other: IFilePath): boolean;
        equals(other: string): boolean;
        getFileName(): IFilePath;
        getFileSystem(): IFileSystem;
        getNameAtIndex(index: number): string;
        getNameCount(): number;
        getParent(): IFilePath;
        getRoot(): IFilePath;
        isAbsolute(): boolean;
        normalize(): IFilePath;
        relativize(other: IFilePath): IFilePath;
        resolvePath(other: IFilePath): IFilePath;
        resolveSiblingPath(other: IFilePath): IFilePath;
        resolveSibling(other: string): IFilePath;
        resolve(other: string): IFilePath;
        startsWithPath(other: IFilePath): boolean;
        startsWith(other: string): boolean;
        toAbsolutePath(): IFilePath;
        toFile(): IFile;
        toString(): string;
    }
    /**
     *  Service IFilePath implementation.
     */
    class FilePathBridge implements IFilePath {
        constructor();
        endsWith(other: string): boolean;
        endsWithPath(other: IFilePath): boolean;
        equalPath(other: IFilePath): boolean;
        equals(other: string): boolean;
        getFileName(): IFilePath;
        getFileSystem(): IFileSystem;
        getNameAtIndex(index: number): string;
        getNameCount(): number;
        getParent(): IFilePath;
        getRoot(): IFilePath;
        isAbsolute(): boolean;
        normalize(): IFilePath;
        relativize(other: IFilePath): IFilePath;
        resolve(other: string): IFilePath;
        resolvePath(other: IFilePath): IFilePath;
        resolveSibling(other: string): IFilePath;
        resolveSiblingPath(other: IFilePath): IFilePath;
        startsWith(other: string): boolean;
        startsWithPath(other: IFilePath): boolean;
        toAbsolutePath(): IFilePath;
        toFile(): IFile;
        toString(): string;
    }
    /**
     *   Interface definition for IDesktop
     **/
    interface IDesktop extends IBaseUI {
    }
    /**
     *   Interface definition for ISettings
     **/
    interface ISettings extends IBaseApplication {
    }
    /**
     *   Interface definition for ITableResultCallback
     **/
    interface ITableResultCallback extends IBaseCallback {
        /**
         * Method Declarations for ITableResultCallback
         */
        onError(error: ITableResultCallbackErrorEnum): any;
        onResult(table: Table): any;
        onWarning(table: Table, warning: ITableResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for ITableResultCallback Error
     **/
    class ITableResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NoSpace: ITableResultCallbackErrorEnum;
        static ReadOnlyTable: ITableResultCallbackErrorEnum;
        static SqlException: ITableResultCallbackErrorEnum;
        static DatabaseNotFound: ITableResultCallbackErrorEnum;
        static NoTableFound: ITableResultCallbackErrorEnum;
        static Unknown: ITableResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for ITableResultCallback Warning
     **/
    class ITableResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static TableExists: ITableResultCallbackWarningEnum;
        static TableLocked: ITableResultCallbackWarningEnum;
        static NoResults: ITableResultCallbackWarningEnum;
        static Unknown: ITableResultCallbackWarningEnum;
    }
    /**
     *  Callback ITableResultCallback onError/onWarning/onResult handlers.
     */
    function handleITableResultCallbackError(id: number, error: ITableResultCallbackErrorEnum): void;
    function handleITableResultCallbackResult(id: number, table: Table): void;
    function handleITableResultCallbackWarning(id: number, table: Table, warning: ITableResultCallbackWarningEnum): void;
    /**
     *  Callback ITableResultCallback implementation.
     */
    class TableResultCallback implements ITableResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: ITableResultCallbackErrorEnum) => Function;
        onResultFunction: (table: Table) => Function;
        onWarningFunction: (table: Table, warning: ITableResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: ITableResultCallbackErrorEnum) => Function, onResultFunction: (table: Table) => Function, onWarningFunction: (table: Table, warning: ITableResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: ITableResultCallbackErrorEnum): void;
        onResult(table: Table): void;
        onWarning(table: Table, warning: ITableResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IGyroscope
     **/
    interface IGyroscope extends IBaseSensor {
    }
    /**
     *   Interface definition for ICamera
     **/
    interface ICamera extends IBaseMedia {
    }
    /**
     *   Interface definition for IMagnetometer
     **/
    interface IMagnetometer extends IBaseSensor {
    }
    /**
     *   Interface definition for IDisplay
     **/
    interface IDisplay extends IBaseSystem {
    }
    /**
     *   Interface definition for IFileListResultCallback
     **/
    interface IFileListResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IFileListResultCallback
         */
        onError(error: IFileListResultCallbackErrorEnum): any;
        onResult(files: IFile[]): any;
        onWarning(files: IFile[], warning: IFileListResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IFileListResultCallback Error
     **/
    class IFileListResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileListResultCallbackErrorEnum;
        static Unauthorized: IFileListResultCallbackErrorEnum;
        static Unknown: IFileListResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IFileListResultCallback Warning
     **/
    class IFileListResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialResult: IFileListResultCallbackWarningEnum;
        static Unknown: IFileListResultCallbackWarningEnum;
    }
    /**
     *  Callback IFileListResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileListResultCallbackError(id: number, error: IFileListResultCallbackErrorEnum): void;
    function handleIFileListResultCallbackResult(id: number, files: IFile[]): void;
    function handleIFileListResultCallbackWarning(id: number, files: IFile[], warning: IFileListResultCallbackWarningEnum): void;
    /**
     *  Callback IFileListResultCallback implementation.
     */
    class FileListResultCallback implements IFileListResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IFileListResultCallbackErrorEnum) => Function;
        onResultFunction: (files: IFile[]) => Function;
        onWarningFunction: (files: IFile[], warning: IFileListResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IFileListResultCallbackErrorEnum) => Function, onResultFunction: (files: IFile[]) => Function, onWarningFunction: (files: IFile[], warning: IFileListResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IFileListResultCallbackErrorEnum): void;
        onResult(files: IFile[]): void;
        onWarning(files: IFile[], warning: IFileListResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for ICalendar
     **/
    interface ICalendar extends IBasePIM {
    }
    /**
     *   Interface definition for IMap
     **/
    interface IMap extends IBaseUI {
    }
    /**
     *   Interface definition for IAccelerometer
     **/
    interface IAccelerometer extends IBaseSensor {
        /**
         * Method Declarations for IAccelerometer
         */
        addAccelerationListener(listener: IAccelerationListener): any;
        removeAccelerationListener(listener: IAccelerationListener): any;
        removeAccelerationListeners(): any;
    }
    /**
     *  Service IAccelerometer implementation.
     */
    class AccelerometerBridge implements IAccelerometer {
        constructor();
        addAccelerationListener(listener: IAccelerationListener): void;
        removeAccelerationListener(listener: IAccelerationListener): void;
        removeAccelerationListeners(): void;
    }
    /**
     *   Interface definition for IAlarm
     **/
    interface IAlarm extends IBaseNotification {
    }
    /**
     *   Interface definition for IOpenId
     **/
    interface IOpenId extends IBaseSecurity {
    }
    /**
     *   Interface definition for IAppResourceCallback
     **/
    interface IAppResourceCallback extends IBaseCallback {
        /**
         * Method Declarations for IAppResourceCallback
         */
        onError(resource: IAppResource, error: IAppResourceCallbackErrorEnum): any;
        onResult(resource: IAppResource): any;
        onWarning(resource: IAppResource, warning: IAppResourceCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IAppResourceCallback Error
     **/
    class IAppResourceCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotFound: IAppResourceCallbackErrorEnum;
        static NoPermission: IAppResourceCallbackErrorEnum;
        static Unknown: IAppResourceCallbackErrorEnum;
    }
    /**
     *  Enumerations for IAppResourceCallback Warning
     **/
    class IAppResourceCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static PartialContent: IAppResourceCallbackWarningEnum;
        static TooLarge: IAppResourceCallbackWarningEnum;
        static LinkedResource: IAppResourceCallbackWarningEnum;
        static Unknown: IAppResourceCallbackWarningEnum;
    }
    /**
     *   Interface definition for IGlobalization
     **/
    interface IGlobalization extends IBaseApplication {
        /**
         * Method Declarations for IGlobalization
         */
        getLocaleSupportedDescriptors(): Locale[];
        getResourceLiteral(key: string, locale: Locale): string;
        getResourceLiterals(locale: Locale): Dictionary<string>;
    }
    /**
     *  Service IGlobalization implementation.
     */
    class GlobalizationBridge implements IGlobalization {
        constructor();
        getLocaleSupportedDescriptors(): Locale[];
        getResourceLiteral(key: string, locale: Locale): string;
        getResourceLiterals(locale: Locale): Dictionary<string>;
    }
    /**
     *   Interface definition for IServiceResultCallback
     **/
    interface IServiceResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IServiceResultCallback
         */
        onError(error: IServiceResultCallbackErrorEnum): any;
        onResult(response: ServiceResponse): any;
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IServiceResultCallback Error
     **/
    class IServiceResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Forbidden: IServiceResultCallbackErrorEnum;
        static NotFound: IServiceResultCallbackErrorEnum;
        static MethodNotAllowed: IServiceResultCallbackErrorEnum;
        static NotAllowed: IServiceResultCallbackErrorEnum;
        static NotAuthenticated: IServiceResultCallbackErrorEnum;
        static TimeOut: IServiceResultCallbackErrorEnum;
        static NoResponse: IServiceResultCallbackErrorEnum;
        static ServerError: IServiceResultCallbackErrorEnum;
        static Unreachable: IServiceResultCallbackErrorEnum;
        static MalformedUrl: IServiceResultCallbackErrorEnum;
        static NotRegisteredService: IServiceResultCallbackErrorEnum;
        static Unknown: IServiceResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IServiceResultCallback Warning
     **/
    class IServiceResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static NotSecure: IServiceResultCallbackWarningEnum;
        static NotTrusted: IServiceResultCallbackWarningEnum;
        static Redirected: IServiceResultCallbackWarningEnum;
        static Wrong_Params: IServiceResultCallbackWarningEnum;
        static Unknown: IServiceResultCallbackWarningEnum;
    }
    /**
     *  Callback IServiceResultCallback onError/onWarning/onResult handlers.
     */
    function handleIServiceResultCallbackError(id: number, error: IServiceResultCallbackErrorEnum): void;
    function handleIServiceResultCallbackResult(id: number, response: ServiceResponse): void;
    function handleIServiceResultCallbackWarning(id: number, response: ServiceResponse, warning: IServiceResultCallbackWarningEnum): void;
    /**
     *  Callback IServiceResultCallback implementation.
     */
    class ServiceResultCallback implements IServiceResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IServiceResultCallbackErrorEnum) => Function;
        onResultFunction: (response: ServiceResponse) => Function;
        onWarningFunction: (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IServiceResultCallbackErrorEnum) => Function, onResultFunction: (response: ServiceResponse) => Function, onWarningFunction: (response: ServiceResponse, warning: IServiceResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IServiceResultCallbackErrorEnum): void;
        onResult(response: ServiceResponse): void;
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IFileDataResultCallback
     **/
    interface IFileDataResultCallback extends IBaseCallback {
        /**
         * Method Declarations for IFileDataResultCallback
         */
        onError(error: IFileDataResultCallbackErrorEnum): any;
        onResult(file: IFile, data: number[]): any;
        onWarning(file: IFile, warning: IFileDataResultCallbackWarningEnum): any;
    }
    /**
     *  Enumerations for IFileDataResultCallback Error
     **/
    class IFileDataResultCallbackErrorEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static InexistentFile: IFileDataResultCallbackErrorEnum;
        static InsufficientSpace: IFileDataResultCallbackErrorEnum;
        static Unauthorized: IFileDataResultCallbackErrorEnum;
        static Unknown: IFileDataResultCallbackErrorEnum;
    }
    /**
     *  Enumerations for IFileDataResultCallback Warning
     **/
    class IFileDataResultCallbackWarningEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static ExceedMaximumSize: IFileDataResultCallbackWarningEnum;
        static Unknown: IFileDataResultCallbackWarningEnum;
    }
    /**
     *  Callback IFileDataResultCallback onError/onWarning/onResult handlers.
     */
    function handleIFileDataResultCallbackError(id: number, error: IFileDataResultCallbackErrorEnum): void;
    function handleIFileDataResultCallbackResult(id: number, file: IFile, data: number[]): void;
    function handleIFileDataResultCallbackWarning(id: number, file: IFile, warning: IFileDataResultCallbackWarningEnum): void;
    /**
     *  Callback IFileDataResultCallback implementation.
     */
    class FileDataResultCallback implements IFileDataResultCallback {
        description: string;
        id: number;
        onErrorFunction: (error: IFileDataResultCallbackErrorEnum) => Function;
        onResultFunction: (file: IFile, data: number[]) => Function;
        onWarningFunction: (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function;
        constructor(onErrorFunction: (error: IFileDataResultCallbackErrorEnum) => Function, onResultFunction: (file: IFile, data: number[]) => Function, onWarningFunction: (file: IFile, warning: IFileDataResultCallbackWarningEnum) => Function);
        toString(): string;
        getId(): number;
        onError(error: IFileDataResultCallbackErrorEnum): void;
        onResult(file: IFile, data: number[]): void;
        onWarning(file: IFile, warning: IFileDataResultCallbackWarningEnum): void;
    }
    /**
     *   Interface definition for IVideo
     **/
    interface IVideo extends IBaseMedia {
        /**
         * Method Declarations for IVideo
         */
        playStream(url: string): any;
    }
    /**
     *  Service IVideo implementation.
     */
    class VideoBridge implements IVideo {
        constructor();
        playStream(url: string): void;
    }
    /**
     *   Interface definition for ITimer
     **/
    interface ITimer extends IBaseUtil {
    }
    /**
     *   Interface definition for IService
     **/
    interface IService extends IBaseCommunication {
        /**
         * Method Declarations for IService
         */
        getService(serviceName: string): Service;
        invokeService(serviceRequest: ServiceRequest, service: Service, callback: IServiceResultCallback): any;
        isRegistered(serviceName: string): boolean;
        isRegistered(service: Service): boolean;
        registerService(service: Service): any;
        unregisterServices(): any;
        unregisterService(service: Service): any;
    }
    /**
     *   Interface definition for IFile
     **/
    interface IFile extends IFilePath {
        /**
         * Method Declarations for IFile
         */
        canRead(): boolean;
        canWrite(): boolean;
        createWithPath(path: string, name: string, callback: IFileResultCallback): any;
        create(name: string, callback: IFileResultCallback): any;
        delete(cascade: boolean): boolean;
        exists(): boolean;
        getContent(callback: IFileDataResultCallback): any;
        getDateCreated(): number;
        getDateModified(): number;
        getName(): string;
        getPath(): string;
        getSize(): number;
        isDirectory(): boolean;
        listFilesForRegex(regex: string, callback: IFileListResultCallback): any;
        listFiles(callback: IFileListResultCallback): any;
        mkDir(recursive: boolean): boolean;
        move(newFile: IFile, createPath: boolean, callback: IFileResultCallback, overwrite: boolean): any;
        setContent(content: number[], callback: IFileDataResultCallback): any;
        toPath(): IFilePath;
    }
    /**
     *  Service IFile implementation.
     */
    class FileBridge implements IFile {
        constructor();
        canRead(): boolean;
        canWrite(): boolean;
        create(name: string, callback: IFileResultCallback): void;
        createWithPath(path: string, name: string, callback: IFileResultCallback): void;
        delete(cascade: boolean): boolean;
        endsWith(other: string): boolean;
        endsWithPath(other: IFilePath): boolean;
        equalPath(other: IFilePath): boolean;
        equals(other: string): boolean;
        exists(): boolean;
        getContent(callback: IFileDataResultCallback): void;
        getDateCreated(): number;
        getDateModified(): number;
        getFileName(): IFilePath;
        getFileSystem(): IFileSystem;
        getName(): string;
        getNameAtIndex(index: number): string;
        getNameCount(): number;
        getParent(): IFilePath;
        getPath(): string;
        getRoot(): IFilePath;
        getSize(): number;
        isAbsolute(): boolean;
        isDirectory(): boolean;
        listFiles(callback: IFileListResultCallback): void;
        listFilesForRegex(regex: string, callback: IFileListResultCallback): void;
        mkDir(recursive: boolean): boolean;
        move(newFile: IFile, createPath: boolean, callback: IFileResultCallback, overwrite: boolean): void;
        normalize(): IFilePath;
        relativize(other: IFilePath): IFilePath;
        resolve(other: string): IFilePath;
        resolvePath(other: IFilePath): IFilePath;
        resolveSibling(other: string): IFilePath;
        resolveSiblingPath(other: IFilePath): IFilePath;
        setContent(content: number[], callback: IFileDataResultCallback): void;
        startsWith(other: string): boolean;
        startsWithPath(other: IFilePath): boolean;
        toAbsolutePath(): IFilePath;
        toFile(): IFile;
        toPath(): IFilePath;
        toString(): string;
    }
    /**
     *   Class implementation for ContactEmail
     **/
    class ContactEmail {
        /** Field Declarations **/
        email: string;
        primary: boolean;
        type: ContactEmailEmailTypeEnum;
        /** Initialization **/
        constructor(type: ContactEmailEmailTypeEnum, primary: boolean, email: string);
        /**
         * Method Declarations for ContactEmail
         */
        getEmail(): string;
        getType(): ContactEmailEmailTypeEnum;
        isPrimary(): boolean;
        setEmail(email: string): void;
        setPrimary(primary: boolean): void;
        setType(type: ContactEmailEmailTypeEnum): void;
    }
    /**
     *  Enumerations for ContactEmail EmailType
     **/
    class ContactEmailEmailTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Personal: ContactEmailEmailTypeEnum;
        static Work: ContactEmailEmailTypeEnum;
        static Other: ContactEmailEmailTypeEnum;
        static Unknown: ContactEmailEmailTypeEnum;
    }
    /**
     *   Class implementation for Header
     **/
    class Header {
        /** Field Declarations **/
        data: string;
        name: string;
        /** Initialization **/
        constructor(name: string, data: string);
        /**
         * Method Declarations for Header
         */
        getData(): string;
        getName(): string;
        setData(data: string): void;
        setName(name: string): void;
    }
    /**
     *   Class implementation for ServiceResponse
     **/
    class ServiceResponse {
        /** Field Declarations **/
        content: string;
        contentBinary: number[];
        contentBinaryLength: number;
        contentEncoding: string;
        contentLength: string;
        contentType: string;
        headers: Header[];
        session: ISession;
        /** Initialization **/
        constructor(content: string, contentType: string, contentLength: string, contentBinary: number[], contentBinaryLength: number, headers: Header[], session: ISession, contentEncoding: string);
        /**
         * Method Declarations for ServiceResponse
         */
        getContent(): string;
        getContentBinary(): number[];
        getContentBinaryLength(): number;
        getContentEncoding(): string;
        getContentLength(): string;
        getContentType(): string;
        getHeaders(): Header[];
        getSession(): ISession;
        setContentBinaryLength(contentBinaryLength: number): void;
        setContentBinary(contentBinary: number[]): void;
        setContentEncoding(contentEncoding: string): void;
        setContentLength(contentLength: string): void;
        setContentType(contentType: string): void;
        setContent(content: string): void;
        setHeaders(headers: Header[]): void;
        setSession(session: ISession): void;
    }
    /**
     *   Class implementation for OSInfo
     **/
    class OSInfo {
        /** Field Declarations **/
        name: string;
        vendor: string;
        version: string;
        /** Initialization **/
        constructor(name: string, version: string, vendor: string);
        /**
         * Method Declarations for OSInfo
         */
        getName(): string;
        getVendor(): string;
        getVersion(): string;
    }
    /**
     *   Class implementation for Column
     **/
    class Column {
        /** Field Declarations **/
        name: string;
        /** Initialization **/
        constructor(name: string);
        /**
         * Method Declarations for Column
         */
        getName(): string;
        setName(name: string): void;
    }
    /**
     *   Class implementation for ServiceRequest
     **/
    class ServiceRequest {
        /** Field Declarations **/
        content: string;
        contentEncoding: string;
        contentLength: number;
        contentType: string;
        headers: Header[];
        method: string;
        protocolVersion: ServiceRequestProtocolVersionEnum;
        rawContent: number[];
        session: ISession;
        /** Initialization **/
        constructor(content: string, contentType: string, contentLength: number, rawContent: number[], headers: Header[], method: string, protocolVersion: ServiceRequestProtocolVersionEnum, session: ISession, contentEncoding: string);
        /**
         * Method Declarations for ServiceRequest
         */
        getContent(): string;
        getContentEncoding(): string;
        getContentLength(): number;
        getContentType(): string;
        getHeaders(): Header[];
        getMethod(): string;
        getProtocolVersion(): ServiceRequestProtocolVersionEnum;
        getRawContent(): number[];
        getSession(): ISession;
        setContentEncoding(contentEncoding: string): void;
        setContentLength(contentLength: number): void;
        setContentType(contentType: string): void;
        setContent(content: string): void;
        setHeaders(headers: Header[]): void;
        setMethod(method: string): void;
        setProtocolVersion(protocolVersion: ServiceRequestProtocolVersionEnum): void;
        setRawContent(rawContent: number[]): void;
        setSession(session: ISession): void;
    }
    /**
     *  Enumerations for ServiceRequest ProtocolVersion
     **/
    class ServiceRequestProtocolVersionEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static HTTP_PROTOCOL_VERSION_1_0: ServiceRequestProtocolVersionEnum;
        static HTTP_PROTOCOL_VERSION_1_1: ServiceRequestProtocolVersionEnum;
        static Unknown: ServiceRequestProtocolVersionEnum;
    }
    /**
     *   Class implementation for Database
     **/
    class Database {
        /** Field Declarations **/
        compress: boolean;
        name: string;
        /** Initialization **/
        constructor(name: string, compress: boolean);
        /**
         * Method Declarations for Database
         */
        getName(): string;
        isCompress(): boolean;
        setCompress(compress: boolean): void;
        setName(name: string): void;
    }
    /**
     *   Class implementation for Cookie
     **/
    class Cookie {
        /** Field Declarations **/
        creation: number;
        data: string;
        domain: string;
        expiry: number;
        name: string;
        path: string;
        scheme: string;
        secure: boolean;
        /** Initialization **/
        constructor(name: string, data: string);
        /**
         * Method Declarations for Cookie
         */
        getCreation(): number;
        getData(): string;
        getDomain(): string;
        getExpiry(): number;
        getName(): string;
        getPath(): string;
        getScheme(): string;
        isSecure(): boolean;
        setData(data: string): void;
        setDomain(domain: string): void;
        setExpiry(expiry: number): void;
        setName(name: string): void;
        setPath(path: string): void;
        setScheme(scheme: string): void;
        setSecure(secure: boolean): void;
    }
    /**
     *   Class implementation for Locale
     **/
    class Locale {
        /** Field Declarations **/
        country: string;
        language: string;
        description: string;
        /** Initialization **/
        constructor(language: string, country: string);
        /**
         * Method Declarations for Locale
         */
        getCountry(): string;
        getLanguage(): string;
        setCountry(country: string): void;
        setLanguage(language: string): void;
        toString(): string;
    }
    /**
     *   Class implementation for ContactWebsite
     **/
    class ContactWebsite {
        /** Field Declarations **/
        url: string;
        /** Initialization **/
        constructor(url: string);
        /**
         * Method Declarations for ContactWebsite
         */
        getUrl(): string;
        setUrl(url: string): void;
    }
    /**
     *   Class implementation for Row
     **/
    class Row {
        /** Field Declarations **/
        values: any[];
        /** Initialization **/
        constructor(values: any[]);
        /**
         * Method Declarations for Row
         */
        getValues(): any[];
        setValues(values: any[]): void;
    }
    /**
     *   Class implementation for ContactPersonalInfo
     **/
    class ContactPersonalInfo {
        /** Field Declarations **/
        lastName: string;
        middleName: string;
        name: string;
        title: ContactPersonalInfoTitleEnum;
        /** Initialization **/
        constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitleEnum);
        /**
         * Method Declarations for ContactPersonalInfo
         */
        getLastName(): string;
        getMiddleName(): string;
        getName(): string;
        getTitle(): ContactPersonalInfoTitleEnum;
        setLastName(lastName: string): void;
        setMiddleName(middleName: string): void;
        setName(name: string): void;
        setTitle(title: ContactPersonalInfoTitleEnum): void;
    }
    /**
     *  Enumerations for ContactPersonalInfo Title
     **/
    class ContactPersonalInfoTitleEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mr: ContactPersonalInfoTitleEnum;
        static Mrs: ContactPersonalInfoTitleEnum;
        static Ms: ContactPersonalInfoTitleEnum;
        static Dr: ContactPersonalInfoTitleEnum;
        static Unknown: ContactPersonalInfoTitleEnum;
    }
    /**
     *   Class implementation for EmailAddress
     **/
    class EmailAddress {
        /** Field Declarations **/
        address: string;
        /** Initialization **/
        constructor(address: string);
        /**
         * Method Declarations for EmailAddress
         */
        getAddress(): string;
        setAddress(address: string): void;
    }
    /**
     *   Class implementation for ContactTag
     **/
    class ContactTag {
        /** Field Declarations **/
        dataValue: string;
        name: string;
        /** Initialization **/
        constructor(name: string, dataValue: string);
        /**
         * Method Declarations for ContactTag
         */
        getDataValue(): string;
        getName(): string;
        setDataValue(dataValue: string): void;
        setName(name: string): void;
    }
    /**
     *   Class implementation for Endpoint
     **/
    class Endpoint {
        /** Field Declarations **/
        host: string;
        path: string;
        port: number;
        proxy: string;
        scheme: string;
        /** Initialization **/
        constructor(host: string, path: string, port: number, proxy: string, scheme: string);
        /**
         * Method Declarations for Endpoint
         */
        getHost(): string;
        getPath(): string;
        getPort(): number;
        getProxy(): string;
        getScheme(): string;
        setHost(host: string): void;
        setPath(path: string): void;
        setPort(port: number): void;
        setProxy(proxy: string): void;
        setScheme(scheme: string): void;
    }
    /**
     *   Class implementation for Geolocation
     **/
    class Geolocation {
        /** Field Declarations **/
        altitude: number;
        latitude: number;
        longitude: number;
        xDoP: number;
        yDoP: number;
        /** Initialization **/
        constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number);
        /**
         * Method Declarations for Geolocation
         */
        getAltitude(): number;
        getLatitude(): number;
        getLongitude(): number;
        getXDoP(): number;
        getYDoP(): number;
        setAltitude(altitude: number): void;
        setLatitude(latitude: number): void;
        setLongitude(longitude: number): void;
    }
    /**
     *   Class implementation for ContactUid
     **/
    class ContactUid {
        /** Field Declarations **/
        contactId: string;
        /** Initialization **/
        constructor(contactId: string);
        /**
         * Method Declarations for ContactUid
         */
        getContactId(): string;
        setContactId(contactId: string): void;
    }
    /**
     *   Class implementation for Email
     **/
    class Email {
        /** Field Declarations **/
        attachmentData: AttachmentData[];
        bccRecipients: EmailAddress[];
        ccRecipients: EmailAddress[];
        messageBody: string;
        messageBodyMimeType: string;
        subject: string;
        toRecipients: EmailAddress[];
        /** Initialization **/
        constructor(toRecipients: EmailAddress[], subject: string, messageBody: string);
        /**
         * Method Declarations for Email
         */
        getAttachmentData(): AttachmentData[];
        getBccRecipients(): EmailAddress[];
        getCcRecipients(): EmailAddress[];
        getMessageBody(): string;
        getMessageBodyMimeType(): string;
        getSubject(): string;
        getToRecipients(): EmailAddress[];
        setAttachmentData(attachmentData: AttachmentData[]): void;
        setBccRecipients(bccRecipients: EmailAddress[]): void;
        setCcRecipients(ccRecipients: EmailAddress[]): void;
        setMessageBodyMimeType(messageBodyMimeType: string): void;
        setMessageBody(messageBody: string): void;
        setSubject(subject: string): void;
        setToRecipients(toRecipients: EmailAddress[]): void;
    }
    /**
     *   Class implementation for AttachmentData
     **/
    class AttachmentData {
        /** Field Declarations **/
        data: number[];
        dataSize: number;
        fileName: string;
        mimeType: string;
        referenceUrl: string;
        /** Initialization **/
        constructor(data: number[], dataSize: number, fileName: string, mimeType: string, referenceUrl: string);
        /**
         * Method Declarations for AttachmentData
         */
        getData(): number[];
        getDataSize(): number;
        getFileName(): string;
        getMimeType(): string;
        getReferenceUrl(): string;
        setDataSize(dataSize: number): void;
        setData(data: number[]): void;
        setFileName(fileName: string): void;
        setMimeType(mimeType: string): void;
        setReferenceUrl(referenceUrl: string): void;
    }
    /**
     *   Class implementation for ContactSocial
     **/
    class ContactSocial {
        /** Field Declarations **/
        profileUrl: string;
        socialNetwork: ContactSocialSocialNetworkEnum;
        /** Initialization **/
        constructor(socialNetwork: ContactSocialSocialNetworkEnum, profileUrl: string);
        /**
         * Method Declarations for ContactSocial
         */
        getProfileUrl(): string;
        getSocialNetwork(): ContactSocialSocialNetworkEnum;
        setProfileUrl(profileUrl: string): void;
        setSocialNetwork(socialNetwork: ContactSocialSocialNetworkEnum): void;
    }
    /**
     *  Enumerations for ContactSocial SocialNetwork
     **/
    class ContactSocialSocialNetworkEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Twitter: ContactSocialSocialNetworkEnum;
        static Facebook: ContactSocialSocialNetworkEnum;
        static GooglePlus: ContactSocialSocialNetworkEnum;
        static LinkedIn: ContactSocialSocialNetworkEnum;
        static Flickr: ContactSocialSocialNetworkEnum;
        static Unknown: ContactSocialSocialNetworkEnum;
    }
    /**
     *   Class implementation for ContactPhone
     **/
    class ContactPhone {
        /** Field Declarations **/
        phone: string;
        phoneType: ContactPhonePhoneTypeEnum;
        /** Initialization **/
        constructor(phone: string, phoneType: ContactPhonePhoneTypeEnum);
        /**
         * Method Declarations for ContactPhone
         */
        getPhone(): string;
        getPhoneType(): ContactPhonePhoneTypeEnum;
        setPhoneType(phoneType: ContactPhonePhoneTypeEnum): void;
        setPhone(phone: string): void;
    }
    /**
     *  Enumerations for ContactPhone PhoneType
     **/
    class ContactPhonePhoneTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Mobile: ContactPhonePhoneTypeEnum;
        static Work: ContactPhonePhoneTypeEnum;
        static Home: ContactPhonePhoneTypeEnum;
        static Main: ContactPhonePhoneTypeEnum;
        static HomeFax: ContactPhonePhoneTypeEnum;
        static WorkFax: ContactPhonePhoneTypeEnum;
        static Other: ContactPhonePhoneTypeEnum;
        static Unknown: ContactPhonePhoneTypeEnum;
    }
    /**
     *   Class implementation for SecureKeyPair
     **/
    class SecureKeyPair {
        /** Field Declarations **/
        secureData: string;
        secureKey: string;
        /** Initialization **/
        constructor(secureKey: string, secureData: string);
        /**
         * Method Declarations for SecureKeyPair
         */
        getSecureData(): string;
        getSecureKey(): string;
        setSecureData(secureData: string): void;
        setSecureKey(secureKey: string): void;
    }
    /**
     *   Class implementation for Table
     **/
    class Table {
        /** Field Declarations **/
        columnCount: number;
        columns: Column[];
        name: string;
        rowCount: number;
        rows: Row[];
        /** Initialization **/
        constructor(name: string);
        /**
         * Method Declarations for Table
         */
        getColumnCount(): number;
        getColumns(): Column[];
        getName(): string;
        getRowCount(): number;
        getRows(): Row[];
        setColumnCount(columnCount: number): void;
        setColumns(columns: Column[]): void;
        setName(name: string): void;
        setRowCount(rowCount: number): void;
        setRows(rows: Row[]): void;
    }
    /**
     *   Class implementation for ContactProfessionalInfo
     **/
    class ContactProfessionalInfo {
        /** Field Declarations **/
        company: string;
        jobDescription: string;
        jobTitle: string;
        /** Initialization **/
        constructor(jobTitle: string, jobDescription: string, company: string);
        /**
         * Method Declarations for ContactProfessionalInfo
         */
        getCompany(): string;
        getJobDescription(): string;
        getJobTitle(): string;
        setCompany(company: string): void;
        setJobDescription(jobDescription: string): void;
        setJobTitle(jobTitle: string): void;
    }
    /**
     *   Class implementation for Acceleration
     **/
    class Acceleration {
        /** Field Declarations **/
        timeStamp: number;
        x: number;
        y: number;
        z: number;
        /** Initialization **/
        constructor(x: number, y: number, z: number, timeStamp: number);
        /**
         * Method Declarations for Acceleration
         */
        getX(): number;
        getY(): number;
        getZ(): number;
        setTimeStamp(timeStamp: number): void;
        setX(x: number): void;
        setY(y: number): void;
        setZ(z: number): void;
    }
    /**
     *   Class implementation for DeviceInfo
     **/
    class DeviceInfo {
        /** Field Declarations **/
        model: string;
        name: string;
        uuid: string;
        vendor: string;
        /** Initialization **/
        constructor(name: string, model: string, vendor: string, uuid: string);
        /**
         * Method Declarations for DeviceInfo
         */
        getModel(): string;
        getName(): string;
        getUuid(): string;
        getVendor(): string;
    }
    /**
     *   Class implementation for ContactAddress
     **/
    class ContactAddress {
        /** Field Declarations **/
        address: string;
        type: ContactAddressAddressTypeEnum;
        /** Initialization **/
        constructor(address: string, type: ContactAddressAddressTypeEnum);
        /**
         * Method Declarations for ContactAddress
         */
        getAddress(): string;
        getType(): ContactAddressAddressTypeEnum;
        setAddress(address: string): void;
        setType(type: ContactAddressAddressTypeEnum): void;
    }
    /**
     *  Enumerations for ContactAddress AddressType
     **/
    class ContactAddressAddressTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Home: ContactAddressAddressTypeEnum;
        static Work: ContactAddressAddressTypeEnum;
        static Other: ContactAddressAddressTypeEnum;
        static Unknown: ContactAddressAddressTypeEnum;
    }
    /**
     *   Class implementation for Contact
     **/
    class Contact extends ContactUid {
        /** Field Declarations **/
        contactAddresses: ContactAddress[];
        contactEmails: ContactEmail[];
        contactPhones: ContactPhone[];
        contactSocials: ContactSocial[];
        contactTags: ContactTag[];
        contactWebsites: ContactWebsite[];
        personalInfo: ContactPersonalInfo;
        professionalInfo: ContactProfessionalInfo;
        /** Initialization **/
        constructor(contactId: string);
        /**
         * Method Declarations for Contact
         */
        getContactAddresses(): ContactAddress[];
        getContactEmails(): ContactEmail[];
        getContactPhones(): ContactPhone[];
        getContactSocials(): ContactSocial[];
        getContactTags(): ContactTag[];
        getContactWebsites(): ContactWebsite[];
        getPersonalInfo(): ContactPersonalInfo;
        getProfessionalInfo(): ContactProfessionalInfo;
        setContactAddresses(contactAddresses: ContactAddress[]): void;
        setContactEmails(contactEmails: ContactEmail[]): void;
        setContactPhones(contactPhones: ContactPhone[]): void;
        setContactSocials(contactSocials: ContactSocial[]): void;
        setContactTags(contactTags: ContactTag[]): void;
        setContactWebsites(contactWebsites: ContactWebsite[]): void;
        setPersonalInfo(personalInfo: ContactPersonalInfo): void;
        setProfessionalInfo(professionalInfo: ContactProfessionalInfo): void;
    }
    /**
     *   Class implementation for Button
     **/
    class Button {
        /** Field Declarations **/
        type: ButtonButtonEnum;
        /** Initialization **/
        constructor(type: ButtonButtonEnum);
        /**
         * Method Declarations for Button
         */
        getType(): ButtonButtonEnum;
    }
    /**
     *  Enumerations for Button Button
     **/
    class ButtonButtonEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static HomeButton: ButtonButtonEnum;
        static BackButton: ButtonButtonEnum;
        static OptionButton: ButtonButtonEnum;
        static Unknown: ButtonButtonEnum;
    }
    /**
     *   Class implementation for Lifecycle
     **/
    class Lifecycle {
        /** Field Declarations **/
        state: LifecycleStateEnum;
        /** Initialization **/
        constructor(state: LifecycleStateEnum);
        /**
         * Method Declarations for Lifecycle
         */
        getState(): LifecycleStateEnum;
        setState(state: LifecycleStateEnum): void;
    }
    /**
     *  Enumerations for Lifecycle State
     **/
    class LifecycleStateEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static Starting: LifecycleStateEnum;
        static Started: LifecycleStateEnum;
        static Running: LifecycleStateEnum;
        static Paused: LifecycleStateEnum;
        static PausedIdle: LifecycleStateEnum;
        static PausedRun: LifecycleStateEnum;
        static Resuming: LifecycleStateEnum;
        static Stopping: LifecycleStateEnum;
        static Unknown: LifecycleStateEnum;
    }
    /**
     *   Class implementation for Service
     **/
    class Service {
        /** Field Declarations **/
        endpoint: Endpoint;
        method: ServiceServiceMethodEnum;
        name: string;
        type: ServiceServiceTypeEnum;
        /** Initialization **/
        constructor(endpoint: Endpoint, name: string, method: ServiceServiceMethodEnum, type: ServiceServiceTypeEnum);
        /**
         * Method Declarations for Service
         */
        getEndpoint(): Endpoint;
        getMethod(): ServiceServiceMethodEnum;
        getName(): string;
        getType(): ServiceServiceTypeEnum;
        setEndpoint(endpoint: Endpoint): void;
        setMethod(method: ServiceServiceMethodEnum): void;
        setName(name: string): void;
        setType(type: ServiceServiceTypeEnum): void;
    }
    /**
     *  Enumerations for Service ServiceMethod
     **/
    class ServiceServiceMethodEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static POST: ServiceServiceMethodEnum;
        static GET: ServiceServiceMethodEnum;
        static Unknown: ServiceServiceMethodEnum;
    }
    /**
     *  Enumerations for Service ServiceType
     **/
    class ServiceServiceTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static SERVICETYPE_AMF_SERIALIZATION: ServiceServiceTypeEnum;
        static SERVICETYPE_GWT_RPC: ServiceServiceTypeEnum;
        static SERVICETYPE_OCTET_BINARY: ServiceServiceTypeEnum;
        static SERVICETYPE_REMOTING_SERIALIZATION: ServiceServiceTypeEnum;
        static SERVICETYPE_REST_JSON: ServiceServiceTypeEnum;
        static SERVICETYPE_REST_XML: ServiceServiceTypeEnum;
        static SERVICETYPE_SOAP_JSON: ServiceServiceTypeEnum;
        static SERVICETYPE_SOAP_XML: ServiceServiceTypeEnum;
        static SERVICETYPE_XMLRPC_JSON: ServiceServiceTypeEnum;
        static SERVICETYPE_XMLRPC_XML: ServiceServiceTypeEnum;
        static Unknown: ServiceServiceTypeEnum;
        static getClassDescription(): string;
    }
    class ReflectionStereotypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static TypeModule: ReflectionStereotypeEnum;
        static TypeCategory: ReflectionStereotypeEnum;
        static TypeClass: ReflectionStereotypeEnum;
        static TypeFunction: ReflectionStereotypeEnum;
        static TypeObject: ReflectionStereotypeEnum;
        static TypeDescription: ReflectionStereotypeEnum;
    }
    class ReflectionTypeEnum {
        value: string;
        constructor(value: string);
        toString(): string;
        static TypeString: ReflectionStereotypeEnum;
        static TypeNumber: ReflectionStereotypeEnum;
        static TypeObject: ReflectionStereotypeEnum;
        static TypeArray: ReflectionStereotypeEnum;
    }
    interface IReflection {
        name: string;
        description: string;
        stereotype: ReflectionStereotypeEnum;
        getName(): string;
        getStereotype(): ReflectionStereotypeEnum;
        getDescription(): string;
    }
    class Reflection implements IReflection {
        name: string;
        description: string;
        stereotype: ReflectionStereotypeEnum;
        constructor(name: string, description: string, stereotype: ReflectionStereotypeEnum);
        getName(): string;
        getStereotype(): ReflectionStereotypeEnum;
        getDescription(): string;
    }
    class ReflectionModule extends Reflection {
        categories: ReflectionCategory[];
        constructor(name: string, description: string, categories: ReflectionCategory[]);
        getCategories(): ReflectionCategory[];
        getClasses(): ReflectionClass[];
    }
    class ReflectionCategory extends Reflection {
        classes: ReflectionClass[];
        constructor(name: string, description: string, classes: ReflectionClass[]);
        getClasses(): ReflectionClass[];
    }
    class ReflectionClass extends Reflection {
        functions: ReflectionFunction[];
        constructor(name: string, description: string, functions: ReflectionFunction[]);
        getFunctions(): ReflectionFunction[];
    }
    class ReflectionFunction extends Reflection {
        parameters: ReflectionObject[];
        returnType: ReflectionObject;
        constructor(name: string, description: string, parameters: ReflectionObject[], returnType: ReflectionObject);
        getParameters(): ReflectionObject[];
        getReturnType(): ReflectionObject;
    }
    class ReflectionObject extends Reflection {
        type: string;
        componentType: ReflectionObject;
        fields: ReflectionObject[];
        primitive: boolean;
        _array: boolean;
        _void: boolean;
        constructor(name: string, description: string, type: string, fields: ReflectionObject[]);
        getType(): string;
        getComponentType(): ReflectionObject;
        isPrimitive(): boolean;
        isArray(): boolean;
        isVoid(): boolean;
    }
}
declare var arrayCategory: Adaptive.ReflectionCategory[];
