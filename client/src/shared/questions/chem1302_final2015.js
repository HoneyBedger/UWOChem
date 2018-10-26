import React, {Component} from 'react';
import MathJax from 'react-mathjax';

export const questions = [
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
      let answer = -Math.log10(cH);
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
        image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACTCAMAAABBLvDtAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAUtSURBVHic7ZzbjqsgFIa98/1fkUNVPFBKTXvHBkSnVhS0oiTbP5m0mRnkU9YBWLRJcunSpcACGSHp2RBWvQQjJef4bI6piMjUSyWiY4OCdG84PxdkqpdAX2+iUSPMG9w/vmhEL7QNitjWoKi6N/F5aMRxTY3kgxD+LM7msAkIQvD7fTaGVcpJL7S1utC26ELbogttiy60LbrQtuhC26ILbYuCovVLtmHptkoX2pbWtfxJ8x1xPvUbWlBFjdbrbJKJon5q49eINEIrVm75wEoaQhNqy+MTrRAPsKZtJkqo8LIQYCO0Qj6CekVTKErTdNUNeesPrdB+uiJ+VgYJZWHQBnVk4gm9W3AWEOdDqA9v/v0JGpDnUzdu2ErfFoehJcAkhvbm2YAdNKBKRavZuKdVl70bhIoen0IPzda4/1NB9cGjEVA+8tDFR1BrNufGca4rjZmohpCLGQ1dPcjUoLbLvdwY7UIMbj4SVc6rwPENMhVBFjqBNbM7Cih56IpQuZSwpv1Xf0F6lno33Z5CzFj1dNTAyDKHsQ4lGeKsCQvdp7aef0XenL/Dmhxpp2YDam4JYFR8Vc/Am4daY3WaPjRiN3Lp0d9PCVK2aXqJcTcm0Kc1wNgwpo/aOk64Fe3ULm8PMu5NXgmOXqddEcHkCKhrEdHF9AXJaEqp0OZVzT2HcmZCoImI4Ka3odQ8V3IGjOl+lP8ptDrXC3BgR0SiAaqNzEOW8TV6LMyjmK6UvjS6C42YUrSq+yq0ptDbFmrXQlKArwdDuzw/VIutN6uTh/1vfW9EEbrQej+HYILGUVLItC5HDxTdSKP+IktZq1jIa9z0BtS9OdDQ56/taCxNUtaN9MuncH3XMzzrdGA4PaPXH1hUWOllR8Or0IgPWquneNbpLv5C41SJbUar5YBm3YD6oIE6S8S9tR5Z+EZz2JoxaIBGaKVEk1ELjE0G95NXuJwVRVJbF6JgcB+19HKhNeb2Suk7ffAgs8GjvzRb3g6RfyXWCzSGGIuXG838HinjIM79FzOimeNczux1UHdvgKkg5EKT3dBUOgkDLjQd4yrpVXm5FNYW0ZJU9ZZxHeadaAkklDbahrKlVWTW6qULLtmzcjnDwi2CF6VVZ7GIjl83Cj3ats/q7rXmgRtzoJaTif6pR4WWP2UUHQJVRGhyLFXmGewrGjQ1luPE40ZDh5xeA0+zIfMX/mNBS3CuZhLtx6w1GjSZXGg72imKB60pQDvaX4sGTc1EnqMsEQuaIkvy0SwiErTGMo+OA81GFgealSwKNDtZDGgzZB5o+LE3y1hzZB5oHhOAXzRLdjraPNnZaAtkJ6MtkclVhqt5QLRFMg+FQ/uVLBzaz2TB0H4nC4XmIoOlXH3r1VU5W1sOg+YiK0WJcbfnQWc9NbvvTKXkIjM7RS+1zzaPVngUdtfKRTZs3TVHozk9IP0sqR+J5vbN0V7ugWgeUeMkNJ94lp2C5hVph5IEqY5D88wBpkYF1MbRQWi+2QmJBurKHjoKzT9vIjrUQw9BW5XRhyoymi3v7Ye2w1xjrNJRVvDW7mS7nU7fn2wvtABkO6GFINsHLQjZLmhhyPZAC0S2A1oa6tPpkX5WSeknNBD0211+QQMs6JcgvLdbSspFjN/PkOgDM2mkaBBKujjRkuT/RUOEbP+URlC0SlSE863Hv0OidS7Gt34oIiQa1mtV9/mkuebB3aCKFg34fHjiFHXHY2MUoHPH7M9W4NnDD+q2RGJUvGQyojVEKUI/yAiJFe3SpUvb9Q8fYgTmBAvC2wAAAABJRU5ErkJggg==";
        ox1 = 1;
        ox2 = 3;
      } else if(i == 2) {
        image = "data:image/png;base64,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";
        ox1 = 3;
        ox2 = 1;
      } else if(i == 3) {
        image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACTCAMAAABBLvDtAAADAFBMVEX///+AAAAAgACAgAAAAICAAIAAgIDAwMDA3MCmyvD/8NT/4rH/1I7/xmv/uEj/qiX/qgDckgC5egCWYgBzSgBQMgD/49T/x7H/q47/j2v/c0j/VyX/VQDcSQC5PQCWMQBzJQBQGQD/1NT/sbH/jo7/a2v/SEj/JSX+AADcAAC5AACWAABzAABQAAD/1OP/scf/jqv/a4//SHP/JVf/AFXcAEm5AD2WADFzACVQABn/1PD/seL/jtT/a8b/SLj/Jar/AKrcAJK5AHqWAGJzAEpQADL/1P//sf//jv//a///SP//Jf/+AP7cANy5ALmWAJZzAHNQAFDw1P/isf/Ujv/Ga/+4SP+qJf+qAP+SANx6ALliAJZKAHMyAFDj1P/Hsf+rjv+Pa/9zSP9XJf9VAP9JANw9ALkxAJYlAHMZAFDU1P+xsf+Ojv9ra/9ISP8lJf8AAP4AANwAALkAAJYAAHMAAFDU4/+xx/+Oq/9rj/9Ic/8lV/8AVf8ASdwAPbkAMZYAJXMAGVDU8P+x4v+O1P9rxv9IuP8lqv8Aqv8AktwAerkAYpYASnMAMlDU//+x//+O//9r//9I//8l//8A/v4A3NwAubkAlpYAc3MAUFDU//Cx/+KO/9Rr/8ZI/7gl/6oA/6oA3JIAuXoAlmIAc0oAUDLU/+Ox/8eO/6tr/49I/3Ml/1cA/1UA3EkAuT0AljEAcyUAUBnU/9Sx/7GO/45r/2tI/0gl/yUA/gAA3AAAuQAAlgAAcwAAUADj/9TH/7Gr/46P/2tz/0hX/yVV/wBJ3AA9uQAxlgAlcwAZUADw/9Ti/7HU/47G/2u4/0iq/yWq/wCS3AB6uQBilgBKcwAyUAD//9T//7H//47//2v//0j//yX+/gDc3AC5uQCWlgBzcwBQUADy8vLm5uba2trOzs7CwsK2traqqqqenp6SkpKGhoZ6enpubm5iYmJWVlZKSko+Pj4yMjImJiYaGhoODg7/+/CgoKSAgID/AAAA/wD//wAAAP//AP8A//8AAABYWvgoAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAVVSURBVHic7ZzbkqsgEEV98/9/EWU0eGEIsZK3PoCa0YiCBJSq466ZMpWLrNhN0w2YJLl06VJgoYKQ9GwIrZ7ASMU5PptjKQKFPNQQHVsGpH/A+bkgSz0h/3gQjVoYHuDx8kUjeqE5KGJfy6DuH8TXQyOOa9KSd0L443Y2h04ICMGv19kYWslOeqHt1YXmogvNRReaiy40F11oLrrQXHShuSgQWlZRWqu0vqCu5wiDVkGFcaWqIgLGd68oCBrp66CnrIrc0Rrxn5beoJTQWES2X6GFUNrXkL3iQiPTujZ6NNRmZ9HMVCzQ0C8wdBrPRO/ZTlL3aIIMoNl7llp8qPU95UG5ukQIqEJTZAD74kABVSbxCvNb9ygH6VqIybkxAgMZdHtmyjKo1JGCZ0fIKVDxJ1kIlDBoj7vVA1JeePdRhHHfJzOc/DwGth3uxplvIr0yNrDZz5aBc1awV6+97nYcWpJ2io3beg47yKBSg1Fby7dXYzfwHT20qm3dTUKNwaOFLEE0+OJjKY3aGeN7qVYaC6jfIRczGnr1IGdmd/thtI86uJ0MVCWvA4/BqBHNbfW9rGE/+k9WPPSKkDTqahvL9uu/XGqV2pvyO8BKE0uroVmveds6lIRRHzq/yX+Xvl5+WL/kr7Aud+uWEQQ1XBPAKHysnqEX91xjfWhpFqJ3cuGYn1cpo8wpvcS4t0lm8+l3cpKk90ZrJ9xBt4y2P3cyb02cKZsdl00RYMIC8lwq694GE9F0TOnqtetQiVBTaZ5XRAT40Np7qXltyRkxptqBtEdrSlWAIz2iSISRSoQznX0H3WX+ufIaU7XRU6Gb0MiwFC3XfSVae1PTFnLWQlCgjwszlA/v1WLtl1UDm/61sTVVWJrQxn6eoQUaz5ObSDmE9dCtt3Q+nmRrbLx16ykeH1pTkxgGtHz6tB6NpUnKeks/bRauVbmjCTTJpJ5Uexsw1FjqqUfDu9CIDVqn0k/tkIs/0DiVYs5ojTBo0RvUBg01RQK/nXbLwieawdcGh0b5DK0SaCJqobnL4DF5zbZHRUgabSH6nidTpZcJrR2+XiX6zhg8yGrwGE/NtieSxKtEe4J2IMbwNKMNz+fDbIJBg0ULw76c1fPk/XdDTAYhE5pohqaikzBkQlMxrha9qqy2wtomWpLK1gquwrwRLckIpa3yoc1p76JTZRWu2KM2dYaNr4ielNa9x+Z0fnRUfu+6cVQ315oHTmmiRiQT41WPCq18iCj6DlQRoQlbzgrRaNCkLecDjxktP2T3Ghom2bq/8B8LWoJLmUl0k6w1GjQxuNBuNq0QD1p7Q103rY6jQZOZyGM2SsSCJsmScpZFRILWavLoONB0ZHGgacmiQNOTxYC2QmaBhu++WeZaI7NAs0gAvtEq2elo62Rno22QnYy2RSaqDNPHA6JtklkoHNq3ZOHQviYLhvY9WSg0E9nfFrdKN5WsFAbNRDbZ4kZXe2rx65lKykQ23eK2jnazXXTeIRPZbIvboWjGHjDb4nYkmrlvzuZyD0SziBonodnEs+IUNKtIO9vidhSa5Rgw3eJ2EJrt6DTd4nYMmv24OdnidgjarhH9vYqcry7v+UPzkGvMVRmWFazlnczb7nT/ZL7QApB5QgtB5gctCJkXtDBkPtACkXlAS0PdnR7pvUpSX6GhoL/u8g0aYkF/BOHl7ikphxh/nyFRG2bSSNGyTNDFiZYk/y9aToj7XRpB0WqoCeeu279DovVdjLveFBESData1fnOuvDdoI4WDVnf2HG0+u2xMQpRiPOX60JnD1+onxKJUfGSiYjWEqkI+0FBSKxoly5dctc/Y8Y6f4XEItAAAAAASUVORK5CYII=";
        ox1 = 3;
        ox2 = 3;
      } else if(i == 4) {
        image = "data:image/png;base64,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";
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
    "_id": 334,
    "courseId": "1302",
    "examName": "Final 2015",
    "chapterId": 5,
    "idInExam": 34,
    "type": "numeric",
    "questionBody": function() {
      let kString = (Math.random()*(197 - 105) + 105).toPrecision(3);
      let k = Number.parseFloat(kString);
      let cString = (Math.random()*(0.0900 - 0.00500) + 0.00500).toPrecision(3);
      let c = Number.parseFloat(cString);
      let answer = k*c;
      let ansString = answer.toPrecision(3);

      var description = (
        <p>For the reaction A &#8594; Products, a plot of ln[A] as a function of time
        gives a straight line with a slope of &#8211;{kString}&nbsp;s<sup>&#8211;1</sup>.
        What is the rate of the reaction when [A] = {cString}&nbsp;M?</p>
      );

      const eqRateLaw = `\\ln{[\\text{A}]_t} = -kt + \\ln{[\\text{A}]_{\\circ}}`;
      const eqRate = `\\begin{eqnarray*}
        Rate & = & k[\\text{A}] \\\\
        & = & (${kString} \\text{ s}^{-1})(${cString} \\text{ M}) \\\\
        & = & ${ansString} \\text{ mol L}^{-1}\\text{ s}^{-1}
        \\end{eqnarray*}`;

      var feedback = (
        <React.Fragment>
          <MathJax.Provider>
            <p>A straight-line plot of ln[A] as a function of time indicates
            that the reaction is first order and its integrated rate law is</p>
            <MathJax.Node formula={eqRateLaw}/>
            <p>Therefore, the slope is just the negative of the specific rate
            constant.</p>
            <p>Given the <i>k</i> value from the slope, use the rate law to find the rate:</p>
            <MathJax.Node formula={eqRate}/>
          </MathJax.Provider>
        </React.Fragment>
      );

      return {description, answer: {
        answer,
        label: (<React.Fragment><i>Rate</i></React.Fragment>),
        units: "mol/(L s)"
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
        {text: (<p>If the concentration of Cl<sub>2</sub> is doubled, the rate will decrease by 1/2.</p>),
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
