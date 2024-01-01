import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    <div className="grid grid-cols-3 h-screen w-screen bg-slate-800">
      <Header />
      <Content />
    </div>
  );
}
