/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dca1d2929399c92602e32b32ef15fc3b"],["/archives/2018/01/index.html","f3d2389bfaab4a62c94cebdda853fff3"],["/archives/2018/01/page/2/index.html","ccb13490733b8486bf340352ce7fb169"],["/archives/2018/02/index.html","b5c832d8d7c0354ded554ad5501f5ec1"],["/archives/2018/03/index.html","7232f53525e3c84f23c1f0c43b982373"],["/archives/2018/04/index.html","277a52a77f266c7a5a5da46264f55147"],["/archives/2018/05/index.html","87dbb9be24922f7b722b1631da956800"],["/archives/2018/06/index.html","0ed428c9c58cad363b9938887a092fef"],["/archives/2018/07/index.html","3e59d13d4f9ec338c3d44c8a9d053fae"],["/archives/2018/07/page/2/index.html","6553851972aeb5dca64d717616d372b8"],["/archives/2018/07/page/3/index.html","a65d56b1a8c78e555a10ac0d0ba80aa2"],["/archives/2018/08/index.html","2c7089a88ed754b88682f8090e5e9342"],["/archives/2018/08/page/2/index.html","1f447281a2af5ad6504fe90e5efa6644"],["/archives/2018/08/page/3/index.html","2c34297211d1b5fd0e818dfa8067f1e4"],["/archives/2018/08/page/4/index.html","34a02bfdbb35e8ce24a85dbd33c0417f"],["/archives/2018/08/page/5/index.html","944b84612d2fcfe1b2e9916802d7256d"],["/archives/2018/08/page/6/index.html","3db0806c5f343a2f9c5ff218e257179b"],["/archives/2018/09/index.html","d607bd03507540e6790f678aa130c455"],["/archives/2018/10/index.html","e80db63b007612009c5b33c988344583"],["/archives/2018/10/page/2/index.html","f0d9bb259bdda5100e6463ec969dcee8"],["/archives/2018/11/index.html","c77e1fe36a3cf10d1bf75ae3e087dd98"],["/archives/2018/11/page/2/index.html","d31ed34133197274d95bf15605b92741"],["/archives/2018/12/index.html","c3315008ac079ca783606089bdaf3ea0"],["/archives/2018/index.html","1bfe7c8d7bc14d893a98d570b089bdf7"],["/archives/2018/page/10/index.html","e4edf0066794abad444c634b0dedffdf"],["/archives/2018/page/11/index.html","3dfb1a215ca97aca488fc0b86e2b2bbd"],["/archives/2018/page/12/index.html","953843bb2631b15fefe486153b8fde89"],["/archives/2018/page/13/index.html","8864abe6b7d4a09d495cf25cefd6d445"],["/archives/2018/page/14/index.html","f53f204561aa745b73a3126e7cd6a51b"],["/archives/2018/page/15/index.html","e23a53dc870b4076c34962c9d4d88b21"],["/archives/2018/page/16/index.html","df7b4abcf4794033633d9fbca1f35bef"],["/archives/2018/page/17/index.html","b573a4e987be617cc09908fa3762902d"],["/archives/2018/page/18/index.html","b6dc228eca69b1c0c42b65e2543cb69a"],["/archives/2018/page/2/index.html","cd8d45b72332e25e1b208acf876b5bf0"],["/archives/2018/page/3/index.html","e10348fc15f88853e813d8123f41cc64"],["/archives/2018/page/4/index.html","2a65630a06fd704e20f07e1e53ae6ce8"],["/archives/2018/page/5/index.html","25c56a3a4cbdd4957631a5a4ce5d5cac"],["/archives/2018/page/6/index.html","14d72912d5b7ac6b008151a8fdfc9d78"],["/archives/2018/page/7/index.html","bf9cfeee57e972f66004579d686a471c"],["/archives/2018/page/8/index.html","bbafe964a954eb1901f146f672f5628d"],["/archives/2018/page/9/index.html","b297066b17d2e2d177b3a6cf9b6d0d25"],["/archives/2019/01/index.html","f5d165d27da03d0be5e04c5cfa2b2f05"],["/archives/2019/02/index.html","6585fa3e3360230e039edf612f94bfe8"],["/archives/2019/03/index.html","d92d99386596b446038c82e5f7925017"],["/archives/2019/04/index.html","31bdd506c490c7e44e8c59d5455d4cd5"],["/archives/2019/04/page/2/index.html","4914b3a85e096491132f6e76ccbfc642"],["/archives/2019/index.html","5d8c4d45283d913771e6338b451b3fd5"],["/archives/2019/page/2/index.html","a5f1fd47a333f2846652e7bc9c92a290"],["/archives/2019/page/3/index.html","1ca44524237d804f2442689208658667"],["/archives/2019/page/4/index.html","fc94c55c544df5ea91ca9637680b83a9"],["/archives/index.html","c1dc33bb0daec0648a695637072f08b3"],["/archives/page/10/index.html","222b854258c8499764884709630028d4"],["/archives/page/11/index.html","034534c4efe727fed025083b9da11930"],["/archives/page/12/index.html","2a283f66c0bed610d043b7b9136d4c66"],["/archives/page/13/index.html","db0b4d1aad4e4b1396bed2aef1df7d10"],["/archives/page/14/index.html","f912924ef62da32d3f62d2cfd6f8478b"],["/archives/page/15/index.html","46b05c22220926facddfa9ecb0861190"],["/archives/page/16/index.html","8ec3bcf5f8eec18ca7d637a9771778de"],["/archives/page/17/index.html","7d5112a741f5b64448df1e6418eddbf8"],["/archives/page/18/index.html","d07f0746a43b171e3ef14f84113c5ed5"],["/archives/page/19/index.html","9eed299219adbcf8c9e97c4c64f73623"],["/archives/page/2/index.html","f1980203bb21cc33b97076cd0d34c745"],["/archives/page/20/index.html","9ff0364f4f584c07bc83c188f52fb0db"],["/archives/page/21/index.html","b64eff3e286b8a5ee354b5c8152247c1"],["/archives/page/22/index.html","03622cd9efdaac207f174b02fe4033ec"],["/archives/page/3/index.html","74c1917b0a67764b01ee033b97d6f5f6"],["/archives/page/4/index.html","6c911cb5ca531d637a6302577f660af6"],["/archives/page/5/index.html","b29fffbe5fe495a31e8cfd8f51a219be"],["/archives/page/6/index.html","2e6aaa0697d0a9856acb70d4e876edb8"],["/archives/page/7/index.html","f7475710bf38e0ebe93c5bb4575f61da"],["/archives/page/8/index.html","dd7e7574337782da3b523ab7f2fec79b"],["/archives/page/9/index.html","81d21e2303bba0c01cc81f29cd59f124"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","08ea3318e5bf32a814b6a39145ada26b"],["/baidu_verify_ZzhwBFUe1V.html","de6b6289b94221ce1a9d936ce09a20d4"],["/baidu_verify_dw73Nh8OEw.html","ea9e06c5514364179cda3ffc09fc981f"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","8e03c7bc0ee3d6310827f62b0aad2c2e"],["/categories/操作系统-集群/index.html","21eb94ec622917108496129f335b5baf"],["/categories/数学建模/index.html","893ec61baddd9e3bbd19835ba37b53bd"],["/categories/旅行/index.html","7667c56d82095a5ad8fe4e7864cfdb7f"],["/categories/编程-PHP/index.html","f6f62c7a07a62cf3eb653d113b9995e1"],["/categories/编程/ACM/index.html","9cd4258621e0719531aa3bbdea704e5b"],["/categories/编程/ACM/page/10/index.html","caaff1411fb9c9806875a878f1761f25"],["/categories/编程/ACM/page/11/index.html","d2ca3c45338f7c86cbff01b2732416af"],["/categories/编程/ACM/page/12/index.html","9edbc6332e6c629d38fe30dd4d54c974"],["/categories/编程/ACM/page/13/index.html","e06a073853d692b04129f482e722f664"],["/categories/编程/ACM/page/14/index.html","901e1641d68c6fa8e452399a9894b41b"],["/categories/编程/ACM/page/15/index.html","c8097f4282a36f44e7510554cf7c5545"],["/categories/编程/ACM/page/16/index.html","8a9255ad21317984e5c6f24ebfa5b5e7"],["/categories/编程/ACM/page/2/index.html","56b8f4c6a798322382fd9599bf63df42"],["/categories/编程/ACM/page/3/index.html","de134aced5c56864f8e38a8474c3c51d"],["/categories/编程/ACM/page/4/index.html","6a27fafbc751a7c34495be687072598d"],["/categories/编程/ACM/page/5/index.html","832abac7ad09d26e9ded154a76e733a9"],["/categories/编程/ACM/page/6/index.html","f4e3c152f244f4a00c1c200b406c7079"],["/categories/编程/ACM/page/7/index.html","7a65827e5eaa9c41d9ae403410834b1e"],["/categories/编程/ACM/page/8/index.html","2fbcb96b5f3886e317e4ac98aab455dc"],["/categories/编程/ACM/page/9/index.html","a4c2bddb69f15c5ae16267acd1a12df1"],["/categories/编程/C/index.html","11ce0481595ad00fd4546c5c27538a39"],["/categories/编程/Git/index.html","875a1f87944c551dc3956c86adff16dc"],["/categories/编程/Python/index.html","a6edab45c59fea5bc818ecf3cf8a7d59"],["/categories/编程/index.html","9a19c7a438621850159daa3722c4b1d3"],["/categories/编程/page/10/index.html","25807dea129a7d6acecf8083456f79e1"],["/categories/编程/page/11/index.html","7a937b6b780f8c10deaec979de177237"],["/categories/编程/page/12/index.html","b85ae1d868169008e482e26256ed3e3a"],["/categories/编程/page/13/index.html","2d45e71dcdd06288c1d16723c3f022b9"],["/categories/编程/page/14/index.html","dec279029ad8712dd7a303c3886f826c"],["/categories/编程/page/15/index.html","42b774968c3606a45db97891a1de28c6"],["/categories/编程/page/16/index.html","4cc0fa8969cc8c9afacf0fd3d7858160"],["/categories/编程/page/17/index.html","f86a726a9c9f6ab6e43001b7944bf990"],["/categories/编程/page/18/index.html","871c793029f0aa174259ce7749599f7e"],["/categories/编程/page/2/index.html","0c2a74bcba0d10d94d31ff51ce259eb6"],["/categories/编程/page/3/index.html","7030d013744a7481fad58454a8cae262"],["/categories/编程/page/4/index.html","a6657b5a72eb2aa54dfd321f632b4742"],["/categories/编程/page/5/index.html","dc14c4e4b86ff1fc2c7dd92ccbddb9fc"],["/categories/编程/page/6/index.html","c1e460493a6093a462bda0d5f0fe24db"],["/categories/编程/page/7/index.html","e2304f1598287598489fe4f14a717822"],["/categories/编程/page/8/index.html","6b6db1426623a7380a0be9f96dc138c2"],["/categories/编程/page/9/index.html","08d0298500e0af3660f7f7a683ea0673"],["/categories/编程/密码技术/index.html","3d31e55c2613eafc86db7bba328be6b6"],["/categories/编程/数据结构与算法/index.html","ab7b8c4476c7bf67ea87c60ebae791a5"],["/categories/编程/生产力工具/index.html","5800d399054b57ca06657cefd98a5933"],["/categories/编程/编译原理/index.html","b86421fc03b8e82d902b1b9ac9aca942"],["/categories/编译原理/index.html","364862b13b8e50655f47f116d983a570"],["/categories/讲座/index.html","9f9a19d2fa8abb5bbd8af102c42a624e"],["/categories/金融/index.html","8230189708031a5738ebd59ee2b54dbe"],["/categories/金融/page/2/index.html","a9c48ae580695e80d4de9c2d68775d94"],["/categories/金融/微观经济学/index.html","d22b38ae07b780f23984856d11ed1130"],["/categories/金融/金融学/index.html","383c932b2ebdf7446904d01351140c94"],["/categories/阅读/index.html","7ff2ecae1d53ab5647e957585b00d674"],["/categories/阅读/page/2/index.html","8ad5352c5d65233f9ddcaebf2b75f4fa"],["/categories/随笔/index.html","e214908932039500269cf0520fe897bc"],["/css/main.css","ab263a72a0d7c6acb4bd7c56401cb996"],["/friendlink/index.html","8f3e680f9e92071c9ff393bf51b6722a"],["/googlea873f713657fb5dc.html","d01b9db8a2a5646c0c9cd81d2d71c331"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f24b64b040b7963dd61c26d9c205e435"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","f1b434b26521480725831f1c2a68e7f9"],["/page/11/index.html","2203b1da43310f739e15908cafee88ce"],["/page/12/index.html","d719d6a51dac3d452acedbc25e06860d"],["/page/13/index.html","9ecce37936540df0d3df64d491ac3abc"],["/page/14/index.html","5b1a68491ea8de980fa3f968af191b49"],["/page/15/index.html","311a1a6e74d0bea07edbb3436fdce1e6"],["/page/16/index.html","3e2129dbd7992ab3563a7b8edaa28d6c"],["/page/17/index.html","d224d41b12c760a3be01ff23ebbd3a0b"],["/page/18/index.html","9fd1cae4596f3432229c9217d038cdbb"],["/page/19/index.html","446410b1a28e660fa60ca3686ee0335f"],["/page/2/index.html","b9e23963edf52b42d23f23e0222d5218"],["/page/20/index.html","ec53b7094dff99d5d4bf00cd30654f67"],["/page/21/index.html","ef918cfb529250b2e839c0d8b60d59f9"],["/page/22/index.html","30877c731baf104615831da1ffb4cc1e"],["/page/23/index.html","a4aa1c33b5957a02183a4774eae6eecd"],["/page/24/index.html","e083fc0ee47ffbd086271b800a470837"],["/page/25/index.html","409470c0a34fcd62e743c5ccce720b29"],["/page/26/index.html","de3bd5b383662b4f58644f363f89d1e4"],["/page/27/index.html","c96092a6650f11afc9f590d853192463"],["/page/28/index.html","8b8fe5c2658af0b3bd6ba5b5d45e86e8"],["/page/29/index.html","8ea5aa5217c2d52c4c0d3a288520c88c"],["/page/3/index.html","00ef1952778a7b133d775d3fd02c9945"],["/page/30/index.html","9c8110f671fe413a21e9cef9183ec8f5"],["/page/31/index.html","26508be788663bb31658493aa7b4e3e0"],["/page/32/index.html","22c8cddbc411301d66c995edefc00d52"],["/page/33/index.html","e33961bf31de252791620e3922701323"],["/page/34/index.html","872845f0720d6cdad9f95671a474c3f8"],["/page/35/index.html","01c5a2385193e4fc8f409334da0797e8"],["/page/36/index.html","5a7c1ed71f7734462c8b8757d4a746cc"],["/page/37/index.html","4a5806fb1f35da9733cd50b71a08ad6c"],["/page/38/index.html","f8b0fc698e07eee3767c55a97ad21f03"],["/page/39/index.html","ea74904963f8d8aab5ba794c626ed7ed"],["/page/4/index.html","c8126aee2f55caad3bd68cafe490d740"],["/page/40/index.html","b6d130b8bb7b3c7d0781f741e0e94944"],["/page/41/index.html","d0be775b68770c8961245ee2a3d412bc"],["/page/42/index.html","7f310467458441776bc7485254901bcd"],["/page/43/index.html","a298d47bb4669eb8378deee153496f2a"],["/page/44/index.html","b33dac541f8d1cb104a020c3200c726a"],["/page/5/index.html","5a20155692bb039ff0c633d52b65e6f1"],["/page/6/index.html","9ccd7d61648d9150abc9f63c8b0ee86a"],["/page/7/index.html","43344e619317eea90713eade2f71fcde"],["/page/8/index.html","25588711827c7d26d34c3497d9bb259a"],["/page/9/index.html","2a1cba3a18d183b92444822d7a984c85"],["/post/104a4c5d.html","c0f94195a091d0a910d34322f77ea863"],["/post/109aa3c8.html","b557956567db6728a588fc46dfcc6c0f"],["/post/11246bdd.html","81e60e34cadb31425d8c1326236be36d"],["/post/1233e925.html","5f9f3345843e8f3f2ca2aa3afbab27ec"],["/post/1448d9c8.html","14ada16c1bf841509c744fb278552d8c"],["/post/15db1cd9.html","7337fa3e2879ca4572eb504019c8fac1"],["/post/16b5efde.html","55ec3d408079550bba82b923cca30399"],["/post/16fa37a4.html","36053f928795f1fe01df91a5e3bb9b9f"],["/post/184fc5c7.html","1962caedfd81883ce92b8b3bb3a6c0d0"],["/post/19e79191.html","d8fe3d6a4a03521e53eb8306a29501db"],["/post/1b7db6f0.html","daee8d227a7f8f096ab529553d3af4bc"],["/post/1c52564f.html","d3ced5cecbb339344e6b7ee739a6efae"],["/post/1dc46f40.html","cdaac1906d91471697d812ada68e5e7d"],["/post/1eeab2ee.html","5554c768dd52352d10546c7a1796de74"],["/post/2024a703.html","eafe46e807e33c4b504621f41ead7ecd"],["/post/222505fd.html","5311e874c4d2575dc4d63906af7dc5ae"],["/post/22b5b237.html","bb6c5d72ffc10c949d463038cf4f3927"],["/post/23f72a93.html","01c9222f3e6d437c55dc6f98f6176617"],["/post/264a9c89.html","6f78f033c78c9f22299efc3b95155cf4"],["/post/265c0f5.html","99cba5437b8ce8f2e59d7ec834c2ab40"],["/post/26fa4dfc.html","2cf28c81b539c6ceb7930268826c8ef2"],["/post/273ced06.html","14185ea718685238d8fe820ab88e27c0"],["/post/280fbdcb.html","13865bb395c7a1ee4e8d551d6711cd4e"],["/post/2bfcd7aa.html","8b89d33a9fb3d110f9a68d79d61df302"],["/post/2ee4d523.html","60471b62a3ea4f9106b0ce792a4866b7"],["/post/3090aa13.html","2e46203e5ba78aab62c426a896d89082"],["/post/3156b4f3.html","a6a73a8a4d1f2ab828adfa57b5c6a9a4"],["/post/31a770a5.html","5f1c1115871a07ccf7f1a64c36320ae6"],["/post/31f89579.html","f002196d3eaf2a687328808512a1e23c"],["/post/32dc51f4.html","a3ba666e22bd2e055024a1bd37355694"],["/post/34a049ac.html","9304ba02baf334d02e7a3110c2a4b160"],["/post/34f53a10.html","01c07d7b37f9e8449d9b577a8b07d0a0"],["/post/36bef409.html","5f7ddd8c4fb4706f4f48a9dc74bda74b"],["/post/36e5881d.html","24e5fcea25d5c559ada39fdfb2308cda"],["/post/380486cb.html","742021ebe724dc944eacebf4f0b49a19"],["/post/386b56e6.html","641abdb74f4cb6a9638459985a819de7"],["/post/38f8b110.html","9099a4d895c6e5d36a2609f395b2fc8c"],["/post/3a3eaae1.html","ad74783338299a08e5d2ac3e11aa094b"],["/post/3a72081e.html","007832fa3235957eb6c337eaee104ace"],["/post/3bc7f503.html","94ad207f100fb3dc6ebc61673975e929"],["/post/3c57c5dc.html","887f59c8c902710770c433fece42906a"],["/post/3d71c64b.html","12efd3c1d614abd8650e94472b2c8c5a"],["/post/3d8072b.html","0defd3c0cca8ddf7b7d490eefe629866"],["/post/3e6878ac.html","a5e4a270428b20c9a59d246dd18a1281"],["/post/3f9eff25.html","6d4b06a2f5da4b696c34a6265d7f0956"],["/post/3fce0650.html","fb8f629f3bae6af1fa7a28f774c4a78a"],["/post/409dbc1a.html","306f247c31aad77d778eb1ec37d5f415"],["/post/40dfaace.html","d38269e1474d1681d394ef445eb2c8b6"],["/post/4123b063.html","cafe0e6de3e18856350a28da067eacc3"],["/post/4255f31a.html","82d62b28c50dddc62445f58be0eff104"],["/post/42a619f7.html","9b6d82fe9932c18b03d4f5c499653de9"],["/post/44505a5b.html","b8e3a32cd669afad0385be8fe77367d2"],["/post/448da703.html","4c3c35dd6635e9d97e3e6e31c0483a45"],["/post/454c2118.html","4ee248a3dc44e4cc4085fbdfc0c1b7d2"],["/post/454c2358.html","8566fd16ea8600437a38337e148b6f77"],["/post/4773b69c.html","ad3feff6d63892c49ad31396d466cd05"],["/post/47b391f2.html","ab4e997f0c56ebc60a3f4157cd230d0c"],["/post/481e8abf.html","f30db5032092bd4502e338b958dd3cdf"],["/post/4a2509a9.html","4302cebd6258e8941e048945754aa24b"],["/post/4ab96b49.html","d58827380c70926c0a796ed4f5d3ee4f"],["/post/4b15f9e3.html","63ea2c5ec457f011c17cfea8844227aa"],["/post/4c60a529.html","cfc307242899a60f821fc3407a4ce56e"],["/post/4d6a6b27.html","c69e1f8ee38ca50775ce644ea5301775"],["/post/4db7e28a.html","a9f5c99e56ce08e9c7fee53d8b38a6e6"],["/post/4dc7502.html","10314a6e52ae3df440f722ecccb34228"],["/post/4e876bc2.html","8cfaaea6ea289009062103b5dbefd6c5"],["/post/4f352d.html","f3b09284a9ed7f5896bc0ab0e0419e35"],["/post/4f8fe65a.html","0379f9a9e24a8d0e97d62517cdc907ea"],["/post/4fa396eb.html","5adb57f868d654ca0cb58328f1e7e484"],["/post/52730f61.html","c3743a544fbdb988cc434c4c61e90065"],["/post/531de0f8.html","4444256ae11ce3494e6049c111ec694f"],["/post/53729461.html","6d8d9675424c04d0c261c960b633853d"],["/post/5555df5.html","ee018b7586c1f8bd06b95d256f06dd70"],["/post/57bfde8d.html","78529034eca1c5f48dfbb22d82f180bb"],["/post/585293b8.html","e6cabfb7bf3c81e41f0d26671a215c6d"],["/post/5aa5290d.html","c0e788c505808878b66ab2dcf92bd637"],["/post/5abc6d45.html","0d13d41a1d40ad15b251ee591d373605"],["/post/5c86d06a.html","c435ef257500b414822aef4845ba05b5"],["/post/5e189593.html","7fcbce23513ffd626ddd9faade8ada49"],["/post/5f2d4a77.html","073cc59c58639862c927c6c41dd63f21"],["/post/5f341cbe.html","452ac86ab177993d7b5169cba5bad330"],["/post/60850415.html","1ec9a78564ba1b6323a1d78042badfc0"],["/post/62cb42be.html","9ec51136b2702cd258ba92e9fa5f411a"],["/post/6501181e.html","89e86aa92eb742fb996a723000a1cfda"],["/post/66258384.html","496043923407f75748c787abac41783c"],["/post/662b8b80.html","b41b2906626328f692e7d145ffb68fa0"],["/post/677d0fef.html","25af7901a11e9a854d1a864f87b7f6aa"],["/post/685bcc20.html","583091ad6f3c6f74f5814ae7ef52e3a5"],["/post/686dc27c.html","436e15c4aabb321430885de761bc3c0a"],["/post/69feca91.html","938cc201fe625f959691dbcc43e62ea9"],["/post/6aa464c0.html","482467126866486db0e66b723dbe56be"],["/post/6c71e418.html","a7e9519213b5a755f538a64b118b48e9"],["/post/6ca1eed5.html","aa7fdd0ce4ed25921b946561d0d89c5f"],["/post/6cb7680e.html","fa31d5862bc38b52dbddbe57ec6397fd"],["/post/6d52b9f2.html","633f3f23125b4324e8b4523f2dab8c20"],["/post/6db0d89d.html","104bf001f337e88765c677b58f1678db"],["/post/6e80eb1e.html","fdd570e87b28177433c6cf4feb3a22ec"],["/post/6f3b3edd.html","2b619b3a0a29f572ffb98ac7cb414a51"],["/post/6fc3409b.html","bf6d19f1cf72ac571f6d6aa0df5c5314"],["/post/703409c5.html","3e6af72c0b2ab018f98b3c6b1906103c"],["/post/7169c4ed.html","8c9feb5d6e549154143b3438cf2cac4a"],["/post/73136b.html","d227317aa03bd9e0fe909f53c2824dd0"],["/post/7410a832.html","c5a5b5009fa80cbc25ea22059a201ad5"],["/post/742966af.html","6d5c71d7d2bb23ed2602c348dff6fea3"],["/post/74479d01.html","c91a927d8a7f9e785c7903f80de1aa44"],["/post/74a4286c.html","5a94d9f5b03dc9843506782ca7769471"],["/post/75794199.html","1a36076b52b15a141d459281ded1970f"],["/post/75f986a1.html","182fbc3023bb8eb8271770491559fbf0"],["/post/76485a7.html","fdaa983211b9651b21c1b235bd08ba89"],["/post/772fc02c.html","ed3c158292946ab42d17d5d58b603769"],["/post/792e36ed.html","42fd21283304e681be7aa63abd13bf43"],["/post/792ebb35.html","4c820a54c4ad6eb436bcc00cc0a079c1"],["/post/7c50967.html","36ea54d77977ad9829b6d84c873b4823"],["/post/7d274866.html","90e2b41a95da8f9b31837fd69497ea7d"],["/post/7d8e4f2a.html","c514d3ed2c6c9cb42acf66c76e7dd4a6"],["/post/7ef8a98f.html","88498c131e1c16ffbfb1a44f9e16e116"],["/post/7fbcb888.html","2f9f0d02664e162d2b332113ec183cc2"],["/post/7fe193be.html","a316f45686341737044bd3beaaaed522"],["/post/81d45fa1.html","067ff19adf8599c5e591557a38cae93d"],["/post/859584ac.html","3174736e67f4108f88da4085e0a3d42c"],["/post/879e9655.html","cf1bb3c243175ed64a843737d5600841"],["/post/88e8ae98.html","45fd43e705be2348ede92aa81cb59bb7"],["/post/89873dd3.html","9dc78aa5bfad75480c02b01be603caed"],["/post/8ddc8a30.html","41125990477fa85ea23feed22997f153"],["/post/8f9cfad3.html","83dc807a5328a47a304d39bcd45cb811"],["/post/918fcaa1.html","7c9d07065dca3f9e683db36a4dda6b58"],["/post/92687617.html","0cc54e3cfecbe34dcd1e7c192f80e468"],["/post/9282aeca.html","22c28224d82b046a543d3f62f1e5426a"],["/post/9305c5f5.html","61413e50126dc7eadc57af4eee3a6070"],["/post/94c9baee.html","062fec7f01e23392e98075e24f4ea73b"],["/post/98804e11.html","a1c029a6e227f07238caba376cc39fb5"],["/post/9a9a4797.html","fafed564574f6943ee9a1051994a330a"],["/post/9c28a880.html","60b99a8cdce10fddfa4616ee058ca792"],["/post/9c649212.html","c6d057f0a52114babe673cdc2d133123"],["/post/9d402b32.html","38b615e1b87b76bd4f16686d172a8b91"],["/post/9eb065c8.html","2a73f373eb64105b31fce308117d235d"],["/post/9f8e212d.html","337c705478b015cddc9f62ed2bcde9a3"],["/post/a1751c09.html","cb6a8163a95f9c20a399f35edc95c603"],["/post/a1cef007.html","429b352142cc3ecaabb0e959e232cba3"],["/post/a1fc03d8.html","52ac44c36a9db71d30c56c8fd8a3928c"],["/post/a27e9acf.html","be5859d47631dc1512e907a752f02986"],["/post/a3770b00.html","ddaf7774ef62b2f557cc0cf192508b00"],["/post/a4c66bf4.html","99b7edd170d28459b75a72792c08080b"],["/post/a4efe87.html","35fba1ff9e01cce02be2369e29add71e"],["/post/a7528411.html","e408e4016ee09123a853139794ef4c77"],["/post/a8759852.html","d329482bd01a1fb00652eec412179c23"],["/post/aa0a97c8.html","00e41034ee56b690fab980c98002f6fb"],["/post/ab4ed95b.html","fd1b2423678e02573f84a48774def0f7"],["/post/ab720150.html","3b22f21db015b95fc4aac9042741faf8"],["/post/ac92be99.html","fcd4d73c4906bd09698fe60ed09a3a8e"],["/post/acf6b02e.html","0fbb09bcbdae57a0548fe9150c3754be"],["/post/b04c1acf.html","7cd36365a416fb0207293c08ff4e0b14"],["/post/b0d6c7.html","654d858d903f045357593acb42bbc6a1"],["/post/b3ee770c.html","d5f3987df9ec8b4d868933f52d673bbc"],["/post/b8ca3dfa.html","742d3c7869610bcfdb58a86088657493"],["/post/bb7f8e97.html","81244537d3e404ec4c167c948285b6bd"],["/post/bba462fb.html","aeba323fdd0dd17fd03056fb9507e130"],["/post/bc8586da.html","0a275df01861859a616c184f7e6b7994"],["/post/bcb02c2b.html","38927e062832dec5defc316817ede671"],["/post/bd36a30f.html","b14ac64dfa0c49133df5b7978e8c9827"],["/post/bde4b1f8.html","6c557cac78ab23d36293b02d072dcfcd"],["/post/bea42f1e.html","6a938de1a674dcc23bdbf2f2eaebdd28"],["/post/c1864474.html","b96747b589cb3d076ae8e26123e6b7f8"],["/post/c293d2b3.html","4cdf74dbbafcb0b060328d787ebff22b"],["/post/c37095b9.html","66847ea932ea3298ac8d56cb08436bfb"],["/post/c5672df5.html","21021a2fe6557ce760c3c134adb91bb0"],["/post/c6d76e9a.html","cfa6459f44c96ef11cfcef6a80818bb1"],["/post/c7fb8250.html","4ca0669fcfe46c578112d05101469d7d"],["/post/c938bbd1.html","791fd5f78bd37cdf374e4d138bd608e3"],["/post/ca14c5df.html","0d7fa00b935ac602b60addc39fd44ebe"],["/post/cd18de84.html","15669237aa1c8160968976a7e579797a"],["/post/cd41dfb7.html","4652f7c1a2a0ca89fd5ead86f1a37622"],["/post/cea184b4.html","657a4588e4fe8c172fa316a373c8111b"],["/post/d0793265.html","a3ba678955d979ea7536137cbdbc2ddf"],["/post/d0d58037.html","ed6b3277a2e24541040e71912e436c6d"],["/post/d120bd8e.html","e5f05ddaf041848da7206b0e32f9521c"],["/post/d50b784.html","bf5624ea1dc328a770fdcac28f83c731"],["/post/d632e628.html","18e0efa0d6489ad9f6a70a532d669fd7"],["/post/d6a5bd15.html","114a84389d139d25cacd6183ddff672c"],["/post/d73de254.html","67a662826d51d251096735e5194fc7c6"],["/post/d7435d20.html","397b178aaae81edcafbcd5651e3ef165"],["/post/d81c5363.html","4585a92624d159acd0094ba32898cc01"],["/post/d899bd9.html","e59dabc19c89e432b32538de7943c135"],["/post/d9083bc4.html","42df90368566f9ddce1aa8e003f7e4f2"],["/post/dbad9cab.html","1739a94bd315a0777722f493a46bce03"],["/post/dc981233.html","98c7c21637ac1bcff0949a1510c212ae"],["/post/dd932d44.html","0fe7d1bb67cf2e8b5017834d293c2843"],["/post/dea65d58.html","20a44a1e5ffa6f33ab035fdb7656fda8"],["/post/df76d545.html","ee15ffac1f0fad46b1ccf35868ab7385"],["/post/e256d99f.html","dad3f863b8da55371d0b975b67486f31"],["/post/e290dd8c.html","3735a9277a3592847e70389faad26d40"],["/post/e3e37943.html","a5b2fad2a2fe70c815adf95a1e7ecd84"],["/post/e583ed8d.html","6806e5f16bd85b221e5dec1f214d874a"],["/post/e5d75450.html","f624d559f761c66c68729cb61a6a26ba"],["/post/e6364ca4.html","23c3809f2656ef098cdf17a8ad0b6914"],["/post/e7058b47.html","cbbad0cb8e79333e0503b259f49b85cb"],["/post/e769f01f.html","c77af5029af8126dd452a7e8b41dbc5e"],["/post/e78ad34c.html","4942b0996fbc271f716f479543301e72"],["/post/e8005312.html","f224919f4736e544eba6abf5b404eeb0"],["/post/e8ae7612.html","7fee1a8f9d8c8dd69850c3dd4f545696"],["/post/e8bc7157.html","08bb57ceadf851755cf1a68d53eac67a"],["/post/ea5d5d2f.html","d724c57ba4f291e4ab4885f6a1112941"],["/post/eae0b80e.html","2d96ae63ca386c9f0504b0a04ac86343"],["/post/eb9ab36.html","ab75ed2872f16d4f90c92f96048a9bb4"],["/post/f0b23c5b.html","70254580614d139d8db3cea686da94f8"],["/post/f279299a.html","6c5bae389364672d3cb1062291abbeb2"],["/post/f3d9c661.html","9e674fd26cf038c3002387e176df3085"],["/post/f4bfd16b.html","0ae820103d60d94e3b95ef8afde30b6d"],["/post/f7b33ddd.html","4aae21932f627720bf4fa4f6a6d9f9f6"],["/post/f8e4bc7f.html","d021a4f81bb47872a26072bb3143557e"],["/post/fa83cee.html","907b9c6b63deb261166416b7b10e7a76"],["/post/fb2f630e.html","9fdd6ef9d7931ec1a7b1f04451c3db53"],["/post/fb5efb9c.html","d9f84fe651a6961ca0d36599733cf961"],["/post/fbf7f335.html","8dd90d987662c9d04951489aaac0e1b7"],["/post/fcb9464d.html","fc915741ff3b78d40f37ab4784410461"],["/post/fd581850.html","a4af4248f299bf676886096ca6055d30"],["/post/fdc06f3f.html","11dc1bdc179f1adda4a4e38942e07277"],["/post/feaebfb5.html","d13f83e1eb678990e8204aacb983f756"],["/sw-register.js","5414ed6486d21428b6f2bf5da309b921"],["/tag/1988：我想和这个世界谈谈/index.html","38ba46c0bd788403f52ab0d1dcf8884e"],["/tag/1Q84/index.html","1e8b8962b60d000ca487fdcb36ca5121"],["/tag/2017HDU多校/index.html","b403b886b7e02d95d55fb091ef98e1ea"],["/tag/2018HDU多校/index.html","526e80ad0670be64d390898459eb2b54"],["/tag/2018寒假集训/index.html","3e36be593aff91221dfc5c376efb182b"],["/tag/2018寒假集训/page/2/index.html","5d68f23760a3849c380130d2efdad091"],["/tag/2018春季训练/index.html","f5eb8326752135a2cf662f57cc3a1e1f"],["/tag/2018春季训练/page/2/index.html","686af960aa4bf2b8b3e54faf17d82084"],["/tag/2018暑假集训/index.html","864cb67528881cfa4400711a4bc3097c"],["/tag/2018暑假集训/page/2/index.html","0e81e6301e9eadc3f5edbf248cd1338a"],["/tag/2018暑假集训/page/3/index.html","2a626da451fe40ddfeb496401d323270"],["/tag/2018暑假集训/page/4/index.html","d6bd4dc32d4448b7914a88487d9d7045"],["/tag/2018暑假集训/page/5/index.html","45ba3518f11ebbed6df6eae10e2ec11c"],["/tag/2018暑假集训/page/6/index.html","be71e57bfcf738b0589302772d52eb22"],["/tag/2018暑假集训/page/7/index.html","c75975d259b5ff5c9e9798cccfacc0be"],["/tag/2018暑假集训/page/8/index.html","1e3b961a002ab199173ab2f9f14505ad"],["/tag/2018暑期选拔/index.html","2fdbe024255e151afe561f3e77488cff"],["/tag/2018杭电多校/index.html","1aaa88761721c452327d2a81140abd74"],["/tag/2018球季训练/index.html","d67c153c9b853a0b401265e4bee9a2f4"],["/tag/2018秋季培训/index.html","5f4baf1f698a416e0199a3297fbb2893"],["/tag/2018秋季训练/index.html","6efbee9ae86bcdcc5fef6b0b271b3cdc"],["/tag/2018秋季训练/page/2/index.html","365311c0bfcae340e931f6b716248f79"],["/tag/2019春季训练/index.html","5e52d221afcd447e50c7720102afeb2b"],["/tag/2019春季训练/page/2/index.html","594cb81a71bee90c141596b6efb22a66"],["/tag/2019春季集训/index.html","c15967b0b02d24b7ead696289e1455d3"],["/tag/ACM/index.html","6c4314ca3388fb1c9fa693cb76b8b3f8"],["/tag/ACM/page/10/index.html","49a8c56778c3ad056e2348ae6ed37aef"],["/tag/ACM/page/11/index.html","85e2e08b4a248ec8bec4363b09a7e356"],["/tag/ACM/page/12/index.html","6c6177be1722367ed21c65e1f74fb2c3"],["/tag/ACM/page/13/index.html","48b0a48dca1ec810eeb5cfed1ff65395"],["/tag/ACM/page/14/index.html","df9ec6688602a47ee1e90eb12fa78b8c"],["/tag/ACM/page/15/index.html","1a412253d89d508737e7e56e67fcdc13"],["/tag/ACM/page/2/index.html","cf1bff83d5b0e31ad9b3189c5e55b054"],["/tag/ACM/page/3/index.html","1ffcee517e628df498fad50968e0c355"],["/tag/ACM/page/4/index.html","58c3b890a5de056cfcc53ab4ba47abaa"],["/tag/ACM/page/5/index.html","4c94210e49f6ecc0cae626f0ecd6b925"],["/tag/ACM/page/6/index.html","2524943cbe7d70999eab49eb88be8cfb"],["/tag/ACM/page/7/index.html","e9e74727ed94ec0b21073f49c4c99604"],["/tag/ACM/page/8/index.html","f454a83c08bc176374d4b17aad0a757c"],["/tag/ACM/page/9/index.html","fefb66ce095ac263222a98711e4fc604"],["/tag/AWS/index.html","cfdbaf4ecca5c5f3424e833fba6756a1"],["/tag/AtCoder/index.html","2e74ad614b44452963c3d4b55d93c930"],["/tag/BFS/index.html","dfe8a0588c0eb3923ac6c1b5ae53e9f7"],["/tag/C/index.html","fbbfce38702eab0fb11ec35851bb73dd"],["/tag/CSU/index.html","7d5e05ac3dac51916447443ad3ebc9f3"],["/tag/CSU/page/2/index.html","4b2bb681866a38371d727059697ff88c"],["/tag/CSU/page/3/index.html","58f6ef1d317270add98d1af887365fb0"],["/tag/CSU/page/4/index.html","5420991be269b4d6155c6684ffda2d18"],["/tag/CodeForces/index.html","42bf7a4d5b435465198c1f622fb15983"],["/tag/CodeForces/page/2/index.html","fe18fb2d4401a2554710aa4480577bbe"],["/tag/DFS/index.html","ebe410005dcce2615b8de51749c19193"],["/tag/DP/index.html","2270e9d415d5eadd9cf0a8043e70b0cc"],["/tag/Dijkstra/index.html","fe37c912411c00fe78741936f8ee709c"],["/tag/Flask框架/index.html","b936be67937a19c308f332abc06d885e"],["/tag/Floyd/index.html","d03069b8ae303f0c4aad187ee820c73c"],["/tag/Git/index.html","6e9738d3659fcd9b6d6ebe76935e4505"],["/tag/Graph/index.html","6ef5affe56f217263b1aa2c6a4c714bd"],["/tag/Greedy/index.html","391c0d46e74b8562be4b1677940196a5"],["/tag/HDU/index.html","ca20a528250be5320a55dadb0dd75564"],["/tag/HDU/page/2/index.html","2fdfcff44b8806e0d00f323afff7a232"],["/tag/HDU/page/3/index.html","e9c61bb95b11fc6e7d1dda88a68b139d"],["/tag/HDU/page/4/index.html","5bdc73d0958dd4a4d5c6c9409b0205dc"],["/tag/Imitation/index.html","1fd0d1d6c80e1187dde407fb531ccef8"],["/tag/KMP/index.html","9116bb8386600aaaede02fc037ba5c1a"],["/tag/POJ/index.html","6416ba5137dcb45b409914e2d9a70cd2"],["/tag/POJ/page/2/index.html","4e372c3bc5e97cbe9edf9b26f69ac07e"],["/tag/Python/index.html","2a5aedf6aecaf21098253f5db220fb42"],["/tag/SCU/index.html","08712a5c4874d7dabaa608317c78992a"],["/tag/STL/index.html","2fe467e5c2c190c43fcfcbab481dedf4"],["/tag/STL/page/2/index.html","390659be308b127a97cc540b036b3e1a"],["/tag/URAL/index.html","5fa9b5d969027e0653c7273e372355b2"],["/tag/UVA/index.html","d4dbac1651e9def7caf77e437c4aa11c"],["/tag/UVA/page/2/index.html","48cd5cb30328394c216d2d5db6813a49"],["/tag/UVALive/index.html","f62a9e7eb10659dc5b0642f0e8e3cc1c"],["/tag/VSCode-Git-生产力工具/index.html","ce77377b661956ef0217f0b8163a29a9"],["/tag/VScode/index.html","227c20bdb28168d0587601ff676bc842"],["/tag/ZOJ/index.html","39ee6f85ab7edf5236b29668b13f6656"],["/tag/math/index.html","99ad4d6381bdf75472de4b57c72d528c"],["/tag/test/index.html","f4fa7c8174959d655bfa9cbd1bae8511"],["/tag/不得贪胜/index.html","fa687beb38a334a0063de1fb2be1dc41"],["/tag/东野圭吾/index.html","386b04c5dc734180b4d968df7b268efd"],["/tag/乌合之众/index.html","85d3e7c0edd7e2e8797f3b64a3cf9199"],["/tag/书信/index.html","85125815d05aea9a58836e3cce139772"],["/tag/二分/index.html","bbae550e704802611273b8c15a4c1173"],["/tag/二分，BFS/index.html","e5adcb8ec217a2dd2c0d5bb12b2c3847"],["/tag/亚马逊/index.html","0ca9f50ab69010b972fe4b8c857bb5fe"],["/tag/亲爱的安德烈/index.html","e39eb6464104cbe4e0c84147b8ca696a"],["/tag/位运算/index.html","37be59f53526be9bc053a96bb205484e"],["/tag/几何/index.html","620b166ba51bfbf7a21fe70809fe2e17"],["/tag/刺杀骑士团长/index.html","08ffa1c5d58530ccad67b1bc32283585"],["/tag/前缀和/index.html","6b2c30057acb118935d2f8cc3ae77af5"],["/tag/区间DP/index.html","6c90f9619d08fe7d8aaf7602b02eda2f"],["/tag/博弈/index.html","e56c67caf7b9e573160bb5bbcbc15991"],["/tag/历史/index.html","e9573c0d8a8c6a4e4a29a2a90135ca0f"],["/tag/古斯塔夫・勒庞/index.html","f91dc3af7366e62dfc1e8b2098d63e40"],["/tag/叶嘉莹/index.html","bccffd45708cc0c9dbd112c6215f3d97"],["/tag/图解密码技术/index.html","f8279e085263d9e6d8543c6b75ff2c2f"],["/tag/大数/index.html","34152fce0adcbc6f6053ce199993da7a"],["/tag/天幕红尘/index.html","42bf485ca963dc2d5d9bacf3bdc75e92"],["/tag/如何阅读一本书/index.html","e4b12474b5e7df412fad273c805fe5ac"],["/tag/字典树/index.html","110289514bacdf306610be85e9a9da5a"],["/tag/字符串/index.html","dee5b95543947d2524cea84b5b5c8b39"],["/tag/字符串hash/index.html","71fb1053aef82013e0be3a4f07954dea"],["/tag/安德烈/index.html","c614987aa9f0ba145b8ab804b8769e29"],["/tag/密码技术/index.html","050a0061ea5df8b6cd9890f9f2512910"],["/tag/小说/index.html","e7b969478936cc8da237af5850f42a2d"],["/tag/岛上书店/index.html","a6730c9f9c3733a511f220e34a4d64f1"],["/tag/并查集/index.html","4a043ddf6e4338c3bc211c89b3c856f5"],["/tag/待补充/index.html","2196c3c5b68a56de582c4833f4594558"],["/tag/微观经济学/index.html","20771e3da9f0084393074a30a30d64d5"],["/tag/数学/index.html","2e24b4db23a19295f44a81e3b0cae78e"],["/tag/数据结构/index.html","7d3a36ae6a006ef9dc022263fd5fbff2"],["/tag/数论/index.html","87fa374c757d425390dd7dfa0f8a9155"],["/tag/文学/index.html","3c1fb12007afe6936ecdcb1ea3d8a676"],["/tag/文学，小说/index.html","df9606f37c5c7fcc81e7a7ee30e9bd9e"],["/tag/旅行/index.html","8d759815fd2207aed5ff321c3e614b55"],["/tag/暴力/index.html","e8801b0ef1451a9facfb17f5651b9d16"],["/tag/最小生成树/index.html","c2737f5f302e3fe9b36ff4d4b13703c0"],["/tag/最短路/index.html","a6e4a6fc53891a121462a05d9726d65d"],["/tag/最长路/index.html","fa8dcd0991da04cd74a483013ec3b410"],["/tag/本·伯南克/index.html","0127faa87d65df6397bb5dfa05823300"],["/tag/杂文集/index.html","1a876fe913be43674cf75f2aa489f951"],["/tag/李昌镐/index.html","5da3ca62bd62306775da0f3ecfef2884"],["/tag/村上春树/index.html","1085145385b9dd8ebbaaf8b047a81470"],["/tag/枪炮、病菌与钢铁/index.html","69ea34784111d2b658aea5c7a3e075c9"],["/tag/概率/index.html","9ab82d144bb618da2c1d147b1c9814a6"],["/tag/正则匹配/index.html","d22f11d85d9d167299cd9fe6ad536a92"],["/tag/水题/index.html","f0578ef3f43c0e3b7afff2c344d47a36"],["/tag/洛谷/index.html","65e9a34bb458eff62da928f37d27d817"],["/tag/洛谷/page/2/index.html","560d56055612c5a032afd9102481c010"],["/tag/游记，武汉/index.html","ac22a51551ca195d32ff213fd317a8e7"],["/tag/演讲/index.html","18d92034ad97c315f06cc0cda07c47b8"],["/tag/矩阵快速幂/index.html","f4a1940a03cbc6ed007bb413e350bf16"],["/tag/石黑一雄/index.html","6d36eb8f2ead9d2160afc36edb7e1d4f"],["/tag/社科/index.html","46c8d362ce658c9b620b7ae7fb631a36"],["/tag/笨方法学Python3/index.html","6888bb7ef9f86f477e7ea37d0976ca08"],["/tag/算法/index.html","ebd60ba2d272c6189ef15f0b30747cc0"],["/tag/算法/page/10/index.html","a9b10ad28bc23fbf82f8a99ffa5ca18d"],["/tag/算法/page/11/index.html","19e6eedb9343c5e2bd124b64ac63c465"],["/tag/算法/page/12/index.html","efd7d7f7293796701ed0865df8b7149a"],["/tag/算法/page/13/index.html","96d758867cb5ad317de19c63da5b6e08"],["/tag/算法/page/14/index.html","3a163f4a79e12bf018b500bb5ab68772"],["/tag/算法/page/2/index.html","445461a14394d9a83c2b533da6658dfb"],["/tag/算法/page/3/index.html","6a7af5ad1f30cf69668ce5ea32a5cc21"],["/tag/算法/page/4/index.html","19b921071dc95e5bc787827a27be871a"],["/tag/算法/page/5/index.html","de96e60c6cf31966b826eac1a897f518"],["/tag/算法/page/6/index.html","a183868346842b8fe1ee3a3ec584beb2"],["/tag/算法/page/7/index.html","555436b986155c4c94b7aea041477369"],["/tag/算法/page/8/index.html","57d96afdc9b2b18276e705e771370d45"],["/tag/算法/page/9/index.html","a4b000a4782408ae957a0dbacb92da80"],["/tag/素数筛/index.html","a23ac50dc672c68bac516ec2571ff1b5"],["/tag/线段树/index.html","6eebf8516799f4326382b2b45a14f8c3"],["/tag/线索二叉树/index.html","48e86ec62fb7f0ebe3f928cab4168521"],["/tag/结城浩/index.html","16269d15eac3b31f94782340a2ee2b27"],["/tag/编程-C-课程设计/index.html","579a97a8a4191d3e022187d7d379f20a"],["/tag/编程-PHP/index.html","bbee9bc69d073d2b5abd5d1cdf48b51d"],["/tag/编程-数据挖掘/index.html","c0678904961b926fdee9d43141b0feb0"],["/tag/编程-编译原理/index.html","677f65a652060545a847926ffa3ac3c2"],["/tag/编程/index.html","a02875d69d2ab53e809598061c1f7836"],["/tag/编程/page/2/index.html","4573ae707a80ee3d6183d99d9df3f536"],["/tag/编程/page/3/index.html","34b05136a07096df1f4facb121265526"],["/tag/编译原理/index.html","e888fd73203177077543be26500297a0"],["/tag/自传/index.html","6ebf5b0009a0fe72b679772171dc78f0"],["/tag/艾萨克·阿西莫夫/index.html","7028299ae4ab289923cfdb70123a0edb"],["/tag/补图/index.html","a7a26bd842625121bf76efdb4aea6738"],["/tag/西村吉雄/index.html","857427a43283e2033774d8e3c164a8cb"],["/tag/规律/index.html","cfc31c6f547b2a59421ffaca3a7bafc6"],["/tag/解忧杂货店/index.html","e09117b18f0d2ccc475817861af6d542"],["/tag/计算几何/index.html","be46ec8ef651caa8a9ee997cafa66661"],["/tag/讲座笔记/index.html","bf4878982f008122b36ed723485f2ed8"],["/tag/读后感/index.html","30f06905cf496de070319c20c1924789"],["/tag/课堂笔记/index.html","cf699498885fa7fafd4399789e7d7989"],["/tag/课堂笔记/page/2/index.html","c203e3a29aaccaa596102fc3fd5c91a6"],["/tag/课程学习/index.html","887cb68917e0d3f46634051993ae65bb"],["/tag/豆豆/index.html","497c384c786b17de2b99a1b4b140498e"],["/tag/贾雷德·戴蒙德/index.html","e9df2c05c605d949b54b0629579278dc"],["/tag/辅修/index.html","f2c69e3800ee66e9566c011e4c7b403c"],["/tag/辅修/page/2/index.html","dc86ef3813e28c9d6f62ecfaf5b2a2a8"],["/tag/递推/index.html","c127125b946ce17d7dd12150e58e3185"],["/tag/野火集/index.html","aa10c58adef647284ccca274d566536b"],["/tag/金融学/index.html","dbb7fd0130f280a6a4a9d43e6f901ced"],["/tag/金融的本质/index.html","d6d1cbe72496f144daf216548cca022e"],["/tag/银河帝国/index.html","b121a179b6cd5622b12f905e64658af5"],["/tag/阅读/index.html","212fc91a0cef49abc9f1db6c4c2d8bba"],["/tag/阅读/page/2/index.html","20510b1160aade74f6cf96253e37b9ea"],["/tag/随笔/index.html","2826c99c26b4dbe30af3a63900f7259f"],["/tag/韩寒/index.html","4d9d79df64e0992355680995f89e664b"],["/tag/高精度/index.html","4d7fc8d0d567c3d74339cff5fd90dbe3"],["/tag/龙应台/index.html","2f00bc098df370e6cb17e62d41a5ce35"],["/tags/index.html","cdf6f47c926732727120a1516b01bff5"]];
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
