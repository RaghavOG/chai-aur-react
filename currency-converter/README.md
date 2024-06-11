# Currency Converter

A React-based currency converter application that allows users to convert amounts between different currencies using live exchange rates.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [InputBox](#inputbox)
  - [useCurrencyInfo](#usecurrencyinfo)
- [Contributing](#contributing)
- [License](#license)


## Features
- Convert amounts between different currencies.
- Live exchange rates using a third-party API.
- Swap between currencies.
- Responsive design using Tailwind CSS.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/currency-converter.git
    cd currency-converter
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

## Usage

1. Open the application in your browser at `http://localhost:5173`.
2. Enter the amount you want to convert in the "From" field.
3. Select the currencies you want to convert from and to.
4. Click the "Convert" button to see the converted amount.
5. Use the "Swap" button to swap the "From" and "To" currencies.

## Components

### InputBox

A reusable component for inputting the amount and selecting the currency.

#### Props
- `label`: The label for the input field.
- `amount`: The current amount value.
- `onAmountChange`: Function to handle changes in the amount input.
- `onCurrencyChange`: Function to handle changes in the currency select.
- `currencyOptions`: An array of available currency options.
- `selectCurrency`: The currently selected currency.
- `amountDisable`: Boolean to disable the amount input.
- `currencyDisable`: Boolean to disable the currency select.
- `className`: Additional class names for custom styling.

### useCurrencyInfo

A custom React hook to fetch and return currency exchange rates for a given currency.

#### Usage
```jsx
const currencyInfo = useCurrencyInfo(currency);
```
- `currency`: The base currency to fetch exchange rates for.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
