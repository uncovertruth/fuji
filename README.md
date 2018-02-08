# fuji

[![Build Status](https://travis-ci.org/uncovertruth/fuji.svg?branch=master)](;https://travis-ci.org/uncovertruth/fuji)
[![dependencies Status](https://david-dm.org/uncovertruth/fuji/status.svg)](https://david-dm.org/uncovertruth/fuji)
[![devDependencies Status](https://david-dm.org/uncovertruth/fuji/dev-status.svg)](https://david-dm.org/uncovertruth/fuji?type=dev)
[![CodeFactor](https://www.codefactor.io/repository/github/uncovertruth/fuji/badge)](https://www.codefactor.io/repository/github/uncovertruth/fuji)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/972677ba82334ed0adcb601bcd6c40c8)](https://www.codacy.com/app/USERDIVE/fuji?utm_source=github.com&utm_medium=referral&utm_content=uncovertruth/fuji&utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/9ec61a18-4555-4149-9664-5ed8d61b7094)](https://codebeat.co/projects/github-com-uncovertruth-fuji-master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](;https://github.com/prettier/prettier)

> basscss based ghost theme

## Install

```sh
docker pull ghost
```

## Usage

```sh
npm start
docker run -d -p 3001:2368 -v `pwd`/dist:/var/lib/ghost/content/themes/fuji ghost

> open localhost:3001
```

### Deploy

```sh
npm run build
zip -r fuji.zip dist
```

## Contribute

PRs accepted.

## License

MIT © UNCOVER TRUTH
