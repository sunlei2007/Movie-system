import React, { useState } from 'react';


const Dialog = ({ showDialog, handleCloseDialog, handleSubmit }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
        checkButtonDisabled(value, year, description, genre);
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        checkButtonDisabled(title, value, description, genre);
    };

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        setDescription(value);
        checkButtonDisabled(title, year, value, genre);
    };

    const handleGenreChange = (e) => {
        const value = e.target.value;
        setGenre(value);
        checkButtonDisabled(title, year, description, value);
    };

    const checkButtonDisabled = (title, year, description, genre) => {
        if (title && year && description && genre && /^\d{4}$/.test(year)) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    return (
        <div className={`dialog-container ${showDialog ? 'show' : ''}`}>
            <div className="dialog">
                <h2 className="dialog-title">New Movie</h2>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="Year"
                    value={year}
                    onChange={handleYearChange}
                />
                <textarea
                    className="input-field"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Genre"
                    value={genre}
                    onChange={handleGenreChange}
                />
                <div className="dialog-buttons">
                    <button className="dialog-button" disabled={isButtonDisabled} onClick={handleSubmit}>
                        Submit
                    </button>
                    <button className="dialog-button" onClick={handleCloseDialog}>
                        Cancel
                     </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
