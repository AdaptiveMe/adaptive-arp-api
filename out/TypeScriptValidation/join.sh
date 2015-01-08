#!/bin/sh
# Join all scripts into a combined JavaScript file. NOTE: you *must* include files in their precise order
# of inheritance and dependency; failing to do this will report errors when creating instances of classes
# from JavaScript and you're going to have a very bad time. As Mc Hammer would say: 'You can't touch dis!'
# unless you *really* know what you're doing.

# ps. This file is AUTO-GENERATED.

tsc --out adaptive-full.js APIBridge.ts IAppRegistry.ts IAppContextWebview.ts IAdaptiveRP.ts IFile.ts IAppContext.ts IBaseListener.ts IBaseCallback.ts IBaseSecurity.ts IBaseUtil.ts IBaseCommerce.ts IBaseMedia.ts IBaseData.ts IBaseCommunication.ts IBaseSensor.ts IBaseReader.ts IBaseNotification.ts IBasePIM.ts IBaseSystem.ts IBaseSocial.ts IBaseApplication.ts IBaseUI.ts IDisplay.ts IInternalStorage.ts ICloud.ts IWallet.ts IFileDataLoadResultCallback.ts INetworkReachabilityCallback.ts IConcurrent.ts IContactPhotoResultCallback.ts INetworkInfo.ts IAudio.ts IFileResultCallback.ts IAmbientLight.ts IMagnetometer.ts IUpdate.ts IBarometer.ts IManagement.ts ICapabilities.ts ICompression.ts IAlarm.ts ILinkedIn.ts IFacebook.ts ISecurity.ts ICrypto.ts INetworkNaming.ts IXML.ts IRSS.ts IOCR.ts IDatabaseResultCallback.ts ITelephony.ts IProximity.ts ITimer.ts IOpenId.ts IDevice.ts INotification.ts IDesktop.ts IBrowser.ts IImaging.ts IRuntime.ts IAds.ts IButtonListener.ts IFileSystem.ts IServiceResultCallback.ts IStore.ts IAccelerationListener.ts IMessagingCallback.ts IDataStream.ts IMap.ts IAcceleration.ts INotificationLocal.ts ICamera.ts IBarcode.ts INFC.ts INetworkStatus.ts ISettings.ts IQRCode.ts IDatabase.ts IService.ts ICalendar.ts IVibration.ts IGooglePlus.ts IFileDataStoreResultCallback.ts IGeolocation.ts INetworkReachability.ts IContactResultCallback.ts IGeolocationListener.ts IContact.ts ILogging.ts IUI.ts IMessaging.ts ILifecycle.ts IGyroscope.ts IMail.ts IOAuth.ts ITwitter.ts ISecurityResultCallback.ts IOS.ts INetworkStatusListener.ts IGlobalization.ts IDatabaseTableResultCallback.ts IBluetooth.ts IVideo.ts ILifecycleListener.ts IFileListResultCallback.ts IPrinting.ts ISocket.ts IAnalytics.ts APIBean.ts Service.ts ContactProfessionalInfo.ts Contact.ts DatabaseColumn.ts ServiceHeader.ts ServiceRequest.ts EmailAttachmentData.ts ContactTag.ts DatabaseRow.ts ContactAddress.ts Acceleration.ts Locale.ts ContactPersonalInfo.ts ContactSocial.ts Email.ts ServiceSession.ts KeyPair.ts APIRequest.ts ContactEmail.ts Database.ts SecureKeyPair.ts Button.ts OSInfo.ts EmailAddress.ts ContactUid.ts FileDescriptor.ts DeviceInfo.ts Lifecycle.ts DatabaseTable.ts Geolocation.ts ServiceCookie.ts ContactPhone.ts ServiceResponse.ts ContactWebsite.ts ServiceEndpoint.ts
