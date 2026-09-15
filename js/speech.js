// Web Speech & Web Audio Manager
class SpeechService {
    constructor() {
        this.synth = window.speechSynthesis;
        this.rate = 0.9; // Biraz daha yavaş ve anlaşılır
        this.voice = null;
        this.initVoices();
        
        if (this.synth && this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.initVoices();
        }

        // Web Audio Context for sound effects
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        } catch (e) {
            this.audioCtx = null;
        }
    }

    initVoices() {
        if (!this.synth) return;
        const voices = this.synth.getVoices();
        // Tercihen UK veya US İngilizce sesi bul
        this.voice = voices.find(v => v.lang === 'en-US') || 
                     voices.find(v => v.lang === 'en-GB') || 
                     voices.find(v => v.lang.startsWith('en')) || 
                     voices[0];
    }

    speak(text, speed = null) {
        if (!this.synth) {
            console.warn('Speech synthesis not supported');
            return;
        }

        // Eğer devam eden konuşma varsa durdur
        this.synth.cancel();

        const cleanText = text.replace(/[*_#`]/g, '').trim();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-US';
        utterance.rate = speed || this.rate;
        if (this.voice) {
            utterance.voice = this.voice;
        }

        this.synth.speak(utterance);
    }

    // Doğru cevap sesi (Hoş bir çift ton)
    playCorrectSound() {
        if (!this.audioCtx) return;
        try {
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const now = this.audioCtx.currentTime;
            
            // Birinci nota
            const osc1 = this.audioCtx.createOscillator();
            const gain1 = this.audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(523.25, now); // C5
            gain1.gain.setValueAtTime(0.15, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            osc1.connect(gain1);
            gain1.connect(this.audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.15);

            // İkinci nota
            const osc2 = this.audioCtx.createOscillator();
            const gain2 = this.audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(659.25, now + 0.1); // E5
            gain2.gain.setValueAtTime(0.15, now + 0.1);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc2.connect(gain2);
            gain2.connect(this.audioCtx.destination);
            osc2.start(now + 0.1);
            osc2.stop(now + 0.3);
        } catch (e) {
            console.error(e);
        }
    }

    // Yanlış cevap sesi
    playWrongSound() {
        if (!this.audioCtx) return;
        try {
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const now = this.audioCtx.currentTime;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        } catch (e) {
            console.error(e);
        }
    }

    // Seviye tamamlama kutlama sesi
    playSuccessFanfare() {
        if (!this.audioCtx) return;
        try {
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            const notes = [440, 554.37, 659.25, 880];
            notes.forEach((freq, idx) => {
                const now = this.audioCtx.currentTime + (idx * 0.12);
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
            });
        } catch (e) {
            console.error(e);
        }
    }
}

window.speechService = new SpeechService();
