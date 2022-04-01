# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Priyal Patel

Time spent: 12 hours spent in total

Link to project: (https://glitch.com/edit/#!/better-messy-minotaurasaurus?path=README.md%3A9%3A18)

## Required Functionality

The following **required** functionality is complete:

* [✅] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✅] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✅] Game buttons each light up and play a sound when clicked. 
* [✅] Computer plays back sequence of clues including sound and visual cue for each button
* [✅] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✅] User wins the game after guessing a complete pattern
* [✅] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✅] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✅] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✅] More than 4 functional game buttons
* [✅] Playback speeds up on each turn
* [✅] Computer picks a different pattern each time the game is played
* [✅] Player only loses after 3 mistakes (instead of on the first mistake)
* [✅] Game button appearance change goes beyond color (e.g. add an image)
* [✅] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✅] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
  A timer and diffculty level bar that increases and decreases number of tiles

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/2b9d1fd4-93c2-46f5-9d2d-55bbc2c75535/69424d3c-2712-4b39-acb4-6367254ae405.gif1.gif?v=1648758652542)
![](https://cdn.glitch.global/2b9d1fd4-93c2-46f5-9d2d-55bbc2c75535/91a1f0f2-7e93-4d32-ae5b-e93bb5a61548.gif2.gif?v=1648758703248)
![](https://cdn.glitch.global/2b9d1fd4-93c2-46f5-9d2d-55bbc2c75535/2a6ad501-e8cd-4aac-bad9-93251ef9f23e.gif3.gif?v=1648758750509)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/jsref/prop_audio_loop.asp
https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I think a challenge for me was figuring out how to implement a timer in javascript and reset it every time the player
clicks stop or changes their level thus starting a new game. Initially I thought I would need two seperate tags in HTML, one for
minutes and one for seconds and getting the text in those tags/attribute and reading the, and subtracting the time.
But I realized that it would be easier to just have the time defined in one tag but in my javascript file I will do the 
calculation and then append it as a string, get the inner html of the that tag and change it. I also would reset the time
in my stop() game function to reset it back to 1 minute.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

When I was doing my project and looking for resources, a lot of them would mention jQuery and other framworks to help
resolve an issue. I wanted to know how those framworks combine along with javascript and in what instances would you 
use them. I also wanted to know more about how you would actually publish a webpage as a site. I also want to know 
more about how javascriot would tie in with multiple HTML pages linked together.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time, I would probably make it more interactive and appealing. For example, I would have the user input the time 
they want for each game and maybe add some effects if they win or lose the game. I would also add a dark mode as an option. 
Looking back at the code itself, I realize it looks a bit messy. I would order the functions better and add appropriate whitespace to it so that it is easier for the
person reading the code. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1iViAUlDzMyjCxQXe2rhCGGcqA8CfX9tj/view?usp=sharing)


## License

    Copyright [Priyal Patel]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.