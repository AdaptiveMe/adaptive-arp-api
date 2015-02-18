
# Adaptive Runtime Platform API 
[![Build Status](https://travis-ci.org/AdaptiveMe/adaptive-arp-api.svg?branch=master)](https://travis-ci.org/AdaptiveMe/adaptive-arp-api) [![GitHub tag](https://img.shields.io/github/tag/AdaptiveMe/adaptive-arp-api.svg)](https://github.com/AdaptiveMe/adaptive-arp-api) [![License](https://img.shields.io/badge/license-apache%202-blue.svg)](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE) [![ARP](https://img.shields.io/badge/arp-specs-lightgrey.svg)](#) [![adaptive.me](https://img.shields.io/badge/adaptive-me-orange.svg)](http://adaptive.me)
[![Adaptive Runtime Platform](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/gh-pages/assets/arp-logo.png)](#)
## Introduction

### About This Project
Five of the biggest challenges you will encounter in multi-platform development are:

1. to keep APIs coherent across all language domains and platforms, 
2. to propagate changes in APIs to all language domains and platforms coherently,
3. to reduce the latency between specification and implementation a minimum,
4. that APIs are well documented for and specific to all language domains, and, 
5. that APIs enforce the desired behaviour from the implementation as much as possible. 

There are obviously more challenges but one that clearly deserves specific mention is the rate of change of platform specific APIs – not to mention language syntax changes! We :heart: Swift.

To work mitigate these challenges to the maximum extent possible, we chose a nice, stable and tool-rich language – Java – to define and document the APIs that our platforms must support (**that's this project**) and, instead of embarking on the task of implementing those APIs in different languages and platforms by hand, we created a code generator to implement > 90% of the code for us. Our generator converts the Java API code defined in this project to the different languages our platforms must support along with the conversion of documentation tags for those languages. The general workflow is as follows:

[![Overview](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/gh-pages/assets/arp-summary.png?1)](#)

1. API specifications are agreed, implemented and documented in the Java language.
 - [x] The new API specification is tagged with a new version.
2. API specifications are pushed to this repository.
 - [x] The API specifications go through CI and on passing, the generator is notified.
3. The Generator is executed on the API specifications.
 - [x] **TypeScript** code and documentation is generated for hybrid-app **HTML5** applications.
 - [x] **TypeScript** code is compiled to **JavaScript**/**ECMAScript 5**.
 - [x] **Swift** code and documentation is generated for **iOS** and **OS X** platforms.
 - [x] **Java** code and documentation is generated for **Android** mobile, wear and tv platforms.
 - [x] **C#** code and documentation is generated for **Windows 10** platforms.
 - [x] Etc...
4. After generation, each platform repo contains skeleton classes with stub-methods to be implemented.
 - [x] On completing, the platform repo is tagged with the same version as the API specification.

### About Adaptive Runtime Platform

Hybrid apps are applications that are built using HTML5/CSS3/JavaScript web technologies and use a native "containers" to package the app to enable access to the native functionalities of a device. In essence, you can write a rich mobile/wearable/tv application using HTML and JavaScript and package that application as a native app for multiple mobile/wearable/tv platforms and distribute them on the different app stores and markets.

The Adaptive Runtime Platform (ARP) provides these native "containers" to package apps for the main mobile, wearable and desktop platforms... and other platforms as they emerge. Adaptive Runtime Platform (ARP) and sub-projects are open-source under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). The Adaptive Runtime Platform (ARP) project was created by [Carlos Lozano Diez](https://github.com/carloslozano) as part of the [adaptive.me](http://adaptive.me) set of products.

Please refer to the [project site](http://adaptiveme.github.io) for more information.

## Support and Contact

* If you're amending or proposing APIs, open an issue [here](https://github.com/AdaptiveMe/adaptive-arp-api/issues) with a **detailed** description. Also, in addition to opening the issue you send me a pull request with your amendment/proposal.
* If you're seeking help, head over to [StackOverflow](http://stackoverflow.com/) to ask your question and tag it as **adaptiveme** - I might not see the question if you don't tag it. 

## Work Backlog

#### Board: [![Stories in Ready](https://badge.waffle.io/AdaptiveMe/adaptive-arp-api.svg?label=ready&title=Ready)](https://waffle.io/AdaptiveMe/adaptive-arp-api)

[![Throughput Graph](https://graphs.waffle.io/adaptiveme/adaptive-arp-api/throughput.svg)](https://waffle.io/adaptiveme/adaptive-arp-api/metrics)

## Contributing

We'd *love to accept your patches and contributions to this project*.  There are a just a few small guidelines you need to follow to ensure that you and/or your company and our project are safeguarded from inadvertent copyright infringement. I know, this can be a pain but we want fair-play from the very start so that we're all on the same page. Please refer to the [project site](http://adaptiveme.github.io) for more information.

## Attributions

* Adaptive Runtime Platform (ARP) artwork by [Jennifer Lasso](https://github.com/Jlassob).
* Project badge artwork by [shields.io](http://shields.io/).
* All other logos are copyright of their respective owners.

## License
All the source code of the Adaptive Runtime Platform (ARP), including all Adaptive Runtime Platform (ARP) sub-projects curated by [Carlos Lozano Diez](https://github.com/carloslozano), are distributed, and must be contributed to, under the terms of the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). The [license](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE) is included in this [repository](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE).

Forged with :heart: in Barcelona, Catalonia · © 2013 - 2015 [adaptive.me](http://adaptive.me) / [Carlos Lozano Diez](http://google.com/+CarlosLozano).
