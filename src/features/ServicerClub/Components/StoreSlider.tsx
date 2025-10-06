import { SliderItem } from "../type";
import Slider from "./Slider";

interface StoreSliderProps {
  slides: SliderItem[];
}

export default function StoreSlider({ slides }: StoreSliderProps) {
  if (!slides?.length) return null;
  return <Slider images={slides} />;
}
