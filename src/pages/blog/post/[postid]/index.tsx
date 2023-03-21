import { useRouter } from "next/router";

export default function post_id() {
  const router = useRouter();
  return (
    <div>
      Hello from post id is
      <h1>params is :{`${router.query.postid}`}</h1>
    </div>
  );
}
