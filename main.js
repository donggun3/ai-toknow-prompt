const translations = {
  ko: {
    badge: "멀티모달 PLC 분석",
    "hero-title": "AI로 래더 다이어그램 및 PLC 프로그램 분석해 주는 프롬프트 + 주의사항",
    "hero-subtitle": "화면 캡처나 PDF 문서를 업로드하여 Gemini의 시각적 로직 해석 기능을 활용해 보세요.",
    "guide-title": "효과적인 분석을 위한 가이드",
    "tip1-title": "이미지 및 PDF 형태 (가장 효과적)",
    "tip1-desc": "HMI 화면 캡처나 GX Works, RSLogix, TIA Portal 등에서 캡처한 이미지, 또는 로직을 PDF로 인쇄한 문서를 업로드하면 Gemini가 시각적으로 해석합니다.",
    "tip2-title": "텍스트 기반 코드 분석",
    "tip2-desc": "Instruction List (IL), Structured Text (ST) 형태는 더욱 정확한 분석이 가능합니다. Rockwell의 .L5X 파일은 직접 분석이 가능합니다.",
    "warning-title": "특정 형식 및 바이너리 파일 주의사항",
    "warning-desc": "Mitsubishi의 .gxw나 Siemens의 .ap15 같은 바이너리 형태는 AI가 직접 해석하기 어렵습니다. 화면 캡처 이미지나 PDF를 활용해 주세요.",
    "form-title": "이미지 / PDF / 데이터 업로드",
    "upload-main": "파일을 선택하거나 드래그하세요",
    "upload-sub": "이미지, PDF, .L5X, .xgm, .txt 등 지원",
    "label-plc": "PLC 제조사 / 기종",
    "label-goal": "분석 목적",
    "opt-general": "전체적인 로직 설명 및 흐름 파악",
    "opt-debug": "오류/버그 원인 파악 및 수정 제안",
    "opt-optimize": "로직 최적화 및 효율성 개선",
    "label-text": "텍스트 로직 (IL, ST 등) 또는 추가 정보",
    "btn-analyze": "Google AI로 즉시 분석하기",
    "preview-title": "전송될 프롬프트 미리보기",
    "footer-copy": "© 2026 Ladder Analyst. Multi-modal Gemini 최적화.",
    "footer-privacy": "개인정보처리방침",
    "footer-contact": "문의하기"
  },
  en: {
    badge: "Multi-modal PLC Analysis",
    "hero-title": "AI-Powered Ladder Diagram & PLC Program Analysis Prompt + Tips",
    "hero-subtitle": "Upload screen captures or PDF documents to leverage Gemini's visual logic interpretation.",
    "guide-title": "Guide for Effective Analysis",
    "tip1-title": "Image & PDF Formats (Most Effective)",
    "tip1-desc": "Upload images from HMI, GX Works, RSLogix, TIA Portal, or PDF prints for visual interpretation by Gemini.",
    "tip2-title": "Text-Based Code Analysis",
    "tip2-desc": "Instruction List (IL) and Structured Text (ST) formats provide precise analysis. Rockwell .L5X files are directly supported.",
    "warning-title": "Binary File Limitations",
    "warning-desc": "Binary files like .gxw or .ap15 are hard for AI to read directly. Please use screen captures or PDF exports instead.",
    "form-title": "Image / PDF / Data Upload",
    "upload-main": "Select or drag files here",
    "upload-sub": "Supports Images, PDF, .L5X, .xgm, .txt, etc.",
    "label-plc": "PLC Manufacturer / Model",
    "label-goal": "Analysis Goal",
    "opt-general": "General logic explanation & sequence",
    "opt-debug": "Identify bugs & suggest fixes",
    "opt-optimize": "Logic optimization & efficiency",
    "label-text": "Text Logic (IL, ST, etc.) or Additional Info",
    "btn-analyze": "Analyze with Google AI Now",
    "preview-title": "Generated Prompt Preview",
    "footer-copy": "© 2026 Ladder Analyst. Optimized for Multi-modal Gemini.",
    "footer-privacy": "Privacy Policy",
    "footer-contact": "Contact Us"
  },
  vi: {
    badge: "Phân tích PLC đa phương thức",
    "hero-title": "Lời nhắc phân tích biểu đồ Ladder & chương trình PLC bằng AI + Lưu ý",
    "hero-subtitle": "Tải lên ảnh chụp màn hình hoặc tài liệu PDF để sử dụng tính năng giải thích logic trực quan của Gemini.",
    "guide-title": "Hướng dẫn phân tích hiệu quả",
    "tip1-title": "Định dạng Hình ảnh & PDF (Hiệu quả nhất)",
    "tip1-desc": "Tải lên ảnh chụp từ GX Works, TIA Portal hoặc bản in PDF để Gemini giải thích trực quan.",
    "tip2-title": "Phân tích mã dạng văn bản",
    "tip2-desc": "Các định dạng IL, ST giúp phân tích chính xác hơn. Tệp .L5X của Rockwell được hỗ trợ trực tiếp.",
    "warning-title": "Lưu ý về tệp nhị phân",
    "warning-desc": "Các tệp .gxw hoặc .ap15 khó giải mã trực tiếp. Vui lòng sử dụng ảnh chụp màn hình hoặc PDF.",
    "form-title": "Tải lên Hình ảnh / PDF / Dữ liệu",
    "upload-main": "Chọn hoặc kéo tệp vào đây",
    "upload-sub": "Hỗ trợ Hình ảnh, PDF, .L5X, .xgm, .txt, v.v.",
    "label-plc": "Hãng sản xuất / Model PLC",
    "label-goal": "Mục đích phân tích",
    "opt-general": "Giải thích logic & trình tự tổng thể",
    "opt-debug": "Tìm lỗi & đề xuất sửa chữa",
    "opt-optimize": "Tối ưu hóa logic & hiệu suất",
    "label-text": "Mã văn bản (IL, ST, v.v.) hoặc thông tin thêm",
    "btn-analyze": "Phân tích ngay với Google AI",
    "preview-title": "Xem trước lời nhắc",
    "footer-copy": "© 2026 Ladder Analyst. Tối ưu cho Gemini đa phương thức.",
    "footer-privacy": "Bảo mật",
    "footer-contact": "Liên hệ"
  },
  es: {
    badge: "Análisis PLC Multimodal",
    "hero-title": "Prompt de Análisis de Diagramas Ladder y PLC con AI + Consejos",
    "hero-subtitle": "Suba capturas de pantalla o PDF para usar la interpretación lógica visual de Gemini.",
    "guide-title": "Guía para un Análisis Efectivo",
    "tip1-title": "Formatos Imagen y PDF (Más Efectivo)",
    "tip1-desc": "Suba capturas de TIA Portal, GX Works o PDF para interpretación visual de Gemini.",
    "tip2-title": "Análisis de Código de Texto",
    "tip2-desc": "Formatos IL y ST permiten análisis más precisos. Archivos .L5X son soportados directamente.",
    "warning-title": "Limitación de Archivos Binarios",
    "warning-desc": "Archivos .gxw o .ap15 son difíciles de leer directamente. Use capturas o PDF.",
    "form-title": "Subir Imagen / PDF / Datos",
    "upload-main": "Seleccione o arrastre archivos",
    "upload-sub": "Soporta Imagen, PDF, .L5X, .xgm, .txt, etc.",
    "label-plc": "Fabricante / Modelo PLC",
    "label-goal": "Objetivo del Análisis",
    "opt-general": "Explicación lógica general",
    "opt-debug": "Identificar errores y sugerir mejoras",
    "opt-optimize": "Optimización y eficiencia",
    "label-text": "Código de texto (IL, ST, etc.) o info adicional",
    "btn-analyze": "Analizar con Google AI ahora",
    "preview-title": "Vista previa del Prompt",
    "footer-copy": "© 2026 Ladder Analyst. Optimizado para Gemini.",
    "footer-privacy": "Privacidad",
    "footer-contact": "Contacto"
  },
  de: {
    badge: "Multimodale PLC-Analyse",
    "hero-title": "KI-gestützte Ladder-Diagramm & SPS-Analyse Prompt + Tipps",
    "hero-subtitle": "Laden Sie Screenshots oder PDFs hoch, um Geminis visuelle Logik-Interpretation zu nutzen.",
    "guide-title": "Leitfaden für effektive Analyse",
    "tip1-title": "Bild- & PDF-Formate (Am effektivsten)",
    "tip1-desc": "Laden Sie Bilder aus TIA Portal, GX Works oder PDFs für die visuelle Analyse durch Gemini hoch.",
    "tip2-title": "Textbasierte Code-Analyse",
    "tip2-desc": "IL- und ST-Formate bieten präzisere Analysen. Rockwell .L5X-Dateien werden direkt unterstützt.",
    "warning-title": "Hinweis zu Binärdateien",
    "warning-desc": "Binärdateien wie .gxw oder .ap15 sind schwer direkt zu lesen. Bitte Screenshots oder PDFs verwenden.",
    "form-title": "Bild / PDF / Daten Hochladen",
    "upload-main": "Datei auswählen oder herziehen",
    "upload-sub": "Unterstützt Bilder, PDF, .L5X, .xgm, .txt usw.",
    "label-plc": "SPS-Hersteller / Modell",
    "label-goal": "Analyseziel",
    "opt-general": "Allgemeine Logik-Erklärung",
    "opt-debug": "Fehler finden & Lösungen vorschlagen",
    "opt-optimize": "Optimierung & Effizienz",
    "label-text": "Textcode (IL, ST usw.) oder Zusatzinfos",
    "btn-analyze": "Jetzt mit Google AI analysieren",
    "preview-title": "Prompt-Vorschau",
    "footer-copy": "© 2026 Ladder Analyst. Optimiert für Gemini.",
    "footer-privacy": "Datenschutz",
    "footer-contact": "Kontakt"
  },
  fr: {
    badge: "Analyse PLC Multimodale",
    "hero-title": "Prompt d'Analyse de Diagramme Ladder & PLC par IA + Conseils",
    "hero-subtitle": "Téléchargez des captures d'écran ou des PDF pour l'interprétation visuelle de Gemini.",
    "guide-title": "Guide pour une Analyse Efficace",
    "tip1-title": "Formats Image & PDF (Plus Efficace)",
    "tip1-desc": "Utilisez des captures de TIA Portal, GX Works ou des PDF pour l'analyse visuelle par Gemini.",
    "tip2-title": "Analyse de Code Texte",
    "tip2-desc": "Les formats IL et ST permettent une analyse précise. Les fichiers .L5X sont supportés directement.",
    "warning-title": "Limitations des Fichiers Binaires",
    "warning-desc": "Les fichiers .gxw ou .ap15 sont difficiles à lire directement. Utilisez des captures ou des PDF.",
    "form-title": "Télécharger Image / PDF / Données",
    "upload-main": "Choisir hoặc glisser un fichier",
    "upload-sub": "Supporte Image, PDF, .L5X, .xgm, .txt, etc.",
    "label-plc": "Fabricant / Modèle PLC",
    "label-goal": "Objectif de l'Analyse",
    "opt-general": "Explication logique globale",
    "opt-debug": "Identifier les bugs & corriger",
    "opt-optimize": "Optimisation & efficacité",
    "label-text": "Code texte (IL, ST, etc.) ou info sup",
    "btn-analyze": "Analyser avec Google AI maintenant",
    "preview-title": "Aperçu du Prompt",
    "footer-copy": "© 2026 Ladder Analyst. Optimisé pour Gemini.",
    "footer-privacy": "Confidentialité",
    "footer-contact": "Contact"
  },
  hi: {
    badge: "मल्टी-मोडल PLC विश्लेषण",
    "hero-title": "AI द्वारा संचालित लैडर आरेख और PLC विश्लेषण प्रॉम्प्ट + टिप्स",
    "hero-subtitle": "Gemini की विज़ुअल लॉजिक व्याख्या का लाभ उठाने के लिए स्क्रीन कैप्चर या PDF अपलोड करें।",
    "guide-title": "प्रभावी विश्लेषण के लिए मार्गदर्शिका",
    "tip1-title": "इमेज और PDF प्रारूप (सबसे प्रभावी)",
    "tip1-desc": "TIA पोर्टल, GX Works या PDF प्रिंट अपलोड करें ताकि Gemini विज़ुअल विश्लेषण कर सके।",
    "tip2-title": "टेक्स्ट-आधारित कोड विश्लेषण",
    "tip2-desc": "IL और ST प्रारूप सटीक विश्लेषण प्रदान करते हैं। Rockwell .L5X फाइलें समर्थित हैं।",
    "warning-title": "बाइनरी फ़ाइल सीमाएं",
    "warning-desc": ".gxw या .ap15 जैसी बाइनरी फाइलें सीधे पढ़ना कठिन है। कृपया स्क्रीनशॉट या PDF का उपयोग करें।",
    "form-title": "इमेज / PDF / डेटा अपलोड",
    "upload-main": "फ़ाइल चुनें या यहाँ खींचें",
    "upload-sub": "इमेज, PDF, .L5X, .xgm, .txt आदि समर्थित हैं।",
    "label-plc": "PLC निर्माता / मॉडल",
    "label-goal": "विश्लेषण का लक्ष्य",
    "opt-general": "सामान्य लॉजिक व्याख्या",
    "opt-debug": "बग पहचानें और सुधार सुझाएं",
    "opt-optimize": "लॉजिक अनुकूलन और दक्षता",
    "label-text": "टेक्स्ट कोड (IL, ST आदि) या अतिरिक्त जानकारी",
    "btn-analyze": "अब Google AI के साथ विश्लेषण करें",
    "preview-title": "प्रॉम्प्ट पूर्वावलोकन",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "गोपनीयता",
    "footer-contact": "संपर्क"
  }
};

