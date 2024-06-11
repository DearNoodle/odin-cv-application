import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Form({ cv, setCV, sectionName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandForm() {
    setIsExpanded(true);
  }

  function collapseForm() {
    setIsExpanded(false);
  }

  function addExperience() {
    const newCV = { ...cv };
    const newExperience = { ...newCV[sectionName].input, id: uuidv4(), isEditing: false };
    newCV[sectionName].display.push(newExperience);
    setCV(newCV);
  }

  function confirmEdit() {
    const updatedDisplay = cv[sectionName].display.map((experience) =>
      experience.isEditing
        ? { ...cv[sectionName].input, id: experience.id, isEditing: false }
        : experience,
    );
    const newCV = {
      ...cv,
      [sectionName]: {
        ...cv[sectionName],
        input: { ...cv[sectionName].input, isEditing: false },
        display: updatedDisplay,
      },
    };
    setCV(newCV);
  }

  function handleTypeChange(e) {
    const updatedInputs = cv[sectionName].input.fields.map((field) =>
      e.target.id === field.id ? { ...field, value: e.target.value } : field,
    );
    const newCV = {
      ...cv,
      [sectionName]: {
        ...cv[sectionName],
        input: { ...cv[sectionName].input, fields: updatedInputs },
      },
    };
    if (cv[sectionName].formTitle === 'About You') {
      newCV[sectionName].display[0] = newCV[sectionName].input;
      setCV(newCV);
    } else {
      setCV(newCV);
    }
  }

  return (
    <section key={cv[sectionName].id}>
      <div className='flex gap-2'>
        <h1>{cv[sectionName].formTitle}</h1>
        {isExpanded ? (
          <>
            <button key='up' onClick={collapseForm}>
              <span className='iconify' data-icon='mdi-chevron-up'></span>
            </button>
            {cv[sectionName].formTitle !== 'About You' &&
              (cv[sectionName].input.isEditing ? (
                <button key='tick' onClick={confirmEdit}>
                  <span className='iconify' data-icon='mdi-tick'></span>
                </button>
              ) : (
                <button key='add' onClick={addExperience}>
                  <span className='iconify' data-icon='mdi-plus'></span>
                </button>
              ))}
          </>
        ) : (
          <button key='down' onClick={expandForm}>
            <span className='iconify' data-icon='mdi-chevron-down'></span>
          </button>
        )}
      </div>
      {isExpanded &&
        cv[sectionName].input.fields.map((field) => (
          <label key={field.id}>
            {field.label}
            <input value={field.value} onChange={handleTypeChange} id={field.id} />
          </label>
        ))}
    </section>
  );
}
