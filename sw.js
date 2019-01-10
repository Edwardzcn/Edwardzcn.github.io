/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d0940e5b339d11ca96dcf2ab1d0df16f"],["/archives/2018/01/index.html","034cc8e5266959274a4e9e9ae736b024"],["/archives/2018/01/page/2/index.html","76577e6bd689abc905da33fc7b2e107e"],["/archives/2018/02/index.html","b181f14ffcbc32d7a1ee247e90240059"],["/archives/2018/03/index.html","94a66d15829bc6155233f9c814d8c0ec"],["/archives/2018/04/index.html","4059fc4742a6b6855f49f7e2f0efed48"],["/archives/2018/05/index.html","8d0b0a9294b71e09ac89b09ea8fa2977"],["/archives/2018/06/index.html","0e2278e156ab240bbda185d601cbe043"],["/archives/2018/07/index.html","8d946acfe1a0f1794b8028ce34ec5d03"],["/archives/2018/07/page/2/index.html","43956ca8a7ce500f14a7aabb793991a2"],["/archives/2018/07/page/3/index.html","dbbec3ed24c74fc452944e144cd7a147"],["/archives/2018/08/index.html","6feef8eecca7a429205572b650211ed0"],["/archives/2018/08/page/2/index.html","e3af47af5f3cc58424342e0c63f2ab3a"],["/archives/2018/08/page/3/index.html","6aecd124751233b772b017d53822d88f"],["/archives/2018/08/page/4/index.html","91fb37dd8289ee3e7cc451cd86009a4f"],["/archives/2018/08/page/5/index.html","4618599567f2dc3ee30b8a6b71112cf9"],["/archives/2018/08/page/6/index.html","2f090d87144a156e396b8c024e2b7f2a"],["/archives/2018/09/index.html","c01f6ebcb31406d94f9ac084232515ba"],["/archives/2018/10/index.html","b5a7d89f84e0c7fa6291f5c7d902fc88"],["/archives/2018/10/page/2/index.html","2a229f96f7f5e61109feb14f90843bff"],["/archives/2018/11/index.html","3ee4b8f7e978dbf9055bb296c770d34b"],["/archives/2018/11/page/2/index.html","b0144282c9b106e3273b6bf44e613278"],["/archives/2018/12/index.html","f067dd294e86945a8c9566ca32d787f4"],["/archives/2018/index.html","bab309d5a246f9ead50154d7c0e5e69c"],["/archives/2018/page/10/index.html","d479a4a0cf3c3bb96d53292f5389055c"],["/archives/2018/page/11/index.html","0b9634d4595329dd053f649d8c775ad9"],["/archives/2018/page/12/index.html","1703ac492ed89d11e1f809895203ca73"],["/archives/2018/page/13/index.html","a7dfda61f6c7f63fea1cc53a942e6898"],["/archives/2018/page/14/index.html","481cb98d49a54cd8262943b0171f93d4"],["/archives/2018/page/15/index.html","1ec67304bb0c729b72caf59e43079b65"],["/archives/2018/page/16/index.html","86c3995aa02b94810b75ded483634bbf"],["/archives/2018/page/17/index.html","ee2b0555cb7e5e1515ea77dbf640ddb1"],["/archives/2018/page/18/index.html","2092d0ca71fa814eda1bec3ecb5565d7"],["/archives/2018/page/2/index.html","30d2e7452466c6f0099f692ca02d7d0f"],["/archives/2018/page/3/index.html","1b703d194f3a72be0f48d5780e7ff72c"],["/archives/2018/page/4/index.html","a10d88f3e286b132aa05ef02ae57aba5"],["/archives/2018/page/5/index.html","66cdcdccc993c2c1381cf6959a64af1a"],["/archives/2018/page/6/index.html","29e9fff749ea000ea7af4a6336b416e5"],["/archives/2018/page/7/index.html","2c953ecbc2d3325555b6658b98cad35e"],["/archives/2018/page/8/index.html","bb729c4d8749c9056949ec7e32b8602f"],["/archives/2018/page/9/index.html","6c95537a3f0213a70c1c0a198ab91828"],["/archives/2019/01/index.html","dbcdb5d752dcb1367a013db3076d2262"],["/archives/2019/index.html","b83ac8f8c5df646030a6ad259eb6cf7f"],["/archives/index.html","a67aab4e105935990bb50ddd5f0debcb"],["/archives/page/10/index.html","fd905ce3b0c6a6ab330a37cb28780a0c"],["/archives/page/11/index.html","9dbb0bbd947f4aa410c34ebe53e437cc"],["/archives/page/12/index.html","e90142f3dc06f26902ce7c38022c0904"],["/archives/page/13/index.html","a7840c58a45e938305591bf41de5a456"],["/archives/page/14/index.html","89a3777ee8e06a6a4fbe8d11bf0b8112"],["/archives/page/15/index.html","e1327f9dfe6306359078f236e3c2f13e"],["/archives/page/16/index.html","5eb3f86fd332094e2b564a9c5df6591b"],["/archives/page/17/index.html","d182c0ee98c200cb72dc6318c82dfb75"],["/archives/page/18/index.html","1f8707652876bc7c64f234c080ab1de4"],["/archives/page/19/index.html","72d40d44d5dc63316cd4327ea0137e91"],["/archives/page/2/index.html","871b2ea1890dacb686cdc47b95ea0491"],["/archives/page/3/index.html","fc5ee65cca3a9b2e958a0bcec07a0911"],["/archives/page/4/index.html","559916ae96c1947ebab50e2d5e019df0"],["/archives/page/5/index.html","f1a6da0a8e5c7273506c6fb30c4ffdb9"],["/archives/page/6/index.html","c68d6371d700a0460e5a88fe284487ad"],["/archives/page/7/index.html","90c0e05dada9d7fa26a6b79b867d6dce"],["/archives/page/8/index.html","087d4d2e36578a5b8c0e8103d2d599fd"],["/archives/page/9/index.html","311a4934f457e08c9744505e1b9af0e4"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","5f7bf44d4cec9d6f1f5cae332e6fc7db"],["/baidu_verify_ZzhwBFUe1V.html","3bc3ff344551c928998df891a487473d"],["/baidu_verify_dw73Nh8OEw.html","080460054b191400c6b02e44052c2db5"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","9453d9d98b113fe9ac761a7bd7ed7b5c"],["/categories/旅行/index.html","d2e133ac46678c7f3c80177e96ce7e59"],["/categories/编程/ACM/index.html","8a8bd4e289e40fc8079cd1ec8f47daf4"],["/categories/编程/ACM/page/10/index.html","e7a0d65dcff2d8171c28cef3f5c69e0f"],["/categories/编程/ACM/page/11/index.html","82c0ddffbce621dc67f72a248b0c445c"],["/categories/编程/ACM/page/12/index.html","02f20654dd1acc3f565c736758d59e9b"],["/categories/编程/ACM/page/13/index.html","391338104375d64500d874637a57ce02"],["/categories/编程/ACM/page/14/index.html","4576ca2e50f53a3cfc0b87cd591eee48"],["/categories/编程/ACM/page/2/index.html","0fa290f486939fa447c2de7c5ed5eb78"],["/categories/编程/ACM/page/3/index.html","07351f70bca9a8904153d03904ea2768"],["/categories/编程/ACM/page/4/index.html","aee6b91bd909499aef6148cf288568cf"],["/categories/编程/ACM/page/5/index.html","886246cee63e1120881378652e50134d"],["/categories/编程/ACM/page/6/index.html","76f1d35dc015290b28066622c34c36e0"],["/categories/编程/ACM/page/7/index.html","680086fcf7ac041f9af805d579bab94f"],["/categories/编程/ACM/page/8/index.html","8f7318da55fe45a150bafc87ff4e0ea4"],["/categories/编程/ACM/page/9/index.html","0dcdc2dbe3938766d7bb75568fd2537d"],["/categories/编程/ACM/数据结构与算法/index.html","1c859158873e5708b18a0d09c72dd636"],["/categories/编程/C/index.html","463813850c2072b24c6aa41d8bbc47c0"],["/categories/编程/Python/index.html","42dd3d827baf7f6451d53d5eaa01840a"],["/categories/编程/index.html","911a553634875731776695e9648afcb3"],["/categories/编程/page/10/index.html","cd8192374388756615c2010d58cd7282"],["/categories/编程/page/11/index.html","8b01ed27206ea89875ae0b617b1ae259"],["/categories/编程/page/12/index.html","f2beb853300c6ab0cfe722e829aaf645"],["/categories/编程/page/13/index.html","7bdbc443c60e8d7f456bc2f3c9f0d6c2"],["/categories/编程/page/14/index.html","0fb53f6feb29f812a4013c3d37489676"],["/categories/编程/page/15/index.html","76a9f13a3cd20924cf4c95876377a77e"],["/categories/编程/page/2/index.html","1380197a3bb57a368b8b4929a43a6f18"],["/categories/编程/page/3/index.html","de4327eb6020c46157d15a31c2499036"],["/categories/编程/page/4/index.html","f910886592b3b2c939311d9bb2fb03b5"],["/categories/编程/page/5/index.html","3324479cb2d386dd350633fb7400155c"],["/categories/编程/page/6/index.html","e3eaa70b8a5004165855c2d0a6c37b53"],["/categories/编程/page/7/index.html","922889819a9d756b255de2bd82d4a19e"],["/categories/编程/page/8/index.html","d98ee8b4faed304650867d7f3ce2084e"],["/categories/编程/page/9/index.html","692ecb319409d2ef7cf231e2f14b016b"],["/categories/编程/密码技术/index.html","18ea6e0c1e0450fc65f76a42b9272378"],["/categories/编程/生产力工具/index.html","0967ac793c1237138df2f35e4ebd9af3"],["/categories/讲座/index.html","f780a161390b8054d5ae6e805122b9be"],["/categories/金融/index.html","4a5a7f464e6dd485d71e1e70ba12b0c0"],["/categories/金融/page/2/index.html","ae052873b862bd778e68c7aec50fa520"],["/categories/金融/微观经济学/index.html","5a46e6262f2dcc74c33807d3853b7014"],["/categories/金融/金融学/index.html","93bb51984de34ab96e5bcfa9c8cb23fa"],["/categories/阅读/index.html","5aa830f1a229402cf4be2c258c6244a7"],["/categories/阅读/page/2/index.html","962e815cf4f9397dad8b2bf2d2785508"],["/categories/随笔/index.html","40cda75e5e11297b6a00692309d02ebc"],["/css/main.css","97612a7d7d4eabc2547d41fa4b0fd428"],["/friendlink/index.html","7fcc14f73d1a3dbb6ba533720087741a"],["/googlea873f713657fb5dc.html","3a9c781202c9126eca636ea55579d859"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fdeb54138e6cb8ffb6592a73c722c434"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","26c155ed12253857ef190b58e6111542"],["/page/11/index.html","cca1ca3ac1970853f61f25bf72daac66"],["/page/12/index.html","dfc45650cc3883580956d2f8e4031f6e"],["/page/13/index.html","c9659319829004226a40213eca7c2745"],["/page/14/index.html","8b06ff344fb174463a7a1237d4aa167c"],["/page/15/index.html","90ce5ec943f42fa48502d0ec2acdcc72"],["/page/16/index.html","9fb41a1fd3dacbf7332fa9d8a9d5c290"],["/page/17/index.html","2a02e4613f3ae23fa15c4bb8ae297e20"],["/page/18/index.html","81aca9b521124a0bc3167ddaf9249cd9"],["/page/19/index.html","18fa48726f7674ee6bf4ad7c3ffd73fa"],["/page/2/index.html","da36d4bc0ee8cf731862908dff8d576b"],["/page/20/index.html","c28799f8c398bc224e822fa8dd097d57"],["/page/21/index.html","22da0fffdd687c99a35c116691f3508f"],["/page/22/index.html","3e0d2f3dae532e75091c97f3ecc597b6"],["/page/23/index.html","b6b134f847b8cdd4f65b1a50aec24c7d"],["/page/24/index.html","676a1a5e33aaa9b0d12835fb30660292"],["/page/25/index.html","0843cfc6ce4d8870c19d65a33a1951cd"],["/page/26/index.html","27c0deb0e1c2ced74318c2a29e14136f"],["/page/27/index.html","a873f6adac0281032752998c475145a9"],["/page/28/index.html","65a6987718394b98368ab48dc4ddd5aa"],["/page/29/index.html","01d0c90def1b8e91d3e494ea1aed1e7c"],["/page/3/index.html","a830aeaa237cf455e46bebe9f1cb7257"],["/page/30/index.html","ebe25ebc8d55401fb1e65e8e8acb17f9"],["/page/31/index.html","8bec41eb31ccae1c8d93691871f4c6d6"],["/page/32/index.html","73f9c93c616ac5385c08c8c668421d80"],["/page/33/index.html","aa6043c030e0c9682d8bca8cbf85c9f9"],["/page/34/index.html","fa4ef3f2cf4b5a1fabc7adac633fba1d"],["/page/35/index.html","794e7ccb415b36b5eda883ebbf2b8d3e"],["/page/36/index.html","aacbbb9bcac54af859c0ef764dbbd0dc"],["/page/37/index.html","325d4bffd456448c67f8814edd02e95e"],["/page/4/index.html","6d824f043ca95999823debdccd4a056f"],["/page/5/index.html","5ea1a955bd969556eee3219efe2d392e"],["/page/6/index.html","b98f5d4ad5ab4c4d89c671f4f24d2e85"],["/page/7/index.html","ebc354b72ced62acbbe3bc660e01f365"],["/page/8/index.html","cd696245784ceb9974934749445dd725"],["/page/9/index.html","4c3f7b5e716f7ffd656fd5aff4ea1df8"],["/post/104a4c5d.html","6c64b1c2e357703d2abdc0906aa136e4"],["/post/109aa3c8.html","216fdaab10da5da2885ca4433a5ec1e4"],["/post/11246bdd.html","75b73e2d23d8f74c1b224ff1c1497d99"],["/post/1233e925.html","96b38b363a3a59467b3e24f175bbc5c1"],["/post/1448d9c8.html","39dab11a1b19765e69f19863f1db79e3"],["/post/1448d9c8/1.jpg","92c83229f0ee3855572d88311fd26f93"],["/post/15db1cd9.html","3cf70540b119f7c67d49545b1744a0b0"],["/post/15db1cd9/P1.jpg","361ea4d257a548ed1046fa71abb12241"],["/post/16b5efde.html","9248ea693e75b0a481ced19a417dfe9d"],["/post/16fa37a4.html","fc84720524702db8e64eadbab15e781e"],["/post/184fc5c7.html","642e15b1a59ead6ad71cdc6bc825f91a"],["/post/19e79191.html","95526f7fdf9100667840b47f0e75c1a0"],["/post/1b7db6f0.html","29c5db4f00616d128a392cb781f944a0"],["/post/1b7db6f0/1.jpg","e892edd695b5ec40519adebff4317a9f"],["/post/1c52564f.html","514f759c0b93b7f45971cf7ae2474be1"],["/post/1dc46f40.html","d7afd960f93695ae145cce3340d4b44b"],["/post/1eeab2ee.html","35f72f107c89dc8c5f23b9e6576160df"],["/post/222505fd.html","77222dc39e810b39e18a54444e961707"],["/post/23f72a93.html","a13881e5eae17ee6f7d0b541d483cdf5"],["/post/23f72a93/1.jpg","04567b83fe6a71e174c95d19b3e4f2f7"],["/post/264a9c89.html","368fddf1dc6f8e5af5a0aabc50245904"],["/post/265c0f5.html","26db06f1be1e2fca1e04056aabdd7b2a"],["/post/26fa4dfc.html","5e7153ce375571673c25b0307930a198"],["/post/26fa4dfc/1.jpg","5e84db6a8e4e6a2d9e95e24dc82d95dd"],["/post/273ced06.html","5b8cea439929bc28f038cbe5efaa0282"],["/post/273ced06/1.jpg","edacf40693f5f5d66e9ae0dd3f235dd0"],["/post/280fbdcb.html","812f8488506860702cbc88a0ccb43775"],["/post/3090aa13.html","6db47eec8c13012c2c0cc80c05786ab6"],["/post/31a770a5.html","daca048890db85aa9d0ed20cabfe40bf"],["/post/31a770a5/1.jpg","ad114f4569e30c88152eef39349a165e"],["/post/31f89579.html","8f4cb49d9c3bccd70d02e43326481099"],["/post/32dc51f4.html","57aefa4d17118153642d719b50a957b8"],["/post/34a049ac.html","ca86367f0205f74a2e27a5684ba5f202"],["/post/34f53a10.html","dfce1110ea973196084f8c1c0e3ed2bc"],["/post/36bef409.html","4a4121ae507c5c0149fb750665714706"],["/post/36e5881d.html","bd00e03465f9b103ecff93f90596e380"],["/post/380486cb.html","d6fb0b7882c82cc9655e451198593109"],["/post/38f8b110.html","df4d6683396f1d858ad068e82db3f776"],["/post/3a3eaae1.html","279e4bc6bf602294812041165952b9b5"],["/post/3a72081e.html","b424cc440c573c0b5d04f39b4fec7ad3"],["/post/3bc7f503.html","1e6824f0115de35c23bb99061dfaf9f3"],["/post/3c57c5dc.html","61672aa131b8400226c9a436cf697bc9"],["/post/3d71c64b.html","332481b4af96eca78c12866a0e819cb4"],["/post/3d8072b.html","b5bc8f0fd9bebccd2bd1953740812e08"],["/post/3e6878ac.html","16a535b91130d951a08e086f4d841453"],["/post/3fce0650.html","d8aba4ac49c222a03bf8ec480d352bba"],["/post/409dbc1a.html","b37f5315c67cf9147a275566dd2e7253"],["/post/40dfaace.html","7e739dee35d2eced74532ee9a524aa9c"],["/post/4255f31a.html","3fca4a0ee0a7399dabba2203983f114f"],["/post/42a619f7.html","fbf17533e9e2f686df444c2a62d24d85"],["/post/44505a5b.html","7e27929263968699c3959e035dc68a52"],["/post/448da703.html","7bd56312dbd5a4947fb9e3aaa9f4fd3f"],["/post/454c2118.html","6100b084290dcf59c1472334af0e5fa0"],["/post/454c2358.html","423507087c38407a57928aa1bff1c7ae"],["/post/4773b69c.html","4e92b9843a2e42d34e2deeee823e5ba3"],["/post/47b391f2.html","000f6a6420d2fd83bd03c20f15f59f7d"],["/post/47b391f2/1.jpg","9cb0fa37cd89226318c25b75390804a3"],["/post/481e8abf.html","c43d97b9565bdc1f5b75bbeee758353f"],["/post/4b15f9e3.html","888c98a7730ceb50e54f09883d968354"],["/post/4d6a6b27.html","06c9b70e86a0475991b415bb293951ae"],["/post/4d6a6b27/1.jpg","03afc8a023bea763338085f46bd7eb33"],["/post/4db7e28a.html","865cd5dc31051cc2a49d271db549296c"],["/post/4db7e28a/1.png","92905e726cd5666923c5d0b2aedc92c2"],["/post/4db7e28a/2.png","8e98e72ae64a7f7a13fe061d7c49ac15"],["/post/4db7e28a/3.png","638df1c1ab9432b59463717c0a1074c8"],["/post/4db7e28a/4.png","cd522f1c2a187cb0a7260960e0b8ef24"],["/post/4dc7502.html","0716cf387e6f2997595c3a455ecb2ce6"],["/post/4dc7502/1.jpg","a5d9a21565d6a985425766314f6d4f57"],["/post/4e876bc2.html","085b015c2fe48bbbc51f4711206b74d1"],["/post/4f352d.html","395e6e5aec72701b21c5a91593647706"],["/post/4f8fe65a.html","07f0baded27907dbb8fe7522a793e68d"],["/post/4fa396eb.html","ba6cdc315f5834d4611b90b6efd0f598"],["/post/52730f61.html","2d080c4a3efb110e073839ead1cbd80a"],["/post/52730f61/1.jpg","ec64d8606b78799d7d4cc571d129b001"],["/post/531de0f8.html","9ff4a5e5b4a17265f6d724e53988c327"],["/post/5555df5.html","6219d7e9b37d44f3fe855d10cb5e9c7e"],["/post/57bfde8d.html","b72cd9ab0d75906b17c0cf7a6eb83118"],["/post/57bfde8d/1.jpg","adda5198d7a147bfe8d448658c6d24ee"],["/post/585293b8.html","428771751fec8820a8dfd64ba75e9e76"],["/post/5aa5290d.html","270538de39fd419c645b67359b03a8d3"],["/post/5abc6d45.html","edf731f5d5c3ee7feeee3577e0c193ca"],["/post/5c86d06a.html","fa0f3095d1c60df23fe8c28cf64a362e"],["/post/5e189593.html","afbeecab9b76415dc1020f14f6359cc7"],["/post/5f2d4a77.html","854f485f3724922a05b5636651263c24"],["/post/5f341cbe.html","d336f6c385d2ecfc25d0fbb859f616e7"],["/post/60850415.html","d4589ceec8ed20e591eda525ed897238"],["/post/611dd122.html","cd3ed7bbdf9ae2610693217b0e8218a3"],["/post/62cb42be.html","c2ba0f3838e6b1eb64e90b9acd531d48"],["/post/6501181e.html","45da0c7ea72e87f0d8cdcedf4bd9d920"],["/post/66258384.html","40898e88fe042e753cfb708a21a1c45d"],["/post/662b8b80.html","efd7b10d764f2ce0c1d30dbbe652a8e7"],["/post/677d0fef.html","ffce842d8129839a423cd3067c7e37c3"],["/post/685bcc20.html","40575f07909c1143413565d138c42a79"],["/post/686dc27c.html","a65937e1e0ae9342f6089d6ea40bd2c5"],["/post/686dc27c/1.jpg","cd40edc5ab678041369d4a99a699e938"],["/post/6c71e418.html","5a15311154a85b6a11c84591ae39eec9"],["/post/6c71e418/1.png","e1c0066fdfd9e6e620e5f6e59d26422d"],["/post/6ca1eed5.html","76a4e0ffea56d39b6aec28a02a9d928e"],["/post/6cb7680e.html","3c31b37bd4c1ae890cba6323e5109133"],["/post/6d52b9f2.html","212227d793bb9df197b24b9c593216df"],["/post/6db0d89d.html","67e13c3532b39741d777a7946dd0f788"],["/post/6e80eb1e.html","50e443130ec12ec76d6dc612323ac65e"],["/post/6f3b3edd.html","4c1f9d66a7888e3f5bbc7a302460f9cb"],["/post/6fc3409b.html","c4bd180b20906bcecf7c5bea1683aa2a"],["/post/73136b.html","baeff83965b3f5be62d7360bec38829a"],["/post/7410a832.html","4964d0959f1d4bdf227b7c5b3c02ba80"],["/post/7410a832/1.png","06ab09720c384f755e8835496dc582a3"],["/post/7410a832/2.png","f79a5d7e82c77eb2073f0dfabc9b4de9"],["/post/7410a832/3.png","3d04f9b37e461784e150eaf786333e8c"],["/post/742966af.html","a4d0442f31079e87325c7a285f296bdd"],["/post/742966af/1.jpg","944fec6abdac72659bc394b0b25eaacd"],["/post/74479d01.html","b9235f4b9d0506b6894d20632a3cfbd4"],["/post/74a4286c.html","d07512296a3c5857b95f2b2eee4edc3e"],["/post/75794199.html","441f531e9f63a08fccf7214882c35734"],["/post/75f986a1.html","83ddd17a9cc7d4ff4c271225b79be2ff"],["/post/75f986a1/1.png","20f89c350c7dde61738b30cf51c17323"],["/post/76485a7.html","95d5ba12ad2dd8fe2fef2e83a91d3e28"],["/post/76485a7/P1.jpg","07abf78f3fc14ea1742bbb614e19c97c"],["/post/772fc02c.html","9c164831ccf68fda8505645fe3df6f4d"],["/post/792e36ed.html","6440a64733d1b30cdd05c163b877cacb"],["/post/7c50967.html","ca655e729e5ff1cbfeb75bf4ad28d1cb"],["/post/7d8e4f2a.html","8602f8a10fa18de46566ac2ea5bb42d5"],["/post/7ef8a98f.html","c53bed914073471c3a0037104bb716a3"],["/post/7fe193be.html","e351b00f0a7e8299d3a2d6db40de9929"],["/post/7fe193be/A1.png","ac374c9930bbfbda65eda8a7fdf0e087"],["/post/879e9655.html","1ff5c56858514da5c3b920ce2b078dd1"],["/post/88e8ae98.html","8679afa303a773ec18a933e40b8faf83"],["/post/89873dd3.html","2a9a681e0a6efa6c279d59e2564b5c76"],["/post/89873dd3/1.jpg","b3a08a364679fdf992c672dffaa3af45"],["/post/8ddc8a30.html","fc0d42916667de8c1123b8d36b23ad16"],["/post/8f9cfad3.html","a95c04098c8c0900185ec77b63189a4b"],["/post/8f9cfad3/3111_1.gif","954e37cc5cc90afeb9e1d7b9d33beadb"],["/post/918fcaa1.html","55a52029a3330d3332f76591cfc5728f"],["/post/92687617.html","02178716bea86308882bb866d0a19f3b"],["/post/9282aeca.html","b52863c295a118e0dd943a62759897ac"],["/post/9282aeca/1.jpg","8d8e1e7788d165f4d6d5307d9c7465f9"],["/post/9305c5f5.html","15a721393457eb1863e212938dd48194"],["/post/9305c5f5/1.png","fea32b0983a838ae4d83b4b163e5ffaa"],["/post/9305c5f5/2.png","048f119a686a568fdc0d34e17bf128ff"],["/post/9305c5f5/3.png","6fc7e94dc5c1be8cefe88857a811436d"],["/post/9305c5f5/4.png","2b801651afd537ac1bb41fbdf8800e31"],["/post/9305c5f5/5.png","fc105719071995adcbc2209a01c66f50"],["/post/9305c5f5/6.png","d09e7627cfaff506d2fbf74e84a6b3bf"],["/post/94c9baee.html","3ff196ecdd42c430a03eef2e8b22307e"],["/post/98804e11.html","bce19ef09d5a35f9ae09baca765c366b"],["/post/98804e11/1.jpg","c3133c8be40b6b95db851b38718fbce8"],["/post/9a9a4797.html","172c1a2d23d927317e66581c33064bdf"],["/post/9c28a880.html","dde936894e6126303136fe49447f83a1"],["/post/9c28a880/1.jpg","2755021381b95a4f144b684710382222"],["/post/9c649212.html","e59199c29212ed781df7b63c46bc923c"],["/post/9d402b32.html","34c6a75a1aad9202c4d9ff455980681b"],["/post/9d402b32/1.jpg","40cce5b36315acc8347de0493946937d"],["/post/9eb065c8.html","cc5c0d087db602d2399fd9681aa801e9"],["/post/9eb065c8/1.jpg","0d1729f21518670e529a20cf8ba3dae7"],["/post/9f8e212d.html","17e0e7429bbcadd773187895683f37b5"],["/post/a1751c09.html","c8d6d90a9434f7a215b27581b9b0075a"],["/post/a1cef007.html","783fb7cdc27270ecdb2e31532b6917a5"],["/post/a1cef007/1.jpg","b9039d98eb761d3546b06ddbc25f51b4"],["/post/a1fc03d8.html","1f4aace06c1ed6aebea1c1990faecaa3"],["/post/a27e9acf.html","38ad7fd4ddf4968e10d60546ca1642a0"],["/post/a4c66bf4.html","8577a9c22d7f45a19eb59d0c3355c88a"],["/post/a4efe87.html","06fb5f45653117112eeddadd75569426"],["/post/a7528411.html","28ff1a7d296615ecb2f788be6f6617e3"],["/post/a7528411/1.jpg","3d1cdbcdae2fb83942fc057751318538"],["/post/a8759852.html","9f40e2a2a204d6735ebc69fd878d865b"],["/post/aa0a97c8.html","80fd8d60eafc621f77b8b3e6185a1759"],["/post/aa0a97c8/1.png","f8616f3324f996b8f46e6eff1198378b"],["/post/ab4ed95b.html","c96e57ec66e3d5119612a3d64855ab15"],["/post/ab720150.html","2345f883e2eb829cb945dd108ae87d92"],["/post/ac92be99.html","1b66bd2e883a482fa8761745ccff88c8"],["/post/acf6b02e.html","37c786e06393ad8e51bff9d02f58b054"],["/post/acf6b02e/1.png","c24b4d6721da24754112c1cf70aaeb26"],["/post/acf6b02e/10.png","6b84764050aa8026c9726d15be829674"],["/post/acf6b02e/11.png","942dbefeec29034a2adf02a5b6e1cf21"],["/post/acf6b02e/12.png","d75b4439ce870cea07942930dbe7bb05"],["/post/acf6b02e/13.png","21471c5b78f036ae94818a894f400ad1"],["/post/acf6b02e/2.png","f10687a30bb23eff6b150bdaa4c2b741"],["/post/acf6b02e/3.png","c90eded3d661dc955ff1f96d1d08d165"],["/post/acf6b02e/4.png","0d8254cca92ab2977d08bb6ec724d6a3"],["/post/acf6b02e/5.png","be6d0422ef39b3e84983fee9612c2e64"],["/post/acf6b02e/6.png","e10f547d2d55e7a22b255103ec371952"],["/post/acf6b02e/7.png","62a6cf991e749119c2ce8c66b2b7cd04"],["/post/acf6b02e/8.png","9a028f4b92a55dd0f545160f961b146a"],["/post/acf6b02e/9.png","1bded821ed3cb1e4f7cbafb2fcd851a2"],["/post/b0d6c7.html","8fe25bc130d193169adfc4d7f9f1cf00"],["/post/b3ee770c.html","57102c9835325f86c76eeaf10c833cb3"],["/post/b3ee770c/1.jpg","8284eae107bf12291f91f5a255e9a4c7"],["/post/bb7f8e97.html","f9d12f48e296c54e1297ec48610d2dd8"],["/post/bb7f8e97/1.jpg","e096d2bb21776bd72d6c74dfc6e8f021"],["/post/bba462fb.html","a1e50e9be7aa20ea55b343f01ccc7205"],["/post/bc8586da.html","ae6347bb9947daf4d43d41b2f4e2f87c"],["/post/bcb02c2b.html","89671f881bd4a43d91a7d580e941e794"],["/post/bcb02c2b/1.png","014e5daad322efa82615e3097f6716bd"],["/post/bd36a30f.html","6eefd63fadeab8d25cb33d00a2581ede"],["/post/bde4b1f8.html","e66a1a64d18fc0f93b7a76a917332999"],["/post/bea42f1e.html","af4fb67ebbea443a0fe6cb02e3306415"],["/post/c1864474.html","db884266b4aa1ca131d560532c94d050"],["/post/c1864474/1.jpg","a6c111e58df387fa56b472e858a88cde"],["/post/c293d2b3.html","24e4b72fccabf7bc15853a94e62be389"],["/post/c293d2b3/A1.png","43fd63800bfe151dfd505fc94f290389"],["/post/c37095b9.html","7dd815706af4ce8c0835832b65898b70"],["/post/c5672df5.html","87356a5f726d4f59e16fe99641c2eb96"],["/post/c6d76e9a.html","35e54bdfca175bacae57d2cdc50f9a00"],["/post/c7fb8250.html","e8d394e9523d34a897fe1676dc5d2692"],["/post/c938bbd1.html","8d100ec9bed0e6214f18cc099014b9af"],["/post/ca14c5df.html","17d1200085ee64984d417bc93d158b28"],["/post/ca14c5df/1.png","e08c2f588cecc2f20e68020135a039e8"],["/post/cd18de84.html","b987861156ff11e88a3b1a1624675aea"],["/post/cd41dfb7.html","57a3157401bdfea8b4414624d3c807a0"],["/post/cea184b4.html","4c9cc624ac55d83ac02a79fb696ffc65"],["/post/d120bd8e.html","61177891a3447c3e1d8ab5aacdb0059c"],["/post/d50b784.html","ea286c47ac7bdb25893e628176bf3ce5"],["/post/d50b784/1.jpg","c6548e3eb4a6223459987932e0628f82"],["/post/d6a5bd15.html","ad61d8d708e9ddce30095b39f1f90faa"],["/post/d6a5bd15/1.jpg","b2922e61725a4116b226c2d2b5e409fd"],["/post/d6a5bd15/1.png","3f4b4c7f5f0521aa2dd37b161a22def4"],["/post/d73de254.html","6cee833ccdc5d51a99ee2e8a0f4f59ed"],["/post/d73de254/1.jpg","c5ed50d2d9d35aea459a60b819be4758"],["/post/d81c5363.html","68b90d27bac9526ce75158d9a71a1f7b"],["/post/d899bd9.html","e1ef6b689c142f25577aed6658714413"],["/post/d9083bc4.html","9f4e57191ee8f9a550b4b399e3661b12"],["/post/dc981233.html","880e2177e96dcec335a4d2a20b95ad12"],["/post/dea65d58.html","52535cdada5c9ac217c29f2b678e0d29"],["/post/df76d545.html","857d71368e8a08afdb3357d9288567fb"],["/post/e256d99f.html","21c7162e76bb76e710e77381e433540b"],["/post/e290dd8c.html","cf18e8ed63dfa68494663b7a1e5be53c"],["/post/e3e37943.html","4b2be7d7e03cb68e18e6d33544f3c9ad"],["/post/e583ed8d.html","b9536f11cd4ee4ade52ab3502191c58e"],["/post/e5d75450.html","6b6aa4a6861a12155ef4040204565e20"],["/post/e6364ca4.html","a43c9243b9237dddc57c357e158fc9c5"],["/post/e6364ca4/1.png","2bbd61db75bdf31d3853959353d81a87"],["/post/e7058b47.html","e08cbe38850c0675be06c857147d215d"],["/post/e769f01f.html","97af4908dcbf4093a2656485c2c6f4ca"],["/post/e78ad34c.html","2b105e43149ce6331d0a01c6a94c934c"],["/post/e8005312.html","d7209258bb75a92d44f2de84abf8bcfd"],["/post/e8ae7612.html","6ce56451fcdcd844c02ca465c2181724"],["/post/eae0b80e.html","8ba0184b1f8baf5e3deee08efd3b1f5a"],["/post/eae0b80e/1.png","9645821ed77a0b3b003017082f066918"],["/post/eae0b80e/2.png","0801fdf5846992c7da4f8cf5c530bd73"],["/post/eae0b80e/3.gif","bd832a4df49c41b4a91ea5fb274219d2"],["/post/eb9ab36.html","c1d72aa8b4b3db3985658cc99e3a81b8"],["/post/eb9ab36/1.jpg","454044b6a50adec9e254903253835347"],["/post/f0b23c5b.html","274d5e3d93b3cbf3016cd7e9b0a57227"],["/post/f279299a.html","bbd61694dfa73c09a21749f07d71dbfd"],["/post/f3d9c661.html","16656e8ebfd826e68d465ce72bc32552"],["/post/f3d9c661/1.jpg","eaacb0b9331aaf9136259142b6736e48"],["/post/f4bfd16b.html","9d7eb0e1250cdafbf46163a18757929b"],["/post/fb2f630e.html","9844ad8095802c7cbe281583587e3ead"],["/post/fb5efb9c.html","a46da3a60316026afe168c016b6e17f3"],["/post/fbf7f335.html","140318d2ac6d76c12440e91490afe6c5"],["/post/fcb9464d.html","b2161a8a3bc3638050d602a0f5cb424d"],["/post/fd581850.html","02183fc69748ad0d0f72c8d803d45c8a"],["/post/fdc06f3f.html","46adaba411d5596b1a07ad28c514e7e2"],["/post/feaebfb5.html","dfdcec80c30e7f1e55672e14790910f2"],["/sw-register.js","5601895dc2ad8da652da4d942aa3c2df"],["/tag/1988：我想和这个世界谈谈/index.html","8942f0cdce0cf59daf33fe7b3d0942c9"],["/tag/1Q84/index.html","fcd46a89143bb6c91eb09ea6c1400bd7"],["/tag/2017HDU多校/index.html","cdbfee88ea7e6536bc401012fdf68db1"],["/tag/2018HDU多校/index.html","3b3e8dcee21c40acfe178d49bdc19864"],["/tag/2018寒假集训/index.html","ecbd71877de2bbf95470e4128000ca27"],["/tag/2018寒假集训/page/2/index.html","11885fb487314f10fbccc395603f59cc"],["/tag/2018春季训练/index.html","a26e615c57698837fa95b295d5646e35"],["/tag/2018春季训练/page/2/index.html","de5325d47348c1dd1d07e023843de321"],["/tag/2018暑假集训/index.html","f36eb1c7ca9d366e99b5d0f598ca1a1b"],["/tag/2018暑假集训/page/2/index.html","9c608c0f2b65b2a9703678b277f20df3"],["/tag/2018暑假集训/page/3/index.html","b71c44997993567f55aa2c25bfdecc7b"],["/tag/2018暑假集训/page/4/index.html","b9c1edd046c1237386a413904d6a9fdd"],["/tag/2018暑假集训/page/5/index.html","edc484ca3e39ce3a820c191187b9aff3"],["/tag/2018暑假集训/page/6/index.html","890acabff8e512801c4f73701c1e76bb"],["/tag/2018暑假集训/page/7/index.html","a7cdad0464e861b0b32129703a139873"],["/tag/2018暑假集训/page/8/index.html","a857a4ac21389a2c9f74c7e9ad017573"],["/tag/2018暑期选拔/index.html","8ee73e97e662140d527e97a2b4c51a5f"],["/tag/2018杭电多校/index.html","eb8802c5e8d407e646a0ed8d59525f6c"],["/tag/2018球季训练/index.html","b074b8c6c44d99f16976ef523114d0d8"],["/tag/2018秋季培训/index.html","060a882e3e80335918b0646c923ea457"],["/tag/2018秋季训练/index.html","ad57f305f131baf4e773c3639cd7b22f"],["/tag/2018秋季训练/page/2/index.html","e6afb2232b9fb48112a58fe6a06aef7e"],["/tag/ACM/index.html","84373ebdc84d594ebc9c4c6a205b1163"],["/tag/ACM/page/10/index.html","4d12199ac10936a512e8a53c7386f344"],["/tag/ACM/page/11/index.html","6f57a40f5497c137cd531bbc1c825bcc"],["/tag/ACM/page/12/index.html","9744cd2c83d178dd918153e1b831e5df"],["/tag/ACM/page/13/index.html","bfb6be91bbf1952c614c198b790a7afc"],["/tag/ACM/page/14/index.html","b2b64218515b2c4b51a44330f97e637f"],["/tag/ACM/page/2/index.html","8234b5dd73b8e4e73fce84e86a27a2db"],["/tag/ACM/page/3/index.html","e2346187799a611926a160dbfa0fb66d"],["/tag/ACM/page/4/index.html","877700d0aa0dc31ed3686e2dae847d04"],["/tag/ACM/page/5/index.html","6b8d7636a6587431bca6848832dca3f7"],["/tag/ACM/page/6/index.html","5b64a56d169e3729ce5d9633a03f810f"],["/tag/ACM/page/7/index.html","e995010ea9146f518532a195efbd38be"],["/tag/ACM/page/8/index.html","7dd1c3c0c6a2375afb6328debb5a7307"],["/tag/ACM/page/9/index.html","a9d0f44656277372c8a425da31d4ae8f"],["/tag/AWS/index.html","17ed279798cdc959a17bf40f19607c25"],["/tag/AtCoder/index.html","1067b8cac57a55686aaaa51206f5c077"],["/tag/BFS/index.html","ef4aeaadceba10c3a3594963cc816d43"],["/tag/C/index.html","8bb951ff10fb059b52aa15710d3730ec"],["/tag/CSU/index.html","7077ad08c7571467f9f1a91e1ac96b8d"],["/tag/CSU/page/2/index.html","e3cbc2398b1fe7e6f252eb14ea3c704f"],["/tag/CSU/page/3/index.html","547c8fb646ea15cecf4dd36c0fd127d4"],["/tag/CSU/page/4/index.html","1c39673737f3d55956b85fb981a6e410"],["/tag/CodeForces/index.html","117d2abe15ffea03dcd3980456ce2551"],["/tag/CodeForces/page/2/index.html","9a5b9375985bf4e0e56da24b601e16e4"],["/tag/DFS/index.html","b3a74877a70716b4ea2ea22c56663944"],["/tag/DP/index.html","dd09b818eb2bec205835acc7e83039ac"],["/tag/Dijkstra/index.html","72d63cbfdceae42d9f82cf847021cf6e"],["/tag/Flask框架/index.html","31a4e18cffdc2d76a2e6792da34e1bd7"],["/tag/Floyd/index.html","62ffe0c66942f29005a801154183367d"],["/tag/Graph/index.html","6d09250e112288e267c4e4177f9547a1"],["/tag/Greedy/index.html","efd488bcf6ca157bff7028a77be0debd"],["/tag/HDU/index.html","4c18774ecddb17524605bd60e4a19f3c"],["/tag/HDU/page/2/index.html","3a0d3d255a91fbd03b9916a9abdc0c56"],["/tag/HDU/page/3/index.html","498062bb633ce1bd7a984f3acaa74e83"],["/tag/HDU/page/4/index.html","d66d311e539b829015d44bbc2219ca8b"],["/tag/Imitation/index.html","0dd5acb1fc8721c8f1dc3a2e168b22fa"],["/tag/KMP/index.html","f225ef1234dd12b8bfaabce823c3d3f9"],["/tag/POJ/index.html","134d818161911d741de416bcf1bbff29"],["/tag/POJ/page/2/index.html","9f61af909bfb3854921e4f48a5e7469e"],["/tag/Python/index.html","8a8d922ccee4cb86cad78e9415a59407"],["/tag/SCU/index.html","e98989349cda3036ebd7ea2abfb1113c"],["/tag/STL/index.html","0a070eb1ea09c4ce93a993a326044875"],["/tag/STL/page/2/index.html","e47a960b3523107d19fc62f4170f18c8"],["/tag/URAL/index.html","d080e11e927cb914d97d393c398dc0d5"],["/tag/UVA/index.html","3de1fa44a852fe398c9ca0ea9a2737bc"],["/tag/UVA/page/2/index.html","5eff3f02d91359498ee72558f3f9d0f7"],["/tag/UVALive/index.html","a5344b38ed608fee79c16c800f850757"],["/tag/VSCode-Git-生产力工具/index.html","e28e83a9407e3e1d6383852dd3775d6f"],["/tag/VScode/index.html","46c79a3331cd6257a07e8dbc6ca7ad9a"],["/tag/ZOJ/index.html","95cedcbfc864dc7273f3dfcc92c99fff"],["/tag/math/index.html","9c1c50652477bc97d5ecfa0c4ea7a273"],["/tag/test/index.html","f687fed33f015f203f50923cdad97396"],["/tag/不得贪胜/index.html","71d5bb85e7146568f2de7c3f7d77fcd6"],["/tag/东野圭吾/index.html","b5d1e1c32b6c32583f939e67f553acb8"],["/tag/乌合之众/index.html","1a539af35066ea4959d4d453bd01904c"],["/tag/书信/index.html","96334ede988cae3dced09fbdf170e3fa"],["/tag/二分/index.html","02b7ebd5ddccc8034de6c3605bbae4eb"],["/tag/亚马逊/index.html","6ae3f98e52a355b7a497eab2f19acc47"],["/tag/亲爱的安德烈/index.html","2f8a81990958dafadc3134c0b45269c3"],["/tag/位运算/index.html","6cf6e4e7d8752962f9e21d7fbde464eb"],["/tag/几何/index.html","27bdfd6f57b8022765a460867fc5e363"],["/tag/刺杀骑士团长/index.html","9853fd8324dc69682d716a3a4f64b11f"],["/tag/前缀和/index.html","aa0f19765fa48c0d02f2e0c5a35d179b"],["/tag/区间DP/index.html","d107c03b6005482209097aeb7d23e9ff"],["/tag/博弈/index.html","ffede2b49d4f612ded845dd3e0b7bb23"],["/tag/历史/index.html","0ce8f31b3f66ffed4f7ab9ef9ad27578"],["/tag/古斯塔夫・勒庞/index.html","54f71ed57934fe69595729bb0e2de764"],["/tag/图解密码技术/index.html","3c7cd73dc090bb328b604d96e03fa43e"],["/tag/大数/index.html","46b5e14c065225e9fba35163bb2ac266"],["/tag/天幕红尘/index.html","a02b3d431756b46e65d1a30b78dce0a2"],["/tag/如何阅读一本书/index.html","3a506e37b0fcbc52162fa5e17aba38c1"],["/tag/字典树/index.html","e943a80bc7c3c2742ce28ed0f30a9fe1"],["/tag/字符串/index.html","1aee35020729608105e71b74be65185f"],["/tag/字符串hash/index.html","0add8efdd301b5c58b426ca686d3864b"],["/tag/安德烈/index.html","ff66b9022d572806437c8a06a9b760ee"],["/tag/密码技术/index.html","8dde37169dd2f9444243b18b08423d93"],["/tag/小说/index.html","5064d1a8f7099d6b4529073d0b1a73b6"],["/tag/岛上书店/index.html","d35acbb5727f8e4a6e88c62f53512294"],["/tag/并查集/index.html","c94ba4924bfbbe384a8a3735d8d150f2"],["/tag/待补充/index.html","b6339a055c4ceaf0eb4628677df5d415"],["/tag/微观经济学/index.html","a570f7768394489544aaaac2594f9ffc"],["/tag/数学/index.html","42c788bb5ec13a115a574fd54e714cb5"],["/tag/数据结构/index.html","9e9b34c93c20f3e0a88513523cad79f5"],["/tag/数论/index.html","3b47354b465de92b93ace52304d6ee20"],["/tag/文学/index.html","c081ae8febcacaa99475aa937a46379e"],["/tag/文学，小说/index.html","0b73925406bdd893b85ed8b4f8780c79"],["/tag/旅行/index.html","16487bce9b40d41ef2f3230777ee671e"],["/tag/暴力/index.html","35e4bea5a3abe5c268b6cfaa0cb4d661"],["/tag/最小生成树/index.html","02fd0da6d77e959825a9a0eec3063363"],["/tag/最短路/index.html","28b5861d492794ed13e5ac0261d328f8"],["/tag/最长路/index.html","4fb3edf7b06294d8f34d6fd5168628ab"],["/tag/本·伯南克/index.html","513a2d0102ce479d5ed96f58253e67b4"],["/tag/杂文集/index.html","51b8574d990117e0c0f91229b2edbd22"],["/tag/李昌镐/index.html","d7bef4bc535976e1a7e89d4317b2d0a9"],["/tag/村上春树/index.html","aa204a7f57fb42bab6dc5d91328d2f61"],["/tag/枪炮、病菌与钢铁/index.html","a6b0b3ccf845295b191cf18fa09f1ae8"],["/tag/概率/index.html","8eba296fa97985eef986d438eb0b48a4"],["/tag/正则匹配/index.html","eaf57662b437d41ec77d5dc7823b40d6"],["/tag/水题/index.html","5bca33091908d4936ec95a373c97823f"],["/tag/游记，武汉/index.html","39e5a948b97ceb7e0bedd597aa1877b7"],["/tag/演讲/index.html","65edc6d3077b1a8698c236fb36d6db24"],["/tag/矩阵快速幂/index.html","6715ab94694ffb3936d22c455239d78b"],["/tag/石黑一雄/index.html","23fee21b413c357436220d7ce9d91400"],["/tag/社科/index.html","bad1bdc7ea74d4ec5e75f81a81bc4970"],["/tag/笨方法学Python3/index.html","4f0a2b803108c726644e98b522448cbc"],["/tag/算法/index.html","b87f25518b59fd6d5ce9eb9dd6361b48"],["/tag/算法/page/10/index.html","3b4ebdc8402587faa39d9003257dbfb7"],["/tag/算法/page/11/index.html","dbd87a4d73b583d6edfc0336fe750e55"],["/tag/算法/page/12/index.html","23ec8030e498da0e09c8bb2983b1cab5"],["/tag/算法/page/13/index.html","093c775efc86607886ccc0454ca56a4f"],["/tag/算法/page/14/index.html","91de1669b594530255aadc790ca5285a"],["/tag/算法/page/2/index.html","b78570c7d5ab7c4d397ac025505059ae"],["/tag/算法/page/3/index.html","0a79e6ae413a87e466e73cab9a7d0432"],["/tag/算法/page/4/index.html","64908a4cc829092fedc35026c748f135"],["/tag/算法/page/5/index.html","09d6a3e77291c024e7cb5a33089f6b64"],["/tag/算法/page/6/index.html","14b5b6fc2c09298d47be48c30580f5cb"],["/tag/算法/page/7/index.html","7ae534578c781feb9f9c132ac0688592"],["/tag/算法/page/8/index.html","51a571b2186f85f14ed9382994197ddf"],["/tag/算法/page/9/index.html","23237bf58d6b5e05569b87cc5d4d9fde"],["/tag/素数筛/index.html","fff0e47b3514b99501be9dfa87da2e16"],["/tag/线段树/index.html","2cfcb92be8ff8a60067d5cd8145c5232"],["/tag/线索二叉树/index.html","48ecf13537470f77a061d8f2abd6387b"],["/tag/结城浩/index.html","d1cef44d0982c166c74168c574188705"],["/tag/自传/index.html","94b267a7921e737062f7475393cd5bf0"],["/tag/艾萨克·阿西莫夫/index.html","e668807a8fdcdc0dc643ec27b483a0e6"],["/tag/补图/index.html","59e6cc637d351023477bf578c7f368ff"],["/tag/规律/index.html","baaf65a576a1b744ab3617732a7caf66"],["/tag/解忧杂货店/index.html","19ff26056054d7d8dded4101e863db25"],["/tag/计算几何/index.html","6e44218c8becb79f1c815540a4c5f1ae"],["/tag/讲座笔记/index.html","bb6410500decc95a5ccc5a6bc1712769"],["/tag/读后感/index.html","0a323c83a239167cc6bdbaaef8399d64"],["/tag/课堂笔记/index.html","47a23a6830207f074857e6b71d9b497b"],["/tag/课堂笔记/page/2/index.html","552bfdcd94b4128f113c9ccd8d7f2a1f"],["/tag/课程学习/index.html","142016acd18ea69aa50bfadbb613bb54"],["/tag/豆豆/index.html","38a697e2c7300a70a9ef10c490c68e61"],["/tag/贾雷德·戴蒙德/index.html","149e1cc8722d722b22c5677ab4c7ae96"],["/tag/辅修/index.html","015d6107a01940b9c5c0efa6c1f92dd9"],["/tag/辅修/page/2/index.html","e19da51e60cf67c44a3199ae0947d4aa"],["/tag/递推/index.html","d5cd8d80148b759d9600bfaacb06d484"],["/tag/野火集/index.html","d82f4ad0efc0e97b8dea819749d59dc2"],["/tag/金融学/index.html","2c477aa7018b6ac31271b0c1381ca851"],["/tag/金融的本质/index.html","92d825ae07ed065922c3d808af0afbfd"],["/tag/银河帝国/index.html","0f6cae5823e4a9521dea46b5c81c4e85"],["/tag/阅读/index.html","0645843cb97463ca46bb77efe48f9154"],["/tag/阅读/page/2/index.html","2f180c1860a87730571d966180e2c0cc"],["/tag/随笔/index.html","0b3d2b587b4ad2a0e002786412e521e7"],["/tag/韩寒/index.html","d956a8100730de0436e54a7fcc1f94bf"],["/tag/龙应台/index.html","3121c16e0e4f4360729a3f23d9eb1d03"],["/tags/index.html","fa5e3d6430982abcc19af8ad213fb00e"]];
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
