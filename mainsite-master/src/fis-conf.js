// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
// fis.config.set('modules.postpackager', 'simple');

// 取消下面的注释设置打包规则
// fis.config.set('pack', {
//     '/pkg/lib.js': [
//     ],
//     // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
//     // '/pkg/aio.css': '**.css'
// });

// 取消下面的注释可以开启simple对零散资源的自动合并
// fis.config.set('settings.postpackager.simple.autoCombine', true);

//项目排除掉_xxx.scss，这些属于框架文件，不用关心
fis.config.set('project.exclude', ['**/_*.scss','**/compass']);
//scss后缀的文件，用fis-parser-sass插件编译
fis.config.set('modules.parser.scss', 'sass');
//scss文件产出为css文件
fis.config.set('roadmap.ext.scss', 'css');