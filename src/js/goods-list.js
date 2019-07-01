require(['./config'], () => {
    // 先引入config，让模块的短名称生效
    require(['header'], () => {
      // 就可以引入当前页面需要的别的模块了，只需要写短名称
    })
  })
  