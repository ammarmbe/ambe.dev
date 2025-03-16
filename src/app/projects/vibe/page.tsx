import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto mb-20 w-full max-w-3xl p-4">
      <h2 className="text-2xl font-medium">Vibe</h2>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Teck stack</p>
          <p>React, Next.js, PostgreSQL</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Duration</p>
          <p>July 2023 – August 2023</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Project type</p>
          <p>Personal</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Demo</p>
          <a
            href="https://vibe.ambe.dev/"
            className="w-fit underline underline-offset-4"
          >
            View app
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-8 text-neutral-700 dark:text-neutral-300">
        <p>
          Vibe is a social media web application with a variety of features for
          user engagement, such as posts, likes, comments, and user mentions.
          The project began as a final assignment for CS50 and later evolved
          into a personal project for learning and practicing React and Next.js.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            The Problem
          </p>
          <p>
            Unlike traditional projects, Vibe was not created to address a
            specific user problem. Instead, it served as a platform for learning
            and exploring modern web technologies. The challenge was primarily
            about improving development skills and understanding full-stack web
            development.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Goals and Objectives
          </p>
          <p>
            The main goal of Vibe was to create a fast, user-friendly social
            media application with a great user experience, responsive design,
            and strong SEO optimization. Additionally, it served as a platform
            to master React, Next.js, and full-stack development, allowing for
            the exploration of modern web technologies through practical
            implementation.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Development Process
          </p>
          <p>
            The project began with UX/UI design, which was crucial given that
            Vibe is a user-driven platform. Several iterations of design were
            made until a satisfying, aesthetically pleasing interface was
            achieved. After finalizing the design, the development phase
            involved incremental implementation of features, starting from core
            functionality and gradually adding new capabilities over time.
          </p>
          <div className="flex flex-col items-center justify-evenly gap-6 sm:flex-row">
            <figure className="w-fit">
              <Image
                src="/images/vibe-early.png"
                alt="Vibe screenshot"
                width={360}
                height={780}
                quality={100}
              />
              <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                Early design iteration of Vibe using Material UI
              </figcaption>
            </figure>
            <figure className="w-fit">
              <Image
                src="/images/vibe-final.png"
                alt="Vibe screenshot"
                width={360}
                height={780}
                quality={100}
              />
              <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
                Final design of Vibe
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Results
          </p>
          <p>
            Vibe was completed in two months, but it continues to evolve as new
            features are added. The project successfully showcases skills in
            modern web development frameworks and databases, with a strong
            emphasis on user experience.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Key Features
          </p>
          <div className="flex flex-col gap-4">
            <p>Some of the most notable features of Vibe include:</p>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-medium">User Registration & Login:</span>{" "}
                Users can create accounts, log in, and manage their profile.
              </li>
              <li>
                <span className="font-medium">CRUD Posts:</span> Users can
                create, read, update, and delete posts, with the ability to
                mention other users.
              </li>
              <li>
                <span className="font-medium">Comments & Reactions:</span> Users
                can comment on posts, like them, and react to posts with custom
                reactions.
              </li>
              <li>
                <span className="font-medium">Profile Pages:</span> Users have
                their own profile pages to view posts and activity.
              </li>
              <li>
                <span className="font-medium">Following System:</span> Users can
                follow others and see their posts in a personalized feed.
              </li>
              <li>
                <span className="font-medium">Notifications:</span> Users are
                notified when someone likes their post or follows them.
              </li>
              <li>
                <span className="font-medium">Responsive Design:</span> The app
                was designed mobile-first but adapts well to larger desktop
                screens.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Conclusion & Learnings
          </p>
          <p>
            Working on Vibe allowed for hands-on experience with Next.js, React,
            and PostgreSQL, enhancing both front-end and back-end development
            skills. This was particularly valuable as it was the first project
            of its kind.
          </p>
        </div>
      </div>
    </main>
  );
}
