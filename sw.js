/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","37f80c57156c9e48dfd28b1e060a312e"],["/archives/2018/01/index.html","69e644687b9ff205c0968c02fc4d1278"],["/archives/2018/01/page/2/index.html","b2c69ef666a6d4deee4279b50fb3dc47"],["/archives/2018/02/index.html","3e5117940d53109438fdc2fa08d8c30a"],["/archives/2018/03/index.html","c80bd48a08fa5e3366a98fa12dd59f5a"],["/archives/2018/04/index.html","cd26e4b4960bedbd5c7348c5e34ddf24"],["/archives/2018/05/index.html","225c9cf5e9902a884fe0883d5786321f"],["/archives/2018/06/index.html","a56571f8064cf5aace913bc8c718ebc4"],["/archives/2018/07/index.html","ed2e34fbdf2e586127bf3088504fad70"],["/archives/2018/07/page/2/index.html","e5ef71bae13dcc25b7181ed4b8aeca4b"],["/archives/2018/07/page/3/index.html","51465a9dc69c9405dee8fda5e18e7128"],["/archives/2018/08/index.html","d3767bed76abe950d2013888c3b84653"],["/archives/2018/08/page/2/index.html","e1344ca4e9d7ab0bb829e06c24191a01"],["/archives/2018/08/page/3/index.html","de3254ca4c2a0dbf126cf3479bed1398"],["/archives/2018/08/page/4/index.html","38dad16670de58c01738cb0477a4099b"],["/archives/2018/08/page/5/index.html","e30781550015c133325c766fb30424e0"],["/archives/2018/08/page/6/index.html","d069cde4c5b98085f31431d5513e70ed"],["/archives/2018/09/index.html","474a17f85eacb71d3bd88223b863ae62"],["/archives/2018/10/index.html","73426f868d309289baccd61123460516"],["/archives/2018/10/page/2/index.html","d1e9a86e5e787151b82d5d2d1b05fe25"],["/archives/2018/11/index.html","0e4fd49442e8d17410bf449ce3c86100"],["/archives/2018/11/page/2/index.html","171c86c5c304a2d055088ff5ddaea426"],["/archives/2018/12/index.html","bd9767c09f5e6d01648717fc5cb18971"],["/archives/2018/index.html","050d6e62cc12810277817faa388ceffd"],["/archives/2018/page/10/index.html","32b3b2c95d74ca4e689a180c499f61cf"],["/archives/2018/page/11/index.html","90eadeac0bac12a8c84aa7dac684ed53"],["/archives/2018/page/12/index.html","04ea3e0cf1b664fe0496aec916d26678"],["/archives/2018/page/13/index.html","4153fece1f046665e6dc49f60d505e2e"],["/archives/2018/page/14/index.html","5449fe5b76acc8bdb3f72696e3198f94"],["/archives/2018/page/15/index.html","a63aacab528cc21a829ffee11aa9df82"],["/archives/2018/page/16/index.html","2b25c34d82610b55630a7f025e3dc675"],["/archives/2018/page/17/index.html","462bb157597e4e9ed2629a0524b9f729"],["/archives/2018/page/18/index.html","9d8bb1f004f7c7e25d5955bb867dc7db"],["/archives/2018/page/2/index.html","fb4b55c60a0630991abf587d101d3186"],["/archives/2018/page/3/index.html","bf8303674206f70803632a419e3b50f0"],["/archives/2018/page/4/index.html","93377b04a94e75a9033267e9e66a5b0c"],["/archives/2018/page/5/index.html","1c5329a1f98be4be418b2730f681a1a5"],["/archives/2018/page/6/index.html","f31240f01fcde8ae82669674b00b3f98"],["/archives/2018/page/7/index.html","151767f284a1b658de1b924737cd7913"],["/archives/2018/page/8/index.html","cce053e8173542fc0237db4ca95647a9"],["/archives/2018/page/9/index.html","568e16012c2a79c89d5c505fa38e99df"],["/archives/2019/01/index.html","7ed07686d044509e1f27d8a3a14d62c3"],["/archives/2019/02/index.html","6a3a4349244ccd4672364c53ea2ecee3"],["/archives/2019/03/index.html","262248d4570554ad458ed5095508da8b"],["/archives/2019/index.html","c051d8170d55ada9b4c8eb3f17bd3941"],["/archives/2019/page/2/index.html","edc41de5f18dddb135e4de0def4e387d"],["/archives/index.html","b90e4a8bbd03ad083120479d0bf1916b"],["/archives/page/10/index.html","2e5d6268e02f975ea9c3772a33c8e690"],["/archives/page/11/index.html","e452d2177980c02de18458c64cb8be5f"],["/archives/page/12/index.html","4c8f6412a607598bb725eda8f21789ac"],["/archives/page/13/index.html","5275eacf3f1e491404f18790a753780d"],["/archives/page/14/index.html","3b3509848551f82c93406b0102de02fe"],["/archives/page/15/index.html","e29c641964b653164735203f7121b23d"],["/archives/page/16/index.html","bbb68b2795fb07ab2548b17147dbefca"],["/archives/page/17/index.html","c20460d3309b6b5d718207926b51d7cd"],["/archives/page/18/index.html","594e0b8d69370b2482a3b04091a46c48"],["/archives/page/19/index.html","b3e228d07b5242f2d6a92fcdad2f661a"],["/archives/page/2/index.html","4ed9bf7b2ea221f0bfbe48dad809a394"],["/archives/page/20/index.html","8a927e779bce2616e407d8596f0d3242"],["/archives/page/3/index.html","879f3f713e2257996281ff92dd6f725c"],["/archives/page/4/index.html","779efe2ed6f7db8bb37433cc58d1df51"],["/archives/page/5/index.html","7dd372586d66965b8c2a61681aa96136"],["/archives/page/6/index.html","73b360616342260dbf6afadaa8e2d212"],["/archives/page/7/index.html","b7680981a4093879272c0450b6d99e83"],["/archives/page/8/index.html","ce385d8f8e38dba2b5daf9cc23e3030c"],["/archives/page/9/index.html","2232bfac6833e3aac67e7c4b613c748f"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","3afc90533857fa7483fb78ca5eefc060"],["/baidu_verify_ZzhwBFUe1V.html","0707e1b24df06be4431a60207629e46f"],["/baidu_verify_dw73Nh8OEw.html","adacc06b017bbec1ea2f8ad18e71534d"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","5a1d106f2c689c83db2d976091d0e166"],["/categories/操作系统-集群/index.html","3f5117a2a46a28a5eef12054fb03bf3a"],["/categories/数学建模/index.html","1197834db38d7489c06dd119e1205ead"],["/categories/旅行/index.html","530ecdc7f5ccc1739d053d12daa70026"],["/categories/编程-PHP/index.html","3ec1722aae62b2124af304eb6661fd45"],["/categories/编程/ACM/index.html","45872e9a5dd4750fcf0c2e5fa3cdf86a"],["/categories/编程/ACM/page/10/index.html","c94318a04e0ad5a39753321997006c26"],["/categories/编程/ACM/page/11/index.html","7485878a145d66d295885e91d16c1c38"],["/categories/编程/ACM/page/12/index.html","c96c69a7a5f4ec48e4c27f6d67fa37a9"],["/categories/编程/ACM/page/13/index.html","a3ce753d57a19810fa8911fd52ee0973"],["/categories/编程/ACM/page/14/index.html","d1d285c56578528dba1603c455fbc040"],["/categories/编程/ACM/page/2/index.html","879de3f792aa1b9dfc4d22043413b88c"],["/categories/编程/ACM/page/3/index.html","eb3fad3e01f0776a860c5c0f842de3ff"],["/categories/编程/ACM/page/4/index.html","efe239e9ce9565707227a11d45800232"],["/categories/编程/ACM/page/5/index.html","4633a105d64754b1cc530be3c5880bfc"],["/categories/编程/ACM/page/6/index.html","61e4a48674be43d6fbf0e6375fe6d635"],["/categories/编程/ACM/page/7/index.html","0654fd7fd8f6104050effc4dede8324f"],["/categories/编程/ACM/page/8/index.html","60852026fe309d14dd23ec95301618be"],["/categories/编程/ACM/page/9/index.html","c18d8cdad0166b215b354fc9829af124"],["/categories/编程/C/index.html","ba46eadca0a1a14fbc22c2c6a88528a8"],["/categories/编程/Git/index.html","add5d92999eaf0faf88b01ee8653922e"],["/categories/编程/Python/index.html","e6537c4d83dee58eddb5e7ff25f802c1"],["/categories/编程/index.html","70657919f9c07aa6614ab5464d34f4b0"],["/categories/编程/page/10/index.html","8850bcd32b580fde67b04ca26361d71e"],["/categories/编程/page/11/index.html","453ccd121715d2296cb4230ae0c4cda9"],["/categories/编程/page/12/index.html","212e36696f76de28316f13e5d9e97fdb"],["/categories/编程/page/13/index.html","e973c7f4cb670b04a2a3941531f9e82e"],["/categories/编程/page/14/index.html","8484cf6198fa0c0d348c1b8238a2c370"],["/categories/编程/page/15/index.html","0897b427e46d197c7033c1f5b2e641c3"],["/categories/编程/page/16/index.html","92d20e32544c8fbd6987cfab929b4582"],["/categories/编程/page/2/index.html","a193b470f8a9e1dfcbfd352ba94236ae"],["/categories/编程/page/3/index.html","d57ab87fe49fbc07abdea78c3f98fa55"],["/categories/编程/page/4/index.html","323d470666a8ce65bd5c282b081b26e8"],["/categories/编程/page/5/index.html","b8e5c3bdc038992f57c5aebc70472c80"],["/categories/编程/page/6/index.html","8b77e0a43611049340df7eb4aa95700b"],["/categories/编程/page/7/index.html","3f26819ae358666d8742373453d2628e"],["/categories/编程/page/8/index.html","e5211ba857f867e88a362987489ca668"],["/categories/编程/page/9/index.html","035dbc7401ad31c1bc3409ed6326129d"],["/categories/编程/密码技术/index.html","78f6f34045ad942896761c242b7f3bd8"],["/categories/编程/数据结构与算法/index.html","77ecea92d947d6cb4e6753cc38758b4c"],["/categories/编程/生产力工具/index.html","05062eac143342a2936ade65272d7104"],["/categories/编程/编译原理/index.html","d8b42c1474339ac3a6f5cf67212171a5"],["/categories/讲座/index.html","c50414756acfa6e0d71c29046003614b"],["/categories/金融/index.html","30d440b410cee86ec0feae97ce654bc9"],["/categories/金融/page/2/index.html","4287a0c2e210e714cf99015f24f4306d"],["/categories/金融/微观经济学/index.html","fd9e4761596a97e5d6eda73807a44382"],["/categories/金融/金融学/index.html","dc1b433779caf356a54707b7d96a1900"],["/categories/阅读/index.html","36a62547a42dc1cee8c35235d40d2754"],["/categories/阅读/page/2/index.html","cc7c8b2a4253a82c3d359eec033436ea"],["/categories/随笔/index.html","44f99bc89f8320fa2465904b647871ed"],["/css/main.css","c9ce7d55a315fe0b613cc7e63bbcd936"],["/friendlink/index.html","59f83496b42e678b3dd47dd03a830f75"],["/googlea873f713657fb5dc.html","4c1cb9b2acf6d5b52399c9aa36d93fa0"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","846f4a61354c5d8be0537979bb12b654"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","433f22ef62ebc9fcb30fc1ce1deb2174"],["/page/11/index.html","d6144348677b4620553e3d81ef173842"],["/page/12/index.html","671409adc62540320fe614657ec7c34a"],["/page/13/index.html","92b7fb5e8ffa303f366b31ca9106b1aa"],["/page/14/index.html","36a4a5b0e1b3745f2ac9312f1215543f"],["/page/15/index.html","2fab441d8030d2efa568a04e741d386c"],["/page/16/index.html","313c37fc4cc475dd5a9d196a2a93c186"],["/page/17/index.html","0f8a1a3ec6971e059537445e962138ac"],["/page/18/index.html","a0360ffbfd190d988187c0f1ac7f8f8f"],["/page/19/index.html","83036836d18588a9788278544d203fe4"],["/page/2/index.html","034acd70bd04b96c67e229aca7387482"],["/page/20/index.html","f2b21e017916bd5c71d196bc5b224ff6"],["/page/21/index.html","a26f0680852e145ada1318f87dacee33"],["/page/22/index.html","1d0a8a247204e7ee26df60d9c9fba16b"],["/page/23/index.html","edefdab5deab2268cb9448ba5aa31205"],["/page/24/index.html","07b96a23f306e6cbcc6cfe5f5479307d"],["/page/25/index.html","d91c8190213c416016d4ef7d1528b2da"],["/page/26/index.html","79f7b97b01b09678d988cdf844009304"],["/page/27/index.html","f2acd258c11e069bcd784eec9cdadbac"],["/page/28/index.html","f3823103a583f8eaf2fbf63418a4e3bf"],["/page/29/index.html","fcc29d6168c38e831e135160ff1e2d38"],["/page/3/index.html","801f944b9e0e2cb1ce7fa39131b539c8"],["/page/30/index.html","639c8a90e568ed0a4115c1f90931d070"],["/page/31/index.html","dc0371ff874cbab9213702b48a772aba"],["/page/32/index.html","2670e96a1cf00847e4b5fe85f1baf20c"],["/page/33/index.html","c676ff8037a2e97e63d118f3e3adcb71"],["/page/34/index.html","27c1c1ec4d4ea36784d8d6fb427c1dff"],["/page/35/index.html","2ce81d570b38dc403f3150d22621355d"],["/page/36/index.html","54d916a28d96a3615d212fc174e67109"],["/page/37/index.html","dfbbec8cea6fad9c5195f96ed44f7d7f"],["/page/38/index.html","e7671b2f12b72ddded0a6c965e153e4a"],["/page/39/index.html","2391291e2e74b0e6988dc95cc9009cba"],["/page/4/index.html","e527e1bb5b7e440f6a3e4b90556461a0"],["/page/40/index.html","1c20dd05f957ca5c2254ebdf4cd2ff44"],["/page/5/index.html","f2e75a2b78b3bb273479c9b146bcf51b"],["/page/6/index.html","4ba679bf61a91572c4cf103484b9881b"],["/page/7/index.html","fa778d421f5252e01ecdb364581e67db"],["/page/8/index.html","8e256ac1f9a1ca6ffaf761d6e16ce01d"],["/page/9/index.html","b2744b1b3dd29271e0e9791265fceade"],["/post/104a4c5d.html","9ec3738a0218c7d8963387f1b15aebe5"],["/post/109aa3c8.html","7b07ea859ea6bf240cd75bd87d702df8"],["/post/11246bdd.html","39f77e3036ef0303c55f10b6f4bde82e"],["/post/1233e925.html","3fd065c492bb181af635e07366fd8c20"],["/post/1448d9c8.html","d58e262754053bbdba3051ae83f84400"],["/post/15db1cd9.html","6975241f0a07842d2fca5eb9f516a860"],["/post/16b5efde.html","5ba7ed1617392117ddfa834507184c85"],["/post/16fa37a4.html","b5cb635035e99068d5141e625e9ca90b"],["/post/184fc5c7.html","ba64792911c4c7dcaa00527a05011a3c"],["/post/19e79191.html","a354d6c7e1f0e5cd98a9ccb7a0ddff06"],["/post/1b7db6f0.html","20534adef9ffe808368cba87ee7161b4"],["/post/1c52564f.html","00531331fd6dd2554ca9a6f61c2d612a"],["/post/1dc46f40.html","ad4293277e30625d47248936e7faa2df"],["/post/1eeab2ee.html","ffd1860cd276244aad87ab6c2cae683e"],["/post/2024a703.html","730dd45e9797ac197ffd52d2f7cc8ec2"],["/post/222505fd.html","9e3b716ec96b9eaecb856d2173bea130"],["/post/22b5b237.html","0c846ea322113e1a287d8baccfb78a6d"],["/post/23f72a93.html","16b7421ab731e0275d61b73b48026481"],["/post/264a9c89.html","c3004a6457530d08ff98363377eb976d"],["/post/265c0f5.html","36b1efa29d93aaa1aaa4b6f909acd871"],["/post/26fa4dfc.html","d742525d4a8c32ce97c4037dcca803c6"],["/post/273ced06.html","fae77e15fdd3aad31b2c5ecc68e37fbe"],["/post/280fbdcb.html","40a52e645a05453b5a47063766b3afc8"],["/post/2ee4d523.html","7abace5492d17559d29df8760e32c5af"],["/post/3090aa13.html","0daedeb934b05cc3cbb822c7c919694f"],["/post/31a770a5.html","3abd1aa2ddcfc0f931eea6074c4c7748"],["/post/31f89579.html","597f15cc3c21f6a4c4152e00dc939bbf"],["/post/32dc51f4.html","0cfa81ffd39ba7b2b63ea0ed51c53d6e"],["/post/34a049ac.html","98df6de9a25051d02dc3c7d648ee2dcb"],["/post/34f53a10.html","d1a04d1613dc580fc6c55e24b6995b1d"],["/post/36bef409.html","ed6f5c937b2aace6a64413f57882d18a"],["/post/36e5881d.html","4de1d60073fef7d616fc3841379e12b4"],["/post/380486cb.html","e19e5e9a2c0ddced8731b3fd4734edd1"],["/post/38f8b110.html","0ac07e2395051617c317049015126c30"],["/post/3a3eaae1.html","7b4d6e625ecd96bd773f9ea3563453d9"],["/post/3a72081e.html","9791b92324013120e393c98e133cf45d"],["/post/3bc7f503.html","8ac6f1c60c96590fb2cd6ea15d65682c"],["/post/3c57c5dc.html","9b7c2c79957a95eb37fcdeaeb91fac35"],["/post/3d71c64b.html","7ec807ef04b663f97a76cb59847a5814"],["/post/3d8072b.html","d5bf45520c99a4ddcc4e85ca3559098f"],["/post/3e6878ac.html","98d54b551b7146359f6b19c2c74e71b8"],["/post/3fce0650.html","4d4e9b03e50c090ec1e864459b521f86"],["/post/409dbc1a.html","3e5ecd99afa74a940512c3fa28be76dc"],["/post/40dfaace.html","42dbefb246a06fce4341fe126c1e6c3e"],["/post/4255f31a.html","f0daa42fca8274f5d137417cf0821810"],["/post/42a619f7.html","4ea79cb1c0c16e030a67c1061ddc26e0"],["/post/44505a5b.html","bbf594506cafa07256cf5138b3502717"],["/post/448da703.html","24eb5e0aa877da4cb2e4860a709e0017"],["/post/454c2118.html","256e2c15b52575ed284affe91ac5734e"],["/post/454c2358.html","74b9d5c77f1a44665de241d9ca7ecd34"],["/post/4773b69c.html","c84aee7aeb0d32658a4168f96e1c5d67"],["/post/47b391f2.html","a6c6031a82a37f25ce3345b623e80f4c"],["/post/481e8abf.html","bb0798251a13ec9a4c7051bb12eb7898"],["/post/4ab96b49.html","c95f4de2df0d316b62685b7bc3785130"],["/post/4b15f9e3.html","54e8de2161559cb72868fc24da5f73c3"],["/post/4c60a529.html","ce941c34b1dedcc06b2ad7f5234b7fb1"],["/post/4d6a6b27.html","628e9d17cb9b827f9632cc6fdd525417"],["/post/4db7e28a.html","590013ac5ff4fe459f595dca3acf00dd"],["/post/4dc7502.html","b57448541a761b9b36b0ef14cdbf8747"],["/post/4e876bc2.html","1615ce255684f52a72891b59374f146b"],["/post/4f352d.html","d1e0f674453a0ec7bbca676a111de501"],["/post/4f8fe65a.html","4a260e3c18b28651d5802c238c931be3"],["/post/4fa396eb.html","bffc26ced6e0510c392046d993408da1"],["/post/52730f61.html","70a7afaa678dc200c0aa8a518d9dd05b"],["/post/531de0f8.html","714f8d31b5c92fe961fe08358e1e8500"],["/post/53729461.html","9c8d30c1a2206808b22ab93e405b7708"],["/post/5555df5.html","91718d6a68ba990eb0a5a2a11d372eb9"],["/post/57bfde8d.html","d29b29802b60473229a4e2d47332ac09"],["/post/585293b8.html","b290219134dc8738de3d70040b085951"],["/post/5aa5290d.html","1f49b5193185235dcc593b5e05a53671"],["/post/5abc6d45.html","575c5ff85bb184a2bd9a9d462e72983a"],["/post/5c86d06a.html","9b9a92c537253cedbf7bdf8d0f14d169"],["/post/5e189593.html","147201fdb18ddcd85249f1ca32981707"],["/post/5f2d4a77.html","0f7319c1bb39afa62be18eca302b68bd"],["/post/5f341cbe.html","67add26d2b8429efe394190d9b6212ca"],["/post/60850415.html","7bfe470906a6794ba5957420313c56e7"],["/post/62cb42be.html","7f2b8cced7f296cfc3706f1bdd9c859a"],["/post/6501181e.html","7455b1f18a14ee830cec02bf146b0620"],["/post/66258384.html","ba1975c54ee48bb68083c90b67f73f09"],["/post/662b8b80.html","ba376789af08b6898dce4fbb3465b743"],["/post/677d0fef.html","3a216908bf7473c4d71573a322e014e4"],["/post/685bcc20.html","94efb8f7d1558ae7381839e5cae85d4f"],["/post/686dc27c.html","d5d12af986a90ba55366bea8017c2f50"],["/post/6c71e418.html","937287efac3f84b6f8f121b75df2dbc5"],["/post/6ca1eed5.html","c9bfc3de45fcba8e4fcbcd8c89ae9274"],["/post/6cb7680e.html","636fc3290a828ac4dd8fa156176b7f40"],["/post/6d52b9f2.html","ec904333b8569850fcb83324ebd02cdb"],["/post/6db0d89d.html","af94ec6f39f926524bfaa81adeb7c9b5"],["/post/6e80eb1e.html","61bdf6dbcad69a29b07d706224127794"],["/post/6f3b3edd.html","a050e57655eb8ebba6b7748f6eb5a2a6"],["/post/6fc3409b.html","e7ba0347aab56736e2a14ebd53073913"],["/post/703409c5.html","24b856055ce9871080ff52333c067029"],["/post/7169c4ed.html","018ae1f7aa337d10d1785bcb2415f285"],["/post/73136b.html","18a7ab141d8f5d27cf6d3ffc20b4b03f"],["/post/7410a832.html","6ae35bf07b5d07c880a4e46a498ed3f6"],["/post/742966af.html","36db8d8a312c613107807524b422dd98"],["/post/74479d01.html","53767843d19b773d1ebdaa7c925dcfd1"],["/post/74a4286c.html","3770f7f5a5732be7216c7c9564a04cc5"],["/post/75794199.html","0fd8a573e3841ba1565852f2c6760982"],["/post/75f986a1.html","b4b0cc898afc32e8e03fa971f200d807"],["/post/76485a7.html","359f3078c0a28b9cc8b96410e6654c6b"],["/post/772fc02c.html","b0589628018af51decce3d5403323479"],["/post/792e36ed.html","5c96e8eaafbc2796b84787711dcee115"],["/post/7c50967.html","6e1c098d758a30e7c5e5e6bc6bdb8c6d"],["/post/7d8e4f2a.html","28fc5182491daeb6fc3e13273c9a2bd9"],["/post/7ef8a98f.html","f2e1774a21ff0b642862ee3b76a3a741"],["/post/7fe193be.html","69bb7cc2704d6dd9e0a7f00e21464e81"],["/post/879e9655.html","7064ea49710928fd047b36d494fa1933"],["/post/88e8ae98.html","0742587abce1638e4925eb6a5fd1e808"],["/post/89873dd3.html","946e0355145d1fa7d1d7ca2dc3b1efc0"],["/post/8ddc8a30.html","f1e2d2ee49155ed54d7c7c7726d5687f"],["/post/8f9cfad3.html","88df488b9d5e2c262abb4e2e4628d538"],["/post/918fcaa1.html","63886def4ec0b927ee7921984b20f287"],["/post/92687617.html","58f6c1359c2aeaf98ce107724c734b37"],["/post/9282aeca.html","4892b820a46a87e7d96bf0ca8bd23261"],["/post/9305c5f5.html","3de74c3368a0624a9d75cacd1ee1adac"],["/post/94c9baee.html","4357afd2349f85f0949b97f2bbb1e5dd"],["/post/98804e11.html","453e0560eed2cf818d6520b22239e54c"],["/post/9a9a4797.html","49869d603fd65965ea2a13e7956bde16"],["/post/9c28a880.html","31e7bdff5244a1f81b5a5ca6ee802e05"],["/post/9c649212.html","7a8456f1e61ff1aa13a62857853c1c79"],["/post/9d402b32.html","8f01d9dbb3da6f78f7b8f557a56537a8"],["/post/9eb065c8.html","1d79f9e4fb021975060eea1ad4db546e"],["/post/9f8e212d.html","f28509f823676539c05f299426292947"],["/post/a1751c09.html","9005bec6525aaa2da339a922e14d538a"],["/post/a1cef007.html","ee89f196c8646e42c5bfc3ab09efe033"],["/post/a1fc03d8.html","38e32a2406c41bb2bc7e0392df0853ae"],["/post/a27e9acf.html","82fe20ec68df665000e6786f26f0f270"],["/post/a4c66bf4.html","1beac928a8c001da388e9c7d8ddbdc0f"],["/post/a4efe87.html","9cf8d2d36fd79e41a7c7b1259593f67f"],["/post/a7528411.html","e272838543cad2859b7bbdb6b935b8e6"],["/post/a8759852.html","2ed05bd3a14ec3635d1279e8095d8537"],["/post/aa0a97c8.html","682cd1d778dc01cbf4da9e3114c0f7a9"],["/post/ab4ed95b.html","252526e17d9801329116a6552de07b9d"],["/post/ab720150.html","25935f00aa184ad7e36cd0eb89328881"],["/post/ac92be99.html","194e53dee7678632f8a9e71c5062de9f"],["/post/acf6b02e.html","b1cdc7903820a0de1bfc32b28649f2ff"],["/post/b0d6c7.html","0e8f85a3275e1a977b8820b503241102"],["/post/b3ee770c.html","f7aa3ee3a09802a06940372baa3c1769"],["/post/b8ca3dfa.html","55d74a3aa8fbf49194935f59071cbca7"],["/post/bb7f8e97.html","90d4fc70cccec55be331bed7f141b6bc"],["/post/bba462fb.html","9255750b93cf2bb9089260f66fcbc084"],["/post/bc8586da.html","b4a260c996d580fc41a18b1008ac081e"],["/post/bcb02c2b.html","645aac2cda929b3a07394c512e8e22fb"],["/post/bd36a30f.html","08cbe1dbff37c1b4e14bcc6bb969d837"],["/post/bde4b1f8.html","0cceaad8ede8e6e276fd74510cfcefd2"],["/post/bea42f1e.html","38a3e924d10221be99135d5f67a33bbb"],["/post/c1864474.html","cf022e17a6af8533f36ac5858b70b056"],["/post/c293d2b3.html","483bc3b1356828ae951230fa4a07a455"],["/post/c37095b9.html","cedb9838d752065fb8be8ebc759f62a4"],["/post/c5672df5.html","b8a9d8590ca11a84cfecb4afc67377e9"],["/post/c6d76e9a.html","578940777bbc555f018591840ea38d7b"],["/post/c7fb8250.html","d0a45bbf67c5500f07ad0c9e3c93d624"],["/post/c938bbd1.html","3ced4256ebbae4ac5b245ba6241b8a4b"],["/post/ca14c5df.html","7015abfa72e29cac08457ca75064e46f"],["/post/cd18de84.html","9b9424e8a8db6b4b2b170338224070f7"],["/post/cd41dfb7.html","3baea5f4494e356988f69560e6d337c5"],["/post/cea184b4.html","4e63b95118be317a1392c83e8ba59219"],["/post/d120bd8e.html","ef3bf9e48b06c4cbe0feb6df614e7af7"],["/post/d50b784.html","f748a44a5471c9d38b8c9c65e168ffd9"],["/post/d632e628.html","137cf4dd908cb44aedd0ec854f9f914f"],["/post/d6a5bd15.html","d9d21b95b86d624fb1b4ac66306a562b"],["/post/d73de254.html","6290aa740508d830ca0f222620927e82"],["/post/d7435d20.html","16d00da27dc2472e56bd7dc03d0a96f5"],["/post/d81c5363.html","cb9898d0ff4d094c950d92d429a86595"],["/post/d899bd9.html","d589b161dda3d812d7ad53bd8d9a8138"],["/post/d9083bc4.html","f2232049231752a8806ec987587c6f53"],["/post/dc981233.html","3f69cbc9dc356f7295acbe69feb36a51"],["/post/dea65d58.html","941e4ae432ecc84dfb2ba39dbba089f4"],["/post/df76d545.html","ac2f5824b0c51ea70a2c93a53ee16aec"],["/post/e256d99f.html","d8949747f7852186d90cdaee6d87b4cf"],["/post/e290dd8c.html","b99e9a7d0745d20e84bfef134b05e113"],["/post/e3e37943.html","e157606cc1243e7cde6eec1f764fdf3d"],["/post/e583ed8d.html","6d636fa0dd07b0d312f480a7dae8efd9"],["/post/e5d75450.html","2f2668a9d20204e23e3e84435e0fb798"],["/post/e6364ca4.html","ea42a01a8d9ce91a7528210282cfc135"],["/post/e7058b47.html","eec9e4c95556453cfbb6238e1379318c"],["/post/e769f01f.html","a4b38bba7f105d471c0962dd8275653e"],["/post/e78ad34c.html","a7e804e3175ec28dd4c365b9a8f7b48c"],["/post/e8005312.html","b79ce4884d29ba1350a7867da4047fdd"],["/post/e8ae7612.html","48d39d4842c3e34727c4f4bccae84d2e"],["/post/e8bc7157.html","8b30ba57bae5c8078656a437ceb9c5b2"],["/post/eae0b80e.html","4a40f944a980185eda78d42b731b36be"],["/post/eb9ab36.html","91e25dddc4a8f69e9fef42713d2f9e72"],["/post/f0b23c5b.html","2548a826847890b89f1103a5fc495e3b"],["/post/f279299a.html","0fc6b65301e2201778c27e4f4b62c75a"],["/post/f3d9c661.html","0baf3ca77abd9ba578596726c826057d"],["/post/f4bfd16b.html","c189d913217982ce152e0c09194225e3"],["/post/f7b33ddd.html","06f9605463aea1031e811534b99a08f9"],["/post/f8e4bc7f.html","3666408bfe27924d0ab6132af75953d7"],["/post/fa83cee.html","bea0025d2c2b49132a53d4a362d8569d"],["/post/fb2f630e.html","a49ec4c37a6ce338e1c6b8c28aea2872"],["/post/fb5efb9c.html","6345bf0b51a428a95ef4425fd199ea1f"],["/post/fbf7f335.html","357a61d7a1275e26496cacffdeacd62a"],["/post/fcb9464d.html","65aac66edb3437dbcee4e4b7eec2ddf8"],["/post/fd581850.html","780d52b4e1b7da632c81e30a87004a68"],["/post/fdc06f3f.html","89bb603d3ef8d22c285f2dc89e78abf8"],["/post/feaebfb5.html","60dc3050b14f66e33384ee04fe2e1b6f"],["/sw-register.js","6fc2934a0751e17ab862d941c4d7e47d"],["/tag/1988：我想和这个世界谈谈/index.html","bef7385b7fcb89b47028561bef7699fd"],["/tag/1Q84/index.html","3d08aae7d238d8a04eae662d05f2433e"],["/tag/2017HDU多校/index.html","14d35e7d268c210bc6b5412e06133b24"],["/tag/2018HDU多校/index.html","9aa2f319b7ef40f780c5248bf7e5c55f"],["/tag/2018寒假集训/index.html","72390c631ca2a14789fd36bab0f2ee04"],["/tag/2018寒假集训/page/2/index.html","a806ddb677ab99d34cda1e55a8fbaba0"],["/tag/2018春季训练/index.html","5a240bdf7f88a58bd56558975a7f89ef"],["/tag/2018春季训练/page/2/index.html","f5481a39a78ead8924bb9de46917ee76"],["/tag/2018暑假集训/index.html","9f902cce04d38c2ec6fae1b94fe5dee2"],["/tag/2018暑假集训/page/2/index.html","f1dd8f3587a7275caf1e3a0ccee932d3"],["/tag/2018暑假集训/page/3/index.html","cae50f078076e8c13f5cb8f0bfea5b09"],["/tag/2018暑假集训/page/4/index.html","f46fd6e7db9f636c6f066f8d1f8d33e8"],["/tag/2018暑假集训/page/5/index.html","55a61795f52fda3bf0270adbe93949af"],["/tag/2018暑假集训/page/6/index.html","d7b2cfca73705086afd4d3cf75908480"],["/tag/2018暑假集训/page/7/index.html","3031c1819c9a6c3833d436d707f124df"],["/tag/2018暑假集训/page/8/index.html","65941d8f9f3977a271b41e844198f95d"],["/tag/2018暑期选拔/index.html","591b6b39eb23fcad4b8693e74c3b3aff"],["/tag/2018杭电多校/index.html","7fe2c0eddf75954557c1a05f4ab1872a"],["/tag/2018球季训练/index.html","0678c8278f24e2c652bad9c121bdb310"],["/tag/2018秋季培训/index.html","3240c16403a63b4e4af7c5222aa0015c"],["/tag/2018秋季训练/index.html","00db9877c802ae4d063df1bb0751fffa"],["/tag/2018秋季训练/page/2/index.html","f6e808cd521686f42f6b1f9869e1e5d0"],["/tag/ACM/index.html","13a0a578d09c6d3dfe5dafd89133abfb"],["/tag/ACM/page/10/index.html","7eaecc37621a42880da0cef57e36faad"],["/tag/ACM/page/11/index.html","4ad8df9672eb08ffc6570c77470d9cd5"],["/tag/ACM/page/12/index.html","ed20caa22066936953aa36a35421eef0"],["/tag/ACM/page/13/index.html","df33c7907a9f3382aba4250c1c9bab61"],["/tag/ACM/page/14/index.html","c809a0afa8ecde821f02d7b362131d6f"],["/tag/ACM/page/2/index.html","1b416f4de57668b25edc11656c066eb4"],["/tag/ACM/page/3/index.html","e03863b8de3afd2729e7729d6f269b45"],["/tag/ACM/page/4/index.html","dec2f07bfbe4e9c2a12fbc1b593273d5"],["/tag/ACM/page/5/index.html","1d84e0bade075ac9581f99ebe8b9a315"],["/tag/ACM/page/6/index.html","39bad0a358b544431a682911b59338ea"],["/tag/ACM/page/7/index.html","80dc445509679d578c6eec94141c1a91"],["/tag/ACM/page/8/index.html","73ea5da0df66f91dbac2c24e483e7786"],["/tag/ACM/page/9/index.html","36cc072a0915bd0bc784924d694529ab"],["/tag/AWS/index.html","bd4af390e258c77281c31625cd1e3a4b"],["/tag/AtCoder/index.html","2299f24ab0d831e87cfeba8f028c7f01"],["/tag/BFS/index.html","48451034984b9e7833686f27f6437f9d"],["/tag/C/index.html","40adc8a9dd62d792b1b25fae31ee3446"],["/tag/CSU/index.html","66df2cb66079521d5c72512dd6bac1d1"],["/tag/CSU/page/2/index.html","0e685d28b9c18a8b44455028430f9723"],["/tag/CSU/page/3/index.html","6f0ac9f2fac2b4630fc6a957e54d6424"],["/tag/CSU/page/4/index.html","a4fa9f2b7056e182e7be60e79bea0958"],["/tag/CodeForces/index.html","5dc884ac527fde09f902dba0ff274bdb"],["/tag/CodeForces/page/2/index.html","e1355eb59f270e3b00817e5d32e4a6db"],["/tag/DFS/index.html","5637f1a26729135cf3f5a9b82eeaeeaa"],["/tag/DP/index.html","05f31af16d954f341dad1e4b95953eca"],["/tag/Dijkstra/index.html","5a2233923b0ecf5d001919bba2cee7c8"],["/tag/Flask框架/index.html","14cda9a34e55b652dd5d6b1981118cbf"],["/tag/Floyd/index.html","9ca8c2f03ef4098134a565c5949200db"],["/tag/Git/index.html","d5c9d6a921e0374ebdbbd9820a26f46d"],["/tag/Graph/index.html","9c5e1948f2cc94c6f30aaf1c447abcc1"],["/tag/Greedy/index.html","7b7f91644c216429916c5cdfaca9de14"],["/tag/HDU/index.html","c942e98dddaf0570e463f7fb6fc592dc"],["/tag/HDU/page/2/index.html","9778b0e04ea43603f67da17fea52ed03"],["/tag/HDU/page/3/index.html","7c00334efe4f8bbf976063a58562a10a"],["/tag/HDU/page/4/index.html","d02aa4c6ed7abc2719a6dac6f2dd8978"],["/tag/Imitation/index.html","ee844d56a4eea8bd45e85beb290a6ded"],["/tag/KMP/index.html","45e95a5336792685003875eff13dcd78"],["/tag/POJ/index.html","d299460a2cfc8a282fa7c4389cf7b578"],["/tag/POJ/page/2/index.html","3c2ac0ca66cc02d46987a92dda46e26f"],["/tag/Python/index.html","3221ca16ab01ffdae88f5fb26d53aa12"],["/tag/SCU/index.html","a28daa0157001a7a5fe0fb5a578b21cf"],["/tag/STL/index.html","243c8675efc907b36fbda514c59623e6"],["/tag/STL/page/2/index.html","3b84208a41900d242d690af6cc9e0ab8"],["/tag/URAL/index.html","d1afdfc610f63bf81ee30fae5ffade24"],["/tag/UVA/index.html","67e3fbd18771c245710196c680153c84"],["/tag/UVA/page/2/index.html","62e87a4c288106f8bd675d2a3dd5fcb8"],["/tag/UVALive/index.html","28f20acdce4f7573de09ea61773b2d9d"],["/tag/VSCode-Git-生产力工具/index.html","6b3757905d18a22bb564a9966f093970"],["/tag/VScode/index.html","8caf10d4a60b13a27545dc63f68d722b"],["/tag/ZOJ/index.html","df754e60e26fff18a600c05681dc250b"],["/tag/math/index.html","d7d27222e4c69ef03a5df66713daeced"],["/tag/test/index.html","02d051e2608cf5207c137047ebc62818"],["/tag/不得贪胜/index.html","a45138812bc90cafa1e737f6a74d2327"],["/tag/东野圭吾/index.html","1bcc5a9b9de0522e4cd5f6acc66aa096"],["/tag/乌合之众/index.html","c937c6e26ef6a6ae0806c7dce0559faf"],["/tag/书信/index.html","690cda8eec951ac5e2799c8c41d2cfb4"],["/tag/二分/index.html","199340a856ae8c60e2756b49a56090d2"],["/tag/亚马逊/index.html","654fd5895fc15c246d56fbe2695249ef"],["/tag/亲爱的安德烈/index.html","106f0870464903fbc56da5faf4e26137"],["/tag/位运算/index.html","4f46f6b3a6b0748c1f7d8cf27995dee4"],["/tag/几何/index.html","07ebb8c600c0bee55d27515d749be00c"],["/tag/刺杀骑士团长/index.html","15fc6562272bd6c9c9be413d3f8166ac"],["/tag/前缀和/index.html","9d354cd87e28b7c68eddbe0c1965f06a"],["/tag/区间DP/index.html","4974f1619d259b78e3795db9c0874652"],["/tag/博弈/index.html","d7a675b8ab20e3e460701e590e02ac27"],["/tag/历史/index.html","ffc098521dc342632e3f9581b9e49c82"],["/tag/古斯塔夫・勒庞/index.html","e935c5c02ef0eface33db1d5980d3aed"],["/tag/图解密码技术/index.html","4fb903756ddd92c23a4a1f4549353284"],["/tag/大数/index.html","68f7d718cbccd8c7fb3dfb26d9996d25"],["/tag/天幕红尘/index.html","c4a409d110096c65246eb9d94be7920d"],["/tag/如何阅读一本书/index.html","1d7ac8b5ba33961ff81d30be1e362931"],["/tag/字典树/index.html","c73fe6c9c20bfc95719483372ee69c97"],["/tag/字符串/index.html","2065e9d4c5bb3ff92fb07f36c75949a7"],["/tag/字符串hash/index.html","6db07cef5d6f9faed9989048e2ab650f"],["/tag/安德烈/index.html","4e75d0d2cb51ab52cead7bf6ea02e41c"],["/tag/密码技术/index.html","282c36c98b61a556b7f075fd35e8b3dd"],["/tag/小说/index.html","e02eafbda9be009a43ae79e34fd1294a"],["/tag/岛上书店/index.html","c02a68a1802014ec79b97fa46e553779"],["/tag/并查集/index.html","555dc25c09f321189ce4e461b9dbba0f"],["/tag/待补充/index.html","a0a461e90848c834379fedb97c1c6027"],["/tag/微观经济学/index.html","5fc051191b7caa2784168de4339064b7"],["/tag/数学/index.html","3cfd6f97207eeaa005b1a1189505bb72"],["/tag/数据结构/index.html","8e42fc2f0567125c9b0f6098da47dcb1"],["/tag/数论/index.html","92a55a7046a04e0d50cd47f82334cc72"],["/tag/文学/index.html","0fba5d22c8321727e47a789201b61a0b"],["/tag/文学，小说/index.html","d902c6f4fbda7ca4c697508d333e119d"],["/tag/旅行/index.html","a00a340e125e2cd90bbe7f6ed2048c09"],["/tag/暴力/index.html","1bfeb4b5802750a9237f72d3c68de43a"],["/tag/最小生成树/index.html","4a9c188f426c4c91342f5a7079bdeb15"],["/tag/最短路/index.html","c69950de926729d2aa2a79615d27dd7b"],["/tag/最长路/index.html","62e740e66caf77130a7339f9732dcc33"],["/tag/本·伯南克/index.html","328cad1664a4fef020125d34b0fa24b2"],["/tag/杂文集/index.html","8ad69625ff1add173ac8ba3c41961174"],["/tag/李昌镐/index.html","799cdc9f32bec6803832c697a1f029cb"],["/tag/村上春树/index.html","7db24f0495f6c993c6d889f8ad802da2"],["/tag/枪炮、病菌与钢铁/index.html","6b23a6fa77d30b7d8fba2ceea2b52b9d"],["/tag/概率/index.html","3f6ed6ffbeef5c460050e0690c6cd67f"],["/tag/正则匹配/index.html","23cec94a089620d8cf9fce03861c4063"],["/tag/水题/index.html","4a109355316981d32ea8fe9f2cd5b16c"],["/tag/游记，武汉/index.html","7ff78bdf194ca2efc3695f92982a426b"],["/tag/演讲/index.html","a7b3b89c266ad6697b7853e304adc68b"],["/tag/矩阵快速幂/index.html","147f3f2ef6248d3f036c86d933884b5b"],["/tag/石黑一雄/index.html","ef6ed66340bad73ec6375fd3abdbfacf"],["/tag/社科/index.html","2dc68e2b18b12899b594b61a4b85b7d8"],["/tag/笨方法学Python3/index.html","53176e99324e8e33564819d338e23a95"],["/tag/算法/index.html","5fdcbe01a2934e95675b31ece95b47eb"],["/tag/算法/page/10/index.html","0b4ab01bb6141048417d3803f472b7c5"],["/tag/算法/page/11/index.html","ecbb0b0cc11c7c1fcaaa7fa42bd333b1"],["/tag/算法/page/12/index.html","b29d2373dd0e36f3a3b4c6c7df13b8c0"],["/tag/算法/page/13/index.html","e794d2e3227091ef7abb50a2f2c8e209"],["/tag/算法/page/14/index.html","987a1e1f740265cfa24b5d15701eef01"],["/tag/算法/page/2/index.html","c68384d27f6451bbfbe71862bd4c1db7"],["/tag/算法/page/3/index.html","9705b502b17ffa6d39a4be0feb1362fe"],["/tag/算法/page/4/index.html","e4ef7a9d4c188ebd2fbb7c6a75093062"],["/tag/算法/page/5/index.html","e7d73638651e9f51be3298f929595bf1"],["/tag/算法/page/6/index.html","5a67e93f51d83340498068624ba261c6"],["/tag/算法/page/7/index.html","0b8a58932bdf15114276c6c9352a1f9b"],["/tag/算法/page/8/index.html","71a38479ee808ae05966b7cf083206dc"],["/tag/算法/page/9/index.html","87b4ee667f90af1aa98c0f7cbf1a51b0"],["/tag/素数筛/index.html","148333e94d71c29a4aa98ec10fb57147"],["/tag/线段树/index.html","56705f4f736d870eff31aba04fb88447"],["/tag/线索二叉树/index.html","a54ebc9c32cbd94d070f4b53e62639af"],["/tag/结城浩/index.html","3e7c4117c3c7e5f5a938e73a57d06140"],["/tag/编程-C-课程设计/index.html","71636731800eddc1c2711a588ddaa9bc"],["/tag/编程-PHP/index.html","7a89c5a1c69e91998c17db9268b35b05"],["/tag/编程-数据挖掘/index.html","70590fffd7817855dd7dd926c5c08c2f"],["/tag/编程-编译原理/index.html","fd2372641686e811e2a23eb2f6c58a78"],["/tag/编程/index.html","6bccb41e8fbd9234fa824afeebd6fbfb"],["/tag/编译原理/index.html","60111a4ac710a3cd3e4adde861b38acd"],["/tag/自传/index.html","a69e7e1b59accdedce887a8de336afdb"],["/tag/艾萨克·阿西莫夫/index.html","7e7185c565d215edf2def289edad809e"],["/tag/补图/index.html","84ac1c6a759e6cf33dac0da584c1186d"],["/tag/规律/index.html","d41c2d973edebafe7dfa6227436172f9"],["/tag/解忧杂货店/index.html","62bb4cd42647302fc249ac93a12bcc8e"],["/tag/计算几何/index.html","d8712a6a57b64271937bf2982bfb0792"],["/tag/讲座笔记/index.html","27ef5dce0c7ebf10dd7b67a0dc77f73e"],["/tag/读后感/index.html","df96d28beb4e883c45f261381dff2c94"],["/tag/课堂笔记/index.html","1239af8b577af39a95884c715a487356"],["/tag/课堂笔记/page/2/index.html","8705fe9ed89cb3439e79c6f72cfbc9d3"],["/tag/课程学习/index.html","38194f3fba9fa52ad9ddbfb8436672cc"],["/tag/豆豆/index.html","b78bde3751b5d06041f88a743721086f"],["/tag/贾雷德·戴蒙德/index.html","364c97e8353711a5250790db79c0b36e"],["/tag/辅修/index.html","1e8029120366140a8bd09c894d478dea"],["/tag/辅修/page/2/index.html","960656fb0c5bff5c55b95632a4547486"],["/tag/递推/index.html","7f108bbc41dc67229b47bda42e1a04bd"],["/tag/野火集/index.html","7e309297ead81ed4169fa94a4d1fbf51"],["/tag/金融学/index.html","def2c1d50ac0bc4c10d058c23db32537"],["/tag/金融的本质/index.html","f6d807bf0548470d5d58e1f864490951"],["/tag/银河帝国/index.html","f56ce557137c521fb0fdc83aa554e406"],["/tag/阅读/index.html","1413ead9a215f71344941209d3c4c9ca"],["/tag/阅读/page/2/index.html","a7477dced419bfbd40a9a560f6cbbb81"],["/tag/随笔/index.html","da7b0d3d9ab6cb84a7c0c223c9d2da49"],["/tag/韩寒/index.html","0b4d3e61557f409e0709a199e42f05ff"],["/tag/龙应台/index.html","be5d6f8ed94029eb531edbfe4fd2cff1"],["/tags/index.html","c13b1d4321a72b43f687b6e918ac9be0"]];
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
