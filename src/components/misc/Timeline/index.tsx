import { LocalesArgument, Order, ThemeObject, TimelineData } from "@/index";
import { useColorMap } from "@/lib/custom-hooks/useColorMap";
import { useTimeline } from "@/lib/custom-hooks/useTimeline";
import { hexToHsl, setCSSVariable } from "@/lib/timeline";
import { memo, useEffect } from "react";
import { TimelineContent } from "./TimelineContent";
import { TimelineLayout } from "./TimelineLayout";

interface ITimeline {
  timelineData: TimelineData[];
  language: LocalesArgument;
  order: Order;
  theme: ThemeObject;
  stickyMarginTopDesktop?: number;
  stickyMarginTopMobile?: number;
}

const TimelinePure = ({
  timelineData,
  language,
  order,
  theme: {
    colorAccentPrimary,
    colorAccentSecondary,
    colorText,
    colorBackground,
    colorBarHex,
    colorGradation = 4,
  },
  stickyMarginTopDesktop = 60,
  stickyMarginTopMobile = 15,
}: ITimeline) => {
  const { timeline, processedData, years, getFormattedDateString } =
    useTimeline(timelineData, language, order);
  const colorMap = useColorMap(processedData, [
    colorAccentPrimary,
    colorAccentSecondary,
  ]);

  useEffect(() => {
    setCSSVariable("--timeline-color-accent-primary", colorAccentPrimary);
    setCSSVariable("--timeline-color-text", colorText);
    setCSSVariable("--timeline-color-bg-items", colorBackground);
    setCSSVariable("--timeline-color-bar-increment", `${colorGradation}%`);
    setCSSVariable(
      "--timeline-sticky-marging-top",
      `${stickyMarginTopDesktop}px`
    );
    setCSSVariable(
      "--timeline-sticky-marging-top--mobile",
      `${stickyMarginTopMobile}px`
    );
  }, [
    colorAccentPrimary,
    colorText,
    colorBackground,
    colorGradation,
    stickyMarginTopDesktop,
    stickyMarginTopMobile,
  ]);

  useEffect(() => {
    const { hue, saturation, lightness } = hexToHsl(colorBarHex);
    setCSSVariable("--timeline-color-bar-hue", hue);
    setCSSVariable("--timeline-color-bar-saturation", saturation);
    setCSSVariable("--timeline-color-bar-lightness", lightness);
  }, [colorBarHex]);

  return (
    <TimelineLayout timeline={timeline} years={years}>
      <TimelineContent
        timeline={timeline}
        transformedData={processedData}
        getFormattedDateString={getFormattedDateString}
        colorMap={colorMap}
      />
    </TimelineLayout>
  );
};

export const Timeline = memo(TimelinePure);
