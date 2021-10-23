function consonants_count(str1) {
  var consonant_list = 'bcdfghjklmnpqrstvwxyz';
  var c_count = 0;

  for (var x = 0; x < str1.length; x++) {
    if (consonant_list.indexOf(str1[x]) !== -1) {
      c_count += 1;
    }
  }
  return c_count;
}

function calculate() {
  var text = document.getElementById("textenter").value
  var data = (text.match(/[aeiou]/g) || []).length
  var data1 = consonants_count(text.toLowerCase())
  var count = (text.match(/\d/g) || []).length
  
  document.getElementById("message1").style.display = "block";
  document.getElementById("message2").style.display = "block";

  document.getElementById("string").innerHTML = text
  document.getElementById("vowels").innerHTML = data
  document.getElementById("const").innerHTML = data1
  document.getElementById("int").innerHTML = count
}

function myFunction() {
  document.getElementById("textenter").value = "";
  document.getElementById("message1").style.display = "none";
  document.getElementById("message2").style.display = "none";
}
