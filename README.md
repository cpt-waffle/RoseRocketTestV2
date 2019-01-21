# RoseRocket Truck Location Techincal Test
## Live Link [here](https://vasiliy-klimkin.github.io/rrTestV2/)
Backend deployed through heroku and Frontend deployed through github pages.

![1](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/app.png?raw=true)

Built by Vasiliy KLimkin.

### Dependancies

 - Node v11.5.0

#### Backend
 - body-parser
 - cors
 - express
 - nodemon (dev-only)

#### Frontend
 - axios
 - konva
 - rc-slider
 - react
 - react-select


### Setup

Clone or Copy this repo.
```
cd RoseRocketTestV2
```
Open another terminal window in this same directory you just `cd` in.

- Terminal 1 (server)
```
npm install
mpm start
```
- Terminal 2 (front-end)
```
cd frontend
npm install
npm start
```

![2](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/startup.gif?raw=true)

If a browser does not open, go to `http://localhost:3000/` to see the app.

# Features

### Core App

![3](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/coreApp.gif?raw=true)

A Backend API is made to display and persist a map given in the challenge, the driver position (denoted by the red star), and how much of the route the driver completed. You can use the `Driver Control` form to select the position of the driver. Once you click submit the location will be persisted to the server, and the driver progress will be updated.

### Bonus 1 - Bonus Driver Control

![4](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/bonus1.gif?raw=true)

A second driver can be added. You can select any position on the map (200 x 200, it will not let you enter lower than 0 and higher than 200). Once the position has been submitted, the bonus driver will be saved to the server followed up visualized on the map, along with a line to the closest stop.

### Bonus 2 - Total Time & Time Left

![5](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/bonus2.gif?raw=true)

At the Bottom of the map, there is information of how much total time it will take the driver to complete the entire map, and how much time is left to complete his route from the current location.

### Bonus 3 - Real-time Slider

![6](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/bonus3.gif?raw=true)

Inside the `Driver Control` form, there is a slider instead of a numeric field. It will change the driver location and visualize it in real time. If you switch legs the driver location will be 0 because it will start from the beginning of the leg. Make sure to submit to persist the drivers' progress.

### Extra Bonus 4 - Zoom

![7](https://github.com/vasiliy-klimkin/RoseRocketTestV2/blob/master/docs/images/bonus4.gif?raw=true)

At the bottom of the map, at the right corner, there are two icons. They are used to zoom in and out of the map. I found it difficult to be a 1 to 1 visualization, so the default zoom is set to seven

