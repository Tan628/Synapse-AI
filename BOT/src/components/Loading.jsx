export const LoadingSpinner = () => {
  return (
    <div className="inline-block w-5 h-5 border-2 border-t-2 border-r-transparent border-primary-400 rounded-full animate-spin"></div>
  );
};

export const LoadingBig = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-200 border-opacity-20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <p className="text-gray-400 mt-4 text-sm">Loading...</p>
    </div>
  );
};

export const LoadingSmall = () => {
  return (
    <div className="flex space-x-2 justify-center items-center py-2">
      <div className="h-2 w-2 bg-primary-400 rounded-full animate-pulse"></div>
      <div className="h-2 w-2 bg-primary-400 rounded-full animate-pulse delay-150"></div>
      <div className="h-2 w-2 bg-primary-400 rounded-full animate-pulse delay-300"></div>
    </div>
  );
};
