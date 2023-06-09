1. Insall typescript globally by using this command: 
	npm i typescript -g



If you're receiving a "command not recognized" error when trying to run a TypeScript file using the `tsc` command, it means that the TypeScript compiler is not installed or not properly configured on your system. Here are a few steps you can take to resolve the issue:

1. Make sure TypeScript is installed: Verify that TypeScript is installed on your machine by running `tsc -v` in the command line. If you receive a "command not recognized" error, it means TypeScript is not installed.

2. Install TypeScript globally: To install TypeScript globally, you can use the following command (assuming you have Node.js and npm installed):

   ```
   npm install -g typescript
   ```

   This command installs TypeScript globally on your system, making it accessible from anywhere on the command line.

3. Ensure TypeScript is added to the PATH: If TypeScript is already installed, it's possible that the installation directory is not added to your system's PATH environment variable. To add it, follow these steps:

   - Locate the installation directory of TypeScript. It is usually in the `node_modules` folder within the global `npm` installation directory. On Windows, the path might look like: `C:\Users\YourUserName\AppData\Roaming\npm\node_modules\typescript\bin`.
   - Add the TypeScript installation directory to the PATH environment variable. Instructions for adding directories to the PATH vary based on your operating system.

4. Verify the installation: After installing or configuring TypeScript, open a new command prompt or terminal window and try running `tsc -v` again to ensure it's recognized. If the command executes successfully and displays the TypeScript version, you should be able to compile TypeScript files using the `tsc` command.

   `C:\Users\Administrator\AppData\Roaming\npm\node_modules\typescript\bin`

If you still encounter issues, please provide more details about your operating system and the steps you have already taken to install TypeScript, and I'll do my best to assist you further.

# 
- Create `tsconfig.json` file inside root folder using a command `tsc --init` such that all our `.ts` files will be in `src` directory and `.js` compilede files will be inside `./build/js` directory.

- Create those directories and specify them in `tsconfig.json`
   - `"rootDir": "./src",  `
   - `"outDir": "./build/js",`