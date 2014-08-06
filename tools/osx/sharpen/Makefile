include config.make

SHARPEN=$(prefix)/sharpen.sh

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_51.jdk/Contents/Home

ADAPTIVEWARE_JAVA_GIT_REPO = https://github.com/AdaptiveMe/adaptive-arp-api.git
ADAPTIVEWARE_JAVA_DIR = tmp
ADAPTIVEWARE_JAVA_DIR_IN = tmp.in
ADAPTIVEWARE_JAVA_SOURCE = $(ADAPTIVEWARE_JAVA_DIR)/README
ADAPTIVEWARE_JAVA_GIT = @cd $(ADAPTIVEWARE_JAVA_DIR) && git
ADAPTIVEWARE_JAVA_BRANCH = master
ADAPTIVEWARE_LASTLOG = $(prefix)/lastlogmessage
ADAPTIVEWARE_NET_DIR = tmp.out
ADAPTIVEWARE_NET_GIT = @cd $(ADAPTIVEWARE_NET_DIR) && git
ADAPTIVEWARE_CLASSES=$(prefix)/bin
ADAPTIVEWARE_JAVA_FILELIST = filelist.j
SB=\033[1m
EB=\033[m

clean: 
	@echo "$(SB)Cleaning.$(EB)"
	@rm -rf $(ADAPTIVEWARE_NET_DIR)
	@rm -rf $(ADAPTIVEWARE_JAVA_DIR)
	@rm -rf $(ADAPTIVEWARE_JAVA_DIR_IN)
	@rm -rf $(ADAPTIVEWARE_CLASSES)
	@rm -rf $(ADAPTIVEWARE_JAVA_FILELIST)
	@echo "$(SB)Cleaning done.$(EB)"

cleanall: clean
	@rm -rf config.make
	@rm -rf sharpen-options
	@echo "$(SB)Squeaky clean!$(EB)"

$(ADAPTIVEWARE_JAVA_SOURCE):
	@echo -e "$(SB)Getting Java sources from GIT.$(EB)"
	@mkdir -p $(ADAPTIVEWARE_JAVA_DIR)
	@mkdir -p $(ADAPTIVEWARE_JAVA_DIR_IN)/src/main/java
	git clone $(ADAPTIVEWARE_JAVA_GIT_REPO) $(ADAPTIVEWARE_JAVA_DIR)
	@echo -e "$(SB)Getting Java sources from GIT -> OK.$(EB)"
	@cp -R $(ADAPTIVEWARE_JAVA_DIR)/adaptive-arp-api-java/ARP/src/me $(ADAPTIVEWARE_JAVA_DIR_IN)/src/main/java


fetch: $(ADAPTIVEWARE_JAVA_SOURCE)
	@echo -e "$(SB)Changing branch to $(ADAPTIVEWARE_JAVA_BRANCH).$(EB)"
	$(ADAPTIVEWARE_JAVA_GIT) reset --hard
	$(ADAPTIVEWARE_JAVA_GIT) checkout ${ADAPTIVEWARE_JAVA_BRANCH}
	$(ADAPTIVEWARE_JAVA_GIT) pull origin
	@rm -rf $(ADAPTIVEWARE_LASTLOG)
	$(ADAPTIVEWARE_JAVA_GIT) log -1 --pretty=%B >> $(ADAPTIVEWARE_LASTLOG)
	@echo -e "$(SB)Changing branch to $(ADAPTIVEWARE_JAVA_BRANCH) -> OK.$(EB)"

generate: clean fetch 
	@echo "$(SB)Translating Java sources to C# sources.$(EB)"
	@rm -rf $(ADAPTIVEWARE_NET_DIR)
	@mkdir -p $(ADAPTIVEWARE_CLASSES)
	@find $(ADAPTIVEWARE_JAVA_DIR_IN)/src/main/java -name *.java > $(ADAPTIVEWARE_JAVA_FILELIST)
	$(JAVA_HOME)/bin/javac @$(ADAPTIVEWARE_JAVA_FILELIST) -d $(ADAPTIVEWARE_CLASSES) -cp $(ADAPTIVEWARE_CLASSES)
	@echo -e "$(SB)Generating code for adaptiveware-core-interfaces-java (previous revision)$(EB)"
	$(SHARPEN) $(ADAPTIVEWARE_JAVA_DIR_IN)/src/main/ Project java sharpen-options $(ADAPTIVEWARE_NET_DIR) standard.header
	@rm -rf $(ADAPTIVEWARE_CLASSES)
	@rm -rf $(ADAPTIVEWARE_JAVA_DIR)
	@rm -rf $(ADAPTIVEWARE_JAVA_DIR_IN)
	@rm -rf $(ADAPTIVEWARE_JAVA_FILELIST)
	@echo "$(SB)Translating Java sources to C# sources -> OK.$(EB)"
	@cp -r $(ADAPTIVEWARE_NET_DIR)/Adaptive $(prefix)/../../../adaptive-arp-api-csharp/Adaptive.Arp.Api


