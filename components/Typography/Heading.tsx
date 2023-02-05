interface Props {
  children: React.ReactNode | React.ReactElement;
}

export default function Heading({ children }: Props) {
  return <h1 className="text-8xl font-extrabold text-tuscan text-center">{children}</h1>;
}
