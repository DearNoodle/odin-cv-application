import { CVData } from './components/CVData';
import { Form } from './components/Form';
import { CVPreview } from './components/CVPreview';
import { useState } from 'react';

export function App() {
  const [cv, setCV] = useState(CVData);

  return (
    <>
      <div className='flex flex-col gap-8'>
        {Object.keys(cv).map((sectionName) => (
          <Form key={sectionName} cv={cv} setCV={setCV} sectionName={sectionName}></Form>
        ))}
        <CVPreview key='cv' cv={cv} setCV={setCV} />
      </div>
    </>
  );
}
