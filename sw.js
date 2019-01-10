/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","5f514e16b31fa129b40afe0d7cc4cd91"],["/archives/2018/01/index.html","6bab65861c708ef65b9eae2355f97bcf"],["/archives/2018/01/page/2/index.html","309d8316dd792c6d1054278eb764a6b4"],["/archives/2018/02/index.html","15615303700187fc0d1d229cdb7eac9a"],["/archives/2018/03/index.html","5f2048e0787bbf9b51d05b4170e7b5b0"],["/archives/2018/04/index.html","2aa370d14ec02d5c9528b0f7547a35e6"],["/archives/2018/05/index.html","8428e021ff541f177e9a8317df1275c9"],["/archives/2018/06/index.html","17567f9ab12ef3f7ecd4decaaec209ba"],["/archives/2018/07/index.html","17ea85fc5a726426f67e92e5fa8c8a42"],["/archives/2018/07/page/2/index.html","f03d49b924ea664f86eaed2cc77acb01"],["/archives/2018/07/page/3/index.html","4543b6a74c9aff7654a2d306fd4980c9"],["/archives/2018/08/index.html","0cede8b2c47f1db44673b1768bcb6844"],["/archives/2018/08/page/2/index.html","1e661117ad4b75dbf10246b742557d5a"],["/archives/2018/08/page/3/index.html","87b6d3f2927a88ae30add4b6a65c8e21"],["/archives/2018/08/page/4/index.html","ed0f16e5bc1b707f946d86c3f4d30756"],["/archives/2018/08/page/5/index.html","95b862a596021f0e55d2b7bd5436ae77"],["/archives/2018/08/page/6/index.html","86324ddf125d3784a05297ec4af8b37e"],["/archives/2018/09/index.html","6d6e8e4b28a8179c557c4319fce2f79c"],["/archives/2018/10/index.html","3222fa6ebc78dd8b66cb09e6630a8339"],["/archives/2018/10/page/2/index.html","51493dffee8c66f0105938c4dd53d59b"],["/archives/2018/11/index.html","183226d7294afec60d9cb8fe88a431b0"],["/archives/2018/11/page/2/index.html","b036b099c27fb592833338c94a5cc7d0"],["/archives/2018/12/index.html","1498f5e8e6ac2e215eb6fd655d68a6eb"],["/archives/2018/index.html","479ba79fc8ef89276ea6bd6aff9ad0fe"],["/archives/2018/page/10/index.html","ebc9bc039750307113e0b153cfc3037b"],["/archives/2018/page/11/index.html","de60f820c93eeac71c440eb8e546fe55"],["/archives/2018/page/12/index.html","b73ac3e5ba0f0f3eb9896a77dc1e271e"],["/archives/2018/page/13/index.html","70b97dc4702995fca8463a9b9e03906b"],["/archives/2018/page/14/index.html","3b5287c0792394ea518abe6c21741e3c"],["/archives/2018/page/15/index.html","f3bdc9aae0971034b19dd30a8c20baaa"],["/archives/2018/page/16/index.html","a49722b0640b922e46990d5e2ce0f017"],["/archives/2018/page/17/index.html","06687b3b31e78a2cf5210d73331b9b11"],["/archives/2018/page/18/index.html","fd270cb01c5ff942ebe5f412fadf6e18"],["/archives/2018/page/2/index.html","68ac0f29c779335d3a6e5d2389bf20a6"],["/archives/2018/page/3/index.html","2cf2884f04080fb02e35b5061bd66dd3"],["/archives/2018/page/4/index.html","89ee637c52a6fe8be029c47e11bec1cb"],["/archives/2018/page/5/index.html","fb9bb0a33bd7b7a149d0e21b6d2b0409"],["/archives/2018/page/6/index.html","d3614267623c976ddb1e46781b275f06"],["/archives/2018/page/7/index.html","cbe650103959a8651971c8ff84b65c68"],["/archives/2018/page/8/index.html","df308527f663b5ad5c76b902890c94ae"],["/archives/2018/page/9/index.html","0e397800bc28db06dac91bb2102b2144"],["/archives/2019/01/index.html","19c6e31eacc4a1d8009afed12ab18c71"],["/archives/2019/index.html","728b87d5edd0f01ed0d300fdc2c4c745"],["/archives/index.html","d6b6b37c0c742cc234247f2b0be66753"],["/archives/page/10/index.html","c9984ae95635bfdcee2e036e57ebe5eb"],["/archives/page/11/index.html","533f8b11d8c29ffd38870d711b940225"],["/archives/page/12/index.html","12f5aa3ab6470bdbd5b3b6ce87b953e2"],["/archives/page/13/index.html","7aea95602ea5ee0690cf4ddfe3a259ed"],["/archives/page/14/index.html","e74520eff68f8cb85bc215552bb4dd2d"],["/archives/page/15/index.html","f823bb93d8fc016df5c88aa8e1d49193"],["/archives/page/16/index.html","819a373cc96771297dba169ac781a1df"],["/archives/page/17/index.html","94ce683887149f2c9c799cc47fa57599"],["/archives/page/18/index.html","d5e0f5df40a9f872330e64b02e20358d"],["/archives/page/19/index.html","e6d05f9606f97df93fded6cf51b60a35"],["/archives/page/2/index.html","045243f12ce1d7c89e1db8708ebb8c66"],["/archives/page/3/index.html","d6d4eac58b69912c49b9935e50e1a450"],["/archives/page/4/index.html","dd64caf8fabb9de83d11b6989e54ccba"],["/archives/page/5/index.html","b272ace005f51850f2738091352d0523"],["/archives/page/6/index.html","09266c704cce692220d29b68fee2592d"],["/archives/page/7/index.html","3e999ac62ab83b4e34d56e4350d725d3"],["/archives/page/8/index.html","29f14db190070849e0d3b431ee9f3b2d"],["/archives/page/9/index.html","b72f19ae7d9e7e1db9d340d834941d23"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","00f2cfa31cb7df027f5e2d8fce28a9ae"],["/baidu_verify_ZzhwBFUe1V.html","446788bb982d0d730e9151635c69ef4f"],["/baidu_verify_dw73Nh8OEw.html","2f870896575271f2266943a0b522abca"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","d32f38bd043c5a1857b33df7b5421835"],["/categories/旅行/index.html","d3b06eaafcad93265cfbc1f1e5f2c04f"],["/categories/编程/ACM/index.html","5a5646804b8fe5f40afc4208f9d07b33"],["/categories/编程/ACM/page/10/index.html","79d8b94ab3025fd16847c99b3cf556a4"],["/categories/编程/ACM/page/11/index.html","ecabbabfe8604976ac6e497357758708"],["/categories/编程/ACM/page/12/index.html","5335ad58313bf177d36eb9169df911c6"],["/categories/编程/ACM/page/13/index.html","049d81112f1b84b3cbe0b78c7c72929a"],["/categories/编程/ACM/page/14/index.html","7b74c01320756251156b67862051626d"],["/categories/编程/ACM/page/2/index.html","7c4ba9656b451e289470531adfbbe79c"],["/categories/编程/ACM/page/3/index.html","ece7aa000bd1baebe336396638dad832"],["/categories/编程/ACM/page/4/index.html","f41fc21b737acd952dbb47ddc151d4d9"],["/categories/编程/ACM/page/5/index.html","513cf77044934df61852639227384c10"],["/categories/编程/ACM/page/6/index.html","93a9542ac0ce4027b2392d17350ea8bc"],["/categories/编程/ACM/page/7/index.html","14ba335a574ddd9cc91e44842e5ec808"],["/categories/编程/ACM/page/8/index.html","ae51565ad77f68ab863fe65a9c3989d2"],["/categories/编程/ACM/page/9/index.html","b762a4b98b06af800b21d3b178acb3e3"],["/categories/编程/ACM/数据结构与算法/index.html","ac1e530c5b32005342dc3fa4bbc02c31"],["/categories/编程/C/index.html","1f1de5489144b2170829f93de1329a1b"],["/categories/编程/Python/index.html","2abec020d0454b84d42ca6e254c7dadd"],["/categories/编程/index.html","59aab610d355b09e81681829735fa86e"],["/categories/编程/page/10/index.html","a6aa911b31636bccc3b35a91bfe9afbd"],["/categories/编程/page/11/index.html","2a7377535e778f0332e7aa5ae6aa015a"],["/categories/编程/page/12/index.html","75f270cb1d0c16617025d05cd509137e"],["/categories/编程/page/13/index.html","7cf16d12874f2cbc70954123aa8d30db"],["/categories/编程/page/14/index.html","e766a8c6784798677393504b41d8b9ae"],["/categories/编程/page/15/index.html","369c57bf2d9368f937fe9a8be92d0339"],["/categories/编程/page/2/index.html","c9f5dc9e80238334a8eba7fb33566424"],["/categories/编程/page/3/index.html","99c323afc65c52e543d69a64139b9dbd"],["/categories/编程/page/4/index.html","72bfdd0fc8dfdd487d70f32b6fdefc06"],["/categories/编程/page/5/index.html","f4587f40abe8ca7c0a07d8ff79992d22"],["/categories/编程/page/6/index.html","27460a7466e09fee34b2f15e68255e38"],["/categories/编程/page/7/index.html","8b8be9069ac202da1a05100eb6751f1a"],["/categories/编程/page/8/index.html","0ec9f58fa45d4cc7043c4fb71e2f2bd6"],["/categories/编程/page/9/index.html","184bb1c7e1615b6bcb4991759727f3d2"],["/categories/编程/密码技术/index.html","2c8455454c5fa7c3d4661379dbb0c444"],["/categories/编程/生产力工具/index.html","405ff736c79a056ed14ae51a561b0c8e"],["/categories/讲座/index.html","a727098f1b735b4e92ed045a424e3eab"],["/categories/金融/index.html","080b4d5cb8b0c4be79ab6f877df99c5b"],["/categories/金融/page/2/index.html","ab2f70814924cd4c5d3186080d50a598"],["/categories/金融/微观经济学/index.html","5c6caf50fb9cffa5a21220ee6528e933"],["/categories/金融/金融学/index.html","e9ed05335ec2a795b10cbc95fab5ea67"],["/categories/阅读/index.html","7fb78c0f84e4d5af129dbf16c6536052"],["/categories/阅读/page/2/index.html","3dd4a6c841e03a22f93b9ec0f3bcce06"],["/categories/随笔/index.html","9ebccadb5d2000ca5d1de281ff25d921"],["/css/main.css","fb50932b9a0fc677dcc8998e4a641edd"],["/friendlink/index.html","b2f0da89fbcd623062146c561f9f1bc6"],["/googlea873f713657fb5dc.html","9abb876287aead6db8c03cc0b707f3e7"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4448b75934644a4f27f5e1f1ab777192"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","d41d8cd98f00b204e9800998ecf8427e"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","18c5e1c6d008b07ed48925c13da1711a"],["/page/11/index.html","b80fd03cd9ab11481ca488b75a39d741"],["/page/12/index.html","f4dcb69870b530c70ba6cfb59687fe0d"],["/page/13/index.html","bbcfdd717a2555263595de87a9bab56a"],["/page/14/index.html","b05c3dfb4e1b2c4f50088190ce9ea7e0"],["/page/15/index.html","b5818a4a817c4ab3a1dc13911cb0f681"],["/page/16/index.html","5c5b8936a35582abe0f69a31e4259ba2"],["/page/17/index.html","6e66c6ce9cf6fe05f1da67b4cbb61244"],["/page/18/index.html","3fc5d80ac17f302da6e9eada5a95c297"],["/page/19/index.html","2e52c749f311dcd8103e9bb95048e55c"],["/page/2/index.html","6e5c0b20bbf591187798625c57e1c492"],["/page/20/index.html","b6ad3e8c2b7ef36972a59144ab3d86ad"],["/page/21/index.html","bb3927ebe7b2c6ab392185f3cf4661e6"],["/page/22/index.html","3e3f140f1f87b82d5e6c9b7450cd14d3"],["/page/23/index.html","90d8ebcd8760e34fd58ce3b686ac7011"],["/page/24/index.html","6b212e5a9657732619ae7592880582f5"],["/page/25/index.html","1a50d603f268da78b984ed77e945f1e1"],["/page/26/index.html","4755e53180683de49473c9d82699b97a"],["/page/27/index.html","5c98649b5435e253478d82008a0141ef"],["/page/28/index.html","e999b5a064d0a6fed21bc19ebd84118d"],["/page/29/index.html","618d53b428f9474ce1b57ed39e56d530"],["/page/3/index.html","083043fec7424c6afdb367d48254b83f"],["/page/30/index.html","25e841fabc1c0d2290ec1b3cc18b471c"],["/page/31/index.html","3334e839b6a4a769ab8020aff07e38fc"],["/page/32/index.html","4617831938cbeb326fd4999e06a69acb"],["/page/33/index.html","aaf6c3849860085d67e4a575a0f8b2ba"],["/page/34/index.html","044c11dd2278cc8fa8f4ba15b4dd00c8"],["/page/35/index.html","1afa8b205b5a08322e8880714d775c07"],["/page/36/index.html","561ce4a4907013803a1a67e1bb32cad2"],["/page/37/index.html","76e77880efc109947c52377fb2c5641a"],["/page/4/index.html","6a335d4a020d7be2aa4fd7ae45a126d7"],["/page/5/index.html","3f678749b3633db3cc8bb9a5bc9b1357"],["/page/6/index.html","7f870c5f25e6408f020814c509c8e8e3"],["/page/7/index.html","8eb67ec73a806406532b0c83718a5b3c"],["/page/8/index.html","713fa7f4058c016a1c07960da54b2643"],["/page/9/index.html","bb27764fb1dbf5322f3da3cfd9d27451"],["/post/104a4c5d.html","587c281fd17452e15261210ccd71a573"],["/post/109aa3c8.html","812c4c7579486fd6808010578178ff5b"],["/post/11246bdd.html","0db79744fb0c77d335ac4d9a18896480"],["/post/1233e925.html","975d3533a7006515cb867326b021d82a"],["/post/1448d9c8.html","1034cf1e680a80e2857e1200b0cb1074"],["/post/1448d9c8/1.jpg","92c83229f0ee3855572d88311fd26f93"],["/post/15db1cd9.html","0031ba8eee356dff6303c14e424c41ac"],["/post/15db1cd9/P1.jpg","361ea4d257a548ed1046fa71abb12241"],["/post/16b5efde.html","fa32566b7f2627cff930545959dbdedb"],["/post/16fa37a4.html","7efa769889eed17c72f53192f0913eab"],["/post/184fc5c7.html","7e03e6f1ec0e171cc50b085aaaa24983"],["/post/19e79191.html","9ae64cbf196d5b1a4d2b12611cd4e2da"],["/post/1b7db6f0.html","ddc697df0323390c17c49f594ce58b76"],["/post/1b7db6f0/1.jpg","e892edd695b5ec40519adebff4317a9f"],["/post/1c52564f.html","fedf74eceeafaa202698b495a6297450"],["/post/1dc46f40.html","ece6962dc8c4e35f4483def59005427c"],["/post/1eeab2ee.html","a2203659e395f7634a79ef2b80744fcd"],["/post/222505fd.html","fd36cb8f97e8e84747b84d684b0984ab"],["/post/23f72a93.html","c840609037e5bb999fc6216206db66ad"],["/post/23f72a93/1.jpg","04567b83fe6a71e174c95d19b3e4f2f7"],["/post/264a9c89.html","9e43d8bb06330e1c96c7abe36bce2fac"],["/post/265c0f5.html","cbab190fda6460b09e7fd3b893d4102a"],["/post/26fa4dfc.html","d8915b241ecb44fff4b19eb0998a2982"],["/post/273ced06.html","6f758ea940ceeb64a2a6d1832c15c197"],["/post/280fbdcb.html","0a986816b04a48649f10292ead34f8bf"],["/post/3090aa13.html","02b781684268bb3cb0c4ca4640fc3ea1"],["/post/31a770a5.html","8d3305d37308280af45e2d276dd92bfd"],["/post/31f89579.html","43048ed2ba8ec4187025542c95d567d9"],["/post/32dc51f4.html","bf21791e7b9aa666fadf3c77c190fdd2"],["/post/34a049ac.html","efc9f2fb70ef8d04f34aaebe4ac93cff"],["/post/34f53a10.html","548344051e407b1ef9a18394c98b4797"],["/post/36bef409.html","21610596306aa264ef6cfc12b6d99e77"],["/post/36e5881d.html","696a5d362e1691de6ec1de1c5f97f5a0"],["/post/380486cb.html","2a86d197ec89e4e09411bb9216485b58"],["/post/38f8b110.html","9772cba491878d5c8d3e8d08580ef7fa"],["/post/3a3eaae1.html","444e731eb226af147ae854f11823cf51"],["/post/3a72081e.html","ac1562777447ef846e0f66c26d183fdc"],["/post/3bc7f503.html","c75ad76fbddd4567c5c9cd7e59cade80"],["/post/3c57c5dc.html","2ae0ef580ac05963df4690e81758f170"],["/post/3d71c64b.html","c8f555aaa2213cd4277d698a410e8a64"],["/post/3d8072b.html","2ece2835fe453ba13905b628c467eaa2"],["/post/3e6878ac.html","0ed559bdb773aaab1de0ae565ea6f0d7"],["/post/3fce0650.html","a7b1569794ed5a4a81ad82456ef5e485"],["/post/409dbc1a.html","6b6dc31879cfc6dca451ada094e7fbb5"],["/post/40dfaace.html","f20a467accea097d9f7773d313cc2169"],["/post/4255f31a.html","c0aa37494f1b01b84f5369d0ea4ae25f"],["/post/42a619f7.html","70fa672ed3b87b7c2e2f926096c1230d"],["/post/44505a5b.html","7cd06bb9d9f31ccc3e9bbf2e2b711125"],["/post/448da703.html","fd6e484e679b61ed07835033057d49c4"],["/post/454c2118.html","8637f89cc3b2007d24ea39ae4239d3b9"],["/post/454c2358.html","654cc1d178b699a38d534e89a45c473f"],["/post/4773b69c.html","85c32a27e99e22390925e50ef3e0f01d"],["/post/47b391f2.html","7e9ea1354190bbbea9e3a151aeeaedc5"],["/post/47b391f2/1.jpg","9cb0fa37cd89226318c25b75390804a3"],["/post/481e8abf.html","6e76e498f37d8ac3d65da6ccc5be8ee2"],["/post/4b15f9e3.html","52612f78430ea17a623a5396bd5bb841"],["/post/4d6a6b27.html","1bdec65ff8712175884fbac5e5416aee"],["/post/4d6a6b27/1.jpg","03afc8a023bea763338085f46bd7eb33"],["/post/4db7e28a.html","ae2bfbd08c6418abddd24fa01841e028"],["/post/4db7e28a/1.png","92905e726cd5666923c5d0b2aedc92c2"],["/post/4db7e28a/2.png","8e98e72ae64a7f7a13fe061d7c49ac15"],["/post/4db7e28a/3.png","638df1c1ab9432b59463717c0a1074c8"],["/post/4db7e28a/4.png","cd522f1c2a187cb0a7260960e0b8ef24"],["/post/4dc7502.html","7b99660cf4209caa04ce5419f5e7af4a"],["/post/4dc7502/1.jpg","a5d9a21565d6a985425766314f6d4f57"],["/post/4e876bc2.html","6da5a20bd221ae246e1b868dedb7e5c1"],["/post/4f352d.html","df9f8953ccd4b52019fe657ed4864223"],["/post/4f8fe65a.html","7fd157ae48c9c63a56e80a18488329e3"],["/post/4fa396eb.html","658612f30a43491907afad8ddf31ee43"],["/post/52730f61.html","24ce999511b454b92a3d52a1792b5e83"],["/post/52730f61/1.jpg","ec64d8606b78799d7d4cc571d129b001"],["/post/531de0f8.html","889546fb4efb8ca9a8e78d485f14ec18"],["/post/5555df5.html","799c9a428c391ff76a22317e4dbc9efa"],["/post/57bfde8d.html","11e37e5cb70ea7b965549e2d626b66e4"],["/post/585293b8.html","a51191fa4e22b0dcf83030a6258fe223"],["/post/5aa5290d.html","6e132b98424bc696181cd357777c0fae"],["/post/5abc6d45.html","b706aefbd208d68fb38e58f33ede929e"],["/post/5c86d06a.html","5d42fe3e47771cd4f2266aae9abb072e"],["/post/5e189593.html","f55a637698e8771ff4e6d5ae59a288f3"],["/post/5f2d4a77.html","e38864911fb77b547e9bd8eb97d9c24f"],["/post/5f341cbe.html","b8c77a401befedf3b0be381fed31bbc6"],["/post/60850415.html","4a6ed1e9a3c9b544d478fb901f85fb2a"],["/post/611dd122.html","35f92d3c246b617498c37b7e5f2bd335"],["/post/62cb42be.html","2638a06461feb228bc88d18bfecea8cf"],["/post/6501181e.html","0ae64dd85eff39b3360ba35087ffd3aa"],["/post/66258384.html","1eee8ac2a84498f7c7efa16819065adb"],["/post/662b8b80.html","116e3b296d50e469610b10476d447422"],["/post/677d0fef.html","baa21d082cb797a291caaa9ba4ad2c30"],["/post/685bcc20.html","f1ab19f3698bf54cd2e584872710bcd5"],["/post/686dc27c.html","0601eb8784bde9defbd82e49b8bec96e"],["/post/6c71e418.html","4d894b77d418056b43a4811bb6ef9b0e"],["/post/6c71e418/1.png","e1c0066fdfd9e6e620e5f6e59d26422d"],["/post/6ca1eed5.html","c4ccfd44d7769b08c93dbac903cd144a"],["/post/6cb7680e.html","12b552e909b15f5bc349f4c34ab0432a"],["/post/6d52b9f2.html","84ec3adea4771766ca9fc9a9942380bd"],["/post/6db0d89d.html","0b1c7d6611aed2fd73ab3c9463e4e279"],["/post/6e80eb1e.html","dcec8a5afe38945ce95e2a563af57a02"],["/post/6f3b3edd.html","e959dbed4d2d79b6204740aa07375e19"],["/post/6fc3409b.html","ee1ca9e7bdc638962bf96510cb3b9a7a"],["/post/73136b.html","f5b4e1f648f04f98192510bdccae27d6"],["/post/7410a832.html","5f6fc4af5bbc8a8cc7ab334e6de917e0"],["/post/7410a832/1.png","06ab09720c384f755e8835496dc582a3"],["/post/7410a832/2.png","f79a5d7e82c77eb2073f0dfabc9b4de9"],["/post/7410a832/3.png","3d04f9b37e461784e150eaf786333e8c"],["/post/742966af.html","874b29f1669e767359dbff422574e132"],["/post/742966af/1.jpg","944fec6abdac72659bc394b0b25eaacd"],["/post/74479d01.html","e42b83c353003d94a2b99796211d57ce"],["/post/74a4286c.html","75d8b1effb507292af396a2b96ea6d80"],["/post/75794199.html","ba8bbc16ded8145f61d9d664742d01dd"],["/post/75f986a1.html","f41a702d38ab5659546772df799d96ba"],["/post/75f986a1/1.png","20f89c350c7dde61738b30cf51c17323"],["/post/76485a7.html","abbc812e708fb4712910491c77584018"],["/post/76485a7/P1.jpg","07abf78f3fc14ea1742bbb614e19c97c"],["/post/772fc02c.html","81eca19ba914c8eb1521f5d0585dcddb"],["/post/792e36ed.html","89f0133363a239984e7e67a092faaed9"],["/post/7c50967.html","a4b62d4be6245ce2c68b841f25fdb019"],["/post/7d8e4f2a.html","6b80013f52b8b56e596cf9469ab0d9cc"],["/post/7ef8a98f.html","8bae7ffd058ba5c0b3365dd3e49dc703"],["/post/7fe193be.html","139788fdeafb77bc8f024b26f4ebd9f1"],["/post/7fe193be/A1.png","ac374c9930bbfbda65eda8a7fdf0e087"],["/post/879e9655.html","64f093d02a147ca39993f386b7ff4648"],["/post/88e8ae98.html","84488cd1c51b7bc336c98d7e8a3f389f"],["/post/89873dd3.html","4d7d868a6773ba6252819294d03b235f"],["/post/8ddc8a30.html","8323a378ef6b4731ecad3012990b00fb"],["/post/8f9cfad3.html","95d20703992f3478a62d545f519f2bf3"],["/post/8f9cfad3/3111_1.gif","954e37cc5cc90afeb9e1d7b9d33beadb"],["/post/918fcaa1.html","d048f03a751a16f7ddc08532aabf44d2"],["/post/92687617.html","3d493f4b8f4c3ba5fcc143cf1e2be502"],["/post/9282aeca.html","e4a7c51045db5f08740042613c4b284e"],["/post/9305c5f5.html","d560813fe4e4f97cd96eb322f255ec6c"],["/post/9305c5f5/1.png","fea32b0983a838ae4d83b4b163e5ffaa"],["/post/9305c5f5/2.png","048f119a686a568fdc0d34e17bf128ff"],["/post/9305c5f5/3.png","6fc7e94dc5c1be8cefe88857a811436d"],["/post/9305c5f5/4.png","2b801651afd537ac1bb41fbdf8800e31"],["/post/9305c5f5/5.png","fc105719071995adcbc2209a01c66f50"],["/post/9305c5f5/6.png","d09e7627cfaff506d2fbf74e84a6b3bf"],["/post/94c9baee.html","e0342e8dd7d0da7793b1146b3e2ebe9c"],["/post/98804e11.html","174598d165b6acf24a3d0dc4ba88c28d"],["/post/98804e11/1.jpg","c3133c8be40b6b95db851b38718fbce8"],["/post/9a9a4797.html","684a2c8f43b315828db2c1495eec88f8"],["/post/9c28a880.html","b99cd4b73accf8f19856a3c5a31feca0"],["/post/9c28a880/1.jpg","2755021381b95a4f144b684710382222"],["/post/9c649212.html","0f4c0af1c8557d6c975c27c0eaf931cb"],["/post/9d402b32.html","14cc273a41dfd7af7224bec7b639bbc4"],["/post/9d402b32/1.jpg","40cce5b36315acc8347de0493946937d"],["/post/9eb065c8.html","173e1e7b194d0d60f8b84edf1645d3b4"],["/post/9f8e212d.html","a55fdee484894953d2b4c7163b85bf79"],["/post/a1751c09.html","77849cf0b1c590bb8870c955702a6098"],["/post/a1cef007.html","97e3ff9defca741946071843b4f4d882"],["/post/a1fc03d8.html","c0cb5f445e4886426cdb7cfd0e01add3"],["/post/a27e9acf.html","3f421dc0bd208211cdb8c40a9f4ad010"],["/post/a4c66bf4.html","161da92cc9500d9856063adda23b2b30"],["/post/a4efe87.html","48abea37356c9dbb889dc0a14e0f25bf"],["/post/a7528411.html","a378f4798ffd1296a72540b51b43bf87"],["/post/a8759852.html","864c630ed33967ffc16c8e601c678d5a"],["/post/aa0a97c8.html","eeffaddbff4831f8477b76bb1c4538b6"],["/post/ab4ed95b.html","a2aa4bd90546399cda7890a92df4ccf7"],["/post/ab720150.html","4a0c1aac38ef2351960b243c55a12348"],["/post/ac92be99.html","1a2289adc94550de7ca6cf4dbc9001d4"],["/post/acf6b02e.html","4f92def0c8b5100c91960662556deece"],["/post/acf6b02e/1.png","c24b4d6721da24754112c1cf70aaeb26"],["/post/acf6b02e/10.png","6b84764050aa8026c9726d15be829674"],["/post/acf6b02e/11.png","942dbefeec29034a2adf02a5b6e1cf21"],["/post/acf6b02e/12.png","d75b4439ce870cea07942930dbe7bb05"],["/post/acf6b02e/13.png","21471c5b78f036ae94818a894f400ad1"],["/post/acf6b02e/2.png","f10687a30bb23eff6b150bdaa4c2b741"],["/post/acf6b02e/3.png","c90eded3d661dc955ff1f96d1d08d165"],["/post/acf6b02e/4.png","0d8254cca92ab2977d08bb6ec724d6a3"],["/post/acf6b02e/5.png","be6d0422ef39b3e84983fee9612c2e64"],["/post/acf6b02e/6.png","e10f547d2d55e7a22b255103ec371952"],["/post/acf6b02e/7.png","62a6cf991e749119c2ce8c66b2b7cd04"],["/post/acf6b02e/8.png","9a028f4b92a55dd0f545160f961b146a"],["/post/acf6b02e/9.png","1bded821ed3cb1e4f7cbafb2fcd851a2"],["/post/b0d6c7.html","dbc8f804e995dc7098d23e60e7974bff"],["/post/b3ee770c.html","8916b54a84bc2553c551801e29464bea"],["/post/b3ee770c/1.jpg","8284eae107bf12291f91f5a255e9a4c7"],["/post/bb7f8e97.html","cb3478ae7ef24ff1716c061a40a39e4d"],["/post/bb7f8e97/1.jpg","e096d2bb21776bd72d6c74dfc6e8f021"],["/post/bba462fb.html","265130f996409c20aca0192f33112e7b"],["/post/bc8586da.html","755443617cc4521577c6a625a63afddc"],["/post/bcb02c2b.html","77034e8992d7a405b6f2c0246af1f5f6"],["/post/bd36a30f.html","f9e7ef73a222ff2f1f7a049d77d0ea53"],["/post/bde4b1f8.html","7ddc6a41c508c3635eb50c09372292fb"],["/post/bea42f1e.html","da058376fd23f0010a7a070cf9d293a4"],["/post/c1864474.html","266c93d1a6d35e019f8babb9ea5cc1b1"],["/post/c293d2b3.html","185ed442b2ac97ef45d94fb306b3b60f"],["/post/c293d2b3/A1.png","43fd63800bfe151dfd505fc94f290389"],["/post/c37095b9.html","8ce0b9267ea5859c51231369b77626bd"],["/post/c5672df5.html","65faf9f3e613b4dfd477762359c93099"],["/post/c6d76e9a.html","1ed8c8e35bd1fb764576c4028beafd6a"],["/post/c7fb8250.html","da25c41cb8a57cb14c318281e0848acc"],["/post/c938bbd1.html","5104c781b6f49dc2eba241014161a81a"],["/post/ca14c5df.html","b128b5383e2dd0c6ae201f85d470a18b"],["/post/ca14c5df/1.png","e08c2f588cecc2f20e68020135a039e8"],["/post/cd18de84.html","66fa265944e9bf2d0a90eb94c2ba400c"],["/post/cd41dfb7.html","1c7aab80573f47611f63da36a657819b"],["/post/cea184b4.html","75d159fe09e09ab43d6615d22228be6e"],["/post/d120bd8e.html","9f2e39f44d1e944625f19415552471d2"],["/post/d50b784.html","27315e886cb9c90ff12c0d843234e9e6"],["/post/d6a5bd15.html","d58c849caaf86a1c61a19a80c19253b9"],["/post/d6a5bd15/1.jpg","b2922e61725a4116b226c2d2b5e409fd"],["/post/d6a5bd15/1.png","3f4b4c7f5f0521aa2dd37b161a22def4"],["/post/d73de254.html","db777a310ebc1812a23a010096ba1f6b"],["/post/d81c5363.html","dcec90c77ec3a85920f332ead3086ac1"],["/post/d899bd9.html","18ce6ab7684df681b8c5aadc02b97f6a"],["/post/d9083bc4.html","061f40db783924cfcd6bb9f908f8c5f5"],["/post/dc981233.html","7450ddb32c2c763621a3607e485c0ebd"],["/post/dea65d58.html","a474e8c221cb5642cec21ebe13670477"],["/post/df76d545.html","399f3d80e7922ee191bce5e6ac50192a"],["/post/e256d99f.html","399eceefa807c785519fdc9f9a66793a"],["/post/e290dd8c.html","bb5d51fa08d329b70173db26b1708b37"],["/post/e3e37943.html","d095beb4ef73ef86521ff3ded306bfce"],["/post/e583ed8d.html","32e2cbbbc8612efd86095a702f10c901"],["/post/e5d75450.html","23c07a81d57a0c6981b7f93e133cf71b"],["/post/e6364ca4.html","e96304d32ce41a0d8da9b9f6484b3bd1"],["/post/e7058b47.html","6cb84de194fb29eed8b9e99d702eaca2"],["/post/e769f01f.html","713531b82c4ad8d37312ec8b2250ce28"],["/post/e78ad34c.html","bfa5b7f82bf485a286a5d9fd216b0d28"],["/post/e8005312.html","eca96b3c9fc24bb7762d78bd2f9ef312"],["/post/e8ae7612.html","70f2c1d7f0424fbd6e9bd32057cc764a"],["/post/eae0b80e.html","598c584337a2a027412d482c5ea43350"],["/post/eae0b80e/1.png","9645821ed77a0b3b003017082f066918"],["/post/eae0b80e/2.png","0801fdf5846992c7da4f8cf5c530bd73"],["/post/eae0b80e/3.gif","bd832a4df49c41b4a91ea5fb274219d2"],["/post/eb9ab36.html","9f22c08d8b385fb0db6e9ff01b44d9d4"],["/post/f0b23c5b.html","b2fd66c6e5acd21a13395297c9b531d8"],["/post/f279299a.html","77f639976ff0b18a1de9b7e44d5f3007"],["/post/f3d9c661.html","5e50f99bcabdc26f044c544c8709810d"],["/post/f3d9c661/1.jpg","eaacb0b9331aaf9136259142b6736e48"],["/post/f4bfd16b.html","015b5aadf195c5d8f1c524a23c162ecb"],["/post/fb2f630e.html","251984e95c485f5c6b15d174237edd25"],["/post/fb5efb9c.html","3a8a7ef37a592b4bc709d686ffa4107f"],["/post/fbf7f335.html","c4143912d3a38781d05c3daabc49d7cd"],["/post/fcb9464d.html","ca5ec07dc40daf688cd577fb34f5c451"],["/post/fd581850.html","35587d30f718c499be6bdd65271ff051"],["/post/fdc06f3f.html","ea6dee1121e28a14bbae65a628033431"],["/post/feaebfb5.html","099ab9c76f842b1412a675957b4e7825"],["/sw-register.js","ba82b37e43d5836445f431ca2f03af18"],["/tag/1988：我想和这个世界谈谈/index.html","1de5f3c4e0a7ddd338690eb442d26856"],["/tag/1Q84/index.html","c06d1cd802ca1e1bbb7eb799e362302d"],["/tag/2017HDU多校/index.html","c54613e3935f5984e8e6d8b6b48ea216"],["/tag/2018HDU多校/index.html","e2c65c3199c3e5c6a7601761110b3368"],["/tag/2018寒假集训/index.html","60152a38e505ce50fb82da1a056bc580"],["/tag/2018寒假集训/page/2/index.html","81b0c8a7693b910d7b1b3b10a291fda8"],["/tag/2018春季训练/index.html","11e4079f3dc40b6a869bf9028fded234"],["/tag/2018春季训练/page/2/index.html","829aa6f45e93f07beda5218e76d427dc"],["/tag/2018暑假集训/index.html","cf0fa7eb6264fd2de4bf27ec7ea21952"],["/tag/2018暑假集训/page/2/index.html","bf15f922fdc17d05d4769b95b3b997fd"],["/tag/2018暑假集训/page/3/index.html","492c2cdf7911b675102434cf782bda1c"],["/tag/2018暑假集训/page/4/index.html","a2f9373a12142ec85711ad2ad5c7fe09"],["/tag/2018暑假集训/page/5/index.html","11200bbc9c04ec083fc2eb1721013b36"],["/tag/2018暑假集训/page/6/index.html","0de945d9d8c804b11dd8094e800d1a30"],["/tag/2018暑假集训/page/7/index.html","057b8b91dea1aeeb446bc6aca5360788"],["/tag/2018暑假集训/page/8/index.html","50e09d823aefa11fa9a7d31cd03c0585"],["/tag/2018暑期选拔/index.html","45a700505fced7f5110f42f190abb2b5"],["/tag/2018杭电多校/index.html","b3db9c863733cdc0447e6cbeb66fc942"],["/tag/2018球季训练/index.html","e3d706895593b00b4d5fe5efac1a07d7"],["/tag/2018秋季培训/index.html","e598dea3cfce12f8101237b472ea3be5"],["/tag/2018秋季训练/index.html","a90f2097f958c6277f23003cc7376a72"],["/tag/2018秋季训练/page/2/index.html","298d9e3a4036f4b3d928757f82a90faa"],["/tag/ACM/index.html","c6dadc994e1c98e4deb8c01541baa21c"],["/tag/ACM/page/10/index.html","7eecd7542bc1bbddd94f837bb78f574c"],["/tag/ACM/page/11/index.html","0b8ded52487770654d9b43f1821d670e"],["/tag/ACM/page/12/index.html","4da78acc224d2f47d3300c81173d60bc"],["/tag/ACM/page/13/index.html","c4825cbdfcd66be8a3b969a7d1b54d24"],["/tag/ACM/page/14/index.html","d905a51928ac96f5329a2993f2bb2066"],["/tag/ACM/page/2/index.html","a89e60fbc8af075c3b06f21092857c09"],["/tag/ACM/page/3/index.html","9c0a5e45874d4a48509b6ea0005e2a93"],["/tag/ACM/page/4/index.html","184dc2b7afc7c88f2dd78a02505bbe61"],["/tag/ACM/page/5/index.html","65ab2dfcfdb0216cf2751ce3cc247a55"],["/tag/ACM/page/6/index.html","80357c8ef8bc0cae981ade1a5e6c5bb3"],["/tag/ACM/page/7/index.html","c599b9daba54dbb0ed885aa107e4d1e6"],["/tag/ACM/page/8/index.html","ef89dee25e541c700fdd5b88f3666516"],["/tag/ACM/page/9/index.html","2cfa7a26baa067541107c86d111f4595"],["/tag/AWS/index.html","f4854b77e52c7008562afdc8126811e1"],["/tag/AtCoder/index.html","e0e3259335864562cb1a5f115e5a1258"],["/tag/BFS/index.html","eb6cc4c66240bcd79214cdb8dc5682ab"],["/tag/C/index.html","dd6cad6350973db840f166770782a6a6"],["/tag/CSU/index.html","029928db6b6402cbc652ca408097dbfb"],["/tag/CSU/page/2/index.html","cf0db9ff3d1319ebd59deb4b07fc75a7"],["/tag/CSU/page/3/index.html","8ce5bd8f0b89324daca5a4bbe89ddd7d"],["/tag/CSU/page/4/index.html","5e7d76ad9d46c0bcca481c621163b754"],["/tag/CodeForces/index.html","2865174507ba74af1e503eb939bfef7d"],["/tag/CodeForces/page/2/index.html","8bd03c770e35de3dfa14d160d7de7f38"],["/tag/DFS/index.html","113679ffc18e2c2b672e4882babc356f"],["/tag/DP/index.html","5e86670fc3b4e00a1252ef7dc3ac6646"],["/tag/Dijkstra/index.html","f7e97ee42a5067fb20f653ad74f5d746"],["/tag/Flask框架/index.html","ec34fc578a8e2bd672d802a2a4f6307c"],["/tag/Floyd/index.html","8605a42f353a32c7a327e6744eeb7d08"],["/tag/Graph/index.html","c440685646a719c04d29c5a87dc9dfff"],["/tag/Greedy/index.html","f848d7b27b823579581d72a9fa5ea4ca"],["/tag/HDU/index.html","3b0c9f885ca2bdab99d6f3fdb9dbe243"],["/tag/HDU/page/2/index.html","d3748eb7fbd48b23c2132b32096bf9bf"],["/tag/HDU/page/3/index.html","8a2b6d33c9d58b09010a0e0c553daaa8"],["/tag/HDU/page/4/index.html","f295c6be5556663fe1a27fc99d3b60b7"],["/tag/Imitation/index.html","fea643a573e0b4e616cd38d3adf614db"],["/tag/KMP/index.html","1e7258edbfa1080d12b50555be747c10"],["/tag/POJ/index.html","98883cd7e6cf98ed18187b788d2d8574"],["/tag/POJ/page/2/index.html","b87042208515ad79df6684bc724128bc"],["/tag/Python/index.html","cfc3f8e892fb76ef67d95740a27d95ea"],["/tag/SCU/index.html","45af006e9ea74a3a388c759146a690b6"],["/tag/STL/index.html","7d56d11aa00244e2da0db6bdbdff216f"],["/tag/STL/page/2/index.html","f9d7069e0fd1b575634b14ee672c2a64"],["/tag/URAL/index.html","e8ae89574e7a1ad6c6db6c4461b7ce63"],["/tag/UVA/index.html","b7d8afc5ede1bb71636699862251515d"],["/tag/UVA/page/2/index.html","ac8105aa5e034067feae22d336e69c37"],["/tag/UVALive/index.html","03d2a868a761641cb1313d292dc8c35d"],["/tag/VSCode-Git-生产力工具/index.html","e95b79d1c53943bc1ed1c0049b5d8047"],["/tag/VScode/index.html","dc51dc7708b3809e7c954ea5ad331faf"],["/tag/ZOJ/index.html","066df02cc88a3c9d3d4d535b20b2893f"],["/tag/math/index.html","92a10e8a2ea06c9b7c5e64c23f9d2443"],["/tag/test/index.html","29566fe7c77d279efe3b4b5581a9e1bf"],["/tag/不得贪胜/index.html","ee320ee2bd9bbb80d7664a75c81ddb17"],["/tag/东野圭吾/index.html","03b477807094d3eb19922c0662c097d9"],["/tag/乌合之众/index.html","ff3a1d8cb53de5d465c492f47048cc5f"],["/tag/书信/index.html","6d0bfdd87f6a9e0579d7102a8807f7c5"],["/tag/二分/index.html","f905932d497c4c685317ebec5cf184dd"],["/tag/亚马逊/index.html","dda6d96ff243ee919a68fd30e7fc70d9"],["/tag/亲爱的安德烈/index.html","a910042483e026ba4aa540f8b951a386"],["/tag/位运算/index.html","2ea082b41e01d37c32de45b3850a3d32"],["/tag/几何/index.html","c5c7f3db04326500aa1db2cdaf43173e"],["/tag/刺杀骑士团长/index.html","5f53a03002594f75b51cf87b7cb3163c"],["/tag/前缀和/index.html","5177a51ee9160836530d65abfa239e2c"],["/tag/区间DP/index.html","58cf7e121e8934165269ce1f2563bb5c"],["/tag/博弈/index.html","813a744141b44524e67a55ecde7bae6d"],["/tag/历史/index.html","7f98d2732ef1673b12af72bff81d4eac"],["/tag/古斯塔夫・勒庞/index.html","7ea891bc4637a9d2f033d8fe5296032d"],["/tag/图解密码技术/index.html","b2e9ab23ce1bc90237e22f1281f6b17f"],["/tag/大数/index.html","4e85e9cf02655494146f83b461180838"],["/tag/天幕红尘/index.html","306a50f8a4eb1542405590d5b127469b"],["/tag/如何阅读一本书/index.html","68e79ba44a1803bd6731e25b9b69101d"],["/tag/字典树/index.html","b21441dd202336a5724cc5c8b98bbeae"],["/tag/字符串/index.html","c2f167697949b289e4ada4955500daf2"],["/tag/字符串hash/index.html","3758b48a324db3f35d07a90204589c83"],["/tag/安德烈/index.html","70c4caeef5062d8cbf74a21a7d45129a"],["/tag/密码技术/index.html","3cdd2d85c26b41b4fd91ce178b222651"],["/tag/小说/index.html","82bc3116eeea8b2a343240253e96b089"],["/tag/岛上书店/index.html","a2bb9dbeb5141c8883937605198f25ab"],["/tag/并查集/index.html","f0362a83a2d3a0d8fc3aeb7a37a1fdc7"],["/tag/待补充/index.html","29c492f6b46c53e403e7e6d98bfb50df"],["/tag/微观经济学/index.html","9a38d9929c9b4be9b6fa32e73d817a89"],["/tag/数学/index.html","fe4b114062d325771294e194d59995e1"],["/tag/数据结构/index.html","c5092532539a8e5eefacc9ce2b6fc280"],["/tag/数论/index.html","4e0d47b5efabe0205605557e46a7025f"],["/tag/文学/index.html","d3e97c086a551c983a148a4251a9dcd8"],["/tag/文学，小说/index.html","91068da3b2303b05cc88aebaeb555947"],["/tag/旅行/index.html","903a03c145848265e2e10de10a838f1f"],["/tag/暴力/index.html","89ffaa8852fc081e701824ee66213c46"],["/tag/最小生成树/index.html","608b5e90384ee284cb45238146298768"],["/tag/最短路/index.html","141199e37884afc8666910258c818bb2"],["/tag/最长路/index.html","e167c063a893bc5121400aeed10794b9"],["/tag/本·伯南克/index.html","21d223195f377e7f620f1880ba1f954c"],["/tag/杂文集/index.html","8cac42087200ceb468dc2c7698bdd3c9"],["/tag/李昌镐/index.html","bdab2db01c3cb1147971bb55893b9224"],["/tag/村上春树/index.html","da8b0505c4580b829c73fbc1b2ce279a"],["/tag/枪炮、病菌与钢铁/index.html","9dc1ccd37eb1f3762b07a688ba8a657e"],["/tag/概率/index.html","f0b199b837d70a9f4e3df494ec69f40e"],["/tag/正则匹配/index.html","098e0745d3426cf55f3e2005e5659233"],["/tag/水题/index.html","645f1d26046e80298c44a30ef37ab9c6"],["/tag/游记，武汉/index.html","de7f990b1b6c3cbeb5f56a736bf2d1dc"],["/tag/演讲/index.html","c8411a2ae3391582ac21bf0c21ae304e"],["/tag/矩阵快速幂/index.html","3fcbf405dfb3dc925bbf342ec39fb4ae"],["/tag/石黑一雄/index.html","4f76996a09aa6ac877b83b90e05266a8"],["/tag/社科/index.html","d7787fc3e850fae7655c270b9bb09a9b"],["/tag/笨方法学Python3/index.html","a01a025592ba378d3258de0c31c5bba9"],["/tag/算法/index.html","622604e6b318133b3456bab29d37b50b"],["/tag/算法/page/10/index.html","25f870af17abe4552359951d8955cc76"],["/tag/算法/page/11/index.html","df6d4d7c28f01c7cbc067a69f62f93ac"],["/tag/算法/page/12/index.html","5bdfed24be4014fbf6504a1f8b59d3df"],["/tag/算法/page/13/index.html","2a149c372e96357c21b4f43d7e4acdcc"],["/tag/算法/page/14/index.html","04fdf7d1acbd60459b3b0be7fde1aa35"],["/tag/算法/page/2/index.html","97ed826a6ebe9a50c2dc29db68034bf3"],["/tag/算法/page/3/index.html","0bd386f022ff5322c172c7f80474edb0"],["/tag/算法/page/4/index.html","1ce46bf4824b79a58768aac36eca0b2c"],["/tag/算法/page/5/index.html","2f375ed8dabfd3af11193f1069226455"],["/tag/算法/page/6/index.html","0d5eface0c298e8dd50d1ab6eedc43b3"],["/tag/算法/page/7/index.html","77ac35fb9536fcb910cbb20d29e3a102"],["/tag/算法/page/8/index.html","afada88aa73daf92085a7a49be7c255e"],["/tag/算法/page/9/index.html","0d8363ddf4b5716d14c3c390c0ac35f2"],["/tag/素数筛/index.html","a22137fdd88458cd5c319352f9c965b8"],["/tag/线段树/index.html","8b77c5ebeeb40d052f01966736a4c6a9"],["/tag/线索二叉树/index.html","582a5de0432313c955ed07d59bbdd037"],["/tag/结城浩/index.html","230da5a055a368be515960ca121c179b"],["/tag/自传/index.html","c17c112731677546e636ddd2ea26fbdb"],["/tag/艾萨克·阿西莫夫/index.html","c889cbb1175607cce4ae822cade7ed7f"],["/tag/补图/index.html","ce67b628ed271aabff9418491311dc9e"],["/tag/规律/index.html","12112bc73c71c25edc960a92acc0ad82"],["/tag/解忧杂货店/index.html","473c675d995d4cfb2f3d5f3de2a19ed7"],["/tag/计算几何/index.html","5c9193b89dc42a12496e6c1f43165d01"],["/tag/讲座笔记/index.html","deee53850b45b9b86d7f3ca8116dbf7e"],["/tag/读后感/index.html","a5d86260bb715cc153e0ae10af73d0c9"],["/tag/课堂笔记/index.html","3caf6a38396ca1b0e3a0eb9d6b82644b"],["/tag/课堂笔记/page/2/index.html","262a64c168d53f24b7760dbdc050d7ff"],["/tag/课程学习/index.html","a67de8a875e35e8adfb26d910e6b76eb"],["/tag/豆豆/index.html","bfe23d64826fce32dc98c1111d5aa723"],["/tag/贾雷德·戴蒙德/index.html","487a5072c6b44a43899c2935778e66bc"],["/tag/辅修/index.html","a8a8d4ce8c4b1581b5b74cb0b4c1a134"],["/tag/辅修/page/2/index.html","4c867bf51f69859ef737006e0f49fd3a"],["/tag/递推/index.html","857b20c8b02eba454bd563c16b31b495"],["/tag/野火集/index.html","aa17084bb467682ad945fba5e1de76eb"],["/tag/金融学/index.html","e2251b7c86ec55ef16ca11285c5a9640"],["/tag/金融的本质/index.html","d92c83f853fdc69bd652293d77e5916a"],["/tag/银河帝国/index.html","2c7e6fd95f71849c7a19a39290f61d86"],["/tag/阅读/index.html","7daad11d417441434e187806bf837f19"],["/tag/阅读/page/2/index.html","2a3cf625b00788293fdc692df11ee641"],["/tag/随笔/index.html","be73724adac407c184ef3bb8e45a719d"],["/tag/韩寒/index.html","d164515a24011aecdfba77425672c694"],["/tag/龙应台/index.html","96e708bedc53c4cb2b3a026fb4fd8224"],["/tags/index.html","3a9cdfd87124e5539ca7164024b96654"]];
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
