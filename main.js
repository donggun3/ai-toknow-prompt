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
    "contact-title": "제휴 및 분석 도구 협력 문의",
    "contact-subtitle": "PLC 분석 솔루션 도입이나 기술 제휴에 관심이 있으시다면 메시지를 남겨주세요.",
    "form-name": "성함 / 기업명",
    "form-email": "이메일 주소",
    "form-message": "문의 내용",
    "btn-submit": "문의 보내기",
    "footer-copy": "© 2026 Ladder Analyst. Multi-modal Gemini 최적화.",
    "footer-privacy": "개인정보처리방침",
    "footer-contact": "문의하기",
    // Prompt translations
    "prompt-goal-header": "### 분석 목적:",
    "prompt-source-header": "### 데이터 소스 안내:",
    "prompt-visual-req": "[시각적 분석 요청]\n첨부된 파일은 시각적 자료(이미지/PDF)입니다. 다이어그램의 접점, 코일, 선로 연결 상태를 정밀하게 판독하여 분석하세요.",
    "prompt-code-req": "[코드 데이터 분석 요청]",
    "prompt-diff-header": "### 중요: PLC 래더 로직과 일반 프로그래밍(C, Python)의 차이 이해",
    "prompt-diff-1": "1. 순환(Scan) 구조: C/Python은 순차적 실행 후 종료되지만, PLC는 입력-실행-출력 과정을 ms 단위로 무한 반복합니다. 한 스캔 내에서 모든 조건이 동시에 평가되는 병렬적 특성을 고려하세요.",
    "prompt-diff-2": "2. 자기유지(Self-Holding): 단순히 변수에 값을 대입하는 것이 아니라, 접점의 물리적 연결 상태를 유지하는 '전기적 자기유지' 관점으로 로직을 해석해야 합니다.",
    "prompt-diff-3": "3. 상승 엣지(P): 일반적인 if문과 달리 신호가 OFF에서 ON이 되는 '순간'의 딱 한 스캔만 동작하는 특수성을 정확히 판독하세요.",
    "prompt-diff-4": "4. 물리적 I/O: 모든 변수는 실제 기계 장치와 연결된 주소입니다. 소프트웨어 버그가 아닌 기계적 충돌이나 안전 인터록 관점에서 분석하세요.",
    "prompt-guide-header": "### Gemini 분석 가이드라인:",
    "prompt-guide-1": "- 시각적/텍스트 판독: 다이어그램이나 IL/ST 코드의 접점, 코일, 기능 블록을 정밀하게 해석하세요.",
    "prompt-guide-2": "- 물리적 인터록 체크: 'A가 동작할 때 B가 절대 켜지면 안 되는' 물리적 보호 로직(Interlock)이 설계되었는지 검토하세요.",
    "prompt-guide-3": "- 오류 진단: 중복 코일(Double Coil) 사용이나 스캔 타임 지연을 유발할 수 있는 비효율적인 루프를 찾아내세요.",
    "prompt-guide-4": "- 안전 권고: AI 분석은 보조 수단이며, 실제 장비 가동 전 반드시 숙련된 엔지니어가 시뮬레이션 및 현장 테스트를 수행해야 함을 명시하세요.",
    "prompt-lang-req": "결과는 한국어로 작성해주세요."
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
    "contact-title": "Partnership & Tool Cooperation",
    "contact-subtitle": "If you are interested in PLC analysis solutions or technical partnerships, please leave a message.",
    "form-name": "Name / Company",
    "form-email": "Email Address",
    "form-message": "Inquiry Content",
    "btn-submit": "Send Inquiry",
    "footer-copy": "© 2026 Ladder Analyst. Optimized for Multi-modal Gemini.",
    "footer-privacy": "Privacy Policy",
    "footer-contact": "Contact Us",
    "prompt-goal-header": "### Analysis Goal:",
    "prompt-source-header": "### Data Source Information:",
    "prompt-visual-req": "[Visual Analysis Request]\nThe attached file is visual material (Image/PDF). Please precisely decode the contacts, coils, and connections in the diagram.",
    "prompt-code-req": "[Code Data Analysis Request]",
    "prompt-diff-header": "### Important: Understanding the difference between PLC Ladder Logic and General Programming (C, Python)",
    "prompt-diff-1": "1. Cyclic (Scan) Structure: C/Python executes sequentially and ends, but PLC repeats the input-execute-output process infinitely in ms units. Consider the parallel characteristic where all conditions are evaluated simultaneously within one scan.",
    "prompt-diff-2": "2. Self-Holding: It's not just assigning values to variables; you must interpret logic from the perspective of 'electrical self-holding' that maintains the physical connection state of contacts.",
    "prompt-diff-3": "3. Rising Edge (P): Unlike a general 'if' statement, accurately read the specificity that it only operates for exactly one scan at the 'moment' the signal turns from OFF to ON.",
    "prompt-diff-4": "4. Physical I/O: All variables are physical addresses connected to actual machine devices. Analyze from the perspective of mechanical collisions or safety interlocks rather than software bugs.",
    "prompt-guide-header": "### Gemini Analysis Guidelines:",
    "prompt-guide-1": "- Visual/Textual Decoding: Precisely interpret contacts, coils, and functional blocks in the diagram or IL/ST code.",
    "prompt-guide-2": "- Physical Interlock Check: Review if physical protection logic (Interlock) such as 'B must never turn on when A is operating' is designed.",
    "prompt-guide-3": "- Error Diagnosis: Identify the use of double coils or inefficient loops that could cause scan time delays.",
    "prompt-guide-4": "- Safety Recommendation: State that AI analysis is an assistant and a skilled engineer must perform simulation and field tests before actual equipment operation.",
    "prompt-lang-req": "Please provide the analysis results in English."
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
    "contact-title": "Liên hệ hợp tác & Công cụ",
    "contact-subtitle": "Nếu bạn quan tâm đến giải pháp phân tích PLC hoặc hợp tác kỹ thuật, vui lòng để lại lời nhắn.",
    "form-name": "Họ tên / Công ty",
    "form-email": "Địa chỉ Email",
    "form-message": "Nội dung liên hệ",
    "btn-submit": "Gửi yêu cầu",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "Bảo mật",
    "footer-contact": "Liên hệ",
    "prompt-goal-header": "### Mục đích phân tích:",
    "prompt-source-header": "### Thông tin nguồn dữ liệu:",
    "prompt-visual-req": "[Yêu cầu phân tích trực quan]\nTệp đính kèm là tài liệu trực quan (Hình ảnh/PDF). Vui lòng giải mã chính xác các tiếp điểm, cuộn dây và kết nối trong biểu đồ.",
    "prompt-code-req": "[Yêu cầu phân tích dữ liệu mã]",
    "prompt-diff-header": "### Quan trọng: Hiểu sự khác biệt giữa PLC Ladder Logic và Lập trình thông thường (C, Python)",
    "prompt-diff-1": "1. Cấu trúc vòng quét (Scan): C/Python thực thi tuần tự và kết thúc, nhưng PLC lặp lại quy trình nhập-thực thi-xuất vô hạn trong đơn vị ms. Hãy xem xét đặc tính song song nơi tất cả các điều kiện được đánh giá đồng thời trong một vòng quét.",
    "prompt-diff-2": "2. Tự duy trì (Self-Holding): Không chỉ là gán giá trị cho biến; bạn phải giải thích logic từ góc độ 'tự duy trì điện' để duy trì trạng thái kết nối vật lý của các tiếp điểm.",
    "prompt-diff-3": "3. Cạnh lên (P): Khác với câu lệnh 'if' thông thường, hãy đọc chính xác đặc thù là nó chỉ hoạt động trong đúng một vòng quét tại 'thời điểm' tín hiệu chuyển từ OFF sang ON.",
    "prompt-diff-4": "4. I/O Vật lý: Tất cả các biến là địa chỉ vật lý được kết nối với thiết bị máy móc thực tế. Phân tích từ góc độ va chạm cơ học hoặc khóa liên động an toàn thay vì lỗi phần mềm.",
    "prompt-guide-header": "### Hướng dẫn phân tích của Gemini:",
    "prompt-guide-1": "- Giải mã trực quan/văn bản: Giải thích chính xác các tiếp điểm, cuộn dây và các khối chức năng trong biểu đồ hoặc mã IL/ST.",
    "prompt-guide-2": "- Kiểm tra khóa liên động vật lý: Xem xét liệu logic bảo vệ vật lý (Interlock) như 'B tuyệt đối không được bật khi A đang hoạt động' có được thiết kế hay không.",
    "prompt-guide-3": "- Chẩn đoán lỗi: Xác định việc sử dụng cuộn dây kép (Double Coil) hoặc các vòng lặp không hiệu quả có thể gây trễ thời gian quét.",
    "prompt-guide-4": "- Khuyến nghị an toàn: Nêu rõ rằng phân tích AI là một công cụ hỗ trợ và kỹ sư lành nghề phải thực hiện mô phỏng và kiểm tra thực địa trước khi vận hành thiết bị thực tế.",
    "prompt-lang-req": "Vui lòng cung cấp kết quả phân tích bằng tiếng Việt."
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
    "contact-title": "Asociación y Cooperación",
    "contact-subtitle": "Si está interesado en soluciones de análisis de PLC o asociaciones técnicas, deje un mensaje.",
    "form-name": "Nombre / Empresa",
    "form-email": "Correo electrónico",
    "form-message": "Contenido de la consulta",
    "btn-submit": "Enviar consulta",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "Privacidad",
    "footer-contact": "Contacto",
    "prompt-goal-header": "### Objetivo del análisis:",
    "prompt-source-header": "### Información de la fuente de datos:",
    "prompt-visual-req": "[Solicitud de análisis visual]\nEl archivo adjunto es material visual (Imagen/PDF). Por favor, decodifique con precisión los contactos, bobinas y conexiones en el diagrama.",
    "prompt-code-req": "[Solicitud de análisis de datos de código]",
    "prompt-diff-header": "### Importante: Comprensión de la diferencia entre la lógica de escalera de PLC y la programación general (C, Python)",
    "prompt-diff-1": "1. Estructura cíclica (Scan): C/Python se ejecuta secuencialmente y finaliza, pero el PLC repite el proceso de entrada-ejecución-salida infinitamente en unidades de ms. Considere la característica paralela donde todas las condiciones se evalúan simultáneamente dentro de un ciclo.",
    "prompt-diff-2": "2. Auto-mantenimiento (Self-Holding): No es solo asignar valores a variables; debe interpretar la lógica desde la perspectiva del 'auto-mantenimiento eléctrico' que mantiene el estado de conexión física de los contactos.",
    "prompt-diff-3": "3. Flanco ascendente (P): A diferencia de una sentencia 'if' general, lea con precisión la especificidad de que solo opera durante exactamente un ciclo en el 'momento' en que la señal pasa de OFF a ON.",
    "prompt-diff-4": "4. E/S física: Todas las variables son direcciones físicas conectadas a dispositivos de máquina reales. Analice desde la perspectiva de colisiones mecánicas o enclavamientos de seguridad en lugar de errores de software.",
    "prompt-guide-header": "### Directrices de análisis de Gemini:",
    "prompt-guide-1": "- Decodificación visual/textual: Interprete con precisión contactos, bobinas y bloques funcionales en el diagrama o código IL/ST.",
    "prompt-guide-2": "- Verificación de enclavamiento físico: Revise si se ha diseñado una lógica de protección física (Interlock) como 'B nunca debe encenderse cuando A está operando'.",
    "prompt-guide-3": "- Diagnóstico de errores: Identifique el uso de bobinas dobles o bucles ineficientes que podrían causar retrasos en el tiempo de escaneo.",
    "prompt-guide-4": "- Recomendación de seguridad: Indique que el análisis de IA es un asistente y un ingeniero calificado debe realizar simulaciones y pruebas de campo antes de la operación real del equipo.",
    "prompt-lang-req": "Por favor, proporcione los resultados del análisis en español."
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
    "contact-title": "Partnerschaft & Kooperation",
    "contact-subtitle": "Bei Interesse an SPS-Analyselösungen oder technischen Partnerschaften hinterlassen Sie uns bitte eine Nachricht.",
    "form-name": "Name / Unternehmen",
    "form-email": "E-Mail-Adresse",
    "form-message": "Inhalt der Anfrage",
    "btn-submit": "Anfrage senden",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "Datenschutz",
    "footer-contact": "Kontakt",
    "prompt-goal-header": "### Analyseziel:",
    "prompt-source-header": "### Informationen zur Datenquelle:",
    "prompt-visual-req": "[Anfrage zur visuellen Analyse]\nDie beigefügte Datei ist visuelles Material (Bild/PDF). Bitte dekodieren Sie die Kontakte, Spulen und Verbindungen im Diagramm präzise.",
    "prompt-code-req": "[Anfrage zur Code-Datenanalyse]",
    "prompt-diff-header": "### Wichtig: Unterschied zwischen SPS-Ladder-Logik und allgemeiner Programmierung (C, Python) verstehen",
    "prompt-diff-1": "1. Zyklische (Scan) Struktur: C/Python wird sequenziell ausgeführt und endet, aber die SPS wiederholt den Eingabe-Ausführung-Ausgabe-Prozess unendlich in ms-Einheiten. Berücksichtigen Sie die parallele Charakteristik, bei der alle Bedingungen gleichzeitig innerhalb eines Scans ausgewertet werden.",
    "prompt-diff-2": "2. Selbsthaltung (Self-Holding): Es geht nicht nur darum, Variablen Werte zuzuweisen; Sie müssen die Logik aus der Perspektive der 'elektrischen Selbsthaltung' interpretieren, die den physischen Verbindungsstatus von Kontakten aufrechterhält.",
    "prompt-diff-3": "3. Steigende Flanke (P): Im Gegensatz zu einer allgemeinen 'if'-Anweisung lesen Sie genau die Besonderheit, dass sie nur für genau einen Scan in dem 'Moment' arbeitet, in dem das Signal von OFF auf ON wechselt.",
    "prompt-diff-4": "4. Physische E/A: Alle Variablen sind physische Adressen, die mit tatsächlichen Maschinengeräten verbunden sind. Analysieren Sie aus der Perspektive von mechanischen Kollisionen oder Sicherheitsverriegelungen statt aus Software-Fehlern.",
    "prompt-guide-header": "### Gemini Analyse-Richtlinien:",
    "prompt-guide-1": "- Visuelle/Textuelle Dekodierung: Interpretieren Sie Kontakte, Spulen und Funktionsblöcke im Diagramm oder IL/ST-Code präzise.",
    "prompt-guide-2": "- Überprüfung der physischen Verriegelung: Überprüfen Sie, ob eine physische Schutzlogik (Interlock) wie 'B darf niemals eingeschaltet werden, wenn A in Betrieb ist' entworfen wurde.",
    "prompt-guide-3": "- Fehlerdiagnose: Identifizieren Sie die Verwendung von Doppelspulen oder ineffizienten Schleifen, die Scanzeitverzögerungen verursachen könnten.",
    "prompt-guide-4": "- Sicherheitsempfehlung: Geben Sie an, dass die KI-Analyse ein Assistent ist und ein qualifizierter Ingenieur vor dem eigentlichen Gerätebetrieb Simulationen und Feldtests durchführen muss.",
    "prompt-lang-req": "Bitte geben Sie die Analyseergebnisse auf Deutsch an."
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
    "contact-title": "Partenariat & Coopération",
    "contact-subtitle": "Si vous êtes intéressé par des solutions d'analyse PLC ou des partenariats techniques, laissez un message.",
    "form-name": "Nom / Entreprise",
    "form-email": "Adresse Email",
    "form-message": "Contenu de la demande",
    "btn-submit": "Envoyer la demande",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "Confidentialité",
    "footer-contact": "Contact",
    "prompt-goal-header": "### Objectif de l'analyse :",
    "prompt-source-header": "### Informations sur la source de données :",
    "prompt-visual-req": "[Demande d'analyse visuelle]\nLe fichier joint est un support visuel (Image/PDF). Veuillez décoder précisément les contacts, bobines et connexions dans le diagramme.",
    "prompt-code-req": "[Demande d'analyse de données de code]",
    "prompt-diff-header": "### Important : Comprendre la différence entre la logique Ladder PLC et la programmation générale (C, Python)",
    "prompt-diff-1": "1. Structure cyclique (Scan) : C/Python s'exécute séquentiellement et se termine, mais le PLC répète le processus entrée-exécution-sortie indéfiniment en unités de ms. Considérez la caractéristique parallèle où toutes les conditions sont évaluées simultanément au sein d'un cycle.",
    "prompt-diff-2": "2. Auto-maintien (Self-Holding) : Il ne s'agit pas seulement d'assigner des valeurs à des variables ; vous devez interpréter la logique sous l'angle de l'auto-maintien électrique qui préserve l'état de connexion physique des contacts.",
    "prompt-diff-3": "3. Front montant (P) : Contrairement à une instruction 'if' générale, lisez avec précision la spécificité qu'il ne fonctionne que pendant exactement un cycle au 'moment' où le signal passe de OFF à ON.",
    "prompt-diff-4": "4. E/S physiques : Toutes les variables sont des adresses physiques connectées à des dispositifs machine réels. Analysez du point de vue des collisions mécaniques ou des verrouillages de sécurité plutôt que des bugs logiciels.",
    "prompt-guide-header": "### Directives d'analyse Gemini :",
    "prompt-guide-1": "- Décodage visuel/textuel : Interprétez précisément les contacts, bobines et blocs fonctionnels dans le diagramme ou le code IL/ST.",
    "prompt-guide-2": "- Vérification du verrouillage physique : Vérifiez si une logique de protection physique (Interlock) telle que 'B ne doit jamais s'allumer quand A fonctionne' est conçue.",
    "prompt-guide-3": "- Diagnostic d'erreurs : Identifiez l'utilisation de doubles bobines ou de boucles inefficaces qui pourraient causer des retards de temps de cycle.",
    "prompt-guide-4": "- Recommandation de sécurité : Indiquez que l'analyse par IA est un assistant et qu'un ingénieur qualifié doit effectuer des simulations et des tests sur le terrain avant l'exploitation réelle de l'équipement.",
    "prompt-lang-req": "Veuillez fournir les résultats de l'analyse en français."
  },
  hi: {
    badge: "मल्टी-모डल PLC विश्लेषण",
    "hero-title": "AI द्वारा संचालित लैडर आरेख और PLC विश्लेषण प्रॉम्प्ट + टिप्स",
    "hero-subtitle": "Gemini की विज़ुअल लॉजिक व्याख्या का लाभ उठाने के लिए स्क्रीन कैप्चर या PDF अपलोड करें।",
    "guide-title": "प्रभावी विश्लेषण के लिए मार्गदर्शिका",
    "tip1-title": "इमेज और PDF प्रारूप (सबसे प्रभावी)",
    "tip1-desc": "TIA पोर्टल, GX Works या PDF प्रिंट अपलोड करें ताकि Gemini विज़ुअल विश्लेषण कर सके।",
    "tip2-title": "टेक्स्ट-आधारित कोड विश्लेषण",
    "tip2-desc": "IL और ST प्रारूप सटीक विश्लेषण प्रदान करते हैं। Rockwell .L5X फाइलें समर्थित हैं।",
    "warning-title": "बाइनरी फ़ाइल सीमाएं",
    "warning-desc": ".gxw या .ap15 जैसी बाइनरी फाइलें सीधे पढ़ना कठिन है। कृपया स्क्रीनशॉट या PDF का उपयोग करें।",
    "form-title": "इमेज / PDF / 데이터 अपलोड",
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
    "contact-title": "साझेदारी और सहयोग",
    "contact-subtitle": "यदि आप PLC विश्लेषण समाधान या तकनीकी साझेदारी में रुचि रखते हैं, तो कृपया एक संदेश छोड़ें।",
    "form-name": "नाम / कंपनी",
    "form-email": "ईमेल पता",
    "form-message": "पूछताछ की सामग्री",
    "btn-submit": "पूछताछ भेजें",
    "footer-copy": "© 2026 Ladder Analyst.",
    "footer-privacy": "गोपनीयता",
    "footer-contact": "संपर्क",
    "prompt-goal-header": "### विश्लेषण का लक्ष्य:",
    "prompt-source-header": "### 데이터 स्रोत की जानकारी:",
    "prompt-visual-req": "[दृश्य विश्लेषण अनुरोध]\nसंलग्न फ़ाइल दृश्य सामग्री (इमेज/PDF) है। कृपया आरेख में संपर्क, कॉइल और कनेक्शन को सटीक रूप से डिको드 करें।",
    "prompt-code-req": "[कोड डेटा विश्लेषण अनुरोध]",
    "prompt-diff-header": "### महत्वपूर्ण: PLC लैडर लॉजिक और सामान्य प्रोग्रामिंग (C, Python) के बीच अंतर को समझना",
    "prompt-diff-1": "1. चक्रीय (स्कैन) संरचना: C/Python क्रमिक रूप से निष्पादित होता है और समाप्त हो जाता है, लेकिन PLC मिलीसेकंड इकाइयों में इनपुट-निष्पादित-आउटपुट प्रक्रिया को असीमित रूप से दोहराता है। उस समानांतर विशेषता पर विचार करें जहां एक स्कैन के भीतर सभी स्थितियों का एक साथ मूल्यांकन किया जाता है।",
    "prompt-diff-2": "2. सेल्फ-होल्डिंग: यह केवल वेरिएबल्स को मान सौंपना नहीं है; आपको 'विद्युत सेल्फ-होल्डिंग' के परिप्रेक्ष्य से लॉजिक की व्याख्या करनी चाहिए जो संपर्कों की भौतिक कनेक्शन स्थिति को बनाए रखती है।",
    "prompt-diff-3": "3. राइजिंग एज (P): एक सामान्य 'if' स्टेटमेंट के विपरीत, उस विशिष्टता को सटीक रूप से पढ़ें कि यह सिग्नल के OFF से ON होने के 'क्षण' पर ठीक एक स्कैन के लिए संचालित होता है।",
    "prompt-diff-4": "4. भौतिक I/O: सभी वेरिएबल्स वास्तविक मशीन उपकरणों से जुड़े भौतिक पते हैं। सॉफ्टवेयर बग के बजाय यांत्रिक टकराव या सुरक्षा इंटरलॉक के परिप्रेक्ष्य से विश्लेषण करें।",
    "prompt-guide-header": "### Gemini विश्लेषण दिशानिर्देश:",
    "prompt-guide-1": "- दृश्य/पाठ्य डिकोडिंग: आरेख या IL/ST कोड में संपर्कों, कॉइल और कार्यात्मक ब्लॉकों की सटीक व्याख्या करें।",
    "prompt-guide-2": "- भौतिक इंटरलॉक जांच: समीक्षा करें कि क्या भौतिक सुरक्षा लॉजिक (Interlock) जैसे 'A के संचालन के समय B को कभी चालू नहीं होना चाहिए' डिज़ाइन किया गया है।",
    "prompt-guide-3": "- त्रुटि निदान: डबल कॉइल के उपयोग या अक्षम लूप की पहचान करें जो स्कैन समय में देरी का कारण बन सकते हैं।",
    "prompt-guide-4": "- सुरक्षा अनुशंसा: बताएं कि AI विश्लेषण एक सहायक है और एक कुशल इंजीनियर को वास्तविक उपकरण संचालन से पहले सिमुलेशन और फील्ड परीक्षण करना चाहिए।",
    "prompt-lang-req": "कृपया विश्लेषण परिणाम हिंदी में प्रदान करें।"
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
  
  const t = translations[lang];
  document.getElementById('plc-type').placeholder = lang === 'ko' ? "예: LS Electric, Mitsubishi, Siemens, Rockwell" : "e.g., LS Electric, Mitsubishi, Siemens, Rockwell";
  document.getElementById('ladder-logic').placeholder = t['label-text'];
  
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');
  
  if (nameInput) nameInput.placeholder = t['form-name'];
  if (emailInput) emailInput.placeholder = "email@example.com";
  if (messageTextarea) messageTextarea.placeholder = t['form-message'];

  if (typeof updatePreview === 'function') updatePreview();
  document.getElementById('lang-menu').classList.add('hidden');
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
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  let currentFile = null;

  langBtn.addEventListener('mouseenter', () => { langMenu.classList.remove('hidden'); });
  document.addEventListener('click', () => { langMenu.classList.add('hidden'); });

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
    const fileExt = currentFile?.name.split('.').pop().toLowerCase();
    const isVisualFile = ['jpg', 'jpeg', 'png', 'pdf'].includes(fileExt);

    if (isBinary || isVisualFile) {
      dataDescription = t['prompt-visual-req'].replace('${fileName || currentFile?.name}', fileName || currentFile?.name || 'file');
    } else {
      dataDescription = `${t['prompt-code-req']}\n"""\n${additionalLogic || '...'}\n"""`;
    }

    const generatedPrompt = `${t['prompt-goal-header']}
${goalText}

${t['prompt-source-header']}
${dataDescription}

${additionalLogic && (isBinary || isVisualFile) ? `### Additional User Notes:\n"${additionalLogic}"\n` : ''}

${t['prompt-diff-header']}
${t['prompt-diff-1']}
${t['prompt-diff-2']}
${t['prompt-diff-3']}
${t['prompt-diff-4']}

${t['prompt-guide-header']}
${t['prompt-guide-1']}
${t['prompt-guide-2']}
${t['prompt-guide-3']}
${t['prompt-guide-4']}

${t['prompt-lang-req']}`;

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

  setLanguage('ko');
});
