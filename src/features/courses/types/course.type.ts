import { UserProfile } from "@/features/users/types/users.types";

export type Category = {
    id: number;
    name: string;
    slug: string;
    description: string;
};

export type Course = {
    id: number;
    instructor: UserProfile;
    title: string;
    description: string;
    price: string | number;
    is_published: boolean;
    created_at: string;
    updated_at: string;
    category?: Category;
};

export type Module = {
    id: number;
    course: Course;
    title: string;
    order: number;
    lessons?: Lesson[];
};

export type Lesson = {
    id: number;
    module: Module;
    title: string;
    content_text?: string;
    video_url?: string;
    video_file?: string;
    order: number;
    is_free: boolean;
    created_at: string;
};

export type CourseDetail = Course & {
    modules: Module[];
};

export type CourseFilters = {
    page?: number;
    category_id?: number;
    instructor_id?: number;
};
