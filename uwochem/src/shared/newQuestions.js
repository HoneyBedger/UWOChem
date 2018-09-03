import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const newQuestions = [
  {
    "_id": 0,
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

      let v2 = p1*v1/p2;
      let n = p2*v2/8.314/(273.15+25);
      let answer = n*32.00;

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

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i></React.Fragment>),
          units: "g"
        }, feedback};

    }()
  },
  {
      "_id": 1,
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
    "_id": 2,
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
    "_id": 3,
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
    "_id": 4,
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
    "_id": 5,
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

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    "_id": 10,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 1,
    "type": "numeric",
    "questionBody": function () {
      let vString = (Math.random()*(30.0 - 20.0) + 20.0).toPrecision(3);
      let v = Number.parseFloat(vString);
      let molString = (Math.random()*(9.00 - 3.00) + 3.00).toPrecision(3);
      let mol = Number.parseFloat(molString);
      let pString = (Math.random()*(2.00 - 1.00) + 1.00).toPrecision(3);
      let p = Number.parseFloat(pString);
      let mol2 = p*v/0.08206/(273.15 + 10);
      let mol2String = mol2.toPrecision(3);
      let answer = mol - mol2;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A {vString}&nbsp;L cylinder contains {molString}&nbsp;moles
            of N<sub>2</sub>(g) at 10&nbsp;&#176;C. How many moles of N<sub>2</sub> must
            be released from the cylinder to reduce the pressure in the cylinder
            to {pString}&nbsp;atm, still at 10&nbsp;&#176;C?</p>
        </React.Fragment>
      );

      const feedEqMol1 = `\\begin{eqnarray*}
        mol & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(${pString} \\text{ atm})(${vString} \\text{ L})}
        {(0.08206 \\text{ L atm} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K}
        + 10\\,^{\\circ}\\text{C})} \\\\
        & = & ${mol2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMol2 = `\\begin{eqnarray*}
        mol_\\text{released} & = & mol_\\circ - mol  \\\\
        & = & ${molString} \\text{ mol} - ${mol2String} \\text{ mol} \\\\
        & = & ${ansString} \\text{ mol}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The number of moles of N<sub>2</sub> after reducing the pressure
              can be found using the ideal gas law:</p>
            <MathJax.Node formula={feedEqMol1}></MathJax.Node>
            <p>Therefore, the number of moles released is</p>
            <MathJax.Node formula={feedEqMol2}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );
      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>mol</i><sub>N<sub>2</sub></sub></React.Fragment>),
          units: "mol"
        }, feedback};
    }()
  },
  {
    "_id": 11,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 2,
    "type": "numeric",
    "questionBody": function() {
      let tempIString = (Math.random()*(250 - 150) + 150).toPrecision(3);
      let tempI = Number.parseFloat(tempIString);
      let pIString = (Math.random()*(125.0 - 50.0) + 50.0).toPrecision(3);
      let pI = Number.parseFloat(pIString);
      let tempFString = (Math.random()*(370 - 270) + 270).toPrecision(3);
      let tempF = Number.parseFloat(tempFString);
      let pFString = (Math.random()*(250.0 - 130.0) + 130.0).toPrecision(3);
      let pF = Number.parseFloat(pFString);
      let answer = pI*tempF/(tempI*pF);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A fixed amount of gas at {tempIString}&nbsp;&#176;C and a pressure
          of {pIString}&nbsp;kPa has an initial volume V<sub>i</sub>.
          At {tempFString}&nbsp;&#176;C and a pressure of {pFString}&nbsp;kPa,
          its final volume is V<sub>f</sub>. What is the value of the ratio
          V<sub>f</sub>/V<sub>i</sub>?</p>
        </React.Fragment>
      );

      const feedEqLaw = `\\frac{P_i V_i}{T_i} = \\frac{P_f V_f}{T_f}`;
      const feedEqRatio = `\\begin{eqnarray*}
        \\frac{V_f}{V_i} & = & \\frac{P_i T_f}{T_i P_f} \\\\
        & = & \\frac{(${pIString} \\text{ kPa})(273.15 \\text{ K}
        + ${tempFString}\\,^{\\circ}\\text{C})}{(273.15 \\text{ K}
        + ${tempIString}\\,^{\\circ}\\text{C})(${pFString} \\text{ kPa})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Combined Boyle&#8217;s and Charles&#8217;s law allows to do calculations
            on gases when temperature, pressure, and volume change.</p>
            <MathJax.Node formula={feedEqLaw}></MathJax.Node>
            <p>We can rearrange this law to express the ratio V<sub>f</sub>/V<sub>i</sub>
              and substitute the necessary data:</p>
            <MathJax.Node formula={feedEqRatio}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );
      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>V</i><sub>f</sub>/V<sub>f</sub></React.Fragment>),
          units: ""
        }, feedback};
    }()
  },
  {
    "_id": 12,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 3,
    "type": "numeric",
    "questionBody": function () {
      let dString = (Math.random()*(4.50 - 3.50) + 3.50).toPrecision(3);
      let d = Number.parseFloat(dString);
      let pString = (Math.random()*(95.0 - 85.0) + 85.0).toPrecision(3);
      let p = Number.parseFloat(pString);
      let mM = d*8.314*(273.15 + 20)/p;
      let mMString = mM.toPrecision(3);
      let chiN2 = (mM - 146.07)/(28 - 146.07);
      let chiN2String = chiN2.toPrecision(3);
      let answer = chiN2*p;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A gaseous mixture that contains only N<sub>2</sub>(g)
            (28&nbsp;g&nbsp;mol<sup>&#8211;1</sup>) and SF<sub>6</sub>(g)
            (146.07&nbsp;g&nbsp;mol<sup>&#8211;1</sup>) has a density of {dString}&nbsp;g&nbsp;L<sup>&#8211;1</sup> at
            20.0&nbsp;&#176;C and {pString}&nbsp;kPa. What is the partial pressure
            of N<sub>2</sub>(g)?</p>
        </React.Fragment>
      );

      const feedEqMM = `\\begin{eqnarray*}
        MM & = & \\frac{dRT}{P} \\\\
        & = & \\frac{(${dString} \\text{ g L}^{-1})(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})
        (273.15 \\text{ K} + 20.0\\,^{\\circ}\\text{C})}
        {${pString} \\text{ kPa}} \\\\
        & = & ${mMString} \\text{ g/mol}
        \\end{eqnarray*}`;
      const feedEqMMEqn = `\\begin{eqnarray*}
        MM & = & \\chi_{\\text{N}_2} \\times MM_{\\text{N}_2} + \\chi_{\\text{SF}_2} \\times MM_{\\text{SF}_2} \\\\
        & = & \\chi_{\\text{N}_2}(28 \\text{ g/mol}) + (1 - \\chi_{\\text{N}_2})(146.07 \\text{ g/mol}) \\\\
        & = & ${mMString} \\text{ g/mol},
        \\end{eqnarray*}`;
      const feedEqChiN2 = `\\chi_{\\text{N}_2} = ${chiN2String}`;
      const feedEqPN2 = `\\begin{eqnarray*}
        P_{\\text{N}_2} & = & \\chi_{\\text{N}_2} P \\\\
        & = & (${chiN2String})(${pString} \\text{ kPa}) \\\\
        & = & ${ansString} \\text{ kPa}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Recall that given the density of a gas mixture we can find its
            average molar mass:</p>
            <MathJax.Node formula={feedEqMM}></MathJax.Node>
            <p>The average molar mass is related to the molar masses of components as</p>
            <MathJax.Node formula={feedEqMMEqn}></MathJax.Node>
            <p>where we used the fact that mole fractions add up to 1, so that
            the mole fraction of SF<sub>6</sub> is 1 minus the mole fraction
            of N<sub>2</sub>.</p>
            <p>Solving the above equation for the mole fraction of N<sub>2</sub> gives</p>
            <MathJax.Node formula={feedEqChiN2}></MathJax.Node>
            <p>From the total pressure and the mole fraction of N<sub>2</sub>, we
            can find its partial pressure:</p>
            <MathJax.Node formula={feedEqPN2}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>P</i><sub>N<sub>2</sub></sub></React.Fragment>),
          units: "kPa"
        }, feedback};
    }()
  },
  {
    "_id": 13,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 4,
    "type": "numeric",
    "questionBody": function() {
      let vCO2String = (Math.random()*(5.0 - 1.0) + 1.0).toPrecision(2);
      let vCO2 = Number.parseFloat(vCO2String);
      let tempString = (Math.random()*(30 - 20) + 20).toPrecision(2);
      let temp = Number.parseFloat(tempString);
      let molCO2 = 101.3*vCO2/(8.314*(273.15 + temp));
      let molCO2String = molCO2.toPrecision(2);
      let molC3H8 = molCO2/3;
      let molC3H8String = molC3H8.toPrecision(2);
      let answer = molC3H8*44.094;
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>What mass of pure propane, C<sub>3</sub>H<sub>8</sub>, must be burned
          in excess O<sub>2</sub> to produce {vCO2String}&nbsp;L
          of CO<sub>2</sub>(g) at {tempString}&nbsp;&#176;C and 101.3&nbsp;kPa?</p>
        </React.Fragment>
      );

      const feedEqMolCO2 = `\\begin{eqnarray*}
        mol_{\\text{CO}_2} & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(101.3 \\text{ kPa})(${vCO2String} \\text{ L})}
        {(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K}
        + ${tempString}\\,^{\\circ}\\text{C})} \\\\
        & = & ${molCO2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMolC3H8 = `\\begin{eqnarray*}
        mol_{\\text{C}_3\\text{H}_8} & = & \\frac{mol_{\\text{CO}_2} \\times 1}{3} \\\\
        & = & \\frac{${molCO2String} \\text{ mol} \\times 1}{3} \\\\
        & = & ${molC3H8String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMassC3H8 = `\\begin{eqnarray*}
        m_{\\text{C}_3\\text{H}_8} & = & mol_{\\text{C}_3\\text{H}_8} \\times MM \\\\
        & = & (${molC3H8String} \\text{ mol})(44.094 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, let us write down the reaction equation described in the question</p>
            <p className="eqn">C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> &#8594;
            3 CO<sub>2</sub> + 4 H<sub>2</sub>O</p>
            <p>Now, find the number of moles of CO<sub>2</sub>(g) using the
            ideal gas law:</p>
            <MathJax.Node formula={feedEqMolCO2}></MathJax.Node>
            <p>Use stoichiometry to find the number of moles of propane required to
            produce {molCO2String} mol of CO<sub>2</sub>:</p>
            <MathJax.Node formula={feedEqMolC3H8}></MathJax.Node>
            <p>Finally, find the mass of propane:</p>
            <MathJax.Node formula={feedEqMassC3H8}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>C<sub>3</sub>H<sub>8</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "_id": 14,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 5,
    "type": "numeric",
    "questionBody": function() {
      let pIString = (Math.random()*(99.0 - 80.0) + 80.0).toPrecision(3);
      let pI = Number.parseFloat(pIString);
      let tempFString = (Math.random()*(150 - 110) + 110).toPrecision(3);
      let tempF = Number.parseFloat(tempFString);
      let pFString = (Math.random()*(295 - 210) + 210).toPrecision(3);
      let pF = Number.parseFloat(pFString);
      let pN2 = pI - 3.60;
      let pN2String = pN2.toPrecision(3);
      let molN2 = pN2*1.00/(8.314*(273.15 + 27));
      let molN2String = molN2.toPrecision(3);
      let mol = pF*1.00/(8.314*(273.15 + tempF));
      let molString = mol.toPrecision(3);
      let molH2O = mol - molN2;
      let molH2OString = molH2O.toPrecision(3);
      let answer = molH2O*(18.016);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>A 1.00&nbsp;L vessel contains water and some nitrogen gas at
          27&nbsp;&#176;C. The total pressure is {pIString}&nbsp;kPa.
          At {tempFString}&nbsp;&#176;C, no liquid is present and the
          pressure in the vessel is {pFString}&nbsp;kPa. What is the mass of
          water in the vessel? The vapour pressure of H<sub>2</sub>O
          at 27&nbsp;&#176;C is 3.60&nbsp;kPa.</p>
        </React.Fragment>
      );

      const feedEqPN2 = `\\begin{eqnarray*}
        P_{\\text{N}_2} & = & P_\\text{total} - P_{\\text{H}_2\\text{O}} \\\\
        & = & ${pIString} \\text{ kPa} - 3.60 \\text{ kPa} \\\\
        & = & ${pN2String} \\text{ kPa}
        \\end{eqnarray*}`;
      const feedEqMolN2 = `\\begin{eqnarray*}
        mol_{\\text{N}_2} & = & \\frac{P_{\\text{N}_2}V}{RT} \\\\
        & = & \\frac{(${pN2String} \\text{ kPa})(1.00 \\text{ L})}
        {(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K}
        + 27\\,^{\\circ}\\text{C})} \\\\
        & = & ${molN2String} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMol = `\\begin{eqnarray*}
        mol_\\text{tot} & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(${pFString} \\text{ kPa})(1.00 \\text{ L})}
        {(8.314 \\text{ L kPa} \\text{ mol}^{-1} \\text{ K}^{-1})(273.15 \\text{ K}
        + ${tempFString}\\,^{\\circ}\\text{C})} \\\\
        & = & ${molString} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMolH2O = `\\begin{eqnarray*}
        mol_{\\text{H}_2\\text{O}} & = & mol_\\text{tot} - mol_{\\text{N}_2} \\\\
        & = & ${molString} \\text{ mol} - ${molN2String} \\text{ mol} \\\\
        & = & ${molH2OString} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMassH2O = `\\begin{eqnarray*}
        m_{\\text{H}_2\\text{O}} & = & mol_{\\text{H}_2\\text{O}} \\times MM \\\\
        & = & (${molH2OString} \\text{ mol})(18.016 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>At 27&nbsp;&#176;C, the gas in the vessel is a mixture of nitrogen
            and water vapour. So, the pressure of just N<sub>2</sub> is</p>
            <MathJax.Node formula={feedEqPN2}></MathJax.Node>
            <p>Hence, the number of moles of nithogen in the vessel is</p>
            <MathJax.Node formula={feedEqMolN2}></MathJax.Node>
            <p>But at 27&nbsp;&#176;C some of the water is in the liquid state,
            so we cannot find the moles of water directly from the ideal gas law.
            We can, however, find the total number of moles of the mixture from
            the data at {tempFString}&nbsp;&#176;C, since at this temperature
            all the water is gaseous. So,</p>
            <MathJax.Node formula={feedEqMol}></MathJax.Node>
            <p>The number of moles of water is just the difference between the
            total moles and the moles of nitrogen:</p>
            <MathJax.Node formula={feedEqMolH2O}></MathJax.Node>
            <p>And the mass is</p>
            <MathJax.Node formula={feedEqMassH2O}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>H<sub>2</sub>O</sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "_id": 15,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 6,
    "type": "numeric",
    "questionBody": function() {
      let pC2H4String = (Math.random()*(1.39 - 1.00) + 1.00).toPrecision(3);
      let pC2H4 = Number.parseFloat(pC2H4String);
      let pH2String = (Math.random()*(0.70 - 0.40) + 0.40).toPrecision(2);
      let pH2 = Number.parseFloat(pH2String);
      let pIC2H4 = pC2H4/2;
      let pIC2H4String = pIC2H4.toPrecision(3);
      let pIH2 = pH2/2;
      let pIH2String = pIH2.toPrecision(3);
      let pFC2H4 = pIC2H4 - pIH2;
      let pFC2H4String = pFC2H4.toPrecision(3);
      let answer = pIH2 + pFC2H4;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Two flasks (A and B) of equal volume are connected by a stopcock.
          Flask A contains C<sub>2</sub>H<sub>4</sub> gas at a pressure
          of {pC2H4String}&nbsp;atm. Flask B contains H<sub>2</sub> at a
          pressure of {pH2String}&nbsp;atm. The stopcock is opened and the
          gases are allowed to mix and react according to:</p>
          <p className="eqn">C<sub>2</sub>H<sub>4</sub>(g) +  H<sub>2</sub>(g) &#8594;
          C<sub>2</sub>H<sub>6</sub>(g)</p>
          <p>Assuming that the temperature remains constant throughout the reaction,
          what is the final pressure in the system when the reaction is complete?</p>
        </React.Fragment>
      );

      const feedEqPI = `\\begin{eqnarray*}
        P_{\\text{C}_2\\text{H}_4} & = & \\frac{1}{2} (${pC2H4String} \\text{ atm}) = ${pIC2H4String} \\text{ atm} \\\\
        P_{\\text{H}_2} & = & \\frac{1}{2} (${pH2String} \\text{ atm}) = ${pIH2String} \\text{ atm}
        \\end{eqnarray*}`;
      const feedEqPF = `\\begin{eqnarray*}
        P & = & 0 \\text{ atm} + ${pFC2H4String} \\text{ atm} + ${pIH2String} \\text{ atm} \\\\
        & = & ${ansString} \\text{ atm}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>This question is about stoichiometry and since the temperature
            and the volume of the reaction mixture do not change, we can use
            pressure-pressure stoichiometry. First, we need to find the pressures of the two
            reagents when the stopcock is opened. Since flasks A and B have
            equal volume, the volume is doubled once they are connected. The
            pressures then decrease in half:</p>
            <MathJax.Node formula={feedEqPI}></MathJax.Node>
            <p>We are given amounts of two reagents, which implies that one
            of them is limiting. Division by the corresponding coefficients in
            the reaction produces {pIC2H4String}/1 = {pIC2H4String} for
            C<sub>2</sub>H<sub>4</sub> and {pIH2String}/1 = {pIH2String} for
            H<sub>2</sub>, so, H<sub>2</sub> is the limiting reagent and will be
            used completely.</p>
            <p>Now we can construct an ICF table:</p>
            <table className="ice">
              <thead>
                <tr>
                  <th></th>
                  <th>C<sub>2</sub>H<sub>4</sub>(g)</th>
                  <th>+</th>
                  <th>O<sub>2</sub>(g)</th>
                  <th>&#8594;</th>
                  <th>C<sub>2</sub>H<sub>6</sub>(g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>initial</td>
                  <td>{pIC2H4String}</td>
                  <td></td>
                  <td>{pIH2String}</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>-{pIH2String}</td>
                  <td></td>
                  <td>-{pIH2String}</td>
                  <td></td>
                  <td>+{pIH2String}</td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>{pFC2H4String}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>{pIH2String}</td>
                </tr>
              </tbody>
            </table>
            <p>When the reaction is complete, the gas mixture contains
            everything in the last raw of the table, so the final pressure is</p>
            <MathJax.Node formula={feedEqPF}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>P</i></React.Fragment>),
          units: "atm"
        }, feedback};
    }()
  },
  {
    "_id": 16,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 7,
    "type": "MC",
    "questionBody": function() {
      let mO2 = Math.floor(Math.random()*(65 - 16) + 16);
      let mSO2 = 2*mO2;
      let wrongDString = ((mO2 + mSO2)/2/100).toPrecision(2);

      var description = (
        <React.Fragment>
          <p>A gas mixture contains  {mO2}&nbsp;g of O<sub>2</sub>(g) and {mSO2}&nbsp;g
          of SO<sub>2</sub>(g) in a 100&nbsp;L container.
          Which one of the following statements concerning this mixture is the
          most correct?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>The rms speed of the O<sub>2</sub> is double that of the rms speed of the SO<sub>2</sub>.</p>),
        correct: false,
        id: 0},
        {text: (<p>The partial pressure of the SO<sub>2</sub> is double that of the O<sub>2</sub>.</p>),
        correct: false,
        id: 1},
        {text: (<p>The mole fraction of the SO<sub>2</sub> is 0.667.</p>),
        correct: false,
        id: 2},
        {text: (<p>The density of the gas mixture is {wrongDString}&nbsp;g&nbsp;L<sup>&#8211;1</sup>.</p>),
        correct: false,
        id: 3},
        {text: (<p>The mole fraction of the O<sub>2</sub> is 0.500.</p>),
        correct: true,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>The correct answer is that the mole fraction of the O<sub>2</sub> is 0.500.
          Indeed, there is {mO2}&nbsp;g/32&nbsp;g/mol = {(mO2/32).toPrecision(2)}&nbsp;mol
          of O<sub>2</sub> and {mSO2}&nbsp;g/64&nbsp;g/mol = {(mSO2/64).toPrecision(2)}&nbsp;mol
          of SO<sub>2</sub>, so the oxygen is exactly one half of the mixture by moles.</p>
          <p>Let us see why some other options are incorrects.</p>
          <p>The rms speed is inversly proportional to the <i>square root</i> of molar mass. So,
          the rms speed of the O<sub>2</sub> is larger by a factor of &#8730;2, not double.</p>
          <p>Partial pressure is proportional to the mole fraction. We just found that O<sub>2</sub> and
          SO<sub>2</sub> have equal mole fraction, 0.500, so, their partial pressures must be equal.</p>
          <p>The density of the gas mixture can be found by simply dividing the total mass, {mO2 + mSO2}&nbsp;g,
          by the volume, 100&nbsp;L, which results in {((mO2 + mSO2)/100).toPrecision(2)}&nbsp;g&nbsp;L<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 17,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 8,
    "type": "MC",
    "questionBody": function() {
      let gases = [
        {formula: (<span>H<sub>2</sub></span>),
        mM: 2.016},
        {formula: (<span>CF<sub>4</sub></span>),
        mM: 88.01},
        {formula: (<span>O<sub>2</sub></span>),
        mM: 32.00},
        {formula: (<span>SO<sub>2</sub></span>),
        mM: 64.07},
        {formula: (<span>CO</span>),
        mM: 28.01}
      ];
      let gasIdx = Math.floor(Math.random()*gases.length);
      let chosenGas = gases[gasIdx];
      let rateFactor = Math.sqrt(chosenGas.mM/20.18);
      let rateFactorString = rateFactor.toPrecision(3);
      let MMString = (20.18*Math.pow(rateFactor, 2)).toPrecision(3);

      var description = (
        <React.Fragment>
          <p>The rate of effusion of Ne gas is {rateFactorString} times the rate of
          effusion of an unknown  gas at identical conditions. What is a
          possible identity of the unknown gas?</p>
        </React.Fragment>
      );

      var options = gases.map(gas => {
        return {
          text: (<p>{gas.formula} ({gas.mM.toPrecision(4)}&nbsp;g&nbsp;mol<sup>&#8211;1</sup>)</p>),
          correct: gas === chosenGas,
          id: gases.indexOf(gas)
        }
      });

      const feedEqMM = `MM = 20.18 \\text{ g/mol} \\times ${rateFactorString}^2
        = ${MMString} \\text{ g/mol}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The rate of effusion of a gas is inversly proportional to the square
            root of its molar mass. Thus, the molar mass of the unknow gas must be</p>
            <MathJax.Node formula={feedEqMM}></MathJax.Node>
            <p>{chosenGas.formula} matches this molar mass best.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 18,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 1,
    "idInExam": 9,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>One mole of each gas A and Gas B at different temperatures are placed
          in a container that is separated by a divider as shown below. The
          gases are allowed to come to thermal equilibrium, but they do not mix.</p>
        <table style={{borderCollapse: 'collapse', 'width': '80%', textAlign: 'center', verticalAlign: 'center'}}>
          <tbody>
            <tr>
              <td style={{border: '1px solid black'}}>
                <p>Gas A</p>
                <p>(1.0 L)</p>
              </td>
              <td style={{border: '1px solid black'}}>
                <p>Gas B</p>
                <p>(2.0 L)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>When thermal equilibrium is attained, which relationships are true?</p>
        </React.Fragment>
      );

      var options = [
        {text: (
          <MathJax.Provider>
            <MathJax.Node inline formula={`\\frac{P_A V_A}{n_A} = \\frac{P_B V_B}{n_B}`}></MathJax.Node>
          </MathJax.Provider>),
        correct: true,
        id: 0},
        {text: (
          <MathJax.Provider>
            <MathJax.Node inline formula={`P_A = P_B`}></MathJax.Node>
          </MathJax.Provider>),
        correct: false,
        id: 1},
        {text: (
          <MathJax.Provider>
            <MathJax.Node inline formula={`V_A = V_B`}></MathJax.Node>
          </MathJax.Provider>),
        correct: false,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The volumes of the gases are clearly not the same (1.0&nbsp;L and
              2.0&nbsp;L). Since the number of moles and the temperature are
              the same for the two
              gases, <MathJax.Node inline formula={`P_A V_A = P_B V_B`}></MathJax.Node>.
              In this equation, the pressures of A and B must be different because their
              volumes are. On the other hand, If we divide both sides by the number of moles,
              to produce <MathJax.Node inline formula={`\\frac{P_A V_A}{n_A} = \\frac{P_B V_B}{n_B}`}></MathJax.Node>,
              we are dividing by the same number on the left and on the right, which means that
              the equality still holds.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 19,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 10,
    "type": "numeric",
    "questionBody": function() {
      const Ccal = 154;
      let mH2OString = (Math.random()*(800 - 250) + 250).toPrecision(3);
      let mH2O = Number.parseFloat(mH2OString);
      let dTString = (Math.random()*(4.00 - 1.00) + 1.00).toPrecision(3);
      let dT = Number.parseFloat(dTString);
      let molString = ((mH2O*4.184 + Ccal)*dT/36000).toPrecision(3);
      let mol = Number.parseFloat(molString);
      let qRxn = -mol*36000;
      let qRxnString = Number.parseFloat(qRxn.toPrecision(3)); //parsing to get rif of e-display
      let qH2O = mH2O*4.184*dT;
      let qH2OString = Number.parseFloat(qH2O.toPrecision(3));
      let qCal = -qRxn - qH2O;
      let qCalString = qCal.toPrecision(3);
      let answer = qCal/dT;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Ammonium nitrate, a component of fertilizer, decomposes according to
          the equation below:</p>
        <p className="eqn">NH<sub>4</sub>NO<sub>3</sub>(s) &#8594; N<sub>2</sub>O(g) + 2 H<sub>2</sub>O(g)
          <span style={{whiteSpace: 'pre'}}>      <MathJax.Provider><MathJax.Node inline formula={`\\Delta H^{\\circ} = -36.0 \\text{ kJ mol}^{-1}`}></MathJax.Node></MathJax.Provider></span>
        </p>
        <p>{molString}&nbsp;moles ammonium nitrate was allowed to decompose in a
          bomb calorimeter containing {mH2OString}&nbsp;g of water. The heat produced
          resulted in a temperature increase of {dTString}&nbsp;K. What is the
          heat capacity of the calorimeter, in J&nbsp;K<sup>&#8211;1</sup>?</p>
        <p>Specific heat capacity of water = 4.184&nbsp;J&nbsp;K<sup>&#8211;1</sup>&nbsp;g<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const feedEqLaw = `q_{rxn} = -(q_{cal} + q_{water})`;
      const feedEqQrxn = `\\begin{eqnarray*}
        q_{rxn} & = & \\frac{mol_{\\text{NH}_4\\text{NO}_3} \\Delta H}{coef_{\\text{ NH}_4\\text{NO}_3}} \\\\
        & = & \\frac{(${molString} \\text{ mol})(-36000 \\text{ J mol}^{-1})}{1} \\\\
        & = & ${qRxnString} \\text{ J}
        \\end{eqnarray*}`;
      const feedEqQwater = `\\begin{eqnarray*}
        q_{water} & = & m c \\Delta T \\\\
        & = & (${mH2OString} \\text{ g})(4.184 \\text{ J K}^{-1}\\text{ g}^{-1})(${dTString} \\text{ K}) \\\\
        & = & ${qH2OString} \\text{ J}
        \\end{eqnarray*}`;
      const feedEqC = `\\begin{eqnarray*}
        q_{cal} & = & -q_{rxn} - q_{water} \\\\
        & = & -(${qRxnString} \\text{ J}) - ${qH2OString} \\text{ J} \\\\
        & = & ${qCalString} \\text{ J} \\\\
        C_{cal} & = & \\frac{q_{cal}}{\\Delta T} \\\\
        & = & \\frac{${qCalString} \\text{ J}}{${dTString} \\text{ K}} \\\\
        & = & ${ansString} \\text{ J K}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The first law of thermodynamics applied to calorimetry reads</p>
            <MathJax.Node formula={feedEqLaw}></MathJax.Node>
            <p>On the left-hand side, we have</p>
            <MathJax.Node formula={feedEqQrxn}></MathJax.Node>
            <p>Notice that we had to convert the enthalpy of the reaction to joules
              since we need to have the same units for all the <i>q</i>&#8217;s.</p>
            <p>On the right-hand side, we do not know <MathJax.Node inline formula={`q_{cal}`}></MathJax.Node> yet,
              but we can calculate the heat absorbed by water:</p>
            <MathJax.Node formula={feedEqQwater}></MathJax.Node>
            <p>Now we can subtract to find <MathJax.Node inline formula={`q_{cal}`}></MathJax.Node>,
              and find the heat capacity of the calorimeter:</p>
            <MathJax.Node formula={feedEqC}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>C</i><sub>cal</sub></React.Fragment>),
          units: "J/K"
        }, feedback};
      }()
  },
  {
    "_id": 20,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 11,
    "type": "numeric",
    "questionBody": function() {
      let mIceString = (Math.random()*(130 - 80.0) + 80.0).toPrecision(2);
      let mIce = Number.parseFloat(mIceString);
      let mWatString = (Math.random()*(250 - 180.0) + 180.0).toPrecision(2);
      let mWat = Number.parseFloat(mWatString);
      let qWat = -mWat*4.184*25;
      let qWatString = qWat.toPrecision(3);
      let mol = -qWat/6010;
      let molString = mol.toPrecision(3);
      let m = mol*18.016;
      let mString = m.toPrecision(3);
      let answer = mIce - m;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>{mIce}&nbsp;g of ice at 0&nbsp;&#176;C are added to {mWat}&nbsp;g
          of water at 25&nbsp;&#176;C. What mass of ice remains when the mixture
          has reached thermal equilibrium? Assume that there is no heat transfer
          from the container.</p>
          <p>Specific heat capacity of water = 4.184&nbsp;J&nbsp;K<sup>&#8211;1</sup>&nbsp;g<sup>&#8211;1</sup></p>
          <p><MathJax.Provider><MathJax.Node inline formula={`\\Delta H^{\\circ}_{fusion}`}></MathJax.Node></MathJax.Provider> of
          H<sub>2</sub>O at 0&nbsp;&#176;C = 6.01&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const feedEqQWat = `\\begin{eqnarray*}
        q_{water} & = & m c \\Delta T \\\\
        & = & (${mWat} \\text{ g})(4.184 \\text{ J K}^{-1}\\text{ g}^{-1})((0 - 25) \\text{ K}) \\\\
        & = & ${Number.parseFloat(qWatString)} \\text{ J}
        \\end{eqnarray*}`;
      const feedEqMIce = `\\begin{eqnarray*}
        mol_{ice} & = & \\frac{-q_{water}}{\\Delta H_\\text{fusion}} \\\\
        & = & \\frac{-(${Number.parseFloat(qWatString)} \\text{ J})}{6010 \\text{ J mol}^{-1}} \\\\
        & = & ${molString} \\text{ mol} \\\\
        m_{ice} & = & (${molString} \\text{ mol})(18.016 \\text{ g mol}^{-1}) \\\\
        & = & ${mString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, let us address one tricky thing in this question:
            what is the temperature of the mixture at thermal equilibrium?
            The hint is that ice is still present at that point, and
            this means the mixture has to be at 0&nbsp;&#176;C (otherwise more
            ice would have melted!).</p>
            <p>The ice gains heat and the water loses it, so</p>
            <MathJax.Node formula={`q_{ice} = -q_{water}`}></MathJax.Node>
            <p>The water is just cooled from 25&nbsp;&#176;C to 0&nbsp;&#176;C:</p>
            <MathJax.Node formula={feedEqQWat}></MathJax.Node>
            <p>The amout of ice that can be melted with this much heat is</p>
            <MathJax.Node formula={feedEqMIce}></MathJax.Node>
            <p>However, the question is about the ice remaining, so</p>
            <MathJax.Node formula={`${mIce} \\text{ g} - ${mString} \\text{ g} = ${ansString} \\text{ g}`}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>ice</sub></React.Fragment>),
          units: "g"
        }, feedback};
      }()
  },
  {
    "_id": 21,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 12,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>Given the following:</p>
          <MathJax.Provider>
            <table>
              <tbody>
                <tr>
                  <td><p className="eqn">N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &#8594; 2 NH<sub>3</sub>(g)</p></td>
                  <td style={{paddingLeft: '15px'}}><MathJax.Node inline formula={`\\Delta H = x`}></MathJax.Node></td>
                </tr>
                <tr>
                  <td><p className="eqn">2 NH<sub>3</sub>(g) + 5/2 O<sub>2</sub>(g) &#8594; 2 NO(g) + 3 H<sub>2</sub>O(l)</p></td>
                  <td style={{paddingLeft: '15px'}}><MathJax.Node inline formula={`\\Delta H = y`}></MathJax.Node></td>
                </tr>
                <tr>
                  <td><p className="eqn">2 H<sub>2</sub>(g) + O<sub>2</sub>(g) &#8594; 2 H<sub>2</sub>O(l)</p></td>
                  <td style={{paddingLeft: '15px'}}><MathJax.Node inline formula={`\\Delta H = z`}></MathJax.Node></td>
                </tr>
              </tbody>
            </table>
          </MathJax.Provider>
          <p>Which one of the following relationships will give the standard enthalpy
          of formation of NO(g)?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<MathJax.Provider><MathJax.Node inline formula={`x + y - 1.5 z`}></MathJax.Node></MathJax.Provider>),
        correct: false,
        id: 0},
        {text: (<MathJax.Provider><MathJax.Node inline formula={`x + y - z`}></MathJax.Node></MathJax.Provider>),
        correct: false,
        id: 1},
        {text: (<MathJax.Provider><MathJax.Node inline formula={`1.5 x + y - z`}></MathJax.Node></MathJax.Provider>),
        correct: false,
        id: 2},
        {text: (<MathJax.Provider><MathJax.Node inline formula={`\\frac{1}{2}(x + y + z)`}></MathJax.Node></MathJax.Provider>),
        correct: false,
        id: 3},
        {text: (<MathJax.Provider><MathJax.Node inline formula={`\\frac{1}{2}(x + y - 1.5 z)`}></MathJax.Node></MathJax.Provider>),
        correct: true,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The reaction that corresponds to the standard enthalpy of formation of NO(g) is</p>
            <p className="eqn">1/2 N<sub>2</sub>(g) + 1/2 O<sub>2</sub> &#8594; NO(g)</p>
            <p>Apply Hess&#8217;s law to find the enthalpy of this reaction. The first reaction must
            be multiplied by 1/2 since we only need 1/2 N<sub>2</sub>(g) on the left-hand side. The second
            reaction also must be multiplied by 1/2 since we only need 1/2 NO(g) on the right-hand side.
            But this also gives us 1/2 &#10005; 5/2 = 5/4 of O<sub>2</sub>(g), which is more than
            needed (only 1/2). So, we cancel (5/4 - 1/2) = 3/4 of O<sub>2</sub>(g) by multiplying
            the third reaction by (-3/4). Overall,</p>
          <MathJax.Node formula={`\\frac{1}{2}x + \\frac{1}{2}y - \\frac{3}{4}z = \\frac{1}{2}(x + y - 1.5 z)`}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 22,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 13,
    "type": "MC",
    "questionBody": function() {
      let incorrectEqs = [
        (<React.Fragment>H<sub>2</sub>(g) + Cl<sub>2</sub>(g) &#8594; 2 HCl(g)</React.Fragment>),
        (<React.Fragment>C<sub>3</sub>H<sub>6</sub>(g) + H<sub>2</sub>(g) &#8594; C<sub>3</sub>H<sub>8</sub>(g)</React.Fragment>),
        (<React.Fragment>Mg(s) + 2 Cl(g) &#8594; MgCl<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>CO(g) + 1/2 O<sub>2</sub>(g) &#8594; CO<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>C(g) + O(g) &#8594; CO(g)</React.Fragment>),
        (<React.Fragment>Hg(s) + Br<sub>2</sub>(l) &#8594; HgBr<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>S(g) + O<sub>2</sub>(g) &#8594; SO<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>H<sub>2</sub>O(l) + 1/2 O<sub>2</sub>(g) &#8594; H<sub>2</sub>O<sub>2</sub>(l)</React.Fragment>)
      ];
      let correctEqs = [
        (<React.Fragment>C(graphite) + O<sub>2</sub>(g) &#8594; CO<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>1/2 H<sub>2</sub>(g) + 1/2 Br<sub>2</sub>(l) &#8594; HBr(g)</React.Fragment>),
        (<React.Fragment>3 C(graphite) + 3 H<sub>2</sub>(g) &#8594; C<sub>3</sub>H<sub>6</sub>(g)</React.Fragment>),
        (<React.Fragment>Fe(s) + Cl<sub>2</sub>(g) &#8594; FeCl<sub>2</sub>(s)</React.Fragment>)
      ];
      let correctEqSelected = correctEqs[Math.floor(Math.random()*correctEqs.length)];
      let incorrectEqsSelected = [];
      while (incorrectEqsSelected.length < 4) {
        let idx = Math.floor(Math.random()*incorrectEqs.length);
        incorrectEqsSelected.push(incorrectEqs[idx]);
        incorrectEqs.splice(idx, 1);
      }

      var description = (
        <React.Fragment>
          <p>Which one of the following has
            a <MathJax.Provider><MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{rxn}`}></MathJax.Node></MathJax.Provider> equal
            to the standard enthalpy of formation of the product?</p>
        </React.Fragment>
      );

      var options = incorrectEqsSelected.map(eq => {
          return {
            text: eq,
            correct: false,
            id: incorrectEqsSelected.indexOf(eq)
          };
        }).concat({
          text: correctEqSelected,
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
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 23,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 14,
    "type": "numeric",
    "questionBody": function() {
      let answer = (-2390 - 6*(-314) - 3*(-242) + 10*(-46))/(-3);

      var description = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Given that the reaction below
              has <MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{rxn} = -2390 \\text{ kJ}`}></MathJax.Node>,
              what is <MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{f}`}></MathJax.Node> of Cl<sub>2</sub>O?</p>
            <p className="eqn">3 Cl<sub>2</sub>O(g) + 10 NH<sub>3</sub>(g) &#8594; 6 NH<sub>4</sub>Cl(s) + 3 H<sub>2</sub>O(g) + 2 N<sub>2</sub>(g)</p>
            <p><MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{f}\\,(\\text{ kJ mol}^{-1})`}></MathJax.Node>:</p>
            <p className="eqn">NH<sub>3</sub>(g) = &#8211;46</p>
            <p className="eqn">NH<sub>4</sub>Cl(s) = &#8211;314</p>
            <p className="eqn">H<sub>2</sub>O(g) = &#8211;242</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      const feedEqHess = `\\Delta H^{\\circ}_\\text{rxn} =
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})}`;
      const feedEqCl2O = `\\begin{eqnarray*}
        -2390 \\text{ kJ} & = & [ 6(-314) + 3(-242) + 2(0) ] \\text{ kJ} -
        [ 3 \\Delta H^{\\circ}_\\text{f}(\\text{Cl}_2\\text{O}) + 10(-46) \\text ] \\text{ kJ} \\\\
        \\Delta H^{\\circ}_\\text{f}(\\text{Cl}_2\\text{O}) & = & ${answer.toPrecision(2)} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The enthalpy of a reaction can be expressed in terms of the standard
            enthalpies of formation of the reactants and products as</p>
            <MathJax.Node formula={feedEqHess}></MathJax.Node>
            <p>Substitute all the data available into the above equation (also note
              that the standard enthalpy of formation of N<sub>2</sub>(g) is zero
              since it is in the standard state).</p>
            <MathJax.Node formula={feedEqCl2O}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment>&#916;<i>H</i>&#176;<sub>f</sub></React.Fragment>),
          units: "kJ/mol"
        }, feedback};
    }()
  },
  {
    "_id": 24,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 15,
    "type": "numeric",
    "questionBody": function() {
      let qString = (Math.random()*(2000 - 1000) + 1000).toPrecision(4);
      let q = Number.parseFloat(qString);
      let dH = -84.7 - 227.4;
      let dHString = dH.toPrecision(4);
      let mol = -q/dH;
      let molString = mol.toPrecision(3);
      let answer = mol*26.036;
      let ansString = answer.toPrecision(3);

      var description =  (
        <React.Fragment>
          <p>A gas mixture contains C<sub>2</sub>H<sub>2</sub> and excess H<sub>2</sub>. The
          reaction below proceeds to completion (at constant pressure)
          and {qString}&nbsp;kJ of heat are evolved.</p>
          <p className="eqn">2 H<sub>2</sub>(g) + C<sub>2</sub>H<sub>2</sub>(g) &#8594; C<sub>2</sub>H<sub>6</sub>(g)</p>
          <p>What was the mass of C<sub>2</sub>H<sub>2</sub> in the original gas mixture?</p>
          <MathJax.Provider>
            <p><MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{f}\\,(\\text{ kJ mol}^{-1})`}></MathJax.Node>:</p>
          </MathJax.Provider>
          <p className="eqn">C<sub>2</sub>H<sub>2</sub>(g) = 227.4</p>
          <p className="eqn">C<sub>2</sub>H<sub>6</sub>(g) = &#8211;84.7</p>
        </React.Fragment>
      );

      const feedEqdH = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn}
        & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & -84.7 \\text{ kJ/mol} - [227.6 + 2(0)] \\text{ kJ/mol} \\\\
        & = & ${dHString} \\text{ kJ/mol},
        \\end{eqnarray*}`;
      const feedEqMol = `\\begin{eqnarray*}
        mol_{\\text{C}_2\\text{H}_2} & = & \\frac{q \\times coef_{\\text{ C}_2\\text{H}_2}}{\\Delta H^{\\circ}_\\text{rxn}} \\\\
        & = & \\frac{(-${qString} \\text{ kJ})(1)}{${dHString} \\text{ kJ/mol}} \\\\
        & = & ${molString} \\text{ mol}
        \\end{eqnarray*}`;
      const feedEqMass = `\\begin{eqnarray*}
        m_{\\text{C}_2\\text{H}_2} & = & (${molString} \\text{ mol})(26.036 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, calculate the enthalpy of the given reaction:</p>
            <MathJax.Node formula={feedEqdH}></MathJax.Node>
            <p>where we substituted 0 for the enthalpy of formation of H<sub>2</sub> since
            it is in the standard state.</p>
            <p>Now, find the number of moles of C<sub>2</sub>H<sub>2</sub> that produced {qString}&nbsp;kJ
            of heat. Note that the word <i>evolved</i> implies that <MathJax.Node inline formula="q"></MathJax.Node> is
            negative.</p>
            <MathJax.Node formula={feedEqMol}></MathJax.Node>
            <p>and multiply by the molar mass to find the mass:</p>
            <MathJax.Node formula={feedEqMass}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment><i>m</i><sub>C<sub>2</sub>H<sub>2</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "_id": 25,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 16,
    "type": "MC",
    "questionBody": function() {
      let compounds = [
        (<React.Fragment>COCl<sub>2</sub></React.Fragment>),
        (<React.Fragment>CS<sub>2</sub></React.Fragment>),
        (<React.Fragment>CH<sub>3</sub>OH</React.Fragment>)
      ];
      let incorrectEqs = [
        [(<React.Fragment>COCl<sub>2</sub>(g) &#8594; C(g, at) + O(g, at) + Cl<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>COCl<sub>2</sub>(g) &#8594; C(g, at) + 1/2 O<sub>2</sub>(g) + Cl<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>COCl<sub>2</sub>(g) &#8594; C(s) + 1/2 O<sub>2</sub>(g) + Cl<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>2 COCl<sub>2</sub>(g) &#8594; 2 C(g, at) + O<sub>2</sub>(g) + 2 Cl<sub>2</sub>(g)</React.Fragment>)],
        [(<React.Fragment>CS<sub>2</sub>(g) &#8594; C(g, at) + S<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>CS<sub>2</sub>(g) &#8594; C(s) + S<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>CS<sub>2</sub>(g) &#8594; C(s) + 2 S(s)</React.Fragment>),
        (<React.Fragment>CS<sub>2</sub>(l) &#8594; C(g, at) + 2 S(g, at)</React.Fragment>)],
        [(<React.Fragment>CH<sub>3</sub>OH(g) &#8594; C(g, at) + 2 H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>CH<sub>3</sub>OH(l) &#8594; C(s) + 2 H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>2 CH<sub>3</sub>OH(g) &#8594; 2 C(s) + 4 H<sub>2</sub>(g) + O<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>CH<sub>3</sub>OH(l) &#8594; C(g, at) + 4 H(g, at) + O(g, at)</React.Fragment>)]
      ];
      let correctEqs = [
        (<React.Fragment>COCl<sub>2</sub>(g) &#8594; C(g, at) + O(g, at) + 2 Cl(g, at)</React.Fragment>),
        (<React.Fragment>CS<sub>2</sub>(g) &#8594; C(g, at) + 2 S(g, at)</React.Fragment>),
        (<React.Fragment>CH<sub>3</sub>OH(g) &#8594; C(g, at) + 4 H(g, at) + O(g, at)</React.Fragment>)
      ];
      let idx = Math.floor(Math.random()*compounds.length);

      var description = (
        <React.Fragment>
          <p>Which one of the following reactions could be used to find the total bond
          enthalpy of {compounds[idx]}?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>{correctEqs[idx]}</p>),
        correct: true,
        id: 0}
      ].concat(incorrectEqs[idx].map(eq => { return {text: (<p>{eq}</p>), correct: false, id: incorrectEqs[idx].indexOf(eq)+1};}));

      var feedback = (
        <React.Fragment>
          <p>An equation that corresponds to the total bond enthalpy of a compound must:</p>
          <ul>
            <li>have exactly one mole of the compound in the gaseous state on the left-hand side</li>
            <li>have only elements in atomic state (g, at) on the right-hand side.</li>
          </ul>
          <p> The only equation on the list that satisfies these criteria is</p>
          <p className="eqn">{correctEqs[idx]}</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 26,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 17,
    "type": "numeric",
    "questionBody": function() {
      let answer = 32;

      var description = (
        <React.Fragment>
          <p>CCl<sub>4</sub>(g) has a total bond enthalpy of 1306&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>.
          Estimate the enthalpy of vaporization of CCl<sub>4</sub>(l), in kJ&nbsp;mol<sup>&#8211;1</sup>.</p>
          <MathJax.Provider>
            <p><MathJax.Node inline formula={`\\Delta H^{\\circ}_\\text{f}\\,(\\text{ kJ mol}^{-1})`}></MathJax.Node>:</p>
          </MathJax.Provider>
          <p className="eqn">C(g, at) = 715</p>
          <p className="eqn">Cl(g, at) = 122</p>
          <p className="eqn">CCl<sub>4</sub>(l) = &#8211;135</p>
        </React.Fragment>
      );

      const feedEqTBE = `\\begin{eqnarray*}
        TBE_{\\text{CCl}_4} & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} -
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        1306 \\text{ kJ/mol} & = & [715 + 4(122)] \\text{ kJ/mol} - \\Delta H^{\\circ}_\\text{f}(\\text{CCl}_4)
        \\end{eqnarray*}`;
      const feedEqCCl4 = `\\Delta H^{\\circ}_\\text{f}(\\text{CCl}_4)  = -103 \\text{ kJ/mol}`;
      const feedEqHvap = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{vap} & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} -
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & -103 \\text{ kJ/mol} - (-135 \\text{ kJ/mol}) \\\\
        & = & 32 \\text{ kJ/mol}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Let us first write down the two reactions described in the question, the
            one that corresponds to the total bond energy of CCl<sub>4</sub>(g):</p>
            <p className="eqn">CCl<sub>4</sub>(g) &#8594; C(g, at) + 4 Cl(g, at)</p>
            <p>and the vaporization of CCl<sub>4</sub>(l):</p>
            <p className="eqn">CCl<sub>4</sub>(l) &#8594; CCl<sub>4</sub>(g)</p>
            <p>Express the total bond enthalpy in terms of the enthalpies of formation
            of the products and reactants:</p>
          <MathJax.Node formula={feedEqTBE}></MathJax.Node>
          <p>Thus, the enthalpy of formation of CCl<sub>4</sub>(g) is</p>
          <MathJax.Node formula={feedEqCCl4}></MathJax.Node>
          <p>Now find the enthalpy of vaporization:</p>
          <MathJax.Node formula={feedEqHvap}></MathJax.Node>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: (<React.Fragment>&#916;<i>H</i>&#176;<sub>vap</sub></React.Fragment>),
          units: "kJ/mol"
        }, feedback};
    }()
  },
  {
    "_id": 27,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 18,
    "type": "MC",
    "questionBody": function() {
      let incorrectEqs = [
        (<React.Fragment>N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &#8594; 2 NH<sub>3</sub>(g)</React.Fragment>),
        (<React.Fragment>2 CO(g) + O<sub>2</sub>(g) &#8594; 2 CO<sub>2</sub>(g)</React.Fragment>),
        (<React.Fragment>Ba<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2-</sup>(aq) &#8594; BaSO<sub>4</sub>(s)</React.Fragment>),
        (<React.Fragment>C<sub>7</sub>H<sub>16</sub>(l) + 11 O<sub>2</sub>(g) &#8594; 7 CO<sub>2</sub>(g) + 8 H<sub>2</sub>O(l)</React.Fragment>),
        (<React.Fragment>Mg(s) + Cl<sub>2</sub>(g) &#8594; MgCl<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>I<sub>2</sub>(g) &#8594; I<sub>2</sub>(s)</React.Fragment>),
        (<React.Fragment>H<sub>2</sub>O(l) &#8594; H<sub>2</sub>O(s)</React.Fragment>),
        (<React.Fragment>O<sub>2</sub>(g) + 2 F<sub>2</sub>(g) &#8594; 2 OF<sub>2</sub>(g)</React.Fragment>)
      ];
      let correctEqs = [
        (<React.Fragment>C<sub>2</sub>H<sub>5</sub>OH(l) &#8594; C<sub>2</sub>H<sub>5</sub>OH(g)</React.Fragment>),
        (<React.Fragment>C<sub>6</sub>H<sub>6</sub>(s) &#8594; C<sub>6</sub>H<sub>6</sub>(l)</React.Fragment>),
        (<React.Fragment>CaCO<sub>3</sub>(s) &#8594; CaO(s) + CO<sub>2</sub>(g)</React.Fragment>)
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
    "_id": 28,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 19,
    "type": "MC",
    "questionBody": function() {
      let imgData = "data:image/png;base64,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";

      var description = (
        <React.Fragment>
          <p>Which one of the following statements best explains why the reverse
          process is not spontaneous. Take the water as the system and the brick
          as the surroundings.</p>
        <p><img src={imgData} alt="Reversing thermal equilibrium is not spontaneous." width="80%"/></p>
        </React.Fragment>
      );

      var options = [
        {text: (
          <React.Fragment>
            <MathJax.Provider>
              <p><MathJax.Node inline formula={"\\Delta S_\\text{surr} < 0"}/> only</p>
            </MathJax.Provider>
          </React.Fragment>),
        correct: false,
        id: 0},
        {text: (
          <React.Fragment>
            <MathJax.Provider>
              <p><MathJax.Node inline formula={"\\Delta S_\\text{surr} > 0"}/> only</p>
            </MathJax.Provider>
          </React.Fragment>),
        correct: false,
        id: 1},
        {text: (
          <React.Fragment>
            <MathJax.Provider>
              <p><MathJax.Node inline formula={"\\Delta H_\\text{surr} = -\\Delta H_\\text{sys}"}/></p>
            </MathJax.Provider>
          </React.Fragment>),
        correct: false,
        id: 2},
        {text: (
          <React.Fragment>
            <MathJax.Provider>
              <p><MathJax.Node inline formula={"\\Delta S_\\text{sys} < 0"}/> only</p>
            </MathJax.Provider>
          </React.Fragment>),
        correct: false,
        id: 3},
        {text: (
          <React.Fragment>
            <MathJax.Provider>
              <p><MathJax.Node inline formula={"\\Delta S_\\text{sys} + \\Delta S_\\text{surr} < 0"}/></p>
            </MathJax.Provider>
          </React.Fragment>),
        correct: true,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>According to the second law of thermodynamics, any spontaneous process
          must increase the entropy of the <i>universe</i>, which consists of the
          system and the surroundings. In the case of reverse process shown,
          the sum of the entropy changes of the brick and the water would be
          negative, so the entropy of the universe would decrease.</p>
        </React.Fragment>
      );
      return {description, options, feedback};
    }()
  },
  {
    "_id": 29,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 2,
    "idInExam": 20,
    "type": "numeric",
    "questionBody": function() {
      let answer = 464;

      var description = (
        <React.Fragment>
          <p>Consider the following reaction:</p>
          <p className="eqn">N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &#8651; 2 NH<sub>3</sub>(g)</p>
          <MathJax.Provider>
            <p><MathJax.Node inline formula={"\\Delta S^\\circ_\\text{rxn} = -198.75 \\text{ J K}^{-1}"}/>&#160;&#160;&#160;
            <MathJax.Node inline formula={"\\Delta H^\\circ_\\text{f}(\\text{NH}_3) = -46.11 \\text{ J K}^{-1}"}/></p>
          </MathJax.Provider>
          <p>Assume that these values are independent of temperature. Calculate
          the maximum temperature at which the reaction is still spontaneous.</p>
        </React.Fragment>
      );

      const feedEqGibbs = "\\Delta G_\\text{rxn} = \\Delta H_\\text{rxn} - T \\Delta S_\\text{rxn} < 0";
      const feedEqdH = `\\begin{eqnarray*}
        \\Delta H_\\text{rxn} & = & 2 (-46.11 \\text{ kJ/mol}) - [0 + 3(0)] \\text{ kJ/mol} \\\\
        & = & -92.22 \\text{ kJ/mol},
        \\end{eqnarray*}`;
      const feedEqT = `\\begin{eqnarray*}
        && -92220 \\text{ J/mol} - T(-198.75 \\text{ J/K}) < 0 \\\\
        && T < \\frac{92220 \\text{ J/mol}}{198.75 \\text{ J/K}} \\\\
        && T < 464 \\text{ K}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>A reaction occurs spontaneously if <MathJax.Node inline formula={"\\Delta G_\\text{rxn} < 0"} />.
            The formula that describes the temperature dependence of Gibbs free energy is</p>
            <MathJax.Node formula={feedEqGibbs}/>
            <p>We are given the entropy change, and we can calculate the enthalpy change of the reaction as</p>
            <MathJax.Node formula={feedEqdH}/>
            <p>where we substituted zero for the enthalpies of formation of N<sub>2</sub> and H<sub>2</sub> since
            they are in their standatd states.</p>
            <p>Now we can substitute available data in the Gibbs equation and solve for temperature.
            Note that the enthalpy change has to be converted to joules in order to
            be consistent with the entropy change.</p>
            <MathJax.Node formula={feedEqT}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>T</i></React.Fragment>),
        units: "K",
      }, feedback};
    }()
  },
  {
    "_id": 30,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 3,
    "idInExam": 21,
    "type": "numeric",
    "questionBody": function() {
      let k1String = (Math.random()*(6.9e-13 - 6.1e-13) + 6.0e-13).toPrecision(2);
      let k1 = Number.parseFloat(k1String);
      let k2String = (Math.random()*(1.9e-10 - 1.1e-10) + 1.1e-10).toPrecision(2);
      let k2 = Number.parseFloat(k2String);
      let answer = k2/Math.pow(k1, 2);
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>Given the following two equilibria:</p>
          <table>
            <tbody>
              <tr>
                <td><p className="eqn">1/2 N<sub>2</sub>(g) + 1/2 O<sub>2</sub> &#8651; NO(g)</p></td>
                <td style={{paddingLeft: "20px"}}><p><i>K</i><sub>1</sub> = {k1String}</p></td>
              </tr>
              <tr>
                <td><p className="eqn">2 NO<sub>2</sub>(g) &#8651; 2 NO(g) + O<sub>2</sub>(g)</p></td>
                <td style={{paddingLeft: "20px"}}><p><i>K</i><sub>2</sub> = {k2String}</p></td>
              </tr>
            </tbody>
          </table>
          <p>Calculate <i>K</i> for the reaction</p>
          <p className="eqn">2 NO<sub>2</sub>(g) &#8651; N<sub>2</sub>(g) + 2 O<sub>2</sub>(g)</p>
        </React.Fragment>
      );

      const feedEq = `\\begin{eqnarray*}
        K & = & K_1^{-2} K_2 \\\\
        & = & \\frac{K_2}{K_1^2} \\\\
        & = & \\frac{${k2String}}{${k1String}} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>In order to produce the target reaction, we need to multiply the
            first one by (&#8211;2) and sum it with the second reaction as is.
            This translates into the following expression for the target constant:</p>
            <MathJax.Node formula={feedEq} />
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i></React.Fragment>),
        units: "",
      }, feedback};
    }()
  },
  {
    "_id": 31,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 3,
    "idInExam": 22,
    "type": "numeric",
    "questionBody": function() {
      let pIString = (Math.random()*(0.110 - 0.09) + 0.09).toPrecision(3);
      let pI = Number.parseFloat(pIString);
      let pNO2String = (Math.random()*(0.09 - 0.07) + 0.07).toPrecision(2);
      let pNO2 = Number.parseFloat(pNO2String);
      let change = pNO2/2;
      let changeString = change.toPrecision(2);
      let pN2O4 = pI - change;
      let pN2O4String = pN2O4.toPrecision(2);
      let answer = Math.pow(pNO2, 2)/pN2O4;
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>Consider the following equilibrium:</p>
          <p className="eqn">N<sub>2</sub>O<sub>4</sub>(g) &#8651; 2 NO<sub>2</sub>(g)</p>
          <p>Pure N<sub>2</sub>O<sub>4</sub>(g) was introduced into a flask at
          an initial pressure of {pIString}&nbsp;atm. When the system reached
          equilibrium, the pressure of the NO<sub>2</sub>(g) was {pNO2String}&nbsp;atm.
          What is the value of the equilibrium constant, <i>K</i><sub>p</sub>,
          for this reaction?</p>
        </React.Fragment>
      );

      const feedEq = `\\begin{eqnarray*}
        K_\\text{p} & = & \\frac{P_{\\text{NO}_2}^2}{P_{\\text{N}_2\\text{O}_4}} \\\\
        & = & \\frac{(${pNO2String})^2}{${pN2O4String}} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <p>Starting with the initial pressures and the equlibrium pressure of NO<sub>2</sub>,
            let us fill in an ICE table for the reaction, all amounts are in atm.</p>
            <table className="ice">
              <thead>
                <tr>
                  <th></th>
                  <th>N<sub>2</sub>O<sub>4</sub>(g)</th>
                  <th>&#8651;</th>
                  <th>2 NO<sub>2</sub>(g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>initial</td>
                  <td>{pIString}</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;{changeString}</td>
                  <td></td>
                  <td>+{pNO2String}</td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>{pIString} &#8211; {changeString}</td>
                  <td></td>
                  <td>{pNO2String}</td>
                </tr>
              </tbody>
            </table>
            <p>Now, using the equilibrium pressures, we can calculate the constant:</p>
            <MathJax.Provider>
              <MathJax.Node formula={feedEq} />
            </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i><sub>p</sub></React.Fragment>),
        units: "",
      }, feedback};
    }()
  },
  {
    "_id": 32,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 3,
    "idInExam": 23,
    "type": "bins",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>Given the reaction below,</p>
          <p className="eqn">CO(g) + 2 H<sub>2</sub>(g) &#8651; CH<sub>3</sub>OH(g)</p>
          <p>in which direction will the equilibrium shift if the system is
          changed by:</p>
        </React.Fragment>
      );

      var items = [
        {text: (<React.Fragment>Increasing the pressure of the system by compression</React.Fragment>),
          binId: 0,
          id: 0},
        {text: (<React.Fragment>Adding CO(g)</React.Fragment>),
          binId: 0,
          id: 1},
        {text: (<React.Fragment>Adding CH<sub>3</sub>OH(g)</React.Fragment>),
          binId: 1,
          id: 2}
      ];

      var bins = [
        {text: (<React.Fragment>To the right &#8658;</React.Fragment>),
        id: 0,
        items: [0, 1]},
        {text: (<React.Fragment>To the left &#8656;</React.Fragment>),
        id: 1,
        items: [2]}
      ];

      var feedback = (
        <React.Fragment>
          <p>According to Le Chatelier&#8217;s principle, adding reactants
          shifts equilibrium to the right, and adding products shifts
          equilibrium to the left. The effect of changing the pressure
          depends on the reaction. Since the number of moles of gases decreases
          in this reaction, the equilibrium is shifted to the right.</p>
        </React.Fragment>
      );

      return {description, answer: {items, bins}, feedback};
    }()
  },
  {
    "_id": 33,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 3,
    "idInExam": 24,
    "type": "numeric",
    "questionBody": function() {
      let answer = Math.exp(-((-234800 + 277600) - 298.15*(281.6 - 160.7))/(8.314*298.15));
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Determine the equilibrium constant for the evaporation of ethanol,
          C<sub>2</sub>H<sub>5</sub>OH at 25&nbsp;&#176;C.</p>
        <MathJax.Provider>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th></th>
                <th><MathJax.Node inline formula={"\\Delta H^\\circ_\\text{f} (\\text{ kJ mol}^{-1})"}/></th>
                <th><MathJax.Node inline formula={"S^\\circ (\\text{ J mol}^{-1}\\text{ K}^{-1})"}/></th>
              </tr>
              <tr>
                <td>C<sub>2</sub>H<sub>5</sub>OH(l)</td>
                <td>&#8211;277.6</td>
                <td>160.7</td>
              </tr>
              <tr>
                <td>C<sub>2</sub>H<sub>5</sub>OH(g)</td>
                <td>&#8211;234.8</td>
                <td>281.6</td>
              </tr>
            </tbody>
          </table>
        </MathJax.Provider>
        </React.Fragment>
      );

      const feedEqdG = `\\begin{eqnarray*}
        \\Delta G & = & \\Delta H - T \\Delta S \\\\
        & = & (-234800 + 277600) \\text{ J mol}^{-1} -
        ((273.15 + 25) \\text{ K})(281.6 - 160.7) \\text{ J mol}^{-1}\\text{ K}^{-1} \\\\
        & = & 4754 \\text{ J mol}^{-1}
        \\end{eqnarray*}`;
      const feedEqdGK = `\\begin{eqnarray*}
        \\Delta G^\\circ & = & -RT \\ln{K} \\\\
        \\ln{K} & = & -\\frac{\\Delta G^\\circ}{RT} \\\\
        K & = & e^{-{\\Delta G^\\circ}/({RT})}
        \\end{eqnarray*}`;
      const feedEqK = `\\begin{eqnarray*}
        K & = & \\exp{\\Bigg(-\\frac{4754 \\text{ J mol}^{-1}}{(8.314 \\text{ J mol}^{-1}\\text{ K}^{-1})(298.15 \\text{ K})}\\Bigg)} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
          <p>Equilibrium constants are related to the Gibb&#8217;s free energy,
          so, first, find the <MathJax.Node inline formula={"\\Delta G"}/> of the
          evaporation of ethanol:</p>
          <MathJax.Node formula={feedEqdG}/>
          <p>To find the constant, rearrange the following formula:</p>
          <MathJax.Node formula={feedEqdGK}/>
          <p>Substitute the data, note that <MathJax.Node inline formula={"\\Delta G"}/> must
          be in joules for this equation to work.</p>
          <MathJax.Node formula={feedEqK}/>
        </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i></React.Fragment>),
        units: "",
      }, feedback};
    }()
  },
  {
    "_id": 34,
    "courseId": "1302",
    "examName": "Midterm 2015",
    "chapterId": 3,
    "idInExam": 25,
    "type": "MC",
    "questionBody": function() {
      let kValues = [1.0e12, 2.0, 1.0, 0.5, 1.0e-12];
      let text = ["Large negative", "Small negative", "Zero", "Small positive", "Large positive"];
      let idx = Math.floor(Math.random()*kValues.length);

      var description = (
        <React.Fragment>
          <p>For a reaction, <i>K</i><sub>eq</sub> = {kValues[idx].toPrecision(2)}.
          Which one of the following best describes the value of &#916;<i>G</i>&#176;
          associated with this equilibrium constant?</p>
        </React.Fragment>
      );

      var options = text.map(option => {
        return {
          text: (<React.Fragment><p>{option}</p></React.Fragment>),
          correct: text.indexOf(option) === idx,
          id: text.indexOf(option)
        };
      });

      var feedback = (
        <React.Fragment>
          <p>The larger the equilibrium constant is, the more spontaneous is the process,
          hence its &#916;<i>G</i>&#176; is more negative. In this case,
          &#916;<i>G</i>&#176; must be {text[idx].toLowerCase()}.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  //////////////////////////////////////// 1301 MIDTERM 2013 ///////////////////////////////////////////////////////////////////////
  {
    "_id": 100,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 1,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>Which of the following best describes the term &lsquo;interference&rsquo; as it applies
          to waves?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>The interaction of a wave with a particle, such that the energy of the particle increases.</p>),
        correct: false,
        id: 0},
        {text: (<p>The interaction of a wave with a particle, such that the energy of the particle decreases.</p>),
        correct: false,
        id: 1},
        {text: (<p>The interaction of two waves of the same frequency such that they reflect and change their direction of propagation.</p>),
        correct: false,
        id: 2},
        {text: (<p>The interaction of two waves of the same frequency such that their frequencies add together.</p>),
        correct: false,
        id: 3},
        {text: (<p>The interaction of two waves of the same frequency such that their amplitudes either add or subtract from each other.</p>),
        correct: true,
        id: 4},
      ];

      var feedback = (
        <p>Interference is such an interaction that the amplitudes of the two waves either add up (constructive
          interference, occurs when the maxima and the minima of the two waves are aligned) or
          subtract from each other (destructive interference, occurs when the maxima of one wave are aligned
          with the minima of the other one).</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 101,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 2,
    "type": "MC",
    "questionBody": function() {
      let series = [
        {name: "Lyman", n: 1},
        {name: "Balmer", n: 2},
        {name: "Paschen", n: 3}
      ];
      let idx = Math.floor(Math.random()*series.length);
      let n = series[idx].n;
      let m = Math.floor(Math.random()*(4) + (n+1));
      let mWords = ["second", "third", "fourth", "fifth", "sixth", "seventh"];
      let mWord = mWords[m-2];
      let rydbConst = 1.097e7;
      let lambdaString = (1/(rydbConst*(1/Math.pow(n, 2) - 1/Math.pow(m, 2)))*1e6).toPrecision(4);
      let lambda = Number.parseFloat(lambdaString);
      let lM = lambda/1e6;
      let lMString = lM.toPrecision(4);

      const eqRydberg = `\\frac{1}{\\lambda} = R_\\text{H}\\Big( \\frac{1}{n^2} - \\frac{1}{m^2}\\Big)`;
      var description = (
        <React.Fragment>
          <p>The electron in a hydrogen atom falls from the {mWord} Bohr orbit
          (<i>m</i> = {m}) to one of the lower-lying orbits and emits a photon
          of light with a wavelength of {lambdaString}&nbsp;&mu;m. To which
          series below does this line belong? <i>Hint:</i> use the Rydberg
          equation below.</p>
        <MathJax.Provider>
          <MathJax.Node formula={"R_\\text{H} = 1.097 \\times 10^7 \\text{ m}^{-1}"}/>
          <MathJax.Node formula={eqRydberg}/>
        </MathJax.Provider>
        </React.Fragment>
      );

      var options = series.map(aSeries => {
        return {
          text: (<p>{aSeries.name} (<i>n</i> = {aSeries.n})</p>),
          correct: aSeries.n === n,
          id: series.indexOf(aSeries)
        };
      }).concat([
        {text: (<p>Bracket (<i>n</i> = 4)</p>),
        correct: false,
        id: 3},
        {text: (<p>Hund (<i>n</i> = 9)</p>),
        correct: false,
        id: 4}
      ]);

      const feedEqLambda = `\\begin{eqnarray*}
        \\lambda & = & ${lambdaString}\\,\\mu\\text{m} / 10^6\\,\\mu\\text{m/m} \\\\
        & = & ${lMString} \\text{ m}
        \\end{eqnarray*}`;
      const feedEqM = `\\begin{eqnarray*}
        \\frac{1}{n^2} - \\frac{1}{m^2} & = & \\frac{1}{\\lambda R_\\text{H}} \\\\
        \\frac{1}{n^2} & = & \\frac{1}{\\lambda R_\\text{H}} + \\frac{1}{m^2} \\\\
        n & = & \\sqrt{\\frac{1}{{1}/{\\lambda R_\\text{H}} + {1}/{m^2}}} \\\\
        n & = & \\sqrt{\\frac{1}{{1}/{(${lMString}\\text{ m})(${rydbConst.toPrecision(4)} \\text{ m}^{-1})} + {1}/{${m}^2}}} \\\\
        & = & ${n}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
          <p>Note that the Rydberg constant for the equation is given in inverse meters,
          so, the wavelength has to be converted to meters:</p>
        <MathJax.Node formula={feedEqLambda} />
        <p>Rearrange the Rydberg equation and substitute all the data:</p>
        <MathJax.Node formula={feedEqM} />
        </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 102,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 3,
    "type": "MC",
    "questionBody": function() {
      let orbitals = [
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4RmERXhpZgAATU0AKgAAAAgACQALAAIAAAAmAAAIhgESAAMAAAABAAEAAAEaAAUAAAABAAAIrAEbAAUAAAABAAAItAEoAAMAAAABAAIAAAExAAIAAAAmAAAIvAEyAAIAAAAUAAAI4odpAAQAAAABAAAI9uocAAcAAAgMAAAAegAAEToc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAAAr8gAAAJxAACvyAAAAnEFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAMjAxODowODoyMCAxOTowMTo0MgAABKABAAMAAAABAAEAAKACAAQAAAABAAADIKADAAQAAAABAAACWOocAAcAAAgMAAAJLAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAEYgBGwAFAAAAAQAAEZABKAADAAAAAQACAAACAQAEAAAAAQAA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AAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAOOEJJTQQCAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEJJTQQwAAAAAAAPAQEBAQEBAQEBAQEBAQEBADhCSU0ELQAAAAAABgABAAAAGzhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANFAAAABgAAAAAAAAAAAAACWAAAAyAAAAAIAE8AUgBCAEkAVABBAEwAUwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAADIAAAAlgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRs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AAAPAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwAAAAEwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgAEMAUwA2AAAAAQA4QklNBAYAAAAAAAcAAwAAAAEBAP/hOM9odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+DQoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4NCgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IldpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA4LTIwVDE4OjUyOjUyLTA0OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA4LTIwVDE5OjAwOjU3LTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOC0yMFQxOTowMDo1Ny0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCMjA0QjY3Q0NBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+DQoJCQk8eG1wTU06SGlzdG9yeT4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0RXZ0OndoZW49IjIwMTgtMDgtMjBUMTg6NTI6NTItMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTIwNEI2N0NDQTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0yMFQxOTowMDo1Ny0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RkIyMDRCNjdDQ0E0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0RXZ0OndoZW49IjIwMTgtMDgtMjBUMTk6MDA6NTctMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJPC9yZGY6U2VxPg0KCQkJPC94bXBNTTpIaXN0b3J5Pg0KCQkJPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkEyMDRCNjdDQ0E0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIvPg0KCQk8L3JkZjpEZXNjcmlwdGlvbj4NCgk8L3JkZjpSREY+DQo8L3g6eG1wbWV0YT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACGAIYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK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",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4SY+RXhpZgAATU0AKgAAAAgACQALAAIAAAAmAAAIhgESAAMAAAABAAEAAAEaAAUAAAABAAAIrAEbAAUAAAABAAAItAEoAAMAAAABAAIAAAExAAIAAAAmAAAIvAEyAAIAAAAUAAAI4odpAAQAAAABAAAI9uocAAcAAAgMAAAAegAAEToc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAAAr8gAAAJxAACvyAAAAnEFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAMjAxODowODoyMCAxOTowMjoxOAAABKABAAMAAAABAAEAAKACAAQAAAABAAADIKADAAQAAAABAAACWOocAAcAAAgMAAAJLAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAEYgBGwAFAAAAAQAAEZABKAADAAAAAQACAAACAQAEAAAAAQAAEZgCAgAEAAAAAQAAFJ0AAAAAAAAAYAAAAAEAAABgAAAAAf/Y/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAhgCGAwEhAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9/ooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACm7hnGegzQAyS4hij8ySWNE67mYAVDNqNnbybJry3jbYH2vIAducZx6Z4zQA+S8ghXMs8Ufyl8s4HygZJ+mOaSO9t5o5JIriJ0jkaN2VwQrKcMCexBBBHrQBL5qbwu9dxGQM8n/ORT/0oATNOoAKKACigAooAKY7hBlmwMgdKAGuzKwOTggjGOAcZ5rOuL1rdo5I0+13E6bFhieNVLLnJBYg9/f7vSgDlH8Q3X7yfTZ/7RnS7fTZbK52pIJhG5CjbgLl1QlvmBQsRjFcfbeJtXk02xu0XWdThvphBK0jrFDMiStH8kg2+UT1Bcq5aPngkkAq6vrWmW2ucxXWkadf/alv0m0+3WQRJ/yzHJ2q8krKXYDdwA3GaRdZW60OR9P1Q2F9F/aK6siphZvLYTl/3OFB4SPzNuSsxAyRQB19n40ezls4b68jRrsSJubSZoRaTJ5R8rDNkrsfkjptZiQOB2NprkN3cTRxvE7R3ElsyrKjF5UXJRcMRnrkEgjbyBQBqvFGzrI28MGDDDsBnp06d+lPWTc7KN3ynByhH5HvQBJRQAUUAFFACHOOOtQBnlTbhTlTlw3AYdvWgCre3wRkhiuIY5ZG8tPNU4Z+u0ep2q3HtXnmta3HdXcdhcKbK0gMwW1tkEhursu6rGCF3qQu2Q4UbfMUsemQDi7rX7/TZ9SurNrB47W6L2lxcl7e9ZkhcK0jyHM3lhwrIwJJlx8owRi6xbf6DY+GbhTaWb3Fv8sdtHKsASE5eWSGTBzu3vwGwxOTigBy3eiu5vY47+GWe1W3jjuJCYbAFjmQIIdpgRmjZQDkltx5wRmRRvZaBdxyaxdTS6hZvdDEDOtyvnBiq5YFVbG5zgN2+YcUAaMd0mieJr59lraW0tnItvZXNw9vK8rKVkkjYZELCSPH70qSh6em6msaYNR1m5msGXTlEklhcrPMD5iRq0iwSqhVSZVb5toLMxwT0oA9Z8M6/wD21bxyNFcpdSbnmiXgWrHOIm34JcLgNwQGHYGulj8vzCVi2yMo3cc4HQE/jQBLG5eNWKFCQCVbGR+VPoAKKACkoAazMGUBRgnBOelV7q4it4JLghn2Iz7EyWYAHoO5oA8m8fXrpocFzczDUYhfA2+m2c4RyzMGik8xgZY3ClRtA+8/J2nFctqcuoLqBvp9F1G1mhmn1LzH+UxOZo/NUyBNrJGiOFc55lUAHANAGPHLNqd5evNeRTR3eo3Fzb2qXMqLbzs553In8aM2OSOMnjIHVWXhqO/eYa0t7NC0q+RL8hAAVFLsvG4uAA2Rz74oAjsfC8A1KXTY72O4lluh5DBvNKIhboz8AYbHIxnjqKI/BdzYvFbwobqGNFMkz7WZlTG7cQCNhUn5Cee/NAHJyQDTry0vriwtb+ee3EhjvbeQfabiRyxLfvDhiEGGXHoRioLTUbL7P/YWogzaYdSa+u47dCJCAoCQpKGCtE+cD7pByQOlAHU6Nqc7WWjW5topb2zu5ElvBbjzpImjH2pgBl3IGUEnG7gnJGa9001rby5TbRoI0kxujkUhhtBByOvykdcnpQBprkjJUj2NOoAKKACo5ATGQN3/AAE80AVJ7pYYJp5ZQPKTzDHnG3A6E/WuH8SX8mq3NlYveXmnXUu66srnTpJZo5mWKQ7Mhdu7GXCgsGKY74IBxFxqGrXt5PFaPPNcy3trrV3HdXCpG0CwhBFIpC43SD5+NqhUxuIrMil1C+0WNbETm3tJo1uLu4KSC3csJFjJjDFo4mDAh+fuEAYAoA6uyi0rTbC2EeqNIyQxiHzXHyBlxsGRj+Fuff6VyGreJo1uY49KnmtEhkDear+ZvznuCcgZOR6duBQBmWfjieFknkt/NheMQvCsh68nIzkHn5vTNdzpPjHRdUVGujGHJVRHIo+XK85PGe3X0B60AaB02TUNOkKskaTIUEoyxjBJOVBJJGcZU9c15fqVsdPeZbuK3gjhjP2oGQW0ku8HCoh3L02ll2cbj65oA3XtHN7p1xJbXlw9rFb2umXkJRZTCfKCxwFSFkkRnlRnIK4AODXrnhf7as+oC/jle8V/3oin8y3EnzAukhAIJAAZcDb1ChWoA6yJpJUCszpIpDN8o6ddueh444q1QAUUAFRSyeXEzdcdB6mgDE8RXkQRLL7YtvJcsICwujE4R8hmTaCdwHIJwB1zxXk/iOb7LLo8ug6gmn/avO+0XlxZpdNJFGrLvkwJPlURoCwAALuzck4AMr7Jc2qzXJeya9s54orb+z5ftYlh8hPL2o6gfZ1DA7+u4nHbPTR6DbeF9Bkll8+KKJCxjEnKZwW5BBOWIbnPI7UAefa1qU88trHdNFFcty3lE7QmDjapzjGTz+HvXPR2M1zJH/pLDy2ZFyTnA4Y+mevHoaAI44BLNDKqDDsBtzhVJ9DzgZqBh5UzPFKA0shXdkHGBzyTxn/9VAHq3gHXm1CM205RZouC5QbpsAcnHGCCfyp/i/TJLi7bU7Zbh5RaSSP5TBkACjHyllxgZcElgSOlAHN6dpV7PNpuDoaXV7KrvvCWX2eUQF4SEC4xGWDHC5f5Rgjmu68AXbXGpwardNqSoIjpttJPDsS4VI8y+UqFtrmWNjjgFVGDlSKAPVbO6WRIyPNxyrblY/MDzzjseOavKwZQynIPIIoAbGJAP3jhvouKKAJKZInmRshLDcMZU4P5igDk/E8VzFbSXypZwSWamUzSSS/NGOMsUTO4DLBRk7guK8Xn1Uiay1QXDWdrBYSKbbULpZZbtZWaeR43+UMGbMTdOFK/fOAAUrS2tLLVtLtvnSGeOK78vzvJS3n8sMqYkUlisboWwwzuGMYOex1iKe48Pspja4SYfvclHBBbJKkAEE4+6QcgjmgDyma5Zr552UMry7pG3Pz1wCOhXHb2ouFj23axRbJHO1XZ8rg4OOPVRjvQBDukDBgN4VsMfvAAHOcYwfb9atHZIkzNbgiZSq7cA8Dg47fWgDS8CW0V54hit8NElxG2x2RucYxnnoApHrzXpHjTT4j4VuoUWEeeiLNLIxVF2sCACAcZC7QAOpx9QDz1r8al9vvElhmviENxcxyyxx3iIjNKhUqq+UIhtK5BYrHgcnPaeCby3utVhtXttSht/JKxzyzSN9rnCJIiZjYASEGRioO10CZBIyAD2m0B2xKBIscWduRt4xgcd/xq/gYxjigAwD2ooAWoLooLSXd5m3ac+UCW/DHOaAMTW571NQt7eG1kkguRsM6TBfszgMVYLtO7nHXI46cc+QeIFtbi60KK4Freaysc2JZ3MdvlZpYo/lijXBkd2YMMfMi54GaAMf7VD/YU9rpVjd6Xqt7eRWl5FNO7uiS27MqAOzkqSpJb5T8wGOBXZBNG1zwikSTQ/PFi3JmXfuQELuZMHPGOP1oA8m1uyura+kaS5Ugt5jCTJI+Y8n14zz71QV3uJZ0uIlIkjLEqMZODgrjr049aAJoY4GcoZXyyMyGbjJIA5Az2z2qG7T7TDa/PtRT5O0t93GSwOB3oA7jwRotzGYddYxy20Z2qZGCgKDkuR07YA71v+KXeCxu7dU87UGEMiwKxja5Qy4XggkDOTxgjGelAHKeHBbzXiTTWljfW9lIsbLPIFA8uNttxOiDIiRo+SeG3AEE4rvPA9jL9qtdTEN99tuY5b92up2LOeYgpVwUiMcciEMCGKvt2kZwAesW4+ziGIZk+Yxnb0TAJHHbgY49av0AFFABRQBm3NhblGdoN4D+eWaZgQ64Iwe33R7cV5Df6dDqOnRpql8J2uIRb211JfrO9nPKpjMcx3ASIysGBXJBD4+blgDhxouqterbWV7BPCIrqO1EMotUEohQXBhCgEn5iCu0cD+KtTw1NLY/uVzLaTb9u+TcYnRFDxZKq4ZMgbf4uoIoA0te8Nz3gdlsXeRkaUzMwARRwPbBI6CuBu9Pe1ureSaGVFa3DKCv8eCdvHHc47+1AELRTbWidirykSAbW3Z4+Ve2fmHOK6jT/AATfXqre6tZpEkobIKBGdDjLcc7+OwA9PSgDs7K7stL0O6tozIk1rE8zwXWAw4Jw4zwBknP/AOquHvJ559eupYru1Fl5yAW9zbSSRNIVYJuRVOJcJkAYPPJoALjQbqATafDFJc3l9HGNQM6tDb2yBDKyyTSKhy2yOXgqPlZccZr07w1Ypb+Jc2cNxc/2lbqJdQnupW+0IBl2dJGYo8Y8lUD/ADYZxyBmgD09IgSHYljnK7gPl+lTUAFFABRQBUYF55HWFxJGdql3IV+M9s8c+nWuP8Rwy6Kl3crbJPZyyW80UFvI6TGaOXeqIOVKlwnygAsZG+hAPNdX8LzTSaTGLhtTt9RlnkiaK1/cyysGlkLDzFeOY4dTgABdoHKsa5GCLUra61DVBJZIYFniSI3XkzWqwmNCF3DbISgCbvmzt5II5AO2PiNIdTbT7uaNIZlM8FzbXBkt1JX5AZCBkZDqWIxlelX7e10XVZyb2MC7iVGkLyAJsbO1ABgE8H5gOwx1oAkfStHTV54bKALNAqzGBSHZkJBAC47EkEAjHFWLzV768068ggspENu48y4dEJt4z84LDdljtPQDj1zQBx/iCSW0vVt7SzuHt7+CWU+XKY227V3eQy/LJw2Bne2eMCs3VJdbjkl8SXVlIEu9Ta2a0ntGZPPUbYRs3/vGTy/7pGcj5s4oA3dHtobXVfskF1BJFFGbGcxSgSOjQtIHEUsYYXDTTkLgnaxCFOM1654fhinhS70+TfptwPmC20cbTv8AdaWU9XYsP9nHcGgDpoIzHBGjYLKACR0qWgAooAKKAG54z0rOuYZ3MEzRNK8bDMMbLtbj73zDIweQQQeKAPOb7RrPQ7q1kGirHaRXi3VvLbzusk0ixSbVnO1WjQbcl23ElecgmuO/sOPQtR03QdavYorWC1ENncGeSOO3RypupYnCYZyJA4Z8Kp+T5sUAZRtL2TUoLmxmmsLO4a5uLiaP7PdRQ2yO0e4CNm3Rj5QzEDBZmAbNWtT0nURoV9LA6vIqRyWFvpCXABhSLbvDzKC0K71IYEht74I7ADdR027tpNLsvscr2bwkSJeSGU728tWjgm3BMMZFUYOBgluQas39rqtoJdbls75L+/lnsjbaeomLNjylKeXKDtVQQCRyyjgZoAXXJZIbGHzdSkTw6lhDp32iJPs/2jypG37Y5SStyJME7ivyxuSfmFXJIbmK6sr6a01D7LNKzXckVszTTE3CIsQntwE84SQl/MLLnzFXJFAHb6Xp1pbR20t+q3VnbiO8RpQoh84ylRMVZPO+0EYZi5PzORnvXf2UIhhZFjWJA7bEVQABn0H50AW6KACigAooAZJEksbRyIHRhhlbkEU3b5UZWJBwPlTOB9PagDNv9Ji1C9t7uYpH9nimRW2/vELqF3o+flIG4dD1PSuXvdLuv7VsGszb6db6dMrwMt48jTwNtEiBTHuVVQjCq23JHI20AcNd6XFrNrc39rDPBDpto1tBp9ukk7yL80jneGUPG7iSN+7BNvDPWff6XBJBpd1a2lvbz3EDXC6d5ggJ8uEGEojq6uqwyEMokXzGbkjYcAEWr20Y0i81SeWMaZLbRWFzb2yBikSEHYjJGwhUkiUFsnHlr342rm21aHWy6WVxdzzKs09mlyknmBpI4xC8zP5qLG0Q2uUOHd84CkkA2ItH0608Pi1s4UvhMsNjcQGye48tlHl/vbfzB5bqgUs6SKSQW29DXWJ4XhluWv7xR/bV0DFJdQnyXiiDZxHt3bex5JOT97pgA39MsLaxWYW+5/Pfz5JTg+YxAGcjqcKK0KACigAooAKKACo5oUnhaKTdscYO1ip/Mc0APqrNbPLMzeY6o0RjwrcDP8WCMZFAGfeaHE1tG9vBbyahCnlw3M6DMYOAxTA+QkDOFABIFRp4bjt9DbTreRXLJ5fmXQafKZJ2HexJXk4GeO2KAA+FdMiimhs7O3ginjEUqKg2sqgKo2fcOAAPmB4om8L2l1DKl4PtslwUFxPOAJHRSCqhowuACOwoA0rfSrO1injggRVnkMkpb5vMYjBJznJIGKubV3bsDOMZoAbFFHBCkUahY0UKqjsBT6ACigAooAKKACigAooAMUmBQAuKKACigAooAKKACigAooAKKACigAooAKKACigAooAKKACigD//2QD/7Q4MUGhvdG9zaG9wIDMuMAA4QklNBCUAAAAAABAAAAAAAAAAAAAAAAAAAAAAOEJJTQQ6AAAAAADlAAAAEAAAAAEAAAAAAAtwcmludE91dHB1dAAAAAUAAAAAUHN0U2Jvb2wBAAAAAEludGVlbnVtAAAAAEludGUAAAAAQ2xybQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAAAAPcHJpbnRQcm9vZlNldHVwT2JqYwAAAAwAUAByAG8AbwBmACAAUwBlAHQAdQBwAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAOOEJJTQQCAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEJJTQQwAAAAAAAPAQEBAQEBAQEBAQEBAQEBADhCSU0ELQAAAAAABgABAAAAGzhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANFAAAABgAAAAAAAAAAAAACWAAAAyAAAAAIAE8AUgBCAEkAVABBAEwAUwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAADIAAAAlgAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAlgAAAAAUmdodGxvbmcAAAMgAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAJYAAAAAFJnaHRsb25nAAADIAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JUeXBlZW51bQAAABFFU2xpY2VCR0NvbG9yVHlwZQAAAABOb25lAAAACXRvcE91dHNldGxvbmcAAAAAAAAACmxlZnRPdXRzZXRsb25nAAAAAAAAAAxib3R0b21PdXRzZXRsb25nAAAAAAAAAAtyaWdodE91dHNldGxvbmcAAAAAADhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EFAAAAAAABAAAABs4QklNBAwAAAAABNMAAAABAAAAoAAAAHgAAAHgAADhAAAABLcAGAAB/9j/7QAMQWRvYmVfQ00AAf/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAHgAoAMBIgACEQEDEQH/3QAEAAr/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/APVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9D1VJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//R9VSSSSUpJJJJSkkkklKSSSSUpJVM3qvTsCPtmQyndxuPkT/31Sw+o4OdX6mJey5o0JadR/Wb9JqSmykkkkpSSSSSlJJJJKUkkkkpSSSSSn//0vVUkkklKSSSSUpJJJJSlT6vnt6d067McJFTSYMxPbdtVxVuoYjczDtxncWtLfvSU+SdZ6wDa3Kywc3KyW+q2t1jmVV1l3t3Gv8AS+r+j/RV/wA1V/wis9Hz8fCzMDrPT9+Ji3XOxcnDc4ODXsNYdUyz2etU+iyt6h1XoNmPYMXqVVzvs5f9myK3DeKy5u2r9OHstr9R77GrS6H9Xrs7Nw2Y1LsfpeKXPaZk7i6bXWW6+vdZG39Iz+b/ANEkp9LBkJnb9rtsbvzZ4+acCE6SkJOV6ugr9GPE7p/zdqkz1to9Tbu0kiSD+9+7tSsNrRLY+kJmT7e8NH56RvYLDXDpAmQ0kfDcAkpIkoteHAEA6+Igj71JJSkkkklKSSSSU//T9VSSSSUpJJJJSkkkklKSSSSUsWtOpAMJAAaAQnSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP8A/9T1VJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//V9VSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//1vVUl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKf/2QA4QklNBCEAAAAAAFUAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAATAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAQwBTADYAAAABADhCSU0EBgAAAAAABwADAAAAAQEA/+E4z2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4NCgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iV2luZG93cyBQaG90byBFZGl0b3IgMTAuMC4xMDAxMS4xNjM4NCIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMjBUMTg6NTI6NTItMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDgtMjBUMTk6MDA6MDYtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTIwVDE5OjAwOjA2LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjkyMDRCNjdDQ0E0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4NCgkJCTx4bXBNTTpIaXN0b3J5Pg0KCQkJCTxyZGY6U2VxPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0yMFQxODo1Mjo1Mi0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkY4MjA0QjY3Q0NBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTIwVDE5OjAwOjA2LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTIwNEI2N0NDQTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0yMFQxOTowMDowNi0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L3htcE1NOkhpc3Rvcnk+DQoJCQk8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODIwNEI2N0NDQTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5Ii8+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4VjmRXhpZgAATU0AKgAAAAgACQALAAIAAAAmAAAIhgESAAMAAAABAAEAAAEaAAUAAAABAAAIrAEbAAUAAAABAAAItAEoAAMAAAABAAIAAAExAAIAAAAmAAAIvAEyAAIAAAAUAAAI4odpAAQAAAABAAAI9uocAAcAAAgMAAAAegAAEToc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAAAr8gAAAJxAACvyAAAAnEFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAMjAxODowODoyMCAxODo1ODozMAAABKABAAMAAAABAAEAAKACAAQAAAABAAADIKADAAQAAAABAAACWOocAAcAAAgMAAAJLAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAEYgBGwAFAAAAAQAAEZABKAADAAAAAQACAAACAQAEAAAAAQAA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ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQABAEgAAAABAAE4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAHg4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAE4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAA44QklNBAIAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4QklNBDAAAAAAAA8BAQEBAQEBAQEBAQEBAQEAOEJJTQQtAAAAAAAGAAEAAAAbOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0UAAAAGAAAAAAAAAAAAAAJYAAADIAAAAAgATwBSAEIASQBUAEEATABTAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAMgAAACWAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAACWAAAAABSZ2h0bG9uZwAAAyAAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAlgAAAAAUmdodGxvbmcAAAMgAAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQUAAAAAAAEAAAAGzhCSU0EDAAAAAAHqQAAAAEAAACgAAAAeAAAAeAAAOEAAAAHjQAYAAH/2P/tAAxBZG9iZV9DTQAB/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAeACgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//0PVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9H1VJJJJSkkkklKSSSSUpQturpYbLXBjBy46AJWODGF5IaGgkkkAQBrucforiPrH9YcuvK+z11WPcS3Y5jSQKy5/wCjb6W21mU99VH6P7RVe/8AwtGOxJTv5P1qwaH+kATcAXGp5Fbg0Bz9pbbs23bGOf6Lvf6afG+tPTsh7AN7G2AuDi32hrdu57nCdn027a7PTu/4P9JWuEPRAzHq/b3UvsFpaNmM6HPa2trjTXZ6G2v/AAtrGfQ9Pf8A6StiZ/1ZrfU7L6Fm1ZtbbQ9zAQIIDNnr02F3pMdt+yO9vpejZ+k/nElPqNN7LmBzDvB03ARHxa73Iq8z+qv1lyacr7LeQ5ttkbHhzf0the9zbHNDmt2VBvo+y2y7HotXo+Pa22lr2RtI0jj5JKSpJJJKUkkkkpSSSSSlJJJJKf/S9VSSSSUpJJJJSkkkklPP/WvPbj4NrGvNZZXZbIGhLGPO2wk7Nnu9Sz1GWV1/6OxcT0jIrot6l1i6hlr8AN9BnuFbLHuP0mxu9Kn6dVns/wBDv9O3eu0+uGLZfhwGMewhxZPtcLwywY7/AFwf0LG79/r/APab0vVXn/SLaWZl/S8qk0VZlfoONodAtrPqY+1zz7f8FR/Pez/SJKc3MzWFzc7qDXZ+ZmN9X07LXCqusvdtdZs/S+vuZ+jq/maFZwcrG6ZmdP630tj8bFyL3YmZhPcHNBbsFtDbDs9el9FjHsQc7EGLGH1Cq5/2V1ox7a3gWNbLXml7MoPbs9Syy1Wek4NvUcugegcHo3T3Gze/c4NDn7zZfbt/WMh9lex+5v0PZ/g0lN7rdB6Z9ZXnQscfVDX7hv2ksZXNPv8A0vpsq/SO/nbPzPT9ReidBsts6a0nW0AN1BDQ4NbLa2+7bWz6Hs/RrzHPyf2t1qzJbQbKbnPqqbWS6s22ncz85nv1syf+sfpv1f8AnPTfqvUKukY7a/5kNhs8gNDa2t/l7djm7/8Atn9Ckp0Scr1dBX6MeJ3T/m7VJnrbR6m3dpJEkH9793alYbWiWx9ITMn294aPz0jewWGuHSBMhpI+G4BJSRJRa8OAIB18RBH3qSSlJJJJKUkkkkp//9P1VJJJJSkkkklKSSSSU1s3GZk0mt30nfQMx7h72H+w9u5ebfWD6tGnLc4Mc1tbwHls7Dv9tVxqb6n6Kzc93p1f0bJs/mqvUpXqSDdjVXUiu1gsDSHAH94fRe391zPpM/cSU+UYnUOtVUMoNzD6TzQPX2Otqazd7vVd+m3UNZ+d+Z6frf4VLJs6hnVbsk5Eure+mtjmja6Q+5v2dvrV+tu9T02/zlvpWel+nXd5P1NwbLCaiawS1wdJc4Ee23dvOx/rU/o3/o/0n6W/J9e21S6f9U8fCs3h+ha+vayW+wkmlu5z7H7mNdt9Rnpv/mvs/wBmZX+kSnlfq79XrbMtz2W2M2uZ7LGl7Tubuvd6bRR+gfZbtsp2/oP9HWvR6qxWwMBJgRLjJ0TVUVUgNqGxjQA1o0AAEQP5KIkpSSSSSlJJJJKUkkkkpSSSSSn/1PVUkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9X1VJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//W9VSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp+qkl8qpJKfqpJfKqSSn6qSXyqkkp//ZADhCSU0EIQAAAAAAVQAAAAEBAAAADwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAAABMAQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAIABDAFMANgAAAAEAOEJJTQQGAAAAAAAHAAMAAAABAQD/4TjPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPg0KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+DQoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJXaW5kb3dzIFBob3RvIEVkaXRvciAxMC4wLjEwMDExLjE2Mzg0IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOC0yMFQxODo1Mjo1Mi0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOC0yMFQxODo1NzoyNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDgtMjBUMTg6NTc6MjQtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzIwNEI2N0NDQTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPg0KCQkJPHhtcE1NOkhpc3Rvcnk+DQoJCQkJPHJkZjpTZXE+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTIwVDE4OjUyOjUyLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6QjU0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0RXZ0OndoZW49IjIwMTgtMDgtMjBUMTg6NTc6MjQtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3MjA0QjY3Q0NBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTIwVDE4OjU3OjI0LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wTU06SGlzdG9yeT4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1NDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiLz4NCgkJPC9yZGY6RGVzY3JpcHRpb24+DQoJPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA6gDqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VOiiigAooooAKKKKACiiigAooooAKKKTn0oAWiikoAWik3egzS0AFFFM8wcd89P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",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4V3KRXhpZgAATU0AKgAAAAgACQALAAIAAAAmAAAIhgESAAMAAAABAAEAAAEaAAUAAAABAAAIrAEbAAUAAAABAAAItAEoAAMAAAABAAIAAAExAAIAAAAmAAAIvAEyAAIAAAAUAAAI4odpAAQAAAABAAAI9uocAAcAAAgMAAAAegAAEToc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAAAr8gAAAJxAACvyAAAAnEFdpbmRvd3MgUGhvdG8gRWRpdG9yIDEwLjAuMTAwMTEuMTYzODQAMjAxODowODoyMCAxODo1ODo1NQAABKABAAMAAAABAAEAAKACAAQAAAABAAADIKADAAQAAAABAAACWOocAAcAAAgMAAAJLAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAwADAAAAAQAGAAABGgAFAAAAAQAAEYgBGwAFAAAAAQAAEZABKAADAAAAAQACAAACAQAEAAAAAQAA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blByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAABOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAA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bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wOC0yMFQxODo1Mjo1Mi0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOC0yMFQxODo1NToxMy0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDgtMjBUMTg6NTU6MTMtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRjQxNUQ0Q0M4QTRFODExQTMwOUFDNDQ0QjVFNTE3OSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPg0KCQkJPHhtcE1NOkhpc3Rvcnk+DQoJCQkJPHJkZjpTZXE+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTIwVDE4OjUyOjUyLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6QjI0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiIHN0RXZ0OndoZW49IjIwMTgtMDgtMjBUMTg6NTU6MTMtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkIzNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTIwVDE4OjU1OjEzLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wTU06SGlzdG9yeT4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIyNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFGNDE1RDRDQzhBNEU4MTFBMzA5QUM0NDRCNUU1MTc5IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUY0MTVENENDOEE0RTgxMUEzMDlBQzQ0NEI1RTUxNzkiLz4NCgkJPC9yZGY6RGVzY3JpcHRpb24+DQoJPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgB0AHQAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/VOiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKQ0ALRTN2cjv9Kdk9xigBaKKKAEPQ4rnPHnjqw+HfhnUNe1RJWsbKIzSeTt3bRjONzAd/aujbG056Yqlqmk2es6fcWN9bxXdpcIUkhmQMjA9iPSgDB0P4laVr2h6dqtsswt7+3juoQ2wtsfpnax5rqIZhNGki/dYZFYegX2gX0BsdKa2khsf9G8mEfLFt/hx2xW6oC4AGAOgoAfSUtIelADJJhFGzscKoyeKhsb6PULWO4hO6KTlT7Vy/xVs7O78D6pHfR30sHkSDbp77ZTlT0NfN3wH1zV/hjY6VZyxa7daJ4illbTI764WSS1CTAEOQO4oA+trjVIrW8tbdw2+5ZgmBxwM81drJ0eCZY/Nupln3YeIsPmjyOQTWjLN5cecFiQcKvU8E8UASUHoa8++FPxat/ila3k8GlXumC2upbYi6AwxRsZz716C3Ck4zx0oAy/EniK38K6HeareLIbS0jaSTywCdo9MkfrWb4D+IWm/ETQ4tV0pZhayYI84KDz/usa5HT/iFqXiD4nal4R1DwlqEWkJpn2hr66jU20hJwU6cn2r0O10m30vSzbaVBBYoE/doke1FOOMgdqAOZ8K/F7RfGHijVtBsYroXumXDW05kEYXcBk4w5OPwruKx9F8PWOlNLcRWdnHfTNvnuLeEIZG7knrWtu+YDjNADqKbzx0A70SLujYeox1xQABie2KN3Tn2rzyx8NeMYfidqGq3GtQv4ZkVPIsR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"
      ];
      let idx = Math.floor(Math.random()*orbitals.length);

      var description = (
        <React.Fragment>
          <p>The diagram below depicts |&Phi;|<sup>2</sup> for which possible orbital?</p>
          <p><img src={orbitals[idx]} alt="Orbital" width="100px" /></p>
        </React.Fragment>
      );

      var options = [];
      for (let i = 0; i < orbitals.length; i++) {
        options.push({
          text: (<p>{i+1}<i>s</i></p>),
          correct: i === idx,
          id: i
        });
      }

      var feedback = (
        <p>The orbital is an <i>s</i>-orbital since its shape is spherical. The
        principal quantum number can be determined by counting the nodes
        (white circles in the picture where the probability of finding an electron
        is zero). In the given picture, there are {idx} nodes,
        so <i>n</i> = {idx} + 1 = {idx+1}.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 103,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 4,
    "type": "string",
    "questionBody": function() {
      let elements = ["Ga", "Ge", "As", "Se", "Br", "Kr"];
      let idx = Math.floor(Math.random()*elements.length);
      let answer = (idx + 1).toString();
      let answerRegExp = RegExp('^\\s*' + answer + '\\s*$');

      var description = (
        <p>How many 4<i>p</i> electrons are present in an atom of {elements[idx]} in
        the ground state?</p>
      );

      var feedback = (
        <p>4<i>p</i> orbitals start being filled when we enter group 13 of the
        fourth row of the periodic table. Simple counting shows that
        there {idx === 0 ? "is" : "are"} {idx + 1} electron{idx === 0 ? "" : "s"} in 4<i>p</i> orbitals  when we reach {elements[idx]}.</p>
      );

      return {description, answer: {
        answer: answerRegExp,
        label: "",
        units: "electrons"
      }, feedback};
    }()
  },
  {
    "_id": 104,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 5,
    "type": "MC",
    "questionBody": function() {
      let ions = [(<React.Fragment>Mn<sup>2+</sup></React.Fragment>),
        (<React.Fragment>Ti<sup>2+</sup></React.Fragment>), (<React.Fragment>Cr<sup>2+</sup></React.Fragment>),
        (<React.Fragment>V<sup>3+</sup></React.Fragment>), (<React.Fragment>Mn<sup>4+</sup></React.Fragment>),
        (<React.Fragment>Co<sup>3+</sup></React.Fragment>)];
      let idx = Math.floor(Math.random()*ions.length);

      var description = (
        <p>Which one of the following sets of quantum numbers could NOT
        represent any electron in the ground state {ions[idx]} ion?</p>
      );

      var options = [
        {text: (<p><b><i>n</i></b> = 3, <b><i>l</i></b> = 0, <b><i>m<sub>l</sub></i></b> = 0, <b><i>m<sub>s</sub></i></b> = &#8211;&#189;</p>),
        correct: false,
        id: 0},
        {text: (<p><b><i>n</i></b> = 3, <b><i>l</i></b> = 2, <b><i>m<sub>l</sub></i></b> = &#8211;1, <b><i>m<sub>s</sub></i></b> = +&#189;</p>),
        correct: false,
        id: 1},
        {text: (<p><b><i>n</i></b> = 1, <b><i>l</i></b> = 0, <b><i>m<sub>l</sub></i></b> = 0, <b><i>m<sub>s</sub></i></b> = +&#189;</p>),
        correct: false,
        id: 2},
        {text: (<p><b><i>n</i></b> = 4, <b><i>l</i></b> = 0, <b><i>m<sub>l</sub></i></b> = 0, <b><i>m<sub>s</sub></i></b> = +&#189;</p>),
        correct: true,
        id: 3},
        {text: (<p><b><i>n</i></b> = 2, <b><i>l</i></b> = 1, <b><i>m<sub>l</sub></i></b> = 1, <b><i>m<sub>s</sub></i></b> = +&#189;</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <p>Recall that when a <i>d</i>-element loses electrons and becomes an
        ion, it first loses electrons from the <i>s</i>-orbital. Hence, {ions[idx]} does
        not have any electrons left in its highest <i>s</i>-orbital. The corresponding
        quantum numbers
        are <b><i>n</i></b> = 4, <b><i>l</i></b> = 0, <b><i>m<sub>l</sub></i></b> = 0, <b><i>m<sub>s</sub></i></b> = +&#189;.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 105,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 6,
    "type": "string",
    "questionBody": function() {
      let ions = [
        {name: <React.Fragment>I<sup>&#8211;</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup>
          5<i>s</i><sup>2</sup>4<i>d</i><sup>10</sup>5<i>p</i><sup>4</sup></React.Fragment>),
        numPElec: 24},
        {name: <React.Fragment>Te<sup>2&#8211;</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup>
          5<i>s</i><sup>2</sup>4<i>d</i><sup>10</sup>5<i>p</i><sup>4</sup></React.Fragment>),
        numPElec: 24},
        {name: <React.Fragment>Sb<sup>3+</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup>
          5<i>s</i><sup>2</sup>4<i>d</i><sup>10</sup>5<i>p</i><sup>0</sup></React.Fragment>),
        numPElec: 18},
        {name: <React.Fragment>Sn<sup>2+</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup>
          5<i>s</i><sup>2</sup>4<i>d</i><sup>10</sup>5<i>p</i><sup>0</sup></React.Fragment>),
        numPElec: 18},
        {name: <React.Fragment>Br<sup>&#8211;</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup></React.Fragment>),
        numPElec: 18},
        {name: <React.Fragment>Se<sup>2&#8211;</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>6</sup></React.Fragment>),
        numPElec: 18},
        {name: <React.Fragment>Ge<sup>2+</sup></React.Fragment>,
        configuration: (<React.Fragment>1<i>s</i><sup>2</sup>2<i>s</i><sup>2</sup>2<i>p</i><sup>6</sup>3<i>s</i><sup>2</sup>
          3<i>p</i><sup>6</sup>4<i>s</i><sup>2</sup>3<i>d</i><sup>10</sup>4<i>p</i><sup>0</sup></React.Fragment>),
        numPElec: 12},
      ];
      let idx = Math.floor(Math.random()*ions.length);
      let answer = ions[idx].numPElec.toString();
      let answerRegExp = RegExp('^\\s*' + answer + '\\s*$');

      var description = (
        <p>How many electrons are present in <i>p</i> orbitals in the
        ground state {ions[idx].name} ion?</p>
      );

      var feedback = (
        <p>The full electronic configuration of {ions[idx].name} is {ions[idx].configuration}.
        Counting all <i>p</i>-electrons (don&#8217;t forget to also count all the core ones)
        results in {ions[idx].numPElec} electrons.</p>
      );

      return {description, answer: {
        answer: answerRegExp,
        label: "",
        units: "electrons"
      }, feedback}
    }()
  },
  {
    "_id": 106,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 7,
    "type": "MC",
    "questionBody": function() {
      let correctItems = [
        {item: "As", numUnpaired: 3, label: "p"},
        {item: "P", numUnpaired: 3, label: "p"},
        {item: "Sb", numUnpaired: 3, label: "p"},
        {item: "V", numUnpaired: 3, label: "d"},
        {item: "Mn", numUnpaired: 5, label: "d"},
        {item: "Fe", numUnpaired: 4, label: "d"}
      ];
      let incorrectItems = [
        {item: "Ti", numUnpaired: 2},
        {item: <React.Fragment>Se<sup>2&#8211;</sup></React.Fragment>, numUnpaired: 0},
        {item: <React.Fragment>Ca<sup>2+</sup></React.Fragment>, numUnpaired: 0},
        {item: <React.Fragment>Cu<sup>2+</sup></React.Fragment>, numUnpaired: 1},
        {item: <React.Fragment>Br<sup>&#8211;</sup></React.Fragment>, numUnpaired: 0},
        {item: <React.Fragment>Rb<sup>+</sup></React.Fragment>, numUnpaired: 0},
        {item: "Sc", numUnpaired: 1},
        {item: <React.Fragment>Ni<sup>2+</sup></React.Fragment>, numUnpaired: 2}
      ];

      let incorrectSelected = [];
      while (incorrectSelected.length < 4) {
        let i = Math.floor(Math.random()*incorrectItems.length);
        incorrectSelected.push(incorrectItems[i]);
        incorrectItems.splice(i, 1);
      }

      let idx = Math.floor(Math.random()*correctItems.length);

      var options = incorrectSelected.map(item => {
        return {
          text: (<p>{item.item}</p>),
          correct:false,
          id: incorrectSelected.indexOf(item)
        };
      }).concat({
        text: (<p>{correctItems[idx].item}</p>),
        correct: true,
        id: 4
      });

      var description = (
        <p>Which one of the following has the largest number of unpaired
        electrons in its ground state?</p>
      );

      var feedback = (
        <React.Fragment>
          <p>Write down electronic configurations of each of the species. Do not
          forget to remove electrons for cations and add for anions.
          Also, remember that in <i>d</i>-element cations, electrons are first removed
          from the <i>s</i> orbital.</p>
          <p>{correctItems[idx].item} is the winner: it has {correctItems[idx].numUnpaired} unpaired
          electrons in its highest <i>{correctItems[idx].label}</i> orbital. As for the other
          options, {incorrectSelected[0].item} has {incorrectSelected[0].numUnpaired}, {incorrectSelected[1].item} has {incorrectSelected[1].numUnpaired}, {incorrectSelected[2].item} has {incorrectSelected[3].numUnpaired},
          and {incorrectSelected[3].item} has {incorrectSelected[0].numUnpaired} unpaired electrons.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 107,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 8,
    "type": "MC",
    "questionBody": function() {
      let atoms = [
        {quantNumbers: [4, 0, 0], label: "s", elements: ["K", "Ca"]},
        {quantNumbers: [4, 1, 1], label: "p", elements: ["Ga", "Ge", "As", "Se", "Br"]},
        {quantNumbers: [3, 2, 0], label: "d", elements: ["Ti", "V", "Cr"]},
        {quantNumbers: [2, 0, 0], label: "s", elements: ["Be", "Li"]},
        {quantNumbers: [4, 2, 1], label: "d", elements: ["Y", "Zr", "Nb"]},
      ];
      let idx = Math.floor(Math.random()*atoms.length);
      let elIdx = Math.floor(Math.random()*atoms[idx].elements.length);

      var description = (
        <React.Fragment>
          <p>The quantum numbers for the highest energy electron in the ground
          state of an atom are:</p>
        <p><i>n</i> = {atoms[idx].quantNumbers[0]}, <i>l</i> = {atoms[idx].quantNumbers[1]}, <i>m<sub>l</sub></i> = {atoms[idx].quantNumbers[2]},&#160;
        <i>m<sub>s</sub></i> = +&#189;</p>
        <p>Which one of the following is a possible identity of the atom?</p>
        </React.Fragment>
      );

      var options = atoms.map(atom => {
        if (atoms.indexOf(atom) === idx) {
          return {
            text: (<p>{atom.elements[elIdx]}</p>),
            correct: true,
            id: atoms.indexOf(atom)
          };
        } else {
          let i = Math.floor(Math.random()*atom.elements.length);
          return {
            text: (<p>{atom.elements[i]}</p>),
            correct: false,
            id: atoms.indexOf(atom)
          };
        }
      });

      var feedback = (
        <p>The given <i>n</i> and <i>l</i> quantum numbers correspond to a {atoms[idx].quantNumbers[0]}<i>{atoms[idx].label}</i> orbital.
        The only element on the list in which {atoms[idx].label === "s" ? "it is" : "these are"} being
        filled is {atoms[idx].elements[elIdx]}.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 108,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 9,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <p>Which of the following electron configurations is correct for the
        Fe<sup>3+</sup> ion in the ground state?</p>
      );

      var options = [
        {text: (<p>[Ar] 3<i>d</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;&#160;&#160;
          4<i>s</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;</p>),
        correct: false,
        id: 0},
        {text: (<p>[Ar] 3<i>d</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#8595;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;&#160;&#160;
          4<i>s</i>: <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;</p>),
        correct: false,
        id: 1},
        {text: (<p>[Ar] 3<i>d</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;&#160;&#160;
          4<i>s</i>: <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;</p>),
        correct: true,
        id: 2},
        {text: (<p>[Ar] 3<i>d</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#160;&#160;&#160;&#160;</span>&#160;&#160;&#160;
          4<i>s</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#8595;&#160;</span>&#160;</p>),
        correct: false,
        id: 3},
        {text: (<p>[Ar] 3<i>d</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#8595;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;
          <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#160;&#160;</span>&#160;&#160;&#160;
          4<i>s</i>: <span style={{textDecoration: 'underline'}}>&#160;&#8593;&#160;&#8595;&#160;</span>&#160;</p>),
        correct: false,
        id: 4},
      ];

      var feedback = (
        <p>Fe atom itself has two 4<i>s</i> electrons and six 3<i>d</i> electrons.
        When 3 electrons are removed to make a cation, two of them are removed
        from the <i>s</i> orbital and the remaining one from the <i>d</i> orbital,
        leaving iron with five 3<i>d</i> electrons and an empty 4<i>s</i> orbital.
        Note that those <i>d</i> electrons must be unpaired since it is more
        energetically stable.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 109,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 10,
    "type": "MS",
    "questionBody": function() {
      let orbitals = [
        {text: (<React.Fragment>the 2<i>s</i> orbital in Al</React.Fragment>),
        valence: false},
        {text: (<React.Fragment>the 3<i>s</i> orbital in Al</React.Fragment>),
        valence: true},
        {text: (<React.Fragment>a 3<i>p</i> orbital in Si</React.Fragment>),
        valence: true},
        {text: (<React.Fragment>a 2<i>p</i> orbital in Al</React.Fragment>),
        valence: false},
        {text: (<React.Fragment>the 4<i>s</i> orbital in Ca</React.Fragment>),
        valence: true},
        {text: (<React.Fragment>a 3<i>p</i> orbital in Ca</React.Fragment>),
        valence: false},
        {text: (<React.Fragment>a 4<i>p</i> orbital in Ga</React.Fragment>),
        valence: true},
        {text: (<React.Fragment>the 3<i>d</i> orbital in Ga</React.Fragment>),
        valence: false}
      ];

      let selectedOrbitals = [];
      while (selectedOrbitals.length < 3) {
        let i = Math.floor(Math.random()*orbitals.length);
        selectedOrbitals.push(orbitals[i]);
        orbitals.splice(i, 1);
      }

      var description = (
        <p>In which of the following does the designated orbital constitute a
        part of the atom&#8217;s valence shell?</p>
      );

      var options = selectedOrbitals.map(orbital => {
        return {
          text: (<p>{orbital.text}</p>),
          correct: orbital.valence,
          id: selectedOrbitals.indexOf(orbital)
        };
      });

      let answers = selectedOrbitals.filter(orbital => {return orbital.valence;}).map(orbital => {
        return <li key={selectedOrbitals.indexOf(orbital)}>{orbital.text}</li>;
      });

      var feedback = (
        <p>For main-group elements, valence orbitals are only those with
        the highest principal quantum number.
        Therefore, {answers.length === 0 ? "none of the orbitals are valence." : "the valence orbitals are: "} {answers}</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 110,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 11,
    "type": "order",
    "questionBody": function() {
      let sequences = [
        ["Ge", "Si", "P", "F"],
        ["Ga", "Si", "C", "F"],
        ["As", "S", "F", "Ne"],
        ["Ge", "Si", "N", "Ne"],
        ["Se", "S", "Cl", "Ne"]
      ];
      let idx = Math.floor(Math.random()*sequences.length);
      var description = (
        <p>What is the correct order of decreasing size of the following atoms?</p>
      );

      var items = sequences[idx].map(atom => {
        return {text: atom, id: sequences[idx].indexOf(atom)};
      });

      var feedback = (
        <React.Fragment>
          <p>In general, atom sizes decrease when moving up and to the right in the
          periodic table. So, the order of decreasing size is</p>
          <p className="eqn">{sequences[idx][0]} &gt; {sequences[idx][1]} &gt; {sequences[idx][2]} &gt; {sequences[idx][3]}</p>
        </React.Fragment>
      );

      return {description, answer: {
        items,
        correctOrder: [0, 1, 2, 3],
        leftLabel: "Largest",
        rightLabel: "Smallest"
      }, feedback};
    }()
  },
  {
    "_id": 111,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 12,
    "type": "order",
    "questionBody": function() {
      let sequences = [
        [(<React.Fragment>Ba<sup>2+</sup></React.Fragment>), (<React.Fragment>Cs<sup>+</sup></React.Fragment>), (<React.Fragment>I<sup>&#8211;</sup></React.Fragment>)],
        [(<React.Fragment>Sr<sup>2+</sup></React.Fragment>), (<React.Fragment>Rb<sup>+</sup></React.Fragment>), (<React.Fragment>Se<sup>2&#8211;</sup></React.Fragment>)],
        [(<React.Fragment>Rb<sup>+</sup></React.Fragment>), (<React.Fragment>Br<sup>&#8211;</sup></React.Fragment>), (<React.Fragment>Se<sup>2&#8211;</sup></React.Fragment>)],
        [(<React.Fragment>Ba<sup>2+</sup></React.Fragment>), (<React.Fragment>Cs<sup>+</sup></React.Fragment>), (<React.Fragment>Te<sup>2&#8211;</sup></React.Fragment>)],
        [(<React.Fragment>Ca<sup>2+</sup></React.Fragment>), (<React.Fragment>Cl<sup>&#8211;</sup></React.Fragment>), (<React.Fragment>S<sup>2&#8211;</sup></React.Fragment>)]
      ];

      let idx = Math.floor(Math.random()*sequences.length);
      var items = sequences[idx].map(ion => {
        return {text: ion, id: sequences[idx].indexOf(ion)};
      });

      var description = (
        <p>The sizes of the ions below increase in the order:</p>
      );

      var feedback = (
        <React.Fragment>
          <p>The three ions given are isoelectronic, i.e. they have the same
          electron configuration. However, they have different nuclear charges,
          and the more positive the nuclear charge is, the more it pulls electrons
          towards the center, making the ion smaller. Therefore, the sizes increase
          in the following order:</p>
          <p className="eqn">{sequences[idx][0]} &lt; {sequences[idx][1]} &lt; {sequences[idx][2]}</p>
        </React.Fragment>
      );

      return {description, answer: {
        items,
        correctOrder: [0, 1, 2],
        leftLabel: "Smallest",
        rightLabel: "Largest"
      }, feedback};
    }()
  },
  {
    "_id": 112,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 0,
    "idInExam": 13,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>The average atomic masses of elements generally increase with atomic number <i>Z</i>.</p>
          <p>Potassium (<i>Z</i> = 19) occurs <i>after</i> argon (<i>Z</i> = 18) in the periodic
          table. However, the average atomic mass of potassium (39.10&nbsp;amu) is less than
          that of argon (39.95&nbsp;amu). Which of the following statements (all of which are
          true) provides the best explanation?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>The isotope <sup>40</sup>K is weakly radioactive, so its atoms are losing mass over time.</p>),
        correct: false,
        id: 0},
        {text: (<p>The most common stable isotope of Ar has an abundance of 99.6%, whereas the most common stable isotope of K has an abundance of only 93.3%.</p>),
        correct: false,
        id: 1},
        {text: (<p>The size of K atoms is larger than the size of Ar atoms.</p>),
        correct: false,
        id: 2},
        {text: (<p>The nucleus of the most common stable isotope of Ar contains 22 neutrons, whereas the nucleous of the most common stable isotope of K contains only 20 neutrons.</p>),
        correct: true,
        id: 3},
        {text: (<p>Argon is a gas, while potassium is solid at room temperature.</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>Recall that the average atomic mass of an element can be calculated from the atomic
          masses of its isotopes:</p>
          <MathJax.Provider>
            <MathJax.Node formula={"\\text{Average atomic mass } = \\sum{\\frac{\\text{percent abundance}}{100}\\times \\text{ isotopic mass}}"}/>
          </MathJax.Provider>
          <p>So, the heavier the most abundant isotopes of an element are, the larger its average atomic mass is.</p>
          <p>For a single isotope, we can estimate its isotopic mass by summing all the protons and
          neutrons in the nucleous. Hence, the reason that Ar is heavier than K is that
          the nucleus of the most common stable isotope of Ar contains 22 neutrons,
          whereas the nucleous of the most common stable isotope of K contains only 20 neutrons.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 113,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 14,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <p>Which of the following is/are correct?</p>
      );

      var options = [
        {text: (<p>Ionization energies generally decrease from left to right across a period.</p>),
        correct: false,
        id: 0},
        {text: (<p>A negative ion is larger in size than its parent neutral atom.</p>),
        correct: true,
        id: 1},
        {text: (<p>Within a group of the periodic table, ionization energy is a maximum for the heaviest atom.</p>),
        correct: false,
        id: 2},
        {text: (<p>The most favorable electron affinities occur on the right hand side of the periodic table.</p>),
        correct: true,
        id: 3}
      ];

      var feedback = (
        <React.Fragment>
          <p>Ionization energies generally increase when moving from left to right
          and from bottom to top of the periodic table (that is, the heaviest atom
          will have the minimum ionization energy in the group).</p>
          <p>Electron affinities generally follow the opposite trend: the most favorable
          electron affinities occur on the right hand side and at the top of the periodic table.</p>
          <p>The size of a negative ion is indeed larger than the size of its neutral
          parent (and a positive ion is smaller), simply because there are more electrons
          in a negative ion, they repulse each other and try to stay as far away from each other as possible.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 114,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 15,
    "type": "order",
    "questionBody": function() {
      let sequences = [
        ["S", "Si", "Sn", "Sr"],
        ["Cl", "P", "Sb", "Bi"],
        ["F", "S", "Se", "As"],
        ["C", "Ge", "Ga", "Ca"],
        ["O", "P", "Sr", "Rb"]
      ];
      let idx = Math.floor(Math.random()*sequences.length);

      var items = sequences[idx].map(atom => {
        return {text: atom, id: sequences[idx].indexOf(atom)};
      });

      var description = (
        <p>Arrange the atoms below in order of decreasing ionization energy.</p>
      );

      var feedback = (
        <React.Fragment>
          <p>Ionization energies decrease from right to left across a period and from top to bottom
          in a group. Following these trends, the atoms should be arranged as follows:</p>
        <p className="eqn">{sequences[idx][0]} &gt; {sequences[idx][1]} &gt; {sequences[idx][2]} &gt; {sequences[idx][3]}</p>
        </React.Fragment>
      );

      return {description, answer: {
        items,
        correctOrder: [0, 1, 2, 3],
        leftLabel: "Highest",
        rightLabel: "Lowest"
      }, feedback};
    }()
  },
  {
    "_id": 115,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 1,
    "idInExam": 16,
    "type": "MS",
    "questionBody": function() {
      let ops1 = [
        {text: (<p>The order: F &gt; O &gt; C &gt; Cs ranks the atoms in terms of decreasing electronegativities, from left to right</p>),
        correct: true},
        {text: (<p>The order: Cl &gt; P &gt; As &gt; Ge ranks the atoms in terms of decreasing electronegativities, from left to right</p>),
        correct: true},
        {text: (<p>The order: Ge &gt; As &gt; P &gt; Cl ranks the atoms in terms of decreasing electronegativities, from left to right</p>),
        correct: false}
      ];
      let ops2 = [
        {text: (<p>Cr has 4 unpaired electrons in the ground state</p>),
        correct: false},
        {text: (<p>Cr has 6 unpaired electrons in the ground state</p>),
        correct: true},
        {text: (<p>Fe has 6 unpaired electrons in the ground state</p>),
        correct: false}
      ];
      let ops3 = [
        {text: (<p>O<sup>2&#8211;</sup>, S<sup>2&#8211;</sup>, and F<sup>&#8211;</sup> are isoelectronic</p>),
        correct: false},
        {text: (<p>O<sup>2&#8211;</sup>, F<sup>&#8211;</sup>, and Ne are isoelectronic</p>),
        correct: true},
        {text: (<p>F<sup>&#8211;</sup>, Cl<sup>&#8211;</sup>, and Br<sup>&#8211;</sup> are isoelectronic</p>),
        correct: false}
      ];

      var description = (
        <p>Which of the following statements is/are correct?</p>
      );

      let idx1 = Math.floor(Math.random()*ops1.length);
      let idx2 = Math.floor(Math.random()*ops2.length);
      let idx3 = Math.floor(Math.random()*ops3.length);

      var options = [
        {text: ops1[idx1].text, correct: ops1[idx1].correct, id: 0},
        {text: ops2[idx2].text, correct: ops2[idx2].correct, id: 1},
        {text: ops3[idx3].text, correct: ops3[idx3].correct, id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>Electronegativities generally decrease from right to left and from top to bottom
          in the periodic table, so the given order is {ops1[idx1].correct ? "correct" : "incorrect"}.</p>
          <p>To predict the number of unpaired electrons, draw the electron
            configuration. {idx2 !== 2 ?
              <React.Fragment>Don&#8217;t forget that Cr is an exception where an electron from the 4<i>s</i> orbital goes to a 3<i>d</i> orbital.</React.Fragment> :
                null}
            {idx2 !== 2 ? "Cr" : "Fe"} has {idx2 !== 2 ? 6 : 4} unpaired electrons in the ground state.</p>
          <p>Isoelectronic species have exactly the same electron configuration (including the core electrons),
          so, the given species {ops3[idx3].correct ? "are " : "are not"} isoelectronic.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 116,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 2,
    "idInExam": 17,
    "type": "MC",
    "questionBody": function() {
      let structures = [
        {numLonePairs: 0,
        compounds: [
          {formula: (<React.Fragment>CO<sub>2</sub></React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAZCAMAAADnouuwAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAD9SURBVEiJ7ZTBDoMgDIa9+f6vCFW3ihKnRm8dapdF6YAtO2yJ/8Wa/n5QLM2yU6f+QIA46ahLT4jwMcrcSsZYMthSrYIcZZzLkA26PFQ3FPw5keWgW7LAr6/U9Trq8lBANHPY9vn6NLTtpaIqy64kKV+y2zax17noGeGAWtXY4/FTewwkWQrWnowCwhRi5KiTUcX3lguidCl4YJakdssp0eO6UVgOkJtUDZzcHXguolyXtAxQqAvRM4Pw79RIDRc3klkDQ9u1fLaTpEdnBl0eytVkOFdynW/euy7g8VFw8UxuFNRuXsSmik2bKgkoN+iq+MyExJmZgDp16id0B5YnfJusN31rAAAAAElFTkSuQmCC"},
          {formula: (<React.Fragment>BF<sub>3</sub></React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABhCAMAAACQwB3TAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIGSURBVGiB7ZnbkoMgDIa94/1fEaRaD2XROrN3WTxgFVAsjTvjLv+FjoV8ahKipkny53S79VuaU0xoBsDVToDEpOYARO0kNJjUJMv6LSsYKjXqQuLFqAyVWkB1CpXjwWr4dlNZ+0yDqa1eoSZVreB7MJU8iKZWK7fSqkaoXiYVR6jROod605XPomZFsF/pE8SCmr9GWAdVKFVlVr2gwuJ8HRTBVKrvm/eugOVI+CIwBP4pkRqpkRqpkRqpARKnUKMuIjGoRP6KBck5Jw9Aew8aqUOu0g9eBLepySlUAriOBVDBklCiQsdo8QoZO/lV4patiVqcQq1AYGbsSE2hTCUaNq2HHBBQ0QQNq0B8EJ2OkKC7xyhQFKwL8THWDfgQu2V+HEtqa+a2sWPk7myazJ/th67IGkvBWX2/zIq0f5vmqPq4d7ZlzJN7fGdhzem5o9/hD4hrBnk9hxnY5fhIlNPc/EW5YQ4ObS2XsMCMlLoHmDj7HaHPPZvE+aI2HZXXaKyi4r167zWylsEhqs/oUlT5frD8RpPj38tUr9Gl/PobVNa22+u27EoPNZvKlzHhDmAVpVkttE6qZvWN37F5K9b1kAqxnS+ZnP4wWBvNrL7RHN74NbRgUcQG+y6LiYd/ic1e2MbIlRN3I6UldcRGkcZyZLHGsEb6nwb5c4UR0HmuNUSOa/2/+gGQ3gEyrrQZNAAAAABJRU5ErkJggg=="},
          {formula: (<React.Fragment>AlF<sub>3</sub></React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABhCAMAAAB/AnbtAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIdSURBVGiB7dnLdoMgEABQd/n/XwQpOlEIUU/cTdXgC6monfYcW2dhzYNbZKCVMYr+WMTdkTFK02DWHEVVxYRoiY/mmCBKQlTUbRcZAKF5xVlC2CCd/Ii6C8q5H6Emo+LCMD8KxeFlAIiJH63weRTlRvc9NfM8wTM5io5hE0WaJ8pE/Qya9NfroizhR03AajKl+GQ55VgeRWus+IiqdPxEYXl0xbK0v3x9n6MMiCbCFCWLC73QC73QC/1vaE5wp3PFGYNpLboTSXj7J9Fk3QkgHWoUICNGY5QcX8Ro1nTTFLQoa4sdEgUp2nmdTIiabsODbarI0Bjv7c5MtqkiQ7P3bIqKghBF9f4JzdBSoRLtjpk3qQKiyhSvbU8jISL+oUnUVM1eMgrVMUnUhUmgesxvq15zj5qKraZXHTeyk4Bhyxw2farGYvm1dNjcbzA9qvIWgITT0VXTo97mffIOR8D0Z2siKc9wBM1GyBZvjbWMKF8OxwbTF2PVxVO74fkhc1IfGiRbJN1VHgk1AjRd8e2+Bw01AlyuqQ3oeqMzoa/deQo2smO+K0/BRmca019Aofh6j8cfD7aO2gXrfl6iWemArda7jfrFn9sKq3Sq41Cu9NSY9x8hp1FvNSfuP5LjMVhkZduQlajwTGBZFrhC0B/Tl2tJ6kM6Tzxz5fwOVs1L+RrrIMqr2Z3CDdGtXehq/s6W1M2fIrOipH22ctr4BCIpJEOVGbqqAAAAAElFTkSuQmCC"},
          {formula: (<React.Fragment>SO<sub>4</sub><sup>2&#8211;</sup></React.Fragment>),
          image: "data:image/png;base64,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"}
        ]},
        {numLonePairs: 1,
        compounds: [
          {formula: (<React.Fragment>NF<sub>3</sub></React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABhCAMAAAB/AnbtAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAInSURBVGiB7dnLdoMgEABQd/n/X8SQICpIkNPspkQxClKJOu1pWmehjSk3yEsds+yPxbnbEoJpKqjslhpzRkRbaOyWAVwRUXp/VJFwjmge8S5BXaAOfgDZBebYz0CiUWetSBzlevM04AAsjhq4bUVzJYeaKr+f+I1tRcdwHYXaT5gd9T0oG843RAnLt5oczGRI5ZPpVEO7Fb2DyUdUFOM3AtqtM5YUw+nL0kcJRxoIUxQtDvRAD/RAD/S/oTXCnc5CXJo7PioAUG+puzhpgW7+5igldXtEVIIm/X44wky9H4XSR8XzhnAHKoB66KUpd5oWI10DjChCWOz0aABsNCttA6CjRGuCjmYUSnzUNgDgo0Tb4YqWQ2JNX0NqlzyJpBbi3E/9zO6R1MJfPFHUIlyQEdSZiaBGzN1q1FyjFvRVM6qOD7KT4M9H5rQZU+3VYf5vxWwtXzAjqogmgGhQ0UUzop78OkWbI2HGe2siiUhzJE0rVLNDYy4jq+fN8YIZizHrEsnd5Fuv6ixsyNwlSVelR1KFOKgu+bbqip4qxGE+p15Alwu9E/qxup+ShVybr7vzShV6pzb9AZTrr5/x8qYhy6ibsOH3LaiFCrhsfVhomPy1y7Beg+w4bxdqqlS/CAWFBsv+sfuhYII6Cy1tm7KYSI8EUlWJM+TyMv241ElDXIM3nrUIfoMYP5UvIf1InxvvTuEEEOYupPGPvNJ1/ltkolvcdytvG5+KsCqsctIdfwAAAABJRU5ErkJggg=="},
          {formula: (<React.Fragment>SO<sub>3</sub><sup>2&#8211;</sup></React.Fragment>),
          image: "data:image/png;base64,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"}
        ]},
        {numLonePairs: 2,
        compounds: [
          {formula: (<React.Fragment>H<sub>2</sub>O</React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAiCAMAAAAK2yXlAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAADdSURBVEiJ7ZbBCsMgDIa99f1fsdrqUlcnQ3b8p+0Oc7iihUDH+h2qlPARQhIU4h8YTfoO7sIhVwDFY0boGewyLHYTHIM8Jq9ZtCc/Cen8/IYieshmFVx+lpEOlmZMm8NUUFXZe/jkVdsp7LVbrElrbNVvrx3z56XWfqeF+Mv4Eq6PFaFXtIOgYtRNZqqCXXYlxrh53+2qGNWJsr2iMpm9rTK8da/rmXWQeHqGt9/TrE5k22e1Yc/o9j1zcmR6Wl5hw3XgsBsg7hvh4TnsI0JqRwvLYRdq7XWOZ+QReQI/hRwem28r6wAAAABJRU5ErkJggg=="},
          {formula: (<React.Fragment>OF<sub>2</sub></React.Fragment>),
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAiCAMAAACJHxzeAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGDSURBVEiJ7VZdk4MgDPTN//8X+dAWREqRuXvLEUXPOTFg327afagdWXcxJDFN8zZg6oaXm5UUqzMCucYwSsroWerRnXM0ACoFcJSdn5fvADeCpBYpT0n1EHDHFr4pOwtD/OXec4Ikg0cpA4og8SU+lE6EoJcXUJH+4IMqCJ1SUdiE0gNKfZWy91zqCemmhEHOIJV4LDw1giZT/SCl3NpfHIwrhyrKBAYOjQSQMThIhY3P2jNODgMsr9VDf8XOhHuRk8Mait8/VXZZjk/Ha10WDxaDuOpYaHSeZvZSlN2Qjle0Wcj9tqMdz9PEXuov2MOLKxHY2dXQVhe5rcxflEq7F8+OTduN8Xnh7WJmLhV+LTN5AFPiZPFi3bX60Ieq7LCraDUUu0pZislCJ0yIPbMvMGulPvif4ONc78uYfA71jUnZWWqsbbia24ix51px9EXORE/RLQB+SxwEijXCxLA6j9W9IY2+Iz1F8xBwU3eyicX52ePFTVTvSYL0Mqsqqe795ugfEtqL9WciG3MAAAAASUVORK5CYII="}
        ]}
      ];

      let idx = Math.floor(Math.random()*structures.length);
      let numLonePairs = structures[idx].numLonePairs;
      let lonePairsText = ["no non-bonding pairs", "only one non-bonding pair", "two non-bonding pairs"][numLonePairs];
      let compoundIdx = Math.floor(Math.random()*structures[idx].compounds.length);
      let correctCompound = structures[idx].compounds[compoundIdx];
      let incorrectCompounds = [];
      structures.filter(structure => structure.numLonePairs !== numLonePairs).forEach(structure => {
        incorrectCompounds.push(...structure.compounds);
      });

      let incorrectCompoundsSelected = [];
      while (incorrectCompoundsSelected.length < 4) {
        let i = Math.floor(Math.random()*incorrectCompounds.length);
        incorrectCompoundsSelected.push(incorrectCompounds[i]);
        incorrectCompounds.splice(i, 1);
      }


      var options = incorrectCompoundsSelected.map(compound => {
        return {text: (<p>{compound.formula}</p>), correct: false, id: incorrectCompoundsSelected.indexOf(compound)};
      }).concat({text: (<p>{correctCompound.formula}</p>), correct: true, id: 5});

      var description = (
        <p>Which one of the following has {lonePairsText} of electrons on the central atom?</p>
      );

      var feedback = (
        <React.Fragment>
          <p>Draw Lewis structures for the compounds in the question:</p>
          <p className="eqn">{incorrectCompoundsSelected.map(compound => {return (<img style={{padding: "10px"}} key={incorrectCompoundsSelected.indexOf(compound)} src={compound.image} />);})}
          <img style={{padding: "10px"}} src={correctCompound.image} /></p>
          <p>Clearly, only {correctCompound.formula} has {numLonePairs} non-bonding pairs on the central atom.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 117,
    "courseId": "1301",
    "examName": "Midterm 2013",
    "chapterId": 2,
    "idInExam": 18,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <p>Which of the following statements is/are correct for the
          ion SO<sub>3</sub><sup>2&#8211;</sup>?</p>
      );

      var options = [
        {text: (<p>There are no non-bonding pairs of electrons on the sulfur atom.</p>),
        correct: false,
        id: 0},
        {text: (<p>The average bond order is 4/3.</p>),
        correct: true,
        id: 1},
        {text: (<p>There are three equivalent resonance structures.</p>),
        correct: true,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>The Lewis structure of SO<sub>3</sub><sup>2&#8211;</sup> is shown below:</p>
          <p className="eqn"><img src="data:image/png;base64,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"/></p>
          <p>There is one lone pair on the sulfur atom.</p>
          <p>This ion indeed has three resonance structures (since there are three equivalent oxygen atoms):</p>
          <p className="eqn"><img src="data:image/png;base64,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"/></p>
          <p>The average bond order can be calculated by summing all bonding pairs (i.e. lines) and dividing by the number of bonding regions.
          The result is 4/3.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },

  ////////////////////////// 1302 FINAL 2014 //////////////////////////////////////////////////////////////////////////////////
  {
    "_id": 201,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 1,
    "idInExam": 1,
    "type": "numeric",
    "questionBody": function() {
      let vH2 = 1.00;
      let vHe = 5.00;
      let pIH2String = (Math.random()*(5.00 - 1.50) + 1.50).toPrecision(3);
      let pIH2 = Number.parseFloat(pIH2String);
      let pIHeString = (Math.random()*(6.00 - 2.00) + 2.00).toPrecision(3);
      let pIHe = Number.parseFloat(pIHeString);
      let tempString = (Math.random()*(330 - 280) + 280).toPrecision(3);
      let temp = Number.parseFloat(tempString);
      let pH2 = pIH2*vH2/(vH2 + vHe);
      let pH2String = pH2.toPrecision(3);
      let pHe = pIHe*vHe/(vH2 + vHe);
      let pHeString = pHe.toPrecision(3);
      let answer = pHe + pH2;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A {vH2.toPrecision(3)}&nbsp;L bulb containing {pIH2String}&nbsp;atm
        of hydrogen gas at {tempString}&nbsp;K is connected by a stopcock to
        a {vHe.toPrecision(3)}&nbsp;L bulb containing {pIHeString}&nbsp;atm
        of helium gas at {tempString}&nbsp;K. What is the total pressure of the
        system after the stopcock has been opened?</p>
      );

      const eqPH2 = `\\begin{eqnarray*}
        P_{\\text{H}_2} & = & \\frac{P_{\\text{i, H}_2} V_{\\text{i, H}_2}}{V_{\\text{tot}}} \\\\
        & = & \\frac{(${pIH2String} \\text{ atm})(${vH2.toPrecision(3)} \\text{ L})}
        {(${vH2.toPrecision(3)} + ${vHe.toPrecision(3)}) \\text{ L}} \\\\
        & = & ${pH2String} \\text{ atm}
        \\end{eqnarray*}`;
      const eqPHe = `\\begin{eqnarray*}
        P_{\\text{He}} & = & \\frac{P_{\\text{i, He}} V_{\\text{i, He}}}{V_{\\text{tot}}} \\\\
        & = & \\frac{(${pIHeString} \\text{ atm})(${vHe.toPrecision(3)} \\text{ L})}
        {(${vH2.toPrecision(3)} + ${vHe.toPrecision(3)}) \\text{ L}} \\\\
        & = & ${pHeString} \\text{ atm}
        \\end{eqnarray*}`;
      const eqP = `\\begin{eqnarray*}
        P_{\\text{tot}} & = & P_{\\text{H}_2} + P_{\\text{He}} \\\\
        & = & ${pH2String} \\text{ atm} + ${pHeString} \\text{ atm} \\\\
        & = & ${ansString} \\text{ atm}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Notice that the two gases are at the same temperature, therefore,
            during the mixing process only the pressures and volumes change.
            Calculate the pressure of hydrogen after expanding in the total
            volume:</p>
          <MathJax.Node formula={eqPH2}/>
            <p>Repeat the calculation for the pressure of helium:</p>
            <MathJax.Node formula={eqPHe}/>
            <p>The total pressure of the system is just the sum of the partial
            pressures of hydrogen and helium.</p>
          <MathJax.Node formula={eqP}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>P</i><sub>total</sub></React.Fragment>),
        units: "atm"
      }, feedback};
    }()
  },
  {
    "_id": 202,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 1,
    "idInExam": 2,
    "type": "numeric",
    "questionBody": function() {
      let mString = (Math.random()*(20.0 - 5.00) + 5.00).toPrecision(3);
      let m = Number.parseFloat(mString);
      let mol = m/70.13;
      let molString = mol.toPrecision(3);
      let molCO2 = mol*5;
      let molCO2String = molCO2.toPrecision(3);
      let answer = molCO2*22.4;
      let ansString = answer.toPrecision(2);

      var description = (
        <p>In the presence of excess oxygen, cyclopentane (C<sub>5</sub>H<sub>10</sub>)
        burns to produce only carbon dioxide and water. What volume of carbon
        dioxide, measured at 1.0&nbsp;atm and 0&nbsp;&#176;C, would be produced
        by complete combustion of {mString}&nbsp;g of cyclopentane?</p>
      );

      const eqMolCyc = `\\begin{eqnarray*}
        mol_{\\text{C}_5\\text{H}_{10}} & = & \\frac{m_{\\text{C}_5\\text{H}_{10}}}{MM} \\\\
        & = & \\frac{${mString} \\text{ g}}{70.13 \\text{ g/mol}} \\\\
        & = & ${molString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqMolCO2 = `\\begin{eqnarray*}
        mol_{\\text{CO}_2} & = & \\frac{mol_{\\text{C}_5\\text{H}_{10}} \\times 10}{2} \\\\
        & = & \\frac{${molString} \\text{ mol} \\times 10}{2} \\\\
        & = & ${molCO2String} \\text{ mol}
        \\end{eqnarray*}`;
      const eqV = `\\begin{eqnarray*}
        V_{\\text{CO}_2} & = & mol_{\\text{CO}_2} V_\\text{m} \\\\
        & = & (${molCO2String} \\text{ mol})(22.4 \\text{ L/mol}) \\\\
        & = & ${ansString} \\text{ L}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Let us first write down the combustion reaction of cyclopentane:</p>
            <p className="eqn">2 C<sub>5</sub>H<sub>10</sub> + 15 O<sub>2</sub> &#8594; 10 CO<sub>2</sub> + 10 H<sub>2</sub>O</p>
            <p>Now we need to do stoichiometry, so, calculate the number of moles
            of cyclopentane:</p>
            <MathJax.Node formula={eqMolCyc}/>
            <p>Then, using the stiochiometric coefficients in the reaction, find the number
            of moles of CO<sub>2</sub> produced:</p>
            <MathJax.Node formula={eqMolCO2}/>
            <p>To convert these moles into volume, one could use the ideal gas law,
            but since the pressure and temperature happen to be standard, we can use
            the molar volume of an ideal gas under standard conditions.</p>
          <MathJax.Node formula={eqV}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>V</i><sub>CO<sub>2</sub></sub></React.Fragment>),
        units: "L"
      }, feedback};
    }()
  },
  {
    "_id": 203,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 1,
    "idInExam": 3,
    "type": "numeric",
    "questionBody": function() {
      let dString = (Math.random()*(1.75 - 1.20) + 1.20).toPrecision(3);
      let volString = Number.parseFloat((Math.random()*(5 - 0.5) + 0.5).toPrecision(1)).toPrecision(3);
      let vol = Number.parseFloat(volString);
      let answer = 1.00*vol/(0.0821*298.15);
      let ansString = answer.toPrecision(3);

      var description = (
        <p>The density of a gaseous mixture of CO and CO<sub>2</sub> was {dString}&nbsp;g&nbsp;L<sup>&#8211;1</sup> at
        1.00&nbsp;atm and 25&nbsp;&#176;C. How many moles of carbon are present in {volString}&nbsp;L
        of the mixture under these conditions?</p>
      );

      const eqMol = `\\begin{eqnarray*}
        mol_\\text{tot} & = & \\frac{PV}{RT} \\\\
        & = & \\frac{(1.00 \\text{ atm})(${volString} \\text{ L})}
        {(0.0821 \\text{ L atm mol}^{-1}\\text{ K}^{-1})(298.15 \\text{ K})} \\\\
        & = & ${ansString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqMolC = `mol_{\\text{CO}_2} = mol_\\text{tot} = ${ansString} \\text{ mol}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Let us first calculate how many moles of gases in total are
              present in {volString}&nbsp;L of the mixture:</p>
            <MathJax.Node formula={eqMol}/>
            <p>Now comes the tricky part of the question: both CO and CO<sub>2</sub> have
            exactly one carbon atom in their formulas. So, if we have, say, 1 mole of CO
            and 1 mole of CO<sub>2</sub> or, say, just 2 moles of CO in a mixture, the
            moles of carbon atoms are exactly the same: 2 moles. In other words,
            the density and the composition of the mixture do not matter. The moles
            of carbon are just the total moles of the two gases:</p>
            <MathJax.Node formula={eqMolC}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>mol</i><sub>C</sub></React.Fragment>),
        units: "mol"
      }, feedback};
    }()
  },
  {
    "_id": 204,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 1,
    "idInExam": 4,
    "type": "numeric",
    "questionBody": function() {
      let pIString = (Math.random()*(95 - 60) + 60).toPrecision(2);
      let pI = Number.parseFloat(pIString);
      let pFString = (Math.random()*(20) + (pI - 30)).toPrecision(2);
      let pF = Number.parseFloat(pFString);
      let pSO2 = -(pF - pI)/0.5;
      let pSO2String = pSO2.toPrecision(2);
      let answer = pSO2/pI;
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>SO<sub>2</sub> gas mixed with excess O<sub>2</sub> exerted a total
          initial pressure of {pIString}&nbsp;kPa at a certain volume and
          temperature. After the following reaction was complete:</p>
          <p className="eqn">2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) &#8594; 2 SO<sub>3</sub>(g)</p>
          <p>the pressure dropped to {pFString}&nbsp;kPa at the same volume and
          temperature. What was the mole fraction of SO<sub>2</sub> in the original
          reactant mixture?</p>
        </React.Fragment>
      );

      const eqPtot = `\\begin{eqnarray*}
        ${pFString} \\text{ kPa} & = & (0 + (${pIString} - 1.5x) + x) \\text{ kPa} \\\\
        x & = & ${pSO2String} \\text{ kPa}
        \\end{eqnarray*}`;
      const eqChi = `\\begin{eqnarray*}
        \\chi_{\\text{SO}_2} & = & \\frac{P_{\\text{SO}_2}}{P_{\\text{tot}}} \\\\
        & = & \\frac{${pSO2String} \\text{ kPa}}{${pIString} \\text{ kPa}} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>This is clearly a stoichiometry question and, since the volume and
            temperature of the mixture do not change, we can do pressure-pressure
            stoichiometry. So, let us construct an ICF table:</p>
            <table className="ice">
              <thead>
                <tr>
                  <th></th>
                  <th>2 SO<sub>2</sub>(g)</th>
                  <th>+</th>
                  <th>O<sub>2</sub>(g)</th>
                  <th>&#8594;</th>
                  <th>2 SO<sub>3</sub>(g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>initial</td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>({pIString} &#8211; <i>x</i>)</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>&#8211;0.5<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>0</td>
                  <td></td>
                  <td>({pIString} &#8211; 1.5<i>x</i>)</td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>In the above table, we did not know the initial pressure of SO<sub>2</sub>,
            so we just labeled it as <i>x</i> and, since the total pressure
            was {pIString}&nbsp;kPa, the pressure of oxygen must have been ({pIString} &#8211; <i>x</i>)&nbsp;kPa.
            SO<sub>2</sub> was said to be the limiting reagent, so we used its amount
            to calculate all the changes. The final pressures must add up to the total
            pressure after the reaction, that is, </p>
            <MathJax.Node formula={eqPtot}/>
            <p>Now, using the initial pressure of SO<sub>2</sub>, we can find
              the molar fraction of SO<sub>2</sub> in the original mixture:</p>
            <MathJax.Node formula={eqChi}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>&chi;</i><sub>SO<sub>2</sub></sub></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 205,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 5,
    "type": "numeric",
    "questionBody": function() {
        let tempCuString = (Math.random()*(90.0 - 60.0) + 60.0).toPrecision(3);
        let tempCu = Number.parseFloat(tempCuString);
        let tempH2OString = (Math.random()*(23.0 - 15.0) + 15.0).toPrecision(3);
        let tempH2O = Number.parseFloat(tempH2OString);
        let tempString = (Math.random()*(30.0 - 24.0) + 24.0).toPrecision(3);
        let temp = Number.parseFloat(tempString);
        let volString = (Math.random()*(190 - 110) + 110).toPrecision(2);
        let vol = Number.parseFloat(volString);
        let qH2O = vol*1.00*4.184*(temp - tempH2O);
        let qH2OString = qH2O.toPrecision(3);
        let qCu = -qH2O;
        let qCuString = qCu.toPrecision(3);
        let answer = qCu/(0.386*(temp - tempCu));
        let ansString = answer.toPrecision(3);

        var description = (
          <React.Fragment>
            <p>A piece of copper metal is heated to {tempCuString}&nbsp;&#176;C
            and is then dropped into {vol}&nbsp;mL of water at {tempH2OString}&nbsp;&#176;C.
            When thermal equilibriuum is reached, the temperature is {tempString}&nbsp;&#176;C.
            What was the mass of the copper?</p>
            <p>Specific heat of copper = 0.386&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></p>
            <p>Specific heat of water = 4.184&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></p>
            <p>Density of water = 1.00&nbsp;g&nbsp;mL<sup>&#8211;1</sup></p>
          </React.Fragment>
        );

        const eqQ = "q_\\text{copper} = - q_\\text{water}";
        const eqQH2O = `\\begin{eqnarray*}
          q_\\text{water} & = & m_\\text{water} c_\\text{water} \\Delta T_\\text{water} \\\\
          & = & (${vol} \\text { mL} \\times 1.00 \\text{ g/mL})
          (4.184 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})
          (${tempString}\\,^{\\circ}\\text{C} - ${tempH2OString}\\,^{\\circ}\\text{C}) \\\\
          & = & ${Number.parseFloat(qH2OString)} \\text{ J}
          \\end{eqnarray*}`;
        const eqQCu = `q_\\text{copper} = -(${Number.parseFloat(qH2OString)} \\text{ J})`;
        const eqMassCu = `\\begin{eqnarray*}
          ${Number.parseFloat(qCuString)} \\text{ J} & = & m_\\text{Cu} c_\\text{Cu} \\Delta T_\\text{Cu} \\\\
          & = & m_\\text{Cu} (0.386 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})
          (${tempString}\\,^{\\circ}\\text{C} - ${tempCuString}\\,^{\\circ}\\text{C}) \\\\
          m_\\text{Cu} & = & ${ansString} \\text{ g}
          \\end{eqnarray*}`;

        var feedback = (
          <React.Fragment>
            <MathJax.Provider>
              <p>When the copper and the water are combined, copper is losing heat and
              water is gaining it, so</p>
              <MathJax.Node formula={eqQ}/>
              <p>We have all the necessary data to find the heat gained by the water:</p>
              <MathJax.Node formula={eqQH2O}/>
              <p>Therefore, the heat lost by the copper is</p>
              <MathJax.Node formula={eqQCu}/>
              <p>We can now use it to find the unknown mass of correr:</p>
              <MathJax.Node formula={eqMassCu}/>
            </MathJax.Provider>
          </React.Fragment>
        );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>m</i><sub>Cu</sub></React.Fragment>),
        units: "g"
      }, feedback};
    }()
  },
  {
    "_id": 206,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 6,
    "type": "numeric",
    "questionBody": function() {
      let answer = 715 + (-394 - 2*286);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>The standard enthalpy of combustion of methanol, CH<sub>3</sub>OH(l), is
          &#8211;715&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>. What is the standard enthalpy of
          formation of CH<sub>3</sub>OH(l)?</p>
        <table className="data-table mb-5">
          <tbody>
            <tr>
              <th>Species</th>
              <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
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
        \\Delta H^{\\circ}_\\text{rxn} & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} -
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        -715 \\text{ kJ/mol} & = & [(1)(-394) + (2)(-286)] \\text{ kJ/mol} -
        [\\Delta H^{\\circ}_\\text{f}(\\text{CH}_3\\text{OH}) + (3/2)(0)] \\text{ kJ/mol} \\\\
        \\Delta H^{\\circ}_\\text{f}(\\text{CH}_3\\text{OH}) & = & ${ansString} \\text{ kJ/mol}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, write down the combustion reaction for methanol:</p>
            <p className="eqn">CH<sub>3</sub>OH(l) + 3/2 O<sub>2</sub>(g) &#8594; CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l)</p>
            <p>As stated in the question, the enthalpy of this reaction is &#8211;715&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>.
            So, express this enthalpy in terms of the enthalpies of formation of
            the reactants and products and find the unknown enthalpy of formation:</p>
            <MathJax.Node formula={eqdH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>H</i>&#176;<sub>f</sub>(CH<sub>3</sub>OH(l))</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 207,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 7,
    "type": "numeric",
    "questionBody": function() {
      let answer = 103 + 2*(-36.0);

      var description = (
        <React.Fragment>
          <p>Consider:</p>
          <p className="eqn">Br<sub>2</sub>(g) + H<sub>2</sub>(g) &#8594; 2 HBr(g)&#160;&#160;&#160;has &#916;<i>H</i>&#176; = &#8211;103&nbsp;kJ</p>
          <p>Determine the enthalpy of vaporization of liquid bromine.</p>
          <p>&#916;<i>H</i>&#176;<sub>f</sub> of HBr(g) = &#8211;36&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const eqdH = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn} & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} -
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        -103 \\text{ kJ/mol} & = & [(2)(-36.0)] \\text{ kJ/mol} -
        [\\Delta H^{\\circ}_\\text{f}(\\text{Br}_2(\\text{l})) + (1)(0)] \\text{ kJ/mol} \\\\
        \\Delta H^{\\circ}_\\text{f}(\\text{Br}_2(\\text{l})) & = & ${answer} \\text{ kJ/mol}
        \\end{eqnarray*}`;
      const eqdHVap = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn} & = & ${answer} \\text{ kJ/mol} - 0 \\text{ kJ/mol} \\\\
        & = & ${answer} \\text{ kJ/mol}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Let us express the enthalpy of the reaction in terms of the enthalpies
            of formation of its reactants and products and substitute all the available data:</p>
          <MathJax.Node formula={eqdH}/>
          <p>Now, write down the equation that corresponds to the vaporization of bromine:</p>
          <p className="eqn">Br<sub>2</sub>(l) &#8594; Br<sub>2</sub>(g)</p>
          <p>The enthalpy of formation of liquid bromine is zero since it is the standard state.
          So, the enthalpy of vaporization is just</p>
        <MathJax.Node formula={eqdHVap}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>H</i>&#176;<sub>vap</sub>(Br<sub>2</sub>)</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 208,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 8,
    "type": "numeric",
    "questionBody": function() {
      let answer = 536;
      var description = (
        <React.Fragment>
          <p>POCl<sub>3</sub> has the structure shown below. The P&#8211;Cl bond
          enthalpy is 329&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>. Calculate the bond
          enthalpy of (P=O) in this molecule.</p>
        <p className="eqn"><img src="data:image/png;base64,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" alt="POCl3"/></p>
        <table className="data-table mb-5">
          <tbody>
            <tr>
              <th>Species</th>
              <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
            </tr>
            <tr>
              <td>POCl<sub>3</sub>(g)</td>
              <td>&#8211;592</td>
            </tr>
            <tr>
              <td>P(g, at)</td>
              <td>316</td>
            </tr>
            <tr>
              <td>O(g, at)</td>
              <td>249</td>
            </tr>
            <tr>
              <td>Cl(g, at)</td>
              <td>122</td>
            </tr>
          </tbody>
        </table>
        </React.Fragment>
      );

      const eqTBEdH = `\\begin{eqnarray*}
        TBE & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})} -
        \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & [(1)(316) + (1)(249) + (3)(122)] \\text{ kJ/mol} - (1)(-592) \\text{ kJ/mol} \\\\
        & = & 1523 \\text{ kJ/mol}
        \\end{eqnarray*}`;
      const eqTBE = `\\begin{eqnarray*}
        TBE & = & \\sum{BE(\\text{reactants})} - \\sum{BE(\\text{products})} \\\\
        1523 \\text{ kJ/mol} & = & [(3)(329) + BE(\\text{P=O})] \\text{ kJ/mol} - 0 \\text{ kJ/mol}
        \\end{eqnarray*}`;
      const eqBE = `BE(\\text{P=O}) = 536 \\text{ kJ/mol}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the reaction that corresponds to the TBE of POCl<sub>3</sub>.
            This reaction will help to connect the data that we are given.</p>
            <p className="eqn">POCl<sub>3</sub>(g) &#8594; P(g, at) + O(g, at) + 3 Cl(g, at)</p>
            <p>Express the TBE in terms of the enthalpies of formation of the reactant and the products:</p>
            <MathJax.Node formula={eqTBEdH}/>
            <p>The same TBE can be expressed using bond enthalpies (note that the bond enthalpies of
            the products are zero since they are all in atomic states):</p>
            <MathJax.Node formula={eqTBE}/>
            <p>Thus,</p>
            <MathJax.Node formula={eqBE}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>BE</i>(P=O)</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 209,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 9,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <p>Which of the following statements is/are correct?</p>
      );

      let statements= [
        {text: (<p>A reaction in which the entropy of the system increases can be spontaneous only if it is exothermic.</p>),
        correct: false},
        {text: (<p>A reaction in which the entropy of the system increases can be spontaneous only if it is endothermic.</p>),
        correct: false},
        {text: (<p>A reaction in which the entropy of the system decreases can be spontaneous only if it is endothermic.</p>),
        correct: false},
        {text: (<p>A reaction in which the entropy of the system decreases can be spontaneous only if it is exothermic.</p>),
        correct: true},
        {text: (<p>A reaction in which the entropy of the system increases can be spontaneous regardless of it being exothermic or endothermic.</p>),
        correct: true},
        {text: (<p>A reaction in which the entropy of the system decreases can be spontaneous regardless of it being exothermic or endothermic.</p>),
        correct: false}
      ];
      let statementsSelected = [];
      while (statementsSelected.length < 3) {
        let i = Math.floor(Math.random()*statements.length);
        statementsSelected.push(statements[i]);
        statements.splice(i, 1);
      }

      var options = statementsSelected.map(statement => {
        return {text: statement.text, correct: statement.correct, id: statementsSelected.indexOf(statement)};
      });

      var feedback = (
        <p>If a reaction is entropically-driven (the entropy increases), then in can
        be spontaneous regardless of it being exo- or endothermic. But if it is not
        entropically-driven (the entropy decreases), then it has to be
        enthalpically-driven in order to be spontaneous, meaning that it
        has to be exothermic.</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 210,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 2,
    "idInExam": 10,
    "type": "numeric",
    "questionBody": function() {
      let tempString = (Math.random()*(299.50 - 260.00) + 260.00).toPrecision(5);
      let temp = Number.parseFloat(tempString);
      let answer = -114.1 - temp*(-0.146);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Calculate &#916;<i>G</i> at {tempString}&nbsp;K for the reaction:</p>
          <p className="eqn">2 NO(g) + O<sub>2</sub>(g) &#8594; 2 NO<sub>2</sub>(g)</p>
          <p>&#916;<i>H</i>&#176; = &#8211;114.1&nbsp;kJ and &#916;<i>S</i>&#176; = &#8211;146&nbsp;kJ&nbsp;K<sup>&#8211;1</sup></p>
        </React.Fragment>
      );

      const eqdG = `\\begin{eqnarray*}
        \\Delta G^{\\circ} & = & \\Delta H^{\\circ} - T\\Delta S^{\\circ} \\\\
        & = & -114.1 \\text{ kJ} - (${tempString} \\text{ K})(-0.146 \\text{ kJ/K}) \\\\
        & = & ${ansString} \\text{ kJ}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Use the Gibbs equation and simply substitute all the data. Remember
            to convert the entropy to kJ in order to have consistent energy units.</p>
          <MathJax.Node formula={eqdG}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>G</i></React.Fragment>),
        units: "kJ"
      }, feedback};
    }()
  },
  {
    "_id": 211,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 11,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>The following gas-phase equilibria have the equilibrium constants shown.
          What is the correct expression for <i>K</i><sub>3</sub> in terms
          of <i>K</i><sub>1</sub> and <i>K</i><sub>2</sub>?</p>
        <table className="mb-5">
            <tbody>
              <tr>
                <td><p className="eqn">2 H<sub>2</sub>(g) + O<sub>2</sub>(g) &#8644; 2 H<sub>2</sub>O(g)</p></td>
                <td className="pl-3"><p><i>K</i><sub>1</sub></p></td>
              </tr>
              <tr>
                <td><p className="eqn">H<sub>2</sub>(g) + O<sub>2</sub>(g) &#8644; H<sub>2</sub>O<sub>2</sub>(g)</p></td>
                <td className="pl-3"><p><i>K</i><sub>2</sub></p></td>
              </tr>
              <tr>
                <td><p className="eqn">H<sub>2</sub>O<sub>2</sub>(g) + H<sub>2</sub>O(g) &#8644; 1/2 O<sub>2</sub>O(g)</p></td>
                <td className="pl-3"><p><i>K</i><sub>3</sub></p></td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      var options = [
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"K_3 = \\frac{(K_2)^2}{K_1}"}/></MathJax.Provider></p>),
        correct: false,
        id: 0},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"K_3 = \\frac{K_1}{(K_2)^2}"}/></MathJax.Provider></p>),
        correct: false,
        id: 1},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"K_3 = \\frac{(K_1)^{0.5}}{K_2}"}/></MathJax.Provider></p>),
        correct: true,
        id: 2},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"K_3 = \\frac{K_1}{(K_2)^{0.5}}"}/></MathJax.Provider></p>),
        correct: false,
        id: 3},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"K_3 = \\frac{K_1}{K_2}"}/></MathJax.Provider></p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>In order to produce the target reaction, we need to take a half of the first
          reaction (since we need only one mole of H<sub>2</sub>O(g) on the right-hand side)
          and add the reverse of the second reaction (since we need one mole of H<sub>2</sub>O<sub>2</sub>(g)
          on the left-hand side instead). Multiplying a reaction by a factor translates
          into raising the corresponting <i>K</i> to a power, and reversing means
          multiplying by (-1), so, the target constant is</p>
          <MathJax.Provider>
            <MathJax.Node formula={"K_3 = (K_1)^{0.5}(K_2)^{-1} = \\frac{(K_1)^{0.5}}{K_2}"}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 212,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 12,
    "type": "MS",
    "questionBody": function() {
      let pSO2String = (Math.random()*(100 - 1.00) + 1.00).toPrecision(3);
      let pSO2 = Number.parseFloat(pSO2String);
      let pO2String = (Math.random()*(100 - 1.00) + 1.00).toPrecision(3);
      let pO2 = Number.parseFloat(pO2String);
      let pSO3String = (Math.random()*(995 - 10.0) + 10.0).toPrecision(3);
      let pSO3 = Number.parseFloat(pSO3String);
      let q = pSO3/(pSO2*Math.sqrt(pO2));
      let qString = q.toPrecision(3);
      let words = ["greater than", "there is too much product in the mixture, so the reactants will be produced when time passes."];
      if (Math.abs(q - 440)/440 < 0.003) words = ["essentially equal to", "the mixture is at equlibrium."];
      else if ((q - 440)/440 < -0.003) words = ["less than", "there is too much reactants in the mixture, so the product will be produced when time passes."];

      var description = (
        <React.Fragment>
          <p>Consider the gas phase equilibrium</p>
          <p className="eqn">SO<sub>2</sub> + 1/2 O<sub>2</sub> &#8644; SO<sub>3</sub>&#160;&#160;&#160;<i>K</i><sub>p</sub> = 440 at 1400&nbsp;K</p>
          <p>At a given point in time, a reaction mixture at 1400&nbsp;K contained {pSO2String}&nbsp;atm of SO<sub>2</sub>,
          {pO2String}&nbsp;atm of O<sub>2</sub> and {pSO3String}&nbsp;atm of SO<sub>3</sub>. Which of the
          following statements describing this mixture is/are correct?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>The mixture is at equilibrium.</p>),
        correct: (Math.abs(q - 440)/440 < 0.003),
        id: 0},
        {text: (<p>The mixture is not at equilibrium and more SO<sub>3</sub> will be formed as time passes.</p>),
        correct: ((q - 440)/440 < -0.003),
        id: 1},
        {text: (<p>The mixture is not at equilibrium and more SO<sub>2</sub> will be formed as time passes.</p>),
        correct: ((q - 440)/440 > 0.003),
        id: 2},
        {text: (<p><i>K</i><sub>p</sub> would not change if extra O<sub>2</sub> were added to the mixture.</p>),
        correct: true,
        id: 3},
      ];

      const eqQ = `\\begin{eqnarray*}
        Q & = & \\frac{P_{\\text{SO}_3}}{P_{\\text{SO}_2} (P_{\\text{O}_2})^{0.5}} \\\\
        & = & \\frac{${pSO3String}}{(${pSO2String})(${pO2String})^{0.5}} \\\\
        & = & ${Number.parseFloat(qString)}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>To determine if the mixture is at equilibrium, calculate the reaction quotient:</p>
            <MathJax.Node formula={eqQ}/>
            <p>Since <i>Q</i> is {words[0]} <i>K</i><sub>p</sub>, {words[1]}</p>
            <p>As for the addition of extra O<sub>2</sub>, it will only change the
              reaction quotient but not the constant.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 213,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 13,
    "type": "numeric",
    "questionBody": function() {
      let dG = 4000 - (298.15*44);
      let dGString = dG.toPrecision(2);
      let lnK = -dG/(8.314*298.15);
      let lnKString = lnK.toPrecision(3);
      let answer = Math.exp(lnK);
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>Consider the dissolution of sodium chloride:</p>
          <p className="eqn">NaCl(s) &#8644; Na<sup>+</sup>(aq) + Cl<sup>&#8211;</sup>(aq)</p>
          <p>&#916;<i>H</i>&#176;<sub>rxn</sub> = 4.0&nbsp;kJ&#160;&#160;&#160;&#916;<i>S</i>&#176;<sub>rxn</sub> = 44&nbsp;J&nbsp;K<sup>&#8211;1</sup></p>
          <p>Calculate the equilibrium constant for this process.</p>
        </React.Fragment>
      );

      const eqdG = `\\begin{eqnarray*}
        \\Delta G^{\\circ}_\\text{rxn} & = & \\Delta H^{\\circ}_\\text{rxn} - T \\Delta S^{\\circ}_\\text{rxn} \\\\
        & = & 4000 \\text{ J} - (298.15 \\text{ K})(44 \\text{ J K}^{-1}) \\\\
        & = & ${Number.parseFloat(dGString)} \\text{ J}
        \\end{eqnarray*}`;
      const eqK = `\\begin{eqnarray*}
        \\Delta G^{\\circ}_\\text{rxn} & = & -RT \\ln{K} \\\\
        \\ln{K} & = & -\\frac{\\Delta G^{\\circ}_\\text{rxn}}{RT} \\\\
        & = & -\\frac{${Number.parseFloat(dGString)} \\text{ J}}
        {(8.314 \\text{ J mol}^{-1}\\text{ K}^{-1})(298.15 \\text{ K})} \\\\
        & = & ${lnKString} \\\\
        K & = & e^{${lnKString}} = ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, calculate the Gibbs free energy change of the reaction. Remember
            to convert the enthalpy change to joules in order to have consistent
            energy units. The temperature in the equation has to be standard, 298.15&nbsp;K.</p>
            <MathJax.Node formula={eqdG}/>
            <p>Now we can calculate the constant by rearranging the following equation:</p>
            <MathJax.Node formula={eqK}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 214,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 14,
    "type": "numeric",
    "questionBody": function() {
      let slopeString = (Math.random()*(150000 - 10000) + 10000).toPrecision(5);
      let slope = Number.parseFloat(slopeString);
      let answerJ = -slope*8.314;
      let ansJString = answerJ.toPrecision(3);
      let answer = answerJ/1000;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>For a particular equilibrium reaction, a plot of ln<i>K</i> versus
          1/<i>T</i> yields a straight line with a slope of {Number.parseFloat(slopeString)}&nbsp;K.
          What is &#916;<i>H</i>&#176; for this reaction?</p>
      );

      const eqLnK = "\\ln{K} = \\frac{-\\Delta H^{\\circ}}{R} \\Big( \\frac{1}{T} \\Big) + \\frac{\\Delta S^{\\circ}}{R}";
      const eqSlope = `${Number.parseFloat(slopeString)} \\text{ K} = \\frac{-\\Delta H^{\\circ}}{R}`;
      const eqdH = `\\begin{eqnarray*}
        \\Delta H^{\\circ} & = & -(${Number.parseFloat(slopeString)} \\text{ K})(8.314 \\text{ J mol}^{-1}\\text{ K}^{-1}) \\\\
        & = & ${Number.parseFloat(ansJString)} \\text{ J mol}^{-1} \\\\
        & = & ${Number.parseFloat(ansString)} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The equation that describes ln<i>K</i> as a function of 1/<i>T</i> is</p>
            <MathJax.Node formula={eqLnK}/>
            <p>Comparing this equations to the general equation of a straight line,
            (<i>y</i> = slope &#215; <i>x</i> + intercept) shows that the slope is</p>
          <MathJax.Node formula={eqSlope}/>
          <p>So, the &#916;<i>H</i>&#176; is</p>
          <MathJax.Node formula={eqdH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>H</i>&#176;</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 215,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 15,
    "type": "numeric",
    "questionBody": function() {
      let sString = (Math.random()*(2.9e-8 - 2.5e-8) + 2.5e-8).toPrecision(2);
      let s = Number.parseFloat(sString);
      let cPO4 = s*2/3;
      let cPO4String = cPO4.toPrecision(2);
      let answer = Math.pow(s, 3)*Math.pow(cPO4, 2);
      let ansString = answer.toPrecision(2);

      var description = (
        <p>At 25&nbsp;&#176;C, a saturated solution of Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> has
        [Ba<sup>2+</sup>] = {sString}&nbsp;M. What is the <i>K</i><sub>sp</sub> for Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>?</p>
      );

      const eqK = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Ba}^{2+}]^3 [{\\text{PO}_4}^{2-}]^2 \\\\
        & = & (${sString})^3(${cPO4String})^2 \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the equilibrium corresponding to the dissolution of Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> and
            construct an ICE table (all quantities in the ICE table should be in mols per liter). When
            filling the table, start with the known equilibrium concentration of Ba<sup>2+</sup> and
            figure out what the change should be to achieve this concentration, then use stoichiometry
            to calculate the change for PO<sub>4</sub><sup>2&#8211;</sup>.</p>
            <table className="ice">
              <thead>
                <tr>
                  <th></th>
                  <th>Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>(s)</th>
                  <th>&#8646;</th>
                  <th>3 Ba<sup>2+</sup>(aq)</th>
                  <th>+</th>
                  <th>2 PO<sub>4</sub><sup>2&#8211;</sup>(aq)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;(1/3)({sString})</td>
                  <td></td>
                  <td>+{sString}</td>
                  <td></td>
                  <td>+(2/3)({sString})</td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>{sString}</td>
                  <td></td>
                  <td>(2/3)({sString})</td>
                </tr>
              </tbody>
            </table>
            <p>Now use the equilibrium concentrations to calculate the <i>K</i><sub>sp</sub>:</p>
            <MathJax.Node formula={eqK}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i><sub>sp</sub></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 216,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 16,
    "type": "numeric",
    "questionBody": function() {
      let k = 5.6e-12;
      let kString = k.toPrecision(2);
      let pHString = (Math.random()*(12.50 - 10.50) + 10.50).toPrecision(4);
      let pH = Number.parseFloat(pHString);
      let cOH = Math.pow(10, (pH-14));
      let cOHString = cOH.toPrecision(2);
      let answer = k/Math.pow(cOH, 2);
      let ansString = answer.toPrecision(2);

      var description = (
        <p>What is the solubility of Mg(OH)<sub>2</sub> (<i>K</i><sub>sp</sub> = {kString}&nbsp;)
        in a solution with pH {pHString}?</p>
      );

      const eqOH = `\\begin{eqnarray*}
        [\\text{OH}^-] & = & 10^{-\\text{pOH}} \\\\
        & = & 10^{-(14 - ${pHString})} \\\\
        & = & ${cOHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqS = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Mg}^{2+}] [\\text{OH}^-]^2 \\\\
        ${kString} & = & (x)(${cOHString})^2 \\\\
        x & = & ${ansString} \\text{ M}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, let us find the concentration of OH<sup>-</sup> ions
            in the solution:</p>
            <MathJax.Node formula={eqOH}/>
            <p>Write down the equilibrium and construct an ICE table (all quantities
              should be in moles per liter):</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>Mg(OH)<sub>2</sub>(s)</th>
                  <th>&#8646;</th>
                  <th>Mg<sup>2+</sup>(aq)</th>
                  <td>+</td>
                  <th>2 OH<sup>&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>{cOHString}</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+2<i>x</i></td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>({cOHString} + 2<i>x</i>)</td>
                </tr>
              </tbody>
            </table>
            <p>Since <i>x</i> is negligibly small compared to {cOHString}&nbsp;M,
            the equilibrium concentration of OH<sup>&#8211;</sup> is approximately {cOHString}&nbsp;M.</p>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>sp</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqS}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>s</i></React.Fragment>),
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 217,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 17,
    "type": "numeric",
    "questionBody": function() {
      let k = 3.4e-11;
      let kString = k.toPrecision(2);
      let volString = (Math.random()*(900 - 200) + 200).toPrecision(1);
      let vol = Number.parseFloat(volString);
      let cFString = (Math.random()*(0.400 - 0.150) + 0.150).toPrecision(3);
      let cF = Number.parseFloat(cFString);
      let cCaString = (Math.random()*(0.090 - 0.030) + 0.030).toPrecision(2);
      let cCa = Number.parseFloat(cCaString);
      let cNewF = cF/2;
      let cNewFString = cNewF.toPrecision(3);
      let cNewCa = cCa/2;
      let cNewCaString = cNewCa.toPrecision(2);
      let cNew2F = cNewF - 2*cNewCa;
      let cNew2FString = cNew2F.toPrecision(2);
      let answer = k/Math.pow(cNew2F, 2);
      let ansString = answer.toPrecision(2);

      var description = (
        <React.Fragment>
          <p>{vol}&nbsp;mL of each of {cFString}&nbsp;NaF and {cCaString}&nbsp;M CaCl<sub>2</sub> are
          mixed. Calculate the concentration of Ca<sup>2+</sup> remaining in the solution
          after the precipitation of CaF<sub>2</sub> is complete.</p>
        <p><i>K</i><sub>sp</sub> of CaF<sub>2</sub> = {kString}</p>
        </React.Fragment>
      );

      const eqCa = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Ca}^{2+}] [\\text{F}^-]^2 \\\\
        ${kString} & = & (x)(${cNew2FString})^2 \\\\
        x & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>After the mixing, the concentrations of the two solutions changed,
            and since the volume exactly doubled, the two concentrations were halved,
            so, <i>c</i><sub>NaF</sub> = {cNewFString}&nbsp;M and <i>c</i><sub>CaCl<sub>2</sub></sub> = {cNewCaString}&nbsp;M.</p>
            <p>We will treat the process as a two-step one: first, F<sup>&#8211;</sup> from
            NaF and Ca<sup>2+</sup> from CaCl<sub>2</sub> will react completely to form precipitate,
            then some of this precipitate will be dissolved. So, the first step is</p>
          <table className="ice">
            <tbody>
              <tr>
                <th></th>
                <th>Ca<sup>2+</sup>(aq)</th>
                <th>+</th>
                <th>2 F<sup>&#8211;</sup>(aq)</th>
                <th>&#8594;</th>
                <th>CaF<sub>2</sub>(s)</th>
              </tr>
              <tr>
                <td>initial</td>
                <td>{cNewCaString}</td>
                <td></td>
                <td>{cNewFString}</td>
                <td></td>
                <td>&#10006;</td>
              </tr>
              <tr>
                <td>change</td>
                <td>&#8211;{cNewCaString}</td>
                <td></td>
                <td>&#8211;2 &#215; {cNewCaString}</td>
                <td></td>
                <td>+{cNewCaString}</td>
              </tr>
              <tr>
                <td>final</td>
                <td>0</td>
                <td></td>
                <td>({cNewFString} &#8211; 2 &#215; {cNewCaString})</td>
                <td></td>
                <td>&#10006;</td>
              </tr>
            </tbody>
          </table>
          <p>The above process is not an equilibrium, so we determined that
          Ca<sup>2+</sup> was the limiting reagent and used its amount to
          calculate all the changes.</p>
          <p>In the second step, some of the calcium fluoride will dissolve:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>CaF<sub>2</sub>(s)</th>
                  <th>&#8646;</th>
                  <th>Ca<sup>2+</sup>(aq)</th>
                  <th>+</th>
                  <th>2 F<sup>&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>{cNew2FString}</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+2<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>({cNew2FString} + 2<i>x</i>)</td>
                </tr>
              </tbody>
            </table>
            <p>Since <i>x</i> is very small compared to {cNew2FString}&nbsp;M, the equilibrium
            concentration of F<sup>&#8211;</sup> is approximately {cNew2FString}&nbsp;M.
            We can now substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>sp</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqCa}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>c</i><sub>Ca<sup>2+</sup></sub></React.Fragment>),
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 218,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 18,
    "type": "numeric",
    "questionBody": function() {
      let k = 6.4e-5;
      let kString = k.toPrecision(2);
      let cString = (Math.random()*(0.300 - 0.100) + 0.100).toPrecision(3);
      let c = Number.parseFloat(cString);
      let cH = Math.sqrt(k*c);
      let cHString = cH.toPrecision(3);
      let answer = -Math.log10(cH);
      let ansString = answer.toPrecision(3);

      var description = (
        <p>Calculate the pH of a {cString}&nbsp;M solution of benzoic acid,
        C<sub>6</sub>H<sub>5</sub>COOH. The <i>K</i><sub>a</sub> for benzoic
        acid is {kString}.</p>
      );

      const eqH = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{C}_6\\text{H}_5\\text{COO}^-]}
        {\\text{C}_6\\text{H}_5\\text{COOH}} \\\\
        ${kString} & = & \\frac{x^2}{${cString}} \\\\
        x & = & ${cHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${cHString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the equilibrium and construct an ICE table:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>C<sub>6</sub>H<sub>5</sub>COOH(aq)</th>
                  <th>&#8646;</th>
                  <th>H<sup>+</sup>(aq)</th>
                  <th></th>
                  <th>C<sub>6</sub>H<sub>5</sub>COO<sup>&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cString} &#8211; <i>x</i>)</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Since <i>x</i> is very small compared to {cString}&nbsp;M,
            the equilibrium concentration of C<sub>6</sub>H<sub>5</sub>COOH is
            approximately {cString}&nbsp;M.</p>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>a</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqH}/>
            <p>Recall that [H<sup>+</sup>] = <i>x</i> = {cHString}&nbsp;M. Therefore,
            the pH is</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 219,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 19,
    "type": "numeric",
    "questionBody": function() {
      let molString = (Math.random()*(0.080 - 0.030) + 0.030).toPrecision(2);
      let mol = Number.parseFloat(molString);
      let rString = (Math.random()*(0.55 - 0.30) + 0.30).toPrecision(2);
      let r = Number.parseFloat(rString);
      let c = mol/0.5;
      let cString = c.toPrecision(2);
      let x = r*c/(1+r);
      let xString = x.toPrecision(2);
      let answer = Math.pow(x, 2)/(c - x);
      let ansString = answer.toPrecision(2);

      var description = (
        <p>When {molString}&nbsp;mole of a weak acid (HA) is dissolved in
        500&nbsp;mL of water, the ratio of [A<sup>&#8211;</sup>] to [HA] at
        equilibrium is found to be {rString}. Calculate the <i>K</i><sub>a</sub> for
        this acid.</p>
      );

      const eqC = `\\begin{eqnarray*}
        c & = & \\frac{mol}{V} \\\\
        & = & \\frac{${molString} \\text{ mol}}{0.5 \\text{ L}} \\\\
        & = & ${cString} \\text{ M}
        \\end{eqnarray*}`;
      const eqX = `\\begin{eqnarray*}
        \\frac{[\\text{A}^-]}{[\\text{HA}]} & = & \\frac{x}{${cString} - x} = ${rString} \\\\
        x & = & ${xString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqK = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^{+}][\\text{A}^-]}{[\\text{HA}]} \\\\
        & = & \\frac{(${xString})^2}{${cString} - ${xString}} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, let us calculate the initial concentration of the acid:</p>
            <MathJax.Node formula={eqC}/>
            <p>Write down the equilibrium and construct an ICE table.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>HA(aq)</th>
                  <th>&#8646;</th>
                  <th>H<sup>+</sup></th>
                  <th>+</th>
                  <th>A<sup>&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cString} &#8211; <i>x</i>)</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Since the ratio of [A<sup>-</sup>] to [HA] is fairly high, the
            acid must be not a very weak one, hence, we cannot neglect <i>x</i> when
            comparing to the initial concentration.</p>
            <p>Let us express the [A<sup>-</sup>] to [HA] ratio and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Finally, substitute the equilibrium concentrations to find the <i>K</i><sub>a</sub>:</p>
            <MathJax.Node formula={eqK}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i><sub>a</sub></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 220,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 20,
    "type": "numeric",
    "questionBody": function() {
      let k1 = 7.1e-3;
      let k1String = k1.toPrecision(2);
      let k2 = 6.3e-8;
      let k2String = k2.toPrecision(2);
      let k3 = 4.5e-13;
      let k3String = k3.toPrecision(2);
      let cString = (Math.random()*(0.250 - 0.100) + 0.100).toPrecision(3);
      let c = Number.parseFloat(cString);
      let kB = 1e-14/k1;
      let kBString = kB.toPrecision(2);
      let x = Math.sqrt(k2*c);
      let xString = x.toPrecision(3);
      let answer = -Math.log10(x);

      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Calculate the pH of a {cString}&nbsp;M solution of KH<sub>2</sub>PO<sub>4</sub>.</p>
          <p>For H<sub>3</sub>PO<sub>4</sub>, <i>K</i><sub>a1</sub> = {k1String}, <i>K</i><sub>a2</sub> = {k2String}, <i>K</i><sub>a3</sub> = {k3String}</p>
        </React.Fragment>
      );

      const eqKb = `\\begin{eqnarray*}
        K_\\text{b} & = & \\frac{K_\\text{w}}{K_\\text{a1}} \\\\
        & = & \\frac{10^{-14}}{${k1String}} \\\\
        & = & ${kBString}
        \\end{eqnarray*}`;
      const eqX = `\\begin{eqnarray*}
        K_\\text{a2} & = & \\frac{[\\text{H}^+][{\\text{HPO}_4}^{2-}]}{[{\\text{H}_2\\text{PO}_4}^-]} \\\\
        ${k2String} & = & \\frac{x^2}{${cString}} \\\\
        x & = & ${xString}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${xString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> ion from KH<sub>2</sub>PO<sub>4</sub> is
            a weak acid and a weak base at the same time. As an acid, it dissociates
            in the following way:</p>
            <p className="eqn">H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> &#8646; H<sup>+</sup> + HPO<sub>4</sub><sup>2&#8211;</sup></p>
            <p>This equilibrium corresponds to <i>K</i><sub>a2</sub> of H<sub>3</sub>PO<sub>4</sub>.</p>
            <p>And as a base:</p>
            <p className="eqn">H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> + H<sub>2</sub>O &#8646; H<sub>3</sub>PO<sub>4</sub> + OH<sup>&#8211;</sup></p>
            <p>So, H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> is a conjugate base of H<sub>3</sub>PO<sub>4</sub>, which means that
              its <i>K</i><sub>b</sub> is</p>
            <MathJax.Node formula={eqKb}/>
            <p>Since <i>K</i><sub>a2</sub> is higher than the calculated <i>K</i><sub>b</sub>, the
            acidic behavior of H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> dominates in the solution.
            Therefore, we will set up an ICE table for H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> as an acid.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup></th>
                  <th>&#8646;</th>
                  <th>H<sup>+</sup></th>
                  <th>+</th>
                  <th>HPO<sub>4</sub><sup>2&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cString} &#8211; <i>x</i>)</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>We can now substitute the equilibrium concentrations into the
            expression for <i>K</i><sub>a2</sub> (neglect <i>x</i> when compared
            to the initial concentration) and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Finally, calculate the pH:</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 221,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 21,
    "type": "MS",
    "questionBody": function() {
      let cString = (Math.random()*(0.90 - 0.10) + 0.10).toPrecision(2);

      var description = (
        <React.Fragment>
          <p>Consider a solution containing {cString}&nbsp;M H<sub>2</sub>CO<sub>3</sub> and {cString}&nbsp;M
          HCl. Which of the following statements about this muxture, when at equilibrium,
          is/are correct?</p>
        <p><i>K</i><sub>a</sub> (H<sub>2</sub>CO<sub>3</sub>) = {4.4e-7}, <i>K</i><sub>a</sub> (HCO<sub>3</sub><sup>&#8211;</sup>) = {4.7e-11}</p>
        </React.Fragment>
      );

      let statements = [
        {text: (<p>The [HCO<sub>3</sub><sup>&#8211;</sup>] = {4.7e-11}&nbsp;M</p>),
        correct: false},
        {text: (<p>The [HCO<sub>3</sub><sup>&#8211;</sup>] = {4.4e-7}&nbsp;M</p>),
        correct: false},
        {text: (<p>The [CO<sub>3</sub><sup>2&#8211;</sup>] = {4.4e-7}&nbsp;M</p>),
        correct: false},
        {text: (<p>The undissociated [H<sub>2</sub>CO<sub>3</sub>] = {cString}&nbsp;M</p>),
        correct: true},
        {text: (<p>The undissociated [H<sub>2</sub>CO<sub>3</sub>] = {cString}&nbsp;M</p>),
        correct: true},
        {text: (<p>The undissociated [H<sub>2</sub>CO<sub>3</sub>] = {4.4e-7}&nbsp;M</p>),
        correct: false},
        {text: (<p>[H<sub>3</sub>O<sup>+</sup>] = {cString}&nbsp;M</p>),
        correct: true},
        {text: (<p>The [HCO<sub>3</sub><sup>&#8211;</sup>] = {cString}&nbsp;M</p>),
        correct: false}
      ];
      let statementsSelected = [];
      while (statementsSelected.length < 3) {
        let i = Math.floor(Math.random()*statements.length);
        statementsSelected.push(statements[i]);
        statements.splice(i, 1);
      }

      var options = statementsSelected.map(statement => {
        return {text: statement.text,
        correct: statement.correct,
        id: statementsSelected.indexOf(statement)};
      });

      var feedback = (
        <React.Fragment>
          <p>The concentration of H<sub>3</sub>O<sup>+</sup> will be determined by the strong acid, HCl,
            that is, [H<sub>3</sub>O<sub>+</sub>] = {cString}&nbsp;M. The contribution
            of H<sub>2</sub>CO<sub>3</sub> to this concentration will be negligible.</p>
          <p>Most of H<sub>2</sub>CO<sub>3</sub> will be present in the undissociated form,
            so, [H<sub>2</sub>CO<sub>3</sub>] = {cString}&nbsp;M.</p>
          <p>The [HCO<sub>3</sub><sup>&#8211;</sup>] and [CO<sub>3</sub><sup>2&#8211;</sup>]
            would have to be calculated from an ICE table, but there is no reason
          for them to be equal to <i>K</i><sub>a</sub> values.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 222,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 22,
    "type": "order",
    "questionBody": function() {
      let acids = [
        ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABMCAMAAACSyk82AAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHgSURBVGiB7Zlbs4IgEMd76/t/RcQwvGy4zdAbB0Wd7HhjaeJc+D+E1bj7k72gcjolJf0JMQ3QiHj+zwZErlHxSP65qbqBKWRxABp0Y250HAA3AVaoovjPjRyOwPxPAB4bYAo9m5Lhw5Imn42fl+o9a1NG8t9dewsYqQidmkeecYwJcLXVkAASQAJIAAkgASSABJAAEkAC+L0AQjoFPNmFAYCJDkD3nADeBBCaAhagqIIBigAAaBXgnQ7QfTIFGdEAq+42BDkC8V3tmAMFPkjvWiWWbDBQkQxMScge6B+Hi6qnmWMlwcCsCjJQF69zX0/wNvAC0F2QRyosTdlFNb65JOTsazGGdFcrSXM9bGBFrDoUyXx1rg4a2BAHtdeWsro9bxoI3D45t/VWJG26y42/OwNYB+6fyA0X4kjBbxk4JFbj8kYYv90Oza81sBGlI1r0tMq1ZEBRu/Mo8S2SnhNbuDfYzN72DbMhxXzc09whMbW0UbJE7CvLgPttHHf1VG/U4pKmv9qq31bwBug7TueX3F6ycVMJkQbg1llJbrDa8KcDEoBtPHfvJWZSMy52/QafQfcQ4AcQJPhhAKQQBOkdORCkbNzQpFdBoEL7QLi0ASmpnfAt6taC4RbHdy348/oCAakVSloqN5UAAAAASUVORK5CYII=",
        "data:image/png;base64,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"],
        ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABMCAMAAABu32T8AAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIlSURBVGiB7ZnRsoIgEEB78/9/ESGNVMJtht72gqhXL2UIztDcOC/aNG2n3QUSTqdM5oshSoiuSm2hKVBUTIGkqUUoNuZCJJDEJh3YK0OVVuRkU6IBmdRDp4KPdwKTinyQCf0Yk7k9yNwwqeDIVteEyEFB4TW1iMlGLyD1GLZ0D1ZSSG1h6C56DGWTFdnEJZu4ZBOXbOKSTVyyiUs2cckmLtnEJZu4/CcTyuyjLGFxG1OxJhWAgGHPgUU+XEeaNFgYHfNgndZk2qBrsExs0o07QKRMnRMUv/fxJnXzGSailwLuR5nUogyMRJq7rg4DEbhdLqZssjEnNTyCZhUOV/u5GpqgAAptDgo9hmx1yAPq3WHOsp1zSa4BAcym5VAeIpHMfVIKua9h9AfOW6/9oAgVqyTSZcee+9a/XZ4l8Sy7/f1GVCeEMqWli2aby/6WF4118Q7wDtJ4VZvJV4PNM4AP9H27lG1fbAY46gCs6NutDOtBwjfeNgFgM8Ae+MZ3VT4Tx1aAfZAWnh930tvNK/U6wEYBd/H0K18KPgsgQxcAB7cMO3Ne22MFUnE+5odX66s369YM7EOFkl8BhvE4LbzLBdiPxXANHZsch9/fDBN5uMkwhRmB4PmqnA4KASJN7HLvvwj8RSFd3MSZ6JnsHrCujUx/mO15LgIfCDSJQnyqSVx1oji0T6IopxPtA8ZOJIfNJ/EoFJxHz7GHYNad8b9X8LrzPfwArNxB/Fa9AE4AAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAABMCAMAAABnNMSGAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAI2SURBVGiB7Zlbk4IgFIB76///RYQ0Ulk6zdDbWW7WWtIqMIOzy/eCk4lfXA4nOBwqlcobRAkxtqUtPEcULVMgaWkRA8XeFEQCKa2iGcGVDFVZEYtrGg3Ioh4WhtxfCSwqYtmXDd2VzWO4kMcAKglHNisLI62GwktpEQfHq4A9zG/HeGcNhdIWE+NZz61qs0i1CVNtwlSbMNUmTLUJU23CVJsw1SZMtQlTbcL8IZuGkVl5YCxtzy7J5uV/PEcQCMd92GT4U5/PhiOdfVjWBoT7MGUzKNFGMUOvbZocG2XjuesTbKQwgLbJsokorlLALdrm2VMZbEh/0z3FQMSFiZ82JHnzmcPFha0O+pi9/dkoHtFVwVBR6DbXdZJDM12TS0QFc5ufhxaNkKdNNb0+sLmCVxtzoHNkrT/QOUnRfHp0Brm/t8VJjusrsLR+vPnSHHb1j8OuDu4rez/wzfM0jrKw9IsXYMFWJH3M8AlChfxtlWiG64dlVleQ8yDveB0+9b6ePPzDbVMBDDlP8nQUCd5r1wQW/pvwJnTvLx/j0q+vVd1AhqScadVr9TtWnzVTGblYLNO+9f7G9u/cakNazn078XZebmL+9sixqVDyC4Cdp+jTqancBnlO5dh5y9G2Q28jf5qNDXNGIjqmPfI5gAw2LlXg0fFe+cTbXaTb6Gh327oWPhmnLM4mdgjckmCThNizTXpPJZF93CTRTJl3pjmVSNZ4k45CwXmWWJwFs075/C1pnfpffAPMD3HcD7iMfAAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAABxCAMAAAAtQEcVAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAH/SURBVGiB7ZvbkoIwDIa98/1fsbSA5RBL3MG7buU06gLS1Cnubv6bMgL5bNKmTjIeDizWx0u0AHW2B/loIVMtGhmdLG15G4RBERtdYz8q28ZG95N2QhOZrKwersD+H7TcDz2FWExBjyZt1cMYU6ZjtraITr7NtwGMvrV61VeVSNwHfXIrndGMZjSjGc1oRjOa0YxmNKMZ/XFoeQpE5yUVLarmGICGxgBeqG8rA9RCoygvzmkKyQYOOZakSqPGQgQZcBIF5t4vpaZKggwMSsCkQS94G7hTaiB5/dQgcf05y9TU2w08KcfrxogtPHkaY++vubnMSC36R5T0kEswrwp/yWoicAbIG+3YVGsRc0tZr9y+GcCK3BNwu3XxXrZlA+tX325ZLmLzTRx5Pm/ypqiQnJxnGc7g5raSpCdn59nniHm6Me9rtiLTevCAzh7HZT2iiIuntUYXiN2usdB/No4rujtOqVtG226GZVc290BPxyk5USRjcwTRF92fhpqcHlsr7y480S6FfNEPhXpsBHVtKYu601a0cxa9Vwofg/Z0eBA6LNZB6GRsvVFWeBg6YF8Ho52nQWv/bPYOdJfDhx8f23P4e9BBYjSjGc1oRjOa0Yxm9JPoRRnWL5JQg+KjlUXotAeaXPZjNA1d7rTKpmW2C/p/xprRUSVhl3+T/GV9A1+hVUDoHyoUAAAAAElFTkSuQmCC"],
        ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAnCAMAAADjLvBbAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAGnSURBVFiF7ZfZjoMgFIa94/1f8QDVUYQik7R3Z8SlVSuWLTWT9Ltxif7+ng0tii9f/hVcKNVQu6fKE22AwhsnEq0HrE80ohDsRiI91wjHMR1U8nONNEifB2caUbg4SDVC5e9PLiPA4n3UpqZSX+JuFhsjrGup8+JDStPasr9oFSVQIh935G1KTW0aCNdh1+scy8rcIwQA5bDl1sRYIyBMFarSmsUshHuwQGFDUvf+GWp4FitTmodo9MWxPhEqMEAMKo3CRvPZNaRrvcNL9soqROAB5Xy8iS8EX97SgfPlfQXess6766KDevIS8GLRCQ6q4w57L+DLNBsceIyMshMRrbyHO9NU+QxRaHKVCm07sv8Az1nRC0RO/S1cq5dMVyYg5FzLTPnZPnbP2rGAvR1qg6jHRprX2tWa68EqEY5kvYMZTQooUUGCkWVpxg4qrYeoMmySjMzNetzQBxCcwijsR3KKEVsqbfyEahBmR2WqkQJkxPJebB45fHAonIkWzGVkc/ZziJypSYFMP1A5ijUNbTK1byr9QOP2yzRxoGVgGPEqbcR/+TR/at16g5lQF8kAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAABGCAMAAAAghiykAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHkSURBVGiB7ZjJkoMgEEC9+f+/CBIdFwiSquTWIy4T7bggUONMVb9LEkvbJ71oTBKC+FeIWqmK228qv1CDKXiKVIJ1gPJCEQXMfkjg14oIGNLBpbhWpAL+/nGliILZj1ARLh9fsURY5u9RmpJLffM7uEYiWdvwzZ13yU1jy/6mlVeAHMTwRT7H1JSmYufjZPf7tJaFeXkEYCD7T2ElhhphtSnORmnMbBay1+kAiV2SsvPPQLN3sWZKizMxuuJYbjgboCc1oDTUdjXfXZO2jfPypmtldSbAD1yI4SAxC/hxlRtsXrxrgEOWed/aaaeenAI4MeuEDYr9DjsO4Mo4GzZwGBl5W3u08hrbmebKZYiyKlap8KZN10/gOCu6AJ5THyO0+sh0YU4sudAyUn7wadfU9gPYw1lpAPTQSNO9dnHPdWCRiI1kHZEZnSYsB8UCROal6TuotO5XNYMqSGRq1v2G3iGFcRlr+5AcImJLRfpPqArYZJSHiiTsUXtqzE7ZP3AomPCLpn2qdF0Ebf09kTpmakJE0vEPVIxiDRJJtInUvqEi3UAT9sk0cKCFiwwjXoWN+CgiMSERDIlgSARDIhgSwZAIhkQwJIIhEQyJYEgEQyIYEsGQCObPiKhIb9WDifRKnTjkG27EoCUFmTIkAAAAAElFTkSuQmCC"],
        ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAAfCAMAAACrmB11AAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAG+SURBVFiF7ZfRloIgEIa54/1fETRcRAnZc+puFhVLCXSMzuFi+24opPFn+BmIkC+lYf3vT1YAnhsAibSS9+ZSMAAOYTvmmovRvFAAHNX1WvmPjb2zAgFwMGXF6tvdNmcDdJkBkEjbbpPAtanPBZDbjupkABwX070aiw6RzgTRsa7zwxZw6Ytv1pdEJ0im7yXRWew5iqlBpJ6tBu0E2Jg3j4NdutrPyQC7iT8OgKM2+iiOr5EJEKVTDCrbrqwbKGJY2m1Jh29f0+baFe33xIycAmTN5N2QccDur2pAzCWNPbGqtelRg+seANRoKAlzz2mjh7oQDg8CjD9n0gKYuRxoL2VpRxTcGKkMVIvS7dGJw6318zrHcQ4PqayhhAnQLK5UwBSVgfZKsRU94Hmde7eiGzO9t4I2rtSauaV0VtrjT8mAuSadcvgaCn4hFLCYUj7NwCOBZNHY7v1S3oKfIQURU1rDaqlylbq/L+/f5h6aJkkaFsi6eyFbaQ6h0qDX7aQPrn4W6mD13Y6b25srU0WVTgJHEjvqUaWsLZxTYux+lXJTkNvKXwpX+esxc6nK757p8DQtxHSa6vRp+uWf8gcEl7TysNEfpgAAAABJRU5ErkJggg==",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAA+CAMAAABnaMvmAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAIESURBVGiB7ZrBkoMgDEC5+f+/iFpdRSnSmfaWRbGtUtEo6To7w7vQosYnhOBBxiJnw9vbT1CANDQAkkpXaasuJwbAUeiGm+aiZHpSABzZ9ZqNP0v94CcEwMGFLib/HrrcG6AJDICk0vV8EFKp8n0BqnlHtjMAjotqPhMr6RY6PSyeazqJU8AM3/Ji/RhoD97h+xjoINYyiouu8B2bnLQSYJa8YWys0sl69gZYHfjtADhyJbfijDXSA6J0Fp0ITlfedAniNH+2eTN8fps6NF3R+e55ImOArJlp0wVssOuz6rCUJaXeMau5alEn5y0AiD6hKrA9uxPd9UJkuBOgv5xXGkDZciBHlWfbI+DOWaYge5rOt04cZq7fr3MpLsNdMq0SxguQfNm0gCEqBzmaYiu6w/t17mhFV2q4bwb1sqlWtk0Sa9rid0kHW5N2ZfiUBMaJEMCXTNPhCUYqYEGUuj1eymsYnzCBYsk0h8lUhZoyfhOHr305DUoSnrBp95NgU6aOLCWLa+r0mpVEOPtBpmJj9s2Ks+3dlKlTTQfBHs+KelUprU8eU6b0epUyj1DNK38IIaam8uf9yPkqvzkm3d30OCGmdjeV/t2UlCDTPyWa0hNN6Ymm9ERTeqIpPdGUnmhKTzSlJ5rSE03piab0RFN6oik90ZSe/2Mqv/6JERVf+2YnQs4vvDPalGcsHmEAAAAASUVORK5CYII=",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAABjCAMAAADXeNDPAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJFSURBVHic7Zpdc6sgEIa98///RdSYY1SK9Ex7t8WPtEokrvK2Tjv73Jghuj7AsjijSfJnUeXZBlxSc7YBFzHFI6Z4xBSPmOIRUzxiikdM8YgpHjHFI6Z4xBSPmOIRUzxiikdM8YgpHjHFI6ZwlP7/LypA1r7GBWBS2SprzeXEADxK2yh3uBidnRSAR/7ykk8/r/ZdnRCAh6rt7O2eerfXvQGayABMKntbDkKmTbEvQLVsyHcG4HExzWNipd1KY4DVc10jOAXc8K0v1oeBDhAcvoeBjuJZRqm623417TI8HGCRvHFsrNLZeg4GeDrw2wF4FEZvxZlqZABG6Sy7OjpdVdOljNPC2RbM8OVtbrHpys73QI+cAbNmZk0XscE+n1WPtSy52h2zWpiWdXLRElHdJ1RFY8vuRPe9GBnuBegvV5UlMmM50JPK/dhT05tKckP53XS5dfJwc/31OJfxMtwntyZNVElarZuWNERVpCdTbkX3+HqcO1rRjRnum9Nt3dROj/FpOpq2/F3SY6xJuzJ8TkrTRNSk1kyzoQcTFSVRXG17vJTfaOphSuWaaUGzqYo1TdRrffjaT6dBSdOdZN58J9o0MUeW0ohv6rW6lQSc/SjTemP23Yobj2+uTJ1qOgj2BFbUZ5Wy9uQxTYx9XqVcF6pl5Y8hxtRV/qIfuVDld/9pfzc9TozpuJvq8G4KJcr0RxFTPGKKR0zxiCkeMcUjpnjEFI+Y4hFTPGKKR0zxiCkeMcUjpnh+j6n+9k+MUHzbNzsCnA/TYwBGxt7urQAAAABJRU5ErkJggg=="]
      ];

      let selectedIdxs = [];
      let items = [];
      for (let i = 0; i < 4; i++) {
        let idx = Math.floor(Math.random()*acids[i].length);
        selectedIdxs.push(idx);
        items.push({
          text: (<img style={{width: '80%'}} src={acids[i][idx]} />),
          id: i
        });
      }

      var description = (
        <p>Rank the following compounds from the smallest <i>K</i><sub>a</sub> to
        the largest <i>K</i><sub>a</sub>.</p>
      );

      var feedback = (
        <React.Fragment>
          <p>In all of the below compounds the acidic hydrogen is in the OH group.
          The presence of C=O bond near it makes the acid stronger since
          the corresponding anion is stabilized by resonance. Any electronegative
          atoms or groups also make the acid stronger (though this factor
          has less impact than the C=O bond), while any donor groups (like CH<sub>3</sub>)
          make it weaker. The closer the electronegative
          atom is to the acidic OH group, the stonger the acid. Therefore,
          the ordering is</p>
        <p className="eqn"><img className="p-3" src={acids[3][selectedIdxs[3]]}/>&#160;&lt;&#160;
          <img className="p-3" src={acids[2][selectedIdxs[2]]}/>&#160;&lt;&#160;
          <img className="p-3" src={acids[1][selectedIdxs[1]]}/>&#160;&lt;&#160;
          <img className="p-3" src={acids[0][selectedIdxs[0]]}/></p>
        </React.Fragment>
      );

      return {description, answer: {
        items,
        correctOrder: [3, 2, 1, 0],
        leftLabel: (<React.Fragment>Smallest <i>K</i><sub>a</sub></React.Fragment>),
        rightLabel: (<React.Fragment>Largest <i>K</i><sub>a</sub></React.Fragment>),
        height: "110px"
      }, feedback}
    }()
  },
  {
    "_id": 223,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 23,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <p>A buffer is prepared by dissolving 0.15&nbsp;mol of weak acid HA and
        0.15&nbsp;mol of its potassium salt, KA, in 1.00&nbsp;L solution.
        Acid HA has a p<i>K</i><sub>a</sub> of 5.2. Which of the following
        statements is/are correct about this buffer?</p>
      );

      var options = [
        {text: (<p>Its pH is equal to 5.2.</p>),
        correct: true,
        id: 0},
        {text: (<p>Dilution of the solution from 1.00&nbsp;L to 2.00&nbsp;L has little or no effect on its pH.</p>),
        correct: true,
        id: 1},
        {text: (<p>A small amount of added strong acid will be absorbed by reaction with A<sup>&#8211;</sup> ions.</p>),
        correct: true,
        id: 2},
        {text: (<p>A small amount of added strong acid will be absorbed by reaction with HA.</p>),
        correct: false,
        id: 3}
      ];

      const eqH = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]} \\\\
        [\\text{H}^+] & = & K_\\text{a} \\frac{[\\text{HA}]}{[\\text{A}^-]} \\\\
        & = & K_\\text{a} \\frac{mol_\\text{HA}}{mol_{\\text{A}^-}} \\\\
        pH & = & \\text{p}K_\\text{a} - \\log{\\frac{mol_\\text{HA}}{mol_{\\text{A}^-}}} \\\\
        & = & \\text{p}K_\\text{a} - \\log{\\frac{0.15}{0.15}} \\\\
        & = & \\text{p}K_\\text{a} = 5.2
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The concentration of H<sup>+</sup> and the pH can be found from the expression
            for the <i>K</i><sub>a</sub>:</p>
            <MathJax.Node formula={eqH}/>
            <p>As you can see in the above equation, it is the ratio of
            moles of the acid and the salt that determines the pH, and not the
            actual concentrations. When the solution is diluted, the ratio
            does not change, so the pH does not change either.</p>
            <p>A strong acid added to the buffer will react with the weak base, A<sup>&#8211;</sup>,
            and an added strong base will react with the weak acid, HA.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 224,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 24,
    "type": "numeric",
    "questionBody": function() {
      let kB = 4.2e-4;
      let kBString = kB.toPrecision(2);
      let molBString = (Math.random()*(0.060 - 0.030) + 0.030).toPrecision(2);
      let molB = Number.parseFloat(molBString);
      let molAString = (Math.random()*(0.090 - 0.050) + 0.050).toPrecision(2);
      let molA = Number.parseFloat(molAString);
      let molOHString = (Math.random()*(0.039 - 0.010) + 0.010).toPrecision(2);
      let molOH = Number.parseFloat(molOHString);
      let volString = (Math.random()*(900 - 200) + 200).toPrecision(1);
      let vol = Number.parseFloat(volString);
      let mol2B = molB + molOH;
      let mol2BString = mol2B.toPrecision(2);
      let mol2A = molA - molOH;
      let mol2AString = mol2A.toPrecision(2);
      let cOH = kB*mol2B/mol2A;
      let cOHString = cOH.toPrecision(2);
      let answer = 14 + Math.log10(cOH);
      let ansString = answer.toPrecision(4);

      var description = (
        <React.Fragment>
          <p>A buffer solution containing only {molBString}&nbsp;mol of
          CH<sub>3</sub>NH<sub>2</sub> and {molAString}&nbsp;mol of CH<sub>3</sub>NH<sub>3</sub>Cl
          has a total volume of {vol}&nbsp;mL. What is the pH after the
          addition of {molOHString}&nbsp;mol of solid NaOH to this buffer?</p>
          <p><i>K</i><sub>b</sub>(CH<sub>3</sub>NH<sub>2</sub>) = {kBString}</p>
        </React.Fragment>
      );

      const eqX = `\\begin{eqnarray*}
        K_\\text{b} & = & \\frac{[\\text{CH}_3\\text{NH}_3^+][\\text{OH}^-]}{[\\text{CH}_3\\text{NH}_2]} \\\\
        & = & \\frac{mol_{\\text{CH}_3\\text{NH}_3^+}[\\text{OH}^-]}{mol_{\\text{CH}_3\\text{NH}_2}} \\\\
        ${kBString} & = & \\frac{x(${mol2AString})}{${mol2BString}} \\\\
        x & = & ${cOHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & 14 - \\text{pOH} \\\\
        & = & 14 + \\log{[\\text{OH}^-]} \\\\
        & = & 14 + \\log{(${cOHString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>CH<sub>3</sub>NH<sub>2</sub> is a weak base, and
            CH<sub>3</sub>NH<sub>3</sub><sup>+</sup> from CH<sub>3</sub>NH<sub>3</sub>Cl
            is its conjugate acid, so the solution is a buffer. However, we are
            not interested in the pH of this initial buffer, instead, we want
            to know the composition and the pH of the solution after a stong base
            was added. NaOH will be neutralized by the weak acid, CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>,
            the corresponding reaction and the ICF table (all amounts are in moles) are given below:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>CH<sub>3</sub>NH<sub>3</sub><sup>+</sup></th>
                  <th>+</th>
                  <th>OH<sup>&#8211;</sup></th>
                  <th>&#8594;</th>
                  <th>CH<sub>3</sub>NH<sub>2</sub></th>
                  <th>+</th>
                  <th>H<sub>2</sub>O</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{molAString}</td>
                  <td></td>
                  <td>{molOHString}</td>
                  <td></td>
                  <td>{molBString}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;{molOHString}</td>
                  <td></td>
                  <td>&#8211;{molOHString}</td>
                  <td></td>
                  <td>+{molOHString}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>({molAString} &#8211; {molOHString})</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>({molBString} + {molOHString})</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p>Note that the above reaction is not an equilibrium, so we found the
            limiting reagent, OH<sup>&#8211;</sup>, and used its amount to
            calculate the change.</p>
            <p>The last row of the ICF table above shows that after the neutralization
            of NaOH, the solution is still a buffer, so we set up the corresponding
            equilibrium and fill in an ICE table in moles (this would not be allowed
            if we did not have a buffer):</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>CH<sub>3</sub>NH<sub>2</sub></th>
                  <th>+</th>
                  <th>H<sub>2</sub>O</th>
                  <th>&#8646;</th>
                  <th>CH<sub>3</sub>NH<sub>3</sub><sup>+</sup></th>
                  <th>+</th>
                  <th>OH<sup>&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{mol2BString}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{mol2AString}</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({mol2BString} &#8211; <i>x</i>)<br/>&#8776; {mol2BString}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>({mol2AString} + <i>x</i>)<br/>&#8776; {mol2BString}</td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium amounts from the above table into the
            expression for <i>K</i><sub>b</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Since [OH<sup>&#8211;</sup>] = <i>x</i>, the pH of the solution is</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 225,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 3,
    "idInExam": 25,
    "type": "MC",
    "questionBody": function() {
      let concentrations = [
        {c: 1.0,
        indicator: (<React.Fragment>Methyl Yellow (p<i>K</i><sub>a</sub> = 3.3)</React.Fragment>)},
        {c: 0.10,
        indicator: (<React.Fragment>Bromphenol Blue (p<i>K</i><sub>a</sub> = 3.8)</React.Fragment>)},
        {c: 0.010,
        indicator: (<React.Fragment>Methyl Orange (p<i>K</i><sub>a</sub> = 4.2)</React.Fragment>)},
        {c: 0.0010,
        indicator: (<React.Fragment>Bromocresol Green (p<i>K</i><sub>a</sub> = 4.7)</React.Fragment>)},
        {c: 0.00010,
        indicator: (<React.Fragment>Resorcin Blue (p<i>K</i><sub>a</sub> = 5.3)</React.Fragment>)}
      ];
      let incorrectIndicators = [
        (<p>Thymol Blue (p<i>K</i><sub>a</sub> = 2.0)</p>),
        (<p>Methyl Purple (p<i>K</i><sub>a</sub> = 5.1)</p>),
        (<p>Phenol Red (p<i>K</i><sub>a</sub> = 7.6)</p>),
        (<p>Phenolphtalein (p<i>K</i><sub>a</sub> = 9.2)</p>),
        (<p>Bromocresol Purple (p<i>K</i><sub>a</sub> = 6.4)</p>),
        (<p>Bromothymol Blue (p<i>K</i><sub>a</sub> = 7.3)</p>),
        (<p>Malachite green (p<i>K</i><sub>a</sub> = 1.3)</p>),
        (<p>Thymolphtalein (p<i>K</i><sub>a</sub> = 9.9)</p>)
      ];

      let idx = Math.floor(Math.random()*concentrations.length);
      let c = concentrations[idx].c;
      let cString = c.toPrecision(2);
      let indicator = concentrations[idx].indicator;
      let k1 = 4.4e-7;
      let k1String = k1.toPrecision(3);
      let k2 = 4.7e-11;
      let k2String = k2.toPrecision(3);
      let cNew = c/2;
      let cNewString = cNew.toPrecision(2);
      let x = Math.sqrt(k1*cNew);
      let xString = x.toPrecision(2);
      let pH = -Math.log10(x);
      let pHString = pH.toPrecision(3);

      var options = [];
      while (options.length < 4) {
        let i = Math.floor(Math.random()*incorrectIndicators.length);
        options.push({text: incorrectIndicators[i], correct: false, id: i});
        incorrectIndicators.splice(i, 1);
      }
      options.push({text: (<p>{indicator}</p>), correct: true, id: 4});

      var description = (
        <React.Fragment>
          <p>Consider the titration of {cString}&nbsp;M
            NaHCO<sub>3</sub> with {cString}&nbsp;M HCl. Which one of the
            following indicators would be most suitable for the detection of the
            equivalence point in the titration?</p>
          <p><i>K</i><sub>a</sub>(H<sub>2</sub>CO<sub>3</sub>) = {k1String}&#160;&#160;&#160;
            <i>K</i><sub>a</sub>(HCO<sub>3</sub><sup>&#8211;</sup>) = {k2String}</p>
        </React.Fragment>
      );

      const eqX = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{HCO}_3^-]}{[\\text{H}_2\\text{CO}_3]} \\\\
        ${k1String} & = & \\frac{x^2}{${cNewString}} \\\\
        x & = & ${xString}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${xString})} \\\\
        & = & ${pHString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The titration reaction is</p>
            <p className="eqn">HCO<sup>&#8211;</sup> + H<sup>+</sup> &#8594; H<sub>2</sub>CO<sub>3</sub></p>
            <p>At the equivalence point, only the product, H<sub>2</sub>CO<sub>3</sub>,
            is present in the solution (plus the spectator ions that do not affect the pH in any way).</p>
            <p>First, we need to calculate the concentration of H<sub>2</sub>CO<sub>3</sub>.
            We are not given any volumes for this titration, they can actually be arbitrary, so, let us
            take 1.0&nbsp;L of NaHCO<sub>3</sub>. Then the number of moles of NaHCO<sub>3</sub> is {cString}&nbsp;mol,
            and it would require {cString}&nbsp;mol of HCl. So, the volume of HCl is 1&nbsp;L too.
            The final concentration of H<sub>2</sub>CO<sub>3</sub> is {cString}&nbsp;mol/(1&nbsp;L + 1&nbsp;L)
            = {cNewString}&nbsp;M.</p>
            <p>Write down the equilibrium and construct an ICE table:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>H<sub>2</sub>CO<sub>3</sub></th>
                  <th>&#8644;</th>
                  <th>HCO<sup>&#8211;</sup></th>
                  <th>+</th>
                  <th>H<sup>+</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cNewString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cNewString} &#8211; <i>x</i>)<br/>
                    &#8776; {cNewString}</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equibrium concentrations into the expression
            for <i>K</i><sub>a</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>And now use this H<sup>+</sup> concentration to calculate the pH:</p>
            <MathJax.Node formula={eqpH}/>
            <p>The indicator with the p<i>K</i><sub>a</sub> value closest to this
            pH is {indicator}.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 226,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 26,
    "type": "string",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>Balance the following disproportionation reaction, which occurs in
          basic solution.</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> + Cl<sup>&#8211;</sup> &#8594; NH<sub>3</sub> + NH<sub>2</sub>Cl</p>
        <p>What are the coefficients for N<sub>2</sub>H<sub>4</sub>, OH<sup>&#8211;</sup>, and NH<sub>3</sub>?</p>
        <p><i>Enter the coefficients separated by commas.</i></p>
        </React.Fragment>
      );

      var feedback = (
        <React.Fragment>
          <p>Since this is a disproportionation reaction, the same compound,
          N<sub>2</sub>H<sub>4</sub>, will be reduced and oxidized. The first
          half-reaction (reduction) is</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> &#8594; NH<sub>3</sub></p>
        <p>Start by balancing nitrogen:</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> &#8594; 2 NH<sub>3</sub></p>
        <p>There are no oxygens to balance, so go directly to hydrogen:
        the left hand side has 2 too few, so we add 2 H<sub>2</sub>O molecules, and
        the right hand side has 2 too many, so we add 2 OH<sup>&#8211;</sup>:</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 H<sub>2</sub>O &#8594; 2 NH<sub>3</sub> + 2 OH<sup>&#8211;</sup></p>
        <p>Finally, add 2 electrons to the left hand side to balance the charge:</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 H<sub>2</sub>O + 2 <i>e</i><sup>&#8211;</sup> &#8594; 2 NH<sub>3</sub> + 2 OH<sup>&#8211;</sup></p>
        <p>Now, the oxidation half-reaction (with balanced N and Cl):</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>2</sub><sup>Cl</sup></p>
        <p>The hydrogens are already balanced, so we just add electrons to the right hand side:</p>
        <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>2</sub><sup>Cl</sup> + 2 <i>e</i><sup>&#8211;</sup></p>
        <p>Both half-reactions have 2 electrons involved, so we do not need to multiply any of them
        before adding together:</p>
      <p className="eqn">2 N<sub>2</sub>H<sub>4</sub> + 2 H<sub>2</sub>O + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>3</sub> + 2 NH<sub>2</sub><sup>Cl</sup> + 2 OH<sup>&#8211;</sup></p>
      <p>But now we notice that all the coefficients can be divided by 2:</p>
      <p className="eqn">N<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O + Cl<sup>&#8211;</sup> &#8594; NH<sub>3</sub> + NH<sub>2</sub><sup>Cl</sup> + OH<sup>&#8211;</sup></p>
        </React.Fragment>
      );

      let answer = RegExp('^\\s*1,?\\s*1,?\\s*1,?\\s*$');;

      return {description,
        answer: {
          answer,
          label: (<React.Fragment>coefficients</React.Fragment>),
          units: ""
        }, feedback};
    }()
  },
  {
    "_id": 227,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 27,
    "type": "string",
    "questionBody": function() {
      let i = Math.floor(Math.random()*4);
      let compound;
      if (i === 0) {
        compound = {
          image: "data:image/png;base64,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",
          oxStates: [2, 0]
        };
      } else if (i === 1) {
        compound = {
          image: "data:image/png;base64,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",
          oxStates: [2, -2]
        };
      } else if (i === 2) {
        compound = {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAACTCAMAAACqPBzHAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAU6SURBVHic7Z1rt6osEID95v//i6RdvESGrvY3XiCHNAVRe4FO85y1dufSGenZzHDZSUmCIAiCIMiYtOG8yUO3IgJS/iCk5KgiuTbyK7uGbkcsUBq6BZFAeBW6CZFQ8Sx0E+Kg5I/QTYiDipehmxAHFT+FbkIcoIieAkX08J7Q7UAQBEGGkPjn9Ac/l6niX/HeUh9XqXj8JhoPJnLGGZqQ0OrwBftBPkyQr9gZ82EiQRMv0ASAJgA0AaAJAE0AZfw7x55MfAFoAkATAJoA0ASAJgBfJs5+LrMDXyZY9BuZaAJAEwCaANAEgCYANAGgCQBNAGgCQBMAmgDQBIAmADQBoAkATQBoAkATEpIoE8THteI2cWtyYSJnPnZb4zZR8K4Vv7zcCRa3iUOn7mpofVwrbhPJXZnw8taGyE0UUkR38XGpyE2o9Oi8tDFyEyo9vJSJ6E2UnacyEb2JrPNUJqI3kTBPZSJ+E6WnMhG/iczXLSjRm0jufsrEF5jwdB+Y3cTpSunDy5I4AiwmsoY98hPlP/KOL7MJwhrVHX7ldBSziQd/Zijh//4pSvJwB2HCcHAWZf1vKv79pYJUbWV5FS27EJZfDb1fj+PFjkPGDte23OXxQLtiz/9/UrCSlMwcqOZiedOZ5nAfMCGvTqodu5Dkj51JzXaeTJLea5noh/puKv7HzrYjNDCxsWSemeqRGW02B/hTAW63HUX7QPUZgnlDDbOT1rYjpMtDw0ixoYdnDYX2p6zeEGDQ7hOzZbkN2asGf+zdTqi5aUeIlCTnz7ySj4UlxwwtqNmwK24JMOrLtiy3MHnlb2YAlR5zZUI1/Hm6WM7lgYSWHJtl8srfzLgHIPTZt9e2QHKcy4ZBtgxoZ8tEX2FEp2a06XuG7KvOyXqay4ZsYwBozaoWSA7X5jj7DzrigHqmTAydZfng2mfHZDUWOOcAdBxAjoF9gPksn0OMW+ZFrI6oSbv3MmHIo+Xg+kmVedATAZZH1JlhV/+VrXVjFqyT6v7WyvatTCxYN3Y4zdT2OABdCnCeDaC7yXIAiUMivffcelQmZivMGPtT5jJwEuBqeYo5vC4dy40kbsV1XM2O/NXfD7WLbku3ma/KEy7GbmPvcno4me820+ctMnomA7/WefkIQ7K657BhAr5YhvS82zaDnx23zBGnvce1rivmvvlr6rpI+z/5NX/+j0wFc5lH6uTODN1v9cT8vaKsGesVx7eC4FBhptD+PFTKxXfH8SVoX6IkTcRNRwQHhn1g7fxPMRwkHCvMO5Q/V7nKhOtLeGXxpB4sjFuWiGdDRMcAepDfuCaQJhhJniZWoOfd4/W6w7hljEhlV7i0W9aJimeyrqowIyhPVX6sNDFYpb7KAnEbt0y0d3q77/kRU3qnayvMAGHgKvNjtYlBfRZ1Qz3m+96UxrLqctm3X1vtaIEwQJjIjw0mBmP2lr2TCXJje6eJPUgDuciPLSZc592ORGAiKXm+zcTSxH0VMZgQ+dFsPjz5snHUmhCDCZEfO46RJh/6QXoUJkR+hD9QO7CJ8jmAk2v4Q7UCm4gINAHEkR36MSBxVMyNM6uPgiYANAGgCSC4CarAmRXluWL7uuNjBDcxfgwImgDQBIAmADQBBDaR5ePHgOBaFEATAJoA0AQg30ZyrkO3IgaI/oIgCILYSYvihAVTflgeK4sGPxg9ybl6X86Jf+gH798LfHhixX3duR0pGaRF9uv58dD3Pn7BZ4z+rxRoogdNAFgnNKy/g/7nxw6cT7wQc8yioD+fGwqx7khx3YH8k/wHoGrNbQxZ234AAAAASUVORK5CYII=",
          oxStates: [3, 0]
        };
      } else {
        compound = {
          image: "data:image/png;base64,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",
          oxStates: [3, -1]
        };
      }

      var description = (
        <React.Fragment>
          <p>Determine the oxidation states of the two carbon atoms indicated
          in the diagram below.</p>
          <p className="eqn"><img alt="compound" src={compound.image}/></p>
          <p><i>Enter the two oxidation states separated by a comma.</i></p>
        </React.Fragment>
      );
      let a1 = compound.oxStates[0];
      let a2 = compound.oxStates[1];
      let answer = RegExp('^\\s*\\+?' + a1 + ',?\\s*' + a2 + '\\s*$');

      var feedback = (
        <React.Fragment>
          <p>Each bond with an oxygen or a nitrogen atom pulls one electron from a carbon, increasing
          its oxidation state by 1. If it is a double bond, the oxidation state increases
          by 2. A bond with another carbon does not change the oxidation state.
          A bond with a hydrogen (remember to draw all the implicit hydrogens not
          shown in this formula) decreases the oxidation state by 1.</p>
          <p>Following these rules, the first carbon has the oxidation state of +{a1}, and the second one has {a2}.</p>
        </React.Fragment>
      );

      return {description,
        answer: {
          answer,
          label: "",
          units: ""
        }, feedback};
    }()
  },
  {
    "_id": 228,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 28,
    "type": "MS",
    "questionBody": function() {
      var options = [];
      let i = Math.floor(Math.random()*3);
      if (i === 0) options.push({text: (<p>The cell potential is 2.25&nbsp;V.</p>), correct: true, id: 0});
      else if (i === 1) options.push({text: (<p>The cell potential is &#8211;2.25&nbsp;V.</p>), correct: false, id: 0});
      else options.push({text: (<p>The cell potential is 0.77&nbsp;V.</p>), correct: false, id: 0});

      i = Math.floor(Math.random()*4);
      if (i === 0) options.push({text: (<p>The anode is platinum metal.</p>), correct: false, id: 1});
      else if (i === 1) options.push({text: (<p>The anode is chromium  metal.</p>), correct: true, id: 1});
      else if (i === 2) options.push({text: (<p>The cathode is chromium  metal.</p>), correct: false, id: 1});
      else options.push({text: (<p>The cathode is platinum  metal.</p>), correct: true, id: 1});

      options.push({text: (<p>Electrons flow from Cr(s) to Pt(s) in the external circuit.</p>), correct: true, id: 2});

      i = Math.floor(Math.random()*3);
      if (i === 0) options.push({text: (<p>Cr(s) is deposited at the cathode.</p>), correct: false, id: 3});
      else if (i === 0) options.push({text: (<p>Cr(s) is dissolved at the anode.</p>), correct: true, id: 3});
      else options.push({text: (<p>Pt(s) is dissolved at the anode.</p>), correct: false, id: 3});

      var description = (
        <React.Fragment>
          <p>Consider the following voltaic cell:</p>
          <p className="eqn">Cr(s) &#124; Cr<sup>3+</sup>(aq) &#8214; MnO<sub>4</sub><sup>&#8211;</sup>(aq), Mn<sup>2+</sup>(aq) &#124; Pt(s)</p>
          <p>Which of the following statements about this cell is/are correct?</p>
        </React.Fragment>
      );

      const eqEcell = `\\begin{eqnarray*}
        E^{\\circ}_\\text{cell} & = & E^{\\circ}_\\text{cathode} - E^{\\circ}_\\text{anode} \\\\
        & = & E^{\\circ}_{\\text{Cr}^{3+}/\\text{Cr}} - E^{\\circ}_{\\text{MnO}_4^{-}/\\text{Mn}^{2+}} \\\\
        & = & 1.51 \\text{ V} - (-0.71 \\text{ V}) \\\\
        & = & 2.25 \\text{ V}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <p>In a voltaic cell diagram, the anode is always placed on the left-hand side
          and the cathode is on the right-hand side. So, Cr(s) is the anode, it is being dissolved,
          and Pt(s) is the cathode.</p>
          <p>Electrons always flow from the anode to the cathode in voltaic cells, that is,
          from Cr(s) to Pr(s).</p>
          <p>The cell potential is</p>
          <MathJax.Provider>
            <MathJax.Node formula={eqEcell}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 229,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 29,
    "type": "MS",
    "questionBody": function() {
      let metals = [
        {name: "Ni", dissolves: true},
        {name: "Ag", dissolves: false},
        {name: "Au", dissolves: false},
        {name: "Cu", dissolves: false},
        {name: "Mg", dissolves: true},
        {name: "Zn", dissolves: true},
        {name: "Sn", dissolves: true},
        {name: "Cr", dissolves: true},
        {name: "Hg", dissolves: false}
      ];
      let selectedMetals = [];
      let correctMetals = [];
      while (selectedMetals.length < 4) {
        let i = Math.floor(Math.random()*metals.length);
        if (metals[i].dissolves) correctMetals.push(metals[i].name);
        selectedMetals.push(metals[i]);
        metals.splice(i, 1);
      }
      correctMetals = correctMetals.join(', ');

      var options = selectedMetals.map(metal => {
        return {text: (<p>{metal.name}</p>), correct: metal.dissolves, id: selectedMetals.indexOf(metal)};
      });

      var description = (
        <p>Which of the following metals would react with (or dissolve in)
        1.0&nbsp;M HCl?</p>
      );

      var feedback = (
        <p>HCl dissociates into H<sup>+</sup> and Cl<sup>&#8211;</sup>.
        Only H<sup>+</sup> can act as an oxidizing agent, and its reduction
        potential <i>E</i>&#176;<sub>H<sup>+</sup>/H<sub>2</sub></sub> = 0.00&nbsp;V.
        So, H<sup>+</sup> is a cathode, and, in order to have a positive
        cell potential, we need an anode with a reduction potential less than zero.
        {correctMetals !=="" ? " In the above list, " + correctMetals + " can be dissolved." : ""}</p>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 230,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 30,
    "type": "numeric",
    "questionBody": function() {
      let eCellString = (Math.random()*(1.150 - 1.000) + 1.000).toPrecision(4);
      let eCell = Number.parseFloat(eCellString);
      let lnQ = -(eCell - 1.10)*2/0.0257;
      let lnQString = lnQ.toPrecision(3);
      let q = Math.exp(lnQ);
      let qString = q.toPrecision(3);
      let answer = 1.000/q;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>Calculate [Cu<sup>2+</sup>] for a Daniel cell which is found to have
        a cell voltage of {eCellString}&nbsp;V at 25&nbsp;&#176;C, and for
        which [Zn<sup>2+</sup>] is 1.000&nbsp;M.</p>
      );

      const eqEcell = `\\begin{eqnarray*}
        E^{\\circ}_\\text{cell} & = & E^{\\circ}_\\text{cathode} - E^{\\circ}_\\text{anode} \\\\
        & = & E^{\\circ}_{\\text{Cu}^{2+}/\\text{Cu}} - E^{\\circ}_{\\text{Zn}^{2+}/\\text{Zn}} \\\\
        & = & 0.34 \\text{ V} - (-0.76 \\text{ V}) \\\\
        & = & 1.10 \\text{ V}
        \\end{eqnarray*}`;
      const eqNernst = `E_\\text{cell} = E^{\\circ}_\\text{cell}  - \\frac{0.0257 \\text{ V}}{n}\\ln{Q} `;
      const eqQ = `\\begin{eqnarray*}
        ${eCellString} \\text{ V} & = & 1.10 \\text{ V} - \\frac{0.0257 \\text{ V}}{2}\\ln{Q} \\\\
        \\ln{Q} & = & ${lnQString} \\\\
        Q & = & e^{${lnQString}} \\\\
        & = & ${qString}
        \\end{eqnarray*}`;
      const eqCCu = `\\begin{eqnarray*}
        Q & = & \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]} \\\\
        ${qString} & = & \\frac{1.000 \\text{ M}}{[\\text{Cu}^{2+}]} \\\\
        [\\text{Cu}^{2+}] & = & ${ansString} \\text{ M}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>In a Daniel cell, the half-reaction at the cathode is</p>
            <p className="eqn">Cu<sup>2+</sup>(aq) + 2 <i>e</i><sup>&#8211;</sup> &#8594; Cu(s)</p>
            <p>And the anode half-reaction is</p>
            <p className="eqn">Zn(s) &#8594; Zn<sup>2+</sup>(aq) + 2 <i>e</i><sup>&#8211;</sup></p>
            <p>The overall reaction is</p>
            <p className="eqn">Cu<sup>2+</sup>(aq) + Zn(s) &#8594; Cu(s) + Zn<sup>2+</sup>(aq),</p>
            <p>where 2 electrons are transferred.</p>
            <p>The cell potential under stadard conditions
            (25&nbsp;&#176;C and all concentrations are 1&nbsp;M) is</p>
            <MathJax.Node formula={eqEcell}/>
            <p>How did we know that Cu was the cathode and Zn was the anode? Since the
            cell described is a galvanic cell, its cell potential must be above zero.
            If we made Zn the cathode, we would have a negative cell potential,
            which is wrong.</p>
            <p>To calculate various properties of a cell under non-standard conditions,
            use the Nernst equation:</p>
            <MathJax.Node formula={eqNernst}/>
            <p>Substitute all the data and solve for <i>Q</i>:</p>
            <MathJax.Node formula={eqQ}/>
            <p>Express <i>Q</i> as the the product concentrations divided by the
            reactant concentrations (leave out the solids) and solve for [Cu<sup>2+</sup>]</p>
            <MathJax.Node formula={eqCCu}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>[Cu<sup>2+</sup>]</React.Fragment>),
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 231,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 31,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <p>A 1.0&nbsp;M aqueous solution of MgSO<sub>4</sub> undergoes electrolysis
        in 1.0&nbsp;M HCl. Ignoring any effects related to overpotential, determine
        the product that will be formed at the anode.</p>
      );

      var options = [
        {text: (<p>Mg(s)</p>),
        correct: false,
        id: 0},
        {text: (<p>SO<sub>2</sub>(g)</p>),
        correct: false,
        id: 1},
        {text: (<p>H<sub>2</sub>(g)</p>),
        correct: false,
        id: 2},
        {text: (<p>O<sub>2</sub>(g)</p>),
        correct: true,
        id: 3},
        {text: (<p>Mg<sup>2+</sup>(aq)</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>When multiple product are possible during electrolysis,
          the one that is actually produced is determined by the principle
          of least effort: we want to have the least negative cell potential,
          which means that we will need to apply the least voltage to the cell
          to overcome it. In order to have the highest possible (least negative)
          cell potential, the anode should have the lowest possible reduction potential.</p>
          <p>So, let us list all the things in the solution that can be oxidized,
          together with the corresponding reduction potentials:</p>
          <ul>
            <li>Cl<sup>&#8211;</sup>, <i>E</i>&#176;<sub>Cl<sub>2</sub>/Cl<sup>&#8211;</sup></sub> = 1.36&nbsp;V</li>
            <li>H<sub>2</sub>O, <i>E</i>&#176;<sub>O<sub>2</sub>/H<sub>2</sub>O</sub> = 1.23&nbsp;V</li>
          </ul>
          <p>Therefore, H<sub>2</sub>O will be oxidized to O<sub>2</sub> (the product) at the anode.</p>
          <p>Note that we have acidic conditions (due to the HCl in the solution).
          Also note that both Mg<sup>2+</sup> and SO<sub>4</sub><sup>2&#8211;</sup> are
          in their most oxidized forms, so they cannot be oxidized any further. The
          Mg(s) and SO<sub>2</sub>(g) listed in the options are the products of
          reduction, not oxidation.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 232,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 4,
    "idInExam": 32,
    "type": "numeric",
    "questionBody": function() {
      let tString = (Math.random()*(39.0 - 20.0) + 20.0).toPrecision(3);
      let t = Number.parseFloat(tString);
      let iString = (Math.random()*(3.50 - 1.50) + 1.50).toPrecision(3);
      let i = Number.parseFloat(iString);
      let tSec = t*60;
      let tSecString = tSec.toPrecision(3);
      let nE = i*tSec/96485;
      let nEString = nE.toPrecision(3);
      let nAl = nE/3;
      let nAlString = nAl.toPrecision(3);
      let answer = nAl*26.98;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A solution of AlCl<sub>3</sub> is electrolyzed for {tString}&nbsp;minutes
        using a current of {iString}&nbsp;amperes. What is the maximum mass of
        Al that could be deposited at the cathode?</p>
      );

      const eqF = `\\begin{eqnarray}
        I t & = & n_e F \\\\
        n_e & = & \\frac{I t}{F} \\\\
        & = & \\frac{(${iString} \\text{ A})(${Number.parseFloat(tSecString)} \\text{ s})}{96485 \\text{ C/mol}} \\\\
        & = & ${nEString} \\text{ mol}
        \\end{eqnarray}`;
      const eqMolAl = `\\begin{eqnarray}
        n_\\text{Al} & = & \\frac{n_e \\times 1}{3} \\\\
        & = & ${nAlString} \\text{ mol}
        \\end{eqnarray}`;
      const eqMassAl = `\\begin{eqnarray}
        m_\\text{Al} & = & n_\\text{Al} \\times MM \\\\
        & = & (${nAlString} \\text{ mol})(26.98 \\text{ g/mol}) \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>During the electrolysis, aluminum will be reduced at the cathode:</p>
            <p className="eqn">Al<sup>3+</sup>(aq) + 3 <i>e</i><sup>&#8211;</sup> &#8594; Al(s)</p>
            <p>To calculate how much substance is produced (or consumed) during electrolysis,
            use Faraday&#8217;s First Law of Electrolysis:</p>
            <MathJax.Node formula={eqF}/>
            <p>The stoichiometric ratio between moles of aluminum and moles of electrons
            is 1:3, so, the number of moles of Al deposited is</p>
            <MathJax.Node formula={eqMolAl}/>
            <p>Finally, the mass of aluminum is</p>
            <MathJax.Node formula={eqMassAl}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>m</i><sub>Al</sub></React.Fragment>),
        units: "g"
      }, feedback};
    }()
  },
  {
    "_id": 233,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 33,
    "type": "string",
    "questionBody": function() {
      let orderX = Math.floor(Math.random()*3);
      let orderY = Math.floor(Math.random()*3);
      let orderZ = Math.floor(Math.random()*3);
      let cX1 = 0.40;
      let cX2 = cX1*4;
      let cX3 = cX1;
      let cX4 = cX1*8;
      let cY1 = 0.30;
      let cY2 = cY1;
      let cY3 = cY1*4;
      let cY4 = cY1*6;
      let cZ1 = 0.35;
      let cZ2 = cZ1;
      let cZ3 = cZ1;
      let cZ4 = cZ1*2;
      let rate1 = 2.5e-6;
      let rate2 = rate1*Math.pow(4, orderX);
      let rate3 = rate1*Math.pow(4, orderY);
      let rate4 = rate1*Math.pow(8, orderX)*Math.pow(6, orderY)*Math.pow(2, orderZ);
      let rate1String = rate1.toPrecision(2);
      let rate2String = rate2.toPrecision(2);
      let rate3String = rate3.toPrecision(2);
      let rate4String = rate4.toPrecision(2);
      let answer = RegExp('^\\s*' + orderX.toString() + ',?\\s*' + orderY.toString() + ',?\\s*' + orderZ.toString() + '\\s*$');

      var description = (
        <React.Fragment>
          <p>Using the kinetic data below, find the orders for each of reactants
          X, Y, and Z. All runs were performed under identical conditions.</p>
          <p className="eqn">X + Y + Z &#8594; Products</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th>Run</th>
                <th>Initial [X]</th>
                <th>Initial [Y]</th>
                <th>Initial [Z]</th>
                <th>Initial Rate (M<sup>&#8211;1</sup>&nbsp;s<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>1</td>
                <td>{cX1.toPrecision(2)}</td>
                <td>{cY1.toPrecision(2)}</td>
                <td>{cZ1.toPrecision(2)}</td>
                <td>{rate1String}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{cX2.toPrecision(2)}</td>
                <td>{cY2.toPrecision(2)}</td>
                <td>{cZ2.toPrecision(2)}</td>
                <td>{rate2String}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{cX3.toPrecision(2)}</td>
                <td>{cY3.toPrecision(2)}</td>
                <td>{cZ3.toPrecision(2)}</td>
                <td>{rate3String}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{cX4.toPrecision(2)}</td>
                <td>{cY4.toPrecision(2)}</td>
                <td>{cZ4.toPrecision(2)}</td>
                <td>{rate4String}</td>
              </tr>
            </tbody>
          </table>
          <p><i>Enter the orders for X, Y, Z separated by commas.</i></p>
        </React.Fragment>
      );

      const eqRate = `Rate = k [\\text{X}]^x [\\text{Y}]^y [\\text{Z}]^z`;
      const eqX = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{X}]_2}{[\\text{X}]_1} \\Big)^x & = & \\frac{Rate_2}{Rate_1} \\\\
        \\Big( \\frac{${cX2.toPrecision(2)}}{${cX1.toPrecision(2)}} \\Big)^x & = & \\frac{${rate2String}}{${rate1String}} \\\\
        ( ${(cX2/cX1).toPrecision(2)} )^x & = & ${(rate2/rate1).toPrecision(2)} \\\\
        x & = & ${orderX}
        \\end{eqnarray*}`;
      const eqY = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{Y}]_3}{[\\text{Y}]_1} \\Big)^y & = & \\frac{Rate_3}{Rate_1} \\\\
        \\Big( \\frac{${cY3.toPrecision(2)}}{${cY1.toPrecision(2)}} \\Big)^y & = & \\frac{${rate3String}}{${rate1String}} \\\\
        ( ${(cY3/cY1).toPrecision(2)} )^y & = & ${(rate3/rate1).toPrecision(2)} \\\\
        y & = & ${orderY}
        \\end{eqnarray*}`;
      const eqZ = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{X}]_4}{[\\text{X}]_1} \\Big)^x \\Big( \\frac{[\\text{Y}]_4}{[\\text{Y}]_1} \\Big)^y
        \\Big( \\frac{[\\text{Z}]_4}{[\\text{Z}]_1} \\Big)^z & = & \\frac{Rate_4}{Rate_1} \\\\
        \\Big( \\frac{${cX4.toPrecision(2)}}{${cX1.toPrecision(2)}} \\Big)^${orderX}
        \\Big( \\frac{${cY4.toPrecision(2)}}{${cY1.toPrecision(2)}} \\Big)^${orderY}
        \\Big( \\frac{${cZ4.toPrecision(2)}}{${cZ1.toPrecision(2)}} \\Big)^z
        & = & \\frac{${rate4String}}{${rate1String}} \\\\
        (${(Math.pow(cX4/cX1, orderX)*Math.pow(cY4/cY1, orderY)).toPrecision(2)})(${(cZ4/cZ1).toPrecision(2)})^z
        & = & ${(rate4/rate1).toPrecision(2)} \\\\
        z & = & ${orderZ}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The rate law for this reaction is</p>
            <MathJax.Node formula={eqRate}/>
            <p>To find <i>x</i>, the order of the reaction for X, consider
            the first two runs: the concentrations of Y and Z are kept constant,
            so, the only thing that affects the initial rate is the change of
            concentration of X:</p>
            <MathJax.Node formula={eqX}/>
            <p>Similarly, in runs 1 and 3, the concentrations of X and Z are kept
            constant, so, we can use these runs to find the order for Y:</p>
            <MathJax.Node formula={eqY}/>
            <p>There are no two runs with the concentrations of X and Y kept
            constant, but this is fine since we already know the order of the reaction for
            X and Y. We can use any two runs to find <i>z</i>:</p>
            <MathJax.Node formula={eqZ}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>orders</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 234,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 34,
    "type": "numeric",
    "questionBody": function() {
      let kString = (Math.random()*(0.0500 - 0.0100) + 0.0100).toPrecision(3);
      let k = Number.parseFloat(kString);
      let tString = (Math.random()*(89.5 - 30.0) + 30.0).toPrecision(3);
      let t = Number.parseFloat(tString);
      let lnFrac = -k*t + Math.log(1);
      let lnFracString = lnFrac.toPrecision(3);
      let molRemain = Math.exp(lnFrac);
      let molRemainString = molRemain.toPrecision(3);
      let answer = 1 - molRemain;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A first order decomposition reaction has a specific rate constant
          of {kString}&nbsp;min<sup>&#8211;1</sup>. What fraction of the reactant will
          have decomposed after {tString}&nbsp;minutes?</p>
      );

      const eqRate = `\\ln{[\\text{A}]_t} = -kt + \\ln{[\\text{A}]_0}`;
      const eqFrac = `\\begin{eqnarray}
        \\ln{[\\text{A}]_t}
        & = & -(${kString} \\text{ min}^{-1})(${tString} \\text{ min}) + \\ln{1} \\\\
        & = & ${lnFracString} \\\\
        [\\text{A}]_t & = & e^{${lnFracString}} \\\\
        & = & ${molRemainString} \\text{ mol}
        \\end{eqnarray}`;
      const eqFracD = `\\begin{eqnarray}
        1 \\text{ mol}  - ${molRemainString} \\text{ mol} = ${ansString} \\text{ mol}
        \\end{eqnarray}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The integrated rate law for a first order reaction is</p>
            <MathJax.Node formula={eqRate}/>
            <p>Note that for the first order reactions we can use moles,
            masses, etc. instead of concentrations.</p>
            <p>So, assume that we had 1&nbsp;mole of reactant initially.
            Substitute all the data in the rate law and find the moles
            of reactant remaining:</p>
            <MathJax.Node formula={eqFrac}/>
            <p>The amount of the reactant decomposed is the difference between
              the initial and the remaining moles:</p>
            <MathJax.Node formula={eqFracD}/>
            <p>Since the initial amount was 1&nbsp;mole, the fraction
            remaining is {ansString}/1 = {ansString}.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>&chi;</i></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 235,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 35,
    "type": "numeric",
    "questionBody": function() {
      let t12String = (Math.random()*(30.0 - 5.00) + 5.00).toPrecision(3);
      let t12 = Number.parseFloat(t12String);
      let cFString = (Math.random()*(9.00 - 0.500) + 0.500).toPrecision(3);
      let cF = Number.parseFloat(cFString);
      let k = Math.log(2)/t12;
      let kString = k.toPrecision(3);
      let answer = -(Math.log(cF) - Math.log(100))/k;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A first order reaction has a half-life of {t12String}&nbsp;seconds.
        How long will it take for the reactant concentration to decrease
        to {cFString}% of its initial value?</p>
      );

      const eqK = `\\begin{eqnarray*}
        k & = & \\frac{\\ln{2}}{t_{1/2}} \\\\
        & = & \\frac{\\ln{2}}{${t12String} \\text{ s}} \\\\
        & = & ${kString} \\text{ s}^{-1}
        \\end{eqnarray*}`;
      const eqT = `\\begin{eqnarray*}
        \\ln{[\\text{A}]_t} & = & -kt + \\ln{[\\text{A}]_0} \\\\
        \\ln{(${cFString})} & = & -(${kString} \\text{ s}^{-1})t + \\ln{(100)} \\\\
        t & = & ${Number.parseFloat(ansString)} \\text{ s}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Using the given half-life, we can calculate the specific rate
            constant as</p>
            <MathJax.Node formula={eqK}/>
            <p>Assume that we had 100&nbsp;M of the reactant initially.
            Then the remaining amount is {cFString}&nbsp;M. Substitute
            these amounts into the inegrated rate law (remember that we can use
            moles or even masses instead of concentrations for first order
            reactions). Solve for <i>t</i>.</p>
            <MathJax.Node formula={eqT}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>t</i></React.Fragment>),
        units: "s"
      }, feedback};
    }()
  },
  {
    "_id": 236,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 36,
    "type": "MS",
    "questionBody": function() {
      let orders = [
        {order: 0,
        name: "zero",
        image: "data:image/png;base64,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",
        fb: "For a zeroth-order reaction, the plot of concentration versus time should be linear. And since A is being used, its concentration must decrease."},
        {order: 1,
        name: "first",
        image: "data:image/png;base64,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",
        fb: "For a first-order reaction, the plot of the logarithm of the concentration versus time should be linear."},
        {order: 2,
        name: "second",
        image: "data:image/png;base64,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",
        fb: "For a second-order reaction, the plot of the inverse concentration (1/[A]) versus time should be linear. Since A is being used, [A] must decrease, but the inverse must increase."}
      ];
      let idx = Math.floor(Math.random()*3);

      var description = (
        <p>For the reaction A &#8594; Products, which of these plots
          represent {orders[idx].name}-order kinetics?</p>
      );

      var options = orders.map(order => {
        return {
          text: (<p m-3><img src={order.image} alt="plot"/></p>),
          correct: order.order === idx,
          id: order.order
        };
      }).concat([
        {
          text: (<p m-3><img src="data:image/png;base64,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"
          alt="plot"/></p>),
          correct: false,
          id: 3
        },
        {
          text: (<p m-3><img src="data:image/png;base64,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"
          alt="plot"/></p>),
          correct: false,
          id: 4
        }
      ]);

      var feedback = (
        <React.Fragment>
          <p>{orders[idx].fb} Therefore, the only correct plot is</p>
          <p className="eqn"><img src={orders[idx].image} alt="correct plot"/></p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 237,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 37,
    "type": "numeric",
    "questionBody": function() {
      let cI1String = (Math.random()*(0.300 - 0.215) + 0.215).toPrecision(3);
      let cI1 = Number.parseFloat(cI1String);
      let cF1String = (Math.random()*(0.200 - 0.100) + 0.100).toPrecision(3);
      let cF1 = Number.parseFloat(cF1String);
      let cI2String = (Math.random()*(0.500 - 0.315) + 0.315).toPrecision(3);
      let cI2 = Number.parseFloat(cI2String);
      let k = (1.0/cF1 - 1.0/cI1)/30;
      let kString = k.toPrecision(3);
      let answer = k*Math.pow(cI2, 2);
      let ansString = answer.toPrecision(3);

      var description = (
        <p>The rate law for the reaction A &#8594; Products is Rate = <i>k</i>[A]<sup>2</sup>.
        When the initial [A] = {cI1String}&nbsp;M, after 30&nbsp;minutes, the
        [A] = {cF1String}&nbsp;M. What is the rate of the reaction when
        [A] = {cI2String}&nbsp;M?</p>
      );

      const eqRate = `\\frac{1}{[\\text{A}]_t} = kt + \\frac{1}{[\\text{A}]_0}`;
      const eqK = `\\begin{eqnarray*}
        \\frac{1}{${cF1String} \\text{ M}} & = & k(30 \\text{ min}) + \\frac{1}{${cI1String} \\text{ M}} \\\\
        k & = & ${kString} \\text{ L mol}^{-1}\\text{ min}^{-1}
        \\end{eqnarray*}`;
      const eqRateNew = `\\begin{eqnarray*}
        Rate & = & k[\\text{A}]^2 \\\\
        & = & (${kString} \\text{ L mol}^{-1}\\text{ min}^{-1})(${cI2String} \\text{ M})^2 \\\\
        & = & ${ansString} \\text{ mol L}^{-1}\\text{ min}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The given rate law shows that the reaction is second-order. The integrated
            rate law for a second-order reaction is</p>
            <MathJax.Node formula={eqRate}/>
            <p>Using the data related to the first run, we can calculate the
            specific rate constant:</p>
            <MathJax.Node formula={eqK}/>
            <p>And now use the rate law with the new initial concentration to
              calculate the rate:</p>
            <MathJax.Node formula={eqRateNew}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>Rate</i></React.Fragment>),
        units: "mol/(L min)"
      }, feedback};
    }()
  },
  {
    "_id": 238,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 38,
    "type": "MS",
    "questionBody": function() {
      let M1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAC2CAYAAAABfcunAAAWuElEQVR4Xu2dC9R1RV3Gf6ZZmZIYYkalkhZKJSArL4FohpI3Eio0AVEwvJCJaZZmXLxUQppIGYKoKRWQoimJpWipaV5K7SKoeUeltDRRMjNbj8wsx80+79n77L3Pnpn9zFrv+t73O3P5zzPznLn9L9fByQgYgaoQuM7EvTkJOGXiNly9ETACCQJTk/prwNRteECNgBEwqT0HjEC9CEy9inqlrnfuuGeZImBSZzowCxLr+4G7Ad8L7AFcH7gaeHf4ec+CsBilqyb1KDC6kg0QOAx4OLA38Ebgk8AVwAeBHwb2CT//AVwEPHeDNhZZpFRS/wTw5jBirwUeDHw2/K3fXxp+/03gqcnIfgfwbOCWjTKLHPyZOn0o8ATgSuBs4JIOcpwB/DTwGOA1HfIvOksNpNb27AjgciCS9vgWUuvb/3zg9kDzi2DRk2CLnX8hsCtwFPCFnu3eGnh++MI+t2fZRWWvgdQasCOB88K2LRJX/x9X6riy6wtAK4Qu8NLVfVGDPkNn7wJcDJwIvGhg+1qt9wUeOrCeaouXTuqzwlb6I2HC7Be25SLzqQ1S/yRwurffW5/LB4ed1OOBz43U+nHAHcOZfKQq66mmdFKLvEpaibXyPir8/jzgFQmp44j5TL3duXtv4LHAPSdo9pHAj4Yxn6D6cqusgdQfCuesnwE00Fq1Xwb8pUk968TUhdgvAveZUAptwfcEnjJhG8VVXQOpLwgXYDor3ww4LRBbt+O+/Z5nSn4foN3S/bbQvMb/wvCzhebyb6IGUv9BuCS7V4D7gPCvST3P/Nsf0C23tsbbSlJW0a36f2+rwZzbqYHUeofW9ksXY/Gpaq/kwszv1NudgV8FvhX4vy02q8s4vX1PcXbfYjfGaaoWUscnq+YTlrff48yTrrW8NbxCvK1rgRHzSUHlA9Y8m94s0gYdI87azKv6PeDDwHNmlFOXpAcBH51RhtmbLnWlnh04C/BNCBwO3BnQW/ScSVqDzwAkz2KTSb3YoR+t4zo/fzFYV41W6YCKpJD0rqBSOqCacoua1OWOXS6S/2mwopJ6bg7phsCngBvlIMwcMpjUc6BeT5v3BWQ8s4336D6onRz0+xfpH8+k7jNVnLeJgHS5bwF8PkNoZAV2c+CqDGWbVCSTelJ4q678TOB9wO9n2kupqN4h7CQyFXEasUzqaXCtvVZpjT26APNH2djraPD+2gck7Z9JvaTRHq+vbwJ+PfE+M17N49aU65l/3F42ajOpJ4W3ysq18sm32P0L6Z1cJskxw1sKkXewmCb1YAg7VaC3XPlFkyXZf3UqkW8mnaMfAFyWr4jfJJlsunVUmNIENCsoTOrph0Ohh2TnLTLLNFQE/3Rw4vC46ZsftQXZLx8IPGzUWqev7J+C95V/nr6p+VswqacbA5FZ76V6K9W/Mcn7yvcAdwXOCY4EZKpYQvp34LbAZ0oQNpHxaOAewEMKk3sjcU3qjWBbW+i3gN06+NC6XlBnlKnozwOfWFvzfBlk2nhT4FfnE2FQyzr6yMb73wbVUkBhk3r8QZLnFU0gOTnsmmQM8XRADvXkninHdCkg542lpl8JyihzG51Mjp9JPS7EQ8+cCjWjLWJuoWYUHUNvvlI4KTnN4cBh63iZ1ONBLpe1siW+08AqFXZGrpn+dWA9YxWXOeMrAR0RSk+/Dfwn8Duld2Qn+U3qcUZ3l+D8UKFhxki6HVckEW3j507yyqojxV/NLcgI7d8keEf57hHqyrYKk3qcoZnC64cMEfQEJlvluZIUTI4F5O63lqQXB7ldekEtHWr2w6QePrLfFdzn3Hh4VdeqYe7LKbkF0rv0xybo21xV6klOQRIPmUuAqds1qYcj/LshBOuzhld1rRp2B/4xrNgTVL9jlaU/Ye3Uub8FdBuuFbu6ZFIPG9JteNn4EeBPtuxHW3bICluky78a0zHBQWGVQfZM6mFT9pmAtKx0kTRl0vvwk4NW1JTtxLoV6/s2gAK+15q+HFwe/U9tHTSpNx9RqXtq8t9g8yp6lXxQsA3+hV6l+md+HSCNuNf3L1pUiVre3q8Fukm9+TyUMcb1Ab19bivJkEJRKB44UYPSgpPTPt0T1J6kMqqY5j9WW0dN6s1H9B+C5w9pgW0zaSsulVJFJRkztI2297oZPnKbnZm5rTkjikzWdZN6M2h/MMTtuvVmxQeXktaajP4VjUKBAIemp4UviBjve2h9pZQfqtabZT9N6s2G5dcAvU/Lpc+cSW6FXj1Q7VFv4To/a/VfYvoKoPuR/62l8yb1ZiP5zuClUpEg5k46098uONTvY5e9b3inlWrrG+buxIztyxuqnCcoJHIVyaTuP4y3Civbnv2LTlZiP+CE4N1Dt7pShGmzG9alkC7ZdJP+N8FBg552lpykY/9iYJ9aQDCp+49kzppWel77JUBeNDVZ5dBebpT0r2615SdNYXKkzKIIkU7XIHBBOMLksPMaPCYmdX8I3x4c2b2jf9GtllAsKf3Igkz/Xg3IV5fTtRGQY0Ld/Gu3U3wyqfsNoULM/HVY8fqVdO6cEdg12K/LNLP4ZFL3G0K5G9JZ+kn9ijl3AQj8BaD7iNcUIOuOIprU/UZQZ1F5AdG51KkuBB4M6CWgeOUbk7rfxPw4ICeBOXv97Ncj504R+BowNScmR3zqDlQBUhgFn6cnn46zNyBd8IuBP55dkgECmNTdwatme9a9y4vLqdA8iqaiJ8Fik0ndfeieF1z3/mH3Is5ZIAKfA7Qr+3yBsn9dZJO6+8jJrZA0sfzW2x2zEnMWrzZqUnebdlM6F+wmgXNtC4G7BE82Mm0tMpnU3YatirNWt646V1ChlVmrvKkWl9aRWk7PdSP41A2Ddtdy+y33PjpjbdPLSXGTqSKBZYYqf+vPKLFP60gd+/QU4FTgLODEoEfcpb+1kFp2y7KdHsMhQRfcnGdeBGTKeiGw97xibNZ6V1LH2hVX6fxgASTNG63iO6VaSD23U/3NRtelhiAgtVFZ5BUXqL4vqVOQ4uqt/ztgxfa8BlIXf3EyZGYvuOxJ4XXo5NIw6EvqlMjyZ6WztpL+f4+WrXkNpFY8Y8W00re203IQKNbbaBdSS5PqpWEsXwvob/m7TpO25fpGkz1q+lkNpH458JLgLmg5U9o9FQIfCEYeCi9cTFpHat9+Q05hZYuZWJUIqjjWWqQUiaWYtI7UQztS+kot22nFZZZLYKflIfDjwca6qJhi60gdV+p7rRnP9HydZi2d1LrhV9+PWt58do8DAjKzFamvKAWRdaRWP3SG1qROz9KR7Dpr6llLF2VK8eIs9r90UsttrHS+ZczhtEwEzghna3lFKSKtI/VOZ2rpxorMIvtulV6UKaTOQ4J1VhEDaiFHR+BugJ637j56zRNVaFKvBlbudhWm9jsnwt7VloNAUaF915G66/Zbq/WBlb1T/xTwRODgcuaeJZ0IgbOBvwPOmaj+UavtQmo1qK12U+85apHpM9mgHgFc3pCu5DO1Lv+uG7Zeo4LuyopDQA4JFSTh3iVI3pXUm/alZFJL4Ubf0PLz7WQEvgTojklBEbJO60itaIDPDhpVCp3aN5VK6m8Lppbf3rfDzl8tAvqSl0/wdUZMswOwjtT6Zjoz3Gw3t9ZdhC+V1IeFW/3Du3TSeRaBQDFzYh2pNVq6BJNmVfMNustIlkrqFwSrs3O7dNJ5FoNAESa460i9TqNslYFHHOVSSW1978XwtFdH5ThB/gT+rFepLWdeR+qh4pRI6jsEDy/7D+28y1eHgF54HhBifGfbua6kTs0v9ZSlJNXRda6NSiS1n7Kyna6zC6Ynzi8D15tdkh0E6ELq6ADhyYAcsknfWzfhq/S90+ZKJPXbgF8OygY5j51lmweBi4AXA6+Yp/n1ra4jdXr7/bHG89Yqxwglk1r91S2/dNmdjEAbAtmHXxpC6tSgo+kJpdSLsqOBewQjDk9pI9CGQPY6DOtIrU5Fve50+31ZeISPpperhr+07bcUbV4PvNrz2QjsgMCrwmVqlvOkC6nVtzbd79pcBN8oGMLv4ulsBNYgIHNcmWIekyNSXUm9qewlrdS6HLsV8NhNO+tyi0FA5rhXAjfMsccm9TdG5T3hme69OQ6UZcoOAemBPwe4JDfJupA6jcrRlL8WjTIrnOQ2M/OX51jgzsBxuYm6jtTRSktO12rW/ZbRyvuCXXhuY2R58kQg2/DG60i9FCutYmxl85zfi5VK7qPlG/x1OSGwjtRLsKd+IHAo8KCcBsayFIHA8cC+wCNyknYdqSXrKv9jXfpRwu33xcCzwvt0lz45jxGICOwawjHJ42g2aR2paze9LDYIWjYzyIJoUZCPPoW+zSKtI/VQIXNfqaWU/0LglUM76vKLReBng9PNn8sFgSWT2s9YuczC8uX4AnBz4KocutKV1DXaU2u7pFAqUiJwMgJDEMgqNE8XUtdoT32nYEYq5QEnIzAUAd2Ay6/dfkMrGqP8OlLXak+d5fviGAPqOmZDIBs14yGkLtWe+q5BO+6g2YbfDdeIgAyBbhFcfM3av3WklnC12VN/AFAYlQ/Oirwbrw2BbNRGu5Ba4NdiT53VhUZts9r94eXBh5/8mM2WupJ6UwFzeqcuKsjZpoC73KwI3A94OHD/OaVYEqlz+oKZc8zd9rQIfAaQufIqv33Ttg4shdQyZJdBu9+kJ59Si2/gtOAV5fS5kFgCqaWXK2cOfz4XyG53UQjcFngRcMe5el07qWV9JVvp35gLYLe7SATeAJwCvHGO3tdMakVReHfQHJsDW7e5XATuC8jWWhdnW0+1klr+mC8A/mjriLpBI3ANAu8H7gNIL2KrqTZSPxJ4NPBEQHauTkZgLgRm84pSC6kfCjwt2EUraqWeFZyMwNwIfBG4abjX2ZosJZJat4vx53aA/Kh9LlyGfXJryLkhI7AegVOBr2zoiXd97StylEbqk4KXCbnz1c+/AG+3HvfG4++C0yJwY+DDgHyZbS2VRuqtAeOGjMBICMjOWvHczx2pvrXVmNRrIXIGIzAIAR0RLwT2HlRLj8ImdQ+wnNUIbIiA1JQVJlmajZMnk3pyiN2AEeBg4AnAPbeBhUm9DZTdhhG4ZpV+EvCuqcEokdSpZ9MUH/mIOgK4PDxzabtzy+C5JTWDiw4fDggXGFNj7PrLRaDNOUjsTZw/cT62zSd9phVa83J34OmA3GlNmkol9Z4tb38C8KiExG0RO2NYXmmd6UbSyQjshIBIrTl1InB1klH/L+u/uIjI467+T3MwLiAxuo2ixca5pqARug2f1GKwJlK3gRhJLBtXuZrR6r1pWF5P/+UhsIrUccF4E3AeEOeeyBtDPovoSmkI6NsE9eUfmhLK2kkt7OIK/pEAZPNbd0p8XXfZCHQltXqZHuv0t0idrtwRibPCufr5U0FTE6mb2++IWfxWlQP/uF2aCk/XWxcCXbffsdeag0cDNwuGRW1HvBuF3eIuU0FVKqlf2gKIbhfbvhnjFvz2wJFhuzQVnq63LgRWXZSll7Jpj9vucdoQkQOFrwLSDR89lUrq9KIsPTfrfLMK5Esblxujg+kKq0OguVK3nZ2bnda2+0MdFo/JLLhqIHXzPJNueZq3km23lNXNRHdoNATatt87LSLxLN2F1LL9V3z0R40mbaioFlJHMA9Pzs3NZwfl6fJNOzbGrq9cBFadqXd6m+66UgsVPW3pHVu6FaOlmkgdzzNSOJE7YIWqbTtDx3OSz9ejTaNqK1pF6rZFJILQh9Q/AOhZTDG4Rkslknq0zrsiI5ABAtp+y4JLClGjJJN6FBhdiREYhIB2lc8dK9iEST1oLFzYCIyCwLcEt0fXHaM2k3oMFF2HERiOgILqHQscOrQqk3oogi5vBMZDQKqj7wDOHlKlST0EPZc1AuMjIEuuE4CPb1q1Sb0pci5nBKZDQMZHBwEf3aQJk3oT1FzGCEyPwCdC5EyZCvdKJnUvuJzZCGwVgU8DMkS6sk+rJZI61RxrWmXFz4SB7ab7zATnXYXAKg3Ebc01hZCSjvinug5RiaRW31bpcGsAonH6IUCbieYqs7mumDnf8hBosyPQPNsjLB6HTTzXLgLeCjyzC/Slklp9azoQbHNn1AUD5zECXRBILfz2msGM9/QQGve4df71Sia1BiIFOpqwpT6hugyW8xiBLgjEReO9wX/3HM4r9WVyToh5/TDga22Cl07qeK5RIDL9tHk+6TJgzmMEuiAQd4cKlzzn4nFM8HJ6E+Cdyc/XfYqXTmr1wW5/u0xH5xkDAe0M5YJoleusMdroU8c+wP7Jz6uAU2ogtbZFZwInj21s3gdd560egXhZplXyETm7mjapq5+L7uAICDRdGK1zaTRCk5tXYVJvjp1LLgOBVR5C05A6o7ojGgqrST0UQZevGYEuik5t8dpmxaQGUs8KoBs3ArkhYFLnNiKWxwgMRMCkHgigixuB3BAwqXMbEctjBAYiYFIPBNDFjUBuCJjUuY2I5TECAxEwqQcC6OJGIDcETOrcRsTyGIGBCJjUAwF0cSOQGwImdW4jYnmMwEAETOqBALq4EcgNAZM6txGxPEZgIAIm9UAAXdwI5IaASZ3biFgeIzAQAZN6IIAubgRyQ2BqUl8K3D23TlseI1ApAnLpNbmPskqxc7eMQL4ITL1S59tzS2YEKkXApK50YN2t5SJgUi937N3zShEwqSsdWHdruQiY1HmOfTNAgdzRHlhheN5mUENFwFAaGtJm0QEeTOoySJ2nlMOlmipSqUk9fGwWUYNWy92Be4WfA4C/B54NHB8QOKuxmsZIDrcPnzdjYzc/PxK4BDgvtKFiake+pdOVOpJBsiipnMooSU61t0siV/p522DFGFH6rBknSvXFON/Nz6Jf7Nj/NHCc+nZsaOwJQPwsrU94qW9amd8SopjGlVoyXZXgHbFQPqVV2CpIexM/lWliNneQu8lI45W6O7TNiAxxQr8pIVS6fWwG7ov51eKJwA1CuTih01XrskZ8sHT7Hcu9JJSP5eLfkTT6MtBkbguYnva6ubVP/1Yw9aOSaKL6LP79pfCFdkUgZTOSRVtomrT8ZwOJFXAuyprip98PB44IMdLSsrsB5wMxnGwbtml8teaOoG3sus+EzHOa1N0HqDn5RRZNcBH06lDNum1fkzCrzsk7nalFtGY5ySISqP5DVqzq8csj7fFO29+2z1IyfCRpUwSNq+cZwGPC3/F3haVpI9JOZ+rm+VpfEml9zZFrfvGlpNZnezbO6qpPGlgnAFH+7rMh45wmdffBaVvR4rY0raW5xW5u++IW/fGhUNul0E6kbiuXTtA+pN6JKKs+E9k+FGRvfrmkcitLSsKdviS0y2jbfsetePMLI8auWoWtdjMpqdPjRTpWuYSk7T4LO+Q0qTuAFLLstE2NK3XbKqhzbzzTpnWY1N9YvfuSOj03t2HbRur0C6L7qBeY06TuPmht2++45W3bvrVtz739hvQOYtPtt87UzaPPuu13jU+CrbPXpN6c1G0hTtOz7V6NM6c+ezMQt9/Ni7L0zKkb8OaZME7KLhdlbTflbWdq9X6nLytt5YdclDXPwCk+XS7KVm2/Rer0C7UN27aLsniZ2Nbv7jMh85wmdfcBalMAaZ7pmme09CwnMr8MOC250W0+y6TPLLGstpdKfZ60+pBadadyNu8EhjxptV1spfU9LjxZrXrS2ulMvQ7bFD89cTWxbj4/dp8Jmec0qTMfIItnBPoiYFL3Rcz5jUDmCJjUmQ+QxTMCfREwqfsi5vxGIHMETOrMB8jiGYG+CPw/LrV2AhgcDFAAAAAASUVORK5CYII=";
      let M2 = "data:image/png;base64,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";

      var description = (
        <React.Fragment>
          <p>The reaction coordinate digrams below represent two possible
          mechanisms (M1 and M2) for the substitution of an alkyl halide (RX).
          Which of the statements is/are correct?</p>
          <p className="eqn"><img className="mr-3" src={M1} alt="M1"/><img src={M2} alt="M2"/></p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>Both reaction coordinate diagrams show an exothermic reaction.</p>),
        correct: true,
        id: 0},
        {text: (<p>The first step in the mechanism M1 is the rate-determining step.</p>),
        correct: true,
        id: 1},
        {text: (<p>The rate laws for the two mechanisms are identical because both mechanisms involve the same reactants and the same products.</p>),
        correct: false,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>To determine if a reaction is exothermic, compare the energy of the
          reactants to the energy of the products. In both M1 and M2, the products
          are lower in energy than the reactants, so both diagrams are exothermic
          (energy is released).</p>
          <p>The rate-determining step is the one with the highest activation energy
          (and hence slowest). Activation energy is the difference between the
          energy of a transition state (a maximum in the diagram) and the energy of a reactant or
          indermediate (a minimum in the diagram). In the M1 diagram, the jump from
          RX to the first maximum is larger than from the intermediate to the second maximum, so,
          the first step is indeed rate-determining.</p>
          <p>The rate laws for the two mechanisms are determined by the elementary steps
          of each mechanism. Even though they might happen to be the same, the same
          reactants and products do not guarantee that.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 239,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 39,
    "type": "numeric",
    "questionBody": function() {
      let t121String = (Math.random()*(4.95 - 4.65) + 4.65).toPrecision(3);
      let t121 = Number.parseFloat(t121String);
      let t122String = (Math.random()*(2.50 - 2.30) + 2.30).toPrecision(3);
      let t122 = Number.parseFloat(t122String);
      let answerJ = Math.log(t121/t122)*8.314/(1.0/298.15 - 1.0/308.15);
      let ansJString = answerJ.toPrecision(3);
      let answer = answerJ/1000;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>The first-order decomposition of N<sub>2</sub>O<sub>5</sub>(g) has a
        half-life of {t121String}&nbsp;minutes at 25&nbsp;&#176;C, and a
        half-life of {t122String}&nbsp;minutes at 35&nbsp;&#176;C. Calculate
        the activation energy of this reaction in kJ&nbsp;mol<sup>&#8211;1</sup>.</p>
      );

      const eqT12 = `k = \\frac{\\ln{2}}{t_{1/2}}`;
      const eqArr = `\\ln{\\left( \\frac{k_2}{k_1} \\right)} =
        \\ln{\\left( \\frac{t_{1/2, 1}}{t_{1/2, 2}} \\right)} =
        \\frac{E_\\text{a}}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)`;
      const eqEa = `\\begin{eqnarray*}
        \\ln{\\left( \\frac{${t121String} \\text{ min}}{${t122String} \\text{ min}} \\right)} & = &
        \\frac{E_\\text{a}}{8.314 \\text{ J mol}^{-1}\\text{ K}^{-1}}
        \\left( \\frac{1}{298.15 \\text{ K}} - \\frac{1}{308.15 \\text{ K}} \\right) \\\\
        E_\\text{a} & = & ${Number.parseFloat(ansJString)} \\text{ J mol}^{-1} \\\\
        & = & ${ansString} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>A half-life for a first-order reaction is related to its
            specific rate constant as</p>
            <MathJax.Node formula={eqT12}/>
            <p>That is, a specific rate constant is inversely proportional to
            the corresponding half-life.</p>
            <p>The dependence of the specific rate constant (or the half-life) on temperature is
            described by the following equation:</p>
            <MathJax.Node formula={eqArr}/>
            <p>Substitute the half-lives and temperatures into the above equation and
            solve for the activation energy. Remember that the temperatures must be
            in Kelvins.</p>
            <MathJax.Node formula={eqEa}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>E</i><sub>a</sub></React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 240,
    "courseId": "1302",
    "examName": "Final 2014",
    "chapterId": 5,
    "idInExam": 40,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>For the reaction:</p>
          <p className="eqn">CHCl<sub>3</sub> + Cl<sub>2</sub> &#8594; CCl<sub>4</sub> + HCl</p>
          <p>The mechanism is:</p>
          <table className="data-table ml-3 mb-3">
            <tbody>
              <tr>
                <td className="text-left">Step 1:</td>
                <td className="text-left">Cl<sub>2</sub> &#8644; 2 Cl</td>
                <td className="text-left">(fast equilibrium)</td>
              </tr>
              <tr>
                <td className="text-left">Step 2:</td>
                <td className="text-left">CHCl<sub>3</sub> + Cl &#8594; CCl<sub>3</sub> + HCl</td>
                <td className="text-left">(slow)</td>
              </tr>
              <tr>
                <td className="text-left">Step 3:</td>
                <td className="text-left">CCl<sub>3</sub> + Cl &#8594; CCl<sub>4</sub></td>
                <td className="text-left">(fast)</td>
              </tr>
            </tbody>
          </table>
          <p>Which of the following best represents the rate law for this
          reaction?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"Rate = k [\\text{CHCl}_3][\\text{Cl}_2]^2"} /></MathJax.Provider></p>),
        correct: false,
        id: 0},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"Rate = k [\\text{CHCl}_3][\\text{Cl}_2]"} /></MathJax.Provider></p>),
        correct: false,
        id: 1},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"Rate = k [\\text{CHCl}_3][\\text{Cl}_2]^{0.5}"} /></MathJax.Provider></p>),
        correct: true,
        id: 2},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"Rate = k [\\text{CHCl}_3]^2[\\text{Cl}_2]"} /></MathJax.Provider></p>),
        correct: false,
        id: 3},
        {text: (<p><MathJax.Provider><MathJax.Node inline formula={"Rate = k [\\text{CHCl}_3]^{0.5}[\\text{Cl}_2]"} /></MathJax.Provider></p>),
        correct: false,
        id: 4}
      ];

      const eqCl = `\\begin{eqnarray*}
        K_1 & = & \\frac{[\\text{Cl}]^2}{[\\text{Cl}_2]} \\\\
        [\\text{Cl}] & = & \\sqrt{K_1 [\\text{Cl}_2]}
        \\end{eqnarray*}`;
      const eqRate = `\\begin{eqnarray*}
        Rate & = & k_2[\\text{CHCl}_3]\\sqrt{K_1 [\\text{Cl}_2]} \\\\
        & = & k [\\text{CHCl}_3] [\\text{Cl}_2]^{0.5}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The rate of the overall reaction is determined by the rate of the slow step:</p>
            <MathJax.Node formula={"Rate = k_2[\\text{CHCl}_3][\\text{Cl}]"}/>
            <p>However, this rate law contains the concentration of Cl, which is
            an intermediate (it does not appear in the overall equation and is not
            a catalyst). The concentration of Cl has to be expressed from the previous
            step so that only stable species (reactants, products, or catalysts)
            appear in the rate law. Step 1 is an equilibrium, so we can write the
            equilibrium constant expression for it and find [Cl]:</p>
            <MathJax.Node formula={eqCl}/>
            <p>Substitute this [Cl] into the above rate law, simplify, and
            absorb the constants (i.e. a product of constants is just another constant):</p>
            <MathJax.Node formula={eqRate}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    "_id": 301,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 1,
    "idInExam": 1,
    "type": "numeric",
    "questionBody": function() {
      let volString = (Math.random()*(9.00 - 2.00) + 2.00).toPrecision(3);
      let vol = Number.parseFloat(volString);
      let mString = (Math.random()*(4.00 - 1.00) + 1.00).toPrecision(3);
      let m = Number.parseFloat(mString);
      let tempString = (Math.random()*(40 - 20) + 20).toPrecision(2);
      let temp = Number.parseFloat(tempString);
      let mol = m/4.00;
      let molString = mol.toPrecision(3);
      let answer = mol*8.314*(273.15 + temp)/vol;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A {volString}&nbsp;L flask contains  {mString}&nbsp;g of He gas at a
        temperature of {tempString}&nbsp;&#176;C. What is the pressure in the flask?</p>
      );

      const eqMol = `\\begin{eqnarray*}
        n & = & \\frac{m}{MM} \\\\
        & = & \\frac{${mString} \\text{ g}}{4.00 \\text{ g mol}^{-1}} \\\\
        & = & ${molString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqP = `\\begin{eqnarray*}
        P & = & \\frac{nRT}{V} \\\\
        & = & \\frac{(${molString} \\text{ mol})(8.314 \\text{ L kPa mol}^{-1}\\text{ K}^{-1})(273.15 + ${tempString} \\text{ K})}
        {${volString} \\text{ L}} \\\\
        & = & ${ansString} \\text{ kPa}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Find the number of moles of He:</p>
            <MathJax.Node formula={eqMol}/>
            <p>Use the ideal gas law to find the pressure:</p>
            <MathJax.Node formula={eqP}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>P</i></React.Fragment>),
        units: "kPa"
      }, feedback};
    }()
  },
  {
    "_id": 302,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 1,
    "idInExam": 2,
    "type": "numeric",
    "questionBody": function() {
      let molO2String = (Math.random()*(1.95 - 1.00) + 1.00).toPrecision(3);
      let molO2 = Number.parseFloat(molO2String);
      let molN2String = (Math.random()*(0.995 - 0.500) + 0.500).toPrecision(3);
      let molN2 = Number.parseFloat(molN2String);
      let molCl2String = (Math.random()*(0.450 - 0.200) + 0.200).toPrecision(3);
      let molCl2 = Number.parseFloat(molCl2String);
      let pString = (Math.random()*(90.0 - 30.0) + 30.0).toPrecision(3);
      let p = Number.parseFloat(pString);
      let chi = molCl2/(molO2 + molN2 + molCl2);
      let chiString = chi.toPrecision(3);
      let answer = chi*p;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A gaseous mixture contains {molO2String}&nbsp;moles of
          O<sub>2</sub>, {molN2String}&nbsp;moles of N<sub>2</sub>,
          and {molCl2String}&nbsp;moles of Cl<sub>2</sub> with a total pressure
          of {pString}&nbsp;kPa. What is the partial pressure of Cl<sub>2</sub>?</p>
      );

      const eqChiCl2 = `\\begin{eqnarray*}
        \\chi_{\\text{Cl}_2} & = & \\frac{n_{\\text{Cl}_2}}{n_\\text{tot}} \\\\
        & = & \\frac{n_{\\text{Cl}_2}}{n_{\\text{O}_2} + n_{\\text{N}_2} + n_{\\text{Cl}_2}} \\\\
        & = & \\frac{${molCl2String} \\text{ mol}}
        {${molO2String} \\text{ mol} + ${molN2String} \\text{ mol} + ${molCl2String} \\text{ mol}} \\\\
        & = & ${chiString}
        \\end{eqnarray*}`;
      const eqPCl2 = `\\begin{eqnarray*}
        P_{\\text{Cl}_2} & = & \\chi_{\\text{Cl}_2} P_\\text{tot} \\\\
        & = & (${chiString})(${pString} \\text{ kPa}) \\\\
        & = & ${ansString} \\text{ kPa}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, find the mole fraction of Cl<sub>2</sub> in the mixture:</p>
            <MathJax.Node formula={eqChiCl2}/>
            <p>The partial pressure of Cl<sub>2</sub> is proportional to its
              mole fraction:</p>
            <MathJax.Node formula={eqPCl2}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>P</i><sub>Cl<sub>2</sub></sub></React.Fragment>),
        units: "kPa"
      }, feedback};
    }()
  },
  {
    "_id": 303,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 1,
    "idInExam": 3,
    "type": "string",
    "questionBody": function() {
      let compounds = [{x: 1, y: 4, z: 1}, {x: 2, y: 6, z: 1}, {x: 2, y: 4, z: 1}, {x: 2, y: 4, z: 2}, {x: 3, y: 8, z: 1}];
      let idx = Math.floor(Math.random()*compounds.length);
      let x = compounds[idx].x;
      let y = compounds[idx].y;
      let z = compounds[idx].z;
      let vComp = 2;
      let vO2 = (2*x + y/2 - z);
      let vCO2 = x*2;
      let vH2O = y;
      let answer = RegExp('^\\s*' + x.toString() + ',?\\s*' + y.toString() + ',?\\s*' + z.toString() + '\\s*$');

      var description = (
        <React.Fragment>
          <p>For the gas-phase combustion of the compound C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>,
          the following volume relationships were found at constant temperature
          and pressure.</p>
        <table className="data-table mb-3 ml-3">
            <tbody>
              <tr>
                <td>C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>(g)</td>
                <td>+</td>
                <td>O<sub>2</sub>(g)</td>
                <td>&#8594;</td>
                <td>CO<sub>2</sub>(g)</td>
                <td>+</td>
                <td>H<sub>2</sub>O(g)</td>
              </tr>
              <tr>
                <td>{vComp} vols</td>
                <td></td>
                <td>{vO2} vols</td>
                <td></td>
                <td>{vCO2} vols</td>
                <td></td>
                <td>{vH2O} vols</td>
              </tr>
            </tbody>
          </table>
          <p>From these data, what are <i>x</i>, <i>y</i>, and <i>z</i>?</p>
          <p><i>Enter the values of x, y, z separated by commas.</i></p>
        </React.Fragment>
      );

      const eqCO2 = `\\begin{eqnarray*}
        \\frac{V_{\\text{C}_x\\text{H}_y\\text{O}_z}}{V_{\\text{CO}_2}} & = & \\frac{1}{x} \\\\
        \\frac{${vComp}}{${vCO2}} & = & \\frac{1}{x} \\\\
        x & = & ${x}
        \\end{eqnarray*}`;
      const eqH2O = `\\begin{eqnarray*}
        \\frac{V_{\\text{C}_x\\text{H}_y\\text{O}_z}}{V_{\\text{H}_2\\text{O}}} & = & \\frac{1}{y/2} \\\\
        \\frac{${vComp}}{${vH2O}} & = & \\frac{1}{y/2} \\\\
        y & = & ${y}
        \\end{eqnarray*}`;
      const eqO2 = `\\begin{eqnarray*}
        \\frac{V_{\\text{C}_x\\text{H}_y\\text{O}_z}}{V_{\\text{O}_2}} & = & \\frac{1}{(2x + y/2 - z)/2} \\\\
        \\frac{${vComp}}{${vO2}} & = & \\frac{1}{(${2*x + y/2} - z)/2} \\\\
        z & = & ${z}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Since the question is about stoichiometric ratios, we should
            balance the equation. Just treat <i>x</i>, <i>y</i>, and <i>z</i> as
            numbers. Calculate the coefficients for CO<sub>2</sub> and H<sub>2</sub>O
            first, then, given a fixed number of O atoms on the right-hand side,
            calculate how many O<sub>2</sub> molecules need to be added to the left-hand side.</p>
            <p className="eqn">C<sub>x</sub>H<sub>y</sub>O<sub>z</sub>(g) +
              (2<i>x</i> + <i>y</i>/2 - <i>z</i>)/2 O<sub>2</sub>(g) &#8594; <i>x</i> CO<sub>2</sub>(g) + <i>y</i>/2 H<sub>2</sub>O(g)</p>
            <p>All the volume of the compounds in the equations are proportional to
              their stoichiometric coefficients, so, the ratios of volumes must be equal
              to the ratios of corresponding coefficients.</p>
            <p>For the compound and CO<sub>2</sub>,</p>
            <MathJax.Node formula={eqCO2}/>
            <p>Similarly, for H<sub>2</sub>O,</p>
            <MathJax.Node formula={eqH2O}/>
            <p>And, finally, for O<sub>2</sub> (substitute previously found <i>x</i> and <i>y</i>),</p>
            <MathJax.Node formula={eqO2}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>x, y, z</i></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 304,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 4,
    "type": "numeric",
    "questionBody": function() {
      let tFString = (Math.random()*(7.0 - 4.0) + 3.0).toPrecision(2);
      let tF = Number.parseFloat(tFString);
      let mH2OString = (Math.random()*(12.0 - 9.00) + 9.00).toPrecision(3);
      let mH2O = Number.parseFloat(mH2OString);
      let tFreezString = (Math.random()*(-8.00 + 12.0) - 12.0).toPrecision(3);
      let tFreez = Number.parseFloat(tFreezString);
      let qIce = mH2O*2.11*(0 - tFreez) + mH2O*334 + mH2O*4.184*(tF - 0);
      let qIceString = qIce.toPrecision(3);
      let answer = qIce/(2.05*(tF - tFreez));
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>You are interested in cooling a certain volume of a special
          beverage from room temperature (25.0&nbsp;&#176;C) down to {tFString}&nbsp;&#176;C.
          You use ice and, being an aspiring chemist, accurately weigh
          out {mH2OString}&nbsp;g of H<sub>2</sub>O(s) from the freezer
          ({tFreezString}&nbsp;&#176;C) to successfully accomplish the exact
          temperature decrease.</p>
          <p>Your rommate suggests using &#8220;cooling stones&#8221;, since these
          pieces of limestone (CaCO<sub>3</sub>) do not melt and dilute the
          beverage. These too are kept in the freezer at {tFreezString}&nbsp;&#176;C.
          How many grams of &#8220;cooling stones&#8221; would you require to cool
          the same initial amount of beverage to the same temperature?
          (ignore contribution from the glass)</p>
          <table className="data-table mb-5 ml-3">
            <tbody>
              <tr>
                <td className="text-right"><i>c</i><sub>H<sub>2</sub>O(l)</sub></td>
                <td className="text-left">4.184&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></td>
              </tr>
              <tr>
                <td className="text-right"><i>c</i><sub>H<sub>2</sub>O(s)</sub></td>
                <td className="text-left">2.11&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></td>
              </tr>
              <tr>
                <td className="text-right"><i>c</i><sub>CaCO<sub>3</sub>(s)</sub></td>
                <td className="text-left">2.05&nbsp;J&nbsp;g<sup>&#8211;1</sup>&nbsp;&#176;C<sup>&#8211;1</sup></td>
              </tr>
              <tr>
                <td className="text-right">&#916;<i>H</i><sub>fus</sub> (H<sub>2</sub>O(s)) at 0&nbsp;&#176;C</td>
                <td className="text-left">6.01&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup> (or 334&nbsp;J&nbsp;g<sup>&#8211;1</sup>)</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      const eqQBev = "q_\\text{ice} = -q_\\text{beverage}";
      const eqQStones = `\\begin{eqnarray*}
        q_\\text{stones} & = & -q_\\text{beverage} \\\\
        q_\\text{stones} & = & q_\\text{ice}
        \\end{eqnarray*}`;
      const eqQIce = `\\begin{eqnarray*}
        q_\\text{ice} & = & m_{\\text{H}_2\\text{O}} c_\\text{ice} (0\\,^{\\circ}\\text{C} - (${tFreezString}\\,^{\\circ}\\text{C})) + \\\\
        & + & m_{\\text{H}_2\\text{O}} \\Delta H_\\text{fus} + \\\\
        & + & m_{\\text{H}_2\\text{O}} c_\\text{water} (${tFString}\\,^{\\circ}\\text{C} - 0\\,^{\\circ}\\text{C}) \\\\
        & = & (${mH2OString} \\text{ g})(2.11 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})(0\\,^{\\circ}\\text{C} - (${tFreezString}\\,^{\\circ}\\text{C})) + \\\\
        & + & (${mH2OString} \\text{ g})(334 \\text{ J g}^{-1}) + \\\\
        & + & (${mH2OString} \\text{ g})(4.184 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})(${tFString}\\,^{\\circ}\\text{C} - 0\\,^{\\circ}\\text{C}) \\\\
        & = & ${Number.parseFloat(qIceString)} \\text{ J}
        \\end{eqnarray*}`;
      const eqMassStones = `\\begin{eqnarray*}
        q_\\text{stones} & = & m_{\\text{CaCO}_3} c_{\\text{CaCO}_3} (${tFString}\\,^{\\circ}\\text{C} - (${tFreezString}\\,^{\\circ}\\text{C})) \\\\
        ${Number.parseFloat(qIceString)} \\text{ J} & = & m_{\\text{CaCO}_3} (2.05 \\text{ J g}^{-1}\\,^{\\circ}\\text{C}^{-1})(${tFString}\\,^{\\circ}\\text{C} - (${tFreezString}\\,^{\\circ}\\text{C})) \\\\
        m_{\\text{CaCO}_3} & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>In the first scenario, when cooling with ice, the beverage was
            loosing heat and the ice was gaining it, so, </p>
          <MathJax.Node formula={eqQBev}/>
            <p>When cooling with stones, the beverage is again loosing heat and
            the stones are gaining it. Note that the amount of the bevarage, as well as
            its initial and final temperature are the same with the stones as they
            are with the ice. Therefore,</p>
            <MathJax.Node formula={eqQStones}/>
            <p>Calculate the amount of heat gained by the ice when cooling.
            The ice is first heated to 0&nbsp;&#176;C, then melted, and the
            liquid water is finally heated to {tFString}&nbsp;&#176;C.</p>
            <MathJax.Node formula={eqQIce}/>
            <p>The heat gained by the stones is equal to the heat gained by the
            ice. There is no melting with the stones, just the heating, so,</p>
            <MathJax.Node formula={eqMassStones}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>m</i><sub>stones</sub></React.Fragment>),
        units: "g"
      }, feedback};
    }()
  },
  {
    "_id": 305,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 5,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <p>Which of the following is NOT correct?</p>
      );

      var options = [
        {text: (<p>Heat capacity is an extensive property.</p>),
        correct: false,
        id: 0},
        {text: (<p>Specific heat is an intensive property.</p>),
        correct: false,
        id: 1},
        {text: (<p>An open system allows exchange of both heat and matter.</p>),
        correct: false,
        id: 2},
        {text: (<p>A closed system allows exchange of neither heat nor matter.</p>),
        correct: true,
        id: 3},
        {text: (<p>Temperature is an example of a state function.</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>Intensive properties are properties independent of system size, that is,
          no matter if we take 1 mole or 100 moles, or 2 liters of something, the
          property stays the same. Any &#8220;per gram&#8221; or &#8220;per mole&#8221;
          property, such as specific heat, is intensive.</p>
          <p>Extensive properties do depend on system size. For example,
          the heat capacity of a system consisting of 4 moles of water will be 4 times
          that of the system consisting of only 1 mole of water.</p>
          <p>In isolated systems, exchange of neither matter nor heat is allowed.
          Closed systems allow exchange of heat but not matter. Open system allow
          exchange of both.</p>
          <p>A state function is a property whose value depends only on the current state
          of the system. For example, it does not matter if we reach a certain temperature
          by heating or cooling (or maybe heating and then cooling), this temperature
          is still the same.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 306,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 6,
    "type": "numeric",
    "questionBody": function() {
      let answer = +3924+(6*(-394) + 6*(-286));
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>The standard enthalpy of combustion of cyclohexane, C<sub>6</sub>H<sub>12</sub>(l),
          is &#8211;3924&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>. What is the standard
          enthalpy of formation of C<sub>6</sub>H<sub>12</sub>(l)?</p>
        <table className="data-table mb-5 ml-3">
            <tbody>
              <tr>
                <th>Species</th>
                <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
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

      const eqHf = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn} & = & \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})}
        - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        -3924 \\text{ kJ mol}^{-1} & = & \\left[ (6)(-394) + (6)(-286) \\right]\\text{ kJ mol}^{-1}
        - \\left[ \\Delta H^{\\circ}_\\text{f} (\\text{C}_6\\text{H}_{12} (\\text{l})) + (9)(0) \\right]\\text{ kJ mol}^{-1} \\\\
        \\Delta H^{\\circ}_\\text{f} (\\text{C}_6\\text{H}_{12}(\\text{l})) & = & ${ansString} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the reaction of combustion of C<sub>6</sub>H<sub>12</sub>(l):</p>
            <p className="eqn">C<sub>6</sub>H<sub>12</sub>(l) + 9 O<sub>2</sub>(g) &#8594; 6 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l)</p>
            <p>Express the enthalpy of this reaction using the enthalpies of formation
            of the reactants and products, then solve for &#916;<i>H</i>&#176;<sub>f</sub>(C<sub>6</sub>H<sub>12</sub>(l)).
            Remember that the entalpy of formation of O<sub>2</sub>(g) is zero since it is in the
            standard state.</p>
            <MathJax.Node formula={eqHf}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>H</i>&#176;<sub>f</sub>(C<sub>6</sub>H<sub>12</sub>(l))</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 307,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 7,
    "type": "numeric",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>C<sub>3</sub>H<sub>6</sub>Cl<sub>2</sub>(g) has the structure shown below.
          Calculate the C&#8211;Cl bond enthalpy in this molecule.</p>
          <img className="ml-3 mb-3" src="data:image/png;base64,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" alt="C_3H_6_Cl_2"/>
          <table className="data-table mb-5 ml-3">
            <tbody>
              <tr>
                <th>Species</th>
                <th>&#916;<i>H</i>&#176;<sub>f</sub> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
                <th style={{borderLeft: "solid 1px #ddd"}}>Species</th>
                <th>Bond Enthalpy<br/> (kJ&nbsp;mol<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>C<sub>3</sub>H<sub>6</sub>Cl<sub>2</sub>(g)</td>
                <td>&#8211;137</td>
                <td style={{borderLeft: "solid 1px #ddd"}}>C&#8211;C</td>
                <td>347</td>
              </tr>
              <tr>
                <td>H(g, at)</td>
                <td>218</td>
                <td style={{borderLeft: "solid 1px #ddd"}}>C&#8211;H</td>
                <td>414</td>
              </tr>
              <tr>
                <td>C(g, at)</td>
                <td>717</td>
                <td style={{borderLeft: "solid 1px #ddd"}}></td>
                <td></td>
              </tr>
              <tr>
                <td>Cl(g, at)</td>
                <td>122</td>
                <td style={{borderLeft: "solid 1px #ddd"}}></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      );

      let answer = (3840 - 2*347 - 6*414)/2;
      let ansString = answer.toPrecision(3);

      const eqTBE = `\\begin{eqnarray*}
        \\Delta H^{\\circ}_\\text{rxn} & = & TBE = \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{products})}
        - \\sum{\\Delta H^{\\circ}_\\text{f}(\\text{reactants})} \\\\
        & = & \\left[ (3)(717) + (6)(218) + (2)(122) \\right] \\text{ kJ mol}^{-1} - (-137 \\text{ kJ mol}^{-1}) \\\\
        & = & 3840 \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;
      const eqCCl = `\\begin{eqnarray*}
        TBE & = & \\sum{BE(\\text{reactants})} - \\sum{BE(\\text{products})} \\\\
        3840 \\text{ kJ mol}^{-1} & = & \\left[ 2 BE(\\text{C}-\\text{Cl}) + (2)(347) + (6)(414) \\right] \\text{ kJ mol}^{-1} - 0 \\text{ kJ mol}^{-1} \\\\
        BE(\\text{C}-\\text{Cl}) & = & ${ansString} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the atomization reaction for C<sub>3</sub>H<sub>6</sub>Cl<sub>2</sub> (it
            corresponds to the TBE):</p>
            <p className="eqn">C<sub>3</sub>H<sub>6</sub>Cl<sub>2</sub>(g) &#8594; 3 C(g, at) + 6 H(g, at) + 2 Cl(g, at)</p>
            <p>Express the enthalpy of this reaction using the enthalpies of formation
            of the reactants and products:</p>
            <MathJax.Node formula={eqTBE} />
            <p>Now express the TBE using bond enthalpies and solve for the
              unknown C&#8211;Cl bond enthalpy. Note that bond enthalpies of the products
              are zero since they are all in atomic states.</p>
            <MathJax.Node formula={eqCCl} />
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>BE</i>(C&#8211;Cl)</React.Fragment>),
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 308,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 8,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <p>Which one of the following combinations of signs for &#916;<i>H</i> and
        &#916;<i>S</i> will always result in a spontaneous reaction?</p>
      );

      var options = [
        {text: (<p>Positive &#916;<i>H</i> and negative &#916;<i>S</i>.</p>),
        correct: false,
        id: 0},
        {text: (<p>Negative &#916;<i>H</i> and positive &#916;<i>S</i>.</p>),
        correct: true,
        id: 1},
        {text: (<p>Negative &#916;<i>H</i>  and negative &#916;<i>S</i>.</p>),
        correct: false,
        id: 2},
        {text: (<p>Positive &#916;<i>H</i> and positive &#916;<i>S</i>.</p>),
        correct: false,
        id: 3},
        {text: (<p>You need to know the temperature.</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>A reaction is spontaneous if its &#916;<i>G</i> is negative. Since</p>
            <MathJax.Node formula={"\\Delta G = \\Delta H - T \\Delta S,"}/>
            <p>if &#916;<i>H</i>&nbsp;&lt;&nbsp;0 and &#916;<i>S</i>&nbsp;&gt;&nbsp;0,
            &#916;<i>G</i> is guaranteed to be negative.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 309,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 2,
    "idInExam": 9,
    "type": "numeric",
    "questionBody": function() {
      let tempCString = (Math.random()*(30 - 20) + 20).toPrecision(2);
      let tempC = Number.parseFloat(tempCString);
      let temp = 273.15 + tempC;
      let tempString = temp.toPrecision(5);
      let answer = 4.28 - temp*(-0.1023);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>For the reaction:</p>
          <p className="eqn">2 N<sub>2</sub>O<sub>4</sub>(g) + O<sub>2</sub>(g) &#8594; 2 N<sub>2</sub>O<sub>5</sub>(g)</p>
          <p>&#916;<i>H</i>&#176; = 4.28&nbsp;kJ and &#916;<i>S</i>&#176; = &#8211;102.3&nbsp;J&nbsp;K<sup>&#8211;1</sup></p>
          <p>Calculate &#916;<i>G</i> at {tempString}&nbsp;K.</p>
        </React.Fragment>
      );

      const eqdG = `\\begin{eqnarray*}
        \\Delta G & = & \\Delta H - T \\Delta S \\\\
        & = & (4.28 \\text{ kJ}) - (${tempString} \\text{ K})(-0.1023 \\text{ kJ K}^{-1}) \\\\
        & = & ${ansString} \\text{ kJ}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Use Gibbs equation, remember to convert the entropy to kJ&nbsp;K<sup>&#8211;1</sup> in
            order to have consistent units.</p>
            <MathJax.Node formula={eqdG}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>&#916;<i>G</i></React.Fragment>),
        units: "kJ"
      }, feedback};
    }()
  },
  {
    "_id": 310,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 10,
    "type": "MC",
    "questionBody": function() {
      const eqKp = "K_\\text{p} = \\frac{(P_{\\text{CS}_2})(P_{\\text{H}_2})^4}{(P_{\\text{CH}_4})(P_{\\text{H}_2\\text{S}})^2}";
      var description = (
        <React.Fragment>
          <MathJax.Provider>
            <p>An equilibrium reaction involving only gases has the equilibrium expression:</p>
            <MathJax.Node formula={eqKp}/>
            <p>What is the reaction equation?</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      var options = [
        {text: (<p>CH<sub>4</sub> + H<sub>2</sub>S &#8644; CS<sub>2</sub> + H<sub>2</sub></p>),
        correct: false,
        id: 0},
        {text: (<p>CS<sub>2</sub> + 4 H<sub>2</sub> &#8644; CH<sub>4</sub> + 2 H<sub>2</sub>S</p>),
        correct: false,
        id: 1},
        {text: (<p>CH<sub>4</sub> + 2 H<sub>2</sub>S &#8644; CS<sub>2</sub> + 4 H<sub>2</sub></p>),
        correct: true,
        id: 2},
        {text: (<p>CS<sub>2</sub> + CH<sub>4</sub> &#8644; H<sub>2</sub> + H<sub>2</sub>S</p>),
        correct: false,
        id: 3},
        {text: (<p>2 CH<sub>4</sub> + H<sub>2</sub>S &#8644; 4 CS<sub>2</sub> + H<sub>2</sub></p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>The compounds that appear in the numerator of the <i>K</i><sub>p</sub> expression
          are the products, those in the denominator are the reactants. Each compound&#8217;s
          power in the <i>K</i><sub>p</sub> expression is its stoichiometric coefficient
          in the equation. Therefore, the reaction is</p>
          <p className="eqn">CH<sub>4</sub> + 2 H<sub>2</sub>S &#8644; CS<sub>2</sub> + 4 H<sub>2</sub></p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 311,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 11,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>Consider the following equilibrium</p>
          <p className="eqn">2 NO(g) + 2 H<sub>2</sub>(g) &#8644; N<sub>2</sub>(g) + 2 H<sub>2</sub>O(g)
            &#160;&#160;&#160;<i>K</i><sub>p</sub> = 650</p>
          <p>Which of the following statements concerning this system is/are correct?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>If the pressure were increased by reducing the volume, the equilibrium would shift to the right.</p>),
        correct: true,
        id: 0},
        {text: (<p>If the volume of the system were doubled, the value of <i>K</i><sub>p</sub> would double.</p>),
        correct: false,
        id: 1},
        {text: (<p>If H<sub>2</sub> is added, but the total volume is unchanged, the equilibrium would shift to the right.</p>),
        correct: true,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>According to the Le Chatelier&#8217;s principle, increasing the pressure of a
          system shifts the equilibrium to the side with fewer moles of gases (this
          reduces the pressure back and thus counteracts the initial increase).
          Since the right-hand side has 3 moles of gases, wherease the left-hand side has 4,
          the equilibrium will indeed be shifted to the right.</p>
          <p>Adding more reactant (H<sub>2</sub>) will shift the equilibrium to the right
          as well. This way the system decreases the amount of the reactant and resists
          the change.</p>
          <p>It is important to realize that all these changes (change of volume, addition of
          a reactant or product) except temperature changes
          affect the reaction quotient, <i>Q</i>, but <i>not</i> the
          constant. Therefore, even after doubling the volume, the constant will remain 650.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 312,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 12,
    "type": "numeric",
    "questionBody": function() {
      let pI = Math.floor(Math.random()*(120 - 90) + 90);
      let dP = Math.floor(Math.random()*(15 - 5) + 5);
      let pFSO3 = pI - dP;
      let x = pFSO3/2;
      let answer = Math.pow(pFSO3, 2)/(Math.pow(pI-2*x, 2)*(pI-x));
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Consider the following gaseous equilibrium:</p>
          <p className="eqn">2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) &#8644; 2 SO<sub>3</sub>(g)</p>
          <p>A system that initially contained only {pI}&nbsp;kPa of
          SO<sub>2</sub> and {pI}&nbsp;kPa of O<sub>2</sub> in a sealed container
          was allowed to react. When the system reached equilibrium, it was
          found that the pressure of SO<sub>3</sub> was {pFSO3}&nbsp;kPa.
          Calculate <i>K</i><sub>p</sub> for this equilibrium.</p>
        </React.Fragment>
      );

      const eqKp = `\\begin{eqnarray*}
        K_\\text{p} & = & \\frac{(P_{\\text{SO}_3})^2}{(P_{\\text{SO}_2})^2 (P_{\\text{O}_2})} \\\\
        & = & \\frac{(${pFSO3})^2}{(${pI-2*x})^2(${pI-x})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Construct and fill in an ICE table for the equilibrium.
            Since the volume of the container and its temperature do not change,
            we can use pressure-pressure stiochiometry. Start with the final
            pressure of SO<sub>3</sub> and figure out what its change must have been.
            Then use stoichiometry to calculate changes for SO<sub>2</sub> and O<sub>2</sub>.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>2 SO<sub>2</sub>(g)</th>
                  <th>+</th>
                  <th>O<sub>2</sub>(g)</th>
                  <th>&#8644;</th>
                  <th>2 SO<sub>3</sub>(g)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{pI}</td>
                  <td></td>
                  <td>{pI}</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;{2*x}</td>
                  <td></td>
                  <td>&#8211;{x}</td>
                  <td></td>
                  <td>+{x*2}</td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({pI} &#8211; {2*x})</td>
                  <td></td>
                  <td>({pI} &#8211; {x})</td>
                  <td></td>
                  <td>{pFSO3}</td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium pressures into the <i>K</i><sub>p</sub> expression:</p>
            <MathJax.Node formula={eqKp}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i><sub>p</sub></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 313,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 13,
    "type": "numeric",
    "questionBody": function() {
      let dH = Math.floor(Math.random()*(-30 + 70) - 70);
      let dHString = dH.toPrecision(3);
      let dHJ = dH*1000;
      let k1 = Math.floor(Math.random()*(190 - 110) + 110);
      let t1 = Math.floor(Math.random()*(350 - 270) + 270);
      let t2 = Math.floor(Math.random()*(650 - 570) + 570);
      let lnK2K1 = dHJ/8.314*(1.0/t1 - 1.0/t2);
      let lnK2K1String = lnK2K1.toPrecision(3);
      let K2K1 = Math.exp(lnK2K1);
      let K2K1String = K2K1.toPrecision(3);
      let answer = K2K1*k1;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A reaction has &#916;<i>H</i> = {dHString}&nbsp;kJ&nbsp;mol<sup>&#8211;1</sup>.
        The equilibrium constant for this reaction is {k1} at {t1}&nbsp;K.
        Determine the equilibrium constant for this reaction when the temperature
        is {t2}&nbsp;K.</p>
      );

      const eqVantHoff = `\\begin{eqnarray*}
        \\ln{\\left( \\frac{K_2}{K_1} \\right)} & = & \\frac{\\Delta H}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right) \\\\
        \\ln{\\left( \\frac{K_2}{${k1}} \\right)}
        & = & \\frac{${dHJ} \\text{ J mol}^{-1}}{8.314 \\text{ J mol}^{-1}\\text{ K}^{-1}}
        \\left( \\frac{1}{${t1}\\text{ K}} - \\frac{1}{${t2}\\text{ K}} \\right) \\\\
        & = & ${lnK2K1String} \\\\
        \\frac{K_2}{${k1}} & = & e^{${lnK2K1String}} \\\\
        & = & ${K2K1String} \\\\
        K_2 & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Use the van&#8217;t Hoff equation to calculate the constant at a new
            temperature. Remember that the enthalpy must be in joules.</p>
            <MathJax.Node formula={eqVantHoff}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 314,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 14,
    "type": "numeric",
    "questionBody": function() {
      let cString = (Math.random()*(1.45e-6 - 1.35e-6) + 1.35e-6).toPrecision(3);
      let c = Number.parseFloat(cString);
      let cAg = 3*c;
      let cAgString = cAg.toPrecision(3)
      let answer = Math.pow(cAg, 3)*c;
      let ansString = answer.toPrecision(2);

      var description = (
        <p>At 25&nbsp;&#176;C, a saturated solution of Ag<sub>3</sub>AsO<sub>4</sub> has
        [AsO<sub>4</sub><sup>3&#8211;</sup>] = {cString}&nbsp;M. What is
        the <i>K</i><sub>sp</sub> for Ag<sub>3</sub>AsO<sub>4</sub>?</p>
      );

      const eqKsp = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Ag}^+]^3 [\\text{AsO}_4^{3-}] \\\\
        & = & (${cAgString})^3 (${cString}) \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The concentration in a satuarated solution is an equilibrium concentration.
            Starting with this concentration, fill in an ICE table:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>Ag<sub>3</sub>AsO<sub>4</sub>(s)</th>
                  <th>&#8644;</th>
                  <th>3 Ag<sup>+</sup>(aq)</th>
                  <th>+</th>
                  <th>AsO<sub>4</sub><sup>3&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;{cString}</td>
                  <td></td>
                  <td>+(3)({cString})</td>
                  <td></td>
                  <td>+{cString}</td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>(3)({cString})</td>
                  <td></td>
                  <td>{cString}</td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>sp</sub>:</p>
          <MathJax.Node formula={eqKsp}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>K</i><sub>sp</sub></React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 315,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 15,
    "type": "numeric",
    "questionBody": function() {
      let pHString = (Math.random()*(13.00 - 11.00) + 11.00).toPrecision(4);
      let pH = Number.parseFloat(pHString);
      let cOH = Math.pow(10, pH-14);
      let cOHString = cOH.toPrecision(3);
      let answer = 5.50e-6/Math.pow(cOH, 2);
      let ansString = answer.toPrecision(3);

      var description = (
        <p>What is the solubility of Ca(OH)<sub>2</sub> (<i>K</i><sub>sp</sub> = 5.50e-6)
        in a solution with pH {pHString}?</p>
      );

      const eqOH = `\\begin{eqnarray*}
        [\\text{OH}^-] & = & 10^{-\\text{pOH}} \\\\
        & = & 10^{-14 + \\text{pH}} \\\\
        & = & 10^{-14 + ${pHString}} \\\\
        & = & ${cOHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqS = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Ca}^{2+}][\\text{OH}^-]^2 \\\\
        ${5.50e-6} & = & x(${cOHString})^2 \\\\
        x & = & ${ansString} \\text{ M}
        \\end{eqnarray*}`;


      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The solution is basic, hence, the concentration of OH<sup>&#8211;</sup> ions
            is fairly high and will affect the solubility via the common ion effect.
            So, first, calculate [OH<sup>&#8211;</sup>]:</p>
            <MathJax.Node formula={eqOH}/>
            <p>Now construct an ICE table:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>Ca(OH)<sub>2</sub>(s)</th>
                  <th>&#8644;</th>
                  <th>Ca<sup>2+</sup>(aq)</th>
                  <th>+</th>
                  <th>2 OH<sup>&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>{cOHString}</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+2<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>({cOHString} + 2<i>x</i>)<br/>&#8776; {cOHString}</td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>sp</sub> and solve for <i>x</i>, the solubility
            in mol/L.</p>
            <MathJax.Node formula={eqS}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>s</i></React.Fragment>),
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 316,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 16,
    "type": "numeric",
    "questionBody": function() {
      let vol = Math.floor(Math.random()*(80 - 20) + 20);
      let volString = vol.toPrecision(3);
      let cIBaString = (Math.random()*(0.0600 - 0.0100) + 0.0100).toPrecision(3);
      let cIBa = Number.parseFloat(cIBaString);
      let cISO4String = (Math.random()*(0.000600 - 0.000100) + 0.000100).toPrecision(3);
      let cISO4 = Number.parseFloat(cISO4String);
      let cBa = cIBa/2;
      let cSO4 = cISO4/2;
      let cBaString = cBa.toPrecision(3);
      let cSO4String = cSO4.toPrecision(3);
      let cNewBa = cBa - cSO4;
      let cNewBaString = cNewBa.toPrecision(3);
      let answer = 1.1e-8/cNewBa;
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>{volString}&nbsp;mL of {cIBaString}&nbsp;M BaCl<sub>2</sub> are mixed
            with {volString}&nbsp;mL of {cISO4String}&nbsp;M (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>.
            Calculate the concentration of SO<sub>4</sub><sup>2&#8211;</sup> remaining
            in solution after precipitation of BaSO<sub>4</sub> is complete.</p>
          <p><i>K</i><sub>sp</sub> of BaSO<sub>4</sub> = 1.1e-8</p>
        </React.Fragment>
      );

      const eqNewC = `\\begin{eqnarray*}
        c_{\\text{Ba}^{2+}} & = & ${cBaString} \\text{ M} \\\\
        c_{\\text{SO}_4^{2-}} & = & ${cSO4String} \\text{ M}
        \\end{eqnarray*}`;
      const eqX = `\\begin{eqnarray*}
        K_\\text{sp} & = & [\\text{Ba}^{2+}][\\text{SO}_4^{2-}] \\\\
        ${1.1e-8} & = & (${cNewBaString})x \\\\
        [\\text{SO}_4^{2-}] & = & x = ${ansString} \\text{ M}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, calculate the concentrations of Ba<sup>2+</sup> from BaCl<sub>2</sub> and
            SO<sub>4</sub><sup>2&#8211;</sup> from (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> after
            mixing: since the volume
            of the mixture is double the volume of each individual solution, the
            two concentrations were halved:</p>
            <MathJax.Node formula={eqNewC}/>
            <p>We will divide this problem into two steps: first, BaSO<sub>4</sub> is
            precipitated in a non-equilibrium reaction, then a very small portion of
            it is dissolved back to form Ba<sup>2+</sup> and SO<sub>4</sub><sup>2&#8211;</sup>.</p>
            <p>Construct an ICF table for the first step: find that SO<sub>4</sub><sup>2&#8211;</sup> is
            the limiting reagent and use its amount to calculate the changes for everything in the table.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>Ba<sup>2+</sup>(aq)</th>
                  <th>+</th>
                  <th>SO<sub>4</sub><sup>2&#8211;</sup>(aq)</th>
                  <th>&#8594;</th>
                  <th>BaSO<sub>4</sub>(s)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cBaString}</td>
                  <td></td>
                  <td>{cSO4String}</td>
                  <td></td>
                  <td>&#10006;</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;{cSO4String}</td>
                  <td></td>
                  <td>&#8211;{cSO4String}</td>
                  <td></td>
                  <td>+{cSO4String}</td>
                </tr>
                <tr>
                  <td>final</td>
                  <td>({cBaString} &#8211; {cSO4String})</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>&#10006;</td>
                </tr>
              </tbody>
            </table>
            <p>Now, set up the equilibrium and the ICE table for the second step,
            dissolution of BaSO<sub>4</sub>. Use the final concentrations from the
            previous step as the initial ones for the equilibrium.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>BaSO<sub>4</sub>(s)</th>
                  <th>&#8644;</th>
                  <th>Ba<sup>2+</sup>(aq)</th>
                  <th>+</th>
                  <th>SO<sub>4</sub><sup>2&#8211;</sup>(aq)</th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>{cNewBaString}</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>&#10006;</td>
                  <td></td>
                  <td>({cNewBaString} + <i>x</i>)<br/>&#8776; {cNewBaString}</td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>sp</sub> and solve for <i>x</i>.</p>
            <MathJax.Node formula={eqX}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>[SO<sub>4</sub><sup>2&#8211;</sup>]</React.Fragment>),
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 317,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 17,
    "type": "numeric",
    "questionBody": function() {
      let cString = (Math.random()*(0.900 - 0.100) + 0.100).toPrecision(3);
      let c = Number.parseFloat(cString);
      let k = 7.2e-4;
      let cH = Math.sqrt(k*c);
      let cHString = cH.toPrecision(3);
      let answer = Math.log10(cH);
      let ansString = answer.toPrecision(3);

      var description = (
        <p>Calculate the pH of a {cString}&nbsp;M solution of nitrous acid,
        HNO<sub>2</sub>. The <i>K</i><sub>a</sub> for nitrous acid is {k}.</p>
      );

      const eqX = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{NO}_2^-]}{[\\text{HNO}_2]} \\\\
        ${k} & = & \\frac{x^2}{${cString}} \\\\
        x & = & ${cHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${cHString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Write down the dissociation equilibrium for HNO<sub>2</sub> and
            construct an ICE table:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>HNO<sub>2</sub></th>
                  <th>&#8644;</th>
                  <th>H<sup>+</sup></th>
                  <th>+</th>
                  <th>NO<sub>2</sub><sup>&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cString} &#8211; <i>x</i>)<br/>&#8776; {cString}</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression
            for <i>K</i><sub>a</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Using the [H<sup>+</sup>] = <i>x</i> = {cHString}&nbsp;M just found,
            calculate the pH:</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 318,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 18,
    "type": "MS",
    "questionBody": function() {
      let cIString = (Math.random()*(0.190 - 0.100) + 0.100).toPrecision(3);
      let volFString = (Math.random()*(950 - 600) + 600).toPrecision(3);

      var description = (
        <p>Consider the weak base methylamine, CH<sub>3</sub>NH<sub>2</sub>. When
        100&nbsp;mL of a {cIString}&nbsp;M solution of methylamine is diluted to a total
        volume of {volFString}&nbsp;mL, which of the following statements is/are
        correct?</p>
      );

      var options = [
        {text: (<p>The [OH<sup>&#8211;</sup>] will decrease.</p>),
        correct: true,
        id: 0},
        {text: (<p>The [H<sup>+</sup>] will increase.</p>),
        correct: true,
        id: 1},
        {text: (<p>The [CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>] will increase.</p>),
        correct: false,
        id: 2},
        {text: (<p>The sum of [CH<sub>3</sub>NH<sub>2</sub>] + [CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>] will remain constant.</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>The concentrations of the products of the dissociation,
          CH<sub>3</sub>NH<sub>3</sub><sup>+</sup> and OH<sup>&#8211;</sup>, decrease
          as the initial concentration of the base decreases.</p>
          <p>In any solution, the product [H<sup>+</sup>][OH<sup>&#8211;</sup>] is a constant,
          so, since [OH<sup>&#8211;</sup>] will decrease, [H<sup>+</sup>] must increase.</p>
          <p>When a certain part, say, <i>x</i>, of CH<sub>3</sub>NH<sub>2</sub> dissociates,
          [CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>] = <i>x</i> and [CH<sub>3</sub>NH<sub>2</sub>] =
          (<i>c</i><sub>initial</sub> &#8211; <i>x</i>), so that their sum is always equal
          to the initial concentration. But the initial concentration decreases after dilution, thus,
          this sum will decrease.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 319,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 19,
    "type": "numeric",
    "questionBody": function() {
      let cString = (Math.random()*(0.750 - 0.100) + 0.100).toPrecision(3);
      let c = Number.parseFloat(cString);
      let ka1 = 1.3e-2;
      let ka2 = 6.2e-8;
      let kb = 1e-14/ka1;
      let kbString = kb.toPrecision(2);
      let cH = Math.sqrt(ka2*c);
      let cHString = cH.toPrecision(3);
      let answer = -Math.log10(cH);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Calculate the pH of a {cString}&nbsp;M solution of KHSO<sub>3</sub>.</p>
          <p>H<sub>2</sub>SO<sub>3</sub> <i>K</i><sub>a1</sub> = {ka1}, <i>K</i><sub>a2</sub> = {ka2}</p>
        </React.Fragment>
      );

      const eqKb = `\\begin{eqnarray*}
        K_\\text{b} & = & \\frac{K_\\text{w}}{K_\\text{a1}} \\\\
        & = & \\frac{${1e-14}}{${ka1}} \\\\
        & = & ${kbString}
        \\end{eqnarray*}`;
      const eqX = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{SO}_3^{2-}]}{[\\text{HSO}_3^-]} \\\\
        ${ka2} & = & \\frac{x^2}{${cString}} \\\\
        x & = & ${cHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${cHString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>KHSO<sub>3</sub> dissociates into K<sup>+</sup>, which is just a
            spectator ion and does not affect the pH, and HSO<sub>3</sub><sup>&#8211;</sup>.
            HSO<sub>3</sub><sup>&#8211;</sup> can dissociate as an acid:</p>
            <p className="eqn">HSO<sub>3</sub><sup>&#8211;</sup> &#8644; H<sup>+</sup> + SO<sub>3</sub><sup>2&#8211;</sup></p>
            <p>The <i>K</i><sub>a</sub> value that corresponds to this dissociation
            is the <i>K</i><sub>a2</sub> of H<sub>2</sub>SO<sub>3</sub>, {ka2}.</p>
            <p>HSO<sub>3</sub><sup>&#8211;</sup> can also dissociate as a base:</p>
            <p className="eqn">HSO<sub>3</sub><sup>&#8211;</sup> + H<sub>2</sub>O &#8644; H<sub>2</sub>SO<sub>3</sub> + OH<sup>&#8211;</sup></p>
            <p>When dissociating as a base, HSO<sub>3</sub><sup>&#8211;</sup> is a conjugate
            of the H<sub>2</sub>SO<sub>3</sub> acid. Therefore, its <i>K</i><sub>b</sub> is</p>
            <MathJax.Node formula={eqKb}/>
            <p>Since <i>K</i><sub>a</sub> of HSO<sub>3</sub><sup>&#8211;</sup> is
            higher than its <i>K</i><sub>b</sub>, we will treat
            HSO<sub>3</sub><sup>&#8211;</sup> as an acid.</p>
            <p>Construct an ICE table for the acidic equilibrium:</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>HSO<sub>3</sub><sup>&#8211;</sup></th>
                  <th>&#8644;</th>
                  <th>H<sup>+</sup></th>
                  <th>+</th>
                  <th>SO<sub>3</sub><sup>2&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{cString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({cString} &#8211; <i>x</i>)<br/>&#8776; {cString}</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td><i>x</i></td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations into the expression for <i>K</i><sub>a</sub> and
            solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Use the [H<sup>+</sup>] = <i>x</i> = {cHString}&nbsp;M to calculate the pH:</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 320,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 20,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <p>Which of the following combinations will produce a buffer solution?</p>
      );

      var options = [
        {text: (<p>A mixture of 50.0&nbsp;mL of 0.100&nbsp;M NH<sub>3</sub> and 50.0&nbsp;mL of 0.100&nbsp;M NH<sub>4</sub>Cl.</p>),
        correct: true,
        id: 0},
        {text: (<p>A mixture of 50.0&nbsp;mL of 0.100&nbsp;M HCl and 100.0&nbsp;mL of 0.100&nbsp;M NH<sub>3</sub>.</p>),
        correct: true,
        id: 1},
        {text: (<p>A mixture of 50.0&nbsp;mL of 0.100&nbsp;M HCl and 50.0&nbsp;mL of 0.0500&nbsp;M NH<sub>4</sub>Cl.</p>),
        correct: false,
        id: 2}
      ];

      var feedback = (
        <React.Fragment>
          <p>NH<sub>3</sub> and NH<sub>4</sub><sup>+</sup> from NH<sub>4</sub>Cl are a conjugate weak base-acid pair. Thus,
          when they are mixed together, a buffer is formed.</p>
          <p>NH<sub>3</sub> and HCl are not a conjugate pair, however, they will neutralize
          each other:</p>
          <p className="eqn">NH<sub>3</sub> + HCl &#8594; NH<sub>4</sub>Cl</p>
          <p>When 50.0&nbsp;mL of 0.100&nbsp;M HCl and 100.0&nbsp;mL of 0.100&nbsp;M NH<sub>3</sub> are mixed,
          HCl will be the limiting reagent (there is only 0.00500&nbsp;mol of HCl and 0.0100&nbsp;mol
          of NH<sub>3</sub>). Thus, the resulting solution will contain no HCl,
          (0.0100 &#8211; 0.00500) = 0.0500&nbsp;mol of NH<sub>3</sub> and 0.0500&nbsp;mol of NH<sub>4</sub>Cl.
          Once again, the presence of the conjugate pair makes the solution a buffer.</p>
          <p>NH<sub>4</sub>Cl and HCl are also not a weak acid-base conjugate pair. Moreover,
          they are both acids, so they will not neutralize each other. The solution will not be a buffer. </p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 321,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 21,
    "type": "numeric",
    "questionBody": function() {
      let vAString = (Math.random()*(9.50 - 4.50) + 4.50).toPrecision(3);
      let vA = Number.parseFloat(vAString);
      let vBString = (Math.random()*(4.00 - 1.00) + 1.00).toPrecision(3);
      let vB = Number.parseFloat(vBString);
      let cAString = (Math.random()*(0.700 - 0.100) + 0.100).toPrecision(3);
      let cA = Number.parseFloat(cAString);
      let cBString = (Math.random()*(0.700 - 0.100) + 0.100).toPrecision(3);
      let cB = Number.parseFloat(cBString);
      let ka = 1.8e-5;
      let nA = cA*vA/1000;
      let nAString = nA.toPrecision(3);
      let nB = cB*vB/1000;
      let nBString = nB.toPrecision(3);
      let cH = ka*nA/nB;
      let cHString = cH.toPrecision(3);
      let answer = -Math.log10(cH);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>What is the pH of a buffer solution prepared by mixing {vAString}&nbsp;mL
          of {cAString}&nbsp;M CH<sub>3</sub>COOH with {vBString}&nbsp;mL of {cBString}&nbsp;M
          CH<sub>3</sub>COONa</p>
          <p><i>K</i><sub>a</sub> for CH<sub>3</sub>COOH = {ka}</p>
        </React.Fragment>
      );

      const eqMol = `\\begin{eqnarray*}
        n_{\\text{CH}_3\\text{COOH}} & = & (${cAString} \\text{ M})(\\frac{${vAString}}{1000} \\text{ L}) = ${nAString} \\text{ mol} \\\\
        n_{\\text{CH}_3\\text{COO}^-} & = & (${cBString} \\text{ M})(\\frac{${vBString}}{1000} \\text{ L}) = ${nBString} \\text{ mol}
        \\end{eqnarray*}`;
      const eqX = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} \\\\
        ${ka} & = & \\frac{x(${nBString})}{${nAString}} \\\\
        x & = & ${cHString} \\text{ M}
        \\end{eqnarray*}`;
      const eqpH = `\\begin{eqnarray*}
        \\text{pH} & = & -\\log{[\\text{H}^+]} \\\\
        & = & -\\log{(${cHString})} \\\\
        & = & ${ansString}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>First, calculate the number of moles of the acid, CH<sub>3</sub>COOH, and
            its conjugate base, CH<sub>3</sub>COO<sup>&#8211;</sup> (from CH<sub>3</sub>COONa):</p>
            <MathJax.Node formula={eqMol}/>
            <p>Write down the equilibrium for the buffer and construct an ICE table.
            Remember that we can use moles instead of concentrations when setting up
            an equilibrium for a buffer.</p>
            <table className="ice">
              <tbody>
                <tr>
                  <th></th>
                  <th>CH<sub>3</sub>COOH</th>
                  <th>&#8644;</th>
                  <th>H<sup>+</sup></th>
                  <th>+</th>
                  <th>CH<sub>3</sub>COO<sup>&#8211;</sup></th>
                </tr>
                <tr>
                  <td>initial</td>
                  <td>{nAString}</td>
                  <td></td>
                  <td>0</td>
                  <td></td>
                  <td>{nBString}</td>
                </tr>
                <tr>
                  <td>change</td>
                  <td>&#8211;<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                  <td></td>
                  <td>+<i>x</i></td>
                </tr>
                <tr>
                  <td>equilibrium</td>
                  <td>({nAString} &#8211; <i>x</i>)<br/>&#8776; {nAString}</td>
                  <td></td>
                  <td><i>x</i></td>
                  <td></td>
                  <td>({nBString} &#8211; <i>x</i>)<br/>&#8776; {nBString}</td>
                </tr>
              </tbody>
            </table>
            <p>Substitute the equilibrium concentrations (and moles) into the expression
            for <i>K</i><sub>a</sub> and solve for <i>x</i>:</p>
            <MathJax.Node formula={eqX}/>
            <p>Use the [H<sup>+</sup>] = <i>x</i> = {cHString}&nbsp;M to calculate the pH:</p>
            <MathJax.Node formula={eqpH}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>pH</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 322,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 22,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>The titration curve shown below was collected upon the titration of
          an unknown weak acid with a strong base. What is the approximate p<i>K</i><sub>a</sub> of
          the weak acid?</p>
          <p className="eqn"><img src="data:image/png;base64,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" alt="titration curve"/></p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>5.5</p>), correct: true, id: 0},
        {text: (<p>9.5</p>), correct: false, id: 1},
        {text: (<p>6.3</p>), correct: false, id: 2},
        {text: (<p>2.9</p>), correct: false, id: 3},
        {text: (<p>The p<i>K</i><sub>a</sub> cannot be determined without knowing at least one of the concentration values.</p>),
          correct: false, id: 4}
      ];

      const eqpKa = `\\begin{eqnarray*}
        K_\\text{a} & = & \\frac{[\\text{H}^+]n_\\text{base}}{n_\\text{acid}} & = & [\\text{H}^+] \\\\
        -\\log{K_\\text{a}} & = & -\\log{[\\text{H}^+]} \\\\
        \\text{p}K_\\text{a} & = & \\text{pH}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <p>Exactly halfway from the equivalence point, at 50&nbsp;mL of strong base,
          there is a point called the &ldquo;midpoint&rdquo;. This is where the pH of the solution
          is approximately equal to the p<i>K</i><sub>a</sub> of the weak acid being titrated.
          So, the p<i>K</i><sub>a</sub> is 5.5.</p>
          <p>The explanation for this fact is that at the midpoint the solution is a buffer with
          equal moles of acid and base. Hence,</p>
          <MathJax.Provider>
            <MathJax.Node formula={eqpKa}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 323,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 3,
    "idInExam": 23,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>The titration curve shown below was collected upon the titration of
          an unknown weak acid with a strong base.</p>
          <p className="eqn"><img src="data:image/png;base64,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" alt="titration curve"/></p>
          <p>Which of the following indicators would be suitable for determining the equivalence point of this titration?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>Phenolphthalein (p<i>K</i><sub>a</sub> = 9.0)</p>),
        correct: true,
        id: 0},
        {text: (<p>Thymolphthalein (p<i>K</i><sub>a</sub> = 10.0)</p>),
        correct: true,
        id: 1},
        {text: (<p>Trinitrobenzoic Acid (p<i>K</i><sub>a</sub> = 13.0)</p>),
        correct: false,
        id: 2},
        {text: (<p>Methyl Red (p<i>K</i><sub>a</sub> = 5.5)</p>),
        correct: false,
        id: 3},
        {text: (<p>Bromthymol Blue (p<i>K</i><sub>a</sub> = 6.5)</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>The equivalence point of this titration occurs when 100&nbsp;mL of the
          strong base is added. The indicator has to change its color at the pH of the
          equivalence point or close to it (+/&#8211;1 unit of pH).</p>
          <p>The pH at wich an
          indicator changes its color is actually equal to its p<i>K</i><sub>a</sub>.
          So, a suitable indicator for this titration has p<i>K</i><sub>a</sub> in
          the range 8 to 10. Only Phenolphthalein (p<i>K</i><sub>a</sub> = 9.0) and
          Thymolphthalein (p<i>K</i><sub>a</sub> = 10.0) are suitable.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 324,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 24,
    "type": "MS",
    "questionBody": function() {
      let oxNumbers = [
        {el: "Nitrogen",
        comp: (<React.Fragment>NO</React.Fragment>),
        states: [{n: "+2", correct: true}, {n: "+3", correct: false}]},
        {el: "Chlorine",
        comp: (<React.Fragment>ClO<sub>3</sub><sup>&#8211;</sup></React.Fragment>),
        states: [{n: "+5", correct: true}, {n: "+6", correct: false}]},
        {el: "Nitrogen",
        comp: (<React.Fragment>N<sub>2</sub>O</React.Fragment>),
        states: [{n: "-1", correct: false}, {n: "+1", correct: true}]},
        {el: "Nickel",
        comp: (<React.Fragment>Ni<sub>2</sub>O<sub>3</sub></React.Fragment>),
        states: [{n: "+2", correct: false}, {n: "+3", correct: true}]},
        {el: "Sulfur",
        comp: (<React.Fragment>SO<sub>3</sub><sup>2&#8211;</sup></React.Fragment>),
        states: [{n: "+4", correct: true}, {n: "+6", correct: false}]},
        {el: "Nitrogen",
        comp: (<React.Fragment>HNO<sub>3</sub></React.Fragment>),
        states: [{n: "+5", correct: true}, {n: "+6", correct: false}, {n: "+7", correct: false}]}
      ];

      var options = [];
      let fB = [];
      while (options.length < 4) {
        let i = Math.floor(Math.random()*oxNumbers.length);
        let j = Math.floor(Math.random()*oxNumbers[i].states.length);
        options.push({
          text: (<p>{oxNumbers[i].el} is {oxNumbers[i].states[j].n} in {oxNumbers[i].comp}</p>),
          correct: oxNumbers[i].states[j].correct,
          id: options.length
        });
        if (oxNumbers[i].states[j].correct) {
          fB.push(<React.Fragment>{oxNumbers[i].el.toLowerCase()} is indeed {oxNumbers[i].states[j].n} in {oxNumbers[i].comp}</React.Fragment>);
        } else {
          fB.push(<React.Fragment>{oxNumbers[i].el.toLowerCase()} is not {oxNumbers[i].states[j].n} in {oxNumbers[i].comp}</React.Fragment>);
        }
        oxNumbers.splice(i, 1);
      }

      var description = (
        <p>Which of the following four assignments of oxidation numbers is/are correct?</p>
      );

      var feedback = (
        <React.Fragment>
          <p>To calculate an oxidation number, follow the procedure: assign fixed oxidation states
          to oxygen (&#8211;2), hydrogen (+1); then set up an equation where
          the sum of the oxidation numbers of all the elements times their indices
          is equal to the overall charge of the species. If the overall charge is not
          specified, it is zero.</p>
        <p>So, {fB.map(item => (<React.Fragment>{item}{fB.indexOf(item) < fB.length-1 ? ", " : ""}</React.Fragment>))}.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 325,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 25,
    "type": "string",
    "questionBody": function() {
      let answer = RegExp('^\\s*2,?\\s*3,?\\s*,?\\s*1\\s*$');

      var description = (
        <React.Fragment>
          <p>Balance the following reaction, which occurs in basic solution.</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> + SO<sub>3</sub><sup>2&#8211;</sup> &#8594; MnO<sub>2</sub> + SO<sub>4</sub><sup>2&#8211;</sup></p>
          <p><i>Enter the coefficients for MnO<sub>4</sub><sup>&#8211;</sup>, SO<sub>3</sub><sup>2&#8211;</sup>, and H<sub>2</sub>O separated by commas.</i></p>
        </React.Fragment>
      );

      var feedback = (
        <React.Fragment>
          <p>Separate the reaction into two half-reactions: one will contain manganese,
          and the other one will contain sulfur. So, the first half-reaction:</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> &#8594; MnO<sub>2</sub></p>
          <p>Manganese is already balanced. Balance the oxygen by adding water:</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> &#8594; MnO<sub>2</sub> + 2 H<sub>2</sub>O</p>
          <p>Now balance the hydrogen: left-hand side has 4 too few hydrogens, so add 4 H<sub>2</sub>O there,
          and also add 4 OH<sup>&#8211;</sup> to the right-hand side:</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> + 4 H<sub>2</sub>O &#8594; MnO<sub>2</sub> + 2 H<sub>2</sub>O + 4 OH<sup>&#8211;</sup></p>
          <p>Simplify by cancelling some H<sub>2</sub>O:</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> + 2 H<sub>2</sub>O &#8594; MnO<sub>2</sub> + 4 OH<sup>&#8211;</sup></p>
          <p>Finally, balance the charge: left-hand side has  &#8211;1 charge, right-hand side has &#8211;4,
          so add 3 electrons to the left-hand side:</p>
          <p className="eqn">MnO<sub>4</sub><sup>&#8211;</sup> + 2 H<sub>2</sub>O + 3 <i>e</i><sup>&#8211;</sup> &#8594; MnO<sub>2</sub> + 4 OH<sup>&#8211;</sup></p>
          <p>Repeat the steps for the half-reaction with sulfur. Sulfur itself
          is already balanced.</p>
          <p className="eqn">SO<sub>3</sub><sup>2&#8211;</sup> &#8594; SO<sub>4</sub><sup>2&#8211;</sup></p>
          <p>Balance the oxygen by adding H<sub>2</sub>O:</p>
          <p className="eqn">SO<sub>3</sub><sup>2&#8211;</sup> + H<sub>2</sub>O &#8594; SO<sub>4</sub><sup>2&#8211;</sup></p>
          <p>Balance the hydrogen: right-hand side has 2 too few hydrogens, so add 2 H<sub>2</sub>O there
          and add 2 OH<sup>&#8211;</sup> to the left-hand side:</p>
          <p className="eqn">SO<sub>3</sub><sup>2&#8211;</sup> + H<sub>2</sub>O + 2 OH<sup>&#8211;</sup> &#8594; SO<sub>4</sub><sup>2&#8211;</sup> + 2 H<sub>2</sub>O</p>
          <p>Simplify by cancelling water:</p>
          <p className="eqn">SO<sub>3</sub><sup>2&#8211;</sup> + 2 OH<sup>&#8211;</sup> &#8594; SO<sub>4</sub><sup>2&#8211;</sup> + H<sub>2</sub>O</p>
          <p>Balance the charge: left-hand side is &#8211;4, right-hand side is &#8211;2, so add 2 electrons
          to the right-hand side:</p>
          <p className="eqn">SO<sub>3</sub><sup>2&#8211;</sup> + 2 OH<sup>&#8211;</sup> &#8594; SO<sub>4</sub><sup>2&#8211;</sup> + H<sub>2</sub>O + 2 <i>e</i><sup>&#8211;</sup></p>
          <p>Now we need to combine the half-reactions. In order to make the number of electrons
          transferred the same in both half-reactions, the first one must be multiplied by 2 and the second one by 3.</p>
          <p className="eqn">2 MnO<sub>4</sub><sup>&#8211;</sup> + 4 H<sub>2</sub>O + 6 <i>e</i><sup>&#8211;</sup> +
            3 SO<sub>3</sub><sup>2&#8211;</sup> + 6 OH<sup>&#8211;</sup> &#8594;
            2 MnO<sub>2</sub> + 8 OH<sup>&#8211;</sup> + 3 SO<sub>4</sub><sup>2&#8211;</sup> + 3 H<sub>2</sub>O + 6 <i>e</i><sup>&#8211;</sup></p>
          <p>Cancel electrons, water, and OH<sup>&#8211;</sup>:</p>
          <p className="eqn">2 MnO<sub>4</sub><sup>&#8211;</sup> + H<sub>2</sub>O + 3 SO<sub>3</sub><sup>2&#8211;</sup> &#8594;
            2 MnO<sub>2</sub> + 2 OH<sup>&#8211;</sup> + 3 SO<sub>4</sub><sup>2&#8211;</sup></p>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: "",
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 326,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 26,
    "type": "string",
    "questionBody": function() {
      let i = Math.floor(Math.random()*7);
      let image, ox1, ox2;
      if (i == 0) {
        image = "data:image/png;base64,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";
        ox1 = 1;
        ox2 = 1;
      } else if(i == 1) {
        image = "data:image/png;base64,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";
        ox1 = 1;
        ox2 = 3;
      } else if(i == 2) {
        image = "data:image/png;base64,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";
        ox1 = 3;
        ox2 = 1;
      } else if(i == 3) {
        image = "data:image/png;base64,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";
        ox1 = 3;
        ox2 = 3;
      } else if(i == 4) {
        image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACTCAMAAABrngFCAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAR/SURBVHic7ZzbkqsqEIa98/1fkcOoiBJDrJm73uAhWxNQjBCoWv5VU1oTNd9A003TOFl26dIlq1DBWB4bYtIvdKyWksbm0GJQ6AOHBGgwsPFEyrggWr9AXk4iqoXphM5NFFHigrEoKZvBwMeTFEZTUn5G98+dMfmoYnOMQsAY/fuLjTFJD6gLxqQLxqYLxqYLxqYLxqYLxqYLxqYLxibPMHPC8Uw8LhgvMI36yctEYDwrMZhZsUmy5FpmfYyqUzCYq+5t/aXaZ2AKqLEGKgLBVAeWWjDU060oCEwFnfutfIIghS+YlSplAu7OXR4APy7NAr2zPYIIzQIgXRs9JAzpJ1fMHW/oQnYTlRPNj9v19WzA/sb2Qog7d5S+Yh7aLeAMCf+lnp/HQNPsXVcOdZ0C+NPp0U54Xw1G7UCz3e4/ncDDCW0X4aCU3Lu/KXTjPDYei5vObFSolv4mffOX3RSNddSqb3ypFHD8/63CwnlClRrklr/xvS8QLBelf7oGZ36FO+hNzyS3dystX1qRydq36dT9e9kGNdJg2AJe6hiI3337nfeGYa/GMkp16WtLkNvtwDAv2PpoFaJ0osrvjbH1aQ/9u78rdNdhNg76+WjRahJj72Hlz4SAwUx4Z3lgrYZebf5ortDtVOpWMHec5dTERKBVv0Sd8vaGXpt0VzCWgPkJjCQ6XcZ3ZRV4xSTGGIW3wjjSob73DUPUmOjyrFRh6W9EIvMztoyxGmDMVzjDsEHyDaZqh6WFptR1Noc5322YHJprcRTE8C3cAwxzgemHGZk5eDjDLI5v3cTGbnKBQU2Rwa03l29PGLAaEiVaGjCdJxJ4O9pA1pgTp09gOpxRYxvMo6jbTjbVp8wbjFVTPxU7uwusz/AGgzQHB07Lei9bOAuzG5uKvh0eU3cPvmfGVhjH2LQjcu/n6Uy+nxsFXdhBjQrEc5NFhikfyo89HUdUGNVDq+Q/IozuobV734chgXbPoDGfXE7G48FktNRRuF/M3CLCqCRe9Ku8PyZMW6G+XyaFEWFaNUt6rCYn8WA0yzCPSACmNcweY8GYWGLBGFkiwZhZ4sBYWBxg6P1bLA4wDqHUE0sEGDvL92E2WL4Os8WSkd1ihVeYTRYH+YQ5y+IT5jSLR5jzLP5g9lhwLcSYUdaWRUR/MHssNdSUjrm2sI6q4vYVlmkV4lev09hhqvYbLGhefmjDw+zabr4sgYWF2R9HqzW9oDAOY/prMC7+pfgSjJOve75mxnhIGEe/O9UOkF6UCAbjGgMItHioqpBwMO7xiIhnvSkQzKHY+KzEEWtp5QyMhzi9Vu26qeRd3llO7DP1z/I5TACWj2FCsHwKE4TlQ5gwLJ/BBGL5CCYP9bZjMjv9tQ7CoKBv4R+DUWE3KMyR/s8lpPGmbqarlTxPBgZjxZMKTJb9SzCEsSM7pYPCcOBMSvf9XiFhxsEh3bcph4ShQ27F3Cu44Q2YJwSDwMsajReNm+fSEBKQyn/nCR2HD2lMxdNQSizKw7TDXrwkLLgYdx+mAXPp0r+i/wA775DfjMCpOAAAAABJRU5ErkJggg==";
        ox1 = -1;
        ox2 = 1;
      } else if(i == 5) {
        image = "data:image/png;base64,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";
        ox1 = -1;
        ox2 = 3;
      } else {
        image = "data:image/png;base64,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";
        ox1 = -3;
        ox2 = 3;
      }
      let ox1String = (ox1 > 0 ? "\\+?" : "") + ox1.toString();
      let ox2String = (ox2 > 0 ? "\\+?" : "") + ox2.toString();
      let answer = RegExp('^\\s*' + ox1String + ',?\\s*' + ox2String + '\\s*$');

      var description = (
        <React.Fragment>
          <p>Determine the oxidation states of the two carbon atoms indicated in the structure.</p>
          <p className="eqn"><img src={image} alt="structure"/></p>
          <p><i>Enter the oxidation states of atom 1, then atom 2 separated by a comma.</i></p>
        </React.Fragment>
      );

      var feedback = (
        <React.Fragment>
          <p>In an organic compound, each bond with an atom more electronegative than carbon
          (like oxygen and chlorine) pulls one unit of charge away from C, increasing
          the oxidation state of the carbon by one. If it is a double bond,
          the oxidation state increases by 2.</p>
          <p>A bond with another carbon does not affect the oxidation state.</p>
          <p>A bond with a less electronegative atom (like hydrogen) decreases the
          oxidation state of the carbon by 1.</p>
          <p>So, the first carbon has oxidation state {(ox1 > 0 ? "+" : "") + ox1.toString()} and
          the second one is {(ox2 > 0 ? "+" : "") + ox2.toString()}.</p>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: "",
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 327,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 27,
    "type": "MS",
    "questionBody": function() {
      let statements = [
        {text: (<p><i>E</i>&#176;<sub>cell</sub> = 0.04&nbsp;V.</p>),
        correct: false},
        {text: (<p><i>E</i>&#176;<sub>cell</sub> = &#8211;1.56&nbsp;V.</p>),
        correct: false},
        {text: (<p>When the cell operates, the mass of Zn(s) decreases.</p>),
        correct: true},
        {text: (<p>When the cell operates, the mass of Ag(s) decreases.</p>),
        correct: false},
        {text: (<p>When the cell operates, the concentration of Ag<sup>+</sup>(aq) increases.</p>),
        correct: false},
        {text: (<p>When the cell operates, the concentration of Zn<sup>2+</sup>(aq) increases.</p>),
        correct: true},
        {text: (<p>When the cell operates, anions are moving from anode to cathode.</p>),
        correct: false},
        {text: (<p>When the cell operates, electrons are moving from anode to cathode.</p>),
        correct: true},
        {text: (<p>Zn(s) | Zn<sup>2+</sup>(aq) is the anode for the spontaneous reaction.</p>),
        correct: true}
      ];
      var options = [];
      while (options.length < 5) {
        let i = Math.floor(Math.random()*statements.length);
        options.push(
          {text: statements[i].text, correct: statements[i].correct, id: options.length}
        );
        statements.splice(i, 1);
      }

      var description = (
        <React.Fragment>
          <p>Which of the following is/are correct about the cell designated below?</p>
          <p className="eqn">Zn(s) | Zn<sup>2+</sup>(aq) &#8214; Ag<sup>+</sup>(aq) | Ag(s)&#160;&#160;&#160;(1.0&nbsp;M solutions)</p>
        </React.Fragment>
      );

      const eqEcell = `\\begin{eqnarray*}
        E^{\\circ}_\\text{cell} & = & E^{\\circ}_\\text{cathode} - E^{\\circ}_\\text{anode} \\\\
        & = & E^{\\circ}_{\\text{Ag}^+/\\text{Ag}} - E^{\\circ}_{\\text{Zn}^{2+}/\\text{Zn}} \\\\
        & = & (0.80 \\text{ V}) - (-0.76 \\text{ V}) \\\\
        & = & 1.56 \\text{ V}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <p>In a cell diagram, the anode is always on the left. Thus, zinc is the anode,
          and silver is the cathode. The cell potential is</p>
          <MathJax.Provider>
            <MathJax.Node formula={eqEcell}/>
          </MathJax.Provider>
          <p>So, the reaction is spontaneous as written.</p>
          <p>Zinc, being the anode, is oxidized from Zn(s) to Zn<sup>2+</sup> and dissolved.
          Silver, being the cathode, is reduced from Ag<sup>+</sup> to Ag(s) and deposited.</p>
          <p>In general, electrons flow from anode to cathode in galvanic cells.
          Since this creates a deficit of negative charge at the anode, the negatively charged
          anions must flow from cathode to anode in order to compensate the charge deficit.
          Cations will flow in the opposite direction.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 328,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 28,
    "type": "numeric",
    "questionBody": function() {
      let eCellString = (Math.random()*(1.65 - 1.45) + 1.45).toPrecision(3);
      let eCell = Number.parseFloat(eCellString);
      let cAgString = (Math.random()*(0.0700 - 0.0300) + 0.0300).toPrecision(3);
      let cAg = Number.parseFloat(cAgString);
      let lnQ = -(eCell - 1.56)*2/0.0257;
      let lnQString = lnQ.toPrecision(3);
      let q = Math.exp(lnQ);
      let qString = q.toPrecision(3);
      let answer = q*Math.pow(cAg, 2);
      let ansString = answer.toPrecision(3);

      var description = (
        <React.Fragment>
          <p>Calculate [Zn<sup>2+</sup>] for the cell below, which is found to have
          a cell voltage of {eCellString}&nbsp;V at 25&nbsp;&#176;C, and for
          which [Ag<sup>+</sup>] is {cAgString}&nbsp;M.</p>
          <p className="eqn">Zn(s) | Zn<sup>2+</sup>(aq) &#8214; Ag<sup>+</sup>(aq) | Ag(s)</p>
        </React.Fragment>
      );

      const eqEcell = `\\begin{eqnarray*}
        E^{\\circ}_\\text{cell} & = & E^{\\circ}_\\text{cathode} - E^{\\circ}_\\text{anode} \\\\
        & = & E^{\\circ}_{\\text{Ag}^+/\\text{Ag}} - E^{\\circ}_{\\text{Zn}^{2+}/\\text{Zn}} \\\\
        & = & (0.80 \\text{ V}) - (-0.76 \\text{ V}) \\\\
        & = & 1.56 \\text{ V}
        \\end{eqnarray*}`;
      const eqNernst = `E_\\text{cell} = E^{\\circ}_\\text{cell} - \\frac{0.0257 \\text{ V}}{n}\\ln{Q},`;
      const eqQ = `Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Ag}^+]^2}`;
      const eqcZn = `\\begin{eqnarray*}
        ${eCellString} \\text{ V} & = & 1.56 \\text{ V}
        - \\frac{0.0257 \\text{ V}}{2}\\ln{\\left( \\frac{[\\text{Zn}^{2+}]}{(${cAgString})^2} \\right)} \\\\
        \\ln{\\left( \\frac{[\\text{Zn}^{2+}]}{(${cAgString})^2} \\right)} & = & ${lnQString} \\\\
        \\left( \\frac{[\\text{Zn}^{2+}]}{(${cAgString})^2} \\right) & = & e^{${lnQString}} = ${Number.parseFloat(qString)} \\\\
        [\\text{Zn}^{2+}] & = & ${ansString} \\text{ M}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The balanced overall reaction is</p>
            <p className="eqn">Zn(s) + 2 Ag<sup>+</sup>(aq) &#8594; Zn<sup>2+</sup>(aq) + 2 Ag(s)</p>
            <p>The standard cell potential (that is, when all concentrations are 1.0&nbsp;M)
            for this cell is</p>
            <MathJax.Node formula={eqEcell}/>
            <p>The cell potential under non-standard conditions is described by the
            Nernst equation:</p>
            <MathJax.Node formula={eqNernst}/>
            <p>where <i>n</i> is the number of electrons transferred and <i>Q</i> is
            the reaction quotient (solids are not included):</p>
            <MathJax.Node formula={eqQ}/>
            <p>Substitute all the data and solve for [Zn<sup>2+</sup>]:</p>
            <MathJax.Node formula={eqcZn}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment>[Zn<sup>2+</sup>]</React.Fragment>,
        units: "M"
      }, feedback};
    }()
  },
  {
    "_id": 329,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 29,
    "type": "MS",
    "questionBody": function() {
      let metals = [
        {name: "Na", dissolves: true},
        {name: "Fe", dissolves: true},
        {name: "Cu", dissolves: false},
        {name: "Hg", dissolves: false},
        {name: "Mg", dissolves: true},
        {name: "Cr", dissolves: true},
        {name: "Sn", dissolves: true},
        {name: "Ag", dissolves: false},
        {name: "Au", dissolves: false}
      ];
      let metalsSelected = [];
      let fb = [];
      while(metalsSelected.length < 4) {
        let i = Math.floor(Math.random()*metals.length);
        if (metals[i].dissolves) fb.push(metals[i].name);
        metalsSelected.push(metals[i]);
        metals.splice(i, 1);
      }

      var options = metalsSelected.map(metal => {
        return {text: (<p>{metal.name}</p>), correct: metal.dissolves, id: metalsSelected.indexOf(metal)};
      });

      var description = (
        <p>Which of the following metals would react with (or dissolve in) 1.0&nbsp;M HCl?</p>
      );

      var feedback = (
        <React.Fragment>
          <p>HCl dissociates into H<sup>+</sup> and Cl<sup>&#8211;</sup>. Only H<sup>+</sup> can
          be reduced and thus oxidize (dissolve) metals. Its standard reduction potential
          is 0.0&nbsp;V and, since it has to be the cathode, the anode (metal) has
          to have a negative reduction potential. Only in this case will the cell potential
          be greater than zero and the reaction will be spontaneous.</p>
          <p>{fb.length > 0 ? "The metals with negative reduction potentials are: " + fb.join(", ") + "." : ""}</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 330,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 30,
    "type": "MC",
    "questionBody": function() {
      var description = (
        <p>A 1.0&nbsp;M aqueous solution of CuBr<sub>2</sub> undergoes electrolysis
        in 1.0&nbsp;M HBr. Ignoring any effects related to overpotential, determine the
        product that will be formed at the anode.</p>
      );

      var options = [
        {text: (<p>Cu(s)</p>),
        correct: false,
        id: 0},
        {text: (<p>Br<sub>2</sub>(l)</p>),
        correct: true,
        id: 1},
        {text: (<p>O<sub>2</sub>(g)</p>),
        correct: false,
        id: 2},
        {text: (<p>H<sub>2</sub>(g)</p>),
        correct: false,
        id: 3},
        {text: (<p>Cu<sup>2+</sup>(aq)</p>),
        correct: false,
        id: 4}
      ];

      var feedback = (
        <React.Fragment>
          <p>When multiple product are possible during electrolysis,
          the one that is actually produced is determined by the principle
          of least effort: we want to have the least negative cell potential,
          which means that we will need to apply the least voltage to the cell
          to overcome it. In order to have the highest possible (least negative)
          cell potential, the anode should have the lowest possible reduction potential.</p>
          <p>So, let us list all the things in the solution that can be oxidized,
          together with the corresponding reduction potentials:</p>
          <ul>
            <li>Br<sup>&#8211;</sup>, <i>E</i>&#176;<sub>Br<sub>2</sub>/Br<sup>&#8211;</sup></sub> = 1.07&nbsp;V</li>
            <li>H<sub>2</sub>O, <i>E</i>&#176;<sub>O<sub>2</sub>/H<sub>2</sub>O</sub> = 1.23&nbsp;V</li>
          </ul>
          <p>Therefore, Br<sup>&#8211;</sup> will be oxidized to Br<sub>2</sub>(l) (the product) at the anode.</p>
          <p>Note that we have acidic conditions (due to the HBr in the solution).
          Also note that both Cu<sup>2+</sup> and H<sup>+</sup> are
          in their most oxidized forms, so they cannot be oxidized any further. The
          Cu(s) and H<sub>2</sub>(g) listed in the options are the products of
          reduction, not oxidation.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 331,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 31,
    "type": "numeric",
    "questionBody": function() {
      let iString = (Math.random()*(1.90 - 1.00) + 1.00).toPrecision(3);
      let i = Number.parseFloat(iString);
      let mCrString = (Math.random()*(9.00 - 2.00) + 2.00).toPrecision(3);
      let mCr = Number.parseFloat(mCrString);
      let molCr = mCr/52.00;
      let molCrString = molCr.toPrecision(3);
      let molEl = molCr*3;
      let molElString = molEl.toPrecision(3);
      let tSec = molEl*96485/i;
      let tSecString = tSec.toPrecision(3);
      let answer = tSec/3600;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>A solution of CrCl<sub>3</sub> is electrolyzed using a current of {iString}&nbsp;amperes.
        How long will it take to deposit {mCrString}&nbsp;g of Cr at the cathode?</p>
      );

      const eqF = `I t = n_e F`;
      const eqMol = `\\begin{eqnarray}
        n_\\text{Cr} & = & \\frac{${mCrString} \\text{ g}}{52.00 \\text{g mol}^{-1}} \\\\
        & = & ${molCrString} \\text{ mol}
        \\end{eqnarray}`;
      const eqMolEl = `\\begin{eqnarray}
        n_e & = & \\frac{${molCrString} \\text{ mol} \\times 3}{1} \\\\
        & = & ${molElString} \\text{ mol}
        \\end{eqnarray}`;
      const eqTime = `\\begin{eqnarray}
        (${iString} \\text{ A})t & = & (${molElString} \\text{ mol})(96485 \\text{ C mol}^{-1}) \\\\
        t & = & ${Number.parseFloat(tSecString)} \\text{ s} \\\\
        & = & ${ansString} \\text{ hr}
        \\end{eqnarray}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>During the electrolysis, chromium will be reduced at the cathode:</p>
            <p className="eqn">Cr<sup>3+</sup>(aq) + 3 <i>e</i><sup>&#8211;</sup> &#8594; Cr(s)</p>
            <p>The number of moles of Cr to be deposited is</p>
            <MathJax.Node formula={eqMol}/>
            <p>To calculate for how long the solution has to be electrolyzed,
            use Faraday&#8217;s First Law of Electrolysis:</p>
            <MathJax.Node formula={eqF}/>
            <p>The stoichiometric ratio between moles of chromium and moles of electrons
            is 1:3, so, the number of moles of electrons is</p>
            <MathJax.Node formula={eqMolEl}/>
            <p>Substitute all the data into the Faraday&#8217;s First Law and solve
            for <i>t</i>:</p>
          <MathJax.Node formula={eqTime}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>t</i></React.Fragment>,
        units: "hr"
      }, feedback};
    }()
  },
  {
    "_id": 332,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 4,
    "idInExam": 32,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>The lead acid battery involves the following reactions:</p>
          <table className="mb-3 ml-3 text-left">
            <tbody>
              <tr>
                <td>Pb(s) + SO<sub>4</sub><sup>2&#8211;</sup>(aq) &#8594; PbSO<sub>4</sub>(s) + 2 <i>e</i><sup>&#8211;</sup></td>
                <td className="pl-3"><i>E</i>&#176;<sub>ox</sub> = +0.31&nbsp;V</td>
              </tr>
              <tr>
                <td>PbO<sub>2</sub>(s) + 4 H<sup>+</sup>(aq) + SO<sub>4</sub><sup>2&#8211;</sup>(aq) + 2 <i>e</i><sup>&#8211;</sup> &#8594;
                  PbSO<sub>4</sub>(s) + 2 H<sub>2</sub>O(l)</td>
                <td className="pl-3"><i>E</i>&#176;<sub>red</sub> = +1.70&nbsp;V</td>
              </tr>
            </tbody>
          </table>
          <p>Which of the following statements is/are correct?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>Discharging of the battery involves the oxidation of Pb(s).</p>),
        correct: true,
        id: 0},
        {text: (<p>The pH of the liquid decreases as the battery is discharged.</p>),
        correct: false,
        id: 1},
        {text: (<p>Recharging of the battery involves the disproportionation of Pb<sup>2+</sup>.</p>),
        correct: true,
        id: 2},
        {text: (<p>The battery is dead only when all Pb(s) is exhausted.</p>),
        correct: false,
        id: 3}
      ];

      var feedback = (
        <React.Fragment>
          <p>The reactions as written have a positive cell potential and represent
          a galvanic cell (that is, the discharge of the battery). So, Pb(s) is
          indeed oxidized during discharge. H<sup>+</sup> is being consumed during
          discharge, so the solution becomes less acidic, and its pH increases.</p>
          <p>The battery becomes dead when its cell potential reaches zero. This is not
          necessarily when all Pb(s) is consumed. For example, consuming virtually all
          H<sub>2</sub>SO<sub>4</sub> will also make the cell ponetial zero.</p>
          <p>When recharging the battery, the reactions are reversed.
          Pb<sup>2+</sup> from PbSO<sub>4</sub> is reduced and oxidized at the same time,
          i.e. it disproportionates.</p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 333,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 33,
    "type": "string",
    "questionBody": function() {
      let orderQ = Math.floor(Math.random()*3);
      let orderP = Math.floor(Math.random()*3);
      let orderR = Math.floor(Math.random()*3);
      let cQ1 = 0.45;
      let cQ2 = cQ1*4;
      let cQ3 = cQ1;
      let cQ4 = cQ1*8;
      let cP1 = 0.20;
      let cP2 = cP1;
      let cP3 = cP1*4;
      let cP4 = cP1*6;
      let cR1 = 0.25;
      let cR2 = cR1;
      let cR3 = cR1;
      let cR4 = cR1*2;
      let rate1 = 5.0e-6;
      let rate2 = rate1*Math.pow(4, orderQ);
      let rate3 = rate1*Math.pow(4, orderP);
      let rate4 = rate1*Math.pow(8, orderQ)*Math.pow(6, orderP)*Math.pow(2, orderR);
      let rate1String = rate1.toPrecision(2);
      let rate2String = rate2.toPrecision(2);
      let rate3String = rate3.toPrecision(2);
      let rate4String = rate4.toPrecision(2);
      let answer = RegExp('^\\s*' + orderQ.toString() + ',?\\s*' + orderP.toString() + ',?\\s*' + orderR.toString() + '\\s*$');

      var description = (
        <React.Fragment>
          <p>Using the kinetic data below, find the orders for each of reactants
          P, Q, and R. All runs were performed under identical conditions.</p>
        <p className="eqn">Q + P + R &#8594; Products</p>
          <table className="data-table mb-5">
            <tbody>
              <tr>
                <th>Run</th>
                <th>Initial [Q]</th>
                <th>Initial [P]</th>
                <th>Initial [R]</th>
                <th>Initial Rate (M<sup>&#8211;1</sup>&nbsp;s<sup>&#8211;1</sup>)</th>
              </tr>
              <tr>
                <td>1</td>
                <td>{cQ1.toPrecision(2)}</td>
                <td>{cP1.toPrecision(2)}</td>
                <td>{cR1.toPrecision(2)}</td>
                <td>{rate1String}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{cQ2.toPrecision(2)}</td>
                <td>{cP2.toPrecision(2)}</td>
                <td>{cR2.toPrecision(2)}</td>
                <td>{rate2String}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{cQ3.toPrecision(2)}</td>
                <td>{cP3.toPrecision(2)}</td>
                <td>{cR3.toPrecision(2)}</td>
                <td>{rate3String}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{cQ4.toPrecision(2)}</td>
                <td>{cP4.toPrecision(2)}</td>
                <td>{cR4.toPrecision(2)}</td>
                <td>{rate4String}</td>
              </tr>
            </tbody>
          </table>
          <p><i>Enter the orders for X, Y, Z separated by commas.</i></p>
        </React.Fragment>
      );

      const eqRate = `Rate = k [\\text{Q}]^q [\\text{P}]^p [\\text{R}]^r`;
      const eqQ = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{Q}]_2}{[\\text{Q}]_1} \\Big)^q & = & \\frac{Rate_2}{Rate_1} \\\\
        \\Big( \\frac{${cQ2.toPrecision(2)}}{${cQ1.toPrecision(2)}} \\Big)^q & = & \\frac{${rate2String}}{${rate1String}} \\\\
        ( ${(cQ2/cQ1).toPrecision(2)} )^q & = & ${(rate2/rate1).toPrecision(2)} \\\\
        q & = & ${orderQ}
        \\end{eqnarray*}`;
      const eqP = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{P}]_3}{[\\text{P}]_1} \\Big)^p & = & \\frac{Rate_3}{Rate_1} \\\\
        \\Big( \\frac{${cP3.toPrecision(2)}}{${cP1.toPrecision(2)}} \\Big)^p & = & \\frac{${rate3String}}{${rate1String}} \\\\
        ( ${(cP3/cP1).toPrecision(2)} )^p & = & ${(rate3/rate1).toPrecision(2)} \\\\
        p & = & ${orderP}
        \\end{eqnarray*}`;
      const eqR = `\\begin{eqnarray*}
        \\Big( \\frac{[\\text{Q}]_4}{[\\text{Q}]_1} \\Big)^q \\Big( \\frac{[\\text{P}]_4}{[\\text{P}]_1} \\Big)^p
        \\Big( \\frac{[\\text{R}]_4}{[\\text{R}]_1} \\Big)^r & = & \\frac{Rate_4}{Rate_1} \\\\
        \\Big( \\frac{${cQ4.toPrecision(2)}}{${cQ1.toPrecision(2)}} \\Big)^${orderQ}
        \\Big( \\frac{${cP4.toPrecision(2)}}{${cP1.toPrecision(2)}} \\Big)^${orderP}
        \\Big( \\frac{${cR4.toPrecision(2)}}{${cR1.toPrecision(2)}} \\Big)^r
        & = & \\frac{${rate4String}}{${rate1String}} \\\\
        (${(Math.round(Math.pow(cQ4/cQ1, orderQ)*Math.pow(cP4/cP1, orderP)))})(${(cR4/cR1).toPrecision(2)})^r
        & = & ${(rate4/rate1).toPrecision(2)} \\\\
        r & = & ${orderR}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The rate law for this reaction is</p>
            <MathJax.Node formula={eqRate}/>
            <p>To find <i>q</i>, the order of the reaction for Q, consider
            the first two runs: the concentrations of P and R are kept constant,
            so, the only thing that affects the initial rate is the change of
            concentration of Q:</p>
            <MathJax.Node formula={eqQ}/>
            <p>Similarly, in runs 1 and 3, the concentrations of Q and R are kept
            constant, so, we can use these runs to find the order for P:</p>
            <MathJax.Node formula={eqP}/>
            <p>There are no two runs with the concentrations of Q and P kept
            constant, but this is fine since we already know the order of the reaction for
            Q and P. We can use any two runs to find <i>r</i>:</p>
            <MathJax.Node formula={eqR}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment>orders</React.Fragment>),
        units: ""
      }, feedback};
    }()
  },
  {
    "_id": 335,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 35,
    "type": "numeric",
    "questionBody": function() {
      let mIString = (Math.random()*(19.5 - 5.00) + 5.00).toPrecision(3);
      let mI = Number.parseFloat(mIString);
      let nTString = (Math.random()*(6.00 - 1.50) + 1.50).toPrecision(3);
      let nT = Number.parseFloat(nTString);
      let k = Math.log(2)/271.79;
      let kString = k.toPrecision(5);
      let t = nT*271.79;
      let tString = Math.round(t);
      let lnM = -k*t + Math.log(mI);
      let lnMString = lnM.toPrecision(3);
      let m = Math.exp(lnM);
      let mString = m.toPrecision(3);
      let answer = mI - m;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>The half-life of <sup>57</sup>Co is 271.79&nbsp;days. A {mIString}&nbsp;g sample
        of <sup>57</sup>Co undergoes radioactive decay for {nTString}&nbsp;half-lives.
        What mass of <sup>57</sup>Co has decayed?</p>
      );

      const eqK = `\\begin{eqnarray*}
        k & = & \\frac{\\ln{2}}{t_{1/2}} \\\\
        & = & \\frac{\\ln{2}}{${271.79} \\text{ days}} \\\\
        & = & ${kString} \\text{ day}^{-1}
        \\end{eqnarray*}`;
      const eqT = `\\begin{eqnarray*}
        t & = & ${nTString}t_{1/2} \\\\
        & = & ${tString} \\text{ days}
        \\end{eqnarray*}`;
      const eqRemain = `\\begin{eqnarray*}
        \\ln{m_t(^{57}Cr)} & = & -kt + \\ln{m_{\\circ}(^{57}Cr)} \\\\
        & = & -(${kString} \\text{ day}^{-1})(${tString} \\text{ days}) + \\ln{(${mIString} \\text{ g})} \\\\
        & = & ${lnMString} \\\\
        m_t(^{57}Cr) & = & e^{${lnMString}} = ${mString} \\text{ g}
        \\end{eqnarray*}`;
      const eqDec = `\\begin{eqnarray*}
        m_{\\text{decayed}}(^{57}Cr) & = & ${mIString} \\text{ g} - ${mString} \\text{ g} \\\\
        & = & ${ansString} \\text{ g}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>Radioactive decay is a first-order reaction. The specific rate
            constant for it is</p>
            <MathJax.Node formula={eqK}/>
            <p>The amount of time for which the sample had been decaying is</p>
            <MathJax.Node formula={eqT}/>
            <p>The mass of <sup>57</sup>Co remaining can be found from the integrated
            rate law (remember that masses can be used instead of concentrations
            for first-order reactions):</p>
            <MathJax.Node formula={eqRemain}/>
            <p>The mass decayed is just the difference between the initial mass
            and the remaining mass:</p>
          <MathJax.Node formula={eqDec}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>m</i><sub>decayed</sub>(<sup>57</sup>Co)</React.Fragment>),
        units: "g"
      }, feedback};
    }()
  },
  {
    "_id": 336,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 36,
    "type": "MC",
    "questionBody": function() {
      let orders = [
        {order: 0,
        name: "zero",
        image: "data:image/png;base64,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",
        fb: "For a zeroth-order reaction, the plot of concentration versus time should be linear. And since A is being used, its concentration must decrease."},
        {order: 1,
        name: "first",
        image: "data:image/png;base64,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",
        fb: "For a first-order reaction, the plot of the logarithm of the concentration versus time should be linear."},
        {order: 2,
        name: "second",
        image: "data:image/png;base64,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",
        fb: "For a second-order reaction, the plot of the inverse concentration (1/[A]) versus time should be linear. Since A is being used, [A] must decrease, but the inverse must increase."}
      ];
      let idx = Math.floor(Math.random()*3);

      var description = (
        <p>For the reaction A &#8594; Products, which of these plots
          represents {orders[idx].name}-order kinetics?</p>
      );

      var options = orders.map(order => {
        return {
          text: (<p m-3><img src={order.image} alt="plot"/></p>),
          correct: order.order === idx,
          id: order.order
        };
      }).concat([
        {
          text: (<p m-3><img src="data:image/png;base64,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"
          alt="plot"/></p>),
          correct: false,
          id: 3
        },
        {
          text: (<p m-3><img src="data:image/png;base64,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"
          alt="plot"/></p>),
          correct: false,
          id: 4
        }
      ]);

      var feedback = (
        <React.Fragment>
          <p>{orders[idx].fb} Therefore, the only correct plot is</p>
          <p className="eqn"><img src={orders[idx].image} alt="correct plot"/></p>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  },
  {
    "_id": 337,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 37,
    "type": "MS",
    "questionBody": function() {
      let order, fb;
      let i = Math.floor(Math.random()*3);
      if (i === 0) {
        order = "zero";
        fb = (<React.Fragment>For a zero-order reaction, <i>Rate</i> = <i>k</i>[A]<sup>0</sup> = <i>k</i>.
              That is, the rate of the reaction is independent of the initial concentration of A.</React.Fragment>);
      } else if (i === 1) {
        order = "first";
        fb = (<React.Fragment>For a first-order reaction, <i>Rate</i> = <i>k</i>[A].
              That is, the rate of the reaction is directly proportional to the initial
              concentration of A. If [A]<sub>0</sub> is doubled, the rate is doubled too.
              If [A]<sub>0</sub> is increased by a factor of five, the rate increases by
              a factor of five too and so on.</React.Fragment>);
      } else {
        order = "second";
        fb = (<React.Fragment>For a second-order reaction, <i>Rate</i> = <i>k</i>[A]<sup>2</sup>.
              That is, the rate of the reaction is proportional to the square of the initial
              concentration of A. If [A]<sub>0</sub> is doubled, the rate increases by
              a factor of four.</React.Fragment>);
      }

      var options = [
        {text: (<p>half as great as when [A]<sub>0</sub> = 1.0&nbsp;M.</p>), correct: i === 1, id: 0},
        {text: (<p>five times as great as when [A]<sub>0</sub> = 0.10&nbsp;M.</p>), correct: i === 1, id: 1},
        {text: (<p>ten times as great as when [A]<sub>0</sub> = 0.050&nbsp;M.</p>), correct: i === 1, id: 2},
        {text: (<p>four times as great as when [A]<sub>0</sub> = 0.25&nbsp;M.</p>), correct: i === 2, id: 3},
        {text: (<p>the same as the initial rate for any other value of [A]<sub>0</sub>.</p>), correct: i === 0, id: 4}
      ];

      var description = (
        <p>The decomposition of substance A is {order} order for the reaction
        A &#8594; Products. When [A]<sub>0</sub> = 0.50&nbsp;M, the initial rate
        of decomposition of A is...</p>
      );

      var feedback = (<p>{fb}</p>);

      return {description, options, feedback};
    }()
  },
  {
    "_id": 338,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 38,
    "type": "numeric",
    "questionBody": function() {
      let factor = Math.floor(Math.random()*(9 - 3) + 3);
      let t1 = Math.floor(Math.random()*(48 - 30) + 30);
      let t2 = Math.floor(Math.random()*(70 - 52) + 52);
      let eJ = Math.log(factor)*8.314/(1.0/(273.15 + t1) - 1.0/(273.15 + t2));
      let eJString = eJ.toPrecision(3);
      let answer = eJ/1000;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>For a certain reaction, the rate of the reaction increases by a factor
        of {factor} when the temperature is increased from {t1}&nbsp;&#176;C
        to {t2}&nbsp;&#176;C. What is the activation energy, in kJ&nbsp;mol<sup>&#8211;1</sup>,
        of the reaction?</p>
      );

      const eqK = `\\begin{eqnarray*}
        \\ln{\\left( \\frac{Rate_2}{Rate_1} \\right)} & = & \\ln{\\left( \\frac{k_2}{k_1} \\right)} \\\\
        & = & \\frac{E_\\text{a}}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)
        \\end{eqnarray*}`;
      const eqEa = `\\begin{eqnarray*}
        \\ln{(${factor})} & = & \\frac{E_\\text{a}}{8.314 \\text{ J mol}^{-1}\\text{K}^{-1}}
        \\left( \\frac{1}{${273.15 + t1} \\text{ K}} - \\frac{1}{${273.15 + t2} \\text{ K}} \\right) \\\\
        E_\\text{a} & = & ${Number.parseFloat(eJString)} \\text{ J mol}^{-1} \\\\
        & = & ${ansString} \\text{ kJ mol}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The dependence of the rate of a reaction on temperature is described by
            the following equation:</p>
            <MathJax.Node formula={eqK}/>
            <p>Substitute all the data, remember to convert the temperatures to Kelvins.
            Solve for <i>E</i><sub>a</sub>.</p>
            <MathJax.Node formula={eqEa}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: <React.Fragment><i>E</i><sub>a</sub></React.Fragment>,
        units: "kJ/mol"
      }, feedback};
    }()
  },
  {
    "_id": 339,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 39,
    "type": "MC",
    "questionBody": function() {
      let quantities = [
        {name: (<React.Fragment>activation energy of the rate-determining step for the overall reaction</React.Fragment>),
        fb: (<React.Fragment>The rate-determining step is the one with the largest difference between
              a minimum (reactant or intermediate) and a maximum (the transition state) next to it.
              In this reaction, the first step is rate determining, labelled I.</React.Fragment>),
        n: 1},
        {name: (<React.Fragment>activation energy of the fast (not rate-determining) step for the overall reaction</React.Fragment>),
        fb: (<React.Fragment>The rate-determining step is the one with the largest difference between
              a minimum (reactant or intermediate) and a maximum (the transition state) next to it.
              In this reaction, the first step is rate determining, and the second step is fast,
              so, its activation energy is III.</React.Fragment>),
        n: 3},
        {name: (<React.Fragment>enthalpy change, &#916;<i>H</i>, for the overall reaction</React.Fragment>),
        fb: (<React.Fragment>The enthalpy of a reaction is the difference between the energy
          of the products and the energy of the reactants, it is labelled V.</React.Fragment>),
        n: 5}
      ];
      let i = Math.floor(Math.random()*quantities.length);

      var description = (
        <React.Fragment>
          <p>The conversion of S to P follows the reaction coordinate below. Which of
          the indicated energies most likely represents the {quantities[i].name}?</p>
          <p className="eqn"><img src="data:image/png;base64,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" alt="reaction coordinate"/></p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>I</p>), correct: quantities[i].n === 1, id: 0},
        {text: (<p>II</p>), correct: quantities[i].n === 2, id: 1},
        {text: (<p>III</p>), correct: quantities[i].n === 3, id: 2},
        {text: (<p>IV</p>), correct: quantities[i].n === 4, id: 3},
        {text: (<p>V</p>), correct: quantities[i].n === 5, id: 4},
        {text: (<p>VI</p>), correct: quantities[i].n === 6, id: 5}
      ];

      var feedback = (<p>{quantities[i].fb}</p>);

      return {description, options, feedback};
    }()
  },
  {
    "_id": 340,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 40,
    "type": "MS",
    "questionBody": function() {
      var description = (
        <React.Fragment>
          <p>For the reaction:</p>
          <p className="eqn">CHCl<sub>3</sub> + Cl<sub>2</sub> &#8594; CCl<sub>4</sub> + HCl</p>
          <p>The mechanism is:</p>
          <table className="data-table ml-3 mb-3">
            <tbody>
              <tr>
                <td className="text-left">Step 1:</td>
                <td className="text-left">Cl<sub>2</sub> &#8644; 2 Cl</td>
                <td className="text-left">(fast equilibrium)</td>
              </tr>
              <tr>
                <td className="text-left">Step 2:</td>
                <td className="text-left">CHCl<sub>3</sub> + Cl &#8594; CCl<sub>3</sub> + HCl</td>
                <td className="text-left">(slow)</td>
              </tr>
              <tr>
                <td className="text-left">Step 3:</td>
                <td className="text-left">CCl<sub>3</sub> + Cl &#8594; CCl<sub>4</sub></td>
                <td className="text-left">(fast)</td>
              </tr>
            </tbody>
          </table>
          <p>Which of the following statements is/are correct for this proposed mechanism?</p>
        </React.Fragment>
      );

      var options = [
        {text: (<p>The overall reaction would be first order with respect to each of CHCl<sub>3</sub> and Cl<sub>2</sub>.</p>),
        correct: false,
        id: 0},
        {text: (<p>The overall total order of the reaction would be 1.5.</p>),
        correct: true,
        id: 1},
        {text: (<p>If the concentration of CHCl<sub>3</sub> is tripled, the rate will triple.</p>),
        correct: true,
        id: 2},
        {text: (<p>If the concentration of Cl<sub>2</sub>. is doubled, the rate will decrease by 1/2.</p>),
        correct: false,
        id: 3}
      ];

      const eqCl = `\\begin{eqnarray*}
        K_1 & = & \\frac{[\\text{Cl}]^2}{[\\text{Cl}_2]} \\\\
        [\\text{Cl}] & = & \\sqrt{K_1 [\\text{Cl}_2]}
        \\end{eqnarray*}`;
      const eqRate = `\\begin{eqnarray*}
        Rate & = & k_2[\\text{CHCl}_3]\\sqrt{K_1 [\\text{Cl}_2]} \\\\
        & = & k [\\text{CHCl}_3] [\\text{Cl}_2]^{0.5}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>The rate of the overall reaction is determined by the rate of the slow step:</p>
            <MathJax.Node formula={"Rate = k_2[\\text{CHCl}_3][\\text{Cl}]"}/>
            <p>However, this rate law contains the concentration of Cl, which is
            an intermediate (it does not appear in the overall equation and is not
            a catalyst). The concentration of Cl has to be expressed from the previous
            step so that only stable species (reactants, products, or catalysts)
            appear in the rate law. Step 1 is an equilibrium, so we can write the
            equilibrium constant expression for it and find [Cl]:</p>
            <MathJax.Node formula={eqCl}/>
            <p>Substitute this [Cl] into the above rate law, simplify, and
            absorb the constants (i.e. a product of constants is just another constant):</p>
            <MathJax.Node formula={eqRate}/>
            <p>From this rate law, we can see that the reaction is first order with respect to
            CHCl<sub>3</sub> and 0.5 order with respect to Cl<sub>2</sub>. The overall total order is
            therefore 1.5.</p>
            <p>The rate of the reaction is directly proportional to [CHCl<sub>3</sub>], so,
            if its concentration is tripled, the reaction rate will triple too.</p>
            <p>Since the rate of the reaction is proportional to the square root of [Cl<sub>2</sub>],
            doubling [Cl<sub>2</sub>] will lead to the rate increasing by a factor of &#8730;2.</p>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, options, feedback};
    }()
  }
];
