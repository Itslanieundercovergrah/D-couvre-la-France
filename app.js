/* ============================================================
   DÉCOUVRE LA FRANCE: style.css
   ============================================================ */

* { box-sizing: border-box; }

/* Anything with the "hidden" attribute must really disappear,
   even if another rule sets its display */
[hidden] { display: none !important; }

html { scroll-behavior: smooth; }

body {
  font-family: Arial, sans-serif;
  margin: 0;
  line-height: 1.6;
  color: black;
  background: white;
}

img { max-width: 100%; }

/* ---------- Skip link (only visible when you press Tab) ---------- */
.skip-link {
  position: absolute;
  left: -999px;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  z-index: 10;
}

/* ---------- Header and menu ---------- */
.site-header {
  background: #1d3f8f;
  color: white;
  text-align: center;
  padding: 2rem 1rem 1rem;
}
.site-title { margin: 0; font-size: 2.2rem; }
.tagline { margin: 0.4rem 0 1rem; font-size: larger; }

.site-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
}
.site-nav a {
  color: white;
  font-weight: bold;
  font-size: larger;
  text-decoration: none;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
}
.site-nav a:hover,
.site-nav a:focus { background: rgba(255, 255, 255, 0.25); }

/* ---------- Page layout ---------- */
main { max-width: 1000px; margin: 0 auto; padding: 1rem; }
section { scroll-margin-top: 1rem; }

.exploring { font-size: xx-large; }

.intro {
  font-size: 1.15rem;
  background-color: white;
  color: black;
}

.flag-icon {
  display: block;
  width: 120px;
  height: auto;
  margin: 0 auto 1rem;
}

.hero { margin: 1rem 0; }
.hero img {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 12px;
}

