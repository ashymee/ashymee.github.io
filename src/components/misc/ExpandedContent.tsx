import type { ExpandedContentProps } from "@/index";
import classNames from "classnames";

export default function ExpandedContent({
  title,
  subTitle,
  caption,
  subCaption,
  logo,
  dialogRef,
  callback,
}: ExpandedContentProps) {
  return (
    <div className="flex flex-col rounded-lg  bg-gray-300 dark:bg-[#151821] relative hover:shadow-md">
      <div className="absolute -left-1">
        <div
          className={classNames(
            "bg-orange-500 rounded-tl-lg rounded-br-lg w-44 text-center relative",
            "before:block before:content-[''] before:h-1 before:w-1 before:absolute before:-bottom-1 before:left-0 before:border-t-[0.25rem] before:border-l-[0.25rem] before:border-l-transparent before:border-orange-800"
          )}
        >
          {title}
        </div>
      </div>
      <div className="flex-1 px-3 pt-7 pb-3 flex flex-col md:flex-row items-center group">
        {logo && (
          <div
            className={classNames("mr-2", dialogRef ? "cursor-pointer" : "")}
            onClick={() => {
              if (!dialogRef) return;
              callback && callback();
              dialogRef.current?.showModal();
            }}
          >
            <img src={logo} className="h-auto w-10 rounded-md" />
          </div>
        )}
        <div className="">
          <div className="text-xs">{caption}</div>
          <div className="text-xl font-bold">{subTitle}</div>
          {subCaption && <div className="">{subCaption}</div>}
        </div>
      </div>
    </div>
  );
}
