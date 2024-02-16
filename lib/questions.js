const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to create?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'fill',
        message: 'What color would you like the shape to be?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to add to the shape?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?'
    }
];

module.exports = { questions };
