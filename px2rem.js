export default function genPX2REM(blueprintWidth = 750, num = 100) {
  return function px2rem(px) {
    return `${px / blueprintWidth * num}rem`;
  };
}
