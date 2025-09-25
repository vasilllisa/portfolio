---
title: "Windmill Menu: Diegetic Prototype"
start: 2024-01-23
end: 2024-01-30
team: Solo
description: Prototyped a diegetic menu using a windmill as the core navigation element.
software:
  - unity
  - figma
discipline: uiux-design
tags:
  - unity
  - figma
  - uiux-design
thumb: /static/content/thumbs/diegeticmenu.jpg
gif: /static/content/gifs/diegeticmenu.webp
---
---
## **Overview**

This project explored how a menu could stop feeling like a flat overlay and instead exist as part of the game world. I designed a diegetic interface built around a windmill, where each blade becomes a navigational element and every selection triggers a physical reaction in the scene.

Working solo, I sketched, prototyped, and implemented the system in Unity. The focus was on making standard menu buttons such as Resume, Options, and Quit feel spatial and thematic, while still keeping interaction simple and legible. My approach was to treat the menu as a world object first, interface second.

The result was a functioning Unity prototype with animated windmill navigation, dynamic transitions for each button, and a pause menu system integrated directly into the environment.

---

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe 
    src="https://player.vimeo.com/video/1121705690?badge=0&autopause=0&player_id=0&app_id=58479" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    style="position:absolute;top:0;left:0;width:100%;height:100%;" 
    title="Windmill Menu: Diegetic Interface Showcase">
  </iframe>
</div>

---
## **Market Research**

To ground the idea, I looked at three games that use atmosphere-heavy menus and interface design. Each one became a reference point for how I could push immersion while keeping the menu functional.

_BioShock Infinite_ stood out for how it tied camera movement and interface into the world itself. The sense of motion and the way menus carry narrative weight made it a strong reference for building immersion into my own design.

<figure class="caption">
  <img src="dm_bioshock.png" width="600" alt="BioShock Infinite menu reference">
  <figcaption>BioShock Infinite, menus tied to camera movement and world detail.</figcaption>
</figure>

_Dishonored_ has a very different approach, with a minimal HUD that still feels tied to the setting. I was drawn to how the interface never distracts from the environment, while still carrying a distinct identity that matches the world.

<figure class="caption">
  <img src="dm_dishonored.png" width="600" alt="Dishonored menu reference">
  <figcaption>Dishonored, a minimal interface rooted in its steampunk setting.</figcaption>
</figure>

_Frostpunk_ showed me how a menu can stay clean and readable while still carrying the tone of the game. The stark style blends with the frozen setting without losing clarity, which was important for me to remember when working with a visually heavy steampunk theme.

<figure class="caption">
  <img src="dm_frostpunk.png" width="600" alt="Frostpunk menu reference">
  <figcaption>Frostpunk, stark menus that balance mood with clarity.</figcaption>
</figure>

These three examples shaped the foundation of my prototype. I pulled inspiration from their clarity, their motion, and their integration with the game world, combining those ideas into a windmill-centered menu that felt at home inside its fictional space.

---
## **Context**

The menu was designed for a hypothetical game called _Gears in the Breeze_, a 3D steampunk exploration adventure where wind power drives both the story and the technology of the world. I wanted the first thing players interact with -- the menu -- to establish that identity before the game even begins.

The windmill became the anchor. It’s both a symbol of the world’s power source and a mechanical structure that naturally suggests rotation, movement, and spokes. Each blade became a navigational element, turning interaction into a spatial choice rather than a flat button click.

My goal was twofold: make the menu feel like a world object instead of an abstract overlay, and still keep it usable at a glance. Every choice came back to the same question: does this keep immersion without sacrificing clarity? For some decisions that meant choosing a sweeping camera motion, for others it meant paring down sliders to their simplest form.

---

## **Design Progress**

I started by sketching out how a windmill could double as a navigation hub. The blades gave me a natural radial layout, but I had to decide how the camera would move so each option felt like part of the same structure rather than separate screens. The drawings were loose on purpose, letting me try different layouts and interactions without worrying about detail. This stage was about speed -- seeing how many ideas I could get on paper and discarding the ones that didn’t feel natural.

