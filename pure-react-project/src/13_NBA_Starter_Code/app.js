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


const ulParent = document.createElement('ul');
document.querySelector('body').append(ulParent);
for (let game of warriorsGames){
  const {homeTeam, awayTeam} = game;
  const gameLi = document.createElement('li');
  
  const {team: hteam, points: hpoints} = homeTeam;
  const {team: ateam, points: apoints} = awayTeam;

  const warriors = (hteam.includes('Golden')) ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? 'win' : 'lose');

  ulParent.append(gameLi);


  const scoreLine = (apoints > hpoints) ? `<b>${apoints}</b>–${hpoints}` : `${apoints}–<b>${hpoints}</b>`;

  const teamNames = `${ateam} @ ${hteam}`;

  gameLi.innerHTML = `${teamNames} ${scoreLine}`

  console.log(awayTeam.team)
}