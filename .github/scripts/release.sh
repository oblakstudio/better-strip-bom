#!/bin/bash

NEXT_VERSION=$1
CURRENT_VERSION=$(npm pkg get version | sed 's/"//g')

sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEXT_VERSION\"/g" ./package.json

rm -f /tmp/release.zip > /dev/null 2>&1
zip -r /tmp/release.zip ./bin ./dist ./package.json ./package-lock.json ./README.md ./CHANGELOG.md
