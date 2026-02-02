import Image from "next/image";

export default function Home() {
  return (
    <div className="hero">
      <h1>Hello, I’m Georgina 👋</h1>
      <p>Upcoming Software Engineer | Next.js Portfolio</p>

      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={160}
        height={160}
      />
    </div>
  );
}

