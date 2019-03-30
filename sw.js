/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","714523a34c04d202d27dbc91e3842d49"],["/archives/2018/01/index.html","2c17ab183a697ca0d58ee1b47db3373c"],["/archives/2018/01/page/2/index.html","74c1a618f3d2b45f854cf1636bd6ced5"],["/archives/2018/02/index.html","a6cbc6b4c6ce6b0f7f2e5b9d9f32b1c6"],["/archives/2018/03/index.html","3985d50b4704f8d722d7ee41a30276bf"],["/archives/2018/04/index.html","61fa0cc43d4e47715271f01cbf2ea058"],["/archives/2018/05/index.html","c666c6c7e4a55dc49b7d6cbef56bbdc7"],["/archives/2018/06/index.html","0ffa63edfa6d088e52e1baa513f32df0"],["/archives/2018/07/index.html","e6cdd61f20109389773369241497f963"],["/archives/2018/07/page/2/index.html","2637d36be297f2125958f7fcb868c6e9"],["/archives/2018/07/page/3/index.html","c8903523a255433aeca740b5774f8c30"],["/archives/2018/08/index.html","aa3ff8a67d1835f9bee6b065c5087219"],["/archives/2018/08/page/2/index.html","059087c28ee856c470293d654e3bfa14"],["/archives/2018/08/page/3/index.html","3da15b9d92b291217b919cdd5f1a11dc"],["/archives/2018/08/page/4/index.html","f896166f28a29e968dfaa16142fb2727"],["/archives/2018/08/page/5/index.html","d2c172ab83cef61095a69ea2bc0590ff"],["/archives/2018/08/page/6/index.html","c065b85d336cb617d1462d39b6c9e295"],["/archives/2018/09/index.html","c3a7ebde8c8446e0d01d689d2308649e"],["/archives/2018/10/index.html","1dc76cba5bac86b9f2e96b77836f05ff"],["/archives/2018/10/page/2/index.html","e202c1ef540d01b89af2996a291a813b"],["/archives/2018/11/index.html","d6b69349f0f99a60593128442c238879"],["/archives/2018/11/page/2/index.html","6e80dd97efe1bb79012141cfbe9743f5"],["/archives/2018/12/index.html","813cbb59a0d3f7ff44551ee59ed553c5"],["/archives/2018/index.html","a862dce922b5f59b0812d315e11b3321"],["/archives/2018/page/10/index.html","6f11d0e620e7d931dd7489d5631c2457"],["/archives/2018/page/11/index.html","5a2ae869d5fea1f1b0f96c5cf29c972b"],["/archives/2018/page/12/index.html","2393c8cf8714c3bbe8127b134142b950"],["/archives/2018/page/13/index.html","1a128d75e76942ce88d92f045391f099"],["/archives/2018/page/14/index.html","e2ad105c26423274cf3a72536456a136"],["/archives/2018/page/15/index.html","2f671bf6ce6ede8b2ecb1e22370b8575"],["/archives/2018/page/16/index.html","290ff61b97994c85466014c89b189b3d"],["/archives/2018/page/17/index.html","42aa51816bcef4ee16ae6f47e6e8ddb1"],["/archives/2018/page/18/index.html","ac4499269438a29a4e5092e3b530c44e"],["/archives/2018/page/2/index.html","03e165c6e162f4d93deab51f6a67c24a"],["/archives/2018/page/3/index.html","82482a3de8357dfaa613c064f1ab10fa"],["/archives/2018/page/4/index.html","cfe6c39383603ae0f6c24b39d3bb7237"],["/archives/2018/page/5/index.html","b9c7f4954a4096307230624911b4cc01"],["/archives/2018/page/6/index.html","9d16403472d4dd0c5f5467d6e8709503"],["/archives/2018/page/7/index.html","a18fe01bb559cb0c7efa8181247e3899"],["/archives/2018/page/8/index.html","a858809a0f013c9dc0da20cdceae931e"],["/archives/2018/page/9/index.html","1b7f3aa96909a9de693e3ffcdb0c3381"],["/archives/2019/01/index.html","111a500813fb0f4d5e264d2e9b468624"],["/archives/2019/02/index.html","a95a6c3a9966cf7b4ddba2643aba6f9c"],["/archives/2019/03/index.html","45196c0e814b6d7b371a5d3f707eb895"],["/archives/2019/index.html","dccae10077d524feefcc8d23fe30c7ed"],["/archives/2019/page/2/index.html","9932b1757862499d1c127159fe3673df"],["/archives/index.html","81b686fd6278da1d7386c36c9deb68d2"],["/archives/page/10/index.html","506a71e64a8183af00b9c65a0c478c9b"],["/archives/page/11/index.html","c8af79211d9ac62fc57e93c29faa21b6"],["/archives/page/12/index.html","d4d523980dd2025b89079ca5b1b09c0b"],["/archives/page/13/index.html","0fd3b11bf505b02b87ed141c9ac73c8f"],["/archives/page/14/index.html","a8afccde1a05dff333ca2bc82ae96cb2"],["/archives/page/15/index.html","d5175a5e69a26221a6104aa4cb205d65"],["/archives/page/16/index.html","ab3070ac603495a378f6d071f8a2015d"],["/archives/page/17/index.html","a95f2df47f3992b781f643ee8a2d2e4d"],["/archives/page/18/index.html","f0097eb18fd0dd64f82abc368d262b00"],["/archives/page/19/index.html","9db511c346ba21c221a8ac2e9c2c39e5"],["/archives/page/2/index.html","4fb47eafe0ff317b1ceffc6c457e09a6"],["/archives/page/20/index.html","3e898579e4397539fc7ba6c2a9fc6dad"],["/archives/page/3/index.html","7ee03962b27dc1aa10e0f2f75d840d4c"],["/archives/page/4/index.html","c9d2bfc0e309bffb2c9d223fd17104d9"],["/archives/page/5/index.html","e81ba9e6289e11aff171a974d7b9e937"],["/archives/page/6/index.html","68387f39f7642c33c745807bf5df3706"],["/archives/page/7/index.html","bdc03aef2bc0ca9815a3a70f97ff7f03"],["/archives/page/8/index.html","9bbd82aa48186fd3450b7b28f3d81d1b"],["/archives/page/9/index.html","00f780e20d5270e0d36672d282974ea8"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","7a6d920de680f283a1d4c5f69b3c175d"],["/baidu_verify_ZzhwBFUe1V.html","f8852ee8fd2b84a17ed31cd9868d3223"],["/baidu_verify_dw73Nh8OEw.html","d833f272e5e1d07369b286fe6a602c44"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","3097f98759bcabc7f5fd8c050d2e03ab"],["/categories/操作系统-集群/index.html","ddeaa420ce7c2bbc70377d036f7ff8fb"],["/categories/数学建模/index.html","d54cf4ec28c6725022e74940c98a9c45"],["/categories/旅行/index.html","046e300a8bf2d079362c53931493f19f"],["/categories/编程-PHP/index.html","82d45d23ca5833251f67d1d0a6ceff31"],["/categories/编程/ACM/index.html","d89d8901d41ed7ba83f5956fae2c626c"],["/categories/编程/ACM/page/10/index.html","ee422ac5a362a67ae950b172464af291"],["/categories/编程/ACM/page/11/index.html","340899fab5635247582afcda0aa9ba21"],["/categories/编程/ACM/page/12/index.html","08c5e87a35c237996bae4dce1bb98943"],["/categories/编程/ACM/page/13/index.html","f240d69b1f59c687de29e34229ca556c"],["/categories/编程/ACM/page/14/index.html","c819ff5ae1221d7646d010f496c5aa79"],["/categories/编程/ACM/page/2/index.html","aa5445f893547d7fdb5bb2df58e28828"],["/categories/编程/ACM/page/3/index.html","6a1c8d048e1f9b60a6a2585a12f223f3"],["/categories/编程/ACM/page/4/index.html","ac49b33d273da999d69177ad7434b1dc"],["/categories/编程/ACM/page/5/index.html","485694247f7a6635ca110c8b0d86fbbf"],["/categories/编程/ACM/page/6/index.html","b8acd8a1763e5fc659167abcf98d7012"],["/categories/编程/ACM/page/7/index.html","78cca18e6c92aac74666cc8ee7b625f2"],["/categories/编程/ACM/page/8/index.html","6c1b76852a0ec344b42d6fe49abc5d7f"],["/categories/编程/ACM/page/9/index.html","7e49c86378fcbbaf67903db781d3308a"],["/categories/编程/C/index.html","7aaca0801c2636469047d423375f3f57"],["/categories/编程/Git/index.html","98db1e576a6ea4a3802ce931832f704b"],["/categories/编程/Python/index.html","16a116d90ac85409031e36f702c9171c"],["/categories/编程/index.html","ac4221724cdea5f455b5ae04168d99d7"],["/categories/编程/page/10/index.html","4e4765fdbe175d3bdfe05382d169af3a"],["/categories/编程/page/11/index.html","afcdf6ca0ef82e045395675f42dad735"],["/categories/编程/page/12/index.html","20994bef7c148f926a50973a402d9421"],["/categories/编程/page/13/index.html","d0817443958f82fcd059b759fb1da4bf"],["/categories/编程/page/14/index.html","43ddc4e6b0969514653b7f3ecf306eaa"],["/categories/编程/page/15/index.html","7d03fe130451b792198ed1ff7a2efa27"],["/categories/编程/page/16/index.html","90bb48556c6511d8a3b71884c7c0d0d1"],["/categories/编程/page/2/index.html","5283cb8e5f1a609b25e8da14a208acea"],["/categories/编程/page/3/index.html","15c57cada427612593278f63cc58b204"],["/categories/编程/page/4/index.html","72ec31b1f5c85c594ef89ac2f29fd74d"],["/categories/编程/page/5/index.html","76d6cc9fb5dd19accabe09bd79b2d6b2"],["/categories/编程/page/6/index.html","98c1f8d081c3f58299b1f5b69fed6ee4"],["/categories/编程/page/7/index.html","8e6b8e991180174b175b353fb3e1f9e2"],["/categories/编程/page/8/index.html","6ff58eda5549e97cd8790aefd95edcb9"],["/categories/编程/page/9/index.html","ff2ec1413ebe6744b85f6e25959ed1e7"],["/categories/编程/密码技术/index.html","1813171f37b6d5d4497376af8b8725df"],["/categories/编程/数据结构与算法/index.html","f33b107c52b87ac976125c054ef7b802"],["/categories/编程/生产力工具/index.html","833982240e8e3139d7851daf05d8c070"],["/categories/编程/编译原理/index.html","1c38320a15c6efca8318cbc42f6db416"],["/categories/编译原理/index.html","58fa8f3c478a3caf14368d9046c6a4be"],["/categories/讲座/index.html","8cc83d095f15e17f72f759a1d19a5cb3"],["/categories/金融/index.html","c1e11dcbb577bc59a362332e981c6476"],["/categories/金融/page/2/index.html","d80d756ad77a339759c5272d3558662f"],["/categories/金融/微观经济学/index.html","f0dd453666330b3bf4c8d05c00e62485"],["/categories/金融/金融学/index.html","ba56f2e9cbef64629afdcdf10434a93e"],["/categories/阅读/index.html","7d6f2952a10862c645aac5e4e80d19d3"],["/categories/阅读/page/2/index.html","254e140b29c7765931376d27c5ce6792"],["/categories/随笔/index.html","09661be4e72d1619cb6eb32c12b500e8"],["/css/main.css","28476993f3f6a5e1d9bbe7af09f728a2"],["/friendlink/index.html","98ba35baff4c2acd5c6cdd8d7157542f"],["/googlea873f713657fb5dc.html","7a77eabc5cf2c15cd8c10712e90f923e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6db82f7e38e7bc7e561cd2db207bb44b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","127c78d2bf0f5eae3d587483185e8f95"],["/page/11/index.html","88f23631de97903fea732a2d0da92747"],["/page/12/index.html","302f3650a6f4e9a80ad46236d78f30e1"],["/page/13/index.html","0c0990a7cb46f7db3d3fd3ff88ddf677"],["/page/14/index.html","23db06a4d6687b9dd614482824064f42"],["/page/15/index.html","fc04b0eb91561542e97ef594eadb4f3b"],["/page/16/index.html","0256505bd6bf026426742a8796b89be0"],["/page/17/index.html","efbf85e9e4c5cb9911bbcfc75a3ea226"],["/page/18/index.html","632955254c2b13d31299f4e393729627"],["/page/19/index.html","092b6781ce4ac792c9aa518101dd32f2"],["/page/2/index.html","091ab9f4f59daadd84a0de542f14176b"],["/page/20/index.html","05d1d2c12a770761905536c090675f8a"],["/page/21/index.html","ae7f5d476de42e253a37b91b0bdcd8bd"],["/page/22/index.html","bf3ee37170e5224c8649bfbb3ad6611d"],["/page/23/index.html","078d60a5662c550355887da74e65f537"],["/page/24/index.html","37129c03be9b6c4e71b39254fce324e5"],["/page/25/index.html","541b87ae81e45f6f31b6efe56d1b7634"],["/page/26/index.html","909cc8fb1449cfd938a6e7b0f28cc0df"],["/page/27/index.html","b923e6bcdc21c038093aa4009753d78f"],["/page/28/index.html","4d02a57a4827b521e424732c501cc462"],["/page/29/index.html","7086f48c67607f4ab3cd6acefd86589b"],["/page/3/index.html","37b0fd4281698ed048b1b99735379037"],["/page/30/index.html","949d46f9f3d484c0d201573e4c966ee4"],["/page/31/index.html","6750ff5fca4d19bc63fbfe768a6b0f67"],["/page/32/index.html","4b03e51b019e18d52e4c3e5e987a2388"],["/page/33/index.html","280615487452447cfb1f23ae15f94b31"],["/page/34/index.html","6705c616aeedfef958fc497b4d7edf9c"],["/page/35/index.html","af7eaab4cfcda23379807743157cd2f1"],["/page/36/index.html","0513313b288f3379aea4fb88b6c6c477"],["/page/37/index.html","a839c6a8427b622d42ad91849ca24d82"],["/page/38/index.html","5e7e5ef3e4a268b75215fb8f795154bd"],["/page/39/index.html","f1b05cdd0fc2aad9a2fa855dcdd44d60"],["/page/4/index.html","7493f5ef7e9a717f2aa42663cc4b4fbb"],["/page/40/index.html","15d7bd8b65738cbf338238570eb79ff1"],["/page/5/index.html","8c7a210d2c8779027034ef1c00223ad0"],["/page/6/index.html","f1684d6ba77441dec98c0ac73d529e52"],["/page/7/index.html","77caa0504782e926ef820361c183ee3f"],["/page/8/index.html","7226681f664ac2932ada9868b75656aa"],["/page/9/index.html","73dc222425a358c49c80d93698b956d2"],["/post/104a4c5d.html","d72d106f0a5678c446272169a87f6e0f"],["/post/109aa3c8.html","dbd3deabe98dc7a29b1d04dcdd40fb41"],["/post/11246bdd.html","6433fe4a706349fb264310b7df7feb05"],["/post/1233e925.html","babea1c978630a58ee30fd9ac8c032b5"],["/post/1448d9c8.html","b31b5fc9364007dd79d14f4cfa476e8d"],["/post/15db1cd9.html","752cb28f7ac80e840ffa7109ce6e7c15"],["/post/16b5efde.html","30d711e987e991cd8bf013395457b30e"],["/post/16fa37a4.html","5e18fd8c862e9aca391047c6ee6c69b1"],["/post/184fc5c7.html","624312a4efbc9ff79fae3675b08eaacb"],["/post/19e79191.html","20239e920b036814c3cc2149db617176"],["/post/1b7db6f0.html","4660a2dc3edff8bb9c7a13ff6333613e"],["/post/1c52564f.html","1f5a810a867d153bf290511ea2091b65"],["/post/1dc46f40.html","e47b10d597bd4ca75ac39605177b9786"],["/post/1eeab2ee.html","06034c8013fbc8c266ca0c77db07cfc1"],["/post/2024a703.html","c8860c2ccf26c1c18231e91c2ed3e3d3"],["/post/222505fd.html","30c7249d253ad0cd1c4778f02aa0b41c"],["/post/22b5b237.html","287298043b95b5cdbf37f18f43ea6bb9"],["/post/23f72a93.html","d7f4e4206d8d666b9f6c872f1f3353a5"],["/post/264a9c89.html","e392f2321e85447a4ce4495e8c4f1c6b"],["/post/265c0f5.html","c8e0a92cacce95c1b33deab178cd70f9"],["/post/26fa4dfc.html","b51d036f471bd6e73233d03e93f093f2"],["/post/273ced06.html","6a7419878593483bce297572578efd22"],["/post/280fbdcb.html","f2395a099de1f86cd033e15fdf0c4e0e"],["/post/2ee4d523.html","858cb5664adaa99c8f93669c20daefce"],["/post/3090aa13.html","b822109f390ed6926b55fbead0430bb8"],["/post/31a770a5.html","1f5516403f6f613fe841f5c89cd17b13"],["/post/31f89579.html","9b41999f92b9a61917d3d0261517b3db"],["/post/32dc51f4.html","7175e3ccc130e5b9cc58c350a53c6bf2"],["/post/34a049ac.html","17a5015a56dfc5246b27cb753049df72"],["/post/34f53a10.html","3d673557070bf1e1843f9fdbcf2315e8"],["/post/36bef409.html","df0aa98213e9f1f8ed46806efe933594"],["/post/36e5881d.html","1f5af92011bb7bcb50f9131b284ae6d0"],["/post/380486cb.html","fc7d257cb2cefc0ce529182e51cea2cd"],["/post/38f8b110.html","c319156417ff5eaff9df19950ee1b7ec"],["/post/3a3eaae1.html","54a23220af0665b65b1d1c3a1b896909"],["/post/3a72081e.html","74631e3e90d0afd559ac398e1b62a65c"],["/post/3bc7f503.html","659e82dd06cce5976bfa45feb0f3ffee"],["/post/3c57c5dc.html","be3c9465d742aadb5b5f8269980130e9"],["/post/3d71c64b.html","36d52c1d513222c708ddb9116b8d27ba"],["/post/3d8072b.html","730b1a9845fbb13158e1e9eb6428ed09"],["/post/3e6878ac.html","b65e5fe20199c987c56addc1080a3853"],["/post/3f9eff25.html","d934f39264b370d48b71d3d2fe5f8829"],["/post/3fce0650.html","2bf9918396c11e30c17f3d7745b1c665"],["/post/409dbc1a.html","38e1a50fea04ef6cdbe61db7c7c56fdc"],["/post/40dfaace.html","0d24c714f783cccaf9340c7a675c8bf8"],["/post/4255f31a.html","112cbba39020910b9d46e9bdffba7be8"],["/post/42a619f7.html","8c95df2846b5b774d0e0f884c841c9d7"],["/post/44505a5b.html","f96cd1f44a5f2cc5295dd195c5bd4270"],["/post/448da703.html","ab22d58d94f6c2c3358cb6c0d8f037a4"],["/post/454c2118.html","5a060a260ddfb39a63187f50e2d51eec"],["/post/454c2358.html","b943c0bab9a4c80196c158ed974f64a6"],["/post/4773b69c.html","e3107577ce70cd4490857bbd366619d8"],["/post/47b391f2.html","f433e7944f7640373f87cd6264a68839"],["/post/481e8abf.html","fb514bbc6d58ec0ff1c61685b3358a57"],["/post/4ab96b49.html","72eb0ec51059261d966b6872425cf325"],["/post/4b15f9e3.html","e8267d0f6c646fd4873f04f10ac63089"],["/post/4c60a529.html","c21ae69ea0b020beb1bf62078cefe81f"],["/post/4d6a6b27.html","7e8de25bf1bce5ea71ff5926e57cfcbc"],["/post/4db7e28a.html","68f1f0dee2d62e5b148a76d93bd878ec"],["/post/4dc7502.html","387de681c374d5533a430770de0fdbca"],["/post/4e876bc2.html","0d7d3b1b8e98c4718c6f5a1fdf0d6e8a"],["/post/4f352d.html","479358ce7274c705f2e673a6ba62a232"],["/post/4f8fe65a.html","47b61b71d7660451aa3c545f211ede72"],["/post/4fa396eb.html","ebe00469b838c7bda2437711954da081"],["/post/52730f61.html","8ec0d0d3534128aaca37f97ef4248b1b"],["/post/531de0f8.html","a9d24428f45892ab57496d00d3015dce"],["/post/53729461.html","0bfe483f7d86fcd2e95193a3cacf924a"],["/post/5555df5.html","8f4dff74aae5b4f40dd970b2864f8a20"],["/post/57bfde8d.html","fe2b7476723a70c67672ddb7571468f9"],["/post/585293b8.html","39f4f37f0834026f759169ed1773cd22"],["/post/5aa5290d.html","96ce5b148a300e2b3136c4245cabab0b"],["/post/5abc6d45.html","d3b0131391243cf00e755894ec3d42d1"],["/post/5c86d06a.html","2150ad8792fa3c1d1a206068094ea865"],["/post/5e189593.html","31af3203277b201b586f4ace8fdf8813"],["/post/5f2d4a77.html","0a3c4c17c2932f10055979e3098e01c9"],["/post/5f341cbe.html","c2cc113a2449ccd41f2c2764ed18da3c"],["/post/60850415.html","17e09c2f0faf9543befe6b2c4d2c6772"],["/post/62cb42be.html","1d343f4e3e75afbbdcabd1ca5c34a508"],["/post/6501181e.html","5c977b3e5d20c58d7d21fbecc802ecf8"],["/post/66258384.html","42f639b8b8782340cfa7f0c3aba0f589"],["/post/662b8b80.html","0d9a9365aefb39042fc4eb178a995e72"],["/post/677d0fef.html","237def64d8dbf0205af42cdbd2d010c5"],["/post/685bcc20.html","fcf26e6646c8785146ffea2a34f80a11"],["/post/686dc27c.html","f67b626cd9d1d0221752c732f793fc06"],["/post/6c71e418.html","c3a0502abc7597472a4f76ada4a98dd4"],["/post/6ca1eed5.html","71debe34df5b3d99af5bf3cb90fc46cc"],["/post/6cb7680e.html","760e74c62e83395332c3515213526007"],["/post/6d52b9f2.html","68a62ec0da1f97b84c69cea25dbe71cf"],["/post/6db0d89d.html","9b766c0323f9f0a72819e6965fdb338d"],["/post/6e80eb1e.html","93318ed0b33c8dbf7095f20d96ec874b"],["/post/6f3b3edd.html","bac29130faf17bf6754481b0708f1ea1"],["/post/6fc3409b.html","a4ac5fb8c7a8a37ae903161994439730"],["/post/703409c5.html","9e3b2146310ea30b25bee6a26ad703c9"],["/post/7169c4ed.html","6755e4408a4edde4e38857816a545d8e"],["/post/73136b.html","e888a86895b541f21abafdfa019aba04"],["/post/7410a832.html","3465aa1935eefb1f2d169a73ae3f3e17"],["/post/742966af.html","e5ef4443706d6d9bfbda22eef945a58c"],["/post/74479d01.html","dc3082f23b31f21635880577abedd69b"],["/post/74a4286c.html","10c3e155aa9a0ba69c8f413a73af5d8e"],["/post/75794199.html","b2a40f26a2ec768a5e3fe7b639a589f2"],["/post/75f986a1.html","a8dcdfd3cfe99d2c7426b4a50041745c"],["/post/76485a7.html","bc274078821fcf2d3676b07675608998"],["/post/772fc02c.html","b4456623f6a1abb1a797756ae28367f5"],["/post/792e36ed.html","24bc5184a8e979eadec2f6184b9e6aff"],["/post/7c50967.html","6c32bea90fe2d7840cc8b53d1ebc15ce"],["/post/7d8e4f2a.html","5143eee4648e8d89936c542bbb9c8b5e"],["/post/7ef8a98f.html","05f999b2b1cf9a4f1981f96becd0231f"],["/post/7fe193be.html","d9701356adc4f8882a7dfa129dc91335"],["/post/879e9655.html","77ce8a73fe8ced9156f5d193da210927"],["/post/88e8ae98.html","8d23a98636cb52e41b803dac1eb79879"],["/post/89873dd3.html","794396a666e763d790548499ea9d48da"],["/post/8ddc8a30.html","2d0d3590c07bfc366024d794e40ed741"],["/post/8f9cfad3.html","85c8ec6a330babed020a4c122dbf4fef"],["/post/918fcaa1.html","42320f11e0ae1a28195d618324f364bf"],["/post/92687617.html","55a643274b7a580b67238e95e527c487"],["/post/9282aeca.html","f124c2ff216e3679046159740b13c1aa"],["/post/9305c5f5.html","07904b71d791bc0d6b3f3015d55425ac"],["/post/94c9baee.html","3a7ab6a2a5287f56fec945ee8446c08d"],["/post/98804e11.html","7a9579d62fd26b40f7b7af7f6790e2b7"],["/post/9a9a4797.html","50457ed70ad02aa73ed3d9ff00116a78"],["/post/9c28a880.html","b7560fbeb2093f5dc48623a6bb20c365"],["/post/9c649212.html","9024007d57a7d5da7437d3e3be8ac8de"],["/post/9d402b32.html","439e076f9baede4bf587f6adc144cc79"],["/post/9eb065c8.html","795760f52457e4b1de4b7a1485461368"],["/post/9f8e212d.html","0998a5ba233c480b97d582c84c53737f"],["/post/a1751c09.html","41a932610fe30aa5420d09ed21069e67"],["/post/a1cef007.html","b4bd04631fddf5259a36384d17311974"],["/post/a1fc03d8.html","23417d7c0d66def1e58cf0a65cece07e"],["/post/a27e9acf.html","87ebf5b7d6ec473382fc76421df2caca"],["/post/a4c66bf4.html","09c3d3f0f1be67a8deba55b6fe763cbf"],["/post/a4efe87.html","ee4a9dc805b041972957826b74357f98"],["/post/a7528411.html","095f8d00bb44d9b43a641b1164c15270"],["/post/a8759852.html","cbc571e7dd3eb8c4161d6da5c6ac2c11"],["/post/aa0a97c8.html","c2cc2818bc33a6bde50677b96ff993e4"],["/post/ab4ed95b.html","b6bfa5900326b2b8786d8f6de7a30b0d"],["/post/ab720150.html","73d5937f05cc011b546cc4b0dfe6f7f7"],["/post/ac92be99.html","3f5499175386193b98a7a4551a08aa70"],["/post/acf6b02e.html","c64d9dd510f49b208514e8f29c254cc3"],["/post/b0d6c7.html","20b2ff6f73c0507b0592d0fa9e413494"],["/post/b3ee770c.html","9f92cfe023fc2c38152d89d19ce19c89"],["/post/b8ca3dfa.html","5f24dab97aecf930b90394fdb3d9b4b6"],["/post/bb7f8e97.html","a9d50cd0ac0a89b73249c23d2c822ba6"],["/post/bba462fb.html","9dc9b86d97439778022b01441bd77b6f"],["/post/bc8586da.html","c09019235a54d396c4ca39e8ade4f21b"],["/post/bcb02c2b.html","a1174a71bd206c0313c2ea9ba4814e65"],["/post/bd36a30f.html","7a4162ba64104329726337d429492642"],["/post/bde4b1f8.html","7c56aed5d67de27bbce09f95c3fe028b"],["/post/bea42f1e.html","bdc69257788911d4750328ee759775d1"],["/post/c1864474.html","ba67f7f77a3af2afc82115420efcb723"],["/post/c293d2b3.html","b8d1bf06799ae7d577f700011150e8f6"],["/post/c37095b9.html","d858a33b231fa2149ac68ee626178d01"],["/post/c5672df5.html","ddce4c7f8ee7286f7e1671ff5c93fd5f"],["/post/c6d76e9a.html","bc7d929264511963951577d1425a2621"],["/post/c7fb8250.html","80900bb2b583e5f096174bfa830a8df0"],["/post/c938bbd1.html","09e6b60ead43f79159f44ff152c28530"],["/post/ca14c5df.html","529fa7dbd93a5c942ff266af3aa853fd"],["/post/cd18de84.html","a472be56debc46c2558ae8f6d899fb43"],["/post/cd41dfb7.html","8d1e4f8742881664036e3436cd66893a"],["/post/cea184b4.html","e7ff2ff2c1e2518189d97642d9bfcee8"],["/post/d120bd8e.html","3dc14a0cc2fa79fe95dc8ff2423bd68a"],["/post/d50b784.html","26ee4afda7ba902de542aab786a6d2d8"],["/post/d632e628.html","e0464d1ad678d26b8a17f60222ae56f2"],["/post/d6a5bd15.html","173c8290cf0e88fef081b118a4690598"],["/post/d73de254.html","4e6c78dbcde3e10c1effb18515e089ae"],["/post/d7435d20.html","6b6c25627e38398e98ec3d8f66c33c8b"],["/post/d81c5363.html","3a6178c3e901ef999c78c3242d20ea1d"],["/post/d899bd9.html","b2fe662145ab3546114b6ac509591097"],["/post/d9083bc4.html","3df5994e88106dbdeedc066ac0da4b3d"],["/post/dc981233.html","197f874bbc5c940ffda33578c36aefec"],["/post/dea65d58.html","79125ae874c1d54e68f53eefb2602554"],["/post/df76d545.html","fabc030320ebb35e1db37328f3f77a5f"],["/post/e256d99f.html","a1282c070802e11d5d69b9e383f6c48e"],["/post/e290dd8c.html","22d285501593050f261ef963af5d9edc"],["/post/e3e37943.html","3f8388424e9966afc9532cc627fe2cbb"],["/post/e583ed8d.html","6461d9ea4dd930f35fc8186a12b126d3"],["/post/e5d75450.html","e69a840135655093aa51b86573205b62"],["/post/e6364ca4.html","06f061165cc97d6408f973d33c26d366"],["/post/e7058b47.html","4e090951e86a73aae259a5e489221e39"],["/post/e769f01f.html","b68af61de41b1e9538d5b225b18e5aa2"],["/post/e78ad34c.html","836b954bf8e7f6f75a986afb2946ff3a"],["/post/e8005312.html","ad8003c767030556c621cff292b9a271"],["/post/e8ae7612.html","689457f77b491fd7166e966bdaf6f340"],["/post/e8bc7157.html","28a774969551ca541c00b5933b5a69f3"],["/post/eae0b80e.html","8fb98983680a5aac444aa25e26624d40"],["/post/eb9ab36.html","aaf1576ee02bef7dab3d555a8f7d48b2"],["/post/f0b23c5b.html","f75b304a5d89c23cef990bcd90c031e1"],["/post/f279299a.html","2a016047ccbbd701d1d3412e16c76938"],["/post/f3d9c661.html","a495215b9e352911e0ecbd29b8abd0c6"],["/post/f4bfd16b.html","4f7a93e24dfedda05fb6e0377ba6f38d"],["/post/f7b33ddd.html","ccd10d5b80e9d2ab5e7652e701852956"],["/post/f8e4bc7f.html","c5aa76afdc16da252bca80cbcb7ca7bf"],["/post/fa83cee.html","4d67567096938830b44293bec93f08f6"],["/post/fb2f630e.html","f2280fa8735fabab2f2aaf5eea508f49"],["/post/fb5efb9c.html","9982ab8edf5c267b95e3f2d35cae6203"],["/post/fbf7f335.html","3a5e5c4a439fa85492d80eacc7b0f5d3"],["/post/fcb9464d.html","7f3a205b2c3de3ceb990bd541a7052ee"],["/post/fd581850.html","773e6378d935969b757132ad075dd9bf"],["/post/fdc06f3f.html","634468f37db4ff2e0a4845c894d9eb0e"],["/post/feaebfb5.html","bbfecbf9fc9ee26bf80c51e940376d59"],["/sw-register.js","be88f97573662b9911c5244c18c40122"],["/tag/1988：我想和这个世界谈谈/index.html","337cd662c7231027fc79fc665f8db36d"],["/tag/1Q84/index.html","abd2c16338055041621b926e9a11cfbe"],["/tag/2017HDU多校/index.html","00d7107d057b3e3978c543505f0381fe"],["/tag/2018HDU多校/index.html","cffe4790d3afb2da4210478771a1e992"],["/tag/2018寒假集训/index.html","80f518b795fce9ae5b8ee4254c263d9e"],["/tag/2018寒假集训/page/2/index.html","48b3bd3fcc93235dfc67cc15b4e5992e"],["/tag/2018春季训练/index.html","17a911d0a726bd3296aff8d9e100826e"],["/tag/2018春季训练/page/2/index.html","7819f1c83a9b7ee16ae5908b78304ac7"],["/tag/2018暑假集训/index.html","9ffcc6e90d07651a152e11ce8d7f0c45"],["/tag/2018暑假集训/page/2/index.html","56dac44d55a465c9eeb1ed518e1858de"],["/tag/2018暑假集训/page/3/index.html","2b798910d1cfef37b57b82bf5fb94acf"],["/tag/2018暑假集训/page/4/index.html","c08948e911c52f5efe7ef897c156ef09"],["/tag/2018暑假集训/page/5/index.html","6f8c26e0b2a8a0498c860418df574567"],["/tag/2018暑假集训/page/6/index.html","f8791992a766e7b0ef2b62331639ac9e"],["/tag/2018暑假集训/page/7/index.html","1dc11cb65798dfe40418aa29ab8da4db"],["/tag/2018暑假集训/page/8/index.html","a93f8c9b215c1d17a65a542511e8ae50"],["/tag/2018暑期选拔/index.html","cb18afdb1ecfba250e61fb3981d410f5"],["/tag/2018杭电多校/index.html","bb12e7d4395648467e427328119b801d"],["/tag/2018球季训练/index.html","c1cca3acdab92214900cd23f04d4bfd2"],["/tag/2018秋季培训/index.html","863c9206e639da2a22f88ea53e40a93e"],["/tag/2018秋季训练/index.html","0d91b0ebdad48e02310bd82a4cb5ba24"],["/tag/2018秋季训练/page/2/index.html","fbb3429ea3f3a669fb2259adc1fa5c1f"],["/tag/ACM/index.html","f3ef0c94dc92eada61ec577d545f9130"],["/tag/ACM/page/10/index.html","cb48178eb433eeded86a3aa4cce9b8ed"],["/tag/ACM/page/11/index.html","e64fe5a3fbb64518862214ab6790b4b0"],["/tag/ACM/page/12/index.html","98e404a613581aa417ed05ddf8ef1dca"],["/tag/ACM/page/13/index.html","83f1dcf9c18a84404b741016776c1e7b"],["/tag/ACM/page/14/index.html","9d613bb5dcfaff5eb2d1baf03c38ffeb"],["/tag/ACM/page/2/index.html","03122eb0f6ff256044f43dde51c89985"],["/tag/ACM/page/3/index.html","b2f53f91a415db2f98e92caef67e7d2e"],["/tag/ACM/page/4/index.html","02946693078e89e7a9aa3f322481e6e6"],["/tag/ACM/page/5/index.html","dc3075ab49c927a5b1d9a1d08675e970"],["/tag/ACM/page/6/index.html","d782024c1b16f771b211e4a026548b62"],["/tag/ACM/page/7/index.html","849fabe8cb4790a4e0513787e9546d4a"],["/tag/ACM/page/8/index.html","24862cf252bf39260bf475b4f8537219"],["/tag/ACM/page/9/index.html","920ff2d5d86491ae7ffd730d99a93685"],["/tag/AWS/index.html","6a617b407307f523f4d5484a65de826f"],["/tag/AtCoder/index.html","66704391a065e575670a377aa793219b"],["/tag/BFS/index.html","34d7bbda6ef2edac57962ccd5ccea802"],["/tag/C/index.html","2374fd0b8026a278c266d921a32da6e8"],["/tag/CSU/index.html","1306c4c2fa240c6608c1e5a4ae2034dd"],["/tag/CSU/page/2/index.html","03f3204ba3842ba45f9871dcc98cb8fe"],["/tag/CSU/page/3/index.html","d95a4a24b36df4416ce45592b46f6d69"],["/tag/CSU/page/4/index.html","5b6a9e63b311d276265730e7419869a5"],["/tag/CodeForces/index.html","1078a31ceaa44de719ea8285ac930292"],["/tag/CodeForces/page/2/index.html","ec89f1f50ebbff6d09c27a5240fdc33a"],["/tag/DFS/index.html","e3d471727a37b67f9c8e54edfc6909a5"],["/tag/DP/index.html","28666e079004efa87b925146012381e3"],["/tag/Dijkstra/index.html","abde06e79903413c0e957e469f6e72c3"],["/tag/Flask框架/index.html","6e71c7a5cc651467167eab19622514e3"],["/tag/Floyd/index.html","ec5ea272e09914c0b3fd6b050399b169"],["/tag/Git/index.html","192b9679185ef854c72249c08d9db4d1"],["/tag/Graph/index.html","354574f42162947bcfc07bf329bfff92"],["/tag/Greedy/index.html","1afe701c15e99eb02da353eb560d7bf2"],["/tag/HDU/index.html","449aac9281ca101d40ba88125b1244d1"],["/tag/HDU/page/2/index.html","65e9c1eec3941ccf5690221daeabcd3b"],["/tag/HDU/page/3/index.html","42aad8363aa33927c7550398df026a36"],["/tag/HDU/page/4/index.html","c9068fda00bde2938ce0b69d28d6292f"],["/tag/Imitation/index.html","f0df961d40383ba1c787d889c04c9297"],["/tag/KMP/index.html","c8214e8e28912a239b22be95ebf47f8e"],["/tag/POJ/index.html","0b327616a30249b5e20ce7165174734c"],["/tag/POJ/page/2/index.html","886ec46138e393a3874101e62a3b6d9e"],["/tag/Python/index.html","6d98d6abe62be088b6809b8f0aefc9f5"],["/tag/SCU/index.html","7807f012db3738fa2695a30fe66097ee"],["/tag/STL/index.html","123ac682d69481fdb8f84c53e75cfb71"],["/tag/STL/page/2/index.html","a4680389059574b5fa3892196287edfc"],["/tag/URAL/index.html","646c862e6a217115ddff982f43552e11"],["/tag/UVA/index.html","c935a429afca02896671aa00a2c8da09"],["/tag/UVA/page/2/index.html","07ba37c9041b3d0ad2ae17b39b8a0ea4"],["/tag/UVALive/index.html","f4e84c502444b7ca8c922a0ec17f6991"],["/tag/VSCode-Git-生产力工具/index.html","7d3732d5f201188a95de448c93c37a75"],["/tag/VScode/index.html","263a7447033af73553ec22cb6e9db953"],["/tag/ZOJ/index.html","00c0e1714901a327369bb5b3b96f1528"],["/tag/math/index.html","f81f05417b8fcffd98eb8902306764a4"],["/tag/test/index.html","3226aa7d3477793b0e32c900dfa57c45"],["/tag/不得贪胜/index.html","38034cf355765e8c20adfbb28c7555e3"],["/tag/东野圭吾/index.html","dad4d1448d544edd139a36bbc253f19f"],["/tag/乌合之众/index.html","f7ad3195301743d1a51bef0cdd5d5e62"],["/tag/书信/index.html","a7d75a2790eedb919065276a048ae048"],["/tag/二分/index.html","db4be8fe714c80073dfbf835345bb155"],["/tag/亚马逊/index.html","8f710df1039bfa769694c438766a4cc4"],["/tag/亲爱的安德烈/index.html","d822190b778457e9640fbbf1020ce927"],["/tag/位运算/index.html","85c6b93b223037754062c494509cb767"],["/tag/几何/index.html","b930411b1bbd1419d3f1fd3bbbcad776"],["/tag/刺杀骑士团长/index.html","d73e3742cb5c58f92f9eafcd6ccb6838"],["/tag/前缀和/index.html","6a074a4b2173dc677987ca05767986aa"],["/tag/区间DP/index.html","2c35d1d1167950a7c0c5e9ece417ac4d"],["/tag/博弈/index.html","e41c52c6c0d777a7725fdc2d5b016e28"],["/tag/历史/index.html","8077b92616e1231cc9e9a31a766beee9"],["/tag/古斯塔夫・勒庞/index.html","ef9ebddf637a3bc6ad5140ca3fb5190e"],["/tag/图解密码技术/index.html","8f858c982b72e430ec2479b73a22df7a"],["/tag/大数/index.html","2fa49d6f24a4cb7714115e34ca680a94"],["/tag/天幕红尘/index.html","4b4c482148081408902ffdc54ccdf97b"],["/tag/如何阅读一本书/index.html","457cc65ef3913e45e70d9681c4411811"],["/tag/字典树/index.html","6f96768508803d315e730245f0941f52"],["/tag/字符串/index.html","b1dd77a82171d106e7a2d4f3edd6dabb"],["/tag/字符串hash/index.html","2174011e607c853865a2b1f907238a8f"],["/tag/安德烈/index.html","494e656d0f2a79ee2969c50bfc792431"],["/tag/密码技术/index.html","ba3db9b0d6f4c0344ea2fc976c019ef1"],["/tag/小说/index.html","5853cd538d8de03b87d22efb7805b9a2"],["/tag/岛上书店/index.html","5d2c215358118759ae3efc69485a7ac1"],["/tag/并查集/index.html","08f13b89abce0973ad5fe4426c9ea49a"],["/tag/待补充/index.html","7cd846d0985e85371b6ffe3726853cc5"],["/tag/微观经济学/index.html","b8f89867bef7c4d38a2e829d7876b3fa"],["/tag/数学/index.html","dc7edb56f039cd46fc44ccc308eb38b8"],["/tag/数据结构/index.html","72990c6a90fd3785f0ba61b957cfd8af"],["/tag/数论/index.html","051a1314e5b03999d4bf6a35754c52f8"],["/tag/文学/index.html","5043b40474cdd03b0c0eb79ecb86177f"],["/tag/文学，小说/index.html","9c78b7066f5fba836b78220b50c12b50"],["/tag/旅行/index.html","f42f9916d2faf75a332473bc7f79e727"],["/tag/暴力/index.html","eb8343cf2a85c4ba4772bb8d25675afc"],["/tag/最小生成树/index.html","1f384e3f56e1e4de296cb23cd678e485"],["/tag/最短路/index.html","3c1e3098efd099fa5edeef40c42e2230"],["/tag/最长路/index.html","920e42e04c88178fabddbd7563fb4681"],["/tag/本·伯南克/index.html","333de8c8a69b0af2c0a8ca4c1d530c93"],["/tag/杂文集/index.html","00e16510583b1de84a6932929b5a1f5b"],["/tag/李昌镐/index.html","c9f98a00a2d0865fda4b6a7129eb4bc0"],["/tag/村上春树/index.html","8d01723e46e0446e8e9e0c127cf167fb"],["/tag/枪炮、病菌与钢铁/index.html","cb51a5deb6589edbb5829d87bd21334b"],["/tag/概率/index.html","89d4374d7c72171f44e4de863ad77b89"],["/tag/正则匹配/index.html","9a8cd48b7feb9af851f8834f0ed1337a"],["/tag/水题/index.html","7d435cf92ce0c2a1975058a4019687ab"],["/tag/游记，武汉/index.html","41a1dd248538520134b14e3fc60f093c"],["/tag/演讲/index.html","0e18ad19828fce32abbc3693d50d2bbc"],["/tag/矩阵快速幂/index.html","e74d22874e4bdc3afd1e0611beab6c51"],["/tag/石黑一雄/index.html","0f2e08ed2d786c86f681fe1270308f00"],["/tag/社科/index.html","06cace74409124bf61704ab3bfb97752"],["/tag/笨方法学Python3/index.html","c242c46fcc9cbfd1a97c6a81ecf1c324"],["/tag/算法/index.html","6c160dbcfe785c8b8159e865e4118cf7"],["/tag/算法/page/10/index.html","4842235a4820460df67dbcbc180444f9"],["/tag/算法/page/11/index.html","aea39e76901d19e77600fe3faf374237"],["/tag/算法/page/12/index.html","f022b5db2b626ac1b562088e51945eeb"],["/tag/算法/page/13/index.html","090c3c9a56df55d49d2a61454ef9f9cb"],["/tag/算法/page/14/index.html","d2be7038aa7c3b18d5cdd9164a4d418f"],["/tag/算法/page/2/index.html","68ddfac4204651da355c1866fc499b93"],["/tag/算法/page/3/index.html","eb82b14a8255d00efb28f470dd549477"],["/tag/算法/page/4/index.html","40363f7f8627f11e22a40b56f6efd203"],["/tag/算法/page/5/index.html","c92cd8a1b26583af2dd49e2a381e39bb"],["/tag/算法/page/6/index.html","26b633136af2e8cb0d8319b22c8e3c2b"],["/tag/算法/page/7/index.html","634bc4fb14687d8d4eb4c3a805bb97f4"],["/tag/算法/page/8/index.html","e6a0a9e2e5eae757e5f79b654b5b2e1c"],["/tag/算法/page/9/index.html","41d43c6d8310a420d698bf995330f685"],["/tag/素数筛/index.html","3af1b86fb0c0d379c42c827b3d36fa45"],["/tag/线段树/index.html","dd9d2cf85bc8deac9606f1e3d3d62c35"],["/tag/线索二叉树/index.html","746bbccccb7ee00f09002c64539ba520"],["/tag/结城浩/index.html","10b28be392332caf8b8a12367e6e8ece"],["/tag/编程-C-课程设计/index.html","9b88694efb484ec640830972d088feca"],["/tag/编程-PHP/index.html","770e100a871dfddb0891423800696957"],["/tag/编程-数据挖掘/index.html","233a323257300f91b9fb4805108b4058"],["/tag/编程-编译原理/index.html","1fcb86cb1785eb3bf39e68c09fc3c46b"],["/tag/编程/index.html","d9aab99f0caeec8b97969f52516755bf"],["/tag/编译原理/index.html","a15b27af9aa191f553b005cd3d4a5076"],["/tag/自传/index.html","845000835a1dcddfbd03144669dcad5f"],["/tag/艾萨克·阿西莫夫/index.html","4233c087d1e0e300133239168b96f424"],["/tag/补图/index.html","5e283772b132e77517537972643be1c6"],["/tag/规律/index.html","eaf96d41a23ef4565a2d941d15fca977"],["/tag/解忧杂货店/index.html","6bae4a1bf0ce90ae4cb8dd121f9a801c"],["/tag/计算几何/index.html","ae2964f514085df1efad38791540a291"],["/tag/讲座笔记/index.html","eb001f0e67726531185fccfe92d33328"],["/tag/读后感/index.html","87945ca4c89062c7bfe08c08e41cc6ee"],["/tag/课堂笔记/index.html","0b85dd2bb82f6a343359b04ad1f34487"],["/tag/课堂笔记/page/2/index.html","abba04a9de78aa685941612c422b9acb"],["/tag/课程学习/index.html","a476fabeb6c5823bc153d9591f45771c"],["/tag/豆豆/index.html","50b09826289d9953b00047c3bdef63fa"],["/tag/贾雷德·戴蒙德/index.html","5e706625ffe11b24a73d90ca4ed012ae"],["/tag/辅修/index.html","5114d6742dc01dc0d27cdb92a0891a93"],["/tag/辅修/page/2/index.html","cfc855f373fabea0ac1d4432a6a1e2e4"],["/tag/递推/index.html","cb212f639bc0bd4936ff92d1f79df7f9"],["/tag/野火集/index.html","94e3a6b7ba88c953e4a9c72efe3c0a13"],["/tag/金融学/index.html","5aafa71c08ca8e4da4b37b2f61befd24"],["/tag/金融的本质/index.html","8be5a0caff6df27f28dfc020726cb381"],["/tag/银河帝国/index.html","9bd65e039cbd0be4fbf48a9d61fc5db6"],["/tag/阅读/index.html","e0d5f46e74bbac57bf3ee0836f7be05e"],["/tag/阅读/page/2/index.html","5bed960e53b7f88d0e9ada9782898521"],["/tag/随笔/index.html","a4458123d414fc557a1ec98b04dfd874"],["/tag/韩寒/index.html","6e8b625215f17c3b58d7f762748b0c19"],["/tag/龙应台/index.html","85f88e1ce0bce44942b0dd72e18e8c63"],["/tags/index.html","a4f88c4c9b498df984d5bcc44fcbeb45"]];
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
