<template>
  <div class="default-layout">
    <div class="container">
      <div class="row">
        <h2 class="text-muted">Welcome to our post {{ $route.params.id }}</h2>
        <hr />
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
