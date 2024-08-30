import { CallbacksOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ profile }: { profile: { login: string } }) {
      debugger;
      return profile.login === "matgargano";
    },
  } as unknown as CallbacksOptions,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
