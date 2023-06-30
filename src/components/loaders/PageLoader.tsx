import Spinner from "@/components/loaders/Spinner";

export default function PageLoader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white dark:bg-black">
      <Spinner />
    </div>
  );
}
