/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1cc2fef37a2b70e828eeec9c52c46e86"],["/archives/2018/01/index.html","ec05c81d82724d6c370f3069406ab718"],["/archives/2018/01/page/2/index.html","6e682d47a4f4ec2f2e948d66f0fedb41"],["/archives/2018/02/index.html","f167255b7e76b855ffb6503fa4038b75"],["/archives/2018/03/index.html","96cf6b58805864d58e3cdadab8f264fa"],["/archives/2018/04/index.html","11f92347d282c298b7308ca830363aa8"],["/archives/2018/05/index.html","5567accbd2b8e9c4fa829e900ba30149"],["/archives/2018/06/index.html","a125a4444730f1c10121b8435b582765"],["/archives/2018/07/index.html","4c344987716090a8bbfdca35e6e35baa"],["/archives/2018/07/page/2/index.html","47cf166cdd57ff7901a9706b2424f76a"],["/archives/2018/07/page/3/index.html","a67525ee3f1fd2ea4f0db8d111ad94f4"],["/archives/2018/08/index.html","2a0d38bc98c86b4f55b50d19b23a07a8"],["/archives/2018/08/page/2/index.html","cfba2df7a0c08c9876766c3c0e9b9e27"],["/archives/2018/08/page/3/index.html","7386227347ed96f7ac954a347d85725b"],["/archives/2018/08/page/4/index.html","f6ba43ab448c424de75d9d67fe4251a9"],["/archives/2018/08/page/5/index.html","ef6a15e4fbd66b758cb36f5b156af492"],["/archives/2018/08/page/6/index.html","c0f6d986448c2e907b642f729a80f93c"],["/archives/2018/09/index.html","14b0ac0308db548ea7a0cbb25fa57e38"],["/archives/2018/10/index.html","e17659c1ab73e471a0a7bd5faf1563fc"],["/archives/2018/10/page/2/index.html","4ea1da497ca34897d22302d22c6eb255"],["/archives/2018/11/index.html","2bfb0ec4f822666304e075e3d32a02e8"],["/archives/2018/11/page/2/index.html","1be9e52256e864987076746905729897"],["/archives/2018/12/index.html","20d637a3d33047fb1b207042c071e3ea"],["/archives/2018/index.html","1df66f0664a694ced31d41cb106d6371"],["/archives/2018/page/10/index.html","f91bd17417049b996afb1cd16eda36c5"],["/archives/2018/page/11/index.html","195a0263b2ad50fc59dda17142fa038a"],["/archives/2018/page/12/index.html","ccfecf27db45a2b2b84f6b12ed8ed861"],["/archives/2018/page/13/index.html","d883c27987fcbe69577a51c4d128a415"],["/archives/2018/page/14/index.html","478eead01c0600ca60e20a0977d878e7"],["/archives/2018/page/15/index.html","c106de79a99ac252f9f75b558b22fef7"],["/archives/2018/page/16/index.html","f2ba16981467cbfe6cec7d54c99d1768"],["/archives/2018/page/17/index.html","46208f3a9ae98d12a45999d1885c5970"],["/archives/2018/page/18/index.html","c4a3238216a33c891fc455d7e4f2001e"],["/archives/2018/page/2/index.html","76520b6cfa0fc1c878a546ea489effbf"],["/archives/2018/page/3/index.html","7c90532d45170198382d2df86bf12227"],["/archives/2018/page/4/index.html","1143962dc8dbadd71b2b26d9fd09b035"],["/archives/2018/page/5/index.html","c502319b2a698d8fd6e022c91ec7e5bb"],["/archives/2018/page/6/index.html","94c4ff8bf7ef890cf9bff48d4a7da6a7"],["/archives/2018/page/7/index.html","2285d0a21f15c922e4783b645d228a08"],["/archives/2018/page/8/index.html","95fe8541821baf1b5c37605282f86135"],["/archives/2018/page/9/index.html","a896329d8df9b6f722ac8fbb8b6e0a75"],["/archives/2019/01/index.html","bbffbb71c40c21ca944ecaba31e9fc05"],["/archives/2019/02/index.html","5c45267d99f7367936f21572374fd958"],["/archives/2019/03/index.html","1f273407cd55d264b978f7bc69c6c114"],["/archives/2019/04/index.html","ae488f531efcefc5da0ae79a7b0e8bf6"],["/archives/2019/04/page/2/index.html","d212e0e7d5e80fe102169b8f4f815371"],["/archives/2019/04/page/3/index.html","1b5bdd2c08a57d0e67f8d836c16d3ef4"],["/archives/2019/04/page/4/index.html","7dcb3da224a67b05e50d6d87bfa34fbd"],["/archives/2019/05/index.html","38ab96b76a489b62660435564ac892e1"],["/archives/2019/index.html","813282b9cb53c6e7162d291a7573c730"],["/archives/2019/page/2/index.html","2187acba3221a522186b1dd0a6070318"],["/archives/2019/page/3/index.html","9292f737d2bcc683b4154a12b985f418"],["/archives/2019/page/4/index.html","27cbd9e5ec3a157a8bbab21a198a1c08"],["/archives/2019/page/5/index.html","02e7a02ada149b84f96c695ec6796ef3"],["/archives/2019/page/6/index.html","5e88eece4c76126dcbb19d4f14ea14fb"],["/archives/index.html","27abc2040ed55f1627723030add47a7a"],["/archives/page/10/index.html","f6ae1da67045f537a6b9aea07306dfe1"],["/archives/page/11/index.html","af72cfd3e51ca07c4025c0ecc188e7ed"],["/archives/page/12/index.html","8948e4b8c20af31c6c01852e5812323a"],["/archives/page/13/index.html","3bd472619cbe46be2245da93103bdeea"],["/archives/page/14/index.html","915699b1686c5f6ed0abd48f98b3a893"],["/archives/page/15/index.html","5060eef31adbe013e6178df90be343b7"],["/archives/page/16/index.html","9dce8201cbdf5cf045a6b7c9915a260b"],["/archives/page/17/index.html","84f0416c76cc9d763fceb589af991942"],["/archives/page/18/index.html","b3c459edcd3898a296606cf8ead79729"],["/archives/page/19/index.html","b2bb55b6d1a2dc1f586849e977b14b96"],["/archives/page/2/index.html","3e2d788bfc7e0bd54a43305b0156795d"],["/archives/page/20/index.html","e0f6a91d96782e44462c7b688cce6a11"],["/archives/page/21/index.html","1b60ace478961f0449cbe76998c4fa23"],["/archives/page/22/index.html","731c9df500ce5dc8cfbebaab8a69f172"],["/archives/page/23/index.html","9445a70551622622d5bfa703d6d6c9fa"],["/archives/page/24/index.html","cc0e1a046d7608b8bfc7d5fc24694e0f"],["/archives/page/3/index.html","7333c9bd6027c15f7254ffef57ccf87d"],["/archives/page/4/index.html","95528875029a991b8de1b66f78d68f42"],["/archives/page/5/index.html","5be9f166fc65f500cf918f7ab963cc71"],["/archives/page/6/index.html","eb9f3e64812a9721cc853c86763aa433"],["/archives/page/7/index.html","d36454dfe9427f15fccb833dab82ef4a"],["/archives/page/8/index.html","f1901175eb7f4f1996f83b54267901ca"],["/archives/page/9/index.html","52df47aba5ff4d35b1e62f1b60334d8f"],["/assets/algolia/algoliasearch.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/algolia/algoliasearch.min.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/algolia/algoliasearchLite.js","d41d8cd98f00b204e9800998ecf8427e"],["/assets/algolia/algoliasearchLite.min.js","48d5df34e0f799e6d894e921f99b3058"],["/baidu_verify_00eWIaJMwK.html","fdcc86e664288dfcb6c39f9b0551d747"],["/baidu_verify_ZzhwBFUe1V.html","33ce8d9e60d4a0555b67224097d616f0"],["/baidu_verify_dw73Nh8OEw.html","1be68e8a88379483f651582bdcebc861"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","9ee5b23795553efc939b4bf27ce910e8"],["/categories/操作系统-集群/index.html","fbe43752b28f251e2963d952e46a179f"],["/categories/数学建模/index.html","32c06363f36576e71eda17f296e53dbc"],["/categories/旅行/index.html","be1b327ff3c4fd317d5aa8068b4b8186"],["/categories/编程/ACM/index.html","9af21f4ce2a51cebd94b070c5798a7a8"],["/categories/编程/ACM/page/10/index.html","a08114b129e96033543721408dfdcc57"],["/categories/编程/ACM/page/11/index.html","f7c5dc03f572006e061fc58ff2d1ccbb"],["/categories/编程/ACM/page/12/index.html","15d8e7bcd0081beecd3c3ccfd7dd1dbb"],["/categories/编程/ACM/page/13/index.html","434c31198d9a0331e04ae7ca2bd767d6"],["/categories/编程/ACM/page/14/index.html","22947dfce21540e6632c3fc3fffd45a7"],["/categories/编程/ACM/page/15/index.html","512a13eaafc1a37bc96272fd62c8219b"],["/categories/编程/ACM/page/16/index.html","dcb44a9904639e67109555721e4799de"],["/categories/编程/ACM/page/17/index.html","ca3b663fe481c5c104ca31bd95205210"],["/categories/编程/ACM/page/18/index.html","a4c48c86684d56738a766b79668f9325"],["/categories/编程/ACM/page/2/index.html","3deeaf7f8b81fcfd5d3d3710acf14f84"],["/categories/编程/ACM/page/3/index.html","4e6124e2f4d3ade5aa2cab1dfbc7937f"],["/categories/编程/ACM/page/4/index.html","a59b2cfca7dc88cac08ab5914c876370"],["/categories/编程/ACM/page/5/index.html","cd368efc28b6e84a288b3ae543095bfc"],["/categories/编程/ACM/page/6/index.html","dadac4555ab8017d962e8da8727df545"],["/categories/编程/ACM/page/7/index.html","bb263e1186d486277e9fb862ffb782ba"],["/categories/编程/ACM/page/8/index.html","069d51297ac27b46ebf465ed9f6775c9"],["/categories/编程/ACM/page/9/index.html","6d9eaf7305347ce489c27abe0388c534"],["/categories/编程/C/index.html","ced11c8e345b6188265e6b3182395b5b"],["/categories/编程/Git/index.html","c277ce41361704bfa284883f3b5aacdc"],["/categories/编程/PHP/index.html","e7cf51a976f9a203bf8540b29d8d2868"],["/categories/编程/Python/index.html","a3aafa56e8e55164ee950fad2f7737c7"],["/categories/编程/index.html","9d9ec6fc8c6cc41b682aba218a79657d"],["/categories/编程/page/10/index.html","f41042af2fab372cb925c1905e7fd38c"],["/categories/编程/page/11/index.html","a61ba6822e8cbaed2e9ba1e8ee36a854"],["/categories/编程/page/12/index.html","b3937aa8e132b90b39752a48afdda94f"],["/categories/编程/page/13/index.html","6db37d2d4aef4a43bed73cfdf94bf2c6"],["/categories/编程/page/14/index.html","8b5095ea57e2397261c6228bf858a251"],["/categories/编程/page/15/index.html","88203dd9500da4246b099f7fc2999e3f"],["/categories/编程/page/16/index.html","49b5b3234810175dd0a30de08e11cd8c"],["/categories/编程/page/17/index.html","3c83f3132805e9cdf0ca2aa51035bfab"],["/categories/编程/page/18/index.html","7ddff840940803752f253607b3f9aed8"],["/categories/编程/page/19/index.html","905b5179bb58541979885803d9c64b4c"],["/categories/编程/page/2/index.html","31fd7d4311bdf3262c8f912f02527418"],["/categories/编程/page/20/index.html","b7d61d26923fea3a53ea839c7182f330"],["/categories/编程/page/3/index.html","143686e85e707b80cd80281ac1773a8d"],["/categories/编程/page/4/index.html","14d4be53755cb3687f577c8438a0b3f3"],["/categories/编程/page/5/index.html","ea93b1b5fc18fafcd36efc765ed0cc52"],["/categories/编程/page/6/index.html","991bfa51a9db113d88e4a02246767c7f"],["/categories/编程/page/7/index.html","12630e027b22be5cfd6520b077e3c21e"],["/categories/编程/page/8/index.html","460599dc867df2a11fc409bdc554f803"],["/categories/编程/page/9/index.html","6f491aab5214963b79614f60d0efbfff"],["/categories/编程/密码技术/index.html","f1b822c3317c6c10f3603c15ce8fee9d"],["/categories/编程/数据结构与算法/index.html","8fcc223d86fffdedbcfd7f1fdd30a369"],["/categories/编程/生产力工具/index.html","6d9640ca671cea60b09e5678d202faef"],["/categories/编程/编译原理/index.html","8a53f0959c8d0766bd6f0b62c7e6f91d"],["/categories/编译原理/index.html","401ab1b54b859dcb39ac867fb21e210e"],["/categories/讲座/index.html","7e84c00c090382723b4d0d40389b3730"],["/categories/金融/index.html","ecdd1b70afb06a57b6b5ffe2585bc94d"],["/categories/金融/page/2/index.html","a3b1ae3b78d518b5a6a3a4f14a2c5724"],["/categories/金融/微观经济学/index.html","ec379b140971e439381de81f5dbe8a2a"],["/categories/金融/金融学/index.html","ebe22deee0e994c56f58ce228dcbc6e8"],["/categories/阅读/index.html","72030863a23d3da40127f03b50b695b1"],["/categories/阅读/page/2/index.html","1438defff65da0ac1ac9ffe07d11106b"],["/categories/随笔/index.html","eda49799c626ec5f3263f64fd49e3d55"],["/css/main.css","3a243416292aba8bf7fe4fd38e2d4577"],["/friendlink/index.html","47b59e1f3a1b83d0723d463979e7a6b9"],["/googlea873f713657fb5dc.html","648212631a8f455eb30b57d00fb4b6da"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","6b890fd38417233242dba6d7fa005136"],["/images/avatar.png","8359005157006adfcf1495e893677ad3"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","53c0a446c005f850c21b7f3e09711801"],["/js/src/exturl.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/helpers/fancybox_buttons.png","d41d8cd98f00b204e9800998ecf8427e"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","d41d8cd98f00b204e9800998ecf8427e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/10/index.html","399ed7ee819db53fc6edf3d56846d0d4"],["/page/11/index.html","aeb52110d8c5bbee791bddb9cf04479f"],["/page/12/index.html","56ee25cd9e56891aaed5e0a6029d9e14"],["/page/13/index.html","931ed5d415ac309c815d3d319db4a00d"],["/page/14/index.html","b109574f9db0dde4161dadbcff105894"],["/page/15/index.html","83afffb5337c4580ecbd344c1524005c"],["/page/16/index.html","7bfdeef05b374a0add89b0fa3ed9a4d6"],["/page/17/index.html","aed654e8955088a5b81bbf98724ab4fd"],["/page/18/index.html","591fb289d931a502f224d1ea0e7a0861"],["/page/19/index.html","949e54b04e67e54a0ad2c8d4d48ff53a"],["/page/2/index.html","b186fe307aac04d258d7bec8100c4f1c"],["/page/20/index.html","f3e4b5ccbe576aefa46542ab8d18a04b"],["/page/21/index.html","c344a659da13f0851362126bc34ea5e2"],["/page/22/index.html","73bf5c2ac9162c2e71e359918a6142e4"],["/page/23/index.html","4a2a8a1357ecb85b7cbf26c42e635991"],["/page/24/index.html","bb0d4351610126c00277cec687200271"],["/page/25/index.html","1781862abc5d33cabbff9c9a84d057b0"],["/page/26/index.html","a532b01e3d6f0687caedd70b3df40cf2"],["/page/27/index.html","845d8fe771731a598fa6e805c15bc77c"],["/page/28/index.html","91c3ef6f731b4bfd14c009de91a2b015"],["/page/29/index.html","2c2d978570de3e35cff0dff3c4a77e21"],["/page/3/index.html","97deea76a32a37d83f05900470ec31d1"],["/page/30/index.html","d240e907da68f3f68e6691623814f561"],["/page/31/index.html","8d2aec51f8187cdd5a550abd8dc8bc14"],["/page/32/index.html","53716c66ba272d1945a47480f582ecf4"],["/page/33/index.html","784931fe0f18c36d25161b6f12b32cde"],["/page/34/index.html","9f3311f532d66aeb7249a259808a92d7"],["/page/35/index.html","eb2ea128067436ff82509465aff6e841"],["/page/36/index.html","682f48db9189ba2afb02523c787876bc"],["/page/37/index.html","2d7ef7f79712194da9b9a504a8b986c9"],["/page/38/index.html","4847db28582400ba8f8c58dbee95336c"],["/page/39/index.html","d445419fa4404fe836d8295fe728cf92"],["/page/4/index.html","8841e4d458304fd16fd4d39e65821377"],["/page/40/index.html","2debe6b7e2468c07477b34112dda6d8d"],["/page/41/index.html","8799fd15454f40a97772dd48588f6a76"],["/page/42/index.html","6e33fbcaa06e09dde9a432c5a3cf2817"],["/page/43/index.html","cd66554460f8cf4bde044cf6b3947e93"],["/page/44/index.html","bc64463df8da26119e4e1b55739227a7"],["/page/45/index.html","856156af22ba735c4ccd3c7bd2d15e47"],["/page/46/index.html","4add2036eff169aa2b4546f32476df5c"],["/page/47/index.html","68367d1c70ffe8e1301a31b87aa89827"],["/page/48/index.html","7c061621a98065620ce3c5d6d1192f00"],["/page/5/index.html","9c7844c6fdef2af5efa1abacac2e468a"],["/page/6/index.html","9e3c7692f3df027f1afae1308d12f292"],["/page/7/index.html","0c720c21066eae9a3965e1c5e1ab9843"],["/page/8/index.html","7085e7905f64f9a81dee775eb70bdf79"],["/page/9/index.html","36888ed8643eb1505abcb6e7fc131a2c"],["/post/104a4c5d.html","c4c53ff136a84cf67b73b40bfb0559b9"],["/post/109aa3c8.html","42eaf8bcf5700effeab57df15e42e0f8"],["/post/11246bdd.html","5bd0d97f7fe10b865893545c2efc2874"],["/post/1233e925.html","151a3537846d8dc987a338938fa8e4f0"],["/post/1448d9c8.html","df4d4553da5bfa45699433d9b89bdcd6"],["/post/15db1cd9.html","f8adbbae96fae279b1b8566ae8a0b526"],["/post/16b5efde.html","0eb3f880a071b7ff68dda09530e88fb1"],["/post/16fa37a4.html","4e1f5758c2261d109a8c4e8719c2211e"],["/post/184fc5c7.html","5e120b6c5034279d4f80efeddb612653"],["/post/19e79191.html","87811aa8661889605d89eb15bb1bfef4"],["/post/1b7db6f0.html","d79fa2e08600de432b12d91846734e22"],["/post/1c52564f.html","4f705df225a8ed95b286ea87d92015c5"],["/post/1dc46f40.html","e4ca8305cd789e0e803c3bea50f33fb2"],["/post/1eeab2ee.html","3b674f120d524e23c354be9e0da479b0"],["/post/2024a703.html","e8c9c6eee5b1a7a9db16820adbd5bada"],["/post/222505fd.html","824530ef7182331eee15ca947b702a37"],["/post/22b5b237.html","677a3d50ba8e98b63f99a2839e18b73a"],["/post/23f72a93.html","a1772bfd9cca1ce8e064cabf3415a4a0"],["/post/264a9c89.html","700c1db0818695c4190444f8f32c596d"],["/post/265c0f5.html","8cd939bab35e07068324844883c62b2a"],["/post/26fa4dfc.html","d2cdf185a39fcbfece46c1935e574f49"],["/post/273ced06.html","e013e757af2e4086503ce5a3991d26aa"],["/post/280fbdcb.html","65176108630c9b972914bf57a3a065be"],["/post/2bfcd7aa.html","20619e96bc9bcaf31d28f9df882bd77b"],["/post/2ee4d523.html","509b4fb7da144f6abb8615a50fa2019c"],["/post/2f392380.html","11518c751039fff11f0541e418c57eb2"],["/post/3090aa13.html","023869108a18f2fee12774cf4812fcdc"],["/post/3156b4f3.html","4854f2838c74de4b37f899b94be11083"],["/post/31a770a5.html","3a4fcda0ae83b41dfeeb52a70cd70743"],["/post/31f89579.html","911e7b6dc3184d64b5134473a7a7128c"],["/post/32dc51f4.html","38f56f2edd712ea2d5e5a805c8312e2a"],["/post/34a049ac.html","95b265ccb7e4309018c9e679d4634260"],["/post/34f53a10.html","22438bd45740e856871e4b405d35e2e1"],["/post/36bef409.html","d5b68c61f5e4fe5e7509edb39ea224a2"],["/post/36e5881d.html","3c3751b09f7b0ee886a3d46f56f4ef67"],["/post/380486cb.html","9874d77b7c0adbaf0b2af0aca98ae591"],["/post/386b56e6.html","e38bb9c7171daae7e3bc64bb12dc3bd2"],["/post/38f8b110.html","dffd605d221459ec354ac55995eb0ae4"],["/post/3a3eaae1.html","cd170c57792270e132ca466ad9c0cbc5"],["/post/3a72081e.html","50420abfc9f4426d335a21ab9ddecdde"],["/post/3bc7f503.html","d0a3f808b9852533b63910a96464f1a3"],["/post/3c57c5dc.html","f68a8e7c53b115277661451afec286a1"],["/post/3d71c64b.html","64e32695ca7cbca1ae6cbeda16e2d35f"],["/post/3d8072b.html","8428e880b7506e7df22355085cab4dce"],["/post/3e6878ac.html","f38fbe752a252e9852dd50b85a1a89ca"],["/post/3f9eff25.html","3cfeb2fc91b6cd56b148f2aa9fb739e2"],["/post/3fce0650.html","b3a4c76a28b5b2407ec182f2c26ba1f2"],["/post/409dbc1a.html","ce58905cb1539c251b30a769c3ec4c6f"],["/post/40dfaace.html","c514e029bf7bb96ca8efaad14c80a7f0"],["/post/4123b063.html","2d6554b390d7e8a278113777fe5bed01"],["/post/4255f31a.html","5934fdf590abc4e7498691dc29a0e032"],["/post/42a619f7.html","e87299bf69740db71314bfbe4684eb73"],["/post/44505a5b.html","1b0f82bf3772668196579e3013103bdd"],["/post/448da703.html","e7de74a500d07aadb3fe6ea32aa83e5b"],["/post/454c2118.html","37d723c280d969eb07133841d87290df"],["/post/454c2358.html","811ef29abf403934e71c086da05bcfea"],["/post/4773b69c.html","1644bafbd30da0d1b4ae5362d848f6d4"],["/post/47b391f2.html","6eeb48f5677843800e71a6c5637f2ad0"],["/post/481e8abf.html","8d4bfb105ceb593f9a0bc732f5b991ec"],["/post/4a2509a9.html","f1fb48cfa40394a6df42e2ce603f53c2"],["/post/4ab96b49.html","63d4a165d61a7f77c69454e92d9d67fb"],["/post/4b15f9e3.html","e649d84ae92e05afa1d442ee4bfcaaad"],["/post/4c60a529.html","d17281be91e8067f174d360844d18930"],["/post/4c842940.html","451381e11bd7bb336fc494559b362621"],["/post/4d6a6b27.html","82f62893c3076cb550a853e4551eb4b7"],["/post/4db7e28a.html","6694c6cc3616e9f321887fbc992ac874"],["/post/4dc7502.html","2fd21dd88db37f51bed5f17a33a9d6a9"],["/post/4e876bc2.html","00c48688bbad09d86d9bc78c9151b2b8"],["/post/4f352d.html","07ee1c53237ebe820ae7f320c1081154"],["/post/4f8fe65a.html","bcc41ec15eaf9db521975caa7468cfc2"],["/post/4fa396eb.html","3d62042a9b4f6cbeac696fbf3c096e62"],["/post/52360052.html","09ec32697ad9bc8d73d22dd1bd182d5a"],["/post/52730f61.html","8f2e6eabd0f63bf4327f0ee48572b5e3"],["/post/531de0f8.html","9b126d370e63749eaad27dcc767cc84c"],["/post/53729461.html","4251839123bb1a2c030a28598ca90b38"],["/post/541f3acd.html","b5a7109bf95a6f71f6e6c4d6a99c3b28"],["/post/5555df5.html","e3267ff2a9278cf7c6e7fbda0e8ef08f"],["/post/57bfde8d.html","e65e06425ceb09b0ff25be1e07c0a82f"],["/post/585293b8.html","b388f9a9fef6c086a97b741b6406141b"],["/post/5aa5290d.html","8e11b9119b369c83cba76dbbd887d91f"],["/post/5abc6d45.html","2972fac477c986d94e67e0e28a997107"],["/post/5c86d06a.html","354210c1df2f8d402e15ee6f4300744d"],["/post/5e189593.html","1a36d92094ab247b16e394c1af3948ee"],["/post/5f2d4a77.html","f810b96bfa69512f6719b548cc0ed822"],["/post/5f341cbe.html","2b791060022e121ded27e110d19ecdd4"],["/post/6028c50e.html","4005d67aeb475942fd4e03df6ba8bac8"],["/post/60850415.html","9f6e94ca7b2a9ac2a93ca20554e7227e"],["/post/61642081.html","b72a28e0b372324eadb5fa89ebd946ac"],["/post/62cb42be.html","56ef33fcc7567cf2b4b62bfb01ba4d4b"],["/post/6501181e.html","2e922853f199c2c0b7f711a191c4c277"],["/post/66258384.html","23f1346c1202656c74eeb86d589868cc"],["/post/662b8b80.html","dd9ebbcc21f00e0665ec7a999835478c"],["/post/677d0fef.html","9384439dd80c77ace5d02ec1d3ab0480"],["/post/685bcc20.html","cc432b3d7467f24fb8220b70f870806e"],["/post/686dc27c.html","38d9eef28557a4c8560ca7a043c85834"],["/post/69feca91.html","542dcc116c3f412bfbeaf79e3316f508"],["/post/6aa464c0.html","fa6282986ad6dfea849a6835db9c87fe"],["/post/6c71e418.html","464b75bc4b48053d26ca08ef33362031"],["/post/6ca1eed5.html","f468848b6d1e2ec20ac6a795aa482808"],["/post/6cb7680e.html","8f06362ee9bc2cc7000e3c26a7c25050"],["/post/6d52b9f2.html","6329193ae0e9cd93cc7f7354b014db2d"],["/post/6db0d89d.html","84b66642be134d413ea2505dd65f259c"],["/post/6e80eb1e.html","326fd6ed79185549352cf61201572319"],["/post/6eaa7771.html","b241d77c0e044c052c67e6c2b7270b59"],["/post/6f3b3edd.html","9fd68339c20af972f6ac826c43bfebe4"],["/post/6fc3409b.html","7525e36cee7ad450f9743e860f3249a7"],["/post/703409c5.html","ebdbb52b14de0dca553cbf80817e788f"],["/post/7169c4ed.html","92eafdc15c56583f7cb5cfb868845ffa"],["/post/73136b.html","1fa8f0fa6b42935d46ca8b491c502123"],["/post/7410a832.html","491b3ca4478703077ca2097d92148a0b"],["/post/742966af.html","461dc8458b32b1c9797d74d4ff2632f2"],["/post/74479d01.html","6e72c94120e96d0ae8775686491f45af"],["/post/749ff2bc.html","030a527413185c2fd895a561e8e663fc"],["/post/74a4286c.html","b6f065ed60fb17c6df57ea99d8bd3649"],["/post/75794199.html","2149f2487e1a548ec8cd5363fed97f48"],["/post/75f986a1.html","77589bdea2052e51415a1d8687bfed3a"],["/post/76485a7.html","98f40ef91c71d653aec7a84def176469"],["/post/772fc02c.html","b6fa701fe86ff807188f1fbdf8ac988b"],["/post/773c10c5.html","207ee65d639c9ae5c7e09ee2b8d384bd"],["/post/792e36ed.html","e9ca2cdabbf0026369aedb95b4242850"],["/post/792ebb35.html","58dfae3c29b1e77fcf16d53c4eae3542"],["/post/7a1fb89c.html","d20547e455d00c697f95cf3286893a2d"],["/post/7c50967.html","fb0eede9f15f8222c79bd682fab69bab"],["/post/7d274866.html","5149a399e57e4925e04ec11eb0eff440"],["/post/7d8e4f2a.html","5ff5194e7bf7a1e877115797390eeb28"],["/post/7ef8a98f.html","e04d0ec16138409bac63c8cc6a8ebf47"],["/post/7fbcb888.html","54ea1625c16c0a5fcf623295de72427e"],["/post/7fe193be.html","439fd339c659e7ac4e5ba47b888a53e9"],["/post/81d45fa1.html","25ec019ddda58778526af9fd718b275e"],["/post/8573f32.html","0bf3210ab49b393f2f60e74364afb747"],["/post/859584ac.html","fc8a952dea61275b4894015da6977c97"],["/post/879e9655.html","2e96c92ecb1c5ce69a8ffcbbd7b837a0"],["/post/88a7282d.html","4acda2c97e761204397a38a89761c277"],["/post/88e8ae98.html","8849cb23822421da2ffcd45fc7c663ff"],["/post/89873dd3.html","a1f9fbb4ad2add94e8c43a07c9e4633f"],["/post/89d4cd71.html","837dc33341de65687303edd3fb05e280"],["/post/8ddc8a30.html","58d14e3d92806b0b08e14a682b3d2ec7"],["/post/8f9cfad3.html","9cddfb252a5a377ba93d8c38dceac888"],["/post/918fcaa1.html","991e8d75b76c61b5c6c4f06b58754f53"],["/post/92687617.html","b7709753abea4ecbd66a99310a78f895"],["/post/9282aeca.html","cf0fc6046ff5700d3ec6419cc2105090"],["/post/9305c5f5.html","52414ef472b91f89ba399a20d8e7510e"],["/post/94c9baee.html","d90930be8bc8c23f3c2674f862c43f8d"],["/post/98804e11.html","693d9f4759b5f25a821a0215930cd2c2"],["/post/9a9a4797.html","f55d6eff5fb8ed236ef46a392d4351af"],["/post/9c28a880.html","ec71efb069155aa47a6d52c4ef58c24e"],["/post/9c649212.html","77c0b815c6a61b4b7286e442f6d507fd"],["/post/9d402b32.html","f100aa82e1cc44fb63db15a1f8a034dd"],["/post/9eb065c8.html","0b592ba1bfc160d660a35f6e95c30e40"],["/post/9f8e212d.html","6465c6c5a4db603c98057bdd8a5a74f7"],["/post/a1751c09.html","b989d4622679401ab5fc26b3101da3ca"],["/post/a1cef007.html","f19aca91435000b10925b42616096101"],["/post/a1fc03d8.html","3999eb428e475f754cf28144a4da98f4"],["/post/a27e9acf.html","733d5520118c2fa09b78c589261ebc79"],["/post/a2966b48.html","d1a7847cb423a0a16120d453fd3739cf"],["/post/a3770b00.html","0c2b788203829735399f3e26503c40fe"],["/post/a4c66bf4.html","144ad23ceaedc45b63eb6bbcab43e5af"],["/post/a4efe87.html","8ef8b2a455eba25e323ae5c8436fb2e1"],["/post/a7528411.html","4b103a44750cdedeb8e78d4b4f9e4c05"],["/post/a8759852.html","e7bedc64a90b1d781ea1814c8b3febe0"],["/post/aa0a97c8.html","6d949d2d289f53bd0cd2d6d26de9a096"],["/post/ab4ed95b.html","33863a38ba65eb52ccc77484021ee0e1"],["/post/ab720150.html","c4930bb38e3a28d1f94c86bcefa9f356"],["/post/ac92be99.html","81c6e01f24e248f2195d0350b7164051"],["/post/acf6b02e.html","977a75ef1f8f49a502de3e39ad307f56"],["/post/b04c1acf.html","e1619b4601d1bd7369ffa2df44ffb14d"],["/post/b0d6c7.html","d895081b43dc7a17bf33348b71f06703"],["/post/b133bf62.html","efb68c5b079654495cce66ae8c5f04cd"],["/post/b3ee770c.html","a12d8048b734b705de066a1f8286abd2"],["/post/b8ca3dfa.html","d2533e6c1aefddb5ef1ea5fe06088789"],["/post/bb7f8e97.html","924c9f9ea7e593b12cb9ec4bbb6f6229"],["/post/bba462fb.html","aae7395c917e2b1c0f08d7f71ae2e5b6"],["/post/bc8586da.html","41ec55ec6c69cd3f91038dada62fe2fa"],["/post/bcb02c2b.html","8d70c76558779ab5dd6f2f8c3c95b75f"],["/post/bd36a30f.html","a02da1e269e4b21358deb1d3aa5914b6"],["/post/bde4b1f8.html","557be68d285774283b1e22ee0438d0a0"],["/post/bea42f1e.html","94ffd39590e715c48d79f636f6065cc2"],["/post/beeeff10.html","ef85fc7e84a795f53bf56dff059662d2"],["/post/c1864474.html","5b0f35d3db4d2257823a1a3cd1ba3bc3"],["/post/c293d2b3.html","9a04a0c88a6800e12df67f48a9bdd75e"],["/post/c37095b9.html","dcca9706e7068c93cb01d5de67451c2a"],["/post/c544c33a.html","4756058b2305def6a7804a9706d7e988"],["/post/c5672df5.html","06d29fb8a543718735a9430c84a5f078"],["/post/c6d76e9a.html","65f1e0f421edf5e016823fc47178c54e"],["/post/c7fb8250.html","bb21b230d6ec73459cc47ad7ff9e2b22"],["/post/c938bbd1.html","1d182c73cb84f3235532f75c1c1e0b55"],["/post/ca14c5df.html","c492f04271fb868db647f928206df641"],["/post/cd18de84.html","32e225a64d24f9bea32a92da861d29a5"],["/post/cd41dfb7.html","323a3d84050557548a88aa0db840dd2a"],["/post/cea184b4.html","7d58488ca844bfc96ebcbff8dcf21f81"],["/post/d0793265.html","6cd3a3d550164544c3828fd9a8e85e91"],["/post/d0d58037.html","964832ed48a755a58dd0bc3fa21abcc5"],["/post/d120bd8e.html","45f685d197502cce033ff88b108c820f"],["/post/d2760377.html","42c7cbba020e0824085cc9664fa07ce8"],["/post/d50b784.html","c1b6848eab137f5326ce04b895b57458"],["/post/d6212e2f.html","c37cf094fb9f3fd4da8bee385147d9ba"],["/post/d632e628.html","0c6882833ae728cfc0340dd2084c7e57"],["/post/d6a5bd15.html","856866c8796ac6ed5ff26b5519e1f923"],["/post/d73de254.html","ac5483425dc8a1979db639c10e0d8855"],["/post/d7435d20.html","c771398c71717e3a95c00501127a72ed"],["/post/d81c5363.html","efaf40aed7042032504867b1cc1cd172"],["/post/d899bd9.html","18e68d487e3acf2d467c8b8c30aaa0bc"],["/post/d9083bc4.html","5014e8439b7e290f01041c6cfe72157a"],["/post/dbad9cab.html","3a54779443e9f76f05c970af1127d5d3"],["/post/dc981233.html","35f96a7209fb75b7bf94a284b5cd5fa2"],["/post/dd932d44.html","e5aecc22e527fc83719a01cd2d22a915"],["/post/dea65d58.html","a05873642d23128b672bf81fe5cd7c54"],["/post/df76d545.html","ca27877c7452f2d0bd3fba642ef4cf2b"],["/post/e256d99f.html","f7454f9bf2b2f3cbb7cfba6e3ff53f1d"],["/post/e290dd8c.html","49e7c5bc615a7f90c04b6983d55741f8"],["/post/e3e37943.html","c7f82c419944f1da4be32b4c0f1002ac"],["/post/e583ed8d.html","443c946befd02f44292411337b9f9dbb"],["/post/e5d75450.html","50f4df38b0bed2270a2a440fe017f0af"],["/post/e6364ca4.html","c0905c0a81aa0a6a27dead56f7c40bbc"],["/post/e7058b47.html","0763212113c4bab4608b4f3df0f28099"],["/post/e769f01f.html","e338c07ae0fbcb1b97e7bdb047210700"],["/post/e78ad34c.html","ed43bfa89a29f858acdcea81f76941e0"],["/post/e8005312.html","49b35c8c4a75b0f2f8219b9829b6ee2f"],["/post/e8ae7612.html","36f6457e23c95d7ce15380b73bcfd187"],["/post/e8bc7157.html","e2a980b8704c3a4e1f8cbd63ee8bf8a6"],["/post/ea5d5d2f.html","7291577994c194885e28393555b4bf90"],["/post/eae0b80e.html","47c426076d4b6ae0c4bd843669dbe90d"],["/post/eb9ab36.html","c795f64c4124226391aff16048860dfb"],["/post/f0b23c5b.html","8867c942d8bb30232b51f5a3cd9303fc"],["/post/f279299a.html","c90e4f1490762d83403c5b0a5fd3b49c"],["/post/f3d9c661.html","dde82ab7f0f19438fdade838c28a74b2"],["/post/f4bfd16b.html","5bfdf925301b08c57003edc7c1bd1c5c"],["/post/f7b33ddd.html","fa5c4c0fbfd1f852c4eded5df350f44b"],["/post/f8e4bc7f.html","11454e9d1bf92e7c846f8dd1d31892b1"],["/post/fa83cee.html","e6e391c81c8c1e2eee2abc169d7a4ed6"],["/post/fb2f630e.html","fe786e74b0122dc26f7e6f62da2e8c22"],["/post/fb5efb9c.html","d9651de7249b13e16a634de8088fde59"],["/post/fbf7f335.html","c7379821a346b3abd1ebe19dab00096e"],["/post/fcb9464d.html","34192128afd455f7227907fdb724802d"],["/post/fd581850.html","5be45d5a0855f802df9fa29813b58b67"],["/post/fdc06f3f.html","507be6f15d3fe1625c87196b70b6516a"],["/post/feaebfb5.html","ee2f2de799733298af8412397a7af305"],["/sw-register.js","20e9a649f2879995e7504bc42dfe527a"],["/tag/1988：我想和这个世界谈谈/index.html","4d9ff35061600f5095278fa7b661b548"],["/tag/1Q84/index.html","8553cd44e2031bd770f63a7ab192ec64"],["/tag/2017HDU多校/index.html","df67e269164664e6591ad8a802ec29b9"],["/tag/2018HDU多校/index.html","e23d4b4f37625427d55b15c86d68f7dd"],["/tag/2018寒假集训/index.html","599ecff2fb07880648ed6b3c89e6939a"],["/tag/2018寒假集训/page/2/index.html","dc0fe9975142b6c889d42d681ce09a65"],["/tag/2018春季训练/index.html","117298a9d1cfa67a51b62b4e0573e19c"],["/tag/2018春季训练/page/2/index.html","41241f045af8039291aaaa8246943d2f"],["/tag/2018暑假集训/index.html","37058dd9bd8dd9d68c1b7fac5e353da4"],["/tag/2018暑假集训/page/2/index.html","9f5d576971154b6d708ab8ed448a744e"],["/tag/2018暑假集训/page/3/index.html","23b83c187f407397d5c8a9cf3bd260c5"],["/tag/2018暑假集训/page/4/index.html","21e5aa1d026fa46df8a64a9c520c64ce"],["/tag/2018暑假集训/page/5/index.html","7152fb254415f8e508d5f169a4e93048"],["/tag/2018暑假集训/page/6/index.html","beaa284174be16e1b06e0ec9f6cd489e"],["/tag/2018暑假集训/page/7/index.html","f2fca1e13f1252897b4f6841d8d52b29"],["/tag/2018暑假集训/page/8/index.html","6138f579908fc874f9b15b165579b3d9"],["/tag/2018暑期选拔/index.html","f8d37bb710fca9d9bc94acbc02bba86c"],["/tag/2018杭电多校/index.html","ff98ef524904ad7a6e15bec579092e06"],["/tag/2018球季训练/index.html","cda1efde231b98c6c269bd1199d450e7"],["/tag/2018秋季培训/index.html","780bc131b9d3ed65473d78c1ac78293b"],["/tag/2018秋季训练/index.html","8e49778897cd762acbf0d8446d1e592b"],["/tag/2018秋季训练/page/2/index.html","5478279331c6e1f3639dadd75fd357de"],["/tag/2019春季训练/index.html","b6f80ce5f3511b1fa1a2bd6c8a38b3e7"],["/tag/2019春季训练/page/2/index.html","6bf7aed6489a3ac3152f376bdc42dd18"],["/tag/2019春季训练/page/3/index.html","63596c394608b1018f420904d489e6e6"],["/tag/2019春季集训/index.html","aa9f6beac927e7471b097732f1c80b11"],["/tag/ACM/index.html","32219b9221325f4d72d118a6b52beaa0"],["/tag/ACM/page/10/index.html","be27f82d129179bf255d6499e4c71da2"],["/tag/ACM/page/11/index.html","80d1c261e5f8e29371ca9468373318fe"],["/tag/ACM/page/12/index.html","c2225afc2e32d5e86c15f9684b0c3d1d"],["/tag/ACM/page/13/index.html","4224744898df8ae37414a1854a627911"],["/tag/ACM/page/14/index.html","f968303b45b0e36b26eabda71c4be761"],["/tag/ACM/page/15/index.html","d0c62a1592a910a9dbe9f97e0e80079e"],["/tag/ACM/page/16/index.html","ac8de97ef24c31dceea59df42eb2eb66"],["/tag/ACM/page/17/index.html","c26cc5abf85c152cdc8489acc86beb1f"],["/tag/ACM/page/2/index.html","23ea51fb47a497b2abf26831fc5921ee"],["/tag/ACM/page/3/index.html","b49a0bb6ae96c746bfe13f7106ebfe66"],["/tag/ACM/page/4/index.html","7e92eaf663d9613e024a0bc905e44867"],["/tag/ACM/page/5/index.html","8719cb67f4a182d392c338f650a45605"],["/tag/ACM/page/6/index.html","8055e25c3363c320d4bea0a214c66b6f"],["/tag/ACM/page/7/index.html","ad1b5e9aa8752cc6b565a4c44acf2e56"],["/tag/ACM/page/8/index.html","6727916e63e716c5a83014546a7aee1a"],["/tag/ACM/page/9/index.html","a7dcb8701c4fdf8d800b6bf166b3f2fb"],["/tag/AWS/index.html","07ceea2d1455983a27d7c2ab70769ddb"],["/tag/Aizu/index.html","6d696595767f85245224a843ea3fe24a"],["/tag/AtCoder/index.html","607e28b4f57a39e4da40f09d0c5f0498"],["/tag/BFS/index.html","12346945ec1fadc07cf4baa2647cbcac"],["/tag/C/index.html","70e74a1229fa5ee8b563cef68c9c30a0"],["/tag/CSU/index.html","548e2a6db58ade45b81ca00c16382979"],["/tag/CSU/page/2/index.html","0c740039690ba3ca7dc0eeb63b7db6bd"],["/tag/CSU/page/3/index.html","eb948885e16c4aedcfe816d3d2a4efb9"],["/tag/CSU/page/4/index.html","ffcbe19cfb4e231bad7e3064b5cc5f9b"],["/tag/CodeForces/index.html","78efb38430d8f25f5e7316c1731712db"],["/tag/CodeForces/page/2/index.html","7a31a5bcdd95a95d1e237ef7e78c4d72"],["/tag/DFS/index.html","0dba9451217cad48f818075bcd1589a9"],["/tag/DP/index.html","7b971228384e51355b5825b8a9694689"],["/tag/Dijkstra/index.html","d95928b3842744e7d341e65dda90384b"],["/tag/Flask框架/index.html","173bc674173261a15462e36b450a2f17"],["/tag/Floyd/index.html","4b23e6fa1b9a325be4e63ba1155f1484"],["/tag/Git/index.html","1e5fe53cb7979f79f0b77d82cdf93307"],["/tag/Graph/index.html","87f1771bbacebfa19b3f1866124bfd81"],["/tag/Greedy/index.html","e3c510bcf7433d887c821611f53607b1"],["/tag/HDU/index.html","2b9210ab2644acdbd811d5b1bdfd9418"],["/tag/HDU/page/2/index.html","00ed6e4624cae157d7efd678fd08a14d"],["/tag/HDU/page/3/index.html","ac266c321c28f7c40213241f67802768"],["/tag/HDU/page/4/index.html","b7cb083e74754792be09399ded91f280"],["/tag/Imitation/index.html","88c3f9c3560f7284ebe2737391526ab4"],["/tag/KMP/index.html","6e815dd0ffe80fcd66fe116445f1354a"],["/tag/PHP/index.html","6c5c936290f76d9192797d8afe9ba28b"],["/tag/POJ/index.html","4c8ea687ecd8fb32f245ed8eb4258b61"],["/tag/POJ/page/2/index.html","e2303f917d7a4d67acdf3e330b97e57d"],["/tag/Python/index.html","d3a3618c3e5389ae5c82f173675d23b4"],["/tag/SCU/index.html","28e8da9954a3770a41c59f3377ed0e32"],["/tag/STL/index.html","53a98fd20f02926a25b7561b0d3f480f"],["/tag/STL/page/2/index.html","5a4b44074a7fccb31992751d1bd62767"],["/tag/URAL/index.html","a63339639ea797cfeff6e3ceeb8c291e"],["/tag/UVA/index.html","f7ab73e6703fd145a57b11c0a551e41d"],["/tag/UVA/page/2/index.html","eb3dcdea991ebe3cafbf4a3ec335cae7"],["/tag/UVALive/index.html","05a0ee92b9ee74b84da217008c1369b5"],["/tag/VSCode-Git-生产力工具/index.html","d6ca85c301d92d3c8c00af98bc2d68c0"],["/tag/VScode/index.html","36c354902265810087cd200efafea499"],["/tag/ZOJ/index.html","3963c3e42b6bb9174a07d9268bd54517"],["/tag/math/index.html","580133126e55a644b3e6a1eec0138e61"],["/tag/test/index.html","48cbfe51627310de9ce37421c440d38f"],["/tag/不得贪胜/index.html","82c44bdb7c756cec82b0ac6b8326492a"],["/tag/东野圭吾/index.html","121a5fc8e1dcde64857d830a0d4a7210"],["/tag/乌合之众/index.html","d3bd5ddb59e956cbddb9969f19f42a52"],["/tag/书信/index.html","b6a7099d13faaa59d9796c457235ac79"],["/tag/二分/index.html","d7479808a4eae2558e4df4861a446662"],["/tag/二分图/index.html","91e1e557da69defd6d6ec1e40fc460ba"],["/tag/二分，BFS/index.html","685fb84028329090dc82fe01f8da91ec"],["/tag/亚马逊/index.html","adf616f138f4af0155bb7a3aeef00f9e"],["/tag/亲爱的安德烈/index.html","53fc239e5d85121f460ba4b8249bad2e"],["/tag/位运算/index.html","cc09f33054f2ade50d80339817f0fbc0"],["/tag/几何/index.html","c5a454925fe72ff9c853378429e0662a"],["/tag/刺杀骑士团长/index.html","19ce6040899fa2f4cdb0a288ed8e7a3b"],["/tag/前缀和/index.html","f1b1488fc54a70427d4888a742bfec17"],["/tag/区间DP/index.html","748ff84b7f01f2302674fbc64d4c422e"],["/tag/博弈/index.html","9b4d9ce834be1e3d6ab6e23fa2a1b86b"],["/tag/历史/index.html","fbe099d86cce420cbb77e3d8f5cbc7bc"],["/tag/古斯塔夫・勒庞/index.html","da12b9a0c385568a20fb55e3c1751c4d"],["/tag/叶嘉莹/index.html","462fd4372dc31e0fd0b6969ebd527051"],["/tag/图解密码技术/index.html","45a0dd1808d0d07c27cafd32d4f688a5"],["/tag/大数/index.html","f509488c0d406417b6b25d98e2ac6075"],["/tag/天幕红尘/index.html","298304c132e6dd4fe475ff8e03c960fd"],["/tag/如何阅读一本书/index.html","dbc42999baf11ce7aacd6e924373f314"],["/tag/字典树/index.html","ea94d05df4370ebf4d913e96ca82e05d"],["/tag/字符串/index.html","95afd760afbb7a695295fd7572df430b"],["/tag/字符串hash/index.html","a69c5423a19d9f408f46672f6f04c0c0"],["/tag/安德烈/index.html","04cf2bbe759b5eecc1d6ff34df27ca75"],["/tag/密码技术/index.html","a32c94231ffe7d4dd365df0ab17cde28"],["/tag/小说/index.html","6be3c9e361ca39579fbaf5793c2430e4"],["/tag/岛上书店/index.html","f13441beaaa9b9ba3fbe049a59407fa8"],["/tag/并查集/index.html","5ceef24a31606e863e00b43cc7f9fa5b"],["/tag/待补充/index.html","b73725f0f6ddc633ad6fb8f481875567"],["/tag/微观经济学/index.html","3c8bb0ce7d25dd424231e529a5922a01"],["/tag/数学/index.html","f69cbaee9ef401a378f38077a667d610"],["/tag/数据结构/index.html","cf124b86f853c114fcb304aa9a509f4d"],["/tag/数论/index.html","7352331248e78c7b57f988bb62c908de"],["/tag/文学/index.html","7321184246ff9f570a6207721a032c62"],["/tag/文学，小说/index.html","64b461218efe6b184483febf53229ccf"],["/tag/旅行/index.html","65d3557ad75bb43f70e7d061f89b7a2b"],["/tag/暴力/index.html","ddb45ba5e2c7a06ecd4a59ed3339f163"],["/tag/最大匹配/index.html","34231640aa99fb80a2cc04468a08f0d4"],["/tag/最小生成树/index.html","d2c4a628785d1c074ecffc06cd7d0c48"],["/tag/最短路/index.html","0469e95ba47aa9a87f20fd9b8b08f5a7"],["/tag/最长路/index.html","bbf3ca4119b9dbcea614fdf40d62ca2c"],["/tag/本·伯南克/index.html","fb5ed9312ba3b7f8b7926be8912f21e1"],["/tag/杂文集/index.html","ec1993d120196c2ae7d74000f353c6b2"],["/tag/李昌镐/index.html","c9a4c649fa3a5590a4d19a819009ce5f"],["/tag/村上春树/index.html","4ff74fd020cf925372fbcfc60b066c35"],["/tag/枪炮、病菌与钢铁/index.html","c1aa844c83a724cbf73e1ec3d1cd2b00"],["/tag/概率/index.html","d6d0de4c1d1b78888ce4f3be240971d7"],["/tag/正则匹配/index.html","e53e3337ac29142fede75ade9a7213f0"],["/tag/水题/index.html","0ffdd032cff055acb92b3b1af481e4f0"],["/tag/洛谷/index.html","216f6d70c2a9276ae954c26f848dedd5"],["/tag/洛谷/page/2/index.html","9610aa32e60938e7864d1ba93e080b06"],["/tag/洛谷/page/3/index.html","52940187c1525279c04c69f56475d8eb"],["/tag/游记，武汉/index.html","9b63014792f0a1d8b6209481a3f95f68"],["/tag/演讲/index.html","da0f7dfc9808931c23a448e3cc4e0c8e"],["/tag/矩阵快速幂/index.html","6caccdc69de745d425b4698f9acc8650"],["/tag/石黑一雄/index.html","54f5c04c4f1dd92f4417576adb2d9d03"],["/tag/社科/index.html","96d9d8ea01e74119299949ec7cc0f09a"],["/tag/笨方法学Python3/index.html","ea2b06f8afb5a91b74f71cc9cfd1fe8b"],["/tag/算法/index.html","bf3dd816290d6e895de9cef26d36901c"],["/tag/算法/page/10/index.html","c856cf33f7bba18d3ddd4600c568b9a8"],["/tag/算法/page/11/index.html","8aa1cd45fe0b46fd3a95bc95a6e4388b"],["/tag/算法/page/12/index.html","267951a684d5c9a99399187cad6865d9"],["/tag/算法/page/13/index.html","fa84eaac6f7e653d9ea317bf29506327"],["/tag/算法/page/14/index.html","93512f8adf294448a66d464ff1ba2319"],["/tag/算法/page/2/index.html","18fa37e9e3ee30b119f6dbcecf83c5bf"],["/tag/算法/page/3/index.html","7a3fc12ced73cece0db8d58c766e1d92"],["/tag/算法/page/4/index.html","d972fdec3d3979d72f58a5f4edd8d970"],["/tag/算法/page/5/index.html","a6dd642eca2bd02c1b3918f7bb84eccb"],["/tag/算法/page/6/index.html","35510f04fe69bf8ab9afcca3fe21a095"],["/tag/算法/page/7/index.html","954828a58c565d96b7656825169ef1b5"],["/tag/算法/page/8/index.html","8c84a585b7d47bdb26c3f146d0c833b3"],["/tag/算法/page/9/index.html","fbe955a2bd9cefce402d15c365e7c841"],["/tag/素数筛/index.html","c5c8c3dfecfc5c1eff8ee69499b8afc2"],["/tag/线段树/index.html","5c32f1b88545d2534bcfc88e5f801e81"],["/tag/线索二叉树/index.html","9252efd8530f04bea776487304501ec4"],["/tag/结城浩/index.html","96ac250fe3575008bebad42f05520631"],["/tag/编程-C-课程设计/index.html","2dc2c206d1da9846d2bf530ea3966d3b"],["/tag/编程-数据挖掘/index.html","5410549aaa8fb7186e3880d25ce8bc04"],["/tag/编程-编译原理/index.html","1b65558c73878cf9cc944a7f1e236d4e"],["/tag/编程/index.html","6f5ef0098588c2becbce93790cce4cdd"],["/tag/编程/page/2/index.html","2c9f328ae57f080111afbc57b6cce7d8"],["/tag/编程/page/3/index.html","bf10f5fb1b898a861c35b52d89cd32e2"],["/tag/编程/page/4/index.html","55dfc6bab53ad187d321436507313557"],["/tag/编程/page/5/index.html","fc77245b8adfa0cc42aa532c167242f9"],["/tag/编译原理/index.html","de41ea2857cbaa3c83834dae9b31ad0a"],["/tag/自传/index.html","64f0864b943ea76c15e72435f8ea93f1"],["/tag/艾萨克·阿西莫夫/index.html","b2f46a8d5dd415a089ec14ee975a0a8e"],["/tag/补图/index.html","6f78419c74c40a741c80bdda8b2fab5d"],["/tag/西村吉雄/index.html","37c408f458cc7b7fba65ea60e5dcc5cb"],["/tag/规律/index.html","dfb4b394587620b01f2c8a8afc51cced"],["/tag/解忧杂货店/index.html","3065b8335d13e6e52ff3795320bd4dd6"],["/tag/计算几何/index.html","a7330da8536b2889c1051e0eef70c809"],["/tag/讲座笔记/index.html","bfa242720e55661608f88c62f5136e02"],["/tag/读后感/index.html","7049ca23172dd235a3da30801bf4127b"],["/tag/课堂笔记/index.html","8e69b82bd7b8a7f64d3a34a72d62419d"],["/tag/课堂笔记/page/2/index.html","462c25f5a339b4abc185ea23d522a242"],["/tag/课程学习/index.html","67d934c46d6994833ac231f812d45e16"],["/tag/豆豆/index.html","b651409a6d90cce81aa1bdf5a8771d38"],["/tag/贾雷德·戴蒙德/index.html","49b6ea4ff7d65177b5b37a3cb4e4d84e"],["/tag/辅修/index.html","614fad91c7198fc3fce084e63eae54f9"],["/tag/辅修/page/2/index.html","335e6a5385d3b0914577c00c7dea9869"],["/tag/递推/index.html","577042becf41ad77021ad948e9d8db95"],["/tag/野火集/index.html","2e536c9aed8638a0a58147361ea8aadb"],["/tag/金融学/index.html","4b93b4bbada86d26af1f67d1558f56c5"],["/tag/金融的本质/index.html","03205aa6f5c7ae3863f6e5aa7836dfd1"],["/tag/银河帝国/index.html","d128879357880cd60444c3bda9ac5e9b"],["/tag/阅读/index.html","3f14d3b3d85a3566cc8b2581a22d8db7"],["/tag/阅读/page/2/index.html","77ffaab1fcb45fa548d41a239b0f0ec2"],["/tag/随笔/index.html","2a8209612eb93d13822d02f0c350ee8d"],["/tag/韩寒/index.html","fe8e9a352fabf5333d99259568c72a59"],["/tag/高精度/index.html","81085fcffbc94700e662b56ec21db1b3"],["/tag/龙应台/index.html","0e32b560599130a48830a478fdbd00f2"],["/tags/index.html","07734441e85da49d97463e165a0b2e1b"]];
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
