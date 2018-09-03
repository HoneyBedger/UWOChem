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
}
