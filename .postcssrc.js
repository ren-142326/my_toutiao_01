//  postCss的配置文件，
module.exports = {
  //  配置要使用的post Css 插件，
  plugins: {
    //  配置使用autoprefixer插件，
    //  作用是使用生成Css样式规则前缀，
    //  vue.cli已经内置了这样的配置和插件，
    //  在这又配置的话就冲突了，

    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    //  配置使用postcss-pxtorem 插件，
    //  作用，把px转换为rem,

    'postcss-pxtorem': {
      //  配置根元素的值，
      //  使用  [lib-flexible] 来设置 rem 基准值
      //  lib-flexible 的设置方式为把一行分隔为10等分 ，也就是每一列占总宽度的1/10
      //  比如设计稿宽750px,每一列就是75px,
      //  vant默认的宽度为37.5如果需要使用750的设计稿来进行开发就需要把所有的宽度数据 /2 才行，
      //  但是太麻烦，在这就直接使用配置文件rootValue可以接收函数来进行自动化处理，
      //  如果是 Vant 的样式，就把 `rootValue` 设置为 37.5 来转换
      //  如果是我们的样式，就按照 75 的 `rootValue` 来转换
      //  `rootValue` 支持两种参数类型：
      //  数字：固定值
      //  函数：动态计算返回
      //  postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
      //  它会把被处理的 CSS 文件相关的信息通过参数传递给该函数
      //  解构参数，直接获取css文件的完整路径，
      rootValue({ file }) {
        //  判断路径内是否含有vant字段，如果有就表示使用的vant组件的样式，就把 `rootValue` 设置为 37.5
        //  如果没有找到这个字段，就表示这不是使用的vant字段的样式文件，这时候就需要设置rootValue的值为75
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      //  配置要转换的css属性，
      //  * 表示所有，
      propList: ['*']
    }
  }
}
