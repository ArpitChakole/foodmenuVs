# Futuristic Web Portal

## Overview
The Futuristic Web Portal is a modern web application designed for salespeople to manage client details and generate personalized package options. The portal features a sleek lavender theme and provides an intuitive interface for both salespeople and end users.

## Features
- **Client Details Entry**: Salespeople can enter client information through a user-friendly form.
- **Package Generation**: Automatically generates eligible packages (Gold, Silver, Platinum) with unique IDs based on client details.
- **Personalized Links**: Creates unique links for end users to access and customize their package options.
- **Package Customization**: End users can select and customize their package options, including snacks, main courses, and desserts.

## Project Structure
```
futuristic-web-portal
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── styles
│   │       └── theme.css
│   ├── components
│   │   ├── ClientForm.tsx
│   │   ├── PackageGenerator.tsx
│   │   ├── PersonalizedLink.tsx
│   │   └── PackageCustomizer.tsx
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── Packages.tsx
│   │   └── Customize.tsx
│   ├── utils
│   │   ├── packageUtils.ts
│   │   └── idGenerator.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd futuristic-web-portal
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the portal.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.