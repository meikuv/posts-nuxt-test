<template>
  <div class="col-md-4">
    <div class="input-group">
      <span id="search" class="input-group-text">
        <IconsSearch />
      </span>
      <input
        class="form-control"
        type="text"
        placeholder="Search by title..."
        aria-describedby="search"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
