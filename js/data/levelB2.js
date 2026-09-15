// LinguaFlow - B2 Level Data (Tam Anlamıyla Yeterli / İleri Düzey Akıcılık)
window.LEVEL_B2 = {
    id: "B2",
    title: "B2 - İleri Orta Seviye (Upper Intermediate / Akıcı & Profesyonel)",
    description: "Type 3 & Karma Koşullar, Causative yapıları, Devrik Cümleler (Inversion), Wish Cümleleri, Profesyonel Diyaloglar, Mini Alıştırmalar ve İş/Akademik İfadeler.",
    color: "#ec4899",
    videoPlaylistUrl: "https://www.youtube.com/playlist?list=PLxX2m2Np79VfE8qgLtUZHwCF0VyuFH8QI",
    units: [
        {
            id: "b2_u1",
            title: "Ünite 1: Geçmiş Pişmanlıkları (Type 3 & Mixed Conditionals)",
            description: "Değiştirilemeyen geçmiş olayların pişmanlık analizi ve geçmiş kararların bugüne olan karma yansımaları.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "1.1 Type 3 ve Karma Koşul (Mixed Conditionals) Mantığı",
                    content: `
                        <p class="mb-3">B2 seviyesinin en prestijli konularından biri <strong>Mixed Conditionals</strong> (Karma Koşullar) yapısıdır. Geçmişteki bir eylemin bugünkü sonucunu bağlar:</p>
                        
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-pink-600/40">
                                <span class="font-bold text-pink-400 text-sm block mb-1">🔙 Type 3 (Tamamen Geçmişte Kalan Pişmanlık)</span>
                                <p class="text-gray-300">Formül: <strong>If + Past Perfect (had + V3), would have + V3</strong></p>
                                <p class="font-mono text-white mt-1">If I had studied harder, I would have passed the exam.</p>
                                <p class="text-gray-400 italic">(Daha sıkı çalışsaydım sınavı geçmiş olurdum - ama çalışmadım ve kaldım, her şey geçmişte bitti.)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-indigo-600/40">
                                <span class="font-bold text-indigo-400 text-sm block mb-1">🔀 Mixed Conditional 1 (Geçmişteki Eylem ➔ Bugünkü Sonuç)</span>
                                <p class="text-gray-300">Formül: <strong>If + had + V3, would + V1 (now / today)</strong></p>
                                <p class="font-mono text-white mt-1">If I had accepted that job offer last year, I would be living in New York today.</p>
                                <p class="text-gray-400 italic">(Geçen yıl o iş teklifini kabul etmiş olsaydım, BUGÜN New York'ta yaşıyor olurdum.)</p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'If' Tarafına 'Would Have' KOYAN YANAR!",
                            wrong: "If I would have known the truth, I wouldn't have called you.",
                            correct: "If I had known the truth, I wouldn't have called you.",
                            note: "Türkçedeki 'Bilmiş olsaydım' mantığıyla If cümlesine kesinlikle 'would have' yazılmaz! If tarafı 'had + V3' alır, sonuç tarafı 'would have + V3' alır."
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'If they _______ (take) our advice yesterday, they _______ (not / be) in trouble right now.'",
                            options: [
                                "had taken / wouldn't be",
                                "took / won't be",
                                "had taken / wouldn't have been",
                                "would take / weren't"
                            ],
                            answer: 0,
                            explanation: "Geçmişteki eylem ('had taken') ile şimdiki sonuç ('wouldn't be right now') birleştiğinde Mixed Conditional oluşur."
                        }
                    ],
                    examples: [
                        { en: "If we had left earlier, we wouldn't be stuck in this traffic jam right now.", tr: "Daha erken çıkmış olsaydık, şu anda bu trafik sıkışıklığında tıkılıp kalmış olmazdık (Mixed)." },
                        { en: "She could have become a doctor if her family had supported her.", tr: "Ailesi onu desteklemiş olsaydı bir doktor olabilirdi." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Regret", pronunciation: "/rɪˈɡret/", tr: "Pişman olmak / Pişmanlık", example: "I have no regrets about my past." },
                { word: "Traffic jam", pronunciation: "/ˈtræf.ɪk dʒæm/", tr: "Trafik sıkışıklığı", example: "We got stuck in a huge traffic jam." },
                { word: "Support", pronunciation: "/səˈpɔːt/", tr: "Desteklemek / Destek", example: "Thank you for supporting my career." },
                { word: "Consequence", pronunciation: "/ˈkɒn.sɪ.kwəns/", tr: "Sonuç / Netice", example: "You must accept the consequences." },
                { word: "Substantial", pronunciation: "/səbˈstæn.ʃəl/", tr: "Önemli, kayda değer", example: "There has been a substantial increase in sales." },
                { word: "Compromise", pronunciation: "/ˈkɒm.prə.maɪz/", tr: "Uzlaşmak / Ödün vermek", example: "Both parties agreed to compromise." }
            ]
        },
        {
            id: "b2_u2",
            title: "Ünite 2: Ettirgen Yapılar (Causatives: Have, Get, Make & Let)",
            description: "Bir işi başkasına yaptırmak, kuaföre saç kestirmek, ustaya tamir ettirmek veya birini bir şey yapmaya zorlamak.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "2.1 Causative Ailesinin 4 Üyesi",
                    content: `
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table text-xs">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Kalıp</th>
                                        <th class="py-2">Anlam & Nüans</th>
                                        <th class="py-2">Örnek</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-blue-400">Have / Get something done (V3)</td>
                                        <td>Bir hizmeti ücret karşılığı veya üçüncü şahsa yaptırmak</td>
                                        <td>I <strong>had my hair cut</strong> yesterday.<br>She <strong>got her car washed</strong>.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-emerald-400">Have someone DO (V1)</td>
                                        <td>Birine bir işi yaptırmak (görevlendirmek)</td>
                                        <td>I will have my assistant <strong>call</strong> you.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-amber-400">Get someone TO DO (to V1)</td>
                                        <td>Birini ikna ederek yaptırmak</td>
                                        <td>I managed to get him <strong>to sign</strong> the contract.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-rose-400">Make someone DO (V1)</td>
                                        <td>Birini bir şeye zorlamak</td>
                                        <td>The teacher made us <strong>write</strong> the essay again.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'I painted my house' Derseniz Elinize Fırça Aldığınızı Sanırlar!",
                            wrong: "I repaired my car. (Eğer tamirciye gittiyseniz bu yanlıştır!)",
                            correct: "I had my car repaired. (Tamirciye yaptırdım)",
                            note: "Bir uzman veya kurumun yaptığı hizmetlerde daima 'have + nesne + V3' kullanılır."
                        },
                        {
                            title: "TRICK: 'Make' ve 'Let' Arkasından 'TO' GELMEZ!",
                            wrong: "She made me to cry. / Please let me to go.",
                            correct: "She made me cry. / Please let me go.",
                            note: "'Make' (zorlamak) ve 'Let' (izin vermek) arkasından doğrudan yalın fiil (bare infinitive) alır!"
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'I finally got the technician _______ (fix) my air conditioner.'",
                            options: ["fix", "to fix", "fixed", "fixing"],
                            answer: 1,
                            explanation: "'Get someone TO DO' kalıbı birini ikna/rica ile yaptırmaktır ve 'to V1' ('to fix') alır."
                        }
                    ],
                    examples: [
                        { en: "Where did you get your laptop repaired?", tr: "Dizüstü bilgisayarını nerede tamir ettirdin?" },
                        { en: "The strict boss makes everyone work overtime on Fridays.", tr: "Sert patron cuma günleri herkesi fazla mesai yapmaya zorluyor." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Overtime", pronunciation: "/ˈəʊ.və.taɪm/", tr: "Fazla mesai", example: "He worked overtime this week." },
                { word: "Contract", pronunciation: "/ˈkɒn.trækt/", tr: "Sözleşme / Kontrat", example: "Please read the contract before signing." },
                { word: "Strict", pronunciation: "/strɪkt/", tr: "Katı, sert, kuralcı", example: "Our school had very strict rules." },
                { word: "Renovate", pronunciation: "/ˈren.ə.veɪt/", tr: "Tadilat yapmak, yenilemek", example: "They had their kitchen renovated." },
                { word: "Authorize", pronunciation: "/ˈɔː.θər.aɪz/", tr: "Yetki vermek", example: "Only managers can authorize refunds." },
                { word: "Negotiate", pronunciation: "/nəˈɡəʊ.ʃi.eɪt/", tr: "Müzakere etmek", example: "We negotiated a better contract." }
            ]
        },
        {
            id: "b2_u3",
            title: "Ünite 3: Devrik Cümleler (Inversion for Emphasis) & Vurgu Sanatı",
            description: "Cümlenin başına olumsuz zarf geldiğinde soru gibi devrilmesi: 'Seldom have I seen...', 'Not only... but also'.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "3.1 Inversion (Devriklik) Kuralları",
                    content: `
                        <p class="mb-3">İleri seviye akademik ve edebi dilde, anlatımı güçlendirmek için olumsuz zarflar (Rarely, Seldom, Never, Scarcely, Under no circumstances) cümlenin başına alınır. Bu durumda cümle <strong>soru formatına</strong> dönüşür!</p>
                        
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-lg border border-gray-700">
                                <span class="text-gray-400">Normal Cümle:</span> I have never witnessed such dedication.<br>
                                <span class="font-bold text-yellow-400">Devrik (Inversion):</span> <strong>Never have I witnessed</strong> such dedication!
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-gray-700">
                                <span class="text-gray-400">Normal Cümle:</span> He not only apologized, but he also refunded the money.<br>
                                <span class="font-bold text-yellow-400">Devrik (Inversion):</span> <strong>Not only did he apologize</strong>, but he also refunded the money!
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Inversion Yaparken Yardımcı Fiil Özneden ÖNCE Gelir!",
                            wrong: "Rarely I have seen such beauty. (DEVRİK DEĞİL)",
                            correct: "Rarely have I seen such beauty.",
                            note: "Tıpkı 'Have you seen?' sorusundaki gibi yardımcı fiil (have/did/is) öznenin hemen önüne geçer."
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'Under no circumstances _______ leave the laboratory unattended.'",
                            options: ["you should", "should you", "must you to", "did you"],
                            answer: 1,
                            explanation: "Cümle 'Under no circumstances' ile başladığı için devriklik kuralı gereği 'should you' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "Seldom does one encounter such generosity in modern life.", tr: "Modern hayatta insan böylesi bir cömertlikle pek nadir karşılaşır." },
                        { en: "Under no circumstances should you share your banking passwords.", tr: "Hiçbir koşul altında banka şifrelerinizi paylaşmamalısınız." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Encounter", pronunciation: "/ɪnˈkaʊn.tər/", tr: "Karşılaşmak", example: "We encountered unexpected difficulties." },
                { word: "Generosity", pronunciation: "/ˌdʒen.əˈrɒs.ə.ti/", tr: "Cömertlik", example: "Her generosity inspired everyone." },
                { word: "Dedication", pronunciation: "/ˌded.ɪˈkeɪ.ʃən/", tr: "Adanmışlık, özveri", example: "Hard work and dedication lead to success." },
                { word: "Seldom", pronunciation: "/ˈsel.dəm/", tr: "Pek nadir", example: "Seldom do we see such mastery." },
                { word: "Witness", pronunciation: "/ˈwɪt.nəs/", tr: "Tanık olmak / Şahit", example: "She witnessed the entire debate." },
                { word: "Unprecedented", pronunciation: "/ʌnˈpres.ɪ.den.tɪd/", tr: "Eşi benzeri görülmemiş", example: "The company achieved unprecedented growth." }
            ]
        },
        {
            id: "b2_u4",
            title: "Ünite 4: Zıtlık Bağlaçları: 'Although' vs 'Despite / In spite of' vs 'Whereas'",
            description: "Cümle alanlar vs İsim alanlar, 'Despite of' tuzağı ve çifte bağlaç hatası (Although... but).",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "4.1 Zıtlık Bağlaçları Gramer Ayrımı",
                    content: `
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table text-xs">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Bağlaç</th>
                                        <th class="py-2">Arkasından Ne Alır?</th>
                                        <th class="py-2">Örnek</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-blue-400">Although / Even though</td>
                                        <td><strong>Tam Cümle</strong> (Özne + Yüklem)</td>
                                        <td><strong>Although it was raining</strong>, we played tennis.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-rose-400">Despite / In spite of</td>
                                        <td><strong>İsim / Ving (Gerund)</strong></td>
                                        <td><strong>Despite the rain</strong>, we played tennis.<br><strong>In spite of being tired</strong>, he kept working.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-2 font-bold text-purple-400">Whereas / While</td>
                                        <td>Zıtlık karşılaştırması (İki Cümle)</td>
                                        <td>I prefer living in a village, <strong>whereas</strong> my sister loves big cities.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "BÜYÜK TUZAK: 'Despite OF' Diye Bir Şey DÜNYADA YOKTUR!",
                            wrong: "Despite of the bad weather...",
                            correct: "Despite the bad weather... VEYA In spite of the bad weather...",
                            note: "'Of' sadece 'in spite of' yapısında vardır. 'Despite' asla 'of' almaz!"
                        },
                        {
                            title: "TRICK: 'Although' Cümlesine 'BUT' EKLENMEZ!",
                            wrong: "Although he studied hard, but he failed. (İKİLİ ÇAKIŞMA)",
                            correct: "Although he studied hard, he failed. VEYA He studied hard, but he failed.",
                            note: "Bir cümlede hem 'Although' hem de 'But' aynı anda kullanılamaz. Bu Türkçedeki 'Her ne kadar çalışsa da, ama kaldı' anlatım bozukluğudur."
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'_______ the severe financial crisis, their export numbers increased by 20%.'",
                            options: ["Although", "Despite", "Despite of", "Even though"],
                            answer: 1,
                            explanation: "Arkasından isim tamlaması ('the severe financial crisis') geldiği ve 'of' almadığı için 'Despite' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "In spite of having insufficient financial resources, they launched their startup successfully.", tr: "Yetersiz finansal kaynaklarına rağmen girişimlerini başarıyla başlattılar." },
                        { en: "He accepted the low-paying job, whereas his colleagues rejected similar offers.", tr: "Meslektaşları benzer teklifleri reddederken o düşük maaşlı işi kabul etti." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Insufficient", pronunciation: "/ˌɪn.səˈfɪʃ.ənt/", tr: "Yetersiz", example: "There was insufficient evidence." },
                { word: "Colleague", pronunciation: "/ˈkɒl.iːɡ/", tr: "Meslektaş, iş arkadaşı", example: "I have great colleagues at work." },
                { word: "Nevertheless", pronunciation: "/ˌnev.ə.ðəˈles/", tr: "Yine de, buna rağmen", example: "The task was hard; nevertheless, we finished it." },
                { word: "Furthermore", pronunciation: "/ˌfɜː.ðəˈmɔːr/", tr: "Dahası / Üstelik", example: "It is expensive; furthermore, it is unreliable." },
                { word: "Whereas", pronunciation: "/weərˈæz/", tr: "Oysa, -iken (karşıtlık)", example: "Some prefer tea, whereas others prefer coffee." },
                { word: "Take into account", pronunciation: "/teɪk ˈɪn.tuː əˈkaʊnt/", tr: "Dikkate almak, hesaba katmak", example: "You must take inflation into account." }
            ]
        },
        {
            id: "b2_u5",
            title: "Ünite 5: Keşke Cümleleri (Wish & If Only) & B2 İdiomları",
            description: "Şimdiki zaman arzusu, geçmiş pişmanlığı ve profesyonel/günlük hayattaki en popüler B2 deyimleri.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "5.1 Wish Kalıpları & Popüler B2 Deyimleri",
                    content: `
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-lg border border-blue-600/40">
                                <span class="font-bold text-blue-400">1. ŞİMDİKİ ZAMAN İÇİN (Wish + Past Simple):</span><br>
                                <span class="font-mono text-white">I wish I had more free time now. (Keşke şu an daha çok boş vaktim olsa.)</span>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-pink-600/40">
                                <span class="font-bold text-pink-400">2. GEÇMİŞ PİŞMANLIĞI (Wish + Past Perfect):</span><br>
                                <span class="font-mono text-white">I wish I had accepted that scholarship. (Keşke o bursu kabul etmiş olsaydım.)</span>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-amber-600/40">
                                <span class="font-bold text-amber-400">3. ŞİKAYET / İSTEK (Wish + Would):</span><br>
                                <span class="font-mono text-white">I wish you would stop interrupting me! (Keşke sözümü kesmeyi bıraksan!)</span>
                            </div>
                        </div>

                        <div class="p-3 bg-indigo-950/60 rounded-xl border border-indigo-700/60 my-3 text-xs">
                            <h5 class="font-bold text-indigo-300 mb-1">🌟 EN ÇOK ÇIKAN 5 B2 İDİOMU:</h5>
                            <ul class="space-y-1 text-gray-300">
                                <li>• <strong>Hit the nail on the head:</strong> Tam üstüne basmak / Tam isabet tespit.</li>
                                <li>• <strong>Under the weather:</strong> Keyifsiz / Hafif hasta hissetmek.</li>
                                <li>• <strong>A piece of cake:</strong> Çocuk oyuncağı / Aşırı kolay.</li>
                                <li>• <strong>Bite the bullet:</strong> Kaçınılmaz zor bir duruma dişini sıkıp katlanmak.</li>
                                <li>• <strong>See eye to eye:</strong> Biriyle tamamen aynı fikirde olmak.</li>
                            </ul>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Kendiniz için 'I wish I would' KULLANILMAZ!",
                            wrong: "I wish I would be taller.",
                            correct: "I wish I were taller.",
                            note: "'Wish + would' sadece karşınızdaki şahsın veya üçüncü kişilerin şikayetçi olunan davranışlarında kullanılır. Kendi durumunuz için Past Simple kullanılır!"
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'I wish I _______ (not / sell) my shares last month, they have tripled in value now!'",
                            options: ["didn't sell", "hadn't sold", "wouldn't sell", "haven't sold"],
                            answer: 1,
                            explanation: "Geçmişte yapılmış eyleme pişmanlık bildirildiği için 'hadn't sold' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "If only I had listened to my parents' advice back then!", tr: "Keşke o zamanlar ailemin tavsiyesini dinlemiş olsaydım!" },
                        { en: "We don't always see eye to eye on politics, but we are great friends.", tr: "Siyaset konusunda her zaman aynı fikirde olmayız ama harika dostlarız." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Scholarship", pronunciation: "/ˈskɒl.ə.ʃɪp/", tr: "Burs", example: "He won a scholarship to Harvard." },
                { word: "Interrupt", pronunciation: "/ˌɪn.təˈrʌpt/", tr: "Sözünü kesmek / Bölmek", example: "Please don't interrupt me while I am talking." },
                { word: "Bite the bullet", pronunciation: "/baɪt ðə ˈbʊl.ɪt/", tr: "Dişini sıkmak, katlanmak", example: "I decided to bite the bullet and resign." },
                { word: "See eye to eye", pronunciation: "/siː aɪ tuː aɪ/", tr: "Aynı fikirde olmak", example: "They rarely see eye to eye." },
                { word: "Comprehensive", pronunciation: "/ˌkɒm.prɪˈhen.sɪv/", tr: "Kapsamlı, etraflı", example: "We conducted a comprehensive study." },
                { word: "Feasible", pronunciation: "/ˈfiː.zə.bəl/", tr: "Uygulanabilir, yapılabilir", example: "Is this plan financially feasible?" }
            ]
        }
    ],
    readingDialogues: [
        {
            id: "b2_diag_1",
            title: "Stratejik İş Toplantısı & Müzakere (Strategic Business Negotiation)",
            topic: "Causatives, Inversion, Mixed Conditionals & Discourse Markers",
            description: "İki yönetici arasındaki zorlu ortaklık ve bütçe müzakeresi.",
            lines: [
                { speaker: "Director Smith", text: "Welcome back, Elena. Seldom have I seen our board of directors engage in such an intense debate regarding an expansion budget.", tr: "Tekrar hoş geldin Elena. Yönetim kurulumuzun bir büyüme bütçesi konusunda böylesine yoğun bir tartışmaya girdiğine pek nadir tanık olmuşumdur." },
                { speaker: "Elena", text: "Thank you, Mr. Smith. Despite the turbulent market conditions in Europe, our quarterly indicators demonstrate remarkable resilience. Furthermore, we had our financial models audited by an independent firm.", tr: "Teşekkürler Bay Smith. Avrupa'daki dalgalı piyasa koşullarına rağmen üç aylık göstergelerimiz kayda değer bir direnç sergiliyor. Dahası, finansal modellerimizi bağımsız bir firmaya denetlettik." },
                { speaker: "Director Smith", text: "That was a prudent decision. However, if we had not reduced our manufacturing overheads last quarter, we would be in a severe deficit today.", tr: "Bu tedbirli bir karardı. Ancak geçen çeyrekte üretim genel giderlerimizi azaltmamış olsaydık, bugün ciddi bir açık içinde olurduk." },
                { speaker: "Elena", text: "Precisely. If we proceed as proposed, I will have my operational team finalize the technical integration within three weeks.", tr: "Kesinlikle. Eğer önerildiği gibi ilerlersek, operasyon ekibime teknik entegrasyonu üç hafta içinde tamamlatacağım." },
                { speaker: "Director Smith", text: "You hit the nail on the head. Under no circumstances should we compromise on security standards during this transition.", tr: "Tam üstüne bastın. Bu geçiş sırasında hiçbir koşul altında güvenlik standartlarından ödün vermemeliyiz." }
            ],
            comprehensionQuestions: [
                {
                    question: "Elena'nın şirketinin finansal modelleriyle ilgili aldığı önlem neydi?",
                    options: [
                        "Modelleri bağımsız bir firmaya denetletti (had them audited).",
                        "Tüm projeleri iptal etti.",
                        "Giderleri iki katına çıkardı.",
                        "Yalnızca yerel bankalarla çalıştı."
                    ],
                    answer: 0,
                    explanation: "Elena: 'We had our financial models audited by an independent firm' demektedir (Causative)."
                },
                {
                    question: "Bay Smith'in bahsettiği Mixed Conditional (geçmiş kararın bugünkü sonucu) neydi?",
                    options: [
                        "Daha çok insan işe almazlarsa iflas edecekleri.",
                        "Geçen çeyrekte giderleri düşürmemiş olsalardı, bugün ciddi açıkta olacakları.",
                        "Elena'nın Londra'ya taşınması gerektiği.",
                        "Güvenlik testlerinin başarısız olduğu."
                    ],
                    answer: 1,
                    explanation: "Smith: 'If we had not reduced our manufacturing overheads last quarter, we would be in a severe deficit today' demiştir."
                }
            ]
        }
    ],
    exam: {
        title: "B2 Seviye Sonu Ustalık & Nihai Yeterlilik Sınavı",
        passScore: 70,
        description: "Tüm A1-B2 yolculuğunun zirvesi olan B2 değerlendirme sınavı. Causatives, Inversion, Mixed Conditionals ve İleri Bağlaçları test edin.",
        multipleChoice: [
            {
                question: "'If he _______ that flight yesterday, he _______ with his colleagues in Tokyo right now.'",
                options: [
                    "took / would be",
                    "had taken / would be",
                    "had taken / would have been",
                    "would have taken / were"
                ],
                answer: 1,
                explanation: "Mixed Conditional: Geçmişteki olay ('If + had taken') ve şimdiki sonuç ('would be right now')."
            },
            {
                question: "'_______ the severe recession, the software company managed to double its profits.'",
                options: [
                    "Although",
                    "Despite of",
                    "Despite",
                    "Whereas"
                ],
                answer: 2,
                explanation: "Arkasından isim tamlaması ('the severe recession') geldiği ve 'of' almadığı için 'Despite' kullanılır."
            },
            {
                question: "'Rarely _______ such an exceptional theatrical performance in my entire life.'",
                options: [
                    "I have witnessed",
                    "have I witnessed",
                    "did I witnessed",
                    "I witnessed"
                ],
                answer: 1,
                explanation: "Cümle 'Rarely' gibi olumsuz bir zarfla başladığı için Inversion (devriklik) kuralı gereği yardımcı fiil özneden önce gelir: 'have I witnessed'."
            },
            {
                question: "'My car broke down on the highway, so I had to _______ by a certified mechanic.'",
                options: [
                    "repair it",
                    "have it repaired",
                    "got it repair",
                    "have repaired it"
                ],
                answer: 1,
                explanation: "Causative yapısı: 'have + it (object) + repaired (V3)'."
            },
            {
                question: "'I wish I _______ that confidential email to the manager yesterday!'",
                options: [
                    "didn't send",
                    "hadn't sent",
                    "wouldn't send",
                    "haven't sent"
                ],
                answer: 1,
                explanation: "Geçmişte yapılmış bir hataya duyulan pişmanlık 'wish + had V3' ('hadn't sent') ile ifade edilir."
            },
            {
                question: "'The strict teacher made all the students _______ the entire essay from scratch.'",
                options: [
                    "to rewrite",
                    "rewriting",
                    "rewrite",
                    "rewrote"
                ],
                answer: 2,
                explanation: "'Make' causative fiili birini zorlamak anlamında arkasından yalın fiil ('rewrite') alır, 'to' almaz!"
            },
            {
                question: "'Under no circumstances _______ open this confidential dossier without senior authorization.'",
                options: [
                    "you should",
                    "should you",
                    "you must",
                    "did you"
                ],
                answer: 1,
                explanation: "'Under no circumstances' ile başlayan devrik yapılarda yardımcı fiil özneden önce gelir ('should you')."
            }
        ],
        matching: [
            {
                prompt: "B2 düzeyindeki ileri deyimleri ve kalıpları eşleştirin:",
                pairs: [
                    { left: "Hit the nail on the head", right: "Tam üstüne basmak / Tam isabet" },
                    { left: "Under the weather", right: "Keyifsiz / Hafif hasta" },
                    { left: "A piece of cake", right: "Çocuk oyuncağı / Çok kolay" },
                    { left: "Bite the bullet", right: "Dişini sıkıp zor duruma katlanmak" },
                    { left: "See eye to eye", right: "Tamamen aynı fikirde olmak" }
                ]
            }
        ],
        translation: [
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Şiddetli yağmura rağmen maçı ertelemediler.'",
                acceptable: [
                    "Despite the heavy rain, they didn't postpone the match.",
                    "Despite the heavy rain, they did not postpone the match.",
                    "In spite of the heavy rain, they didn't postpone the match.",
                    "In spite of the heavy rain, they did not postpone the match."
                ],
                tip: "'Despite the heavy rain' veya 'In spite of the heavy rain'."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Keşke dün gece o kadar çok kahve içmemiş olsaydım.'",
                acceptable: [
                    "I wish I hadn't drunk so much coffee last night.",
                    "I wish I had not drunk so much coffee last night.",
                    "If only I hadn't drunk so much coffee last night."
                ],
                tip: "Geçmiş pişmanlığı: 'I wish I hadn't drunk...'"
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Dün bilgisayarımı bir uzmana tamir ettirdim.'",
                acceptable: [
                    "I had my computer repaired by an expert yesterday.",
                    "I got my computer repaired by an expert yesterday.",
                    "I had my computer fixed by an expert yesterday."
                ],
                tip: "Causative: 'had / got my computer repaired by an expert'."
            }
        ]
    }
};
