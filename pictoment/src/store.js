import { reactive } from 'vue'

export const store = reactive({
  paletteOps: [
    { name: 'app', colours: ["#1f1d55", "#c4bbdf", "#a5d2ff", " #532ac8", "#ffbfe7"] },
    { name: 'peach', colours: ["#FFEFFF", "#FF9AAD", "#EF559C", "#FF65AD", "#FF0063", "#BD4573", "#CE0052", "#9C0031", "#522031"]}, 
    { name: 'cherry', colours: ["#FFBACE", "#FF7573", "#DE3010", "#FF5542", "#FF0000", "#CE6563", "#BD4542", "#BD0000", "#8C2021"]},
    { name: 'orange', colours: ["#DECFBD", "#FFCF63", "#DE6521", "#FFAA21", "#FF6500", "#BD8A52", "#DE4500", "#BD4500", "#633010"]},
    { name: 'grape', colours: ["#FFCFFF", "#EF8AFF", "#CE65DE", "#BD8ACE", "#CE00FF", "#9C659C", "#8C00AD", "#520073", "#310042" ]},
    { name: 'banana', colours: ["#FFFFCE", "#FFFF73", "#DEDF21", "#FFFF00", "#FFDF00", "#CEAA00", "#9C9A00", "#8C7500", "#525500"]},
    { name: 'plum', colours: ["#DEBAFF", "#BD9AEF", "#6330CE", "#9C55FF", "#6300FF", "#52458C", "#42009C", "#210063", "#211031"]},
    { name: 'blueberry', colours: ["#BDBAFF", "#8C9AFF", "#3130AD", "#3155EF", "#0000FF", "#31308C", "#0000AD", "#101063", "#000021"]},
    { name: 'kiwi', colours: ["#ADFFAD", "#73FF73", "#63DF42", "#00FF00", "#21DF21", "#52BA52", "#00BA00", "#008A00", "#214521"]},
    { name: 'fruit salad', colours: ["#FF65AD", "#BD0000", "#FF6500", "#8C00AD", "#FFFF73", "#9C55FF", "#1075FF", "#63DF42"]},
    { name: 'berries', colours: ["#EF559C", "#FF0063", "#CE0052", "#FF0000", "#BD0000", "#8C2021", "#6330CE", "#6300FF", "#210063"]},
    { name: 'tropical mix', colours: ["#FFCF63", "#FFAA21", "#FF6500", "#FFFF73", "#FFFF00", "#FFDF00", "#73FF73", "#214521", "#21DF21"]},
  ],
  tool: "",
  palette: {},
  colour: "",
  size: 0,

  setDefaults(defaultTool, defaultPalette) {
    this.tool = defaultTool;
    this.palette = this.paletteOps[defaultPalette];
    this.colour = this.palette.colours[0];
    this.size = 1;
  },

  selectTool(tool, toolPanel) {
    this.tool = tool.name;
    toolPanel.forEach(toolBtn => {
      toolBtn.state = toolBtn == tool;
    });
  },

  selectPalette(palette, palettePanel) {
    var idx = 0
    palettePanel.forEach(paletteBtn => {
      if (paletteBtn == palette) {
        this.palette = this.paletteOps[idx];
      }
      idx++;
    });
  },

  selectColour(selColour) {
    var idx = 0
    this.palette.colours.forEach(colourOp => {
      if (colourOp == selColour) {
        this.colour = selColour;
      }
      idx++;
    });
  },

  selectSize(size, sizePanel) {
    this.size = size.value;
    sizePanel.forEach(sizeBtn => {
      sizeBtn.state = sizeBtn == size;
    });
  },
  
})