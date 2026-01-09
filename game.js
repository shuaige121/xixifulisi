const gameData = {
    v: "1.0",
    questions: [
        {
            id: 1,
            text: {
                zh: "当面对一个棘手的技术难题时，你的第一反应是？",
                en: "When facing a tough technical challenge, your first reaction is?",
                ja: "困難な技術的課題に直面したとき、最初の反応は？",
                fr: "Face à un défi technique difficile, quelle est votre première réaction ?",
                pl: "Kiedy stoisz przed trudnym wyzwaniem technicznym, twoja pierwsza reakcja to?"
            },
            options: [
                {
                    text: {
                        zh: "深入阅读论文，寻找理论突破",
                        en: "Read papers, seek theoretical breakthrough",
                        ja: "論文を読み、理論的な突破口を探す",
                        fr: "Lire des articles, chercher une percée théorique",
                        pl: "Czytać artykuły, szukać przełomu teoretycznego"
                    },
                    scores: { ai: 3, research: 3, startup: 1 }
                },
                {
                    text: {
                        zh: "快速写个原型，跑通再说",
                        en: "Hack a prototype, make it work first",
                        ja: "プロトタイプを素早く作り、動かす",
                        fr: "Créer un prototype rapide, le faire fonctionner",
                        pl: "Szybko stworzyć prototyp, sprawić by działał"
                    },
                    scores: { startup: 3, engineering: 2, ai: 1 }
                },
                {
                    text: {
                        zh: "分析系统架构，确保稳定性",
                        en: "Analyze architecture, ensure stability",
                        ja: "アーキテクチャを分析し、安定性を確保する",
                        fr: "Analyser l'architecture, assurer la stabilité",
                        pl: "Analizować architekturę, zapewnić stabilność"
                    },
                    scores: { security: 3, chip: 2, bigtech: 2 }
                }
            ]
        },
        {
            id: 2,
            text: {
                zh: "你更喜欢的办公环境是？",
                en: "Your preferred work environment is?",
                ja: "好ましい職場環境は？",
                fr: "Quel est votre environnement de travail préféré ?",
                pl: "Twoje preferowane środowisko pracy to?"
            },
            options: [
                {
                    text: {
                        zh: "黑客马拉松式的狂热与自由",
                        en: "Hackathon-style chaos and freedom",
                        ja: "ハッカソンスタイルの熱狂と自由",
                        fr: "Le chaos et la liberté style Hackathon",
                        pl: "Chaos i wolność w stylu hackathonu"
                    },
                    scores: { startup: 3, ai: 2 }
                },
                {
                    text: {
                        zh: "拥有顶级实验室和算力支持",
                        en: "Top-tier labs and compute power",
                        ja: "トップレベルのラボと計算能力",
                        fr: "Laboratoires de pointe et puissance de calcul",
                        pl: "Najwyższej klasy laboratoria i moc obliczeniowa"
                    },
                    scores: { bigtech: 2, ai: 3, chip: 3 }
                },
                {
                    text: {
                        zh: "严谨有序，流程规范",
                        en: "Structured, rigorous, and compliant",
                        ja: "構造化され、厳格で、コンプライアンス遵守",
                        fr: "Structuré, rigoureux et conforme",
                        pl: "Zorganizowane, rygorystyczne i zgodne z przepisami"
                    },
                    scores: { security: 3, chip: 1 }
                }
            ]
        },
        {
            id: 3,
            text: {
                zh: "对于 'Risk' (风险) 这个词，你的感觉是？",
                en: "How do you feel about 'Risk'?",
                ja: "「リスク」についてどう感じますか？",
                fr: "Que pensez-vous du « Risque » ?",
                pl: "Co sądzisz o „Ryzyku”?"
            },
            options: [
                {
                    text: {
                        zh: "风险意味着高回报，冲！",
                        en: "High risk means high reward. Go!",
                        ja: "ハイリスク・ハイリターン。行け！",
                        fr: "Risque élevé signifie récompense élevée. Allez-y !",
                        pl: "Wysokie ryzyko oznacza wysoką nagrodę. Naprzód!"
                    },
                    scores: { startup: 3, crypto: 1 }
                },
                {
                    text: {
                        zh: "风险必须被识别和控制",
                        en: "Risk must be identified and controlled",
                        ja: "リスクは特定され、制御されなければならない",
                        fr: "Le risque doit être identifié et contrôlé",
                        pl: "Ryzyko musi zostać zidentyfikowane i kontrolowane"
                    },
                    scores: { security: 3, engineering: 2 }
                },
                {
                    text: {
                        zh: "只要技术在进步，风险无所谓",
                        en: "As long as tech advances, risk is okay",
                        ja: "技術が進歩する限り、リスクは問題ない",
                        fr: "Tant que la technologie progresse, le risque est acceptable",
                        pl: "Dopóki technologia postępuje, ryzyko jest w porządku"
                    },
                    scores: { ai: 2, research: 2 }
                }
            ]
        },
        {
            id: 4,
            text: {
                zh: "你更希望你的工作产出是？",
                en: "You want your work output to be?",
                ja: "自分の仕事の成果はどうありたいですか？",
                fr: "Que souhaitez-vous que votre travail produise ?",
                pl: "Czego oczekujesz od wyników swojej pracy?"
            },
            options: [
                {
                    text: {
                        zh: "改变世界的算法模型",
                        en: "Algorithms that change the world",
                        ja: "世界を変えるアルゴリズムモデル",
                        fr: "Des algorithmes qui changent le monde",
                        pl: "Algorytmy zmieniające świat"
                    },
                    scores: { ai: 3, research: 2 }
                },
                {
                    text: {
                        zh: "也是物理世界看得见的硬件",
                        en: "Tangible hardware in the physical world",
                        ja: "物理世界で見えるハードウェア",
                        fr: "Matériel tangible dans le monde physique",
                        pl: "Namacalny sprzęt w świecie fizycznym"
                    },
                    scores: { chip: 3, engineering: 1 }
                },
                {
                    text: {
                        zh: "服务亿万用户的稳定平台",
                        en: "Stable platforms serving billions",
                        ja: "数十億人のユーザーにサービスを提供する安定したプラットフォーム",
                        fr: "Des plateformes stables servant des milliards d'utilisateurs",
                        pl: "Stabilne platformy obsługujące miliardy użytkowników"
                    },
                    scores: { bigtech: 3, security: 1 }
                }
            ]
        }
    ],
    results: {
        ai: {
            title: {
                zh: "AI 先锋 (Visionary)",
                en: "AI Visionary",
                ja: "AI ビジョナリー",
                fr: "Visionnaire IA",
                pl: "Wizjoner AI"
            },
            desc: {
                zh: "你拥有改变世界的野心和深厚的技术信仰。最适合你的战场是 OpenAI、DeepMind 风格的顶级 AI 实验室或硬核 AIGC 独角兽。",
                en: "You have the ambition to change the world. You belong in top AI labs like OpenAI/DeepMind or hardcore AIGC unicorns.",
                ja: "世界を変える野心を持っています。OpenAIやDeepMindのようなトップAIラボやAIGCユニコーンが適しています。",
                fr: "Vous avez l'ambition de changer le monde. Votre place est dans les meilleurs labos d'IA ou les licornes AIGC.",
                pl: "Masz ambicję zmieniać świat. Twoje miejsce to czołowe laboratoria AI lub jednorożce AIGC."
            },
            icon: "icon-ai.png"
        },
        chip: {
            title: {
                zh: "造芯架构师 (Silicon Architect)",
                en: "Silicon Architect",
                ja: "シリコンアーキテクト",
                fr: "Architecte Silicium",
                pl: "Architekt Krzemu"
            },
            desc: {
                zh: "你喜欢掌控底层的力量。NVIDIA、AMD 或崭露头角的芯片初创公司需要你这样懂得软硬结合的专家。",
                en: "You command the power of the bare metal. NVIDIA, AMD, or rising chip startups need experts like you.",
                ja: "底層の力を操るのが好きですね。NVIDIA、AMD、または新興のチップスタートアップがあなたを必要としています。",
                fr: "Vous maîtrisez la puissance du matériel. NVIDIA, AMD ou les startups de puces ont besoin de vous.",
                pl: "Władasz mocą sprzętu. NVIDIA, AMD lub startupy chipowe potrzebują ekspertów takich jak ty."
            },
            icon: "icon-chip.png"
        },
        security: {
            title: {
                zh: "赛博守护者 (Cyber Guardian)",
                en: "Cyber Guardian",
                ja: "サイバーガーディアン",
                fr: "Cyber Gardien",
                pl: "Cyber Strażnik"
            },
            desc: {
                zh: "你在混乱中寻找秩序。Palo Alto Networks、CrowdStrike 或金融科技巨头的安全团队是你施展才华的最佳舞台。",
                en: "You find order in chaos. Security giants or FinTech defense teams are your best stage.",
                ja: "混沌の中に秩序を見出します。セキュリティ大手やFinTechの防衛チームがあなたの最高の舞台です。",
                fr: "Vous trouvez de l'ordre dans le chaos. Les géants de la sécurité ou la défense FinTech sont pour vous.",
                pl: "Znajdujesz porządek w chaosie. Giganci bezpieczeństwa lub zespoły obrony FinTech to twoja scena."
            },
            icon: "icon-security.png"
        },
        startup: {
            title: {
                zh: "极客创始人 (Growth Hacker)",
                en: "Growth Hacker",
                ja: "グロースハッカー",
                fr: "Growth Hacker",
                pl: "Haker Wzrostu"
            },
            desc: {
                zh: "你天生属于创业公司！快速迭代、全栈全能。去寻找那些刚融完 A 轮、准备起飞的火箭吧。",
                en: "You are born for startups! Fast adaptation, full-stack skills. Go find that Series A rocket ship.",
                ja: "あなたはスタートアップのために生まれました！高速な適応力、フルスタックのスキル。急成長するロケットシップを見つけましょう。",
                fr: "Né pour les startups ! Adaptation rapide, compétences full-stack. Trouvez cette fusée de série A.",
                pl: "Urodzony dla startupów! Szybka adaptacja, pełny stack. Znajdź tę rakietę serii A."
            },
            icon: "icon-ai.png" // Fallback icon
        }
    }
};

