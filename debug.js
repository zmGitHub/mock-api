require('babel-register');
require('babel-polyfill');

const path = require('path');
const babelCliDir = require('babel-cli/lib/babel/dir');

babelCliDir({
	retainLines: true,
	sourceMaps: true,
});

try {
	require(path.join(__dirname, 'src'));
} catch (e) {
	if (e && e.code === 'MODULE_NOT_FOUND') {
		console.log('>>> [DEBUG]:找不到模块');
		process.exit(1);
	}
	console.log('>>> [DEBUG]: App 启动失败'.red, e);
	process.exit(1);
}

console.log('>>> [DEBUG]: App 启用调试模式');
