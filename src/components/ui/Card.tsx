import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/[0.12] shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
