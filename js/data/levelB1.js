// LinguaFlow - B1 Level Data (Tam Anlamıyla Yeterli / Kapsamlı Orta Seviye)
window.LEVEL_B1 = {
    id: "B1",
    title: "B1 - Orta Seviye (Intermediate / Akıcı & Bağımsız İfade)",
    description: "Present Perfect derinliği, Koşul Cümleleri (0,1,2), Edilgen Çatı, Gerunds & Infinitives, Mini Alıştırmalar, Diyaloglar ve Genişletilmiş Kelime Bankası.",
    color: "#8b5cf6",
    videoPlaylistUrl: "https://www.youtube.com/playlist?list=PLxX2m2Np79VfE8qgLtUZHwCF0VyuFH8QI",
    units: [
        {
            id: "b1_u1",
            title: "Ünite 1: Present Perfect vs Past Simple (Zaman Çizgisindeki Kritik Çatışma)",
            description: "Bitmiş zaman zarfları vs Devam eden süreçler, 'Since vs For' ayrımı ve eylemin günümüze yansıyan etkisi.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "1.1 Zaman Çizgisi: 'I lived' vs 'I have lived'",
                    content: `
                        <p class="mb-3">İngilizceyi öğrenenlerin en çok tökezlediği sınır burasıdır. Aynı Türkçeye ('Yaşadım') çevrilen iki cümlenin ardında iki tamamen farklı gerçeklik yatar:</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-purple-600/40">
                                <span class="font-bold text-purple-400 block mb-1">⏳ PAST SIMPLE: "I lived in Berlin for 3 years."</span>
                                <p class="text-gray-300">
                                    • Eylem geçmişte bir zaman diliminde başladı ve <strong>tamamen bitti</strong>.<br>
                                    • Şu an artık Berlin'de <strong>YAŞAMIYORUM</strong> (başka bir şehirdeyim).<br>
                                    • Zaman zarfları kesindir: <em>yesterday, last year, in 2015, two months ago</em>.
                                </p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-emerald-600/40">
                                <span class="font-bold text-emerald-400 block mb-1">🔗 PRESENT PERFECT: "I have lived in Berlin for 3 years."</span>
                                <p class="text-gray-300">
                                    • Eylem 3 yıl önce başladı ve <strong>hala Berlin'de yaşamaya devam ediyorum</strong>.<br>
                                    • Geçmiş ile şimdiki zaman arasında doğrudan bir köprü vardır.<br>
                                    • Kesin geçmiş zaman kelimeleri <strong>ASLA KULLANILMAZ</strong>!
                                </p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'Yesterday' veya 'Ago' Varsa Have/Has KULLANAN YANAR!",
                            wrong: "I have seen him yesterday. / I have finished my degree two years ago.",
                            correct: "I saw him yesterday. / I finished my degree two years ago.",
                            note: "Cümlede geçmişe ait belirli bir zaman noktası (dün, geçen ay, 2019'da) geçtiği anda Present Perfect defteri kapanır, istisnasız Past Simple devreye girer!"
                        },
                        {
                            title: "TRICK: 'Since' (Başlangıç) vs 'For' (Süreç) Formülü",
                            wrong: "I have worked here since 5 years. / for 2015.",
                            correct: "I have worked here for 5 years. / since 2015.",
                            note: "<strong>SINCE:</strong> Bir başlangıç noktasını işaret eder (since Monday, since 9:00, since childhood).<br><strong>FOR:</strong> Bir zaman aralığının, miktarın toplamını söyler (for 2 hours, for ten days, for a long time)."
                        }
                    ],
                    miniDrills: [
                        {
                            question: "Boşluğu doldurun: 'My grandfather _______ (live) in Canada for twenty years before moving back to Turkey in 2010.'",
                            options: ["lived", "has lived", "is living", "has been living"],
                            answer: 0,
                            explanation: "Dedesi 2010'da Türkiye'ye geri dönmüştür; yani Kanada'da yaşama eylemi tamamen bitmiştir (Past Simple)."
                        },
                        {
                            question: "'She hasn't spoken to her manager _______ last Tuesday.'",
                            options: ["for", "since", "during", "ago"],
                            answer: 1,
                            explanation: "'Last Tuesday' eylemin başladığı net bir noktadır; bu yüzden 'since' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "He has written five books so far, and he is working on the sixth.", tr: "Şu ana kadar beş kitap yazdı ve altıncısı üzerinde çalışıyor." },
                        { en: "Shakespeare wrote Romeo and Juliet in the late 16th century.", tr: "Shakespeare Romeo ve Juliet'i 16. yüzyılın sonlarında yazdı." }
                    ]
                }
            ],
            vocabulary: [
                { word: "So far", pronunciation: "/səʊ fɑːr/", tr: "Şu ana kadar", example: "So far, everything is going according to plan." },
                { word: "Since", pronunciation: "/sɪns/", tr: "-den beri (başlangıç)", example: "I haven't seen her since June." },
                { word: "For", pronunciation: "/fɔːr/", tr: "...dır / süresince", example: "We have lived here for ten years." },
                { word: "Recently", pronunciation: "/ˈriː.sənt.li/", tr: "Son günlerde, son zamanlarda", example: "Have you traveled abroad recently?" },
                { word: "Lately", pronunciation: "/ˈleɪt.li/", tr: "Son zamanlarda", example: "I have been very busy lately." },
                { word: "Achieve", pronunciation: "/əˈtʃiːv/", tr: "Başarmak, elde etmek", example: "She achieved all her professional goals." },
                { word: "Deal with", pronunciation: "/diːl wɪð/", tr: "Başa çıkmak, ele almak", example: "How do you deal with high stress?" },
                { word: "Run out of", pronunciation: "/rʌn aʊt əv/", tr: "Tükenmek, bitmek", example: "We have run out of printer paper." }
            ]
        },
        {
            id: "b1_u2",
            title: "Ünite 2: Present Perfect Continuous (Have been doing) vs Simple",
            description: "Süreç mi önemli yoksa tamamlanan sayı ve sonuç mu? 'I have been painting' vs 'I have painted'.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "2.1 Eylemin Süreci (Continuous) ile Eylemin Sonucu (Simple)",
                    content: `
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-blue-600/40">
                                <span class="font-bold text-blue-400 block mb-1">🎨 CONTINUOUS: "I have been painting the kitchen."</span>
                                <p class="text-gray-300">
                                    • Eylemin kendisi ve ne kadar sürdüğü önemlidir.<br>
                                    • Boya işi bitmiş de olabilir, hala sürüyor da olabilir.<br>
                                    • Üstüm başım boya içindedir: <em>"Why are your clothes dirty? - I have been painting."</em>
                                </p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-emerald-600/40">
                                <span class="font-bold text-emerald-400 block mb-1">🏁 SIMPLE: "I have painted the kitchen."</span>
                                <p class="text-gray-300">
                                    • Eylemin <strong>TAMAMLANMIŞ SONUCU</strong> önemlidir.<br>
                                    • Mutfak boyanmıştır, iş bitmiştir, kurumuştur!<br>
                                    • Miktar/Adet bildirilirken daima Simple kullanılır: <em>"I have painted two rooms today."</em>
                                </p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Sayı veya Adet Belirtiyorsanız CONTINUOUS KULLANAMAZSINIZ!",
                            wrong: "I have been drinking three cups of coffee today.",
                            correct: "I have drunk three cups of coffee today.",
                            note: "'Kaç tane, kaç adet, kaç defa' sorusunun cevabı veriliyorsa daima Present Perfect Simple kullanılır!"
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'She _______ (write) emails all afternoon, and she _______ (send) fifteen so far.'",
                            options: [
                                "has been writing / has sent",
                                "has written / has been sending",
                                "wrote / sent",
                                "is writing / sends"
                            ],
                            answer: 0,
                            explanation: "Bütün öğleden sonra süren eylem için Continuous ('has been writing'), 15 adet e-posta sonucu için Simple ('has sent')."
                        }
                    ],
                    examples: [
                        { en: "It has been raining all morning, the ground is completely wet.", tr: "Bütün sabah yağmur yağıyor, yerler tamamen ıslak." },
                        { en: "I have read fifty pages of this novel today.", tr: "Bugün bu romanın elli sayfasını okudum (adet bildirildiği için Simple)." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Exhausted", pronunciation: "/ɪɡˈzɔː.stɪd/", tr: "Bitkin, aşırı yorgun", example: "I am exhausted after working all day." },
                { word: "Sweat", pronunciation: "/swet/", tr: "Terlemek / Ter", example: "He was sweating because he had been running." },
                { word: "Completely", pronunciation: "/kəmˈpliːt.li/", tr: "Tamamen", example: "The room was completely dark." },
                { word: "Put off", pronunciation: "/pʊt ɒf/", tr: "Ertelemek", example: "Don't put off your doctor appointment." },
                { word: "Give up", pronunciation: "/ɡɪv ʌp/", tr: "Vazgeçmek / Bırakmak", example: "Never give up on your goals." },
                { word: "Carry on", pronunciation: "/ˈkær.i ɒn/", tr: "Devam etmek", example: "Please carry on with your speech." }
            ]
        },
        {
            id: "b1_u3",
            title: "Ünite 3: Koşul Cümleleri (Conditionals 0, 1 & 2) & 'Unless' Kuralı",
            description: "Bilimsel gerçekler (0), gelecekteki gerçek ihtimaller (1) ve hayali varsayımlar (2) ile 'Unless' tuzağı.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "3.1 Conditionals Türleri ve Farkları",
                    content: `
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-lg border border-gray-700">
                                <span class="font-bold text-gray-300">Type 0 (Genel Doğru):</span> If + Present, Present.<br>
                                <em>If you heat ice, it melts. (Buzu ısıtırsan erir - kesin fizik kuralı)</em>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-blue-600/40">
                                <span class="font-bold text-blue-400">Type 1 (Gelecek Olasılık):</span> If + Present Simple, Will + V1.<br>
                                <em>If it rains tomorrow, we will stay at home. (Yağarsa kalacağız - gerçekçi ihtimal)</em>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-lg border border-purple-600/40">
                                <span class="font-bold text-purple-400">Type 2 (Hayal / Varsayım):</span> If + Past Simple, Would + V1.<br>
                                <em>If I had a yacht, I would travel around the world. (Yatım olsa gezerdim - ama yatım yok, hayal!)</em>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: 'Unless' Cümlesi Zaten Olumsuzdur!",
                            wrong: "Unless you don't study, you will fail. (İKİ KAT OLUMSUZLUK YANLIŞI)",
                            correct: "Unless you study, you will fail. (= If you don't study...)",
                            note: "'Unless' = 'Medikçe / Madıkça / Eğer ... olmazsa' demektir ve kendi cümlesi olumlu yazılır."
                        },
                        {
                            title: "TAVSİYE KALIBI: 'If I were you, I would...'",
                            wrong: "If I was you, I will do it.",
                            correct: "If I were you, I would do it.",
                            note: "Type 2'de 'I' öznesiyle tavsiye verirken 'was' yerine 'were' kullanımı kabul gören edebi kuraldır."
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'If I _______ (know) his telephone number, I _______ (invite) him to dinner tonight.'",
                            options: [
                                "knew / would invite",
                                "know / will invite",
                                "had known / would have invited",
                                "would know / invited"
                            ],
                            answer: 0,
                            explanation: "Şu an numarasını bilmiyorum (hayali durum / Type 2); 'If + knew, would invite'."
                        }
                    ],
                    examples: [
                        { en: "Unless we hurry up, we will miss the last train.", tr: "Acele etmedikçe (etmezsek) son treni kaçıracağız." },
                        { en: "If I were the president, I would invest more in education.", tr: "Cumhurbaşkanı olsaydım, eğitime daha fazla yatırım yapardım." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Invest", pronunciation: "/ɪnˈvest/", tr: "Yatırım yapmak", example: "Invest in your future by learning." },
                { word: "Unless", pronunciation: "/ənˈles/", tr: "-medikçe / olmazsa", example: "Don't call me unless it is urgent." },
                { word: "Urgent", pronunciation: "/ˈɜː.dʒənt/", tr: "Acil", example: "This is an urgent matter." },
                { word: "Opportunity", pronunciation: "/ˌɒp.əˈtʃuː.nə.ti/", tr: "Fırsat", example: "Seize every good opportunity." },
                { word: "Salary", pronunciation: "/ˈsæl.ər.i/", tr: "Maaş", example: "He negotiated a higher salary." },
                { word: "Figure out", pronunciation: "/ˈfɪɡ.ər aʊt/", tr: "Çözmek / Anlamak", example: "I finally figured out the code." }
            ]
        },
        {
            id: "b1_u4",
            title: "Ünite 4: Edilgen Çatı (Passive Voice) Mantığı",
            description: "Eylemi kimin yaptığının bilinmediği veya önemli olmadığı durumlar: 'Be + V3'.",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "4.1 Passive Voice Nasıl Kurulur?",
                    content: `
                        <p class="mb-3">Aktif bir cümleyi pasif yapmak için cümlenin nesnesi özne konumuna getirilir ve <strong>uygun zamandaki 'TO BE' + Fiilin 3. hali (V3)</strong> eklenir.</p>
                        
                        <div class="table-responsive my-3">
                            <table class="w-full text-left border-collapse lesson-table text-xs">
                                <thead>
                                    <tr class="border-b border-gray-700">
                                        <th class="py-2">Zaman</th>
                                        <th class="py-2">Formül</th>
                                        <th class="py-2">Örnek Pasif Cümle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">Present Simple</td>
                                        <td>am / is / are + V3</td>
                                        <td>Spanish <strong>is spoken</strong> in many countries.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">Past Simple</td>
                                        <td>was / were + V3</td>
                                        <td>The castle <strong>was built</strong> in the 14th century.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">Present Perfect</td>
                                        <td>have / has been + V3</td>
                                        <td>The road <strong>has been closed</strong> due to snow.</td>
                                    </tr>
                                    <tr class="border-b border-gray-800">
                                        <td class="py-1.5 font-bold">Modals (Can/Must/Should)</td>
                                        <td>modal + be + V3</td>
                                        <td>This rule <strong>must be followed</strong> by everyone.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Eylemi Yapanı Eklerken 'WITH' Değil 'BY' Kullanılır!",
                            wrong: "The cake was made with my grandmother.",
                            correct: "The cake was made by my grandmother.",
                            note: "Kişiyi belirtirken 'BY' (tarafından), kullanılan alet veya malzemeyi belirtirken 'WITH' kullanılır: <em>The letter was written by Tom with a pen.</em>"
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'The historic bridge _______ during the storm last week.'",
                            options: ["damaged", "was damaged", "is damaged", "has been damaged"],
                            answer: 1,
                            explanation: "Geçmişte (last week) gerçekleşen edilgen eylem: 'was damaged'."
                        }
                    ],
                    examples: [
                        { en: "Millions of emails are sent every single minute.", tr: "Her bir dakikada milyonlarca e-posta gönderiliyor." },
                        { en: "The thief was arrested by the police early this morning.", tr: "Hırsız bu sabah erken saatlerde polis tarafından tutuklandı." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Arrest", pronunciation: "/əˈrest/", tr: "Tutuklamak", example: "The police arrested the suspect." },
                { word: "Due to", pronunciation: "/dʒuː tuː/", tr: "-den dolayı, nedeniyle", example: "The flight was delayed due to fog." },
                { word: "Castle", pronunciation: "/ˈkɑː.səl/", tr: "Kale, şato (t sessiz)", example: "We visited an ancient castle." },
                { word: "Produce", pronunciation: "/prəˈdʒuːs/", tr: "Üretmek", example: "Solar panels produce clean energy." },
                { word: "Damage", pronunciation: "/ˈdæm.ɪdʒ/", tr: "Zarar vermek / Hasar", example: "The earthquake damaged many buildings." },
                { word: "Turn down", pronunciation: "/tɜːn daʊn/", tr: "Reddetmek (teklif)", example: "He turned down an attractive job offer." }
            ]
        },
        {
            id: "b1_u5",
            title: "Ünite 5: Alışkanlıklar Üçlüsü & Gerunds / Infinitives",
            description: "Used to vs Be used to vs Get used to ve anlamı tamamen değişen fiiller (Stop, Remember).",
            youtubeVideoId: "a5ZuLPTrs0o",
            lessons: [
                {
                    title: "5.1 'Used to' Kalıpları & Anlam Değişen Fiiller",
                    content: `
                        <div class="space-y-2.5 my-3 text-xs">
                            <div class="p-3 bg-gray-800 rounded-xl border border-blue-600/40">
                                <span class="font-bold text-blue-400 text-sm block mb-0.5">1. USED TO + V1 (Eski Terk Edilmiş Alışkanlık)</span>
                                <p class="font-mono text-white mt-1">I <strong>used to smoke</strong>, but I quit 5 years ago.</p>
                                <p class="text-gray-400 italic">(Eskiden içerdim, artık içmiyorum.)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-emerald-600/40">
                                <span class="font-bold text-emerald-400 text-sm block mb-0.5">2. BE USED TO + Ving (Alışkın Olmak)</span>
                                <p class="font-mono text-white mt-1">I <strong>am used to waking up</strong> early.</p>
                                <p class="text-gray-400 italic">(Erken uyanmaya alışkınım.)</p>
                            </div>
                            <div class="p-3 bg-gray-800 rounded-xl border border-rose-600/40">
                                <span class="font-bold text-rose-400 text-sm block mb-0.5">3. STOP + Ving vs STOP + to V1</span>
                                <p class="text-gray-300">• <em>He stopped smoking:</em> Sigarayı tamamen bıraktı.<br>
                                • <em>He stopped to smoke:</em> Sigara içmek amacıyla durdu!</p>
                            </div>
                        </div>
                    `,
                    criticalTips: [
                        {
                            title: "TRICK: Edatlardan (Prepositions) Sonra Daima -ING Gelir!",
                            wrong: "Thank you for help me. / She is good at to sing.",
                            correct: "Thank you for helping me. / She is good at singing.",
                            note: "For, at, in, on, about, without, before, after gibi edatlardan sonra gelen fiil istisnasız -ing alır!"
                        }
                    ],
                    miniDrills: [
                        {
                            question: "'Please remember _______ (turn off) the lights before leaving the office.'",
                            options: ["turning off", "to turn off", "turn off", "turned off"],
                            answer: 1,
                            explanation: "Gelecekte yapılması gereken bir görevi hatırlatırken 'remember + to V1' kullanılır."
                        }
                    ],
                    examples: [
                        { en: "I look forward to hearing from you soon.", tr: "Sizden yakında haber almayı dört gözle bekliyorum." },
                        { en: "He is getting used to the British accent gradually.", tr: "İngiliz aksanına yavaş yavaş alışıyor." }
                    ]
                }
            ],
            vocabulary: [
                { word: "Quit", pronunciation: "/kwɪt/", tr: "Bırakmak, istifa etmek", example: "He quit smoking last year." },
                { word: "Avoid", pronunciation: "/əˈvɔɪd/", tr: "Kaçınmak (+Ving)", example: "Avoid making careless mistakes." },
                { word: "Gradually", pronunciation: "/ˈɡrædʒ.u.ə.li/", tr: "Kademeli olarak, yavaş yavaş", example: "Her English is gradually improving." },
                { word: "Look forward to", pronunciation: "/lʊk ˈfɔː.wəd tuː/", tr: "Dört gözle beklemek", example: "I look forward to our vacation." },
                { word: "Refuse", pronunciation: "/rɪˈfjuːz/", tr: "Reddetmek (+to V1)", example: "She refused to sign the document." },
                { word: "Set up", pronunciation: "/set ʌp/", tr: "Kurmak (şirket/sistem)", example: "They set up an online business." }
            ]
        }
    ],
    readingDialogues: [
        {
            id: "b1_diag_1",
            title: "İş Mülakatı: Geçmiş Deneyimler & Beceriler (Job Interview)",
            topic: "Present Perfect vs Past Simple & Career Vocabulary",
            description: "Bir adayın uluslararası bir şirketteki iş görüşmesi diyaloğu.",
            lines: [
                { speaker: "Interviewer", text: "Good morning Alex, thank you for coming today. Could you tell me a little about your professional background?", tr: "Günaydın Alex, bugün geldiğin için teşekkür ederim. Bize biraz profesyonel geçmişinden bahsedebilir misin?" },
                { speaker: "Alex", text: "Good morning! Certainly. I graduated from Istanbul University in 2019, where I studied Computer Science. Since then, I have worked as a junior developer at TechCorp.", tr: "Günaydın! Elbette. 2019 yılında İstanbul Üniversitesi Bilgisayar Mühendisliği'nden mezun oldum. O zamandan beri TechCorp şirketinde yazılımcı olarak çalışıyorum." },
                { speaker: "Interviewer", text: "Impressive. Have you ever managed a remote international team before?", tr: "Etkileyici. Daha önce hiç uzaktan çalışan uluslararası bir ekibi yönettin mi?" },
                { speaker: "Alex", text: "Yes, last year I was assigned to a European project. Although we ran out of time near the deadline, the software was delivered successfully.", tr: "Evet, geçen yıl bir Avrupa projesine atanmıştım. Teslim tarihine yakın zamanımız tükenmesine rağmen yazılım başarıyla teslim edildi." },
                { speaker: "Interviewer", text: "What would you do if a critical client complained about an unexpected bug?", tr: "Kritik bir müşteri beklenmedik bir yazılım hatasından şikayet etseydi ne yapardın?" },
                { speaker: "Alex", text: "If that happened, I would prioritize the issue immediately, communicate transparently with the client, and work hard with my team to fix it.", tr: "Eğer böyle bir şey olsaydı, sorunu derhal önceliklendirir, müşteriyle şeffaf iletişim kurar ve düzeltmek için ekibimle sıkı çalışırdım." }
            ],
            comprehensionQuestions: [
                {
                    question: "Alex ne zamandan beri TechCorp şirketinde çalışmaktadır?",
                    options: [
                        "2019'da üniversiteden mezun olduğundan beri",
                        "Sadece geçen yıldan beri",
                        "2010 yılından beri",
                        "Üç aydır"
                    ],
                    answer: 0,
                    explanation: "Diyalogda Alex: 'I graduated in 2019... Since then, I have worked as a developer at TechCorp' demektedir."
                },
                {
                    question: "Avrupa projesinde karşılaştıkları zorluk neydi?",
                    options: [
                        "Yazılım müşteriye teslim edilemedi.",
                        "Teslim tarihine yakın zamanları tükendi (ran out of time).",
                        "Ekip üyeleri işi bıraktı.",
                        "Bütçe yetersiz kaldı."
                    ],
                    answer: 1,
                    explanation: "Alex: 'Although we ran out of time near the deadline, the software was delivered successfully' demiştir."
                }
            ]
        }
    ],
    exam: {
        title: "B1 Seviye Sonu Kapsamlı Değerlendirme & B2 Seviye Atlama Sınavı",
        passScore: 70,
        description: "B1 seviyesinin tüm ileri düzey gramer kurallarını, Present Perfect ayrımlarını ve Passive yapılarını kapsayan sınav.",
        multipleChoice: [
            {
                question: "'Shakespeare _______ many plays during his life, but Agatha Christie _______ even more.'",
                options: [
                    "has written / has written",
                    "wrote / has written",
                    "wrote / wrote",
                    "has written / wrote"
                ],
                answer: 1,
                explanation: "Shakespeare geçmişte vefat ettiği için 'wrote' (Past Simple); Agatha Christie kitapları hala günümüz piyasasında geçerli olup kıyaslandığında veya geçmişi netleştiğinde Present Perfect ile ele alınabilir; ancak birinci taraf kesinlikle 'wrote' olmak zorundadır."
            },
            {
                question: "'He stopped _______ because the doctor told him that his lungs were in bad shape.'",
                options: [
                    "to smoke",
                    "smoking",
                    "smoke",
                    "smoked"
                ],
                answer: 1,
                explanation: "Sigarayı tamamen bırakmak anlamında 'stop + Ving' (stop smoking) kullanılır."
            },
            {
                question: "'I am not used to _______ in such cold weather.'",
                options: [
                    "live",
                    "lived",
                    "living",
                    "to live"
                ],
                answer: 2,
                explanation: "'Be used to' (alışkın olmak) yapısından sonra fiil -ing (Gerund) takısı alır ('living')."
            },
            {
                question: "'This ancient castle _______ by thousands of tourists every summer.'",
                options: [
                    "is visited",
                    "visits",
                    "was visit",
                    "has visited"
                ],
                answer: 0,
                explanation: "Geniş zaman pasif yapısı: 'is visited' (am/is/are + V3)."
            },
            {
                question: "'_______ you work much harder, you will not pass this difficult B1 test.'",
                options: [
                    "If",
                    "Unless",
                    "Although",
                    "Because"
                ],
                answer: 1,
                explanation: "'Unless' = 'Medikçe / Eğer ... çalışmazsan' anlamına gelir ve koşul cümlesine olumsuz anlam katar."
            },
            {
                question: "'She has _______ three cups of tea since 9:00 AM.' (Miktar / Adet bildiriliyor)",
                options: [
                    "been drinking",
                    "drunk",
                    "drank",
                    "drinking"
                ],
                answer: 1,
                explanation: "Miktar, sayı veya adet verildiğinde Continuous kullanılmaz, Present Perfect Simple ('drunk') kullanılır."
            },
            {
                question: "'If I _______ your true feelings, I _______ that silly remark.'",
                options: [
                    "know / won't make",
                    "knew / wouldn't make",
                    "would know / didn't make",
                    "had known / won't make"
                ],
                answer: 1,
                explanation: "Type 2 hayali durum koşulu: 'If + knew (V2), wouldn't make (would + V1)'."
            },
            {
                question: "'We are really looking forward to _______ you next week.'",
                options: [
                    "meet",
                    "to meet",
                    "meeting",
                    "met"
                ],
                answer: 2,
                explanation: "'Look forward to' kalıbındaki 'to' bir edattır (preposition); bu nedenle arkasından -ing gelir ('meeting')."
            }
        ],
        matching: [
            {
                prompt: "B1 kritik kalıplarını ve fiil ayrımlarını eşleştirin:",
                pairs: [
                    { left: "Stop smoking", right: "Sigarayı tamamen bırakmak" },
                    { left: "Stop to smoke", right: "Sigara içmek amacıyla durmak" },
                    { left: "Unless you study", right: "Ders çalışmadığın sürece" },
                    { left: "Be used to waking up", right: "Uyanmaya alışkın olmak" },
                    { left: "Used to wake up", right: "Eskiden uyanırdım (artık değil)" }
                ]
            }
        ],
        translation: [
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Senin yerinde olsaydım, o şirkette çalışmazdım.'",
                acceptable: [
                    "If I were you, I wouldn't work at that company.",
                    "If I were you, I would not work at that company.",
                    "If I was you, I wouldn't work at that company.",
                    "If I were you, I wouldn't work for that company."
                ],
                tip: "Tavsiye kalıbı: 'If I were you, I wouldn't work...'"
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Bu ev 1920 yılında ünlü bir mimar tarafından inşa edildi.'",
                acceptable: [
                    "This house was built by a famous architect in 1920.",
                    "In 1920, this house was built by a famous architect."
                ],
                tip: "Geçmiş zaman pasif: 'was built by a famous architect'."
            },
            {
                prompt: "Şu cümleyi İngilizceye çevirin: 'Yarın beni acil bir durum olmadıkça arama.'",
                acceptable: [
                    "Don't call me tomorrow unless it is an emergency.",
                    "Do not call me tomorrow unless it is an emergency.",
                    "Don't call me tomorrow unless it's an emergency."
                ],
                tip: "'Unless' = 'olmadıkça': 'unless it is an emergency'."
            }
        ]
    }
};
