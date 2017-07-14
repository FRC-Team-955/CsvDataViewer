# Quick start

The only development dependency of this project is [Node.js](https://nodejs.org), so just make sure you have it installed.
Then type few commands known to every Node developer...

```bash
git clone https://github.com/FRC-Team-955/CsvDataViewer.git
cd CsvDataViewer
npm install
npm start
```

# Structure of the project

The application is split between two main folders...

`src` - contains files which need to be transpiled or compiled (files which can't be used directly by Electron).

`app` - contains static assets (images, css, html etc.) which don't need any pre-processing.

The build process compiles all stuff from the `src` folder and puts it into the `app` folder, so after the build has finished, your `app` folder contains the full, runnable application.

Treat `src` and `app` folders like two halves of one bigger thing.

The drawback of this design is that `app` folder contains some files which should be git-ignored and some which shouldn't (see `.gitignore` file). But thanks to this two-folders split development builds are much (much!) faster.

# Development

## Starting the app

```
npm start
```

## Upgrading Electron version

The version of Electron runtime your app is using is declared in `package.json`:
```json
"devDependencies": {
  "electron": "1.6.6"
}
```
Side note: [Electron authors advise](http://electron.atom.io/docs/tutorial/electron-versioning/) to use fixed version here.

## The build pipeline

Build process is founded upon [gulp](https://github.com/gulpjs/gulp) task runner and [rollup](https://github.com/rollup/rollup) bundler. There are two entry files for your code: `src/background.js` and `src/app.js`. Rollup will follow all `import` statements starting from those files and compile code of the whole dependency tree into one `.js` file for each entry point.

# Making a release

To package your app into an installer use command:

```
npm run release
```

It will start the packaging process and ready for distribution file will be outputted to `dist` directory.

All packaging actions are handled by [electron-builder](https://github.com/electron-userland/electron-builder). It has a lot of [customization options](https://github.com/electron-userland/electron-builder/wiki/Options), which you can declare under ["build" key in package.json file](https://github.com/szwacz/electron-boilerplate/blob/master/package.json#L2).

If you want to package your app for multiple operating systems from your own machine [electron-builder kind of supports this](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build), but there is a lot of asterisks. That's why this boilerplate is configured so only package for the OS you're running on is created (you can of course change it).