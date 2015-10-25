#!/bin/sh

echo "Removing the previous documentation..."
rm -rf ./public/doc_models/*

echo "Generating the new documentation..."
apidoc -i ./API/controllers -o ./public/doc_models/api_doc -c ./apidoc_jsons/models/

apidoc -i ./oauth/controllers -o ./public/doc_auth/api_doc -c ./apidoc_jsons/auth/

echo "Done."
