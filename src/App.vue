<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/create">Create</router-link>
  </nav>
  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

:root {
  --purple-1: hsl(250, 78%, 75%);
  --purple-2: hsl(250, 26%, 50%);
  --purple-3: hsl(250, 27%, 33%);
  --purple-4: hsl(249, 26%, 21%);
  --pink-1: #fd98d0;
  --pink-2: #ece1fc;
  --gray-1: #41463d;
  --gray-2: #6b6b6b;
  --white-1: #fff;
  --white-2: #f4f9f9;

  --font-primary: 'Noto Sans', sans-serif;
  --font-display: 'Fugaz One', cursive;

  --max-width: 144rem;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-family: var(--font-primary);
  font-size: 62.5%;
  background: var(--white-2);
  overflow-y: overlay;
}

body {
  font-size: 1.6rem;
  color: var(--purple-4);
}

p {
  color: var(--purple-4);
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 250ms ease-out;
}

.route-leave-active {
  transition: all 250ms ease-in;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
