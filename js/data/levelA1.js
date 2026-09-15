// LinguaFlow - A1 Level Data (Genişletilmiş Kapsamlı Müfredat & Haluk Tatar İngilizce Eğitimi Uyumlu)
window.LEVEL_A1 = {
    id: "A1",
    title: "A1 - Başlangıç Seviyesi (Beginner / Temel Seviye)",
    description: "Alfabeden temel ses kurallarına, To Be fiilinden geniş zamana, işaret zamirlerinden hayati edatlara kadar A1 seviyesinin eksiksiz rehberi.",
    color: "#3b82f6",
    videoPlaylistUrl: "https://www.youtube.com/playlist?list=PLxX2m2Np79VfE8qgLtUZHwCF0VyuFH8QI",
    units: [
        {
            id: "a1_u1",
            title: "Ünite 1: İngilizce Alfabe, Okuma Kuralları & Sessiz Harfler (Silent Letters)",
            description: "İngilizcenin yazıldığı gibi okunmayan yapısının şifreleri: Okunmayan harfler, 'TH' peltek sesleri ve ses birleşimleri.",
            youtubeVideoId: "a5ZuLPTrs0o", // Haluk Tatar 001 Alfabe ve Temel Sesler
            lessons: [
                {
                    title: "1.1 Temel Sesler ve Harf Kombinasyonları",
                    content: `
                        <p class="mb-3">İngilizce fonetik bir dil değildir; yani harfler her zaman yazıldığı gibi telaffuz edilmez. İngilizce öğrenirken yapılan en büyük hata Türkçe gibi harfleri tek tek okumaya çalışmaktır.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                            <div class="p-3 bg-gray-800 rounded-lg border border-blue-600/40">
                                <h5 class="font-bold text-blue-400 mb-1">👅 "TH" Peltek Sesleri:</h5>
                                <ul class="text-xs space-y-1.5 text-gray-300">
                                    <li><strong>1. Sert Peltek (θ):</strong> Dil iki dişin arasına hafifçe kıstırılır ve hava üflenir (f/s arası peltek ses).<br>
                                    <em>Örn: Think (düşünmek), Thank you, Three (üç), Birthday</em></li>
                                    <li><strong>2. Yumuşak Peltek (ð):</strong> Titreşimli peltek ses (d/z arası).<br>
                                    <em>Örn: This (bu), That (şu), Mother (anne), They (onlar)</em></li>
                                </ul>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-purple-600/40">
                                <h5 class="font-bold text-purple-400 mb-1">🔤 Önemli Harf Birleşimleri:</h5>
                                <ul class="text-xs space-y-1.5 text-gray-300">
                                    <li><strong>CH = /tʃ/ (Ç sesi):</strong> Chair, Cheap, Teacher</li>
                                    <li><strong>SH = /ʃ/ (Ş sesi):</strong> Shoe, She, English</li>
                                    <li><strong>PH = /f/ (F sesi):</strong> Phone, Photo, Pharmacy</li>
                                    <li><strong>TION / SION = /ʃən/ (Şın sesi):</strong> Station, Action, Decision</li>
                                </ul>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK 1: Sessiz Harfler (Okunmayan Harf Kuralları)",
                            wrong: "K-nife, D-oubt, W-rite diye Türkçe gibi okumak",
                            correct: "Knife -> /naɪf/, Doubt -> /daʊt/, Write -> /raɪt/",
                            note: "• 'KN' ile başlayan kelimelerde 'K' ASLA okunmaz: Knife (bıçak), Know (bilmek), Knee (diz).<br>• 'MB' veya 'BT' ikilisinde 'B' genellikle sessizdir: Doubt (şüphe), Debt (borç), Climb (tırmanmak), Comb (tarak).<br>• 'WR' ile başlayan kelimelerde 'W' okunmaz: Write (yazmak), Wrong (yanlış), Wrist (bilek)."
                        },
                        {
                            title: "TRICK 2: 'Three' (3) ile 'Tree' (Ağaç) Ayrımı",
                            wrong: "Üç derken 'tree' veya 'tri' demek (Ağaç demiş olursunuz!)",
                            correct: "Three derken dili dişlerin arasına alıp hava vererek /θriː/ şeklinde söyleyin.",
                            note: "Ayrıca 'Free' (ücretsiz/özgür) kelimesiyle de karıştırmayın. 'Three' peltektir!"
                        }
                    ],
                    examples: [
                        { en: "I don't know the answer to this question.", tr: "Bu sorunun cevabını bilmiyorum. (Know'daki k sessizdir)" },
                        { en: "Thank you for your help, my friend.", tr: "Yardımın için teşekkür ederim arkadaşım." },
                        { en: "She writes with her right hand.", tr: "O sağ eliyle yazar. (Writes'daki w sessizdir)" }
                    ]
                }
            ],
            vocabulary: [
                { word: "Alphabet", pronunciation: "/ˈæl.fə.bet/", tr: "Alfabe", example: "The English alphabet has 26 letters." },
                { word: "Pronunciation", pronunciation: "/prəˌnʌn.siˈeɪ.ʃən/", tr: "Telaffuz", example: "Good pronunciation makes speaking easier." },
                { word: "Listen", pronunciation: "/ˈlɪs.ən/", tr: "Dinlemek (t sessiz)", example: "Listen to the teacher carefully." },
                { word: "Answer", pronunciation: "/ˈɑːn.sər/", tr: "Cevap vermek (w sessiz)", example: "Can you answer this question?" },
                { word: "Doubt", pronunciation: "/daʊt/", tr: "Şüphe (b sessiz)", example: "I have no doubt about it." },
                { word: "Knife", pronunciation: "/naɪf/", tr: "Bıçak (k sessiz)", example: "Be careful with that sharp knife." }
            ]
        },
        {
            id: "a1_u2",
            title: "Ünite 2: Tanımlıklar (A / An / The) & İşaret Zamirleri (This / That / These / Those)",
            description: "Bir nesneyi tanımlama, sesli harf kuralı, genel vs belirli durumlar (The) ve mesafeye göre gösterme.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "2.1 A vs AN Kuralı & 'The' Mantığı",
                    content: `
                        <p class="mb-3">İngilizcede sayılabilen tekil bir nesneden bahsederken <strong>a</strong> veya <strong>an</strong> kullanılır. Kural <em>yazılışa değil, okunuştaki ilk sesin sesli olup olmamasına</em> bağlıdır!</p>
                        
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Tanımlık</th>
                                        <th class="py-2">Kural</th>
                                        <th class="py-2">Örnekler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-blue-400">A</td>
                                        <td>Sessiz <em>sesle</em> başlayan tekiller</td>
                                        <td>a book, a car, <strong>a university</strong> (/j/ sesiyle başlar!)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-purple-400">AN</td>
                                        <td>Sesli <em>sesle</em> başlayan tekiller</td>
                                        <td>an apple, an orange, <strong>an hour</strong> (/aʊər/ h sessizdir!)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-emerald-400">THE</td>
                                        <td>Hem konuşanın hem dinleyenin bildiği belirli şey</td>
                                        <td>Open <strong>the door</strong> (odadaki o kapı), look at <strong>the sun</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'A university' ve 'An hour' Tuzağı!",
                            wrong: "an university / a hour (BÜYÜK YANLIŞ)",
                            correct: "a university / an hour (DOĞRU)",
                            note: "'University' kelimesi 'U' harfiyle yazılsa da ağızdan 'Yuniversity' (/j/) sessiz harfiyle çıkar; bu yüzden 'A' alır. 'Hour' kelimesinde ise 'H' okunmaz ('aur'); sesliyle başladığı için 'AN' alır!"
                        },
                        {
                            title: "TRICK: 'The' Nerede KULLANILMAZ?",
                            wrong: "I live in the Turkey. / I love the cats. (Genel anlamda)",
                            correct: "I live in Turkey. / I love cats.",
                            note: "Şehir, ülke isimlerinin önünde (The USA, The UK gibi birlik/çoğul olanlar hariç) 'the' KULLANILMAZ. Ayrıca dünyadaki tüm kedileri genelleyerek seviyorsanız 'the cats' değil, sadece 'cats' denir."
                        }
                    ],
                    examples: [
                        { en: "I waited for an hour at the bus stop.", tr: "Otobüs durağında bir saat bekledim." },
                        { en: "She wants to study at a university in London.", tr: "Londra'da bir üniversitede okumak istiyor." },
                        { en: "Could you please close the window?", tr: "Pencereyi kapatabilir misiniz lütfen? (Odadaki o belirli pencere)" }
                    ]
                },
                {
                    title: "2.2 This, That, These, Those (İşaret Zamirleri)",
                    content: `
                        <div class="grid grid-cols-2 gap-3 my-3">
                            <div class="p-3 bg-gray-800 rounded border border-gray-700">
                                <span class="text-xs text-blue-400 font-bold block">YAKINDA</span>
                                <div class="text-sm font-bold text-white mt-1">THIS (Bu - Tekil)</div>
                                <div class="text-xs text-gray-300">This is my phone.</div>
                                <div class="text-sm font-bold text-white mt-3">THESE (Bunlar - Çoğul)</div>
                                <div class="text-xs text-gray-300">These are my keys.</div>
                            </div>
                            <div class="p-3 bg-gray-800 rounded border border-gray-700">
                                <span class="text-xs text-amber-400 font-bold block">UZAKTA</span>
                                <div class="text-sm font-bold text-white mt-1">THAT (Şu/O - Tekil)</div>
                                <div class="text-xs text-gray-300">That is a high mountain.</div>
                                <div class="text-sm font-bold text-white mt-3">THOSE (Şunlar/Onlar - Çoğul)</div>
                                <div class="text-xs text-gray-300">Those are birds.</div>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Düzensiz Çoğullar (-s almayanlar)",
                            wrong: "mans, womans, childs, persons, tooths",
                            correct: "men, women, children, people, teeth",
                            note: "Bu kelimeler çoğul yapılırken sonuna -s eklenmez, kökten değişir: One child -> Two children. One person -> Five people."
                        }
                    ],
                    examples: [
                        { en: "This book is very interesting, but that one over there is boring.", tr: "Bu kitap çok ilginç, ama şuradaki sıkıcı." },
                        { en: "Are these your shoes or those under the bed?", tr: "Bu ayakkabılar mı seninki yoksa yatağın altındakiler mi?" }
                    ]
                }
            ],
            vocabulary: [
                { word: "Door", pronunciation: "/dɔːr/", tr: "Kapı", example: "Please open the door." },
                { word: "Window", pronunciation: "/ˈwɪn.dəʊ/", tr: "Pencere", example: "Close the window, it is cold." },
                { word: "People", pronunciation: "/ˈpiː.pəl/", tr: "İnsanlar (çoğul)", example: "Many people live in this city." },
                { word: "Children", pronunciation: "/ˈtʃɪl.drən/", tr: "Çocuklar", example: "The children are playing in the garden." },
                { word: "University", pronunciation: "/ˌjuː.nɪˈvɜː.sə.ti/", tr: "Üniversite", example: "He is a student at a university." },
                { word: "Hour", pronunciation: "/aʊər/", tr: "Saat (zaman süresi)", example: "The film lasted for an hour." }
            ]
        },
        {
            id: "a1_u3",
            title: "Ünite 3: Zamirler Haritası (Subject, Object, Possessive) & To Be Derinliği",
            description: "Ben, beni/bana, benim, benimki farkları ve 'To Be' fiilinin tüm kullanım püf noktaları.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "3.1 Zamirler Tablosu (Hayat Kurtaran Karşılaştırma)",
                    content: `
                        <p class="mb-3">İngilizcede bir şahsı belirtirken cümlenin neresinde yer aldığına göre zamir şekil değiştirir:</p>
                        
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Özne (Subject)</th>
                                        <th class="py-2">Nesne (Object)</th>
                                        <th class="py-2">İyelik Sıfatı (+İsim)</th>
                                        <th class="py-2">İyelik Zamiri (Yalnız)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">I (Ben)</td>
                                        <td>me (beni/bana)</td>
                                        <td>my car (benim)</td>
                                        <td>mine (benimki)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">You (Sen/Siz)</td>
                                        <td>you (seni/size)</td>
                                        <td>your car (senin)</td>
                                        <td>yours (seninki)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">He (O - Erkek)</td>
                                        <td>him (onu/ona)</td>
                                        <td>his car (onun)</td>
                                        <td>his (onunki)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">She (O - Kadın)</td>
                                        <td>her (onu/ona)</td>
                                        <td>her car (onun)</td>
                                        <td>hers (onunki)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">It (O - Cansız/Hayvan)</td>
                                        <td>it (onu/ona)</td>
                                        <td>its tail (onun)</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">We (Biz)</td>
                                        <td>us (bizi/bize)</td>
                                        <td>our house (bizim)</td>
                                        <td>ours (bizimki)</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">They (Onlar)</td>
                                        <td>them (onları/onlara)</td>
                                        <td>their house (onların)</td>
                                        <td>theirs (onlarınki)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'My' vs 'Mine' Ayrımı",
                            wrong: "This is mine book. / This book is my.",
                            correct: "This is my book. / This book is mine.",
                            note: "'My, your, our, their' arkasından MUTLAKA bir isim ister (my car, your house). 'Mine, yours, ours, theirs' ise tek başına kullanılır, arkasından isim ASLA GELMEZ!"
                        },
                        {
                            title: "TRICK: 'It's' vs 'Its' Farkı",
                            wrong: "The dog wagged it's tail.",
                            correct: "The dog wagged its tail. / It's a nice day.",
                            note: "<strong>It's</strong> = 'It is' kısaltmasıdır (O bir... dir).<br><strong>Its</strong> = Kesmesiz yazılır ve 'onun' (sahiplik) demektir."
                        }
                    ],
                    examples: [
                        { en: "Call him right now and tell him to meet us.", tr: "Onu hemen ara ve bizimle buluşmasını söyle." },
                        { en: "Is this pen yours or mine?", tr: "Bu kalem seninki mi yoksa benimki mi?" },
                        { en: "Our school is bigger than theirs.", tr: "Bizim okulumuz onlarınkinden daha büyük." }
                    ]
                },
                {
                    title: "3.2 'To Be' (Am / Is / Are) Hayati Kuralları",
                    content: `
                        <p class="mb-3">İngilizcede <strong>durum, kimlik, yaş, duygu, hava durumu ve yer</strong> bildirirken To Be (am/is/are) kullanılır. Cümlede koşmak, yemek, uyumak gibi bir eylem fiili YOKTUR.</p>
                        
                        <ul class="list-disc pl-5 text-xs text-gray-300 space-y-1.5 my-2">
                            <li><strong>Yaş:</strong> I am 22 years old. (have DEĞİL!)</li>
                            <li><strong>Duygu / Durum:</strong> She is hungry. We are tired. They are cold.</li>
                            <li><strong>Meslek:</strong> He is a doctor. I am an engineer. (a/an unutulmaz!)</li>
                            <li><strong>Hava Durumu:</strong> It is hot today. It is windy.</li>
                        </ul>
                    `,
                    criticalTips: [
                        {
                            title: "En Yaygın Hata: 'I am agree' ve 'I am like'",
                            wrong: "I am agree with you. / I am like pizza.",
                            correct: "I agree with you. / I like pizza.",
                            note: "'Agree' (katılmak) ve 'Like' (sevmek/beğenmek) doğrudan birer eylem fiilidir. Eylem fiili olan bir cümleye 'am/is/are' SIKIŞTIRILAMAZ!"
                        }
                    ],
                    examples: [
                        { en: "Are you afraid of spiders? No, I am not.", tr: "Örümceklerden korkar mısın? Hayır, korkmam." },
                        { en: "My father is 50 years old and he is an architect.", tr: "Babam 50 yaşında ve o bir mimar." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Afraid of", pronunciation: "/əˈfreɪd əv/", tr: "Korkmak (-den korkan)", example: "Are you afraid of dogs?" },
                { word: "Cold", pronunciation: "/kəʊld/", tr: "Soğuk / Üşümüş", example: "I am cold, please close the window." },
                { word: "Hot", pronunciation: "/hɒt/", tr: "Sıcak / Bunaltıcı", example: "It is very hot outside today." },
                { word: "Angry", pronunciation: "/ˈæŋ.ɡri/", tr: "Kızgın, öfkeli", example: "Why is the boss angry with us?" },
                { word: "Architect", pronunciation: "/ˈɑː.kɪ.tekt/", tr: "Mimar", example: "She is a talented architect." },
                { word: "Dangerous", pronunciation: "/ˈdeɪn.dʒər.əs/", tr: "Tehlikeli", example: "Swimming in this river is dangerous." }
            ]
        },
        {
            id: "a1_u4",
            title: "Ünite 4: Soru Kelimeleri (Wh- Questions / 5N1K)",
            description: "Who, What, Where, When, Why, Which, Whose ve How (much/many/often) soru kalıplarının mantığı.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "4.1 Soru Kelimeleri Formülü & Cümle Sıralaması",
                    content: `
                        <p class="mb-3">İngilizcede soru oluştururken altın formül: <strong>WH- Kelimesi + Yardımcı Fiil (am/is/are/do/does) + Özne + Fiil</strong></p>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                            <div class="p-3 bg-gray-800 rounded border border-gray-700">
                                <span class="text-blue-400 font-bold">WHO:</span> Kim? (Who is that girl?)<br>
                                <span class="text-blue-400 font-bold">WHAT:</span> Ne? (What is your name?)<br>
                                <span class="text-blue-400 font-bold">WHERE:</span> Nerede / Nereye? (Where do you live?)<br>
                                <span class="text-blue-400 font-bold">WHEN:</span> Ne zaman? (When does the train leave?)
                            </div>
                            <div class="p-3 bg-gray-800 rounded border border-gray-700">
                                <span class="text-indigo-400 font-bold">WHY:</span> Neden? (Why are you late?)<br>
                                <span class="text-indigo-400 font-bold">WHICH:</span> Hangisi? (Which color do you prefer?)<br>
                                <span class="text-indigo-400 font-bold">WHOSE:</span> Kimin? (Whose car is this?)<br>
                                <span class="text-indigo-400 font-bold">HOW:</span> Nasıl? (How do you go to work?)
                            </div>
                        </div>

                        <div class="p-3 bg-gray-900 rounded-lg border border-gray-800 text-xs text-gray-300">
                            <strong>HOW Türevleri:</strong><br>
                            • <em>How much:</em> Ne kadar? (fiyat ve sayılamayanlar için)<br>
                            • <em>How many:</em> Kaç tane? (sayılabilen çoğullar için)<br>
                            • <em>How often:</em> Ne sıklıkla? (How often do you exercise?)<br>
                            • <em>How far:</em> Ne kadar uzaklıkta?
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'Where you live?' Yanılgısı (Yardımcı Fiilsiz Soru Kurulmaz!)",
                            wrong: "Where you live? / What you want? (SOKAKTA ANLAŞILIR AMA GRAMERCE YANLIŞ)",
                            correct: "Where do you live? / What do you want?",
                            note: "Soru cümlesinde öznenin önüne 'do / does' veya 'am / is / are' gelmesi şarttır!"
                        }
                    ],
                    examples: [
                        { en: "How often do you visit your parents?", tr: "Aileni ne sıklıkla ziyaret edersin?" },
                        { en: "How much does this leather jacket cost?", tr: "Bu deri ceketin fiyatı ne kadar?" },
                        { en: "Whose notebook is this on my desk?", tr: "Masanın üzerindeki bu defter kimin?" }
                    ]
                }
            ],
            vocabulary: [
                { word: "How often", pronunciation: "/haʊ ˈɒf.ən/", tr: "Ne sıklıkla", example: "How often do you go swimming?" },
                { word: "Prefer", pronunciation: "/prɪˈfɜːr/", tr: "Tercih etmek", example: "Which tea do you prefer?" },
                { word: "Cost", pronunciation: "/kɒst/", tr: "Fiyatı olmak / Mal olmak", example: "How much does it cost?" },
                { word: "Parent", pronunciation: "/ˈpeə.rənt/", tr: "Ebeveyn (Anne/Baba)", example: "My parents live in Izmir." },
                { word: "Desk", pronunciation: "/desk/", tr: "Çalışma masası", example: "Put your books on the desk." },
                { word: "Leather", pronunciation: "/ˈleð.ər/", tr: "Deri", example: "He bought a black leather jacket." }
            ]
        },
        {
            id: "a1_u5",
            title: "Ünite 5: Geniş Zaman (Present Simple) & Sıklık Zarfları",
            description: "Rutinler, alışkanlıklar, Do/Does, 3. tekil şahıs (-s, -es, -ies) ve sıklık zarflarının cümledeki yeri.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "5.1 Geniş Zaman Kuralları ve 3. Tekil Şahıs Kuralı",
                    content: `
                        <p class="mb-3">Her gün, düzenli olarak yaptığımız eylemleri anlatırken <strong>Present Simple</strong> kullanılır.</p>
                        
                        <div class="p-3 bg-gray-800 rounded-lg border border-blue-600/40 my-3 text-xs space-y-2">
                            <p><strong>Olumlu (+) Cümle:</strong></p>
                            <p>I / You / We / They + <strong>V1 (Fiil yalın)</strong> ➔ I play football every Saturday.</p>
                            <p>He / She / It + <strong>Fiil + s / es / ies</strong> ➔ He plays football every Saturday.</p>
                            <div class="border-t border-gray-700 pt-2 text-gray-400">
                                📌 <em>-es kuralı:</em> Fiil s, sh, ch, x, o ile bitiyorsa -es gelir: go -> goes, watch -> watches.<br>
                                📌 <em>-ies kuralı:</em> Sessiz harf + y ile bitiyorsa y düşer, ies gelir: study -> studies (ama play -> plays çünkü sesli + y).
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "ALTIN KURAL: 'Does' ve 'Doesn't' Varsa -S Eki UÇAR GİDER!",
                            wrong: "He doesn't works. / Does she speaks Turkish? (ÇOK YAYGIN HATA)",
                            correct: "He doesn't work. / Does she speak Turkish? (DOĞRU)",
                            note: "'Does' eki zaten '-s'i bünyesine almıştır. Bir cümleye iki defa 3. tekil eki yüklenemez."
                        },
                        {
                            title: "TRICK: Sıklık Zarfları Nereye Konur?",
                            wrong: "I drink coffee always. (TÜRKÇE DÜŞÜNCE HATASI)",
                            correct: "I always drink coffee. / She is always late.",
                            note: "Sıklık zarfları (always, usually, often, sometimes, rarely, never) <strong>esas fiilin ÖNÜNDE</strong>, fakat <strong>am/is/are'ın ARKASINDA</strong> yer alır!"
                        }
                    ],
                    examples: [
                        { en: "She usually walks to work, but she never takes the taxi.", tr: "İşe genellikle yürüyerek gider ama asla taksiye binmez." },
                        { en: "Does your brother play the guitar?", tr: "Erkek kardeşin gitar çalar mı?" },
                        { en: "My father watches the news every evening at 8.", tr: "Babam her akşam saat 8'de haberleri izler." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Always", pronunciation: "/ˈɔːl.weɪz/", tr: "Her zaman, daima (%100)", example: "She always smiles." },
                { word: "Usually", pronunciation: "/ˈjuː.ʒu.ə.li/", tr: "Genellikle (%80)", example: "I usually wake up early." },
                { word: "Often", pronunciation: "/ˈɒf.ən/", tr: "Sık sık (%60)", example: "They often eat out." },
                { word: "Sometimes", pronunciation: "/ˈsʌm.taɪmz/", tr: "Bazen (%40)", example: "We sometimes watch movies together." },
                { word: "Rarely / Seldom", pronunciation: "/ˈreə.li/", tr: "Nadiren (%10)", example: "He rarely drinks alcohol." },
                { word: "Never", pronunciation: "/ˈnev.ər/", tr: "Asla, hiçbir zaman (%0)", example: "I never eat mushrooms." }
            ]
        },
        {
            id: "a1_u6",
            title: "Ünite 6: Şimdiki Zaman (Present Continuous) vs Durum Fiilleri (State Verbs)",
            description: "Şu an gerçekleşen eylemler (am/is/are + Ving) ve asla -ing almayan duyu/düşünce fiilleri.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "6.1 Present Continuous ve State Verbs Tuzağı",
                    content: `
                        <p class="mb-3">Konuşma anında gerçekleşmekte olan eylemler için <strong>am / is / are + Fiil-ing</strong> kullanılır.</p>
                        <p class="text-sm"><em>Örn: What are you doing right now? - I am studying English.</em></p>
                        
                        <div class="p-3 bg-gray-800 rounded-lg border border-rose-500/40 my-3">
                            <h5 class="text-rose-400 font-bold mb-1">🚫 DİKKAT: -ing ALMAYAN FİİLLER (State / Stative Verbs)</h5>
                            <p class="text-xs text-gray-300 mb-2">Bazı fiiller bir fiziksel eylem bildirmez; zihinsel durum, sahiplik veya his bildirir. Bu fiiller şu anda yapılıyor olsalar bile <strong>ASLA -ING ALMAZLAR</strong>, Geniş Zaman ile söylenirler!</p>
                            <div class="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    • <strong>Düşünce:</strong> know, understand, believe, remember<br>
                                    • <strong>His:</strong> love, like, hate, want, need
                                </div>
                                <div>
                                    • <strong>Duyu:</strong> see, hear, smell, taste<br>
                                    • <strong>Sahiplik:</strong> have, belong, own
                                </div>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'I am knowing' veya 'I am understanding' DİYEMEZSİNİZ!",
                            wrong: "I am understanding you right now. / I am knowing him.",
                            correct: "I understand you right now. / I know him.",
                            note: "Türkçede 'Şu an seni anlıyorum' desek de, İngilizcede understand bir süreç değil anlık zihinsel durumdur. Bu yüzden daima 'I understand' denir!"
                        }
                    ],
                    examples: [
                        { en: "Look! It is snowing outside right now.", tr: "Bak! Şu an dışarıda kar yağıyor." },
                        { en: "I don't understand this grammar rule, can you explain it?", tr: "Bu gramer kuralını anlamıyorum, açıklayabilir misiniz?" },
                        { en: "Why are you crying? What is happening?", tr: "Neden ağlıyorsun? Ne oluyor?" }
                    ]
                }
            ],
            vocabulary: [
                { word: "Understand", pronunciation: "/ˌʌn.dəˈstænd/", tr: "Anlamak (State verb)", example: "Do you understand me?" },
                { word: "Believe", pronunciation: "/bɪˈliːv/", tr: "İnanmak", example: "I believe you." },
                { word: "Happen", pronunciation: "/ˈhæp.ən/", tr: "Meydana gelmek, olmak", example: "Accidents happen quickly." },
                { word: "Explain", pronunciation: "/ɪkˈspleɪn/", tr: "Açıklamak, izah etmek", example: "Please explain this word." },
                { word: "Cry", pronunciation: "/kraɪ/", tr: "Ağlamak", example: "Why is the baby crying?" },
                { word: "Laugh", pronunciation: "/lɑːf/", tr: "Gülmek", example: "They were laughing at the joke." }
            ]
        },
        {
            id: "a1_u7",
            title: "Ünite 7: Sahiplik (Have got / Has got vs Have) & Modal 'Can'",
            description: "İngiliz vs Amerikan İngilizcesi farkı, yetenekler (can/can't), rica ve izin kalıpları.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "7.1 Have Got vs Do you Have Farkı & Can / Can't",
                    content: `
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                            <div class="p-3 bg-gray-800 rounded border border-blue-600/40">
                                <h5 class="text-blue-400 font-bold mb-1">🇬🇧 İngiliz İngilizcesi (Have got)</h5>
                                <p class="text-xs text-gray-300">
                                    • I have got a car. (Arabam var)<br>
                                    • I haven't got a car.<br>
                                    • Have you got a car?
                                </p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded border border-emerald-600/40">
                                <h5 class="text-emerald-400 font-bold mb-1">🇺🇸 Amerikan İngilizcesi (Do you have)</h5>
                                <p class="text-xs text-gray-300">
                                    • I have a car.<br>
                                    • I don't have a car.<br>
                                    • Do you have a car?
                                </p>
                            </div>
                        </div>
                        <p class="text-xs text-gray-400">İkisi de tamamen aynı anlama gelir. Ancak 'got' kelimesi varsa soru 'Have you got...?', yoksa 'Do you have...?' şeklinde sorulur.</p>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'Do you have got' Diye Bir Şey YOKTUR!",
                            wrong: "Do you have got a pen? (KARIŞIK VE HATALI)",
                            correct: "Have you got a pen? VEYA Do you have a pen?",
                            note: "İki sistemi birbirine çorba yapmayın. Ya 'Have you got' deyin ya da 'Do you have' deyin."
                        },
                        {
                            title: "TRICK: Can / Can't Sonrası Fiil DAİMA YALINDIR!",
                            wrong: "She can to swim. / He can plays piano.",
                            correct: "She can swim. / He can play piano.",
                            note: "Can bir modal yardımcı fiildir. Sonrasına asla 'to' veya '-s' takısı almaz!"
                        }
                    ],
                    examples: [
                        { en: "I can speak two foreign languages fluently.", tr: "İki yabancı dili akıcı bir şekilde konuşabiliyorum." },
                        { en: "Can you lend me your dictionary for five minutes?", tr: "Sözlüğünü bana beş dakikalığına ödünç verebilir misin?" },
                        { en: "He hasn't got any brothers or sisters.", tr: "Onun hiç erkek veya kız kardeşi yok." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Foreign", pronunciation: "/ˈfɒr.ən/", tr: "Yabancı (ülke/dil)", example: "Learning a foreign language is fun." },
                { word: "Fluently", pronunciation: "/ˈfluː.ənt.li/", tr: "Akıcı bir şekilde", example: "He speaks English fluently." },
                { word: "Lend", pronunciation: "/lend/", tr: "Ödünç vermek", example: "Can you lend me your pen?" },
                { word: "Borrow", pronunciation: "/ˈbɒr.əʊ/", tr: "Ödünç almak", example: "Can I borrow your umbrella?" },
                { word: "Dictionary", pronunciation: "/ˈdɪk.ʃən.ər.i/", tr: "Sözlük", example: "Look up the word in the dictionary." },
                { word: "Umbrella", pronunciation: "/ʌmˈbrel.ə/", tr: "Şemsiye", example: "Take an umbrella, it is raining." }
            ]
        },
        {
            id: "a1_u8",
            title: "Ünite 8: Yer & Zaman Edatları (IN - ON - AT Piramidi)",
            description: "Genelden özele edat mantığı, gün/ay/yıl kuralları ve mekan içi konumlandırmalar.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "8.1 IN, ON, AT Piramit Mantığı",
                    content: `
                        <p class="mb-3">İngilizcede edatları tek tek ezberlemek yerine <strong>Büyükten Küçüğe (Genelden Özele)</strong> piramit mantığıyla öğrenmek işinizi çok kolaylaştırır:</p>
                        
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-blue-950/60 rounded-xl border border-blue-800">
                                <span class="font-bold text-blue-300 text-sm">🔻 IN (En Geniş / En Kapsayıcı)</span>
                                <p class="text-gray-300 mt-1">
                                    • <strong>Zaman:</strong> Yüzyıllar, Yıllar, Mevsimler, Aylar, Günün bölümleri (in 2026, in summer, in July, in the morning)<br>
                                    • <strong>Mekan:</strong> Ülkeler, Şehirler, Kapalı alanın içi (in Turkey, in Istanbul, in the room, in the car)
                                </p>
                            </div>
                            <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-800">
                                <span class="font-bold text-indigo-300 text-sm">🔹 ON (Daha Dar / Çizgisel & Yüzey)</span>
                                <p class="text-gray-300 mt-1">
                                    • <strong>Zaman:</strong> Günler, Özel tarihler, Günün belirli kısmı (on Monday, on May 19th, on my birthday, on Friday morning)<br>
                                    • <strong>Mekan:</strong> Yüzeyler, Caddeler/Sokaklar, Toplu taşıma (on the table, on Oxford Street, on the bus, on a plane)
                                </p>
                            </div>
                            <div class="p-3 bg-emerald-950/60 rounded-xl border border-emerald-800">
                                <span class="font-bold text-emerald-300 text-sm">📍 AT (Nokta Atışı / En Spesifik)</span>
                                <p class="text-gray-300 mt-1">
                                    • <strong>Zaman:</strong> Saatler, Kesin anlar, Gece (at 4:30 PM, at noon, at midnight, at night, at the weekend)<br>
                                    • <strong>Mekan:</strong> Noktasal konumlar, Kurumlar/Etkinlikler (at the bus stop, at home, at work, at school, at the door)
                                </p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Taşıtlarda 'IN' mi 'ON' mu?",
                            wrong: "I am in the bus. / I am on the taxi.",
                            correct: "I am on the bus / on the train / on the plane. AMA I am in the car / in the taxi.",
                            note: "<strong>Kural:</strong> İçinde ayakta yürüyebildiğiniz büyük toplu taşımalarda <strong>ON</strong> (on the bus/train/plane/ship), içine eğilerek oturup kapısını kapattığınız küçük taşıtlarda <strong>IN</strong> (in the car, in the taxi) kullanılır!"
                        },
                        {
                            title: "TRICK: 'At night' İstisnası!",
                            wrong: "in the night (genellikle doğal değildir)",
                            correct: "in the morning, in the afternoon, in the evening AMA <strong>at night</strong>!",
                            note: "Günün sabah, öğle ve akşam kısımları 'in the...' iken gece vakti 'at night' alır."
                        }
                    ],
                    examples: [
                        { en: "I was born in 1998 on a sunny Tuesday at 6:00 in the morning.", tr: "1998'de (in), güneşli bir salı gününde (on), sabah saat 6'da (at 6, in the morning) doğdum." },
                        { en: "Are you at home right now? No, I am on the bus.", tr: "Şu an evde misin? Hayır, otobüsteyim." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Morning", pronunciation: "/ˈmɔː.nɪŋ/", tr: "Sabah", example: "I drink tea in the morning." },
                { word: "Afternoon", pronunciation: "/ˌɑːf.təˈnuːn/", tr: "Öğleden sonra", example: "We have a meeting in the afternoon." },
                { word: "Midnight", pronunciation: "/ˈmɪd.naɪt/", tr: "Gece yarısı (saat 00:00)", example: "The party ended at midnight." },
                { word: "Noon", pronunciation: "/nuːn/", tr: "Öğle vakti (saat 12:00)", example: "Let's eat lunch at noon." },
                { word: "Weekend", pronunciation: "/ˌwiːkˈend/", tr: "Hafta sonu", example: "What are you doing at the weekend?" },
                { word: "Bus stop", pronunciation: "/ˈbʌs stɒp/", tr: "Otobüs durağı", example: "Wait for me at the bus stop." }
            ]
        }
    ],
    exam: {
        title: "A1 Seviye Sonu Kapsamlı Değerlendirme & Seviye Atlama Sınavı",
        passScore: 70,
        description: "A1 seviyesindeki tüm kritik püf noktaları, kelimeleri ve dilbilgisi kurallarını test edin. A2 seviyesini açmak için en az %70 puan almalısınız.",
        multipleChoice: [
            {
                question: "Hangi seçenekteki artikeller (a / an) tamamen doğru kullanılmıştır?",
                options: [
                    "an university / an apple / a hour",
                    "a university / an apple / an hour",
                    "a university / a apple / a hour",
                    "an university / an apple / an hour"
                ],
                answer: 1,
                explanation: "'University' kelimesi /j/ sesiyle başladığı için 'A university', 'hour' kelimesi sessiz 'h' ile /aʊər/ sesli başladığı için 'AN hour' alır!"
            },
            {
                question: "'She _______ (not / like) horror films, but her brother _______ (watch) them every night.'",
                options: [
                    "doesn't likes / watchs",
                    "don't like / watches",
                    "doesn't like / watches",
                    "isn't like / is watch"
                ],
                answer: 2,
                explanation: "'Doesn't' gelince fiildeki -s eki düşer ve yalın kalır ('doesn't like'). 3. tekil olumlu cümlede -ch ile bittiği için -es gelir ('watches')."
            },
            {
                question: "Hangi cümle Türk öğrencilerin sıkça yaptığı anlatım bozukluğundan UZAKTIR (yani tamamen doğrudur)?",
                options: [
                    "I am agree with you because I am 20 years old.",
                    "I agree with you because I am 20 years old.",
                    "I am agree with you because I have 20 years old.",
                    "I agree with you because I have 20 years old."
                ],
                answer: 1,
                explanation: "'Agree' eylem fiilidir ('am agree' denmez) ve yaş 'am/is/are' ile belirtilir ('have' denmez)!"
            },
            {
                question: "'This is _______ pencil, but that red one over there is _______.'",
                options: [
                    "my / your",
                    "mine / yours",
                    "my / yours",
                    "mine / your"
                ],
                answer: 2,
                explanation: "İsimden önce iyelik sıfatı gelir ('my pencil'), cümlenin sonunda tek başına iyelik zamiri gelir ('yours' = seninki)."
            },
            {
                question: "'I _______ (understand) this math problem right now.' boşluğuna hangisi gelmelidir?",
                options: [
                    "am understanding",
                    "understand",
                    "am understand",
                    "understands"
                ],
                answer: 1,
                explanation: "'Understand' bir State Verb (durum fiili) olduğu için şu an olsa bile ASLA -ing almaz, 'understand' denir!"
            },
            {
                question: "Taşıtlar ve mekanlar için edat kullanımı hangi seçenekte DOĞRUDUR?",
                options: [
                    "I am in the bus, but my father is on his car.",
                    "I am on the bus, but my father is in his car.",
                    "I am at the bus, but my father is on his car.",
                    "I am on the taxi, but my father is on the train."
                ],
                answer: 1,
                explanation: "İçinde ayakta yürünebilen büyük toplu taşımalarda 'ON the bus', küçük binek araçlarda 'IN the car' kullanılır!"
            },
            {
                question: "'Can you _______ with us tonight?'",
                options: [
                    "to come",
                    "coming",
                    "comes",
                    "come"
                ],
                answer: 3,
                explanation: "'Can' modal fiilinden sonra gelen esas fiil her zaman yalın (V1) haldedir."
            },
            {
                question: "'How _______ luggage do you have and how _______ bags are there?'",
                options: [
                    "many / much",
                    "much / many",
                    "many / many",
                    "much / much"
                ],
                answer: 1,
                explanation: "'Luggage' sayılamayan tekil isim olduğundan 'How much', 'bags' sayılabilen çoğul olduğundan 'How many' kullanılır."
            }
        ],
        matching: [
            {
                prompt: "A1 kritik kalıp ve kelimelerini doğru Türkçe anlamlarıyla eşleştirin:",
                pairs: [
                    { left: "Listen to me", right: "Beni dinle (t okunmaz)" },
                    { left: "I have no doubt", right: "Hiç şüphem yok (b okunmaz)" },
                    { left: "At the weekend", right: "Hafta sonunda" },
                    { left: "Borrow a book", right: "Ödünç kitap almak" },
                    { left: "Lend money", right: "Borç/ödünç para vermek" }
                ]
            }
        ],
        translation: [
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Ben şu an bu kuralı anlıyorum.'",
                acceptable: [
                    "I understand this rule right now.",
                    "I understand this rule now."
                ],
                tip: "'Understand' -ing eki ALMAZ; 'I understand' şeklinde kurulur."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Otobüste iki tane çocuk var.'",
                acceptable: [
                    "There are two children on the bus.",
                    "There are 2 children on the bus."
                ],
                tip: "Çoğul çocuk 'children'dır ve otobüs için 'on the bus' kullanılır."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'O (erkek) genellikle sabahları erken uyanır.'",
                acceptable: [
                    "He usually wakes up early in the morning.",
                    "He usually gets up early in the morning."
                ],
                tip: "3. tekil için 'wakes up' ve sabah için 'in the morning'."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Bu kırmızı araba benimki değil, onunki (kadın).'",
                acceptable: [
                    "This red car is not mine, it is hers.",
                    "This red car isn't mine, it is hers.",
                    "This red car is not mine, it's hers.",
                    "This red car isn't mine, it's hers."
                ],
                tip: "İyelik zamirleri: 'mine' (benimki) ve 'hers' (onunki)."
            }
        ]
    }
};
