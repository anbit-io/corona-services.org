export default {
  input: "~/assets/icons/",
  output: "~/assets/gen/",
  defaultSprite: "symbols-sprites",
  elementClass: "symbol",
  spriteClassPrefix: "symbol--",
  iconsPath: false,
  styleFilePath: "~/assets/sass/_symbols.scss",
  iconStyleTemplate: function(symbol, options) {
    return `
$symbol-${symbol.name}: '.${options.spriteClassPrefix}${symbol.name}';
#{$symbol-${symbol.name}}{ 
  width: ${symbol.info.width}px; 
  height: ${symbol.info.height}px;
}`
  }
}
