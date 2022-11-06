import React from "react";
import Header from "../components/Header";
import PollItem from "../components/poll/PollItem";
import PollTemplate from "../components/poll/PollTemplate";

const Poll = () => {
    const polls = [
        {
            title: "Do you get water?",
        },
        {
            title: "Is power reliable?",
        },
        {
            title: "Are the road systems ok?",
        },
        {
            title: "Is Ruto good?",
        },
        {
            title: "Should the construction continue?",
        },
    ];
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Poll" category="" />
            <div className="flex flex-row flex-wrap space-x-4 gap-2">
                {polls.map((item, i) => (
                    <PollItem key={i} text={item.title} />
                ))}
            </div>
        </div>
    );
};

export default Poll;
