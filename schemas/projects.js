// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    initialValue: {
        date_created: new Date().toISOString() 
    },
    fields: [
        {
            name: 'project_name',
            title: 'Project Name',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
          },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'This is use as your parameter for your page',
            options: {
              source: 'project_name',
              maxLength: 96,
            },
          },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'github_url',
            description: 'Git Repository URL',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: 'project_url',
            description: 'Project URL',
            title: 'URL',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            })
        },
        {
            name: 'date_created',
            title: 'Date Created',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
                calendarTodayLabel: 'Today'
            }
        }
    ]
}