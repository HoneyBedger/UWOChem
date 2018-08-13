export const QUESTIONS = [
  {
    "id": 0,
    "examId": "1302_Midterm2014",
    "idInExam": 1,
    "type": "numeric",
    "question": ["{",

      "let v1String = (Math.random()*(9-3) + 3).toPrecision(3);",
      "let p1String = Number.parseFloat((Math.random()*(1500-1100) + 1100).toPrecision(2)).toFixed(0);",
      "let p2String = (Math.random()*(950-750) + 750).toPrecision(3);",

      "let v1 = Number.parseFloat(v1String);",
      "let p1 = Number.parseFloat(p1String);",
      "let p2 = Number.parseFloat(p2String);",

      "let v2 = p1*v1/p2;",
      "let n = p2*v2/8.314/(273.15+25);",
      "let answer = n*32.00;",

      "var description = React.createElement('div', null,",
        "React.createElement('p', null, 'A  ', v1String, ' L cylinder contains only O',",
        "React.createElement('sub', null, '2'), '(g) at ', p1String,",
        "' kPa and 25 \xB0C. Gas was then released from the cylinder until the pressure of the cylinder dropped to ',",
        "p2String, ' kPa at 25 \xB0C. What mass of O',",
        "React.createElement('sub', null, '2'), ' was released from the cylinder?')",
      ");",


      "return {description, answer};",

    "}"
    ]
  }
];
