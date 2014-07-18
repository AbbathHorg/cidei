module.exports= function(grunt){
	grunt.initConfig({
		compass : {
			dist : {
				options : {
					sassDir : "dev/css/sass",
					cssDir : "dist/css",
					environment : "production"
				}
			},
			dev : {
				options : {
					sassDir : "dev/css/sass",
					cssDir : "dev/css/stylesheets"
				}				
			}
		},
		jsdoc : {
			dist : {
				src : ['dist/js/*.js', '*.js'],
				options : {
					destination : 'docs'
				}
			}
		},
		jshint : {
			options : {
				curly : true,
				eqeqeq : true,
				eqnull :true,
				indent : 4,
				browser : true,
				globals : {
					JQuery : true
				}
			},
			files : {
				src : ['dist/js/pedidos.js', '*.js']
			}
		},
		htmlhint : {
			html1 : {
				options : {
					'tag-pair' : true,
					'doctype-first' : true,
					'id-unique' : true,
					'tag-self-close' : true
				},
				src : ['*.html']
			}
		},
	});
	//Registro de modulo a utilizar
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-htmlhint');
	//Registro de tarea
	grunt.registerTask("default", ["compass", "jsdoc", "jshint", "htmlhint"]);
	grunt.registerTask("docs", ["jsdoc:dist"]);
	grunt.registerTask("testjshint", ["jshint"]);
	grunt.registerTask("testhtmlhint", ["htmlhint"]);
};