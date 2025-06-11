import Image from "next/image";

interface LogoProps {
  imageUrl?: string;
  initials?: string;
}

export const Logo: React.FC<LogoProps> = ({ imageUrl, initials }) => {
  return (
    <a href="#" className="flex-shrink-0">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200">
          {initials || "DD"}
        </div>
      )}
    </a>
  );
};
