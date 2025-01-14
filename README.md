# RespTable

## Installing example via npm in root folder
```
npm install
npm run build
```
## Check for needed folder in example

Check for folder ```examples/react-example/src/compiled-files-here/```
If missing just create this folder. It is necessary for the example compilation!
```
mkdir xamples/react-example/src/compiled-files-here
```

## Copy files from new dist folder to example
```
cp dist/* examples/react-example/src/compiled-files-here/
```
## Build the example
```
cd examples/react-example/src/

npm install
```
## Start the example
```
npm start
```
## Access the example

Default port on localhost is 3000.