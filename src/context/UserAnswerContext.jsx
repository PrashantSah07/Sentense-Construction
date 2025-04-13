import React, { createContext, useState } from 'react';

const UserAnswerContext = createContext();

export const UserAnswerProvider = ({ children }) => {
    const [userAnswers, setUserAnswers] = useState([]);

    return (
        <UserAnswerContext.Provider value={{ userAnswers, setUserAnswers }}>
            {children}
        </UserAnswerContext.Provider>
    );
};

export default UserAnswerContext;
