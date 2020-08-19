#!/bin/bash
# Install kaskadi-cli
npm i kaskadi-cli
# Init
./node_modules/.bin/kaskadi init api
npm rm kaskadi-cli
# Commit files
if [ "$GITHUB_ACTOR" == "alexlemaire" ]
then
  USERNAME="Alexis Lemaire"
  EMAIL="a.lemaire@klimapartner.de"
elif [ "$GITHUB_ACTOR" == "Holger-Will" ]
then
  USERNAME="Holger Will"
  EMAIL="h.will@klimapartner.de"
fi
git config --global user.name "$USERNAME"
git config --global user.email "$EMAIL"
git rm .github/workflows/init.yml
git rm .github/workflows/scripts/init.sh
git commit -am "Initialized repository with correct naming"
git push
