import Empty from "@/components/Empty";

type CategoryEmptyProps = {
  message: string;
};

export default function CategoryEmpty({ message }: CategoryEmptyProps) {
  return <Empty message={message} />;
}
