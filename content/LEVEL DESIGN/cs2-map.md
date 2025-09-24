---
title: "de_exhibit: Competitive Museum Map for CS2"
start: 2024-09-01
end: 2024-12-01
team: Solo
description: Built a competitive 5v5 multiplayer map, designing sightlines, chokepoints and verticality within a museum setting.
software:
  - hammer-editor
discipline: level-design
tags:
  - hammer-editor
  - level-design
thumb: /static/content/thumbs/cs2.jpg
gif: /static/content/gifs/cs2.webp
---
---
## **Overview**

`de_exhibit` is a competitive 5v5 Counter-Strike 2 map built inside a museum. Designed for balanced sightlines, layered verticality, and fast rotations. Influenced by Dust 2’s open firefights and Nuke’s stacked complexity, the layout supports fair engagements without favoring one side. Developed independently with real-world architectural references and iterative playtesting.

![[csgo-keygif.gif#center|800]]

Playable on [Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=3352269283).

---
## **Design Goals**

#### Contested Sightlines
Long halls and open angles for sniper play, but each exposure has a counter -- alternate path, vertical break, or timing window. Power comes with risk, and no angle is absolute.
#### Vertical Layers
A three-story layout that forces players to read height as much as distance. Staircases, balconies, and shafts create contested vertical movement without granting free advantage.
#### Grounded Setting
The museum provides a logical reason for conflict -- an artifact or painting as the bomb target -- and a believable backdrop. Public exhibit halls contrast with service corridors, making the space feel authentic while shaping flow.

---
## **Design Process**

When designing the map, I followed a structured approach, starting with the core gameplay elements before moving into theme and set dressing.  
My process looked something like this:

#### a. Flow
1. Placed **spawn points** for both sides.
2. Mapped **main paths** to bomb sites.
3. Marked **chokepoints** for early engagements.
4. Added **side paths** for flanks and rotations.
5. Iterated through repeated **tests** to balance pacing and fairness.

#### b. Precedent
Before committing to a layout, I looked at the community’s favorite maps, especially Nuke and Dust 2, and broke them down using the same process -- spawns, main paths, chokepoints, and side paths. I sketched out their layouts to understand different levels of complexity, then applied those insights to my own design.

#### c. Setting
CS2 maps are often built around believable locations. I wanted to take that idea a step further by designing a setting that not only worked for gameplay but also had a logical reason for the conflict.

A museum felt like the perfect choice:
- **Tactical variety**: Open exhibit halls contrast with tight corridors, creating natural chokepoints and diverse engagements.
- **A believable objective:** A high-value target like an artifact or painting gives Ts a reason to attack and CTs a reason to stop them.
- **Layered verticality:** Museums often have balconies, grand staircases, and underground archives, providing the kind of verticality I wanted to explore.

Suspension of disbelief is important to me when designing spaces. Every sightline, chokepoint, and rotation was shaped by the environment itself, so the action feels natural and not forced. For me, a good map isn’t just fun to play, it should also feel like a place that could actually exist.

#### d. Sketches
Once I had an idea of how the map should play, I did rough sketches of how I envisioned the space visually -- its theme, setting, and structure. I then moved on to top-down concept maps and asked for feedback, getting theoretical in-game insights before committing to a final design.

<figure class="caption">
  <img src="cs2_sketches.png" width="800" alt="Early top downs and isometrics exploring circulation, chokepoints, and site massing">
  <figcaption>Early sketches testing circulation and chokepoints, used to converge on viable site massing before whitebox.</figcaption>
</figure>

#### e. Verticality
Because my map was three stories, I needed to make vertical movement feel natural. After finalizing the rough isometric, three-story layout, I drew it out, hung it on my wall, and used it as a guide while whiteboxing the level.

<figure class="caption">
  <img src="cs2paper.jpg" width="600" alt="Three level isometric stack with labeled transitions and engagement tiers">
  <figcaption>Three level isometric, mapping vertical routes and engagement tiers to prevent free advantage across floors.</figcaption>
</figure>

#### f. Architectural References
To make the museum feel like a believable space, I gathered references from real-world architecture:
- [_Säynätsalo Town Hall_](https://en.wikipedia.org/wiki/S%C3%A4yn%C3%A4tsalo_Town_Hall) by **Alvar Aalto** influenced the building’s exterior.  
- **Saint Petersburg architecture** inspired the combination of a river and a small bridge, a common sight in that city.  
- **Museum interiors and sewer systems** were referenced to ensure the layout made sense -- yes, even the rainwater drain beneath the building had to feel realistic.

<figure class="caption">
  <img src="wide-ref-board.png" width="800" alt="Reference board, museum interiors, Aalto massing, Saint Petersburg bridge and sewer imagery">
  <figcaption>Reference board grounding the layout in real architecture, informing massing, sightlines, and public vs service circulation.</figcaption>
</figure>

---
## **Constructing the Framework**

I created isometric, top-down, and side views to show how the three floors connect. Diagrams highlight rotations, chokepoints, and overall flow for quick readability.

<div class="floor-selector">

<input type="radio" name="floor" id="overview-floor" checked>
<input type="radio" name="floor" id="garage-floor">
<input type="radio" name="floor" id="first-floor">
<input type="radio" name="floor" id="second-floor">

<div class="selector-buttons">
  <label class="floor-btn" for="overview-floor">Overview</label>
  <label class="floor-btn" for="garage-floor">Garage</label>
  <label class="floor-btn" for="first-floor">First Floor</label>
  <label class="floor-btn" for="second-floor">Second Floor</label>
</div>

<div class="image-grid">

  <!-- Big isometric, full width row -->
  <figure class="panel panel--iso">
    <img class="overview" src="overview-isometric.png" alt="Overview isometric">
    <img class="garage"   src="garage-isometric.png" alt="Garage isometric">
    <img class="first"    src="firstfloor-isometric.png" alt="First floor isometric">
    <img class="second"   src="secondfloor-isometric.png" alt="Second floor isometric">
    <figcaption>Isometric View</figcaption>
  </figure>

  <!-- Bottom row, left column top: top-down -->
  <figure class="panel panel--topdown">
    <img class="overview" src="overview-topdown.png" alt="Overview top down">
    <img class="garage"   src="garage-topdown.png" alt="Garage top down">
    <img class="first"    src="firstfloor-topdown.png" alt="First floor top down">
    <img class="second"   src="secondfloor-topdown.png" alt="Second floor top down">
    <figcaption>Top Down View</figcaption>
  </figure>

  <!-- Bottom row, left column bottom: side -->
  <figure class="panel panel--side">
    <img class="overview" src="overview-sideview.png" alt="Overview side section">
    <img class="garage"   src="garage-sideview.png" alt="Garage side section">
    <img class="first"    src="firstfloor-sideview.png" alt="First floor side section">
    <img class="second"   src="secondfloor-sideview.png" alt="Second floor side section">
    <figcaption>Side View</figcaption>
  </figure>

  <!-- Bottom row, right column: tactical -->
  <figure class="panel panel--tactical">
    <img class="overview" src="overview-tactical.png" alt="Overview tactical flow">
    <img class="garage"   src="garage-tactical.png" alt="Garage tactical flow">
    <img class="first"    src="firstfloor-tactical.png" alt="First floor tactical flow">
    <img class="second"   src="secondfloor-tactical.png" alt="Second floor tactical flow">
    <figcaption>Tactical Map Flow</figcaption>
  </figure>

</div>
</div>







---
## T & CT Pathing Breakdown

These sections show how I shaped main and side routes for both teams. Each path was built around pacing, sightline control, and rotation balance,

### T Main Paths

<figure class="caption"> <img src="CALLOUTS_T-SIDE.png" width="800" alt="T-side callout diagram highlighting main entry paths"> <figcaption>T-side callouts, framing the four core approaches into the building and lower levels.</figcaption> </figure> <figure class="caption"> <img src="t-side-mainpaths-collage.png" width="800" alt="Collage of T-side main path views"> <figcaption>In-engine shots showing how the four main T routes look and feel in play.</figcaption> </figure>

**LMP (Garage Ramp)**  
I made this the most legible B-site entry. The climb forces commitment into a height disadvantage, so Ts must spend utility to break through. It sets the tone: aggression without smoke or flash support is punished.

**MMP (Grand Hall)**  
The direct lobby push establishes mid as the contested core of the map. By opening onto A and the second floor, it guarantees an early clash. I built it to be bold but costly, rewarding teams that coordinate trades and crossfires.

**RMP (Bus)**  
The bus flank softens exterior sightlines and gives Ts cover to stage their attack. It creates a slower buildup into A while letting CTs pressure from above. I wanted this route to feel opportunistic -- never the fastest, but high value if CTs misplay rotations.

**UMP (Sewer)**  
The sewer is a tempo breaker. It delays entry but creates a stealth threat under the map, forcing CTs to respect B even when Ts aren’t visible outside. Tight corridors amplify risk, but the payoff is surprise positioning when executed well.

---

### T Side Paths

<figure class="caption"> <img src="tsidepaths.png" width="800" alt="Collage of T-side side path views"> <figcaption>Side entries that cut past the main chokes, offering flanking and vertical play.</figcaption> </figure>

**Windows to Second Floor**  
These break-in points were added to bypass the front hall choke. They give Ts a way to seize vertical control early, letting them pressure both floors at once.

**Bus to A-Site**  
The ladder and roof of the bus open angles otherwise locked down by CTs. It’s an intentional risk-reward: climbing exposes Ts, but successful use punishes static defenders.

**Manhole to Sewer**  
This drop extends the underground network. It offers a late-round rotation tool, letting Ts pivot to B without backtracking through contested lanes.

---

### CT Main Paths

<figure class="caption"> <img src="CALLOUTS_CT-SIDE.png" width="800" alt="CT-side callout diagram highlighting defensive setups"> <figcaption>CT callouts, showing how the defense is staged to contest each T main route.</figcaption> </figure> <figure class="caption"> <img src="ct-side-mainpaths-collage.png" width="800" alt="Collage of CT-side main path views"> <figcaption>In-engine shots of the four defensive setups, showing sightlines and early contest positions.</figcaption> </figure>

**LMP Hold (Garage Ramp)**  
Positioned to stall Ts before B, this hold uses the ramp’s elevation. I wanted CTs to feel empowered to take initiative here, controlling tempo with early utility.

**MMP Hold (Grand Hall)**  
Mid control is reinforced from the storage side, giving defenders oversight of the lobby’s long sightline. The intent was to create a layered contest where one mistake cedes A pressure instantly.

**RMP Hold (Bus)**  
From the courtyard and A-site balcony, CTs can collapse onto the bus flank. This path balances the exterior threat, ensuring Ts can’t abuse the long wrap uncontested.

**UMP Hold (Sewer)**  
The elevator shaft drop was placed to give CTs rotation access underground. It creates a mind-game: do they risk an early contest, or hold back to anchor sites above?

---

### CT Side Paths

<figure class="caption"> <img src="ctsidepaths.png" width="800" alt="Collage of CT side path views"> <figcaption>Rotations that let CTs shift pressure between floors and sites.</figcaption> </figure>

**Elevator Shaft**  
Vertical mobility through the shaft lets defenders flex between garage and second floor quickly. It forces Ts to consider vertical flanks when executing.

**Fire Exit to Second Floor**  
This stair access reinforces A without funneling through the Grand Hall. It was added to give CTs a proactive option to contest mid-round.

**B-Site to Garage Rotation**  
This back connector enables fast reinforcement to B. It keeps defenders relevant even if Ts gain outside control, tightening the map’s defensive web.

---
## Ending Note

#### Lessons Learned
- Jumping into Hammer Editor from scratch was both a challenge and an exciting learning experience. This was my first time designing a multiplayer map, and I had to figure out chokepoints, main paths, and rotations to ensure the gameplay felt competitive and balanced. I learned how to plan a 5v5 environment from the ground up, structuring layouts that guide player movement naturally while maintaining tactical depth. Through constant iteration, I refined sightlines, engagement zones, and overall balance, making sure no area felt overpowered or underutilized.    
- On the visual side, I focused on making the map feel immersive without compromising clarity. I experimented with set-dressing techniques, carefully placing details that enhanced navigation and player awareness rather than cluttering the space. Playtesting was essential, and through multiple sessions -- despite the difficulty of getting full teams -- I continuously tweaked the map based on real gameplay feedback, adjusting everything from cover placement to rotation times to ensure a smooth competitive experience.

#### Constraints
- One of the biggest challenges was getting full 5v5 playtests. I only managed a full team once—most other sessions were 3v3s, 2v2s, or even 1v1s when testing minor mechanics. Despite this, each session helped refine different aspects of the map.
- Another challenge was staying true to my original vision. I wanted a Slavic/Brutalist-inspired environment, but finding the right textures and models was difficult without using outside assets. Luckily, when CS2’s new Train map was released, it provided perfect assets that fit my theme, saving a huge amount of time on visuals.
- Beyond that, learning Hammer Editor (Source 2) itself was an obstacle. Everything from lighting to making spaces feel believable took trial and error, but each challenge pushed me to improve.

#### Next Steps
Working in Hammer was incredibly fun, and I’m excited to keep using it in future projects. While the core of the map is fully complete, there’s still room for polish, particularly in the surrounding environment. That said, this project taught me so much about multiplayer level design, and I can’t wait to apply these lessons to new maps.