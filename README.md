# Evolve

## 玩

https://pmotschmann.github.io/Evolve/

## 关于

一个关于将文明从原始的软泥演化成太空帝国的渐进游戏。Evolve将点击器的元素与惰轮结合在一起，并具有大量的微观管理。

你会进化成什么？


## 贡献语言文件
如果您有兴趣为Evolve开发一种新语言，则该过程相当简单（尽管有些乏味）。

制作一份strings / strings.json的副本，并将副本命名为strings / strings。<locale> .json（例如：strings.es_US.json）。语言环境格式是语言alpha-2代码和国家/地区alpha-2代码。

字符串以json格式存储，如下所示：
```
"job_farmer_desc": "Farmers create food to feed your population. Each farmer generates %0 food per second.",
```
如果您不熟悉json，则第一部分是密钥，并且无法更改，请勿以任何方式翻译或修改密钥。第二部分是要翻译的字符串。许多游戏字符串都使用标记（％0，％1，％2等）来表示游戏值，因此，这些标记必须保留在最终转换后的字符串中。它们的位置可以相应地移动，数字代表一个特定的值，而不是它在字符串中的位置。

要在游戏中启用语言翻译，您必须将其添加到locale.js（文件底部）的locales常量中。

一旦您感觉到翻译文件已准备就绪，就将拉取请求发送到Evolve主分支。

## 为游戏做贡献
错误修复，其他翻译，主题或UI改进可以简单地作为请求请求提交。一经审核并接受，它们将合并到主要游戏分支中。
如果您想贡献一个新功能，那么它不能任意地使某件
事变得容易，而又不会使其他事情变得困难。如果您的新功能想法只是使游戏变得更简单，那么它将不会被接受。
## CSS Changes
Evolve使用LESS构建其CSS，您不能只编辑缩小的CSS文件。您必须改为编辑src / evolve.less，然后使用less编译器来重建CSS文件。
## 生成命令
假设您正确配置了构建环境，则可以使用以下脚本来构建游戏
```
npm run build // 构建游戏包
npm run dev // 在调试模式下构建游戏包
npm run less // 构建CSS文件
npm run wiki // 构建wiki包
npm run wiki-dev // 以调试模式构建wiki包
npm run wiki-less // 构建Wiki CSS文件
```
