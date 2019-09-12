/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d24832fe04cbb6be73249b09c95a4a12"],["/archives/index.html","2f3697d803f5ac3f94a386ccc3bd3d38"],["/baidu_verify_00eWIaJMwK.html","d54a5d0bece0a869b478e0654791d1d0"],["/baidu_verify_ZzhwBFUe1V.html","4e27d647a6d20002da8e669f51471b31"],["/baidu_verify_dw73Nh8OEw.html","49ce4216dd8cf13265bbfaf206170e92"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","f7789ffe86efce984fc73e1e4819bf6c"],["/friendlink/index.html","f3f55c200071801071645553956c9160"],["/googlea873f713657fb5dc.html","b070115412363315a74ad13585597fdb"],["/index.html","a0b00119b256880e66cf07ddeb66c857"],["/post/104a4c5d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/109aa3c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/11246bdd.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1233e925.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1448d9c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/15db1cd9.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/16b5efde.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/16fa37a4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/184fc5c7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/19e79191.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1b7db6f0.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1c52564f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1dc46f40.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1eeab2ee.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/2024a703.html","c1c780ca6c2172bd8c218ebe3730c388"],["/post/20d9890e.html","ec5986a1b3745cd06657198fa4c56a28"],["/post/222505fd.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/22b5b237.html","98279f8ea2f29fda32d6072c3f4b36c2"],["/post/23f72a93.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/264a9c89.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/265c0f5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/26fa4dfc.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/273ced06.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/280fbdcb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/2810df46.html","e331e294a10f5c6c306242ccda2569e2"],["/post/2bfcd7aa.html","b99805d6a453e7193dcc9bf662338d9c"],["/post/2ee4d523.html","f240b6459e096c21dd1bffb8540cc435"],["/post/2f392380.html","256b085787b74ba11868d88d493c91af"],["/post/2fd84083.html","a0430dcd244cc7dca7f5766927e3f789"],["/post/3090aa13.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3156b4f3.html","8d99480bd56c242da457f4bbeb60760a"],["/post/31a770a5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/31f89579.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/32dc51f4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/34a049ac.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/34f53a10.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/36bef409.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/36e5881d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/380486cb.html","01598ff9fc4ca1c3070207e6f63ede1f"],["/post/386b56e6.html","b7890073b1b9945c62b5c83af7b653c2"],["/post/38f8b110.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3a3eaae1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3a72081e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3bc7f503.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3c57c5dc.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3d51fca5.html","83df4f8ff335dc1bd3357f0e9e30b25d"],["/post/3d71c64b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3d8072b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3e6878ac.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3f0572b0.html","77c2aae5d560b0cfc41cb62ff35daca9"],["/post/3f9eff25.html","238c12ec8a83565243f01c6f4a5ee179"],["/post/3fce0650.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/409dbc1a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/40dfaace.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4123b063.html","233b93f9c18959d312c2493e693d65af"],["/post/4255f31a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/42a619f7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4309bc34.html","9f927eb1e15779e831aeb2bdfc32e28d"],["/post/44505a5b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/448da703.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/454c2118.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/454c2358.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4773b69c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/47b391f2.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/481e8abf.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4a2509a9.html","94001af198e46159e2893eee17e080ed"],["/post/4ab96b49.html","a4906d0d9a78da916c55b4d3ea0f68fc"],["/post/4b15f9e3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4c60a529.html","9a37aafce0537e8965fcb1100561d38b"],["/post/4c842940.html","dd3f4b198ec03a6839bd0dcf1eb9bdc7"],["/post/4d6a6b27.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4db7e28a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4dc7502.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4e876bc2.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4f352d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4f8fe65a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4fa396eb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/52360052.html","0c8331e926a2d85988f4c005a68154d9"],["/post/52730f61.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/531de0f8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/53729461.html","9cdf0a80e523b965b72b578ed683a769"],["/post/541f3acd.html","94a811566a5a7dc9db7e7ac8a8655735"],["/post/5555df5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/57bfde8d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/585293b8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5aa5290d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5abc6d45.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5c86d06a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5e189593.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5f2d4a77.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5f341cbe.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6028c50e.html","57c90bd5ebcf279a0c85c61439491dfb"],["/post/60850415.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/61642081.html","9c0e6b0b2956716435c97d8ba23e02ea"],["/post/62cb42be.html","7770400aa94ebffa284368bdfd29ed0d"],["/post/6501181e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/66258384.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/662b8b80.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/677d0fef.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/685bcc20.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/686dc27c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/69feca91.html","36b1ecf89f59a70685254da50d0730ff"],["/post/6aa464c0.html","e2f6bbc5b9a724b4a904eca79593a3f0"],["/post/6c71e418.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6ca1eed5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6cb7680e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6d52b9f2.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6db0d89d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6e80eb1e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6eaa7771.html","63ec54329dc5d0b46d5833f416316b99"],["/post/6f3b3edd.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6fc3409b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/703409c5.html","361d85eab88bbf70bcc35f1ca0c69d11"],["/post/7169c4ed.html","744dab81112f44535d5afab99991f48a"],["/post/72aa152d.html","947309c08a559d79503bc5654e397cb5"],["/post/73136b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7410a832.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/742966af.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/74479d01.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/749ff2bc.html","495a8e3b8b02857028cf4d126ca24ad0"],["/post/74a4286c.html","a20833a60c0ad7daaa3970951435c3d2"],["/post/75794199.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/75f986a1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/76485a7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/772fc02c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/773c10c5.html","ae12860125c9cd4b5813714617ff33bf"],["/post/792e36ed.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/792ebb35.html","9123b2f1672c592b60d80edf2a5c8a6d"],["/post/799b8bb4.html","a8cb8e0ecbf98053ceaba1805fcfd44c"],["/post/7a1fb89c.html","90437bd3eef68403dd2b99a28b0dadde"],["/post/7c50967.html","cbaabf8e4d3487ffa203fcb866e447c2"],["/post/7c86d8e8.html","9017294f0d2970bbb24dafa8fe62cace"],["/post/7d274866.html","01856646f10c93c4f95c80e325ea0eb5"],["/post/7d8289ba.html","b7f93f60123b3cbc021a016eb5821813"],["/post/7d8e4f2a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7ef8a98f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7fbcb888.html","fb2784d8abc8978dda0c75ef435e3c9e"],["/post/7fe193be.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/81d45fa1.html","1201fee7959c83668355f96c458b101d"],["/post/8573f32.html","94b765b9fd60a72c7e56d66756516a08"],["/post/859584ac.html","59eda13d13bc340a313c8b26437736ba"],["/post/86266eca.html","da364ac2a967a0b728700b6b230689c8"],["/post/86ae82ba.html","600ecf92063d6053e7c253ab11c69d48"],["/post/86b562df.html","4eb883fe452afe4f17166a6794294224"],["/post/879e9655.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/8886f58d.html","bd195968b88bfded24d32c34b0679f47"],["/post/88a7282d.html","9e1f385009413062d771da9d34b4ed79"],["/post/88e8ae98.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/89873dd3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/89d4cd71.html","f62b5aef908d403d9d4e7b2b267ae365"],["/post/8ddc8a30.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/8f9cfad3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/918fcaa1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/92687617.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9282aeca.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9305c5f5.html","d389b5863ab8099ee13d9a9a6d020e36"],["/post/94c9baee.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/98804e11.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9a9a4797.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9c28a880.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9c649212.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9d402b32.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9eb065c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9f8e212d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9fb9be6e.html","a2c8edd2d661edd2bd52fa7e36c3264c"],["/post/a1751c09.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a1cef007.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a1fc03d8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a27e9acf.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a2966b48.html","02208d86d802a60f4be3572101f2e562"],["/post/a3770b00.html","80c991074f913a50e920adba92d6564d"],["/post/a4c66bf4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a4efe87.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a7528411.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a8759852.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/aa0a97c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ab4ed95b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ab720150.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ac8faa8e.html","8472e5c078c8a3069101381f98699524"],["/post/ac92be99.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/acf6b02e.html","3ea13e84e9be61329759ad7a6a493e88"],["/post/b04c1acf.html","428b7aaa6d291dfb0e059306c1663221"],["/post/b0d6c7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/b133bf62.html","718b561c59065bbc6159d5043dc79fa7"],["/post/b1db88f.html","6aa42fa48899847e494ed0b6fd52eadb"],["/post/b3ee770c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/b6a38e07.html","226ecca51afd7f5669a63cc324ed49d5"],["/post/b8ca3dfa.html","b1af2bcefda4973efadddd16bd227274"],["/post/b94eea64.html","8ca8219f99d6aed477485ae8a1199dc7"],["/post/bb7f8e97.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bba462fb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bc8586da.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bcb02c2b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bd36a30f.html","9a96dbc55d0ef4c0874ac82a8af9faa8"],["/post/bde4b1f8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bea42f1e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/beeeff10.html","d8e2d46e658834383fca7bc6933e0ef2"],["/post/c1864474.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c293d2b3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c37095b9.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c544c33a.html","e92eed8747cd71579b8c6991051f5eeb"],["/post/c5672df5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c6d76e9a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c7fb8250.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c938bbd1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ca14c5df.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/cbabc18d.html","be786b571706e700446f6f545de9909b"],["/post/cd18de84.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/cd41dfb7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ce543259.html","4df761750c9332978d7958b877b283ef"],["/post/cea184b4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d0793265.html","b926001c6aba3ca20e6ffdd1d83273a7"],["/post/d0d58037.html","34739e6ef87379382fb438ee7d5a7d21"],["/post/d120bd8e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d2760377.html","f4af38db2d87f6527ba864ab2fe2e460"],["/post/d50b784.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d6212e2f.html","b9cf447bb6e63c958b1c071e285ca0b3"],["/post/d632e628.html","06a174a22f7f69c93d5ebd4a7506aaa3"],["/post/d6a5bd15.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d73de254.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d7435d20.html","cd3e2875c1e56e6a9765828731fa9398"],["/post/d81c5363.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d899bd9.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d9083bc4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/dbad9cab.html","30d6d80f3b3decadbd18700805d7ff22"],["/post/dc981233.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/dd932d44.html","e22c597090460b3b96202da15187a3cb"],["/post/dea65d58.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/df76d545.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e256d99f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e290dd8c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e3e37943.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e4eb9281.html","c57b380fb7cc65466ba127900adbe4b2"],["/post/e5459685.html","faa3f519c25d416dc06701171dd46ee2"],["/post/e583ed8d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e5d75450.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e6364ca4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e7058b47.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e769f01f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e78ad34c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e8005312.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e8ae7612.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e8bc7157.html","81782a02802fca30c5bb4e6925ae4621"],["/post/ea5d5d2f.html","a20a85d20ec038e0daf4120ce71efaca"],["/post/eae0b80e.html","645459b2aeb02ef8a808ae1a679de283"],["/post/eb9ab36.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/eba34497.html","36f88c82e1b5eacf05e5b00ed58b0f07"],["/post/ebe560d9.html","be6078495c2fd0c769c69ccd62521506"],["/post/f0b23c5b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f279299a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f3d9c661.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f4bfd16b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f74c511d.html","92fe3e59e32b677e77808be1e3738b88"],["/post/f7b33ddd.html","ee3f4535be4d986a8c284394d5e726cc"],["/post/f82955ec.html","a2ad6cc9ed53109ad7b8f47b1a6e15f4"],["/post/f8e4bc7f.html","34cc42fdc3d9bc2562ae1715f1a402dc"],["/post/fa83cee.html","a67995b5b42f680c7d31bed6b7c0042e"],["/post/fb2f630e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fb5efb9c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fbf7f335.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fcb9464d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fd581850.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fdc06f3f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/feaebfb5.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","93723815b34a35609bf7d8cc6e368e3a"],["/tags/index.html","4eb3aafa5bc272d3c2ff30da2ea187da"]];
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
