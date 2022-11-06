import React from 'react'
import Header from "../components/Header";
import PollTemplate from '../components/poll/PollTemplate';


const Poll = () => {

    const polls = [
        {
            title: 'Do you get water?'
        }, 
        {
            title: 'Is power reliable?'
        }, 
        {
            title: 'Are the road systems ok?'
        }, 
        {
            title: 'Is Ruto good?'
        }, 
        {
            title: 'Should the construction continue?'
        }
    ]
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
        <Header title="Poll" category=""/>
        <div className='flex flex-row gap-1 flex-wrap'>
            {
                polls.map((poll) => {
                    return <PollTemplate content={poll}/>
                })
            }

        </div>

        
            
        </div>
    )
}

export default Poll
