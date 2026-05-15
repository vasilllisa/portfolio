---
title: "Dungeon of Knossos: Diegetic Mobile UI"
start: 2026-01-01
end: Present
team: "2"
description: Designed a fully diegetic mobile RPG interface where gameplay, menus, and progression exist within one continuous temple space.
software:
  - godot
  - figma
  - aseprite
discipline: uiux-design
tags:
  - uiux-design
  - figma
  - godot
  - aseprite
thumb: /static/content/thumbs/dok_uiux.jpg
gif: /static/content/gifs/dok_uiux.gif
---
## **Overview**

_Dungeon of Knossos_ is a mobile puzzle RPG heavily inspired by _Dungeon Raid_, rebuilt around a Greek mythology setting and a fully diegetic interface.

I am working on the project as the UI/UX designer and pixel artist, responsible for the visual layer of the game: interface structure, deity systems, tiles, resources, shaders, menus, and pixel art direction. The core gameplay still begins with a simple chain interaction, but most of my work has been about turning that interaction into a world the player can physically read.

Instead of treating gameplay, HUD, upgrades, and menus as separate layers, I designed the screen as one continuous temple space. The board sits in the center. The sky holds invocations. The temple architecture holds resources and progression. The right wall becomes a pantheon archive of gods, boons, and build history.

I was trying to avoid the “open menu inside another menu inside another menu” approach most RPG interfaces drift toward.

<figure class="caption">
  <img src="dok_temple.png" width="600" alt="Dungeon of Knossos temple interface layout">
  <figcaption>Temple layout prototype exploring how gameplay, progression, and navigation could coexist within the same space.</figcaption>
</figure>

---
## **Context**

A lot of _Dungeon of Knossos_ became about figuring out how far we could expand the presentation without losing the simplicity that made the original game work so well. The goal was never to remake _Dungeon Raid_, but to preserve the core experience while expanding on it through new progression and presentation systems.

A significant part of the inspiration for the project came from seeing how many people still talked about the original game years after it effectively disappeared from modern hardware. While researching _Dungeon Raid_, I kept running into old Reddit threads, reviews, and forum posts from people trying to find ways to play it again or searching for games that captured the same feeling.

The part that stood out from a UX perspective was that while the game itself is mechanically simple, people remembered the interaction very vividly. Many discussions were not really about progression systems or content volume. They were about the overall _feel_. The speed of dragging chains, the pacing of upgrades, the satisfaction of collecting gold, and how easy it was to accidentally lose hours to repeated runs.

The game also felt purpose-built for the mobile platform. Everything revolved around a single thumb interaction, which made the experience disappear into muscle memory very quickly.

Visually, the game was equally restrained. The dungeon theme was straightforward, but it matched the simplicity of the mechanics. Nothing distracted from the board itself, but combined together, it created a distinct, streamlined experience that people still remember years later.

In many ways, _Dungeon of Knossos_ became a tribute to that original experience. Not by copying it directly, but by trying to understand why something so mechanically small remained so memorable long after it became inaccessible on modern devices.

<figure class="caption"> 
  <img src="dok_gameplay.gif" width="300" alt="Current Godot gameplay view"> 
  <figcaption>Current Godot gameplay state showing early board interactions, spell chain coloring, and surrounding temple UI framing.</figcaption> 
</figure>

---
## **Design Direction**

That tension between simplicity and expansion became the foundation for most of the project’s UI work. Every new system, invocations, deity progression, boon archives, shops, and stat categories, risked pulling attention away from the board itself. A large part of the design process became figuring out how to add complexity without making the interface feel detached from the physical interaction of chaining tiles.

### **Greek Mythology as Structure**

Initially, the project was not intended to be diegetic at all.

The first goal was simply to move away from the original dungeon theme and build a stronger visual identity around the game. Greek mythology felt like a natural fit because it separated the game from more generic fantasy aesthetics while still supporting the dungeon-delving and monster-slaying structure of the original gameplay loop.

