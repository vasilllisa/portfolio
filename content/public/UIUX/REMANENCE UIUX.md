An academic game project developed during its mid-production phase (ui/ux design)

**Team Size:** 18
**Role:** UI/UX Designer
**Duration:** 6 months
**Software:**
- Unreal Engine v5.2
- Figma


**REMANENCE** **is an action-adventure game focused on melee combat, with some light souls-like elements.**

For this project, I led the development of the game's UI.  
I created a mind map to structure the menu wireframes. Then, I integrated these wireframes into Unreal Engine, implementing functionality using blueprinting, and collaborated with the UI artist to ensure the interfaces matched the game's theme. Additionally, I made style guide presentations for the team to align our vision and gather feedback.

#### **MENUS SHOWCASE:**

This video showcases the game's menu system. It begins with the main menu layout and button reactions. It shows the Pause Menu with options like Resume, Options (Audio, Video, Controls), Main Menu, and Quit. It returns to the main menu to show all buttons again, including a view of the Credits tab, and ends with quitting the game.

#### **HUD SHOWCASE:**

This video offers a glimpse of the different player HUD states in the first few minutes of the game. It includes indicators for charge bars, health, stamina and interactables. It also demonstrates different states such as exhaustion, low health, and death, illustrating the HUD's functionality in different gameplay scenarios.


## **Game concept**
### **high concept description:**
Long after a great war reduced humanity to a new dark age, a powerful evil still lurks deep below the rubble of civilization. You were chosen–perhaps, only by chance–to wield an ancient power, and destroy the demon born from man’s sin once and for all. Using a sword, fight against seemingly impossible odds as you dive into the demon’s lair of rubble.

### **design pillars:**
#### Impactful Immersion
First-person combat and exploration deeply engage the player, delivering dark and intense sensory experiences.
#### desperate dance with death
Enemies react to the player’s movements and exploit mistakes made in combat, making every battle a hurdle to overcome.
#### Nonverbal Storytelling
The narrative is hinted at through the environment and interactions, leaving much open to player interpretation.

### **engagement type:**

#### Mastery
The experience of understanding and skillfully exploiting provided combat tools against increasingly difficult and complex enemy encounters.

## **first Semester**

### **Reseach and analysis**

