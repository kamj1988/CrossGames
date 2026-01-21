// Demo script - przykładowe dane bez Google Sheets
// Ten plik obsługuje filtrowanie dla strony demo.html

const demoData = [
    { name: 'Jan Kowalski', gym: 'CrossFit Warsaw', division: 'RX', gender: 'Mężczyzna', workout: 'WOD1', score: '150 reps', date: '17.01.2026', rank: 1 },
    { name: 'Piotr Wiśniewski', gym: 'CrossFit Gdańsk', division: 'RX', gender: 'Mężczyzna', workout: 'WOD1', score: '145 reps', date: '17.01.2026', rank: 2 },
    { name: 'Tomasz Szymański', gym: 'CrossFit Łódź', division: 'RX', gender: 'Mężczyzna', workout: 'WOD1', score: '138 reps', date: '17.01.2026', rank: 3 },
    { name: 'Marek Lewandowski', gym: 'CrossFit Poznań', division: 'RX', gender: 'Mężczyzna', workout: 'WOD1', score: '132 reps', date: '17.01.2026', rank: 4 },
    { name: 'Anna Nowak', gym: 'CrossFit Kraków', division: 'RX', gender: 'Kobieta', workout: 'WOD1', score: '125 reps', date: '17.01.2026', rank: 5 },
    { name: 'Katarzyna Zielińska', gym: 'CrossFit Warszawa', division: 'RX', gender: 'Kobieta', workout: 'WOD1', score: '118 reps', date: '17.01.2026', rank: 6 },
    { name: 'Magdalena Woźniak', gym: 'CrossFit Katowice', division: 'RX', gender: 'Kobieta', workout: 'WOD1', score: '112 reps', date: '17.01.2026', rank: 7 },
    { name: 'Krzysztof Kozłowski', gym: 'CrossFit Gdynia', division: 'Scaled', gender: 'Mężczyzna', workout: 'WOD1', score: '105 reps', date: '17.01.2026', rank: 8 },
    { name: 'Ewa Kamińska', gym: 'CrossFit Wrocław', division: 'Scaled', gender: 'Kobieta', workout: 'WOD1', score: '95 reps', date: '17.01.2026', rank: 9 },
    { name: 'Joanna Jankowska', gym: 'CrossFit Szczecin', division: 'Scaled', gender: 'Kobieta', workout: 'WOD1', score: '88 reps', date: '17.01.2026', rank: 10 },
    { name: 'Michał Mazur', gym: 'CrossFit Bydgoszcz', division: 'RX', gender: 'Mężczyzna', workout: 'WOD2', score: '07:45', date: '18.01.2026', rank: 11 },
    { name: 'Andrzej Nowicki', gym: 'CrossFit Rzeszów', division: 'RX', gender: 'Mężczyzna', workout: 'WOD2', score: '08:15', date: '18.01.2026', rank: 12 },
    { name: 'Aleksandra Król', gym: 'CrossFit Lublin', division: 'RX', gender: 'Kobieta', workout: 'WOD2', score: '09:30', date: '18.01.2026', rank: 13 },
    { name: 'Marta Wójcik', gym: 'CrossFit Białystok', division: 'RX', gender: 'Kobieta', workout: 'WOD2', score: '10:12', date: '18.01.2026', rank: 14 },
    { name: 'Robert Kaczmarek', gym: 'CrossFit Gliwice', division: 'Scaled', gender: 'Mężczyzna', workout: 'WOD2', score: '11:45', date: '18.01.2026', rank: 15 },
    { name: 'Agnieszka Piotrowska', gym: 'CrossFit Toruń', division: 'Scaled', gender: 'Kobieta', workout: 'WOD2', score: '13:20', date: '18.01.2026', rank: 16 },
    { name: 'Paweł Zając', gym: 'CrossFit Olsztyn', division: 'RX', gender: 'Mężczyzna', workout: 'WOD3', score: '180 kg', date: '19.01.2026', rank: 17 },
    { name: 'Kamil Dąbrowski', gym: 'CrossFit Kielce', division: 'RX', gender: 'Mężczyzna', workout: 'WOD3', score: '170 kg', date: '19.01.2026', rank: 18 },
    { name: 'Natalia Adamczyk', gym: 'CrossFit Opole', division: 'RX', gender: 'Kobieta', workout: 'WOD3', score: '110 kg', date: '19.01.2026', rank: 19 },
    { name: 'Karolina Sikora', gym: 'CrossFit Zielona Góra', division: 'RX', gender: 'Kobieta', workout: 'WOD3', score: '100 kg', date: '19.01.2026', rank: 20 }
];

let filteredData = [...demoData];

document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    updateStats();
});

function setupFilters() {
    document.getElementById('division-filter').addEventListener('change', applyFilters);
    document.getElementById('gender-filter').addEventListener('change', applyFilters);
    document.getElementById('workout-filter').addEventListener('change', applyFilters);
    document.getElementById('athlete-search').addEventListener('input', applyFilters);
}

function applyFilters() {
    const divisionFilter = document.getElementById('division-filter').value;
    const genderFilter = document.getElementById('gender-filter').value;
    const workoutFilter = document.getElementById('workout-filter').value;
    const searchQuery = document.getElementById('athlete-search').value.toLowerCase();
    
    filteredData = demoData.filter(result => {
        if (divisionFilter !== 'all' && result.division !== divisionFilter) return false;
        if (genderFilter !== 'all' && result.gender !== genderFilter) return false;
        if (workoutFilter !== 'all' && result.workout !== workoutFilter) return false;
        if (searchQuery && !result.name.toLowerCase().includes(searchQuery)) return false;
        return true;
    });
    
    renderTable();
    updateStats();
}

function renderTable() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    
    if (filteredData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="no-data">
                    <h3>Brak wyników</h3>
                    <p>Nie znaleziono wyników spełniających kryteria.</p>
                </td>
            </tr>
        `;
        return;
    }
    
    filteredData.forEach((result, index) => {
        const rank = index + 1;
        const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : 'regular';
        const divisionClass = result.division.toLowerCase();
        const genderIcon = result.gender === 'Mężczyzna' ? '♂️' : '♀️';
        
        tbody.innerHTML += `
            <tr>
                <td class="rank-col"><span class="rank-badge ${rankClass}">${rank}</span></td>
                <td class="name-col">${result.name}</td>
                <td class="gym-col">${result.gym}</td>
                <td class="division-col"><span class="division-badge ${divisionClass}">${result.division}</span></td>
                <td class="gender-col"><span class="gender-icon">${genderIcon}</span> ${result.gender}</td>
                <td class="workout-col">${result.workout}</td>
                <td class="score-col">${result.score}</td>
                <td class="date-col">${result.date}</td>
            </tr>
        `;
    });
}

function updateStats() {
    const uniqueAthletes = new Set(filteredData.map(r => r.name)).size;
    document.getElementById('total-athletes').textContent = uniqueAthletes;
    document.getElementById('total-results').textContent = filteredData.length;
}
