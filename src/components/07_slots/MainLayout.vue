<template>
  <div class="main-layout">
    <header>
      App Title
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="copyright" />
    </footer>
  </div>
</template>
