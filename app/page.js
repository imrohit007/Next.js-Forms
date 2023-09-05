'use client'
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    hobby: '',
  })
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Let's Play With Forms</h1>
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <label className="text-xl font-bold">Name</label>
        <input
          className="border-2 border-gray-400 rounded-lg p-2 m-2"
          type="text"
          name="name"
          value={formData.name}
          placeholder='Enter your name'
          onChange={handleChange}
        />
        <label className="text-xl font-bold">Age</label>
        <input
          className="border-2 border-gray-400 rounded-lg p-2 m-2"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label className="text-xl font-bold">Hobby</label>
        <input
          className="border-2 border-gray-400 rounded-lg p-2 m-2"
          type="text"
          name="hobby"
          value={formData.hobby}
          onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </form>

      {/* Display form data only if the form has been submitted */}
      {submitted && (
        <div className="flex flex-col items-center justify-center w-1/2">
          <h2 className="text-2xl font-bold">Form Data</h2>
          <p className="text-xl">Name: {formData.name}</p>
          <p className="text-xl">Age: {formData.age}</p>
          <p className="text-xl">Hobby: {formData.hobby}</p>
        </div>
      )}
    </main>
  )
}
