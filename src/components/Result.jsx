import React, { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';
import sampleJson from '../assets/sample.json'
import UserAnswerContext from '../context/UserAnswerContext'
import { Link } from 'react-router-dom';

const Result = () => {
    const { score } = useContext(ScoreContext);
    const { userAnswers } = useContext(UserAnswerContext);

    const circleProgress = (score) => {
        const percentage = (score / 100) * 100;
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const strokeDasharray = circumference * (percentage / 100);
        return strokeDasharray;
    };

    console.log(userAnswers[0]?.join(' → '));

    return (
        <div className="flex flex-col items-center justify-center mt-20 max-w-[1000px] mx-auto gap-5">
            <div className="relative">
                <svg width="250" height="250" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="45" stroke="#e6e6e6" strokeWidth="7" fill="none" />
                    <circle cx="60" cy="60" r="45" stroke="#4caf50" strokeWidth="7" fill="none" strokeDasharray={`${circleProgress(score)}, ${2 * Math.PI * 45}`} strokeLinecap="round" transform="rotate(-90 60 60)" />
                </svg>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-semibold text-green-600">{score}
                </div>
            </div>

            <div className="">
                <p className="text-[18px] font-semibold text-gray-600 text-center">
                    {score == 100 ? "Excellent!" : "While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details."}
                </p>
            </div>

            <div className='my-10'>
                <Link to='/'><button className='px-8 py-2 border-2 border-blue-600 rounded-[8px]'>Go to Dashboard</button></Link>
            </div>

            <div className='mb-10'>
                {sampleJson.data.questions.map((e, i) => (
                    <div key={i} className="border p-4 my-4 rounded-md shadow-md">
                        <p className="font-semibold text-lg mb-2">{i + 1}. {e.question}</p>
                        <div className="border border-dashed border-green-500 p-3 rounded-md bg-green-50 mt-2">
                            <span className="text-green-700 font-medium">Correct Answer:</span>{' '}
                            <span className="font-semibold text-green-900">{e.correctAnswer.join(' → ')}</span>
                        </div>
                        <div className={`border border-dashed ${e.correctAnswer.join('') === (userAnswers[i]?.join('') || '') ? 'border-green-500 bg-green-50' : 'border-red-600 bg-red-200'} p-3 rounded-md mt-2`}>
                            <span className="text-green-700 font-medium">Your Answer:</span>{' '}
                            <span className="font-semibold text-green-900">{userAnswers[i]?.join(' → ')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;
