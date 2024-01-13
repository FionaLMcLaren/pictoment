<template>
<b-container class="tab tab-side">
  <b-row>
    <b-col>
        <div class="tab-title ">
            Tool
        </div>
    </b-col>
    <b-col>
      <div class="m-3 tab-icons">
        <i class="nes-icon circle" />
        <i class="nes-icon circle mx-2" />
        <i class="nes-icon circle" />
      </div>
    </b-col>
  </b-row>

    <b-row class="py-2 px-3 mx-auto">
        <slot />
    </b-row>

</b-container>

  </template>