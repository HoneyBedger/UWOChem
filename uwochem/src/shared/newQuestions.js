import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const newQuestions = [
  {
    "id": 0,
    "courseId": "1302",
    "exam": "Midterm 2014",
    "chapter": 1,
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
          label: "m",
          units: "g"
        }, feedback};

    }()
  },
  {
      "id": 1,
      "courseId": "1302",
      "exam": "Midterm 2014",
      "chapter": 1,
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
            answer,
            label: "x",
            units: ""
          }, feedback};
      }()
  },
  {
    "id": 2,
    "courseId": "1302",
    "exam": "Midterm 2014",
    "chapter": 1,
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

      return {description,
        answer: {
          answer,
          label: "d",
          units: "g/L"
        }, feedback};
    }()
  },
  {
    "id": 3,
    "courseId": "1302",
    "exam": "Midterm 2014",
    "chapter": 1,
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

      return {description,
        answer: {
          answer,
          label: (<React.Fragment>m<sub>CS<sub>2</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "id": 4,
    "courseId": "1302",
    "exam": "Midterm 2014",
    "chapter": 1,
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
          label: "m",
          units: "g"
        }, feedback};
    }()
  },
  {
    "id": 5,
    "courseId": "1302",
    "exam": "Midterm 2014",
    "chapter": 1,
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
          label: (<React.Fragment>P<sub>B</sub></React.Fragment>),
          units: "kPa"
        }, feedback};
    }()
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    "id": 10,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 1,
    "type": "numeric",
    "question": function () {
      let vString = (Math.random()*(30.0 - 20.0) + 20.0).toPrecision(3);
      let v = Number.parseFloat(vString);
      let molString = (Math.random()*(9.00 - 2.00) + 2.00).toPrecision(3);
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
          label: (<React.Fragment>mol<sub>N<sub>2</sub></sub></React.Fragment>),
          units: "mol"
        }, feedback};
    }()
  },
  {
    "id": 11,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 2,
    "type": "numeric",
    "question": function() {
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
            <p>Combined Boyle's and Charles's law allows to do calculations
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
          label: (<React.Fragment>V<sub>f</sub>/V<sub>f</sub></React.Fragment>),
          units: ""
        }, feedback};
    }()
  },
  {
    "id": 12,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 3,
    "type": "numeric",
    "question": function () {
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
            (28&nbsp;g&nbsp;mol<sup>-1</sup>) and SF<sub>6</sub>(g)
            (146.07&nbsp;g&nbsp;mol<sup>-1</sup>) has a density of {dString}&nbsp;g&nbsp;L<sup>-1</sup> at
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
          label: (<React.Fragment>P<sub>N<sub>2</sub></sub></React.Fragment>),
          units: "kPa"
        }, feedback};
    }()
  },
  {
    "id": 13,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 4,
    "type": "numeric",
    "question": function() {
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
          label: (<React.Fragment>m<sub>C<sub>3</sub>H<sub>8</sub></sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "id": 14,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 5,
    "type": "numeric",
    "question": function() {
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
          label: (<React.Fragment>m<sub>H<sub>2</sub>O</sub></React.Fragment>),
          units: "g"
        }, feedback};
    }()
  },
  {
    "id": 15,
    "courseId": "1302",
    "exam": "Midterm 2015",
    "chapter": 1,
    "idInExam": 6,
    "type": "numeric",
    "question": function() {
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
          label: "P",
          units: "atm"
        }, feedback};
    }()
  }
];
