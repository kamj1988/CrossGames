# CrossFit Leaderboard

Strona internetowa do prezentowania wyników z zawodów CrossFit z integracją Google Sheets jako bazy danych.

## ⚡ Szybki Start

1. Otwórz [Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSdr1AZE7yPPkV16v1TgLn6XvM6xJ-ke-eYs60MtQRkuFNcoGA/viewform) i dodaj swoje wyniki
2. Otwórz `index.html` w przeglądarce
3. Wybierz trening z listy rozwijanej
4. Zobacz swoje wyniki!

## 🎯 Funkcje

- Prezentacja wyników z Google Sheets (bez potrzeby API key)
- Dodawanie wyników przez Google Forms
- Filtrowanie wyników po WOD-ach
- Responsywny design
- Ciemny, minimalistyczny interfejs

## 🛠 Technologie

- HTML5, CSS3, JavaScript
- Google Sheets (eksport CSV)
- Google Forms
- PapaParse (parsowanie CSV)
- GitHub Pages

## 📋 Konfiguracja

### Google Sheets
1. Upublicznij swój arkusz: Plik → Udostępnij → Opublikuj w sieci → Opublikuj jako CSV
2. Skopiuj link CSV

### Edycja index.html
Otwórz `index.html` i zmień link CSV w linii z `sheetUrl`:

```javascript
const sheetUrl = 'TWÓJ_LINK_CSV';
```

### Google Forms
Link do formularza znajduje się w `index.html` w sekcji "Dodaj swój wynik"

## 📊 Struktura danych Google Sheets

Arkusz musi zawierać kolumny:
- **Imie** - imię zawodnika
- **Wybierz WOD** - nazwa treningu
- **Wynik** - wynik liczbowy

## 🎨 Struktura projektu

```
CrossGames/
├── index.html          # Strona główna (wszystko w jednym pliku)
├── demo.html          # Demo z przykładowymi danymi
├── demo.js            # Dane demo
└── README.md          # Ten plik
```

## 📱 Demo

Zobacz działającą wersję demo: [demo.html](./demo.html)

## 🚀 Publikacja na GitHub Pages

1. Skopiuj pliki do repozytorium GitHub
2. Przejdź do Settings → Pages
3. Wybierz branch: main, folder: / (root)
4. Zapisz i odśwież - link będzie gotowy za chwilę

Twoja strona będzie dostępna pod: `https://twoja-nazwa.github.io/CrossGames`

## ❓ FAQ

**Q: Czy potrzebuję API key od Google?**  
A: Nie! Używamy publicznego eksportu CSV.

**Q: Czy muszę mieć serwer?**  
A: Nie, strona działa na GitHub Pages (darmowy hosting).

**Q: Jak zaktualizować wyniki?**  
A: Wyniki aktualizują się automatycznie po odświeżeniu strony.

## 📄 Licencja

Projekt do użytku osobistego.
