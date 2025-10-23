// Dados das emoções expostos globalmente para app.js
const emotions = {
    'Alegria': {
        emoji: '😊',
        intensities: {
            'Êxtase (Intenso)': ['Eufórico', 'Extasiado', 'Exultante'],
            'Alegre (Moderado)': ['Feliz', 'Contente', 'Satisfeito'],
            'Sereno (Suave)': ['Calmo', 'Tranquilo', 'Pacífico']
        },
        questions: [
            'O que aconteceu de bom que te deixou assim?',
            'Quem ou o que contribuiu para esse sentimento?',
            'Como seu corpo está se comportando agora?'
        ]
    },
    'Confiança': {
        emoji: '🤝',
        intensities: {
            'Admiração (Intenso)': ['Veneração', 'Fascínio', 'Deslumbrado'],
            'Confiante (Moderado)': ['Seguro', 'Certo', 'Crente'],
            'Aceitação (Suave)': ['Tolerante', 'Receptivo', 'Complacente']
        },
        questions: [
            'Em quem ou no que você está confiando?',
            'O que te faz sentir seguro nessa situação?',
            'Há quanto tempo você sente essa confiança?'
        ]
    },
    'Medo': {
        emoji: '😨',
        intensities: {
            'Terror (Intenso)': ['Apavorado', 'Horrorizado', 'Petrificado'],
            'Amedrontado (Moderado)': ['Assustado', 'Preocupado', 'Alarmado'],
            'Apreensão (Suave)': ['Inseguro', 'Tenso', 'Nervoso']
        },
        questions: [
            'Esse medo está relacionado a algo do passado ou do futuro?',
            'O que você imagina que pode acontecer?',
            'Que ações poderiam reduzir esse medo?'
        ]
    },
    'Surpresa': {
        emoji: '😲',
        intensities: {
            'Espanto (Intenso)': ['Chocado', 'Atônito', 'Estupefato'],
            'Surpreso (Moderado)': ['Admirado', 'Maravilhado', 'Impressionado'],
            'Distraído (Suave)': ['Desatento', 'Disperso', 'Confuso']
        },
        questions: [
            'O que te surpreendeu?',
            'Foi uma surpresa positiva ou negativa?',
            'Você esperava algo diferente?'
        ]
    },
    'Tristeza': {
        emoji: '😢',
        intensities: {
            'Luto (Intenso)': ['Desolado', 'Desesperado', 'Arrasado'],
            'Triste (Moderado)': ['Melancólico', 'Abatido', 'Desanimado'],
            'Pensativo (Suave)': ['Reflexivo', 'Nostálgico', 'Saudoso']
        },
        questions: [
            'O que te deixou assim?',
            'Você perdeu algo ou alguém importante?',
            'Quando você começou a se sentir dessa forma?'
        ]
    },
    'Nojo': {
        emoji: '🤢',
        intensities: {
            'Ódio (Intenso)': ['Repugnado', 'Abominável', 'Detestável'],
            'Enojado (Moderado)': ['Repelido', 'Nauseado', 'Aversivo'],
            'Entediado (Suave)': ['Desinteressado', 'Indiferente', 'Apático']
        },
        questions: [
            'O que está causando esse sentimento?',
            'É algo físico, moral ou comportamental?',
            'Como você gostaria que essa situação fosse?'
        ]
    },
    'Raiva': {
        emoji: '😠',
        intensities: {
            'Fúria (Intenso)': ['Furioso', 'Irado', 'Enraivecido'],
            'Com raiva (Moderado)': ['Irritado', 'Ressentido', 'Frustrado'],
            'Aborrecido (Suave)': ['Incomodado', 'Contrariado', 'Impaciente']
        },
        questions: [
            'O que te deixou com raiva?',
            'Você se sentiu injustiçado ou desrespeitado?',
            'O que você esperava que acontecesse de diferente?'
        ]
    },
    'Expectativa': {
        emoji: '🤔',
        intensities: {
            'Vigilância (Intenso)': ['Alerta', 'Atento', 'Preparado'],
            'Antecipação (Moderado)': ['Esperançoso', 'Ansioso', 'Curioso'],
            'Interesse (Suave)': ['Interessado', 'Intrigado', 'Receptivo']
        },
        questions: [
            'O que você está esperando que aconteça?',
            'Essa expectativa é positiva ou te deixa ansioso?',
            'O que depende de você para isso acontecer?'
        ]
    }
};

window.emotionsData = emotions;