Tetris Game in React

Welcome to my Tetris game! This project is a React-based implementation of the classic Tetris game, created as a learning exercise. The code was developed by following a YouTube tutorial. Below, you'll find details on how to set up, play, and understand the project.

DEMO!
Check out the live version of the game in your browser here --->  https://j-greaves.github.io/tetris/

Tip: For the best experience, if the game appears too large to fit in your browser window, try reducing the width of your window to a more portrait orientation. This will cause the game to scale down and fit nicely within the screen.

Features

Classic Tetris gameplay
Real-time score updates
Line clearing and level progression
Simple and intuitive controls
Ghost piece preview (shows where the piece will land)

Usage

Once the game is running, use the following controls to play:

Arrow Keys: Move the Tetromino left, right, or down.

Up Arrow: Rotate the Tetromino.

Spacebar: Instantly drop the Tetromino to the bottom.

P: Pause the game.

The goal is to complete horizontal lines without gaps, which will then disappear and add to your score. The game speeds up as you clear more lines.

Technologies Used

JavaScript (ES6+)
React
HTML5
CSS3

Project Structure

Here's a brief overview of the project structure:

bash
Copy code
/src
  /components   # Reusable React components
  /hooks        # Custom React hooks
  /business        # Utility functions
  App.js        # Main application component
  index.js      # Entry point
  styles.css    # Global styles
  
Acknowledgments

YouTube Tutorial: This project was heavily inspired by How to Build Tetris with JavaScript and React by Restful Coder (YouTube).
React Community: For providing great documentation and support.

Future Improvements

While the game is fully functional, there are several areas I'd like to improve as I continue learning:

Mobile Responsiveness: Optimize the game for mobile devices.
Better Animations: Add smoother transitions and animation
Scoreboard: Implement a high-score leaderboard.
Sound Effects: Include sound effects for a more immersive experience.
