import styles from "./page.module.css";
import Header from "./components/header/Header";
import Mission from "./components/mission/Mission";

export default function Home() {
  return (
    <main>
      <Header/>
      <Mission/>
    </main>
  );
}
