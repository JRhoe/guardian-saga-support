import styles from "./page.module.css";
import Header from "./components/home/header/Header";
import Mission from "./components/home/mission/Mission";
import Praxeum from "./components/home/praxeum/Praxeum";
import Donate from "./components/home/donate/Donate";

export default function Home() {
  return (
    <main>
      <Header />
      <Mission />
      <Praxeum />
      <Donate />
    </main>
  );
}
