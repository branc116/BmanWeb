// module.exports = function(grunt) {
//     "use strict";

//     grunt.initConfig({
//         ts: {
//             app: {
//                 files: [{
//                     src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
//                     dest: "."
//                 }],
//                 options: {
//                     module: "commonjs",
//                     noLib: true,
//                     target: "es6",
//                     sourceMap: true
//                 }
//             }
//         },
//         tslint: {
//             options: {
//                 configuration: "tslint.json"

//             },
//             files: {
//                 src: ["src/\*\*/\*.ts"]
//             }
//         },
//         watch: {
//             ts: {
//                 files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
//                 tasks: ["ts", "tslint"]
//             }
//         },
//     });

//     // grunt.loadNpmTasks("grunt-contrib-watch");
//     // grunt.loadNpmTasks("grunt-ts");
//     // grunt.loadNpmTasks("grunt-tslint");

//     // grunt.registerTask("default", [
//     //     "ts",
//     //     "tslint"
//     // ]);

// };
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        ts: {
            app: {
                files: [{
                    src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
                    dest: "./out"
                }],
                options: {
                    module: "commonjs",
                    noLib: false,
                    target: "es5",
                    sourceMap: true,
                    rootDir: "./src",
                    lib: [
                        "es6", "dom"
                    ],
                }
            },
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './out/**/*.js',
                dest: './build/<%= pkg.name %>.min.js'
            }
        },
        tslint: {
            options: {
                configuration: "tslint.json"
            },
            files: {
                src: ["src/\*\*/\*.ts"]
            }
        },
        watch: {
            ts: {
                files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
                tasks: ["ts", "tslint"]
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-watch");
    // Default task(s).
    grunt.registerTask('default', ["ts",
        "tslint",
        'uglify'
    ]);

};