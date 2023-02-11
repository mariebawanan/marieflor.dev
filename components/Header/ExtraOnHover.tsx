interface Props {
  icon: React.ReactNode;
  text: string;
}

export default function ExtraOnHover({ icon, text }: Props) {
  return (
    <div className="absolute bottom-full -left-2 hidden w-[150px] items-center space-x-2 text-xs transition duration-300 ease-in-out md:group-hover:flex">
      {icon}
      <span>{text}</span>
    </div>
  );
}
