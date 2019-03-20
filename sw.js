/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d940e96f5d6013d18f790eca69ba1043"],["/archives/2018/01/index.html","87bb59e1fa60ee7283befaeef293da1c"],["/archives/2018/01/page/2/index.html","bcb658b7e55bcf13812f0a8cb74feffb"],["/archives/2018/02/index.html","9c009dab3f3a5cb4c56d584f65bf77ca"],["/archives/2018/03/index.html","d1f4427762c44b5e214950b904649a49"],["/archives/2018/04/index.html","78b896d07268d65334e0f5926f32290d"],["/archives/2018/05/index.html","0b77fcf4d6e285ef896c0b1d3db45a16"],["/archives/2018/06/index.html","18ad4c1f9795a88d0595bd7fda8e3915"],["/archives/2018/07/index.html","2e04e5946cf5bd4f880d40ee95e8a49f"],["/archives/2018/07/page/2/index.html","509fa2a65b73cfeeb074c9867eac84ab"],["/archives/2018/07/page/3/index.html","ffd5dd821b527cfdb98972da6023833e"],["/archives/2018/08/index.html","0d09061e5c9ab93f6b2175e02d2d9221"],["/archives/2018/08/page/2/index.html","50f2faa7a50d489872a2fbe4407b8599"],["/archives/2018/08/page/3/index.html","6785afc9a767eda9662e6a4d39ade7c5"],["/archives/2018/08/page/4/index.html","555957a41d2682c6f2ffcf8cef4a971f"],["/archives/2018/08/page/5/index.html","b5d665df218799f4e30e9c00d48ae3e0"],["/archives/2018/08/page/6/index.html","28f32d386207d95f181ba6732ba77b56"],["/archives/2018/09/index.html","f30d0c7f35e82435dd69d9c8ed48ff27"],["/archives/2018/10/index.html","607c4f5db5d3dd79a60478a0c2614fbf"],["/archives/2018/10/page/2/index.html","015c114aa501f602a20efa6a17a17726"],["/archives/2018/11/index.html","9160b3757eb93fc3624e9416366222a4"],["/archives/2018/11/page/2/index.html","8ab62a60260ca98d6c72d34061265876"],["/archives/2018/12/index.html","de1c50ea9c3359af9a08f67abe14e2cb"],["/archives/2018/index.html","6fdcba19d0979774ca64c9d6db8ba9b3"],["/archives/2018/page/10/index.html","63ed5d1a2a3b4ea00b3d83e85a99edb0"],["/archives/2018/page/11/index.html","bdb8a631ebf25b1808d29db81878b493"],["/archives/2018/page/12/index.html","ca28b97b60114ccbfbb02961f730639d"],["/archives/2018/page/13/index.html","fa656c7b4479ba78a794532b34ad3e55"],["/archives/2018/page/14/index.html","5ac8602744bf20bcb8b997556211259c"],["/archives/2018/page/15/index.html","5f4a01896e6af0647d1b257fc335bac5"],["/archives/2018/page/16/index.html","ccf7041a600a9540a7d8272a8901b404"],["/archives/2018/page/17/index.html","998b46e89b3ebce07a9dac9c54ec2677"],["/archives/2018/page/18/index.html","3ef9817c4973cfaf9fa6d4f527385c11"],["/archives/2018/page/2/index.html","8157013ac9a64a2e0005e78a79bf07eb"],["/archives/2018/page/3/index.html","9befe1e9849f7284e53a96ee767eb605"],["/archives/2018/page/4/index.html","0a084d830d173087826d178f4e789d27"],["/archives/2018/page/5/index.html","6a73fda80a3cc0b7f2bfe592a60b30d3"],["/archives/2018/page/6/index.html","75c4a7cd4ebb945e26f366f79b23bf69"],["/archives/2018/page/7/index.html","ab65cf23d3d414e0843a732c2070a637"],["/archives/2018/page/8/index.html","f50f72ad27f4a92aa1f880131a8565b2"],["/archives/2018/page/9/index.html","dda78b1004d81a6db8a8dfa15b6c18fc"],["/archives/2019/01/index.html","38daa9623b7ba1e1762bd552c99f2ecd"],["/archives/2019/02/index.html","ac77fec8bfa0ad00220b0e413c5f726e"],["/archives/2019/index.html","55bf52194c5360c9d3ec941d427cdabf"],["/archives/2019/page/2/index.html","503f773f8b3cefc87921d93e79b98f1e"],["/archives/index.html","35cd0f9968677116585465be02b7d5ee"],["/archives/page/10/index.html","460b6042078aabc52fee4ac05277b2c3"],["/archives/page/11/index.html","eadeb80b038c17f41432886e6cc9996e"],["/archives/page/12/index.html","c590bcc183c7c8c1bf4c01df33c78015"],["/archives/page/13/index.html","b199a65fca232aadaf1f5eeb202da0a9"],["/archives/page/14/index.html","86f761674aec6d255e4c49248e8ae176"],["/archives/page/15/index.html","2bc93ac83d4e4e78360796a4e440562b"],["/archives/page/16/index.html","4746a0b37db9992136547f2c0e93db62"],["/archives/page/17/index.html","cad7231e7013fd1e2b26f22036142570"],["/archives/page/18/index.html","f424cb40e321a87b2e543ccd84065cf4"],["/archives/page/19/index.html","5d712f7df5dbe88ce4073cd96fba3af1"],["/archives/page/2/index.html","c99cd55672d8caaf3836a866fac2144c"],["/archives/page/20/index.html","6135fb17cb6e317198b8f76d4031cf99"],["/archives/page/3/index.html","3036e4bff34d6d0b39baac27687848b7"],["/archives/page/4/index.html","c482487a0bc090414a3ca803529181e7"],["/archives/page/5/index.html","7acd49e21f3eff8a5bbfb43587f73160"],["/archives/page/6/index.html","948f9e98fb837b49456c9a3131086240"],["/archives/page/7/index.html","c46854ce9ce6e034759b8bdb6547d7e3"],["/archives/page/8/index.html","fb4be5ce2fcfe00be697c5b77da1830c"],["/archives/page/9/index.html","bc6f0bd58d3d142a633a553b00ad54e6"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","054ad337a4c729b971338b1fbb342be4"],["/baidu_verify_ZzhwBFUe1V.html","107045943ca5948646e96a7d25922a5e"],["/baidu_verify_dw73Nh8OEw.html","64747afbc1c51f2b17b9413547cdb837"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","00c3719b50a837cf273aeba5fb40b84d"],["/categories/数学建模/index.html","d6e9885881d8a08116f30cde3cec6b89"],["/categories/旅行/index.html","c7476a8754d1f752eaab9bea383589e0"],["/categories/编程-PHP/index.html","abcdabe399c8cadd5afe6824d5261e9b"],["/categories/编程/ACM/index.html","dd6c57d45de58db0ccd9059dfa26456b"],["/categories/编程/ACM/page/10/index.html","831aa6e1698a103b60eb400ce9afaf54"],["/categories/编程/ACM/page/11/index.html","9d2618a9fdb02e5a506a01e4269ed226"],["/categories/编程/ACM/page/12/index.html","b358c70f9b8e9d61d69fdfad7a1aae11"],["/categories/编程/ACM/page/13/index.html","b7e5c7e110491c39cf15b00432a63707"],["/categories/编程/ACM/page/14/index.html","001b31e13833a7006d528535200cbf5e"],["/categories/编程/ACM/page/2/index.html","78e745aa342889e32d0a0a195b457880"],["/categories/编程/ACM/page/3/index.html","8658b06da33694e69a2e0bab7c0f513f"],["/categories/编程/ACM/page/4/index.html","4bbd974201cec93763a1322a182dff7e"],["/categories/编程/ACM/page/5/index.html","0edfe95d1e691cb6515eaadf20504fb5"],["/categories/编程/ACM/page/6/index.html","232a21d8d1f46750cf12761405698915"],["/categories/编程/ACM/page/7/index.html","cff25ed593b4295c77e5228218254aed"],["/categories/编程/ACM/page/8/index.html","641cf56842c995a1f10f59c256f029fc"],["/categories/编程/ACM/page/9/index.html","7e51710b4af2f8893dd40573a9089d46"],["/categories/编程/C/index.html","331279921bb6d7d1b7ebb4cfc5fb15e5"],["/categories/编程/Git/index.html","216fbded07c073f412cf351b1babe34c"],["/categories/编程/Python/index.html","f71657cccc0be5a39ede4e29240a08bc"],["/categories/编程/index.html","79c643f915d34f69076668cbe11a5d61"],["/categories/编程/page/10/index.html","f2c7864dc8a77f0a9b166440e9aa9f27"],["/categories/编程/page/11/index.html","95b1f985fd9cc5a4ffe84af5c182591a"],["/categories/编程/page/12/index.html","ffbfcdbb475a1994d5e91d29c7c23c13"],["/categories/编程/page/13/index.html","2a2144de5d51a25b5ecc90d1d4cf304d"],["/categories/编程/page/14/index.html","dbfea36e0e9ac9e349a15bed65850411"],["/categories/编程/page/15/index.html","18cec53ae4672645dd3495096d19934f"],["/categories/编程/page/16/index.html","9b778b0a9bda4becdaefe19bdbbaac2e"],["/categories/编程/page/2/index.html","fc328ef98e766e4ff16fef52013e5fe6"],["/categories/编程/page/3/index.html","6e71244592a25307ce3c0c273915a1df"],["/categories/编程/page/4/index.html","6b9843205a051c386f3163de68e1ec81"],["/categories/编程/page/5/index.html","063e33bca0f42eb5bff0f049cd366869"],["/categories/编程/page/6/index.html","34a2dd014c15e445b017175e1a042730"],["/categories/编程/page/7/index.html","dd287cad7655657dfca6d718507ba5ad"],["/categories/编程/page/8/index.html","06b39797791e8d3c989e002c081e755b"],["/categories/编程/page/9/index.html","9a3307dcf8112fd5f797ecf06ae655d3"],["/categories/编程/密码技术/index.html","9c44d97d9fc98168037f86a44690a61a"],["/categories/编程/数据结构与算法/index.html","c228db441ef052edd932e956867366da"],["/categories/编程/生产力工具/index.html","537dc8e6dae0e99de8c40831766bfb33"],["/categories/编程/编译原理/index.html","0a3853fbdd3d85fa896a20905d54529e"],["/categories/讲座/index.html","72c39f4e0c5d65ba892c63f7ce86a2cc"],["/categories/金融/index.html","30149483c24c59471cd62363ce5a1d34"],["/categories/金融/page/2/index.html","a5bffda7f1a275c25203fb9a9bba5646"],["/categories/金融/微观经济学/index.html","13692d8df553934211a64db5a0298d3a"],["/categories/金融/金融学/index.html","f0e4558e438ee03a7a6ac4e7ac0307f2"],["/categories/阅读/index.html","5cead7264e6a7ece461548f72754db04"],["/categories/阅读/page/2/index.html","da6b9ad59bb976bfb6087262f235cf8c"],["/categories/随笔/index.html","6c27128ac2d026468a754116b2e9c22a"],["/css/main.css","7f813a0bb5e4f901365b20113a9ea864"],["/friendlink/index.html","7a5322b91647001dca08ab833344bb03"],["/googlea873f713657fb5dc.html","4df0af151eca02b5964991d1e2d1012e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f173102e85ea85f355db5e22efb9e932"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","dce174eb78b4f214798f3cf1ae860bf7"],["/page/11/index.html","0da6a053b362611af35422212622636a"],["/page/12/index.html","414b50300270d3002c3007af38c46e64"],["/page/13/index.html","b039cb0c0253f0f9ba446c153cbd04a6"],["/page/14/index.html","21a54a6ccb8e1a09c876ead858e3ade7"],["/page/15/index.html","91f599d84efb297f7b35df537d0b8633"],["/page/16/index.html","03cd46cae940982b48933e9b21adc767"],["/page/17/index.html","2c58a47c21450a0c9ce44a7cdbcd01ba"],["/page/18/index.html","dbe1cac5fdfd8b8727411a2dac8cba69"],["/page/19/index.html","f505406d1d100846c614775f3a20e2bf"],["/page/2/index.html","85a16f7407044d4117048773cbd8e946"],["/page/20/index.html","bcc62ecaefca676e11695adcdaea42c9"],["/page/21/index.html","02803e73a33474ff22105c7878ee08bb"],["/page/22/index.html","8eef57e10937f61f35a55c9583d06a04"],["/page/23/index.html","44f84d444e4a8fca4a328c3a866dc135"],["/page/24/index.html","3d52c5187cb65b27a50c494fb15695f0"],["/page/25/index.html","a2e66a8dca7468de9042403a67913fb9"],["/page/26/index.html","5081e5afd70b0ea95bc73f0d28aab3ba"],["/page/27/index.html","6067bbcbc279b247d17402c34559c32a"],["/page/28/index.html","4ee8378b070cd6932a4f8f3838c5c3d9"],["/page/29/index.html","1a17e93cb8fe38aeb93a9cb13ee9502d"],["/page/3/index.html","635ce2206a8c644b6905c6876ae2da4d"],["/page/30/index.html","187c394527ca3a286b3afdc47300fa6a"],["/page/31/index.html","1242b0adf0f77aa417183f54dc2d4405"],["/page/32/index.html","88196ac3b5b8f92cd01af10e0140cb41"],["/page/33/index.html","f9db94eb659fd7a7291a46fcae674c60"],["/page/34/index.html","b3f314367ec1e12fbe18337e7d344dd2"],["/page/35/index.html","4e7653a130def603719e8d8162f18d58"],["/page/36/index.html","54057d2e3fe06003a38753dc8e9761de"],["/page/37/index.html","b4c9ea4e57282f151fd8220e841e3dab"],["/page/38/index.html","26b5ede93506e2e17dbb6c72e0b655ae"],["/page/39/index.html","dfc6680358c6fa8034a5b4741fd789c7"],["/page/4/index.html","6a41a9dd45c1a5cff203d2239a5b97e0"],["/page/40/index.html","fc446109e7196da10ffbae848173f194"],["/page/5/index.html","7b60ef805c8f810806103bb02896c9a0"],["/page/6/index.html","ed16d4a2be24362819d753cbeedca890"],["/page/7/index.html","7e7f1ea79643a09c6135b58298faa9f4"],["/page/8/index.html","adb26e072dc7ba6eae4d7b04d4f344b4"],["/page/9/index.html","ecd54a3710e9a1bc59f4ad5d141060da"],["/post/104a4c5d.html","244ac275bc7f98b02e5eaadf3be9f1b0"],["/post/109aa3c8.html","abd5ea8240ad57059a60f1e92c93ebb5"],["/post/11246bdd.html","668964812f754409120da1b20e78a092"],["/post/1233e925.html","14a7ae11f8a929b292faee0d2ffb1ed2"],["/post/1448d9c8.html","b198e900000653d349a08f5cbbc48b25"],["/post/15db1cd9.html","962669143a8c5dce41b1e196f7aa7d32"],["/post/16b5efde.html","b84da5b01808e4534c46f49cbd497a6c"],["/post/16fa37a4.html","30e2706201627c87b851e92f9df3d035"],["/post/184fc5c7.html","c040a40ea3f40d82ffc483fa696b35be"],["/post/19e79191.html","8abe0a22bbab54ec5b36685c05fb5c48"],["/post/1b7db6f0.html","58897b1e285169af1af3496b71e1cf0f"],["/post/1c52564f.html","0f1b70e265130b292bd27e74e1b960ee"],["/post/1dc46f40.html","105024d0b4284f378d47078e82fee308"],["/post/1eeab2ee.html","0019aed67d5103fbbd1e10d5e99d168b"],["/post/222505fd.html","da8d90196b74cc5bcd44cab3f3636e68"],["/post/22b5b237.html","3d886384e41a2131522fbd7de734a8b5"],["/post/23f72a93.html","ed1dd2fb90d5b71bfa3ad69a1a7b20f4"],["/post/264a9c89.html","4c2e47ac974419bc0e48a335c2e76514"],["/post/265c0f5.html","98e9ac495ca057dd9ee705acd1e8a999"],["/post/26fa4dfc.html","495e60167e758f0905e05687fe3bb2e4"],["/post/273ced06.html","adbf38a9d0831fcaeccf534ab4eeee6c"],["/post/280fbdcb.html","bb8b368b4d587ce0e70c465e419d097a"],["/post/2ee4d523.html","123c7ecf44f9bf82d6035186ef3a01fe"],["/post/3090aa13.html","e4d35ad066d52c61385636ef0046c8c2"],["/post/31a770a5.html","3f84cf2d52df5d9dbf8d771e88b4e655"],["/post/31f89579.html","5a73d307a1816ae4aa267e28bc8efda1"],["/post/32dc51f4.html","679fb619fc076e73568dc39145bc4142"],["/post/34a049ac.html","c6d966923bf51efe93a41c358db2d5ae"],["/post/34f53a10.html","a542528123836d5a3383635bf6d688ff"],["/post/36bef409.html","7d96c396652f857a95e5a6122b55ad36"],["/post/36e5881d.html","72ce1b4652e90e7f965220f61821154a"],["/post/380486cb.html","1ee73c77ced4612339735f18353a5b12"],["/post/38f8b110.html","ea917bc862fee4e952d88d64079893ba"],["/post/3a3eaae1.html","1e835f70b2b2b6d27d4ac7e8bfa460f0"],["/post/3a72081e.html","056d66613697a2b820ffb79a0b939a23"],["/post/3bc7f503.html","16b11f3eca6bc2d7d706561766c0e9ea"],["/post/3c57c5dc.html","d4ac39edaa625561c6d8a906a59f1fba"],["/post/3d71c64b.html","1dc113381dca5cdd5813d712e7b05954"],["/post/3d8072b.html","2892a51367980ce7a0a3e4fec317c4f6"],["/post/3e6878ac.html","15ec9ccd41109a6077551c69b1edf1d3"],["/post/3fce0650.html","7e894ec900993ce145b2dcc0a1524f42"],["/post/409dbc1a.html","64ee7881b907f92364210e9c336274c9"],["/post/40dfaace.html","8b790abe02c2e730dab816972df9961d"],["/post/4255f31a.html","ba175dc591ec3861fac1f8b48f97e46a"],["/post/42a619f7.html","c0b3f00e658c5538c3b4a1fed2e1824b"],["/post/44505a5b.html","3debfd2e88fbc9561233ca146be988ef"],["/post/448da703.html","30ed206e0f8bab5f8e972828da1ab202"],["/post/454c2118.html","3a7e3270cc99eb44e5b38765f2fdc509"],["/post/454c2358.html","6483afd2db2e5fe69a32c7e97409f22d"],["/post/4773b69c.html","936e66185069b24d64845c4b8b52a6e8"],["/post/47b391f2.html","47d30d42b68d5e953322a027ce6d3302"],["/post/481e8abf.html","aa1265f58db0a56f570e56b5e135e503"],["/post/4ab96b49.html","cf73da74c9ac6665286fa62ac1bfe02d"],["/post/4b15f9e3.html","273dd9599394aac90bc004073ac205b8"],["/post/4c60a529.html","8f0c08647dc8db05b0cea5d73f14bc61"],["/post/4d6a6b27.html","42058dd3cb3783b4698407a8e2a0931a"],["/post/4db7e28a.html","a823fb8ac20b93c7ba1f93dfd99c738e"],["/post/4dc7502.html","1f96ed3b88df10d931ed4fb5e71750eb"],["/post/4e876bc2.html","b89c94936e64988efa87515c8954ff6f"],["/post/4f352d.html","6acfe8f0149386f356384a15d41c2f5c"],["/post/4f8fe65a.html","7f18414c341aba2f47c21a7734fced10"],["/post/4fa396eb.html","72f318409ad230e3873ab81e5edcef40"],["/post/52730f61.html","bc80419f8b0501a31b9e0dd4a589c122"],["/post/531de0f8.html","15e372f3dc0fe9851b0fc47c8ab2d18a"],["/post/53729461.html","25cdbcdd7f5eb7d9b73360025424191e"],["/post/5555df5.html","9e04e3991e1d1608a74a47ba8284757c"],["/post/57bfde8d.html","89af1849128f878b1ede3c9248fe155b"],["/post/585293b8.html","adda5a6d04ec4b5f746ed9274bd1e78c"],["/post/5aa5290d.html","efd85a94454971b2c4d048af1e34ff4a"],["/post/5abc6d45.html","69cdeec4a6109848836aed48cf302ef6"],["/post/5c86d06a.html","c5c0f7cb782f4dbd01ee41024cd2ae49"],["/post/5e189593.html","1e1eed8576f200f2037cd10539b174d4"],["/post/5f2d4a77.html","c1e28e44b43a0413121c748f306af2c3"],["/post/5f341cbe.html","d47d32c13697ecac0cf9c07ccc8ff700"],["/post/60850415.html","6cbb9cc276a687cdbdcbd244e60fa06a"],["/post/62cb42be.html","f8dd1bfbf5e17eb883eba2247215546c"],["/post/6501181e.html","da396e6f43a7d20ac78e1e9257e2e29b"],["/post/66258384.html","866e88dec119242956c6e97e8c863a8f"],["/post/662b8b80.html","791f5f6638d72336431badc881ac5fbe"],["/post/677d0fef.html","96ce4b8731f03939ce5c93f2609b6b0f"],["/post/685bcc20.html","4a13e520d77880caecd02c681d8a1188"],["/post/686dc27c.html","f59846dc8d22f10ec7950b9421279960"],["/post/6c71e418.html","db468bf7f2c09eac9e5eff2502715b8f"],["/post/6ca1eed5.html","4cdcaec36a66b74fcad870f3dac21a32"],["/post/6cb7680e.html","559dcb6fdcd9b6adcb3a1e9b16f15ad9"],["/post/6d52b9f2.html","5f87c194f4f64bc90fe170c1703d97b7"],["/post/6db0d89d.html","4535770281b7ddef31dfdae95dab01ac"],["/post/6e80eb1e.html","516a63ed768d2560011491ebc6e43a3b"],["/post/6f3b3edd.html","ed55adefb5bd998ff803cb8dabbfe413"],["/post/6fc3409b.html","1d1f51e440dc600b945d0378c6d88736"],["/post/703409c5.html","dcdd9e7bd72a3d82e6af1c32af068ef4"],["/post/7169c4ed.html","82db854c55adf0e4028cb723e31d3bc0"],["/post/73136b.html","e867f72a3128809ab8af26ed5e5c56e0"],["/post/7410a832.html","6c9b69979ecc10a9bcc100203c354a1f"],["/post/742966af.html","4429f2853be8262fb8291b971589e0e5"],["/post/74479d01.html","9bfd9a187846bc7c92b3977b3c75546f"],["/post/74a4286c.html","95b9e56a3fad072b9ea7bbed0375ff90"],["/post/75794199.html","36466ebbb229303c341b367acd5a4866"],["/post/75f986a1.html","163c844eee57b0c4bfcc12d8351ac7b2"],["/post/76485a7.html","ab1c75e601da4e990d9e50f6576d3c6e"],["/post/772fc02c.html","e917321843e6296ac63605cd3f23eb4b"],["/post/792e36ed.html","2241bd152407350d6030375a238917bc"],["/post/7c50967.html","0a3d8ec2c8f768db830043eecdc54d30"],["/post/7d8e4f2a.html","4d855540ebb074db345537fff6c20bd1"],["/post/7ef8a98f.html","388cc0e502523ca7ccbecf8be6009214"],["/post/7fe193be.html","e6ee07e7ca6369ca867e709008da0741"],["/post/879e9655.html","6c5eaaf757598728071cd2aaf293b239"],["/post/88e8ae98.html","6c9c811519c9eccee06d2274784f166f"],["/post/89873dd3.html","c8a3d8e4e438e95e66455158a6fdef6e"],["/post/8ddc8a30.html","603725ef34cb510eb36530706128fff2"],["/post/8f9cfad3.html","458749fe9b9bd84245547f18ebe6ef0b"],["/post/918fcaa1.html","b7bf5f6d9b3e962d7b4f716994621e3c"],["/post/92687617.html","8acf5994b70f437a14046017164f0b7a"],["/post/9282aeca.html","f63ecce0b04dd08004d1ba6ca2ace3a7"],["/post/9305c5f5.html","8e787fb68e63ab30252c2826fd37a676"],["/post/94c9baee.html","f96c8c887e680d4e2102b2dd97b8e305"],["/post/98804e11.html","8c7e297cd5e7f82c33e788c628a1dd37"],["/post/9a9a4797.html","b8ca17ac29635ce44bbfd845f33d543a"],["/post/9c28a880.html","d2d7c9380271b45482d38432a506259f"],["/post/9c649212.html","80484ec356dc315c8a103e51f9c4053a"],["/post/9d402b32.html","0c2d75f11797171830b594af0707e03b"],["/post/9eb065c8.html","7503dccc989f10ec870e710863117595"],["/post/9f8e212d.html","15fbcfd9deb9c264ecf53a6be9a87b84"],["/post/a1751c09.html","14f2aa4c4ea4ecb3088150fe0f1eb77a"],["/post/a1cef007.html","3426a630892df63393dfa3d5601e8417"],["/post/a1fc03d8.html","2ba412e74968a31185c4a2f659440de3"],["/post/a27e9acf.html","c9a050aa19ee907e39a4a61e02d380ba"],["/post/a4c66bf4.html","c04b05d97ed64301317aa5ae5537f5e8"],["/post/a4efe87.html","809c086f071cae7c99801e0ab14d9575"],["/post/a7528411.html","5f3493a4b328edea9db34664bc9b9181"],["/post/a8759852.html","17f860f6eaa8c12f895b7266a2aa2e43"],["/post/aa0a97c8.html","3f4cfb7a0ebbf334d363fa46da2d1422"],["/post/ab4ed95b.html","cea279f9abd7667e2dd56b9f2a532585"],["/post/ab720150.html","c96c22012d8e640bd80cf101c4cfe09d"],["/post/ac92be99.html","acab62ddcc37df28bea7d21121e950ce"],["/post/acf6b02e.html","1b75f63221d2dd436c8f6341793b4042"],["/post/b0d6c7.html","7ce8e08c8a40f033bf47b534b5c1a0de"],["/post/b3ee770c.html","c7c9a2627d60fab3afd9a90313f26aac"],["/post/b8ca3dfa.html","7cfc203d1e6810cffd072d9f807fc4de"],["/post/bb7f8e97.html","d776a2ba5fea831c50d990f8004e8f57"],["/post/bba462fb.html","1dec05d4b7098edc564d7c4dde2fca37"],["/post/bc8586da.html","33ce0c7295d686f9625288b14fd77c5e"],["/post/bcb02c2b.html","294faecff59a9d93937e564b41d04ec3"],["/post/bd36a30f.html","219ea078803dfc6f94b23f582535ce05"],["/post/bde4b1f8.html","4a3516df0324d511384365e2426b5f32"],["/post/bea42f1e.html","76e35347ea7aa2687ad0909515d31352"],["/post/c1864474.html","281cdd1d71e650ccde4c6348a0db8d2a"],["/post/c293d2b3.html","59d1a10df9f40b73104bcb35a1ae4889"],["/post/c37095b9.html","7348d87374c896e7226069a277418937"],["/post/c5672df5.html","698e033dee18469d7f612e1bfb394f9d"],["/post/c6d76e9a.html","440f9f975905bb6e3b1711d9852184cc"],["/post/c7fb8250.html","5c9905c8b12aa56eb210eeb3ef401819"],["/post/c938bbd1.html","8708899cb00509a188fa09e8c0d4e1ac"],["/post/ca14c5df.html","6f21ae8dfadd4b402577c724bc706fc3"],["/post/cd18de84.html","fdfbdd440fd75b6effcb31988e1ac2b4"],["/post/cd41dfb7.html","7f4f1e630ca137ed7c80961132da723e"],["/post/cea184b4.html","18403f361a8f0d815e7502d457c5fa7d"],["/post/d120bd8e.html","7edbd7a507751359b67462591a385fdb"],["/post/d50b784.html","8d522827d170ab8c87f21abdc9a5ac52"],["/post/d6a5bd15.html","d9ed98e7d89ac20b16839370fbc15a6a"],["/post/d73de254.html","77f558e3ce94acca593177f8fb3d496b"],["/post/d7435d20.html","d50bde8ff43cbb19e352fb5f4dd35855"],["/post/d81c5363.html","0c0cf70109a2f23c45df9fa6dc241ead"],["/post/d899bd9.html","cb76417b23c5bd42e7ddb16cf63d09b9"],["/post/d9083bc4.html","64222ebddc8f3c705174740050922623"],["/post/dc981233.html","60264050e5f72b5cd3dea1160477a06a"],["/post/dea65d58.html","4ecb0d05044af2b1013fa6ed5a9a1894"],["/post/df76d545.html","aec40eb81362b43ea1d55e9597d095bb"],["/post/e256d99f.html","734367801eb9ee1a7569a673870110b7"],["/post/e290dd8c.html","83823b75c0889db208a7bd5a23835b95"],["/post/e3e37943.html","d628ec4265a2ebc74271fcbc3973d4fb"],["/post/e583ed8d.html","7d97ec55c1e2efc8e6367a02504bbcd0"],["/post/e5d75450.html","a0baf82377b9e100497c85c8d6992b68"],["/post/e6364ca4.html","8290fc385518d7ae8024bfc85f8e9db1"],["/post/e7058b47.html","eec89fd7654d3e7c1a2a156be8572853"],["/post/e769f01f.html","570df81a6e874ab4174eecbeaaaf3ef3"],["/post/e78ad34c.html","be8a4612af373e7cc8896677bb9f47ad"],["/post/e8005312.html","31206e891c92fb32bee09a76cd5af397"],["/post/e8ae7612.html","4ab7542015e6fad37af040ecbb62d46d"],["/post/e8bc7157.html","a52c2862c50f9d730dfeaa142b53720f"],["/post/eae0b80e.html","ecc3cb72f7b580073f76eecbbd657c92"],["/post/eb9ab36.html","dd51be85b79a69f9c074e50647778712"],["/post/f0b23c5b.html","8d273bbfd103324b8c53413e13af54e6"],["/post/f279299a.html","cc96f7b62f3c1ec2a17fdf9818134780"],["/post/f3d9c661.html","16f7d3ad3596eb2eb9a95f2d32fe2f2c"],["/post/f4bfd16b.html","7f208aeec47f4f30a75bdbb6623c985b"],["/post/f7b33ddd.html","452da27b36e9be97d26df28efa513fbc"],["/post/f8e4bc7f.html","e666a6845344d10ef0e47f6e6b9f39c2"],["/post/fa83cee.html","71e660cf1d4d03a1adf28441f82c69b5"],["/post/fb2f630e.html","f994b3d061e1692f4db3eb685c9b88fc"],["/post/fb5efb9c.html","c99b96665c0bc555bbad3a13cc631936"],["/post/fbf7f335.html","16381cbfb2b999f9d0b4655b0d11f111"],["/post/fcb9464d.html","63a599ebf94a3fa290628461222aa1d0"],["/post/fd581850.html","be9625e5af8df8c53ad2b968df1f763f"],["/post/fdc06f3f.html","f75744c1a16a36bf39a7d1d7ccc80959"],["/post/feaebfb5.html","fcde858e3258d4a1967e3e554df5e29b"],["/sw-register.js","f2b6e76cfc71f89656846419827c988e"],["/tag/1988：我想和这个世界谈谈/index.html","a002f5ee0362f18af62e4c662230924c"],["/tag/1Q84/index.html","d33220ca893640bd313a8367ddcf070c"],["/tag/2017HDU多校/index.html","18120d34e020ce1ae75ec58cf30de9ae"],["/tag/2018HDU多校/index.html","4afd02c19fdd76f42e27ac434d076c29"],["/tag/2018寒假集训/index.html","3f3efa123b52771985ce1042c4b64e00"],["/tag/2018寒假集训/page/2/index.html","32b8a523a3ad0adddd6330ca9cd9ea37"],["/tag/2018春季训练/index.html","1f7e472ef37239ae49af57be9e3c4548"],["/tag/2018春季训练/page/2/index.html","0e62ebcd223fba87a5deb2f2832c5f57"],["/tag/2018暑假集训/index.html","af294828158a2704d96e6d0282fcf887"],["/tag/2018暑假集训/page/2/index.html","4901ac5a2ef91f2092df0bcb4d92779e"],["/tag/2018暑假集训/page/3/index.html","a7607d910ccd7de3bb70c6c6d69c711b"],["/tag/2018暑假集训/page/4/index.html","b2ae633d2518b39378c2d712e7152588"],["/tag/2018暑假集训/page/5/index.html","68d54f339143a510b9240a7473318043"],["/tag/2018暑假集训/page/6/index.html","8f6b2c46707ec9bcef952dfb04e81490"],["/tag/2018暑假集训/page/7/index.html","394728e02f3970944f0409ace6b1c14c"],["/tag/2018暑假集训/page/8/index.html","424ba3cb10223e0cc21d45a571b3d6f1"],["/tag/2018暑期选拔/index.html","3cbb27050a01c2e8ed793554b6394248"],["/tag/2018杭电多校/index.html","b9b6f8b20ed0c939e1ff54a58d63c27c"],["/tag/2018球季训练/index.html","a548e2b1961ea6b3dd6eae85c048bb1b"],["/tag/2018秋季培训/index.html","41c5ef598007b1f6978c19d33015bde0"],["/tag/2018秋季训练/index.html","1805f11624dd58ef064aa5ac8a523dfd"],["/tag/2018秋季训练/page/2/index.html","0cb8ade4d9798c526c40bbdcefa17bff"],["/tag/ACM/index.html","88c07a2ce5856a6f89dba2845287514f"],["/tag/ACM/page/10/index.html","8bc66dc42aac8585d4f88e02b603324b"],["/tag/ACM/page/11/index.html","9e8ca5dd1922610a2dec54fb8ddf482d"],["/tag/ACM/page/12/index.html","fb189b0d7eecf5dc15cd94cbb0283319"],["/tag/ACM/page/13/index.html","9ae466eb2a9911cf2d517538f2f0dbf3"],["/tag/ACM/page/14/index.html","4749197bacb95a1988a2c0f464278265"],["/tag/ACM/page/2/index.html","abb527419702d8962ccd931ab9c14faa"],["/tag/ACM/page/3/index.html","d4438d1a7f7a06ffb23b48a7c795e92e"],["/tag/ACM/page/4/index.html","0a9089fb7e04f49e705efbd20c2bd678"],["/tag/ACM/page/5/index.html","c36326db1156c96fe51f0ba00fca5069"],["/tag/ACM/page/6/index.html","5ee14eaad3260237a3f002519985423b"],["/tag/ACM/page/7/index.html","8da6457ad99f58077f98deca649dabfb"],["/tag/ACM/page/8/index.html","870295c27461489fc57b18574c8a4ec5"],["/tag/ACM/page/9/index.html","79ed21cb057d815f64f9ade6d85d78b8"],["/tag/AWS/index.html","df65fa7abb1538e4213095c825d88545"],["/tag/AtCoder/index.html","0ccddfee54b8187183d97d2fb1db7016"],["/tag/BFS/index.html","141d940f7fb713626a58d3be34107aba"],["/tag/C/index.html","0dc56cbc822e1671fbfb6a061368eece"],["/tag/CSU/index.html","7b598605a50c3e9d13e96a878e203af8"],["/tag/CSU/page/2/index.html","4ed42dae016903a1cc37c7c47f1774ee"],["/tag/CSU/page/3/index.html","7303cbec5c9b4bec4128d7cb0189ff07"],["/tag/CSU/page/4/index.html","703b3549e1ea657f6241ff34e01ef89c"],["/tag/CodeForces/index.html","282316ef081e21ae7094cc02a5aa6d47"],["/tag/CodeForces/page/2/index.html","f97ec5169036870f4a11ca90f33e7c9b"],["/tag/DFS/index.html","86863f03a52afb09fc40a6609d479f52"],["/tag/DP/index.html","2d931fef0552f0c23a94ae37dec42da7"],["/tag/Dijkstra/index.html","651f7f61292ab51d082b26239f6b3a42"],["/tag/Flask框架/index.html","f402b67d9a4bebeedbafc269be191440"],["/tag/Floyd/index.html","8520a9f50c016a5c49948bd42033e278"],["/tag/Git/index.html","d0e85698364f02e4bf57512700be8cd3"],["/tag/Graph/index.html","032ec1c27e1abcc7274585f46dcfe096"],["/tag/Greedy/index.html","d10314b388ae8729fa145ce71b051f20"],["/tag/HDU/index.html","af36c850944367db41a4faf911fa8383"],["/tag/HDU/page/2/index.html","e448dddb9339b8521c4e1bdbba573518"],["/tag/HDU/page/3/index.html","61098ea12f19fa4528ddc13907ccd139"],["/tag/HDU/page/4/index.html","1a92fee8a0fcdd9d414e84369777afb3"],["/tag/Imitation/index.html","e038b6986679dee8c896cd1178a1a043"],["/tag/KMP/index.html","bdcdfcc3fb2a4ea900ed91cdb08e3ac2"],["/tag/POJ/index.html","83a05743a6514be9447b4f056bd2e65e"],["/tag/POJ/page/2/index.html","23da71b369a23b0d2dbf866acb0306ec"],["/tag/Python/index.html","0f13226d18eb3691a114e2d9770f7bf1"],["/tag/SCU/index.html","1f67903c2a75b9a058158b82b75fed35"],["/tag/STL/index.html","0b14d8dd0949a88c6a378dae29bb92f3"],["/tag/STL/page/2/index.html","b231b76620d6d687b45925eb6a50357c"],["/tag/URAL/index.html","fa2004c2eaea96226b8024b3cceff478"],["/tag/UVA/index.html","faef001cd2ba6af507346c52ed328567"],["/tag/UVA/page/2/index.html","423ddd2a025455a892a1424952686aee"],["/tag/UVALive/index.html","278cb9b9808e59d31bc9ea5f3216e6a0"],["/tag/VSCode-Git-生产力工具/index.html","b19cd23a6f0c7c897232eb53f638ce58"],["/tag/VScode/index.html","9b254619a05583887b8b3a8991159e41"],["/tag/ZOJ/index.html","f280952fc353fb9b5ae2f7c8528d4f18"],["/tag/math/index.html","6d3033b343f403880ebdf001a873e7b6"],["/tag/test/index.html","d0632276751614629814bdedf70c1beb"],["/tag/不得贪胜/index.html","a9be0d43f5573b95261885eec0a67405"],["/tag/东野圭吾/index.html","19f6f4c0aa64e4aa7b384d7be9fc4a1f"],["/tag/乌合之众/index.html","930fc7ea25195fc02b3bfd6dbc9a6317"],["/tag/书信/index.html","a4eaeb004c91de8e2af8fd6c4a7688b1"],["/tag/二分/index.html","a918bee21b5f70c42bc426f1234abf67"],["/tag/亚马逊/index.html","9d9c58a4000b257d0c63d066fb58021a"],["/tag/亲爱的安德烈/index.html","182bc778989adf72012904dcd1e3f928"],["/tag/位运算/index.html","7654aef3774ea6c4b5a17921507baa83"],["/tag/几何/index.html","0a998826c528585456fc54000bf9e33f"],["/tag/刺杀骑士团长/index.html","f315fe379734e6e13134dfcd754b9db2"],["/tag/前缀和/index.html","cbb3871210707f023437993f4b948e3e"],["/tag/区间DP/index.html","327ed23c912d984fb1a62bb63eb4fade"],["/tag/博弈/index.html","32e1a8144295c445bf8d91c575fd141a"],["/tag/历史/index.html","e502a4b9071e7fa91231f2c102af35c2"],["/tag/古斯塔夫・勒庞/index.html","0030d5065ab1d1573c329a59352be371"],["/tag/图解密码技术/index.html","57e73e90dcf21ca686c624d309d40b29"],["/tag/大数/index.html","3c32c982355ca12b65e97458fa570bb7"],["/tag/天幕红尘/index.html","c7e96b2e2a0d005bf1b2f35f800b77b3"],["/tag/如何阅读一本书/index.html","57c2cb77275939869c0b53122d4fb12d"],["/tag/字典树/index.html","5384e8e3e9e81a7f4ecbfa756da526ce"],["/tag/字符串/index.html","9c7288cf95aae1b0a4abf033b0b5bec4"],["/tag/字符串hash/index.html","94a46edeb99ba1f17d891346da091006"],["/tag/安德烈/index.html","a54cb321e69ef5ae4d1e24e3e176006f"],["/tag/密码技术/index.html","9c4769c5911220a898890fb7a6ee52e3"],["/tag/小说/index.html","89d514e5f072c25d2b4aec53003ac881"],["/tag/岛上书店/index.html","397376e44c80c87d349393569fb5acf8"],["/tag/并查集/index.html","c1621ac65ec79c5fad2caa3c0c844bc6"],["/tag/待补充/index.html","918d3cd9a4f1c23767c6e6323341ef2a"],["/tag/微观经济学/index.html","05f45ecf1d6ba75ed9e6ed4867f1d4d0"],["/tag/数学/index.html","f3761ea261f0ed41e496ceb2e317f0d3"],["/tag/数据结构/index.html","8f66e03d1fd32165517fddf512909296"],["/tag/数论/index.html","e7ecf3aa3f8a9700f261ee7bb89184ae"],["/tag/文学/index.html","dbc12ceefd4ab684897093fc7cf4d0b2"],["/tag/文学，小说/index.html","cacb12ab611a76058c24fbb1ce70bc60"],["/tag/旅行/index.html","eccfac95e75543125b137483eb3bb7a1"],["/tag/暴力/index.html","b2a51a7a2a79a895f2bb82e5e40847ea"],["/tag/最小生成树/index.html","dde4c5dcb33b684307a6b8a8e822a146"],["/tag/最短路/index.html","697a8b43512b98025023686acf42bd2e"],["/tag/最长路/index.html","b8adde9d68e54f1cb270070a891a37f2"],["/tag/本·伯南克/index.html","2df80083d62abd8901af6909dfaade1e"],["/tag/杂文集/index.html","c8085613ae222d886a85abb14169e3fb"],["/tag/李昌镐/index.html","8bb46d3a752004dd53eb1963d6a961ad"],["/tag/村上春树/index.html","260b3ac905a56c8872c7b67d8dda3890"],["/tag/枪炮、病菌与钢铁/index.html","445c8c5b464a06c77734bae6db946222"],["/tag/概率/index.html","228e76f41f33c80fd10f1a8343cc7559"],["/tag/正则匹配/index.html","fd787101c3a0636ebbc06985401016fa"],["/tag/水题/index.html","e36f5c7f849c4df6b3f386be356e6352"],["/tag/游记，武汉/index.html","55c394343ae67dc2e1a842b1c647ea62"],["/tag/演讲/index.html","d134b4ad7695f39610d8b422a811fb5e"],["/tag/矩阵快速幂/index.html","a4884bdbeb073bf9093b736702dd4cce"],["/tag/石黑一雄/index.html","5a44febdd0057456705bf6e40d3f0f9f"],["/tag/社科/index.html","7127d67202348187edd3f48d3a60a4f7"],["/tag/笨方法学Python3/index.html","2cf7c213142c1bae8b3f5ae02236f927"],["/tag/算法/index.html","ecf1fb6725e578799d148938b4918133"],["/tag/算法/page/10/index.html","3e2b00ae8561cee7a58c3b945cdb5a61"],["/tag/算法/page/11/index.html","0d2ea97b16ed6347b75fb4bfac965fb6"],["/tag/算法/page/12/index.html","9207a18139a677d1a17d2d9c79a9b37a"],["/tag/算法/page/13/index.html","a18a92dc5f8073a82282372852270e2c"],["/tag/算法/page/14/index.html","c0354469740ff3bc86211cfdf0bccd52"],["/tag/算法/page/2/index.html","b05655d7864c839e559a920d7d96ebaf"],["/tag/算法/page/3/index.html","195064d653ab2ffb1b36b2c1f3f240f2"],["/tag/算法/page/4/index.html","7995e7e3cd2121e0dcd9f2ba59521332"],["/tag/算法/page/5/index.html","e1993af12bd1fc677592880f0e23c239"],["/tag/算法/page/6/index.html","1e905307f45795951559770a983fc7ab"],["/tag/算法/page/7/index.html","b1cc7b0063f7563f338621809ec4afd2"],["/tag/算法/page/8/index.html","acbae35a1883fba13bcc967232b738e8"],["/tag/算法/page/9/index.html","b3917ecb29e2d73ac14ca4e3fd3025d7"],["/tag/素数筛/index.html","c493e89031d04d129e06aaafb29dac89"],["/tag/线段树/index.html","9e3567cfebf56f08ee95491e1073705e"],["/tag/线索二叉树/index.html","6fbaffcddc4aa0b6553cb5851f469223"],["/tag/结城浩/index.html","880e428afc7be55ed167ac7852b509da"],["/tag/编程-C-课程设计/index.html","cbec5be478d1edd307d8d8bbf8c1b32d"],["/tag/编程-PHP/index.html","a2f78ab4affd127870f7ecf73822603a"],["/tag/编程-数据挖掘/index.html","c22c9d30037004a12be37661b4ca6ef7"],["/tag/编程-编译原理/index.html","a647551ecc9d30d637e93ddd0f83c5ff"],["/tag/编程/index.html","3447a15fe704d796653c675364e90d8c"],["/tag/编译原理/index.html","4135110431f415ed143306c19a3366ee"],["/tag/自传/index.html","43142bdc8c899da490189f47179950c7"],["/tag/艾萨克·阿西莫夫/index.html","4415bd3ffabda092fc47d4ee2f64c59b"],["/tag/补图/index.html","c41d89096227b27b38955d36dd411e73"],["/tag/规律/index.html","a0e78de37bd932ad7880a56087502620"],["/tag/解忧杂货店/index.html","348633cb3f3ff18c831343812ef9d6c8"],["/tag/计算几何/index.html","a180769ea5afcfa33e6acac178bad836"],["/tag/讲座笔记/index.html","5727bb3fcee43102c1a26465cb0b2fef"],["/tag/读后感/index.html","99ee584e96f063c91f4ab7312990505e"],["/tag/课堂笔记/index.html","d0d38505ff71fe1f47fd957c31187cbc"],["/tag/课堂笔记/page/2/index.html","9538fbdf8e04dc1433e8ee13c2211747"],["/tag/课程学习/index.html","7526e68bbc663349db371223f1c1e0fb"],["/tag/豆豆/index.html","7c06cc0b4096037fb3e1fb4ec444cba8"],["/tag/贾雷德·戴蒙德/index.html","52e61f474226bb1612e7239aeb4dca26"],["/tag/辅修/index.html","8de85e6bd9213d9319998c17eb16abab"],["/tag/辅修/page/2/index.html","9803c140a6b311344f01f74d289a38a1"],["/tag/递推/index.html","13ec343c815abbe398327751df314d05"],["/tag/野火集/index.html","f97759c0b7902013dcc7f7fef009ed12"],["/tag/金融学/index.html","b496b70d3b81735a8786add35085298e"],["/tag/金融的本质/index.html","da66c4c27c0cca8aba9e98daaca1abc6"],["/tag/银河帝国/index.html","2f234ba295e0d59610021080eb4f89e7"],["/tag/阅读/index.html","a2e769d2a088c72f783a6c9733e5d9df"],["/tag/阅读/page/2/index.html","d9c8c849e746f84b20cf563c79f333aa"],["/tag/随笔/index.html","213b13c90a06029a7e50724b76d4ba0f"],["/tag/韩寒/index.html","45a85aaa5bf01d403368aa529f795dfc"],["/tag/龙应台/index.html","4627b7f3d60aefcb7f826596a88f4335"],["/tags/index.html","0f835aef5588afa2baf7b189a2f65316"]];
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
