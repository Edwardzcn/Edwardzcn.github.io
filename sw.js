/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f44c906bf4fe8b7f324ce7e4d7afb544"],["/archives/2018/01/index.html","9e9ef0f03ac1176136e3e8c27af05b41"],["/archives/2018/01/page/2/index.html","24dc911ad7420e8b1008c4f4e5625486"],["/archives/2018/02/index.html","76c5a2c5094b86dce37bceb215160256"],["/archives/2018/03/index.html","763e23e8800833245f6d631489a83031"],["/archives/2018/04/index.html","2eeb920f453e8faff9912b40f69431d9"],["/archives/2018/05/index.html","34beca2f537b58107258148fad748c9f"],["/archives/2018/06/index.html","a4d03c80ea728a74a46f1ae601455bd7"],["/archives/2018/07/index.html","44278a85e198833e1889b69862f84d80"],["/archives/2018/07/page/2/index.html","a137f0e96e3ef2985a67f17c4ed751c8"],["/archives/2018/07/page/3/index.html","ac6a34b6d7ee72cc804e5324bca444ad"],["/archives/2018/08/index.html","92528d14efd1fa7deb2fe5d8083542b4"],["/archives/2018/08/page/2/index.html","6ae0c5a1e5b417e796047e7d2c0fc3f2"],["/archives/2018/08/page/3/index.html","60631aa65e720290aa23d1669af68b94"],["/archives/2018/08/page/4/index.html","ecd91bf67adb8935934d63a78114ea27"],["/archives/2018/08/page/5/index.html","ada64637fa75572c004eba37c21428a8"],["/archives/2018/08/page/6/index.html","76a7ae55ea4f12f2b76078361546edcd"],["/archives/2018/09/index.html","00bad5ff6c020ac894f07692fe987b41"],["/archives/2018/10/index.html","db314893e4605e5dc06f4b4a569f632b"],["/archives/2018/10/page/2/index.html","c1fc870cfe7058a36e95fd94322b6ef0"],["/archives/2018/11/index.html","d8b82629148b230e684784b0f2fdccfe"],["/archives/2018/11/page/2/index.html","35b3463c77d8c3cf05e15ace62c3b327"],["/archives/2018/12/index.html","b5f377089c179759625861ec0d4091d7"],["/archives/2018/index.html","434351f6a249bee53fc82da7e97dd501"],["/archives/2018/page/10/index.html","79e8be5b0019cff0e45b678ff0b59747"],["/archives/2018/page/11/index.html","fccb3e30f0062598eb12106e2de2c616"],["/archives/2018/page/12/index.html","1c6ca696e0938df21151f8fd25e5b8d3"],["/archives/2018/page/13/index.html","7c3c85962aed1371d6a67dd786eb205e"],["/archives/2018/page/14/index.html","461c48e1ef8ac4a33aa25e5ab55d53d8"],["/archives/2018/page/15/index.html","06584a7fb176a1c0cba865048187fff1"],["/archives/2018/page/16/index.html","8fba434eb122545667e832f91b20a5f5"],["/archives/2018/page/17/index.html","c6a0d24402678e191c9b23e56da1901d"],["/archives/2018/page/18/index.html","14b72f1e287948bd26374b3a4da2e827"],["/archives/2018/page/2/index.html","4420d3b6e4b0ab62212c2cba23ae28db"],["/archives/2018/page/3/index.html","ee84e00b6c89e26ea9a45a9a45a325d7"],["/archives/2018/page/4/index.html","e362da5a5ceee9cee7aded05d533b6d7"],["/archives/2018/page/5/index.html","1456feb0f9d31891a700f3842a66c0db"],["/archives/2018/page/6/index.html","2aa00f18588ff7757965810c882dc3e1"],["/archives/2018/page/7/index.html","baef9e47ed280c00c6a034c1f684771f"],["/archives/2018/page/8/index.html","b653963e55d83f59264181cb5fd9f2ac"],["/archives/2018/page/9/index.html","055c7f6b96c2f7bc3cac8fd2b4c0061c"],["/archives/2019/01/index.html","833cbaaa8bae68ab7748eb3e640a9998"],["/archives/2019/02/index.html","1ba2db93a62bc7baceec94538b2d43d6"],["/archives/2019/03/index.html","866533bb063081913414b83312e6bc4a"],["/archives/2019/index.html","0a92750a9000ebe4052cbac1c5ff3fde"],["/archives/2019/page/2/index.html","c6f91743bedc087d900284ea4eb9311f"],["/archives/index.html","62426527afcc89198ae392ce0f981db4"],["/archives/page/10/index.html","85e6a333a48ca38042fb996921d8f8d2"],["/archives/page/11/index.html","3cf0249900be33776143ab4bb2a2de3a"],["/archives/page/12/index.html","62592de55e3d9df74c1771b8c6716da9"],["/archives/page/13/index.html","99b0352de3a5b66003f124ec943b7fd1"],["/archives/page/14/index.html","2c0654680d92dff36d6927433503810a"],["/archives/page/15/index.html","43ae95acd83532f0185a94061c10b761"],["/archives/page/16/index.html","0ed844d2b99f0209f2e435ca5da9b313"],["/archives/page/17/index.html","49dadfbd0fbc58f9d12232c4a9f00d80"],["/archives/page/18/index.html","8911774a4e5086bd36626add290158aa"],["/archives/page/19/index.html","6d808d80efd20be8bd87d689fd945407"],["/archives/page/2/index.html","8ac7e0db897afd675626174be40a6918"],["/archives/page/20/index.html","807f725d3a84faf08cbbfe5443ef280c"],["/archives/page/3/index.html","7e7d9324dfea61d5deb1226150567565"],["/archives/page/4/index.html","34b9d3db07e8f8893762b9dfd117df33"],["/archives/page/5/index.html","488c7ae3d369abf9b5dc99b5c781b626"],["/archives/page/6/index.html","ef588d60cb08ef25b0217359598f79a4"],["/archives/page/7/index.html","fb60edbc93c6dc55e61379e3cc217ba1"],["/archives/page/8/index.html","d9a1b1119941b2e8804e07726d484113"],["/archives/page/9/index.html","de524988727144a5f13fcbf6ddd4de82"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","514ad7c5bbeb0e0d860914392d53c26f"],["/baidu_verify_ZzhwBFUe1V.html","e164619e724d4dbbb28910b1a9c53833"],["/baidu_verify_dw73Nh8OEw.html","ada35e288c90b4604de5c8d736fa4d5c"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","d3386793d76c1449de6560d8d4161977"],["/categories/操作系统-集群/index.html","5e4602e6aef9a74866323bfa39bac443"],["/categories/数学建模/index.html","7882e8bb0d42e74da7fcfa0346677677"],["/categories/旅行/index.html","b4f7707bbbe498590aaec1a73bcfba6d"],["/categories/编程-PHP/index.html","af30d303dee949565b78327cfcfa69f0"],["/categories/编程/ACM/index.html","bc6ce173c7f187c55d8c0e1da8eec3de"],["/categories/编程/ACM/page/10/index.html","1c3c1432937a88e3de149481be259b36"],["/categories/编程/ACM/page/11/index.html","ff4026e58f03b2da5589a6568f36812f"],["/categories/编程/ACM/page/12/index.html","2a3e3a380f405ca7f549dc0f4fcd6fbf"],["/categories/编程/ACM/page/13/index.html","43c74501cd9b1755d46d6714fb2ffba8"],["/categories/编程/ACM/page/14/index.html","9eafeea5cae9935705569cfca50bff67"],["/categories/编程/ACM/page/2/index.html","c6153b4a35d9716b0ba870e8bdb43eaf"],["/categories/编程/ACM/page/3/index.html","44cdae15e215d19a22f95c95b78980b4"],["/categories/编程/ACM/page/4/index.html","55678b5410be4f13b6b3c09bc7533fbc"],["/categories/编程/ACM/page/5/index.html","a71ea22047a51990446fb3c6f0b6cd1f"],["/categories/编程/ACM/page/6/index.html","5bb88f53f46795b7c57d2d64d8b82e12"],["/categories/编程/ACM/page/7/index.html","a84f2a18230a725c36ab85b4fa8f9a9c"],["/categories/编程/ACM/page/8/index.html","d425ebf4bb2cc68801aaa1ddbf5c45e4"],["/categories/编程/ACM/page/9/index.html","2682a95c6a5623a3d58c63cab725055c"],["/categories/编程/C/index.html","4c68aafac1c493429daf3335948db36d"],["/categories/编程/Git/index.html","8c3a1796c17f1bbc089a329b82bbb68c"],["/categories/编程/Python/index.html","4942fa2f4e10e42db46fe1fd41621a7c"],["/categories/编程/index.html","ed4d3e1baad3bd22b5376d08ca2038a2"],["/categories/编程/page/10/index.html","ed2c3c7fb6bae55b23a562bbe8a41cb9"],["/categories/编程/page/11/index.html","d02e69a9f4db125a19aa3293a1f74ec0"],["/categories/编程/page/12/index.html","38ab691f34556c968713319636609bdb"],["/categories/编程/page/13/index.html","063ee9f20e3c23415f0d70d5a557af77"],["/categories/编程/page/14/index.html","59e9f02e4e815dd4fc139a53907559c1"],["/categories/编程/page/15/index.html","f0c59d7d502093913da2ad175f57f016"],["/categories/编程/page/16/index.html","e284c41b8f024165b2a49a4fc1e32d45"],["/categories/编程/page/2/index.html","b75ac72f64018775f0aeb293d0862d60"],["/categories/编程/page/3/index.html","81fa56f9bbb804736c22f684b2645d83"],["/categories/编程/page/4/index.html","5c98ee1cb2b3b8362d7eb55e9d6f9dd9"],["/categories/编程/page/5/index.html","588a13e617726c1c77cdf293a121882d"],["/categories/编程/page/6/index.html","4f5177354a4e48f892da17e8c1dc6a4c"],["/categories/编程/page/7/index.html","1df9006223a66877feef8debccc2754d"],["/categories/编程/page/8/index.html","2e1f7a4e8b9606586e6ce41e72abeb19"],["/categories/编程/page/9/index.html","52a63206ab4060b345b3279daa30cd61"],["/categories/编程/密码技术/index.html","bdc34934adafb168ea9f689850addb4b"],["/categories/编程/数据结构与算法/index.html","5bd578cbea6ba00351a51118af62fae9"],["/categories/编程/生产力工具/index.html","043c9672e04c2a63eca2f89e21aa476a"],["/categories/编程/编译原理/index.html","77bf2be0d1d7bacd7778e0189de98d38"],["/categories/讲座/index.html","991cd607fa0da347637a6046de06a560"],["/categories/金融/index.html","393f0cf9b4b2dd0deb7e0b7682704aeb"],["/categories/金融/page/2/index.html","9937dc2e93e30b420a515532d35dc4f1"],["/categories/金融/微观经济学/index.html","afcdba68b3e5c9534fe7eb94b728c609"],["/categories/金融/金融学/index.html","443bf08f122669687978e0cf0707cf3c"],["/categories/阅读/index.html","e7c6ece30caaccdec4d15c7e44d665ae"],["/categories/阅读/page/2/index.html","c841993560e0460fd589c4d740d86f29"],["/categories/随笔/index.html","aadca58ef72e72ddbc9397a7bb67210f"],["/css/main.css","0084b538c661f93c33e3c82bf3ac9278"],["/friendlink/index.html","eb8b8bae60b6d2be6d7772358b28049a"],["/googlea873f713657fb5dc.html","99ddc0b3a264db520b6394e71b2a0c83"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fddeed11e168d107bb30d048659236ba"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","713b820cd65d1d1a188f40736514336a"],["/page/11/index.html","5e8b9a56163b6f14b1eb6bda6836756c"],["/page/12/index.html","9a9564150110928724998f810d8ca1d0"],["/page/13/index.html","7c006b048dce524d838021a360642a85"],["/page/14/index.html","beff185a66c1cafa891aaa1f03427faf"],["/page/15/index.html","c6636ef16dd305bea04c3621d29f1fd0"],["/page/16/index.html","9d77bef60434e8a3e0a2a8dfd210f281"],["/page/17/index.html","3ed38e1753c8886616202cd165263ab3"],["/page/18/index.html","ca5826e5c1cb3b297f80d2f263a4bb8c"],["/page/19/index.html","91bfe3fe9fc9034c7aee5e0478c8189a"],["/page/2/index.html","31a036ec9f827f8b189b14837cef73f4"],["/page/20/index.html","fe5df09c7fedb75b8ffc4d5b8f033cd2"],["/page/21/index.html","9bc8ed5b8190ccce781ab34c33c887ce"],["/page/22/index.html","5049117571412713d698e129d0449b66"],["/page/23/index.html","73a304ce0f2ca1221c19a4b9dbba2903"],["/page/24/index.html","fa4716b60c4f0d87f85e53afb3ea9fae"],["/page/25/index.html","52a5687b350858f53512d49340e19c77"],["/page/26/index.html","7ef5a44e5669bdc570ee43ac8ddce616"],["/page/27/index.html","77a16e027b19d68a888883f927d082f8"],["/page/28/index.html","184495e1fb5312ecf1b37a0eedc610e8"],["/page/29/index.html","c1574e037263c44ffda454cbce1c7e29"],["/page/3/index.html","0fbe7668f2e9e16f9c6cad3cd2f38029"],["/page/30/index.html","b09bc6a072837e2f00ee964c14c1518a"],["/page/31/index.html","377dd04a0aeaba210ceed345fbeec5a7"],["/page/32/index.html","7a71c4aaeae95ce3c5e5faec1ff370cd"],["/page/33/index.html","d19fbef4724d430c3dc983a283c05fbc"],["/page/34/index.html","f6de64976c4b91244e446834d35b4218"],["/page/35/index.html","17f6f99a65a7f4cba92ecb3c857a6469"],["/page/36/index.html","3de25bf845061a101b6a6681bef6cfff"],["/page/37/index.html","4a26f4122c811f512f562f5c66ddc320"],["/page/38/index.html","8fe156da1d99c2baa63e202319756f0d"],["/page/39/index.html","729cd904e010b2b0d1850fd3220eb9a6"],["/page/4/index.html","c2cedea8871b93ed71a0b80383743191"],["/page/40/index.html","44f3beac843da7405ee6a688a3277fc1"],["/page/5/index.html","fe6701c039a69c8f06244f9639afbf75"],["/page/6/index.html","6b23200f194eec56178f7cad3909b02e"],["/page/7/index.html","1aa22eb3b15f2e5b19e52ea3a5bd48f5"],["/page/8/index.html","c37cbb0eda84f04b6ab64391590a2521"],["/page/9/index.html","3ccc4bae1810b199985e3fa143c695ed"],["/post/104a4c5d.html","baba3f755ba99269a3898e3e51d43e5c"],["/post/109aa3c8.html","b8b7b7acf20029c9a6bfcde74603e525"],["/post/11246bdd.html","aa7c7999dfef6cc59686f7e2cbbc81a0"],["/post/1233e925.html","2735984c0f69d605ba5199c446351a5f"],["/post/1448d9c8.html","15393f0de4f5027fdf497f465d5a423c"],["/post/15db1cd9.html","8aafa479196d4db637ba1c779e080d53"],["/post/16b5efde.html","f01c755678975672d7752cfe151d91a0"],["/post/16fa37a4.html","837f577e386331b1e66e22b20b0946bc"],["/post/184fc5c7.html","c117045fd2f3d1db70f698e1e0b36543"],["/post/19e79191.html","96e8529a8362eb01fbe78356d7d07145"],["/post/1b7db6f0.html","79f88fe79bed28c32d20569e0abf72e7"],["/post/1c52564f.html","8d4042ce5abb22b72f3998b7a766802d"],["/post/1dc46f40.html","37a7dc1a48a68059f936ef0b36a13775"],["/post/1eeab2ee.html","4817e397640f5c56726d95905f01b69b"],["/post/2024a703.html","83e800413c9f70395af52bb2345967f6"],["/post/222505fd.html","9559a67ac561b238e544e7f4efcf4346"],["/post/22b5b237.html","7d8e971e6587f53d9dbb97ce603f1b1e"],["/post/23f72a93.html","43ff3d36146cfdb32b36111873135007"],["/post/264a9c89.html","458b81907c10110cbb8dc8f0b708948b"],["/post/265c0f5.html","425050e26a19367d981d5c1daff8b2ea"],["/post/26fa4dfc.html","5466a7f5e94435dbf5f87d70962a68d1"],["/post/273ced06.html","e366b23ff73fe34907ca91d4877c33bf"],["/post/280fbdcb.html","d974a3baa03cab7febe64206ad90093a"],["/post/2ee4d523.html","7ae83ef2eef7ac0678730d21dbe72867"],["/post/3090aa13.html","f3af0cb1ab21f6eb2e25727505c84150"],["/post/31a770a5.html","9617168d186c329bf8565f37a6c99991"],["/post/31f89579.html","3a6cb7a17971e17851f193da07088f56"],["/post/32dc51f4.html","a274ebd8fb44cb7bbac58ed75ab7294e"],["/post/34a049ac.html","08577e220306d4413742f0a8f240936c"],["/post/34f53a10.html","b69a04647be69481ad2cb39b371698d2"],["/post/36bef409.html","c0a1dd83488dfe8905f7ae4c4bc1a837"],["/post/36e5881d.html","cf7bf5e5f8d506843b544fc2fd7ed515"],["/post/380486cb.html","aaf40401805479b7c4741f6bced6c2de"],["/post/38f8b110.html","1021d5a55a0d013d522f2f4985cdcd9e"],["/post/3a3eaae1.html","80bcb4ca530868d469bd70f8c8010b4c"],["/post/3a72081e.html","98c56bbe18bc558ff22206deb13beb04"],["/post/3bc7f503.html","98e478dabd8f39ea0ea9f72c85372380"],["/post/3c57c5dc.html","6ba9aa109b4939e1400f8853b9104c23"],["/post/3d71c64b.html","5438405674bef5edd2ed3d32254c6f21"],["/post/3d8072b.html","e1a6f55e6ee3e4c7e8da2ba1e171d592"],["/post/3e6878ac.html","2a358ffc070dfdb6dd4d025bda2fe27e"],["/post/3fce0650.html","f20fbee21939a020ef7cd901dc918252"],["/post/409dbc1a.html","a2584dd2f3b0253abf67da6ba2c3d829"],["/post/40dfaace.html","2d7111ea2445859aa30676815c9314ba"],["/post/4255f31a.html","1a04ec49995a10365fc961a1b86e48da"],["/post/42a619f7.html","9fb4ce5c14e54d3ef28ed49524e794b5"],["/post/44505a5b.html","cd017e745a73d3847d13c6a96d77d046"],["/post/448da703.html","0cc4f24712389566e506ea27b397e629"],["/post/454c2118.html","4ab7f647c939c78e90ad44c0406e8706"],["/post/454c2358.html","6211ceccec138a017dfb44c8bcd37ff3"],["/post/4773b69c.html","d1aea1abec4921e4f3aea1e168c1c9a1"],["/post/47b391f2.html","3fb474444245bc22991252fb122eb513"],["/post/481e8abf.html","60bed7215d4dad8cb287e6661ccad528"],["/post/4ab96b49.html","039cce633a0135002a539edfccd5797e"],["/post/4b15f9e3.html","5b348795e9394264fb3fb8268937c519"],["/post/4c60a529.html","98cf42f413d9fd8aaa302a62357761a1"],["/post/4d6a6b27.html","78c2975b800457201200be411852db52"],["/post/4db7e28a.html","b5842b0fa89c0cbfdc5fd5d6e1d1438f"],["/post/4dc7502.html","5a4476e0d1f2aa71f3af11040f03bbc0"],["/post/4e876bc2.html","42622fc36f8fc0deca7de2b997c44190"],["/post/4f352d.html","68a4acf7fc2f80b6ce027fb28dceec54"],["/post/4f8fe65a.html","612ddafe7a77cd949c88dc680a0f73b2"],["/post/4fa396eb.html","4db20cee73a8e8d2bbad9cd840d5cce9"],["/post/52730f61.html","1923b34aa845176e74026d002d162ce6"],["/post/531de0f8.html","36f2def884a66b1ce3981e6efddf0b9d"],["/post/53729461.html","b86a8d173d90d63fe26a2cb752f2cbe0"],["/post/5555df5.html","5494859764e78182ec4b629e326b33ab"],["/post/57bfde8d.html","1be32ecd86995efa903ead2f6eb96f63"],["/post/585293b8.html","c216c864d0343d201ad5733f505c35bc"],["/post/5aa5290d.html","96c67d3497668343f4871c0bb1dd7a4e"],["/post/5abc6d45.html","854eed6015966eb8c46501e776af9f7c"],["/post/5c86d06a.html","9ce031b02b431f7a102cd6f2992a5900"],["/post/5e189593.html","440f44931ac09d9ed8bb9713a8a0850b"],["/post/5f2d4a77.html","8e2a32f9413aebff862db9b4f2e7c95b"],["/post/5f341cbe.html","8042035470ad01129c3f14b549b53a9f"],["/post/60850415.html","1b06dfa74958a003f16ae47b80200d3c"],["/post/62cb42be.html","b1785d9af4fe20346be98a8ef53037bd"],["/post/6501181e.html","420a1f40e95b4fda8c716a9294f2715a"],["/post/66258384.html","05eb2138b3c0022e7ae40f955a158a0b"],["/post/662b8b80.html","81a8fb9e330c675869fd733e23104af2"],["/post/677d0fef.html","e8a861f1d346f827f0871598f882d440"],["/post/685bcc20.html","d9801c45b1adf6b83492e10f27fcb36c"],["/post/686dc27c.html","6109b463e3cf494409a5d90bc2864abb"],["/post/6c71e418.html","7d022f7e153b196814581800e4ab8fc6"],["/post/6ca1eed5.html","97778c340acd6e815c72d734314eb063"],["/post/6cb7680e.html","cc53bb1ae54f19547b88d892cf873840"],["/post/6d52b9f2.html","02b4cf8e40764ac156f2c4321362fe7a"],["/post/6db0d89d.html","14865c686a462de836469a46ef6eeefe"],["/post/6e80eb1e.html","861f81c6205975b62f81579f04d33c80"],["/post/6f3b3edd.html","97890e2cbb13674ea10ab5040c2f99a8"],["/post/6fc3409b.html","679be371deaf7bd6cc86c3b0eaadc0d0"],["/post/703409c5.html","e4deb4dff89fab4c2a558ff94f8ef563"],["/post/7169c4ed.html","44a0ce0fa88892de507e0bb466306d88"],["/post/73136b.html","a159d6fc70243861d66b63c28f11254d"],["/post/7410a832.html","594fb3e7e82a5af965f2a561a17e2517"],["/post/742966af.html","680c131c2d0f777b127aca629ff20217"],["/post/74479d01.html","c4325f28f0c09c3cfec0a200011e3a83"],["/post/74a4286c.html","71f88992a8658ebadf4fa3c585be1ea1"],["/post/75794199.html","c76c5a2f297e77306bc060aee34d0556"],["/post/75f986a1.html","e1e9670e7ad558c48f43603b087be17b"],["/post/76485a7.html","d5956547b6e4d9ef4e9eef51600a15da"],["/post/772fc02c.html","f125fc652cad68a6366b84eb2835a277"],["/post/792e36ed.html","148d1faf5998abd6388b2ff8b8a72517"],["/post/7c50967.html","6513f2b462d0c2f3e55935a572038ae1"],["/post/7d8e4f2a.html","3c2be8c03edf31903dabc6b1477d98ca"],["/post/7ef8a98f.html","b1d384511d22f4b28a4f9ccd54b63428"],["/post/7fe193be.html","c5f55ad38a2d9c8c0a387c8b9f6e5f63"],["/post/879e9655.html","99e79bf4e76c81788d8ec9a8f872715d"],["/post/88e8ae98.html","3536d9aaf80d7d94d4840e10c4ccf313"],["/post/89873dd3.html","1c002daf306055f8aa520c3b51848063"],["/post/8ddc8a30.html","fb3d0f39668bb4f6ee29077dbfae9078"],["/post/8f9cfad3.html","ae54f2c1a2927fbb75ca13450da0f13d"],["/post/918fcaa1.html","1558678ce9b2c555e7cfdd1b57647de8"],["/post/92687617.html","9d7f10aacf0120c868e1cbda688bf3b3"],["/post/9282aeca.html","fb27074d288b6b7e6e770200c784541c"],["/post/9305c5f5.html","aaa9dcbf05240c70abbdeb2d4ad09090"],["/post/94c9baee.html","ee3ab8078eed96a6512bbcbea9d62b3c"],["/post/98804e11.html","a9a62cd8c93c5f7cd14c3dc13bd7834c"],["/post/9a9a4797.html","47ba49e2bfac239366c909cc4f2158c7"],["/post/9c28a880.html","922391c340134e71a29b7730ef9f1ba3"],["/post/9c649212.html","7df3399a0841541382944d56bf4754c3"],["/post/9d402b32.html","f2c2b72baa97759abd1e2ec96df93645"],["/post/9eb065c8.html","28a26cdd6738e810e0b09de24eab41f0"],["/post/9f8e212d.html","7e4d9250cd487bb2ed43d63a8ee9c390"],["/post/a1751c09.html","09af91ff31ac1b5dbbdf78d26a38ceb2"],["/post/a1cef007.html","9056a0ca78fa3b65a616a43c2a297511"],["/post/a1fc03d8.html","151e09d87991f1a4f87bf274dce03657"],["/post/a27e9acf.html","30e6d5d20ca734a3c50b5ccef9531027"],["/post/a4c66bf4.html","a624fd5ee0cf08d2e5d9d259bf51671a"],["/post/a4efe87.html","c5551f30d04ee0175d9c5c86b527f46d"],["/post/a7528411.html","bac16405b16651d667dbfdec8202702e"],["/post/a8759852.html","14dd33ea799fa6f5d129705ee0dc1058"],["/post/aa0a97c8.html","62d6150f0d6db9e4b53b7088c3185dbd"],["/post/ab4ed95b.html","9eda5959c2d9172fcc879c38b9347157"],["/post/ab720150.html","fc6be7a4947146532a902cd3800b8382"],["/post/ac92be99.html","5b5cac708870a4d860443d64fd58657c"],["/post/acf6b02e.html","2ded2b786029e7e1ac19d9a682e4fdd1"],["/post/b0d6c7.html","2d93ee55c53d79be650d24871d3f3742"],["/post/b3ee770c.html","72b9c38675c0190650542287c6f724d6"],["/post/b8ca3dfa.html","2d3b3f8ed2a97996340c381bfa8ef1e4"],["/post/bb7f8e97.html","c0074ee68905879b3b41240f8ac85017"],["/post/bba462fb.html","ef2c8e895dfcdc5ad71aed0ab2c30c52"],["/post/bc8586da.html","4100f5893ca99524bb778227aad778b3"],["/post/bcb02c2b.html","edb5d414c339b7a84965f28dd2310986"],["/post/bd36a30f.html","198433298a45b800ae254213254c3a89"],["/post/bde4b1f8.html","996a69f3fc5aee550ba30ab718acf7ac"],["/post/bea42f1e.html","61b2d04322937b8b697d6d9dcdc55ae1"],["/post/c1864474.html","320537a1e85c99caa90d3bbedfe7621e"],["/post/c293d2b3.html","f765ff070928b44d680d9fbd823ddd34"],["/post/c37095b9.html","b75a35ddce5641ed84502762d3aaa8da"],["/post/c5672df5.html","9efcce2626fd3dcbffea59fdd5cdbcf7"],["/post/c6d76e9a.html","621798a6cddbeaf274e8b258b773251c"],["/post/c7fb8250.html","1bcf077f653e59cd1c84f929b81507a1"],["/post/c938bbd1.html","e289d91c6ee209aebd55bb6db6bc7937"],["/post/ca14c5df.html","84e2a114d3f6bb54554e299985683274"],["/post/cd18de84.html","1322af4530efb339633ea1a5e46e3a54"],["/post/cd41dfb7.html","c9554be6fc8dcfb6334c806f3fe2176a"],["/post/cea184b4.html","b3e6d5ed7d4843980d2a72c8f9bafe04"],["/post/d120bd8e.html","17b8fd91ac3ba3621600a6489f2d9dca"],["/post/d50b784.html","b14f6c51faec81a450fe9e2e98d45f39"],["/post/d6a5bd15.html","a12f8e02584705577cbc7655246023a2"],["/post/d73de254.html","a16a29356c0c82dcf5b2b6526ec8e40a"],["/post/d7435d20.html","eb22fc8cc017bd070ade29502afa57b9"],["/post/d81c5363.html","77116b700095710cbfa94d5e0299d3e8"],["/post/d899bd9.html","46dc64f8c4fe0c66c9087cad683229dc"],["/post/d9083bc4.html","6e0b1ee8d79837219904c5166667a3fc"],["/post/dc981233.html","bf6589069a8c637c5885b69476634c7d"],["/post/dea65d58.html","cda64448d8d629dc110a6c2f8e239280"],["/post/df76d545.html","3d4c61461351cd8314fd831d4bcdb9a0"],["/post/e256d99f.html","7dad50bc22dc978235e399a28ef1a47c"],["/post/e290dd8c.html","f073d5d6e88bffb2904c4c023d82eee3"],["/post/e3e37943.html","654f8405212652399b50e9e83db3066f"],["/post/e583ed8d.html","fffaa3f68afdbbad9a04634917012ebc"],["/post/e5d75450.html","b633bd492f34e1d0d25844eb609bc245"],["/post/e6364ca4.html","80509c372d6fab630fdcdc5fe484a67a"],["/post/e7058b47.html","ee93100b14edf4fe4c8a11947dacc37f"],["/post/e769f01f.html","5ac8b5275df9529e2e11d0ed64fca056"],["/post/e78ad34c.html","ad52003cba53baf7ca9f011d3ea8afcb"],["/post/e8005312.html","4a0773d82d93a9ebcaf998312c70bcfe"],["/post/e8ae7612.html","22c7b43f10ef7a60a4ffbaddfe1938b6"],["/post/e8bc7157.html","430dc18e811e22d7279ad439643c22d9"],["/post/eae0b80e.html","62bd8c4d721e30091c31f12a61782efc"],["/post/eb9ab36.html","8aba43ff53ccf2029e8193b9f784e84b"],["/post/f0b23c5b.html","d0c59095233984709eed7a156b53b611"],["/post/f279299a.html","e7aca1a6a7d8b932cc489fcbcbfbb67c"],["/post/f3d9c661.html","7579871c46a0339a7be0f6ac99aa7822"],["/post/f4bfd16b.html","ac1ffe98091c67e742b04d90f7ee414a"],["/post/f7b33ddd.html","dc5bfadf935bea2b51da7b657bb9a2f5"],["/post/f8e4bc7f.html","4c0f5dfd13ca3bc1ea96ae90de8e336a"],["/post/fa83cee.html","6744a31d644fb9061517e1742a875019"],["/post/fb2f630e.html","09ea27083319c5a4a2969e7d6af42c30"],["/post/fb5efb9c.html","56124464d61d55ce988a1b332fe61a54"],["/post/fbf7f335.html","ee4e7e166a8532a957f0371a8029ea6b"],["/post/fcb9464d.html","b73ea02dfe5eb0b85bb52f072c87f46a"],["/post/fd581850.html","04f973967c54146574f9630536210ce9"],["/post/fdc06f3f.html","f220dfa9276e09a52cd15a3897075aa2"],["/post/feaebfb5.html","b8cdce980e610eb8351ea9fb2405210c"],["/sw-register.js","5839078ed4f832507d1eecacb20afc97"],["/tag/1988：我想和这个世界谈谈/index.html","c85dee95d57da0ed564f9151f9f22562"],["/tag/1Q84/index.html","a6d5d4611123fdc56e8183a27beb5b00"],["/tag/2017HDU多校/index.html","ca5adeb12744a3f4d72372fc67cd9d26"],["/tag/2018HDU多校/index.html","37e247b0afda144e43570669529532c3"],["/tag/2018寒假集训/index.html","4140dfb64fb15d170bec23acb6707c11"],["/tag/2018寒假集训/page/2/index.html","37464816393a557bbf964040c2e83789"],["/tag/2018春季训练/index.html","4a6cf3cfaef8b3bf3960297dfd0c2e55"],["/tag/2018春季训练/page/2/index.html","12459524dd2b841158e116a5058b3b9f"],["/tag/2018暑假集训/index.html","15965941297fe22dce96a05a42d3f756"],["/tag/2018暑假集训/page/2/index.html","33ab5b9389150335bea4ace02f78855c"],["/tag/2018暑假集训/page/3/index.html","6d1a60098682c29aa4ebf8998db24836"],["/tag/2018暑假集训/page/4/index.html","9d05070e80a4c6e0771eaa6d75139ef6"],["/tag/2018暑假集训/page/5/index.html","7f3ca876489820ee2260d3a3864ad10b"],["/tag/2018暑假集训/page/6/index.html","32c57b0bc95ea35a40152402a8cbcdec"],["/tag/2018暑假集训/page/7/index.html","64cfa9e938a0661d0f15bc04d71fcccf"],["/tag/2018暑假集训/page/8/index.html","2a493e29f5336ca231eaa07df0927057"],["/tag/2018暑期选拔/index.html","9b01207a25945d133aa455ac71923ae7"],["/tag/2018杭电多校/index.html","9857304741ceb0b295880320b370f4d8"],["/tag/2018球季训练/index.html","ff257becdb662d0481d9777daaa380df"],["/tag/2018秋季培训/index.html","402a4287bcaf67ed8d4b7150da57f8ba"],["/tag/2018秋季训练/index.html","6cd9c5a9afa467d2d98ab1645c0b8174"],["/tag/2018秋季训练/page/2/index.html","cce4e428151c9a0047a9413107527218"],["/tag/ACM/index.html","440e77b845e6c9fb4f7c54f435c86a52"],["/tag/ACM/page/10/index.html","cffc253125091c7216e0dac0312f02bc"],["/tag/ACM/page/11/index.html","e2df93926e44ce91c4ed999dad9f8ceb"],["/tag/ACM/page/12/index.html","339bae4b13fa836b3063eb237a2ea869"],["/tag/ACM/page/13/index.html","aabab55a82f26a0c9b77f4c11a5bed54"],["/tag/ACM/page/14/index.html","c1221182ff8a7f19e7eca2f5b2fa3fc9"],["/tag/ACM/page/2/index.html","8831fac8323f96abe60cfd691f265526"],["/tag/ACM/page/3/index.html","7c923f64e8e4351b7585f611b98f23d6"],["/tag/ACM/page/4/index.html","715a0c44b7a78012a3208aba09ba5c68"],["/tag/ACM/page/5/index.html","eb192e13cd030864f3a77ec600fdfa10"],["/tag/ACM/page/6/index.html","9fe9565e2b99680f0f3aee3c47911748"],["/tag/ACM/page/7/index.html","69e9a782596a5477d9f1f8b9f7a02e5a"],["/tag/ACM/page/8/index.html","d921a7f626af8e38ff950770fa61e06c"],["/tag/ACM/page/9/index.html","cf972e07ffdc560a7e1a5e67ec3db372"],["/tag/AWS/index.html","3b6f3eaeaa135407f9fb7b4d0c4118dd"],["/tag/AtCoder/index.html","53e0f6755aa34e80989ee9a89f4a5d01"],["/tag/BFS/index.html","c365413f51932635ad28e72f6c7e474f"],["/tag/C/index.html","79d67c990a413023ab97952d588e4f98"],["/tag/CSU/index.html","7746733d99f160e5a0ac55578ea8cae4"],["/tag/CSU/page/2/index.html","a2fa6127bb609643756a841c8133574c"],["/tag/CSU/page/3/index.html","51d5e19d3dd23baa2e62b3ba8e4f7efd"],["/tag/CSU/page/4/index.html","85a06b519ff37d4196b7e3157717807e"],["/tag/CodeForces/index.html","4784ae37164cd9f4919719121d61b3b0"],["/tag/CodeForces/page/2/index.html","c411ad1de30d1df9020870955171dba1"],["/tag/DFS/index.html","627885535d1b4d1a40125eeb27f68742"],["/tag/DP/index.html","ef20db1206f6edf2cb28e3ec34eb87d8"],["/tag/Dijkstra/index.html","50efe38e2057d5736387f236797a6e0f"],["/tag/Flask框架/index.html","00cad8309a0a7f270155f55577c808bf"],["/tag/Floyd/index.html","e826f05398ccfaca3cba0a64e4731a48"],["/tag/Git/index.html","0e538d98ec8293ef71dec62b3f2460b2"],["/tag/Graph/index.html","bcad327500718b595f3b3ceb15cf2f4e"],["/tag/Greedy/index.html","2772a34e6ea181f87aaa2aacf0505173"],["/tag/HDU/index.html","c17935c1948ef1f51a4f3a0d533f957a"],["/tag/HDU/page/2/index.html","9e7ee39dcba312f50e7a67e4e8703e3a"],["/tag/HDU/page/3/index.html","96cbe907566b9c19301000991c581e17"],["/tag/HDU/page/4/index.html","0ba824080b219ed26885cf610f0ad80b"],["/tag/Imitation/index.html","8913df97f289ed2fb189148a2949a899"],["/tag/KMP/index.html","0cb96d4656a91223ba361cd276557197"],["/tag/POJ/index.html","726ffc7ba0fdead0d4970c7615ac6e85"],["/tag/POJ/page/2/index.html","cefb3cbb79227753c80b08c3226057e9"],["/tag/Python/index.html","8d85d9277ac4627fdd278fa9762205c9"],["/tag/SCU/index.html","9b7267cc14b1f658d51b8dc0fc3caf8c"],["/tag/STL/index.html","67d4690136724c77ee435d068c318420"],["/tag/STL/page/2/index.html","26d787a18886ce98d8c054d50570ba60"],["/tag/URAL/index.html","806f4dd411bf08c066f0606c2478d110"],["/tag/UVA/index.html","a0f9c1fdf1c6a442bc70dae6c5405592"],["/tag/UVA/page/2/index.html","16e679efdbd4f48f6b846b6093087cbe"],["/tag/UVALive/index.html","53501624634ec16189ae94c2df775ff1"],["/tag/VSCode-Git-生产力工具/index.html","f2c607c83d880351a0a695f4e2b9aa85"],["/tag/VScode/index.html","3ee5b76721c77d76fdc24236841d17c1"],["/tag/ZOJ/index.html","58320f070f6e1c3ceceaa95829d36931"],["/tag/math/index.html","22fb7bfde2461cb8c81b4ccbe96a02ed"],["/tag/test/index.html","82cf553938c4f0e3f7c44999f8497a5b"],["/tag/不得贪胜/index.html","bab63c51cac72c6fe88f0a79e24bfd78"],["/tag/东野圭吾/index.html","27e9fc30339abcf587e0935108e7759e"],["/tag/乌合之众/index.html","4f9fef4f11e4fcadbf882e9299840a6e"],["/tag/书信/index.html","768144ed39e4a25d817ea7701eeaf353"],["/tag/二分/index.html","b6e76281478de4698afc03087a5c65f8"],["/tag/亚马逊/index.html","8c6beead66fcd43640631e464352a65a"],["/tag/亲爱的安德烈/index.html","c8614395f10359452ee262d500da214f"],["/tag/位运算/index.html","28e7e197040026b665495b2fc619aa21"],["/tag/几何/index.html","f4ffefc9cde53aa65bcac13a561fb972"],["/tag/刺杀骑士团长/index.html","9ef2d80132fbb4feb8f439aaa52866cd"],["/tag/前缀和/index.html","7447d501669707c5194dcb88e4e0185b"],["/tag/区间DP/index.html","67653e0df97487e197dbff5f163cc033"],["/tag/博弈/index.html","9af59ec4560e6b068323b6431a1974f9"],["/tag/历史/index.html","8eadfe961ed2017adc7d9c1699a43dfc"],["/tag/古斯塔夫・勒庞/index.html","58716b6b8cbd5a1e4c65820351a759ff"],["/tag/图解密码技术/index.html","8ae7a3942cb50e00713f7beacabe06e5"],["/tag/大数/index.html","f85efdbf80ef8d15e98d36cd6785d748"],["/tag/天幕红尘/index.html","7b0eb68c424f9ffd2b531e1114c963e4"],["/tag/如何阅读一本书/index.html","84a8a04c8478013aed8501fea86ca40b"],["/tag/字典树/index.html","e735d9dc36deca6c727275ba8ba26403"],["/tag/字符串/index.html","5c019a7c0de8a1da7f659b9d310dc57e"],["/tag/字符串hash/index.html","535df238548d89d45671fe33bb5b1239"],["/tag/安德烈/index.html","6dfbd88fe7c485e01aa56c8f4c2fd094"],["/tag/密码技术/index.html","d62eeb2257ac08fdc011571b504846e0"],["/tag/小说/index.html","309b7de2061eda0512a1828f4a596d30"],["/tag/岛上书店/index.html","2260fcdbee9ecdc92a5f7bb9148e0bb4"],["/tag/并查集/index.html","0992ca84297a32a34d74d4f2a0c449a3"],["/tag/待补充/index.html","67f6428e44491941b251133b4f1f7d86"],["/tag/微观经济学/index.html","1dd96b38126da1f7910b4d39182f6414"],["/tag/数学/index.html","51170f8086a2207da8bd0affa4f65b5f"],["/tag/数据结构/index.html","c6d8fb689b12e79d2fd4301c71b17175"],["/tag/数论/index.html","be5752efa22f3d2ae3d90d9d57c1b510"],["/tag/文学/index.html","74be9c599a586d052fbeaafbedd9a7d9"],["/tag/文学，小说/index.html","f7584e81302ecf9e91039de721528663"],["/tag/旅行/index.html","0ecab6bf4c10b566ec39b7b387e434f0"],["/tag/暴力/index.html","be9957523c9fcd75268bf5210f711350"],["/tag/最小生成树/index.html","37cfe6fe4e28edb2b27d64a6596d3b27"],["/tag/最短路/index.html","71994257fb22d6dd38bf9407628dadc1"],["/tag/最长路/index.html","a985a31860bb04b197790ed2e26ba366"],["/tag/本·伯南克/index.html","8b0369e3fdeabb82618fdc1d3c0bf1fa"],["/tag/杂文集/index.html","2c803dccfdb1be9656bac8b428167bc0"],["/tag/李昌镐/index.html","653735201f01524449c44f3c3cb227f4"],["/tag/村上春树/index.html","3c1a3604eff0dea95bf5853920d7daf6"],["/tag/枪炮、病菌与钢铁/index.html","70b1609c20b82424884a003acda0a3f3"],["/tag/概率/index.html","6835828042ac1ddcdd644f2ae9b848fe"],["/tag/正则匹配/index.html","ab6848c44384dc4b67d3794fa42f1967"],["/tag/水题/index.html","13aeaa092a787ed5cf37fc6ffaafeac5"],["/tag/游记，武汉/index.html","3dc70ce5b359b6ae38d6fa39fd2d4064"],["/tag/演讲/index.html","0a5e19bf56811408633df5f320eb8395"],["/tag/矩阵快速幂/index.html","bb433605dcdc1626c33cac8513c2aaa9"],["/tag/石黑一雄/index.html","feaf44fb1df82b1a92bcd6fa2af41951"],["/tag/社科/index.html","8ed0b3937fce9596c5877ad6ca9b0959"],["/tag/笨方法学Python3/index.html","96f926d4ed909a038cdbb911c9fafbcd"],["/tag/算法/index.html","439ee799a072dbb4ae299fc42b36f5e1"],["/tag/算法/page/10/index.html","5dfe91c93624c6a90b42712a8d775ed3"],["/tag/算法/page/11/index.html","4b425b8cf14d025f8368096e7190481d"],["/tag/算法/page/12/index.html","330dd539cc80d986f816d90ace8ed146"],["/tag/算法/page/13/index.html","9ea179ef84923bbb24fe68e9f9a92b3f"],["/tag/算法/page/14/index.html","de4c6ecb7770d985c061b181ae86c693"],["/tag/算法/page/2/index.html","37e4549d85e589bd8a9fb07df48a67ae"],["/tag/算法/page/3/index.html","45111b8b0baa6178b15009aedc96f565"],["/tag/算法/page/4/index.html","c0d19c0b3be38a6853e61fc9f6e7f23d"],["/tag/算法/page/5/index.html","137c7d8b8a5451f5ce87f48baa7202c5"],["/tag/算法/page/6/index.html","1e4cadf276922a877b2b7422555bcdf1"],["/tag/算法/page/7/index.html","9266db4472bfeef29b413da1c7e6d91b"],["/tag/算法/page/8/index.html","fd0dbf3230a2a9223d6e39a5fc6a393a"],["/tag/算法/page/9/index.html","2633548eec7d9ec02a47609d17c64605"],["/tag/素数筛/index.html","e524ffa39e781cf66575e50881593b1a"],["/tag/线段树/index.html","5f282afb593275af0e8a31ec1a555198"],["/tag/线索二叉树/index.html","eebc10d57a8451dbeda1492f93ca80ec"],["/tag/结城浩/index.html","4a60a97e7af8605992f5b90019a7e087"],["/tag/编程-C-课程设计/index.html","a0f10a5a00fa307efa68c70812d371ff"],["/tag/编程-PHP/index.html","b903d1420f3afd570bdd2c44588e546a"],["/tag/编程-数据挖掘/index.html","e9109946994238f4ab7d4a226f1bdec7"],["/tag/编程-编译原理/index.html","177798caee375cf2ce3ee50d73748bda"],["/tag/编程/index.html","94a1c777438ffc901d577c38d70f0820"],["/tag/编译原理/index.html","34e63ba53e783d2ac01a8a55876074f6"],["/tag/自传/index.html","7f2f8db1770ce33cb729747134a65b5b"],["/tag/艾萨克·阿西莫夫/index.html","e1166223a47c5e751bdc6e16e181bc74"],["/tag/补图/index.html","5bbde69eaaa6c76b02b2fa9320dfcd9e"],["/tag/规律/index.html","ab4e449d724fb04c1387cd37db1eb1af"],["/tag/解忧杂货店/index.html","0cebc399fe4c9ce52485e47416bc1ea8"],["/tag/计算几何/index.html","135213a0724e3aaa5ab6de4cd7d1a54e"],["/tag/讲座笔记/index.html","8725775f8ae41bdc09e4a6da36aa2908"],["/tag/读后感/index.html","d049d5b505a8baf61ab67bea90e8f638"],["/tag/课堂笔记/index.html","adb14c5cf26c577932ecff7f449e9ff3"],["/tag/课堂笔记/page/2/index.html","c721bcc8422c9bfa96aa1383157a3533"],["/tag/课程学习/index.html","9dbb1a901e761d8811ea070ed0581775"],["/tag/豆豆/index.html","8bd4b3438e250e6325bae0bf25c9bad0"],["/tag/贾雷德·戴蒙德/index.html","f201d5dff7434ba694004af88d2da595"],["/tag/辅修/index.html","44caf4e11e34ae44a4a7301e75937e3a"],["/tag/辅修/page/2/index.html","fadbedcb0912719f93de7c52def6dcaf"],["/tag/递推/index.html","f68745494abd07b95bc4975fbba0dba3"],["/tag/野火集/index.html","758ed09b63944b41ff2a8e41dfb1c009"],["/tag/金融学/index.html","fc7074a0ca9d7d22dcb269eb3f5cb34c"],["/tag/金融的本质/index.html","be695bc8923d9fa5b10c21854439998a"],["/tag/银河帝国/index.html","65c77b7a0450edaec1f75884e7fa37f8"],["/tag/阅读/index.html","b648816c17d291c3e5e0661230e35865"],["/tag/阅读/page/2/index.html","7685faa68ec4eb6d0e2d68f4fc71b652"],["/tag/随笔/index.html","6111f131ae960ff438202765fd476ef4"],["/tag/韩寒/index.html","1f94b59a256ac288c375016a669871c8"],["/tag/龙应台/index.html","3ab1ff491be4c7c6b010d8bc82370764"],["/tags/index.html","e2b0ad6d170c15498fb2be1ddfc27e9a"]];
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