<figure class="caption">
  <img src="dm_sketches.png" width="500" alt="Early windmill menu sketches">
  <figcaption>Rough sketches exploring windmill navigation and camera movement.</figcaption>
</figure>

Once the windmill concept felt solid, I moved into wireframing the main menu. I worked with an asymmetrical layout, using a hub-and-spoke model where the windmill anchored navigation. To test balance, I overlaid a 3×3 grid and traced a Golden Path that guided the eye from the windmill to the title and then out toward the background vista. The goal was to make the menu feel spatially grounded without losing readability.

<figure class="caption">
  <img src="dm_mm_goldenpath.gif" width="500" alt="Wireframe showing grid and Golden Path overlay">
  <figcaption>Main menu wireframe with grid overlay and Golden Path flow, showing how focus moves from the windmill to the title and into the vista.</figcaption>
</figure>

Beyond the main menu, I explored how the same windmill-driven logic could extend into other screens. The Options menu kept the industrial theme with sliders and toggles styled as mechanical parts. The Credits screen rotated the camera to the bottom-left to reveal water, with text sliding under the water. The CODA sequence pushed the underwater motif further, while the Pause menu spun out smoothly from the left edge of the windmill. Each wireframe tested how to keep transitions consistent while giving every screen its own spatial identity.


<figure class="caption">
  <img src="dm_wireframes_collage.png" width="500" alt="Collage of options, credits, coda, and pause menu wireframes">
  <figcaption>Wireframes for secondary menus, options, credits, CODA, and pause, extending the windmill logic across the system.</figcaption>
</figure>

Each of these steps shaped the Unity prototype. By the time I moved into engine, the core questions were already solved: the windmill was the anchor, the boards and signs were the labels, and the transitions had to feel like physical reactions.

---
## **Prototype**

In Unity, the menu came to life as the windmill reacted to every button press with camera shifts and animated transitions. Each screen -- Options, Credits, CODA, Pause -- was built as part of the same world space, so moving between them felt like a physical motion rather than a scene change. I created 21 animations to handle interactions and menu transitions, from the windmill rotation on Start to the descent sequence on Quit. Building and tuning those sequences pushed me deeper into Unity’s animation system and gave me room to refine timing, responsiveness, and visual consistency.

---
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1121711493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Windmill Menu In-Engine"></iframe></div>

---
## **Playtesting**

I ran six playtests to see how the menu held up outside of my own screen. The core idea landed immediately -- everyone liked the windmill as the centerpiece, and small details like debris, swaying signs, and underwater credits made the system feel alive. Animations were often described as smooth or even “fantastic,” and the consistent motion helped the interface feel more like part of the world than a static overlay.

The sessions also surfaced issues I couldn’t ignore. Water audio overpowered the music, some fonts blended into the background, and the Unity void broke immersion. Testers wanted stronger hover feedback and more consistent styling on sliders and toggles. I implemented nearly all of this feedback: rebalanced audio, adjusted fonts and contrast, added signifiers for interactions, and refined backgrounds to close immersion gaps. Each change pushed the prototype closer to its goal: staying diegetic while still being clear and usable.

![[inengineview2.png]]

---
## **Ending Note**

Overall, I think the idea worked. The windmill felt like a strong anchor for the system, and the project was fun on more than one level. Part of the concept came from my love of windmills: the way they look, the mechanics of how they turn, even their architectural presence. My grandmother shares that love, so building this menu felt a little like a sideways gift to her. At the same time, I enjoyed wearing all the hats for once: animation, programming, set dressing, layout. It let me bring my level design instincts into UI work, and I left genuinely happy with how the menu flowed as a space.

Almost every piece of feedback led to an improvement, from cleaning up the background void to adjusting text contrast and adding better hover states. Seeing the system evolve through those small but concrete fixes reinforced one of my favorite lessons in UI: polish is what makes ideas believable.

And as for the windmill, it spins, it creaks, it drags the whole menu along with it. Fitting, since gravity is the deadliest boss in every game anyway. So if you ever needed a dramatic way to quit the game, you can drown in this one with style.