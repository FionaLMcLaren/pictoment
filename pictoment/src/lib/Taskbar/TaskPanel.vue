<script setup>
  import TaskBarBtn from '../../components/Taskbar/TaskBarBtn.vue'

  function tool() {
    let palette = document.getElementById("palette-con");
    let tool = document.getElementById("tool-con");
    let title = document.getElementById("side-tab-title");

    palette.classList.add("d-none");
    tool.classList.remove("d-none");
    title.innerHTML = "TOOL";
  }

  function palette() {
    let palette = document.getElementById("palette-con");
    let tool = document.getElementById("tool-con");
    let title = document.getElementById("side-tab-title");

    palette.classList.remove("d-none");
    tool.classList.add("d-none");
    title.innerHTML = "PALETTE";
  }

  function save() {
    let canvas = document.getElementById("pixcanvas");

    const canvasImageEl = document.createElement('a');
    canvasImageEl.setAttribute("href", canvas.toDataURL("image/png", 1));
    canvasImageEl.setAttribute("download", "pictoment");
    canvasImageEl.click();
    canvasImageEl.remove();
  }

  function clear() {
    let canvas = document.getElementById("pixcanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function toggleGrid() {
    let grid = document.getElementById("guide");
    grid.classList.toggle("d-none");
  }
</script>

<template>
    <b-container fluid>

      <b-row class="gap-5">

        <!-- Tools -->
        <TaskBarBtn :action="tool">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
              <path 
                d="M18 2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2H2v6h6v-2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h-2V4h-2V2zm0 8h-2v2h-2v2h-2v2h-2v2H8v-2H6v-2h2v-2h2v-2h2V8h2V6h2v2h2v2zM6 16H4v4h4v-2H6v-2z" 
                fill="#1f1d55"/> 
            </svg>
        </TaskBarBtn>

        <!-- Colours -->
        <TaskBarBtn :action="palette">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
              <path 
                d="M8 3h8v2H8V3zm0 2H6v4H4v12h16V9h-2V5h-2v4H8V5zm8 6h2v8H6v-8h2v6h2v-4h2v2h2v-2h2v-2z" 
                fill="#1f1d55"/> 
             </svg>
        </TaskBarBtn>

        <!-- Grid -->
        <TaskBarBtn :action="toggleGrid">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
              <path 
                d="M2 2h20v20H2V2zm2 2v4h4V4H4zm6 0v4h4V4h-4zm6 0v4h4V4h-4zm4 6h-4v4h4v-4zm0 6h-4v4h4v-4zm-6 4v-4h-4v4h4zm-6 0v-4H4v4h4zm-4-6h4v-4H4v4zm6-4v4h4v-4h-4z" 
                fill="#1f1d55"/> 
            </svg>
        </TaskBarBtn>

          <!-- Clear -->
          <TaskBarBtn :action="clear">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
              <path 
                d="M16 2v4h6v2h-2v14H4V8H2V6h6V2h8zm-2 2h-4v2h4V4zm0 4H6v12h12V8h-4zm-5 2h2v8H9v-8zm6 0h-2v8h2v-8z" 
                fill="#1f1d55"/> 
            </svg>
        </TaskBarBtn>

          <!-- Save -->
          <TaskBarBtn :action="save">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
              <path 
                d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2h2zm4 18h8v-4H8v4zM20 6h-2V4h2v2zM6 6h9v4H6V6z" 
                fill="#1f1d55"/> 
            </svg>
        </TaskBarBtn>
      </b-row>

      </b-container>
  </template>
