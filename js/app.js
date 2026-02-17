/* ============================================
   ChatbotIA — Landing Page JavaScript
   Language toggle (ES/EN) + Nav + Email Form
   ============================================ */

(function () {
  "use strict";

  // ==========================================
  // TRANSLATIONS
  // ==========================================
  var translations = {
    es: {
      // Nav
      "nav.problem": "El problema",
      "nav.solution": "Solución",
      "nav.how": "Cómo funciona",
      "nav.cta": "Solicitar info",

      // Hero
      "hero.badge": "IA para Clínicas Dentales",
      "hero.title": "Tu clínica pierde pacientes cada vez que cierra la puerta",
      "hero.subtitle": "Mientras tu equipo descansa, los pacientes buscan respuestas y no las encuentran. Muchos no vuelven a llamar. Con ChatbotIA, tu clínica atiende las 24 horas — sin contratar a nadie más.",
      "hero.cta_primary": "Quiero saber más",
      "hero.cta_secondary": "Ver demo en vivo",
      "hero.stat1": "Atención sin parar",
      "hero.stat2": "Tiempo de respuesta",
      "hero.stat3": "Consultas resueltas",
      "hero.stat4": "Pacientes perdidos",

      // Problem
      "problem.title": "Cada hora que tu clínica está cerrada, pierdes dinero",
      "problem.subtitle": "No es solo un inconveniente — es dinero que se va a la competencia.",
      "problem.p1_title": "Son las 21:00. Un paciente busca dentista. Tu teléfono no suena.",
      "problem.p1_desc": "El 40% de las búsquedas de dentista ocurren fuera del horario laboral. Ese paciente que busca \"dentista cerca de mí\" a las 9 de la noche no va a esperar hasta mañana — va a llamar al primero que le conteste. Si no eres tú, será otro.",
      "problem.p1_highlight": "Cada llamada perdida es una primera visita que nunca ocurrirá.",
      "problem.p2_title": "Tu recepcionista pasa 3 horas al día contestando las mismas preguntas.",
      "problem.p2_desc": "\"¿Qué horarios tenéis?\" \"¿Cuánto cuesta una limpieza?\" \"¿Necesito cita previa?\" Tu personal más valioso está atrapado en un bucle de preguntas repetitivas en vez de atender a los pacientes que ya están en la clínica.",
      "problem.p2_highlight": "Estás pagando a un profesional para hacer el trabajo de un FAQ.",
      "problem.p3_title": "El paciente que espera 2 horas por una respuesta no vuelve.",
      "problem.p3_desc": "La expectativa actual es inmediatez. Si un paciente manda un WhatsApp o un email y no recibe respuesta en minutos, su percepción de tu clínica baja. La frustración se convierte en una reseña negativa — o simplemente desaparecen.",
      "problem.p3_highlight": "La lentitud en responder te cuesta más que cualquier tratamiento gratuito.",
      "problem.callout_title": "¿Cuánto te cuesta esto al mes?",
      "problem.callout_desc": "Si pierdes solo 5 pacientes nuevos al mes por no estar disponible, y cada paciente vale una media de $800 en tratamientos a lo largo del año, son <strong>$4,000 al mes</strong> que se van a otra clínica. Cada mes. Sin que lo notes.",
      "problem.callout_kicker": "Un chatbot con IA te cuesta menos que una recepcionista — y trabaja las 24 horas, los 365 días del año.",

      // Solution
      "solution.title": "Un asistente que nunca duerme, nunca se cansa y nunca pierde un paciente",
      "solution.subtitle": "ChatbotIA es un chatbot con inteligencia artificial avanzada que conversa de forma natural, responde con la información de tu clínica y atiende a tus pacientes cuando tú no puedes.",
      "solution.f1_title": "Respuestas precisas desde tu documentación",
      "solution.f1_desc": "El chatbot aprende de tus FAQs, servicios, horarios, protocolos y fichas técnicas. Responde exactamente como tú lo harías.",
      "solution.f2_title": "Búsqueda inteligente en internet",
      "solution.f2_desc": "Cuando la información no está en tus documentos, busca en internet — excluyendo automáticamente las webs de la competencia.",
      "solution.f3_title": "Se instala directo en tu web",
      "solution.f3_desc": "Un widget personalizado que se integra en tu página web en minutos. Especialmente compatible con WordPress.",
      "solution.f4_title": "Todas las conversaciones registradas",
      "solution.f4_desc": "Cada conversación se guarda automáticamente en Google Sheets para que puedas revisar qué preguntan tus pacientes.",
      "solution.f5_title": "También por WhatsApp",
      "solution.f5_desc": "El chatbot puede atender pacientes directamente por WhatsApp — el canal que ya usan para comunicarse contigo.",
      "solution.f6_title": "Asistente de voz",
      "solution.f6_desc": "Para pacientes que prefieren hablar, ofrecemos un asistente de voz con IA conversacional avanzada.",

      // Demo
      "demo.title": "Así conversa con tus pacientes",
      "demo.subtitle": "Conversaciones naturales, respuestas precisas, disponible a cualquier hora.",
      "demo.chat_header": "Clínica Dental Somrís — Asistente IA",
      "demo.chat_user1": "Hola, me duele una muela desde ayer. ¿Podéis atenderme mañana?",
      "demo.chat_bot1": "¡Hola! Siento que tengas dolor. Tenemos disponibilidad mañana a las 9:30 y a las 12:00 para urgencias. ¿Cuál te viene mejor? Si el dolor es muy intenso, puedo darte algunos consejos mientras tanto.",
      "demo.chat_bot2": "Perfecto, las 9:30. Dime tu nombre y un número de teléfono para reservarte la cita.",
      "demo.chat_user2": "María García, 612 345 678.",
      "demo.chat_bot3": "Listo, María. Te he reservado para mañana a las 9:30. Solo trae tu tarjeta sanitaria y, si tienes radiografías recientes, tráelas también. Estamos en Calle Mayor 15. ¿Necesitas algo más?",
      "demo.cta": "Probar el chatbot en vivo",
      "demo.note": "Esta demo está activa en una empresa de otro sector. El chatbot para tu clínica se personalizará completamente con tu información y marca.",

      // How it works
      "how.title": "Funcionando en dos semanas",
      "how.subtitle": "Nosotros nos encargamos de todo. Tú solo nos envías tu documentación.",
      "how.step1_title": "Entrenamos el chatbot con tu información",
      "how.step1_desc": "Nos envías tus FAQs, servicios, horarios y protocolos. Nosotros entrenamos la IA para que responda como tú lo harías. Sin esfuerzo por tu parte.",
      "how.step2_title": "Lo instalamos en tu web",
      "how.step2_desc": "Integramos el widget directamente en tu página web, personalizado con la imagen de tu clínica. Compatible con WordPress y cualquier web.",
      "how.step3_title": "Tus pacientes reciben atención 24/7",
      "how.step3_desc": "Desde el primer día, el chatbot atiende consultas, resuelve dudas y captura datos de pacientes nuevos. Nosotros monitorizamos y ajustamos.",

      // Benefits
      "benefits.title": "Lo que cambia en tu clínica desde el día 1",
      "benefits.b1_title": "Dejas de perder pacientes",
      "benefits.b1_desc": "Cada consulta fuera de horario que antes se perdía, ahora se convierte en una cita agendada.",
      "benefits.b2_title": "Tu equipo respira",
      "benefits.b2_desc": "Las preguntas repetitivas desaparecen. Tu recepcionista se enfoca en los pacientes que están en la clínica.",
      "benefits.b3_title": "Mejor experiencia del paciente",
      "benefits.b3_desc": "Respuestas inmediatas, a cualquier hora. Los pacientes se sienten atendidos y valorados.",
      "benefits.b4_title": "100% adaptado a tu marca",
      "benefits.b4_desc": "El chatbot habla con tu tono, usa tu información y se integra visualmente con tu web.",

      // CTA
      "cta.title": "¿Quieres ver cómo funcionaría en tu clínica?",
      "cta.subtitle": "Déjanos tu email y te contactamos para mostrarte una demo personalizada. Sin compromiso, sin presión.",
      "cta.button": "Quiero una demo",
      "cta.note": "Sin spam. Solo te escribiremos para coordinar la demo.",

      // Footer
      "footer.rights": "Todos los derechos reservados.",
    },
    en: {
      // Nav
      "nav.problem": "The problem",
      "nav.solution": "Solution",
      "nav.how": "How it works",
      "nav.cta": "Get info",

      // Hero
      "hero.badge": "AI for Dental Clinics",
      "hero.title": "Your clinic loses patients every time it closes the door",
      "hero.subtitle": "While your team rests, patients search for answers and can't find them. Many never call back. With ChatbotIA, your clinic serves patients 24 hours a day — without hiring anyone new.",
      "hero.cta_primary": "I want to know more",
      "hero.cta_secondary": "See live demo",
      "hero.stat1": "Always available",
      "hero.stat2": "Response time",
      "hero.stat3": "Queries resolved",
      "hero.stat4": "Patients lost",

      // Problem
      "problem.title": "Every hour your clinic is closed, you're losing money",
      "problem.subtitle": "It's not just an inconvenience — it's money going to your competition.",
      "problem.p1_title": "It's 9 PM. A patient is looking for a dentist. Your phone doesn't ring.",
      "problem.p1_desc": "40% of dentist searches happen outside business hours. That patient searching \"dentist near me\" at 9 PM won't wait until tomorrow — they'll call the first one who answers. If it's not you, it'll be someone else.",
      "problem.p1_highlight": "Every missed call is a first appointment that will never happen.",
      "problem.p2_title": "Your receptionist spends 3 hours a day answering the same questions.",
      "problem.p2_desc": "\"What are your hours?\" \"How much is a cleaning?\" \"Do I need an appointment?\" Your most valuable staff is trapped in a loop of repetitive questions instead of attending to patients already in the clinic.",
      "problem.p2_highlight": "You're paying a professional to do the job of a FAQ page.",
      "problem.p3_title": "The patient who waits 2 hours for an answer doesn't come back.",
      "problem.p3_desc": "Today's expectation is immediacy. If a patient sends a WhatsApp or email and doesn't get a response in minutes, their perception of your clinic drops. Frustration becomes a bad review — or they simply disappear.",
      "problem.p3_highlight": "Slow responses cost you more than any free treatment ever could.",
      "problem.callout_title": "How much is this costing you per month?",
      "problem.callout_desc": "If you lose just 5 new patients per month because you weren't available, and each patient is worth an average of $800 in treatments over the year, that's <strong>$4,000 per month</strong> going to another clinic. Every month. Without you noticing.",
      "problem.callout_kicker": "An AI chatbot costs less than a receptionist — and works 24 hours a day, 365 days a year.",

      // Solution
      "solution.title": "An assistant that never sleeps, never gets tired, and never loses a patient",
      "solution.subtitle": "ChatbotIA is an advanced AI chatbot that converses naturally, answers with your clinic's information, and serves your patients when you can't.",
      "solution.f1_title": "Precise answers from your documentation",
      "solution.f1_desc": "The chatbot learns from your FAQs, services, hours, protocols, and technical sheets. It answers exactly as you would.",
      "solution.f2_title": "Smart internet search",
      "solution.f2_desc": "When information isn't in your documents, it searches the internet — automatically excluding competitor websites.",
      "solution.f3_title": "Installs directly on your website",
      "solution.f3_desc": "A custom widget that integrates into your website in minutes. Especially compatible with WordPress.",
      "solution.f4_title": "All conversations logged",
      "solution.f4_desc": "Every conversation is automatically saved to Google Sheets so you can review what patients are asking.",
      "solution.f5_title": "WhatsApp too",
      "solution.f5_desc": "The chatbot can serve patients directly through WhatsApp — the channel they already use to communicate with you.",
      "solution.f6_title": "Voice assistant",
      "solution.f6_desc": "For patients who prefer to talk, we offer a voice assistant with advanced conversational AI.",

      // Demo
      "demo.title": "This is how it talks to your patients",
      "demo.subtitle": "Natural conversations, precise answers, available at any hour.",
      "demo.chat_header": "Dental Clinic Somrís — AI Assistant",
      "demo.chat_user1": "Hi, I've had a toothache since yesterday. Can you see me tomorrow?",
      "demo.chat_bot1": "Hello! Sorry to hear about the pain. We have availability tomorrow at 9:30 AM and 12:00 PM for emergencies. Which works better? If the pain is very intense, I can give you some tips in the meantime.",
      "demo.chat_bot2": "Great, 9:30 it is. Can I get your name and phone number to book the appointment?",
      "demo.chat_user2": "Maria Garcia, 555-123-4567.",
      "demo.chat_bot3": "All set, Maria. You're booked for tomorrow at 9:30. Just bring your insurance card and any recent X-rays if you have them. We're at 15 Main Street. Need anything else?",
      "demo.cta": "Try the chatbot live",
      "demo.note": "This demo is live on a company from a different industry. The chatbot for your clinic will be fully customized with your information and branding.",

      // How it works
      "how.title": "Up and running in two weeks",
      "how.subtitle": "We handle everything. You just send us your documentation.",
      "how.step1_title": "We train the chatbot with your information",
      "how.step1_desc": "Send us your FAQs, services, hours, and protocols. We train the AI to respond just like you would. Zero effort on your part.",
      "how.step2_title": "We install it on your website",
      "how.step2_desc": "We integrate the widget directly into your website, branded to match your clinic's identity. Works with WordPress and any website.",
      "how.step3_title": "Your patients get 24/7 support",
      "how.step3_desc": "From day one, the chatbot handles inquiries, answers questions, and captures new patient data. We monitor and fine-tune.",

      // Benefits
      "benefits.title": "What changes in your clinic from day 1",
      "benefits.b1_title": "Stop losing patients",
      "benefits.b1_desc": "Every after-hours inquiry that used to be lost now becomes a booked appointment.",
      "benefits.b2_title": "Your team can breathe",
      "benefits.b2_desc": "Repetitive questions disappear. Your receptionist focuses on patients already in the clinic.",
      "benefits.b3_title": "Better patient experience",
      "benefits.b3_desc": "Instant answers, at any hour. Patients feel cared for and valued.",
      "benefits.b4_title": "100% branded to your clinic",
      "benefits.b4_desc": "The chatbot speaks in your tone, uses your information, and visually integrates with your website.",

      // CTA
      "cta.title": "Want to see how it would work in your clinic?",
      "cta.subtitle": "Leave your email and we'll reach out to show you a personalized demo. No commitment, no pressure.",
      "cta.button": "I want a demo",
      "cta.note": "No spam. We'll only write to coordinate the demo.",

      // Footer
      "footer.rights": "All rights reserved.",
    },
    ca: {
      // Nav
      "nav.problem": "El problema",
      "nav.solution": "Solució",
      "nav.how": "Com funciona",
      "nav.cta": "Sol·licitar info",

      // Hero
      "hero.badge": "IA per a Clíniques Dentals",
      "hero.title": "La teva clínica perd pacients cada vegada que tanca la porta",
      "hero.subtitle": "Mentre el teu equip descansa, els pacients busquen respostes i no les troben. Molts no tornen a trucar. Amb ChatbotIA, la teva clínica atén les 24 hores — sense contractar ningú més.",
      "hero.cta_primary": "Vull saber-ne més",
      "hero.cta_secondary": "Veure demo en viu",
      "hero.stat1": "Atenció sense parar",
      "hero.stat2": "Temps de resposta",
      "hero.stat3": "Consultes resoltes",
      "hero.stat4": "Pacients perduts",

      // Problem
      "problem.title": "Cada hora que la teva clínica està tancada, perds diners",
      "problem.subtitle": "No és només un inconvenient — són diners que se'n van a la competència.",
      "problem.p1_title": "Són les 21:00. Un pacient busca dentista. El teu telèfon no sona.",
      "problem.p1_desc": "El 40% de les cerques de dentista passen fora de l'horari laboral. Aquell pacient que busca \"dentista a prop meu\" a les 9 del vespre no esperarà fins demà — trucarà al primer que li contesti. Si no ets tu, serà un altre.",
      "problem.p1_highlight": "Cada trucada perduda és una primera visita que mai no passarà.",
      "problem.p2_title": "La teva recepcionista passa 3 hores al dia contestant les mateixes preguntes.",
      "problem.p2_desc": "\"Quin horari teniu?\" \"Quant costa una neteja?\" \"Necessito cita prèvia?\" El teu personal més valuós està atrapat en un bucle de preguntes repetitives en lloc d'atendre els pacients que ja són a la clínica.",
      "problem.p2_highlight": "Estàs pagant un professional per fer la feina d'un FAQ.",
      "problem.p3_title": "El pacient que espera 2 hores per una resposta no torna.",
      "problem.p3_desc": "L'expectativa actual és la immediatesa. Si un pacient envia un WhatsApp o un email i no rep resposta en minuts, la seva percepció de la teva clínica baixa. La frustració es converteix en una ressenya negativa — o simplement desapareixen.",
      "problem.p3_highlight": "La lentitud en respondre et costa més que qualsevol tractament gratuït.",
      "problem.callout_title": "Quant et costa això al mes?",
      "problem.callout_desc": "Si perds només 5 pacients nous al mes per no estar disponible, i cada pacient val una mitjana de $800 en tractaments al llarg de l'any, són <strong>$4,000 al mes</strong> que se'n van a una altra clínica. Cada mes. Sense que ho notis.",
      "problem.callout_kicker": "Un chatbot amb IA et costa menys que una recepcionista — i treballa les 24 hores, els 365 dies de l'any.",

      // Solution
      "solution.title": "Un assistent que mai no dorm, mai no es cansa i mai no perd un pacient",
      "solution.subtitle": "ChatbotIA és un chatbot amb intel·ligència artificial avançada que conversa de forma natural, respon amb la informació de la teva clínica i atén els teus pacients quan tu no pots.",
      "solution.f1_title": "Respostes precises des de la teva documentació",
      "solution.f1_desc": "El chatbot aprèn dels teus FAQs, serveis, horaris, protocols i fitxes tècniques. Respon exactament com ho faries tu.",
      "solution.f2_title": "Cerca intel·ligent a internet",
      "solution.f2_desc": "Quan la informació no és als teus documents, busca a internet — excloent automàticament les webs de la competència.",
      "solution.f3_title": "S'instal·la directament a la teva web",
      "solution.f3_desc": "Un widget personalitzat que s'integra a la teva pàgina web en minuts. Especialment compatible amb WordPress.",
      "solution.f4_title": "Totes les converses registrades",
      "solution.f4_desc": "Cada conversa es guarda automàticament a Google Sheets perquè puguis revisar què pregunten els teus pacients.",
      "solution.f5_title": "També per WhatsApp",
      "solution.f5_desc": "El chatbot pot atendre pacients directament per WhatsApp — el canal que ja fan servir per comunicar-se amb tu.",
      "solution.f6_title": "Assistent de veu",
      "solution.f6_desc": "Per a pacients que prefereixen parlar, oferim un assistent de veu amb IA conversacional avançada.",

      // Demo
      "demo.title": "Així conversa amb els teus pacients",
      "demo.subtitle": "Converses naturals, respostes precises, disponible a qualsevol hora.",
      "demo.chat_header": "Clínica Dental Somrís — Assistent IA",
      "demo.chat_user1": "Hola, em fa mal un queixal des d'ahir. Podeu atendre'm demà?",
      "demo.chat_bot1": "Hola! Sento que tinguis dolor. Tenim disponibilitat demà a les 9:30 i a les 12:00 per a urgències. Quina t'escau millor? Si el dolor és molt intens, puc donar-te alguns consells mentrestant.",
      "demo.chat_bot2": "Perfecte, les 9:30. Digues-me el teu nom i un número de telèfon per reservar-te la cita.",
      "demo.chat_user2": "Maria García, 612 345 678.",
      "demo.chat_bot3": "Llest, Maria. T'he reservat per demà a les 9:30. Només porta la teva targeta sanitària i, si tens radiografies recents, porta-les també. Som al Carrer Major 15. Necessites alguna cosa més?",
      "demo.cta": "Provar el chatbot en viu",
      "demo.note": "Aquesta demo està activa en una empresa d'un altre sector. El chatbot per a la teva clínica es personalitzarà completament amb la teva informació i marca.",

      // How it works
      "how.title": "Funcionant en dues setmanes",
      "how.subtitle": "Nosaltres ens encarreguem de tot. Tu només ens envies la teva documentació.",
      "how.step1_title": "Entrenem el chatbot amb la teva informació",
      "how.step1_desc": "Ens envies els teus FAQs, serveis, horaris i protocols. Nosaltres entrenem la IA perquè respongui com ho faries tu. Sense esforç per la teva part.",
      "how.step2_title": "L'instal·lem a la teva web",
      "how.step2_desc": "Integrem el widget directament a la teva pàgina web, personalitzat amb la imatge de la teva clínica. Compatible amb WordPress i qualsevol web.",
      "how.step3_title": "Els teus pacients reben atenció 24/7",
      "how.step3_desc": "Des del primer dia, el chatbot atén consultes, resol dubtes i captura dades de pacients nous. Nosaltres monitoritzem i ajustem.",

      // Benefits
      "benefits.title": "El que canvia a la teva clínica des del dia 1",
      "benefits.b1_title": "Deixes de perdre pacients",
      "benefits.b1_desc": "Cada consulta fora d'horari que abans es perdia, ara es converteix en una cita agendada.",
      "benefits.b2_title": "El teu equip respira",
      "benefits.b2_desc": "Les preguntes repetitives desapareixen. La teva recepcionista es concentra en els pacients que són a la clínica.",
      "benefits.b3_title": "Millor experiència del pacient",
      "benefits.b3_desc": "Respostes immediates, a qualsevol hora. Els pacients se senten atesos i valorats.",
      "benefits.b4_title": "100% adaptat a la teva marca",
      "benefits.b4_desc": "El chatbot parla amb el teu to, utilitza la teva informació i s'integra visualment amb la teva web.",

      // CTA
      "cta.title": "Vols veure com funcionaria a la teva clínica?",
      "cta.subtitle": "Deixa'ns el teu email i et contactem per mostrar-te una demo personalitzada. Sense compromís, sense pressió.",
      "cta.button": "Vull una demo",
      "cta.note": "Sense spam. Només t'escriurem per coordinar la demo.",

      // Footer
      "footer.rights": "Tots els drets reservats.",
    },
  };

  // ==========================================
  // LANGUAGE TOGGLE
  // ==========================================
  function setLanguage(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        // Use innerHTML for keys that contain HTML tags (like <strong>)
        if (translations[lang][key].indexOf("<") !== -1) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key === "cta.placeholder") {
        var placeholders = { es: "tu@clinica.com", en: "you@clinic.com", ca: "tu@clinica.cat" };
        el.placeholder = placeholders[lang] || placeholders.es;
      }
    });

    // Update meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var descriptions = {
        es: "ChatbotIA \u2014 Chatbot inteligente para cl\u00ednicas dentales. Atenci\u00f3n al paciente 24/7, respuestas autom\u00e1ticas y gesti\u00f3n de consultas con IA.",
        en: "ChatbotIA \u2014 Intelligent chatbot for dental clinics. 24/7 patient support, automatic responses, and AI-powered query management.",
        ca: "ChatbotIA \u2014 Chatbot intel\u00b7ligent per a cl\u00edniques dentals. Atenci\u00f3 al pacient 24/7, respostes autom\u00e0tiques i gesti\u00f3 de consultes amb IA.",
      };
      metaDesc.setAttribute("content", descriptions[lang] || descriptions.es);
    }

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    try { localStorage.setItem("chatbotia-lang", lang); } catch (e) {}

    // Update URL with ?lang= parameter so it's shareable
    try {
      var url = new URL(window.location);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    } catch (e) {}
  }

  function initLanguage() {
    // URL parameter takes priority (?lang=es | ?lang=en | ?lang=ca)
    var urlLang = null;
    try {
      var params = new URLSearchParams(window.location.search);
      var p = params.get("lang");
      if (p && translations[p]) urlLang = p;
    } catch (e) {}

    var saved = null;
    try { saved = localStorage.getItem("chatbotia-lang"); } catch (e) {}
    setLanguage(urlLang || saved || "es");

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-lang-btn]");
        if (btn) setLanguage(btn.getAttribute("data-lang-btn"));
      });
    }
  }

  // ==========================================
  // MOBILE NAVIGATION
  // ==========================================
  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ==========================================
  // SMOOTH SCROLL
  // ==========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetId = this.getAttribute("href");
        if (targetId === "#") return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var navHeight = document.querySelector(".navbar").offsetHeight;
          var targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
          window.scrollTo({ top: targetPos, behavior: "smooth" });
        }
      });
    });
  }

  // ==========================================
  // NAVBAR SHADOW ON SCROLL
  // ==========================================
  function initNavScroll() {
    var navbar = document.querySelector(".navbar");
    if (!navbar) return;
    window.addEventListener("scroll", function () {
      navbar.style.boxShadow = window.scrollY > 10 ? "0 2px 12px rgba(0,0,0,0.08)" : "none";
    });
  }

  // ==========================================
  // EMAIL FORM (FormSubmit.co)
  // ==========================================
  function initEmailForm() {
    var form = document.getElementById("cta-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailInput = this.querySelector('input[type="email"]');
      var email = emailInput ? emailInput.value.trim() : "";

      if (!email || !isValidEmail(email)) {
        var lang = document.documentElement.getAttribute("data-lang") || "es";
        var alerts = { es: "Por favor, introduce un email válido.", en: "Please enter a valid email.", ca: "Si us plau, introdueix un email vàlid." };
        alert(alerts[lang] || alerts.es);
        return;
      }

      var btn = this.querySelector("button");
      var originalText = btn.textContent;
      btn.textContent = "...";
      btn.disabled = true;

      var lang = document.documentElement.getAttribute("data-lang") || "es";

      fetch("https://formsubmit.co/ajax/estebangcr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "ChatbotIA Dental - Nuevo lead!",
          _template: "table",
          source: "chatbotia-landing",
          language: lang,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var sent = { es: "Enviado \u2714", en: "Sent \u2714", ca: "Enviat \u2714" };
          btn.textContent = sent[lang] || sent.es;
          emailInput.value = "";
          setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
          }, 4000);
        })
        .catch(function () {
          var reg = { es: "Registrado \u2714", en: "Registered \u2714", ca: "Registrat \u2714" };
          btn.textContent = reg[lang] || reg.es;
          emailInput.value = "";
          setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
          }, 4000);
        });
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ==========================================
  // INIT
  // ==========================================
  document.addEventListener("DOMContentLoaded", function () {
    initLanguage();
    initNav();
    initSmoothScroll();
    initNavScroll();
    initEmailForm();
  });
})();
