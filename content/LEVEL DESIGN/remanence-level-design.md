---
title: "Remanence: Architecting a Haunted World"
start: 2024-09-01
end: 2024-12-01
team: "21"
description: Led the reconstruction of levels in a 3D action-adventure game, enhancing gameplay flow and narrative integration.
software:
  - unreal-engine
  - figma
discipline: level-design
tags:
  - unreal-engine
  - figma
  - level-design
thumb: /static/content/thumbs/remanence_level.jpg
gif: /static/content/gifs/remanence_level.webp
---
---
## **Overview**

**REMANENCE** is an action-adventure game focused on melee combat with some light souls-like elements.

As the lead level designer during the final polish semester, I was responsible for designing, organizing, and iterating on the game’s interconnected levels. My focus was to create logical flow and pacing while leaving space for the team to integrate combat encounters and set pieces.

The team framed Remanence around three design pillars: *impactful immersion*, *desperate dance with death*, and *nonverbal storytelling*. For level design, that meant building spaces that heightened tension in combat, carried atmosphere without words, and kept players immersed in the flow of movement and discovery. My job was to ensure every section of the world supported those principles rather than pulling against them.

Playable on [Steam](https://store.steampowered.com/app/3564370/Remanence/), featured on [The Rookies](https://www.therookies.co/entries/43332), and listed in the [Game Gallery](https://games.digipen.edu/games/remanence).

---
## **The Problem**

When I stepped into level design on _Remanence_, the project already had large environments built, but they weren’t working. Starting on a cheerful note, I know. The issues fell into three categories: *structural*, *experiential*, and *workflow*.

### a. Structural
The level had grown without a map. There was no top-down plan tying sections together. This made it impossible to judge pacing or scale, and left encounter designers without context for where to place combat. The result was a flow that felt stitched together instead of guided.

<figure class="caption">
  <img src="parkoursections.gif" width="600" alt="Unengaging parkour filler, sped up x4 to show lack of stakes">
  <figcaption>Unengaging parkour filler, sped up x4 to show lack of stakes</figcaption>
</figure>

Transitions showed this most clearly. Parkour mushrooms and wall-climbs filled space but carried no tension, no narrative weight. They existed only to connect A to B, and the lack of purpose was obvious when playtesting, players went through motions without engagement.

### b. Experiential
The skyscrapers and city were meant to feel monumental, oppressive, and lived-in, but the execution fell short. Underscaled buildings were padded with foliage, but instead of selling size it blocked sightlines and erased vertical awe. The city section, positioned as a key set-piece, collapsed into a short corridor rather than an urban space. What should have been a moment of atmosphere and discovery became a brief pass-through, undercutting the pillars of impactful immersion and nonverbal storytelling.

<figure class="caption">
  <img src="origcity.png" width="700" alt="Original layout failed to convey monumental urban atmosphere">
  <figcaption>Original layout failed to convey monumental urban atmosphere</figcaption>
</figure>

### c. Workflow
Collaboration was hampered by how the level was organized. Streaming was in place for performance, but sub-levels had inconsistent naming, making it difficult for multiple people to work without conflicts. Debugging was equally painful. With no God Mode or skip features, every test required replaying from the start. Something as simple as checking one encounter meant defeating enemies, waiting on doors, and restarting if you died. Iteration slowed to a crawl.

---
## **The Solution**

The solution was to rebuild the level around the player’s experience: a world that feels monumental, transitions that carry tension, and a flow that keeps pace with combat. Every structural and workflow change was made to serve that outcome.

### a. Immersion Through Scale
The metro, skyscraper, and city were rebuilt as anchors rather than pass-throughs. Skyscrapers were rescaled to restore vertical awe and stripped of foliage that blocked sightlines. The city was extended into a reveal sequence, framed as a moment of arrival and atmosphere instead of a short corridor. These adjustments grounded players in the world’s oppressive scale.

### b. Meaningful Gameplay
Filler traversal was cut and replaced with diegetic transitions that carried tension. Elevators preserved vertical scale, skybridges created striking horizontal reveals, and a monorail offered faster traversal without breaking immersion. Each transition served pacing, keeping players engaged in movement rather than waiting for the level to catch up.

### c. Improving Collaboration
To untangle collaboration, I built a comprehensive top-down map with encounter pacing notes and divided the level into clear sub-sections. Sub-levels were reorganized with consistent naming so multiple designers could work without conflicts. Testing was accelerated by introducing debug workflows, allowing us to skip ahead instead of replaying full sequences. These steps cut iteration time and gave the team shared clarity.

<figure class="caption">
  <img src="oldtonew.png" width="600" alt="Old and new top-down maps, created to highlight layout changes">
  <figcaption>Old and new top-down maps, created to highlight layout changes</figcaption>
</figure>

---
## **The Process**

### a. Foundation
Before touching geometry, I needed the level to have a spine. I began with blocky sketches to test proportion and realism, paying particular attention to the city section where scale collapsed in earlier builds. From there I drew a top-down map that acted as the project’s north star, showing how each section would connect into a cyclical loop. That loop reinforced progression and mirrored the dystopian tone of the game’s world, with skyscrapers staged as monumental anchors rather than background dressing.


<figure class="caption"> <img src="preliminary_sketches.png" width="600" alt="Preliminary Sketches"> <figcaption>Preliminary sketches used to test scale and frame early planning</figcaption> </figure>

To make the map usable for a 21-person team, I divided the level into six sections -- Tutorial, Metro, City, Skyscraper, Tank Arena, and Final Boss. Layouts were documented in Miro with pacing notes and encounter placements, giving clarity on how tension should rise and fall across the experience. Finally, I reorganized sub-levels with consistent naming conventions. This removed conflicts in streaming workflows and allowed multiple designers to contribute simultaneously without stepping on each other’s work.

![[topdownmap.jpg#center|500]]

### b. Reconstruction

With the map as reference, I rebuilt the level as a continuous whitebox. This step set scale, pacing, and transitions in one pass, replacing the stitched corridors of earlier builds with a coherent flow. I identified segments worth salvaging from the old version -- tutorial, metro, parts of the city -- and trimmed, relocated, and spliced them into place. Organized into clean sub-levels, these pieces shifted from scattered scraps into parts of a coherent structure.

<figure class="caption"> <img src="earlywhitebox.png" width="600" alt="Level layout"> <figcaption>Whitebox reconstruction blending new layouts with repurposed sections</figcaption> </figure>

Some sections needed more than repair. The **City** was rebuilt as a true urban space: buildings were extended and scaled upward, sightlines opened, and the section integrated smoothly into the new layout. Its arrival was staged as a reveal set-piece, emphasizing the dystopian atmosphere rather than letting the space collapse into a corridor. The Skyscraper was reframed as a vertical anchor, restoring the sense of monumentality the old build had lost and sustaining tension through ascent rather than filler traversal.

<figure class="caption"> <img src="cityreveal.gif" width="500" alt="In-game city reveal"> <figcaption>City reveal reframed as a moment of scale and atmosphere</figcaption> </figure>

The **Final Boss Arena** began as a rooftop church, built to carry the game’s brutalist tone and to close the experience on a monumental space. My sketches and blockouts focused on scale, player readability, and narrative weight, framing the church as both a climactic battleground and a symbolic capstone to the world’s architecture. I also explored the idea of a rooftop garden as a contrasting alternative to the surrounding concrete.

<figure class="caption"> <img src="preliminarybossarenasketcheswbg.png" width="500" alt="Initial sketches and blockouts of the rooftop church arena"> <figcaption>Initial blockouts of the rooftop church concept</figcaption> </figure> <figure class="caption"> <img src="churchconcept.png" width="1000" alt="Rooftop church concept"> <figcaption>Rooftop church design emphasizing monumental brutalist architecture</figcaption> </figure>

Late in production, the team decided to replace the church with a rooftop garden, motivated by the desire to feature unused foliage assets. I did not design the final arena space, but I was responsible for the approach path, pacing, and framing of the encounter that led into it.

It reinforced a principle I carry forward: no idea is permanent. Even promising ones may be cut, but the design should stay strong for the player.

<figure class="caption"> <img src="inenginebossarena.gif" width="500" alt="Final rooftop garden arena"> <figcaption>Final rooftop garden arena, implemented by the team to highlight foliage assets</figcaption> </figure>

### c. Connectivity

To keep the level cohesive, I treated transitions as part of pacing rather than empty connectors. Each one was built to carry tension, preserve scale, and move players forward without breaking immersion.

1. **Elevator:**
	I framed vertical travel as part of the skyscraper’s presence. Instead of a shortcut, the elevator became a thematic pause that preserved scale, masked streaming, and reinforced the sense of climbing into something monumental.

![[elevator.gif]]

2. **Skybridge:**
	The old placeholder jumps gave no weight to horizontal movement. I replaced them with a skybridge that staged traversal as spectacle. Crossing it offered a clear line of sight across towers, tying architecture together and punctuating flow with a moment of exposure.

![[skybridge.gif]]

3. **Monorail**:
	Long-distance movement risked slowing pacing to a crawl. The monorail solved this by embedding fast travel into the fiction of the city. It kept traversal efficient without breaking immersion, a balance of function and believability that preserved rhythm while respecting world logic.

![[monorail.gif]]

---
## **The Outcome**

Through redesign, the level became coherent and purposeful. Skyscrapers and the city now read as monumental spaces rather than filler. Transitions like the elevator, skybridge, and monorail replaced dead time with moments that preserved scale and kept pacing tight. A clear top-down map and reorganized sub-levels gave the team a shared structure, making iteration faster and less error-prone. The final result supported Remanence’s combat and atmosphere with flow that felt deliberate from start to finish.

VIDEO TRAILER LINK / EMBED

---
## **Lessons Learned**

### a. Scale vs Performance
Designing Remanence taught me to balance scale, pacing, and technical limitations. Organizing the level to feel logical and true to real-world scale raised optimization concerns from the tech team. To address this, I used level streaming to hide previous areas and load new ones seamlessly, including lighting and enemy placement. Transitions like elevators helped maintain immersion while optimizing performance. These challenges reinforced the importance of creative problem-solving and collaboration in game development.

### b. Separation of Responsibilities
One key takeaway from this project was understanding the importance of respecting team workflows and maintaining clear boundaries between disciplines. Early on, I created highly detailed whiteboxes to guide the visual design, but this unintentionally made it harder for artists to adapt and replace assets, as my workflow didn’t align with theirs. I learned that focusing on my own responsibilities and providing room for other disciplines to work within their processes is more efficient and fosters better collaboration.

### c. Lack of Structure
A major challenge was the absence of task tracking tools, which left many team members, including myself, feeling lost about our responsibilities and progress within the project. Without a centralized system to manage tasks and deadlines, it was difficult to stay aligned, prioritize work, or understand how individual contributions fit into the bigger picture. This lack of structure often resulted in confusion, missed opportunities for collaboration, and inefficiencies that could have been avoided with proper task management tools.


## Ending Note
Remanence gave me a chance to learn how rewarding it is to work with a full team on an extended project, but also taught me about the challenges that can come with it. I realized how important it is for a large team to have a clear and specific vision for what you’re doing. Without it, you risk having the team drift in different directions, which leads to conflicts and wasted time because people don’t know what needs to be done on both a technical and conceptual level. This project also showed me why task management tools are essential to keep everyone organized and on the same page. Despite the challenges, it was a really rewarding experience to see everything come together through teamwork and finally finish.