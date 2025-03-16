import Image from "next/image";

export default function Page() {
  return (
    <main className="mx-auto mb-20 w-full max-w-3xl p-4">
      <h2 className="text-2xl font-medium">Tagged</h2>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Teck stack</p>
          <p>Next.js, React, PostgreSQL</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Duration</p>
          <p>Febuary 2024 – May 2024</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Project type</p>
          <p>Personal</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">Demo</p>
          <a
            href="https://tagged.ambe.dev/"
            className="w-fit underline underline-offset-4"
          >
            View app
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-8 text-neutral-700 dark:text-neutral-300">
        <p>
          Tagged is a clothing e-commerce platform designed to allow customers
          to buy and sell clothes and accessories from local Egyptian brands.
          The project was created as a directory to help customers discover new
          local brands and easily browse products, consolidating the many new
          and independent brands that each have their own websites into one
          place.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            The Problem
          </p>
          <p>
            With an increasing number of local brands emerging in Egypt,
            customers often find it challenging to discover and compare these
            brands, as each brand maintains its own separate website. Tagged
            addresses this by hosting multiple local brands in one platform,
            making it easier for customers to search, compare, and shop across
            various stores without the need to navigate different websites.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Goals and Objectives
          </p>
          <p>
            The main goal was to create a user-friendly and visually appealing
            dashboard for brand owners that is intuitive and easy to use.
            Additionally, the customer-facing storefront needed to be simple and
            seamless, ensuring that the shopping and ordering process was not
            interrupted by unnecessary complexity. As the project evolved, it
            was split into two sections: a customer side for browsing items and
            managing orders, and a store dashboard for brand owners to manage
            their products and track their orders.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Development Process
          </p>
          <p>
            The development started with designing the UX/UI, ensuring both the
            dashboard for brand owners and the storefront for customers were
            clear and easy to navigate. Initially, both sections were designed
            with two views per part/page, but this approach was soon found to be
            inefficient. The app was then split into two distinct parts: the
            customer-facing store and the brand management dashboard, which
            allowed for more focused design and functionality in each area.
          </p>
          <figure className="w-fit">
            <Image
              src="/images/tagged.png"
              alt="Tagged screenshot"
              width={1440}
              height={900}
              quality={100}
            />
            <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Final design of the store dasboard
            </figcaption>
          </figure>
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
            <p>Some of the most notable features of Tagged include:</p>
            <ul className="list-inside list-disc">
              <li>
                <span className="font-medium">
                  User Registration and Login:
                </span>{" "}
                Users can create accounts and log in to the platform.
              </li>
              <li>
                <span className="font-medium">Item Search and Filtering:</span>{" "}
                A robust search and filtering system allows users to find
                specific items quickly.
              </li>
              <li>
                <span className="font-medium">Unified Shopping Cart:</span>{" "}
                Customers can add items from different stores to one shopping
                cart and checkout all at once.
              </li>
              <li>
                <span className="font-medium">Order Status Tracking:</span>{" "}
                Customers can monitor their order progress from pending to
                delivered.
              </li>
              <li>
                <span className="font-medium">Store Information:</span> Users
                can view store details, including social media links and
                performance metrics like average delivery time and return rates.
              </li>
              <li>
                <span className="font-medium">Customer Privacy:</span> Stores
                only see customer addresses when needed for shipping, ensuring
                privacy.
              </li>
              <li>
                <span className="font-medium">Email Notifications:</span> Both
                users and stores receive email alerts for new orders, order
                cancellations, and status updates.
              </li>{" "}
              <li>
                <span className="font-medium">Product Variations:</span> Stores
                can add items with multiple color and size options, manage stock
                levels, and link images to product variations.
              </li>
              <li>
                <span className="font-medium">
                  Detailed Analytics Dashboard:
                </span>{" "}
                Stores have access to an analytics dashboard displaying various
                performance metrics and data visualizations.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Conclusion & Learnings
          </p>
          <p>
            Building Tagged helped improve my expertise in UX design and
            multi-part system architecture. Splitting the app into a customer
            side and store owner dashboard allowed for more flexibility and
            clarity in feature implementation. Additionally, privacy
            considerations and handling multi-store operations provided valuable
            insights into building a secure and efficient e-commerce platform.
          </p>
        </div>
      </div>
    </main>
  );
}
