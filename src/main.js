import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Haiku from './js/haiku-logic.js';

$(document).ready(function() {
  $("form#haiku").submit(function(event) {
    event.preventDefault();
    let haiku = new Haiku();
    haiku.line1 = $("input#input-lineOne").val();
    haiku.line2 = $("input#input-lineTwo").val();
    haiku.line3 = $("input#input-lineThree").val();
    const numLine1 = haiku.getNumSyllables(haiku.line1);
    const numLine2 = haiku.getNumSyllables(haiku.line2);
    const numLine3 = haiku.getNumSyllables(haiku.line3);
    if (numLine1 === 5 && numLine2 === 7 && numLine3 === 5) {
      $("#yes").show();
    } else {
      $("#no").show();
    }
  });
});