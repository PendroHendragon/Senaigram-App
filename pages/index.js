import { Card } from "../src/components/styles";
import Link from "next/link";
export default function App() {
  return (
    <div>
      <Card>Username<Link href="/profile?user=florinda"><a>Florinda</a></Link></Card>

    </div>
  );
}
