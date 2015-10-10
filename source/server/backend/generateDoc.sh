#!/bin/sh

echo "Removing the previous documentation..."
rm -rf ./public/api_data.js
rm -rf ./public/api_data.json
rm -rf ./public/api_project.js
rm -rf ./public/api_project.json
rm -rf ./public/main.js
rm -rf ./public/img/
rm -rf ./public/locales/
rm -rf ./public/utils/
rm -rf ./public/api_doc/
rm -rf ./public/css/
rm -rf ./public/vendor/

echo "Generating the new documentation..."
apidoc -i ./API/controllers -o ./public/api_doc

echo "Reorganizing the files..."
mv ./public/api_doc/* ./public
mv ./public/index.html ./public/api_doc/

echo "Done."