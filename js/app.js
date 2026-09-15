// LinguaFlow - Main Application Controller
class LinguaApp {
    constructor() {
        this.levels = {
            'A1': window.LEVEL_A1,
            'A2': window.LEVEL_A2,
            'B1': window.LEVEL_B1,
            'B2': window.LEVEL_B2
        };
        this.currentLevelId = 'A1';
        this.currentView = 'lessons'; // 'lessons', 'vocabulary', 'exam'
        this.quizEngine = new window.QuizEngine();
        
        // Progress State
        this.progress = this.loadProgress();

        // DOM elements
        this.levelNavContainer = document.getElementById('level-nav-container');
        this.mainContentArea = document.getElementById('main-content-area');
        this.tabLessons = document.getElementById('tab-lessons');
        this.tabVocab = document.getElementById('tab-vocab');
        this.tabReading = document.getElementById('tab-reading');
        this.tabExam = document.getElementById('tab-exam');

        this.init();
    }

    loadProgress() {
        const defaultState = {
            unlockedLevels: ['A1'],
            examScores: {}, // e.g. { 'A1': 85 }
            freeMode: false,
            speechSpeed: 0.9
        };
        try {
            const saved = localStorage.getItem('lingua_flow_progress');
            if (saved) {
                return { ...defaultState, ...JSON.parse(saved) };
            }
        } catch (e) {
            console.error('LocalStorage error:', e);
        }
        return defaultState;
    }

    saveProgress() {
        try {
            localStorage.setItem('lingua_flow_progress', JSON.stringify(this.progress));
        } catch (e) {
            console.error('LocalStorage save error:', e);
        }
        this.renderLevelNav();
    }

    init() {
        this.renderLevelNav();
        this.attachGlobalListeners();
        this.switchLevel('A1');
    }

