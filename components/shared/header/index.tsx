import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";


const Header = () => (
  <header className="flex items-center justify-between border-b">
    <div className="wrapper flex flex-between">
      <div className="flex-start">
        <Link href="/" className="flex-start">
          <Image src="/images/logo.svg" 
          alt={`${APP_NAME} logo`} 
          height={48} width={48} 
          priority={true} />
          <span className="flex justify-center font-bold text-2xl">
            {APP_NAME}
          </span>
        </Link>  
      </div>
      </div>
      <div className="space-x-2">
      <Menu/>
    </div>
  </header>
);

export default Header;
