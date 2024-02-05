import Header from "./components/view/Header";
import Content from "./components/view/Content";
import Background from "./components/view/Background";

export default function App() {
  return (
    <div className="h-max w-screen">
      <div className="absolute z-0">
        <Background />
      </div>
      <div className="absolute grid grid-cols-3 h-screen z-20">
        <Header />
        <Content />
      </div>
    </div>
  );
}
