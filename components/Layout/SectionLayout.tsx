interface Props {
  children: React.ReactNode;
}

export default function SectionLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="max-w-7xl flex justify-center items-center"> {children}</div>
    </div>
  );
}