let currentLang = 'ko';

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('current-lang').innerText = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });
  // Update placeholders
  document.getElementById('plc-type').placeholder = lang === 'ko' ? "예: LS Electric, Mitsubishi, Siemens, Rockwell" : "e.g., LS Electric, Mitsubishi, Siemens, Rockwell";
  document.getElementById('ladder-logic').placeholder = translations[lang]['label-text'];
  
  // Re-render preview with new language instructions
  if (typeof updatePreview === 'function') updatePreview();
}

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const plcTypeInput = document.getElementById('plc-type');
  const analysisGoalSelect = document.getElementById('analysis-goal');
  const ladderLogicTextarea = document.getElementById('ladder-logic');
  const promptPreview = document.getElementById('prompt-preview');
  const aiSearchBtn = document.getElementById('ai-search-btn');
  const fileInput = document.getElementById('file-input');
  const dropZone = document.getElementById('drop-zone');
  const uploadPreview = document.getElementById('upload-preview');

  let currentFile = null;

  // Theme Logic
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.className = savedTheme;
  themeToggle.addEventListener('click', () => {
    const newTheme = html.className === 'light' ? 'dark' : 'light';
    html.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });

  window.updatePreview = (fileName = '', isBinary = false) => {
    const plcType = plcTypeInput.value || '[PLC Model]';
    const goalValue = analysisGoalSelect.value;
    const additionalLogic = ladderLogicTextarea.value;

    const t = translations[currentLang];
    let goalText = t[`opt-${goalValue}`] || t['opt-general'];

    let dataDescription = '';
    if (isBinary || (currentFile && ['jpg', 'jpeg', 'png', 'pdf'].includes(currentFile.name.split('.').pop().toLowerCase()))) {
      dataDescription = `[Visual Analysis Request]\nAttached file: ${fileName || currentFile?.name}. Please visually interpret the contacts, coils, and connections.`;
    } else {
      dataDescription = `[Code Analysis Request]\n"""\n${additionalLogic || 'File content or code goes here.'}\n"""`;
    }

    const promptLanguageInstruction = currentLang === 'ko' ? "결과는 한국어로 작성해주세요." : `Please provide the analysis in ${currentLang.toUpperCase()} language.`;

    const generatedPrompt = `### Analysis Goal:
${goalText}

### Data Source Information:
${dataDescription}

${additionalLogic && isBinary ? `### Additional User Notes:\n"${additionalLogic}"\n` : ''}

### Important: PLC Ladder Logic vs General Programming
Understand that PLC logic is cyclic (Scan-based), uses electrical self-holding concepts, and maps to physical I/O. Consider Edge detection (P) and mechanical interlocks carefully.

### Gemini Analysis Guidelines:
- Precisely decode visual/textual contacts and functional blocks.
- Check for physical interlocks and safety protection.
- Identify bugs like double coils or inefficient scans.
- State that AI analysis is an assistant and human verification is mandatory.

${promptLanguageInstruction}`;

    promptPreview.textContent = generatedPrompt;
  };

  const handleFiles = (files) => {
    const file = files[0];
    if (!file) return;
    currentFile = file;
    const ext = file.name.split('.').pop().toLowerCase();
    const isImage = ['jpg', 'jpeg', 'png'].includes(ext);
    const isPdf = ext === 'pdf';
    const isTextBased = ['txt', 'csv', 'awl', 'st', 'l5x', 'xgm', 'xml'].includes(ext);

    if (ext === 'xgm') plcTypeInput.value = 'LS Electric XG5000';
    if (ext.startsWith('gxw')) plcTypeInput.value = 'Mitsubishi GX Works';
    if (ext === 'l5x') plcTypeInput.value = 'Rockwell Studio 5000';

    if (isImage || isPdf) {
      uploadPreview.innerHTML = `<div class="text-center"><i class="fas ${isImage ? 'fa-image' : 'fa-file-pdf'} text-4xl mb-3 ${isImage ? 'text-blue-500' : 'text-red-500'}"></i><p class="font-bold">${file.name}</p><button id="remove-file" class="mt-4 text-xs text-red-500 underline">Remove</button></div>`;
      uploadPreview.classList.remove('hidden');
      updatePreview(file.name, true);
    } else if (isTextBased) {
      const reader = new FileReader();
      reader.onload = (e) => {
        ladderLogicTextarea.value = e.target.result;
        uploadPreview.innerHTML = `<div class="text-center"><i class="fas fa-file-code text-4xl mb-3 text-emerald-500"></i><p class="font-bold">${file.name}</p><button id="remove-file" class="mt-4 text-xs text-red-500 underline">Remove</button></div>`;
        uploadPreview.classList.remove('hidden');
        updatePreview(file.name, false);
      };
      reader.readAsText(file);
    }
    setTimeout(() => {
      document.getElementById('remove-file')?.addEventListener('click', (e) => {
        e.stopPropagation(); currentFile = null; fileInput.value = ''; uploadPreview.classList.add('hidden'); ladderLogicTextarea.value = ''; updatePreview();
      });
    }, 100);
  };

  [plcTypeInput, analysisGoalSelect, ladderLogicTextarea].forEach(el => {
    el.addEventListener('input', () => updatePreview());
  });

  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
  dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20'));
  dropZone.addEventListener('drop', (e) => { e.preventDefault(); dropZone.classList.remove('border-blue-500', 'bg-blue-50', 'dark:bg-blue-900/20'); handleFiles(e.dataTransfer.files); });

  aiSearchBtn.addEventListener('click', () => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(promptPreview.textContent)}`, '_blank');
  });

  // Init
  setLanguage('ko');
});
