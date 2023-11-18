import { Timeline } from 'antd';

const Resume: React.FC = () => {
  return (
    <>
      <Timeline
        mode={'left'}
        items={[
          {
            label: 'January, 2020',
            children: 'Graduate from Master, Software Engineering',
          },
          {
            label: 'January, 2020',
            children: 'Software Engineer Intern, Tadaweb',
          },
          {
            label: 'September, 2020',
            children: 'Junior Software Engineer, Tadaweb',
          },
          {
            label: 'June, 2023',
            children: 'Senior Software Engineer, Tadaweb',
          },
        ]}
      />
    </>
  );
};

export default Resume;
