/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f6c098b97e64cc03d6a84e8a7986d949"],["/archives/2018/01/index.html","dcd7773cd7a78aa01af7b8f8a2c2fed5"],["/archives/2018/01/page/2/index.html","1ef8f21f22bc84dd86dfafa0a9315708"],["/archives/2018/02/index.html","51ad2e6e36a888c0b02e5b9e577ad090"],["/archives/2018/03/index.html","a0065d0f3a379fbdb47277317a9ae95b"],["/archives/2018/04/index.html","7feb175b4f9ed611a6d250e3b5c5a15b"],["/archives/2018/05/index.html","6e8606c9ca5734ef41f37cec057b2b28"],["/archives/2018/06/index.html","1d29df161c99145d15f842c4a7fa4579"],["/archives/2018/07/index.html","fe92a26800603784960c4b5cbaed5d63"],["/archives/2018/07/page/2/index.html","1bd10a94945689c21f2969b2f3c4d112"],["/archives/2018/07/page/3/index.html","a9eeacc6b8647d7153b20fc980b107ff"],["/archives/2018/08/index.html","6b3438e916496c18f1465de3942c51b0"],["/archives/2018/08/page/2/index.html","32dd5499088126745ba660b7aca717ad"],["/archives/2018/08/page/3/index.html","0759d36a8cd6f5c9a4c3490b928192ef"],["/archives/2018/08/page/4/index.html","71c6427bd7d915a886b95e199edef061"],["/archives/2018/08/page/5/index.html","89f0c474d51fd08a3321a7b7ac0c9853"],["/archives/2018/08/page/6/index.html","c465edc1ae8c7cbcba0be41b23b8a595"],["/archives/2018/09/index.html","2f1cf17d2bd4e98a5d10404cb8e40e97"],["/archives/2018/10/index.html","f62327dbdb45789a3b3ce374ae44b9d7"],["/archives/2018/10/page/2/index.html","0a0b48aa7352d4bb16356fc9d5fc7863"],["/archives/2018/11/index.html","119091012d6da2f4c6c0e0faf4fe76f4"],["/archives/2018/11/page/2/index.html","908ffbae8cd8aa3df9c1142608f028cb"],["/archives/2018/12/index.html","c8072d893d6e8b58b6980f35715981c8"],["/archives/2018/index.html","361158471bd6cb867d485be1d21857d2"],["/archives/2018/page/10/index.html","9c012833c8c1ce4eb2cd4acd37510e36"],["/archives/2018/page/11/index.html","06682f428bd7ddee0e20636d63d28369"],["/archives/2018/page/12/index.html","38b08e3b5abe690ca620bef93bf07ed4"],["/archives/2018/page/13/index.html","bbd14c8144f74095c1d3e0031a8627ed"],["/archives/2018/page/14/index.html","944d364a0064120cf5b472c52b004748"],["/archives/2018/page/15/index.html","a3a00731664ffa2c91532d3244f8bc13"],["/archives/2018/page/16/index.html","2dd6fa8843da53c39ca472dc3d2a05d2"],["/archives/2018/page/17/index.html","921cf8cd3dce4028ab27802dc9cb60dc"],["/archives/2018/page/18/index.html","b92d0fb0bbd700183cc8a58ef913899e"],["/archives/2018/page/2/index.html","a3a23b4c540366bdc227cd3dae3a969b"],["/archives/2018/page/3/index.html","e769d1068ac4d9448b2f43e8f64823af"],["/archives/2018/page/4/index.html","30e7f39b69a1cfb7a61c2b5496d4c9da"],["/archives/2018/page/5/index.html","338918861b948e34d5a3ab7b774add43"],["/archives/2018/page/6/index.html","6daa3811f0144221f3d574ab65473c2d"],["/archives/2018/page/7/index.html","459b05716d925c1ca3dcb6c8f0147636"],["/archives/2018/page/8/index.html","abaa238a94a4e7677f242545632525be"],["/archives/2018/page/9/index.html","25a77181b078597c240e01a397cb52ba"],["/archives/2019/01/index.html","ad21adf98c5b9efd42ca59eb90a9078f"],["/archives/2019/02/index.html","2ed7905ff0992105c9ece21b3ce94b0c"],["/archives/2019/03/index.html","35b28eb63ff699748ddcdb9be6de8f6f"],["/archives/2019/04/index.html","26849457449de92248fd63ea23f0bada"],["/archives/2019/index.html","cc338257f95fcb902f99c55ef0183e09"],["/archives/2019/page/2/index.html","875e006c4ec98c57af625ea6a4a1eb53"],["/archives/2019/page/3/index.html","5d0bbbfcb5b4f5849012d7e834bda383"],["/archives/index.html","00be7c8aa41ed4b44fd8615d1990645c"],["/archives/page/10/index.html","70c7d2afe11d91dd6a55c12b149fa52d"],["/archives/page/11/index.html","840713fbc19932260785e6ef4904ff9f"],["/archives/page/12/index.html","dd8aec14d5efc6fe3a013f7801b695d9"],["/archives/page/13/index.html","ccab8cbd7dd75bee04ce140a3d8fb1b3"],["/archives/page/14/index.html","f74759d0b25bd27c983f48477a85a8cf"],["/archives/page/15/index.html","eafd395fd7764779c2eeef1e21ec3cd4"],["/archives/page/16/index.html","9f62eca57766e417820d3066bc2e5c84"],["/archives/page/17/index.html","fdcf24777ee16e238f38a14a79daaa19"],["/archives/page/18/index.html","0390e7d52998bc2fe4f92e2f5d03a53f"],["/archives/page/19/index.html","8c4a15f7bef6e30f81a0d4d1f6c20c9f"],["/archives/page/2/index.html","11e5b0af1cad32d662f4b3dca6cd4c9f"],["/archives/page/20/index.html","0b4cfa42c9d42109bdacf7b6756a87a8"],["/archives/page/21/index.html","3e9633811a7e1cc90bbca0468e3e7b9d"],["/archives/page/3/index.html","df8758aefe0d99daa1d5bb3aa40f12ab"],["/archives/page/4/index.html","a925ea6fe8eeca31d08c7fe08091c6d6"],["/archives/page/5/index.html","8c702aea9c8354151058bfa46b507b94"],["/archives/page/6/index.html","fdf1198a46c40cb91630d9a647ae8bfd"],["/archives/page/7/index.html","3fe033d9225834bf7cb60d8317908051"],["/archives/page/8/index.html","6821452f4d24841b1f0498a5cfff5b9c"],["/archives/page/9/index.html","24c70468841a2f0d2abae091c0c69155"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","71a210f45915d9dcc6095a1fc99900c7"],["/baidu_verify_ZzhwBFUe1V.html","4c20370df93549e5ff8924584b1a7492"],["/baidu_verify_dw73Nh8OEw.html","b6aef6891f8613f3d39a033a79d7108b"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","7dcfb393155a48093f4bd1f84f48f54d"],["/categories/操作系统-集群/index.html","18d37a9c994c0f96f3900340c68fd307"],["/categories/数学建模/index.html","662da2d04eafbaa44952d950c66dd0d5"],["/categories/旅行/index.html","4b6fca20c82401a3867b8b4b57151a9e"],["/categories/编程-PHP/index.html","3a3a6c5a75b97120a3c567d74246825f"],["/categories/编程/ACM/index.html","0c6b1103da3900c44516df44d36120a5"],["/categories/编程/ACM/page/10/index.html","a3ce582ca62a0c248646e077b08a9613"],["/categories/编程/ACM/page/11/index.html","b01416872d0be29b6fe6c8440165f41d"],["/categories/编程/ACM/page/12/index.html","9331da2fffb7c087a0b88734d0e3a186"],["/categories/编程/ACM/page/13/index.html","572e6e5eb3362aaf72e62ee2ce752480"],["/categories/编程/ACM/page/14/index.html","7aa69e2e0832c4ecec5cb0bf2d228271"],["/categories/编程/ACM/page/2/index.html","00c4aef6ca858dbb0cc52fb142a90357"],["/categories/编程/ACM/page/3/index.html","563c5c175b2f2c73ab67eea8e3c8fb51"],["/categories/编程/ACM/page/4/index.html","3e989ad39742eb7a1f0ba35e5301ba6c"],["/categories/编程/ACM/page/5/index.html","51b0a987c2f9def6ceae1e0c40baa841"],["/categories/编程/ACM/page/6/index.html","2b20474c8ceef14701af9916de150705"],["/categories/编程/ACM/page/7/index.html","b1ffaae436a3061bdc510788f656d1b8"],["/categories/编程/ACM/page/8/index.html","71fbcc32a2bfc43daf30c029f11be52a"],["/categories/编程/ACM/page/9/index.html","9f67b621b0981140f378245cc5553a9c"],["/categories/编程/C/index.html","6fe28b278ebdf42eadb2a4e529dfbf9c"],["/categories/编程/Git/index.html","571d28c71587a789910fab177d9280f8"],["/categories/编程/Python/index.html","34b044acda00deb992993634c6cb7209"],["/categories/编程/index.html","29ae8ca0772702aeff6a7a572a13b49e"],["/categories/编程/page/10/index.html","f169d4da4be4f9c6f1cfa538e5c99951"],["/categories/编程/page/11/index.html","f474a76ef1397531688ed92612999e8a"],["/categories/编程/page/12/index.html","9bfbc507f56f02962c7b622c5eea77ef"],["/categories/编程/page/13/index.html","db8342d209786ac50c270bce1ff29560"],["/categories/编程/page/14/index.html","53118598c5d825bfadaed68efdbecc87"],["/categories/编程/page/15/index.html","5d6902d0501ed0b43e343b8e4d76efb0"],["/categories/编程/page/16/index.html","6644b6da292a75e9f9f4191812bec964"],["/categories/编程/page/2/index.html","d901de07560d4e248569cad2d9b21178"],["/categories/编程/page/3/index.html","42ee6eae62297032b16d6237c20dd8ea"],["/categories/编程/page/4/index.html","f70e93ded760ed764d59a9bc3ea0dd90"],["/categories/编程/page/5/index.html","a8d49c43c3e175b0b03ba391350f1785"],["/categories/编程/page/6/index.html","a6cae91b3460e19adf0a785f6266d9e2"],["/categories/编程/page/7/index.html","64c26911b8a2d81332b2b68801f2c90e"],["/categories/编程/page/8/index.html","ac6baa655fd00e722ac5625937aa2b23"],["/categories/编程/page/9/index.html","3d613d12813352fbe82fb9e166422b40"],["/categories/编程/密码技术/index.html","54c44ad68127010b8af691c15d4b50ab"],["/categories/编程/数据结构与算法/index.html","addf941ad0eaf38222d3ba0ca3229099"],["/categories/编程/生产力工具/index.html","70212a2f42caaf0cf7abe240d1ac54d2"],["/categories/编程/编译原理/index.html","5af66cbbc4310345d1f33c0bcc14b0ff"],["/categories/编译原理/index.html","321e2489a6dd8fa90ee29e4b87a2a384"],["/categories/讲座/index.html","a517532e48e69a8ce2e28daf9d07be31"],["/categories/金融/index.html","e714a097b15f56d86345467b0a0cee09"],["/categories/金融/page/2/index.html","4c0a203c7626ebdde69109021b0846a9"],["/categories/金融/微观经济学/index.html","9c20a301e5353d472375e43a3519c045"],["/categories/金融/金融学/index.html","14bbaef7c4a0e2fafafcd11508a8313f"],["/categories/阅读/index.html","b69b94930bef1a6cb3730fa9bd2234bc"],["/categories/阅读/page/2/index.html","aa9c656ad909fdb2557a292db15965c0"],["/categories/随笔/index.html","9c88c1faa17c4e8e97b1b381b0ca9a46"],["/css/main.css","c733ecf103c408b7dad052ec8ee29356"],["/friendlink/index.html","1d07385bed460b0dc47d0c7554e69c64"],["/googlea873f713657fb5dc.html","33d71ec31a4c7f23e458e1e8cdbfffc4"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","e4987eab88b2c1ceef3c02160f7d9814"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","a8413111a818d7c8538bde2178687304"],["/page/11/index.html","86a2c4d9b9f2b8605bf059113c45a40c"],["/page/12/index.html","bcd388c908f7ac40767b9883d3f04790"],["/page/13/index.html","3ae1b4866104ddbf15be338a7b804b4e"],["/page/14/index.html","d61674d17d24c24015d4a743268ea50e"],["/page/15/index.html","8739a26d0a89f4dd6886f8c393473811"],["/page/16/index.html","04021d44d60a040b073ed92fdadb2eaa"],["/page/17/index.html","bf5d290d8c6ec36f928c22295e672848"],["/page/18/index.html","e386f2df2e69ad8fad45450fb6abf84c"],["/page/19/index.html","b8af373bafe335c3ca143ee6f1312a8b"],["/page/2/index.html","9b8b420c177a640ad12944b274adf469"],["/page/20/index.html","dd3893520f3e54828399727437f4eb8c"],["/page/21/index.html","4f73b2507cbcc74175b8d9d8d78b8979"],["/page/22/index.html","f88b5e8c0902c4545b6293492d5fb674"],["/page/23/index.html","d50546d3497b8e034f1d58306de3d295"],["/page/24/index.html","2cca45ac8fb0809b3a71670b38fadbf3"],["/page/25/index.html","287852ea683b26d3a9ad711c9d8bb86a"],["/page/26/index.html","bb49a64895a201a7e710dd77973841e8"],["/page/27/index.html","bc83e2e0327ee111b4bddb5dae6bf806"],["/page/28/index.html","0e187c477a4e75a1d887ce590b771196"],["/page/29/index.html","2f45147d4cdc8e5ff2f92ebbc8586de2"],["/page/3/index.html","dc33b85504d1aba1da7fae783f8e67e0"],["/page/30/index.html","aa7a12e585e73e173a5d098473259600"],["/page/31/index.html","2c8a58a737c92ee2ba3b43c8b9ed7272"],["/page/32/index.html","bcc38f05912cc075261fbf9f7b32843d"],["/page/33/index.html","c0139b86270fc88bdff52a93c71c97fb"],["/page/34/index.html","3106b6ad1a0748435e86887cdebb7315"],["/page/35/index.html","dc41269cc25d235face6b759d5f8b052"],["/page/36/index.html","c3d094f771c16c03643fc21e717008d4"],["/page/37/index.html","6eebf6b39de72a0e9f32e24b56f7d8f7"],["/page/38/index.html","34b792ed94f48690f2d5220d853648a9"],["/page/39/index.html","f41ddb90c5873e0344a218a7cc54f432"],["/page/4/index.html","df966111f14d676d69650ade7ef066f2"],["/page/40/index.html","8204085e961742de4dd4290e1d6a12e2"],["/page/41/index.html","f5aa27a125184c8e8ef9c853a181e8f5"],["/page/5/index.html","e3e5e0064eaf83dfea654d397fa94e95"],["/page/6/index.html","a415ef46a639c414553f8980bf722e09"],["/page/7/index.html","ff186f2cd7769de3e491bcabe36d4a85"],["/page/8/index.html","3e87aea30122470e9fc641b63b79f70a"],["/page/9/index.html","330e02f302a49dfbd386114d2e36c0bc"],["/post/104a4c5d.html","cc1d0df044bb9f1c20ee010b2ba45b5a"],["/post/109aa3c8.html","117c1789350f958735386522e912acbe"],["/post/11246bdd.html","d6fbd3f40be91c7c5122a63edc071e79"],["/post/1233e925.html","c1fa051f4e7926f0255e969e8ed4bc10"],["/post/1448d9c8.html","471655c760d477715b7f5ec273a08abf"],["/post/15db1cd9.html","347e02df39e61650fe1f7cad919d488c"],["/post/16b5efde.html","689514a903fd788bf95c538fd4ef40a8"],["/post/16fa37a4.html","25f811d36f53888bb513da1a347d72bd"],["/post/184fc5c7.html","a255dfa997c4124671dc91f8ce0361f6"],["/post/19e79191.html","7e1be304a22177f660e24eeccecfb456"],["/post/1b7db6f0.html","c06af655d0339441e22a059ede0812f1"],["/post/1c52564f.html","731831ad2b4871539003ecca05d0d87e"],["/post/1dc46f40.html","fe8f14ee5d603ce267a519fac3e75fd1"],["/post/1eeab2ee.html","cbf926cd0b06687bf787ee31dcd07888"],["/post/2024a703.html","b37fa05852488904d4226d3f39870a6c"],["/post/222505fd.html","5af6eaeb6b9dcc75a04d25921b0e98a3"],["/post/22b5b237.html","52cd0a83acf36b5bee3ad48490cd404a"],["/post/23f72a93.html","47cfdc865f92f40f80dbcd88d90be691"],["/post/264a9c89.html","eef35501343186bac22758eed5dd0773"],["/post/265c0f5.html","5c7d6ab904be726263614837a822c3a7"],["/post/26fa4dfc.html","1906bef22b1dd48651e572c7de261da5"],["/post/273ced06.html","4caa653b5d1ce017a26b1233010c79cb"],["/post/280fbdcb.html","1fec5e478fcab7c350f3d6d26d310e00"],["/post/2ee4d523.html","60a0345942f36b1f1d7572884dfcd94d"],["/post/3090aa13.html","a5258d082a013085ed5a88e4da314d41"],["/post/31a770a5.html","a57d6bebbf73c663e4e101a8d53a0152"],["/post/31f89579.html","84a5ef5b107d4ef134a78e1747e6ecb3"],["/post/32dc51f4.html","9d5e1b31f432b4f740a6ce21ec1affd2"],["/post/34a049ac.html","4e6b06988c8d8ba9005097e6e7dc6191"],["/post/34f53a10.html","2a175122448eb91aa7cf3a3a7a6850e3"],["/post/36bef409.html","9676ad78a664b33aab8850b764ef788e"],["/post/36e5881d.html","ef54c1560efaaa49bb2ed98da99c6ef7"],["/post/380486cb.html","2c9252446234213946f7fda02e205c50"],["/post/38f8b110.html","1a6e7572566a05c56b1f9924ac46f508"],["/post/3a3eaae1.html","e1e2cba1371f47f88bb73bbb72346dec"],["/post/3a72081e.html","75da749cd0fa466413df979bb1fc76c2"],["/post/3bc7f503.html","2ac7ff4d5a04aa370fc6b13f10f10a74"],["/post/3c57c5dc.html","a9ada91534b82570397506fd3a4f6e2d"],["/post/3d71c64b.html","6ec85f0b15f1e9dc564a2a853c4e69e7"],["/post/3d8072b.html","c79b1eeb34f9f68554ccbbbbd45f06ec"],["/post/3e6878ac.html","9577ac5a41f5acf8ef4fa7a9fe3f1c8a"],["/post/3f9eff25.html","574f76f3e15daf608e6cebcf8943c37f"],["/post/3fce0650.html","e7d695dec86666667bfb8e5b1db5fdf9"],["/post/409dbc1a.html","9c7c7a8c7e926b02c0a19475c9fb9d94"],["/post/40dfaace.html","1bce66b7781ddb476dbd1944e29407e8"],["/post/4123b063.html","96297d10ccfdeafdfd9f22ca822f03bd"],["/post/4255f31a.html","199a3a075c17f7bfbbc14f141a2bc2f9"],["/post/42a619f7.html","ebc09e2515b51c19d376cfd6cb525b1f"],["/post/44505a5b.html","76374a58fff10fa873fd8624e023ee66"],["/post/448da703.html","9fde0be86ea208ee2048b62a80d606b3"],["/post/454c2118.html","96053c2798022c83e06a75dfa370b9b9"],["/post/454c2358.html","e34d529fb4a978f90d9e5c0c11355c1f"],["/post/4773b69c.html","eddd6d368ca2bced817e8037fc101d19"],["/post/47b391f2.html","55d74d256eeb51d028a5a5065dc64b51"],["/post/481e8abf.html","a61dce87d8c1034631eece6bdb8ea415"],["/post/4ab96b49.html","e3f5333cbff114fe37dd12270be18b84"],["/post/4b15f9e3.html","5f38164444387b82db29e806a4bc3632"],["/post/4c60a529.html","c771cedfc7f6daa2b379479dc2ae6a03"],["/post/4d6a6b27.html","de4615c0d9cc09b2855c72583856cfcb"],["/post/4db7e28a.html","70b80bded503a9344fd292932e21e943"],["/post/4dc7502.html","c7680ec568015c968760571e9a4333c1"],["/post/4e876bc2.html","26524b52aa15c6e63e4ee918a09a2c92"],["/post/4f352d.html","c077d46e4de604b6e15a81d179cfc8e4"],["/post/4f8fe65a.html","bd557da6ed413baf62ac7963b1d8f412"],["/post/4fa396eb.html","5a7d387943feb164f83c7f7a129e6600"],["/post/52730f61.html","20c42b387ab2c510be8e59a3ee9db0c2"],["/post/531de0f8.html","ad8672d6f29a3e908aab98625b9a66b0"],["/post/53729461.html","1dea1e0f16369ea2040488f2fa23ac2f"],["/post/5555df5.html","38135919f78d9eaaf08ab50af269f2ce"],["/post/57bfde8d.html","6efe2672b71f621982b3f1760bd28fb9"],["/post/585293b8.html","78e3b4090f522104b411762f2b14ed3d"],["/post/5aa5290d.html","2f27a30289bcd2335c27073b17ecb123"],["/post/5abc6d45.html","9695de85b7994146ff2b1a7b2d370684"],["/post/5c86d06a.html","457e9634572b7faa304334c17630ca55"],["/post/5e189593.html","5ba0c0d59cf4a42de62db30e71e0eef6"],["/post/5f2d4a77.html","6edf58f120d21d7333afe6b9b9128ade"],["/post/5f341cbe.html","d1d408f40761951a8671cc8614cd8d3a"],["/post/60850415.html","8134e644e64bfbaad2cf8b655a57a01e"],["/post/62cb42be.html","0b462f7dcb47c89f49fa23495c5ca096"],["/post/6501181e.html","f07738b9b2904907bcb28a5864dd4e93"],["/post/66258384.html","a7e254a94e3691bcc626b561e93f4151"],["/post/662b8b80.html","22f7c9e45bace0f6806906283d9fca24"],["/post/677d0fef.html","61a6f88b396cd17a9a2e225830d76bec"],["/post/685bcc20.html","6a6894a9157897e8c02020612420f0c4"],["/post/686dc27c.html","670a77d57490b26933921d3b2b694b20"],["/post/6c71e418.html","eb5b6cd7111b74888a12df67e80b9ed0"],["/post/6ca1eed5.html","ee359679c206cba20a0195fe5b0b85b3"],["/post/6cb7680e.html","f0797c19b0b11dda542a78a9c9aacad6"],["/post/6d52b9f2.html","eb39fce7be1421ac89e58a6e93ae2057"],["/post/6db0d89d.html","80f1e9ac9a1f20ff7ccafd0a5ceb7108"],["/post/6e80eb1e.html","979c1ec6b3e6844d3bce22ddce46fae1"],["/post/6f3b3edd.html","4920d2e10e20be1124141e73a707875f"],["/post/6fc3409b.html","07563706dfb7f025890d495451a7d0b5"],["/post/703409c5.html","07188288ea255b2878d62d24beafa952"],["/post/7169c4ed.html","62fa89e1139807a3f4b96c4e70500f30"],["/post/73136b.html","3aeafa6043b0853aa3b40c50b0f4dd15"],["/post/7410a832.html","ffebbc83f50d00361b0822f5e4c8c2e3"],["/post/742966af.html","73a5f0268552116fda8bd1b0dfa4c4c1"],["/post/74479d01.html","66b2d84d9a4e938eaa642c87323130c8"],["/post/74a4286c.html","8beb0b0700cac2cbd2022c266d32e3be"],["/post/75794199.html","dbb2854e4322d9de22f5a133a00e25bb"],["/post/75f986a1.html","3148e72c7fba38ff3dfabc09ffc5bdbd"],["/post/76485a7.html","241be4c8104bd1f0f2f06a5e4c116ba0"],["/post/772fc02c.html","ea1052b305bcdf1052e6cf5c9d263b8f"],["/post/792e36ed.html","0d52c14694a0ae019a3a586df9a51ac9"],["/post/7c50967.html","ab3981289b71a58ee3e5de30ab0f8037"],["/post/7d8e4f2a.html","987eee8a90af85f2e28e76960a042566"],["/post/7ef8a98f.html","300ee98edefdde293dfdc0ac264d0a54"],["/post/7fe193be.html","c535c40260d2e596ec91bf190ca20130"],["/post/879e9655.html","e69b16b194f2931ed2038fa35a4c0275"],["/post/88e8ae98.html","e93e1ef7d614a91b8daf4025e4754bb6"],["/post/89873dd3.html","49d3d252a315136c1dfd230c9c51440c"],["/post/8ddc8a30.html","618bf587acca77edb9792be8626a1036"],["/post/8f9cfad3.html","22e1d568eac8141418ee247ca21d9a3d"],["/post/918fcaa1.html","e4f1628bfd800b133b7aa8282d75a792"],["/post/92687617.html","d3e6e1461bce09625ea82b45bd888212"],["/post/9282aeca.html","fe5014bdd5fe0d5f3ab8f9ac74f0ff49"],["/post/9305c5f5.html","f6768a4129ba59ea3772ddeae2f114ec"],["/post/94c9baee.html","0d5b7be29aed9f0ba7ef93084bf8c8b2"],["/post/98804e11.html","9ef3d2d696480e69b51cf40fadf654ce"],["/post/9a9a4797.html","f1a3aa6d8b8f1ee5ac2584909764a81f"],["/post/9c28a880.html","f4e0e76e5ed01b0e85990adf61af72bc"],["/post/9c649212.html","cd03f55d5b5e32ff900e3b2e6f6e22c3"],["/post/9d402b32.html","78bdeb7442bd6703fe73a820977fe79b"],["/post/9eb065c8.html","a8faf96f10703f42bc780657a098568e"],["/post/9f8e212d.html","ca697e1b6960f02b06dbd85e7caee5de"],["/post/a1751c09.html","28d92ff7a04d9f3ad4475ee0ae88f7a8"],["/post/a1cef007.html","44761e754a0a58fc6646d0d1faf7c6b5"],["/post/a1fc03d8.html","5958a60c849cee9f97fb7b2db0f4cda1"],["/post/a27e9acf.html","24cb70c459ccb8882f759fc19f8bc552"],["/post/a3770b00.html","22e79b96254df26dbe5f2e82e0011033"],["/post/a4c66bf4.html","4a9c7d8ed8037c90842c0e1ee576ce46"],["/post/a4efe87.html","8b6164c96702a47fdf9f656155ed0e8c"],["/post/a7528411.html","783308615401e4e44fe35cdf5f258230"],["/post/a8759852.html","3553879575ac1b404df0ae32b0192d71"],["/post/aa0a97c8.html","ac2f2297491defd9677c57174a0ade8a"],["/post/ab4ed95b.html","f339eb33c3892b2550bccd478e422b35"],["/post/ab720150.html","aa13d6ef0f710e896e57778b6be0cf43"],["/post/ac92be99.html","452739b8f1fcf52df8a9c2ffd3d4e086"],["/post/acf6b02e.html","1d1be2aa4dda0c0c86f321d870a41909"],["/post/b0d6c7.html","6659322841540733f717553d729ef742"],["/post/b3ee770c.html","c2893075f4d7c6affebc2a7248f3aaa3"],["/post/b8ca3dfa.html","c782914de3cf50ff0edddfdf9995007a"],["/post/bb7f8e97.html","e60bd2dc0f5f56ea582fa5fa52839215"],["/post/bba462fb.html","590af47778035a1f8e2f0402089e57cb"],["/post/bc8586da.html","189827b4b169c7eb351f6e8153fda3ca"],["/post/bcb02c2b.html","3acedaf11b82237b39baf6ef08b6a839"],["/post/bd36a30f.html","c901f7b3a4545c82754c3d1745a5ce19"],["/post/bde4b1f8.html","d3051bf33cb94aba8127b41be0904e4a"],["/post/bea42f1e.html","9933c548221a981f0b85712e69b4b77f"],["/post/c1864474.html","bdb21d979fb1e6b92ef886f614d36e04"],["/post/c293d2b3.html","c5f9943d23535c378c38e8e1901b1c71"],["/post/c37095b9.html","b2cbedf236b3730fd99e9818c739c0fe"],["/post/c5672df5.html","3d8982e9226df7eee488ebc217bf8d1e"],["/post/c6d76e9a.html","c168fbbab5835ba6f0552332395d181e"],["/post/c7fb8250.html","827510d08c8757d40c0e6ec1e4152153"],["/post/c938bbd1.html","f5a5c7ffd0cf04acd1a4be220224a812"],["/post/ca14c5df.html","3899399d0fe21d2316998b1268dc5e7a"],["/post/cd18de84.html","34044951946c036ef864518641e07f6f"],["/post/cd41dfb7.html","1448f4a8b392138cca162476e641a9a6"],["/post/cea184b4.html","81efe8e298b0e1971213d014afeb375d"],["/post/d120bd8e.html","2b7e5542fe203786b7cee0adff31add4"],["/post/d50b784.html","d5230e1151085d6e5f698513e97f7afa"],["/post/d632e628.html","e2bb58676306bbbd2a87539f9a7edbee"],["/post/d6a5bd15.html","dcf07c834657d66924d1fb365652dfa2"],["/post/d73de254.html","80f7e4ede7224c187e74efd01cbe3053"],["/post/d7435d20.html","f3b592b77dc11078a299e4770d3340e4"],["/post/d81c5363.html","9a1c868121f7363128c6b34190490917"],["/post/d899bd9.html","fc7ea187ebd849412d6b87d89481e3ce"],["/post/d9083bc4.html","46c13c2be40d2eca6b5be3e242f7ec73"],["/post/dc981233.html","fc7181c3afa16eb27ce53d52866377c0"],["/post/dea65d58.html","df6ab7c905ff2d437478d8f91473ab5e"],["/post/df76d545.html","99a849f2cd27c157d4f014809c234bbd"],["/post/e256d99f.html","13b2a224c054e5ae2abba60b28e7aa02"],["/post/e290dd8c.html","a2b86689236ffae05a52ddc3d2bda307"],["/post/e3e37943.html","6e15e8e4e63700335c79da57e43558e1"],["/post/e583ed8d.html","61c5062d6f5e3bd404d0fd0d76eabac4"],["/post/e5d75450.html","bbbba2eae8a33c932f7986ddf62261e5"],["/post/e6364ca4.html","98194709f7277c98f794411022e815f7"],["/post/e7058b47.html","e3a0225c9446fa75c0da362259ebbfd4"],["/post/e769f01f.html","ffc970f70df7c30f698cfffcc54f7ea4"],["/post/e78ad34c.html","29ca73e7c6dd19c820d26608cd876827"],["/post/e8005312.html","2ba21a88a80f8b0e9a46e0cdd3227774"],["/post/e8ae7612.html","12aac63419ddbafb5eeda48851c3d322"],["/post/e8bc7157.html","075cc5e4c7bbee13df101b03640ff812"],["/post/eae0b80e.html","403dac5a9ff5a510965a73fe6fdc54d3"],["/post/eb9ab36.html","6618de17b55beaa7092a240e7a2fea98"],["/post/f0b23c5b.html","ff677daf90cd1df8b7b8fc490b96f239"],["/post/f279299a.html","eeb3fcff3e50e922f0f861d3aa2f2ade"],["/post/f3d9c661.html","39448804c265d53eee397ddd9538f834"],["/post/f4bfd16b.html","5ef1e6c1bf40ed29521a0e3ae6dfb37b"],["/post/f7b33ddd.html","14ff957686da1da6067c444a1e1620ed"],["/post/f8e4bc7f.html","442a30e74dcf1f5c11e484ae9e0f9687"],["/post/fa83cee.html","d69a1ef047e8296764d9adf7bd54949b"],["/post/fb2f630e.html","6f43193e405ef7e5fbae1d561a0bef98"],["/post/fb5efb9c.html","bd7776330f8078c59cd3bd88e385731f"],["/post/fbf7f335.html","972c6be7f70fb79f5b7a0382f48a347d"],["/post/fcb9464d.html","6df6decc5d82f8691e119456f81a4f0f"],["/post/fd581850.html","f917a827245b704414e9f86132592ca8"],["/post/fdc06f3f.html","d5bef3bb69145022448b98d4f7a5783a"],["/post/feaebfb5.html","1a96bad13ee749045e3524c55be1ab8a"],["/sw-register.js","a97823ee6c1b44e843c651dffb43a3da"],["/tag/1988：我想和这个世界谈谈/index.html","05f6446acb0ce056ee2efcc3af529ce5"],["/tag/1Q84/index.html","281461e489be93579e837918e6710415"],["/tag/2017HDU多校/index.html","9b0fff2963da83938dc11fe9bf81ef70"],["/tag/2018HDU多校/index.html","910c7a5460d58dd98ff7608602b0599c"],["/tag/2018寒假集训/index.html","bc2e79487e898c41fccf85bb0f125f29"],["/tag/2018寒假集训/page/2/index.html","e80bc79476b471b8c8f04b46a930e950"],["/tag/2018春季训练/index.html","e986e74256917d631cf048bab71ef330"],["/tag/2018春季训练/page/2/index.html","55c3ef2f3a98181b026263dd864cbd68"],["/tag/2018暑假集训/index.html","2e1a9c59785a25d5ef48f4a672b86440"],["/tag/2018暑假集训/page/2/index.html","8910893ed005b6af6f9e324835417867"],["/tag/2018暑假集训/page/3/index.html","ce9dc41c992c5e256b469a2a5e4fa197"],["/tag/2018暑假集训/page/4/index.html","e32d15d4b3f017ad83255c6e2894aed7"],["/tag/2018暑假集训/page/5/index.html","df9dcf5de9f92796ce2a1a67bbb03be0"],["/tag/2018暑假集训/page/6/index.html","1730023d7c3ecafc08202d26ab1aca72"],["/tag/2018暑假集训/page/7/index.html","129206e069ec4863fb354836f913bfdb"],["/tag/2018暑假集训/page/8/index.html","2b693a12618dfd1732ad00a166808977"],["/tag/2018暑期选拔/index.html","a2fb11af629d53b5551f73c59ecb1e96"],["/tag/2018杭电多校/index.html","a6287a2e1fc2726c29815ad7fac8f46e"],["/tag/2018球季训练/index.html","afe701afcb86cade6474bd7e95daf0ca"],["/tag/2018秋季培训/index.html","cee77442f4f8f356387781cf61f17162"],["/tag/2018秋季训练/index.html","f98140e68f4440b286e7d26c9688a706"],["/tag/2018秋季训练/page/2/index.html","2cc6e4d1e38019261a122117513f1eef"],["/tag/ACM/index.html","7588c2e2c2dc730d70516c513816a944"],["/tag/ACM/page/10/index.html","4e9d7f5660d37dac970463ba3d95913d"],["/tag/ACM/page/11/index.html","13b9a57f5ff9cb417c0e53ac131dae5e"],["/tag/ACM/page/12/index.html","8bc8e371c49a8a6fbce557d39ccdc1b8"],["/tag/ACM/page/13/index.html","8979dab0582797acc75f87e0af89460d"],["/tag/ACM/page/14/index.html","55e4a23346166b7f7491ec152eb24019"],["/tag/ACM/page/2/index.html","2d882139804c7f38e533ec0bfb9e8bf0"],["/tag/ACM/page/3/index.html","0a4f6ee570fa2d8cbabb0f913398e838"],["/tag/ACM/page/4/index.html","8f886bee4031f49763665dcea6268fff"],["/tag/ACM/page/5/index.html","b5bfe96379de082e0359a8539e4ef5fc"],["/tag/ACM/page/6/index.html","33ab485cd38ed03792549ceb21a82fe6"],["/tag/ACM/page/7/index.html","27ae54b25fc6b59e3556430331da21a6"],["/tag/ACM/page/8/index.html","28e6b5499a0c7d27d3a25c9b1bfbe64b"],["/tag/ACM/page/9/index.html","7bccf4250beed3905f542e82b4c169c8"],["/tag/AWS/index.html","ba3531dd3c557d86798fb2d6ed574478"],["/tag/AtCoder/index.html","60342efdcac90ffc8a5835bf587fd3b3"],["/tag/BFS/index.html","78163dc6ecfd675c78e955c30016e7b5"],["/tag/C/index.html","282cb6133cfc6c917266be2c74f1edc6"],["/tag/CSU/index.html","49c7b36ee3b18b349e0b7eaf985a00d0"],["/tag/CSU/page/2/index.html","a1341f5618bfde6ff394423c706ed57a"],["/tag/CSU/page/3/index.html","f7f76c336d67a36694872c4e6dd6be43"],["/tag/CSU/page/4/index.html","5ac2a3793f3ad4e311c9561ff051299b"],["/tag/CodeForces/index.html","7565de786477611f1c70e1eb5cbb7aa4"],["/tag/CodeForces/page/2/index.html","f23fb3711894b8e74d1dd2219cbe983a"],["/tag/DFS/index.html","1e75ab55608b37dbc21ff8181c81cda6"],["/tag/DP/index.html","54ad3e543cf4de75d12a720b81272cde"],["/tag/Dijkstra/index.html","dff0f9650ae478f36a8ca45d5c6dc234"],["/tag/Flask框架/index.html","753567b9eda692b730f4ec6b8fdbd95c"],["/tag/Floyd/index.html","69ca2ca4e55aa6376c4b2fca0ce72692"],["/tag/Git/index.html","c17fe8a4d3c1efb039c2f4e4b01defcd"],["/tag/Graph/index.html","0376c3b07f445a8c69ab6bf1195ee5d9"],["/tag/Greedy/index.html","f5e59bcec63117e36c19926f2ddac786"],["/tag/HDU/index.html","b310f0fe0d8563a0544a9efbb969c96c"],["/tag/HDU/page/2/index.html","5423232f6274d5c10172f58e1d4c9ffa"],["/tag/HDU/page/3/index.html","a01a0552f9936e1d3ae129f2b9ad6c72"],["/tag/HDU/page/4/index.html","4b8decf5467dc7e3539d3ad189e672d9"],["/tag/Imitation/index.html","456a6ce59c9e8a7b7ea9b959744bc4fb"],["/tag/KMP/index.html","1f89a291378ab5607a2086c380cd5e00"],["/tag/POJ/index.html","0db0687a9cea8ad4c81acfe2daf8ba7a"],["/tag/POJ/page/2/index.html","b34002b495f79395bc1e56f1b1fc949c"],["/tag/Python/index.html","bba8eb56bdfb16a73277cdc7fa496794"],["/tag/SCU/index.html","b829d8f195d898a09963c9bf7f33aa13"],["/tag/STL/index.html","a44ac0d209576b01af3c0f1a134200cb"],["/tag/STL/page/2/index.html","32fe39610fa0cce4bb17ef15f55aea34"],["/tag/URAL/index.html","1be676c71c8ba95c5dbfbdc9bf059f53"],["/tag/UVA/index.html","8ff2d794126b59d138e5a76d50db62cb"],["/tag/UVA/page/2/index.html","72c8af974123d0ce9444f7e12d36f717"],["/tag/UVALive/index.html","4e3afcbaf06b250e900719c7dcab8bb8"],["/tag/VSCode-Git-生产力工具/index.html","cc842c633ae94ee4c5794ffbeb88c52b"],["/tag/VScode/index.html","5e52df6f3ac0bc760d9b1b11c0a75415"],["/tag/ZOJ/index.html","0ee75881c6e7a4376b84413007b3eb38"],["/tag/math/index.html","2d995ba21d11744d4a53ca1dccdb5d8d"],["/tag/test/index.html","1019f5b35b548b9f4a524a461f2f59fa"],["/tag/不得贪胜/index.html","667cfcc056c0ad8df997bd9c62a5c0bc"],["/tag/东野圭吾/index.html","50f8df1c2a8b572f1c8244208d038c4e"],["/tag/乌合之众/index.html","3ac4ae765e41cb8b3d88e7015d5b2c1f"],["/tag/书信/index.html","030b29c98f85d9bf16dc32c0429e4ef8"],["/tag/二分/index.html","0b25aaf7e47ba7d8b9ed5c8b75e703e2"],["/tag/亚马逊/index.html","b02aa5f96a39e5dc4e6d9d0979c0c731"],["/tag/亲爱的安德烈/index.html","ce99a4977ec6fb9e2d83cb3ad800f0f7"],["/tag/位运算/index.html","c11034207a479c7d7064585e5089ef7e"],["/tag/几何/index.html","3cc5f1230174fba32709cc121513f0a3"],["/tag/刺杀骑士团长/index.html","8aaa9acf3aef154d896348c705785c2f"],["/tag/前缀和/index.html","16c3c4cb6d6cb6e300cb9fc3fa7ba4ea"],["/tag/区间DP/index.html","5673f55ef45932eaf304998b663d61b0"],["/tag/博弈/index.html","640e14a674ccdcee25ef912c454d537d"],["/tag/历史/index.html","a293bf43a93ab1722afc5bc9db1dbb99"],["/tag/古斯塔夫・勒庞/index.html","0f9551e5d3722fc54727b7eeaa2a29f8"],["/tag/叶嘉莹/index.html","aa73203ccfa54566ab21efb002d59445"],["/tag/图解密码技术/index.html","222b5ba0fa7ac877ecb0dd9cda54d6d1"],["/tag/大数/index.html","bef694f3081a945efabaf06c3a2064f9"],["/tag/天幕红尘/index.html","62b78765ea6e482181b3e2674d2dd8df"],["/tag/如何阅读一本书/index.html","bb8845f258f76f0348be1e5110b529ce"],["/tag/字典树/index.html","229f035df1311f7960d46121a361fd02"],["/tag/字符串/index.html","09eb1fca2f35bbbe91c85d3f7c7dbb9b"],["/tag/字符串hash/index.html","4f5ee42a25574b1dfa3fdf954ee54f3a"],["/tag/安德烈/index.html","b8812c6a452ddc703e6534d2e75c01f7"],["/tag/密码技术/index.html","b1a867667e28ef56cc89a8e15e2f545f"],["/tag/小说/index.html","4582042d57ca5214b010ab0caf1d7ade"],["/tag/岛上书店/index.html","a7192c0863aaadc815e629157d19baef"],["/tag/并查集/index.html","d98869779afa3dbe732fb0433208d09f"],["/tag/待补充/index.html","29d042257cc541dc267cda568501a275"],["/tag/微观经济学/index.html","8f912af6bd7ae2ff3e301885b9f7d81e"],["/tag/数学/index.html","16446d190479ef49e054b1acc32c29b9"],["/tag/数据结构/index.html","49af1c2abd099d57706531d5d9f8f498"],["/tag/数论/index.html","bfe4e69722681d6bbb8521507f4a4533"],["/tag/文学/index.html","ed2276aef0cc2fd9a41c5c643b0f0058"],["/tag/文学，小说/index.html","4a979da9c8fa176eab74858c61491236"],["/tag/旅行/index.html","1ae986643b98538ad6ff3a5741cfaa30"],["/tag/暴力/index.html","a9cc1dcebb391984458c0433b1352ee8"],["/tag/最小生成树/index.html","d314f86306ea05d7ae4d2130a183bc9a"],["/tag/最短路/index.html","d570149f551e7d86ff3a84b4a54a5d39"],["/tag/最长路/index.html","20747b094e421ad6073f9487ba6286a3"],["/tag/本·伯南克/index.html","6f8257c8c1e6dfa372b1f0fd320afd3e"],["/tag/杂文集/index.html","6b0431c5003573003b6e36dd740949c2"],["/tag/李昌镐/index.html","74cba7eab383551be1c839771024ebe4"],["/tag/村上春树/index.html","f2edece409c9edd9e6c83685885c2452"],["/tag/枪炮、病菌与钢铁/index.html","354d12982fd5bd249742fc4b2e1bda24"],["/tag/概率/index.html","8172954c8696ab3594ade455ef041d7e"],["/tag/正则匹配/index.html","6c2d97658195c92a646408281ddeb369"],["/tag/水题/index.html","8b62d5bbbedf2fecc92f0421c79bd52f"],["/tag/游记，武汉/index.html","213cc52eb7594c377190e7a21b12b263"],["/tag/演讲/index.html","eda2d1fa6ca7c1bcc88515a88f1a939a"],["/tag/矩阵快速幂/index.html","e7641e308cb428207f54cc372a9d0aa9"],["/tag/石黑一雄/index.html","28eaf6a114b603525b17d8e647d664c5"],["/tag/社科/index.html","1573fcaff6bfcae6376acd1e2ba814c3"],["/tag/笨方法学Python3/index.html","df7805fed35e528dc587a92c6ae20a3a"],["/tag/算法/index.html","0a60f13ae394a20af269df8547f6c769"],["/tag/算法/page/10/index.html","4e4329ddef54bfbd6a681c99d12da04c"],["/tag/算法/page/11/index.html","73eeb42261fec0d84bb8ea655af8261c"],["/tag/算法/page/12/index.html","236ad0e74ec42c49cf4cf7c2e69aa705"],["/tag/算法/page/13/index.html","d7aa3752c93306067d2e5654eb5acabf"],["/tag/算法/page/14/index.html","9f35767854a62b8ad6eec517e5ca666b"],["/tag/算法/page/2/index.html","d1bc5d8210fa875b3c1ae643a32be9ab"],["/tag/算法/page/3/index.html","d55d547820fe443639f8d73a4c0c29b1"],["/tag/算法/page/4/index.html","7dc08eb510f5978f2ee7803d717c985a"],["/tag/算法/page/5/index.html","eededfde98b6298c169e426a6bddb3b3"],["/tag/算法/page/6/index.html","e90db5a0fa28a5df4246ba626962c5ec"],["/tag/算法/page/7/index.html","95a1b94157a22d5c3642064edd637dea"],["/tag/算法/page/8/index.html","3cea21dd14eb88b35cc8f103eccdd4f3"],["/tag/算法/page/9/index.html","adf5ced0d72608808bbeb2a65d45a280"],["/tag/素数筛/index.html","d80ae472e5a513c893708381a1fd3cdb"],["/tag/线段树/index.html","6749fecafd8d90735cef3a6bcd783793"],["/tag/线索二叉树/index.html","48183acf6a091f4787d6c1c91873a9b3"],["/tag/结城浩/index.html","a8d419c92e19e1bc647da128cb95c7f0"],["/tag/编程-C-课程设计/index.html","f40b4762e9b10d4967083c053b6cf698"],["/tag/编程-PHP/index.html","2bcdc7439697859bff1071e98ad32b4c"],["/tag/编程-数据挖掘/index.html","3a0a81d35ac4cd3eef518a96423cfd0d"],["/tag/编程-编译原理/index.html","65ff7c76f930667d89aa6d28d92ba263"],["/tag/编程/index.html","03ab67c6e4ef83f5d6d6f2205ef0d51c"],["/tag/编译原理/index.html","9941b2809772e19faeca5e55b225bede"],["/tag/自传/index.html","bfdb3b8e06b040a1ca042703ee39dfaf"],["/tag/艾萨克·阿西莫夫/index.html","e3514e8c73277131a0d8973be61cfb69"],["/tag/补图/index.html","feccf491bf31e9a7f252b0023bc68a85"],["/tag/规律/index.html","29e827dd7372c7f54eb3ff6eac77d579"],["/tag/解忧杂货店/index.html","1c900013800053e9e479518e2a667977"],["/tag/计算几何/index.html","a288776bd33f59b024c503072b6f590b"],["/tag/讲座笔记/index.html","a3e0c5cd16052daceb8d38006fb49fe6"],["/tag/读后感/index.html","4243382b42cf41a2d8a2c3239a05a2e9"],["/tag/课堂笔记/index.html","1a6a4cd2c210160039c882c3bf6b299d"],["/tag/课堂笔记/page/2/index.html","65392c2f97d6cd1d89846f65bec06eb6"],["/tag/课程学习/index.html","461a0d74d30a6db4c95c7b38ffd04cfa"],["/tag/豆豆/index.html","10e15efc25b116356f4e6687c09860d7"],["/tag/贾雷德·戴蒙德/index.html","29dfbef02f24daedf479544b733ad582"],["/tag/辅修/index.html","d4bbcdaf8dd50a7145435f0862fdbfe3"],["/tag/辅修/page/2/index.html","886aa89a3db57075de01fccfc4ff48cc"],["/tag/递推/index.html","ee49231f5fb258f875cd429f293846e2"],["/tag/野火集/index.html","f5c1d60a0a3812878b474e4baabc6fa9"],["/tag/金融学/index.html","d4cf13684ce0e4d748d3e4dbd347c0d1"],["/tag/金融的本质/index.html","3b959d5c623ee867aa44e65c35474e2b"],["/tag/银河帝国/index.html","73ba754b46889ddb44919a4c34f4a754"],["/tag/阅读-社科-西村吉雄/index.html","1217120dd4d86db450e6fb3f314f5d67"],["/tag/阅读/index.html","36582f1fdb155ed9d61212151adb9778"],["/tag/阅读/page/2/index.html","9d7a57cd36f92b06b0cac7b3455bbad7"],["/tag/随笔/index.html","867095fc97ca30d1c6717214851dfe3c"],["/tag/韩寒/index.html","040490e47b6dbddbdd524bf30ab3c499"],["/tag/龙应台/index.html","b56ff23525996408c4df6518a4d2efeb"],["/tags/index.html","9c92de07fa9d48e4f7112155ba180ff3"]];
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
