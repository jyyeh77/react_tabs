#!/usr/bin/env bash
# Ubuntu setup script

#################### YARN ######################

echo "Installing Yarn..."
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn

yarn init

################# WEBPACK CONFIG ################

echo "Configuring Webpack..."
yarn add webpack webpack-dev-server path
touch webpack.config.js

echo "Adding Babel..."

yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
touch .babelrc

echo "Installing Html-Webpack-Plugin to serve webpack bundle..."
yarn add html-webpack-plugin

echo "Installing React..."
yarn add react react-dom

echo "Making browser directory with root HTML..."
mkdir -p browser
touch browser/index.html


echo "Please edit the following files:"
echo "BABEL CONFIG   -> ./.babelrc"
echo "ROOT HTML      -> browser/index.html"
echo "WEBPACK CONFIG -> ./webpack.config.js"
