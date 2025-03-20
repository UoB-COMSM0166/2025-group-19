class YourZodiacView {
    constructor(pageController) {
        this.pageController = pageController;
        this.updateScale();
        this.positionSetting();
        this.displayText();
        this.silhouettes = [ratSilhouette, oxSilhouette, tigerSilhouette, rabbitSilhouette, dragonSilhouette, snakeSilhouette,
            horseSilhouette, goatSilhouette, monkeySilhouette, roosterSilhouette, dogSilhouette, pigSilhouette];

        this.zodiac = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
        this.index = 0;
        this.interval = 8;
        this.x = 200;
        this.y = 200;

        this.lunarNewYearDates = this.getLunarNewYearDates();
    }

    update() {
        if (frameCount % this.interval === 0) {
            this.index = (this.index + 1) % this.silhouettes.length;
        }
    }

    display() {
        background('#6EB6FF');
        this.displayText();
        if (this.silhouettes.length > 0) {
            // Display silhouette on the left side
            image(this.silhouettes[this.index], this.x, this.y, 300, 300);

            // Display zodiac text next to the silhouette
            fill(0);
            textSize(32);
            textAlign(CENTER, CENTER);
            text(this.zodiac[this.index], this.x + 140, this.y + 350);

            // Display text (Year, Month, Day) on the right side
            fill(255);
            noStroke();
            textSize(26 * this.scaleFactor);
            textAlign(LEFT, TOP);

            text("Year: ", this.baseX + 20, this.baseY - 150);
            text("Month: ", this.baseX + 20, this.baseY - 100);
            text("Day: ", this.baseX + 20, this.baseY - 50);
        }
    }

    resizeWindow() {
        this.updateScale();
        this.positionSetting();
    }

    positionSetting() {
        this.baseY = windowHeight / 2;
        this.baseX = windowWidth / 2 + 150; // Move right side elements more to the right
    }

    displayText() {
        this.displayYear();
        this.displayMonth();
        this.displayDay();
    }

    displayYear() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(LEFT, TOP);
        text("Year: ", this.baseX + 20, this.baseY - 150);
    }

    displayMonth() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(LEFT, TOP);
        text("Month: ", this.baseX + 20, this.baseY - 100);
    }

    displayDay() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(LEFT, TOP);
        text("Day: ", this.baseX + 20, this.baseY - 50);
    }

    displayInstruction() {
        fill(255);
        noStroke();
        textSize(26 * this.scaleFactor);
        textAlign(CENTER, TOP);
        text("Enter your birthday!", windowWidth / 2, windowHeight - 80 * this.scaleFactor);
    }

    handleKeyPress() {
        if (key === ' ') {
            // Handle space key press
        } else if (key === 'Enter') {
            // Handle enter key press
        }
    }

    updateScale() {
        let availableHeight = windowHeight * 0.9;  // 5% padding
        this.scaleFactor = min(windowWidth / 1000, availableHeight / 600);
        this.scaledWidth = 1000 * this.scaleFactor;
        this.scaledHeight = 600 * this.scaleFactor;
        this.canvasX = (windowWidth - this.scaledWidth) / 2;
        this.canvasY = (windowHeight - this.scaledHeight) / 2;
    }


    getLunarNewYearDates(){
        return {
            1950: { month: 2, day: 17 },
            1951: { month: 2, day: 6 },
            1952: { month: 1, day: 27 },
            1953: { month: 2, day: 14 },
            1954: { month: 2, day: 3 },
            1955: { month: 1, day: 24 },
            1956: { month: 2, day: 12 },
            1957: { month: 1, day: 31 },
            1958: { month: 2, day: 18 },
            1959: { month: 2, day: 8 },
            1960: { month: 1, day: 28 },
            1961: { month: 2, day: 15 },
            1962: { month: 2, day: 5 },
            1963: { month: 1, day: 25 },
            1964: { month: 2, day: 13 },
            1965: { month: 2, day: 2 },
            1966: { month: 1, day: 21 },
            1967: { month: 2, day: 9 },
            1968: { month: 1, day: 30 },
            1969: { month: 2, day: 17 },
            1970: { month: 2, day: 6 },
            1971: { month: 1, day: 27 },
            1972: { month: 2, day: 15 },
            1973: { month: 2, day: 3 },
            1974: { month: 1, day: 23 },
            1975: { month: 2, day: 11 },
            1976: { month: 1, day: 31 },
            1977: { month: 2, day: 18 },
            1978: { month: 2, day: 7 },
            1979: { month: 1, day: 28 },
            1980: { month: 2, day: 16 },
            1981: { month: 2, day: 5 },
            1982: { month: 1, day: 25 },
            1983: { month: 2, day: 13 },
            1984: { month: 2, day: 2 },
            1985: { month: 2, day: 20 },
            1986: { month: 2, day: 9 },
            1987: { month: 1, day: 29 },
            1988: { month: 2, day: 17 },
            1989: { month: 2, day: 6 },
            1990: { month: 1, day: 27 },
            1991: { month: 2, day: 15 },
            1992: { month: 2, day: 4 },
            1993: { month: 1, day: 23 },
            1994: { month: 2, day: 10 },
            1995: { month: 1, day: 31 },
            1996: { month: 2, day: 19 },
            1997: { month: 2, day: 7 },
            1998: { month: 1, day: 28 },
            1999: { month: 2, day: 16 },
            2000: { month: 2, day: 5 },
            2001: { month: 1, day: 24 },
            2002: { month: 2, day: 12 },
            2003: { month: 2, day: 1 },
            2004: { month: 1, day: 22 },
            2005: { month: 2, day: 9 },
            2006: { month: 1, day: 29 },
            2007: { month: 2, day: 18 },
            2008: { month: 2, day: 7 },
            2009: { month: 1, day: 26 },
            2010: { month: 2, day: 14 },
            2011: { month: 2, day: 3 },
            2012: { month: 1, day: 23 },
            2013: { month: 2, day: 10 },
            2014: { month: 1, day: 31 },
            2015: { month: 2, day: 19 },
            2016: { month: 2, day: 8 },
            2017: { month: 1, day: 28 },
            2018: { month: 2, day: 16 },
            2019: { month: 2, day: 5 },
            2020: { month: 1, day: 25 },
            2021: { month: 2, day: 12 },
            2022: { month: 2, day: 1 },
            2023: { month: 1, day: 22 },
            2024: { month: 2, day: 10 },
            2025: { month: 1, day: 29 },
            2025: { month: 1, day: 29 },
            2026: { month: 2, day: 17 },
            2027: { month: 2, day: 6 },
            2028: { month: 1, day: 26 },
            2029: { month: 2, day: 13 },
            2030: { month: 2, day: 3 },
            2031: { month: 1, day: 23 },
            2032: { month: 2, day: 11 },
            2033: { month: 1, day: 31 },
            2034: { month: 2, day: 19 },
            2035: { month: 2, day: 8 },
            2036: { month: 1, day: 28 },
            2037: { month: 2, day: 15 },
            2038: { month: 2, day: 4 },
            2039: { month: 1, day: 24 },
            2040: { month: 2, day: 12 },
            2041: { month: 2, day: 1 },
            2042: { month: 1, day: 22 },
            2043: { month: 2, day: 10 },
            2044: { month: 1, day: 30 },
            2045: { month: 2, day: 17 },
        }
    }
}

