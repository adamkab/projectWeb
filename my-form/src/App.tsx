import React, { useState, ChangeEvent, FormEvent } from 'react';

interface EducationEntry {
  degree: string;
  institution: string;
  graduationDate: string;
}

interface ExperienceEntry {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

const CVForm: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    address: ''
  });

  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([{
    degree: '',
    institution: '',
    graduationDate: ''
  }]);

  const [experienceEntries, setExperienceEntries] = useState<ExperienceEntry[]>([{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    responsibilities: ''
  }]);

  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleEducationChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducationEntries = [...educationEntries];
    newEducationEntries[index] = { ...newEducationEntries[index], [name]: value };
    setEducationEntries(newEducationEntries);
  };

  const handleExperienceChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newExperienceEntries = [...experienceEntries];
    newExperienceEntries[index] = { ...newExperienceEntries[index], [name]: value };
    setExperienceEntries(newExperienceEntries);
  };

  const addEducationEntry = () => {
    setEducationEntries([...educationEntries, { degree: '', institution: '', graduationDate: '' }]);
  };

  const removeEducationEntry = (index: number) => {
    const newEducationEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(newEducationEntries);
  };

  const addExperienceEntry = () => {
    setExperienceEntries([...experienceEntries, { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }]);
  };

  const removeExperienceEntry = (index: number) => {
    const newExperienceEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(newExperienceEntries);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted', { personalInfo, educationEntries, experienceEntries, skills, languages, otherInfo });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">CV Form</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <label className="block mb-2">
          First Name:
          <input type="text" name="firstName" value={personalInfo.firstName} onChange={handlePersonalInfoChange} required className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
        <label className="block mb-2">
          Last Name:
          <input type="text" name="lastName" value={personalInfo.lastName} onChange={handlePersonalInfoChange} required className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
        <label className="block mb-2">
          Age:
          <input type="number" name="age" value={personalInfo.age} onChange={handlePersonalInfoChange} required min="18" className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange} required className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
        <label className="block mb-2">
          Address:
          <input type="text" name="address" value={personalInfo.address} onChange={handlePersonalInfoChange} required maxLength={100} className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {educationEntries.map((entry, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">
              Degree:
              <input type="text" name="degree" value={entry.degree} onChange={(e) => handleEducationChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              Institution:
              <input type="text" name="institution" value={entry.institution} onChange={(e) => handleEducationChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              Graduation Date:
              <input type="date" name="graduationDate" value={entry.graduationDate} onChange={(e) => handleEducationChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <button type="button" onClick={() => removeEducationEntry(index)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addEducationEntry} className="text-blue-500">Add Education</button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
        {experienceEntries.map((entry, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">
              Company:
              <input type="text" name="company" value={entry.company} onChange={(e) => handleExperienceChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              Position:
              <input type="text" name="position" value={entry.position} onChange={(e) => handleExperienceChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              Start Date:
              <input type="date" name="startDate" value={entry.startDate} onChange={(e) => handleExperienceChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              End Date:
              <input type="date" name="endDate" value={entry.endDate} onChange={(e) => handleExperienceChange(index, e)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <label className="block mb-2">
              Responsibilities:
              <textarea name="responsibilities" value={entry.responsibilities} onChange={(e) => handleExperienceChange(index, e)} rows={4} className="block w-full p-2 border border-gray-300 rounded mt-1" />
            </label>
            <button type="button" onClick={() => removeExperienceEntry(index)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addExperienceEntry} className="text-blue-500">Add Experience</button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <label className="block mb-2">
          Describe your skills:
          <textarea name="skills" value={skills} onChange={(e) => setSkills(e.target.value)} rows={4} className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Languages</h2>
        <label className="block mb-2">
          Languages you speak:
          <input type="text" name="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Other Information</h2>
        <label className="block mb-2">
          Other Relevant Information:
          <textarea name="otherInfo" value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} rows={4} className="block w-full p-2 border border-gray-300 rounded mt-1" />
        </label>
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default CVForm;
