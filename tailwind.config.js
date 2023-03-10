module.exports = {
    content: ['./index.html', './src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                'sans': 'Inter, sans-serif',
            },
            textColor: {
                default: {
                    color: 'var(--color-default)',
                    button: 'var(--color-button)',
                },
            },
            fill: {
                fillDefault: 'var(--fill-default)',
            },
            backgroundColor: {
                default: 'var(--background-default)',
                button: 'var(--button-background)',
            },
            borderColor: {
                default: 'var(--color-default)',
            },
            colors: {
                "light-gray": "#667085",
                "bordeux": "#B42318"
            },
        },
    },
    plugins: [],
    important: true,
};
