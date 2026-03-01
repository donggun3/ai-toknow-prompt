# **Project Blueprint: Ladder Logic Analysis Prompt Generator**

## **1. Overview**
This application is an advanced prompt generator for PLC Ladder Diagrams, optimized for Gemini's multi-modal capabilities. It supports image/PDF uploads for visual analysis and structured text/XML for deep logic interpretation.

## **2. Detailed Project Outline**
- **Core Technology:** HTML5, Tailwind CSS, Vanilla JS.
- **Multi-modal Support:**
  - **Visual Logic:** Support for Images (PNG, JPG) and PDFs (Ladder printouts, HMI captures).
  - **Structured Logic:** Support for XML-based exports (Rockwell .L5X) and Instruction Lists.
  - **Hybrid Input:** Combining file metadata with user-provided Boolean logic.
- **Visual Design:**
  - **Spacious & Informative:** Clear instructions on which file types work best.
  - **AdSense Ready:** Strategic placement of ad slots.
  - **Enhanced Upload Zone:** Visual indicators for Image/PDF/Text support.
- **Expert Knowledge Updates:**
  - **Visual over Binary:** Explicitly advising users to capture screens or print to PDF for binary files (.gxw, .ap15).
  - **XML Support:** Highlighting .L5X as a superior text-based format for AI.

## **4. Bug Fixes & Maintenance**
- **Disqus Script Resilience:** Fixed a `TypeError` where `appendChild` was called on a null object by adding a fallback to `document.documentElement` if `document.head` or `document.body` are not yet available during parsing.
- **Error Handling:** Added defensive checks for external script injections.
- **Verification Protocol (Mandatory):** 작업을 수행한 후 즉시 "완료"라고 보고하지 않습니다. 반드시 실제 사이트를 실행하여 모든 기능과 동작이 설계대로 정상 작동하는지(런타임 에러, 레이아웃 깨짐, 기능 미동작 등)를 철저히 검증합니다. 모든 확인 절차를 거쳐 문제가 없음을 확신할 때만 최종적으로 완료를 알립니다.
