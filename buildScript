#!/bin/bash

npm install
npm run build
cp dist/* examples/react-example/src/compiled-files-here
cd examples/react-example/src/
npm install
npm start

#npm start &

#NPM_PID=$!

#sleep 3

#echo "Restarting the application"

#kill $NPM_PID

#sleep 1

#npm start
