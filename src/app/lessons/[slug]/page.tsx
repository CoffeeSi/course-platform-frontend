import { VideoPlayer } from "@/components/common/player/player";
import { lessonsApi } from "@/features/courses/api/lessons.api";
import { cookies } from "next/headers";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lessonID = Number(slug);

  const token = (await cookies()).get("access_token")?.value;

  let lesson;
  try {
    lesson = await lessonsApi.fetchLesson(lessonID, token);
  } catch {
    return <p className="text-destructive">Lesson not found</p>;
  }

  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16">
        <h1 className="text-4xl font-bold">Lesson</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{lesson.title}</h2>
          <p className="text-muted-foreground">{lesson.content_text}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Video</h2>
          <VideoPlayer src={lesson.video_url ?? ""} />
        </div>
      </main>
    </>
  )
}