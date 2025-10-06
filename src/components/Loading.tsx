'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background-light dark:bg-background-dark">
      <div className="w-10 h-10 border-4 border-primary-light dark:border-primary-dark border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
