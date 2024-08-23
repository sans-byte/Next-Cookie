import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Sanskar" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("control came here");
        console.log(req);
        console.log(credentials);
        return {
          id: 1,
        };
      },
    }),
  ],
});

export const GET = handler;

export const POST = handler;
