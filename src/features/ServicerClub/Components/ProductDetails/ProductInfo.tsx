type ProductInfoProps = {
  title: string;
  description: string;
};

export default function ProductInfo({ title, description }: ProductInfoProps) {
  return (
    <div className="my-2 text-xs text-gray-500 flex flex-col gap-2">
      <h6 className="text-sm text-black font-bold mb-y">{title}</h6>
      {description !== "" && (
        <div className="mt-4">
          <strong className="text-gray-700 text-xs">معرفی:</strong>
          <p className="text-justify mt-2">{description}</p>
        </div>
      )}
    </div>
  );
}
