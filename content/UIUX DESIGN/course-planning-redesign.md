---
title: "Course Planner: Streamlined Scheduling Redesign"
start: 2023-09-01
end: 2023-09-21
team: Solo
description: Redesign of DigiPen’s Student Planning interface, focusing on clarity, navigation, and scheduling efficiency for freshmen.
software:
  - figma
  - google-forms
discipline: uiux-design
tags:
  - uiux-design
  - figma
thumb: /static/content/thumbs/courseplanning.jpg
gif: /static/content/gifs/courseplanning.webp
---
---
## **Overview**

This project reimagined DigiPen’s *Student Planning* system. As a solo designer in a one-month course project, I redesigned the desktop scheduling tool used by freshmen.  

My role covered the full pipeline: user research, heuristic evaluation, wireframing, prototyping in Figma, and usability testing. The result was a streamlined interface that replaced confusing layouts with an integrated search panel, clearer navigation, and a more responsive calendar.  

<figure class="caption">
  <img src="course_overview.png" width="800" alt="course overview redesign">
  <figcaption>Expanded course detail simplified into a single structured overview</figcaption>
</figure>

---
## **Context**

*Picture this:* a freshman with a slow laptop, locked out of classes at 2 AM because the scheduling tool requires 15 clicks just to add one course. I went through that myself, and I knew the system could be better.  

The redesign aimed to:  
- Reduce wasted steps in course planning.  
- Clarify navigation between search, schedule, and progress.  
- Give freshmen confidence when building their first schedules.

<figure class="caption">
  <img src="course_sketch.png" width="500" alt="early sketches of course planning redesign">
  <figcaption>Initial breakdown of system flaws and early layout experiments</figcaption>
</figure>

---
## **Research**

I ran 9 user interviews across CS, BFA, and BAGD programs. Students reported five recurring issues:

- Challenging class search – finding courses was slow and imprecise.  
- Inconvenient navigation – too many tabs and unnecessary page jumps.  
- Limited access to information – missing prerequisites, availability, or completion status.  
- Lack of clarity – current progress and requirements were hard to parse.  
- Responsiveness issues – sluggish interaction and wasted space.  

To compare, I audited Google Calendar, Moodle, Notion, and MyStudyLife, noting strengths like quick hover interactions, sliding panels, and mobile-friendly notifications.

---
### **Target User**

Based on the research findings, I created a persona to guide design decisions. Max represents the typical DigiPen freshman -- balancing part-time work, commuting, and managing a college workload for the first time. This persona helped keep the redesign grounded in the real constraints students face.

![[max_persona.png|300]]

```
Persona: Max 
Age: 18 
Major: Computer Science freshman 
Context: Commutes daily, works 20 hrs/week in retail, first time managing college-level workload.

Goals: 
- Build schedules quickly, with no guesswork. 
- Track degree progress with confidence.
- Access info (availability, prerequisites) without digging through multiple tabs. 

Frustrations: 
- Redundant navigation steps. 
- Schedule view too small to see all classes.
- Unclear prerequisite and availability status.
  
Environment & Tools: 
- Low-power laptop, slow internet at home. 
- Relies heavily on mobile calendar apps for work shifts and personal commitments.
```

---
### **Problem Statements**

1. Modify the Plan & Schedule interface so freshmen can easily create schedules and feel confident when planning.  
2. Improve clarity of the My Progress section so students can track requirements without digging through menus.  
3. Ensure mobile adaptation for future integration, but prioritize desktop first for stability.

---
## **Design Solutions**

From the three problem statements, I prioritized **Problem Statement 1** -- improving the _Plan & Schedule_ interface -- because it addressed the most immediate frustrations voiced in research: slow search, clunky navigation, and limited clarity. Focusing here meant I could deliver tangible improvements to the freshman scheduling experience within the project’s one-month scope.

### Search Panel

The original system forced constant tab switching to piece together prerequisites, availability, and degree requirements. I condensed this into a sliding side panel, giving students all course data in one place. The redesign reorganized search results into compact cards that surfaced essentials up front, cutting wasted clicks.

<figure class="caption">
  <img src="course_search.png" width="800" alt="course search redesign">
  <figcaption>Search results restructured into compact cards with essential info up front</figcaption>
</figure>

### Calendar

The old calendar wasted space on hours and days that never contained classes, while the actual course blocks displayed almost no information. I condensed the time grid to focus only on active hours and reformatted course blocks to show the course name, meeting times, and location at a glance. To reduce unnecessary clicks, I added hover interactions so details could be checked instantly.

<figure class="caption">
  <img src="course_cal1.png" width="600" alt="calendar redesign extended time slots">
  <figcaption>Expanded course events to display name, time, and location directly in the block</figcaption>
</figure>

<figure class="caption">
  <img src="course_cal2.png" width="600" alt="calendar redesign with course details visible">
  <figcaption>Removed empty early morning, late evening, and weekend slots to condense the view</figcaption>
</figure>

<figure class="caption">
  <img src="course_cal3.png" width="600" alt="interactive calendar redesign with hover details">
  <figcaption>Implemented an interactive calendar view for immediate access to course details on hover, eliminating mandatory clicks</figcaption>
</figure>

### Navigation

Navigation across the system was dense with oversized blocks, redundant text, and scattered menus. I resized course cards, integrated icons for clarity, and moved the semester overview into a more prominent position. These changes reduced scrolling and kept related information within a single frame, giving students a clearer sense of progress while planning.

<figure class="caption">
  <img src="course_planned.png" width="600" alt="planned courses redesign">
  <figcaption>Condensed card layout replacing oversized redundant course entries</figcaption>
</figure>

---
## **Outcome**

Through iteration, I sketched, wireframed, and rebuilt the original system in Figma to test side-by-side comparisons. Students clicked through early prototypes, pointing out where layouts still felt heavy or where scroll bars hid information. Each round refined small but important details—like moving courses beneath the calendar, adjusting button sizing, and removing repeated labels.

The final redesign cut navigation steps nearly in half, let students view 5-6 courses at once instead of 1-2, and made the calendar glanceable without clicks. Testers reported they could build a basic schedule in minutes instead of wrestling with scattered tabs. While desktop-focused, the structure now leaves room for a mobile adaptation.

---
## **Ending Note**

One month wasn’t enough to chase every idea. I had to pick the changes that mattered most, and accept leaving some threads unfinished. Without IT stakeholders, I was designing into the dark on feasibility. And Figma, as polished as it is, reminded me that tools bend the design as much as the designer does... scrollable panels just didn’t behave.

I started this project because I once sat there at 2 AM, fighting DigiPen’s clunky scheduling tool. Rebuilding it taught me how much usability comes down to cutting friction: one less click, one more clear label, and suddenly the system feels human again.  

I may not have solved the entire bureaucracy, but at least freshmen won’t need a bigger laptop just to register for classes.