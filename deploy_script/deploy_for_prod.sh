#!/bin/sh

cd /var/www/nourriture.sylflo.fr/Nourriture
eval `ssh-agent`
ssh-add /var/lib/jenkins/.ssh/id_github
git checkout .
git pull

cd /var/www/nourriture.sylflo.fr/Nourriture/source/server
npm install

cd /var/www/nourriture.sylflo.fr/Nourriture/source/web
npm install
bower install
gulp build
sudo /etc/init.d/nginx  restart