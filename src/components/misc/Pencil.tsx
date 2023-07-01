import LinkItem from "@/components/misc/LinkItem";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export default function Pencil({ title }: { title: string }) {
  const { pathname } = useLocation();

  return (
    <div className="absolute left-0 flex flex-col pt-2 items-end justify-between h-full">
      <LinkItem />
      <div className="flex-1 w-10 flex relative z-10">
        <div
          className={classNames(
            "w-1/4 h-full bg-blue-950 rounded-r-full rounded-t-none"
          )}
        ></div>
        <div
          className={`w-1/2 h-full bg-blue-900 rounded-b-full rounded-t-none relative flex items-center justify-center`}
        >
          <div className="-rotate-90 -ml-[1px] font-bold text-white">
            {pathname === "/" ? "home" : title}
          </div>
        </div>
        <div className="w-1/4 h-full bg-blue-800 rounded-l-full rounded-tl-none rounded-tr-none"></div>
      </div>

      <div className="point" />
      <div className="lead" />
    </div>
  );
}
