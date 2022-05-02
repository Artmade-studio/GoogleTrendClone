# Google Trends Page Clone

![2022-05-02 21-32-11_1](https://user-images.githubusercontent.com/89075199/166312343-5077d233-3d98-4e31-81ea-426b80c63fe2.gif)

## Solution preview 😎

[website link](https://google-trend-clone.vercel.app)

## The challenge

i wanted to make google ui Dimension Picker tool that appears in [Google trend site](https://trends.google.com/trends/hottrends/visualize?nrow=5&ncol=5&pn=p1) using [Astro](https://astro.build/) static site builder with Preact and animation using [Gsap](https://greensock.com/) by GreenSock.

## Tools I used

- [Astor Build](https://github.com/snowpackjs/astro)
- [Preact](https://preactjs.com/)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [Gsap](https://greensock.com/)
- [Nanostores](https://github.com/nanostores/nanostores)

## Learning outcomes

- using tailwind for the grid to be dynamic i had to add safelist `grid-col` in tailwind config file so the classes are not removed by PurgeCSS.
- using `[Math.floor(Math.random() * (max - min) + min)]` to randomize transitions and text.
- using Gsap [Text plugin](https://greensock.com/docs/v3/Plugins/TextPlugin) to create the typewriter effect.

## 👀 Want to know more about me?

Feel free to check my [Twitter](https://twitter.com/mouktarart) or [instagram](https://www.instagram.com/mouktarart/)
