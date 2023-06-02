const key = document.getElementById('key')
let address = document.getElementById('address')
let birthday = document.getElementById('birthday')
let wine1 = document.getElementById('wine1')
let wine2 = document.getElementById('wine2')
const submit = document.getElementById('submit')
const clear = document.getElementById('clear')

// クリックしたらローカルストレージに保存
submit.addEventListener(
  'click', function (event) {
    // Functionの中に入れることで、ボタンを押した時に実行されるようになる
    const data = {
      address: address.value,
      birthday: birthday.value,
      wine1: wine1.value,
      wine2: wine2.value
    };
    const value = JSON.stringify(data);
    event.preventDefault();
    console.log(key.value, value)
    localStorage.setItem(key.value, value)
  });

// クリックしたらローカルストレージ内を消去
clear.addEventListener(
  'click', function () {
    localStorage.clear()
  });

// ローカルストレージからデータを取得し、コンソールに表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  const value = localStorage.getItem(key)
  console.log(key, value)
}

// Searchボタンを押すと、Keyを元にローカルストレージからデータを取得し、HTMLに表示する
const search = document.getElementById('search')


