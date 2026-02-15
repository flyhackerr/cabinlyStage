'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "165e87a0673acd014b47061b4f7b0296",
".git/config": "d4ded50d4357981df6b386f140c88bc9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e57e6bb335fe8f6a5a4dd4ababd7d889",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f1c40e88d3fd9b85d7dd1a5d3f395a9",
".git/logs/refs/heads/master": "a05125deac4c69daef5cab10c307763b",
".git/logs/refs/remotes/origin/HEAD": "48644a76d0d572bfae7bf03d530809e5",
".git/logs/refs/remotes/origin/master": "015a7b411bfb30cc1805460505021a34",
".git/objects/03/4e969e8a15a449f2831df6662e93ffd34f61fd": "f23040a50a50234db690d1ac7c40eb9d",
".git/objects/05/64f1ba8364067b4b4c38bac3a6d72e03f8bfa4": "e94a1d89bb818175c94054b526df272e",
".git/objects/06/348ae93ff008f231bc931c4e36b9295168b74c": "e428b443c27245a59368f6b2fcd60071",
".git/objects/08/c3445f05b8f800b5150944883bc3b0ab53a93a": "0423091e0834ff1f16128c08acad45e9",
".git/objects/0c/96110815d9fbcc34eba700cf5110f38ae2269e": "ca580965ced7b43ee189bf3fd7803c17",
".git/objects/14/405741d57a05f96acf1c1c86f085ceb906e833": "37d9b5d1691695b7dc29351e99245393",
".git/objects/1f/8a2da09e87f8bd510e7384e4c59bf8ec7a5078": "ae332153d06d3178f0d4def329c2817f",
".git/objects/21/3e5516fc8c112823850715e68bfc4f18d05726": "8b7e51f7b88a11004d6a9e6eb9df6e65",
".git/objects/23/d454290eaff1bee4473b9a3a3097c70646fda4": "bb3a1c4ddeceeda9d65a3496f77edb7a",
".git/objects/30/635c3810cf327a4ccd5a52632c290bb688dc64": "58918dd93aead00a687980446e882748",
".git/objects/44/8eb078747cdf3282df7e81afad21cb4a34f4ff": "647c31c488f1a3c0aad6eccbfd76e205",
".git/objects/49/5618d97da7a8ce42aaf8a7f2494ce852e981d6": "b2c2a2bce5464bda530c63ea4697533c",
".git/objects/4b/3cb8a359669183839d90fd409eca4740dc240f": "284f77d7a9f20a72719128bbdbc344b9",
".git/objects/57/aa261dda4d1853a6417f9e944c465099be0f83": "efdfe85cf5a382e052d919772a59aadd",
".git/objects/5a/e5821e837828d0c380ee75f536dd2badbce8ba": "d2a849c59b032afda5d55435f0e43a51",
".git/objects/5c/94783a1613c1df7d1b48d3f54e19cdce1a5012": "92c5082c261855a78d6f4b40890c9f94",
".git/objects/5f/7bf2a3d0ad1f72dd5b5a7f077138c9b09aedd7": "da5841bfb0772dbffc94be56430a06e3",
".git/objects/5f/a2e7eb16bdc4849fa75ecd8972ddd422f534bb": "8be87160f975ecb27447dc5b7671df5e",
".git/objects/63/9529e247a9ceeb4cd389680b1ea61b75735e54": "d11ca892e89f5aa608d747417ccaddbb",
".git/objects/69/2706972d349f115c71688af74872a10779ac0c": "8b6ffba768eebdfb1d8a1d25700f05b2",
".git/objects/6c/c87ec625d31de1d19b4ef59082a380e4258377": "793107fa5de47c31d2fba573db56e6b7",
".git/objects/78/fa0171846540b76a1b9f5b921bbb366edc0732": "268486a7387df93196fd18587f5119ae",
".git/objects/84/26a33d8fd1dba88a1ee58210af3c01f4e4f731": "fd4a63bdab80edda7565034006f3c2aa",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/98/3dcafcba1bd55faf1bd66f9d743fa708d6be66": "a55c2d7e9a57ffa6bdb203dfbd4aaae1",
".git/objects/98/4c7940a17b02c09f0b222a5d402b35bfd50aef": "d07a92a5a8e99d5f90acabe515e34afa",
".git/objects/a4/0bcb7b8db2e72413064b97937d3372d2b77ecb": "5f6fd67f04d437577899463f85a6ac88",
".git/objects/ae/b78215a6d876d51544646c7bcdac71bff5e57f": "e8d2b73cbadacc46b4c321bfe4496cc9",
".git/objects/be/015d78e1bdf36f5820af44d29fb941849e1298": "93021c82107c5ec7b45a1ee9c9a2682f",
".git/objects/be/dd8345bf2a75f453cca4431fa960165010a0c3": "4ef63f1e609131dc8002b4a6f5989410",
".git/objects/cb/bbb50ad88451c67c720bc178ac9abdb83a0a73": "bdf27ecdff2e824de7f7b4313159d403",
".git/objects/cf/226d1666fd95a9d893168fd25017fa5511b759": "b9398cd1f7276e3b5c651e357339b573",
".git/objects/d5/2a191954d9aef0ecc29967bf0e4e5cc489ee9d": "eca1f4f64ca5b95d44d1428502c97f1f",
".git/objects/dd/a97c26b17e98bc5b9a3fec3816d5eeca7aff37": "c93dea5d35d688ab57082da9eba06f17",
".git/objects/e4/9047b83adaebb9dfcbf50272cce4ab835a4757": "a501d2917e1fcc561699de2b4f1da12b",
".git/objects/e6/8d02cf76ab82fcad7bd150caec8449163b4f30": "5d5511205bf42c527265e06a04655013",
".git/objects/ec/337ad9771f3a85a4154d08d0dd22376307712b": "a03f86f27ea8c2e4bed78b6a64b9e4ac",
".git/objects/fd/5178832a7dd127a2e565762f70ac35504726e9": "4d1286143961268f956503a41dfdad21",
".git/objects/pack/pack-9bf837ca9f0f558fab395d7d8cb5f56ab14281e4.idx": "fe50c4d94b4c50527bc5e2a3860b195f",
".git/objects/pack/pack-9bf837ca9f0f558fab395d7d8cb5f56ab14281e4.pack": "348f3ce10191954c56b9c7e779e8f1a5",
".git/ORIG_HEAD": "609b61b7ba670a8fe94617e316b18b9e",
".git/packed-refs": "0155651a0ea36fdca884f7cbf185ac3b",
".git/refs/heads/master": "1bb0e37e9c5a63caf8370ec3750373fb",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1bb0e37e9c5a63caf8370ec3750373fb",
".idea/caches/deviceStreaming.xml": "1c8cc71281da1990416899ae4e826627",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/workspace.xml": "aa80c452368c500c9d7e27280cf8f5d8",
"404.html": "0df29cc88339a8964ecabf844830a052",
"assets/AssetManifest.bin": "76f31e8c84f6e00241ad0c9531cbb2c8",
"assets/AssetManifest.bin.json": "a2446b400c51a21373b93f4387320c5d",
"assets/AssetManifest.json": "824f30f40fe77c8b191ddbff3a482eb7",
"assets/assets/fonts/geist/GeistMono-Black.ttf": "16c56e470604ebb5a02d7b2f66196780",
"assets/assets/fonts/geist/GeistMono-Bold.ttf": "e1ef50ccb8e39e98118a55062d8f6a3b",
"assets/assets/fonts/geist/GeistMono-ExtraBold.ttf": "d6a00353569a2f426598ccea13d5637d",
"assets/assets/fonts/geist/GeistMono-Light.ttf": "4eddcaa71fd84b606601cf426403eb39",
"assets/assets/fonts/geist/GeistMono-Medium.ttf": "28ef5d7e63e899b6a1329964148cb9a2",
"assets/assets/fonts/geist/GeistMono-Regular.ttf": "f84c9b172609157d69b10f78d5a27a94",
"assets/assets/fonts/geist/GeistMono-SemiBold.ttf": "f4f6035c0e9568c022f8c71f8fc68df6",
"assets/assets/fonts/playfair/PlayfairDisplay-Black.ttf": "90bd8fc6f4db46013bb128526ae4014f",
"assets/assets/fonts/playfair/PlayfairDisplay-Bold.ttf": "f083d3d233c60977fde5d857afec24e8",
"assets/assets/fonts/playfair/PlayfairDisplay-ExtraBold.ttf": "c474656eff24a077b81bb584c5960b04",
"assets/assets/fonts/playfair/PlayfairDisplay-Light.ttf": "9116faa12b7016e93277294c7a0735b6",
"assets/assets/fonts/playfair/PlayfairDisplay-Medium.ttf": "5a11632ed293fcfcc40970c2b22c858f",
"assets/assets/fonts/playfair/PlayfairDisplay-Regular.ttf": "9116faa12b7016e93277294c7a0735b6",
"assets/assets/fonts/playfair/PlayfairDisplay-SemiBold.ttf": "f0713720c230460d5430d96d46f5cd28",
"assets/assets/fonts/switzer/Switzer-Black.ttf": "181e68c63c8c16004947eb5993e96f7a",
"assets/assets/fonts/switzer/Switzer-Bold.ttf": "2abb8be996659577e2efc435de15c00a",
"assets/assets/fonts/switzer/Switzer-ExtraBold.ttf": "babd2568be461c98cbd3512c35b0b232",
"assets/assets/fonts/switzer/Switzer-Light.ttf": "069e8319b69c48899ddfcf52b8583952",
"assets/assets/fonts/switzer/Switzer-Medium.ttf": "31c28fa4958697cca381e574f085bac8",
"assets/assets/fonts/switzer/Switzer-Regular.ttf": "964c914859eeed4e54b427b18cc1af4b",
"assets/assets/fonts/switzer/Switzer-SemiBold.ttf": "1d5d2303389c66a6c51bdb03877c8fd0",
"assets/assets/images/airbnb_logo.svg": "8076f8ee684295c1c6651dc62aca1366",
"assets/assets/images/ai_bold.svg": "11862df835a4fed56180eb9b60e639f6",
"assets/assets/images/arrow_down.svg": "f34765278f563922d6eeb240a53c70a6",
"assets/assets/images/arrow_right.svg": "999dc167f5463be939691fdf2db62a19",
"assets/assets/images/automations.svg": "9791c65db4026bdaf0b8a8d8ff0ef7d1",
"assets/assets/images/automations_bold.svg": "c9a77f4ddb7fe6220c9539161d49416f",
"assets/assets/images/bookings.svg": "0784395da8ab85754524f1376d370b3f",
"assets/assets/images/bookings_bold.svg": "1151d7d820e947bb915c286de9939c19",
"assets/assets/images/booking_com_logo.svg": "3b09de6726f1a8fc1d2d2c0bc671f7b0",
"assets/assets/images/booking_connectivity_provider.png": "389463ec2d2c47dec2696882f76b6999",
"assets/assets/images/booking_listing_code.png": "e315a1d3f0847a6f4a5936d25ae8baf1",
"assets/assets/images/cabinly.svg": "eb9b161915ea9a55f7545908b17676b7",
"assets/assets/images/cabinlyLogo.png": "62dac397c5da67c141c64c69cb3e120a",
"assets/assets/images/cabinly_logo.svg": "44d42194627561b5af6c60de017c7823",
"assets/assets/images/cabinly_logo_text_black.svg": "b637a39f332259248ed93a0f0ea36f1f",
"assets/assets/images/cabinly_logo_text_white.svg": "ee75229369681195d6fc1505761c244b",
"assets/assets/images/calendar.svg": "ba777e7e084c95f92fbab626989fa5b0",
"assets/assets/images/calendar_bold.svg": "8067bcd1a31ae4dd14bb143424ea2ab8",
"assets/assets/images/check_icon.svg": "9b09e820319baaa7dd3c33e878417492",
"assets/assets/images/direct.svg": "24cc61c044117ee7064840a163bc0009",
"assets/assets/images/direct_selected.svg": "032183b4c4e8109e65775355ceecad21",
"assets/assets/images/facebook_icon.svg": "0b4e4577ea7b898828dfec1b092c730e",
"assets/assets/images/finances.svg": "7cb3a04d110b7106566ed6e6e8c50ac4",
"assets/assets/images/finances_bold.svg": "3dd865b09f7123186acf5a1314b47494",
"assets/assets/images/googleIcon.png": "c4c906d9b5528b8e9be1b160a8fe3ab5",
"assets/assets/images/home.svg": "32e07518958c3cf4abfa53a1ad98225b",
"assets/assets/images/home_selected.svg": "7ad6c01511f94f88ce0c17cb674aa17c",
"assets/assets/images/instagram_icon.svg": "9f56594df321da7ac2706b0a0205925b",
"assets/assets/images/leo_circle.svg": "eb8426609331d13ac3efdf2537683772",
"assets/assets/images/marketing.svg": "a08e51650bcf72efb8e9ed88febfb14e",
"assets/assets/images/marketing_bold.svg": "1b472889559b10447d2b95d6eb2ac6f4",
"assets/assets/images/native_splash.png": "af5dff492f80cc31d851751cf77581e3",
"assets/assets/images/properties.svg": "25d2a09bd2c82041c577702785bb0bf3",
"assets/assets/images/properties_bold.svg": "aa127b8b0615a178ccd83d2712836929",
"assets/assets/images/reports.svg": "a427e6552ef9ccc83f4eeb4c93c568fb",
"assets/assets/images/reports_bold.svg": "fa745533826fb25922c2654bd3ec2949",
"assets/assets/images/sad_face.svg": "e658294e8e09a9ddce4a0e16dc53fbae",
"assets/assets/images/tiktok_icon.svg": "99aa7276cbcc0bda51055f6c098f679f",
"assets/assets/images/whatsapp_icon.svg": "ac754231f5931c5ab981da539052961e",
"assets/FontManifest.json": "37989313ae6e01c21cfe900d1ef1fc7a",
"assets/fonts/MaterialIcons-Regular.otf": "a5dd13331d252d133db3e5f36b259e8d",
"assets/NOTICES": "c13b95036c7b5566be79268ec7589a9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "19afb3bdcd36e39f7b12a0ee9b0b12af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f90ec4e769bb2feab226a5055da8bd3",
"/": "3f90ec4e769bb2feab226a5055da8bd3",
"main.dart.js": "4799b21bcb7ead537d9b8ed27bad7bdc",
"manifest.json": "d97b026c0cd4759fd17af576ba0c5123",
"splash/img/dark-1x.png": "0cb7f0054f90e28f26644e630c748045",
"splash/img/dark-2x.png": "570716d1b27655195af808aabcf0a30a",
"splash/img/dark-3x.png": "1894fc41271e8288dc526455ae21ecf8",
"splash/img/dark-4x.png": "4ef33422260f55dea41f8a412696f893",
"splash/img/light-1x.png": "0cb7f0054f90e28f26644e630c748045",
"splash/img/light-2x.png": "570716d1b27655195af808aabcf0a30a",
"splash/img/light-3x.png": "1894fc41271e8288dc526455ae21ecf8",
"splash/img/light-4x.png": "4ef33422260f55dea41f8a412696f893",
"version.json": "0397877b2722af09eb86216e2ea572e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
