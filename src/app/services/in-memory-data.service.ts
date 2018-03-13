import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Match } from '../models/match';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const matches: Match[] = [
      {
        id: 1,
        teamHome: {
          id: 10,
          fullName: '1. FSV Mainz 05',
          shortName: 'Mainz',
          logo: 'assets/images/logos/mainz05.png'
        },
        teamGuest: {
          id: 11,
          fullName: 'FC Schalke 04',
          shortName: 'S04',
          logo: 'assets/images/logos/schalke04.png'
        },
        kickoff: 'Freitag, 09.03.2018 20:30'/*,
        result: {
          goalsHome: 0,
          goalsGuest: 1
        },
        bet: {
          goalsHome: 0,
          goalsGuest: 1
        }*/
      },
      {
        id: 2,
        teamHome: {
          id: 12,
          fullName: 'FC Bayern München',
          shortName: 'FCB',
          logo: 'assets/images/logos/fcb.png'
        },
        teamGuest: {
          id: 13,
          fullName: 'Hamburger SV',
          shortName: 'HSV',
          logo: 'assets/images/logos/hsv.jpg'
        },
        kickoff: 'Samstag, 10.03.2018 15:30',
        result: {
          goalsHome: 6,
          goalsGuest: 0
        },
        bet: {
          goalsHome: 4,
          goalsGuest: 0
        }
      },
      {
        id: 3,
        teamHome: {
          id: 14,
          fullName: 'TSG 1899 Hoffenheim',
          shortName: 'TSG 1899',
          logo: 'assets/images/logos/hoffenheim.jpg'
        },
        teamGuest: {
          id: 15,
          fullName: 'VfL Wolfsburg',
          shortName: 'Wolfsburg',
          logo: 'assets/images/logos/wolfsburg.png'
        },
        kickoff: 'Samstag, 10.03.2018 15:30',
        result: {
          goalsHome: 3,
          goalsGuest: 0
        },
        bet: {
          goalsHome: 2,
          goalsGuest: 1
        }
      },
      {
        id: 4,
        teamHome: {
          id: 16,
          fullName: 'Hertha BSC',
          shortName: 'Berlin',
          logo: 'assets/images/logos/hertha.png'
        },
        teamGuest: {
          id: 17,
          fullName: 'SC Freiburg',
          shortName: 'SCF',
          logo: 'assets/images/logos/scf.png'
        },
        kickoff: 'Samstag, 10.03.2018 15:30',
        result: {
          goalsHome: 0,
          goalsGuest: 0
        },
        bet: {
          goalsHome: 1,
          goalsGuest: 2
        }
      },
      {
        id: 5,
        teamHome: {
          id: 18,
          fullName: 'Hannover 96',
          shortName: 'Hannover',
          logo: 'assets/images/logos/hannover.png'
        },
        teamGuest: {
          id: 19,
          fullName: 'FC Augsburg',
          shortName: 'Augsburg',
          logo: 'assets/images/logos/augsburg.png'
        },
        kickoff: 'Samstag, 10.03.2018 15:30',
        result: {
          goalsHome: 1,
          goalsGuest: 3
        },
        bet: {
          goalsHome: 1,
          goalsGuest: 1
        }
      },
      {
        id: 6,
        teamHome: {
          id: 20,
          fullName: 'Bayer 04 Leverkusen',
          shortName: 'Bayer 04',
          logo: 'assets/images/logos/bayer04.png'
        },
        teamGuest: {
          id: 21,
          fullName: 'Borussia Mönchengladbach',
          shortName: 'Gladbach',
          logo: 'assets/images/logos/gladbach.png'
        },
        kickoff: 'Samstag, 10.03.2018 18:30',
        result: {
          goalsHome: 2,
          goalsGuest: 0
        },
        bet: {
          goalsHome: 1,
          goalsGuest: 0
        }
      },
      {
        id: 7,
        teamHome: {
          id: 22,
          fullName: 'VfB Stuttgart',
          shortName: 'Stuttgart',
          logo: 'assets/images/logos/stuttgart.png'
        },
        teamGuest: {
          id: 23,
          fullName: 'RB Leipzig',
          shortName: 'Leipzig',
          logo: 'assets/images/logos/leipzig.png'
        },
        kickoff: 'Sonnstag, 11.03.2018 15:30',
        result: {
          goalsHome: 0,
          goalsGuest: 0
        },
        bet: {
          goalsHome: 1,
          goalsGuest: 1
        }
      },
      {
        id: 8,
        teamHome: {
          id: 24,
          fullName: 'Borussia Dortmund',
          shortName: 'BVB',
          logo: 'assets/images/logos/bvb.png'
        },
        teamGuest: {
          id: 25,
          fullName: 'Eintracht Frankfurt',
          shortName: 'Frankfurt',
          logo: 'assets/images/logos/frankfurt.png'
        },
        kickoff: 'Sonnstag, 11.03.2018 18:00',
        result: {
          goalsHome: 3,
          goalsGuest: 2
        },
        bet: {
          goalsHome: 2,
          goalsGuest: 1
        }
      },
      {
        id: 9,
        teamHome: {
          id: 26,
          fullName: 'SV Werder Bremen',
          shortName: 'Bremen',
          logo: 'assets/images/logos/bremen.png'
        },
        teamGuest: {
          id: 27,
          fullName: '1. FC Köln',
          shortName: 'Köln',
          logo: 'assets/images/logos/koeln.png'
        },
        kickoff: 'Montag, 12.03.2018 20:30',
        result: {
          goalsHome: 3,
          goalsGuest: 1
        },
        bet: {
          goalsHome: 2,
          goalsGuest: 1
        }
      }
    ];

    return { matches };
  }
}
