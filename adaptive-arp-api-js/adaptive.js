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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Adaptive;
(function (Adaptive) {
    var IMessagingCallbackErrorEnum = (function () {
        function IMessagingCallbackErrorEnum(value) {
            this.value = value;
        }
        IMessagingCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackErrorEnum.SIMNotPresent = new IMessagingCallbackErrorEnum("SIMNotPresent");
        IMessagingCallbackErrorEnum.EmailAccountNotFound = new IMessagingCallbackErrorEnum("EmailAccountNotFound");
        IMessagingCallbackErrorEnum.NotSent = new IMessagingCallbackErrorEnum("NotSent");
        IMessagingCallbackErrorEnum.WrongParams = new IMessagingCallbackErrorEnum("WrongParams");
        IMessagingCallbackErrorEnum.NotSupported = new IMessagingCallbackErrorEnum("NotSupported");
        IMessagingCallbackErrorEnum.Unknown = new IMessagingCallbackErrorEnum("Unknown");
        return IMessagingCallbackErrorEnum;
    })();
    Adaptive.IMessagingCallbackErrorEnum = IMessagingCallbackErrorEnum;
    var IMessagingCallbackWarningEnum = (function () {
        function IMessagingCallbackWarningEnum(value) {
            this.value = value;
        }
        IMessagingCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IMessagingCallbackWarningEnum.UnableToSentAll = new IMessagingCallbackWarningEnum("UnableToSentAll");
        IMessagingCallbackWarningEnum.UnableToFetchAttachment = new IMessagingCallbackWarningEnum("UnableToFetchAttachment");
        IMessagingCallbackWarningEnum.Unknown = new IMessagingCallbackWarningEnum("Unknown");
        return IMessagingCallbackWarningEnum;
    })();
    Adaptive.IMessagingCallbackWarningEnum = IMessagingCallbackWarningEnum;
    var IContactPhotoResultCallbackErrorEnum = (function () {
        function IContactPhotoResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackErrorEnum.NoPermission = new IContactPhotoResultCallbackErrorEnum("NoPermission");
        IContactPhotoResultCallbackErrorEnum.Wrong_Params = new IContactPhotoResultCallbackErrorEnum("Wrong_Params");
        IContactPhotoResultCallbackErrorEnum.No_Photo = new IContactPhotoResultCallbackErrorEnum("No_Photo");
        IContactPhotoResultCallbackErrorEnum.Unknown = new IContactPhotoResultCallbackErrorEnum("Unknown");
        return IContactPhotoResultCallbackErrorEnum;
    })();
    Adaptive.IContactPhotoResultCallbackErrorEnum = IContactPhotoResultCallbackErrorEnum;
    var IContactPhotoResultCallbackWarningEnum = (function () {
        function IContactPhotoResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IContactPhotoResultCallbackWarningEnum.LimitExceeded = new IContactPhotoResultCallbackWarningEnum("LimitExceeded");
        IContactPhotoResultCallbackWarningEnum.No_Matches = new IContactPhotoResultCallbackWarningEnum("No_Matches");
        IContactPhotoResultCallbackWarningEnum.Unknown = new IContactPhotoResultCallbackWarningEnum("Unknown");
        return IContactPhotoResultCallbackWarningEnum;
    })();
    Adaptive.IContactPhotoResultCallbackWarningEnum = IContactPhotoResultCallbackWarningEnum;
    var IFileResultCallbackErrorEnum = (function () {
        function IFileResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackErrorEnum.FileExists = new IFileResultCallbackErrorEnum("FileExists");
        IFileResultCallbackErrorEnum.InsufficientSpace = new IFileResultCallbackErrorEnum("InsufficientSpace");
        IFileResultCallbackErrorEnum.Unauthorized = new IFileResultCallbackErrorEnum("Unauthorized");
        IFileResultCallbackErrorEnum.Unknown = new IFileResultCallbackErrorEnum("Unknown");
        return IFileResultCallbackErrorEnum;
    })();
    Adaptive.IFileResultCallbackErrorEnum = IFileResultCallbackErrorEnum;
    var IFileResultCallbackWarningEnum = (function () {
        function IFileResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileResultCallbackWarningEnum.SourceNotDeleted = new IFileResultCallbackWarningEnum("SourceNotDeleted");
        IFileResultCallbackWarningEnum.RootDirectory = new IFileResultCallbackWarningEnum("RootDirectory");
        IFileResultCallbackWarningEnum.Unknown = new IFileResultCallbackWarningEnum("Unknown");
        return IFileResultCallbackWarningEnum;
    })();
    Adaptive.IFileResultCallbackWarningEnum = IFileResultCallbackWarningEnum;
    var IFileDataResultCallbackErrorEnum = (function () {
        function IFileDataResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileDataResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileDataResultCallbackErrorEnum.InexistentFile = new IFileDataResultCallbackErrorEnum("InexistentFile");
        IFileDataResultCallbackErrorEnum.InsufficientSpace = new IFileDataResultCallbackErrorEnum("InsufficientSpace");
        IFileDataResultCallbackErrorEnum.Unauthorized = new IFileDataResultCallbackErrorEnum("Unauthorized");
        IFileDataResultCallbackErrorEnum.Unknown = new IFileDataResultCallbackErrorEnum("Unknown");
        return IFileDataResultCallbackErrorEnum;
    })();
    Adaptive.IFileDataResultCallbackErrorEnum = IFileDataResultCallbackErrorEnum;
    var IFileDataResultCallbackWarningEnum = (function () {
        function IFileDataResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileDataResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileDataResultCallbackWarningEnum.ExceedMaximumSize = new IFileDataResultCallbackWarningEnum("ExceedMaximumSize");
        IFileDataResultCallbackWarningEnum.Unknown = new IFileDataResultCallbackWarningEnum("Unknown");
        return IFileDataResultCallbackWarningEnum;
    })();
    Adaptive.IFileDataResultCallbackWarningEnum = IFileDataResultCallbackWarningEnum;
    var INetworkReachabilityCallbackErrorEnum = (function () {
        function INetworkReachabilityCallbackErrorEnum(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackErrorEnum.Forbidden = new INetworkReachabilityCallbackErrorEnum("Forbidden");
        INetworkReachabilityCallbackErrorEnum.NotFound = new INetworkReachabilityCallbackErrorEnum("NotFound");
        INetworkReachabilityCallbackErrorEnum.MethodNotAllowed = new INetworkReachabilityCallbackErrorEnum("MethodNotAllowed");
        INetworkReachabilityCallbackErrorEnum.NotAllowed = new INetworkReachabilityCallbackErrorEnum("NotAllowed");
        INetworkReachabilityCallbackErrorEnum.NotAuthenticated = new INetworkReachabilityCallbackErrorEnum("NotAuthenticated");
        INetworkReachabilityCallbackErrorEnum.TimeOut = new INetworkReachabilityCallbackErrorEnum("TimeOut");
        INetworkReachabilityCallbackErrorEnum.NoResponse = new INetworkReachabilityCallbackErrorEnum("NoResponse");
        INetworkReachabilityCallbackErrorEnum.Unreachable = new INetworkReachabilityCallbackErrorEnum("Unreachable");
        INetworkReachabilityCallbackErrorEnum.Wrong_Params = new INetworkReachabilityCallbackErrorEnum("Wrong_Params");
        INetworkReachabilityCallbackErrorEnum.MalformedUrl = new INetworkReachabilityCallbackErrorEnum("MalformedUrl");
        INetworkReachabilityCallbackErrorEnum.DomainUnresolvable = new INetworkReachabilityCallbackErrorEnum("DomainUnresolvable");
        INetworkReachabilityCallbackErrorEnum.Unknown = new INetworkReachabilityCallbackErrorEnum("Unknown");
        return INetworkReachabilityCallbackErrorEnum;
    })();
    Adaptive.INetworkReachabilityCallbackErrorEnum = INetworkReachabilityCallbackErrorEnum;
    var INetworkReachabilityCallbackWarningEnum = (function () {
        function INetworkReachabilityCallbackWarningEnum(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        INetworkReachabilityCallbackWarningEnum.IncorrectScheme = new INetworkReachabilityCallbackWarningEnum("IncorrectScheme");
        INetworkReachabilityCallbackWarningEnum.NotSecure = new INetworkReachabilityCallbackWarningEnum("NotSecure");
        INetworkReachabilityCallbackWarningEnum.NotTrusted = new INetworkReachabilityCallbackWarningEnum("NotTrusted");
        INetworkReachabilityCallbackWarningEnum.Redirected = new INetworkReachabilityCallbackWarningEnum("Redirected");
        INetworkReachabilityCallbackWarningEnum.NotRegisteredService = new INetworkReachabilityCallbackWarningEnum("NotRegisteredService");
        INetworkReachabilityCallbackWarningEnum.Unknown = new INetworkReachabilityCallbackWarningEnum("Unknown");
        return INetworkReachabilityCallbackWarningEnum;
    })();
    Adaptive.INetworkReachabilityCallbackWarningEnum = INetworkReachabilityCallbackWarningEnum;
    var ILoggingLogLevelEnum = (function () {
        function ILoggingLogLevelEnum(value) {
            this.value = value;
        }
        ILoggingLogLevelEnum.prototype.toString = function () {
            return this.value;
        };
        ILoggingLogLevelEnum.DEBUG = new ILoggingLogLevelEnum("DEBUG");
        ILoggingLogLevelEnum.WARN = new ILoggingLogLevelEnum("WARN");
        ILoggingLogLevelEnum.ERROR = new ILoggingLogLevelEnum("ERROR");
        ILoggingLogLevelEnum.INFO = new ILoggingLogLevelEnum("INFO");
        ILoggingLogLevelEnum.Unknown = new ILoggingLogLevelEnum("Unknown");
        return ILoggingLogLevelEnum;
    })();
    Adaptive.ILoggingLogLevelEnum = ILoggingLogLevelEnum;
    var IContactResultCallbackErrorEnum = (function () {
        function IContactResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IContactResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackErrorEnum.NoPermission = new IContactResultCallbackErrorEnum("NoPermission");
        IContactResultCallbackErrorEnum.Wrong_Params = new IContactResultCallbackErrorEnum("Wrong_Params");
        IContactResultCallbackErrorEnum.Unknown = new IContactResultCallbackErrorEnum("Unknown");
        return IContactResultCallbackErrorEnum;
    })();
    Adaptive.IContactResultCallbackErrorEnum = IContactResultCallbackErrorEnum;
    var IContactResultCallbackWarningEnum = (function () {
        function IContactResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IContactResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IContactResultCallbackWarningEnum.LimitExceeded = new IContactResultCallbackWarningEnum("LimitExceeded");
        IContactResultCallbackWarningEnum.No_Matches = new IContactResultCallbackWarningEnum("No_Matches");
        IContactResultCallbackWarningEnum.Unknown = new IContactResultCallbackWarningEnum("Unknown");
        return IContactResultCallbackWarningEnum;
    })();
    Adaptive.IContactResultCallbackWarningEnum = IContactResultCallbackWarningEnum;
    var ICapabilitiesButtonEnum = (function () {
        function ICapabilitiesButtonEnum(value) {
            this.value = value;
        }
        ICapabilitiesButtonEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesButtonEnum.HomeButton = new ICapabilitiesButtonEnum("HomeButton");
        ICapabilitiesButtonEnum.BackButton = new ICapabilitiesButtonEnum("BackButton");
        ICapabilitiesButtonEnum.OptionButton = new ICapabilitiesButtonEnum("OptionButton");
        ICapabilitiesButtonEnum.Unknown = new ICapabilitiesButtonEnum("Unknown");
        return ICapabilitiesButtonEnum;
    })();
    Adaptive.ICapabilitiesButtonEnum = ICapabilitiesButtonEnum;
    var ICapabilitiesCommunicationEnum = (function () {
        function ICapabilitiesCommunicationEnum(value) {
            this.value = value;
        }
        ICapabilitiesCommunicationEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesCommunicationEnum.Calendar = new ICapabilitiesCommunicationEnum("Calendar");
        ICapabilitiesCommunicationEnum.Contact = new ICapabilitiesCommunicationEnum("Contact");
        ICapabilitiesCommunicationEnum.Mail = new ICapabilitiesCommunicationEnum("Mail");
        ICapabilitiesCommunicationEnum.Messaging = new ICapabilitiesCommunicationEnum("Messaging");
        ICapabilitiesCommunicationEnum.Telephony = new ICapabilitiesCommunicationEnum("Telephony");
        ICapabilitiesCommunicationEnum.Unknown = new ICapabilitiesCommunicationEnum("Unknown");
        return ICapabilitiesCommunicationEnum;
    })();
    Adaptive.ICapabilitiesCommunicationEnum = ICapabilitiesCommunicationEnum;
    var ICapabilitiesDataEnum = (function () {
        function ICapabilitiesDataEnum(value) {
            this.value = value;
        }
        ICapabilitiesDataEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesDataEnum.Database = new ICapabilitiesDataEnum("Database");
        ICapabilitiesDataEnum.File = new ICapabilitiesDataEnum("File");
        ICapabilitiesDataEnum.Cloud = new ICapabilitiesDataEnum("Cloud");
        ICapabilitiesDataEnum.Unknown = new ICapabilitiesDataEnum("Unknown");
        return ICapabilitiesDataEnum;
    })();
    Adaptive.ICapabilitiesDataEnum = ICapabilitiesDataEnum;
    var ICapabilitiesMediaEnum = (function () {
        function ICapabilitiesMediaEnum(value) {
            this.value = value;
        }
        ICapabilitiesMediaEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesMediaEnum.Audio_Playback = new ICapabilitiesMediaEnum("Audio_Playback");
        ICapabilitiesMediaEnum.Audio_Recording = new ICapabilitiesMediaEnum("Audio_Recording");
        ICapabilitiesMediaEnum.Camera = new ICapabilitiesMediaEnum("Camera");
        ICapabilitiesMediaEnum.Video_Playback = new ICapabilitiesMediaEnum("Video_Playback");
        ICapabilitiesMediaEnum.Video_Recording = new ICapabilitiesMediaEnum("Video_Recording");
        ICapabilitiesMediaEnum.Unknown = new ICapabilitiesMediaEnum("Unknown");
        return ICapabilitiesMediaEnum;
    })();
    Adaptive.ICapabilitiesMediaEnum = ICapabilitiesMediaEnum;
    var ICapabilitiesNetEnum = (function () {
        function ICapabilitiesNetEnum(value) {
            this.value = value;
        }
        ICapabilitiesNetEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNetEnum.GSM = new ICapabilitiesNetEnum("GSM");
        ICapabilitiesNetEnum.GPRS = new ICapabilitiesNetEnum("GPRS");
        ICapabilitiesNetEnum.HSDPA = new ICapabilitiesNetEnum("HSDPA");
        ICapabilitiesNetEnum.LTE = new ICapabilitiesNetEnum("LTE");
        ICapabilitiesNetEnum.WIFI = new ICapabilitiesNetEnum("WIFI");
        ICapabilitiesNetEnum.Ethernet = new ICapabilitiesNetEnum("Ethernet");
        ICapabilitiesNetEnum.Unknown = new ICapabilitiesNetEnum("Unknown");
        return ICapabilitiesNetEnum;
    })();
    Adaptive.ICapabilitiesNetEnum = ICapabilitiesNetEnum;
    var ICapabilitiesNotificationEnum = (function () {
        function ICapabilitiesNotificationEnum(value) {
            this.value = value;
        }
        ICapabilitiesNotificationEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesNotificationEnum.Alarm = new ICapabilitiesNotificationEnum("Alarm");
        ICapabilitiesNotificationEnum.LocalNotification = new ICapabilitiesNotificationEnum("LocalNotification");
        ICapabilitiesNotificationEnum.RemoteNotification = new ICapabilitiesNotificationEnum("RemoteNotification");
        ICapabilitiesNotificationEnum.Vibration = new ICapabilitiesNotificationEnum("Vibration");
        ICapabilitiesNotificationEnum.Unknown = new ICapabilitiesNotificationEnum("Unknown");
        return ICapabilitiesNotificationEnum;
    })();
    Adaptive.ICapabilitiesNotificationEnum = ICapabilitiesNotificationEnum;
    var ICapabilitiesSensorEnum = (function () {
        function ICapabilitiesSensorEnum(value) {
            this.value = value;
        }
        ICapabilitiesSensorEnum.prototype.toString = function () {
            return this.value;
        };
        ICapabilitiesSensorEnum.Accelerometer = new ICapabilitiesSensorEnum("Accelerometer");
        ICapabilitiesSensorEnum.AmbientLight = new ICapabilitiesSensorEnum("AmbientLight");
        ICapabilitiesSensorEnum.Barometer = new ICapabilitiesSensorEnum("Barometer");
        ICapabilitiesSensorEnum.Geolocation = new ICapabilitiesSensorEnum("Geolocation");
        ICapabilitiesSensorEnum.Gyroscope = new ICapabilitiesSensorEnum("Gyroscope");
        ICapabilitiesSensorEnum.Magnetometer = new ICapabilitiesSensorEnum("Magnetometer");
        ICapabilitiesSensorEnum.Proximity = new ICapabilitiesSensorEnum("Proximity");
        ICapabilitiesSensorEnum.Unknown = new ICapabilitiesSensorEnum("Unknown");
        return ICapabilitiesSensorEnum;
    })();
    Adaptive.ICapabilitiesSensorEnum = ICapabilitiesSensorEnum;
    var IFileListResultCallbackErrorEnum = (function () {
        function IFileListResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IFileListResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackErrorEnum.InexistentFile = new IFileListResultCallbackErrorEnum("InexistentFile");
        IFileListResultCallbackErrorEnum.Unauthorized = new IFileListResultCallbackErrorEnum("Unauthorized");
        IFileListResultCallbackErrorEnum.Unknown = new IFileListResultCallbackErrorEnum("Unknown");
        return IFileListResultCallbackErrorEnum;
    })();
    Adaptive.IFileListResultCallbackErrorEnum = IFileListResultCallbackErrorEnum;
    var IFileListResultCallbackWarningEnum = (function () {
        function IFileListResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IFileListResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IFileListResultCallbackWarningEnum.PartialResult = new IFileListResultCallbackWarningEnum("PartialResult");
        IFileListResultCallbackWarningEnum.Unknown = new IFileListResultCallbackWarningEnum("Unknown");
        return IFileListResultCallbackWarningEnum;
    })();
    Adaptive.IFileListResultCallbackWarningEnum = IFileListResultCallbackWarningEnum;
    var IGeolocationListenerErrorEnum = (function () {
        function IGeolocationListenerErrorEnum(value) {
            this.value = value;
        }
        IGeolocationListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerErrorEnum.Disabled = new IGeolocationListenerErrorEnum("Disabled");
        IGeolocationListenerErrorEnum.RestrictedAccess = new IGeolocationListenerErrorEnum("RestrictedAccess");
        IGeolocationListenerErrorEnum.DeniedAccess = new IGeolocationListenerErrorEnum("DeniedAccess");
        IGeolocationListenerErrorEnum.StatusNotDetermined = new IGeolocationListenerErrorEnum("StatusNotDetermined");
        IGeolocationListenerErrorEnum.Unknown = new IGeolocationListenerErrorEnum("Unknown");
        return IGeolocationListenerErrorEnum;
    })();
    Adaptive.IGeolocationListenerErrorEnum = IGeolocationListenerErrorEnum;
    var IGeolocationListenerWarningEnum = (function () {
        function IGeolocationListenerWarningEnum(value) {
            this.value = value;
        }
        IGeolocationListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IGeolocationListenerWarningEnum.HighDoP = new IGeolocationListenerWarningEnum("HighDoP");
        IGeolocationListenerWarningEnum.StaleData = new IGeolocationListenerWarningEnum("StaleData");
        IGeolocationListenerWarningEnum.Unknown = new IGeolocationListenerWarningEnum("Unknown");
        return IGeolocationListenerWarningEnum;
    })();
    Adaptive.IGeolocationListenerWarningEnum = IGeolocationListenerWarningEnum;
    var IButtonListenerErrorEnum = (function () {
        function IButtonListenerErrorEnum(value) {
            this.value = value;
        }
        IButtonListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerErrorEnum.Not_Present = new IButtonListenerErrorEnum("Not_Present");
        IButtonListenerErrorEnum.Unknown = new IButtonListenerErrorEnum("Unknown");
        return IButtonListenerErrorEnum;
    })();
    Adaptive.IButtonListenerErrorEnum = IButtonListenerErrorEnum;
    var IButtonListenerWarningEnum = (function () {
        function IButtonListenerWarningEnum(value) {
            this.value = value;
        }
        IButtonListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IButtonListenerWarningEnum.Not_Implemented = new IButtonListenerWarningEnum("Not_Implemented");
        IButtonListenerWarningEnum.Unknown = new IButtonListenerWarningEnum("Unknown");
        return IButtonListenerWarningEnum;
    })();
    Adaptive.IButtonListenerWarningEnum = IButtonListenerWarningEnum;
    var ITableResultCallbackErrorEnum = (function () {
        function ITableResultCallbackErrorEnum(value) {
            this.value = value;
        }
        ITableResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ITableResultCallbackErrorEnum.NoSpace = new ITableResultCallbackErrorEnum("NoSpace");
        ITableResultCallbackErrorEnum.ReadOnlyTable = new ITableResultCallbackErrorEnum("ReadOnlyTable");
        ITableResultCallbackErrorEnum.SqlException = new ITableResultCallbackErrorEnum("SqlException");
        ITableResultCallbackErrorEnum.DatabaseNotFound = new ITableResultCallbackErrorEnum("DatabaseNotFound");
        ITableResultCallbackErrorEnum.NoTableFound = new ITableResultCallbackErrorEnum("NoTableFound");
        ITableResultCallbackErrorEnum.Unknown = new ITableResultCallbackErrorEnum("Unknown");
        return ITableResultCallbackErrorEnum;
    })();
    Adaptive.ITableResultCallbackErrorEnum = ITableResultCallbackErrorEnum;
    var ITableResultCallbackWarningEnum = (function () {
        function ITableResultCallbackWarningEnum(value) {
            this.value = value;
        }
        ITableResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ITableResultCallbackWarningEnum.TableExists = new ITableResultCallbackWarningEnum("TableExists");
        ITableResultCallbackWarningEnum.TableLocked = new ITableResultCallbackWarningEnum("TableLocked");
        ITableResultCallbackWarningEnum.NoResults = new ITableResultCallbackWarningEnum("NoResults");
        ITableResultCallbackWarningEnum.Unknown = new ITableResultCallbackWarningEnum("Unknown");
        return ITableResultCallbackWarningEnum;
    })();
    Adaptive.ITableResultCallbackWarningEnum = ITableResultCallbackWarningEnum;
    var ISecureKVResultCallbackErrorEnum = (function () {
        function ISecureKVResultCallbackErrorEnum(value) {
            this.value = value;
        }
        ISecureKVResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ISecureKVResultCallbackErrorEnum.NoPermission = new ISecureKVResultCallbackErrorEnum("NoPermission");
        ISecureKVResultCallbackErrorEnum.NoMatchesFound = new ISecureKVResultCallbackErrorEnum("NoMatchesFound");
        ISecureKVResultCallbackErrorEnum.Unknown = new ISecureKVResultCallbackErrorEnum("Unknown");
        return ISecureKVResultCallbackErrorEnum;
    })();
    Adaptive.ISecureKVResultCallbackErrorEnum = ISecureKVResultCallbackErrorEnum;
    var ISecureKVResultCallbackWarningEnum = (function () {
        function ISecureKVResultCallbackWarningEnum(value) {
            this.value = value;
        }
        ISecureKVResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ISecureKVResultCallbackWarningEnum.EntryOverride = new ISecureKVResultCallbackWarningEnum("EntryOverride");
        ISecureKVResultCallbackWarningEnum.Unknown = new ISecureKVResultCallbackWarningEnum("Unknown");
        return ISecureKVResultCallbackWarningEnum;
    })();
    Adaptive.ISecureKVResultCallbackWarningEnum = ISecureKVResultCallbackWarningEnum;
    var IAppResourceCallbackErrorEnum = (function () {
        function IAppResourceCallbackErrorEnum(value) {
            this.value = value;
        }
        IAppResourceCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackErrorEnum.NotFound = new IAppResourceCallbackErrorEnum("NotFound");
        IAppResourceCallbackErrorEnum.NoPermission = new IAppResourceCallbackErrorEnum("NoPermission");
        IAppResourceCallbackErrorEnum.Unknown = new IAppResourceCallbackErrorEnum("Unknown");
        return IAppResourceCallbackErrorEnum;
    })();
    Adaptive.IAppResourceCallbackErrorEnum = IAppResourceCallbackErrorEnum;
    var IAppResourceCallbackWarningEnum = (function () {
        function IAppResourceCallbackWarningEnum(value) {
            this.value = value;
        }
        IAppResourceCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IAppResourceCallbackWarningEnum.PartialContent = new IAppResourceCallbackWarningEnum("PartialContent");
        IAppResourceCallbackWarningEnum.TooLarge = new IAppResourceCallbackWarningEnum("TooLarge");
        IAppResourceCallbackWarningEnum.LinkedResource = new IAppResourceCallbackWarningEnum("LinkedResource");
        IAppResourceCallbackWarningEnum.Unknown = new IAppResourceCallbackWarningEnum("Unknown");
        return IAppResourceCallbackWarningEnum;
    })();
    Adaptive.IAppResourceCallbackWarningEnum = IAppResourceCallbackWarningEnum;
    var IDatabaseResultCallbackErrorEnum = (function () {
        function IDatabaseResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IDatabaseResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackErrorEnum.NoSpace = new IDatabaseResultCallbackErrorEnum("NoSpace");
        IDatabaseResultCallbackErrorEnum.SqlException = new IDatabaseResultCallbackErrorEnum("SqlException");
        IDatabaseResultCallbackErrorEnum.NotDeleted = new IDatabaseResultCallbackErrorEnum("NotDeleted");
        IDatabaseResultCallbackErrorEnum.Unknown = new IDatabaseResultCallbackErrorEnum("Unknown");
        return IDatabaseResultCallbackErrorEnum;
    })();
    Adaptive.IDatabaseResultCallbackErrorEnum = IDatabaseResultCallbackErrorEnum;
    var IDatabaseResultCallbackWarningEnum = (function () {
        function IDatabaseResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IDatabaseResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IDatabaseResultCallbackWarningEnum.DatabaseExists = new IDatabaseResultCallbackWarningEnum("DatabaseExists");
        IDatabaseResultCallbackWarningEnum.IsOpen = new IDatabaseResultCallbackWarningEnum("IsOpen");
        IDatabaseResultCallbackWarningEnum.Unknown = new IDatabaseResultCallbackWarningEnum("Unknown");
        return IDatabaseResultCallbackWarningEnum;
    })();
    Adaptive.IDatabaseResultCallbackWarningEnum = IDatabaseResultCallbackWarningEnum;
    var IAccelerationListenerErrorEnum = (function () {
        function IAccelerationListenerErrorEnum(value) {
            this.value = value;
        }
        IAccelerationListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerErrorEnum.Unauthorized = new IAccelerationListenerErrorEnum("Unauthorized");
        IAccelerationListenerErrorEnum.Unavailable = new IAccelerationListenerErrorEnum("Unavailable");
        IAccelerationListenerErrorEnum.Unknown = new IAccelerationListenerErrorEnum("Unknown");
        return IAccelerationListenerErrorEnum;
    })();
    Adaptive.IAccelerationListenerErrorEnum = IAccelerationListenerErrorEnum;
    var IAccelerationListenerWarningEnum = (function () {
        function IAccelerationListenerWarningEnum(value) {
            this.value = value;
        }
        IAccelerationListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IAccelerationListenerWarningEnum.NeedsCalibration = new IAccelerationListenerWarningEnum("NeedsCalibration");
        IAccelerationListenerWarningEnum.Stale = new IAccelerationListenerWarningEnum("Stale");
        IAccelerationListenerWarningEnum.Unknown = new IAccelerationListenerWarningEnum("Unknown");
        return IAccelerationListenerWarningEnum;
    })();
    Adaptive.IAccelerationListenerWarningEnum = IAccelerationListenerWarningEnum;
    var ILifecycleListenerErrorEnum = (function () {
        function ILifecycleListenerErrorEnum(value) {
            this.value = value;
        }
        ILifecycleListenerErrorEnum.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerErrorEnum.Runtime = new ILifecycleListenerErrorEnum("Runtime");
        ILifecycleListenerErrorEnum.Implementation = new ILifecycleListenerErrorEnum("Implementation");
        ILifecycleListenerErrorEnum.Killed = new ILifecycleListenerErrorEnum("Killed");
        ILifecycleListenerErrorEnum.Unknown = new ILifecycleListenerErrorEnum("Unknown");
        return ILifecycleListenerErrorEnum;
    })();
    Adaptive.ILifecycleListenerErrorEnum = ILifecycleListenerErrorEnum;
    var ILifecycleListenerWarningEnum = (function () {
        function ILifecycleListenerWarningEnum(value) {
            this.value = value;
        }
        ILifecycleListenerWarningEnum.prototype.toString = function () {
            return this.value;
        };
        ILifecycleListenerWarningEnum.MemoryLow = new ILifecycleListenerWarningEnum("MemoryLow");
        ILifecycleListenerWarningEnum.BatteryLow = new ILifecycleListenerWarningEnum("BatteryLow");
        ILifecycleListenerWarningEnum.Unknown = new ILifecycleListenerWarningEnum("Unknown");
        return ILifecycleListenerWarningEnum;
    })();
    Adaptive.ILifecycleListenerWarningEnum = ILifecycleListenerWarningEnum;
    var IServiceResultCallbackErrorEnum = (function () {
        function IServiceResultCallbackErrorEnum(value) {
            this.value = value;
        }
        IServiceResultCallbackErrorEnum.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackErrorEnum.Forbidden = new IServiceResultCallbackErrorEnum("Forbidden");
        IServiceResultCallbackErrorEnum.NotFound = new IServiceResultCallbackErrorEnum("NotFound");
        IServiceResultCallbackErrorEnum.MethodNotAllowed = new IServiceResultCallbackErrorEnum("MethodNotAllowed");
        IServiceResultCallbackErrorEnum.NotAllowed = new IServiceResultCallbackErrorEnum("NotAllowed");
        IServiceResultCallbackErrorEnum.NotAuthenticated = new IServiceResultCallbackErrorEnum("NotAuthenticated");
        IServiceResultCallbackErrorEnum.TimeOut = new IServiceResultCallbackErrorEnum("TimeOut");
        IServiceResultCallbackErrorEnum.NoResponse = new IServiceResultCallbackErrorEnum("NoResponse");
        IServiceResultCallbackErrorEnum.ServerError = new IServiceResultCallbackErrorEnum("ServerError");
        IServiceResultCallbackErrorEnum.Unreachable = new IServiceResultCallbackErrorEnum("Unreachable");
        IServiceResultCallbackErrorEnum.MalformedUrl = new IServiceResultCallbackErrorEnum("MalformedUrl");
        IServiceResultCallbackErrorEnum.NotRegisteredService = new IServiceResultCallbackErrorEnum("NotRegisteredService");
        IServiceResultCallbackErrorEnum.Unknown = new IServiceResultCallbackErrorEnum("Unknown");
        return IServiceResultCallbackErrorEnum;
    })();
    Adaptive.IServiceResultCallbackErrorEnum = IServiceResultCallbackErrorEnum;
    var IServiceResultCallbackWarningEnum = (function () {
        function IServiceResultCallbackWarningEnum(value) {
            this.value = value;
        }
        IServiceResultCallbackWarningEnum.prototype.toString = function () {
            return this.value;
        };
        IServiceResultCallbackWarningEnum.NotSecure = new IServiceResultCallbackWarningEnum("NotSecure");
        IServiceResultCallbackWarningEnum.NotTrusted = new IServiceResultCallbackWarningEnum("NotTrusted");
        IServiceResultCallbackWarningEnum.Redirected = new IServiceResultCallbackWarningEnum("Redirected");
        IServiceResultCallbackWarningEnum.Wrong_Params = new IServiceResultCallbackWarningEnum("Wrong_Params");
        IServiceResultCallbackWarningEnum.Unknown = new IServiceResultCallbackWarningEnum("Unknown");
        return IServiceResultCallbackWarningEnum;
    })();
    Adaptive.IServiceResultCallbackWarningEnum = IServiceResultCallbackWarningEnum;
    var ContactPersonalInfo = (function () {
        /** Initialization **/
        function ContactPersonalInfo(name, middleName, lastName, title) {
            this.name = name;
            this.middleName = middleName;
            this.lastName = lastName;
            this.title = title;
        }
        return ContactPersonalInfo;
    })();
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    var ContactPersonalInfoTitleEnum = (function () {
        function ContactPersonalInfoTitleEnum(value) {
            this.value = value;
        }
        ContactPersonalInfoTitleEnum.prototype.toString = function () {
            return this.value;
        };
        ContactPersonalInfoTitleEnum.Mr = new ContactPersonalInfoTitleEnum("Mr");
        ContactPersonalInfoTitleEnum.Mrs = new ContactPersonalInfoTitleEnum("Mrs");
        ContactPersonalInfoTitleEnum.Ms = new ContactPersonalInfoTitleEnum("Ms");
        ContactPersonalInfoTitleEnum.Dr = new ContactPersonalInfoTitleEnum("Dr");
        ContactPersonalInfoTitleEnum.Unknown = new ContactPersonalInfoTitleEnum("Unknown");
        return ContactPersonalInfoTitleEnum;
    })();
    Adaptive.ContactPersonalInfoTitleEnum = ContactPersonalInfoTitleEnum;
    var ContactTag = (function () {
        /** Initialization **/
        function ContactTag(name, dataValue) {
            this.name = name;
            this.dataValue = dataValue;
        }
        return ContactTag;
    })();
    Adaptive.ContactTag = ContactTag;
    var ContactWebsite = (function () {
        /** Initialization **/
        function ContactWebsite(url) {
            this.url = url;
        }
        return ContactWebsite;
    })();
    Adaptive.ContactWebsite = ContactWebsite;
    var OSInfo = (function () {
        /** Initialization **/
        function OSInfo(name, version, vendor) {
            this.name = name;
            this.version = version;
            this.vendor = vendor;
        }
        return OSInfo;
    })();
    Adaptive.OSInfo = OSInfo;
    var Column = (function () {
        /** Initialization **/
        function Column(name) {
            this.name = name;
        }
        return Column;
    })();
    Adaptive.Column = Column;
    var Locale = (function () {
        /** Initialization **/
        function Locale(language, country) {
            this.language = language;
            this.country = country;
        }
        return Locale;
    })();
    Adaptive.Locale = Locale;
    var Email = (function () {
        /** Initialization **/
        function Email(toRecipients, subject, messageBody) {
            this.toRecipients = toRecipients;
            this.subject = subject;
            this.messageBody = messageBody;
        }
        return Email;
    })();
    Adaptive.Email = Email;
    var ContactUid = (function () {
        /** Initialization **/
        function ContactUid(contactId) {
            this.contactId = contactId;
        }
        return ContactUid;
    })();
    Adaptive.ContactUid = ContactUid;
    var ContactAddress = (function () {
        /** Initialization **/
        function ContactAddress(address, type) {
            this.address = address;
            this.type = type;
        }
        return ContactAddress;
    })();
    Adaptive.ContactAddress = ContactAddress;
    var ContactAddressAddressTypeEnum = (function () {
        function ContactAddressAddressTypeEnum(value) {
            this.value = value;
        }
        ContactAddressAddressTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactAddressAddressTypeEnum.Home = new ContactAddressAddressTypeEnum("Home");
        ContactAddressAddressTypeEnum.Work = new ContactAddressAddressTypeEnum("Work");
        ContactAddressAddressTypeEnum.Other = new ContactAddressAddressTypeEnum("Other");
        ContactAddressAddressTypeEnum.Unknown = new ContactAddressAddressTypeEnum("Unknown");
        return ContactAddressAddressTypeEnum;
    })();
    Adaptive.ContactAddressAddressTypeEnum = ContactAddressAddressTypeEnum;
    var ContactProfessionalInfo = (function () {
        /** Initialization **/
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            this.jobTitle = jobTitle;
            this.jobDescription = jobDescription;
            this.company = company;
        }
        return ContactProfessionalInfo;
    })();
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    var ServiceRequest = (function () {
        /** Initialization **/
        function ServiceRequest(content, contentType, contentLength, rawContent, headers, method, protocolVersion, session, contentEncoding) {
            this.content = content;
            this.contentType = contentType;
            this.contentLength = contentLength;
            this.rawContent = rawContent;
            this.headers = headers;
            this.method = method;
            this.protocolVersion = protocolVersion;
            this.session = session;
            this.contentEncoding = contentEncoding;
        }
        return ServiceRequest;
    })();
    Adaptive.ServiceRequest = ServiceRequest;
    var ServiceRequestProtocolVersionEnum = (function () {
        function ServiceRequestProtocolVersionEnum(value) {
            this.value = value;
        }
        ServiceRequestProtocolVersionEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_0 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_0");
        ServiceRequestProtocolVersionEnum.HTTP_PROTOCOL_VERSION_1_1 = new ServiceRequestProtocolVersionEnum("HTTP_PROTOCOL_VERSION_1_1");
        ServiceRequestProtocolVersionEnum.Unknown = new ServiceRequestProtocolVersionEnum("Unknown");
        return ServiceRequestProtocolVersionEnum;
    })();
    Adaptive.ServiceRequestProtocolVersionEnum = ServiceRequestProtocolVersionEnum;
    var ContactSocial = (function () {
        /** Initialization **/
        function ContactSocial(socialNetwork, profileUrl) {
            this.socialNetwork = socialNetwork;
            this.profileUrl = profileUrl;
        }
        return ContactSocial;
    })();
    Adaptive.ContactSocial = ContactSocial;
    var ContactSocialSocialNetworkEnum = (function () {
        function ContactSocialSocialNetworkEnum(value) {
            this.value = value;
        }
        ContactSocialSocialNetworkEnum.prototype.toString = function () {
            return this.value;
        };
        ContactSocialSocialNetworkEnum.Twitter = new ContactSocialSocialNetworkEnum("Twitter");
        ContactSocialSocialNetworkEnum.Facebook = new ContactSocialSocialNetworkEnum("Facebook");
        ContactSocialSocialNetworkEnum.GooglePlus = new ContactSocialSocialNetworkEnum("GooglePlus");
        ContactSocialSocialNetworkEnum.LinkedIn = new ContactSocialSocialNetworkEnum("LinkedIn");
        ContactSocialSocialNetworkEnum.Flickr = new ContactSocialSocialNetworkEnum("Flickr");
        ContactSocialSocialNetworkEnum.Unknown = new ContactSocialSocialNetworkEnum("Unknown");
        return ContactSocialSocialNetworkEnum;
    })();
    Adaptive.ContactSocialSocialNetworkEnum = ContactSocialSocialNetworkEnum;
    var Endpoint = (function () {
        /** Initialization **/
        function Endpoint(host, path, port, proxy, scheme) {
            this.host = host;
            this.path = path;
            this.port = port;
            this.proxy = proxy;
            this.scheme = scheme;
        }
        return Endpoint;
    })();
    Adaptive.Endpoint = Endpoint;
    var Cookie = (function () {
        /** Initialization **/
        function Cookie(name, data) {
            this.name = name;
            this.data = data;
        }
        return Cookie;
    })();
    Adaptive.Cookie = Cookie;
    var Button = (function () {
        /** Initialization **/
        function Button(type) {
            this.type = type;
        }
        return Button;
    })();
    Adaptive.Button = Button;
    var ButtonButtonEnum = (function () {
        function ButtonButtonEnum(value) {
            this.value = value;
        }
        ButtonButtonEnum.prototype.toString = function () {
            return this.value;
        };
        ButtonButtonEnum.HomeButton = new ButtonButtonEnum("HomeButton");
        ButtonButtonEnum.BackButton = new ButtonButtonEnum("BackButton");
        ButtonButtonEnum.OptionButton = new ButtonButtonEnum("OptionButton");
        ButtonButtonEnum.Unknown = new ButtonButtonEnum("Unknown");
        return ButtonButtonEnum;
    })();
    Adaptive.ButtonButtonEnum = ButtonButtonEnum;
    var Database = (function () {
        /** Initialization **/
        function Database(name, compress) {
            this.name = name;
            this.compress = compress;
        }
        return Database;
    })();
    Adaptive.Database = Database;
    var AttachmentData = (function () {
        /** Initialization **/
        function AttachmentData(data, dataSize, fileName, mimeType, referenceUrl) {
            this.data = data;
            this.dataSize = dataSize;
            this.fileName = fileName;
            this.mimeType = mimeType;
            this.referenceUrl = referenceUrl;
        }
        return AttachmentData;
    })();
    Adaptive.AttachmentData = AttachmentData;
    var ContactEmail = (function () {
        /** Initialization **/
        function ContactEmail(type, primary, email) {
            this.type = type;
            this.primary = primary;
            this.email = email;
        }
        return ContactEmail;
    })();
    Adaptive.ContactEmail = ContactEmail;
    var ContactEmailEmailTypeEnum = (function () {
        function ContactEmailEmailTypeEnum(value) {
            this.value = value;
        }
        ContactEmailEmailTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactEmailEmailTypeEnum.Personal = new ContactEmailEmailTypeEnum("Personal");
        ContactEmailEmailTypeEnum.Work = new ContactEmailEmailTypeEnum("Work");
        ContactEmailEmailTypeEnum.Other = new ContactEmailEmailTypeEnum("Other");
        ContactEmailEmailTypeEnum.Unknown = new ContactEmailEmailTypeEnum("Unknown");
        return ContactEmailEmailTypeEnum;
    })();
    Adaptive.ContactEmailEmailTypeEnum = ContactEmailEmailTypeEnum;
    var Table = (function () {
        /** Initialization **/
        function Table(name) {
            this.name = name;
        }
        return Table;
    })();
    Adaptive.Table = Table;
    var EmailAddress = (function () {
        /** Initialization **/
        function EmailAddress(address) {
            this.address = address;
        }
        return EmailAddress;
    })();
    Adaptive.EmailAddress = EmailAddress;
    var DeviceInfo = (function () {
        /** Initialization **/
        function DeviceInfo(name, model, vendor, uuid) {
            this.name = name;
            this.model = model;
            this.vendor = vendor;
            this.uuid = uuid;
        }
        return DeviceInfo;
    })();
    Adaptive.DeviceInfo = DeviceInfo;
    var SecureKeyPair = (function () {
        /** Initialization **/
        function SecureKeyPair(secureKey, secureData) {
            this.secureKey = secureKey;
            this.secureData = secureData;
        }
        return SecureKeyPair;
    })();
    Adaptive.SecureKeyPair = SecureKeyPair;
    var Header = (function () {
        /** Initialization **/
        function Header(name, data) {
            this.name = name;
            this.data = data;
        }
        return Header;
    })();
    Adaptive.Header = Header;
    var ServiceResponse = (function () {
        /** Initialization **/
        function ServiceResponse(content, contentType, contentLength, contentBinary, contentBinaryLength, headers, session, contentEncoding) {
            this.content = content;
            this.contentType = contentType;
            this.contentLength = contentLength;
            this.contentBinary = contentBinary;
            this.contentBinaryLength = contentBinaryLength;
            this.headers = headers;
            this.session = session;
            this.contentEncoding = contentEncoding;
        }
        return ServiceResponse;
    })();
    Adaptive.ServiceResponse = ServiceResponse;
    var Contact = (function (_super) {
        __extends(Contact, _super);
        /** Initialization **/
        function Contact(contactId) {
            _super.call(this, contactId);
            this.contactId = contactId;
        }
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    var Service = (function () {
        /** Initialization **/
        function Service(endpoint, name, method, type) {
            this.endpoint = endpoint;
            this.name = name;
            this.method = method;
            this.type = type;
        }
        return Service;
    })();
    Adaptive.Service = Service;
    var ServiceServiceMethodEnum = (function () {
        function ServiceServiceMethodEnum(value) {
            this.value = value;
        }
        ServiceServiceMethodEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceServiceMethodEnum.POST = new ServiceServiceMethodEnum("POST");
        ServiceServiceMethodEnum.GET = new ServiceServiceMethodEnum("GET");
        ServiceServiceMethodEnum.Unknown = new ServiceServiceMethodEnum("Unknown");
        return ServiceServiceMethodEnum;
    })();
    Adaptive.ServiceServiceMethodEnum = ServiceServiceMethodEnum;
    var ServiceServiceTypeEnum = (function () {
        function ServiceServiceTypeEnum(value) {
            this.value = value;
        }
        ServiceServiceTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ServiceServiceTypeEnum.SERVICETYPE_AMF_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_AMF_SERIALIZATION");
        ServiceServiceTypeEnum.SERVICETYPE_GWT_RPC = new ServiceServiceTypeEnum("SERVICETYPE_GWT_RPC");
        ServiceServiceTypeEnum.SERVICETYPE_OCTET_BINARY = new ServiceServiceTypeEnum("SERVICETYPE_OCTET_BINARY");
        ServiceServiceTypeEnum.SERVICETYPE_REMOTING_SERIALIZATION = new ServiceServiceTypeEnum("SERVICETYPE_REMOTING_SERIALIZATION");
        ServiceServiceTypeEnum.SERVICETYPE_REST_JSON = new ServiceServiceTypeEnum("SERVICETYPE_REST_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_REST_XML = new ServiceServiceTypeEnum("SERVICETYPE_REST_XML");
        ServiceServiceTypeEnum.SERVICETYPE_SOAP_JSON = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_SOAP_XML = new ServiceServiceTypeEnum("SERVICETYPE_SOAP_XML");
        ServiceServiceTypeEnum.SERVICETYPE_XMLRPC_JSON = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_JSON");
        ServiceServiceTypeEnum.SERVICETYPE_XMLRPC_XML = new ServiceServiceTypeEnum("SERVICETYPE_XMLRPC_XML");
        ServiceServiceTypeEnum.Unknown = new ServiceServiceTypeEnum("Unknown");
        return ServiceServiceTypeEnum;
    })();
    Adaptive.ServiceServiceTypeEnum = ServiceServiceTypeEnum;
    var Lifecycle = (function () {
        /** Initialization **/
        function Lifecycle(state) {
            this.state = state;
        }
        return Lifecycle;
    })();
    Adaptive.Lifecycle = Lifecycle;
    var LifecycleStateEnum = (function () {
        function LifecycleStateEnum(value) {
            this.value = value;
        }
        LifecycleStateEnum.prototype.toString = function () {
            return this.value;
        };
        LifecycleStateEnum.Starting = new LifecycleStateEnum("Starting");
        LifecycleStateEnum.Started = new LifecycleStateEnum("Started");
        LifecycleStateEnum.Running = new LifecycleStateEnum("Running");
        LifecycleStateEnum.Paused = new LifecycleStateEnum("Paused");
        LifecycleStateEnum.PausedIdle = new LifecycleStateEnum("PausedIdle");
        LifecycleStateEnum.PausedRun = new LifecycleStateEnum("PausedRun");
        LifecycleStateEnum.Resuming = new LifecycleStateEnum("Resuming");
        LifecycleStateEnum.Stopping = new LifecycleStateEnum("Stopping");
        LifecycleStateEnum.Unknown = new LifecycleStateEnum("Unknown");
        return LifecycleStateEnum;
    })();
    Adaptive.LifecycleStateEnum = LifecycleStateEnum;
    var Acceleration = (function () {
        /** Initialization **/
        function Acceleration(x, y, z, timeStamp) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.timeStamp = timeStamp;
        }
        return Acceleration;
    })();
    Adaptive.Acceleration = Acceleration;
    var ContactPhone = (function () {
        /** Initialization **/
        function ContactPhone(phone, phoneType) {
            this.phone = phone;
            this.phoneType = phoneType;
        }
        return ContactPhone;
    })();
    Adaptive.ContactPhone = ContactPhone;
    var ContactPhonePhoneTypeEnum = (function () {
        function ContactPhonePhoneTypeEnum(value) {
            this.value = value;
        }
        ContactPhonePhoneTypeEnum.prototype.toString = function () {
            return this.value;
        };
        ContactPhonePhoneTypeEnum.Mobile = new ContactPhonePhoneTypeEnum("Mobile");
        ContactPhonePhoneTypeEnum.Work = new ContactPhonePhoneTypeEnum("Work");
        ContactPhonePhoneTypeEnum.Home = new ContactPhonePhoneTypeEnum("Home");
        ContactPhonePhoneTypeEnum.Main = new ContactPhonePhoneTypeEnum("Main");
        ContactPhonePhoneTypeEnum.HomeFax = new ContactPhonePhoneTypeEnum("HomeFax");
        ContactPhonePhoneTypeEnum.WorkFax = new ContactPhonePhoneTypeEnum("WorkFax");
        ContactPhonePhoneTypeEnum.Other = new ContactPhonePhoneTypeEnum("Other");
        ContactPhonePhoneTypeEnum.Unknown = new ContactPhonePhoneTypeEnum("Unknown");
        return ContactPhonePhoneTypeEnum;
    })();
    Adaptive.ContactPhonePhoneTypeEnum = ContactPhonePhoneTypeEnum;
    var Geolocation = (function () {
        /** Initialization **/
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP) {
            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.xDoP = xDoP;
            this.yDoP = yDoP;
        }
        return Geolocation;
    })();
    Adaptive.Geolocation = Geolocation;
    var Row = (function () {
        /** Initialization **/
        function Row(values) {
            this.values = values;
        }
        return Row;
    })();
    Adaptive.Row = Row;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=adaptive.js.map