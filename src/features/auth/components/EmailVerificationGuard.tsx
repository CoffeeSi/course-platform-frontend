import {redirect} from "next/navigation";
import getCurrentUser from "@/features/auth/utils/getCurrentUser";

export default async function EmailVerificationGuard({ children }: { children: React.ReactNode }) {
  const profile = await getCurrentUser();

  if (!profile) {
    redirect("/login");
  }

  if (!profile.is_email_verified) {
    redirect("/register/verify-email");
  }

  return <>{children}</>;
}