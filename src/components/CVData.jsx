import { v4 as uuidv4 } from 'uuid';

export const CVData = {
  info: {
    formTitle: 'About You',
    cvTitle: 'Personal Info',
    id: uuidv4(),
    input: {
      id: uuidv4(),
      fields: [
        { label: 'Name:', value: '', id: uuidv4() },
        { label: 'Email:', value: '', id: uuidv4() },
        { label: 'Phone:', value: '', id: uuidv4() },
      ],
    },
    display: [
      {
        id: uuidv4(),
        fields: [
          { label: 'Name:', value: '', id: uuidv4() },
          { label: 'Email:', value: '', id: uuidv4() },
          { label: 'Phone:', value: '', id: uuidv4() },
        ],
      },
    ],
  },
  study: {
    formTitle: 'Studies',
    cvTitle: 'Education',
    id: uuidv4(),
    input: {
      id: uuidv4(),
      isEditing: false,
      fields: [
        { label: 'School Name:', value: '', id: uuidv4() },
        { label: 'Title of Study:', value: '', id: uuidv4() },
        { label: 'Date of Study:', value: '', id: uuidv4() },
      ],
    },
    display: [],
  },
  job: {
    formTitle: 'Jobs',
    cvTitle: 'Working Experience',
    id: uuidv4(),
    input: {
      id: uuidv4(),
      isEditing: false,
      fields: [
        { label: 'Company Name:', value: '', id: uuidv4() },
        { label: 'Position Title:', value: '', id: uuidv4() },
        { label: 'Main Roles:', value: '', id: uuidv4() },
        { label: 'Date:', value: '', id: uuidv4() },
      ],
    },
    display: [],
  },
};
