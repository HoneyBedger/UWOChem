import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const questions = [
  {
    "_id": 401,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 1,
    "type": "numeric",
    "questionBody": function () {

      let v1String = (Math.random()*(9-3) + 3).toPrecision(3);
      let p1String = Number.parseFloat((Math.random()*(1500-1100) + 1100).toPrecision(2)).toFixed(0);
      let p2String = (Math.random()*(950-750) + 750).toPrecision(3);
      let v1 = Number.parseFloat(v1String);
      let p1 = Number.parseFloat(p1String);
      let p2 = Number.parseFloat(p2String);
      let molI = v1*p1/8.314/(273.15 + 25);
      let molIString = molI.toPrecision(3);
      let molF = v1*p2/8.314/(273.15 + 25);
      let molFString = molF.toPrecision(3);
      let mol = molI- molF;
      let molString = mol.toPrecision(3);
      let answer = mol*32.00;
      let ansString = answer.toPrecision(3);

      var description = React.createElement('div', null,
        React.createElement('p', null, 'A  ', v1String, ' L cylinder contains only O',
        React.createElement('sub', null, '2'), '(g) at ', p1String,
        ' kPa and 25 \xB0C. Gas was then released from the cylinder until the pressure of the cylinder dropped to ',
        p2String, ' kPa at 25 \xB0C. What mass of O',
        React.createElement('sub', null, '2'), ' was released from the cylinder?')
      );

      const eqMolI = `\\begin{eqnarray*}
        n_i & = & \\frac{P_iV}{RT} \\\\
        & = & \\frac{(${p1String} \\text{ kPa})(${v1String} \\text{ L})}
        {(8.314 \\text{ L kPa mol}^{-1}\\text{ K}^{-1})(273.15 + 25) \\text{ K}} \\\\
        & = & ${molIString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqMolF = `\\begin{eqnarray*}
        n_f & = & \\frac{P_fV}{RT} \\\\
        & = & \\frac{(${p2String} \\text{ kPa})(${v1String} \\text{ L})}
        {(8.314 \\text{ L kPa mol}^{-1}\\text{ K}^{-1})(273.15 + 25) \\text{ K}} \\\\
        & = & ${molFString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqMol = `\\begin{eqnarray*}
        n_\\text{released} & = & ${molIString} \\text{ mol} - ${molFString} \\text{ mol} \\\\
        & = & ${molString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqMass = `\\begin{eqnarray*}
        m_\\text{released} & = & (${molString} \\text{ mol})(32.00 \\text{ g mol}^{-1}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Use the ideal gas law to find the number of moles of O<sub>2</sub> present
            in the cylinder initially:</p>
            <MathJax.Node formula={eqMolI}/>
            <p>Similarly, find the number on moles of oxygen remaining after the pressure
            dropped:</p>
            <MathJax.Node formula={eqMolF}/>
            <p>The amount of O<sub>2</sub> released is just the difference between
            the initial and remaining moles:</p>
            <MathJax.Node formula={eqMol}/>
            <p>And the mass is</p>
            <MathJax.Node formula={eqMass}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>O<sub>2</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};

    }()
  },
  {
      "_id": 402,
      "courseId": "1302",
      "examName": "Midterm 2014",
      "chapterId": 1,
      "idInExam": 2,
      "type": "string",
      "questionBody": function () {
        let xValues = [3, 4, 6];
        let xIdx = Math.floor(Math.random()*xValues.length);
        let x = xValues[xIdx];
        let mMString = x*(12.01*2 + 1.008*2).toPrecision(3);
        let mM = Number.parseFloat(mMString);
        let n = 0.238*1.5/0.08206/(273.15+400);
        let nString = n.toPrecision(3);
        let m = n*mM;
        let mString = Number.parseFloat(m.toPrecision(2)).toPrecision(4);
        let answer = x.toString();
        let answerRegExp = RegExp('^\\s*' + answer + '\\s*$');

        var description = (
          <React.Fragment>
            <p>C<sub>2</sub>H<sub>2</sub> is converted into (C<sub>2</sub>H<sub>2</sub>)<sub>x</sub>.&nbsp;
              At <span className="nobr">400 &#176;C</span>,&nbsp;
              <span className="nobr">{mString} g</span> of (C<sub>2</sub>H<sub>2</sub>)<sub>x</sub>&nbsp;
              generates a pressure of <span className="nobr">0.283 atm</span>&nbsp;
              in a bulb with a volume of <span className="nobr">1500 mL</span>.&nbsp;
              What is the value of x?</p>
          </React.Fragment>
        );

        const feedEqMol = `\\begin{eqnarray*}
          mol & = & \\frac{PV}{RT} \\\\
          & = & \\frac{(0.238 \\text{ atm})
          (1.5 \\text{ L})}{(0.08206 \\text{ L} \\text{ atm} \\text{ mol}^{-1}
          \\text{ K}^{-1})(273.15 \\text{ K} + 400 \\,^{\\circ}\\text{C})} \\\\
          & = & ${nString} \\text{ mol}
          \\end{eqnarray*}`;
        const feedEqMM = `MM = \\frac{m}{mol} = \\frac{${mString} \\text{ g}}
          {${nString} \\text{ mol}} = ${mMString} \\text{ g/mol}`;
        const feedEqX = `x = \\frac{${mMString} \\text{ g/mol}}{26.036 \\text{ g/mol}} =
          ${answer}`;

        var feedback = (
          <React.Fragment>
            <MathJax.Provider>
              <p>First, use the ideal gas law to find the number of moles of the&nbsp;
                compound in the bulb:</p>
              <MathJax.Node formula={feedEqMol}></MathJax.Node>
              <p>Then, given the moles and the mass, calculate the molar mass:</p>
              <MathJax.Node formula={feedEqMM}></MathJax.Node>
              <p>Since the molar mass of each C<sub>2</sub>H<sub>2</sub> unit is 26.036 g/mol,&nbsp;
              x is</p>
              <MathJax.Node formula={feedEqX}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
        );
        return {description,
          answer: {
            answer: answerRegExp,
            label: (<React.Fragment><i>x</i></React.Fragment>),
            units: ""
          }, feedback};
      }()
  },
  {
    "_id": 403,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 3,
    "type": "numeric",
    "questionBody": function () {
      let m = 6*4.00 + 4*28.02;
      let mString = m.toPrecision(3);
      let pString = (Math.random()*(5.00-1.00) + 1.00).toPrecision(3);
      let p = Number.parseFloat(pString);
      let tempString = (Math.random()*(50-20) + 20).toPrecision(2);
      let temp = Number.parseFloat(tempString);
      let v = (6+4)*0.08206*(273.15 + temp)/p;
      let vString = v.toPrecision(3);
      let answer = m/v;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Six moles of He are mixed with four moles of N<sub>2</sub>.&nbsp;
            What is the density, in <span className="nobr">g L<sup>&#8211;1</sup></span>,&nbsp;
            of this mixture at a pressure of <span className="nobr">{pString} atm</span>&nbsp;
            and a temperature of <span className="nobr">{tempString} &#176;C</span>?</p>
        </React.Fragment>
      );

      const feedEqMass = `\\begin{eqnarray*}
        m & = & mol_{\\text{He}}\\times{MM_{\\text{He}}} +
        mol_{\\text{N}_2}\\times{MM_{\\text{N}_2}} \\\\
        & = & (6 \\text{ mol})(4.00 \\text{ g/mol})
        + (4 \\text{ mol})(28.02 \\text{ g/mol}) \\\\
        & = & ${mString} \\text{ g},
        \\end{eqnarray*}`;
      const feedEqV = `\\begin{eqnarray*}
        V & = & \\frac{nRT}{P} \\\\
        & = & \\frac{(6 \\text{ mol} + 4 \\text{ mol})
        (0.08206 \\text{ L atm} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K} +
        ${tempString} \\,^{\\circ}\\text{C})}{${pString} \\text{ atm}} \\\\
        & = & ${vString} \\text{ L}
        \\end{eqnarray*}`;
      const feedEqD = `d = \\frac{m}{V} = \\frac{${mString} \\text{ g}}{${vString}
        \\text{ L}} = ${ansString} \\text{ g L}^{-1}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Recall that density is mass over volume. The mass of the mixture is&nbsp;
            the sum of the masses of its components,</p>
            <MathJax.Node formula={feedEqMass}></MathJax.Node>
            <p>and the volume can be found from the ideal gas law:</p>
            <MathJax.Node formula={feedEqV}></MathJax.Node>
            <p>So, the density is</p>
            <MathJax.Node formula={feedEqD}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>d</i></React.Fragment>),
          units: "g/L"
        }, feedback};
    }()
  },
  {
    "_id": 404,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 4,
    "type": "numeric",
    "questionBody": function () {
      let vString = (Math.random()*(5.0 - 1.0) + 1.0).toPrecision(2);
      let v = Number.parseFloat(vString);
      let tempString = (Math.random()*(29 - 21) + 21).toPrecision(2);
      let temp = Number.parseFloat(tempString);
      let molSO2 = 101.3*v/8.314/(273.15 + temp);
      let molSO2String = molSO2.toPrecision(2);
      let molCS2 = molSO2/2;
      let molCS2String = molCS2.toPrecision(2);
      let answer = molCS2*76.15;
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>What mass of pure CS<sub>2</sub> must be burned to produce&nbsp;
            <span className="nobr">{vString} L</span> of SO<sub>2</sub>(g) at&nbsp;
            <span className="nobr">{tempString} &#176;C</span> and&nbsp;
            <span className="nobr">101.3 kPa</span>?</p>
        </React.Fragment>
      );

      const feedEqMolSO2 = `\\begin{eqnarray*}
        mol & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(101.3 \\text{ kPa})(${vString} \\text{ L})}
        {(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K} +
        ${tempString} \\,^{\\circ}\\text{C})} \\\\
        & = & ${molSO2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMolCS2 = `\\begin{eqnarray*}
        mol \\text{ CS}_2 & = & \\frac{mol \\text{ SO}_2 \\times 1}{2} \\\\
        & = & ${molCS2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMass = `\\begin{eqnarray*}
        m & = & mol \\times MM \\\\
        & = & (${molCS2String} \\text{ mol})(76.15 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Consider combustion of CS<sub>2</sub></p>
            <p className="eqn">CS<sub>2</sub> + 3 O<sub>2</sub> &#8594; CO<sub>2</sub> + 2 SO<sub>2</sub></p>
            <p>First, use the ideal gas law to calculate how many moles of SO<sub>2</sub> need to be produced:</p>
            <MathJax.Node formula={feedEqMolSO2}></MathJax.Node>
            <p>Now you can use stoichiometry to determine the moles of CS<sub>2</sub>:</p>
            <MathJax.Node formula={feedEqMolCS2}></MathJax.Node>
            <p>Finally, find the mass of CS<sub>2</sub></p>
            <MathJax.Node formula={feedEqMass}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>CS<sub>2</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "_id": 405,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 5,
    "type": "numeric",
    "questionBody": function () {
      let vString = (Math.random()*(9.0 - 1.0) + 1.0).toPrecision(3);
      let v = Number.parseFloat(vString);
      let pString = (Math.random()*(95.0 - 70.0) + 70.0).toPrecision(3);
      let p = Number.parseFloat(pString);
      let pN2 = p - 12.3;
      let pN2String = pN2.toPrecision(3);
      let molN2 = pN2*v/8.314/(273.15 + 50);
      let molN2String = molN2.toPrecision(3);
      let answer = molN2*28.02;
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>A sample of nitrogen gas was collected over water. A total of&nbsp;
            <span className="nobr">{vString} L</span> of gas was collected at a&nbsp;
            total pressure of <span className="nobr">{pString} kPa</span> and a&nbsp;
            temperature of <span className="nobr">50 &#176;C</span>.&nbsp;
            (Assume that both the gas and water are at the same temperature.)&nbsp;
            What mass of nitrogen gas was collected? (Vapor pressure of&nbsp;
            H<sub>2</sub>O at <span className="nobr">50 &#176;C</span> =&nbsp;
            <span className="nobr">12.3 kPa</span>)</p>
        </React.Fragment>
      );

      const feedEqPN2 = `\\begin{eqnarray*}
        P_{\\text{N}_2} & = & P_{\\text{total}} - P_{\\text{H}_2\\text{O}} \\\\
        & = & ${pString} \\text{ kPa} - 12.3 \\text{ kPa} \\\\
        & = & ${pN2String} \\text{ kPa}.
        \\end{eqnarray*}`;
      const feedEqMolN2 = `\\begin{eqnarray*}
        mol & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(${pN2String} \\text{ kPa})(${vString} \\text{ L})}
        {(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K} +
        50 \\,^{\\circ}\\text{C})} \\\\
        & = & ${molN2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMass = `\\begin{eqnarray*}
        m & = & mol \\times MM \\\\
        & = & (${molN2String} \\text{ mol})(28.02 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g} \\\\
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Since the collected sample is actually a mixture of nitrogen and water,&nbsp;
            the total pressure is the sum of the pressures of N<sub>2</sub> and H<sub>2</sub>O.&nbsp;
            So, the pressure of N<sub>2</sub> is</p>
            <MathJax.Node formula={feedEqPN2}></MathJax.Node>
            <p>Using the ideal gas law, we can find the number of moles of nitrogen:</p>
            <MathJax.Node formula={feedEqMolN2}></MathJax.Node>
            <p>Finally, multiply by molar mass to find the mass of nitrogen:</p>
            <MathJax.Node formula={feedEqMass}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );
      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "_id": 406,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 6,
    "type": "numeric",
    "questionBody": function () {
      let tempString = (Math.random()*(330 - 280) + 280).toPrecision(3);
      let temp = Number.parseFloat(tempString);
      let vSO2String = (Math.random()*(3.00 - 1.00) + 1.00).toPrecision(3);
      let vSO2 = Number.parseFloat(vSO2String);
      let pSO2String = (Math.random()*(9.50 - 5.50) + 5.50).toPrecision(3);
      let pSO2 = Number.parseFloat(pSO2String);
      let vF2String = (vSO2/2).toPrecision(3);
      let vF2 = Number.parseFloat(vF2String);
      let pString = pSO2String;
      let p = pSO2;
      let v = vSO2 + vF2;
      let vString = v.toPrecision(3);
      let pSO2New = pSO2*vSO2/v;
      let pSO2NewString = pSO2New.toPrecision(3);
      let answer = p*v/vF2;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>At {tempString}&nbsp;K, bulb A, with a volume of {vSO2String}&nbsp;L,&nbsp;
            contains SO<sub>2</sub>(g) at a pressure of {pSO2String}&nbsp;kPa.&nbsp;
            Bulb B, at the same temperature, has a volume of {vF2String}&nbsp;L&nbsp;
            and contains excess F<sub>2</sub>(g) at an unknown pressure.&nbsp;
            When the stopcock separating the two bulbs is opened, the following&nbsp;
            reaction occurs completely:</p>
          <p className="eqn">SO<sub>2</sub>(g) + F<sub>2</sub>(g) &#8594; SO<sub>2</sub>F<sub>2</sub>(g)</p>
          <p>The final pressure is found to be {pString}&nbsp;kPa at&nbsp;
            {tempString}&nbsp;K. What was the initial pressure of F<sub>2</sub>&nbsp;
            in bulb B?</p>
        </React.Fragment>
      );

      const feedEqVol = `\\begin{eqnarray*}
        V & = & V_\\text{A} + V_\\text{B} \\\\
        & = & ${vSO2String} \\text{ L} + ${vF2String} \\text{ L} \\\\
        & = & ${vString} \\text{ L}.
        \\end{eqnarray*}`;
      const feedEqPSO2 = `\\begin{eqnarray*}
        P_{\\text{SO}_2} & = & \\frac{(${pSO2String} \\text{ kPa})(${vSO2String} \\text{ L})}
        {${vString} \\text{ L}} \\\\
        & = & ${pSO2NewString} \\text{ kPa}.
        \\end{eqnarray*}`;
      const feedEqP = `\\begin{eqnarray*}
        ${pString} & = & 0 + (x - ${pSO2NewString}) + ${pSO2NewString} \\\\
        x & = & ${pString} \\text{ kPa},
        \\end{eqnarray*}`;
      const feedEqPF2 = `\\begin{eqnarray*}
        P_{\\text{F}_2} & = & \\frac{(${pString} \\text{ kPa})(${vString} \\text{ L})}
        {${vF2String} \\text{ L}} \\\\
        & = & ${ansString} \\text{ kPa}.
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Notice that the reaction proceeds at constant temperature and volume.
              Therefore, pressure-pressure stoichiometry can be used. The volume of
              the reaction mixture is</p>
            <MathJax.Node formula={feedEqVol}></MathJax.Node>
            <p>The pressure of SO<sub>2</sub> in this volume is</p>
            <MathJax.Node formula={feedEqPSO2}></MathJax.Node>
            <p>Now, let us denote the initial pressure of F<sub>2</sub> in the
              mixture as <i>x</i> and construct an ICF table for the reaction.</p>
            <table className="ice">
              <thead>
                <tr>
                  <th></th>
                  <th>SO<sub>2</sub>(g)</th>
                  <th>+</th>
                  <th>F<sub>2</sub>(g)</th>
                  <th>&#8594;</th>
                  <th>SO<sub>2</sub>F<sub>2</sub>(g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>initial</td>
                  <td>{pSO2NewString}</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>-{pSO2NewString}</td>
                  <td></td>
                  <td>-{pSO2NewString}</td>
                  <td></td>
                  <td>+{pSO2NewString}</td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>0</td>
                  <td></td>
                  <td><i>x</i>-{pSO2NewString}</td>
                  <td></td>
                  <td>{pSO2NewString}</td>
                </tr>
              </tbody>
            </table>
            <p>The sum of all the final pressures in the mixture must be equal to
              the total pressure of {pString}&nbsp;kPa,</p>
            <MathJax.Node formula={feedEqP}></MathJax.Node>
            <p>where <i>x</i> is the pressure of F<sub>2</sub> in the
              overall A + B volume. Therefore, the pressure in bulb B is</p>
            <MathJax.Node formula={feedEqPF2}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>P</i><sub>B</sub></React.Fragment>),
          units: "kPa"
        }, feedback};
    }()
  },
  {
    "_id": 407,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 7,
    "type": "MS",
    "questionBody": function () {
      var description = (
        <p>A sealed flask contains equal masses of N<sub>2</sub> and Cl<sub>2</sub> gases
        at 25&nbsp;&#176;C. Which of the following statements about this system is/are
        correct?</p>
      );

      var options = [
        {text: (<p>The density of the gas mixture in the flask is independent of the temperature.</p>),
        correct: true,
        id: 0},
        {text: (<p>The partial pressure of Cl<sub>2</sub> is greater than that of N<sub>2</sub>.</p>),
        correct: false,
        id: 1},
        {text: (<p>The average speed of the Cl<sub>2</sub> molecules is lower than that of the N<sub>2</sub> molecules.</p>),
        correct: true,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>Since the flask is rigid, its volume is constant. Also, since it is sealed, the
          mass of the gas inside cannot change. By definition, density is mass over volume, so,
          density is constant for this flask and independent of temperature.</p>
          <p>Even though the masses of Cl<sub>2</sub> and N<sub>2</sub> are equal, their moles
          are not. Cl<sub>2</sub> has a higher molar mass, so its number of moles is smaller, and
          so is its mole fraction. Partial pressure is proportional to the mole fraction. Since
          Cl<sub>2</sub> has a smaller mole fraction, its partial pressure is smaller than that
          of N<sub>2</sub>.</p>
          <p>The average speed of gas molecules is inversely proportional to the square root of its
          molar mass. Since Cl<sub>2</sub> is heavier, its molecules are slower on average.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 408,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 1,
    "idInExam": 8,
    "type": "MC",
    "questionBody": function () {
      var description = (
        <p>A sample of ideal gas sealed in a container of fixed volume is heated from
        20&nbsp;&#176;C to 100&nbsp;&#176;C. Which one of the following values remains constant?</p>
      );

      var options = [
        {text: (<p>The pressure of the gas.</p>),
        correct: false,
        id: 0},
        {text: (<p>The root-mean-square speed of the molecules.</p>),
        correct: false,
        id: 1},
        {text: (<p>The total kinetic energy of the gas.</p>),
        correct: false,
        id: 2},
        {text: (<p>The average force of a molecular collision with the container wall.</p>),
        correct: false,
        id: 3},
        {text: (<p>The density of the gas.</p>),
        correct: true,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>Since the flask is rigid, its volume is constant. Also, since it is sealed, the
          mass of the gas inside cannot change. By definition, density is mass over volume, so,
          density is constant for this flask and independent of temperature.</p>
          <p>When an ideal gas is heated, its molecules start moving faster on average and thus the
          kinetic energy of the gas increases. Having higher speeds, the molecules collide with the
          container wall with a greater force (on average) and therefore create a higher pressure.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 409,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 9,
    "type": "numeric",
    "questionBody": function () {
      let mCuString = (Math.random()*(80.0 - 40.0) + 40.0).toPrecision(3);
      let mCu = Number.parseFloat(mCuString);
      let mH2OString = (Math.random()*(90.0 - 50.0) + 50.0).toPrecision(3);
      let mH2O = Number.parseFloat(mH2OString);
      let mAgString = (Math.random()*(60.0 - 20.0) + 20.0).toPrecision(3);
      let mAg = Number.parseFloat(mAgString);
      let qCu = mCu*0.385;
      let qCuString = qCu.toPrecision(3);
      let qH2O = mH2O*4.184;
      let qH2OString = qH2O.toPrecision(3);
      let qAg = mAg*0.233;
      let qAgString = qAg.toPrecision(3);
      let answer = qCu + qH2O + qAg;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A {mCuString}&nbsp;g copper pot contains {mH2OString}&nbsp;g of
          water. Immersed in the water is a {mAgString}&nbsp;g silver spoon.
          What is the heat capacity of the pot, water, and spoon combined?</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th>Species</th>
                <th>Specific heat capacity (J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>H<sub>2</sub>O</td>
                <td>4.184</td>
              </tr>
              <tr>
                <td>Cu</td>
                <td>0.385</td>
              </tr>
              <tr>
                <td>Ag</td>
                <td>0.233</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      const eqCu = `\\begin{eqnarray*}
        q_\\text{Cu} & = & m_\\text{Cu} c_\\text{Cu}(1\\,^{\\circ}\\text{C}) \\\\
        & = & (${mCuString} \\text{ g})(0.385 \\text{ J mol}^{-1}\\,^{\\circ}\\text{C}^{-1})(1\\,^{\\circ}\\text{C}) \\\\
        & = & ${qCuString} \\text{ J}
        \\end{eqnarray*}`;
      const eqH2O = `\\begin{eqnarray*}
        q_{\\text{H}_2\\text{O}} & = & m_{\\text{H}_2\\text{O}} c_{\\text{H}_2\\text{O}}(1\\,^{\\circ}\\text{C}) \\\\
        & = & (${mH2OString} \\text{ g})(4.184 \\text{ J mol}^{-1}\\,^{\\circ}\\text{C}^{-1})(1\\,^{\\circ}\\text{C}) \\\\
        & = & ${qH2OString} \\text{ J}
        \\end{eqnarray*}`;
      const eqAg = `\\begin{eqnarray*}
        q_\\text{Ag} & = & m_\\text{Ag} c_\\text{Ag}(1\\,^{\\circ}\\text{C}) \\\\
        & = & (${mAgString} \\text{ g})(0.233 \\text{ J mol}^{-1}\\,^{\\circ}\\text{C}^{-1})(1\\,^{\\circ}\\text{C}) \\\\
        & = & ${qAgString} \\text{ J}
        \\end{eqnarray*}`;
      const eqAll = `\\begin{eqnarray*}
        q & = & ${qCuString} \\text{ J} + ${qH2OString} \\text{ J} + ${qAgString} \\text{ J} \\\\
        & = & ${ansString} \\text{ J}
        \\end{eqnarray*}`;
      const eqC = `C = \\frac{${ansString} \\text{ J}}{1\\,^{\\circ}\\text{C}}
        = ${Number.parseFloat(ansString)} \\text{ J}\\,^{\\circ}\\text{C}^{-1}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Heat capacity is the amount of heat (joules) required to heat an object
            (the pot, water, and spoon together in this case) by one degree celcius.</p>
            <p>Heating {mCuString}&nbsp;g of copper requires</p>
            <MathJax.Node formula={eqCu}/>
            <p>Similarly, heating {mH2OString}&nbsp;g of water and {mAgString}&nbsp;g of silver requires</p>
            <MathJax.Node formula={eqH2O}/>
            <MathJax.Node formula={eqAg}/>
            <p>Summing all the heats, we obtain</p>
            <MathJax.Node formula={eqAll}/>
            <p>Since this much heat is required per one degree, we divide by 1&nbsp;&#176;C to obtain</p>
            <MathJax.Node formula={eqC}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>C</i></React.Fragment>,
        units: "J/ \u00B0C"
      }, feedback};
    }()
  },
  {
    "_id": 410,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 10,
    "type": "numeric",
    "questionBody": function () {
      let mH2OString = (Math.random()*(190 - 110) + 110).toPrecision(3);
      let mH2O = Number.parseFloat(mH2OString);
      let tIString = (Math.random()*(50.0 - 35.0) + 35.0).toPrecision(3);
      let tI = Number.parseFloat(tIString);
      let tCalString = (Math.random()*(27.0 - 20.0) + 20.0).toPrecision(3);
      let tCal = Number.parseFloat(tCalString);
      let tFString = (Math.random()*(33.0 - 29.0) + 29.0).toPrecision(3);
      let tF = Number.parseFloat(tFString);
      let qH2O = mH2O*4.184*(tF - tI);
      let qH2OString = qH2O.toPrecision(3);
      let answer = -qH2O/(tF - tCal);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>{mH2OString}&nbsp;g of H<sub>2</sub>O at {tIString}&nbsp;&#176;C were
          added to a calorimeter at {tCalString}&nbsp;&#176;C. The final temperature
          of the calorimeter and the water was {tFString}&nbsp;&#176;C. What was the
          heat capacity, in J&nbsp;&#176;C<sup>&#8211;1</sup>, of the calorimeter?</p>
        <p>Specific heat capacity of H<sub>2</sub>O = 4.184 J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const eqQ = "q_\\text{cal} = -q_\\text{water}";
      const eqQH2O = `\\begin{eqnarray*}
        q_\\text{water} & = & m_\\text{water} c_\\text{water} \\Delta T_\\text{water} \\\\
        & = & (${mH2OString} \\text{ g})(4.184 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})
        (${tFString}\\,^{\\circ}\\text{C} - ${tIString}\\,^{\\circ}\\text{C}) \\\\
        & = & ${Number.parseFloat(qH2OString)} \\text{ J}
        \\end{eqnarray*}`;
      const eqQCal = `q_\\text{cal} = -(${Number.parseFloat(qH2OString)} \\text{ J}) = C_\\text{cal} \\Delta T_\\text{cal}`;
      const eqCCal = `\\begin{eqnarray*}
        -(${Number.parseFloat(qH2OString)} \\text{ J})
        & = & C_\\text{cal}(${tFString}\\,^{\\circ}\\text{C} - ${tCalString}\\,^{\\circ}\\text{C}) \\\\
        & = & ${Number.parseFloat(ansString)} \\text{ J}\\,^{\\circ}\\text{C}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>When the water is added to the calorimeter, the water starts losing
            heat and the calorimeter starts absorbing it.</p>
            <MathJax.Node formula={eqQ}/>
            <p>The heat lost by the water is</p>
            <MathJax.Node formula={eqQH2O}/>
            <p>Then the heat gained by the calorimeter is</p>
            <MathJax.Node formula={eqQCal}/>
            <p>Substitute the temperature change of the calorimeter and solve for <i>C</i><sub>cal</sub>:</p>
            <MathJax.Node formula={eqCCal}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>C</i><sub>cal</sub></React.Fragment>,
        units: "J/ \u00B0C"
      }, feedback};
    }()
  },
  {
    "_id": 411,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 11,
    "type": "numeric",
    "questionBody": function () {
      let tI = Math.floor(Math.random()*(41 - 15) + 15);
      let m = Math.floor(Math.random()*(3500 - 1500) + 1500);
      let q1 = m*2.43*(78.5 - tI);
      let q1String = q1.toPrecision(3);
      let q1kJ = q1/1000;
      let q1kJString = q1kJ.toPrecision(3);
      let q2 = m/46.068*42.5;
      let q2String = q2.toPrecision(3);
      let answer = q1kJ + q2;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Ethanol, C<sub>2</sub>H<sub>5</sub>OH, boils at 78.5&nbsp;&#176;C.
          Calculate the amount of heat energy, in kJ, required to completely
          convert {m}&nbsp;g of ethanol, initially at a temperature of {tI}&nbsp;&#176;C,
          to vapour at its boiling point.</p>
          <p>Specific heat capacity of ethanol = 2.43&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;K<sup>&#8211;1</sup></p>
          <p>Heat of vaporization of ethanol = 42.5&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const eqQ1 = `\\begin{eqnarray*}
        q_1 & = & mc\\Delta T \\\\
        & = & (${m} \\text{ g})(2.43 \\text{ J g}^{-1}\\text{ K}^{-1})(78.5\\,^{\\circ}\\text{C} - ${tI}\\,^{\\circ}\\text{C}) \\\\
        & = & ${Number.parseFloat(q1String)} \\text{ J} \\\\
        & = & ${Number.parseFloat(q1kJString)} \\text{ kJ}
        \\end{eqnarray*}`;
      const eqQ2 = `\\begin{eqnarray*}
        q_2 & = & n \\Delta H_\\text{vap} \\\\
        & = & \\left( \\frac{${m} \\text{ g}}{46.068 \\text{ g mol}^{-1}} \\right) (42.5 \\text{ kJ mol}^{-1}) \\\\
        & = & ${Number.parseFloat(q2String)} \\text{ kJ}
        \\end{eqnarray*}`;
      const eqQ = `\\begin{eqnarray*}
        q & = & ${Number.parseFloat(q1kJString)} \\text{ kJ}  + ${Number.parseFloat(q2String)} \\text{ kJ}  \\\\
        & = & ${Number.parseFloat(ansString)} \\text{ kJ}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Before the ethanol can be evaporated, it has to be heated to its
            boiling point. The amount of heat required for this process is</p>
            <MathJax.Node formula={eqQ1}/>
            <p>The amount of heat required for the vaporization itself is</p>
            <MathJax.Node formula={eqQ2}/>
            <p>Sum the two <i>q</i> values to obtain the total amount of energy required:</p>
            <MathJax.Node formula={eqQ}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>q</i></React.Fragment>,
        units: "kJ"
      }, feedback};
    }()
  },
  {
    "_id": 412,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 12,
    "type": "MC",
    "questionBody": function () {
      var description = (
        <React.Fragment>
          <p>What is the relationship between enthalpies <i>p</i>, <i>q</i>, <i>r</i>, and <i>s</i>?</p>
          <table className="data-table mb-5 ml-3">
            <tbody>
              <tr>
                <td className="text-left">S(s) + H<sub>2</sub>(g) &#8594; H<sub>2</sub>S(g)</td>
                <td className="text-left">&#916;<i>H</i> = <i>p</i></td>
              </tr>
              <tr>
                <td className="text-left">H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8594; H<sub>2</sub>O(l)</td>
                <td className="text-left">&#916;<i>H</i> = <i>q</i></td>
              </tr>
              <tr>
                <td className="text-left">S(s) + O<sub>2</sub>(g) &#8594; SO<sub>2</sub>(g)</td>
                <td className="text-left">&#916;<i>H</i> = <i>r</i></td>
              </tr>
              <tr>
                <td className="text-left">H<sub>2</sub>S(g) + 3/2 O<sub>2</sub>(g) &#8594; H<sub>2</sub>O(l) + SO<sub>2</sub>(g)</td>
                <td className="text-left">&#916;<i>H</i> = <i>s</i></td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      var options = [
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"p = q + r - s"}/></MathJax.Provider></p>),
        correct: true,
        id: 0},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"p = q - r - s"}/></MathJax.Provider></p>),
        correct: false,
        id: 1},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"p = q + r + s"}/></MathJax.Provider></p>),
        correct: false,
        id: 2},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"p = s - q - r"}/></MathJax.Provider></p>),
        correct: false,
        id: 3},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"p = s + r - q"}/></MathJax.Provider></p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>In order to obtain the target reaction (the first one on the list), do the following:</p>
          <ul>
            <li>take the second reaction as is (since we need 1 mole of H<sub>2</sub>(g) on the left-hand side);</li>
            <li>add the third reaction as is (since we need 1 mole of S(s) on the left-hand side);</li>
            <li>add the reverse of the fourth reaction (since we need 1 mole of H<sub>2</sub>S(g) on the right-hand side).</li>
          </ul>
          <p>The enthalpy of the target reaction is obtained by doing the same summation as above
          for the enthalpies of the reactions 2 to 4, so</p>
          <MathJax.Provider>
            <MathJax.Node formula={"p = q + r - s"}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 413,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 13,
    "type": "MC",
    "questionBody": function () {
      let incorrectEqs = [
        (<React.Fragment>Hg(s) + Cl<sub>2</sub>(g) &#8594; HgCl<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) &#8594; C<sub>2</sub>H<sub>6</sub>(g)</React.Fragment>),
        (<React.Fragment>Al(s) + 3 Cl(g) &#8594; AlCl<sub>3</sub>(s)</React.Fragment>),
        (<React.Fragment>C(s) + O<sub>2</sub>(g) &#8594; CO<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>Ca(g, at) + O(g, at) &#8594; CaO(s)</React.Fragment>),
        (<React.Fragment>C(g, at) + 4 Cl(g, at) &#8594; CCl<sub>4</sub>(g)</React.Fragment>),
        (<React.Fragment>H<sub>2</sub>(g) + 1/2 S<sub>2</sub>(g) &#8594; H<sub>2</sub>S(g)</React.Fragment>),
        (<React.Fragment>2 Cr(s) + 3 Cl<sub>2</sub>(g) &#8594; 2 CrCl<sub>3</sub>(s)</React.Fragment>),
        (<React.Fragment>H<sub>2</sub>(g) + Br<sub>2</sub>(g) &#8594; 2 HBr(g)</React.Fragment>)
      ];
      let correctEqs = [
        (<React.Fragment>H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8594; H<sub>2</sub>O(l)</React.Fragment>),
        (<React.Fragment>Mg(s) + 1/2 O<sub>2</sub>(g) &#8594; MgO(s)</React.Fragment>),
        (<React.Fragment>S(s) + 3/2 O<sub>2</sub>(g) &#8594; SO<sub>3</sub>(l)</React.Fragment>),
        (<React.Fragment>C(s, graphite) + 2 H<sub>2</sub>(g) &#8594; CH<sub>4</sub>(g)</React.Fragment>)
      ];
      let correctEqSelected = correctEqs[Math.floor(Math.random()*correctEqs.length)];
      let incorrectEqsSelected = [];
      while (incorrectEqsSelected.length < 4) {
        let idx = Math.floor(Math.random()*incorrectEqs.length);
        incorrectEqsSelected.push(incorrectEqs[idx]);
        incorrectEqs.splice(idx, 1);
      }

      var description = (
        <p>Which one of the following reactions has a &#916;<i>H</i>&#176;<sub>rxn</sub> equal
        to the standard enthalpy of formation of the product?</p>
      );

      var options = incorrectEqsSelected.map(eq => {
          return {
            text: (<p>{eq}</p>),
            correct: false,
            id: incorrectEqsSelected.indexOf(eq)
          };
        }).concat({
          text: (<p>{correctEqSelected}</p>),
          correct: true,
          id: 4
        });

      var feedback = (
        <React.Fragment>
          <p>An equation that corresponds to the standard enthalpy of formation
          of the product must:</p>
          <ul>
            <li>produce exactly 1 mole of product</li>
            <li>only have elements in their standard states on the left-hand side.</li>
          </ul>
          <p>Standard states are NOT atomic forms like Cl(g) or C(g), unless for
          noble gases. For hydrogen, oxygen, nitrogen, chlorine, fluorine, the
          standard state is gaseous diatomic molecules. Metals <i>except</i> mercury,
          should be solid (Hg is liquid). Carbon is C(graphite), sulfur is S(s),
          bromine is Br<sub>2</sub>(l), iodine is I<sub>2</sub>(s).</p>
          <p>The only reaction that satisfies these criteria is</p>
          <p className="eqn">{correctEqSelected}</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 414,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 14,
    "type": "numeric",
    "questionBody": function () {
      let mString = (Math.random()*(2000 - 500) + 500).toPrecision(2);
      let m = Number.parseFloat(mString);
      let mol = m/100.09;
      let molString = mol.toPrecision(3);
      let answer = mol*177;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>When strongly heated, CaCO<sub>3</sub> decomposes according to:</p>
          <p className="eqn">CaCO<sub>3</sub>(s) &#8594; CaO(s) + CO<sub>2</sub>(g)</p>
          <p>How much heat is required to completely decompose {m}&nbsp;g of CaCO<sub>3</sub>?</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th>Species</th>
                <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>CaCO<sub>3</sub>(s)</td>
                <td>&#8211;1207</td>
              </tr>
              <tr>
                <td>CaO(s)</td>
                <td>&#8211;636</td>
              </tr>
              <tr>
                <td>CO<sub>2</sub>(g)</td>
                <td>&#8211;394</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      const eqdH = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn}
        & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & \\left[ (-636) + (-394) \\right] - (-1207) \\\\
        & = & 177 \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;
      const eqMol = `n_{\\text{CaCO}_3} = \\frac{${m} \\text{ g}}{100.09 \\text{ g mol}^{-1}} = ${molString} \\text{ mol}`;
      const eqQ = `\\begin{eqnarray*}
        q & = & \\frac{n_{\\text{CaCO}_3}}{\\text{coef}_{\\text{CaCO}_3}} \\Delta H^{\\circ}_\\text{rxn} \\\\
        & = & \\frac{${molString} \\text{ mol}}{1}(177 \\text{ kJ mol}^{-1}) \\\\
        & = & ${Number.parseFloat(ansString)} \\text{ kJ}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, calculate the &#916;<i>H</i>&#176;<sub>rxn</sub> of the
            decomposition (per mole of CaCO<sub>3</sub>):</p>
            <MathJax.Node formula={eqdH}/>
            <p>The number of moles of CaCO<sub>3</sub> to be decomposed is</p>
            <MathJax.Node formula={eqMol}/>
            <p>So, the amount of heat required to decompose it:</p>
            <MathJax.Node formula={eqQ}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>q</i></React.Fragment>,
        units: "kJ"
      }, feedback};
    }()
  },
  {
    "_id": 415,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 15,
    "type": "numeric",
    "questionBody": function () {
      let pString = (Math.random()*(300 - 150) + 150).toPrecision(2);
      let p = Number.parseFloat(pString);
      let qString = (Math.random()*(1e7 - 1e4) + 1e4).toPrecision(1);
      let q = Number.parseFloat(qString);
      let mol = q/2222;
      let molString = mol.toPrecision(3);
      let answer = mol*8.314*298.15/p;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A pipeline contains C<sub>3</sub>H<sub>8</sub>(g) at a pressure of {p}&nbsp;kPa
          and a temperature of 25&nbsp;&#176;C. What volume of C<sub>3</sub>H<sub>8</sub> must
          be taken from the pipeline in order to provide {q}&nbsp;kJ of heat when
          the C<sub>3</sub>H<sub>8</sub> is burned in excess oxygen? (Assume the H<sub>2</sub>O
          produced from the combustion is in the liquid phase.)</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th>Species</th>
                <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>C<sub>3</sub>H<sub>8</sub>(g)</td>
                <td>&#8211;104</td>
              </tr>
              <tr>
                <td>H<sub>2</sub>O(l)</td>
                <td>&#8211;286</td>
              </tr>
              <tr>
                <td>CO<sub>2</sub>(g)</td>
                <td>&#8211;394</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      const eqdH = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn}
        & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & \\left[ (3)(-394) + (4)(-286) \\right] - \\left[ (-104) + 0 \\right] \\\\
        & = & -2222 \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;
      const eqMol = `\\begin{eqnarray*}
        n_{\\text{C}_3\\text{H}_8} & = & \\frac{-${q} \\text{ kJ}}{-2222 \\text{ kJ mol}^{-1}} \\\\
        & = & ${Number.parseFloat(molString)} \\text{ mol}
        \\end{eqnarray*}`;
      const eqV = `\\begin{eqnarray*}
        V_{\\text{C}_3\\text{H}_8} & = & \\frac{n_{\\text{C}_3\\text{H}_8} RT}{P} \\\\
        & = & \\frac{(${Number.parseFloat(molString)} \\text{ mol})(8.314 \\text{ L kPa mol}^{-1}\\text{ K}^{-1})(298.15 \\text{ K})}{${p} \\text{ kPa}} \\\\
        & = & ${Number.parseFloat(ansString)} \\text{ L}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, write down the combustion reaction for C<sub>3</sub>H<sub>8</sub>(g)
            and calculate its &#916;<i>H</i>&#176;<sub>rxn</sub>:</p>
            <p className="eqn">C<sub>3</sub>H<sub>8</sub>(g) + 5 O<sub>2</sub>(g) &#8594; 3 CO<sub>2</sub>(g) + 4 H<sub>2</sub>O(l)</p>
            <MathJax.Node formula={eqdH}/>
            <p>Now calculate how many moles of C<sub>3</sub>H<sub>8</sub>(g) must be burnt
            to produce {q}&nbsp;kJ. Note that the word &ldquo;produced&rdquo; implies that <i>q</i> is negative.</p>
            <MathJax.Node formula={eqMol}/>
            <p>Finally, use the ideal gas law to find the volume of C<sub>3</sub>H<sub>8</sub>(g):</p>
            <MathJax.Node formula={eqV}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>V</i><sub>C<sub>3</sub>H<sub>8</sub></sub></React.Fragment>,
        units: "L"
      }, feedback};
    }()
  },
  {
    "_id": 416,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 16,
    "type": "MC",
    "questionBody": function () {
      var description = (
        <p>Which one of the following statements best defines the term <i>bond enthalpy</i>?</p>
      );

      var options = [
        {text: (<p>The energy required to form one mole of a compound from gaseous atoms.</p>),
        correct: false,
        id: 0},
        {text: (<p>The energy required to break all the bonds in a molecule in the gas phase.</p>),
        correct: false,
        id: 1},
        {text: (<p>The energy required to break one specific bond between two atoms.</p>),
        correct: false,
        id: 2},
        {text: (<p>The energy required to break one mole of a specific type of bond between two atoms in the gas phase.</p>),
        correct: true,
        id: 3}
      ];

      var feedback = (
        <p>Bond enthalpy is the energy required to break one mole of a specific
        type of bond between two atoms in the gas phase. Note that it is always positive
        and has the units of kilojoules (or joules) per mole.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 417,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 17,
    "type": "numeric",
    "questionBody": function () {
      let answer = -(-152 - 611 - 2*122 + 347)/2;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>The &#916;<i>H</i> for the gaseous reaction shown below is &#8211;152&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>.
          Using bond energies, calculate the average bond energy for the C&#8211;Cl bond
          in kJ&nbsp;mol<sup>&#8211;1</sup>.</p>
          <p className="eqn"><img src="data:image/png;base64,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" alt="reaction"/></p>
          <p>Bond energies (kJ&nbsp;mol<sup>&#8211;1</sup>): C&#8211;H = 414&#160;&#160;&#160;C&#8211;C = 347&#160;&#160;&#160;C=C = 611</p>
          <p>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>): Cl(g, at) = 122</p>
        </React.Fragment>
      );

      const eqdH = "\\Delta H = \\sum{BE(\\text{reactants})} - \\sum{BE(\\text{products})}";
      const eqBE = `\\begin{eqnarray*}
        -152 \\text{ kJ mol}^{-1} & = & \\left[ (1)(611) + (2)(347) + (8)(414) + (2)(122) \\right]\\text{ kJ mol}^{-1} - \\\\
        & - & \\left[ (3)(347) + (8)(414) + (2) BE(\\text{C}-\\text{Cl}) \\right]\\text{ kJ mol}^{-1}\\\\
        BE(\\text{C}-\\text{Cl}) & = & ${ansString} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The enthalpy of a reaction can be expressed in terms of bond enthalpies:</p>
            <MathJax.Node formula={eqdH}/>
            <p>Note that the bond enthalpy of the Cl&#8211;Cl bond is the enthalpy of the following reaction:</p>
            <p className="eqn">Cl<sub>2</sub>(g) &#8594; 2 Cl(g, at),</p>
            <p>which is also equal to twice the enthalpy of formation of Cl(g, at).</p>
            <p>Substitute all the given bond energies into the above equation and
            solve for <i>BE</i>(C&#8211;Cl):</p>
            <MathJax.Node formula={eqBE}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>BE</i>(C&#8211;Cl)</React.Fragment>,
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 418,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 18,
    "type": "MC",
    "questionBody": function () {
      let incorrectEqs = [
        (<React.Fragment>C<sub>5</sub>H<sub>12</sub>(l) + 8 O<sub>2</sub>(g) &#8594; 5 CO<sub>2</sub> + 6 H<sub>2</sub>O(l)</React.Fragment>),
        (<React.Fragment>2 CO(g) + O<sub>2</sub>(g) &#8594; 2 CO<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>Ca<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq) &#8594; CaSO<sub>4</sub>(s)</React.Fragment>),
        (<React.Fragment>N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &#8594; 2 NH<sub>3</sub>(g)</React.Fragment>),
        (<React.Fragment>Br<sub>2</sub>(l) &#8594; Br<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>I<sub>2</sub>(g) &#8594; I<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>S(s) + 3/2 O<sub>2</sub>(g) &#8594; SO<sub>3</sub>(l)</React.Fragment>),
        (<React.Fragment>CO<sub>2</sub>(g) + 4 H<sub>2</sub>(g) &#8594; CH<sub>4</sub>(g) + 2 H<sub>2</sub>O(g)</React.Fragment>)
      ];
      let correctEqs = [
        (<React.Fragment>H<sub>2</sub>O(l) &#8594; H<sub>2</sub>O(g)</React.Fragment>),
        (<React.Fragment>C<sub>6</sub>H<sub>6</sub>(l) + 7.5 O<sub>2</sub>(g) &#8594; 6 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(g)</React.Fragment>),
        (<React.Fragment>2 Cu(NO<sub>3</sub>)<sub>2</sub> &#8594; 2 CuO(s) + 4 NO<sub>2</sub>(g) + O<sub>2</sub>(g)</React.Fragment>)
      ];

      var description = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Which one of the following will have <MathJax.Node inline formula={'\\Delta S_\\text{sys} > 0'}/>?</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      let correctEq = correctEqs[Math.floor(Math.random()*correctEqs.length)];
      let incorrectEqsSelected = [];
      while (incorrectEqsSelected.length < 4) {
        let idx = Math.floor(Math.random()*incorrectEqs.length);
        incorrectEqsSelected.push(incorrectEqs[idx]);
        incorrectEqs.splice(idx, 1);
      }

      var options = incorrectEqsSelected.map(eq => {
        return {text: (<p>{eq}</p>), correct: false, id: incorrectEqsSelected.indexOf(eq)};
      }).concat({text: (<p>{correctEq}</p>), correct: true, id: 4});

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
          <p>For reactions involving gases, one can estimate the sign of the entropy change
            by counting the number of moles of gases on the left-hand side and the right-hand side.
            Recall that entropies of gases are much higher than entropies of solids and liquids.
            Therefore, if there are more moles of gases on the right-hand side than on the
            left-hand side, <MathJax.Node inline formula={'\\Delta S_\\text{sys} > 0'}/>.</p>
            <p>Aggregate state changes also have easily predictable sign
            of <MathJax.Node inline formula={'\\Delta S_\\text{sys}'}/>:
            from solid to liquid and gas the entropy increases, and from gas to liquid to solid it decreases.</p>
            <p>Based on these rules, the reaction in which the entropy increases is</p>
            <p>{correctEq}</p>
        </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 419,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 19,
    "type": "numeric",
    "questionBody": function () {
      var description = (
        <React.Fragment>
          <p>At a phase change, &#916;<i>G</i>&#176; = 0. Estimate the boiling point,
          in K of methanol, CH<sub>3</sub>OH.</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th></th>
                <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
                <th><i>S</i>&#176; (J&nbsp;mol<sup>&#8211;1</sup>&nbsp;K<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>CH<sub>3</sub>OH(l)</td>
                <td>&#8211;238.6</td>
                <td>127.0</td>
              </tr>
              <tr>
                <td>CH<sub>3</sub>OH(g)</td>
                <td>&#8211;201.2</td>
                <td>238.0</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      let answer = 37.4/0.1110;
      let ansString = answer.toPrecision(3);

      const eqdHdS = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{vap}
        & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & (-201.2 \\text{ kJ mol}^{-1}) - (-238.6 \\text{ kJ mol}^{-1}) \\\\
        & = & 37.4 \\text{ kJ mol}^{-1} \\\\
        \\Delta S^{\\circ}_\\text{vap}
        & = & \\sum{S^{\\circ}(\\text{products})} - \\sum{S^{\\circ}(\\text{reactants})} \\\\
        & = & (238.0 \\text{ J mol}^{-1}\\text{ K}^{-1}) - (127.0 \\text{ J mol}^{-1}\\text{ K}^{-1}) \\\\
        & = & 111.0 \\text{ J mol}^{-1}\\text{ K}^{-1}
        \\end{eqnarray*}`;
      const eqT = `\\begin{eqnarray*}
        \\Delta G^{\\circ}_\\text{vap} & = & \\Delta H^{\\circ}_\\text{vap} - T_\\text{b}\\Delta S^{\\circ}_\\text{vap} \\\\
        0 \\text{ kJ mol}^{-1} & = & (37.4 \\text{ kJ mol}^{-1}) - T_\\text{b}(0.1110 \\text{ kJ mol}^{-1}\\text{ K}^{-1}) \\\\
        T_\\text{b} & = & ${ansString} \\text{ K}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The equation of the vaporization of ethanol is</p>
            <p className="eqn">CH<sub>3</sub>OH(l) &#8594; CH<sub>3</sub>OH(g)</p>
            <p>The enthalpy and entropy changes for this equation are:</p>
            <MathJax.Node formula={eqdHdS}/>
            <p>Write down the Gibbs equation for &#916;<i>G</i>&#176; and set it to zero.
            Solve for <i>T</i>. Remember to convert the entropy to kilojoules in order
            to be consistent with the units of enthalpy.</p>
            <MathJax.Node formula={eqT}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>T</i><sub>b</sub></React.Fragment>,
        units: "K"
      }, feedback};
    }()
  },
  {
    "_id": 420,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 2,
    "idInExam": 20,
    "type": "MC",
    "questionBody": function () {
      var description = (
        <p>Which of the following statements best explains why the melting of
        ice at room temperature is a spontaneous process?</p>
      );

      var options = [
        {text: (<p>&#916;<i>S</i><sub>surr</sub> &gt; 0 only</p>),
        correct: false,
        id: 0},
        {text: (<p>&#916;<i>S</i><sub>sys</sub> &gt; 0 only</p>),
        correct: true,
        id: 1},
        {text: (<p>&#916;<i>H</i><sub>surr</sub> &lt; 0 only</p>),
        correct: false,
        id: 2},
        {text: (<p>Both &#916;<i>S</i><sub>sys</sub> &gt; 0 and &#916;<i>H</i><sub>surr</sub> &lt; 0</p>),
        correct: false,
        id: 3},
        {text: (<p>Both &#916;<i>S</i><sub>surr</sub> &gt; 0 and &#916;<i>H</i><sub>surr</sub> &lt; 0</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <p>Melting of ice is an endothermic process, its &#916;<i>H</i><sub>sys</sub> is positive,
        which means that &#916;<i>H</i><sub>surr</sub>&nbsp;&lt;&nbsp;0. However, being an endothermic process
        does not explain spontaneity, in fact, it acts against it. The entropy of the system increases when
        ice is converted to liquid water since the system becomes more disordered. So,
        only &#916;<i>S</i><sub>sys</sub>&nbsp;&gt;&nbsp;0.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 421,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 3,
    "idInExam": 21,
    "type": "MC",
    "questionBody": function () {
      let eqs = [
        {rxn: (<React.Fragment>O<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8644; O<sub>3</sub>(g)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = \\frac{P_{\\text{O}_3}}{P_{\\text{O}_2}^{3/2}}"}/></MathJax.Provider>)},
        {rxn: (<React.Fragment>O<sub>3</sub>(g) &#8644; 3/2 O<sub>2</sub>(g)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = \\frac{P_{\\text{O}_2}^{3/2}}{P_{\\text{O}_3}}"}/></MathJax.Provider>)},
        {rxn: (<React.Fragment>SnO(s) + 1/2 O<sub>2</sub>(g) &#8644; SnO<sub>2</sub>(s)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = P_{\\text{O}_2}^{-1/2}"}/></MathJax.Provider>)},
        {rxn: (<React.Fragment>H<sub>2</sub>O<sub>2</sub>(l) &#8644; H<sub>2</sub>O(l) + 1/2 O<sub>2</sub>(g)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = P_{\\text{O}_2}^{1/2}"}/></MathJax.Provider>)},
        {rxn: (<React.Fragment>1/2 O<sub>2</sub>(g) &#8644; O(g)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = \\frac{P_\\text{O}}{P_{\\text{O}_2}^{1/2}}"}/></MathJax.Provider>)},
        {rxn: (<React.Fragment>2 O(g) &#8644; O<sub>2</sub>(g)</React.Fragment>),
        k: (<MathJax.Provider><MathJax.Node formula={"K = \\frac{P_\\text{O}^2}{P_{\\text{O}_2}}"}/></MathJax.Provider>)}
      ];
      let incorrectEqs = [
        (<React.Fragment>H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8644; H<sub>2</sub>O(l)</React.Fragment>),
        (<React.Fragment>H<sub>2</sub>O(l) &#8644; H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>1/2 N<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8644; NO(g)</React.Fragment>),
        (<React.Fragment>C(graphite) + 1/2 O<sub>2</sub>(g) &#8644; CO(g)</React.Fragment>),
        (<React.Fragment>2 KO<sub>2</sub>(s) &#8644; K<sub>2</sub>O<sub>2</sub> + O<sub>2</sub></React.Fragment>)
      ];
      let i = Math.floor(Math.random()*eqs.length);
      let correctEq = eqs[i].rxn;
      let k = eqs[i].k;
      eqs.splice(i, 1);
      let incorrectEqsSelected = [];
      while (incorrectEqsSelected.length < 2) {
        let i = Math.floor(Math.random()*eqs.length);
        incorrectEqsSelected.push(eqs[i].rxn);
        eqs.splice(i, 1);
      }
      while (incorrectEqsSelected.length < 4) {
        let i = Math.floor(Math.random()*incorrectEqs.length);
        incorrectEqsSelected.push(incorrectEqs[i]);
        incorrectEqs.splice(i, 1);
      }

      var options = incorrectEqsSelected.map(eq => {
        return {text: (<p>{eq}</p>), correct: false, id: incorrectEqsSelected.indexOf(eq)};
      }).concat({text: (<p>{correctEq}</p>), correct: true, id: 4});

      var description = (
        <React.Fragment>
          <p>The equilibrium constant expression below describes which one
            of the following equilibria?</p>
          {k}
        </React.Fragment>
      );

      var feedback = (
        <React.Fragment>
          <p>The constant expression must include only gases, the products must appear
          in the numerator and the reactants are in the denominator. The coefficients
          in the reaction become the powers in the <i>K</i> expression.</p>
          <p>The equilibrium that correcponds to the given <i>K</i> expression is</p>
          <p className="eqn">{correctEq}</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 422,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 3,
    "idInExam": 22,
    "type": "MC",
    "questionBody": function () {
      var description = (
        <React.Fragment>
          <p>Consider the following two equilibria:</p>
          <table className="ml-3">
            <tbody>
              <tr>
                <td><p>SO<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) &#8644; SO<sub>3</sub>(g)</p></td>
                <td style={{paddingLeft: "10px"}}><p><i>K</i><sub>1</sub></p></td>
              </tr>
              <tr>
                <td><p>2 SO<sub>3</sub>(g) &#8644; 2 SO<sub>2</sub>(g) + O<sub>2</sub>(g)</p></td>
                <td style={{paddingLeft: "10px"}}><p><i>K</i><sub>2</sub></p></td>
              </tr>
            </tbody>
          </table>
          <p>Which one of the following relationships is correct?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p><i>K</i><sub>2</sub> = <i>K</i><sub>1</sub><sup>2</sup></p>),
        correct: false,
        id: 0},
        {text: (<p><i>K</i><sub>2</sub><sup>2</sup> = <i>K</i><sub>1</sub></p>),
        correct: false,
        id: 1},
        {text: (<p><i>K</i><sub>2</sub> = <i>K</i><sub>1</sub><sup>&#8211;1</sup></p>),
        correct: false,
        id: 2},
        {text: (<p><i>K</i><sub>2</sub> = <i>K</i><sub>1</sub></p>),
        correct: false,
        id: 3},
        {text: (<p><i>K</i><sub>2</sub> = <i>K</i><sub>1</sub><sup>&#8211;2</sup></p>),
        correct: true,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>In order to obtain the target reaction (the second one), we need to reverse
          the first one and multiply it by 2. This translates into taking the inverse
          of <i>K</i><sub>1</sub> and raising it to the power of
          2: <i>K</i><sub>2</sub> = (1/<i>K</i><sub>1</sub>)<sup>2</sup> = <i>K</i><sub>1</sub><sup>&#8211;2</sup>.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 423,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 3,
    "idInExam": 23,
    "type": "numeric",
    "questionBody": function () {
      let k = Math.random()*(0.00620 - 0.00615) + 0.00615;
      let vString = (Number.parseFloat((Math.random()*(4.00 - 1.00) + 1.00).toPrecision(2))).toPrecision(3);
      let v = Number.parseFloat(vString);
      let cI2String = (Math.random()*(0.000950 - 0.000150) + 0.000150).toPrecision(3);
      let cI2 = Number.parseFloat(cI2String);
      let nHIString = ((Math.sqrt(Math.pow(cI2, 2)/k) + 2*cI2)*v).toPrecision(3);
      let nHI = Number.parseFloat(nHIString);
      let cHI = nHI/v;
      let cHIString = cHI.toPrecision(3);
      let cHINew = cHI - 2*cI2;
      let cHINewString = cHINew.toPrecision(3);
      let answer = Math.pow(cI2, 2)/Math.pow(cHINew, 2);
      let ansString = answer.toPrecision(3);


      var description = (
        <React.Fragment>
          <p>A sample containing {nHIString}&nbsp;moles of hdrogen iodide gas, HI(g),
          was placed in an empty {vString}&nbsp;L container and was allowed to
          decompose into H<sub>2</sub>(g) and I<sub>2</sub>(g) according to:</p>
          <p className="eqn">2 HI(g) &#8644; H<sub>2</sub>(g) + I<sub>2</sub>(g)</p>
          <p>The equilibrium concentration of I<sub>2</sub>(g) was found to be {cI2String}&nbsp;M.
          What is the value of the equilibrium constant for the decomposition reaction?</p>
        </React.Fragment>
      );

      const eqCHI = `\\begin{eqnarray*}
        c_\\text{HI} & = & \\frac{n_\\text{HI}}{V} \\\\
        & = & \\frac{${nHIString} \\text{ mol}}{${vString} \\text{ L}} \\\\
        & = & ${cHIString} \\text{ M}
        \\end{eqnarray*}`;
      const eqK = `\\begin{eqnarray*}
        K & = & \\frac{[\\text{H}_2] [\\text{I}_2]}{[\\text{HI}]^2} \\\\
        & = & \\frac{(${cI2String})(${cI2String})}{(${cHINewString})^2} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>In order to calulate the constant, we will need to use concentrations, so,
            calculate the initial concentration of HI(g):</p>
            <MathJax.Node formula={eqCHI}/>
            <p>Construct an ICE table. Start with the equilibrium concentration of I<sub>2</sub>(g),
            note that the equilibrium concentration of H<sub>2</sub>(g) must be the same, then
            calculate all the changes.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>2 HI(g)</th>
                  <th>&#8644;</th>
                  <th>H<sub>2</sub>(g)</th>
                  <th>+</th>
                  <th>I<sub>2</sub>(g)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cHIString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;2 &#215; {cI2String}</td>
                  <td></td>
                  <td>+{cI2String}</td>
                  <td></td>
                  <td>+{cI2String}</td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cHIString} &#8211; 2 &#215; {cI2String})</td>
                  <td></td>
                  <td>{cI2String}</td>
                  <td></td>
                  <td>{cI2String}</td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i>:</p>
            <MathJax.Node formula={eqK}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>K</i></React.Fragment>,
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 424,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 3,
    "idInExam": 24,
    "type": "bins",
    "questionBody": function () {
      var description = (
        <React.Fragment>
          <p>Given the equilibrium below,</p>
          <p className="eqn">4 NH<sub>3</sub>(g) + 3 O<sub>2</sub>(g) &#8644; 2 N<sub>2</sub>(g) + 6 H<sub>2</sub>O(g)</p>
          <p>in which direction will the equilibrium shift if the system is
          changed by:</p>
        </React.Fragment>
      );

      var items = [
        {text: (<React.Fragment>Increasing the pressure of the system by compression</React.Fragment>),
          binId: 1,
          id: 0},
        {text: (<React.Fragment>Adding O<sub>2</sub>(g)</React.Fragment>),
          binId: 0,
          id: 1},
        {text: (<React.Fragment>Adding H<sub>2</sub>O(g)</React.Fragment>),
          binId: 1,
          id: 2}
      ];

      var bins = [
        {text: (<React.Fragment>To the right &#8658;</React.Fragment>),
        id: 0,
        items: [1]},
        {text: (<React.Fragment>To the left &#8656;</React.Fragment>),
        id: 1,
        items: [0, 2]}
      ];

      var feedback = (
        <React.Fragment>
          <p>According to Le Chatelier&#8217;s principle, adding reactants
          shifts equilibrium to the right, and adding products shifts
          equilibrium to the left. The effect of changing the pressure
          is the shift towards the side with fewer moles of gases. Since the
          number of moles of gases increases
          in this reaction, the equilibrium is shifted to the left.</p>
        </React.Fragment>
      );

      return {description, answer: {items, bins}, feedback};
    }()
  },
  {
    "_id": 425,
    "courseId": "1302",
    "examName": "Midterm 2014",
    "chapterId": 3,
    "idInExam": 25,
    "type": "numeric",
    "questionBody": function () {
      let dHString = (Math.random()*(95.0 - 30.0) + 30.0).toPrecision(3);
      let dH = Number.parseFloat(dHString);
      let factorString = (Math.random()*(19.0 - 10.5) + 10.5).toPrecision(3);
      let factor = Number.parseFloat(factorString);
      let dHJ = dH*1000;
      let t2 = 1.0/(1.0/298.15 - Math.log(factor)*8.314/dHJ);
      let t2String = t2.toPrecision(3);
      let answer = t2 - 273.15;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A certain reaction under standard conditions has
          &#916;<i>H</i>&#176;<sub>rxn</sub> = {dHString}&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>.
          At what temperature, in &#176;C, will the <i>K</i> for this reaction be
          increased by a factor of {factorString}?</p>
      );

      const eqdH = `\\ln{\\frac{K_2}{K_1}} = \\frac{\\Delta H^{\\circ}}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)`;
      const eqT = `\\begin{eqnarray*}
        \\ln{(${factorString})}
        & = & \\frac{(${dHJ} \\text{ J mol}^{-1})}{(8.314 \\text{ J mol}^{-1}\\text{ K}^{-1})}
        \\left( \\frac{1}{298.15 \\text{ K}} - \\frac{1}{T_2} \\right) \\\\
        T_2 & = & ${t2String} \\text{ K} \\\\
        & = & ${ansString}\\,^{\\circ}\\text{C}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The dependence of an equilibrium constant on temperature is
            described by the following equation:</p>
            <MathJax.Node formula={eqdH}/>
            <p>Substitute all the data into the above equation. Remember to
            convert the enthalpy to joules and note that standard temperature is 298.15&nbsp;K
            or 25&nbsp;&#176;C.</p>
            <MathJax.Node formula={eqT}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>T</i></React.Fragment>,
        units: "\u00B0C"
      }, feedback};
    }()
  }
];
