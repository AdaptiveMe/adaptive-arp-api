//
//  PGPDataExtension.swift
//  SwiftPGP
//
//  Created by Marcin Krzyzanowski on 05/07/14.
//  Copyright (c) 2014 Marcin Krzyzanowski. All rights reserved.
//

import Foundation

extension NSMutableData {
    
    /** Convenient way to append bytes */
    internal func appendBytes(arrayOfBytes: [Byte]) {
        self.appendBytes(arrayOfBytes, length: arrayOfBytes.count)
    }
    
}

extension NSData {

    public func checksum() -> UInt16 {
        var s:UInt32 = 0;
        
        var bytesArray = self.bytes();
        
        for (var i = 0; i < bytesArray.count; i++) {
            var b = bytesArray[i]
            s = s + UInt32(bytesArray[i])
        }
        s = s % 65536;
        return UInt16(s);
    }
    
    public func md5() -> NSData {
        return CryptoSwift.Hash.md5(self).calculate()
    }

    public func sha1() -> NSData {
        return CryptoSwift.Hash.sha1(self).calculate()
    }

    public func sha224() -> NSData {
        return CryptoSwift.Hash.sha224(self).calculate()
    }

    public func sha256() -> NSData {
        return CryptoSwift.Hash.sha256(self).calculate()
    }

    public func sha384() -> NSData {
        return CryptoSwift.Hash.sha384(self).calculate()
    }

    public func sha512() -> NSData {
        return CryptoSwift.Hash.sha512(self).calculate()
    }

    public func crc32() -> NSData {
        return CryptoSwift.Hash.crc32(self).calculate()
    }

    public func encrypt(cipher: Cipher) -> NSData? {
        return cipher.encrypt(self)
    }

    public func decrypt(cipher: Cipher) -> NSData? {
        return cipher.decrypt(self)
    }
    
    public func authenticate(authenticator: Authenticator) -> NSData? {
        return authenticator.authenticate(self)
    }
}

extension NSData {
    
    public var hexString: String {
        return self.toHexString()
    }

    func toHexString() -> String {
        let count = self.length / sizeof(Byte)
        var bytesArray = [Byte](count: count, repeatedValue: 0)
        self.getBytes(&bytesArray, length:count * sizeof(Byte))
        
        var s:String = "";
        bytesArray.map({ (byte) -> () in
            var st: String = NSString(format:"%02X", byte)
            s = s + st
        })
        return s;
    }
    
    func bytes() -> [Byte] {
        let count = self.length / sizeof(Byte)
        var bytesArray = [Byte](count: count, repeatedValue: 0)
        self.getBytes(&bytesArray, length:count * sizeof(Byte))
        return bytesArray
    }
    
    class public func withBytes(bytes: [Byte]) -> NSData {
        return NSData(bytes: bytes, length: bytes.count)
    }
}

