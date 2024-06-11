# Background Color Changer and Random Color Generator

## Description

This React application allows users to change the background color of the page by clicking on various color buttons. It also includes a "Random Color" button to set the background to a randomly generated color. Additionally, users can double-click any color button to copy the corresponding hex color code to the clipboard.

## Features

- **Change Background Color**: Click on any color button to change the background color of the page.
- **Random Color Generator**: Click the "Random Color" button to set a random background color.
- **Copy Color Code**: Double-click on any color button to copy the hex color code to the clipboard.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/color-changer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd color-changer
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Click on any of the color buttons at the bottom of the page to change the background color.
3. Click the "Random Color" button to change the background to a randomly generated color.
4. Double-click on any color button to copy its color code to the clipboard.

## Code Overview

### Components

- **App**: The main component that maintains the background color state and renders the color buttons.

### Functions

- **getRandomColor**: Generates a random hex color code.
- **handleDoubleClick**: Copies the hex color code to the clipboard and displays an alert.
- **isLightColor**: Determines if a color is light or dark to adjust the text color for readability.

### Example Code

