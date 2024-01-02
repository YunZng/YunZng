export default function Avatar() {
  return (
    <div className="p-4">
      <div className="h-80 w-80 border-2 border-indigo-200 rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200">
        <img
          className="rounded-lg object-cover w-full h-full absolute"
          src="yulun.jpeg"
        />
      </div>
    </div>
  );
}
