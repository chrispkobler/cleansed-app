import { cn } from "@/lib/utils";

interface ContentSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContentSection({ 
  children, 
  className,
  ...props 
}: ContentSectionProps) {
  return (
    <section 
      className={cn(
        "space-y-4 py-4",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}