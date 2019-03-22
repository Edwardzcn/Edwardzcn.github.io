/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c13824305fc2bcfc7dfc0cbda4ce2991"],["/archives/2018/01/index.html","00bd43d15ce54ecb20919b19a20007f8"],["/archives/2018/01/page/2/index.html","efc405012cba547eca3d07bb03e7ba0f"],["/archives/2018/02/index.html","9f8cfabc099adffdf8907d0ad7a2e021"],["/archives/2018/03/index.html","0e6fc26cbbffeba2dbd6f40614c4bd07"],["/archives/2018/04/index.html","3d74877b96365c19d6a06a106fdae4ad"],["/archives/2018/05/index.html","bcef863157a9c9c9f5e2c171729bf027"],["/archives/2018/06/index.html","6a74c42b78faf67ef0024778ecc93140"],["/archives/2018/07/index.html","e518f34b7eb81cd51f5b1845a2f9e722"],["/archives/2018/07/page/2/index.html","82dad219d207ac7efd48acb26bb2245d"],["/archives/2018/07/page/3/index.html","1849da2061972954abbe89107aa86a5f"],["/archives/2018/08/index.html","a0a52395c00f332004b0f9b2ff882c2b"],["/archives/2018/08/page/2/index.html","25935101a607243be543729b83d9cc97"],["/archives/2018/08/page/3/index.html","e5ce161f3fcb52872f129272a7da59ae"],["/archives/2018/08/page/4/index.html","61e27307234f03ee0cfb47bb889120c7"],["/archives/2018/08/page/5/index.html","504d6366e467a9b432b24d518cb626e5"],["/archives/2018/08/page/6/index.html","9f632d6034c06a45d6d9fd22f4dfcbee"],["/archives/2018/09/index.html","e6d4451eaa7ca4fc6e47428dc1285916"],["/archives/2018/10/index.html","5db9f994d63e177dc5b386ab37b0c8ed"],["/archives/2018/10/page/2/index.html","fb631f0ccdb7b581412aa0f6fa98e1ec"],["/archives/2018/11/index.html","edc0f6c8c22375453a523a9e3c402866"],["/archives/2018/11/page/2/index.html","3c679a8777515850a594a035529134f5"],["/archives/2018/12/index.html","e94b5f985b83a363d05d9cd4177f24f3"],["/archives/2018/index.html","7b2bb4e345718879b04d8bd934a8f393"],["/archives/2018/page/10/index.html","1c268f3c2faa36be83fb4d4060e5ae88"],["/archives/2018/page/11/index.html","ac00158d76a37cc3cb3bbe5e0bb372aa"],["/archives/2018/page/12/index.html","c99a78394ffccd8864307506e8e0fb1e"],["/archives/2018/page/13/index.html","e35166eac633a3d1ad7f17442470f511"],["/archives/2018/page/14/index.html","d24f2741e55e5cdfd06c68d0b7132c23"],["/archives/2018/page/15/index.html","d3b43c2256ff4e61065a670bacf72e78"],["/archives/2018/page/16/index.html","f3993d49743a5b1d21d02fc0645cedef"],["/archives/2018/page/17/index.html","0bd2c71ad77376bb88d176b56d5e1945"],["/archives/2018/page/18/index.html","01787c0cb33f9a1c0bbee33cf87a1d10"],["/archives/2018/page/2/index.html","c7adc8243aa6d733a5eb5893b5e7fc52"],["/archives/2018/page/3/index.html","99a9165107ff598eb151c876ac814bb0"],["/archives/2018/page/4/index.html","1f3645e9474b5524ea69f193940f4562"],["/archives/2018/page/5/index.html","1bbf74aeb855bbdf0daefb4ff4ed7249"],["/archives/2018/page/6/index.html","b20811872bcff70b8684d89be9bb8a81"],["/archives/2018/page/7/index.html","a4b10f70c8c67be2464af14f171c1ed2"],["/archives/2018/page/8/index.html","26129bd7df05ec44015db88dd56edb76"],["/archives/2018/page/9/index.html","e9508f412329a2c0bd91d056509434ff"],["/archives/2019/01/index.html","b3964c2238b45b8a63be5cb0b181ccfe"],["/archives/2019/02/index.html","34f17919ddce0a0eac5ce1627d9b4c39"],["/archives/2019/03/index.html","3856966aab86fb0a00c407a62acd9c1c"],["/archives/2019/index.html","c6278e8ff5de5a5f43a362f752c6a25f"],["/archives/2019/page/2/index.html","3aa4389896bfa8e747d4075ce764f7dd"],["/archives/index.html","a0c30cc8acf8744fba23b5ad805fbd22"],["/archives/page/10/index.html","9e7108022bdb28de3932b04094d66a4e"],["/archives/page/11/index.html","b1c484977fe8f6a81e4182f69207ce39"],["/archives/page/12/index.html","486639d459dc6ab5aed3b8d1d5e8fb52"],["/archives/page/13/index.html","9349e681864aea22a58dd3e5d6ced4d4"],["/archives/page/14/index.html","291c29c753b61a7afe414eaffeff415c"],["/archives/page/15/index.html","bab101f52c657dd50c302f84fdfca5d7"],["/archives/page/16/index.html","23ac3ff2a70e257e5c8fd3a1e669f6a9"],["/archives/page/17/index.html","605d9268e876073d24ae9527d35888ca"],["/archives/page/18/index.html","1a2ee48a59d1b00c21341faf2da7e6e3"],["/archives/page/19/index.html","9298595d271d7b9a3bc335deb0f71f6b"],["/archives/page/2/index.html","80c2848d5a035a6ec7dfaed23cde2534"],["/archives/page/20/index.html","513dc9f835a774d425a6294fd222cd51"],["/archives/page/3/index.html","e38699dd1b8e9ec454608d5131bab325"],["/archives/page/4/index.html","c7ddc23ffd3c96bb57cc5f515a9bffa8"],["/archives/page/5/index.html","89e33f01d868584cef6a882e835e49d5"],["/archives/page/6/index.html","15ecd975889ff4b78e1982038adc32f9"],["/archives/page/7/index.html","a65906fec242e0ae6bddfa4cc468f3d6"],["/archives/page/8/index.html","0a1b58ce6f2bde845342f147ea726379"],["/archives/page/9/index.html","c66ac809b64a3dc938d97457d7ab0fc4"],["/assets/algolia/algoliasearch.js","da1a6689d74e88ba36c9264e355b06f4"],["/assets/algolia/algoliasearch.min.js","c9b994135c1c31ec2597021e2322a2f3"],["/assets/algolia/algoliasearchLite.js","40592770b073b373af5866518ef5b098"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","5755c202018254c20280c91fe5fec92c"],["/baidu_verify_ZzhwBFUe1V.html","50711c56fa8abd1710da9b91c21962fc"],["/baidu_verify_dw73Nh8OEw.html","f907b4f10132cd3fc23aa974f606027a"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","09e26c65d2b23cc6a0861ada74f22e8b"],["/categories/操作系统-集群/index.html","1bc7c3e687bfb812cf9ae616d073d904"],["/categories/数学建模/index.html","061c873434bb130de20997416294f3e6"],["/categories/旅行/index.html","91572a8d69bd958fdfbfc73e9477f384"],["/categories/编程-PHP/index.html","05a5cd2019caabcd455b653283e8942f"],["/categories/编程/ACM/index.html","e7606aea0da029817eaa6de090c1bd1e"],["/categories/编程/ACM/page/10/index.html","ebc753e3823720e29f9a07f9a6b31c3b"],["/categories/编程/ACM/page/11/index.html","cf375292788d2367710d952bb1bbc773"],["/categories/编程/ACM/page/12/index.html","02fcf384b0d6a9e5e6fff79a02d4b704"],["/categories/编程/ACM/page/13/index.html","bd1873c35332827f04752768c18fbc55"],["/categories/编程/ACM/page/14/index.html","1715f14e2e9a8ab98e1cc900f2a6ca63"],["/categories/编程/ACM/page/2/index.html","f37f94be15aa054583a799d1948718b1"],["/categories/编程/ACM/page/3/index.html","bb2c7c4f8aa695721766e3e0d3fe24f1"],["/categories/编程/ACM/page/4/index.html","923c85d096523daf7395b972f7d880eb"],["/categories/编程/ACM/page/5/index.html","2fc014934647051823854121434af458"],["/categories/编程/ACM/page/6/index.html","7c152ac85794097c897e3f5b7f2b6a51"],["/categories/编程/ACM/page/7/index.html","54b293f6c269887415826bd3462b2a84"],["/categories/编程/ACM/page/8/index.html","d2efb1c8e88e8e18013a84ef5866faa2"],["/categories/编程/ACM/page/9/index.html","56d9a79b488de641ca21d4a38dbd50a0"],["/categories/编程/C/index.html","76ee8c8a97bd0356c03166d97df6b055"],["/categories/编程/Git/index.html","58b685322b7e65914d9e69e997bc21e9"],["/categories/编程/Python/index.html","bb67ddb2ac3be649c0b100f65838bf99"],["/categories/编程/index.html","5b4c282840ba67fa672c4dbfaa60ce41"],["/categories/编程/page/10/index.html","bebcdcf7057f4549198dcf022451148c"],["/categories/编程/page/11/index.html","ea71ebc4c34d94aaea4054f2f27b0d44"],["/categories/编程/page/12/index.html","101efcadf14539f3bfc4971673741cfd"],["/categories/编程/page/13/index.html","065b771bb68235cad1e9fda9b0a6d399"],["/categories/编程/page/14/index.html","cd98580d304768918b2f9e0e1091013c"],["/categories/编程/page/15/index.html","39f000c01e667af6e52930150b36024f"],["/categories/编程/page/16/index.html","d5a5b5b07d14d6cdc1746cfbf247362c"],["/categories/编程/page/2/index.html","cb24abc75cc33e87eb62bf898d4dee14"],["/categories/编程/page/3/index.html","6fb8d49308a91fa914d473843eaecc47"],["/categories/编程/page/4/index.html","7f919d34ab12cdf153ce71ef0b042c2b"],["/categories/编程/page/5/index.html","c73a9a8c9a64d178346dc9e9d50c25ec"],["/categories/编程/page/6/index.html","da5fe4e32dbe13129fa191d0c34f5ec6"],["/categories/编程/page/7/index.html","d1c15906813b4f0080b6de5034685923"],["/categories/编程/page/8/index.html","b6798bbeb6745c7639fe1fb3f48d8462"],["/categories/编程/page/9/index.html","596b416825fbcfaf8badd11eada067f5"],["/categories/编程/密码技术/index.html","ee415ba828ca824e09a395f6dc8d8bfa"],["/categories/编程/数据结构与算法/index.html","8703d5ca487ec713bee09f54db2ad56c"],["/categories/编程/生产力工具/index.html","5a23e23993e33084833bf970cfbd3e09"],["/categories/编程/编译原理/index.html","b2f2e20b149f454bdefe590fcafd9107"],["/categories/讲座/index.html","3ff106bcb63b4c2dfd4b234eade1dfb0"],["/categories/金融/index.html","b7cd3bae2861788becc8e719ae1cf472"],["/categories/金融/page/2/index.html","4553c9b2f63685ca687dd6403c2b80d4"],["/categories/金融/微观经济学/index.html","4a80a2341d6ddf673855668b584efe9c"],["/categories/金融/金融学/index.html","a056594fe2bc9d0a65d02037c70a000f"],["/categories/阅读/index.html","b5198bbf59850f60052f729d60492995"],["/categories/阅读/page/2/index.html","56d6ca7313aa33636197216ba6453d93"],["/categories/随笔/index.html","817967ba04879458b73978fa7a8b32f3"],["/css/main.css","23197c4eccdbf93464946be8daea6cb9"],["/friendlink/index.html","31d22739052b970338f5be34b3484661"],["/googlea873f713657fb5dc.html","bdee15ad765a62f08ad988b23b2bab57"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","eec9c61befe11be123ebc36ba7367985"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","64f7b5bd3b8d97f1d632b52fd03b9ea0"],["/page/11/index.html","a456c374aea94021d08e82bfe1e57094"],["/page/12/index.html","453fde0e070c2e105f24d904653d7d87"],["/page/13/index.html","ffce303f9cd2699671f335cbbfa86a8b"],["/page/14/index.html","8584e550b1ac7cb8dee3317ee4929af4"],["/page/15/index.html","fe76cdec235058bdef9f9f6b9c22e6f5"],["/page/16/index.html","221f6c313bc2c04b191ce56c13e8c2cc"],["/page/17/index.html","26f83a594d78d6cd45b68a4ceb6f00b1"],["/page/18/index.html","4a532b2a4250a211f199dbbd44931335"],["/page/19/index.html","720ec36356d131ce821386c693600830"],["/page/2/index.html","ccb67ba179807466f8a3647103383317"],["/page/20/index.html","99c691037fd834cfb0748db5c5b76364"],["/page/21/index.html","501b261af36260a4ec94569069c6acee"],["/page/22/index.html","190528f1c5caa7e922070d2ce2fc80b6"],["/page/23/index.html","4496b3fbbd362d2c41aa5d03192de51f"],["/page/24/index.html","a50d983913f700566f55bbba2ee5425b"],["/page/25/index.html","d7fc9f5c4e2cfba1cf4488a4b117da2b"],["/page/26/index.html","aaacbc64401f2d159cb6d7e2b5b44b83"],["/page/27/index.html","0ae3ce02971f20b1b0c18c5c4b046983"],["/page/28/index.html","e3de8247a5374cea5ded413b6ba41f0a"],["/page/29/index.html","f7e60b6deb99793901b0f353585fb11b"],["/page/3/index.html","0e04d7411b421ed14cf277561e9a6d64"],["/page/30/index.html","d3191f60240ef82ec88792633b72f7cc"],["/page/31/index.html","857ae0f9b0b7436fab85e1792f7ab024"],["/page/32/index.html","313a782d8fa2c182aee02265350e61c7"],["/page/33/index.html","533dc02877d95ee08d290ce8f91a6834"],["/page/34/index.html","6883d002c3bd8894d1a2ddb9d10afb0a"],["/page/35/index.html","de59ce2406b51aa1055e260fd060be86"],["/page/36/index.html","1c35d7bf9baf34a4452e19c305983091"],["/page/37/index.html","e50e88e1fc8a8558cb68683da58f8ef8"],["/page/38/index.html","d39efcaa1aeeab4b6510f042bcbb7a4f"],["/page/39/index.html","53afda8410bfeb584f6c7d5e28f5ad93"],["/page/4/index.html","547b72e866cbeedc82d6a4ae72caece9"],["/page/40/index.html","a34abcaa731410c15d1cf5d31fe9eb78"],["/page/5/index.html","f61bf5405c145fcc9cf9681ebc1c9a49"],["/page/6/index.html","342f88bf95113e9474251e76a99431a6"],["/page/7/index.html","af873fee472164d3dfb2b919a8cbf859"],["/page/8/index.html","be2dd4121251322367ee4795276cf6b5"],["/page/9/index.html","e487a74764701a63729299064ac54d5c"],["/post/104a4c5d.html","d8df260c261cda1a16a184db402c6680"],["/post/109aa3c8.html","a92684b6f804d25b3ec12390077b51dc"],["/post/11246bdd.html","617b0e9c2e3d8aa3fcfdeefd0d0c303e"],["/post/1233e925.html","7bb6b66d30c9eca5d03c0fba22f0e1a9"],["/post/1448d9c8.html","d8815001f5598d5ccd4a8504747b27e5"],["/post/15db1cd9.html","a778d9ce20ab286f2d0ffad3e744473f"],["/post/16b5efde.html","26bfdbd9180bd0d0629c0abdeaedd24c"],["/post/16fa37a4.html","f05703bcd8889382462b92a596868a5b"],["/post/184fc5c7.html","3ef35951a36106a485dd083c7426426d"],["/post/19e79191.html","c840a1d189bdb147393649fac12b66fc"],["/post/1b7db6f0.html","e2fb143111ef67f96ac9a96e61ea525d"],["/post/1c52564f.html","6181ab5764104eb58b9b6ae7b5a38fb0"],["/post/1dc46f40.html","47402e7cd64211353baae40793bf11ad"],["/post/1eeab2ee.html","e539f6ff2b4d0d4fb033660be06c8153"],["/post/2024a703.html","576a53eb39a4b97a61fe83bff199d80c"],["/post/222505fd.html","c8c2c657367d2bc3cbf51e581e546f70"],["/post/22b5b237.html","e11858eead99168bdc56b4bff65e8b42"],["/post/23f72a93.html","935b46b1e4e53eb74c0bea90dfadaba2"],["/post/264a9c89.html","8a4bbdffcac6f7ac39da749994484757"],["/post/265c0f5.html","9887158bce00d1ba377090dc78c397cb"],["/post/26fa4dfc.html","ff21464a9f130257e858980fea23fd56"],["/post/273ced06.html","c10c65366a1052283762f4663f698118"],["/post/280fbdcb.html","5d5927fded7e9d77edfe25e12ed8d78f"],["/post/2ee4d523.html","00d14b9a0683e1808855e35a7154f71b"],["/post/3090aa13.html","fcb2d694962f0fc8122055262b38cdfe"],["/post/31a770a5.html","8ffff05d5951d2171ab8b519f95cb4ef"],["/post/31f89579.html","30c14de88aec9e59dae482c50edb3828"],["/post/32dc51f4.html","ed8be03667b48121d95be90f7ff5ac40"],["/post/34a049ac.html","e5c546e2081ac8d026c744e9a54e90c7"],["/post/34f53a10.html","3b2d74f2c83be3ef93ea4aae0b3a0d42"],["/post/36bef409.html","341724675dbfd9027d565e51c8cb8192"],["/post/36e5881d.html","fd071285aebdd18fba96e480d3905d49"],["/post/380486cb.html","49aa4538f9245e2ecd781038cd2bb7da"],["/post/38f8b110.html","690e4700f99241b9249c664f73659242"],["/post/3a3eaae1.html","2101fb133226cd73fd447f4c8e0b8442"],["/post/3a72081e.html","3f16cc218a80733e81405b719f87efd1"],["/post/3bc7f503.html","6f5649bcaa8dab5fd7c6d86f4a13a4d1"],["/post/3c57c5dc.html","03929d1c0010ec3ca5f610400fdfdbec"],["/post/3d71c64b.html","5ff07829563791b7d5112d69f7f45338"],["/post/3d8072b.html","db6b2f99312aeed2c37ee89364bef772"],["/post/3e6878ac.html","ca0277ce024ab7e1a3d09017d1e04b49"],["/post/3fce0650.html","3c9d6973f436c7dbf5d50a27ea8b2ab0"],["/post/409dbc1a.html","84f64ed527fc65038df0262498299df4"],["/post/40dfaace.html","dc3b2320c8b2847725b523c9737d4b3c"],["/post/4255f31a.html","311ea8527cbfe04c68dba5059f3bff70"],["/post/42a619f7.html","aef194fdd8ac241b42855dd4bf8bd30a"],["/post/44505a5b.html","d1753218e0fcbcaf0aaeed73c32a0734"],["/post/448da703.html","4d3a81dd461e3828cc2bd03ea7040728"],["/post/454c2118.html","2a6f8636ee0484094f8abd396a8be9bf"],["/post/454c2358.html","1723570f61fc8b8122154f5702e2a949"],["/post/4773b69c.html","badf9422e8b9b88ae68e4a8f25659f43"],["/post/47b391f2.html","d4f0588c23f8c84e3694f484164d1af6"],["/post/481e8abf.html","6e5e1710440765d28a83218c6a767674"],["/post/4ab96b49.html","0f89d3c0fc3638cf0cf477d5f7bf831a"],["/post/4b15f9e3.html","f2b08cad7ce17cd4fd44a4ee2efdb8f4"],["/post/4c60a529.html","b8f008d43cfde2471124efd663030a8b"],["/post/4d6a6b27.html","db9d14f09b19c3bc5986a63a82e5d920"],["/post/4db7e28a.html","eabd78fa5e66301b7f8c075a2132dbe7"],["/post/4dc7502.html","b303dc02f284326b4a9201f93246e33b"],["/post/4e876bc2.html","1bdcad8e7de3b1aa8ac0a5beeee1fbc4"],["/post/4f352d.html","e20a8c621e63b26d727bb618fb48552a"],["/post/4f8fe65a.html","406b04661fab8aab58044a6b2c2b6e58"],["/post/4fa396eb.html","0ce8fbc899c07405f702f42fe8b1c709"],["/post/52730f61.html","ecd1e5d98f6519728275b0d521cd353a"],["/post/531de0f8.html","d79c99238470b48174cac5070f046e8a"],["/post/53729461.html","710d369670018108cd126d806b11ee5e"],["/post/5555df5.html","e6b7f967d97a693aefa78c2711cbec22"],["/post/57bfde8d.html","e12c49d6c6b040d6d7dcbe4d5b723fe4"],["/post/585293b8.html","fbe7d39f7bc43153b6d68159a191995f"],["/post/5aa5290d.html","729d9334307d771df0cfb19dfeb787f7"],["/post/5abc6d45.html","e20ed7d57cceed00ff020b05e05581c5"],["/post/5c86d06a.html","bc891b12889d17ff0f355975e9050d1b"],["/post/5e189593.html","8960e511c76e5ee8d34ac416cd24833a"],["/post/5f2d4a77.html","94512118703e0f1141613f876a00b76e"],["/post/5f341cbe.html","7b24054ac0c834e570af5e956225b131"],["/post/60850415.html","3f8b77d87af11138d2b109a939c93f0a"],["/post/62cb42be.html","f3fc3dda9243d790dd6b22595d56dfba"],["/post/6501181e.html","2be7773cc2115127a90ff762ca4ca1f0"],["/post/66258384.html","3406841a3fad8eaf15636930950045d9"],["/post/662b8b80.html","38c67e7c7893ec5063a20e926ddddcdf"],["/post/677d0fef.html","20ece16e303b30c25c82ac0ec88290d0"],["/post/685bcc20.html","ae45010e487f1b2f84d5f0a855291d23"],["/post/686dc27c.html","a773b351ac998ee8f7a4a6da6393b53a"],["/post/6c71e418.html","ff080459602ba907a5544f8996462c59"],["/post/6ca1eed5.html","caf2c4204ada56364507533d0bf97080"],["/post/6cb7680e.html","ae9a4d5eabae70411ea4af414eb9307e"],["/post/6d52b9f2.html","10e9a587644f81bafb35d0db4dc5a33b"],["/post/6db0d89d.html","0e2c6a254ec16cb7f11814f8bdd6dad0"],["/post/6e80eb1e.html","29143970632e6e3ce9c24ec07e70d221"],["/post/6f3b3edd.html","2cb314027be876160334f602e10c89c4"],["/post/6fc3409b.html","2ae3bbbd3f1d759ab7a629a5094c7172"],["/post/703409c5.html","be0904ef07e1dddee9e6e392ba5c402b"],["/post/7169c4ed.html","318332a9a8fcbf57e558a2a95ddc084a"],["/post/73136b.html","dde89ac68dccca7b899cbedc6c860c4d"],["/post/7410a832.html","ac66ba62772095bf3162b29e54a8ae18"],["/post/742966af.html","babf05f18ea95a9b7211387a7c81952b"],["/post/74479d01.html","49d16010743bbb0ab145d596f600b34d"],["/post/74a4286c.html","0ecf150334c80c320c79569d4e3f01a0"],["/post/75794199.html","e2b94a3795d135b277286d6cdb9512da"],["/post/75f986a1.html","db17b7bc2d333a877696296ebf5f6af2"],["/post/76485a7.html","3a8b7d1ccb7d2bef96cd9b394f6c9941"],["/post/772fc02c.html","55c98392d52262b8a4c020004af8d9c1"],["/post/792e36ed.html","2adda9d6294adda95c3efc0f804d2370"],["/post/7c50967.html","a656f757fed59c298341fded72d37783"],["/post/7d8e4f2a.html","5f5d1cac7685805c2aaa32401fb8fbe8"],["/post/7ef8a98f.html","fc469442606d24e5ea1406c1b08e74dd"],["/post/7fe193be.html","56328d8528fdb1ec2662b1e5c029f690"],["/post/879e9655.html","3cadda6998692630aba6501b70b4a16d"],["/post/88e8ae98.html","81131b72a501d9a203c95dec85178c09"],["/post/89873dd3.html","2d580277546908b2984db7ffb8f45b8c"],["/post/8ddc8a30.html","4dfc05a29d2eb7a6dc6eeea4a759ab94"],["/post/8f9cfad3.html","b664afc82c24e8e7b4db39eece29ada4"],["/post/918fcaa1.html","06b74c1368c41cf5522eab6e5e8fff7b"],["/post/92687617.html","32c752640f51725b6018c4a45440f6e2"],["/post/9282aeca.html","ccbd4532899e49725f5b70ff7a6134c9"],["/post/9305c5f5.html","71e602c41266a3aefdf43a62d40b20e5"],["/post/94c9baee.html","be9a10efe001fa8ca39cd98c5d812ce8"],["/post/98804e11.html","3a71dfff71de638d3d804db6af4242eb"],["/post/9a9a4797.html","19c32372965288cdb0513c49e8c7bf2b"],["/post/9c28a880.html","b3ec74f3e150856cefcdd07e833c8ea2"],["/post/9c649212.html","a9b524abf9d56e375321145e664bbc30"],["/post/9d402b32.html","9934a33b8a056b82d2cc41627be510b7"],["/post/9eb065c8.html","b4eefc145346ab2235ea8f367bd2399d"],["/post/9f8e212d.html","9a7ee7b97e94b8df40d8b43b3be1f41f"],["/post/a1751c09.html","2af540909c31a61bd31ec85ed40c3b3a"],["/post/a1cef007.html","f0f21760069824e39ac384e09aa7fd6b"],["/post/a1fc03d8.html","e336e04ab48663c6965531004d75243e"],["/post/a27e9acf.html","a75aea1fd6574638204aae3c26f3644a"],["/post/a4c66bf4.html","40e6b29056dab156d18c2d0028b2bfba"],["/post/a4efe87.html","3a3f866341ace48947e76945f954daab"],["/post/a7528411.html","6505802903632902ad7d13d19a76b5c5"],["/post/a8759852.html","3c40fd5d10638221627f595fda930408"],["/post/aa0a97c8.html","e3f217aab6858fe3263677582a269311"],["/post/ab4ed95b.html","c55ecd7123674825b9376457ef0771b0"],["/post/ab720150.html","a3099594ba177f2c63b846c5f8df4869"],["/post/ac92be99.html","6007fbc4034232a1b83e8f05bcb9e3ee"],["/post/acf6b02e.html","762821f5da1fbabf64d9ebdb0c1cd85e"],["/post/b0d6c7.html","72f3c7ed2a5625725b7bec06203e5b92"],["/post/b3ee770c.html","e077717d83629dac7613c3d7e51329d7"],["/post/b8ca3dfa.html","2b9a0c43e1fa5c9f0cec1b9bfb027078"],["/post/bb7f8e97.html","c9a359ddf3317f1620ca7c5d407bc94e"],["/post/bba462fb.html","beaa44d92c3445bb3da3eea5799cb6e3"],["/post/bc8586da.html","bc53fbcebbd722dee9350e1edbde496e"],["/post/bcb02c2b.html","960314de827ec00917403b91121e856c"],["/post/bd36a30f.html","b8ff4a5ed9164d86199da1497dd01316"],["/post/bde4b1f8.html","ca011d0ebc2a5ea18a41264e7d4a1319"],["/post/bea42f1e.html","5ff6bae6caf40465dd1a428fd3b8004b"],["/post/c1864474.html","5ff87b6c2fc42d01b706091ec982ced0"],["/post/c293d2b3.html","8299c336e8a70d645e72d27658ee2f9c"],["/post/c37095b9.html","83c1a68fe491aa5a2d6ddce241cf8ebd"],["/post/c5672df5.html","b370853afb8c905671d519f8f52d5fe3"],["/post/c6d76e9a.html","96a9639af4b56513f7ee1192597ed097"],["/post/c7fb8250.html","53c937609ffd219e96a495209badd2b7"],["/post/c938bbd1.html","424f3a7c5c34ec0a974fe0efce80fb3f"],["/post/ca14c5df.html","401fddea9b7ce2fea19edf445a9b06b2"],["/post/cd18de84.html","307c59681d76fe5a61434b927d69a65b"],["/post/cd41dfb7.html","cc41fd6c2436f06c04cc9fab5fc764bc"],["/post/cea184b4.html","238a8144bed277eefce24800486d1af3"],["/post/d120bd8e.html","ac5d5a2bace0c516a9af604b96b8e5ae"],["/post/d50b784.html","c93672a5f91af9671995f6b9db3e1a5f"],["/post/d6a5bd15.html","8fcf17bdd818163abf1c1a95ef878459"],["/post/d73de254.html","fec8ca09955926db19e1509c42e8e20f"],["/post/d7435d20.html","406c91675318932b9ba33a903884a473"],["/post/d81c5363.html","a3df3cc98da63b307ccf4584f5345391"],["/post/d899bd9.html","4268baa7ff00d78cb28d01c0a0a3e6a7"],["/post/d9083bc4.html","357b5338c5c375c58563833b9871556a"],["/post/dc981233.html","1119ce66463954a388da24179bbb7a03"],["/post/dea65d58.html","6818cc2823b126ecc13db21468b14271"],["/post/df76d545.html","8da4efa66c12762d7bda76f8c8b8ac8e"],["/post/e256d99f.html","b8fa389693f1f40b45b01c18a5fd7013"],["/post/e290dd8c.html","a3c8a2b798e0963ab714cf781685e7d4"],["/post/e3e37943.html","34d2181f7080beefb0b8de296d77d5af"],["/post/e583ed8d.html","4410a11b4b3f40254b592432b94f36d7"],["/post/e5d75450.html","f4c00619102296945fb2c9df7d73a203"],["/post/e6364ca4.html","fce9e7a45c04695961dee7187911b429"],["/post/e7058b47.html","2c2f8253e0b4b6df2fa8ff99bb5ed246"],["/post/e769f01f.html","87a103c2256098b638075a29367dcb3f"],["/post/e78ad34c.html","83f95839bc713ab0a55a0dceadb3c34f"],["/post/e8005312.html","a606e97b0fd04a44847261b1e35f5383"],["/post/e8ae7612.html","3b047f24eb35e2d3a69d73b5b7ab8dd9"],["/post/e8bc7157.html","62856e6bd50db4a3d56dd3038273e003"],["/post/eae0b80e.html","d36b55191e174b3988ad7a646b672421"],["/post/eb9ab36.html","86d9dc39e3bf242b219078bfe819cde9"],["/post/f0b23c5b.html","525a5c585729d6798b3f7aead2b06b26"],["/post/f279299a.html","77ec33a4bac093799a440ab26593c151"],["/post/f3d9c661.html","205b1d560a5f05b68b29cc73109d726c"],["/post/f4bfd16b.html","3cef3591844592453609fcb0be2501e9"],["/post/f7b33ddd.html","33cc7c5e0fff881f4542fc2d094bd55d"],["/post/f8e4bc7f.html","f153fce57fb9e8dc93f9bb59cd8f93e1"],["/post/fa83cee.html","5f81a2f906d5dd9a05af81f318c379d7"],["/post/fb2f630e.html","5c5dcc565e8e9c35bb8632d3af84b4ae"],["/post/fb5efb9c.html","8e5e970b7a706080278f8e17c56026d7"],["/post/fbf7f335.html","0c8107e000862709a7518239f4354f93"],["/post/fcb9464d.html","ceed6abd68de285391011c792729ec38"],["/post/fd581850.html","da6b671a8d92a3b387dfd1cbf4d207e7"],["/post/fdc06f3f.html","63e70507c191c7106d947e559dbc0381"],["/post/feaebfb5.html","3dc6827df31b709aeed979643e429f95"],["/sw-register.js","8808325217e62347bfee2ddc95d00acc"],["/tag/1988：我想和这个世界谈谈/index.html","f13b2c26adc8f51d6dd4b6e4846848e5"],["/tag/1Q84/index.html","4c5e28a36b48a0853b99f78b3eeedb3f"],["/tag/2017HDU多校/index.html","41490ed78e5119831f0e1cf2cff358e2"],["/tag/2018HDU多校/index.html","5d0204855556f81632203aa6ca8bd25e"],["/tag/2018寒假集训/index.html","4f1b6f95ca8aec9e7c88af3c5dadac4e"],["/tag/2018寒假集训/page/2/index.html","34a0c677cc9bfa8e33c893e9a320da48"],["/tag/2018春季训练/index.html","4877f18026332c730698c72633a68ef5"],["/tag/2018春季训练/page/2/index.html","bb3a3bc1ffb043dc07ca7589ed1ffe79"],["/tag/2018暑假集训/index.html","63f51f1d4d61b2c4609aa53296c8880a"],["/tag/2018暑假集训/page/2/index.html","4f28b8fa17090eae62b007fa5b12e6d8"],["/tag/2018暑假集训/page/3/index.html","7282f95884cfbdbad17bb9db142dfcd7"],["/tag/2018暑假集训/page/4/index.html","87d1df8c25050e4ba5f30ea87feccf6b"],["/tag/2018暑假集训/page/5/index.html","64b823f06cccf0ccb835d94d121fee1b"],["/tag/2018暑假集训/page/6/index.html","a53b387cdb801ebb0b15a4f3b83fe42b"],["/tag/2018暑假集训/page/7/index.html","5fadd489c7d7094880f9289640cf48cf"],["/tag/2018暑假集训/page/8/index.html","d7298b9c6542efbdf2a4e8ea61aa93c5"],["/tag/2018暑期选拔/index.html","40c8fbccc08ee8ce40906387769478b3"],["/tag/2018杭电多校/index.html","60bbf031eab57f073d66438500f76242"],["/tag/2018球季训练/index.html","c96e880f1dfb6a268b77694344520499"],["/tag/2018秋季培训/index.html","fd7d0e164994c70fea9d3e49caf52a17"],["/tag/2018秋季训练/index.html","d8ad13455dbc7c115b2b31d1c376cada"],["/tag/2018秋季训练/page/2/index.html","c140c46ab9c1865798c1a36d5f1ec5b9"],["/tag/ACM/index.html","8f2d3cae9c2496477f88d9794074e2b1"],["/tag/ACM/page/10/index.html","c03504cc40fbfc0bc69000d2c4f1317a"],["/tag/ACM/page/11/index.html","7e3e7e3a54ba073e844e14f9097b8daf"],["/tag/ACM/page/12/index.html","1d3a883b05d62aab6012f447ff2f125f"],["/tag/ACM/page/13/index.html","c82cebbcefd9a83d74d07b8e10d1eba8"],["/tag/ACM/page/14/index.html","18289c7dbb01ecc7823b36c12b5d0d49"],["/tag/ACM/page/2/index.html","19db5a664fd1e02ace64efe02f2e148e"],["/tag/ACM/page/3/index.html","54b0bf6e03c63ed54ed65f51c91fc18b"],["/tag/ACM/page/4/index.html","b663c465e9607064dafa7f497e7de5c0"],["/tag/ACM/page/5/index.html","9594a1d84e7beb1decc08b15a1bfe2ad"],["/tag/ACM/page/6/index.html","8d8dd843b0a309684fd40520678c77f7"],["/tag/ACM/page/7/index.html","a9dfd300b4bcc31cc391fcd4bb15b641"],["/tag/ACM/page/8/index.html","926e19c6a3a7b9d6a3ca2ab10d1812f6"],["/tag/ACM/page/9/index.html","df3e906c736cad104e754358b800b629"],["/tag/AWS/index.html","463b732c1b6c0bb8e205ca823b3e10ed"],["/tag/AtCoder/index.html","41059a8550c106d86f664611d4155240"],["/tag/BFS/index.html","422442a1b4f8d3bc53fa17f7892d6537"],["/tag/C/index.html","418e60d45c1bfbf27f6236778e22e8ac"],["/tag/CSU/index.html","d13f7485644566f875ee8a5aad87e6ac"],["/tag/CSU/page/2/index.html","fab3f1dd319bd0bda7a0ce267ad39cf8"],["/tag/CSU/page/3/index.html","eb57e5238cb55bd103a4995459a15a99"],["/tag/CSU/page/4/index.html","72f59b91ad447f7aa2a3d8cf10342f07"],["/tag/CodeForces/index.html","7f2e680d9f1322c4c2178a9011353d27"],["/tag/CodeForces/page/2/index.html","9333cf51b72207da8676eb76b2745ad7"],["/tag/DFS/index.html","c699be705d00a64c2f1a726e9b0a9368"],["/tag/DP/index.html","184d6d23c7f3b5c25cacf83fe7f187a3"],["/tag/Dijkstra/index.html","421fa685b8eb9deb8a0c87308ef160a0"],["/tag/Flask框架/index.html","d94dea44257a7fcecb1b013a803d1a29"],["/tag/Floyd/index.html","a610ca2ea35d7ac6f0e4b9eb0d70059e"],["/tag/Git/index.html","09bd6f919813f40bdd84603dd38504df"],["/tag/Graph/index.html","d406a78ac33e368d6b2ea6e9656b6d64"],["/tag/Greedy/index.html","6380bae6a52ad06e6b59bdb6dba1904f"],["/tag/HDU/index.html","7223eb1a0e8b432921acd7c9ff64aca2"],["/tag/HDU/page/2/index.html","8f60261bef7dbd92792ce58f3ae1b3e8"],["/tag/HDU/page/3/index.html","3e05a8c2dc75841cb4d3c5c190c0c86f"],["/tag/HDU/page/4/index.html","0b71641b180e2030549c0377c66397ab"],["/tag/Imitation/index.html","b7ffe4f8f4e04cd266fb51ca8de63904"],["/tag/KMP/index.html","58c5408d8da3d1aa10f5a67be2dc7d23"],["/tag/POJ/index.html","111892deb0ff28ece8c6f8e585ac8233"],["/tag/POJ/page/2/index.html","2d7f4a6b5e9b256b5ee71e35cfd37434"],["/tag/Python/index.html","0a3c25d8fd771d953d63d9bbdd804df5"],["/tag/SCU/index.html","83d28ba4209e218762b05685c27cc00e"],["/tag/STL/index.html","16fd1c93e3c89dc732424192c24eb166"],["/tag/STL/page/2/index.html","61511e2f457ae14be6b342d326ad3151"],["/tag/URAL/index.html","474c43da2ae7a02fb3a0845e1477cdfc"],["/tag/UVA/index.html","e04a26d29024849c64db628b85c50c6e"],["/tag/UVA/page/2/index.html","155d1ad9cc5b72e832f540c9e47f3622"],["/tag/UVALive/index.html","7aff359edd50631fd6051918ea01ca46"],["/tag/VSCode-Git-生产力工具/index.html","649151e5c46c6580a88e6249de7f6791"],["/tag/VScode/index.html","6022901a43cd17268966c405e81a40e3"],["/tag/ZOJ/index.html","c3074cff7037c19b9a146666dcab0dea"],["/tag/math/index.html","a49c2f303dcb2d6dfee6bb614b512824"],["/tag/test/index.html","cb8a8ab8f3375056134b42c9e2ab0a54"],["/tag/不得贪胜/index.html","e71f84f85b4af66505b77b4fdeee9a54"],["/tag/东野圭吾/index.html","3be7ba0c43ec43ff5d7dd72532a45e81"],["/tag/乌合之众/index.html","c688e63d5fa795b19a082de608be6b14"],["/tag/书信/index.html","e2533c495056df5a3ea3a4cf00781247"],["/tag/二分/index.html","bb56f369efea2114e39ea5c9688d55b5"],["/tag/亚马逊/index.html","2d75a29b75cff88ca9596789a5831292"],["/tag/亲爱的安德烈/index.html","7ec636a93e3e01cdb3d6bc4d7cb05051"],["/tag/位运算/index.html","f27e5027a1ead98efa079bb2fbd803b1"],["/tag/几何/index.html","e47169bb6184cc19693def9aebfa12cb"],["/tag/刺杀骑士团长/index.html","a7cc07ce8ebeb26f8906c2afe2a135d2"],["/tag/前缀和/index.html","604af2f551ed1bc4d45ed2d493a8795c"],["/tag/区间DP/index.html","ab8ab2473b8fbeb92122d32a35d10472"],["/tag/博弈/index.html","5764ef43d25bffb49a34264a1ddb453f"],["/tag/历史/index.html","1ef233da93b47ab8da668e8da458f652"],["/tag/古斯塔夫・勒庞/index.html","622b308ad66c71012180941f0e2c7705"],["/tag/图解密码技术/index.html","dac783ae48bb3536aac3003b9c0dc3da"],["/tag/大数/index.html","0315138d79bd506e45eac7dfee4f2c76"],["/tag/天幕红尘/index.html","a6a3a82bc5bd632bd4d747679efa6ce5"],["/tag/如何阅读一本书/index.html","1de9dd9e13fd9024a549d4371e4e8361"],["/tag/字典树/index.html","3146c4ca63eed670bc065340b397b08d"],["/tag/字符串/index.html","ea74c83a7fca0a8589e362ea242fecc1"],["/tag/字符串hash/index.html","5975e7cd0749f4fc1c32ddb49092828f"],["/tag/安德烈/index.html","fac45c4ea6ed566c39d4c29e85dd1292"],["/tag/密码技术/index.html","5d6710c9733a98b443dceb95ff9937c7"],["/tag/小说/index.html","fd4e22e4892fe52c221aaed59182b6d3"],["/tag/岛上书店/index.html","d13463cba65019959217570c43c3862f"],["/tag/并查集/index.html","86d7ad7001aeb051fe260036fc4adc7a"],["/tag/待补充/index.html","6d575f2bbd63dfa16c1f640a687425a6"],["/tag/微观经济学/index.html","19f373fab69be3fae744ccf820311c97"],["/tag/数学/index.html","bc4b74d453d5947599ebab9263703ed1"],["/tag/数据结构/index.html","58d4d7b594443d430f0219c3b39a6452"],["/tag/数论/index.html","b3bccaf3b2b92605e892a8520bc3c7cf"],["/tag/文学/index.html","0553b6c0d4dd4a3bc684e5b517438270"],["/tag/文学，小说/index.html","34b1aa4c3927cd6a39a38758837c5aac"],["/tag/旅行/index.html","3d30eb10ed34de5786b74d78168051ec"],["/tag/暴力/index.html","34cabe07c952b60a898cacaee95d1d2f"],["/tag/最小生成树/index.html","10587fc8a971dfa563ef51268c9cea7c"],["/tag/最短路/index.html","3c4ab83750235b7ab5c8f5b1093ac009"],["/tag/最长路/index.html","8a821e4597a784acab10df27d6f89689"],["/tag/本·伯南克/index.html","6510afd0e634dcd4bae621aa710b59c6"],["/tag/杂文集/index.html","208e393ab02ec38891aa16dfc3880329"],["/tag/李昌镐/index.html","24899db803a805852f111beb6322639c"],["/tag/村上春树/index.html","3f47ab1edbb2a637283f818042edda80"],["/tag/枪炮、病菌与钢铁/index.html","5c19ed7526f561fe6ff567fd39deff85"],["/tag/概率/index.html","fb97afbb04f05ea3aeb95d114724bba4"],["/tag/正则匹配/index.html","34ce928e0cf1a6ecfccfe9a5c563d67b"],["/tag/水题/index.html","a995d35fa9b7f07a69e75559ebbb208a"],["/tag/游记，武汉/index.html","47a9100a3804adea733d824ddedf91a6"],["/tag/演讲/index.html","7052a65f0ce0a1a8aadfa8595786a9a3"],["/tag/矩阵快速幂/index.html","8c0d353384bf1cfd9d46614947382fc1"],["/tag/石黑一雄/index.html","c3dd7c76b170abd7c2468bd2b5b0845d"],["/tag/社科/index.html","100f5f994af618a0b57252b68fef8615"],["/tag/笨方法学Python3/index.html","1266dd39a40213e29d7ed4e348416914"],["/tag/算法/index.html","a49d2fdfc9a5b86f14cb1c9bd49a73aa"],["/tag/算法/page/10/index.html","0ded69eff665db1d4ba1f4266ddaf9a5"],["/tag/算法/page/11/index.html","4b68525770a6ade67a0c2bf26fb7fbdc"],["/tag/算法/page/12/index.html","8dff0f05a70bd22e3f9be0322dcbf185"],["/tag/算法/page/13/index.html","226aed7bce638406c3c1fc874b36f9bc"],["/tag/算法/page/14/index.html","8f658c064eeed17e0b49c6f36fd8ee7b"],["/tag/算法/page/2/index.html","6fcfc2c8c2707d1aa37e5de0ecfb0b9d"],["/tag/算法/page/3/index.html","45761fcaa74d93655066883cbd91a102"],["/tag/算法/page/4/index.html","ed4f59a3455f9f1acbf37b57a1a8e212"],["/tag/算法/page/5/index.html","ca58dc9698d8b3bd48361f749b1b0ec3"],["/tag/算法/page/6/index.html","b75e866af66a7839adb2351784fa756d"],["/tag/算法/page/7/index.html","9691340f843b3e0855c3a63e4d87cb7f"],["/tag/算法/page/8/index.html","52c82d8aa28604132fcbb8abc52ba6ff"],["/tag/算法/page/9/index.html","a94d7089e941e107472da381ec8ae44c"],["/tag/素数筛/index.html","e3b0e9da2c280fd6402fe0cd772d0aae"],["/tag/线段树/index.html","1c4ad09d0173b24dff3535c47154620a"],["/tag/线索二叉树/index.html","92cd47fec5b037d85b586828c7ac22e0"],["/tag/结城浩/index.html","fad13d3b86ec9afa3d97791e930fd4ac"],["/tag/编程-C-课程设计/index.html","87d21263d2bf6a41209fbccc477292f1"],["/tag/编程-PHP/index.html","6c9a41eea7b48919eb4d642557da62c2"],["/tag/编程-数据挖掘/index.html","e889e121d237b44c4f0aa280462e903c"],["/tag/编程-编译原理/index.html","9a3b1dcc0b5ec43f3ba9fc090b1c3c2a"],["/tag/编程/index.html","c0ade7b14e3b194fe2c48af5e3e7319a"],["/tag/编译原理/index.html","b6cd929fd9066042e877f14d974334cd"],["/tag/自传/index.html","ead98f13181c0c65a0f02eafdcbf9f4d"],["/tag/艾萨克·阿西莫夫/index.html","5dd633f7dbe974d22c2a780a5607a648"],["/tag/补图/index.html","b9261c4b4251ae87dfd6c94e6316d7a8"],["/tag/规律/index.html","6d1356201421849dcd429975c1f62cfa"],["/tag/解忧杂货店/index.html","c1a7dd9a70d1495616ff232533d2fd90"],["/tag/计算几何/index.html","440afbd64c9ffb9bd3d347fd9cd741e2"],["/tag/讲座笔记/index.html","77f6799da0042ea00b84668ff7df1013"],["/tag/读后感/index.html","4bed75c75d41646cea3fc9e1d656885c"],["/tag/课堂笔记/index.html","e41f8b5151e83d34ce759872ef964300"],["/tag/课堂笔记/page/2/index.html","70f0316297f4434b96c8069fa5c6764b"],["/tag/课程学习/index.html","bc972e86cc88b5facb8f7edf0fd89a2a"],["/tag/豆豆/index.html","469c19969641e7c2ad7526edbdca6de4"],["/tag/贾雷德·戴蒙德/index.html","1055b5c6b6d89778c8d85c9d7732e473"],["/tag/辅修/index.html","dbec66bd9c145e55fb45192240d25afd"],["/tag/辅修/page/2/index.html","431f7668b3ca58d9ec3d02374886dfbc"],["/tag/递推/index.html","bc284d696bcbb8d1f7e89cedc8369fbf"],["/tag/野火集/index.html","cf6fba3d43b1ccba26986da0262c9c71"],["/tag/金融学/index.html","42ed137f6d2d2d0050838a9277be13d9"],["/tag/金融的本质/index.html","807044d0d509d944ca0c4a3e4a59e4d3"],["/tag/银河帝国/index.html","899d7b37e1afde56840611b34eb970cd"],["/tag/阅读/index.html","1d917c583de10af314cacc151d5c0925"],["/tag/阅读/page/2/index.html","992888424211b7a73338d598b05c00cc"],["/tag/随笔/index.html","ab3af4050b12581c9357cdc4c79000a2"],["/tag/韩寒/index.html","70844c2398224723608426acd6049387"],["/tag/龙应台/index.html","b04ebc5a1d09cbb0dce40f3ab8289446"],["/tags/index.html","8f3b9cdcd9e605392f2444fc722c9c46"]];
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
