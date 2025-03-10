import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Link href="/meals">Meals</Link>
        <Link href="/community">Community</Link>
        <Link href="/meals/share">Share</Link>
        <Link href="/meals/someotherpath">Some other path</Link>
      </div>
    </main>
  );
}
