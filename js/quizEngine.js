// LinguaFlow - Quiz Engine
class QuizEngine {
    constructor() {
        this.currentLevel = null;
        this.examData = null;
        this.answers = {
            mc: {},
            matchingPairsCompleted: 0,
            matchingTotalPairs: 0,
            translation: {}
        };
        this.selectedLeftMatch = null;
        this.matchedPairs = new Set();
    }

    startExam(levelData, containerEl, onExamCompleted) {
        this.currentLevel = levelData;
        this.examData = levelData.exam;
        this.container = containerEl;
        this.onExamCompleted = onExamCompleted;

        this.answers = {
            mc: {},
            matchingPairsCompleted: 0,
            matchingTotalPairs: 0,
            translation: {}
        };
        this.selectedLeftMatch = null;
        this.matchedPairs.clear();

        this.renderExam();
    }

    renderExam() {
        if (!this.examData) return;

        let html = `
            <div class="exam-container animate-fade-in">
                <div class="exam-header mb-6 p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30">
                    <div class="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <span class="px-3 py-1 text-xs font-bold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                🎓 Seviye Değerlendirme
                            </span>
                            <h2 class="text-2xl font-bold mt-2 text-white">${this.examData.title}</h2>
                            <p class="text-gray-300 text-sm mt-1">${this.examData.description}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-xs text-gray-400">Geçme Notu</div>
                            <div class="text-2xl font-extrabold text-emerald-400">%${this.examData.passScore}</div>
                        </div>
                    </div>
                </div>

                <!-- Bölüm 1: Çoktan Seçmeli Sorular -->
                <section class="mb-10">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</span>
                        <h3 class="text-lg font-bold text-white">Çoktan Seçmeli Sorular</h3>
                    </div>
                    <div class="space-y-6">
                        ${this.examData.multipleChoice.map((mc, idx) => this.renderMultipleChoiceItem(mc, idx)).join('')}
                    </div>
                </section>

                <!-- Bölüm 2: İnteraktif Eşleştirme -->
                <section class="mb-10">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">2</span>
                        <h3 class="text-lg font-bold text-white">İnteraktif Eşleştirme</h3>
                    </div>
                    ${this.renderMatchingSection()}
                </section>

                <!-- Bölüm 3: Çeviri Soruları -->
                <section class="mb-10">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">3</span>
                        <h3 class="text-lg font-bold text-white">Cümle Çeviri & Dilbilgisi</h3>
                    </div>
                    <div class="space-y-6">
                        ${this.examData.translation.map((tr, idx) => this.renderTranslationItem(tr, idx)).join('')}
                    </div>
                </section>

                <!-- Sınavı Tamamla Butonu -->
                <div class="mt-8 p-6 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h4 class="font-bold text-white">Sınavı Bitirmeye Hazır mısınız?</h4>
                        <p class="text-sm text-gray-400">Tüm bölümleri tamamladıktan sonra sonucunuzu ve bir sonraki seviye durumunuzu görün.</p>
                    </div>
                    <button id="btn-finish-exam" class="btn-primary px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer">
                        <span>Sonuçları Hesapla & Seviyeyi Değerlendir</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>

                <div id="exam-result-area" class="mt-8 hidden"></div>
            </div>
        `;

        this.container.innerHTML = html;
        this.attachEvents();
    }

