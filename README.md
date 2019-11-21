# React-Node-Firebase-Template

A template for Node apps using Node as a Backend, with Google's Firebase Deploy and Database service, scoped by a simple example of a React website that can add and delete videos. The URL list is stored in a node file in the Backend, deployed in Firebase. Videos are not stored in a database **yet**. A version in which the list is stored in firebase's database is being developed. 

This is not a tutorial for creating react or firebase projects (Though one can be found <a href = "https://github.com/USPCodeLabSanca/dev-academy"> here </a>). This is a shortcut which contains a correct syntax for :

-  React Hooks/UseState. 
-  Axios requesting and HTTP response handeling. 
-  Node's express syntax for handeling HTTP requests and responsing them. 


Initializing backend is only necessary if one intends to modify it's functions, since their current version is **already deployed on firebase**. Inicializing frontend is necessary either way. 

## Initializing Backend
The following steps are a sheetlist for **development/backend editing**. They are not necessary if you just want to use the application, since the current frontend version sends request to the deployed backend (In this case, just run the frontend). 

```bash
cd backend 
npx firebase-tools
npx firebase-tools login
# Login and accept permissions through browser's popup 
npx firebase-tools init
# Select Functions with Space-bar:  ◯ Functions: Configure and deploy Cloud Functions

# Select javascript as the language for writing functions
# Linter is optional
# !!! DONT'T OVERRIDE ANYTHING !!! Just hit "n" when overriding is requested

```
The backend is now ready for being modified and tested/deployed. Since **CORS** and **Express** are used, we still need to install npm packages: 

```bash
cd functions 
npm install
```

### Testing Changes in Backend 

In ```/functions```, run: 
```bash
npx firebase-tools serve
# Don't forget to change Request URLs in frontend to localhost link
```

Will generate a localhost link.When serving, changes keep local. If the terminal is closed, the server is closed too, which will make frontend operate wrong. Deploying (and adjusting frontends request URLs) is necessary for keeping the changed in google firebases servers. 

### Deploying Backend 

In ```/functions```, run: 

```bash
npx firebase-tools deploy
# Don't forget to change Request URLs in frontend to firebase link
```
Will generate a firebase link with your functions. **Don't forget to change Request URLs in frontend to the firebaselink if testing is intended.**


## Initializing Frontend

```bash
cd frontend 
cd my_app
npm install
npm start
```