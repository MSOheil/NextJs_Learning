import { useRouter } from "next/router";

export default function user_post() {
  const router = useRouter();

  return <div>hello from id is user:{`${router.query.userid}`} + this is test
  
  {`${router.query.postid}`} this is all pathes</div>;
}