<figure class="caption"> <img src="brainstorm_resources_02.png" width="600" alt="Early mythology and system brainstorming"> <figcaption>Early brainstorming connecting Greek mythology, resources, and progression systems into a unified visual language.</figcaption> </figure>

Resources gradually became associated with specific gods and domains:
- Plutus for economy
- Athena for defense
- Ares for damage
- Hestia for light
- Asclepius for health

The earliest versions were much rougher structurally. I originally experimented with Apollo covering both healing and fire, but separating those roles into Hestia and Asclepius made progression far more readable during play.

### **From Skills to Invocations**

Another major influence came from _Arx Fatalis_, where spells are cast by physically drawing symbols rather than pressing buttons.

That translated naturally into a chain-based puzzle game because the player is already drawing gestures across the board every turn. Instead of turning abilities into detached UI buttons, invocations became symbolic chain patterns traced directly through gameplay.


<figure class="caption"> 
  <img src="dok_arxfatalis.gif" width="500" alt="Arx Fatalis spellcasting reference"> 
  <figcaption>Gameplay footage from Arx Fatalis, a major inspiration for the project’s invocation and gesture-based spellcasting direction.</figcaption> 
</figure>

That idea connected back into Greek mythology through constellations, which slowly pushed the project toward a much more diegetic structure. Skills became celestial diagrams, progression became embedded into temple architecture, and the interface gradually stopped feeling like menus layered on top of gameplay.

---

## **Diegetic Structure**

Once the project started moving in a more diegetic direction, the interface itself needed to behave less like a collection of menus and more like a single continuous space.

The board remained at the center because that is still where the game actually happens, but the surrounding systems began expanding outward through the temple itself:

- invocations and constellations exist above the board
- deity progression expands to the right
- pause and settings shift toward the left
- boon archives extend deeper into the temple walls

Instead of opening detached menus, the player physically navigates through the environment itself by shifting across the temple space.

<figure class="caption"> <img src="dok_interface-architecture.png" width="600" alt="Spatial interface architecture"> <figcaption>Interface architecture treating the game as one continuous navigable temple space rather than detached menu screens.</figcaption> </figure>

### **Spatial Navigation**

That structure changed how I approached prototyping entirely.

Most of the early work was done through interactive Figma prototypes focused on movement and continuity between systems rather than isolated wireframes. A large part of the design process became testing how the screen shifted, expanded, and revealed information without losing orientation or interrupting gameplay flow.

<figure class="caption"> <img src="prototype_spatial_navigation.gif" width="300" alt="Spatial navigation prototype"> <figcaption>Early interactive Figma prototype testing spatial transitions between gameplay, progression, and invocation systems.</figcaption> </figure>

The goal was to make every system feel physically attached to the same environment. Progression is not opened through separate overlays or RPG dashboards. The player effectively moves deeper into the temple itself as more systems become relevant throughout a run.

That structure also helped preserve readability. Even though the game contains far more progression systems than the original _Dungeon Raid_, most information stays compartmentalized spatially rather than stacked directly onto the board itself.

### **Constellations & Invocations**

The invocation system became one of the clearest ways to connect interaction, theme, and interface together.

Since the player is already drawing chains across the board every turn, abilities could emerge directly from that same interaction instead of existing as separate buttons or cooldown bars. Invocations became symbolic chain patterns tied to constellations above the temple itself.

<figure class="caption"> <img src="invocations_prototype.gif" width="300" alt="Invocation constellation prototype"> <figcaption>Interactive Godot invocation prototype showing constellation transitions and deity-specific celestial patterns.</figcaption> </figure>

The challenge was keeping the constellations atmospheric without sacrificing readability. Too decorative, and the patterns become difficult to recognize during gameplay. Too functional, and they stop feeling like part of the world entirely.

Most of the iteration revolved around balancing stars, lines, chain shapes, and deity positioning so invocations felt physically performed rather than simply activated.

### **Mosaic Progression Walls**

The right side of the temple eventually evolved into a large vertical mosaic wall representing all five deities simultaneously.

