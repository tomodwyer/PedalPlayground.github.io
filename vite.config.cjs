import { viteStaticCopy } from "vite-plugin-static-copy";

/**
 * @type {import('vite').UserConfig}
 */
const config = {
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
					dest: "assets/vendor",
				},
				{
					src: "node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js",
					dest: "assets/vendor",
				},
				{
					src: "node_modules/draggabilly/dist/draggabilly.pkgd.min.js",
					dest: "assets/vendor",
				},
				{
					src: "node_modules/jquery/dist/jquery.min.js",
					dest: "assets/vendor",
				},
				{
					src: "node_modules/select2/dist/js/select2.min.js",
					dest: "assets/vendor",
				},
			],
		}),
	],
};

export default config;
