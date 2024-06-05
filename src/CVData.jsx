import { v4 as uuidv4 } from 'uuid';

export const CVData = {
  info: {
    id: uuidv4(),
    title: 'Personal Info',
    inputs: [
      { label: 'Name:', value: '', id: uuidv4() },
      { label: 'Email:', value: '', id: uuidv4() },
      { label: 'Phone:', value: '', id: uuidv4() },
    ],
  },
  study: {
    id: uuidv4(),
    title: 'Education',
    inputs: [
      { label: 'School Name:', value: '', id: uuidv4() },
      { label: 'Title of Study:', value: '', id: uuidv4() },
      { label: 'Date of Study:', value: '', id: uuidv4() },
    ],
  },
  job: {
    id: uuidv4(),
    title: 'Job Experience',
    inputs: [
      { label: 'Company Name:', value: '', id: uuidv4() },
      { label: 'Position Title:', value: '', id: uuidv4() },
      { label: 'Main Roles:', value: '', id: uuidv4() },
      { label: 'Date:', value: '', id: uuidv4() },
    ],
  },
};
