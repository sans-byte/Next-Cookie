import { getServerSession } from "next-auth";
async function User() {
  const session = await getServerSession();
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
}

export default User;
