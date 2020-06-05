<h1 align="center">
<img src="https://github.com/ribeirogab/jikan-nodejs/blob/master/examples/logo.png" alt="Jikan wrapper" width="400"/>
</h1>
# Jikan Node.js
> A wrapper for the jikan REST API.

For more information, please refer to [Jikan documentation](https://jikan.docs.apiary.io/#).

## Getting Started

### Installation
> if you use npm
```
$ npm install jikan-nodejs
```
> if you use yarn
```
$ yarn add jikan-nodejs
```

### Example

> Feature: genre.list(type, genreId, limit)
```js
const { genre } = require('jikan-nodejs');

async function getAnimeByGenre() {
  const animes = await genre.list('anime', 1, 10);
  console.log(animes);
}

getAnimeByGenre();
```

## Features
- itemsById
  - **Import:**
    - ```js const { itemsById } = require('jikan-nodejs');```
  - **Parameters type:**
    - ``` ts itemsById(type: 'anime' | 'manga', mal_ids: number[]): object[]; ```
- Genre ()
  - Anime Listing (All Anime by Genre)
  - Manga Listing (All Anime by Genre)
  - **Import:**
    - ```js const { genre } = require('jikan-nodejs');```
  - **Parameters type**
    - ``` ts genre.list(type: 'anime' | 'manga', id: number, limit?: number, page?: number): object[]; ```

---

## Contributing

> To get started...

### Passo 1

- **Opção 1**
    - 🍴  Fork this repo!

- **Opção 2**
    - 👯  Clone this repo to your local machine using `git clone https://github.com/ribeirogab/jikan-nodejs.git`

### Passo 2

- **HACK AWAY!** 🔨🔨🔨

### Passo 3

- 🔃  Create a new pull request using <a href="https://github.com/ribeirogab/jikan-nodejs/compare/" target="_blank">`https://github.com/ribeirogab/jikan-nodejs/compare/`</a>.

---

## Contributors

| <a href="https://github.com/ribeirogab" target="_blank">**Gabriel Ribeiro**</a> |  
:---:
| [![ribeirogab](https://avatars3.githubusercontent.com/u/44847326?s=200&u=30a156f0a61f81eaa137cb286ed13e9527916039&v=4)](https://github.com/ribeirogab)    | 
| <a href="https://github.com/ribeirogab" target="_blank">`https://github.com/ribeirogab`</a> | 

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.
    
---

## Suporte

Contact me!

- E-mail <a href="mailto:ribeirogabx@gmail.com" target="_blank">`ribeirogabx@gmail.com`</a>

---

## Licensa

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://github.com/ribeirogab" target="_blank">ribeirogab</a>.
