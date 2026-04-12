/**
 * Chrisna Lungala - Personal Website
 * Apple-inspired interactions (performance-optimized)
 */

function debounce(fn, ms) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}

/** Set after DOM ready; syncs spotlight bottom padding to active description height. */
let scheduleSpotlightGapSync = () => {};

const TRANSLATIONS = {
  en: {
    skipLink: 'Skip to Content',
    navWork: 'Work',
    navAbout: 'About',
    navListen: 'Listen',
    navContact: 'Contact',
    listen: 'Listen',
    sheetClose: 'Close',
    listenAppleMusicAria: 'Listen on Apple Music (opens in new tab)',
    contactSubtitle:
      'For inquiries regarding collaborations, commissions, educational or speaker proposals, please feel free to reach out.',
    contactCtaBtn: 'Get in touch',
    contactOscarsAlt: 'Chrisna Lungala at the Academy Awards',
    contactSocialNavAria: 'Streaming and social links',
    contactAriaAppleMusic: 'Apple Music',
    contactAriaSpotify: 'Spotify',
    contactAriaInstagram: 'Instagram',
    contactAriaLinkedIn: 'LinkedIn',
    contactAriaIMDb: 'IMDb',
    copyright: 'Copyright © 2026 Chrisna Lungala. All rights reserved.',
    legal: 'Legal',
    privacy: 'Privacy',
    germany: 'Germany',
    about: 'About',
    aboutPara1: 'Based in Munich, Chrisna Lungala is a composer focused on the role of music in storytelling for film and visual media. His work has been recognized by the German Film Music Award for Young Talent in 2023, an honor that reflects his commitment to creating scores that support and enhance the emotional depth of a project.',
    aboutPara2: "Chrisna's path has been shaped by the opportunity to contribute to projects recognized by the Student Academy Awards® and Cannes, experiences that have allowed him to grow as a collaborator within the film community. His professional journey includes freelance work for studios such as Hans Zimmer's Bleeding Fingers Music, 2WEI, and Invisible Arts.",
    aboutPara3: 'Driven by a philosophy that music can be simultaneously simple and deeply complex, Chrisna focuses on creating immersive soundscapes—ranging from intimate dramas and documentaries to high-stakes thrillers and VR experiences.',
    videoTitle: 'Albedo Animation – ISS 25th Anniversary',
    play: 'Play',
    pause: 'Pause',
    replay: 'Replay',
    badgeNew: 'New',
    galleryTablistAria: 'Work categories',
    galleryCarouselAria: 'Project highlights carousel',
    galleryTab0: 'About Me',
    galleryTab1: 'Der Talentierte Mr. F',
    galleryTab2: 'ISTINA (Truth)',
    galleryTab3: 'Bleeding Fingers Music',
    galleryTab4: 'Catalyst',
    galleryTab5: 'Panel Speaker',
    galleryCapKicker0: 'Composer',
    galleryCapKicker1: 'Documentary',
    galleryCapKicker2: 'Drama',
    galleryCapKicker3: 'Production Music',
    galleryCapKicker4: 'Teaching',
    galleryCapKicker5: 'Industry Events',
    galleryCapTitle5: 'Panel Speaker',
    galleryAlt0: 'Chrisna Lungala — portrait',
    galleryAlt1: 'Der Talentierte Mr. F — documentary still',
    galleryAlt2: 'ISTINA (Truth) — short film still',
    galleryAlt3: 'Bleeding Fingers Music — production still',
    galleryAlt4: 'Catalyst Institute — Funkhaus Berlin campus',
    galleryAlt5: 'Chrisna Lungala — panel speaker at industry event',
    gallerySpotDesc0:
      "I\u2019m a composer based in Munich, and I write music for films and other visual media. I\u2019m self-taught, and I received the German Film Music Award for Young Talent in 2023, which meant a lot to me early on.\n\nOver the years I\u2019ve had the chance to work on projects that were recognised at the Student Academy Awards\u00ae and Cannes, and I\u2019ve done freelance work for studios like Hans Zimmer\u2019s Bleeding Fingers Music, 2WEI and Invisible Arts.\n\nI believe music can be simple and complex at the same time. For me, the most important part of the process is understanding how the story. That allows me to find a unique sound that supports it. Whether it\u2019s a quiet documentary, a drama or something more experimental, I want the music to feel like it belongs to the story.",
    gallerySpotDesc1:
      "Berlin film students Julius and Moritz spent over three years creating their animated film BUTTY, hoping it'd launch their careers. Their dreams were dashed when a film festival rejected their submission, citing disqualification. The film was already available online and credited to a U.S. filmmaker, forcing the students to withdraw.\n\nFurther investigation revealed that the American student Samuel Felinton stole their film, altered the title and credits, and gained recognition at festivals and on U.S. television. Hailed as a potential \"Walt Disney of the 21st century,\" his fraudulent rise leaves the students fighting for credit and questions his willingness to maintain his stolen spotlight.",
    gallerySpotDesc2:
      'A photojournalist is threatened by right-wing extremist groups in her Serbian home and flees to Germany with her daughter. But then she also experiences increasingly strong threats and attacks in her new home.\n\nISTINA (Truth) has won the Student Academy Award®, was nominated for a Student BAFTA and also won the Max Ophüls Award in 2023. The film was shot in two countries: Beograd, Serbia and Hamburg, Germany.',
    gallerySpotDesc3:
      "I also write music for Bleeding Fingers as a freelance composer.\n\nBleeding Fingers Music is a collective of composers co-founded by Hans Zimmer, Russell Emanuel and Steven Kofsky. The studio works across film, television and multimedia, and what I enjoy most about it is the collaborative spirit \u2014 everyone is encouraged to experiment, try new things and support each other\u2019s ideas.",
    gallerySpotDesc4:
      "I teach on the Music & Sound Design for Visual Media programme at the Catalyst Institute for Creative Arts and Technology, which is based at the Funkhaus Studios in Berlin. I help students build the skills and confidence to compose and design sound for film, games, installations and new media.\n\nThe programme is a hands-on BA that\u2019s all about learning by doing \u2014 working on real projects rather than just theory. Students combine traditional and experimental approaches, and I really enjoy seeing them find their own voice through the process.",
    awardFreelanceInstructor: 'Freelance Instructor',
    awardPanelSpeaker: 'Composer',
    gallerySpotDesc5:
      "Besides composing, I enjoy being part of the wider music-for-media community. I\u2019ve been invited to moderate and speak on panels at events like the annual GEMA General Assembly and the Filmmusiktage Sachsen-Anhalt in Halle, together with the International Academy of Media and Arts (IAMA).\n\nI\u2019ve also helped organise networking events with GEMA, 2WEI Music, Native Instruments and Orchestral Tools \u2014 the idea being to bring together composers, producers and technologists so we can share ideas and learn from each other.",
    catDocumentary: 'Documentary',
    catDrama: 'Drama',
    catAnimation: 'Animation',
    catThriller: 'Thriller',
    catShort: 'Short',
    catComingOfAge: 'Coming of Age',
    catVRGame: 'VR Game',
    catAdCampaign: 'Ad Campaign',
    awardGermanFilmmusicYoungTalent: 'German Filmmusic Award Winner - Young Talent (2023)',
    awardGrimme: 'Grimme Award® Winner (2026)',
    awardStudentOscarWinner: 'Student Academy Award® Winner (2023)',
    awardStudentOscarNominee: 'Student Academy Award® Nominee',
    awardFreelanceComposer: 'Freelance Composer',
    awardCannesWinner: 'Cannes Student Award® Winner',
    awardSonyFinalist: 'Sony Talent League Finalist',
    awardEmpty: '',
    footerBackHome: '← Back to Home',
    legalPageTitle: 'Legal',
    legalH2Tmg: 'Information according to § 5 TMG',
    legalAddress: 'Chrisna Lungala<br>Fingerkrautanger 17<br>80937 Munich',
    legalRepresented: 'Represented by: Chrisna Lungala<br>E-Mail: c.lungala@icloud.com',
    legalH2Disclaimer: 'Disclaimer',
    legalH3Content: 'Liability for Content',
    legalContentP: 'The content of our website was created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG under general laws. According to §§ 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored external information or to investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point at which a specific infringement becomes known. Upon notification of such violations, we will remove the content immediately.',
    legalH3Links: 'Liability for Links',
    legalLinksP: 'Our website contains links to external third-party websites, over whose content we have no control. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked sites is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. Permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. Upon notification of violations, we will remove such links immediately.',
    legalH3Copyright: 'Copyright',
    legalCopyrightP: 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires the prior written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such content immediately.',
    legalH3DataProtection: 'Data Protection',
    legalDataP1: 'The use of our website is generally possible without providing personal data. As far as personal data (e.g., name, address, or e-mail addresses) are collected on our pages, this is always done on a voluntary basis, as far as possible. These data will not be passed on to third parties without your express consent.',
    legalDataP2: 'We point out that data transmission over the Internet (e.g., communication by e-mail) can have security vulnerabilities. A complete protection of data against access by third parties is not possible.',
    legalDataP3: 'The use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam mails.',
    privacyPageTitle: 'Privacy',
    privacyLead: "Here's what happens with your data when you visit this site.",
    privacyQ1: 'What is being collected?',
    privacyA1: "Nothing. This site doesn't use analytics, tracking, cookies, or forms. You can browse freely without sharing any personal information.",
    privacyQ2: 'What happens when I load a page?',
    privacyA2Fonts: 'Typography uses the Inter font, served directly from this website (self-hosted font files). No font requests are sent to third parties for loading the typeface.',
    privacyH3Fonts: 'Fonts',
    privacyH3Links: 'Links to other sites',
    privacyA2Links: "You'll find links to Apple Music, Spotify, Instagram, IMDb, and others. Nothing is sent to those services until you click. Once you leave this site, their privacy policies apply.",
    privacyQ3: 'What happens if I click on the e-mail address to get in touch?',
    privacyA3: "The contact link opens your email app. Nothing is sent to our servers when you click it. If you choose to email, you're sharing your address and message voluntarily.",
    privacyQ4: 'Are there any third-party trackers?',
    privacyA4: "The company hosting this site may keep standard logs (IP address, time, pages visited) for security and maintenance. We don't control or routinely access those logs.",
    privacyQ5: "What can I do, if I don't like my data being processed?",
    privacyA5: "Under GDPR and similar laws, you can ask to see, correct, or delete any data held about you. Since we don't collect personal data here, there's nothing to access or delete. If you have questions, reach out at <a href=\"mailto:c.lungala@icloud.com\">c.lungala@icloud.com</a>.",
    privacyQ6: 'Continual Changes on the website',
    privacyA6: 'This page may change from time to time. The date below shows when it was last updated.',
    privacyLastUpdatedPrefix: 'Last updated: '
  },
  de: {
    skipLink: 'Zum Inhalt springen',
    navWork: 'Arbeit',
    navAbout: 'Über mich',
    navListen: 'Hörbeispiele',
    navContact: 'Kontakt',
    listen: 'Hörbeispiele',
    sheetClose: 'Schließen',
    listenAppleMusicAria: 'Bei Apple Music anhören (öffnet in neuem Tab)',
    contactSubtitle:
      'Für Anfragen zu Kooperationen, Aufträgen sowie Bildungs- oder Vortragsangeboten können Sie sich gern melden.',
    contactCtaBtn: 'Kontakt aufnehmen',
    contactOscarsAlt: 'Chrisna Lungala bei den Academy Awards',
    contactSocialNavAria: 'Streaming und soziale Netzwerke',
    contactAriaAppleMusic: 'Apple Music',
    contactAriaSpotify: 'Spotify',
    contactAriaInstagram: 'Instagram',
    contactAriaLinkedIn: 'LinkedIn',
    contactAriaIMDb: 'IMDb',
    copyright: 'Copyright © 2026 Chrisna Lungala. Alle Rechte vorbehalten.',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    germany: 'Deutschland',
    about: 'Über mich',
    aboutPara1: 'Chrisna Lungala ist ein in München ansässiger Komponist, der sich auf die Rolle der Musik im Storytelling für Film und visuelle Medien konzentriert. Seine Arbeit wurde mit dem Deutschen Filmmusikpreis für Nachwuchs ausgezeichnet – eine Anerkennung, die sein Engagement für Scores widerspiegelt, die die emotionale Tiefe eines Projekts unterstützen und verstärken.',
    aboutPara2: "Chrisnas Weg wurde durch die Möglichkeit geprägt, an Projekten mitzuwirken, die von den Student Academy Awards® und Cannes ausgezeichnet wurden – Erfahrungen, die ihn als Kollaborateur in der Filmcommunity wachsen ließen. Seine berufliche Laufbahn umfasst freiberufliche Arbeit für renommierte Studios wie Hans Zimmers Bleeding Fingers Music, 2WEI und Invisible Arts.",
    aboutPara3: 'Getrieben von der Überzeugung, dass Musik gleichzeitig einfach und tiefgreifend komplex sein kann, konzentriert sich Chrisna auf die Schaffung immersiver Klanglandschaften – von intimen Dramen und Dokumentarfilmen bis hin zu Thrillern und VR-Erlebnissen.',
    videoTitle: 'Albedo Animation – ISS 25. Jubiläum',
    play: 'Abspielen',
    pause: 'Pause',
    replay: 'Wiederholen',
    badgeNew: 'Neu',
    galleryTablistAria: 'Kategorien',
    galleryCarouselAria: 'Projekt-Highlights',
    galleryTab0: 'Über mich',
    galleryTab1: 'Der Talentierte Mr. F',
    galleryTab2: 'ISTINA (Wahrheit)',
    galleryTab3: 'Bleeding Fingers Music',
    galleryTab4: 'Catalyst',
    galleryTab5: 'Panelsprecher',
    galleryCapKicker0: 'Komponist',
    galleryCapKicker1: 'Dokumentarfilm',
    galleryCapKicker2: 'Drama',
    galleryCapKicker3: 'Produktionsmusik',
    galleryCapKicker4: 'Lehre',
    galleryCapKicker5: 'Branchenveranstaltungen',
    galleryCapTitle5: 'Panelsprecher',
    galleryAlt0: 'Chrisna Lungala — Porträt',
    galleryAlt1: 'Der Talentierte Mr. F — Standbild',
    galleryAlt2: 'ISTINA (Wahrheit) — Standbild',
    galleryAlt3: 'Bleeding Fingers Music — Standbild',
    galleryAlt4: 'Catalyst Institute — Funkhaus Berlin Campus',
    galleryAlt5: 'Chrisna Lungala — Panelsprecher bei Branchenveranstaltung',
    gallerySpotDesc0:
      'Ich bin Komponist und lebe in M\u00fcnchen, wo ich Musik f\u00fcr Filme und andere visuelle Medien schreibe. Ich bin Autodidakt und habe den Deutschen Filmmusikpreis f\u00fcr Nachwuchs erhalten, was mir gerade am Anfang viel bedeutet hat.\n\nIm Laufe der Jahre durfte ich an Projekten mitwirken, die bei den Student Academy Awards\u00ae und in Cannes anerkannt wurden, und ich habe als Freelancer f\u00fcr Studios wie Hans Zimmers Bleeding Fingers Music, 2WEI und Invisible Arts gearbeitet.\n\nIch glaube, dass Musik gleichzeitig einfach und komplex sein kann. F\u00fcr mich ist das Wichtigste, zu verstehen, wie der Regisseur seine Geschichte sieht. Das erm\u00f6glicht es mir, einen eigenen Klang zu finden, der seine Vision tr\u00e4gt. Ob ruhiger Dokumentarfilm, Drama oder etwas Experimentelleres \u2013 die Musik soll sich anf\u00fchlen, als geh\u00f6re sie zur Geschichte.',
    gallerySpotDesc1:
      'Die Berliner Filmstudenten Julius und Moritz verbrachten mehr als drei Jahre mit ihrem Animationsfilm BUTTY, in der Hoffnung, damit ihre Karriere zu starten. Ihre Träume zerplatzten, als ein Filmfestival ihre Einreichung ablehnte und Disqualifikation anführte: Der Film sei bereits online und einem US-amerikanischen Filmemacher zugeschrieben gewesen, sodass die Studenten zurückziehen mussten.\n\nWeitere Recherchen ergaben, dass der amerikanische Student Samuel Felinton ihren Film gestohlen, Titel und Credits geändert und Anerkennung auf Festivals und im US-Fernsehen erlangt hatte. Als potenzieller „Walt Disney des 21. Jahrhunderts“ gefeiert, wirft sein betrügerischer Aufstieg die Studenten in einen Kampf um Anerkennung auf und stellt die Frage, ob er seinen gestohlenen Ruhm zu halten bereit ist.',
    gallerySpotDesc2:
      'Eine Fotojournalistin wird in ihrer serbischen Heimat von rechtsradikalen Gruppen bedroht und flieht mit ihrer Tochter nach Deutschland. Doch auch in ihrer neuen Heimat erlebt sie zunehmend starke Drohungen und Angriffe.\n\nISTINA (Wahrheit) gewann den Student Academy Award®, war für einen Student BAFTA nominiert und erhielt 2023 auch den Max-Ophüls-Preis. Gedreht wurde in zwei Ländern: Belgrad, Serbien und Hamburg, Deutschland.',
    gallerySpotDesc3:
      'Ich schreibe auch als freiberuflicher Komponist Musik f\u00fcr Bleeding Fingers.\n\nBleeding Fingers Music ist ein Komponisten-Kollektiv, das von Hans Zimmer, Russell Emanuel und Steven Kofsky gegr\u00fcndet wurde. Das Studio arbeitet quer durch Film, Fernsehen und Multimedia, und was mir daran am meisten gef\u00e4llt, ist der gemeinschaftliche Geist \u2013 alle werden ermutigt zu experimentieren, Neues auszuprobieren und sich gegenseitig zu unterst\u00fctzen.',
    gallerySpotDesc4:
      'Ich unterrichte im Studiengang Music & Sound Design for Visual Media am Catalyst Institute for Creative Arts and Technology, das im Funkhaus in Berlin angesiedelt ist. Ich helfe Studierenden dabei, die F\u00e4higkeiten und das Selbstvertrauen aufzubauen, um Musik und Sound f\u00fcr Film, Games, Installationen und neue Medien zu gestalten.\n\nDas Programm ist ein praxisorientierter BA, bei dem es vor allem ums Machen geht \u2013 echte Projekte statt nur Theorie. Die Studierenden verbinden traditionelle und experimentelle Ans\u00e4tze, und es macht mir gro\u00dfe Freude zu sehen, wie sie dabei ihre eigene Stimme finden.',
    awardFreelanceInstructor: 'Freiberuflicher Dozent',
    awardPanelSpeaker: 'Komponist',
    gallerySpotDesc5:
      'Neben dem Komponieren bin ich gerne Teil der Musik-f\u00fcr-Medien-Community. Ich wurde eingeladen, Panels zu moderieren und Vortr\u00e4ge zu halten, unter anderem bei der j\u00e4hrlichen GEMA-Mitgliederversammlung und den Filmmusiktagen Sachsen-Anhalt in Halle, gemeinsam mit der International Academy of Media and Arts (IAMA).\n\nAu\u00dferdem habe ich Networking-Events mitorganisiert, zusammen mit der GEMA, 2WEI Music, Native Instruments und Orchestral Tools \u2013 die Idee ist, Komponisten, Produzenten und Technologen zusammenzubringen, damit wir Ideen austauschen und voneinander lernen k\u00f6nnen.',
    catDocumentary: 'Dokumentarfilm',
    catDrama: 'Drama',
    catAnimation: 'Animation',
    catThriller: 'Thriller',
    catShort: 'Kurzfilm',
    catComingOfAge: 'Coming-of-Age',
    catVRGame: 'VR-Spiel',
    catAdCampaign: 'Werbekampagne',
    awardGermanFilmmusicYoungTalent: 'Deutscher Filmmusikpreis - Nachwuchs (2023)',
    awardGrimme: 'Grimme-Preis® Gewinner (2026)',
    awardStudentOscarWinner: 'Student Academy Award® Gewinner (2023)',
    awardStudentOscarNominee: 'Student Academy Award® Nominierung',
    awardFreelanceComposer: 'Freiberuflicher Komponist',
    awardCannesWinner: 'Cannes Student Award® Gewinner',
    awardSonyFinalist: 'Sony Talent League Finalist',
    awardEmpty: '',
    footerBackHome: '← Zur Startseite',
    legalPageTitle: 'Impressum',
    legalH2Tmg: 'Angaben gemäß § 5 TMG',
    legalAddress: 'Chrisna Lungala<br>Fingerkrautanger 17<br>80937 München',
    legalRepresented: 'Vertreten durch: Chrisna Lungala<br>E-Mail: c.lungala@icloud.com',
    legalH2Disclaimer: 'Haftungsausschluss',
    legalH3Content: 'Haftung für Inhalte',
    legalContentP: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    legalH3Links: 'Haftung für Links',
    legalLinksP: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    legalH3Copyright: 'Urheberrecht',
    legalCopyrightP: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    legalH3DataProtection: 'Datenschutz',
    legalDataP1: 'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
    legalDataP2: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
    legalDataP3: 'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.',
    privacyPageTitle: 'Datenschutz',
    privacyLead: 'Hier erfahren Sie, was mit Ihren Daten passiert, wenn Sie diese Seite besuchen.',
    privacyQ1: 'Was wird gesammelt?',
    privacyA1: 'Nichts. Diese Seite verwendet keine Analytics, Tracking, Cookies oder Formulare. Sie können frei surfen, ohne persönliche Daten preiszugeben.',
    privacyQ2: 'Was passiert beim Laden einer Seite?',
    privacyA2Fonts: 'Für die Typografie wird die Schrift Inter verwendet; die Dateien werden direkt von dieser Website ausgeliefert (selbst gehostet). Es werden keine Schriftanfragen an Dritte gesendet.',
    privacyH3Fonts: 'Schriften',
    privacyH3Links: 'Links zu anderen Seiten',
    privacyA2Links: 'Sie finden Links zu Apple Music, Spotify, Instagram, IMDb und anderen. Es wird nichts an diese Dienste gesendet, bis Sie klicken. Sobald Sie diese Seite verlassen, gelten deren Datenschutzrichtlinien.',
    privacyQ3: 'Was passiert, wenn ich auf die E-Mail-Adresse klicke, um Kontakt aufzunehmen?',
    privacyA3: 'Der Kontakt-Link öffnet Ihre E-Mail-App. Beim Klicken wird nichts an unsere Server gesendet. Wenn Sie eine E-Mail schreiben, teilen Sie Ihre Adresse und Nachricht freiwillig mit.',
    privacyQ4: 'Gibt es Drittanbieter-Tracker?',
    privacyA4: 'Der Hoster dieser Seite kann Standard-Logs (IP-Adresse, Zeit, besuchte Seiten) für Sicherheit und Wartung führen. Wir kontrollieren oder greifen auf diese Logs nicht routinemäßig zu.',
    privacyQ5: 'Was kann ich tun, wenn ich nicht möchte, dass meine Daten verarbeitet werden?',
    privacyA5: 'Nach DSGVO und ähnlichen Gesetzen können Sie verlangen, Daten einzusehen, zu korrigieren oder zu löschen. Da wir hier keine personenbezogenen Daten sammeln, gibt es nichts einzusehen oder zu löschen. Bei Fragen wenden Sie sich an <a href="mailto:c.lungala@icloud.com">c.lungala@icloud.com</a>.',
    privacyQ6: 'Änderungen an der Website',
    privacyA6: 'Diese Seite kann sich von Zeit zu Zeit ändern. Das Datum unten zeigt, wann sie zuletzt aktualisiert wurde.',
    privacyLastUpdatedPrefix: 'Zuletzt aktualisiert: '
  },
  fr: {
    skipLink: 'Aller au contenu',
    navWork: 'Travaux',
    navAbout: 'À propos',
    navListen: 'Écouter',
    navContact: 'Contact',
    listen: 'Écouter',
    sheetClose: 'Fermer',
    listenAppleMusicAria: 'Écouter sur Apple Music (ouvre dans un nouvel onglet)',
    contactSubtitle:
      "Pour toute demande concernant des collaborations, des commandes, des projets pédagogiques ou des interventions en tant qu'intervenant, n'hésitez pas à le contacter.",
    contactCtaBtn: 'Me contacter',
    contactOscarsAlt: 'Chrisna Lungala aux Academy Awards',
    contactSocialNavAria: 'Streaming et réseaux sociaux',
    contactAriaAppleMusic: 'Apple Music',
    contactAriaSpotify: 'Spotify',
    contactAriaInstagram: 'Instagram',
    contactAriaLinkedIn: 'LinkedIn',
    contactAriaIMDb: 'IMDb',
    copyright: 'Copyright © 2026 Chrisna Lungala. Tous droits réservés.',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    germany: 'Allemagne',
    about: 'À propos',
    aboutPara1: 'Basé à Munich, Chrisna Lungala est un compositeur qui se concentre sur le rôle de la musique dans la narration pour le cinéma et les médias visuels. Son travail a été reconnu par le Prix allemand de la musique de film pour les nouveaux talents, un honneur qui reflète son engagement à créer des partitions qui soutiennent et renforcent la profondeur émotionnelle d\'un projet.',
    aboutPara2: "Le parcours de Chrisna a été façonné par l'opportunité de contribuer à des projets reconnus par les Student Academy Awards® et Cannes, des expériences qui lui ont permis de grandir en tant que collaborateur au sein de la communauté du cinéma. Son parcours professionnel comprend des travaux en freelance pour des studios tels que Bleeding Fingers Music de Hans Zimmer, 2WEI et Invisible Arts.",
    aboutPara3: 'Animé par une philosophie selon laquelle la musique peut être à la fois simple et profondément complexe, Chrisna se concentre sur la création d\'ambiances sonores immersives – des drames intimes et documentaires aux thrillers à haute tension et expériences en réalité virtuelle.',
    videoTitle: 'Albedo Animation – 25e anniversaire de l\'ISS',
    play: 'Play',
    pause: 'Pause',
    replay: 'Rejouer',
    badgeNew: 'Nouveau',
    galleryTablistAria: 'Catégories',
    galleryCarouselAria: 'Projets en vedette',
    galleryTab0: 'À propos de moi',
    galleryTab1: 'Der Talentierte Mr. F',
    galleryTab2: 'ISTINA (Vérité)',
    galleryTab3: 'Bleeding Fingers Music',
    galleryTab4: 'Catalyst',
    galleryTab5: 'Intervenant',
    galleryCapKicker0: 'Compositeur',
    galleryCapKicker1: 'Documentaire',
    galleryCapKicker2: 'Drame',
    galleryCapKicker3: 'Musique de production',
    galleryCapKicker4: 'Enseignement',
    galleryCapKicker5: 'Événements professionnels',
    galleryCapTitle5: 'Intervenant',
    galleryAlt0: 'Chrisna Lungala — portrait',
    galleryAlt1: 'Der Talentierte Mr. F — image',
    galleryAlt2: 'ISTINA (Vérité) — image',
    galleryAlt3: 'Bleeding Fingers Music — image',
    galleryAlt4: 'Catalyst Institute — campus Funkhaus Berlin',
    galleryAlt5: 'Chrisna Lungala — intervenant lors d\'un événement professionnel',
    gallerySpotDesc0:
      "Je suis compositeur, bas\u00e9 \u00e0 Munich, et j\u2019\u00e9cris de la musique pour des films et d\u2019autres m\u00e9dias visuels. Je suis autodidacte et j\u2019ai re\u00e7u le Prix allemand de la musique de film pour les nouveaux talents, ce qui a beaucoup compt\u00e9 pour moi \u00e0 mes d\u00e9buts.\n\nAu fil des ann\u00e9es, j\u2019ai eu la chance de travailler sur des projets reconnus aux Student Academy Awards\u00ae et \u00e0 Cannes, et j\u2019ai collabor\u00e9 en freelance avec des studios comme Bleeding Fingers Music de Hans Zimmer, 2WEI et Invisible Arts.\n\nJe crois que la musique peut \u00eatre \u00e0 la fois simple et complexe. Pour moi, l\u2019essentiel est de comprendre comment le r\u00e9alisateur voit son histoire. Cela me permet de trouver un son unique qui porte sa vision. Qu\u2019il s\u2019agisse d\u2019un documentaire intimiste, d\u2019un drame ou de quelque chose de plus exp\u00e9rimental, je veux que la musique semble appartenir \u00e0 l\u2019histoire.",
    gallerySpotDesc1:
      'Les étudiants en cinéma berlinois Julius et Moritz ont passé plus de trois ans à créer leur film d\'animation BUTTY, en espérant lancer leur carrière. Leurs rêves se sont brisés lorsqu\'un festival de films a refusé leur candidature, invoquant une disqualification : le film était déjà en ligne et crédité à un cinéaste américain, obligeant les étudiants à se retirer.\n\nDes investigations approfondies ont révélé que l\'étudiant américain Samuel Felinton avait volé leur film, modifié le titre et le générique, et obtenu une reconnaissance dans les festivals et à la télévision américaine. Porté comme un potentiel « Walt Disney du XXIe siècle », son ascension frauduleuse laisse les étudiants se battre pour la reconnaissance et interroge sa volonté de conserver sa gloire volée.',
    gallerySpotDesc2:
      'Une photojournaliste est menacée par des groupes d\'extrême droite dans son pays natal serbe et s\'enfuit en Allemagne avec sa fille. Mais elle y subit aussi des menaces et des attaques de plus en plus graves.\n\nISTINA (Vérité) a remporté le Student Academy Award®, a été nommé pour un Student BAFTA et a également reçu le prix Max Ophüls en 2023. Le film a été tourné dans deux pays : Belgrade, Serbie et Hambourg, Allemagne.',
    gallerySpotDesc3:
      "J\u2019\u00e9cris \u00e9galement de la musique pour Bleeding Fingers en tant que compositeur freelance.\n\nBleeding Fingers Music est un collectif de compositeurs cofond\u00e9 par Hans Zimmer, Russell Emanuel et Steven Kofsky. Le studio travaille dans le cin\u00e9ma, la t\u00e9l\u00e9vision et le multim\u00e9dia, et ce que j\u2019appr\u00e9cie le plus, c\u2019est l\u2019esprit collaboratif \u2014 tout le monde est encourag\u00e9 \u00e0 exp\u00e9rimenter, \u00e0 essayer de nouvelles choses et \u00e0 soutenir les id\u00e9es des autres.",
    gallerySpotDesc4:
      "J\u2019enseigne dans le programme Music & Sound Design for Visual Media au Catalyst Institute for Creative Arts and Technology, situ\u00e9 au Funkhaus \u00e0 Berlin. J\u2019aide les \u00e9tudiants \u00e0 d\u00e9velopper les comp\u00e9tences et la confiance n\u00e9cessaires pour composer et concevoir du son pour le cin\u00e9ma, les jeux vid\u00e9o, les installations et les nouveaux m\u00e9dias.\n\nLe programme est un BA concret, centr\u00e9 sur la pratique \u2014 de vrais projets plut\u00f4t que de la th\u00e9orie seule. Les \u00e9tudiants combinent approches traditionnelles et exp\u00e9rimentales, et j\u2019aime beaucoup les voir trouver leur propre voix au fil du processus.",
    awardFreelanceInstructor: 'Enseignant indépendant',
    awardPanelSpeaker: 'Compositeur',
    gallerySpotDesc5:
      "En dehors de la composition, j\u2019aime faire partie de la communaut\u00e9 de la musique pour les m\u00e9dias. J\u2019ai \u00e9t\u00e9 invit\u00e9 \u00e0 mod\u00e9rer et \u00e0 intervenir lors de panels, notamment \u00e0 l\u2019Assembl\u00e9e g\u00e9n\u00e9rale annuelle de la GEMA et aux Filmmusiktage Sachsen-Anhalt \u00e0 Halle, avec l\u2019International Academy of Media and Arts (IAMA).\n\nJ\u2019ai aussi aid\u00e9 \u00e0 organiser des \u00e9v\u00e9nements de networking avec la GEMA, 2WEI Music, Native Instruments et Orchestral Tools \u2014 l\u2019id\u00e9e \u00e9tant de r\u00e9unir compositeurs, producteurs et technologues pour partager des id\u00e9es et apprendre les uns des autres.",
    catDocumentary: 'Documentaire',
    catDrama: 'Drame',
    catAnimation: 'Animation',
    catThriller: 'Thriller',
    catShort: 'Court métrage',
    catComingOfAge: 'Coming of Age',
    catVRGame: 'Jeu VR',
    catAdCampaign: 'Campagne publicitaire',
    awardGermanFilmmusicYoungTalent: 'Lauréat du prix allemand de la musique de film - nouveaux talents (2023)',
    awardGrimme: 'Gagnant du Grimme Award® (2026)',
    awardStudentOscarWinner: 'Lauréat du Student Academy Award® (2023)',
    awardStudentOscarNominee: 'Nominé au Student Academy Award®',
    awardFreelanceComposer: 'Compositeur freelance',
    awardCannesWinner: 'Lauréat du Cannes Student Award®',
    awardSonyFinalist: 'Finaliste Sony Talent League',
    awardEmpty: '',
    footerBackHome: '← Retour à l\'accueil',
    legalPageTitle: 'Mentions légales',
    legalH2Tmg: 'Informations conformes au § 5 TMG',
    legalAddress: 'Chrisna Lungala<br>Fingerkrautanger 17<br>80937 Munich',
    legalRepresented: 'Représenté par : Chrisna Lungala<br>E-mail : c.lungala@icloud.com',
    legalH2Disclaimer: 'Avertissement',
    legalH3Content: 'Responsabilité du contenu',
    legalContentP: 'Le contenu de notre site a été créé avec le plus grand soin. Cependant, nous ne pouvons pas garantir l\'exactitude, l\'exhaustivité ou l\'actualité du contenu. En tant que fournisseur de services, nous sommes responsables de notre propre contenu sur ces pages conformément au § 7 Abs.1 TMG et aux lois générales. Selon les §§ 8 à 10 TMG, nous ne sommes pas tenus en tant que fournisseur de services de surveiller les informations transmises ou stockées par des tiers ou d\'enquêter sur des circonstances indiquant une activité illégale. Les obligations de suppression ou de blocage de l\'utilisation des informations conformément aux lois générales restent inchangées. Cependant, la responsabilité à cet égard n\'est possible qu\'à partir du moment où une violation spécifique est connue. Dès notification de telles violations, nous supprimerons le contenu immédiatement.',
    legalH3Links: 'Responsabilité des liens',
    legalLinksP: 'Notre site contient des liens vers des sites web tiers externes dont nous ne contrôlons pas le contenu. Par conséquent, nous ne pouvons assumer aucune responsabilité pour ces contenus externes. Le fournisseur ou l\'opérateur respectif des sites liés est toujours responsable du contenu des pages liées. Les pages liées ont été vérifiées pour d\'éventuelles violations juridiques au moment du lien. Un contenu illégal n\'était pas reconnaissable au moment du lien. Un contrôle permanent du contenu des pages liées n\'est pas raisonnable sans preuve concrète d\'une violation juridique. Dès notification de violations, nous supprimerons ces liens immédiatement.',
    legalH3Copyright: 'Droits d\'auteur',
    legalCopyrightP: 'Le contenu et les œuvres créés par les opérateurs du site sur ces pages sont soumis au droit d\'auteur allemand. La reproduction, la transformation, la distribution ou toute forme de commercialisation au-delà du cadre du droit d\'auteur nécessite le consentement écrit préalable de l\'auteur ou du créateur respectif. Les téléchargements et copies de ce site ne sont autorisés qu\'à des fins privées et non commerciales. Dans la mesure où le contenu de ce site n\'a pas été créé par l\'opérateur, les droits d\'auteur des tiers sont respectés. Le contenu tiers est marqué comme tel. Si vous deviez néanmoins prendre connaissance d\'une violation du droit d\'auteur, veuillez nous en informer. Dès notification de violations, nous supprimerons ce contenu immédiatement.',
    legalH3DataProtection: 'Protection des données',
    legalDataP1: 'L\'utilisation de notre site web est généralement possible sans fournir de données personnelles. Dans la mesure où des données personnelles (par ex. nom, adresse ou adresses e-mail) sont collectées sur nos pages, cela se fait toujours sur une base volontaire, dans la mesure du possible. Ces données ne seront pas transmises à des tiers sans votre consentement explicite.',
    legalDataP2: 'Nous attirons votre attention sur le fait que la transmission de données sur Internet (par ex. communication par e-mail) peut présenter des failles de sécurité. Une protection complète des données contre l\'accès par des tiers n\'est pas possible.',
    legalDataP3: 'L\'utilisation des coordonnées publiées dans le cadre de l\'obligation d\'impressum par des tiers pour l\'envoi de publicité et de matériel d\'information non sollicités est expressément interdite. Les opérateurs des pages se réservent expressément le droit d\'engager des poursuites judiciaires en cas d\'envoi non sollicité d\'informations publicitaires, telles que les spams.',
    privacyPageTitle: 'Confidentialité',
    privacyLead: 'Voici ce qui se passe avec vos données lorsque vous visitez ce site.',
    privacyQ1: 'Qu\'est-ce qui est collecté ?',
    privacyA1: 'Rien. Ce site n\'utilise pas d\'analytics, de suivi, de cookies ou de formulaires. Vous pouvez naviguer librement sans partager d\'informations personnelles.',
    privacyQ2: 'Que se passe-t-il lorsque je charge une page ?',
    privacyA2Fonts: 'La typographie utilise la police Inter, servie directement depuis ce site (fichiers auto-hébergés). Aucune requête de police n’est envoyée à des tiers pour charger la police.',
    privacyH3Fonts: 'Polices',
    privacyH3Links: 'Liens vers d\'autres sites',
    privacyA2Links: 'Vous trouverez des liens vers Apple Music, Spotify, Instagram, IMDb et d\'autres. Rien n\'est envoyé à ces services jusqu\'à ce que vous cliquiez. Une fois que vous quittez ce site, leurs politiques de confidentialité s\'appliquent.',
    privacyQ3: 'Que se passe-t-il si je clique sur l\'adresse e-mail pour prendre contact ?',
    privacyA3: 'Le lien de contact ouvre votre application de messagerie. Rien n\'est envoyé à nos serveurs lorsque vous cliquez. Si vous choisissez d\'envoyer un e-mail, vous partagez votre adresse et votre message volontairement.',
    privacyQ4: 'Y a-t-il des traceurs tiers ?',
    privacyA4: 'L\'entreprise qui héberge ce site peut conserver des journaux standards (adresse IP, heure, pages visitées) pour la sécurité et la maintenance. Nous ne contrôlons pas ces journaux ni n\'y accédons régulièrement.',
    privacyQ5: 'Que puis-je faire si je n\'aime pas que mes données soient traitées ?',
    privacyA5: 'Conformément au RGPD et aux lois similaires, vous pouvez demander à consulter, corriger ou supprimer des données vous concernant. Comme nous ne collectons pas de données personnelles ici, il n\'y a rien à consulter ou supprimer. Si vous avez des questions, contactez-nous à <a href="mailto:c.lungala@icloud.com">c.lungala@icloud.com</a>.',
    privacyQ6: 'Modifications continues du site',
    privacyA6: 'Cette page peut changer de temps en temps. La date ci-dessous indique quand elle a été mise à jour pour la dernière fois.',
    privacyLastUpdatedPrefix: 'Dernière mise à jour : '
  }
};

