---
title: "Gambler’s Fallacy: Poker-Themed Interface"
start: 2025-01-01
end: 2025-04-01
team: "10"
description: Designed a fully diegetic poker themed UI, including all menus and HUD, for an isometric roguelike.
software:
  - unity
  - figma
discipline: uiux-design
tags:
  - unity
  - figma
  - uiux-design
thumb: /static/content/thumbs/gamblers.png
gif: /static/content/gifs/gamblers.webp
---
---
## **Overview**

_Gambler’s Fallacy_ is an isometric roguelike where combat and interface are built around poker mechanics. Every attack is a card drawn from the deck, and combinations like flushes or straights amplify effects. The UI extends this theme, with menus and HUD elements designed to function as part of the world rather than separate overlays.

I joined mid-development as the UI/UX Designer, responsible for reworking the interface into a diegetic system. My contributions included designing a poker-table main menu, a revolver-style HUD that tracked cards-as-ammo, and a narrative-driven tutorial integrated into gameplay. Working in Figma and Unity, I created assets, iterated on feedback, and collaborated with programmers to bring designs into Unity, aiming for an interface that felt natural to the game’s world while staying readable in play.

Playable on the [DigiPen Game Library](https://games.digipen.edu/games/gambler-s-fallacy)

---
## **Design Process**

The team already had a strong hook. Poker mechanics shaped every part of combat, but the early interface made that identity unclear. Menus were placeholders, the HUD covered too much of the screen, and nothing tied mechanics back to the theme. This disconnect created two problems. Players did not immediately grasp the poker focus, and the visual noise made combat harder to parse. For the game to work, the UI had to communicate theme and clarity at the same time.

I joined forces with the UI programmer to push the interface further. We treated the project as a chance to experiment and learn, building something harder than standard two dimensional menus. A poker table could serve as the main menu, a revolver chamber could manage cards as ammo, and a deck of cards could stand in for the pause screen. These metaphors carried the poker identity into every interaction, kept the interface clear in fast combat, and made the theme impossible to miss.

We prototyped ideas in Figma, tested them in Unity, and refined each pass through feedback. The result was a set of diegetic menus and HUD elements that reinforced the poker identity while solving clutter and readability issues. The following sections show how this approach shaped the main menu, HUD, pause menu, and the tutorial connection to the prologue.

<figure class="caption"> <img src="gf_figma.png" width="600" alt="Early figma screenshot"> <figcaption>Interactive Figma prototype built to gather teammate feedback and validate design direction before Unity implementation.</figcaption> </figure>

---
### **HUD**

I redesigned it around a revolver chamber. Only three bullets were visible at once, showing the previous, current, and next card, while a single key expanded the chamber to reveal the full hand of five. This cut down on clutter, gave immediate feedback through a spin animation, and kept players focused on the fight instead of parsing a crowded HUD. Alongside this, we moved the chip counter out of inventory and into the HUD, adjusted health placement for balance, and refined layouts across multiple playtests.

Later, the team introduced loadouts where each bullet held five cards. I adapted the design to keep the revolver metaphor intact: each bullet became a circle with pie slices inside it, one slice per card. The change reinforced the theme even further, since players were no longer “shooting cards” but loading bullets with cards. Testing showed this version was clearer, more immersive, and better aligned with the new mechanics.

<figure class="caption"> <img src="gf_hud.gif" width="600" alt="Revolver HUD cycling cards"> <figcaption>Revolver HUD: evolved from a cluttered row to a revolver chamber, then adapted to loadout bullets with card slices.</figcaption> </figure>

---
### **Inventory**

But how did players customize their decks? The original inventory only supported a single hand of five cards, which no longer fit once the team expanded the system to loadouts. Each bullet in the revolver now represented its own hand of five cards, which meant the inventory had to manage five loadouts at once.

I redesigned the interface to display the full chamber in a way that was readable, thematic, and not overwhelming. Each bullet was tied to its own loadout of five cards, with clear descriptions for every ability card to help players make choices quickly. Joker cards added another layer by granting special effects to the entire chamber, and I created the custom icons for them to keep the style consistent.


<figure class="caption"> <img src="gf_inventory.png" width="600" alt="Inventory system showing five loadouts"> <figcaption>Inventory: redesigned to manage five card loadouts across bullets.</figcaption> </figure>

---
### **Main Menu**

The first menu used placeholder buttons that felt disconnected from the game’s theme. It worked functionally, but it missed the chance to set the tone. If combat was built on poker mechanics, the very first interaction also needed to feel like part of that world.

I reimagined the main menu as the first hand you are dealt, laid out on a poker table where each option became a card with its own interaction. The **Play** card is thrown into the air and shot mid air like a target, **Options** appear as the camera turns to a framed painting on the saloon wall, **Credits** unfold through sliding panels with push and pop animations, and **Quit** becomes a tongue in cheek “Declaration of Defeat” contract. I designed the layout, created and refined the card interactions, drew icons, sourced the sound effects, and implemented everything in Unity. Every detail was built to reinforce the poker theme and carry the style from Figma prototypes into the final game.

<figure class="caption"> <img src="gf_play.gif" width="600" alt="Play card shot in mid air"> <figcaption>Play: the card is thrown and shot a target.</figcaption> </figure> 

<figure class="caption"> <img src="gf_options.gif" width="600" alt="Options menu framed painting"> <figcaption>Options: revealed as a framed painting on the saloon wall, replacing a flat submenu with a diegetic detail.</figcaption> </figure> 

<figure class="caption"> <img src="gf_credits.gif" width="600" alt="Credits sliding panels"> <figcaption>Credits: sliding panels and cards animate in after a camera move, built with a menu stack system.</figcaption> </figure> 

<figure class="caption"> <img src="gf_quit.gif" width="600" alt="Quit card declaration"> <figcaption>Quit: styled as a tongue in cheek “Declaration of Defeat.”</figcaption> </figure>

---
### **Pause Menu**

The original pause menu was a flat overlay that blocked the screen completely. It worked, but it cut players off from the action and broke immersion in a game where tension should never fully disappear.

I redesigned it around the same diegetic card theme as the main menu. A deck of cards slides down from the side of the screen, reusing the same sub-menu animations for consistency and efficiency. Only the active options are highlighted, while the rest remain blank. Hovering tilts a card outward, making it feel like drawing from the deck.

The menu never fully covers the game, so players stay aware of their position. When resuming, the cards ripple back up over a short buffer, giving players a moment to react without needing a countdown timer. The result kept the game readable, thematic, and responsive while still providing a breather.

<figure class="caption"> <img src="gf_pause.gif" width="600" alt="Pause menu card deck interaction"> <figcaption>Pause menu: sliding deck of cards, giving players buffer for breathing room.</figcaption> </figure>

---
### **Tutorial**

The original tutorial played looping videos with text overlays every time the game started. Even with a skip button, it broke pacing, discouraged repeat runs, and did nothing to connect mechanics to the story.

I replaced this with an interactive prologue set in a saloon-like room. The player’s partner introduces the backstory in a wild west dialect and teaches mechanics through prompts that only advance after the player performs the action. I wrote the script, designed the prologue space using existing assets, built the flow as a state machine, and implemented UI instructions and sound effects. To support practice, I added an in-world sign where players could rehearse movement and ?"';shooting until the controls felt natural.

Through playtesting, I cut down the dialogue repeatedly to keep pacing tight and avoid losing player interest. The prologue is optional from the main menu and can be exited at any time. New players can start with the tutorial to learn the systems and context, while experienced players can skip straight into a run. This flexibility balanced onboarding with replayability.

<figure class="caption"> <img src="gf_tutorial.gif" width="600" alt="Prologue tutorial sequence"> <figcaption>Prologue tutorial: interactive prompts tied to player actions, supported by narrative dialogue, practice space, and sound effects.</figcaption> </figure>

---
## **Ending Note**

Every part of the UI went through multiple iterations shaped by feedback and testing. The HUD shifted from a row of cards to a revolver chamber to loadout bullets. The inventory expanded into a chamber of loadouts with joker cards. Menus were rebuilt as diegetic interactions that carried the theme into every click. The tutorial became an optional prologue that taught mechanics through play instead of videos.

The UI tied the poker theme into every interaction, made combat clearer, and gave the game a stronger identity. But the real win was working with a team that never folded on an idea, even when the odds looked garbage. It was less about the cards on the table and more about who I was sitting across from, and *that* made the project worth playing through to the end.


