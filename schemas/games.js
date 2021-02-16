// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'games',
    title: 'Games',
    type: 'document',
    initialValue: () => ({
        game_played_times: 0,
        is_selected: false,
        is_correct: false,
        score: 0
    }) ,
    fields: [
        {
            name: 'game_name',
            type: 'string'
        },
        {
            name: 'game_played_times',
            title: 'Game Played Times',
            type: 'number',
        },
        {
            name: 'image_url',
            title: 'Cover Image Link',
            type: 'string',
        },
        {
            name: 'score',
            title: 'Score',
            type: 'string',
        },
        {
            name: 'question_and_answers',
            title: 'Question And Answers',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    {type: 'object', name: 'question', title: 'Question', fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string'
                        },
                        {type: 'array', name: 'choices', title: 'Choices', of: [{
                            type: 'object',
                            fields: [
                                {
                                    title: 'Choice',
                                    name: 'choice',
                                    type: 'string'
                                },
                                {
                                    title: 'isCorrect',
                                    name: 'is_correct',
                                    type: 'boolean'
                                },                               
                                {
                                    title: 'Selected',
                                    name: 'is_selected',
                                    type: 'boolean'
                                },
                            ]
                        }]}
                    ]},
                   
                ]
                }
            ]
        }
    ]
}