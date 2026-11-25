<template>
  <div class="slidev-layout deck-standard">
    <slot name="artwork" />
    <header class="deck-title">
      <slot name="title" />
    </header>
    <main class="deck-content">
      <slot />
    </main>
    <footer class="deck-footer">mark.harrison@microsoft.com</footer>
  </div>
</template>
