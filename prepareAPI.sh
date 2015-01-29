#!/bin/bash
HOME_DIR=`pwd`

echo "Forged with ♥ in Barcelona · © 2013 - 2015 adaptive.me / Carlos Lozano Diez."
echo
API_VERSION=`git describe --abbrev=0`
API_VERSION_NEW=`echo $API_VERSION | awk -F. -v OFS=. 'NF==1{print ++$NF}; NF>1{if(length($NF+1)>length($NF))$(NF-1)++; $NF=sprintf("%0*d", length($NF), ($NF+1)%(10^length($NF))); print}'`
echo "Current tag: "$API_VERSION
echo "    New tag: "$API_VERSION_NEW
echo
read -p "Are you sure? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Please drop tag manually."
    exit 1
fi

git add --all
git commit -m 'API '$API_VERSION_NEW' Specification'
git tag -a $API_VERSION_NEW -m 'API '$API_VERSION_NEW' Specification'
git push origin --tags
