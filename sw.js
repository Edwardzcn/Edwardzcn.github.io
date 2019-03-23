/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","46fcd10633f1723a05107a0f31e4638d"],["/archives/2018/01/index.html","12f719e40eec16b6dbb47151d3787d1a"],["/archives/2018/01/page/2/index.html","6fe97cd544416b76404c9cf1863a885a"],["/archives/2018/02/index.html","dabfa0b321a8578deac643655ffd3b6d"],["/archives/2018/03/index.html","dd39097aa36e1c0df21e6c08975c3311"],["/archives/2018/04/index.html","e5b0235033ca45700a2b68b3e8d7f3ca"],["/archives/2018/05/index.html","ea92f5a0e5be2d13f4c22ebcc86802a1"],["/archives/2018/06/index.html","b5d97d2ab7ce1d765e41ef95653d899d"],["/archives/2018/07/index.html","9f235be03073ddc0c57aea601750a77b"],["/archives/2018/07/page/2/index.html","e07cd7766383827d68e9dfb08dcaf55b"],["/archives/2018/07/page/3/index.html","7ed5b9f1c505c93f008c1c6f2f2e685d"],["/archives/2018/08/index.html","5c2a755643d43ab958d38cf38c9fad9f"],["/archives/2018/08/page/2/index.html","9450e0e38e92b6f5fb51a373c4dfd20f"],["/archives/2018/08/page/3/index.html","0efaf41a11f9892130adc190ba9c985a"],["/archives/2018/08/page/4/index.html","803a4fb292a8dd83b89e6790cfb3e051"],["/archives/2018/08/page/5/index.html","4145c1fa87e4a97206b169fefe306711"],["/archives/2018/08/page/6/index.html","296eb5fe7929c3cc7585c66a8f4b406b"],["/archives/2018/09/index.html","a3c15741a95755c7c03b3a941b2174ef"],["/archives/2018/10/index.html","5fcb14d340caf5e696815d12232a5109"],["/archives/2018/10/page/2/index.html","325bb8adf0ff142e9f7ba2bb6bc0df66"],["/archives/2018/11/index.html","a9856ce9cf7bf51400d383770b95a3b3"],["/archives/2018/11/page/2/index.html","e600b66efba8f60b9312efd673c62d60"],["/archives/2018/12/index.html","f0e88a3eecbb9ced247269471b8c462d"],["/archives/2018/index.html","c9196c84199a54c9524b691c10f9543d"],["/archives/2018/page/10/index.html","a711a317d91161aa6880bd3477f1c87a"],["/archives/2018/page/11/index.html","97490681e29e8f8acdc2a456f5d3ed09"],["/archives/2018/page/12/index.html","bab52ba837d1362a9d6947ca409bde97"],["/archives/2018/page/13/index.html","eb4cdaaec455d720d11f55aed2d1a07e"],["/archives/2018/page/14/index.html","77178c91ea4c150254f93e1c6e6e4e45"],["/archives/2018/page/15/index.html","1c36017a45b647c30e477371d5191d23"],["/archives/2018/page/16/index.html","4b0ed8dde6c82b454ae9ab17be3e6220"],["/archives/2018/page/17/index.html","651806e9320221129b68c947654979d7"],["/archives/2018/page/18/index.html","c55efb22ec099f3ad8a2be4e20d11fe9"],["/archives/2018/page/2/index.html","d0ad82984a87d7b2d4b3795fd09b3cbd"],["/archives/2018/page/3/index.html","5832e990c4fdac03c6b995c7ffe14292"],["/archives/2018/page/4/index.html","16b910a2c1a33dfe1985c79d51aab41e"],["/archives/2018/page/5/index.html","be6994245f12a930057560e70d0c3b49"],["/archives/2018/page/6/index.html","1b364fd32e06393ba6e64325e5497799"],["/archives/2018/page/7/index.html","8449a6e00f5bc4d379746a7c5d316367"],["/archives/2018/page/8/index.html","184270bfb9c9ab97d86a136dc0b83974"],["/archives/2018/page/9/index.html","e5472e7df711e7d126bc20d23ba1a7a2"],["/archives/2019/01/index.html","6a085475ce84a467b29de88c41a3e118"],["/archives/2019/02/index.html","42ceea3bc3102e54e8bc73f114986b47"],["/archives/2019/03/index.html","43494aea4de93d8b1681e6e3c90e3350"],["/archives/2019/index.html","6ae82ceb7b441b43dee865d19e74029d"],["/archives/2019/page/2/index.html","01089f2d86877b7ece8ba22b7fb16346"],["/archives/index.html","780419e53c3439449d860cdf69953ef5"],["/archives/page/10/index.html","0958034e29ea04a07d044cc697980462"],["/archives/page/11/index.html","92aaa86b02afa649d8021ed7e82a4b4f"],["/archives/page/12/index.html","5bde6b3d233c051076f9e3ab9464c2f8"],["/archives/page/13/index.html","719abce2926709ff464577ed73b7ccb1"],["/archives/page/14/index.html","484b1422b020299bac2590a78000deb2"],["/archives/page/15/index.html","4c39482e445a202d432e6f4c2f3edb8d"],["/archives/page/16/index.html","8f9386ee5345996d045c30e7221e489e"],["/archives/page/17/index.html","2d312352d7ea94f8d5568cb505571da6"],["/archives/page/18/index.html","651269e07119757c05871f1d6d9e0fb4"],["/archives/page/19/index.html","414c8d4f3dcda55dc398cb1ba4713ff5"],["/archives/page/2/index.html","f223379f9545a3e8c440a90a341b2258"],["/archives/page/20/index.html","cc5255b03b2adf46f13616d6a9148fa2"],["/archives/page/3/index.html","2b8a3d6dad44565f571e20ef921f0f48"],["/archives/page/4/index.html","c3acf42c32e39b49507e28e6d36ec88d"],["/archives/page/5/index.html","52958f46c5e73106f2715deb31ce1228"],["/archives/page/6/index.html","26c0fc72195aceafb23ed6c4f845ee5a"],["/archives/page/7/index.html","350ddc9af2abf831bde1cf4d3f836b79"],["/archives/page/8/index.html","a3740765e3d98b5ee8000184669e2d49"],["/archives/page/9/index.html","46ab5332a735733942369ad1049ff2c4"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","a60133220baa2ad6ee61407e8b261191"],["/baidu_verify_ZzhwBFUe1V.html","d1f3196dda92c77e11239bd079d2db7b"],["/baidu_verify_dw73Nh8OEw.html","48f7957d7b118539894242506a4ae453"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","771ed700f2b9c56f2d1df71d9a8059e6"],["/categories/操作系统-集群/index.html","4fa866e14f19d0d587cb318d8b946eef"],["/categories/数学建模/index.html","b3d33c030310d45cd74784aaa75eb7ea"],["/categories/旅行/index.html","859ed0504f690f4c11e63b65e319e10b"],["/categories/编程-PHP/index.html","8bf22949dea1f537aff4e75ce4c1d2f5"],["/categories/编程-数据结构预算法/index.html","c8700cb0c26c7f3f5dd595e149d5f6c9"],["/categories/编程/ACM/index.html","c7d4904941f3036fefe3250d4752e293"],["/categories/编程/ACM/page/10/index.html","987931fcedf69aa2e81c281c74b774e0"],["/categories/编程/ACM/page/11/index.html","4a469a8476fdafbe929fd4dd227e0276"],["/categories/编程/ACM/page/12/index.html","434853efe9f6e9a9f717ab9a2301b25d"],["/categories/编程/ACM/page/13/index.html","acb5f0800d3c0a2272f65c4cf526ee05"],["/categories/编程/ACM/page/14/index.html","968f50bb0b41b9b11e23b60c6a1c6d26"],["/categories/编程/ACM/page/2/index.html","45a115cd69f4518d0ef0c210020f0480"],["/categories/编程/ACM/page/3/index.html","79413904247a80e6184aed4238e49e91"],["/categories/编程/ACM/page/4/index.html","a14fe112c2ce2a6908ef80547a7a1f46"],["/categories/编程/ACM/page/5/index.html","e95861b1b6b6018b3c56539c8cb055eb"],["/categories/编程/ACM/page/6/index.html","01f9a64a7d5ad5d59c387a6051b0e598"],["/categories/编程/ACM/page/7/index.html","90efcb90a51aec255ca79a0469b9f22d"],["/categories/编程/ACM/page/8/index.html","34c7e3958926fd925dd5aaeb88c37a12"],["/categories/编程/ACM/page/9/index.html","21079dcbf2c985445e9fc54dc2ec84f0"],["/categories/编程/C/index.html","11f083ed12e4e675e6a834cd43d5c1e9"],["/categories/编程/Git/index.html","ddbe059bee6080abf8abdb3e75d80d68"],["/categories/编程/Python/index.html","e810ed756d20faef24738a38cf31b69c"],["/categories/编程/index.html","c3a96ce441344df7a7a023477e9c770f"],["/categories/编程/page/10/index.html","81f32cf55d853f60984b9418859ccb20"],["/categories/编程/page/11/index.html","183fd3bf38bc5ebc2bcf8920290f76c6"],["/categories/编程/page/12/index.html","0f06edddbfb70e0caf6780649f461da9"],["/categories/编程/page/13/index.html","02c1866e886f7902387e0dc3e1e9ad42"],["/categories/编程/page/14/index.html","7c327481e2531d73d38e64ec558801ac"],["/categories/编程/page/15/index.html","7f99fbd295932c900e6cc7dbe1a2928b"],["/categories/编程/page/16/index.html","ff088454f267bbb2efb67845fe99bca0"],["/categories/编程/page/2/index.html","8453af5c8e00d4809babfaf376cca074"],["/categories/编程/page/3/index.html","6ec94c0268b8512fc8aa47a3d3fafaed"],["/categories/编程/page/4/index.html","0aa799f8bf8eeac3a2c592b90450ad6f"],["/categories/编程/page/5/index.html","63e8db7f327b0f0b1c233ee828d722fa"],["/categories/编程/page/6/index.html","4b03b3669748c57be508555f41cb2c2a"],["/categories/编程/page/7/index.html","15a160cb32a9abeb0335be48886dd0aa"],["/categories/编程/page/8/index.html","c80453aa2466b4bb7be4ce610118d032"],["/categories/编程/page/9/index.html","b9666066993d7aa60305fcd9b16feab8"],["/categories/编程/密码技术/index.html","ab42fc09b091dad7f27478acf2e71148"],["/categories/编程/数据结构与算法/index.html","0493bf69279df8bea706f002014fbf33"],["/categories/编程/生产力工具/index.html","57d610d81539767cf8aa17edc2043425"],["/categories/编程/编译原理/index.html","4a36482e3c4dca26e6e40911b950ab18"],["/categories/讲座/index.html","537f10c40bc8f385640b237b8a9c3b48"],["/categories/金融/index.html","ad5e8a649528b54624a1dfeb38b703a3"],["/categories/金融/page/2/index.html","41fedf4a7b1b62f3851e944a0399fc0a"],["/categories/金融/微观经济学/index.html","c4100af9d9021872db005d3f4480286c"],["/categories/金融/金融学/index.html","7e29c1ca98440f65cbd79e30329a2a41"],["/categories/阅读/index.html","e33137b70ce38e9885f890bbcb8fb8c5"],["/categories/阅读/page/2/index.html","c7a5d953bf6081989dbc1dcac52ade8d"],["/categories/随笔/index.html","def8d2d2fb087efecf45ee792e8fe9df"],["/css/main.css","24134baf2f99b33bfcf4d9f56e219ddf"],["/friendlink/index.html","0e431a2824b6b302e06909735ede1d17"],["/googlea873f713657fb5dc.html","3f93db94fc827529d1e9a141879ba9b5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2377714180d2dbae8329c7370c4f2170"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","9ffe1a23d5407f8275da9c9c7f8f4740"],["/page/11/index.html","b3b16f3acf213b2b7bf01b3846baf72e"],["/page/12/index.html","ef968d9fe0e45c7d8010c99c6478f861"],["/page/13/index.html","5068e5cd216669879f7c4da7b396bef5"],["/page/14/index.html","977d759721e3776db53bcc1f24afed18"],["/page/15/index.html","fa5c45176098c4717a16f83d953a57ac"],["/page/16/index.html","dd709f42ffef010c331820593366bb71"],["/page/17/index.html","1f215d34d18514620f3756f854fab82e"],["/page/18/index.html","2fb11d96988b2ab821f43a30dae5c274"],["/page/19/index.html","e7df28c534f010df24435d421a3632b9"],["/page/2/index.html","5fed4217f6a696573852f0442fdd86b4"],["/page/20/index.html","d07fa755f2b75a786577238461e3d068"],["/page/21/index.html","eaa000a37d55322ad697a24bd9822d38"],["/page/22/index.html","2d714beb97c1b85612f8abaa915b606d"],["/page/23/index.html","48e0d82848d4d0a1a76ba6dbb33d2094"],["/page/24/index.html","32c6a3839794c7940b4e1c51ae3e3af0"],["/page/25/index.html","3dbf57096bb0a3adc748ef0afe449591"],["/page/26/index.html","c57f5ea223ed74e78f48ef31853dac50"],["/page/27/index.html","a6a626ad822c67c0747c3eef66cdcf59"],["/page/28/index.html","6845ad62eec8745a0ec7742d84a71d19"],["/page/29/index.html","58f6215495538b88aef1b80c48949cf1"],["/page/3/index.html","36a8e89b41a6c3d6e91db9a7e109d0d0"],["/page/30/index.html","408eb9a6fa474bba308d894d9772a244"],["/page/31/index.html","8004bcc7430a83b08a23323b5ec4f3e0"],["/page/32/index.html","aca1df3dbcf13809837b475a5ed2ef15"],["/page/33/index.html","dbb5477e822a9b237598dd2873f778f7"],["/page/34/index.html","c68605afeff013c5511b15e882b5fe48"],["/page/35/index.html","57679e79403ba75195f7eae82f3d31fe"],["/page/36/index.html","04ab9381c8c386ac75b39e006c3a087f"],["/page/37/index.html","017182e47c4dbf4a94e057391e067c59"],["/page/38/index.html","e5e1b0fced033d941ca768e3f9bf183c"],["/page/39/index.html","ed91b912685d82e413dc45ecb3325dbf"],["/page/4/index.html","a13620f82366a154c1a62126f2de0f7c"],["/page/40/index.html","986e610ea0715767f9ea17363aab4146"],["/page/5/index.html","872ceaae165d9cca61aa8d6108f121c2"],["/page/6/index.html","48129a9ddd41588d335bc10b2b120780"],["/page/7/index.html","55e71df842e9f19a788db89f1c336a94"],["/page/8/index.html","8492e20d680d707de5c0515d38748e00"],["/page/9/index.html","d13447379ad0b2ab2062cc6013da6bec"],["/post/104a4c5d.html","77656229af36e4bf1a2193582a01ae2d"],["/post/109aa3c8.html","357deb080b829010971556e2d92ab649"],["/post/11246bdd.html","2a3808b24e12de14e327b02939be3a37"],["/post/1233e925.html","dee5d2b713980fd48405484e0ba2088f"],["/post/1448d9c8.html","7875ba50ec71c250433dd422e30b32e6"],["/post/15db1cd9.html","49a3b12a234d04c53a37e22d3bd895db"],["/post/16b5efde.html","e864613bd5d35c5ec3144eb042b4d0a1"],["/post/16fa37a4.html","65a980fa20f87fe8a34204c05a2d0d2b"],["/post/184fc5c7.html","e5f7ebc1f32e57e02a7246eb27b7e3e8"],["/post/19e79191.html","6694c428c257a8dccde71b5ee02199ec"],["/post/1b7db6f0.html","c885908be6a7a09c8f518b44d9317075"],["/post/1c52564f.html","f606a3e707054dde3719a4fccd38d8ca"],["/post/1dc46f40.html","88c93d580119f6ee5783cae9ad49ecaf"],["/post/1eeab2ee.html","a2cbd7c428c52c655bc1c8556e4f60d2"],["/post/2024a703.html","ef05b741f5fe0f3b48590c766387a01f"],["/post/222505fd.html","b3920a142119bc31b87947bf2277f794"],["/post/22b5b237.html","10e53763e5d4e2dc543274f4de34852a"],["/post/23f72a93.html","8d15177a43e285de34c56e86d16567b8"],["/post/264a9c89.html","c8bb6aaba99956d757f322865ae34daf"],["/post/265c0f5.html","d1b077e2a10675c7b60ab987fac462bf"],["/post/26fa4dfc.html","1cb287265582db0d8c33ed9fd6b641b1"],["/post/273ced06.html","4081ae7be97bc93b6b32f6cba4beb845"],["/post/280fbdcb.html","6f671333da51b0c34cda8457bf64306c"],["/post/2ee4d523.html","3bda2e50c2430a899afa4fe6ed75c9c5"],["/post/3090aa13.html","6ddfd8dd781e70ea9e032131cc3a0a37"],["/post/31a770a5.html","90d03afe98bb89a0b6e05925df232423"],["/post/31f89579.html","a8f75a4864ca73bdbc69cd91f57a7ec0"],["/post/32dc51f4.html","4e199b369bf82a33e7ed555c496855fe"],["/post/34a049ac.html","98187ad274cacdfa0d1a7649fdca221f"],["/post/34f53a10.html","e92028393b35889ec9b94f8be3f05b4c"],["/post/36bef409.html","d05b2705ddf819e8fe4e4769bc5187a8"],["/post/36e5881d.html","f259f72d90df86f5022246c81cb4ffc6"],["/post/380486cb.html","4acef1f351286897ccf36c82f3e781a8"],["/post/38f8b110.html","1c99a8f8f800d0d38e9d93d64a6b7833"],["/post/3a3eaae1.html","369697c0a1294c1e6cedbe5c7ba92579"],["/post/3a72081e.html","55346a1cde139dd2457aa53e1a11280a"],["/post/3bc7f503.html","358c59eca8ea45dc6da53666a01ac87e"],["/post/3c57c5dc.html","134a8b0112a85925474356d1c7680623"],["/post/3d71c64b.html","21a4d6cd127f3298b3e53401af75dba4"],["/post/3d8072b.html","3db3a2e8c01e3e7722078d98b520e783"],["/post/3e6878ac.html","3058137a18a75633415cc4b2965de8ab"],["/post/3fce0650.html","8fed7b74bf63ca344357f1231d29b384"],["/post/409dbc1a.html","563406dfd50d85661ffdba46e3265a4f"],["/post/40dfaace.html","d5670b14cc9a0019b979d6ea727382ee"],["/post/4255f31a.html","da43d1db3abab22053dafad2a4d76d72"],["/post/42a619f7.html","bf1681a0ca1b444067676b4119f7bdda"],["/post/44505a5b.html","04b1a3f4100399b468f4cd0ba8bdca9b"],["/post/448da703.html","bd56efaa64dfe267d1670eaae31e06eb"],["/post/454c2118.html","5973b92ea2c9ad910712e74341f3efc4"],["/post/454c2358.html","af879cfb60c23bc18ea0f145ed8ce063"],["/post/4773b69c.html","c124f71e8d839dce384ba638397f50fb"],["/post/47b391f2.html","83d857daef7036362a117217cfffb60e"],["/post/481e8abf.html","95a5bc285972626e6788d94dd1ce2560"],["/post/4ab96b49.html","5a35e4a078df6b6a6999ef4462ee0023"],["/post/4b15f9e3.html","1233530b738c68512dc68fcdd325761f"],["/post/4c60a529.html","9ddf8a00de9bd3ec8fadff95dcfeb49d"],["/post/4d6a6b27.html","24d6087cc671d8d67c92f0ec1f7fba17"],["/post/4db7e28a.html","976b77e61761a272a9fd5c3d8c43a992"],["/post/4dc7502.html","f7a255d976b164ba6bf61a454ba0077a"],["/post/4e876bc2.html","3dcc45b57b1d40ff69ac6d0c379534f1"],["/post/4f352d.html","1268e4d2584c27a7d49397fc803cae3d"],["/post/4f8fe65a.html","cb779db51afa862883a368c37b77ab74"],["/post/4fa396eb.html","e66c4588620a647131b06d86ed102653"],["/post/52730f61.html","7a56ff1cc1f180bbbb0dd7ac74aa0223"],["/post/531de0f8.html","60b709e1a246660ce02fbe6e82e5c7bc"],["/post/53729461.html","79b7d9a595abfc87a8b46f41fe5ed380"],["/post/5555df5.html","4a0911c861889216b161a5ca10e813ae"],["/post/57bfde8d.html","0662c1153a0efad6db702185db6ac7fd"],["/post/585293b8.html","23b78893f4133857b32913b5fec9636a"],["/post/5aa5290d.html","1645fffac2521a2a946d6294f65fe90d"],["/post/5abc6d45.html","72d9e47bddcbc6ec57960b16c73c48e2"],["/post/5c86d06a.html","f7577aac4f71499d11e08ced3f6b52f8"],["/post/5e189593.html","e12d2499c8b2aeba8de7b699cd1732e9"],["/post/5f2d4a77.html","05fdfe146cba50e2a0aba8ac5b70d29c"],["/post/5f341cbe.html","563a8bcce589c8ac87d3f4ac89b217d0"],["/post/60850415.html","767f4349290afdf9f4204991e9e01ccd"],["/post/62cb42be.html","72b3abb773b29b0130a02573bfa1dbd4"],["/post/6501181e.html","c64606170010ca16236269e8c8196902"],["/post/66258384.html","2d780e2f1d8c3b129491777f3ff34263"],["/post/662b8b80.html","e7883169cd848c1b3d88e393c488f3fc"],["/post/677d0fef.html","3613455540b3aba31a77a5de517598cf"],["/post/685bcc20.html","94c42163861e15c8dfd5464362b0675d"],["/post/686dc27c.html","834d9cb7a8382e1365fb5451817530c2"],["/post/6c71e418.html","0f220fc71a97656141182ae4476c925f"],["/post/6ca1eed5.html","3a8e35347f9b87f2814f656d219e3141"],["/post/6cb7680e.html","6e76d4789c4d6541a2dc3c69b679d704"],["/post/6d52b9f2.html","1718a08594f3d853a06e7e71ff183dac"],["/post/6db0d89d.html","bed31457e62c724f072fe1dad5dabd8e"],["/post/6e80eb1e.html","d05da6d313ade428c5c7d553b18ba568"],["/post/6f3b3edd.html","2e1c435e05544742817ae9b5d3249d0e"],["/post/6fc3409b.html","db83bef93cd1733d69a126d06ba61823"],["/post/703409c5.html","f63ad4493d8901b2c63221ec9171bc69"],["/post/7169c4ed.html","dd1e3a9876f3a4c75dcfb6e17cde4c2e"],["/post/73136b.html","badbd9ab303f06dfaf4baa0e7fb157a8"],["/post/7410a832.html","67c01662f7a88eb020ebddd4b4ed0c35"],["/post/742966af.html","480c83f4e25753e168ff57ce8945f35f"],["/post/74479d01.html","9a3fbde2d8b6e9018e32d3f3623f836f"],["/post/74a4286c.html","e23fae39d506c4e05d13ced9246f6bb0"],["/post/75794199.html","7afbb6d2c6267c14752603929a6c07d6"],["/post/75f986a1.html","e2d54380427fa96c305fb2157e79c520"],["/post/76485a7.html","f7921260ac1cb708c508ea10a8104e02"],["/post/772fc02c.html","fdc1719c639b2e4670a86caece6398f9"],["/post/792e36ed.html","1bfcf0654349f3229eb09baf25345efd"],["/post/7c50967.html","d28334807fcfad063f6b3ebeee53e03d"],["/post/7d8e4f2a.html","494835484a05b7ce89863b0b6d91f702"],["/post/7ef8a98f.html","99fabaf19359d7b95ef3ca113aac6fcb"],["/post/7fe193be.html","c8c8a11c75cf2f4beec35082e51e3919"],["/post/879e9655.html","73054a09d6b6456fc5bc19397f853ea9"],["/post/88e8ae98.html","e9239495b9b06064f8bb3b293829058f"],["/post/89873dd3.html","c7a890968a59792a1dd22e3c9d56cf19"],["/post/8ddc8a30.html","2f3bc0d05323a3e3f3300a40ba95fae8"],["/post/8f9cfad3.html","407d658a9cdbdfb95c7156766b8b7591"],["/post/918fcaa1.html","29577914a8c1adf9a70aa9268289fc8e"],["/post/92687617.html","31b516bce3ac166edc848b80bdcc6cc1"],["/post/9282aeca.html","191972d6222af25664f05e61da3a21e7"],["/post/9305c5f5.html","f631745d0670dc20cae562904ac538b3"],["/post/94c9baee.html","b24ff7de44a51755ec2c2e50ef3cec3c"],["/post/98804e11.html","351ad75f4c0ffeb035e06989cedbeaa6"],["/post/9a9a4797.html","7d3700b915a4c6e89c033dfe7d299b59"],["/post/9c28a880.html","ca5af6d1788102af0c3f14d8f6789a22"],["/post/9c649212.html","ed7fa0017e81b34f10eec498e1871841"],["/post/9d402b32.html","60cf757bfdd33a8c4d3f2c269d7a737b"],["/post/9eb065c8.html","0be197d0c0b1297cc8c596441ae297e4"],["/post/9f8e212d.html","2f7ac1fdd0301a9c02f0fce3c895860f"],["/post/a1751c09.html","3fe58d3f1200fdede863cc317ef05e96"],["/post/a1cef007.html","77238bc8cfeb17b41364f338e696d030"],["/post/a1fc03d8.html","144421fcd47a8dc558657ff0e8c5361e"],["/post/a27e9acf.html","69339ea66a7c8b449815732865f97dfb"],["/post/a4c66bf4.html","ad0c2449e36d674d01d8ba1f4fb36ba1"],["/post/a4efe87.html","faaa4fd5593e5d1504977f4297bfdd63"],["/post/a7528411.html","ddf6d5c35c964aa21d6369219615575b"],["/post/a8759852.html","ec2e4aa5429c4171e9004e027b3a3068"],["/post/aa0a97c8.html","04c20cdd5ea9abb2412b1f82f5d3cce0"],["/post/ab4ed95b.html","c8a5f89f1befbf2516191ad2a8be3814"],["/post/ab720150.html","b0fd342e78f9281bf20249641e58114d"],["/post/ac92be99.html","d820a85a9138fab02f0c9da9b20af169"],["/post/acf6b02e.html","032edbc514b216682e89a1061632438e"],["/post/b0d6c7.html","abba9ec5078c52cd680d71b82078471f"],["/post/b3ee770c.html","bf57b0e26a68368677cc26b6825502ff"],["/post/b8ca3dfa.html","325ac560a889e716d4d6ff95cc1c9915"],["/post/bb7f8e97.html","40b957de761d4a4a3736ef7d1d6830ac"],["/post/bba462fb.html","6d5fa0f1e1d928f48586d4c6b9ff25ea"],["/post/bc8586da.html","45083472a05e7e59a92b2daba9e56da0"],["/post/bcb02c2b.html","e3b532c4f814f00958b18e995e4f29a3"],["/post/bd36a30f.html","0ce37ab49648915a4a05c92ae6e11161"],["/post/bde4b1f8.html","58d306bb9044bd76ec6e0dfc59d0c413"],["/post/bea42f1e.html","047a4ced74ed065d7b9f5cc36fbedfab"],["/post/c1864474.html","236fccb6e657c74c12d716caf63344e5"],["/post/c293d2b3.html","8b1e9fc5955cfad7aa7a65d394b78ad1"],["/post/c37095b9.html","e6f0b5bfc5f1fd59c08b87d45c67f063"],["/post/c5672df5.html","d08e37904ef5f489163fe11d290b7f85"],["/post/c6d76e9a.html","16bd01d252b7f9e09df152c93df385de"],["/post/c7fb8250.html","1bf58d8ae0666500b9b892201c21b227"],["/post/c938bbd1.html","85d003aa7c330d16e3b0b2b1dd742e07"],["/post/ca14c5df.html","271db6563ec0de844451d104f08fc08b"],["/post/cd18de84.html","5fb816c630a8a9eaee956912aababadb"],["/post/cd41dfb7.html","93860791ce791223a976ba90a38ac6ac"],["/post/cea184b4.html","4055a023fcd2b3149c1faed199100c39"],["/post/d120bd8e.html","406d12e74b0cd297f9455dee76653e56"],["/post/d50b784.html","424ee2c600914b07ef05a3005fe24465"],["/post/d632e628.html","bafedd20ccdea12dc684146bfcd7a5b6"],["/post/d6a5bd15.html","c8b6436a45651526bd763ec2f5fd1e83"],["/post/d73de254.html","31c2862fe5c2470779de31ca21c171bf"],["/post/d7435d20.html","b86f875fa12909783807ecadfa374891"],["/post/d81c5363.html","6c04d3e7ae48cbec61e6257ea689aa13"],["/post/d899bd9.html","b0a565a415e94ce1d4e16ba4187a3101"],["/post/d9083bc4.html","5572241b992382a8a43296718ee66e00"],["/post/dc981233.html","a21651f1468a10a1d56a40709cb58043"],["/post/dea65d58.html","26c8327f1bd832f6de15ad54354805d2"],["/post/df76d545.html","5219a2c22fe15b2a79768d19d604bfcc"],["/post/e256d99f.html","1d7fa802a804314a1daf46bc71182501"],["/post/e290dd8c.html","45385e7096c45eb5cbf1636e496d1c72"],["/post/e3e37943.html","37d719c12ba61b0324a831faa03f3ab2"],["/post/e583ed8d.html","b4a6ce9a14a8d68a6838511e37314364"],["/post/e5d75450.html","c8ad9c59755fab3a29ece9fd5d0c2d42"],["/post/e6364ca4.html","27bbd459f67ef3acd5a566633793d9de"],["/post/e7058b47.html","f0772f8224b0ef7ae3a95d23aeddfa1e"],["/post/e769f01f.html","09818abbeb4bdb85fa037a0345944e68"],["/post/e78ad34c.html","7f27513eb486a32b31d20dc392f14a38"],["/post/e8005312.html","ab53807691a1f4f65ccf6eeec940b20e"],["/post/e8ae7612.html","548fd93c9de77fe5ecd8fc4566c12379"],["/post/e8bc7157.html","e7ac3c254cf1c4fba160bc3785a9679f"],["/post/eae0b80e.html","6af1b451a2a6f68ea4eaf662e91a9a1c"],["/post/eb9ab36.html","50286706d4cb480583238c4993e47f43"],["/post/f0b23c5b.html","e377d13c80dd4fa0a2c1f7472a40c5dc"],["/post/f279299a.html","fee8b373c3d3b99bf254b73ea784a5e5"],["/post/f3d9c661.html","158d85c3228b38f64da51424b04c38be"],["/post/f4bfd16b.html","68086cbdd517ff56ca37b0ede2c8b9cb"],["/post/f7b33ddd.html","f210f1acf9810c8bd935295c5a07e958"],["/post/f8e4bc7f.html","3157f45776008dc7f499b2fe294b51a6"],["/post/fa83cee.html","1656c018601ea16f8b99d656c940a8db"],["/post/fb2f630e.html","9530974822a272ec0a478c6cb5f657f9"],["/post/fb5efb9c.html","21713136397cc121956bd140a7743f6c"],["/post/fbf7f335.html","e2d724f03cd15174e0b00342ef798442"],["/post/fcb9464d.html","2dabd8ad67231fedc57eeccf016480ba"],["/post/fd581850.html","2c43bf4f5c577e363c6eaff4ebc63c60"],["/post/fdc06f3f.html","380d440be9eec719c80cc9e7ffacb5dc"],["/post/feaebfb5.html","dd0a0124d0c090b6ced8ce25568e538b"],["/sw-register.js","6f3e0d3f2fb3c210f97ee14874c46e49"],["/tag/1988：我想和这个世界谈谈/index.html","1f69fb5b98a0865c94f27e27df1cfdb3"],["/tag/1Q84/index.html","da47597aeac191b44bed8c57751845ed"],["/tag/2017HDU多校/index.html","85648c799dd2a0f60df6a9d5992a28fb"],["/tag/2018HDU多校/index.html","03b0d8dfa893e56a987d8e54fa053081"],["/tag/2018寒假集训/index.html","1b84f28adf63d481626155fbb4a6ee86"],["/tag/2018寒假集训/page/2/index.html","79c0e6c4f22eb4e74eea14f5516edf2c"],["/tag/2018春季训练/index.html","a1599500a1ce420a41dc7d1dafe4187d"],["/tag/2018春季训练/page/2/index.html","97bf72c4588cf8df1cc4048eb7a8125d"],["/tag/2018暑假集训/index.html","055c2f79d942d0381244da81e08f881a"],["/tag/2018暑假集训/page/2/index.html","f0bf053ed7cd723abc3289749de9569a"],["/tag/2018暑假集训/page/3/index.html","4d1a4b9117a4d1be0588b6c02dfe6655"],["/tag/2018暑假集训/page/4/index.html","050e2c8d2cc2c61e9ebb8d6a09cd537e"],["/tag/2018暑假集训/page/5/index.html","df51b90d02a22c1406195ca1244e0ca9"],["/tag/2018暑假集训/page/6/index.html","7027e59e50912ca0ab0222ad843e0133"],["/tag/2018暑假集训/page/7/index.html","ec2975d418540bc64f4b8425fc4af0e8"],["/tag/2018暑假集训/page/8/index.html","74eab1ab0aab6271de65faa399b0f0c3"],["/tag/2018暑期选拔/index.html","eb233b4060519b0a56c846f87450ac44"],["/tag/2018杭电多校/index.html","8dbb523b797ca81e80a98682d655f1e0"],["/tag/2018球季训练/index.html","03c2307212f9172e1da057e69eb5644e"],["/tag/2018秋季培训/index.html","7fddbec1da8d7fb05f77485d0365a21e"],["/tag/2018秋季训练/index.html","9d3af9d0b730473c9e3dd8b7ac7a1b07"],["/tag/2018秋季训练/page/2/index.html","58012f1475b049386dfc207fc732babf"],["/tag/ACM/index.html","987c28048368685ecf27608afcd4398f"],["/tag/ACM/page/10/index.html","0c54affbfe290166f9cdb9d5cb14369a"],["/tag/ACM/page/11/index.html","75479f60b86318e03e1cb5edc438526e"],["/tag/ACM/page/12/index.html","0e4c3fbda975936c91d9cd6edd56b995"],["/tag/ACM/page/13/index.html","19f8d9d81a6d18c8972747c55aea1e9d"],["/tag/ACM/page/14/index.html","5e89376a02f663fbbea1f0ff0b4f5db0"],["/tag/ACM/page/2/index.html","d737014ac07fdb232ec16493d556032e"],["/tag/ACM/page/3/index.html","867b0da9375cb4ac455cc497c3efb72d"],["/tag/ACM/page/4/index.html","dc54ecd9f77988323692bdea6336df51"],["/tag/ACM/page/5/index.html","84fde9f7e5477b07898a8be0d40bb34b"],["/tag/ACM/page/6/index.html","38f515130a234ca46ea1909c0dfb5a54"],["/tag/ACM/page/7/index.html","b83442f27690e0f787d726c04be5a503"],["/tag/ACM/page/8/index.html","03aa1fdc3334e309c980283cf5c14a01"],["/tag/ACM/page/9/index.html","66496b2aada69ef932464477fca94221"],["/tag/AWS/index.html","05069ea5b33a31c7dda68e78f1ed9972"],["/tag/AtCoder/index.html","5e927a83c87938a485649260a4b5da86"],["/tag/BFS/index.html","828384f7a3de151fb78994e91357bd2a"],["/tag/C/index.html","290bb5920e7567c9ef3af63a6cbf2ac9"],["/tag/CSU/index.html","741370cc280b821eeb6836817ecc4d38"],["/tag/CSU/page/2/index.html","a6b1268bba24ffc19da747dd1dbdd1ae"],["/tag/CSU/page/3/index.html","ca00e034d17dc96838f7c3f1b1249c55"],["/tag/CSU/page/4/index.html","052ab194f36d5bb867696147238f26ce"],["/tag/CodeForces/index.html","3a41e9e3812c6fd62ff16a3b9336ff66"],["/tag/CodeForces/page/2/index.html","4e8154338a8d860b4e8c7e9fdc2f0f30"],["/tag/DFS/index.html","02c36b74ec891dc0a07cd91ee1b270c4"],["/tag/DP/index.html","8e36b1a3560411a1064bd6a8e87e0338"],["/tag/Dijkstra/index.html","57a1ad3768a1d3ee3d55e41c2f7aa955"],["/tag/Flask框架/index.html","62cbc7ff992fe41f4d5f148d7d4235c1"],["/tag/Floyd/index.html","d7a9d46f5dbb3d8c94f444f38194d3b8"],["/tag/Git/index.html","97951db43d1144151e9a0e91b5c8455d"],["/tag/Graph/index.html","2e7df705990b542840fa68cd7112d98c"],["/tag/Greedy/index.html","9109b2b88f7d8baa30146fd5d569bade"],["/tag/HDU/index.html","4446c1b58cfcacc7408d9b79816927bc"],["/tag/HDU/page/2/index.html","7fa5d911326da22da164e5e3c46c9724"],["/tag/HDU/page/3/index.html","306c69f2f9cdb1be9ad5de3e8fd6a4b4"],["/tag/HDU/page/4/index.html","973a8ff689e04fe332a0a6c2cc8f900d"],["/tag/Imitation/index.html","2e19bbc142833461953e157502633352"],["/tag/KMP/index.html","73f54cee6ecaf3699eac4c5c262ff1d9"],["/tag/POJ/index.html","d91df46893354fde9205e0bbad559ddd"],["/tag/POJ/page/2/index.html","0f63e8851af7fa9b2633d19202070a78"],["/tag/Python/index.html","5ae76de2ac641b58c81543f1039e0f57"],["/tag/SCU/index.html","5081bbb9a844ee726117a94cded59a28"],["/tag/STL/index.html","804daca9471c4fb035d0c61d73040d79"],["/tag/STL/page/2/index.html","18092b3218b64f4b08ff6dc012aeb6a2"],["/tag/URAL/index.html","891aadb44e2febb2b57a9649d20872cd"],["/tag/UVA/index.html","388883f881384e6b72715a7cee038569"],["/tag/UVA/page/2/index.html","4e8ab2c2d50626cb5e2b78cd7a5b8820"],["/tag/UVALive/index.html","3c22c7fdd71e88cc18c674ecd721ba4d"],["/tag/VSCode-Git-生产力工具/index.html","dcc6a30e5da7f21261edab9548a07bb2"],["/tag/VScode/index.html","14fc7b34b98b6bc1c0e7a13a31318f1b"],["/tag/ZOJ/index.html","d7627455252fac2ddacc45f2a524ea4f"],["/tag/math/index.html","2924fec9f139597739f990b12d2afd8b"],["/tag/test/index.html","b03c2c95251416b7a13722624ce3a0c5"],["/tag/不得贪胜/index.html","3fa4e96f3235cee8ca17b0f326458044"],["/tag/东野圭吾/index.html","293b508882a27db2f5f32d801b6ad6f6"],["/tag/乌合之众/index.html","83a1121f054ac30f67bf3a0f236a7c9d"],["/tag/书信/index.html","b7ff2a0a9a1e5977cbf0899d5908db09"],["/tag/二分/index.html","62c27f40556219eaaa2728ca00bfe637"],["/tag/亚马逊/index.html","21f1c60913b693d3b36a261a6136661a"],["/tag/亲爱的安德烈/index.html","6909cb710f3a0274b1eb49dabd49924b"],["/tag/位运算/index.html","667abb9e40096c04a7ffd5dc7a1b5788"],["/tag/几何/index.html","39b7c7bc624690f041989a9e2e884c20"],["/tag/刺杀骑士团长/index.html","27727ea0a0ad250af63a1fd8fdf97770"],["/tag/前缀和/index.html","2e4fece69a8999cfddda5c58dacef0d9"],["/tag/区间DP/index.html","fe0594da93e7d8f226daed99468326db"],["/tag/博弈/index.html","0df343195cb9146a2bbcb4c14787e4e2"],["/tag/历史/index.html","996a06d36fbb53eca2c5062f9f98154b"],["/tag/古斯塔夫・勒庞/index.html","dfece1754555bf459780ab12cf7f677a"],["/tag/图解密码技术/index.html","1384be83b6239ec54e4bef56a50e0266"],["/tag/大数/index.html","fcb948fda2e055e17e8d910ee73fb89b"],["/tag/天幕红尘/index.html","f5892c03c6fe609fc4c994a7a4c7709f"],["/tag/如何阅读一本书/index.html","fdcac7e7003567451442cc1f9ce74da9"],["/tag/字典树/index.html","e2c06295b661330da6eac991583ae5f2"],["/tag/字符串/index.html","51536962e5f5a9cffad999dd216e119e"],["/tag/字符串hash/index.html","c8b3bd109c9986bf00494cdfbf539737"],["/tag/安德烈/index.html","99d26ed56c4fba0da47201a3a8e73e7c"],["/tag/密码技术/index.html","050267925445910f7c7a5749940d1a0d"],["/tag/小说/index.html","2a25c0fd4e3d23535bc8d4ac183f0fe6"],["/tag/岛上书店/index.html","dde828c42637555ae87985a17c14a3f8"],["/tag/并查集/index.html","4a41d085d99926acd93458a236ba1395"],["/tag/待补充/index.html","5380be44d4d5cc2891e3ba9b9047964f"],["/tag/微观经济学/index.html","3a1bea417cccbb78752f03b3a6e47474"],["/tag/数学/index.html","d338b20369f1a9d8aa93c524f27770fb"],["/tag/数据结构/index.html","e3122fa168d953cdc9a76410ae972ab9"],["/tag/数论/index.html","8957803232666b6e9ccba6724954a112"],["/tag/文学/index.html","96761fb728aa290ce67ea87f1c3793c8"],["/tag/文学，小说/index.html","d207755c4c16170c993a27a4900888ee"],["/tag/旅行/index.html","bf773955232765ea6aa7b06efd080023"],["/tag/暴力/index.html","a16ca4b0e5b08d67946c91025e32a3e2"],["/tag/最小生成树/index.html","9ee36a0492ed57104af4aa94f457d76a"],["/tag/最短路/index.html","505590a0340d4e165cfff882f6fbdf8f"],["/tag/最长路/index.html","1181678a05daac6ede0e435750ed847b"],["/tag/本·伯南克/index.html","aaa31f4153184df7c7bf9773c23e51d2"],["/tag/杂文集/index.html","767417c55045551bfaefe663759a1cc0"],["/tag/李昌镐/index.html","b89ab80597a8442e88e8c37cf6e63aa3"],["/tag/村上春树/index.html","1e18c92c082df4e978d28ce035f044a8"],["/tag/枪炮、病菌与钢铁/index.html","6b4159ad49235e60253daaf2d8643442"],["/tag/概率/index.html","ea00db7868c232d5dca15402859e5795"],["/tag/正则匹配/index.html","f55914a5579fdaa215ba11402ff414ac"],["/tag/水题/index.html","2e235f50b5ba23c435805706be5b1a86"],["/tag/游记，武汉/index.html","74ae47a4fe7323c6165132efadf9b7b3"],["/tag/演讲/index.html","212beb7f129c6c6d3dc7a82a37493842"],["/tag/矩阵快速幂/index.html","ea2b3ca2743b365e53aafb0f0ff295ee"],["/tag/石黑一雄/index.html","1e11c943841a5492ed0c319edaa14d6a"],["/tag/社科/index.html","2cc1eff0b21c442bc05dc7e0f51fe072"],["/tag/笨方法学Python3/index.html","1f084bd89de7606af044ae99540314c5"],["/tag/算法/index.html","44a26a998bd28dca4669d611cdac6fff"],["/tag/算法/page/10/index.html","01941c36da8f113f1f3c81d7436652a1"],["/tag/算法/page/11/index.html","ca786710c2b69529850fe0dc0e358e94"],["/tag/算法/page/12/index.html","e7bc3fd6c2b1ed8b5f2c907f22cc4a3a"],["/tag/算法/page/13/index.html","b995286fbfc2b1e8d63d4e87d961d100"],["/tag/算法/page/14/index.html","dfca008a76e95e93ecb8ed037a13e8b5"],["/tag/算法/page/2/index.html","a0d01771e95874d46b5da72f2f705a4a"],["/tag/算法/page/3/index.html","32132a529d104f03f8b5cc648de14762"],["/tag/算法/page/4/index.html","745a3a53e9bf6f910ada7f03003619ef"],["/tag/算法/page/5/index.html","080a2cb7befd0665fa66ce0d436e512c"],["/tag/算法/page/6/index.html","f2228b6bbe8279f7616f79d67f37a68c"],["/tag/算法/page/7/index.html","d6267b8704ac2c179220db69ce699eab"],["/tag/算法/page/8/index.html","b72ad72a02d2ada4aa2c4fa8287fcbca"],["/tag/算法/page/9/index.html","9f7367ed668b834ae83977cadfa79ab1"],["/tag/素数筛/index.html","7101e8be4e580dbe09b0a7490cf66f40"],["/tag/线段树/index.html","23890fa4d4fb82b9a26cabc2ada9e173"],["/tag/线索二叉树/index.html","31987a15eaaa5293ef6058236a191fd5"],["/tag/结城浩/index.html","ccf78b5e0abfdcca6f9e2dc8678376b5"],["/tag/编程-C-课程设计/index.html","9e3b5fc38918c2c216eb9070ca1636b2"],["/tag/编程-PHP/index.html","a5e52dd8e50dbcae0823ed4f7f65caa0"],["/tag/编程-小论文/index.html","d0b053fcbf6a33f1086b454e95540cee"],["/tag/编程-数据挖掘/index.html","2f5918912cfc137506b1d6b0803a3e5b"],["/tag/编程-编译原理/index.html","83b010284ed3e9a6b443a56fb6e016a7"],["/tag/编程/index.html","6eb8e6cb34ceed0cec3526a0a0790343"],["/tag/编译原理/index.html","584f2c7c8ca1f0d094eb0cc0920c414d"],["/tag/自传/index.html","c6574bf19c3af35ddad443e6fc9d6d08"],["/tag/艾萨克·阿西莫夫/index.html","12e941766517f6d2ff2330bf6ee00107"],["/tag/补图/index.html","a9bc3240e27dd448aebcc3392be985bf"],["/tag/规律/index.html","90018c150b7ec2db841dbc9ceb12805b"],["/tag/解忧杂货店/index.html","12c6fc11ec05b2320ae84fcf2ba2b358"],["/tag/计算几何/index.html","de662ce7a836180fd4c3682feafbc808"],["/tag/讲座笔记/index.html","24a81677ad6ce2e43bda56594e3eb276"],["/tag/读后感/index.html","a8bde1b56d4126c7a181cbbe0eadef26"],["/tag/课堂笔记/index.html","1f46fe5ab833fd5ad21f58fa7bc54888"],["/tag/课堂笔记/page/2/index.html","5cd447298d0d73908450a3beae23ec01"],["/tag/课程学习/index.html","263183a6501fa37b2addc2de1faef5ff"],["/tag/豆豆/index.html","1d8e581616f18930f02b13301ebfcbc4"],["/tag/贾雷德·戴蒙德/index.html","b61b560382d2879d24995254fe9b2d0a"],["/tag/辅修/index.html","97a095ce1687fecfb5819b6665343fa5"],["/tag/辅修/page/2/index.html","c1b2914411f87c5fab2049b1c819f590"],["/tag/递推/index.html","22ec9a50778e5f66326ed79419c19e91"],["/tag/野火集/index.html","a2dce4412ca2d00c6cf99935aed8441b"],["/tag/金融学/index.html","4372c394a96a05373e55f8570cdb9df3"],["/tag/金融的本质/index.html","f2f7f16362d87d28c5406a6640f00630"],["/tag/银河帝国/index.html","3e2ea8ea9d57eaa11ce23a5c7214ab24"],["/tag/阅读/index.html","aa92c68b1ebc08dec20ca6174b9dfcc8"],["/tag/阅读/page/2/index.html","c07418ce37f0d5aae32e7c54a1839cd3"],["/tag/随笔/index.html","024b8ecb378b8b8eaf55f79f14d6feda"],["/tag/韩寒/index.html","26e41587b2eab4f12dcd069058ea97b4"],["/tag/龙应台/index.html","c5a058ea9b72d64707d26c59ea48ae92"],["/tags/index.html","20d5b7f4aa7413dd7f041520fbf043db"]];
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
