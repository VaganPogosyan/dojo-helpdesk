import Image from "next/image";
import Link from "next/link";
import Logo from "../components/dojo-logo.png";

export default function Navbar(second) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="DojoHelpdesk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
