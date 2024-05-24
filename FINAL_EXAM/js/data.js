document.addEventListener('DOMContentLoaded', function() {
    loadXMLData();
});

function loadXMLData() {
    const xmlFilePath = 'media/xmlSample.xml'; 

    fetch(xmlFilePath)
    .then(response => response.text())
    .then(xmlData => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
        const spatialUnits = xmlDoc.querySelectorAll('spatialUnit[n="0"]'); 

        spatialUnits.forEach(unit => {
            const identification = unit.querySelector('identification label').textContent;
            const parishProperty = [...unit.querySelectorAll('property')].find(prop => 
                prop.querySelector('label').getAttribute('uuid') === '4f275911-93ef-44af-b678-86b6e04c5242'
            );
            const parishValue = parishProperty ? parishProperty.querySelector('value').textContent : 'No Parish Data';

            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const parishCell = document.createElement('td');
            
            nameCell.textContent = identification;
            parishCell.textContent = parishValue;

            row.appendChild(nameCell);
            row.appendChild(parishCell);
            document.getElementById('data-table-body').appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error loading XML file:', error);
    });
}

