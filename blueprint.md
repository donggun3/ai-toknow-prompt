# **Project Blueprint: Ladder Logic Analysis Prompt Generator**

## **1. Overview**
This application is an advanced prompt generator for PLC Ladder Diagrams, optimized for Gemini's multi-modal capabilities. It supports image/PDF uploads for visual analysis and structured text/XML for deep logic interpretation.

## **2. Detailed Project Outline**
- **Core Technology:** HTML5, Tailwind CSS, Vanilla JS.
- **Multi-modal Support:**
  - **Visual Logic:** Support for Images (PNG, JPG) and PDFs (Ladder printouts, HMI captures).
  - **Structured Logic:** Support for XML-based exports (Rockwell .L5X) and Instruction Lists.
- **AdSense Approval Strategy (Fixed "No Content" issue):**
  - **Static Content Migration:** Moving text from JS-based translations to static HTML to ensure AdSense crawlers can index the content immediately.
  - **Content Expansion:** Adding robust "About", "Supported Brands", and "Knowledge Base" sections to provide high-value publisher content.
  - **Navigation & Policy:** Ensuring all essential pages (About, Contact, Terms, Privacy) are present and correctly linked.
- **Privacy & Security:**
  - **Client-Side Processing:** Explicitly stating that files are not uploaded to servers.
  - **GDPR/CCPA Compliance:** Updated privacy policy and cookie notice.

## **3. Implementation Steps**
1.  **HTML Enrichment:** Move all primary Korean/English text into the HTML structure as default content.
2.  **New Sections:** Add "About", "Supported Brands", and "Blog-style Articles" to `index.html`.
3.  **Essential Pages:** Create `about.html`, `terms.html`, and `contact.html`.
4.  **Link Verification:** Fix all footer links to point to actual pages.
5.  **Ad Placement Review:** Ensure ad slots are balanced with content to avoid "Ad-Heavy" flags.

## **4. Maintenance & Verification**
- **Crawler Test:** Verify content is visible in "View Source".
- **Responsive Design:** Ensure the new sections look great on mobile.
- **Functional Validation:** Test the prompt generator after HTML changes.
