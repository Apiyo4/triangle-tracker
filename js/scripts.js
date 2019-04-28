function triangleTracker() {
  var value1 = parseInt(document.getElementById("a").value);
  var value2 = parseInt(document.getElementById("b").value);
  var value3 = parseInt(document.getElementById("c").value);
  var output = document.getElementById("output");
//conditions
if (((value1 + value2 > value3) && (value1 + value3 > value2) && (value2 + value3 > value1)) && (value1 !== 0 || value2 !== 0 || value3 !== 0)) {
  if (value1 === value2 && value2 === value3) {
    output.textContent="I'm an equilateral triangle";
  } else if ((value1 !== value2 && value1 !== value3) && (value2 !== value1 && value2 !== value3)){
    output.textContent="I'm a scalene triangle";
  } else if ((value1 === value2 && value1 !== value3) || or(value1 === value3 && value1 !== value2) || (value2 === value3 && value2 !== value3)) {
    output.textContent="I'm an isosceloes triangle";
  }
} else {
  output.textContent="I'm not a triangle";
}
}
