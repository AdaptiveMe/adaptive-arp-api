# Adaptiveware Core Interfaces (Objective-C)

##### This repository contains the Adaptiveware Core Interfaces for the Objective-C (iOS) language. 

The code in this repository is sourced and generated semi-automatically from [here](https://github.com/Adaptiveware/adaptiveware-core-interfaces-java). These interfaces and implementation are staging code for device specific implementations.

===

## Introduction

Adaptiveware interfaces are defined in Java and transliterated to the different language domains that the platform provides. The goal of this is to ensure that all interfaces are in-sync with what's being done on the Java platform - specific implementations of these interfaces are implemented in the conventional way… using software engineering skill.

## Drive It!

The code generation from Java to Objective-C is done using [j2objc](https://code.google.com/p/j2objc/) licensed under Apache Public License v2.0. This directory contains the tool-set used for the translation along with a Makefile to facilitate the regeneration of bindings. 

Steps to generate and compile the code:

1. If you're not on a Mac OSX, stop here. Otherwise, goto 2.
2. Run './configure.sh'.
3. Run 'make generate' to create the Objective-C code.
	* *The make script automatically checks out the latest release version of the Java code.*
4. If the code was generated, you should have a new directory at "../adaptiveware-".
5. Run 'make compile' to compile the generated code.
6. That's all folks! You should have .o in the "../adaptiveware-" directory.

You can clean-up all generated artefacts using:

* Run 'make clean' and 'make cleanall' to clean-up.
* After running 'make cleanall' you'll have to start with the aforementioned point 2. 

## Contribute & Contact
* **Issue tracking:** [https://community.adaptiveware.org/jira](https://community.adaptiveware.org/jira)
* **Documentation:** [https://community.adaptiveware.org/wiki](https://community.adaptiveware.org/wiki)
* **Author:** [Carlos Lozano Diez](mailto:carlos@adaptiveware.eu)
* **Say "hi!" to me** on [LinkedIn](https://www.linkedin.com/in/clozano) ! ;-)

## License

This project is licensed under the [**Mozilla Public License, v2.0**](http://mozilla.org/MPL/2.0/).


```
Copyright (c) 2013 Carlos Lozano Diez <carlos@adaptiveware.eu> t/a Adaptiveware.

This Source Code Form is subject to the terms of the Mozilla Public License, v. 
2.0. If a copy of the MPL was not distributed with this file, You can obtain one
at http://mozilla.org/MPL/2.0/.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the  conditions  of the  Mozilla Public License, v. 
2.0 are met.

THIS SOFTWARE IS PROVIDED BY THE  COPYRIGHT HOLDERS  AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS  OR IMPLIED WARRANTIES, INCLUDING, BUT  NOT LIMITED TO,   THE IMPLIED
WARRANTIES   OF  MERCHANTABILITY   AND   FITNESS   FOR A PARTICULAR  PURPOSE  ARE
DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
SHALL THE  COPYRIGHT OWNER  OR  CONTRIBUTORS  BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL,  SPECIAL,   EXEMPLARY,  OR CONSEQUENTIAL DAMAGES  (INCLUDING, BUT NOT
LIMITED TO,  PROCUREMENT OF SUBSTITUTE  GOODS OR SERVICES;  LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING  IN  ANY WAY OUT  OF THE USE  OF THIS  SOFTWARE,  EVEN  IF ADVISED OF THE 
POSSIBILITY OF SUCH DAMAGE.
```
