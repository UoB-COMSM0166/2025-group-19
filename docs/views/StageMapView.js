class StageMapView {
  constructor(pageController) {
    this.pageController = pageController;
    this.title = "Enter Your Birthday to Reveal Your Zodiac Sign!";
    this.yearInput = 1984;
    this.monthInput = 1;
    this.dayInput = 1;
    this.zodiacSigns = [
      "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
      "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];
    this.selectedIndex = 0;
    this.currentFocus = "year"; // year, month, day, zodiac, back
    this.images = {};
    this.loadImages();
    this.keyPressInterval = null;
    this.lunarNewYearDates = {
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
    };
  }

  loadImages() {
    for (let i = 0; i < this.zodiacSigns.length; i++) {
      this.images[this.zodiacSigns[i]] = loadImage(`assets/images/characters/${this.zodiacSigns[i]}.png`);
    }
  }

  update() {}

  calculateZodiac() {
    let year = this.yearInput;
    let newYear = this.lunarNewYearDates[year];

    if (newYear && (this.monthInput < newYear.month || (this.monthInput === newYear.month && this.dayInput < newYear.day))) {
      year -= 1;
    }

    this.selectedIndex = (year - 4) % 12;
  }

  display() {
    background(0);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(this.title, width / 2, height / 6.5);

    textSize(30);
    fill(200);
    text("Use Arrow Keys to adjust Year, Month, and Day", width / 2, height / 4.4);
    text("Press Enter to proceed", width / 2, height / 3.8);

    textSize(40);
    fill(this.currentFocus === "year" ? 255 : 100);
    text("<", width / 4, height / 3);
    text(">", (3 * width) / 4, height / 3);
    text(`Year: ${this.yearInput}`, width / 2, height / 3);

    fill(this.currentFocus === "month" ? 255 : 100);
    text("<", width / 4, height / 2.6);
    text(">", (3 * width) / 4, height / 2.6);
    text(`Month: ${this.monthInput}`, width / 2, height / 2.6);

    fill(this.currentFocus === "day" ? 255 : 100);
    text("<", width / 4, height / 2.2);
    text(">", (3 * width) / 4, height / 2.2);
    text(`Day: ${this.dayInput}`, width / 2, height / 2.2);

    let isZodiacActive = this.currentFocus === "zodiac";
    tint(255, isZodiacActive ? 255 : 100);
    image(this.images[this.zodiacSigns[this.selectedIndex]], width / 2 - 125, height / 2.1
      , 250, 250);
    noTint();

    fill(isZodiacActive ? 255 : 100);
    textSize(40);
    text("<", width / 4, height / 1.6);
    text(">", (3 * width) / 4, height / 1.6);
    text(this.zodiacSigns[this.selectedIndex], width / 2, height / 1.25

    );

    let isBackActive = this.currentFocus === "back";
    fill(isBackActive ? 200 : 100, 0, 0);
    rect(width / 2 - 100, height * 0.88, 200, 50, 10);
    fill(255);
    textSize(30);
    text("Back", width / 2, height * 0.88 + 20);
  }

  handleKeyPress(key) {
    if (this.keyPressInterval) return;

    const getMaxDays = (year, month) => {
      const daysInMonth = {
        1: 31, 2: isLeapYear(year) ? 29 : 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
      };
      return daysInMonth[month];
    };

    // is Leap Year?
    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const adjustValue = (change) => {
      if (this.currentFocus === "year") {
        this.yearInput = Math.min(2045, Math.max(1950, this.yearInput + change));
        this.dayInput = Math.min(getMaxDays(this.yearInput, this.monthInput), this.dayInput);
      } else if (this.currentFocus === "month") {
        this.monthInput = Math.min(12, Math.max(1, this.monthInput + change));
        this.dayInput = Math.min(getMaxDays(this.yearInput, this.monthInput), this.dayInput);
      } else if (this.currentFocus === "day") {
        let maxDays = getMaxDays(this.yearInput, this.monthInput);
        this.dayInput = Math.min(maxDays, Math.max(1, this.dayInput + change));
      } else if (this.currentFocus === "zodiac") {
        this.selectedIndex = (this.selectedIndex + change + this.zodiacSigns.length) % this.zodiacSigns.length;
      }
    };

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      let change = key === 'ArrowLeft' ? -1 : 1;
      adjustValue(change);
      this.keyPressInterval = setInterval(() => {
        adjustValue(change);
      }, 100);
    } else if (key === 'Enter') {
      if (this.currentFocus === "year") {
        this.currentFocus = "month";
      } else if (this.currentFocus === "month") {
        this.currentFocus = "day";
      } else if (this.currentFocus === "day") {
        this.calculateZodiac();
        this.currentFocus = "zodiac";
      } else if (this.currentFocus === "zodiac") {
        const selectedStage = this.zodiacSigns[this.selectedIndex];
        this.pageController.setStageName(selectedStage);
        this.pageController.switchToMode();
      } else if (this.currentFocus === "back") {
        this.pageController.switchToWelcome();
      }
    } else if (key === 'ArrowUp') {
      if (this.currentFocus === "back") this.currentFocus = "zodiac";
      else if (this.currentFocus === "zodiac") this.currentFocus = "day";
      else if (this.currentFocus === "day") this.currentFocus = "month";
      else if (this.currentFocus === "month") this.currentFocus = "year";
    } else if (key === 'ArrowDown') {
      if (this.currentFocus === "zodiac") this.currentFocus = "back";
    }
  }

  handleKeyReleased(key) {
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      clearInterval(this.keyPressInterval);
      this.keyPressInterval = null;
    }
  }
}
