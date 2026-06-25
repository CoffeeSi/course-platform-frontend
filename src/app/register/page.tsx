import { redirect } from "next/navigation";
import getCurrentUser from "@/features/auth/utils/getCurrentUser";
import RegisterForm from "@/app/register/RegisterForm";

export default async function RegisterPage() {
  const profile = await getCurrentUser();

  if (profile && profile.is_email_verified) redirect("/profile")
  else if (profile && !profile?.is_email_verified) redirect("/register/verify-email");

  return (
    <>
      <main className="mx-auto w-full max-w-md px-4 py-16">
        <h1 className="mb-6 text-3xl font-bold">Регистрация</h1>
        <RegisterForm />
      </main>
    </>
  );
}