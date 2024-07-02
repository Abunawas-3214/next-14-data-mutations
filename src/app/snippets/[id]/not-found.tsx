import Link from "next/link";

export default function SnippetNotFound() {
  return (
    <div>
      <h1 className="text-xl bold">
        Sorry, we couldnt find the snippet youre looking for.
      </h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}
