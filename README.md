<h1 align="center">
<img src="https://i.ibb.co/s1mCvsB/logo.png" alt="jikan node.js" width="480"/>
</h1>

# Jikan Node.js
> A wrapper for the jikan REST API.

For more information, please refer to [Jikan documentation](https://jikan.docs.apiary.io/#).

## Getting Started 

### Installation

if you use npm
```
$ npm install jikan-nodejs
```

if you use yarn
```
$ yarn add jikan-nodejs
```

### Example

> Feature: genre.animesByGenre(genreId, params)
```js
const { genre } = require('jikan-nodejs');

async function getAnimesByGenre() {
  const animes = await genre.animesByGenre(1, { limit: 10 }); // parameters: genreId, { limit }
  console.log(animes); // print 10 animes of genre 1
}

getAnimesByGenre(); 
```

## Features
- Item By Id;
- Anime:
  - Main Information;
  - Characters & Staff.
- Manga:
  - Main Information;
  - Characters.
- Genre:
  - Anime Listing (All Anime by Genre);
  - Manga Listing (All Anime by Genre).

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴  Fork this repo!

- **Option 2**
    - 👯  Clone this repo to your local machine using `git clone https://github.com/ribeirogab/jikan-nodejs.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃  Create a new pull request using <a href="https://github.com/ribeirogab/jikan-nodejs/compare/" target="_blank">`https://github.com/ribeirogab/jikan-nodejs/compare/`</a>.

---

## Contributors

| [<img src="https://avatars0.githubusercontent.com/u/25018440?s=400&u=5ed52972c721a418083b0b89f4797db100c50e3c&v=4" width="115"><br><sub>@lucassodrem1</sub>](https://github.com/lucassodrem1) | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> | <img width="115"> |
|:-:|:-:|:-:|:-:|:-:|:-:| 

## Author

| [<img src="https://avatars3.githubusercontent.com/u/44847326?s=400&u=30a156f0a61f81eaa137cb286ed13e9527916039&v=4" width="115"><br><sub>@ribeirogab</sub>](https://github.com/ribeirogab) |
| :---: |

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.
    
---

## Support

Contact me!

- E-mail <a href="mailto:ribeirogabx@gmail.com" target="_blank">`ribeirogabx@gmail.com`</a>

---

## Licensa

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
