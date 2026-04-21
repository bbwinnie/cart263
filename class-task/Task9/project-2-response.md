Project II Response

project：Word Nerd
Link: https://luciee246.github.io/cart263/projects/project-II/

The project Word Nerd is a multiplayer word game that combines speed, competition, and real-time interaction. What i found most interesting is how the experience is directly shaped by the code structure. Instead of using complex visuals, the project creates engagement through systems like turn-taking, timers, input checking, and real-time updates.They also updated the multiplayer and character selection system for the final project.

One of the most interesting parts of the code is how player input is handled. The game listens for keyboard input using an event listener on the text field, specifically detecting when the Enter Key is pressed. At that moment, the code processes the input by converting it to lowercase, removing unwanted characters, and checking multiple conditions: the word must exist in the dictionary, must include the required bigram, must be longer than two characters, and must not have been used before. This checking system is important because it makes sure the rules are followed and keeps the game fair for all players.

Another interesting part is the use of timers to control the speed of the game. The code uses setTimeout to give each player 10 seconds to answer. If the player does not answer in time, their health goes down and the turn moves to the next player. This creates pressure and makes the game feel more exciting. There is also another timer that resets the win streak after a short time, so players cannot get rewards too easily.

The project also demonstrates strong state management through variables such as coins, health, winStreak, and playerTurn. These values change based on what the player does. For example, correct answers increase coins and streaks, while wrong answers reduce health and reset streaks. These changes are shown on the screen in real time, which helps players understand the results of their actions.

An important technical feature is the use of Firebase Realtime Database. The code uses functions like push, update, onValue, and onDisconnect to manage multiplayer features. Each player is saved in the database, and listeners(onValue) update the game whenever something changes. This allows all players to see the same game state, such as whose turn it is and the current scores. In addition, the system sends a join message when a player enters the game, which is a very useful and practical feature because it lets everyone know who has joined in real time. The use of onDisconnect to remove players when they leave is also a good design choice. 

Finally, the project includes visual feedback, such as animated coins created after correct answers using requestAnimationFrame. These animations are not only for decoration; they also make the reward system clearer and more satisfying.

Overall, what makes word nerd interesting is how the code builds a complete system. By using event listeners, conditions, timers, and real-time updates, the project turns a simple word game into an engaging multiplayer experience. They did a really great job for this game, and I learned how to use Firebase to create a real-time database. It clearly shows how code can shape user experience.


