/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9ec63dc864e8af32053158eb8d5c3989"],["/archives/2018/01/index.html","72cb70b3cad68b5bcc84bce7220f35fd"],["/archives/2018/01/page/2/index.html","c36062837fdd01d313a5935b3376e5cd"],["/archives/2018/02/index.html","08592ef2ad63dc89c559632f208fe063"],["/archives/2018/03/index.html","d4b4100532d4f72c68d08bfd76852db5"],["/archives/2018/04/index.html","8678142e9e771e6aef2f00f68fba3fca"],["/archives/2018/05/index.html","93ac0ef823d5fb214aff693a6dac5221"],["/archives/2018/06/index.html","04033c79c283a885ec8ac9ad10a8b2dc"],["/archives/2018/07/index.html","47376b47628d7531c63c8937fd0a7f3e"],["/archives/2018/07/page/2/index.html","45fe29c6e3a35823cdc5ae2bfb666dbe"],["/archives/2018/07/page/3/index.html","bff63dc0e42fcdb76c36721a0fa3888c"],["/archives/2018/08/index.html","ea0ab08b2853b7679415f02a4d69b79a"],["/archives/2018/08/page/2/index.html","a6f2a5fec8a8d0366fbae8001945c88a"],["/archives/2018/08/page/3/index.html","d5f9a234c15e24481a1e8a4f52afe0a9"],["/archives/2018/08/page/4/index.html","be077b0b7388b4d50cab79a1756d3d9e"],["/archives/2018/08/page/5/index.html","dca128ae440f7e72fe1707e48f9e9a80"],["/archives/2018/08/page/6/index.html","3cb88cf3bbe1dd626441225eb66f77d2"],["/archives/2018/09/index.html","6cdfa7dc68500e1174183c0aa9a5e5e9"],["/archives/2018/10/index.html","0c8ac1d3c6d4aa05a7611b7a70617c6a"],["/archives/2018/10/page/2/index.html","1905e752a587d98a2addceda386a1a8f"],["/archives/2018/11/index.html","f32eedfc068d74d4c8a7873e4f674f79"],["/archives/2018/11/page/2/index.html","b33ad38f28fc6d1632108efc79d9a2b1"],["/archives/2018/12/index.html","d8d515f3cfdb91af705afb176e954a34"],["/archives/2018/index.html","e95fefe6809e971bfc89d413a04ea251"],["/archives/2018/page/10/index.html","b75f05a017115132fae4097ce3fc4580"],["/archives/2018/page/11/index.html","c2511e0c055003798a5e0cee62e597eb"],["/archives/2018/page/12/index.html","5aeb7425e96f3be96f68134337a6e3b3"],["/archives/2018/page/13/index.html","92cd7dd9764f619c12caf0826a8008ab"],["/archives/2018/page/14/index.html","24735056b374365cccaee3c5fcb33f76"],["/archives/2018/page/15/index.html","35b8c0d932cc74d90f2debfa62e96746"],["/archives/2018/page/16/index.html","0425abe63bb399c85017529206d0c660"],["/archives/2018/page/17/index.html","33c6e033a40d581a0253744a135a6a98"],["/archives/2018/page/18/index.html","078387321676620b2411d4b07133868e"],["/archives/2018/page/2/index.html","34c362d5e66027047b2cdce37f85f2be"],["/archives/2018/page/3/index.html","1cb2c5eabbd23acd9856462d72b43862"],["/archives/2018/page/4/index.html","9bccb050044f732ee448840f7b012b04"],["/archives/2018/page/5/index.html","f03f6a69d2418003afa5de5208804dff"],["/archives/2018/page/6/index.html","8f2487e54856f0d70f50b93fe8749470"],["/archives/2018/page/7/index.html","057ec9a6fe54636e1773cf82dd08ffe0"],["/archives/2018/page/8/index.html","917d91e446af1bdfa4e5f5a81269554d"],["/archives/2018/page/9/index.html","8c468d794961d2e5b24bff05e103ab0e"],["/archives/2019/01/index.html","504f365d7939cb0b9205e2c254c1051f"],["/archives/2019/index.html","ebeaaab892fddb2be7cbca098b60e88d"],["/archives/index.html","2900f140d51fa5a4cb0af71e8ae74af3"],["/archives/page/10/index.html","fd09af2bd7a060d6f435348fc3af3104"],["/archives/page/11/index.html","6a224567d351f2f404359378a296276e"],["/archives/page/12/index.html","16199828af0b46bda1c3c665570cbe14"],["/archives/page/13/index.html","17e81e73692415ed8e283d5da92f64b0"],["/archives/page/14/index.html","4e291276cec6ea7e3553330bb2dbaa38"],["/archives/page/15/index.html","7162e422c8d974fbf391d412c10b29b4"],["/archives/page/16/index.html","df5e2e1c17087d90deddebdc8d9ab625"],["/archives/page/17/index.html","3931edebc0e64c3e934b1224f7b159f4"],["/archives/page/18/index.html","a7f34290f8370879d2296ac2c0869a77"],["/archives/page/19/index.html","ce1b4d00411aac17ad13e9cf0c8d9945"],["/archives/page/2/index.html","3627f93f5b8d26c4d9150d93dc14143a"],["/archives/page/3/index.html","87ba68a54d0e652422cf74f188518754"],["/archives/page/4/index.html","07cb3612733146b82cdb3c67a3df67d2"],["/archives/page/5/index.html","9fcc37029c1b885e31d614cd01537419"],["/archives/page/6/index.html","4a3bebe7815f0cb191aae42ff65b4672"],["/archives/page/7/index.html","65cc8a0a6b183a83aeeb6aff683b40df"],["/archives/page/8/index.html","9a32ccfe3fb3b8b1899d60887a96c25a"],["/archives/page/9/index.html","e1ab3000aeafbc5549a2394b86454e68"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","8e642de2be9c8e32590833facc055fc2"],["/baidu_verify_ZzhwBFUe1V.html","29619ad5fcd52e1fc22e7a05994fa6c6"],["/baidu_verify_dw73Nh8OEw.html","ae75ebfeb4b11b8658d207d312672645"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","a3c7d45c594b53c54432b11221f53b46"],["/categories/数学建模/index.html","1519483964b97e4d2647d4ecee2a3ef0"],["/categories/旅行/index.html","3527c5e85ba8cd61216406f19eae0664"],["/categories/编程/ACM/index.html","f8ba98a3cc7985f9506537e8782e2363"],["/categories/编程/ACM/page/10/index.html","a12ab49c029805785d3935e187ad087e"],["/categories/编程/ACM/page/11/index.html","2beffe53c95ac274f8aedb7770a11511"],["/categories/编程/ACM/page/12/index.html","8557e086bc558014816c2d40cb82fd82"],["/categories/编程/ACM/page/13/index.html","947558c12c2a55aaf733a0102ed443a0"],["/categories/编程/ACM/page/14/index.html","9633d98298278b666f0e53447438b8b5"],["/categories/编程/ACM/page/2/index.html","9cfdbe2c1ca76ec8be5f10f21afa5224"],["/categories/编程/ACM/page/3/index.html","b5f9f379bb9fba98d1da07bc2247701f"],["/categories/编程/ACM/page/4/index.html","aa1be9d17bed276c9df01d1a02a74739"],["/categories/编程/ACM/page/5/index.html","35e3cf0ac6d3e85f8a2c4d6d37bdc565"],["/categories/编程/ACM/page/6/index.html","3ca2e7c7f671e3ed67688924ec20e863"],["/categories/编程/ACM/page/7/index.html","d5df071179deb0e8e0e2102fd940b522"],["/categories/编程/ACM/page/8/index.html","3b36e03a3a665575f4d51a23d7197c8f"],["/categories/编程/ACM/page/9/index.html","72c7b7c8ef44404edc701bd68becc9f3"],["/categories/编程/C/index.html","bc4f3054d027af8d4007a4b961fd662a"],["/categories/编程/Git/index.html","642fa8f68b8fcf422a4fb223a11b99c8"],["/categories/编程/Python/index.html","b00984ae8b6e3153f84038b56ff6111d"],["/categories/编程/index.html","24990744b79ff2a05a922d63ff665543"],["/categories/编程/page/10/index.html","cf5650b5019d83dd47037f4c8be95d67"],["/categories/编程/page/11/index.html","0831e7758904b2a9d672b6db5badad52"],["/categories/编程/page/12/index.html","019b70cdec931e81cb43cf07c3184d34"],["/categories/编程/page/13/index.html","33aebd49e4a23619b12e4ffaf76c1bf4"],["/categories/编程/page/14/index.html","410954f5f9c1017849acf0c3a6464134"],["/categories/编程/page/15/index.html","27cabf0fd7a910a53c73c21cf1e1e1ed"],["/categories/编程/page/2/index.html","90e83e27f0f75f11911330b3d35b06be"],["/categories/编程/page/3/index.html","af3eb93465fb0a8102245481f4d9f477"],["/categories/编程/page/4/index.html","3c27522cd006734cfdc50959b1b614c0"],["/categories/编程/page/5/index.html","95bc400a1bcb468db86fbc34729ea7fb"],["/categories/编程/page/6/index.html","d522212a45ee628c95a89cf57769d758"],["/categories/编程/page/7/index.html","d589a0c47dcdf5025a6573876cb2b69e"],["/categories/编程/page/8/index.html","7da98b806131ad1a4b9b0f18fc80103d"],["/categories/编程/page/9/index.html","85c43c74f920597840d6dbff42210953"],["/categories/编程/密码技术/index.html","6c94bae0e9d454dc303f1457fa663f26"],["/categories/编程/数据结构与算法/index.html","f3b515ed0c6197619cdb99a28a874eb7"],["/categories/编程/生产力工具/index.html","bb2ceaa923c8e487143bbccd7c88a6d0"],["/categories/讲座/index.html","eb9062bf5b447f3ee409b160bbf68686"],["/categories/金融/index.html","f5ec5cc25ce2ac76e0c8147e1bcfd773"],["/categories/金融/page/2/index.html","40850f2b5467a33b317c91bea92857a6"],["/categories/金融/微观经济学/index.html","34becf7a1bc79cf780a010af7bcf139d"],["/categories/金融/金融学/index.html","58787fb15a2a1d8723b3c5d8b5d5d998"],["/categories/阅读/index.html","87ad12685118cd1ad814b2d9c8de0f57"],["/categories/阅读/page/2/index.html","05fb2f78594b85055772ede0a0241220"],["/categories/随笔/index.html","8414443cc25ed0d98a70aab386af912e"],["/css/main.css","274bc70bb7e635849c6113ff2a83532e"],["/friendlink/index.html","0cd6685417a678ef5ae94805bf4408d0"],["/googlea873f713657fb5dc.html","6fcd3a9a13341d581f3c9417699541b3"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","64d3e4a7ce0f01ea1e9ae15095f06816"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","900a6549d758681f8434db816656acb0"],["/page/11/index.html","dcc945c5039b628c278ca54aa097c936"],["/page/12/index.html","ec8b22a21993b43a1c30a1cbb8906472"],["/page/13/index.html","be94fae600848a7c35924462f43692b4"],["/page/14/index.html","e2c609391c796a850367fa7361f2c7b2"],["/page/15/index.html","839b1e493bb9f79bd72b47870fd89720"],["/page/16/index.html","c868aff9a41d56cae8d3cb50964b1930"],["/page/17/index.html","745a1df69e3af2eae4dccee4b037edf4"],["/page/18/index.html","c09264dc55b6734fa7af57ca13cf65d4"],["/page/19/index.html","6161d3d47a24d9a8a5898943ae0ffeff"],["/page/2/index.html","82340d53fae7357437853122ad84ba3f"],["/page/20/index.html","7f6e88c281294147584933daf0fcda56"],["/page/21/index.html","39dbd5dbaf962237f2c9857b99248776"],["/page/22/index.html","3cdfe1cbfa0d648eb68ae5b0cc66ac24"],["/page/23/index.html","f86a8f70bc8e67d1238232cdbbca97d2"],["/page/24/index.html","dda28b3d77aeefc88fdbbcea55b0a143"],["/page/25/index.html","d24681fc4fb23812afef7c6457e3af7a"],["/page/26/index.html","8e0444ff8311b87a5774729001d7bfc3"],["/page/27/index.html","f57c1596e1ecc928079d90bba2923277"],["/page/28/index.html","82f1b08549015e0f84a877eba68edfbf"],["/page/29/index.html","145c7ec75a8ec0a4f2fec5dad5c17e54"],["/page/3/index.html","b7db12340a73d66079a476ffce27ffeb"],["/page/30/index.html","805dbbe50c590ffa9ca930b26c30e565"],["/page/31/index.html","3f9a06ee235b07daad881e6cf8d757a3"],["/page/32/index.html","bfa6a0a306c2fe78177883a7e25fe47b"],["/page/33/index.html","1c5c48f859ddb71a6afd65759d31dc20"],["/page/34/index.html","08edfce7a132471b8c3ce7840787052c"],["/page/35/index.html","ea27c67642691a1aeaffdf59a5aabf79"],["/page/36/index.html","9e38ad4025acd9857c94f4dec61057a5"],["/page/37/index.html","dac85c3eca0aedaa790d6960e7e48502"],["/page/38/index.html","b145ace043a8922b6038af20211deb2f"],["/page/4/index.html","0b12c8f7578b4e32ca0cc43e6e839abf"],["/page/5/index.html","ff40e6d55603f3ab8f9045af49eacc0c"],["/page/6/index.html","b1605c76ecfb4b83e8119da835ee25ae"],["/page/7/index.html","c1649d10d4806d1a3c3c6144244d5608"],["/page/8/index.html","5ce7cc8c434975432586e1958cde8277"],["/page/9/index.html","b37b26569ec72272ad504cd37d4715c6"],["/post/104a4c5d.html","d7b7c390ac21c5fcdf2e83be82f1ea47"],["/post/109aa3c8.html","b11eaed09138a8955b122b6792559936"],["/post/11246bdd.html","7864388419eb8e537fe99e55818fdda1"],["/post/1233e925.html","6866d6cd923342a5d48219f86b8fde51"],["/post/1448d9c8.html","9c85f5e3a8429d5820153653323d5c47"],["/post/15db1cd9.html","fb63728b898045797f80e75cf67daffb"],["/post/16b5efde.html","e1bea2fdc63874d0b4f18b9d49abf67b"],["/post/16fa37a4.html","ca898d2a2de5ef692a9a9abe2b1baa52"],["/post/184fc5c7.html","739b10f6f9f30d48f31e9a5173589fd5"],["/post/19e79191.html","982fec14a0c62c73259f3cab305bae6a"],["/post/1b7db6f0.html","73c8be3833b576ebeec8ecc33b99c50d"],["/post/1c52564f.html","dda81139dc671011903972ef0e8eefea"],["/post/1dc46f40.html","0eed3abbda52e923ef6a35dcab6d7d16"],["/post/1eeab2ee.html","99093853e1faa6cd2c63282c6bf57f0d"],["/post/222505fd.html","f8319ff131e1c0593f97d7f4ca788685"],["/post/22b5b237.html","9807f18a01907d3ad48d670d7f15ce98"],["/post/23f72a93.html","8993a87a3a04ccf366e322bd350c8fcf"],["/post/264a9c89.html","54bde78ba94d7b190b95d4c43c6094af"],["/post/265c0f5.html","ed529c8594e283b0721dc230cad8271c"],["/post/26fa4dfc.html","95ee7f40387ba9daf2be2b7f8128166a"],["/post/273ced06.html","dc8da808025c76c49b939a81cd6cc4f5"],["/post/280fbdcb.html","45eddb6dd130c5365e84452fa02fac2f"],["/post/3090aa13.html","5a8d1307f1f71752c00a9e5aab8c0b19"],["/post/31a770a5.html","de9fa0ad861e45c6f8c37a2048856549"],["/post/31f89579.html","d366953686a571eabd23a4adf53e0dc2"],["/post/32dc51f4.html","42c18eb3b2cfef83875b67df14cddd26"],["/post/34a049ac.html","63a0df7b3273f6d8694ebb8bba5dd777"],["/post/34f53a10.html","173f4e8cf998ca749d9caf2d71ae822f"],["/post/36bef409.html","3af3ffce1f922b98ef273c022053a5ab"],["/post/36e5881d.html","6e2d74beb2daa869730c76415aa59d87"],["/post/380486cb.html","10b8c473e191fe07ea59b95bc19da9bb"],["/post/38f8b110.html","f0847d6adacc8a635146b3cd418e8aa2"],["/post/3a3eaae1.html","0736b424b3a08c4fdd364e4477b878cc"],["/post/3a72081e.html","9eaff202e1b4b58c06e1c23a27232ea1"],["/post/3bc7f503.html","84e695f62464eb5202fea8c54bf000df"],["/post/3c57c5dc.html","6a6a59550e1e88cf8470cc679927da7d"],["/post/3d71c64b.html","2b8f22a62c28bacd0baaa45cbf584f0f"],["/post/3d8072b.html","6111f3e83cc1514cd21cea81836604c9"],["/post/3e6878ac.html","7e4e958d970525086a1e4abae0753ada"],["/post/3fce0650.html","045cae4864c9dd6562e4a2a08c36776f"],["/post/409dbc1a.html","5ab6260c442beed63a0bef5b70a369b1"],["/post/40dfaace.html","3be81d0eb990876b993120362f280c38"],["/post/4255f31a.html","53b2577b0fc9a04540d0c52a40e12498"],["/post/42a619f7.html","0959abacdc051c5fee029ede99791c12"],["/post/44505a5b.html","d5acf548d322474d36d4d65a30ab1283"],["/post/448da703.html","bd8fe74bd9a2142becdb83cfaa3d898a"],["/post/454c2118.html","68e0686d03ece341362e0e27e53bb54f"],["/post/454c2358.html","52ec08ea4b464483dd30181c36b33464"],["/post/4773b69c.html","1d75dcb438b8c8876034fb353a6d33d4"],["/post/47b391f2.html","07aca16280e9409368ff1c2bf15a01de"],["/post/481e8abf.html","c19751b4adee6ba821212f3ef4cb9157"],["/post/4ab96b49.html","c2f0b144aac91bb916b9352b3a4488ab"],["/post/4b15f9e3.html","59bd8465ed698282b3a197aa09f679d7"],["/post/4c60a529.html","d55aa4b7d34f963d402323eca318f108"],["/post/4d6a6b27.html","4430b65543e876d076ac83276e04dc9d"],["/post/4db7e28a.html","22b8bfd84ee647e56a2b890ee34e7600"],["/post/4dc7502.html","f65779f88302c98380935bc32fd0f317"],["/post/4e876bc2.html","b3127877cd59a247d9fcab8c228cca24"],["/post/4f352d.html","6cfed68297ea684c9d89d5c7679aae9f"],["/post/4f8fe65a.html","321b591a62e383afce9dcaa24d21b448"],["/post/4fa396eb.html","14df14325c2e1796e21a0ca6a753d3c4"],["/post/52730f61.html","cc046b86dd92898c41402c41459b8f95"],["/post/531de0f8.html","6ce62c5273ff5800d39ff12652d63118"],["/post/5555df5.html","7f8d935f9c265d13bf14a6acdef81c71"],["/post/57bfde8d.html","3d9aef593050b6b219c4e90e899530d0"],["/post/585293b8.html","5cb664f41db99ccc66ab3982f45bc5ad"],["/post/5aa5290d.html","f06d6e1c29a8374ee5f4fc2e82b6db40"],["/post/5abc6d45.html","e0418575df26de7dffbaa12047bc0887"],["/post/5c86d06a.html","cae2fa5f6857862efc644a65cb2d062c"],["/post/5e189593.html","390ce9ea48063dd0fc2d5e53ae12a7c5"],["/post/5f2d4a77.html","6968f66e541e640cebfa283441dad722"],["/post/5f341cbe.html","ff3a4b2f89c81358404fa9363a4481f0"],["/post/60850415.html","2fa4b31ad5634d63c4cb517c0847532b"],["/post/62cb42be.html","9dce6e584ba62b7fafba66c2b8adcbf4"],["/post/6501181e.html","f7d89635324730a9ae6d682f95af5316"],["/post/66258384.html","122e7782077f8c4417f102adcbc143d3"],["/post/662b8b80.html","fed2cdc830ab7ea52ebfc8f9eda3f7e2"],["/post/677d0fef.html","244818f0831acc78c404293a46c3667c"],["/post/685bcc20.html","a00475b5ca57da301eceedd44bc7c334"],["/post/686dc27c.html","89df807c83f9047eb7a50fbb172169c5"],["/post/6c71e418.html","a8b64379ae6451c29f053b71241aa89d"],["/post/6ca1eed5.html","82a773910d60320524f53e89433241c3"],["/post/6cb7680e.html","58ea84a5156948346eb25534639bac7f"],["/post/6d52b9f2.html","084255b2be3e95cc0d7b0322328cbba0"],["/post/6db0d89d.html","d6fd163d831d1c8e62c5d5ccee6d86ac"],["/post/6e80eb1e.html","ce20748e9d198388747c3ac8662d98b5"],["/post/6f3b3edd.html","fc17916788ba4d1bc7e7a8c8687e5569"],["/post/6fc3409b.html","c1227897484a15763c507eb4545f65b4"],["/post/703409c5.html","73356ebef7e00364a38013e31ba5fbe0"],["/post/7169c4ed.html","f724ada40d1ee87c79318d0926a0a229"],["/post/73136b.html","971da90977784c3583dd35167be991f8"],["/post/7410a832.html","fabc11992407e0a2e07eff1a0aead913"],["/post/742966af.html","cc2ed499dbc7c70f13cefd6019f1228f"],["/post/74479d01.html","9212cfbeeab7c9e6b2443da2bdb790f2"],["/post/74a4286c.html","e1e6c1bc9cecfafa80367f6e6e7b692b"],["/post/75794199.html","4ead4a5c81a7a49086805092fe33e900"],["/post/75f986a1.html","1ec57a87f1ba874d6fb0c10b9c7410c2"],["/post/76485a7.html","c9e53eb083effe1a999f59a9c180e992"],["/post/772fc02c.html","fe88313884683772187abeefe47e39d1"],["/post/792e36ed.html","3f1fade8e265eec37cd9dd36fc13a92c"],["/post/7c50967.html","0d55ccf459734667c7161b06980a7231"],["/post/7d8e4f2a.html","367c346348cec5fb1b0a43fee5d5ea06"],["/post/7ef8a98f.html","d0eb0022eca57a49b9c7ae6558aa112f"],["/post/7fe193be.html","f4228bf181c3cdd0172d82aabd3357a1"],["/post/879e9655.html","4b1d56f7f3125fd028a0af9b185def3b"],["/post/88e8ae98.html","2bf39f47b44ce216617c9507461e2bd2"],["/post/89873dd3.html","699c2583f5d85557ccb85021fca02a1f"],["/post/8ddc8a30.html","b9413b6ae5eefca209cf309736064f7d"],["/post/8f9cfad3.html","d7dee31ac19d44520f1f18c34b1b12c1"],["/post/918fcaa1.html","35d44e04a22fbc9ab2dbc9ab8d79df34"],["/post/92687617.html","472ca0eb68adcf36872b451fe7c1e1b9"],["/post/9282aeca.html","7912f400100a8bbffd0f01600e0aedf0"],["/post/9305c5f5.html","e298d825b7f2fc98766c581ce2911756"],["/post/94c9baee.html","5ebf1d44e16ce89fefb35b5d3429097a"],["/post/98804e11.html","31620035f02172b2bfaf4cac42aa95cf"],["/post/9a9a4797.html","07a4e3216232e395f5a4eba1ebce355c"],["/post/9c28a880.html","69722018b5ab6a8e5a9ed409ae652ef1"],["/post/9c649212.html","4ad76a035fbe62bc2bcb8e7a61a9b7de"],["/post/9d402b32.html","7fcd911a9d4502ee17971ea227a40d26"],["/post/9eb065c8.html","e5f536c8b6424a311096360c2641c687"],["/post/9f8e212d.html","1f17b77a89e613704c4c40e2ee6753f8"],["/post/a1751c09.html","5b1578652faba3d42f5395bd936d8cd0"],["/post/a1cef007.html","b8582ac1cab8c8af2ec146fcedc990f3"],["/post/a1fc03d8.html","70f2ad478fd52805ca330643fd059e4a"],["/post/a27e9acf.html","da975b50094ee4dcccaa498ebd7272ff"],["/post/a4c66bf4.html","d692231a221082b69770f197bea3bc5a"],["/post/a4efe87.html","7990826f9b3849770213ced651fd3140"],["/post/a7528411.html","92a6a281bdc522be006479f3360538c5"],["/post/a8759852.html","210dbd0d86e6f4f88ba4dc789c53aef6"],["/post/aa0a97c8.html","507780cf2ae68d015a079ddd46ba7b1b"],["/post/ab4ed95b.html","dbbfa15ad4c74e09b40caac58b27ebae"],["/post/ab720150.html","3407a59d70b140b2cb58b7026dd9e3c6"],["/post/ac92be99.html","f5a284db8c234492cb5118c87b2a4123"],["/post/acf6b02e.html","49353fa670eba209d68e6a902da463e9"],["/post/b0d6c7.html","1256b0ad7adb9fc5ebcb1a6da152f07f"],["/post/b3ee770c.html","d6c0b4b15a9947c12321c43ceef88c08"],["/post/b8ca3dfa.html","56f54191d2721ebe2bb53782fbcb9963"],["/post/bb7f8e97.html","17f15361ca34b98eaa862cb4c548d736"],["/post/bba462fb.html","d5f9c91c261ef870fe4fb5b2d393f70d"],["/post/bc8586da.html","f94e1cc9d06b2319dbffc9b26fff9e95"],["/post/bcb02c2b.html","58fda340694f66959fec63a89dba5030"],["/post/bd36a30f.html","452fbbe03ffecf220d94e81d2421cf82"],["/post/bde4b1f8.html","c52be1e9643f3d9a4c27de5bd139a414"],["/post/bea42f1e.html","fadbefd4c532c67b3d20875b35802197"],["/post/c1864474.html","f28366301f011ba537e198a8f4940d03"],["/post/c293d2b3.html","d2c99b3ce94e538ca6ebdbf48a7536e8"],["/post/c37095b9.html","e465c6aa6f6fe848a99cc1e5873c9505"],["/post/c5672df5.html","99697c086bacc7189e8e1c6e68a449cc"],["/post/c6d76e9a.html","3a935d981a0ddfc337ac6a82c863f74a"],["/post/c7fb8250.html","e47f3a388932f99f276c1a44a51754b6"],["/post/c938bbd1.html","82f02e1d5c5a77af785b8f7cc36429ac"],["/post/ca14c5df.html","4fe6f4a2f6bbf1e3e969425190bbc2d5"],["/post/cd18de84.html","7813f24b8d8c5f46e29162559d3465e3"],["/post/cd41dfb7.html","79b77349a795d10ffb01cdca0e9a2d0a"],["/post/cea184b4.html","b9f1fe1b258cc5999dc6ebbd7d15c288"],["/post/d120bd8e.html","d6777d7a79c1e1c1844e98edebd4aa13"],["/post/d50b784.html","269e5dfc78151b1436d2bbad5e74f758"],["/post/d6a5bd15.html","5e7f95a943800c1e3802e5daf65ad00b"],["/post/d73de254.html","dceb6f3e3245b7f5c64acc78395587af"],["/post/d81c5363.html","f079cd79482b6b8f76f435f1ffb54cb6"],["/post/d899bd9.html","c721cfe0c20ae4bf330fcd5a02814702"],["/post/d9083bc4.html","1d67ca2739a1ff8b892a2e4bff525f20"],["/post/dc981233.html","4b5fb34f58c5c24ea84c4f552fb4b515"],["/post/dea65d58.html","253f66e888068c08a457d3b01ec4c2d6"],["/post/df76d545.html","8d0243e29744e4ed9ffb108d50ac58c0"],["/post/e256d99f.html","244afa13bff3531266b35d1e0c524a1f"],["/post/e290dd8c.html","696ddcc02e0c24ea101289c08fff525c"],["/post/e3e37943.html","79f92e03048c3ed543601a364d9d8f52"],["/post/e583ed8d.html","ec35736811c3431106e2d3e254fcdfd0"],["/post/e5d75450.html","52c791834b68d7d5bf9a3b3c35bc1862"],["/post/e6364ca4.html","d4753ad54e789393e1ef3493c2eabf4c"],["/post/e7058b47.html","3a93e781a8658f6731182f3fa7c441c5"],["/post/e769f01f.html","cad5785132e81da1b897d17fc249986f"],["/post/e78ad34c.html","c524a1f57edf69ef5df66a2f30351877"],["/post/e8005312.html","0b3cf16ac62c86ff2c89a8f7ec0912d1"],["/post/e8ae7612.html","2825b72d92345f394fb853c4644a3cd1"],["/post/eae0b80e.html","56dae8720de144891ebb00b92d47fca7"],["/post/eb9ab36.html","91f70730114c4005c0ff24bcfef7a172"],["/post/f0b23c5b.html","0454aef9bbf842bbfa349405dd5c3e28"],["/post/f279299a.html","589974f59fba420ba9b14b4eba401a04"],["/post/f3d9c661.html","df21df1a07b6689ac59a2e0c7f5015f0"],["/post/f4bfd16b.html","880cfcabd635cdfb8dd3f395a5fde064"],["/post/f7b33ddd.html","211abcb63cc249ac7e4915deb0d911d0"],["/post/fb2f630e.html","9caf971a87fc28daa4e9640fd8254ffe"],["/post/fb5efb9c.html","76b62591638dcc5ce712ebca45a68f0f"],["/post/fbf7f335.html","ecb7f2102da5b66f69dd2aa3ca3a34a0"],["/post/fcb9464d.html","b996fa3dff36f73c386931f5f1681bfb"],["/post/fd581850.html","156e305787175432f198ca340c4f188d"],["/post/fdc06f3f.html","72f6ce963961a834c6d6ff21c1f476ac"],["/post/feaebfb5.html","2a0b5e8e10b2e8267545cbfbe378b10a"],["/sw-register.js","86f7276b345f4ef9a1cc265bd138c0d5"],["/tag/1988：我想和这个世界谈谈/index.html","0a52c8e5f0343b263be2300604be07e0"],["/tag/1Q84/index.html","81a2a420c7689d7ad514e04013aba0cb"],["/tag/2017HDU多校/index.html","69c8b775836b7df4d629488dedebf70c"],["/tag/2018HDU多校/index.html","0874ff9868c79bd656cbabed6b42c343"],["/tag/2018寒假集训/index.html","dde87ff40a859513b3a6113507a4828c"],["/tag/2018寒假集训/page/2/index.html","a36a0e598d7f9e3ff6962be9cb0af3e5"],["/tag/2018春季训练/index.html","a7f15275981b45f05dbc914a1fc2d41a"],["/tag/2018春季训练/page/2/index.html","e23e0172d4c43c675a4fe597302f5247"],["/tag/2018暑假集训/index.html","2750cff52ec9bebe954e9b49f2058b84"],["/tag/2018暑假集训/page/2/index.html","307e5e1d1c936bb297f8e801f45d1064"],["/tag/2018暑假集训/page/3/index.html","32233a645ced446da045e4fafac09f38"],["/tag/2018暑假集训/page/4/index.html","21b44eda48c35e9f5c969adcfe9c3170"],["/tag/2018暑假集训/page/5/index.html","b21a5d226e8f1871eea68a1a489b49fa"],["/tag/2018暑假集训/page/6/index.html","2190f5e586f1d687b5ccb46b702563b4"],["/tag/2018暑假集训/page/7/index.html","293be767e2b6e96c76ec30e9fa47d7f7"],["/tag/2018暑假集训/page/8/index.html","bdf10cfd00db52a8a4aec2be4ddfe156"],["/tag/2018暑期选拔/index.html","3f9648c3bedb2e7707bcd8f713059b75"],["/tag/2018杭电多校/index.html","d359bdf7872604bf36f24e92d852262d"],["/tag/2018球季训练/index.html","ae6d60486e31a7c86cfca807128f1611"],["/tag/2018秋季培训/index.html","cdce9581876dda6cdac4269e346aa403"],["/tag/2018秋季训练/index.html","738f33360d873dbee48b8eeeeb1c213e"],["/tag/2018秋季训练/page/2/index.html","929e51ee19eacebe57f366014ad0d2d0"],["/tag/ACM/index.html","a49b2d3cdb9653a9fcaf178d756aa997"],["/tag/ACM/page/10/index.html","beac0b934900dc317b978477744f102a"],["/tag/ACM/page/11/index.html","49a337ef341c92db5ad1b02208205472"],["/tag/ACM/page/12/index.html","aca829f9e451f1071cb38bb92f5fb027"],["/tag/ACM/page/13/index.html","c77685cf8201b590776f3c389bd50298"],["/tag/ACM/page/14/index.html","b2af92203bafa1adebe28effeed3fafd"],["/tag/ACM/page/2/index.html","ef56f8519a965f6172e6eb04e0bebd3c"],["/tag/ACM/page/3/index.html","07ffca30f14f20055545a06fd425ea2a"],["/tag/ACM/page/4/index.html","5fb19e2fea9458f79d5efa51e729231e"],["/tag/ACM/page/5/index.html","8608fe926e117767811b2f400073e617"],["/tag/ACM/page/6/index.html","1ef9b38d73a25cd321599869b9bdb585"],["/tag/ACM/page/7/index.html","1eb698d4f323c752bf51821fac2ac21d"],["/tag/ACM/page/8/index.html","6c3d2ae31dddeea7bb2f9b6874ce637d"],["/tag/ACM/page/9/index.html","547d386ffe22488c71316cb755218b4b"],["/tag/AWS/index.html","d038eaa64ff23e5027a381fed790826d"],["/tag/AtCoder/index.html","561821fffb34648580f1f613a4ad7df3"],["/tag/BFS/index.html","170679e45d6b55c7dc45bb270c2b10c1"],["/tag/C/index.html","3599b8fa29d1ef5c90eece77a9443b9f"],["/tag/CSU/index.html","5054fff85e2b5db843526d8c2a1ed846"],["/tag/CSU/page/2/index.html","580760fe9d88a0bc7df301b84f320f96"],["/tag/CSU/page/3/index.html","fb64000a2712640de7eb3bd0b3dd8a52"],["/tag/CSU/page/4/index.html","23d8c38cf02749b0ad0e93b3cc78bf14"],["/tag/CodeForces/index.html","6f15a227dff276c0698a690014439e73"],["/tag/CodeForces/page/2/index.html","e06acbe4b7a326b44d99489f44204f3c"],["/tag/DFS/index.html","3440122939ca1c322a47dc152487a0e4"],["/tag/DP/index.html","0d497609facb301422a81091c271a90d"],["/tag/Dijkstra/index.html","73fde44f5cace55b1e4dc266aa77cf71"],["/tag/Flask框架/index.html","44e1afbcc6d5585118a7dd98f25c8015"],["/tag/Floyd/index.html","90ca05e22373e039c2ff436a3dc32da9"],["/tag/Git/index.html","7f1056ee31d940771bdd11a5c86ff394"],["/tag/Graph/index.html","fce833d53e2b60e1cb11e04e1cc21372"],["/tag/Greedy/index.html","5e0e57a81beae0016840a9ee83afa6b3"],["/tag/HDU/index.html","7425b8f82d12ba39b7d9ffde21806a25"],["/tag/HDU/page/2/index.html","b94724b0e3a7981ee415fef3540dd7a1"],["/tag/HDU/page/3/index.html","45c923a0045193b64f935d982ba8562a"],["/tag/HDU/page/4/index.html","99080aef942e475942b083799d67f2a6"],["/tag/Imitation/index.html","f4d326b31915c72649fa854cba65b7ab"],["/tag/KMP/index.html","6a94edc76d624c5716eb70f8c5d17b71"],["/tag/POJ/index.html","66fd36cdc38756b868812c06479b4e11"],["/tag/POJ/page/2/index.html","b8b204794266514a0800f64e31fb9d16"],["/tag/Python/index.html","2ed0cf4e5a1928a990e5c5687f396a3c"],["/tag/SCU/index.html","d627253d694aeda4cf24ab4732ed06c3"],["/tag/STL/index.html","72e59780394e7ed0a58f66c578f62018"],["/tag/STL/page/2/index.html","8c3cdc2c399be3dfc618da70fd698efc"],["/tag/URAL/index.html","f078b6a72a1e36e4cb74bdad04575f50"],["/tag/UVA/index.html","b55e6c03cf25b77e96302033e0f6cfcb"],["/tag/UVA/page/2/index.html","311e65471ef5982f6ec5e5c56063a7ba"],["/tag/UVALive/index.html","ce328af59707d51ee3cbbc9204b8a76b"],["/tag/VSCode-Git-生产力工具/index.html","2ce311d1e0e0706162bcb522e2732635"],["/tag/VScode/index.html","e14766c22d11833dc115ea998f85637f"],["/tag/ZOJ/index.html","dfef6063caecacaadb5f4005afbdd3f0"],["/tag/math/index.html","0441a425762996474e2c058c6f92f4da"],["/tag/test/index.html","e740009df4b200287d30639733bea9e9"],["/tag/不得贪胜/index.html","b5786c1a0434013411d58b3f7f5c3717"],["/tag/东野圭吾/index.html","d4e7b78177ef698eff96f8a483f4f4a3"],["/tag/乌合之众/index.html","5a34769acad09fd67d3b844e1b0ab9e3"],["/tag/书信/index.html","17a9ea6aa2fdbdf7a0fff3f248a001b7"],["/tag/二分/index.html","226c88457896d5d82894f36361607666"],["/tag/亚马逊/index.html","096fb5a24175e2e65f8097b2c98b61c3"],["/tag/亲爱的安德烈/index.html","c0d62c9e448ef480d27191ba34f04209"],["/tag/位运算/index.html","04660f01da6d121233f6439aa368fa24"],["/tag/几何/index.html","5123680de9ffabcde8db5eae448ded39"],["/tag/刺杀骑士团长/index.html","81acd7f1c453ced3d17df54a3cfa3f58"],["/tag/前缀和/index.html","17c2079eb5be1bc87cb17f85af296302"],["/tag/区间DP/index.html","6b6d59d696b26f56cba8195d2fc7b610"],["/tag/博弈/index.html","4af9c3225c4f3035c2626bbb9e0961d1"],["/tag/历史/index.html","a5c1dea45d87c003a42e78288e1bc813"],["/tag/古斯塔夫・勒庞/index.html","f6fa713d050877efb3ac18cf90189937"],["/tag/图解密码技术/index.html","4fc74d76c5b46eee5069d9312e230b6b"],["/tag/大数/index.html","a1bbd11d6035698b844f8bcb980bfdd2"],["/tag/天幕红尘/index.html","27d1a38ab47587fade4838a023dc9101"],["/tag/如何阅读一本书/index.html","e75e4acbe44b934ec9d31b252779d7b2"],["/tag/字典树/index.html","5514c77e7025d774caf0f8449b7e694e"],["/tag/字符串/index.html","060dfc4717440e41188dc2308237e524"],["/tag/字符串hash/index.html","90a220c80c5fba5b1553218b9b1fec76"],["/tag/安德烈/index.html","d23fe21e4dd24292cf30dae8bca030c3"],["/tag/密码技术/index.html","f8fad918fbfb162cbc2877ec668ad347"],["/tag/小说/index.html","0383c4a7399ab4b9044c01cd19a28a2b"],["/tag/岛上书店/index.html","17ab9d4f367fbcd66bf0b10130f24a01"],["/tag/并查集/index.html","e6d0fd60b54f81b1456391c5dcfafdcc"],["/tag/待补充/index.html","222732b9c388c2990f9a7aef7d1cffd1"],["/tag/微观经济学/index.html","c95fd3404b8c093d829761eb6f94ad2d"],["/tag/数学/index.html","dff66b96804aeadc84b7365977bb6626"],["/tag/数据结构/index.html","bfd566785471eaae6b0c2d26af72b4c2"],["/tag/数论/index.html","2d71a5ad74a092dd4bd792d74e5f3c67"],["/tag/文学/index.html","95bfd7cef4c883ad1c3042684a18ac04"],["/tag/文学，小说/index.html","0e070f5bcad80c74afc29a4286abf866"],["/tag/旅行/index.html","cd05829ab1b067b5faa0de2065552f71"],["/tag/暴力/index.html","e5ed3894815271e0382930fcd2cedc10"],["/tag/最小生成树/index.html","7a0056574282c6e399a68aa81890a99f"],["/tag/最短路/index.html","a1fa9a225dd4230be3baa3a04d86ce53"],["/tag/最长路/index.html","89b7db8e90f4b27848b362c6cf5d59cd"],["/tag/本·伯南克/index.html","c3c7ff8c3850d4875f0a74f045692029"],["/tag/杂文集/index.html","64aad0904f900bbccb7a867cc12ca9f4"],["/tag/李昌镐/index.html","9e06cefc931ce91484f8883e6db6ae13"],["/tag/村上春树/index.html","4bfdbd1c4338a5eaceccaf8855acc644"],["/tag/枪炮、病菌与钢铁/index.html","fb6b9153ed6c69a8c45fb843a397bedb"],["/tag/概率/index.html","6d824f535d61f053b9ac2bcb06da25ce"],["/tag/正则匹配/index.html","427abb96ba853f11aadb4abd8f3c38a6"],["/tag/水题/index.html","669e7888926be3a8957295eee27f454b"],["/tag/游记，武汉/index.html","81e7a60cc182b8b76e0e13d51650176b"],["/tag/演讲/index.html","61ccce3b01f4d96ec8a395bcc52df7aa"],["/tag/矩阵快速幂/index.html","ba2cdfe6d65649230cdb22909063258c"],["/tag/石黑一雄/index.html","5ec1ab36202050da17916627d8849341"],["/tag/社科/index.html","eb0eb71714da983111292c3d16a0a698"],["/tag/笨方法学Python3/index.html","452b5d319c3f6797aab47421119737e6"],["/tag/算法/index.html","adfd3d9b156b51a8aa29b0db0a40a014"],["/tag/算法/page/10/index.html","b611332e72862810ea79bbd31564dde7"],["/tag/算法/page/11/index.html","93e87fe842e7bf7291f1559b25d083f2"],["/tag/算法/page/12/index.html","7725608845702bc42323feb8b06f4153"],["/tag/算法/page/13/index.html","43e13d4f542b1f67221e9ab09e23bb2e"],["/tag/算法/page/14/index.html","905da4801791caf4d65a129b4c0a4402"],["/tag/算法/page/2/index.html","dfe6a89d3754162eac17891c933f7fe6"],["/tag/算法/page/3/index.html","51d84dac94aed8c315ba7fb0b347dc3a"],["/tag/算法/page/4/index.html","c0db186ffb79ee5f583a7a05b6678660"],["/tag/算法/page/5/index.html","e7cb6a8318dc04fcfc27e884f162136d"],["/tag/算法/page/6/index.html","022c229f1e85524101b8e3cddb6aebcf"],["/tag/算法/page/7/index.html","700a59e722094be1cb11988ef299214e"],["/tag/算法/page/8/index.html","d7012fef7995f2b7c6057d13f8cef723"],["/tag/算法/page/9/index.html","b17553e6467a41cce25c6eefd5f798f1"],["/tag/素数筛/index.html","be093a2f3b2feb858f8d428f1b9a4eab"],["/tag/线段树/index.html","5f825cf11fdffce93e6228e58ea06d0f"],["/tag/线索二叉树/index.html","4ee7ff36d6b07f3257b744bab896a403"],["/tag/结城浩/index.html","8244295e86555de44937faabf5c7d148"],["/tag/编程-C-课程设计/index.html","23363ae6f8f051b45924635d9c376b89"],["/tag/编程/index.html","38a944e4a715b90f57eb55f960ca2a52"],["/tag/自传/index.html","a141d2e95024746b7b1c98ccf8a2a4fe"],["/tag/艾萨克·阿西莫夫/index.html","687854a87b65f32cb86484daec106bda"],["/tag/补图/index.html","7bc1ecac0840a0b883aefd5c3f350298"],["/tag/规律/index.html","730698e7eb7911ae457051e37baf7c23"],["/tag/解忧杂货店/index.html","0352271fcb1866650d91c75130b18037"],["/tag/计算几何/index.html","d08151b1e300a82903689d3cc13689da"],["/tag/讲座笔记/index.html","e2273b12fda49fd5fa425bac45cced1d"],["/tag/读后感/index.html","c268e53ef54b633530155c6d6e4fae58"],["/tag/课堂笔记/index.html","983abcba9823f6795a118c64e1b94f34"],["/tag/课堂笔记/page/2/index.html","b35ccb33c9bd886fda66bceb336d135a"],["/tag/课程学习/index.html","25f7a7e225fb7d49678a269efc76279c"],["/tag/豆豆/index.html","05b43fb73ed600cb9fcfe67f0d366074"],["/tag/贾雷德·戴蒙德/index.html","1538aad85f7a6b5471e92d9a352a4b0b"],["/tag/辅修/index.html","0e37cc3c22e53e03d8ab7a82fa812ba6"],["/tag/辅修/page/2/index.html","a1f1fb601ebe2856f903409ca744580d"],["/tag/递推/index.html","634a2417ef29839ddf855b2cf2f889f7"],["/tag/野火集/index.html","e87f670d9b340146492cce7f05aa76ee"],["/tag/金融学/index.html","957a9d60ef8c21bde9c059c33132be06"],["/tag/金融的本质/index.html","8d65862961e56ff9a2264ba2f9314500"],["/tag/银河帝国/index.html","9bd6d593518e396eacc48f8da133fd36"],["/tag/阅读/index.html","5d7bb820bc609d2a81dfba4ac9faff32"],["/tag/阅读/page/2/index.html","72471ca274410dfcf0ac8b763e17e121"],["/tag/随笔/index.html","12aad30266ca60294464517141aefd65"],["/tag/韩寒/index.html","bcec97a640f67cc4ff1f0f1ec77a39b5"],["/tag/龙应台/index.html","6e15bf70529f0303599b061fbebaa847"],["/tags/index.html","ce2b4b1c8d8d0e4cb130b511acb28696"]];
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