I began by researching games with a similar feel, point of view, and UI elements that I had in mind for a first-person sword game. This included titles like Dishonored, Skyrim The Witcher, Dark Souls, Elden Ring, Sekiro, etc. I used resources like [**GAME UI Database**](https://www.gameuidatabase.com/), [**Interface In Game**](https://interfaceingame.com/), and my own screenshots from games to gather insights on effective UI elements and design trends.

### **mind map**
Next, I created a Mind Map in XMind to structure the design approach and identify key UI elements. This mind map served as a blueprint for the overall layout and functionality of the game's menus and HUD of the first semester for this project.
![[Pasted image 20250908135705.png]]
### **initial wireframing**
Building on the mind map, I developed the initial wireframe in Figma, outlining the basic structure and flow of the main menu, pause menu, and player HUD. This first iteration was crucial in visualizing how different UI components would interact with each other.

FIGMA WIREFRAME

### **ui/ux style guide pt.1!**
Using the insights from my research and wireframes, I created a UI/UX style guide. This guide detailed the visual and interaction design standards. I presented it to the team to gather feedback and ensure everyone was aligned.

GOOGLE SLIDES

### **end of semester 1**
At the end of the first semester, we had a functional prototype showcasing the initial UI design and basic combat mechanics. It set the foundation for further development and refinement in the subsequent semesters.

video!!!


## **Second Semester Changes**

### **art direction change**

When second semester started, the art direction of the game underwent a significant transformation, shifting to a retro style similar to **Lethal Company** or **BPM: Bullets Per Minute**. This required substantial updates to the UI to align with the new visual aesthetic.

![](https://images.squarespace-cdn.com/content/v1/650025cd534c68370415bea9/f63b64e4-9c7d-4d47-8ada-9d3f19c5a8fc/Remanence_ArtDirChangeHor.png)

### **ui/ux style guide pt.2!**

To help our UI Artist understand my UI ideas for the new art direction and align the team with the updated visual style and layout, I created a second UI/UX style guide.


### **hud layout change**

#### **conflict!**

The placement of the player health and stamina/mana bars sparked a significant debate within the team. Initially, these elements were positioned in the top left corner, a common practice in many games. However, **playtesting revealed that players often didn't notice their health depleting** and frequently reacted with surprise when they died.

To address this, **I moved the health bar to the bottom center of the screen, where it would be more visible.** This change led to a conflict with the artists and other team members:

1. The artists argued that placing the health bar in the center **obstructed the view of the sword attack animations**, despite the UI being semi-transparent.
2. Other team members **preferred the traditional top-left placement**, as they were accustomed to it from playing shooters and third-person games.

I highlighted that **in first-person swordplay games**, such as those we drew inspiration from, **the HUD elements are often placed at the bottom to keep critical information within the player's line of sight**. Despite the ongoing disagreement, for the sake of the submission, we decided to keep the health and stamina bars at the bottom center. Playtesting feedback was mixed, with most players indifferent to the placement.

[![](https://images.squarespace-cdn.com/content/v1/650025cd534c68370415bea9/fa342ee8-a06e-433b-b89d-63d64efdeafb/Remanence_LayoutChange.png)



### **hud visual style change**

Initially, the UI design featured a minimalist and generic art style that evoked a sci-fi theme but lacked a distinct visual identity. With the updated layout, our talented UI Artist created different iterations of the art to transition to a less realistic and more fantastical style. This new design provides the game with a unique visual personality that is more thematically fitting, enhancing the overall aesthetic coherence.

[![](https://images.squarespace-cdn.com/content/v1/650025cd534c68370415bea9/3fcbfe55-78b1-476a-b411-b59862acbdd7/Remanence_VisualsChange.png)  
](https://www.vasilisa-shch.com/s/Remanence_VisualsChange.png)


## **interactive ui elements**

### **animated ui concepts**

To enhance the player experience, I focused on creating animated UI elements, with a particular emphasis on the crosshair. Inspired by the game Dark and Darker, I designed these animations to provide clear and engaging feedback during gameplay. Using Figma, I prototyped these animations to visualize their impact.

figma link!!


### **unreal engine prototype**

I developed a prototype in a separate Unreal Engine project to test the feasibility of these animated crosshair concepts using Blueprints. This video showcases the animated crosshair and how it reacts to player actions, providing immediate visual feedback.

VIDEO!

### **Blueprints implementations**

After successful prototyping, I implemented the animated crosshair into the main project. Below is an image of basically all the blueprint I implemented in this project.

  
![](https://images.squarespace-cdn.com/content/v1/650025cd534c68370415bea9/f7e9d7ba-3c52-40aa-9f41-18940024c2c3/Remanence_PNG_UEBlueprintsOrganized.png)




## key learnings
### Surprises that shaped Design Direction


#### **1 // Art direction switch**

#### FEEDBACK
---
During the second semester, we received feedback that the game's original realistic art style was too dark and hard to navigate. Players found it difficult to distinguish visual elements, which negatively impacted their experience. This led us to change the art direction to a retro-fantastical style, making the game more visually distinct and engaging.

#### CHANGED APPROACH
---
To adapt, I worked closely with our UI Artist to redesign the UI art. Due to a heavy workload from other classes, updates to fonts and menus will come next semester. While redesigning the UI Art, the feedback about health not being noticed sparked an idea to create a second UI/UX style guide. This guide was intended to gather team feedback on the new direction. To my surprise, some team members disagreed with some changes, leading to numerous discussions. This leads me to the next point.

#### **2 // Player Healthbar placement**
#### FEEDBACK
---
Playtesting revealed that players often didn't notice their health depleting when the healthbar was placed in the top left corner, leading to unexpected deaths. Feedback indicated that this placement was not optimal for visibility during intense gameplay, as players focused more on the center of the screen.

#### CHANGED APPROACH
---
In response, I moved the health and stamina bars to the bottom center of the screen for better visibility. This change caused some team conflicts, with concerns about obstructing gameplay animations and differing opinions on traditional UI layouts. To address this, I emphasized the importance of player visibility and provided examples from other first-person swordplay games with bottom-centered HUDs. Despite mixed opinions, we decided to keep the health bars at the bottom center for submission, prioritizing player feedback and overall gameplay experience.


#### **3 // Enemy Healthbar placement**

#### FEEDBACK
---
Another surprise came from the team’s differing opinions on where to place enemy healthbars. Some members, particularly programmers, wanted healthbars to be part of the player UI for quick information access. Others preferred healthbars above the enemies' heads for better immersion, similar to Souls-like games. A third group wanted no healthbars for complete immersion.

#### CHANGED APPROACH
---
We initially placed healthbars above enemies' heads, but playtesting revealed this was hard to read. I then moved the healthbars to the top of the Player HUD, similar to boss healthbars in most games, and implemented this change using Blueprints, which was a significant effort. This placement made it easier to see enemy health, but another problem emerged: the healthbars would pop up suddenly and disappear when players looked away. This abrupt behavior was too jarring and could potentially cause motion sickness. By the end of the semester, we reverted to placing healthbars above enemies' heads due to the UI and art combination becoming too cluttered. This iterative process showed the importance of balancing visibility and immersion while considering team feedback and practical design needs.

### obstacles faced

#### **1 // Communication**
---
Communicating was shaky at first, especially for me, as it was my first time working on such a big team. The sheer size and diversity of the team made it difficult to establish clear and effective communication channels. This often led to misunderstandings and delays, as I struggled to coordinate with different team members and ensure that everyone was on the same page regarding UI/UX design requirements.

#### **2 // learning unreal engine**
---
Learning Unreal Engine and blueprinting from scratch was a significant challenge. As a UI/UX Designer, I had to quickly get up to speed with the intricacies of the engine and its blueprinting system. This steep learning curve was daunting and time-consuming, especially with the heavy workload from other classes. It required me to invest a lot of effort into understanding it to implement our design vision effectively.


#### **3 // Blueprinting Issues for UI/UX Elements**
---
Unreal Engine blueprinting for UI/UX or 2D elements caused numerous issues that no one could easily solve. These issues ranged from technical limitations to unexpected bugs, making it difficult to create and implement the desired UI/UX elements. The complexity and unfamiliarity of the blueprint system often left me struggling to find solutions instead of focusing on hands-on design.

### Reflections
---

This project has been an incredible experience so far! Over the past six months, I’ve grown and learned a lot, and with the third semester still to come, it’s not done yet. I’ve met some amazing, talented, and friendly people on this team. But despite a shaky start, we quickly "clicked" and found a way to have fun working together. The team's collective energy has driven our progress and helped us grow together, teaching me the value of clear and consistent communication.

---

Diving into the design of this project has been immensely rewarding. Each session pulled me in because I’m incredibly passionate about this work. The technical issues posed many challenges and frustrations, but they helped me grow both as a person and as a designer. Learning Unreal Engine and its Blueprint system from scratch, while managing a heavy academic workload, was daunting. However, it pushed me to develop robust technical skills and a deeper understanding of the game development process.

---
Team disagreements were essential for learning and finding solutions. Playtesting provided valuable feedback that we could discuss and iterate on, reinforcing the importance of being flexible and responsive to feedback. Specific moments, such as resolving the healthbar placement issue, highlighted the value of diverse perspectives in refining our work. This project has enhanced my technical and design skills and fostered a mindset of continuous learning and adaptability, for which I’m so grateful.