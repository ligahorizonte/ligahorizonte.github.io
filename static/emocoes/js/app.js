// This file contains the JavaScript logic for handling the accordion functionality in the "Roda das Emoções" project.

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('emotionAccordion');
    const continueBtn = document.getElementById('continueBtn');
    const emotions = window.emotionsData || {};

    console.log('DOMContentLoaded, emotions keys:', Object.keys(emotions));

    if (!container) {
        console.error('Elemento #emotionAccordion não encontrado.');
        return;
    }

    if (Object.keys(emotions).length === 0) {
        console.error('Nenhuma emoção encontrada em window.emotionsData');
        return;
    }

    // utilitário para ids seguros
    function cssSafe(s){ return String(s).replace(/\s+/g,'_').replace(/[^\w\-]/g,''); }

    // retorna entradas [nivel, subsArray] aceitando antigo objeto ou novo array
    function getIntensityEntries(data){
        const ints = data.intensities || {};
        if (Array.isArray(ints)) {
            // cada item: [nivel, sub1, sub2...]
            return ints.map(arr => {
                const [level, ...subs] = arr;
                return [level, subs];
            });
        } else {
            return Object.entries(ints);
        }
    }

    // estado de seleção: { 'Alegria': Set(['Eufórico','Extasiado']), ... }
    window.selectedSubs = window.selectedSubs || {};

    function toggleSub(emotionName, subBtn, subName){
        window.selectedSubs[emotionName] = window.selectedSubs[emotionName] || new Set();
        const set = window.selectedSubs[emotionName];
        if (set.has(subName)){
            set.delete(subName);
            subBtn.classList.remove('selected');
        } else {
            set.add(subName);
            subBtn.classList.add('selected');
        }
        updateContinueButton();
    }

    function updateContinueButton(){
        const any = Object.values(window.selectedSubs).some(s => s && s.size > 0);
        if (continueBtn) continueBtn.style.display = any ? 'inline-block' : 'none';
    }

    // gerar acordeão a partir do objeto (usa getIntensityEntries)
    console.log('Gerando acordeão...');
    Object.entries(emotions).forEach(([name, data], idx) => {
        console.log(`Criando item para: ${name}`);
        
        const item = document.createElement('div');
        item.className = 'accordion-item';

        const headingId = `heading_${cssSafe(name)}`;
        const collapseId = `collapse_${cssSafe(name)}`;

        const header = document.createElement('h2');
        header.className = 'accordion-header';
        header.id = headingId;

        const btn = document.createElement('button');
        btn.className = 'accordion-button collapsed';
        btn.type = 'button';
        btn.setAttribute('data-bs-toggle','collapse');
        btn.setAttribute('data-bs-target', `#${collapseId}`);
        btn.setAttribute('aria-expanded','false');
        btn.setAttribute('aria-controls', collapseId);
        btn.innerHTML = `${data.emoji || ''} ${name}`;

        header.appendChild(btn);
        item.appendChild(header);

        const collapse = document.createElement('div');
        collapse.id = collapseId;
        collapse.className = 'accordion-collapse collapse';
        collapse.setAttribute('aria-labelledby', headingId);
        collapse.setAttribute('data-bs-parent', '#emotionAccordion');

        const body = document.createElement('div');
        body.className = 'accordion-body';

        // usa helper para compatibilidade com os formatos antigos (intensities) e o novo (feelings)
        if (Array.isArray(data.feelings)) {
            // Flatten all groups and render every item as a selectable sentimento
            const flat = data.feelings.reduce((acc, g) => {
                if (Array.isArray(g)) return acc.concat(g);
                return acc.concat([g]);
            }, []);

            const lvl = document.createElement('div');
            lvl.className = 'intensity-group';
            const list = document.createElement('div');
            list.className = 'sub-list';
            list.style.display = 'flex';
            list.style.flexWrap = 'wrap';

            flat.forEach(feeling => {
                const b = document.createElement('button');
                b.type = 'button';
                b.className = 'sub-btn';
                b.textContent = feeling;
                b.style.cursor = 'pointer';
                b.onclick = () => toggleSub(name, b, feeling);
                list.appendChild(b);
            });

            lvl.appendChild(list);
            body.appendChild(lvl);
        } else {
            // compatibilidade com o formato antigo (intensities)
            const intensityEntries = getIntensityEntries(data);
            intensityEntries.forEach(([level, subs]) => {
                const lvl = document.createElement('div');
                lvl.className = 'intensity-group';

                // header com botão que abre/fecha a lista de sub‑emoções (mantido para compatibilidade)
                const levelHeader = document.createElement('div');
                levelHeader.className = 'd-flex align-items-center mb-2';

                const levelBtn = document.createElement('button');
                levelBtn.type = 'button';
                levelBtn.className = 'level-btn btn btn-sm btn-outline-secondary me-2';
                levelBtn.textContent = level;
                levelBtn.setAttribute('aria-expanded', 'false');

                const hint = document.createElement('small');
                hint.className = 'text-muted';
                hint.style.marginLeft = '6px';
                hint.textContent = '(clique para ver/subir)';

                levelHeader.appendChild(levelBtn);
                levelHeader.appendChild(hint);
                lvl.appendChild(levelHeader);

                const list = document.createElement('div');
                list.className = 'sub-list';
                list.style.display = 'none';

                // normalizar subs: aceitar ["nivel","a","b"] ou ["nivel", ["a","b"]]
                let normalizedSubs = [];
                if (Array.isArray(subs)) {
                    if (subs.length && Array.isArray(subs[0])) {
                        normalizedSubs = subs[0].slice();
                    } else {
                        normalizedSubs = subs.slice();
                    }
                }

                normalizedSubs = normalizedSubs.filter(s => String(s) !== String(level));

                normalizedSubs.forEach(sub => {
                    const b = document.createElement('button');
                    b.type = 'button';
                    b.className = 'sub-btn';
                    b.textContent = sub;
                    b.style.cursor = 'pointer';
                    b.onclick = () => toggleSub(name, b, sub);
                    list.appendChild(b);
                });

                levelBtn.addEventListener('click', () => {
                    const expanded = levelBtn.getAttribute('aria-expanded') === 'true';
                    levelBtn.setAttribute('aria-expanded', String(!expanded));
                    list.style.display = expanded ? 'none' : 'flex';
                });

                lvl.appendChild(list);
                body.appendChild(lvl);
            });
        }

        collapse.appendChild(body);
        item.appendChild(collapse);
        container.appendChild(item);
    });

    console.log('Acordeão gerado! Total de itens:', container.children.length);

    // estado inicial
    updateContinueButton();

    // função global chamada pelo botão "Continuar"
    window.goToNextStep = function goToNextStep(){
        // se não há seleção, não avançar
        const any = Object.values(window.selectedSubs).some(s => s && s.size > 0);
        if (!any) {
            alert('Selecione ao menos uma sub‑emoção para continuar.');
            return;
        }

        // gerar formulário de perguntas/plano por sub‑emoção na mesma página
        renderForms();
    };

    function renderForms(){
        // esconder acordeão e botão
        container.style.display = 'none';
        if (continueBtn) continueBtn.style.display = 'none';

        // criar área de formulário
        let formsWrap = document.getElementById('formsWrap');
        if (!formsWrap) {
            formsWrap = document.createElement('div');
            formsWrap.id = 'formsWrap';
            formsWrap.className = 'mt-4';
            document.querySelector('.container').appendChild(formsWrap);
        }
        formsWrap.innerHTML = '';

        // para cada emoção e sua(s) sub(s) criar cards com perguntas e plano
        Object.entries(window.selectedSubs).forEach(([emotion, set]) => {
            const selected = Array.from(set || []);
            if (selected.length === 0) return;
            const data = emotions[emotion] || {};
            selected.forEach(sub => {
                const card = document.createElement('div');
                card.className = 'card mb-3';
                const body = document.createElement('div');
                body.className = 'card-body';

                const title = document.createElement('h5');
                title.className = 'card-title';
                title.textContent = `${data.emoji || ''} ${emotion}, ${sub}`;
                body.appendChild(title);

                (data.questions || []).forEach((q, qi) => {
                    const formGroup = document.createElement('div');
                    formGroup.className = 'mb-2';
                    const label = document.createElement('label');
                    label.className = 'form-label';
                    label.textContent = q;
                    const ta = document.createElement('textarea');
                    ta.className = 'form-control';
                    ta.rows = 3;
                    ta.id = `${cssSafe(emotion)}_${cssSafe(sub)}_q${qi}`;
                    formGroup.appendChild(label);
                    formGroup.appendChild(ta);
                    body.appendChild(formGroup);
                });

                // plano e quando
                const planGroup = document.createElement('div');
                planGroup.className = 'mb-2';
                const planLabel = document.createElement('label');
                planLabel.className = 'form-label';
                planLabel.textContent = '💡 Em caso de sentimento ruim, o que você pode fazer para lidar melhor com isso ou o que você pode fazer para resolver esse sentimento? Se não sabe o que fazer, que tal procurar seu líder pra conversar?';
                const planTa = document.createElement('textarea');
                planTa.className = 'form-control';
                planTa.rows = 2;
                planTa.id = `${cssSafe(emotion)}_${cssSafe(sub)}_plan`;
                planGroup.appendChild(planLabel);
                planGroup.appendChild(planTa);
                body.appendChild(planGroup);

                const whenGroup = document.createElement('div');
                whenGroup.className = 'mb-3';
                const whenLabel = document.createElement('label');
                whenLabel.className = 'form-label';
                whenLabel.textContent = '🎯 Quando você fará isso?';
                const whenInput = document.createElement('input');
                whenInput.className = 'form-control';
                whenInput.id = `${cssSafe(emotion)}_${cssSafe(sub)}_when`;
                whenGroup.appendChild(whenLabel);
                whenGroup.appendChild(whenInput);
                body.appendChild(whenGroup);

                card.appendChild(body);
                formsWrap.appendChild(card);
            });
        });

        // botões: voltar e salvar
        const controls = document.createElement('div');
        controls.className = 'd-flex justify-content-between mb-5';
        controls.innerHTML = `
            <button class="btn btn-secondary" id="backToAccordion">⬅️ Voltar</button>
            <button class="btn btn-primary" id="saveAndCopy">💾 Salvar e Copiar</button>
        `;
        formsWrap.appendChild(controls);

        document.getElementById('backToAccordion').onclick = () => {
            formsWrap.remove();
            container.style.display = '';
            updateContinueButton();
        };
        document.getElementById('saveAndCopy').onclick = saveAndCopy;
        // rolar para topo do formulário
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function saveAndCopy(){
        let text = `🎭 *MINHA REFLEXÃO EMOCIONAL*\n_Roda das Emoções_\n\n`;
        const entries = Object.entries(window.selectedSubs || {});
        entries.forEach(([emotion, set], eIdx) => {
            const selected = Array.from(set || []);
            const emoji = (emotions[emotion] && emotions[emotion].emoji) || '';
            selected.forEach((sub, sIdx) => {
                const prefix = `${cssSafe(emotion)}_${cssSafe(sub)}`;
                text += `*Emoção:* ${emotion} ${emoji}, ${sub}\n\n*📝 REFLEXÃO:*\n`;
                const questions = (emotions[emotion] && emotions[emotion].questions) || [];
                questions.forEach((q, qi) => {
                    const ans = (document.getElementById(`${prefix}_q${qi}`) || {}).value || '';
                    if (ans.trim()) text += `\n*${q}*\n${ans}\n`;
                });
                const plan = (document.getElementById(`${prefix}_plan`) || {}).value || '';
                const when = (document.getElementById(`${prefix}_when`) || {}).value || '';
                if (plan.trim()) text += `\n*💡 PLANO para ${sub}:*\n${plan}\n`;
                if (when.trim()) text += `\n*⏰ Quando:* ${when}\n`;

                if (!(eIdx === entries.length -1 && sIdx === selected.length -1)) {
                    text += `\n${'─'.repeat(30)}\n\n`;
                }
            });
        });

        text += `\n_Registrado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}_`;

        navigator.clipboard.writeText(text).then(() => {
            // mensagem simples
            const msg = document.createElement('div');
            msg.className = 'alert alert-success position-fixed';
            msg.style.top = '20px';
            msg.style.right = '20px';
            msg.style.zIndex = 9999;
            msg.innerHTML = '✅ <strong>Texto copiado!</strong> Agora você pode colar no WhatsApp ou onde quiser.';
            document.body.appendChild(msg);
            setTimeout(()=> msg.remove(), 3000);
            // voltar ao início e limpar seleções
            document.querySelectorAll('.sub-btn.selected').forEach(b => b.classList.remove('selected'));
            window.selectedSubs = {};
            // remover formulário e mostrar acordeão
            const formsWrap = document.getElementById('formsWrap');
            if (formsWrap) formsWrap.remove();
            container.style.display = '';
            updateContinueButton();
        }).catch(err => {
            alert('Erro ao copiar para área de transferência.');
            console.error(err);
        });
    }

});

// helper público se precisar usar depois
function getSelectedByEmotion(){
    const out = {};
    for(const k in window.selectedSubs){
        out[k] = Array.from(window.selectedSubs[k]);
    }
    return out;
}
