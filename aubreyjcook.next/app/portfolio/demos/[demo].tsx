// pages/demos/[demo].tsx
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const DemoPage: FC = () => {
  const router = useRouter();
  const { demo } = router.query;

  if (typeof demo !== 'string') {
    return <p>Loading demo...</p>;
  }

  // Convert demo string to component name (e.g., "promises" -> "PromisesDemo")
  const componentName = `${demo.charAt(0).toUpperCase()}${demo.slice(1)}Demo`;

  // Dynamically import the correct demo component based on the URL
  const DemoComponent = dynamic(() => import(`../../components/demos/${componentName}`), {
    ssr: false,
  });

  return (
    <div>
      <h1>{componentName.replace('Demo', '')} Demo</h1>
      <DemoComponent />
    </div>
  );
};

export default DemoPage;
