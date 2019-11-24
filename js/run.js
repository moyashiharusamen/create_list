{
    const main = document.getElementById('main');
    const jsonPath = '../data/list.json';

    fetch(jsonPath)
        .then((responce) => responce.json())
        .then((json) => {
            hoge(json);
        });

    const hoge = (json) => {
        const l = json.length;
        const headText = ['No.', '名称', '提出日', '備考'];
        const headTextLength = headText.length;

        for (let i = 0; i < l; i++) {
            const h2 = document.createElement('h2');
            const table = document.createElement('table');
            const thead = table.createTHead();
            const tbody = table.createTBody();
            const row = thead.insertRow(0);

            for (let k = 0; k < headTextLength; k++) {
                let cell = row.insertCell(k);

                cell.innerText = headText[k];
            }

            Object.keys(json[i]).forEach((e) => {
                const l2 = json[i][e].length;

                h2.innerText = e;
                list.appendChild(h2);
                list.insertBefore(table, h2.nextSibling);

                for (let j = 0; j < l2; j++) {
                    const tbodyRow = tbody.insertRow(0);
                    const value = json[i][e][j];
                    const content = {
                        num: value.number,
                        name: value.name,
                        date: value.date,
                        note: value.note,
                    };
                    const status = value.status;
                    const path = value.path;

                    tbodyRow.classList = status;

                    Object.keys(content).forEach((e, i) => {
                        const a = document.createElement('a');
                        let cell = tbodyRow.insertCell(i);

                        if (e === 'name') {
                            cell.appendChild(a);
                            cell.children[0].setAttribute('href', path);
                            cell.children[0].innerHTML = content.name;

                            if (path.indexOf('http') !== -1) {
                                cell.children[0].setAttribute('target', '_blank');
                            }

                            return;
                        }

                        cell.innerText = content[e];
                    });
                }
            })
        }
    };
}