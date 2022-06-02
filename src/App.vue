<template>
  <header>
    <nav>
      <h2>Random Users</h2>
    </nav>
  </header>

  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h2 {
  color: white;
}

nav {
  height: 100%;
}
</style>
