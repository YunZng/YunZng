import Header from "./components/view/Header";
import Content from "./components/view/Content";

export default function App() {
  return (
    <div className="h-max w-screen bg-slate-800 overscroll-none">
      <div className="grid grid-cols-3 h-screen">
        <Header />
        <Content />
      </div>
    </div>
  );
}
