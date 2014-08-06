echo prefix=`pwd` > config.make

if [ ! -d "j2objc" ]; then
    wget https://github.com/google/j2objc/releases/download/0.9.3/j2objc-0.9.3.zip
    unzip j2objc-0.9.3.zip
    rm -f j2objc-0.9.3.zip
    mv j2objc-0.9.3 j2objc
fi
