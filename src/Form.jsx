import { useState } from 'react';

export function Form({ formData, updateForm }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  function expandForm() {
    setIsExpanded(true);
  }
  function collapseForm() {
    setIsExpanded(false);
  }

  function handleChange(e) {
    const updatedInputs = formData.inputs.map((input) =>
      e.target.id === input.id ? { ...input, value: e.target.value } : input,
    );
    updateForm({ ...formData, inputs: updatedInputs });
  }

  return (
    <section key={formData.id}>
      <div className='flex gap-2'>
        <h1>{formData.title}</h1>
        {isExpanded ? (
          <>
            <button key='up' onClick={collapseForm}>
              <span className='iconify' data-icon='mdi-chevron-up'></span>
            </button>
            {formData.title !== 'Personal Info' && (
              <button key='add'>
                <span className='iconify' data-icon='mdi-plus'></span>
              </button>
            )}
          </>
        ) : (
          <button key='down' onClick={expandForm}>
            <span className='iconify' data-icon='mdi-chevron-down'></span>
          </button>
        )}
      </div>
      {isExpanded &&
        formData.inputs.map((input) => (
          <>
            <label key={input.id}>
              {input.label}
              <input value={input.value} onChange={handleChange} id={input.id} />
            </label>
          </>
        ))}
    </section>
  );
}
