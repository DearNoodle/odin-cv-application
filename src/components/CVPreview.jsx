import { v4 as uuidv4 } from 'uuid';

export function CVPreview({ cv, setCV }) {
  return (
    <div className='cv-preview relative'>
      <div>
        {Object.entries(cv).map(([sectionName, section]) => (
          <Section
            key={section.id}
            sectionName={sectionName}
            section={section}
            cv={cv}
            setCV={setCV}
          ></Section>
        ))}
      </div>
    </div>
  );
}

function Section({ sectionName, section, cv, setCV }) {
  return (
    <>
      {section.display.length !== 0 && <h2>{section.cvTitle}</h2>}
      {section.display.map((experience) => (
        <Experience
          key={experience.id}
          experience={experience}
          sectionName={sectionName}
          section={section}
          cv={cv}
          setCV={setCV}
        ></Experience>
      ))}
    </>
  );
}

function Experience({ experience, sectionName, section, cv, setCV }) {
  function editExperience() {
    const updatedDisplay = cv[sectionName].display.map((exp) =>
      exp.id === experience.id ? { ...exp, isEditing: true } : exp,
    );
    const updatedCV = {
      ...cv,
      [sectionName]: {
        ...cv[sectionName],
        input: { ...experience, id: uuidv4(), isEditing: true },
        display: updatedDisplay,
      },
    };
    setCV(updatedCV);
  }

  return (
    <div className='relative'>
      {section.cvTitle !== 'Personal Info' && !cv[sectionName].input.isEditing && (
        <button key='edit' className='absolute right-3' onClick={editExperience}>
          <span className='iconify' data-icon='mdi-pencil'></span>
        </button>
      )}
      {experience.isEditing && (
        <button key='editing' className='absolute right-3' onClick={editExperience}>
          <span className='iconify text-red-900' data-icon='mdi-pencil'></span>
        </button>
      )}
      <div className='m-2'>
        {experience.fields.map((field) => (
          <p key={field.id}>
            {field.label} <span className='ml-2'>{field.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
