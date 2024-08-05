// function calculate(operation) {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     let result;

//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Lütfen geçerli sayılar giriniz');
//         return;
//     }

//     switch (operation) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             if (num2 === 0) {
//                 alert('bir reqem 0 a bolunmez');
//                 return;
//             }
//             result = num1 / num2;
//             break;
//     }

//     document.getElementById('result').innerText = 'Sonuç: ' + result;
// }

// function tersineCevir() {
//     var metin = document.getElementById("inputText").value;
//     var tersMetin = metin.split("").reverse().join("");
//     document.getElementById("sonuc").innerText = tersMetin;
// }

// misya 3
// function changeDivStyle() {
//     var width = document.getElementById('width').value;
//     var height = document.getElementById('height').value;
//     var borderWidth = document.getElementById('borderWidth').value;
//     var borderStyle = document.getElementById('borderStyle').value;
//     var borderColor = document.getElementById('borderColor').value;
//     var textColor = document.getElementById('textColor').value;
//     var backgroundColor = document.getElementById('backgroundColor').value;

//     var div = document.getElementById('myDiv');
//     if (width) div.style.width = width + 'px';
//     if (height) div.style.height = height + 'px';
//     if (borderWidth) div.style.borderWidth = borderWidth + 'px';
//     if (borderStyle) div.style.borderStyle = borderStyle;
//     if (borderColor) div.style.borderColor = borderColor;
//     if (textColor) div.style.color = textColor;
//     if (backgroundColor) div.style.backgroundColor = backgroundColor;
// }



// function changeWidth() {
    
//     const input = document.getElementById('widthInput').value;
//     const div = document.getElementById('myDiv');
//     const newWidth = 200 + parseInt(input, 10);
//     div.style.width = newWidth + 'px';
// }


// misyon 5
// function clearDisplay() {
//     document.getElementById('display').innerText = '0';
// }

// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     if (display.innerText === '0') {
//         display.innerText = value;
//     } else {
//         display.innerText += value;
//     }
// }

// function calculateResult() {
//     const display = document.getElementById('display');
//    try {
//         const result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
//        display.innerText = result;
//     } catch (error) {
//         display.innerText = 'Error';
//    }
// }

// function openModal(modalId) {
//     document.getElementById(modalId).style.display = "flex";
// }

// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = "none";
// }


// mision son




document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all open accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current accordion item
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});