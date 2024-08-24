import Image from "next/image";
import Editor from "./components/Editor/Editor";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center">
      <div className="flex flex-col my-16 w-1/2 h-full">
        <h1 className="text-7xl pb-8">[Project Name]</h1>
        <div className="h-full">
          <Editor />
        </div>
      </div>
    </main>
  );
}
