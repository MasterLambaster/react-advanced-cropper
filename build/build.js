const fs = require('fs');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

if (!fs.existsSync('./dist/themes/')) {
	fs.mkdirSync('./dist/themes/');
}

const themes = ['compact', 'classic', 'bubble'];

themes.forEach((theme) => {
	const result = sass.renderSync({ file: `./src/themes/${theme}.scss` });
	const css = result.css;

	postcss([autoprefixer])
		.process(css)
		.then((result) => {
			result.warnings().forEach((warn) => {
				console.warn(warn.toString());
			});
			fs.writeFileSync(`./dist/themes/${theme}.css`, result.css);
		});

	fs.copyFileSync(`./src/themes/${theme}.scss`, `./dist/themes/${theme}.scss`);
});
