---
title: remanence-uiux-design
start: 2023-09-01
end: 2024-04-01
team: "18"
description: Directed UI development, ensuring seamless player interaction and thematic consistency.
software:
  - unreal-engine
  - figma
discipline: uiux-design
tags:
  - unreal-engine
  - figma
  - uiux-design
thumb: /static/content/thumbs/remanence_uiux.png
gif: /static/content/gifs/remanence_uiux.gif
---
---
## **Overview**

**REMANENCE** is an action-adventure game focused on melee combat with some light souls-like elements.

I led UI/UX design through mid-production. My responsibilities included structuring menu flows with mind maps, building wireframes in Figma, and implementing them in Unreal Engine with Blueprints. I created style guides to unify visual direction during an art style shift, and collaborated with the UI artist to keep menus and HUD consistent, readable, and thematically grounded. My focus was on usability under pressure, ensuring players noticed health, stamina, and interactables without breaking immersion.

In the final polish semester, I shifted into level design while teammates continued UI work, so the shipped version differs from my original systems.

Playable on [Steam](https://store.steampowered.com/app/3564370/Remanence/), featured on [The Rookies](https://www.therookies.co/entries/43332), and listed in the [Game Gallery](https://games.digipen.edu/games/remanence).

---
## **Design Process**

### **Research**

I began with competitive analysis of first-person melee games -- titles like Dishonored, Skyrim, and Dark Souls -- to study HUD placement, menu clarity, and player information flow. Using databases like [**GAME UI Database**](https://www.gameuidatabase.com/) and [**Interface In Game**](https://interfaceingame.com/), along with my own screenshots, I mapped recurring solutions to problems of visibility and pacing.

From this, I created a mind map that defined Remanence’s UI priorities: menus, HUD, and combat readability. That structure shaped my first Figma wireframes, which laid out the main menu, pause menu, and player HUD. I built the wireframes as an interactive prototype, so teammates, especially artists, could click through the flow and understand not just the layout, but the intended transitions and interactions.

<figure class="caption">
  <img src="Remanence_MindMap0.png" width="400" alt="Rem mind map">
  <figcaption>Mapping menu and HUD components from research into a structured flow.</figcaption>
</figure>

<figure class="caption">
  <img src="wireframe_firstpass.jpg" width="800" alt="Rem first pass">
  <figcaption>These interactive layouts gave the team an early view of how information layered on-screen and a shared reference before implementation in Unreal.</figcaption>
</figure>

I consolidated these first-pass decisions into a UI/UX style guide, which documented menu standards, HUD elements, and interaction rules for the team.

[View Style Guide 1 (PDF)](Remanence_StyleGuide1.pdf)

---
### **Iteration**

#### **Art Direction Shift**
Mid-project, the art direction of the game underwent a significant transformation, shifting away from dark realism to a retro-fantastical style, similar to *Lethal Company* or *BPM: Bullets Per Minute*. This required substantial updates to the UI to align with the new visual aesthetic.

<figure class="caption">
  <img src="Remanence_ArtDirChangeHor.png" width="800" alt="">
  <figcaption>Art direction pivot: shifting from dark realism to a retro-fantastical style required a redesigned HUD and updated UI standards.</figcaption>
</figure>

Player feedback had shown the darker palette made navigation difficult, so adapting the UI became critical. I created a second style guide to help the team pivot, ensuring that fonts, HUD elements, and menu layouts supported the new aesthetic while remaining legible during combat.

[View Style Guide 2 (PDF)](Remanence_StyleGuide2.pdf)

#### **HUD Layout Debate**
The placement of the health and stamina bars became a point of debate. They were first positioned in the top left, following convention, but playtesting showed players often missed their health dropping and strongly preferred the bars at the bottom center, where the information stayed in their line of sight. I highlighted that in first-person swordplay games, HUD elements are often placed at the bottom for this exact reason. While some teammates worried about blocking sword animations or preferred the familiarity of top-left, player feedback made visibility the priority. The bottom-center layout remained through multiple builds and stayed that way until the final polish semester, when I had already transitioned to level design and others took over UI.

<figure class="caption">
  <img src="Remanence_LayoutChangeHor.png" width="800" alt="">
  <figcaption>Playtesting showed players missed health in the top-left. Moving the bars to the bottom center kept critical info within the player’s line of sight, a layout consistent with other first-person swordplay games.</figcaption>
</figure>

#### **HUD Visual Style**
Early HUD concepts leaned toward a minimalist, almost sci-fi look that felt disconnected from the game’s new retro-fantastical art direction. Working with our UI Artist, I iterated on the visuals to give the HUD more character while keeping the critical bars readable in fast combat. The updated style emphasized bold shapes and distinct silhouettes, which helped the HUD stand out against darker environments without breaking immersion.

<figure class="caption">
  <img src="Remanence_VisualsChange.png" width="800" alt="">
  <figcaption>HUD visuals shifted from minimalist to a more fantastical style, reinforcing the new art direction while keeping combat information clear.</figcaption>
</figure>

These updates ensured the HUD’s look reinforced the art direction without compromising usability.

---
### **Interaction**
To reinforce feedback during combat, I designed animated crosshair concepts inspired by _Dark and Darker_. I prototyped them in Figma to communicate the interaction intent, then validated the animations in Unreal Engine with Blueprints. These tests proved the responsiveness worked in-game and were later integrated into the main project.


![[Remanence_UEPrototype.mp4|500]]


<figure class="caption">
  <img src="Remanence_FigmaV2.png" width="800" alt="Figma crosshair prototype">
  <figcaption>Figma prototype for crosshair feedback.</figcaption>
</figure>


  <figure class="caption">
  <img src="Remanence_PNG_UEBlueprintsOrganized.png" width="800" alt="">
  <figcaption>Organized Blueprint scripts for crosshair responsiveness and other UI interactions.</figcaption>
</figure>

---
## **Ending Note**

Playtesting showed us how easy it was for players to miss critical info, like their health draining away in the corner. Moving elements around, arguing about it, and watching people play taught me that small shifts in layout can decide whether a system works or fails. The art shift forced me to rewrite my own rules, and building a second style guide kept the team from drifting apart visually.

Unreal and Blueprints were a headache at first, but getting hands-on meant I could prove ideas instead of just sketching them. I left this project with a clearer sense of how to fight for player visibility without killing the game’s style... or the team’s patience.

And yes, I still think the health bar belongs at the bottom.