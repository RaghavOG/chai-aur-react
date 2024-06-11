# Password Generator App

This React application generates random passwords based on user preferences and allows for easy copying to the clipboard.

## Features

- **Dynamic Password Generation**: Users can specify the length of the password and whether to include numbers and special characters.
- **Copy to Clipboard**: Clicking the "Copy" button copies the generated password to the clipboard.
- **Visual Feedback**: The password field updates dynamically as users adjust settings.
- **Flexible Configuration**: Users can customize the length of the password and choose whether to include numbers and special characters.

## Usage

1. Adjust the length of the password by moving the range slider.
2. Toggle the "Numbers" checkbox to include numbers in the password.
3. Toggle the "Characters" checkbox to include special characters in the password.
4. Click the "Copy" button to copy the generated password to the clipboard.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/password-generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd password-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: Utilized for building the user interface and managing state.
- **useState Hook**: Used to manage component state, including the password length, number allowance, character allowance, and generated password.
- **useEffect Hook**: Employed to execute the password generation logic whenever the password configuration changes.
- **useRef Hook**: Used to create a reference to the password input field for copying to the clipboard.
- **useCallback Hook**: Utilized to memoize the password generation and copy functions to prevent unnecessary re-renders.

## Code Overview

### useState

- **length**: Manages the length of the password.
- **numberAllowed**: Tracks whether numbers are allowed in the password.
- **charAllowed**: Tracks whether special characters are allowed in the password.
- **password**: Stores the generated password.

### useEffect

- Executes the `passwordGenerator` function whenever the password configuration changes (length, numberAllowed, charAllowed).

### useCallback

- **passwordGenerator**: Memoizes the password generation logic to prevent unnecessary re-renders.
- **copyPasswordToClipboard**: Memoizes the function for copying the password to the clipboard.

### useRef

- **passwordRef**: Creates a reference to the password input field for copying to the clipboard.

### Why setPassword in useEffect and useCallback

The `setPassword` function is passed as a dependency to both `useEffect` and `useCallback` hooks to ensure that any changes to the generated password trigger the necessary updates. This helps maintain synchronization between the generated password and the UI.