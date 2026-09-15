// LinguaFlow - A2 Level Data (Genişletilmiş Kapsamlı Müfredat & Kritik Püf Noktaları)
window.LEVEL_A2 = {
    id: "A2",
    title: "A2 - Temel Seviye (Elementary / Günlük İletişim)",
    description: "Geçmiş zamanlar (Past Simple & Continuous), Gelecek zaman nüansları, As...As & Kıyaslamalar, Zarflar ve Present Perfect'e güçlü giriş.",
    color: "#10b981",
    videoPlaylistUrl: "https://www.youtube.com/playlist?list=PLxX2m2Np79VfE8qgLtUZHwCF0VyuFH8QI",
    units: [
        {
            id: "a2_u1",
            title: "Ünite 1: Geçmiş Zaman (Past Simple) & -ED Telaffuzunun 3 Altın Kuralı",
            description: "Dün ve geçmişte biten olaylar, düzenli fiillerin gizli telaffuz şifreleri ve 'Did' kuralı.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "1.1 Düzenli Fiillerde '-ED' Takısının 3 Farklı Okunuşu",
                    content: `
                        <p class="mb-3">Düzenli fiillerin sonuna gelen <strong>-ed</strong> eki Türkçe gibi tek bir sesle okunmaz. Fiilin son harfine göre 3 farklı ses çıkar:</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-blue-600/40">
                                <span class="font-bold text-blue-400 block mb-1">1. /ɪd/ veya /əd/ Sesi</span>
                                <p class="text-gray-300">Fiil <strong>T</strong> veya <strong>D</strong> sesiyle bitiyorsa ayrı bir hece olarak okunur:</p>
                                <p class="font-mono text-white mt-1">• Want ➔ Want<strong>ed</strong> (/wɒntɪd/)<br>• Need ➔ Need<strong>ed</strong> (/niːdɪd/)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-purple-600/40">
                                <span class="font-bold text-purple-400 block mb-1">2. /t/ Sesi (Sert)</span>
                                <p class="text-gray-300">Fiil <strong>P, K, S, SH, CH, F</strong> gibi sessiz/patlamalı sesle bitiyorsa -t okunur:</p>
                                <p class="font-mono text-white mt-1">• Watch ➔ Watched (/wɒtʃt/)<br>• Work ➔ Worked (/wɜːkt/)<br>• Stop ➔ Stopped (/stɒpt/)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-emerald-600/40">
                                <span class="font-bold text-emerald-400 block mb-1">3. /d/ Sesi (Yumuşak)</span>
                                <p class="text-gray-300">Diğer tüm sesli ve titreşimli harflerle bitiyorsa sadece -d sesi verilir:</p>
                                <p class="font-mono text-white mt-1">• Play ➔ Played (/pleɪd/)<br>• Clean ➔ Cleaned (/kliːnd/)<br>• Live ➔ Lived (/lɪvd/)</p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Asla 'Vork-ed' veya 'Pley-ed' Diye Okumayın!",
                            wrong: "Work-ed, Play-ed, Watch-ed diye hecelemek",
                            correct: "Worked (/wɜːkt/), Played (/pleɪd/), Watched (/wɒtʃt/)",
                            note: "Yalnızca ve yalnızca sonu T veya D ile bitenlerde (wanted, decided, visited) '-id' hecesi duyulur. Diğerlerinde 'e' harfi yutulur!"
                        },
                        {
                            title: "HAYATİ GRAMER KURALI: 'Did' ve 'Didn't' Varsa Fiil V1 (Yalın) Haline Döner!",
                            wrong: "Did you bought the tickets? / I didn't saw him yesterday.",
                            correct: "Did you buy the tickets? / I didn't see him yesterday.",
                            note: "'Did' zaten cümlenin geçmiş zaman olduğunu üstlenmiştir. 'Bought' veya 'saw' demek iki kere geçmiş zaman eki takmak gibidir, yanlıştır!"
                        }
                    ],
                    examples: [
                        { en: "I visited my grandparents in the village last weekend.", tr: "Geçen hafta sonu köydeki büyükanne ve büyükbabamı ziyaret ettim." },
                        { en: "Did you watch the football match on television last night?", tr: "Dün gece televizyonda futbol maçını izledin mi?" },
                        { en: "We didn't go out because the weather was stormy.", tr: "Hava fırtınalı olduğu için dışarı çıkmadık." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Decide (Decided)", pronunciation: "/dɪˈsaɪd/", tr: "Karar vermek", example: "I decided to stay at home." },
                { word: "Arrive (Arrived)", pronunciation: "/əˈraɪv/", tr: "Varmak, ulaşmak", example: "The plane arrived on time." },
                { word: "Happen (Happened)", pronunciation: "/ˈhæp.ən/", tr: "Olmak, gerçekleşmek", example: "What happened to your arm?" },
                { word: "Invite (Invited)", pronunciation: "/ɪnˈvaɪt/", tr: "Davet etmek", example: "She invited twenty people." },
                { word: "Steal (Stole)", pronunciation: "/stiːl/ (/stəʊl/)", tr: "Çalmak (hırsızlık)", example: "Someone stole my bicycle." },
                { word: "Wear (Wore)", pronunciation: "/weər/ (/wɔːr/)", tr: "Giymek", example: "He wore a suit for the interview." }
            ]
        },
        {
            id: "a2_u2",
            title: "Ünite 2: Sürekli Geçmiş Zaman (Past Continuous) vs Past Simple (When & While)",
            description: "Geçmişte devam eden bir eylemin başka bir eylem tarafından kesilmesi: 'Was/Were + Ving' ve 'When / While' bağlaçları.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "2.1 When ve While ile Cümle Bağlama Formülü",
                    content: `
                        <p class="mb-3">Geçmişte bir eylem uzun süre devam ederken (Past Continuous) araya anlık bir olay girdiyse (Past Simple) bu iki zaman birlikte kullanılır.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                            <div class="p-3 bg-gray-800 rounded-xl border border-blue-600/40 text-xs">
                                <span class="font-bold text-blue-400 block mb-1">⚡ WHEN + Past Simple (Dığında / İken)</span>
                                <p class="text-gray-300">When'den hemen sonra genellikle <strong>kısa, anlık, kesici eylem</strong> gelir:</p>
                                <p class="font-mono text-white mt-1">I was taking a shower <strong>when the phone rang</strong>.</p>
                                <p class="text-gray-400 italic mt-0.5">(Telefon çaldığında duş alıyordum.)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-indigo-600/40 text-xs">
                                <span class="font-bold text-indigo-400 block mb-1">⏳ WHILE + Past Continuous (-İken)</span>
                                <p class="text-gray-300">While'dan hemen sonra genellikle <strong>uzun, süreç bildiren eylem</strong> gelir:</p>
                                <p class="font-mono text-white mt-1"><strong>While I was cooking dinner</strong>, the electricity went off.</p>
                                <p class="text-gray-400 italic mt-0.5">(Akşam yemeği pişiriyorken elektrikler kesildi.)</p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Paralel İki Eylem Varsa İkisi de 'While' ile Continuous Olur!",
                            wrong: "While I studied, my brother watched TV.",
                            correct: "While I was studying, my brother was watching TV.",
                            note: "Geçmişte aynı anda paralel devam eden iki süreç anlatılıyorsa her iki taraf da 'was/were + Ving' ile kurulur."
                        }
                    ],
                    examples: [
                        { en: "What were you doing at 8:00 PM yesterday evening?", tr: "Dün akşam saat 8:00'de ne yapıyordun?" },
                        { en: "She was driving fast when she saw the red light.", tr: "Kırmızı ışığı gördüğünde hızlı araba kullanıyordu." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Electricity", pronunciation: "/ɪˌlekˈtrɪs.ə.ti/", tr: "Elektrik", example: "The electricity went off suddenly." },
                { word: "Ring (Rang)", pronunciation: "/rɪŋ/ (/ræŋ/)", tr: "Çalmak (zil/telefon)", example: "The alarm rang early." },
                { word: "Drive (Drove)", pronunciation: "/draɪv/ (/drəʊv/)", tr: "Araba sürmek", example: "He drove all night." },
                { word: "Cook", pronunciation: "/kʊk/", tr: "Yemek pişirmek", example: "I love cooking Italian pasta." },
                { word: "Fall (Fell)", pronunciation: "/fɔːl/ (/fel/)", tr: "Düşmek", example: "He fell off the ladder." }
            ]
        },
        {
            id: "a2_u3",
            title: "Ünite 3: Gelecek Zamanın 3 Farklı Yolu (Will vs Going To vs Present Continuous)",
            description: "Gelecek için doğru kalıbı seçme sanatı: Anlık kararlar, planlar ve kesinleşmiş randevular.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "3.1 Gelecek Zaman Karşılaştırma Matrisi",
                    content: `
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Kalıp</th>
                                        <th class="py-2">Kullanım Amacı</th>
                                        <th class="py-2">Örnek</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-blue-400">WILL</td>
                                        <td>1. Konuşma anında ani karar<br>2. Tahmin (I think...)<br>3. Söz ve teklifler</td>
                                        <td>"Someone is at the door." - "I will open it!"<br>I promise I will call you.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-emerald-400">BE GOING TO</td>
                                        <td>1. Önceden niyet edilmiş plan<br>2. Gözle görünen açık kanıt/belirti</td>
                                        <td>I am going to buy a car next month.<br>Look at the black clouds, it is going to rain!</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-purple-400">PRESENT CONTINUOUS (am/is/are + Ving)</td>
                                        <td>Zamanı, yeri ve bileti/randevusu kesinleşmiş organizasyonlar</td>
                                        <td>I am flying to London tomorrow at 10 AM. (Biletim cebimde, kesinleşti!)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Garsona Sipariş Verirken Asla 'Going to' Demeyin!",
                            wrong: "I am going to have a soup. (Garsona bunu derseniz günlerdir bunu planlıyormuşsunuz gibi tuhaf olur)",
                            correct: "I will have a soup, please. VEYA I'll have a coffee.",
                            note: "Restoranda sipariş anlık bir seçim olduğu için her zaman 'I will have' veya 'I'll take' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "Don't carry that heavy box alone; I will help you.", tr: "O ağır kutuyu tek başına taşıma; sana yardım edeceğim (teklif)." },
                        { en: "We are going to move to a new apartment this summer.", tr: "Bu yaz yeni bir daireye taşınacağız (plan)." },
                        { en: "I am meeting the doctor tomorrow at 3:00 PM.", tr: "Yarın saat 15:00'te doktorla randevum var (kesin randevu)." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Promise", pronunciation: "/ˈprɒm.ɪs/", tr: "Söz vermek", example: "I promise I won't tell anyone." },
                { word: "Carry", pronunciation: "/ˈkær.i/", tr: "Taşımak", example: "Can you help me carry this box?" },
                { word: "Move", pronunciation: "/muːv/", tr: "Taşınmak / Hareket etmek", example: "They moved to another city." },
                { word: "Appointment", pronunciation: "/əˈpɔɪnt.mənt/", tr: "Randevu", example: "I have a dentist appointment." },
                { word: "Heavy", pronunciation: "/ˈhev.i/", tr: "Ağır", example: "This suitcase is too heavy." }
            ]
        },
        {
            id: "a2_u4",
            title: "Ünite 4: Kıyaslamalar (Comparatives, Superlatives & As...As Eşitliği)",
            description: "Daha üstünlük (-er / more), en üstünlük (the -est / the most) ve eşitlik kalıbı (as...as).",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "4.1 Kıyaslama Kuralları ve As...As Eşitliği",
                    content: `
                        <p class="mb-3">İki şeyi kıyaslarken hece sayısına dikkat edilir; aynı seviyede olduklarını söylerken ise <strong>as + sıfat + as</strong> kalıbı kullanılır.</p>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <span class="font-bold text-blue-400 block mb-1">⚖️ Eşitlik Kalıbı: AS ... AS</span>
                                <p class="text-gray-300">• He is <strong>as tall as</strong> his brother. (Kardeşi kadar uzun)<br>
                                • This book is not <strong>as interesting as</strong> the other one. (Diğeri kadar ilginç değil)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-gray-700">
                                <span class="font-bold text-amber-400 block mb-1">🚨 Düzensiz Sıfatlar (Mutlaka Ezberleyin)</span>
                                <p class="text-gray-300 font-mono">
                                    • Good ➔ Better ➔ The Best<br>
                                    • Bad ➔ Worse ➔ The Worst<br>
                                    • Far ➔ Farther / Further ➔ The Furthest
                                </p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'More better' veya 'Most easiest' Demeyin!",
                            wrong: "This car is more better. / It was the most easiest test.",
                            correct: "This car is better. / It was the easiest test.",
                            note: "Bir sıfat -er veya düzensiz biçim almışsa başına 'more' GELMEZ. İkili üstünlük anlatım bozukluğudur!"
                        },
                        {
                            title: "TRICK: 'Too' vs 'Enough' Farkı",
                            wrong: "This tea is enough hot to drink. / I am too rich to buy this.",
                            correct: "This tea is too hot to drink. (Aşırı sıcak, içilemez) / This car is cheap enough. (Yeterince ucuz)",
                            note: "<strong>Too:</strong> Sıfattan ÖNCE gelir ve olumsuz aşırılık bildirir (too expensive = aşırı pahalı).<br><strong>Enough:</strong> Sıfattan SONRA gelir (rich enough = yeterince zengin)."
                        }
                    ],
                    examples: [
                        { en: "Tokyo is much more crowded than Rome.", tr: "Tokyo Roma'dan çok daha kalabalıktır." },
                        { en: "He isn't as experienced as you, but he works very hard.", tr: "Senin kadar deneyimli değil ama çok gayretli çalışıyor." },
                        { en: "This suitcase is too heavy for me to lift.", tr: "Bu bavul kaldırabilmem için fazla ağır." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Crowded", pronunciation: "/ˈkraʊ.dɪd/", tr: "Kalabalık", example: "The streets are crowded today." },
                { word: "Experienced", pronunciation: "/ɪkˈspɪə.ri.ənst/", tr: "Deneyimli, tecrübeli", example: "We need an experienced driver." },
                { word: "Lift", pronunciation: "/lɪft/", tr: "Kaldırmak (yukarı)", example: "Can you lift this box?" },
                { word: "Comfortable", pronunciation: "/ˈkʌm.fə.tə.bəl/", tr: "Rahat, konforlu", example: "This sofa is very comfortable." },
                { word: "Enough", pronunciation: "/ɪˈnʌf/", tr: "Yeterli / Yeterince", example: "Do we have enough time?" }
            ]
        },
        {
            id: "a2_u5",
            title: "Ünite 5: Zarflar (Adverbs) & En Büyük Tuzak: 'Hard' vs 'Hardly'",
            description: "Bir eylemin nasıl yapıldığını anlatan durum zarfları (-ly kuralı) ve İngilizcedeki en sinsi sahte dostlar.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "5.1 Sıfat ile Zarf Ayrımı ve 'Hardly' Tuzağı",
                    content: `
                        <p class="mb-3"><strong>Sıfatlar (Adjectives)</strong> bir İSMİ niteler (He is a slow driver). <strong>Zarflar (Adverbs)</strong> ise bir FİİLİN nasıl yapıldığını açıklar (He drives slowly).</p>
                        
                        <div class="p-3 bg-gray-800 rounded-xl border border-rose-500/40 my-3 text-xs">
                            <h5 class="font-bold text-rose-400 mb-1">🚨 DÜZENSİZ ZARFLAR & 'HARDLY' TEHLİKESİ:</h5>
                            <p class="text-gray-300 mb-2">Çoğu sıfat sonuna -ly alarak zarf olur (quick ➔ quickly, bad ➔ badly). Ancak bazıları kuralı bozar:</p>
                            <ul class="list-disc pl-5 space-y-1 text-gray-200">
                                <li><strong>Good ➔ Well:</strong> He is a good singer. He sings well. (Goodly denmez!)</li>
                                <li><strong>Fast ➔ Fast:</strong> He is a fast runner. He runs fast. (Fastly denmez!)</li>
                                <li><strong>Hard ➔ Hard:</strong> He works <strong>hard</strong>. (Çok sıkı / gayretle çalışır).</li>
                            </ul>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "BÜYÜK TUZAK: 'He works hardly' DERSENİZ HAKARET ETMİŞ OLURSUNUZ!",
                            wrong: "He works hardly. (BU: 'O neredeyse HİÇ çalışmıyor, çok tembel' demektir!)",
                            correct: "He works hard. (O çok sıkı çalışıyor)",
                            note: "<strong>Hard:</strong> Sıkı / Zorlu demektir.<br><strong>Hardly:</strong> 'Neredeyse hiç' anlamına gelen bambaşka bir sıklık zarfıdır! (I hardly know him = Onu neredeyse hiç tanımıyorum)."
                        }
                    ],
                    examples: [
                        { en: "She speaks English very fluently and correctly.", tr: "İngilizceyi çok akıcı ve doğru bir şekilde konuşur." },
                        { en: "He drove fast because he was late for his flight.", tr: "Uçuşuna geç kaldığı için hızlı sürdü." },
                        { en: "I was so tired that I could hardly keep my eyes open.", tr: "O kadar yorgundum ki gözlerimi neredeyse hiç açık tutamıyordum." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Hard", pronunciation: "/hɑːd/", tr: "Sıkı / Zorlu", example: "Study hard for the test." },
                { word: "Hardly", pronunciation: "/ˈhɑːd.li/", tr: "Neredeyse hiç", example: "I hardly watch television." },
                { word: "Fluently", pronunciation: "/ˈfluː.ənt.li/", tr: "Akıcı bir şekilde", example: "She talks very fluently." },
                { word: "Carefully", pronunciation: "/ˈkeə.fəl.i/", tr: "Dikkatlice", example: "Drive carefully on icy roads." },
                { word: "Quietly", pronunciation: "/ˈkwaɪət.li/", tr: "Sessizce", example: "Please close the door quietly." }
            ]
        },
        {
            id: "a2_u6",
            title: "Ünite 6: Present Perfect Tense'e Giriş & 'Have been to' vs 'Have gone to'",
            description: "Hayat tecrübeleri, have/has + V3, ever/never, already/yet ve gittin-döndün mü gittin-kaldın mı ayrımı.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "6.1 Present Perfect Temel Mantığı & 'Been' vs 'Gone'",
                    content: `
                        <p class="mb-3">Zamanı değil, eylemin tecrübesi veya şu ana yansıyan sonucu önemli olduğunda <strong>have / has + V3</strong> kullanılır.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-blue-600/40">
                                <span class="font-bold text-blue-400 block mb-1">✈️ HAVE BEEN TO (Gitti ve Döndü)</span>
                                <p class="text-gray-300">Bir yeri hayatında ziyaret edip geri gelmiş tecrübeyi anlatır:</p>
                                <p class="font-mono text-white mt-1">I <strong>have been to</strong> Italy twice.</p>
                                <p class="text-gray-400 italic mt-0.5">(İtalya'da iki kez bulundum, şu an buradayım.)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-rose-600/40">
                                <span class="font-bold text-rose-400 block mb-1">🚶 HAVE GONE TO (Gitti ve Hala Orada)</span>
                                <p class="text-gray-300">Bir yere gitti ve henüz geri dönmedi:</p>
                                <p class="font-mono text-white mt-1">Where is Tom? - He <strong>has gone to</strong> Rome.</p>
                                <p class="text-gray-400 italic mt-0.5">(Tom Roma'ya gitti, şu an Roma'da, burada değil!)</p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Karşınızdaki Kişiye 'Have you ever gone to...?' DENMEZ!",
                            wrong: "Have you ever gone to London? (KARŞINIZDAKİ DÖNMÜŞ KİŞİYE DENMEZ)",
                            correct: "Have you ever been to London?",
                            note: "Çünkü konuştuğunuz kişi şu an Londra'da değil, karşınızdadır! Bu yüzden 'Have you ever been to...' denmelidir."
                        }
                    ],
                    examples: [
                        { en: "Have you ever seen a shooting star?", tr: "Hayatında hiç kayan yıldız gördün mü?" },
                        { en: "I haven't packed my suitcase yet.", tr: "Bavulumu henüz hazırlamadım." },
                        { en: "She has already finished her university thesis.", tr: "Üniversite tezini çoktan bitirdi." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Ever", pronunciation: "/ˈev.ər/", tr: "Hayatında hiç (sorularda)", example: "Have you ever been abroad?" },
                { word: "Never", pronunciation: "/ˈnev.ər/", tr: "Hiç (olumlu yapılı cümlede)", example: "I have never tasted caviar." },
                { word: "Already", pronunciation: "/ɔːlˈred.i/", tr: "Çoktan, zaten", example: "We have already met." },
                { word: "Yet", pronunciation: "/jet/", tr: "Henüz (olumsuz/soru)", example: "Has the mail arrived yet?" },
                { word: "Abroad", pronunciation: "/əˈbrɔːd/", tr: "Yurtdışı / Yurtdışında", example: "She wants to live abroad." }
            ]
        }
    ],
    exam: {
        title: "A2 Seviye Sonu Kapsamlı Değerlendirme & B1 Seviye Atlama Sınavı",
        passScore: 70,
        description: "A2 seviyesinin tüm püf noktalarını, zaman geçişlerini ve tuzaklarını içeren genel sınav. B1 kilidini açmak için en az %70 gereklidir.",
        multipleChoice: [
            {
                question: "'Yesterday, did you _______ with Sarah when she _______ the news?'",
                options: [
                    "talked / heard",
                    "talk / heard",
                    "talk / hear",
                    "talked / hear"
                ],
                answer: 1,
                explanation: "'Did' olan tarafta fiil yalın kalır ('talk'), 'when' cümlesinde ise geçmiş zaman hali gelir ('heard')."
            },
            {
                question: "'While my mother _______ in the garden, a stray cat _______ through the door.'",
                options: [
                    "was working / entered",
                    "worked / was entering",
                    "works / entered",
                    "was working / was entering"
                ],
                answer: 0,
                explanation: "While'dan sonra devam eden süreç (was working), araya giren anlık eylem için Past Simple (entered) kullanılır."
            },
            {
                question: "'He wants to pass the exam, so he works very _______ every day.'",
                options: [
                    "hardly",
                    "hard",
                    "good",
                    "fastly"
                ],
                answer: 1,
                explanation: "'Hard' sıkı çalışmayı ifade eder. 'Hardly' ise 'neredeyse hiç' anlamına gelir!"
            },
            {
                question: "Bir arkadaşınız karşınızdayken ona hayatında hiç İspanya'da bulunup bulunmadığını nasıl sorarsınız?",
                options: [
                    "Have you ever gone to Spain?",
                    "Have you ever been to Spain?",
                    "Did you ever gone to Spain?",
                    "Were you ever gone to Spain?"
                ],
                answer: 1,
                explanation: "Kişi karşımızda olduğuna göre gidip döndüğü tecrübe sorulur; bu yüzden 'Have you ever been to Spain?' denir."
            },
            {
                question: "'This winter jacket is _______ expensive, so I cannot afford to buy it.'",
                options: [
                    "enough",
                    "too",
                    "as",
                    "more"
                ],
                answer: 1,
                explanation: "Sıfattan önce gelip olumsuz aşırılık bildiren yapı 'too'dur (too expensive = aşırı pahalı)."
            },
            {
                question: "'My brother is not _______ ambitious _______ my father.' (Eşitlik kıyaslaması)",
                options: [
                    "so / than",
                    "as / as",
                    "more / than",
                    "too / enough"
                ],
                answer: 1,
                explanation: "Eşitlik ve benzerlik derecelendirmesinde 'as + sıfat + as' kalıbı kullanılır."
            },
            {
                question: "Hangi fiilin '-ed' takısı /ɪd/ şeklinde ayrı bir hece olarak telaffuz edilir?",
                options: [
                    "Played",
                    "Watched",
                    "Decided",
                    "Cleaned"
                ],
                answer: 2,
                explanation: "Sonu T veya D ile biten fiillerde (Decide ➔ Decided) -ed eki /ɪd/ sesiyle okunur."
            },
            {
                question: "'Look at that runner, he is staggering! He _______ faint.'",
                options: [
                    "will",
                    "is going to",
                    "was",
                    "has"
                ],
                answer: 1,
                explanation: "Şu an gözle görülen açık bir belirti (sendeliyor) olduğundan geleceğe yönelik 'is going to' kullanılır."
            }
        ],
        matching: [
            {
                prompt: "A2 seviyesi kritik ifadelerini Türkçe karşılıklarıyla eşleştirin:",
                pairs: [
                    { left: "Have been to Paris", right: "Paris'te bulunmuş olmak (dönmüş)" },
                    { left: "Have gone to Paris", right: "Paris'e gitmiş olmak (hala orada)" },
                    { left: "Work hard", right: "Çok sıkı çalışmak" },
                    { left: "Hardly know him", right: "Onu neredeyse hiç tanımamak" },
                    { left: "Too heavy to carry", right: "Taşınamayacak kadar ağır" }
                ]
            }
        ],
        translation: [
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Dün akşam telefon çaldığında televizyon izliyordum.'",
                acceptable: [
                    "I was watching television when the phone rang yesterday evening.",
                    "I was watching TV when the phone rang yesterday evening.",
                    "I was watching television when the phone rang last night.",
                    "When the phone rang yesterday evening, I was watching television."
                ],
                tip: "Süreç: 'I was watching TV', anlık olay: 'when the phone rang'."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'O (erkek) arkadaşı kadar hızlı koşamaz.'",
                acceptable: [
                    "He cannot run as fast as his friend.",
                    "He can't run as fast as his friend."
                ],
                tip: "Eşitlik kalıbı: 'as fast as his friend'."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Daha önce hiç yurt dışında bulundun mu?'",
                acceptable: [
                    "Have you ever been abroad before?",
                    "Have you ever been abroad?"
                ],
                tip: "Hayat tecrübesi sorusu: 'Have you ever been abroad...'"
            }
        ]
    }
};
