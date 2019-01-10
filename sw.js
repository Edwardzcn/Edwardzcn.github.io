/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","83f562066af7795724958774bee3f047"],["/archives/2018/01/index.html","3931600a4c38dc7640cdf8372665a84d"],["/archives/2018/01/page/2/index.html","47d53cab58ae2527c26cb69619526223"],["/archives/2018/02/index.html","678c324e03ef599053f6edee2156e203"],["/archives/2018/03/index.html","d386d16fe3b04abac979c3d5e0c49eda"],["/archives/2018/04/index.html","1655df4cec63f1c1340f07f2ef826345"],["/archives/2018/05/index.html","e28d528b973370c21033c3d6771f7881"],["/archives/2018/06/index.html","3a719cb8c084a0932e7760a73b375fa6"],["/archives/2018/07/index.html","b49adc203b0815300609963a96a95dfd"],["/archives/2018/07/page/2/index.html","dd0866b1f9e5315fdba7f61f49521d4e"],["/archives/2018/07/page/3/index.html","f563c398e8b342cb557343e013e979dd"],["/archives/2018/08/index.html","76d4996dfe6718b47db07c5c0f6f6fef"],["/archives/2018/08/page/2/index.html","238760e8beef8867e34d5ae3d8fdf827"],["/archives/2018/08/page/3/index.html","0e6a4d2ae9c9e2f3b7273dd2d9499b24"],["/archives/2018/08/page/4/index.html","3736feac708bf7b8040a113c686bf133"],["/archives/2018/08/page/5/index.html","9a71e07e2fe8d5dfe64504987efe275f"],["/archives/2018/08/page/6/index.html","7554656d8d7375c05801eafce545b285"],["/archives/2018/09/index.html","074982bd3b99b219ed0e4160ceba7972"],["/archives/2018/10/index.html","f958f1da0cb37d73fde9a7ff16b1faff"],["/archives/2018/10/page/2/index.html","b84fb44b20ae32c9e441984a00b23a0d"],["/archives/2018/11/index.html","b7d05c9f27b4b74e9ed75dc6de761573"],["/archives/2018/11/page/2/index.html","a3c1af0ce8d4307ea2f5b528d17f9716"],["/archives/2018/12/index.html","f3154c51ecc2c20c8d0679fae162db47"],["/archives/2018/index.html","d34336e4346e9dc069bdfdf6fa175885"],["/archives/2018/page/10/index.html","d1c6fcfea2fbc1c5786255b34556df70"],["/archives/2018/page/11/index.html","7ee0499aa22ccceae952d93b8a61edaf"],["/archives/2018/page/12/index.html","9c1c8886e89283be5794c95e4a23f3ba"],["/archives/2018/page/13/index.html","5d2aa1b09a1f58547c55d6aff58ac6c3"],["/archives/2018/page/14/index.html","8ef9847842ca196121140285841ab93f"],["/archives/2018/page/15/index.html","021224cbdbfe701ade0a918fe23b8d72"],["/archives/2018/page/16/index.html","2a085c946a9424f1547636c4b8859c52"],["/archives/2018/page/17/index.html","c8f28903866f4c4b55f082f7eb7f2f91"],["/archives/2018/page/18/index.html","ecf7e01d114b94d36df416a6f168aff9"],["/archives/2018/page/2/index.html","649528bdc564b3e4842c3a4b39890ce2"],["/archives/2018/page/3/index.html","ff3008da9e29359d7dd12131d217d98b"],["/archives/2018/page/4/index.html","f281c792f47505294eefc8ed7f7ae62e"],["/archives/2018/page/5/index.html","f7cd35f46fbff6e8c18a7a9ab7057e4a"],["/archives/2018/page/6/index.html","fb84427898d31ff58bf8d17c51ebc1a2"],["/archives/2018/page/7/index.html","5c9e729c62cff700555b1ee92fde23da"],["/archives/2018/page/8/index.html","3885abb94353effeeefc33b3cf678e76"],["/archives/2018/page/9/index.html","ef2e256664775eefc7fbccbce4ea8736"],["/archives/2019/01/index.html","ff561be7b40182618029474ddd211453"],["/archives/2019/index.html","e8ad89e6d0a99bf13d61dfc1c8165e3f"],["/archives/index.html","8945aa5779e8cc8af6e7e80620508d84"],["/archives/page/10/index.html","902ac4aaef74bf23e1de28bc2067f3ba"],["/archives/page/11/index.html","1211e06065fd93ad99171bada5029433"],["/archives/page/12/index.html","f19ddb29f4809c943dbaea5e2d493ab5"],["/archives/page/13/index.html","924966604c92f79ee417dc5788d99001"],["/archives/page/14/index.html","a895dc4a4dc2266449595ab97244fbd6"],["/archives/page/15/index.html","219b14e8599a866b36920b3eca3b5ac2"],["/archives/page/16/index.html","ec89a6f46c2656ec8ef801690f61c810"],["/archives/page/17/index.html","aa27ac6fcd363686663949bd791643e2"],["/archives/page/18/index.html","143aa036c5ad08df1c01a0155f5a4cb8"],["/archives/page/19/index.html","bdabfdde3d74d6d1ae1e5b21ac70ed25"],["/archives/page/2/index.html","e7f4e46884b707fc8112f8e2ccd5a61d"],["/archives/page/3/index.html","fbf935676e7d878e1dea79ae5b2753e3"],["/archives/page/4/index.html","54314b6df8cc46b6bd26787b935ee56f"],["/archives/page/5/index.html","0511d737777da2d00278a696746ca78f"],["/archives/page/6/index.html","b7fcee32837b2eacaa6b2000bbacb87e"],["/archives/page/7/index.html","e465f90401c7356658a6c1f60a616253"],["/archives/page/8/index.html","b7d658d1a76edbe1b6bc313da2c7d2f5"],["/archives/page/9/index.html","0c3075a83df92561a952de6337977265"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","e801c4e6386bbb9929b9d34cb89f707f"],["/baidu_verify_ZzhwBFUe1V.html","6d6df05c5cf4d91fda99f186cae07c4a"],["/baidu_verify_dw73Nh8OEw.html","a443ede9005129cc0305ae8f8cf547e1"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","02fc9ddbc9cebab2bc6488281293fb0b"],["/categories/旅行/index.html","07c137b871b4c1710a650623a130de11"],["/categories/编程/ACM/index.html","af3d40ee1b5981724a0af28a8b7d3645"],["/categories/编程/ACM/page/10/index.html","b13e670f6d95f859edad40a5fe81868c"],["/categories/编程/ACM/page/11/index.html","76d95c963e4b2df508eec07fe759bb86"],["/categories/编程/ACM/page/12/index.html","29e9cd86bc26e4b70cc2eff7d26176c0"],["/categories/编程/ACM/page/13/index.html","0f48dd2f46610c34ab7a62f46006b598"],["/categories/编程/ACM/page/14/index.html","022db93537d2f9f7b1caebd9726ecfa9"],["/categories/编程/ACM/page/2/index.html","31646b33059ab9132f38e0032052e1de"],["/categories/编程/ACM/page/3/index.html","4598eb22f23609dcbfe84095a11246ed"],["/categories/编程/ACM/page/4/index.html","98319a7c10a8d39924edcfae78e8869a"],["/categories/编程/ACM/page/5/index.html","4723f5805e106472bdf8d4c1189203e6"],["/categories/编程/ACM/page/6/index.html","a4e59d1f99ed35d9a478e564b4089a9d"],["/categories/编程/ACM/page/7/index.html","5c17a643fdbb68eb2b90a7138ea1b141"],["/categories/编程/ACM/page/8/index.html","2aa8399cf0a7aadf12baa3ee67347086"],["/categories/编程/ACM/page/9/index.html","c2b0fa34408d0b162acd217825f5419d"],["/categories/编程/ACM/数据结构与算法/index.html","85b5a987c589bac9d4317ffb2c378012"],["/categories/编程/C/index.html","bfc5cdb78dfa0791a1fd11dab05a8272"],["/categories/编程/Python/index.html","e41781bf466f034a1d2a22d932162a31"],["/categories/编程/index.html","b1eb24c08bc0d41594935828835a6152"],["/categories/编程/page/10/index.html","2f53fd8a49ff8e1126b2eeb65b21906f"],["/categories/编程/page/11/index.html","2a12c1f8c79377cf0c211cd8dd28c02e"],["/categories/编程/page/12/index.html","933f1cef303c9d97d24de8850b9ab8fa"],["/categories/编程/page/13/index.html","fbd4e3448ea468d7c191c51649150cf8"],["/categories/编程/page/14/index.html","b6c3ce31563a337b985bb5bcb7b8ff8f"],["/categories/编程/page/15/index.html","37aacc2424f4c639bb825f3d27a8487e"],["/categories/编程/page/2/index.html","b36aab129325fdda70a8531f92aabca5"],["/categories/编程/page/3/index.html","6d4753deec196d1cfa5bcdf5c2901c06"],["/categories/编程/page/4/index.html","d9f1c4d0c8d158e8db1631799a9399fc"],["/categories/编程/page/5/index.html","c73b702d2df7cbaa277aab69c051786d"],["/categories/编程/page/6/index.html","9b9462e14d9b9941185f2bfacedd0025"],["/categories/编程/page/7/index.html","fcf5daf18ecc7d814f3037af0b878fea"],["/categories/编程/page/8/index.html","70c1a59c36517b040dee1f3e72cbc86c"],["/categories/编程/page/9/index.html","e02d54799a9706ed3b111d89e4b32a55"],["/categories/编程/密码技术/index.html","962ea63a4500c807c6f26378ac690df6"],["/categories/编程/生产力工具/index.html","25561542d981fc8c52fa36311eb35fc2"],["/categories/讲座/index.html","fcfb32b25f4c4f8c3782305770c689e9"],["/categories/金融/index.html","05da8384a864225b253c25ee2fa9a276"],["/categories/金融/page/2/index.html","5077feb111f205b2f9c5df096597049a"],["/categories/金融/微观经济学/index.html","c79cfa52dd8a723c7c4844b8546e9258"],["/categories/金融/金融学/index.html","d8015099aa1925747aa7f89738c31338"],["/categories/阅读/index.html","753031e262b48fde868ff15f80a8cbfe"],["/categories/阅读/page/2/index.html","222fb82d4b706fa1712b3798a22b334f"],["/categories/随笔/index.html","422fc8b1ad0c435c1ae9abeccd802bcc"],["/css/main.css","510ca09a62109d0659a22354e47222ee"],["/friendlink/index.html","8f8b79b735ccbc7215d515a12418b2cd"],["/googlea873f713657fb5dc.html","54e0eb532f868be16cbf39f981d4c1f0"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6d0142d046234c0e1531e283992c6e3c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","96e2b3a1acbf14435d6fc3b442f53e1e"],["/page/11/index.html","f51d1a09dacf361f7b52f3b8312277ec"],["/page/12/index.html","4b5dd1fa18372da37992878381f24cee"],["/page/13/index.html","5df9462a3bdfb077b244ea8978b6e1b0"],["/page/14/index.html","3f394b13e1e524880636e0279a4b902e"],["/page/15/index.html","215e2d5094aba662e410fd810e9d8d87"],["/page/16/index.html","f3fe480718fcc0c383b11af20950158a"],["/page/17/index.html","5474e2b6ac6c2f93fa850b45c8ee79b0"],["/page/18/index.html","4789908fe355da9c2c05552f34bd1381"],["/page/19/index.html","a4f148ba4c9fcfb75fa08c125adb035f"],["/page/2/index.html","e50c72b290a9d3491aa0369e297df645"],["/page/20/index.html","b6a372a7b2465c5571ad6a814bb5381c"],["/page/21/index.html","49446f0b8eddf42c13a02166582fac99"],["/page/22/index.html","945bddfeff7abcf5f00f1a06f72307e9"],["/page/23/index.html","8466ac53b74de0ba3e7432d1bd86763b"],["/page/24/index.html","98d994bf1cf194b69ae12e422849c83e"],["/page/25/index.html","9f583cdf3bf952ef19bed8abe6cdb2af"],["/page/26/index.html","56f41f3a2210047d7fb64fcf5ad891b7"],["/page/27/index.html","60d781338e135fa5c1e92cc2cb889d53"],["/page/28/index.html","36da6b00571a79d4f0ffa4520d172d28"],["/page/29/index.html","218f6cfa7b962d139a08edb18e56454d"],["/page/3/index.html","d387608e2207840870d65bf0cc9042ec"],["/page/30/index.html","947809f97fc3745ae90c5e0bf732252d"],["/page/31/index.html","f76c348b09f7a99dc9ab65deae1c5529"],["/page/32/index.html","ba7ee860d82d9e3ccb4a0126a5237be0"],["/page/33/index.html","297a99398b9362f557f03d65e48f64a4"],["/page/34/index.html","9ac7767d6eae16262567490b051b1bcd"],["/page/35/index.html","ffc3c29254d84eedaf4e00753582ded7"],["/page/36/index.html","93a205a61328583d62bda93f9d431ab0"],["/page/37/index.html","356e4108517d5560dac0eb1530c80e26"],["/page/4/index.html","a560be2aa1a3956b22d3f7fed8484dc2"],["/page/5/index.html","f2da2f3bc3f092608470f3086b844b85"],["/page/6/index.html","e767febbb6a6eaaf383a5071ad4fe800"],["/page/7/index.html","fc85eb8da03e0e74bb836888e123505b"],["/page/8/index.html","981229e8685883108758660194bf8966"],["/page/9/index.html","f26224252f9bb06a25e204caf9b5a9b5"],["/post/104a4c5d.html","51a7e835f734d4a36738d7ce81560777"],["/post/109aa3c8.html","13fb4c685740ce4163212739b419a339"],["/post/11246bdd.html","0ed6b52ad677849fa8b2e72aa06b6ca4"],["/post/1233e925.html","34232601ab8ce39b5ab8f7011bf78950"],["/post/1448d9c8.html","0246f51f4fc8b5f7c162c7983d382396"],["/post/15db1cd9.html","327607ce2f2cfce692779c086d0d11ac"],["/post/16b5efde.html","238735ec5b4493868aae6d23a7deed02"],["/post/16fa37a4.html","779c9bd0e95b8ead25ff0c000481f4b7"],["/post/184fc5c7.html","e956f1b68a37abcd36301c7bb4dc5a48"],["/post/19e79191.html","23f70b12dcf382e039eb07fb061fe87e"],["/post/1b7db6f0.html","e8c61cd575965821c82ad6f7243e1349"],["/post/1b7db6f0/1.jpg","e892edd695b5ec40519adebff4317a9f"],["/post/1c52564f.html","69a2702bbfe3cfb3208c0194d75d2d70"],["/post/1dc46f40.html","c8d150f2362d4db6caf00cf8b75a53ce"],["/post/1eeab2ee.html","e8267f30abb53f07c899680a3bf932ba"],["/post/222505fd.html","c8b1fee90d0b17075f683b8da19b2fbc"],["/post/23f72a93.html","800daa85540e3517e11b4eccf4734278"],["/post/23f72a93/1.jpg","04567b83fe6a71e174c95d19b3e4f2f7"],["/post/264a9c89.html","91cdb2d2cf1aa238f7d5d6264f7e44a3"],["/post/265c0f5.html","3dd5a89bc34208e23f7ccc5f23f626a1"],["/post/26fa4dfc.html","a23e05fa9a024b0c102b9b3f8b6f3927"],["/post/26fa4dfc/1.jpg","5e84db6a8e4e6a2d9e95e24dc82d95dd"],["/post/273ced06.html","1438c18e23e5b6b543209a6a2190e501"],["/post/273ced06/1.jpg","edacf40693f5f5d66e9ae0dd3f235dd0"],["/post/280fbdcb.html","cfb21ecdf03758ae7086e7a36f9236b7"],["/post/3090aa13.html","9e711f7155e42322093b12f3106da5bb"],["/post/31a770a5.html","b637eac9fffd40b5c3468774af8def56"],["/post/31a770a5/1.jpg","ad114f4569e30c88152eef39349a165e"],["/post/31f89579.html","d94e2a4fd3579900a24acf051924ba75"],["/post/32dc51f4.html","81bb31a578148102d9e33ecdb9cbb31f"],["/post/34a049ac.html","a34e4f39ecfb903b2e1493e7da2d4373"],["/post/34f53a10.html","ef930de5f95465914b2b32fdd42a5773"],["/post/36bef409.html","5dc89492a717e5271c3786261c4346c3"],["/post/36e5881d.html","765116a036ced93fe0b58a9a173a230c"],["/post/380486cb.html","f50b7b1f1403ed7d723a48c43faa39ea"],["/post/38f8b110.html","1d65189a648e5b5ce09a88883c94d361"],["/post/3a3eaae1.html","29008ef67bee2b09c97585d2db12628c"],["/post/3a72081e.html","9041fa313ae72efc38f9401ba0fa91d0"],["/post/3bc7f503.html","902baa1c313692a051ee4927a1acc2f2"],["/post/3c57c5dc.html","711d5d591ca8a7cc2435bff8df737a4a"],["/post/3d71c64b.html","9c71aace8c26c6c8742d0cdc0b2ee12f"],["/post/3d8072b.html","5d26cbf80b8c91591215cb5b1ae16a22"],["/post/3e6878ac.html","8665da8d64913a7300376f04aeee6ec9"],["/post/3fce0650.html","13956c1430d9552f55a5a8286d3fa714"],["/post/409dbc1a.html","74c852bbbff2d7dbf14a47793b47a5ff"],["/post/40dfaace.html","13c453246f4b862dabe3e871eb591f0a"],["/post/4255f31a.html","21ced73621e34639d56ae0c253b67326"],["/post/42a619f7.html","331bb845dc573f0b55852ad96eb924eb"],["/post/44505a5b.html","207006492442139869510aa8a23c0bc9"],["/post/448da703.html","b22459f32cb948a9d67016756fef2092"],["/post/454c2118.html","8ffdcf0cbd8594ce57cc1c524d754c23"],["/post/454c2358.html","92db65288b90649d75645e78a88d3875"],["/post/4773b69c.html","4ece889d97125af81ff51353fc67c47f"],["/post/47b391f2.html","e0548905ea68a52f3b90311141073805"],["/post/47b391f2/1.jpg","9cb0fa37cd89226318c25b75390804a3"],["/post/481e8abf.html","2443258e4e51b2f9d3a6d4d3ab088711"],["/post/4b15f9e3.html","77402d424c1dd4cd4ad34416f4170efb"],["/post/4d6a6b27.html","cdee312296494aa6334b207092b9d0c3"],["/post/4d6a6b27/1.jpg","03afc8a023bea763338085f46bd7eb33"],["/post/4db7e28a.html","3311abd6f48dbd6c1a9eefca14353674"],["/post/4dc7502.html","41c10cb733d387e155833f96786b1772"],["/post/4e876bc2.html","61757f6f4fd457eca69fc0fd641dd861"],["/post/4f352d.html","53fe935a66e851629bbf5fb63e939507"],["/post/4f8fe65a.html","e63d03fd585e2074f5d096044ee6044e"],["/post/4fa396eb.html","a45b33d06fcfdf63d392fb6a876ff859"],["/post/52730f61.html","e9b27473c818510c86a308e95d378462"],["/post/531de0f8.html","19caf25e73d9bdaf2b3258377a01ce32"],["/post/5555df5.html","cc43ef3e1ca123f243c831121ad2ad86"],["/post/57bfde8d.html","39a6f364c27495d07a0ab5c3a26ecf00"],["/post/57bfde8d/1.jpg","adda5198d7a147bfe8d448658c6d24ee"],["/post/585293b8.html","3833e145644b6a9fba339e4e2610c763"],["/post/5aa5290d.html","c2a3a6f11eb59c719c2708abf5d96116"],["/post/5abc6d45.html","443523cb468fe29222b699e5376601d3"],["/post/5c86d06a.html","e5183946ecd76cdf2e0b69f524504f4f"],["/post/5e189593.html","9eb74e3b5a67ccc4fa73ad1c0420d92c"],["/post/5f2d4a77.html","1b1f55aaef616db52406115009084546"],["/post/5f341cbe.html","d00eb21e4f3d9f1cd8063cfdf811635c"],["/post/60850415.html","eb74ef308ff9c4ef39d2f5ad490585ad"],["/post/611dd122.html","2165ac9998c61255654061a061a3534f"],["/post/62cb42be.html","d3b30d801c86e2006e3d94b6a5a6fb7c"],["/post/6501181e.html","64726b4ed9e339854e74faaa5d8f3f47"],["/post/66258384.html","c3f770c236fa354538cb09ce561a36ed"],["/post/662b8b80.html","db247ee5f8b6c3c38dd915cd70ad2435"],["/post/677d0fef.html","adbf62e30d8a5339e7cd6352dd630d05"],["/post/685bcc20.html","17e8498774c6a1656713db9ba80562f7"],["/post/686dc27c.html","4e855fbc9911eae3f573969b3d682757"],["/post/686dc27c/1.jpg","cd40edc5ab678041369d4a99a699e938"],["/post/6c71e418.html","058e09f0d255f460968333b6bb7ccc24"],["/post/6c71e418/1.png","e1c0066fdfd9e6e620e5f6e59d26422d"],["/post/6ca1eed5.html","6af46aad8e7148f1ad01e25ce3357bbe"],["/post/6cb7680e.html","a5ae46d265bffc160164aa1a64ca16b7"],["/post/6d52b9f2.html","23ba68db79878d27c4552200a5034c52"],["/post/6db0d89d.html","141bb03a15a6808ea3be1261d7932be5"],["/post/6e80eb1e.html","e66935a1f34ca89e35fb3e1d1e2b4e50"],["/post/6f3b3edd.html","de428fc94f41e0cd94a51c9cb65a69b3"],["/post/6fc3409b.html","055da51961ec91edd3e2cb2c900a969e"],["/post/73136b.html","503eaa428e2fbb872df500ce69ea9981"],["/post/7410a832.html","d48cc58c9974112070d8f429c82bac4f"],["/post/742966af.html","e2d2de367c508b0b8b34d164f7ab896b"],["/post/74479d01.html","188bdfb6a7d1f7a319c1ddb2aec0a5eb"],["/post/74a4286c.html","6143e54f1dcb0c8f324392dbb4ac9ffa"],["/post/75794199.html","9e7e3bcfbea1139aaf66bc59d2163b42"],["/post/75f986a1.html","de557f8fbc64d9a992c57ac076c55052"],["/post/75f986a1/1.png","20f89c350c7dde61738b30cf51c17323"],["/post/76485a7.html","1722e36b1f1f8e4208d9b6195d584e1f"],["/post/76485a7/P1.jpg","07abf78f3fc14ea1742bbb614e19c97c"],["/post/772fc02c.html","be82999bec2af00ebece4abb0ce389bd"],["/post/792e36ed.html","dc9cce58cde6cbe93787d6ba21f18ff6"],["/post/7c50967.html","266ca023791888dd4975a0f25eb50a4f"],["/post/7d8e4f2a.html","5c80fa5c684432d88f1e31bfe65880e6"],["/post/7ef8a98f.html","a76a93943208e1009d1dbce50c9455a9"],["/post/7fe193be.html","b3be8f1ed7e6ea54a48bb7014f28a42e"],["/post/7fe193be/A1.png","ac374c9930bbfbda65eda8a7fdf0e087"],["/post/879e9655.html","461d2e83de9f26a470385bb57a6831e2"],["/post/88e8ae98.html","f4ec80349e1b864191b77aed4ed5236d"],["/post/89873dd3.html","d082fff5b40faab17ae1912f0f1f62fa"],["/post/89873dd3/1.jpg","b3a08a364679fdf992c672dffaa3af45"],["/post/8ddc8a30.html","7286bf6064f82b226c4034f74ba8bfc1"],["/post/8f9cfad3.html","71daeae450db717591e3e0c53afefaea"],["/post/8f9cfad3/3111_1.gif","954e37cc5cc90afeb9e1d7b9d33beadb"],["/post/918fcaa1.html","31dedcfacd347fe638524f3890d01eb9"],["/post/92687617.html","738909311c55880364f5a3f8a9c8bf60"],["/post/9282aeca.html","9a59ef693dd7a6db012c1aab7b06f9db"],["/post/9282aeca/1.jpg","8d8e1e7788d165f4d6d5307d9c7465f9"],["/post/9305c5f5.html","233ff729a22deacfac0cd688d149deaf"],["/post/94c9baee.html","7b9df9ea01d69249f4c0e288d1534d2a"],["/post/98804e11.html","8335d848faaa26e3a4e7e01c8b76b91c"],["/post/98804e11/1.jpg","c3133c8be40b6b95db851b38718fbce8"],["/post/9a9a4797.html","17d495198530b277e4c373eaa4b8b3cd"],["/post/9c28a880.html","8042f5d6882d96e62c11af4fb22ca567"],["/post/9c28a880/1.jpg","2755021381b95a4f144b684710382222"],["/post/9c649212.html","03555435a78d64bf4f3d2e7c70d6d786"],["/post/9d402b32.html","34158a0eaa18392ed399aab948962248"],["/post/9d402b32/1.jpg","40cce5b36315acc8347de0493946937d"],["/post/9eb065c8.html","1a0550aa3a1c8e9ba016478b5151fb08"],["/post/9eb065c8/1.jpg","0d1729f21518670e529a20cf8ba3dae7"],["/post/9f8e212d.html","3fec75802d1686d74d6bd8527e38913a"],["/post/a1751c09.html","7c01d81dfb977360f1901a292a898769"],["/post/a1cef007.html","3b6d25ff797790e9d2f81cb07a6bcc08"],["/post/a1cef007/1.jpg","b9039d98eb761d3546b06ddbc25f51b4"],["/post/a1fc03d8.html","2e478987ccd90f08f1aba4d0df4770b6"],["/post/a27e9acf.html","09d2d5d453fd0a6146be5c27a6fdcd79"],["/post/a4c66bf4.html","dcc41200e636546d28eeb633195d17c4"],["/post/a4efe87.html","4a4c15b0eaf64e5f4212a836c5a3bab9"],["/post/a7528411.html","2cbbcf065b00619f0753975c0aeea6f1"],["/post/a7528411/1.jpg","3d1cdbcdae2fb83942fc057751318538"],["/post/a8759852.html","8ff58fb432d3617fba505a86179be2c1"],["/post/aa0a97c8.html","982e2613fa74dce7d708c2a9a4429529"],["/post/ab4ed95b.html","c5bdbb9f8a41f3ed95bbb110e771b148"],["/post/ab720150.html","6341ed566ff587eb430b167c2b726f20"],["/post/ac92be99.html","d0d7c2694090c64f449698897bd7a664"],["/post/acf6b02e.html","f9dbc86bcbb824cb8973aa212d1ce1c4"],["/post/b0d6c7.html","22440a8651003bd9049773bd774aecc9"],["/post/b3ee770c.html","c29cca59b260590ddf0349eea9f7f059"],["/post/b3ee770c/1.jpg","8284eae107bf12291f91f5a255e9a4c7"],["/post/bb7f8e97.html","53272f8f240b9ddd1fd4e3aa78fd4774"],["/post/bb7f8e97/1.jpg","e096d2bb21776bd72d6c74dfc6e8f021"],["/post/bba462fb.html","1865d218bc33154363d3d75b22132d23"],["/post/bc8586da.html","781426bfebba0278a6bb9eb608b57674"],["/post/bcb02c2b.html","781ad23c21c9473f8d15876d0cf21d40"],["/post/bcb02c2b/1.png","014e5daad322efa82615e3097f6716bd"],["/post/bd36a30f.html","b582a8dff58fd36022b8e137863671d0"],["/post/bde4b1f8.html","740fc7cebd2c3ae64de02a32c275734e"],["/post/bea42f1e.html","21b51e53d4253fcec5a019e34c732248"],["/post/c1864474.html","2d362d580dd5b80b417987a8301b3541"],["/post/c1864474/1.jpg","a6c111e58df387fa56b472e858a88cde"],["/post/c293d2b3.html","87de9f1f3bb4ae0747a2ae2a94c38136"],["/post/c293d2b3/A1.png","43fd63800bfe151dfd505fc94f290389"],["/post/c37095b9.html","07ab9025565cf292d2da2ebf812883a6"],["/post/c5672df5.html","ca375b26b250fd4efbe4b965c9da1ff3"],["/post/c6d76e9a.html","0f5a23dcb7c930d21c0c2596e69257c5"],["/post/c7fb8250.html","da66b97e6ec768bfdc4392059a9f25ff"],["/post/c938bbd1.html","cc0512e2a29ca695f604531aa9291096"],["/post/ca14c5df.html","bff1c3cec79099665dbbed8754562207"],["/post/ca14c5df/1.png","e08c2f588cecc2f20e68020135a039e8"],["/post/cd18de84.html","0dd034f50015c2b10e2b9e11d5a9b61c"],["/post/cd41dfb7.html","d07efc2693b6402bce037932e9f44e82"],["/post/cea184b4.html","7ad8331db046beef14daffb6647f520e"],["/post/d120bd8e.html","89a86eb0c0883cb83bbcb7f7580c8cbb"],["/post/d50b784.html","a1b6a696d465edd3bb041695d0222e3a"],["/post/d50b784/1.jpg","c6548e3eb4a6223459987932e0628f82"],["/post/d6a5bd15.html","ca72f5748a2cbe329b3bc5637b88eb10"],["/post/d73de254.html","2aa37fb6ec933e8270f51aee37b93f75"],["/post/d73de254/1.jpg","c5ed50d2d9d35aea459a60b819be4758"],["/post/d81c5363.html","3fb09e6f91cc85ac734385347ba99f7b"],["/post/d899bd9.html","d7dc1081f7a4bb7697f4e43060da1ed2"],["/post/d9083bc4.html","b58146f55030bcc21d74efde0c3faf63"],["/post/dc981233.html","79219a1028361e676ad117f6985ad9c4"],["/post/dea65d58.html","3c85a5f0ebf2b77256a0d99b1ae2a8c6"],["/post/df76d545.html","dde38b2f3d122d5f1f845c50b1bbb526"],["/post/e256d99f.html","41820ccd1ea26e1a138ba4bb36ba6005"],["/post/e290dd8c.html","b472b24ed41ecc8ec4d2119658c1f78a"],["/post/e3e37943.html","a9ace341c3fe083c35c8dc36d775afbd"],["/post/e583ed8d.html","913066b761d5bc9f00e578f8bb61297c"],["/post/e5d75450.html","682ca8439596a74c66d7c104e7bb11c4"],["/post/e6364ca4.html","28bfca39b0c0cf7b0024eaef22dcf6c7"],["/post/e6364ca4/1.png","2bbd61db75bdf31d3853959353d81a87"],["/post/e7058b47.html","fd26700b21a0881d934c2717618d86d6"],["/post/e769f01f.html","58714966cff355afa375a4c04a1652b6"],["/post/e78ad34c.html","d97e91f9c870245f47f0c1433834ddda"],["/post/e8005312.html","60873a766b934159d413a3c7172a4698"],["/post/e8ae7612.html","3b2d006d1b56366c638340de01a66f69"],["/post/eae0b80e.html","5245509d8af4f19381347c9b0756150d"],["/post/eb9ab36.html","0e14d20fba4a12734394c242b023e435"],["/post/eb9ab36/1.jpg","454044b6a50adec9e254903253835347"],["/post/f0b23c5b.html","69686991728f2074bf2249c49389030b"],["/post/f279299a.html","fd2fea4698dada65328b5bf8269be3d1"],["/post/f3d9c661.html","69a91ee5cdeba61005639ed9c7bfd2e6"],["/post/f4bfd16b.html","f742cfa0bcd859323723f3fbe60b6b20"],["/post/fb2f630e.html","cfae2a7151b6295a9f9ef3508d244a0b"],["/post/fb5efb9c.html","2fa364568f74e93cf6851c96f1e50b6c"],["/post/fbf7f335.html","d7c7bb7cc22dd305727bf03db6e92d2c"],["/post/fcb9464d.html","260e5cb1f88106f898fbb8499716284c"],["/post/fd581850.html","f7129a24cfa0eff29d907f46b6dae44b"],["/post/fdc06f3f.html","588b37712f79bbabf5cdd6b3958e8aa8"],["/post/feaebfb5.html","2b43a0ccac74d9aad4f9a35946879c9b"],["/sw-register.js","26010d77a6f36e4216a50e64f566f6c4"],["/tag/1988：我想和这个世界谈谈/index.html","c7d696b7cc01fa7452be8a60069d6be1"],["/tag/1Q84/index.html","e983b8d0267d02b98afc12952ceaedb4"],["/tag/2017HDU多校/index.html","a7ba5f63049b724f62f725e60fb60fdd"],["/tag/2018HDU多校/index.html","d64a2c53e435698655b48871492f5f92"],["/tag/2018寒假集训/index.html","d5001d483ec4901679bb38e3e31d99fd"],["/tag/2018寒假集训/page/2/index.html","7da5d29fd9508590b02b7040cd06d8c8"],["/tag/2018春季训练/index.html","1e9458bbfb63d81696d29a1cc2fa661b"],["/tag/2018春季训练/page/2/index.html","eb80c89b32ceedf16e89ede5348b7861"],["/tag/2018暑假集训/index.html","b5d41bf015ef08bb48adddb38460c877"],["/tag/2018暑假集训/page/2/index.html","94683e29c6037d8d8f0db17e2fc79721"],["/tag/2018暑假集训/page/3/index.html","55c23c012be0906201354a19a65881fc"],["/tag/2018暑假集训/page/4/index.html","6254120b19fb3ac8f08d095e3534cd44"],["/tag/2018暑假集训/page/5/index.html","a1502b72b1a14d984eeaa8885675145b"],["/tag/2018暑假集训/page/6/index.html","dc8f812d2c4fac17169fa646b535edfe"],["/tag/2018暑假集训/page/7/index.html","3426a05a42c3144d0139a0665eca1816"],["/tag/2018暑假集训/page/8/index.html","e817a282b4bbb32cfea1a500bcb57034"],["/tag/2018暑期选拔/index.html","eb5667e0ff6323e0f444690f7a3dadab"],["/tag/2018杭电多校/index.html","bea3a51ba69f87c69c5e440793fcd3cd"],["/tag/2018球季训练/index.html","a10c6a329492acba37145afb0584fc92"],["/tag/2018秋季培训/index.html","1492bc4fad3902bd296b704429d89cf4"],["/tag/2018秋季训练/index.html","e1a8c5e46617e13d493de4a60410e68e"],["/tag/2018秋季训练/page/2/index.html","f6490acf77c0f6464c7e4d90fc897d8b"],["/tag/ACM/index.html","69baa151f4b7a8fb89bfd19692d4c63a"],["/tag/ACM/page/10/index.html","b616ec3b42751f10cc62774ab9ed0ee9"],["/tag/ACM/page/11/index.html","f0086b9aa85cbf65a4a8be0701092e9b"],["/tag/ACM/page/12/index.html","9c2407e9db0d2f7c3fef39440de5dd9f"],["/tag/ACM/page/13/index.html","325322b4935e0c7676e77cd0caa4b517"],["/tag/ACM/page/14/index.html","49e2a7e18f229442171287f0445b7d62"],["/tag/ACM/page/2/index.html","4ddd6c31c164e8df60260059ba4dfe41"],["/tag/ACM/page/3/index.html","d0d0981e8e0cd627b30f6707a3aa87dd"],["/tag/ACM/page/4/index.html","e8e75027f74e87a7ba34052184bc5bd7"],["/tag/ACM/page/5/index.html","e3ca54fe9869cc88be0e8ea2d37e900b"],["/tag/ACM/page/6/index.html","dfe64ea630f046b32bb5125d9b429b4f"],["/tag/ACM/page/7/index.html","898c4f02bdee5c0e34a1ebcc3fb016dc"],["/tag/ACM/page/8/index.html","f1873c8137f534d93db2a6a580d87ee6"],["/tag/ACM/page/9/index.html","7b4a2f431d789179544cd735cc91135f"],["/tag/AWS/index.html","c5a9a2ae214c23fedf0104673fb4ce2d"],["/tag/AtCoder/index.html","1cd09bde0fc3228388b8bb4f02ba466f"],["/tag/BFS/index.html","b2402d4e5ead60a45e14e0310f336cb0"],["/tag/C/index.html","b2645fbcb07c41272106978b49475032"],["/tag/CSU/index.html","35ed45ee6bc8bcf856359c55fe2e2c4e"],["/tag/CSU/page/2/index.html","60305f6c6f93e5a710ac4b1ffdcd8fcf"],["/tag/CSU/page/3/index.html","c7acae9d6603f0e88cc06426379f8e6b"],["/tag/CSU/page/4/index.html","4c0dc8e2e389c3be85bf145337f7a21b"],["/tag/CodeForces/index.html","2a0934f5e022682b32fc80924731fdef"],["/tag/CodeForces/page/2/index.html","7d0b10171c8b548df4a7532d0764f20c"],["/tag/DFS/index.html","0111255871e9d46c25351de06dbb6426"],["/tag/DP/index.html","15a528d87d3e5ff60d8b51ac7ecb93e6"],["/tag/Dijkstra/index.html","89644b8d2a3029da2b2275515f688160"],["/tag/Flask框架/index.html","1d0070863ba138ba8830ba440e494658"],["/tag/Floyd/index.html","bdacf829e5e2acea4503b9773e4b0be4"],["/tag/Graph/index.html","91cd8c20116d9dfff03fecf7f5909bec"],["/tag/Greedy/index.html","4274a2c480671e6db7435acc03851963"],["/tag/HDU/index.html","a694382e0adbf95df67397fc0bfe6154"],["/tag/HDU/page/2/index.html","f0e5ad09b38a49663d7824674b9e5cd5"],["/tag/HDU/page/3/index.html","90170b4e5ee882b6756b3e463db82410"],["/tag/HDU/page/4/index.html","f0efb0c8e5c5f741294df5f0db893d65"],["/tag/Imitation/index.html","c912ec3d2bef2dc1989a2bbeb11c5199"],["/tag/KMP/index.html","a9e17fe4db454413b3a6e0101cb7bf75"],["/tag/POJ/index.html","05248c0028213c0f901aba93e7d81cc8"],["/tag/POJ/page/2/index.html","5b32451b2336ac9048d3467e50d09b8e"],["/tag/Python/index.html","9489151c44e00e6d01665c8f3b858b0c"],["/tag/SCU/index.html","c0bd3ba32820e91e7793fa1dce09f9d7"],["/tag/STL/index.html","02f170de338e326cbbbf241bd51d578b"],["/tag/STL/page/2/index.html","64d05bff79ad9fb30a957e01c25afb8b"],["/tag/URAL/index.html","806571160d015249732b3fb73039c320"],["/tag/UVA/index.html","deb11b7c0c518272a61fda53119df665"],["/tag/UVA/page/2/index.html","c6b0e3f8872b17ee4603d28bc662c443"],["/tag/UVALive/index.html","a46466634141ca1d66f351a93ba56a6e"],["/tag/VSCode-Git-生产力工具/index.html","bfb5bbc69b62970ebdda266e13731207"],["/tag/VScode/index.html","73269f7d7d60f619cd7d4107896d1ebd"],["/tag/ZOJ/index.html","e635ad917bf6d71bccc11fffb14b87b4"],["/tag/math/index.html","9a385a41c038f7d57cb2209ecedf0f1a"],["/tag/test/index.html","b37c9c8e13310db3d60f3a4cca039e5b"],["/tag/不得贪胜/index.html","95379c903d4fcf2b8441e8f7885eca50"],["/tag/东野圭吾/index.html","2e16d680d86d565b55ef8b7bea827c33"],["/tag/乌合之众/index.html","2cc632f2ccd93a1ad96709967e89577f"],["/tag/书信/index.html","2e9a85dc9ed13dcc2e1b8b82ffdcc820"],["/tag/二分/index.html","c8caf7f45efc091191abd96ec690df65"],["/tag/亚马逊/index.html","9d3a740d4d850a8cea36461cd56a8fd0"],["/tag/亲爱的安德烈/index.html","c7431d3a9a9a636f4f8e1185c01c5a35"],["/tag/位运算/index.html","b924f00c415967c1af38d7fafaac8b94"],["/tag/几何/index.html","afed014197305c133ff562af85b98199"],["/tag/刺杀骑士团长/index.html","d07ebbfb503902442822fbf1ec50948f"],["/tag/前缀和/index.html","e2d96eaa8333b68a54d6a83410b3b636"],["/tag/区间DP/index.html","a3b2c35e169fb1c4c67eaca05603774f"],["/tag/博弈/index.html","b74977b8748c1367804a8a8893df3500"],["/tag/历史/index.html","87768d54e5cc4e45120fd7af39b95664"],["/tag/古斯塔夫・勒庞/index.html","161e24583850258cc8515180641c4f27"],["/tag/图解密码技术/index.html","4f5fb57444b3afb0ac9882fa352e4023"],["/tag/大数/index.html","685531a6d179881c1384fc996d536429"],["/tag/天幕红尘/index.html","ef110218e4fb580b03bbe0eea844d1a7"],["/tag/如何阅读一本书/index.html","9956ca806a84d898717e6b9dc008e1bc"],["/tag/字典树/index.html","9a32eba09ede0377dfe965a10106c8a2"],["/tag/字符串/index.html","6ac6251b1044f0446fcb2719d932c637"],["/tag/字符串hash/index.html","e09417d2ced1ef93f5e13a78770f866a"],["/tag/安德烈/index.html","9582c441f006b955ca5f9ca3674ddc0b"],["/tag/密码技术/index.html","a104b8092460361102e9471205899f31"],["/tag/小说/index.html","dbf06f264cd37fb7a5107ae7d751f9cf"],["/tag/岛上书店/index.html","714f57594e290ca15b94116ac15eab80"],["/tag/并查集/index.html","3cbc89a254ccafad6d74a6d05d629a25"],["/tag/待补充/index.html","1cad1a955dcd45291a32cb13a88a49d0"],["/tag/微观经济学/index.html","5a6c0d654514f5fcbd47ac148333b9ab"],["/tag/数学/index.html","34f0034bfad277e807a05e89230827c9"],["/tag/数据结构/index.html","e35755d03ad4c68ea59b0be16e3aece5"],["/tag/数论/index.html","648971bf8dfcc1f555a16b558b1c0666"],["/tag/文学/index.html","1b37155da7f20dda3bac07e92e83a63b"],["/tag/文学，小说/index.html","c1705b5788de595e5c0930c080280552"],["/tag/旅行/index.html","21f5762ecc64b8b8494fe77d384a46b1"],["/tag/暴力/index.html","99fd01d1c5f34208cfc791e8ec56880a"],["/tag/最小生成树/index.html","e48670ccd58c71323545a606223bbf56"],["/tag/最短路/index.html","6d8b7f28f99a166281ac5649a85b4b9c"],["/tag/最长路/index.html","74ce6cacabf5ea34a9024cde95362bf3"],["/tag/本·伯南克/index.html","cd0e90a82c29022ff97eb532911d620a"],["/tag/杂文集/index.html","1cbc87bf6d576fa7c3c20a23be5bf912"],["/tag/李昌镐/index.html","42943e5ec04d7ad7bb50de79fc2ad764"],["/tag/村上春树/index.html","decc3f079790b6e32d73db646f438922"],["/tag/枪炮、病菌与钢铁/index.html","537bb9175d0fdce4c4fa46d9d2f3c284"],["/tag/概率/index.html","1eda131cbfb7cd594c22e2f0435fdb5d"],["/tag/正则匹配/index.html","0784e9fd1b410c4dd86c419d7dd4c871"],["/tag/水题/index.html","c47c27e5a6e65ff86d36cf5e502c9526"],["/tag/游记，武汉/index.html","30bd8b67f63d0e719fe3d2b6108a0e41"],["/tag/演讲/index.html","0596e5a667c72932ab7ac0e1eb570b26"],["/tag/矩阵快速幂/index.html","ecf2542dfc9974bc4dadb6d826737b5e"],["/tag/石黑一雄/index.html","8b8cfe9b752bd0033b1eaf21c861c03e"],["/tag/社科/index.html","70641ed650e41f6b12756ad15aa3c979"],["/tag/笨方法学Python3/index.html","94dc032b82625c120b0927d06663416d"],["/tag/算法/index.html","5b4b8844a9f913e8b03ce15174efe855"],["/tag/算法/page/10/index.html","d6d3d6d69bb278a06ab5f01b4105a228"],["/tag/算法/page/11/index.html","a2d5a35dc5bf1ab404916ce64e8f5be8"],["/tag/算法/page/12/index.html","93f576b702f4aefcdfd3005ac36959fe"],["/tag/算法/page/13/index.html","9a0902ae9ff8c451fa446ead903aa989"],["/tag/算法/page/14/index.html","af0842d1b6978a5e2a87567ca3068fe2"],["/tag/算法/page/2/index.html","5ed4dec4c76e81865c6226c94893dc37"],["/tag/算法/page/3/index.html","567d42a2f2c76e580a6c0a2d12b36fc9"],["/tag/算法/page/4/index.html","e3b2049e85726c48bc79bab09498c6d5"],["/tag/算法/page/5/index.html","94e024efdd5f15e44dc0a4cff97c8daa"],["/tag/算法/page/6/index.html","c85039126ad8de118dc7f67475b39bfd"],["/tag/算法/page/7/index.html","3630e82661a2b47ef99e93d687b6b118"],["/tag/算法/page/8/index.html","6f20065a3a1c274fa3dc9a7ef5eb95ec"],["/tag/算法/page/9/index.html","f36291321e3d3cbb9ee2da7c69b8d76f"],["/tag/素数筛/index.html","cb23d8603dcb8121775b25c9066ae22c"],["/tag/线段树/index.html","cb29b37d4cb8e2b2f5cd779bf4493201"],["/tag/线索二叉树/index.html","bf86c51d5fd0b2402339e535e63fc26a"],["/tag/结城浩/index.html","e86553915306ec3a6e2436ae80260fcf"],["/tag/自传/index.html","219beb3d039c1a351523b37d5b628277"],["/tag/艾萨克·阿西莫夫/index.html","e573fe0a265b5fcb5555f22b0df89e8b"],["/tag/补图/index.html","009c5679335267f83cb3fa299742c9ad"],["/tag/规律/index.html","36ec5e168ccfadd07fd009149f49444b"],["/tag/解忧杂货店/index.html","abb18ef13a3ac1adbe46c638ee9a56d0"],["/tag/计算几何/index.html","63b9a9455eb7a76227b8ee757b324827"],["/tag/讲座笔记/index.html","befb14123a3b341d343aa3edb06b407d"],["/tag/读后感/index.html","54ab9c5d8b132888f7008419d2262849"],["/tag/课堂笔记/index.html","1347c76306ee933f5c4e4f2a80c4b734"],["/tag/课堂笔记/page/2/index.html","261e64ca1c84b4c455a2ad4f93696e0a"],["/tag/课程学习/index.html","0f5415dacfd5ddafc8328185aa0313c4"],["/tag/豆豆/index.html","33273aeb2e401fe2ba0fa2efae6d8a90"],["/tag/贾雷德·戴蒙德/index.html","b7a46768297c3582e99b4fe4e98c5e8a"],["/tag/辅修/index.html","5c59b9dfcb9a286d21267e93eb8509c2"],["/tag/辅修/page/2/index.html","3263b81a8bf798593261981dc9d54c6a"],["/tag/递推/index.html","0d0f4f09cc7cb98171ca9d7f7a25f14f"],["/tag/野火集/index.html","a7ee9a48d12c7c8ed1e3f5560e6a4f2b"],["/tag/金融学/index.html","831898892bd28404cbf979da81b7fedb"],["/tag/金融的本质/index.html","5f69ae9f7f48fc8639b0e2f9a6990dd3"],["/tag/银河帝国/index.html","b0c4e112d76b74c2f0dc44c946b599e4"],["/tag/阅读/index.html","5fcb110eaae92d23c777cab637627963"],["/tag/阅读/page/2/index.html","ad4991e54aedef033e175437df5107e3"],["/tag/随笔/index.html","f4cd3e90e627d15bd87a1f6e37fc25a2"],["/tag/韩寒/index.html","6a5470515e35dad4b65f1420e26591c3"],["/tag/龙应台/index.html","2b7d4db041ac9f294393050717189530"],["/tags/index.html","8f4f497fe950e11bab404c08aa7c9389"]];
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
