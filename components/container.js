import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container w-full",
        props.large ? " max-w-full" : " max-w-full",
        !props.alt && "py-5 lg:py-0",
        props.className
      )}>
      {props.children}
    </div>
  );
}
