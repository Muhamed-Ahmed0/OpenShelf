import { auth } from "@/auth";
import BookOverview from "@/components/BookOverview";
import BookTrailer from "@/components/BookTrailer";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  // Fetch data from API
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);
  if (!bookDetails) redirect("/404");
  console.log(bookDetails);
  return (
    <>
      <BookOverview {...bookDetails} userId={session?.user?.id as string} />
      <div className="book-details">
        <div className="flex-[1.5] ">
          <section className="flex flex-col gap-7">
            <h1 className="text-3xl text-light-600">Trailer</h1>
            <BookTrailer videoUrl={bookDetails.videoUrl} />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3 className="text-3xl text-light-600">Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
              {bookDetails.summary}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
