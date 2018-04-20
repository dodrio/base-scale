# base-scale

[![Dependency Status](https://img.shields.io/david/m31271n/base-scale.svg)](#)
[![DevDependency Status](https://img.shields.io/david/m31271n/base-scale.svg)](#)
[![NPM Downloads](https://img.shields.io/npm/dm/base-scale.svg)](#)

> Get maximum layout flexibility.

## Install

```
$ npm install base-scale
```

## Usage

### Webpack

```js
import { setup, px2rem } from 'base-scale';

// setup
setup(750);

// call px2rem
px2rem(200);
```

NOTE: `px2rem` must be called after setup.

## API

### `setup(blueprintWidth = 750, gridNumber = 100)`

* `blueprintWidth`: the width of blueprint in pixel.
* `gridNumber`: grid number.

### `px2rem(pixel)`

* `pixel`: length in pixel.

## Inspiration

* [Rem 布局的原理解析](http://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/)
* [移动端高清、多屏适配方案](http://div.io/topic/1092)
* [使用 Flexible 实现手淘 H5 页面的终端适配](https://github.com/amfe/article/issues/17)
* [移动端 Web App 自适应布局探索与总结](https://segmentfault.com/a/1190000003931773)
* [从网易与淘宝的 font-size 思考前端设计稿与工作流](https://www.cnblogs.com/lyzg/p/4877277.html)
