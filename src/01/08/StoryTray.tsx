import React from 'react';

type Props = {
    stories: {
        id: string;
        label: string
    }[]
}

function StoryTray({stories}: Props) {
    let newStories = stories.slice();
    newStories.push({
        id: 'create',
        label: 'Create Story'
    });

    return (
        <ul className=''>
            {newStories.map(story => (
                <li key={story.id} className='rounded-md border border-solid border-gray-500 m-1 p-1 w-[70px] h-[100px] float-left'>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}

export default StoryTray;