// src/pages/ReadmeGeneratorPage/ReadmeGeneratorPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 60px; // Added space at the bottom to prevent button cut-off
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%; // Ensure form takes full width for responsiveness
`;

const Input = styled.input`
  padding: 8px;
  margin: 5px 0; // Adjusted for consistency
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 90%; // Made fields wider
  max-width: 500px; // Set a max-width for larger screens
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #444; // Dark button background
  color: #fff; // Light text color
  &:hover {
    background-color: #555;
  }
`;

function ReadmeGeneratorPage() {
  const [formData, setFormData] = useState({
    projectTitle: '',
	developer: '',
    description: '',
	contributing: '',
    BOM: '',
    printSettings: '',
    credits: '',
    assemblyInstructions: '',
	license: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
	e.preventDefault();

	const doc = new jsPDF();
	let yPos = 10;

	Object.entries(formData).forEach(([key, value]) => {
	  doc.text(10, yPos, `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
	  yPos += 10; // Increment yPos for the next line of text
	});

	// Footer text
	const footerText = "Made by the README generator on ";
	const clickableText = "durbanpoisonpew.fun";
	const fullText = footerText + clickableText;

	// Calculate text width to center it
	const textWidth = doc.getTextWidth(fullText);
	const pageWidth = doc.internal.pageSize.getWidth();
	const textStart = (pageWidth - textWidth) / 2;

	doc.setTextColor(0, 0, 0);

	// Position and print the first part of the text
	doc.text(footerText, textStart, 280);

	// Calculate the position of the clickable text
	const clickableTextWidth = doc.getTextWidth(footerText);
	const clickableTextStart = textStart + clickableTextWidth;

	// Print the clickable text and make it a link
	doc.textWithLink(clickableText, clickableTextStart, 280, { url: 'https://durbanpoisonpew.fun' });

	// Reset text color to black for any following text
	doc.setTextColor(0, 0, 0);

	doc.save('README.pdf');
  };


  return (
    <Container>
      <h1>README Generator</h1>
      <Form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <Input
            key={key}
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
        <Button type="submit">Generate PDF</Button>
      </Form>
    </Container>
  );
}

export default ReadmeGeneratorPage;
