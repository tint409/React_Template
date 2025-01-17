A ready template for a quick start with react. 🚀

[Demo](https://start.aionchain.co/)

---

## ✨ Features

- 🌙 Dark Mode (DARK, LIGHT)
- 🎨 Template Color (YELLOW, BLUE, GREEN, RED, PURPLE)
- 📥 Header Types (STATIC, FIXED, HIDE, ELEVATE)
- 📍 Scroll to Top
- 📱 PWA
- 🔑 Authentication Types (WEB1, WEB3)
- 💾 Database Types (MONGO, MARIA)

---

## 📝 How to Edit

1. Clone the project
2. Edit `Home.js` & `Page1.js` (or add other Pages) in `Client\src\Content\Screens` path
3. Modify (or add) name of your pages in: \
   3.1. Main.js (`Client\src\Content`) for routing. \
   3.2. ListItems.js (`Client\src\Content\Header\Drawer`) for Show in Menu.
4. Modify values of .env file

```
 ** Only modify files of `Content` folder (client\src\Content), .env file & index.html. **
```

---

## ⚡️ How to Run

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

#### Frontend:

In the `client` directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##

##### Default Values of .env file:

```
REACT_APP_SERVER_URL=""             >>  Empty String for Mock Web Server or
                                    >>  Input Your Server Address for Real Server

REACT_APP_THEM_MODE="DARK"          >>  DARK or LIGHT
REACT_APP_THEM_COLOR="PURPLE"       >>  YELLOW, BLUE, GREEN, RED or PURPLE
REACT_APP_HEADER_TYPE="STATIC"      >>  STATIC, FIXED, HIDE or ELEVATE
REACT_APP_WALLET_TYPE="WEB3"        >>  WEB1 or WEB3
```

---

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

#### Backend:

If you want to run the Real Server, First edit the `.env` file (in client).

```
REACT_APP_SERVER_URL="http://localhost:4000"
```

Then in the `server` directory, you can run:

### `nodemon app`

Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

---

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![MariaDB](https://img.shields.io/badge/MariaDB-%230081CB.svg?style=for-the-badge&logo=mariadb&logoColor=white)

#### Database:

You can use Docker to run the database.

[MongoDB](https://github.com/barkand/Docker_DE/blob/main/databases/mongodb-docker-compose.yml)
[MariaDB](https://github.com/barkand/Docker_DE/blob/main/databases/mariadb-docker-compose.yml)

---

## 📌 Demo

![demo](https://www.aionchain.co/github/main.jpg)

> Light

![light](https://www.aionchain.co/github/light.jpg)

> Dark

![dark](https://www.aionchain.co/github/dark.jpg)
