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
SOURCE_DIR = $(ADAPTIVE_JAVA_DIR)/adaptive-arp-api-java/ARP/src
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

$(ADAPTIVE_JAVA_SOURCE):
	@echo -e "$(SB)Getting Java sources from GIT.$(EB)"
	@mkdir -p $(ADAPTIVE_JAVA_DIR)
	@git clone $(ADAPTIVE_JAVA_GIT_REPO) $(ADAPTIVE_JAVA_DIR)
	@echo -e "$(SB)Getting Java sources from GIT -> OK.$(EB)"
#	@find $(ADAPTIVE_JAVA_DIR) -type d -exec ./prefixhelper.sh {} $(ADAPTIVE_JAVA_DIR) $(SOURCE_PREFIXES) \;

fetch: $(ADAPTIVE_JAVA_SOURCE)
	@echo -e "$(SB)Changing branch to $(ADAPTIVE_JAVA_BRANCH).$(EB)"
	$(ADAPTIVE_JAVA_GIT) reset --hard
	$(ADAPTIVE_JAVA_GIT) checkout ${ADAPTIVE_JAVA_BRANCH}
	$(ADAPTIVE_JAVA_GIT) pull origin
	@rm -rf $(ADAPTIVE_LASTLOG)
	$(ADAPTIVE_JAVA_GIT) log -1 --pretty=%B >> $(ADAPTIVE_LASTLOG)
	@echo -e "$(SB)Changing branch to $(ADAPTIVE_JAVA_BRANCH) -> OK.$(EB)"
	@echo -e "$(SB)Generating Java sources file list.$(EB)"
	@find $(ADAPTIVE_JAVA_DIR)/adaptive-arp-api-java/ARP/src -name *.java > $(ADAPTIVE_JAVA_FILELIST)
	@echo -e "$(SB)Generating Java sources file list -> OK.$(EB)"

generate: clean fetch $(BUILD_DIR)
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

$(BUILD_DIR):
	@echo "$(SB)Creating build directory.$(EB)"
	@mkdir $(BUILD_DIR)

compile: generate
	@echo -e "$(SB)Compiling Objective-C sources.$(EB)"
	@find $(BUILD_DIR) -name *.m -exec ./compile.sh {} $(J2OBJCC) $(BUILD_DIR) \;
	@echo -e "$(SB)Compiling Objective-C sources -> OK.$(EB)"
