// la,lo,gantry
const gantry = [
  [39.851931,116.633226,'北京京哈台湖站-北京张家湾西站1']	,
  [39.841955,116.662268,'北京张家湾西站-北京京哈张家湾站1']	,
  [39.824582,116.743808,'北京张家湾桥-北京漷县站1']	,
  [39.802249,116.823085,'北京漷县站-北京郎府站1']	,
  [39.80321,116.860604,'北京郎府站-北京西集站1']	,
  [39.799481,116.894552,'北京西集站-北京京哈高速互通1']	,
  [39.799748,116.926289,'北京京哈高速互通-北京香河站1']	,
  [39.799891,116.932818,'北京京哈高速互通-北京香河站2']	,
  [39.800217,116.933697,'北京香河站-北京京哈高速互通1']	,
  [39.79976,116.895584,'北京京哈高速互通-北京西集站1']	,
  [39.8034,116.861528,'北京西集站-北京郎府站1']	,
  [39.802572,116.824282,'北京郎府站-北京漷县站1']	,
  [39.823888,116.747387,'北京漷县站-北京京哈张家湾站1']	,
  [39.842004,116.663621,'北京张家湾桥-北京张家湾西站1']	,
  [39.851587,116.634457,'北京张家湾西站-北京京哈台湖站1']	,
  [39.742478,116.581185,'北京京沪马驹桥站-北京京沪采育站1']	,
  [39.600783,116.768876,'北京京沪首环立交-北京京沪廊坊站1']	,
  [39.582638,116.788768,'北京京沪廊坊站-北京京沪市界站1']	,
  [39.579841,116.79309,'北京京沪廊坊站-北京京沪市界站2']	,
  [39.576697,116.798848,'北京京沪市界站-北京京沪廊坊站1']	,
  [39.579328,116.794348,'北京京沪市界站-北京京沪廊坊站2']	,
  [39.600015,116.769851,'北京京沪廊坊站-北京京沪采育站1']	,
  [39.741901,116.582514,'北京京沪首环立交-北京京沪马驹桥站1']	,
  [39.700085,116.454067,'北京北野场桥立交-北京魏善庄站1']	,
  [39.626603,116.470983,'北京魏善庄站-北京安定站1']	,
  [39.605034,116.472435,'北京安定站-北京大渠南桥1']	,
  [39.570552,116.487903,'北京大渠南桥-北京佃子站1']	,
  [39.555385,116.490194,'北京佃子站-北京礼贤站1']	,
  [39.551595,116.490804,'北京佃子站-北京礼贤站2']	,
  [39.550238,116.491579,'北京礼贤站-北京佃子站1']	,
  [39.569429,116.488824,'北京佃子站-北京大渠南桥1']	,
  [39.603855,116.473294,'北京大渠南桥-北京安定站1']	,
  [39.62472,116.471078,'北京安定站-北京魏善庄站1']	,
  [39.699069,116.454642,'北京魏善庄站-北京北野场桥立交1']	,
  [39.833063,116.212043,'北京杜家坎站-北京赵辛店站1']	,
  [39.801252,116.201444,'北京赵辛店站-北京京良站1']	,
  [39.766297,116.155671,'北京京良站-北京良乡机场路站1']	,
  [39.750329,116.135319,'北京良乡机场路站-北京阎村站1']	,
  [39.71681,116.109442,'北京阎村站-北京梨园桥1']	,
  [39.690976,116.097354,'北京梨园桥-北京窦店站1']	,
  [39.638754,116.078013,'北京窦店站-北京琉璃河站1']	,
  [39.591198,116.053961,'北京琉璃河站-北京琉璃河南站1']	,
  [39.587101,116.049954,'北京琉璃河站-北京琉璃河南站2']	,
  [39.587043,116.049899,'北京琉璃河南站-北京琉璃河站1']	,
  [39.582842,116.045852,'北京琉璃河南站-北京琉璃河站2']	,
  [39.637872,116.078682,'北京琉璃河站-北京窦店站1']	,
  [39.68552,116.093259,'北京窦店站-北京梨园桥1']	,
  [39.711302,116.108897,'北京梨园桥-北京阎村站1']	,
  [39.741333,116.122682,'北京阎村站-北京良乡机场路站1']	,
  [39.762271,116.152017,'北京良乡机场路站-北京京良站1']	,
  [39.787737,116.195623,'北京京良站-北京赵辛店站1']	,
  [39.823907,116.213586,'北京赵辛店站-北京杜家坎站1']	,
  [39.764259,116.078845,'北京大苑村桥-北京坨里站1']	,
  [39.749713,116.033707,'北京坨里站-北京大件路站1']	,
  [39.713861,116.030065,'北京大件路站-北京京周站1']	,
  [39.695429,116.039343,'北京京周站-北京夏村站1']	,
  [39.636118,115.992537,'北京夏村站-北京襄驸马站1']	,
  [39.622806,115.957416,'北京襄驸马站-北京韩村河站1']	,
  [39.608335,115.871212,'北京皇后台站-北京长沟站1']	,
  [39.591646,115.838125,'北京长沟站-北京张坊站1']	,
  [39.545093,115.749164,'北京张坊站-北京镇江营站1']	,
  [39.540639,115.748075,'北京张坊站-北京镇江营站2']	,
  [39.53976,115.74835,'北京镇江营站-北京张坊站1']	,
  [39.531939,115.748584,'北京镇江营站-北京张坊站2']	,
  [39.56697,115.776061,'北京张坊站-北京长沟站1']	,
  [39.606863,115.870314,'北京长沟站-北京皇后台站1']	,
  [39.622689,115.955797,'北京韩村河站-北京襄驸马站1']	,
  [39.633047,115.989846,'北京襄驸马站-北京夏村站1']	,
  [39.694683,116.040068,'北京夏村站-北京京周站1']	,
  [39.713171,116.03057,'北京京周站-北京大件路站1']	,
  [39.74873,116.033555,'北京大件路站-北京坨里站1']	,
  [39.762717,116.075061,'北京坨里站-北京大苑村桥1']	,
  [40.044927,116.337097,'北京清河北站-北京西三旗站1']	,
  [40.077863,116.311529,'北京回龙观站-北京北安河站1']	,
  [40.114177,116.279101,'北京京藏沙河站-北京小汤山站1']	,
  [40.153428,116.25307,'北京小汤山站-北京西沙屯桥1']	,
  [40.214687,116.221881,'北京昌平南环站-北京昌平西关站1']	,
  [40.243971,116.150878,'北京陈庄站-北京南口站1']	,
  [40.274668,116.094251,'北京南站村站-北京居庸关站1']	,
  [40.362605,115.98161,'北京西拨子站-北京营城子立交1']	,
  [40.359456,115.927247,'北京营城子立交-北京康庄站1']	,
  [40.357719,115.901326,'北京康庄站-北京康庄市界站1']	,
  [40.358902,115.892434,'北京康庄站-北京康庄市界站2']	,
  [40.358848,115.886168,'北京康庄市界站-北京康庄站1']	,
  [40.359026,115.889575,'北京康庄市界站-北京康庄站2']	,
  [40.358688,115.92159,'北京康庄站-北京营城子立交1']	,
  [40.362995,115.978303,'北京营城子立交-北京西拨子站1']	,
  [40.246224,116.145193,'北京南口站-北京陈庄站1']	,
  [40.217134,116.219863,'北京邓庄桥-北京昌平南环站1']	,
  [40.157529,116.250027,'北京西沙屯桥-北京小汤山站1']	,
  [40.117419,116.274319,'北京小汤山站-北京京藏沙河站1']	,
  [40.080371,116.309468,'北京北安河站-北京回龙观站1']	,
  [40.043732,116.337655,'北京西三旗站-北京清河北站1']	,
  [40.358217,115.989218,'北京八达岭隧道调头点门架1']	,
  [40.134865,116.234759,'北京京新沙阳站-北京西坨站1']	,
  [40.151975,116.218838,'北京西坨站-北京楼自庄桥1']	,
  [40.157195,116.216553,'北京楼自庄桥-北京西坨站1']	,
  [40.139358,116.23046,'北京西坨站-北京京新沙阳站1']	,
  [40.181152,116.20813,'北京楼自庄桥-北京百泉庄站1']	,
  [40.207942,116.205992,'北京百泉庄站-北京十三陵站1']	,
  [40.238993,116.203682,'北京邓庄桥-北京西山口站1']	,
  [40.240191,116.199657,'北京西山口站-北京十三陵站1']	,
  [40.214272,116.204798,'北京邓庄桥-北京百泉庄站1']	,
  [40.184568,116.208386,'北京百泉庄站-北京楼自庄桥1']	,
  [39.999954,116.719669,'北京徐辛庄互通-北京平家疃站1']	,
  [40.006557,116.74515,'北京平家疃站-北京京秦京冀站1']	,
  [40.006923,116.74731,'北京京秦京冀站-北京平家疃站1']	,
  [40.000555,116.720544,'北京平家疃站-北京徐辛庄互通1']	,
  [39.76275,116.342727,'北京高米店站-北京大兴工业区站1']	,
  [39.761628,116.34293,'北京大兴工业区站-北京金华寺站1']	,
  [39.710258,116.337568,'北京海子角站-北京双源桥1']	,
  [39.663355,116.323946,'北京天宫院站-北京三融站1']	,
  [39.629006,116.325255,'北京庞各庄站-北京薛营桥站1']	,
  [39.587739,116.326769,'北京梨花桥站-北京京开立交1']	,
  [39.586491,116.326951,'北京京开立交-北京梨花桥站1']	,
  [39.621663,116.325625,'北京薛营桥站-北京庞各庄站1']	,
  [39.662169,116.324206,'北京三融站-北京天宫院站1']	,
  [39.709266,116.336866,'北京双源桥-北京海子角站1']	,
  [39.751295,116.34451,'北京金华寺站-北京大兴工业区站1']	,
  [39.761482,116.343228,'北京大兴工业区站-北京高米店站1']	,
  [39.524388,116.295122,'北京榆垡站-北京求贤站1']	,
  [39.506371,116.294723,'北京求贤站-北京榆垡南站1']	,
  [39.50255,116.294488,'北京求贤站-北京榆垡南站2']	,
  [39.500427,116.294249,'北京榆垡南站-北京求贤站1']	,
  [39.523282,116.295242,'北京求贤站-北京榆垡站1']	,
  [39.832673,116.926328,'北京首环京冀站-北京京哈高速互通1']	,
  [39.825408,116.919558,'北京首环京冀站-北京京哈高速互通2']	,
  [39.775927,116.885228,'北京京哈高速互通-北京漷县东站1']	,
  [39.736109,116.829269,'北京漷县东站-北京永乐店北站1']	,
  [39.722125,116.780502,'北京永乐店北站-北京京津高速互通1']	,
  [39.691118,116.723507,'北京京津高速互通-北京于家务南站1']	,
  [39.672242,116.701349,'北京于家务南站-北京京沪首环立交1']	,
  [39.649771,116.650013,'北京京沪首环立交-北京采育西站1']	,
  [39.629542,116.626295,'北京采育西站-北京采育南站1']	,
  [39.624978,116.621919,'北京采育西站-北京采育南站2']	,
  [39.619338,116.618716,'北京采育南站-北京采育西站1']	,
  [39.624257,116.621724,'北京采育南站-北京采育西站2']	,
  [39.649099,116.649232,'北京采育西站-北京京沪首环立交1']	,
  [39.669745,116.699289,'北京京沪首环立交-北京于家务南站1']	,
  [39.690481,116.722818,'北京于家务南站-北京京津高速互通1']	,
  [39.721669,116.779652,'北京京津高速互通-北京永乐店北站1']	,
  [39.735418,116.828659,'北京永乐店北站-北京漷县东站1']	,
  [39.775281,116.884498,'北京漷县东站-北京京哈高速互通1']	,
  [39.809364,116.917889,'北京京哈高速互通-北京首环京冀站1']	,
  [39.822013,116.918509,'北京京哈高速互通-北京首环京冀站2']	,
  [40.146317,116.530041,'北京酸枣岭-北京张喜庄站1']	,
  [40.144115,116.576835,'北京张喜庄站-北京六元桥站1']	,
  [40.136857,116.620466,'北京六元桥站-北京顺义城站1']	,
  [40.105249,116.623902,'北京顺义城站-北京顺义南环站1']	,
  [40.071822,116.641241,'北京顺义南环站-北京李天桥1']	,
  [40.005519,116.685549,'北京通顺路站-北京徐辛庄互通1']	,
  [39.989201,116.708187,'北京徐辛庄互通-北京徐辛庄站1']	,
  [39.941409,116.704724,'北京潞苑北街站-北京常屯站1']	,
  [39.940853,116.705062,'北京常屯站-北京潞苑北街站1']	,
  [39.988745,116.70873,'北京徐辛庄站-北京徐辛庄互通1']	,
  [40.005259,116.686346,'北京徐辛庄互通-北京通顺路站1']	,
  [40.06786,116.644693,'北京李天桥-北京顺义南环站1']	,
  [40.099488,116.624315,'北京顺义南环站-北京顺义城站1']	,
  [40.136208,116.621312,'北京顺义城站-北京六元桥站1']	,
  [40.144259,116.577617,'北京六元桥站-北京张喜庄站1']	,
  [40.14647,116.530876,'北京张喜庄站-北京酸枣岭1']	,
  [39.916026,116.708816,'北京常屯站-北京小圣庙站1']	,
  [39.858369,116.697947,'北京土桥站-北京张家湾北站1']	,
  [39.847334,116.68993,'北京张家湾北站-北京六环张家湾站1']	,
  [39.817113,116.656569,'北京张家湾桥-北京次渠站1']	,
  [39.801202,116.636029,'北京次渠站-北京徐庄桥1']	,
  [39.760126,116.603103,'北京徐庄桥-北京六环马驹桥西站1']	,
  [39.759501,116.602029,'北京六环马驹桥西站-北京徐庄桥1']	,
  [39.800508,116.635547,'北京徐庄桥-北京次渠站1']	,
  [39.81556,116.654758,'北京次渠站-北京六环张家湾站1']	,
  [39.846598,116.689643,'北京张家湾桥-北京张家湾北站1']	,
  [39.857624,116.697807,'北京张家湾北站-北京土桥站1']	,
  [39.915169,116.709126,'北京小圣庙站-北京常屯站1']	,
  [39.746377,116.543864,'北京六环马驹桥西站-北京太和站1']	,
  [39.728181,116.474722,'北京太和站-北京南大红门站1']	,
  [39.725744,116.455613,'北京南大红门站-北京北野场桥立交1']	,
  [39.7228,116.426527,'北京北野场桥立交-北京磁各庄站1']	,
  [39.721178,116.396986,'北京磁各庄站-北京刘二村立交桥1']	,
  [39.704737,116.354972,'北京刘二村立交桥-北京双源桥1']	,
  [39.704258,116.353751,'北京双源桥-北京刘二村立交桥1']	,
  [39.721068,116.395799,'北京刘二村立交桥-北京磁各庄站1']	,
  [39.722564,116.425294,'北京磁各庄站-北京北野场桥立交1']	,
  [39.725224,116.453616,'北京北野场桥立交-北京南大红门站1']	,
  [39.7277,116.473272,'北京南大红门站-北京太和站1']	,
  [39.746162,116.542701,'北京太和站-北京六环马驹桥西站1']	,
  [39.698539,116.320078,'北京双源桥-北京念坛站1']	,
  [39.692565,116.30145,'北京念坛站-北京北臧村站1']	,
  [39.692062,116.252478,'北京北臧村站-北京长阳站1']	,
  [39.696308,116.190029,'北京长阳站-北京良乡站1']	,
  [39.698071,116.133522,'北京良乡站-北京梨园桥1']	,
  [39.713416,116.09607,'北京梨园桥-北京闫村西站1']	,
  [39.714384,116.095818,'北京闫村西站-北京梨园桥1']	,
  [39.697938,116.132051,'北京梨园桥-北京良乡站1']	,
  [39.696155,116.188556,'北京良乡站-北京长阳站1']	,
  [39.692045,116.251261,'北京长阳站-北京北臧村站1']	,
  [39.692225,116.300128,'北京北臧村站-北京念坛站1']	,
  [39.697991,116.318866,'北京念坛站-北京双源桥1']	,
  [39.74476,116.099619,'北京闫村西站-北京大苑村站1']	,
  [39.781393,116.113217,'北京大苑村桥-北京六环青龙湖站1']	,
  [39.804733,116.119305,'北京六环青龙湖站-北京千灵山站1']	,
  [39.847827,116.125355,'北京千灵山站-北京北宫森林公园站1']	,
  [39.873709,116.143672,'北京北宫森林公园站-北京石门营站1']	,
  [39.90668,116.146113,'北京石门营站-北京广宁站1']	,
  [39.977398,116.097326,'北京广宁站-北京军庄站1']	,
  [40.033897,116.106689,'北京军庄站-北京大觉寺站1']	,
  [40.037391,116.108086,'北京大觉寺站-北京军庄站1']	,
  [39.980085,116.095929,'北京军庄站-北京广宁站1']	,
  [39.909735,116.143729,'北京广宁站-北京石门营站1']	,
  [39.876412,116.145931,'北京石门营站-北京北宫森林公园站1']	,
  [39.850464,116.127698,'北京北宫森林公园站-北京千灵山站1']	,
  [39.80844,116.119708,'北京千灵山站-北京六环青龙湖站1']	,
  [39.783466,116.115036,'北京六环青龙湖站-北京大苑村站1']	,
  [39.747213,116.099703,'北京大苑村桥-北京闫村西站1']	,
  [40.058087,116.131947,'北京大觉寺站-北京北清路站1']	,
  [40.061046,116.134837,'北京北清路站-北京大觉寺站1']	,
  [40.08174,116.148211,'北京北清路站-北京温阳路站1']	,
  [40.114419,116.155458,'北京温阳路站-北京六环沙阳路站1']	,
  [40.141029,116.15805,'北京六环沙阳路站-北京双横路站1']	,
  [40.166765,116.198652,'北京土城立交-北京楼自庄桥1']	,
  [40.169273,116.222887,'北京楼自庄桥-北京西沙屯桥1']	,
  [40.169649,116.224661,'北京西沙屯桥-北京楼自庄桥1']	,
  [40.167081,116.199519,'北京楼自庄桥-北京双横路站1']	,
  [40.143756,116.159295,'北京土城立交-北京六环沙阳路站1']	,
  [40.116964,116.155139,'北京六环沙阳路站-北京温阳路站1']	,
  [40.085233,116.149501,'北京温阳路站-北京北清路站1']	,
  [40.174181,116.270221,'北京西沙屯桥-北京高教园区站1']	,
  [40.176206,116.307032,'北京高教园区站-北京百善站1']	,
  [40.169234,116.342215,'北京百善站-北京阿苏卫站1']	,
  [40.162077,116.378148,'北京阿苏卫站-北京马坊站1']	,
  [40.160253,116.450626,'北京马坊站-北京酸枣岭1']	,
  [40.16004,116.434933,'北京酸枣岭-北京马坊站1']	,
  [40.161842,116.381092,'北京马坊站-北京阿苏卫站1']	,
  [40.168144,116.347059,'北京阿苏卫站-北京百善站1']	,
  [40.176028,116.311097,'北京百善站-北京高教园区站1']	,
  [40.174797,116.274408,'北京高教园区站-北京西沙屯桥1']	,
  [40.036318,116.472752,'北京黄港站-北京沙峪站1']	,
  [40.103624,116.482767,'北京沙峪站-北京鲁疃桥1']	,
  [40.123889,116.484301,'北京鲁疃桥-北京未来科技城站1']	,
  [40.14176,116.483262,'北京未来科技城站-北京酸枣岭1']	,
  [40.142473,116.482905,'北京酸枣岭-北京未来科技城站1']	,
  [40.124522,116.483828,'北京未来科技城站-北京鲁疃桥1']	,
  [40.104319,116.482604,'北京鲁疃桥-北京沙峪站1']	,
  [40.077898,116.481527,'北京沙峪站-北京黄港站1']	,
  [40.16857,116.487434,'路段分界站-北京高丽营站1']	,
  [40.169454,116.487241,'北京高丽营站-路段分界站1']	,
  [40.192146,116.491892,'北京高丽营站-北京赵全营站1']	,
  [40.192971,116.491734,'北京赵全营站-北京高丽营站1']	,
  [40.219032,116.508517,'北京赵全营站-北京北石槽站1']	,
  [40.220591,116.509519,'北京北石槽站-北京赵全营站1']	,
  [40.247696,116.543988,'北京北石槽站-北京宽沟站1']	,
  [40.248395,116.54476,'北京宽沟站-北京北石槽站1']	,
  [40.262238,116.586395,'北京宽沟站-北京怀柔站1']	,
  [40.263869,116.591501,'北京怀柔站-北京宽沟站1']	,
  [40.272308,116.658057,'北京怀柔站-北京中影杨宋站1']	,
  [40.271314,116.665153,'北京中影杨宋站-北京怀柔站1']	,
  [40.270901,116.692263,'北京中影杨宋站-北京密云经济技术开发区站1']	,
  [40.275041,116.700385,'北京密云经济技术开发区站-北京中影杨宋站1']	,
  [40.331501,116.806996,'北京密云经济技术开发区站-北京密云站1']	,
  [40.338433,116.820263,'北京密云站-北京密云经济技术开发区站1']	,
  [40.352732,116.849374,'北京密云站-北京穆家峪站1']	,
  [40.353366,116.849942,'北京穆家峪站-北京密云站1']	,
  [40.392953,116.915295,'北京穆家峪站-北京京承三期密云服务区1']	,
  [40.39625,116.948397,'北京京承三期密云服务区-北京辛安庄站1']	,
  [40.398344,117.108097,'北京大城子站-北京程各庄站1']	,
  [40.503514,117.16322,'北京北庄站-北京太师屯站1']	,
  [40.576273,117.172074,'北京京承三期太师屯服务区U转-北京司马台匝道站1']	,
  [40.638004,117.256693,'北京司马台匝道站-北京司马台站1']	,
  [40.641726,117.259339,'北京司马台匝道站-北京司马台站2']	,
  [40.65033,117.257371,'北京司马台站-北京司马台匝道站1']	,
  [40.642681,117.25989,'北京司马台站-北京司马台匝道站2']	,
  [40.577512,117.173494,'北京司马台匝道站-北京太师屯站1']	,
  [40.503263,117.161988,'北京京承三期太师屯服务区U转-北京北庄站1']	,
  [40.398918,117.109197,'北京程各庄站-北京大城子站1']	,
  [40.394746,117.00367,'北京辛安庄站-北京京承三期密云服务区1']	,
  [40.393462,116.918235,'北京京承三期密云服务区-北京穆家峪站1']	,
  [39.777147,116.646167,'北京徐庄桥-北京牛堡屯站1']	,
  [39.752541,116.680756,'北京牛堡屯站-北京于家务站1']	,
  [39.719142,116.723669,'北京于家务站-北京京津高速互通1']	,
  [39.673544,116.770257,'北京京津高速互通-北京德仁务站1']	,
  [39.655937,116.79371,'北京德仁务站-北京永乐站1']	,
  [39.652862,116.798006,'北京德仁务站-北京永乐站2']	,
  [39.652451,116.799169,'北京永乐站-北京德仁务站1']	,
  [39.649335,116.803517,'北京永乐站-北京德仁务站2']	,
  [39.672932,116.771481,'北京德仁务站-北京京津高速互通1']	,
  [39.718503,116.724865,'北京京津高速互通-北京于家务站1']	,
  [39.750711,116.683692,'北京于家务站-北京牛堡屯站1']	,
  [39.776358,116.64741,'北京牛堡屯站-北京徐庄桥1']	,
  [40.117654,116.503161,'北京鲁疃桥-北京天北路站1']	,
  [40.122232,116.538782,'北京天北路站-北京火寺路站1']	,
  [40.122548,116.539677,'北京火寺路站-北京天北路站1']	,
  [40.118117,116.503962,'北京天北路站-北京鲁疃桥1']	,
  [40.038419,116.677051,'北京李天桥-北京李桥站1']	,
  [40.039821,116.692423,'北京李桥站-北京沿河站1']	,
  [40.037617,116.786532,'北京沿河站-北京北务站1']	,
  [40.049514,116.820418,'北京北务站-北京京平路北服务区1']	,
  [40.056738,116.854054,'北京京平路北服务区-北京薛家庄站1']	,
  [40.062578,116.957714,'北京薛家庄站-北京打铁庄站1']	,
  [40.071762,117.021775,'北京打铁庄站-北京南张岱站1']	,
  [40.081371,117.051066,'北京南张岱站-北京赵庄户站1']	,
  [40.089776,117.089868,'北京赵庄户站-北京东高村站1']	,
  [40.108287,117.1292,'北京东高村站-北京稻地站1']	,
  [40.120926,117.151529,'北京稻地站-北京南太务站1']	,
  [40.129752,117.200047,'北京南太务站-北京夏各庄站1']	,
  [40.125684,117.205132,'北京南太务站-北京夏各庄站2']	,
  [40.125602,117.205262,'北京夏各庄站-北京南太务站1']	,
  [40.125602,117.205262,'北京夏各庄站-北京南太务站2']	,
  [40.122464,117.154652,'北京南太务站-北京稻地站1']	,
  [40.110806,117.131802,'北京稻地站-北京东高村站1']	,
  [40.090971,117.094368,'北京东高村站-北京赵庄户站1']	,
  [40.081857,117.052078,'北京赵庄户站-北京南张岱站1']	,
  [40.072287,117.022411,'北京南张岱站-北京打铁庄站1']	,
  [40.063469,116.984017,'北京打铁庄站-北京薛家庄站1']	,
  [40.057209,116.856947,'北京薛家庄站-北京京平路北服务区1']	,
  [40.050803,116.824316,'北京京平路北服务区-北京北务站1']	,
  [40.0382,116.787282,'北京北务站-北京沿河站1']	,
  [40.040093,116.693462,'北京沿河站-北京李桥站1']	,
  [40.038878,116.678224,'北京李桥站-北京半壁店站1']	,
  [39.574688,116.450792,'北京大渠南桥-北京段家务站1']	,
  [39.572076,116.422922,'北京段家务站-北京东白疃立交1']	,
  [39.574361,116.386057,'北京东白疃立交-北京京开立交1']	,
  [39.574228,116.449096,'北京段家务站-北京大渠南桥1']	,
  [39.571838,116.418851,'北京东白疃立交-北京段家务站1']	,
  [39.574048,116.384875,'北京京开立交-北京东白疃立交1']	,
  [39.706867,116.38498,'北京刘二村立交桥-北京前大营站1']	,
  [39.645257,116.381027,'北京前大营站-北京大狼垡站1']	,
  [39.58464,116.39579,'北京大狼垡站-北京东白疃立交1']	,
  [39.599372,116.387885,'北京东白疃立交-北京大狼垡站1']	,
  [39.640114,116.38308,'北京大狼垡站-北京前大营站1']	,
  [39.693785,116.377071,'北京前大营站-北京刘二村立交桥1']	,
  [40.170576,116.162661,'北京土城立交-北京葛村站1']	,
  [40.160021,116.058731,'北京葛村站-北京西峰山站1']	,
  [40.351905,115.956641,'北京西峰山站-北京营城子南站1']	,
  [40.377219,115.95209,'北京营城子立交-路段分界站1']	,
  [40.377684,115.951751,'路段分界站-北京营城子南站1']	,
  [40.352194,115.955694,'北京营城子立交-北京西峰山站1']	,
  [40.160236,116.057525,'北京西峰山站-北京葛村站1']	,
  [40.17059,116.161954,'北京葛村站-北京土城立交1']	,
  [40.478866,115.929115,'北京付余屯站-北京阪泉站1']	,
  [40.498668,115.925859,'北京阪泉收费站U转-北京辛家堡站1']	,
  [40.515324,115.916527,'北京辛家堡站-北京海陀站1']	,
  [40.507339,115.789674,'北京海陀站-北京京礼市界站1']	,
  [40.506923,115.790032,'北京京礼市界站-北京海陀站1']	,
  [40.517271,115.913157,'北京海陀站-北京辛家堡站1']	,
  [40.500287,115.925004,'北京辛家堡站-北京阪泉站1']	,
  [40.449828,115.932761,'北京付余屯站-北京小丰营站1']  
]

