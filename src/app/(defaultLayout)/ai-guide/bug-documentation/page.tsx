import React from 'react';
import Banner from '../../../Components/AiGuide/banner';
import ExplainGuide from '../../../Components/AiGuide/explain-guide';
import AIGuideArticle from '../../../Components/AiGuide/AIGuideArticle';
const data = {
link:'bug-documentations',
    BannerSection:{
title: "Generate Perfect Bug Tickets in Seconds with AI",
description: "Stop struggling with unclear or inconsistent bug reports. This guide from Evalon QA shows you how to leverage AI, including ChatGPT, along with screenshots and voice narration, to instantly generate well-structured, actionable, and standardized bug tickets. Learn how to streamline your reporting workflow, reduce manual effort, and ensure your team receives precise, reproducible, and professional bug documentation every time."

 

},
explainguide:{
title: "Inside the AI Bug Documentation Guide",
description: "Save time and improve clarity for your development team with AI-assisted bug reporting. This guide from Evalon QA demonstrates how to use AI, including ChatGPT, with screenshots and voice narration to instantly generate structured, actionable, and consistent bug tickets. Learn how to streamline reporting, reduce manual effort, and ensure every bug is documented clearly and professionally for faster resolution.",
features: [
  {
    icon: "bi bi-image",
    title: "Screenshot-to-Description",
    description:
      "Provide screenshots and let AI generate precise, contextual descriptions of visual bugs or UI issues instantly."
  },
  {
    icon: "bi bi-mic",
    title: "Voice Narration to Ticket",
    description:
      "Verbally explain bug reproduction steps and observations, and have AI transcribe them into structured, actionable tickets."
  },
  {
    icon: "bi bi-layout-text-window-reverse",
    title: "Customizable Formatting",
    description:
      "Instruct AI to generate tickets in your preferred format, such as Steps to Reproduce, Expected vs. Observed Results, and Environment details."
  },
  {
    icon: "bi bi-check2-square",
    title: "Improved Consistency",
    description:
      "Ensure every bug report follows a standardized, clear structure, reducing ambiguity and simplifying developer handoff."
  },
  {
    icon: "bi bi-lightning-charge",
    title: "Prompt Engineering Tips",
    description:
      "Learn best practices for crafting effective prompts to get accurate, detailed, and actionable output from AI."
  }
]




} , 
AIArticleContent: {
  html: `
    <h2 class="text-white mb-4 fw-bold">Generate Perfect Bug Tickets in Seconds with AI</h2>

    <p>
      Clear, concise, and consistent bug reports are crucial for efficient software development. Writing them manually can be slow and error-prone. This guide shows how to leverage AI tools like ChatGPT, along with screenshots and narrated screen recordings, to produce high-quality bug documentation in a fraction of the usual time.
    </p>

    <h3 class="text-white mt-5">The Hidden Cost of Poor Bug Reports</h3>
    <p>
      Vague tickets such as “it doesn’t work” force developers to hunt for clues, reproduce issues blindly, or bounce tickets back to QA. Multiply that across a sprint and you lose days. AI-assisted reporting eliminates this friction by standardizing rich bug descriptions from the start.
    </p>
    <ul>
      <li><strong>Less back-and-forth:</strong> Developers receive all critical details upfront.</li>
      <li><strong>Faster triage:</strong> Clear severity, environment, and reproduction steps enable immediate prioritization.</li>
      <li><strong>Higher fix rate:</strong> Fewer tickets are closed as “Cannot Reproduce”.</li>
    </ul>

    <h3 class="text-white mt-5">1. Screenshot-to-Description: Turning Pixels into Precision</h3>
    <p>
      Screenshots capture visual bugs, but words matter. LLMs excel at converting screenshots into developer-ready narratives that clearly describe the issue.
    </p>
    <ol>
      <li>Take a clear screenshot highlighting the defect.</li>
      <li>Paste the image or a short description into ChatGPT.</li>
      <li>Add context such as URL, browser, and viewport size.</li>
      <li>Request an Observed Result and Expected Result in one paragraph each.</li>
    </ol>
    <p><strong>Prompt example:</strong></p>
    <pre>“You are a QA engineer. The screenshot shows the avatar overlapping the header.
Write the Observed Result (1 sentence) and the Expected Result (1 sentence).”</pre>

    <h3 class="text-white mt-5">2. Voice Narration-to-Ticket: Speak, Don’t Type</h3>
    <p>
      Some bugs involve complex sequences. Record your screen with narration, transcribe the audio, and let AI structure it into a formal ticket.
    </p>
    <ol>
      <li>Use Loom, OBS, or QuickTime to capture video and audio.</li>
      <li>Transcribe the narration using Whisper, Otter, or auto-caption tools.</li>
      <li>Feed the transcript to ChatGPT with a short instruction for formatting.</li>
    </ol>
    <p><strong>Prompt example:</strong></p>
    <pre>“Format the transcript into a bug report with:
• Title (max 12 words)
• Steps to Reproduce (numbered)
• Observed Result
• Expected Result
• Environment
Transcript:
---
&lt;paste transcript&gt;
---”</pre>

    <h3 class="text-white mt-5">3. Customizable Formatting: Match Your Team’s Canon</h3>
    <p>
      AI can mimic your team’s ticket template. Show one example and instruct the model to follow it, whether it’s Gherkin, Markdown, or a custom macro.
    </p>
    <pre>“In future responses follow <u>exactly</u> this outline:
# Summary
## Steps to Reproduce
## Observed Result
## Expected Result
## Environment
## Severity (Critical/Major/Minor)
Generate the bug report now.”</pre>

    <h3 class="text-white mt-5">4. Boosting Consistency across the Entire Pipeline</h3>
    <ul>
      <li><strong>Analytics:</strong> Query severity vs. component reliably.</li>
      <li><strong>Automation:</strong> Trigger CI jobs or auto-labels predictably.</li>
      <li><strong>Onboarding:</strong> New QA hires ramp up faster with consistent examples.</li>
    </ul>

    <h3 class="text-white mt-5">5. Prompt-Engineering Cheat-Sheet</h3>
    <ul>
      <li><strong>Who:</strong> Target audience (e.g., senior frontend developer).</li>
      <li><strong>What:</strong> Required format or skeleton.</li>
      <li><strong>Where:</strong> Location of bug (route, OS, device).</li>
      <li><strong>When:</strong> Observation context (build number, commit hash).</li>
      <li><strong>Why:</strong> Impact or severity guidance.</li>
    </ul>

    <h3 class="text-white mt-5">Putting It All Together</h3>
    <p>
      Capture a screenshot, narrate the reproduction, feed assets into ChatGPT, and receive a complete ticket with severity, environment, and summary in minutes.
    </p>
    <blockquote>
      <p>“Our mean time-to-fix fell by 42% after we adopted AI-generated bug reports.” — Lead Engineer, fintech startup</p>
    </blockquote>

    <h3 class="text-white mt-5">Next Steps</h3>
    <p>
      1. Pick a pilot squad.<br>
      2. Test one or two real bugs.<br>
      3. Collect feedback.<br>
      4. Iterate the prompt template and scale team-wide.
    </p>

    <p class="mt-4 fw-bold text-white">
      Start today: integrate screenshot-to-description and voice-narration workflows, provide ChatGPT your ticket outline, and watch your bug backlog shrink.
    </p>
  `
}




}


const page = async () => {



    return (
        <div>
            <Banner data={data?.BannerSection}></Banner>
            <ExplainGuide data={data?.explainguide}></ExplainGuide>
            <AIGuideArticle data={data?.AIArticleContent}/>





        </div>
    );
};

export default page;