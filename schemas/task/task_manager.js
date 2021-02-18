import client from 'part:@sanity/base/client';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Task Manager',
    name: 'task_manager',
    type: 'document',
    initialValue: () => ({
       'todo_list.not_started': true
    }),
    fields: [        
        {          
            title: 'Todo',
            name: 'todo',
            type: 'array',
            of: [
                {
                    title: 'To Do List',                    
                    name: 'todo_list',
                    type: 'object',
                    fields: [
                        {
                            title: 'Name',
                            description: 'Write a name of something you want to do today',
                            name: 'todo_name',
                            type: 'string'
                        },
                        {
                            title: 'Not Started',
                            description: 'Not started will be set as true as  default after creating new task.',
                            name: 'not_started',
                            type: 'boolean'                           
                        },
                        {
                            title: 'In Progress',
                            description: 'In Progress will be set as default false after creating new task.',
                            name: 'in_progress',
                            type: 'boolean'
                        },
                        {
                            title: 'For Review',
                            description: 'For Review will be set as default false after creating new task.',
                            name: 'for_review',
                            type: 'boolean'
                        },
                        {
                            title: 'Completed',
                            description: 'Completed will be set as default false after creating new task.',
                            name: 'completed',
                            type: 'boolean'
                        },
                    ]
                },
                
            ]
        }
    ]
}