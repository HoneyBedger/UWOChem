import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const newQuestions = [
  {
    "id": 0,
    "examId": "1302_Midterm2014",
    "idInExam": 1,
    "type": "numeric",
    "question": function () {

      let v1String = (Math.random()*(9-3) + 3).toPrecision(3);
      let p1String = Number.parseFloat((Math.random()*(1500-1100) + 1100).toPrecision(2)).toFixed(0);
      let p2String = (Math.random()*(950-750) + 750).toPrecision(3);

      let v1 = Number.parseFloat(v1String);
      let p1 = Number.parseFloat(p1String);
      let p2 = Number.parseFloat(p2String);

      let v2 = p1*v1/p2;
      let n = p2*v2/8.314/(273.15+25);
      let answer = n*32.00;
      let ansLabel = "m";

      var description = React.createElement('div', null,
        React.createElement('p', null, 'A  ', v1String, ' L cylinder contains only O',
        React.createElement('sub', null, '2'), '(g) at ', p1String,
        ' kPa and 25 \xB0C. Gas was then released from the cylinder until the pressure of the cylinder dropped to ',
        p2String, ' kPa at 25 \xB0C. What mass of O',
        React.createElement('sub', null, '2'), ' was released from the cylinder?')
      );

      var feedback = (
        <React.Fragment></React.Fragment>
      );

      return {description, answer, feedback, ansLabel};

    }()
  },
  {
      "id": 1,
      "examId": "1302_Midterm2014",
      "idInExam": 2,
      "type": "string",
      "question": function () {
        let xValues = [3, 4, 6];
        let xIdx = Math.floor(Math.random()*3);
        let x = xValues[xIdx];
        let mMString = x*(12.01*2 + 1.008*2).toPrecision(3);
        let mM = Number.parseFloat(mMString);
        let n = 0.238*1.5/0.08206/(273.15+400);
        let nString = n.toPrecision(3);
        let m = n*mM;
        let mString = Number.parseFloat(m.toPrecision(2)).toPrecision(4);
        let answer = x.toString();
        const ansLabel = "x";

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
        return {description, answer, ansLabel, feedback};
      }()
  },
  {
    "id": 2,
    "examId": "1302_Midterm2014",
    "idInExam": 3,
    "type": "numeric",
    "question": function () {
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
      const ansLabel = "d";

      var description = (
        <React.Fragment>
          <p>Six moles of He are mixed with four moles of N<sub>2</sub>.&nbsp;
            What is the density, in <span className="nobr">g L<sup>-1</sup></span>,&nbsp;
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

      return {description, answer, ansLabel, feedback};
    }()
  },
  {
    "id": 3,
    "examId": "1302_Midterm2014",
    "idInExam": 4,
    "type": "numeric",
    "question": function () {
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
      let ansLabel = "m";

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
        & = & \\frac{(101.3 \\text{ kPa})(${vString} \\text{ L})} \\\\
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

      return {description, answer, ansLabel, feedback};
    }()
  },
  {
    "id": 4,
    "examId": "1302_Midterm2014",
    "idInExam": 5,
    "type": "numeric",
    "question": function () {
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
      let ansLabel = "m";

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
        & = & \\frac{(${pString} \\text{ kPa})(${vString} \\text{ L})}
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
      return {description, answer, ansLabel, feedback};
    }()
  },
  {
    "id": 5,
    "examId": "1302_Midterm2014",
    "idInExam": 6,
    "type": "numeric",
    "question": function () {
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
      let ansLabel = "P";

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

      return {description, answer, ansLabel, feedback};
    }()
  }
];
