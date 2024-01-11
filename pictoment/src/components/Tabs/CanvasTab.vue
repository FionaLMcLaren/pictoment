<template>
<b-container class="tab">
  <b-row>
    <b-col>
        <div class="tab-title ">
            Canvas
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

    <b-row class="pt-2 mx-auto w-100 text-center">
        <slot />
    </b-row>

</b-container>

  </template>