class CareerGame {
    constructor() {
        this.currentQ = 0;
        this.scores = { ai: 0, chip: 0, security: 0, startup: 0, bigtech: 0 };
        this.lang = document.body.dataset.lang || 'zh';

        this.initUI();
        this.bindEvents();
    }

    initUI() {
        // Inject Modal HTML
        const modalHtml = `
      <div id="game-modal" class="game-modal" aria-hidden="true">
        <div class="game-overlay"></div>
        <div class="game-container">
          <button class="game-close">&times;</button>
          
          <div class="game-intro active">
            <h2 class="game-title">
              <span class="copy zh">测测你的<br>深科技人格</span>
              <span class="copy en">Discover Your<br>Deep Tech Persona</span>
            </h2>
            <p class="game-subtitle">
              <span class="copy zh">回答 4 个问题，发现最适合你的科技巨头或独角兽。</span>
              <span class="copy en">Answer 4 questions to find your ideal tech giant or unicorn match.</span>
            </p>
            <button class="btn primary game-start-btn">
              <span class="copy zh">开始测试</span>
              <span class="copy en">Start Quiz</span>
            </button>
          </div>

          <div class="game-question">
            <div class="progress-bar"><div class="progress-fill"></div></div>
            <h3 class="q-text"></h3>
            <div class="options-grid"></div>
          </div>

          <div class="game-result">
            <div class="result-icon-container">
              <img src="" class="result-icon" alt="Result Icon">
            </div>
            <h2 class="result-title"></h2>
            <p class="result-desc"></p>
            <div class="result-actions">
              <a href="#resume" class="btn primary btn-resume">
                <span class="copy zh">发送简历</span>
                <span class="copy en">Send Resume</span>
              </a>
              <button class="btn ghost btn-restart">
                <span class="copy zh">再测一次</span>
                <span class="copy en">Retake</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating Game Entry -->
      <button id="game-entry-btn" class="game-entry-btn">
        <span class="copy zh">测一测</span>
        <span class="copy en">Quiz</span>
      </button>
    `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    bindEvents() {
        this.modal = document.getElementById('game-modal');
        this.introView = this.modal.querySelector('.game-intro');
        this.qView = this.modal.querySelector('.game-question');
        this.rView = this.modal.querySelector('.game-result');
        this.optionsGrid = this.modal.querySelector('.options-grid');
        this.qText = this.modal.querySelector('.q-text');

        // Open Game
        document.getElementById('game-entry-btn').addEventListener('click', () => {
            this.modal.classList.add('is-open');
            this.modal.setAttribute('aria-hidden', 'false');
        });

        // Close Game
        this.modal.querySelector('.game-close').addEventListener('click', () => {
            this.modal.classList.remove('is-open');
            this.modal.setAttribute('aria-hidden', 'true');
        });

        this.modal.querySelector('.game-overlay').addEventListener('click', () => {
            this.modal.classList.remove('is-open');
        });

        // Start
        this.modal.querySelector('.game-start-btn').addEventListener('click', () => {
            this.reset();
            this.showQuestion();
        });

        // Restart
        this.modal.querySelector('.btn-restart').addEventListener('click', () => {
            this.reset();
            this.showQuestion();
        });

        // Resume Link (Close modal when clicked)
        this.modal.querySelector('.btn-resume').addEventListener('click', () => {
            this.modal.classList.remove('is-open');
        });

        // Listen for language changes externally if needed, but for now we read body attr
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "data-lang") {
                    this.lang = document.body.dataset.lang;
                    this.updateText();
                }
            });
        });
        observer.observe(document.body, { attributes: true });
    }

    reset() {
        this.currentQ = 0;
        this.scores = { ai: 0, chip: 0, security: 0, startup: 0, bigtech: 0 };
        this.introView.classList.remove('active');
        this.rView.classList.remove('active');
        this.qView.classList.add('active');
    }

    showQuestion() {
        const q = gameData.questions[this.currentQ];
        this.lang = document.body.dataset.lang || 'zh';

        this.qText.textContent = q.text[this.lang];
        this.optionsGrid.innerHTML = '';

        // Update progress
        const progress = ((this.currentQ) / gameData.questions.length) * 100;
        this.modal.querySelector('.progress-fill').style.width = `${progress}%`;

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-option';
            btn.textContent = opt.text[this.lang];
            btn.addEventListener('click', () => this.handleAnswer(opt.scores));
            this.optionsGrid.appendChild(btn);
        });
    }

    handleAnswer(scores) {
        // Add scores
        for (const key in scores) {
            if (this.scores.hasOwnProperty(key)) {
                this.scores[key] += scores[key];
            } else {
                this.scores[key] = scores[key]; // fallback if key missing
            }
        }

        this.currentQ++;
        if (this.currentQ < gameData.questions.length) {
            this.showQuestion();
        } else {
            this.showResult();
        }
    }

    showResult() {
        this.qView.classList.remove('active');
        this.rView.classList.add('active');

        // Calculate top score logic
        // Sort scores
        const sorted = Object.entries(this.scores).sort((a, b) => b[1] - a[1]);
        const topKey = sorted[0][0]; // e.g. 'ai'

        // Map 'bigtech', 'research', 'engineering' to primary keys if not primary
        // Primary keys in results: ai, chip, security, startup
        let resultKey = topKey;
        if (!gameData.results[resultKey]) {
            // Fallback mapping
            if (resultKey === 'bigtech') resultKey = 'security'; // Stability -> Security/Bigcorp
            else if (resultKey === 'research') resultKey = 'ai';
            else if (resultKey === 'engineering') resultKey = 'chip';
            else resultKey = 'startup';
        }

        const res = gameData.results[resultKey];
        this.lang = document.body.dataset.lang || 'zh';

        const rTitle = this.modal.querySelector('.result-title');
        const rDesc = this.modal.querySelector('.result-desc');
        const rImg = this.modal.querySelector('.result-icon');

        rTitle.textContent = res.title[this.lang];
        rDesc.textContent = res.desc[this.lang];
        rImg.src = `assets/${res.icon}`;
    }

    updateText() {
        // If currently showing a question, refresh it for language
        if (this.qView.classList.contains('active')) {
            this.showQuestion();
        }
        // Result and Intro text are language-sensitive via CSS classes usually,
        // but here we injected text content directly in JS.
        // For full support, restarting the phase or refreshing text is needed.
        // For simplicity, we just check if result is Active, we re-render result.
        if (this.rView.classList.contains('active')) {
            this.showResult();
        }
    }
}

// Init when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new CareerGame();
});
