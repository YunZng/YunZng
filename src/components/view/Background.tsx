export default function Background() {
  const carouselItem = (key: any) => (
    <div
      key={key}
      className="flex flex-none items-center justify-center text-4xl"
    >
      YUNZNG&nbsp;•&nbsp;
    </div>
  );
  return (
    <div className="absolute w-screen h-screen overflow-hidden bg-slate-800">
      <div className="absolute tilted top-[-22vw] left-[-10vw]">
        {[...Array(30).keys()].map((pos) => (
          <div className="border-2 border-slate-700 p-1">
            <div className="flex border-4 border-slate-700 h-18 w-[120vw] overflow-hidden">
              <div
                className={`flex scroll-text${
                  pos % 2 == 0 ? "" : "-inverse"
                } text-slate-700`}
              >
                {[...Array(20).keys()].map((x) => carouselItem(x))}
                {[...Array(20).keys()].map((x) => carouselItem(x))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
