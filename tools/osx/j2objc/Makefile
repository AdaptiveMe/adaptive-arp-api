include config.make

# Environment
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_51.jdk/Contents/Home

# Source repository
ADAPTIVE_JAVA_GIT_REPO = https://github.com/AdaptiveMe/adaptive-arp-api.git
ADAPTIVE_JAVA_DIR = tmp
ADAPTIVE_JAVA_SOURCE = $(ADAPTIVE_JAVA_DIR)/README
ADAPTIVE_JAVA_GIT = @cd $(ADAPTIVE_JAVA_DIR) && git
ADAPTIVE_JAVA_FILELIST = $(prefix)/filelist.j
ADAPTIVE_JAVA_BRANCH = master
ADAPTIVE_LASTLOG = $(prefix)/lastlogmessage
SOURCE_DIR = ../../../adaptive-arp-api-java/arp-api-specs/src/main/java
BUILD_DIR = tmp.out
SOURCE_PREFIXES = standard.prefixes

# Pretty Printing
SB=\033[1m
EB=\033[m

# J2OBJC toold directory & executables
# J2OBJC_VERSION = 0.9.3
J2OBJC_DISTRIBUTION = $(prefix)/j2objc
J2OBJC = $(J2OBJC_DISTRIBUTION)/j2objc
J2OBJCC = $(J2OBJC_DISTRIBUTION)/j2objcc

clean: 
	@echo "$(SB)Cleaning.$(EB)"
	@rm -rf $(ADAPTIVE_JAVA_DIR)
	@rm -rf $(ADAPTIVE_JAVA_FILELIST)
	@rm -rf $(BUILD_DIR)
	@rm -rf $(SOURCE_PREFIXES)
	@echo "$(SB)Cleaning done.$(EB)"

cleanall: clean
	@rm config.make
	@echo "$(SB)Squeaky clean!$(EB)"

generate: clean $(BUILD_DIR)
	@echo -e "$(SB)Generating Java sources file list.$(EB)"
	@find $(SOURCE_DIR) -name *.java > $(ADAPTIVE_JAVA_FILELIST)
	@echo -e "$(SB)Generating Java sources file list -> OK.$(EB)"
	@echo "$(SB)Translating Java sources to Objective-C sources.$(EB)"
	@if [ `cat $(ADAPTIVE_JAVA_FILELIST) | wc -l` -ge 1 ] ; then \
		$(J2OBJC) -t --prefixes standard.prefix -use-arc --no-package-directories -sourcepath $(SOURCE_DIR) -d $(BUILD_DIR) \
		`cat $(ADAPTIVE_JAVA_FILELIST)` ; \
	fi
	@echo "$(SB)Translating Java sources to Objective-C sources -> OK.$(EB)"
	@rm -rf $(ADAPTIVE_JAVA_DIR)
	@echo "$(SB)Applying license headers.$(EB)"
	@find $(BUILD_DIR) -name *.m -exec ./header.sh {} \;
	@find $(BUILD_DIR) -name *.h -exec ./header.sh {} \;
	@echo "$(SB)Applying license headers -> OK.$(EB)"
	@cp -f $(BUILD_DIR)/* $(prefix)/../../../adaptive-arp-api-objc/adaptive-arp-api-objc/ARP

$(BUILD_DIR):
	@echo "$(SB)Creating build directory.$(EB)"
	@mkdir $(BUILD_DIR)

compile: generate
	@echo -e "$(SB)Compiling Objective-C sources.$(EB)"
	@find $(BUILD_DIR) -name *.m -exec ./compile.sh {} $(J2OBJCC) $(BUILD_DIR) \;
	@echo -e "$(SB)Compiling Objective-C sources -> OK.$(EB)"