/* ---------- "Learn more about France" button and panel ---------- */
.learn-france-btn {
  background: #1d3f8f;
  color: white;
  border: none;
  padding: 0.7rem 1.4rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin: 1rem 0;
}
.learn-france-btn:hover { background: #d62839; }

.france-facts {
  background: #f7f5f0;
  border-left: 5px solid #d62839;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

/* ---------- Filter buttons ---------- */
.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0.5rem;
}
.filter-btn {
  background: #eee;
  border: 2px solid #1d3f8f;
  color: #1d3f8f;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-size: 1rem;
  cursor: pointer;
}
.filter-btn:hover { background: #dfe6f7; }
.filter-btn.active {
  background: #1d3f8f;
  color: white;
}

.status { margin: 0.5rem 0 1rem; color: #555; min-height: 1.5rem; }

/* ---------- Card grid ---------- */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  align-items: start;
}

.info-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

/* Picture area: every picture gets the same shape, cropped to fit */
.card-media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, #1d3f8f, #d62839);
  overflow: hidden;
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Emoji badge in the corner of the picture */
.card-media .icon {
  position: absolute;
  left: 0.6rem;
  bottom: 0.6rem;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
}

/* If a picture can't load, show a big emoji on the colour background */
.card-media.no-photo .icon {
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  font-size: 4rem;
  background: none;
}

.card-body { padding: 1rem; }
.card-body h3 { margin: 0 0 0.25rem; }
.card-body .summary { margin: 0 0 0.75rem; }

.more {
  background: #f7f5f0;
  border-left: 4px solid #d62839;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
  margin-bottom: 0.75rem;
}
.more p { margin: 0.4rem 0; }

.learn-btn {
  background: #1d3f8f;
  color: white;
  border: none;
  padding: 0.55rem 1.1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
.learn-btn:hover { background: #d62839; }

/* ---------- Region buttons ---------- */
.region-buttons button {
  background: plum;
  border: none;
  padding: 0.6rem 1.2rem;
  margin: 0.3rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: large;
}
.region-buttons button:hover { background: pink; }
.region-buttons button[aria-pressed="true"] {
  background: #1d3f8f;
  color: white;
}

.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.card h3 { margin-top: 0; }

/* ---------- Phrases ---------- */
.phrase-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
}
.phrase-list li {
  background: #f7f5f0;
  border-left: 4px solid #1d3f8f;
  padding: 0.6rem 0.9rem;
  border-radius: 6px;
}

/* ---------- Footer ---------- */
footer { text-align: center; padding: 1rem; color: #666; }

/* ---------- Keyboard focus ring ---------- */
button:focus-visible,
a:focus-visible {
  outline: 3px solid #d62839;
  outline-offset: 2px;
}

/* Respect people who prefer less motion */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}// ===== USEFUL FRENCH PHRASES (with a listen button) =====
// Everything is wrapped in ( function () { ... } )(); so these names
// can never clash with other code in your app.js.
(function () {
  // fr = French, en = English meaning, pron = how to say it (optional).
  // To add a phrase later, copy one line, change the text, and keep the commas.
  const phraseGroups = [
    {
      title: "Essentials",
      phrases: [
        { fr: "Bonjour", pron: "bohn-ZHOOR", en: "Hello / good day" },
        { fr: "Bonsoir", pron: "bohn-SWAHR", en: "Good evening" },
        { fr: "Au revoir", pron: "oh ruh-VWAHR", en: "Goodbye" },
        { fr: "Merci", pron: "mehr-SEE", en: "Thank you" },
        { fr: "Merci beaucoup", pron: "mehr-SEE boh-KOO", en: "Thank you very much" },
        { fr: "S’il vous plaît", pron: "seel voo PLAY", en: "Please" },
        { fr: "Excusez-moi", pron: "ex-kew-ZAY mwah", en: "Excuse me" },
        { fr: "Pardon", pron: "par-DOHN", en: "Sorry" },
        { fr: "Oui / Non", pron: "wee / nohn", en: "Yes / No" }
      ]
    },
    {
      title: "Communicating",
      phrases: [
        { fr: "Parlez-vous anglais ?", pron: "par-LAY voo zahn-GLAY", en: "Do you speak English?" },
        { fr: "Je ne comprends pas", pron: "zhuh nuh kohm-PRAHN pah", en: "I don’t understand" },
        { fr: "Plus lentement, s’il vous plaît", en: "More slowly, please" },
        { fr: "Comment dit-on… en français ?", en: "How do you say… in French?" }
      ]
    },
    {
      title: "Eating out",
      phrases: [
        { fr: "Une table pour deux, s’il vous plaît", en: "A table for two, please" },
        { fr: "Je voudrais…", pron: "zhuh voo-DRAY", en: "I would like…" },
        { fr: "Un café / un thé / de l’eau", en: "A coffee / a tea / some water" },
        { fr: "Une carafe d’eau", en: "A jug of tap water (it’s free)" },
        { fr: "Je suis végétarien(ne)", en: "I’m vegetarian" },
        { fr: "L’addition, s’il vous plaît", pron: "la-dee-SYOHN", en: "The bill, please" }
      ]
    },
    {
      title: "Getting around",
      phrases: [
        { fr: "Où est… ?", pron: "oo ay", en: "Where is…?" },
        { fr: "La gare / le métro / les toilettes", en: "The station / the metro / the toilets" },
        { fr: "Un billet pour…, s’il vous plaît", en: "A ticket to…, please" },
        { fr: "À gauche / à droite / tout droit", en: "Left / right / straight ahead" }
      ]
    },
    {
      title: "Shopping",
      phrases: [
        { fr: "Combien ça coûte ?", pron: "kohm-BYAN sah KOOT", en: "How much is it?" },
        { fr: "Puis-je payer par carte ?", en: "Can I pay by card?" },
        { fr: "Je regarde seulement, merci", en: "I’m just looking, thanks" }
      ]
    },
    {
      title: "Emergencies",
      phrases: [
        { fr: "Au secours !", pron: "oh suh-KOOR", en: "Help!" },
        { fr: "J’ai besoin d’un médecin", en: "I need a doctor" },
        { fr: "Appelez la police", en: "Call the police" },
        { fr: "Le 112", en: "The emergency number (works across the EU, including France)" }
      ]
    }
  ];

  const box = document.getElementById("phrase-groups");
  if (!box) return; // the HTML box is missing, so do nothing

  // The listen button only appears if the browser can speak
  const canSpeak = "speechSynthesis" in window;

  function speakFrench(text) {
    // Remove symbols that sound odd when read aloud
    const clean = text.replace(/\([a-z]+\)/gi, "").replace(/…/g, "").replace(/\//g, ",");
    window.speechSynthesis.cancel(); // stop anything already playing
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = "fr-FR";
    utterance.rate = 0.9; // a little slower, easier to follow
    window.speechSynthesis.speak(utterance);
  }

  function makePhraseItem(phrase) {
    const li = document.createElement("li");

    const text = document.createElement("div");
    text.className = "phrase-text";

    const fr = document.createElement("span");
    fr.className = "phrase-fr";
    fr.textContent = phrase.fr;
    text.append(fr);

    if (phrase.pron) {
      const pron = document.createElement("span");
      pron.className = "phrase-pron";
      pron.textContent = "(" + phrase.pron + ")";
      text.append(pron);
    }

    const en = document.createElement("span");
    en.className = "phrase-en";
    en.textContent = phrase.en;
    text.append(en);

    li.append(text);

    if (canSpeak) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", "Listen to: " + phrase.fr);
      btn.addEventListener("click", function () {
        speakFrench(phrase.fr);
      });
      li.append(btn);
    }

    return li;
  }

  phraseGroups.forEach(function (group) {
    const wrapper = document.createElement("div");
    wrapper.className = "phrase-group";

    const title = document.createElement("h3");
    title.textContent = group.title;

    const list = document.createElement("ul");
    list.className = "phrase-list";
    group.phrases.forEach(function (phrase) {
      list.append(makePhraseItem(phrase));
    });

    wrapper.append(title, list);
    box.append(wrapper);
  });
})();

