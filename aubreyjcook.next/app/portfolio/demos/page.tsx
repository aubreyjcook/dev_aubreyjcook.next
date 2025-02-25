// pages/demos/index.tsx
import Link from 'next/link';
import { FC } from 'react';

interface Demo {
  id: string;
  title: string;
  description: string;
}

const demos: Demo[] = [
  { id: 'promises', title: 'Custom Promises', description: 'A custom implementation of Promises.' },
  { id: 'hooks', title: 'Custom Hooks', description: 'Explore React hooks implementation.' },
  // add more demos as needed
];

const DemosHub: FC = () => {
  return (
    <div>
      <h1>Demos Hub</h1>
      <ul>
        {demos.map(({ id, title, description }) => (
          <li key={id}>
            <Link href={`/demos/${id}`}>
              
                <h2>{title}</h2>
                <p>{description}</p>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemosHub;
