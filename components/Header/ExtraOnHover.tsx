interface Props {
  icon: React.ReactNode;
  text: string;
}

export default function ExtraOnHover({ icon, text }: Props) {
  return (
    <div className="space-x-2 text-xs w-[150px] absolute hidden group-hover:flex transition duration-300 ease-in-out bottom-full -left-2">
      {icon}
      <span>{text}</span>
    </div>
  );
}
