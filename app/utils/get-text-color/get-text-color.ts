import { hexToRgb } from "../hex-to-rgb";

const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return 0.299 * r + 0.587 * g + 0.114 * b;
};

export const getTextColor = (hex: string) => {
  const rgb = hexToRgb(hex);
  const luminance = getLuminance(rgb);

  return luminance < 128 ? "#FFFFFF" : "#000000";
};
