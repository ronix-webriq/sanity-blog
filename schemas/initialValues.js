import T from '@sanity/base/initial-value-template-builder';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
   ...T.defaults(),

   T.template({
       id: 'task_manager-not_started',
       title: 'Task Manager',
       schemaType: 'task_managesr',
       value: {
           not_started: true
       }
   }) 
]