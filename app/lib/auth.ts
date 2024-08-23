import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Sanskar" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        return {
          id: 1,
          name: "sanskar",
          email: "sanskar@gmail.com",
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }: any) {
      //@ts-ignore
      session.user.userId = token.sub;
      console.log(session);
      return session;
    },
  },
};
