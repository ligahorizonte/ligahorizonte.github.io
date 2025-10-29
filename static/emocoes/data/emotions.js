// Dados das emoções expostos globalmente para app.js
const emotions = {
    'Feliz': {
        emoji: '😊',
        feelings: [
            ['Diversão','Satisfação', 'Interesse', 'Orgulho', 'Aceitação', 'Poder', 'Paz', 'Confiança', 'Otimismo'],
            ['Excitação', 'Atrevimento', 'Liberdade', 'Felicidade', 'Curiosidade', 'Indagação', 'Satisfação', 'Confiança', 'Respeito', 'Reconhecimento', 'Coragem', 'Criatividade', 'Amoroso', 'Agradecimento', 'Sensibulidade', 'Intimidade', 'Esperança', 'Inspiração']
        ],
        questions: [
            'O que aconteceu que te deixou assim?',
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
            'O que aconteceu que te deixou assim?',
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
            'O que aconteceu que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Raiva': {
        emoji: '😤',
        feelings: [
            ['Desapontado','Humilhado', 'Amargurado', 'Enlouquecido', 'Agressivo', 'Frustrado', 'Reservado', 'Crítico'],
            ['Traído', 'Resentido', 'Desrespeitado', 'Ridicularizado', 'Indignado', 'Violado', 'Furioso', 'Invejoso', 'Provocador', 'Hostil', 'Enfurecido', 'Aborrecido', 'Retraído', 'Entorpecido', 'Cético', 'Arrogante']
        ],
        questions: [
            'O que aconteceu que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Medo': {
        emoji: '😱',
        feelings: [
            ['Ameaçado','Rejeitado', 'Fraco', 'Inseguro', 'Ansioso', 'Assustado'],
            ['Exposto', 'Nervoso', 'Reprimido', 'Excluído', 'Insignificante', 'Incapaz', 'Inferior', 'Incapaz', 'Insignificante', 'Excluído', 'Reprimido', 'Nervoso', 'Exposto']
        ],
        questions: [
            'O que aconteceu que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Mal': {
        emoji: '😐',
        feelings: [
            ['Tédio','Ocupado', 'Estressado', 'Cansado'],
            ['Indiferente', 'Desanimado', 'Pressionado', 'Apressado', 'Sobrecarregado', 'Fora de controle', 'Sonolento', 'Disperso']
        ],
        questions: [
            'O que aconteceu que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Surpresa': {
        emoji: '😮',
        feelings: [
            ['Assombrado','Confuso', 'Espantado', 'Empolgado'],
            ['Chocado', 'Desanimado', 'Desiludido', 'Perplexo', 'Admirado', 'Temeroso', 'Ansioso', 'Energético']
        ],
        questions: [
            'O que aconteceu que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
};

window.emotionsData = emotions;