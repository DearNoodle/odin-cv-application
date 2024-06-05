export function CVPreview({ cv }) {
  return (
    <div className='cv-preview relative'>
      <div>
        {Object.values(cv).map((section) => {
          return (
            <>
              <h2 key={section.id}>{section.title}</h2>
              {section.inputs.map((input) => {
                return <p key={input.id}>{input.label + ' ' + input.value}</p>;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}
