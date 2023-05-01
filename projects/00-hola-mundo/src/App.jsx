import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="jav_figue" name="Javier Figueroa Aguayo" />
      <TwitterFollowCard isFollowing={false} userName="midu.dev" name="Miguel Angel Duran" />
      <TwitterFollowCard isFollowing userName="pao.ramirezp" name="Paola Ramirez Pasten"/>
    </section>
  );
}
