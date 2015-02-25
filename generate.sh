#!/bin/bash
HOME_DIR=`pwd`

if [ "$TRAVIS_PULL_REQUEST" = "false" ]
then
    echo "Forged with ♥ in Barcelona · © 2013 - 2015 adaptive.me / Carlos Lozano Diez."
    echo
    API_VERSION=`git describe --abbrev=0`

    rm -rf $HOME_DIR/generate
    mkdir -p $HOME_DIR/generate
    cd $HOME_DIR/generate

    git clone --depth 1 https://carloslozano:$GITHUB_TOKEN@github.com/AdaptiveMe/adaptive-arp-tools.git

    echo $HOME_DIR
    echo $API_VERSION
    rm -rf $HOME_DIR/generate
fi

exit 0