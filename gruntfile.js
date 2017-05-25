module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            build: {
                files: [{
                        expand: true,
                        cwd: "./public",
                        src: ["**"],
                        dest: "./dist/public"
                    },
                    {
                        expand: true,
                        cwd: "./views",
                        src: ["**"],
                        dest: "./dist/views"
                    }
                ]
            }
        },
        ts: {
            app: {
                files: [{
                    src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/public_files/\*\*/\*.ts"],
                    dest: "./dist"
                }],
                options: {
                    experimentalDecorators: true,
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false
                }
            },
            public: {
                files: [{
                    src: ["src/public_files/js/\*\*/\*.ts"],
                    dest: "./dist/public/js"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false
                }
            }
        },
        watch: {
            ts: {
                files: ["src/\*\*/\*.ts"],
                tasks: ["ts:app"]
            },
            public_ts: {
                files: ["src/public_files/js/\*\*/\*.ts"],
                tasks: ["ts:public"]
            },
            views: {
                files: ["views/**/*.pug"],
                tasks: ["copy"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask("default", [
        "copy",
        "ts:app",
        "ts:public"
    ]);

};