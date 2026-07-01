const colors = [
  "bg-[#0a192f] text-white",
  "bg-[#c05e00] text-white",
  "bg-secondary text-white",
  "bg-on-tertiary-container text-white",
  "bg-primary text-on-primary",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({
  name,
  size = "md",
  index = 0,
}: {
  name: string;
  size?: "sm" | "md" | "lg";
  index?: number;
}) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colors[index % colors.length]} rounded-full flex items-center justify-center font-bold shrink-0`}
    >
      {getInitials(name)}
    </div>
  );
}

export function AvatarStack({ count = 3 }: { count?: number }) {
  const names = ["Sarah K", "Mike R", "Linda P", "Tom W", "Ana G"];
  return (
    <div className="flex -space-x-3">
      {names.slice(0, count).map((name, i) => (
        <div key={name} className="ring-2 ring-white rounded-full">
          <Avatar name={name} size="sm" index={i} />
        </div>
      ))}
    </div>
  );
}
