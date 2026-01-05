<script lang="ts" setup>
const { today, dates } = useCalendarDate();
</script>

<template>
  <div class="py-4">
    <h2 class="text-xl">Calendar</h2>
    <div class="w-1/2">
      <div class="grid grid-cols-7">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thr</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div v-for="(days, i) in dates" :key="`date-${i}`" class="grid grid-cols-7">
        <span
          v-for="(day, j) in days"
          :key="`day-${j}`"
          :class="{
            'bg-sky-700 rounded-full': day === today.getDate(),
            'w-1/2 flex items-center justify-center px-4 py-1': true,
          }"
        >
          {{ day !== 0 ? day : "" }}
        </span>
      </div>
    </div>
  </div>
</template>
