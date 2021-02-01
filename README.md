# TRIP FINDER

## Installation

Make sure you have Node or Yarn already installed in your system. you can check if Node, Yarn available in your system by running below command,

```
node -v // For Node or

yarn -v // For Yarn
```

If it's not installed in your system then please install them by checking official documentation of,

1. https://nodejs.org/en/
2. https://yarnpkg.com/lang/en/docs/install/

After that, Install Package dependency by running below command at the root directory of inst folder to get started with the project,

```
npm install

yarn
```

For starting development server run below command at the root directory

```
npm start

yarn start
```

For starting production server run below command at the root directory

```
npm build

yarn build
```

> ### OPTIONAL: Before start the project add your config credentials in `next.config.js` file for hotel next and .env file for hotel

<br/>

## Configuration

Fill up the configuration with your information in the `next.config.js` file.

```
env: {
      GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_API_KEY&libraries=geometry,drawing,places',
    },
```
