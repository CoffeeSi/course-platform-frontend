import { redirect } from "next/navigation";
import getCurrentUser from "@/features/auth/utils/getCurrentUser";
import { VerifyEmailForm } from "./VerifyEmailForm";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const profile = await getCurrentUser();

  if (!profile) redirect("/login");
  if (profile.is_email_verified) redirect("/profile");

  const { email } = await searchParams;

  return (
      <VerifyEmailForm initialEmail={email || profile.email} />
  );
}
