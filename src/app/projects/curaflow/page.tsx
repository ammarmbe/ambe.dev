import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto mb-20 w-full max-w-3xl p-4">
      <h2 className="text-2xl font-medium">CuraFlow</h2>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Teck stack</p>
          <p>React, Electron, PostgreSQL</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Duration</p>
          <p>July 2023 – January 2024</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Project type</p>
          <p>Client</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Demo</p>
          <a
            href="https://curaflow.ambe.dev/"
            className="w-fit underline underline-offset-4"
          >
            View app
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-8 text-neutral-700 dark:text-neutral-300">
        <p>
          CuraFlow is a comprehensive clinic management system designed to
          streamline operations for clinics. It includes modules for employee
          management, patient tracking, doctor services, and appointment
          scheduling. Additionally, CuraFlow provides advanced analytics for
          administrators and integrates a role-based access control (RBAC)
          system for secure employee management. The system was developed for a
          client who needed a custom solution that exceeded the capabilities of
          existing clinic management tools.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            The Problem
          </p>
          <p>
            The client clinic was managing their operations using a combination
            of pen-and-paper and Excel spreadsheets, a process that was
            inefficient and error-prone. They required a robust digital solution
            that could manage all aspects of their clinic, from patient records
            and appointments to employee and doctor management. Existing market
            solutions either lacked the features they needed or were not
            flexible enough to suit their specific workflow. This gap led them
            to request a custom solution—CuraFlow—tailored to their exact
            requirements.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Goals and Objectives
          </p>
          <p className="text-neutral-900 dark:text-neutral-100">Primary Goal</p>
          <p className="-mt-2">
            To create an all-in-one clinic management system that eliminates the
            need for multiple systems, supports doctor, admin, and employee
            interfaces, and modernizes the clinic&apos;s operations.
          </p>
          <p className="text-neutral-900 dark:text-neutral-100">
            Additional Objectives
          </p>
          <ul className="-mt-2 list-inside list-disc">
            <li>
              Make the system fully remote with over-the-air (OTA) update
              capabilities.
            </li>
            <li>
              Ensure the system is flexible enough to handle various custom
              requirements, such as patient discount packages and complex
              appointment scheduling.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Development Process
          </p>
          <p>
            The development started by researching alternative solutions the
            clinic had tried, focusing on identifying their pain points. From
            there, the core of the project began with database schema design,
            ensuring that all aspects of clinic management were covered.
            <br />
            <br />
            Once the schema was complete, multiple iterations of UX/UI design
            followed to align with the client’s workflow and preferences. After
            finalizing the design, the implementation phase began, focusing on
            the application&apos;s routes, logic, and APIs.
            <br />
            <br />
            Since it was a two-man team (with{" "}
            <a
              href="https://github.com/itsxrgon"
              className="underline underline-offset-4"
            >
              Ali Koheil
            </a>
            ), no formal development methodology was followed, but the work was
            highly collaborative, ensuring that each part of the system
            addressed the client’s needs.
          </p>
          <figure className="w-fit">
            <Image
              src="/images/curaflow-en-hero.png"
              alt="CuraFlow screenshot"
              width={5000}
              height={2737}
              quality={100}
            />
            <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Final design of the CuraFlow application
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Results
          </p>
          <p>
            CuraFlow succeeded in modernizing the clinic&apos;s operations,
            automating many tasks that were previously manual. The client now
            has a system that efficiently manages appointments, payments, and
            employee and doctor shifts, all tailored to their specific workflow.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Key Features
          </p>
          <div className="flex flex-col gap-4">
            <p>Some of the most notable features of CuraFlow include:</p>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-medium">Appointment Scheduling:</span> An
                intelligent system that prevents appointment conflicts and
                ensures accurate tracking of patient visits.
              </li>
              <li>
                <span className="font-medium">Patient Medical Forms:</span>{" "}
                Interactive graphs displaying progress in patient medical forms,
                allowing doctors to visualize changes over time.
              </li>
              <li>
                <span className="font-medium">Payment Management:</span> A
                flexible payment handling system that tracks both what doctors
                owe and what they should receive, considering percentages and
                past payments.
              </li>
              <li>
                <span className="font-medium">Full RBAC System:</span>{" "}
                Role-based access control to ensure that employees only have
                access to the features necessary for their job role.
              </li>
              <li>
                <span className="font-medium">OTA Updates:</span> The system is
                remotely updated, ensuring that clinics always have the latest
                version without manual intervention.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
