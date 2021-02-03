console.log('userPrefService');

const COLOR_KEY = 'DB';
const USER_DATA = 'USER-DB'
const astrological = ['you gonna be a billionaire', 'you gonna die', 'nothing is going to happen']

function saveColorToStorage(color) {
  saveToStorage(COLOR_KEY, color);
}

function  saveUserToStorage(userDate){
    saveToStorage(USER_DATA, userDate);

}

function showAstrological(birthDate){
    let astrolog = astrological[Date.now()%2]
    alert(astrolog)
}

