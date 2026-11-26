<template>
  <div class="slidev-layout deck-standard">
    <slot name="artwork" />
    <header class="deck-title">
      <slot name="title" />
    </header>
    <main class="deck-content">
      <slot />
    </main>
    <footer class="deck-footer">
      <slot name="footer-left" />
      <span class="deck-footer-email">mark.harrison@microsoft.com</span>
    </footer>
  </div>
</template>
