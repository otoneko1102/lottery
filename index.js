window.addEventListener('DOMContentLoaded', function() {
  var drawButton = document.getElementById('drawButton');
  var resultParagraph = document.getElementById('result');
  var selectionTypeSelect = document.getElementById('selectionType');
  var numOfResultsInput = document.getElementById('numOfResults');
  var formContainer = document.getElementById('formContainer');
  var choiceForm = document.getElementById('choiceForm');
  var numberForm = document.getElementById('numberForm');
  var numOfResultsNumberInput = document.getElementById('numOfResultsNumber');
  var minValueInput = document.getElementById('minValue');
  var maxValueInput = document.getElementById('maxValue');

  selectionTypeSelect.addEventListener('change', function() {
    if (selectionTypeSelect.value === 'choice') {
      choiceForm.style.display = 'block';
      numberForm.style.display = 'none';
    } else if (selectionTypeSelect.value === 'number') {
      choiceForm.style.display = 'none';
      numberForm.style.display = 'block';
    }
  });

  drawButton.addEventListener('click', function() {
    var selectionType = selectionTypeSelect.value;
    var numOfResults = 0;
    var results = [];

    if (selectionType === 'choice') {
      var choicesTextarea = document.getElementById('choices');
      if (!choicesTextarea.value) {
        resultParagraph.textContent = '選択肢を入力してください';
        return;
      }
      var choices = choicesTextarea.value.split('\n');
      numOfResults = parseInt(numOfResultsInput.value);
      for (var i = 0; i < numOfResults; i++) {
        var randomIndex = Math.floor(Math.random() * choices.length);
        results.push(choices[randomIndex]);
      }
    } else if (selectionType === 'number') {
      var minValue = parseInt(minValueInput.value);
      var maxValue = parseInt(maxValueInput.value);
      numOfResults = parseInt(numOfResultsNumberInput.value);

      if (isNaN(minValue) || isNaN(maxValue)) {
        resultParagraph.textContent = '正しい数値を入力してください';
        return;
      }

      if (minValue > maxValue) {
        resultParagraph.textContent = '最小値は最大値以下にしてください';
        return;
      }

      for (var i = 0; i < numOfResults; i++) {
        var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        results.push(randomNumber);
      }
    }

    resultParagraph.textContent = 'Result: ' + results.join(', ');
  });
});
