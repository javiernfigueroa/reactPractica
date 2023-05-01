import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="jav_figue"
        name="Javier Figueroa Aguayo"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="midu.dev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="pao.ramirezp"
        name="Paola Ramirez Pasten"
      />
    </section>
  );
}