const LANG_STORAGE_KEY = 'chrisna-lang';
const LANG_ORDER = ['en', 'de', 'fr'];

function getStoredLang() {
  try {
    let stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'es') {
      localStorage.setItem(LANG_STORAGE_KEY, 'en');
      stored = 'en';
    }
    return LANG_ORDER.includes(stored) ? stored : 'en';
  } catch {
    return 'en';
  }
}

function setStoredLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (_) {}
}

let currentLang = getStoredLang();

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
}

/** Privacy page: month + year from current locale (updates when language changes). */
function formatPrivacyLastUpdatedDate() {
  const el = document.getElementById('privacy-last-updated-date');
  if (!el) return;
  const now = new Date();
  const localeMap = { en: 'en-US', de: 'de-DE', fr: 'fr-FR' };
  const locale = localeMap[currentLang] || 'en-US';
  el.textContent = now.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  el.setAttribute('datetime', `${y}-${m}`);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined && val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val !== undefined && val !== null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    const val = t(key);
    if (val !== undefined && val !== null) el.setAttribute('aria-label', val);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    const val = t(key);
    if (val !== undefined && val !== null) el.setAttribute('alt', val);
  });
  const heroEn = document.querySelector('.hero-line-en');
  const heroDe = document.querySelector('.hero-line-de');
  const heroFr = document.querySelector('.hero-line-fr');
  if (heroEn) heroEn.style.display = currentLang === 'en' ? '' : 'none';
  if (heroDe) heroDe.style.display = currentLang === 'de' ? '' : 'none';
  if (heroFr) heroFr.style.display = currentLang === 'fr' ? '' : 'none';
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const labels = { en: 'EN', de: 'DE', fr: 'FR' };
    const nextLang = LANG_ORDER[(LANG_ORDER.indexOf(currentLang) + 1) % LANG_ORDER.length];
    const langNames = { en: 'English', de: 'German', fr: 'French' };
    langToggle.textContent = labels[currentLang] ?? 'EN';
    langToggle.setAttribute('aria-label', `Switch to ${langNames[nextLang] ?? nextLang}`);
  }
  formatPrivacyLastUpdatedDate();
  scheduleSpotlightGapSync();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();

  const heroVideoEl = document.querySelector('.hero-video video');
  const skipHeavyHeroVideo =
    heroVideoEl &&
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (typeof navigator !== 'undefined' && navigator.connection && navigator.connection.saveData));
  if (skipHeavyHeroVideo) {
    heroVideoEl.preload = 'none';
    heroVideoEl.pause();
  } else if (heroVideoEl) {
    // Defer ~8MB hero clip until after first paint / idle so text & layout win the network/CPU budget
    const startHeroVideo = () => {
      heroVideoEl.preload = 'auto';
      heroVideoEl.load();
      heroVideoEl.play().catch(() => {});
    };
    requestAnimationFrame(() => {
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(startHeroVideo, { timeout: 2200 });
      } else {
        setTimeout(startHeroVideo, 180);
      }
    });
  }

  // Throttle via requestAnimationFrame for smooth, efficient scroll handling
  let scrollTicking = false;

  const nav = document.getElementById('nav');
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  };

  const onScroll = () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleScroll();
        updateHeroScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Hero video opacity and slide crossfade based on scroll (cached height for smooth scroll)
  const hero = document.getElementById('hero');
  const heroVideo = document.getElementById('heroVideo');
  const heroSlides = document.querySelectorAll('.hero-slide');
  let heroHeightCache = null;
  const getHeroHeight = () => {
    if (heroHeightCache == null && hero) heroHeightCache = hero.offsetHeight;
    return heroHeightCache ?? (hero ? hero.offsetHeight : 0);
  };
  window.addEventListener('resize', debounce(() => { heroHeightCache = null; }, 150), { passive: true });

  const updateHeroScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = getHeroHeight() || window.innerHeight;

    // Video fades out as we scroll through the hero
    const videoOpacity = Math.max(0, 1 - scrollY / heroHeight);
    if (heroVideo) heroVideo.style.opacity = videoOpacity;

    // Slide crossfade: each slide fades in when entering, fades out when next enters
    if (heroSlides.length) {
      const slideCount = heroSlides.length;
      const zoneHeight = heroHeight / slideCount;
      const fadeDistance = zoneHeight * 0.5; // overlap for smooth crossfade

      heroSlides.forEach((slide, i) => {
        // Slide i peaks at scroll position i*zoneHeight (first slide at top)
        const slideCenter = i * zoneHeight;
        const distanceFromCenter = Math.abs(scrollY - slideCenter);
        const opacity = Math.max(0, Math.min(1, 1 - distanceFromCenter / fadeDistance));

        slide.style.opacity = opacity;
        slide.classList.toggle('active', opacity > 0.1);
      });
    }
  };

  updateHeroScroll();

  // Mobile menu: hamburger + overlay (see styles @media max-width: 734px)
  const navToggle = document.querySelector('.nav-toggle');
  const navBackdrop = document.querySelector('[data-nav-backdrop]');

  const closeNavMenu = () => {
    if (!nav?.classList.contains('open')) return;
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open menu');
    const sheet = document.getElementById('contact-sheet');
    if (!sheet?.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('open');
      if (isOpen) nav.classList.add('nav-has-opened');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.nav-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        closeNavMenu();
      });
    });
  }

  navBackdrop?.addEventListener('click', closeNavMenu);

  window.addEventListener(
    'resize',
    debounce(() => {
      if (window.innerWidth > 734) closeNavMenu();
    }, 150),
    { passive: true }
  );

  // Contact sheet (bottom sheet)
  const contactSheet = document.getElementById('contact-sheet');
  const contactTrigger = document.getElementById('contact-trigger');
  const contactSheetClose = contactSheet?.querySelector('.sheet-close');
  const contactSheetBackdrop = contactSheet?.querySelector('.sheet-backdrop');
  const contactGalleryLink = document.getElementById('contact-gallery-link');
  let contactSheetPreviousFocus = null;

  const openContactSheet = () => {
    if (!contactSheet) return;
    contactSheetPreviousFocus = document.activeElement;
    nav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open menu');
    contactSheet.classList.add('open');
    contactSheet.setAttribute('aria-hidden', 'false');
    const oscarsImg = contactSheet.querySelector('.contact-sheet-media img');
    if (oscarsImg && oscarsImg.loading === 'lazy') {
      oscarsImg.loading = 'eager';
    }
    contactTrigger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#contact`);
    contactSheetClose?.focus();
  };

  const closeContactSheet = () => {
    if (!contactSheet) return;
    contactSheet.classList.remove('open');
    contactSheet.setAttribute('aria-hidden', 'true');
    contactTrigger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (window.location.hash === '#contact') {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    const prev = contactSheetPreviousFocus;
    contactSheetPreviousFocus = null;
    if (prev && prev instanceof HTMLElement && typeof prev.focus === 'function') {
      try {
        prev.focus();
      } catch (_) {
        contactTrigger?.focus();
      }
    } else {
      contactTrigger?.focus();
    }
  };

  const handleContactOpen = (e) => {
    e.preventDefault();
    openContactSheet();
  };

  contactTrigger?.addEventListener('click', handleContactOpen);
  contactGalleryLink?.addEventListener('click', handleContactOpen);
  document.getElementById('hero-contact-cta')?.addEventListener('click', handleContactOpen);
  document.getElementById('listen-contact-cta')?.addEventListener('click', handleContactOpen);

  contactSheetClose?.addEventListener('click', closeContactSheet);
  contactSheetBackdrop?.addEventListener('click', closeContactSheet);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (contactSheet?.classList.contains('open')) closeContactSheet();
    else closeNavMenu();
  });

  if (window.location.hash === '#contact') {
    window.setTimeout(() => openContactSheet(), 0);
  }

  // Language toggle (cycles EN → DE → FR)
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const idx = LANG_ORDER.indexOf(currentLang);
      currentLang = LANG_ORDER[(idx + 1) % LANG_ORDER.length];
      setStoredLang(currentLang);
      applyTranslations();
    });
  }

  // Smooth reveal on scroll (subtle fade-in for sections) — skip when reduced motion
  const prefersReducedMotionReveal = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll('.section');
  if (prefersReducedMotionReveal) {
    sections.forEach((section) => {
      section.style.opacity = '1';
      section.style.transform = 'none';
    });
  } else {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }

  // Accordion (privacy page - Apple Wallet Q&A style)
  document.querySelectorAll('.accordion').forEach((accordion) => {
    accordion.querySelectorAll('.accordion-item').forEach((item) => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const expanded = header?.getAttribute('aria-expanded') === 'true';
      item.dataset.expanded = expanded ? 'true' : 'false';
      header?.addEventListener('click', () => {
        const isExpanded = item.dataset.expanded === 'true';
        item.dataset.expanded = isExpanded ? 'false' : 'true';
        header.setAttribute('aria-expanded', !isExpanded);
      });
    });
  });

  // Gallery: infinite auto-scroll via GPU translate3d on the track (all viewports). Pointer drag,
  // inertia, and horizontal wheel pan everywhere (touch-friendly on desktop); avoids scrollLeft jank.
  const galleryRows = document.querySelectorAll('.gallery-row');
  /* px per frame per row — second row slower than the first (25% faster than 0.25 / 0.13 baseline) */
  const AUTOSCROLL_SPEEDS = [0.3125, 0.1625];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const galleryNativeScrollMq = window.matchMedia('(max-width: 900px)');
  let autoscrollRafId = 0;
  const rowOffsets = new Map();
  const rowHalfWidthCache = new Map();
  /** Active pointer drag for transform-based pan (pointerId → state). */
  const galleryPointerDragById = new Map();
  /** Pauses autoscroll while any listed pointer is active on a gallery row. */
  const galleryTouchPointerIds = new Set();
  /** Per-row inertial scroll state (row → { v px/ms, lastT }). */
  const galleryInertiaByRow = new Map();
  let galleryInertiaRafId = 0;
  /** Set after touch/inertia ends; real impl assigned when autoscroll is active (reduced motion = no-op). */
  window._scheduleGalleryTouchResume = () => {};
  const getTrack = (row) => row?.querySelector('.gallery-row-track');
  const normalizeOffset = (n, halfWidth) => {
    if (!halfWidth) return 0;
    let x = n;
    while (x >= halfWidth) x -= halfWidth;
    while (x < 0) x += halfWidth;
    return x;
  };
  const getOffset = (row) => rowOffsets.get(row) ?? 0;
  /** GPU path for all viewports — avoids scrollLeft jank on mobile Safari during autoscroll. */
  const setOffset = (row, val) => {
    const track = getTrack(row);
    if (!track) return;
    rowOffsets.set(row, val);
    track.style.transform = `translate3d(${-val}px, 0, 0)`;
  };
  const getHalfWidth = (row) => {
    let h = rowHalfWidthCache.get(row);
    if (h == null) {
      const track = getTrack(row);
      h = track ? track.offsetWidth / 2 : 0;
      rowHalfWidthCache.set(row, h);
    }
    return h;
  };
  window.addEventListener('resize', debounce(() => rowHalfWidthCache.clear(), 150), { passive: true });

  const getScrollStep = (row) => {
    const track = getTrack(row);
    const item = track?.querySelector('.gallery-item');
    if (!item || !track) return 416;
    const itemWidth = item.offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap) || 16;
    return itemWidth + gap;
  };

  const galleryContainer = document.querySelector('.gallery-container');
  const setGalleryFocus = (item) => {
    const allItems = galleryContainer?.querySelectorAll('.gallery-item') ?? [];
    allItems.forEach((el) => el.classList.remove('focused'));
    if (item) {
      item.classList.add('focused');
      galleryContainer?.classList.add('hovering');
    } else {
      galleryContainer?.classList.remove('hovering');
    }
  };

  const setupRow = (row) => {
    const track = getTrack(row);
    if (!track) return;
    const items = track.querySelectorAll('.gallery-item');
    if (!items.length) return;

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => setGalleryFocus(item));
      item.addEventListener('mouseleave', (e) => {
        const next = e.relatedTarget;
        if (!next?.closest?.('.gallery-item')) {
          setGalleryFocus(null);
        }
      });
    });

    const onOffsetChange = () => updateArrowsForRow(row);
    row._galleryOnOffsetChange = onOffsetChange;
    onOffsetChange();
  };

  const updateArrowsForRow = (row) => {
    const container = row.closest('.gallery-row-container');
    if (!container) return;
    const prev = container.querySelector('.gallery-arrow-prev');
    const next = container.querySelector('.gallery-arrow-next');
    if (!prev || !next) return;
    prev.disabled = false;
    next.disabled = false;
  };

  const hoveredContainers = new Set();
  galleryRows.forEach((row) => {
    const container = row.closest('.gallery-row-container');
    if (container) {
      container.addEventListener('mouseenter', () => hoveredContainers.add(container));
      container.addEventListener('mouseleave', () => hoveredContainers.delete(container));
    }

    const track = getTrack(row);
    if (!track) return;
    const items = track.querySelectorAll('.gallery-item');
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.classList.add('gallery-item-clone');
      clone.querySelectorAll('img').forEach((img) => {
        if (img.classList.contains('gallery-item-laurel')) return;
        img.loading = 'lazy';
        if ('fetchPriority' in img) img.fetchPriority = 'low';
      });
      track.appendChild(clone);
    });

    rowOffsets.set(row, 0);
    setupRow(row);
    updateArrowsForRow(row);

    row.addEventListener(
      'pointerdown',
      (e) => {
        if (e.button !== 0) return;
        galleryTouchPointerIds.add(e.pointerId);
        window._pauseGalleryAutoscroll?.();
        galleryInertiaByRow.delete(row);
        galleryPointerDragById.set(e.pointerId, {
          row,
          lastX: e.clientX,
          startX: e.clientX,
          startY: e.clientY,
          lastSampleX: e.clientX,
          lastSampleT: performance.now(),
          velX: 0,
          locked: false,
        });
      },
      { passive: true }
    );
    row.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
        e.preventDefault();
        const half = getHalfWidth(row);
        const o = normalizeOffset(getOffset(row) + e.deltaX, half);
        setOffset(row, o);
      },
      { passive: false }
    );
  });

  document.addEventListener(
    'pointermove',
    (e) => {
      const st = galleryPointerDragById.get(e.pointerId);
      if (!st) return;
      const { row } = st;
      if (!st.locked) {
        const tdx = e.clientX - st.startX;
        const tdy = e.clientY - st.startY;
        if (Math.abs(tdy) > Math.abs(tdx) && Math.abs(tdy) > 6) {
          galleryPointerDragById.delete(e.pointerId);
          galleryTouchPointerIds.delete(e.pointerId);
          return;
        }
        if (Math.abs(tdx) <= 6 || Math.abs(tdx) <= Math.abs(tdy)) return;
        st.locked = true;
        st.lastSampleX = e.clientX;
        st.lastSampleT = performance.now();
        st.velX = 0;
      }
      const dx = e.clientX - st.lastX;
      st.lastX = e.clientX;
      const half = getHalfWidth(row);
      const o = normalizeOffset(getOffset(row) - dx, half);
      setOffset(row, o);
      const now = performance.now();
      const dt = now - st.lastSampleT;
      if (dt > 0) {
        const instDx = e.clientX - st.lastSampleX;
        st.velX = 0.65 * st.velX + 0.35 * (instDx / dt);
      }
      st.lastSampleX = e.clientX;
      st.lastSampleT = now;
    },
    { passive: true }
  );

  const tickGalleryInertia = () => {
    galleryInertiaRafId = 0;
    if (galleryInertiaByRow.size === 0) return;
    const stamp = performance.now();
    const doneRows = [];
    galleryInertiaByRow.forEach((state, row) => {
      const dt = Math.min(32, Math.max(0.5, stamp - state.lastT));
      state.lastT = stamp;
      let v = state.v;
      const half = getHalfWidth(row);
      const o = normalizeOffset(getOffset(row) - v * dt, half);
      setOffset(row, o);
      v *= Math.exp(-0.003 * dt);
      state.v = v;
      if (Math.abs(v) < 0.0004) doneRows.push(row);
    });
    if (doneRows.length) {
      doneRows.forEach((row) => galleryInertiaByRow.delete(row));
      window._scheduleGalleryTouchResume(1000);
    }
    if (galleryInertiaByRow.size > 0) {
      galleryInertiaRafId = requestAnimationFrame(tickGalleryInertia);
    }
  };

  const endGalleryPointer = (e) => {
    const st = galleryPointerDragById.get(e.pointerId);
    galleryTouchPointerIds.delete(e.pointerId);
    galleryPointerDragById.delete(e.pointerId);
    if (st && st.row) {
      const row = st.row;
      const v = st.velX;
      if (st.locked && Math.abs(v) > 0.12) {
        galleryInertiaByRow.set(row, { v, lastT: performance.now() });
        if (!galleryInertiaRafId) {
          galleryInertiaRafId = requestAnimationFrame(tickGalleryInertia);
        }
      } else {
        window._scheduleGalleryTouchResume(1000);
      }
    }
  };

  document.addEventListener('pointerup', endGalleryPointer, { passive: true });
  document.addEventListener(
    'pointercancel',
    (e) => {
      const st = galleryPointerDragById.get(e.pointerId);
      galleryPointerDragById.delete(e.pointerId);
      galleryTouchPointerIds.delete(e.pointerId);
      if (!st?.row) return;
      galleryInertiaByRow.delete(st.row);
      window._scheduleGalleryTouchResume(1000);
    },
    { passive: true }
  );

  const syncGalleryNativeScrollMode = () => {
    rowHalfWidthCache.clear();
    galleryRows.forEach((row) => {
      const track = getTrack(row);
      if (!track) return;
      const half = getHalfWidth(row);
      const cur = rowOffsets.get(row) ?? 0;
      track.style.transform = '';
      const wrapped = normalizeOffset(cur, half);
      rowOffsets.set(row, wrapped);
      setOffset(row, wrapped);
    });
  };
  galleryNativeScrollMq.addEventListener('change', () => {
    if (autoscrollRafId) {
      cancelAnimationFrame(autoscrollRafId);
      autoscrollRafId = 0;
    }
    syncGalleryNativeScrollMode();
    if (typeof window._startGalleryAutoscroll === 'function') {
      window._startGalleryAutoscroll();
    }
  });
  syncGalleryNativeScrollMode();

  if (!prefersReducedMotion) {
    const ARROW_PAUSE_MS = 500;
    const EASE_IN_DURATION_MS = 1000;
    let pauseUntil = 0;
    let easeInStart = 0;

    const pauseAutoscroll = () => {
      const now = Date.now();
      pauseUntil = now + ARROW_PAUSE_MS;
      easeInStart = now + ARROW_PAUSE_MS;
    };

    let galleryInView = false;
    /** Wall-clock delta for frame-rate–independent motion (60fps baseline; scales on 120Hz / throttled tabs). */
    let lastAutoscrollFrameTime = null;
    const AUTOSCROLL_TICK_MS = 1000 / 60;
    const autoscroll = () => {
      autoscrollRafId = 0;
      if (document.hidden || !galleryInView) return;
      const frameNow = performance.now();
      const now = Date.now();
      let globalSpeedMultiplier = 1;
      if (galleryTouchPointerIds.size > 0 || galleryInertiaByRow.size > 0) {
        globalSpeedMultiplier = 0;
      } else if (now < pauseUntil) {
        globalSpeedMultiplier = 0;
      } else if (easeInStart && now < easeInStart + EASE_IN_DURATION_MS) {
        const elapsed = now - easeInStart;
        globalSpeedMultiplier = Math.min(1, elapsed / EASE_IN_DURATION_MS);
      } else if (easeInStart) {
        easeInStart = 0;
      }

      const dtMs =
        lastAutoscrollFrameTime == null
          ? AUTOSCROLL_TICK_MS
          : Math.min(64, Math.max(0.5, frameNow - lastAutoscrollFrameTime));
      lastAutoscrollFrameTime = frameNow;

      galleryRows.forEach((row, i) => {
        const track = getTrack(row);
        if (!track) return;
        const speedIndex = row.id === 'galleryRow1' ? 1 : row.id === 'galleryRow0' ? 0 : i;
        let frameSpeed = (AUTOSCROLL_SPEEDS[speedIndex] ?? AUTOSCROLL_SPEEDS[0]) * globalSpeedMultiplier;
        const container = row.closest('.gallery-row-container');
        if (container && hoveredContainers.has(container)) {
          frameSpeed *= 0.5;
        }
        const halfWidth = getHalfWidth(row);
        const before = getOffset(row);
        /* speed = px per frame @ 60Hz → multiply by dt/16.67ms for constant linear velocity */
        const deltaPx = frameSpeed * (dtMs / AUTOSCROLL_TICK_MS);
        let next = before + deltaPx;
        while (next >= halfWidth) next -= halfWidth;
        setOffset(row, next);
      });

      autoscrollRafId = requestAnimationFrame(autoscroll);
    };
    const startAutoscroll = () => {
      if (!autoscrollRafId) {
        lastAutoscrollFrameTime = null;
        autoscrollRafId = requestAnimationFrame(autoscroll);
      }
    };
    window._startGalleryAutoscroll = startAutoscroll;

    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const galleryIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            galleryInView = entry.isIntersecting;
            if (galleryInView && !document.hidden) startAutoscroll();
          });
        },
        { root: null, rootMargin: '100px 0px', threshold: 0 }
      );
      galleryIo.observe(gallerySection);
    }

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && galleryInView) startAutoscroll();
    });

    window._pauseGalleryAutoscroll = pauseAutoscroll;
    window._scheduleGalleryTouchResume = (delayMs) => {
      const nowWall = Date.now();
      pauseUntil = nowWall + delayMs;
      easeInStart = nowWall + delayMs;
    };
  }

  /** Avoid accidental link navigation after horizontal drag-scroll (carousel + Work spotlight). */
  const installHorizontalGalleryTapGuard = (root) => {
    if (!root) return;
    const TH = 14;
    let start = null;
    root.addEventListener(
      'pointerdown',
      (e) => {
        if (e.button !== 0) return;
        start = { x: e.clientX, y: e.clientY, id: e.pointerId };
      },
      { passive: true }
    );
    const end = (e) => {
      if (!start || e.pointerId !== start.id) return;
      const moved = Math.abs(e.clientX - start.x) + Math.abs(e.clientY - start.y) > TH;
      start = null;
      if (moved) root.dataset.galleryTapGuardDrag = '1';
    };
    root.addEventListener('pointerup', end, { passive: true });
    root.addEventListener('pointercancel', end, { passive: true });
    root.addEventListener(
      'click',
      (e) => {
        if (root.dataset.galleryTapGuardDrag === '1') {
          e.preventDefault();
          e.stopPropagation();
          delete root.dataset.galleryTapGuardDrag;
        }
      },
      true
    );
  };
  galleryRows.forEach((row) => installHorizontalGalleryTapGuard(row));

  const ARROW_ANIMATE_MS = 350;
  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  const animateToOffset = (row, targetOffset) => {
    const startOffset = getOffset(row);
    const startTime = performance.now();
    const animate = () => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(1, elapsed / ARROW_ANIMATE_MS);
      const eased = easeOutCubic(t);
      const current = startOffset + (targetOffset - startOffset) * eased;
      setOffset(row, current);
      if (t < 1) requestAnimationFrame(animate);
      else row._galleryOnOffsetChange?.();
    };
    requestAnimationFrame(animate);
  };

  document.querySelectorAll('.gallery-arrow').forEach((btn) => {
    const rowIndex = btn.getAttribute('data-row');
    const row = document.getElementById('galleryRow' + rowIndex);
    if (!row) return;
    const step = getScrollStep(row);
    const track = getTrack(row);
    if (!track) return;
    const halfWidth = getHalfWidth(row);
    const container = row.closest('.gallery-row-container');
    const prev = container?.querySelector('.gallery-arrow-prev');
    const next = container?.querySelector('.gallery-arrow-next');
    if (btn === prev) {
      btn.addEventListener('click', () => {
        let target = getOffset(row) - step;
        if (target < 0) target += halfWidth;
        target = Math.max(0, target);
        animateToOffset(row, target);
        window._pauseGalleryAutoscroll?.();
      });
    } else if (btn === next) {
      btn.addEventListener('click', () => {
        let target = getOffset(row) + step;
        if (target >= halfWidth) target -= halfWidth;
        target = Math.min(halfWidth - 1, target);
        animateToOffset(row, target);
        window._pauseGalleryAutoscroll?.();
      });
    }
  });

  // Work spotlight — horizontal scroll carousel + picker tabs (smooth scroll to slide)
  const appsTablist = document.querySelector('.apps-gallery-tabs');
  const appsScroller = document.getElementById('apps-gallery-scroller');
  const spotlightSection = document.getElementById('work-spotlight');
  const appsDescShell = spotlightSection?.querySelector('.apps-gallery-desc-shell');
  if (appsTablist && appsScroller) {
    const prefersReducedSpotlightGapMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let spotlightGapFirstApplyDone = false;
    let lastSpotlightGapPx = null;
    let spotlightGapHoldTimer = null;
    let spotlightGapAnimRaf = null;
    let spotlightGapAnimGeneration = 0;
    /** After switching spotlight item: keep gallery vertical position for this long, then ease to new gap. */
    const SPOTLIGHT_GAP_HOLD_MS = 500;
    const SPOTLIGHT_GAP_DURATION_MS = 500;
    /** Progress curve (t=0..1) — strong deceleration at end, similar to Apple ease-out. */
    const easeSpotlightGap = (t) => 1 - (1 - t) ** 5;

    /**
     * Natural height of the active paragraph. In-page nodes are stacked in one grid cell
     * and stretch to the tallest slide, so getBoundingClientRect() on the active <p> is wrong.
     */
    const measureActiveSpotlightDescHeight = (active, shell) => {
      if (!active || !shell) return 0;
      const w = Math.max(1, Math.round(shell.getBoundingClientRect().width));
      const clone = active.cloneNode(true);
      clone.style.cssText = [
        'position:absolute',
        'left:-9999px',
        'top:0',
        `width:${w}px`,
        'box-sizing:border-box',
        'margin:0',
        'visibility:hidden',
        'pointer-events:none',
        'opacity:1',
        'z-index:-1',
      ].join(';');
      document.body.appendChild(clone);
      const h = clone.offsetHeight;
      document.body.removeChild(clone);
      return h;
    };

    const stopSpotlightGapRafAnim = () => {
      if (spotlightGapAnimRaf != null) {
        cancelAnimationFrame(spotlightGapAnimRaf);
        spotlightGapAnimRaf = null;
      }
      spotlightGapAnimGeneration++;
    };

    /** Stop RAF animation and pin --spotlight-desc-trail-gap to current computed padding (freeze layout). */
    const snapshotSpotlightGapFromComputed = () => {
      if (!spotlightSection) return;
      stopSpotlightGapRafAnim();
      const pb = parseFloat(getComputedStyle(spotlightSection).paddingBottom);
      if (Number.isFinite(pb) && pb >= 0) {
        const r = Math.round(pb);
        lastSpotlightGapPx = r;
        spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${r}px`);
      }
    };

    /** Animate the CSS variable every frame (WAAPI on padding is unreliable across browsers). */
    const runSpotlightGapRafAnim = (fromPx, toPx) => {
      stopSpotlightGapRafAnim();
      const myGen = spotlightGapAnimGeneration;
      const from = Number(fromPx);
      const to = Number(toPx);
      const t0 = performance.now();
      const dur = SPOTLIGHT_GAP_DURATION_MS;
      const step = (now) => {
        if (myGen !== spotlightGapAnimGeneration) return;
        const elapsed = now - t0;
        const u = Math.min(1, elapsed / dur);
        const eased = easeSpotlightGap(u);
        const val = from + (to - from) * eased;
        spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${Math.round(val * 100) / 100}px`);
        if (u < 1) {
          spotlightGapAnimRaf = requestAnimationFrame(step);
        } else {
          spotlightGapAnimRaf = null;
          lastSpotlightGapPx = Math.round(to);
          spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${lastSpotlightGapPx}px`);
        }
      };
      spotlightGapAnimRaf = requestAnimationFrame(step);
    };

    const syncSpotlightToGalleryGap = () => {
      if (!spotlightSection || !appsDescShell) return;
      const active = appsDescShell.querySelector('.apps-gallery-desc-text.is-active');
      const textH = measureActiveSpotlightDescHeight(active, appsDescShell);
      const G_MIN = 6;
      const G_MAX = 52;
      const H_REF = 200;
      const t = Math.min(1, textH / H_REF);
      const gap = G_MIN + (G_MAX - G_MIN) * t;
      const newGap = Math.round(gap);

      if (!spotlightGapFirstApplyDone) {
        spotlightGapFirstApplyDone = true;
        lastSpotlightGapPx = newGap;
        spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${newGap}px`);
        return;
      }

      if (newGap === lastSpotlightGapPx) return;

      if (prefersReducedSpotlightGapMotion) {
        stopSpotlightGapRafAnim();
        lastSpotlightGapPx = newGap;
        spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${newGap}px`);
        return;
      }

      const pb = parseFloat(getComputedStyle(spotlightSection).paddingBottom);
      const fromPx = Number.isFinite(pb) && pb >= 0 ? pb : lastSpotlightGapPx;

      if (Math.abs(fromPx - newGap) < 0.5) {
        stopSpotlightGapRafAnim();
        lastSpotlightGapPx = newGap;
        spotlightSection.style.setProperty('--spotlight-desc-trail-gap', `${newGap}px`);
        return;
      }

      runSpotlightGapRafAnim(fromPx, newGap);
    };

    scheduleSpotlightGapSync = (opts = {}) => {
      const hold = opts.hold === true;
      if (hold) {
        snapshotSpotlightGapFromComputed();
        clearTimeout(spotlightGapHoldTimer);
        spotlightGapHoldTimer = window.setTimeout(() => {
          spotlightGapHoldTimer = null;
          requestAnimationFrame(() => {
            requestAnimationFrame(syncSpotlightToGalleryGap);
          });
        }, SPOTLIGHT_GAP_HOLD_MS);
        return;
      }
      clearTimeout(spotlightGapHoldTimer);
      spotlightGapHoldTimer = null;
      requestAnimationFrame(() => {
        requestAnimationFrame(syncSpotlightToGalleryGap);
      });
    };
    if (typeof ResizeObserver !== 'undefined' && appsDescShell) {
      const ro = new ResizeObserver(() => scheduleSpotlightGapSync());
      ro.observe(appsDescShell);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => scheduleSpotlightGapSync());
    }
    installHorizontalGalleryTapGuard(appsScroller);
    const tabs = [...appsTablist.querySelectorAll('[role="tab"]')];
    const panels = tabs
      .map((_, i) => document.getElementById(`apps-gallery-panel-${i}`))
      .filter(Boolean);
    const descTexts = [...document.querySelectorAll('.apps-gallery-desc-text')];
    const prefersReducedMotionApps = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const appsTabsShell = document.querySelector('.apps-gallery-tabs-shell');
    let activeIndex = 0;
    let ignoreScrollSync = false;
    let appsGalleryJumpToken = 0;
    let appsGalleryPickerSyncToken = 0;

    /** Ease-out scroll so the carousel coasts into place (not the browser’s short smooth scroll). */
    const APPS_GALLERY_SCROLL_MS = 640;
    const APPS_GALLERY_TAB_SCROLL_MS = 420;
    const easeOutQuint = (t) => 1 - (1 - t) ** 5;

    const animateScrollLeft = (el, targetLeft, durationMs, isCancelled) => {
      const start = el.scrollLeft;
      const delta = targetLeft - start;
      if (Math.abs(delta) < 0.5) return Promise.resolve();
      if (durationMs <= 0) {
        el.scrollLeft = targetLeft;
        return Promise.resolve();
      }
      const t0 = performance.now();
      return new Promise((resolve) => {
        const step = (now) => {
          if (isCancelled && isCancelled()) {
            resolve();
            return;
          }
          const elapsed = now - t0;
          const t = Math.min(1, elapsed / durationMs);
          el.scrollLeft = start + delta * easeOutQuint(t);
          if (t < 1) {
            requestAnimationFrame(step);
          } else {
            el.scrollLeft = targetLeft;
            resolve();
          }
        };
        requestAnimationFrame(step);
      });
    };

    const scrollActiveTabIntoPickerShell = () => {
      const tab = tabs[activeIndex];
      if (!tab || !appsTabsShell) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const shell = appsTabsShell;
          const tabRect = tab.getBoundingClientRect();
          const shellRect = shell.getBoundingClientRect();
          const tabLeft = tabRect.left - shellRect.left + shell.scrollLeft;
          const tabW = tabRect.width;
          const vw = shell.clientWidth;
          const maxScroll = Math.max(0, shell.scrollWidth - shell.clientWidth);

          let nextLeft = shell.scrollLeft;

          if (tabW <= vw + 0.5) {
            nextLeft = tabLeft + tabW / 2 - vw / 2;
          } else {
            nextLeft = tabLeft;
          }

          nextLeft = Math.max(0, Math.min(nextLeft, maxScroll));

          const visRight = nextLeft + vw;
          const tabRight = tabLeft + tabW;
          if (tabLeft < nextLeft) {
            nextLeft = Math.max(0, tabLeft);
          } else if (tabRight > visRight) {
            nextLeft = Math.min(maxScroll, tabRight - vw);
          }

          nextLeft = Math.max(0, Math.min(nextLeft, maxScroll));

          const duration = prefersReducedMotionApps ? 0 : APPS_GALLERY_TAB_SCROLL_MS;
          animateScrollLeft(shell, nextLeft, duration, null);
        });
      });
    };

    const updateTabsAndPanels = (i) => {
      const n = tabs.length;
      activeIndex = ((i % n) + n) % n;
      tabs.forEach((tab, j) => {
        const selected = j === activeIndex;
        tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        tab.tabIndex = selected ? 0 : -1;
        tab.classList.toggle('is-active', selected);
      });
      panels.forEach((panel, j) => {
        panel.classList.toggle('is-active', j === activeIndex);
      });
      descTexts.forEach((el, j) => {
        const on = j === activeIndex;
        el.classList.toggle('is-active', on);
        el.setAttribute('aria-hidden', on ? 'false' : 'true');
      });
      scrollActiveTabIntoPickerShell();
      scheduleSpotlightGapSync(spotlightGapFirstApplyDone ? { hold: true } : {});
    };

    const scrollToPanel = (index, onDone) => {
      const panel = panels[index];
      if (!panel) {
        onDone?.();
        return;
      }
      const scroller = appsScroller;
      const myToken = ++appsGalleryJumpToken;
      const clearJumpIfCurrent = () => {
        if (myToken !== appsGalleryJumpToken) return;
        scroller.classList.remove('is-jumping');
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (myToken !== appsGalleryJumpToken) {
            onDone?.();
            return;
          }
          const pr = panel.getBoundingClientRect();
          const sr = scroller.getBoundingClientRect();
          const delta = pr.left + pr.width / 2 - (sr.left + sr.width / 2);
          const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
          const targetLeft = Math.max(
            0,
            Math.min(scroller.scrollLeft + delta, maxScroll)
          );
          scroller.classList.remove('is-jumping');
          scroller.classList.add('is-jumping');
          const duration = prefersReducedMotionApps ? 0 : APPS_GALLERY_SCROLL_MS;
          animateScrollLeft(scroller, targetLeft, duration, () => myToken !== appsGalleryJumpToken).then(() => {
            clearJumpIfCurrent();
            onDone?.();
          });
        });
      });
    };

    const findNearestPanelIndex = () => {
      const r = appsScroller.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      let best = 0;
      let bestDist = Infinity;
      panels.forEach((p, idx) => {
        const pr = p.getBoundingClientRect();
        const mx = pr.left + pr.width / 2;
        const d = Math.abs(mx - cx);
        if (d < bestDist) {
          bestDist = d;
          best = idx;
        }
      });
      return best;
    };

    const syncFromScroll = () => {
      if (ignoreScrollSync) return;
      const idx = findNearestPanelIndex();
      if (idx !== activeIndex) updateTabsAndPanels(idx);
    };

    let scrollDebounce;
    appsScroller.addEventListener(
      'scroll',
      () => {
        clearTimeout(scrollDebounce);
        scrollDebounce = setTimeout(syncFromScroll, 100);
      },
      { passive: true }
    );
    appsScroller.addEventListener('scrollend', () => {
      clearTimeout(scrollDebounce);
      syncFromScroll();
    });

    const activateFromPicker = (index) => {
      const syncToken = ++appsGalleryPickerSyncToken;
      ignoreScrollSync = true;
      updateTabsAndPanels(index);
      const endIgnore = () => {
        if (syncToken !== appsGalleryPickerSyncToken) return;
        ignoreScrollSync = false;
      };
      scrollToPanel(index, endIgnore);
      window.setTimeout(endIgnore, prefersReducedMotionApps ? 200 : APPS_GALLERY_SCROLL_MS + 120);
    };

    panels.forEach((panel, i) => {
      const caption = panel.querySelector('.apps-gallery-caption');
      caption?.addEventListener('click', (e) => {
        e.stopPropagation();
        activateFromPicker(i);
      });
    });

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activateFromPicker(i));
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const dir = e.key === 'ArrowRight' ? 1 : -1;
          const next = (i + dir + tabs.length) % tabs.length;
          activateFromPicker(next);
          tabs[next].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          activateFromPicker(0);
          tabs[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          activateFromPicker(tabs.length - 1);
          tabs[tabs.length - 1].focus();
        }
      });
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateTabsAndPanels(0);
        scrollToPanel(0);
      });
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        scrollActiveTabIntoPickerShell();
        scheduleSpotlightGapSync();
      }, 150),
      { passive: true }
    );
  }

  const aboutNav = document.getElementById('about-nav');
  const prefersReducedAboutNav = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  aboutNav?.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.replaceState(null, '', '#work-spotlight');
    const section = document.getElementById('work-spotlight');
    section?.scrollIntoView({
      behavior: prefersReducedAboutNav ? 'auto' : 'smooth',
      block: 'start',
    });
    const delay = prefersReducedAboutNav ? 0 : 420;
    window.setTimeout(() => {
      document.getElementById('apps-gallery-tab-0')?.click();
    }, delay);
  });

  if (window.location.hash === '#work-spotlight') {
    window.setTimeout(() => {
      document.getElementById('apps-gallery-tab-0')?.click();
    }, 0);
  }

  // Demo tracks - progress bar with time display
  const demoTracks = document.querySelectorAll('.demo-track');
  let activeDemoTrack = null;

  const FADE_MS = 120;

  const fadeOut = (audio, onComplete) => {
    const startVol = audio.volume;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / FADE_MS);
      audio.volume = Math.max(0, startVol * (1 - t));
      if (t < 1) requestAnimationFrame(step);
      else {
        audio.volume = 1;
        onComplete();
      }
    };
    requestAnimationFrame(step);
  };

  const fadeIn = (audio, onComplete) => {
    audio.volume = 0;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / FADE_MS);
      audio.volume = t;
      if (t < 1) requestAnimationFrame(step);
      else {
        audio.volume = 1;
        onComplete?.();
      }
    };
    requestAnimationFrame(step);
  };

  const formatTime = (seconds) => {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const updateProgress = (track, audio) => {
    const currentEl = track.querySelector('.demo-time-current');
    const totalEl = track.querySelector('.demo-time-total');
    const fillEl = track.querySelector('.demo-progress-fill');
    const barEl = track.querySelector('.demo-progress-bar');

    if (!currentEl || !totalEl || !fillEl || !barEl) return;

    const current = audio.currentTime;
    const duration = audio.duration;

    currentEl.textContent = formatTime(current);
    totalEl.textContent = formatTime(duration);

    const pct = duration > 0 ? (current / duration) * 100 : 0;
    fillEl.style.width = `${pct}%`;
    barEl.setAttribute('aria-valuenow', Math.round(pct));
  };

  const runDemoTracksSetup = () => {
  demoTracks.forEach((track) => {
    const src = track.getAttribute('data-src');
    const playBtn = track.querySelector('.demo-play');
    const progressBar = track.querySelector('.demo-progress-bar');

    if (!src || !playBtn || !progressBar) return;

    const audio = new Audio();
    audio.preload = 'none';
    track._audio = audio;
    track._audioSrc = src;

    playBtn.addEventListener('click', () => {
      if (activeDemoTrack && activeDemoTrack !== track) {
        const otherAudio = activeDemoTrack._audio;
        if (otherAudio) {
          fadeOut(otherAudio, () => {
            otherAudio.pause();
            otherAudio.currentTime = 0;
          });
        }
        activeDemoTrack.classList.remove('playing');
        activeDemoTrack.querySelector('.demo-play')?.setAttribute('aria-label', 'Play');
      }

      if (track.classList.contains('playing')) {
        fadeOut(audio, () => {
          audio.pause();
          track.classList.remove('playing');
          playBtn.setAttribute('aria-label', 'Play');
        });
      } else {
        if (!audio.src) {
          audio.src = track._audioSrc;
        }
        const p = audio.play();
        if (p && typeof p.then === 'function') {
          p.then(() => {
            track.classList.add('playing');
            playBtn.setAttribute('aria-label', 'Pause');
            activeDemoTrack = track;
            fadeIn(audio);
          }).catch(() => {});
        } else {
          track.classList.add('playing');
          playBtn.setAttribute('aria-label', 'Pause');
          activeDemoTrack = track;
          fadeIn(audio);
        }
      }
    });

    let progressRAF = false;
    const scheduleProgress = () => {
      if (progressRAF) return;
      progressRAF = true;
      requestAnimationFrame(() => {
        updateProgress(track, audio);
        progressRAF = false;
      });
    };
    audio.addEventListener('timeupdate', scheduleProgress);
    audio.addEventListener('loadedmetadata', () => updateProgress(track, audio));
    audio.addEventListener('durationchange', () => updateProgress(track, audio));
    audio.addEventListener('ended', () => {
      updateProgress(track, audio);
      track.classList.remove('playing');
      playBtn.setAttribute('aria-label', 'Play');
      if (activeDemoTrack === track) activeDemoTrack = null;
    });
    audio.addEventListener('error', () => {
      track.classList.remove('playing');
      playBtn.setAttribute('aria-label', 'Play');
    });

    let pendingSeek = null;
    const applyPendingSeek = () => {
      if (pendingSeek != null && audio.seekable && audio.seekable.length > 0) {
        const end = audio.seekable.end(audio.seekable.length - 1);
        if (end >= pendingSeek) {
          audio.currentTime = pendingSeek;
          updateProgress(track, audio);
          pendingSeek = null;
        }
      }
    };
    const onSeekable = () => { applyPendingSeek(); };
    audio.addEventListener('progress', onSeekable);
    audio.addEventListener('canplaythrough', onSeekable);

    progressBar.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!audio.src) audio.src = track._audioSrc;
      if (!audio.duration || !isFinite(audio.duration)) return;
      const rect = progressBar.getBoundingClientRect();
      const pct = rect.width > 0 ? Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) : 0;
      const targetTime = pct * audio.duration;
      const seekEnd = audio.seekable?.length ? audio.seekable.end(audio.seekable.length - 1) : 0;
      if (seekEnd >= targetTime) {
        audio.currentTime = targetTime;
        updateProgress(track, audio);
        pendingSeek = null;
      } else {
        pendingSeek = targetTime;
      }
    });

    progressBar.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Home' && e.key !== 'End') return;
      e.preventDefault();
      if (!audio.duration || !isFinite(audio.duration)) return;
      const step = e.key === 'Home' ? -1 : e.key === 'End' ? 1 : e.key === 'ArrowLeft' ? -0.05 : 0.05;
      let next = step < 0 ? (e.key === 'Home' ? 0 : audio.currentTime + step * audio.duration) : audio.currentTime + step * audio.duration;
      next = Math.max(0, Math.min(audio.duration, next));
      audio.currentTime = next;
      updateProgress(track, audio);
    });

    updateProgress(track, audio);
  });
  };
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(runDemoTracksSetup, { timeout: 2000 });
  } else {
    setTimeout(runDemoTracksSetup, 0);
  }

});
