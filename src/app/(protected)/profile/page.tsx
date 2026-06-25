import { redirect } from "next/navigation";
import { ProfileForm } from "./ProfileForm";
import getCurrentUser from "@/features/auth/utils/getCurrentUser";

export default async function ProfilePage() {
  const profile = await getCurrentUser()

  if (!profile) {
    redirect("/login");
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Профиль</h1>

      <div className="flex flex-col gap-6">
        <dl className="grid gap-2 rounded-md border p-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Электронная почта</dt>
            <dd>{profile.email}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Роль</dt>
            <dd>{profile.role}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Почта подтверждена</dt>
            <dd>{profile.is_email_verified ? "Yes" : "No"}</dd>
          </div>
        </dl>
        <ProfileForm initialData={profile.profile} />
      </div>
    </main>
  );
}