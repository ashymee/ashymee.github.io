import { ReactNode } from "react";

interface CertificationObject {
  year: number;
  name: string;
  heldBy: string;
  in: string;
  image: string;
}

interface EducationObject {
  year: string;
  level: string;
  instance: string;
  location: string;
  gpa?: number;
  logo: string;
}

interface ProjectObject {
  year: number;
  data: ProjectDataObject[];
}

interface ProjectDataObject {
  title: string;
  vendor: string;
  url: string;
  kind: string;
  tech: string[];
}

interface ExpandedItemProps {
  title: string;
  setExpanded: () => void;
  isExpanded: boolean;
  children: ReactNode;
}

type IExpanded = "formal" | "informal" | null;

interface ExpandedContentProps {
  title: string;
  subTitle: string | ReactNode;
  caption: string;
  subCaption?: string;
  logo?: string;
  callback?: () => void;
  dialogRef?: RefObject<HTMLDialogElement>;
}

interface ContactObject {
  title: string;
  icon: string;
  url?: string;
}

interface ExperienceObject {
  startPeriod: string;
  endPeriod: string;
  position?: string;
  instance?: string;
  title: string;
  url?: string;
  location?: string;
  description: string[];
}

interface ThemeObject {
  colorAccentPrimary: `#${string}`;
  colorAccentSecondary?: `#${string}`;
  colorText: `#${string}`;
  colorBackground: string;
  colorBarHex: `#${string}`;
  colorGradation?: number;
}

interface TimelineData {
  startPeriod: string; // 'yyyy-mm'
  endPeriod: string; // 'yyyy-mm'
  title: string;
  subtitle?: string;
  content?: string[];
  duration?: number;
  column?: number;
  instance?: string;
  location?: string;
  url?: string;
  startRowGrid?: number;
  endRowGrid?: number;
  group?: 1 | 2 | 3 | 4;
}

type RequiredProperties<T, K extends keyof T> = T & {
  [Property in K]-?: T[Property];
};

type TimelineRequiredProperties =
  | "column"
  | "duration"
  | "startRowGrid"
  | "endRowGrid"
  | "group";
type ProcessedTimelineData = RequiredProperties<
  TimelineData,
  TimelineRequiredProperties
>;

type Groups = NonNullable<TimelineData["group"]>;

type Order = "asc" | "desc";

interface HexToHslReturn {
  hsl: `hsl(${string}`;
  hue: string;
  saturation: string;
  lightness: string;
}

type AccentColors = [`#${string}`, `#${string}` | undefined];

type LocalesArgument =
  | "af-NA"
  | "af-ZA"
  | "am-ET"
  | "ar-AE"
  | "ar-BH"
  | "ar-DZ"
  | "ar-EG"
  | "ar-IQ"
  | "ar-JO"
  | "ar-KW"
  | "ar-LB"
  | "ar-LY"
  | "ar-MA"
  | "arn-CL"
  | "ar-OM"
  | "ar-QA"
  | "ar-SA"
  | "ar-SY"
  | "ar-TN"
  | "ar-YE"
  | "as-IN"
  | "az-Cyrl-AZ"
  | "az-Latn-AZ"
  | "ba-RU"
  | "be-BY"
  | "bg-BG"
  | "bn-BD"
  | "bn-IN"
  | "bo-CN"
  | "br-FR"
  | "bs-Cyrl-BA"
  | "bs-Latn-BA"
  | "ca-ES"
  | "co-FR"
  | "cs-CZ"
  | "cy-GB"
  | "da-DK"
  | "de-AT"
  | "de-CH"
  | "de-DE"
  | "de-LI"
  | "de-LU"
  | "dsb-DE"
  | "dv-MV"
  | "el-GR"
  | "en-029"
  | "en-AU"
  | "en-BZ"
  | "en-CA"
  | "en-GB"
  | "en-IE"
  | "en-IN"
  | "en-JM"
  | "en-MY"
  | "en-NZ"
  | "en-PH"
  | "en-SG"
  | "en-TT"
  | "en-US"
  | "en-ZA"
  | "en-ZW"
  | "es-AR"
  | "es-BO"
  | "es-CL"
  | "es-CO"
  | "es-CR"
  | "es-DO"
  | "es-EC"
  | "es-ES"
  | "es-GT"
  | "es-HN"
  | "es-MX"
  | "es-NI"
  | "es-PA"
  | "es-PE"
  | "es-PR"
  | "es-PY"
  | "es-SV"
  | "es-US"
  | "es-UY"
  | "es-VE"
  | "et-EE"
  | "eu-ES"
  | "fa-IR"
  | "fi-FI"
  | "fil-PH"
  | "fo-FO"
  | "fr-BE"
  | "fr-CA"
  | "fr-CH"
  | "fr-FR"
  | "fr-LU"
  | "fr-MC"
  | "fy-NL"
  | "ga-IE"
  | "gd-GB"
  | "gl-ES"
  | "gsw-FR"
  | "gu-IN"
  | "ha-Latn-NG"
  | "he-IL"
  | "hi-IN"
  | "hr-BA"
  | "hr-HR"
  | "hsb";

interface SkillObject {
  soft: string[];
  hard: string[];
}

type BioObject = {
  title: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  town: string;
  summary: string;
  skill: SkillObject;
};
