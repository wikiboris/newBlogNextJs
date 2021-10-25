import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/articles/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className="flex-1 lg:flex-none">
      <form onSubmit={handleSubmit} className="form-control">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-ghost"
        />
      </form>
    </div>
  );
}
