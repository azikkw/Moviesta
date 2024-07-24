# Moviesta

![Banner](/readme/banner.jpg)

> Moviesta is your ultimate, offering a personalized and immersive experience for movie enthusiasts. Discover trending films, manage your favorites, and dive deep into detailed movie information with an intuitive and visually appealing interface. Whether you want to keep track of what you've added to your favorites, find new recommendations, or simply explore the cinematic world, Moviesta has you covered.

#### In this project used:
1. [TheMovieDatabaseApi (TMDB Api)](https://developer.themoviedb.org/reference/intro/getting-started)
2. Firebase

---

## 🌐 BASE URL
You can access `Moviesta` by this link:
> https://moviesta.onrender.com

---

## 📱 FUNCTIONALITY
#### In Moviesta user can:
1. Create an account
2. Search for movies in the extensive library
3. Add movies to the `Favorites` collection
4. Upload your own movies, and also manage them

---

## 📝 PREPARING FOR IMPORTING
#### To start importing a project `If you want to run it without docker`, you need to:
[Node.js](https://nodejs.org/en) version 18.0.0 [min] and more.

## 📤 IMPORTING
Step-by-step instructions for importing the `Moviesta` project.

#### 1. Downloading

Clone project using the `git clone` command. To do this, you need to go to the command prompt and specify the path to the folder where you will import the project.

Next you will need to enter the following:
```bash
git clone https://github.com/azikkw/Moviesta.git
```

You can also [download ZIP archive](https://github.com/azikkw/Moviesta/archive/refs/heads/main.zip) and unpack it to the folder you want.

#### 2. Building the project with Docker 🐋
```bash
make build
```

#### 3. Building the project with Package Manager
Since the project does not contain all the necessary dependencies, you will need to install them.

To do this, you need to enter the following command:
```bash
# For npm package manager
npm install
# For pnpm package manager
pnpm install
# For yarn package manager
yarn install
# For bun package manager
bun install
```

---

## ▶️ PROJECT START

After completing all the steps described in the instructions, you can run the project in two ways:

#### 1. If you built it using Docker 🐋
```bash
# To run:
make run
```
```bash
# To stop
make stop
```

#### 2. If you built it using Package Manager
```bash
# For npm package manager
npm run dev
# For pnpm package manager
pnpm run dev
# For yarn package manager
yarn dev
# For bun package manager
bun run dev
```

#### 3. Once project is running you can access it at:
> http://localhost:3000
