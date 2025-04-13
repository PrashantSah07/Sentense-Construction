import React, { useContext, useEffect, useState } from 'react'
import sampleJson from '../assets/sample.json'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import ScoreContext from '../context/ScoreContext'
import UserAnswerContext from '../context/UserAnswerContext'

const Questions = () => {
    const navigate = useNavigate();
    const { score, setScore } = useContext(ScoreContext);
    const { setUserAnswers } = useContext(UserAnswerContext);
    const [count, setCount] = useState(0);
    const [quesLength, setQuesLength] = useState(1);
    const questions = sampleJson.data.questions.slice(count, quesLength);
    const [time, setTime] = useState(30);
    const [disabled, setDisabled] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        setTime(30)
        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);


    useEffect(() => {
        if (time === 0) {
            setUserAnswers(prev => [...prev, selectedOptions]);
            finalResult();
            if (count <= 8 && quesLength <= 9) {
                setCount(count + 1);
                setQuesLength(quesLength + 1);
                setSelectedOptions([]);
                setDisabled(true);
            } else {
                navigate('/result');
            }
        }
    }, [time]);

    useEffect(() => {
        if (selectedOptions.length === 4) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [selectedOptions])


    const handleOptionSelect = (value) => {
        if (selectedOptions.includes(value)) {
            const index = selectedOptions.indexOf(value);
            const updatedOptions = [...selectedOptions];
            updatedOptions.splice(index, 1)
            updatedOptions.unshift(value);
            setSelectedOptions(updatedOptions);
        } else if (selectedOptions.length < 4) {
            setSelectedOptions([...selectedOptions, value]);
        }
    };


    function finalResult() {
        let correct = (questions[0].correctAnswer).join('');
        let user = selectedOptions.join('');

        if (correct === user) {
            setScore(score + 10)
        }
    }

    const handleNext = () => {
        setUserAnswers(prev => [...prev, selectedOptions]);
        finalResult();
        if (count <= 8 && quesLength <= 9) {
            setCount(count + 1);
            setQuesLength(quesLength + 1);
            setSelectedOptions([]);
            setDisabled(true);
        } else {
            navigate('/result');
        }
    };

    return (
        <div className='max-w-[1550px] mx-auto flex justify-center items-center flex-col'>
            {questions.map(function (ques) {
                return (<div key={ques.questionId} className='flex flex-col shadow-2xl rounded-[10px] max-w-[1000px] mt-10 justify-center items-center gap-10 px-10 pb-30 py-10 relative'>
                    <div className='flex justify-between items-center w-full'>
                        <p className='font-medium'>0:{time}</p>
                        <Link to='/'><button className='text-white px-5 py-1 rounded-[8px] border-[#00000046] bg-red-500 hover:bg-red-700 duration-200'>Quit</button></Link>
                    </div>
                    <h1 className='text-[18px] font-medium text-[#666060]'>Select the correct words in the correct order</h1>
                    <div>
                        <p className='text-[20px] flex gap-2 leading-10'><span className='font-bold'>{quesLength}.</span>{ques.question}</p>
                    </div>
                    <div className='flex gap-2'>
                        {ques.options.map(function (value, i) {
                            return <button key={i} className='border-1 px-3 py-2 rounded-[8px]  border-[#00000046] bg-amber-100 hover:bg-[#f9ed97] duration-200' onClick={function () {
                                handleOptionSelect(value)
                            }}>{value}</button>
                        })}
                    </div>
                    <div className="mt-5">
                        <p className="font-medium text-[#666060]">Selected Order:</p>
                        <p className="text-lg font-bold text-blue-500">
                            {selectedOptions.join(' → ')}
                        </p>
                    </div>
                    <button disabled={disabled} className={`p-4 rounded-[10px] absolute bottom-5 right-5 ${disabled ? 'border-[#00000046] border-1' : 'bg-blue-600 border-1 border-[#155dfc] hover:bg-blue-800 duration-200'}`} onClick={handleNext}><FaArrowRight color={`${disabled ? '#00000046' : 'white'}`} /></button>

                </div>)
            })}
        </div>
    )
}

export default Questions