Each deity occupies its own section of the wall alongside associated stat categories and progression indicators:

- Plutus for economy
- Ares for attack
- Athena for defense
- Hestia for light
- Asclepius for health

As players progress through a run, laurel-shaped fill bars gradually increase toward deity thresholds. Once completed, gods offer new boon choices tied to their domain and associated stat categories.

Tapping one of the deity mosaics shifts the screen even further right, revealing a secondary archive wall containing every boon collected from that god throughout the run.

Rather than functioning like a detached RPG inventory, the boon archive behaves more like a mythological record carved directly into the temple itself.

---
## **Art Direction & Visual Systems**

I created all interface assets and pixel art for the project, including resources, deity structures, pediments, progression systems, shaders, environmental framing, and gameplay tiles.

A large part of the visual work revolved around readability and cohesion. Since the board can become visually dense very quickly, every resource needed a distinct silhouette and recognizable shape language while still feeling like part of the same temple environment.

<figure class="caption"> <img src="dok_asset-collection.png" width="800" alt="Dungeon of Knossos asset collection"> <figcaption>Collection of gameplay assets, progression systems, tiles, layout iterations, pediments, and resource explorations created for the project.</figcaption> </figure>

Most assets went through multiple iterations as the interface gradually became more diegetic. Earlier layouts were significantly flatter and more UI-driven, while later versions integrated resources directly into the temple structure itself through columns, mosaics, pediments, and environmental framing.

Several progression systems were also built around grayscale mask experiments and animated fill behaviors.

- deity pediments fill dynamically through masked color transitions
- laurel progression bars illuminate leaf-by-leaf
- shield durability uses radial fill growth from the center
- offering systems react visually to resource gain and loss

<figure class="caption"> 
  <img src="shader_pediment.gif" width="600" alt="Pediment and progression fill systems"> 
  <figcaption>Godot shader prototypes for deity thresholds, shield durability, and laurel progression fills using greyscale masks.</figcaption> 
</figure>

I also experimented heavily with shaders and animated feedback tied directly to gameplay objects and resources.

This included:

- a cosmic orb shader for magical weapon types
- candle flame animation systems
- reactive coin bowl interactions
- shield durability experiments
- dithering experiments for the health cup system
- constellation and sky transitions tied to invocations

<figure class="caption"> 
  <img src="shader_collage.gif" width="800" alt="Shader experimentation collage"> 
  <figcaption>Godot shader and interaction prototypes for cosmic effects, flames, and resource feedback systems.</figcaption> 
</figure>

A large part of the current work involves refinement and readability iteration. Since the project is still in development, some areas remain visually unresolved. The latest temple layouts currently suffer from overly similar color values, causing walls, architecture, and gameplay elements to blend together more than intended.

Most of the ongoing iteration revolves around solving that balance: preserving the dense atmospheric temple aesthetic while keeping gameplay readable during fast one-thumb interaction.

---
## **Ending Note**

The hardest part of the project has been restraint.

Almost every new system risks pulling attention away from the thing that made _Dungeon Raid_ so memorable in the first place: fast, readable interaction that disappears into muscle memory. A large part of the development process has become figuring out how far the world, progression, and presentation can expand before the board itself starts losing clarity.

That tension affects nearly every decision in the project.

More shaders can make the temple feel alive, but they can also introduce visual noise. More progression systems can create deeper builds, but they can also overwhelm the immediacy of chaining resources. Not gonna lie, scope creep absolutely got me on this project. Even visually, many parts of the project are still actively being reworked as I continue trying to separate gameplay readability from environmental detail and atmosphere.

A lot of the current work revolves around refinement rather than expansion:

- improving value separation
- simplifying visual hierarchy
- clarifying progression feedback
- preserving one-thumb readability during fast play

The goal is not simply to make _Dungeon Raid_ larger or more complex. It is to preserve the immediacy and compulsive interaction loop that made the original so memorable while rebuilding it through a stronger visual identity and a more physically integrated interface structure.