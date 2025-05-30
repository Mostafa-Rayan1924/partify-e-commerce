import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-muted-foreground">404</h1>

        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Sorry</p>

        <p className="mt-4 text-red-500">
          The page you're looking for doesn't exist
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-sm bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/80 focus:ring-3 focus:outline-hidden">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
