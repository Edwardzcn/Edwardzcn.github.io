/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9b0f7d8709fa0fd4bf9d397cebc3168a"],["/archives/2018/01/index.html","9723eb848482f4702f5c54619bff5e27"],["/archives/2018/01/page/2/index.html","d4f0d1838d12e331fa6767cf4591fecb"],["/archives/2018/02/index.html","3e2ad822591c4f10eb61cd98d4ddcc11"],["/archives/2018/03/index.html","e7858b8687c99e77c070e1d7231f3630"],["/archives/2018/04/index.html","f2c8125ef2d95dd8465cca7f9b7e153c"],["/archives/2018/05/index.html","d3019ad354f370cea93d6b115002e08f"],["/archives/2018/06/index.html","543b47f3749800ee9191d3046f7bbc43"],["/archives/2018/07/index.html","b14a816d2fe94dbc6ac5331378e8b555"],["/archives/2018/07/page/2/index.html","abbf4da40851c0e63b071123e834ec93"],["/archives/2018/07/page/3/index.html","8f57479e0863856025379e23bd5daa5a"],["/archives/2018/08/index.html","ec8a07cfdb675b72a84e18761dab90a5"],["/archives/2018/08/page/2/index.html","2ff199cc9ae90f74bbd16cdf79a60ebc"],["/archives/2018/08/page/3/index.html","048b66f57b4f15e43f17a925f101b223"],["/archives/2018/08/page/4/index.html","3be67328d13a743c1d59360acd64bfa2"],["/archives/2018/08/page/5/index.html","cbe4c128749c6de2f60a3f576b00b638"],["/archives/2018/08/page/6/index.html","adf2785a859340321f4167b24e89bfcc"],["/archives/2018/09/index.html","e1bcf9e9b2806838112896298d0b256c"],["/archives/2018/10/index.html","cc5d8c7a52dedc53de2c920b7049fc71"],["/archives/2018/10/page/2/index.html","5b9bf9d5237ae49b5f8024d44658ffaa"],["/archives/2018/11/index.html","efd3e248a406648555c765bf01a6c02a"],["/archives/2018/11/page/2/index.html","c0d3d2496e984cbbe6101455a52eac82"],["/archives/2018/12/index.html","3de3b1b97635038c4ee5d9aeebfbe360"],["/archives/2018/index.html","1071c30aae4d915402c9e98035463532"],["/archives/2018/page/10/index.html","2dce7ef25074d0619c46941a36d24d4b"],["/archives/2018/page/11/index.html","4aa2ad291aec1b9d292c2bd63e304754"],["/archives/2018/page/12/index.html","da6fce83dc6cd1b9269d5d8e34965331"],["/archives/2018/page/13/index.html","ea1f67ccf23f9e067de388982af34171"],["/archives/2018/page/14/index.html","087e3d46952bbb51eb81d21385f724f4"],["/archives/2018/page/15/index.html","a46a27f358fda58904831ae08031ba89"],["/archives/2018/page/16/index.html","f834bc5885e291e06a8be600eb809c13"],["/archives/2018/page/17/index.html","5d8817d08506e88f7b30115fa3673ee8"],["/archives/2018/page/18/index.html","c1f27da433ea96a89d0a9785f4c659ee"],["/archives/2018/page/2/index.html","1a0f430f2441e830db4a096171cbe197"],["/archives/2018/page/3/index.html","678a4d2be0141c6550b849057a509039"],["/archives/2018/page/4/index.html","e2b3691e1940c86bfc0551c11722375f"],["/archives/2018/page/5/index.html","6ad09b4237b9a35fd093680034320620"],["/archives/2018/page/6/index.html","7fe861992d54ed85e0b196e0bab0aa9a"],["/archives/2018/page/7/index.html","b1a808bd6f60446c04f743a59bf15691"],["/archives/2018/page/8/index.html","7f61d2675b82fd71ec236c3e472f097d"],["/archives/2018/page/9/index.html","fda06ab1f77e3b2934546d8e6e51542c"],["/archives/2019/01/index.html","5e29a8bdaf50a7e2f4ed7a3204c38ed7"],["/archives/2019/02/index.html","bd3d93cde07d128ae5bffa3c0f3c9c55"],["/archives/2019/index.html","1b786a6c2d705cf1b9df63ea17fa3388"],["/archives/2019/page/2/index.html","2bbbcd5f3e60e392abbfa5989dd92a4b"],["/archives/index.html","b3d5fe3603efad05311d67a8177daa4c"],["/archives/page/10/index.html","40f5272d548a39f44534eb13d9f2076f"],["/archives/page/11/index.html","b90f23454c5d606f9e86db0428b2fbea"],["/archives/page/12/index.html","f5c537b0162d0d8fa46c8836d7b74d6e"],["/archives/page/13/index.html","ed2ec0b56d6c5fefb775f5866a54470d"],["/archives/page/14/index.html","294726428e79213b493afd6a977d4c20"],["/archives/page/15/index.html","6c4edf80bc1d20d650549d1b41eda7c4"],["/archives/page/16/index.html","459291c9c3c9b346336569a16ed7bd5c"],["/archives/page/17/index.html","2a0cfa331e23c317594dd6ce9de6db15"],["/archives/page/18/index.html","50f8ca7afa52c92b28d9669e5275a465"],["/archives/page/19/index.html","2a9c7c5d75cbc27bb0c2f3d5e7af33b3"],["/archives/page/2/index.html","c906bbeb9bb10c564048853faef2116b"],["/archives/page/20/index.html","683bc327a611e971ba578411fd11856b"],["/archives/page/3/index.html","0bb1d6552bbe63368bbd4da0bcf22ea9"],["/archives/page/4/index.html","638ef2edcdf171aea155603676ec80a1"],["/archives/page/5/index.html","a66e2b094096f14ec00203cfa1598c59"],["/archives/page/6/index.html","1fd8fd9824c07a08a4b1478c3c404d33"],["/archives/page/7/index.html","15898ecc6ada3f5630f84b76d4c37c11"],["/archives/page/8/index.html","6996df5bd53b1ba51e462bc0012777b5"],["/archives/page/9/index.html","9b198e19d1d97b01fdcde1af3b62c6e3"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","7eb049847e2293f062a0b311443cb55c"],["/baidu_verify_ZzhwBFUe1V.html","ec0bd7fa8cd8835d1641211db862d39a"],["/baidu_verify_dw73Nh8OEw.html","13e64a269ab7fb93e9ad353eb1bd49d9"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","f7719ac9490ffd664380e075288b03ba"],["/categories/数学建模/index.html","2a3842a6c9e9ed2d47333467af3a9f52"],["/categories/旅行/index.html","37b31ffcf14a3d6905f1f5ca6525af80"],["/categories/编程-PHP/index.html","ea11ff3104f34bdcef92efdb37361ee9"],["/categories/编程/ACM/index.html","52e9e9badf3ef9593392bfc823b60432"],["/categories/编程/ACM/page/10/index.html","ca37267ef624b12c3448c6d7ed7b1d37"],["/categories/编程/ACM/page/11/index.html","592e7928f0b21655b2f67662bdaad00b"],["/categories/编程/ACM/page/12/index.html","6b819f5cd99acca8598c7f1126c2fb92"],["/categories/编程/ACM/page/13/index.html","e01cdd2cc8c5b0a2c9cc17ac20cd599e"],["/categories/编程/ACM/page/14/index.html","041822700ba5ce9669d4bbd48271df5b"],["/categories/编程/ACM/page/2/index.html","e649a25c38529367a5dcadac91f35eda"],["/categories/编程/ACM/page/3/index.html","0f30fa18e5681c73f31579cb15275f63"],["/categories/编程/ACM/page/4/index.html","b8833515355b60a425c4bc475c4be17c"],["/categories/编程/ACM/page/5/index.html","5d7ef8166fd591971b14257bf0983c6e"],["/categories/编程/ACM/page/6/index.html","004a1d09fa3cdda18e0ab612655585d1"],["/categories/编程/ACM/page/7/index.html","892c10534256f576a5e34c6b82edb624"],["/categories/编程/ACM/page/8/index.html","5f4317bef2110daf41f604f5c54c3ff6"],["/categories/编程/ACM/page/9/index.html","024e725dd619408ad18fe9ec2fe03523"],["/categories/编程/C/index.html","1e2e9842ae92ec7b203f01863084a696"],["/categories/编程/Git/index.html","edfe107512bbd6c627137dc9b85bd600"],["/categories/编程/Python/index.html","a63112d91b70b614cb6ad91924e5387f"],["/categories/编程/index.html","7fb7c51d2a3547f5908a84ca0bd33cb4"],["/categories/编程/page/10/index.html","ee72919fcb9bbac5468f875352b72da7"],["/categories/编程/page/11/index.html","025bc995f0ece874e16d741f033be804"],["/categories/编程/page/12/index.html","530e85b4cf88941cbda9694117251cc8"],["/categories/编程/page/13/index.html","6ad8863ce1c279863a2a0b24ac1db39c"],["/categories/编程/page/14/index.html","8bc39bef63bec376e3f586d624e93892"],["/categories/编程/page/15/index.html","15e725a0c37d35ae1776f9cc3b9689bd"],["/categories/编程/page/16/index.html","02121373b158b0ed383bd33855e1f4be"],["/categories/编程/page/2/index.html","c8f18903770482316fae8b12bf31f724"],["/categories/编程/page/3/index.html","e6a874671b6a66ee97be78fe5087369f"],["/categories/编程/page/4/index.html","a790f5bec77f50457b2b698a238a8dfc"],["/categories/编程/page/5/index.html","67fdf64b9c386af335bb92143f7aae17"],["/categories/编程/page/6/index.html","bcec6b31eadebece1a07f9d75c16eda6"],["/categories/编程/page/7/index.html","6ededa545079a62d0216d799a2d9f92a"],["/categories/编程/page/8/index.html","ef586f3f5f322937e5e2e121c001da99"],["/categories/编程/page/9/index.html","1ac63d86f1b1b39551bedf90a25930d1"],["/categories/编程/密码技术/index.html","2c87924127a85900a858e40e17d51b11"],["/categories/编程/数据结构与算法/index.html","6ae8bfd1724134bfe3a1062900ea352c"],["/categories/编程/生产力工具/index.html","c827ac8d8db524b048d859a1a534d9e9"],["/categories/编程/编译原理/index.html","6ccd34316db91ac09a4df0729212aeb0"],["/categories/讲座/index.html","2538dd99ad347afb4100d4dcf57deef6"],["/categories/金融/index.html","e1bb5c55867b150e563aae052ff4bf25"],["/categories/金融/page/2/index.html","b4574478e4220408e88938920f4e5ceb"],["/categories/金融/微观经济学/index.html","84f08e7b0761fc60a382893ea0761657"],["/categories/金融/金融学/index.html","2674dfdbefe52be4bd94bb0bdee6d50e"],["/categories/阅读/index.html","c919aab79b4aa245d6ef45e973204bad"],["/categories/阅读/page/2/index.html","75c50955db930af423b1d12da06ab77d"],["/categories/随笔/index.html","d7755707e8a44b403be3781471711a1b"],["/css/main.css","7f813a0bb5e4f901365b20113a9ea864"],["/friendlink/index.html","7b4964e9eb21b1cbbf98bee39751b8e6"],["/googlea873f713657fb5dc.html","c176a36aada85be8e2bfcc37d93e72d6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","78aa0e00d5ae3a8a95afd57253b34f61"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","8b0a5618b0f14d590cdcb3ef90422e3e"],["/page/11/index.html","aa0c35f960620e08fb681be104c7fa61"],["/page/12/index.html","a3d97031ce2169e542a4d87cd6457949"],["/page/13/index.html","50c5710d6c200e036702da320d83c610"],["/page/14/index.html","baea79725919d554c2f9bf7f21e61427"],["/page/15/index.html","d7de9d83a9b37552df5590b4a33e9528"],["/page/16/index.html","1b36e1ad4c83a213e5d3d384396ade0b"],["/page/17/index.html","367e2ee6f003c2085a60fc8fe5e3fdb7"],["/page/18/index.html","2278056177eb502e7b9a84a7f1742d73"],["/page/19/index.html","458c74f625242300b75d7c7bf9758446"],["/page/2/index.html","7c040230d2153f1a5ecbb114795a79cb"],["/page/20/index.html","542ee0ebbc038d98e398003713ad36ce"],["/page/21/index.html","e429dde0ce96fa9fe7d9c76eefba79cd"],["/page/22/index.html","42fa7939cb318342daff28e9fc5a5f55"],["/page/23/index.html","daa7065a5054dddb055c23149ecbb17b"],["/page/24/index.html","0039056134838bcf4c2f1ca1fac752af"],["/page/25/index.html","f0b319c346f482db7a3b35f2c64e9b82"],["/page/26/index.html","07c39eee7436e322b665fdbf078f44b8"],["/page/27/index.html","261ca7df53fa63b8ac469a49fa9826a5"],["/page/28/index.html","6122b120dd053ed6c5c6cc99b4d62123"],["/page/29/index.html","5015533064a7461b0a577697e1d88e37"],["/page/3/index.html","3a5faf2fdd2d8338a85d22ec0b716887"],["/page/30/index.html","615d1c559684e1e4ba7b1fabab8008e3"],["/page/31/index.html","c3471f1e12ad2d1da5170f6bec498023"],["/page/32/index.html","5d0ed311144757c2e9e5d3091ffd065f"],["/page/33/index.html","ca6ff80006ee4534201f3d326235e0a0"],["/page/34/index.html","12cdbf951a3bf48b55f45e0a27352d12"],["/page/35/index.html","990d55f5f17e5e34d80aee2e19f66dae"],["/page/36/index.html","27da6b5ffb37064913f407a9c24b84b2"],["/page/37/index.html","903bb2ee458a8886e9574ab61bfd012e"],["/page/38/index.html","de2e7436ed5f2e7d607ef137494a97fd"],["/page/39/index.html","8bd2fe96569960fbb60c21847bf3ddb1"],["/page/4/index.html","b1e4a63b8b93545f0b58d8db586e8719"],["/page/40/index.html","20c528323c2efa62c9f5402b7734a8f4"],["/page/5/index.html","8fc316239586ec3e651c498022eac247"],["/page/6/index.html","414a5a8089f0eb48549033e4f98f495a"],["/page/7/index.html","5a35cb8906f4d18fa10c94b704477370"],["/page/8/index.html","485ef7512a51443ebdae365ccb36f83c"],["/page/9/index.html","17fd5fef4f57636009d3524269886af2"],["/post/104a4c5d.html","44ae7f32cd30219c1b32bbd2337e8df9"],["/post/109aa3c8.html","5b2b1c1f1f76e4d90a4bd1439bea16ab"],["/post/11246bdd.html","ba59f154c82338a2f80d607fface6289"],["/post/1233e925.html","8e3e86da587a66efe983965de012b6d9"],["/post/1448d9c8.html","53027b9fd20012f249a71558fb580512"],["/post/15db1cd9.html","6fb9c45c9776411506bc175f2a25af39"],["/post/16b5efde.html","83f2f44da7580e5097568b4c808bf847"],["/post/16fa37a4.html","18f6ab057789e6ab0ee6cb8eaa886b03"],["/post/184fc5c7.html","1ff9983fd2527a5b8effd5eca3f989fe"],["/post/19e79191.html","da71fc8b07080f1db097e0be4fadb73c"],["/post/1b7db6f0.html","c244c3404a625a8f2554dcafcca2e2f2"],["/post/1c52564f.html","68832bb0cf82c9f63bd7947d90c0c9e4"],["/post/1dc46f40.html","ab46b4f461d15d78f5f3c54f00b6f30b"],["/post/1eeab2ee.html","02580bb17011655e69a2f98d2c4b8c75"],["/post/222505fd.html","5a47ec185efa259e684400064e0b0ab6"],["/post/22b5b237.html","10e87d789bc3f68750c993a8323d084d"],["/post/23f72a93.html","a2f3cb49fae39881b66ceee0145b24e9"],["/post/264a9c89.html","b620795dfa6dea8af0e2cc3e86a7ede0"],["/post/265c0f5.html","05486de6092b328163778b5c16edb67e"],["/post/26fa4dfc.html","0e9adb4c8c1c169d2788270d2843a59c"],["/post/273ced06.html","b28ff84384abd70369d2ad320a8e5d1d"],["/post/280fbdcb.html","4a861f05b798d15abe592ddeb745c97e"],["/post/2ee4d523.html","89aa56642d22fbb78399dc4ce0155e2f"],["/post/3090aa13.html","ec92aac4dd05621b281d9b8cc7254f68"],["/post/31a770a5.html","603f172754e19c05f103b006a856b6b6"],["/post/31f89579.html","c27ae5141ec1fdf2208919f74bb8ce9e"],["/post/32dc51f4.html","d48f741dfbc8788104285b7ef8bb03bf"],["/post/34a049ac.html","d1295f0d69a2cccc6753f0a58abb5a2d"],["/post/34f53a10.html","142f4ca9e79cd8391f255c26c0629dfb"],["/post/36bef409.html","9bd077ba65e64b726f52c9131e629cb7"],["/post/36e5881d.html","f878873ea275b57b80a986333338446e"],["/post/380486cb.html","b0178b94f45944460b1c8e125aea5ae4"],["/post/38f8b110.html","408b98e2dff9423d149c53d137ff6378"],["/post/3a3eaae1.html","99808721a5ea158c82b9f69c9c9b5ac3"],["/post/3a72081e.html","b6bb25ab8eb2bb0fdb6994e1b7ffd149"],["/post/3bc7f503.html","f7c379c3acb6e8cc6a956994cd0225d1"],["/post/3c57c5dc.html","092cf292bcc688beef83db7b87080642"],["/post/3d71c64b.html","df17c42aee154f28e3899fb68bb394e4"],["/post/3d8072b.html","cab743b344d1b47108c19f360f4d46f5"],["/post/3e6878ac.html","bb03c7066819d6f9fa5f3364a3807d90"],["/post/3fce0650.html","a198e3cae6a65f62c8eaf11e3dee01ab"],["/post/409dbc1a.html","da7c2638603d61014fc62c2457cca592"],["/post/40dfaace.html","e389f94fd3cbb7b48dfe1846f4c6093a"],["/post/4255f31a.html","bc7cd95722b152c7ffb87d9073bb1245"],["/post/42a619f7.html","dbb993ff4ccf3622db1c09cd5212c5a1"],["/post/44505a5b.html","5271a4f53367bb4603708281d92c1a9e"],["/post/448da703.html","e3243f73d97232d419f78228072a9820"],["/post/454c2118.html","8927f72ddc2ec8e4a03f5fe4e23c9d10"],["/post/454c2358.html","917654f2b744ad3047c422eef36bf1b3"],["/post/4773b69c.html","01c5ba418a11f54a16fa0e3192b09cb1"],["/post/47b391f2.html","e6880629809ae1162151ea2d705a49e5"],["/post/481e8abf.html","87d013b3c361ae82ed4b74fe43d4fda0"],["/post/4ab96b49.html","eda8bb49438203f65a4433e18d95c14a"],["/post/4b15f9e3.html","11bdf9f990314f2b6a09009163086775"],["/post/4c60a529.html","efa9d567fbd37b665efc8bd7e58fe0fb"],["/post/4d6a6b27.html","76061107cf2776253fb2f53fff4103e5"],["/post/4db7e28a.html","fdac20023cfe92ebcc660f9d8651dfc3"],["/post/4dc7502.html","6f9c9da65be02f3a7a0d4dc84f5857b5"],["/post/4e876bc2.html","a90262595026c3297670a202e69e2c2c"],["/post/4f352d.html","1ea3e79f2793113118faf8d5bc2a381b"],["/post/4f8fe65a.html","3d29db77d5f7947ddd5f9462127230a5"],["/post/4fa396eb.html","9929c3480de9b02b0b5f0f739653c4d7"],["/post/52730f61.html","8b81f5859ab33646fc3b97652417eb4c"],["/post/531de0f8.html","2ff48c70adf2e4ff921028bf6c60df79"],["/post/53729461.html","24415d5b19994520d6fbb6caac7eded8"],["/post/5555df5.html","42da3149c68d5dc664249a963c5c140e"],["/post/57bfde8d.html","8817f7934e3363da6a6bec0046c21056"],["/post/585293b8.html","858386b9c565ab690b950b613e7a6298"],["/post/5aa5290d.html","e789daca74e52e9faf9130d94dafb82c"],["/post/5abc6d45.html","b86ecdaa46a80fae937a2dc2ab24151f"],["/post/5c86d06a.html","41b36e354c8b760f46223795299cc28d"],["/post/5e189593.html","55bd687d3dbc5a78cc429a8d09f5ffb8"],["/post/5f2d4a77.html","047a037353f4fb48b3efdd29ce8d5dd0"],["/post/5f341cbe.html","1e6d730b2a4e82df56b6960e066ce197"],["/post/60850415.html","c7319cfe51e065df7ba9bc53b731737d"],["/post/62cb42be.html","c4be5ada48a244715d7ac30a93cc32e2"],["/post/6501181e.html","22aec75feb3dafb4368dd930d0ae58ec"],["/post/66258384.html","7907a671441f9993794c234d37d965c9"],["/post/662b8b80.html","c8a7326879a6b2701634093574b7b424"],["/post/677d0fef.html","62b1c64d8a5c567188769514bcc5742d"],["/post/685bcc20.html","a29d44d2caea9df96fec49cdb2be1a20"],["/post/686dc27c.html","e4a5e6997344169159c832daa64f461a"],["/post/6c71e418.html","975740f0d3c1fa616f00f45955e0080e"],["/post/6ca1eed5.html","a8804bbab15935dee84777904a7199d3"],["/post/6cb7680e.html","29267edccf6dec1d4e5cecfa37e46cd3"],["/post/6d52b9f2.html","a377e38253a7725ced7a2f0a779e265e"],["/post/6db0d89d.html","99d22b29d491e4ca500471893a19348e"],["/post/6e80eb1e.html","e13410100ef81910ea134572029e25f7"],["/post/6f3b3edd.html","d72825f32f4f51e3adc722f433b1b211"],["/post/6fc3409b.html","24ac81feeeabfd1d002b51307bc23d62"],["/post/703409c5.html","8ccbfd915df0724b6e205da6575c3ca6"],["/post/7169c4ed.html","21af15ec17c2503a41d2615c1ac97741"],["/post/73136b.html","032a2321dd5fe77664bf2a74afd78fb9"],["/post/7410a832.html","32eefbbc88343af3df5bfa85f7929cb1"],["/post/742966af.html","b7c830811b2615d6015fae0cb29464da"],["/post/74479d01.html","53a7fb41f03cab02866be9a97423a0d1"],["/post/74a4286c.html","eb3547ccb982fc3032daa0f2dc01e728"],["/post/75794199.html","dc68358cbdd70c3e749cb58c90ca83fe"],["/post/75f986a1.html","779a3c46cf7d8ebb15b8a77ab037d1e1"],["/post/76485a7.html","061901c8f3be40e9498c97c65e3810a1"],["/post/772fc02c.html","0bd627a4e4756305c5efebbe893672a0"],["/post/792e36ed.html","5c3a549052e23ef5f93cbc1851cf7bc9"],["/post/7c50967.html","b10dff60222d6e057ea08cb72b628e0e"],["/post/7d8e4f2a.html","f2911bdbfe68542eab4b8ac079e9f6a8"],["/post/7ef8a98f.html","65a72a1c1f25d85a8f64d3fb57bcfd65"],["/post/7fe193be.html","dcbf061fb951f87c09371dfe43b8026f"],["/post/879e9655.html","77d73af1a1a90009c54bb3f7aa78d917"],["/post/88e8ae98.html","4067e735425e113123e21e1ebc51f831"],["/post/89873dd3.html","1ddd45f7065860f37a9fb85b546d3ce0"],["/post/8ddc8a30.html","8b3cd72123ffae6a2020ba6e90c97a59"],["/post/8f9cfad3.html","122d4ce0942634860b9ee68017ec0c7d"],["/post/918fcaa1.html","ff4f12412baeba149d1d2a0501413d82"],["/post/92687617.html","5c281a05023a48e16fa23b116c1cc83a"],["/post/9282aeca.html","1c90f6deb002d018d1cdf991a50ea937"],["/post/9305c5f5.html","2d0e99ae5db118e1631f455b8c8581df"],["/post/94c9baee.html","645fdedbb46501bffd14b27bedf9fa63"],["/post/98804e11.html","c35652e43e1f66d09787425d55b00553"],["/post/9a9a4797.html","36b76bf7217b7e4313879aefc2ac1b41"],["/post/9c28a880.html","f806345ba0d6ceb868beab4ae2c30ab6"],["/post/9c649212.html","6f622d3040812b6979595c8e85197f49"],["/post/9d402b32.html","a6b47e311d3a87904b93b4601aa5865a"],["/post/9eb065c8.html","e2d2f2c08510c2c47aa367c309918321"],["/post/9f8e212d.html","cc6bcd85b4db7bdddcec57a173266b82"],["/post/a1751c09.html","c509244021dfa01d0d0b8b9804fcb106"],["/post/a1cef007.html","e8b75a8fd9cb86d9f28c57947d6d9dd6"],["/post/a1fc03d8.html","2aac908f73b11284507351aff088d25b"],["/post/a27e9acf.html","b6e5f9eb22fe7633c7b321f0b32fd904"],["/post/a4c66bf4.html","8f0d4c8e9999f59ebf15629537963dc8"],["/post/a4efe87.html","2465cad8acb3b88479530b2fa5fa511b"],["/post/a7528411.html","08e6273a35403467583d733a750cc5f9"],["/post/a8759852.html","a45cad4d10449e78ef21939c9ea909de"],["/post/aa0a97c8.html","be35c7d3a01130b278a18c6ad0cf71b1"],["/post/ab4ed95b.html","6891be605d88ff4032e3bf4bbb410fe4"],["/post/ab720150.html","a504a6c0dfe062c9d8fac1860d258ac5"],["/post/ac92be99.html","a05707796e6d017f755edb4274bb97c1"],["/post/acf6b02e.html","8c8befbe1dcd0c7e6f4c9f7bed03cb76"],["/post/b0d6c7.html","d44491fb141d928bdfb1f9c8c3d92588"],["/post/b3ee770c.html","c0a4f0b290b4eddfe4f904805d6f8f04"],["/post/b8ca3dfa.html","db136a851073c3bc4f155aa626ac3aa8"],["/post/bb7f8e97.html","a4ebbc3c3748b7126feedccdac3b287d"],["/post/bba462fb.html","1491ce1560eeff078b62c4597280ac90"],["/post/bc8586da.html","eaed3bd34dcaea526cadacd0dcf61abd"],["/post/bcb02c2b.html","553e27f4e64005991618c26fe1c14642"],["/post/bd36a30f.html","fb5524a24d3c1b3bb2fb0dfbd185ebc9"],["/post/bde4b1f8.html","d82d0dde5e7175a9519edb3473580e3e"],["/post/bea42f1e.html","66493c7c7d0fed4476baf525a42bfa50"],["/post/c1864474.html","703f8352e65bdbd87fac035106a1fab0"],["/post/c293d2b3.html","94580dc659414bf959e67b56101e20a6"],["/post/c37095b9.html","e5b5632df6ed1abe04de40f92da7771e"],["/post/c5672df5.html","8957274cc9431e96a7fe0cbe6d1a9175"],["/post/c6d76e9a.html","1b2bed72deef37217e79d58768f51200"],["/post/c7fb8250.html","f417f25cd6c7238940dce4b19d156c99"],["/post/c938bbd1.html","3c6804f105e88550ac18162d878a841e"],["/post/ca14c5df.html","db7d7651ec3f05c36fe44736af4de95b"],["/post/cd18de84.html","c3d8f6f059f1b0513cb516d57407c879"],["/post/cd41dfb7.html","2aef19452f555fe5d79590c007e77fbb"],["/post/cea184b4.html","07f350f7352edf8e4c3d5c8d1258fe64"],["/post/d120bd8e.html","9f2e262d468ccf822c06658918a22b41"],["/post/d50b784.html","2977418bda75d4c418920898fdf5f84c"],["/post/d6a5bd15.html","8d5cd2732a27979e7a49b7bc2baae2a0"],["/post/d73de254.html","8389a5211c3982e56e73ae4abb8e9535"],["/post/d7435d20.html","150c7e4c46442e251375aff4a177607f"],["/post/d81c5363.html","1ca5859d4faa9cfac281860297ce3d6a"],["/post/d899bd9.html","051c9a2cfe895f05e8b2b408a649c80c"],["/post/d9083bc4.html","ccac7f61ed05c617df2e7e9bc7e7637a"],["/post/dc981233.html","86ff33a55bda2ca3b970491d6252893a"],["/post/dea65d58.html","122a122ff0f269bd251858314bc7043c"],["/post/df76d545.html","344d9cb627065c2b501f19d11b168727"],["/post/e256d99f.html","baae4a71ec1be42a01169c0abde64d1c"],["/post/e290dd8c.html","4cf24ab8e21ed43f69841939ed0787e9"],["/post/e3e37943.html","de20e12f12d6d37cd1361bd3fc649610"],["/post/e583ed8d.html","b96a466d907cac683f409102033c27b8"],["/post/e5d75450.html","b608d6dd9bedb4162fd5c2af821552c2"],["/post/e6364ca4.html","e51b3fb596b2049abb5096448450989b"],["/post/e7058b47.html","1fda8f389e8c05c661d19baf4050108a"],["/post/e769f01f.html","be80d7974b90ddf81795a895f3b7c0ec"],["/post/e78ad34c.html","7863cfda18535dc5fcbf96bdf21c9d90"],["/post/e8005312.html","4ba4d3a48ccfdea69af81620bf266ab7"],["/post/e8ae7612.html","3bce015dcc8d4326af9a9c2fcdf4c66a"],["/post/e8bc7157.html","710651bc181c129d158f8c1b54ba3da9"],["/post/eae0b80e.html","eee06dcfd7ae3163bbe92948ac5f3671"],["/post/eb9ab36.html","31e9f4431f09410a7a9843d8d6faee1f"],["/post/f0b23c5b.html","60c34236f63ae770e6c1a7f6c42fc8e0"],["/post/f279299a.html","f59789a2ece65b7c9e05b189e7724ae6"],["/post/f3d9c661.html","ee518bf5739453df0b0a89029faf2f11"],["/post/f4bfd16b.html","37f9cadda57c8998b7d6a63f48d96f86"],["/post/f7b33ddd.html","f62aca2b1a4168ebef32ac6c3cbbd170"],["/post/f8e4bc7f.html","7226b60dc1fd8e8903019a7ac6f12dd4"],["/post/fa83cee.html","b46de90fdf3da6356d829e350c6b5b50"],["/post/fb2f630e.html","92d48a36843917a00aa72c0e8d887bd8"],["/post/fb5efb9c.html","0a794cbb0b8546fa160308f5130e3931"],["/post/fbf7f335.html","4556447a696e64b85ed0d72c28c78c3f"],["/post/fcb9464d.html","466a756f01ce799a5a8827a95cad0089"],["/post/fd581850.html","192661a6521f2f34609da4ba62b577e5"],["/post/fdc06f3f.html","3e5c9a907561b65b626b3d5ca81c5b91"],["/post/feaebfb5.html","f3c13a8ea211b77aa8b33b9a60023498"],["/sw-register.js","322f1586bbc4f8e90cdfc38ef0b445fd"],["/tag/1988：我想和这个世界谈谈/index.html","2137aa5e22d43e79167db7e7a39ff23b"],["/tag/1Q84/index.html","59ba2904a076065a7425da2470186358"],["/tag/2017HDU多校/index.html","7bc9a2c139db3622e8196176960b241d"],["/tag/2018HDU多校/index.html","1b5677b6e846fdbeb0ec866fe9894438"],["/tag/2018寒假集训/index.html","5fa4dd2aecea396af185d71515ddbfa6"],["/tag/2018寒假集训/page/2/index.html","295c52fab1cb444fce7caf956b21c49b"],["/tag/2018春季训练/index.html","7796cabeaa7bc1a45371f6d1630dee8c"],["/tag/2018春季训练/page/2/index.html","1622702022ce5ca8fe82f02280de9fc6"],["/tag/2018暑假集训/index.html","0f36c11569658eec330baca641a19357"],["/tag/2018暑假集训/page/2/index.html","bf4fd042de205f286da20de691d7dcd0"],["/tag/2018暑假集训/page/3/index.html","4f443e6ffecee28cee98ff8474b78dbf"],["/tag/2018暑假集训/page/4/index.html","c2218fd6f3dbb6421c50ca5d182047a2"],["/tag/2018暑假集训/page/5/index.html","e655d095f3d2e258bac02d1ecb4b66a6"],["/tag/2018暑假集训/page/6/index.html","6010c9be3513d742807591d671871a39"],["/tag/2018暑假集训/page/7/index.html","fc50276364e5c99ab2c05eae3452c853"],["/tag/2018暑假集训/page/8/index.html","9f451137161b8fb62ebf3c078417f0fb"],["/tag/2018暑期选拔/index.html","f66a73945b302dbb50836affd00211a7"],["/tag/2018杭电多校/index.html","318da6e52596cf81830efa8805be208e"],["/tag/2018球季训练/index.html","7dc7fbb635f932525bcab96d7509f521"],["/tag/2018秋季培训/index.html","a89730c736c849dfca66e0dd1b5c58ac"],["/tag/2018秋季训练/index.html","6e0bf836a105c08583f50b8b404d42db"],["/tag/2018秋季训练/page/2/index.html","3982c771c9241179d25333e7aac73a46"],["/tag/ACM/index.html","b480a0df43fe92b4b1245f61eab03f8b"],["/tag/ACM/page/10/index.html","d4dd953748c2921bb685eac0616d2ea4"],["/tag/ACM/page/11/index.html","76b28587dba9bdade29b9b3d53e373fb"],["/tag/ACM/page/12/index.html","ee66560b5c8e3ab762670c19590b0c1c"],["/tag/ACM/page/13/index.html","c424e0f57841502dcf8de0b82949e748"],["/tag/ACM/page/14/index.html","fe9171997c77ce5c9d68a8e3b1aeb146"],["/tag/ACM/page/2/index.html","ea5a36658a31eafdd909c4cb1c3fed38"],["/tag/ACM/page/3/index.html","7281d3a9172c6e92145cef8f96a48563"],["/tag/ACM/page/4/index.html","36b0d058d442f5286510528c64ac8bbe"],["/tag/ACM/page/5/index.html","9f438c30f3d336b81a81611f52272cd0"],["/tag/ACM/page/6/index.html","2ebf7e550a607d6e985667c398cf19f4"],["/tag/ACM/page/7/index.html","bf269fb08486971077ced5798bc06801"],["/tag/ACM/page/8/index.html","2db46dc7be8cd44a99c26c96b0011240"],["/tag/ACM/page/9/index.html","0ba792920f52cd4ac630bd7f6544f0ff"],["/tag/AWS/index.html","d527f8dc4ce60006a45a8f644a0e38d3"],["/tag/AtCoder/index.html","5d1be40c5438b5c4da85d0f8b527e781"],["/tag/BFS/index.html","ce14086e33f08c48d2046c31c937741b"],["/tag/C/index.html","6f360720efd47550e468430c59802835"],["/tag/CSU/index.html","85f1567cbfed29c4fdf057fff93bb6f2"],["/tag/CSU/page/2/index.html","6931c46a86161ba6d8121c85d7c52d5e"],["/tag/CSU/page/3/index.html","6b745b43331a1b41e8ede3a99e6ed43c"],["/tag/CSU/page/4/index.html","7f5176133ecca0e91fce6656733aa83a"],["/tag/CodeForces/index.html","464724d078f8a1c3698169ca0616630a"],["/tag/CodeForces/page/2/index.html","95388fe012e0e20188ccbaa1fb26f857"],["/tag/DFS/index.html","aff43efb49ee6b3be41ebd7587e35494"],["/tag/DP/index.html","c99e484a96ac6cff2249f4be3fa450d2"],["/tag/Dijkstra/index.html","cc7b0647720b535fd1462bf292f4cad8"],["/tag/Flask框架/index.html","47a203264ec41863d769c9bce6beb598"],["/tag/Floyd/index.html","8a7e95dbc6b9f4e2d52b6e55323c0fa6"],["/tag/Git/index.html","80bf67b05b0ce9827fb83e1e236b66a9"],["/tag/Graph/index.html","0d76c5969df9459af4d7f900d494882b"],["/tag/Greedy/index.html","c6fa194e51820bea1e3e689c72af3399"],["/tag/HDU/index.html","8a39466c17092a532ae9e6134a513507"],["/tag/HDU/page/2/index.html","4ce67601ffab191d87759a4a601f52c8"],["/tag/HDU/page/3/index.html","8e88769509921ee79f1316f22b12d790"],["/tag/HDU/page/4/index.html","c94924292f6fcda0a2e7e8dca28b1de9"],["/tag/Imitation/index.html","190947851b85e91ad85cd37a18f2fa60"],["/tag/KMP/index.html","6c6f74140506b2a35ffddc113e7a3012"],["/tag/POJ/index.html","916cce46ec66cce7ed0850fb2281a12c"],["/tag/POJ/page/2/index.html","5106142e81d03757481d5dad6a7b4f03"],["/tag/Python/index.html","007bd1c679a558e7649fad2aed1badd0"],["/tag/SCU/index.html","9440448dc40365947e64f3f789fef591"],["/tag/STL/index.html","e2375140e9fbdac502993b66eef11428"],["/tag/STL/page/2/index.html","fb914cf3b69d28c789fc477f355cab8a"],["/tag/URAL/index.html","61b12527219529adefddd1a3dc3def36"],["/tag/UVA/index.html","ccb10be6b8f6974945dff6a1befc9842"],["/tag/UVA/page/2/index.html","32906d84c32ef54716e1e583941321da"],["/tag/UVALive/index.html","01e0b8bff26d964bbd760acca9d5ee90"],["/tag/VSCode-Git-生产力工具/index.html","7009382e92d726743f140b68fac785c8"],["/tag/VScode/index.html","e015767d8800d1d3575a29509fe6c7ee"],["/tag/ZOJ/index.html","21cd6ac950a48b1ae64f487bd35cf51d"],["/tag/math/index.html","63761253d26c503dbfb576b63678b0ec"],["/tag/test/index.html","765840474da00d640b66df28a9d8c17c"],["/tag/不得贪胜/index.html","1602824e17c363e5b5d401dc870644b4"],["/tag/东野圭吾/index.html","05a2591bc2b8035c4707088439e66b3f"],["/tag/乌合之众/index.html","04c048d570428d2276b30843e0d36dbb"],["/tag/书信/index.html","af57664fa8db1e364999d9395979fa1e"],["/tag/二分/index.html","03624535cafb6a6b2122cd09e4e39d8d"],["/tag/亚马逊/index.html","86298b3f37a73e6a7c7b6a946c1d83c7"],["/tag/亲爱的安德烈/index.html","7243bf6c383179d118df5dca9860ab88"],["/tag/位运算/index.html","1a2a6a0fc8bc8fbe3e4cb6c7a867f677"],["/tag/几何/index.html","5d3bb742d674e9163ee397cf52927485"],["/tag/刺杀骑士团长/index.html","b3c7950f847a05b9c23df45d4d38cbe8"],["/tag/前缀和/index.html","34ab022908356b8cf829a1e4c0cad1bc"],["/tag/区间DP/index.html","aaf268940c682699819d771922e135f7"],["/tag/博弈/index.html","28c798b8b0be0d2a46932150ad6f6726"],["/tag/历史/index.html","79376787864e9faa468cc90cba5abb36"],["/tag/古斯塔夫・勒庞/index.html","a9cf58f5ac8f82255ed82a5ee041d708"],["/tag/图解密码技术/index.html","63a869c94fadcd313ff21206888fc424"],["/tag/大数/index.html","6c120b937398b333a713dc40cab1a08f"],["/tag/天幕红尘/index.html","2eefa420dcac7acb1d622f7ac69390df"],["/tag/如何阅读一本书/index.html","a4e56e8c97fd57f640c112af6dabafa9"],["/tag/字典树/index.html","373efb22a93479e6a976158d8a05cfc7"],["/tag/字符串/index.html","e8b3f6c9f74605bb80f249dd57314483"],["/tag/字符串hash/index.html","b0ba5db27bf4cb9b28783462a06e7bc6"],["/tag/安德烈/index.html","2088bfe16b6475a533c81a6f575068bf"],["/tag/密码技术/index.html","32b96cc0d9a3c6ab4f80923d7a0dc23b"],["/tag/小说/index.html","67babe26a99e40f0a667c76633adce88"],["/tag/岛上书店/index.html","f882a0f479d37337b40cd1cc5f487ac4"],["/tag/并查集/index.html","1d278f05754553799fd9449ec05feb4e"],["/tag/待补充/index.html","af3dff4689902b277efacbcb8dba1464"],["/tag/微观经济学/index.html","dbdda5367922ab4f4f97c64b2feb8100"],["/tag/数学/index.html","edc6f4d34b8d33dc69a63e8d5408a2fe"],["/tag/数据结构/index.html","bb873265155ba7731f14f4f1fa3b1c44"],["/tag/数论/index.html","c82e18e2d320b85f9cd9e1b7560156f0"],["/tag/文学/index.html","74eaa70473f21a1588d25ccf976d865d"],["/tag/文学，小说/index.html","fa9171f2032a18fb9388d6b1b8ddbf17"],["/tag/旅行/index.html","c212ee123270a97050de71574dc128bc"],["/tag/暴力/index.html","d0adf538b294dcb041d217d108d6db7a"],["/tag/最小生成树/index.html","66005b1b1ebbb40ea26420e49b8f4c0b"],["/tag/最短路/index.html","a0979b9aa32e3cf919d061d9e5f6a54d"],["/tag/最长路/index.html","204e2cb7d7e9ea07934eb469f330517b"],["/tag/本·伯南克/index.html","868dbf4d54a7a91af1cae78c612aac79"],["/tag/杂文集/index.html","9d7e648e6242ff2c30041c0a3f340620"],["/tag/李昌镐/index.html","b585f0a2639f0057709167351a9c113a"],["/tag/村上春树/index.html","fe9fc21b1be2d3ad4124880ce80f4d47"],["/tag/枪炮、病菌与钢铁/index.html","fedb12e06518bc1baa2ae63c7bf98f00"],["/tag/概率/index.html","a4f252dec5dcc615e3dc58f57837ba7f"],["/tag/正则匹配/index.html","54cae8c47723d5bb25b94549e456404d"],["/tag/水题/index.html","80f291d1f0ba7a722af4545b1a7d5587"],["/tag/游记，武汉/index.html","98dbc51af47776a2a88df0beec9c913f"],["/tag/演讲/index.html","7b368da7ddb61256cfb6f72d70da3dbb"],["/tag/矩阵快速幂/index.html","1222bb4e5acdc1fff36ddb07ee908e99"],["/tag/石黑一雄/index.html","315590877ad7f1199351e9cfe92d1ec2"],["/tag/社科/index.html","04948cd50dcf51ad0928bff88150a249"],["/tag/笨方法学Python3/index.html","bf7463d2cfe6d4a02648b633ad78f2cb"],["/tag/算法/index.html","9263e5b04d2a5d7182ec9e29c2ce11b9"],["/tag/算法/page/10/index.html","606ef9f15edec25f4b32f27d0ad464e1"],["/tag/算法/page/11/index.html","ed0edbee7b54175e735031b5aa7d9ffb"],["/tag/算法/page/12/index.html","7e8eb04b29978e83ec2f1d11bea54df3"],["/tag/算法/page/13/index.html","3ed47740f426650dacbe5fbc6cc4a100"],["/tag/算法/page/14/index.html","849491ba4188eb9983b3be56ba21a462"],["/tag/算法/page/2/index.html","1e3039fafc00776b4613de9e1267b367"],["/tag/算法/page/3/index.html","1bc0666e023a87bea7121a1eb4078f5a"],["/tag/算法/page/4/index.html","77f0729018354f6c4d3f6e35f375b93f"],["/tag/算法/page/5/index.html","650bc31b59cd44ec05cb11a0163fbe1d"],["/tag/算法/page/6/index.html","72c24645ef6474f895b1daeb37ecb327"],["/tag/算法/page/7/index.html","994130da407a99ed73f2c7991eb2301d"],["/tag/算法/page/8/index.html","e4fa4601b17eaf3d71bc0e079f0dc780"],["/tag/算法/page/9/index.html","f46b4423a233009cc48b8a8fc14af5b3"],["/tag/素数筛/index.html","d4a0b74d6091d451c21a20fba25a808d"],["/tag/线段树/index.html","f2db0f77c159fa6cde3538b0e7225db7"],["/tag/线索二叉树/index.html","9f4f63fd39f1c50a51c6c5490a24b834"],["/tag/结城浩/index.html","114acdb81f2e63d43f81e1bf49fc5e87"],["/tag/编程-C-课程设计/index.html","3164feb7962a606d644e2b6ee3f3b153"],["/tag/编程-PHP/index.html","61560a8968053c7526d5a599397a244f"],["/tag/编程-数据挖掘/index.html","fccabeffd193dd2ceff441a97abeb024"],["/tag/编程-编译原理/index.html","b56decf691a40d8c0b4a778d1fc6452f"],["/tag/编程/index.html","417233ce161a3d5bb9946028b92692fa"],["/tag/编译原理/index.html","65ed54a192e22a86a6039cfe35c8d1e3"],["/tag/自传/index.html","cbc7134b937c67e9c8bc16848f7799dc"],["/tag/艾萨克·阿西莫夫/index.html","39351a3be934046d623505b9ba35836f"],["/tag/补图/index.html","5d317eeafdeebe1dbc276a3e199ca908"],["/tag/规律/index.html","8cc2b10ffb3913e000c92fc62fe40941"],["/tag/解忧杂货店/index.html","a523fda74268ed3f1b9dfec27d487916"],["/tag/计算几何/index.html","ae37b5ba325b638c766d211b79333962"],["/tag/讲座笔记/index.html","59bce54831846197cadda8ebb704683a"],["/tag/读后感/index.html","ae38d0e621278b444d6363226e41ba0d"],["/tag/课堂笔记/index.html","94aeb9e9d34455c62530f4c8ffdf8427"],["/tag/课堂笔记/page/2/index.html","14b37c4fb940150be0c0005533e1fc75"],["/tag/课程学习/index.html","45cf6bdc65c1b04017d4d03c01d6b355"],["/tag/豆豆/index.html","3ec4aa3f9ba395971962aeaaa311e126"],["/tag/贾雷德·戴蒙德/index.html","1d5f29e93c75f4abd4980d7b8aa7ce56"],["/tag/辅修/index.html","d1b28e078b6658024fed4e38c3c21460"],["/tag/辅修/page/2/index.html","125629f475cbbb36d23e22831e9e1e4d"],["/tag/递推/index.html","ddfb427547298af3a3736cd8e8e7d445"],["/tag/野火集/index.html","1785ab2a695d3c6b47885bebb5ed8028"],["/tag/金融学/index.html","e465f5fcd689e7711f4265f6c2206c79"],["/tag/金融的本质/index.html","5b1208a051850a947ad21a47963ca47b"],["/tag/银河帝国/index.html","ca5bff099b019551efc752df07bba7e4"],["/tag/阅读/index.html","19a9931a2f3daa0cadb7dc593fda6373"],["/tag/阅读/page/2/index.html","27161feba313ad5786d640881e120704"],["/tag/随笔/index.html","6aa16d3de756e868955d833855dffabb"],["/tag/韩寒/index.html","99039b5da4dfe481264c8a25710f531d"],["/tag/龙应台/index.html","9708f0565ccdf73401d5d88c4ebbd8f7"],["/tags/index.html","022c0d45836c54a7011378f42fe0cfd4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
