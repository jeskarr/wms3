'use client';
import { useSearchParams } from 'next/navigation'
import { ManualSetUp } from './manual'
import { FileSetUp } from './fromFile'

export default function SetUpPage() {
  const searchParams = useSearchParams()
  const setUpType = searchParams.get('type')

  // Render different forms based on setUpType
  const renderForm = () => {
    if (setUpType === 'manual') {
      return <ManualSetUp />;
    }
    else if (setUpType === 'file') {
      return <FileSetUp />;
    }
    else {
      // Default case, handle invalid setUpType or missing query parameter
      return <div>Invalid type</div>;
    }
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Setup del magazzino</h1>
      {renderForm()}
    </div>
  );
};
