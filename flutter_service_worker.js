'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1d0b0c364601a636975036108f96cead",
".git/config": "34577dd22130460d5d087f8675d414f4",
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
".git/index": "5a2f5842a03687823c98f2f1fc031c64",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "637859b9cc6002561278bd991450d2a2",
".git/logs/refs/heads/master": "637859b9cc6002561278bd991450d2a2",
".git/logs/refs/remotes/origin/master": "fb48aee7b4aa510571ed5c244369576a",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/739839c6239df10737dfaf030ff74cc70c2ac5": "ccc3efc4d48df0aaaaa1b80a3bf80697",
".git/objects/04/d956d8eb8e426f8ae99fce01e7f033d61db763": "65c9b339317a926e2ab51faeed24fbcf",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/f6bb7fc6287d3cefa741fb71da0de4b67bc668": "632765bb92614165f6b090fdbf8a067a",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/0f/9781992aa621ae699a1525cf97f88df3303603": "e29ee1e9e349113b504034f10329d915",
".git/objects/13/a8e55bc9743e5409b22425c6e7192b9710f922": "efd72310f045633799b5e5fd0b7cede9",
".git/objects/15/1bc14a8bbac00486fc184b10e6a577b1955d59": "a6d5c852d1c4e5bccac33e0b667b8717",
".git/objects/15/3f9acff00c75988d578d546c909d0307216744": "75537657b7bbf7bb0e77b44927f15fef",
".git/objects/16/6f480da68c713983ed94ddaecf1fcefd94ed9e": "22dfe2e7bb499ea90c892510f33e4ab6",
".git/objects/17/6936fc189cdef7767d018df74adef75bf9bbf1": "1321a24839e35a0261182d601878f9bd",
".git/objects/18/80e2755c6b783cfacc9bc74ae6606ea756fdeb": "50de0a2b24434c5c3333c7d58e73dec2",
".git/objects/1a/30262ab749ea7a56aedd91410d8be3787db548": "3937d382bdab6506aa46c54bcf72ddc3",
".git/objects/1a/797fa624ca23b48363c4b0ab3713d0988393db": "4e934c8d46acf318cbdf998a3653587b",
".git/objects/1d/f7510c91972142f471ac269e33eba39b36e2c2": "5035f4961d7ffe4c935f3918bfc7fbbf",
".git/objects/1e/5af603682d4441240ff72bc3ab5857b0c53b7d": "f476d96e529eb0a7326867a20c1caedb",
".git/objects/20/133939f0597a3929fb50b82503be3ba97aa683": "aa8e8a45a78c8cfb1dadd4c972452b3a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/a860fd336891af13d1dacdbdcbd25b1ee210af": "4756b5b1b8e00c3b2d5823a56c4819bd",
".git/objects/24/ae9549135f275d15b60f89e690ba67ccf9ed46": "0f87846cae6e49401574c5a7a489c64b",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/53a15f1b2194193015680746fbcddb5359ee60": "3fbadaadd32ce07a489e29b581680d03",
".git/objects/2c/d12a31c34bea9df341e976ec624b98e61fd5e0": "3fae7da9c84515dffb1870c272e93d55",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/852067dd9f0590f61226350a7d1f048ffc749d": "34783d8f172cbabcdafe86e8f0cc1feb",
".git/objects/2e/b0c4da83e49b77a4e3af2e7e39aab0f620433c": "9c8334282d8854ac672a20d7cea5de06",
".git/objects/30/e27184aefbcd354443d8c535c11e81f03f7f15": "56755a84627700a8c5a93cae971c06c0",
".git/objects/36/bbc6a52b8246617f1afb9d3c12d85d650f854e": "c7788fdb09d377e6f476bb2dee1c71d3",
".git/objects/36/f0c07d250df0b87eaa818a3c8b6e719902e886": "47adf654918ce128071596997cebd56c",
".git/objects/39/57ee7cd803c159dbb430f7437113c261f9f66d": "ffded3be1fac569d534f534e0e26580e",
".git/objects/3a/605c132eb86ce44f58cbe508ef8cf81b932da5": "81e36b682e3541e27ecbe24b7129525e",
".git/objects/3a/748f208e6517d23e974351eeb68e39f4df0ed1": "96c29fe6fffbe8017b6043ac2a08fa31",
".git/objects/3b/0bebbdc61f944e45da0700a554679f659ce8f6": "ea80d0bc13fd82935f6ba30aab316c8b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/5b3e9fdaacd7ff6333fb7f8df493e0040832b8": "1ccc1c09b92807143229e2edaa5f7142",
".git/objects/42/f7c0247575a3dbd262c3b5dbf34f26125d9434": "f8ad902899fb773fd680a67e7db1969c",
".git/objects/45/63c9798c273ad98c8813254097a8a42c602ab7": "3f308f036cf9c72937c309ff747aa7ef",
".git/objects/46/515f2024046e5649e12cc6f20b0eeda1ae04be": "2fd29a04b6727d826895a3de03508f1a",
".git/objects/48/a0efd198c47771c6eb9284dd9fedc227cf8595": "c14d61176723815535b06af846d46efd",
".git/objects/4c/6ce04b51d18da60830ac6b7dc08c68a98e5c2c": "4dde45829ae566396be9357b3bae002b",
".git/objects/4d/20cf79426f8e27705eb3f2aef016249cab5477": "3402ac2cd62c60a8ab19b586bc218183",
".git/objects/4d/333e86cbb9462150a4a3cfed11b819ef0f7d6a": "0ebeaa2a6c856828da617ce862f16b81",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/575a80948192684a2648712c81de7ae0217f5c": "9e7e4032bd00e0fe56c7983af0e5760c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/0a4f5b921115fd45874d8540097fb6e601fc23": "cc005d728f65475985be121b159a22c4",
".git/objects/52/ea54049443d9dc7802b0ff63b378f343b036ef": "7c472f910c593dfac761907d0c010a43",
".git/objects/54/c18d5a199767288d1ef2bcacd9b9706d40911b": "0b61b3b47b1c2f9f5333b02b6927d4c2",
".git/objects/57/aa261dda4d1853a6417f9e944c465099be0f83": "efdfe85cf5a382e052d919772a59aadd",
".git/objects/57/f40d8ce17a991699f8ebdb3bb6b947e2d145c6": "070f0ee0cd4ea8658e87c1d392bb7370",
".git/objects/59/5de0c22c33e8901ad819d37a32c6808ddd99b3": "01abff23ccb1d782456b8847858bf1ed",
".git/objects/5a/283e38bb9ec359400b3d899fe9a532d7fa769a": "d93ee790ca94240ff8d4ea2240417c8f",
".git/objects/5c/94783a1613c1df7d1b48d3f54e19cdce1a5012": "92c5082c261855a78d6f4b40890c9f94",
".git/objects/5c/d34a5618ff1b757fcd05d0df92bf938b2f6d67": "3d21581803667c908197e604be927cfd",
".git/objects/5f/9a2559f7a57217f1508dbc2f9961d111656cba": "5b88d58944291507e25edeffea28bad5",
".git/objects/60/d6ea105ce09339b2955fcadb5971cdf9d42c3f": "625729ef44dc996acb84c69b88b002be",
".git/objects/61/cbafb3fe03d2365e438fcc4377de5876ac723e": "2464ee85c596cd13f396bbfe5a3bc96e",
".git/objects/62/2821dd187f3a27e503ba0a75b193a2a2a34ebe": "3064e747fc46f444cd5c55b71e46bcf6",
".git/objects/62/6a8c057276409b5ecf653f954f0146d39979f7": "8ca5b88260d963068a4345e511950261",
".git/objects/63/9529e247a9ceeb4cd389680b1ea61b75735e54": "d11ca892e89f5aa608d747417ccaddbb",
".git/objects/65/0d09983975e2adf1f8cb60e3b3339ddebbf8b5": "8bed5cb70f0c79e6ac7890539a4946ef",
".git/objects/67/64b6e72de1f05edf347b2f02f5875c05462bc4": "ac28b3e46c2235178524d3d50370e3a3",
".git/objects/67/88dd4432d6851bbcc0e09b8f21b34896c18ede": "00f7952258bada43adbdbf12bb76e5f2",
".git/objects/69/2706972d349f115c71688af74872a10779ac0c": "8b6ffba768eebdfb1d8a1d25700f05b2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/d0cfe5297063ae5cc4dbc31989c218fd48b413": "8fddac9d1da2901037f6a1afe18261ce",
".git/objects/6f/195192d430bd24da8a2e5514d9ffa08190fe10": "897c083ad6850dc0643d1d576315c51d",
".git/objects/71/c33a5cecd6da6deae48f0633f8367ac2d54451": "453a75bd0e8321e214332b2b25c542d3",
".git/objects/72/e64f6e1784173907e1c11c56658438c8aa3421": "3c46e040ac36e4f96dbc3383e1ecc219",
".git/objects/73/6ff7c3b1483081322cacc7c64e0995b52d8af6": "1624813f8afc350e67d083422dcae10d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/86/7830dc244f76f1390355ac0237a72006c22e21": "f8d1ac1f2c2df86650322e29bd206c64",
".git/objects/86/bfcfa2c46c346ffded0ee1933fd0684b45fb11": "94ba1388b509ac7e9bdea86e57c54baf",
".git/objects/88/049a459e25369a85198675052b836151ef8fcd": "061d0cef87113732aadb9311830de7ac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0bce1ddeaf8b37950491dd45fad087129e638f": "aa476481acfa1ce5dc3774d0f61049cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/c167cca2925df0f474973b5d3f3b573782153d": "9dde63b8c03b1bb9081021a5afe5d80d",
".git/objects/8f/4452e5a59bd335c701fad22d415000ed7ac765": "eace6ea194ed0cb6a5ef868456780888",
".git/objects/92/a440fa5013e8ac3f7ff9c9411362354097cba3": "29ad2800c38d18cb54158303ce83e46d",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/3dcafcba1bd55faf1bd66f9d743fa708d6be66": "a55c2d7e9a57ffa6bdb203dfbd4aaae1",
".git/objects/99/d8558feef9bdb13b9cb187f689d2053096f4b3": "562fd03c1b3c1dca41da4942385295e9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/6e13c566b10f928d1809eda968a6259323e925": "f88bfcd46092184a57d26d6e0da949fa",
".git/objects/a1/a040116dd6ccd276e12bbd954c6cb440a2b10a": "56a5967862c9ece7a8a80e15c38cccb9",
".git/objects/a2/953fca0dfb35c2ed7390198f87e924ab760c9e": "f4e3dcc5be5c83fd4e15cd65b26d3d69",
".git/objects/a5/5f4ce8e8237b22972463ef824af53b0fa8a4e6": "658532b60711fceb924a3fdc61fa890f",
".git/objects/a6/e1098c7d41cd3fc6fcb1019225d2e52e5a1c75": "99b806776f34ca9dabf4ee23895a7a93",
".git/objects/a8/89eb160f63b898db11c580a8a880be3454d280": "24186220380e8b55051d70d264dc33d2",
".git/objects/ac/b496bcbe3449405fd5f6a62bcd9e9b8ac12d4a": "811686ef9a9ca64e285551751bac1eb0",
".git/objects/ae/7cef62e731fdd8bcea6cf6790c37958633a9ce": "f93a842b63f828df29ce056fd4ddbb3f",
".git/objects/b3/1f12da7889f18eaca5b50476a68635e100abc7": "6b042cce4b2f931ce52569d7fa69e58b",
".git/objects/b3/3fe529ec9aa15d7d71a395f973e4ef14a3814b": "b97d561a576b03702d62b90bc1b5dae8",
".git/objects/b3/ce2de7beb55160f0deb62bce4026b5fba4bf3b": "3e9e3bbe29348637bf9cc6d9d672fe96",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7d91c93eb07ab357f7037c49ffe063e4c086a1": "9d21b0ea8290718ca93f46f2ac1c4326",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/015d78e1bdf36f5820af44d29fb941849e1298": "93021c82107c5ec7b45a1ee9c9a2682f",
".git/objects/be/f87d22b2eaed47ce364cd3d63ea2be24d4ea23": "49bfdb173065d2532d4da2790b51406c",
".git/objects/c2/1479ab7086fdce252f57b3d440448d30529842": "9879797fb53129c0712b75fc87e2feb3",
".git/objects/c3/bc07b9f57d41bce0dce88809be0aba7b5808e4": "85a95e0fc061319877c2d32a2c95eae6",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/9e659fc0abae33e5a73f02e7cfcdb0378c8d78": "12d730ac5973385e9c19147ab29fd1f8",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/eb79e07b9b2cfa276f91a14cf107ce30823a9c": "8d9c19912c4971f2f21e5b23542b3a9f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9e0645f89532a28137f33da35c5213a61402f3": "398cc9d69cb4abdf447bda23bc9122ed",
".git/objects/d5/c71af6a9236cff3e506e8d43976291a12c99d8": "e8c97e1d4a82f7c92a837d130bfee311",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/b0e4e5823282168797182d79afe0001a3ae555": "fc2cba60dc12ffe820bbcb9cb428b913",
".git/objects/d7/ff3977465d09f7760bc324efce29923c56b95b": "7e36c2a8a1e470432c288b42786b8882",
".git/objects/dc/864afc49b0b8060141e6ad909fc16d79963ad4": "a861e3acf1bab81e894ffd87fa234d53",
".git/objects/dc/cd19a19204a5c9e8d116a45c1f249dd831b0cd": "9763440f2cded0f8a4bf3eff674c3d05",
".git/objects/de/e27ef3198fdd28b818cd720e4869fa05d98fa7": "4abab16a0eab4f0f1bdc649432ba0dfd",
".git/objects/df/36d58382c1337de4205700c15461823f12e693": "488ec2fb0a78c59a207b8ae4f50fbf84",
".git/objects/df/dc7589103509eca55a87251dded8f1de5185a6": "e326ccc30354e7b135823e41139a58ba",
".git/objects/e1/0668c4f69662ce0ff297bcceec3fd5e363e019": "56a48bce4310c0f8c3083c479e46a80a",
".git/objects/e1/519c625de89dd00b789a998f8b44b0b99b426f": "902a0c2de7bddfeee5dd709777e02b60",
".git/objects/e2/32ee42fbff1df13956ed0a00bb136f5dab7a7f": "7bc2ddefaa2c3d580ae9aa3e53ce4f60",
".git/objects/e2/c75d5ec25ae6af42499267526265c29c7a96fe": "4b9075949865979b60c08739061f48a0",
".git/objects/e3/caaba093d76dda8de1ca33249d54d53bb01511": "0e03dd5a21a94bed08136d4fdba3a6a3",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/933415055b2ba57ae705e25e3c52829a41596c": "eb1602006bbaa6029c4b3464dc3fdaa6",
".git/objects/e5/4bf657542fa4f1ae0beda67fe55411db8642af": "f2890a54f9fd8ab11dff631535d98f6c",
".git/objects/e6/ba2d7cbdffcd6a4ef6dbaf66c8ef997965c1d2": "38afa7bf9aa038ad6761feb88bcacd98",
".git/objects/e7/74ddee1cd246237628fbb33f587b868d42819e": "0fb2c4f25a11f81403626b9a4c38c5bd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ef/5c2203b3def002b3e7a6a79977a11340aef0da": "2517c49803b8a5d58355201bfb881a0c",
".git/objects/ef/a09d4357d485e3d019e3fd9ea0daeddefd48c1": "e43fe6b7bb865a32896e8bf2c3105967",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f8/c8794014bd3935b86dc83c9075f6b9d1e3c80d": "45b4faf0437030fd135a1b9a74ca50bb",
".git/objects/f9/1ceb22e947496ccda1b14e55f269e6396f4147": "9b0701d3f18d579c6e4a0aab92c96148",
".git/objects/fc/2e2f793f8cbdef1a54e6d4af3bf12a1e827413": "773fcd4b006d8e17edb94d7b92bcb813",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/351c30ff2da4b38f49d9f82056bd4ef4286e38": "85e5f8f28aa97181070d1efe48c9f187",
".git/objects/ff/ca501e6e58bd6982c38bb4a6ee37b6e0ca6b0a": "e74df5ef1ab349b8dfa05517b17e45c0",
".git/refs/heads/master": "885e524a9096a0bef39e538a22bf4e59",
".git/refs/remotes/origin/master": "885e524a9096a0bef39e538a22bf4e59",
".idea/caches/deviceStreaming.xml": "1c8cc71281da1990416899ae4e826627",
".idea/misc.xml": "a4b7aad4eb88e478b3ebc4535e15b657",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "fd1e3a9bc5af40f46900a411b728897f",
"404.html": "0df29cc88339a8964ecabf844830a052",
"assets/AssetManifest.bin": "91c025bb7ac070a0d220fd4e8b1009bb",
"assets/AssetManifest.bin.json": "f21f0243fafe65c57759957bd6bc6299",
"assets/AssetManifest.json": "060ad49863d0ccaed167c669aa085ee3",
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
"assets/assets/images/onboarding_dots.png": "10acffc780d4604149dc59e499f0a537",
"assets/assets/images/properties.svg": "25d2a09bd2c82041c577702785bb0bf3",
"assets/assets/images/properties_bold.svg": "aa127b8b0615a178ccd83d2712836929",
"assets/assets/images/reports.svg": "a427e6552ef9ccc83f4eeb4c93c568fb",
"assets/assets/images/reports_bold.svg": "fa745533826fb25922c2654bd3ec2949",
"assets/assets/images/sad_face.svg": "e658294e8e09a9ddce4a0e16dc53fbae",
"assets/assets/images/tiktok_icon.svg": "99aa7276cbcc0bda51055f6c098f679f",
"assets/assets/images/whatsapp_icon.svg": "ac754231f5931c5ab981da539052961e",
"assets/FontManifest.json": "37989313ae6e01c21cfe900d1ef1fc7a",
"assets/fonts/MaterialIcons-Regular.otf": "970729b8d8301e67e9c6faae0d3567ea",
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
"flutter_bootstrap.js": "fb423904ab84884deb7543a0d3fde955",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f90ec4e769bb2feab226a5055da8bd3",
"/": "3f90ec4e769bb2feab226a5055da8bd3",
"main.dart.js": "e67b068c21eb745bd225f24b86b0bf0d",
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
