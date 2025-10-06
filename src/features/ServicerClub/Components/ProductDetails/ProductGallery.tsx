import GalleryImageProduct from "./GalleryImageProduct";

type ProductGalleryProps = {
  title: string;
  mainImage?: string | null;
  attaches?: string[];
};

export default function ProductGallery({ title, mainImage, attaches }: ProductGalleryProps) {
  return <GalleryImageProduct title={title} mainImage={mainImage} attaches={attaches} />;
}
