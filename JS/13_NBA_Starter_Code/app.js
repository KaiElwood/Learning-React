const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for (let game of games){
    // const {homeTeam, awayTeam} = game;
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game)
    ulParent.append(gameLi);

    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'lose');
  }
  return ulParent;
}

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const {team: hteam, points: hpoints} = homeTeam;
  const {team: ateam, points: apoints} = awayTeam;
  const scoreLine = (apoints > hpoints) ? `<b>${apoints}</b>–${hpoints}` : `${apoints}–<b>${hpoints}</b>`;
  const teamNames = `${ateam} @ ${hteam}`;

  return `${teamNames} ${scoreLine}`;
}


const chart1 = makeChart(warriorsGames, 'Houston');
document.body.prepend(chart1);