// create an awesome component
import { metadata } from "app/layout";

export default function Page() {
  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.description}</p>
    </div>
  );
}
