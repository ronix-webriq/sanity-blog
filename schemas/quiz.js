// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'quiz',
    title: 'Quiz',
    type: 'document',
    fields:[
        {
            name: 'question',
            title: 'Question',
            type: 'string'
        },
        {
            name: 'answers',
            title: 'Answers',
            type: 'array', 
            of: [
                {
                    type: 'string'
                }
            ]         
        },
        {
            name: 'choices',
            title: 'Choices',
            type: 'array', 
            of: [
                {
                    type: 'string'
                }
            ]         
        },
        {
            name: 'json_obj',
            title: 'Json Obj',
            type: 'array', 
            of: [               
                {
                  title: 'Actor name',
                  type: 'object',
                  fields: [
                    {
                      title: 'Name',
                      name: 'value',
                      type: 'string'
                    } 
                  ]
                }
              ]  
        }
    ]
}