    renderMultipleChoiceItem(mc, index) {
        return `
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700/80 mc-question" data-mc-index="${index}">
                <div class="flex items-start justify-between gap-4 mb-3">
                    <div class="font-medium text-white text-base">
                        <span class="text-blue-400 font-bold mr-1">S${index + 1}.</span> ${mc.question}
                    </div>
                    <button class="text-gray-400 hover:text-blue-400 p-1 rounded transition-colors" title="Cümleyi Dinle" onclick="window.speechService.speak('${mc.question.replace(/[_]/g, '').replace(/'/g, "\\'")}')">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3">
                    ${mc.options.map((opt, optIdx) => `
                        <button class="mc-option-btn text-left p-3.5 rounded-lg border border-gray-700 bg-gray-900/60 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all text-sm text-gray-200 cursor-pointer flex items-center justify-between"
                            data-mc-index="${index}" data-opt-index="${optIdx}">
                            <span><strong class="text-gray-400 mr-2">${String.fromCharCode(65 + optIdx)})</strong> ${opt}</span>
                            <span class="feedback-icon hidden"></span>
                        </button>
                    `).join('')}
                </div>
                <div class="mc-explanation hidden mt-3 p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200">
                    <strong>💡 Açıklama:</strong> ${mc.explanation}
                </div>
            </div>
        `;
    }

    renderMatchingSection() {
        const matchData = this.examData.matching[0];
        if (!matchData) return '';

        this.matchingPairs = matchData.pairs;
        this.answers.matchingTotalPairs = matchData.pairs.length;

        // Sağ tarafı karıştıralım
        const shuffledRight = [...matchData.pairs].sort(() => Math.random() - 0.5);

        return `
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700/80">
                <p class="text-sm text-gray-300 mb-4">${matchData.prompt} (Soldan bir kutu seçip ardından sağdaki karşılığına tıklayın)</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Sol Taraf (İngilizce) -->
                    <div class="space-y-2.5" id="match-left-column">
                        ${matchData.pairs.map((pair, idx) => `
                            <button class="match-card match-left w-full text-left p-3.5 rounded-xl border border-gray-700 bg-gray-900/80 hover:border-indigo-500/60 transition-all text-sm font-semibold text-gray-200 cursor-pointer flex items-center justify-between"
                                data-id="${idx}" data-val="${pair.left}">
                                <span>${pair.left}</span>
                                <span class="badge-status text-xs text-gray-500">○</span>
                            </button>
                        `).join('')}
                    </div>
                    <!-- Sağ Taraf (Türkçe) -->
                    <div class="space-y-2.5" id="match-right-column">
                        ${shuffledRight.map((pair, idx) => `
                            <button class="match-card match-right w-full text-left p-3.5 rounded-xl border border-gray-700 bg-gray-900/80 hover:border-indigo-500/60 transition-all text-sm text-gray-200 cursor-pointer flex items-center justify-between"
                                data-val="${pair.right}" data-orig-left="${pair.left}">
                                <span>${pair.right}</span>
                                <span class="badge-status text-xs text-gray-500">○</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div id="matching-status" class="mt-4 text-xs font-semibold text-indigo-300 flex items-center gap-2">
                    Eşleşen: <span id="match-counter">0</span> / ${matchData.pairs.length}
                </div>
            </div>
        `;
    }

    renderTranslationItem(tr, index) {
        return `
            <div class="p-5 rounded-xl bg-gray-800/50 border border-gray-700/80 translation-card" data-tr-index="${index}">
                <div class="text-sm font-semibold text-white mb-2">
                    <span class="text-emerald-400 font-bold mr-1">T${index + 1}.</span> ${tr.prompt}
                </div>
                <div class="text-xs text-gray-400 mb-3">💡 İpucu: ${tr.tip}</div>
                <div class="flex gap-2">
                    <input type="text" class="tr-input flex-1 px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500" 
                        placeholder="İngilizce çevirisini buraya yazın..." data-tr-index="${index}">
                    <button class="tr-check-btn px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm cursor-pointer transition-colors" data-tr-index="${index}">
                        Kontrol Et
                    </button>
                </div>
                <div class="tr-feedback hidden mt-3 p-3 rounded-lg text-xs"></div>
            </div>
        `;
    }

    attachEvents() {
        // 1. Çoktan Seçmeli Seçim
        this.container.querySelectorAll('.mc-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget;
                const mcIdx = parseInt(target.dataset.mcIndex);
                const optIdx = parseInt(target.dataset.optIndex);
                this.handleMultipleChoiceSelect(mcIdx, optIdx, target);
            });
        });

        // 2. Eşleştirme Seçimi
        this.container.querySelectorAll('.match-left').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget;
                if (target.classList.contains('matched')) return;

                this.container.querySelectorAll('.match-left').forEach(b => b.classList.remove('selected-match', 'border-indigo-400', 'bg-indigo-950/60'));
                target.classList.add('selected-match', 'border-indigo-400', 'bg-indigo-950/60');
                this.selectedLeftMatch = target;
            });
        });

        this.container.querySelectorAll('.match-right').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.currentTarget;
                if (target.classList.contains('matched')) return;
                if (!this.selectedLeftMatch) {
                    alert("Lütfen önce sol taraftan bir İngilizce ifade seçin!");
                    return;
                }

                const leftVal = this.selectedLeftMatch.dataset.val;
                const expectedLeft = target.dataset.origLeft;

                if (leftVal === expectedLeft) {
                    // Doğru eşleşme!
                    window.speechService.playCorrectSound();
                    this.selectedLeftMatch.classList.remove('selected-match', 'border-indigo-400', 'bg-indigo-950/60');
                    this.selectedLeftMatch.classList.add('matched', 'border-emerald-500', 'bg-emerald-950/40', 'text-emerald-300', 'opacity-80');
                    target.classList.add('matched', 'border-emerald-500', 'bg-emerald-950/40', 'text-emerald-300', 'opacity-80');
                    
                    this.selectedLeftMatch.querySelector('.badge-status').textContent = '✓';
                    this.selectedLeftMatch.querySelector('.badge-status').className = 'badge-status text-emerald-400 font-bold';
                    target.querySelector('.badge-status').textContent = '✓';
                    target.querySelector('.badge-status').className = 'badge-status text-emerald-400 font-bold';

                    this.answers.matchingPairsCompleted++;
                    const counter = this.container.querySelector('#match-counter');
                    if (counter) counter.textContent = this.answers.matchingPairsCompleted;

                    this.selectedLeftMatch = null;
                } else {
                    // Yanlış eşleşme
                    window.speechService.playWrongSound();
                    target.classList.add('border-red-500', 'bg-red-950/50');
                    this.selectedLeftMatch.classList.add('border-red-500', 'bg-red-950/50');
                    setTimeout(() => {
                        target.classList.remove('border-red-500', 'bg-red-950/50');
                        if (this.selectedLeftMatch) {
                            this.selectedLeftMatch.classList.remove('border-red-500', 'bg-red-950/50');
                        }
                    }, 600);
                }
            });
        });

        // 3. Çeviri Kontrolleri
        this.container.querySelectorAll('.tr-check-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trIdx = parseInt(e.currentTarget.dataset.trIndex);
                this.handleTranslationCheck(trIdx);
            });
        });

        this.container.querySelectorAll('.tr-input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const trIdx = parseInt(e.currentTarget.dataset.trIndex);
                    this.handleTranslationCheck(trIdx);
                }
            });
        });

        // 4. Sınavı Bitir
        const finishBtn = this.container.querySelector('#btn-finish-exam');
        if (finishBtn) {
            finishBtn.addEventListener('click', () => this.evaluateTotalExam());
        }
    }

    handleMultipleChoiceSelect(mcIdx, optIdx, btnEl) {
        const questionData = this.examData.multipleChoice[mcIdx];
        const parentCard = btnEl.closest('.mc-question');
        const allOptionBtns = parentCard.querySelectorAll('.mc-option-btn');

        // Daha önce cevaplanmışsa değiştirme
        if (this.answers.mc[mcIdx] !== undefined) return;

        const isCorrect = (optIdx === questionData.answer);
        this.answers.mc[mcIdx] = isCorrect;

        allOptionBtns.forEach((btn, idx) => {
            btn.disabled = true;
            btn.classList.remove('cursor-pointer');
            if (idx === questionData.answer) {
                btn.classList.add('border-emerald-500', 'bg-emerald-950/60', 'text-emerald-200');
                btn.querySelector('.feedback-icon').innerHTML = '✓';
                btn.querySelector('.feedback-icon').classList.remove('hidden');
                btn.querySelector('.feedback-icon').classList.add('text-emerald-400', 'font-bold');
            } else if (idx === optIdx && !isCorrect) {
                btn.classList.add('border-rose-500', 'bg-rose-950/60', 'text-rose-200');
                btn.querySelector('.feedback-icon').innerHTML = '✗';
                btn.querySelector('.feedback-icon').classList.remove('hidden');
                btn.querySelector('.feedback-icon').classList.add('text-rose-400', 'font-bold');
            }
        });

        if (isCorrect) {
            window.speechService.playCorrectSound();
        } else {
            window.speechService.playWrongSound();
        }

        const expEl = parentCard.querySelector('.mc-explanation');
        if (expEl) expEl.classList.remove('hidden');
    }

    handleTranslationCheck(trIdx) {
        const card = this.container.querySelector(`.translation-card[data-tr-index="${trIdx}"]`);
        const input = card.querySelector('.tr-input');
        const feedback = card.querySelector('.tr-feedback');
        const userText = input.value.trim();

        if (!userText) {
            alert("Lütfen önce bir çeviri cümlesi yazın!");
            return;
        }

        const trData = this.examData.translation[trIdx];
        const cleanUser = userText.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
        
        const isMatch = trData.acceptable.some(acc => {
            const cleanAcc = acc.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
            return cleanUser === cleanAcc;
        });

        this.answers.translation[trIdx] = isMatch;
        feedback.classList.remove('hidden');

        if (isMatch) {
            window.speechService.playCorrectSound();
            feedback.className = 'tr-feedback mt-3 p-3 rounded-lg text-xs bg-emerald-950/50 border border-emerald-800 text-emerald-300';
            feedback.innerHTML = `<strong>Harika! Doğru çeviri.</strong><br><em>Örnek: "${trData.acceptable[0]}"</em>`;
            input.disabled = true;
            card.querySelector('.tr-check-btn').disabled = true;
        } else {
            window.speechService.playWrongSound();
            feedback.className = 'tr-feedback mt-3 p-3 rounded-lg text-xs bg-rose-950/50 border border-rose-800 text-rose-300';
            feedback.innerHTML = `<strong>Henüz tam uyuşmadı.</strong> Doğru kabul edilen çeviri:<br><span class="font-mono text-white text-xs mt-1 block">"${trData.acceptable[0]}"</span>`;
        }
    }

    evaluateTotalExam() {
        const mcCount = this.examData.multipleChoice.length;
        const matchingCount = this.answers.matchingTotalPairs;
        const trCount = this.examData.translation.length;

        const totalItems = mcCount + matchingCount + trCount;

        let earnedPoints = 0;
        // Çoktan seçmeli doğru sayısı
        Object.values(this.answers.mc).forEach(v => { if (v === true) earnedPoints++; });
        // Eşleştirme doğru sayısı
        earnedPoints += this.answers.matchingPairsCompleted;
        // Çeviri doğru sayısı
        Object.values(this.answers.translation).forEach(v => { if (v === true) earnedPoints++; });

        const percentage = Math.round((earnedPoints / totalItems) * 100);
        const passed = percentage >= this.examData.passScore;

        const resultArea = this.container.querySelector('#exam-result-area');
        resultArea.classList.remove('hidden');

        if (passed) {
            window.speechService.playSuccessFanfare();
        } else {
            window.speechService.playWrongSound();
        }

        resultArea.innerHTML = `
            <div class="p-6 rounded-2xl ${passed ? 'bg-emerald-950/40 border border-emerald-500/50' : 'bg-rose-950/40 border border-rose-500/50'} text-center animate-fade-in">
                <div class="text-4xl mb-2">${passed ? '🎉' : '📚'}</div>
                <h3 class="text-2xl font-bold text-white mb-1">
                    ${passed ? 'Tebrikler! Seviyeyi Başarıyla Tamamladınız!' : 'Biraz Daha Pratik Gerekli'}
                </h3>
                <p class="text-gray-300 text-sm mb-4">
                    ${passed 
                        ? `Başarı oranınız <strong>%${percentage}</strong>. Bu seviyedeki tüm kazanımları gösterdiniz!` 
                        : `Başarı oranınız <strong>%${percentage}</strong>. Seviyeyi geçmek için en az <strong>%${this.examData.passScore}</strong> gereklidir.`}
                </p>

                <div class="inline-flex items-center gap-6 p-4 rounded-xl bg-gray-900/70 border border-gray-800 mb-6 text-left">
                    <div>
                        <div class="text-xs text-gray-400">Çoktan Seçmeli</div>
                        <div class="font-bold text-white">${Object.values(this.answers.mc).filter(v=>v===true).length} / ${mcCount}</div>
                    </div>
                    <div>
                        <div class="text-xs text-gray-400">Eşleştirme</div>
                        <div class="font-bold text-white">${this.answers.matchingPairsCompleted} / ${matchingCount}</div>
                    </div>
                    <div>
                        <div class="text-xs text-gray-400">Çeviri</div>
                        <div class="font-bold text-white">${Object.values(this.answers.translation).filter(v=>v===true).length} / ${trCount}</div>
                    </div>
                    <div class="border-l border-gray-700 pl-4">
                        <div class="text-xs text-gray-400">Genel Başarı</div>
                        <div class="text-xl font-black ${passed ? 'text-emerald-400' : 'text-rose-400'}">%${percentage}</div>
                    </div>
                </div>

                <div class="flex justify-center gap-4 flex-wrap">
                    ${passed ? `
                        <button id="btn-next-level" class="btn-primary px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-emerald-500/30 bg-emerald-600 hover:bg-emerald-500 cursor-pointer">
                            Sonraki Seviyenin Kilidini Aç & Devam Et ➔
                        </button>
                    ` : `
                        <button onclick="window.app.retakeExam()" class="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer">
                            Sınavı Tekrar Dene
                        </button>
                        <button onclick="window.app.backToLessons()" class="px-6 py-3 rounded-xl font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 cursor-pointer">
                            Konu Anlatımlarını İncele
                        </button>
                    `}
                </div>
            </div>
        `;

        // Callback çağrısı (ilerleme kaydı ve kilit açma)
        if (this.onExamCompleted) {
            this.onExamCompleted({
                levelId: this.currentLevel.id,
                score: percentage,
                passed: passed
            });
        }

        if (passed) {
            const nextBtn = resultArea.querySelector('#btn-next-level');
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    window.app.advanceToNextLevel(this.currentLevel.id);
                });
            }
        }
    }
}

window.QuizEngine = QuizEngine;
