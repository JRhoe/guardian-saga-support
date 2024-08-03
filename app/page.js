import styles from "./page.module.css";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";
import Praxeum from "./components/praxeum/Praxeum";

export default function Home() {
  return (
    <main>
      <Header />
      <Mission />
      <Praxeum />
    </main>
  );
}
