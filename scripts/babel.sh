mkdir -p build
node_modules/babel-cli/bin/babel.js ./src/mapd-con-es6.js -o ./build/MapdCon.js
node_modules/babel-cli/bin/babel.js ./src/mapd-con-node-support.js -o ./build/MapdConNode.js
node_modules/babel-cli/bin/babel.js ./src/utils.js -o ./build/MapdConUtils.js