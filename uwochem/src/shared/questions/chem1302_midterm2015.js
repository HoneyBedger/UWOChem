import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const questions = [
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
          <p>The rms speed is inversely proportional to the <i>square root</i> of molar mass. So,
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
          <p className="eqn">N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) &#8644; 2 NH<sub>3</sub>(g)</p>
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
                <td><p className="eqn">1/2 N<sub>2</sub>(g) + 1/2 O<sub>2</sub> &#8644; NO(g)</p></td>
                <td style={{paddingLeft: "20px"}}><p><i>K</i><sub>1</sub> = {k1String}</p></td>
              </tr>
              <tr>
                <td><p className="eqn">2 NO<sub>2</sub>(g) &#8644; 2 NO(g) + O<sub>2</sub>(g)</p></td>
                <td style={{paddingLeft: "20px"}}><p><i>K</i><sub>2</sub> = {k2String}</p></td>
              </tr>
            </tbody>
          </table>
          <p>Calculate <i>K</i> for the reaction</p>
          <p className="eqn">2 NO<sub>2</sub>(g) &#8644; N<sub>2</sub>(g) + 2 O<sub>2</sub>(g)</p>
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
          <p className="eqn">N<sub>2</sub>O<sub>4</sub>(g) &#8644; 2 NO<sub>2</sub>(g)</p>
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
                  <th>&#8644;</th>
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
          <p className="eqn">CO(g) + 2 H<sub>2</sub>(g) &#8644; CH<sub>3</sub>OH(g)</p>
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
  }
];
