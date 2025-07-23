import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to My Resume</h1>
      <p className="mt-4">
        Here you can find all the information about my professional background.
      </p>
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mt-4"
      />
    </main>
  );
}
