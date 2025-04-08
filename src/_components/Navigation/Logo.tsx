import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="size-[80px] sm:size-[100px]  relative">
      <Link href={`/`} className="size-full">
        <Image
          src={
            "https://res.cloudinary.com/dlaeaq6is/image/upload/v1743844729/logo-removebg-preview_scqxqj.png"
          }
          alt="logo"
          className="object-contain flex dark:invert"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
