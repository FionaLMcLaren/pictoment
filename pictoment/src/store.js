import { reactive } from 'vue'

export const store = reactive({
  tool: "Brush",

  selectTool(tool, toolPanel) {
    this.tool = tool.name;
    toolPanel.forEach(toolBtn => {
      toolBtn.state = toolBtn == tool;
    });
  }
  
})