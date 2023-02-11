import classNames from "classnames";

interface Props {
  children: React.ReactNode | React.ReactElement;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Badge({ children, className, icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "inline-flex items-center justify-center rounded-3xl bg-tuscan py-0.5 px-3 text-sm tracking-wider text-blue dark:bg-tuscan/50",
        {
          "space-x-2": icon,
          "border transition hover:cursor-pointer hover:border-tuscan hover:bg-blue hover:text-tuscan dark:border-none":
            onClick,
        },
        className
      )}
    >
      {icon}
      <div className={classNames({ "mt-0.5": icon })}>{children}</div>
    </div>
  );
}
