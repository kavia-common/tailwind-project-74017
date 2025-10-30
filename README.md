# Tailwind Todo App

A beautiful, fully functional todo application built with React and Tailwind CSS. This project is designed to help you explore and learn Tailwind CSS utility classes through a practical example.

![Todo App Preview](https://via.placeholder.com/800x400/a855f7/ffffff?text=Todo+App+Preview)

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Task counter
- ✅ Beautiful gradient UI
- ✅ Smooth animations and transitions
- ✅ Responsive design

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** or **Create React App** - Build tool

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

Check your versions:
```bash
node -v
npm -v
```

## Installation

### 1. Create a new React project

**Option A: Using Vite (Recommended - Faster)**
```bash
npm create vite@latest tailwind-project -- --template react
cd tailwind-project
npm install
```

**Option B: Using Create React App**
```bash
npx create-react-app tailwind-project
cd tailwind-project
```

### 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 3. Initialize Tailwind

```bash
npx tailwindcss init -p
```

This creates two files:
- `tailwind.config.js`
- `postcss.config.js`

### 4. Configure Tailwind

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. Add Tailwind directives to CSS

Open `src/index.css` and replace its contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Install Lucide React (for icons)

```bash
npm install lucide-react
```

### 7. Add the App component

Create a new file `src/App.jsx` and copy the App component code into it.

### 8. Update your main App file

Replace the contents of `src/App.jsx` with:

```jsx

function App() {
  return (<></>)
}

export default App
```

### 9. Start the development server

**For Vite:**
```bash
npm run dev
```

**For Create React App:**
```bash
npm start
```

Visit `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA) to see your app!

## Troubleshooting

### Error: "could not determine executable to run"

If you get this error when running `npx tailwindcss init -p`:

1. Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Or create config files manually:

**`tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**`postcss.config.js`:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Tailwind styles not working

Make sure:
1. You added the `@tailwind` directives to `src/index.css`
2. You imported `index.css` in your `main.jsx` or `index.js`
3. The `content` array in `tailwind.config.js` includes your source files
4. You restarted the dev server after configuration changes

## Learning Tailwind CSS

This project demonstrates many Tailwind features:

### Utilities Used
- **Gradients**: `bg-gradient-to-br`, `from-purple-100`, `via-pink-50`
- **Spacing**: `p-6`, `mb-8`, `gap-4`, `mx-auto`
- **Colors**: Full color palette with variants like `purple-500`, `gray-800`
- **Hover States**: `hover:bg-gray-50`, `hover:text-red-600`
- **Transitions**: `transition-colors`, `transition-opacity`, `duration-200`
- **Flexbox**: `flex`, `items-center`, `justify-between`
- **Grid**: `grid`, `grid-cols-2`
- **Shadows**: `shadow-2xl`, `shadow-xl`
- **Borders**: `rounded-2xl`, `border-2`, `divide-y`
- **Typography**: `text-5xl`, `font-bold`, `tracking-wide`
- **Responsive**: Can add `md:`, `lg:` prefixes for breakpoints

### Experiment and Learn

Try modifying these classes to see how Tailwind works:

1. **Change colors**: Replace `purple-500` with `blue-500`, `green-500`, etc.
2. **Adjust spacing**: Change `p-6` to `p-8` or `p-4`
3. **Modify shadows**: Try `shadow-sm`, `shadow-md`, `shadow-lg`
4. **Update borders**: Experiment with `rounded-none`, `rounded-full`
5. **Play with gradients**: Change gradient directions and colors

## Project Structure

```
tailwind-project/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx          # Todo app component
│   ├── index.css        # Tailwind directives
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Building for Production

**Vite:**
```bash
npm run build
```

**Create React App:**
```bash
npm run build
```

The optimized files will be in the `dist/` (Vite) or `build/` (CRA) directory.

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension

## License

MIT

## Author
RogersCodes

Created as a learning project to explore Tailwind CSS with React.