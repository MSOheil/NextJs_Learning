import { useRouter } from "next/router";
function user_id() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query.id);
  function ShowUserId() {
    // router.push(`/users/${router.query.id}`);

    router.push({
      pathname: "/users/[id]",
      query: { id: router.query.id },
    });
  }
  return (
    <div>
      userId
      <h1>User id Is:{`${router.query.id}`} </h1>
      <button onClick={ShowUserId}>show user id</button>
    </div>
  );
}
export default user_id;
