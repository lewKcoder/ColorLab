const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return 0.299 * r + 0.587 * g + 0.114 * b;
};

const isDarkColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  const luminance = getLuminance(rgb);
  return luminance < 128;
};

export const getTextColor = (hex: string) => {
  return isDarkColor(hex) ? "#FFFFFF" : "#000000";
};
