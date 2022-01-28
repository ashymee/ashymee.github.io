import { ReactNode } from 'react';

type TooltipProps = {
  title: string;
  children: ReactNode;
  direction?: string;
};

const Tooltip = (props: TooltipProps) => {
  return (
    <div data-tip={props.title} className={`tooltip ${props.direction}`}>
      {props.children}
    </div>
  );
};

export default Tooltip;
