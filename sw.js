/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/baidu_verify_00eWIaJMwK.html","5f7bf44d4cec9d6f1f5cae332e6fc7db"],["/baidu_verify_ZzhwBFUe1V.html","3bc3ff344551c928998df891a487473d"],["/baidu_verify_dw73Nh8OEw.html","080460054b191400c6b02e44052c2db5"],["/batb.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/friendlink/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/googlea873f713657fb5dc.html","3a9c781202c9126eca636ea55579d859"],["/index.html","fdeb54138e6cb8ffb6592a73c722c434"],["/post/1233e925.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1448d9c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/16fa37a4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/184fc5c7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1b7db6f0.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1c52564f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/1dc46f40.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/222505fd.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/23f72a93.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/264a9c89.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/26fa4dfc.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/273ced06.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3090aa13.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/31a770a5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/31f89579.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/34a049ac.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/34f53a10.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/380486cb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3a3eaae1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3a72081e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3bc7f503.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3d71c64b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3e6878ac.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/3fce0650.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/40dfaace.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/448da703.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4773b69c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/47b391f2.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4b15f9e3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4d6a6b27.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4db7e28a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4dc7502.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/4fa396eb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/531de0f8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/57bfde8d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/585293b8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5e189593.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5f2d4a77.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/5f341cbe.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/611dd122.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/62cb42be.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6501181e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/66258384.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/677d0fef.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/685bcc20.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/686dc27c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6c71e418.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6ca1eed5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6cb7680e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6d52b9f2.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6db0d89d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6e80eb1e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6f3b3edd.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/6fc3409b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/73136b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7410a832.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/742966af.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/74a4286c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/75f986a1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/792e36ed.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7c50967.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/7ef8a98f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/879e9655.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/89873dd3.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/8ddc8a30.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/92687617.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9282aeca.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9305c5f5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/98804e11.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9a9a4797.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9c28a880.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9d402b32.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9eb065c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/9f8e212d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a1cef007.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a27e9acf.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a7528411.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/a8759852.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/aa0a97c8.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ab720150.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ac92be99.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/acf6b02e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/b3ee770c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bb7f8e97.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bba462fb.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bc8586da.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bcb02c2b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bd36a30f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/bea42f1e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c1864474.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c37095b9.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c5672df5.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c6d76e9a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c7fb8250.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/c938bbd1.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/ca14c5df.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/cd18de84.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/cd41dfb7.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d120bd8e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d50b784.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d6a5bd15.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d73de254.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d81c5363.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/d899bd9.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/dc981233.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/df76d545.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e256d99f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e290dd8c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e583ed8d.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e5d75450.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e6364ca4.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e7058b47.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e769f01f.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e78ad34c.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e8005312.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/e8ae7612.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/eae0b80e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/eb9ab36.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f0b23c5b.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f279299a.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/f3d9c661.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/fb2f630e.html","d41d8cd98f00b204e9800998ecf8427e"],["/post/feaebfb5.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","ffe758fe0e0a56dc84e4ac4698e20f87"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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
