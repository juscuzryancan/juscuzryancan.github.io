import Link from "next/link";
const Navigation = () => {

  return (
    <nav className="flex flex-col gap-8 justify-center p-8
      sm:justify-end">
      <Link 
        className="bg-primary 
          before:content-['About'] before:hidden
          hover:before:block"
        href="/About"></Link>
      <Link href="/Skills">Skills</Link>
      <Link href="/Projects">Projects</Link>
    </nav>
  );

}

export default Navigation;
