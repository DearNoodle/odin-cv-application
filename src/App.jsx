import { CVData } from './CVData';
import { Form } from './Form';
import { CVPreview } from './CVPreview';
import { useState } from 'react';

export function App() {
  const [cv, setCV] = useState(CVData);

  return (
    <>
      <div className='flex flex-col gap-8'>
        <Form formData={cv.info} updateForm={(update) => setCV({ ...cv, info: update })} />
        <Form formData={cv.study} updateForm={(update) => setCV({ ...cv, study: update })} />
        <Form formData={cv.job} updateForm={(update) => setCV({ ...cv, job: update })} />

        <CVPreview cv={cv} />
      </div>
    </>
  );
}
