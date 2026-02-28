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

## **3. Implementation Plan (Current Task)**
### **Step 1: UI Update (index.html)**
- Update the "Expert Tips" section with the specific text provided by the user regarding Image/PDF effectiveness.
- Expand the File Upload zone to accept `.jpg`, `.png`, `.pdf`, `.l5x`, and other PLC formats.
- Update the "File Upload" instructions to clarify binary file limitations.

### **Step 2: Logic Enhancement (main.js)**
- Update `handleFiles` to handle Images and PDFs (providing a summary/placeholder in the textarea for the prompt).
- Refine the generated prompt to tell the AI to "visually analyze the attached image/PDF" or "interpret the provided XML/Text."
- Ensure the prompt highlights the difference between visual capture and structured code.

### **Step 3: Visual Polish (style.css)**
- Add icons for Image and PDF in the upload zone.
- Maintain the spacious, high-readability layout.
