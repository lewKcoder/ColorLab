import { hexToRgb } from "../hex-to-rgb";

const rgbToHex = (r: number, g: number, b: number) => {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const blendMultipleColors = (colors: string[]) => {
  const rgbColors = colors.map(hexToRgb);

  const totalColors = colors.length;

  const r = Math.floor(
    rgbColors.reduce((sum, color) => sum + color.r, 0) / totalColors
  );
  const g = Math.floor(
    rgbColors.reduce((sum, color) => sum + color.g, 0) / totalColors
  );
  const b = Math.floor(
    rgbColors.reduce((sum, color) => sum + color.b, 0) / totalColors
  );

  return rgbToHex(r, g, b);
};

export const blendColorsFromTwo = (hex1: string, hex2: string) => {
  return blendMultipleColors([hex1, hex2]);
};

export const blendColorsFromThree = (
  hex1: string,
  hex2: string,
  hex3: string
) => {
  return blendMultipleColors([hex1, hex2, hex3]);
};
