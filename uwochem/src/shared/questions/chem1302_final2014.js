import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const questions = [
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
                  <th>&#8644;</th>
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
                  <th>&#8644;</th>
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
                  <th>&#8644;</th>
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
                  <th>&#8644;</th>
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
                  <th>&#8644;</th>
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
            <p className="eqn">H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> &#8644; H<sup>+</sup> + HPO<sub>4</sub><sup>2&#8211;</sup></p>
            <p>This equilibrium corresponds to <i>K</i><sub>a2</sub> of H<sub>3</sub>PO<sub>4</sub>.</p>
            <p>And as a base:</p>
            <p className="eqn">H<sub>2</sub>PO<sub>4</sub><sup>&#8211;</sup> + H<sub>2</sub>O &#8644; H<sub>3</sub>PO<sub>4</sub> + OH<sup>&#8211;</sup></p>
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
                  <th>&#8644;</th>
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
                  <th>&#8644;</th>
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
          <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>2</sub>Cl</p>
          <p>The hydrogens are already balanced, so we just add electrons to the right hand side:</p>
          <p className="eqn">N<sub>2</sub>H<sub>4</sub> + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>2</sub>Cl + 2 <i>e</i><sup>&#8211;</sup></p>
          <p>Both half-reactions have 2 electrons involved, so we do not need to multiply any of them
          before adding together:</p>
          <p className="eqn">2 N<sub>2</sub>H<sub>4</sub> + 2 H<sub>2</sub>O + 2 Cl<sup>&#8211;</sup> &#8594; 2 NH<sub>3</sub> + 2 NH<sub>2</sub>Cl + 2 OH<sup>&#8211;</sup></p>
          <p>But now we notice that all the coefficients can be divided by 2:</p>
          <p className="eqn">N<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O + Cl<sup>&#8211;</sup> &#8594; NH<sub>3</sub> + NH<sub>2</sub>Cl + OH<sup>&#8211;</sup></p>
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
          image: "data:image/png;base64,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",
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
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAC1CAYAAAATDxD7AAAIY0lEQVR4Xu2dL7MdRRBHf5HRIJA4cBSOKjDwAUBGJAoEOgYElUCSQoCJjgCViEj4AKhQhcLnOxAdGWqo3crm8u57uzvTO9PdB8WfnZ7p032Ye2/nvXtNfv76XtI9P8flpBEJXHOU1CtJns7rCC1HXUvAUwMizNqq8pwZAYQxQ0vgiAQQJmJVycmMAMKYoSVwRAIIE7Gq5GRGAGHM0BI4IgGEiVhVcjIjgDBmaAkckQDCRKwqOZkRQBgztASOSABhIlaVnMwIIIwZWgJHJIAwEatKTmYEEMYMLYEjEkCYiFUlJzMCCGOGlsARCSBMxKqSkxkBhDFDS+CIBBAmYlXJyYwAwpihJXBEAggTsarkZEYAYczQEjgiAYSJWFVyMiOAMGZoCRyRAMJErCo5mRFAGDO0BI5IAGEiVpWczAggjBlaAkckgDARq0pOZgQQxgwtgSMSQJiIVSUnMwIIY4aWwBEJIEzEqpKTGQGEMUNL4IgEECZiVcnJjADCmKElcEQCCBOxquRkRgBhzNASOCIBhIlYVXIyI4AwZmgJHJEAwkSsKjmZEUAYM7QEjkgAYSJWlZzMCCCMGVoCRySAMBGrSk5mBBDGDC2BIxJAmIhVJSczAghjhpbAEQl4E+YLSb9HLAQ5+SDgTZgiyz+SvvKBl1NGI+BNmHLeLyX9LKncNn9GKwj5jE3AozCF6FuSfpuE+XZsxJwuEgGvwsw1+Ga6ccpt8zxSYchlTALehSlU35tum1+nl2pjkuZUIQhEEGYuxE+SPp7e27wIUR2SGI5AJGEK3CJMeW9TXqqVG4e/INCUQDRhZji/SHp7um2aAiNYbgJRhSlV/Xy6bRh25u7xptlHFmYGVV6iMexs2jZ5g2UQplSXYWfeHm+aeRZhCjSGnU1bJ2ewTMLMFWbYmbPXm2SdUZgCjmFnk/bJFySrMHOlGXbm6/mqjLMLw7Czqn3yLUaY1zVn2Jmv/zdnjDBvImPYubmFci1AmIvrzbAzlwers0WY86gYdq5uozwPIszltWbYmceFVZkizCpM//24QLlx+MnOdbzCPoUw60vLsHM9q7BPIsz20jLs3M4szAqE2VdKfrJzHzf3qxCmroQMO+v4uVuNMPUlY9hZz9BNBIRpVyqGne1YDhsJYdqWhmFnW57DRUOY9iVh2Nme6TARtwpzR9L96fSPJN2W9HL655uSHk9//8niF4Vfl/RQ0tfTf7sr6cEOAq8kbT3vjm2aLWHY2QzlOIG2NuA5YS6TIqswpcoMO8fp9SYn2SvM8gYpBylziWeSyq3z7uLGWf7K1vmZLDfMskAMO5u0a/8grYSZb54i0mfTy7ZzUmUUZv6fCr/Gtn/PV52ghTDlTe6Txa3y/nTbnIqR+YZZFolhZ1XL9l3cQphTEU4Fml+WIczrWjPs7Nv3u3dvIczyg4DTg9xa3D4I8/8yMezc3bp9FtYKUz4FeirpgzPHX370jDAXQ2LY2af3d+1aK8w8ezl9vzK/LHtH0o3p6/QQ5nyJGHbuat/jF9UI8/diIHn6iVjJZH6pNr8sQ5ir68uw82pGXZ+oEWbrV34jzLpSM+xcx6nLU3uFKYc9/aMx5xLIPOmvKSrDzhp6RmsRxghso7D8ZGcjkK3CbBWm1b574nj7w5d7cjy3hmFnS5oVsRCmAt7BSxl2Hgz8ou0QZoAibDwCw86NwFo+jjAtaR4Xi2Hncazf2AlhOoFvsC3DzgYQt4ZAmK3ExnueYeeBNUGYA2EbbsWw0xDuMjTCHAT6oG0YdhqDRhhjwB3CM+w0hI4whnA7h2bYaVAAhDGAOlBIhp2Ni4EwjYEOGo5hZ6PCIEwjkA7CMOxsUCSEaQDRUQiGnZXFQphKgE6XM+zcWTiE2QkuwDKGnTuKiDA7oAVbwrBzQ0ERZgOswI8y7FxZXIRZCSrJYww7ryg0wiQxYUOaDDsvgYUwGzop2aMMOy8oOMIks2Bjugw7T4AhzMYOSvg4w85F0REmoQE7U2bY6exLVjP/XrKdPd58WfphJzdM855KETDtsBNhUvS3SZIph50IY9JLqYKmGnYiTKreNks2zbATYcx6KGXg8MNOhEnZ16ZJhx52Ioxp76QNHnbYiTBpe/qQxMMNOxHmkL5JvUmoYSfCpO7lQ5MPMexEmEN7Jv1m7oedCJO+h7sAcDvsRJgu/cKmklwOOxGG3u1NwNWwE2F6twv7FwJuhp0IQ8OOQsDFsBNhRmkXzjETGHrYiTA06ogEhh12IsyI7cKZZgLDDTsRhuYcncBQw06EGb1dON9MYIhhJ8LQkJ4IlGHnh5Lu9To0wvQiz74uCSCMy7Jx6F4EEKYXefZ1SQBhXJaNQ/cigDC9yLOvSwII47JsHLoXAYTpRZ59XRJAGJdl49C9CCBML/Ls65IAwrgsG4fuRQBhepFnX5cEEMZl2Th0LwII04s8+7okgDAuy8ahexFAmF7k2dclAYRxWTYO3YsAwvQiz74uCSCMy7Jx6F4EEKYXefZ1ScCTMH9I+tQlZQ4dgcAP5XcJeBImAnRycE4AYZwXkOMfSwBhjuXNbs4JIIzzAnL8YwkgzLG82c05AYRxXsCNxy/fwfKjpO8kvdi4lsclIUyeNihfIfFU0l+Sbkt6mSf1dpkiTDuWI0e6Kenx4oCPkGZfuRBmHzdvq+5Iur849F1JD7wlMcJ5EWaEKtif4bqkh5I+knRD0nP7LWPugDAx63qaVXmz/2T6l+XlGW/4d9YdYXaCc7aMN/yNCoYwjUAOHqZ87d0zSbcWN83gRx7zeAgzZl1an2r5pp9PyCroIkwFPEdL5xumHJlPyCoKhzAV8FiajwDC5Ks5GVcQQJgKeCzNRwBh8tWcjCsIIEwFPJbmI/Av/KS6xX+ZZ+sAAAAASUVORK5CYII=",
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
      let M1 = "data:image/png;base64,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";
      let M2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAC2CAYAAAABfcunAAAWnElEQVR4Xu2dC/B+RVnHP2YmaRgQaY7mBTPxBlkRmBp5IbQsVCp0BANRES84qGCZIpeKUVAUJTRQKVAkQ8RbQkoXATUaS7OESEAdUBOGJhVtLG2+89+V5XTe33vu79k935155/97/+/ZZ3e/z37P3p59ntvhZASMQFEI3G7k1rwKOG7kMizeCBiBBIGxSf09YOwyrFAjYARMavcBI1AuAmOPoh6py+07btlMETCpZ6oYV8sIdEXApO6KnPMZgZkikCupHwFcGjC9CHg6cFP4rr/PCX8fA5wQ/n4AcB6we/h+IPCOGejl3sAdgX+bQV1chQIQKIHUnwYOAK4Cfhg4BTisQuoqoaPqHglctgE97g0cDewB3AJcCZwPnLGBurjIwhAogdRSSRx1q+SNI3UcveNz8Xs6kk+l2iOBhwNnAVcAXwsF/wlwV+BJU1XE5ZSJQO6kfgtwH+A6QGT52TAtF1mPByJpXwnsn4zocfo+9RT8twB9fntFd9oPeDdwF+DbZXY5t2psBHIntUirJJJq9H1e+Pt04L0JqVMc4xR9r4TkY+Ms+SpPSwON0lul+wJ/C9xrikq5jPIQKIHU14SNMU1bDw+jttanF9eQOl1zT7mevifwceAnG3ahYwGd8dvEtiFgfuxWBEog9Z+HXe2vAncDTgrE1u54umbeFKGFtkbe30zWz0364BfDrONLTR72M0YgIlACqf84HE3tGxqlEVgpJfUmCX0woN3uQ1p2u8cBLwP2aZnPjy8cgRJIrXNobYRpYyyeWe9aIXV6dp2qfIrdby0PHgtc26GvnQtcCLyrQ15nWSgCpZA67mZHkqbfT66cXU9Jar1MnhCO3Lp0se2AG4CdumR2nmUikCupc9GWjEp0TCXDmK7pNWEtrr0CJyOwFgGTei1EnR/QWXQ8G+8sBLg/8EHgp/sIcd7lIGBSj6frfwaeBnx2gCK0e659g78bQJZFFI6AST2Ogn89HGH9zkDiZfmm3f2DBpJnMQUjYFKPo9wPAW8E/nJA8d8CdrT56ICIFirKpB5esT8CfBnYfmDRpwJXh5fFwKItriQETOrhtXlosO9+1sCidwPOTu6DDyze4kpBwKQeXpMygHltsD0fWvongRcCfz+0YMsrBwGTelhd7hAsx7T2HSNp9N8TePYYwi2zDARM6mH1+Bzg5xLPK8NK3ybtEuAxYwi2zDIQMKmH1eNHgT8MxBtW8q3S3gZ8DHj7WAVYbt4ImNTD6e/HgjnozsOJrJWkW2gnAo8auRyLzxQBk3o4xcnryoOB5w8ncqUkeR79tXDENUFxLiInBEzq4bT1N4ACAsqkc+z0e+Ec/OVjF2T5+SFgUg+jM3kB1TGTnCBOkeThRa6Rf2KKwlxGXgiY1MPoayyDk61qp5tbpwEySXUyAt9HwKQepjMo0odI9s5hxDWSIp9nCmIgl8NORsCkHrgPyNb7YcBXBpa7Ttx/AfcAvr7uQf++HAQ8UvfX9QNDyJwH9RfVWsLrgwXbG1rndIZiETCp+6tWR1gi9gv6i2ot4aHBN/hTWud0hmIRMKn7q1aBA7Smfk9/UZ0kvB9Q+KEPdMrtTMUhYFL3V+nNgELl/Gd/UZ0kKDTvnwI/0ym3MxWHgEndT6XaHHtrCMzXT1K/3Aqqp9jbf9FPzGxz68Ul89s7hM8PAp8LIYBnW+lNVcyk7of8S4C7Ay/tJ6Z3bgUvuCCs7XsLm4EAbTrqJtqjw0fWeooE+p3wuSkEHLxzCOCgJcj7ZlDvWVTBpO6nhjkZgJwTfKJpfZ9reirw4nBE96/AX4ePljh1SQEH5ZBRG5U/BSi/fLktOpnU/dQ/J2eAMlEVCbS+zympD2rGIzLLbv51wBUdGvAbITyRfK0P6fCxQ1U2m8Wk7o6/4kzLbdEvdhcxeE6t7y8DdOc6h/S7wNFhX0JklhFP36TTCG0cLnY6blJ370K/Dyia5iu6ixg8p9b3Gq21xp5z0nr5DEBhiHXjbOg0p2XR0G1bK8+kXgvRygem8HLSpXYa+eSwQWFw55bkPllk1q02+VlTRNCx0mLvnJvU3bvUnH2FXQwooN5fdW/e4Dl1k01mrSLzVKF556yjwQGOAk3qbtD+cnCIoCOXuabvArcHvjeDCurI6fLghmnK6hwOyJRWXmkWk0zqbqo+NpDluG7ZJ8mldavW/Qp4v6m0V3DCqAigmzJjHTJQ4aZwbFWuSd0Kru8/PKXrom413Jbrj8KZrxwVTp30QnliMCLZ5NmxHDTKw+svTQ3ApsozqdsjL8z+F/iB9lk3kkNuluTL7CMTlq5NxI/P6GTgXODCCdfyE0L9/4syqdvDr3W0YkXn4lBfOhbBjgr+wtu3uHkOWXQpoMEfjOz7vHmNtj2piCmfB3ZqmzHH503q9lrTOloj9fHts240hwLWyyhDBipDJ53Xa0f7FuBpQwsfSN4c7QoGatptxZjU7WEVOdRBFCUjt3QmcCMgS66h0jOBNwW767lbcV0P7AHcMFTj5yjHpG6nFa2jdVNIR0W5Jhml/ALwDOCbPRqhW1MyyfwioDPoHNJ+wCHAk3KobNc6mtTtkJvDMVG7Gtc/LfdHfxa8tbw5nCE3kbtd8GCqIyq92E6eeAOuSR3XPXN6ME+VOW2RyaRup9YTgP8OG0Htcs7z6YOA5wIy31Rn11myyPo/4aO9A62TnxzIvE9wxiCb7Vz9jT8CeDWgmGRFJpO6nVq1jtYFhEvbZZv907sB0frqnoA8i+gjgv8T8NVAZlmGlZBkPqoXdJGjtUndvIuqg2uUVmd3yhuB3I4lW6G9jtS67SNPGnqr6Z5u2yS743VltJW5qecfF24+aQrqlD8Cmm1p07BLv55165sSTsYWOpeVK9ojW7iMKYnUMqiQuaNMDp3yR+DxwIuAJ+TflNu2oCmpY64HhLWVvDseGEbxrTApidSasbwR+ERpnWDB7ZHbJO0l/ENJGLQlddr2OHrr/7STWDeNKYXUPwp8AdihJOW7Lcivmc7YdX5dTGpL6pTIx4S1tsDQ/ytQW3VqXgqpNSuR10odATmVhcBngKcDuqJZRGpCajVY7meVLgoAyO9ymjQt1x1jxZNKfyuF1HKUL+spnc86lYWAQgHrI4OaItI6Unv3e5uaZYAhLDZ5L7iIDjfTRlwZpuBXzbR+raq1jtSthNU8XMJI7aOsvr1g/vk1G9UuuJZZ2ad1pI4jtdaTW6V0fZ0+VwKpFftZd3FPzV7bbsBWCGhpeRhwXe4wrSO12qe3mDaI9G9cL0eynx2OtbRRpiQjldJILTe28vN1be7Kdv23ROCFwP2BI3LHaR2pt1pTyzBeZBbZFZGwxI2yB4dz+YfkrmjXvxECJcws15pwLp3UuryxffDx1ahX+KGsEdAS6+pgZJRtQ9aN1E2n3xqt5bWxtHNq+apW8Db5+HIqHwFFzlRwPU3Ds01NSK3GaapdvW4Yrcj022nhvm31SCDn6YxmKWqPlhZOy0FA98RlDpxt5MympO6q0pxJfTCwd3B/07X9zpcfAjra0qbZr+ZX9W01XkdqeYk8BdAud5crajmT+p3BQ+bcnenl2vfmXG+tq0Xuf59zJVfVbR2pNQWVp0jtbHextsmV1HcITvl+KEelus69Ecj6eGsdqeNG2S41Z9BNkMuV1M8C9gwRGpu008+Uh0CufXft9HudRdmqCx5RxbkCU6ovsvKoN16Lsj3eajJS94EtR1JrVqK4zvfr03DnzR6BbI+3mpI6vX4ZXavKdHSda6McSZ1DmNrsGZNJA7I83mpC6ugAQaFm5J8r7oSvsvdO9ZUjqWXjLW+T2Rv2Z0KcOVczy+OtdaROd78VXiU93lrlGCFnUiuGsS6l6HzayQgIgeyOt/qQOr3QUfWEkutGmSJC6jz+be7PRiAgkN3x1jpSxyMt2XWn0295ipB3zXj1clUPyG36rXAzdwyhat2rjYAQUBAHRSjJxly4CanVsDrb79JcBBfl/cJ8HBSBs0KIHsX3nn1qSuquDclppL4YOCkcZ3Vtr/OViYBOfE4MNxFn30KTepuK7hPsvPeavcZcwU0hkI1zwiakTqNyVAEtxaLsDOCTwJmb6jEud/YIHAX8OHD03Gu6jtTxltb1Bdt++9703HvpPOq3Y3BAudM8qrO6FutIvYRbWicDXwZeO3dluX4bR0ABHXTq856N12SLCqwjden3qRVrWg76ddXSyQisQyALC7N1pFYjV/kfWweAfp/77vcrwrl0NHlt0iY/s2wEtBTdA7hhrjCsI3XpVy+/GTY/FFbHyQg0QUBx2r/TcY+pifzez6wjdd8C5jxSZ2f+11cZzj8IAvcCdN/+3oNIG0HIkkk9+2nUCPq2yGEQmLWhUlNSl3afWnfBHwTIWb+TEWiLgMLe7h/cYrfNO/rzTUhd2n3q7YCbAe3sOxmBrgh8Hbg78I2uAsbKt47UJd6nfhdwQYiRNRaulls+AvIt8AXg9XNrah9S53ifOotzxrl1EtenFoHZBk9cR2q1Jp5Tl3CfWvdiHwr8hzuqERgAAcVYk5++TwwgazARTUitwkq4T/3qEF/7NYOhZ0FLR+BQ4OGA/MTPJjUlddcKz+WcWjvd7wY0ZXIyAkMicAnwmCEF9pW1FFKfB8gS6F/6Aub8RqCCwOnAp4E3zwWZJZD6o8G1sd6oTkZgaAR2C776dh9acFd5pZNa1+Q+CCiCpZMRGAuBy4GXANo423gqmdS6Hy1T0NdtHGVXoHQEZKG4D/CMOTS0VFLrSuX2wMvmALLrsAgEZnPjr0RSyyvFhUAW7lwX0d2X0cjZeNApidRPDRsWzwbkp9nJCEyJwGyiZJZA6jsHO24Z2GttoygbTkZgEwgoBLKMnD6yicJjmTmS+ueDOxm5lIluZRQgXLvcTkZgkwjsB+jzzE1WIjdSvwp4InBF8vnsJgF02UaggsDnw074NZtCJjdSbwonl2sEmiJwcAiFfEjTDEM/Z1IPjajlGQFQLHddgvrSJsAwqTeBusssHQHd2toT0EnM5MmknhxyF7gQBBT15WHAV6Zur0k9NeIubykIHB4ccjxv6gbnSOrUs2mKl66/HQBcFZwKyoeUQtTq+ZuSB6PDB8UcvmxqwF3eLBGocwISKxr7Sex3df1GvykqZux/Me+NgKLGpv1vdAByJfUuNRESBKyMTyKJ6yJ2xrC8zzehR+9bORUgUqvvyDWRYqvFpP8/LSGrPOvq/9KBIkaxOaGmTx0B3A940ZRglETqOnAjiU8KkQo1encNyzulXlzWtAisInUcGBSRQ9d4Yx/TDE8kVopx2OL3as0n3wkvndQCOI7g1wW0q2/jabuPS5sjAk1Jrbqny7dI6uoSL23j48NILU+2k6SSSF2dfkcA49t2r5o1zyQgu5DZI9B0+h0bor6mu9N3A5os5XRz8Ozgb350MHIl9Tk1yFxUsymmx+IUXO5mDgzTqNGBdQFZIbBqoyzdfE0bVLdfs1WDdwY+FyKsjg5MrqRON8rSdbPWPavAl4+ydNNjdHBdQDYIVEfqurVztTFaS8u+u9rnVjX65YBuFMp//qipBFILoFXHVNXdyrrdy1EBtvAsEKibfm81WKhRbUmtPNrX2TuE6xkNmFJIHUGOkQh1Vl09jtAzTd7Ao4FtwbNFYNWaequz6S6kfizwnLGjZZZE6rjOkcHJG4APrVhDx1Hd6+vZcmzyiq0idd1gESvXhdTKq76p65nyATBKypHUowBhoUZgQgQ+BShkzz+OUaZJPQaqlmkEtkbgTsDXwsbZ4FiZ1INDaoFGoBEC+wazVBmnDJpM6kHhtDAj0AqBqqlpq8yrHjapB4HRQoxAZwSOAa4Gzu0soZLRpB4KScsxAt0RkEthXTqSVWTvZFL3htACjMAgCHwYeBPwgb7STOq+CDq/ERgOgfcDbwXe20ekSd0HPec1AsMjcAHwPuDtXUXnSOrUcqx6jzX+Jjx8b7prr1hmvlWWhpvoUycGb6Qye765rTpyJLXauMqGW4qR+Z7IrvO/uiuaq67TtcXOz5eHQN19AfWne4RB4ikT9qlHA+cH32eakjdOuZJaDazezNrKV1RjQPzg4hFIb/LtOoPrumcCtwfOAC5vop2cSa32pQqIrlhX+YpqgoefMQJxcPgM8CsNPZuMjZpmnerrOwZyi+DfWFVo7qSO650dAH228hU1NvCWXw4CcRYow5A5DRIPDFE/FPnjdODbwLXhnnb8l9xJrW5kt7/lkGkuLdGoeHwwBpnrQPFk4CHAfYN/e/17FnBcCaTWdEmH9scGR/5z6RiuR54IxM0yRa98bo4upU3qPDueaz0OAlUXRutcGo1Ti55STeqeADp7MQis8hC6KqTObBtuUs9WNa7YhAg0MWiqi8s2YRWbF1UCqZu31k8agQUgYFIvQMlu4rIQMKmXpW+3dgEImNQLULKbuCwETOpl6dutXQACJvUClOwmLgsBk3pZ+nZrF4CASb0AJbuJy0LApF6Wvt3aBSBgUi9AyW7ishAwqZelb7d2AQiY1AtQspu4LARM6mXp261dAAIm9QKU7CYuCwGTeln6dmsXgMDYpL4EkP9iJyNgBMZHQC69RvdRNn4zXIIRMAK3QWDskdpwGwEjMDECJvXEgLs4IzA2Aib12AhbvhGYGAGTemLAXZwRGBsBk3pshLvJrwYokJvaRxUYnrca1FCRMZT6hrpZdIAHk7ob6cbOtZROOVak0qXgV9sPTerm9NRoeVdg3/B5JPAp4BTgsCDmLZXRNEZ42D38Xo2NXf39QODDwDtCGcqmcuRzOh2pIxlUFyXlUx4l1VPl3SWpV/p7XYtj7Cj9dlEl0KDkxTjf1d+iv+zY/jSgnNp2aCjsKCD+lsoTXmqbRubLQmTHOFKrTorsGPGOWOg5pVXY3liDn/JUMZtb8LvmPXHNkyZ1cyirkRpih/5YQqh0+lgN3BefV4lHAncK+WKHTketKyvxwdLpd8x3dsgf88XvkTR6Gagz1wVST1tdndqn3xVk/aCE5Potfr8lvNCuD6SsRrioC1mT5r8pkFiB6GJdU/z09/7AASFGWpp3Z+C8JMxsHbZpfLXqjKBOd817wsyfNKmbK6ja+UUWdXAR9FtBzLppX5Uwq9bJW62pRbRqPtVFJJB8xTKuG9XjyyNt8VbT37rfUjJcl5QpgsbR81TgiPA9/n0VUEekrdbU1fW1XhKpvKrmqi++lNT6bZfKWl3yZIH1AiDWv3lvmPGTJnVz5dSNaHFamkqpTrGr0744RX9pyFS3KbQVqevypR20Dam3Isqq30S2a0Ldqy+XtN56JCXhVi8JzTLqpt9xKl59YeglobQKW81mUlKny4tUV9XlRPPeMOMnTermytlqmhpH6rpRUGvCuKZNZZjUt47ebUmdrpvrsK0jdfqCaK71DJ80qZsrrW76Hae8ddO3uum5p9+Q7kF0nX5rTV1d+qybfpd4JFjbe03q7qSuC32arm13raw59dulQJx+VzfK0jWndsCra8LYKZtslDVdU6v1W72sNJXvs1FWXQOn+DTZKFs1/Rap0xdqHbZ1G2VxM7Gu3c17wsyfNKmbK6jOAKS6pquu0dK1nMh8PnBSsqNbPZZJj1liXk0vldocabUhtWSn9azuCfQ50qrb2ErlvTgcWa060tpqTb0O2xQ/HfdVsa4ePzbvCTN/0qSeuYJcPSPQFgGTui1ift4IzBwBk3rmCnL1jEBbBEzqtoj5eSMwcwRM6pkryNUzAm0R+D8IsnECKgv1wAAAAABJRU5ErkJggg==";

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
  }
];
