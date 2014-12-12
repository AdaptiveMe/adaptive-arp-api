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

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

/**
   Structure representing a remote or local service access end-point.

   @author Aryslan
   @since ARP1.0
   @version 1.0
*/
public class ServiceEndpoint : APIBean {

     /**
        The remote service host (alias or IP).
     */
     var host : String?
     /**
        The remote service path (to be added to the host and port url).
     */
     var path : String?
     /**
        The remote service accessible port.
     */
     var port : Int?
     /**
        The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
     */
     var proxy : String?
     /**
        The remote service scheme.
     */
     var scheme : String?

     /**
        Default Constructor

        @since ARP1.0
     */
     public override init() {
          super.init()
     }

     /**
        Constructor with parameters

        @param host   Remote service host
        @param path   Remote service Path
        @param port   Remote service Port
        @param proxy  Proxy url "http://<IP>:<Port>"
        @param scheme Remote service scheme
        @since ARP1.0
     */
     public init(host: String, path: String, port: Int, proxy: String, scheme: String) {
          super.init()
          self.host = host
          self.path = path
          self.port = port
          self.proxy = proxy
          self.scheme = scheme
     }

     /**
        Returns the Remote service host

        @return Remote service host
        @since ARP1.0
     */
     public func getHost() -> String? {
          return self.host
     }

     /**
        Set the Remote service host

        @param host Remote service host
        @since ARP1.0
     */
     public func setHost(host: String) {
          self.host = host
     }

     /**
        Returns the Remote service Path

        @return Remote service Path
        @since ARP1.0
     */
     public func getPath() -> String? {
          return self.path
     }

     /**
        Set the Remote service Path

        @param path Remote service Path
        @since ARP1.0
     */
     public func setPath(path: String) {
          self.path = path
     }

     /**
        Returns the Remote service Port

        @return Remote service Port
        @since ARP1.0
     */
     public func getPort() -> Int? {
          return self.port
     }

     /**
        Set the Remote service Port

        @param port Remote service Port
        @since ARP1.0
     */
     public func setPort(port: Int) {
          self.port = port
     }

     /**
        Return the Proxy url

        @return Proxy url
        @since ARP1.0
     */
     public func getProxy() -> String? {
          return self.proxy
     }

     /**
        Set the Proxy url

        @param proxy Proxy url
        @since ARP1.0
     */
     public func setProxy(proxy: String) {
          self.proxy = proxy
     }

     /**
        Returns the Remote service scheme

        @return Remote service scheme
        @since ARP1.0
     */
     public func getScheme() -> String? {
          return self.scheme
     }

     /**
        Set the Remote service scheme

        @param scheme Remote service scheme
        @since ARP1.0
     */
     public func setScheme(scheme: String) {
          self.scheme = scheme
     }


}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/