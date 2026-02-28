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

  // --- Language Logic ---
  // Open on Hover (MouseEnter) and keep it open
  langBtn.addEventListener('mouseenter', () => {
    langMenu.classList.remove('hidden');
  });

  // Close only on Click (anywhere)
  document.addEventListener('click', () => {
    langMenu.classList.add('hidden');
  });

  // Prevent closing when clicking inside the menu (optional, but usually clicking an item should close it)
  // Since setLanguage already calls .add('hidden'), we are good.

  // --- Theme Logic ---
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
