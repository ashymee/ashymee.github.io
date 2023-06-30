import {
  LucideGithub,
  LucideHash,
  LucideLinkedin,
  LucideMail,
  LucideMessageCircle,
  LucidePrinter,
} from "lucide-react";

export default function HomeIcons({ icon }: { icon: string }) {
  let currentIcon = null;

  switch (icon) {
    case "printer":
      currentIcon = <LucidePrinter />;
      break;
    case "message":
      currentIcon = <LucideMessageCircle />;
      break;
    case "mail":
      currentIcon = <LucideMail />;
      break;
    case "linkedin":
      currentIcon = <LucideLinkedin />;
      break;
    case "github":
      currentIcon = <LucideGithub />;
      break;
    case "web":
      currentIcon = <LucideHash />;
      break;
    default:
      currentIcon = null;
      break;
  }

  return currentIcon;
}
