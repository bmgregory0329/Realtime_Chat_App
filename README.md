# Realtime_Chat_App
Realtime chat application using React, Node.js, Express.js, and Chatengine.io utilizing a REST API.
<br/><br/><br/>

## NodeJS Server Setup
* Open a terminal in the ```../server``` directory and enter the following code:
```
npm init
npm install express axios cors
npm install --save-dev nodemon
# Add: "scripts": { "start": "nodemon index.js" }, to package.json
echo node_modules/ > .gitignore
touch index.js
# Add main code
npm run start
```
Done! Your REST API is on ```localhost:3001```.
<br/><br/>

## React Client Setup
Setup this chat client in 3 steps below. <br/><br/>
These steps assume you have already setup the NodeJS server above.
### 1. Setup a Chat Engine server 
Go to [Chat Engine](https://chatengine.io) to setup your own chat server.
* Sign up or Login
* Click "New Project" and follow the steps
* Your ```Project ID``` and ```Private Key``` will be required for step 2.

### 2. Connect config to Chat Engine 
We will connect your Chat Engine server with config variables. <br/><br/>
* In ```../server``` create a new folder called ```config``` and a new file in that folder called ```config.json```.
* Open config.json and add the following:
```
{
  "env": {
    "CHAT_ENGINE_PRIVATE_KEY": "YOUR-PRIVATE-KEY-HERE"
  }
}
```
* Copy the ```config``` folder into the ```../client``` directory and replace with the following:
```
{
  "env": {
    "CHAT_ENGINE_PROJECT_ID": "YOUR-PROJECT-ID-HERE"
  }
}
```

### 3. Install & Start 
* Open a terminal in the ```../client``` directory and enter the following code:
```
npm create vite@latest
Project name: client
Select a framework: React
Select a variant: Javascript
npm install
npm install react-chat-engine-pretty
npm run dev
```

Done! Your Express server is on ```localhost:3000``` and connected to Chat Engine!
