import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<any> {
  title?: string;
  className?: string;
  icon?: ReactNode;
  titleClassname?: string;
}

export function AnchorComponent({
  title,
  className,
  icon,
  titleClassname,
  ...rest
}: Props) {
  return (
    <a {...rest} className={className}>
      {icon ? icon : null}
      <p className={titleClassname}>{title}</p>
    </a>
  );
}
