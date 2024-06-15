import React from 'react';

const Student = ({ student, setSelectedItems }) => {

    return (
        <div className='Content'>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <label>
                <input
                    type="checkbox"
                    value={student.id}
                />
            </label>


        </div>
    );
};

export default Student;




