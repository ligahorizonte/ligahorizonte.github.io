// Dados das emoções expostos globalmente para app.js
const emotions = {
    'Feliz': {
        emoji: '😊',
        feelings: [
            ['Diversão','Satisfação', 'Interesse', 'Orgulho', 'Aceitação', 'Poder', 'Paz', 'Confiança', 'Otimismo'],
            ['Excitação', 'Atrevimento', 'Liberdade', 'Felicidade', 'Curiosidade', 'Indagação', 'Satisfação', 'Confiança', 'Respeito', 'Reconhecimento', 'Coragem', 'Criatividade', 'Amoroso', 'Agradecimento', 'Sensibulidade', 'Intimidade', 'Esperança', 'Inspiração']
        ],
        questions: [
            'O que aconteceu de bom que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Triste': {
        emoji: '😔',
        feelings: [
            ['Solidão','Vulnerável', 'Desespero', 'Culpa', 'Depressivo', 'Magoado'],
            ['Isolado', 'Abandonado', 'Vitimado', 'Frágil', 'Sofrimento', 'Imponente', 'Vergonha', 'Remorso', 'Vazio', 'Inferior', 'Desapontado', 'Constrangido']
        ],
        questions: [
            'O que aconteceu de bom que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Enjoado': {
        emoji: '🤢',
        feelings: [
            ['Rejeição','Terrível', 'Desapontado', 'Desaprovação'],
            ['Hesitação', 'Horrorizado', 'Detestável', 'Nauseado', 'Revoltado', 'Chocado', 'Constrangido', 'Julgamento']
        ],
        questions: [
            'O que aconteceu de bom que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    }
};

window.emotionsData = emotions;