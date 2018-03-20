import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Match } from '../models/match';
import { Team } from '../models/team';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teams: Team[] = [
      {
        id: 10,
        fullName: '1. FSV Mainz 05',
        shortName: 'Mainz',
        logo: 'assets/images/logos/mainz05.png',
        ranking: 16,
        points: 25,
        goalDifference: -17
      },
      {
        id: 11,
        fullName: 'FC Schalke 04',
        shortName: 'S04',
        logo: 'assets/images/logos/schalke04.png',
        ranking: 2,
        points: 49,
        goalDifference: 11
      },
      {
        id: 12,
        fullName: 'FC Bayern München',
        shortName: 'FCB',
        logo: 'assets/images/logos/fcb.png',
        ranking: 1,
        points: 66,
        goalDifference: 46
      },
      {
        id: 13,
        fullName: 'Hamburger SV',
        shortName: 'HSV',
        logo: 'assets/images/logos/hsv.jpg',
        ranking: 18,
        points: 18,
        goalDifference: -24
      },
      {
        id: 14,
        fullName: 'TSG 1899 Hoffenheim',
        shortName: 'TSG 1899',
        logo: 'assets/images/logos/hoffenheim.jpg',
        ranking: 7,
        points: 39,
        goalDifference: 5
      },
      {
        id: 15,
        fullName: 'VfL Wolfsburg',
        shortName: 'Wolfsburg',
        logo: 'assets/images/logos/wolfsburg.png',
        ranking: 15,
        points: 25,
        goalDifference: -9
      },
      {
        id: 16,
        fullName: 'Hertha BSC',
        shortName: 'Berlin',
        logo: 'assets/images/logos/hertha.png',
        ranking: 11,
        points: 35,
        goalDifference: 0
      },
      {
        id: 17,
        fullName: 'SC Freiburg',
        shortName: 'SCF',
        logo: 'assets/images/logos/scf.png',
        ranking: 14,
        points: 30,
        goalDifference: -18
      },
      {
        id: 18,
        fullName: 'Hannover 96',
        shortName: 'Hannover',
        logo: 'assets/images/logos/hannover.png',
        ranking: 13,
        points: 32,
        goalDifference: -6
      },
      {
        id: 19,
        fullName: 'FC Augsburg',
        shortName: 'Augsburg',
        logo: 'assets/images/logos/augsburg.png',
        ranking: 10,
        points: 35,
        goalDifference: 1
      },
      {
        id: 20,
        fullName: 'Bayer 04 Leverkusen',
        shortName: 'Bayer 04',
        logo: 'assets/images/logos/bayer04.png',
        ranking: 5,
        points: 44,
        goalDifference: 12
      },
      {
        id: 21,
        fullName: 'Borussia Mönchengladbach',
        shortName: 'Gladbach',
        logo: 'assets/images/logos/gladbach.png',
        ranking: 9,
        points: 36,
        goalDifference: -6
      },
      {
        id: 22,
        fullName: 'VfB Stuttgart',
        shortName: 'Stuttgart',
        logo: 'assets/images/logos/stuttgart.png',
        ranking: 8,
        points: 37,
        goalDifference: -5
      },
      {
        id: 23,
        fullName: 'RB Leipzig',
        shortName: 'Leipzig',
        logo: 'assets/images/logos/leipzig.png',
        ranking: 6,
        points: 43,
        goalDifference: 5
      },
      {
        id: 24,
        fullName: 'Borussia Dortmund',
        shortName: 'BVB',
        logo: 'assets/images/logos/bvb.png',
        ranking: 3,
        points: 48,
        goalDifference: 21
      },
      {
        id: 25,
        fullName: 'Eintracht Frankfurt',
        shortName: 'Frankfurt',
        logo: 'assets/images/logos/frankfurt.png',
        ranking: 4,
        points: 45,
        goalDifference: 8
      },
      {
        id: 26,
        fullName: 'SV Werder Bremen',
        shortName: 'Bremen',
        logo: 'assets/images/logos/bremen.png',
        ranking: 12,
        points: 33,
        goalDifference: -2
      },
      {
        id: 27,
        fullName: '1. FC Köln',
        shortName: 'Köln',
        logo: 'assets/images/logos/koeln.png',
        ranking: 17,
        points: 20,
        goalDifference: -22
      }
    ];

    const matches: Match[] = [
      {
        id: 1,
        teamHome: teams[0],
        teamGuest: teams[1],
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
        teamHome: teams[2],
        teamGuest: teams[3],
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
        teamHome: teams[4],
        teamGuest: teams[5],
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
        teamHome: teams[6],
        teamGuest: teams[7],
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
        teamHome: teams[8],
        teamGuest: teams[9],
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
        teamHome: teams[10],
        teamGuest: teams[11],
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
        teamHome: teams[12],
        teamGuest: teams[13],
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
        teamHome: teams[14],
        teamGuest: teams[15],
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
        teamHome: teams[16],
        teamGuest: teams[17],
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
