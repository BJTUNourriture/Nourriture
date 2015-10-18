#!/bin/sh
/generateDoc.sh ; mv public/api_doc/index.html public/ ; cd public/ ; http-server ; cd ..
