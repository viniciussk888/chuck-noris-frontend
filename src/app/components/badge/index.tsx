type BadgeProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
};

export const Badge: React.FC<BadgeProps> = ({
  text,
  onClick,
  active,
}: BadgeProps) => {
  return (
    <span
      onClick={onClick}
      className={`${
        active ? "border-2 border-white" : ""
      } bg-purple-800 text-white text-sm font-medium m-2 p-1 rounded cursor-pointer`}
    >
      {text}
    </span>
  );
};
