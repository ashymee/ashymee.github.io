import type { ProcessedTimelineData } from "@/index";

interface ITimelineBar {
  item: ProcessedTimelineData;
  index: number;
  isActive: boolean;
  onBarUpdate: (index?: number) => void;
  accentColor: string | undefined;
}

export const TimelineBar = ({
  item,
  index,
  isActive,
  onBarUpdate,
  accentColor,
}: ITimelineBar) => {
  const backgroundColor = isActive ? accentColor : undefined;

  return (
    <div
      className="timeline-periods__bar"
      style={{
        gridArea: `${item.startRowGrid} / ${item.column} / ${item.endRowGrid}`,
        backgroundColor,
      }}
      onMouseEnter={() => onBarUpdate(index)}
      onMouseLeave={() => onBarUpdate()}
      onClick={() => onBarUpdate(index)} // for mobile use
    />
  );
};
