#
# =| ADAPTIVE RUNTIME PLATFORM |=======================================================================================
#
# (C) Copyright 2013-2014 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with*
# the License. You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
# an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
# specific language governing permissions and limitations under the License.
#
# Original author:
#
#     * Carlos Lozano Diez
#                 <http://github.com/carloslozano>
#                 <http://twitter.com/adaptivecoder>
#                 <mailto:carlos@adaptive.me>
#
# Contributors:
#
#     *
#
# =====================================================================================================================
#

Pod::Spec.new do |s|
s.name             = "adaptive-arp-api-swift"
s.version          = "1.0.7"
s.summary          = "The Adaptive Runtime Platform (ARP) provides native “containers” for Hybrid Apps"
s.description	   = "The Adaptive Runtime Platform (ARP) provides these native “containers” for the main mobile and desktop platforms so that Hybrid apps can be compiled and deployed on a multiplicity of devices leveraging the same code developed using modern web technologies."
s.homepage         = "https://github.com/AdaptiveMe/adaptive-arp-api"
s.license          = { 
			:type => 'Apache 2.0 License', 
			:file => 'LICENSE' 
		     }
s.author           = { 
			"Carlos Lozano" => "carlos@adaptive.me" 
		     }
s.source           = { 
			:git => "https://github.com/AdaptiveMe/adaptive-arp-api.git", 
			:branch => "master" 
		     }
s.social_media_url = 'https://twitter.com/adaptivecoder'
s.platform         = :ios, '8.0'
s.requires_arc     = true
s.source_files     = 'adaptive-arp-api-swift/ARP/*.swift'
end
