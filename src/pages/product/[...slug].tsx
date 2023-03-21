import { useRouter } from "next/router";

export default function producst() {
  const route = useRouter();
  console.log(route.query);
  return <div>This is test from test two2</div>;
}
