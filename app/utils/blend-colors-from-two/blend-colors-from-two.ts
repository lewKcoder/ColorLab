const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const rgbToHex = (r: number, g: number, b: number) => {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

export const blendColorsFromTwo = (hex1: string, hex2: string) => {
  const color1 = hexToRgb(hex1);
  const color2 = hexToRgb(hex2);

  const r = Math.floor((color1.r + color2.r) / 2);
  const g = Math.floor((color1.g + color2.g) / 2);
  const b = Math.floor((color1.b + color2.b) / 2);

  return rgbToHex(r, g, b);
};

export const blendColorsFromThree = (
  hex1: string,
  hex2: string,
  hex3: string
) => {
  const color1 = hexToRgb(hex1);
  const color2 = hexToRgb(hex2);
  const color3 = hexToRgb(hex3);

  const r = Math.floor((color1.r + color2.r + color3.r) / 3);
  const g = Math.floor((color1.g + color2.g + color3.g) / 3);
  const b = Math.floor((color1.b + color2.b + color3.b) / 3);

  return rgbToHex(r, g, b);
};
