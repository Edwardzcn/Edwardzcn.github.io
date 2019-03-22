/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","513e03f31b44f011ae5fdd2893260673"],["/archives/2018/01/index.html","4627291e11bdd9efd240fc3ef1da973d"],["/archives/2018/01/page/2/index.html","e8443e0092b20f3de928c062fb0530be"],["/archives/2018/02/index.html","bd392ea1006a0644750b69efc626ea54"],["/archives/2018/03/index.html","4fa4befe54cc89ff398af19952f2f64d"],["/archives/2018/04/index.html","715823741d47cba4d897ccc200c9c34a"],["/archives/2018/05/index.html","7c3190c43c6cb10254612b6285a8a0ce"],["/archives/2018/06/index.html","80076a6f607d8fe41ef4eddc9a282802"],["/archives/2018/07/index.html","7bf524ff7897abce83c389c413d1c1a2"],["/archives/2018/07/page/2/index.html","9405b38e72b4576c246cc4a16528aeae"],["/archives/2018/07/page/3/index.html","8339ee0015060080568aa7ae88df73fa"],["/archives/2018/08/index.html","97149377dafeb8a1f510c83e6b784121"],["/archives/2018/08/page/2/index.html","7cee6169cdda5163a1e5ae5bbec624b4"],["/archives/2018/08/page/3/index.html","c88fec5e52695c5005fd19ea810026cf"],["/archives/2018/08/page/4/index.html","beab645260c3d3e1837c63eb01abd4ed"],["/archives/2018/08/page/5/index.html","4794860d6b255a5d790a27c9ea13ad42"],["/archives/2018/08/page/6/index.html","9077860054d65f1c9ac21bbe0a233092"],["/archives/2018/09/index.html","d673a644d86fa69bdecb0fff552ce41c"],["/archives/2018/10/index.html","93d1acc4a614b08650d7147cfe817524"],["/archives/2018/10/page/2/index.html","9723910f2f3eb55ccb71274eb37ec0e2"],["/archives/2018/11/index.html","bb786841fd94bb562d8dd118a131aef7"],["/archives/2018/11/page/2/index.html","0a7c9a825554f2848eafec7e311e5e8f"],["/archives/2018/12/index.html","9e069848d54f713c8d0e43ac1fe11a2d"],["/archives/2018/index.html","a1c37849b1f40971a2193346af10021f"],["/archives/2018/page/10/index.html","d7c1f043016718709fe254167ea18996"],["/archives/2018/page/11/index.html","9fa73a4a730e84de65b6d694586adc37"],["/archives/2018/page/12/index.html","e3c467a368f1dc1f17a4a76e79543a53"],["/archives/2018/page/13/index.html","f003c30cb44ccdf4c9bfdb1ab19b3281"],["/archives/2018/page/14/index.html","f3d96932c2928ba00d34206a46d85b6e"],["/archives/2018/page/15/index.html","365604373345dd81308a11e8e7ebb765"],["/archives/2018/page/16/index.html","5b093db630081d19bde3534d9c45445f"],["/archives/2018/page/17/index.html","a2a6cb46f3856fab032ce0a15956ead2"],["/archives/2018/page/18/index.html","a5fb6d28d9f361e0d1b41fbc586c6eff"],["/archives/2018/page/2/index.html","13e2cbe461af4c85f029f2ceedb6afd2"],["/archives/2018/page/3/index.html","54dce831299d49f8373df1f6da055809"],["/archives/2018/page/4/index.html","48aa651b1d2fe2d064f365abd04a333c"],["/archives/2018/page/5/index.html","ed24614e8cfe00cf1cb365a45e38bdfe"],["/archives/2018/page/6/index.html","79f396b8d20e696473760ffdda82d3aa"],["/archives/2018/page/7/index.html","b8f11b7c56ba0e3214e19799d757493d"],["/archives/2018/page/8/index.html","13a8dcec97ca6365c1ae054c04d5281f"],["/archives/2018/page/9/index.html","810d655bc5a0e0cd0635ee7b1382f81a"],["/archives/2019/01/index.html","9c54ca4e4a4568d92ebbc2f7ee5780d2"],["/archives/2019/02/index.html","da1f5115c1119d04c48d5706b0978c5b"],["/archives/2019/03/index.html","4f94bd8712326125ccc5719c248258b3"],["/archives/2019/index.html","a5404acf3efb6bec31c5ec1928dee2be"],["/archives/2019/page/2/index.html","7ea7693004e8c37668256357c6232ed3"],["/archives/index.html","e254afebc87815ba2394706518e97fcf"],["/archives/page/10/index.html","d8eb2426e8d4006255332678a93180f4"],["/archives/page/11/index.html","8c96077d3ea0d2123f6e45035c126968"],["/archives/page/12/index.html","253eb87983c94e1f9ed6aa01f3f47bce"],["/archives/page/13/index.html","32266ceb461b0c9cca9745e7a7064f10"],["/archives/page/14/index.html","995a83986d2c5cddd3b93144833c83d2"],["/archives/page/15/index.html","5a8c2ce8349fe856dba30b7c7c63caad"],["/archives/page/16/index.html","75889cf1da66051c586f419700c00591"],["/archives/page/17/index.html","8d4c1baee4edcb2a1f8608835287ad27"],["/archives/page/18/index.html","2d3ba38bdec9d32858b458f6e810b40f"],["/archives/page/19/index.html","244701ce2b7630d7836e6f94cae4a1cd"],["/archives/page/2/index.html","351680d6931080c62d30983fd00a49d1"],["/archives/page/20/index.html","38c96d0f1d8e114ef73098f2223d3a05"],["/archives/page/3/index.html","0c8418d1241099d224a5c0a11e9615ba"],["/archives/page/4/index.html","94ff4bb4dbb689ecbf4408a399321080"],["/archives/page/5/index.html","6252c991c2ebc075cd1a87a7c289558e"],["/archives/page/6/index.html","014279da4d8e7765be42a0ad061f9133"],["/archives/page/7/index.html","32fd90a47c832f8589c5688bd6ef98fd"],["/archives/page/8/index.html","a1f11006f41f254a36b99f3af4dae4dd"],["/archives/page/9/index.html","0eaaa44517a6f5e7b3da68f00c13104c"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","ab1805d84f9d41cf8091fe2ab82ed932"],["/baidu_verify_ZzhwBFUe1V.html","9bd48c7e44246747b85df39f236681a0"],["/baidu_verify_dw73Nh8OEw.html","26dcbcfee9e24a0592dd1c26793514b2"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","0577de46c070acf48775c40cf016d844"],["/categories/操作系统-集群/index.html","db10c0648daacdafc43ba1e314fd2c93"],["/categories/数学建模/index.html","1622c0949b11934589f53db5fe42680a"],["/categories/旅行/index.html","1a8001d142602543b01d1a5d80e25688"],["/categories/编程-PHP/index.html","c5cf6b8c5f8024f7b5100d90ad2cc42a"],["/categories/编程/ACM/index.html","e4693d802ffd3d606d8c2fac087317c9"],["/categories/编程/ACM/page/10/index.html","0e21cd54a429bc2883b20f8aef0796b9"],["/categories/编程/ACM/page/11/index.html","890e336950a9319a50e258afb6b8f89a"],["/categories/编程/ACM/page/12/index.html","af3a91d12743733fdece0612813762af"],["/categories/编程/ACM/page/13/index.html","221db61ef59e6dcb79b9646b4edb2122"],["/categories/编程/ACM/page/14/index.html","e88c709716584f7452725c833db376a0"],["/categories/编程/ACM/page/2/index.html","748c5f37db79c2b011c1393f3938a323"],["/categories/编程/ACM/page/3/index.html","2b3dc1c7855da3b760c9571b69ac58e5"],["/categories/编程/ACM/page/4/index.html","2f1c6bfdd8edfc02b025a3963cbf1ed7"],["/categories/编程/ACM/page/5/index.html","c182a94a96a2045108e33e880be1652f"],["/categories/编程/ACM/page/6/index.html","fe109c7c1ed9a204482630ca3c0161c8"],["/categories/编程/ACM/page/7/index.html","9dc1d7ff9ddcb90e9332c98ec0cbf0b3"],["/categories/编程/ACM/page/8/index.html","207b98222cd9ac00bebafe46dc438c95"],["/categories/编程/ACM/page/9/index.html","0e8f6d4297071f7b2a1aa7b8ea664b12"],["/categories/编程/C/index.html","8905a1f4d4ea1c69730b41500b9c8d7f"],["/categories/编程/Git/index.html","d78f4613edd84f8176abc2cf48e55ba9"],["/categories/编程/Python/index.html","53546f88e39e821b4db83ae98be61563"],["/categories/编程/index.html","c0078314dca58f643ecb1530f301bf7b"],["/categories/编程/page/10/index.html","bd0e795ee2e3653fc6f82a495ba2fe31"],["/categories/编程/page/11/index.html","1ba80b4e8e8b589a4648917eea2567b4"],["/categories/编程/page/12/index.html","f808ec2cb7ad6a376594860c948c8d04"],["/categories/编程/page/13/index.html","b798866bf6c83f398ec922fc5b375744"],["/categories/编程/page/14/index.html","420112202ee96a705e590d59b4e4715a"],["/categories/编程/page/15/index.html","02c96618f178c351ff2a94a1d372ee56"],["/categories/编程/page/16/index.html","281dab63032bb1e5d514f6db226d559b"],["/categories/编程/page/2/index.html","ffaec1bd8fe21aa6b93a696cb617391c"],["/categories/编程/page/3/index.html","018302912f298c3b2cb0d3897cc95a8f"],["/categories/编程/page/4/index.html","ff563f0e9aa39677962821f574a938ad"],["/categories/编程/page/5/index.html","0660831868ec14a9e15da400f96ecd71"],["/categories/编程/page/6/index.html","1c35ff3087a9176a295572f9a5b8091c"],["/categories/编程/page/7/index.html","ab4ac5a18a68756294ad1bd38cdc3a41"],["/categories/编程/page/8/index.html","211c154bfadf1054e46ba41cc0084966"],["/categories/编程/page/9/index.html","2ce0b9c0deaad37a3a56d69d01d3eb19"],["/categories/编程/密码技术/index.html","e5fb6155da7ac8a9442c89de16d714cf"],["/categories/编程/数据结构与算法/index.html","d5ed06a6731364738f0788708c008d29"],["/categories/编程/生产力工具/index.html","924769f31738da0d8f9f4935abb4cbc0"],["/categories/编程/编译原理/index.html","d6c10459c83e2bab24e6699ade12fe3c"],["/categories/讲座/index.html","47198ba5bb249ca8c900879e9c1705cb"],["/categories/金融/index.html","c30c3fb8beebfc5a4e9e91ab0a64a4db"],["/categories/金融/page/2/index.html","871c65cafb766db6eff987abf1b73613"],["/categories/金融/微观经济学/index.html","2f3a829517ae100f668098f7f97f9691"],["/categories/金融/金融学/index.html","cba2433c83768d994b6f7675ec379fd3"],["/categories/阅读/index.html","2d051c14a6d02f269b4003e48b2815b0"],["/categories/阅读/page/2/index.html","a0ad142ada1199cc84d23cdeab96d4d0"],["/categories/随笔/index.html","d52082cd1ed8a2d7f970ee938d5f39d3"],["/css/main.css","23197c4eccdbf93464946be8daea6cb9"],["/friendlink/index.html","5ea90e724870a663046909097a67c21f"],["/googlea873f713657fb5dc.html","8b95ac4b12655ae2c722b7561cd8c326"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","75514a09d5fae98f5d65db9e9017aedc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","32553c37b7cfb4f4be2bd0420d1cb024"],["/page/11/index.html","2c4f8431cacc527ac3084c5809201d08"],["/page/12/index.html","178e479df3debb4d8750ce1d0c14bae6"],["/page/13/index.html","14d04907bb78b3fecb6213577f846ea6"],["/page/14/index.html","b2cafa2e750093e006f1b3eb786c317b"],["/page/15/index.html","23756c2bebe404d2a4f168b8d4d2cc31"],["/page/16/index.html","b297b733dcbf324d07ddf6f7eac4ee63"],["/page/17/index.html","e63bdb8d46d1a9a02524da2b06e6e6e2"],["/page/18/index.html","75dfa1f1eabe3965939e99533976aab6"],["/page/19/index.html","902f978912b202d4a380af36d9bb3a67"],["/page/2/index.html","c414061cee4885bf8335c025dce84d67"],["/page/20/index.html","f7cbb436b55746074d6a6a571f74f471"],["/page/21/index.html","abb1942caf3479566bd896c9765eed9a"],["/page/22/index.html","8fb9e0cc37e6fa457f0517cd04802ba3"],["/page/23/index.html","dacc6590400bf3f51ea69e8406d5fcc0"],["/page/24/index.html","56f24e05bae86841b14c660033bce1a5"],["/page/25/index.html","fa4e826369a791930370fee4f5f63e5b"],["/page/26/index.html","990fbaf39130d532ca8aa4c8654c2f62"],["/page/27/index.html","5edae459e5256208138ab014bc0bea4e"],["/page/28/index.html","70543e7e69be4fcf92591c56d0af25dd"],["/page/29/index.html","15e7bb056eb75a29bd8a212749ca85f3"],["/page/3/index.html","3073ad261c1744a5b92a35db6e3778d4"],["/page/30/index.html","e9f4685a473983db5416b347b0ab6f9f"],["/page/31/index.html","f1fb74fea9841c5a3509dde2051584f4"],["/page/32/index.html","f4ed197eaa418a05f01eb582ab5ed04f"],["/page/33/index.html","538753ba3a276309f0369d7575e41fa3"],["/page/34/index.html","1c6c523f50e8af56810a64be6bf65dda"],["/page/35/index.html","4a43ad9f24abf9abbedaf0e0317974ea"],["/page/36/index.html","6f62b91f9a3195c775c21ae3ce3e2ab6"],["/page/37/index.html","e59b9d139c85e283bb2701250803208b"],["/page/38/index.html","64eac1744d737fd289c205993c5e8944"],["/page/39/index.html","e0b35e8df0d36807f804583463e53461"],["/page/4/index.html","4f628f6d6fa97729c04278106a66c5fa"],["/page/40/index.html","34ab4e529fd333df62cc81e03de3a7e3"],["/page/5/index.html","052dee7e6813e543749aeebc42b9dae8"],["/page/6/index.html","b95c3f6094314f277e1b1f761f877ed9"],["/page/7/index.html","4c5f9c4c7115a19785fd921e87b6aa5f"],["/page/8/index.html","79beec9f62ee14477f48e5354705da22"],["/page/9/index.html","3e8f8d3a0a1e25b112a28894d71b43d5"],["/post/104a4c5d.html","d1c25abaa055ca87693d617ba8eff5a9"],["/post/109aa3c8.html","176f2a01afabf00a925aa6ea1e97c05a"],["/post/11246bdd.html","c6f7b23414ab619e5ac9f27da4900e13"],["/post/1233e925.html","9098cde7c111191eccda96eb8e021f3e"],["/post/1448d9c8.html","007b027b1e7b137930592b0a150411ca"],["/post/15db1cd9.html","268742c83559db2a628df3432b9db25e"],["/post/16b5efde.html","408657c46aa6cadbdf62007f2d513ba6"],["/post/16fa37a4.html","cdd5e165da3f17fde4469d92d2be6156"],["/post/184fc5c7.html","49d5481ee6a8d61aea8d21fd26ef796e"],["/post/19e79191.html","db81065c7c99329164870732f68b9793"],["/post/1b7db6f0.html","e93dc92485a05d106c3553d393d8d9e9"],["/post/1c52564f.html","b7e48f6d582516eebadf5053483ccdfb"],["/post/1dc46f40.html","8fb7e9a58771745243128e41ffc75755"],["/post/1eeab2ee.html","e94bc9be3de2861dc5e65f9ba38488bf"],["/post/2024a703.html","81e05250968430493690ed63118e4052"],["/post/222505fd.html","2bd38bcaaeb06fa2d3ddf32e21f46570"],["/post/22b5b237.html","88a2b45990109cc9aa2b2271cf7b1fe1"],["/post/23f72a93.html","a0631e28b261f150ba59cd91e6f7bfa1"],["/post/264a9c89.html","850656fb4e6d7d7ea017bf5104eba62b"],["/post/265c0f5.html","6148d02d7d3dca4cafca5f776be1c99c"],["/post/26fa4dfc.html","22f5c0686d37e55bdd74ab8fde8518f9"],["/post/273ced06.html","e46ea63e3de852cb736a4983c4fcb0ff"],["/post/280fbdcb.html","b0801c90d5432e0e6608963174551b5a"],["/post/2ee4d523.html","96f6105dba483881b45f04d4c3dfc5e2"],["/post/3090aa13.html","a76f8c877ada8cf2d38c7e7ca3ee0bf5"],["/post/31a770a5.html","2cffe4249403ca14fea9c678fce39ac6"],["/post/31f89579.html","491a46365febd7448d172aaa3a1f543b"],["/post/32dc51f4.html","47b7012cdb458a8c19411b8593fe526b"],["/post/34a049ac.html","d089e1739799c88efb0d05cdc7852e57"],["/post/34f53a10.html","6e53a3d5221b3abce66e3991bcd04843"],["/post/36bef409.html","8774b81f1a0baeab6d3e140029ca91e7"],["/post/36e5881d.html","a33d8e7ffb3c3ddb751f72f32e63ae72"],["/post/380486cb.html","6e271ba308ca3e0a53bdb83dc905dd63"],["/post/38f8b110.html","b4fdf141425044453a5b4457297355c7"],["/post/3a3eaae1.html","fe528ac3d7264e017d5de172274871a5"],["/post/3a72081e.html","69178b298c1336ebafe49ca7918c0dba"],["/post/3bc7f503.html","a5ebac3700d532bdc8a179ad58e36ae6"],["/post/3c57c5dc.html","cbceb01fed3f99b8b25eca4d81b215e1"],["/post/3d71c64b.html","97db27712d3ce15d8d99bcf33714d181"],["/post/3d8072b.html","29a7db2d44a24e2c3eaf76672457b813"],["/post/3e6878ac.html","8d32711a5e083adc0aba28af390921a9"],["/post/3fce0650.html","4b7541cd499d31c614ae3f738359a081"],["/post/409dbc1a.html","46ef32dcd369c9bb971e58e70eccc0d2"],["/post/40dfaace.html","becb22c25508ff247e4c28d89d656f7f"],["/post/4255f31a.html","69bb676388dbcb84537c72625a394cb7"],["/post/42a619f7.html","a21257c1c95ce09c7dbe3b2c51978776"],["/post/44505a5b.html","ba09655b5c6795851408a08fcfcb04bb"],["/post/448da703.html","7b9a8b938dc27dcbd53e591858454e7c"],["/post/454c2118.html","fe21ce5af0e050d61147f5c74c79a700"],["/post/454c2358.html","6f60f876f414aaab024ea2b8805a5c9c"],["/post/4773b69c.html","909d531d10e69577467203c8518772e7"],["/post/47b391f2.html","9cb893bd8b2d2fef9d3fe55ad1dc4554"],["/post/481e8abf.html","3bf96a667a884eea2d40872298799457"],["/post/4ab96b49.html","4e2551bd6e55eab9a4a7e0d6e45a1d13"],["/post/4b15f9e3.html","88f8a8e15506386373b6e0fb43478a44"],["/post/4c60a529.html","0a9890e7409c42f490a144d30c01468a"],["/post/4d6a6b27.html","2cf5b85ea852dc08e9b46fd848ee3c2e"],["/post/4db7e28a.html","ca5e52bf9fb4dc14e752b1f82a27523b"],["/post/4dc7502.html","5455cd8be5436bbe3a7d9b64cf33a563"],["/post/4e876bc2.html","4fa6d79db19e5ae5011ff7be2bfa97ad"],["/post/4f352d.html","3eadf73b06850be2a1c7fc24958e48ac"],["/post/4f8fe65a.html","59821abea3d17a5e452352f7a2090a14"],["/post/4fa396eb.html","57b9b599ac6a71a349cfd7a0722b0da8"],["/post/52730f61.html","2915dddc0da6a17c8da37d9af44bbf02"],["/post/531de0f8.html","43a078d0a43a47a8976923d7124598c2"],["/post/53729461.html","d14d61a251f7f716e36e418aaf58407c"],["/post/5555df5.html","39217ec5ebeee1d517e1fded9bbf8f6b"],["/post/57bfde8d.html","93aab511c716dc893bd7ba4c04f73807"],["/post/585293b8.html","c8659cf6cea33233db5403b93d095101"],["/post/5aa5290d.html","2b3a3832ad86393cf5b020a1c088c7d7"],["/post/5abc6d45.html","d4fe5e7037a896f06acc6e61a1614c67"],["/post/5c86d06a.html","379544dd51db27ce0f075b267dc44765"],["/post/5e189593.html","4c794b83c76fb1f7e7d6b939ba7adb36"],["/post/5f2d4a77.html","5a9e3530ff1d9ce3953def6be7f60e8b"],["/post/5f341cbe.html","bb7689114fb7293974587e8d38c66f6c"],["/post/60850415.html","18e5e2b406cef92b63808b76c7bf0817"],["/post/62cb42be.html","c566b50b823c22e1f6269c8467f3f95a"],["/post/6501181e.html","7cb94de72c621b75ce8c5e3187c836a5"],["/post/66258384.html","03b1715a05f0013ab10636a3bd024d43"],["/post/662b8b80.html","5b09e23113d247b9267c9e62a61818d7"],["/post/677d0fef.html","9c5def8b25712ff04bb69abd860569dc"],["/post/685bcc20.html","ed2728644e8fce544f464b05c057d78d"],["/post/686dc27c.html","700997d3f91ccf62836874fa8757fabb"],["/post/6c71e418.html","419da93a46285bdece24ea3de854a200"],["/post/6ca1eed5.html","266b0d5cc057845529247f8fd5659f62"],["/post/6cb7680e.html","dc131e44e428ae6766d8bb8d3267fb19"],["/post/6d52b9f2.html","a785c4726a53e09c875b63ccef542d7b"],["/post/6db0d89d.html","3fc29e51dabb6834d30d8a411e2e8f47"],["/post/6e80eb1e.html","ae68dd839082eb9341bfad9fb9b2310b"],["/post/6f3b3edd.html","67a763f4d41a9fb0343cf2c1720e06a3"],["/post/6fc3409b.html","e26c36c93038ee10cda46a9c0213b813"],["/post/703409c5.html","af7345bf5a4948c2417a4fe822444753"],["/post/7169c4ed.html","30d587e963dbb4b4fc217c029edc2d63"],["/post/73136b.html","422ff8b849ea79e9845df273a9eaa1d8"],["/post/7410a832.html","6020ec08d25a87f32fba344345aecf3e"],["/post/742966af.html","82051849ed7b29998c7ec4ef04fc480d"],["/post/74479d01.html","c6b45b227db2ffe50731b4dc857ef278"],["/post/74a4286c.html","aca3b79fdce41f0a0636c5769d9f4806"],["/post/75794199.html","cb722fa1523feffab54b12ba6cfd4429"],["/post/75f986a1.html","10f9625baf148523b83f6c83d38e1dc1"],["/post/76485a7.html","4ce89e44d3273aadd8c559725ee74d6f"],["/post/772fc02c.html","47e2d74e2373eb3d16a5cb5a8816aad1"],["/post/792e36ed.html","90e61afe481658b73bac23ca43946ccf"],["/post/7c50967.html","56f1972f1a00a5a6653bd314feba9946"],["/post/7d8e4f2a.html","ce2ab2fe0c7ac58a0e662f582fcadf8e"],["/post/7ef8a98f.html","e33fea2f44707753868b0f1c962fac51"],["/post/7fe193be.html","c9c89db09ac78ee3be00e785f4b0dcbc"],["/post/879e9655.html","898ab617de8ff770443402156d2a04d8"],["/post/88e8ae98.html","01928b3013c11ca63952158e718923f8"],["/post/89873dd3.html","d493de10292a1b3c07c4714c9bac02eb"],["/post/8ddc8a30.html","13366e0134f871aac6e09935e3a502d9"],["/post/8f9cfad3.html","b949138363a53199988efe37cf3a9930"],["/post/918fcaa1.html","35e273c52212cd9b6993463579fef8c7"],["/post/92687617.html","c2bbc3bdd60b9d5dd8e745d315f82913"],["/post/9282aeca.html","eaa59beca05cdc95235cc19aad496cb0"],["/post/9305c5f5.html","afda4187f7d0bf1373f584f3d52be67e"],["/post/94c9baee.html","d4e59777669c828739a03b99abe581cd"],["/post/98804e11.html","6c3fa7c54bcfb1d0636944fa3c67a12d"],["/post/9a9a4797.html","d10ae0714af738f3812a8cb6ab3aff36"],["/post/9c28a880.html","6b0de4a576ea1aaadd0ab77b418c2d10"],["/post/9c649212.html","cef1bafd89d13492ff29134391ef1890"],["/post/9d402b32.html","266260be7d5eab89e64fe60395b2c0de"],["/post/9eb065c8.html","303b792e7e0a6aeacf081cf52a038daf"],["/post/9f8e212d.html","8e96b1d4876fd79134683a62fa8fd919"],["/post/a1751c09.html","1664ae58daeb9815a156acd946a596d4"],["/post/a1cef007.html","30a1154dfa64364f7322cce0a186b413"],["/post/a1fc03d8.html","62896ce9085ba6fd4f0060b33786edad"],["/post/a27e9acf.html","e6108a68dc05c573c4477d98c425be7b"],["/post/a4c66bf4.html","608799a885847334db25f19a481fcaa5"],["/post/a4efe87.html","00db34ed97db33db647bfc4246c8ba70"],["/post/a7528411.html","dd8f8e58615a3b690e1ab5e1386ad603"],["/post/a8759852.html","d2d46a4cb177f8159b3209483a4c9dd9"],["/post/aa0a97c8.html","2808d292c57cd1b1f1090dfc1f9e7330"],["/post/ab4ed95b.html","b0d0b6871ac48ca292bbb81c0164fe38"],["/post/ab720150.html","fdbf58a2f1167d48f130b046751758a0"],["/post/ac92be99.html","6a0da3c00ba9f6d9b43d3da138f0e4d9"],["/post/acf6b02e.html","7ba0deddb1b11900fa19aa949bb84d14"],["/post/b0d6c7.html","83f8ecbd531cf1fdf53eded82f55a8f3"],["/post/b3ee770c.html","c1259c856e42d77cbe854c560e70043a"],["/post/b8ca3dfa.html","43f64e83bb93d6149b05e459e5698467"],["/post/bb7f8e97.html","504986fc3211b3f92a9a6cc5c6c432f1"],["/post/bba462fb.html","2815a2388c7827297b37b890e5262732"],["/post/bc8586da.html","38b8577ea691eb0f0d7d3080c5bb0046"],["/post/bcb02c2b.html","9b1801bc747557a9bdd458b68b1427c6"],["/post/bd36a30f.html","6b3ab470ff754977c3e2b52147d7c503"],["/post/bde4b1f8.html","d515e0637f6b5909f4b0f924d6fc1309"],["/post/bea42f1e.html","93dd59abd2f32ee0e7c9d2f66eb61c87"],["/post/c1864474.html","49d7cc33d25d7447f0e89ceac18297fd"],["/post/c293d2b3.html","5c94c7c8daac995a44b4746c61527174"],["/post/c37095b9.html","6df82297d453b6f350f946b48494c803"],["/post/c5672df5.html","af1d71346b16f9f01d0cec564572d955"],["/post/c6d76e9a.html","23739fb2a92d793b9fa5541bdfa95f6e"],["/post/c7fb8250.html","7249769c21a61730da5572598ee89a85"],["/post/c938bbd1.html","4600c0ec223333db36c88c0b5cb125f7"],["/post/ca14c5df.html","073d558b6017172bdde79d0c5f755c19"],["/post/cd18de84.html","8ae23fc242f6a27c02f53b68518ed017"],["/post/cd41dfb7.html","00d4a26746b3b812a906ea44d6a223c3"],["/post/cea184b4.html","28290b139ecb633c15464615b58d4829"],["/post/d120bd8e.html","65301afca9443613d023a83d08c5e667"],["/post/d50b784.html","e18f1adc3da6baa7aa8ef9b5396eb241"],["/post/d6a5bd15.html","86e056c2026a23d840ca26767880a311"],["/post/d73de254.html","b15a7a2b93e5b6281684ad372a298d83"],["/post/d7435d20.html","b45bf4fbdedb3d3d6dfe19a90a9a765d"],["/post/d81c5363.html","25227ed816d1829785d2faee79e2bb02"],["/post/d899bd9.html","2bd0a09a4070f84e8de7f54190d166de"],["/post/d9083bc4.html","736561be17791610f1a076ec5fc1ac7d"],["/post/dc981233.html","edf367609ed8fbec253203ce9730ca4d"],["/post/dea65d58.html","167c9a4638ed0f5ea93e61ce0147c419"],["/post/df76d545.html","4468ea15b0297dd5b553332384fed1c1"],["/post/e256d99f.html","88f424ad57f97e0e0215e51c45a90110"],["/post/e290dd8c.html","c83278e7865b0b84dc129d36709c55df"],["/post/e3e37943.html","c1bbed5bb7a99a77fe45ed37dd2820e0"],["/post/e583ed8d.html","a26e688e24c2affa1cb24d6725afdbff"],["/post/e5d75450.html","992b4d0eb9440da02df0681cca39de12"],["/post/e6364ca4.html","0e7ffc8da4f77b41f957a344cf6c153c"],["/post/e7058b47.html","7b2a66995cce63681ba68ab9ac5264cf"],["/post/e769f01f.html","fca9ac4496caa85f28880ecf554aaa4a"],["/post/e78ad34c.html","b61b0cf5063a44349824de0314765582"],["/post/e8005312.html","de2174a13575926d9de2656a99fb01b5"],["/post/e8ae7612.html","cf110d15e33a78e2c62bdd7764a30669"],["/post/e8bc7157.html","98c38f9224507cc44cb35b8dcdbdb0d0"],["/post/eae0b80e.html","0496605b5f18be6a4d354aaa7a4a2335"],["/post/eb9ab36.html","d71e31d5c4a779ec499587d39ac06e9a"],["/post/f0b23c5b.html","c066c4453659469b07305c2ecf76af11"],["/post/f279299a.html","625e2f7c6cd6ba8772953817704be140"],["/post/f3d9c661.html","448e34e7cd64f1cd0e52bfd9647306a4"],["/post/f4bfd16b.html","10057ae08add40f24aa67be287569726"],["/post/f7b33ddd.html","d8331affe19b9bbf1f8e159396f225b5"],["/post/f8e4bc7f.html","e3ad4bab74026ebefee3ba714b9edcc8"],["/post/fa83cee.html","86f7029f5afa93dfa6d596ef5d7c9de7"],["/post/fb2f630e.html","602540b7ed66fa71df72203dc9fa2a05"],["/post/fb5efb9c.html","fef02b90a15b1eb073eff8c21c5fcbc8"],["/post/fbf7f335.html","480e8a833c8f28883ff8529c817e7cf5"],["/post/fcb9464d.html","67e86911915f8e9140ce1977d540618c"],["/post/fd581850.html","c9fcc050f3c3573213585aba610bdd61"],["/post/fdc06f3f.html","2a730894dbca6f1bcd1ed66720c150ae"],["/post/feaebfb5.html","9d1774c3031ed4ecc935b76a11bfc470"],["/sw-register.js","fafa9150c4f711f8b8bab7698ed4fdd7"],["/tag/1988：我想和这个世界谈谈/index.html","91f7324089a26ba28cd462cb7def4de9"],["/tag/1Q84/index.html","44a91e871d22d478fa9d179d466e4475"],["/tag/2017HDU多校/index.html","8a4ccb2405b7bc3737541b10f4e7aba6"],["/tag/2018HDU多校/index.html","e011d0b134ebce8a3305f266bf5517f2"],["/tag/2018寒假集训/index.html","5e932cb617a4f0c42ea4d34755d62dca"],["/tag/2018寒假集训/page/2/index.html","70a97383a20db02251be1ca28d2eee7c"],["/tag/2018春季训练/index.html","2fa497f07c80980133c39cc787f29b21"],["/tag/2018春季训练/page/2/index.html","b6fb32363246dd95e4bd99db56824c29"],["/tag/2018暑假集训/index.html","42270c2fa1a11fb3056d7b0306c26a00"],["/tag/2018暑假集训/page/2/index.html","9e0460946f46cdf86c4201cd6e280b2f"],["/tag/2018暑假集训/page/3/index.html","1d038c2e4dd2a24dd66d0b9ee0de27f7"],["/tag/2018暑假集训/page/4/index.html","cef4244c49fb6f4840f5bd5fb37385ee"],["/tag/2018暑假集训/page/5/index.html","dabb2a31a75f10466058219d593b559f"],["/tag/2018暑假集训/page/6/index.html","56936b0569889508dce12878fca718f7"],["/tag/2018暑假集训/page/7/index.html","30e34492ff1b633acf4bbafd84f76b68"],["/tag/2018暑假集训/page/8/index.html","d2b55e7f9bbfe83a4bffd6e6bddb131a"],["/tag/2018暑期选拔/index.html","5e8c647b5ad2e2a0f479b1e6fec697d0"],["/tag/2018杭电多校/index.html","ae413110c3ef68dde0762c3c17834954"],["/tag/2018球季训练/index.html","9b6a2cd16d96b50ae6b14a23e85c2dde"],["/tag/2018秋季培训/index.html","403c5c30f098ba61c15927ca78b876cc"],["/tag/2018秋季训练/index.html","858fde777cd1f83e2b898672a6716dfd"],["/tag/2018秋季训练/page/2/index.html","d6ce05e2ec515b00b61bf654e402a958"],["/tag/ACM/index.html","ed2fa14983348fa4fd34a8f0c1764a08"],["/tag/ACM/page/10/index.html","a96ae0fb19f8690f4a7fbdea93b230ba"],["/tag/ACM/page/11/index.html","06133a7d719a5ae1529d912732fe6a11"],["/tag/ACM/page/12/index.html","668ce91907be3cf24f5b8b5802ec55ba"],["/tag/ACM/page/13/index.html","e33c130a290e47a690fe98811dd8d711"],["/tag/ACM/page/14/index.html","e69879dc622ef35bab4194d2128d3756"],["/tag/ACM/page/2/index.html","5c9abfdda39466301d873689fd34bffe"],["/tag/ACM/page/3/index.html","b44499d25feef30339020c4baef4b5ea"],["/tag/ACM/page/4/index.html","a3083ed94fecaa16e716eafc538339b7"],["/tag/ACM/page/5/index.html","bc31a55e3ce584301d61b5c5157e07ed"],["/tag/ACM/page/6/index.html","b39d2a9500c5dc8800cd8de5a407f518"],["/tag/ACM/page/7/index.html","3eb779ad7f33fb4390829d5907517334"],["/tag/ACM/page/8/index.html","bc700318f43ff596af26458d5e9becc8"],["/tag/ACM/page/9/index.html","57eeb6b93dd50365c465da19d26bcec2"],["/tag/AWS/index.html","dd68f80d00d489afcbf1e0b236df4648"],["/tag/AtCoder/index.html","ec8432195186f694ab79437e2ed38c99"],["/tag/BFS/index.html","ba6a6de188c2f1a4c207f59dbbe9f2dc"],["/tag/C/index.html","d8f2f0c811bc1b475f00b6ccd8939efc"],["/tag/CSU/index.html","301c95567edf4d047bf88ac83cd58508"],["/tag/CSU/page/2/index.html","286826ec1b1bc4c2ef7d01a72a88acad"],["/tag/CSU/page/3/index.html","d32087daa9f712ad1567bb4f015d6711"],["/tag/CSU/page/4/index.html","911706f738a8d872ce2f79affe94a67a"],["/tag/CodeForces/index.html","cbd0ec7f0416ddd5576d93dd8dccecd7"],["/tag/CodeForces/page/2/index.html","d839abb69f2254f32358406a2b0cd95f"],["/tag/DFS/index.html","77467e68ac9b4658022577f32fc18dd1"],["/tag/DP/index.html","68a0640846cfab78caf313d0bd9d9673"],["/tag/Dijkstra/index.html","a756b562c91d80c6d38055f8b32a7f67"],["/tag/Flask框架/index.html","cb2ba9bb31322616f9928126a8b5194a"],["/tag/Floyd/index.html","5bab0c048821b1abf05f6f8c2335bff1"],["/tag/Git/index.html","1e637d5c109e62d0526fb7fa01a5c653"],["/tag/Graph/index.html","2e1bd7730f8848134aac3f362568ade7"],["/tag/Greedy/index.html","f17ca8128eed648381ad68d38c79869f"],["/tag/HDU/index.html","21bcc1cc4e88a51a4a2c2b5715590744"],["/tag/HDU/page/2/index.html","bc5dc163824d91674922bdeabc2f0839"],["/tag/HDU/page/3/index.html","ca9bb941e985626822338f5220f08ea9"],["/tag/HDU/page/4/index.html","1d356b40145bbe5b94b44115a96c8374"],["/tag/Imitation/index.html","c04ed42162a2ee4331d5f6fde68060a6"],["/tag/KMP/index.html","1467eba052625c1025c3728b9fb616a3"],["/tag/POJ/index.html","26c2e8ed3a84c36b8028340fe4cd4402"],["/tag/POJ/page/2/index.html","13ab03e11967fb50c58c7d41e332f4c5"],["/tag/Python/index.html","684992bf983fef78008cd9916ef471a5"],["/tag/SCU/index.html","9683c351cd112b65d78bcb7b46c70c6b"],["/tag/STL/index.html","6ba8fdeeb18f0687afa19c4dae8e47fd"],["/tag/STL/page/2/index.html","d3bdc63404742f52bdfd2dd3b62521eb"],["/tag/URAL/index.html","e28991b6d45b484704c53bebdbe1f803"],["/tag/UVA/index.html","5961ae613007412d25484fb4056204df"],["/tag/UVA/page/2/index.html","143d7f8319859d3884c241f397c42ba1"],["/tag/UVALive/index.html","561296643c21da08cb4ed82f25aa410b"],["/tag/VSCode-Git-生产力工具/index.html","5e066ad0db196494ed7e0da293bdc4f3"],["/tag/VScode/index.html","cc5289d5ee2a09654c583f72d849ba00"],["/tag/ZOJ/index.html","2bc024c59d310e6e4c885d41c14d1462"],["/tag/math/index.html","50a475e22606cbd768f5720c51ed48e2"],["/tag/test/index.html","f4d79be35202bac649d53319c2d00b69"],["/tag/不得贪胜/index.html","46102afd3ad37d83e8cdefc512b76d48"],["/tag/东野圭吾/index.html","99145e160e0f6e342cb19f58cf1fa757"],["/tag/乌合之众/index.html","bb72183b83ada42f769c3f6c21cd08a0"],["/tag/书信/index.html","2ed41cec7dd662a379c2717c1f0fab49"],["/tag/二分/index.html","71cb351b4b4851a4ba76763e96e29d91"],["/tag/亚马逊/index.html","2d97e2925aaff96e8c17a1108ca9daf3"],["/tag/亲爱的安德烈/index.html","048877bd9fdade6d07788d64d28a6dfd"],["/tag/位运算/index.html","6159a5e81c72329894d7bc4c2e2e9900"],["/tag/几何/index.html","5bce970b6fdae6f4ffe47826d1b0272a"],["/tag/刺杀骑士团长/index.html","9583f193fbc917e992118b071c573c6d"],["/tag/前缀和/index.html","b4a27ad5acc390b38b5c5e15a462d373"],["/tag/区间DP/index.html","4ebb6a24f3c44532059e20e3ed670498"],["/tag/博弈/index.html","72c4721e6677b0de89b4cacff2e67aba"],["/tag/历史/index.html","95f0e62fa530a745d7a9b00fbbdfb1f9"],["/tag/古斯塔夫・勒庞/index.html","4cce0e9d32dbf5bdf6eb1490be84bacb"],["/tag/图解密码技术/index.html","9679ba87b69ce75b7042ae277fc29f8b"],["/tag/大数/index.html","ad839aa0d5376f3eedcdcc29ca164a14"],["/tag/天幕红尘/index.html","f6ee3f96931b6eb90260ac7d4a4e2272"],["/tag/如何阅读一本书/index.html","eb0fef1e548ccf688d3a0840521be0ae"],["/tag/字典树/index.html","e40a7eaaf000e75fa07d5146065d0bb7"],["/tag/字符串/index.html","525fbf08985ca6a195aa93f3e6042969"],["/tag/字符串hash/index.html","a36cbeb7e87ae21ffef1cf64279855a0"],["/tag/安德烈/index.html","b2ee69a495cb3f2d3afb78efbecf6b47"],["/tag/密码技术/index.html","d5c72eeb7c957f0470d5b2e4bf1737f4"],["/tag/小说/index.html","c4c0338b90a0aca572ef01c3e81337f6"],["/tag/岛上书店/index.html","b3ba727abc44751c71670d5d56a956dc"],["/tag/并查集/index.html","a39d595337b36a9d9127bc35ab732a04"],["/tag/待补充/index.html","1d8ffab372e4694135d03641d1f8d192"],["/tag/微观经济学/index.html","c4bec5042289fef4b0bc82901910e296"],["/tag/数学/index.html","ef1b8e9b0f7bafbb9bfa44b69662396b"],["/tag/数据结构/index.html","828a437c0520e97eb735c3e09ed3048a"],["/tag/数论/index.html","de1110c41f81848b0ea1f8cededaa7fb"],["/tag/文学/index.html","128164f59e93cb7dcd665fbbf3290ef3"],["/tag/文学，小说/index.html","11af5872ab3106d15e8b40888dfa554f"],["/tag/旅行/index.html","bb26b45dd1acc544e880c45532b6055c"],["/tag/暴力/index.html","e0790688fce539f751f3fa6c10f62164"],["/tag/最小生成树/index.html","73ea49cfc893bb3e25ab09e3d9492138"],["/tag/最短路/index.html","70a5f8eeab4187d0887c72555b1dfa50"],["/tag/最长路/index.html","9fbf5d1a4c0c75cfa2adcda8ce51b21b"],["/tag/本·伯南克/index.html","67c865caf7f417f564cf64b02b60b65d"],["/tag/杂文集/index.html","6caf1ffd07346df8e8cc22cad4c0d73f"],["/tag/李昌镐/index.html","cfe4f217639cdb80ace5969861dedcae"],["/tag/村上春树/index.html","337445acf991fad2891bfdbf8e476ae1"],["/tag/枪炮、病菌与钢铁/index.html","86aa41ca4699f74939bb42b0eb33b524"],["/tag/概率/index.html","584eeac1dd5b3738ba19ed07909fb4ff"],["/tag/正则匹配/index.html","271e68b3d1feaaac68385bad4a526b3a"],["/tag/水题/index.html","38934a87ba53fe08cd9294143cda70bf"],["/tag/游记，武汉/index.html","eab4d1e2fb787c44214f5e2e6523d6bb"],["/tag/演讲/index.html","b9ea05bd03b540ee24abf60965d6eedd"],["/tag/矩阵快速幂/index.html","fec81b3b54db3807ea273ec1d198b82f"],["/tag/石黑一雄/index.html","c8eff71465de996b18a3aab1b47a683d"],["/tag/社科/index.html","895f6cddf0f7fa985f137a6860ce5ad9"],["/tag/笨方法学Python3/index.html","243e9075d453f5d29914a0cf8c8bafd6"],["/tag/算法/index.html","ca509dee4232afdb6fc6c2cc1ed114b9"],["/tag/算法/page/10/index.html","864c76310a7c38f42dccd03db3606b73"],["/tag/算法/page/11/index.html","b47f805a42f37a366da7f1cbc357762c"],["/tag/算法/page/12/index.html","2d7a10098b6e332e974d9be486b8097c"],["/tag/算法/page/13/index.html","696e639c1e62a602012eb44bd8682693"],["/tag/算法/page/14/index.html","cc7cf7ab6696ac9e915552df90bc164c"],["/tag/算法/page/2/index.html","58298f86b38bff7c8f7822f798e140a0"],["/tag/算法/page/3/index.html","958aa31d59617a86034c4e97097059f7"],["/tag/算法/page/4/index.html","a7a512ebd077d147724d442f758332e6"],["/tag/算法/page/5/index.html","379fb96d5887c7d2339a3bd1fea956d0"],["/tag/算法/page/6/index.html","bd1f58a01627fafb44b5b5d4ad7c1f04"],["/tag/算法/page/7/index.html","728e9ee458dd20d875a4ee3ead633abb"],["/tag/算法/page/8/index.html","c048f66cb6ae349c809edc365c3b6220"],["/tag/算法/page/9/index.html","48815e9bbd961e9d71aec80d2ac08237"],["/tag/素数筛/index.html","a0edbd1b3125a52762af95adfaaf121f"],["/tag/线段树/index.html","699c1ec1baa61367a8fb4651ce2e27aa"],["/tag/线索二叉树/index.html","24ed01a1347552a5b972c3bf961aeaf3"],["/tag/结城浩/index.html","f3950ad42ecbd29c375b7f7582f3b03b"],["/tag/编程-C-课程设计/index.html","3766dd242675adb49efac49179b99ce2"],["/tag/编程-PHP/index.html","9bc4dbbf13f8c664728778aee40d1995"],["/tag/编程-数据挖掘/index.html","daba3fcf43668bbf2d69df9b22d01bd0"],["/tag/编程-编译原理/index.html","70f97d7198e269e5aabc0749db4bd3be"],["/tag/编程/index.html","6277681d2f6ba2c06ea893a7b11bb6b0"],["/tag/编译原理/index.html","19df84f88f00d23f578c3ce3f1a44561"],["/tag/自传/index.html","5ec8f92ecfd9f3566180a3e2bcd4cecd"],["/tag/艾萨克·阿西莫夫/index.html","d8bcee7849c8486811c09b69b35e36a2"],["/tag/补图/index.html","25492d89b348d7a09c6e5e63818f050f"],["/tag/规律/index.html","d468c3ecb1897339ef79eeb0159c8668"],["/tag/解忧杂货店/index.html","9de46d369aa61c82a7e131b7a2711ac0"],["/tag/计算几何/index.html","d8f1841d80b4efdad436977a699a5b81"],["/tag/讲座笔记/index.html","9377e204b36920c438dba4062522546c"],["/tag/读后感/index.html","38b19aadb997fda5489544f4717968c0"],["/tag/课堂笔记/index.html","0961739b113c56c8eb51830039fa867e"],["/tag/课堂笔记/page/2/index.html","d64ac35d83f3473f13587002cc2d1c77"],["/tag/课程学习/index.html","d34f8c8f9022f2fd370725b4c588741b"],["/tag/豆豆/index.html","03f7fe758c3012798facee63acea8b89"],["/tag/贾雷德·戴蒙德/index.html","1a038ab51918f32820662011983d74cf"],["/tag/辅修/index.html","30cbe0aadd865aa43453943c4537018d"],["/tag/辅修/page/2/index.html","1a607ebb1116c6e6eeff919b53a10732"],["/tag/递推/index.html","ae58566965cfc68164c531305fadcd0a"],["/tag/野火集/index.html","4a49b14c22ae7c5cccce251175acadcc"],["/tag/金融学/index.html","6195c31cb5c73b4a4d96f4b9fd26474a"],["/tag/金融的本质/index.html","f3e1adfd613a4776b145e3ccd344a57a"],["/tag/银河帝国/index.html","c33c5c525fc17bce45acaffa7844cc98"],["/tag/阅读/index.html","6aeaf1cdf5d557daaf0ba1c4cf0e5c56"],["/tag/阅读/page/2/index.html","3cdd5e91a9ba0f3ba7bb0f67ab18d1ce"],["/tag/随笔/index.html","9f8d0de0e985ff0abed578c2ec730780"],["/tag/韩寒/index.html","c4c1b52838f0bd87710a3d1021df5db7"],["/tag/龙应台/index.html","28323ff42a8b57cdf6fd19f7643fa2b7"],["/tags/index.html","8b7930a5462e2605da10d9614d8c9431"]];
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
