import Link from "next/link";
import Navbar from "../components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </nav>
      {children}
    </>
  );
}
