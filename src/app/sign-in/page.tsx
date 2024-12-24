import React from "react";
import { loginAction } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SubmitButton } from "@/components/submitButton";

function loginPage() {
  return (
    <>
      <form className="mt-[10%] flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign in</h1>
        <p className="text-sm text text-foreground">
          Don't have an account?{" "}
          <Link className="text-primary font-medium underline" href="/signup">
            Sign up
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={loginAction} pendingText="Signing in...">
            Sign in
          </SubmitButton>
        </div>
      </form>
    </>
  );
}

export default loginPage;