    attachGlobalListeners() {
        // Tab Navigasyonu
        if (this.tabLessons) {
            this.tabLessons.addEventListener('click', () => this.switchView('lessons'));
        }
        if (this.tabVocab) {
            this.tabVocab.addEventListener('click', () => this.switchView('vocabulary'));
        }
        if (this.tabReading) {
            this.tabReading.addEventListener('click', () => this.switchView('reading'));
        }
        if (this.tabExam) {
            this.tabExam.addEventListener('click', () => this.switchView('exam'));
        }

        // Serbest Mod Değiştirici
        const freeModeToggle = document.getElementById('toggle-free-mode');
        if (freeModeToggle) {
            freeModeToggle.checked = this.progress.freeMode;
            freeModeToggle.addEventListener('change', (e) => {
                this.progress.freeMode = e.target.checked;
                this.saveProgress();
                this.renderLevelNav();
                this.renderCurrentView();
            });
        }

        // İlerlemeyi Sıfırla
        const resetBtn = document.getElementById('btn-reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (confirm('Tüm seviye kilitleri ve sınav skorlarınız sıfırlanacak. Onaylıyor musunuz?')) {
                    this.progress.unlockedLevels = ['A1'];
                    this.progress.examScores = {};
                    this.saveProgress();
                    this.switchLevel('A1');
                }
            });
        }

        // Telaffuz Hızı
        const speedSelect = document.getElementById('select-speech-speed');
        if (speedSelect) {
            speedSelect.value = this.progress.speechSpeed.toString();
            speedSelect.addEventListener('change', (e) => {
                const spd = parseFloat(e.target.value);
                this.progress.speechSpeed = spd;
                window.speechService.rate = spd;
                this.saveProgress();
            });
        }
    }

    isLevelUnlocked(levelId) {
        if (this.progress.freeMode) return true;
        return this.progress.unlockedLevels.includes(levelId);
    }

    renderLevelNav() {
        if (!this.levelNavContainer) return;
        const levelKeys = ['A1', 'A2', 'B1', 'B2'];

        this.levelNavContainer.innerHTML = levelKeys.map(key => {
            const isUnlocked = this.isLevelUnlocked(key);
            const isCurrent = (this.currentLevelId === key);
            const score = this.progress.examScores[key];

            let badge = '';
            if (!isUnlocked) {
                badge = '<span class="text-xs text-gray-500 flex items-center gap-1">🔒 Kilitli</span>';
            } else if (score !== undefined) {
                badge = `<span class="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">✓ %${score}</span>`;
            } else {
                badge = '<span class="text-xs text-blue-400 font-semibold">Devam Ediyor</span>';
            }

            return `
                <button class="level-nav-btn p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                    isCurrent 
                        ? 'border-blue-500 bg-blue-900/30 ring-2 ring-blue-500/20 shadow-lg' 
                        : isUnlocked 
                            ? 'border-gray-700 bg-gray-800/60 hover:border-gray-600 hover:bg-gray-800' 
                            : 'border-gray-800 bg-gray-900/40 opacity-60 cursor-not-allowed'
                }" data-level="${key}">
                    <div class="flex items-center justify-between w-full mb-1">
                        <span class="text-base font-extrabold ${isCurrent ? 'text-white' : 'text-gray-200'}">${key}</span>
                        ${badge}
                    </div>
                    <span class="text-xs text-gray-400 truncate w-full">
                        ${this.levels[key].title.split('-')[1]?.trim() || ''}
                    </span>
                </button>
            `;
        }).join('');

        this.levelNavContainer.querySelectorAll('.level-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetLevel = e.currentTarget.dataset.level;
                if (this.isLevelUnlocked(targetLevel)) {
                    this.switchLevel(targetLevel);
                } else {
                    alert(`Bu seviyenin kilidini açmak için bir önceki seviyenin değerlendirme sınavını en az %70 ile tamamlamalısınız! Veya üst menüden 'Serbest Keşif Modu'nu açabilirsiniz.`);
                }
            });
        });
    }

    switchLevel(levelId) {
        this.currentLevelId = levelId;
        this.renderLevelNav();
        this.renderCurrentView();
    }

    switchView(viewName) {
        this.currentView = viewName;
        [this.tabLessons, this.tabVocab, this.tabReading, this.tabExam].forEach(tab => {
            if (tab) {
                tab.classList.remove('active-tab', 'text-blue-400', 'border-blue-500');
                tab.classList.add('text-gray-400', 'border-transparent');
            }
        });

        if (viewName === 'lessons' && this.tabLessons) {
            this.tabLessons.classList.add('active-tab', 'text-blue-400', 'border-blue-500');
        } else if (viewName === 'vocabulary' && this.tabVocab) {
            this.tabVocab.classList.add('active-tab', 'text-blue-400', 'border-blue-500');
        } else if (viewName === 'reading' && this.tabReading) {
            this.tabReading.classList.add('active-tab', 'text-blue-400', 'border-blue-500');
        } else if (viewName === 'exam' && this.tabExam) {
            this.tabExam.classList.add('active-tab', 'text-blue-400', 'border-blue-500');
        }

        this.renderCurrentView();
    }

    renderCurrentView() {
        const levelData = this.levels[this.currentLevelId];
        if (!levelData) return;

        // Seviye Başlığı ve Üst Bilgi
        const titleEl = document.getElementById('current-level-title');
        const descEl = document.getElementById('current-level-desc');
        if (titleEl) titleEl.textContent = levelData.title;
        if (descEl) descEl.textContent = levelData.description;

        if (this.currentView === 'lessons') {
            this.renderLessonsView(levelData);
        } else if (this.currentView === 'vocabulary') {
            this.renderVocabularyView(levelData);
        } else if (this.currentView === 'reading') {
            this.renderReadingView(levelData);
        } else if (this.currentView === 'exam') {
            this.renderExamView(levelData);
        }
    }

    // 1. Konu Anlatımları Görünümü (Kritik Noktalarla Zenginleştirilmiş & Video Destekli)
    renderLessonsView(levelData) {
        let html = `
            <div class="space-y-6 animate-fade-in">
                <!-- Ünite Hızlı Erişim Çubuğu (Quick Jumper) -->
                <div class="p-3.5 rounded-xl bg-gray-800/60 border border-gray-700/80 flex items-center gap-2 overflow-x-auto text-xs">
                    <span class="text-gray-400 font-bold flex-shrink-0">Üniteler:</span>
                    ${levelData.units.map((u, i) => `
                        <a href="#${u.id}" class="px-2.5 py-1 rounded-md bg-gray-900/80 hover:bg-blue-600 hover:text-white text-gray-300 border border-gray-700/60 transition-colors whitespace-nowrap">
                            Ünite ${i + 1}
                        </a>
                    `).join('')}
                    ${levelData.videoPlaylistUrl ? `
                        <a href="${levelData.videoPlaylistUrl}" target="_blank" rel="noopener noreferrer" 
                            class="ml-auto px-3 py-1 rounded-md bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 flex items-center gap-1.5 font-bold whitespace-nowrap">
                            <span>▶ Haluk Tatar Oynatma Listesi</span>
                        </a>
                    ` : ''}
                </div>
        `;

        levelData.units.forEach((unit, unitIdx) => {
            html += `
                <div id="${unit.id}" class="unit-block p-6 rounded-2xl bg-gray-800/40 border border-gray-700/80 scroll-mt-24">
                    <div class="flex items-center justify-between flex-wrap gap-3 mb-4 pb-3 border-b border-gray-700/60">
                        <div>
                            <span class="text-xs font-bold text-blue-400 tracking-wider uppercase">${this.currentLevelId} - Ünite ${unitIdx + 1}</span>
                            <h3 class="text-xl font-bold text-white mt-0.5">${unit.title}</h3>
                            <p class="text-xs text-gray-400 mt-1">${unit.description}</p>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                            ${unit.youtubeVideoId ? `
                                <button class="px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                                    onclick="window.app.toggleVideo('${unit.id}', '${unit.youtubeVideoId}')">
                                    <span>📺 Video Dersi Aç</span>
                                </button>
                            ` : ''}
                            <button class="px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                                onclick="window.app.jumpToUnitVocab('${unit.id}')">
                                <span>📖 Kelimeler (${unit.vocabulary.length})</span>
                            </button>
                        </div>
                    </div>

                    <!-- Gömülü YouTube Video Alanı (Başlangıçta Gizli) -->
                    <div id="video-box-${unit.id}" class="hidden mb-6 rounded-xl overflow-hidden border border-red-500/30 bg-black/60 aspect-video max-w-2xl mx-auto"></div>

                    <div class="space-y-6">
                        ${unit.lessons.map(lesson => `
                            <div class="lesson-section">
                                <h4 class="text-base font-bold text-gray-100 mb-2 flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                                    ${lesson.title}
                                </h4>
                                
                                <div class="text-sm text-gray-300 leading-relaxed">
                                    ${lesson.content}
                                </div>

                                <!-- Kritik Noktalar (Püf Noktaları) Kutusu -->
                                ${lesson.criticalTips ? `
                                    <div class="my-4 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-orange-950/40 border border-amber-500/40">
                                        <div class="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                                            <span>⚠️ DİKKAT: KRİTİK PÜF NOKTASI & SIK YAPILAN HATALAR</span>
                                        </div>
                                        <div class="space-y-3">
                                            ${lesson.criticalTips.map(tip => `
                                                <div class="text-xs">
                                                    <div class="font-bold text-amber-200 mb-1">${tip.title}</div>
                                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-1.5">
                                                        <div class="p-2 rounded bg-rose-950/50 border border-rose-800/60 text-rose-300">
                                                            <span class="font-semibold text-rose-400">✗ Yanlış:</span> ${tip.wrong}
                                                        </div>
                                                        <div class="p-2 rounded bg-emerald-950/50 border border-emerald-800/60 text-emerald-300">
                                                            <span class="font-semibold text-emerald-400">✓ Doğru:</span> ${tip.correct}
                                                        </div>
                                                    </div>
                                                    <div class="text-gray-300 italic mt-1">${tip.note}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- Örnek Cümleler & Telaffuz -->
                                ${lesson.examples ? `
                                    <div class="mt-4 p-3.5 rounded-xl bg-gray-900/60 border border-gray-800">
                                        <div class="text-xs font-semibold text-gray-400 mb-2">🗣️ Örnek Kullanımlar (Sesli Telaffuz için Tıklayın):</div>
                                        <div class="space-y-2">
                                            ${lesson.examples.map(ex => `
                                                <div class="flex items-start justify-between gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                                                    <div class="text-xs">
                                                        <span class="font-medium text-blue-300 block text-sm">${ex.en}</span>
                                                        <span class="text-gray-400">${ex.tr}</span>
                                                    </div>
                                                    <button class="p-1.5 rounded-md text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 cursor-pointer flex-shrink-0" 
                                                        title="Cümleyi Dinle" onclick="window.speechService.speak('${ex.en.replace(/'/g, "\\'")}')">
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                                                    </button>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- Ders İçi Mini Alıştırmalar (Mini-Drill) -->
                                ${lesson.miniDrills ? `
                                    <div class="mt-4 p-4 rounded-xl mini-drill-box border border-indigo-500/40">
                                        <div class="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider mb-2">
                                            <span>⚡ ANINDA PEKİŞTİR (Mini Alıştırma)</span>
                                        </div>
                                        <div class="space-y-4">
                                            ${lesson.miniDrills.map((drill, dIdx) => `
                                                <div class="mini-drill-item text-xs p-3 rounded-lg bg-gray-900/70 border border-gray-800" data-answer="${drill.answer}">
                                                    <p class="text-white font-medium mb-2.5"><span class="text-indigo-400 font-bold">Soru:</span> ${drill.question}</p>
                                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        ${drill.options.map((opt, oIdx) => `
                                                            <button class="drill-opt-btn text-left p-2.5 rounded-lg border border-gray-700 bg-gray-800/80 hover:border-indigo-500 hover:bg-indigo-950/40 text-gray-300 transition-all cursor-pointer flex items-center justify-between"
                                                                onclick="window.app.handleMiniDrill(this, ${oIdx}, ${drill.answer})">
                                                                <span>${opt}</span>
                                                                <span class="drill-feedback hidden"></span>
                                                            </button>
                                                        `).join('')}
                                                    </div>
                                                    <div class="drill-explanation hidden mt-2.5 p-2 rounded bg-indigo-950/40 border border-indigo-800/40 text-indigo-200 text-xs">
                                                        💡 <strong>Açıklama:</strong> ${drill.explanation}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        html += `
            <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h4 class="font-bold text-white text-base">Üniteleri İncelediniz mi?</h4>
                    <p class="text-xs text-gray-300 mt-0.5">Kelime kartlarını tekrar edebilir veya seviye sonu değerlendirme sınavına geçebilirsiniz.</p>
                </div>
                <div class="flex gap-3">
                    <button onclick="window.app.switchView('vocabulary')" class="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs cursor-pointer">
                        Kelime Kartlarına Bak
                    </button>
                    <button onclick="window.app.switchView('exam')" class="btn-primary px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-blue-500/20">
                        Değerlendirme Sınavına Başla ➔
                    </button>
                </div>
            </div>
        </div>`;

        this.mainContentArea.innerHTML = html;
    }

    toggleVideo(unitId, videoId) {
        const box = document.getElementById(`video-box-${unitId}`);
        if (!box) return;
        if (box.classList.contains('hidden')) {
            box.classList.remove('hidden');
            box.innerHTML = `<iframe class="w-full h-full" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
            box.classList.add('hidden');
            box.innerHTML = '';
        }
    }

    // 2. Ünite Kelimeleri (Arama Filtreli & Flashcards)
    renderVocabularyView(levelData) {
        let allVocab = [];
        levelData.units.forEach(u => {
            u.vocabulary.forEach(v => {
                allVocab.push({ ...v, unitTitle: u.title });
            });
        });

        let html = `
            <div class="space-y-6 animate-fade-in">
                <div class="p-4 rounded-xl bg-gray-800/40 border border-gray-700/80 flex items-center justify-between flex-wrap gap-3">
                    <div>
                        <h3 class="text-lg font-bold text-white">${levelData.id} Seviyesi Hayati Kelimeleri & Kalıpları</h3>
                        <p class="text-xs text-gray-400">Toplam <strong>${allVocab.length}</strong> kritik kelime ve phrasal verb. Kartlara tıklayarak detayını görebilirsiniz.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <input type="text" id="vocab-search-input" placeholder="Kelime veya Türkçe ara..." 
                            class="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-48">
                        <button onclick="window.speechService.speak('${allVocab[0]?.word || 'Hello'}')" class="text-xs px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30">
                            🔊 Telaffuz Aktif
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="vocab-cards-grid">
                    ${this.generateVocabCardsHtml(allVocab)}
                </div>
            </div>
        `;

        this.mainContentArea.innerHTML = html;

        // Kelime Arama Dinleyicisi
        const searchInput = document.getElementById('vocab-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = allVocab.filter(v => 
                    v.word.toLowerCase().includes(query) || 
                    v.tr.toLowerCase().includes(query)
                );
                const grid = document.getElementById('vocab-cards-grid');
                if (grid) grid.innerHTML = this.generateVocabCardsHtml(filtered);
            });
        }
    }

    generateVocabCardsHtml(vocabList) {
        if (!vocabList || vocabList.length === 0) {
            return `<div class="col-span-full text-center py-8 text-sm text-gray-400">Eşleşen kelime bulunamadı.</div>`;
        }
        return vocabList.map(v => `
            <div class="vocab-card p-5 rounded-2xl bg-gray-800/60 border border-gray-700/80 hover:border-blue-500/50 transition-all flex flex-col justify-between cursor-pointer group"
                onclick="this.classList.toggle('flipped')">
                
                <!-- Ön Yüz -->
                <div class="vocab-front">
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <span class="text-xs font-mono text-gray-500">${v.pronunciation || ''}</span>
                        <button class="p-1 rounded text-gray-400 hover:text-blue-400 cursor-pointer" title="Dinle" 
                            onclick="event.stopPropagation(); window.speechService.speak('${v.word.replace(/'/g, "\\'")}')">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                        </button>
                    </div>
                    <h4 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">${v.word}</h4>
                    <div class="mt-2 text-sm font-semibold text-emerald-400">${v.tr}</div>
                </div>

                <!-- Arka Yüz / Örnek Detay -->
                <div class="mt-4 pt-3 border-t border-gray-700/60 text-xs">
                    <div class="text-gray-400 mb-1">Örnek Cümle:</div>
                    <p class="text-gray-200 italic font-serif">"${v.example}"</p>
                    <button class="mt-2 text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                        onclick="event.stopPropagation(); window.speechService.speak('${v.example.replace(/'/g, "\\'")}')">
                        <span>Cümleyi dinle</span> 🔊
                    </button>
                </div>
            </div>
        `).join('');
    }

    handleMiniDrill(btnEl, selectedIdx, correctIdx) {
        const parentItem = btnEl.closest('.mini-drill-item');
        if (!parentItem || parentItem.dataset.answered === 'true') return;
        parentItem.dataset.answered = 'true';

        const allBtns = parentItem.querySelectorAll('.drill-opt-btn');
        allBtns.forEach((b, idx) => {
            b.disabled = true;
            b.classList.remove('cursor-pointer');
            if (idx === correctIdx) {
                b.classList.add('border-emerald-500', 'bg-emerald-950/70', 'text-emerald-200');
                const fb = b.querySelector('.drill-feedback');
                if (fb) { fb.textContent = '✓'; fb.classList.remove('hidden'); fb.className = 'drill-feedback text-emerald-400 font-bold'; }
            } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
                b.classList.add('border-rose-500', 'bg-rose-950/70', 'text-rose-200');
                const fb = b.querySelector('.drill-feedback');
                if (fb) { fb.textContent = '✗'; fb.classList.remove('hidden'); fb.className = 'drill-feedback text-rose-400 font-bold'; }
            }
        });

        if (selectedIdx === correctIdx) {
            window.speechService.playCorrectSound();
        } else {
            window.speechService.playWrongSound();
        }

        const exp = parentItem.querySelector('.drill-explanation');
        if (exp) exp.classList.remove('hidden');
    }

    // 3. Okuma & Dinleme Parçaları Görünümü (Reading Comprehension)
    renderReadingView(levelData) {
        const dialogues = levelData.readingDialogues || [];
        if (dialogues.length === 0) {
            this.mainContentArea.innerHTML = `
                <div class="p-12 text-center text-gray-400 animate-fade-in">
                    <div class="text-5xl mb-3">🎧</div>
                    <h3 class="text-xl font-bold text-white mb-2">Bu Seviye İçin Okuma & Dinleme Diyalogları Hazırlanıyor</h3>
                    <p class="text-sm max-w-md mx-auto">Şu an <strong>B1 ve B2</strong> seviyelerinde mülakat ve stratejik iş toplantısı diyalogları ve anlama soruları aktiftir. Seviyeyi B1 veya B2 seçerek hemen deneyebilirsiniz!</p>
                </div>
            `;
            return;
        }

        let html = `
            <div class="space-y-8 animate-fade-in">
                ${dialogues.map((d, dIdx) => `
                    <div class="dialogue-block p-6 rounded-2xl bg-gray-800/40 border border-gray-700/80">
                        <div class="flex items-center justify-between flex-wrap gap-3 pb-4 mb-4 border-b border-gray-700/60">
                            <div>
                                <span class="text-xs font-bold text-indigo-400 tracking-wider uppercase">${this.currentLevelId} - Dinleme & Konuşma Pratiği #${dIdx + 1}</span>
                                <h3 class="text-xl font-bold text-white mt-0.5">${d.title}</h3>
                                <p class="text-xs text-gray-400 mt-1">${d.description}</p>
                            </div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <button class="px-3.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                                    onclick="window.app.toggleDialogueTr('${d.id}')">
                                    <span>🌐 Türkçe Çevirileri Aç / Kapat</span>
                                </button>
                                <button class="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                                    onclick="window.app.playFullDialogue('${d.id}')">
                                    <span>🔊 Tümünü Dinle</span>
                                </button>
                            </div>
                        </div>

                        <!-- Diyalog Konuşma Baloncukları -->
                        <div class="space-y-3 mb-6" id="dialogue-lines-${d.id}">
                            ${d.lines.map((l, lIdx) => `
                                <div class="p-3.5 rounded-xl ${lIdx % 2 === 0 ? 'dialogue-speaker-a' : 'dialogue-speaker-b'} transition-all">
                                    <div class="flex items-center justify-between gap-2 mb-1">
                                        <span class="text-xs font-extrabold ${lIdx % 2 === 0 ? 'text-blue-400' : 'text-indigo-400'}">${l.speaker}:</span>
                                        <button class="p-1 text-gray-400 hover:text-white cursor-pointer" title="Cümleyi Dinle"
                                            onclick="window.speechService.speak('${l.text.replace(/'/g, "\\'")}')">
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                                        </button>
                                    </div>
                                    <p class="text-sm text-gray-100 font-medium leading-relaxed">${l.text}</p>
                                    <p class="diag-tr hidden mt-1 text-xs text-gray-400 italic">${l.tr}</p>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Anlama Soruları (Comprehension Questions) -->
                        <div class="p-4 rounded-xl bg-gray-900/80 border border-gray-800">
                            <h4 class="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">❓ Metin / Diyalog Anlama Soruları</h4>
                            <div class="space-y-4">
                                ${d.comprehensionQuestions.map((cq, cqIdx) => `
                                    <div class="comp-question p-3 rounded-lg bg-gray-800/60 border border-gray-700/80 text-xs">
                                        <div class="text-white font-medium mb-2"><span class="text-blue-400 font-bold">S${cqIdx + 1}:</span> ${cq.question}</div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            ${cq.options.map((opt, oIdx) => `
                                                <button class="cq-opt-btn text-left p-2.5 rounded-lg border border-gray-700 bg-gray-900/60 hover:border-blue-500 hover:bg-blue-950/40 text-gray-300 cursor-pointer flex items-center justify-between"
                                                    onclick="window.app.handleCompQuestion(this, ${oIdx}, ${cq.answer})">
                                                    <span>${opt}</span>
                                                    <span class="cq-feedback hidden"></span>
                                                </button>
                                            `).join('')}
                                        </div>
                                        <div class="cq-explanation hidden mt-2.5 p-2 rounded bg-blue-950/40 border border-blue-800/40 text-blue-200 text-xs">
                                            💡 <strong>Çözüm:</strong> ${cq.explanation}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        this.mainContentArea.innerHTML = html;
    }

    toggleDialogueTr(dialogueId) {
        const container = document.getElementById(`dialogue-lines-${dialogueId}`);
        if (!container) return;
        container.querySelectorAll('.diag-tr').forEach(el => el.classList.toggle('hidden'));
    }

    playFullDialogue(dialogueId) {
        const levelData = this.levels[this.currentLevelId];
        const diag = levelData.readingDialogues?.find(d => d.id === dialogueId);
        if (!diag) return;
        const fullText = diag.lines.map(l => l.text).join('. ');
        window.speechService.speak(fullText);
    }

    handleCompQuestion(btnEl, selectedIdx, correctIdx) {
        const parentCard = btnEl.closest('.comp-question');
        if (!parentCard || parentCard.dataset.answered === 'true') return;
        parentCard.dataset.answered = 'true';

        const allBtns = parentCard.querySelectorAll('.cq-opt-btn');
        allBtns.forEach((b, idx) => {
            b.disabled = true;
            b.classList.remove('cursor-pointer');
            if (idx === correctIdx) {
                b.classList.add('border-emerald-500', 'bg-emerald-950/70', 'text-emerald-200');
                const fb = b.querySelector('.cq-feedback');
                if (fb) { fb.textContent = '✓'; fb.classList.remove('hidden'); fb.className = 'cq-feedback text-emerald-400 font-bold'; }
            } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
                b.classList.add('border-rose-500', 'bg-rose-950/70', 'text-rose-200');
                const fb = b.querySelector('.cq-feedback');
                if (fb) { fb.textContent = '✗'; fb.classList.remove('hidden'); fb.className = 'cq-feedback text-rose-400 font-bold'; }
            }
        });

        if (selectedIdx === correctIdx) {
            window.speechService.playCorrectSound();
        } else {
            window.speechService.playWrongSound();
        }

        const exp = parentCard.querySelector('.cq-explanation');
        if (exp) exp.classList.remove('hidden');
    }

    jumpToUnitVocab(unitId) {
        this.switchView('vocabulary');
    }

    // 3. Değerlendirme Sınavı Görünümü
    renderExamView(levelData) {
        this.quizEngine.startExam(levelData, this.mainContentArea, (result) => {
            if (result.passed) {
                this.progress.examScores[result.levelId] = result.score;
                
                // Bir sonraki seviyenin kilidini aç
                const levelOrder = ['A1', 'A2', 'B1', 'B2'];
                const currIdx = levelOrder.indexOf(result.levelId);
                if (currIdx !== -1 && currIdx < levelOrder.length - 1) {
                    const nextLvl = levelOrder[currIdx + 1];
                    if (!this.progress.unlockedLevels.includes(nextLvl)) {
                        this.progress.unlockedLevels.push(nextLvl);
                    }
                }
                this.saveProgress();
            }
        });
    }

    advanceToNextLevel(currentLevelId) {
        const levelOrder = ['A1', 'A2', 'B1', 'B2'];
        const currIdx = levelOrder.indexOf(currentLevelId);
        if (currIdx !== -1 && currIdx < levelOrder.length - 1) {
            const nextLvl = levelOrder[currIdx + 1];
            this.switchLevel(nextLvl);
            this.switchView('lessons');
        } else {
            alert('Tebrikler! B2 seviyesine kadar olan tüm seviyeleri tamamladınız! Harika bir başarı!');
        }
    }

    retakeExam() {
        this.switchView('exam');
    }

    backToLessons() {
        this.switchView('lessons');
    }
}

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LinguaApp();
});
