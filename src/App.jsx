import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar'
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="André Parada"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id molestias a tenetur dolor quisquam repudiandae cupiditate aspernatur ipsum! Repellat praesentium ipsa quibusdam ex alias maiores inventore consequuntur perferendis veniam."
          />
          <Post author="Sabrina Larrayner" content="DEsenvolvedora mto boa" />
        </main>
      </div>
    </div>
  );
}
