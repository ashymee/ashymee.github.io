export type IslandProps = {
  title: string;
};

export default function Island({ title }: IslandProps) {
  return (
    <div className="island">
      <div className="island__container left" />
      <div className="island__title">{title}</div>
      <div className="island__container right" />
    </div>
  );
}