function countDist(lat1, lng1, lat2, lng2) {//纬度1,经度1,纬度2,经度2

      var f = ((lat1 + lat2) / 2) * Math.PI / 180.0;
  
      var g = ((lat1 - lat2) / 2) * Math.PI / 180.0;
  
      var l = ((lng1 - lng2) / 2) * Math.PI / 180.0;
  
      var sg = Math.sin(g);
  
      var sl = Math.sin(l);
  
      var sf = Math.sin(f);
  
      var s, c, w, r, d, h1, h2;
  
      var a = 6378137.0;//地球的直径
  
      var fl = 1 / 298.257;
  
      sg = sg * sg;
  
      sl = sl * sl;
  
      sf = sf * sf;
  
      s = sg * (1 - sl) + (1 - sf) * sl;
  
      c = (1 - sg) * (1 - sl) + sf * sl;
  
      w = Math.atan(Math.sqrt(s / c));
  
      r = Math.sqrt(s * c) / w;
  
      d = 2 * w * a;
  
      h1 = (3 * r - 1) / 2 / c;
  
      h2 = (3 * r + 1) / 2 / s;
  
      var num = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg))
  
      return num;//返回单位:米
  
  }


// miniprogram/pages/lalo/lalo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nest_range: 12000, // 搜寻范围12公里
    nest_gantry: [],  // 最近门架信息
    nest_count: 8, // 搜寻最大数量
    nest_interval: 4000, //扫描间隔 毫秒
    latitude: 0,
    lotitude: 0,
    setInterNum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startSetInter()  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.endSetInter()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 开始定时
  startSetInter: function () {
    var that = this;
    that.data.setInter = setInterval(function () {      
      let m = that.data.message;
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          let _nest_gantry = []
          let _cur_count = 0;
          for (var i = 0; i < gantry.length; i++){
            let dn = countDist(gantry[i][0], gantry[i][1],latitude, longitude)
            if (dn <= that.data.nest_range){
              let _gantry = []  
              _gantry.push(Math.floor(dn))          
              _gantry.push(gantry[i][0])
              _gantry.push(gantry[i][1])
              _gantry.push(gantry[i][2])            
              _nest_gantry.push(_gantry)
            }            
          }
          _nest_gantry.sort(function(a,b){return a[0]-b[0]});
                  
          that.setData({
            nest_gantry: _nest_gantry.slice(0, that.data.nest_count)
          })
        }
       })      
    }, that.data.nest_interval);

  },

  //清除计时器 即清除setInter
  endSetInter: function () {
    var that = this;
    clearInterval(that.data.setInter)
  },

  getInputNestRange: function(e){
    this.setData({nest_range: e.detail.value})
  },

  getInputNestCount: function(e){
    this.setData({nest_count: e.detail.value})
  },

  getInputNestInterval: function(e){
    this.setData({nest_interval: e.detail.value})
    this.endSetInter()
    this.startSetInter()
  }  
})
