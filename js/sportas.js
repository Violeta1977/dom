export function renderSportTable(sportData) {
  let HTML = '';

  for (let i = 0; i < sportData.length; i++) {
    HTML += `<tr>
                <td>${i + 1}</td>
                <td>${sportData[i].title}</td>
                <td>${sportData[i].date}</td>
            </tr>`;
  }

  return `
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Next game date</td>
            </tr>
        </thead>
        <tbody>${HTML}</tbody>
    </table>`;
}
